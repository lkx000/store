(function(o) {
    function e(e) {
        for (var t, r, c = e[0], s = e[1], u = e[2], i = 0, m = []; i < c.length; i++) (r = c[i]), d[r] && m.push(d[r][0]), (d[r] = 0);
        for (t in s) Object.prototype.hasOwnProperty.call(s, t) && (o[t] = s[t]);
        f && f(e);
        while (m.length) m.shift()();
        return a.push.apply(a, u || []), n();
    }
    function n() {
        for (var o, e = 0; e < a.length; e++) {
            for (var n = a[e], t = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== d[c] && (t = !1);
            }
            t && (a.splice(e--, 1), (o = s((s.s = n[0]))));
        }
        return o;
    }
    var t = {},
        r = { app: 0 },
        d = { app: 0 },
        a = [];
    function c(o) {
        return (
            s.p +
            "js/" +
            ({}[o] || o) +
            "." +
            {
                "chunk-015b93b2": "b3f726af",
                "chunk-05bb57f0": "de16a0bc",
                "chunk-14e3cb01": "29d2e229",
                "chunk-1d4e1908": "c965fb3d",
                "chunk-23978c54": "2b55f052",
                "chunk-240cf4ac": "7eeb11c8",
                "chunk-33794be7": "c6939d6f",
                "chunk-54df9501": "b759626d",
                "chunk-5c971c26": "135eb2f9",
                "chunk-7f1b7b00": "4aca5178",
                "chunk-b30bc5f4": "7e3be6e2",
                "chunk-b5047ff4": "2bbf5859",
                "chunk-d71c8c74": "dde5d56d",
                "chunk-fba6d610": "9e0c60d7",
                "chunk-076b3b1a": "faca5bb9",
                "chunk-09b83ebe": "ddf998c3",
                "chunk-083923af": "5c7ddc40",
                "chunk-7105fc5a": "687248e9",
                "chunk-a53566ce": "72fda83d",
                "chunk-31cdc976": "cb75af32"
            }[o] +
            ".js"
        );
    }
    function s(e) {
        if (t[e]) return t[e].exports;
        var n = (t[e] = { i: e, l: !1, exports: {} });
        return o[e].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
    }
    (s.e = function(o) {
        var e = [],
            n = {
                "chunk-015b93b2": 1,
                "chunk-05bb57f0": 1,
                "chunk-14e3cb01": 1,
                "chunk-1d4e1908": 1,
                "chunk-23978c54": 1,
                "chunk-33794be7": 1,
                "chunk-54df9501": 1,
                "chunk-7f1b7b00": 1,
                "chunk-d71c8c74": 1,
                "chunk-fba6d610": 1,
                "chunk-076b3b1a": 1,
                "chunk-09b83ebe": 1,
                "chunk-083923af": 1,
                "chunk-7105fc5a": 1,
                "chunk-a53566ce": 1,
                "chunk-31cdc976": 1
            };
        r[o]
            ? e.push(r[o])
            : 0 !== r[o] &&
              n[o] &&
              e.push(
                  (r[o] = new Promise(function(e, n) {
                      for (
                          var t =
                                  "css/" +
                                  ({}[o] || o) +
                                  "." +
                                  {
                                      "chunk-015b93b2": "7f9b13aa",
                                      "chunk-05bb57f0": "f2eab262",
                                      "chunk-14e3cb01": "40ab6f0f",
                                      "chunk-1d4e1908": "3811cb8c",
                                      "chunk-23978c54": "bef37a9a",
                                      "chunk-240cf4ac": "31d6cfe0",
                                      "chunk-33794be7": "1350314d",
                                      "chunk-54df9501": "884954c7",
                                      "chunk-5c971c26": "31d6cfe0",
                                      "chunk-7f1b7b00": "4233de7f",
                                      "chunk-b30bc5f4": "31d6cfe0",
                                      "chunk-b5047ff4": "31d6cfe0",
                                      "chunk-d71c8c74": "54259bc5",
                                      "chunk-fba6d610": "0779ef81",
                                      "chunk-076b3b1a": "83603060",
                                      "chunk-09b83ebe": "aa619fe1",
                                      "chunk-083923af": "5de47347",
                                      "chunk-7105fc5a": "aa7c92e9",
                                      "chunk-a53566ce": "b6da9b54",
                                      "chunk-31cdc976": "95d03452"
                                  }[o] +
                                  ".css",
                              d = s.p + t,
                              a = document.getElementsByTagName("link"),
                              c = 0;
                          c < a.length;
                          c++
                      ) {
                          var u = a[c],
                              i = u.getAttribute("data-href") || u.getAttribute("href");
                          if ("stylesheet" === u.rel && (i === t || i === d)) return e();
                      }
                      var m = document.getElementsByTagName("style");
                      for (c = 0; c < m.length; c++) {
                          (u = m[c]), (i = u.getAttribute("data-href"));
                          if (i === t || i === d) return e();
                      }
                      var f = document.createElement("link");
                      (f.rel = "stylesheet"),
                          (f.type = "text/css"),
                          (f.onload = e),
                          (f.onerror = function(e) {
                              var t = (e && e.target && e.target.src) || d,
                                  a = new Error("Loading CSS chunk " + o + " failed.\n(" + t + ")");
                              (a.request = t), delete r[o], f.parentNode.removeChild(f), n(a);
                          }),
                          (f.href = d);
                      var g = document.getElementsByTagName("head")[0];
                      g.appendChild(f);
                  }).then(function() {
                      r[o] = 0;
                  }))
              );
        var t = d[o];
        if (0 !== t)
            if (t) e.push(t[2]);
            else {
                var a = new Promise(function(e, n) {
                    t = d[o] = [e, n];
                });
                e.push((t[2] = a));
                var u,
                    i = document.createElement("script");
                (i.charset = "utf-8"),
                    (i.timeout = 120),
                    s.nc && i.setAttribute("nonce", s.nc),
                    (i.src = c(o)),
                    (u = function(e) {
                        (i.onerror = i.onload = null), clearTimeout(m);
                        var n = d[o];
                        if (0 !== n) {
                            if (n) {
                                var t = e && ("load" === e.type ? "missing" : e.type),
                                    r = e && e.target && e.target.src,
                                    a = new Error("Loading chunk " + o + " failed.\n(" + t + ": " + r + ")");
                                (a.type = t), (a.request = r), n[1](a);
                            }
                            d[o] = void 0;
                        }
                    });
                var m = setTimeout(function() {
                    u({ type: "timeout", target: i });
                }, 12e4);
                (i.onerror = i.onload = u), document.head.appendChild(i);
            }
        return Promise.all(e);
    }),
        (s.m = o),
        (s.c = t),
        (s.d = function(o, e, n) {
            s.o(o, e) || Object.defineProperty(o, e, { enumerable: !0, get: n });
        }),
        (s.r = function(o) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
        }),
        (s.t = function(o, e) {
            if ((1 & e && (o = s(o)), 8 & e)) return o;
            if (4 & e && "object" === typeof o && o && o.__esModule) return o;
            var n = Object.create(null);
            if ((s.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: o }), 2 & e && "string" != typeof o))
                for (var t in o)
                    s.d(
                        n,
                        t,
                        function(e) {
                            return o[e];
                        }.bind(null, t)
                    );
            return n;
        }),
        (s.n = function(o) {
            var e =
                o && o.__esModule
                    ? function() {
                          return o["default"];
                      }
                    : function() {
                          return o;
                      };
            return s.d(e, "a", e), e;
        }),
        (s.o = function(o, e) {
            return Object.prototype.hasOwnProperty.call(o, e);
        }),
        (s.p = ""),
        (s.oe = function(o) {
            throw (console.error(o), o);
        });
    var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        i = u.push.bind(u);
    (u.push = e), (u = u.slice());
    for (var m = 0; m < u.length; m++) e(u[m]);
    var f = i;
    a.push([0, "chunk-vendors"]), n();
})({
    0: function(o, e, n) {
        o.exports = n("56d7");
    },
    "3fab": function(o, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "m", function() {
                return t;
            });
        var t = {
            HeaderIndex: "FancyStore",
            HeaderCategoty: "Category",
            HeaderCart: "Cart",
            HeaderMember: "Me",
            HeaderDetail: "Detail",
            local: "中文",
            FooterIndex: "Home",
            FooterCategory: "Categoty",
            FooterCart: "Cart",
            FooterMember: "Me",
            member: { info: "Info", order: "Order", address: "Address" }
        };
    },
    "56d7": function(o, e, n) {
        "use strict";
        n.r(e);
        var t = {};
        n.r(t),
            n.d(t, "goods", function() {
                return G;
            }),
            n.d(t, "carts", function() {
                return _;
            }),
            n.d(t, "orders", function() {
                return I;
            }),
            n.d(t, "pays", function() {
                return k;
            }),
            n.d(t, "address", function() {
                return N;
            }),
            n.d(t, "chooseaddress", function() {
                return y;
            }),
            n.d(t, "ischoose", function() {
                return C;
            }),
            n.d(t, "tabindex", function() {
                return j;
            }),
            n.d(t, "comname", function() {
                return v;
            }),
            n.d(t, "ordercur", function() {
                return P;
            }),
            n.d(t, "ordertab", function() {
                return S;
            });
        var r = n("cebc"),
            d = (n("cadf"), n("551c"), n("f751"), n("097d"), n("2b0e")),
            a = function() {
                var o = this,
                    e = o.$createElement,
                    n = o._self._c || e;
                return n("div", { attrs: { id: "app" } }, [n("router-view")], 1);
            },
            c = [],
            s = {},
            u = s,
            i = (n("7c55"), n("2877")),
            m = Object(i["a"])(u, a, c, !1, null, null, null),
            f = m.exports,
            g = n("8c4f");
        d["a"].use(g["a"]);
        var h,
            b = new g["a"]({
                routes: [
                    {
                        path: "/",
                        component: function() {
                            return n.e("chunk-1d4e1908").then(n.bind(null, "bb51"));
                        }
                    },
                    {
                        path: "/index",
                        component: function() {
                            return n.e("chunk-1d4e1908").then(n.bind(null, "bb51"));
                        }
                    },
                    {
                        path: "/category",
                        component: function() {
                            return n.e("chunk-05bb57f0").then(n.bind(null, "bb511"));
                        }
                    },
                    {
                        path: "/cart",
                        component: function() {
                            return n.e("chunk-54df9501").then(n.bind(null, "c228"));
                        }
                    },
                    {
                        path: "/member",
                        component: function() {
                            return n.e("chunk-33794be7").then(n.bind(null, "7319"));
                        }
                    },
                    {
                        path: "/info",
                        component: function() {
                            return n.e("chunk-7f1b7b00").then(n.bind(null, "bc66"));
                        }
                    },
                    {
                        path: "/order",
                        component: function() {
                            return n.e("chunk-23978c54").then(n.bind(null, "f86d"));
                        }
                    },
                    {
                        path: "/address",
                        component: function() {
                            return n.e("chunk-14e3cb01").then(n.bind(null, "d316"));
                        }
                    },
                    {
                        path: "/addaddress",
                        component: function() {
                            return n.e("chunk-d71c8c74").then(n.bind(null, "6bf4"));
                        }
                    },
                    {
                        path: "/detail",
                        component: function() {
                            return n.e("chunk-015b93b2").then(n.bind(null, "6ab7"));
                        }
                    },
                    {
                        path: "/orderwait",
                        component: function() {
                            return n.e("chunk-fba6d610").then(n.bind(null, "c6f0"));
                        }
                    },
                    {
                        path: "/waitpay",
                        component: function() {
                            return n.e("chunk-240cf4ac").then(n.bind(null, "9d38"));
                        }
                    },
                    {
                        path: "/waitdeliver",
                        component: function() {
                            return n.e("chunk-b30bc5f4").then(n.bind(null, "56a6"));
                        }
                    },
                    {
                        path: "/waitreceive",
                        component: function() {
                            return n.e("chunk-5c971c26").then(n.bind(null, "552a"));
                        }
                    },
                    {
                        path: "/orderdown",
                        ccomponent: function() {
                            return n.e("chunk-b5047ff4").then(n.bind(null, "9e7a"));
                        }
                    }
                ]
            }),
            l = n("2f62"),
            p = n("63e0"),
            G = function(o) {
                return o.goods;
            },
            _ = function(o) {
                return o.carts;
            },
            I = function(o) {
                return o.orders;
            },
            k = function(o) {
                return o.pays;
            },
            N = function(o) {
                return o.address;
            },
            y = function(o) {
                return o.chooseaddress;
            },
            C = function(o) {
                return o.ischoose;
            },
            j = function(o) {
                return o.tabindex;
            },
            v = function(o) {
                return o.comname;
            },
            P = function(o) {
                return o.ordercur;
            },
            S = function(o) {
                return o.ordertab;
            },
            T = { address: ["广东省深圳市 南山区"], carts: [{ CategoryId: "1", GoodsName: "默认商品", GoodsPrice: 9, GoodsNum: 1, GoodsImage: "/img/github.png" }], comname: "index", ordercur: 1 },
            E = T,
            O = n("bd86"),
            w = "SET_GOODS",
            x = "SET_CARTS",
            A = "SET_ORDERS",
            R = "SET_PAYS",
            D = "SET_ADDRESS",
            M = "SET_CHOOSEADDRESS",
            H = "SET_ISCHOOSE",
            F = "SET_TABINDEX",
            B = "SET_COMNAME",
            L = "SET_ORDERCUR",
            q = "SET_ORDERTAB",
            U = [],
            $ = [],
            z = ((h = {}),
            Object(O["a"])(h, w, function(o, e) {
                o.goods = e;
            }),
            Object(O["a"])(h, x, function(o, e) {
                U.push(e), (o.carts = U);
            }),
            Object(O["a"])(h, A, function(o, e) {
                o.orders = e;
            }),
            Object(O["a"])(h, R, function(o, e) {
                o.pays = e;
            }),
            Object(O["a"])(h, D, function(o, e) {
                $.push(e), (o.address = $);
            }),
            Object(O["a"])(h, M, function(o, e) {
                o.chooseaddress = e;
            }),
            Object(O["a"])(h, H, function(o, e) {
                o.ischoose = e;
            }),
            Object(O["a"])(h, F, function(o, e) {
                o.tabindex = e;
            }),
            Object(O["a"])(h, B, function(o, e) {
                o.comname = e;
            }),
            Object(O["a"])(h, L, function(o, e) {
                o.ordercur = e;
            }),
            Object(O["a"])(h, q, function(o, e) {
                o.ordertab = e;
            }),
            h),
            J = z,
            V = n("b054"),
            X = n.n(V),
            Q = !1;
        d["a"].use(l["a"]);
        var W = new l["a"].Store({ actions: p, getters: t, state: E, mutations: J, strice: Q, plugins: Q ? [X()()] : [] }),
            Y = n("a925");
        d["a"].use(Y["a"]);
        var K = new Y["a"]({ locale: "zh", messages: { zh: n("9df6"), en: n("3fab") } }),
            Z = n("795b"),
            oo = n.n(Z),
            eo = n("bc3a"),
            no = n.n(eo),
            to = no.a.create();
        to.interceptors.request.use(
            function(o) {
                return (
                    (o.transformRequest = [
                        function(o) {
                            var e = "";
                            for (var n in o) e += encodeURIComponent(n) + "=" + encodeURIComponent(o[n]) + "&";
                            return e;
                        }
                    ]),
                    o
                );
            },
            function(o) {
                return oo.a.reject(o);
            }
        ),
            to.interceptors.response.use(
                function(o) {
                    return o;
                },
                function(o) {
                    return oo.a.reject(o);
                }
            );
        var ro = to,
            ao = n("ca95"),
            co = n.n(ao),
            so = n("283e"),
            uo = n.n(so),
            io = (n("3a34"), n("fe3c")),
            mo = n.n(io),
            fo = n("3652"),
            go = n.n(fo),
            ho = n("2955"),
            bo = n.n(ho),
            lo = null;
        e["default"] = lo;
        (d["a"].prototype.$http = ro),
            n("853b"),
            mo.a.attach(document.body),
            go.a
                .config("https://ce431a99e0884612a053541eef0f2810@sentry.io/1245961", { release: Object({ NODE_ENV: "production", BASE_URL: "" }).RELEASE_VERSION, debug: !0 })
                .addPlugin(bo.a, d["a"])
                .install(),
            d["a"].use(uo.a, { preLoad: 1.3, error: "./img/github.png", loading: "./img/github.png" }),
            d["a"].use(co.a, { name: "v-touch" }),
            (co.a.config.swipe = { direction: "horizontal", threshold: 200 }),
            (d["a"].config.productionTip = !1),
            d["a"].mixin({
                data: function() {
                    return { cartLength: 0, slidename: "slide-go", mainarea: !1 };
                },
                mounted: function() {
                    this.mainarea = !0;
                },
                computed: Object(r["a"])({}, Object(l["b"])(["this.$store.state.comname"])),
                methods: Object(r["a"])({}, Object(l["c"])({ setGoods: "SET_GOODS", setCarts: "SET_CARTS", setTabindex: "SET_TABINDEX", setComname: "SET_COMNAME" }))
            }),
            new d["a"]({
                router: b,
                store: W,
                i18n: K,
                render: function(o) {
                    return o(f);
                }
            }).$mount("#app");
    },
    "5c48": function(o, e, n) {},
    "63e0": function(o, e) {},
    "7c55": function(o, e, n) {
        "use strict";
        var t = n("5c48"),
            r = n.n(t);
        r.a;
    },
    "853b": function(o, e, n) {
        "use strict";
        n.r(e);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var t = n("96eb");
        t.mock("/api/bannerdata", function() {
            return { data: [{ id: "1", img: "./img/goods/swipe_3.jpg" }, { id: "2", img: "./img/goods/swipe_2.jpg" }, { id: "3", img: "./img/goods/swipe_1.jpg" }] };
        }),
            t.mock("/api/homedata", function() {
                return {
                    data: [
                        {
                            Category: { Id: "1", TopText: "休闲零食", TopNum: "one" },
                            SalesProduct: [
                                { CategoryId: "1", GoodsName: "坚果夹心海苔", GoodsPrice: 9, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_one_1.jpg" },
                                { CategoryId: "2", GoodsName: "卤汁牛肉", GoodsPrice: 32, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_one_2.jpg" }
                            ]
                        },
                        {
                            Category: { Id: "2", TopText: "糖果·巧克力", TopNum: "two" },
                            SalesProduct: [
                                { CategoryId: "1", GoodsName: "乐奈牛奶燕麦巧克力 ", GoodsPrice: 78, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_two_1.jpg" },
                                { CategoryId: "2", GoodsName: "牛轧糖", GoodsPrice: 59, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_two_2.jpg" }
                            ]
                        },
                        {
                            Category: { Id: "3", TopText: "饼干·糕点", TopNum: "three" },
                            SalesProduct: [
                                { CategoryId: "1", GoodsName: "苏打饼干 ", GoodsPrice: 61, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_three_1.jpg" },
                                { CategoryId: "2", GoodsName: "可可威化饼干", GoodsPrice: "22", GoodsNum: 1, GoodsImage: "./img/goods/home_floor_three_2.jpg" }
                            ]
                        },
                        {
                            Category: { Id: "4", TopText: "果冻·布丁", TopNum: "four" },
                            SalesProduct: [
                                { CategoryId: "1", GoodsName: "粒粒鲜果冻 ", GoodsPrice: 59, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_four_1.jpg" },
                                { CategoryId: "2", GoodsName: "葡萄果汁软糖", GoodsPrice: 9, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_four_2.jpg" }
                            ]
                        },
                        {
                            Category: { Id: "5", TopText: "坚果·炒货", TopNum: "five" },
                            SalesProduct: [
                                { CategoryId: "1", GoodsName: "夏威夷果", GoodsPrice: 189, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_five_1.jpg" },
                                { CategoryId: "2", GoodsName: "坚果混合", GoodsPrice: 9, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_five_2.jpg" }
                            ]
                        },
                        {
                            Category: { Id: "6", TopText: "膨化·薯片", TopNum: "six" },
                            SalesProduct: [
                                { CategoryId: "1", GoodsName: "风味虾片 ", GoodsPrice: 199, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_six_1.jpg" },
                                { CategoryId: "2", GoodsName: "大胡子烧烤味薯片", GoodsPrice: 28, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_six_2.jpg" }
                            ]
                        }
                    ]
                };
            }),
            t.mock("/api/menudata", function() {
                return { data: [{ cat_name: "休闲零食" }, { cat_name: "糖果·巧克力" }, { cat_name: "饼干·糕点" }, { cat_name: "果冻·布丁" }, { cat_name: "坚果·炒货" }, { cat_name: "膨化·薯片" }] };
            }),
            t.mock("/api/categorydata", function() {
                return {
                    data: [
                        {
                            busines: { business_id: 1, business_name: "休闲零食" },
                            cart: [
                                { CategoryId: "1", GoodsName: "坚果夹心海苔", GoodsPrice: 66, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_one_1.jpg" },
                                { CategoryId: "2", GoodsName: "卤汁牛肉", GoodsPrice: 88, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_one_2.jpg" },
                                { CategoryId: "3", GoodsName: "青豌豆", GoodsPrice: 8, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_one_3.jpg" },
                                { CategoryId: "4", GoodsName: "薯条脆", GoodsPrice: 12, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_one_4.jpg" },
                                { CategoryId: "5", GoodsName: "小米锅巴", GoodsPrice: 50, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_one_5.jpg" },
                                { CategoryId: "6", GoodsName: "碳烤牛肉", GoodsPrice: 80, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_one_6.jpg" }
                            ]
                        },
                        {
                            busines: { business_id: 2, business_name: "糖果巧克力" },
                            cart: [
                                { CategoryId: "1", GoodsName: "乐奈牛奶燕麦巧克力 ", GoodsPrice: 78, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_two_1.jpg" },
                                { CategoryId: "2", GoodsName: "牛轧糖", GoodsPrice: 59, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_two_2.jpg" },
                                { CategoryId: "3", GoodsName: "冲绳黑糖", GoodsPrice: 18, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_two_3.jpg" },
                                { CategoryId: "4", GoodsName: "牛奶抹茶糖", GoodsPrice: 22, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_two_4.jpg" },
                                { CategoryId: "5", GoodsName: "苹果味糖果", GoodsPrice: 59, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_two_5.jpg" },
                                { CategoryId: "6", GoodsName: "松露巧克力", GoodsPrice: 59, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_two_6.jpg" }
                            ]
                        },
                        {
                            busines: { business_id: 1, business_name: "饼干糕点" },
                            cart: [
                                { CategoryId: "1", GoodsName: "苏打饼干 ", GoodsInfo: "单果重约150g-180g 新鲜水果", GoodsPrice: 61, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_three_1.jpg" },
                                {
                                    CategoryId: "2",
                                    GoodsName: "可可威化饼干",
                                    GoodsInfo: "12个 约80mm 总重约2.6kg 新鲜水果 ",
                                    GoodsPrice: "22",
                                    GoodsNum: 1,
                                    GoodsImage: "./img/goods/home_floor_three_2.jpg"
                                }
                            ]
                        },
                        {
                            busines: { business_id: 1, business_name: "果冻布丁" },
                            cart: [
                                {
                                    CategoryId: "1",
                                    GoodsName: "粒粒鲜果冻 ",
                                    GoodsInfo: "一整箱送女友礼盒 74包休闲麻辣零食礼包美味小吃 粉girl1320g",
                                    GoodsPrice: 59,
                                    GoodsNum: 1,
                                    GoodsImage: "./img/goods/home_floor_four_1.jpg"
                                },
                                { CategoryId: "2", GoodsName: "葡萄果汁软糖", GoodsInfo: "特产约辣辣条200g/盒 ", GoodsPrice: 9, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_four_2.jpg" }
                            ]
                        },
                        {
                            busines: { business_id: 1, business_name: "坚果炒货" },
                            cart: [
                                {
                                    CategoryId: "1",
                                    GoodsName: "夏威夷果",
                                    GoodsInfo: "微压蒸汽阀 24小时智能预约 黄晶内胆3L电饭锅MB-WFS3018Q 11.11好货提前抢",
                                    GoodsPrice: 189,
                                    GoodsNum: 1,
                                    GoodsImage: "./img/goods/home_floor_five_1.jpg"
                                },
                                { CategoryId: "2", GoodsName: "坚果混合", GoodsInfo: "坚果混合", GoodsPrice: 9, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_five_2.jpg" }
                            ]
                        },
                        {
                            busines: { business_id: 1, business_name: "膨化薯片" },
                            cart: [
                                {
                                    CategoryId: "1",
                                    GoodsName: "风味虾片 ",
                                    GoodsInfo: "爽肤水乳液眼霜面霜 (补水保湿鲜活水嫩 护肤化妆品女护肤套装） ",
                                    GoodsPrice: 199,
                                    GoodsNum: 1,
                                    GoodsImage: "./img/goods/home_floor_six_1.jpg"
                                },
                                { CategoryId: "2", GoodsName: "大胡子烧烤味薯片", GoodsInfo: "大胡子烧烤味薯片", GoodsPrice: 28, GoodsNum: 1, GoodsImage: "./img/goods/home_floor_six_2.jpg" }
                            ]
                        }
                    ]
                };
            });
    },
    "9df6": function(o, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "m", function() {
                return t;
            });
        var t = {
            HeaderIndex: "零食商店",
            HeaderCategoty: "分类",
            HeaderCart: "购物车",
            HeaderMember: "我的",
            HeaderDetail: "商品详情",
            local: "English",
            FooterIndex: "首页",
            FooterCategory: "分类",
            FooterCart: "购物车",
            FooterMember: "我的",
            member: { info: "我的信息", order: "我的订单", address: "我的地址" }
        };
    }
});
//# sourceMappingURL=app.f3d8c801.js.map
