//Mon Jun 09 2025 06:37:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("掌上瓯海");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ad) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (af) {
      return typeof af;
    } : function (af) {
      return af && "function" == typeof Symbol && af.constructor === Symbol && af !== Symbol.prototype ? "symbol" : typeof af;
    };
    return b(ad);
  }
  function c(ad, ae) {
    var ag = "undefined" != typeof Symbol && ad[Symbol.iterator] || ad["@@iterator"];
    if (!ag) {
      if (Array.isArray(ad) || (ag = d(ad)) || ae && ad && "number" == typeof ad.length) {
        ag && (ad = ag);
        var ah = 0,
          ai = function () {};
        return {
          s: ai,
          n: function () {
            var an = {};
            an.done = !0;
            return ah >= ad.length ? an : {
              done: !1,
              value: ad[ah++]
            };
          },
          e: function (an) {
            throw an;
          },
          f: ai
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var aj,
      ak = !0,
      al = !1;
    return {
      s: function () {
        ag = ag.call(ad);
      },
      n: function () {
        var ao = ag.next();
        ak = ao.done;
        return ao;
      },
      e: function (ao) {
        al = !0;
        aj = ao;
      },
      f: function () {
        try {
          ak || null == ag.return || ag.return();
        } finally {
          if (al) {
            throw aj;
          }
        }
      }
    };
  }
  function d(ad, ae) {
    if (ad) {
      if ("string" == typeof ad) {
        return f(ad, ae);
      }
      var af = {}.toString.call(ad).slice(8, -1);
      "Object" === af && ad.constructor && (af = ad.constructor.name);
      return "Map" === af || "Set" === af ? Array.from(ad) : "Arguments" === af || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(af) ? f(ad, ae) : void 0;
    }
  }
  function f(ad, ae) {
    (null == ae || ae > ad.length) && (ae = ad.length);
    for (var af = 0, ag = Array(ae); af < ae; af++) {
      ag[af] = ad[af];
    }
    return ag;
  }
  function g() {
    'use strict';

    g = function () {
      return af;
    };
    var ae,
      af = {},
      ag = Object.prototype,
      ah = ag.hasOwnProperty,
      ai = Object.defineProperty || function (aK, aL, aM) {
        aK[aL] = aM.value;
      },
      aj = "function" == typeof Symbol ? Symbol : {},
      ak = aj.iterator || "@@iterator",
      al = aj.asyncIterator || "@@asyncIterator",
      am = aj.toStringTag || "@@toStringTag";
    function an(aK, aL, aM) {
      var aN = {
        value: aM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aK, aL, aN);
      return aK[aL];
    }
    try {
      an({}, "");
    } catch (aL) {
      an = function (aM, aN, aO) {
        return aM[aN] = aO;
      };
    }
    function ao(aN, aO, aP, aQ) {
      var aS = aO && aO.prototype instanceof av ? aO : av,
        aT = Object.create(aS.prototype),
        aU = new aI(aQ || []);
      ai(aT, "_invoke", {
        value: aE(aN, aP, aU)
      });
      return aT;
    }
    function ap(aN, aO, aP) {
      try {
        return {
          type: "normal",
          arg: aN.call(aO, aP)
        };
      } catch (aU) {
        var aR = {};
        aR.type = "throw";
        aR.arg = aU;
        return aR;
      }
    }
    af.wrap = ao;
    var aq = "suspendedStart",
      ar = "suspendedYield",
      as = "executing",
      at = "completed",
      au = {};
    function av() {}
    function aw() {}
    function ax() {}
    var ay = {};
    an(ay, ak, function () {
      return this;
    });
    var az = Object.getPrototypeOf,
      aA = az && az(az(aJ([])));
    aA && aA !== ag && ah.call(aA, ak) && (ay = aA);
    ax.prototype = av.prototype = Object.create(ay);
    var aB = ax.prototype;
    function aC(aN) {
      ["next", "throw", "return"].forEach(function (aP) {
        an(aN, aP, function (aT) {
          return this._invoke(aP, aT);
        });
      });
    }
    function aD(aN, aO) {
      function aR(aS, aT, aU, aV) {
        var aX = ap(aN[aS], aN, aT);
        if ("throw" !== aX.type) {
          var aY = aX.arg,
            aZ = aY.value;
          return aZ && "object" == b(aZ) && ah.call(aZ, "__await") ? aO.resolve(aZ.__await).then(function (b1) {
            aR("next", b1, aU, aV);
          }, function (b1) {
            aR("throw", b1, aU, aV);
          }) : aO.resolve(aZ).then(function (b1) {
            aY.value = b1;
            aU(aY);
          }, function (b1) {
            return aR("throw", b1, aU, aV);
          });
        }
        aV(aX.arg);
      }
      var aQ;
      ai(this, "_invoke", {
        value: function (aS, aT) {
          function aW() {
            return new aO(function (aZ, b0) {
              aR(aS, aT, aZ, b0);
            });
          }
          return aQ = aQ ? aQ.then(aW, aW) : aW();
        }
      });
    }
    function aE(aN, aO, aP) {
      var aR = aq;
      return function (aS, aT) {
        if (aR === as) {
          throw Error("Generator is already running");
        }
        if (aR === at) {
          if ("throw" === aS) {
            throw aT;
          }
          var aV = {
            value: ae,
            done: !0
          };
          return aV;
        }
        for (aP.method = aS, aP.arg = aT;;) {
          var aW = aP.delegate;
          if (aW) {
            var aX = aF(aW, aP);
            if (aX) {
              if (aX === au) {
                continue;
              }
              return aX;
            }
          }
          if ("next" === aP.method) {
            aP.sent = aP._sent = aP.arg;
          } else {
            if ("throw" === aP.method) {
              if (aR === aq) {
                throw aR = at, aP.arg;
              }
              aP.dispatchException(aP.arg);
            } else {
              "return" === aP.method && aP.abrupt("return", aP.arg);
            }
          }
          aR = as;
          var aY = ap(aN, aO, aP);
          if ("normal" === aY.type) {
            if (aR = aP.done ? at : ar, aY.arg === au) {
              continue;
            }
            var aZ = {};
            aZ.value = aY.arg;
            aZ.done = aP.done;
            return aZ;
          }
          "throw" === aY.type && (aR = at, aP.method = "throw", aP.arg = aY.arg);
        }
      };
    }
    function aF(aN, aO) {
      var aS = aO.method,
        aT = aN.iterator[aS];
      if (aT === ae) {
        aO.delegate = null;
        "throw" === aS && aN.iterator.return && (aO.method = "return", aO.arg = ae, aF(aN, aO), "throw" === aO.method) || "return" !== aS && (aO.method = "throw", aO.arg = new TypeError("The iterator does not provide a '" + aS + "' method"));
        return au;
      }
      var aU = ap(aT, aN.iterator, aO.arg);
      if ("throw" === aU.type) {
        aO.method = "throw";
        aO.arg = aU.arg;
        aO.delegate = null;
        return au;
      }
      var aR = aU.arg;
      return aR ? aR.done ? (aO[aN.resultName] = aR.value, aO.next = aN.nextLoc, "return" !== aO.method && (aO.method = "next", aO.arg = ae), aO.delegate = null, au) : aR : (aO.method = "throw", aO.arg = new TypeError("iterator result is not an object"), aO.delegate = null, au);
    }
    function aG(aN) {
      var aO = {
        tryLoc: aN[0]
      };
      var aP = aO;
      1 in aN && (aP.catchLoc = aN[1]);
      2 in aN && (aP.finallyLoc = aN[2], aP.afterLoc = aN[3]);
      this.tryEntries.push(aP);
    }
    function aH(aN) {
      var aO = aN.completion || {};
      aO.type = "normal";
      delete aO.arg;
      aN.completion = aO;
    }
    function aI(aN) {
      var aO = {
        tryLoc: "root"
      };
      this.tryEntries = [aO];
      aN.forEach(aG, this);
      this.reset(!0);
    }
    function aJ(aN) {
      if (aN || "" === aN) {
        var aP = aN[ak];
        if (aP) {
          return aP.call(aN);
        }
        if ("function" == typeof aN.next) {
          return aN;
        }
        if (!isNaN(aN.length)) {
          var aQ = -1,
            aR = function aV() {
              for (; ++aQ < aN.length;) {
                if (ah.call(aN, aQ)) {
                  aV.value = aN[aQ];
                  aV.done = !1;
                  return aV;
                }
              }
              aV.value = ae;
              aV.done = !0;
              return aV;
            };
          return aR.next = aR;
        }
      }
      throw new TypeError(b(aN) + " is not iterable");
    }
    aw.prototype = ax;
    ai(aB, "constructor", {
      value: ax,
      configurable: !0
    });
    ai(ax, "constructor", {
      value: aw,
      configurable: !0
    });
    aw.displayName = an(ax, am, "GeneratorFunction");
    af.isGeneratorFunction = function (aN) {
      var aP = "function" == typeof aN && aN.constructor;
      return !!aP && (aP === aw || "GeneratorFunction" === (aP.displayName || aP.name));
    };
    af.mark = function (aN) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aN, ax) : (aN.__proto__ = ax, an(aN, am, "GeneratorFunction"));
      aN.prototype = Object.create(aB);
      return aN;
    };
    af.awrap = function (aN) {
      var aO = {
        __await: aN
      };
      return aO;
    };
    aC(aD.prototype);
    an(aD.prototype, al, function () {
      return this;
    });
    af.AsyncIterator = aD;
    af.async = function (aN, aO, aP, aQ, aR) {
      void 0 === aR && (aR = Promise);
      var aS = new aD(ao(aN, aO, aP, aQ), aR);
      return af.isGeneratorFunction(aO) ? aS : aS.next().then(function (aT) {
        return aT.done ? aT.value : aS.next();
      });
    };
    aC(aB);
    an(aB, am, "Generator");
    an(aB, ak, function () {
      return this;
    });
    an(aB, "toString", function () {
      return "[object Generator]";
    });
    af.keys = function (aN) {
      var aP = Object(aN),
        aQ = [];
      for (var aR in aP) aQ.push(aR);
      aQ.reverse();
      return function aT() {
        for (; aQ.length;) {
          var aU = aQ.pop();
          if (aU in aP) {
            aT.value = aU;
            aT.done = !1;
            return aT;
          }
        }
        aT.done = !0;
        return aT;
      };
    };
    af.values = aJ;
    aI.prototype = {
      constructor: aI,
      reset: function (aN) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ae, this.done = !1, this.delegate = null, this.method = "next", this.arg = ae, this.tryEntries.forEach(aH), !aN) {
          for (var aP in this) "t" === aP.charAt(0) && ah.call(this, aP) && !isNaN(+aP.slice(1)) && (this[aP] = ae);
        }
      },
      stop: function () {
        this.done = !0;
        var aN = this.tryEntries[0].completion;
        if ("throw" === aN.type) {
          throw aN.arg;
        }
        return this.rval;
      },
      dispatchException: function (aN) {
        if (this.done) {
          throw aN;
        }
        var aP = this;
        function aW(aX, aY) {
          aS.type = "throw";
          aS.arg = aN;
          aP.next = aX;
          aY && (aP.method = "next", aP.arg = ae);
          return !!aY;
        }
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          var aR = this.tryEntries[aQ],
            aS = aR.completion;
          if ("root" === aR.tryLoc) {
            return aW("end");
          }
          if (aR.tryLoc <= this.prev) {
            var aT = ah.call(aR, "catchLoc"),
              aU = ah.call(aR, "finallyLoc");
            if (aT && aU) {
              if (this.prev < aR.catchLoc) {
                return aW(aR.catchLoc, !0);
              }
              if (this.prev < aR.finallyLoc) {
                return aW(aR.finallyLoc);
              }
            } else {
              if (aT) {
                if (this.prev < aR.catchLoc) {
                  return aW(aR.catchLoc, !0);
                }
              } else {
                if (!aU) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aR.finallyLoc) {
                  return aW(aR.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aN, aO) {
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          var aR = this.tryEntries[aQ];
          if (aR.tryLoc <= this.prev && ah.call(aR, "finallyLoc") && this.prev < aR.finallyLoc) {
            var aS = aR;
            break;
          }
        }
        aS && ("break" === aN || "continue" === aN) && aS.tryLoc <= aO && aO <= aS.finallyLoc && (aS = null);
        var aT = aS ? aS.completion : {};
        aT.type = aN;
        aT.arg = aO;
        return aS ? (this.method = "next", this.next = aS.finallyLoc, au) : this.complete(aT);
      },
      complete: function (aN, aO) {
        if ("throw" === aN.type) {
          throw aN.arg;
        }
        "break" === aN.type || "continue" === aN.type ? this.next = aN.arg : "return" === aN.type ? (this.rval = this.arg = aN.arg, this.method = "return", this.next = "end") : "normal" === aN.type && aO && (this.next = aO);
        return au;
      },
      finish: function (aN) {
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          var aR = this.tryEntries[aQ];
          if (aR.finallyLoc === aN) {
            this.complete(aR.completion, aR.afterLoc);
            aH(aR);
            return au;
          }
        }
      },
      catch: function (aN) {
        for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
          var aQ = this.tryEntries[aP];
          if (aQ.tryLoc === aN) {
            var aR = aQ.completion;
            if ("throw" === aR.type) {
              var aS = aR.arg;
              aH(aQ);
            }
            return aS;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aN, aO, aP) {
        this.delegate = {
          iterator: aJ(aN),
          resultName: aO,
          nextLoc: aP
        };
        "next" === this.method && (this.arg = ae);
        return au;
      }
    };
    return af;
  }
  function h(ad, ae, af, ag, ah, ai, aj) {
    try {
      var ak = ad[ai](aj),
        al = ak.value;
    } catch (ao) {
      return void af(ao);
    }
    ak.done ? ae(al) : Promise.resolve(al).then(ag, ah);
  }
  function i(ad) {
    return function () {
      var ag = this,
        ah = arguments;
      return new Promise(function (ai, aj) {
        var al = ad.apply(ag, ah);
        function am(ao) {
          h(al, ai, aj, am, an, "next", ao);
        }
        function an(ao) {
          h(al, ai, aj, am, an, "throw", ao);
        }
        am(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.OuHai : $.getdata("OuHai")) || "",
    k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top",
    l = void 0;
  window = {};
  var m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "",
    x = "",
    y = "",
    z = "",
    A = "78",
    B = "10032",
    C = "FR*r!isE5W";
  function D() {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function ae() {
      var ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM;
      return g().wrap(function (aN) {
        for (;;) {
          switch (aN.prev = aN.next) {
            case 0:
              if (j) {
                aN.next = 5;
                break;
              }
              console.log("先填写账号密码");
              aN.next = 4;
              return ab("先填写账号密码");
            case 4:
              return aN.abrupt("return");
            case 5:
              aN.next = 7;
              return a7();
            case 7:
              l = aN.sent;
              ag = j.split(" ");
              ah = c(ag.slice(0, 10));
              aN.prev = 10;
              ah.s();
            case 12:
              if ((ai = ah.n()).done) {
                aN.next = 113;
                break;
              }
              aj = ai.value;
              aN.prev = 14;
              console.log("随机生成UA");
              al = a5();
              u = al.ua;
              v = al.commonUa;
              w = al.uuid;
              console.log(u);
              console.log(v);
              q = aj.split("&")[0];
              r = aj.split("&")[1];
              s = aj.split("&")[2];
              t = aj.split("&")[3] || q;
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              aN.next = 30;
              return L("/api/account/init");
            case 30:
              am = aN.sent;
              o = am.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              aN.next = 36;
              return F("/web/init?client_id=".concat(B));
            case 36:
              an = aN.sent;
              m = an.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              aN.next = 42;
              return H("/web/oauth/credential_auth");
            case 42:
              if (ao = aN.sent, ao.data) {
                aN.next = 46;
                break;
              }
              console.log(ao.message);
              return aN.abrupt("continue", 111);
            case 46:
              ap = ao.data.authorization_code.code;
              console.log(ap);
              aN.next = 50;
              return L("/api/zbtxz/login", "check_token=&code=".concat(ap, "&token=&type=-1&union_id="));
            case 50:
              if (aq = aN.sent, 0 == aq.code) {
                aN.next = 54;
                break;
              }
              console.log(aq.message);
              return aN.abrupt("continue", 111);
            case 54:
              console.log("登录成功");
              p = aq.data.session.account_id;
              o = aq.data.session.id;
              aN.next = 59;
              return N("/customActivity/zjtm/autoLogin?_=".concat(Date.now(), "&sessionId=").concat(o, "&accountId=").concat(p, "&redirectUrl=https://94227.activity-42.m.duiba.com.cn/chw/visual-editor/skins?id=299044"));
            case 59:
              ar = aN.sent;
              as = ar.data;
              x = "";
              aN.next = 64;
              return X(as);
            case 64:
              x = aN.sent;
              console.log("————————————");
              console.log("夺宝");
              aN.next = 69;
              return R("https://94227.activity-42.m.duiba.com.cn/chw/visual-editor/skins?id=299044&from=login&spm=94227.1.1.1");
            case 69:
              if (at = aN.sent, at) {
                aN.next = 73;
                break;
              }
              console.log("获取夺宝id失败");
              return aN.abrupt("continue", 111);
            case 73:
              aN.next = 75;
              return P("/sign/treasure/homeInfo?_=".concat(Date.now(), "&id=").concat(at));
            case 75:
              au = aN.sent;
              aN.next = 78;
              return Z("/sign/treasure/sign?_=".concat(Date.now()), "phaseId=".concat(au.data.phaseId, "&id=").concat(at));
            case 78:
              if (av = aN.sent, !av.success) {
                aN.next = 87;
                break;
              }
              console.log("签到成功");
              aN.next = 83;
              return P("/sign/treasure/getSignResult?_=".concat(Date.now(), "&logId=").concat(av.data.logId));
            case 83:
              if (aw = aN.sent, aw.success) {
                ax = c(aw.data.codes);
                try {
                  for (ax.s(); !(ay = ax.n()).done;) {
                    az = ay.value;
                    console.log("获得夺宝码：".concat(az));
                  }
                } catch (aX) {
                  ax.e(aX);
                } finally {
                  ax.f();
                }
              } else {
                console.log(aw.desc);
              }
              aN.next = 88;
              break;
            case 87:
              console.log(av.desc);
            case 88:
              aN.next = 90;
              return P("/sign/treasure/history?_=".concat(Date.now(), "&id=").concat(at, "&pageNo=1&pageSize=20"));
            case 90:
              if (aA = aN.sent, null != aA && null !== (ak = aA.data) && void 0 !== ak && ak.list) {
                aB = c(aA.data.list);
                try {
                  for (aB.s(); !(aC = aB.n()).done;) {
                    aD = aC.value;
                    console.log("".concat(aD.phaseNumber, "期"));
                    aE = c(aD.codes);
                    try {
                      for (aE.s(); !(aF = aE.n()).done;) {
                        aG = aF.value;
                        0 != aG.prizeLevel && (console.log("获得：".concat(aG.prizeLevel, "等奖")), 1 == aG.rewardStatus ? console.log("未领取") : console.log("已领取"));
                      }
                    } catch (b4) {
                      aE.e(b4);
                    } finally {
                      aE.f();
                    }
                  }
                } catch (b7) {
                  aB.e(b7);
                } finally {
                  aB.f();
                }
              }
              aN.next = 94;
              return P("/sign/treasure/waitWinRecord?_=".concat(Date.now(), "&id=").concat(at));
            case 94:
              aH = aN.sent;
              aI = c(aH.data);
              try {
                for (aI.s(); !(aJ = aI.n()).done;) {
                  aK = aJ.value;
                  console.log("奖品：".concat(aK.prizeName));
                  n += "用户：".concat(q, " 奖品：").concat(aK.prizeName, "\n");
                }
              } catch (bc) {
                aI.e(bc);
              } finally {
                aI.f();
              }
              aN.next = 99;
              return J("/api/user_mumber/sign");
            case 99:
              aL = aN.sent;
              console.log("签到获得：".concat(aL.data.signIntegral, "积分"));
              aN.next = 103;
              return J("/api/user_mumber/account_detail");
            case 103:
              aM = aN.sent;
              console.log("拥有积分：".concat(aM.data.rst.total_integral, "\n"));
              n += "用户：".concat(q, " 积分：").concat(aM.data.rst.total_integral, "\n");
              aN.next = 111;
              break;
            case 108:
              aN.prev = 108;
              aN.t0 = aN.catch(14);
              console.log(aN.t0);
            case 111:
              aN.next = 12;
              break;
            case 113:
              aN.next = 118;
              break;
            case 115:
              aN.prev = 115;
              aN.t1 = aN.catch(10);
              ah.e(aN.t1);
            case 118:
              aN.prev = 118;
              ah.f();
              return aN.finish(118);
            case 121:
              if (!n) {
                aN.next = 124;
                break;
              }
              aN.next = 124;
              return ab(n);
            case 124:
            case "end":
              return aN.stop();
          }
        }
      }, ae, null, [[10, 115, 118, 121], [14, 108]]);
    }));
    return E.apply(this, arguments);
  }
  function F(ad) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function ae(af) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://passport.tmuyun.com".concat(af),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a3(),
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  }
                };
                $.get(am, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(at));
                            } catch (ay) {
                              $.logErr(ay, as);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return au.stop();
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
              return ai.stop();
          }
        }
      }, ae);
    }));
    return G.apply(this, arguments);
  }
  function H(ad) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function ae(af) {
      var ah;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ah = a1();
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://passport.tmuyun.com".concat(af),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ah.uuid,
                    "X-SIGNATURE": ah.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  },
                  body: ah.body
                };
                $.post(an, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            try {
                              as ? (console.log("".concat(JSON.stringify(as))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(au));
                            } catch (aA) {
                              $.logErr(aA, at);
                            } finally {
                              al();
                            }
                          case 1:
                          case "end":
                            return ax.stop();
                        }
                      }
                    }, ar);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, ae);
    }));
    return I.apply(this, arguments);
  }
  function J(ad) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function ad(ae) {
      var ag;
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              ag = a2(ae);
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://vapp.tmuyun.com".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ag.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ag.uuid,
                    "X-SIGNATURE": ag.signature,
                    "X-TENANT-ID": A,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  }
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ap) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(ar));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, aq);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return K.apply(this, arguments);
  }
  function L(ad, ae) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function ae(af, ag) {
      var aj;
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              aj = a2(af);
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  url: "https://vapp.tmuyun.com".concat(af),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aj.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": aj.uuid,
                    "X-SIGNATURE": aj.signature,
                    "X-TENANT-ID": A,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  },
                  body: ag
                };
                $.post(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            am();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ak.stop();
          }
        }
      }, ae);
    }));
    return M.apply(this, arguments);
  }
  function N(ad) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://activity.m.duiba.com.cn".concat(ag),
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
                $.get(al, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ao) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(aq));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, ap);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return O.apply(this, arguments);
  }
  function P(ad) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ad(ae) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var aj = {
                  url: "https://94227.activity-42.m.duiba.com.cn".concat(ae),
                  headers: {
                    accept: "*/*",
                    "simulated-parameters": "50b8d458fe9a96cd46945b0359cb93bd",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_ouhai;xsb_ouhai;5.0.3;native_app;6.8.0",
                    "x-requested-with": "net.ohnews.www",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://94227.activity-42.m.duiba.com.cn/galaxy/app/project/".concat(y, "/index.html"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: x
                  }
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ai();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ad);
    }));
    return Q.apply(this, arguments);
  }
  function R(ad) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function ae(af) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
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
                  cookie: x
                };
                var al = {
                  url: af,
                  headers: ak
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    var at, au, av;
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !ap) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 17;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            at = /\/galaxy\/app\/project\/(\d+)\/index/;
                            au = ar.match(at);
                            au && (y = au[1]);
                            av = "";
                            at = /sign\/treasure\/index\?id=(\d+)/;
                            au = ar.match(at);
                            au && (av = au[1]);
                            console.log(av);
                            ai(av);
                          case 17:
                            aw.next = 22;
                            break;
                          case 19:
                            aw.prev = 19;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, aq);
                          case 22:
                            aw.prev = 22;
                            ai();
                            return aw.finish(22);
                          case 25:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, ao, null, [[0, 19, 22, 25]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ae);
    }));
    return S.apply(this, arguments);
  }
  function T(ad) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ad(ae) {
      return g().wrap(function ag(ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
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
                  cookie: x
                };
                var al = {
                  url: ae,
                  headers: ak
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    var at;
                    return g().wrap(function au(av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !ap) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 13;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            ar = JSON.parse(ar);
                            eval(ar.data);
                            at = /var\s+key\s+=\s+'([^']+)';/.exec(aWlgXsMotnsZuy.toString())[1];
                            console.log(at);
                            ai(at);
                          case 13:
                            av.next = 18;
                            break;
                          case 15:
                            av.prev = 15;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, aq);
                          case 18:
                            av.prev = 18;
                            ai();
                            return av.finish(18);
                          case 21:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ao, null, [[0, 15, 18, 21]]);
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
      }, ad);
    }));
    return U.apply(this, arguments);
  }
  function V(ad) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ad(ae) {
      return g().wrap(function ag(ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
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
                  cookie: x
                };
                var am = {
                  url: ae,
                  headers: al
                };
                $.get(am, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    var au, av, aw, ax, ay, az, aA;
                    return g().wrap(function aB(aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !ar) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 19;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            console.log("获取prizeId");
                            z = "";
                            au = /prizeId: '(\d+)'/;
                            av = at.match(au);
                            av && (z = av[1]);
                            console.log(z);
                            aw = "";
                            ax = at.match(/<script>[\s\S]*?>[\s\S]*?<\/script>/gi);
                            ax && ax.length > 0 && (ay = ax[ax.length - 1], az = ay.match(/<script[^>]*>([\s\S]*?)<\/script>/i), aA = az ? az[1] : "", eval(aA), aw = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1]);
                            console.log(aw);
                            aj(aw);
                          case 19:
                            aC.next = 24;
                            break;
                          case 21:
                            aC.prev = 21;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, as);
                          case 24:
                            aC.prev = 24;
                            aj();
                            return aC.finish(24);
                          case 27:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, aq, null, [[0, 21, 24, 27]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return W.apply(this, arguments);
  }
  function X(ad) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function ad(ae) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https:".concat(ae),
                  headers: {
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
                  },
                  followRedirect: !1
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    var aq, ar, as;
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !an) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 11;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (aq = "", $.isNode()) {
                              for (ar = ao.headers["set-cookie"] || ao.headers["Set-Cookie"], as = 0; as < ar.length; as++) {
                                aq += ar[as].split(";")[0] + ";";
                              }
                            } else {
                              aq = ao.headers["set-cookie"] || ao.headers["Set-Cookie"];
                              aq = a6(aq);
                            }
                            ah(aq);
                          case 11:
                            at.next = 16;
                            break;
                          case 13:
                            at.prev = 13;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ao);
                          case 16:
                            at.prev = 16;
                            ah();
                            return at.finish(16);
                          case 19:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, am, null, [[0, 13, 16, 19]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ad);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ad, ae) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function ae(af, ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://94227.activity-42.m.duiba.com.cn".concat(af),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://94227.activity-42.m.duiba.com.cn",
                    cookie: x,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://94227.activity-42.m.duiba.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: ag
                };
                $.post(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ap) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(ar));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, aq);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
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
      }, ae);
    }));
    return a0.apply(this, arguments);
  }
  function a1() {
    var aj = new (l.loadJSEncrypt())();
    aj.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = aj.encrypt(r);
    var af = a3(),
      ag = "client_id=".concat(B, "&password=").concat(r, "&phone_number=").concat(q),
      ah = "post%%/web/oauth/credential_auth?".concat(ag, "%%").concat(af, "%%");
    ag = "client_id=".concat(B, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ak = CryptoJS.HmacSHA256(ah, m),
      al = CryptoJS.enc.Hex.stringify(ak);
    var ai = {};
    ai.uuid = af;
    ai.signature = al;
    ai.body = ag;
    return ai;
  }
  function a2(ad) {
    var ae = a3(),
      af = Date.now();
    ad.indexOf("?") > 0 && (ad = ad.substring(0, ad.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ag = CryptoJS.SHA256("".concat(ad, "&&").concat(o, "&&").concat(ae, "&&").concat(af, "&&").concat(C, "&&").concat(A)).toString(),
      ah = {
        uuid: ae,
        time: af,
        signature: ag
      };
    return ah;
  }
  function a3() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ae) {
      var af = 16 * Math.random() | 0,
        ag = "x" === ae ? af : 3 & af | 8;
      return ag.toString(16);
    });
  }
  function a4(ad) {
    return ad[Math.floor(Math.random() * ad.length)];
  }
  function a5() {
    var ad = "5.0.3",
      ae = a3(),
      af = a4(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ag = "Xiaomi " + af,
      ah = "Android",
      ai = "".concat(ah.toUpperCase(), ";").concat("11", ";").concat(B, ";").concat(ad, ";1.0;null;").concat(af),
      aj = "".concat(ad, ";").concat(ae, ";").concat(ag, ";").concat(ah, ";").concat("11", ";Release;").concat("6.8.0"),
      ak = {
        ua: ai,
        commonUa: aj,
        uuid: ae
      };
    return ak;
  }
  function a6(ad) {
    var ae = ad.split(", "),
      af = ae.map(function (ag) {
        var ah = ag.split(";")[0];
        return ah.trim();
      });
    return af.join(";");
  }
  function a7() {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = i(g().mark(function ae() {
      var ag;
      return g().wrap(function ah(ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              if (ag = $.getdata("Utils_Code") || "", !ag || !Object.keys(ag).length) {
                ai.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ag);
              return ai.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ai.abrupt("return", new Promise(function () {
                var al = i(g().mark(function am(an) {
                  return g().wrap(function ap(aq) {
                    for (;;) {
                      switch (aq.prev = aq.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (ar) {
                            $.setdata(ar, "Utils_Code");
                            eval(ar);
                            console.log("✅ Utils加载成功, 请继续");
                            an(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aq.stop();
                      }
                    }
                  }, am);
                }));
                return function (an) {
                  return al.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ai.stop();
          }
        }
      }, ae);
    }));
    return a8.apply(this, arguments);
  }
  function a9() {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function af() {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              ao ? (console.log("".concat(JSON.stringify(ao))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(aq).notice);
                            } catch (as) {
                              $.logErr(as, ap);
                            } finally {
                              ai();
                            }
                          case 1:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, an);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, af);
    }));
    return aa.apply(this, arguments);
  }
  function ab(ad) {
    return ac.apply(this, arguments);
  }
  function ac() {
    ac = i(g().mark(function ae(af) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              if (!$.isNode()) {
                ag.next = 5;
                break;
              }
              ag.next = 3;
              return notify.sendNotify($.name, af);
            case 3:
              ag.next = 6;
              break;
            case 5:
              $.msg($.name, "", af);
            case 6:
            case "end":
              return ag.stop();
          }
        }
      }, ae);
    }));
    return ac.apply(this, arguments);
  }
  i(g().mark(function ad() {
    return g().wrap(function (ae) {
      for (;;) {
        switch (ae.prev = ae.next) {
          case 0:
            ae.next = 2;
            return a9();
          case 2:
            ae.next = 4;
            return D();
          case 4:
          case "end":
            return ae.stop();
        }
      }
    }, ad);
  }))().catch(function (ae) {
    $.log(ae);
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