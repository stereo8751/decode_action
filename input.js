/**************************************
脚本名称：中国人保 app 日常任务 自动兑换e卡默认关闭，可在boxjs打开
脚本作者：@Sliverkiss
更新日期：2024-02-17 21:12:56
------------------------------------------
脚本兼容：QuantumultX、Loon、Node.js
只测试过QuantumultX，其它环境请自行尝试

2024.11.08 更换新活动，修复登录失败的问题
2024.05.23 增加App更新任务

定时一天一次，一次获取ck永久有效

*************************
【 签到脚本使用教程 】:
*************************

单账号&多账号： 
1.将获取ck脚本拉取到本地
2.打开app->微信登录，提示获取cookie成功则可以使用该脚本
3.关闭获取cookie脚本，防止产生不必要的mitm

QuantumultX配置如下：

[rewrite_local]
^https:\/\/zgrb\.epicc\.com\.cn\/G-BASE\/a\/user\/login\/thirdPartyLogin\/v1 url script-request-body https://gist.githubusercontent.com/Sliverkiss/9b83fb700558a95e7400a4f719a4892b/raw/zgrbV2.js

[MITM]
hostname = zgrb.epicc.com.cn

====================================
⚠️【免责声明】
------------------------------------------
1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。
******************************************/


// env.js 全局
const $ = new Env("中国人保");
const ckName = "zgrb_data";
//-------------------- 一般不动变量区域 -------------------------------------
const Notify = 1;//0为关闭通知,1为打开通知,默认为1
const notify = $.isNode() ? require('./sendNotify') : '';
let checkEnvJSON = 'true';//多账号格式 true=>[{},{}],false=>str@str
let envSplitor = ["@"]; //多账号分隔符
let userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || '';
let userList = [];
let userIdx = 0;
let userCount = 0;
// 调试
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata('is_debug')) || 'false';
// 调试
$.is_ecard = ($.isNode() ? process.env.ZGRB_ECARD : $.getdata('zgrb_ecard')) || 'false';
// 为多用户准备的通知数组
$.notifyList = [];
// 为通知准备的空数组
$.notifyMsg = [];
//---------------------- 自定义变量区域 -----------------------------------

//脚本入口函数main()
async function main() {
    //await getNotice();
    $.log('\n================== 任务 ==================\n');
    for (let user of userList) {
        try {
            console.log(`🔷账号${user.index} >> Start work`)
            console.log(`随机延迟${user.getRandomTime()}ms`);

            const token = await user.Login();
            const dailyCode = await user.getDailyCode(token);
            const dailyToken = await user.getDailyToken(dailyCode);
            // let summerCode = await user.getSummerCode(token);
            // let summerToken = await user.getSummerToken(token, summerCode);
            // let summerCookie = await user.getSummerLogin(token, summerToken);
            // await user.completeSummer(summerCookie, 1)
            let { mobilePhone } = await user.getUserInfo(token) ?? {};
            const pointF = await user.myScoreAccount(dailyToken);
            if (user.ckStatus) {
                const signMsg = await user.dailySign(dailyToken);
                $.log("签到" + signMsg);
                let taskList = await user.getTaskList(dailyToken);
                //领取app版本更新奖励
                await user.updateReward(dailyToken);
                taskList.push({ id: "11", name: "中国人保APP版本更新" });

                //taskList = taskList.filter(e => !e.doneTime);
                if (!taskList.length) $.log(`今日任务已全部完成!`), taskList = [];

                const taskPromises = taskList?.map(task => user.complete(dailyToken, task.id));

                const taskResults = await Promise.all(taskPromises);

                taskResults?.forEach((msg, index) => {
                    $.log(`${taskList[index].name}: ${msg}`);
                });
                //盲盒自动抽奖
                // let changeCount = await user.getChanceCount(dailyToken) ?? 0;
                // while (changeCount > 0) {
                //     await user.draw(dailyToken);
                //     changeCount--;
                // }
                // await $.wait(3e3);
                const pointE = await user.myScoreAccount(dailyToken);
                user.title = `${mobilePhone ? phone_num(mobilePhone) : ""}获得${pointE - 0 - pointF}积分`;
                DoubleLog(`查询成功！当前可用积分:${pointE}`);
                //查询商品库存
                $.log('\n-----------商品库存------------\n')
                let products = await user.productList(dailyToken) ?? [];
                if (products?.length) {
                    const productPromises = products?.map(product => user.productInfo(dailyToken, product.id));
                    const productResults = await Promise.all(productPromises);
                    productResults?.map(product => {
                        $.log(`${product.name} 价格:${product?.minPrice} 库存:${product?.mainGoodsStock}`);
                    });
                }
                if ($.is_ecard != 'false') {
                    if (pointE >= 2500) {
                        $.log(`积分满足条件,开始自动兑换e卡...`);
                        let id = await user.createTempOrder(dailyToken);
                        if (id) {
                            $.log(`创建订单成功!${id}`);
                            let orderId = await user.submitOrder(dailyToken, id);
                            $.log(`提交订单成功！${orderId}`);
                            let cardpass = await user.queryClientOrderDetails(dailyToken, orderId);
                            $.log(`查询卡密成功！详情如下:`)
                            DoubleLog("兑换e卡成功！请及时绑定卡密信息:");
                            DoubleLog(cardpass);
                            //将卡密复制到粘贴板
                            user.copyMsg = cardpass;
                        } else {
                            $.log(`创建订单失败！`);
                        }
                    } else {
                        DoubleLog(`距离兑换e卡还需${2500 - pointE}积分`);
                    }
                }
            } else {
                //将ck过期消息存入消息数组
                $.notifyMsg.push(`❌账号${user.index} >> Check ck error!`)
            }
        } catch (e) {
            $.log(e);
        }
        //账号通知
        $.notifyList.push({
            "id": user.index,
            "title": user.title,
            "message": $.notifyMsg,
            "avatar": user.avatar,
            "copyMsg": user.copyMsg,
            "openUrl": user.openUrl,
        });
        //清空数组
        $.notifyMsg = [];
    }
}

class UserInfo {
    constructor(user) {
        this.index = ++userIdx;
        this.userId = user.userId;
        this.thirdPartyId = user.thirdPartyId || user;
        this.deviceId = user.deviceId || "";
        this.token = user.token;
        this.ckStatus = true;
        this.buyStatus = true;
        this.headers = {
            "Content-Type": "application/json",
            'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f37) NetType/WIFI Language/zh_CN",
        };
    }
    getRandomTime() {
        return randomInt(1000, 3000)
    }
    //请求二次封装
    Request(options, method, onlyBody = true) {
        typeof (method) === 'undefined' ? ('body' in options ? method = 'post' : method = 'get') : method = method;
        return new Promise((resolve, reject) => {
            $.http[method.toLowerCase()](options)
                .then((response) => {
                    let res = onlyBody ? response.body : response;
                    res = $.toObj(res) || res;
                    resolve(res);
                })
                .catch((err) => reject(err));
        });
    };
    getBody(data) {
        return JSON.stringify({
            ...data,
            skey: this.skey
        })
    }
    //登录
    async Login() {
        try {
            const options = {
                url: `https://zgrb.epicc.com.cn/G-BASE/a/user/login/thirdPartyLogin/v1`,
                headers: {
                    'Content-Type': `application/json`,
                    'Host': `zgrb.epicc.com.cn`,
                    'User-Agent': `aasi/6.21.7 (iPhone; iOS 15.4.1; Scale/3.00)`,
                },
                body: `{"head":{"appInfo":{"appVersion":"6.21.7","appBuild":"274"},"tags":{"tags":[],"tagsLogin":[]},"adCode":"450100","deviceInfo":{"deviceId":"${this.deviceId}","osType":"iOS","deviceModel":"iPhone14,4","osVersion":"15.400","romType":"","romVersion":""},"userId":""},"body":{"signInType":"0","thirdPartyId":"${this.thirdPartyId}"},"uuid":"${guid()}"}`
            };
            //post方法
            let res = await this.Request(options, "post", false);
            let header = ObjectKeys2LowerCase(res?.headers);
            let body = JSON.parse(res?.body)
            if (body?.message.includes("登录成功")) {
                let newData = {
                    "token": header.authorization,
                    "thirdPartyId": this.thirdPartyId,
                    "userId": body.data?.userId,
                    "deviceId": this.deviceId
                }
                debug(newData, "登录信息");
                //更新缓存token
                this.token = newData.token;
                const index = userCookie.findIndex(e => e.thirdPartyId == newData.thirdPartyId);
                userCookie[index] = newData;
                $.setjson(userCookie, ckName);
                return newData.token;
            }
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //获取签到页面code
    async getDailyCode(token) {
        try {
            const options = {
                url:"https://piccapp.picc.com.cn/G-OPEN/oauth2/authorize/v1?client_id=7nbv5z4zS86jhGDCt5XuwfWI&scope=auth_user&response_type=code&state=7c026b95-b457-405d-b681-93ee1ae4b655&redirect_uri=https%3A%2F%2Fdop.picc.com.cn%2Fdop%2Fscoremall%2Fuser%2FappLoginCallback%3FafterLoginRedirectUrl%3Dhttps%2525253A%2525252F%2525252Fmp.picclife.cn%2525252Fdop%2525252Fscoremall%2525252Fmall%2525252F%25252523%2525252FdailyAttendance%2525253Fapply%2525253Dapp",
                headers: {
                    "Cookie": `w_a_t=${token}`,
                    'User-Agent': `aasi/6.21.7 (iPhone; iOS 15.4.1; Scale/3.00)`,
                },
                followRedirect: false, // NodeJS禁止重定向
                "auto-redirect": false,//Loon、Surge禁止重定向
                opts: {
                    redirection: false // 圈X禁止重定向
                }
            };
            let res = await this.Request(options, "get", false);
            debug(res);
            let header = ObjectKeys2LowerCase(res?.headers);
            let queries = getQueries(header.location)
            $.log(`获取签到Code成功！`);
            return queries.code;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //获取用户信息
    async getUserInfo(token) {
        try {
            const options = {
                url: "https://zgrb.epicc.com.cn/G-BASE/a/user/userInfo/queryUserInfo/v1",
                headers: {
                    'Accept-Encoding': `gzip, deflate, br`,
                    'Cookie': `w_a_t=${token}`,
                    'Connection': `keep-alive`,
                    'Content-Type': `application/json`,
                    'Accept': `*/*`,
                    'Host': `zgrb.epicc.com.cn`,
                    'User-Agent': `aasi/6.21.9 (iPhone; iOS 15.4.1; Scale/3.00)`,
                    'Authorization': token,
                    'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
                },
                body: `{"head":{"appInfo":{"appVersion":"6.21.9","appBuild":"276"},"tags":{"tags":[],"tagsLogin":[{"tagId":0,"tagName":"picc-bloc","tagWeight":-1}]},"adCode":"450100","deviceInfo":{"deviceId":"${this.deviceId}","osType":"iOS","deviceModel":"iPhone14,4","osVersion":"15.400","romType":"","romVersion":""},"userId":"${this.userId}"},"body":{},"uuid":"${guid()}}"}`
            };
            let res = await this.Request(options);
            if (!res?.data) throw new Error(res?.message);
            debug(res);
            return res?.data;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //获取签到页面token
    async getDailyToken(code) {
        try {
            const options = {
                url:`https://dop.picc.com.cn/dop/scoremall/user/appLoginCallback?afterLoginRedirectUrl=https%253A%252F%252Fmp.picclife.cn%252Fdop%252Fscoremall%252Fmall%252F%2523%252FdailyAttendance%253Fapply%253Dapp&code=${code}&client_id=7nbv5z4zS86jhGDCt5XuwfWI&state=7c026b95-b457-405d-b681-93ee1ae4b655`,
                headers: {
                    //"Host": "mp.picclife.cn",
                    'User-Agent': `aasi/6.21.7 (iPhone; iOS 15.4.1; Scale/3.00)`,
                },
                followRedirect: false, // NodeJS禁止重定向
                "auto-redirect": false,//Loon禁止重定向
                opts: {
                    redirection: false // 圈X禁止重定向
                }
            };
            let res = await this.Request(options, "get", false);
            debug(res);
            let header = ObjectKeys2LowerCase(res?.headers);
            let appToken = header["set-cookie"].toString().match(/(app-token)=.+?;/g);
            let [, token] = appToken[0]?.split("=");
            token = token?.split(';')[0];
            $.log(`获取签到页面token成功！`);
            return token;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //签到  
    async dailySign(token) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/coupon/ut/signIn`,
                headers: {
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.21.7 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.21.7`,
                },
                body: `{ }`
            };
            let res = await this.Request(options);
            debug(res);
            return res?.resultMessage;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //商品列表
    async productList(token) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/goods/search/pageProductSearch`,
                headers: {
                    'x-app-auth-url': `https://mp.picclife.cn/dop/scoremall/mall/#/classify`,
                    'Connection': `keep-alive`,
                    'Accept-Encoding': `gzip, deflate, br`,
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'Origin': `https://mp.picclife.cn`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.22.2 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.22.2`,
                    'x-app-auth-token': token,
                    'Host': `mp.picclife.cn`,
                    'Referer': `https://mp.picclife.cn/dop/scoremall/mall/`,
                    'x-app-score-platform': `picc-app`,
                    'X-Tingyun': `c=B|X3uMs5ZM4Dg;x=c2b040bb9e804914`,
                    'Accept': `application/json, text/plain, */*`,
                    'Accept-Language': `zh-CN,zh-Hans;q=0.9`
                },
                body: `{"page":1,"pageSize":10,"id":"","name":"","minPrice":"","maxPrice":"","brandName":[],"allOrMax":0,"descOrAcsList":[],"seckill":0}`
            };
            let res = await this.Request(options);
            debug(res);
            return res?.result?.details;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //商品库存
    async productInfo(token, id) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/goods/search/queryProductInfoForWeb`,
                headers: {
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.21.7 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.21.7`,
                },
                body: `{"id":"${id}"}`
            };
            let res = await this.Request(options);
            debug(res);
            return res?.result;

        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //查询任务列表
    async getTaskList(token) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/coupon/ut/task/list`,
                headers: {

                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.22.2 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.22.2`,
                },
                body: `{ "type":2 }`
            };
            let res = await this.Request(options);
            debug(res);
            return res?.result?.taskList;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //更新App版本
    async updateReward(token) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/coupon/ut/task/list`,
                headers: {

                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.22.2 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.22.2`,
                },
                body: `{"type":1,"ver":"i1MNTmD0a8qbzg3AQvodKzg1XQVSndr4gz4iL0oh3befMEBBNsKdyA4V7ATR6us2FVBPw6AAJYH/gstgWpdf9+Hg+c5gq32ztdRF69bW+tyASbnaPHch91zL/PFh+AlkEOOMPNIs/Lc9Cx1TcfiYW0eTL29MN9og4qbCWPNBAW+06Q6dwsPBLEt/a6N3vO8RbAXVvDfXWrlqbc1M9QvCDKIEOM4bR74tITSxmgRlFVZEorOMWZh3szChGSLrdwDmAWjmYbfrlau5LWNQYqwC8L+OlqpRb8bynfO4ipAwKN/7uLZnojSkV1x86bELTt9u/L0HP0GF3cAqhw/9dB8G5g==","localizedModel":"","platform":""}`
            };
            let res = await this.Request(options);
            debug(res);
            return res?.result?.taskList;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //完成任务
    async complete(token, id) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/coupon/ut/task/complete`,
                headers: {
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    //'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.21.7 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.21.7`,
                    'x-app-auth-url': `https://mp.picclife.cn/dop/scoremall/mall/#/dailyAttendance?apply=app`,
                    'Connection': `keep-alive`,
                    'Accept-Encoding': `gzip, deflate, br`,
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'Origin': `https://mp.picclife.cn`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.22.2 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.22.2`,
                    'Host': `mp.picclife.cn`,
                    'Referer': `https://mp.picclife.cn/dop/scoremall/mall/`,
                    'x-app-score-platform': `picc-app`,
                    'X-Tingyun': `c=B|X3uMs5ZM4Dg;x=852436cd58bd457b`,
                    'Accept': `application/json, text/plain, */*`,
                    'Accept-Language': `zh-CN,zh-Hans;q=0.9`
                },
                body: `{"taskId" : "${id}","businessId" : "${generateCurrentTime()}"}`
            };
            let res = await this.Request(options);
            debug(res);
            return res?.resultMessage;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //查询积分
    async myScoreAccount(token) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/score/internal/scoreAccount/queryMyScoreAccount`,
                headers: {
                    'x-app-auth-url': `https://mp.picclife.cn/dop/scoremall/mall/#/dailyAttendance?apply=app`,
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.21.7 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.21.7`,
                    'Host': `mp.picclife.cn`,
                    'Referer': `https://mp.picclife.cn/dop/scoremall/mall/`,
                    'x-app-score-platform': `picc-app`,
                    'X-Tingyun': `c=B|tV_cscse5A0;x=13dac0b326954a15`,
                },
                body: `{ }`
            };
            let res = await this.Request(options);
            if (!res?.success) throw new Error(res?.resultMessage || "未知错误，请检查配置是否正确");
            debug(res);
            return res?.result?.availableScore;
        } catch (e) {
            this.ckStatus = false;
            $.logErr(e);
        }
    }
    //查询抽奖次数
    async getChanceCount(token) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/coupon/blindBox/getChanceCount`,
                headers: {
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.21.7 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.21.7`,
                    'Host': `mp.picclife.cn`,
                    'x-app-score-platform': `picc-app`,
                },
                body: `{ }`
            };
            let res = await this.Request(options);
            debug(res);
            $.log(`当前剩余盲盒抽奖次数：${res?.result?.leftCount}`);
            return res?.result?.leftCount;
        } catch (e) {
            $.log(`❌查询盲盒抽奖次数失败!原因为:${e}`)
        }
    }
    //盲盒抽奖
    async draw(token) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/coupon/blindBox/draw`,
                headers: {
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.21.7 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.21.7`,
                    'Host': `mp.picclife.cn`,
                    'x-app-score-platform': `picc-app`,
                },
                body: `{"drawType":0}`
            };
            let res = await this.Request(options);
            debug(res);
            const productName = res?.result?.blindBoxGoodsVO?.productName;
            if (!productName.match(/谢谢参与/)) {
                DoubleLog(`恭喜中奖！获得${productName}`);
            }
            return productName || res?.resultMessage;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //创建e卡订单
    async createTempOrder(token) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/order/ut/order/createTempOrder`,
                headers: {
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.21.7 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.21.7`,
                    'Host': `mp.picclife.cn`,
                    'x-app-score-platform': `picc-app`,
                },
                body: `{"goodsList":[{"count":1,"goodsId":"946008294354575362"}],"requestId":${ts13()}}`
            };
            let res = await this.Request(options);
            debug(res);
            return res?.result?.id;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //提交订单
    async submitOrder(token, id) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/order/ut/order/submitOrder`,
                headers: {
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.21.7 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.21.7`,
                    'Host': `mp.picclife.cn`,
                    'x-app-score-platform': `picc-app`,
                },
                body: `{"id":"${id}"}`
            };
            let res = await this.Request(options);
            debug(res);
            return res?.result?.orderId;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //获取订单详情  
    async queryClientOrderDetails(token, id) {
        try {
            const options = {
                url: `https://mp.picclife.cn/dop/scoremall/order/orderInfo/queryClientOrderDetails`,
                headers: {
                    'x-app-score-channel': `picc-app001`,
                    'x-app-auth-type': `APP`,
                    'x-app-auth-token': token,
                    'Content-Type': `application/json;charset=UTF-8`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.21.7 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.21.7`,
                    'Host': `mp.picclife.cn`,
                    'x-app-score-platform': `picc-app`,
                },
                body: `{"id":"${id}"}`
            };
            let res = await this.Request(options);
            debug(res);
            return res?.result?.virtualOrderCardInfoDTO?.cardPsss;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //获取活动code
    async getSummerCode(token) {
        try {
            const options = {
                url: "https://zgrb.epicc.com.cn/G-OPEN/oauth2/authorize/v1?client_id=5TuIXelNdOotDUWXRhPid1NZ&scope=auth_user&response_type=code&state=eyJzb3VyY2VfZW50cnkiOiIiLCJhY3Rpdml0eV9zb3VyY2UiOiIiLCJhY3Rpdml0eV9jb2RlIjoiQXBwQ3VzdG9tZXIyNCIsInBsYXRmb3JtIjoiNyJ9&redirect_uri=https%3A%2F%2Fm.picclife.cn%2Fcust%2Fapi%2Factivity-access-code%2Fget-token",
                headers: {
                    "Cookie": `w_a_t=${token}`,
                    'User-Agent': `aasi/6.21.7 (iPhone; iOS 15.4.1; Scale/3.00)`,
                },
                followRedirect: false, // NodeJS禁止重定向
                "auto-redirect": false,//Loon、Surge禁止重定向
                opts: {
                    redirection: false // 圈X禁止重定向
                }
            };
            let res = await this.Request(options, "get", false);
            debug(res);
            let header = ObjectKeys2LowerCase(res?.headers);
            //let queries = getQueries(header.location)
            $.log(`获取夏日福利派Code成功！`);
            debug(header.location);
            return header.location
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //获取夏日福利派token
    async getSummerToken(token, e) {
        try {
            const options = {
                url: e,
                headers: {
                    "Cookie": `w_a_t=${token}`,
                    'User-Agent': `aasi/6.21.7 (iPhone; iOS 15.4.1; Scale/3.00)`,
                },
                followRedirect: false, // NodeJS禁止重定向
                "auto-redirect": false,//Loon禁止重定向
                opts: {
                    redirection: false // 圈X禁止重定向
                }
            };
            let res = await this.Request(options, "get", false);
            debug(res);
            // let appToken = header["set-cookie"].toString().match(/(app-token)=.+?;/g);
            // let [, token] = appToken[0]?.split("=");
            // token = token?.split(';')[0];
            // $.log(`获取签到页面token成功！`);
            //return token;
            let header = ObjectKeys2LowerCase(res?.headers);
            //let queries = getQueries(header.location)
            $.log(`获取夏日福利派token成功！`);
            return header.location
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //获取夏日福利派Cookie
    async getSummerLogin(token, e) {
        try {
            const options = {
                url: e,
                headers: {
                    "Cookie": `w_a_t=${token}`,
                    'User-Agent': `aasi/6.21.7 (iPhone; iOS 15.4.1; Scale/3.00)`,
                },
                followRedirect: false, // NodeJS禁止重定向
                "auto-redirect": false,//Loon禁止重定向
                opts: {
                    redirection: false // 圈X禁止重定向
                }
            };
            let res = await this.Request(options, "get", false);
            debug(res);
            let header = ObjectKeys2LowerCase(res?.headers);
            let [session, stoken] = header["set-cookie"].toString().match(/(session_id|PICC_APP_CUSTOMER2024)=.+?;/g);;
            // let [, stoken] = appToken[0]?.split("PICC_APP_CUSTOMER2024=");
            // stoken = stoken?.split(';')[0];
            // debug(stoken);
            // $.log(`登录夏日福利派成功！`);
            return session + stoken;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }
    //获取夏日福利派sign
    getSign(o) {
        const { timestamp, id, cj, game } = o ?? {};
        let result = `${game ?? ''}${id ?? ''}${cj ?? ''}${timestamp ?? ''}##$#gsgs123232`;
        result = $.CryptoJS.MD5(result).toString();
        $.log(result);
    }
    //完成夏日福利派任务
    async completeSummer(token, id) {
        try {
            let timestamp = ts13();
            const options = {
                url: `https://piccapp-2024khj.maxrocky.com/api/task/complete`,
                headers: {
                    'Connection': `keep-alive`,
                    'Accept-Encoding': `gzip, deflate, br`,
                    'X-Tingyun': `c=B|X3uMs5ZM4Dg;x=b59791cd84d646f0`,
                    'Host': "piccapp-2024khj.maxrocky.com",
                    'Content-Type': 'application/json',
                    'sign': this.getSign({ timestamp: timestamp, id: id }),
                    'Cookie': token,
                    'Origin': `https://piccapp-2024khj.maxrocky.com`,
                    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 PBrowser/3.16.0 PiccApp/6.22.2 &&webViewInfo=3.16.0&&appInfo=piccApp&&appVersion=6.22.2`,
                    'Referer': `https://piccapp-2024khj.maxrocky.com/home?source_entry=2`,
                    'Accept': `application/json, text/plain, */*`
                },
                body: `{"timestamp": ${timestamp},"id":${id}}`
            };
            let res = await this.Request(options);
            debug(res);
            //return res?.resultMessage;
        } catch (e) {
            $.log(`❌${$.name}执行失败!原因为:${e}`)
        }
    }

}

//获取参数
function getQueries(url) {
    const [, query] = url.split("?");
    //分割参数
    return query
        ? query.split('&').reduce((obj, cur) => {
            const [key, val] = cur.split('=')
            obj[key] = val
            return obj
        }, {})
        : {};
}

//获取Cookie
async function getCookie() {
    try {
        if ($request && $request.method === 'OPTIONS') return;

        const body = $.toObj($request.body);

        if (!body?.body?.thirdPartyId) {
            $.msg($.name, `❌获取token失败!`, $.toStr(body));
            return;
        }

        const newData = {
            "thirdPartyId": body?.body?.thirdPartyId,
            "deviceId": body?.head?.deviceInfo?.deviceId
        }

        userCookie = userCookie ? $.toObj(userCookie) : [];
        const index = userCookie.findIndex(e => e.thirdPartyId == newData.thirdPartyId);

        userCookie[index] ? userCookie[index] = newData : userCookie.push(newData);

        $.setjson(userCookie, ckName);
        $.msg($.name, `🎉更新token成功!`, `账号[${newData.thirdPartyId}]数据已刷新缓存`);
    } catch (e) {
        $.msg($.name, "", e);
    }

}
//13位时间戳
function ts13() { return Math.round(new Date().getTime()).toString(); };
//uuid
function guid() {
    function S4() { return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//隐蔽手机号
function phone_num(phone_num) { if (phone_num.length == 11) { let data = phone_num.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2"); return data; } else { return phone_num; } }

function generateCurrentTime() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    const formattedTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;

    return formattedTime;
}


async function getNotice() {
    const urls = ["https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/notice.json", "https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/tip.json"];
    for (const url of urls) {
        try {
            const options = { url: url, headers: { "User-Agent": "" } };
            const result = await httpRequest(options);
            if (result) console.log(result.notice);
        } catch (e) {
            console.log(e);
        }
    }
}

//主程序执行入口
!(async () => {
    if (typeof $request != "undefined") {
        await getCookie();
    } else {
        if (!(await checkEnv())) throw new Error(`❌未检测到ck，请添加环境变量`);
        $.CryptoJS = await loadCryptoJS();
        if (userList.length > 0) await main();
    }
})()
    .catch(e => $.notifyMsg.push(e.message || e))
    .finally(async () => {
        await SendMsgList($.notifyList)
        $.done({ ok: 1 });
    });

/** --------------------------------辅助函数区域------------------------------------------- */

// 双平台log输出
function DoubleLog(data) {
    if (data && $.isNode()) {
        console.log(`${data}`);
        $.notifyMsg.push(`${data}`);
    } else if (data) {
        console.log(`${data}`);
        $.notifyMsg.push(`${data}`);
    }
}

// DEBUG
function debug(text, title = 'debug') {
    if ($.is_debug === 'true') {
        console.log(`\n-----------${title}------------\n`);
        console.log(typeof text == "string" ? text : $.toStr(text));
        console.log(`\n-----------${title}------------\n`);
    }
}

//检查变量
async function checkEnv() {
    if (!userCookie || (Array.isArray(userCookie) && userCookie.length == 0)) {
        console.log("未找到CK");
        return;
    }

    const e = envSplitor.find(o => userCookie.includes(o)) || envSplitor[0];
    userCookie = checkEnvJSON == 'true' ? JSON.parse(userCookie) : userCookie.split(e);
    userList.push(...userCookie.filter(Boolean).map(n => new UserInfo(n)));
    userCount = userList.length;

    return console.log(`共找到${userCount}个账号`), true;//true == !0
}

/**
 * 随机整数生成
 */
function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//多账号通知兼容
async function SendMsgList(userList) {
    for (const user of userList) {
        await SendMsg(user.message.join('\n'), user.title || "", {
            $media: user.avatar || "",
            $open: user.openUrl || "",
            $copy: user.copyMsg || ""
        });
    }
}

// 发送消息
async function SendMsg(message, title = "", obj) {
    if (!message) return;
    if (Notify > 0) {
        if ($.isNode()) await notify.sendNotify($.name, message);
        else $.msg($.name, title, message, obj);
    } else {
        console.log(message);
    }
}

//加载CryptoJS模块
async function loadCryptoJS() {
    let code = ($.isNode() ? require('crypto-js') : $.getdata('CryptoJS_code')) || '';
    //node环境
    if ($.isNode()) return code;
    //ios环境
    if (code && Object.keys(code).length) {
        console.log(`[INFO] 缓存中存在CryptoJS代码, 跳过下载\n`)
        eval(code)
        return createCryptoJS();
    }
    console.log(`[INFO] 开始下载CryptoJS代码\n`)
    return new Promise(async (resolve) => {
        $.getScript(
            'https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/CryptoJS.min.js'
        ).then((fn) => {
            $.setdata(fn, 'CryptoJS_code')
            eval(fn)
            const CryptoJS = createCryptoJS();
            console.log(`[INFO] CryptoJS加载成功, 请继续\n`)
            resolve(CryptoJS)
        })
    })
}

/** ---------------------------------固定不动区域----------------------------------------- */
// prettier-ignore
function ObjectKeys2LowerCase(obj) { const _lower = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])); return new Proxy(_lower, { get: function (target, propKey, receiver) { return Reflect.get(target, propKey.toLowerCase(), receiver) }, set: function (target, propKey, value, receiver) { return Reflect.set(target, propKey.toLowerCase(), value, receiver) } }) };
//请求函数函数二次封装
function httpRequest(options, method) { typeof (method) === 'undefined' ? ('body' in options ? method = 'post' : method = 'get') : method = method; return new Promise((resolve) => { $[method](options, (err, resp, data) => { try { if (err) { console.log(`${method}请求失败`); $.logErr(err) } else { if (data) { typeof JSON.parse(data) == 'object' ? data = JSON.parse(data) : data = data; resolve(data) } else { console.log(`请求api返回数据为空，请检查自身原因`) } } } catch (e) { $.logErr(e, resp) } finally { resolve() } }) }) }
//From chavyleung's Env.js
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise(((e, i) => { s.call(this, t, ((t, s, o) => { t ? i(t) : e(s) })) })) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise((e => { this.get({ url: t }, ((t, s, i) => e(i))) })) } runScript(t, e) { return new Promise((s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); o = o ? 1 * o : 20, o = e && e.timeout ? e.timeout : o; const [r, a] = i.split("@"), n = { url: `http://${a}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: o }, headers: { "X-Key": r, Accept: "*/*" }, timeout: o }; this.post(n, ((t, e, i) => s(i))) })).catch((t => this.logErr(t))) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), o = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let o = t; for (const t of i) if (o = Object(o)[t], void 0 === o) return s; return o } lodash_set(t, e, s) { return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce(((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}), t)[e[e.length - 1]] = s), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), o = s ? this.getval(s) : ""; if (o) try { const t = JSON.parse(o); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e), r = this.getval(i), a = i ? "null" === r ? null : r || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, o, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const r = {}; this.lodash_set(r, o, t), s = this.setval(JSON.stringify(r), i) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))) } get(t, e = (() => { })) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, ((t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i) })); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then((t => { const { statusCode: s, statusCode: i, headers: o, body: r, bodyBytes: a } = t; e(null, { status: s, statusCode: i, headers: o, body: r, bodyBytes: a }, r, a) }), (t => e(t && t.error || "UndefinedError"))); break; case "Node.js": let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", ((t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } })).then((t => { const { statusCode: i, statusCode: o, headers: r, rawBody: a } = t, n = s.decode(a, this.encoding); e(null, { status: i, statusCode: o, headers: r, rawBody: a, body: n }, n) }), (t => { const { message: i, response: o } = t; e(i, o, o && s.decode(o.rawBody, this.encoding)) })); break } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, ((t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i) })); break; case "Quantumult X": t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then((t => { const { statusCode: s, statusCode: i, headers: o, body: r, bodyBytes: a } = t; e(null, { status: s, statusCode: i, headers: o, body: r, bodyBytes: a }, r, a) }), (t => e(t && t.error || "UndefinedError"))); break; case "Node.js": let i = require("iconv-lite"); this.initGotEnv(t); const { url: o, ...r } = t; this.got[s](o, r).then((t => { const { statusCode: s, statusCode: o, headers: r, rawBody: a } = t, n = i.decode(a, this.encoding); e(null, { status: s, statusCode: o, headers: r, rawBody: a, body: n }, n) }), (t => { const { message: s, response: o } = t; e(s, o, o && i.decode(o.rawBody, this.encoding)) })); break } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } queryStr(t) { let e = ""; for (const s in t) { let i = t[s]; null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`) } return e = e.substring(0, e.length - 1), e } msg(e = t, s = "", i = "", o = {}) { const r = t => { const { $open: e, $copy: s, $media: i, $mediaMime: o } = t; switch (typeof t) { case void 0: return t; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: t }; case "Loon": case "Shadowrocket": return t; case "Quantumult X": return { "open-url": t }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: { const r = {}; let a = t.openUrl || t.url || t["open-url"] || e; a && Object.assign(r, { action: "open-url", url: a }); let n = t["update-pasteboard"] || t.updatePasteboard || s; if (n && Object.assign(r, { action: "clipboard", text: n }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [t] = i.split(";"), [, o] = i.split(","); e = o, s = t.replace("data:", "") } else { e = i, s = (t => { const e = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (var s in e) if (0 === t.indexOf(s)) return e[s]; return null })(i) } Object.assign(r, { "media-url": t, "media-base64": e, "media-base64-mime": o ?? s }) } return Object.assign(r, { "auto-dismiss": t["auto-dismiss"], sound: t.sound }), r } case "Loon": { const s = {}; let o = t.openUrl || t.url || t["open-url"] || e; o && Object.assign(s, { openUrl: o }); let r = t.mediaUrl || t["media-url"]; return i?.startsWith("http") && (r = i), r && Object.assign(s, { mediaUrl: r }), console.log(JSON.stringify(s)), s } case "Quantumult X": { const o = {}; let r = t["open-url"] || t.url || t.openUrl || e; r && Object.assign(o, { "open-url": r }); let a = t["media-url"] || t.mediaUrl; i?.startsWith("http") && (a = i), a && Object.assign(o, { "media-url": a }); let n = t["update-pasteboard"] || t.updatePasteboard || s; return n && Object.assign(o, { "update-pasteboard": n }), console.log(JSON.stringify(o)), o } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(e, s, i, r(o)); break; case "Quantumult X": $notify(e, s, i, r(o)); break; case "Node.js": break }if (!this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map((t => t ?? String(t))).join(this.logSeparator)}`)) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map((t => t ?? String(t))).join(this.logSeparator)}`)) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map((t => t ?? String(t))).join(this.logSeparator)}`)) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map((t => t ?? String(t))).join(this.logSeparator)}`)) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.map((t => t ?? String(t))).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, e, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack); break } } wait(t) { return new Promise((e => setTimeout(e, t))) } done(t = {}) { const e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(t, e) }
