//Thu Oct 23 2025 10:15:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("爱仙居");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(af) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ah) {
      return typeof ah;
    } : function (ah) {
      {
        return ah && "function" == typeof Symbol && ah.constructor === Symbol && ah !== Symbol.prototype ? "symbol" : typeof ah;
      }
    };
    return b(af);
  }
  function c(af, ag) {
    {
      var ai = "undefined" != typeof Symbol && af[Symbol.iterator] || af["@@iterator"];
      if (!ai) {
        {
          if (Array.isArray(af) || (ai = d(af)) || ag && af && "number" == typeof af.length) {
            {
              ai && (af = ai);
              var aj = 0;
              var ak = function () {};
              return {
                s: ak,
                n: function () {
                  {
                    var ar = {
                      done: true
                    };
                    return aj >= af.length ? ar : {
                      done: false,
                      value: af[aj++]
                    };
                  }
                },
                e: function (ar) {
                  {
                    throw ar;
                  }
                },
                f: ak
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var al;
      var am = true;
      var an = false;
      return {
        s: function () {
          {
            ai = ai.call(af);
          }
        },
        n: function () {
          {
            var ar = ai.next();
            am = ar.done;
            return ar;
          }
        },
        e: function (ar) {
          an = true;
          al = ar;
        },
        f: function () {
          {
            try {
              {
                am || null == ai.return || ai.return();
              }
            } finally {
              {
                if (an) {
                  throw al;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(af, ag) {
    {
      if (af) {
        {
          if ("string" == typeof af) {
            return f(af, ag);
          }
          var ai = {}.toString.call(af).slice(8, -1);
          "Object" === ai && af.constructor && (ai = af.constructor.name);
          return "Map" === ai || "Set" === ai ? Array.from(af) : "Arguments" === ai || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ai) ? f(af, ag) : undefined;
        }
      }
    }
  }
  function f(af, ag) {
    {
      (null == ag || ag > af.length) && (ag = af.length);
      for (var ai = 0, aj = Array(ag); ai < ag; ai++) {
        aj[ai] = af[ai];
      }
      return aj;
    }
  }
  function g() {
    "use strict";

    g = function () {
      return ah;
    };
    var ag;
    var ah = {
      wrap: aq,
      isGeneratorFunction: function (aP) {
        {
          var aQ = "function" == typeof aP && aP.constructor;
          return !!aQ && (aQ === ay || "GeneratorFunction" === (aQ.displayName || aQ.name));
        }
      },
      mark: function (aP) {
        Object.setPrototypeOf ? Object.setPrototypeOf(aP, az) : (aP.__proto__ = az, ap(aP, ao, "GeneratorFunction"));
        aP.prototype = Object.create(aD);
        return aP;
      },
      awrap: function (aP) {
        {
          var aQ = {
            __await: aP
          };
          return aQ;
        }
      },
      AsyncIterator: aF,
      async: function (aP, aQ, aR, aS, aT) {
        {
          undefined === aT && (aT = Promise);
          var aU = new aF(aq(aP, aQ, aR, aS), aT);
          return ah.isGeneratorFunction(aQ) ? aU : aU.next().then(function (aV) {
            {
              return aV.done ? aV.value : aU.next();
            }
          });
        }
      }
    };
    var ai = Object.prototype;
    var aj = ai.hasOwnProperty;
    var ak = Object.defineProperty || function (aM, aN, aO) {
      {
        aM[aN] = aO.value;
      }
    };
    var al = "function" == typeof Symbol ? Symbol : {};
    var am = al.iterator || "@@iterator";
    var an = al.asyncIterator || "@@asyncIterator";
    var ao = al.toStringTag || "@@toStringTag";
    function ap(aM, aN, aO) {
      {
        var aP = {
          value: aO,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aM, aN, aP);
        return aM[aN];
      }
    }
    try {
      {
        ap({}, "");
      }
    } catch (aN) {
      {
        ap = function (aP, aQ, aR) {
          return aP[aQ] = aR;
        };
      }
    }
    function aq(aP, aQ, aR, aS) {
      {
        var aT = aQ && aQ.prototype instanceof ax ? aQ : ax;
        var aU = Object.create(aT.prototype);
        var aV = new aK(aS || []);
        ak(aU, "_invoke", {
          value: aG(aP, aR, aV)
        });
        return aU;
      }
    }
    function ar(aP, aQ, aR) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aP.call(aQ, aR)
            };
          }
        } catch (aV) {
          {
            var aT = {
              type: "throw",
              arg: aV
            };
            return aT;
          }
        }
      }
    }
    var as = "suspendedStart";
    var at = "suspendedYield";
    var au = "executing";
    var av = "completed";
    var aw = {};
    function ax() {}
    function ay() {}
    function az() {}
    var aA = {};
    ap(aA, am, function () {
      {
        return this;
      }
    });
    var aB = Object.getPrototypeOf;
    var aC = aB && aB(aB(aL([])));
    aC && aC !== ai && aj.call(aC, am) && (aA = aC);
    az.prototype = ax.prototype = Object.create(aA);
    var aD = az.prototype;
    function aE(aP) {
      {
        ["next", "throw", "return"].forEach(function (aR) {
          {
            ap(aP, aR, function (aS) {
              {
                return this._invoke(aR, aS);
              }
            });
          }
        });
      }
    }
    function aF(aP, aQ) {
      {
        function aT(aU, aV, aW, aX) {
          {
            var aZ = ar(aP[aU], aP, aV);
            if ("throw" !== aZ.type) {
              {
                var b0 = aZ.arg;
                var b1 = b0.value;
                return b1 && "object" == b(b1) && aj.call(b1, "__await") ? aQ.resolve(b1.__await).then(function (b2) {
                  {
                    aT("next", b2, aW, aX);
                  }
                }, function (b2) {
                  aT("throw", b2, aW, aX);
                }) : aQ.resolve(b1).then(function (b2) {
                  b0.value = b2;
                  aW(b0);
                }, function (b2) {
                  {
                    return aT("throw", b2, aW, aX);
                  }
                });
              }
            }
            aX(aZ.arg);
          }
        }
        var aS;
        ak(this, "_invoke", {
          value: function (aU, aV) {
            {
              function aX() {
                {
                  return new aQ(function (b0, b1) {
                    {
                      aT(aU, aV, b0, b1);
                    }
                  });
                }
              }
              return aS = aS ? aS.then(aX, aX) : aX();
            }
          }
        });
      }
    }
    function aG(aP, aQ, aR) {
      {
        var aT = as;
        return function (aU, aV) {
          {
            if (aT === au) {
              throw Error("Generator is already running");
            }
            if (aT === av) {
              {
                if ("throw" === aU) {
                  throw aV;
                }
                var aY = {
                  value: ag,
                  done: true
                };
                return aY;
              }
            }
            for (aR.method = aU, aR.arg = aV;;) {
              {
                var aZ = aR.delegate;
                if (aZ) {
                  {
                    var b0 = aH(aZ, aR);
                    if (b0) {
                      {
                        if (b0 === aw) {
                          continue;
                        }
                        return b0;
                      }
                    }
                  }
                }
                if ("next" === aR.method) {
                  aR.sent = aR._sent = aR.arg;
                } else {
                  if ("throw" === aR.method) {
                    {
                      if (aT === as) {
                        throw aT = av, aR.arg;
                      }
                      aR.dispatchException(aR.arg);
                    }
                  } else {
                    "return" === aR.method && aR.abrupt("return", aR.arg);
                  }
                }
                aT = au;
                var b1 = ar(aP, aQ, aR);
                if ("normal" === b1.type) {
                  {
                    if (aT = aR.done ? av : at, b1.arg === aw) {
                      continue;
                    }
                    var b2 = {
                      value: b1.arg,
                      done: aR.done
                    };
                    return b2;
                  }
                }
                "throw" === b1.type && (aT = av, aR.method = "throw", aR.arg = b1.arg);
              }
            }
          }
        };
      }
    }
    function aH(aP, aQ) {
      {
        var aW = aQ.method;
        var aX = aP.iterator[aW];
        if (aX === ag) {
          aQ.delegate = null;
          "throw" === aW && aP.iterator.return && (aQ.method = "return", aQ.arg = ag, aH(aP, aQ), "throw" === aQ.method) || "return" !== aW && (aQ.method = "throw", aQ.arg = new TypeError("The iterator does not provide a '" + aW + "' method"));
          return aw;
        }
        var aY = ar(aX, aP.iterator, aQ.arg);
        if ("throw" === aY.type) {
          aQ.method = "throw";
          aQ.arg = aY.arg;
          aQ.delegate = null;
          return aw;
        }
        var aV = aY.arg;
        return aV ? aV.done ? (aQ[aP.resultName] = aV.value, aQ.next = aP.nextLoc, "return" !== aQ.method && (aQ.method = "next", aQ.arg = ag), aQ.delegate = null, aw) : aV : (aQ.method = "throw", aQ.arg = new TypeError("iterator result is not an object"), aQ.delegate = null, aw);
      }
    }
    function aI(aP) {
      {
        var aR = {
          tryLoc: aP[0]
        };
        1 in aP && (aR.catchLoc = aP[1]);
        2 in aP && (aR.finallyLoc = aP[2], aR.afterLoc = aP[3]);
        this.tryEntries.push(aR);
      }
    }
    function aJ(aP) {
      {
        var aR = aP.completion || {};
        aR.type = "normal";
        delete aR.arg;
        aP.completion = aR;
      }
    }
    function aK(aP) {
      {
        var aQ = {
          tryLoc: "root"
        };
        this.tryEntries = [aQ];
        aP.forEach(aI, this);
        this.reset(true);
      }
    }
    function aL(aP) {
      {
        if (aP || "" === aP) {
          {
            var aR = aP[am];
            if (aR) {
              return aR.call(aP);
            }
            if ("function" == typeof aP.next) {
              return aP;
            }
            if (!isNaN(aP.length)) {
              {
                var aS = -1;
                var aT = function aV() {
                  {
                    for (; ++aS < aP.length;) {
                      if (aj.call(aP, aS)) {
                        aV.value = aP[aS];
                        aV.done = false;
                        return aV;
                      }
                    }
                    aV.value = ag;
                    aV.done = true;
                    return aV;
                  }
                };
                return aT.next = aT;
              }
            }
          }
        }
        throw new TypeError(b(aP) + " is not iterable");
      }
    }
    ay.prototype = az;
    ak(aD, "constructor", {
      value: az,
      configurable: true
    });
    ak(az, "constructor", {
      value: ay,
      configurable: true
    });
    ay.displayName = ap(az, ao, "GeneratorFunction");
    aE(aF.prototype);
    ap(aF.prototype, an, function () {
      {
        return this;
      }
    });
    aE(aD);
    ap(aD, ao, "Generator");
    ap(aD, am, function () {
      {
        return this;
      }
    });
    ap(aD, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    ah.keys = function (aP) {
      {
        var aQ = Object(aP);
        var aR = [];
        for (var aS in aQ) aR.push(aS);
        aR.reverse();
        return function aT() {
          {
            for (; aR.length;) {
              {
                var aU = aR.pop();
                if (aU in aQ) {
                  aT.value = aU;
                  aT.done = false;
                  return aT;
                }
              }
            }
            aT.done = true;
            return aT;
          }
        };
      }
    };
    ah.values = aL;
    aK.prototype = {
      constructor: aK,
      reset: function (aP) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ag, this.done = false, this.delegate = null, this.method = "next", this.arg = ag, this.tryEntries.forEach(aJ), !aP) {
            for (var aQ in this) "t" === aQ.charAt(0) && aj.call(this, aQ) && !isNaN(+aQ.slice(1)) && (this[aQ] = ag);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aP = this.tryEntries[0].completion;
          if ("throw" === aP.type) {
            throw aP.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aP) {
        {
          if (this.done) {
            throw aP;
          }
          var aQ = this;
          function aW(aX, aY) {
            aT.type = "throw";
            aT.arg = aP;
            aQ.next = aX;
            aY && (aQ.method = "next", aQ.arg = ag);
            return !!aY;
          }
          for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
            {
              var aS = this.tryEntries[aR];
              var aT = aS.completion;
              if ("root" === aS.tryLoc) {
                return aW("end");
              }
              if (aS.tryLoc <= this.prev) {
                {
                  var aU = aj.call(aS, "catchLoc");
                  var aV = aj.call(aS, "finallyLoc");
                  if (aU && aV) {
                    {
                      if (this.prev < aS.catchLoc) {
                        return aW(aS.catchLoc, true);
                      }
                      if (this.prev < aS.finallyLoc) {
                        return aW(aS.finallyLoc);
                      }
                    }
                  } else {
                    if (aU) {
                      {
                        if (this.prev < aS.catchLoc) {
                          return aW(aS.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aV) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aS.finallyLoc) {
                          return aW(aS.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aP, aQ) {
        {
          for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
            {
              var aT = this.tryEntries[aS];
              if (aT.tryLoc <= this.prev && aj.call(aT, "finallyLoc") && this.prev < aT.finallyLoc) {
                {
                  var aU = aT;
                  break;
                }
              }
            }
          }
          aU && ("break" === aP || "continue" === aP) && aU.tryLoc <= aQ && aQ <= aU.finallyLoc && (aU = null);
          var aV = aU ? aU.completion : {};
          aV.type = aP;
          aV.arg = aQ;
          return aU ? (this.method = "next", this.next = aU.finallyLoc, aw) : this.complete(aV);
        }
      },
      complete: function (aP, aQ) {
        {
          if ("throw" === aP.type) {
            throw aP.arg;
          }
          "break" === aP.type || "continue" === aP.type ? this.next = aP.arg : "return" === aP.type ? (this.rval = this.arg = aP.arg, this.method = "return", this.next = "end") : "normal" === aP.type && aQ && (this.next = aQ);
          return aw;
        }
      },
      finish: function (aP) {
        {
          for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
            {
              var aR = this.tryEntries[aQ];
              if (aR.finallyLoc === aP) {
                this.complete(aR.completion, aR.afterLoc);
                aJ(aR);
                return aw;
              }
            }
          }
        }
      },
      catch: function (aP) {
        {
          for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
            {
              var aS = this.tryEntries[aR];
              if (aS.tryLoc === aP) {
                {
                  var aT = aS.completion;
                  if ("throw" === aT.type) {
                    {
                      var aU = aT.arg;
                      aJ(aS);
                    }
                  }
                  return aU;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aP, aQ, aR) {
        {
          this.delegate = {
            iterator: aL(aP),
            resultName: aQ,
            nextLoc: aR
          };
          "next" === this.method && (this.arg = ag);
          return aw;
        }
      }
    };
    return ah;
  }
  function h(af, ag, ah, ai, aj, ak, al) {
    {
      try {
        {
          var an = af[ak](al);
          var ao = an.value;
        }
      } catch (aq) {
        {
          return void ah(aq);
        }
      }
      an.done ? ag(ao) : Promise.resolve(ao).then(ai, aj);
    }
  }
  function i(af) {
    return function () {
      var ai = this;
      var aj = arguments;
      return new Promise(function (ak, al) {
        var an = af.apply(ai, aj);
        function ao(aq) {
          h(an, ak, al, ao, ap, "next", aq);
        }
        function ap(aq) {
          {
            h(an, ak, al, ao, ap, "throw", aq);
          }
        }
        ao(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.XZXXN : $.getdata("XZXXN")) || "";
  var k = ($.isNode() ? process.env.XZXXNSERVER : $.getdata("XZXXNSERVER")) || "https://dalaoshi.xn--ug8h.eu.org";
  var l = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var m = ($.isNode() ? process.env.AiXianJu : $.getdata("AiXianJu")) || "";
  var n = undefined;
  var o = "";
  var p = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "";
  var B = "62";
  var C = "10016";
  var D = "FR*r!isE5W";
  var E = "";
  var F = "";
  var G = "";
  var H = "";
  var I = "";
  var J = "";
  function K() {
    {
      return L.apply(this, arguments);
    }
  }
  function L() {
    var af = {
      suVKe: function (ag, ah) {
        return ag == ah;
      },
      OeFTq: function (ag, ah) {
        return ag === ah;
      },
      qYQxL: function (ag, ah) {
        return ag(ah);
      },
      lswCG: function (ag, ah) {
        return ag < ah;
      },
      MuiOI: function (ag) {
        return ag();
      },
      RRQsZ: "giwpf",
      jyoaq: "bvgxX",
      fRnlH: function (ag, ah) {
        return ag !== ah;
      },
      qTtSl: "MvPPz",
      DPDPC: "先填写账号密码",
      EUOCc: "return",
      uhKMV: function (ag, ah) {
        return ag(ah);
      },
      TCcuN: function (ag, ah) {
        return ag !== ah;
      },
      dMDmZ: "ZEEBh",
      lsmJD: "随机生成UA",
      qrNpj: "用户：",
      tSiBj: "开始任务",
      RqxvJ: function (ag, ah) {
        return ag(ah);
      },
      xjMUu: "yxPEr",
      CIrku: function (ag, ah) {
        return ag == ah;
      },
      GCNTN: "continue",
      eWZRC: "/api/account/init",
      jPjvB: "获取signature_key",
      KVWRJ: "/web/oauth/credential_auth",
      XnGEl: "hGaqw",
      clkYw: "fsZHU",
      rWYUk: "/api/zbtxz/login",
      CcrZl: "check_token=&code=",
      tOEKf: "&token=&type=-1&union_id=",
      iIsLk: "登录成功",
      AzWwv: "获取id",
      OAdtt: "vKdrJ",
      emDhZ: function (ag, ah) {
        return ag(ah);
      },
      QLMXj: "/api/article/channel_list?channel_id=637c46bbad61a40b77d54c39&isRecommend=0&is_new=1&size=20",
      JPtVO: function (ag, ah) {
        return ag !== ah;
      },
      NxzCt: "WXder",
      pDVFp: "rAgrC",
      GKFVS: "获取id失败",
      czoGh: "获取阅读token",
      BhTaf: function (ag, ah, ai, aj) {
        return ag(ah, ai, aj);
      },
      bDScK: "https://act.tmlyun.com/activity-api/task/h5/auth/userLogin",
      KOsIO: "xsb_xianju",
      COZmt: "/task/h5/activity/getHomeUserLevelTaskList",
      fiGwn: "/task/h5/activity/getLevelTaskUserList?levelTaskId=",
      srVTq: "qrLIq",
      dQPQq: "任务：",
      cJPII: " 进度：",
      XuRWF: function (ag, ah) {
        return ag(ah);
      },
      yRNOE: function (ag, ah) {
        return ag - ah;
      },
      YGxoi: function (ag, ah) {
        return ag !== ah;
      },
      qBgcA: "ZFjEJ",
      RgJTf: function (ag, ah) {
        return ag == ah;
      },
      Pbtlq: function (ag, ah) {
        return ag === ah;
      },
      WAfNp: "&is_end=1&read_time=1617",
      FFLKH: "阅读：",
      bYYyI: function (ag, ah) {
        return ag(ah);
      },
      oUUmy: "/task/h5/activity/getLotteryInfo",
      BJAWE: "次抽奖",
      swnMv: "获取抽奖token",
      QvzoN: function (ag, ah) {
        return ag(ah);
      },
      gntKw: "https://act.tmlyun.com/activity-api/lottery/api/auth/userLogin",
      JKOov: "https://act.tmlyun.com/activity-api/lottery/h5/activity/lottery/userActivityLottery",
      hEfuZ: "抽奖获得：",
      veApH: function (ag, ah) {
        return ag == ah;
      },
      PuXpp: function (ag, ah) {
        return ag === ah;
      },
      qkYUH: " 抽奖获得：",
      XNTYu: function (ag, ah) {
        return ag === ah;
      },
      udZWD: "获取walletId",
      RDjdo: "IGNyn",
      WnqqC: "ynGsl",
      FSnxP: function (ag, ah, ai) {
        return ag(ah, ai);
      },
      RSLtV: "https://act.tmlyun.com/activity-api/lottery/h5/activity/lottery/accountPrizeRecord/userPrizeRecord?activityId=",
      WCyXQ: "inWTx",
      Rqyxf: "获取walletId失败",
      SMiit: "https://my.tmlyun.com/equity-api/user/auth/userLogin",
      aCuIJ: "/redBag/getFundsDetail?fundsChannelType=0",
      phTia: "RIqzL",
      IcxHj: function (ag, ah) {
        return ag(ah);
      },
      zGLpO: "/redBag/saveAliPayAccount?userName=",
      jzSWk: "&account=",
      CtMqe: "/redBag/getWalletInfo?device=",
      CEqcM: "钱包余额：",
      DVDHv: function (ag, ah) {
        return ag !== ah;
      },
      XgDzF: "bFtmd",
      xOjQX: function (ag, ah) {
        return ag(ah);
      },
      rzsJa: "/redBag/createTrans?price=",
      QZPMP: "&fundsChannelType=0&yToken=PYuUbXTdYvNAd1BVVQaXR3dmgO3dY9bt&deviceId=",
      KVHhR: "提现：",
      QWTAf: function (ag, ah) {
        return ag !== ah;
      },
      cELmh: "MZTXZ",
      WTxDd: "xNxJe",
      xmfbe: function (ag, ah) {
        return ag(ah);
      },
      aSacE: "end"
    };
    L = i(g().mark(function ah() {
      var ai = {
        clcFY: "Utils_Code",
        PmFsq: "✅ Utils加载成功, 请继续",
        FEVPX: function (b0, b1) {
          return b0(b1);
        },
        IySDx: function (b0) {
          return b0();
        },
        XaMeL: function (b0, b1) {
          return b0 >= b1;
        },
        UhxlY: "throw",
        CqpBv: "0|5|3|1|4|2",
        kItFk: function (b0, b1) {
          return b0 === b1;
        },
        VmNQu: function (b0, b1) {
          return b0 !== b1;
        },
        fDWpV: "return",
        QXQCu: "next",
        ZGopL: "iterator result is not an object",
        jGaIw: function (b0, b1, b2, b3) {
          return b0(b1, b2, b3);
        },
        KWAdS: function (b0, b1) {
          return b0 === b1;
        },
        rZaAk: function (b0, b1, b2) {
          return b0(b1, b2);
        },
        byZQx: function (b0, b1) {
          return b0 === b1;
        },
        yKiaT: function (b0, b1) {
          return b0 + b1;
        },
        HgiMV: "The iterator does not provide a '",
        YAEar: "' method",
        gtNrm: function (b0, b1, b2, b3, b4) {
          return b0(b1, b2, b3, b4);
        },
        VXFBY: function (b0, b1) {
          return b0 instanceof b1;
        },
        YRdmm: "_invoke"
      };
      {
        var aj;
        var ak;
        var al;
        var am;
        var an;
        var ao;
        var ap;
        var aq;
        var ar;
        var as;
        var at;
        var au;
        var av;
        var aw;
        var ax;
        var ay;
        var az;
        var aA;
        var aB;
        var aC;
        var aD;
        var aE;
        var aF;
        var aG;
        var aH;
        var aI;
        var aJ;
        var aK;
        var aL;
        var aM;
        var aN;
        var aO;
        var aP;
        var aQ;
        var aR;
        var aS;
        var aT;
        var aU;
        var aV;
        var aW;
        var aX;
        var aY;
        var aZ;
        return g().wrap(function (b0) {
          {
            for (;;) {
              switch (b0.prev = b0.next) {
                case 0:
                  if (m) {
                    {
                      b0.next = 5;
                      break;
                    }
                  }
                  console.log("先填写账号密码");
                  b0.next = 4;
                  return ad("先填写账号密码");
                case 4:
                  return b0.abrupt("return");
                case 5:
                  b0.next = 7;
                  return a9();
                case 7:
                  n = b0.sent;
                  aj = m.split(" ");
                  ak = c(aj);
                  b0.prev = 10;
                  ak.s();
                case 12:
                  if ((al = ak.n()).done) {
                    {
                      b0.next = 182;
                      break;
                    }
                  }
                  am = al.value;
                  console.log("随机生成UA");
                  an = a8();
                  y = an.ua;
                  z = an.commonUa;
                  A = an.uuid;
                  console.log(y);
                  console.log(z);
                  t = am.split("&")[0];
                  u = am.split("&")[1];
                  v = am.split("&")[2];
                  w = am.split("&")[3];
                  x = am.split("&")[4] || t;
                  console.log("用户：".concat(t, "开始任务"));
                  b0.next = 29;
                  return a2({
                    token: j,
                    type: "AiXianJu",
                    userId: t
                  });
                case 29:
                  if (ao = b0.sent, 200 == (null == ao ? undefined : ao.code)) {
                    {
                      b0.next = 33;
                      break;
                    }
                  }
                  console.log(null == ao ? undefined : ao.msg);
                  return b0.abrupt("continue", 180);
                case 33:
                  console.log("获取sessionId");
                  b0.next = 36;
                  return S("/api/account/init");
                case 36:
                  ap = b0.sent;
                  r = ap.data.session.id;
                  console.log(r);
                  console.log("获取signature_key");
                  b0.next = 42;
                  return M("/web/init?client_id=".concat(C));
                case 42:
                  aq = b0.sent;
                  o = aq.data.client.signature_key;
                  console.log(o);
                  console.log("获取code");
                  b0.next = 48;
                  return O("/web/oauth/credential_auth");
                case 48:
                  if (ar = b0.sent, ar.data) {
                    {
                      b0.next = 52;
                      break;
                    }
                  }
                  console.log(ar.message);
                  return b0.abrupt("continue", 180);
                case 52:
                  as = ar.data.authorization_code.code;
                  console.log(as);
                  console.log("登录");
                  b0.next = 57;
                  return S("/api/zbtxz/login", "check_token=&code=".concat(as, "&token=&type=-1&union_id="));
                case 57:
                  if (at = b0.sent, console.log("登录成功"), s = at.data.session.account_id, r = at.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), E) {
                    {
                      b0.next = 71;
                      break;
                    }
                  }
                  b0.next = 67;
                  return Q("/api/article/channel_list?channel_id=637c46bbad61a40b77d54c39&isRecommend=0&is_new=1&size=20");
                case 67:
                  au = b0.sent;
                  av = /(?<=q=)[^&",]+/;
                  aw = JSON.stringify(au).match(av);
                  aw && (E = decodeURIComponent(aw[0]));
                case 71:
                  if (E) {
                    {
                      b0.next = 74;
                      break;
                    }
                  }
                  console.log("获取id失败");
                  return b0.abrupt("continue", 180);
                case 74:
                  console.log(E);
                  console.log("获取阅读token");
                  b0.next = 78;
                  return W("https://act.tmlyun.com/activity-api/task/h5/auth/userLogin", {
                    q: E,
                    accountId: s,
                    sessionId: r,
                    tenantCode: "xsb_xianju"
                  }, H);
                case 78:
                  ax = b0.sent;
                  H = ax.data.token;
                  console.log(H);
                  b0.next = 83;
                  return U("/task/h5/activity/getHomeUserLevelTaskList");
                case 83:
                  ay = b0.sent;
                  b0.next = 86;
                  return U("/task/h5/activity/getLevelTaskUserList?levelTaskId=".concat(ay.data[0].taskLevelId));
                case 86:
                  az = b0.sent;
                  aA = c(az.data.appBaseList);
                  b0.prev = 88;
                  aA.s();
                case 90:
                  if ((aB = aA.n()).done) {
                    {
                      b0.next = 108;
                      break;
                    }
                  }
                  aC = aB.value;
                  console.log("任务：".concat(aC.name, " 进度：").concat(aC.taskUserStatusBO.completeNum, "/").concat(aC.taskUserStatusBO.total));
                  b0.next = 95;
                  return Q("/api/article/channel_list?channel_id=637c46bbad61a40b77d54c39&isRecommend=0&is_new=1&size=20");
                case 95:
                  aD = b0.sent;
                  aE = 0;
                case 97:
                  if (!(aE < aC.taskUserStatusBO.total - aC.taskUserStatusBO.completeNum)) {
                    {
                      b0.next = 106;
                      break;
                    }
                  }
                  aG = null == aD || null === (aF = aD.data) || undefined === aF || null === (aF = aF.article_list[aE]) || undefined === aF ? undefined : aF.id;
                  b0.next = 101;
                  return Q("/api/article/read_time?channel_article_id=".concat(aG, "&is_end=1&read_time=1617"));
                case 101:
                  aH = b0.sent;
                  console.log("阅读：".concat(aH.message));
                case 103:
                  aE++;
                  b0.next = 97;
                  break;
                case 106:
                  b0.next = 90;
                  break;
                case 108:
                  b0.next = 113;
                  break;
                case 110:
                  b0.prev = 110;
                  b0.t0 = b0.catch(88);
                  aA.e(b0.t0);
                case 113:
                  b0.prev = 113;
                  aA.f();
                  return b0.finish(113);
                case 116:
                  b0.next = 118;
                  return U("/task/h5/activity/getLotteryInfo");
                case 118:
                  aI = b0.sent;
                  console.log("拥有".concat(aI.data.lotteryCount, "次抽奖"));
                  aJ = "";
                  console.log("获取抽奖token");
                  b0.next = 124;
                  return U("/task/h5/activity/getActivityInfo");
                case 124:
                  aK = b0.sent;
                  aL = /(?<=q=)[^&",]+/;
                  aM = JSON.stringify(aK).match(aL);
                  aM && (F = decodeURIComponent(aM[0]));
                  b0.next = 130;
                  return W("https://act.tmlyun.com/activity-api/lottery/api/auth/userLogin", {
                    q: F,
                    accountId: s,
                    sessionId: r,
                    tenantCode: "xsb_xianju"
                  }, I);
                case 130:
                  aN = b0.sent;
                  I = aN.data.token;
                  aJ = aN.data.thirdId;
                  console.log(I);
                  aO = 0;
                case 135:
                  if (!(aO < aI.data.lotteryCount)) {
                    b0.next = 144;
                    break;
                  }
                  var b2 = {
                    activityId: aJ,
                    clientId: A
                  };
                  b0.next = 138;
                  return W("https://act.tmlyun.com/activity-api/lottery/h5/activity/lottery/userActivityLottery", b2, I);
                case 138:
                  aR = b0.sent;
                  console.log("抽奖获得：".concat(null == aR || null === (aP = aR.data) || undefined === aP ? undefined : aP.prizeName));
                  p += "用户：".concat(t, " 抽奖获得：").concat(null == aR || null === (aQ = aR.data) || undefined === aQ ? undefined : aQ.prizeName, "\n");
                case 141:
                  aO++;
                  b0.next = 135;
                  break;
                case 144:
                  if (console.log("获取walletId"), G) {
                    {
                      b0.next = 152;
                      break;
                    }
                  }
                  b0.next = 148;
                  return Y("https://act.tmlyun.com/activity-api/lottery/h5/activity/lottery/accountPrizeRecord/userPrizeRecord?activityId=".concat(aJ), I);
                case 148:
                  aS = b0.sent;
                  aT = /(?<=u=)[^&",]+/;
                  aU = JSON.stringify(aS).match(aT);
                  aU && (G = decodeURIComponent(aU[0]));
                case 152:
                  if (G) {
                    {
                      b0.next = 155;
                      break;
                    }
                  }
                  console.log("获取walletId失败");
                  return b0.abrupt("continue", 180);
                case 155:
                  console.log(G);
                  console.log("获取钱包token");
                  b0.next = 159;
                  return W("https://my.tmlyun.com/equity-api/user/auth/userLogin", {
                    u: G,
                    accountId: s,
                    sessionId: r
                  }, J);
                case 159:
                  aV = b0.sent;
                  J = aV.data.token;
                  console.log(J);
                  b0.next = 164;
                  return a0("/redBag/getFundsDetail?fundsChannelType=0");
                case 164:
                  if (aW = b0.sent, aW.data.account || !w || !x) {
                    {
                      b0.next = 170;
                      break;
                    }
                  }
                  b0.next = 168;
                  return a0("/redBag/saveAliPayAccount?userName=".concat(w, "&account=").concat(x));
                case 168:
                  aX = b0.sent;
                  console.log("绑定支付宝：".concat(aX.message));
                case 170:
                  b0.next = 172;
                  return a0("/redBag/getWalletInfo?device=".concat(A));
                case 172:
                  if (aY = b0.sent, console.log("钱包余额：".concat(aY.data[0].aliPayTotalPrice)), !(aY.data[0].aliPayTotalPrice > 0)) {
                    {
                      b0.next = 180;
                      break;
                    }
                  }
                  b0.next = 177;
                  return a0("/redBag/createTrans?price=".concat(aY.data[0].aliPayTotalPrice, "&fundsChannelType=0&yToken=PYuUbXTdYvNAd1BVVQaXR3dmgO3dY9bt&deviceId=").concat(A));
                case 177:
                  aZ = b0.sent;
                  console.log("提现：".concat(aZ.message));
                  p += "用户：".concat(t, " 提现：").concat(aZ.message, "\n");
                case 180:
                  b0.next = 12;
                  break;
                case 182:
                  b0.next = 187;
                  break;
                case 184:
                  b0.prev = 184;
                  b0.t1 = b0.catch(10);
                  ak.e(b0.t1);
                case 187:
                  b0.prev = 187;
                  ak.f();
                  return b0.finish(187);
                case 190:
                  if (!p) {
                    {
                      b0.next = 193;
                      break;
                    }
                  }
                  b0.next = 193;
                  return ad(p);
                case 193:
                case "end":
                  return b0.stop();
              }
            }
          }
        }, ah, null, [[10, 184, 187, 190], [88, 110, 113, 116]]);
      }
    }));
    return L.apply(this, arguments);
  }
  function M(af) {
    return N.apply(this, arguments);
  }
  function N() {
    {
      N = i(g().mark(function ah(ai) {
        return g().wrap(function (ak) {
          {
            for (;;) {
              switch (ak.prev = ak.next) {
                case 0:
                  return ak.abrupt("return", new Promise(function (al) {
                    {
                      var an = {
                        url: "https://passport.tmuyun.com".concat(ai),
                        headers: {
                          Connection: "Keep-Alive",
                          "Cache-Control": "no-cache",
                          "X-REQUEST-ID": a6(),
                          "Accept-Encoding": "gzip",
                          "user-agent": y
                        }
                      };
                      $.get(an, function () {
                        {
                          var aq = i(g().mark(function ar(as, at, au) {
                            return g().wrap(function (ax) {
                              {
                                for (;;) {
                                  switch (ax.prev = ax.next) {
                                    case 0:
                                      try {
                                        {
                                          as ? (console.log("".concat(JSON.stringify(as))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(au));
                                        }
                                      } catch (aB) {
                                        {
                                          $.logErr(aB, at);
                                        }
                                      } finally {
                                        {
                                          al();
                                        }
                                      }
                                    case 1:
                                    case "end":
                                      return ax.stop();
                                  }
                                }
                              }
                            }, ar);
                          }));
                          return function (as, at, au) {
                            {
                              return aq.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 1:
                case "end":
                  return ak.stop();
              }
            }
          }
        }, ah);
      }));
      return N.apply(this, arguments);
    }
  }
  function O(af) {
    {
      return P.apply(this, arguments);
    }
  }
  function P() {
    P = i(g().mark(function ag(ah) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a4();
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://passport.tmuyun.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ai.uuid,
                    "X-SIGNATURE": ai.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  },
                  body: ai.body
                };
                $.post(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (av) {
                      {
                        for (;;) {
                          switch (av.prev = av.next) {
                            case 0:
                              try {
                                {
                                  ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(at));
                                }
                              } catch (ay) {
                                $.logErr(ay, as);
                              } finally {
                                {
                                  al();
                                }
                              }
                            case 1:
                            case "end":
                              return av.stop();
                          }
                        }
                      }
                    }, aq);
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
      }, ag);
    }));
    return P.apply(this, arguments);
  }
  function Q(af) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function ag(ah) {
      var aj;
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              aj = a5(ah);
              return ak.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://vapp.tmuyun.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aj.time,
                    "X-SESSION-ID": r,
                    "X-REQUEST-ID": aj.uuid,
                    "X-SIGNATURE": aj.signature,
                    "X-TENANT-ID": B,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  }
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
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
                            al(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            al();
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
              return ak.stop();
          }
        }
      }, ag);
    }));
    return R.apply(this, arguments);
  }
  function S(af, ag) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function ag(ah, ai) {
      var ak;
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              ak = a5(ah);
              return al.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://vapp.tmuyun.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ak.time,
                    "X-SESSION-ID": r,
                    "X-REQUEST-ID": ak.uuid,
                    "X-SIGNATURE": ak.signature,
                    "X-TENANT-ID": B,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  },
                  body: ai
                };
                $.post(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !as) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 9;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(au));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, at);
                          case 14:
                            aw.prev = 14;
                            am();
                            return aw.finish(14);
                          case 17:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return al.stop();
          }
        }
      }, ag);
    }));
    return T.apply(this, arguments);
  }
  function U(af) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function ag(ah) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  url: "https://act.tmlyun.com/activity-api".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "application/json, text/plain, */*",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xiangshan;xsb_xiangshan;4.5.2;native_app;6.8.0",
                    Origin: "https://act.tmlyun.com",
                    "X-Requested-With": "com.aheading.news.xiangshanrb",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://act.tmlyun.com/lottery/?q=".concat(E),
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    Authorization: H
                  }
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
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
                            am(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            am();
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
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return V.apply(this, arguments);
  }
  function W(af, ag, ah) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function ag(ah, ai, aj) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var ao = {
                  Connection: "Keep-Alive",
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xiangshan;xsb_xiangshan;4.5.2;native_app;6.8.0",
                  "X-Requested-With": "com.aheading.news.xiangshanrb",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  Authorization: aj,
                  "X-TOKEN": v
                };
                var ap = {
                  url: ah,
                  headers: ao,
                  body: JSON.stringify(ai)
                };
                $.post(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !at) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 9;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(av));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, au);
                          case 14:
                            aw.prev = 14;
                            am();
                            return aw.finish(14);
                          case 17:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, as, null, [[0, 11, 14, 17]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return X.apply(this, arguments);
  }
  function Y(af, ag) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function ah(ai, aj) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (am) {
                var ao = {
                  Connection: "Keep-Alive",
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xiangshan;xsb_xiangshan;4.5.2;native_app;6.8.0",
                  "X-Requested-With": "com.aheading.news.xiangshanrb",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  Authorization: aj,
                  "X-TOKEN": v
                };
                var aq = {
                  url: ai,
                  headers: ao
                };
                $.get(aq, function () {
                  var as = i(g().mark(function at(au, av, aw) {
                    return g().wrap(function (ay) {
                      for (;;) {
                        switch (ay.prev = ay.next) {
                          case 0:
                            if (ay.prev = 0, !au) {
                              ay.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(au)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ay.next = 9;
                            break;
                          case 6:
                            ay.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(aw));
                          case 9:
                            ay.next = 14;
                            break;
                          case 11:
                            ay.prev = 11;
                            ay.t0 = ay.catch(0);
                            $.logErr(ay.t0, av);
                          case 14:
                            ay.prev = 14;
                            am();
                            return ay.finish(14);
                          case 17:
                          case "end":
                            return ay.stop();
                        }
                      }
                    }, at, null, [[0, 11, 14, 17]]);
                  }));
                  return function (au, av, aw) {
                    return as.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ah);
    }));
    return Z.apply(this, arguments);
  }
  function a0(af) {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://my.tmlyun.com/equity-api".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "application/json, text/plain, */*",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xiangshan;xsb_xiangshan;4.5.2;native_app;6.8.0",
                    Origin: "https://my.tmlyun.com",
                    "X-Requested-With": "com.aheading.news.xiangshanrb",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://my.tmlyun.com/equitypacket/?u=".concat(G),
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    Authorization: J
                  }
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ap) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(ar));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, aq);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return a1.apply(this, arguments);
  }
  function a2(af) {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = i(g().mark(function ag(ah) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  "Content-Type": "application/json"
                };
                var ao = {
                  url: "".concat(k, "/token/verify"),
                  headers: an,
                  body: JSON.stringify(ah)
                };
                $.post(ao, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            try {
                              ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(at));
                            } catch (aw) {
                              $.logErr(aw, as);
                            } finally {
                              al();
                            }
                          case 1:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, aq);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, ag);
    }));
    return a3.apply(this, arguments);
  }
  function a4() {
    var am = new (n.loadJSEncrypt())();
    am.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = am.encrypt(u);
    var ah = a6();
    var ai = "client_id=".concat(C, "&password=").concat(u, "&phone_number=").concat(t);
    var aj = "post%%/web/oauth/credential_auth?".concat(ai, "%%").concat(ah, "%%");
    ai = "client_id=".concat(C, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = n.createCryptoJS();
    var ak = CryptoJS.HmacSHA256(aj, o);
    var al = CryptoJS.enc.Hex.stringify(ak);
    var an = {
      uuid: ah,
      signature: al,
      body: ai
    };
    return an;
  }
  function a5(af) {
    var ag = a6();
    var ah = Date.now();
    af.indexOf("?") > 0 && (af = af.substring(0, af.indexOf("?")));
    CryptoJS = n.createCryptoJS();
    var ai = CryptoJS.SHA256("".concat(af, "&&").concat(r, "&&").concat(ag, "&&").concat(ah, "&&").concat(D, "&&").concat(B)).toString();
    var aj = {
      uuid: ag,
      time: ah,
      signature: ai
    };
    return aj;
  }
  function a6() {
    return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (af) {
      var ag = 16 * Math.random() | 0;
      var ah = "x" === af ? ag : 3 & ag | 8;
      return ah.toString(16);
    });
  }
  function a7(af) {
    return af[Math.floor(Math.random() * af.length)];
  }
  function a8() {
    var af = "4.5.2";
    var ag = a6();
    var ah = a7(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ai = "Xiaomi " + ah;
    var aj = "Android";
    var ak = "".concat(aj.toUpperCase(), ";").concat("11", ";").concat(C, ";").concat(af, ";1.0;null;").concat(ah);
    var al = "".concat(af, ";").concat(ag, ";").concat(ai, ";").concat(aj, ";").concat("11", ";Release;").concat("6.8.0");
    var am = {
      ua: ak,
      commonUa: al,
      uuid: ag
    };
    return am;
  }
  function a9() {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function ag() {
      var ai;
      return g().wrap(function aj(ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              if (ai = $.getdata("Utils_Code") || "", !ai || !Object.keys(ai).length) {
                ak.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ai);
              return ak.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ak.abrupt("return", new Promise(function () {
                var am = i(g().mark(function an(ao) {
                  return g().wrap(function ap(aq) {
                    for (;;) {
                      switch (aq.prev = aq.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (as) {
                            $.setdata(as, "Utils_Code");
                            eval(as);
                            console.log("✅ Utils加载成功, 请继续");
                            ao(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aq.stop();
                      }
                    }
                  }, an);
                }));
                return function (ao) {
                  return am.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return aa.apply(this, arguments);
  }
  function ab() {
    return ac.apply(this, arguments);
  }
  function ac() {
    ac = i(g().mark(function ag() {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var ak = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            try {
                              ao ? (console.log("".concat(JSON.stringify(ao))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(aq).notice);
                            } catch (at) {
                              $.logErr(at, ap);
                            } finally {
                              aj();
                            }
                          case 1:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ag);
    }));
    return ac.apply(this, arguments);
  }
  function ad(af) {
    return ae.apply(this, arguments);
  }
  function ae() {
    ae = i(g().mark(function af(ag) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              if (!$.isNode()) {
                aj.next = 5;
                break;
              }
              aj.next = 3;
              return notify.sendNotify($.name, ag);
            case 3:
              aj.next = 6;
              break;
            case 5:
              $.msg($.name, "", ag);
            case 6:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return ae.apply(this, arguments);
  }
  i(g().mark(function af() {
    return g().wrap(function (ah) {
      for (;;) {
        switch (ah.prev = ah.next) {
          case 0:
            ah.next = 2;
            return ab();
          case 2:
            ah.next = 4;
            return K();
          case 4:
          case "end":
            return ah.stop();
        }
      }
    }, af);
  }))().catch(function (ag) {
    $.log(ag);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}