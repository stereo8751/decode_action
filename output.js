//Tue Jul 15 2025 06:18:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("重置密码");
(() => {
  function b(L) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (O) {
      return typeof O;
    } : function (O) {
      return O && "function" == typeof Symbol && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
    };
    return b(L);
  }
  function c() {
    'use strict';

    c = function () {
      return N;
    };
    var M,
      N = {},
      O = Object.prototype,
      Q = O.hasOwnProperty,
      V = Object.defineProperty || function (an, ao, ap) {
        an[ao] = ap.value;
      },
      W = "function" == typeof Symbol ? Symbol : {},
      X = W.iterator || "@@iterator",
      Y = W.asyncIterator || "@@asyncIterator",
      Z = W.toStringTag || "@@toStringTag";
    function a0(an, ao, ap) {
      var aq = {
        value: ap,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(an, ao, aq);
      return an[ao];
    }
    try {
      a0({}, "");
    } catch (ao) {
      a0 = function (aq, ar, as) {
        return aq[ar] = as;
      };
    }
    function a1(aq, ar, as, at) {
      var au = ar && ar.prototype instanceof a8 ? ar : a8,
        av = Object.create(au.prototype),
        aw = new al(at || []);
      V(av, "_invoke", {
        value: ah(aq, as, aw)
      });
      return av;
    }
    function a2(aq, ar, as) {
      try {
        return {
          type: "normal",
          arg: aq.call(ar, as)
        };
      } catch (av) {
        var at = {
          type: "throw",
          arg: av
        };
        return at;
      }
    }
    N.wrap = a1;
    var a3 = "suspendedStart",
      a4 = "suspendedYield",
      a5 = "executing",
      a6 = "completed",
      a7 = {};
    function a8() {}
    function a9() {}
    function aa() {}
    var ab = {};
    a0(ab, X, function () {
      return this;
    });
    var ac = Object.getPrototypeOf,
      ad = ac && ac(ac(am([])));
    ad && ad !== O && Q.call(ad, X) && (ab = ad);
    aa.prototype = a8.prototype = Object.create(ab);
    var ae = aa.prototype;
    function af(aq) {
      ["next", "throw", "return"].forEach(function (as) {
        a0(aq, as, function (au) {
          return this._invoke(as, au);
        });
      });
    }
    function ag(aq, ar) {
      function au(av, aw, ax, ay) {
        var aA = a2(aq[av], aq, aw);
        if ("throw" !== aA.type) {
          var aB = aA.arg,
            aC = aB.value;
          return aC && "object" == b(aC) && Q.call(aC, "__await") ? ar.resolve(aC.__await).then(function (aE) {
            au("next", aE, ax, ay);
          }, function (aE) {
            au("throw", aE, ax, ay);
          }) : ar.resolve(aC).then(function (aE) {
            aB.value = aE;
            ax(aB);
          }, function (aE) {
            return au("throw", aE, ax, ay);
          });
        }
        ay(aA.arg);
      }
      var at;
      V(this, "_invoke", {
        value: function (av, aw) {
          function az() {
            return new ar(function (aC, aD) {
              au(av, aw, aC, aD);
            });
          }
          return at = at ? at.then(az, az) : az();
        }
      });
    }
    function ah(aq, ar, as) {
      var au = a3;
      return function (av, aw) {
        if (au === a5) {
          throw Error("Generator is already running");
        }
        if (au === a6) {
          if ("throw" === av) {
            throw aw;
          }
          var ay = {};
          ay.value = M;
          ay.done = !0;
          return ay;
        }
        for (as.method = av, as.arg = aw;;) {
          var az = as.delegate;
          if (az) {
            var aA = ai(az, as);
            if (aA) {
              if (aA === a7) {
                continue;
              }
              return aA;
            }
          }
          if ("next" === as.method) {
            as.sent = as._sent = as.arg;
          } else {
            if ("throw" === as.method) {
              if (au === a3) {
                throw au = a6, as.arg;
              }
              as.dispatchException(as.arg);
            } else {
              "return" === as.method && as.abrupt("return", as.arg);
            }
          }
          au = a5;
          var aB = a2(aq, ar, as);
          if ("normal" === aB.type) {
            if (au = as.done ? a6 : a4, aB.arg === a7) {
              continue;
            }
            var aC = {};
            aC.value = aB.arg;
            aC.done = as.done;
            return aC;
          }
          "throw" === aB.type && (au = a6, as.method = "throw", as.arg = aB.arg);
        }
      };
    }
    function ai(aq, ar) {
      var as = ar.method,
        at = aq.iterator[as];
      if (at === M) {
        ar.delegate = null;
        "throw" === as && aq.iterator.return && (ar.method = "return", ar.arg = M, ai(aq, ar), "throw" === ar.method) || "return" !== as && (ar.method = "throw", ar.arg = new TypeError("The iterator does not provide a '" + as + "' method"));
        return a7;
      }
      var au = a2(at, aq.iterator, ar.arg);
      if ("throw" === au.type) {
        ar.method = "throw";
        ar.arg = au.arg;
        ar.delegate = null;
        return a7;
      }
      var av = au.arg;
      return av ? av.done ? (ar[aq.resultName] = av.value, ar.next = aq.nextLoc, "return" !== ar.method && (ar.method = "next", ar.arg = M), ar.delegate = null, a7) : av : (ar.method = "throw", ar.arg = new TypeError("iterator result is not an object"), ar.delegate = null, a7);
    }
    function aj(aq) {
      var ar = {
        tryLoc: aq[0]
      };
      var as = ar;
      1 in aq && (as.catchLoc = aq[1]);
      2 in aq && (as.finallyLoc = aq[2], as.afterLoc = aq[3]);
      this.tryEntries.push(as);
    }
    function ak(aq) {
      var as = aq.completion || {};
      as.type = "normal";
      delete as.arg;
      aq.completion = as;
    }
    function al(aq) {
      var ar = {
        tryLoc: "root"
      };
      this.tryEntries = [ar];
      aq.forEach(aj, this);
      this.reset(!0);
    }
    function am(aq) {
      if (aq || "" === aq) {
        var as = aq[X];
        if (as) {
          return as.call(aq);
        }
        if ("function" == typeof aq.next) {
          return aq;
        }
        if (!isNaN(aq.length)) {
          var at = -1,
            au = function av() {
              for (; ++at < aq.length;) {
                if (Q.call(aq, at)) {
                  av.value = aq[at];
                  av.done = !1;
                  return av;
                }
              }
              av.value = M;
              av.done = !0;
              return av;
            };
          return au.next = au;
        }
      }
      throw new TypeError(b(aq) + " is not iterable");
    }
    a9.prototype = aa;
    V(ae, "constructor", {
      value: aa,
      configurable: !0
    });
    V(aa, "constructor", {
      value: a9,
      configurable: !0
    });
    a9.displayName = a0(aa, Z, "GeneratorFunction");
    N.isGeneratorFunction = function (aq) {
      var ar = "function" == typeof aq && aq.constructor;
      return !!ar && (ar === a9 || "GeneratorFunction" === (ar.displayName || ar.name));
    };
    N.mark = function (aq) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aq, aa) : (aq.__proto__ = aa, a0(aq, Z, "GeneratorFunction"));
      aq.prototype = Object.create(ae);
      return aq;
    };
    N.awrap = function (aq) {
      var as = {
        __await: aq
      };
      return as;
    };
    af(ag.prototype);
    a0(ag.prototype, Y, function () {
      return this;
    });
    N.AsyncIterator = ag;
    N.async = function (aq, ar, as, at, au) {
      void 0 === au && (au = Promise);
      var aw = new ag(a1(aq, ar, as, at), au);
      return N.isGeneratorFunction(ar) ? aw : aw.next().then(function (ay) {
        return ay.done ? ay.value : aw.next();
      });
    };
    af(ae);
    a0(ae, Z, "Generator");
    a0(ae, X, function () {
      return this;
    });
    a0(ae, "toString", function () {
      return "[object Generator]";
    });
    N.keys = function (aq) {
      var as = Object(aq),
        at = [];
      for (var au in as) at.push(au);
      at.reverse();
      return function av() {
        for (; at.length;) {
          var aw = at.pop();
          if (aw in as) {
            av.value = aw;
            av.done = !1;
            return av;
          }
        }
        av.done = !0;
        return av;
      };
    };
    N.values = am;
    al.prototype = {
      constructor: al,
      reset: function (aq) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = M, this.done = !1, this.delegate = null, this.method = "next", this.arg = M, this.tryEntries.forEach(ak), !aq) {
          for (var at in this) "t" === at.charAt(0) && Q.call(this, at) && !isNaN(+at.slice(1)) && (this[at] = M);
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
      dispatchException: function (aq) {
        if (this.done) {
          throw aq;
        }
        var as = this;
        function ay(az, aA) {
          av.type = "throw";
          av.arg = aq;
          as.next = az;
          aA && (as.method = "next", as.arg = M);
          return !!aA;
        }
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          var au = this.tryEntries[at],
            av = au.completion;
          if ("root" === au.tryLoc) {
            return ay("end");
          }
          if (au.tryLoc <= this.prev) {
            var aw = Q.call(au, "catchLoc"),
              ax = Q.call(au, "finallyLoc");
            if (aw && ax) {
              if (this.prev < au.catchLoc) {
                return ay(au.catchLoc, !0);
              }
              if (this.prev < au.finallyLoc) {
                return ay(au.finallyLoc);
              }
            } else {
              if (aw) {
                if (this.prev < au.catchLoc) {
                  return ay(au.catchLoc, !0);
                }
              } else {
                if (!ax) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < au.finallyLoc) {
                  return ay(au.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aq, ar) {
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          var au = this.tryEntries[at];
          if (au.tryLoc <= this.prev && Q.call(au, "finallyLoc") && this.prev < au.finallyLoc) {
            var av = au;
            break;
          }
        }
        av && ("break" === aq || "continue" === aq) && av.tryLoc <= ar && ar <= av.finallyLoc && (av = null);
        var aw = av ? av.completion : {};
        aw.type = aq;
        aw.arg = ar;
        return av ? (this.method = "next", this.next = av.finallyLoc, a7) : this.complete(aw);
      },
      complete: function (aq, ar) {
        if ("throw" === aq.type) {
          throw aq.arg;
        }
        "break" === aq.type || "continue" === aq.type ? this.next = aq.arg : "return" === aq.type ? (this.rval = this.arg = aq.arg, this.method = "return", this.next = "end") : "normal" === aq.type && ar && (this.next = ar);
        return a7;
      },
      finish: function (aq) {
        for (var as = this.tryEntries.length - 1; as >= 0; --as) {
          var at = this.tryEntries[as];
          if (at.finallyLoc === aq) {
            this.complete(at.completion, at.afterLoc);
            ak(at);
            return a7;
          }
        }
      },
      catch: function (aq) {
        for (var ar = this.tryEntries.length - 1; ar >= 0; --ar) {
          var as = this.tryEntries[ar];
          if (as.tryLoc === aq) {
            var at = as.completion;
            if ("throw" === at.type) {
              var au = at.arg;
              ak(as);
            }
            return au;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aq, ar, as) {
        this.delegate = {
          iterator: am(aq),
          resultName: ar,
          nextLoc: as
        };
        "next" === this.method && (this.arg = M);
        return a7;
      }
    };
    return N;
  }
  function d(L, M, N, O, P, Q, R) {
    try {
      var T = L[Q](R),
        U = T.value;
    } catch (X) {
      return void N(X);
    }
    T.done ? M(U) : Promise.resolve(U).then(O, P);
  }
  function e(L) {
    return function () {
      var N = this,
        O = arguments;
      return new Promise(function (P, Q) {
        var S = L.apply(N, O);
        function T(V) {
          d(S, P, Q, T, U, "next", V);
        }
        function U(V) {
          d(S, P, Q, T, U, "throw", V);
        }
        T(void 0);
      });
    };
  }
  var f = ($.isNode() ? process.env.Common_Phone : $.getdata("Common_Phone")) || "",
    g = ($.isNode() ? process.env.Common_Type : $.getdata("Common_Type")) || "",
    h = ($.isNode() ? process.env.Common_smsCode : $.getdata("Common_smsCode")) || "",
    i = ($.isNode() ? process.env.Common_Password : $.getdata("Common_Password")) || "",
    j = void 0,
    k = "",
    l = "",
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "";
  function u() {
    return v.apply(this, arguments);
  }
  function v() {
    v = e(c().mark(function M() {
      var O, P, Q, R, S, T, U, V;
      return c().wrap(function (W) {
        for (;;) {
          switch (W.prev = W.next) {
            case 0:
              console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n");
              "XiShiYan" == g ? (l = "34", q = "50") : "WangChao" == g ? (l = "64", q = "10019") : "XinJiangBei" == g ? (l = "102", q = "10050") : "TongLu" == g ? (l = "59", q = "10017") : "ZSWY" == g ? (l = "73", q = "10024") : "SHPJ" == g ? (l = "14", q = "12") : "YueCheng" == g ? (l = "31", q = "48") : "DaChao" == g ? (l = "94", q = "10048") : "RongPanAn" == g ? (l = "30", q = "45") : "LanJingLing" == g ? (l = "72", q = "10026") : "AiHaiYan" == g ? (l = "60", q = "10018") : "QingJiao" == g ? (l = "23", q = "34") : "JingZhou" == g && (l = "92", q = "10046");
              W.next = 4;
              return J();
            case 4:
              j = W.sent;
              console.log("随机生成UA");
              O = H();
              m = O.ua;
              n = O.commonUa;
              console.log(m);
              console.log(n);
              console.log("用户：".concat(f, "开始任务"));
              console.log("获取sessionId");
              W.next = 15;
              return w("/api/account/init");
            case 15:
              P = W.sent;
              r = P.data.session.id;
              console.log(r);
              console.log("获取signature_key");
              W.next = 21;
              return y("/web/init?client_id=".concat(q));
            case 21:
              Q = W.sent;
              k = Q.data.client.signature_key;
              console.log(k);
              console.log("验证验证码");
              W.next = 27;
              return C("/web/security/check_security_code?client_id=".concat(q, "&phone_number=").concat(f, "&security_code=").concat(h));
            case 27:
              if (R = W.sent, 0 != R.code) {
                W.next = 57;
                break;
              }
              console.log("验证码验证成功");
              console.log("重置密码");
              W.next = 33;
              return A("/web/oauth/reset_password", "client_id=".concat(q, "&new_password=").concat(i, "&phone_number=").concat(f, "&security_code=").concat(h));
            case 33:
              if (S = W.sent, 0 != S.code) {
                W.next = 38;
                break;
              }
              console.log("重置密码成功");
              W.next = 55;
              break;
            case 38:
              if (100001 != S.code) {
                W.next = 54;
                break;
              }
              console.log(S.message);
              console.log("开始注册");
              console.log("获取code");
              W.next = 44;
              return A("/web/oauth/security_code_auth", "client_id=".concat(q, "&phone_number=").concat(f, "&security_code=").concat(h));
            case 44:
              T = W.sent;
              U = T.data.authorization_code.code;
              console.log(U);
              console.log("登录");
              W.next = 50;
              return w("/api/zbtxz/login", "check_token=&code=".concat(U, "&token=&type=-1&union_id="));
            case 50:
              V = W.sent;
              console.log("注册结果：".concat(V.message));
              W.next = 55;
              break;
            case 54:
              console.log(S.message);
            case 55:
              W.next = 58;
              break;
            case 57:
              console.log(R.message);
            case 58:
            case "end":
              return W.stop();
          }
        }
      }, M);
    }));
    return v.apply(this, arguments);
  }
  function w(L, M) {
    return x.apply(this, arguments);
  }
  function x() {
    x = e(c().mark(function N(O, P) {
      var R;
      return c().wrap(function (S) {
        for (;;) {
          switch (S.prev = S.next) {
            case 0:
              R = F(O);
              return S.abrupt("return", new Promise(function (T) {
                var V = {
                  url: "https://vapp.tmuyun.com".concat(O),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": R.time,
                    "X-SESSION-ID": r,
                    "X-REQUEST-ID": R.uuid,
                    "X-SIGNATURE": R.signature,
                    "X-TENANT-ID": l,
                    "X-ACCOUNT-ID": o,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": n
                  },
                  body: P
                };
                $.post(V, function () {
                  var Y = e(c().mark(function Z(a0, a1, a2) {
                    return c().wrap(function (a5) {
                      for (;;) {
                        switch (a5.prev = a5.next) {
                          case 0:
                            if (a5.prev = 0, !a0) {
                              a5.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a0)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a5.next = 9;
                            break;
                          case 6:
                            a5.next = 8;
                            return $.wait(2000);
                          case 8:
                            T(JSON.parse(a2));
                          case 9:
                            a5.next = 14;
                            break;
                          case 11:
                            a5.prev = 11;
                            a5.t0 = a5.catch(0);
                            $.logErr(a5.t0, a1);
                          case 14:
                            a5.prev = 14;
                            T();
                            return a5.finish(14);
                          case 17:
                          case "end":
                            return a5.stop();
                        }
                      }
                    }, Z, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a0, a1, a2) {
                    return Y.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return S.stop();
          }
        }
      }, N);
    }));
    return x.apply(this, arguments);
  }
  function y(L) {
    return z.apply(this, arguments);
  }
  function z() {
    z = e(c().mark(function M(N) {
      return c().wrap(function (P) {
        for (;;) {
          switch (P.prev = P.next) {
            case 0:
              return P.abrupt("return", new Promise(function (Q) {
                var S = {
                  url: "https://passport.tmuyun.com".concat(N),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": G(),
                    "Accept-Encoding": "gzip",
                    "user-agent": m
                  }
                };
                $.get(S, function () {
                  var U = e(c().mark(function V(W, X, Y) {
                    var Z, a0;
                    return c().wrap(function (a1) {
                      for (;;) {
                        switch (a1.prev = a1.next) {
                          case 0:
                            try {
                              if (W) {
                                console.log("".concat(JSON.stringify(W)));
                                console.log("".concat($.name, " API请求失败，请检查网路重试"));
                              } else {
                                if ($.isNode()) {
                                  for (Z = X.headers["set-cookie"] || X.headers["Set-Cookie"], a0 = 0; a0 < Z.length; a0++) {
                                    p += Z[a0].split(";")[0] + ";";
                                  }
                                } else {
                                  p = X.headers["set-cookie"] || X.headers["Set-Cookie"];
                                }
                                Q(JSON.parse(Y));
                              }
                            } catch (a5) {
                              $.logErr(a5, X);
                            } finally {
                              Q();
                            }
                          case 1:
                          case "end":
                            return a1.stop();
                        }
                      }
                    }, V);
                  }));
                  return function (W, X, Y) {
                    return U.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return P.stop();
          }
        }
      }, M);
    }));
    return z.apply(this, arguments);
  }
  function A(L, M) {
    return B.apply(this, arguments);
  }
  function B() {
    B = e(c().mark(function M(N, O) {
      var P;
      return c().wrap(function (Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              P = E(N, O);
              return Q.abrupt("return", new Promise(function (S) {
                var U = {
                  url: "https://passport.tmuyun.com".concat(N),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": P.uuid,
                    "X-SIGNATURE": P.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": m,
                    Cookie: p
                  },
                  body: P.body
                };
                $.post(U, function () {
                  var W = e(c().mark(function X(Y, Z, a0) {
                    return c().wrap(function (a1) {
                      for (;;) {
                        switch (a1.prev = a1.next) {
                          case 0:
                            try {
                              Y ? (console.log("".concat(JSON.stringify(Y))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : S(JSON.parse(a0));
                            } catch (a2) {
                              $.logErr(a2, Z);
                            } finally {
                              S();
                            }
                          case 1:
                          case "end":
                            return a1.stop();
                        }
                      }
                    }, X);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return Q.stop();
          }
        }
      }, M);
    }));
    return B.apply(this, arguments);
  }
  function C(L) {
    return D.apply(this, arguments);
  }
  function D() {
    D = e(c().mark(function M(N) {
      var Q;
      return c().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              Q = E(N);
              return R.abrupt("return", new Promise(function (T) {
                var U = {
                  url: "https://passport.tmuyun.com".concat(N),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": Q.uuid,
                    "X-SIGNATURE": Q.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": m,
                    Cookie: p
                  }
                };
                $.get(U, function () {
                  var W = e(c().mark(function X(Y, Z, a0) {
                    return c().wrap(function (a2) {
                      for (;;) {
                        switch (a2.prev = a2.next) {
                          case 0:
                            try {
                              Y ? (console.log("".concat(JSON.stringify(Y))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : T(JSON.parse(a0));
                            } catch (a3) {
                              $.logErr(a3, Z);
                            } finally {
                              T();
                            }
                          case 1:
                          case "end":
                            return a2.stop();
                        }
                      }
                    }, X);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return R.stop();
          }
        }
      }, M);
    }));
    return D.apply(this, arguments);
  }
  function E(L, M) {
    var Q = G();
    if (M) {
      var Y = new (j.loadJSEncrypt())();
      Y.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
      i = Y.encrypt(i);
      var Z = "post%%".concat(L, "?").concat(M, "%%").concat(Q, "%%");
      M = "client_id=".concat(q, "&new_password=").concat(encodeURIComponent(i), "&phone_number=").concat(f, "&security_code=").concat(h);
      CryptoJS = j.createCryptoJS();
      var W = CryptoJS.HmacSHA256(Z, k),
        X = CryptoJS.enc.Hex.stringify(W);
      var V = {};
      V.uuid = Q;
      V.signature = X;
      V.body = M;
      return V;
    }
    M = L.split("?")[1];
    L = L.split("?")[0];
    var P = "get%%".concat(L, "?").concat(M, "%%").concat(Q, "%%");
    CryptoJS = j.createCryptoJS();
    var R = CryptoJS.HmacSHA256(P, k),
      S = CryptoJS.enc.Hex.stringify(R);
    var a0 = {};
    a0.uuid = Q;
    a0.signature = S;
    return a0;
  }
  function F(L) {
    var M = G(),
      N = Date.now();
    L.indexOf("?") > 0 && (L = L.substring(0, L.indexOf("?")));
    CryptoJS = j.createCryptoJS();
    var O = CryptoJS.SHA256("".concat(L, "&&").concat(r, "&&").concat(M, "&&").concat(N, "&&FR*r!isE5W&&").concat(l)).toString(),
      P = {
        uuid: M,
        time: N,
        signature: O
      };
    return P;
  }
  function G() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (L) {
      var M = 16 * Math.random() | 0,
        N = "x" === L ? M : 3 & M | 8;
      return N.toString(16);
    });
  }
  function H() {
    var L = "6.0.2",
      M = G(),
      N = I(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      O = "Xiaomi " + N,
      P = "Android",
      Q = "".concat(P.toUpperCase(), ";").concat("11", ";").concat(q, ";").concat(L, ";1.0;null;").concat(N),
      R = "".concat(L, ";").concat(M, ";").concat(O, ";").concat(P, ";").concat("11", ";").concat("Release", ";").concat("6.10.0"),
      S = {
        ua: Q,
        commonUa: R,
        uuid: M
      };
    return S;
  }
  function I(L) {
    return L[Math.floor(Math.random() * L.length)];
  }
  function J() {
    return K.apply(this, arguments);
  }
  function K() {
    K = e(c().mark(function M() {
      var O;
      return c().wrap(function P(Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              if (O = $.getdata("Utils_Code") || "", !O || !Object.keys(O).length) {
                Q.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(O);
              return Q.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return Q.abrupt("return", new Promise(function () {
                var U = e(c().mark(function V(W) {
                  return c().wrap(function Y(Z) {
                    for (;;) {
                      switch (Z.prev = Z.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (a0) {
                            $.setdata(a0, "Utils_Code");
                            eval(a0);
                            console.log("✅ Utils加载成功, 请继续");
                            W(creatUtils());
                          });
                        case 1:
                        case "end":
                          return Z.stop();
                      }
                    }
                  }, V);
                }));
                return function (W) {
                  return U.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return Q.stop();
          }
        }
      }, M);
    }));
    return K.apply(this, arguments);
  }
  e(c().mark(function L() {
    return c().wrap(function (M) {
      for (;;) {
        switch (M.prev = M.next) {
          case 0:
            if ("" != f && "" != g && "" != h && "" != i) {
              M.next = 4;
              break;
            }
            console.log("请输入手机号,验证码,密码和选择app");
            M.next = 6;
            break;
          case 4:
            M.next = 6;
            return u();
          case 6:
          case "end":
            return M.stop();
        }
      }
    }, L);
  }))().catch(function (M) {
    $.log(M);
  }).finally(function () {
    $.done({});
  });
})();