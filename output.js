//Sun Jul 13 2025 12:57:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("网易严选");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a0) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a2) {
      return typeof a2;
    } : function (a2) {
      return a2 && "function" == typeof Symbol && a2.constructor === Symbol && a2 !== Symbol.prototype ? "symbol" : typeof a2;
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
            var ab = {
              done: !0
            };
            return a4 >= a0.length ? ab : {
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
    for (var a4 = 0, a5 = Array(a1); a4 < a1; a4++) {
      a5[a4] = a0[a4];
    }
    return a5;
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
      } catch (aG) {
        var aD = {};
        aD.type = "throw";
        aD.arg = aG;
        return aD;
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
      function aE(aF, aG, aH, aI) {
        var aK = ac(aA[aF], aA, aG);
        if ("throw" !== aK.type) {
          var aL = aK.arg,
            aM = aL.value;
          return aM && "object" == b(aM) && a4.call(aM, "__await") ? aB.resolve(aM.__await).then(function (aP) {
            aE("next", aP, aH, aI);
          }, function (aP) {
            aE("throw", aP, aH, aI);
          }) : aB.resolve(aM).then(function (aP) {
            aL.value = aP;
            aH(aL);
          }, function (aP) {
            return aE("throw", aP, aH, aI);
          });
        }
        aI(aK.arg);
      }
      var aD;
      a5(this, "_invoke", {
        value: function (aF, aG) {
          function aH() {
            return new aB(function (aK, aL) {
              aE(aF, aG, aK, aL);
            });
          }
          return aD = aD ? aD.then(aH, aH) : aH();
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
      var aH = aB.method,
        aI = aA.iterator[aH];
      if (aI === a1) {
        aB.delegate = null;
        "throw" === aH && aA.iterator.return && (aB.method = "return", aB.arg = a1, as(aA, aB), "throw" === aB.method) || "return" !== aH && (aB.method = "throw", aB.arg = new TypeError("The iterator does not provide a '" + aH + "' method"));
        return ah;
      }
      var aJ = ac(aI, aA.iterator, aB.arg);
      if ("throw" === aJ.type) {
        aB.method = "throw";
        aB.arg = aJ.arg;
        aB.delegate = null;
        return ah;
      }
      var aG = aJ.arg;
      return aG ? aG.done ? (aB[aA.resultName] = aG.value, aB.next = aA.nextLoc, "return" !== aB.method && (aB.method = "next", aB.arg = a1), aB.delegate = null, ah) : aG : (aB.method = "throw", aB.arg = new TypeError("iterator result is not an object"), aB.delegate = null, ah);
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
      var aB = "function" == typeof aA && aA.constructor;
      return !!aB && (aB === aj || "GeneratorFunction" === (aB.displayName || aB.name));
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
      var aB = Object(aA),
        aC = [];
      for (var aD in aB) aC.push(aD);
      aC.reverse();
      return function aF() {
        for (; aC.length;) {
          var aI = aC.pop();
          if (aI in aB) {
            aF.value = aI;
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
        var aB = this.tryEntries[0].completion;
        if ("throw" === aB.type) {
          throw aB.arg;
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
        for (var aB = this.tryEntries.length - 1; aB >= 0; --aB) {
          var aC = this.tryEntries[aB];
          if (aC.finallyLoc === aA) {
            this.complete(aC.completion, aC.afterLoc);
            au(aC);
            return ah;
          }
        }
      },
      catch: function (aA) {
        for (var aC = this.tryEntries.length - 1; aC >= 0; --aC) {
          var aD = this.tryEntries[aC];
          if (aD.tryLoc === aA) {
            var aE = aD.completion;
            if ("throw" === aE.type) {
              var aF = aE.arg;
              au(aD);
            }
            return aF;
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
      var a7 = a0[a5](a6),
        a8 = a7.value;
    } catch (ab) {
      return void a2(ab);
    }
    a7.done ? a1(a8) : Promise.resolve(a8).then(a3, a4);
  }
  function i(a0) {
    return function () {
      var a3 = this,
        a4 = arguments;
      return new Promise(function (a5, a6) {
        var a8 = a0.apply(a3, a4);
        function a9(ab) {
          h(a8, a5, a6, a9, aa, "next", ab);
        }
        function aa(ab) {
          h(a8, a5, a6, a9, aa, "throw", ab);
        }
        a9(void 0);
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
    y = i(g().mark(function a0() {
      var a2, a3, a4, a5, a6, a7, a8, a9, aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
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
              ab.next = 6;
              return B("/dlzc/yd/ini", {
                encParams: S(JSON.stringify(a2))
              });
            case 6:
              p = ab.sent;
              console.log("获取登录参数");
              a2 = {
                pd: "yanxuan_web",
                pkid: "pXPYGTc",
                un: q,
                channel: 1,
                topURL: "https://m.you.163.com/u/login?callback=https%3A%2F%2Fm.you.163.com%2F",
                rtid: T()
              };
              ab.next = 11;
              return F("/powGetP", {
                encParams: S(JSON.stringify(a2))
              });
            case 11:
              a3 = ab.sent;
              console.log("获取登录tk");
              a2 = {
                un: q,
                channel: 1,
                pd: "yanxuan_web",
                pkid: "pXPYGTc",
                topURL: "https://m.you.163.com/u/login?callback=https%3A%2F%2Fm.you.163.com%2F",
                rtid: T()
              };
              ab.next = 16;
              return F("/gt", {
                encParams: S(JSON.stringify(a2))
              });
            case 16:
              a4 = ab.sent;
              console.log(a4.tk);
              a5 = new (Utils.loadJSEncrypt())();
              a5.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5gsH+AA4XWONB5TDcUd+xCz7ejOFHZKlcZDx+pF1i7Gsvi1vjyJoQhRtRSn950x498VUkx7rUxg1/ScBVfrRxQOZ8xFBye3pjAzfb22+RCuYApSVpJ3OO3KsEuKExftz9oFBv3ejxPlYc5yq7YiBO8XlTnQN0Sa4R4qhPO3I2MQIDAQAB-----END PUBLIC KEY-----");
              a6 = Q(a3.pVInfo);
              a7 = {
                puzzle: a6.puzzle,
                spendTime: a6.spendTime,
                runTimes: a6.runTimes,
                sid: a6.sid,
                args: a6.args
              };
              a2 = {
                un: q,
                pw: a5.encrypt(r),
                pd: "yanxuan_web",
                pkid: "pXPYGTc",
                tk: a4.tk,
                domains: "",
                pVParam: a7,
                channel: 1,
                topURL: "https://m.you.163.com/u/login?callback=https%3A%2F%2Fm.you.163.com%2F",
                rtid: T()
              };
              ab.next = 25;
              return B("/zj/yd/pwd/l", {
                encParams: S(JSON.stringify(a2))
              });
            case 25:
              if (o = ab.sent, o) {
                ab.next = 29;
                break;
              }
              console.log("登录失败");
              return ab.abrupt("return");
            case 29:
              console.log("登录成功");
              console.log("获取token");
              ab.next = 33;
              return D("/xhr/index.json?__timestamp=".concat(Date.now(), "&"));
            case 33:
              a8 = ab.sent;
              a8 ? (m = o + a8, a9 = /yx_csrf=([^;]*)/, aa = a8.match(a9), aa ? (n = aa[1], console.log(n)) : console.log("获取token失败")) : console.log("获取token失败");
            case 35:
            case "end":
              return ab.stop();
          }
        }
      }, a0);
    }));
    return y.apply(this, arguments);
  }
  function z() {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function a1() {
      var a4, a5, a6;
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              var a8 = {};
              a8.id = q;
              a8.cookie = m;
              a8.token = n;
              if (a4 = $.getjson("WYYXCookies") || [], a5 = a8, a6 = a4.findIndex(function (a9) {
                return a9.id == a5.id;
              }), -1 === a6) {
                a7.next = 12;
                break;
              }
              if (a4[a6].cookie != a5.cookie || a4[a6].token != a5.token) {
                a7.next = 8;
                break;
              }
              return a7.abrupt("return");
            case 8:
              a4[a6] = a5;
              console.log("🎉用户".concat(a5.id, "更新cookie成功!"));
            case 10:
              a7.next = 14;
              break;
            case 12:
              a4.push(a5);
              console.log("🎉新增用户".concat(a5.id, "成功!"));
            case 14:
              $.setjson(a4, "WYYXCookies");
            case 15:
            case "end":
              return a7.stop();
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
    C = i(g().mark(function a1(a2, a3) {
      return g().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              return a4.abrupt("return", new Promise(function (a6) {
                var a8 = {
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
                var a9 = {
                  url: "https://dl.reg.163.com/dl".concat(a2),
                  headers: a8,
                  body: JSON.stringify(a3)
                };
                $.post(a9, function () {
                  var aa = i(g().mark(function ab(ac, ad, ae) {
                    var ag, ah, ai;
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !ac) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ac)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 14;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (ae = JSON.parse(ae), 201 == ae.ret) {
                              aj.next = 11;
                              break;
                            }
                            return aj.abrupt("return");
                          case 11:
                            if (ag = "", $.isNode()) {
                              for (ah = ad.headers["set-cookie"] || ad.headers["Set-Cookie"], ai = 0; ai < ah.length; ai++) {
                                ah[ai].split(";")[0].split("=")[1] && (ag += ah[ai].split(";")[0] + ";");
                              }
                            } else {
                              ag = ad.headers["set-cookie"] || ad.headers["Set-Cookie"];
                              ag = P(ag);
                            }
                            a6(ag);
                          case 14:
                            aj.next = 19;
                            break;
                          case 16:
                            aj.prev = 16;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ad);
                          case 19:
                            aj.prev = 19;
                            a6();
                            return aj.finish(19);
                          case 22:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ab, null, [[0, 16, 19, 22]]);
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
              return a4.abrupt("return", new Promise(function (a5) {
                var a7 = {
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
                $.get(a7, function () {
                  var a9 = i(g().mark(function aa(ab, ac, ad) {
                    var ae, af, ag;
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !ab) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ab)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ah.next = 20;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (ae = "", !$.isNode()) {
                              ah.next = 17;
                              break;
                            }
                            if (af = ac.headers["set-cookie"] || ac.headers["Set-Cookie"], af) {
                              ah.next = 14;
                              break;
                            }
                            a5("");
                            return ah.abrupt("return");
                          case 14:
                            for (ag = 0; ag < af.length; ag++) {
                              ae += af[ag].split(";")[0] + ";";
                            }
                            ah.next = 19;
                            break;
                          case 17:
                            ae = ac.headers["set-cookie"] || ac.headers["Set-Cookie"];
                            ae = P(ae);
                          case 19:
                            a5(ae);
                          case 20:
                            ah.next = 25;
                            break;
                          case 22:
                            ah.prev = 22;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, ac);
                          case 25:
                            ah.prev = 25;
                            a5();
                            return ah.finish(25);
                          case 28:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, aa, null, [[0, 22, 25, 28]]);
                  }));
                  return function (ab, ac, ad) {
                    return a9.apply(this, arguments);
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
    G = i(g().mark(function a1(a2, a3) {
      return g().wrap(function (a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              return a5.abrupt("return", new Promise(function (a6) {
                var a8 = {
                  url: "https://dl.reg.163.com/dl/zj/yd".concat(a2),
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
                  body: JSON.stringify(a3)
                };
                $.post(a8, function () {
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
              return a5.stop();
          }
        }
      }, a1);
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
                  url: "https://act.you.163.com".concat(a1),
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
                  },
                  body: JSON.stringify(a3)
                };
                $.post(a9, function () {
                  var ab = i(g().mark(function ac(ad, ae, af) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !ad) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ad)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 9;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            a7(JSON.parse(af));
                          case 9:
                            ag.next = 14;
                            break;
                          case 11:
                            ag.prev = 11;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, ae);
                          case 14:
                            ag.prev = 14;
                            a7();
                            return ag.finish(14);
                          case 17:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ac, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ad, ae, af) {
                    return ab.apply(this, arguments);
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
                };
                var ab = {
                  url: "https://m.you.163.com".concat(a2),
                  headers: aa,
                  body: a5
                };
                $.post(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !af) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 9;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ah));
                          case 9:
                            ai.next = 14;
                            break;
                          case 11:
                            ai.prev = 11;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, ag);
                          case 14:
                            ai.prev = 14;
                            a9();
                            return ai.finish(14);
                          case 17:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
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
      return g().wrap(function (a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              return a5.abrupt("return", new Promise(function (a7) {
                var a8 = {
                  url: "https://act.you.163.com".concat(a2),
                  headers: {
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
                  }
                };
                $.get(a8, function () {
                  var aa = i(g().mark(function ab(ac, ad, ae) {
                    return g().wrap(function (af) {
                      for (;;) {
                        switch (af.prev = af.next) {
                          case 0:
                            if (af.prev = 0, !ac) {
                              af.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ac)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            af.next = 9;
                            break;
                          case 6:
                            af.next = 8;
                            return $.wait(2000);
                          case 8:
                            a7(JSON.parse(ae));
                          case 9:
                            af.next = 14;
                            break;
                          case 11:
                            af.prev = 11;
                            af.t0 = af.catch(0);
                            $.logErr(af.t0, ad);
                          case 14:
                            af.prev = 14;
                            a7();
                            return af.finish(14);
                          case 17:
                          case "end":
                            return af.stop();
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
              return a5.stop();
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
    for (var a4 = new Date().getTime() - af, a5 = {
        runTimes: ai,
        spendTime: a4,
        t: ai,
        x: ag.toString(16)
      }, a6 = ["runTimes", "spendTime", "t", "x"], a7 = [], a8 = 0; a8 < a6.length; a8++) {
      var a9 = a6[a8],
        aa = a5[a9];
      a7.push(encodeURIComponent(a9) + "=" + encodeURIComponent(aa));
    }
    a7 = a7.join("&");
    var a3 = R(a7, ai);
    return {
      maxTime: a0.maxTime,
      puzzle: ab,
      spendTime: a4,
      runTimes: ai,
      sid: a0.sid,
      args: JSON.stringify({
        x: ag.toString(16),
        t: ai,
        sign: a3
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
                  return g().wrap(function aa(ab) {
                    for (;;) {
                      switch (ab.prev = ab.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (ad) {
                            $.setdata(ad, "Utils_Code");
                            eval(ad);
                            console.log("✅ Utils加载成功, 请继续");
                            a9(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ab.stop();
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
    X = i(g().mark(function a0() {
      return g().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a4) {
                var a6 = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(a6, function () {
                  var a7 = i(g().mark(function a8(a9, aa, ab) {
                    return g().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            try {
                              a9 ? (console.log("".concat(JSON.stringify(a9))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(ab).notice);
                            } catch (ae) {
                              $.logErr(ae, aa);
                            } finally {
                              a4();
                            }
                          case 1:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a8);
                  }));
                  return function (a9, aa, ab) {
                    return a7.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a2.stop();
          }
        }
      }, a0);
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