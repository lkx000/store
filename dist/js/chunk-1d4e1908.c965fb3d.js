(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-1d4e1908"],
    {
        "2fdb": function(e, t, s) {
            "use strict";
            var a = s("5ca1"),
                i = s("d2c8"),
                n = "includes";
            a(a.P + a.F * s("5147")(n), "String", {
                includes: function(e) {
                    return !!~i(this, e, n).indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
                }
            });
        },
        "3b8d": function(e, t, s) {
            "use strict";
            s.d(t, "a", function() {
                return r;
            });
            var a = s("795b"),
                i = s.n(a);
            function n(e, t, s, a, n, r, o) {
                try {
                    var l = e[r](o),
                        d = l.value;
                } catch (c) {
                    return void s(c);
                }
                l.done ? t(d) : i.a.resolve(d).then(a, n);
            }
            function r(e) {
                return function() {
                    var t = this,
                        s = arguments;
                    return new i.a(function(a, i) {
                        var r = e.apply(t, s);
                        function o(e) {
                            n(r, a, i, o, l, "next", e);
                        }
                        function l(e) {
                            n(r, a, i, o, l, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
        },
        5147: function(e, t, s) {
            var a = s("2b4c")("match");
            e.exports = function(e) {
                var t = /./;
                try {
                    "/./"[e](t);
                } catch (s) {
                    try {
                        return (t[a] = !1), !"/./"[e](t);
                    } catch (i) {}
                }
                return !0;
            };
        },
        5430: function(e, t, s) {
            "use strict";
            var a = s("8dd9"),
                i = s.n(a);
            i.a;
        },
        6762: function(e, t, s) {
            "use strict";
            var a = s("5ca1"),
                i = s("c366")(!0);
            a(a.P, "Array", {
                includes: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                }
            }),
                s("9c6c")("includes");
        },
        "8dd9": function(e, t, s) {},
        "96cf": function(e, t) {
            !(function(t) {
                "use strict";
                var s,
                    a = Object.prototype,
                    i = a.hasOwnProperty,
                    n = "function" === typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    l = n.toStringTag || "@@toStringTag",
                    d = "object" === typeof e,
                    c = t.regeneratorRuntime;
                if (c) d && (e.exports = c);
                else {
                    (c = t.regeneratorRuntime = d ? e.exports : {}), (c.wrap = y);
                    var p = "suspendedStart",
                        u = "suspendedYield",
                        h = "executing",
                        m = "completed",
                        f = {},
                        g = {};
                    g[r] = function() {
                        return this;
                    };
                    var v = Object.getPrototypeOf,
                        b = v && v(v(I([])));
                    b && b !== a && i.call(b, r) && (g = b);
                    var w = (C.prototype = E.prototype = Object.create(g));
                    (T.prototype = w.constructor = C),
                        (C.constructor = T),
                        (C[l] = T.displayName = "GeneratorFunction"),
                        (c.isGeneratorFunction = function(e) {
                            var t = "function" === typeof e && e.constructor;
                            return !!t && (t === T || "GeneratorFunction" === (t.displayName || t.name));
                        }),
                        (c.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, C) : ((e.__proto__ = C), l in e || (e[l] = "GeneratorFunction")), (e.prototype = Object.create(w)), e;
                        }),
                        (c.awrap = function(e) {
                            return { __await: e };
                        }),
                        S($.prototype),
                        ($.prototype[o] = function() {
                            return this;
                        }),
                        (c.AsyncIterator = $),
                        (c.async = function(e, t, s, a) {
                            var i = new $(y(e, t, s, a));
                            return c.isGeneratorFunction(t)
                                ? i
                                : i.next().then(function(e) {
                                      return e.done ? e.value : i.next();
                                  });
                        }),
                        S(w),
                        (w[l] = "Generator"),
                        (w[r] = function() {
                            return this;
                        }),
                        (w.toString = function() {
                            return "[object Generator]";
                        }),
                        (c.keys = function(e) {
                            var t = [];
                            for (var s in e) t.push(s);
                            return (
                                t.reverse(),
                                function s() {
                                    while (t.length) {
                                        var a = t.pop();
                                        if (a in e) return (s.value = a), (s.done = !1), s;
                                    }
                                    return (s.done = !0), s;
                                }
                            );
                        }),
                        (c.values = I),
                        (L.prototype = {
                            constructor: L,
                            reset: function(e) {
                                if (
                                    ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = s),
                                    (this.done = !1),
                                    (this.delegate = null),
                                    (this.method = "next"),
                                    (this.arg = s),
                                    this.tryEntries.forEach(z),
                                    !e)
                                )
                                    for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = s);
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0],
                                    t = e.completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval;
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var t = this;
                                function a(a, i) {
                                    return (o.type = "throw"), (o.arg = e), (t.next = a), i && ((t.method = "next"), (t.arg = s)), !!i;
                                }
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var r = this.tryEntries[n],
                                        o = r.completion;
                                    if ("root" === r.tryLoc) return a("end");
                                    if (r.tryLoc <= this.prev) {
                                        var l = i.call(r, "catchLoc"),
                                            d = i.call(r, "finallyLoc");
                                        if (l && d) {
                                            if (this.prev < r.catchLoc) return a(r.catchLoc, !0);
                                            if (this.prev < r.finallyLoc) return a(r.finallyLoc);
                                        } else if (l) {
                                            if (this.prev < r.catchLoc) return a(r.catchLoc, !0);
                                        } else {
                                            if (!d) throw new Error("try statement without catch or finally");
                                            if (this.prev < r.finallyLoc) return a(r.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                                    var a = this.tryEntries[s];
                                    if (a.tryLoc <= this.prev && i.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                        var n = a;
                                        break;
                                    }
                                }
                                n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                                var r = n ? n.completion : {};
                                return (r.type = e), (r.arg = t), n ? ((this.method = "next"), (this.next = n.finallyLoc), f) : this.complete(r);
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return (
                                    "break" === e.type || "continue" === e.type
                                        ? (this.next = e.arg)
                                        : "return" === e.type
                                        ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                        : "normal" === e.type && t && (this.next = t),
                                    f
                                );
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var s = this.tryEntries[t];
                                    if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), z(s), f;
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var s = this.tryEntries[t];
                                    if (s.tryLoc === e) {
                                        var a = s.completion;
                                        if ("throw" === a.type) {
                                            var i = a.arg;
                                            z(s);
                                        }
                                        return i;
                                    }
                                }
                                throw new Error("illegal catch attempt");
                            },
                            delegateYield: function(e, t, a) {
                                return (this.delegate = { iterator: I(e), resultName: t, nextLoc: a }), "next" === this.method && (this.arg = s), f;
                            }
                        });
                }
                function y(e, t, s, a) {
                    var i = t && t.prototype instanceof E ? t : E,
                        n = Object.create(i.prototype),
                        r = new L(a || []);
                    return (n._invoke = M(e, s, r)), n;
                }
                function x(e, t, s) {
                    try {
                        return { type: "normal", arg: e.call(t, s) };
                    } catch (a) {
                        return { type: "throw", arg: a };
                    }
                }
                function E() {}
                function T() {}
                function C() {}
                function S(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e);
                        };
                    });
                }
                function $(e) {
                    function t(s, a, n, r) {
                        var o = x(e[s], e, a);
                        if ("throw" !== o.type) {
                            var l = o.arg,
                                d = l.value;
                            return d && "object" === typeof d && i.call(d, "__await")
                                ? Promise.resolve(d.__await).then(
                                      function(e) {
                                          t("next", e, n, r);
                                      },
                                      function(e) {
                                          t("throw", e, n, r);
                                      }
                                  )
                                : Promise.resolve(d).then(
                                      function(e) {
                                          (l.value = e), n(l);
                                      },
                                      function(e) {
                                          return t("throw", e, n, r);
                                      }
                                  );
                        }
                        r(o.arg);
                    }
                    var s;
                    function a(e, a) {
                        function i() {
                            return new Promise(function(s, i) {
                                t(e, a, s, i);
                            });
                        }
                        return (s = s ? s.then(i, i) : i());
                    }
                    this._invoke = a;
                }
                function M(e, t, s) {
                    var a = p;
                    return function(i, n) {
                        if (a === h) throw new Error("Generator is already running");
                        if (a === m) {
                            if ("throw" === i) throw n;
                            return D();
                        }
                        (s.method = i), (s.arg = n);
                        while (1) {
                            var r = s.delegate;
                            if (r) {
                                var o = k(r, s);
                                if (o) {
                                    if (o === f) continue;
                                    return o;
                                }
                            }
                            if ("next" === s.method) s.sent = s._sent = s.arg;
                            else if ("throw" === s.method) {
                                if (a === p) throw ((a = m), s.arg);
                                s.dispatchException(s.arg);
                            } else "return" === s.method && s.abrupt("return", s.arg);
                            a = h;
                            var l = x(e, t, s);
                            if ("normal" === l.type) {
                                if (((a = s.done ? m : u), l.arg === f)) continue;
                                return { value: l.arg, done: s.done };
                            }
                            "throw" === l.type && ((a = m), (s.method = "throw"), (s.arg = l.arg));
                        }
                    };
                }
                function k(e, t) {
                    var a = e.iterator[t.method];
                    if (a === s) {
                        if (((t.delegate = null), "throw" === t.method)) {
                            if (e.iterator.return && ((t.method = "return"), (t.arg = s), k(e, t), "throw" === t.method)) return f;
                            (t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
                        }
                        return f;
                    }
                    var i = x(a, e.iterator, t.arg);
                    if ("throw" === i.type) return (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), f;
                    var n = i.arg;
                    return n
                        ? n.done
                            ? ((t[e.resultName] = n.value), (t.next = e.nextLoc), "return" !== t.method && ((t.method = "next"), (t.arg = s)), (t.delegate = null), f)
                            : n
                        : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), f);
                }
                function P(e) {
                    var t = { tryLoc: e[0] };
                    1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
                }
                function z(e) {
                    var t = e.completion || {};
                    (t.type = "normal"), delete t.arg, (e.completion = t);
                }
                function L(e) {
                    (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(P, this), this.reset(!0);
                }
                function I(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" === typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                n = function t() {
                                    while (++a < e.length) if (i.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                                    return (t.value = s), (t.done = !0), t;
                                };
                            return (n.next = n);
                        }
                    }
                    return { next: D };
                }
                function D() {
                    return { value: s, done: !0 };
                }
            })(
                (function() {
                    return this || ("object" === typeof self && self);
                })() || Function("return this")()
            );
        },
        aae3: function(e, t, s) {
            var a = s("d3f4"),
                i = s("2d95"),
                n = s("2b4c")("match");
            e.exports = function(e) {
                var t;
                return a(e) && (void 0 !== (t = e[n]) ? !!t : "RegExp" == i(e));
            };
        },
        bb51: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        "div",
                        { staticClass: "page" },
                        [
                            s("message", { ref: "message" }),
                            s("headers", { attrs: { tabname: e.$t("m.HeaderIndex") } }),
                            s("div", { staticClass: "langBox", on: { click: e.changeLang } }, [e._v(e._s(e.$t("m.local")))]),
                            s("transition", { attrs: { name: e.slidename } }, [
                                s("div", { directives: [{ name: "show", rawName: "v-show", value: e.mainarea, expression: "mainarea" }], staticClass: "container" }, [
                                    s("div", { staticClass: "swiper-container" }, [
                                        s(
                                            "div",
                                            { staticClass: "swiper-wrapper" },
                                            e._l(e.bannerList, function(e, t) {
                                                return s("div", { key: t, staticClass: "swiper-slide" }, [s("img", { attrs: { src: e.img } })]);
                                            }),
                                            0
                                        ),
                                        s("div", { staticClass: "swiper-pagination" })
                                    ]),
                                    s(
                                        "div",
                                        { staticClass: "content" },
                                        e._l(e.productList, function(t, a) {
                                            return s("div", { key: a, staticClass: "floorItem" }, [
                                                s(
                                                    "div",
                                                    {
                                                        staticClass: "productTop flex-between",
                                                        on: {
                                                            click: function(t) {
                                                                e.onCategory(a);
                                                            }
                                                        }
                                                    },
                                                    [
                                                        s("p", { staticClass: "productTop-text" }, [e._v(e._s(t.Category.TopText))]),
                                                        s("div", { staticClass: "flex-align-center" }, [
                                                            s("p", { staticClass: "productTop-text" }, [e._v(e._s(a + 1) + "F")]),
                                                            s("i", { staticClass: "arrowImg" })
                                                        ])
                                                    ]
                                                ),
                                                s("div", { staticClass: "productContent" }, [
                                                    s(
                                                        "div",
                                                        { ref: "div", refInFor: !0, staticClass: "productBox flex" },
                                                        e._l(t.SalesProduct, function(t, a) {
                                                            return s("div", { key: a, staticClass: "productItem" }, [
                                                                s("div", { staticClass: "itemBox" }, [
                                                                    s(
                                                                        "div",
                                                                        {
                                                                            on: {
                                                                                click: function(s) {
                                                                                    e.onGoodsDetail(t, t.CategoryId);
                                                                                }
                                                                            }
                                                                        },
                                                                        [
                                                                            s("img", {
                                                                                directives: [{ name: "lazy", rawName: "v-lazy", value: t.GoodsImage, expression: "goodsItem.GoodsImage" }],
                                                                                staticClass: "itemImg"
                                                                            }),
                                                                            s("div", [s("p", { staticClass: "goods-name text-ellipsis" }, [e._v(e._s(t.GoodsName))])])
                                                                        ]
                                                                    ),
                                                                    s("div", { staticClass: "addCartBox flex-between" }, [
                                                                        s("p", [s("span", { staticClass: "goods-price" }, [e._v("¥ " + e._s(t.GoodsPrice))])]),
                                                                        s("i", {
                                                                            directives: [{ name: "show", rawName: "v-show", value: !t.shopAddCart, expression: "!goodsItem.shopAddCart" }],
                                                                            staticClass: "goods_cart",
                                                                            on: {
                                                                                click: function(s) {
                                                                                    e.onAddCart(t, t.GoodsName);
                                                                                }
                                                                            }
                                                                        }),
                                                                        s("i", {
                                                                            directives: [{ name: "show", rawName: "v-show", value: t.shopAddCart, expression: "goodsItem.shopAddCart" }],
                                                                            staticClass: "goods_cart_select",
                                                                            on: {
                                                                                click: function(s) {
                                                                                    e.onAddCart(t.GoodsName);
                                                                                }
                                                                            }
                                                                        })
                                                                    ])
                                                                ])
                                                            ]);
                                                        }),
                                                        0
                                                    )
                                                ])
                                            ]);
                                        }),
                                        0
                                    )
                                ])
                            ]),
                            s("footers", { ref: "footer", attrs: { urlRouter: e.$route.path, cartnum: e.cartLength } })
                        ],
                        1
                    );
                },
                i = [],
                n = (s("2fdb"), s("96cf"), s("3b8d")),
                r = (s("6762"),
                "undefined" === typeof document
                    ? {
                          body: {},
                          addEventListener: function() {},
                          removeEventListener: function() {},
                          activeElement: { blur: function() {}, nodeName: "" },
                          querySelector: function() {
                              return null;
                          },
                          querySelectorAll: function() {
                              return [];
                          },
                          getElementById: function() {
                              return null;
                          },
                          createEvent: function() {
                              return { initEvent: function() {} };
                          },
                          createElement: function() {
                              return {
                                  children: [],
                                  childNodes: [],
                                  style: {},
                                  setAttribute: function() {},
                                  getElementsByTagName: function() {
                                      return [];
                                  }
                              };
                          },
                          location: { hash: "" }
                      }
                    : document),
                o =
                    "undefined" === typeof window
                        ? {
                              document: r,
                              navigator: { userAgent: "" },
                              location: {},
                              history: {},
                              CustomEvent: function() {
                                  return this;
                              },
                              addEventListener: function() {},
                              removeEventListener: function() {},
                              getComputedStyle: function() {
                                  return {
                                      getPropertyValue: function() {
                                          return "";
                                      }
                                  };
                              },
                              Image: function() {},
                              Date: function() {},
                              screen: {},
                              setTimeout: function() {},
                              clearTimeout: function() {}
                          }
                        : window;
            class l {
                constructor(e) {
                    const t = this;
                    for (let s = 0; s < e.length; s += 1) t[s] = e[s];
                    return (t.length = e.length), this;
                }
            }
            function d(e, t) {
                const s = [];
                let a = 0;
                if (e && !t && e instanceof l) return e;
                if (e)
                    if ("string" === typeof e) {
                        let i, n;
                        const o = e.trim();
                        if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                            let e = "div";
                            for (
                                0 === o.indexOf("<li") && (e = "ul"),
                                    0 === o.indexOf("<tr") && (e = "tbody"),
                                    (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (e = "tr"),
                                    0 === o.indexOf("<tbody") && (e = "table"),
                                    0 === o.indexOf("<option") && (e = "select"),
                                    n = r.createElement(e),
                                    n.innerHTML = o,
                                    a = 0;
                                a < n.childNodes.length;
                                a += 1
                            )
                                s.push(n.childNodes[a]);
                        } else
                            for (i = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || r).querySelectorAll(e.trim()) : [r.getElementById(e.trim().split("#")[1])], a = 0; a < i.length; a += 1)
                                i[a] && s.push(i[a]);
                    } else if (e.nodeType || e === o || e === r) s.push(e);
                    else if (e.length > 0 && e[0].nodeType) for (a = 0; a < e.length; a += 1) s.push(e[a]);
                return new l(s);
            }
            function c(e) {
                const t = [];
                for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
                return t;
            }
            function p(e) {
                if ("undefined" === typeof e) return this;
                const t = e.split(" ");
                for (let s = 0; s < t.length; s += 1)
                    for (let e = 0; e < this.length; e += 1) "undefined" !== typeof this[e] && "undefined" !== typeof this[e].classList && this[e].classList.add(t[s]);
                return this;
            }
            function u(e) {
                const t = e.split(" ");
                for (let s = 0; s < t.length; s += 1)
                    for (let e = 0; e < this.length; e += 1) "undefined" !== typeof this[e] && "undefined" !== typeof this[e].classList && this[e].classList.remove(t[s]);
                return this;
            }
            function h(e) {
                return !!this[0] && this[0].classList.contains(e);
            }
            function m(e) {
                const t = e.split(" ");
                for (let s = 0; s < t.length; s += 1)
                    for (let e = 0; e < this.length; e += 1) "undefined" !== typeof this[e] && "undefined" !== typeof this[e].classList && this[e].classList.toggle(t[s]);
                return this;
            }
            function f(e, t) {
                if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (let s = 0; s < this.length; s += 1)
                    if (2 === arguments.length) this[s].setAttribute(e, t);
                    else for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
                return this;
            }
            function g(e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this;
            }
            function v(e, t) {
                let s;
                if ("undefined" !== typeof t) {
                    for (let a = 0; a < this.length; a += 1) (s = this[a]), s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), (s.dom7ElementDataStorage[e] = t);
                    return this;
                }
                if (((s = this[0]), s)) {
                    if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage) return s.dom7ElementDataStorage[e];
                    const t = s.getAttribute(`data-${e}`);
                    return t || void 0;
                }
            }
            function b(e) {
                for (let t = 0; t < this.length; t += 1) {
                    const s = this[t].style;
                    (s.webkitTransform = e), (s.transform = e);
                }
                return this;
            }
            function w(e) {
                "string" !== typeof e && (e = `${e}ms`);
                for (let t = 0; t < this.length; t += 1) {
                    const s = this[t].style;
                    (s.webkitTransitionDuration = e), (s.transitionDuration = e);
                }
                return this;
            }
            function y(...e) {
                let [t, s, a, i] = e;
                function n(e) {
                    const t = e.target;
                    if (!t) return;
                    const i = e.target.dom7EventData || [];
                    if ((i.indexOf(e) < 0 && i.unshift(e), d(t).is(s))) a.apply(t, i);
                    else {
                        const e = d(t).parents();
                        for (let t = 0; t < e.length; t += 1) d(e[t]).is(s) && a.apply(e[t], i);
                    }
                }
                function r(e) {
                    const t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
                }
                "function" === typeof e[1] && (([t, a, i] = e), (s = void 0)), i || (i = !1);
                const o = t.split(" ");
                let l;
                for (let d = 0; d < this.length; d += 1) {
                    const e = this[d];
                    if (s)
                        for (l = 0; l < o.length; l += 1) {
                            const t = o[l];
                            e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                                e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                                e.dom7LiveListeners[t].push({ listener: a, proxyListener: n }),
                                e.addEventListener(t, n, i);
                        }
                    else
                        for (l = 0; l < o.length; l += 1) {
                            const t = o[l];
                            e.dom7Listeners || (e.dom7Listeners = {}),
                                e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                                e.dom7Listeners[t].push({ listener: a, proxyListener: r }),
                                e.addEventListener(t, r, i);
                        }
                }
                return this;
            }
            function x(...e) {
                let [t, s, a, i] = e;
                "function" === typeof e[1] && (([t, a, i] = e), (s = void 0)), i || (i = !1);
                const n = t.split(" ");
                for (let r = 0; r < n.length; r += 1) {
                    const e = n[r];
                    for (let t = 0; t < this.length; t += 1) {
                        const n = this[t];
                        let r;
                        if ((!s && n.dom7Listeners ? (r = n.dom7Listeners[e]) : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[e]), r && r.length))
                            for (let t = r.length - 1; t >= 0; t -= 1) {
                                const s = r[t];
                                a && s.listener === a ? (n.removeEventListener(e, s.proxyListener, i), r.splice(t, 1)) : a || (n.removeEventListener(e, s.proxyListener, i), r.splice(t, 1));
                            }
                    }
                }
                return this;
            }
            function E(...e) {
                const t = e[0].split(" "),
                    s = e[1];
                for (let i = 0; i < t.length; i += 1) {
                    const n = t[i];
                    for (let t = 0; t < this.length; t += 1) {
                        const i = this[t];
                        let l;
                        try {
                            l = new o.CustomEvent(n, { detail: s, bubbles: !0, cancelable: !0 });
                        } catch (a) {
                            (l = r.createEvent("Event")), l.initEvent(n, !0, !0), (l.detail = s);
                        }
                        (i.dom7EventData = e.filter((e, t) => t > 0)), i.dispatchEvent(l), (i.dom7EventData = []), delete i.dom7EventData;
                    }
                }
                return this;
            }
            function T(e) {
                const t = ["webkitTransitionEnd", "transitionend"],
                    s = this;
                let a;
                function i(n) {
                    if (n.target === this) for (e.call(this, n), a = 0; a < t.length; a += 1) s.off(t[a], i);
                }
                if (e) for (a = 0; a < t.length; a += 1) s.on(t[a], i);
                return this;
            }
            function C(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            }
            function S(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            }
            function $() {
                if (this.length > 0) {
                    const e = this[0],
                        t = e.getBoundingClientRect(),
                        s = r.body,
                        a = e.clientTop || s.clientTop || 0,
                        i = e.clientLeft || s.clientLeft || 0,
                        n = e === o ? o.scrollY : e.scrollTop,
                        l = e === o ? o.scrollX : e.scrollLeft;
                    return { top: t.top + n - a, left: t.left + l - i };
                }
                return null;
            }
            function M() {
                return this[0] ? o.getComputedStyle(this[0], null) : {};
            }
            function k(e, t) {
                let s;
                if (1 === arguments.length) {
                    if ("string" !== typeof e) {
                        for (s = 0; s < this.length; s += 1) for (let t in e) this[s].style[t] = e[t];
                        return this;
                    }
                    if (this[0]) return o.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && "string" === typeof e) {
                    for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                    return this;
                }
                return this;
            }
            function P(e) {
                if (!e) return this;
                for (let t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
                return this;
            }
            function z(e) {
                if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : void 0;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            }
            function L(e) {
                if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this;
            }
            function I(e) {
                const t = this[0];
                let s, a;
                if (!t || "undefined" === typeof e) return !1;
                if ("string" === typeof e) {
                    if (t.matches) return t.matches(e);
                    if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                    if (t.msMatchesSelector) return t.msMatchesSelector(e);
                    for (s = d(e), a = 0; a < s.length; a += 1) if (s[a] === t) return !0;
                    return !1;
                }
                if (e === r) return t === r;
                if (e === o) return t === o;
                if (e.nodeType || e instanceof l) {
                    for (s = e.nodeType ? [e] : e, a = 0; a < s.length; a += 1) if (s[a] === t) return !0;
                    return !1;
                }
                return !1;
            }
            function D() {
                let e,
                    t = this[0];
                if (t) {
                    e = 0;
                    while (null !== (t = t.previousSibling)) 1 === t.nodeType && (e += 1);
                    return e;
                }
            }
            function O(e) {
                if ("undefined" === typeof e) return this;
                const t = this.length;
                let s;
                return e > t - 1 ? new l([]) : e < 0 ? ((s = t + e), new l(s < 0 ? [] : [this[s]])) : new l([this[e]]);
            }
            function A(...e) {
                let t;
                for (let s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" === typeof t) {
                            const s = r.createElement("div");
                            s.innerHTML = t;
                            while (s.firstChild) this[e].appendChild(s.firstChild);
                        } else if (t instanceof l) for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                        else this[e].appendChild(t);
                }
                return this;
            }
            function N(e) {
                let t, s;
                for (t = 0; t < this.length; t += 1)
                    if ("string" === typeof e) {
                        const a = r.createElement("div");
                        for (a.innerHTML = e, s = a.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(a.childNodes[s], this[t].childNodes[0]);
                    } else if (e instanceof l) for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                return this;
            }
            function G(e) {
                return this.length > 0
                    ? e
                        ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
                            ? new l([this[0].nextElementSibling])
                            : new l([])
                        : this[0].nextElementSibling
                        ? new l([this[0].nextElementSibling])
                        : new l([])
                    : new l([]);
            }
            function B(e) {
                const t = [];
                let s = this[0];
                if (!s) return new l([]);
                while (s.nextElementSibling) {
                    const a = s.nextElementSibling;
                    e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
                }
                return new l(t);
            }
            function H(e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e
                        ? t.previousElementSibling && d(t.previousElementSibling).is(e)
                            ? new l([t.previousElementSibling])
                            : new l([])
                        : t.previousElementSibling
                        ? new l([t.previousElementSibling])
                        : new l([]);
                }
                return new l([]);
            }
            function X(e) {
                const t = [];
                let s = this[0];
                if (!s) return new l([]);
                while (s.previousElementSibling) {
                    const a = s.previousElementSibling;
                    e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
                }
                return new l(t);
            }
            function Y(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                return d(c(t));
            }
            function V(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    let a = this[s].parentNode;
                    while (a) e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
                }
                return d(c(t));
            }
            function F(e) {
                let t = this;
                return "undefined" === typeof e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
            }
            function R(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const a = this[s].querySelectorAll(e);
                    for (let e = 0; e < a.length; e += 1) t.push(a[e]);
                }
                return new l(t);
            }
            function q(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const a = this[s].childNodes;
                    for (let s = 0; s < a.length; s += 1) e ? 1 === a[s].nodeType && d(a[s]).is(e) && t.push(a[s]) : 1 === a[s].nodeType && t.push(a[s]);
                }
                return new l(c(t));
            }
            function W() {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            }
            function j(...e) {
                const t = this;
                let s, a;
                for (s = 0; s < e.length; s += 1) {
                    const i = d(e[s]);
                    for (a = 0; a < i.length; a += 1) (t[t.length] = i[a]), (t.length += 1);
                }
                return t;
            }
            (d.fn = l.prototype), (d.Class = l), (d.Dom7 = l);
            "resize scroll".split(" ");
            const _ = {
                addClass: p,
                removeClass: u,
                hasClass: h,
                toggleClass: m,
                attr: f,
                removeAttr: g,
                data: v,
                transform: b,
                transition: w,
                on: y,
                off: x,
                trigger: E,
                transitionEnd: T,
                outerWidth: C,
                outerHeight: S,
                offset: $,
                css: k,
                each: P,
                html: z,
                text: L,
                is: I,
                index: D,
                eq: O,
                append: A,
                prepend: N,
                next: G,
                nextAll: B,
                prev: H,
                prevAll: X,
                parent: Y,
                parents: V,
                closest: F,
                find: R,
                children: q,
                remove: W,
                add: j,
                styles: M
            };
            Object.keys(_).forEach(e => {
                d.fn[e] = _[e];
            });
            const U = {
                    deleteProps(e) {
                        const t = e;
                        Object.keys(t).forEach(e => {
                            try {
                                t[e] = null;
                            } catch (s) {}
                            try {
                                delete t[e];
                            } catch (s) {}
                        });
                    },
                    nextTick(e, t = 0) {
                        return setTimeout(e, t);
                    },
                    now() {
                        return Date.now();
                    },
                    getTranslate(e, t = "x") {
                        let s, a, i;
                        const n = o.getComputedStyle(e, null);
                        return (
                            o.WebKitCSSMatrix
                                ? ((a = n.transform || n.webkitTransform),
                                  a.split(",").length > 6 &&
                                      (a = a
                                          .split(", ")
                                          .map(e => e.replace(",", "."))
                                          .join(", ")),
                                  (i = new o.WebKitCSSMatrix("none" === a ? "" : a)))
                                : ((i = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
                                  (s = i.toString().split(","))),
                            "x" === t && (a = o.WebKitCSSMatrix ? i.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
                            "y" === t && (a = o.WebKitCSSMatrix ? i.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
                            a || 0
                        );
                    },
                    parseUrlQuery(e) {
                        const t = {};
                        let s,
                            a,
                            i,
                            n,
                            r = e || o.location.href;
                        if ("string" === typeof r && r.length)
                            for (r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "", a = r.split("&").filter(e => "" !== e), n = a.length, s = 0; s < n; s += 1)
                                (i = a[s].replace(/#\S+/g, "").split("=")), (t[decodeURIComponent(i[0])] = "undefined" === typeof i[1] ? void 0 : decodeURIComponent(i[1]) || "");
                        return t;
                    },
                    isObject(e) {
                        return "object" === typeof e && null !== e && e.constructor && e.constructor === Object;
                    },
                    extend(...e) {
                        const t = Object(e[0]);
                        for (let s = 1; s < e.length; s += 1) {
                            const a = e[s];
                            if (void 0 !== a && null !== a) {
                                const e = Object.keys(Object(a));
                                for (let s = 0, i = e.length; s < i; s += 1) {
                                    const i = e[s],
                                        n = Object.getOwnPropertyDescriptor(a, i);
                                    void 0 !== n &&
                                        n.enumerable &&
                                        (U.isObject(t[i]) && U.isObject(a[i]) ? U.extend(t[i], a[i]) : !U.isObject(t[i]) && U.isObject(a[i]) ? ((t[i] = {}), U.extend(t[i], a[i])) : (t[i] = a[i]));
                                }
                            }
                        }
                        return t;
                    }
                },
                K = (function() {
                    const e = r.createElement("div");
                    return {
                        touch:
                            (o.Modernizr && !0 === o.Modernizr.touch) ||
                            (function() {
                                return !!(o.navigator.maxTouchPoints > 0 || "ontouchstart" in o || (o.DocumentTouch && r instanceof o.DocumentTouch));
                            })(),
                        pointerEvents: !!(o.navigator.pointerEnabled || o.PointerEvent || "maxTouchPoints" in o.navigator),
                        prefixedPointerEvents: !!o.navigator.msPointerEnabled,
                        transition: (function() {
                            const t = e.style;
                            return "transition" in t || "webkitTransition" in t || "MozTransition" in t;
                        })(),
                        transforms3d:
                            (o.Modernizr && !0 === o.Modernizr.csstransforms3d) ||
                            (function() {
                                const t = e.style;
                                return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t;
                            })(),
                        flexbox: (function() {
                            const t = e.style,
                                s = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                                    " "
                                );
                            for (let e = 0; e < s.length; e += 1) if (s[e] in t) return !0;
                            return !1;
                        })(),
                        observer: (function() {
                            return "MutationObserver" in o || "WebkitMutationObserver" in o;
                        })(),
                        passiveListener: (function() {
                            let e = !1;
                            try {
                                const s = Object.defineProperty({}, "passive", {
                                    get() {
                                        e = !0;
                                    }
                                });
                                o.addEventListener("testPassiveListener", null, s);
                            } catch (t) {}
                            return e;
                        })(),
                        gestures: (function() {
                            return "ongesturestart" in o;
                        })()
                    };
                })();
            class J {
                constructor(e = {}) {
                    const t = this;
                    (t.params = e),
                        (t.eventsListeners = {}),
                        t.params &&
                            t.params.on &&
                            Object.keys(t.params.on).forEach(e => {
                                t.on(e, t.params.on[e]);
                            });
                }
                on(e, t, s) {
                    const a = this;
                    if ("function" !== typeof t) return a;
                    const i = s ? "unshift" : "push";
                    return (
                        e.split(" ").forEach(e => {
                            a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
                        }),
                        a
                    );
                }
                once(e, t, s) {
                    const a = this;
                    if ("function" !== typeof t) return a;
                    function i(...s) {
                        t.apply(a, s), a.off(e, i);
                    }
                    return a.on(e, i, s);
                }
                off(e, t) {
                    const s = this;
                    return s.eventsListeners
                        ? (e.split(" ").forEach(e => {
                              "undefined" === typeof t
                                  ? (s.eventsListeners[e] = [])
                                  : s.eventsListeners[e] &&
                                    s.eventsListeners[e].length &&
                                    s.eventsListeners[e].forEach((a, i) => {
                                        a === t && s.eventsListeners[e].splice(i, 1);
                                    });
                          }),
                          s)
                        : s;
                }
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners) return t;
                    let s, a, i;
                    "string" === typeof e[0] || Array.isArray(e[0]) ? ((s = e[0]), (a = e.slice(1, e.length)), (i = t)) : ((s = e[0].events), (a = e[0].data), (i = e[0].context || t));
                    const n = Array.isArray(s) ? s : s.split(" ");
                    return (
                        n.forEach(e => {
                            if (t.eventsListeners && t.eventsListeners[e]) {
                                const s = [];
                                t.eventsListeners[e].forEach(e => {
                                    s.push(e);
                                }),
                                    s.forEach(e => {
                                        e.apply(i, a);
                                    });
                            }
                        }),
                        t
                    );
                }
                useModulesParams(e) {
                    const t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(s => {
                            const a = t.modules[s];
                            a.params && U.extend(e, a.params);
                        });
                }
                useModules(e = {}) {
                    const t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach(s => {
                            const a = t.modules[s],
                                i = e[s] || {};
                            a.instance &&
                                Object.keys(a.instance).forEach(e => {
                                    const s = a.instance[e];
                                    t[e] = "function" === typeof s ? s.bind(t) : s;
                                }),
                                a.on &&
                                    t.on &&
                                    Object.keys(a.on).forEach(e => {
                                        t.on(e, a.on[e]);
                                    }),
                                a.create && a.create.bind(t)(i);
                        });
                }
                static set components(e) {
                    const t = this;
                    t.use && t.use(e);
                }
                static installModule(e, ...t) {
                    const s = this;
                    s.prototype.modules || (s.prototype.modules = {});
                    const a = e.name || `${Object.keys(s.prototype.modules).length}_${U.now()}`;
                    return (
                        (s.prototype.modules[a] = e),
                        e.proto &&
                            Object.keys(e.proto).forEach(t => {
                                s.prototype[t] = e.proto[t];
                            }),
                        e.static &&
                            Object.keys(e.static).forEach(t => {
                                s[t] = e.static[t];
                            }),
                        e.install && e.install.apply(s, t),
                        s
                    );
                }
                static use(e, ...t) {
                    const s = this;
                    return Array.isArray(e) ? (e.forEach(e => s.installModule(e)), s) : s.installModule(e, ...t);
                }
            }
            function Z() {
                const e = this;
                let t, s;
                const a = e.$el;
                (t = "undefined" !== typeof e.params.width ? e.params.width : a[0].clientWidth),
                    (s = "undefined" !== typeof e.params.height ? e.params.height : a[0].clientHeight),
                    (0 === t && e.isHorizontal()) ||
                        (0 === s && e.isVertical()) ||
                        ((t = t - parseInt(a.css("padding-left"), 10) - parseInt(a.css("padding-right"), 10)),
                        (s = s - parseInt(a.css("padding-top"), 10) - parseInt(a.css("padding-bottom"), 10)),
                        U.extend(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
            }
            function Q() {
                const e = this,
                    t = e.params,
                    { $wrapperEl: s, size: a, rtlTranslate: i, wrongRTL: n } = e,
                    r = e.virtual && t.virtual.enabled,
                    l = r ? e.virtual.slides.length : e.slides.length,
                    d = s.children(`.${e.params.slideClass}`),
                    c = r ? e.virtual.slides.length : d.length;
                let p = [];
                const u = [],
                    h = [];
                let m = t.slidesOffsetBefore;
                "function" === typeof m && (m = t.slidesOffsetBefore.call(e));
                let f = t.slidesOffsetAfter;
                "function" === typeof f && (f = t.slidesOffsetAfter.call(e));
                const g = e.snapGrid.length,
                    v = e.snapGrid.length;
                let b,
                    w,
                    y = t.spaceBetween,
                    x = -m,
                    E = 0,
                    T = 0;
                if ("undefined" === typeof a) return;
                "string" === typeof y && y.indexOf("%") >= 0 && (y = (parseFloat(y.replace("%", "")) / 100) * a),
                    (e.virtualSize = -y),
                    i ? d.css({ marginLeft: "", marginTop: "" }) : d.css({ marginRight: "", marginBottom: "" }),
                    t.slidesPerColumn > 1 &&
                        ((b = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
                        "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (b = Math.max(b, t.slidesPerView * t.slidesPerColumn)));
                const C = t.slidesPerColumn,
                    S = b / C,
                    $ = Math.floor(c / t.slidesPerColumn);
                for (let k = 0; k < c; k += 1) {
                    w = 0;
                    const s = d.eq(k);
                    if (t.slidesPerColumn > 1) {
                        let a, i, n;
                        "column" === t.slidesPerColumnFill
                            ? ((i = Math.floor(k / C)),
                              (n = k - i * C),
                              (i > $ || (i === $ && n === C - 1)) && ((n += 1), n >= C && ((n = 0), (i += 1))),
                              (a = i + (n * b) / C),
                              s.css({ "-webkit-box-ordinal-group": a, "-moz-box-ordinal-group": a, "-ms-flex-order": a, "-webkit-order": a, order: a }))
                            : ((n = Math.floor(k / S)), (i = k - n * S)),
                            s
                                .css(`margin-${e.isHorizontal() ? "top" : "left"}`, 0 !== n && t.spaceBetween && `${t.spaceBetween}px`)
                                .attr("data-swiper-column", i)
                                .attr("data-swiper-row", n);
                    }
                    if ("none" !== s.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            const a = o.getComputedStyle(s[0], null),
                                i = s[0].style.transform,
                                n = s[0].style.webkitTransform;
                            if ((i && (s[0].style.transform = "none"), n && (s[0].style.webkitTransform = "none"), t.roundLengths)) w = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                const e = parseFloat(a.getPropertyValue("width")),
                                    t = parseFloat(a.getPropertyValue("padding-left")),
                                    s = parseFloat(a.getPropertyValue("padding-right")),
                                    i = parseFloat(a.getPropertyValue("margin-left")),
                                    n = parseFloat(a.getPropertyValue("margin-right")),
                                    r = a.getPropertyValue("box-sizing");
                                w = r && "border-box" === r ? e + i + n : e + t + s + i + n;
                            } else {
                                const e = parseFloat(a.getPropertyValue("height")),
                                    t = parseFloat(a.getPropertyValue("padding-top")),
                                    s = parseFloat(a.getPropertyValue("padding-bottom")),
                                    i = parseFloat(a.getPropertyValue("margin-top")),
                                    n = parseFloat(a.getPropertyValue("margin-bottom")),
                                    r = a.getPropertyValue("box-sizing");
                                w = r && "border-box" === r ? e + i + n : e + t + s + i + n;
                            }
                            i && (s[0].style.transform = i), n && (s[0].style.webkitTransform = n), t.roundLengths && (w = Math.floor(w));
                        } else
                            (w = (a - (t.slidesPerView - 1) * y) / t.slidesPerView),
                                t.roundLengths && (w = Math.floor(w)),
                                d[k] && (e.isHorizontal() ? (d[k].style.width = `${w}px`) : (d[k].style.height = `${w}px`));
                        d[k] && (d[k].swiperSlideSize = w),
                            h.push(w),
                            t.centeredSlides
                                ? ((x = x + w / 2 + E / 2 + y),
                                  0 === E && 0 !== k && (x = x - a / 2 - y),
                                  0 === k && (x = x - a / 2 - y),
                                  Math.abs(x) < 0.001 && (x = 0),
                                  t.roundLengths && (x = Math.floor(x)),
                                  T % t.slidesPerGroup === 0 && p.push(x),
                                  u.push(x))
                                : (t.roundLengths && (x = Math.floor(x)), T % t.slidesPerGroup === 0 && p.push(x), u.push(x), (x = x + w + y)),
                            (e.virtualSize += w + y),
                            (E = w),
                            (T += 1);
                    }
                }
                let M;
                if (
                    ((e.virtualSize = Math.max(e.virtualSize, a) + f),
                    i && n && ("slide" === t.effect || "coverflow" === t.effect) && s.css({ width: `${e.virtualSize + t.spaceBetween}px` }),
                    (K.flexbox && !t.setWrapperSize) || (e.isHorizontal() ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` }) : s.css({ height: `${e.virtualSize + t.spaceBetween}px` })),
                    t.slidesPerColumn > 1 &&
                        ((e.virtualSize = (w + t.spaceBetween) * b),
                        (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                        e.isHorizontal() ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` }) : s.css({ height: `${e.virtualSize + t.spaceBetween}px` }),
                        t.centeredSlides))
                ) {
                    M = [];
                    for (let s = 0; s < p.length; s += 1) {
                        let a = p[s];
                        t.roundLengths && (a = Math.floor(a)), p[s] < e.virtualSize + p[0] && M.push(a);
                    }
                    p = M;
                }
                if (!t.centeredSlides) {
                    M = [];
                    for (let s = 0; s < p.length; s += 1) {
                        let i = p[s];
                        t.roundLengths && (i = Math.floor(i)), p[s] <= e.virtualSize - a && M.push(i);
                    }
                    (p = M), Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a);
                }
                if (
                    (0 === p.length && (p = [0]),
                    0 !== t.spaceBetween && (e.isHorizontal() ? (i ? d.css({ marginLeft: `${y}px` }) : d.css({ marginRight: `${y}px` })) : d.css({ marginBottom: `${y}px` })),
                    t.centerInsufficientSlides)
                ) {
                    let e = 0;
                    if (
                        (h.forEach(s => {
                            e += s + (t.spaceBetween ? t.spaceBetween : 0);
                        }),
                        (e -= t.spaceBetween),
                        e < a)
                    ) {
                        const t = (a - e) / 2;
                        p.forEach((e, s) => {
                            p[s] = e - t;
                        }),
                            u.forEach((e, s) => {
                                u[s] = e + t;
                            });
                    }
                }
                U.extend(e, { slides: d, snapGrid: p, slidesGrid: u, slidesSizesGrid: h }),
                    c !== l && e.emit("slidesLengthChange"),
                    p.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                    u.length !== v && e.emit("slidesGridLengthChange"),
                    (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
            }
            function ee(e) {
                const t = this,
                    s = [];
                let a,
                    i = 0;
                if (("number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1))
                    for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                        const e = t.activeIndex + a;
                        if (e > t.slides.length) break;
                        s.push(t.slides.eq(e)[0]);
                    }
                else s.push(t.slides.eq(t.activeIndex)[0]);
                for (a = 0; a < s.length; a += 1)
                    if ("undefined" !== typeof s[a]) {
                        const e = s[a].offsetHeight;
                        i = e > i ? e : i;
                    }
                i && t.$wrapperEl.css("height", `${i}px`);
            }
            function te() {
                const e = this,
                    t = e.slides;
                for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
            }
            function se(e = (this && this.translate) || 0) {
                const t = this,
                    s = t.params,
                    { slides: a, rtlTranslate: i } = t;
                if (0 === a.length) return;
                "undefined" === typeof a[0].swiperSlideOffset && t.updateSlidesOffset();
                let n = -e;
                i && (n = e), a.removeClass(s.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
                for (let r = 0; r < a.length; r += 1) {
                    const e = a[r],
                        o = (n + (s.centeredSlides ? t.minTranslate() : 0) - e.swiperSlideOffset) / (e.swiperSlideSize + s.spaceBetween);
                    if (s.watchSlidesVisibility) {
                        const i = -(n - e.swiperSlideOffset),
                            o = i + t.slidesSizesGrid[r],
                            l = (i >= 0 && i < t.size) || (o > 0 && o <= t.size) || (i <= 0 && o >= t.size);
                        l && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(r), a.eq(r).addClass(s.slideVisibleClass));
                    }
                    e.progress = i ? -o : o;
                }
                t.visibleSlides = d(t.visibleSlides);
            }
            function ae(e = (this && this.translate) || 0) {
                const t = this,
                    s = t.params,
                    a = t.maxTranslate() - t.minTranslate();
                let { progress: i, isBeginning: n, isEnd: r } = t;
                const o = n,
                    l = r;
                0 === a ? ((i = 0), (n = !0), (r = !0)) : ((i = (e - t.minTranslate()) / a), (n = i <= 0), (r = i >= 1)),
                    U.extend(t, { progress: i, isBeginning: n, isEnd: r }),
                    (s.watchSlidesProgress || s.watchSlidesVisibility) && t.updateSlidesProgress(e),
                    n && !o && t.emit("reachBeginning toEdge"),
                    r && !l && t.emit("reachEnd toEdge"),
                    ((o && !n) || (l && !r)) && t.emit("fromEdge"),
                    t.emit("progress", i);
            }
            function ie() {
                const e = this,
                    { slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: n } = e,
                    r = e.virtual && s.virtual.enabled;
                let o;
                t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
                    (o = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i)),
                    o.addClass(s.slideActiveClass),
                    s.loop &&
                        (o.hasClass(s.slideDuplicateClass)
                            ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass)
                            : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass));
                let l = o
                    .nextAll(`.${s.slideClass}`)
                    .eq(0)
                    .addClass(s.slideNextClass);
                s.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(s.slideNextClass));
                let d = o
                    .prevAll(`.${s.slideClass}`)
                    .eq(0)
                    .addClass(s.slidePrevClass);
                s.loop && 0 === d.length && ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
                    s.loop &&
                        (l.hasClass(s.slideDuplicateClass)
                            ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass)
                            : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
                        d.hasClass(s.slideDuplicateClass)
                            ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)
                            : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass));
            }
            function ne(e) {
                const t = this,
                    s = t.rtlTranslate ? t.translate : -t.translate,
                    { slidesGrid: a, snapGrid: i, params: n, activeIndex: r, realIndex: o, snapIndex: l } = t;
                let d,
                    c = e;
                if ("undefined" === typeof c) {
                    for (let e = 0; e < a.length; e += 1)
                        "undefined" !== typeof a[e + 1] ? (s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? (c = e) : s >= a[e] && s < a[e + 1] && (c = e + 1)) : s >= a[e] && (c = e);
                    n.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0);
                }
                if (((d = i.indexOf(s) >= 0 ? i.indexOf(s) : Math.floor(c / n.slidesPerGroup)), d >= i.length && (d = i.length - 1), c === r))
                    return void (d !== l && ((t.snapIndex = d), t.emit("snapIndexChange")));
                const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                U.extend(t, { snapIndex: d, realIndex: p, previousIndex: r, activeIndex: c }),
                    t.emit("activeIndexChange"),
                    t.emit("snapIndexChange"),
                    o !== p && t.emit("realIndexChange"),
                    t.emit("slideChange");
            }
            function re(e) {
                const t = this,
                    s = t.params,
                    a = d(e.target).closest(`.${s.slideClass}`)[0];
                let i = !1;
                if (a) for (let n = 0; n < t.slides.length; n += 1) t.slides[n] === a && (i = !0);
                if (!a || !i) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                (t.clickedSlide = a),
                    t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10)) : (t.clickedIndex = d(a).index()),
                    s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
            }
            var oe = {
                updateSize: Z,
                updateSlides: Q,
                updateAutoHeight: ee,
                updateSlidesOffset: te,
                updateSlidesProgress: se,
                updateProgress: ae,
                updateSlidesClasses: ie,
                updateActiveIndex: ne,
                updateClickedSlide: re
            };
            function le(e = this.isHorizontal() ? "x" : "y") {
                const t = this,
                    { params: s, rtlTranslate: a, translate: i, $wrapperEl: n } = t;
                if (s.virtualTranslate) return a ? -i : i;
                let r = U.getTranslate(n[0], e);
                return a && (r = -r), r || 0;
            }
            function de(e, t) {
                const s = this,
                    { rtlTranslate: a, params: i, $wrapperEl: n, progress: r } = s;
                let o = 0,
                    l = 0;
                const d = 0;
                let c;
                s.isHorizontal() ? (o = a ? -e : e) : (l = e),
                    i.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                    i.virtualTranslate || (K.transforms3d ? n.transform(`translate3d(${o}px, ${l}px, ${d}px)`) : n.transform(`translate(${o}px, ${l}px)`)),
                    (s.previousTranslate = s.translate),
                    (s.translate = s.isHorizontal() ? o : l);
                const p = s.maxTranslate() - s.minTranslate();
                (c = 0 === p ? 0 : (e - s.minTranslate()) / p), c !== r && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
            }
            function ce() {
                return -this.snapGrid[0];
            }
            function pe() {
                return -this.snapGrid[this.snapGrid.length - 1];
            }
            var ue = { getTranslate: le, setTranslate: de, minTranslate: ce, maxTranslate: pe };
            function he(e, t) {
                const s = this;
                s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
            }
            function me(e = !0, t) {
                const s = this,
                    { activeIndex: a, params: i, previousIndex: n } = s;
                i.autoHeight && s.updateAutoHeight();
                let r = t;
                if ((r || (r = a > n ? "next" : a < n ? "prev" : "reset"), s.emit("transitionStart"), e && a !== n)) {
                    if ("reset" === r) return void s.emit("slideResetTransitionStart");
                    s.emit("slideChangeTransitionStart"), "next" === r ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart");
                }
            }
            function fe(e = !0, t) {
                const s = this,
                    { activeIndex: a, previousIndex: i } = s;
                (s.animating = !1), s.setTransition(0);
                let n = t;
                if ((n || (n = a > i ? "next" : a < i ? "prev" : "reset"), s.emit("transitionEnd"), e && a !== i)) {
                    if ("reset" === n) return void s.emit("slideResetTransitionEnd");
                    s.emit("slideChangeTransitionEnd"), "next" === n ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd");
                }
            }
            var ge = { setTransition: he, transitionStart: me, transitionEnd: fe };
            function ve(e = 0, t = this.params.speed, s = !0, a) {
                const i = this;
                let n = e;
                n < 0 && (n = 0);
                const { params: r, snapGrid: o, slidesGrid: l, previousIndex: d, activeIndex: c, rtlTranslate: p } = i;
                if (i.animating && r.preventInteractionOnTransition) return !1;
                let u = Math.floor(n / r.slidesPerGroup);
                u >= o.length && (u = o.length - 1), (c || r.initialSlide || 0) === (d || 0) && s && i.emit("beforeSlideChangeStart");
                const h = -o[u];
                if ((i.updateProgress(h), r.normalizeSlideIndex)) for (let f = 0; f < l.length; f += 1) -Math.floor(100 * h) >= Math.floor(100 * l[f]) && (n = f);
                if (i.initialized && n !== c) {
                    if (!i.allowSlideNext && h < i.translate && h < i.minTranslate()) return !1;
                    if (!i.allowSlidePrev && h > i.translate && h > i.maxTranslate() && (c || 0) !== n) return !1;
                }
                let m;
                return (
                    (m = n > c ? "next" : n < c ? "prev" : "reset"),
                    (p && -h === i.translate) || (!p && h === i.translate)
                        ? (i.updateActiveIndex(n),
                          r.autoHeight && i.updateAutoHeight(),
                          i.updateSlidesClasses(),
                          "slide" !== r.effect && i.setTranslate(h),
                          "reset" !== m && (i.transitionStart(s, m), i.transitionEnd(s, m)),
                          !1)
                        : (0 !== t && K.transition
                              ? (i.setTransition(t),
                                i.setTranslate(h),
                                i.updateActiveIndex(n),
                                i.updateSlidesClasses(),
                                i.emit("beforeTransitionStart", t, a),
                                i.transitionStart(s, m),
                                i.animating ||
                                    ((i.animating = !0),
                                    i.onSlideToWrapperTransitionEnd ||
                                        (i.onSlideToWrapperTransitionEnd = function(e) {
                                            i &&
                                                !i.destroyed &&
                                                e.target === this &&
                                                (i.$wrapperEl[0].removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd),
                                                i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd),
                                                (i.onSlideToWrapperTransitionEnd = null),
                                                delete i.onSlideToWrapperTransitionEnd,
                                                i.transitionEnd(s, m));
                                        }),
                                    i.$wrapperEl[0].addEventListener("transitionend", i.onSlideToWrapperTransitionEnd),
                                    i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd)))
                              : (i.setTransition(0),
                                i.setTranslate(h),
                                i.updateActiveIndex(n),
                                i.updateSlidesClasses(),
                                i.emit("beforeTransitionStart", t, a),
                                i.transitionStart(s, m),
                                i.transitionEnd(s, m)),
                          !0)
                );
            }
            function be(e = 0, t = this.params.speed, s = !0, a) {
                const i = this;
                let n = e;
                return i.params.loop && (n += i.loopedSlides), i.slideTo(n, t, s, a);
            }
            function we(e = this.params.speed, t = !0, s) {
                const a = this,
                    { params: i, animating: n } = a;
                return i.loop
                    ? !n && (a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft), a.slideTo(a.activeIndex + i.slidesPerGroup, e, t, s))
                    : a.slideTo(a.activeIndex + i.slidesPerGroup, e, t, s);
            }
            function ye(e = this.params.speed, t = !0, s) {
                const a = this,
                    { params: i, animating: n, snapGrid: r, slidesGrid: o, rtlTranslate: l } = a;
                if (i.loop) {
                    if (n) return !1;
                    a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
                }
                const d = l ? a.translate : -a.translate;
                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                }
                const p = c(d),
                    u = r.map(e => c(e)),
                    h = (o.map(e => c(e)), r[u.indexOf(p)], r[u.indexOf(p) - 1]);
                let m;
                return "undefined" !== typeof h && ((m = o.indexOf(h)), m < 0 && (m = a.activeIndex - 1)), a.slideTo(m, e, t, s);
            }
            function xe(e = this.params.speed, t = !0, s) {
                const a = this;
                return a.slideTo(a.activeIndex, e, t, s);
            }
            function Ee(e = this.params.speed, t = !0, s) {
                const a = this;
                let i = a.activeIndex;
                const n = Math.floor(i / a.params.slidesPerGroup);
                if (n < a.snapGrid.length - 1) {
                    const e = a.rtlTranslate ? a.translate : -a.translate,
                        t = a.snapGrid[n],
                        s = a.snapGrid[n + 1];
                    e - t > (s - t) / 2 && (i = a.params.slidesPerGroup);
                }
                return a.slideTo(i, e, t, s);
            }
            function Te() {
                const e = this,
                    { params: t, $wrapperEl: s } = e,
                    a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let i,
                    n = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    (i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
                        t.centeredSlides
                            ? n < e.loopedSlides - a / 2 || n > e.slides.length - e.loopedSlides + a / 2
                                ? (e.loopFix(),
                                  (n = s
                                      .children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`)
                                      .eq(0)
                                      .index()),
                                  U.nextTick(() => {
                                      e.slideTo(n);
                                  }))
                                : e.slideTo(n)
                            : n > e.slides.length - a
                            ? (e.loopFix(),
                              (n = s
                                  .children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`)
                                  .eq(0)
                                  .index()),
                              U.nextTick(() => {
                                  e.slideTo(n);
                              }))
                            : e.slideTo(n);
                } else e.slideTo(n);
            }
            var Ce = { slideTo: ve, slideToLoop: be, slideNext: we, slidePrev: ye, slideReset: xe, slideToClosest: Ee, slideToClickedSlide: Te };
            function Se() {
                const e = this,
                    { params: t, $wrapperEl: s } = e;
                s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                let a = s.children(`.${t.slideClass}`);
                if (t.loopFillGroupWithBlank) {
                    const e = t.slidesPerGroup - (a.length % t.slidesPerGroup);
                    if (e !== t.slidesPerGroup) {
                        for (let a = 0; a < e; a += 1) {
                            const e = d(r.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                            s.append(e);
                        }
                        a = s.children(`.${t.slideClass}`);
                    }
                }
                "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length),
                    (e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10)),
                    (e.loopedSlides += t.loopAdditionalSlides),
                    e.loopedSlides > a.length && (e.loopedSlides = a.length);
                const i = [],
                    n = [];
                a.each((t, s) => {
                    const r = d(s);
                    t < e.loopedSlides && n.push(s), t < a.length && t >= a.length - e.loopedSlides && i.push(s), r.attr("data-swiper-slide-index", t);
                });
                for (let r = 0; r < n.length; r += 1) s.append(d(n[r].cloneNode(!0)).addClass(t.slideDuplicateClass));
                for (let r = i.length - 1; r >= 0; r -= 1) s.prepend(d(i[r].cloneNode(!0)).addClass(t.slideDuplicateClass));
            }
            function $e() {
                const e = this,
                    { params: t, activeIndex: s, slides: a, loopedSlides: i, allowSlidePrev: n, allowSlideNext: r, snapGrid: o, rtlTranslate: l } = e;
                let d;
                (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                const c = -o[s],
                    p = c - e.getTranslate();
                if (s < i) {
                    (d = a.length - 3 * i + s), (d += i);
                    const t = e.slideTo(d, 0, !1, !0);
                    t && 0 !== p && e.setTranslate((l ? -e.translate : e.translate) - p);
                } else if (("auto" === t.slidesPerView && s >= 2 * i) || s >= a.length - i) {
                    (d = -a.length + s + i), (d += i);
                    const t = e.slideTo(d, 0, !1, !0);
                    t && 0 !== p && e.setTranslate((l ? -e.translate : e.translate) - p);
                }
                (e.allowSlidePrev = n), (e.allowSlideNext = r);
            }
            function Me() {
                const e = this,
                    { $wrapperEl: t, params: s, slides: a } = e;
                t.children(`.${s.slideClass}.${s.slideDuplicateClass},.${s.slideClass}.${s.slideBlankClass}`).remove(), a.removeAttr("data-swiper-slide-index");
            }
            var ke = { loopCreate: Se, loopFix: $e, loopDestroy: Me };
            function Pe(e) {
                const t = this;
                if (K.touch || !t.params.simulateTouch || (t.params.watchOverflow && t.isLocked)) return;
                const s = t.el;
                (s.style.cursor = "move"), (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (s.style.cursor = e ? "grabbing" : "grab");
            }
            function ze() {
                const e = this;
                K.touch || (e.params.watchOverflow && e.isLocked) || (e.el.style.cursor = "");
            }
            var Le = { setGrabCursor: Pe, unsetGrabCursor: ze };
            function Ie(e) {
                const t = this,
                    { $wrapperEl: s, params: a } = t;
                if ((a.loop && t.loopDestroy(), "object" === typeof e && "length" in e)) for (let i = 0; i < e.length; i += 1) e[i] && s.append(e[i]);
                else s.append(e);
                a.loop && t.loopCreate(), (a.observer && K.observer) || t.update();
            }
            function De(e) {
                const t = this,
                    { params: s, $wrapperEl: a, activeIndex: i } = t;
                s.loop && t.loopDestroy();
                let n = i + 1;
                if ("object" === typeof e && "length" in e) {
                    for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
                    n = i + e.length;
                } else a.prepend(e);
                s.loop && t.loopCreate(), (s.observer && K.observer) || t.update(), t.slideTo(n, 0, !1);
            }
            function Oe(e, t) {
                const s = this,
                    { $wrapperEl: a, params: i, activeIndex: n } = s;
                let r = n;
                i.loop && ((r -= s.loopedSlides), s.loopDestroy(), (s.slides = a.children(`.${i.slideClass}`)));
                const o = s.slides.length;
                if (e <= 0) return void s.prependSlide(t);
                if (e >= o) return void s.appendSlide(t);
                let l = r > e ? r + 1 : r;
                const d = [];
                for (let c = o - 1; c >= e; c -= 1) {
                    const e = s.slides.eq(c);
                    e.remove(), d.unshift(e);
                }
                if ("object" === typeof t && "length" in t) {
                    for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
                    l = r > e ? r + t.length : r;
                } else a.append(t);
                for (let c = 0; c < d.length; c += 1) a.append(d[c]);
                i.loop && s.loopCreate(), (i.observer && K.observer) || s.update(), i.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1);
            }
            function Ae(e) {
                const t = this,
                    { params: s, $wrapperEl: a, activeIndex: i } = t;
                let n = i;
                s.loop && ((n -= t.loopedSlides), t.loopDestroy(), (t.slides = a.children(`.${s.slideClass}`)));
                let r,
                    o = n;
                if ("object" === typeof e && "length" in e) {
                    for (let s = 0; s < e.length; s += 1) (r = e[s]), t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1);
                    o = Math.max(o, 0);
                } else (r = e), t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1), (o = Math.max(o, 0));
                s.loop && t.loopCreate(), (s.observer && K.observer) || t.update(), s.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
            }
            function Ne() {
                const e = this,
                    t = [];
                for (let s = 0; s < e.slides.length; s += 1) t.push(s);
                e.removeSlide(t);
            }
            var Ge = { appendSlide: Ie, prependSlide: De, addSlide: Oe, removeSlide: Ae, removeAllSlides: Ne };
            const Be = (function() {
                const e = o.navigator.userAgent,
                    t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: o.cordova || o.phonegap, phonegap: o.cordova || o.phonegap },
                    s = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    i = e.match(/(iPad).*OS\s([\d_]+)/),
                    n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    l = !i && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (
                    (s && ((t.os = "windows"), (t.osVersion = s[2]), (t.windows = !0)),
                    a && !s && ((t.os = "android"), (t.osVersion = a[2]), (t.android = !0), (t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0)),
                    (i || l || n) && ((t.os = "ios"), (t.ios = !0)),
                    l && !n && ((t.osVersion = l[2].replace(/_/g, ".")), (t.iphone = !0)),
                    i && ((t.osVersion = i[2].replace(/_/g, ".")), (t.ipad = !0)),
                    n && ((t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null), (t.iphone = !0)),
                    t.ios &&
                        t.osVersion &&
                        e.indexOf("Version/") >= 0 &&
                        "10" === t.osVersion.split(".")[0] &&
                        (t.osVersion = e
                            .toLowerCase()
                            .split("version/")[1]
                            .split(" ")[0]),
                    (t.desktop = !(t.os || t.android || t.webView)),
                    (t.webView = (l || i || n) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
                    t.os && "ios" === t.os)
                ) {
                    const e = t.osVersion.split("."),
                        s = r.querySelector('meta[name="viewport"]');
                    t.minimalUi = !t.webView && (n || l) && (1 * e[0] === 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) && s && s.getAttribute("content").indexOf("minimal-ui") >= 0;
                }
                return (t.pixelRatio = o.devicePixelRatio || 1), t;
            })();
            function He(e) {
                const t = this,
                    s = t.touchEventsData,
                    { params: a, touches: i } = t;
                if (t.animating && a.preventInteractionOnTransition) return;
                let n = e;
                if ((n.originalEvent && (n = n.originalEvent), (s.isTouchEvent = "touchstart" === n.type), !s.isTouchEvent && "which" in n && 3 === n.which)) return;
                if (!s.isTouchEvent && "button" in n && n.button > 0) return;
                if (s.isTouched && s.isMoved) return;
                if (a.noSwiping && d(n.target).closest(a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`)[0]) return void (t.allowClick = !0);
                if (a.swipeHandler && !d(n).closest(a.swipeHandler)[0]) return;
                (i.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX), (i.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY);
                const l = i.currentX,
                    c = i.currentY,
                    p = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    u = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (!p || !(l <= u || l >= o.screen.width - u)) {
                    if (
                        (U.extend(s, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                        (i.startX = l),
                        (i.startY = c),
                        (s.touchStartTime = U.now()),
                        (t.allowClick = !0),
                        t.updateSize(),
                        (t.swipeDirection = void 0),
                        a.threshold > 0 && (s.allowThresholdMove = !1),
                        "touchstart" !== n.type)
                    ) {
                        let e = !0;
                        d(n.target).is(s.formElements) && (e = !1), r.activeElement && d(r.activeElement).is(s.formElements) && r.activeElement !== n.target && r.activeElement.blur();
                        const i = e && t.allowTouchMove && a.touchStartPreventDefault;
                        (a.touchStartForcePreventDefault || i) && n.preventDefault();
                    }
                    t.emit("touchStart", n);
                }
            }
            function Xe(e) {
                const t = this,
                    s = t.touchEventsData,
                    { params: a, touches: i, rtlTranslate: n } = t;
                let o = e;
                if ((o.originalEvent && (o = o.originalEvent), !s.isTouched)) return void (s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", o));
                if (s.isTouchEvent && "mousemove" === o.type) return;
                const l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                if (o.preventedByNestedSwiper) return (i.startX = l), void (i.startY = c);
                if (!t.allowTouchMove) return (t.allowClick = !1), void (s.isTouched && (U.extend(i, { startX: l, startY: c, currentX: l, currentY: c }), (s.touchStartTime = U.now())));
                if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                    if (t.isVertical()) {
                        if ((c < i.startY && t.translate <= t.maxTranslate()) || (c > i.startY && t.translate >= t.minTranslate())) return (s.isTouched = !1), void (s.isMoved = !1);
                    } else if ((l < i.startX && t.translate <= t.maxTranslate()) || (l > i.startX && t.translate >= t.minTranslate())) return;
                if (s.isTouchEvent && r.activeElement && o.target === r.activeElement && d(o.target).is(s.formElements)) return (s.isMoved = !0), void (t.allowClick = !1);
                if ((s.allowTouchCallbacks && t.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1)) return;
                (i.currentX = l), (i.currentY = c);
                const p = i.currentX - i.startX,
                    u = i.currentY - i.startY;
                if (t.params.threshold && Math.sqrt(p ** 2 + u ** 2) < t.params.threshold) return;
                if ("undefined" === typeof s.isScrolling) {
                    let e;
                    (t.isHorizontal() && i.currentY === i.startY) || (t.isVertical() && i.currentX === i.startX)
                        ? (s.isScrolling = !1)
                        : p * p + u * u >= 25 && ((e = (180 * Math.atan2(Math.abs(u), Math.abs(p))) / Math.PI), (s.isScrolling = t.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle));
                }
                if (
                    (s.isScrolling && t.emit("touchMoveOpposite", o),
                    "undefined" === typeof s.startMoving && ((i.currentX === i.startX && i.currentY === i.startY) || (s.startMoving = !0)),
                    s.isScrolling)
                )
                    return void (s.isTouched = !1);
                if (!s.startMoving) return;
                (t.allowClick = !1),
                    o.preventDefault(),
                    a.touchMoveStopPropagation && !a.nested && o.stopPropagation(),
                    s.isMoved ||
                        (a.loop && t.loopFix(),
                        (s.startTranslate = t.getTranslate()),
                        t.setTransition(0),
                        t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                        (s.allowMomentumBounce = !1),
                        !a.grabCursor || (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) || t.setGrabCursor(!0),
                        t.emit("sliderFirstMove", o)),
                    t.emit("sliderMove", o),
                    (s.isMoved = !0);
                let h = t.isHorizontal() ? p : u;
                (i.diff = h), (h *= a.touchRatio), n && (h = -h), (t.swipeDirection = h > 0 ? "prev" : "next"), (s.currentTranslate = h + s.startTranslate);
                let m = !0,
                    f = a.resistanceRatio;
                if (
                    (a.touchReleaseOnEdges && (f = 0),
                    h > 0 && s.currentTranslate > t.minTranslate()
                        ? ((m = !1), a.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + h) ** f))
                        : h < 0 && s.currentTranslate < t.maxTranslate() && ((m = !1), a.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - h) ** f)),
                    m && (o.preventedByNestedSwiper = !0),
                    !t.allowSlideNext && "next" === t.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
                    !t.allowSlidePrev && "prev" === t.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
                    a.threshold > 0)
                ) {
                    if (!(Math.abs(h) > a.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
                    if (!s.allowThresholdMove)
                        return (
                            (s.allowThresholdMove = !0),
                            (i.startX = i.currentX),
                            (i.startY = i.currentY),
                            (s.currentTranslate = s.startTranslate),
                            void (i.diff = t.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY)
                        );
                }
                a.followFinger &&
                    ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()),
                    a.freeMode &&
                        (0 === s.velocities.length && s.velocities.push({ position: i[t.isHorizontal() ? "startX" : "startY"], time: s.touchStartTime }),
                        s.velocities.push({ position: i[t.isHorizontal() ? "currentX" : "currentY"], time: U.now() })),
                    t.updateProgress(s.currentTranslate),
                    t.setTranslate(s.currentTranslate));
            }
            function Ye(e) {
                const t = this,
                    s = t.touchEventsData,
                    { params: a, touches: i, rtlTranslate: n, $wrapperEl: r, slidesGrid: o, snapGrid: l } = t;
                let d = e;
                if ((d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", d), (s.allowTouchCallbacks = !1), !s.isTouched))
                    return s.isMoved && a.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
                a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const c = U.now(),
                    p = c - s.touchStartTime;
                if (
                    (t.allowClick &&
                        (t.updateClickedSlide(d),
                        t.emit("tap", d),
                        p < 300 &&
                            c - s.lastClickTime > 300 &&
                            (s.clickTimeout && clearTimeout(s.clickTimeout),
                            (s.clickTimeout = U.nextTick(() => {
                                t && !t.destroyed && t.emit("click", d);
                            }, 300))),
                        p < 300 && c - s.lastClickTime < 300 && (s.clickTimeout && clearTimeout(s.clickTimeout), t.emit("doubleTap", d))),
                    (s.lastClickTime = U.now()),
                    U.nextTick(() => {
                        t.destroyed || (t.allowClick = !0);
                    }),
                    !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
                )
                    return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
                let u;
                if (((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1), (u = a.followFinger ? (n ? t.translate : -t.translate) : -s.currentTranslate), a.freeMode)) {
                    if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (u > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (a.freeModeMomentum) {
                        if (s.velocities.length > 1) {
                            const e = s.velocities.pop(),
                                i = s.velocities.pop(),
                                n = e.position - i.position,
                                r = e.time - i.time;
                            (t.velocity = n / r), (t.velocity /= 2), Math.abs(t.velocity) < a.freeModeMinimumVelocity && (t.velocity = 0), (r > 150 || U.now() - e.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        (t.velocity *= a.freeModeMomentumVelocityRatio), (s.velocities.length = 0);
                        let e = 1e3 * a.freeModeMomentumRatio;
                        const i = t.velocity * e;
                        let o = t.translate + i;
                        n && (o = -o);
                        let d,
                            c = !1;
                        const p = 20 * Math.abs(t.velocity) * a.freeModeMomentumBounceRatio;
                        let u;
                        if (o < t.maxTranslate())
                            a.freeModeMomentumBounce
                                ? (o + t.maxTranslate() < -p && (o = t.maxTranslate() - p), (d = t.maxTranslate()), (c = !0), (s.allowMomentumBounce = !0))
                                : (o = t.maxTranslate()),
                                a.loop && a.centeredSlides && (u = !0);
                        else if (o > t.minTranslate())
                            a.freeModeMomentumBounce
                                ? (o - t.minTranslate() > p && (o = t.minTranslate() + p), (d = t.minTranslate()), (c = !0), (s.allowMomentumBounce = !0))
                                : (o = t.minTranslate()),
                                a.loop && a.centeredSlides && (u = !0);
                        else if (a.freeModeSticky) {
                            let e;
                            for (let t = 0; t < l.length; t += 1)
                                if (l[t] > -o) {
                                    e = t;
                                    break;
                                }
                            (o = Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) || "next" === t.swipeDirection ? l[e] : l[e - 1]), (o = -o);
                        }
                        if (
                            (u &&
                                t.once("transitionEnd", () => {
                                    t.loopFix();
                                }),
                            0 !== t.velocity)
                        )
                            e = n ? Math.abs((-o - t.translate) / t.velocity) : Math.abs((o - t.translate) / t.velocity);
                        else if (a.freeModeSticky) return void t.slideToClosest();
                        a.freeModeMomentumBounce && c
                            ? (t.updateProgress(d),
                              t.setTransition(e),
                              t.setTranslate(o),
                              t.transitionStart(!0, t.swipeDirection),
                              (t.animating = !0),
                              r.transitionEnd(() => {
                                  t &&
                                      !t.destroyed &&
                                      s.allowMomentumBounce &&
                                      (t.emit("momentumBounce"),
                                      t.setTransition(a.speed),
                                      t.setTranslate(d),
                                      r.transitionEnd(() => {
                                          t && !t.destroyed && t.transitionEnd();
                                      }));
                              }))
                            : t.velocity
                            ? (t.updateProgress(o),
                              t.setTransition(e),
                              t.setTranslate(o),
                              t.transitionStart(!0, t.swipeDirection),
                              t.animating ||
                                  ((t.animating = !0),
                                  r.transitionEnd(() => {
                                      t && !t.destroyed && t.transitionEnd();
                                  })))
                            : t.updateProgress(o),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses();
                    } else if (a.freeModeSticky) return void t.slideToClosest();
                    return void ((!a.freeModeMomentum || p >= a.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()));
                }
                let h = 0,
                    m = t.slidesSizesGrid[0];
                for (let g = 0; g < o.length; g += a.slidesPerGroup)
                    "undefined" !== typeof o[g + a.slidesPerGroup]
                        ? u >= o[g] && u < o[g + a.slidesPerGroup] && ((h = g), (m = o[g + a.slidesPerGroup] - o[g]))
                        : u >= o[g] && ((h = g), (m = o[o.length - 1] - o[o.length - 2]));
                const f = (u - o[h]) / m;
                if (p > a.longSwipesMs) {
                    if (!a.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (f >= a.longSwipesRatio ? t.slideTo(h + a.slidesPerGroup) : t.slideTo(h)),
                        "prev" === t.swipeDirection && (f > 1 - a.longSwipesRatio ? t.slideTo(h + a.slidesPerGroup) : t.slideTo(h));
                } else {
                    if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && t.slideTo(h + a.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(h);
                }
            }
            function Ve() {
                const e = this,
                    { params: t, el: s } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const { allowSlideNext: a, allowSlidePrev: i, snapGrid: n } = e;
                if (((e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), t.freeMode)) {
                    const s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
                } else
                    e.updateSlidesClasses(),
                        ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                (e.allowSlidePrev = i), (e.allowSlideNext = a), e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
            }
            function Fe(e) {
                const t = this;
                t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
            }
            function Re() {
                const e = this,
                    { params: t, touchEvents: s, el: a, wrapperEl: i } = e;
                (e.onTouchStart = He.bind(e)), (e.onTouchMove = Xe.bind(e)), (e.onTouchEnd = Ye.bind(e)), (e.onClick = Fe.bind(e));
                const n = "container" === t.touchEventsTarget ? a : i,
                    o = !!t.nested;
                if (K.touch || (!K.pointerEvents && !K.prefixedPointerEvents)) {
                    if (K.touch) {
                        const a = !("touchstart" !== s.start || !K.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                        n.addEventListener(s.start, e.onTouchStart, a),
                            n.addEventListener(s.move, e.onTouchMove, K.passiveListener ? { passive: !1, capture: o } : o),
                            n.addEventListener(s.end, e.onTouchEnd, a);
                    }
                    ((t.simulateTouch && !Be.ios && !Be.android) || (t.simulateTouch && !K.touch && Be.ios)) &&
                        (n.addEventListener("mousedown", e.onTouchStart, !1), r.addEventListener("mousemove", e.onTouchMove, o), r.addEventListener("mouseup", e.onTouchEnd, !1));
                } else n.addEventListener(s.start, e.onTouchStart, !1), r.addEventListener(s.move, e.onTouchMove, o), r.addEventListener(s.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", e.onClick, !0),
                    e.on(Be.ios || Be.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ve, !0);
            }
            function qe() {
                const e = this,
                    { params: t, touchEvents: s, el: a, wrapperEl: i } = e,
                    n = "container" === t.touchEventsTarget ? a : i,
                    o = !!t.nested;
                if (K.touch || (!K.pointerEvents && !K.prefixedPointerEvents)) {
                    if (K.touch) {
                        const a = !("onTouchStart" !== s.start || !K.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                        n.removeEventListener(s.start, e.onTouchStart, a), n.removeEventListener(s.move, e.onTouchMove, o), n.removeEventListener(s.end, e.onTouchEnd, a);
                    }
                    ((t.simulateTouch && !Be.ios && !Be.android) || (t.simulateTouch && !K.touch && Be.ios)) &&
                        (n.removeEventListener("mousedown", e.onTouchStart, !1), r.removeEventListener("mousemove", e.onTouchMove, o), r.removeEventListener("mouseup", e.onTouchEnd, !1));
                } else n.removeEventListener(s.start, e.onTouchStart, !1), r.removeEventListener(s.move, e.onTouchMove, o), r.removeEventListener(s.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", e.onClick, !0),
                    e.off(Be.ios || Be.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ve);
            }
            var We = { attachEvents: Re, detachEvents: qe };
            function je() {
                const e = this,
                    { activeIndex: t, initialized: s, loopedSlides: a = 0, params: i } = e,
                    n = i.breakpoints;
                if (!n || (n && 0 === Object.keys(n).length)) return;
                const r = e.getBreakpoint(n);
                if (r && e.currentBreakpoint !== r) {
                    const o = r in n ? n[r] : void 0;
                    o &&
                        ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(e => {
                            const t = o[e];
                            "undefined" !== typeof t && (o[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                        });
                    const l = o || e.originalParams,
                        d = i.loop && l.slidesPerView !== i.slidesPerView;
                    U.extend(e.params, l),
                        U.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                        (e.currentBreakpoint = r),
                        d && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", l);
                }
            }
            function _e(e) {
                const t = this;
                if (!e) return;
                let s = !1;
                const a = [];
                Object.keys(e).forEach(e => {
                    a.push(e);
                }),
                    a.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));
                for (let i = 0; i < a.length; i += 1) {
                    const e = a[i];
                    t.params.breakpointsInverse ? e <= o.innerWidth && (s = e) : e >= o.innerWidth && !s && (s = e);
                }
                return s || "max";
            }
            var Ue = { setBreakpoint: je, getBreakpoint: _e };
            const Ke = (function() {
                function e() {
                    const e = o.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
                }
                return {
                    isIE: !!o.navigator.userAgent.match(/Trident/g) || !!o.navigator.userAgent.match(/MSIE/g),
                    isEdge: !!o.navigator.userAgent.match(/Edge/g),
                    isSafari: e(),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(o.navigator.userAgent)
                };
            })();
            function Je() {
                const e = this,
                    { classNames: t, params: s, rtl: a, $el: i } = e,
                    n = [];
                n.push(s.direction),
                    s.freeMode && n.push("free-mode"),
                    K.flexbox || n.push("no-flexbox"),
                    s.autoHeight && n.push("autoheight"),
                    a && n.push("rtl"),
                    s.slidesPerColumn > 1 && n.push("multirow"),
                    Be.android && n.push("android"),
                    Be.ios && n.push("ios"),
                    (Ke.isIE || Ke.isEdge) && (K.pointerEvents || K.prefixedPointerEvents) && n.push(`wp8-${s.direction}`),
                    n.forEach(e => {
                        t.push(s.containerModifierClass + e);
                    }),
                    i.addClass(t.join(" "));
            }
            function Ze() {
                const e = this,
                    { $el: t, classNames: s } = e;
                t.removeClass(s.join(" "));
            }
            var Qe = { addClasses: Je, removeClasses: Ze };
            function et(e, t, s, a, i, n) {
                let r;
                function l() {
                    n && n();
                }
                e.complete && i ? l() : t ? ((r = new o.Image()), (r.onload = l), (r.onerror = l), a && (r.sizes = a), s && (r.srcset = s), t && (r.src = t)) : l();
            }
            function tt() {
                const e = this;
                function t() {
                    "undefined" !== typeof e &&
                        null !== e &&
                        e &&
                        !e.destroyed &&
                        (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t);
                }
            }
            var st = { loadImage: et, preloadImages: tt };
            function at() {
                const e = this,
                    t = e.isLocked;
                (e.isLocked = 1 === e.snapGrid.length),
                    (e.allowSlideNext = !e.isLocked),
                    (e.allowSlidePrev = !e.isLocked),
                    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                    t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
            }
            var it = { checkOverflow: at },
                nt = {
                    init: !0,
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    preventInteractionOnTransition: !1,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: 0.02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    breakpoints: void 0,
                    breakpointsInverse: !1,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !1,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: 0.5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: 0.85,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    loopFillGroupWithBlank: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideBlankClass: "swiper-slide-invisible-blank",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    runCallbacksOnInit: !0
                };
            const rt = { update: oe, translate: ue, transition: ge, slide: Ce, loop: ke, grabCursor: Le, manipulation: Ge, events: We, breakpoints: Ue, checkOverflow: it, classes: Qe, images: st },
                ot = {};
            class lt extends J {
                constructor(...e) {
                    let t, s;
                    1 === e.length && e[0].constructor && e[0].constructor === Object ? (s = e[0]) : ([t, s] = e),
                        s || (s = {}),
                        (s = U.extend({}, s)),
                        t && !s.el && (s.el = t),
                        super(s),
                        Object.keys(rt).forEach(e => {
                            Object.keys(rt[e]).forEach(t => {
                                lt.prototype[t] || (lt.prototype[t] = rt[e][t]);
                            });
                        });
                    const a = this;
                    "undefined" === typeof a.modules && (a.modules = {}),
                        Object.keys(a.modules).forEach(e => {
                            const t = a.modules[e];
                            if (t.params) {
                                const e = Object.keys(t.params)[0],
                                    a = t.params[e];
                                if ("object" !== typeof a || null === a) return;
                                if (!(e in s && "enabled" in a)) return;
                                !0 === s[e] && (s[e] = { enabled: !0 }), "object" !== typeof s[e] || "enabled" in s[e] || (s[e].enabled = !0), s[e] || (s[e] = { enabled: !1 });
                            }
                        });
                    const i = U.extend({}, nt);
                    a.useModulesParams(i), (a.params = U.extend({}, i, ot, s)), (a.originalParams = U.extend({}, a.params)), (a.passedParams = U.extend({}, s)), (a.$ = d);
                    const n = d(a.params.el);
                    if (((t = n[0]), !t)) return;
                    if (n.length > 1) {
                        const e = [];
                        return (
                            n.each((t, a) => {
                                const i = U.extend({}, s, { el: a });
                                e.push(new lt(i));
                            }),
                            e
                        );
                    }
                    (t.swiper = a), n.data("swiper", a);
                    const r = n.children(`.${a.params.wrapperClass}`);
                    return (
                        U.extend(a, {
                            $el: n,
                            el: t,
                            $wrapperEl: r,
                            wrapperEl: r[0],
                            classNames: [],
                            slides: d(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal() {
                                return "horizontal" === a.params.direction;
                            },
                            isVertical() {
                                return "vertical" === a.params.direction;
                            },
                            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
                            rtlTranslate: "horizontal" === a.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
                            wrongRTL: "-webkit-box" === r.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: a.params.allowSlideNext,
                            allowSlidePrev: a.params.allowSlidePrev,
                            touchEvents: (function() {
                                const e = ["touchstart", "touchmove", "touchend"];
                                let t = ["mousedown", "mousemove", "mouseup"];
                                return (
                                    K.pointerEvents ? (t = ["pointerdown", "pointermove", "pointerup"]) : K.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                                    (a.touchEventsTouch = { start: e[0], move: e[1], end: e[2] }),
                                    (a.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                                    K.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                                );
                            })(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: U.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: a.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }),
                        a.useModules(),
                        a.params.init && a.init(),
                        a
                    );
                }
                slidesPerViewDynamic() {
                    const e = this,
                        { params: t, slides: s, slidesGrid: a, size: i, activeIndex: n } = e;
                    let r = 1;
                    if (t.centeredSlides) {
                        let e,
                            t = s[n].swiperSlideSize;
                        for (let a = n + 1; a < s.length; a += 1) s[a] && !e && ((t += s[a].swiperSlideSize), (r += 1), t > i && (e = !0));
                        for (let a = n - 1; a >= 0; a -= 1) s[a] && !e && ((t += s[a].swiperSlideSize), (r += 1), t > i && (e = !0));
                    } else for (let o = n + 1; o < s.length; o += 1) a[o] - a[n] < i && (r += 1);
                    return r;
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const { snapGrid: t, params: s } = e;
                    function a() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
                    }
                    let i;
                    s.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode
                            ? (a(), e.params.autoHeight && e.updateAutoHeight())
                            : ((i =
                                  ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides
                                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                                      : e.slideTo(e.activeIndex, 0, !1, !0)),
                              i || a()),
                        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                        e.emit("update");
                }
                init() {
                    const e = this;
                    e.initialized ||
                        (e.emit("beforeInit"),
                        e.params.breakpoints && e.setBreakpoint(),
                        e.addClasses(),
                        e.params.loop && e.loopCreate(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.params.watchOverflow && e.checkOverflow(),
                        e.params.grabCursor && e.setGrabCursor(),
                        e.params.preloadImages && e.preloadImages(),
                        e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                        e.attachEvents(),
                        (e.initialized = !0),
                        e.emit("init"));
                }
                destroy(e = !0, t = !0) {
                    const s = this,
                        { params: a, $el: i, $wrapperEl: n, slides: r } = s;
                    return "undefined" === typeof s.params || s.destroyed
                        ? null
                        : (s.emit("beforeDestroy"),
                          (s.initialized = !1),
                          s.detachEvents(),
                          a.loop && s.loopDestroy(),
                          t &&
                              (s.removeClasses(),
                              i.removeAttr("style"),
                              n.removeAttr("style"),
                              r &&
                                  r.length &&
                                  r
                                      .removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" "))
                                      .removeAttr("style")
                                      .removeAttr("data-swiper-slide-index")
                                      .removeAttr("data-swiper-column")
                                      .removeAttr("data-swiper-row")),
                          s.emit("destroy"),
                          Object.keys(s.eventsListeners).forEach(e => {
                              s.off(e);
                          }),
                          !1 !== e && ((s.$el[0].swiper = null), s.$el.data("swiper", null), U.deleteProps(s)),
                          (s.destroyed = !0),
                          null);
                }
                static extendDefaults(e) {
                    U.extend(ot, e);
                }
                static get extendedDefaults() {
                    return ot;
                }
                static get defaults() {
                    return nt;
                }
                static get Class() {
                    return J;
                }
                static get $() {
                    return d;
                }
            }
            var dt = { name: "device", proto: { device: Be }, static: { device: Be } },
                ct = { name: "support", proto: { support: K }, static: { support: K } },
                pt = { name: "browser", proto: { browser: Ke }, static: { browser: Ke } },
                ut = {
                    name: "resize",
                    create() {
                        const e = this;
                        U.extend(e, {
                            resize: {
                                resizeHandler() {
                                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                                },
                                orientationChangeHandler() {
                                    e && !e.destroyed && e.initialized && e.emit("orientationchange");
                                }
                            }
                        });
                    },
                    on: {
                        init() {
                            const e = this;
                            o.addEventListener("resize", e.resize.resizeHandler), o.addEventListener("orientationchange", e.resize.orientationChangeHandler);
                        },
                        destroy() {
                            const e = this;
                            o.removeEventListener("resize", e.resize.resizeHandler), o.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
                        }
                    }
                };
            const ht = {
                func: o.MutationObserver || o.WebkitMutationObserver,
                attach(e, t = {}) {
                    const s = this,
                        a = ht.func,
                        i = new a(e => {
                            if (1 === e.length) return void s.emit("observerUpdate", e[0]);
                            const t = function() {
                                s.emit("observerUpdate", e[0]);
                            };
                            o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0);
                        });
                    i.observe(e, {
                        attributes: "undefined" === typeof t.attributes || t.attributes,
                        childList: "undefined" === typeof t.childList || t.childList,
                        characterData: "undefined" === typeof t.characterData || t.characterData
                    }),
                        s.observer.observers.push(i);
                },
                init() {
                    const e = this;
                    if (K.observer && e.params.observer) {
                        if (e.params.observeParents) {
                            const t = e.$el.parents();
                            for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s]);
                        }
                        e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
                    }
                },
                destroy() {
                    const e = this;
                    e.observer.observers.forEach(e => {
                        e.disconnect();
                    }),
                        (e.observer.observers = []);
                }
            };
            var mt = {
                name: "observer",
                params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
                create() {
                    const e = this;
                    U.extend(e, { observer: { init: ht.init.bind(e), attach: ht.attach.bind(e), destroy: ht.destroy.bind(e), observers: [] } });
                },
                on: {
                    init() {
                        const e = this;
                        e.observer.init();
                    },
                    destroy() {
                        const e = this;
                        e.observer.destroy();
                    }
                }
            };
            const ft = {
                update(e) {
                    const t = this,
                        { slidesPerView: s, slidesPerGroup: a, centeredSlides: i } = t.params,
                        { addSlidesBefore: n, addSlidesAfter: r } = t.params.virtual,
                        { from: o, to: l, slides: d, slidesGrid: c, renderSlide: p, offset: u } = t.virtual;
                    t.updateActiveIndex();
                    const h = t.activeIndex || 0;
                    let m, f, g;
                    (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"), i ? ((f = Math.floor(s / 2) + a + n), (g = Math.floor(s / 2) + a + r)) : ((f = s + (a - 1) + n), (g = a + r));
                    const v = Math.max((h || 0) - g, 0),
                        b = Math.min((h || 0) + f, d.length - 1),
                        w = (t.slidesGrid[v] || 0) - (t.slidesGrid[0] || 0);
                    function y() {
                        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
                    }
                    if ((U.extend(t.virtual, { from: v, to: b, offset: w, slidesGrid: t.slidesGrid }), o === v && l === b && !e))
                        return t.slidesGrid !== c && w !== u && t.slides.css(m, `${w}px`), void t.updateProgress();
                    if (t.params.virtual.renderExternal)
                        return (
                            t.params.virtual.renderExternal.call(t, {
                                offset: w,
                                from: v,
                                to: b,
                                slides: (function() {
                                    const e = [];
                                    for (let t = v; t <= b; t += 1) e.push(d[t]);
                                    return e;
                                })()
                            }),
                            void y()
                        );
                    const x = [],
                        E = [];
                    if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
                    else for (let T = o; T <= l; T += 1) (T < v || T > b) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${T}"]`).remove();
                    for (let T = 0; T < d.length; T += 1) T >= v && T <= b && ("undefined" === typeof l || e ? E.push(T) : (T > l && E.push(T), T < o && x.push(T)));
                    E.forEach(e => {
                        t.$wrapperEl.append(p(d[e], e));
                    }),
                        x
                            .sort((e, t) => t - e)
                            .forEach(e => {
                                t.$wrapperEl.prepend(p(d[e], e));
                            }),
                        t.$wrapperEl.children(".swiper-slide").css(m, `${w}px`),
                        y();
                },
                renderSlide(e, t) {
                    const s = this,
                        a = s.params.virtual;
                    if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
                    const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                    return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i;
                },
                appendSlide(e) {
                    const t = this;
                    t.virtual.slides.push(e), t.virtual.update(!0);
                },
                prependSlide(e) {
                    const t = this;
                    if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
                        const e = t.virtual.cache,
                            s = {};
                        Object.keys(e).forEach(t => {
                            s[t + 1] = e[t];
                        }),
                            (t.virtual.cache = s);
                    }
                    t.virtual.update(!0), t.slideNext(0);
                }
            };
            var gt = {
                name: "virtual",
                params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
                create() {
                    const e = this;
                    U.extend(e, {
                        virtual: {
                            update: ft.update.bind(e),
                            appendSlide: ft.appendSlide.bind(e),
                            prependSlide: ft.prependSlide.bind(e),
                            renderSlide: ft.renderSlide.bind(e),
                            slides: e.params.virtual.slides,
                            cache: {}
                        }
                    });
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if (!e.params.virtual.enabled) return;
                        e.classNames.push(`${e.params.containerModifierClass}virtual`);
                        const t = { watchSlidesProgress: !0 };
                        U.extend(e.params, t), U.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
                    },
                    setTranslate() {
                        const e = this;
                        e.params.virtual.enabled && e.virtual.update();
                    }
                }
            };
            const vt = {
                handle(e) {
                    const t = this,
                        { rtlTranslate: s } = t;
                    let a = e;
                    a.originalEvent && (a = a.originalEvent);
                    const i = a.keyCode || a.charCode;
                    if (!t.allowSlideNext && ((t.isHorizontal() && 39 === i) || (t.isVertical() && 40 === i))) return !1;
                    if (!t.allowSlidePrev && ((t.isHorizontal() && 37 === i) || (t.isVertical() && 38 === i))) return !1;
                    if (
                        !(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey) &&
                        (!r.activeElement || !r.activeElement.nodeName || ("input" !== r.activeElement.nodeName.toLowerCase() && "textarea" !== r.activeElement.nodeName.toLowerCase()))
                    ) {
                        if (t.params.keyboard.onlyInViewport && (37 === i || 39 === i || 38 === i || 40 === i)) {
                            let e = !1;
                            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                            const a = o.innerWidth,
                                i = o.innerHeight,
                                n = t.$el.offset();
                            s && (n.left -= t.$el[0].scrollLeft);
                            const r = [[n.left, n.top], [n.left + t.width, n.top], [n.left, n.top + t.height], [n.left + t.width, n.top + t.height]];
                            for (let t = 0; t < r.length; t += 1) {
                                const s = r[t];
                                s[0] >= 0 && s[0] <= a && s[1] >= 0 && s[1] <= i && (e = !0);
                            }
                            if (!e) return;
                        }
                        t.isHorizontal()
                            ? ((37 !== i && 39 !== i) || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                              ((39 === i && !s) || (37 === i && s)) && t.slideNext(),
                              ((37 === i && !s) || (39 === i && s)) && t.slidePrev())
                            : ((38 !== i && 40 !== i) || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), 40 === i && t.slideNext(), 38 === i && t.slidePrev()),
                            t.emit("keyPress", i);
                    }
                },
                enable() {
                    const e = this;
                    e.keyboard.enabled || (d(r).on("keydown", e.keyboard.handle), (e.keyboard.enabled = !0));
                },
                disable() {
                    const e = this;
                    e.keyboard.enabled && (d(r).off("keydown", e.keyboard.handle), (e.keyboard.enabled = !1));
                }
            };
            var bt = {
                name: "keyboard",
                params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
                create() {
                    const e = this;
                    U.extend(e, { keyboard: { enabled: !1, enable: vt.enable.bind(e), disable: vt.disable.bind(e), handle: vt.handle.bind(e) } });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.keyboard.enabled && e.keyboard.enable();
                    },
                    destroy() {
                        const e = this;
                        e.keyboard.enabled && e.keyboard.disable();
                    }
                }
            };
            function wt() {
                const e = "onwheel";
                let t = e in r;
                if (!t) {
                    const s = r.createElement("div");
                    s.setAttribute(e, "return;"), (t = "function" === typeof s[e]);
                }
                return !t && r.implementation && r.implementation.hasFeature && !0 !== r.implementation.hasFeature("", "") && (t = r.implementation.hasFeature("Events.wheel", "3.0")), t;
            }
            const yt = {
                lastScrollTime: U.now(),
                event: (function() {
                    return o.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : wt() ? "wheel" : "mousewheel";
                })(),
                normalize(e) {
                    const t = 10,
                        s = 40,
                        a = 800;
                    let i = 0,
                        n = 0,
                        r = 0,
                        o = 0;
                    return (
                        "detail" in e && (n = e.detail),
                        "wheelDelta" in e && (n = -e.wheelDelta / 120),
                        "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                        "wheelDeltaX" in e && (i = -e.wheelDeltaX / 120),
                        "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((i = n), (n = 0)),
                        (r = i * t),
                        (o = n * t),
                        "deltaY" in e && (o = e.deltaY),
                        "deltaX" in e && (r = e.deltaX),
                        (r || o) && e.deltaMode && (1 === e.deltaMode ? ((r *= s), (o *= s)) : ((r *= a), (o *= a))),
                        r && !i && (i = r < 1 ? -1 : 1),
                        o && !n && (n = o < 1 ? -1 : 1),
                        { spinX: i, spinY: n, pixelX: r, pixelY: o }
                    );
                },
                handleMouseEnter() {
                    const e = this;
                    e.mouseEntered = !0;
                },
                handleMouseLeave() {
                    const e = this;
                    e.mouseEntered = !1;
                },
                handle(e) {
                    let t = e;
                    const s = this,
                        a = s.params.mousewheel;
                    if (!s.mouseEntered && !a.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    let i = 0;
                    const n = s.rtlTranslate ? -1 : 1,
                        r = yt.normalize(t);
                    if (a.forceToAxis)
                        if (s.isHorizontal()) {
                            if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
                            i = r.pixelX * n;
                        } else {
                            if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
                            i = r.pixelY;
                        }
                    else i = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * n : -r.pixelY;
                    if (0 === i) return !0;
                    if ((a.invert && (i = -i), s.params.freeMode)) {
                        s.params.loop && s.loopFix();
                        let e = s.getTranslate() + i * a.sensitivity;
                        const n = s.isBeginning,
                            r = s.isEnd;
                        if (
                            (e >= s.minTranslate() && (e = s.minTranslate()),
                            e <= s.maxTranslate() && (e = s.maxTranslate()),
                            s.setTransition(0),
                            s.setTranslate(e),
                            s.updateProgress(),
                            s.updateActiveIndex(),
                            s.updateSlidesClasses(),
                            ((!n && s.isBeginning) || (!r && s.isEnd)) && s.updateSlidesClasses(),
                            s.params.freeModeSticky &&
                                (clearTimeout(s.mousewheel.timeout),
                                (s.mousewheel.timeout = U.nextTick(() => {
                                    s.slideToClosest();
                                }, 300))),
                            s.emit("scroll", t),
                            s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(),
                            e === s.minTranslate() || e === s.maxTranslate())
                        )
                            return !0;
                    } else {
                        if (U.now() - s.mousewheel.lastScrollTime > 60)
                            if (i < 0)
                                if ((s.isEnd && !s.params.loop) || s.animating) {
                                    if (a.releaseOnEdges) return !0;
                                } else s.slideNext(), s.emit("scroll", t);
                            else if ((s.isBeginning && !s.params.loop) || s.animating) {
                                if (a.releaseOnEdges) return !0;
                            } else s.slidePrev(), s.emit("scroll", t);
                        s.mousewheel.lastScrollTime = new o.Date().getTime();
                    }
                    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
                },
                enable() {
                    const e = this;
                    if (!yt.event) return !1;
                    if (e.mousewheel.enabled) return !1;
                    let t = e.$el;
                    return (
                        "container" !== e.params.mousewheel.eventsTarged && (t = d(e.params.mousewheel.eventsTarged)),
                        t.on("mouseenter", e.mousewheel.handleMouseEnter),
                        t.on("mouseleave", e.mousewheel.handleMouseLeave),
                        t.on(yt.event, e.mousewheel.handle),
                        (e.mousewheel.enabled = !0),
                        !0
                    );
                },
                disable() {
                    const e = this;
                    if (!yt.event) return !1;
                    if (!e.mousewheel.enabled) return !1;
                    let t = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (t = d(e.params.mousewheel.eventsTarged)), t.off(yt.event, e.mousewheel.handle), (e.mousewheel.enabled = !1), !0;
                }
            };
            var xt = {
                name: "mousewheel",
                params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
                create() {
                    const e = this;
                    U.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: yt.enable.bind(e),
                            disable: yt.disable.bind(e),
                            handle: yt.handle.bind(e),
                            handleMouseEnter: yt.handleMouseEnter.bind(e),
                            handleMouseLeave: yt.handleMouseLeave.bind(e),
                            lastScrollTime: U.now()
                        }
                    });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.mousewheel.enabled && e.mousewheel.enable();
                    },
                    destroy() {
                        const e = this;
                        e.mousewheel.enabled && e.mousewheel.disable();
                    }
                }
            };
            const Et = {
                update() {
                    const e = this,
                        t = e.params.navigation;
                    if (e.params.loop) return;
                    const { $nextEl: s, $prevEl: a } = e.navigation;
                    a &&
                        a.length > 0 &&
                        (e.isBeginning ? a.addClass(t.disabledClass) : a.removeClass(t.disabledClass), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                        s &&
                            s.length > 0 &&
                            (e.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
                },
                onPrevClick(e) {
                    const t = this;
                    e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
                },
                onNextClick(e) {
                    const t = this;
                    e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
                },
                init() {
                    const e = this,
                        t = e.params.navigation;
                    if (!t.nextEl && !t.prevEl) return;
                    let s, a;
                    t.nextEl && ((s = d(t.nextEl)), e.params.uniqueNavElements && "string" === typeof t.nextEl && s.length > 1 && 1 === e.$el.find(t.nextEl).length && (s = e.$el.find(t.nextEl))),
                        t.prevEl && ((a = d(t.prevEl)), e.params.uniqueNavElements && "string" === typeof t.prevEl && a.length > 1 && 1 === e.$el.find(t.prevEl).length && (a = e.$el.find(t.prevEl))),
                        s && s.length > 0 && s.on("click", e.navigation.onNextClick),
                        a && a.length > 0 && a.on("click", e.navigation.onPrevClick),
                        U.extend(e.navigation, { $nextEl: s, nextEl: s && s[0], $prevEl: a, prevEl: a && a[0] });
                },
                destroy() {
                    const e = this,
                        { $nextEl: t, $prevEl: s } = e.navigation;
                    t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)),
                        s && s.length && (s.off("click", e.navigation.onPrevClick), s.removeClass(e.params.navigation.disabledClass));
                }
            };
            var Tt = {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create() {
                    const e = this;
                    U.extend(e, {
                        navigation: { init: Et.init.bind(e), update: Et.update.bind(e), destroy: Et.destroy.bind(e), onNextClick: Et.onNextClick.bind(e), onPrevClick: Et.onPrevClick.bind(e) }
                    });
                },
                on: {
                    init() {
                        const e = this;
                        e.navigation.init(), e.navigation.update();
                    },
                    toEdge() {
                        const e = this;
                        e.navigation.update();
                    },
                    fromEdge() {
                        const e = this;
                        e.navigation.update();
                    },
                    destroy() {
                        const e = this;
                        e.navigation.destroy();
                    },
                    click(e) {
                        const t = this,
                            { $nextEl: s, $prevEl: a } = t.navigation;
                        !t.params.navigation.hideOnClick ||
                            d(e.target).is(a) ||
                            d(e.target).is(s) ||
                            (s && s.toggleClass(t.params.navigation.hiddenClass), a && a.toggleClass(t.params.navigation.hiddenClass));
                    }
                }
            };
            const Ct = {
                update() {
                    const e = this,
                        t = e.rtl,
                        s = e.params.pagination;
                    if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el;
                    let n;
                    const r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (
                        (e.params.loop
                            ? ((n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)),
                              n > a - 1 - 2 * e.loopedSlides && (n -= a - 2 * e.loopedSlides),
                              n > r - 1 && (n -= r),
                              n < 0 && "bullets" !== e.params.paginationType && (n = r + n))
                            : (n = "undefined" !== typeof e.snapIndex ? e.snapIndex : e.activeIndex || 0),
                        "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0)
                    ) {
                        const a = e.pagination.bullets;
                        let r, o, l;
                        if (
                            (s.dynamicBullets &&
                                ((e.pagination.bulletSize = a.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                i.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize * (s.dynamicMainBullets + 4)}px`),
                                s.dynamicMainBullets > 1 &&
                                    void 0 !== e.previousIndex &&
                                    ((e.pagination.dynamicBulletIndex += n - e.previousIndex),
                                    e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
                                        ? (e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1)
                                        : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                                (r = n - e.pagination.dynamicBulletIndex),
                                (o = r + (Math.min(a.length, s.dynamicMainBullets) - 1)),
                                (l = (o + r) / 2)),
                            a.removeClass(
                                `${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${
                                    s.bulletActiveClass
                                }-main`
                            ),
                            i.length > 1)
                        )
                            a.each((e, t) => {
                                const a = d(t),
                                    i = a.index();
                                i === n && a.addClass(s.bulletActiveClass),
                                    s.dynamicBullets &&
                                        (i >= r && i <= o && a.addClass(`${s.bulletActiveClass}-main`),
                                        i === r &&
                                            a
                                                .prev()
                                                .addClass(`${s.bulletActiveClass}-prev`)
                                                .prev()
                                                .addClass(`${s.bulletActiveClass}-prev-prev`),
                                        i === o &&
                                            a
                                                .next()
                                                .addClass(`${s.bulletActiveClass}-next`)
                                                .next()
                                                .addClass(`${s.bulletActiveClass}-next-next`));
                            });
                        else {
                            const e = a.eq(n);
                            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                                const e = a.eq(r),
                                    t = a.eq(o);
                                for (let i = r; i <= o; i += 1) a.eq(i).addClass(`${s.bulletActiveClass}-main`);
                                e
                                    .prev()
                                    .addClass(`${s.bulletActiveClass}-prev`)
                                    .prev()
                                    .addClass(`${s.bulletActiveClass}-prev-prev`),
                                    t
                                        .next()
                                        .addClass(`${s.bulletActiveClass}-next`)
                                        .next()
                                        .addClass(`${s.bulletActiveClass}-next-next`);
                            }
                        }
                        if (s.dynamicBullets) {
                            const i = Math.min(a.length, s.dynamicMainBullets + 4),
                                n = (e.pagination.bulletSize * i - e.pagination.bulletSize) / 2 - l * e.pagination.bulletSize,
                                r = t ? "right" : "left";
                            a.css(e.isHorizontal() ? r : "top", `${n}px`);
                        }
                    }
                    if (
                        ("fraction" === s.type && (i.find(`.${s.currentClass}`).text(s.formatFractionCurrent(n + 1)), i.find(`.${s.totalClass}`).text(s.formatFractionTotal(r))),
                        "progressbar" === s.type)
                    ) {
                        let t;
                        t = s.progressbarOpposite ? (e.isHorizontal() ? "vertical" : "horizontal") : e.isHorizontal() ? "horizontal" : "vertical";
                        const a = (n + 1) / r;
                        let o = 1,
                            l = 1;
                        "horizontal" === t ? (o = a) : (l = a),
                            i
                                .find(`.${s.progressbarFillClass}`)
                                .transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`)
                                .transition(e.params.speed);
                    }
                    "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, n + 1, r)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]),
                        i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
                },
                render() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        a = e.pagination.$el;
                    let i = "";
                    if ("bullets" === t.type) {
                        const n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        for (let s = 0; s < n; s += 1) t.renderBullet ? (i += t.renderBullet.call(e, s, t.bulletClass)) : (i += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
                        a.html(i), (e.pagination.bullets = a.find(`.${t.bulletClass}`));
                    }
                    "fraction" === t.type &&
                        ((i = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span>` + " / " + `<span class="${t.totalClass}"></span>`),
                        a.html(i)),
                        "progressbar" === t.type && ((i = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), a.html(i)),
                        "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
                },
                init() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el) return;
                    let s = d(t.el);
                    0 !== s.length &&
                        (e.params.uniqueNavElements && "string" === typeof t.el && s.length > 1 && 1 === e.$el.find(t.el).length && (s = e.$el.find(t.el)),
                        "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
                        s.addClass(t.modifierClass + t.type),
                        "bullets" === t.type &&
                            t.dynamicBullets &&
                            (s.addClass(`${t.modifierClass}${t.type}-dynamic`), (e.pagination.dynamicBulletIndex = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                        "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                            s.on("click", `.${t.bulletClass}`, function(t) {
                                t.preventDefault();
                                let s = d(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (s += e.loopedSlides), e.slideTo(s);
                            }),
                        U.extend(e.pagination, { $el: s, el: s[0] }));
                },
                destroy() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const s = e.pagination.$el;
                    s.removeClass(t.hiddenClass),
                        s.removeClass(t.modifierClass + t.type),
                        e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                        t.clickable && s.off("click", `.${t.bulletClass}`);
                }
            };
            var St = {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create() {
                    const e = this;
                    U.extend(e, { pagination: { init: Ct.init.bind(e), render: Ct.render.bind(e), update: Ct.update.bind(e), destroy: Ct.destroy.bind(e), dynamicBulletIndex: 0 } });
                },
                on: {
                    init() {
                        const e = this;
                        e.pagination.init(), e.pagination.render(), e.pagination.update();
                    },
                    activeIndexChange() {
                        const e = this;
                        e.params.loop ? e.pagination.update() : "undefined" === typeof e.snapIndex && e.pagination.update();
                    },
                    snapIndexChange() {
                        const e = this;
                        e.params.loop || e.pagination.update();
                    },
                    slidesLengthChange() {
                        const e = this;
                        e.params.loop && (e.pagination.render(), e.pagination.update());
                    },
                    snapGridLengthChange() {
                        const e = this;
                        e.params.loop || (e.pagination.render(), e.pagination.update());
                    },
                    destroy() {
                        const e = this;
                        e.pagination.destroy();
                    },
                    click(e) {
                        const t = this;
                        t.params.pagination.el &&
                            t.params.pagination.hideOnClick &&
                            t.pagination.$el.length > 0 &&
                            !d(e.target).hasClass(t.params.pagination.bulletClass) &&
                            t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
                    }
                }
            };
            const $t = {
                setTranslate() {
                    const e = this;
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const { scrollbar: t, rtlTranslate: s, progress: a } = e,
                        { dragSize: i, trackSize: n, $dragEl: r, $el: o } = t,
                        l = e.params.scrollbar;
                    let d = i,
                        c = (n - i) * a;
                    s ? ((c = -c), c > 0 ? ((d = i - c), (c = 0)) : -c + i > n && (d = n + c)) : c < 0 ? ((d = i + c), (c = 0)) : c + i > n && (d = n - c),
                        e.isHorizontal()
                            ? (K.transforms3d ? r.transform(`translate3d(${c}px, 0, 0)`) : r.transform(`translateX(${c}px)`), (r[0].style.width = `${d}px`))
                            : (K.transforms3d ? r.transform(`translate3d(0px, ${c}px, 0)`) : r.transform(`translateY(${c}px)`), (r[0].style.height = `${d}px`)),
                        l.hide &&
                            (clearTimeout(e.scrollbar.timeout),
                            (o[0].style.opacity = 1),
                            (e.scrollbar.timeout = setTimeout(() => {
                                (o[0].style.opacity = 0), o.transition(400);
                            }, 1e3)));
                },
                setTransition(e) {
                    const t = this;
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
                },
                updateSize() {
                    const e = this;
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const { scrollbar: t } = e,
                        { $dragEl: s, $el: a } = t;
                    (s[0].style.width = ""), (s[0].style.height = "");
                    const i = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        r = n * (i / e.size);
                    let o;
                    (o = "auto" === e.params.scrollbar.dragSize ? i * n : parseInt(e.params.scrollbar.dragSize, 10)),
                        e.isHorizontal() ? (s[0].style.width = `${o}px`) : (s[0].style.height = `${o}px`),
                        (a[0].style.display = n >= 1 ? "none" : ""),
                        e.params.scrollbarHide && (a[0].style.opacity = 0),
                        U.extend(t, { trackSize: i, divider: n, moveDivider: r, dragSize: o }),
                        t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
                },
                setDragPosition(e) {
                    const t = this,
                        { scrollbar: s, rtlTranslate: a } = t,
                        { $el: i, dragSize: n, trackSize: r } = s;
                    let o, l;
                    (o = t.isHorizontal()
                        ? "touchstart" === e.type || "touchmove" === e.type
                            ? e.targetTouches[0].pageX
                            : e.pageX || e.clientX
                        : "touchstart" === e.type || "touchmove" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY || e.clientY),
                        (l = (o - i.offset()[t.isHorizontal() ? "left" : "top"] - n / 2) / (r - n)),
                        (l = Math.max(Math.min(l, 1), 0)),
                        a && (l = 1 - l);
                    const d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * l;
                    t.updateProgress(d), t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses();
                },
                onDragStart(e) {
                    const t = this,
                        s = t.params.scrollbar,
                        { scrollbar: a, $wrapperEl: i } = t,
                        { $el: n, $dragEl: r } = a;
                    (t.scrollbar.isTouched = !0),
                        e.preventDefault(),
                        e.stopPropagation(),
                        i.transition(100),
                        r.transition(100),
                        a.setDragPosition(e),
                        clearTimeout(t.scrollbar.dragTimeout),
                        n.transition(0),
                        s.hide && n.css("opacity", 1),
                        t.emit("scrollbarDragStart", e);
                },
                onDragMove(e) {
                    const t = this,
                        { scrollbar: s, $wrapperEl: a } = t,
                        { $el: i, $dragEl: n } = s;
                    t.scrollbar.isTouched &&
                        (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), s.setDragPosition(e), a.transition(0), i.transition(0), n.transition(0), t.emit("scrollbarDragMove", e));
                },
                onDragEnd(e) {
                    const t = this,
                        s = t.params.scrollbar,
                        { scrollbar: a } = t,
                        { $el: i } = a;
                    t.scrollbar.isTouched &&
                        ((t.scrollbar.isTouched = !1),
                        s.hide &&
                            (clearTimeout(t.scrollbar.dragTimeout),
                            (t.scrollbar.dragTimeout = U.nextTick(() => {
                                i.css("opacity", 0), i.transition(400);
                            }, 1e3))),
                        t.emit("scrollbarDragEnd", e),
                        s.snapOnRelease && t.slideToClosest());
                },
                enableDraggable() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const { scrollbar: t, touchEventsTouch: s, touchEventsDesktop: a, params: i } = e,
                        n = t.$el,
                        o = n[0],
                        l = !(!K.passiveListener || !i.passiveListeners) && { passive: !1, capture: !1 },
                        d = !(!K.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                    K.touch
                        ? (o.addEventListener(s.start, e.scrollbar.onDragStart, l), o.addEventListener(s.move, e.scrollbar.onDragMove, l), o.addEventListener(s.end, e.scrollbar.onDragEnd, d))
                        : (o.addEventListener(a.start, e.scrollbar.onDragStart, l), r.addEventListener(a.move, e.scrollbar.onDragMove, l), r.addEventListener(a.end, e.scrollbar.onDragEnd, d));
                },
                disableDraggable() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const { scrollbar: t, touchEventsTouch: s, touchEventsDesktop: a, params: i } = e,
                        n = t.$el,
                        o = n[0],
                        l = !(!K.passiveListener || !i.passiveListeners) && { passive: !1, capture: !1 },
                        d = !(!K.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                    K.touch
                        ? (o.removeEventListener(s.start, e.scrollbar.onDragStart, l), o.removeEventListener(s.move, e.scrollbar.onDragMove, l), o.removeEventListener(s.end, e.scrollbar.onDragEnd, d))
                        : (o.removeEventListener(a.start, e.scrollbar.onDragStart, l),
                          r.removeEventListener(a.move, e.scrollbar.onDragMove, l),
                          r.removeEventListener(a.end, e.scrollbar.onDragEnd, d));
                },
                init() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const { scrollbar: t, $el: s } = e,
                        a = e.params.scrollbar;
                    let i = d(a.el);
                    e.params.uniqueNavElements && "string" === typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
                    let n = i.find(`.${e.params.scrollbar.dragClass}`);
                    0 === n.length && ((n = d(`<div class="${e.params.scrollbar.dragClass}"></div>`)), i.append(n)),
                        U.extend(t, { $el: i, el: i[0], $dragEl: n, dragEl: n[0] }),
                        a.draggable && t.enableDraggable();
                },
                destroy() {
                    const e = this;
                    e.scrollbar.disableDraggable();
                }
            };
            var Mt = {
                name: "scrollbar",
                params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                create() {
                    const e = this;
                    U.extend(e, {
                        scrollbar: {
                            init: $t.init.bind(e),
                            destroy: $t.destroy.bind(e),
                            updateSize: $t.updateSize.bind(e),
                            setTranslate: $t.setTranslate.bind(e),
                            setTransition: $t.setTransition.bind(e),
                            enableDraggable: $t.enableDraggable.bind(e),
                            disableDraggable: $t.disableDraggable.bind(e),
                            setDragPosition: $t.setDragPosition.bind(e),
                            onDragStart: $t.onDragStart.bind(e),
                            onDragMove: $t.onDragMove.bind(e),
                            onDragEnd: $t.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    });
                },
                on: {
                    init() {
                        const e = this;
                        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
                    },
                    update() {
                        const e = this;
                        e.scrollbar.updateSize();
                    },
                    resize() {
                        const e = this;
                        e.scrollbar.updateSize();
                    },
                    observerUpdate() {
                        const e = this;
                        e.scrollbar.updateSize();
                    },
                    setTranslate() {
                        const e = this;
                        e.scrollbar.setTranslate();
                    },
                    setTransition(e) {
                        const t = this;
                        t.scrollbar.setTransition(e);
                    },
                    destroy() {
                        const e = this;
                        e.scrollbar.destroy();
                    }
                }
            };
            const kt = {
                setTransform(e, t) {
                    const s = this,
                        { rtl: a } = s,
                        i = d(e),
                        n = a ? -1 : 1,
                        r = i.attr("data-swiper-parallax") || "0";
                    let o = i.attr("data-swiper-parallax-x"),
                        l = i.attr("data-swiper-parallax-y");
                    const c = i.attr("data-swiper-parallax-scale"),
                        p = i.attr("data-swiper-parallax-opacity");
                    if (
                        (o || l ? ((o = o || "0"), (l = l || "0")) : s.isHorizontal() ? ((o = r), (l = "0")) : ((l = r), (o = "0")),
                        (o = o.indexOf("%") >= 0 ? `${parseInt(o, 10) * t * n}%` : `${o * t * n}px`),
                        (l = l.indexOf("%") >= 0 ? `${parseInt(l, 10) * t}%` : `${l * t}px`),
                        "undefined" !== typeof p && null !== p)
                    ) {
                        const e = p - (p - 1) * (1 - Math.abs(t));
                        i[0].style.opacity = e;
                    }
                    if ("undefined" === typeof c || null === c) i.transform(`translate3d(${o}, ${l}, 0px)`);
                    else {
                        const e = c - (c - 1) * (1 - Math.abs(t));
                        i.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`);
                    }
                },
                setTranslate() {
                    const e = this,
                        { $el: t, slides: s, progress: a, snapGrid: i } = e;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((t, s) => {
                        e.parallax.setTransform(s, a);
                    }),
                        s.each((t, s) => {
                            let n = s.progress;
                            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (i.length - 1)),
                                (n = Math.min(Math.max(n, -1), 1)),
                                d(s)
                                    .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                                    .each((t, s) => {
                                        e.parallax.setTransform(s, n);
                                    });
                        });
                },
                setTransition(e = this.params.speed) {
                    const t = this,
                        { $el: s } = t;
                    s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((t, s) => {
                        const a = d(s);
                        let i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (i = 0), a.transition(i);
                    });
                }
            };
            var Pt = {
                name: "parallax",
                params: { parallax: { enabled: !1 } },
                create() {
                    const e = this;
                    U.extend(e, { parallax: { setTransform: kt.setTransform.bind(e), setTranslate: kt.setTranslate.bind(e), setTransition: kt.setTransition.bind(e) } });
                },
                on: {
                    beforeInit() {
                        const e = this;
                        e.params.parallax.enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                    },
                    init() {
                        const e = this;
                        e.params.parallax && e.parallax.setTranslate();
                    },
                    setTranslate() {
                        const e = this;
                        e.params.parallax && e.parallax.setTranslate();
                    },
                    setTransition(e) {
                        const t = this;
                        t.params.parallax && t.parallax.setTransition(e);
                    }
                }
            };
            const zt = {
                getDistanceBetweenTouches(e) {
                    if (e.targetTouches.length < 2) return 1;
                    const t = e.targetTouches[0].pageX,
                        s = e.targetTouches[0].pageY,
                        a = e.targetTouches[1].pageX,
                        i = e.targetTouches[1].pageY,
                        n = Math.sqrt((a - t) ** 2 + (i - s) ** 2);
                    return n;
                },
                onGestureStart(e) {
                    const t = this,
                        s = t.params.zoom,
                        a = t.zoom,
                        { gesture: i } = a;
                    if (((a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1), !K.gestures)) {
                        if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                        (a.fakeGestureTouched = !0), (i.scaleStart = zt.getDistanceBetweenTouches(e));
                    }
                    (i.$slideEl && i.$slideEl.length) ||
                    ((i.$slideEl = d(e.target).closest(".swiper-slide")),
                    0 === i.$slideEl.length && (i.$slideEl = t.slides.eq(t.activeIndex)),
                    (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
                    (i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`)),
                    (i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                    0 !== i.$imageWrapEl.length)
                        ? (i.$imageEl.transition(0), (t.zoom.isScaling = !0))
                        : (i.$imageEl = void 0);
                },
                onGestureChange(e) {
                    const t = this,
                        s = t.params.zoom,
                        a = t.zoom,
                        { gesture: i } = a;
                    if (!K.gestures) {
                        if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                        (a.fakeGestureMoved = !0), (i.scaleMove = zt.getDistanceBetweenTouches(e));
                    }
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        (K.gestures ? (a.scale = e.scale * a.currentScale) : (a.scale = (i.scaleMove / i.scaleStart) * a.currentScale),
                        a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + (a.scale - i.maxRatio + 1) ** 0.5),
                        a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** 0.5),
                        i.$imageEl.transform(`translate3d(0,0,0) scale(${a.scale})`));
                },
                onGestureEnd(e) {
                    const t = this,
                        s = t.params.zoom,
                        a = t.zoom,
                        { gesture: i } = a;
                    if (!K.gestures) {
                        if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                        if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !Be.android)) return;
                        (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
                    }
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        ((a.scale = Math.max(Math.min(a.scale, i.maxRatio), s.minRatio)),
                        i.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${a.scale})`),
                        (a.currentScale = a.scale),
                        (a.isScaling = !1),
                        1 === a.scale && (i.$slideEl = void 0));
                },
                onTouchStart(e) {
                    const t = this,
                        s = t.zoom,
                        { gesture: a, image: i } = s;
                    a.$imageEl &&
                        0 !== a.$imageEl.length &&
                        (i.isTouched ||
                            (Be.android && e.preventDefault(),
                            (i.isTouched = !0),
                            (i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
                },
                onTouchMove(e) {
                    const t = this,
                        s = t.zoom,
                        { gesture: a, image: i, velocity: n } = s;
                    if (!a.$imageEl || 0 === a.$imageEl.length) return;
                    if (((t.allowClick = !1), !i.isTouched || !a.$slideEl)) return;
                    i.isMoved ||
                        ((i.width = a.$imageEl[0].offsetWidth),
                        (i.height = a.$imageEl[0].offsetHeight),
                        (i.startX = U.getTranslate(a.$imageWrapEl[0], "x") || 0),
                        (i.startY = U.getTranslate(a.$imageWrapEl[0], "y") || 0),
                        (a.slideWidth = a.$slideEl[0].offsetWidth),
                        (a.slideHeight = a.$slideEl[0].offsetHeight),
                        a.$imageWrapEl.transition(0),
                        t.rtl && ((i.startX = -i.startX), (i.startY = -i.startY)));
                    const r = i.width * s.scale,
                        o = i.height * s.scale;
                    if (!(r < a.slideWidth && o < a.slideHeight)) {
                        if (
                            ((i.minX = Math.min(a.slideWidth / 2 - r / 2, 0)),
                            (i.maxX = -i.minX),
                            (i.minY = Math.min(a.slideHeight / 2 - o / 2, 0)),
                            (i.maxY = -i.minY),
                            (i.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (i.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                            !i.isMoved && !s.isScaling)
                        ) {
                            if (
                                t.isHorizontal() &&
                                ((Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x) ||
                                    (Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x))
                            )
                                return void (i.isTouched = !1);
                            if (
                                !t.isHorizontal() &&
                                ((Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y) ||
                                    (Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y))
                            )
                                return void (i.isTouched = !1);
                        }
                        e.preventDefault(),
                            e.stopPropagation(),
                            (i.isMoved = !0),
                            (i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX),
                            (i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY),
                            i.currentX < i.minX && (i.currentX = i.minX + 1 - (i.minX - i.currentX + 1) ** 0.8),
                            i.currentX > i.maxX && (i.currentX = i.maxX - 1 + (i.currentX - i.maxX + 1) ** 0.8),
                            i.currentY < i.minY && (i.currentY = i.minY + 1 - (i.minY - i.currentY + 1) ** 0.8),
                            i.currentY > i.maxY && (i.currentY = i.maxY - 1 + (i.currentY - i.maxY + 1) ** 0.8),
                            n.prevPositionX || (n.prevPositionX = i.touchesCurrent.x),
                            n.prevPositionY || (n.prevPositionY = i.touchesCurrent.y),
                            n.prevTime || (n.prevTime = Date.now()),
                            (n.x = (i.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2),
                            (n.y = (i.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2),
                            Math.abs(i.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                            Math.abs(i.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                            (n.prevPositionX = i.touchesCurrent.x),
                            (n.prevPositionY = i.touchesCurrent.y),
                            (n.prevTime = Date.now()),
                            a.$imageWrapEl.transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`);
                    }
                },
                onTouchEnd() {
                    const e = this,
                        t = e.zoom,
                        { gesture: s, image: a, velocity: i } = t;
                    if (!s.$imageEl || 0 === s.$imageEl.length) return;
                    if (!a.isTouched || !a.isMoved) return (a.isTouched = !1), void (a.isMoved = !1);
                    (a.isTouched = !1), (a.isMoved = !1);
                    let n = 300,
                        r = 300;
                    const o = i.x * n,
                        l = a.currentX + o,
                        d = i.y * r,
                        c = a.currentY + d;
                    0 !== i.x && (n = Math.abs((l - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((c - a.currentY) / i.y));
                    const p = Math.max(n, r);
                    (a.currentX = l), (a.currentY = c);
                    const u = a.width * t.scale,
                        h = a.height * t.scale;
                    (a.minX = Math.min(s.slideWidth / 2 - u / 2, 0)),
                        (a.maxX = -a.minX),
                        (a.minY = Math.min(s.slideHeight / 2 - h / 2, 0)),
                        (a.maxY = -a.minY),
                        (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
                        (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
                        s.$imageWrapEl.transition(p).transform(`translate3d(${a.currentX}px, ${a.currentY}px,0)`);
                },
                onTransitionEnd() {
                    const e = this,
                        t = e.zoom,
                        { gesture: s } = t;
                    s.$slideEl &&
                        e.previousIndex !== e.activeIndex &&
                        (s.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                        s.$imageWrapEl.transform("translate3d(0,0,0)"),
                        (t.scale = 1),
                        (t.currentScale = 1),
                        (s.$slideEl = void 0),
                        (s.$imageEl = void 0),
                        (s.$imageWrapEl = void 0));
                },
                toggle(e) {
                    const t = this,
                        s = t.zoom;
                    s.scale && 1 !== s.scale ? s.out() : s.in(e);
                },
                in(e) {
                    const t = this,
                        s = t.zoom,
                        a = t.params.zoom,
                        { gesture: i, image: n } = s;
                    if (
                        (i.$slideEl ||
                            ((i.$slideEl = t.clickedSlide ? d(t.clickedSlide) : t.slides.eq(t.activeIndex)),
                            (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
                            (i.$imageWrapEl = i.$imageEl.parent(`.${a.containerClass}`))),
                        !i.$imageEl || 0 === i.$imageEl.length)
                    )
                        return;
                    let r, o, l, c, p, u, h, m, f, g, v, b, w, y, x, E, T, C;
                    i.$slideEl.addClass(`${a.zoomedSlideClass}`),
                        "undefined" === typeof n.touchesStart.x && e
                            ? ((r = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                            : ((r = n.touchesStart.x), (o = n.touchesStart.y)),
                        (s.scale = i.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                        (s.currentScale = i.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                        e
                            ? ((T = i.$slideEl[0].offsetWidth),
                              (C = i.$slideEl[0].offsetHeight),
                              (l = i.$slideEl.offset().left),
                              (c = i.$slideEl.offset().top),
                              (p = l + T / 2 - r),
                              (u = c + C / 2 - o),
                              (f = i.$imageEl[0].offsetWidth),
                              (g = i.$imageEl[0].offsetHeight),
                              (v = f * s.scale),
                              (b = g * s.scale),
                              (w = Math.min(T / 2 - v / 2, 0)),
                              (y = Math.min(C / 2 - b / 2, 0)),
                              (x = -w),
                              (E = -y),
                              (h = p * s.scale),
                              (m = u * s.scale),
                              h < w && (h = w),
                              h > x && (h = x),
                              m < y && (m = y),
                              m > E && (m = E))
                            : ((h = 0), (m = 0)),
                        i.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${m}px,0)`),
                        i.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
                },
                out() {
                    const e = this,
                        t = e.zoom,
                        s = e.params.zoom,
                        { gesture: a } = t;
                    a.$slideEl ||
                        ((a.$slideEl = e.clickedSlide ? d(e.clickedSlide) : e.slides.eq(e.activeIndex)),
                        (a.$imageEl = a.$slideEl.find("img, svg, canvas")),
                        (a.$imageWrapEl = a.$imageEl.parent(`.${s.containerClass}`))),
                        a.$imageEl &&
                            0 !== a.$imageEl.length &&
                            ((t.scale = 1),
                            (t.currentScale = 1),
                            a.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                            a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                            a.$slideEl.removeClass(`${s.zoomedSlideClass}`),
                            (a.$slideEl = void 0));
                },
                enable() {
                    const e = this,
                        t = e.zoom;
                    if (t.enabled) return;
                    t.enabled = !0;
                    const s = !("touchstart" !== e.touchEvents.start || !K.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                    K.gestures
                        ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, s),
                          e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, s),
                          e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, s))
                        : "touchstart" === e.touchEvents.start &&
                          (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s),
                          e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s),
                          e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)),
                        e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove);
                },
                disable() {
                    const e = this,
                        t = e.zoom;
                    if (!t.enabled) return;
                    e.zoom.enabled = !1;
                    const s = !("touchstart" !== e.touchEvents.start || !K.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                    K.gestures
                        ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, s),
                          e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, s),
                          e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, s))
                        : "touchstart" === e.touchEvents.start &&
                          (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s),
                          e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s),
                          e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)),
                        e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove);
                }
            };
            var Lt = {
                name: "zoom",
                params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                create() {
                    const e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(s => {
                        t[s] = zt[s].bind(e);
                    }),
                        U.extend(e, { zoom: t });
                    let s = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get() {
                            return s;
                        },
                        set(t) {
                            if (s !== t) {
                                const s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                    a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                e.emit("zoomChange", t, s, a);
                            }
                            s = t;
                        }
                    });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.zoom.enabled && e.zoom.enable();
                    },
                    destroy() {
                        const e = this;
                        e.zoom.disable();
                    },
                    touchStart(e) {
                        const t = this;
                        t.zoom.enabled && t.zoom.onTouchStart(e);
                    },
                    touchEnd(e) {
                        const t = this;
                        t.zoom.enabled && t.zoom.onTouchEnd(e);
                    },
                    doubleTap(e) {
                        const t = this;
                        t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
                    },
                    transitionEnd() {
                        const e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
                    }
                }
            };
            const It = {
                loadInSlide(e, t = !0) {
                    const s = this,
                        a = s.params.lazy;
                    if ("undefined" === typeof e) return;
                    if (0 === s.slides.length) return;
                    const i = s.virtual && s.params.virtual.enabled,
                        n = i ? s.$wrapperEl.children(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`) : s.slides.eq(e);
                    let r = n.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
                    !n.hasClass(a.elementClass) || n.hasClass(a.loadedClass) || n.hasClass(a.loadingClass) || (r = r.add(n[0])),
                        0 !== r.length &&
                            r.each((e, i) => {
                                const r = d(i);
                                r.addClass(a.loadingClass);
                                const o = r.attr("data-background"),
                                    l = r.attr("data-src"),
                                    c = r.attr("data-srcset"),
                                    p = r.attr("data-sizes");
                                s.loadImage(r[0], l || o, c, p, !1, () => {
                                    if ("undefined" !== typeof s && null !== s && s && (!s || s.params) && !s.destroyed) {
                                        if (
                                            (o
                                                ? (r.css("background-image", `url("${o}")`), r.removeAttr("data-background"))
                                                : (c && (r.attr("srcset", c), r.removeAttr("data-srcset")),
                                                  p && (r.attr("sizes", p), r.removeAttr("data-sizes")),
                                                  l && (r.attr("src", l), r.removeAttr("data-src"))),
                                            r.addClass(a.loadedClass).removeClass(a.loadingClass),
                                            n.find(`.${a.preloaderClass}`).remove(),
                                            s.params.loop && t)
                                        ) {
                                            const e = n.attr("data-swiper-slide-index");
                                            if (n.hasClass(s.params.slideDuplicateClass)) {
                                                const t = s.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${s.params.slideDuplicateClass})`);
                                                s.lazy.loadInSlide(t.index(), !1);
                                            } else {
                                                const t = s.$wrapperEl.children(`.${s.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                                s.lazy.loadInSlide(t.index(), !1);
                                            }
                                        }
                                        s.emit("lazyImageReady", n[0], r[0]);
                                    }
                                }),
                                    s.emit("lazyImageLoad", n[0], r[0]);
                            });
                },
                load() {
                    const e = this,
                        { $wrapperEl: t, params: s, slides: a, activeIndex: i } = e,
                        n = e.virtual && s.virtual.enabled,
                        r = s.lazy;
                    let o = s.slidesPerView;
                    function l(e) {
                        if (n) {
                            if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0;
                        } else if (a[e]) return !0;
                        return !1;
                    }
                    function c(e) {
                        return n ? d(e).attr("data-swiper-slide-index") : d(e).index();
                    }
                    if (("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility))
                        t.children(`.${s.slideVisibleClass}`).each((t, s) => {
                            const a = n ? d(s).attr("data-swiper-slide-index") : d(s).index();
                            e.lazy.loadInSlide(a);
                        });
                    else if (o > 1) for (let d = i; d < i + o; d += 1) l(d) && e.lazy.loadInSlide(d);
                    else e.lazy.loadInSlide(i);
                    if (r.loadPrevNext)
                        if (o > 1 || (r.loadPrevNextAmount && r.loadPrevNextAmount > 1)) {
                            const t = r.loadPrevNextAmount,
                                s = o,
                                n = Math.min(i + s + Math.max(t, s), a.length),
                                d = Math.max(i - Math.max(s, t), 0);
                            for (let a = i + o; a < n; a += 1) l(a) && e.lazy.loadInSlide(a);
                            for (let a = d; a < i; a += 1) l(a) && e.lazy.loadInSlide(a);
                        } else {
                            const a = t.children(`.${s.slideNextClass}`);
                            a.length > 0 && e.lazy.loadInSlide(c(a));
                            const i = t.children(`.${s.slidePrevClass}`);
                            i.length > 0 && e.lazy.loadInSlide(c(i));
                        }
                }
            };
            var Dt = {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create() {
                    const e = this;
                    U.extend(e, { lazy: { initialImageLoaded: !1, load: It.load.bind(e), loadInSlide: It.loadInSlide.bind(e) } });
                },
                on: {
                    beforeInit() {
                        const e = this;
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
                    },
                    init() {
                        const e = this;
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
                    },
                    scroll() {
                        const e = this;
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
                    },
                    resize() {
                        const e = this;
                        e.params.lazy.enabled && e.lazy.load();
                    },
                    scrollbarDragMove() {
                        const e = this;
                        e.params.lazy.enabled && e.lazy.load();
                    },
                    transitionStart() {
                        const e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
                    },
                    transitionEnd() {
                        const e = this;
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
                    }
                }
            };
            const Ot = {
                LinearSpline: function(e, t) {
                    const s = (function() {
                        let e, t, s;
                        return (a, i) => {
                            (t = -1), (e = a.length);
                            while (e - t > 1) (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
                            return e;
                        };
                    })();
                    let a, i;
                    return (
                        (this.x = e),
                        (this.y = t),
                        (this.lastIndex = e.length - 1),
                        (this.interpolate = function(e) {
                            return e ? ((i = s(this.x, e)), (a = i - 1), ((e - this.x[a]) * (this.y[i] - this.y[a])) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
                        }),
                        this
                    );
                },
                getInterpolateFunction(e) {
                    const t = this;
                    t.controller.spline || (t.controller.spline = t.params.loop ? new Ot.LinearSpline(t.slidesGrid, e.slidesGrid) : new Ot.LinearSpline(t.snapGrid, e.snapGrid));
                },
                setTranslate(e, t) {
                    const s = this,
                        a = s.controller.control;
                    let i, n;
                    function r(e) {
                        const t = s.rtlTranslate ? -s.translate : s.translate;
                        "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), (n = -s.controller.spline.interpolate(-t))),
                            (n && "container" !== s.params.controller.by) ||
                                ((i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate())), (n = (t - s.minTranslate()) * i + e.minTranslate())),
                            s.params.controller.inverse && (n = e.maxTranslate() - n),
                            e.updateProgress(n),
                            e.setTranslate(n, s),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses();
                    }
                    if (Array.isArray(a)) for (let o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof lt && r(a[o]);
                    else a instanceof lt && t !== a && r(a);
                },
                setTransition(e, t) {
                    const s = this,
                        a = s.controller.control;
                    let i;
                    function n(t) {
                        t.setTransition(e, s),
                            0 !== e &&
                                (t.transitionStart(),
                                t.params.autoHeight &&
                                    U.nextTick(() => {
                                        t.updateAutoHeight();
                                    }),
                                t.$wrapperEl.transitionEnd(() => {
                                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
                                }));
                    }
                    if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof lt && n(a[i]);
                    else a instanceof lt && t !== a && n(a);
                }
            };
            var At = {
                name: "controller",
                params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                create() {
                    const e = this;
                    U.extend(e, {
                        controller: {
                            control: e.params.controller.control,
                            getInterpolateFunction: Ot.getInterpolateFunction.bind(e),
                            setTranslate: Ot.setTranslate.bind(e),
                            setTransition: Ot.setTransition.bind(e)
                        }
                    });
                },
                on: {
                    update() {
                        const e = this;
                        e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                    },
                    resize() {
                        const e = this;
                        e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                    },
                    observerUpdate() {
                        const e = this;
                        e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                    },
                    setTranslate(e, t) {
                        const s = this;
                        s.controller.control && s.controller.setTranslate(e, t);
                    },
                    setTransition(e, t) {
                        const s = this;
                        s.controller.control && s.controller.setTransition(e, t);
                    }
                }
            };
            const Nt = {
                makeElFocusable(e) {
                    return e.attr("tabIndex", "0"), e;
                },
                addElRole(e, t) {
                    return e.attr("role", t), e;
                },
                addElLabel(e, t) {
                    return e.attr("aria-label", t), e;
                },
                disableEl(e) {
                    return e.attr("aria-disabled", !0), e;
                },
                enableEl(e) {
                    return e.attr("aria-disabled", !1), e;
                },
                onEnterKey(e) {
                    const t = this,
                        s = t.params.a11y;
                    if (13 !== e.keyCode) return;
                    const a = d(e.target);
                    t.navigation &&
                        t.navigation.$nextEl &&
                        a.is(t.navigation.$nextEl) &&
                        ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? t.a11y.notify(s.lastSlideMessage) : t.a11y.notify(s.nextSlideMessage)),
                        t.navigation &&
                            t.navigation.$prevEl &&
                            a.is(t.navigation.$prevEl) &&
                            ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? t.a11y.notify(s.firstSlideMessage) : t.a11y.notify(s.prevSlideMessage)),
                        t.pagination && a.is(`.${t.params.pagination.bulletClass}`) && a[0].click();
                },
                notify(e) {
                    const t = this,
                        s = t.a11y.liveRegion;
                    0 !== s.length && (s.html(""), s.html(e));
                },
                updateNavigation() {
                    const e = this;
                    if (e.params.loop) return;
                    const { $nextEl: t, $prevEl: s } = e.navigation;
                    s && s.length > 0 && (e.isBeginning ? e.a11y.disableEl(s) : e.a11y.enableEl(s)), t && t.length > 0 && (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t));
                },
                updatePagination() {
                    const e = this,
                        t = e.params.a11y;
                    e.pagination &&
                        e.params.pagination.clickable &&
                        e.pagination.bullets &&
                        e.pagination.bullets.length &&
                        e.pagination.bullets.each((s, a) => {
                            const i = d(a);
                            e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/{{index}}/, i.index() + 1));
                        });
                },
                init() {
                    const e = this;
                    e.$el.append(e.a11y.liveRegion);
                    const t = e.params.a11y;
                    let s, a;
                    e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl),
                        e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
                        s && (e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.nextSlideMessage), s.on("keydown", e.a11y.onEnterKey)),
                        a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)),
                        e.pagination &&
                            e.params.pagination.clickable &&
                            e.pagination.bullets &&
                            e.pagination.bullets.length &&
                            e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey);
                },
                destroy() {
                    const e = this;
                    let t, s;
                    e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(),
                        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                        e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
                        t && t.off("keydown", e.a11y.onEnterKey),
                        s && s.off("keydown", e.a11y.onEnterKey),
                        e.pagination &&
                            e.params.pagination.clickable &&
                            e.pagination.bullets &&
                            e.pagination.bullets.length &&
                            e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey);
                }
            };
            var Gt = {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create() {
                    const e = this;
                    U.extend(e, { a11y: { liveRegion: d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`) } }),
                        Object.keys(Nt).forEach(t => {
                            e.a11y[t] = Nt[t].bind(e);
                        });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
                    },
                    toEdge() {
                        const e = this;
                        e.params.a11y.enabled && e.a11y.updateNavigation();
                    },
                    fromEdge() {
                        const e = this;
                        e.params.a11y.enabled && e.a11y.updateNavigation();
                    },
                    paginationUpdate() {
                        const e = this;
                        e.params.a11y.enabled && e.a11y.updatePagination();
                    },
                    destroy() {
                        const e = this;
                        e.params.a11y.enabled && e.a11y.destroy();
                    }
                }
            };
            const Bt = {
                init() {
                    const e = this;
                    if (!e.params.history) return;
                    if (!o.history || !o.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
                    const t = e.history;
                    (t.initialized = !0),
                        (t.paths = Bt.getPathValues()),
                        (t.paths.key || t.paths.value) &&
                            (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || o.addEventListener("popstate", e.history.setHistoryPopState));
                },
                destroy() {
                    const e = this;
                    e.params.history.replaceState || o.removeEventListener("popstate", e.history.setHistoryPopState);
                },
                setHistoryPopState() {
                    const e = this;
                    (e.history.paths = Bt.getPathValues()), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
                },
                getPathValues() {
                    const e = o.location.pathname
                            .slice(1)
                            .split("/")
                            .filter(e => "" !== e),
                        t = e.length,
                        s = e[t - 2],
                        a = e[t - 1];
                    return { key: s, value: a };
                },
                setHistory(e, t) {
                    const s = this;
                    if (!s.history.initialized || !s.params.history.enabled) return;
                    const a = s.slides.eq(t);
                    let i = Bt.slugify(a.attr("data-history"));
                    o.location.pathname.includes(e) || (i = `${e}/${i}`);
                    const n = o.history.state;
                    (n && n.value === i) || (s.params.history.replaceState ? o.history.replaceState({ value: i }, null, i) : o.history.pushState({ value: i }, null, i));
                },
                slugify(e) {
                    return e
                        .toString()
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]+/g, "")
                        .replace(/--+/g, "-")
                        .replace(/^-+/, "")
                        .replace(/-+$/, "");
                },
                scrollToSlide(e, t, s) {
                    const a = this;
                    if (t)
                        for (let i = 0, n = a.slides.length; i < n; i += 1) {
                            const n = a.slides.eq(i),
                                r = Bt.slugify(n.attr("data-history"));
                            if (r === t && !n.hasClass(a.params.slideDuplicateClass)) {
                                const t = n.index();
                                a.slideTo(t, e, s);
                            }
                        }
                    else a.slideTo(0, e, s);
                }
            };
            var Ht = {
                name: "history",
                params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                create() {
                    const e = this;
                    U.extend(e, {
                        history: {
                            init: Bt.init.bind(e),
                            setHistory: Bt.setHistory.bind(e),
                            setHistoryPopState: Bt.setHistoryPopState.bind(e),
                            scrollToSlide: Bt.scrollToSlide.bind(e),
                            destroy: Bt.destroy.bind(e)
                        }
                    });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.history.enabled && e.history.init();
                    },
                    destroy() {
                        const e = this;
                        e.params.history.enabled && e.history.destroy();
                    },
                    transitionEnd() {
                        const e = this;
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
                    }
                }
            };
            const Xt = {
                onHashCange() {
                    const e = this,
                        t = r.location.hash.replace("#", ""),
                        s = e.slides.eq(e.activeIndex).attr("data-hash");
                    if (t !== s) {
                        const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                        if ("undefined" === typeof s) return;
                        e.slideTo(s);
                    }
                },
                setHash() {
                    const e = this;
                    if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                        if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || "");
                        else {
                            const t = e.slides.eq(e.activeIndex),
                                s = t.attr("data-hash") || t.attr("data-history");
                            r.location.hash = s || "";
                        }
                },
                init() {
                    const e = this;
                    if (!e.params.hashNavigation.enabled || (e.params.history && e.params.history.enabled)) return;
                    e.hashNavigation.initialized = !0;
                    const t = r.location.hash.replace("#", "");
                    if (t) {
                        const s = 0;
                        for (let a = 0, i = e.slides.length; a < i; a += 1) {
                            const i = e.slides.eq(a),
                                n = i.attr("data-hash") || i.attr("data-history");
                            if (n === t && !i.hasClass(e.params.slideDuplicateClass)) {
                                const t = i.index();
                                e.slideTo(t, s, e.params.runCallbacksOnInit, !0);
                            }
                        }
                    }
                    e.params.hashNavigation.watchState && d(o).on("hashchange", e.hashNavigation.onHashCange);
                },
                destroy() {
                    const e = this;
                    e.params.hashNavigation.watchState && d(o).off("hashchange", e.hashNavigation.onHashCange);
                }
            };
            var Yt = {
                name: "hash-navigation",
                params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                create() {
                    const e = this;
                    U.extend(e, { hashNavigation: { initialized: !1, init: Xt.init.bind(e), destroy: Xt.destroy.bind(e), setHash: Xt.setHash.bind(e), onHashCange: Xt.onHashCange.bind(e) } });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.init();
                    },
                    destroy() {
                        const e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
                    },
                    transitionEnd() {
                        const e = this;
                        e.hashNavigation.initialized && e.hashNavigation.setHash();
                    }
                }
            };
            const Vt = {
                run() {
                    const e = this,
                        t = e.slides.eq(e.activeIndex);
                    let s = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                        (e.autoplay.timeout = U.nextTick(() => {
                            e.params.autoplay.reverseDirection
                                ? e.params.loop
                                    ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                    : e.isBeginning
                                    ? e.params.autoplay.stopOnLastSlide
                                        ? e.autoplay.stop()
                                        : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))
                                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.params.loop
                                ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.isEnd
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                                : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
                        }, s));
                },
                start() {
                    const e = this;
                    return "undefined" === typeof e.autoplay.timeout && (!e.autoplay.running && ((e.autoplay.running = !0), e.emit("autoplayStart"), e.autoplay.run(), !0));
                },
                stop() {
                    const e = this;
                    return (
                        !!e.autoplay.running &&
                        ("undefined" !== typeof e.autoplay.timeout &&
                            (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit("autoplayStop"), !0))
                    );
                },
                pause(e) {
                    const t = this;
                    t.autoplay.running &&
                        (t.autoplay.paused ||
                            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                            (t.autoplay.paused = !0),
                            0 !== e && t.params.autoplay.waitForTransition
                                ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd))
                                : ((t.autoplay.paused = !1), t.autoplay.run())));
                }
            };
            var Ft = {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                create() {
                    const e = this;
                    U.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: Vt.run.bind(e),
                            start: Vt.start.bind(e),
                            stop: Vt.stop.bind(e),
                            pause: Vt.pause.bind(e),
                            onTransitionEnd(t) {
                                e &&
                                    !e.destroyed &&
                                    e.$wrapperEl &&
                                    t.target === this &&
                                    (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd),
                                    e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd),
                                    (e.autoplay.paused = !1),
                                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                            }
                        }
                    });
                },
                on: {
                    init() {
                        const e = this;
                        e.params.autoplay.enabled && e.autoplay.start();
                    },
                    beforeTransitionStart(e, t) {
                        const s = this;
                        s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop());
                    },
                    sliderFirstMove() {
                        const e = this;
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
                    },
                    destroy() {
                        const e = this;
                        e.autoplay.running && e.autoplay.stop();
                    }
                }
            };
            const Rt = {
                setTranslate() {
                    const e = this,
                        { slides: t } = e;
                    for (let s = 0; s < t.length; s += 1) {
                        const t = e.slides.eq(s),
                            a = t[0].swiperSlideOffset;
                        let i = -a;
                        e.params.virtualTranslate || (i -= e.translate);
                        let n = 0;
                        e.isHorizontal() || ((n = i), (i = 0));
                        const r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                        t.css({ opacity: r }).transform(`translate3d(${i}px, ${n}px, 0px)`);
                    }
                },
                setTransition(e) {
                    const t = this,
                        { slides: s, $wrapperEl: a } = t;
                    if ((s.transition(e), t.params.virtualTranslate && 0 !== e)) {
                        let e = !1;
                        s.transitionEnd(() => {
                            if (e) return;
                            if (!t || t.destroyed) return;
                            (e = !0), (t.animating = !1);
                            const s = ["webkitTransitionEnd", "transitionend"];
                            for (let e = 0; e < s.length; e += 1) a.trigger(s[e]);
                        });
                    }
                }
            };
            var qt = {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create() {
                    const e = this;
                    U.extend(e, { fadeEffect: { setTranslate: Rt.setTranslate.bind(e), setTransition: Rt.setTransition.bind(e) } });
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("fade" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}fade`);
                        const t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        U.extend(e.params, t), U.extend(e.originalParams, t);
                    },
                    setTranslate() {
                        const e = this;
                        "fade" === e.params.effect && e.fadeEffect.setTranslate();
                    },
                    setTransition(e) {
                        const t = this;
                        "fade" === t.params.effect && t.fadeEffect.setTransition(e);
                    }
                }
            };
            const Wt = {
                setTranslate() {
                    const e = this,
                        { $el: t, $wrapperEl: s, slides: a, width: i, height: n, rtlTranslate: r, size: o } = e,
                        l = e.params.cubeEffect,
                        c = e.isHorizontal(),
                        p = e.virtual && e.params.virtual.enabled;
                    let u,
                        h = 0;
                    l.shadow &&
                        (c
                            ? ((u = s.find(".swiper-cube-shadow")), 0 === u.length && ((u = d('<div class="swiper-cube-shadow"></div>')), s.append(u)), u.css({ height: `${i}px` }))
                            : ((u = t.find(".swiper-cube-shadow")), 0 === u.length && ((u = d('<div class="swiper-cube-shadow"></div>')), t.append(u))));
                    for (let f = 0; f < a.length; f += 1) {
                        const e = a.eq(f);
                        let t = f;
                        p && (t = parseInt(e.attr("data-swiper-slide-index"), 10));
                        let s = 90 * t,
                            i = Math.floor(s / 360);
                        r && ((s = -s), (i = Math.floor(-s / 360)));
                        const n = Math.max(Math.min(e[0].progress, 1), -1);
                        let u = 0,
                            m = 0,
                            g = 0;
                        t % 4 === 0
                            ? ((u = 4 * -i * o), (g = 0))
                            : (t - 1) % 4 === 0
                            ? ((u = 0), (g = 4 * -i * o))
                            : (t - 2) % 4 === 0
                            ? ((u = o + 4 * i * o), (g = o))
                            : (t - 3) % 4 === 0 && ((u = -o), (g = 3 * o + 4 * o * i)),
                            r && (u = -u),
                            c || ((m = u), (u = 0));
                        const v = `rotateX(${c ? 0 : -s}deg) rotateY(${c ? s : 0}deg) translate3d(${u}px, ${m}px, ${g}px)`;
                        if ((n <= 1 && n > -1 && ((h = 90 * t + 90 * n), r && (h = 90 * -t - 90 * n)), e.transform(v), l.slideShadows)) {
                            let t = c ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                s = c ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                            0 === t.length && ((t = d(`<div class="swiper-slide-shadow-${c ? "left" : "top"}"></div>`)), e.append(t)),
                                0 === s.length && ((s = d(`<div class="swiper-slide-shadow-${c ? "right" : "bottom"}"></div>`)), e.append(s)),
                                t.length && (t[0].style.opacity = Math.max(-n, 0)),
                                s.length && (s[0].style.opacity = Math.max(n, 0));
                        }
                    }
                    if (
                        (s.css({
                            "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                            "-moz-transform-origin": `50% 50% -${o / 2}px`,
                            "-ms-transform-origin": `50% 50% -${o / 2}px`,
                            "transform-origin": `50% 50% -${o / 2}px`
                        }),
                        l.shadow)
                    )
                        if (c) u.transform(`translate3d(0px, ${i / 2 + l.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${l.shadowScale})`);
                        else {
                            const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                                t = 1.5 - (Math.sin((2 * e * Math.PI) / 360) / 2 + Math.cos((2 * e * Math.PI) / 360) / 2),
                                s = l.shadowScale,
                                a = l.shadowScale / t,
                                i = l.shadowOffset;
                            u.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`);
                        }
                    const m = Ke.isSafari || Ke.isUiWebView ? -o / 2 : 0;
                    s.transform(`translate3d(0px,0,${m}px) rotateX(${e.isHorizontal() ? 0 : h}deg) rotateY(${e.isHorizontal() ? -h : 0}deg)`);
                },
                setTransition(e) {
                    const t = this,
                        { $el: s, slides: a } = t;
                    a
                        .transition(e)
                        .find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
                        .transition(e),
                        t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
                }
            };
            var jt = {
                name: "effect-cube",
                params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                create() {
                    const e = this;
                    U.extend(e, { cubeEffect: { setTranslate: Wt.setTranslate.bind(e), setTransition: Wt.setTransition.bind(e) } });
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("cube" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}cube`), e.classNames.push(`${e.params.containerModifierClass}3d`);
                        const t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                        U.extend(e.params, t), U.extend(e.originalParams, t);
                    },
                    setTranslate() {
                        const e = this;
                        "cube" === e.params.effect && e.cubeEffect.setTranslate();
                    },
                    setTransition(e) {
                        const t = this;
                        "cube" === t.params.effect && t.cubeEffect.setTransition(e);
                    }
                }
            };
            const _t = {
                setTranslate() {
                    const e = this,
                        { slides: t, rtlTranslate: s } = e;
                    for (let a = 0; a < t.length; a += 1) {
                        const i = t.eq(a);
                        let n = i[0].progress;
                        e.params.flipEffect.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                        const r = i[0].swiperSlideOffset,
                            o = -180 * n;
                        let l = o,
                            c = 0,
                            p = -r,
                            u = 0;
                        if ((e.isHorizontal() ? s && (l = -l) : ((u = p), (p = 0), (c = -l), (l = 0)), (i[0].style.zIndex = -Math.abs(Math.round(n)) + t.length), e.params.flipEffect.slideShadows)) {
                            let t = e.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                s = e.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                            0 === t.length && ((t = d(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "left" : "top"}"></div>`)), i.append(t)),
                                0 === s.length && ((s = d(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "right" : "bottom"}"></div>`)), i.append(s)),
                                t.length && (t[0].style.opacity = Math.max(-n, 0)),
                                s.length && (s[0].style.opacity = Math.max(n, 0));
                        }
                        i.transform(`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${l}deg)`);
                    }
                },
                setTransition(e) {
                    const t = this,
                        { slides: s, activeIndex: a, $wrapperEl: i } = t;
                    if (
                        (s
                            .transition(e)
                            .find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
                            .transition(e),
                        t.params.virtualTranslate && 0 !== e)
                    ) {
                        let e = !1;
                        s.eq(a).transitionEnd(function() {
                            if (e) return;
                            if (!t || t.destroyed) return;
                            (e = !0), (t.animating = !1);
                            const s = ["webkitTransitionEnd", "transitionend"];
                            for (let e = 0; e < s.length; e += 1) i.trigger(s[e]);
                        });
                    }
                }
            };
            var Ut = {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create() {
                    const e = this;
                    U.extend(e, { flipEffect: { setTranslate: _t.setTranslate.bind(e), setTransition: _t.setTransition.bind(e) } });
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("flip" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}flip`), e.classNames.push(`${e.params.containerModifierClass}3d`);
                        const t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        U.extend(e.params, t), U.extend(e.originalParams, t);
                    },
                    setTranslate() {
                        const e = this;
                        "flip" === e.params.effect && e.flipEffect.setTranslate();
                    },
                    setTransition(e) {
                        const t = this;
                        "flip" === t.params.effect && t.flipEffect.setTransition(e);
                    }
                }
            };
            const Kt = {
                setTranslate() {
                    const e = this,
                        { width: t, height: s, slides: a, $wrapperEl: i, slidesSizesGrid: n } = e,
                        r = e.params.coverflowEffect,
                        o = e.isHorizontal(),
                        l = e.translate,
                        c = o ? t / 2 - l : s / 2 - l,
                        p = o ? r.rotate : -r.rotate,
                        u = r.depth;
                    for (let h = 0, m = a.length; h < m; h += 1) {
                        const e = a.eq(h),
                            t = n[h],
                            s = e[0].swiperSlideOffset,
                            i = ((c - s - t / 2) / t) * r.modifier;
                        let l = o ? p * i : 0,
                            m = o ? 0 : p * i,
                            f = -u * Math.abs(i),
                            g = o ? 0 : r.stretch * i,
                            v = o ? r.stretch * i : 0;
                        Math.abs(v) < 0.001 && (v = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(f) < 0.001 && (f = 0), Math.abs(l) < 0.001 && (l = 0), Math.abs(m) < 0.001 && (m = 0);
                        const b = `translate3d(${v}px,${g}px,${f}px)  rotateX(${m}deg) rotateY(${l}deg)`;
                        if ((e.transform(b), (e[0].style.zIndex = 1 - Math.abs(Math.round(i))), r.slideShadows)) {
                            let t = o ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                s = o ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                            0 === t.length && ((t = d(`<div class="swiper-slide-shadow-${o ? "left" : "top"}"></div>`)), e.append(t)),
                                0 === s.length && ((s = d(`<div class="swiper-slide-shadow-${o ? "right" : "bottom"}"></div>`)), e.append(s)),
                                t.length && (t[0].style.opacity = i > 0 ? i : 0),
                                s.length && (s[0].style.opacity = -i > 0 ? -i : 0);
                        }
                    }
                    if (K.pointerEvents || K.prefixedPointerEvents) {
                        const e = i[0].style;
                        e.perspectiveOrigin = `${c}px 50%`;
                    }
                },
                setTransition(e) {
                    const t = this;
                    t.slides
                        .transition(e)
                        .find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
                        .transition(e);
                }
            };
            var Jt = {
                name: "effect-coverflow",
                params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
                create() {
                    const e = this;
                    U.extend(e, { coverflowEffect: { setTranslate: Kt.setTranslate.bind(e), setTransition: Kt.setTransition.bind(e) } });
                },
                on: {
                    beforeInit() {
                        const e = this;
                        "coverflow" === e.params.effect &&
                            (e.classNames.push(`${e.params.containerModifierClass}coverflow`),
                            e.classNames.push(`${e.params.containerModifierClass}3d`),
                            (e.params.watchSlidesProgress = !0),
                            (e.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate() {
                        const e = this;
                        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
                    },
                    setTransition(e) {
                        const t = this;
                        "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e);
                    }
                }
            };
            const Zt = {
                init() {
                    const e = this,
                        { thumbs: t } = e.params,
                        s = e.constructor;
                    t.swiper instanceof s
                        ? ((e.thumbs.swiper = t.swiper),
                          U.extend(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                          U.extend(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                        : U.isObject(t.swiper) &&
                          ((e.thumbs.swiper = new s(U.extend({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (e.thumbs.swiperCreated = !0)),
                        e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                        e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
                },
                onThumbClick() {
                    const e = this,
                        t = e.thumbs.swiper;
                    if (!t) return;
                    const s = t.clickedIndex,
                        a = t.clickedSlide;
                    if (a && d(a).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
                    if ("undefined" === typeof s || null === s) return;
                    let i;
                    if (((i = t.params.loop ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s), e.params.loop)) {
                        let t = e.activeIndex;
                        e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), (e._clientLeft = e.$wrapperEl[0].clientLeft), (t = e.activeIndex));
                        const s = e.slides
                                .eq(t)
                                .prevAll(`[data-swiper-slide-index="${i}"]`)
                                .eq(0)
                                .index(),
                            a = e.slides
                                .eq(t)
                                .nextAll(`[data-swiper-slide-index="${i}"]`)
                                .eq(0)
                                .index();
                        i = "undefined" === typeof s ? a : "undefined" === typeof a ? s : a - t < t - s ? a : s;
                    }
                    e.slideTo(i);
                },
                update(e) {
                    const t = this,
                        s = t.thumbs.swiper;
                    if (!s) return;
                    const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                    if (t.realIndex !== s.realIndex) {
                        let i,
                            n = s.activeIndex;
                        if (s.params.loop) {
                            s.slides.eq(n).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft), (n = s.activeIndex));
                            const e = s.slides
                                    .eq(n)
                                    .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                                    .eq(0)
                                    .index(),
                                a = s.slides
                                    .eq(n)
                                    .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                                    .eq(0)
                                    .index();
                            i = "undefined" === typeof e ? a : "undefined" === typeof a ? e : a - n === n - e ? n : a - n < n - e ? a : e;
                        } else i = t.realIndex;
                        s.visibleSlidesIndexes.indexOf(i) < 0 &&
                            (s.params.centeredSlides ? (i = i > n ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1) : i > n && (i = i - a + 1), s.slideTo(i, e ? 0 : void 0));
                    }
                    let i = 1;
                    const n = t.params.thumbs.slideThumbActiveClass;
                    if ((t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), s.slides.removeClass(n), s.params.loop))
                        for (let r = 0; r < i; r += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + r}"]`).addClass(n);
                    else for (let r = 0; r < i; r += 1) s.slides.eq(t.realIndex + r).addClass(n);
                }
            };
            var Qt = {
                name: "thumbs",
                params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                create() {
                    const e = this;
                    U.extend(e, { thumbs: { swiper: null, init: Zt.init.bind(e), update: Zt.update.bind(e), onThumbClick: Zt.onThumbClick.bind(e) } });
                },
                on: {
                    beforeInit() {
                        const e = this,
                            { thumbs: t } = e.params;
                        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
                    },
                    slideChange() {
                        const e = this;
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    update() {
                        const e = this;
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    resize() {
                        const e = this;
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    observerUpdate() {
                        const e = this;
                        e.thumbs.swiper && e.thumbs.update();
                    },
                    setTransition(e) {
                        const t = this,
                            s = t.thumbs.swiper;
                        s && s.setTransition(e);
                    },
                    beforeDestroy() {
                        const e = this,
                            t = e.thumbs.swiper;
                        t && e.thumbs.swiperCreated && t && t.destroy();
                    }
                }
            };
            const es = [dt, ct, pt, ut, mt, gt, bt, xt, Tt, St, Mt, Pt, Lt, Dt, At, Gt, Ht, Yt, Ft, qt, jt, Ut, Jt, Qt];
            "undefined" === typeof lt.use && ((lt.use = lt.Class.use), (lt.installModule = lt.Class.installModule)), lt.use(es);
            var ts = lt,
                ss = {
                    data: function() {
                        return { bannerList: [], productList: [], slidename: "slide-back" };
                    },
                    components: {
                        Headers: function() {
                            return s.e("chunk-a53566ce").then(s.bind(null, "0418"));
                        },
                        Footers: function() {
                            return s.e("chunk-7105fc5a").then(s.bind(null, "fd2d"));
                        },
                        Message: function() {
                            return s.e("chunk-083923af").then(s.bind(null, "0f7d"));
                        }
                    },
                    mounted: function() {
                        new ts(".swiper-container", { pagination: ".swiper-pagination", paginationClickable: !0, spaceBetween: 30, autoplay: 1500, effect: "fade", observer: !0, observeParents: !0 }),
                            this.getGoodsList(),
                            this.getBannerList();
                        var e = ["category", "cart", "member"];
                        e.includes(this.$store.state.comname) ? (this.slidename = "slide-back") : (this.slidename = "slide-go"), this.setComname("index");
                    },
                    methods: {
                        changeLang: function() {
                            "zh" == this.$i18n.locale ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
                        },
                        getGoodsList: (function() {
                            var e = Object(n["a"])(
                                regeneratorRuntime.mark(function e() {
                                    var t;
                                    return regeneratorRuntime.wrap(
                                        function(e) {
                                            while (1)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), this.$http.get("/api/homedata");
                                                    case 2:
                                                        (t = e.sent), (this.productList = t.data.data);
                                                    case 4:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            );
                            function t() {
                                return e.apply(this, arguments);
                            }
                            return t;
                        })(),
                        getBannerList: (function() {
                            var e = Object(n["a"])(
                                regeneratorRuntime.mark(function e() {
                                    var t;
                                    return regeneratorRuntime.wrap(
                                        function(e) {
                                            while (1)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), this.$http.get("/api/bannerdata");
                                                    case 2:
                                                        (t = e.sent), (this.bannerList = t.data.data);
                                                    case 4:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            );
                            function t() {
                                return e.apply(this, arguments);
                            }
                            return t;
                        })(),
                        onGoodsDetail: function(e, t) {
                            this.$router.push({ path: "/detail", query: { id: t } }), this.setGoods(e);
                        },
                        onAddCart: function(e) {
                            this.$store.state.carts.includes(e)
                                ? (this.$refs.message.messageShow = !0)
                                : this.$refs.footer.showNum || ((this.cartLength = this.$store.state.carts.length + 1), (this.$refs.footer.showNum = !0), this.setCarts(e));
                        },
                        onCategory: function(e) {
                            this.setTabindex(e), this.$router.push("./category");
                        }
                    }
                },
                as = ss,
                is = (s("5430"), s("2877")),
                ns = Object(is["a"])(as, a, i, !1, null, "60d621e2", null);
            t["default"] = ns.exports;
        },
        d2c8: function(e, t, s) {
            var a = s("aae3"),
                i = s("be13");
            e.exports = function(e, t, s) {
                if (a(t)) throw TypeError("String#" + s + " doesn't accept regex!");
                return String(i(e));
            };
        }
    }
]);
//# sourceMappingURL=chunk-1d4e1908.c965fb3d.js.map
