//Tue Jul 01 2025 10:24:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("聚赏圈");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function j(P) {
    j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (R) {
      return typeof R;
    } : function (R) {
      return R && "function" == typeof Symbol && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
    };
    return j(P);
  }
  function k(P, Q) {
    var S = "undefined" != typeof Symbol && P[Symbol.iterator] || P["@@iterator"];
    if (!S) {
      if (Array.isArray(P) || (S = function (a0, a1) {
        if (a0) {
          if ("string" == typeof a0) {
            return q(a0, a1);
          }
          var a2 = {}.toString.call(a0).slice(8, -1);
          "Object" === a2 && a0.constructor && (a2 = a0.constructor.name);
          return "Map" === a2 || "Set" === a2 ? Array.from(a0) : "Arguments" === a2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a2) ? q(a0, a1) : void 0;
        }
      }(P)) || Q && P && "number" == typeof P.length) {
        S && (P = S);
        var T = 0,
          U = function () {};
        return {
          s: U,
          n: function () {
            var a1 = {
              done: !0
            };
            return T >= P.length ? a1 : {
              done: !1,
              value: P[T++]
            };
          },
          e: function (a0) {
            throw a0;
          },
          f: U
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var V,
      W = !0,
      X = !1;
    return {
      s: function () {
        S = S.call(P);
      },
      n: function () {
        var a2 = S.next();
        W = a2.done;
        return a2;
      },
      e: function (a1) {
        X = !0;
        V = a1;
      },
      f: function () {
        try {
          W || null == S.return || S.return();
        } finally {
          if (X) {
            throw V;
          }
        }
      }
    };
  }
  function q(P, Q) {
    (null == Q || Q > P.length) && (Q = P.length);
    for (var S = 0, T = Array(Q); S < Q; S++) {
      T[S] = P[S];
    }
    return T;
  }
  function x() {
    'use strict';

    x = function () {
      return T;
    };
    var R,
      T = {},
      U = Object.prototype,
      V = U.hasOwnProperty,
      W = Object.defineProperty || function (ao, ap, aq) {
        ao[ap] = aq.value;
      },
      X = "function" == typeof Symbol ? Symbol : {},
      Y = X.iterator || "@@iterator",
      Z = X.asyncIterator || "@@asyncIterator",
      a0 = X.toStringTag || "@@toStringTag";
    function a1(ao, ap, aq) {
      var ar = {
        value: aq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(ao, ap, ar);
      return ao[ap];
    }
    try {
      a1({}, "");
    } catch (ap) {
      a1 = function (aq, ar, as) {
        return aq[ar] = as;
      };
    }
    function a2(ar, as, at, au) {
      var av = as && as.prototype instanceof a9 ? as : a9,
        aw = Object.create(av.prototype),
        ax = new am(au || []);
      W(aw, "_invoke", {
        value: ai(ar, at, ax)
      });
      return aw;
    }
    function a3(ar, as, at) {
      try {
        return {
          type: "normal",
          arg: ar.call(as, at)
        };
      } catch (ay) {
        var av = {
          type: "throw",
          arg: ay
        };
        return av;
      }
    }
    T.wrap = a2;
    var a4 = "suspendedStart",
      a5 = "suspendedYield",
      a6 = "executing",
      a7 = "completed",
      a8 = {};
    function a9() {}
    function aa() {}
    function ab() {}
    var ac = {};
    a1(ac, Y, function () {
      return this;
    });
    var ad = Object.getPrototypeOf,
      ae = ad && ad(ad(an([])));
    ae && ae !== U && V.call(ae, Y) && (ac = ae);
    ab.prototype = a9.prototype = Object.create(ac);
    var af = ab.prototype;
    function ag(ar) {
      ["next", "throw", "return"].forEach(function (au) {
        a1(ar, au, function (ax) {
          return this._invoke(au, ax);
        });
      });
    }
    function ah(ar, as) {
      function aw(ax, ay, az, aA) {
        var aC = a3(ar[ax], ar, ay);
        if ("throw" !== aC.type) {
          var aD = aC.arg,
            aE = aD.value;
          return aE && "object" == j(aE) && V.call(aE, "__await") ? as.resolve(aE.__await).then(function (aF) {
            aw("next", aF, az, aA);
          }, function (aF) {
            aw("throw", aF, az, aA);
          }) : as.resolve(aE).then(function (aF) {
            aD.value = aF;
            az(aD);
          }, function (aF) {
            return aw("throw", aF, az, aA);
          });
        }
        aA(aC.arg);
      }
      var au;
      W(this, "_invoke", {
        value: function (ax, ay) {
          function aA() {
            return new as(function (aD, aE) {
              aw(ax, ay, aD, aE);
            });
          }
          return au = au ? au.then(aA, aA) : aA();
        }
      });
    }
    function ai(ar, as, at) {
      var av = a4;
      return function (ax, ay) {
        if (av === a6) {
          throw Error("Generator is already running");
        }
        if (av === a7) {
          if ("throw" === ax) {
            throw ay;
          }
          var aA = {
            value: R,
            done: !0
          };
          return aA;
        }
        for (at.method = ax, at.arg = ay;;) {
          var aB = at.delegate;
          if (aB) {
            var aC = aj(aB, at);
            if (aC) {
              if (aC === a8) {
                continue;
              }
              return aC;
            }
          }
          if ("next" === at.method) {
            at.sent = at._sent = at.arg;
          } else {
            if ("throw" === at.method) {
              if (av === a4) {
                throw av = a7, at.arg;
              }
              at.dispatchException(at.arg);
            } else {
              "return" === at.method && at.abrupt("return", at.arg);
            }
          }
          av = a6;
          var aD = a3(ar, as, at);
          if ("normal" === aD.type) {
            if (av = at.done ? a7 : a5, aD.arg === a8) {
              continue;
            }
            var aE = {};
            aE.value = aD.arg;
            aE.done = at.done;
            return aE;
          }
          "throw" === aD.type && (av = a7, at.method = "throw", at.arg = aD.arg);
        }
      };
    }
    function aj(ar, as) {
      var at = as.method,
        au = ar.iterator[at];
      if (au === R) {
        as.delegate = null;
        "throw" === at && ar.iterator.return && (as.method = "return", as.arg = R, aj(ar, as), "throw" === as.method) || "return" !== at && (as.method = "throw", as.arg = new TypeError("The iterator does not provide a '" + at + "' method"));
        return a8;
      }
      var av = a3(au, ar.iterator, as.arg);
      if ("throw" === av.type) {
        as.method = "throw";
        as.arg = av.arg;
        as.delegate = null;
        return a8;
      }
      var aw = av.arg;
      return aw ? aw.done ? (as[ar.resultName] = aw.value, as.next = ar.nextLoc, "return" !== as.method && (as.method = "next", as.arg = R), as.delegate = null, a8) : aw : (as.method = "throw", as.arg = new TypeError("iterator result is not an object"), as.delegate = null, a8);
    }
    function ak(ar) {
      var as = {
        tryLoc: ar[0]
      };
      var at = as;
      1 in ar && (at.catchLoc = ar[1]);
      2 in ar && (at.finallyLoc = ar[2], at.afterLoc = ar[3]);
      this.tryEntries.push(at);
    }
    function al(ar) {
      var as = ar.completion || {};
      as.type = "normal";
      delete as.arg;
      ar.completion = as;
    }
    function am(ar) {
      var as = {
        tryLoc: "root"
      };
      this.tryEntries = [as];
      ar.forEach(ak, this);
      this.reset(!0);
    }
    function an(ar) {
      if (ar || "" === ar) {
        var at = ar[Y];
        if (at) {
          return at.call(ar);
        }
        if ("function" == typeof ar.next) {
          return ar;
        }
        if (!isNaN(ar.length)) {
          var au = -1,
            av = function ay() {
              for (; ++au < ar.length;) {
                if (V.call(ar, au)) {
                  ay.value = ar[au];
                  ay.done = !1;
                  return ay;
                }
              }
              ay.value = R;
              ay.done = !0;
              return ay;
            };
          return av.next = av;
        }
      }
      throw new TypeError(j(ar) + " is not iterable");
    }
    aa.prototype = ab;
    W(af, "constructor", {
      value: ab,
      configurable: !0
    });
    W(ab, "constructor", {
      value: aa,
      configurable: !0
    });
    aa.displayName = a1(ab, a0, "GeneratorFunction");
    T.isGeneratorFunction = function (ar) {
      var au = "function" == typeof ar && ar.constructor;
      return !!au && (au === aa || "GeneratorFunction" === (au.displayName || au.name));
    };
    T.mark = function (ar) {
      Object.setPrototypeOf ? Object.setPrototypeOf(ar, ab) : (ar.__proto__ = ab, a1(ar, a0, "GeneratorFunction"));
      ar.prototype = Object.create(af);
      return ar;
    };
    T.awrap = function (ar) {
      var as = {
        __await: ar
      };
      return as;
    };
    ag(ah.prototype);
    a1(ah.prototype, Z, function () {
      return this;
    });
    T.AsyncIterator = ah;
    T.async = function (ar, as, at, au, av) {
      void 0 === av && (av = Promise);
      var ay = new ah(a2(ar, as, at, au), av);
      return T.isGeneratorFunction(as) ? ay : ay.next().then(function (aA) {
        return aA.done ? aA.value : ay.next();
      });
    };
    ag(af);
    a1(af, a0, "Generator");
    a1(af, Y, function () {
      return this;
    });
    a1(af, "toString", function () {
      return "[object Generator]";
    });
    T.keys = function (ar) {
      var as = Object(ar),
        at = [];
      for (var au in as) at.push(au);
      at.reverse();
      return function aw() {
        for (; at.length;) {
          var ay = at.pop();
          if (ay in as) {
            aw.value = ay;
            aw.done = !1;
            return aw;
          }
        }
        aw.done = !0;
        return aw;
      };
    };
    T.values = an;
    am.prototype = {
      constructor: am,
      reset: function (ar) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = R, this.done = !1, this.delegate = null, this.method = "next", this.arg = R, this.tryEntries.forEach(al), !ar) {
          for (var as in this) "t" === as.charAt(0) && V.call(this, as) && !isNaN(+as.slice(1)) && (this[as] = R);
        }
      },
      stop: function () {
        this.done = !0;
        var ar = this.tryEntries[0].completion;
        if ("throw" === ar.type) {
          throw ar.arg;
        }
        return this.rval;
      },
      dispatchException: function (ar) {
        if (this.done) {
          throw ar;
        }
        var at = this;
        function aA(aB, aC) {
          aw.type = "throw";
          aw.arg = ar;
          at.next = aB;
          aC && (at.method = "next", at.arg = R);
          return !!aC;
        }
        for (var au = this.tryEntries.length - 1; au >= 0; --au) {
          var av = this.tryEntries[au],
            aw = av.completion;
          if ("root" === av.tryLoc) {
            return aA("end");
          }
          if (av.tryLoc <= this.prev) {
            var ax = V.call(av, "catchLoc"),
              ay = V.call(av, "finallyLoc");
            if (ax && ay) {
              if (this.prev < av.catchLoc) {
                return aA(av.catchLoc, !0);
              }
              if (this.prev < av.finallyLoc) {
                return aA(av.finallyLoc);
              }
            } else {
              if (ax) {
                if (this.prev < av.catchLoc) {
                  return aA(av.catchLoc, !0);
                }
              } else {
                if (!ay) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < av.finallyLoc) {
                  return aA(av.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (ar, as) {
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          var au = this.tryEntries[at];
          if (au.tryLoc <= this.prev && V.call(au, "finallyLoc") && this.prev < au.finallyLoc) {
            var av = au;
            break;
          }
        }
        av && ("break" === ar || "continue" === ar) && av.tryLoc <= as && as <= av.finallyLoc && (av = null);
        var aw = av ? av.completion : {};
        aw.type = ar;
        aw.arg = as;
        return av ? (this.method = "next", this.next = av.finallyLoc, a8) : this.complete(aw);
      },
      complete: function (ar, as) {
        if ("throw" === ar.type) {
          throw ar.arg;
        }
        "break" === ar.type || "continue" === ar.type ? this.next = ar.arg : "return" === ar.type ? (this.rval = this.arg = ar.arg, this.method = "return", this.next = "end") : "normal" === ar.type && as && (this.next = as);
        return a8;
      },
      finish: function (ar) {
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          var au = this.tryEntries[at];
          if (au.finallyLoc === ar) {
            this.complete(au.completion, au.afterLoc);
            al(au);
            return a8;
          }
        }
      },
      catch: function (ar) {
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          var au = this.tryEntries[at];
          if (au.tryLoc === ar) {
            var av = au.completion;
            if ("throw" === av.type) {
              var aw = av.arg;
              al(au);
            }
            return aw;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (ar, as, at) {
        this.delegate = {
          iterator: an(ar),
          resultName: as,
          nextLoc: at
        };
        "next" === this.method && (this.arg = R);
        return a8;
      }
    };
    return T;
  }
  function z(P, Q, R, S, T, U, V) {
    try {
      var X = P[U](V),
        Y = X.value;
    } catch (a1) {
      return void R(a1);
    }
    X.done ? Q(Y) : Promise.resolve(Y).then(S, T);
  }
  function A(P) {
    return function () {
      var R = this,
        S = arguments;
      return new Promise(function (T, U) {
        var W = P.apply(R, S);
        function X(Z) {
          z(W, T, U, X, Y, "next", Z);
        }
        function Y(Z) {
          z(W, T, U, X, Y, "throw", Z);
        }
        X(void 0);
      });
    };
  }
  var B = ($.isNode() ? process.env.JSQ ? JSON.parse(process.env.JSQ) : void 0 : $.getjson("JSQ")) || [],
    C = "",
    D = "",
    E = "";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = A(x().mark(function P() {
      var R, S, T, U, V, W, X, Y, Z, a0, a1, a2, a3;
      return x().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              R = k(B);
              a4.prev = 1;
              R.s();
            case 3:
              if ((S = R.n()).done) {
                a4.next = 55;
                break;
              }
              T = S.value;
              a4.prev = 5;
              C = T.phone;
              D = T.token;
              console.log("用户：".concat(C, "开始任务"));
              a4.next = 11;
              return J("/sign/sign", {
                time: (a6 = void 0, a7 = void 0, a8 = void 0, a9 = void 0, aa = void 0, a6 = new Date(), a7 = a6.getUTCFullYear(), a8 = a6.getUTCMonth(), a9 = a6.getUTCDate(), aa = Date.UTC(a7, a8, a9, -8, 0, 0), Math.floor(aa / 1000))
              });
            case 11:
              V = a4.sent;
              console.log("签到：".concat(V.msg));
              a4.next = 15;
              return J("/Advertising/getAdvertisNumber");
            case 15:
              W = a4.sent;
              console.log("剩余广告数量：" + W.data.num);
              X = 0;
            case 18:
              if (!(X < W.data.num)) {
                a4.next = 31;
                break;
              }
              Y = Math.floor(Date.now() / 1000);
              console.log("等待30秒");
              a4.next = 23;
              return $.wait(31000);
            case 23:
              Z = Math.floor(Date.now() / 1000);
              a4.next = 26;
              return J("/Advertising/keepAdvertisingGold", {
                start_time: Y,
                end_time: Z,
                sign: md5("".concat(Y, "n9sd830dv0>co/?cidsdid").concat(Z))
              });
            case 26:
              a0 = a4.sent;
              console.log("第" + (X + 1) + "次广告：" + a0.msg);
            case 28:
              X++;
              a4.next = 18;
              break;
            case 31:
              a4.next = 33;
              return J("/Yaoxin/goldConvert");
            case 33:
              a1 = a4.sent;
              console.log("积分兑换余额：".concat(null == a1 || null === (U = a1.data) || void 0 === U ? void 0 : U.msg));
              a4.next = 37;
              return J("/activity/getBonusPool");
            case 37:
              if (a2 = a4.sent, console.log("拥有：".concat(a2.data.gold_money, "积分 ").concat(a2.data.new_money, "元")), !(a2.data.new_money >= 1)) {
                a4.next = 47;
                break;
              }
              var a5 = {};
              a5.money = a2.data.new_money;
              a5.type = 2;
              a4.next = 42;
              return J("/Withdraw/applyForWithdrawal", a5);
            case 42:
              a3 = a4.sent;
              console.log("提现：".concat(a2.data.new_money, "元：").concat(a3.msg));
              a4.next = 46;
              return J("/activity/getBonusPool");
            case 46:
              a2 = a4.sent;
            case 47:
              E += "拥有：".concat(a2.data.gold_money, "积分 ").concat(a2.data.new_money, "元\n");
              a4.next = 53;
              break;
            case 50:
              a4.prev = 50;
              a4.t0 = a4.catch(5);
              console.log(a4.t0);
            case 53:
              a4.next = 3;
              break;
            case 55:
              a4.next = 60;
              break;
            case 57:
              a4.prev = 57;
              a4.t1 = a4.catch(1);
              R.e(a4.t1);
            case 60:
              a4.prev = 60;
              R.f();
              return a4.finish(60);
            case 63:
              if (!E) {
                a4.next = 66;
                break;
              }
              a4.next = 66;
              return N(E);
            case 66:
            case "end":
              return a4.stop();
          }
        }
        var a6, a7, a8, a9, aa;
      }, P, null, [[1, 57, 60, 63], [5, 50]]);
    }));
    return G.apply(this, arguments);
  }
  function H() {
    return I.apply(this, arguments);
  }
  function I() {
    I = A(x().mark(function Q() {
      var T, U, V, W, X;
      return x().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              if (T = $request.headers.token, U = $.toObj($response.body), U && U.data && U.data.user_id && T) {
                Y.next = 4;
                break;
              }
              return Y.abrupt("return");
            case 4:
              if (V = U.data.user_id, W = {
                phone: V,
                token: T
              }, X = B.findIndex(function (Z) {
                return Z.phone == W.phone;
              }), -1 === X) {
                Y.next = 17;
                break;
              }
              if (B[X].token != W.token) {
                Y.next = 12;
                break;
              }
              return Y.abrupt("return");
            case 12:
              B[X].token = T;
              console.log(W.token);
              $.msg($.name, "🎉用户".concat(W.phone, "更新token成功!"), "");
            case 15:
              Y.next = 20;
              break;
            case 17:
              B.push(W);
              console.log(W.token);
              $.msg($.name, "🎉新增用户".concat(W.phone, "成功!"), "");
            case 20:
              $.setjson(B, "JSQ");
            case 21:
            case "end":
              return Y.stop();
          }
        }
      }, Q);
    }));
    return I.apply(this, arguments);
  }
  function J(P) {
    return K.apply(this, arguments);
  }
  function K() {
    K = A(x().mark(function P(Q) {
      var S,
        T = arguments;
      return x().wrap(function (U) {
        for (;;) {
          switch (U.prev = U.next) {
            case 0:
              S = T.length > 1 && void 0 !== T[1] ? T[1] : {};
              return U.abrupt("return", new Promise(function (W) {
                var Y = {
                  url: "https://mini.nxqingchuangkeji.com/api".concat(Q),
                  headers: {
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF MacWechat/3.8.9(0x13080911) XWEB/1227",
                    Connection: "keep-alive",
                    Accept: "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Content-Type": "application/json",
                    xweb_xhr: "1",
                    token: D,
                    "sec-fetch-site": "cross-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://servicewechat.com/wx5804e8877027009c/11/page-frame.html",
                    "accept-language": "zh-CN,zh;q=0.9"
                  },
                  body: JSON.stringify(S)
                };
                $.post(Y, function () {
                  var a0 = A(x().mark(function a1(a2, a3, a4) {
                    return x().wrap(function (a5) {
                      for (;;) {
                        switch (a5.prev = a5.next) {
                          case 0:
                            if (a5.prev = 0, !a2) {
                              a5.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a2)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a5.next = 9;
                            break;
                          case 6:
                            a5.next = 8;
                            return $.wait(2000);
                          case 8:
                            W(JSON.parse(a4));
                          case 9:
                            a5.next = 14;
                            break;
                          case 11:
                            a5.prev = 11;
                            a5.t0 = a5.catch(0);
                            $.logErr(a5.t0, a3);
                          case 14:
                            a5.prev = 14;
                            W();
                            return a5.finish(14);
                          case 17:
                          case "end":
                            return a5.stop();
                        }
                      }
                    }, a1, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a2, a3, a4) {
                    return a0.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return U.stop();
          }
        }
      }, P);
    }));
    return K.apply(this, arguments);
  }
  function L() {
    return M.apply(this, arguments);
  }
  function M() {
    M = A(x().mark(function Q() {
      return x().wrap(function (S) {
        for (;;) {
          switch (S.prev = S.next) {
            case 0:
              return S.abrupt("return", new Promise(function (T) {
                var V = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(V, function () {
                  var W = A(x().mark(function X(Y, Z, a0) {
                    return x().wrap(function (a3) {
                      for (;;) {
                        switch (a3.prev = a3.next) {
                          case 0:
                            try {
                              Y ? (console.log("".concat(JSON.stringify(Y))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(a0).notice);
                            } catch (a4) {
                              $.logErr(a4, Z);
                            } finally {
                              T();
                            }
                          case 1:
                          case "end":
                            return a3.stop();
                        }
                      }
                    }, X);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return S.stop();
          }
        }
      }, Q);
    }));
    return M.apply(this, arguments);
  }
  function N(P) {
    return O.apply(this, arguments);
  }
  function O() {
    O = A(x().mark(function Q(R) {
      return x().wrap(function (U) {
        for (;;) {
          switch (U.prev = U.next) {
            case 0:
              if (!$.isNode()) {
                U.next = 5;
                break;
              }
              U.next = 3;
              return notify.sendNotify($.name, R);
            case 3:
              U.next = 6;
              break;
            case 5:
              $.msg($.name, "", R);
            case 6:
            case "end":
              return U.stop();
          }
        }
      }, Q);
    }));
    return O.apply(this, arguments);
  }
  A(x().mark(function P() {
    return x().wrap(function (R) {
      for (;;) {
        switch (R.prev = R.next) {
          case 0:
            if ("undefined" == typeof $request || "OPTIONS" == $request.method) {
              R.next = 5;
              break;
            }
            R.next = 3;
            return H();
          case 3:
            R.next = 9;
            break;
          case 5:
            R.next = 7;
            return L();
          case 7:
            R.next = 9;
            return F();
          case 9:
          case "end":
            return R.stop();
        }
      }
    }, P);
  }))().catch(function (Q) {
    $.log(Q);
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