//Fri Mar 27 2026 00:56:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
console.log("\n◇◇◇◇◇◇◆◆◇◇◇◇◇◇◇◇◇◇◇◆◆◇◇◇◇◇◆◆◇◇\n◇◇◇◇◇◇◇◆◆◇◇◇◇◇◇◇◇◇◇◆◆◇◆◇◇◇◆◆◇◇\n◇◇◇◇◇◇◆◆◆◆◆◆◆◇◇◇◇◇◇◇◆◇◆◆◇◇◆◇◇◇\n◇◇◆◆◆◆◆◆◆◆◆◆◆◇◇◇◇◇◇◇◆◇◇◆◇◇◆◇◇◇\n◇◇◇◇◇◆◇◇◇◇◇◇◇◇◇◇◇◇◇◆◆◇◇◆◇◇◆◇◇◇\n◇◇◇◇◇◆◇◇◆◆◆◇◇◇◇◇◇◇◇◆◆◇◇◆◇◇◆◇◇◇\n◇◇◇◇◆◆◆◆◆◆◆◆◇◇◇◇◇◇◇◆◆◇◇◆◇◇◆◇◇◇\n◇◇◇◇◇◆◇◆◆◇◆◆◇◇◇◇◇◇◇◆◆◇◇◆◇◇◆◇◇◇\n◇◇◇◆◇◆◇◆◆◇◇◆◆◇◇◇◇◇◇◆◆◇◇◆◇◇◆◇◇◇\n◇◇◆◆◇◆◆◇◇◆◆◇◆◇◇◇◇◇◆◆◇◇◆◆◇◇◆◇◇◇\n◇◇◆◆◇◆◆◆◆◇◆◇◇◇◇◇◇◇◆◆◇◇◇◆◇◇◆◇◇◇\n◇◇◆◇◇◇◇◆◆◆◆◆◇◇◇◇◇◆◆◇◇◇◇◇◇◇◆◇◇◇\n◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◆◇◇◇◇◇◇◇◇◆◇◇◇\n◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇\n◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇\n全国流量卡领取:https://h5.lot-ml.com/ProductEn/Shop/44f3d0aed110f853\n流量卡渠道二:https://hy.yunhaoka.com/#/pages/micro_store/index?agent_id=51c82e30d5697130b967e505d8255dd7\n入口  https://1526xin.yingkeji.cc//index/index/downloadApk?user_id=25077&invitation_code=774520\n邀请码  774520\n抓取任意链接的token填到变量SYKJ里，多账号用&或者换行分割\n此脚本为摸鱼大队出品，作者：忘川\n仅限本群内部群员使用，未经允许禁止传播，一经发现后果自负。\n如果你意外获得此脚本可联系忘川，举报传播者可代替他的的位置\n联系忘川 q: 3052221086 *付费进群，介意勿扰\n");
const axios = require("axios"),
  PUSHPLUS_URL = "http://www.pushplus.plus/send",
  PUSH_TOKEN = process.env.PUSH_PLUS_TOKEN,
  SYKJ_TOKENS_RAW = (process.env.SYKJ || "").trim(),
  SIGN_URL = "https://1526xin.yingkeji.cc/api/YxTeLe/ATsk",
  BASE_HEADERS = {
    "User-Agent": "okhttp/4.10.0",
    "Accept-Encoding": "gzip",
    "Content-Type": "application/x-www-form-urlencoded",
    "version": "1064"
  },
  FOOTER_TEXT = "\n摸鱼大队出品      作者:忘川\n此脚本只为本群内部群员使用，未经允许禁止传播，一经发现后果自负。\n如果你意外获得此本可联系群主，举报传播者可代替他的位置\n偷撸群主q:3052221086*付费进，介意勿扰\n全国流量卡领取:https://h5.lot-ml.com/ProductEn/Shop/44f3d0aed110f853\n流量卡渠道二:https://hy.yunhaoka.com/#/pages/micro_store/index?agent_id=51c82e30d5697130b967e505d8255dd7\n";
function parseTokens(_0x258567) {
  if (!_0x258567) return [];
  return _0x258567.split(/[&\n]/).map(_0x14dce4 => _0x14dce4.trim()).filter(Boolean);
}
async function sendPushplus(_0x166415, _0x270506 = "瞬影科技签到") {
  if (!PUSH_TOKEN) {
    console.log("未配置 PUSH_PLUS_TOKEN，跳过推送");
    return;
  }
  try {
    const _0x1e5d62 = {
        "token": PUSH_TOKEN,
        "title": _0x270506,
        "content": _0x166415,
        "template": "txt"
      },
      _0x48b20b = await axios.post(PUSHPLUS_URL, _0x1e5d62, {
        "timeout": 10000
      });
    if (_0x48b20b.status === 200) {
      const _0xd3dd93 = _0x48b20b.data;
      _0xd3dd93.code === 200 ? console.log("pushplus 推送成功") : console.log("pushplus 推送失败: " + _0xd3dd93.msg);
    } else console.log("pushplus 请求异常，状态码: " + _0x48b20b.status);
  } catch (_0xbccdaa) {
    console.log("pushplus 推送出错: " + _0xbccdaa.message);
  }
}
async function signForToken(_0x158350) {
  const _0x3cc3c3 = {
    ...BASE_HEADERS,
    "token": _0x158350
  };
  try {
    {
      const _0x1706f8 = await axios.post(SIGN_URL, null, {
          "headers": _0x3cc3c3,
          "timeout": 15000
        }),
        _0x38af4d = _0x1706f8.data,
        _0x51abf7 = _0x38af4d.code,
        _0x522ed0 = _0x38af4d.msg || "未知响应";
      let _0x1cfd0a = null,
        _0x2b8e7b = null,
        _0x2c38cf = null;
      if (_0x51abf7 === 1) _0x2c38cf = _0x38af4d.data?.["msg_textx"], _0x2b8e7b = _0x38af4d.data?.["day_num"], _0x1cfd0a = _0x38af4d.data?.["gold"];else _0x51abf7 === 0 && (_0x2c38cf = _0x38af4d.data?.["msg_textx"]);
      return {
        "token": _0x158350.slice(0, 8) + "...",
        "success": _0x51abf7 === 1,
        "msg": _0x522ed0,
        "detail": _0x2c38cf,
        "day_num": _0x2b8e7b,
        "gold": _0x1cfd0a
      };
    }
  } catch (_0x4fed7a) {
    return {
      "token": _0x158350.slice(0, 8) + "...",
      "success": false,
      "msg": "请求异常: " + _0x4fed7a.message
    };
  }
}
(async function main() {
  !SYKJ_TOKENS_RAW && (console.error("错误: 环境变量 SYKJ 未设置"), process.exit(1));
  const _0x3e0e48 = parseTokens(SYKJ_TOKENS_RAW);
  _0x3e0e48.length === 0 && (console.error("错误: 未解析到任何有效token"), process.exit(1));
  console.log("共检测到 " + _0x3e0e48.length + " 个账号，开始签到...");
  const _0x393247 = [];
  for (let _0x1e0d59 = 0; _0x1e0d59 < _0x3e0e48.length; _0x1e0d59++) {
    const _0x403ccf = _0x3e0e48[_0x1e0d59];
    console.log("正在处理第 " + (_0x1e0d59 + 1) + " 个账号...");
    const _0x5bb89e = await signForToken(_0x403ccf);
    _0x393247.push(_0x5bb89e);
    _0x5bb89e.success ? console.log("  账号 " + _0x5bb89e.token + " 签到成功，获得积分: " + _0x5bb89e.gold) : console.log("  账号 " + _0x5bb89e.token + " 签到失败: " + _0x5bb89e.msg);
  }
  const _0xfd45 = ["瞬影科技签到结果：\n"];
  _0x393247.forEach((_0x286245, _0x1145e1) => {
    {
      let _0x2a59b7 = "账号" + (_0x1145e1 + 1) + " (" + _0x286245.token + "): " + _0x286245.msg;
      if (_0x286245.detail) _0x2a59b7 += " | " + _0x286245.detail;
      if (_0x286245.gold !== null) _0x2a59b7 += " | 获得积分: " + _0x286245.gold;
      _0xfd45.push(_0x2a59b7);
    }
  });
  _0xfd45.push("\n" + FOOTER_TEXT);
  const _0x35d6d8 = _0xfd45.join("\n");
  await sendPushplus(_0x35d6d8, "瞬影科技签到");
  console.log("所有账号处理完毕。");
})();