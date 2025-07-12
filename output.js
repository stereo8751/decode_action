//Sat Jul 12 2025 08:22:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("58同城");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function q(Z) {
    q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a1) {
      return typeof a1;
    } : function (a1) {
      return a1 && "function" == typeof Symbol && a1.constructor === Symbol && a1 !== Symbol.prototype ? "symbol" : typeof a1;
    };
    return q(Z);
  }
  function z(Z, a0) {
    var a2 = "undefined" != typeof Symbol && Z[Symbol.iterator] || Z["@@iterator"];
    if (!a2) {
      if (Array.isArray(Z) || (a2 = function (a9, aa) {
        if (a9) {
          if ("string" == typeof a9) {
            return A(a9, aa);
          }
          var ab = {}.toString.call(a9).slice(8, -1);
          "Object" === ab && a9.constructor && (ab = a9.constructor.name);
          return "Map" === ab || "Set" === ab ? Array.from(a9) : "Arguments" === ab || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ab) ? A(a9, aa) : void 0;
        }
      }(Z)) || a0 && Z && "number" == typeof Z.length) {
        a2 && (Z = a2);
        var a3 = 0,
          a4 = function () {};
        return {
          s: a4,
          n: function () {
            var a9 = {
              done: !0
            };
            return a3 >= Z.length ? a9 : {
              done: !1,
              value: Z[a3++]
            };
          },
          e: function (a9) {
            throw a9;
          },
          f: a4
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a5,
      a6 = !0,
      a7 = !1;
    return {
      s: function () {
        a2 = a2.call(Z);
      },
      n: function () {
        var aa = a2.next();
        a6 = aa.done;
        return aa;
      },
      e: function (aa) {
        a7 = !0;
        a5 = aa;
      },
      f: function () {
        try {
          a6 || null == a2.return || a2.return();
        } finally {
          if (a7) {
            throw a5;
          }
        }
      }
    };
  }
  function A(Z, a0) {
    (null == a0 || a0 > Z.length) && (a0 = Z.length);
    for (var a1 = 0, a2 = Array(a0); a1 < a0; a1++) {
      a2[a1] = Z[a1];
    }
    return a2;
  }
  function B() {
    'use strict';

    B = function () {
      return a1;
    };
    var a0,
      a1 = {},
      a2 = Object.prototype,
      a3 = a2.hasOwnProperty,
      a4 = Object.defineProperty || function (aw, ax, ay) {
        aw[ax] = ay.value;
      },
      a5 = "function" == typeof Symbol ? Symbol : {},
      a6 = a5.iterator || "@@iterator",
      a7 = a5.asyncIterator || "@@asyncIterator",
      a8 = a5.toStringTag || "@@toStringTag";
    function a9(aw, ax, ay) {
      var az = {
        value: ay,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aw, ax, az);
      return aw[ax];
    }
    try {
      a9({}, "");
    } catch (ax) {
      a9 = function (az, aA, aB) {
        return az[aA] = aB;
      };
    }
    function aa(az, aA, aB, aC) {
      var aD = aA && aA.prototype instanceof ah ? aA : ah,
        aE = Object.create(aD.prototype),
        aF = new au(aC || []);
      a4(aE, "_invoke", {
        value: aq(az, aB, aF)
      });
      return aE;
    }
    function ab(az, aA, aB) {
      try {
        return {
          type: "normal",
          arg: az.call(aA, aB)
        };
      } catch (aF) {
        var aD = {
          type: "throw",
          arg: aF
        };
        return aD;
      }
    }
    a1.wrap = aa;
    var ac = "suspendedStart",
      ad = "suspendedYield",
      ae = "executing",
      af = "completed",
      ag = {};
    function ah() {}
    function ai() {}
    function aj() {}
    var ak = {};
    a9(ak, a6, function () {
      return this;
    });
    var al = Object.getPrototypeOf,
      am = al && al(al(av([])));
    am && am !== a2 && a3.call(am, a6) && (ak = am);
    aj.prototype = ah.prototype = Object.create(ak);
    var an = aj.prototype;
    function ao(az) {
      ["next", "throw", "return"].forEach(function (aB) {
        a9(az, aB, function (aE) {
          return this._invoke(aB, aE);
        });
      });
    }
    function ap(az, aA) {
      function aD(aE, aF, aG, aH) {
        var aJ = ab(az[aE], az, aF);
        if ("throw" !== aJ.type) {
          var aK = aJ.arg,
            aL = aK.value;
          return aL && "object" == q(aL) && a3.call(aL, "__await") ? aA.resolve(aL.__await).then(function (aN) {
            aD("next", aN, aG, aH);
          }, function (aN) {
            aD("throw", aN, aG, aH);
          }) : aA.resolve(aL).then(function (aN) {
            aK.value = aN;
            aG(aK);
          }, function (aN) {
            return aD("throw", aN, aG, aH);
          });
        }
        aH(aJ.arg);
      }
      var aC;
      a4(this, "_invoke", {
        value: function (aE, aF) {
          function aH() {
            return new aA(function (aJ, aK) {
              aD(aE, aF, aJ, aK);
            });
          }
          return aC = aC ? aC.then(aH, aH) : aH();
        }
      });
    }
    function aq(az, aA, aB) {
      var aD = ac;
      return function (aE, aF) {
        if (aD === ae) {
          throw Error("Generator is already running");
        }
        if (aD === af) {
          if ("throw" === aE) {
            throw aF;
          }
          var aH = {
            value: a0,
            done: !0
          };
          return aH;
        }
        for (aB.method = aE, aB.arg = aF;;) {
          var aI = aB.delegate;
          if (aI) {
            var aJ = ar(aI, aB);
            if (aJ) {
              if (aJ === ag) {
                continue;
              }
              return aJ;
            }
          }
          if ("next" === aB.method) {
            aB.sent = aB._sent = aB.arg;
          } else {
            if ("throw" === aB.method) {
              if (aD === ac) {
                throw aD = af, aB.arg;
              }
              aB.dispatchException(aB.arg);
            } else {
              "return" === aB.method && aB.abrupt("return", aB.arg);
            }
          }
          aD = ae;
          var aK = ab(az, aA, aB);
          if ("normal" === aK.type) {
            if (aD = aB.done ? af : ad, aK.arg === ag) {
              continue;
            }
            var aL = {};
            aL.value = aK.arg;
            aL.done = aB.done;
            return aL;
          }
          "throw" === aK.type && (aD = af, aB.method = "throw", aB.arg = aK.arg);
        }
      };
    }
    function ar(az, aA) {
      var aB = aA.method,
        aC = az.iterator[aB];
      if (aC === a0) {
        aA.delegate = null;
        "throw" === aB && az.iterator.return && (aA.method = "return", aA.arg = a0, ar(az, aA), "throw" === aA.method) || "return" !== aB && (aA.method = "throw", aA.arg = new TypeError("The iterator does not provide a '" + aB + "' method"));
        return ag;
      }
      var aD = ab(aC, az.iterator, aA.arg);
      if ("throw" === aD.type) {
        aA.method = "throw";
        aA.arg = aD.arg;
        aA.delegate = null;
        return ag;
      }
      var aE = aD.arg;
      return aE ? aE.done ? (aA[az.resultName] = aE.value, aA.next = az.nextLoc, "return" !== aA.method && (aA.method = "next", aA.arg = a0), aA.delegate = null, ag) : aE : (aA.method = "throw", aA.arg = new TypeError("iterator result is not an object"), aA.delegate = null, ag);
    }
    function as(az) {
      var aA = {
        tryLoc: az[0]
      };
      var aB = aA;
      1 in az && (aB.catchLoc = az[1]);
      2 in az && (aB.finallyLoc = az[2], aB.afterLoc = az[3]);
      this.tryEntries.push(aB);
    }
    function at(az) {
      var aA = az.completion || {};
      aA.type = "normal";
      delete aA.arg;
      az.completion = aA;
    }
    function au(az) {
      var aA = {
        tryLoc: "root"
      };
      this.tryEntries = [aA];
      az.forEach(as, this);
      this.reset(!0);
    }
    function av(az) {
      if (az || "" === az) {
        var aB = az[a6];
        if (aB) {
          return aB.call(az);
        }
        if ("function" == typeof az.next) {
          return az;
        }
        if (!isNaN(az.length)) {
          var aC = -1,
            aD = function aH() {
              for (; ++aC < az.length;) {
                if (a3.call(az, aC)) {
                  aH.value = az[aC];
                  aH.done = !1;
                  return aH;
                }
              }
              aH.value = a0;
              aH.done = !0;
              return aH;
            };
          return aD.next = aD;
        }
      }
      throw new TypeError(q(az) + " is not iterable");
    }
    ai.prototype = aj;
    a4(an, "constructor", {
      value: aj,
      configurable: !0
    });
    a4(aj, "constructor", {
      value: ai,
      configurable: !0
    });
    ai.displayName = a9(aj, a8, "GeneratorFunction");
    a1.isGeneratorFunction = function (az) {
      var aA = "function" == typeof az && az.constructor;
      return !!aA && (aA === ai || "GeneratorFunction" === (aA.displayName || aA.name));
    };
    a1.mark = function (az) {
      Object.setPrototypeOf ? Object.setPrototypeOf(az, aj) : (az.__proto__ = aj, a9(az, a8, "GeneratorFunction"));
      az.prototype = Object.create(an);
      return az;
    };
    a1.awrap = function (az) {
      var aB = {
        __await: az
      };
      return aB;
    };
    ao(ap.prototype);
    a9(ap.prototype, a7, function () {
      return this;
    });
    a1.AsyncIterator = ap;
    a1.async = function (az, aA, aB, aC, aD) {
      void 0 === aD && (aD = Promise);
      var aF = new ap(aa(az, aA, aB, aC), aD);
      return a1.isGeneratorFunction(aA) ? aF : aF.next().then(function (aG) {
        return aG.done ? aG.value : aF.next();
      });
    };
    ao(an);
    a9(an, a8, "Generator");
    a9(an, a6, function () {
      return this;
    });
    a9(an, "toString", function () {
      return "[object Generator]";
    });
    a1.keys = function (az) {
      var aC = Object(az),
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
    a1.values = av;
    au.prototype = {
      constructor: au,
      reset: function (az) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a0, this.done = !1, this.delegate = null, this.method = "next", this.arg = a0, this.tryEntries.forEach(at), !az) {
          for (var aA in this) "t" === aA.charAt(0) && a3.call(this, aA) && !isNaN(+aA.slice(1)) && (this[aA] = a0);
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
      dispatchException: function (az) {
        if (this.done) {
          throw az;
        }
        var aB = this;
        function aH(aI, aJ) {
          aE.type = "throw";
          aE.arg = az;
          aB.next = aI;
          aJ && (aB.method = "next", aB.arg = a0);
          return !!aJ;
        }
        for (var aC = this.tryEntries.length - 1; aC >= 0; --aC) {
          var aD = this.tryEntries[aC],
            aE = aD.completion;
          if ("root" === aD.tryLoc) {
            return aH("end");
          }
          if (aD.tryLoc <= this.prev) {
            var aF = a3.call(aD, "catchLoc"),
              aG = a3.call(aD, "finallyLoc");
            if (aF && aG) {
              if (this.prev < aD.catchLoc) {
                return aH(aD.catchLoc, !0);
              }
              if (this.prev < aD.finallyLoc) {
                return aH(aD.finallyLoc);
              }
            } else {
              if (aF) {
                if (this.prev < aD.catchLoc) {
                  return aH(aD.catchLoc, !0);
                }
              } else {
                if (!aG) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aD.finallyLoc) {
                  return aH(aD.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (az, aA) {
        for (var aB = this.tryEntries.length - 1; aB >= 0; --aB) {
          var aC = this.tryEntries[aB];
          if (aC.tryLoc <= this.prev && a3.call(aC, "finallyLoc") && this.prev < aC.finallyLoc) {
            var aD = aC;
            break;
          }
        }
        aD && ("break" === az || "continue" === az) && aD.tryLoc <= aA && aA <= aD.finallyLoc && (aD = null);
        var aE = aD ? aD.completion : {};
        aE.type = az;
        aE.arg = aA;
        return aD ? (this.method = "next", this.next = aD.finallyLoc, ag) : this.complete(aE);
      },
      complete: function (az, aA) {
        if ("throw" === az.type) {
          throw az.arg;
        }
        "break" === az.type || "continue" === az.type ? this.next = az.arg : "return" === az.type ? (this.rval = this.arg = az.arg, this.method = "return", this.next = "end") : "normal" === az.type && aA && (this.next = aA);
        return ag;
      },
      finish: function (az) {
        for (var aB = this.tryEntries.length - 1; aB >= 0; --aB) {
          var aC = this.tryEntries[aB];
          if (aC.finallyLoc === az) {
            this.complete(aC.completion, aC.afterLoc);
            at(aC);
            return ag;
          }
        }
      },
      catch: function (az) {
        for (var aB = this.tryEntries.length - 1; aB >= 0; --aB) {
          var aC = this.tryEntries[aB];
          if (aC.tryLoc === az) {
            var aD = aC.completion;
            if ("throw" === aD.type) {
              var aE = aD.arg;
              at(aC);
            }
            return aE;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (az, aA, aB) {
        this.delegate = {
          iterator: av(az),
          resultName: aA,
          nextLoc: aB
        };
        "next" === this.method && (this.arg = a0);
        return ag;
      }
    };
    return a1;
  }
  function C(Z, a0, a1, a2, a3, a4, a5) {
    try {
      var a6 = Z[a4](a5),
        a7 = a6.value;
    } catch (a9) {
      return void a1(a9);
    }
    a6.done ? a0(a7) : Promise.resolve(a7).then(a2, a3);
  }
  function D(Z) {
    return function () {
      var a2 = this,
        a3 = arguments;
      return new Promise(function (a4, a5) {
        var a7 = Z.apply(a2, a3);
        function a8(aa) {
          C(a7, a4, a5, a8, a9, "next", aa);
        }
        function a9(aa) {
          C(a7, a4, a5, a8, a9, "throw", aa);
        }
        a8(void 0);
      });
    };
  }
  var E = ($.isNode() ? process.env.TongCheng ? JSON.parse(process.env.TongCheng) : void 0 : $.getjson("TongCheng")) || [],
    F = "",
    G = "",
    H = "",
    J = "";
  function K() {
    return L.apply(this, arguments);
  }
  function L() {
    L = D(B().mark(function Z() {
      var a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an;
      return B().wrap(function (ao) {
        for (;;) {
          switch (ao.prev = ao.next) {
            case 0:
              a1 = z(E);
              ao.prev = 1;
              a1.s();
            case 3:
              if ((a2 = a1.n()).done) {
                ao.next = 116;
                break;
              }
              a3 = a2.value;
              ao.prev = 5;
              F = a3.userId;
              G = a3.ppu;
              H = a3.signParam;
              console.log("用户：".concat(F, "开始任务"));
              ao.next = 12;
              return O("/v3/sign");
            case 12:
              a4 = ao.sent;
              0 == a4.code ? console.log(a4.result.awardDesc) : console.log(a4.message);
              ao.next = 16;
              return O("/v3/sign", H);
            case 16:
              a5 = ao.sent;
              0 == a5.code ? console.log(a5.result.awardDesc) : console.log(a5.message);
              ao.next = 20;
              return T("/web/task/dolist?sceneId=56&openpush=0&source=");
            case 20:
              a6 = ao.sent;
              a7 = z(a6.result.taskList);
              ao.prev = 22;
              a7.s();
            case 24:
              if ((a8 = a7.n()).done) {
                ao.next = 53;
                break;
              }
              if (a9 = a8.value, console.log("任务：".concat(a9.itemName)), 2 != a9.status) {
                ao.next = 31;
                break;
              }
              console.log("任务已完成");
              ao.next = 51;
              break;
            case 31:
              if (1 != a9.status) {
                ao.next = 39;
                break;
              }
              aa = Date.now();
              ao.next = 35;
              return T("/web/task/reward?timestamp=".concat(aa, "&sign=").concat(md5("".concat(aa).concat(a9.itemId)), "&taskId=").concat(a9.itemId));
            case 35:
              ab = ao.sent;
              console.log("领取奖励：".concat(ab.message));
              ao.next = 51;
              break;
            case 39:
              ac = Date.now();
              ao.next = 42;
              return T("/web/task/dotask?timestamp=".concat(ac, "&sign=").concat(md5("".concat(ac).concat(a9.itemId)), "&taskId=").concat(a9.itemId, "&taskData=").concat(a9.completionCondition.times, "&needReward=1"));
            case 42:
              ad = ao.sent;
              console.log("完成任务：".concat(ad.message));
              ac = Date.now();
              ao.next = 47;
              return T("/web/task/reward?timestamp=".concat(ac, "&sign=").concat(md5("".concat(ac).concat(a9.itemId)), "&taskId=").concat(a9.itemId));
            case 47:
              ae = ao.sent;
              console.log("领取奖励：".concat(ae.message));
              ao.next = 51;
              return $.wait(1000 * a9.completionCondition.times);
            case 51:
              ao.next = 24;
              break;
            case 53:
              ao.next = 58;
              break;
            case 55:
              ao.prev = 55;
              ao.t0 = ao.catch(22);
              a7.e(ao.t0);
            case 58:
              ao.prev = 58;
              a7.f();
              return ao.finish(58);
            case 61:
              ao.next = 63;
              return T("/web/task/dolist?".concat(H, "&openpush=0&sceneId=66"));
            case 63:
              a6 = ao.sent;
              af = z(a6.result.taskList);
              ao.prev = 65;
              af.s();
            case 67:
              if ((ag = af.n()).done) {
                ao.next = 96;
                break;
              }
              if (ah = ag.value, console.log("任务：".concat(ah.itemName)), 2 != ah.status) {
                ao.next = 74;
                break;
              }
              console.log("任务已完成");
              ao.next = 94;
              break;
            case 74:
              if (1 != ah.status) {
                ao.next = 82;
                break;
              }
              ai = Date.now();
              ao.next = 78;
              return T("/web/task/reward?timestamp=".concat(ai, "&sign=").concat(md5("".concat(ai).concat(ah.itemId)), "&taskId=").concat(ah.itemId));
            case 78:
              aj = ao.sent;
              console.log("领取奖励：".concat(aj.message));
              ao.next = 94;
              break;
            case 82:
              ak = Date.now();
              ao.next = 85;
              return T("/web/task/dotask?timestamp=".concat(ak, "&sign=").concat(md5("".concat(ak).concat(ah.itemId)), "&taskId=").concat(ah.itemId, "&taskData=").concat(ah.completeStatus.times, "&needReward=1"));
            case 85:
              al = ao.sent;
              console.log("完成任务：".concat(al.message));
              ak = Date.now();
              ao.next = 90;
              return T("/web/task/reward?timestamp=".concat(ak, "&sign=").concat(md5("".concat(ak).concat(ah.itemId)), "&taskId=").concat(ah.itemId));
            case 90:
              am = ao.sent;
              console.log("领取奖励：".concat(am.message));
              ao.next = 94;
              return $.wait(1000 * ah.completeStatus.times);
            case 94:
              ao.next = 67;
              break;
            case 96:
              ao.next = 101;
              break;
            case 98:
              ao.prev = 98;
              ao.t1 = ao.catch(65);
              af.e(ao.t1);
            case 101:
              ao.prev = 101;
              af.f();
              return ao.finish(101);
            case 104:
              ao.next = 106;
              return R("/v3/user/?needSignDetail=true");
            case 106:
              an = ao.sent;
              console.log("拥有：".concat(an.result.usablePoints, "积分"));
              J += "用户：".concat(F, " 拥有：").concat(an.result.usablePoints, "积分\n");
              ao.next = 114;
              break;
            case 111:
              ao.prev = 111;
              ao.t2 = ao.catch(5);
              console.log(ao.t2);
            case 114:
              ao.next = 3;
              break;
            case 116:
              ao.next = 121;
              break;
            case 118:
              ao.prev = 118;
              ao.t3 = ao.catch(1);
              a1.e(ao.t3);
            case 121:
              ao.prev = 121;
              a1.f();
              return ao.finish(121);
            case 124:
              if (!J) {
                ao.next = 127;
                break;
              }
              ao.next = 127;
              return X(J);
            case 127:
            case "end":
              return ao.stop();
          }
        }
      }, Z, null, [[1, 118, 121, 124], [5, 111], [22, 55, 58, 61], [65, 98, 101, 104]]);
    }));
    return L.apply(this, arguments);
  }
  function M() {
    return N.apply(this, arguments);
  }
  function N() {
    N = D(B().mark(function a0() {
      var a1, a2, a3, a4, a5, a6, a7, a8;
      return B().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              if (a1 = $request.url, a2 = a1.match(/app=wxmp&source=miniProgram&mediauid=[^&]+&devidmd5=[^&]+&utm_source=[^&]+&spm=[^&]+&brand=[^&]+&os=[^&]+&model=[^&]+/), a3 = a2[0], a4 = $request.headers.ppu || $request.headers.PPU, a5 = $.toObj($response.body), a6 = a5.result.userId, a6 && a4) {
                a9.next = 8;
                break;
              }
              return a9.abrupt("return");
            case 8:
              var ac = {};
              ac.userId = a6;
              ac.ppu = a4;
              ac.signParam = a3;
              if (a7 = ac, a8 = E.findIndex(function (ad) {
                return ad.userId == a7.userId;
              }), -1 === a8) {
                a9.next = 21;
                break;
              }
              if (E[a8].ppu != a7.ppu || E[a8].signParam != a7.signParam) {
                a9.next = 15;
                break;
              }
              return a9.abrupt("return");
            case 15:
              E[a8].ppu = a4;
              E[a8].signParam = a3;
              console.log(a7.ppu);
              $.msg($.name, "🎉用户".concat(a7.userId, "更新cookie成功!"), "");
            case 19:
              a9.next = 24;
              break;
            case 21:
              E.push(a7);
              console.log(a7.ppu);
              $.msg($.name, "🎉新增用户".concat(a7.userId, "成功!"), "");
            case 24:
              $.setjson(E, "TongCheng");
            case 25:
            case "end":
              return a9.stop();
          }
        }
      }, a0);
    }));
    return N.apply(this, arguments);
  }
  function O(Z) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = D(B().mark(function a0(a1) {
      var a2,
        a3 = arguments;
      return B().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              a2 = a3.length > 1 && void 0 !== a3[1] ? a3[1] : "";
              return a4.abrupt("return", new Promise(function (a6) {
                var a8 = {
                  accept: "application/json, text/plain, */*",
                  "sec-fetch-site": "same-origin",
                  "accept-encoding": "gzip, deflate, br",
                  "accept-language": "zh-CN,zh-Hans;q=0.9",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  origin: "https://rightsplatform.58.com",
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                  "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 WUBA/13.26.6",
                  ppu: G,
                  cookie: ""
                };
                var a9 = {
                  url: "https://rightsplatform.58.com".concat(a1),
                  headers: a8,
                  body: a2
                };
                $.post(a9, function () {
                  var aa = D(B().mark(function ab(ac, ad, ae) {
                    return B().wrap(function (ag) {
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
            case 2:
            case "end":
              return a4.stop();
          }
        }
      }, a0);
    }));
    return Q.apply(this, arguments);
  }
  function R(Z) {
    return S.apply(this, arguments);
  }
  function S() {
    S = D(B().mark(function a0(a1) {
      return B().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a4) {
                var a6 = {
                  url: "https://rightsplatform.58.com".concat(a1),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    "sec-fetch-site": "same-origin",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    origin: "https://rightsplatform.58.com",
                    "content-type": "application/json",
                    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 WUBA/13.26.6",
                    ppu: G,
                    cookie: ""
                  }
                };
                $.get(a6, function () {
                  var a8 = D(B().mark(function a9(aa, ab, ac) {
                    return B().wrap(function (ae) {
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
                            a4(JSON.parse(ac));
                          case 9:
                            ae.next = 14;
                            break;
                          case 11:
                            ae.prev = 11;
                            ae.t0 = ae.catch(0);
                            $.logErr(ae.t0, ab);
                          case 14:
                            ae.prev = 14;
                            a4();
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
              return a2.stop();
          }
        }
      }, a0);
    }));
    return S.apply(this, arguments);
  }
  function T(Z) {
    return U.apply(this, arguments);
  }
  function U() {
    U = D(B().mark(function a0(a1) {
      return B().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              return a3.abrupt("return", new Promise(function (a5) {
                var a7 = {
                  url: "https://taskframe.58.com".concat(a1),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    "sec-fetch-site": "same-origin",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    origin: "https://rightsplatform.58.com",
                    "content-type": "application/json",
                    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 WUBA/13.26.6",
                    ppu: G,
                    cookie: ""
                  }
                };
                $.get(a7, function () {
                  var a9 = D(B().mark(function aa(ab, ac, ad) {
                    return B().wrap(function (ae) {
                      for (;;) {
                        switch (ae.prev = ae.next) {
                          case 0:
                            if (ae.prev = 0, !ab) {
                              ae.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ab)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ae.next = 9;
                            break;
                          case 6:
                            ae.next = 8;
                            return $.wait(2000);
                          case 8:
                            a5(JSON.parse(ad));
                          case 9:
                            ae.next = 14;
                            break;
                          case 11:
                            ae.prev = 11;
                            ae.t0 = ae.catch(0);
                            $.logErr(ae.t0, ac);
                          case 14:
                            ae.prev = 14;
                            a5();
                            return ae.finish(14);
                          case 17:
                          case "end":
                            return ae.stop();
                        }
                      }
                    }, aa, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ab, ac, ad) {
                    return a9.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a3.stop();
          }
        }
      }, a0);
    }));
    return U.apply(this, arguments);
  }
  function V() {
    return W.apply(this, arguments);
  }
  function W() {
    W = D(B().mark(function a0() {
      return B().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              return a1.abrupt("return", new Promise(function (a3) {
                var a4 = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(a4, function () {
                  var a6 = D(B().mark(function a7(a8, a9, aa) {
                    return B().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            try {
                              a8 ? (console.log("".concat(JSON.stringify(a8))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(aa).notice);
                            } catch (ae) {
                              $.logErr(ae, a9);
                            } finally {
                              a3();
                            }
                          case 1:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a7);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a1.stop();
          }
        }
      }, a0);
    }));
    return W.apply(this, arguments);
  }
  function X(Z) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = D(B().mark(function a1(a2) {
      return B().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              if (!$.isNode()) {
                a3.next = 5;
                break;
              }
              a3.next = 3;
              return notify.sendNotify($.name, a2);
            case 3:
              a3.next = 6;
              break;
            case 5:
              $.msg($.name, "", a2);
            case 6:
            case "end":
              return a3.stop();
          }
        }
      }, a1);
    }));
    return Y.apply(this, arguments);
  }
  D(B().mark(function Z() {
    return B().wrap(function (a0) {
      for (;;) {
        switch (a0.prev = a0.next) {
          case 0:
            if ("undefined" == typeof $request || "OPTIONS" == $request.method) {
              a0.next = 5;
              break;
            }
            a0.next = 3;
            return M();
          case 3:
            a0.next = 9;
            break;
          case 5:
            a0.next = 7;
            return V();
          case 7:
            a0.next = 9;
            return K();
          case 9:
          case "end":
            return a0.stop();
        }
      }
    }, Z);
  }))().catch(function (a0) {
    $.log(a0);
  }).finally(function () {
    $.done({});
  });
})();
function md5(r) {
  return rstr2hex(rstr_md5(str2rstr_utf8(r)));
}
function b64_md5(r) {
  return rstr2b64(rstr_md5(str2rstr_utf8(r)));
}
function any_md5(r, t) {
  return rstr2any(rstr_md5(str2rstr_utf8(r)), t);
}
function hex_hmac_md5(r, t) {
  return rstr2hex(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)));
}
function b64_hmac_md5(r, t) {
  return rstr2b64(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)));
}
function any_hmac_md5(r, t, d) {
  return rstr2any(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)), d);
}
function md5_vm_test() {
  return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc").toLowerCase();
}
function rstr_md5(r) {
  return binl2rstr(binl_md5(rstr2binl(r), 8 * r.length));
}
function rstr_hmac_md5(r, t) {
  var d = rstr2binl(r);
  d.length > 16 && (d = binl_md5(d, 8 * r.length));
  for (var n = Array(16), _ = Array(16), m = 0; m < 16; m++) {
    n[m] = 909522486 ^ d[m];
    _[m] = 1549556828 ^ d[m];
  }
  var f = binl_md5(n.concat(rstr2binl(t)), 512 + 8 * t.length);
  return binl2rstr(binl_md5(_.concat(f), 640));
}
function rstr2hex(r) {
  for (var t, d = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", _ = 0; _ < r.length; _++) {
    t = r.charCodeAt(_);
    n += d.charAt(t >>> 4 & 15) + d.charAt(15 & t);
  }
  return n;
}
function rstr2b64(r) {
  for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = "", n = r.length, _ = 0; _ < n; _ += 3) {
    for (var m = r.charCodeAt(_) << 16 | (_ + 1 < n ? r.charCodeAt(_ + 1) << 8 : 0) | (_ + 2 < n ? r.charCodeAt(_ + 2) : 0), f = 0; f < 4; f++) {
      8 * _ + 6 * f > 8 * r.length ? d += b64pad : d += t.charAt(m >>> 6 * (3 - f) & 63);
    }
  }
  return d;
}
function rstr2any(r, t) {
  var d,
    n,
    _,
    m,
    f,
    h = t.length,
    e = Array(Math.ceil(r.length / 2));
  for (d = 0; d < e.length; d++) {
    e[d] = r.charCodeAt(2 * d) << 8 | r.charCodeAt(2 * d + 1);
  }
  var a = Math.ceil(8 * r.length / (Math.log(t.length) / Math.log(2))),
    i = Array(a);
  for (n = 0; n < a; n++) {
    for (f = Array(), m = 0, d = 0; d < e.length; d++) {
      m = (m << 16) + e[d];
      _ = Math.floor(m / h);
      m -= _ * h;
      (f.length > 0 || _ > 0) && (f[f.length] = _);
    }
    i[n] = m;
    e = f;
  }
  var o = "";
  for (d = i.length - 1; d >= 0; d--) {
    o += t.charAt(i[d]);
  }
  return o;
}
function str2rstr_utf8(r) {
  for (var t, d, n = "", _ = -1; ++_ < r.length;) {
    t = r.charCodeAt(_);
    d = _ + 1 < r.length ? r.charCodeAt(_ + 1) : 0;
    55296 <= t && t <= 56319 && 56320 <= d && d <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & d), _++);
    t <= 127 ? n += String.fromCharCode(t) : t <= 2047 ? n += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? n += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (n += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
  }
  return n;
}
function str2rstr_utf16le(r) {
  for (var t = "", d = 0; d < r.length; d++) {
    t += String.fromCharCode(255 & r.charCodeAt(d), r.charCodeAt(d) >>> 8 & 255);
  }
  return t;
}
function str2rstr_utf16be(r) {
  for (var t = "", d = 0; d < r.length; d++) {
    t += String.fromCharCode(r.charCodeAt(d) >>> 8 & 255, 255 & r.charCodeAt(d));
  }
  return t;
}
function rstr2binl(r) {
  for (var t = Array(r.length >> 2), d = 0; d < t.length; d++) {
    t[d] = 0;
  }
  for (d = 0; d < 8 * r.length; d += 8) {
    t[d >> 5] |= (255 & r.charCodeAt(d / 8)) << d % 32;
  }
  return t;
}
function binl2rstr(r) {
  for (var t = "", d = 0; d < 32 * r.length; d += 8) {
    t += String.fromCharCode(r[d >> 5] >>> d % 32 & 255);
  }
  return t;
}
function binl_md5(r, t) {
  r[t >> 5] |= 128 << t % 32;
  r[14 + (t + 64 >>> 9 << 4)] = t;
  for (var d = 1732584193, n = -271733879, _ = -1732584194, m = 271733878, f = 0; f < r.length; f += 16) {
    var h = d,
      e = n,
      a = _,
      i = m;
    d = md5_ff(d, n, _, m, r[f + 0], 7, -680876936);
    m = md5_ff(m, d, n, _, r[f + 1], 12, -389564586);
    _ = md5_ff(_, m, d, n, r[f + 2], 17, 606105819);
    n = md5_ff(n, _, m, d, r[f + 3], 22, -1044525330);
    d = md5_ff(d, n, _, m, r[f + 4], 7, -176418897);
    m = md5_ff(m, d, n, _, r[f + 5], 12, 1200080426);
    _ = md5_ff(_, m, d, n, r[f + 6], 17, -1473231341);
    n = md5_ff(n, _, m, d, r[f + 7], 22, -45705983);
    d = md5_ff(d, n, _, m, r[f + 8], 7, 1770035416);
    m = md5_ff(m, d, n, _, r[f + 9], 12, -1958414417);
    _ = md5_ff(_, m, d, n, r[f + 10], 17, -42063);
    n = md5_ff(n, _, m, d, r[f + 11], 22, -1990404162);
    d = md5_ff(d, n, _, m, r[f + 12], 7, 1804603682);
    m = md5_ff(m, d, n, _, r[f + 13], 12, -40341101);
    _ = md5_ff(_, m, d, n, r[f + 14], 17, -1502002290);
    n = md5_ff(n, _, m, d, r[f + 15], 22, 1236535329);
    d = md5_gg(d, n, _, m, r[f + 1], 5, -165796510);
    m = md5_gg(m, d, n, _, r[f + 6], 9, -1069501632);
    _ = md5_gg(_, m, d, n, r[f + 11], 14, 643717713);
    n = md5_gg(n, _, m, d, r[f + 0], 20, -373897302);
    d = md5_gg(d, n, _, m, r[f + 5], 5, -701558691);
    m = md5_gg(m, d, n, _, r[f + 10], 9, 38016083);
    _ = md5_gg(_, m, d, n, r[f + 15], 14, -660478335);
    n = md5_gg(n, _, m, d, r[f + 4], 20, -405537848);
    d = md5_gg(d, n, _, m, r[f + 9], 5, 568446438);
    m = md5_gg(m, d, n, _, r[f + 14], 9, -1019803690);
    _ = md5_gg(_, m, d, n, r[f + 3], 14, -187363961);
    n = md5_gg(n, _, m, d, r[f + 8], 20, 1163531501);
    d = md5_gg(d, n, _, m, r[f + 13], 5, -1444681467);
    m = md5_gg(m, d, n, _, r[f + 2], 9, -51403784);
    _ = md5_gg(_, m, d, n, r[f + 7], 14, 1735328473);
    n = md5_gg(n, _, m, d, r[f + 12], 20, -1926607734);
    d = md5_hh(d, n, _, m, r[f + 5], 4, -378558);
    m = md5_hh(m, d, n, _, r[f + 8], 11, -2022574463);
    _ = md5_hh(_, m, d, n, r[f + 11], 16, 1839030562);
    n = md5_hh(n, _, m, d, r[f + 14], 23, -35309556);
    d = md5_hh(d, n, _, m, r[f + 1], 4, -1530992060);
    m = md5_hh(m, d, n, _, r[f + 4], 11, 1272893353);
    _ = md5_hh(_, m, d, n, r[f + 7], 16, -155497632);
    n = md5_hh(n, _, m, d, r[f + 10], 23, -1094730640);
    d = md5_hh(d, n, _, m, r[f + 13], 4, 681279174);
    m = md5_hh(m, d, n, _, r[f + 0], 11, -358537222);
    _ = md5_hh(_, m, d, n, r[f + 3], 16, -722521979);
    n = md5_hh(n, _, m, d, r[f + 6], 23, 76029189);
    d = md5_hh(d, n, _, m, r[f + 9], 4, -640364487);
    m = md5_hh(m, d, n, _, r[f + 12], 11, -421815835);
    _ = md5_hh(_, m, d, n, r[f + 15], 16, 530742520);
    n = md5_hh(n, _, m, d, r[f + 2], 23, -995338651);
    d = md5_ii(d, n, _, m, r[f + 0], 6, -198630844);
    m = md5_ii(m, d, n, _, r[f + 7], 10, 1126891415);
    _ = md5_ii(_, m, d, n, r[f + 14], 15, -1416354905);
    n = md5_ii(n, _, m, d, r[f + 5], 21, -57434055);
    d = md5_ii(d, n, _, m, r[f + 12], 6, 1700485571);
    m = md5_ii(m, d, n, _, r[f + 3], 10, -1894986606);
    _ = md5_ii(_, m, d, n, r[f + 10], 15, -1051523);
    n = md5_ii(n, _, m, d, r[f + 1], 21, -2054922799);
    d = md5_ii(d, n, _, m, r[f + 8], 6, 1873313359);
    m = md5_ii(m, d, n, _, r[f + 15], 10, -30611744);
    _ = md5_ii(_, m, d, n, r[f + 6], 15, -1560198380);
    n = md5_ii(n, _, m, d, r[f + 13], 21, 1309151649);
    d = md5_ii(d, n, _, m, r[f + 4], 6, -145523070);
    m = md5_ii(m, d, n, _, r[f + 11], 10, -1120210379);
    _ = md5_ii(_, m, d, n, r[f + 2], 15, 718787259);
    n = md5_ii(n, _, m, d, r[f + 9], 21, -343485551);
    d = safe_add(d, h);
    n = safe_add(n, e);
    _ = safe_add(_, a);
    m = safe_add(m, i);
  }
  return Array(d, n, _, m);
}
function md5_cmn(r, t, d, n, _, m) {
  return safe_add(bit_rol(safe_add(safe_add(t, r), safe_add(n, m)), _), d);
}
function md5_ff(r, t, d, n, _, m, f) {
  return md5_cmn(t & d | ~t & n, r, t, _, m, f);
}
function md5_gg(r, t, d, n, _, m, f) {
  return md5_cmn(t & n | d & ~n, r, t, _, m, f);
}
function md5_hh(r, t, d, n, _, m, f) {
  return md5_cmn(t ^ d ^ n, r, t, _, m, f);
}
function md5_ii(r, t, d, n, _, m, f) {
  return md5_cmn(d ^ (t | ~n), r, t, _, m, f);
}
function safe_add(r, t) {
  var d = (65535 & r) + (65535 & t),
    n = (r >> 16) + (t >> 16) + (d >> 16);
  return n << 16 | 65535 & d;
}
function bit_rol(r, t) {
  return r << t | r >>> 32 - t;
}
var hexcase = 0,
  b64pad = "";
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