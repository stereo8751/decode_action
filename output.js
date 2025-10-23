//Thu Oct 23 2025 12:07:05 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("爱仙居");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(af) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ah) {
      {
        return typeof ah;
      }
    } : function (ah) {
      {
        return ah && "function" == typeof Symbol && ah.constructor === Symbol && ah !== Symbol.prototype ? "symbol" : typeof ah;
      }
    };
    return b(af);
  }
  function c(af, ag) {
    {
      var ai = "undefined" != typeof Symbol && af[Symbol.iterator] || af["@@iterator"];
      if (!ai) {
        {
          if (Array.isArray(af) || (ai = d(af)) || ag && af && "number" == typeof af.length) {
            {
              ai && (af = ai);
              var aj = 0;
              var ak = function () {};
              return {
                s: ak,
                n: function () {
                  {
                    var ao = {
                      done: true
                    };
                    return aj >= af.length ? ao : {
                      done: false,
                      value: af[aj++]
                    };
                  }
                },
                e: function (ao) {
                  {
                    throw ao;
                  }
                },
                f: ak
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var al;
      var am = true;
      var an = false;
      return {
        s: function () {
          {
            ai = ai.call(af);
          }
        },
        n: function () {
          {
            var aq = ai.next();
            am = aq.done;
            return aq;
          }
        },
        e: function (aq) {
          {
            an = true;
            al = aq;
          }
        },
        f: function () {
          {
            try {
              {
                am || null == ai.return || ai.return();
              }
            } finally {
              {
                if (an) {
                  throw al;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(af, ag) {
    {
      if (af) {
        {
          if ("string" == typeof af) {
            return f(af, ag);
          }
          var ah = {}.toString.call(af).slice(8, -1);
          "Object" === ah && af.constructor && (ah = af.constructor.name);
          return "Map" === ah || "Set" === ah ? Array.from(af) : "Arguments" === ah || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ah) ? f(af, ag) : undefined;
        }
      }
    }
  }
  function f(af, ag) {
    {
      (null == ag || ag > af.length) && (ag = af.length);
      for (var ah = 0, ai = Array(ag); ah < ag; ah++) {
        ai[ah] = af[ah];
      }
      return ai;
    }
  }
  function g() {
    "use strict";

    var af = {
      IIEyx: function (aM, aN) {
        return aM !== aN;
      },
      anYXn: "WwpUH",
      KuKqh: "finallyLoc",
      OUbey: function (aM, aN, aO) {
        return aM(aN, aO);
      },
      QSDWH: function (aM, aN) {
        return aM < aN;
      },
      PxHWU: function (aM, aN) {
        return aM(aN);
      },
      tiuOo: function (aM, aN) {
        return aM(aN);
      },
      SvocA: "try statement without catch or finally",
      bMFvX: function (aM, aN) {
        return aM(aN);
      },
      grTtO: "YsBdB",
      pxlPD: "throw",
      bVZZG: function (aM, aN) {
        return aM in aN;
      },
      tpiWt: "next",
      peapJ: "return",
      dkxcu: function (aM, aN) {
        return aM !== aN;
      },
      NnLus: "HwCbL",
      pdJlH: "rlwCi",
      dlXoR: "pfTAZ",
      BTxqS: "normal",
      AIbVL: function (aM, aN) {
        return aM === aN;
      },
      FsVDf: "UCUDF",
      TLZbs: function (aM, aN) {
        return aM === aN;
      },
      zyRDr: "utyqX",
      VMmkR: "eYYlR",
      fQAmx: function (aM, aN, aO, aP) {
        return aM(aN, aO, aP);
      },
      qPfpV: function (aM) {
        return aM();
      },
      idmUh: function (aM, aN) {
        return aM === aN;
      },
      bGZjF: "UNHig",
      xMzhv: "end",
      KrDBR: "tVmke",
      CLZjC: function (aM, aN, aO, aP, aQ) {
        return aM(aN, aO, aP, aQ);
      },
      QXVtw: "CPDpK",
      gfYZb: "VKtbk",
      JLdYm: "nmlBr",
      MOglt: "oVcrg",
      dOKpt: function (aM, aN) {
        return aM === aN;
      },
      FLvDe: "iNbSL",
      EovQf: "UexEs",
      ReXNy: function (aM, aN) {
        return aM == aN;
      },
      MiSZd: "object",
      ratZT: function (aM, aN) {
        return aM(aN);
      },
      FMDZR: "__await",
      rEppi: "qiUJs",
      SAchP: "WxgdA",
      OKCKv: "DQPtV",
      xiuXa: function (aM) {
        return aM();
      },
      EHqUV: function (aM, aN) {
        return aM(aN);
      },
      KUUVU: function (aM, aN) {
        return aM(aN);
      },
      mNFEa: "lCvYV",
      ApBkV: function (aM, aN) {
        return aM === aN;
      },
      riQmv: "EpKET",
      WGmlF: function (aM, aN) {
        return aM === aN;
      },
      EBbBk: "vstOy",
      KPmtF: "SJEfa",
      tNkRW: function (aM, aN) {
        return aM === aN;
      },
      pTZoR: function (aM, aN) {
        return aM === aN;
      },
      zCrIy: "uZrnQ",
      vpkgs: function (aM, aN) {
        return aM === aN;
      },
      aaFQi: "eyEgX",
      rdASX: function (aM, aN) {
        return aM !== aN;
      },
      TcAXW: "Uztvj",
      YDFbp: "Vgdmt",
      QFkLR: function (aM, aN) {
        return aM === aN;
      },
      FhqgU: function (aM, aN) {
        return aM !== aN;
      },
      esXby: "The iterator does not provide a '",
      vwZNC: "' method",
      iloRo: "iterator result is not an object",
      CnjBJ: function (aM, aN) {
        return aM === aN;
      },
      xbNPR: function (aM, aN) {
        return aM === aN;
      },
      QctAE: "KqxqJ",
      eOBLW: "gzpXP",
      ygGvy: "✅ Utils加载成功, 请继续",
      cigUV: function (aM) {
        return aM();
      },
      nCPgt: function (aM, aN) {
        return aM >= aN;
      },
      gKHxc: function (aM, aN) {
        return aM === aN;
      },
      OJfvo: "GQdhd",
      ycemH: function (aM, aN) {
        return aM !== aN;
      },
      LZJdg: "keJUk",
      auXKG: "GTJiE",
      yvkRB: function (aM, aN) {
        return aM === aN;
      },
      fZPOj: "oPhZs",
      iriXd: "function",
      OchJR: function (aM, aN) {
        return aM(aN);
      },
      MjlRH: "psVAn",
      CXuLR: "hUDeO",
      woOdf: function (aM, aN) {
        return aM + aN;
      },
      dESvY: function (aM, aN) {
        return aM(aN);
      },
      YkMTH: " is not iterable",
      owmLi: "UAnQr",
      bTZam: function (aM, aN) {
        return aM === aN;
      },
      HHpqt: "GeneratorFunction",
      HxaEu: function (aM, aN) {
        return aM === aN;
      },
      iUjND: "PgzEC",
      HXpop: "PaFsF",
      brPFX: "[object Generator]",
      xKbMv: function (aM, aN) {
        return aM - aN;
      },
      QpLZb: "mqmbL",
      sbRcZ: function (aM, aN) {
        return aM === aN;
      },
      Hbsgw: function (aM, aN) {
        return aM === aN;
      },
      aSWTD: "FMgTI",
      ZsfsO: " API请求失败，请检查网路重试",
      PkVeu: function (aM) {
        return aM();
      },
      fLhjr: function (aM, aN, aO, aP, aQ, aR, aS, aT) {
        return aM(aN, aO, aP, aQ, aR, aS, aT);
      },
      mMaqJ: function (aM, aN) {
        return aM !== aN;
      },
      dJzmJ: "naacn",
      sbfyv: function (aM, aN) {
        return aM !== aN;
      },
      nOrRp: "owEEY",
      fiuLI: "ZWUti",
      Bcgef: function (aM, aN) {
        return aM <= aN;
      },
      ICUVN: function (aM, aN) {
        return aM < aN;
      },
      wseMo: function (aM, aN) {
        return aM !== aN;
      },
      VdwKw: "OqGfs",
      iFCDE: "break",
      oWTuW: function (aM, aN) {
        return aM <= aN;
      },
      HnqkW: function (aM, aN) {
        return aM - aN;
      },
      VwylU: "befLN",
      xjllt: function (aM, aN) {
        return aM === aN;
      },
      YBJxx: "zxWtZ",
      SUFiL: "wCnMk",
      MaPoK: "epPoz",
      LOvvO: "TeHgE",
      ygPAB: "illegal catch attempt"
    };
    g = function () {
      {
        return ah;
      }
    };
    var ag;
    var ah = {
      wrap: aq
    };
    var ai = Object.prototype;
    var aj = ai.hasOwnProperty;
    var ak = Object.defineProperty || function (aM, aN, aO) {
      aM[aN] = aO.value;
    };
    var al = "function" == typeof Symbol ? Symbol : {};
    var am = al.iterator || "@@iterator";
    var an = al.asyncIterator || "@@asyncIterator";
    var ao = al.toStringTag || "@@toStringTag";
    function ap(aM, aN, aO) {
      {
        var aQ = {
          value: aO,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aM, aN, aQ);
        return aM[aN];
      }
    }
    try {
      {
        ap({}, "");
      }
    } catch (aN) {
      ap = function (aO, aP, aQ) {
        return aO[aP] = aQ;
      };
    }
    function aq(aP, aQ, aR, aS) {
      {
        var aT = aQ && aQ.prototype instanceof ax ? aQ : ax;
        var aU = Object.create(aT.prototype);
        var aV = new aK(aS || []);
        ak(aU, "_invoke", {
          value: aG(aP, aR, aV)
        });
        return aU;
      }
    }
    function ar(aP, aQ, aR) {
      {
        try {
          return {
            type: "normal",
            arg: aP.call(aQ, aR)
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
    var as = "suspendedStart";
    var at = "suspendedYield";
    var au = "executing";
    var av = "completed";
    var aw = {};
    function ax() {}
    function ay() {}
    function az() {}
    var aA = {};
    ap(aA, am, function () {
      {
        return this;
      }
    });
    var aB = Object.getPrototypeOf;
    var aC = aB && aB(aB(aL([])));
    aC && aC !== ai && aj.call(aC, am) && (aA = aC);
    az.prototype = ax.prototype = Object.create(aA);
    var aD = az.prototype;
    function aE(aP) {
      ["next", "throw", "return"].forEach(function (aQ) {
        {
          ap(aP, aQ, function (aT) {
            {
              return this._invoke(aQ, aT);
            }
          });
        }
      });
    }
    function aF(aP, aQ) {
      {
        function aT(aU, aV, aW, aX) {
          {
            var aZ = ar(aP[aU], aP, aV);
            if ("throw" !== aZ.type) {
              {
                var b0 = aZ.arg;
                var b1 = b0.value;
                return b1 && "object" == b(b1) && aj.call(b1, "__await") ? aQ.resolve(b1.__await).then(function (b4) {
                  {
                    aT("next", b4, aW, aX);
                  }
                }, function (b4) {
                  {
                    aT("throw", b4, aW, aX);
                  }
                }) : aQ.resolve(b1).then(function (b4) {
                  {
                    b0.value = b4;
                    aW(b0);
                  }
                }, function (b4) {
                  {
                    return aT("throw", b4, aW, aX);
                  }
                });
              }
            }
            aX(aZ.arg);
          }
        }
        var aS;
        ak(this, "_invoke", {
          value: function (aU, aV) {
            {
              function aY() {
                return new aQ(function (b0, b1) {
                  {
                    aT(aU, aV, b0, b1);
                  }
                });
              }
              return aS = aS ? aS.then(aY, aY) : aY();
            }
          }
        });
      }
    }
    function aG(aP, aQ, aR) {
      {
        var aT = as;
        return function (aV, aW) {
          {
            if (aT === au) {
              throw Error("Generator is already running");
            }
            if (aT === av) {
              {
                if ("throw" === aV) {
                  throw aW;
                }
                var aY = {
                  value: ag,
                  done: true
                };
                return aY;
              }
            }
            for (aR.method = aV, aR.arg = aW;;) {
              {
                var aZ = aR.delegate;
                if (aZ) {
                  {
                    var b0 = aH(aZ, aR);
                    if (b0) {
                      {
                        if (b0 === aw) {
                          continue;
                        }
                        return b0;
                      }
                    }
                  }
                }
                if ("next" === aR.method) {
                  aR.sent = aR._sent = aR.arg;
                } else {
                  if ("throw" === aR.method) {
                    {
                      if (aT === as) {
                        throw aT = av, aR.arg;
                      }
                      aR.dispatchException(aR.arg);
                    }
                  } else {
                    "return" === aR.method && aR.abrupt("return", aR.arg);
                  }
                }
                aT = au;
                var b1 = ar(aP, aQ, aR);
                if ("normal" === b1.type) {
                  {
                    if (aT = aR.done ? av : at, b1.arg === aw) {
                      continue;
                    }
                    var b2 = {
                      value: b1.arg,
                      done: aR.done
                    };
                    return b2;
                  }
                }
                "throw" === b1.type && (aT = av, aR.method = "throw", aR.arg = b1.arg);
              }
            }
          }
        };
      }
    }
    function aH(aP, aQ) {
      {
        var aU = aQ.method;
        var aV = aP.iterator[aU];
        if (aV === ag) {
          aQ.delegate = null;
          "throw" === aU && aP.iterator.return && (aQ.method = "return", aQ.arg = ag, aH(aP, aQ), "throw" === aQ.method) || "return" !== aU && (aQ.method = "throw", aQ.arg = new TypeError("The iterator does not provide a '" + aU + "' method"));
          return aw;
        }
        var aT = ar(aV, aP.iterator, aQ.arg);
        if ("throw" === aT.type) {
          aQ.method = "throw";
          aQ.arg = aT.arg;
          aQ.delegate = null;
          return aw;
        }
        var aW = aT.arg;
        return aW ? aW.done ? (aQ[aP.resultName] = aW.value, aQ.next = aP.nextLoc, "return" !== aQ.method && (aQ.method = "next", aQ.arg = ag), aQ.delegate = null, aw) : aW : (aQ.method = "throw", aQ.arg = new TypeError("iterator result is not an object"), aQ.delegate = null, aw);
      }
    }
    function aI(aP) {
      {
        var aR = {
          tryLoc: aP[0]
        };
        1 in aP && (aR.catchLoc = aP[1]);
        2 in aP && (aR.finallyLoc = aP[2], aR.afterLoc = aP[3]);
        this.tryEntries.push(aR);
      }
    }
    function aJ(aP) {
      {
        var aQ = aP.completion || {};
        aQ.type = "normal";
        delete aQ.arg;
        aP.completion = aQ;
      }
    }
    function aK(aP) {
      {
        var aQ = {
          tryLoc: "root"
        };
        this.tryEntries = [aQ];
        aP.forEach(aI, this);
        this.reset(true);
      }
    }
    function aL(aP) {
      {
        if (aP || "" === aP) {
          {
            var aR = aP[am];
            if (aR) {
              return aR.call(aP);
            }
            if ("function" == typeof aP.next) {
              return aP;
            }
            if (!isNaN(aP.length)) {
              {
                var aS = -1;
                var aT = function aV() {
                  {
                    for (; ++aS < aP.length;) {
                      if (aj.call(aP, aS)) {
                        aV.value = aP[aS];
                        aV.done = false;
                        return aV;
                      }
                    }
                    aV.value = ag;
                    aV.done = true;
                    return aV;
                  }
                };
                return aT.next = aT;
              }
            }
          }
        }
        throw new TypeError(b(aP) + " is not iterable");
      }
    }
    ay.prototype = az;
    ak(aD, "constructor", {
      value: az,
      configurable: true
    });
    ak(az, "constructor", {
      value: ay,
      configurable: true
    });
    ay.displayName = ap(az, ao, "GeneratorFunction");
    ah.isGeneratorFunction = function (aP) {
      {
        var aQ = "function" == typeof aP && aP.constructor;
        return !!aQ && (aQ === ay || "GeneratorFunction" === (aQ.displayName || aQ.name));
      }
    };
    ah.mark = function (aP) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aP, az) : (aP.__proto__ = az, ap(aP, ao, "GeneratorFunction"));
      aP.prototype = Object.create(aD);
      return aP;
    };
    ah.awrap = function (aP) {
      {
        var aR = {
          __await: aP
        };
        return aR;
      }
    };
    aE(aF.prototype);
    ap(aF.prototype, an, function () {
      return this;
    });
    ah.AsyncIterator = aF;
    ah.async = function (aP, aQ, aR, aS, aT) {
      {
        undefined === aT && (aT = Promise);
        var aV = new aF(aq(aP, aQ, aR, aS), aT);
        return ah.isGeneratorFunction(aQ) ? aV : aV.next().then(function (aW) {
          {
            return aW.done ? aW.value : aV.next();
          }
        });
      }
    };
    aE(aD);
    ap(aD, ao, "Generator");
    ap(aD, am, function () {
      {
        return this;
      }
    });
    ap(aD, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    ah.keys = function (aP) {
      {
        var aR = Object(aP);
        var aS = [];
        for (var aT in aR) aS.push(aT);
        aS.reverse();
        return function aV() {
          {
            for (; aS.length;) {
              {
                var aW = aS.pop();
                if (aW in aR) {
                  aV.value = aW;
                  aV.done = false;
                  return aV;
                }
              }
            }
            aV.done = true;
            return aV;
          }
        };
      }
    };
    ah.values = aL;
    aK.prototype = {
      constructor: aK,
      reset: function (aP) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ag, this.done = false, this.delegate = null, this.method = "next", this.arg = ag, this.tryEntries.forEach(aJ), !aP) {
            for (var aQ in this) "t" === aQ.charAt(0) && aj.call(this, aQ) && !isNaN(+aQ.slice(1)) && (this[aQ] = ag);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aP = this.tryEntries[0].completion;
          if ("throw" === aP.type) {
            throw aP.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aP) {
        {
          if (this.done) {
            throw aP;
          }
          var aR = this;
          function aY(aZ, b0) {
            aU.type = "throw";
            aU.arg = aP;
            aR.next = aZ;
            b0 && (aR.method = "next", aR.arg = ag);
            return !!b0;
          }
          for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
            {
              var aT = this.tryEntries[aS];
              var aU = aT.completion;
              if ("root" === aT.tryLoc) {
                return aY("end");
              }
              if (aT.tryLoc <= this.prev) {
                {
                  var aV = aj.call(aT, "catchLoc");
                  var aW = aj.call(aT, "finallyLoc");
                  if (aV && aW) {
                    {
                      if (this.prev < aT.catchLoc) {
                        return aY(aT.catchLoc, true);
                      }
                      if (this.prev < aT.finallyLoc) {
                        return aY(aT.finallyLoc);
                      }
                    }
                  } else {
                    if (aV) {
                      {
                        if (this.prev < aT.catchLoc) {
                          return aY(aT.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aW) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aT.finallyLoc) {
                          return aY(aT.finallyLoc);
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
      abrupt: function (aP, aQ) {
        {
          for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
            {
              var aT = this.tryEntries[aS];
              if (aT.tryLoc <= this.prev && aj.call(aT, "finallyLoc") && this.prev < aT.finallyLoc) {
                {
                  var aU = aT;
                  break;
                }
              }
            }
          }
          aU && ("break" === aP || "continue" === aP) && aU.tryLoc <= aQ && aQ <= aU.finallyLoc && (aU = null);
          var aV = aU ? aU.completion : {};
          aV.type = aP;
          aV.arg = aQ;
          return aU ? (this.method = "next", this.next = aU.finallyLoc, aw) : this.complete(aV);
        }
      },
      complete: function (aP, aQ) {
        {
          if ("throw" === aP.type) {
            throw aP.arg;
          }
          "break" === aP.type || "continue" === aP.type ? this.next = aP.arg : "return" === aP.type ? (this.rval = this.arg = aP.arg, this.method = "return", this.next = "end") : "normal" === aP.type && aQ && (this.next = aQ);
          return aw;
        }
      },
      finish: function (aP) {
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          {
            var aR = this.tryEntries[aQ];
            if (aR.finallyLoc === aP) {
              this.complete(aR.completion, aR.afterLoc);
              aJ(aR);
              return aw;
            }
          }
        }
      },
      catch: function (aP) {
        {
          for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
            {
              var aT = this.tryEntries[aS];
              if (aT.tryLoc === aP) {
                {
                  var aU = aT.completion;
                  if ("throw" === aU.type) {
                    {
                      var aV = aU.arg;
                      aJ(aT);
                    }
                  }
                  return aV;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aP, aQ, aR) {
        this.delegate = {
          iterator: aL(aP),
          resultName: aQ,
          nextLoc: aR
        };
        "next" === this.method && (this.arg = ag);
        return aw;
      }
    };
    return ah;
  }
  function h(af, ag, ah, ai, aj, ak, al) {
    {
      try {
        {
          var am = af[ak](al);
          var an = am.value;
        }
      } catch (aq) {
        {
          return void ah(aq);
        }
      }
      am.done ? ag(an) : Promise.resolve(an).then(ai, aj);
    }
  }
  function i(af) {
    return function () {
      var ai = this;
      var aj = arguments;
      return new Promise(function (ak, al) {
        var an = af.apply(ai, aj);
        function ao(aq) {
          {
            h(an, ak, al, ao, ap, "next", aq);
          }
        }
        function ap(aq) {
          {
            h(an, ak, al, ao, ap, "throw", aq);
          }
        }
        ao(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.XZXXN : $.getdata("XZXXN")) || "";
  var k = ($.isNode() ? process.env.XZXXNSERVER : $.getdata("XZXXNSERVER")) || "https://dalaoshi.xn--ug8h.eu.org";
  var l = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var m = ($.isNode() ? process.env.AiXianJu : $.getdata("AiXianJu")) || "";
  var n = undefined;
  var o = "";
  var p = "";
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
  var B = "62";
  var C = "10016";
  var D = "FR*r!isE5W";
  var E = "";
  var F = "";
  var G = "";
  var H = "";
  var I = "";
  var J = "";
  function K() {
    {
      return L.apply(this, arguments);
    }
  }
  function L() {
    {
      L = i(g().mark(function ag() {
        {
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
          return g().wrap(function (aY) {
            {
              for (;;) {
                switch (aY.prev = aY.next) {
                  case 0:
                    if (m) {
                      {
                        aY.next = 5;
                        break;
                      }
                    }
                    console.log("先填写账号密码");
                    aY.next = 4;
                    return ad("先填写账号密码");
                  case 4:
                    return aY.abrupt("return");
                  case 5:
                    aY.next = 7;
                    return a9();
                  case 7:
                    n = aY.sent;
                    ai = m.split(" ");
                    aj = c(ai);
                    aY.prev = 10;
                    aj.s();
                  case 12:
                    if ((ak = aj.n()).done) {
                      {
                        aY.next = 182;
                        break;
                      }
                    }
                    al = ak.value;
                    console.log("随机生成UA");
                    am = a8();
                    y = am.ua;
                    z = am.commonUa;
                    A = am.uuid;
                    console.log(y);
                    console.log(z);
                    t = al.split("&")[0];
                    u = al.split("&")[1];
                    v = al.split("&")[2];
                    w = al.split("&")[3];
                    x = al.split("&")[4] || t;
                    console.log("用户：".concat(t, "开始任务"));
                    aY.next = 29;
                    return a2({
                      token: j,
                      type: "AiXianJu",
                      userId: t
                    });
                  case 29:
                    if (an = aY.sent, 200 == (null == an ? undefined : an.code)) {
                      {
                        aY.next = 33;
                        break;
                      }
                    }
                    console.log(null == an ? undefined : an.msg);
                    return aY.abrupt("continue", 180);
                  case 33:
                    console.log("获取sessionId");
                    aY.next = 36;
                    return S("/api/account/init");
                  case 36:
                    ao = aY.sent;
                    r = ao.data.session.id;
                    console.log(r);
                    console.log("获取signature_key");
                    aY.next = 42;
                    return M("/web/init?client_id=".concat(C));
                  case 42:
                    ap = aY.sent;
                    o = ap.data.client.signature_key;
                    console.log(o);
                    console.log("获取code");
                    aY.next = 48;
                    return O("/web/oauth/credential_auth");
                  case 48:
                    if (aq = aY.sent, aq.data) {
                      {
                        aY.next = 52;
                        break;
                      }
                    }
                    console.log(aq.message);
                    return aY.abrupt("continue", 180);
                  case 52:
                    ar = aq.data.authorization_code.code;
                    console.log(ar);
                    console.log("登录");
                    aY.next = 57;
                    return S("/api/zbtxz/login", "check_token=&code=".concat(ar, "&token=&type=-1&union_id="));
                  case 57:
                    if (as = aY.sent, console.log("登录成功"), s = as.data.session.account_id, r = as.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), E) {
                      {
                        aY.next = 71;
                        break;
                      }
                    }
                    aY.next = 67;
                    return Q("/api/article/channel_list?channel_id=637c46bbad61a40b77d54c39&isRecommend=0&is_new=1&size=20");
                  case 67:
                    at = aY.sent;
                    au = /(?<=q=)[^&",]+/;
                    av = JSON.stringify(at).match(au);
                    av && (E = decodeURIComponent(av[0]));
                  case 71:
                    if (E) {
                      {
                        aY.next = 74;
                        break;
                      }
                    }
                    console.log("获取id失败");
                    return aY.abrupt("continue", 180);
                  case 74:
                    console.log(E);
                    console.log("获取阅读token");
                    aY.next = 78;
                    return W("https://act.tmlyun.com/activity-api/task/h5/auth/userLogin", {
                      q: E,
                      accountId: s,
                      sessionId: r,
                      tenantCode: "xsb_xianju"
                    }, H);
                  case 78:
                    aw = aY.sent;
                    H = aw.data.token;
                    console.log(H);
                    aY.next = 83;
                    return U("/task/h5/activity/getHomeUserLevelTaskList");
                  case 83:
                    ax = aY.sent;
                    aY.next = 86;
                    return U("/task/h5/activity/getLevelTaskUserList?levelTaskId=".concat(ax.data[0].taskLevelId));
                  case 86:
                    ay = aY.sent;
                    az = c(ay.data.appBaseList);
                    aY.prev = 88;
                    az.s();
                  case 90:
                    if ((aA = az.n()).done) {
                      {
                        aY.next = 108;
                        break;
                      }
                    }
                    aB = aA.value;
                    console.log("任务：".concat(aB.name, " 进度：").concat(aB.taskUserStatusBO.completeNum, "/").concat(aB.taskUserStatusBO.total));
                    aY.next = 95;
                    return Q("/api/article/channel_list?channel_id=637c46bbad61a40b77d54c39&isRecommend=0&is_new=1&size=20");
                  case 95:
                    aC = aY.sent;
                    aD = 0;
                  case 97:
                    if (!(aD < aB.taskUserStatusBO.total - aB.taskUserStatusBO.completeNum)) {
                      {
                        aY.next = 106;
                        break;
                      }
                    }
                    aF = null == aC || null === (aE = aC.data) || undefined === aE || null === (aE = aE.article_list[aD]) || undefined === aE ? undefined : aE.id;
                    aY.next = 101;
                    return Q("/api/article/read_time?channel_article_id=".concat(aF, "&is_end=1&read_time=1617"));
                  case 101:
                    aG = aY.sent;
                    console.log("阅读：".concat(aG.message));
                  case 103:
                    aD++;
                    aY.next = 97;
                    break;
                  case 106:
                    aY.next = 90;
                    break;
                  case 108:
                    aY.next = 113;
                    break;
                  case 110:
                    aY.prev = 110;
                    aY.t0 = aY.catch(88);
                    az.e(aY.t0);
                  case 113:
                    aY.prev = 113;
                    az.f();
                    return aY.finish(113);
                  case 116:
                    aY.next = 118;
                    return U("/task/h5/activity/getLotteryInfo");
                  case 118:
                    aH = aY.sent;
                    console.log("拥有".concat(aH.data.lotteryCount, "次抽奖"));
                    aI = "";
                    console.log("获取抽奖token");
                    aY.next = 124;
                    return U("/task/h5/activity/getActivityInfo");
                  case 124:
                    aJ = aY.sent;
                    aK = /(?<=q=)[^&",]+/;
                    aL = JSON.stringify(aJ).match(aK);
                    aL && (F = decodeURIComponent(aL[0]));
                    aY.next = 130;
                    return W("https://act.tmlyun.com/activity-api/lottery/api/auth/userLogin", {
                      q: F,
                      accountId: s,
                      sessionId: r,
                      tenantCode: "xsb_xianju"
                    }, I);
                  case 130:
                    aM = aY.sent;
                    I = aM.data.token;
                    aI = aM.data.thirdId;
                    console.log(I);
                    aN = 0;
                  case 135:
                    if (!(aN < aH.data.lotteryCount)) {
                      {
                        aY.next = 144;
                        break;
                      }
                    }
                    var b0 = {
                      activityId: aI,
                      clientId: A
                    };
                    aY.next = 138;
                    return W("https://act.tmlyun.com/activity-api/lottery/h5/activity/lottery/userActivityLottery", b0, I);
                  case 138:
                    aQ = aY.sent;
                    console.log("抽奖获得：".concat(null == aQ || null === (aO = aQ.data) || undefined === aO ? undefined : aO.prizeName));
                    p += "用户：".concat(t, " 抽奖获得：").concat(null == aQ || null === (aP = aQ.data) || undefined === aP ? undefined : aP.prizeName, "\n");
                  case 141:
                    aN++;
                    aY.next = 135;
                    break;
                  case 144:
                    console.log("获取walletId");
                    G = "";
                    aY.next = 148;
                    return Y("https://act.tmlyun.com/activity-api/lottery/h5/activity/lottery/accountPrizeRecord/userPrizeRecord?activityId=".concat(aI), I);
                  case 148:
                    if (aR = aY.sent, aK = /(?<=u=)[^&",]+/, aL = JSON.stringify(aR).match(aK), aL && (G = decodeURIComponent(aL[0])), G) {
                      {
                        aY.next = 155;
                        break;
                      }
                    }
                    console.log("获取walletId失败");
                    return aY.abrupt("continue", 180);
                  case 155:
                    console.log(G);
                    console.log("获取钱包token");
                    aY.next = 159;
                    return W("https://my.tmlyun.com/equity-api/user/auth/userLogin", {
                      u: G,
                      accountId: s,
                      sessionId: r
                    }, "");
                  case 159:
                    aS = aY.sent;
                    J = aS.data.token;
                    console.log(J);
                    aY.next = 164;
                    return a0("/redBag/getFundsDetail?fundsChannelType=0");
                  case 164:
                    if (aT = aY.sent, aT.data.account || !w || !x) {
                      {
                        aY.next = 170;
                        break;
                      }
                    }
                    aY.next = 168;
                    return a0("/redBag/saveAliPayAccount?userName=".concat(w, "&account=").concat(x));
                  case 168:
                    aU = aY.sent;
                    console.log("绑定支付宝：".concat(aU.message));
                  case 170:
                    aY.next = 172;
                    return a0("/redBag/getWalletInfo?device=".concat(A));
                  case 172:
                    if (aV = aY.sent, console.log("钱包余额：".concat(aV.data[0].aliPayTotalPrice)), !(aV.data[0].aliPayTotalPrice > 0)) {
                      {
                        aY.next = 180;
                        break;
                      }
                    }
                    aY.next = 177;
                    return a0("/redBag/createTrans?price=".concat(aV.data[0].aliPayTotalPrice, "&fundsChannelType=0&yToken=PYuUbXTdYvNAd1BVVQaXR3dmgO3dY9bt&deviceId=").concat(A));
                  case 177:
                    aW = aY.sent;
                    console.log("提现：".concat(aW.message));
                    p += "用户：".concat(t, " 提现：").concat(aW.message, "\n");
                  case 180:
                    aY.next = 12;
                    break;
                  case 182:
                    aY.next = 187;
                    break;
                  case 184:
                    aY.prev = 184;
                    aY.t1 = aY.catch(10);
                    aj.e(aY.t1);
                  case 187:
                    aY.prev = 187;
                    aj.f();
                    return aY.finish(187);
                  case 190:
                    if (!p) {
                      {
                        aY.next = 193;
                        break;
                      }
                    }
                    aY.next = 193;
                    return ad(p);
                  case 193:
                  case "end":
                    return aY.stop();
                }
              }
            }
          }, ag, null, [[10, 184, 187, 190], [88, 110, 113, 116]]);
        }
      }));
      return L.apply(this, arguments);
    }
  }
  function M(af) {
    {
      return N.apply(this, arguments);
    }
  }
  function N() {
    {
      N = i(g().mark(function ah(ai) {
        {
          return g().wrap(function (al) {
            {
              for (;;) {
                switch (al.prev = al.next) {
                  case 0:
                    return al.abrupt("return", new Promise(function (ao) {
                      {
                        var aq = {
                          url: "https://passport.tmuyun.com".concat(ai),
                          headers: {
                            Connection: "Keep-Alive",
                            "Cache-Control": "no-cache",
                            "X-REQUEST-ID": a6(),
                            "Accept-Encoding": "gzip",
                            "user-agent": y
                          }
                        };
                        $.get(aq, function () {
                          {
                            var at = i(g().mark(function av(aw, ax, ay) {
                              return g().wrap(function (aA) {
                                {
                                  for (;;) {
                                    switch (aA.prev = aA.next) {
                                      case 0:
                                        try {
                                          {
                                            aw ? (console.log("".concat(JSON.stringify(aw))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ao(JSON.parse(ay));
                                          }
                                        } catch (aE) {
                                          {
                                            $.logErr(aE, ax);
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
                              }, av);
                            }));
                            return function (aw, ax, ay) {
                              {
                                return at.apply(this, arguments);
                              }
                            };
                          }
                        }());
                      }
                    }));
                  case 1:
                  case "end":
                    return al.stop();
                }
              }
            }
          }, ah);
        }
      }));
      return N.apply(this, arguments);
    }
  }
  function O(af) {
    {
      return P.apply(this, arguments);
    }
  }
  function P() {
    P = i(g().mark(function ag(ah) {
      var aj;
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              aj = a4();
              return ak.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://passport.tmuyun.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": aj.uuid,
                    "X-SIGNATURE": aj.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  },
                  body: aj.body
                };
                $.post(ao, function () {
                  {
                    var aq = i(g().mark(function as(at, au, av) {
                      {
                        return g().wrap(function (ay) {
                          {
                            for (;;) {
                              switch (ay.prev = ay.next) {
                                case 0:
                                  try {
                                    {
                                      at ? (console.log("".concat(JSON.stringify(at))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : am(JSON.parse(av));
                                    }
                                  } catch (aC) {
                                    {
                                      $.logErr(aC, au);
                                    }
                                  } finally {
                                    {
                                      am();
                                    }
                                  }
                                case 1:
                                case "end":
                                  return ay.stop();
                              }
                            }
                          }
                        }, as);
                      }
                    }));
                    return function (at, au, av) {
                      return aq.apply(this, arguments);
                    };
                  }
                }());
              }));
            case 2:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return P.apply(this, arguments);
  }
  function Q(af) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function af(ag) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a5(ag);
              return aj.abrupt("return", new Promise(function (al) {
                var am = {
                  url: "https://vapp.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ai.time,
                    "X-SESSION-ID": r,
                    "X-REQUEST-ID": ai.uuid,
                    "X-SIGNATURE": ai.signature,
                    "X-TENANT-ID": B,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            al();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return R.apply(this, arguments);
  }
  function S(af, ag) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function ag(ah, ai) {
      var ak;
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              ak = a5(ah);
              return al.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://vapp.tmuyun.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ak.time,
                    "X-SESSION-ID": r,
                    "X-REQUEST-ID": ak.uuid,
                    "X-SIGNATURE": ak.signature,
                    "X-TENANT-ID": B,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  },
                  body: ai
                };
                $.post(ao, function () {
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
            case 2:
            case "end":
              return al.stop();
          }
        }
      }, ag);
    }));
    return T.apply(this, arguments);
  }
  function U(af) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://act.tmlyun.com/activity-api".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "application/json, text/plain, */*",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xiangshan;xsb_xiangshan;4.5.2;native_app;6.8.0",
                    Origin: "https://act.tmlyun.com",
                    "X-Requested-With": "com.aheading.news.xiangshanrb",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://act.tmlyun.com/lottery/?q=".concat(E),
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    Authorization: H
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return V.apply(this, arguments);
  }
  function W(af, ag, ah) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function ag(ah, ai, aj) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  Connection: "Keep-Alive",
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xiangshan;xsb_xiangshan;4.5.2;native_app;6.8.0",
                  "X-Requested-With": "com.aheading.news.xiangshanrb",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  Authorization: aj,
                  "X-TOKEN": v
                };
                var ao = {
                  url: ah,
                  headers: an,
                  body: JSON.stringify(ai)
                };
                $.post(ao, function () {
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
                            am(JSON.parse(au));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, at);
                          case 14:
                            aw.prev = 14;
                            am();
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
              return ak.stop();
          }
        }
      }, ag);
    }));
    return X.apply(this, arguments);
  }
  function Y(af, ag) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function ah(ai, aj) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var ao = {
                  Connection: "Keep-Alive",
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xiangshan;xsb_xiangshan;4.5.2;native_app;6.8.0",
                  "X-Requested-With": "com.aheading.news.xiangshanrb",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  Authorization: aj,
                  "X-TOKEN": v
                };
                var aq = {
                  url: ai,
                  headers: ao
                };
                $.get(aq, function () {
                  var as = i(g().mark(function at(au, av, aw) {
                    return g().wrap(function (ay) {
                      for (;;) {
                        switch (ay.prev = ay.next) {
                          case 0:
                            if (ay.prev = 0, !au) {
                              ay.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(au)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ay.next = 9;
                            break;
                          case 6:
                            ay.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(aw));
                          case 9:
                            ay.next = 14;
                            break;
                          case 11:
                            ay.prev = 11;
                            ay.t0 = ay.catch(0);
                            $.logErr(ay.t0, av);
                          case 14:
                            ay.prev = 14;
                            am();
                            return ay.finish(14);
                          case 17:
                          case "end":
                            return ay.stop();
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
              return ak.stop();
          }
        }
      }, ah);
    }));
    return Z.apply(this, arguments);
  }
  function a0(af) {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://my.tmlyun.com/equity-api".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "application/json, text/plain, */*",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xiangshan;xsb_xiangshan;4.5.2;native_app;6.8.0",
                    Origin: "https://my.tmlyun.com",
                    "X-Requested-With": "com.aheading.news.xiangshanrb",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://my.tmlyun.com/equitypacket/?u=".concat(G),
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    Authorization: J
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return a1.apply(this, arguments);
  }
  function a2(af) {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = i(g().mark(function ah(ai) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (al) {
                var an = {
                  "Content-Type": "application/json"
                };
                var ao = {
                  url: "".concat(k, "/token/verify"),
                  headers: an,
                  body: JSON.stringify(ai)
                };
                $.post(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            try {
                              as ? (console.log("".concat(JSON.stringify(as))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(au));
                            } catch (aw) {
                              $.logErr(aw, at);
                            } finally {
                              al();
                            }
                          case 1:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ah);
    }));
    return a3.apply(this, arguments);
  }
  function a4() {
    var an = new (n.loadJSEncrypt())();
    an.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = an.encrypt(u);
    var ak = a6();
    var al = "client_id=".concat(C, "&password=").concat(u, "&phone_number=").concat(t);
    var am = "post%%/web/oauth/credential_auth?".concat(al, "%%").concat(ak, "%%");
    al = "client_id=".concat(C, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = n.createCryptoJS();
    var ai = CryptoJS.HmacSHA256(am, o);
    var aj = CryptoJS.enc.Hex.stringify(ai);
    var ah = {
      uuid: ak,
      signature: aj,
      body: al
    };
    return ah;
  }
  function a5(af) {
    var ag = a6();
    var ah = Date.now();
    af.indexOf("?") > 0 && (af = af.substring(0, af.indexOf("?")));
    CryptoJS = n.createCryptoJS();
    var ai = CryptoJS.SHA256("".concat(af, "&&").concat(r, "&&").concat(ag, "&&").concat(ah, "&&").concat(D, "&&").concat(B)).toString();
    var aj = {
      uuid: ag,
      time: ah,
      signature: ai
    };
    return aj;
  }
  function a6() {
    return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (af) {
      var ag = 16 * Math.random() | 0;
      var ah = "x" === af ? ag : 3 & ag | 8;
      return ah.toString(16);
    });
  }
  function a7(af) {
    return af[Math.floor(Math.random() * af.length)];
  }
  function a8() {
    var af = "4.5.2";
    var ag = a6();
    var ah = a7(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ai = "Xiaomi " + ah;
    var aj = "Android";
    var ak = "".concat(aj.toUpperCase(), ";").concat("11", ";").concat(C, ";").concat(af, ";1.0;null;").concat(ah);
    var al = "".concat(af, ";").concat(ag, ";").concat(ai, ";").concat(aj, ";").concat("11", ";Release;").concat("6.8.0");
    var am = {
      ua: ak,
      commonUa: al,
      uuid: ag
    };
    return am;
  }
  function a9() {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function ag() {
      var ai;
      return g().wrap(function aj(ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              if (ai = $.getdata("Utils_Code") || "", !ai || !Object.keys(ai).length) {
                ak.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ai);
              return ak.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ak.abrupt("return", new Promise(function () {
                var an = i(g().mark(function ao(ap) {
                  return g().wrap(function aq(ar) {
                    for (;;) {
                      switch (ar.prev = ar.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (at) {
                            $.setdata(at, "Utils_Code");
                            eval(at);
                            console.log("✅ Utils加载成功, 请继续");
                            ap(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ar.stop();
                      }
                    }
                  }, ao);
                }));
                return function (ap) {
                  return an.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return aa.apply(this, arguments);
  }
  function ab() {
    return ac.apply(this, arguments);
  }
  function ac() {
    ac = i(g().mark(function ag() {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            try {
                              ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(ar).notice);
                            } catch (at) {
                              $.logErr(at, aq);
                            } finally {
                              aj();
                            }
                          case 1:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ag);
    }));
    return ac.apply(this, arguments);
  }
  function ad(af) {
    return ae.apply(this, arguments);
  }
  function ae() {
    ae = i(g().mark(function ag(ah) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              if (!$.isNode()) {
                ak.next = 5;
                break;
              }
              ak.next = 3;
              return notify.sendNotify($.name, ah);
            case 3:
              ak.next = 6;
              break;
            case 5:
              $.msg($.name, "", ah);
            case 6:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return ae.apply(this, arguments);
  }
  i(g().mark(function af() {
    return g().wrap(function (ag) {
      for (;;) {
        switch (ag.prev = ag.next) {
          case 0:
            ag.next = 2;
            return ab();
          case 2:
            ag.next = 4;
            return K();
          case 4:
          case "end":
            return ag.stop();
        }
      }
    }, af);
  }))().catch(function (ag) {
    $.log(ag);
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