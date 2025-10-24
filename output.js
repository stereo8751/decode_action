//Fri Oct 24 2025 02:07:11 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("爱仙居");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ag) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ai) {
      {
        return typeof ai;
      }
    } : function (ai) {
      {
        return ai && "function" == typeof Symbol && ai.constructor === Symbol && ai !== Symbol.prototype ? "symbol" : typeof ai;
      }
    };
    return b(ag);
  }
  function c(ag, ah) {
    {
      var aj = "undefined" != typeof Symbol && ag[Symbol.iterator] || ag["@@iterator"];
      if (!aj) {
        {
          if (Array.isArray(ag) || (aj = d(ag)) || ah && ag && "number" == typeof ag.length) {
            {
              aj && (ag = aj);
              var ak = 0;
              var al = function () {};
              return {
                s: al,
                n: function () {
                  {
                    var as = {
                      done: true
                    };
                    return ak >= ag.length ? as : {
                      done: false,
                      value: ag[ak++]
                    };
                  }
                },
                e: function (ar) {
                  {
                    throw ar;
                  }
                },
                f: al
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var am;
      var an = true;
      var ao = false;
      return {
        s: function () {
          {
            aj = aj.call(ag);
          }
        },
        n: function () {
          {
            var as = aj.next();
            an = as.done;
            return as;
          }
        },
        e: function (ar) {
          {
            ao = true;
            am = ar;
          }
        },
        f: function () {
          {
            try {
              {
                an || null == aj.return || aj.return();
              }
            } finally {
              {
                if (ao) {
                  throw am;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ag, ah) {
    {
      if (ag) {
        {
          if ("string" == typeof ag) {
            return f(ag, ah);
          }
          var aj = {}.toString.call(ag).slice(8, -1);
          "Object" === aj && ag.constructor && (aj = ag.constructor.name);
          return "Map" === aj || "Set" === aj ? Array.from(ag) : "Arguments" === aj || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(aj) ? f(ag, ah) : undefined;
        }
      }
    }
  }
  function f(ag, ah) {
    {
      (null == ah || ah > ag.length) && (ah = ag.length);
      for (var ai = 0, aj = Array(ah); ai < ah; ai++) {
        aj[ai] = ag[ai];
      }
      return aj;
    }
  }
  function g() {
    "use strict";

    g = function () {
      {
        return ai;
      }
    };
    var ah;
    var ai = {
      wrap: ar,
      isGeneratorFunction: function (aQ) {
        {
          var aR = "function" == typeof aQ && aQ.constructor;
          return !!aR && (aR === az || "GeneratorFunction" === (aR.displayName || aR.name));
        }
      },
      mark: function (aQ) {
        Object.setPrototypeOf ? Object.setPrototypeOf(aQ, aA) : (aQ.__proto__ = aA, aq(aQ, ap, "GeneratorFunction"));
        aQ.prototype = Object.create(aE);
        return aQ;
      },
      awrap: function (aQ) {
        {
          var aS = {
            __await: aQ
          };
          return aS;
        }
      },
      AsyncIterator: aG,
      async: function (aQ, aR, aS, aT, aU) {
        {
          undefined === aU && (aU = Promise);
          var aW = new aG(ar(aQ, aR, aS, aT), aU);
          return ai.isGeneratorFunction(aR) ? aW : aW.next().then(function (aY) {
            {
              return aY.done ? aY.value : aW.next();
            }
          });
        }
      }
    };
    var aj = Object.prototype;
    var ak = aj.hasOwnProperty;
    var al = Object.defineProperty || function (aN, aO, aP) {
      aN[aO] = aP.value;
    };
    var am = "function" == typeof Symbol ? Symbol : {};
    var an = am.iterator || "@@iterator";
    var ao = am.asyncIterator || "@@asyncIterator";
    var ap = am.toStringTag || "@@toStringTag";
    function aq(aN, aO, aP) {
      {
        var aQ = {
          value: aP,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aN, aO, aQ);
        return aN[aO];
      }
    }
    try {
      {
        aq({}, "");
      }
    } catch (aO) {
      {
        aq = function (aP, aQ, aR) {
          {
            return aP[aQ] = aR;
          }
        };
      }
    }
    function ar(aQ, aR, aS, aT) {
      {
        var aU = aR && aR.prototype instanceof ay ? aR : ay;
        var aV = Object.create(aU.prototype);
        var aW = new aL(aT || []);
        al(aV, "_invoke", {
          value: aH(aQ, aS, aW)
        });
        return aV;
      }
    }
    function as(aQ, aR, aS) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aQ.call(aR, aS)
            };
          }
        } catch (aW) {
          {
            var aT = {
              type: "throw",
              arg: aW
            };
            return aT;
          }
        }
      }
    }
    var at = "suspendedStart";
    var au = "suspendedYield";
    var av = "executing";
    var aw = "completed";
    var ax = {};
    function ay() {}
    function az() {}
    function aA() {}
    var aB = {};
    aq(aB, an, function () {
      return this;
    });
    var aC = Object.getPrototypeOf;
    var aD = aC && aC(aC(aM([])));
    aD && aD !== aj && ak.call(aD, an) && (aB = aD);
    aA.prototype = ay.prototype = Object.create(aB);
    var aE = aA.prototype;
    function aF(aQ) {
      ["next", "throw", "return"].forEach(function (aU) {
        aq(aQ, aU, function (aW) {
          return this._invoke(aU, aW);
        });
      });
    }
    function aG(aQ, aR) {
      {
        function aV(aW, aX, aY, aZ) {
          {
            var b1 = as(aQ[aW], aQ, aX);
            if ("throw" !== b1.type) {
              {
                var b2 = b1.arg;
                var b3 = b2.value;
                return b3 && "object" == b(b3) && ak.call(b3, "__await") ? aR.resolve(b3.__await).then(function (b6) {
                  {
                    aV("next", b6, aY, aZ);
                  }
                }, function (b6) {
                  {
                    aV("throw", b6, aY, aZ);
                  }
                }) : aR.resolve(b3).then(function (b6) {
                  {
                    b2.value = b6;
                    aY(b2);
                  }
                }, function (b6) {
                  {
                    return aV("throw", b6, aY, aZ);
                  }
                });
              }
            }
            aZ(b1.arg);
          }
        }
        var aT;
        al(this, "_invoke", {
          value: function (aW, aX) {
            {
              function aZ() {
                {
                  return new aR(function (b1, b2) {
                    {
                      aV(aW, aX, b1, b2);
                    }
                  });
                }
              }
              return aT = aT ? aT.then(aZ, aZ) : aZ();
            }
          }
        });
      }
    }
    function aH(aQ, aR, aS) {
      {
        var aU = at;
        return function (aW, aX) {
          {
            if (aU === av) {
              throw Error("Generator is already running");
            }
            if (aU === aw) {
              {
                if ("throw" === aW) {
                  throw aX;
                }
                var aZ = {
                  value: ah,
                  done: true
                };
                return aZ;
              }
            }
            for (aS.method = aW, aS.arg = aX;;) {
              {
                var b0 = aS.delegate;
                if (b0) {
                  {
                    var b1 = aI(b0, aS);
                    if (b1) {
                      {
                        if (b1 === ax) {
                          continue;
                        }
                        return b1;
                      }
                    }
                  }
                }
                if ("next" === aS.method) {
                  aS.sent = aS._sent = aS.arg;
                } else {
                  if ("throw" === aS.method) {
                    {
                      if (aU === at) {
                        throw aU = aw, aS.arg;
                      }
                      aS.dispatchException(aS.arg);
                    }
                  } else {
                    "return" === aS.method && aS.abrupt("return", aS.arg);
                  }
                }
                aU = av;
                var b2 = as(aQ, aR, aS);
                if ("normal" === b2.type) {
                  {
                    if (aU = aS.done ? aw : au, b2.arg === ax) {
                      continue;
                    }
                    var b3 = {
                      value: b2.arg,
                      done: aS.done
                    };
                    return b3;
                  }
                }
                "throw" === b2.type && (aU = aw, aS.method = "throw", aS.arg = b2.arg);
              }
            }
          }
        };
      }
    }
    function aI(aQ, aR) {
      {
        var aS = aR.method;
        var aT = aQ.iterator[aS];
        if (aT === ah) {
          aR.delegate = null;
          "throw" === aS && aQ.iterator.return && (aR.method = "return", aR.arg = ah, aI(aQ, aR), "throw" === aR.method) || "return" !== aS && (aR.method = "throw", aR.arg = new TypeError("The iterator does not provide a '" + aS + "' method"));
          return ax;
        }
        var aU = as(aT, aQ.iterator, aR.arg);
        if ("throw" === aU.type) {
          aR.method = "throw";
          aR.arg = aU.arg;
          aR.delegate = null;
          return ax;
        }
        var aV = aU.arg;
        return aV ? aV.done ? (aR[aQ.resultName] = aV.value, aR.next = aQ.nextLoc, "return" !== aR.method && (aR.method = "next", aR.arg = ah), aR.delegate = null, ax) : aV : (aR.method = "throw", aR.arg = new TypeError("iterator result is not an object"), aR.delegate = null, ax);
      }
    }
    function aJ(aQ) {
      {
        var aT = {
          tryLoc: aQ[0]
        };
        1 in aQ && (aT.catchLoc = aQ[1]);
        2 in aQ && (aT.finallyLoc = aQ[2], aT.afterLoc = aQ[3]);
        this.tryEntries.push(aT);
      }
    }
    function aK(aQ) {
      {
        var aR = aQ.completion || {};
        aR.type = "normal";
        delete aR.arg;
        aQ.completion = aR;
      }
    }
    function aL(aQ) {
      {
        var aR = {
          tryLoc: "root"
        };
        this.tryEntries = [aR];
        aQ.forEach(aJ, this);
        this.reset(true);
      }
    }
    function aM(aQ) {
      {
        if (aQ || "" === aQ) {
          {
            var aT = aQ[an];
            if (aT) {
              return aT.call(aQ);
            }
            if ("function" == typeof aQ.next) {
              return aQ;
            }
            if (!isNaN(aQ.length)) {
              {
                var aU = -1;
                var aV = function aY() {
                  {
                    for (; ++aU < aQ.length;) {
                      if (ak.call(aQ, aU)) {
                        aY.value = aQ[aU];
                        aY.done = false;
                        return aY;
                      }
                    }
                    aY.value = ah;
                    aY.done = true;
                    return aY;
                  }
                };
                return aV.next = aV;
              }
            }
          }
        }
        throw new TypeError(b(aQ) + " is not iterable");
      }
    }
    az.prototype = aA;
    al(aE, "constructor", {
      value: aA,
      configurable: true
    });
    al(aA, "constructor", {
      value: az,
      configurable: true
    });
    az.displayName = aq(aA, ap, "GeneratorFunction");
    aF(aG.prototype);
    aq(aG.prototype, ao, function () {
      {
        return this;
      }
    });
    aF(aE);
    aq(aE, ap, "Generator");
    aq(aE, an, function () {
      {
        return this;
      }
    });
    aq(aE, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    ai.keys = function (aQ) {
      {
        var aS = Object(aQ);
        var aT = [];
        for (var aU in aS) aT.push(aU);
        aT.reverse();
        return function aW() {
          {
            for (; aT.length;) {
              {
                var aX = aT.pop();
                if (aX in aS) {
                  aW.value = aX;
                  aW.done = false;
                  return aW;
                }
              }
            }
            aW.done = true;
            return aW;
          }
        };
      }
    };
    ai.values = aM;
    aL.prototype = {
      constructor: aL,
      reset: function (aQ) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ah, this.done = false, this.delegate = null, this.method = "next", this.arg = ah, this.tryEntries.forEach(aK), !aQ) {
            for (var aS in this) "t" === aS.charAt(0) && ak.call(this, aS) && !isNaN(+aS.slice(1)) && (this[aS] = ah);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aQ = this.tryEntries[0].completion;
          if ("throw" === aQ.type) {
            throw aQ.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aQ) {
        {
          if (this.done) {
            throw aQ;
          }
          var aS = this;
          function aZ(b0, b1) {
            aV.type = "throw";
            aV.arg = aQ;
            aS.next = b0;
            b1 && (aS.method = "next", aS.arg = ah);
            return !!b1;
          }
          for (var aT = this.tryEntries.length - 1; aT >= 0; --aT) {
            {
              var aU = this.tryEntries[aT];
              var aV = aU.completion;
              if ("root" === aU.tryLoc) {
                return aZ("end");
              }
              if (aU.tryLoc <= this.prev) {
                {
                  var aW = ak.call(aU, "catchLoc");
                  var aX = ak.call(aU, "finallyLoc");
                  if (aW && aX) {
                    {
                      if (this.prev < aU.catchLoc) {
                        return aZ(aU.catchLoc, true);
                      }
                      if (this.prev < aU.finallyLoc) {
                        return aZ(aU.finallyLoc);
                      }
                    }
                  } else {
                    if (aW) {
                      {
                        if (this.prev < aU.catchLoc) {
                          return aZ(aU.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aX) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aU.finallyLoc) {
                          return aZ(aU.finallyLoc);
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
      abrupt: function (aQ, aR) {
        {
          for (var aT = this.tryEntries.length - 1; aT >= 0; --aT) {
            {
              var aU = this.tryEntries[aT];
              if (aU.tryLoc <= this.prev && ak.call(aU, "finallyLoc") && this.prev < aU.finallyLoc) {
                {
                  var aV = aU;
                  break;
                }
              }
            }
          }
          aV && ("break" === aQ || "continue" === aQ) && aV.tryLoc <= aR && aR <= aV.finallyLoc && (aV = null);
          var aW = aV ? aV.completion : {};
          aW.type = aQ;
          aW.arg = aR;
          return aV ? (this.method = "next", this.next = aV.finallyLoc, ax) : this.complete(aW);
        }
      },
      complete: function (aQ, aR) {
        {
          if ("throw" === aQ.type) {
            throw aQ.arg;
          }
          "break" === aQ.type || "continue" === aQ.type ? this.next = aQ.arg : "return" === aQ.type ? (this.rval = this.arg = aQ.arg, this.method = "return", this.next = "end") : "normal" === aQ.type && aR && (this.next = aR);
          return ax;
        }
      },
      finish: function (aQ) {
        {
          for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
            {
              var aT = this.tryEntries[aS];
              if (aT.finallyLoc === aQ) {
                this.complete(aT.completion, aT.afterLoc);
                aK(aT);
                return ax;
              }
            }
          }
        }
      },
      catch: function (aQ) {
        {
          for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
            {
              var aT = this.tryEntries[aS];
              if (aT.tryLoc === aQ) {
                {
                  var aU = aT.completion;
                  if ("throw" === aU.type) {
                    {
                      var aV = aU.arg;
                      aK(aT);
                    }
                  }
                  return aV;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aQ, aR, aS) {
        this.delegate = {
          iterator: aM(aQ),
          resultName: aR,
          nextLoc: aS
        };
        "next" === this.method && (this.arg = ah);
        return ax;
      }
    };
    return ai;
  }
  function h(ag, ah, ai, aj, ak, al, am) {
    {
      try {
        {
          var ao = ag[al](am);
          var ap = ao.value;
        }
      } catch (ar) {
        {
          return void ai(ar);
        }
      }
      ao.done ? ah(ap) : Promise.resolve(ap).then(aj, ak);
    }
  }
  function i(ag) {
    return function () {
      var aj = this;
      var ak = arguments;
      return new Promise(function (al, am) {
        var ao = ag.apply(aj, ak);
        function ap(ar) {
          {
            h(ao, al, am, ap, aq, "next", ar);
          }
        }
        function aq(ar) {
          {
            h(ao, al, am, ap, aq, "throw", ar);
          }
        }
        ap(undefined);
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
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ah() {
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
        var b0;
        return g().wrap(function (b1) {
          {
            for (;;) {
              switch (b1.prev = b1.next) {
                case 0:
                  if (m) {
                    {
                      b1.next = 5;
                      break;
                    }
                  }
                  console.log("先填写账号密码");
                  b1.next = 4;
                  return ae("先填写账号密码");
                case 4:
                  return b1.abrupt("return");
                case 5:
                  b1.next = 7;
                  return aa();
                case 7:
                  n = b1.sent;
                  aj = m.split(" ");
                  ak = c(aj);
                  b1.prev = 10;
                  ak.s();
                case 12:
                  if ((al = ak.n()).done) {
                    {
                      b1.next = 198;
                      break;
                    }
                  }
                  am = al.value;
                  console.log("随机生成UA");
                  an = a9();
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
                  b1.next = 29;
                  return a2({
                    token: j,
                    type: "AiXianJu",
                    userId: t
                  });
                case 29:
                  if (ao = b1.sent, 200 == (null == ao ? undefined : ao.code)) {
                    {
                      b1.next = 33;
                      break;
                    }
                  }
                  console.log(null == ao ? undefined : ao.msg);
                  return b1.abrupt("continue", 196);
                case 33:
                  console.log("获取sessionId");
                  b1.next = 36;
                  return S("/api/account/init");
                case 36:
                  ap = b1.sent;
                  r = ap.data.session.id;
                  console.log(r);
                  console.log("获取signature_key");
                  b1.next = 42;
                  return M("/web/init?client_id=".concat(C));
                case 42:
                  aq = b1.sent;
                  o = aq.data.client.signature_key;
                  console.log(o);
                  console.log("获取code");
                  b1.next = 48;
                  return O("/web/oauth/credential_auth");
                case 48:
                  if (ar = b1.sent, ar.data) {
                    {
                      b1.next = 52;
                      break;
                    }
                  }
                  console.log(ar.message);
                  return b1.abrupt("continue", 196);
                case 52:
                  as = ar.data.authorization_code.code;
                  console.log(as);
                  console.log("登录");
                  b1.next = 57;
                  return S("/api/zbtxz/login", "check_token=&code=".concat(as, "&token=&type=-1&union_id="));
                case 57:
                  if (at = b1.sent, console.log("登录成功"), s = at.data.session.account_id, r = at.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), E) {
                    {
                      b1.next = 71;
                      break;
                    }
                  }
                  b1.next = 67;
                  return Q("/api/article/channel_list?channel_id=637c46bbad61a40b77d54c39&isRecommend=0&is_new=1&size=20");
                case 67:
                  au = b1.sent;
                  av = /(?<=q=)[^&",]+/;
                  aw = JSON.stringify(au).match(av);
                  aw && (E = decodeURIComponent(aw[0]));
                case 71:
                  if (E) {
                    {
                      b1.next = 74;
                      break;
                    }
                  }
                  console.log("获取id失败");
                  return b1.abrupt("continue", 196);
                case 74:
                  console.log(E);
                  console.log("获取阅读token");
                  b1.next = 78;
                  return W("https://act.tmlyun.com/activity-api/task/h5/auth/userLogin", {
                    q: E,
                    accountId: s,
                    sessionId: r,
                    tenantCode: "xsb_xianju"
                  }, H);
                case 78:
                  ax = b1.sent;
                  H = ax.data.token;
                  console.log(H);
                  b1.next = 83;
                  return U("/task/h5/activity/getHomeUserLevelTaskList");
                case 83:
                  ay = b1.sent;
                  az = c(null == ay ? undefined : ay.data);
                  b1.prev = 85;
                  az.s();
                case 87:
                  if ((aA = az.n()).done) {
                    {
                      b1.next = 124;
                      break;
                    }
                  }
                  if (aB = aA.value, a4() != aB.limitTimeStart) {
                    {
                      b1.next = 122;
                      break;
                    }
                  }
                  b1.next = 92;
                  return U("/task/h5/activity/getLevelTaskUserList?levelTaskId=".concat(aB.taskLevelId));
                case 92:
                  aC = b1.sent;
                  aD = c(aC.data.appBaseList);
                  b1.prev = 94;
                  aD.s();
                case 96:
                  if ((aE = aD.n()).done) {
                    {
                      b1.next = 114;
                      break;
                    }
                  }
                  aF = aE.value;
                  console.log("任务：".concat(aF.name, " 进度：").concat(aF.taskUserStatusBO.completeNum, "/").concat(aF.taskUserStatusBO.total));
                  b1.next = 101;
                  return Q("/api/article/channel_list?channel_id=637c46bbad61a40b77d54c39&isRecommend=0&is_new=1&size=20");
                case 101:
                  aG = b1.sent;
                  aH = 0;
                case 103:
                  if (!(aH < aF.taskUserStatusBO.total - aF.taskUserStatusBO.completeNum)) {
                    {
                      b1.next = 112;
                      break;
                    }
                  }
                  aJ = null == aG || null === (aI = aG.data) || undefined === aI || null === (aI = aI.article_list[aH]) || undefined === aI ? undefined : aI.id;
                  b1.next = 107;
                  return Q("/api/article/read_time?channel_article_id=".concat(aJ, "&is_end=1&read_time=1617"));
                case 107:
                  aK = b1.sent;
                  console.log("阅读：".concat(aK.message));
                case 109:
                  aH++;
                  b1.next = 103;
                  break;
                case 112:
                  b1.next = 96;
                  break;
                case 114:
                  b1.next = 119;
                  break;
                case 116:
                  b1.prev = 116;
                  b1.t0 = b1.catch(94);
                  aD.e(b1.t0);
                case 119:
                  b1.prev = 119;
                  aD.f();
                  return b1.finish(119);
                case 122:
                  b1.next = 87;
                  break;
                case 124:
                  b1.next = 129;
                  break;
                case 126:
                  b1.prev = 126;
                  b1.t1 = b1.catch(85);
                  az.e(b1.t1);
                case 129:
                  b1.prev = 129;
                  az.f();
                  return b1.finish(129);
                case 132:
                  b1.next = 134;
                  return U("/task/h5/activity/getLotteryInfo");
                case 134:
                  aL = b1.sent;
                  console.log("拥有".concat(aL.data.lotteryCount, "次抽奖"));
                  aM = "";
                  console.log("获取抽奖token");
                  b1.next = 140;
                  return U("/task/h5/activity/getActivityInfo");
                case 140:
                  aN = b1.sent;
                  aO = /(?<=q=)[^&",]+/;
                  aP = JSON.stringify(aN).match(aO);
                  aP && (F = decodeURIComponent(aP[0]));
                  b1.next = 146;
                  return W("https://act.tmlyun.com/activity-api/lottery/api/auth/userLogin", {
                    q: F,
                    accountId: s,
                    sessionId: r,
                    tenantCode: "xsb_xianju"
                  }, I);
                case 146:
                  aQ = b1.sent;
                  I = aQ.data.token;
                  aM = aQ.data.thirdId;
                  console.log(I);
                  aR = 0;
                case 151:
                  if (!(aR < aL.data.lotteryCount)) {
                    {
                      b1.next = 160;
                      break;
                    }
                  }
                  var b3 = {
                    activityId: aM,
                    clientId: A
                  };
                  b1.next = 154;
                  return W("https://act.tmlyun.com/activity-api/lottery/h5/activity/lottery/userActivityLottery", b3, I);
                case 154:
                  aU = b1.sent;
                  console.log("抽奖获得：".concat(null == aU || null === (aS = aU.data) || undefined === aS ? undefined : aS.prizeName));
                  p += "用户：".concat(t, " 抽奖获得：").concat(null == aU || null === (aT = aU.data) || undefined === aT ? undefined : aT.prizeName, "\n");
                case 157:
                  aR++;
                  b1.next = 151;
                  break;
                case 160:
                  console.log("获取walletId");
                  G = "";
                  b1.next = 164;
                  return Y("https://act.tmlyun.com/activity-api/lottery/h5/activity/lottery/accountPrizeRecord/userPrizeRecord?activityId=".concat(aM), I);
                case 164:
                  if (aV = b1.sent, aO = /(?<=u=)[^&",]+/, aP = JSON.stringify(aV).match(aO), aP && (G = decodeURIComponent(aP[0])), G) {
                    b1.next = 171;
                    break;
                  }
                  console.log("获取walletId失败");
                  return b1.abrupt("continue", 196);
                case 171:
                  console.log(G);
                  console.log("获取钱包token");
                  b1.next = 175;
                  return W("https://my.tmlyun.com/equity-api/user/auth/userLogin", {
                    u: G,
                    accountId: s,
                    sessionId: r
                  }, "");
                case 175:
                  aW = b1.sent;
                  J = aW.data.token;
                  console.log(J);
                  b1.next = 180;
                  return a0("/redBag/getFundsDetail?fundsChannelType=0");
                case 180:
                  if (aX = b1.sent, aX.data.account || !w || !x) {
                    {
                      b1.next = 186;
                      break;
                    }
                  }
                  b1.next = 184;
                  return a0("/redBag/saveAliPayAccount?userName=".concat(w, "&account=").concat(x));
                case 184:
                  aY = b1.sent;
                  console.log("绑定支付宝：".concat(aY.message));
                case 186:
                  b1.next = 188;
                  return a0("/redBag/getWalletInfo?device=".concat(A));
                case 188:
                  if (aZ = b1.sent, console.log("钱包余额：".concat(aZ.data[0].aliPayTotalPrice)), !(aZ.data[0].aliPayTotalPrice > 0)) {
                    {
                      b1.next = 196;
                      break;
                    }
                  }
                  b1.next = 193;
                  return a0("/redBag/createTrans?price=".concat(aZ.data[0].aliPayTotalPrice, "&fundsChannelType=0&yToken=PYuUbXTdYvNAd1BVVQaXR3dmgO3dY9bt&deviceId=").concat(A));
                case 193:
                  b0 = b1.sent;
                  console.log("提现：".concat(b0.message));
                  p += "用户：".concat(t, " 提现：").concat(b0.message, "\n");
                case 196:
                  b1.next = 12;
                  break;
                case 198:
                  b1.next = 203;
                  break;
                case 200:
                  b1.prev = 200;
                  b1.t2 = b1.catch(10);
                  ak.e(b1.t2);
                case 203:
                  b1.prev = 203;
                  ak.f();
                  return b1.finish(203);
                case 206:
                  if (!p) {
                    {
                      b1.next = 209;
                      break;
                    }
                  }
                  b1.next = 209;
                  return ae(p);
                case 209:
                case "end":
                  return b1.stop();
              }
            }
          }
        }, ah, null, [[10, 200, 203, 206], [85, 126, 129, 132], [94, 116, 119, 122]]);
      }
    }));
    return L.apply(this, arguments);
  }
  function M(ag) {
    return N.apply(this, arguments);
  }
  function N() {
    var ag = {
      KXaWd: function (ah, ai) {
        return ah(ai);
      },
      cykAX: "fmtNw",
      GvphT: "sGdpx",
      xKfTR: "end"
    };
    N = i(g().mark(function ah(ai) {
      var aj = {
        sTHUM: function (ak, al) {
          return ak < al;
        },
        sChXz: function (ak, al, am) {
          return ak(al, am);
        },
        PZEDR: function (ak, al) {
          return ak === al;
        },
        EUkYS: "throw",
        ZokSx: function (ak, al) {
          return ak !== al;
        },
        tkmZw: "The iterator does not provide a '",
        EJaWv: "' method",
        moXPo: "next",
        gEUUX: "HTGpE",
        aGcpC: "Utils_Code",
        vvzLW: function (ak) {
          return ak();
        },
        TfXNT: function (ak, al) {
          return ak(al);
        },
        YdGGu: " API请求失败，请检查网路重试",
        SsGLh: "coNUU",
        HBqvU: "end",
        fOQQP: "vsQOW",
        LKEyS: function (ak, al) {
          return ak !== al;
        },
        ZLvPd: "fYQCl",
        BTcAJ: "https://passport.tmuyun.com",
        EYXvN: "Keep-Alive",
        UkHxn: "gzip"
      };
      return g().wrap(function (ak) {
        var al = {
          CfLWd: function (am, an) {
            return am + an;
          },
          LKhxu: function (am, an) {
            return am(an);
          }
        };
        {
          for (;;) {
            switch (ak.prev = ak.next) {
              case 0:
                return ak.abrupt("return", new Promise(function (an) {
                  {
                    var ap = {
                      url: "https://passport.tmuyun.com".concat(ai),
                      headers: {
                        Connection: "Keep-Alive",
                        "Cache-Control": "no-cache",
                        "X-REQUEST-ID": a7(),
                        "Accept-Encoding": "gzip",
                        "user-agent": y
                      }
                    };
                    $.get(ap, function () {
                      {
                        var as = i(g().mark(function au(av, aw, ax) {
                          {
                            return g().wrap(function (aA) {
                              {
                                for (;;) {
                                  switch (aA.prev = aA.next) {
                                    case 0:
                                      try {
                                        {
                                          av ? (console.log("".concat(JSON.stringify(av))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : an(JSON.parse(ax));
                                        }
                                      } catch (aE) {
                                        $.logErr(aE, aw);
                                      } finally {
                                        {
                                          an();
                                        }
                                      }
                                    case 1:
                                    case "end":
                                      return aA.stop();
                                  }
                                }
                              }
                            }, au);
                          }
                        }));
                        return function (av, aw, ax) {
                          {
                            return as.apply(this, arguments);
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
  function O(ag) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function ah(ai) {
      var aj;
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              aj = a5();
              return ak.abrupt("return", new Promise(function (am) {
                var ao = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": aj.uuid,
                  "X-SIGNATURE": aj.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": y
                };
                var ap = {
                  url: "https://passport.tmuyun.com".concat(ai),
                  headers: ao,
                  body: aj.body
                };
                $.post(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    {
                      return g().wrap(function (ay) {
                        {
                          for (;;) {
                            switch (ay.prev = ay.next) {
                              case 0:
                                try {
                                  at ? (console.log("".concat(JSON.stringify(at))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : am(JSON.parse(av));
                                } catch (aB) {
                                  {
                                    $.logErr(aB, au);
                                  }
                                } finally {
                                  am();
                                }
                              case 1:
                              case "end":
                                return ay.stop();
                            }
                          }
                        }
                      }, as);
                    }
                  }));
                  return function (at, au, av) {
                    {
                      return ar.apply(this, arguments);
                    }
                  };
                }());
              }));
            case 2:
            case "end":
              return ak.stop();
          }
        }
      }, ah);
    }));
    return P.apply(this, arguments);
  }
  function Q(ag) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function ag(ah) {
      var aj;
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              aj = a6(ah);
              return ak.abrupt("return", new Promise(function (am) {
                var ao = {
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
                $.get(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !as) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            am();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
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
              return ak.stop();
          }
        }
      }, ag);
    }));
    return R.apply(this, arguments);
  }
  function S(ag, ah) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function ag(ah, ai) {
      var ak;
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              ak = a6(ah);
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
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !as) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            am();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
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
  function U(ag) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function ah(ai) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
                var ao = {
                  url: "https://act.tmlyun.com/activity-api".concat(ai),
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
                $.get(ao, function () {
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
                            an(JSON.parse(au));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, at);
                          case 14:
                            aw.prev = 14;
                            an();
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
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ah);
    }));
    return V.apply(this, arguments);
  }
  function W(ag, ah, ai) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function ah(ai, aj, ak) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
                var ap = {
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
                  Authorization: ak,
                  "X-TOKEN": v
                };
                var aq = {
                  url: ai,
                  headers: ap,
                  body: JSON.stringify(aj)
                };
                $.post(aq, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            if (ax.prev = 0, !at) {
                              ax.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ax.next = 9;
                            break;
                          case 6:
                            ax.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(JSON.parse(av));
                          case 9:
                            ax.next = 14;
                            break;
                          case 11:
                            ax.prev = 11;
                            ax.t0 = ax.catch(0);
                            $.logErr(ax.t0, au);
                          case 14:
                            ax.prev = 14;
                            an();
                            return ax.finish(14);
                          case 17:
                          case "end":
                            return ax.stop();
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
              return al.stop();
          }
        }
      }, ah);
    }));
    return X.apply(this, arguments);
  }
  function Y(ag, ah) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function ah(ai, aj) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
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
                    return g().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            if (ax.prev = 0, !au) {
                              ax.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(au)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ax.next = 9;
                            break;
                          case 6:
                            ax.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(JSON.parse(aw));
                          case 9:
                            ax.next = 14;
                            break;
                          case 11:
                            ax.prev = 11;
                            ax.t0 = ax.catch(0);
                            $.logErr(ax.t0, av);
                          case 14:
                            ax.prev = 14;
                            an();
                            return ax.finish(14);
                          case 17:
                          case "end":
                            return ax.stop();
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
  function a0(ag) {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = i(g().mark(function ah(ai) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
                var ao = {
                  url: "https://my.tmlyun.com/equity-api".concat(ai),
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
                $.get(ao, function () {
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
                            an(JSON.parse(au));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, at);
                          case 14:
                            aw.prev = 14;
                            an();
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
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ah);
    }));
    return a1.apply(this, arguments);
  }
  function a2(ag) {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = i(g().mark(function ah(ai) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "".concat(k, "/token/verify"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(ai)
                };
                $.post(an, function () {
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
      }, ah);
    }));
    return a3.apply(this, arguments);
  }
  function a4() {
    var ag = new Date();
    var ah = ag.getFullYear();
    var ai = String(ag.getMonth() + 1).padStart(2, "0");
    var aj = String(ag.getDate()).padStart(2, "0");
    return "".concat(ah, "-").concat(ai, "-").concat(aj, " 00:00:00");
  }
  function a5() {
    var ai = new (n.loadJSEncrypt())();
    ai.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = ai.encrypt(u);
    var aj = a7();
    var ak = "client_id=".concat(C, "&password=").concat(u, "&phone_number=").concat(t);
    var al = "post%%/web/oauth/credential_auth?".concat(ak, "%%").concat(aj, "%%");
    ak = "client_id=".concat(C, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = n.createCryptoJS();
    var am = CryptoJS.HmacSHA256(al, o);
    var an = CryptoJS.enc.Hex.stringify(am);
    var ao = {
      uuid: aj,
      signature: an,
      body: ak
    };
    return ao;
  }
  function a6(ag) {
    var ah = a7();
    var ai = Date.now();
    ag.indexOf("?") > 0 && (ag = ag.substring(0, ag.indexOf("?")));
    CryptoJS = n.createCryptoJS();
    var aj = CryptoJS.SHA256("".concat(ag, "&&").concat(r, "&&").concat(ah, "&&").concat(ai, "&&").concat(D, "&&").concat(B)).toString();
    var ak = {
      uuid: ah,
      time: ai,
      signature: aj
    };
    return ak;
  }
  function a7() {
    return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ah) {
      var ai = 16 * Math.random() | 0;
      var aj = "x" === ah ? ai : 3 & ai | 8;
      return aj.toString(16);
    });
  }
  function a8(ag) {
    return ag[Math.floor(Math.random() * ag.length)];
  }
  function a9() {
    var ag = "4.5.2";
    var ah = a7();
    var ai = a8(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var aj = "Xiaomi " + ai;
    var ak = "Android";
    var al = "".concat(ak.toUpperCase(), ";").concat("11", ";").concat(C, ";").concat(ag, ";1.0;null;").concat(ai);
    var am = "".concat(ag, ";").concat(ah, ";").concat(aj, ";").concat(ak, ";").concat("11", ";Release;").concat("6.8.0");
    var an = {
      ua: al,
      commonUa: am,
      uuid: ah
    };
    return an;
  }
  function aa() {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function ah() {
      var aj;
      return g().wrap(function ak(al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              if (aj = $.getdata("Utils_Code") || "", !aj || !Object.keys(aj).length) {
                al.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(aj);
              return al.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return al.abrupt("return", new Promise(function () {
                var an = i(g().mark(function ao(ap) {
                  return g().wrap(function ar(as) {
                    for (;;) {
                      switch (as.prev = as.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (at) {
                            $.setdata(at, "Utils_Code");
                            eval(at);
                            console.log("✅ Utils加载成功, 请继续");
                            ap(creatUtils());
                          });
                        case 1:
                        case "end":
                          return as.stop();
                      }
                    }
                  }, ao);
                }));
                return function (ap) {
                  return an.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return al.stop();
          }
        }
      }, ah);
    }));
    return ab.apply(this, arguments);
  }
  function ac() {
    return ad.apply(this, arguments);
  }
  function ad() {
    ad = i(g().mark(function ag() {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(ar).notice);
                            } catch (av) {
                              $.logErr(av, aq);
                            } finally {
                              aj();
                            }
                          case 1:
                          case "end":
                            return au.stop();
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
              return ai.stop();
          }
        }
      }, ag);
    }));
    return ad.apply(this, arguments);
  }
  function ae(ag) {
    return af.apply(this, arguments);
  }
  function af() {
    af = i(g().mark(function ah(ai) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              if (!$.isNode()) {
                aj.next = 5;
                break;
              }
              aj.next = 3;
              return notify.sendNotify($.name, ai);
            case 3:
              aj.next = 6;
              break;
            case 5:
              $.msg($.name, "", ai);
            case 6:
            case "end":
              return aj.stop();
          }
        }
      }, ah);
    }));
    return af.apply(this, arguments);
  }
  i(g().mark(function ag() {
    return g().wrap(function (ai) {
      for (;;) {
        switch (ai.prev = ai.next) {
          case 0:
            ai.next = 2;
            return ac();
          case 2:
            ai.next = 4;
            return K();
          case 4:
          case "end":
            return ai.stop();
        }
      }
    }, ag);
  }))().catch(function (ah) {
    $.log(ah);
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