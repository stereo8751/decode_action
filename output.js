//Thu Jul 10 2025 09:53:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("网易严选");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a0) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a4) {
      return typeof a4;
    } : function (a4) {
      return a4 && "function" == typeof Symbol && a4.constructor === Symbol && a4 !== Symbol.prototype ? "symbol" : typeof a4;
    };
    return b(a0);
  }
  function c(a0, a1) {
    var a3 = "undefined" != typeof Symbol && a0[Symbol.iterator] || a0["@@iterator"];
    if (!a3) {
      if (Array.isArray(a0) || (a3 = d(a0)) || a1 && a0 && "number" == typeof a0.length) {
        a3 && (a0 = a3);
        var a4 = 0,
          a5 = function () {};
        return {
          s: a5,
          n: function () {
            var aa = {
              done: !0
            };
            return a4 >= a0.length ? aa : {
              done: !1,
              value: a0[a4++]
            };
          },
          e: function (aa) {
            throw aa;
          },
          f: a5
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a6,
      a7 = !0,
      a8 = !1;
    return {
      s: function () {
        a3 = a3.call(a0);
      },
      n: function () {
        var ab = a3.next();
        a7 = ab.done;
        return ab;
      },
      e: function (ab) {
        a8 = !0;
        a6 = ab;
      },
      f: function () {
        try {
          a7 || null == a3.return || a3.return();
        } finally {
          if (a8) {
            throw a6;
          }
        }
      }
    };
  }
  function d(a0, a1) {
    if (a0) {
      if ("string" == typeof a0) {
        return f(a0, a1);
      }
      var a3 = {}.toString.call(a0).slice(8, -1);
      "Object" === a3 && a0.constructor && (a3 = a0.constructor.name);
      return "Map" === a3 || "Set" === a3 ? Array.from(a0) : "Arguments" === a3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a3) ? f(a0, a1) : void 0;
    }
  }
  function f(a0, a1) {
    (null == a1 || a1 > a0.length) && (a1 = a0.length);
    for (var a2 = 0, a3 = Array(a1); a2 < a1; a2++) {
      a3[a2] = a0[a2];
    }
    return a3;
  }
  function g() {
    'use strict';

    g = function () {
      return a2;
    };
    var a1,
      a2 = {},
      a3 = Object.prototype,
      a4 = a3.hasOwnProperty,
      a5 = Object.defineProperty || function (ax, ay, az) {
        ax[ay] = az.value;
      },
      a6 = "function" == typeof Symbol ? Symbol : {},
      a7 = a6.iterator || "@@iterator",
      a8 = a6.asyncIterator || "@@asyncIterator",
      a9 = a6.toStringTag || "@@toStringTag";
    function aa(ax, ay, az) {
      var aA = {
        value: az,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(ax, ay, aA);
      return ax[ay];
    }
    try {
      aa({}, "");
    } catch (ay) {
      aa = function (az, aA, aB) {
        return az[aA] = aB;
      };
    }
    function ab(aA, aB, aC, aD) {
      var aE = aB && aB.prototype instanceof ai ? aB : ai,
        aF = Object.create(aE.prototype),
        aG = new av(aD || []);
      a5(aF, "_invoke", {
        value: ar(aA, aC, aG)
      });
      return aF;
    }
    function ac(aA, aB, aC) {
      try {
        return {
          type: "normal",
          arg: aA.call(aB, aC)
        };
      } catch (aH) {
        var aF = {};
        aF.type = "throw";
        aF.arg = aH;
        return aF;
      }
    }
    a2.wrap = ab;
    var ad = "suspendedStart",
      ae = "suspendedYield",
      af = "executing",
      ag = "completed",
      ah = {};
    function ai() {}
    function aj() {}
    function ak() {}
    var al = {};
    aa(al, a7, function () {
      return this;
    });
    var am = Object.getPrototypeOf,
      an = am && am(am(aw([])));
    an && an !== a3 && a4.call(an, a7) && (al = an);
    ak.prototype = ai.prototype = Object.create(al);
    var ao = ak.prototype;
    function ap(aA) {
      ["next", "throw", "return"].forEach(function (aD) {
        aa(aA, aD, function (aF) {
          return this._invoke(aD, aF);
        });
      });
    }
    function aq(aA, aB) {
      function aF(aG, aH, aI, aJ) {
        var aK = {};
        aK.HbpTP = "normal";
        var aM = ac(aA[aG], aA, aH);
        if ("throw" !== aM.type) {
          var aN = aM.arg,
            aO = aN.value;
          return aO && "object" == b(aO) && a4.call(aO, "__await") ? aB.resolve(aO.__await).then(function (aQ) {
            aF("next", aQ, aI, aJ);
          }, function (aQ) {
            aF("throw", aQ, aI, aJ);
          }) : aB.resolve(aO).then(function (aQ) {
            aN.value = aQ;
            aI(aN);
          }, function (aQ) {
            return aF("throw", aQ, aI, aJ);
          });
        }
        aJ(aM.arg);
      }
      var aD;
      a5(this, "_invoke", {
        value: function (aG, aH) {
          function aI() {
            return new aB(function (aK, aL) {
              aF(aG, aH, aK, aL);
            });
          }
          return aD = aD ? aD.then(aI, aI) : aI();
        }
      });
    }
    function ar(aA, aB, aC) {
      var aE = ad;
      return function (aG, aH) {
        if (aE === af) {
          throw Error("Generator is already running");
        }
        if (aE === ag) {
          if ("throw" === aG) {
            throw aH;
          }
          var aJ = {
            value: a1,
            done: !0
          };
          return aJ;
        }
        for (aC.method = aG, aC.arg = aH;;) {
          var aK = aC.delegate;
          if (aK) {
            var aL = as(aK, aC);
            if (aL) {
              if (aL === ah) {
                continue;
              }
              return aL;
            }
          }
          if ("next" === aC.method) {
            aC.sent = aC._sent = aC.arg;
          } else {
            if ("throw" === aC.method) {
              if (aE === ad) {
                throw aE = ag, aC.arg;
              }
              aC.dispatchException(aC.arg);
            } else {
              "return" === aC.method && aC.abrupt("return", aC.arg);
            }
          }
          aE = af;
          var aM = ac(aA, aB, aC);
          if ("normal" === aM.type) {
            if (aE = aC.done ? ag : ae, aM.arg === ah) {
              continue;
            }
            var aN = {};
            aN.value = aM.arg;
            aN.done = aC.done;
            return aN;
          }
          "throw" === aM.type && (aE = ag, aC.method = "throw", aC.arg = aM.arg);
        }
      };
    }
    function as(aA, aB) {
      var aG = aB.method,
        aH = aA.iterator[aG];
      if (aH === a1) {
        aB.delegate = null;
        "throw" === aG && aA.iterator.return && (aB.method = "return", aB.arg = a1, as(aA, aB), "throw" === aB.method) || "return" !== aG && (aB.method = "throw", aB.arg = new TypeError("The iterator does not provide a '" + aG + "' method"));
        return ah;
      }
      var aE = ac(aH, aA.iterator, aB.arg);
      if ("throw" === aE.type) {
        aB.method = "throw";
        aB.arg = aE.arg;
        aB.delegate = null;
        return ah;
      }
      var aF = aE.arg;
      return aF ? aF.done ? (aB[aA.resultName] = aF.value, aB.next = aA.nextLoc, "return" !== aB.method && (aB.method = "next", aB.arg = a1), aB.delegate = null, ah) : aF : (aB.method = "throw", aB.arg = new TypeError("iterator result is not an object"), aB.delegate = null, ah);
    }
    function at(aA) {
      var aB = {
        tryLoc: aA[0]
      };
      var aC = aB;
      1 in aA && (aC.catchLoc = aA[1]);
      2 in aA && (aC.finallyLoc = aA[2], aC.afterLoc = aA[3]);
      this.tryEntries.push(aC);
    }
    function au(aA) {
      var aB = aA.completion || {};
      aB.type = "normal";
      delete aB.arg;
      aA.completion = aB;
    }
    function av(aA) {
      var aB = {
        tryLoc: "root"
      };
      this.tryEntries = [aB];
      aA.forEach(at, this);
      this.reset(!0);
    }
    function aw(aA) {
      if (aA || "" === aA) {
        var aC = aA[a7];
        if (aC) {
          return aC.call(aA);
        }
        if ("function" == typeof aA.next) {
          return aA;
        }
        if (!isNaN(aA.length)) {
          var aD = -1,
            aE = function aF() {
              for (; ++aD < aA.length;) {
                if (a4.call(aA, aD)) {
                  aF.value = aA[aD];
                  aF.done = !1;
                  return aF;
                }
              }
              aF.value = a1;
              aF.done = !0;
              return aF;
            };
          return aE.next = aE;
        }
      }
      throw new TypeError(b(aA) + " is not iterable");
    }
    aj.prototype = ak;
    a5(ao, "constructor", {
      value: ak,
      configurable: !0
    });
    a5(ak, "constructor", {
      value: aj,
      configurable: !0
    });
    aj.displayName = aa(ak, a9, "GeneratorFunction");
    a2.isGeneratorFunction = function (aA) {
      var aC = "function" == typeof aA && aA.constructor;
      return !!aC && (aC === aj || "GeneratorFunction" === (aC.displayName || aC.name));
    };
    a2.mark = function (aA) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aA, ak) : (aA.__proto__ = ak, aa(aA, a9, "GeneratorFunction"));
      aA.prototype = Object.create(ao);
      return aA;
    };
    a2.awrap = function (aA) {
      var aC = {
        __await: aA
      };
      return aC;
    };
    ap(aq.prototype);
    aa(aq.prototype, a8, function () {
      return this;
    });
    a2.AsyncIterator = aq;
    a2.async = function (aA, aB, aC, aD, aE) {
      void 0 === aE && (aE = Promise);
      var aG = new aq(ab(aA, aB, aC, aD), aE);
      return a2.isGeneratorFunction(aB) ? aG : aG.next().then(function (aH) {
        return aH.done ? aH.value : aG.next();
      });
    };
    ap(ao);
    aa(ao, a9, "Generator");
    aa(ao, a7, function () {
      return this;
    });
    aa(ao, "toString", function () {
      return "[object Generator]";
    });
    a2.keys = function (aA) {
      var aC = Object(aA),
        aD = [];
      for (var aE in aC) aD.push(aE);
      aD.reverse();
      return function aF() {
        for (; aD.length;) {
          var aH = aD.pop();
          if (aH in aC) {
            aF.value = aH;
            aF.done = !1;
            return aF;
          }
        }
        aF.done = !0;
        return aF;
      };
    };
    a2.values = aw;
    av.prototype = {
      constructor: av,
      reset: function (aA) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a1, this.done = !1, this.delegate = null, this.method = "next", this.arg = a1, this.tryEntries.forEach(au), !aA) {
          for (var aB in this) "t" === aB.charAt(0) && a4.call(this, aB) && !isNaN(+aB.slice(1)) && (this[aB] = a1);
        }
      },
      stop: function () {
        this.done = !0;
        var aA = this.tryEntries[0].completion;
        if ("throw" === aA.type) {
          throw aA.arg;
        }
        return this.rval;
      },
      dispatchException: function (aA) {
        if (this.done) {
          throw aA;
        }
        var aC = this;
        function aI(aJ, aK) {
          aF.type = "throw";
          aF.arg = aA;
          aC.next = aJ;
          aK && (aC.method = "next", aC.arg = a1);
          return !!aK;
        }
        for (var aD = this.tryEntries.length - 1; aD >= 0; --aD) {
          var aE = this.tryEntries[aD],
            aF = aE.completion;
          if ("root" === aE.tryLoc) {
            return aI("end");
          }
          if (aE.tryLoc <= this.prev) {
            var aG = a4.call(aE, "catchLoc"),
              aH = a4.call(aE, "finallyLoc");
            if (aG && aH) {
              if (this.prev < aE.catchLoc) {
                return aI(aE.catchLoc, !0);
              }
              if (this.prev < aE.finallyLoc) {
                return aI(aE.finallyLoc);
              }
            } else {
              if (aG) {
                if (this.prev < aE.catchLoc) {
                  return aI(aE.catchLoc, !0);
                }
              } else {
                if (!aH) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aE.finallyLoc) {
                  return aI(aE.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aA, aB) {
        for (var aD = this.tryEntries.length - 1; aD >= 0; --aD) {
          var aE = this.tryEntries[aD];
          if (aE.tryLoc <= this.prev && a4.call(aE, "finallyLoc") && this.prev < aE.finallyLoc) {
            var aF = aE;
            break;
          }
        }
        aF && ("break" === aA || "continue" === aA) && aF.tryLoc <= aB && aB <= aF.finallyLoc && (aF = null);
        var aG = aF ? aF.completion : {};
        aG.type = aA;
        aG.arg = aB;
        return aF ? (this.method = "next", this.next = aF.finallyLoc, ah) : this.complete(aG);
      },
      complete: function (aA, aB) {
        if ("throw" === aA.type) {
          throw aA.arg;
        }
        "break" === aA.type || "continue" === aA.type ? this.next = aA.arg : "return" === aA.type ? (this.rval = this.arg = aA.arg, this.method = "return", this.next = "end") : "normal" === aA.type && aB && (this.next = aB);
        return ah;
      },
      finish: function (aA) {
        for (var aC = this.tryEntries.length - 1; aC >= 0; --aC) {
          var aD = this.tryEntries[aC];
          if (aD.finallyLoc === aA) {
            this.complete(aD.completion, aD.afterLoc);
            au(aD);
            return ah;
          }
        }
      },
      catch: function (aA) {
        for (var aD = this.tryEntries.length - 1; aD >= 0; --aD) {
          var aE = this.tryEntries[aD];
          if (aE.tryLoc === aA) {
            var aF = aE.completion;
            if ("throw" === aF.type) {
              var aG = aF.arg;
              au(aE);
            }
            return aG;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aA, aB, aC) {
        this.delegate = {
          iterator: aw(aA),
          resultName: aB,
          nextLoc: aC
        };
        "next" === this.method && (this.arg = a1);
        return ah;
      }
    };
    return a2;
  }
  function h(a0, a1, a2, a3, a4, a5, a6) {
    try {
      var a8 = a0[a5](a6),
        a9 = a8.value;
    } catch (ac) {
      return void a2(ac);
    }
    a8.done ? a1(a9) : Promise.resolve(a9).then(a3, a4);
  }
  function i(a0) {
    return function () {
      var a2 = this,
        a3 = arguments;
      return new Promise(function (a4, a5) {
        var a7 = a0.apply(a2, a3);
        function a8(aa) {
          h(a7, a4, a5, a8, a9, "next", aa);
        }
        function a9(aa) {
          h(a7, a4, a5, a8, a9, "throw", aa);
        }
        a8(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.WYYX : $.getdata("WYYX")) || "",
    k = $.getjson("WYYXCookies") || [],
    l = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top",
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "BC60B8B9E4FFEFFA219E5AD77F11F9E2",
    u = "";
  function v() {
    return w.apply(this, arguments);
  }
  function w() {
    w = i(g().mark(function a1() {
      var a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw;
      return g().wrap(function (ax) {
        for (;;) {
          switch (ax.prev = ax.next) {
            case 0:
              if (j) {
                ax.next = 5;
                break;
              }
              console.log("先填写账号密码");
              ax.next = 4;
              return Y("先填写账号密码");
            case 4:
              return ax.abrupt("return");
            case 5:
              ax.next = 7;
              return U();
            case 7:
              Utils = ax.sent;
              a3 = j.split(" ");
              a4 = c(a3.slice(0, 10));
              ax.prev = 10;
              a4.s();
            case 12:
              if ((a5 = a4.n()).done) {
                ax.next = 190;
                break;
              }
              if (a6 = a5.value, q = a6.split("&")[0], r = a6.split("&")[1], console.log("用户：".concat(q, "开始任务")), a7 = k.findIndex(function (aG) {
                return aG.id == q;
              }), -1 === a7) {
                ax.next = 38;
                break;
              }
              if (console.log("从缓存中取cookie"), m = k[a7].cookie, n = k[a7].token, m && n) {
                ax.next = 36;
                break;
              }
              console.log("缓存中cookie,token为空，开始登录");
              a8 = 0;
            case 25:
              if (!(a8 < 3)) {
                ax.next = 36;
                break;
              }
              ax.next = 28;
              return x();
            case 28:
              if (m && n) {
                ax.next = 30;
                break;
              }
              return ax.abrupt("continue", 33);
            case 30:
              ax.next = 32;
              return z();
            case 32:
              return ax.abrupt("break", 36);
            case 33:
              a8++;
              ax.next = 25;
              break;
            case 36:
              ax.next = 51;
              break;
            case 38:
              console.log("缓存中没有cookie，开始登录");
              a9 = 0;
            case 40:
              if (!(a9 < 3)) {
                ax.next = 51;
                break;
              }
              ax.next = 43;
              return x();
            case 43:
              if (m && n) {
                ax.next = 45;
                break;
              }
              return ax.abrupt("continue", 48);
            case 45:
              ax.next = 47;
              return z();
            case 47:
              return ax.abrupt("break", 51);
            case 48:
              a9++;
              ax.next = 40;
              break;
            case 51:
              if (m && n) {
                ax.next = 56;
                break;
              }
              console.log("用户：".concat(q, "登录失败"));
              ax.next = 55;
              return Y("用户：".concat(q, "登录失败，浏览器打开https://m.you.163.com登录过验证后再运行脚本"));
            case 55:
              return ax.abrupt("continue", 188);
            case 56:
              console.log("开始签到");
              ax.next = 59;
              return L("/act-attendance/att/v3/sign?csrf_token=".concat(n, "&__timestamp=").concat(new Date().getTime(), "&"));
            case 59:
              if (aa = ax.sent, console.log(aa.msg), 401 != aa.code) {
                ax.next = 75;
                break;
              }
              console.log("cookie已过期，开始登录");
              ab = 0;
            case 64:
              if (!(ab < 3)) {
                ax.next = 75;
                break;
              }
              ax.next = 67;
              return x();
            case 67:
              if (m && n) {
                ax.next = 69;
                break;
              }
              return ax.abrupt("continue", 72);
            case 69:
              ax.next = 71;
              return z();
            case 71:
              return ax.abrupt("break", 75);
            case 72:
              ab++;
              ax.next = 64;
              break;
            case 75:
              if (m && n) {
                ax.next = 80;
                break;
              }
              console.log("用户：".concat(q, "登录失败"));
              ax.next = 79;
              return Y("用户：".concat(q, "登录失败，浏览器打开https://m.you.163.com登录过验证后再运行脚本"));
            case 79:
              return ax.abrupt("continue", 188);
            case 80:
              ax.next = 82;
              return N("/act-attendance/task/signTaskInfo?csrf_token=".concat(n, "&__timestamp=1743732027525&taskId=10015"));
            case 82:
              ax.sent;
              ax.next = 85;
              return N("/act-attendance/task/attendanceTask?csrf_token=".concat(n, "&__timestamp=").concat(new Date().getTime(), "&"));
            case 85:
              if (ac = ax.sent, !ac.data.taskDTO) {
                ax.next = 95;
                break;
              }
              if (2 != ac.data.taskDTO.status) {
                ax.next = 94;
                break;
              }
              var az = {};
              az.taskId = ac.data.taskDTO.taskId;
              ax.next = 90;
              return H("/act-attendance/task/start?csrf_token=".concat(n), az);
            case 90:
              ad = ax.sent;
              console.log("开启连签：".concat(ad.msg));
              ax.next = 95;
              break;
            case 94:
              ac.data.taskDTO.status;
            case 95:
              console.log("————————————");
              console.log("开始app任务");
              ax.next = 99;
              return N("/act-attendance/task/list");
            case 99:
              ae = ax.sent;
              af = c(ae.data.dailyTasks);
              ax.prev = 101;
              af.s();
            case 103:
              if ((ag = af.n()).done) {
                ax.next = 120;
                break;
              }
              if (ah = ag.value, console.log("任务：".concat(ah.title)), 1 != ah.status) {
                ax.next = 109;
                break;
              }
              console.log("任务已完成，跳过");
              return ax.abrupt("continue", 118);
            case 109:
              if (201001 == ah.taskId) {
                ax.next = 118;
                break;
              }
              var aA = {};
              aA.taskId = ah.taskId;
              ax.next = 112;
              return H("/napi/play/web/taskT/task/trigger?_=".concat(new Date().getTime()), aA);
            case 112:
              var aB = {};
              aB.taskId = ah.taskId;
              ai = ax.sent;
              console.log(ai.msg);
              ax.next = 116;
              return H("/act-attendance/task/reward", aB);
            case 116:
              aj = ax.sent;
              console.log(aj.msg);
            case 118:
              ax.next = 103;
              break;
            case 120:
              ax.next = 125;
              break;
            case 122:
              ax.prev = 122;
              ax.t0 = ax.catch(101);
              af.e(ax.t0);
            case 125:
              ax.prev = 125;
              af.f();
              return ax.finish(125);
            case 128:
              console.log("————————————");
              console.log("开始小程序任务");
              ax.next = 132;
              return L("/act-attendance/task/list");
            case 132:
              ak = ax.sent;
              al = c(ak.data.dailyTasks);
              ax.prev = 134;
              al.s();
            case 136:
              if ((am = al.n()).done) {
                ax.next = 153;
                break;
              }
              if (an = am.value, console.log("任务：".concat(an.title)), 1 != an.status) {
                ax.next = 142;
                break;
              }
              console.log("任务已完成，跳过");
              return ax.abrupt("continue", 151);
            case 142:
              if (201001 == an.taskId) {
                ax.next = 151;
                break;
              }
              var aC = {};
              aC.taskId = an.taskId;
              ax.next = 145;
              return H("/napi/play/web/taskT/task/trigger?_=".concat(new Date().getTime()), aC);
            case 145:
              var aD = {};
              aD.taskId = an.taskId;
              ao = ax.sent;
              console.log(ao.msg);
              ax.next = 149;
              return H("/act-attendance/task/reward", aD);
            case 149:
              ap = ax.sent;
              console.log(ap.msg);
            case 151:
              ax.next = 136;
              break;
            case 153:
              ax.next = 158;
              break;
            case 155:
              ax.prev = 155;
              ax.t1 = ax.catch(134);
              al.e(ax.t1);
            case 158:
              ax.prev = 158;
              al.f();
              return ax.finish(158);
            case 161:
              console.log("————————————");
              console.log("开始拆礼盒");
              ax.next = 165;
              return N("/act-attendance/att/v4/index");
            case 165:
              aq = ax.sent;
              ar = aq.data.game.remainStepCount;
              as = 0;
            case 168:
              if (!(as < ar)) {
                ax.next = 177;
                break;
              }
              ax.next = 171;
              return N("/act-attendance/att/v4/walk");
            case 171:
              at = ax.sent;
              au = at.data.awardDetailsInfoDTOS[0].awardName;
              console.log("拆礼盒获得：" + au);
            case 174:
              as++;
              ax.next = 168;
              break;
            case 177:
              console.log("————————————");
              console.log("积分查询");
              ax.next = 181;
              return N("/act-attendance/att/v4/index");
            case 181:
              av = ax.sent;
              console.log("拥有积分: ".concat(av.data.points, "\n"));
              ax.next = 185;
              return J("/xhr/giftCard/list.json", "giftCardGroup=0");
            case 185:
              aw = ax.sent;
              console.log("拥有礼品卡: ".concat(aw.data.balance, "\n"));
              u += "用户：".concat(q, " 拥有积分: ").concat(av.data.points, " 礼品卡: ").concat(aw.data.balance, "\n");
            case 188:
              ax.next = 12;
              break;
            case 190:
              ax.next = 195;
              break;
            case 192:
              ax.prev = 192;
              ax.t2 = ax.catch(10);
              a4.e(ax.t2);
            case 195:
              ax.prev = 195;
              a4.f();
              return ax.finish(195);
            case 198:
              if (!u) {
                ax.next = 201;
                break;
              }
              ax.next = 201;
              return Y(u);
            case 201:
            case "end":
              return ax.stop();
          }
        }
      }, a1, null, [[10, 192, 195, 198], [101, 122, 125, 128], [134, 155, 158, 161]]);
    }));
    return w.apply(this, arguments);
  }
  function x() {
    return y.apply(this, arguments);
  }
  function y() {
    y = i(g().mark(function a1() {
      var a2, a3, a4, a5, a6, a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              o = "";
              m = "";
              n = "";
              a2 = {
                pd: "yanxuan_web",
                pkid: "pXPYGTc",
                pkht: "you.163.com",
                channel: 14,
                topURL: "https://m.you.163.com/u/login",
                rtid: T()
              };
              a8.next = 6;
              return B("/dlzc/yd/ini", {
                encParams: S(JSON.stringify(a2))
              });
            case 6:
              p = a8.sent;
              console.log("获取登录参数");
              console.log("获取登录tk");
              a2 = {
                un: q,
                channel: 1,
                pd: "yanxuan_web",
                pkid: "pXPYGTc",
                topURL: "https://m.you.163.com/u/login?callback=https%3A%2F%2Fm.you.163.com%2F",
                rtid: T()
              };
              a8.next = 12;
              return F("/gt", {
                encParams: S(JSON.stringify(a2))
              });
            case 12:
              a3 = a8.sent;
              console.log(a3.tk);
              a4 = new (Utils.loadJSEncrypt())();
              a4.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5gsH+AA4XWONB5TDcUd+xCz7ejOFHZKlcZDx+pF1i7Gsvi1vjyJoQhRtRSn950x498VUkx7rUxg1/ScBVfrRxQOZ8xFBye3pjAzfb22+RCuYApSVpJ3OO3KsEuKExftz9oFBv3ejxPlYc5yq7YiBO8XlTnQN0Sa4R4qhPO3I2MQIDAQAB-----END PUBLIC KEY-----");
              a2 = {
                un: q,
                pw: a4.encrypt(r),
                pd: "yanxuan_web",
                pkid: "pXPYGTc",
                tk: a3.tk,
                domains: "",
                channel: 1,
                topURL: "https://m.you.163.com/u/login?callback=https%3A%2F%2Fm.you.163.com%2F",
                rtid: T()
              };
              a8.next = 19;
              return B("/zj/yd/pwd/l", {
                encParams: S(JSON.stringify(a2))
              });
            case 19:
              if (o = a8.sent, o) {
                a8.next = 23;
                break;
              }
              console.log("登录失败");
              return a8.abrupt("return");
            case 23:
              console.log("登录成功");
              console.log("获取token");
              a8.next = 27;
              return D("/xhr/index.json?__timestamp=".concat(Date.now(), "&"));
            case 27:
              a5 = a8.sent;
              a5 ? (m = o + a5, a6 = /yx_csrf=([^;]*)/, a7 = a5.match(a6), a7 ? (n = a7[1], console.log(n)) : console.log("获取token失败")) : console.log("获取token失败");
            case 29:
            case "end":
              return a8.stop();
          }
        }
      }, a1);
    }));
    return y.apply(this, arguments);
  }
  function z() {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function a1() {
      var a3, a4, a5;
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              var a7 = {};
              a7.id = q;
              a7.cookie = m;
              a7.token = n;
              if (a3 = $.getjson("WYYXCookies") || [], a4 = a7, a5 = a3.findIndex(function (a8) {
                return a8.id == a4.id;
              }), -1 === a5) {
                a6.next = 12;
                break;
              }
              if (a3[a5].cookie != a4.cookie || a3[a5].token != a4.token) {
                a6.next = 8;
                break;
              }
              return a6.abrupt("return");
            case 8:
              a3[a5] = a4;
              console.log("🎉用户".concat(a4.id, "更新cookie成功!"));
            case 10:
              a6.next = 14;
              break;
            case 12:
              a3.push(a4);
              console.log("🎉新增用户".concat(a4.id, "成功!"));
            case 14:
              $.setjson(a3, "WYYXCookies");
            case 15:
            case "end":
              return a6.stop();
          }
        }
      }, a1);
    }));
    return A.apply(this, arguments);
  }
  function B(a0, a1) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function a2(a3, a4) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a7) {
                var a9 = {
                  Connection: "keep-alive",
                  "content-type": "application/json",
                  "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
                  "sec-ch-ua-platform": "macOS",
                  "sec-ch-ua-mobile": "?0",
                  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                  accept: "*/*",
                  Origin: "https://dl.reg.163.com",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  "Accept-Encoding": "gzip, deflate, br, zstd",
                  "Accept-Language": "zh-CN,zh;q=0.9",
                  cookie: p
                };
                var aa = {
                  url: "https://dl.reg.163.com/dl".concat(a3),
                  headers: a9,
                  body: JSON.stringify(a4)
                };
                $.post(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    var ai, aj, ak;
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ae) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 14;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (ag = JSON.parse(ag), 201 == ag.ret) {
                              al.next = 11;
                              break;
                            }
                            return al.abrupt("return");
                          case 11:
                            if (ai = "", $.isNode()) {
                              for (aj = af.headers["set-cookie"] || af.headers["Set-Cookie"], ak = 0; ak < aj.length; ak++) {
                                aj[ak].split(";")[0].split("=")[1] && (ai += aj[ak].split(";")[0] + ";");
                              }
                            } else {
                              ai = af.headers["set-cookie"] || af.headers["Set-Cookie"];
                              ai = P(ai);
                            }
                            a7(ai);
                          case 14:
                            al.next = 19;
                            break;
                          case 16:
                            al.prev = 16;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, af);
                          case 19:
                            al.prev = 19;
                            a7();
                            return al.finish(19);
                          case 22:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ad, null, [[0, 16, 19, 22]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a2);
    }));
    return C.apply(this, arguments);
  }
  function D(a0) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function a1(a2) {
      return g().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              return a4.abrupt("return", new Promise(function (a6) {
                var a8 = {
                  url: "https://m.you.163.com".concat(a2),
                  headers: {
                    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-csrf-token": "",
                    "x-requested-with": "XMLHttpRequest",
                    "sec-ch-ua-platform": "macOS",
                    "sec-ch-ua-mobile": "?0",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                    referer: "https://m.you.163.com/",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "Accept-Encoding": "gzip, deflate, br, zstd",
                    "Accept-Language": "zh-CN,zh;q=0.9",
                    cookie: o
                  }
                };
                $.get(a8, function () {
                  var aa = i(g().mark(function ab(ac, ad, ae) {
                    var af, ag, ah;
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !ac) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ac)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 20;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (af = "", !$.isNode()) {
                              ai.next = 17;
                              break;
                            }
                            if (ag = ad.headers["set-cookie"] || ad.headers["Set-Cookie"], ag) {
                              ai.next = 14;
                              break;
                            }
                            a6("");
                            return ai.abrupt("return");
                          case 14:
                            for (ah = 0; ah < ag.length; ah++) {
                              af += ag[ah].split(";")[0] + ";";
                            }
                            ai.next = 19;
                            break;
                          case 17:
                            af = ad.headers["set-cookie"] || ad.headers["Set-Cookie"];
                            af = P(af);
                          case 19:
                            a6(af);
                          case 20:
                            ai.next = 25;
                            break;
                          case 22:
                            ai.prev = 22;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, ad);
                          case 25:
                            ai.prev = 25;
                            a6();
                            return ai.finish(25);
                          case 28:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ab, null, [[0, 22, 25, 28]]);
                  }));
                  return function (ac, ad, ae) {
                    return aa.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a4.stop();
          }
        }
      }, a1);
    }));
    return E.apply(this, arguments);
  }
  function F(a0, a1) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a2(a3, a4) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://dl.reg.163.com/dl/zj/yd".concat(a3),
                  headers: {
                    Connection: "keep-alive",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
                    "sec-ch-ua-platform": "macOS",
                    "sec-ch-ua-mobile": "?0",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                    accept: "*/*",
                    Origin: "https://dl.reg.163.com",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    "Accept-Encoding": "gzip, deflate, br, zstd",
                    "Accept-Language": "zh-CN,zh;q=0.9",
                    cookie: p
                  },
                  body: JSON.stringify(a4)
                };
                $.post(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !ae) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 9;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ag));
                          case 9:
                            ai.next = 14;
                            break;
                          case 11:
                            ai.prev = 11;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, af);
                          case 14:
                            ai.prev = 14;
                            a9();
                            return ai.finish(14);
                          case 17:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a2);
    }));
    return G.apply(this, arguments);
  }
  function H(a0) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a0(a1) {
      var a3,
        a4 = arguments;
      return g().wrap(function (a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              a3 = a4.length > 1 && void 0 !== a4[1] ? a4[1] : {};
              return a5.abrupt("return", new Promise(function (a7) {
                var a9 = {
                  "X-Requested-With": "XMLHttpRequest",
                  "x-csrf-token": "",
                  Connection: "keep-alive",
                  "Accept-Encoding": "gzip, deflate, br",
                  "Content-Type": "application/json",
                  Origin: "https://act.you.163.com",
                  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 yanxuan/7.6.8 device-id/ed179fedbfda9a7c5c9d462616c7bd96 app-chan-id/AppStore trustId/ios_trustid_781b2e99fe3a488eab858e05e4d48d63",
                  Cookie: m,
                  Referer: "https://act.you.163.com/act/pub/oly_RZXrqPgbLM483xa9.html",
                  Host: "act.you.163.com",
                  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                  Accept: "application/json, text/javascript, */*; q=0.01"
                };
                var aa = {
                  url: "https://act.you.163.com".concat(a1),
                  headers: a9,
                  body: JSON.stringify(a3)
                };
                $.post(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !ae) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ah.next = 9;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            a7(JSON.parse(ag));
                          case 9:
                            ah.next = 14;
                            break;
                          case 11:
                            ah.prev = 11;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, af);
                          case 14:
                            ah.prev = 14;
                            a7();
                            return ah.finish(14);
                          case 17:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a5.stop();
          }
        }
      }, a0);
    }));
    return I.apply(this, arguments);
  }
  function J(a0) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a1(a2) {
      var a5,
        a6 = arguments;
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              a5 = a6.length > 1 && void 0 !== a6[1] ? a6[1] : {};
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://m.you.163.com".concat(a2),
                  headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "x-csrf-token": "",
                    Connection: "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    Origin: "https://m.you.163.com",
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 yanxuan/7.6.8 device-id/ed179fedbfda9a7c5c9d462616c7bd96 app-chan-id/AppStore trustId/ios_trustid_781b2e99fe3a488eab858e05e4d48d63",
                    Cookie: m,
                    Referer: "https://m.you.163.com/giftCard/list",
                    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                    Accept: "application/json, text/javascript, */*; q=0.01"
                  },
                  body: a5
                };
                $.post(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !ae) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ah.next = 9;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ag));
                          case 9:
                            ah.next = 14;
                            break;
                          case 11:
                            ah.prev = 11;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, af);
                          case 14:
                            ah.prev = 14;
                            a9();
                            return ah.finish(14);
                          case 17:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a7.stop();
          }
        }
      }, a1);
    }));
    return K.apply(this, arguments);
  }
  function L(a0) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a1(a2) {
      return g().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              return a4.abrupt("return", new Promise(function (a6) {
                var a7 = {
                  "X-Requested-With": "XMLHttpRequest",
                  "x-csrf-token": "",
                  Connection: "keep-alive",
                  "Accept-Encoding": "gzip, deflate, br",
                  "Content-Type": "application/json",
                  Origin: "https://act.you.163.com",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309092b) XWEB/9105",
                  Cookie: m,
                  Referer: "https://act.you.163.com/act/pub/oly_RZXrqPgbLM483xa9.html",
                  Host: "act.you.163.com",
                  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                  Accept: "application/json, text/javascript, */*; q=0.01"
                };
                var a8 = {
                  url: "https://act.you.163.com".concat(a2),
                  headers: a7
                };
                $.get(a8, function () {
                  var aa = i(g().mark(function ab(ac, ad, ae) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !ac) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ac)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 9;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            a6(JSON.parse(ae));
                          case 9:
                            ag.next = 14;
                            break;
                          case 11:
                            ag.prev = 11;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, ad);
                          case 14:
                            ag.prev = 14;
                            a6();
                            return ag.finish(14);
                          case 17:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ab, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ac, ad, ae) {
                    return aa.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a4.stop();
          }
        }
      }, a1);
    }));
    return M.apply(this, arguments);
  }
  function N(a0) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a1(a2) {
      return g().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              return a3.abrupt("return", new Promise(function (a5) {
                var a6 = {
                  url: "https://act.you.163.com".concat(a2),
                  headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "x-csrf-token": "",
                    Connection: "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Content-Type": "application/json",
                    Origin: "https://act.you.163.com",
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 yanxuan/7.6.8 device-id/ed179fedbfda9a7c5c9d462616c7bd96 app-chan-id/AppStore trustId/ios_trustid_781b2e99fe3a488eab858e05e4d48d63",
                    Cookie: m,
                    Referer: "https://act.you.163.com/act/pub/oly_RZXrqPgbLM483xa9.html",
                    Host: "act.you.163.com",
                    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                    Accept: "application/json, text/javascript, */*; q=0.01"
                  }
                };
                $.get(a6, function () {
                  var a8 = i(g().mark(function a9(aa, ab, ac) {
                    return g().wrap(function (ae) {
                      for (;;) {
                        switch (ae.prev = ae.next) {
                          case 0:
                            if (ae.prev = 0, !aa) {
                              ae.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aa)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ae.next = 9;
                            break;
                          case 6:
                            ae.next = 8;
                            return $.wait(2000);
                          case 8:
                            a5(JSON.parse(ac));
                          case 9:
                            ae.next = 14;
                            break;
                          case 11:
                            ae.prev = 11;
                            ae.t0 = ae.catch(0);
                            $.logErr(ae.t0, ab);
                          case 14:
                            ae.prev = 14;
                            a5();
                            return ae.finish(14);
                          case 17:
                          case "end":
                            return ae.stop();
                        }
                      }
                    }, a9, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aa, ab, ac) {
                    return a8.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a3.stop();
          }
        }
      }, a1);
    }));
    return O.apply(this, arguments);
  }
  function P(a0) {
    var a1 = a0.split(", "),
      a2 = a1.map(function (a3) {
        var a4 = a3.split(";")[0];
        if (a4.split("=")[1]) {
          return a4.trim() + ";";
        }
      });
    return a2.join("");
  }
  function Q(a0) {
    for (var ab = a0.args.puzzle, ac = a0.args.mod, ad = a0.args.x, ae = a0.args.t, af = new Date().getTime(), ag = BigInt("0x" + ad), ah = BigInt("0x" + ac), ai = 0; ai < ae && Date.now() - af < a0.minTime && (ag = ag * ag % ah, ai++, !(Date.now() - af > a0.maxTime));) {}
    for (var a3 = new Date().getTime() - af, a4 = {
        runTimes: ai,
        spendTime: a3,
        t: ai,
        x: ag.toString(16)
      }, a5 = ["runTimes", "spendTime", "t", "x"], a6 = [], a7 = 0; a7 < a5.length; a7++) {
      var a8 = a5[a7],
        a9 = a4[a8];
      a6.push(encodeURIComponent(a8) + "=" + encodeURIComponent(a9));
    }
    a6 = a6.join("&");
    var aa = R(a6, ai);
    return {
      maxTime: a0.maxTime,
      puzzle: ab,
      spendTime: a3,
      runTimes: ai,
      sid: a0.sid,
      args: JSON.stringify({
        x: ag.toString(16),
        t: ai,
        sign: aa
      })
    };
  }
  function R(a0, a1) {
    var a2, a3, a4, a5, a6, a7, a8, a9;
    for (a2 = 3 & a0.length, a3 = a0.length - a2, a4 = a1, a6 = 3432918353, a7 = 461845907, a9 = 0; a9 < a3;) {
      a8 = 255 & a0.charCodeAt(a9) | (255 & a0.charCodeAt(++a9)) << 8 | (255 & a0.charCodeAt(++a9)) << 16 | (255 & a0.charCodeAt(++a9)) << 24;
      ++a9;
      a8 = (65535 & a8) * a6 + (((a8 >>> 16) * a6 & 65535) << 16) & 4294967295;
      a8 = a8 << 15 | a8 >>> 17;
      a8 = (65535 & a8) * a7 + (((a8 >>> 16) * a7 & 65535) << 16) & 4294967295;
      a4 ^= a8;
      a4 = a4 << 13 | a4 >>> 19;
      a5 = 5 * (65535 & a4) + ((5 * (a4 >>> 16) & 65535) << 16) & 4294967295;
      a4 = 27492 + (65535 & a5) + ((58964 + (a5 >>> 16) & 65535) << 16);
    }
    switch (a8 = 0, a2) {
      case 3:
        a8 ^= (255 & a0.charCodeAt(a9 + 2)) << 16;
      case 2:
        a8 ^= (255 & a0.charCodeAt(a9 + 1)) << 8;
      case 1:
        a8 ^= 255 & a0.charCodeAt(a9);
        a8 = (65535 & a8) * a6 + (((a8 >>> 16) * a6 & 65535) << 16) & 4294967295;
        a8 = a8 << 15 | a8 >>> 17;
        a8 = (65535 & a8) * a7 + (((a8 >>> 16) * a7 & 65535) << 16) & 4294967295;
        a4 ^= a8;
    }
    a4 ^= a0.length;
    a4 ^= a4 >>> 16;
    a4 = 2246822507 * (65535 & a4) + ((2246822507 * (a4 >>> 16) & 65535) << 16) & 4294967295;
    a4 ^= a4 >>> 13;
    a4 = 3266489909 * (65535 & a4) + ((3266489909 * (a4 >>> 16) & 65535) << 16) & 4294967295;
    a4 ^= a4 >>> 16;
    return a4 >>> 0;
  }
  function S(a0) {
    return Utils.loadSM4().encrypt(a0, s);
  }
  function T() {
    for (var a0 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", a1 = 32, a2 = []; a1-- > 0;) {
      a2[a1] = a0.charAt(62 * Math.random());
    }
    return a2.join("");
  }
  function U() {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function a1() {
      var a3;
      return g().wrap(function a4(a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              if (a3 = $.getdata("Utils_Code") || "", !a3 || !Object.keys(a3).length) {
                a5.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a3);
              return a5.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a5.abrupt("return", new Promise(function () {
                var a7 = i(g().mark(function a8(a9) {
                  return g().wrap(function ab(ac) {
                    for (;;) {
                      switch (ac.prev = ac.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (ad) {
                            $.setdata(ad, "Utils_Code");
                            eval(ad);
                            console.log("✅ Utils加载成功, 请继续");
                            a9(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ac.stop();
                      }
                    }
                  }, a8);
                }));
                return function (a9) {
                  return a7.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a5.stop();
          }
        }
      }, a1);
    }));
    return V.apply(this, arguments);
  }
  function W() {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function a1() {
      return g().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a4) {
                var a6 = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(a6, function () {
                  var a8 = i(g().mark(function a9(aa, ab, ac) {
                    return g().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            try {
                              aa ? (console.log("".concat(JSON.stringify(aa))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(ac).notice);
                            } catch (ae) {
                              $.logErr(ae, ab);
                            } finally {
                              a4();
                            }
                          case 1:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a9);
                  }));
                  return function (aa, ab, ac) {
                    return a8.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a2.stop();
          }
        }
      }, a1);
    }));
    return X.apply(this, arguments);
  }
  function Y(a0) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function a0(a1) {
      return g().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              if (!$.isNode()) {
                a2.next = 5;
                break;
              }
              a2.next = 3;
              return notify.sendNotify($.name, a1);
            case 3:
              a2.next = 6;
              break;
            case 5:
              $.msg($.name, "", a1);
            case 6:
            case "end":
              return a2.stop();
          }
        }
      }, a0);
    }));
    return Z.apply(this, arguments);
  }
  i(g().mark(function a0() {
    return g().wrap(function (a1) {
      for (;;) {
        switch (a1.prev = a1.next) {
          case 0:
            a1.next = 2;
            return W();
          case 2:
            a1.next = 4;
            return v();
          case 4:
          case "end":
            return a1.stop();
        }
      }
    }, a0);
  }))().catch(function (a1) {
    $.log(a1);
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
      return new Promise((e, a) => {
        s.call(this, t, (t, s, r) => {
          t ? a(t) : e(s);
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
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const a = this.getdata(t);
      if (a) {
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
        }, (t, s, a) => e(a));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        a = a ? a.replace(/\n/g, "").trim() : a;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [i, o] = a.split("@"),
          n = {
            url: `http://${o}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: r
          };
        this.post(n, (t, e, a) => s(a));
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
          a = !s && this.fs.existsSync(e);
        if (!s && !a) {
          return {};
        }
        {
          const a = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(a));
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
          a = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of a) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, a, "") : e;
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
        const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e),
          i = this.getval(a),
          o = a ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), a);
        } catch (e) {
          const i = {};
          this.lodash_set(i, r, t);
          s = this.setval(JSON.stringify(i), a);
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
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
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
                statusCode: a,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = s.decode(o, this.encoding);
            e(null, {
              status: a,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: a,
              response: r
            } = t;
            e(a, r, r && s.decode(r.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
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
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: r,
            ...i
          } = t;
          this.got[s](r, i).then(t => {
            const {
                statusCode: s,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = a.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: r
            } = t;
            e(s, r, r && a.decode(r.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let a = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let a = t[s];
        null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", a = "", r) {
      const i = t => {
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
                  let e = t.url || t.openUrl || t["open-url"];
                  return {
                    url: e
                  };
                }
              case "Loon":
                {
                  let e = t.openUrl || t.url || t["open-url"],
                    s = t.mediaUrl || t["media-url"];
                  return {
                    openUrl: e,
                    mediaUrl: s
                  };
                }
              case "Quantumult X":
                {
                  let e = t["open-url"] || t.url || t.openUrl,
                    s = t["media-url"] || t.mediaUrl,
                    a = t["update-pasteboard"] || t.updatePasteboard;
                  return {
                    "open-url": e,
                    "media-url": s,
                    "update-pasteboard": a
                  };
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
            $notification.post(e, s, a, i(r));
            break;
          case "Quantumult X":
            $notify(e, s, a, i(r));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        a && t.push(a);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) {
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