(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-31cdc976"],
    {
        "2ca2": function(t, a, e) {
            "use strict";
            var s = e("88ab"),
                i = e.n(s);
            i.a;
        },
        "88ab": function(t, a, e) {},
        beaa: function(t, a, e) {
            "use strict";
            e.r(a);
            var s = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("header", { staticClass: "flex-between flex-align-center" }, [
                        e(
                            "div",
                            { staticClass: "tab-item", class: { active: "/order" == t.urlRouter } },
                            [e("router-link", { attrs: { to: "./order" } }, [e("p", { staticClass: "tab-title" }, [t._v("全部")])])],
                            1
                        ),
                        e(
                            "div",
                            { staticClass: "tab-item", class: { active: "/waitpay" == t.urlRouter } },
                            [e("router-link", { attrs: { to: "./waitpay" } }, [e("p", { staticClass: "tab-title" }, [t._v("待付款")])])],
                            1
                        ),
                        e(
                            "div",
                            { staticClass: "tab-item", class: { active: "/waitdeliver" == t.urlRouter } },
                            [e("router-link", { attrs: { to: "./waitdeliver" } }, [e("p", { staticClass: "tab-title" }, [t._v("待发货")])])],
                            1
                        ),
                        e(
                            "div",
                            { staticClass: "tab-item", class: { active: "/waitreceive" == t.urlRouter } },
                            [e("router-link", { attrs: { to: "./waitreceive" } }, [e("p", { staticClass: "tab-title" }, [t._v("待收货")])])],
                            1
                        ),
                        e(
                            "div",
                            { staticClass: "tab-item", class: { active: "/orderdown" == t.urlRouter } },
                            [e("router-link", { attrs: { to: "./orderdown" } }, [e("p", { staticClass: "tab-title" }, [t._v("已完成")])])],
                            1
                        )
                    ]);
                },
                i = [],
                r = {
                    props: ["urlRouter"],
                    data: function() {
                        return { showNum: !1 };
                    }
                },
                l = r,
                c = (e("2ca2"), e("2877")),
                o = Object(c["a"])(l, s, i, !1, null, "69bc5354", null);
            a["default"] = o.exports;
        }
    }
]);
//# sourceMappingURL=chunk-31cdc976.cb75af32.js.map
