//Mon Jun 09 2025 06:39:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("慈晓");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(I) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (K) {
      return typeof K;
    } : function (K) {
      return K && "function" == typeof Symbol && K.constructor === Symbol && K !== Symbol.prototype ? "symbol" : typeof K;
    };
    return b(I);
  }
  function c(I, J) {
    var L = "undefined" != typeof Symbol && I[Symbol.iterator] || I["@@iterator"];
    if (!L) {
      if (Array.isArray(I) || (L = d(I)) || J && I && "number" == typeof I.length) {
        L && (I = L);
        var M = 0,
          N = function () {};
        return {
          s: N,
          n: function () {
            var T = {
              done: !0
            };
            return M >= I.length ? T : {
              done: !1,
              value: I[M++]
            };
          },
          e: function (T) {
            throw T;
          },
          f: N
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var O,
      P = !0,
      Q = !1;
    return {
      s: function () {
        L = L.call(I);
      },
      n: function () {
        var V = L.next();
        P = V.done;
        return V;
      },
      e: function (U) {
        Q = !0;
        O = U;
      },
      f: function () {
        try {
          P || null == L.return || L.return();
        } finally {
          if (Q) {
            throw O;
          }
        }
      }
    };
  }
  function d(I, J) {
    if (I) {
      if ("string" == typeof I) {
        return f(I, J);
      }
      var L = {}.toString.call(I).slice(8, -1);
      "Object" === L && I.constructor && (L = I.constructor.name);
      return "Map" === L || "Set" === L ? Array.from(I) : "Arguments" === L || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L) ? f(I, J) : void 0;
    }
  }
  function f(I, J) {
    (null == J || J > I.length) && (J = I.length);
    for (var M = 0, N = Array(J); M < J; M++) {
      N[M] = I[M];
    }
    return N;
  }
  function g() {
    'use strict';

    g = function () {
      return M;
    };
    var K,
      M = {},
      N = Object.prototype,
      O = N.hasOwnProperty,
      P = Object.defineProperty || function (al, am, an) {
        al[am] = an.value;
      },
      Q = "function" == typeof Symbol ? Symbol : {},
      V = Q.iterator || "@@iterator",
      W = Q.asyncIterator || "@@asyncIterator",
      X = Q.toStringTag || "@@toStringTag";
    function Y(al, am, an) {
      var ao = {
        value: an,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(al, am, ao);
      return al[am];
    }
    try {
      Y({}, "");
    } catch (am) {
      Y = function (ao, ap, aq) {
        return ao[ap] = aq;
      };
    }
    function Z(ao, ap, aq, ar) {
      var at = ap && ap.prototype instanceof a6 ? ap : a6,
        au = Object.create(at.prototype),
        av = new aj(ar || []);
      P(au, "_invoke", {
        value: af(ao, aq, av)
      });
      return au;
    }
    function a0(ao, ap, aq) {
      try {
        return {
          type: "normal",
          arg: ao.call(ap, aq)
        };
      } catch (av) {
        var at = {
          type: "throw",
          arg: av
        };
        return at;
      }
    }
    M.wrap = Z;
    var a1 = "suspendedStart",
      a2 = "suspendedYield",
      a3 = "executing",
      a4 = "completed",
      a5 = {};
    function a6() {}
    function a7() {}
    function a8() {}
    var a9 = {};
    Y(a9, V, function () {
      return this;
    });
    var aa = Object.getPrototypeOf,
      ab = aa && aa(aa(ak([])));
    ab && ab !== N && O.call(ab, V) && (a9 = ab);
    a8.prototype = a6.prototype = Object.create(a9);
    var ac = a8.prototype;
    function ad(ao) {
      ["next", "throw", "return"].forEach(function (aq) {
        Y(ao, aq, function (at) {
          return this._invoke(aq, at);
        });
      });
    }
    function ae(ao, ap) {
      function as(at, au, av, aw) {
        var ay = a0(ao[at], ao, au);
        if ("throw" !== ay.type) {
          var az = ay.arg,
            aA = az.value;
          return aA && "object" == b(aA) && O.call(aA, "__await") ? ap.resolve(aA.__await).then(function (aC) {
            as("next", aC, av, aw);
          }, function (aC) {
            as("throw", aC, av, aw);
          }) : ap.resolve(aA).then(function (aC) {
            az.value = aC;
            av(az);
          }, function (aC) {
            return as("throw", aC, av, aw);
          });
        }
        aw(ay.arg);
      }
      var ar;
      P(this, "_invoke", {
        value: function (at, au) {
          function ax() {
            return new ap(function (aA, aB) {
              as(at, au, aA, aB);
            });
          }
          return ar = ar ? ar.then(ax, ax) : ax();
        }
      });
    }
    function af(ao, ap, aq) {
      var as = a1;
      return function (at, au) {
        if (as === a3) {
          throw Error("Generator is already running");
        }
        if (as === a4) {
          if ("throw" === at) {
            throw au;
          }
          var aw = {};
          aw.value = K;
          aw.done = !0;
          return aw;
        }
        for (aq.method = at, aq.arg = au;;) {
          var ax = aq.delegate;
          if (ax) {
            var ay = ag(ax, aq);
            if (ay) {
              if (ay === a5) {
                continue;
              }
              return ay;
            }
          }
          if ("next" === aq.method) {
            aq.sent = aq._sent = aq.arg;
          } else {
            if ("throw" === aq.method) {
              if (as === a1) {
                throw as = a4, aq.arg;
              }
              aq.dispatchException(aq.arg);
            } else {
              "return" === aq.method && aq.abrupt("return", aq.arg);
            }
          }
          as = a3;
          var az = a0(ao, ap, aq);
          if ("normal" === az.type) {
            if (as = aq.done ? a4 : a2, az.arg === a5) {
              continue;
            }
            var aA = {};
            aA.value = az.arg;
            aA.done = aq.done;
            return aA;
          }
          "throw" === az.type && (as = a4, aq.method = "throw", aq.arg = az.arg);
        }
      };
    }
    function ag(ao, ap) {
      var av = ap.method,
        aw = ao.iterator[av];
      if (aw === K) {
        ap.delegate = null;
        "throw" === av && ao.iterator.return && (ap.method = "return", ap.arg = K, ag(ao, ap), "throw" === ap.method) || "return" !== av && (ap.method = "throw", ap.arg = new TypeError("The iterator does not provide a '" + av + "' method"));
        return a5;
      }
      var ax = a0(aw, ao.iterator, ap.arg);
      if ("throw" === ax.type) {
        ap.method = "throw";
        ap.arg = ax.arg;
        ap.delegate = null;
        return a5;
      }
      var au = ax.arg;
      return au ? au.done ? (ap[ao.resultName] = au.value, ap.next = ao.nextLoc, "return" !== ap.method && (ap.method = "next", ap.arg = K), ap.delegate = null, a5) : au : (ap.method = "throw", ap.arg = new TypeError("iterator result is not an object"), ap.delegate = null, a5);
    }
    function ah(ao) {
      var ap = {
        tryLoc: ao[0]
      };
      var aq = ap;
      1 in ao && (aq.catchLoc = ao[1]);
      2 in ao && (aq.finallyLoc = ao[2], aq.afterLoc = ao[3]);
      this.tryEntries.push(aq);
    }
    function ai(ao) {
      var ap = ao.completion || {};
      ap.type = "normal";
      delete ap.arg;
      ao.completion = ap;
    }
    function aj(ao) {
      var ap = {};
      ap.tryLoc = "root";
      this.tryEntries = [ap];
      ao.forEach(ah, this);
      this.reset(!0);
    }
    function ak(ao) {
      if (ao || "" === ao) {
        var aq = ao[V];
        if (aq) {
          return aq.call(ao);
        }
        if ("function" == typeof ao.next) {
          return ao;
        }
        if (!isNaN(ao.length)) {
          var ar = -1,
            as = function av() {
              for (; ++ar < ao.length;) {
                if (O.call(ao, ar)) {
                  av.value = ao[ar];
                  av.done = !1;
                  return av;
                }
              }
              av.value = K;
              av.done = !0;
              return av;
            };
          return as.next = as;
        }
      }
      throw new TypeError(b(ao) + " is not iterable");
    }
    a7.prototype = a8;
    P(ac, "constructor", {
      value: a8,
      configurable: !0
    });
    P(a8, "constructor", {
      value: a7,
      configurable: !0
    });
    a7.displayName = Y(a8, X, "GeneratorFunction");
    M.isGeneratorFunction = function (ao) {
      var aq = "function" == typeof ao && ao.constructor;
      return !!aq && (aq === a7 || "GeneratorFunction" === (aq.displayName || aq.name));
    };
    M.mark = function (ao) {
      Object.setPrototypeOf ? Object.setPrototypeOf(ao, a8) : (ao.__proto__ = a8, Y(ao, X, "GeneratorFunction"));
      ao.prototype = Object.create(ac);
      return ao;
    };
    M.awrap = function (ao) {
      var ar = {
        __await: ao
      };
      return ar;
    };
    ad(ae.prototype);
    Y(ae.prototype, W, function () {
      return this;
    });
    M.AsyncIterator = ae;
    M.async = function (ao, ap, aq, ar, as) {
      void 0 === as && (as = Promise);
      var av = new ae(Z(ao, ap, aq, ar), as);
      return M.isGeneratorFunction(ap) ? av : av.next().then(function (ax) {
        return ax.done ? ax.value : av.next();
      });
    };
    ad(ac);
    Y(ac, X, "Generator");
    Y(ac, V, function () {
      return this;
    });
    Y(ac, "toString", function () {
      return "[object Generator]";
    });
    M.keys = function (ao) {
      var aq = Object(ao),
        ar = [];
      for (var as in aq) ar.push(as);
      ar.reverse();
      return function au() {
        for (; ar.length;) {
          var aw = ar.pop();
          if (aw in aq) {
            au.value = aw;
            au.done = !1;
            return au;
          }
        }
        au.done = !0;
        return au;
      };
    };
    M.values = ak;
    aj.prototype = {
      constructor: aj,
      reset: function (ao) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = K, this.done = !1, this.delegate = null, this.method = "next", this.arg = K, this.tryEntries.forEach(ai), !ao) {
          for (var ap in this) "t" === ap.charAt(0) && O.call(this, ap) && !isNaN(+ap.slice(1)) && (this[ap] = K);
        }
      },
      stop: function () {
        this.done = !0;
        var ao = this.tryEntries[0].completion;
        if ("throw" === ao.type) {
          throw ao.arg;
        }
        return this.rval;
      },
      dispatchException: function (ao) {
        if (this.done) {
          throw ao;
        }
        var ar = this;
        function ax(ay, az) {
          au.type = "throw";
          au.arg = ao;
          ar.next = ay;
          az && (ar.method = "next", ar.arg = K);
          return !!az;
        }
        for (var as = this.tryEntries.length - 1; as >= 0; --as) {
          var at = this.tryEntries[as],
            au = at.completion;
          if ("root" === at.tryLoc) {
            return ax("end");
          }
          if (at.tryLoc <= this.prev) {
            var av = O.call(at, "catchLoc"),
              aw = O.call(at, "finallyLoc");
            if (av && aw) {
              if (this.prev < at.catchLoc) {
                return ax(at.catchLoc, !0);
              }
              if (this.prev < at.finallyLoc) {
                return ax(at.finallyLoc);
              }
            } else {
              if (av) {
                if (this.prev < at.catchLoc) {
                  return ax(at.catchLoc, !0);
                }
              } else {
                if (!aw) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < at.finallyLoc) {
                  return ax(at.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (ao, ap) {
        for (var aq = this.tryEntries.length - 1; aq >= 0; --aq) {
          var ar = this.tryEntries[aq];
          if (ar.tryLoc <= this.prev && O.call(ar, "finallyLoc") && this.prev < ar.finallyLoc) {
            var as = ar;
            break;
          }
        }
        as && ("break" === ao || "continue" === ao) && as.tryLoc <= ap && ap <= as.finallyLoc && (as = null);
        var at = as ? as.completion : {};
        at.type = ao;
        at.arg = ap;
        return as ? (this.method = "next", this.next = as.finallyLoc, a5) : this.complete(at);
      },
      complete: function (ao, ap) {
        if ("throw" === ao.type) {
          throw ao.arg;
        }
        "break" === ao.type || "continue" === ao.type ? this.next = ao.arg : "return" === ao.type ? (this.rval = this.arg = ao.arg, this.method = "return", this.next = "end") : "normal" === ao.type && ap && (this.next = ap);
        return a5;
      },
      finish: function (ao) {
        for (var ap = this.tryEntries.length - 1; ap >= 0; --ap) {
          var aq = this.tryEntries[ap];
          if (aq.finallyLoc === ao) {
            this.complete(aq.completion, aq.afterLoc);
            ai(aq);
            return a5;
          }
        }
      },
      catch: function (ao) {
        for (var aq = this.tryEntries.length - 1; aq >= 0; --aq) {
          var ar = this.tryEntries[aq];
          if (ar.tryLoc === ao) {
            var as = ar.completion;
            if ("throw" === as.type) {
              var at = as.arg;
              ai(ar);
            }
            return at;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (ao, ap, aq) {
        this.delegate = {
          iterator: ak(ao),
          resultName: ap,
          nextLoc: aq
        };
        "next" === this.method && (this.arg = K);
        return a5;
      }
    };
    return M;
  }
  function h(I, J, K, L, M, N, O) {
    try {
      var P = I[N](O),
        Q = P.value;
    } catch (S) {
      return void K(S);
    }
    P.done ? J(Q) : Promise.resolve(Q).then(L, M);
  }
  function i(I) {
    return function () {
      var L = this,
        M = arguments;
      return new Promise(function (N, O) {
        var Q = I.apply(L, M);
        function R(T) {
          h(Q, N, O, R, S, "next", T);
        }
        function S(T) {
          h(Q, N, O, R, S, "throw", T);
        }
        R(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.CiXiao : $.getdata("CiXiao")) || "",
    k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top",
    l = void 0,
    m = "",
    n = "",
    o = "",
    p = "";
  function q() {
    return r.apply(this, arguments);
  }
  function r() {
    r = i(g().mark(function J() {
      var Q, V, W, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB;
      return g().wrap(function (aC) {
        for (;;) {
          switch (aC.prev = aC.next) {
            case 0:
              if (j) {
                aC.next = 5;
                break;
              }
              console.log("先填写账号token");
              aC.next = 4;
              return G("先填写账号token");
            case 4:
              return aC.abrupt("return");
            case 5:
              aC.next = 7;
              return C();
            case 7:
              l = aC.sent;
              Q = j.split(" ");
              V = c(Q.slice(0, 10));
              aC.prev = 10;
              V.s();
            case 12:
              if ((W = V.n()).done) {
                aC.next = 149;
                break;
              }
              Y = W.value;
              aC.prev = 14;
              console.log("随机生成device");
              n = B();
              console.log(n);
              phone_number = Y.split("&")[0];
              p = Y.split("&")[1];
              console.log("用户：".concat(phone_number, "开始任务"));
              console.log("获取userinfoId");
              Z = Date.now().toString() + x(5) + y();
              a0 = l.md5("@#@$AXdm123%)(ds".concat(Z, "api/UserInfo/GetRedNumberModel"));
              aC.next = 26;
              return u("/api/UserInfo/GetRedNumberModel?newspapergroupId=15403&sign=".concat(a0, "&stamp=").concat(Z));
            case 26:
              if (a1 = aC.sent, a1.success) {
                aC.next = 31;
                break;
              }
              aC.next = 30;
              return G("用户：".concat(phone_number, "\ntoken已过期，请重新获取"));
            case 30:
              return aC.abrupt("continue", 147);
            case 31:
              o = a1.data.userinfo.Id;
              console.log(o);
              aC.next = 35;
              return s("/ReadActivityTaskList?json=true");
            case 35:
              a2 = aC.sent;
              a3 = c(a2.data);
              aC.prev = 37;
              a3.s();
            case 39:
              if ((a4 = a3.n()).done) {
                aC.next = 107;
                break;
              }
              a5 = a4.value;
              console.log(a5.activityTypeName);
              aC.next = 44;
              return s("/ReadActivityTaskData?yunyingActivityTaskId=".concat(a5.yunyingActivityTaskId, "&json=true"));
            case 44:
              if (a6 = aC.sent, a6) {
                aC.next = 47;
                break;
              }
              return aC.abrupt("continue", 105);
            case 47:
              if (a6.data.totalCount != a6.data.completedCount) {
                aC.next = 50;
                break;
              }
              console.log("已完成");
              return aC.abrupt("continue", 105);
            case 50:
              a7 = c(a6.data.taskDetails);
              aC.prev = 51;
              a7.s();
            case 53:
              if ((a8 = a7.n()).done) {
                aC.next = 74;
                break;
              }
              if (a9 = a8.value, !a9.isComplete) {
                aC.next = 57;
                break;
              }
              return aC.abrupt("continue", 72);
            case 57:
              for (console.log("文章：".concat(a9.title)), aa = a9.url.split("?")[1], ab = {}, ac = aa.split("&"), ad = 0, ae = ac.length; ad < ae; ad++) {
                af = ac[ad].split("=");
                ab[af[0]] = af[1];
              }
              ag = Date.now().toString() + x(5) + y();
              ah = l.md5("@#@$AXdm123%)(ds".concat(ag, "api/Yunying/ReadArticle"));
              aC.next = 66;
              return u("api/Yunying/ReadArticle?articleType=1&newspapergroupId=".concat(ab.NewspaperGroupId, "&sign=").concat(ah, "&stamp=").concat(ag, "&ArticleId=").concat(a9.articleId, "&taskDetailId=").concat(a9.taskDetailId));
            case 66:
              ai = aC.sent;
              console.log(ai.message);
              aC.next = 70;
              return s("/ChceckCompleteTaskDetail?taskDetailId=".concat(a9.taskDetailId, "&yunyingActivityTaskId=").concat(a5.yunyingActivityTaskId, "&round=").concat(a5.round, "&json=true"));
            case 70:
              aj = aC.sent;
              console.log(aj.success);
            case 72:
              aC.next = 53;
              break;
            case 74:
              aC.next = 79;
              break;
            case 76:
              aC.prev = 76;
              aC.t0 = aC.catch(51);
              a7.e(aC.t0);
            case 79:
              aC.prev = 79;
              a7.f();
              return aC.finish(79);
            case 82:
              aC.next = 84;
              return s("/CanDrawPrizeList?json=true");
            case 84:
              ak = aC.sent;
              console.log("拥有".concat(ak.data.length, "次抽奖"));
              al = c(ak.data);
              aC.prev = 87;
              al.s();
            case 89:
              if ((am = al.n()).done) {
                aC.next = 97;
                break;
              }
              an = am.value;
              aC.next = 93;
              return s("/DrawAward?awardRecordId=".concat(an.awardRecordId, "&json=true"));
            case 93:
              ao = aC.sent;
              1 == ao.data.awardType ? (console.log("抽奖获得：".concat(null == ao || null === (ap = ao.data) || void 0 === ap ? void 0 : ap.award).concat(null == ao || null === (aq = ao.data) || void 0 === aq ? void 0 : aq.name)), m += "用户：".concat(phone_number, " 抽奖获得：").concat(null == ao || null === (ar = ao.data) || void 0 === ar ? void 0 : ar.award).concat(null == ao || null === (as = ao.data) || void 0 === as ? void 0 : as.name, "\n")) : 2 == ao.data.awardType ? (console.log("抽奖获得：".concat(null == ao || null === (at = ao.data) || void 0 === at ? void 0 : at.scoreAward).concat(null == ao || null === (au = ao.data) || void 0 === au ? void 0 : au.name)), m += "用户：".concat(phone_number, " 抽奖获得：").concat(null == ao || null === (av = ao.data) || void 0 === av ? void 0 : av.scoreAward).concat(null == ao || null === (aw = ao.data) || void 0 === aw ? void 0 : aw.name, "\n")) : (console.log("谢谢参与"), m += "用户：".concat(phone_number, " 抽奖获得：谢谢参与\n"));
            case 95:
              aC.next = 89;
              break;
            case 97:
              aC.next = 102;
              break;
            case 99:
              aC.prev = 99;
              aC.t1 = aC.catch(87);
              al.e(aC.t1);
            case 102:
              aC.prev = 102;
              al.f();
              return aC.finish(102);
            case 105:
              aC.next = 39;
              break;
            case 107:
              aC.next = 112;
              break;
            case 109:
              aC.prev = 109;
              aC.t2 = aC.catch(37);
              a3.e(aC.t2);
            case 112:
              aC.prev = 112;
              a3.f();
              return aC.finish(112);
            case 115:
              aC.next = 117;
              return s("/MyAwardList?page=1&json=true");
            case 117:
              if (ax = aC.sent, null == ax || !ax.data) {
                aC.next = 142;
                break;
              }
              ay = c(ax.data);
              aC.prev = 120;
              ay.s();
            case 122:
              if ((az = ay.n()).done) {
                aC.next = 134;
                break;
              }
              if (aA = az.value, 1 != aA.awardType || 4 == aA.awardState) {
                aC.next = 132;
                break;
              }
              console.log("奖品：".concat(aA.award).concat(aA.name));
              console.log("领取奖品");
              aC.next = 129;
              return s("/GrantAward?awardRecordId=".concat(aA.awardRecordId, "&json=true"));
            case 129:
              aB = aC.sent;
              console.log("领取结果：".concat(aB.message));
              m += "用户：".concat(phone_number, " 奖品：").concat(aA.award).concat(aA.name, " 领取结果：").concat(aB.message, "\n");
            case 132:
              aC.next = 122;
              break;
            case 134:
              aC.next = 139;
              break;
            case 136:
              aC.prev = 136;
              aC.t3 = aC.catch(120);
              ay.e(aC.t3);
            case 139:
              aC.prev = 139;
              ay.f();
              return aC.finish(139);
            case 142:
              aC.next = 147;
              break;
            case 144:
              aC.prev = 144;
              aC.t4 = aC.catch(14);
              console.log(aC.t4);
            case 147:
              aC.next = 12;
              break;
            case 149:
              aC.next = 154;
              break;
            case 151:
              aC.prev = 151;
              aC.t5 = aC.catch(10);
              V.e(aC.t5);
            case 154:
              aC.prev = 154;
              V.f();
              return aC.finish(154);
            case 157:
              if (!m) {
                aC.next = 160;
                break;
              }
              aC.next = 160;
              return G(m);
            case 160:
            case "end":
              return aC.stop();
          }
        }
      }, J, null, [[10, 151, 154, 157], [14, 144], [37, 109, 112, 115], [51, 76, 79, 82], [87, 99, 102, 105], [120, 136, 139, 142]]);
    }));
    return r.apply(this, arguments);
  }
  function s(I) {
    return t.apply(this, arguments);
  }
  function t() {
    t = i(g().mark(function J(K) {
      return g().wrap(function (L) {
        for (;;) {
          switch (L.prev = L.next) {
            case 0:
              return L.abrupt("return", new Promise(function (N) {
                var P = {
                  url: "https://cxh5.xiaodingkeji.com/h5api/api/YunyingV720".concat(K),
                  headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache",
                    accept: "application/json, text/plain, */*",
                    "x-token": p,
                    "x-requested-with": "XMLHttpRequest",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + p + "];x-userinfoId:[" + o + "];x-device:[" + n + "]"
                  }
                };
                $.get(P, function () {
                  var R = i(g().mark(function S(T, U, V) {
                    return g().wrap(function (W) {
                      for (;;) {
                        switch (W.prev = W.next) {
                          case 0:
                            if (W.prev = 0, !T) {
                              W.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(T)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            W.next = 9;
                            break;
                          case 6:
                            W.next = 8;
                            return $.wait(2000);
                          case 8:
                            N(JSON.parse(V));
                          case 9:
                            W.next = 14;
                            break;
                          case 11:
                            W.prev = 11;
                            W.t0 = W.catch(0);
                            $.logErr(W.t0, U);
                          case 14:
                            W.prev = 14;
                            N();
                            return W.finish(14);
                          case 17:
                          case "end":
                            return W.stop();
                        }
                      }
                    }, S, null, [[0, 11, 14, 17]]);
                  }));
                  return function (T, U, V) {
                    return R.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return L.stop();
          }
        }
      }, J);
    }));
    return t.apply(this, arguments);
  }
  function u(I) {
    return v.apply(this, arguments);
  }
  function v() {
    v = i(g().mark(function J(K) {
      return g().wrap(function (M) {
        for (;;) {
          switch (M.prev = M.next) {
            case 0:
              return M.abrupt("return", new Promise(function (O) {
                var Q = {
                  "accept-version": "200",
                  "x-version": "730",
                  version: "7.17.7",
                  "x-token": p,
                  Connection: "Keep-Alive",
                  "accept-encoding": "gzip",
                  "user-agent": "okhttp/3.11.0"
                };
                var R = {
                  url: "https://cxapi.xiaodingkeji.com/".concat(K),
                  headers: Q
                };
                $.get(R, function () {
                  var T = i(g().mark(function U(V, W, X) {
                    return g().wrap(function (Y) {
                      for (;;) {
                        switch (Y.prev = Y.next) {
                          case 0:
                            if (Y.prev = 0, !V) {
                              Y.next = 12;
                              break;
                            }
                            if (!X) {
                              Y.next = 8;
                              break;
                            }
                            Y.next = 5;
                            return $.wait(2000);
                          case 5:
                            O(JSON.parse(X));
                            Y.next = 10;
                            break;
                          case 8:
                            console.log("".concat(JSON.stringify(V)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                          case 10:
                            Y.next = 15;
                            break;
                          case 12:
                            Y.next = 14;
                            return $.wait(2000);
                          case 14:
                            O(JSON.parse(X));
                          case 15:
                            Y.next = 20;
                            break;
                          case 17:
                            Y.prev = 17;
                            Y.t0 = Y.catch(0);
                            $.logErr(Y.t0, W);
                          case 20:
                            Y.prev = 20;
                            O();
                            return Y.finish(20);
                          case 23:
                          case "end":
                            return Y.stop();
                        }
                      }
                    }, U, null, [[0, 17, 20, 23]]);
                  }));
                  return function (V, W, X) {
                    return T.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return M.stop();
          }
        }
      }, J);
    }));
    return v.apply(this, arguments);
  }
  function w() {
    var I = new Date(),
      J = function (Q) {
        return Q.toString().padStart(2, "0");
      },
      K = I.getFullYear(),
      L = J(I.getMonth() + 1),
      M = J(I.getDate()),
      N = J(I.getHours()),
      O = J(I.getMinutes()),
      P = J(I.getSeconds());
    return "".concat(K).concat(L).concat(M).concat(N).concat(O).concat(P);
  }
  function x(I) {
    for (var J = "abcdefghijklmnopqrstuvwxyz0123456789", K = "", L = 0; L < I; L++) {
      K += J.charAt(Math.floor(36 * Math.random()));
    }
    return K;
  }
  function y() {
    var I = w();
    I || (I = x(8));
    return x(2) + I.substring(3) + x(3);
  }
  function z() {
    for (var I = "", J = 0; J < 16; J++) {
      var K = Math.floor(16 * Math.random());
      I += "0123456789abcdef"[K];
    }
    return I;
  }
  function A() {
    return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (I) {
      var J = 16 * Math.random() | 0,
        K = "x" === I ? J : 3 & J | 8;
      return K.toString(16);
    });
  }
  function B() {
    var I = z(),
      J = A().replace(/-/g, ""),
      K = l.createCryptoJS();
    return K.SHA1("".concat(I, "|unknown|").concat(J)).toString().toUpperCase();
  }
  function C() {
    return D.apply(this, arguments);
  }
  function D() {
    D = i(g().mark(function J() {
      var L;
      return g().wrap(function M(N) {
        for (;;) {
          switch (N.prev = N.next) {
            case 0:
              if (L = $.getdata("Utils_Code") || "", !L || !Object.keys(L).length) {
                N.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(L);
              return N.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return N.abrupt("return", new Promise(function () {
                var P = i(g().mark(function Q(R) {
                  return g().wrap(function T(U) {
                    for (;;) {
                      switch (U.prev = U.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (W) {
                            $.setdata(W, "Utils_Code");
                            eval(W);
                            console.log("✅ Utils加载成功, 请继续");
                            R(creatUtils());
                          });
                        case 1:
                        case "end":
                          return U.stop();
                      }
                    }
                  }, Q);
                }));
                return function (R) {
                  return P.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return N.stop();
          }
        }
      }, J);
    }));
    return D.apply(this, arguments);
  }
  function E() {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function J() {
      return g().wrap(function (K) {
        for (;;) {
          switch (K.prev = K.next) {
            case 0:
              return K.abrupt("return", new Promise(function (M) {
                var O = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(O, function () {
                  var P = i(g().mark(function Q(R, S, T) {
                    return g().wrap(function (V) {
                      for (;;) {
                        switch (V.prev = V.next) {
                          case 0:
                            try {
                              R ? (console.log("".concat(JSON.stringify(R))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(T).notice);
                            } catch (W) {
                              $.logErr(W, S);
                            } finally {
                              M();
                            }
                          case 1:
                          case "end":
                            return V.stop();
                        }
                      }
                    }, Q);
                  }));
                  return function (R, S, T) {
                    return P.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return K.stop();
          }
        }
      }, J);
    }));
    return F.apply(this, arguments);
  }
  function G(I) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function K(L) {
      return g().wrap(function (O) {
        for (;;) {
          switch (O.prev = O.next) {
            case 0:
              if (!$.isNode()) {
                O.next = 5;
                break;
              }
              O.next = 3;
              return notify.sendNotify($.name, L);
            case 3:
              O.next = 6;
              break;
            case 5:
              $.msg($.name, "", L);
            case 6:
            case "end":
              return O.stop();
          }
        }
      }, K);
    }));
    return H.apply(this, arguments);
  }
  i(g().mark(function I() {
    return g().wrap(function (J) {
      for (;;) {
        switch (J.prev = J.next) {
          case 0:
            J.next = 2;
            return E();
          case 2:
            J.next = 4;
            return q();
          case 4:
          case "end":
            return J.stop();
        }
      }
    }, I);
  }))().catch(function (J) {
    $.log(J);
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