//Thu Jun 12 2025 00:23:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("慈晓");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(N) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (R) {
      return typeof R;
    } : function (R) {
      return R && "function" == typeof Symbol && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
    };
    return b(N);
  }
  function c(N, O) {
    var Q = "undefined" != typeof Symbol && N[Symbol.iterator] || N["@@iterator"];
    if (!Q) {
      if (Array.isArray(N) || (Q = d(N)) || O && N && "number" == typeof N.length) {
        Q && (N = Q);
        var R = 0,
          S = function () {};
        return {
          s: S,
          n: function () {
            var Y = {
              done: !0
            };
            return R >= N.length ? Y : {
              done: !1,
              value: N[R++]
            };
          },
          e: function (X) {
            throw X;
          },
          f: S
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var T,
      U = !0,
      V = !1;
    return {
      s: function () {
        Q = Q.call(N);
      },
      n: function () {
        var Y = Q.next();
        U = Y.done;
        return Y;
      },
      e: function (Y) {
        V = !0;
        T = Y;
      },
      f: function () {
        try {
          U || null == Q.return || Q.return();
        } finally {
          if (V) {
            throw T;
          }
        }
      }
    };
  }
  function d(N, O) {
    if (N) {
      if ("string" == typeof N) {
        return f(N, O);
      }
      var Q = {}.toString.call(N).slice(8, -1);
      "Object" === Q && N.constructor && (Q = N.constructor.name);
      return "Map" === Q || "Set" === Q ? Array.from(N) : "Arguments" === Q || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q) ? f(N, O) : void 0;
    }
  }
  function f(N, O) {
    (null == O || O > N.length) && (O = N.length);
    for (var P = 0, Q = Array(O); P < O; P++) {
      Q[P] = N[P];
    }
    return Q;
  }
  function g() {
    'use strict';

    g = function () {
      return P;
    };
    var O,
      P = {},
      Q = Object.prototype,
      T = Q.hasOwnProperty,
      V = Object.defineProperty || function (an, ao, ap) {
        an[ao] = ap.value;
      },
      W = "function" == typeof Symbol ? Symbol : {},
      X = W.iterator || "@@iterator",
      Y = W.asyncIterator || "@@asyncIterator",
      Z = W.toStringTag || "@@toStringTag";
    function a0(an, ao, ap) {
      var ar = {
        value: ap,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(an, ao, ar);
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
      } catch (ax) {
        var au = {
          type: "throw",
          arg: ax
        };
        return au;
      }
    }
    P.wrap = a1;
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
    ad && ad !== Q && T.call(ad, X) && (ab = ad);
    aa.prototype = a8.prototype = Object.create(ab);
    var ae = aa.prototype;
    function af(aq) {
      ["next", "throw", "return"].forEach(function (as) {
        a0(aq, as, function (av) {
          return this._invoke(as, av);
        });
      });
    }
    function ag(aq, ar) {
      function au(av, aw, ax, ay) {
        var aA = a2(aq[av], aq, aw);
        if ("throw" !== aA.type) {
          var aB = aA.arg,
            aC = aB.value;
          return aC && "object" == b(aC) && T.call(aC, "__await") ? ar.resolve(aC.__await).then(function (aE) {
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
            return new ar(function (aA, aB) {
              au(av, aw, aA, aB);
            });
          }
          return at = at ? at.then(az, az) : az();
        }
      });
    }
    function ah(aq, ar, as) {
      var au = a3;
      return function (aw, ax) {
        if (au === a5) {
          throw Error("Generator is already running");
        }
        if (au === a6) {
          if ("throw" === aw) {
            throw ax;
          }
          var az = {
            value: O,
            done: !0
          };
          return az;
        }
        for (as.method = aw, as.arg = ax;;) {
          var aA = as.delegate;
          if (aA) {
            var aB = ai(aA, as);
            if (aB) {
              if (aB === a7) {
                continue;
              }
              return aB;
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
          var aC = a2(aq, ar, as);
          if ("normal" === aC.type) {
            if (au = as.done ? a6 : a4, aC.arg === a7) {
              continue;
            }
            var aD = {};
            aD.value = aC.arg;
            aD.done = as.done;
            return aD;
          }
          "throw" === aC.type && (au = a6, as.method = "throw", as.arg = aC.arg);
        }
      };
    }
    function ai(aq, ar) {
      var aw = ar.method,
        ax = aq.iterator[aw];
      if (ax === O) {
        ar.delegate = null;
        "throw" === aw && aq.iterator.return && (ar.method = "return", ar.arg = O, ai(aq, ar), "throw" === ar.method) || "return" !== aw && (ar.method = "throw", ar.arg = new TypeError("The iterator does not provide a '" + aw + "' method"));
        return a7;
      }
      var ay = a2(ax, aq.iterator, ar.arg);
      if ("throw" === ay.type) {
        ar.method = "throw";
        ar.arg = ay.arg;
        ar.delegate = null;
        return a7;
      }
      var av = ay.arg;
      return av ? av.done ? (ar[aq.resultName] = av.value, ar.next = aq.nextLoc, "return" !== ar.method && (ar.method = "next", ar.arg = O), ar.delegate = null, a7) : av : (ar.method = "throw", ar.arg = new TypeError("iterator result is not an object"), ar.delegate = null, a7);
    }
    function aj(aq) {
      var ar = {};
      ar.tryLoc = aq[0];
      var as = ar;
      1 in aq && (as.catchLoc = aq[1]);
      2 in aq && (as.finallyLoc = aq[2], as.afterLoc = aq[3]);
      this.tryEntries.push(as);
    }
    function ak(aq) {
      var at = aq.completion || {};
      at.type = "normal";
      delete at.arg;
      aq.completion = at;
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
                if (T.call(aq, at)) {
                  av.value = aq[at];
                  av.done = !1;
                  return av;
                }
              }
              av.value = O;
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
    P.isGeneratorFunction = function (aq) {
      var as = "function" == typeof aq && aq.constructor;
      return !!as && (as === a9 || "GeneratorFunction" === (as.displayName || as.name));
    };
    P.mark = function (aq) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aq, aa) : (aq.__proto__ = aa, a0(aq, Z, "GeneratorFunction"));
      aq.prototype = Object.create(ae);
      return aq;
    };
    P.awrap = function (aq) {
      var ar = {
        __await: aq
      };
      return ar;
    };
    af(ag.prototype);
    a0(ag.prototype, Y, function () {
      return this;
    });
    P.AsyncIterator = ag;
    P.async = function (aq, ar, as, at, au) {
      void 0 === au && (au = Promise);
      var aw = new ag(a1(aq, ar, as, at), au);
      return P.isGeneratorFunction(ar) ? aw : aw.next().then(function (ax) {
        return ax.done ? ax.value : aw.next();
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
    P.keys = function (aq) {
      var as = Object(aq),
        at = [];
      for (var au in as) at.push(au);
      at.reverse();
      return function av() {
        for (; at.length;) {
          var ay = at.pop();
          if (ay in as) {
            av.value = ay;
            av.done = !1;
            return av;
          }
        }
        av.done = !0;
        return av;
      };
    };
    P.values = am;
    al.prototype = {
      constructor: al,
      reset: function (aq) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = O, this.done = !1, this.delegate = null, this.method = "next", this.arg = O, this.tryEntries.forEach(ak), !aq) {
          for (var as in this) "t" === as.charAt(0) && T.call(this, as) && !isNaN(+as.slice(1)) && (this[as] = O);
        }
      },
      stop: function () {
        this.done = !0;
        var aq = this.tryEntries[0].completion;
        if ("throw" === aq.type) {
          throw aq.arg;
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
          aA && (as.method = "next", as.arg = O);
          return !!aA;
        }
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          var au = this.tryEntries[at],
            av = au.completion;
          if ("root" === au.tryLoc) {
            return ay("end");
          }
          if (au.tryLoc <= this.prev) {
            var aw = T.call(au, "catchLoc"),
              ax = T.call(au, "finallyLoc");
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
        for (var as = this.tryEntries.length - 1; as >= 0; --as) {
          var at = this.tryEntries[as];
          if (at.tryLoc <= this.prev && T.call(at, "finallyLoc") && this.prev < at.finallyLoc) {
            var au = at;
            break;
          }
        }
        au && ("break" === aq || "continue" === aq) && au.tryLoc <= ar && ar <= au.finallyLoc && (au = null);
        var av = au ? au.completion : {};
        av.type = aq;
        av.arg = ar;
        return au ? (this.method = "next", this.next = au.finallyLoc, a7) : this.complete(av);
      },
      complete: function (aq, ar) {
        if ("throw" === aq.type) {
          throw aq.arg;
        }
        "break" === aq.type || "continue" === aq.type ? this.next = aq.arg : "return" === aq.type ? (this.rval = this.arg = aq.arg, this.method = "return", this.next = "end") : "normal" === aq.type && ar && (this.next = ar);
        return a7;
      },
      finish: function (aq) {
        for (var ar = this.tryEntries.length - 1; ar >= 0; --ar) {
          var as = this.tryEntries[ar];
          if (as.finallyLoc === aq) {
            this.complete(as.completion, as.afterLoc);
            ak(as);
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
        "next" === this.method && (this.arg = O);
        return a7;
      }
    };
    return P;
  }
  function h(N, O, P, Q, R, S, T) {
    try {
      var U = N[S](T),
        V = U.value;
    } catch (Y) {
      return void P(Y);
    }
    U.done ? O(V) : Promise.resolve(V).then(Q, R);
  }
  function i(N) {
    return function () {
      var P = this,
        Q = arguments;
      return new Promise(function (R, S) {
        var T = N.apply(P, Q);
        function U(W) {
          h(T, R, S, U, V, "next", W);
        }
        function V(W) {
          h(T, R, S, U, V, "throw", W);
        }
        U(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.CiXiao : $.getdata("CiXiao")) || "",
    k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top",
    l = "false" === ($.isNode() ? process.env.CiXiao_Draw : $.getdata("CiXiao_Draw")) || !0,
    m = void 0,
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "";
  function t() {
    return u.apply(this, arguments);
  }
  function u() {
    u = i(g().mark(function O() {
      var W, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL;
      return g().wrap(function (aM) {
        for (;;) {
          switch (aM.prev = aM.next) {
            case 0:
              if (j) {
                aM.next = 5;
                break;
              }
              console.log("先填写账号token");
              aM.next = 4;
              return L("先填写账号token");
            case 4:
              return aM.abrupt("return");
            case 5:
              aM.next = 7;
              return H();
            case 7:
              m = aM.sent;
              W = j.split(" ");
              Z = c(W.slice(0, 10));
              aM.prev = 10;
              Z.s();
            case 12:
              if ((a0 = Z.n()).done) {
                aM.next = 184;
                break;
              }
              a1 = a0.value;
              aM.prev = 14;
              phone_number = a1.split("&")[0];
              q = a1.split("&")[1];
              o = a1.split("&")[2] || G();
              console.log("用户：".concat(phone_number, "开始任务"));
              console.log("获取userinfoId");
              a2 = Date.now().toString() + C(5) + D();
              a3 = m.md5("@#@$AXdm123%)(ds".concat(a2, "api/UserInfo/GetRedNumberModel"));
              aM.next = 24;
              return x("/api/UserInfo/GetRedNumberModel?newspapergroupId=15403&sign=".concat(a3, "&stamp=").concat(a2));
            case 24:
              if (a4 = aM.sent, a4.success) {
                aM.next = 29;
                break;
              }
              aM.next = 28;
              return L("用户：".concat(phone_number, "\ntoken已过期，请重新获取"));
            case 28:
              return aM.abrupt("continue", 182);
            case 29:
              if (p = a4.data.userinfo.Id, console.log(p), s && r) {
                aM.next = 39;
                break;
              }
              console.log("获取现金和抽奖Id");
              a2 = Date.now().toString() + C(5) + D();
              a3 = m.md5("@#@$AXdm123%)(ds".concat(a2, "api/News/GetColumn"));
              aM.next = 37;
              return x("/api/News/GetColumn?newspapergroupId=15403&columnLocation=1&sign=".concat(a3, "&stamp=").concat(a2));
            case 37:
              a5 = aM.sent;
              a5.success ? (a6 = /ScoreMall\/Detail\?id=(\d+)/, a7 = JSON.stringify(a5).match(a6), a7 && (s = a7[1]), a6 = /Prize\/Index\?ClientInfoId=15403&ActivityId=(\d+)/, a7 = JSON.stringify(a5).match(a6), a7 && (r = a7[1]), console.log("现金ID：".concat(s, ", 抽奖ID：").concat(r))) : console.log(a5.message);
            case 39:
              if (!s) {
                aM.next = 55;
                break;
              }
              console.log("积分兑换现金");
              a2 = Date.now().toString() + C(5) + D();
              a3 = m.md5("@#@$AXdm123%)(ds".concat(a2, "api/ScoreMall/Exchange"));
              aM.next = 45;
              return x("/api/ScoreMall/Exchange?goodsId=".concat(s, "&newspapergroupId=15403&sign=").concat(a3, "&deviceKey=").concat(o, "&stamp=").concat(a2));
            case 45:
              if (a8 = aM.sent, console.log("兑换结果：".concat(a8.message)), !a8.success) {
                aM.next = 55;
                break;
              }
              a2 = Date.now().toString() + C(5) + D();
              a3 = m.md5("@#@$AXdm123%)(ds".concat(a2, "api/ScoreMall/GrantCashAward"));
              aM.next = 53;
              return x("/api/ScoreMall/GrantCashAward?orderId=".concat(a8.data.ordreId, "&newspapergroupId=15403&sign=").concat(a3, "&stamp=").concat(a2));
            case 53:
              a9 = aM.sent;
              console.log("提现结果：".concat(a9.message));
            case 55:
              if (!r) {
                aM.next = 67;
                break;
              }
              if (!l) {
                aM.next = 67;
                break;
              }
              console.log("积分抽奖");
              aa = !0;
            case 59:
              if (!aa) {
                aM.next = 67;
                break;
              }
              aM.next = 62;
              return z("/Prize/DrawPrize?activeid=".concat(r, "&token=").concat(q));
            case 62:
              ab = aM.sent;
              console.log("抽奖结果：".concat(ab.prize));
              aa = ab.result;
              aM.next = 59;
              break;
            case 67:
              console.log("阅读抽奖");
              aM.next = 70;
              return v("/ReadActivityTaskList?json=true");
            case 70:
              ac = aM.sent;
              ad = c(ac.data);
              aM.prev = 72;
              ad.s();
            case 74:
              if ((ae = ad.n()).done) {
                aM.next = 142;
                break;
              }
              af = ae.value;
              console.log(af.activityTypeName);
              aM.next = 79;
              return v("/ReadActivityTaskData?yunyingActivityTaskId=".concat(af.yunyingActivityTaskId, "&json=true"));
            case 79:
              if (ag = aM.sent, ag) {
                aM.next = 82;
                break;
              }
              return aM.abrupt("continue", 140);
            case 82:
              if (ag.data.totalCount != ag.data.completedCount) {
                aM.next = 85;
                break;
              }
              console.log("已完成");
              return aM.abrupt("continue", 140);
            case 85:
              ah = c(ag.data.taskDetails);
              aM.prev = 86;
              ah.s();
            case 88:
              if ((ai = ah.n()).done) {
                aM.next = 109;
                break;
              }
              if (aj = ai.value, !aj.isComplete) {
                aM.next = 92;
                break;
              }
              return aM.abrupt("continue", 107);
            case 92:
              for (console.log("文章：".concat(aj.title)), ak = aj.url.split("?")[1], al = {}, am = ak.split("&"), an = 0, ao = am.length; an < ao; an++) {
                ap = am[an].split("=");
                al[ap[0]] = ap[1];
              }
              aq = Date.now().toString() + C(5) + D();
              ar = m.md5("@#@$AXdm123%)(ds".concat(aq, "api/Yunying/ReadArticle"));
              aM.next = 101;
              return x("api/Yunying/ReadArticle?articleType=1&newspapergroupId=".concat(al.NewspaperGroupId, "&sign=").concat(ar, "&stamp=").concat(aq, "&ArticleId=").concat(aj.articleId, "&taskDetailId=").concat(aj.taskDetailId));
            case 101:
              as = aM.sent;
              console.log(as.message);
              aM.next = 105;
              return v("/ChceckCompleteTaskDetail?taskDetailId=".concat(aj.taskDetailId, "&yunyingActivityTaskId=").concat(af.yunyingActivityTaskId, "&round=").concat(af.round, "&json=true"));
            case 105:
              at = aM.sent;
              console.log(at.success);
            case 107:
              aM.next = 88;
              break;
            case 109:
              aM.next = 114;
              break;
            case 111:
              aM.prev = 111;
              aM.t0 = aM.catch(86);
              ah.e(aM.t0);
            case 114:
              aM.prev = 114;
              ah.f();
              return aM.finish(114);
            case 117:
              aM.next = 119;
              return v("/CanDrawPrizeList?json=true");
            case 119:
              au = aM.sent;
              console.log("拥有".concat(au.data.length, "次抽奖"));
              av = c(au.data);
              aM.prev = 122;
              av.s();
            case 124:
              if ((aw = av.n()).done) {
                aM.next = 132;
                break;
              }
              ax = aw.value;
              aM.next = 128;
              return v("/DrawAward?awardRecordId=".concat(ax.awardRecordId, "&json=true"));
            case 128:
              ay = aM.sent;
              1 == ay.data.awardType ? (console.log("抽奖获得：".concat(null == ay || null === (az = ay.data) || void 0 === az ? void 0 : az.award).concat(null == ay || null === (aA = ay.data) || void 0 === aA ? void 0 : aA.name)), n += "用户：".concat(phone_number, " 抽奖获得：").concat(null == ay || null === (aB = ay.data) || void 0 === aB ? void 0 : aB.award).concat(null == ay || null === (aC = ay.data) || void 0 === aC ? void 0 : aC.name, "\n")) : 2 == ay.data.awardType ? (console.log("抽奖获得：".concat(null == ay || null === (aD = ay.data) || void 0 === aD ? void 0 : aD.scoreAward).concat(null == ay || null === (aE = ay.data) || void 0 === aE ? void 0 : aE.name)), n += "用户：".concat(phone_number, " 抽奖获得：").concat(null == ay || null === (aF = ay.data) || void 0 === aF ? void 0 : aF.scoreAward).concat(null == ay || null === (aG = ay.data) || void 0 === aG ? void 0 : aG.name, "\n")) : (console.log("谢谢参与"), n += "用户：".concat(phone_number, " 抽奖获得：谢谢参与\n"));
            case 130:
              aM.next = 124;
              break;
            case 132:
              aM.next = 137;
              break;
            case 134:
              aM.prev = 134;
              aM.t1 = aM.catch(122);
              av.e(aM.t1);
            case 137:
              aM.prev = 137;
              av.f();
              return aM.finish(137);
            case 140:
              aM.next = 74;
              break;
            case 142:
              aM.next = 147;
              break;
            case 144:
              aM.prev = 144;
              aM.t2 = aM.catch(72);
              ad.e(aM.t2);
            case 147:
              aM.prev = 147;
              ad.f();
              return aM.finish(147);
            case 150:
              aM.next = 152;
              return v("/MyAwardList?page=1&json=true");
            case 152:
              if (aH = aM.sent, null == aH || !aH.data) {
                aM.next = 177;
                break;
              }
              aI = c(aH.data);
              aM.prev = 155;
              aI.s();
            case 157:
              if ((aJ = aI.n()).done) {
                aM.next = 169;
                break;
              }
              if (aK = aJ.value, 1 != aK.awardType || 4 == aK.awardState) {
                aM.next = 167;
                break;
              }
              console.log("奖品：".concat(aK.award).concat(aK.name));
              console.log("领取奖品");
              aM.next = 164;
              return v("/GrantAward?awardRecordId=".concat(aK.awardRecordId, "&json=true"));
            case 164:
              aL = aM.sent;
              console.log("领取结果：".concat(aL.message));
              n += "用户：".concat(phone_number, " 奖品：").concat(aK.award).concat(aK.name, " 领取结果：").concat(aL.message, "\n");
            case 167:
              aM.next = 157;
              break;
            case 169:
              aM.next = 174;
              break;
            case 171:
              aM.prev = 171;
              aM.t3 = aM.catch(155);
              aI.e(aM.t3);
            case 174:
              aM.prev = 174;
              aI.f();
              return aM.finish(174);
            case 177:
              aM.next = 182;
              break;
            case 179:
              aM.prev = 179;
              aM.t4 = aM.catch(14);
              console.log(aM.t4);
            case 182:
              aM.next = 12;
              break;
            case 184:
              aM.next = 189;
              break;
            case 186:
              aM.prev = 186;
              aM.t5 = aM.catch(10);
              Z.e(aM.t5);
            case 189:
              aM.prev = 189;
              Z.f();
              return aM.finish(189);
            case 192:
              if (!n) {
                aM.next = 195;
                break;
              }
              aM.next = 195;
              return L(n);
            case 195:
            case "end":
              return aM.stop();
          }
        }
      }, O, null, [[10, 186, 189, 192], [14, 179], [72, 144, 147, 150], [86, 111, 114, 117], [122, 134, 137, 140], [155, 171, 174, 177]]);
    }));
    return u.apply(this, arguments);
  }
  function v(N) {
    return w.apply(this, arguments);
  }
  function w() {
    w = i(g().mark(function O(P) {
      return g().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              return R.abrupt("return", new Promise(function (T) {
                var V = {
                  url: "https://cxh5.xiaodingkeji.com/h5api/api/YunyingV720".concat(P),
                  headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache",
                    accept: "application/json, text/plain, */*",
                    "x-token": q,
                    "x-requested-with": "XMLHttpRequest",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + q + "];x-userinfoId:[" + p + "];x-device:[" + o + "]"
                  }
                };
                $.get(V, function () {
                  var X = i(g().mark(function Y(Z, a0, a1) {
                    return g().wrap(function (a3) {
                      for (;;) {
                        switch (a3.prev = a3.next) {
                          case 0:
                            if (a3.prev = 0, !Z) {
                              a3.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(Z)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a3.next = 9;
                            break;
                          case 6:
                            a3.next = 8;
                            return $.wait(2000);
                          case 8:
                            T(JSON.parse(a1));
                          case 9:
                            a3.next = 14;
                            break;
                          case 11:
                            a3.prev = 11;
                            a3.t0 = a3.catch(0);
                            $.logErr(a3.t0, a0);
                          case 14:
                            a3.prev = 14;
                            T();
                            return a3.finish(14);
                          case 17:
                          case "end":
                            return a3.stop();
                        }
                      }
                    }, Y, null, [[0, 11, 14, 17]]);
                  }));
                  return function (Z, a0, a1) {
                    return X.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return R.stop();
          }
        }
      }, O);
    }));
    return w.apply(this, arguments);
  }
  function x(N) {
    return y.apply(this, arguments);
  }
  function y() {
    y = i(g().mark(function O(P) {
      return g().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              return R.abrupt("return", new Promise(function (S) {
                var U = {
                  url: "https://cxapi.xiaodingkeji.com/".concat(P),
                  headers: {
                    "accept-version": "200",
                    "x-version": "730",
                    version: "7.19.0",
                    "x-token": q,
                    Connection: "Keep-Alive",
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/3.11.0"
                  }
                };
                $.get(U, function () {
                  var W = i(g().mark(function X(Y, Z, a0) {
                    return g().wrap(function (a1) {
                      for (;;) {
                        switch (a1.prev = a1.next) {
                          case 0:
                            if (a1.prev = 0, !Y) {
                              a1.next = 12;
                              break;
                            }
                            if (!a0) {
                              a1.next = 8;
                              break;
                            }
                            a1.next = 5;
                            return $.wait(2000);
                          case 5:
                            S(JSON.parse(a0));
                            a1.next = 10;
                            break;
                          case 8:
                            console.log("".concat(JSON.stringify(Y)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                          case 10:
                            a1.next = 15;
                            break;
                          case 12:
                            a1.next = 14;
                            return $.wait(2000);
                          case 14:
                            S(JSON.parse(a0));
                          case 15:
                            a1.next = 20;
                            break;
                          case 17:
                            a1.prev = 17;
                            a1.t0 = a1.catch(0);
                            $.logErr(a1.t0, Z);
                          case 20:
                            a1.prev = 20;
                            S();
                            return a1.finish(20);
                          case 23:
                          case "end":
                            return a1.stop();
                        }
                      }
                    }, X, null, [[0, 17, 20, 23]]);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return R.stop();
          }
        }
      }, O);
    }));
    return y.apply(this, arguments);
  }
  function z(N) {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function O(P) {
      return g().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              return R.abrupt("return", new Promise(function (S) {
                var U = {
                  url: "https://cxjfsc.xiaodingkeji.com/".concat(P),
                  headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache",
                    accept: "application/json, text/plain, */*",
                    "x-requested-with": "XMLHttpRequest",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + q + "];x-userinfoId:[" + p + "];x-device:[" + o + "]"
                  }
                };
                $.get(U, function () {
                  var W = i(g().mark(function X(Y, Z, a0) {
                    return g().wrap(function (a1) {
                      for (;;) {
                        switch (a1.prev = a1.next) {
                          case 0:
                            if (a1.prev = 0, !Y) {
                              a1.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(Y)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a1.next = 9;
                            break;
                          case 6:
                            a1.next = 8;
                            return $.wait(2000);
                          case 8:
                            S(JSON.parse(a0));
                          case 9:
                            a1.next = 14;
                            break;
                          case 11:
                            a1.prev = 11;
                            a1.t0 = a1.catch(0);
                            $.logErr(a1.t0, Z);
                          case 14:
                            a1.prev = 14;
                            S();
                            return a1.finish(14);
                          case 17:
                          case "end":
                            return a1.stop();
                        }
                      }
                    }, X, null, [[0, 11, 14, 17]]);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return R.stop();
          }
        }
      }, O);
    }));
    return A.apply(this, arguments);
  }
  function B() {
    var N = new Date(),
      O = function (V) {
        return V.toString().padStart(2, "0");
      },
      P = N.getFullYear(),
      Q = O(N.getMonth() + 1),
      R = O(N.getDate()),
      S = O(N.getHours()),
      T = O(N.getMinutes()),
      U = O(N.getSeconds());
    return "".concat(P).concat(Q).concat(R).concat(S).concat(T).concat(U);
  }
  function C(N) {
    for (var O = "abcdefghijklmnopqrstuvwxyz0123456789", P = "", Q = 0; Q < N; Q++) {
      P += O.charAt(Math.floor(36 * Math.random()));
    }
    return P;
  }
  function D() {
    var N = B();
    N || (N = C(8));
    return C(2) + N.substring(3) + C(3);
  }
  function E() {
    for (var N = "", O = 0; O < 16; O++) {
      var P = Math.floor(16 * Math.random());
      N += "0123456789abcdef"[P];
    }
    return N;
  }
  function F() {
    return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (N) {
      var O = 16 * Math.random() | 0,
        P = "x" === N ? O : 3 & O | 8;
      return P.toString(16);
    });
  }
  function G() {
    var N = E(),
      O = F().replace(/-/g, ""),
      P = m.createCryptoJS();
    return P.SHA1("".concat(N, "|unknown|").concat(O)).toString().toUpperCase();
  }
  function H() {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function N() {
      var P;
      return g().wrap(function Q(R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              if (P = $.getdata("Utils_Code") || "", !P || !Object.keys(P).length) {
                R.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(P);
              return R.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return R.abrupt("return", new Promise(function () {
                var V = i(g().mark(function W(X) {
                  return g().wrap(function Z(a0) {
                    for (;;) {
                      switch (a0.prev = a0.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (a1) {
                            $.setdata(a1, "Utils_Code");
                            eval(a1);
                            console.log("✅ Utils加载成功, 请继续");
                            X(creatUtils());
                          });
                        case 1:
                        case "end":
                          return a0.stop();
                      }
                    }
                  }, W);
                }));
                return function (X) {
                  return V.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return R.stop();
          }
        }
      }, N);
    }));
    return I.apply(this, arguments);
  }
  function J() {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function O() {
      return g().wrap(function (P) {
        for (;;) {
          switch (P.prev = P.next) {
            case 0:
              return P.abrupt("return", new Promise(function (R) {
                var T = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(T, function () {
                  var U = i(g().mark(function V(W, X, Y) {
                    return g().wrap(function (a0) {
                      for (;;) {
                        switch (a0.prev = a0.next) {
                          case 0:
                            try {
                              W ? (console.log("".concat(JSON.stringify(W))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(Y).notice);
                            } catch (a1) {
                              $.logErr(a1, X);
                            } finally {
                              R();
                            }
                          case 1:
                          case "end":
                            return a0.stop();
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
      }, O);
    }));
    return K.apply(this, arguments);
  }
  function L(N) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function N(O) {
      return g().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              if (!$.isNode()) {
                R.next = 5;
                break;
              }
              R.next = 3;
              return notify.sendNotify($.name, O);
            case 3:
              R.next = 6;
              break;
            case 5:
              $.msg($.name, "", O);
            case 6:
            case "end":
              return R.stop();
          }
        }
      }, N);
    }));
    return M.apply(this, arguments);
  }
  i(g().mark(function N() {
    return g().wrap(function (P) {
      for (;;) {
        switch (P.prev = P.next) {
          case 0:
            P.next = 2;
            return J();
          case 2:
            P.next = 4;
            return t();
          case 4:
          case "end":
            return P.stop();
        }
      }
    }, N);
  }))().catch(function (O) {
    $.log(O);
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