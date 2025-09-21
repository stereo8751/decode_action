//Sun Sep 21 2025 11:04:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("同程挖宝");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(L) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (N) {
        {
          return typeof N;
        }
      } : function (N) {
        {
          return N && "function" == typeof Symbol && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N;
        }
      };
      return b(L);
    }
  }
  function c(L, M) {
    {
      var O = "undefined" != typeof Symbol && L[Symbol.iterator] || L["@@iterator"];
      if (!O) {
        {
          if (Array.isArray(L) || (O = d(L)) || M && L && "number" == typeof L.length) {
            {
              O && (L = O);
              var P = 0;
              var Q = function () {};
              return {
                s: Q,
                n: function () {
                  var V = {
                    done: true
                  };
                  return P >= L.length ? V : {
                    done: false,
                    value: L[P++]
                  };
                },
                e: function (V) {
                  {
                    throw V;
                  }
                },
                f: Q
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var R;
      var S = true;
      var T = false;
      return {
        s: function () {
          {
            O = O.call(L);
          }
        },
        n: function () {
          {
            var X = O.next();
            S = X.done;
            return X;
          }
        },
        e: function (W) {
          {
            T = true;
            R = W;
          }
        },
        f: function () {
          {
            try {
              S || null == O.return || O.return();
            } finally {
              {
                if (T) {
                  throw R;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(L, M) {
    {
      if (L) {
        {
          if ("string" == typeof L) {
            return f(L, M);
          }
          var P = {}.toString.call(L).slice(8, -1);
          "Object" === P && L.constructor && (P = L.constructor.name);
          return "Map" === P || "Set" === P ? Array.from(L) : "Arguments" === P || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P) ? f(L, M) : undefined;
        }
      }
    }
  }
  function f(L, M) {
    {
      (null == M || M > L.length) && (M = L.length);
      for (var N = 0, O = Array(M); N < M; N++) {
        O[N] = L[N];
      }
      return O;
    }
  }
  function g() {
    "use strict";

    var L = {
      pydXj: "tAsdz",
      eGxlH: "AEcGK",
      rreRv: function (an, ao, ap, aq, ar) {
        return an(ao, ap, aq, ar);
      },
      thTQV: "throw",
      gKshW: function (an, ao) {
        return an !== ao;
      },
      OQfJl: "YHWMf",
      fcVPQ: "LrzgY",
      UEjXN: " API请求失败，请检查网路重试",
      bCZnR: "end",
      stpmF: function (an, ao) {
        return an === ao;
      },
      geXUV: "lPaWl",
      vOlXM: "vBtuE",
      Xlwpg: function (an, ao) {
        return an === ao;
      },
      lKKqP: "KAPPc",
      FbglZ: function (an, ao) {
        return an(ao);
      },
      jWEWn: function (an, ao) {
        return an === ao;
      },
      rLycs: function (an, ao) {
        return an === ao;
      },
      TdwkW: function (an, ao) {
        return an === ao;
      },
      doFIB: "break",
      GLTtG: function (an, ao) {
        return an === ao;
      },
      YLwBQ: "return",
      tlNSu: "normal",
      wtqvx: function (an, ao) {
        return an(ao);
      },
      oSaTR: function (an, ao) {
        return an < ao;
      },
      KxHjr: "PXdKj",
      RGWNw: function (an, ao, ap, aq) {
        return an(ao, ap, aq);
      },
      XxWHd: function (an, ao) {
        return an === ao;
      },
      iBmJC: "vEDvB",
      uaXmH: function (an, ao) {
        return an === ao;
      },
      dwBNU: "next",
      pdtbh: "WcuKz",
      gbeHq: "KAtSW",
      IpFWl: "Generator is already running",
      FwkCG: function (an, ao) {
        return an === ao;
      },
      OzZPW: "zpjrR",
      oRuEb: "NuExB",
      FUETI: function (an, ao) {
        return an !== ao;
      },
      SjFLE: "ZpBhR",
      GyqTD: "HDoJJ",
      CLJLr: "MuzdI",
      kingP: "tKKXE",
      RWEET: function (an, ao, ap) {
        return an(ao, ap);
      },
      dhVsc: "LgZYx",
      xUnLy: "lbQgi",
      JYXOd: function (an, ao) {
        return an === ao;
      },
      CVhdY: function (an, ao) {
        return an === ao;
      },
      bqGVb: "WMRsG",
      XcGMa: function (an, ao) {
        return an === ao;
      },
      EItAK: function (an, ao) {
        return an !== ao;
      },
      EUzRy: "hdwHe",
      SXaQI: "VrdQQ",
      iFZiW: function (an, ao) {
        return an === ao;
      },
      DbdIv: function (an, ao) {
        return an == ao;
      },
      DcAUX: function (an, ao) {
        return an !== ao;
      },
      LHzFK: "HqQYf",
      iGKZH: "noLgh",
      TylXz: "Utils_Code",
      jPnlZ: function (an, ao) {
        return an(ao);
      },
      fxCYB: function (an) {
        return an();
      },
      VnWaP: "ufSOo",
      FeWoi: "root",
      pQXmp: "function",
      ASqfo: function (an, ao) {
        return an !== ao;
      },
      nPgSn: function (an, ao) {
        return an == ao;
      },
      DODPE: "symbol",
      xyGHQ: function (an, ao) {
        return an < ao;
      },
      yhlLM: function (an, ao) {
        return an + ao;
      },
      LSFgx: function (an, ao) {
        return an === ao;
      },
      ZNJxP: "xJwaJ",
      fOoMx: function (an, ao) {
        return an == ao;
      },
      iDvQI: "GeneratorFunction",
      FQPeS: "njTTe",
      JkzhM: function (an, ao) {
        return an == ao;
      },
      aVlET: function (an, ao) {
        return an === ao;
      },
      aBlLn: function (an, ao) {
        return an !== ao;
      },
      sdies: "RXOEZ",
      Fjbab: "TCyGc",
      CkySJ: "string",
      UDbic: function (an, ao, ap) {
        return an(ao, ap);
      },
      IMBMf: "Object",
      FARbR: "Map",
      Ikzcb: "Set",
      DoUpA: "Arguments",
      OtkFB: function (an, ao, ap) {
        return an(ao, ap);
      },
      NelWZ: function (an, ao) {
        return an === ao;
      },
      lgFGi: "SFspd",
      ISyAu: function (an, ao) {
        return an === ao;
      },
      CYrmF: "nTIho",
      ObpOB: "HQxkE",
      yTCVp: "QgqBi",
      IFSBn: function (an, ao) {
        return an !== ao;
      },
      bYoij: "SUAxK",
      IruYN: "mcWtk",
      DYOPj: function (an, ao) {
        return an in ao;
      },
      ePbLx: "AMfXQ",
      Krkmq: function (an, ao) {
        return an === ao;
      },
      pFtWs: function (an, ao) {
        return an === ao;
      },
      IQvbf: function (an, ao) {
        return an(ao);
      },
      AzFjJ: function (an, ao) {
        return an(ao);
      },
      ePCet: function (an) {
        return an();
      },
      QcCNj: "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      OYSmx: function (an, ao) {
        return an == ao;
      },
      dbsLb: "UqTeT",
      aMJLg: "(((.+)+)+)+$",
      GdpgN: function (an, ao) {
        return an !== ao;
      },
      FVntB: "QWzTv",
      aYCfr: "JhEUL",
      PBEik: function (an, ao) {
        return an(ao);
      },
      FxVad: function (an, ao) {
        return an <= ao;
      },
      MbihV: "jLSWn",
      WePia: "catchLoc",
      NLgtP: function (an, ao) {
        return an && ao;
      },
      QPHJI: "oHSyW",
      ESzSn: function (an, ao, ap) {
        return an(ao, ap);
      },
      gpmZN: function (an, ao) {
        return an(ao);
      },
      UcMQg: function (an, ao) {
        return an !== ao;
      },
      klsPO: "ExzRH",
      MCANO: "PXvLj",
      rOEzn: "sIWvH",
      FiDzM: function (an, ao) {
        return an(ao);
      },
      LBrfB: "MJuvv",
      kcISZ: "JxGQZ",
      DcswG: function (an, ao) {
        return an - ao;
      },
      WIEDB: function (an, ao) {
        return an >= ao;
      },
      WiEIZ: function (an, ao) {
        return an !== ao;
      },
      liLBv: "jtEeq",
      IRcYl: "REtUk",
      aEsFk: "finallyLoc",
      ezLGT: function (an, ao) {
        return an < ao;
      },
      ZKmGP: "zMhOy",
      CMTvR: "ejuIJ",
      hzHCH: "continue",
      vSHaR: "qlRiW",
      bUYMI: "GRBSG",
      Dvtuz: function (an, ao) {
        return an === ao;
      },
      neRJm: function (an, ao) {
        return an === ao;
      },
      bphkx: function (an, ao) {
        return an === ao;
      },
      floPv: "YnYNH",
      ReGcl: "ZsJxY",
      Rcexy: "BAFqY",
      pfvpW: function (an, ao) {
        return an === ao;
      },
      UNPzF: function (an, ao) {
        return an(ao);
      },
      jdEVo: function (an, ao) {
        return an !== ao;
      },
      hyJwM: "DcDYn"
    };
    g = function () {
      return O;
    };
    var M;
    var O = {
      wrap: a1
    };
    var Q = Object.prototype;
    var U = Q.hasOwnProperty;
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
        var as = {
          value: ap,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(an, ao, as);
        return an[ao];
      }
    }
    try {
      {
        a0({}, "");
      }
    } catch (ao) {
      {
        a0 = function (aq, ar, as) {
          return aq[ar] = as;
        };
      }
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
        } catch (av) {
          {
            var at = {
              type: "throw",
              arg: av
            };
            return at;
          }
        }
      }
    }
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
    ad && ad !== Q && U.call(ad, X) && (ab = ad);
    aa.prototype = a8.prototype = Object.create(ab);
    var ae = aa.prototype;
    function af(aq) {
      {
        ["next", "throw", "return"].forEach(function (as) {
          {
            a0(aq, as, function (au) {
              {
                return this._invoke(as, au);
              }
            });
          }
        });
      }
    }
    function ag(aq, ar) {
      {
        function au(av, aw, ax, ay) {
          {
            var aA = a2(aq[av], aq, aw);
            if ("throw" !== aA.type) {
              {
                var aB = aA.arg;
                var aC = aB.value;
                return aC && "object" == b(aC) && U.call(aC, "__await") ? ar.resolve(aC.__await).then(function (aE) {
                  {
                    au("next", aE, ax, ay);
                  }
                }, function (aE) {
                  au("throw", aE, ax, ay);
                }) : ar.resolve(aC).then(function (aE) {
                  {
                    aB.value = aE;
                    ax(aB);
                  }
                }, function (aE) {
                  return au("throw", aE, ax, ay);
                });
              }
            }
            ay(aA.arg);
          }
        }
        var at;
        V(this, "_invoke", {
          value: function (av, aw) {
            {
              function ay() {
                {
                  return new ar(function (aA, aB) {
                    {
                      au(av, aw, aA, aB);
                    }
                  });
                }
              }
              return at = at ? at.then(ay, ay) : ay();
            }
          }
        });
      }
    }
    function ah(aq, ar, as) {
      {
        var au = a3;
        return function (aw, ax) {
          {
            if (au === a5) {
              throw Error("Generator is already running");
            }
            if (au === a6) {
              {
                if ("throw" === aw) {
                  throw ax;
                }
                var az = {
                  value: M,
                  done: true
                };
                return az;
              }
            }
            for (as.method = aw, as.arg = ax;;) {
              {
                var aA = as.delegate;
                if (aA) {
                  {
                    var aB = ai(aA, as);
                    if (aB) {
                      {
                        if (aB === a7) {
                          continue;
                        }
                        return aB;
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
                var aC = a2(aq, ar, as);
                if ("normal" === aC.type) {
                  {
                    if (au = as.done ? a6 : a4, aC.arg === a7) {
                      continue;
                    }
                    var aD = {
                      value: aC.arg,
                      done: as.done
                    };
                    return aD;
                  }
                }
                "throw" === aC.type && (au = a6, as.method = "throw", as.arg = aC.arg);
              }
            }
          }
        };
      }
    }
    function ai(aq, ar) {
      {
        var as = ar.method;
        var at = aq.iterator[as];
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
        var as = {
          tryLoc: "root"
        };
        this.tryEntries = [as];
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
                var au = function aw() {
                  {
                    for (; ++at < aq.length;) {
                      if (U.call(aq, at)) {
                        aw.value = aq[at];
                        aw.done = false;
                        return aw;
                      }
                    }
                    aw.value = M;
                    aw.done = true;
                    return aw;
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
    O.isGeneratorFunction = function (aq) {
      {
        var as = "function" == typeof aq && aq.constructor;
        return !!as && (as === a9 || "GeneratorFunction" === (as.displayName || as.name));
      }
    };
    O.mark = function (aq) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aq, aa) : (aq.__proto__ = aa, a0(aq, Z, "GeneratorFunction"));
        aq.prototype = Object.create(ae);
        return aq;
      }
    };
    O.awrap = function (aq) {
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
    O.AsyncIterator = ag;
    O.async = function (aq, ar, as, at, au) {
      {
        undefined === au && (au = Promise);
        var av = new ag(a1(aq, ar, as, at), au);
        return O.isGeneratorFunction(ar) ? av : av.next().then(function (ax) {
          {
            return ax.done ? ax.value : av.next();
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
    O.keys = function (aq) {
      {
        var at = Object(aq);
        var au = [];
        for (var av in at) au.push(av);
        au.reverse();
        return function ax() {
          {
            for (; au.length;) {
              {
                var ay = au.pop();
                if (ay in at) {
                  ax.value = ay;
                  ax.done = false;
                  return ax;
                }
              }
            }
            ax.done = true;
            return ax;
          }
        };
      }
    };
    O.values = am;
    al.prototype = {
      constructor: al,
      reset: function (aq) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = M, this.done = false, this.delegate = null, this.method = "next", this.arg = M, this.tryEntries.forEach(ak), !aq) {
            for (var ar in this) "t" === ar.charAt(0) && U.call(this, ar) && !isNaN(+ar.slice(1)) && (this[ar] = M);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aq = this.tryEntries[0].completion;
          if ("throw" === aq.type) {
            throw aq.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aq) {
        {
          if (this.done) {
            throw aq;
          }
          var ar = this;
          function ay(az, aA) {
            {
              au.type = "throw";
              au.arg = aq;
              ar.next = az;
              aA && (ar.method = "next", ar.arg = M);
              return !!aA;
            }
          }
          for (var as = this.tryEntries.length - 1; as >= 0; --as) {
            {
              var at = this.tryEntries[as];
              var au = at.completion;
              if ("root" === at.tryLoc) {
                return ay("end");
              }
              if (at.tryLoc <= this.prev) {
                {
                  var av = U.call(at, "catchLoc");
                  var aw = U.call(at, "finallyLoc");
                  if (av && aw) {
                    {
                      if (this.prev < at.catchLoc) {
                        return ay(at.catchLoc, true);
                      }
                      if (this.prev < at.finallyLoc) {
                        return ay(at.finallyLoc);
                      }
                    }
                  } else {
                    if (av) {
                      {
                        if (this.prev < at.catchLoc) {
                          return ay(at.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aw) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < at.finallyLoc) {
                          return ay(at.finallyLoc);
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
          for (var as = this.tryEntries.length - 1; as >= 0; --as) {
            {
              var at = this.tryEntries[as];
              if (at.tryLoc === aq) {
                {
                  var au = at.completion;
                  if ("throw" === au.type) {
                    {
                      var av = au.arg;
                      ak(at);
                    }
                  }
                  return av;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
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
    return O;
  }
  function h(L, M, N, O, P, Q, R) {
    {
      try {
        {
          var T = L[Q](R);
          var U = T.value;
        }
      } catch (X) {
        {
          return void N(X);
        }
      }
      T.done ? M(U) : Promise.resolve(U).then(O, P);
    }
  }
  function i(L) {
    return function () {
      var O = this;
      var P = arguments;
      return new Promise(function (Q, R) {
        var T = L.apply(O, P);
        function U(W) {
          h(T, Q, R, U, V, "next", W);
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
    {
      r = i(g().mark(function M() {
        var O = {
          OXfdA: "[object Generator]",
          fEChv: "throw",
          mSwPQ: function (ak, al) {
            return ak(al);
          }
        };
        {
          var Q;
          var R;
          var T;
          var U;
          var V;
          var W;
          var X;
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
          return g().wrap(function (ak) {
            var al = {
              odWMC: function (am, an) {
                return am === an;
              },
              AuQMo: "throw",
              dcsfD: function (am, an) {
                return am(an);
              },
              BZXOQ: function (am, an) {
                return am == an;
              },
              WQuut: function (am, an) {
                return am === an;
              },
              VIGMX: function (am, an) {
                return am(an);
              },
              xgqEd: function (am, an) {
                return am === an;
              },
              rIASQ: "return",
              TVoPz: function (am, an, ao) {
                return am(an, ao);
              },
              DaUcF: function (am, an) {
                return am !== an;
              },
              FNQKc: function (am, an) {
                return am + an;
              },
              RMIhf: "The iterator does not provide a '",
              uwBxr: "' method",
              VpOIY: function (am, an, ao, ap) {
                return am(an, ao, ap);
              },
              TjbwZ: function (am, an) {
                return am === an;
              },
              udyMM: "next",
              zxHVe: "iterator result is not an object",
              DNmET: " API请求失败，请检查网路重试"
            };
            {
              for (;;) {
                switch (ak.prev = ak.next) {
                  case 0:
                    ak.next = 2;
                    return F();
                  case 2:
                    Utils = ak.sent;
                    Q = c(m);
                    ak.prev = 4;
                    Q.s();
                  case 6:
                    if ((R = Q.n()).done) {
                      {
                        ak.next = 96;
                        break;
                      }
                    }
                    T = R.value;
                    ak.prev = 8;
                    n = T.userId;
                    o = T.token;
                    console.log("用户：".concat(n, "开始任务"));
                    ak.next = 14;
                    return A({
                      token: j,
                      type: "TCWB",
                      userId: n
                    });
                  case 14:
                    if (X = ak.sent, 200 == (null == X ? undefined : X.code)) {
                      {
                        ak.next = 18;
                        break;
                      }
                    }
                    console.log(null == X ? undefined : X.msg);
                    return ak.abrupt("continue", 94);
                  case 18:
                    ak.next = 20;
                    return u("/list", {
                      activityCode: "2025_NationalDay1"
                    });
                  case 20:
                    Y = ak.sent;
                    Z = c(null == Y || null === (V = Y.data) || undefined === V ? undefined : V.list);
                    ak.prev = 22;
                    Z.s();
                  case 24:
                    if ((a0 = Z.n()).done) {
                      {
                        ak.next = 36;
                        break;
                      }
                    }
                    if (a1 = a0.value, console.log("任务：".concat(null == a1 ? undefined : a1.title)), "FINISH" != (null == a1 ? undefined : a1.stateEnum)) {
                      {
                        ak.next = 30;
                        break;
                      }
                    }
                    console.log("已完成");
                    return ak.abrupt("continue", 34);
                  case 30:
                    ak.next = 32;
                    return u("/finish", {
                      activityCode: "2025_NationalDay1",
                      taskId: null == a1 ? undefined : a1.id
                    });
                  case 32:
                    a2 = ak.sent;
                    console.log("完成任务：".concat(null == a2 ? undefined : a2.message));
                  case 34:
                    ak.next = 24;
                    break;
                  case 36:
                    ak.next = 41;
                    break;
                  case 38:
                    ak.prev = 38;
                    ak.t0 = ak.catch(22);
                    Z.e(ak.t0);
                  case 41:
                    ak.prev = 41;
                    Z.f();
                    return ak.finish(41);
                  case 44:
                    ak.next = 46;
                    return w("/game_play/mining/detail", {
                      activityCode: "2025_NationalDay1"
                    });
                  case 46:
                    a3 = ak.sent;
                    console.log("剩余抽奖次数：".concat(null == a3 || null === (U = a3.data) || undefined === U ? undefined : U.usableChances));
                    a4 = 0;
                  case 49:
                    if (!(a4 < (null == a3 || null === (a5 = a3.data) || undefined === a5 ? undefined : a5.usableChances))) {
                      {
                        ak.next = 57;
                        break;
                      }
                    }
                    ak.next = 52;
                    return w("/game_play/component/lottery", {
                      activityCode: "2025_NationalDay1"
                    });
                  case 52:
                    a8 = ak.sent;
                    console.log("第".concat(a4 + 1, "次抽奖获得：").concat(null == a8 || null === (a6 = a8.data) || undefined === a6 ? undefined : a6.price).concat(null == a8 || null === (a7 = a8.data) || undefined === a7 ? undefined : a7.title));
                  case 54:
                    a4++;
                    ak.next = 49;
                    break;
                  case 57:
                    ak.next = 59;
                    return w("/exchange/index", {
                      actCode: "2025_NationalDay2"
                    });
                  case 59:
                    a9 = ak.sent;
                    aa = c(null == a9 || null === (W = a9.data) || undefined === W || null === (W = W.exchangeInfo) || undefined === W ? undefined : W.rewards);
                    ak.prev = 61;
                    aa.s();
                  case 63:
                    if ((ab = aa.n()).done) {
                      {
                        ak.next = 81;
                        break;
                      }
                    }
                    if (ac = ab.value, "现金奖励" != (null == ac ? undefined : ac.rewardName)) {
                      {
                        ak.next = 79;
                        break;
                      }
                    }
                    ak.next = 68;
                    return w("/exchange/receive", {
                      rewardId: null == ac ? undefined : ac.rewardId,
                      poolId: null == ac ? undefined : ac.poolId,
                      actCode: "2025_NationalDay2"
                    });
                  case 68:
                    if (ad = ak.sent, 2200 != (null == ad ? undefined : ad.code)) {
                      {
                        ak.next = 78;
                        break;
                      }
                    }
                    console.log("兑换结果：".concat(null == ad || null === (ae = ad.data) || undefined === ae ? undefined : ae.price).concat(null == ad || null === (af = ad.data) || undefined === af ? undefined : af.title));
                    ak.next = 73;
                    return y("/receive", {
                      receiveId: null == ad || null === (ag = ad.data) || undefined === ag ? undefined : ag.receiveId
                    });
                  case 73:
                    aj = ak.sent;
                    console.log("体现结果：".concat(null == aj ? undefined : aj.message));
                    p += "用户：".concat(n, " 奖品：").concat(null == ad || null === (ah = ad.data) || undefined === ah ? undefined : ah.price).concat(null == ad || null === (ai = ad.data) || undefined === ai ? undefined : ai.title, " 体现结果：").concat(null == aj ? undefined : aj.message, "\n");
                    ak.next = 79;
                    break;
                  case 78:
                    console.log("兑换结果：".concat(null == ad ? undefined : ad.message));
                  case 79:
                    ak.next = 63;
                    break;
                  case 81:
                    ak.next = 86;
                    break;
                  case 83:
                    ak.prev = 83;
                    ak.t1 = ak.catch(61);
                    aa.e(ak.t1);
                  case 86:
                    ak.prev = 86;
                    aa.f();
                    return ak.finish(86);
                  case 89:
                    ak.next = 94;
                    break;
                  case 91:
                    ak.prev = 91;
                    ak.t2 = ak.catch(8);
                    console.log(ak.t2);
                  case 94:
                    ak.next = 6;
                    break;
                  case 96:
                    ak.next = 101;
                    break;
                  case 98:
                    ak.prev = 98;
                    ak.t3 = ak.catch(4);
                    Q.e(ak.t3);
                  case 101:
                    ak.prev = 101;
                    Q.f();
                    return ak.finish(101);
                  case 104:
                    if (!p) {
                      {
                        ak.next = 107;
                        break;
                      }
                    }
                    ak.next = 107;
                    return J(p);
                  case 107:
                  case "end":
                    return ak.stop();
                }
              }
            }
          }, M, null, [[4, 98, 101, 104], [8, 91], [22, 38, 41, 44], [61, 83, 86, 89]]);
        }
      }));
      return r.apply(this, arguments);
    }
  }
  function s() {
    {
      return t.apply(this, arguments);
    }
  }
  function t() {
    t = i(g().mark(function M() {
      var O;
      var P;
      var Q;
      var R;
      var S;
      return g().wrap(function (T) {
        for (;;) {
          switch (T.prev = T.next) {
            case 0:
              if (O = $.toObj($response.body), O) {
                {
                  T.next = 3;
                  break;
                }
              }
              return T.abrupt("return");
            case 3:
              if (P = O.response.body.memberId, Q = O.response.body.memberIdNew, R = {
                userId: P,
                token: Q
              }, S = m.findIndex(function (W) {
                {
                  return W.openId == R.openId;
                }
              }), -1 === S) {
                T.next = 17;
                break;
              }
              if (m[S].token != R.token) {
                T.next = 12;
                break;
              }
              return T.abrupt("return");
            case 12:
              m[S] = R;
              console.log(R.token);
              $.msg($.name, "🎉用户".concat(R.userId, "更新token成功!"), "");
            case 15:
              T.next = 20;
              break;
            case 17:
              m.push(R);
              console.log(R.token);
              $.msg($.name, "🎉新增用户".concat(R.userId, "成功!"), "");
            case 20:
              $.setjson(m, "TCWB");
            case 21:
            case "end":
              return T.stop();
          }
        }
      }, M);
    }));
    return t.apply(this, arguments);
  }
  function u(L) {
    return v.apply(this, arguments);
  }
  function v() {
    v = i(g().mark(function M(N) {
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
                var W = {
                  url: "https://tcmobileapi.17usoft.com/nimbus/taskComponent".concat(N),
                  headers: {
                    "User-Agent": "%E5%90%8C%E7%A8%8B%E6%97%85%E8%A1%8C/11.2.21.11003 CFNetwork/1399 Darwin/22.1.0",
                    Connection: "keep-alive",
                    Accept: "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Content-Type": "application/json",
                    channel: "1",
                    apptoken: o,
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "os-type": "1"
                  },
                  body: JSON.stringify(P)
                };
                $.post(W, function () {
                  var Y = i(g().mark(function Z(a0, a1, a2) {
                    return g().wrap(function (a3) {
                      for (;;) {
                        switch (a3.prev = a3.next) {
                          case 0:
                            if (a3.prev = 0, !a0) {
                              a3.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a0)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a3.next = 9;
                            break;
                          case 6:
                            a3.next = 8;
                            return $.wait(2000);
                          case 8:
                            V(JSON.parse(a2));
                          case 9:
                            a3.next = 14;
                            break;
                          case 11:
                            a3.prev = 11;
                            a3.t0 = a3.catch(0);
                            $.logErr(a3.t0, a1);
                          case 14:
                            a3.prev = 14;
                            V();
                            return a3.finish(14);
                          case 17:
                          case "end":
                            return a3.stop();
                        }
                      }
                    }, Z, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a0, a1, a2) {
                    return Y.apply(this, arguments);
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
      }, M);
    }));
    return v.apply(this, arguments);
  }
  function w(L) {
    return x.apply(this, arguments);
  }
  function x() {
    x = i(g().mark(function M(N) {
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
              return new Promise(function (V) {
                var X = {
                  url: "https://app.17u.cn/activity".concat(N),
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
                    key: E(Q),
                    data: D(Q, P),
                    sv: "2"
                  })
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
      }, M);
    }));
    return x.apply(this, arguments);
  }
  function y(L) {
    return z.apply(this, arguments);
  }
  function z() {
    z = i(g().mark(function M(N) {
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
                  url: "https://app.17u.cn/reward/client".concat(N),
                  headers: {
                    "User-Agent": "%E5%90%8C%E7%A8%8B%E6%97%85%E8%A1%8C/11.2.21.11003 CFNetwork/1399 Darwin/22.1.0",
                    Connection: "keep-alive",
                    Accept: "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Content-Type": "application/json",
                    channel: "1",
                    apptoken: o,
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "os-type": "1"
                  },
                  body: JSON.stringify(P)
                };
                $.post(X, function () {
                  var Y = i(g().mark(function Z(a0, a1, a2) {
                    return g().wrap(function (a4) {
                      for (;;) {
                        switch (a4.prev = a4.next) {
                          case 0:
                            if (a4.prev = 0, !a0) {
                              a4.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a0)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a4.next = 9;
                            break;
                          case 6:
                            a4.next = 8;
                            return $.wait(2000);
                          case 8:
                            V(JSON.parse(a2));
                          case 9:
                            a4.next = 14;
                            break;
                          case 11:
                            a4.prev = 11;
                            a4.t0 = a4.catch(0);
                            $.logErr(a4.t0, a1);
                          case 14:
                            a4.prev = 14;
                            V();
                            return a4.finish(14);
                          case 17:
                          case "end":
                            return a4.stop();
                        }
                      }
                    }, Z, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a0, a1, a2) {
                    return Y.apply(this, arguments);
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
      }, M);
    }));
    return z.apply(this, arguments);
  }
  function A(L) {
    return B.apply(this, arguments);
  }
  function B() {
    B = i(g().mark(function M(N) {
      return g().wrap(function (P) {
        for (;;) {
          switch (P.prev = P.next) {
            case 0:
              return P.abrupt("return", new Promise(function (Q) {
                var S = {
                  url: "".concat(k, "/token/verify"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(N)
                };
                $.post(S, function () {
                  var U = i(g().mark(function V(W, X, Y) {
                    return g().wrap(function (Z) {
                      for (;;) {
                        switch (Z.prev = Z.next) {
                          case 0:
                            try {
                              W ? (console.log("".concat(JSON.stringify(W))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : Q(JSON.parse(Y));
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
              return P.stop();
          }
        }
      }, M);
    }));
    return B.apply(this, arguments);
  }
  function C() {
    var L = Utils.createCryptoJS();
    var M = L.lib.WordArray.random(16).toString();
    return M.substring(0, 8) + "-" + M.substring(8, 12) + "-" + M.substring(12, 16) + "-" + M.substring(16, 20) + "-" + M.substring(20, 32);
  }
  function D(L, M) {
    var N = Utils.createCryptoJS();
    L = N.enc.Utf8.parse(L);
    var O = N.AES.encrypt(N.enc.Utf8.parse(JSON.stringify(M)), L, {
      mode: N.mode.ECB,
      padding: N.pad.Pkcs7
    });
    return N.enc.Base64.stringify(O.ciphertext);
  }
  function E(L) {
    var M = new (Utils.loadJSEncrypt())();
    M.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyW+lJJd1Iog0QNCIJnHN8YajxYj4odMBVBaXIEk4ES0VcrhSjZ3LpzXDQk9mTeh1om54sLrluduOxIxJU6G3g53UnKEl7Ylce9KrAJUxkbSqx+7GlOxUsXdBQQpS6Zn9AlSGMQF+GFsn6T7g7wlnyLWuwSCfmrNuZyYcVAyTdKEbCKWBZejKCDDCOZR5tYkuS2aYjT4CrED6gmGfyCSP9eBNgq2VnKR6MgT+fLv5R6mKPaUsbJHHx1OvYhXl5fxA2yNQSZMtfhoNEOtivZ8B6f971viU4d9fjSDl+OhRFMpp5ZjS1PzRwD49YHLRnGSU8udEivQzJ63O64pQB/W/qQIDAQAB-----END PUBLIC KEY-----");
    return M.encrypt(L);
  }
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function L() {
      var N;
      return g().wrap(function O(P) {
        for (;;) {
          switch (P.prev = P.next) {
            case 0:
              if (N = $.getdata("Utils_Code") || "", !N || !Object.keys(N).length) {
                P.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(N);
              return P.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return P.abrupt("return", new Promise(function () {
                var S = i(g().mark(function T(U) {
                  return g().wrap(function V(W) {
                    for (;;) {
                      switch (W.prev = W.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (Y) {
                            $.setdata(Y, "Utils_Code");
                            eval(Y);
                            console.log("✅ Utils加载成功, 请继续");
                            U(creatUtils());
                          });
                        case 1:
                        case "end":
                          return W.stop();
                      }
                    }
                  }, T);
                }));
                return function (U) {
                  return S.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return P.stop();
          }
        }
      }, L);
    }));
    return G.apply(this, arguments);
  }
  function H() {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function L() {
      return g().wrap(function (N) {
        for (;;) {
          switch (N.prev = N.next) {
            case 0:
              return N.abrupt("return", new Promise(function (P) {
                var R = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(R, function () {
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
                              P();
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
              return N.stop();
          }
        }
      }, L);
    }));
    return I.apply(this, arguments);
  }
  function J(L) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function M(N) {
      return g().wrap(function (O) {
        for (;;) {
          switch (O.prev = O.next) {
            case 0:
              if (!$.isNode()) {
                O.next = 5;
                break;
              }
              O.next = 3;
              return notify.sendNotify($.name, N);
            case 3:
              O.next = 6;
              break;
            case 5:
              $.msg($.name, "", N);
            case 6:
            case "end":
              return O.stop();
          }
        }
      }, M);
    }));
    return K.apply(this, arguments);
  }
  i(g().mark(function L() {
    return g().wrap(function (N) {
      for (;;) {
        switch (N.prev = N.next) {
          case 0:
            if ("undefined" == typeof $request || "OPTIONS" == $request.method) {
              N.next = 5;
              break;
            }
            N.next = 3;
            return s();
          case 3:
            N.next = 9;
            break;
          case 5:
            N.next = 7;
            return H();
          case 7:
            N.next = 9;
            return q();
          case 9:
          case "end":
            return N.stop();
        }
      }
    }, L);
  }))().catch(function (M) {
    $.log(M);
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