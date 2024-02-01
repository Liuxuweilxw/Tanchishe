!function () {
    "use strict";
    var t = {
        485: function (t, n, e) {
            var r = e(8081), o = e.n(r), i = e(3645), u = e.n(i)()(o());
            u.push([t.id, '* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px "Courier";\n}\n#main {\n  width: 360px;\n  height: 420px;\n  background: #b7d4a8;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background: black;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#main #stage #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  border: 1px solid #b7d4a8;\n}\n#main #stage #food > div {\n  width: 3.75px;\n  height: 3.75px;\n  background: red;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#main #score-panel {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n', ""]), n.Z = u
        }, 3645: function (t) {
            t.exports = function (t) {
                var n = [];
                return n.toString = function () {
                    return this.map((function (n) {
                        var e = "", r = void 0 !== n[5];
                        return n[4] && (e += "@supports (".concat(n[4], ") {")), n[2] && (e += "@media ".concat(n[2], " {")), r && (e += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), e += t(n), r && (e += "}"), n[2] && (e += "}"), n[4] && (e += "}"), e
                    })).join("")
                }, n.i = function (t, e, r, o, i) {
                    "string" == typeof t && (t = [[null, t, void 0]]);
                    var u = {};
                    if (r) for (var c = 0; c < this.length; c++) {
                        var a = this[c][0];
                        null != a && (u[a] = !0)
                    }
                    for (var f = 0; f < t.length; f++) {
                        var s = [].concat(t[f]);
                        r && u[s[0]] || (void 0 !== i && (void 0 === s[5] || (s[1] = "@layer".concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {").concat(s[1], "}")), s[5] = i), e && (s[2] ? (s[1] = "@media ".concat(s[2], " {").concat(s[1], "}"), s[2] = e) : s[2] = e), o && (s[4] ? (s[1] = "@supports (".concat(s[4], ") {").concat(s[1], "}"), s[4] = o) : s[4] = "".concat(o)), n.push(s))
                    }
                }, n
            }
        }, 8081: function (t) {
            t.exports = function (t) {
                return t[1]
            }
        }, 3379: function (t) {
            var n = [];

            function e(t) {
                for (var e = -1, r = 0; r < n.length; r++) if (n[r].identifier === t) {
                    e = r;
                    break
                }
                return e
            }

            function r(t, r) {
                for (var i = {}, u = [], c = 0; c < t.length; c++) {
                    var a = t[c], f = r.base ? a[0] + r.base : a[0], s = i[f] || 0, l = "".concat(f, " ").concat(s);
                    i[f] = s + 1;
                    var p = e(l), v = {css: a[1], media: a[2], sourceMap: a[3], supports: a[4], layer: a[5]};
                    if (-1 !== p) n[p].references++, n[p].updater(v); else {
                        var y = o(v, r);
                        r.byIndex = c, n.splice(c, 0, {identifier: l, updater: y, references: 1})
                    }
                    u.push(l)
                }
                return u
            }

            function o(t, n) {
                var e = n.domAPI(n);
                return e.update(t), function (n) {
                    if (n) {
                        if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap && n.supports === t.supports && n.layer === t.layer) return;
                        e.update(t = n)
                    } else e.remove()
                }
            }

            t.exports = function (t, o) {
                var i = r(t = t || [], o = o || {});
                return function (t) {
                    t = t || [];
                    for (var u = 0; u < i.length; u++) {
                        var c = e(i[u]);
                        n[c].references--
                    }
                    for (var a = r(t, o), f = 0; f < i.length; f++) {
                        var s = e(i[f]);
                        0 === n[s].references && (n[s].updater(), n.splice(s, 1))
                    }
                    i = a
                }
            }
        }, 569: function (t) {
            var n = {};
            t.exports = function (t, e) {
                var r = function (t) {
                    if (void 0 === n[t]) {
                        var e = document.querySelector(t);
                        if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                            e = e.contentDocument.head
                        } catch (t) {
                            e = null
                        }
                        n[t] = e
                    }
                    return n[t]
                }(t);
                if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(e)
            }
        }, 9216: function (t) {
            t.exports = function (t) {
                var n = document.createElement("style");
                return t.setAttributes(n, t.attributes), t.insert(n, t.options), n
            }
        }, 3565: function (t, n, e) {
            t.exports = function (t) {
                var n = e.nc;
                n && t.setAttribute("nonce", n)
            }
        }, 7795: function (t) {
            t.exports = function (t) {
                if ("undefined" == typeof document) return {
                    update: function () {
                    }, remove: function () {
                    }
                };
                var n = t.insertStyleElement(t);
                return {
                    update: function (e) {
                        !function (t, n, e) {
                            var r = "";
                            e.supports && (r += "@supports (".concat(e.supports, ") {")), e.media && (r += "@media ".concat(e.media, " {"));
                            var o = void 0 !== e.layer;
                            o && (r += "@layer".concat(e.layer.length > 0 ? " ".concat(e.layer) : "", " {")), r += e.css, o && (r += "}"), e.media && (r += "}"), e.supports && (r += "}");
                            var i = e.sourceMap;
                            i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), n.styleTagTransform(r, t, n.options)
                        }(n, t, e)
                    }, remove: function () {
                        !function (t) {
                            if (null === t.parentNode) return !1;
                            t.parentNode.removeChild(t)
                        }(n)
                    }
                }
            }
        }, 4589: function (t) {
            t.exports = function (t, n) {
                if (n.styleSheet) n.styleSheet.cssText = t; else {
                    for (; n.firstChild;) n.removeChild(n.firstChild);
                    n.appendChild(document.createTextNode(t))
                }
            }
        }, 509: function (t, n, e) {
            var r = e(9985), o = e(3691), i = TypeError;
            t.exports = function (t) {
                if (r(t)) return t;
                throw new i(o(t) + " is not a function")
            }
        }, 3550: function (t, n, e) {
            var r = e(598), o = String, i = TypeError;
            t.exports = function (t) {
                if (r(t)) return t;
                throw new i("Can't set " + o(t) + " as a prototype")
            }
        }, 7370: function (t, n, e) {
            var r = e(4201), o = e(5391), i = e(2560).f, u = r("unscopables"), c = Array.prototype;
            void 0 === c[u] && i(c, u, {configurable: !0, value: o(null)}), t.exports = function (t) {
                c[u][t] = !0
            }
        }, 5027: function (t, n, e) {
            var r = e(8999), o = String, i = TypeError;
            t.exports = function (t) {
                if (r(t)) return t;
                throw new i(o(t) + " is not an object")
            }
        }, 4328: function (t, n, e) {
            var r = e(5290), o = e(7578), i = e(6310), u = function (t) {
                return function (n, e, u) {
                    var c, a = r(n), f = i(a), s = o(u, f);
                    if (t && e != e) {
                        for (; f > s;) if ((c = a[s++]) != c) return !0
                    } else for (; f > s; s++) if ((t || s in a) && a[s] === e) return t || s || 0;
                    return !t && -1
                }
            };
            t.exports = {includes: u(!0), indexOf: u(!1)}
        }, 2960: function (t, n, e) {
            var r = e(4071), o = e(8844), i = e(4413), u = e(690), c = e(6310), a = e(7120), f = o([].push),
                s = function (t) {
                    var n = 1 === t, e = 2 === t, o = 3 === t, s = 4 === t, l = 6 === t, p = 7 === t, v = 5 === t || l;
                    return function (y, h, d, b) {
                        for (var m, g, x = u(y), w = i(x), S = c(w), O = r(h, d), k = 0, j = b || a, E = n ? j(y, S) : e || p ? j(y, 0) : void 0; S > k; k++) if ((v || k in w) && (g = O(m = w[k], k, x), t)) if (n) E[k] = g; else if (g) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return m;
                            case 6:
                                return k;
                            case 2:
                                f(E, m)
                        } else switch (t) {
                            case 4:
                                return !1;
                            case 7:
                                f(E, m)
                        }
                        return l ? -1 : o || s ? s : E
                    }
                };
            t.exports = {
                forEach: s(0),
                map: s(1),
                filter: s(2),
                some: s(3),
                every: s(4),
                find: s(5),
                findIndex: s(6),
                filterReject: s(7)
            }
        }, 6004: function (t, n, e) {
            var r = e(8844);
            t.exports = r([].slice)
        }, 5271: function (t, n, e) {
            var r = e(2297), o = e(9429), i = e(8999), u = e(4201)("species"), c = Array;
            t.exports = function (t) {
                var n;
                return r(t) && (n = t.constructor, (o(n) && (n === c || r(n.prototype)) || i(n) && null === (n = n[u])) && (n = void 0)), void 0 === n ? c : n
            }
        }, 7120: function (t, n, e) {
            var r = e(5271);
            t.exports = function (t, n) {
                return new (r(t))(0 === n ? 0 : n)
            }
        }, 6648: function (t, n, e) {
            var r = e(8844), o = r({}.toString), i = r("".slice);
            t.exports = function (t) {
                return i(o(t), 8, -1)
            }
        }, 926: function (t, n, e) {
            var r = e(3043), o = e(9985), i = e(6648), u = e(4201)("toStringTag"), c = Object,
                a = "Arguments" === i(function () {
                    return arguments
                }());
            t.exports = r ? i : function (t) {
                var n, e, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, n) {
                    try {
                        return t[n]
                    } catch (t) {
                    }
                }(n = c(t), u)) ? e : a ? i(n) : "Object" === (r = i(n)) && o(n.callee) ? "Arguments" : r
            }
        }, 8758: function (t, n, e) {
            var r = e(6812), o = e(9152), i = e(2474), u = e(2560);
            t.exports = function (t, n, e) {
                for (var c = o(n), a = u.f, f = i.f, s = 0; s < c.length; s++) {
                    var l = c[s];
                    r(t, l) || e && r(e, l) || a(t, l, f(n, l))
                }
            }
        }, 1748: function (t, n, e) {
            var r = e(3689);
            t.exports = !r((function () {
                function t() {
                }

                return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
            }))
        }, 7807: function (t) {
            t.exports = function (t, n) {
                return {value: t, done: n}
            }
        }, 5773: function (t, n, e) {
            var r = e(7697), o = e(2560), i = e(5684);
            t.exports = r ? function (t, n, e) {
                return o.f(t, n, i(1, e))
            } : function (t, n, e) {
                return t[n] = e, t
            }
        }, 5684: function (t) {
            t.exports = function (t, n) {
                return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
            }
        }, 1797: function (t, n, e) {
            var r = e(5027), o = e(5899), i = TypeError;
            t.exports = function (t) {
                if (r(this), "string" === t || "default" === t) t = "string"; else if ("number" !== t) throw new i("Incorrect hint");
                return o(this, t)
            }
        }, 2148: function (t, n, e) {
            var r = e(8702), o = e(2560);
            t.exports = function (t, n, e) {
                return e.get && r(e.get, n, {getter: !0}), e.set && r(e.set, n, {setter: !0}), o.f(t, n, e)
            }
        }, 1880: function (t, n, e) {
            var r = e(9985), o = e(2560), i = e(8702), u = e(5014);
            t.exports = function (t, n, e, c) {
                c || (c = {});
                var a = c.enumerable, f = void 0 !== c.name ? c.name : n;
                if (r(e) && i(e, f, c), c.global) a ? t[n] = e : u(n, e); else {
                    try {
                        c.unsafe ? t[n] && (a = !0) : delete t[n]
                    } catch (t) {
                    }
                    a ? t[n] = e : o.f(t, n, {
                        value: e,
                        enumerable: !1,
                        configurable: !c.nonConfigurable,
                        writable: !c.nonWritable
                    })
                }
                return t
            }
        }, 5014: function (t, n, e) {
            var r = e(9037), o = Object.defineProperty;
            t.exports = function (t, n) {
                try {
                    o(r, t, {value: n, configurable: !0, writable: !0})
                } catch (e) {
                    r[t] = n
                }
                return n
            }
        }, 7697: function (t, n, e) {
            var r = e(3689);
            t.exports = !r((function () {
                return 7 !== Object.defineProperty({}, 1, {
                    get: function () {
                        return 7
                    }
                })[1]
            }))
        }, 6420: function (t, n, e) {
            var r = e(9037), o = e(8999), i = r.document, u = o(i) && o(i.createElement);
            t.exports = function (t) {
                return u ? i.createElement(t) : {}
            }
        }, 6338: function (t) {
            t.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        }, 3265: function (t, n, e) {
            var r = e(6420)("span").classList, o = r && r.constructor && r.constructor.prototype;
            t.exports = o === Object.prototype ? void 0 : o
        }, 71: function (t) {
            t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        }, 3615: function (t, n, e) {
            var r, o, i = e(9037), u = e(71), c = i.process, a = i.Deno, f = c && c.versions || a && a.version,
                s = f && f.v8;
            s && (o = (r = s.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && u && (!(r = u.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = u.match(/Chrome\/(\d+)/)) && (o = +r[1]), t.exports = o
        }, 2739: function (t) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, 9989: function (t, n, e) {
            var r = e(9037), o = e(2474).f, i = e(5773), u = e(1880), c = e(5014), a = e(8758), f = e(5266);
            t.exports = function (t, n) {
                var e, s, l, p, v, y = t.target, h = t.global, d = t.stat;
                if (e = h ? r : d ? r[y] || c(y, {}) : r[y] && r[y].prototype) for (s in n) {
                    if (p = n[s], l = t.dontCallGetSet ? (v = o(e, s)) && v.value : e[s], !f(h ? s : y + (d ? "." : "#") + s, t.forced) && void 0 !== l) {
                        if (typeof p == typeof l) continue;
                        a(p, l)
                    }
                    (t.sham || l && l.sham) && i(p, "sham", !0), u(e, s, p, t)
                }
            }
        }, 3689: function (t) {
            t.exports = function (t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }, 1735: function (t, n, e) {
            var r = e(7215), o = Function.prototype, i = o.apply, u = o.call;
            t.exports = "object" == typeof Reflect && Reflect.apply || (r ? u.bind(i) : function () {
                return u.apply(i, arguments)
            })
        }, 4071: function (t, n, e) {
            var r = e(6576), o = e(509), i = e(7215), u = r(r.bind);
            t.exports = function (t, n) {
                return o(t), void 0 === n ? t : i ? u(t, n) : function () {
                    return t.apply(n, arguments)
                }
            }
        }, 7215: function (t, n, e) {
            var r = e(3689);
            t.exports = !r((function () {
                var t = function () {
                }.bind();
                return "function" != typeof t || t.hasOwnProperty("prototype")
            }))
        }, 2615: function (t, n, e) {
            var r = e(7215), o = Function.prototype.call;
            t.exports = r ? o.bind(o) : function () {
                return o.apply(o, arguments)
            }
        }, 1236: function (t, n, e) {
            var r = e(7697), o = e(6812), i = Function.prototype, u = r && Object.getOwnPropertyDescriptor,
                c = o(i, "name"), a = c && "something" === function () {
                }.name, f = c && (!r || r && u(i, "name").configurable);
            t.exports = {EXISTS: c, PROPER: a, CONFIGURABLE: f}
        }, 2743: function (t, n, e) {
            var r = e(8844), o = e(509);
            t.exports = function (t, n, e) {
                try {
                    return r(o(Object.getOwnPropertyDescriptor(t, n)[e]))
                } catch (t) {
                }
            }
        }, 6576: function (t, n, e) {
            var r = e(6648), o = e(8844);
            t.exports = function (t) {
                if ("Function" === r(t)) return o(t)
            }
        }, 8844: function (t, n, e) {
            var r = e(7215), o = Function.prototype, i = o.call, u = r && o.bind.bind(i, i);
            t.exports = r ? u : function (t) {
                return function () {
                    return i.apply(t, arguments)
                }
            }
        }, 6058: function (t, n, e) {
            var r = e(9037), o = e(9985);
            t.exports = function (t, n) {
                return arguments.length < 2 ? (e = r[t], o(e) ? e : void 0) : r[t] && r[t][n];
                var e
            }
        }, 2643: function (t, n, e) {
            var r = e(8844), o = e(2297), i = e(9985), u = e(6648), c = e(4327), a = r([].push);
            t.exports = function (t) {
                if (i(t)) return t;
                if (o(t)) {
                    for (var n = t.length, e = [], r = 0; r < n; r++) {
                        var f = t[r];
                        "string" == typeof f ? a(e, f) : "number" != typeof f && "Number" !== u(f) && "String" !== u(f) || a(e, c(f))
                    }
                    var s = e.length, l = !0;
                    return function (t, n) {
                        if (l) return l = !1, n;
                        if (o(this)) return n;
                        for (var r = 0; r < s; r++) if (e[r] === t) return n
                    }
                }
            }
        }, 4849: function (t, n, e) {
            var r = e(509), o = e(981);
            t.exports = function (t, n) {
                var e = t[n];
                return o(e) ? void 0 : r(e)
            }
        }, 9037: function (t, n, e) {
            var r = function (t) {
                return t && t.Math === Math && t
            };
            t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof e.g && e.g) || r("object" == typeof this && this) || function () {
                return this
            }() || Function("return this")()
        }, 6812: function (t, n, e) {
            var r = e(8844), o = e(690), i = r({}.hasOwnProperty);
            t.exports = Object.hasOwn || function (t, n) {
                return i(o(t), n)
            }
        }, 7248: function (t) {
            t.exports = {}
        }, 2688: function (t, n, e) {
            var r = e(6058);
            t.exports = r("document", "documentElement")
        }, 8506: function (t, n, e) {
            var r = e(7697), o = e(3689), i = e(6420);
            t.exports = !r && !o((function () {
                return 7 !== Object.defineProperty(i("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, 4413: function (t, n, e) {
            var r = e(8844), o = e(3689), i = e(6648), u = Object, c = r("".split);
            t.exports = o((function () {
                return !u("z").propertyIsEnumerable(0)
            })) ? function (t) {
                return "String" === i(t) ? c(t, "") : u(t)
            } : u
        }, 3457: function (t, n, e) {
            var r = e(9985), o = e(8999), i = e(9385);
            t.exports = function (t, n, e) {
                var u, c;
                return i && r(u = n.constructor) && u !== e && o(c = u.prototype) && c !== e.prototype && i(t, c), t
            }
        }, 6738: function (t, n, e) {
            var r = e(8844), o = e(9985), i = e(4091), u = r(Function.toString);
            o(i.inspectSource) || (i.inspectSource = function (t) {
                return u(t)
            }), t.exports = i.inspectSource
        }, 618: function (t, n, e) {
            var r, o, i, u = e(9834), c = e(9037), a = e(8999), f = e(5773), s = e(6812), l = e(4091), p = e(2713),
                v = e(7248), y = "Object already initialized", h = c.TypeError, d = c.WeakMap;
            if (u || l.state) {
                var b = l.state || (l.state = new d);
                b.get = b.get, b.has = b.has, b.set = b.set, r = function (t, n) {
                    if (b.has(t)) throw new h(y);
                    return n.facade = t, b.set(t, n), n
                }, o = function (t) {
                    return b.get(t) || {}
                }, i = function (t) {
                    return b.has(t)
                }
            } else {
                var m = p("state");
                v[m] = !0, r = function (t, n) {
                    if (s(t, m)) throw new h(y);
                    return n.facade = t, f(t, m, n), n
                }, o = function (t) {
                    return s(t, m) ? t[m] : {}
                }, i = function (t) {
                    return s(t, m)
                }
            }
            t.exports = {
                set: r, get: o, has: i, enforce: function (t) {
                    return i(t) ? o(t) : r(t, {})
                }, getterFor: function (t) {
                    return function (n) {
                        var e;
                        if (!a(n) || (e = o(n)).type !== t) throw new h("Incompatible receiver, " + t + " required");
                        return e
                    }
                }
            }
        }, 2297: function (t, n, e) {
            var r = e(6648);
            t.exports = Array.isArray || function (t) {
                return "Array" === r(t)
            }
        }, 9985: function (t) {
            var n = "object" == typeof document && document.all;
            t.exports = void 0 === n && void 0 !== n ? function (t) {
                return "function" == typeof t || t === n
            } : function (t) {
                return "function" == typeof t
            }
        }, 9429: function (t, n, e) {
            var r = e(8844), o = e(3689), i = e(9985), u = e(926), c = e(6058), a = e(6738), f = function () {
                }, s = c("Reflect", "construct"), l = /^\s*(?:class|function)\b/, p = r(l.exec), v = !l.test(f),
                y = function (t) {
                    if (!i(t)) return !1;
                    try {
                        return s(f, [], t), !0
                    } catch (t) {
                        return !1
                    }
                }, h = function (t) {
                    if (!i(t)) return !1;
                    switch (u(t)) {
                        case"AsyncFunction":
                        case"GeneratorFunction":
                        case"AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return v || !!p(l, a(t))
                    } catch (t) {
                        return !0
                    }
                };
            h.sham = !0, t.exports = !s || o((function () {
                var t;
                return y(y.call) || !y(Object) || !y((function () {
                    t = !0
                })) || t
            })) ? h : y
        }, 5266: function (t, n, e) {
            var r = e(3689), o = e(9985), i = /#|\.prototype\./, u = function (t, n) {
                var e = a[c(t)];
                return e === s || e !== f && (o(n) ? r(n) : !!n)
            }, c = u.normalize = function (t) {
                return String(t).replace(i, ".").toLowerCase()
            }, a = u.data = {}, f = u.NATIVE = "N", s = u.POLYFILL = "P";
            t.exports = u
        }, 981: function (t) {
            t.exports = function (t) {
                return null == t
            }
        }, 8999: function (t, n, e) {
            var r = e(9985);
            t.exports = function (t) {
                return "object" == typeof t ? null !== t : r(t)
            }
        }, 598: function (t, n, e) {
            var r = e(8999);
            t.exports = function (t) {
                return r(t) || null === t
            }
        }, 3931: function (t) {
            t.exports = !1
        }, 734: function (t, n, e) {
            var r = e(6058), o = e(9985), i = e(3622), u = e(9525), c = Object;
            t.exports = u ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                var n = r("Symbol");
                return o(n) && i(n.prototype, c(t))
            }
        }, 974: function (t, n, e) {
            var r = e(2013).IteratorPrototype, o = e(5391), i = e(5684), u = e(5997), c = e(9478), a = function () {
                return this
            };
            t.exports = function (t, n, e, f) {
                var s = n + " Iterator";
                return t.prototype = o(r, {next: i(+!f, e)}), u(t, s, !1, !0), c[s] = a, t
            }
        }, 1934: function (t, n, e) {
            var r = e(9989), o = e(2615), i = e(3931), u = e(1236), c = e(9985), a = e(974), f = e(1868), s = e(9385),
                l = e(5997), p = e(5773), v = e(1880), y = e(4201), h = e(9478), d = e(2013), b = u.PROPER,
                m = u.CONFIGURABLE, g = d.IteratorPrototype, x = d.BUGGY_SAFARI_ITERATORS, w = y("iterator"),
                S = "keys", O = "values", k = "entries", j = function () {
                    return this
                };
            t.exports = function (t, n, e, u, y, d, E) {
                a(e, n, u);
                var T, P, A, L = function (t) {
                        if (t === y && C) return C;
                        if (!x && t && t in F) return F[t];
                        switch (t) {
                            case S:
                            case O:
                            case k:
                                return function () {
                                    return new e(this, t)
                                }
                        }
                        return function () {
                            return new e(this)
                        }
                    }, I = n + " Iterator", M = !1, F = t.prototype, N = F[w] || F["@@iterator"] || y && F[y],
                    C = !x && N || L(y), _ = "Array" === n && F.entries || N;
                if (_ && (T = f(_.call(new t))) !== Object.prototype && T.next && (i || f(T) === g || (s ? s(T, g) : c(T[w]) || v(T, w, j)), l(T, I, !0, !0), i && (h[I] = j)), b && y === O && N && N.name !== O && (!i && m ? p(F, "name", O) : (M = !0, C = function () {
                    return o(N, this)
                })), y) if (P = {
                    values: L(O),
                    keys: d ? C : L(S),
                    entries: L(k)
                }, E) for (A in P) (x || M || !(A in F)) && v(F, A, P[A]); else r({
                    target: n,
                    proto: !0,
                    forced: x || M
                }, P);
                return i && !E || F[w] === C || v(F, w, C, {name: y}), h[n] = C, P
            }
        }, 2013: function (t, n, e) {
            var r, o, i, u = e(3689), c = e(9985), a = e(8999), f = e(5391), s = e(1868), l = e(1880), p = e(4201),
                v = e(3931), y = p("iterator"), h = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = s(s(i))) !== Object.prototype && (r = o) : h = !0), !a(r) || u((function () {
                var t = {};
                return r[y].call(t) !== t
            })) ? r = {} : v && (r = f(r)), c(r[y]) || l(r, y, (function () {
                return this
            })), t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: h}
        }, 9478: function (t) {
            t.exports = {}
        }, 6310: function (t, n, e) {
            var r = e(3126);
            t.exports = function (t) {
                return r(t.length)
            }
        }, 8702: function (t, n, e) {
            var r = e(8844), o = e(3689), i = e(9985), u = e(6812), c = e(7697), a = e(1236).CONFIGURABLE, f = e(6738),
                s = e(618), l = s.enforce, p = s.get, v = String, y = Object.defineProperty, h = r("".slice),
                d = r("".replace), b = r([].join), m = c && !o((function () {
                    return 8 !== y((function () {
                    }), "length", {value: 8}).length
                })), g = String(String).split("String"), x = t.exports = function (t, n, e) {
                    "Symbol(" === h(v(n), 0, 7) && (n = "[" + d(v(n), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (n = "get " + n), e && e.setter && (n = "set " + n), (!u(t, "name") || a && t.name !== n) && (c ? y(t, "name", {
                        value: n,
                        configurable: !0
                    }) : t.name = n), m && e && u(e, "arity") && t.length !== e.arity && y(t, "length", {value: e.arity});
                    try {
                        e && u(e, "constructor") && e.constructor ? c && y(t, "prototype", {writable: !1}) : t.prototype && (t.prototype = void 0)
                    } catch (t) {
                    }
                    var r = l(t);
                    return u(r, "source") || (r.source = b(g, "string" == typeof n ? n : "")), t
                };
            Function.prototype.toString = x((function () {
                return i(this) && p(this).source || f(this)
            }), "toString")
        }, 8828: function (t) {
            var n = Math.ceil, e = Math.floor;
            t.exports = Math.trunc || function (t) {
                var r = +t;
                return (r > 0 ? e : n)(r)
            }
        }, 5391: function (t, n, e) {
            var r, o = e(5027), i = e(8920), u = e(2739), c = e(7248), a = e(2688), f = e(6420), s = e(2713),
                l = "prototype", p = "script", v = s("IE_PROTO"), y = function () {
                }, h = function (t) {
                    return "<" + p + ">" + t + "</" + p + ">"
                }, d = function (t) {
                    t.write(h("")), t.close();
                    var n = t.parentWindow.Object;
                    return t = null, n
                }, b = function () {
                    try {
                        r = new ActiveXObject("htmlfile")
                    } catch (t) {
                    }
                    var t, n, e;
                    b = "undefined" != typeof document ? document.domain && r ? d(r) : (n = f("iframe"), e = "java" + p + ":", n.style.display = "none", a.appendChild(n), n.src = String(e), (t = n.contentWindow.document).open(), t.write(h("document.F=Object")), t.close(), t.F) : d(r);
                    for (var o = u.length; o--;) delete b[l][u[o]];
                    return b()
                };
            c[v] = !0, t.exports = Object.create || function (t, n) {
                var e;
                return null !== t ? (y[l] = o(t), e = new y, y[l] = null, e[v] = t) : e = b(), void 0 === n ? e : i.f(e, n)
            }
        }, 8920: function (t, n, e) {
            var r = e(7697), o = e(5648), i = e(2560), u = e(5027), c = e(5290), a = e(300);
            n.f = r && !o ? Object.defineProperties : function (t, n) {
                u(t);
                for (var e, r = c(n), o = a(n), f = o.length, s = 0; f > s;) i.f(t, e = o[s++], r[e]);
                return t
            }
        }, 2560: function (t, n, e) {
            var r = e(7697), o = e(8506), i = e(5648), u = e(5027), c = e(8360), a = TypeError,
                f = Object.defineProperty, s = Object.getOwnPropertyDescriptor, l = "enumerable", p = "configurable",
                v = "writable";
            n.f = r ? i ? function (t, n, e) {
                if (u(t), n = c(n), u(e), "function" == typeof t && "prototype" === n && "value" in e && v in e && !e[v]) {
                    var r = s(t, n);
                    r && r[v] && (t[n] = e.value, e = {
                        configurable: p in e ? e[p] : r[p],
                        enumerable: l in e ? e[l] : r[l],
                        writable: !1
                    })
                }
                return f(t, n, e)
            } : f : function (t, n, e) {
                if (u(t), n = c(n), u(e), o) try {
                    return f(t, n, e)
                } catch (t) {
                }
                if ("get" in e || "set" in e) throw new a("Accessors not supported");
                return "value" in e && (t[n] = e.value), t
            }
        }, 2474: function (t, n, e) {
            var r = e(7697), o = e(2615), i = e(9556), u = e(5684), c = e(5290), a = e(8360), f = e(6812), s = e(8506),
                l = Object.getOwnPropertyDescriptor;
            n.f = r ? l : function (t, n) {
                if (t = c(t), n = a(n), s) try {
                    return l(t, n)
                } catch (t) {
                }
                if (f(t, n)) return u(!o(i.f, t, n), t[n])
            }
        }, 6062: function (t, n, e) {
            var r = e(6648), o = e(5290), i = e(2741).f, u = e(6004),
                c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function (t) {
                return c && "Window" === r(t) ? function (t) {
                    try {
                        return i(t)
                    } catch (t) {
                        return u(c)
                    }
                }(t) : i(o(t))
            }
        }, 2741: function (t, n, e) {
            var r = e(4948), o = e(2739).concat("length", "prototype");
            n.f = Object.getOwnPropertyNames || function (t) {
                return r(t, o)
            }
        }, 7518: function (t, n) {
            n.f = Object.getOwnPropertySymbols
        }, 1868: function (t, n, e) {
            var r = e(6812), o = e(9985), i = e(690), u = e(2713), c = e(1748), a = u("IE_PROTO"), f = Object,
                s = f.prototype;
            t.exports = c ? f.getPrototypeOf : function (t) {
                var n = i(t);
                if (r(n, a)) return n[a];
                var e = n.constructor;
                return o(e) && n instanceof e ? e.prototype : n instanceof f ? s : null
            }
        }, 3622: function (t, n, e) {
            var r = e(8844);
            t.exports = r({}.isPrototypeOf)
        }, 4948: function (t, n, e) {
            var r = e(8844), o = e(6812), i = e(5290), u = e(4328).indexOf, c = e(7248), a = r([].push);
            t.exports = function (t, n) {
                var e, r = i(t), f = 0, s = [];
                for (e in r) !o(c, e) && o(r, e) && a(s, e);
                for (; n.length > f;) o(r, e = n[f++]) && (~u(s, e) || a(s, e));
                return s
            }
        }, 300: function (t, n, e) {
            var r = e(4948), o = e(2739);
            t.exports = Object.keys || function (t) {
                return r(t, o)
            }
        }, 9556: function (t, n) {
            var e = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, o = r && !e.call({1: 2}, 1);
            n.f = o ? function (t) {
                var n = r(this, t);
                return !!n && n.enumerable
            } : e
        }, 9385: function (t, n, e) {
            var r = e(2743), o = e(5027), i = e(3550);
            t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var t, n = !1, e = {};
                try {
                    (t = r(Object.prototype, "__proto__", "set"))(e, []), n = e instanceof Array
                } catch (t) {
                }
                return function (e, r) {
                    return o(e), i(r), n ? t(e, r) : e.__proto__ = r, e
                }
            }() : void 0)
        }, 5073: function (t, n, e) {
            var r = e(3043), o = e(926);
            t.exports = r ? {}.toString : function () {
                return "[object " + o(this) + "]"
            }
        }, 5899: function (t, n, e) {
            var r = e(2615), o = e(9985), i = e(8999), u = TypeError;
            t.exports = function (t, n) {
                var e, c;
                if ("string" === n && o(e = t.toString) && !i(c = r(e, t))) return c;
                if (o(e = t.valueOf) && !i(c = r(e, t))) return c;
                if ("string" !== n && o(e = t.toString) && !i(c = r(e, t))) return c;
                throw new u("Can't convert object to primitive value")
            }
        }, 9152: function (t, n, e) {
            var r = e(6058), o = e(8844), i = e(2741), u = e(7518), c = e(5027), a = o([].concat);
            t.exports = r("Reflect", "ownKeys") || function (t) {
                var n = i.f(c(t)), e = u.f;
                return e ? a(n, e(t)) : n
            }
        }, 496: function (t, n, e) {
            var r = e(9037);
            t.exports = r
        }, 4684: function (t, n, e) {
            var r = e(981), o = TypeError;
            t.exports = function (t) {
                if (r(t)) throw new o("Can't call method on " + t);
                return t
            }
        }, 5997: function (t, n, e) {
            var r = e(2560).f, o = e(6812), i = e(4201)("toStringTag");
            t.exports = function (t, n, e) {
                t && !e && (t = t.prototype), t && !o(t, i) && r(t, i, {configurable: !0, value: n})
            }
        }, 2713: function (t, n, e) {
            var r = e(3430), o = e(4630), i = r("keys");
            t.exports = function (t) {
                return i[t] || (i[t] = o(t))
            }
        }, 4091: function (t, n, e) {
            var r = e(9037), o = e(5014), i = "__core-js_shared__", u = r[i] || o(i, {});
            t.exports = u
        }, 3430: function (t, n, e) {
            var r = e(3931), o = e(4091);
            (t.exports = function (t, n) {
                return o[t] || (o[t] = void 0 !== n ? n : {})
            })("versions", []).push({
                version: "3.35.1",
                mode: r ? "pure" : "global",
                copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }, 730: function (t, n, e) {
            var r = e(8844), o = e(8700), i = e(4327), u = e(4684), c = r("".charAt), a = r("".charCodeAt),
                f = r("".slice), s = function (t) {
                    return function (n, e) {
                        var r, s, l = i(u(n)), p = o(e), v = l.length;
                        return p < 0 || p >= v ? t ? "" : void 0 : (r = a(l, p)) < 55296 || r > 56319 || p + 1 === v || (s = a(l, p + 1)) < 56320 || s > 57343 ? t ? c(l, p) : r : t ? f(l, p, p + 2) : s - 56320 + (r - 55296 << 10) + 65536
                    }
                };
            t.exports = {codeAt: s(!1), charAt: s(!0)}
        }, 1435: function (t, n, e) {
            var r = e(8844), o = e(4684), i = e(4327), u = e(6350), c = r("".replace), a = RegExp("^[" + u + "]+"),
                f = RegExp("(^|[^" + u + "])[" + u + "]+$"), s = function (t) {
                    return function (n) {
                        var e = i(o(n));
                        return 1 & t && (e = c(e, a, "")), 2 & t && (e = c(e, f, "$1")), e
                    }
                };
            t.exports = {start: s(1), end: s(2), trim: s(3)}
        }, 146: function (t, n, e) {
            var r = e(3615), o = e(3689), i = e(9037).String;
            t.exports = !!Object.getOwnPropertySymbols && !o((function () {
                var t = Symbol("symbol detection");
                return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
            }))
        }, 3032: function (t, n, e) {
            var r = e(2615), o = e(6058), i = e(4201), u = e(1880);
            t.exports = function () {
                var t = o("Symbol"), n = t && t.prototype, e = n && n.valueOf, c = i("toPrimitive");
                n && !n[c] && u(n, c, (function (t) {
                    return r(e, this)
                }), {arity: 1})
            }
        }, 6549: function (t, n, e) {
            var r = e(146);
            t.exports = r && !!Symbol.for && !!Symbol.keyFor
        }, 3648: function (t, n, e) {
            var r = e(8844);
            t.exports = r(1..valueOf)
        }, 7578: function (t, n, e) {
            var r = e(8700), o = Math.max, i = Math.min;
            t.exports = function (t, n) {
                var e = r(t);
                return e < 0 ? o(e + n, 0) : i(e, n)
            }
        }, 5290: function (t, n, e) {
            var r = e(4413), o = e(4684);
            t.exports = function (t) {
                return r(o(t))
            }
        }, 8700: function (t, n, e) {
            var r = e(8828);
            t.exports = function (t) {
                var n = +t;
                return n != n || 0 === n ? 0 : r(n)
            }
        }, 3126: function (t, n, e) {
            var r = e(8700), o = Math.min;
            t.exports = function (t) {
                var n = r(t);
                return n > 0 ? o(n, 9007199254740991) : 0
            }
        }, 690: function (t, n, e) {
            var r = e(4684), o = Object;
            t.exports = function (t) {
                return o(r(t))
            }
        }, 8732: function (t, n, e) {
            var r = e(2615), o = e(8999), i = e(734), u = e(4849), c = e(5899), a = e(4201), f = TypeError,
                s = a("toPrimitive");
            t.exports = function (t, n) {
                if (!o(t) || i(t)) return t;
                var e, a = u(t, s);
                if (a) {
                    if (void 0 === n && (n = "default"), e = r(a, t, n), !o(e) || i(e)) return e;
                    throw new f("Can't convert object to primitive value")
                }
                return void 0 === n && (n = "number"), c(t, n)
            }
        }, 8360: function (t, n, e) {
            var r = e(8732), o = e(734);
            t.exports = function (t) {
                var n = r(t, "string");
                return o(n) ? n : n + ""
            }
        }, 3043: function (t, n, e) {
            var r = {};
            r[e(4201)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
        }, 4327: function (t, n, e) {
            var r = e(926), o = String;
            t.exports = function (t) {
                if ("Symbol" === r(t)) throw new TypeError("Cannot convert a Symbol value to a string");
                return o(t)
            }
        }, 3691: function (t) {
            var n = String;
            t.exports = function (t) {
                try {
                    return n(t)
                } catch (t) {
                    return "Object"
                }
            }
        }, 4630: function (t, n, e) {
            var r = e(8844), o = 0, i = Math.random(), u = r(1..toString);
            t.exports = function (t) {
                return "Symbol(" + (void 0 === t ? "" : t) + ")_" + u(++o + i, 36)
            }
        }, 9525: function (t, n, e) {
            var r = e(146);
            t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }, 5648: function (t, n, e) {
            var r = e(7697), o = e(3689);
            t.exports = r && o((function () {
                return 42 !== Object.defineProperty((function () {
                }), "prototype", {value: 42, writable: !1}).prototype
            }))
        }, 9834: function (t, n, e) {
            var r = e(9037), o = e(9985), i = r.WeakMap;
            t.exports = o(i) && /native code/.test(String(i))
        }, 5405: function (t, n, e) {
            var r = e(496), o = e(6812), i = e(6145), u = e(2560).f;
            t.exports = function (t) {
                var n = r.Symbol || (r.Symbol = {});
                o(n, t) || u(n, t, {value: i.f(t)})
            }
        }, 6145: function (t, n, e) {
            var r = e(4201);
            n.f = r
        }, 4201: function (t, n, e) {
            var r = e(9037), o = e(3430), i = e(6812), u = e(4630), c = e(146), a = e(9525), f = r.Symbol, s = o("wks"),
                l = a ? f.for || f : f && f.withoutSetter || u;
            t.exports = function (t) {
                return i(s, t) || (s[t] = c && i(f, t) ? f[t] : l("Symbol." + t)), s[t]
            }
        }, 6350: function (t) {
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        }, 752: function (t, n, e) {
            var r = e(5290), o = e(7370), i = e(9478), u = e(618), c = e(2560).f, a = e(1934), f = e(7807), s = e(3931),
                l = e(7697), p = "Array Iterator", v = u.set, y = u.getterFor(p);
            t.exports = a(Array, "Array", (function (t, n) {
                v(this, {type: p, target: r(t), index: 0, kind: n})
            }), (function () {
                var t = y(this), n = t.target, e = t.index++;
                if (!n || e >= n.length) return t.target = void 0, f(void 0, !0);
                switch (t.kind) {
                    case"keys":
                        return f(e, !1);
                    case"values":
                        return f(n[e], !1)
                }
                return f([e, n[e]], !1)
            }), "values");
            var h = i.Arguments = i.Array;
            if (o("keys"), o("values"), o("entries"), !s && l && "values" !== h.name) try {
                c(h, "name", {value: "values"})
            } catch (t) {
            }
        }, 9903: function (t, n, e) {
            var r = e(6812), o = e(1880), i = e(1797), u = e(4201)("toPrimitive"), c = Date.prototype;
            r(c, u) || o(c, u, i)
        }, 8324: function (t, n, e) {
            var r = e(9989), o = e(6058), i = e(1735), u = e(2615), c = e(8844), a = e(3689), f = e(9985), s = e(734),
                l = e(6004), p = e(2643), v = e(146), y = String, h = o("JSON", "stringify"), d = c(/./.exec),
                b = c("".charAt), m = c("".charCodeAt), g = c("".replace), x = c(1..toString), w = /[\uD800-\uDFFF]/g,
                S = /^[\uD800-\uDBFF]$/, O = /^[\uDC00-\uDFFF]$/, k = !v || a((function () {
                    var t = o("Symbol")("stringify detection");
                    return "[null]" !== h([t]) || "{}" !== h({a: t}) || "{}" !== h(Object(t))
                })), j = a((function () {
                    return '"\\udf06\\ud834"' !== h("\udf06\ud834") || '"\\udead"' !== h("\udead")
                })), E = function (t, n) {
                    var e = l(arguments), r = p(n);
                    if (f(r) || void 0 !== t && !s(t)) return e[1] = function (t, n) {
                        if (f(r) && (n = u(r, this, y(t), n)), !s(n)) return n
                    }, i(h, null, e)
                }, T = function (t, n, e) {
                    var r = b(e, n - 1), o = b(e, n + 1);
                    return d(S, t) && !d(O, o) || d(O, t) && !d(S, r) ? "\\u" + x(m(t, 0), 16) : t
                };
            h && r({target: "JSON", stat: !0, arity: 3, forced: k || j}, {
                stringify: function (t, n, e) {
                    var r = l(arguments), o = i(k ? E : h, null, r);
                    return j && "string" == typeof o ? g(o, w, T) : o
                }
            })
        }, 9288: function (t, n, e) {
            var r = e(9989), o = e(3931), i = e(7697), u = e(9037), c = e(496), a = e(8844), f = e(5266), s = e(6812),
                l = e(3457), p = e(3622), v = e(734), y = e(8732), h = e(3689), d = e(2741).f, b = e(2474).f,
                m = e(2560).f, g = e(3648), x = e(1435).trim, w = "Number", S = u[w], O = c[w], k = S.prototype,
                j = u.TypeError, E = a("".slice), T = a("".charCodeAt), P = f(w, !S(" 0o1") || !S("0b1") || S("+0x1")),
                A = function (t) {
                    var n, e = arguments.length < 1 ? 0 : S(function (t) {
                        var n = y(t, "number");
                        return "bigint" == typeof n ? n : function (t) {
                            var n, e, r, o, i, u, c, a, f = y(t, "number");
                            if (v(f)) throw new j("Cannot convert a Symbol value to a number");
                            if ("string" == typeof f && f.length > 2) if (f = x(f), 43 === (n = T(f, 0)) || 45 === n) {
                                if (88 === (e = T(f, 2)) || 120 === e) return NaN
                            } else if (48 === n) {
                                switch (T(f, 1)) {
                                    case 66:
                                    case 98:
                                        r = 2, o = 49;
                                        break;
                                    case 79:
                                    case 111:
                                        r = 8, o = 55;
                                        break;
                                    default:
                                        return +f
                                }
                                for (u = (i = E(f, 2)).length, c = 0; c < u; c++) if ((a = T(i, c)) < 48 || a > o) return NaN;
                                return parseInt(i, r)
                            }
                            return +f
                        }(n)
                    }(t));
                    return p(k, n = this) && h((function () {
                        g(n)
                    })) ? l(Object(e), this, A) : e
                };
            A.prototype = k, P && !o && (k.constructor = A), r({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: P
            }, {Number: A});
            var L = function (t, n) {
                for (var e, r = i ? d(n) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; r.length > o; o++) s(n, e = r[o]) && !s(t, e) && m(t, e, b(n, e))
            };
            o && O && L(c[w], O), (P || o) && L(c[w], S)
        }, 9434: function (t, n, e) {
            var r = e(9989), o = e(146), i = e(3689), u = e(7518), c = e(690);
            r({
                target: "Object", stat: !0, forced: !o || i((function () {
                    u.f(1)
                }))
            }, {
                getOwnPropertySymbols: function (t) {
                    var n = u.f;
                    return n ? n(c(t)) : []
                }
            })
        }, 228: function (t, n, e) {
            var r = e(3043), o = e(1880), i = e(5073);
            r || o(Object.prototype, "toString", i, {unsafe: !0})
        }, 1694: function (t, n, e) {
            var r = e(730).charAt, o = e(4327), i = e(618), u = e(1934), c = e(7807), a = "String Iterator", f = i.set,
                s = i.getterFor(a);
            u(String, "String", (function (t) {
                f(this, {type: a, string: o(t), index: 0})
            }), (function () {
                var t, n = s(this), e = n.string, o = n.index;
                return o >= e.length ? c(void 0, !0) : (t = r(e, o), n.index += t.length, c(t, !1))
            }))
        }, 7855: function (t, n, e) {
            var r = e(9989), o = e(9037), i = e(2615), u = e(8844), c = e(3931), a = e(7697), f = e(146), s = e(3689),
                l = e(6812), p = e(3622), v = e(5027), y = e(5290), h = e(8360), d = e(4327), b = e(5684), m = e(5391),
                g = e(300), x = e(2741), w = e(6062), S = e(7518), O = e(2474), k = e(2560), j = e(8920), E = e(9556),
                T = e(1880), P = e(2148), A = e(3430), L = e(2713), I = e(7248), M = e(4630), F = e(4201), N = e(6145),
                C = e(5405), _ = e(3032), R = e(5997), D = e(618), G = e(2960).forEach, B = L("hidden"), U = "Symbol",
                Y = "prototype", X = D.set, H = D.getterFor(U), V = Object[Y], z = o.Symbol, $ = z && z[Y],
                W = o.RangeError, q = o.TypeError, Z = o.QObject, K = O.f, J = k.f, Q = w.f, tt = E.f, nt = u([].push),
                et = A("symbols"), rt = A("op-symbols"), ot = A("wks"), it = !Z || !Z[Y] || !Z[Y].findChild,
                ut = function (t, n, e) {
                    var r = K(V, n);
                    r && delete V[n], J(t, n, e), r && t !== V && J(V, n, r)
                }, ct = a && s((function () {
                    return 7 !== m(J({}, "a", {
                        get: function () {
                            return J(this, "a", {value: 7}).a
                        }
                    })).a
                })) ? ut : J, at = function (t, n) {
                    var e = et[t] = m($);
                    return X(e, {type: U, tag: t, description: n}), a || (e.description = n), e
                }, ft = function (t, n, e) {
                    t === V && ft(rt, n, e), v(t);
                    var r = h(n);
                    return v(e), l(et, r) ? (e.enumerable ? (l(t, B) && t[B][r] && (t[B][r] = !1), e = m(e, {enumerable: b(0, !1)})) : (l(t, B) || J(t, B, b(1, m(null))), t[B][r] = !0), ct(t, r, e)) : J(t, r, e)
                }, st = function (t, n) {
                    v(t);
                    var e = y(n), r = g(e).concat(yt(e));
                    return G(r, (function (n) {
                        a && !i(lt, e, n) || ft(t, n, e[n])
                    })), t
                }, lt = function (t) {
                    var n = h(t), e = i(tt, this, n);
                    return !(this === V && l(et, n) && !l(rt, n)) && (!(e || !l(this, n) || !l(et, n) || l(this, B) && this[B][n]) || e)
                }, pt = function (t, n) {
                    var e = y(t), r = h(n);
                    if (e !== V || !l(et, r) || l(rt, r)) {
                        var o = K(e, r);
                        return !o || !l(et, r) || l(e, B) && e[B][r] || (o.enumerable = !0), o
                    }
                }, vt = function (t) {
                    var n = Q(y(t)), e = [];
                    return G(n, (function (t) {
                        l(et, t) || l(I, t) || nt(e, t)
                    })), e
                }, yt = function (t) {
                    var n = t === V, e = Q(n ? rt : y(t)), r = [];
                    return G(e, (function (t) {
                        !l(et, t) || n && !l(V, t) || nt(r, et[t])
                    })), r
                };
            f || (z = function () {
                if (p($, this)) throw new q("Symbol is not a constructor");
                var t = arguments.length && void 0 !== arguments[0] ? d(arguments[0]) : void 0, n = M(t),
                    e = function (t) {
                        var r = void 0 === this ? o : this;
                        r === V && i(e, rt, t), l(r, B) && l(r[B], n) && (r[B][n] = !1);
                        var u = b(1, t);
                        try {
                            ct(r, n, u)
                        } catch (t) {
                            if (!(t instanceof W)) throw t;
                            ut(r, n, u)
                        }
                    };
                return a && it && ct(V, n, {configurable: !0, set: e}), at(n, t)
            }, T($ = z[Y], "toString", (function () {
                return H(this).tag
            })), T(z, "withoutSetter", (function (t) {
                return at(M(t), t)
            })), E.f = lt, k.f = ft, j.f = st, O.f = pt, x.f = w.f = vt, S.f = yt, N.f = function (t) {
                return at(F(t), t)
            }, a && (P($, "description", {
                configurable: !0, get: function () {
                    return H(this).description
                }
            }), c || T(V, "propertyIsEnumerable", lt, {unsafe: !0}))), r({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: !f,
                sham: !f
            }, {Symbol: z}), G(g(ot), (function (t) {
                C(t)
            })), r({target: U, stat: !0, forced: !f}, {
                useSetter: function () {
                    it = !0
                }, useSimple: function () {
                    it = !1
                }
            }), r({target: "Object", stat: !0, forced: !f, sham: !a}, {
                create: function (t, n) {
                    return void 0 === n ? m(t) : st(m(t), n)
                }, defineProperty: ft, defineProperties: st, getOwnPropertyDescriptor: pt
            }), r({target: "Object", stat: !0, forced: !f}, {getOwnPropertyNames: vt}), _(), R(z, U), I[B] = !0
        }, 6544: function (t, n, e) {
            var r = e(9989), o = e(7697), i = e(9037), u = e(8844), c = e(6812), a = e(9985), f = e(3622), s = e(4327),
                l = e(2148), p = e(8758), v = i.Symbol, y = v && v.prototype;
            if (o && a(v) && (!("description" in y) || void 0 !== v().description)) {
                var h = {}, d = function () {
                    var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : s(arguments[0]),
                        n = f(y, this) ? new v(t) : void 0 === t ? v() : v(t);
                    return "" === t && (h[n] = !0), n
                };
                p(d, v), d.prototype = y, y.constructor = d;
                var b = "Symbol(description detection)" === String(v("description detection")), m = u(y.valueOf),
                    g = u(y.toString), x = /^Symbol\((.*)\)[^)]+$/, w = u("".replace), S = u("".slice);
                l(y, "description", {
                    configurable: !0, get: function () {
                        var t = m(this);
                        if (c(h, t)) return "";
                        var n = g(t), e = b ? S(n, 7, -1) : w(n, x, "$1");
                        return "" === e ? void 0 : e
                    }
                }), r({global: !0, constructor: !0, forced: !0}, {Symbol: d})
            }
        }, 3975: function (t, n, e) {
            var r = e(9989), o = e(6058), i = e(6812), u = e(4327), c = e(3430), a = e(6549),
                f = c("string-to-symbol-registry"), s = c("symbol-to-string-registry");
            r({target: "Symbol", stat: !0, forced: !a}, {
                for: function (t) {
                    var n = u(t);
                    if (i(f, n)) return f[n];
                    var e = o("Symbol")(n);
                    return f[n] = e, s[e] = n, e
                }
            })
        }, 4254: function (t, n, e) {
            e(5405)("iterator")
        }, 9749: function (t, n, e) {
            e(7855), e(3975), e(1445), e(8324), e(9434)
        }, 1445: function (t, n, e) {
            var r = e(9989), o = e(6812), i = e(734), u = e(3691), c = e(3430), a = e(6549),
                f = c("symbol-to-string-registry");
            r({target: "Symbol", stat: !0, forced: !a}, {
                keyFor: function (t) {
                    if (!i(t)) throw new TypeError(u(t) + " is not a symbol");
                    if (o(f, t)) return f[t]
                }
            })
        }, 9373: function (t, n, e) {
            var r = e(5405), o = e(3032);
            r("toPrimitive"), o()
        }, 6265: function (t, n, e) {
            var r = e(9037), o = e(6338), i = e(3265), u = e(752), c = e(5773), a = e(5997), f = e(4201)("iterator"),
                s = u.values, l = function (t, n) {
                    if (t) {
                        if (t[f] !== s) try {
                            c(t, f, s)
                        } catch (n) {
                            t[f] = s
                        }
                        if (a(t, n, !0), o[n]) for (var e in u) if (t[e] !== u[e]) try {
                            c(t, e, u[e])
                        } catch (n) {
                            t[e] = u[e]
                        }
                    }
                };
            for (var p in o) l(r[p] && r[p].prototype, p);
            l(i, "DOMTokenList")
        }
    }, n = {};

    function e(r) {
        var o = n[r];
        if (void 0 !== o) return o.exports;
        var i = n[r] = {id: r, exports: {}};
        return t[r].call(i.exports, i, i.exports, e), i.exports
    }

    e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, {a: n}), n
    }, e.d = function (t, n) {
        for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: n[r]})
    }, e.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, e.nc = void 0, function () {
        var t = e(3379), n = e.n(t), r = e(7795), o = e.n(r), i = e(569), u = e.n(i), c = e(3565), a = e.n(c),
            f = e(9216), s = e.n(f), l = e(4589), p = e.n(l), v = e(485), y = {};

        function h(t) {
            return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, h(t)
        }

        function d(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, b(r.key), r)
            }
        }

        function b(t) {
            var n = function (t, n) {
                if ("object" != h(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != h(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == h(n) ? n : String(n)
        }

        y.styleTagTransform = p(), y.setAttributes = a(), y.insert = u().bind(null, "head"), y.domAPI = o(), y.insertStyleElement = s(), n()(v.Z, y), v.Z && v.Z.locals && v.Z.locals, e(9749), e(6544), e(4254), e(9373), e(752), e(9903), e(9288), e(228), e(1694), e(6265);
        var m = function () {
            function t() {
                !function (t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = document.getElementById("food");
                var n = 10 * Math.round(29 * Math.random()), e = 10 * Math.round(29 * Math.random());
                this.element.style.left = n + "px", this.element.style.top = e + "px"
            }

            var n, e;
            return n = t, (e = [{
                key: "X", get: function () {
                    return this.element.offsetLeft
                }
            }, {
                key: "Y", get: function () {
                    return this.element.offsetTop
                }
            }, {
                key: "change", value: function () {
                    var t = 10 * Math.round(29 * Math.random()), n = 10 * Math.round(29 * Math.random());
                    this.element.style.left = t + "px", this.element.style.top = n + "px"
                }
            }]) && d(n.prototype, e), Object.defineProperty(n, "prototype", {writable: !1}), t
        }();

        function g(t) {
            return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, g(t)
        }

        function x(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, w(r.key), r)
            }
        }

        function w(t) {
            var n = function (t, n) {
                if ("object" != g(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != g(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == g(n) ? n : String(n)
        }

        var S = function () {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                !function (t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.score = 0, this.level = 1, this.levelEle = document.getElementById("level"), this.scoreEle = document.getElementById("score"), this.max_level = n, this.upScore = e
            }

            var n, e;
            return n = t, (e = [{
                key: "addScore", value: function () {
                    this.score++, this.scoreEle.innerHTML = this.score + "", this.score % this.upScore == 0 && this.levelUp()
                }
            }, {
                key: "levelUp", value: function () {
                    this.level < this.max_level && (this.level++, this.levelEle.innerHTML = this.level + "")
                }
            }, {
                key: "refresh", value: function () {
                    this.level = 1, this.score = 0, this.scoreEle.innerHTML = this.score + "", this.levelEle.innerHTML = this.level + ""
                }
            }]) && x(n.prototype, e), Object.defineProperty(n, "prototype", {writable: !1}), t
        }(), O = S;

        function k(t) {
            return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, k(t)
        }

        function j(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, E(r.key), r)
            }
        }

        function E(t) {
            var n = function (t, n) {
                if ("object" != k(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != k(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == k(n) ? n : String(n)
        }

        var T = function () {
            function t() {
                !function (t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = document.getElementById("snake"), this.head = document.querySelector("#snake>div"), this.bodies = this.element.getElementsByTagName("div")
            }

            var n, e;
            return n = t, (e = [{
                key: "X", get: function () {
                    return this.head.offsetLeft
                }, set: function (t) {
                    if (this.X != t) {
                        if (t < 0 || t > 290) throw new Error(" 🐍 撞墙了");
                        if (this.bodies.length > 1 && t == this.bodies[1].offsetLeft) throw new Error("🐍 掉头了");
                        this.moveBody(), this.head.style.left = t + "px", this.checkConfic()
                    }
                }
            }, {
                key: "Y", get: function () {
                    return this.head.offsetTop
                }, set: function (t) {
                    if (this.Y != t) {
                        if (t < 0 || t > 290) throw new Error(" 🐍 撞墙了");
                        if (this.bodies.length > 1 && t == this.bodies[1].offsetTop) throw new Error("🐍 掉头了");
                        this.moveBody(), this.head.style.top = t + "px", this.checkConfic()
                    }
                }
            }, {
                key: "addbody", value: function () {
                    this.element.insertAdjacentHTML("beforeend", "<div></div>")
                }
            }, {
                key: "moveBody", value: function () {
                    for (var t = this.bodies.length - 1; t > 0; t--) {
                        var n = this.bodies[t - 1].offsetLeft, e = this.bodies[t - 1].offsetTop;
                        this.bodies[t].style.left = n + "px", this.bodies[t].style.top = e + "px"
                    }
                }
            }, {
                key: "checkConfic", value: function () {
                    for (var t = this.bodies.length - 1; t > 3; t--) if (this.bodies[t].offsetTop == this.Y && this.X == this.bodies[t].offsetLeft) throw new Error("🐍 撞到自己了")
                }
            }, {
                key: "refresh", value: function () {
                    this.element.innerHTML = "<div></div>", this.element = document.getElementById("snake"), this.head = document.querySelector("#snake>div"), this.bodies = this.element.getElementsByTagName("div")
                }
            }]) && j(n.prototype, e), Object.defineProperty(n, "prototype", {writable: !1}), t
        }();

        function P(t) {
            return P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, P(t)
        }

        function A(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, L(r.key), r)
            }
        }

        function L(t) {
            var n = function (t, n) {
                if ("object" != P(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var r = e.call(t, "string");
                    if ("object" != P(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == P(n) ? n : String(n)
        }

        new (function () {
            function t() {
                !function (t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.direction = "", this.isAlive = !0, this.snake = new T, this.food = new m, this.scorePanel = new O, this.init()
            }

            var n, e;
            return n = t, (e = [{
                key: "init", value: function () {
                    document.addEventListener("keydown", this.KeydownHandler.bind(this)), this.run()
                }
            }, {
                key: "KeydownHandler", value: function (t) {
                    "ArrowUp" == t.key || "ArrowDown" == t.key || "ArrowLeft" == t.key || "ArrowRight" == t.key ? this.direction = t.key : (alert("invalid Key"), this.refresh())
                }
            }, {
                key: "dead", value: function () {
                    alert("U Dead"), this.snake.X = 0, this.snake.Y = 0, this.direction = ""
                }
            }, {
                key: "run", value: function () {
                    var t = this.snake.X, n = this.snake.Y;
                    switch (this.direction) {
                        case"Up":
                        case"ArrowUp":
                            n -= 10;
                            break;
                        case"Down":
                        case"ArrowDown":
                            n += 10;
                            break;
                        case"Left":
                        case"ArrowLeft":
                            t -= 10;
                            break;
                        case"Right":
                        case"ArrowRight":
                            t += 10
                    }
                    console.log(this.direction), console.log("X", this.snake.X), console.log("Y", this.snake.Y), console.log("X-next", t), console.log("Y-next", n), this.checkEat(t, n);
                    try {
                        this.snake.X = t, this.snake.Y = n
                    } catch (t) {
                        alert(t.message + " Game Over!"), this.isAlive = !1
                    }
                    this.isAlive || this.refresh(), setTimeout(this.run.bind(this), 300 - 30 * (this.scorePanel.level - 1))
                }
            }, {
                key: "checkEat", value: function (t, n) {
                    t == this.food.X && n == this.food.Y && (this.food.change(), this.snake.addbody(), this.scorePanel.addScore())
                }
            }, {
                key: "refresh", value: function () {
                    this.snake.refresh(), this.scorePanel.refresh(), this.isAlive = !0, this.direction = ""
                }
            }]) && A(n.prototype, e), Object.defineProperty(n, "prototype", {writable: !1}), t
        }())
    }()
}();