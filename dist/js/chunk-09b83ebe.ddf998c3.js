(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-09b83ebe"],
    {
        2097: function(e, t, n) {
            "use strict";
            var a = n("6438"),
                c = n.n(a);
            c.a;
        },
        6438: function(e, t, n) {},
        "65d4": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("header", { staticClass: "flex flex-align-center", attrs: { id: "headerTab" } }, [n("i", { on: { click: e.onBack } }), n("p", [e._v(e._s(e.tabname))])]);
                },
                c = [],
                s = {
                    props: ["tabname"],
                    data: function() {
                        return { isBack: !0 };
                    },
                    methods: {
                        onBack: function() {
                            this.isBack ? this.$router.back() : this.$router.push("./member");
                        }
                    }
                },
                r = s,
                i = (n("2097"), n("2877")),
                o = Object(i["a"])(r, a, c, !1, null, "229a14ee", null);
            t["default"] = o.exports;
        }
    }
]);
//# sourceMappingURL=chunk-09b83ebe.ddf998c3.js.map
