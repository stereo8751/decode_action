//Fri Jun 06 2025 06:13:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("温度新闻");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a4) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a7) {
      return typeof a7;
    } : function (a7) {
      return a7 && "function" == typeof Symbol && a7.constructor === Symbol && a7 !== Symbol.prototype ? "symbol" : typeof a7;
    };
    return b(a4);
  }
  function c(a4, a5) {
    var a7 = "undefined" != typeof Symbol && a4[Symbol.iterator] || a4["@@iterator"];
    if (!a7) {
      if (Array.isArray(a4) || (a7 = d(a4)) || a5 && a4 && "number" == typeof a4.length) {
        a7 && (a4 = a7);
        var a8 = 0,
          a9 = function () {};
        return {
          s: a9,
          n: function () {
            var ad = {};
            ad.done = !0;
            return a8 >= a4.length ? ad : {
              done: !1,
              value: a4[a8++]
            };
          },
          e: function (ad) {
            throw ad;
          },
          f: a9
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var aa,
      ab = !0,
      ac = !1;
    return {
      s: function () {
        a7 = a7.call(a4);
      },
      n: function () {
        var ag = a7.next();
        ab = ag.done;
        return ag;
      },
      e: function (af) {
        ac = !0;
        aa = af;
      },
      f: function () {
        try {
          ab || null == a7.return || a7.return();
        } finally {
          if (ac) {
            throw aa;
          }
        }
      }
    };
  }
  function d(a4, a5) {
    if (a4) {
      if ("string" == typeof a4) {
        return f(a4, a5);
      }
      var a7 = {}.toString.call(a4).slice(8, -1);
      "Object" === a7 && a4.constructor && (a7 = a4.constructor.name);
      return "Map" === a7 || "Set" === a7 ? Array.from(a4) : "Arguments" === a7 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a7) ? f(a4, a5) : void 0;
    }
  }
  function f(a4, a5) {
    (null == a5 || a5 > a4.length) && (a5 = a4.length);
    for (var a6 = 0, a7 = Array(a5); a6 < a5; a6++) {
      a7[a6] = a4[a6];
    }
    return a7;
  }
  function g() {
    'use strict';

    g = function () {
      return a6;
    };
    var a5,
      a6 = {},
      a7 = Object.prototype,
      a8 = a7.hasOwnProperty,
      a9 = Object.defineProperty || function (aB, aC, aD) {
        aB[aC] = aD.value;
      },
      aa = "function" == typeof Symbol ? Symbol : {},
      ab = aa.iterator || "@@iterator",
      ac = aa.asyncIterator || "@@asyncIterator",
      ad = aa.toStringTag || "@@toStringTag";
    function ae(aB, aC, aD) {
      var aE = {
        value: aD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aB, aC, aE);
      return aB[aC];
    }
    try {
      ae({}, "");
    } catch (aC) {
      ae = function (aE, aF, aG) {
        return aE[aF] = aG;
      };
    }
    function af(aE, aF, aG, aH) {
      var aJ = aF && aF.prototype instanceof am ? aF : am,
        aK = Object.create(aJ.prototype),
        aL = new az(aH || []);
      a9(aK, "_invoke", {
        value: av(aE, aG, aL)
      });
      return aK;
    }
    function ag(aE, aF, aG) {
      try {
        return {
          type: "normal",
          arg: aE.call(aF, aG)
        };
      } catch (aJ) {
        var aH = {};
        aH.type = "throw";
        aH.arg = aJ;
        return aH;
      }
    }
    a6.wrap = af;
    var ah = "suspendedStart",
      ai = "suspendedYield",
      aj = "executing",
      ak = "completed",
      al = {};
    function am() {}
    function an() {}
    function ao() {}
    var ap = {};
    ae(ap, ab, function () {
      var aE = {};
      aE.URjgg = function (aG, aH) {
        return aG === aH;
      };
      return this;
    });
    var aq = Object.getPrototypeOf,
      ar = aq && aq(aq(aA([])));
    ar && ar !== a7 && a8.call(ar, ab) && (ap = ar);
    ao.prototype = am.prototype = Object.create(ap);
    var as = ao.prototype;
    function at(aE) {
      ["next", "throw", "return"].forEach(function (aG) {
        ae(aE, aG, function (aI) {
          return this._invoke(aG, aI);
        });
      });
    }
    function au(aE, aF) {
      function aI(aJ, aK, aL, aM) {
        var aO = ag(aE[aJ], aE, aK);
        if ("throw" !== aO.type) {
          var aP = aO.arg,
            aQ = aP.value;
          return aQ && "object" == b(aQ) && a8.call(aQ, "__await") ? aF.resolve(aQ.__await).then(function (aT) {
            aI("next", aT, aL, aM);
          }, function (aT) {
            aI("throw", aT, aL, aM);
          }) : aF.resolve(aQ).then(function (aT) {
            aP.value = aT;
            aL(aP);
          }, function (aT) {
            return aI("throw", aT, aL, aM);
          });
        }
        aM(aO.arg);
      }
      var aH;
      a9(this, "_invoke", {
        value: function (aJ, aK) {
          function aN() {
            return new aF(function (aP, aQ) {
              aI(aJ, aK, aP, aQ);
            });
          }
          return aH = aH ? aH.then(aN, aN) : aN();
        }
      });
    }
    function av(aE, aF, aG) {
      var aI = ah;
      return function (aK, aL) {
        if (aI === aj) {
          throw Error("Generator is already running");
        }
        if (aI === ak) {
          if ("throw" === aK) {
            throw aL;
          }
          var aM = {
            value: a5,
            done: !0
          };
          return aM;
        }
        for (aG.method = aK, aG.arg = aL;;) {
          var aN = aG.delegate;
          if (aN) {
            var aO = aw(aN, aG);
            if (aO) {
              if (aO === al) {
                continue;
              }
              return aO;
            }
          }
          if ("next" === aG.method) {
            aG.sent = aG._sent = aG.arg;
          } else {
            if ("throw" === aG.method) {
              if (aI === ah) {
                throw aI = ak, aG.arg;
              }
              aG.dispatchException(aG.arg);
            } else {
              "return" === aG.method && aG.abrupt("return", aG.arg);
            }
          }
          aI = aj;
          var aP = ag(aE, aF, aG);
          if ("normal" === aP.type) {
            if (aI = aG.done ? ak : ai, aP.arg === al) {
              continue;
            }
            var aQ = {};
            aQ.value = aP.arg;
            aQ.done = aG.done;
            return aQ;
          }
          "throw" === aP.type && (aI = ak, aG.method = "throw", aG.arg = aP.arg);
        }
      };
    }
    function aw(aE, aF) {
      var aJ = aF.method,
        aK = aE.iterator[aJ];
      if (aK === a5) {
        aF.delegate = null;
        "throw" === aJ && aE.iterator.return && (aF.method = "return", aF.arg = a5, aw(aE, aF), "throw" === aF.method) || "return" !== aJ && (aF.method = "throw", aF.arg = new TypeError("The iterator does not provide a '" + aJ + "' method"));
        return al;
      }
      var aI = ag(aK, aE.iterator, aF.arg);
      if ("throw" === aI.type) {
        aF.method = "throw";
        aF.arg = aI.arg;
        aF.delegate = null;
        return al;
      }
      var aL = aI.arg;
      return aL ? aL.done ? (aF[aE.resultName] = aL.value, aF.next = aE.nextLoc, "return" !== aF.method && (aF.method = "next", aF.arg = a5), aF.delegate = null, al) : aL : (aF.method = "throw", aF.arg = new TypeError("iterator result is not an object"), aF.delegate = null, al);
    }
    function ax(aE) {
      var aF = {
        tryLoc: aE[0]
      };
      var aG = aF;
      1 in aE && (aG.catchLoc = aE[1]);
      2 in aE && (aG.finallyLoc = aE[2], aG.afterLoc = aE[3]);
      this.tryEntries.push(aG);
    }
    function ay(aE) {
      var aF = aE.completion || {};
      aF.type = "normal";
      delete aF.arg;
      aE.completion = aF;
    }
    function az(aE) {
      var aH = {
        tryLoc: "root"
      };
      this.tryEntries = [aH];
      aE.forEach(ax, this);
      this.reset(!0);
    }
    function aA(aE) {
      if (aE || "" === aE) {
        var aF = aE[ab];
        if (aF) {
          return aF.call(aE);
        }
        if ("function" == typeof aE.next) {
          return aE;
        }
        if (!isNaN(aE.length)) {
          var aG = -1,
            aH = function aJ() {
              for (; ++aG < aE.length;) {
                if (a8.call(aE, aG)) {
                  aJ.value = aE[aG];
                  aJ.done = !1;
                  return aJ;
                }
              }
              aJ.value = a5;
              aJ.done = !0;
              return aJ;
            };
          return aH.next = aH;
        }
      }
      throw new TypeError(b(aE) + " is not iterable");
    }
    an.prototype = ao;
    a9(as, "constructor", {
      value: ao,
      configurable: !0
    });
    a9(ao, "constructor", {
      value: an,
      configurable: !0
    });
    an.displayName = ae(ao, ad, "GeneratorFunction");
    a6.isGeneratorFunction = function (aE) {
      var aF = "function" == typeof aE && aE.constructor;
      return !!aF && (aF === an || "GeneratorFunction" === (aF.displayName || aF.name));
    };
    a6.mark = function (aE) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aE, ao) : (aE.__proto__ = ao, ae(aE, ad, "GeneratorFunction"));
      aE.prototype = Object.create(as);
      return aE;
    };
    a6.awrap = function (aE) {
      var aF = {
        __await: aE
      };
      return aF;
    };
    at(au.prototype);
    ae(au.prototype, ac, function () {
      return this;
    });
    a6.AsyncIterator = au;
    a6.async = function (aE, aF, aG, aH, aI) {
      void 0 === aI && (aI = Promise);
      var aK = new au(af(aE, aF, aG, aH), aI);
      return a6.isGeneratorFunction(aF) ? aK : aK.next().then(function (aL) {
        return aL.done ? aL.value : aK.next();
      });
    };
    at(as);
    ae(as, ad, "Generator");
    ae(as, ab, function () {
      return this;
    });
    ae(as, "toString", function () {
      return "[object Generator]";
    });
    a6.keys = function (aE) {
      var aF = Object(aE),
        aG = [];
      for (var aH in aF) aG.push(aH);
      aG.reverse();
      return function aJ() {
        for (; aG.length;) {
          var aL = aG.pop();
          if (aL in aF) {
            aJ.value = aL;
            aJ.done = !1;
            return aJ;
          }
        }
        aJ.done = !0;
        return aJ;
      };
    };
    a6.values = aA;
    az.prototype = {
      constructor: az,
      reset: function (aE) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a5, this.done = !1, this.delegate = null, this.method = "next", this.arg = a5, this.tryEntries.forEach(ay), !aE) {
          for (var aF in this) "t" === aF.charAt(0) && a8.call(this, aF) && !isNaN(+aF.slice(1)) && (this[aF] = a5);
        }
      },
      stop: function () {
        this.done = !0;
        var aE = this.tryEntries[0].completion;
        if ("throw" === aE.type) {
          throw aE.arg;
        }
        return this.rval;
      },
      dispatchException: function (aE) {
        if (this.done) {
          throw aE;
        }
        var aG = this;
        function aM(aN, aO) {
          aJ.type = "throw";
          aJ.arg = aE;
          aG.next = aN;
          aO && (aG.method = "next", aG.arg = a5);
          return !!aO;
        }
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH],
            aJ = aI.completion;
          if ("root" === aI.tryLoc) {
            return aM("end");
          }
          if (aI.tryLoc <= this.prev) {
            var aK = a8.call(aI, "catchLoc"),
              aL = a8.call(aI, "finallyLoc");
            if (aK && aL) {
              if (this.prev < aI.catchLoc) {
                return aM(aI.catchLoc, !0);
              }
              if (this.prev < aI.finallyLoc) {
                return aM(aI.finallyLoc);
              }
            } else {
              if (aK) {
                if (this.prev < aI.catchLoc) {
                  return aM(aI.catchLoc, !0);
                }
              } else {
                if (!aL) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aI.finallyLoc) {
                  return aM(aI.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aE, aF) {
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH];
          if (aI.tryLoc <= this.prev && a8.call(aI, "finallyLoc") && this.prev < aI.finallyLoc) {
            var aJ = aI;
            break;
          }
        }
        aJ && ("break" === aE || "continue" === aE) && aJ.tryLoc <= aF && aF <= aJ.finallyLoc && (aJ = null);
        var aK = aJ ? aJ.completion : {};
        aK.type = aE;
        aK.arg = aF;
        return aJ ? (this.method = "next", this.next = aJ.finallyLoc, al) : this.complete(aK);
      },
      complete: function (aE, aF) {
        if ("throw" === aE.type) {
          throw aE.arg;
        }
        "break" === aE.type || "continue" === aE.type ? this.next = aE.arg : "return" === aE.type ? (this.rval = this.arg = aE.arg, this.method = "return", this.next = "end") : "normal" === aE.type && aF && (this.next = aF);
        return al;
      },
      finish: function (aE) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG];
          if (aH.finallyLoc === aE) {
            this.complete(aH.completion, aH.afterLoc);
            ay(aH);
            return al;
          }
        }
      },
      catch: function (aE) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG];
          if (aH.tryLoc === aE) {
            var aI = aH.completion;
            if ("throw" === aI.type) {
              var aJ = aI.arg;
              ay(aH);
            }
            return aJ;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aE, aF, aG) {
        this.delegate = {
          iterator: aA(aE),
          resultName: aF,
          nextLoc: aG
        };
        "next" === this.method && (this.arg = a5);
        return al;
      }
    };
    return a6;
  }
  function h(a4, a5, a6, a7, a8, a9, aa) {
    try {
      var ad = a4[a9](aa),
        ae = ad.value;
    } catch (ag) {
      return void a6(ag);
    }
    ad.done ? a5(ae) : Promise.resolve(ae).then(a7, a8);
  }
  function i(a4) {
    return function () {
      var a6 = this,
        a7 = arguments;
      return new Promise(function (a8, a9) {
        var ab = a4.apply(a6, a7);
        function ac(ae) {
          h(ab, a8, a9, ac, ad, "next", ae);
        }
        function ad(ae) {
          h(ab, a8, a9, ac, ad, "throw", ae);
        }
        ac(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.WDXW : $.getdata("WDXW")) || "",
    k = $.getjson("WDXW_Device") || [],
    l = void 0,
    m = "",
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
    y = "5c5555d0f9c249de9de7c46904b506b1";
  function z() {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function a6() {
      var a8, a9, aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb;
      return g().wrap(function (bd) {
        for (;;) {
          switch (bd.prev = bd.next) {
            case 0:
              if (j) {
                bd.next = 5;
                break;
              }
              console.log("先填写账号密码");
              bd.next = 4;
              return a2("先填写账号密码");
            case 4:
              return bd.abrupt("return");
            case 5:
              bd.next = 7;
              return Y();
            case 7:
              l = bd.sent;
              a8 = j.split(" ");
              a9 = 0;
            case 10:
              if (!(a9 < a8.length)) {
                bd.next = 288;
                break;
              }
              if (bd.prev = 11, !(a9 > 9)) {
                bd.next = 14;
                break;
              }
              return bd.abrupt("continue", 285);
            case 14:
              if (s = a8[a9].split("&")[0], t = a8[a9].split("&")[1], v = a8[a9].split("&")[2], console.log("用户：".concat(s, "开始任务")), ab = k.findIndex(function (bn) {
                return bn.id == s;
              }), -1 === ab) {
                bd.next = 27;
                break;
              }
              console.log("从缓存中取UA");
              m = k[ab].ua;
              n = k[ab].device;
              console.log(m);
              console.log(n);
              bd.next = 35;
              break;
            case 27:
              console.log("随机生成UA");
              ac = X();
              m = ac.ua;
              n = ac.device;
              console.log(m);
              console.log(n);
              bd.next = 35;
              return B();
            case 35:
              u = "";
              console.log("获取publicKey");
              bd.next = 39;
              return D("/wzrbapp/app/sys/publicKey");
            case 39:
              ad = bd.sent;
              p = ad.data.publicKey;
              q = ad.data.key;
              console.log(p);
              af = new (l.loadJSEncrypt())();
              af.setPublicKey(q);
              t = af.encrypt(t);
              console.log("登录");
              bd.next = 49;
              return F("/wzrbapp/app/sys/login/byPassword", "rasPassword=".concat(encodeURIComponent(t), "&username=").concat(s, "&publicKey=").concat(p, "&inviteCode=&longlat=,"));
            case 49:
              if (ag = bd.sent, 200 == ag.code) {
                bd.next = 53;
                break;
              }
              console.log(ag.message);
              return bd.abrupt("continue", 285);
            case 53:
              console.log("登录成功");
              u = ag.data.paAuthority;
              w = ag.data.userId;
              console.log("————————————");
              ah = new Date().getTime() + "";
              ai = ah.split("").reverse().slice(0, 8).reverse().join("");
              aj = S({
                redirectUrl: "https://activity.xinhuamm.net/statics/earn-coins2-h5/#/",
                appId: y,
                data: {
                  accessToken: u
                }
              }, "b557ddda1bf5e414".concat(ai), "0000000000000000");
              ak = "----WebKitFormBoundary2V9BQiXoV3SzDQqC";
              al = "--".concat(ak, "\r\n") + "Content-Disposition: form-data; name=\"timeStamp\"\r\n\r\n" + "".concat(ah, "\r\n") + "--".concat(ak, "\r\n") + "Content-Disposition: form-data; name=\"params\"\r\n\r\n" + "".concat(aj, "\r\n") + "--".concat(ak, "--\r\n");
              bd.next = 64;
              return H("https://ryapi.xinhuamm.net/token/api/token/getTokenInfo", al, ak);
            case 64:
              am = bd.sent;
              an = T(am.obj, "414e5fb1addd755b", "0000000000000000");
              x = an.token;
              bd.next = 69;
              return L("https://mkapi2.xinhuamm.net/coinApi2/clapi/statistics/getStaticsInfo", {});
            case 69:
              ao = bd.sent;
              console.log("今日获得暖暖币：".concat(ao.obj.todayCoin, " 我的零钱：").concat(ao.obj.balance, "元 邀请人数：").concat(ao.obj.totalInviteCount));
              console.log("开启宝箱");
              bd.next = 74;
              return L("https://mkapi2.xinhuamm.net/coinApi2/clapi/coin/openTreasureBox", {});
            case 74:
              ap = bd.sent;
              console.log(ap.msg);
              console.log("任务进度");
              console.log("阅读：".concat(ao.obj.visitNum, " 点赞：").concat(ao.obj.supportNum, " 评论：").concat(ao.obj.commentNum, " 分享：").concat(ao.obj.shareNum));
              bd.next = 80;
              return L("https://mkapi2.xinhuamm.net/coinApi2/clapi/content/getHighContentList", {});
            case 80:
              aq = bd.sent;
              bd.next = 83;
              return L("https://mkapi2.xinhuamm.net/coinApi2/clapi/content/getUserContentInfo", {});
            case 83:
              ar = bd.sent;
              as = c(aq.list);
              bd.prev = 85;
              as.s();
            case 87:
              if ((at = as.n()).done) {
                bd.next = 112;
                break;
              }
              if (au = at.value, console.log("文章：".concat(au.title)), ar.obj.visitList.includes(au.contentId)) {
                bd.next = 95;
                break;
              }
              bd.next = 93;
              return F("/hybapp/c/docs/cbyd/event", "eventId=2&docId=".concat(au.contentId));
            case 93:
              av = bd.sent;
              console.log("阅读：".concat(av.msg));
            case 95:
              if (ar.obj.supportList.includes(au.contentId)) {
                bd.next = 100;
                break;
              }
              bd.next = 98;
              return F("/hybapp/c/docs/cbyd/event", "eventId=5&docId=".concat(au.contentId));
            case 98:
              aw = bd.sent;
              console.log("点赞：".concat(aw.msg));
            case 100:
              if (ar.obj.commentList.includes(au.contentId)) {
                bd.next = 105;
                break;
              }
              bd.next = 103;
              return F("/hybapp/c/docs/cbyd/event", "eventId=4&docId=".concat(au.contentId));
            case 103:
              ax = bd.sent;
              console.log("评论：".concat(ax.msg));
            case 105:
              if (ar.obj.shareList.includes(au.contentId)) {
                bd.next = 110;
                break;
              }
              bd.next = 108;
              return F("/hybapp/c/docs/cbyd/event", "eventId=3&docId=".concat(au.contentId));
            case 108:
              ay = bd.sent;
              console.log("分享：".concat(ay.msg));
            case 110:
              bd.next = 87;
              break;
            case 112:
              bd.next = 117;
              break;
            case 114:
              bd.prev = 114;
              bd.t0 = bd.catch(85);
              as.e(bd.t0);
            case 117:
              bd.prev = 117;
              as.f();
              return bd.finish(117);
            case 120:
              bd.next = 122;
              return L("https://mkapi2.xinhuamm.net/coinApi2/clapi/global/config/getConfig", {});
            case 122:
              for (az = bd.sent, aA = az.obj.inviteLotteryPath, aB = aA.split("?")[1], aC = {}, aD = aB.split("&"), aE = 0, aF = aD.length; aE < aF; aE++) {
                aG = aD[aE].split("=");
                aC[aG[0]] = aG[1];
              }
              console.log("————————————");
              console.log("每日抽奖");
              bd.next = 132;
              return J("https://mediacloud-pub-oss.xinhuamm.net/lottery/activity/".concat(y, "/").concat(aC.id, "/index.json?timestamp=").concat(Date.now()));
            case 132:
              aH = bd.sent;
              bd.next = 135;
              return J("https://ryapi.xinhuamm.net/lotteryapi/lottery/expandInfo/".concat(aC.id));
            case 135:
              aI = bd.sent;
              console.log("剩余抽奖次数：".concat(aI.data.availableJoinCount));
              aJ = g().mark(function bu() {
                var bw, bx;
                return g().wrap(function (bz) {
                  for (;;) {
                    switch (bz.prev = bz.next) {
                      case 0:
                        bz.next = 2;
                        return J("https://ryapi.xinhuamm.net/lotteryapi/lottery/draw?id=".concat(aC.id, "&appId=").concat(y, "&password=&idcard="));
                      case 2:
                        bw = bz.sent;
                        bx = aH.lotteryItems.findIndex(function (bA) {
                          return bA.id == bw.data.prizeItemId;
                        });
                        console.log("抽奖获得：".concat(aH.lotteryItems[bx].code));
                      case 5:
                      case "end":
                        return bz.stop();
                    }
                  }
                }, bu);
              });
              aK = 0;
            case 139:
              if (!(aK < aI.data.availableJoinCount)) {
                bd.next = 144;
                break;
              }
              return bd.delegateYield(aJ(), "t1", 141);
            case 141:
              aK++;
              bd.next = 139;
              break;
            case 144:
              bd.next = 146;
              return L("https://ryapi.xinhuamm.net/lotteryapi/lottery/my/winningRecord/".concat(y, "/").concat(aC.id, "?pageNum=1&pageSize=20"), {});
            case 146:
              if (aL = bd.sent, null == aL || null === (aa = aL.data) || void 0 === aa || !aa.list) {
                bd.next = 175;
                break;
              }
              aM = c(aL.data.list);
              bd.prev = 149;
              aM.s();
            case 151:
              if ((aN = aM.n()).done) {
                bd.next = 167;
                break;
              }
              if (aO = aN.value, 3 != aO.itemType || 0 != aO.redpackReceiveStatus) {
                bd.next = 165;
                break;
              }
              if (console.log("奖品：".concat(aO.itemCode)), !v) {
                bd.next = 164;
                break;
              }
              var bf = {};
              bf.token = v;
              bf.ticket = aO.winningPrize.exchangeCode;
              console.log("领取奖品");
              bd.next = 159;
              return N(bf);
            case 159:
              aP = bd.sent;
              console.log("领取结果：".concat(aP.msg));
              r += "用户：".concat(s, " 抽奖获得：").concat(aO.itemCode, " 领取结果：").concat(aP.msg, "\n");
              bd.next = 165;
              break;
            case 164:
              console.log("请配置wxToken");
            case 165:
              bd.next = 151;
              break;
            case 167:
              bd.next = 172;
              break;
            case 169:
              bd.prev = 169;
              bd.t2 = bd.catch(149);
              aM.e(bd.t2);
            case 172:
              bd.prev = 172;
              aM.f();
              return bd.finish(172);
            case 175:
              for (console.log("————————————"), console.log("每日签到"), aA = az.obj.inviteSignPath, aB = aA.split("?")[1], aC = {}, aD = aB.split("&"), aQ = 0, aR = aD.length; aQ < aR; aQ++) {
                aS = aD[aQ].split("=");
                aC[aS[0]] = aS[1];
              }
              bd.next = 184;
              return J("https://mediacloud-pub-oss.xinhuamm.net/sign/activity/".concat(y, "/").concat(aC.activityId, "/publish/index.json?device=brower").concat(Math.floor(new Date().getTime() / 1000)));
            case 184:
              aT = bd.sent;
              bd.next = 187;
              return L("https://signapi.xinhuamm.net/signapi/sign/getSignInfoById", {
                id: aT.id
              });
            case 187:
              if (aU = bd.sent, 1 != aU.obj.currentSign) {
                bd.next = 193;
                break;
              }
              console.log("今日已签到");
              console.log("连续签到：".concat(aU.obj.continuityDays, "天"));
              bd.next = 198;
              break;
            case 193:
              var bg = {};
              bg.activityId = aT.id;
              bd.next = 195;
              return L("https://signapi.xinhuamm.net/signapi/sign/sign", bg);
            case 195:
              aW = bd.sent;
              console.log(aW.msg);
              console.log("连续签到：".concat(null == aW || null === (aV = aW.obj) || void 0 === aV ? void 0 : aV.continuityDays, "天"));
            case 198:
              bd.next = 200;
              return L("https://signapi.xinhuamm.net/signapi/sign/getSevenDayAwardList", {});
            case 200:
              aX = bd.sent;
              aY = c(aX.list);
              bd.prev = 202;
              aY.s();
            case 204:
              if ((aZ = aY.n()).done) {
                bd.next = 251;
                break;
              }
              b1 = aZ.value;
              console.log("活动：".concat(b1.activityName));
              bd.next = 209;
              return J("https://ryapi.xinhuamm.net/lotteryapi/lottery/expandInfo/".concat(b1.signLotteryJoinId));
            case 209:
              b2 = bd.sent;
              console.log("剩余抽奖次数：".concat(b2.data.availableJoinCount));
              b3 = g().mark(function bC() {
                var bE, bF;
                return g().wrap(function (bG) {
                  for (;;) {
                    switch (bG.prev = bG.next) {
                      case 0:
                        bG.next = 2;
                        return J("https://mediacloud-pub-oss.xinhuamm.net/lottery/activity/".concat(y, "/").concat(b1.signLotteryJoinId, "/index.json?timestamp=").concat(Date.now()));
                      case 2:
                        aH = bG.sent;
                        bG.next = 5;
                        return J("https://ryapi.xinhuamm.net/lotteryapi/lottery/draw?id=".concat(b1.signLotteryJoinId, "&appId=").concat(y, "&password=&idcard="));
                      case 5:
                        bE = bG.sent;
                        bF = aH.lotteryItems.findIndex(function (bI) {
                          return bI.id == bE.data.prizeItemId;
                        });
                        console.log("抽奖获得：".concat(aH.lotteryItems[bF].code));
                      case 8:
                      case "end":
                        return bG.stop();
                    }
                  }
                }, bC);
              });
              b4 = 0;
            case 213:
              if (!(b4 < b2.data.availableJoinCount)) {
                bd.next = 218;
                break;
              }
              return bd.delegateYield(b3(), "t3", 215);
            case 215:
              b4++;
              bd.next = 213;
              break;
            case 218:
              bd.next = 220;
              return L("https://ryapi.xinhuamm.net/lotteryapi/lottery/my/winningRecord/".concat(y, "/").concat(b1.signLotteryJoinId), {});
            case 220:
              if (b5 = bd.sent, null == b5 || null === (b0 = b5.data) || void 0 === b0 || !b0.list) {
                bd.next = 249;
                break;
              }
              b6 = c(b5.data.list);
              bd.prev = 223;
              b6.s();
            case 225:
              if ((b7 = b6.n()).done) {
                bd.next = 241;
                break;
              }
              if (b8 = b7.value, 3 != b8.itemType || 0 != b8.redpackReceiveStatus) {
                bd.next = 239;
                break;
              }
              if (console.log("奖品：".concat(b8.itemCode)), !v) {
                bd.next = 238;
                break;
              }
              var bh = {};
              bh.token = v;
              bh.ticket = b8.winningPrize.exchangeCode;
              console.log("领取奖品");
              bd.next = 233;
              return N(bh);
            case 233:
              b9 = bd.sent;
              console.log("领取结果：".concat(b9.msg));
              r += "用户：".concat(s, " 抽奖获得：").concat(b8.itemCode, " 领取结果：").concat(b9.msg, "\n");
              bd.next = 239;
              break;
            case 238:
              console.log("请配置wxToken");
            case 239:
              bd.next = 225;
              break;
            case 241:
              bd.next = 246;
              break;
            case 243:
              bd.prev = 243;
              bd.t4 = bd.catch(223);
              b6.e(bd.t4);
            case 246:
              bd.prev = 246;
              b6.f();
              return bd.finish(246);
            case 249:
              bd.next = 204;
              break;
            case 251:
              bd.next = 256;
              break;
            case 253:
              bd.prev = 253;
              bd.t5 = bd.catch(202);
              aY.e(bd.t5);
            case 256:
              bd.prev = 256;
              aY.f();
              return bd.finish(256);
            case 259:
              console.log("————————————");
              console.log("查询零钱");
              bd.next = 263;
              return L("https://mkapi2.xinhuamm.net/coinApi2/clapi/statistics/getStaticsInfo", {});
            case 263:
              if (ao = bd.sent, !(ao.obj.balance >= 10)) {
                bd.next = 278;
                break;
              }
              var bi = {};
              bi.amount = ao.obj.balance;
              console.log("提现");
              bd.next = 268;
              return L("https://mkapi2.xinhuamm.net/coinApi2/clapi/account/withdrawal", bi);
            case 268:
              if (ba = bd.sent, 200 != ba.status) {
                bd.next = 277;
                break;
              }
              var bj = {};
              bj.token = v;
              bj.ticket = ba.obj.ticket;
              bd.next = 272;
              return P(bj);
            case 272:
              bb = bd.sent;
              console.log("提现结果：".concat(bb.msg));
              r += "用户：".concat(s, " 提现：").concat(ao.obj.balance, " 提现结果：").concat(bb.msg, "\n");
              bd.next = 278;
              break;
            case 277:
              console.log(ba.msg);
            case 278:
              console.log("今日获得暖暖币：".concat(ao.obj.todayCoin, " 我的零钱：").concat(ao.obj.balance, "元 邀请人数：").concat(ao.obj.totalInviteCount));
              r += "用户：".concat(s, " 零钱：").concat(ao.obj.balance, "\n");
              bd.next = 285;
              break;
            case 282:
              bd.prev = 282;
              bd.t6 = bd.catch(11);
              console.log(bd.t6);
            case 285:
              a9++;
              bd.next = 10;
              break;
            case 288:
              if (!r) {
                bd.next = 291;
                break;
              }
              bd.next = 291;
              return a2(r);
            case 291:
            case "end":
              return bd.stop();
          }
        }
      }, a6, null, [[11, 282], [85, 114, 117, 120], [149, 169, 172, 175], [202, 253, 256, 259], [223, 243, 246, 249]]);
    }));
    return A.apply(this, arguments);
  }
  function B() {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function a6() {
      var a8, a9, aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              var ac = {};
              ac.id = s;
              ac.device = n;
              ac.ua = m;
              if (a8 = $.getjson("WDXW_Device") || [], a9 = ac, aa = a8.findIndex(function (ad) {
                return ad.id == a9.id;
              }), -1 === aa) {
                ab.next = 12;
                break;
              }
              if (a8[aa].device != a9.device || a8[aa].ua != a9.ua) {
                ab.next = 8;
                break;
              }
              return ab.abrupt("return");
            case 8:
              a8[aa] = a9;
              console.log("🎉用户".concat(a9.id, "更新ua成功!"));
            case 10:
              ab.next = 14;
              break;
            case 12:
              a8.push(a9);
              console.log("🎉用户".concat(a9.id, "新增ua成功!"));
            case 14:
              $.setjson(a8, "WDXW_Device");
            case 15:
            case "end":
              return ab.stop();
          }
        }
      }, a6);
    }));
    return C.apply(this, arguments);
  }
  function D(a4) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function a6(a7) {
      var a9;
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = R();
              return aa.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://wdappapi.wzrb.com.cn".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-DEVICE-ID": n,
                    "X-TIMESTAMP": a9.time,
                    APPWEBWZAUTHORITY: "",
                    "X-SITE-UID": "S_WDXW",
                    "X-SIGNATURE": a9.signature,
                    "X-USER-ID": "",
                    "X-REQUEST-ID": a9.uuid,
                    "X-SESSION-ID": "",
                    "X-TENANT-UID": "T_GOV",
                    "Accept-Encoding": "gzip",
                    "USER-AGENT": m
                  }
                };
                $.get(af, function () {
                  var ai = i(g().mark(function aj(ak, al, am) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            try {
                              ak ? (console.log("".concat(JSON.stringify(ak))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ad(JSON.parse(am));
                            } catch (as) {
                              $.logErr(as, al);
                            } finally {
                              ad();
                            }
                          case 1:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, aj);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return E.apply(this, arguments);
  }
  function F(a4, a5) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a5(a6, a7) {
      var a9;
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = R();
              return aa.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://wdappapi.wzrb.com.cn".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-DEVICE-ID": n,
                    "X-TIMESTAMP": a9.time,
                    APPWEBWZAUTHORITY: u,
                    "X-SITE-UID": "S_WDXW",
                    "X-SIGNATURE": a9.signature,
                    "X-USER-ID": w,
                    "X-REQUEST-ID": a9.uuid,
                    "X-SESSION-ID": u,
                    "X-TENANT-UID": "T_GOV",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "USER-AGENT": m
                  },
                  body: a7
                };
                $.post(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (ar) {
                              $.logErr(ar, aj);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a5);
    }));
    return G.apply(this, arguments);
  }
  function H(a4, a5, a6) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a6(a7, a8, a9) {
      return g().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              return ac.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "Content-Type": "multipart/form-data; boundary=".concat(a9),
                    Accept: "*/*",
                    Origin: "https://activity.xinhuamm.net",
                    "X-Requested-With": "com.wznews.news.app",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://activity.xinhuamm.net/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; ".concat(o, " Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36/trs;trs_app")
                  },
                  body: a8
                };
                $.post(af, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ad(JSON.parse(ak));
                            } catch (an) {
                              $.logErr(an, aj);
                            } finally {
                              ad();
                            }
                          case 1:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ac.stop();
          }
        }
      }, a6);
    }));
    return I.apply(this, arguments);
  }
  function J(a4) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a6(a7) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    dn: n,
                    token: x,
                    cookie: "token=".concat(x),
                    Accept: "*/*",
                    Origin: "https://activity.xinhuamm.net",
                    "X-Requested-With": "com.wznews.news.app",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://activity.xinhuamm.net/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; ".concat(o, " Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36/trs;trs_app")
                  }
                };
                $.get(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ai));
                            } catch (al) {
                              $.logErr(al, ah);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, af);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a6);
    }));
    return K.apply(this, arguments);
  }
  function L(a4, a5) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a4(a5, a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    dn: n,
                    token: x,
                    cookie: "token=".concat(x),
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    Origin: "https://activity.xinhuamm.net",
                    "X-Requested-With": "com.wznews.news.app",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://activity.xinhuamm.net/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; ".concat(o, " Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36/trs;trs_app")
                  },
                  body: JSON.stringify(a6)
                };
                $.post(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ai));
                            } catch (al) {
                              $.logErr(al, ah);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, af);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return M.apply(this, arguments);
  }
  function N(a4) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a5(a6) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://ryapi.xinhuamm.net/lotteryapi/noLogin/redpack/redeem",
                  headers: {
                    Connection: "Keep-Alive",
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                    Referer: "https://servicewechat.com/wxe413e839239656fd/9/page-frame.html",
                    "Accept-Encoding": "gzip,compress,br,deflate",
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x18003237) NetType/WIFI Language/zh_CN"
                  },
                  body: JSON.stringify(a6)
                };
                $.post(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            try {
                              af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a9(JSON.parse(ah));
                            } catch (aj) {
                              $.logErr(aj, ag);
                            } finally {
                              a9();
                            }
                          case 1:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ae);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a5);
    }));
    return O.apply(this, arguments);
  }
  function P(a4) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a5(a6) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ac = {
                  Connection: "Keep-Alive",
                  "X-Requested-With": "XMLHttpRequest",
                  "Content-Type": "application/json",
                  Referer: "https://servicewechat.com/wxe413e839239656fd/9/page-frame.html",
                  "Accept-Encoding": "gzip,compress,br,deflate",
                  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x18003237) NetType/WIFI Language/zh_CN"
                };
                var ad = {
                  url: "https://mkapi.xinhuamm.net/coinApi/cvapi/account/withdrawal/callback",
                  headers: ac,
                  body: JSON.stringify(a6)
                };
                $.post(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(aj));
                            } catch (al) {
                              $.logErr(al, ai);
                            } finally {
                              ab();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return Q.apply(this, arguments);
  }
  function R() {
    var a4 = U(),
      a5 = Date.now(),
      a6 = l.createCryptoJS(),
      a7 = a6.SHA256("T_GOV&&S_WDXW&&".concat(a4, "&&").concat(u, "&&").concat(a5, "&&35c782a2")).toString(),
      a8 = {
        uuid: a4,
        time: a5,
        signature: a7
      };
    return a8;
  }
  function S(a4, a5, a6) {
    var a7 = l.createCryptoJS(),
      a8 = a7.enc.Utf8.parse(a5),
      a9 = a7.enc.Utf8.parse(a6),
      aa = a7.enc.Utf8.parse(JSON.stringify(a4)),
      ab = a7.AES.encrypt(aa, a8, {
        iv: a9,
        mode: a7.mode.CBC,
        padding: a7.pad.Pkcs7
      });
    return a7.enc.Base64.stringify(ab.ciphertext);
  }
  function T(a4, a5, a6) {
    var a7 = l.createCryptoJS(),
      a8 = a7.enc.Utf8.parse(a5),
      a9 = a7.enc.Utf8.parse(a6),
      aa = a4,
      ab = a7.AES.decrypt(aa, a8, {
        iv: a9,
        mode: a7.mode.CBC,
        padding: a7.pad.Pkcs7
      });
    return JSON.parse(ab.toString(a7.enc.Utf8));
  }
  function U() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a4) {
      var a5 = 16 * Math.random() | 0,
        a6 = "x" === a4 ? a5 : 3 & a5 | 8;
      return a6.toString(16);
    });
  }
  function V() {
    for (var a4 = "", a5 = 0; a5 < 16; a5++) {
      var a6 = Math.floor(16 * Math.random());
      a4 += "0123456789abcdef"[a6];
    }
    return a4;
  }
  function W(a4) {
    return a4[Math.floor(Math.random() * a4.length)];
  }
  function X() {
    o = W(["M2103K19C", "M2104K10AC", "21121119SC", "21091116AC", "21091116C", "2201116SC", "21091116UC", "22101317C", "22101316C", "22101316UCP", "2312DRAABC", "2312DRA50C", "23090RA98C"]);
    var a4 = V(),
      a5 = "3565961356" + o.length % 10 + 19 + a4,
      a6 = l.md5(a5).toUpperCase(),
      a7 = "8.2.3;".concat(a6, ";Redmi/").concat(o, ";ANDROID;11;"),
      a8 = {
        ua: a7,
        device: a6
      };
    return a8;
  }
  function Y() {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function a5() {
      var a7;
      return g().wrap(function a8(a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              if (a7 = $.getdata("Utils_Code") || "", !a7 || !Object.keys(a7).length) {
                a9.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a7);
              return a9.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a9.abrupt("return", new Promise(function () {
                var ab = i(g().mark(function ac(ad) {
                  return g().wrap(function af(ag) {
                    for (;;) {
                      switch (ag.prev = ag.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ah) {
                            $.setdata(ah, "Utils_Code");
                            eval(ah);
                            console.log("✅ Utils加载成功, 请继续");
                            ad(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ag.stop();
                      }
                    }
                  }, ac);
                }));
                return function (ad) {
                  return ab.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return Z.apply(this, arguments);
  }
  function a0() {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = i(g().mark(function a4() {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var aa = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(aa, function () {
                  var ab = i(g().mark(function ac(ad, ae, af) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            try {
                              ad ? (console.log("".concat(JSON.stringify(ad))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(af).notice);
                            } catch (ai) {
                              $.logErr(ai, ae);
                            } finally {
                              a8();
                            }
                          case 1:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ac);
                  }));
                  return function (ad, ae, af) {
                    return ab.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a4);
    }));
    return a1.apply(this, arguments);
  }
  function a2(a4) {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = i(g().mark(function a6(a7) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (!$.isNode()) {
                a8.next = 5;
                break;
              }
              a8.next = 3;
              return notify.sendNotify($.name, a7);
            case 3:
              a8.next = 6;
              break;
            case 5:
              $.msg($.name, "", a7);
            case 6:
            case "end":
              return a8.stop();
          }
        }
      }, a6);
    }));
    return a3.apply(this, arguments);
  }
  i(g().mark(function a4() {
    return g().wrap(function (a5) {
      for (;;) {
        switch (a5.prev = a5.next) {
          case 0:
            a5.next = 2;
            return a0();
          case 2:
            a5.next = 4;
            return z();
          case 4:
          case "end":
            return a5.stop();
        }
      }
    }, a4);
  }))().catch(function (a5) {
    $.log(a5);
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