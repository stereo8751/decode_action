//Mon Apr 27 2026 14:06:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("掌上瓯海");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ah) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ak) {
        {
          return typeof ak;
        }
      } : function (ak) {
        {
          return ak && "function" == typeof Symbol && ak.constructor === Symbol && ak !== Symbol.prototype ? "symbol" : typeof ak;
        }
      };
      return b(ah);
    }
  }
  function c(ah, ai) {
    {
      var ak = "undefined" != typeof Symbol && ah[Symbol.iterator] || ah["@@iterator"];
      if (!ak) {
        {
          if (Array.isArray(ah) || (ak = d(ah)) || ai && ah && "number" == typeof ah.length) {
            {
              ak && (ah = ak);
              var al = 0;
              var am = function () {};
              return {
                s: am,
                n: function () {
                  {
                    var as = {
                      done: true
                    };
                    return al >= ah.length ? as : {
                      done: false,
                      value: ah[al++]
                    };
                  }
                },
                e: function (as) {
                  {
                    throw as;
                  }
                },
                f: am
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var an;
      var ao = true;
      var ap = false;
      return {
        s: function () {
          {
            ak = ak.call(ah);
          }
        },
        n: function () {
          {
            var at = ak.next();
            ao = at.done;
            return at;
          }
        },
        e: function (at) {
          {
            ap = true;
            an = at;
          }
        },
        f: function () {
          {
            try {
              {
                ao || null == ak.return || ak.return();
              }
            } finally {
              {
                if (ap) {
                  throw an;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ah, ai) {
    {
      if (ah) {
        {
          if ("string" == typeof ah) {
            return f(ah, ai);
          }
          var aj = {}.toString.call(ah).slice(8, -1);
          "Object" === aj && ah.constructor && (aj = ah.constructor.name);
          return "Map" === aj || "Set" === aj ? Array.from(ah) : "Arguments" === aj || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(aj) ? f(ah, ai) : undefined;
        }
      }
    }
  }
  function f(ah, ai) {
    {
      (null == ai || ai > ah.length) && (ai = ah.length);
      for (var ak = 0, al = Array(ai); ak < ai; ak++) {
        al[ak] = ah[ak];
      }
      return al;
    }
  }
  function g() {
    "use strict";

    var ah = {
      lYtQq: function (aO, aP) {
        return aO !== aP;
      },
      lrrbv: "gGOkz",
      vcPed: "RYvPR",
      rOHgQ: function (aO, aP) {
        return aO !== aP;
      },
      yOWlE: "KdrdA",
      hapdi: function (aO, aP, aQ, aR) {
        return aO(aP, aQ, aR);
      },
      IUAof: function (aO, aP) {
        return aO !== aP;
      },
      JuKrM: "VSBHw",
      FoPYi: function (aO, aP) {
        return aO == aP;
      },
      PbMKw: "string",
      xmmhW: function (aO, aP) {
        return aO === aP;
      },
      FuPIp: "Object",
      jOFVs: function (aO, aP) {
        return aO === aP;
      },
      OgqJu: function (aO, aP, aQ) {
        return aO(aP, aQ);
      },
      WoisD: function (aO, aP) {
        return aO !== aP;
      },
      fgZmV: "wzrwQ",
      yvFQm: function (aO, aP) {
        return aO === aP;
      },
      pvGDi: "EzjoQ",
      zzFqg: function (aO, aP) {
        return aO(aP);
      },
      zdjrg: "Generator is already running",
      PwQrS: function (aO, aP) {
        return aO === aP;
      },
      FOQvB: function (aO, aP) {
        return aO === aP;
      },
      JLZGU: "throw",
      uDCgo: "kGVQa",
      rIkgN: "LgAwQ",
      eHHcB: function (aO, aP, aQ) {
        return aO(aP, aQ);
      },
      JfiNP: function (aO, aP) {
        return aO === aP;
      },
      hrKOF: "PhLkM",
      SdisC: function (aO, aP) {
        return aO === aP;
      },
      DryNF: "return",
      AWBUU: "normal",
      cvdSF: "tZFKB",
      lafHn: function (aO, aP) {
        return aO(aP);
      },
      FwuXY: "3|1|4|2|5|0",
      igFKE: "client_id=",
      tWJhx: "&password=",
      HJkCj: function (aO, aP) {
        return aO(aP);
      },
      dMBvz: "&phone_number=",
      VUJsr: function (aO) {
        return aO();
      },
      oTMpd: "post%%/web/oauth/credential_auth?",
      BGXUy: function (aO, aP) {
        return aO === aP;
      },
      dfvxu: "ktcUB",
      PtRFL: "JcxPM",
      XNhpL: "root",
      iGwbR: function (aO, aP) {
        return aO === aP;
      },
      MjeHF: function (aO, aP) {
        return aO & aP;
      },
      YKyXS: "PGNms",
      gNMFl: "rfbQx",
      PUAdN: "GeneratorFunction",
      FhRsI: function (aO, aP) {
        return aO !== aP;
      },
      KusCe: "UjQdx",
      zwXAj: function (aO, aP) {
        return aO < aP;
      },
      YIHuG: "uyFKz",
      kIfGJ: "VyjVK",
      tiKuZ: function (aO, aP, aQ, aR, aS) {
        return aO(aP, aQ, aR, aS);
      },
      sLEbO: "next",
      UVzfn: "UBFXk",
      wYkCK: function (aO, aP) {
        return aO in aP;
      },
      rEKpj: function (aO, aP) {
        return aO === aP;
      },
      vFyXD: "RqHgx",
      QJvzp: "CupjG",
      jksPc: function (aO, aP) {
        return aO === aP;
      },
      GliAP: function (aO, aP) {
        return aO(aP);
      },
      FOFnC: function (aO, aP) {
        return aO !== aP;
      },
      KspZf: "PaUWB",
      gyzFj: "QoYBb",
      dpIMs: function (aO, aP) {
        return aO == aP;
      },
      hqtxr: "ICqot",
      MjpRW: "SxPlz",
      mrLFz: function (aO, aP) {
        return aO - aP;
      },
      uulPV: function (aO, aP) {
        return aO >= aP;
      },
      QnVLA: "nzrDb",
      eInik: "tTKUZ",
      icPCY: "end",
      HaVHM: "hcKsA",
      DDbVl: "catchLoc",
      ekdBS: "finallyLoc",
      sjgnl: function (aO, aP) {
        return aO && aP;
      },
      bwuOm: function (aO, aP) {
        return aO === aP;
      },
      BeVPM: "WRWKc",
      KQKZY: function (aO, aP) {
        return aO < aP;
      },
      JIcuL: function (aO, aP, aQ) {
        return aO(aP, aQ);
      },
      hRAIn: function (aO, aP) {
        return aO < aP;
      },
      KNgQA: function (aO, aP) {
        return aO(aP);
      },
      zCQlK: "lGJoJ",
      pvOey: function (aO, aP, aQ) {
        return aO(aP, aQ);
      },
      tpcTc: "EQIyZ",
      DpJpT: "try statement without catch or finally",
      nuSSi: function (aO, aP, aQ, aR) {
        return aO(aP, aQ, aR);
      },
      UrJpw: function (aO, aP) {
        return aO !== aP;
      },
      MlRCw: "lNJkF",
      lDuRz: function (aO, aP) {
        return aO - aP;
      },
      xhoku: function (aO, aP) {
        return aO >= aP;
      },
      Uoqda: "OdWGM",
      hbPPp: function (aO, aP) {
        return aO <= aP;
      },
      wEFbq: function (aO, aP) {
        return aO === aP;
      },
      ccNdn: "ORQtN",
      jXdIt: function (aO, aP) {
        return aO === aP;
      },
      PWreJ: function (aO, aP) {
        return aO === aP;
      },
      yzUnt: "continue",
      lPXRe: function (aO, aP) {
        return aO <= aP;
      },
      nzbaQ: function (aO, aP) {
        return aO <= aP;
      },
      RnfJh: function (aO, aP) {
        return aO === aP;
      },
      LFpDs: "sdIfN",
      CpqSS: "dBxyG",
      InUfi: function (aO, aP) {
        return aO >= aP;
      },
      nxrVL: "oOwfX",
      ftxmT: function (aO, aP) {
        return aO(aP);
      },
      ojceI: function (aO) {
        return aO();
      },
      dHxax: "DKGQF",
      mcdhl: function (aO, aP) {
        return aO === aP;
      }
    };
    g = function () {
      {
        return aj;
      }
    };
    var ai;
    var aj = {};
    var ak = Object.prototype;
    var al = ak.hasOwnProperty;
    var am = Object.defineProperty || function (aO, aP, aQ) {
      {
        aO[aP] = aQ.value;
      }
    };
    var an = "function" == typeof Symbol ? Symbol : {};
    var ao = an.iterator || "@@iterator";
    var ap = an.asyncIterator || "@@asyncIterator";
    var aq = an.toStringTag || "@@toStringTag";
    function ar(aO, aP, aQ) {
      {
        var aR = {
          value: aQ,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aO, aP, aR);
        return aO[aP];
      }
    }
    try {
      ar({}, "");
    } catch (aP) {
      {
        ar = function (aR, aS, aT) {
          {
            return aR[aS] = aT;
          }
        };
      }
    }
    function as(aR, aS, aT, aU) {
      {
        var aW = aS && aS.prototype instanceof az ? aS : az;
        var aX = Object.create(aW.prototype);
        var aY = new aM(aU || []);
        am(aX, "_invoke", {
          value: aI(aR, aT, aY)
        });
        return aX;
      }
    }
    function at(aR, aS, aT) {
      {
        try {
          return {
            type: "normal",
            arg: aR.call(aS, aT)
          };
        } catch (aX) {
          {
            var aU = {
              type: "throw",
              arg: aX
            };
            return aU;
          }
        }
      }
    }
    aj.wrap = as;
    var au = "suspendedStart";
    var av = "suspendedYield";
    var aw = "executing";
    var ax = "completed";
    var ay = {};
    function az() {}
    function aA() {}
    function aB() {}
    var aC = {};
    ar(aC, ao, function () {
      return this;
    });
    var aD = Object.getPrototypeOf;
    var aE = aD && aD(aD(aN([])));
    aE && aE !== ak && al.call(aE, ao) && (aC = aE);
    aB.prototype = az.prototype = Object.create(aC);
    var aF = aB.prototype;
    function aG(aR) {
      ["next", "throw", "return"].forEach(function (aU) {
        ar(aR, aU, function (aW) {
          {
            return this._invoke(aU, aW);
          }
        });
      });
    }
    function aH(aR, aS) {
      {
        function aV(aW, aX, aY, aZ) {
          {
            var b1 = at(aR[aW], aR, aX);
            if ("throw" !== b1.type) {
              {
                var b2 = b1.arg;
                var b3 = b2.value;
                return b3 && "object" == b(b3) && al.call(b3, "__await") ? aS.resolve(b3.__await).then(function (b6) {
                  {
                    aV("next", b6, aY, aZ);
                  }
                }, function (b6) {
                  aV("throw", b6, aY, aZ);
                }) : aS.resolve(b3).then(function (b6) {
                  b2.value = b6;
                  aY(b2);
                }, function (b6) {
                  {
                    return aV("throw", b6, aY, aZ);
                  }
                });
              }
            }
            aZ(b1.arg);
          }
        }
        var aU;
        am(this, "_invoke", {
          value: function (aW, aX) {
            {
              function aZ() {
                {
                  return new aS(function (b0, b1) {
                    {
                      aV(aW, aX, b0, b1);
                    }
                  });
                }
              }
              return aU = aU ? aU.then(aZ, aZ) : aZ();
            }
          }
        });
      }
    }
    function aI(aR, aS, aT) {
      {
        var aV = au;
        return function (aX, aY) {
          {
            if (aV === aw) {
              throw Error("Generator is already running");
            }
            if (aV === ax) {
              {
                if ("throw" === aX) {
                  throw aY;
                }
                var aZ = {
                  value: ai,
                  done: true
                };
                return aZ;
              }
            }
            for (aT.method = aX, aT.arg = aY;;) {
              {
                var b0 = aT.delegate;
                if (b0) {
                  {
                    var b1 = aJ(b0, aT);
                    if (b1) {
                      {
                        if (b1 === ay) {
                          continue;
                        }
                        return b1;
                      }
                    }
                  }
                }
                if ("next" === aT.method) {
                  aT.sent = aT._sent = aT.arg;
                } else {
                  if ("throw" === aT.method) {
                    {
                      if (aV === au) {
                        throw aV = ax, aT.arg;
                      }
                      aT.dispatchException(aT.arg);
                    }
                  } else {
                    "return" === aT.method && aT.abrupt("return", aT.arg);
                  }
                }
                aV = aw;
                var b2 = at(aR, aS, aT);
                if ("normal" === b2.type) {
                  {
                    if (aV = aT.done ? ax : av, b2.arg === ay) {
                      continue;
                    }
                    var b3 = {
                      value: b2.arg,
                      done: aT.done
                    };
                    return b3;
                  }
                }
                "throw" === b2.type && (aV = ax, aT.method = "throw", aT.arg = b2.arg);
              }
            }
          }
        };
      }
    }
    function aJ(aR, aS) {
      {
        var aW = aS.method;
        var aX = aR.iterator[aW];
        if (aX === ai) {
          aS.delegate = null;
          "throw" === aW && aR.iterator.return && (aS.method = "return", aS.arg = ai, aJ(aR, aS), "throw" === aS.method) || "return" !== aW && (aS.method = "throw", aS.arg = new TypeError("The iterator does not provide a '" + aW + "' method"));
          return ay;
        }
        var aZ = at(aX, aR.iterator, aS.arg);
        if ("throw" === aZ.type) {
          aS.method = "throw";
          aS.arg = aZ.arg;
          aS.delegate = null;
          return ay;
        }
        var aY = aZ.arg;
        return aY ? aY.done ? (aS[aR.resultName] = aY.value, aS.next = aR.nextLoc, "return" !== aS.method && (aS.method = "next", aS.arg = ai), aS.delegate = null, ay) : aY : (aS.method = "throw", aS.arg = new TypeError("iterator result is not an object"), aS.delegate = null, ay);
      }
    }
    function aK(aR) {
      {
        var aT = {
          tryLoc: aR[0]
        };
        1 in aR && (aT.catchLoc = aR[1]);
        2 in aR && (aT.finallyLoc = aR[2], aT.afterLoc = aR[3]);
        this.tryEntries.push(aT);
      }
    }
    function aL(aR) {
      {
        var aS = aR.completion || {};
        aS.type = "normal";
        delete aS.arg;
        aR.completion = aS;
      }
    }
    function aM(aR) {
      {
        var aS = {
          tryLoc: "root"
        };
        this.tryEntries = [aS];
        aR.forEach(aK, this);
        this.reset(true);
      }
    }
    function aN(aR) {
      {
        if (aR || "" === aR) {
          {
            var aT = aR[ao];
            if (aT) {
              return aT.call(aR);
            }
            if ("function" == typeof aR.next) {
              return aR;
            }
            if (!isNaN(aR.length)) {
              {
                var aU = -1;
                var aV = function aZ() {
                  {
                    for (; ++aU < aR.length;) {
                      if (al.call(aR, aU)) {
                        aZ.value = aR[aU];
                        aZ.done = false;
                        return aZ;
                      }
                    }
                    aZ.value = ai;
                    aZ.done = true;
                    return aZ;
                  }
                };
                return aV.next = aV;
              }
            }
          }
        }
        throw new TypeError(b(aR) + " is not iterable");
      }
    }
    aA.prototype = aB;
    am(aF, "constructor", {
      value: aB,
      configurable: true
    });
    am(aB, "constructor", {
      value: aA,
      configurable: true
    });
    aA.displayName = ar(aB, aq, "GeneratorFunction");
    aj.isGeneratorFunction = function (aR) {
      {
        var aS = "function" == typeof aR && aR.constructor;
        return !!aS && (aS === aA || "GeneratorFunction" === (aS.displayName || aS.name));
      }
    };
    aj.mark = function (aR) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aR, aB) : (aR.__proto__ = aB, ar(aR, aq, "GeneratorFunction"));
      aR.prototype = Object.create(aF);
      return aR;
    };
    aj.awrap = function (aR) {
      {
        var aS = {
          __await: aR
        };
        return aS;
      }
    };
    aG(aH.prototype);
    ar(aH.prototype, ap, function () {
      {
        return this;
      }
    });
    aj.AsyncIterator = aH;
    aj.async = function (aR, aS, aT, aU, aV) {
      {
        undefined === aV && (aV = Promise);
        var aX = new aH(as(aR, aS, aT, aU), aV);
        return aj.isGeneratorFunction(aS) ? aX : aX.next().then(function (aZ) {
          {
            return aZ.done ? aZ.value : aX.next();
          }
        });
      }
    };
    aG(aF);
    ar(aF, aq, "Generator");
    ar(aF, ao, function () {
      return this;
    });
    ar(aF, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    aj.keys = function (aR) {
      {
        var aT = Object(aR);
        var aU = [];
        for (var aV in aT) aU.push(aV);
        aU.reverse();
        return function aW() {
          {
            for (; aU.length;) {
              {
                var aY = aU.pop();
                if (aY in aT) {
                  aW.value = aY;
                  aW.done = false;
                  return aW;
                }
              }
            }
            aW.done = true;
            return aW;
          }
        };
      }
    };
    aj.values = aN;
    aM.prototype = {
      constructor: aM,
      reset: function (aR) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ai, this.done = false, this.delegate = null, this.method = "next", this.arg = ai, this.tryEntries.forEach(aL), !aR) {
            for (var aS in this) "t" === aS.charAt(0) && al.call(this, aS) && !isNaN(+aS.slice(1)) && (this[aS] = ai);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aR = this.tryEntries[0].completion;
          if ("throw" === aR.type) {
            throw aR.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aR) {
        {
          if (this.done) {
            throw aR;
          }
          var aT = this;
          function b0(b1, b2) {
            {
              aW.type = "throw";
              aW.arg = aR;
              aT.next = b1;
              b2 && (aT.method = "next", aT.arg = ai);
              return !!b2;
            }
          }
          for (var aU = this.tryEntries.length - 1; aU >= 0; --aU) {
            {
              var aV = this.tryEntries[aU];
              var aW = aV.completion;
              if ("root" === aV.tryLoc) {
                return b0("end");
              }
              if (aV.tryLoc <= this.prev) {
                {
                  var aX = al.call(aV, "catchLoc");
                  var aY = al.call(aV, "finallyLoc");
                  if (aX && aY) {
                    {
                      if (this.prev < aV.catchLoc) {
                        return b0(aV.catchLoc, true);
                      }
                      if (this.prev < aV.finallyLoc) {
                        return b0(aV.finallyLoc);
                      }
                    }
                  } else {
                    if (aX) {
                      {
                        if (this.prev < aV.catchLoc) {
                          return b0(aV.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aY) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aV.finallyLoc) {
                          return b0(aV.finallyLoc);
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
      abrupt: function (aR, aS) {
        {
          for (var aT = this.tryEntries.length - 1; aT >= 0; --aT) {
            {
              var aU = this.tryEntries[aT];
              if (aU.tryLoc <= this.prev && al.call(aU, "finallyLoc") && this.prev < aU.finallyLoc) {
                {
                  var aV = aU;
                  break;
                }
              }
            }
          }
          aV && ("break" === aR || "continue" === aR) && aV.tryLoc <= aS && aS <= aV.finallyLoc && (aV = null);
          var aW = aV ? aV.completion : {};
          aW.type = aR;
          aW.arg = aS;
          return aV ? (this.method = "next", this.next = aV.finallyLoc, ay) : this.complete(aW);
        }
      },
      complete: function (aR, aS) {
        {
          if ("throw" === aR.type) {
            throw aR.arg;
          }
          "break" === aR.type || "continue" === aR.type ? this.next = aR.arg : "return" === aR.type ? (this.rval = this.arg = aR.arg, this.method = "return", this.next = "end") : "normal" === aR.type && aS && (this.next = aS);
          return ay;
        }
      },
      finish: function (aR) {
        {
          for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
            {
              var aT = this.tryEntries[aS];
              if (aT.finallyLoc === aR) {
                this.complete(aT.completion, aT.afterLoc);
                aL(aT);
                return ay;
              }
            }
          }
        }
      },
      catch: function (aR) {
        {
          for (var aT = this.tryEntries.length - 1; aT >= 0; --aT) {
            {
              var aU = this.tryEntries[aT];
              if (aU.tryLoc === aR) {
                {
                  var aV = aU.completion;
                  if ("throw" === aV.type) {
                    {
                      var aW = aV.arg;
                      aL(aU);
                    }
                  }
                  return aW;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aR, aS, aT) {
        this.delegate = {
          iterator: aN(aR),
          resultName: aS,
          nextLoc: aT
        };
        "next" === this.method && (this.arg = ai);
        return ay;
      }
    };
    return aj;
  }
  function h(ah, ai, aj, ak, al, am, an) {
    {
      try {
        {
          var aq = ah[am](an);
          var ar = aq.value;
        }
      } catch (at) {
        {
          return void aj(at);
        }
      }
      aq.done ? ai(ar) : Promise.resolve(ar).then(ak, al);
    }
  }
  function i(ah) {
    return function () {
      var ak = this;
      var al = arguments;
      return new Promise(function (am, an) {
        var ap = ah.apply(ak, al);
        function aq(as) {
          {
            h(ap, am, an, aq, ar, "next", as);
          }
        }
        function ar(as) {
          {
            h(ap, am, an, aq, ar, "throw", as);
          }
        }
        aq(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.XZXXN : $.getdata("XZXXN")) || "";
  var k = ($.isNode() ? process.env.XZXXNSERVER : $.getdata("XZXXNSERVER")) || "https://dalaoshi.xn--ug8h.eu.org";
  var l = ($.isNode() ? process.env.OuHai : $.getdata("OuHai")) || "";
  var m = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var n = undefined;
  window = {};
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "";
  var B = "";
  var C = "78";
  var D = "10032";
  var E = "FR*r!isE5W";
  function F() {
    {
      return G.apply(this, arguments);
    }
  }
  function G() {
    G = i(g().mark(function ai() {
      {
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
        return g().wrap(function (aT) {
          {
            for (;;) {
              switch (aT.prev = aT.next) {
                case 0:
                  if (l) {
                    {
                      aT.next = 5;
                      break;
                    }
                  }
                  console.log("先填写账号密码");
                  aT.next = 4;
                  return af("先填写账号密码");
                case 4:
                  return aT.abrupt("return");
                case 5:
                  aT.next = 7;
                  return ab();
                case 7:
                  n = aT.sent;
                  ak = l.split(" ");
                  al = c(ak);
                  aT.prev = 10;
                  al.s();
                case 12:
                  if ((am = al.n()).done) {
                    {
                      aT.next = 119;
                      break;
                    }
                  }
                  an = am.value;
                  aT.prev = 14;
                  console.log("随机生成UA");
                  ap = a7();
                  w = ap.ua;
                  x = ap.commonUa;
                  y = ap.uuid;
                  console.log(w);
                  console.log(x);
                  s = an.split("&")[0];
                  t = an.split("&")[1];
                  u = an.split("&")[2];
                  v = an.split("&")[3] || s;
                  console.log("用户：".concat(s, "开始任务"));
                  aT.next = 29;
                  return a9({
                    token: j,
                    type: "OuHai",
                    userId: s
                  });
                case 29:
                  if (aq = aT.sent, 200 == (null == aq ? undefined : aq.code)) {
                    {
                      aT.next = 33;
                      break;
                    }
                  }
                  console.log(null == aq ? undefined : aq.msg);
                  return aT.abrupt("continue", 117);
                case 33:
                  console.log("获取sessionId");
                  aT.next = 36;
                  return N("/api/account/init");
                case 36:
                  ar = aT.sent;
                  q = ar.data.session.id;
                  console.log(q);
                  console.log("获取signature_key");
                  aT.next = 42;
                  return H("/web/init?client_id=".concat(D));
                case 42:
                  as = aT.sent;
                  o = as.data.client.signature_key;
                  console.log(o);
                  console.log("获取code");
                  aT.next = 48;
                  return J("/web/oauth/credential_auth");
                case 48:
                  if (at = aT.sent, at.data) {
                    {
                      aT.next = 52;
                      break;
                    }
                  }
                  console.log(at.message);
                  return aT.abrupt("continue", 117);
                case 52:
                  au = at.data.authorization_code.code;
                  console.log(au);
                  aT.next = 56;
                  return N("/api/zbtxz/login", "check_token=&code=".concat(au, "&token=&type=-1&union_id="));
                case 56:
                  if (av = aT.sent, 0 == av.code) {
                    {
                      aT.next = 60;
                      break;
                    }
                  }
                  console.log(av.message);
                  return aT.abrupt("continue", 117);
                case 60:
                  console.log("登录成功");
                  r = av.data.session.account_id;
                  q = av.data.session.id;
                  aT.next = 65;
                  return P("/customActivity/zjtm/autoLogin?_=".concat(Date.now(), "&sessionId=").concat(q, "&accountId=").concat(r, "&redirectUrl=https://94227.activity-42.m.duiba.com.cn/chw/visual-editor/skins?id=299044"));
                case 65:
                  aw = aT.sent;
                  ax = aw.data;
                  z = "";
                  aT.next = 70;
                  return Z(ax);
                case 70:
                  z = aT.sent;
                  console.log("————————————");
                  console.log("夺宝");
                  aT.next = 75;
                  return T("https://94227.activity-42.m.duiba.com.cn/chw/visual-editor/skins?id=299044&from=login&spm=94227.1.1.1");
                case 75:
                  if (ay = aT.sent, ay) {
                    {
                      aT.next = 79;
                      break;
                    }
                  }
                  console.log("获取夺宝id失败");
                  return aT.abrupt("continue", 117);
                case 79:
                  aT.next = 81;
                  return R("/sign/treasure/homeInfo?_=".concat(Date.now(), "&id=").concat(ay));
                case 81:
                  az = aT.sent;
                  aT.next = 84;
                  return a1("/sign/treasure/sign?_=".concat(Date.now()), "phaseId=".concat(az.data.phaseId, "&id=").concat(ay));
                case 84:
                  if (aA = aT.sent, !aA.success) {
                    {
                      aT.next = 93;
                      break;
                    }
                  }
                  console.log("签到成功");
                  aT.next = 89;
                  return R("/sign/treasure/getSignResult?_=".concat(Date.now(), "&logId=").concat(aA.data.logId));
                case 89:
                  if (aB = aT.sent, aB.success) {
                    {
                      aC = c(aB.data.codes);
                      try {
                        {
                          for (aC.s(); !(aD = aC.n()).done;) {
                            aE = aD.value;
                            console.log("获得夺宝码：".concat(aE));
                          }
                        }
                      } catch (b4) {
                        {
                          aC.e(b4);
                        }
                      } finally {
                        aC.f();
                      }
                    }
                  } else {
                    console.log(aB.desc);
                  }
                  aT.next = 94;
                  break;
                case 93:
                  console.log(aA.desc);
                case 94:
                  aT.next = 96;
                  return R("/sign/treasure/history?_=".concat(Date.now(), "&id=").concat(ay, "&pageNo=1&pageSize=20"));
                case 96:
                  if (aF = aT.sent, null != aF && null !== (ao = aF.data) && undefined !== ao && ao.list) {
                    {
                      aG = c(aF.data.list);
                      try {
                        {
                          for (aG.s(); !(aH = aG.n()).done;) {
                            {
                              aI = aH.value;
                              console.log("".concat(aI.phaseNumber, "期"));
                              aJ = c(aI.codes);
                              try {
                                {
                                  for (aJ.s(); !(aK = aJ.n()).done;) {
                                    aL = aK.value;
                                    0 != aL.prizeLevel && (console.log("获得：".concat(aL.prizeLevel, "等奖")), 1 == aL.rewardStatus ? console.log("未领取") : console.log("已领取"));
                                  }
                                }
                              } catch (b9) {
                                {
                                  aJ.e(b9);
                                }
                              } finally {
                                {
                                  aJ.f();
                                }
                              }
                            }
                          }
                        }
                      } catch (be) {
                        aG.e(be);
                      } finally {
                        {
                          aG.f();
                        }
                      }
                    }
                  }
                  aT.next = 100;
                  return R("/sign/treasure/waitWinRecord?_=".concat(Date.now(), "&id=").concat(ay));
                case 100:
                  aM = aT.sent;
                  aN = c(aM.data);
                  try {
                    {
                      for (aN.s(); !(aO = aN.n()).done;) {
                        aP = aO.value;
                        console.log("奖品：".concat(aP.prizeName));
                        p += "用户：".concat(s, " 奖品：").concat(aP.prizeName, "\n");
                      }
                    }
                  } catch (bi) {
                    {
                      aN.e(bi);
                    }
                  } finally {
                    aN.f();
                  }
                  aT.next = 105;
                  return L("/api/user_mumber/sign");
                case 105:
                  aQ = aT.sent;
                  console.log("签到获得：".concat(aQ.data.signIntegral, "积分"));
                  aT.next = 109;
                  return L("/api/user_mumber/account_detail");
                case 109:
                  aR = aT.sent;
                  console.log("拥有积分：".concat(aR.data.rst.total_integral, "\n"));
                  p += "用户：".concat(s, " 积分：").concat(aR.data.rst.total_integral, "\n");
                  aT.next = 117;
                  break;
                case 114:
                  aT.prev = 114;
                  aT.t0 = aT.catch(14);
                  console.log(aT.t0);
                case 117:
                  aT.next = 12;
                  break;
                case 119:
                  aT.next = 124;
                  break;
                case 121:
                  aT.prev = 121;
                  aT.t1 = aT.catch(10);
                  al.e(aT.t1);
                case 124:
                  aT.prev = 124;
                  al.f();
                  return aT.finish(124);
                case 127:
                  if (!p) {
                    {
                      aT.next = 130;
                      break;
                    }
                  }
                  aT.next = 130;
                  return af(p);
                case 130:
                case "end":
                  return aT.stop();
              }
            }
          }
        }, ai, null, [[10, 121, 124, 127], [14, 114]]);
      }
    }));
    return G.apply(this, arguments);
  }
  function H(ah) {
    {
      return I.apply(this, arguments);
    }
  }
  function I() {
    {
      I = i(g().mark(function aj(ak) {
        {
          return g().wrap(function (am) {
            {
              for (;;) {
                switch (am.prev = am.next) {
                  case 0:
                    return am.abrupt("return", new Promise(function (ao) {
                      {
                        var ap = {
                          url: "https://passport.tmuyun.com".concat(ak),
                          headers: {
                            Connection: "Keep-Alive",
                            "Cache-Control": "no-cache",
                            "X-REQUEST-ID": a5(),
                            "Accept-Encoding": "gzip",
                            "user-agent": w
                          }
                        };
                        $.get(ap, function () {
                          {
                            var as = i(g().mark(function au(av, aw, ax) {
                              return g().wrap(function (aA) {
                                {
                                  for (;;) {
                                    switch (aA.prev = aA.next) {
                                      case 0:
                                        try {
                                          {
                                            av ? (console.log("".concat(JSON.stringify(av))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ao(JSON.parse(ax));
                                          }
                                        } catch (aC) {
                                          {
                                            $.logErr(aC, aw);
                                          }
                                        } finally {
                                          {
                                            ao();
                                          }
                                        }
                                      case 1:
                                      case "end":
                                        return aA.stop();
                                    }
                                  }
                                }
                              }, au);
                            }));
                            return function (av, aw, ax) {
                              {
                                return as.apply(this, arguments);
                              }
                            };
                          }
                        }());
                      }
                    }));
                  case 1:
                  case "end":
                    return am.stop();
                }
              }
            }
          }, aj);
        }
      }));
      return I.apply(this, arguments);
    }
  }
  function J(ah) {
    return K.apply(this, arguments);
  }
  function K() {
    {
      K = i(g().mark(function aj(ak) {
        {
          var am;
          return g().wrap(function (an) {
            {
              for (;;) {
                switch (an.prev = an.next) {
                  case 0:
                    am = a3();
                    return an.abrupt("return", new Promise(function (ap) {
                      {
                        var ar = {
                          url: "https://passport.tmuyun.com".concat(ak),
                          headers: {
                            Connection: "Keep-Alive",
                            "X-REQUEST-ID": am.uuid,
                            "X-SIGNATURE": am.signature,
                            "Cache-Control": "no-cache",
                            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                            "Accept-Encoding": "gzip",
                            "user-agent": w
                          },
                          body: am.body
                        };
                        $.post(ar, function () {
                          {
                            var au = i(g().mark(function aw(ax, ay, az) {
                              return g().wrap(function (aD) {
                                {
                                  for (;;) {
                                    switch (aD.prev = aD.next) {
                                      case 0:
                                        try {
                                          {
                                            ax ? (console.log("".concat(JSON.stringify(ax))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ap(JSON.parse(az));
                                          }
                                        } catch (aF) {
                                          {
                                            $.logErr(aF, ay);
                                          }
                                        } finally {
                                          {
                                            ap();
                                          }
                                        }
                                      case 1:
                                      case "end":
                                        return aD.stop();
                                    }
                                  }
                                }
                              }, aw);
                            }));
                            return function (ax, ay, az) {
                              {
                                return au.apply(this, arguments);
                              }
                            };
                          }
                        }());
                      }
                    }));
                  case 2:
                  case "end":
                    return an.stop();
                }
              }
            }
          }, aj);
        }
      }));
      return K.apply(this, arguments);
    }
  }
  function L(ah) {
    {
      return M.apply(this, arguments);
    }
  }
  function M() {
    M = i(g().mark(function ai(aj) {
      var al;
      return g().wrap(function (am) {
        for (;;) {
          switch (am.prev = am.next) {
            case 0:
              al = a4(aj);
              return am.abrupt("return", new Promise(function (an) {
                {
                  var ap = {
                    url: "https://vapp.tmuyun.com".concat(aj),
                    headers: {
                      Connection: "Keep-Alive",
                      "X-TIMESTAMP": al.time,
                      "X-SESSION-ID": q,
                      "X-REQUEST-ID": al.uuid,
                      "X-SIGNATURE": al.signature,
                      "X-TENANT-ID": C,
                      "X-ACCOUNT-ID": r,
                      "Cache-Control": "no-cache",
                      "Accept-Encoding": "gzip",
                      "user-agent": x
                    }
                  };
                  $.get(ap, function () {
                    {
                      var ar = i(g().mark(function at(au, av, aw) {
                        return g().wrap(function (az) {
                          {
                            for (;;) {
                              switch (az.prev = az.next) {
                                case 0:
                                  if (az.prev = 0, !au) {
                                    {
                                      az.next = 6;
                                      break;
                                    }
                                  }
                                  console.log("".concat(JSON.stringify(au)));
                                  console.log("".concat($.name, " API请求失败，请检查网路重试"));
                                  az.next = 9;
                                  break;
                                case 6:
                                  az.next = 8;
                                  return $.wait(2000);
                                case 8:
                                  an(JSON.parse(aw));
                                case 9:
                                  az.next = 14;
                                  break;
                                case 11:
                                  az.prev = 11;
                                  az.t0 = az.catch(0);
                                  $.logErr(az.t0, av);
                                case 14:
                                  az.prev = 14;
                                  an();
                                  return az.finish(14);
                                case 17:
                                case "end":
                                  return az.stop();
                              }
                            }
                          }
                        }, at, null, [[0, 11, 14, 17]]);
                      }));
                      return function (au, av, aw) {
                        {
                          return ar.apply(this, arguments);
                        }
                      };
                    }
                  }());
                }
              }));
            case 2:
            case "end":
              return am.stop();
          }
        }
      }, ai);
    }));
    return M.apply(this, arguments);
  }
  function N(ah, ai) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function ai(aj, ak) {
      var al;
      return g().wrap(function (am) {
        for (;;) {
          switch (am.prev = am.next) {
            case 0:
              al = a4(aj);
              return am.abrupt("return", new Promise(function (ao) {
                var aq = {
                  url: "https://vapp.tmuyun.com".concat(aj),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": al.time,
                    "X-SESSION-ID": q,
                    "X-REQUEST-ID": al.uuid,
                    "X-SIGNATURE": al.signature,
                    "X-TENANT-ID": C,
                    "X-ACCOUNT-ID": r,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": x
                  },
                  body: ak
                };
                $.post(aq, function () {
                  var as = i(g().mark(function at(au, av, aw) {
                    return g().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            if (ax.prev = 0, !au) {
                              ax.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(au)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ax.next = 9;
                            break;
                          case 6:
                            ax.next = 8;
                            return $.wait(2000);
                          case 8:
                            ao(JSON.parse(aw));
                          case 9:
                            ax.next = 14;
                            break;
                          case 11:
                            ax.prev = 11;
                            ax.t0 = ax.catch(0);
                            $.logErr(ax.t0, av);
                          case 14:
                            ax.prev = 14;
                            ao();
                            return ax.finish(14);
                          case 17:
                          case "end":
                            return ax.stop();
                        }
                      }
                    }, at, null, [[0, 11, 14, 17]]);
                  }));
                  return function (au, av, aw) {
                    return as.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return am.stop();
          }
        }
      }, ai);
    }));
    return O.apply(this, arguments);
  }
  function P(ah) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ai(aj) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://activity.m.duiba.com.cn".concat(aj),
                  headers: {
                    accept: "*/*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                    "x-requested-with": "net.ohnews.www",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !as) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            am();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ai);
    }));
    return Q.apply(this, arguments);
  }
  function R(ah) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function ai(aj) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
                var ap = {
                  url: "https://94227.activity-42.m.duiba.com.cn".concat(aj),
                  headers: {
                    accept: "*/*",
                    "simulated-parameters": "50b8d458fe9a96cd46945b0359cb93bd",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                    "x-requested-with": "net.ohnews.www",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://94227.activity-42.m.duiba.com.cn/galaxy/app/project/".concat(A, "/index.html"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: z
                  }
                };
                $.get(ap, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !as) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 9;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(JSON.parse(au));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, at);
                          case 14:
                            aw.prev = 14;
                            an();
                            return aw.finish(14);
                          case 17:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ai);
    }));
    return S.apply(this, arguments);
  }
  function T(ah) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ai(aj) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var ao = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                  "x-requested-with": "net.ohnews.www",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: z
                };
                var aq = {
                  url: aj,
                  headers: ao
                };
                $.get(aq, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    var ax;
                    var ay;
                    var az;
                    return g().wrap(function (aA) {
                      for (;;) {
                        switch (aA.prev = aA.next) {
                          case 0:
                            if (aA.prev = 0, !at) {
                              aA.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aA.next = 17;
                            break;
                          case 6:
                            aA.next = 8;
                            return $.wait(2000);
                          case 8:
                            ax = /\/galaxy\/app\/project\/(\d+)\/index/;
                            ay = av.match(ax);
                            ay && (A = ay[1]);
                            az = "";
                            ax = /sign\/treasure\/index\?id=(\d+)/;
                            ay = av.match(ax);
                            ay && (az = ay[1]);
                            console.log(az);
                            am(az);
                          case 17:
                            aA.next = 22;
                            break;
                          case 19:
                            aA.prev = 19;
                            aA.t0 = aA.catch(0);
                            $.logErr(aA.t0, au);
                          case 22:
                            aA.prev = 22;
                            am();
                            return aA.finish(22);
                          case 25:
                          case "end":
                            return aA.stop();
                        }
                      }
                    }, as, null, [[0, 19, 22, 25]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ai);
    }));
    return U.apply(this, arguments);
  }
  function V(ah) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ah(ai) {
      return g().wrap(function ak(al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
                var ap = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                  "x-requested-with": "net.ohnews.www",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: z
                };
                var ar = {
                  url: ai,
                  headers: ap
                };
                $.get(ar, function () {
                  var as = i(g().mark(function at(au, av, aw) {
                    var ay;
                    return g().wrap(function az(aA) {
                      for (;;) {
                        switch (aA.prev = aA.next) {
                          case 0:
                            if (aA.prev = 0, !au) {
                              aA.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(au)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aA.next = 13;
                            break;
                          case 6:
                            aA.next = 8;
                            return $.wait(2000);
                          case 8:
                            aw = JSON.parse(aw);
                            eval(aw.data);
                            ay = /var\s+key\s+=\s+'([^']+)';/.exec(aWlgXsMotnsZuy.toString())[1];
                            console.log(ay);
                            an(ay);
                          case 13:
                            aA.next = 18;
                            break;
                          case 15:
                            aA.prev = 15;
                            aA.t0 = aA.catch(0);
                            $.logErr(aA.t0, av);
                          case 18:
                            aA.prev = 18;
                            an();
                            return aA.finish(18);
                          case 21:
                          case "end":
                            return aA.stop();
                        }
                      }
                    }, at, null, [[0, 15, 18, 21]]);
                  }));
                  return function (au, av, aw) {
                    return as.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ah);
    }));
    return W.apply(this, arguments);
  }
  function X(ah) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function ah(ai) {
      return g().wrap(function ak(al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
                var ao = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                  "x-requested-with": "net.ohnews.www",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: z
                };
                var aq = {
                  url: ai,
                  headers: ao
                };
                $.get(aq, function () {
                  var as = i(g().mark(function at(au, av, aw) {
                    var ay;
                    var az;
                    var aA;
                    var aB;
                    var aC;
                    var aD;
                    var aE;
                    return g().wrap(function aF(aG) {
                      for (;;) {
                        switch (aG.prev = aG.next) {
                          case 0:
                            if (aG.prev = 0, !au) {
                              aG.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(au)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aG.next = 19;
                            break;
                          case 6:
                            aG.next = 8;
                            return $.wait(2000);
                          case 8:
                            console.log("获取prizeId");
                            B = "";
                            ay = /prizeId: '(\d+)'/;
                            az = aw.match(ay);
                            az && (B = az[1]);
                            console.log(B);
                            aA = "";
                            aB = aw.match(/<script>[\s\S]*?>[\s\S]*?<\/script>/gi);
                            aB && aB.length > 0 && (aC = aB[aB.length - 1], aD = aC.match(/<script[^>]*>([\s\S]*?)<\/script>/i), aE = aD ? aD[1] : "", eval(aE), aA = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1]);
                            console.log(aA);
                            an(aA);
                          case 19:
                            aG.next = 24;
                            break;
                          case 21:
                            aG.prev = 21;
                            aG.t0 = aG.catch(0);
                            $.logErr(aG.t0, av);
                          case 24:
                            aG.prev = 24;
                            an();
                            return aG.finish(24);
                          case 27:
                          case "end":
                            return aG.stop();
                        }
                      }
                    }, at, null, [[0, 21, 24, 27]]);
                  }));
                  return function (au, av, aw) {
                    return as.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ah);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ah) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function ai(aj) {
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (am) {
                var ao = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                  "x-requested-with": "net.ohnews.www",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-user": "?1",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var ap = {
                  url: "https:".concat(aj),
                  headers: ao,
                  followRedirect: false
                };
                $.get(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    var aw;
                    var ax;
                    var ay;
                    return g().wrap(function (az) {
                      for (;;) {
                        switch (az.prev = az.next) {
                          case 0:
                            if (az.prev = 0, !at) {
                              az.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            az.next = 11;
                            break;
                          case 6:
                            az.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (aw = "", $.isNode()) {
                              for (ax = au.headers["set-cookie"] || au.headers["Set-Cookie"], ay = 0; ay < ax.length; ay++) {
                                aw += ax[ay].split(";")[0] + ";";
                              }
                            } else {
                              aw = au.headers["set-cookie"] || au.headers["Set-Cookie"];
                              aw = a8(aw);
                            }
                            am(aw);
                          case 11:
                            az.next = 16;
                            break;
                          case 13:
                            az.prev = 13;
                            az.t0 = az.catch(0);
                            $.logErr(az.t0, au);
                          case 16:
                            az.prev = 16;
                            am();
                            return az.finish(16);
                          case 19:
                          case "end":
                            return az.stop();
                        }
                      }
                    }, as, null, [[0, 13, 16, 19]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ai);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ah, ai) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function ai(aj, ak) {
      return g().wrap(function (an) {
        for (;;) {
          switch (an.prev = an.next) {
            case 0:
              return an.abrupt("return", new Promise(function (ao) {
                var aq = {
                  url: "https://94227.activity-42.m.duiba.com.cn".concat(aj),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://94227.activity-42.m.duiba.com.cn",
                    cookie: z,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://94227.activity-42.m.duiba.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: ak
                };
                $.post(aq, function () {
                  var as = i(g().mark(function at(au, av, aw) {
                    return g().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            if (ax.prev = 0, !au) {
                              ax.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(au)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ax.next = 9;
                            break;
                          case 6:
                            ax.next = 8;
                            return $.wait(2000);
                          case 8:
                            ao(JSON.parse(aw));
                          case 9:
                            ax.next = 14;
                            break;
                          case 11:
                            ax.prev = 11;
                            ax.t0 = ax.catch(0);
                            $.logErr(ax.t0, av);
                          case 14:
                            ax.prev = 14;
                            ao();
                            return ax.finish(14);
                          case 17:
                          case "end":
                            return ax.stop();
                        }
                      }
                    }, at, null, [[0, 11, 14, 17]]);
                  }));
                  return function (au, av, aw) {
                    return as.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return an.stop();
          }
        }
      }, ai);
    }));
    return a2.apply(this, arguments);
  }
  function a3() {
    var ah = new (n.loadJSEncrypt())();
    ah.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    t = ah.encrypt(t);
    var ai = a5();
    var aj = "client_id=".concat(D, "&password=").concat(t, "&phone_number=").concat(s);
    var ak = "post%%/web/oauth/credential_auth?".concat(aj, "%%").concat(ai, "%%");
    aj = "client_id=".concat(D, "&password=").concat(encodeURIComponent(t), "&phone_number=").concat(s);
    CryptoJS = n.createCryptoJS();
    var al = CryptoJS.HmacSHA256(ak, o);
    var am = CryptoJS.enc.Hex.stringify(al);
    var an = {
      uuid: ai,
      signature: am,
      body: aj
    };
    return an;
  }
  function a4(ah) {
    var ai = a5();
    var aj = Date.now();
    ah.indexOf("?") > 0 && (ah = ah.substring(0, ah.indexOf("?")));
    CryptoJS = n.createCryptoJS();
    var ak = CryptoJS.SHA256("".concat(ah, "&&").concat(q, "&&").concat(ai, "&&").concat(aj, "&&").concat(E, "&&").concat(C)).toString();
    var al = {
      uuid: ai,
      time: aj,
      signature: ak
    };
    return al;
  }
  function a5() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ah) {
      var ai = 16 * Math.random() | 0;
      var aj = "x" === ah ? ai : 3 & ai | 8;
      return aj.toString(16);
    });
  }
  function a6(ah) {
    return ah[Math.floor(Math.random() * ah.length)];
  }
  function a7() {
    var ah = "5.0.3";
    var ai = a5();
    var aj = a6(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ak = "Xiaomi " + aj;
    var al = "Android";
    var am = "".concat(al.toUpperCase(), ";").concat("11", ";").concat(D, ";").concat(ah, ";1.0;null;").concat(aj);
    var an = "".concat(ah, ";").concat(ai, ";").concat(ak, ";").concat(al, ";").concat("11", ";Release;").concat("6.8.0");
    var ao = {
      ua: am,
      commonUa: an,
      uuid: ai
    };
    return ao;
  }
  function a8(ah) {
    var ai = ah.split(", ");
    var aj = ai.map(function (ak) {
      var al = ak.split(";")[0];
      return al.trim();
    });
    return aj.join(";");
  }
  function a9(ah) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function ai(aj) {
      return g().wrap(function (am) {
        for (;;) {
          switch (am.prev = am.next) {
            case 0:
              return am.abrupt("return", new Promise(function (ao) {
                var ap = {
                  url: "".concat(k, "/token/verify"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(aj)
                };
                $.post(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            try {
                              at ? (console.log("".concat(JSON.stringify(at))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ao(JSON.parse(av));
                            } catch (ay) {
                              $.logErr(ay, au);
                            } finally {
                              ao();
                            }
                          case 1:
                          case "end":
                            return ax.stop();
                        }
                      }
                    }, as);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return am.stop();
          }
        }
      }, ai);
    }));
    return aa.apply(this, arguments);
  }
  function ab() {
    return ac.apply(this, arguments);
  }
  function ac() {
    ac = i(g().mark(function ai() {
      var ak;
      return g().wrap(function al(am) {
        for (;;) {
          switch (am.prev = am.next) {
            case 0:
              if (ak = $.getdata("Utils_Code") || "", !ak || !Object.keys(ak).length) {
                am.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ak);
              return am.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return am.abrupt("return", new Promise(function () {
                var ao = i(g().mark(function ap(aq) {
                  return g().wrap(function as(at) {
                    for (;;) {
                      switch (at.prev = at.next) {
                        case 0:
                          $.getScript("".concat(m, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (au) {
                            $.setdata(au, "Utils_Code");
                            eval(au);
                            console.log("✅ Utils加载成功, 请继续");
                            aq(creatUtils());
                          });
                        case 1:
                        case "end":
                          return at.stop();
                      }
                    }
                  }, ap);
                }));
                return function (aq) {
                  return ao.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return am.stop();
          }
        }
      }, ai);
    }));
    return ac.apply(this, arguments);
  }
  function ad() {
    return ae.apply(this, arguments);
  }
  function ae() {
    ae = i(g().mark(function ai() {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            try {
                              ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(at).notice);
                            } catch (aw) {
                              $.logErr(aw, as);
                            } finally {
                              al();
                            }
                          case 1:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, aq);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, ai);
    }));
    return ae.apply(this, arguments);
  }
  function af(ah) {
    return ag.apply(this, arguments);
  }
  function ag() {
    ag = i(g().mark(function ai(aj) {
      return g().wrap(function (am) {
        for (;;) {
          switch (am.prev = am.next) {
            case 0:
              if (!$.isNode()) {
                am.next = 5;
                break;
              }
              am.next = 3;
              return notify.sendNotify($.name, aj);
            case 3:
              am.next = 6;
              break;
            case 5:
              $.msg($.name, "", aj);
            case 6:
            case "end":
              return am.stop();
          }
        }
      }, ai);
    }));
    return ag.apply(this, arguments);
  }
  i(g().mark(function ah() {
    return g().wrap(function (aj) {
      for (;;) {
        switch (aj.prev = aj.next) {
          case 0:
            aj.next = 2;
            return ad();
          case 2:
            aj.next = 4;
            return F();
          case 4:
          case "end":
            return aj.stop();
        }
      }
    }, ah);
  }))().catch(function (ai) {
    $.log(ai);
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