//Mon Mar 02 2026 06:51:21 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("慈晓");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(R) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (T) {
        return typeof T;
      } : function (T) {
        return T && "function" == typeof Symbol && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
      };
      return b(R);
    }
  }
  function c(R, S) {
    {
      var U = "undefined" != typeof Symbol && R[Symbol.iterator] || R["@@iterator"];
      if (!U) {
        {
          if (Array.isArray(R) || (U = d(R)) || S && R && "number" == typeof R.length) {
            {
              U && (R = U);
              var V = 0;
              var W = function () {};
              return {
                s: W,
                n: function () {
                  {
                    var a3 = {
                      done: true
                    };
                    return V >= R.length ? a3 : {
                      done: false,
                      value: R[V++]
                    };
                  }
                },
                e: function (a2) {
                  {
                    throw a2;
                  }
                },
                f: W
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var X;
      var Y = true;
      var Z = false;
      return {
        s: function () {
          U = U.call(R);
        },
        n: function () {
          {
            var a4 = U.next();
            Y = a4.done;
            return a4;
          }
        },
        e: function (a3) {
          Z = true;
          X = a3;
        },
        f: function () {
          {
            try {
              {
                Y || null == U.return || U.return();
              }
            } finally {
              {
                if (Z) {
                  throw X;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(R, S) {
    {
      if (R) {
        {
          if ("string" == typeof R) {
            return f(R, S);
          }
          var T = {}.toString.call(R).slice(8, -1);
          "Object" === T && R.constructor && (T = R.constructor.name);
          return "Map" === T || "Set" === T ? Array.from(R) : "Arguments" === T || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T) ? f(R, S) : undefined;
        }
      }
    }
  }
  function f(R, S) {
    {
      (null == S || S > R.length) && (S = R.length);
      for (var U = 0, V = Array(S); U < S; U++) {
        V[U] = R[U];
      }
      return V;
    }
  }
  function g() {
    "use strict";

    var T = {
      mDkso: "eRtZD",
      jtJkB: function (aq, ar, as, at) {
        return aq(ar, as, at);
      },
      JaZwb: "_invoke",
      cUcOW: function (aq, ar) {
        return aq !== ar;
      },
      KTkzD: "yuJVN",
      Pwksj: "SQMtf",
      VUouZ: "uOfhp",
      BsAZR: "BaoOC",
      obSoM: function (aq, ar) {
        return aq(ar);
      },
      AwnUQ: "try statement without catch or finally",
      ovNEN: "normal",
      jBDIO: "EisSD",
      OcgwS: "bEtrP",
      WXvWG: function (aq, ar) {
        return aq === ar;
      },
      zMgLh: "KtZaH",
      oLMDe: function (aq, ar) {
        return aq === ar;
      },
      ceIzU: "rPklm",
      yGnXY: "QGsdU",
      uDxZt: function (aq, ar) {
        return aq === ar;
      },
      VMRhB: "FZozO",
      nivHl: function (aq, ar) {
        return aq < ar;
      },
      CPAZf: function (aq, ar) {
        return aq * ar;
      },
      HUuyu: "0123456789abcdef",
      tOBWu: function (aq, ar) {
        return aq === ar;
      },
      QKwnx: "AEedn",
      XUZNY: "XVmYP",
      HynkY: function (aq, ar, as, at, au) {
        return aq(ar, as, at, au);
      },
      CEoHg: "next",
      UMrfV: "PDWAV",
      XtNer: "kzDwR",
      NZqhK: function (aq, ar) {
        return aq !== ar;
      },
      MuaqW: "throw",
      YoYJK: "zISCk",
      WdiEV: function (aq, ar) {
        return aq(ar);
      },
      xJeot: "__await",
      CbpfB: function (aq) {
        return aq();
      },
      QXgdr: function (aq, ar) {
        return aq + ar;
      },
      yNhDb: function (aq, ar) {
        return aq(ar);
      },
      bbEsz: "end",
      MoJIW: "exhEo",
      UBgiN: function (aq, ar) {
        return aq(ar);
      },
      nJfcv: "Generator is already running",
      fhzIh: "vMTwJ",
      ZGbxV: "vFRhq",
      mCITf: "FSpXA",
      veLpa: "PxVBf",
      cTtoG: "OYqCo",
      KmpzF: function (aq, ar) {
        return aq === ar;
      },
      ikTCu: "VZUZR",
      YOzMh: function (aq, ar) {
        return aq === ar;
      },
      wSyME: "return",
      kXyoq: function (aq, ar) {
        return aq === ar;
      },
      QlPHx: "KLCVc",
      rOjNP: function (aq, ar) {
        return aq === ar;
      },
      mwrBB: function (aq, ar) {
        return aq === ar;
      },
      GaRUc: function (aq, ar) {
        return aq(ar);
      },
      JCcSX: function (aq, ar) {
        return aq | ar;
      },
      bBasH: "Jmchz",
      vUwDs: "dykPl",
      jpXKM: function (aq, ar, as, at) {
        return aq(ar, as, at);
      },
      DoAZi: "INeSi",
      wdXLJ: "qKcVO",
      oNkMy: function (aq, ar, as, at, au, av, aw, ax) {
        return aq(ar, as, at, au, av, aw, ax);
      },
      imRUo: function (aq, ar) {
        return aq == ar;
      },
      dhxhf: " is not iterable",
      OGPhH: "KBRoW",
      JKEhA: function (aq, ar) {
        return aq === ar;
      },
      wzaec: "NLTng",
      hDDiI: function (aq, ar) {
        return aq == ar;
      },
      sTbAB: "function",
      CjUOq: "QShpX",
      pDzne: function (aq, ar, as, at, au, av, aw, ax) {
        return aq(ar, as, at, au, av, aw, ax);
      },
      IfkGh: "isbUI",
      KUhSm: function (aq, ar) {
        return aq == ar;
      },
      lPbBv: function (aq, ar) {
        return aq === ar;
      },
      fZniI: "GeneratorFunction",
      ebCnU: "lpfPU",
      ZkcDq: function (aq, ar) {
        return aq * ar;
      },
      Cgbjp: function (aq, ar) {
        return aq === ar;
      },
      palTr: "FxWtY",
      MQfCM: "QInQg",
      EKDgG: "MrSOP",
      vFlbJ: function (aq, ar) {
        return aq === ar;
      },
      Dwpft: function (aq, ar, as) {
        return aq(ar, as);
      },
      EhuIE: function (aq, ar) {
        return aq !== ar;
      },
      kvrmA: "The iterator does not provide a '",
      pKYhs: "' method",
      LqwqW: "iterator result is not an object",
      OqmkA: function (aq, ar, as, at, au) {
        return aq(ar, as, at, au);
      },
      FhEZt: "BMGTq",
      sRnka: "ATeFX",
      zCYer: function (aq, ar) {
        return aq === ar;
      },
      bxpYE: function (aq, ar) {
        return aq(ar);
      },
      hzZlA: function (aq, ar) {
        return aq === ar;
      },
      zyOmu: "orAAD",
      BjVTy: "catchLoc",
      CasJe: function (aq, ar) {
        return aq && ar;
      },
      EfqeT: function (aq, ar) {
        return aq < ar;
      },
      LeyaL: function (aq, ar) {
        return aq < ar;
      },
      llXqr: function (aq, ar) {
        return aq(ar);
      },
      BZwVq: function (aq, ar, as) {
        return aq(ar, as);
      },
      JJOeO: function (aq, ar, as, at) {
        return aq(ar, as, at);
      },
      tPsON: function (aq, ar) {
        return aq < ar;
      },
      bMQjW: function (aq, ar, as) {
        return aq(ar, as);
      },
      xseZi: function (aq, ar) {
        return aq === ar;
      },
      sofwU: "JMZdt",
      MfVxC: "uccGw",
      bFnln: function (aq, ar) {
        return aq - ar;
      },
      jEpDS: function (aq, ar) {
        return aq >= ar;
      },
      iScqI: function (aq, ar) {
        return aq === ar;
      },
      QRBYc: "eIBRT",
      neCPH: "root",
      DzvSq: function (aq, ar) {
        return aq <= ar;
      },
      PZGzn: "DfgRA",
      WZKNW: "finallyLoc",
      GzvXQ: function (aq, ar) {
        return aq && ar;
      },
      lcdLe: "BTMtH",
      CNmHa: function (aq, ar) {
        return aq < ar;
      },
      uqCvd: "OODqZ",
      ZZlbo: function (aq, ar) {
        return aq < ar;
      },
      CZXgv: "OLCvZ",
      aeCrm: "VxWpP",
      ljNki: function (aq, ar) {
        return aq(ar);
      },
      RJOWY: "(((.+)+)+)+$",
      lcOXM: "AdwLp",
      mucue: function (aq, ar) {
        return aq === ar;
      },
      vRqyX: "break",
      YBBCG: function (aq, ar) {
        return aq === ar;
      },
      kpPZS: function (aq, ar) {
        return aq in ar;
      },
      uBnnY: "VxATH",
      IegEO: function (aq, ar) {
        return aq >= ar;
      },
      jRPCL: "fsGCT",
      qTTMN: "zaquV",
      HRYqn: function (aq, ar) {
        return aq !== ar;
      },
      XhYAj: "hdXbN",
      VZJwV: function (aq, ar) {
        return aq(ar);
      },
      jPGgz: "illegal catch attempt",
      fBEWg: "myhUE",
      NVZDf: function (aq, ar) {
        return aq(ar);
      }
    };
    g = function () {
      {
        return V;
      }
    };
    var U;
    var V = {};
    var W = Object.prototype;
    var X = W.hasOwnProperty;
    var Y = Object.defineProperty || function (aq, ar, as) {
      {
        aq[ar] = as.value;
      }
    };
    var Z = "function" == typeof Symbol ? Symbol : {};
    var a0 = Z.iterator || "@@iterator";
    var a1 = Z.asyncIterator || "@@asyncIterator";
    var a2 = Z.toStringTag || "@@toStringTag";
    function a3(aq, ar, as) {
      {
        var at = {
          value: as,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aq, ar, at);
        return aq[ar];
      }
    }
    try {
      {
        a3({}, "");
      }
    } catch (ar) {
      a3 = function (at, au, av) {
        return at[au] = av;
      };
    }
    function a4(at, au, av, aw) {
      {
        var ax = au && au.prototype instanceof ab ? au : ab;
        var ay = Object.create(ax.prototype);
        var az = new ao(aw || []);
        Y(ay, "_invoke", {
          value: ak(at, av, az)
        });
        return ay;
      }
    }
    function a5(at, au, av) {
      {
        try {
          {
            return {
              type: "normal",
              arg: at.call(au, av)
            };
          }
        } catch (aA) {
          {
            var ay = {
              type: "throw",
              arg: aA
            };
            return ay;
          }
        }
      }
    }
    V.wrap = a4;
    var a6 = "suspendedStart";
    var a7 = "suspendedYield";
    var a8 = "executing";
    var a9 = "completed";
    var aa = {};
    function ab() {}
    function ac() {}
    function ad() {}
    var ae = {};
    a3(ae, a0, function () {
      {
        return this;
      }
    });
    var af = Object.getPrototypeOf;
    var ag = af && af(af(ap([])));
    ag && ag !== W && X.call(ag, a0) && (ae = ag);
    ad.prototype = ab.prototype = Object.create(ae);
    var ah = ad.prototype;
    function ai(at) {
      {
        ["next", "throw", "return"].forEach(function (av) {
          {
            a3(at, av, function (ay) {
              return this._invoke(av, ay);
            });
          }
        });
      }
    }
    function aj(at, au) {
      {
        function ay(az, aA, aB, aC) {
          {
            var aE = a5(at[az], at, aA);
            if ("throw" !== aE.type) {
              {
                var aF = aE.arg;
                var aG = aF.value;
                return aG && "object" == b(aG) && X.call(aG, "__await") ? au.resolve(aG.__await).then(function (aH) {
                  {
                    ay("next", aH, aB, aC);
                  }
                }, function (aH) {
                  {
                    ay("throw", aH, aB, aC);
                  }
                }) : au.resolve(aG).then(function (aH) {
                  {
                    aF.value = aH;
                    aB(aF);
                  }
                }, function (aH) {
                  return ay("throw", aH, aB, aC);
                });
              }
            }
            aC(aE.arg);
          }
        }
        var aw;
        Y(this, "_invoke", {
          value: function (az, aA) {
            {
              function aC() {
                {
                  return new au(function (aD, aE) {
                    {
                      ay(az, aA, aD, aE);
                    }
                  });
                }
              }
              return aw = aw ? aw.then(aC, aC) : aC();
            }
          }
        });
      }
    }
    function ak(at, au, av) {
      {
        var ax = a6;
        return function (az, aA) {
          {
            if (ax === a8) {
              throw Error("Generator is already running");
            }
            if (ax === a9) {
              {
                if ("throw" === az) {
                  throw aA;
                }
                var aC = {
                  value: U,
                  done: true
                };
                return aC;
              }
            }
            for (av.method = az, av.arg = aA;;) {
              {
                var aD = av.delegate;
                if (aD) {
                  {
                    var aE = al(aD, av);
                    if (aE) {
                      {
                        if (aE === aa) {
                          continue;
                        }
                        return aE;
                      }
                    }
                  }
                }
                if ("next" === av.method) {
                  av.sent = av._sent = av.arg;
                } else {
                  if ("throw" === av.method) {
                    {
                      if (ax === a6) {
                        throw ax = a9, av.arg;
                      }
                      av.dispatchException(av.arg);
                    }
                  } else {
                    "return" === av.method && av.abrupt("return", av.arg);
                  }
                }
                ax = a8;
                var aF = a5(at, au, av);
                if ("normal" === aF.type) {
                  {
                    if (ax = av.done ? a9 : a7, aF.arg === aa) {
                      continue;
                    }
                    var aG = {
                      value: aF.arg,
                      done: av.done
                    };
                    return aG;
                  }
                }
                "throw" === aF.type && (ax = a9, av.method = "throw", av.arg = aF.arg);
              }
            }
          }
        };
      }
    }
    function al(at, au) {
      {
        var az = au.method;
        var aA = at.iterator[az];
        if (aA === U) {
          au.delegate = null;
          "throw" === az && at.iterator.return && (au.method = "return", au.arg = U, al(at, au), "throw" === au.method) || "return" !== az && (au.method = "throw", au.arg = new TypeError("The iterator does not provide a '" + az + "' method"));
          return aa;
        }
        var ax = a5(aA, at.iterator, au.arg);
        if ("throw" === ax.type) {
          au.method = "throw";
          au.arg = ax.arg;
          au.delegate = null;
          return aa;
        }
        var ay = ax.arg;
        return ay ? ay.done ? (au[at.resultName] = ay.value, au.next = at.nextLoc, "return" !== au.method && (au.method = "next", au.arg = U), au.delegate = null, aa) : ay : (au.method = "throw", au.arg = new TypeError("iterator result is not an object"), au.delegate = null, aa);
      }
    }
    function am(at) {
      {
        var av = {
          tryLoc: at[0]
        };
        1 in at && (av.catchLoc = at[1]);
        2 in at && (av.finallyLoc = at[2], av.afterLoc = at[3]);
        this.tryEntries.push(av);
      }
    }
    function an(at) {
      {
        var av = at.completion || {};
        av.type = "normal";
        delete av.arg;
        at.completion = av;
      }
    }
    function ao(at) {
      {
        var au = {
          tryLoc: "root"
        };
        this.tryEntries = [au];
        at.forEach(am, this);
        this.reset(true);
      }
    }
    function ap(at) {
      {
        if (at || "" === at) {
          {
            var av = at[a0];
            if (av) {
              return av.call(at);
            }
            if ("function" == typeof at.next) {
              return at;
            }
            if (!isNaN(at.length)) {
              {
                var aw = -1;
                var ax = function aA() {
                  {
                    for (; ++aw < at.length;) {
                      if (X.call(at, aw)) {
                        aA.value = at[aw];
                        aA.done = false;
                        return aA;
                      }
                    }
                    aA.value = U;
                    aA.done = true;
                    return aA;
                  }
                };
                return ax.next = ax;
              }
            }
          }
        }
        throw new TypeError(b(at) + " is not iterable");
      }
    }
    ac.prototype = ad;
    Y(ah, "constructor", {
      value: ad,
      configurable: true
    });
    Y(ad, "constructor", {
      value: ac,
      configurable: true
    });
    ac.displayName = a3(ad, a2, "GeneratorFunction");
    V.isGeneratorFunction = function (at) {
      {
        var av = "function" == typeof at && at.constructor;
        return !!av && (av === ac || "GeneratorFunction" === (av.displayName || av.name));
      }
    };
    V.mark = function (at) {
      Object.setPrototypeOf ? Object.setPrototypeOf(at, ad) : (at.__proto__ = ad, a3(at, a2, "GeneratorFunction"));
      at.prototype = Object.create(ah);
      return at;
    };
    V.awrap = function (at) {
      {
        var au = {
          __await: at
        };
        return au;
      }
    };
    ai(aj.prototype);
    a3(aj.prototype, a1, function () {
      {
        return this;
      }
    });
    V.AsyncIterator = aj;
    V.async = function (at, au, av, aw, ax) {
      {
        undefined === ax && (ax = Promise);
        var az = new aj(a4(at, au, av, aw), ax);
        return V.isGeneratorFunction(au) ? az : az.next().then(function (aB) {
          {
            return aB.done ? aB.value : az.next();
          }
        });
      }
    };
    ai(ah);
    a3(ah, a2, "Generator");
    a3(ah, a0, function () {
      {
        return this;
      }
    });
    a3(ah, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    V.keys = function (at) {
      {
        var av = Object(at);
        var aw = [];
        for (var ax in av) aw.push(ax);
        aw.reverse();
        return function az() {
          {
            for (; aw.length;) {
              {
                var aA = aw.pop();
                if (aA in av) {
                  az.value = aA;
                  az.done = false;
                  return az;
                }
              }
            }
            az.done = true;
            return az;
          }
        };
      }
    };
    V.values = ap;
    ao.prototype = {
      constructor: ao,
      reset: function (at) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = U, this.done = false, this.delegate = null, this.method = "next", this.arg = U, this.tryEntries.forEach(an), !at) {
            for (var au in this) "t" === au.charAt(0) && X.call(this, au) && !isNaN(+au.slice(1)) && (this[au] = U);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var at = this.tryEntries[0].completion;
          if ("throw" === at.type) {
            throw at.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (at) {
        {
          if (this.done) {
            throw at;
          }
          var av = this;
          function aC(aD, aE) {
            ay.type = "throw";
            ay.arg = at;
            av.next = aD;
            aE && (av.method = "next", av.arg = U);
            return !!aE;
          }
          for (var aw = this.tryEntries.length - 1; aw >= 0; --aw) {
            {
              var ax = this.tryEntries[aw];
              var ay = ax.completion;
              if ("root" === ax.tryLoc) {
                return aC("end");
              }
              if (ax.tryLoc <= this.prev) {
                {
                  var az = X.call(ax, "catchLoc");
                  var aA = X.call(ax, "finallyLoc");
                  if (az && aA) {
                    {
                      if (this.prev < ax.catchLoc) {
                        return aC(ax.catchLoc, true);
                      }
                      if (this.prev < ax.finallyLoc) {
                        return aC(ax.finallyLoc);
                      }
                    }
                  } else {
                    if (az) {
                      {
                        if (this.prev < ax.catchLoc) {
                          return aC(ax.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aA) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < ax.finallyLoc) {
                          return aC(ax.finallyLoc);
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
      abrupt: function (at, au) {
        {
          for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
            {
              var ay = this.tryEntries[ax];
              if (ay.tryLoc <= this.prev && X.call(ay, "finallyLoc") && this.prev < ay.finallyLoc) {
                {
                  var az = ay;
                  break;
                }
              }
            }
          }
          az && ("break" === at || "continue" === at) && az.tryLoc <= au && au <= az.finallyLoc && (az = null);
          var aA = az ? az.completion : {};
          aA.type = at;
          aA.arg = au;
          return az ? (this.method = "next", this.next = az.finallyLoc, aa) : this.complete(aA);
        }
      },
      complete: function (at, au) {
        {
          if ("throw" === at.type) {
            throw at.arg;
          }
          "break" === at.type || "continue" === at.type ? this.next = at.arg : "return" === at.type ? (this.rval = this.arg = at.arg, this.method = "return", this.next = "end") : "normal" === at.type && au && (this.next = au);
          return aa;
        }
      },
      finish: function (at) {
        {
          for (var au = this.tryEntries.length - 1; au >= 0; --au) {
            {
              var av = this.tryEntries[au];
              if (av.finallyLoc === at) {
                this.complete(av.completion, av.afterLoc);
                an(av);
                return aa;
              }
            }
          }
        }
      },
      catch: function (at) {
        {
          for (var av = this.tryEntries.length - 1; av >= 0; --av) {
            {
              var aw = this.tryEntries[av];
              if (aw.tryLoc === at) {
                {
                  var ax = aw.completion;
                  if ("throw" === ax.type) {
                    {
                      var ay = ax.arg;
                      an(aw);
                    }
                  }
                  return ay;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (at, au, av) {
        {
          this.delegate = {
            iterator: ap(at),
            resultName: au,
            nextLoc: av
          };
          "next" === this.method && (this.arg = U);
          return aa;
        }
      }
    };
    return V;
  }
  function h(R, S, T, U, V, W, X) {
    {
      try {
        {
          var Y = R[W](X);
          var Z = Y.value;
        }
      } catch (a2) {
        {
          return void T(a2);
        }
      }
      Y.done ? S(Z) : Promise.resolve(Z).then(U, V);
    }
  }
  function i(R) {
    return function () {
      var U = this;
      var V = arguments;
      return new Promise(function (W, X) {
        var Z = R.apply(U, V);
        function a0(a2) {
          h(Z, W, X, a0, a1, "next", a2);
        }
        function a1(a2) {
          {
            h(Z, W, X, a0, a1, "throw", a2);
          }
        }
        a0(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.XZXXN : $.getdata("XZXXN")) || "";
  var k = ($.isNode() ? process.env.XZXXNSERVER : $.getdata("XZXXNSERVER")) || "https://dalaoshi.xn--ug8h.eu.org";
  var l = ($.isNode() ? process.env.CiXiao : $.getdata("CiXiao")) || "";
  var m = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var n = "false" !== ($.isNode() ? process.env.CiXiao_Draw : $.getdata("CiXiao_Draw"));
  var o = undefined;
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  function v() {
    {
      return w.apply(this, arguments);
    }
  }
  function w() {
    w = i(g().mark(function S() {
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
      var aF;
      var aG;
      var aH;
      var aI;
      var aJ;
      var aK;
      var aL;
      var aM;
      var aN;
      var aO;
      var aP;
      var aQ;
      var aR;
      var aS;
      var aT;
      var aU;
      var aV;
      var aW;
      var aX;
      var aY;
      var aZ;
      return g().wrap(function (b0) {
        for (;;) {
          switch (b0.prev = b0.next) {
            case 0:
              if (l) {
                {
                  b0.next = 5;
                  break;
                }
              }
              console.log("先填写账号token");
              b0.next = 4;
              return P("先填写账号token");
            case 4:
              return b0.abrupt("return");
            case 5:
              b0.next = 7;
              return L();
            case 7:
              o = b0.sent;
              a1 = l.split(" ");
              a2 = c(a1);
              b0.prev = 10;
              a2.s();
            case 12:
              if ((a3 = a2.n()).done) {
                {
                  b0.next = 236;
                  break;
                }
              }
              a4 = a3.value;
              b0.prev = 14;
              phone_number = a4.split("&")[0];
              s = a4.split("&")[1];
              q = a4.split("&")[2] || I();
              console.log("用户：".concat(phone_number, "开始任务"));
              b0.next = 21;
              return J({
                token: j,
                type: "CiXiao",
                userId: phone_number
              });
            case 21:
              if (a5 = b0.sent, 200 == (null == a5 ? undefined : a5.code)) {
                {
                  b0.next = 25;
                  break;
                }
              }
              console.log(null == a5 ? undefined : a5.msg);
              return b0.abrupt("continue", 234);
            case 25:
              console.log("获取userinfoId");
              a6 = Date.now().toString() + E(5) + F();
              a7 = o.md5("@#@$AXdm123%)(ds".concat(a6, "api/UserInfo/GetRedNumberModel"));
              b0.next = 30;
              return z("/api/UserInfo/GetRedNumberModel?newspapergroupId=15403&sign=".concat(a7, "&stamp=").concat(a6));
            case 30:
              if (a8 = b0.sent, a8.success) {
                {
                  b0.next = 35;
                  break;
                }
              }
              b0.next = 34;
              return P("用户：".concat(phone_number, "\ntoken已过期，请重新获取"));
            case 34:
              return b0.abrupt("continue", 234);
            case 35:
              if (r = a8.data.userinfo.Id, console.log(r), u && t) {
                {
                  b0.next = 45;
                  break;
                }
              }
              console.log("获取现金和抽奖Id");
              a6 = Date.now().toString() + E(5) + F();
              a7 = o.md5("@#@$AXdm123%)(ds".concat(a6, "api/News/GetColumn"));
              b0.next = 43;
              return z("/api/News/GetColumn?newspapergroupId=15403&columnLocation=1&sign=".concat(a7, "&stamp=").concat(a6));
            case 43:
              a9 = b0.sent;
              a9.success ? (aa = /ScoreMall\/Detail\?id=(\d+)/, ab = JSON.stringify(a9).match(aa), ab && (u = ab[1]), aa = /Prize\/Index\?ClientInfoId=15403&ActivityId=(\d+)/, ab = JSON.stringify(a9).match(aa), ab && (t = ab[1]), console.log("现金ID：".concat(u, ", 抽奖ID：").concat(t))) : console.log(a9.message);
            case 45:
              if (!u) {
                {
                  b0.next = 53;
                  break;
                }
              }
              console.log("积分兑换现金");
              a6 = Date.now().toString() + E(5) + F();
              a7 = o.md5("@#@$AXdm123%)(ds".concat(a6, "api/ScoreMall/Exchange"));
              b0.next = 51;
              return z("/api/ScoreMall/Exchange?goodsId=".concat(u, "&newspapergroupId=15403&sign=").concat(a7, "&deviceKey=").concat(q, "&stamp=").concat(a6));
            case 51:
              ac = b0.sent;
              console.log("兑换结果：".concat(ac.message));
            case 53:
              a6 = Date.now().toString() + E(5) + F();
              a7 = o.md5("@#@$AXdm123%)(ds".concat(a6, "api/ScoreMall/MyScoreOrders"));
              b0.next = 58;
              return z("/api/ScoreMall/MyScoreOrders?newspapergroupId=15403&sign=".concat(a7, "&stamp=").concat(a6, "&page=1&state=1"));
            case 58:
              ad = b0.sent;
              af = c(ad.data);
              b0.prev = 60;
              af.s();
            case 62:
              if ((ag = af.n()).done) {
                {
                  b0.next = 74;
                  break;
                }
              }
              ah = ag.value;
              console.log(ah.goods.title);
              a6 = Date.now().toString() + E(5) + F();
              a7 = o.md5("@#@$AXdm123%)(ds".concat(a6, "api/ScoreMall/GrantCashAward"));
              b0.next = 70;
              return z("/api/ScoreMall/GrantCashAward?orderId=".concat(ah.ordreId, "&newspapergroupId=15403&sign=").concat(a7, "&stamp=").concat(a6));
            case 70:
              ai = b0.sent;
              console.log("提现结果：".concat(ai.message));
            case 72:
              b0.next = 62;
              break;
            case 74:
              b0.next = 79;
              break;
            case 76:
              b0.prev = 76;
              b0.t0 = b0.catch(60);
              af.e(b0.t0);
            case 79:
              b0.prev = 79;
              af.f();
              return b0.finish(79);
            case 82:
              if (!t) {
                {
                  b0.next = 94;
                  break;
                }
              }
              if (!n) {
                {
                  b0.next = 94;
                  break;
                }
              }
              console.log("积分抽奖");
              aj = true;
            case 86:
              if (!aj) {
                {
                  b0.next = 94;
                  break;
                }
              }
              b0.next = 89;
              return B("/Prize/DrawPrize?activeid=".concat(t, "&token=").concat(s));
            case 89:
              ak = b0.sent;
              console.log("抽奖结果：".concat(ak.prize));
              aj = ak.result;
              b0.next = 86;
              break;
            case 94:
              b0.next = 96;
              return B("/Prize/GetActivePrizeLog?pageindex=1&UserInfoId=".concat(r, "&prizeType=1&token=").concat(s));
            case 96:
              al = b0.sent;
              am = c(al.data);
              b0.prev = 98;
              am.s();
            case 100:
              if ((an = am.n()).done) {
                {
                  b0.next = 111;
                  break;
                }
              }
              if (ao = an.value, 3 != ao.AwardState) {
                {
                  b0.next = 109;
                  break;
                }
              }
              console.log("奖品：".concat(ao.LevelName, " ").concat(ao.Prize));
              b0.next = 106;
              return B("/Prize/GrantCashAward?userActivePrizeId=".concat(ao.Id, "&token=").concat(s));
            case 106:
              ap = b0.sent;
              console.log("领取结果：".concat(ap.message));
              p += "用户：".concat(phone_number, " 奖品：").concat(ao.Prize, " 领取结果：").concat(ap.message, "\n");
            case 109:
              b0.next = 100;
              break;
            case 111:
              b0.next = 116;
              break;
            case 113:
              b0.prev = 113;
              b0.t1 = b0.catch(98);
              am.e(b0.t1);
            case 116:
              b0.prev = 116;
              am.f();
              return b0.finish(116);
            case 119:
              console.log("阅读抽奖");
              b0.next = 122;
              return x("/ReadActivityTaskList?json=true");
            case 122:
              aq = b0.sent;
              ar = c(aq.data);
              b0.prev = 124;
              ar.s();
            case 126:
              if ((as = ar.n()).done) {
                {
                  b0.next = 194;
                  break;
                }
              }
              at = as.value;
              console.log(at.activityTypeName);
              b0.next = 131;
              return x("/ReadActivityTaskData?yunyingActivityTaskId=".concat(at.yunyingActivityTaskId, "&json=true"));
            case 131:
              if (au = b0.sent, au) {
                {
                  b0.next = 134;
                  break;
                }
              }
              return b0.abrupt("continue", 192);
            case 134:
              if (au.data.totalCount != au.data.completedCount) {
                {
                  b0.next = 137;
                  break;
                }
              }
              console.log("已完成");
              return b0.abrupt("continue", 192);
            case 137:
              av = c(au.data.taskDetails);
              b0.prev = 138;
              av.s();
            case 140:
              if ((aw = av.n()).done) {
                {
                  b0.next = 161;
                  break;
                }
              }
              if (ax = aw.value, !ax.isComplete) {
                {
                  b0.next = 144;
                  break;
                }
              }
              return b0.abrupt("continue", 159);
            case 144:
              for (console.log("文章：".concat(ax.title)), ay = ax.url.split("?")[1], az = {}, aA = ay.split("&"), aB = 0, aC = aA.length; aB < aC; aB++) {
                aD = aA[aB].split("=");
                az[aD[0]] = aD[1];
              }
              aE = Date.now().toString() + E(5) + F();
              aF = o.md5("@#@$AXdm123%)(ds".concat(aE, "api/Yunying/ReadArticle"));
              b0.next = 153;
              return z("api/Yunying/ReadArticle?articleType=1&newspapergroupId=".concat(az.NewspaperGroupId, "&sign=").concat(aF, "&stamp=").concat(aE, "&ArticleId=").concat(ax.articleId, "&taskDetailId=").concat(ax.taskDetailId));
            case 153:
              aG = b0.sent;
              console.log(aG.message);
              b0.next = 157;
              return x("/ChceckCompleteTaskDetail?taskDetailId=".concat(ax.taskDetailId, "&yunyingActivityTaskId=").concat(at.yunyingActivityTaskId, "&round=").concat(at.round, "&json=true"));
            case 157:
              aH = b0.sent;
              console.log(aH.success);
            case 159:
              b0.next = 140;
              break;
            case 161:
              b0.next = 166;
              break;
            case 163:
              b0.prev = 163;
              b0.t2 = b0.catch(138);
              av.e(b0.t2);
            case 166:
              b0.prev = 166;
              av.f();
              return b0.finish(166);
            case 169:
              b0.next = 171;
              return x("/CanDrawPrizeList?json=true");
            case 171:
              aI = b0.sent;
              console.log("拥有".concat(aI.data.length, "次抽奖"));
              aJ = c(aI.data);
              b0.prev = 174;
              aJ.s();
            case 176:
              if ((aK = aJ.n()).done) {
                {
                  b0.next = 184;
                  break;
                }
              }
              aL = aK.value;
              b0.next = 180;
              return x("/DrawAward?awardRecordId=".concat(aL.awardRecordId, "&json=true"));
            case 180:
              aM = b0.sent;
              1 == aM.data.awardType ? (console.log("抽奖获得：".concat(null == aM || null === (aN = aM.data) || undefined === aN ? undefined : aN.award).concat(null == aM || null === (aO = aM.data) || undefined === aO ? undefined : aO.name)), p += "用户：".concat(phone_number, " 抽奖获得：").concat(null == aM || null === (aP = aM.data) || undefined === aP ? undefined : aP.award).concat(null == aM || null === (aQ = aM.data) || undefined === aQ ? undefined : aQ.name, "\n")) : 2 == aM.data.awardType ? (console.log("抽奖获得：".concat(null == aM || null === (aR = aM.data) || undefined === aR ? undefined : aR.scoreAward).concat(null == aM || null === (aS = aM.data) || undefined === aS ? undefined : aS.name)), p += "用户：".concat(phone_number, " 抽奖获得：").concat(null == aM || null === (aT = aM.data) || undefined === aT ? undefined : aT.scoreAward).concat(null == aM || null === (aU = aM.data) || undefined === aU ? undefined : aU.name, "\n")) : (console.log("谢谢参与"), p += "用户：".concat(phone_number, " 抽奖获得：谢谢参与\n"));
            case 182:
              b0.next = 176;
              break;
            case 184:
              b0.next = 189;
              break;
            case 186:
              b0.prev = 186;
              b0.t3 = b0.catch(174);
              aJ.e(b0.t3);
            case 189:
              b0.prev = 189;
              aJ.f();
              return b0.finish(189);
            case 192:
              b0.next = 126;
              break;
            case 194:
              b0.next = 199;
              break;
            case 196:
              b0.prev = 196;
              b0.t4 = b0.catch(124);
              ar.e(b0.t4);
            case 199:
              b0.prev = 199;
              ar.f();
              return b0.finish(199);
            case 202:
              b0.next = 204;
              return x("/MyAwardList?page=1&json=true");
            case 204:
              if (aV = b0.sent, null == aV || !aV.data) {
                {
                  b0.next = 229;
                  break;
                }
              }
              aW = c(aV.data);
              b0.prev = 207;
              aW.s();
            case 209:
              if ((aX = aW.n()).done) {
                {
                  b0.next = 221;
                  break;
                }
              }
              if (aY = aX.value, 1 != aY.awardType || 4 == aY.awardState) {
                {
                  b0.next = 219;
                  break;
                }
              }
              console.log("奖品：".concat(aY.award).concat(aY.name));
              console.log("领取奖品");
              b0.next = 216;
              return x("/GrantAward?awardRecordId=".concat(aY.awardRecordId, "&json=true"));
            case 216:
              aZ = b0.sent;
              console.log("领取结果：".concat(aZ.message));
              p += "用户：".concat(phone_number, " 奖品：").concat(aY.award).concat(aY.name, " 领取结果：").concat(aZ.message, "\n");
            case 219:
              b0.next = 209;
              break;
            case 221:
              b0.next = 226;
              break;
            case 223:
              b0.prev = 223;
              b0.t5 = b0.catch(207);
              aW.e(b0.t5);
            case 226:
              b0.prev = 226;
              aW.f();
              return b0.finish(226);
            case 229:
              b0.next = 234;
              break;
            case 231:
              b0.prev = 231;
              b0.t6 = b0.catch(14);
              console.log(b0.t6);
            case 234:
              b0.next = 12;
              break;
            case 236:
              b0.next = 241;
              break;
            case 238:
              b0.prev = 238;
              b0.t7 = b0.catch(10);
              a2.e(b0.t7);
            case 241:
              b0.prev = 241;
              a2.f();
              return b0.finish(241);
            case 244:
              if (!p) {
                b0.next = 247;
                break;
              }
              b0.next = 247;
              return P(p);
            case 247:
            case "end":
              return b0.stop();
          }
        }
      }, S, null, [[10, 238, 241, 244], [14, 231], [60, 76, 79, 82], [98, 113, 116, 119], [124, 196, 199, 202], [138, 163, 166, 169], [174, 186, 189, 192], [207, 223, 226, 229]]);
    }));
    return w.apply(this, arguments);
  }
  function x(R) {
    return y.apply(this, arguments);
  }
  function y() {
    y = i(g().mark(function S(T) {
      return g().wrap(function (U) {
        for (;;) {
          switch (U.prev = U.next) {
            case 0:
              return U.abrupt("return", new Promise(function (W) {
                var X = {
                  url: "https://cxh5.xiaodingkeji.com/h5api/api/YunyingV720".concat(T),
                  headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache",
                    accept: "application/json, text/plain, */*",
                    "x-token": s,
                    "x-requested-with": "XMLHttpRequest",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + s + "];x-userinfoId:[" + r + "];x-device:[" + q + "]"
                  }
                };
                $.get(X, function () {
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
              }));
            case 1:
            case "end":
              return U.stop();
          }
        }
      }, S);
    }));
    return y.apply(this, arguments);
  }
  function z(R) {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function T(U) {
      return g().wrap(function (V) {
        for (;;) {
          switch (V.prev = V.next) {
            case 0:
              return V.abrupt("return", new Promise(function (X) {
                var Y = {
                  url: "https://cxapi.xiaodingkeji.com/".concat(U),
                  headers: {
                    "accept-version": "200",
                    "x-version": "730",
                    version: "7.19.0",
                    "x-token": s,
                    Connection: "Keep-Alive",
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/3.11.0"
                  }
                };
                $.get(Y, function () {
                  var a0 = i(g().mark(function a1(a2, a3, a4) {
                    return g().wrap(function (a6) {
                      for (;;) {
                        switch (a6.prev = a6.next) {
                          case 0:
                            if (a6.prev = 0, !a2) {
                              a6.next = 12;
                              break;
                            }
                            if (!a4) {
                              a6.next = 8;
                              break;
                            }
                            a6.next = 5;
                            return $.wait(2000);
                          case 5:
                            X(JSON.parse(a4));
                            a6.next = 10;
                            break;
                          case 8:
                            console.log("".concat(JSON.stringify(a2)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                          case 10:
                            a6.next = 15;
                            break;
                          case 12:
                            a6.next = 14;
                            return $.wait(2000);
                          case 14:
                            X(JSON.parse(a4));
                          case 15:
                            a6.next = 20;
                            break;
                          case 17:
                            a6.prev = 17;
                            a6.t0 = a6.catch(0);
                            $.logErr(a6.t0, a3);
                          case 20:
                            a6.prev = 20;
                            X();
                            return a6.finish(20);
                          case 23:
                          case "end":
                            return a6.stop();
                        }
                      }
                    }, a1, null, [[0, 17, 20, 23]]);
                  }));
                  return function (a2, a3, a4) {
                    return a0.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return V.stop();
          }
        }
      }, T);
    }));
    return A.apply(this, arguments);
  }
  function B(R) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function S(T) {
      return g().wrap(function (V) {
        for (;;) {
          switch (V.prev = V.next) {
            case 0:
              return V.abrupt("return", new Promise(function (W) {
                var Y = {
                  url: "https://cxjfsc.xiaodingkeji.com/".concat(T),
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
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + s + "];x-userinfoId:[" + r + "];x-device:[" + q + "]"
                  }
                };
                $.get(Y, function () {
                  var a0 = i(g().mark(function a1(a2, a3, a4) {
                    return g().wrap(function (a5) {
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
            case 1:
            case "end":
              return V.stop();
          }
        }
      }, S);
    }));
    return C.apply(this, arguments);
  }
  function D() {
    var R = new Date();
    var S = function (Z) {
      return Z.toString().padStart(2, "0");
    };
    var T = R.getFullYear();
    var U = S(R.getMonth() + 1);
    var V = S(R.getDate());
    var W = S(R.getHours());
    var X = S(R.getMinutes());
    var Y = S(R.getSeconds());
    return "".concat(T).concat(U).concat(V).concat(W).concat(X).concat(Y);
  }
  function E(R) {
    for (var S = "abcdefghijklmnopqrstuvwxyz0123456789", T = "", U = 0; U < R; U++) {
      T += S.charAt(Math.floor(36 * Math.random()));
    }
    return T;
  }
  function F() {
    var R = D();
    R || (R = E(8));
    return E(2) + R.substring(3) + E(3);
  }
  function G() {
    for (var R = "", S = 0; S < 16; S++) {
      var T = Math.floor(16 * Math.random());
      R += "0123456789abcdef"[T];
    }
    return R;
  }
  function H() {
    return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (R) {
      var S = 16 * Math.random() | 0;
      var T = "x" === R ? S : 3 & S | 8;
      return T.toString(16);
    });
  }
  function I() {
    var R = G();
    var S = H().replace(/-/g, "");
    var T = o.createCryptoJS();
    return T.SHA1("".concat(R, "|unknown|").concat(S)).toString().toUpperCase();
  }
  function J(R) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function S(T) {
      return g().wrap(function (U) {
        for (;;) {
          switch (U.prev = U.next) {
            case 0:
              return U.abrupt("return", new Promise(function (W) {
                var X = {
                  "Content-Type": "application/json"
                };
                var Y = {
                  url: "".concat(k, "/token/verify"),
                  headers: X,
                  body: JSON.stringify(T)
                };
                $.post(Y, function () {
                  var a0 = i(g().mark(function a1(a2, a3, a4) {
                    return g().wrap(function (a5) {
                      for (;;) {
                        switch (a5.prev = a5.next) {
                          case 0:
                            try {
                              a2 ? (console.log("".concat(JSON.stringify(a2))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : W(JSON.parse(a4));
                            } catch (a6) {
                              $.logErr(a6, a3);
                            } finally {
                              W();
                            }
                          case 1:
                          case "end":
                            return a5.stop();
                        }
                      }
                    }, a1);
                  }));
                  return function (a2, a3, a4) {
                    return a0.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return U.stop();
          }
        }
      }, S);
    }));
    return K.apply(this, arguments);
  }
  function L() {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function S() {
      var U;
      return g().wrap(function V(W) {
        for (;;) {
          switch (W.prev = W.next) {
            case 0:
              if (U = $.getdata("Utils_Code") || "", !U || !Object.keys(U).length) {
                W.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(U);
              return W.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return W.abrupt("return", new Promise(function () {
                var Z = i(g().mark(function a0(a1) {
                  return g().wrap(function a3(a4) {
                    for (;;) {
                      switch (a4.prev = a4.next) {
                        case 0:
                          $.getScript("".concat(m, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (a5) {
                            $.setdata(a5, "Utils_Code");
                            eval(a5);
                            console.log("✅ Utils加载成功, 请继续");
                            a1(creatUtils());
                          });
                        case 1:
                        case "end":
                          return a4.stop();
                      }
                    }
                  }, a0);
                }));
                return function (a1) {
                  return Z.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return W.stop();
          }
        }
      }, S);
    }));
    return M.apply(this, arguments);
  }
  function N() {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function S() {
      return g().wrap(function (V) {
        for (;;) {
          switch (V.prev = V.next) {
            case 0:
              return V.abrupt("return", new Promise(function (X) {
                var Y = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(Y, function () {
                  var a0 = i(g().mark(function a1(a2, a3, a4) {
                    return g().wrap(function (a5) {
                      for (;;) {
                        switch (a5.prev = a5.next) {
                          case 0:
                            try {
                              a2 ? (console.log("".concat(JSON.stringify(a2))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(a4).notice);
                            } catch (a6) {
                              $.logErr(a6, a3);
                            } finally {
                              X();
                            }
                          case 1:
                          case "end":
                            return a5.stop();
                        }
                      }
                    }, a1);
                  }));
                  return function (a2, a3, a4) {
                    return a0.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return V.stop();
          }
        }
      }, S);
    }));
    return O.apply(this, arguments);
  }
  function P(R) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function R(S) {
      return g().wrap(function (T) {
        for (;;) {
          switch (T.prev = T.next) {
            case 0:
              if (!$.isNode()) {
                T.next = 5;
                break;
              }
              T.next = 3;
              return notify.sendNotify($.name, S);
            case 3:
              T.next = 6;
              break;
            case 5:
              $.msg($.name, "", S);
            case 6:
            case "end":
              return T.stop();
          }
        }
      }, R);
    }));
    return Q.apply(this, arguments);
  }
  i(g().mark(function R() {
    return g().wrap(function (S) {
      for (;;) {
        switch (S.prev = S.next) {
          case 0:
            S.next = 2;
            return N();
          case 2:
            S.next = 4;
            return v();
          case 4:
          case "end":
            return S.stop();
        }
      }
    }, R);
  }))().catch(function (S) {
    $.log(S);
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