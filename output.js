//Wed Jul 23 2025 06:49:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("飞蚁回收");
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
    var a2 = Object.keys(Z);
    if (Object.getOwnPropertySymbols) {
      var a3 = Object.getOwnPropertySymbols(Z);
      a0 && (a3 = a3.filter(function (a4) {
        return Object.getOwnPropertyDescriptor(Z, a4).enumerable;
      }));
      a2.push.apply(a2, a3);
    }
    return a2;
  }
  function A(Z) {
    for (var a1 = 1; a1 < arguments.length; a1++) {
      var a2 = null != arguments[a1] ? arguments[a1] : {};
      a1 % 2 ? z(Object(a2), !0).forEach(function (a5) {
        B(Z, a5, a2[a5]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Z, Object.getOwnPropertyDescriptors(a2)) : z(Object(a2)).forEach(function (a5) {
        Object.defineProperty(Z, a5, Object.getOwnPropertyDescriptor(a2, a5));
      });
    }
    return Z;
  }
  function B(Z, a0, a1) {
    (a0 = function (a3) {
      var a5 = function (a7, a8) {
        if ("object" != q(a7) || !a7) {
          return a7;
        }
        var ab = a7[Symbol.toPrimitive];
        if (void 0 !== ab) {
          var ac = ab.call(a7, a8 || "default");
          if ("object" != q(ac)) {
            return ac;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === a8 ? String : Number)(a7);
      }(a3, "string");
      return "symbol" == q(a5) ? a5 : a5 + "";
    }(a0)) in Z ? Object.defineProperty(Z, a0, {
      value: a1,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : Z[a0] = a1;
    return Z;
  }
  function C(Z, a0) {
    var a2 = "undefined" != typeof Symbol && Z[Symbol.iterator] || Z["@@iterator"];
    if (!a2) {
      if (Array.isArray(Z) || (a2 = function (a9, aa) {
        if (a9) {
          if ("string" == typeof a9) {
            return D(a9, aa);
          }
          var ac = {}.toString.call(a9).slice(8, -1);
          "Object" === ac && a9.constructor && (ac = a9.constructor.name);
          return "Map" === ac || "Set" === ac ? Array.from(a9) : "Arguments" === ac || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ac) ? D(a9, aa) : void 0;
        }
      }(Z)) || a0 && Z && "number" == typeof Z.length) {
        a2 && (Z = a2);
        var a3 = 0,
          a4 = function () {};
        return {
          s: a4,
          n: function () {
            var ac = {
              done: !0
            };
            return a3 >= Z.length ? ac : {
              done: !1,
              value: Z[a3++]
            };
          },
          e: function (aa) {
            throw aa;
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
        var ab = a2.next();
        a6 = ab.done;
        return ab;
      },
      e: function (ab) {
        a7 = !0;
        a5 = ab;
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
  function D(Z, a0) {
    (null == a0 || a0 > Z.length) && (a0 = Z.length);
    for (var a1 = 0, a2 = Array(a0); a1 < a0; a1++) {
      a2[a1] = Z[a1];
    }
    return a2;
  }
  function F() {
    'use strict';

    F = function () {
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
      a9 = function (ay, az, aA) {
        return ay[az] = aA;
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
      ["next", "throw", "return"].forEach(function (aC) {
        a9(az, aC, function (aF) {
          return this._invoke(aC, aF);
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
          var aG = {
            value: a0,
            done: !0
          };
          return aG;
        }
        for (aB.method = aE, aB.arg = aF;;) {
          var aH = aB.delegate;
          if (aH) {
            var aI = ar(aH, aB);
            if (aI) {
              if (aI === ag) {
                continue;
              }
              return aI;
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
          var aJ = ab(az, aA, aB);
          if ("normal" === aJ.type) {
            if (aD = aB.done ? af : ad, aJ.arg === ag) {
              continue;
            }
            var aK = {};
            aK.value = aJ.arg;
            aK.done = aB.done;
            return aK;
          }
          "throw" === aJ.type && (aD = af, aB.method = "throw", aB.arg = aJ.arg);
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
      var aB = {
        tryLoc: az[0]
      };
      var aC = aB;
      1 in az && (aC.catchLoc = az[1]);
      2 in az && (aC.finallyLoc = az[2], aC.afterLoc = az[3]);
      this.tryEntries.push(aC);
    }
    function at(az) {
      var aA = az.completion || {};
      aA.type = "normal";
      delete aA.arg;
      az.completion = aA;
    }
    function au(az) {
      var aB = {};
      aB.tryLoc = "root";
      this.tryEntries = [aB];
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
            aD = function aE() {
              for (; ++aC < az.length;) {
                if (a3.call(az, aC)) {
                  aE.value = az[aC];
                  aE.done = !1;
                  return aE;
                }
              }
              aE.value = a0;
              aE.done = !0;
              return aE;
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
      var aB = "function" == typeof az && az.constructor;
      return !!aB && (aB === ai || "GeneratorFunction" === (aB.displayName || aB.name));
    };
    a1.mark = function (az) {
      Object.setPrototypeOf ? Object.setPrototypeOf(az, aj) : (az.__proto__ = aj, a9(az, a8, "GeneratorFunction"));
      az.prototype = Object.create(an);
      return az;
    };
    a1.awrap = function (az) {
      var aA = {
        __await: az
      };
      return aA;
    };
    ao(ap.prototype);
    a9(ap.prototype, a7, function () {
      return this;
    });
    a1.AsyncIterator = ap;
    a1.async = function (az, aA, aB, aC, aD) {
      void 0 === aD && (aD = Promise);
      var aF = new ap(aa(az, aA, aB, aC), aD);
      return a1.isGeneratorFunction(aA) ? aF : aF.next().then(function (aH) {
        return aH.done ? aH.value : aF.next();
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
      var aA = Object(az),
        aB = [];
      for (var aC in aA) aB.push(aC);
      aB.reverse();
      return function aD() {
        for (; aB.length;) {
          var aF = aB.pop();
          if (aF in aA) {
            aD.value = aF;
            aD.done = !1;
            return aD;
          }
        }
        aD.done = !0;
        return aD;
      };
    };
    a1.values = av;
    au.prototype = {
      constructor: au,
      reset: function (az) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a0, this.done = !1, this.delegate = null, this.method = "next", this.arg = a0, this.tryEntries.forEach(at), !az) {
          for (var aB in this) "t" === aB.charAt(0) && a3.call(this, aB) && !isNaN(+aB.slice(1)) && (this[aB] = a0);
        }
      },
      stop: function () {
        this.done = !0;
        var az = this.tryEntries[0].completion;
        if ("throw" === az.type) {
          throw az.arg;
        }
        return this.rval;
      },
      dispatchException: function (az) {
        if (this.done) {
          throw az;
        }
        var aB = this;
        function aI(aJ, aK) {
          aE.type = "throw";
          aE.arg = az;
          aB.next = aJ;
          aK && (aB.method = "next", aB.arg = a0);
          return !!aK;
        }
        for (var aC = this.tryEntries.length - 1; aC >= 0; --aC) {
          var aD = this.tryEntries[aC],
            aE = aD.completion;
          if ("root" === aD.tryLoc) {
            return aI("end");
          }
          if (aD.tryLoc <= this.prev) {
            var aF = a3.call(aD, "catchLoc"),
              aG = a3.call(aD, "finallyLoc");
            if (aF && aG) {
              if (this.prev < aD.catchLoc) {
                return aI(aD.catchLoc, !0);
              }
              if (this.prev < aD.finallyLoc) {
                return aI(aD.finallyLoc);
              }
            } else {
              if (aF) {
                if (this.prev < aD.catchLoc) {
                  return aI(aD.catchLoc, !0);
                }
              } else {
                if (!aG) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aD.finallyLoc) {
                  return aI(aD.finallyLoc);
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
  function G(Z, a0, a1, a2, a3, a4, a5) {
    try {
      var a8 = Z[a4](a5),
        a9 = a8.value;
    } catch (ac) {
      return void a1(ac);
    }
    a8.done ? a0(a9) : Promise.resolve(a9).then(a2, a3);
  }
  function H(Z) {
    return function () {
      var a1 = this,
        a2 = arguments;
      return new Promise(function (a3, a4) {
        var a6 = Z.apply(a1, a2);
        function a7(a9) {
          G(a6, a3, a4, a7, a8, "next", a9);
        }
        function a8(a9) {
          G(a6, a3, a4, a7, a8, "throw", a9);
        }
        a7(void 0);
      });
    };
  }
  var I = ($.isNode() ? process.env.FYHS ? JSON.parse(process.env.FYHS) : void 0 : $.getjson("FYHS")) || [],
    J = "",
    K = "",
    L = "";
  function M() {
    return N.apply(this, arguments);
  }
  function N() {
    N = H(F().mark(function Z() {
      var a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad;
      return F().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              a1 = C(I);
              ae.prev = 1;
              a1.s();
            case 3:
              if ((a2 = a1.n()).done) {
                ae.next = 48;
                break;
              }
              a3 = a2.value;
              ae.prev = 5;
              J = a3.phone;
              K = a3.token;
              console.log("用户：".concat(J, "开始任务"));
              ae.next = 11;
              return T("/sign/new/do");
            case 11:
              a6 = ae.sent;
              console.log("签到：".concat(a6.message));
              a7 = 1;
            case 14:
              if (!(a7 <= 3)) {
                ae.next = 24;
                break;
              }
              var af = {};
              af.steps = 1720;
              ae.next = 17;
              return T("/step/exchange", af);
            case 17:
              if (a8 = ae.sent, console.log("第".concat(a7, "次步数兑换：").concat(a8.message)), 400 != a8.code) {
                ae.next = 21;
                break;
              }
              return ae.abrupt("break", 24);
            case 21:
              a7++;
              ae.next = 14;
              break;
            case 24:
              ae.next = 26;
              return T("/active/pool/sign");
            case 26:
              a9 = ae.sent;
              console.log("打卡：".concat(a9.message));
              ae.next = 30;
              return T("/active/pool/bet");
            case 30:
              aa = ae.sent;
              console.log("投注：".concat(aa.message));
              ae.next = 34;
              return R("/user/new/beans/info?type=1&version=V2.00.01&platformKey=F2EE24892FBF66F0AFF8C0EB532A9394&mini_scene=1089&partner_ext_infos=");
            case 34:
              ab = ae.sent;
              ae.next = 37;
              return R("/user/new/beans/info?type=2&version=V2.00.01&platformKey=F2EE24892FBF66F0AFF8C0EB532A9394&mini_scene=1089&partner_ext_infos=");
            case 37:
              ac = ae.sent;
              ad = (null === (a4 = ab.data) || void 0 === a4 ? void 0 : a4.totalCount) - 0 - (null === (a5 = ac.data) || void 0 === a5 ? void 0 : a5.totalCount);
              console.log("拥有：".concat(ad, "积分"));
              L += "用户：".concat(J, " 拥有：").concat(ad, "积分\n");
              ae.next = 46;
              break;
            case 43:
              ae.prev = 43;
              ae.t0 = ae.catch(5);
              console.log(ae.t0);
            case 46:
              ae.next = 3;
              break;
            case 48:
              ae.next = 53;
              break;
            case 50:
              ae.prev = 50;
              ae.t1 = ae.catch(1);
              a1.e(ae.t1);
            case 53:
              ae.prev = 53;
              a1.f();
              return ae.finish(53);
            case 56:
              if (!L) {
                ae.next = 59;
                break;
              }
              ae.next = 59;
              return X(L);
            case 59:
            case "end":
              return ae.stop();
          }
        }
      }, Z, null, [[1, 50, 53, 56], [5, 43]]);
    }));
    return N.apply(this, arguments);
  }
  function P() {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = H(F().mark(function Z() {
      var a1, a2, a3, a4, a5, a6, a7;
      return F().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (a3 = $.toObj($response.body), a3) {
                a8.next = 3;
                break;
              }
              return a8.abrupt("return");
            case 3:
              if (a4 = null == a3 || null === (a1 = a3.data) || void 0 === a1 || null === (a1 = a1.user) || void 0 === a1 ? void 0 : a1.userPhone, a5 = "bearer " + (null == a3 || null === (a2 = a3.data) || void 0 === a2 ? void 0 : a2.token), a4 && a5) {
                a8.next = 7;
                break;
              }
              return a8.abrupt("return");
            case 7:
              var a9 = {};
              a9.phone = a4;
              a9.token = a5;
              if (a6 = a9, a7 = I.findIndex(function (aa) {
                return aa.phone == a6.phone;
              }), -1 === a7) {
                a8.next = 19;
                break;
              }
              if (I[a7].token != a6.token) {
                a8.next = 14;
                break;
              }
              return a8.abrupt("return");
            case 14:
              I[a7].token = a5;
              console.log(a6.token);
              $.msg($.name, "🎉用户".concat(a6.phone, "更新token成功!"), "");
            case 17:
              a8.next = 22;
              break;
            case 19:
              I.push(a6);
              console.log(a6.token);
              $.msg($.name, "🎉新增用户".concat(a6.phone, "成功!"), "");
            case 22:
              $.setjson(I, "FYHS");
            case 23:
            case "end":
              return a8.stop();
          }
        }
      }, Z);
    }));
    return Q.apply(this, arguments);
  }
  function R(Z) {
    return S.apply(this, arguments);
  }
  function S() {
    S = H(F().mark(function a0(a1) {
      return F().wrap(function (a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a4) {
                var a6 = {
                  url: "https://openapp.fmy90.com".concat(a1),
                  headers: {
                    "Accept-Encoding": "gzip,compress,br,deflate",
                    Connection: "keep-alive",
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.52(0x18003421) NetType/4G Language/zh_CN",
                    Authorization: K
                  }
                };
                $.get(a6, function () {
                  var a8 = H(F().mark(function a9(aa, ab, ac) {
                    return F().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            if (ad.prev = 0, !aa) {
                              ad.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aa)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ad.next = 9;
                            break;
                          case 6:
                            ad.next = 8;
                            return $.wait(2000);
                          case 8:
                            a4(JSON.parse(ac));
                          case 9:
                            ad.next = 14;
                            break;
                          case 11:
                            ad.prev = 11;
                            ad.t0 = ad.catch(0);
                            $.logErr(ad.t0, ab);
                          case 14:
                            ad.prev = 14;
                            a4();
                            return ad.finish(14);
                          case 17:
                          case "end":
                            return ad.stop();
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
    U = H(F().mark(function a0(a1) {
      var a2,
        a3 = arguments;
      return F().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              a2 = a3.length > 1 && void 0 !== a3[1] ? a3[1] : {};
              return a4.abrupt("return", new Promise(function (a6) {
                var a8 = {
                  "Accept-Encoding": "gzip,compress,br,deflate",
                  Connection: "keep-alive",
                  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.52(0x18003421) NetType/4G Language/zh_CN",
                  Authorization: K,
                  "content-type": "application/json;charset=UTF-8"
                };
                var a9 = {
                  version: "V2.00.01",
                  platformKey: "F2EE24892FBF66F0AFF8C0EB532A9394",
                  mini_scene: 1089,
                  partner_ext_infos: ""
                };
                var aa = {
                  url: "https://openapp.fmy90.com".concat(a1),
                  headers: a8,
                  body: JSON.stringify(A(a9, a2))
                };
                $.post(aa, function () {
                  var ab = H(F().mark(function ac(ad, ae, af) {
                    return F().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !ad) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ad)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ah.next = 9;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            a6(JSON.parse(af));
                          case 9:
                            ah.next = 14;
                            break;
                          case 11:
                            ah.prev = 11;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, ae);
                          case 14:
                            ah.prev = 14;
                            a6();
                            return ah.finish(14);
                          case 17:
                          case "end":
                            return ah.stop();
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
              return a4.stop();
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
    W = H(F().mark(function a0() {
      return F().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              return a1.abrupt("return", new Promise(function (a3) {
                var a4 = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(a4, function () {
                  var a6 = H(F().mark(function a7(a8, a9, aa) {
                    return F().wrap(function (ab) {
                      for (;;) {
                        switch (ab.prev = ab.next) {
                          case 0:
                            try {
                              a8 ? (console.log("".concat(JSON.stringify(a8))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(aa).notice);
                            } catch (ac) {
                              $.logErr(ac, a9);
                            } finally {
                              a3();
                            }
                          case 1:
                          case "end":
                            return ab.stop();
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
    Y = H(F().mark(function a1(a2) {
      return F().wrap(function (a3) {
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
  H(F().mark(function Z() {
    return F().wrap(function (a1) {
      for (;;) {
        switch (a1.prev = a1.next) {
          case 0:
            if ("undefined" == typeof $request || "OPTIONS" == $request.method) {
              a1.next = 5;
              break;
            }
            a1.next = 3;
            return P();
          case 3:
            a1.next = 9;
            break;
          case 5:
            a1.next = 7;
            return V();
          case 7:
            a1.next = 9;
            return M();
          case 9:
          case "end":
            return a1.stop();
        }
      }
    }, Z);
  }))().catch(function (a0) {
    $.log(a0);
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