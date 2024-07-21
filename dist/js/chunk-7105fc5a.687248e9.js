(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7105fc5a"],
    {
        "61a0": function(t, o, e) {},
        daf2: function(t, o, e) {
            "use strict";
            var s = e("61a0"),
                r = e.n(s);
            r.a;
        },
        fd2d: function(t, o, e) {
            "use strict";
            e.r(o);
            var s = function() {
                    var t = this,
                        o = t.$createElement,
                        e = t._self._c || o;
                    return e("footer", { staticClass: "flex flex-align-center" }, [
                        e(
                            "div",
                            { staticClass: "footer-item", class: { active: "/index" == t.urlRouter || "/" == t.urlRouter } },
                            [e("router-link", { attrs: { to: "./index" } }, [e("i", { staticClass: "icon footerIcon footerHomeIcon" })])],
                            1
                        ),
                        e(
                            "div",
                            { staticClass: "footer-item", class: { active: "/category" == t.urlRouter } },
                            [e("router-link", { attrs: { to: "./category" } }, [e("i", { staticClass: "icon footerIcon footerCategoryIcon" })])],
                            1
                        ),
                        e(
                            "div",
                            { staticClass: "footer-item", class: { active: "/cart" == t.urlRouter } },
                            [
                                e("router-link", { attrs: { to: "./cart" } }, [e("i", { staticClass: "icon footerIcon footerCartIcon" })]),
                                e("transition", { attrs: { name: "bullet" } }, [
                                    e("div", { directives: [{ name: "show", rawName: "v-show", value: t.showNum, expression: "showNum" }], staticClass: "cart-num" }, [t._v(t._s(t.cartnum))])
                                ])
                            ],
                            1
                        ),
                        e(
                            "div",
                            { staticClass: "footer-item", class: { active: "/member" == t.urlRouter } },
                            [e("router-link", { attrs: { to: "./member" } }, [e("i", { staticClass: "icon footerIcon footerMemberIcon" })])],
                            1
                        )
                    ]);
                },
                r = [],
                a = {
                    props: ["urlRouter", "cartnum"],
                    data: function() {
                        return { showNum: !1 };
                    },
                    watch: {
                        showNum: function() {
                            var t = this;
                            this.showNum &&
                                setTimeout(function() {
                                    t.showNum = !1;
                                }, 800);
                        }
                    }
                },
                i = a,
                c = (e("daf2"), e("2877")),
                n = Object(c["a"])(i, s, r, !1, null, "3c48fe5f", null);
            o["default"] = n.exports;
        }
    }
]);
//# sourceMappingURL=chunk-7105fc5a.687248e9.js.map
