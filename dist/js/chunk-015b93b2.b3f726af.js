(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-015b93b2"],
    {
        "4e38": function(t, s, a) {
            "use strict";
            var e = a("6a26"),
                o = a.n(e);
            o.a;
        },
        6762: function(t, s, a) {
            "use strict";
            var e = a("5ca1"),
                o = a("c366")(!0);
            e(e.P, "Array", {
                includes: function(t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
            }),
                a("9c6c")("includes");
        },
        "6a26": function(t, s, a) {},
        "6ab7": function(t, s, a) {
            "use strict";
            a.r(s);
            var e = function() {
                    var t = this,
                        s = t.$createElement,
                        a = t._self._c || s;
                    return a(
                        "div",
                        { staticClass: "page" },
                        [
                            a("headersec", { attrs: { tabname: t.$t("m.HeaderDetail") } }),
                            a("transition", { attrs: { name: t.slidename } }, [
                                a("div", { directives: [{ name: "show", rawName: "v-show", value: t.mainarea, expression: "mainarea" }], staticClass: "container" }, [
                                    a("div", { directives: [{ name: "show", rawName: "v-show", value: !t.havePage, expression: "!havePage" }] }, [a("nopage")], 1),
                                    a("div", { directives: [{ name: "show", rawName: "v-show", value: t.havePage, expression: "havePage" }] }, [
                                        a("img", { staticClass: "goodsImg", attrs: { src: t.$store.state.goods.GoodsImage } }),
                                        a("div", { staticClass: "detail-content" }, [
                                            a("p", { staticClass: "goods-name" }, [t._v(t._s(t.$store.state.goods.GoodsName))]),
                                            a("p", { staticClass: "goods-price" }, [t._v("¥" + t._s(t.$store.state.goods.GoodsPrice))])
                                        ])
                                    ])
                                ])
                            ]),
                            a("div", { staticClass: "detail-bottom flex-align-center flex-around" }, [
                                a(
                                    "div",
                                    { staticClass: "toCart" },
                                    [
                                        a("i", { on: { click: t.toCart } }),
                                        a("transition", { attrs: { name: "bullet" } }, [
                                            a("p", { directives: [{ name: "show", rawName: "v-show", value: t.cartNum, expression: "cartNum" }] }, [t._v(t._s(t.cartLength))])
                                        ])
                                    ],
                                    1
                                ),
                                a(
                                    "div",
                                    {
                                        staticClass: "addCart",
                                        on: {
                                            click: function(s) {
                                                t.onCartModel();
                                            }
                                        }
                                    },
                                    [a("span", { staticClass: "tabbar-label" }, [t._v("加入购物车")])]
                                ),
                                a(
                                    "div",
                                    {
                                        staticClass: "external addPay",
                                        on: {
                                            click: function(s) {
                                                t.onBuyModel();
                                            }
                                        }
                                    },
                                    [a("span", { staticClass: "tabbar-label" }, [t._v("立即购买")])]
                                )
                            ]),
                            a("transition", { attrs: { name: "slide-up" } }, [
                                a("div", { directives: [{ name: "show", rawName: "v-show", value: t.addCartModel, expression: "addCartModel" }], staticClass: "model" }, [
                                    a(
                                        "div",
                                        {
                                            staticClass: "model-content addCart-content",
                                            on: {
                                                click: function(s) {
                                                    s.stopPropagation(), (t.addCartModel = !0);
                                                }
                                            }
                                        },
                                        [
                                            a("div", { staticClass: "cartModel-box flex" }, [
                                                a("div", { staticClass: "cartModel-img" }, [a("img", { attrs: { src: t.$store.state.goods.GoodsImage } })]),
                                                a("div", { staticClass: "cartModel-text" }, [
                                                    a("div", { staticClass: "flex-between" }, [
                                                        a("p", { staticClass: "goods-name" }, [t._v(t._s(t.$store.state.goods.GoodsName))]),
                                                        a("i", {
                                                            staticClass: "cartClose",
                                                            on: {
                                                                click: function(s) {
                                                                    s.stopPropagation(), (t.addCartModel = !1);
                                                                }
                                                            }
                                                        })
                                                    ]),
                                                    a("p", { staticClass: "goods-price" }, [t._v("¥" + t._s(t.$store.state.goods.GoodsPrice))])
                                                ])
                                            ]),
                                            a("div", { staticClass: "cartModel-bottom flex-between" }, [
                                                a("p", [t._v("购买数量")]),
                                                a("div", { staticClass: "goodsOp flex" }, [
                                                    a("i", {
                                                        staticClass: "shop_cut",
                                                        on: {
                                                            click: function(s) {
                                                                t.onCutCart();
                                                            }
                                                        }
                                                    }),
                                                    a("input", { attrs: { type: "text", readonly: "" }, domProps: { value: t.goodsNum } }),
                                                    a("i", {
                                                        staticClass: "shop_add",
                                                        on: {
                                                            click: function(s) {
                                                                t.onAddCart();
                                                            }
                                                        }
                                                    })
                                                ])
                                            ]),
                                            a(
                                                "div",
                                                {
                                                    on: {
                                                        click: function(s) {
                                                            return s.stopPropagation(), t.onBuy(s);
                                                        }
                                                    }
                                                },
                                                [
                                                    a("p", { directives: [{ name: "show", rawName: "v-show", value: !t.isBuy, expression: "!isBuy" }], staticClass: "cartModel-addCart" }, [
                                                        t._v("加入购物车")
                                                    ]),
                                                    a("p", { directives: [{ name: "show", rawName: "v-show", value: t.isBuy, expression: "isBuy" }], staticClass: "cartModel-addCart" }, [
                                                        t._v("立即购买")
                                                    ])
                                                ]
                                            )
                                        ]
                                    )
                                ])
                            ])
                        ],
                        1
                    );
                },
                o = [],
                i = (a("6762"), a("cebc")),
                n = a("2f62"),
                r = {
                    data: function() {
                        return { goodsNum: 1, addCartModel: !1, isBuy: !0, havePage: !1, cartNum: !1 };
                    },
                    computed: Object(i["a"])({}, Object(n["b"])(["this.$store.state.goods", "this.$store.state.carts"])),
                    mounted: function() {
                        void 0 === this.$store.state.goods ? (this.havePage = !1) : (this.havePage = !0), void 0 != this.$store.state.carts && (this.cartLength = this.$store.state.carts.length);
                        var t = ["orderwait", "cart"];
                        t.includes(this.$store.state.comname) ? (this.slidename = "slide-back") : (this.slidename = "slide-go"), this.setComname("goodsdetail");
                    },
                    components: {
                        Headersec: function() {
                            return a.e("chunk-09b83ebe").then(a.bind(null, "65d4"));
                        },
                        Nopage: function() {
                            return a.e("chunk-076b3b1a").then(a.bind(null, "7367"));
                        }
                    },
                    methods: Object(i["a"])(
                        {
                            toCart: function() {
                                this.$router.push("./cart");
                            },
                            onCartModel: function() {
                                (this.addCartModel = !0), (this.isBuy = !1);
                            },
                            onBuyModel: function() {
                                (this.addCartModel = !0), (this.isBuy = !0);
                            },
                            onAddCart: function() {
                                this.goodsNum++;
                            },
                            onCutCart: function() {
                                this.goodsNum > 1 && this.goodsNum--;
                            },
                            onBuy: function() {
                                var t = this;
                                if (this.isBuy) {
                                    var s = [];
                                    s.push(this.$store.state.goods), this.setOrders(s), this.$router.push("./orderwait");
                                } else
                                    this.cartNum ||
                                        (this.setCarts(this.$store.state.goods),
                                        (this.addCartModel = !1),
                                        (this.cartNum = !0),
                                        (this.cartLength = this.cartLength + 1),
                                        setTimeout(function() {
                                            t.cartNum = !1;
                                        }, 2e3));
                            }
                        },
                        Object(n["c"])({ setOrders: "SET_ORDERS", setCarts: "SET_CARTS" })
                    )
                },
                c = r,
                d = (a("4e38"), a("2877")),
                l = Object(d["a"])(c, e, o, !1, null, "877e341c", null);
            s["default"] = l.exports;
        }
    }
]);
//# sourceMappingURL=chunk-015b93b2.b3f726af.js.map
