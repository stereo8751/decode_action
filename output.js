//Mon Sep 22 2025 06:34:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("同程挖宝");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(M) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Q) {
        return typeof Q;
      } : function (Q) {
        {
          return Q && "function" == typeof Symbol && Q.constructor === Symbol && Q !== Symbol.prototype ? "symbol" : typeof Q;
        }
      };
      return b(M);
    }
  }
  function c(M, N) {
    var O = {
      srbMC: " API请求失败，请检查网路重试",
      daqhe: function (V, W, X, Y, Z) {
        return V(W, X, Y, Z);
      },
      kruCp: "next",
      nkpLM: function (V, W) {
        return V === W;
      },
      zbzNd: "throw",
      WZTaG: "ZPQzu",
      TcRlz: function (V) {
        return V();
      },
      KhsLG: "end",
      FEqtz: "GeneratorFunction"
    };
    {
      var P = "undefined" != typeof Symbol && M[Symbol.iterator] || M["@@iterator"];
      if (!P) {
        {
          if (Array.isArray(M) || (P = d(M)) || N && M && "number" == typeof M.length) {
            {
              P && (M = P);
              var Q = 0;
              var R = function () {};
              return {
                s: R,
                n: function () {
                  {
                    var V = {
                      done: true
                    };
                    return Q >= M.length ? V : {
                      done: false,
                      value: M[Q++]
                    };
                  }
                },
                e: function (V) {
                  {
                    throw V;
                  }
                },
                f: R
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var S;
      var T = true;
      var U = false;
      return {
        s: function () {
          {
            P = P.call(M);
          }
        },
        n: function () {
          {
            var Y = P.next();
            T = Y.done;
            return Y;
          }
        },
        e: function (X) {
          {
            U = true;
            S = X;
          }
        },
        f: function () {
          {
            try {
              {
                T || null == P.return || P.return();
              }
            } finally {
              {
                if (U) {
                  throw S;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(M, N) {
    {
      if (M) {
        {
          if ("string" == typeof M) {
            return f(M, N);
          }
          var O = {}.toString.call(M).slice(8, -1);
          "Object" === O && M.constructor && (O = M.constructor.name);
          return "Map" === O || "Set" === O ? Array.from(M) : "Arguments" === O || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O) ? f(M, N) : undefined;
        }
      }
    }
  }
  function f(M, N) {
    {
      (null == N || N > M.length) && (N = M.length);
      for (var O = 0, P = Array(N); O < N; O++) {
        P[O] = M[O];
      }
      return P;
    }
  }
  function g() {
    "use strict";

    var M = {
      qcTJE: function (an) {
        return an();
      },
      namhN: function (an, ao, ap, aq) {
        return an(ao, ap, aq);
      },
      mAuqP: "next",
      UolIY: "return",
      gKFiN: "zDJhF",
      ILICD: "OTTmB",
      gRvfm: function (an, ao) {
        return an instanceof ao;
      },
      rpImf: function (an, ao, ap, aq) {
        return an(ao, ap, aq);
      },
      xZzNt: "_invoke",
      kWEhA: function (an, ao, ap, aq, ar) {
        return an(ao, ap, aq, ar);
      },
      eOxOr: "throw",
      lvCKA: function (an, ao) {
        return an >= ao;
      },
      ddMte: function (an, ao) {
        return an !== ao;
      },
      Hbhsf: "JfoKs",
      aOCvS: function (an, ao, ap, aq) {
        return an(ao, ap, aq);
      },
      PWbBq: "cAzSa",
      NWzlF: function (an, ao, ap, aq, ar) {
        return an(ao, ap, aq, ar);
      },
      exiSn: "[object Generator]",
      RpxoZ: "NYKKr",
      OSZtL: function (an, ao) {
        return an(ao);
      },
      faPxf: "✅ Utils加载成功, 请继续",
      TVyqR: "MSnur",
      wioTY: function (an, ao, ap, aq, ar) {
        return an(ao, ap, aq, ar);
      },
      sBwRN: "vORTo",
      mRXkH: "ymAcA",
      dbPBJ: function (an, ao, ap, aq) {
        return an(ao, ap, aq);
      },
      EfvQb: function (an, ao) {
        return an === ao;
      },
      zRrsk: "cJFFC",
      sYfdu: "CxaNY",
      AOVlR: function (an, ao) {
        return an == ao;
      },
      GWqdP: "object",
      fpaex: "__await",
      emMow: function (an, ao) {
        return an(ao);
      },
      kzgKA: "MORsc",
      sDSQo: "RmNWk",
      RAELN: function (an) {
        return an();
      },
      mzfHv: "mjeMB",
      wGRKo: "WdtUU",
      JDdgu: function (an, ao) {
        return an(ao);
      },
      zGoJz: "VGfFH",
      JrdGY: function (an, ao) {
        return an < ao;
      },
      tpjeR: function (an, ao, ap, aq) {
        return an(ao, ap, aq);
      },
      ScBbU: "GeneratorFunction",
      cbvEb: function (an, ao) {
        return an === ao;
      },
      SBnkT: "UKqBL",
      mPHLu: "BdhwC",
      xlzhs: "QjuyG",
      KZQRK: "KGjLr",
      MsxHM: function (an, ao) {
        return an === ao;
      },
      ORpVL: function (an, ao, ap, aq, ar) {
        return an(ao, ap, aq, ar);
      },
      BPZvH: function (an, ao) {
        return an === ao;
      },
      UEqid: "QNzBc",
      pzsRH: function (an, ao) {
        return an !== ao;
      },
      XWJcF: "SCWPW",
      zXdAO: "kEsEx",
      LAOIW: function (an, ao) {
        return an in ao;
      },
      bfQhA: function (an, ao, ap) {
        return an(ao, ap);
      },
      vDwDM: "Object",
      bbZNF: "Map",
      RLwDZ: function (an, ao) {
        return an === ao;
      },
      rgdvp: "Arguments",
      uJcav: "root",
      uSvML: function (an, ao) {
        return an !== ao;
      },
      ndnIA: "grbVj",
      dJiaG: "kERbh",
      jbWJv: "Usxlp",
      mMMjU: function (an, ao) {
        return an === ao;
      },
      FmISz: function (an, ao) {
        return an(ao);
      },
      zeFkP: function (an) {
        return an();
      },
      VcrcV: "vRICb",
      cXkOb: function (an, ao) {
        return an - ao;
      },
      OgAbB: function (an, ao) {
        return an >= ao;
      },
      QSiSp: "QAUzU",
      cTznx: function (an, ao) {
        return an(ao);
      },
      MjoFd: "end",
      DhFMq: function (an, ao) {
        return an === ao;
      },
      RSzui: function (an, ao) {
        return an && ao;
      },
      DoFZq: "KIYbz",
      cEmyH: "XFxLS",
      rCbWc: function (an, ao) {
        return an < ao;
      },
      wXUGd: function (an, ao, ap) {
        return an(ao, ap);
      },
      niDmQ: "OhCnN",
      mkKFi: "zqZdm",
      zcKoo: "(((.+)+)+)+$",
      ENbQM: function (an, ao) {
        return an + ao;
      },
      uciLg: function (an, ao) {
        return an + ao;
      },
      aGLnH: function (an, ao) {
        return an + ao;
      },
      xhEaI: function (an, ao) {
        return an + ao;
      },
      vhOdG: function (an, ao) {
        return an === ao;
      },
      XlEwi: "KrqVV",
      ASihH: "QaRlY",
      pUfbQ: function (an, ao) {
        return an === ao;
      },
      TaiEI: "QaDmT",
      qpqSO: function (an, ao) {
        return an <= ao;
      },
      JKDXy: function (an, ao) {
        return an < ao;
      },
      CXXym: function (an, ao) {
        return an !== ao;
      },
      kyaeY: "meOil",
      NYpYt: "break",
      tZGcT: "continue",
      zoUKG: function (an, ao) {
        return an <= ao;
      },
      QEfqO: "OcApv",
      TPazk: "snaIm",
      YJxCj: function (an, ao) {
        return an - ao;
      },
      NePTL: "hMnql",
      bWAKT: "GyRpa",
      BSfTp: function (an, ao) {
        return an(ao);
      },
      ZxLkO: function (an, ao) {
        return an === ao;
      },
      ACfcZ: function (an, ao) {
        return an === ao;
      },
      NKPmg: "normal",
      hfxBL: function (an, ao) {
        return an !== ao;
      },
      zFRtP: "BMxHW",
      snzHN: function (an, ao) {
        return an(ao);
      }
    };
    g = function () {
      {
        return Q;
      }
    };
    var O;
    var Q = {};
    var T = Object.prototype;
    var U = T.hasOwnProperty;
    var V = Object.defineProperty || function (an, ao, ap) {
      {
        an[ao] = ap.value;
      }
    };
    var W = "function" == typeof Symbol ? Symbol : {};
    var X = W.iterator || "@@iterator";
    var Y = W.asyncIterator || "@@asyncIterator";
    var Z = W.toStringTag || "@@toStringTag";
    function a0(an, ao, ap) {
      {
        var ar = {
          value: ap,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(an, ao, ar);
        return an[ao];
      }
    }
    try {
      a0({}, "");
    } catch (ao) {
      a0 = function (aq, ar, as) {
        return aq[ar] = as;
      };
    }
    function a1(aq, ar, as, at) {
      {
        var au = ar && ar.prototype instanceof a8 ? ar : a8;
        var av = Object.create(au.prototype);
        var aw = new al(at || []);
        V(av, "_invoke", {
          value: ah(aq, as, aw)
        });
        return av;
      }
    }
    function a2(aq, ar, as) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aq.call(ar, as)
            };
          }
        } catch (aw) {
          {
            var au = {
              type: "throw",
              arg: aw
            };
            return au;
          }
        }
      }
    }
    Q.wrap = a1;
    var a3 = "suspendedStart";
    var a4 = "suspendedYield";
    var a5 = "executing";
    var a6 = "completed";
    var a7 = {};
    function a8() {}
    function a9() {}
    function aa() {}
    var ab = {};
    a0(ab, X, function () {
      {
        return this;
      }
    });
    var ac = Object.getPrototypeOf;
    var ad = ac && ac(ac(am([])));
    ad && ad !== T && U.call(ad, X) && (ab = ad);
    aa.prototype = a8.prototype = Object.create(ab);
    var ae = aa.prototype;
    function af(aq) {
      ["next", "throw", "return"].forEach(function (at) {
        {
          a0(aq, at, function (aw) {
            {
              return this._invoke(at, aw);
            }
          });
        }
      });
    }
    function ag(aq, ar) {
      {
        function av(aw, ax, ay, az) {
          {
            var aB = a2(aq[aw], aq, ax);
            if ("throw" !== aB.type) {
              {
                var aC = aB.arg;
                var aD = aC.value;
                return aD && "object" == b(aD) && U.call(aD, "__await") ? ar.resolve(aD.__await).then(function (aG) {
                  av("next", aG, ay, az);
                }, function (aG) {
                  av("throw", aG, ay, az);
                }) : ar.resolve(aD).then(function (aG) {
                  {
                    aC.value = aG;
                    ay(aC);
                  }
                }, function (aG) {
                  {
                    return av("throw", aG, ay, az);
                  }
                });
              }
            }
            az(aB.arg);
          }
        }
        var at;
        V(this, "_invoke", {
          value: function (aw, ax) {
            {
              function aA() {
                {
                  return new ar(function (aD, aE) {
                    {
                      av(aw, ax, aD, aE);
                    }
                  });
                }
              }
              return at = at ? at.then(aA, aA) : aA();
            }
          }
        });
      }
    }
    function ah(aq, ar, as) {
      {
        var au = a3;
        return function (av, aw) {
          {
            if (au === a5) {
              throw Error("Generator is already running");
            }
            if (au === a6) {
              {
                if ("throw" === av) {
                  throw aw;
                }
                var ay = {
                  value: O,
                  done: true
                };
                return ay;
              }
            }
            for (as.method = av, as.arg = aw;;) {
              {
                var az = as.delegate;
                if (az) {
                  {
                    var aA = ai(az, as);
                    if (aA) {
                      {
                        if (aA === a7) {
                          continue;
                        }
                        return aA;
                      }
                    }
                  }
                }
                if ("next" === as.method) {
                  as.sent = as._sent = as.arg;
                } else {
                  if ("throw" === as.method) {
                    {
                      if (au === a3) {
                        throw au = a6, as.arg;
                      }
                      as.dispatchException(as.arg);
                    }
                  } else {
                    "return" === as.method && as.abrupt("return", as.arg);
                  }
                }
                au = a5;
                var aB = a2(aq, ar, as);
                if ("normal" === aB.type) {
                  {
                    if (au = as.done ? a6 : a4, aB.arg === a7) {
                      continue;
                    }
                    var aC = {
                      value: aB.arg,
                      done: as.done
                    };
                    return aC;
                  }
                }
                "throw" === aB.type && (au = a6, as.method = "throw", as.arg = aB.arg);
              }
            }
          }
        };
      }
    }
    function ai(aq, ar) {
      {
        var aw = ar.method;
        var ax = aq.iterator[aw];
        if (ax === O) {
          ar.delegate = null;
          "throw" === aw && aq.iterator.return && (ar.method = "return", ar.arg = O, ai(aq, ar), "throw" === ar.method) || "return" !== aw && (ar.method = "throw", ar.arg = new TypeError("The iterator does not provide a '" + aw + "' method"));
          return a7;
        }
        var au = a2(ax, aq.iterator, ar.arg);
        if ("throw" === au.type) {
          ar.method = "throw";
          ar.arg = au.arg;
          ar.delegate = null;
          return a7;
        }
        var av = au.arg;
        return av ? av.done ? (ar[aq.resultName] = av.value, ar.next = aq.nextLoc, "return" !== ar.method && (ar.method = "next", ar.arg = O), ar.delegate = null, a7) : av : (ar.method = "throw", ar.arg = new TypeError("iterator result is not an object"), ar.delegate = null, a7);
      }
    }
    function aj(aq) {
      {
        var at = {
          tryLoc: aq[0]
        };
        1 in aq && (at.catchLoc = aq[1]);
        2 in aq && (at.finallyLoc = aq[2], at.afterLoc = aq[3]);
        this.tryEntries.push(at);
      }
    }
    function ak(aq) {
      {
        var ar = aq.completion || {};
        ar.type = "normal";
        delete ar.arg;
        aq.completion = ar;
      }
    }
    function al(aq) {
      {
        var ar = {
          tryLoc: "root"
        };
        this.tryEntries = [ar];
        aq.forEach(aj, this);
        this.reset(true);
      }
    }
    function am(aq) {
      {
        if (aq || "" === aq) {
          {
            var as = aq[X];
            if (as) {
              return as.call(aq);
            }
            if ("function" == typeof aq.next) {
              return aq;
            }
            if (!isNaN(aq.length)) {
              {
                var at = -1;
                var au = function ax() {
                  {
                    for (; ++at < aq.length;) {
                      if (U.call(aq, at)) {
                        ax.value = aq[at];
                        ax.done = false;
                        return ax;
                      }
                    }
                    ax.value = O;
                    ax.done = true;
                    return ax;
                  }
                };
                return au.next = au;
              }
            }
          }
        }
        throw new TypeError(b(aq) + " is not iterable");
      }
    }
    a9.prototype = aa;
    V(ae, "constructor", {
      value: aa,
      configurable: true
    });
    V(aa, "constructor", {
      value: a9,
      configurable: true
    });
    a9.displayName = a0(aa, Z, "GeneratorFunction");
    Q.isGeneratorFunction = function (aq) {
      {
        var as = "function" == typeof aq && aq.constructor;
        return !!as && (as === a9 || "GeneratorFunction" === (as.displayName || as.name));
      }
    };
    Q.mark = function (aq) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aq, aa) : (aq.__proto__ = aa, a0(aq, Z, "GeneratorFunction"));
        aq.prototype = Object.create(ae);
        return aq;
      }
    };
    Q.awrap = function (aq) {
      {
        var ar = {
          __await: aq
        };
        return ar;
      }
    };
    af(ag.prototype);
    a0(ag.prototype, Y, function () {
      return this;
    });
    Q.AsyncIterator = ag;
    Q.async = function (aq, ar, as, at, au) {
      {
        undefined === au && (au = Promise);
        var ax = new ag(a1(aq, ar, as, at), au);
        return Q.isGeneratorFunction(ar) ? ax : ax.next().then(function (ay) {
          {
            return ay.done ? ay.value : ax.next();
          }
        });
      }
    };
    af(ae);
    a0(ae, Z, "Generator");
    a0(ae, X, function () {
      {
        return this;
      }
    });
    a0(ae, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    Q.keys = function (aq) {
      {
        var ar = Object(aq);
        var as = [];
        for (var at in ar) as.push(at);
        as.reverse();
        return function au() {
          {
            for (; as.length;) {
              {
                var ax = as.pop();
                if (ax in ar) {
                  au.value = ax;
                  au.done = false;
                  return au;
                }
              }
            }
            au.done = true;
            return au;
          }
        };
      }
    };
    Q.values = am;
    al.prototype = {
      constructor: al,
      reset: function (aq) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = O, this.done = false, this.delegate = null, this.method = "next", this.arg = O, this.tryEntries.forEach(ak), !aq) {
            for (var ar in this) "t" === ar.charAt(0) && U.call(this, ar) && !isNaN(+ar.slice(1)) && (this[ar] = O);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var as = this.tryEntries[0].completion;
          if ("throw" === as.type) {
            throw as.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aq) {
        {
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
            {
              var au = this.tryEntries[at];
              var av = au.completion;
              if ("root" === au.tryLoc) {
                return ay("end");
              }
              if (au.tryLoc <= this.prev) {
                {
                  var aw = U.call(au, "catchLoc");
                  var ax = U.call(au, "finallyLoc");
                  if (aw && ax) {
                    {
                      if (this.prev < au.catchLoc) {
                        return ay(au.catchLoc, true);
                      }
                      if (this.prev < au.finallyLoc) {
                        return ay(au.finallyLoc);
                      }
                    }
                  } else {
                    if (aw) {
                      {
                        if (this.prev < au.catchLoc) {
                          return ay(au.catchLoc, true);
                        }
                      }
                    } else {
                      {
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
              }
            }
          }
        }
      },
      abrupt: function (aq, ar) {
        {
          for (var at = this.tryEntries.length - 1; at >= 0; --at) {
            {
              var au = this.tryEntries[at];
              if (au.tryLoc <= this.prev && U.call(au, "finallyLoc") && this.prev < au.finallyLoc) {
                {
                  var av = au;
                  break;
                }
              }
            }
          }
          av && ("break" === aq || "continue" === aq) && av.tryLoc <= ar && ar <= av.finallyLoc && (av = null);
          var aw = av ? av.completion : {};
          aw.type = aq;
          aw.arg = ar;
          return av ? (this.method = "next", this.next = av.finallyLoc, a7) : this.complete(aw);
        }
      },
      complete: function (aq, ar) {
        {
          if ("throw" === aq.type) {
            throw aq.arg;
          }
          "break" === aq.type || "continue" === aq.type ? this.next = aq.arg : "return" === aq.type ? (this.rval = this.arg = aq.arg, this.method = "return", this.next = "end") : "normal" === aq.type && ar && (this.next = ar);
          return a7;
        }
      },
      finish: function (aq) {
        {
          for (var ar = this.tryEntries.length - 1; ar >= 0; --ar) {
            {
              var as = this.tryEntries[ar];
              if (as.finallyLoc === aq) {
                this.complete(as.completion, as.afterLoc);
                ak(as);
                return a7;
              }
            }
          }
        }
      },
      catch: function (aq) {
        {
          for (var ar = this.tryEntries.length - 1; ar >= 0; --ar) {
            {
              var as = this.tryEntries[ar];
              if (as.tryLoc === aq) {
                {
                  var at = as.completion;
                  if ("throw" === at.type) {
                    {
                      var au = at.arg;
                      ak(as);
                    }
                  }
                  return au;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aq, ar, as) {
        {
          this.delegate = {
            iterator: am(aq),
            resultName: ar,
            nextLoc: as
          };
          "next" === this.method && (this.arg = O);
          return a7;
        }
      }
    };
    return Q;
  }
  function h(M, N, O, P, Q, R, S) {
    {
      try {
        {
          var U = M[R](S);
          var V = U.value;
        }
      } catch (Y) {
        {
          return void O(Y);
        }
      }
      U.done ? N(V) : Promise.resolve(V).then(P, Q);
    }
  }
  function i(M) {
    return function () {
      var O = this;
      var P = arguments;
      return new Promise(function (Q, R) {
        var T = M.apply(O, P);
        function U(W) {
          {
            h(T, Q, R, U, V, "next", W);
          }
        }
        function V(W) {
          {
            h(T, Q, R, U, V, "throw", W);
          }
        }
        U(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.XZXXN : $.getdata("XZXXN")) || "";
  var k = ($.isNode() ? process.env.XZXXNSERVER : $.getdata("XZXXNSERVER")) || "https://dalaoshi.xn--ug8h.eu.org";
  var l = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var m = ($.isNode() ? process.env.TCWB ? JSON.parse(process.env.TCWB) : undefined : $.getjson("TCWB")) || [];
  var n = "";
  var o = "";
  var p = "";
  function q() {
    {
      return r.apply(this, arguments);
    }
  }
  function r() {
    var M = {
      hzHTL: "Object",
      vVJPj: function (N, O) {
        return N === O;
      },
      GLwDG: "Set",
      vRAGa: "Arguments",
      cbnuz: function (N, O) {
        return N < O;
      },
      zmNNs: "function",
      pJSqd: function (N, O) {
        return N(O);
      },
      fVdHZ: function (N, O) {
        return N + O;
      },
      LGspl: " is not iterable",
      kxhqw: function (N, O) {
        return N instanceof O;
      },
      WCQXP: function (N, O, P, Q) {
        return N(O, P, Q);
      },
      hbNBq: function (N, O) {
        return N === O;
      },
      VAvEn: function (N) {
        return N();
      },
      cScxk: function (N, O) {
        return N(O);
      },
      TcgPh: "DdCNO",
      ioUXg: "开始任务",
      atCrz: "TCWB",
      vxYVZ: function (N, O) {
        return N == O;
      },
      BDdGh: function (N, O) {
        return N == O;
      },
      PLtxf: "kSjvt",
      eotok: function (N, O) {
        return N == O;
      },
      FghOY: "continue",
      qmeEJ: function (N, O, P) {
        return N(O, P);
      },
      Fpagt: "2025_NationalDay1",
      uCyhR: function (N, O) {
        return N !== O;
      },
      wnODj: "fBLKX",
      ovRDK: "SVFch",
      tAanM: "任务：",
      kawtg: function (N, O) {
        return N != O;
      },
      vfDSg: "DrKQt",
      WfyrE: "已完成",
      UrrCU: "/finish",
      SfluO: "完成任务：",
      qgcOt: function (N, O) {
        return N == O;
      },
      JnxaQ: function (N, O, P) {
        return N(O, P);
      },
      vqjVC: "/game_play/mining/detail",
      bYKxI: function (N, O) {
        return N == O;
      },
      GYKiy: function (N, O) {
        return N === O;
      },
      khyiC: "NWGRo",
      HoeEn: function (N, O) {
        return N != O;
      },
      gOCfx: function (N, O) {
        return N === O;
      },
      UVEhO: "gNIqQ",
      duhGh: function (N, O, P) {
        return N(O, P);
      },
      FJhmI: "/game_play/mining/receive",
      OxmbM: function (N, O) {
        return N == O;
      },
      wEIGx: function (N, O) {
        return N == O;
      },
      lYYXQ: function (N, O) {
        return N == O;
      },
      pvdGF: function (N, O) {
        return N === O;
      },
      xJgAB: function (N, O) {
        return N === O;
      },
      OptGM: "级奖励：",
      WDqRT: "剩余抽奖次数：",
      kXRwj: function (N, O) {
        return N === O;
      },
      ymFjM: function (N, O) {
        return N < O;
      },
      bbqWf: function (N, O) {
        return N == O;
      },
      BFbJX: function (N, O) {
        return N === O;
      },
      bnqQy: function (N, O) {
        return N === O;
      },
      WzecG: "PNPuQ",
      WrndA: function (N, O, P) {
        return N(O, P);
      },
      YAUSz: "/game_play/component/lottery",
      gWjjQ: "次抽奖获得：",
      Ydbaf: function (N, O) {
        return N === O;
      },
      hUYvC: function (N, O) {
        return N(O);
      },
      PxQjg: "/reward/client/page?activityCode=2025_NationalDay1",
      lRJuO: "AGyma",
      LrNSV: "OCHKf",
      veLIC: "gqBTW",
      cjogu: "WbWZb",
      mMbrX: function (N, O) {
        return N !== O;
      },
      YswHI: function (N, O, P) {
        return N(O, P);
      },
      uOyJc: "/receive",
      dGjWD: function (N, O) {
        return N == O;
      },
      wLyPR: "体现结果：",
      zXoIa: " 体现结果：",
      hrhKw: "/exchange/index",
      yVUYF: "2025_NationalDay2",
      YoyNc: function (N, O) {
        return N === O;
      },
      unIgv: function (N, O) {
        return N === O;
      },
      lIIWq: function (N, O) {
        return N === O;
      },
      fZEEV: "auWlz",
      LoImM: "现金奖励",
      qhZwI: "QHZRU",
      kydEf: "/exchange/receive",
      ODBkk: function (N, O) {
        return N == O;
      },
      hUwOe: "rgtDo",
      KyNeK: "CkPtb",
      ooIwP: "兑换结果：",
      fSwnm: function (N, O) {
        return N === O;
      },
      TxkUH: function (N, O) {
        return N == O;
      },
      fySrY: function (N, O) {
        return N == O;
      },
      TdEBJ: function (N, O) {
        return N === O;
      },
      oWeLB: "用户：",
      JtXMD: " 奖品：",
      dAygE: function (N, O) {
        return N === O;
      },
      DCuls: function (N, O) {
        return N == O;
      },
      HnXPH: "NDfFE",
      npnrD: "end",
      ggMiE: function (N, O) {
        return N == O;
      },
      EVjVj: function (N, O) {
        return N > O;
      },
      HDUgD: "throw",
      bxDZD: function (N) {
        return N();
      },
      tivMP: function (N, O) {
        return N(O);
      },
      XWhtL: "gSZDv",
      hBjjd: function (N) {
        return N();
      },
      IhTUG: "NETCRAFT[AES_IV]"
    };
    {
      r = i(g().mark(function N() {
        {
          var V;
          var W;
          var Y;
          var Z;
          var a0;
          var a1;
          var a2;
          var a3;
          var a4;
          var a5;
          var a6;
          var a7;
          var a8;
          var a9;
          var aa;
          var ab;
          var ac;
          var ad;
          var ae;
          var af;
          var ag;
          var ah;
          var ai;
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
          return g().wrap(function (aF) {
            {
              for (;;) {
                switch (aF.prev = aF.next) {
                  case 0:
                    aF.next = 2;
                    return G();
                  case 2:
                    Utils = aF.sent;
                    V = c(m);
                    aF.prev = 4;
                    V.s();
                  case 6:
                    if ((W = V.n()).done) {
                      {
                        aF.next = 155;
                        break;
                      }
                    }
                    Y = W.value;
                    aF.prev = 8;
                    n = Y.userId;
                    o = Y.token;
                    console.log("用户：".concat(n, "开始任务"));
                    aF.next = 14;
                    return A({
                      token: j,
                      type: "TCWB",
                      userId: n
                    });
                  case 14:
                    if (a4 = aF.sent, 200 == (null == a4 ? undefined : a4.code)) {
                      {
                        aF.next = 18;
                        break;
                      }
                    }
                    console.log(null == a4 ? undefined : a4.msg);
                    return aF.abrupt("continue", 153);
                  case 18:
                    aF.next = 20;
                    return s("/list", {
                      activityCode: "2025_NationalDay1"
                    });
                  case 20:
                    a5 = aF.sent;
                    a6 = c(null == a5 || null === (a0 = a5.data) || undefined === a0 ? undefined : a0.list);
                    aF.prev = 22;
                    a6.s();
                  case 24:
                    if ((a7 = a6.n()).done) {
                      {
                        aF.next = 36;
                        break;
                      }
                    }
                    if (a8 = a7.value, console.log("任务：".concat(null == a8 ? undefined : a8.title)), "FINISH" != (null == a8 ? undefined : a8.stateEnum)) {
                      {
                        aF.next = 30;
                        break;
                      }
                    }
                    console.log("已完成");
                    return aF.abrupt("continue", 34);
                  case 30:
                    aF.next = 32;
                    return s("/finish", {
                      activityCode: "2025_NationalDay1",
                      taskId: null == a8 ? undefined : a8.id
                    });
                  case 32:
                    a9 = aF.sent;
                    console.log("完成任务：".concat(null == a9 ? undefined : a9.message));
                  case 34:
                    aF.next = 24;
                    break;
                  case 36:
                    aF.next = 41;
                    break;
                  case 38:
                    aF.prev = 38;
                    aF.t0 = aF.catch(22);
                    a6.e(aF.t0);
                  case 41:
                    aF.prev = 41;
                    a6.f();
                    return aF.finish(41);
                  case 44:
                    var aH = {
                      activityCode: "2025_NationalDay1"
                    };
                    aF.next = 46;
                    return u("/game_play/mining/detail", aH);
                  case 46:
                    aa = aF.sent;
                    ab = c(null == aa || null === (a1 = aa.data) || undefined === a1 ? undefined : a1.levels);
                    aF.prev = 48;
                    ab.s();
                  case 50:
                    if ((ac = ab.n()).done) {
                      {
                        aF.next = 59;
                        break;
                      }
                    }
                    if (ad = ac.value, null == ad || !ad.levelAchieve || null != ad && ad.received) {
                      {
                        aF.next = 57;
                        break;
                      }
                    }
                    aF.next = 55;
                    return u("/game_play/mining/receive", {
                      activityCode: "2025_NationalDay1",
                      level: null == ad ? undefined : ad.level
                    });
                  case 55:
                    ae = aF.sent;
                    2200 == (null == ae ? undefined : ae.code) ? console.log("领取".concat(null == ad ? undefined : ad.level, "级奖励：").concat(null == ae || null === (af = ae.data) || undefined === af ? undefined : af.price).concat(null == ae || null === (ag = ae.data) || undefined === ag ? undefined : ag.title)) : console.log("领取".concat(null == ad ? undefined : ad.level, "级奖励：").concat(null == ae ? undefined : ae.message));
                  case 57:
                    aF.next = 50;
                    break;
                  case 59:
                    aF.next = 64;
                    break;
                  case 61:
                    aF.prev = 61;
                    aF.t1 = aF.catch(48);
                    ab.e(aF.t1);
                  case 64:
                    aF.prev = 64;
                    ab.f();
                    return aF.finish(64);
                  case 67:
                    console.log("剩余抽奖次数：".concat(null == aa || null === (Z = aa.data) || undefined === Z ? undefined : Z.usableChances));
                    ah = 0;
                  case 69:
                    if (!(ah < (null == aa || null === (ai = aa.data) || undefined === ai ? undefined : ai.usableChances))) {
                      {
                        aF.next = 77;
                        break;
                      }
                    }
                    var aI = {
                      activityCode: "2025_NationalDay1"
                    };
                    aF.next = 72;
                    return u("/game_play/component/lottery", aI);
                  case 72:
                    al = aF.sent;
                    console.log("第".concat(ah + 1, "次抽奖获得：").concat(null == al || null === (aj = al.data) || undefined === aj ? undefined : aj.price).concat(null == al || null === (ak = al.data) || undefined === ak ? undefined : ak.title));
                  case 74:
                    ah++;
                    aF.next = 69;
                    break;
                  case 77:
                    aF.next = 79;
                    return w("/reward/client/page?activityCode=2025_NationalDay1");
                  case 79:
                    am = aF.sent;
                    an = c(null == am || null === (a2 = am.data) || undefined === a2 ? undefined : a2.rewards);
                    aF.prev = 81;
                    an.s();
                  case 83:
                    if ((ao = an.n()).done) {
                      {
                        aF.next = 108;
                        break;
                      }
                    }
                    ap = ao.value;
                    aq = c(null == ap ? undefined : ap.rewards);
                    aF.prev = 86;
                    aq.s();
                  case 88:
                    if ((ar = aq.n()).done) {
                      {
                        aF.next = 98;
                        break;
                      }
                    }
                    if (as = ar.value, null == as || !as.title.includes("现金")) {
                      {
                        aF.next = 96;
                        break;
                      }
                    }
                    aF.next = 93;
                    return y("/receive", {
                      receiveId: null == as ? undefined : as.receiveId
                    });
                  case 93:
                    at = aF.sent;
                    console.log("体现结果：".concat(null == at ? undefined : at.message));
                    p += "用户：".concat(n, " 奖品：").concat(null == as ? undefined : as.title, " 体现结果：").concat(null == at ? undefined : at.message, "\n");
                  case 96:
                    aF.next = 88;
                    break;
                  case 98:
                    aF.next = 103;
                    break;
                  case 100:
                    aF.prev = 100;
                    aF.t2 = aF.catch(86);
                    aq.e(aF.t2);
                  case 103:
                    aF.prev = 103;
                    aq.f();
                    return aF.finish(103);
                  case 106:
                    aF.next = 83;
                    break;
                  case 108:
                    aF.next = 113;
                    break;
                  case 110:
                    aF.prev = 110;
                    aF.t3 = aF.catch(81);
                    an.e(aF.t3);
                  case 113:
                    aF.prev = 113;
                    an.f();
                    return aF.finish(113);
                  case 116:
                    aF.next = 118;
                    return u("/exchange/index", {
                      actCode: "2025_NationalDay2"
                    });
                  case 118:
                    au = aF.sent;
                    av = c(null == au || null === (a3 = au.data) || undefined === a3 || null === (a3 = a3.exchangeInfo) || undefined === a3 ? undefined : a3.rewards);
                    aF.prev = 120;
                    av.s();
                  case 122:
                    if ((aw = av.n()).done) {
                      {
                        aF.next = 140;
                        break;
                      }
                    }
                    if (ax = aw.value, "现金奖励" != (null == ax ? undefined : ax.rewardName)) {
                      {
                        aF.next = 138;
                        break;
                      }
                    }
                    aF.next = 127;
                    return u("/exchange/receive", {
                      rewardId: null == ax ? undefined : ax.rewardId,
                      poolId: null == ax ? undefined : ax.poolId,
                      actCode: "2025_NationalDay2"
                    });
                  case 127:
                    if (ay = aF.sent, 2200 != (null == ay ? undefined : ay.code)) {
                      {
                        aF.next = 137;
                        break;
                      }
                    }
                    console.log("兑换结果：".concat(null == ay || null === (az = ay.data) || undefined === az ? undefined : az.price).concat(null == ay || null === (aA = ay.data) || undefined === aA ? undefined : aA.title));
                    aF.next = 132;
                    return y("/receive", {
                      receiveId: null == ay || null === (aB = ay.data) || undefined === aB ? undefined : aB.receiveId
                    });
                  case 132:
                    aE = aF.sent;
                    console.log("体现结果：".concat(null == aE ? undefined : aE.message));
                    p += "用户：".concat(n, " 奖品：").concat(null == ay || null === (aC = ay.data) || undefined === aC ? undefined : aC.price).concat(null == ay || null === (aD = ay.data) || undefined === aD ? undefined : aD.title, " 体现结果：").concat(null == aE ? undefined : aE.message, "\n");
                    aF.next = 138;
                    break;
                  case 137:
                    console.log("兑换结果：".concat(null == ay ? undefined : ay.message));
                  case 138:
                    aF.next = 122;
                    break;
                  case 140:
                    aF.next = 145;
                    break;
                  case 142:
                    aF.prev = 142;
                    aF.t4 = aF.catch(120);
                    av.e(aF.t4);
                  case 145:
                    aF.prev = 145;
                    av.f();
                    return aF.finish(145);
                  case 148:
                    aF.next = 153;
                    break;
                  case 150:
                    aF.prev = 150;
                    aF.t5 = aF.catch(8);
                    console.log(aF.t5);
                  case 153:
                    aF.next = 6;
                    break;
                  case 155:
                    aF.next = 160;
                    break;
                  case 157:
                    aF.prev = 157;
                    aF.t6 = aF.catch(4);
                    V.e(aF.t6);
                  case 160:
                    aF.prev = 160;
                    V.f();
                    return aF.finish(160);
                  case 163:
                    if (!p) {
                      {
                        aF.next = 166;
                        break;
                      }
                    }
                    aF.next = 166;
                    return K(p);
                  case 166:
                  case "end":
                    return aF.stop();
                }
              }
            }
          }, N, null, [[4, 157, 160, 163], [8, 150], [22, 38, 41, 44], [48, 61, 64, 67], [81, 110, 113, 116], [86, 100, 103, 106], [120, 142, 145, 148]]);
        }
      }));
      return r.apply(this, arguments);
    }
  }
  function s(M) {
    return t.apply(this, arguments);
  }
  function t() {
    t = i(g().mark(function N(O) {
      var Q;
      var R;
      var S;
      var T = arguments;
      return g().wrap(function (U) {
        for (;;) {
          switch (U.prev = U.next) {
            case 0:
              Q = T.length > 1 && undefined !== T[1] ? T[1] : {};
              R = 0;
            case 2:
              if (!(R <= 3)) {
                U.next = 17;
                break;
              }
              R++;
              U.next = 6;
              return new Promise(function (V) {
                var X = {
                  "User-Agent": "%E5%90%8C%E7%A8%8B%E6%97%85%E8%A1%8C/11.2.21.11003 CFNetwork/1399 Darwin/22.1.0",
                  Connection: "keep-alive",
                  Accept: "*/*",
                  "Accept-Encoding": "gzip, deflate, br",
                  "Content-Type": "application/json",
                  channel: "1",
                  apptoken: o,
                  "accept-language": "zh-CN,zh-Hans;q=0.9",
                  "os-type": "1"
                };
                var Y = {
                  url: "https://tcmobileapi.17usoft.com/nimbus/taskComponent".concat(O),
                  headers: X,
                  body: JSON.stringify(Q)
                };
                $.post(Y, function () {
                  var Z = i(g().mark(function a0(a1, a2, a3) {
                    return g().wrap(function (a5) {
                      for (;;) {
                        switch (a5.prev = a5.next) {
                          case 0:
                            if (a5.prev = 0, !a1) {
                              a5.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a1)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a5.next = 9;
                            break;
                          case 6:
                            a5.next = 8;
                            return $.wait(2000);
                          case 8:
                            V(JSON.parse(a3));
                          case 9:
                            a5.next = 14;
                            break;
                          case 11:
                            a5.prev = 11;
                            a5.t0 = a5.catch(0);
                            $.logErr(a5.t0, a2);
                          case 14:
                            a5.prev = 14;
                            V();
                            return a5.finish(14);
                          case 17:
                          case "end":
                            return a5.stop();
                        }
                      }
                    }, a0, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a1, a2, a3) {
                    return Z.apply(this, arguments);
                  };
                }());
              });
            case 6:
              if (S = U.sent, null == S) {
                U.next = 11;
                break;
              }
              return U.abrupt("return", S);
            case 11:
              if (!(R <= 3)) {
                U.next = 15;
                break;
              }
              console.log("第".concat(R, "次重试中..."));
              U.next = 15;
              return $.wait(1000);
            case 15:
              U.next = 2;
              break;
            case 17:
            case "end":
              return U.stop();
          }
        }
      }, N);
    }));
    return t.apply(this, arguments);
  }
  function u(M) {
    return v.apply(this, arguments);
  }
  function v() {
    v = i(g().mark(function N(O) {
      var P;
      var Q;
      var R;
      var S;
      var T = arguments;
      return g().wrap(function (U) {
        for (;;) {
          switch (U.prev = U.next) {
            case 0:
              P = T.length > 1 && undefined !== T[1] ? T[1] : {};
              Q = C().substring(0, 16);
              R = 0;
            case 3:
              if (!(R <= 3)) {
                U.next = 18;
                break;
              }
              R++;
              U.next = 7;
              return new Promise(function (W) {
                var Y = {
                  url: "https://app.17u.cn/activity".concat(O),
                  headers: {
                    "User-Agent": "%E5%90%8C%E7%A8%8B%E6%97%85%E8%A1%8C/11.2.21.11003 CFNetwork/1399 Darwin/22.1.0",
                    Connection: "keep-alive",
                    Accept: "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Content-Type": "application/json",
                    secver: "4",
                    channel: "1",
                    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                    appToken: o,
                    "Os-Type": "1"
                  },
                  body: JSON.stringify({
                    key: F(Q),
                    data: E(Q, P),
                    sv: "2"
                  })
                };
                $.post(Y, function () {
                  var Z = i(g().mark(function a0(a1, a2, a3) {
                    return g().wrap(function (a5) {
                      for (;;) {
                        switch (a5.prev = a5.next) {
                          case 0:
                            if (a5.prev = 0, !a1) {
                              a5.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a1)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a5.next = 9;
                            break;
                          case 6:
                            a5.next = 8;
                            return $.wait(2000);
                          case 8:
                            W(JSON.parse(a3));
                          case 9:
                            a5.next = 14;
                            break;
                          case 11:
                            a5.prev = 11;
                            a5.t0 = a5.catch(0);
                            $.logErr(a5.t0, a2);
                          case 14:
                            a5.prev = 14;
                            W();
                            return a5.finish(14);
                          case 17:
                          case "end":
                            return a5.stop();
                        }
                      }
                    }, a0, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a1, a2, a3) {
                    return Z.apply(this, arguments);
                  };
                }());
              });
            case 7:
              if (S = U.sent, null == S) {
                U.next = 12;
                break;
              }
              return U.abrupt("return", S);
            case 12:
              if (!(R <= 3)) {
                U.next = 16;
                break;
              }
              console.log("第".concat(R, "次重试中..."));
              U.next = 16;
              return $.wait(1000);
            case 16:
              U.next = 3;
              break;
            case 18:
            case "end":
              return U.stop();
          }
        }
      }, N);
    }));
    return v.apply(this, arguments);
  }
  function w(M) {
    return x.apply(this, arguments);
  }
  function x() {
    x = i(g().mark(function M(N) {
      var P;
      var Q;
      return g().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              P = 0;
            case 1:
              if (!(P <= 3)) {
                R.next = 16;
                break;
              }
              P++;
              R.next = 5;
              return new Promise(function (S) {
                var U = {
                  url: "https://app.17u.cn".concat(N),
                  headers: {
                    "User-Agent": "%E5%90%8C%E7%A8%8B%E6%97%85%E8%A1%8C/11.2.21.11003 CFNetwork/1399 Darwin/22.1.0",
                    Connection: "keep-alive",
                    Accept: "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Content-Type": "application/json",
                    secver: "4",
                    channel: "1",
                    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                    appToken: o,
                    "Os-Type": "1",
                    dp: D(n)
                  }
                };
                $.get(U, function () {
                  var W = i(g().mark(function X(Y, Z, a0) {
                    return g().wrap(function (a2) {
                      for (;;) {
                        switch (a2.prev = a2.next) {
                          case 0:
                            if (a2.prev = 0, !Y) {
                              a2.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(Y)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a2.next = 9;
                            break;
                          case 6:
                            a2.next = 8;
                            return $.wait(2000);
                          case 8:
                            S(JSON.parse(a0));
                          case 9:
                            a2.next = 14;
                            break;
                          case 11:
                            a2.prev = 11;
                            a2.t0 = a2.catch(0);
                            $.logErr(a2.t0, Z);
                          case 14:
                            a2.prev = 14;
                            S();
                            return a2.finish(14);
                          case 17:
                          case "end":
                            return a2.stop();
                        }
                      }
                    }, X, null, [[0, 11, 14, 17]]);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              });
            case 5:
              if (Q = R.sent, null == Q) {
                R.next = 10;
                break;
              }
              return R.abrupt("return", Q);
            case 10:
              if (!(P <= 3)) {
                R.next = 14;
                break;
              }
              console.log("第".concat(P, "次重试中..."));
              R.next = 14;
              return $.wait(1000);
            case 14:
              R.next = 1;
              break;
            case 16:
            case "end":
              return R.stop();
          }
        }
      }, M);
    }));
    return x.apply(this, arguments);
  }
  function y(M) {
    return z.apply(this, arguments);
  }
  function z() {
    z = i(g().mark(function N(O) {
      var P;
      var Q;
      var R;
      var S = arguments;
      return g().wrap(function (T) {
        for (;;) {
          switch (T.prev = T.next) {
            case 0:
              P = S.length > 1 && undefined !== S[1] ? S[1] : {};
              Q = 0;
            case 2:
              if (!(Q <= 3)) {
                T.next = 17;
                break;
              }
              Q++;
              T.next = 6;
              return new Promise(function (V) {
                var X = {
                  url: "https://app.17u.cn/reward/client".concat(O),
                  headers: {
                    "User-Agent": "%E5%90%8C%E7%A8%8B%E6%97%85%E8%A1%8C/11.2.21.11003 CFNetwork/1399 Darwin/22.1.0",
                    Connection: "keep-alive",
                    Accept: "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Content-Type": "application/json",
                    channel: "1",
                    apptoken: o,
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "os-type": "1",
                    dp: D(n)
                  },
                  body: JSON.stringify(P)
                };
                $.post(X, function () {
                  var Z = i(g().mark(function a0(a1, a2, a3) {
                    return g().wrap(function (a4) {
                      for (;;) {
                        switch (a4.prev = a4.next) {
                          case 0:
                            if (a4.prev = 0, !a1) {
                              a4.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a1)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a4.next = 9;
                            break;
                          case 6:
                            a4.next = 8;
                            return $.wait(2000);
                          case 8:
                            V(JSON.parse(a3));
                          case 9:
                            a4.next = 14;
                            break;
                          case 11:
                            a4.prev = 11;
                            a4.t0 = a4.catch(0);
                            $.logErr(a4.t0, a2);
                          case 14:
                            a4.prev = 14;
                            V();
                            return a4.finish(14);
                          case 17:
                          case "end":
                            return a4.stop();
                        }
                      }
                    }, a0, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a1, a2, a3) {
                    return Z.apply(this, arguments);
                  };
                }());
              });
            case 6:
              if (R = T.sent, null == R) {
                T.next = 11;
                break;
              }
              return T.abrupt("return", R);
            case 11:
              if (!(Q <= 3)) {
                T.next = 15;
                break;
              }
              console.log("第".concat(Q, "次重试中..."));
              T.next = 15;
              return $.wait(1000);
            case 15:
              T.next = 2;
              break;
            case 17:
            case "end":
              return T.stop();
          }
        }
      }, N);
    }));
    return z.apply(this, arguments);
  }
  function A(M) {
    return B.apply(this, arguments);
  }
  function B() {
    B = i(g().mark(function N(O) {
      return g().wrap(function (Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              return Q.abrupt("return", new Promise(function (T) {
                var V = {
                  url: "".concat(k, "/token/verify"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(O)
                };
                $.post(V, function () {
                  var Y = i(g().mark(function Z(a0, a1, a2) {
                    return g().wrap(function (a3) {
                      for (;;) {
                        switch (a3.prev = a3.next) {
                          case 0:
                            try {
                              a0 ? (console.log("".concat(JSON.stringify(a0))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : T(JSON.parse(a2));
                            } catch (a4) {
                              $.logErr(a4, a1);
                            } finally {
                              T();
                            }
                          case 1:
                          case "end":
                            return a3.stop();
                        }
                      }
                    }, Z);
                  }));
                  return function (a0, a1, a2) {
                    return Y.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Q.stop();
          }
        }
      }, N);
    }));
    return B.apply(this, arguments);
  }
  function C() {
    var M = Utils.createCryptoJS();
    var N = M.lib.WordArray.random(16).toString();
    return N.substring(0, 8) + "-" + N.substring(8, 12) + "-" + N.substring(12, 16) + "-" + N.substring(16, 20) + "-" + N.substring(20, 32);
  }
  function D(M) {
    var N = Utils.createCryptoJS();
    key = N.enc.Utf8.parse("TCAPPH5.NETCRAFT");
    iv = N.enc.Utf8.parse("NETCRAFT[AES_IV]");
    var O = N.AES.encrypt(N.enc.Utf8.parse(M), key, {
      iv: iv,
      mode: N.mode.CBC,
      padding: N.pad.Pkcs7
    });
    return N.enc.Base64.stringify(O.ciphertext);
  }
  function E(M, N) {
    var O = Utils.createCryptoJS();
    M = O.enc.Utf8.parse(M);
    var P = O.AES.encrypt(O.enc.Utf8.parse(JSON.stringify(N)), M, {
      mode: O.mode.ECB,
      padding: O.pad.Pkcs7
    });
    return O.enc.Base64.stringify(P.ciphertext);
  }
  function F(M) {
    var N = new (Utils.loadJSEncrypt())();
    N.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyW+lJJd1Iog0QNCIJnHN8YajxYj4odMBVBaXIEk4ES0VcrhSjZ3LpzXDQk9mTeh1om54sLrluduOxIxJU6G3g53UnKEl7Ylce9KrAJUxkbSqx+7GlOxUsXdBQQpS6Zn9AlSGMQF+GFsn6T7g7wlnyLWuwSCfmrNuZyYcVAyTdKEbCKWBZejKCDDCOZR5tYkuS2aYjT4CrED6gmGfyCSP9eBNgq2VnKR6MgT+fLv5R6mKPaUsbJHHx1OvYhXl5fxA2yNQSZMtfhoNEOtivZ8B6f971viU4d9fjSDl+OhRFMpp5ZjS1PzRwD49YHLRnGSU8udEivQzJ63O64pQB/W/qQIDAQAB-----END PUBLIC KEY-----");
    return N.encrypt(M);
  }
  function G() {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function N() {
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
                var T = i(g().mark(function U(V) {
                  return g().wrap(function X(Y) {
                    for (;;) {
                      switch (Y.prev = Y.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (Z) {
                            $.setdata(Z, "Utils_Code");
                            eval(Z);
                            console.log("✅ Utils加载成功, 请继续");
                            V(creatUtils());
                          });
                        case 1:
                        case "end":
                          return Y.stop();
                      }
                    }
                  }, U);
                }));
                return function (V) {
                  return T.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return R.stop();
          }
        }
      }, N);
    }));
    return H.apply(this, arguments);
  }
  function I() {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function N() {
      return g().wrap(function (O) {
        for (;;) {
          switch (O.prev = O.next) {
            case 0:
              return O.abrupt("return", new Promise(function (Q) {
                var S = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(S, function () {
                  var U = i(g().mark(function V(W, X, Y) {
                    return g().wrap(function (Z) {
                      for (;;) {
                        switch (Z.prev = Z.next) {
                          case 0:
                            try {
                              W ? (console.log("".concat(JSON.stringify(W))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(Y).notice);
                            } catch (a0) {
                              $.logErr(a0, X);
                            } finally {
                              Q();
                            }
                          case 1:
                          case "end":
                            return Z.stop();
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
              return O.stop();
          }
        }
      }, N);
    }));
    return J.apply(this, arguments);
  }
  function K(M) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function O(P) {
      return g().wrap(function (Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              if (!$.isNode()) {
                Q.next = 5;
                break;
              }
              Q.next = 3;
              return notify.sendNotify($.name, P);
            case 3:
              Q.next = 6;
              break;
            case 5:
              $.msg($.name, "", P);
            case 6:
            case "end":
              return Q.stop();
          }
        }
      }, O);
    }));
    return L.apply(this, arguments);
  }
  i(g().mark(function M() {
    return g().wrap(function (O) {
      for (;;) {
        switch (O.prev = O.next) {
          case 0:
            O.next = 2;
            return I();
          case 2:
            O.next = 4;
            return q();
          case 4:
          case "end":
            return O.stop();
        }
      }
    }, M);
  }))().catch(function (N) {
    $.log(N);
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