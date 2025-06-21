//Sat Jun 21 2025 11:11:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("水费易");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function q(ad) {
    q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ag) {
      return typeof ag;
    } : function (ag) {
      return ag && "function" == typeof Symbol && ag.constructor === Symbol && ag !== Symbol.prototype ? "symbol" : typeof ag;
    };
    return q(ad);
  }
  function z(ad, ae) {
    var ag = "undefined" != typeof Symbol && ad[Symbol.iterator] || ad["@@iterator"];
    if (!ag) {
      if (Array.isArray(ad) || (ag = function (ao, ap) {
        if (ao) {
          if ("string" == typeof ao) {
            return B(ao, ap);
          }
          var aq = {}.toString.call(ao).slice(8, -1);
          "Object" === aq && ao.constructor && (aq = ao.constructor.name);
          return "Map" === aq || "Set" === aq ? Array.from(ao) : "Arguments" === aq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(aq) ? B(ao, ap) : void 0;
        }
      }(ad)) || ae && ad && "number" == typeof ad.length) {
        ag && (ad = ag);
        var ah = 0,
          ai = function () {};
        return {
          s: ai,
          n: function () {
            var ap = {
              done: !0
            };
            return ah >= ad.length ? ap : {
              done: !1,
              value: ad[ah++]
            };
          },
          e: function (ap) {
            throw ap;
          },
          f: ai
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var aj,
      ak = !0,
      al = !1;
    return {
      s: function () {
        ag = ag.call(ad);
      },
      n: function () {
        var ar = ag.next();
        ak = ar.done;
        return ar;
      },
      e: function (ap) {
        al = !0;
        aj = ap;
      },
      f: function () {
        try {
          ak || null == ag.return || ag.return();
        } finally {
          if (al) {
            throw aj;
          }
        }
      }
    };
  }
  function B(ad, ae) {
    (null == ae || ae > ad.length) && (ae = ad.length);
    for (var af = 0, ag = Array(ae); af < ae; af++) {
      ag[af] = ad[af];
    }
    return ag;
  }
  function D() {
    'use strict';

    D = function () {
      return af;
    };
    var ae,
      af = {},
      ag = Object.prototype,
      ah = ag.hasOwnProperty,
      ai = Object.defineProperty || function (aK, aL, aM) {
        aK[aL] = aM.value;
      },
      aj = "function" == typeof Symbol ? Symbol : {},
      ak = aj.iterator || "@@iterator",
      al = aj.asyncIterator || "@@asyncIterator",
      am = aj.toStringTag || "@@toStringTag";
    function an(aK, aL, aM) {
      var aN = {
        value: aM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aK, aL, aN);
      return aK[aL];
    }
    try {
      an({}, "");
    } catch (aL) {
      an = function (aM, aN, aO) {
        return aM[aN] = aO;
      };
    }
    function ao(aN, aO, aP, aQ) {
      var aR = aO && aO.prototype instanceof av ? aO : av,
        aS = Object.create(aR.prototype),
        aT = new aI(aQ || []);
      ai(aS, "_invoke", {
        value: aE(aN, aP, aT)
      });
      return aS;
    }
    function ap(aN, aO, aP) {
      try {
        return {
          type: "normal",
          arg: aN.call(aO, aP)
        };
      } catch (aT) {
        var aQ = {};
        aQ.type = "throw";
        aQ.arg = aT;
        return aQ;
      }
    }
    af.wrap = ao;
    var aq = "suspendedStart",
      ar = "suspendedYield",
      as = "executing",
      at = "completed",
      au = {};
    function av() {}
    function aw() {}
    function ax() {}
    var ay = {};
    an(ay, ak, function () {
      return this;
    });
    var az = Object.getPrototypeOf,
      aA = az && az(az(aJ([])));
    aA && aA !== ag && ah.call(aA, ak) && (ay = aA);
    ax.prototype = av.prototype = Object.create(ay);
    var aB = ax.prototype;
    function aC(aN) {
      ["next", "throw", "return"].forEach(function (aO) {
        an(aN, aO, function (aS) {
          return this._invoke(aO, aS);
        });
      });
    }
    function aD(aN, aO) {
      function aR(aS, aT, aU, aV) {
        var aX = ap(aN[aS], aN, aT);
        if ("throw" !== aX.type) {
          var aY = aX.arg,
            aZ = aY.value;
          return aZ && "object" == q(aZ) && ah.call(aZ, "__await") ? aO.resolve(aZ.__await).then(function (b2) {
            aR("next", b2, aU, aV);
          }, function (b2) {
            aR("throw", b2, aU, aV);
          }) : aO.resolve(aZ).then(function (b2) {
            aY.value = b2;
            aU(aY);
          }, function (b2) {
            return aR("throw", b2, aU, aV);
          });
        }
        aV(aX.arg);
      }
      var aQ;
      ai(this, "_invoke", {
        value: function (aS, aT) {
          function aV() {
            return new aO(function (aX, aY) {
              aR(aS, aT, aX, aY);
            });
          }
          return aQ = aQ ? aQ.then(aV, aV) : aV();
        }
      });
    }
    function aE(aN, aO, aP) {
      var aR = aq;
      return function (aS, aT) {
        if (aR === as) {
          throw Error("Generator is already running");
        }
        if (aR === at) {
          if ("throw" === aS) {
            throw aT;
          }
          var aV = {
            value: ae,
            done: !0
          };
          return aV;
        }
        for (aP.method = aS, aP.arg = aT;;) {
          var aW = aP.delegate;
          if (aW) {
            var aX = aF(aW, aP);
            if (aX) {
              if (aX === au) {
                continue;
              }
              return aX;
            }
          }
          if ("next" === aP.method) {
            aP.sent = aP._sent = aP.arg;
          } else {
            if ("throw" === aP.method) {
              if (aR === aq) {
                throw aR = at, aP.arg;
              }
              aP.dispatchException(aP.arg);
            } else {
              "return" === aP.method && aP.abrupt("return", aP.arg);
            }
          }
          aR = as;
          var aY = ap(aN, aO, aP);
          if ("normal" === aY.type) {
            if (aR = aP.done ? at : ar, aY.arg === au) {
              continue;
            }
            var aZ = {};
            aZ.value = aY.arg;
            aZ.done = aP.done;
            return aZ;
          }
          "throw" === aY.type && (aR = at, aP.method = "throw", aP.arg = aY.arg);
        }
      };
    }
    function aF(aN, aO) {
      var aT = aO.method,
        aU = aN.iterator[aT];
      if (aU === ae) {
        aO.delegate = null;
        "throw" === aT && aN.iterator.return && (aO.method = "return", aO.arg = ae, aF(aN, aO), "throw" === aO.method) || "return" !== aT && (aO.method = "throw", aO.arg = new TypeError("The iterator does not provide a '" + aT + "' method"));
        return au;
      }
      var aV = ap(aU, aN.iterator, aO.arg);
      if ("throw" === aV.type) {
        aO.method = "throw";
        aO.arg = aV.arg;
        aO.delegate = null;
        return au;
      }
      var aS = aV.arg;
      return aS ? aS.done ? (aO[aN.resultName] = aS.value, aO.next = aN.nextLoc, "return" !== aO.method && (aO.method = "next", aO.arg = ae), aO.delegate = null, au) : aS : (aO.method = "throw", aO.arg = new TypeError("iterator result is not an object"), aO.delegate = null, au);
    }
    function aG(aN) {
      var aO = {
        tryLoc: aN[0]
      };
      var aP = aO;
      1 in aN && (aP.catchLoc = aN[1]);
      2 in aN && (aP.finallyLoc = aN[2], aP.afterLoc = aN[3]);
      this.tryEntries.push(aP);
    }
    function aH(aN) {
      var aP = aN.completion || {};
      aP.type = "normal";
      delete aP.arg;
      aN.completion = aP;
    }
    function aI(aN) {
      var aO = {
        tryLoc: "root"
      };
      this.tryEntries = [aO];
      aN.forEach(aG, this);
      this.reset(!0);
    }
    function aJ(aN) {
      if (aN || "" === aN) {
        var aP = aN[ak];
        if (aP) {
          return aP.call(aN);
        }
        if ("function" == typeof aN.next) {
          return aN;
        }
        if (!isNaN(aN.length)) {
          var aQ = -1,
            aR = function aT() {
              for (; ++aQ < aN.length;) {
                if (ah.call(aN, aQ)) {
                  aT.value = aN[aQ];
                  aT.done = !1;
                  return aT;
                }
              }
              aT.value = ae;
              aT.done = !0;
              return aT;
            };
          return aR.next = aR;
        }
      }
      throw new TypeError(q(aN) + " is not iterable");
    }
    aw.prototype = ax;
    ai(aB, "constructor", {
      value: ax,
      configurable: !0
    });
    ai(ax, "constructor", {
      value: aw,
      configurable: !0
    });
    aw.displayName = an(ax, am, "GeneratorFunction");
    af.isGeneratorFunction = function (aN) {
      var aO = "function" == typeof aN && aN.constructor;
      return !!aO && (aO === aw || "GeneratorFunction" === (aO.displayName || aO.name));
    };
    af.mark = function (aN) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aN, ax) : (aN.__proto__ = ax, an(aN, am, "GeneratorFunction"));
      aN.prototype = Object.create(aB);
      return aN;
    };
    af.awrap = function (aN) {
      var aO = {};
      aO.__await = aN;
      return aO;
    };
    aC(aD.prototype);
    an(aD.prototype, al, function () {
      return this;
    });
    af.AsyncIterator = aD;
    af.async = function (aN, aO, aP, aQ, aR) {
      void 0 === aR && (aR = Promise);
      var aT = new aD(ao(aN, aO, aP, aQ), aR);
      return af.isGeneratorFunction(aO) ? aT : aT.next().then(function (aU) {
        return aU.done ? aU.value : aT.next();
      });
    };
    aC(aB);
    an(aB, am, "Generator");
    an(aB, ak, function () {
      return this;
    });
    an(aB, "toString", function () {
      return "[object Generator]";
    });
    af.keys = function (aN) {
      var aP = Object(aN),
        aQ = [];
      for (var aR in aP) aQ.push(aR);
      aQ.reverse();
      return function aT() {
        for (; aQ.length;) {
          var aV = aQ.pop();
          if (aV in aP) {
            aT.value = aV;
            aT.done = !1;
            return aT;
          }
        }
        aT.done = !0;
        return aT;
      };
    };
    af.values = aJ;
    aI.prototype = {
      constructor: aI,
      reset: function (aN) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ae, this.done = !1, this.delegate = null, this.method = "next", this.arg = ae, this.tryEntries.forEach(aH), !aN) {
          for (var aO in this) "t" === aO.charAt(0) && ah.call(this, aO) && !isNaN(+aO.slice(1)) && (this[aO] = ae);
        }
      },
      stop: function () {
        this.done = !0;
        var aN = this.tryEntries[0].completion;
        if ("throw" === aN.type) {
          throw aN.arg;
        }
        return this.rval;
      },
      dispatchException: function (aN) {
        if (this.done) {
          throw aN;
        }
        var aP = this;
        function aV(aW, aX) {
          aS.type = "throw";
          aS.arg = aN;
          aP.next = aW;
          aX && (aP.method = "next", aP.arg = ae);
          return !!aX;
        }
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          var aR = this.tryEntries[aQ],
            aS = aR.completion;
          if ("root" === aR.tryLoc) {
            return aV("end");
          }
          if (aR.tryLoc <= this.prev) {
            var aT = ah.call(aR, "catchLoc"),
              aU = ah.call(aR, "finallyLoc");
            if (aT && aU) {
              if (this.prev < aR.catchLoc) {
                return aV(aR.catchLoc, !0);
              }
              if (this.prev < aR.finallyLoc) {
                return aV(aR.finallyLoc);
              }
            } else {
              if (aT) {
                if (this.prev < aR.catchLoc) {
                  return aV(aR.catchLoc, !0);
                }
              } else {
                if (!aU) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aR.finallyLoc) {
                  return aV(aR.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aN, aO) {
        for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
          var aQ = this.tryEntries[aP];
          if (aQ.tryLoc <= this.prev && ah.call(aQ, "finallyLoc") && this.prev < aQ.finallyLoc) {
            var aR = aQ;
            break;
          }
        }
        aR && ("break" === aN || "continue" === aN) && aR.tryLoc <= aO && aO <= aR.finallyLoc && (aR = null);
        var aS = aR ? aR.completion : {};
        aS.type = aN;
        aS.arg = aO;
        return aR ? (this.method = "next", this.next = aR.finallyLoc, au) : this.complete(aS);
      },
      complete: function (aN, aO) {
        if ("throw" === aN.type) {
          throw aN.arg;
        }
        "break" === aN.type || "continue" === aN.type ? this.next = aN.arg : "return" === aN.type ? (this.rval = this.arg = aN.arg, this.method = "return", this.next = "end") : "normal" === aN.type && aO && (this.next = aO);
        return au;
      },
      finish: function (aN) {
        for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
          var aQ = this.tryEntries[aP];
          if (aQ.finallyLoc === aN) {
            this.complete(aQ.completion, aQ.afterLoc);
            aH(aQ);
            return au;
          }
        }
      },
      catch: function (aN) {
        for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
          var aQ = this.tryEntries[aP];
          if (aQ.tryLoc === aN) {
            var aR = aQ.completion;
            if ("throw" === aR.type) {
              var aS = aR.arg;
              aH(aQ);
            }
            return aS;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aN, aO, aP) {
        this.delegate = {
          iterator: aJ(aN),
          resultName: aO,
          nextLoc: aP
        };
        "next" === this.method && (this.arg = ae);
        return au;
      }
    };
    return af;
  }
  function F(ad, ae, af, ag, ah, ai, aj) {
    try {
      var al = ad[ai](aj),
        am = al.value;
    } catch (ap) {
      return void af(ap);
    }
    al.done ? ae(am) : Promise.resolve(am).then(ag, ah);
  }
  function G(ad) {
    return function () {
      var ag = this,
        ah = arguments;
      return new Promise(function (ai, aj) {
        var al = ad.apply(ag, ah);
        function am(ao) {
          F(al, ai, aj, am, an, "next", ao);
        }
        function an(ao) {
          F(al, ai, aj, am, an, "throw", ao);
        }
        am(void 0);
      });
    };
  }
  var H = ($.isNode() ? process.env.SFY : $.getdata("SFY")) || "",
    J = ($.isNode() ? process.env.TEXTURL : $.getdata("TEXTURL")) || "https://api.btstu.cn/yan/api.php";
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var K = "",
    P = "",
    Q = "",
    R = "",
    T = "",
    U = "";
  function V() {
    return W.apply(this, arguments);
  }
  function W() {
    W = G(D().mark(function ad() {
      var af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar;
      return D().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              if (H) {
                as.next = 5;
                break;
              }
              console.log("先填写memberId&shopMemberId");
              as.next = 4;
              return ab("先填写memberId&shopMemberId");
            case 4:
              return as.abrupt("return");
            case 5:
              af = H.split(" ");
              ag = z(af.slice(0, 10));
              as.prev = 7;
              ag.s();
            case 9:
              if ((ah = ag.n()).done) {
                as.next = 75;
                break;
              }
              ai = ah.value;
              as.prev = 11;
              K = ai.split("&")[0];
              P = ai.split("&")[1];
              as.next = 16;
              return X("/MemberApp/GetShopTaskList", {
                memberID: K,
                compId: 60001
              });
            case 16:
              var au = {};
              au.memberID = K;
              au.compId = 60001;
              aj = as.sent;
              Q = aj.resultJson[0].mobilePhone;
              R = aj.resultJson[0].operName;
              T = aj.resultJson[0].headImg;
              console.log("用户信息：".concat(R, " ").concat(Q));
              as.next = 23;
              return X("/MemberApp/MemberSign", au);
            case 23:
              ak = as.sent;
              console.log("签到：".concat(ak.message));
              as.next = 27;
              return Z("/PersonalCenter/PersonalCenter/ShopMemberSign", "memberId=".concat(P));
            case 27:
              al = as.sent;
              console.log("签到：".concat(al.message));
              am = z(aj.resultJson[0].taskList);
              as.prev = 30;
              am.s();
            case 32:
              if ((an = am.n()).done) {
                as.next = 55;
                break;
              }
              if (ao = an.value, console.log("任务：".concat(ao.taskName)), 1 != ao.status) {
                as.next = 38;
                break;
              }
              console.log("任务已完成");
              return as.abrupt("continue", 53);
            case 38:
              if (!ao.taskName.includes("浏览") && !ao.taskName.includes("分享")) {
                as.next = 43;
                break;
              }
              as.next = 41;
              return a1("https://memberapi.ai.ipaiyun.cn/MemberApp/TaskCompleteDay", {
                data: a5(JSON.stringify({
                  MemberID: K,
                  MemberName: R,
                  CompanyID: 60001,
                  TaskCode: ao.taskCode,
                  Remark: "店铺浏览时长"
                }))
              });
            case 41:
              ap = as.sent;
              console.log("完成任务：".concat(ap.Message));
            case 43:
              if (!ao.taskName.includes("发帖")) {
                as.next = 53;
                break;
              }
              as.next = 46;
              return a3();
            case 46:
              aq = as.sent;
              aq || (aq = "如果觉得没有朋友，就去找喜欢的人表白，对方会提出和你做朋友的。");
              aq = "<p>".concat(aq, "</p>");
              as.next = 51;
              return a1("https://forumapi.ai.ipaiyun.cn/ForumApp/AddForumTheme", {
                data: a5(JSON.stringify({
                  companyID: 60001,
                  companyName: "重庆爱派科技有限公司",
                  modalID: 2,
                  modalName: "大竹视窗",
                  title: "每日一言",
                  themeContent: aq,
                  imgStr: "",
                  commentLimit: 1,
                  addressDetail: "",
                  loclng: "",
                  loclat: "",
                  operName: R,
                  createId: K,
                  createName: R,
                  createImg: T
                }))
              });
            case 51:
              ar = as.sent;
              console.log("发帖：".concat(ar.Message));
            case 53:
              as.next = 32;
              break;
            case 55:
              as.next = 60;
              break;
            case 57:
              as.prev = 57;
              as.t0 = as.catch(30);
              am.e(as.t0);
            case 60:
              as.prev = 60;
              am.f();
              return as.finish(60);
            case 63:
              var av = {};
              av.memberID = K;
              av.compId = 60001;
              as.next = 65;
              return X("/MemberApp/GetShopTaskList", av);
            case 65:
              aj = as.sent;
              console.log("拥有积分：".concat(aj.resultJson[0].integral, "\n"));
              U += "用户：".concat(R, " 积分：").concat(aj.resultJson[0].integral, "\n");
              as.next = 73;
              break;
            case 70:
              as.prev = 70;
              as.t1 = as.catch(11);
              console.log(as.t1);
            case 73:
              as.next = 9;
              break;
            case 75:
              as.next = 80;
              break;
            case 77:
              as.prev = 77;
              as.t2 = as.catch(7);
              ag.e(as.t2);
            case 80:
              as.prev = 80;
              ag.f();
              return as.finish(80);
            case 83:
              if (!U) {
                as.next = 86;
                break;
              }
              as.next = 86;
              return ab(U);
            case 86:
            case "end":
              return as.stop();
          }
        }
      }, ad, null, [[7, 77, 80, 83], [11, 70], [30, 57, 60, 63]]);
    }));
    return W.apply(this, arguments);
  }
  function X(ad) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = G(D().mark(function ad(ae) {
      var ag,
        ah = arguments;
      return D().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              ag = ah.length > 1 && void 0 !== ah[1] ? ah[1] : {};
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://memberapi.ai.ipaiyun.cn".concat(ae),
                  headers: {
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.56(0x1800383b) NetType/WIFI Language/zh_CN",
                    Connection: "keep-alive",
                    Accept: "application/json, text/plain, */*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Content-Type": "application/json",
                    "Sec-Fetch-Site": "same-site",
                    ipaiuvck: "null",
                    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                    "Sec-Fetch-Mode": "cors",
                    Origin: "https://wbapp.ai.ipaiyun.cn",
                    ipaistf: "oUFK7XqVy1U=",
                    Referer: "https://wbapp.ai.ipaiyun.cn/",
                    "Sec-Fetch-Dest": "empty",
                    isapp: "1"
                  },
                  body: JSON.stringify(ag)
                };
                $.post(am, function () {
                  var ao = G(D().mark(function ap(aq, ar, as) {
                    return D().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ai.stop();
          }
        }
      }, ad);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ad) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = G(D().mark(function ae(af) {
      var ah,
        ai = arguments;
      return D().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ah = ai.length > 1 && void 0 !== ai[1] ? ai[1] : "";
              return aj.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://m.ipaiyun.cn".concat(af),
                  headers: {
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.56(0x1800383b) NetType/WIFI Language/zh_CN",
                    Connection: "keep-alive",
                    Accept: "application/json, text/javascript, */*; q=0.01",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "x-requested-with": "XMLHttpRequest",
                    "sec-fetch-site": "same-origin",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    origin: "https://m.ipaiyun.cn",
                    "sec-fetch-dest": "empty"
                  },
                  body: ah
                };
                $.post(am, function () {
                  var an = G(D().mark(function ao(ap, aq, ar) {
                    return D().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !ap) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, ae);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ad) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = G(D().mark(function ae(af) {
      var ah,
        ai = arguments;
      return D().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ah = ai.length > 1 && void 0 !== ai[1] ? ai[1] : {};
              return aj.abrupt("return", new Promise(function (ak) {
                var am = {
                  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.56(0x1800383b) NetType/WIFI Language/zh_CN",
                  Connection: "keep-alive",
                  Accept: "application/json, text/plain, */*",
                  "Accept-Encoding": "gzip, deflate, br",
                  "Content-Type": "application/json",
                  "Sec-Fetch-Site": "same-site",
                  ipaiuvck: "null",
                  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                  "Sec-Fetch-Mode": "cors",
                  Origin: "https://wbapp.ai.ipaiyun.cn",
                  ipaistf: "oUFK7XqVy1U=",
                  Referer: "https://wbapp.ai.ipaiyun.cn/",
                  "Sec-Fetch-Dest": "empty",
                  isapp: "1"
                };
                var an = {
                  url: af,
                  headers: am,
                  body: JSON.stringify(ah)
                };
                $.post(an, function () {
                  var ap = G(D().mark(function aq(ar, as, at) {
                    return D().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(a6(at)));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, ae);
    }));
    return a2.apply(this, arguments);
  }
  function a3() {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = G(D().mark(function ae() {
      return D().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: J,
                  headers: {}
                };
                $.get(aj, function () {
                  var am = G(D().mark(function an(ao, ap, aq) {
                    return D().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !ao) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(aq);
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ap);
                          case 14:
                            ar.prev = 14;
                            ah();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ae);
    }));
    return a4.apply(this, arguments);
  }
  function a5(ad) {
    var ao = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "jkipai";
    if ("" != ao && (this._keyString = ao), "" == ad) {
      return "";
    }
    ad = encode64(utf16to8(ad));
    var ap = a7(ad, !0),
      aq = a7(this._keyString, !1);
    aq.length < 4 && (aq.length = 4);
    for (var ag, ah, ai, aj = ap.length - 1, ak = ap[aj], al = ap[0], am = Math.floor(6 + 52 / (aj + 1)), an = 0; 0 < am--;) {
      for (an = an + 2654435769 & 4294967295, ah = an >>> 2 & 3, ai = 0; ai < aj; ai++) {
        al = ap[ai + 1];
        ag = (ak >>> 5 ^ al << 2) + (al >>> 3 ^ ak << 4) ^ (an ^ al) + (aq[3 & ai ^ ah] ^ ak);
        ak = ap[ai] = ap[ai] + ag & 4294967295;
      }
      al = ap[0];
      ag = (ak >>> 5 ^ al << 2) + (al >>> 3 ^ ak << 4) ^ (an ^ al) + (aq[3 & ai ^ ah] ^ ak);
      ak = ap[aj] = ap[aj] + ag & 4294967295;
    }
    return encode64(a8(ap, !1));
  }
  function a6(ad) {
    var ap = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "jkipai";
    if ("" != ap && (this._keyString = ap), "" == ad) {
      return "";
    }
    ad = decode64(ad);
    var aq = a7(ad, !1),
      ar = a7(this._keyString, !1);
    ar.length < 4 && (ar.length = 4);
    for (var ag, ah, ai, aj = aq.length - 1, ak = aq[aj - 1], al = aq[0], am = 2654435769, an = Math.floor(6 + 52 / (aj + 1)), ao = an * am & 4294967295; 0 != ao;) {
      for (ah = ao >>> 2 & 3, ai = aj; ai > 0; ai--) {
        ak = aq[ai - 1];
        ag = (ak >>> 5 ^ al << 2) + (al >>> 3 ^ ak << 4) ^ (ao ^ al) + (ar[3 & ai ^ ah] ^ ak);
        al = aq[ai] = aq[ai] - ag & 4294967295;
      }
      ak = aq[aj];
      ag = (ak >>> 5 ^ al << 2) + (al >>> 3 ^ ak << 4) ^ (ao ^ al) + (ar[3 & ai ^ ah] ^ ak);
      al = aq[0] = aq[0] - ag & 4294967295;
      ao = ao - am & 4294967295;
    }
    return utf8to16(decode64(a8(aq, !0)));
  }
  function a7(ad, ae) {
    for (var af = ad.length, ag = [], ah = 0; ah < af; ah += 4) {
      ag[ah >> 2] = ad.charCodeAt(ah) | ad.charCodeAt(ah + 1) << 8 | ad.charCodeAt(ah + 2) << 16 | ad.charCodeAt(ah + 3) << 24;
    }
    ae && (ag[ag.length] = af);
    return ag;
  }
  function a8(ad, ae) {
    var af = ad.length,
      ag = af - 1 << 2;
    if (ae) {
      var ah = ad[af - 1];
      if (ah < ag - 3 || ah > ag) {
        return null;
      }
      ag = ah;
    }
    for (var ai = 0; ai < af; ai++) {
      ad[ai] = String.fromCharCode(255 & ad[ai], ad[ai] >>> 8 & 255, ad[ai] >>> 16 & 255, ad[ai] >>> 24 & 255);
    }
    return ae ? ad.join("").substring(0, ag) : ad.join("");
  }
  function a9() {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = G(D().mark(function ae() {
      return D().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ak, function () {
                  var an = G(D().mark(function ao(ap, aq, ar) {
                    return D().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            try {
                              ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(ar).notice);
                            } catch (at) {
                              $.logErr(at, aq);
                            } finally {
                              ai();
                            }
                          case 1:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ae);
    }));
    return aa.apply(this, arguments);
  }
  function ab(ad) {
    return ac.apply(this, arguments);
  }
  function ac() {
    ac = G(D().mark(function ae(af) {
      return D().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              if (!$.isNode()) {
                ag.next = 5;
                break;
              }
              ag.next = 3;
              return notify.sendNotify($.name, af);
            case 3:
              ag.next = 6;
              break;
            case 5:
              $.msg($.name, "", af);
            case 6:
            case "end":
              return ag.stop();
          }
        }
      }, ae);
    }));
    return ac.apply(this, arguments);
  }
  G(D().mark(function ad() {
    return D().wrap(function (af) {
      for (;;) {
        switch (af.prev = af.next) {
          case 0:
            af.next = 2;
            return a9();
          case 2:
            af.next = 4;
            return V();
          case 4:
          case "end":
            return af.stop();
        }
      }
    }, ad);
  }))().catch(function (ae) {
    $.log(ae);
  }).finally(function () {
    $.done({});
  });
  encode64 = function (ae) {
    var af,
      ag,
      ah,
      ai,
      aj,
      ak = "",
      al = "",
      am = "",
      an = 0;
    do {
      af = ae.charCodeAt(an++);
      ag = ae.charCodeAt(an++);
      al = ae.charCodeAt(an++);
      ah = af >> 2;
      ai = (3 & af) << 4 | ag >> 4;
      aj = (15 & ag) << 2 | al >> 6;
      am = 63 & al;
      isNaN(ag) ? aj = am = 64 : isNaN(al) && (am = 64);
      ak = ak + _keyStr.charAt(ah) + _keyStr.charAt(ai) + _keyStr.charAt(aj) + _keyStr.charAt(am);
      af = ag = al = "";
      ah = ai = aj = am = "";
    } while (an < ae.length);
    return ak;
  };
  decode64 = function (ae) {
    var af,
      ag,
      ah,
      ai,
      aj,
      ak = "",
      al = "",
      am = "",
      an = 0;
    /[^A-Za-z0-9\+\/\=\n]/g.exec(ae) && alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
    ae = ae.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do {
      ah = _keyStr.indexOf(ae.charAt(an++));
      ai = _keyStr.indexOf(ae.charAt(an++));
      aj = _keyStr.indexOf(ae.charAt(an++));
      am = _keyStr.indexOf(ae.charAt(an++));
      af = ah << 2 | ai >> 4;
      ag = (15 & ai) << 4 | aj >> 2;
      al = (3 & aj) << 6 | am;
      ak += String.fromCharCode(af);
      64 != aj && (ak += String.fromCharCode(ag));
      64 != am && (ak += String.fromCharCode(al));
      af = ag = al = "";
      ah = ai = aj = am = "";
    } while (an < ae.length);
    return ak;
  };
  utf8to16 = function (ae) {
    var af, ag, ah, ai, aj, ak;
    for (ae = ae.toString(), af = "", ah = ae.length, ag = 0; ag < ah;) {
      switch (ai = ae.charCodeAt(ag++), ai >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          af += ae.charAt(ag - 1);
          break;
        case 12:
        case 13:
          aj = ae.charCodeAt(ag++);
          af += String.fromCharCode((31 & ai) << 6 | 63 & aj);
          break;
        case 14:
          aj = ae.charCodeAt(ag++);
          ak = ae.charCodeAt(ag++);
          af += String.fromCharCode((15 & ai) << 12 | (63 & aj) << 6 | 63 & ak);
      }
    }
    return af;
  };
  utf16to8 = function (ae) {
    var af, ag, ah, ai;
    for (af = "", ah = ae.length, ag = 0; ag < ah; ag++) {
      ai = ae.charCodeAt(ag);
      ai >= 1 && ai <= 127 ? af += ae.charAt(ag) : ai > 2047 ? (af += String.fromCharCode(224 | ai >> 12 & 15), af += String.fromCharCode(128 | ai >> 6 & 63), af += String.fromCharCode(128 | 63 & ai)) : (af += String.fromCharCode(192 | ai >> 6 & 31), af += String.fromCharCode(128 | 63 & ai));
    }
    return af;
  };
})();