//Fri Jul 25 2025 00:50:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("新江北");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a5) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a7) {
      return typeof a7;
    } : function (a7) {
      return a7 && "function" == typeof Symbol && a7.constructor === Symbol && a7 !== Symbol.prototype ? "symbol" : typeof a7;
    };
    return b(a5);
  }
  function c(a5, a6) {
    var a8 = "undefined" != typeof Symbol && a5[Symbol.iterator] || a5["@@iterator"];
    if (!a8) {
      if (Array.isArray(a5) || (a8 = d(a5)) || a6 && a5 && "number" == typeof a5.length) {
        a8 && (a5 = a8);
        var a9 = 0,
          aa = function () {};
        return {
          s: aa,
          n: function () {
            var ag = {
              done: !0
            };
            return a9 >= a5.length ? ag : {
              done: !1,
              value: a5[a9++]
            };
          },
          e: function (ag) {
            throw ag;
          },
          f: aa
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ab,
      ac = !0,
      ad = !1;
    return {
      s: function () {
        a8 = a8.call(a5);
      },
      n: function () {
        var ah = a8.next();
        ac = ah.done;
        return ah;
      },
      e: function (ah) {
        ad = !0;
        ab = ah;
      },
      f: function () {
        try {
          ac || null == a8.return || a8.return();
        } finally {
          if (ad) {
            throw ab;
          }
        }
      }
    };
  }
  function d(a5, a6) {
    if (a5) {
      if ("string" == typeof a5) {
        return f(a5, a6);
      }
      var a8 = {}.toString.call(a5).slice(8, -1);
      "Object" === a8 && a5.constructor && (a8 = a5.constructor.name);
      return "Map" === a8 || "Set" === a8 ? Array.from(a5) : "Arguments" === a8 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a8) ? f(a5, a6) : void 0;
    }
  }
  function f(a5, a6) {
    (null == a6 || a6 > a5.length) && (a6 = a5.length);
    for (var a7 = 0, a8 = Array(a6); a7 < a6; a7++) {
      a8[a7] = a5[a7];
    }
    return a8;
  }
  function g() {
    'use strict';

    g = function () {
      return a7;
    };
    var a6,
      a7 = {},
      a8 = Object.prototype,
      a9 = a8.hasOwnProperty,
      aa = Object.defineProperty || function (aC, aD, aE) {
        aC[aD] = aE.value;
      },
      ab = "function" == typeof Symbol ? Symbol : {},
      ac = ab.iterator || "@@iterator",
      ad = ab.asyncIterator || "@@asyncIterator",
      ae = ab.toStringTag || "@@toStringTag";
    function af(aC, aD, aE) {
      var aF = {
        value: aE,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aC, aD, aF);
      return aC[aD];
    }
    try {
      af({}, "");
    } catch (aD) {
      af = function (aE, aF, aG) {
        return aE[aF] = aG;
      };
    }
    function ag(aF, aG, aH, aI) {
      var aJ = aG && aG.prototype instanceof an ? aG : an,
        aK = Object.create(aJ.prototype),
        aL = new aA(aI || []);
      aa(aK, "_invoke", {
        value: aw(aF, aH, aL)
      });
      return aK;
    }
    function ah(aF, aG, aH) {
      try {
        return {
          type: "normal",
          arg: aF.call(aG, aH)
        };
      } catch (aL) {
        var aJ = {};
        aJ.type = "throw";
        aJ.arg = aL;
        return aJ;
      }
    }
    a7.wrap = ag;
    var ai = "suspendedStart",
      aj = "suspendedYield",
      ak = "executing",
      al = "completed",
      am = {};
    function an() {}
    function ao() {}
    function ap() {}
    var aq = {};
    af(aq, ac, function () {
      return this;
    });
    var ar = Object.getPrototypeOf,
      as = ar && ar(ar(aB([])));
    as && as !== a8 && a9.call(as, ac) && (aq = as);
    ap.prototype = an.prototype = Object.create(aq);
    var at = ap.prototype;
    function au(aF) {
      ["next", "throw", "return"].forEach(function (aI) {
        af(aF, aI, function (aK) {
          return this._invoke(aI, aK);
        });
      });
    }
    function av(aF, aG) {
      function aK(aL, aM, aN, aO) {
        var aQ = ah(aF[aL], aF, aM);
        if ("throw" !== aQ.type) {
          var aR = aQ.arg,
            aS = aR.value;
          return aS && "object" == b(aS) && a9.call(aS, "__await") ? aG.resolve(aS.__await).then(function (aT) {
            aK("next", aT, aN, aO);
          }, function (aT) {
            aK("throw", aT, aN, aO);
          }) : aG.resolve(aS).then(function (aT) {
            aR.value = aT;
            aN(aR);
          }, function (aT) {
            return aK("throw", aT, aN, aO);
          });
        }
        aO(aQ.arg);
      }
      var aI;
      aa(this, "_invoke", {
        value: function (aL, aM) {
          function aP() {
            return new aG(function (aS, aT) {
              aK(aL, aM, aS, aT);
            });
          }
          return aI = aI ? aI.then(aP, aP) : aP();
        }
      });
    }
    function aw(aF, aG, aH) {
      var aJ = ai;
      return function (aK, aL) {
        if (aJ === ak) {
          throw Error("Generator is already running");
        }
        if (aJ === al) {
          if ("throw" === aK) {
            throw aL;
          }
          var aN = {
            value: a6,
            done: !0
          };
          return aN;
        }
        for (aH.method = aK, aH.arg = aL;;) {
          var aO = aH.delegate;
          if (aO) {
            var aP = ax(aO, aH);
            if (aP) {
              if (aP === am) {
                continue;
              }
              return aP;
            }
          }
          if ("next" === aH.method) {
            aH.sent = aH._sent = aH.arg;
          } else {
            if ("throw" === aH.method) {
              if (aJ === ai) {
                throw aJ = al, aH.arg;
              }
              aH.dispatchException(aH.arg);
            } else {
              "return" === aH.method && aH.abrupt("return", aH.arg);
            }
          }
          aJ = ak;
          var aQ = ah(aF, aG, aH);
          if ("normal" === aQ.type) {
            if (aJ = aH.done ? al : aj, aQ.arg === am) {
              continue;
            }
            var aR = {};
            aR.value = aQ.arg;
            aR.done = aH.done;
            return aR;
          }
          "throw" === aQ.type && (aJ = al, aH.method = "throw", aH.arg = aQ.arg);
        }
      };
    }
    function ax(aF, aG) {
      var aL = aG.method,
        aM = aF.iterator[aL];
      if (aM === a6) {
        aG.delegate = null;
        "throw" === aL && aF.iterator.return && (aG.method = "return", aG.arg = a6, ax(aF, aG), "throw" === aG.method) || "return" !== aL && (aG.method = "throw", aG.arg = new TypeError("The iterator does not provide a '" + aL + "' method"));
        return am;
      }
      var aK = ah(aM, aF.iterator, aG.arg);
      if ("throw" === aK.type) {
        aG.method = "throw";
        aG.arg = aK.arg;
        aG.delegate = null;
        return am;
      }
      var aJ = aK.arg;
      return aJ ? aJ.done ? (aG[aF.resultName] = aJ.value, aG.next = aF.nextLoc, "return" !== aG.method && (aG.method = "next", aG.arg = a6), aG.delegate = null, am) : aJ : (aG.method = "throw", aG.arg = new TypeError("iterator result is not an object"), aG.delegate = null, am);
    }
    function ay(aF) {
      var aG = {
        tryLoc: aF[0]
      };
      var aH = aG;
      1 in aF && (aH.catchLoc = aF[1]);
      2 in aF && (aH.finallyLoc = aF[2], aH.afterLoc = aF[3]);
      this.tryEntries.push(aH);
    }
    function az(aF) {
      var aH = aF.completion || {};
      aH.type = "normal";
      delete aH.arg;
      aF.completion = aH;
    }
    function aA(aF) {
      var aG = {
        tryLoc: "root"
      };
      this.tryEntries = [aG];
      aF.forEach(ay, this);
      this.reset(!0);
    }
    function aB(aF) {
      if (aF || "" === aF) {
        var aH = aF[ac];
        if (aH) {
          return aH.call(aF);
        }
        if ("function" == typeof aF.next) {
          return aF;
        }
        if (!isNaN(aF.length)) {
          var aI = -1,
            aJ = function aK() {
              for (; ++aI < aF.length;) {
                if (a9.call(aF, aI)) {
                  aK.value = aF[aI];
                  aK.done = !1;
                  return aK;
                }
              }
              aK.value = a6;
              aK.done = !0;
              return aK;
            };
          return aJ.next = aJ;
        }
      }
      throw new TypeError(b(aF) + " is not iterable");
    }
    ao.prototype = ap;
    aa(at, "constructor", {
      value: ap,
      configurable: !0
    });
    aa(ap, "constructor", {
      value: ao,
      configurable: !0
    });
    ao.displayName = af(ap, ae, "GeneratorFunction");
    a7.isGeneratorFunction = function (aF) {
      var aG = "function" == typeof aF && aF.constructor;
      return !!aG && (aG === ao || "GeneratorFunction" === (aG.displayName || aG.name));
    };
    a7.mark = function (aF) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aF, ap) : (aF.__proto__ = ap, af(aF, ae, "GeneratorFunction"));
      aF.prototype = Object.create(at);
      return aF;
    };
    a7.awrap = function (aF) {
      var aG = {
        __await: aF
      };
      return aG;
    };
    au(av.prototype);
    af(av.prototype, ad, function () {
      return this;
    });
    a7.AsyncIterator = av;
    a7.async = function (aF, aG, aH, aI, aJ) {
      void 0 === aJ && (aJ = Promise);
      var aK = new av(ag(aF, aG, aH, aI), aJ);
      return a7.isGeneratorFunction(aG) ? aK : aK.next().then(function (aM) {
        return aM.done ? aM.value : aK.next();
      });
    };
    au(at);
    af(at, ae, "Generator");
    af(at, ac, function () {
      return this;
    });
    af(at, "toString", function () {
      return "[object Generator]";
    });
    a7.keys = function (aF) {
      var aG = Object(aF),
        aH = [];
      for (var aI in aG) aH.push(aI);
      aH.reverse();
      return function aK() {
        for (; aH.length;) {
          var aL = aH.pop();
          if (aL in aG) {
            aK.value = aL;
            aK.done = !1;
            return aK;
          }
        }
        aK.done = !0;
        return aK;
      };
    };
    a7.values = aB;
    aA.prototype = {
      constructor: aA,
      reset: function (aF) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a6, this.done = !1, this.delegate = null, this.method = "next", this.arg = a6, this.tryEntries.forEach(az), !aF) {
          for (var aG in this) "t" === aG.charAt(0) && a9.call(this, aG) && !isNaN(+aG.slice(1)) && (this[aG] = a6);
        }
      },
      stop: function () {
        this.done = !0;
        var aG = this.tryEntries[0].completion;
        if ("throw" === aG.type) {
          throw aG.arg;
        }
        return this.rval;
      },
      dispatchException: function (aF) {
        if (this.done) {
          throw aF;
        }
        var aH = this;
        function aN(aO, aP) {
          aK.type = "throw";
          aK.arg = aF;
          aH.next = aO;
          aP && (aH.method = "next", aH.arg = a6);
          return !!aP;
        }
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI],
            aK = aJ.completion;
          if ("root" === aJ.tryLoc) {
            return aN("end");
          }
          if (aJ.tryLoc <= this.prev) {
            var aL = a9.call(aJ, "catchLoc"),
              aM = a9.call(aJ, "finallyLoc");
            if (aL && aM) {
              if (this.prev < aJ.catchLoc) {
                return aN(aJ.catchLoc, !0);
              }
              if (this.prev < aJ.finallyLoc) {
                return aN(aJ.finallyLoc);
              }
            } else {
              if (aL) {
                if (this.prev < aJ.catchLoc) {
                  return aN(aJ.catchLoc, !0);
                }
              } else {
                if (!aM) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aJ.finallyLoc) {
                  return aN(aJ.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aF, aG) {
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI];
          if (aJ.tryLoc <= this.prev && a9.call(aJ, "finallyLoc") && this.prev < aJ.finallyLoc) {
            var aK = aJ;
            break;
          }
        }
        aK && ("break" === aF || "continue" === aF) && aK.tryLoc <= aG && aG <= aK.finallyLoc && (aK = null);
        var aL = aK ? aK.completion : {};
        aL.type = aF;
        aL.arg = aG;
        return aK ? (this.method = "next", this.next = aK.finallyLoc, am) : this.complete(aL);
      },
      complete: function (aF, aG) {
        if ("throw" === aF.type) {
          throw aF.arg;
        }
        "break" === aF.type || "continue" === aF.type ? this.next = aF.arg : "return" === aF.type ? (this.rval = this.arg = aF.arg, this.method = "return", this.next = "end") : "normal" === aF.type && aG && (this.next = aG);
        return am;
      },
      finish: function (aF) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG];
          if (aH.finallyLoc === aF) {
            this.complete(aH.completion, aH.afterLoc);
            az(aH);
            return am;
          }
        }
      },
      catch: function (aF) {
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH];
          if (aI.tryLoc === aF) {
            var aJ = aI.completion;
            if ("throw" === aJ.type) {
              var aK = aJ.arg;
              az(aI);
            }
            return aK;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aF, aG, aH) {
        this.delegate = {
          iterator: aB(aF),
          resultName: aG,
          nextLoc: aH
        };
        "next" === this.method && (this.arg = a6);
        return am;
      }
    };
    return a7;
  }
  function h(a5, a6, a7, a8, a9, aa, ab) {
    try {
      var ad = a5[aa](ab),
        ae = ad.value;
    } catch (ag) {
      return void a7(ag);
    }
    ad.done ? a6(ae) : Promise.resolve(ae).then(a8, a9);
  }
  function i(a5) {
    return function () {
      var a8 = this,
        a9 = arguments;
      return new Promise(function (aa, ab) {
        var ad = a5.apply(a8, a9);
        function ae(ag) {
          h(ad, aa, ab, ae, af, "next", ag);
        }
        function af(ag) {
          h(ad, aa, ab, ae, af, "throw", ag);
        }
        ae(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.XinJiangBei : $.getdata("XinJiangBei")) || "",
    k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top",
    l = void 0;
  window = {};
  var m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "",
    x = "",
    y = "",
    z = "",
    A = "102",
    B = "10050",
    C = "FR*r!isE5W";
  function D() {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function a7() {
      var a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2;
      return g().wrap(function b4(b5) {
        for (;;) {
          switch (b5.prev = b5.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                b5.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              b5.next = 5;
              return a3("先去boxjs填写账号密码");
            case 5:
              return b5.abrupt("return");
            case 6:
              b5.next = 8;
              return a1();
            case 8:
              l = b5.sent;
              a9 = j.split(" ");
              aa = c(a9);
              b5.prev = 11;
              aa.s();
            case 13:
              if ((ab = aa.n()).done) {
                b5.next = 235;
                break;
              }
              ac = ab.value;
              q = ac.split("&")[0];
              r = ac.split("&")[1];
              s = ac.split("&")[2];
              t = ac.split("&")[3];
              v = ac.split("&")[4];
              console.log("用户：".concat(q, "开始任务"));
              ad = Z();
              u = ad.ua;
              w = ad.uuid;
              console.log(u);
              console.log(v);
              console.log("获取sessionId");
              b5.next = 29;
              return L("/api/account/init");
            case 29:
              ae = b5.sent;
              o = ae.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              b5.next = 35;
              return F("/web/init?client_id=".concat(B));
            case 35:
              af = b5.sent;
              m = af.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              b5.next = 41;
              return H("/web/oauth/credential_auth");
            case 41:
              if (ag = b5.sent, ag.data) {
                b5.next = 45;
                break;
              }
              console.log(ag.message);
              return b5.abrupt("continue", 233);
            case 45:
              ah = ag.data.authorization_code.code;
              console.log(ah);
              console.log("登录");
              b5.next = 50;
              return L("/api/zbtxz/login", "check_token=&code=".concat(ah, "&token=&type=-1&union_id="));
            case 50:
              if (ai = b5.sent, console.log("登录成功"), p = ai.data.session.account_id, o = ai.data.session.id, console.log("————————————"), y) {
                b5.next = 63;
                break;
              }
              console.log("获取id");
              b5.next = 59;
              return J("/api/buoy/list");
            case 59:
              aj = b5.sent;
              ak = /hdtool%2Findex%3Fid%3D(\d+)/;
              al = JSON.stringify(aj).match(ak);
              al && (y = al[1]);
            case 63:
              if (!y) {
                b5.next = 143;
                break;
              }
              console.log("阅读登录");
              b5.next = 67;
              return N("/customActivity/zjtm/autoLogin?_=".concat(Date.now(), "&sessionId=").concat(o, "&accountId=").concat(p, "&redirectUrl=https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=").concat(y, "&dbnewopen"));
            case 67:
              am = b5.sent;
              an = am.data;
              x = "";
              b5.next = 72;
              return R(an);
            case 72:
              x = b5.sent;
              console.log("获取抽奖key");
              b5.next = 76;
              return P("https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=".concat(y, "&dbnewopen&from=login&spm=92261.1.1.1"));
            case 76:
              ao = b5.sent;
              b5.next = 79;
              return T("/hdtool/ajaxElement?_=".concat(Date.now()), "hdType=dev&hdToolId=&preview=false&actId=".concat(y, "&adslotId="));
            case 79:
              ap = b5.sent;
              console.log("拥有".concat(ap.element.freeLimit, "次抽奖"));
              aq = 0;
            case 82:
              if (!(aq < ap.element.freeLimit)) {
                b5.next = 141;
                break;
              }
              b5.next = 85;
              return T("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(y, "&activityType=hdtool&consumerId=").concat(z));
            case 85:
              ar = b5.sent;
              eval(ar.token);
              as = window[ao];
              b5.next = 90;
              return T("/hdtool/dy/doJoin?dpm=92261.3.1.0&activityId=".concat(y, "&_=").concat(Date.now()), "actId=".concat(y, "&oaId=").concat(y, "&activityType=hdtool&consumerId=").concat(z, "&token=").concat(as));
            case 90:
              if (at = b5.sent, !at.success) {
                b5.next = 137;
                break;
              }
              if (at.orderId) {
                b5.next = 95;
                break;
              }
              console.log(at.message);
              return b5.abrupt("break", 141);
            case 95:
              au = at.orderId;
              av = 0;
            case 97:
              if (0 != av) {
                b5.next = 135;
                break;
              }
              b5.next = 100;
              return T("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(au, "&adslotId="));
            case 100:
              if (aw = b5.sent, av = aw.result, 0 != av) {
                b5.next = 106;
                break;
              }
              console.log(aw.message);
              b5.next = 133;
              break;
            case 106:
              if ("thanks" == aw.lottery.type && console.log("谢谢参与"), "alipay" != aw.lottery.type) {
                b5.next = 133;
                break;
              }
              for (console.log("抽奖获得支付宝红包：".concat(aw.lottery.title)), ax = aw.lottery.link, ay = ax.split("?")[1], az = {}, aA = ay.split("&"), aB = 0, aC = aA.length; aB < aC; aB++) {
                aD = aA[aB].split("=");
                az[aD[0]] = aD[1];
              }
              if (aE = az.recordId, !s || !t) {
                b5.next = 132;
                break;
              }
              console.log("获取兑换key");
              b5.next = 119;
              return P("https://92261.activity-14.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(aE, "&dbnewopen"));
            case 119:
              ao = b5.sent;
              b5.next = 122;
              return T("/ctoken/getToken.do");
            case 122:
              aF = b5.sent;
              eval(aF.token);
              aG = window[ao];
              b5.next = 127;
              return T("/activity/doTakePrize", "alipay=".concat(t, "&realname=").concat(encodeURI(s), "&recordId=").concat(aE, "&token=").concat(aG));
            case 127:
              aH = b5.sent;
              console.log(aH.message);
              n += "用户：".concat(q, " 抽奖获得：").concat(aw.lottery.title, " 领取结果：").concat(aH.message, "\n");
              b5.next = 133;
              break;
            case 132:
              console.log("请设置支付宝姓名和账号");
            case 133:
              b5.next = 97;
              break;
            case 135:
              b5.next = 138;
              break;
            case 137:
              console.log(at.message);
            case 138:
              aq++;
              b5.next = 82;
              break;
            case 141:
              b5.next = 144;
              break;
            case 143:
              console.log("获取id失败");
            case 144:
              console.log("————————————");
              console.log("开始签到");
              b5.next = 148;
              return J("/api/user_mumber/sign");
            case 148:
              aI = b5.sent;
              console.log("签到获得：".concat(aI.data.signIntegral, "积分"));
              console.log("————————————");
              console.log("开始任务");
              aJ = !0;
              aK = !0;
              aL = !0;
              b5.next = 157;
              return J("/api/user_center/task?type=1&current=1&size=20");
            case 157:
              aM = b5.sent;
              aN = c(aM.data.list);
              b5.prev = 159;
              aN.s();
            case 161:
              if ((aO = aN.n()).done) {
                b5.next = 183;
                break;
              }
              if (aP = aO.value, console.log("任务：".concat(aP.name)), 1 != aP.completed) {
                b5.next = 167;
                break;
              }
              console.log("任务已完成");
              return b5.abrupt("continue", 181);
            case 167:
              if (console.log("任务进度：".concat(aP.finish_times, "/").concat(aP.frequency)), "使用本地服务" != aP.name) {
                b5.next = 178;
                break;
              }
              aQ = aP.finish_times;
            case 170:
              if (!(aQ < aP.frequency)) {
                b5.next = 178;
                break;
              }
              b5.next = 173;
              return L("/api/user_mumber/doTask", "memberType=6&member_type=6");
            case 173:
              aR = b5.sent;
              console.log("任务完成获得：".concat(aR.data.score_notify.integral, "积分"));
            case 175:
              aQ++;
              b5.next = 170;
              break;
            case 178:
              "新闻资讯阅读" == aP.name && (aJ = !1);
              "新闻资讯点赞" == aP.name && (aK = !1);
              "分享资讯给好友" == aP.name && (aL = !1);
            case 181:
              b5.next = 161;
              break;
            case 183:
              b5.next = 188;
              break;
            case 185:
              b5.prev = 185;
              b5.t0 = b5.catch(159);
              aN.e(b5.t0);
            case 188:
              b5.prev = 188;
              aN.f();
              return b5.finish(188);
            case 191:
              if (aJ && aK && aL) {
                b5.next = 226;
                break;
              }
              b5.next = 194;
              return J("/api/article/channel_list?channel_id=65e80c4779f6be5b358ba671&isDiFangHao=false&is_new=true&list_count=0&size=30");
            case 194:
              aS = b5.sent;
              aT = c(aS.data.article_list);
              b5.prev = 196;
              aT.s();
            case 198:
              if ((aU = aT.n()).done) {
                b5.next = 218;
                break;
              }
              if (aV = aU.value, aW = aV.id, aJ) {
                b5.next = 206;
                break;
              }
              b5.next = 204;
              return J("/api/article/read_time?channel_article_id=".concat(aW, "&is_end=true&read_time=3051"));
            case 204:
              aX = b5.sent;
              console.log("阅读：".concat(aX.message));
            case 206:
              if (aK) {
                b5.next = 211;
                break;
              }
              b5.next = 209;
              return L("/api/favorite/like", "action=true&id=".concat(aW));
            case 209:
              aY = b5.sent;
              console.log("点赞：".concat(aY.message));
            case 211:
              if (aL) {
                b5.next = 216;
                break;
              }
              b5.next = 214;
              return L("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(aW));
            case 214:
              b0 = b5.sent;
              null != b0 && null !== (aZ = b0.data) && void 0 !== aZ && aZ.score_notify ? console.log("分享获得：".concat(null == b0 || null === (b1 = b0.data) || void 0 === b1 || null === (b1 = b1.score_notify) || void 0 === b1 ? void 0 : b1.integral, "积分")) : console.log("文章已经分享过了或者任务已达上限");
            case 216:
              b5.next = 198;
              break;
            case 218:
              b5.next = 223;
              break;
            case 220:
              b5.prev = 220;
              b5.t1 = b5.catch(196);
              aT.e(b5.t1);
            case 223:
              b5.prev = 223;
              aT.f();
              return b5.finish(223);
            case 226:
              console.log("————————————");
              console.log("查询积分");
              b5.next = 230;
              return J("/api/user_mumber/account_detail");
            case 230:
              b2 = b5.sent;
              console.log("拥有积分：".concat(b2.data.rst.total_integral, "\n"));
              n += "用户：".concat(q, " 积分：").concat(b2.data.rst.total_integral, "\n");
            case 233:
              b5.next = 13;
              break;
            case 235:
              b5.next = 240;
              break;
            case 237:
              b5.prev = 237;
              b5.t2 = b5.catch(11);
              aa.e(b5.t2);
            case 240:
              b5.prev = 240;
              aa.f();
              return b5.finish(240);
            case 243:
              if (!n) {
                b5.next = 246;
                break;
              }
              b5.next = 246;
              return a3(n);
            case 246:
            case "end":
              return b5.stop();
          }
        }
      }, a7, null, [[11, 237, 240, 243], [159, 185, 188, 191], [196, 220, 223, 226]]);
    }));
    return E.apply(this, arguments);
  }
  function F(a5) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a6(a7) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://passport.tmuyun.com".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": X(),
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  }
                };
                $.get(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(aj));
                            } catch (al) {
                              $.logErr(al, ai);
                            } finally {
                              ab();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a6);
    }));
    return G.apply(this, arguments);
  }
  function H(a5) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a6(a7) {
      var a9;
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = V();
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": a9.uuid,
                  "X-SIGNATURE": a9.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": u
                };
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a7),
                  headers: ad,
                  body: a9.body
                };
                $.post(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (an) {
                              $.logErr(an, aj);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return I.apply(this, arguments);
  }
  function J(a5) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a6(a7) {
      var a9;
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = W(a7);
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": a9.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": a9.uuid,
                  "X-SIGNATURE": a9.signature,
                  "X-TENANT-ID": A,
                  "X-ACCOUNT-ID": p,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": v
                };
                var ae = {
                  url: "https://vapp.tmuyun.com".concat(a7),
                  headers: ad
                };
                $.get(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ai) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ac(JSON.parse(ak));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, aj);
                          case 14:
                            al.prev = 14;
                            ac();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return K.apply(this, arguments);
  }
  function L(a5, a6) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a7(a8, a9) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = W(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": aa.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": aa.uuid,
                  "X-SIGNATURE": aa.signature,
                  "X-TENANT-ID": A,
                  "X-ACCOUNT-ID": p,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": v
                };
                var ag = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: af,
                  body: a9
                };
                $.post(ag, function () {
                  var ai = i(g().mark(function aj(ak, al, am) {
                    return g().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ak) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(am));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, al);
                          case 14:
                            an.prev = 14;
                            ad();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return M.apply(this, arguments);
  }
  function N(a5) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a6(a7) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ab = {
                  url: "https://92261.activity-42.m.duiba.com.cn".concat(a7),
                  headers: {
                    accept: "*/*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "io.pailian.jiangbei",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !af) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 9;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(ah));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ag);
                          case 14:
                            aj.prev = 14;
                            aa();
                            return aj.finish(14);
                          case 17:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a6);
    }));
    return O.apply(this, arguments);
  }
  function P(a5) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a5(a6) {
      return g().wrap(function a8(a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                  "x-requested-with": "io.pailian.jiangbei",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  referer: "https://92261.activity-42.m.duiba.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: x
                };
                var ad = {
                  url: a6,
                  headers: ac
                };
                $.get(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    var al, am, an, ao;
                    return g().wrap(function ap(aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !ah) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 18;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            al = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(aj)[1];
                            eval(al);
                            am = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(am);
                            console.log("获取consumerId");
                            an = /consumerId:'(\d+)'/;
                            ao = aj.match(an);
                            z = ao ? ao[1] : "4134698352";
                            console.log(z);
                            aa(am);
                          case 18:
                            aq.next = 23;
                            break;
                          case 20:
                            aq.prev = 20;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ai);
                          case 23:
                            aq.prev = 23;
                            aa();
                            return aq.finish(23);
                          case 26:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, ag, null, [[0, 20, 23, 26]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return Q.apply(this, arguments);
  }
  function R(a5) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function a5(a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ab = {
                  url: "https:".concat(a6),
                  headers: {
                    accept: "*/*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "io.pailian.jiangbei",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  followRedirect: !1
                };
                $.get(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    var aj, ak;
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !af) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 10;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (aj = ag.headers["set-cookie"] || ag.headers["Set-Cookie"], ak = 0; ak < aj.length; ak++) {
                                x += aj[ak].split(";")[0] + ";";
                              }
                            } else {
                              x = ag.headers["set-cookie"] || ag.headers["Set-Cookie"];
                              x = a0(x);
                            }
                            aa(x);
                          case 10:
                            al.next = 15;
                            break;
                          case 12:
                            al.prev = 12;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, ag);
                          case 15:
                            al.prev = 15;
                            aa();
                            return al.finish(15);
                          case 18:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ae, null, [[0, 12, 15, 18]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return S.apply(this, arguments);
  }
  function T(a5, a6) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function a5(a6, a7) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://92261.activity-14.m.duiba.com.cn".concat(a6),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://92261.activity-14.m.duiba.com.cn",
                    cookie: x,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=".concat(y, "&dbnewopen&from=login&spm=92261.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: a7
                };
                $.post(ac, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !af) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 9;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(ah));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ag);
                          case 14:
                            aj.prev = 14;
                            aa();
                            return aj.finish(14);
                          case 17:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return U.apply(this, arguments);
  }
  function V() {
    var a5 = new (l.loadJSEncrypt())();
    a5.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = a5.encrypt(r);
    var a6 = X(),
      a7 = "client_id=".concat(B, "&password=").concat(r, "&phone_number=").concat(q),
      a8 = "post%%/web/oauth/credential_auth?".concat(a7, "%%").concat(a6, "%%");
    a7 = "client_id=".concat(B, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var a9 = CryptoJS.HmacSHA256(a8, m),
      aa = CryptoJS.enc.Hex.stringify(a9),
      ab = {
        uuid: a6,
        signature: aa,
        body: a7
      };
    return ab;
  }
  function W(a5) {
    var a6 = X(),
      a7 = Date.now();
    a5.indexOf("?") > 0 && (a5 = a5.substring(0, a5.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var a8 = CryptoJS.SHA256("".concat(a5, "&&").concat(o, "&&").concat(a6, "&&").concat(a7, "&&").concat(C, "&&").concat(A)).toString(),
      a9 = {
        uuid: a6,
        time: a7,
        signature: a8
      };
    return a9;
  }
  function X() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a6) {
      var a7 = 16 * Math.random() | 0,
        a8 = "x" === a6 ? a7 : 3 & a7 | 8;
      return a8.toString(16);
    });
  }
  function Y(a5) {
    return a5[Math.floor(Math.random() * a5.length)];
  }
  function Z() {
    var a5 = "1.7.0",
      a6 = X(),
      a7 = Y(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a8 = "Xiaomi " + a7,
      a9 = "Android",
      aa = "".concat(a9.toUpperCase(), ";").concat("11", ";").concat(B, ";").concat(a5, ";1.0;null;").concat(a7),
      ab = "".concat(a5, ";").concat(a6, ";").concat(a8, ";").concat(a9, ";").concat("11", ";").concat("6.9.0"),
      ac = {
        ua: aa,
        commonUa: ab,
        uuid: a6
      };
    return ac;
  }
  function a0(a5) {
    var a6 = a5.split(", "),
      a7 = a6.map(function (a8) {
        var a9 = a8.split(";")[0];
        return a9.trim();
      });
    return a7.join(";");
  }
  function a1() {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function a6() {
      var a8;
      return g().wrap(function a9(aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              if (a8 = $.getdata("Utils_Code") || "", !a8 || !Object.keys(a8).length) {
                aa.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a8);
              return aa.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return aa.abrupt("return", new Promise(function () {
                var ae = i(g().mark(function af(ag) {
                  return g().wrap(function ah(ai) {
                    for (;;) {
                      switch (ai.prev = ai.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (ak) {
                            $.setdata(ak, "Utils_Code");
                            eval(ak);
                            console.log("✅ Utils加载成功, 请继续");
                            ag(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ai.stop();
                      }
                    }
                  }, af);
                }));
                return function (ag) {
                  return ae.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return a2.apply(this, arguments);
  }
  function a3(a5) {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = i(g().mark(function a7(a8) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              if (!$.isNode()) {
                a9.next = 5;
                break;
              }
              a9.next = 3;
              return notify.sendNotify($.name, a8);
            case 3:
              a9.next = 6;
              break;
            case 5:
              $.msg($.name, "", a8);
            case 6:
            case "end":
              return a9.stop();
          }
        }
      }, a7);
    }));
    return a4.apply(this, arguments);
  }
  i(g().mark(function a5() {
    return g().wrap(function (a7) {
      for (;;) {
        switch (a7.prev = a7.next) {
          case 0:
            a7.next = 2;
            return D();
          case 2:
          case "end":
            return a7.stop();
        }
      }
    }, a5);
  }))().catch(function (a6) {
    $.log(a6);
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
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
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
        return !1;
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
        const [r, a] = i.split("@"),
          n = {
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
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
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
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
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
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
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
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
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
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
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
              } = t,
              n = s.decode(a, this.encoding);
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
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
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
              } = t,
              n = i.decode(a, this.encoding);
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
          case void 0:
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
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
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
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
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