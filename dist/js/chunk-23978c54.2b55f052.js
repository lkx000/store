(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-23978c54"],
    {
        "30b3": function(e, t, s) {},
        b20a: function(e, t, s) {
            "use strict";
            var a = s("30b3"),
                r = s.n(a);
            r.a;
        },
        f86d: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s(
                        "div",
                        { staticClass: "page orderpage" },
                        [
                            s(
                                "v-touch",
                                {
                                    on: {
                                        swipeleft: function(t) {
                                            e.onSwipeLeft();
                                        },
                                        swiperight: function(t) {
                                            e.onSwipeRight();
                                        }
                                    }
                                },
                                [
                                    s("headersec", { ref: "noback", attrs: { tabname: "我的订单" } }),
                                    s("ordertab", { attrs: { urlRouter: e.$route.path } }),
                                    s("transition", { attrs: { name: e.slidename } }, [
                                        s("div", { directives: [{ name: "show", rawName: "v-show", value: e.mainarea, expression: "mainarea" }], staticClass: "container" }, [
                                            s("div", { directives: [{ name: "show", rawName: "v-show", value: !e.havePage, expression: "!havePage" }] }, [s("nopage")], 1),
                                            s(
                                                "div",
                                                { directives: [{ name: "show", rawName: "v-show", value: e.havePage, expression: "havePage" }], staticClass: "order-item" },
                                                e._l(e.$store.state.pays, function(t, a) {
                                                    return s("div", { key: a }, [
                                                        s("div", { staticClass: "order-top flex-between" }, [s("p", [e._v("订单号xxxxx")]), s("p", [e._v("已支付")])]),
                                                        s("div", { staticClass: "order-content" }, [
                                                            s("div", { staticClass: "flex" }, [
                                                                s("div", { staticClass: "order-img" }, [s("img", { attrs: { src: t.GoodsImage } })]),
                                                                s("div", { staticClass: "order-text" }, [
                                                                    s("p", { staticClass: "goods-name text-ellipsis" }, [e._v(e._s(t.GoodsName))]),
                                                                    s("p", { staticClass: "goods-num" }, [e._v("x" + e._s(t.GoodsNum))]),
                                                                    s("p", { staticClass: "goods-price" }, [e._v("¥" + e._s(t.GoodsPrice))])
                                                                ])
                                                            ])
                                                        ])
                                                    ]);
                                                }),
                                                0
                                            )
                                        ])
                                    ])
                                ],
                                1
                            )
                        ],
                        1
                    );
                },
                r = [],
                i = s("cebc"),
                n = (s("cadf"), s("551c"), s("f751"), s("097d"), s("2f62")),
                o = {
                    data: function() {
                        return { havePage: !1 };
                    },
                    components: {
                        Headersec: function() {
                            return s.e("chunk-09b83ebe").then(s.bind(null, "65d4"));
                        },
                        Nopage: function() {
                            return s.e("chunk-076b3b1a").then(s.bind(null, "7367"));
                        },
                        Ordertab: function() {
                            return s.e("chunk-31cdc976").then(s.bind(null, "beaa"));
                        }
                    },
                    computed: Object(i["a"])({}, Object(n["b"])(["this.$store.state.pays", "this.$store.state.ordercur", "this.$store.state.ordertab"])),
                    mounted: function() {
                        this.setOrdercur(1),
                            void 0 === this.$store.state.pays ? (this.havePage = !1) : (this.havePage = !0),
                            (this.$refs.noback.isBack = !1),
                            this.$store.state.ordercur < this.$store.state.ordertab ? (this.slidename = "slide-back") : (this.slidename = "slide-go"),
                            this.setOrdertab(1);
                    },
                    methods: Object(i["a"])(
                        {
                            onSwipeLeft: function() {
                                this.$router.push("./waitpay");
                            },
                            onSwipeRight: function() {
                                this.$router.push("./orderdown");
                            }
                        },
                        Object(n["c"])({ setOrdercur: "SET_ORDERCUR", setOrdertab: "SET_ORDERTAB" })
                    )
                },
                c = o,
                d = (s("b20a"), s("2877")),
                u = Object(d["a"])(c, a, r, !1, null, "07a08845", null);
            t["default"] = u.exports;
        }
    }
]);
//# sourceMappingURL=chunk-23978c54.2b55f052.js.map
