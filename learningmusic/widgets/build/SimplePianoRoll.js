!function(n) {
    "use strict";
    function r(n, r, t) {
        return t.a = n,
            t.f = r,
            t
    }
    function b(t) {
        return r(2, t, function(r) {
            return function(n) {
                return t(r, n)
            }
        })
    }
    function t(u) {
        return r(3, u, function(t) {
            return function(r) {
                return function(n) {
                    return u(t, r, n)
                }
            }
        })
    }
    function u(e) {
        return r(4, e, function(u) {
            return function(t) {
                return function(r) {
                    return function(n) {
                        return e(u, t, r, n)
                    }
                }
            }
        })
    }
    function e(a) {
        return r(5, a, function(e) {
            return function(u) {
                return function(t) {
                    return function(r) {
                        return function(n) {
                            return a(e, u, t, r, n)
                        }
                    }
                }
            }
        })
    }
    function a(i) {
        return r(6, i, function(a) {
            return function(e) {
                return function(u) {
                    return function(t) {
                        return function(r) {
                            return function(n) {
                                return i(a, e, u, t, r, n)
                            }
                        }
                    }
                }
            }
        })
    }
    function i(o) {
        return r(7, o, function(i) {
            return function(a) {
                return function(e) {
                    return function(u) {
                        return function(t) {
                            return function(r) {
                                return function(n) {
                                    return o(i, a, e, u, t, r, n)
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    function o(f) {
        return r(8, f, function(o) {
            return function(i) {
                return function(a) {
                    return function(e) {
                        return function(u) {
                            return function(t) {
                                return function(r) {
                                    return function(n) {
                                        return f(o, i, a, e, u, t, r, n)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    function f(c) {
        return r(9, c, function(f) {
            return function(o) {
                return function(i) {
                    return function(a) {
                        return function(e) {
                            return function(u) {
                                return function(t) {
                                    return function(r) {
                                        return function(n) {
                                            return c(f, o, i, a, e, u, t, r, n)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    function R(n, r, t) {
        return 2 === n.a ? n.f(r, t) : n(r)(t)
    }
    function J(n, r, t, u) {
        return 3 === n.a ? n.f(r, t, u) : n(r)(t)(u)
    }
    function H(n, r, t, u, e) {
        return 4 === n.a ? n.f(r, t, u, e) : n(r)(t)(u)(e)
    }
    function P(n, r, t, u, e, a) {
        return 5 === n.a ? n.f(r, t, u, e, a) : n(r)(t)(u)(e)(a)
    }
    function c(n, r, t, u, e, a, i) {
        return 6 === n.a ? n.f(r, t, u, e, a, i) : n(r)(t)(u)(e)(a)(i)
    }
    var v = t(function(n, r, t) {
        for (var u = new Array(n), e = 0; e < n; e++)
            u[e] = t(r + e);
        return u
    })
        , l = b(function(n, r) {
        for (var t = new Array(n), u = 0; u < n && r.b; u++)
            t[u] = r.a,
                r = r.b;
        return t.length = u,
            U(t, r)
    })
        , s = b(function(n, r) {
        return r[n]
    })
        , d = (t(function(n, r, t) {
        for (var u = t.length, e = new Array(u), a = 0; a < u; a++)
            e[a] = t[a];
        return e[n] = r,
            e
    }),
        b(function(n, r) {
            for (var t = r.length, u = new Array(t + 1), e = 0; e < t; e++)
                u[e] = r[e];
            return u[t] = n,
                u
        }),
        t(function(n, r, t) {
            for (var u = t.length, e = 0; e < u; e++)
                r = R(n, t[e], r);
            return r
        }),
        t(function(n, r, t) {
            for (var u = t.length - 1; 0 <= u; u--)
                r = R(n, t[u], r);
            return r
        }));
    b(function(n, r) {
        for (var t = r.length, u = new Array(t), e = 0; e < t; e++)
            u[e] = n(r[e]);
        return u
    }),
        t(function(n, r, t) {
            for (var u = t.length, e = new Array(u), a = 0; a < u; a++)
                e[a] = R(n, r + a, t[a]);
            return e
        }),
        t(function(n, r, t) {
            return t.slice(n, r)
        }),
        t(function(n, r, t) {
            var u = r.length
                , e = n - u;
            e > t.length && (e = t.length);
            for (var a = new Array(u + e), i = 0; i < u; i++)
                a[i] = r[i];
            for (i = 0; i < e; i++)
                a[i + u] = t[i];
            return a
        }),
        b(function(n, r) {
            return r
        }),
        b(function(n, r) {
            return console.log(n + ": <internals>"),
                r
        });
    function h(n) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + n + ".md")
    }
    function K(n, r) {
        for (var t, u = [], e = g(n, r, 0, u); e && (t = u.pop()); e = g(t.a, t.b, 0, u))
            ;
        return e
    }
    function g(n, r, t, u) {
        if (100 < t)
            return u.push(U(n, r)),
                !0;
        if (n === r)
            return !0;
        if ("object" != typeof n || null === n || null === r)
            return "function" == typeof n && h(5),
                !1;
        for (var e in n.$ < 0 && (n = Jr(n),
            r = Jr(r)),
            n)
            if (!g(n[e], r[e], t + 1, u))
                return !1;
        return !0
    }
    b(K),
        b(function(n, r) {
            return !K(n, r)
        });
    function W(n, r, t) {
        if ("object" != typeof n)
            return n === r ? 0 : n < r ? -1 : 1;
        if (!n.$)
            return (t = W(n.a, r.a)) ? t : (t = W(n.b, r.b)) ? t : W(n.c, r.c);
        for (; n.b && r.b && !(t = W(n.a, r.a)); n = n.b,
            r = r.b)
            ;
        return t || (n.b ? 1 : r.b ? -1 : 0)
    }
    b(function(n, r) {
        return W(n, r) < 0
    }),
        b(function(n, r) {
            return W(n, r) < 1
        }),
        b(function(n, r) {
            return 0 < W(n, r)
        }),
        b(function(n, r) {
            return 0 <= W(n, r)
        });
    var _ = b(function(n, r) {
        var t = W(n, r);
        return t < 0 ? Kr : t ? Pr : Hr
    })
        , p = 0;
    function U(n, r) {
        return {
            a: n,
            b: r
        }
    }
    function $(n) {
        return n
    }
    function V(n, r) {
        var t = {};
        for (var u in n)
            t[u] = n[u];
        for (var u in r)
            t[u] = r[u];
        return t
    }
    b(w);
    function w(n, r) {
        if ("string" == typeof n)
            return n + r;
        if (!n.b)
            return r;
        var t = m(n.a, r);
        n = n.b;
        for (var u = t; n.b; n = n.b)
            u = u.b = m(n.a, r);
        return t
    }
    var Y = {
        $: 0
    };
    function m(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    }
    var y = b(m);
    function Q(n) {
        for (var r = Y, t = n.length; t--; )
            r = m(n[t], r);
        return r
    }
    function A(n) {
        for (var r = []; n.b; n = n.b)
            r.push(n.a);
        return r
    }
    var E = t(function(n, r, t) {
        for (var u = []; r.b && t.b; r = r.b,
            t = t.b)
            u.push(R(n, r.a, t.a));
        return Q(u)
    })
        , x = (u(function(n, r, t, u) {
        for (var e = []; r.b && t.b && u.b; r = r.b,
            t = t.b,
            u = u.b)
            e.push(J(n, r.a, t.a, u.a));
        return Q(e)
    }),
        e(function(n, r, t, u, e) {
            for (var a = []; r.b && t.b && u.b && e.b; r = r.b,
                t = t.b,
                u = u.b,
                e = e.b)
                a.push(H(n, r.a, t.a, u.a, e.a));
            return Q(a)
        }),
        a(function(n, r, t, u, e, a) {
            for (var i = []; r.b && t.b && u.b && e.b && a.b; r = r.b,
                t = t.b,
                u = u.b,
                e = e.b,
                a = a.b)
                i.push(P(n, r.a, t.a, u.a, e.a, a.a));
            return Q(i)
        }),
        b(function(t, n) {
            return Q(A(n).sort(function(n, r) {
                return W(t(n), t(r))
            }))
        }))
        , C = (b(function(u, n) {
        return Q(A(n).sort(function(n, r) {
            var t = R(u, n, r);
            return t === Hr ? 0 : t === Kr ? -1 : 1
        }))
    }),
        b(function(n, r) {
            return n + r
        }),
        b(function(n, r) {
            return n - r
        }),
        b(function(n, r) {
            return n * r
        }),
        b(function(n, r) {
            return n / r
        }),
        b(function(n, r) {
            return n / r | 0
        }),
        b(Math.pow));
    b(function(n, r) {
        return r % n
    }),
        b(function(n, r) {
            var t = r % n;
            return 0 === n ? h(11) : 0 < t && n < 0 || t < 0 && 0 < n ? t + n : t
        }),
        Math.PI,
        Math.E,
        Math.cos,
        Math.sin,
        Math.tan,
        Math.acos,
        Math.asin,
        Math.atan,
        b(Math.atan2);
    var X = Math.ceil
        , k = Math.floor
        , B = Math.round
        , j = (Math.sqrt,
        Math.log);
    isNaN;
    b(function(n, r) {
        return n && r
    }),
        b(function(n, r) {
            return n || r
        }),
        b(function(n, r) {
            return n !== r
        }),
        b(function(n, r) {
            return n + r
        });
    b(function(n, r) {
        return n + r
    });
    b(function(n, r) {
        for (var t = r.length, u = new Array(t), e = 0; e < t; ) {
            var a = r.charCodeAt(e);
            55296 <= a && a <= 56319 ? (u[e] = n($(r[e] + r[e + 1])),
                e += 2) : (u[e] = n($(r[e])),
                e++)
        }
        return u.join("")
    }),
        b(function(n, r) {
            for (var t = [], u = r.length, e = 0; e < u; ) {
                var a = r[e]
                    , i = r.charCodeAt(e);
                e++,
                55296 <= i && i <= 56319 && (a += r[e],
                    e++),
                n($(a)) && t.push(a)
            }
            return t.join("")
        });
    t(function(n, r, t) {
        for (var u = t.length, e = 0; e < u; ) {
            var a = t[e]
                , i = t.charCodeAt(e);
            e++,
            55296 <= i && i <= 56319 && (a += t[e],
                e++),
                r = R(n, $(a), r)
        }
        return r
    }),
        t(function(n, r, t) {
            for (var u = t.length; u--; ) {
                var e = t[u]
                    , a = t.charCodeAt(u);
                56320 <= a && a <= 57343 && (e = t[--u] + e),
                    r = R(n, $(e), r)
            }
            return r
        });
    var N = b(function(n, r) {
        return r.split(n)
    })
        , M = b(function(n, r) {
        return r.join(n)
    })
        , G = t(function(n, r, t) {
        return t.slice(n, r)
    });
    b(function(n, r) {
        for (var t = r.length; t--; ) {
            var u = r[t]
                , e = r.charCodeAt(t);
            if (56320 <= e && e <= 57343 && (u = r[--t] + u),
                n($(u)))
                return !0
        }
        return !1
    });
    var T = b(function(n, r) {
        for (var t = r.length; t--; ) {
            var u = r[t]
                , e = r.charCodeAt(t);
            if (56320 <= e && e <= 57343 && (u = r[--t] + u),
                !n($(u)))
                return !1
        }
        return !0
    })
        , z = b(function(n, r) {
        return -1 < r.indexOf(n)
    })
        , D = (b(function(n, r) {
        return 0 === r.indexOf(n)
    }),
        b(function(n, r) {
            return r.length >= n.length && r.lastIndexOf(n) === r.length - n.length
        }),
        b(function(n, r) {
            var t = n.length;
            if (t < 1)
                return Y;
            for (var u = 0, e = []; -1 < (u = r.indexOf(n, u)); )
                e.push(u),
                    u += t;
            return Q(e)
        }));
    function S(n) {
        return n + ""
    }
    var L = b(function(n, r) {
        return {
            $: 10,
            d: n,
            b: r
        }
    })
        , F = b(function(n, r) {
        return {
            $: 11,
            e: n,
            b: r
        }
    });
    function O(n, r) {
        return {
            $: 13,
            f: n,
            g: r
        }
    }
    var q = b(function(n, r) {
        return {
            $: 14,
            b: r,
            h: n
        }
    });
    var I = b(function(n, r) {
        return O(n, [r])
    })
        , Z = t(function(n, r, t) {
        return O(n, [r, t])
    })
        , nn = (u(function(n, r, t, u) {
        return O(n, [r, t, u])
    }),
        e(function(n, r, t, u, e) {
            return O(n, [r, t, u, e])
        }),
        a(function(n, r, t, u, e, a) {
            return O(n, [r, t, u, e, a])
        }),
        i(function(n, r, t, u, e, a, i) {
            return O(n, [r, t, u, e, a, i])
        }),
        o(function(n, r, t, u, e, a, i, o) {
            return O(n, [r, t, u, e, a, i, o])
        }),
        f(function(n, r, t, u, e, a, i, o, f) {
            return O(n, [r, t, u, e, a, i, o, f])
        }),
        b(function(n, r) {
            try {
                return rn(n, JSON.parse(r))
            } catch (n) {
                return Wr(R(Ur, "This is not valid JSON! " + n.message, cn(r)))
            }
        }),
        b(function(n, r) {
            return rn(n, vn(r))
        }));
    function rn(n, r) {
        switch (n.$) {
            case 3:
                return "boolean" == typeof r ? Qr(r) : en("a BOOL", r);
            case 2:
                return "number" != typeof r ? en("an INT", r) : -2147483647 < r && r < 2147483647 && (0 | r) === r ? Qr(r) : !isFinite(r) || r % 1 ? en("an INT", r) : Qr(r);
            case 4:
                return "number" == typeof r ? Qr(r) : en("a FLOAT", r);
            case 6:
                return "string" == typeof r ? Qr(r) : r instanceof String ? Qr(r + "") : en("a STRING", r);
            case 9:
                return null === r ? Qr(n.c) : en("null", r);
            case 5:
                return Qr(cn(r));
            case 7:
                return Array.isArray(r) ? tn(n.b, r, Q) : en("a LIST", r);
            case 8:
                return Array.isArray(r) ? tn(n.b, r, un) : en("an ARRAY", r);
            case 10:
                var t = n.d;
                if ("object" != typeof r || null === r || !(t in r))
                    return en("an OBJECT with a field named `" + t + "`", r);
                var u = rn(n.b, r[t]);
                return Mt(u) ? u : Wr(R(Vr, t, u.a));
            case 11:
                var e = n.e;
                if (!Array.isArray(r))
                    return en("an ARRAY", r);
                if (e >= r.length)
                    return en("a LONGER array. Need index " + e + " but only see " + r.length + " entries", r);
                u = rn(n.b, r[e]);
                return Mt(u) ? u : Wr(R(Yr, e, u.a));
            case 12:
                if ("object" != typeof r || null === r || Array.isArray(r))
                    return en("an OBJECT", r);
                var a = Y;
                for (var i in r)
                    if (r.hasOwnProperty(i)) {
                        u = rn(n.b, r[i]);
                        if (!Mt(u))
                            return Wr(R(Vr, i, u.a));
                        a = m(U(i, u.a), a)
                    }
                return Qr(lt(a));
            case 13:
                for (var o = n.f, f = n.g, c = 0; c < f.length; c++) {
                    u = rn(f[c], r);
                    if (!Mt(u))
                        return u;
                    o = o(u.a)
                }
                return Qr(o);
            case 14:
                u = rn(n.b, r);
                return Mt(u) ? rn(n.h(u.a), r) : u;
            case 15:
                for (var v = Y, l = n.g; l.b; l = l.b) {
                    u = rn(l.a, r);
                    if (Mt(u))
                        return u;
                    v = m(u.a, v)
                }
                return Wr(Zr(lt(v)));
            case 1:
                return Wr(R(Ur, n.a, cn(r)));
            case 0:
                return Qr(n.a)
        }
    }
    function tn(n, r, t) {
        for (var u = r.length, e = new Array(u), a = 0; a < u; a++) {
            var i = rn(n, r[a]);
            if (!Mt(i))
                return Wr(R(Yr, a, i.a));
            e[a] = i.a
        }
        return Qr(t(e))
    }
    function un(r) {
        return R(Nt, r.length, function(n) {
            return r[n]
        })
    }
    function en(n, r) {
        return Wr(R(Ur, "Expecting " + n, cn(r)))
    }
    function an(n, r) {
        if (n === r)
            return !0;
        if (n.$ !== r.$)
            return !1;
        switch (n.$) {
            case 0:
            case 1:
                return n.a === r.a;
            case 3:
            case 2:
            case 4:
            case 6:
            case 5:
                return !0;
            case 9:
                return n.c === r.c;
            case 7:
            case 8:
            case 12:
                return an(n.b, r.b);
            case 10:
                return n.d === r.d && an(n.b, r.b);
            case 11:
                return n.e === r.e && an(n.b, r.b);
            case 13:
                return n.f === r.f && on(n.g, r.g);
            case 14:
                return n.h === r.h && an(n.b, r.b);
            case 15:
                return on(n.g, r.g)
        }
    }
    function on(n, r) {
        var t = n.length;
        if (t !== r.length)
            return !1;
        for (var u = 0; u < t; u++)
            if (!an(n[u], r[u]))
                return !1;
        return !0
    }
    var fn = b(function(n, r) {
        return JSON.stringify(vn(r), null, n) + ""
    });
    function cn(n) {
        return n
    }
    function vn(n) {
        return n
    }
    var ln = t(function(n, r, t) {
        return t[n] = vn(r),
            t
    });
    function sn(n) {
        return {
            $: 0,
            a: n
        }
    }
    function bn(n) {
        return {
            $: 2,
            b: n,
            c: null
        }
    }
    var dn = b(function(n, r) {
        return {
            $: 3,
            b: n,
            d: r
        }
    });
    b(function(n, r) {
        return {
            $: 4,
            b: n,
            d: r
        }
    });
    var hn = 0;
    function gn(n) {
        var r = {
            $: 0,
            e: hn++,
            f: n,
            g: null,
            h: []
        };
        return yn(r),
            r
    }
    function _n(r) {
        return bn(function(n) {
            n(sn(gn(r)))
        })
    }
    function pn(n, r) {
        n.h.push(r),
            yn(n)
    }
    var $n = b(function(r, t) {
        return bn(function(n) {
            pn(r, t),
                n(sn(p))
        })
    });
    var wn = !1
        , mn = [];
    function yn(n) {
        if (mn.push(n),
            !wn) {
            for (wn = !0; n = mn.shift(); )
                An(n);
            wn = !1
        }
    }
    function An(r) {
        for (; r.f; ) {
            var n = r.f.$;
            if (0 === n || 1 === n) {
                for (; r.g && r.g.$ !== n; )
                    r.g = r.g.i;
                if (!r.g)
                    return;
                r.f = r.g.b(r.f.a),
                    r.g = r.g.i
            } else {
                if (2 === n)
                    return void (r.f.c = r.f.b(function(n) {
                        r.f = n,
                            yn(r)
                    }));
                if (5 === n) {
                    if (0 === r.h.length)
                        return;
                    r.f = r.f.b(r.h.shift())
                } else
                    r.g = {
                        $: 3 === n ? 0 : 1,
                        b: r.f.b,
                        i: r.g
                    },
                        r.f = r.f.d
            }
        }
    }
    u(function(n, r, t, u) {
        return En(r, u, n.a8, n.bf, n.bd, function() {
            return function() {}
        })
    });
    function En(n, r, t, u, e, a) {
        var i = R(nn, n, cn(r ? r.flags : void 0));
        Mt(i) || h(2);
        var o = {}
            , f = (i = t(i.a)).a
            , c = a(l, f)
            , v = function(n, r) {
            var t;
            for (var u in xn) {
                var e = xn[u];
                e.a && ((t = t || {})[u] = e.a(u, r)),
                    n[u] = Cn(e, r)
            }
            return t
        }(o, l);
        function l(n, r) {
            i = R(u, n, f),
                c(f = i.a, r),
                jn(o, i.b, e(f))
        }
        return jn(o, i.b, e(f)),
            v ? {
                ports: v
            } : {}
    }
    var xn = {};
    function Cn(n, r) {
        var u = {
            g: r,
            h: void 0
        }
            , e = n.c
            , a = n.d
            , i = n.e
            , o = n.f;
        return u.h = gn(R(dn, function n(t) {
            return R(dn, n, function(n) {
                return {
                    $: 5,
                    b: n
                }
            }(function(n) {
                var r = n.a;
                return 0 === n.$ ? J(a, u, r, t) : i && o ? H(e, u, r.i, r.j, t) : J(e, u, i ? r.i : r.j, t)
            }))
        }, n.b))
    }
    var Xn = b(function(r, t) {
        return bn(function(n) {
            r.g(t),
                n(sn(p))
        })
    });
    b(function(n, r) {
        return R($n, n.h, {
            $: 0,
            a: r
        })
    });
    function kn(r) {
        return function(n) {
            return {
                $: 1,
                k: r,
                l: n
            }
        }
    }
    function Bn(n) {
        return {
            $: 2,
            m: n
        }
    }
    b(function(n, r) {
        return {
            $: 3,
            n: n,
            o: r
        }
    });
    function jn(n, r, t) {
        var u = {};
        for (var e in Nn(!0, r, u, null),
            Nn(!1, t, u, null),
            n)
            pn(n[e], {
                $: "fx",
                a: u[e] || {
                    i: Y,
                    j: Y
                }
            })
    }
    function Nn(n, r, t, u) {
        switch (r.$) {
            case 1:
                var e = r.k
                    , a = function(n, r, t, u) {
                    return R(n ? xn[r].e : xn[r].f, function(n) {
                        for (var r = t; r; r = r.q)
                            n = r.p(n);
                        return n
                    }, u)
                }(n, e, u, r.l);
                return void (t[e] = function(n, r, t) {
                    return t = t || {
                        i: Y,
                        j: Y
                    },
                        n ? t.i = m(r, t.i) : t.j = m(r, t.j),
                        t
                }(n, a, t[e]));
            case 2:
                for (var i = r.m; i.b; i = i.b)
                    Nn(n, i.a, t, u);
                return;
            case 3:
                return void Nn(n, r.o, t, {
                    p: r.n,
                    q: u
                })
        }
    }
    function Mn(n) {
        xn[n] && h(3)
    }
    function Gn(n, r) {
        return Mn(n),
            xn[n] = {
                e: Tn,
                r: r,
                a: zn
            },
            kn(n)
    }
    var Tn = b(function(n, r) {
        return r
    });
    function zn(n) {
        var i = []
            , o = xn[n].r
            , f = function(t) {
            return bn(function(n) {
                var r = setTimeout(function() {
                    n(sn(p))
                }, t);
                return function() {
                    clearTimeout(r)
                }
            })
        }(0);
        return xn[n].b = f,
            xn[n].c = t(function(n, r, t) {
                for (; r.b; r = r.b)
                    for (var u = i, e = vn(o(r.a)), a = 0; a < u.length; a++)
                        u[a](e);
                return f
            }),
            {
                subscribe: function(n) {
                    i.push(n)
                },
                unsubscribe: function(n) {
                    var r = (i = i.slice()).indexOf(n);
                    0 <= r && i.splice(r, 1)
                }
            }
    }
    function Dn(n, r) {
        return Mn(n),
            xn[n] = {
                f: Ln,
                r: r,
                a: Fn
            },
            kn(n)
    }
    var Sn, Ln = b(function(r, t) {
        return function(n) {
            return r(t(n))
        }
    });
    function Fn(n, e) {
        var a = Y
            , i = xn[n].r
            , u = sn(null);
        return xn[n].b = u,
            xn[n].c = t(function(n, r, t) {
                return a = r,
                    u
            }),
            {
                send: function(n) {
                    var r = R(nn, i, cn(n));
                    Mt(r) || h(4, r.a);
                    for (var t = r.a, u = a; u.b; u = u.b)
                        e(u.a(t))
                }
            }
    }
    var On = "undefined" != typeof document ? document : {};
    function qn(n, r) {
        n.appendChild(r)
    }
    u(function(n, r, t, u) {
        var e = u.node;
        return e.parentNode.replaceChild(tr(n, function() {}), e),
            {}
    });
    function In(n) {
        return {
            $: 0,
            a: n
        }
    }
    var Rn = b(function(a, i) {
        return b(function(n, r) {
            for (var t = [], u = 0; r.b; r = r.b) {
                var e = r.a;
                u += e.b || 0,
                    t.push(e)
            }
            return u += t.length,
                {
                    $: 1,
                    c: i,
                    d: nr(n),
                    e: t,
                    f: a,
                    b: u
                }
        })
    })
        , Jn = Rn(void 0)
        , Hn = b(function(a, i) {
        return b(function(n, r) {
            for (var t = [], u = 0; r.b; r = r.b) {
                var e = r.a;
                u += e.b.b || 0,
                    t.push(e)
            }
            return u += t.length,
                {
                    $: 2,
                    c: i,
                    d: nr(n),
                    e: t,
                    f: a,
                    b: u
                }
        })
    });
    Hn(void 0);
    b(function(n, r) {
        return {
            $: 4,
            j: n,
            k: r,
            b: 1 + (r.b || 0)
        }
    });
    function Pn(n, r) {
        return {
            $: 5,
            l: n,
            m: r,
            k: void 0
        }
    }
    b(function(n, r) {
        return Pn([n, r], function() {
            return n(r)
        })
    }),
        t(function(n, r, t) {
            return Pn([n, r, t], function() {
                return R(n, r, t)
            })
        }),
        u(function(n, r, t, u) {
            return Pn([n, r, t, u], function() {
                return J(n, r, t, u)
            })
        }),
        e(function(n, r, t, u, e) {
            return Pn([n, r, t, u, e], function() {
                return H(n, r, t, u, e)
            })
        }),
        a(function(n, r, t, u, e, a) {
            return Pn([n, r, t, u, e, a], function() {
                return P(n, r, t, u, e, a)
            })
        }),
        i(function(n, r, t, u, e, a, i) {
            return Pn([n, r, t, u, e, a, i], function() {
                return c(n, r, t, u, e, a, i)
            })
        }),
        o(function(n, r, t, u, e, a, i, o) {
            return Pn([n, r, t, u, e, a, i, o], function() {
                return function(n, r, t, u, e, a, i, o) {
                    return 7 === n.a ? n.f(r, t, u, e, a, i, o) : n(r)(t)(u)(e)(a)(i)(o)
                }(n, r, t, u, e, a, i, o)
            })
        }),
        f(function(n, r, t, u, e, a, i, o, f) {
            return Pn([n, r, t, u, e, a, i, o, f], function() {
                return function(n, r, t, u, e, a, i, o, f) {
                    return 8 === n.a ? n.f(r, t, u, e, a, i, o, f) : n(r)(t)(u)(e)(a)(i)(o)(f)
                }(n, r, t, u, e, a, i, o, f)
            })
        });
    var Kn = b(function(n, r) {
        return {
            $: "a0",
            n: n,
            o: r
        }
    })
        , Wn = b(function(n, r) {
        return {
            $: "a1",
            n: n,
            o: r
        }
    })
        , Un = b(function(n, r) {
        return {
            $: "a2",
            n: n,
            o: r
        }
    })
        , Vn = b(function(n, r) {
        return {
            $: "a3",
            n: n,
            o: r
        }
    });
    t(function(n, r, t) {
        return {
            $: "a4",
            n: r,
            o: {
                f: n,
                o: t
            }
        }
    });
    b(function(n, r) {
        return "a0" === r.$ ? R(Kn, r.n, function(n, r) {
            var t = Lt(r);
            return {
                $: r.$,
                a: t ? J(Dt, t < 3 ? Qn : Zn, St(n), r.a) : R(zt, n, r.a)
            }
        }(n, r.o)) : r
    });
    var Yn, Qn = b(function(n, r) {
        return U(n(r.a), r.b)
    }), Zn = b(function(n, r) {
        return {
            p: n(r.p),
            al: r.al,
            ad: r.ad
        }
    });
    function nr(n) {
        for (var r = {}; n.b; n = n.b) {
            var t = n.a
                , u = t.$
                , e = t.n
                , a = t.o;
            if ("a2" !== u) {
                var i = r[u] || (r[u] = {});
                "a3" === u && "class" === e ? rr(i, e, a) : i[e] = a
            } else
                "className" === e ? rr(r, e, vn(a)) : r[e] = vn(a)
        }
        return r
    }
    function rr(n, r, t) {
        var u = n[r];
        n[r] = u ? u + " " + t : t
    }
    function tr(n, r) {
        var t = n.$;
        if (5 === t)
            return tr(n.k || (n.k = n.m()), r);
        if (0 === t)
            return On.createTextNode(n.a);
        if (4 === t) {
            for (var u = n.k, e = n.j; 4 === u.$; )
                "object" != typeof e ? e = [e, u.j] : e.push(u.j),
                    u = u.k;
            var a = {
                j: e,
                p: r
            };
            return (i = tr(u, a)).elm_event_node_ref = a,
                i
        }
        if (3 === t)
            return ur(i = n.h(n.g), r, n.d),
                i;
        var i = n.f ? On.createElementNS(n.f, n.c) : On.createElement(n.c);
        Sn && "a" == n.c && i.addEventListener("click", Sn(i)),
            ur(i, r, n.d);
        for (var o = n.e, f = 0; f < o.length; f++)
            qn(i, tr(1 === t ? o[f] : o[f].b, r));
        return i
    }
    function ur(n, r, t) {
        for (var u in t) {
            var e = t[u];
            "a1" === u ? er(n, e) : "a0" === u ? or(n, r, e) : "a3" === u ? ar(n, e) : "a4" === u ? ir(n, e) : "value" === u && "checked" === u && n[u] === e || (n[u] = e)
        }
    }
    function er(n, r) {
        var t = n.style;
        for (var u in r)
            t[u] = r[u]
    }
    function ar(n, r) {
        for (var t in r) {
            var u = r[t];
            u ? n.setAttribute(t, u) : n.removeAttribute(t)
        }
    }
    function ir(n, r) {
        for (var t in r) {
            var u = r[t]
                , e = u.f
                , a = u.o;
            a ? n.setAttributeNS(e, t, a) : n.removeAttributeNS(e, t)
        }
    }
    function or(n, r, t) {
        var u = n.elmFs || (n.elmFs = {});
        for (var e in t) {
            var a = t[e]
                , i = u[e];
            if (a) {
                if (i) {
                    if (i.q.$ === a.$) {
                        i.q = a;
                        continue
                    }
                    n.removeEventListener(e, i)
                }
                i = fr(r, a),
                    n.addEventListener(e, i, Yn && {
                        passive: Lt(a) < 2
                    }),
                    u[e] = i
            } else
                n.removeEventListener(e, i),
                    u[e] = void 0
        }
    }
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function() {
                Yn = !0
            }
        }))
    } catch (n) {}
    function fr(v, n) {
        function l(n) {
            var r = l.q
                , t = rn(r.a, n);
            if (Mt(t)) {
                for (var u, e = Lt(r), a = t.a, i = e ? e < 3 ? a.a : a.p : a, o = 1 == e ? a.b : 3 == e && a.al, f = (o && n.stopPropagation(),
                (2 == e ? a.b : 3 == e && a.ad) && n.preventDefault(),
                    v); u = f.j; ) {
                    if ("function" == typeof u)
                        i = u(i);
                    else
                        for (var c = u.length; c--; )
                            i = u[c](i);
                    f = f.p
                }
                f(i, o)
            }
        }
        return l.q = n,
            l
    }
    function cr(n, r) {
        var t = [];
        return lr(n, r, t, 0),
            t
    }
    function vr(n, r, t, u) {
        var e = {
            $: r,
            r: t,
            s: u,
            t: void 0,
            u: void 0
        };
        return n.push(e),
            e
    }
    function lr(n, r, t, u) {
        if (n !== r) {
            var e = n.$
                , a = r.$;
            if (e !== a) {
                if (1 !== e || 2 !== a)
                    return void vr(t, 0, u, r);
                r = function(n) {
                    for (var r = n.e, t = r.length, u = new Array(t), e = 0; e < t; e++)
                        u[e] = r[e].b;
                    return {
                        $: 1,
                        c: n.c,
                        d: n.d,
                        e: u,
                        f: n.f,
                        b: n.b
                    }
                }(r),
                    a = 1
            }
            switch (a) {
                case 5:
                    for (var i = n.l, o = r.l, f = i.length, c = f === o.length; c && f--; )
                        c = i[f] === o[f];
                    if (c)
                        return void (r.k = n.k);
                    r.k = r.m();
                    var v = [];
                    return lr(n.k, r.k, v, 0),
                        void (0 < v.length && vr(t, 1, u, v));
                case 4:
                    for (var l = n.j, s = r.j, b = !1, d = n.k; 4 === d.$; )
                        b = !0,
                            "object" != typeof l ? l = [l, d.j] : l.push(d.j),
                            d = d.k;
                    for (var h = r.k; 4 === h.$; )
                        b = !0,
                            "object" != typeof s ? s = [s, h.j] : s.push(h.j),
                            h = h.k;
                    return b && l.length !== s.length ? void vr(t, 0, u, r) : ((b ? function(n, r) {
                        for (var t = 0; t < n.length; t++)
                            if (n[t] !== r[t])
                                return !1;
                        return !0
                    }(l, s) : l === s) || vr(t, 2, u, s),
                        void lr(d, h, t, u + 1));
                case 0:
                    return void (n.a !== r.a && vr(t, 3, u, r.a));
                case 1:
                    return void sr(n, r, t, u, dr);
                case 2:
                    return void sr(n, r, t, u, hr);
                case 3:
                    if (n.h !== r.h)
                        return void vr(t, 0, u, r);
                    var g = br(n.d, r.d);
                    g && vr(t, 4, u, g);
                    var _ = r.i(n.g, r.g);
                    return void (_ && vr(t, 5, u, _))
            }
        }
    }
    function sr(n, r, t, u, e) {
        if (n.c === r.c && n.f === r.f) {
            var a = br(n.d, r.d);
            a && vr(t, 4, u, a),
                e(n, r, t, u)
        } else
            vr(t, 0, u, r)
    }
    function br(n, r, t) {
        var u, e, a;
        for (var i in n)
            if ("a1" !== i && "a0" !== i && "a3" !== i && "a4" !== i)
                if (i in r) {
                    var o = n[i]
                        , f = r[i];
                    o === f && "value" !== i && "checked" !== i || "a0" === t && (a = f,
                    (e = o).$ == a.$ && an(e.a, a.a)) || ((u = u || {})[i] = f)
                } else
                    (u = u || {})[i] = t ? "a1" === t ? "" : "a0" === t || "a3" === t ? void 0 : {
                        f: n[i].f,
                        o: void 0
                    } : "string" == typeof n[i] ? "" : null;
            else {
                var c = br(n[i], r[i] || {}, i);
                c && ((u = u || {})[i] = c)
            }
        for (var v in r)
            v in n || ((u = u || {})[v] = r[v]);
        return u
    }
    function dr(n, r, t, u) {
        var e = n.e
            , a = r.e
            , i = e.length
            , o = a.length;
        o < i ? vr(t, 6, u, {
            v: o,
            i: i - o
        }) : i < o && vr(t, 7, u, {
            v: i,
            e: a
        });
        for (var f = i < o ? i : o, c = 0; c < f; c++) {
            var v = e[c];
            lr(v, a[c], t, ++u),
                u += v.b || 0
        }
    }
    function hr(n, r, t, u) {
        for (var e = [], a = {}, i = [], o = n.e, f = r.e, c = o.length, v = f.length, l = 0, s = 0, b = u; l < c && s < v; ) {
            var d = o[l]
                , h = f[s]
                , g = d.a
                , _ = h.a
                , p = d.b
                , $ = h.b;
            if (g !== _) {
                var w = o[l + 1]
                    , m = f[s + 1];
                if (w)
                    var y = w.a
                        , A = w.b
                        , E = _ === y;
                if (m)
                    var x = m.a
                        , C = m.b
                        , X = g === x;
                if (X && E)
                    lr(p, C, e, ++b),
                        _r(a, e, g, $, s, i),
                        b += p.b || 0,
                        pr(a, e, g, A, ++b),
                        b += A.b || 0,
                        l += 2,
                        s += 2;
                else if (X)
                    b++,
                        _r(a, e, _, $, s, i),
                        lr(p, C, e, b),
                        b += p.b || 0,
                        l += 1,
                        s += 2;
                else if (E)
                    pr(a, e, g, p, ++b),
                        b += p.b || 0,
                        lr(A, $, e, ++b),
                        b += A.b || 0,
                        l += 2,
                        s += 1;
                else {
                    if (!w || y !== x)
                        break;
                    pr(a, e, g, p, ++b),
                        _r(a, e, _, $, s, i),
                        b += p.b || 0,
                        lr(A, C, e, ++b),
                        b += A.b || 0,
                        l += 2,
                        s += 2
                }
            } else
                lr(p, $, e, ++b),
                    b += p.b || 0,
                    l++,
                    s++
        }
        for (; l < c; ) {
            b++;
            p = (d = o[l]).b;
            pr(a, e, d.a, p, b),
                b += p.b || 0,
                l++
        }
        for (; s < v; ) {
            var k = k || [];
            _r(a, e, (h = f[s]).a, h.b, void 0, k),
                s++
        }
        (0 < e.length || 0 < i.length || k) && vr(t, 8, u, {
            w: e,
            x: i,
            y: k
        })
    }
    var gr = "_elmW6BL";
    function _r(n, r, t, u, e, a) {
        var i = n[t];
        if (!i)
            return i = {
                c: 0,
                z: u,
                r: e,
                s: void 0
            },
                a.push({
                    r: e,
                    A: i
                }),
                void (n[t] = i);
        if (1 === i.c) {
            a.push({
                r: e,
                A: i
            }),
                i.c = 2;
            var o = [];
            return lr(i.z, u, o, i.r),
                i.r = e,
                void (i.s.s = {
                    w: o,
                    A: i
                })
        }
        _r(n, r, t + gr, u, e, a)
    }
    function pr(n, r, t, u, e) {
        var a = n[t];
        if (a) {
            if (0 === a.c) {
                a.c = 2;
                var i = [];
                return lr(u, a.z, i, e),
                    void vr(r, 9, e, {
                        w: i,
                        A: a
                    })
            }
            pr(n, r, t + gr, u, e)
        } else {
            var o = vr(r, 9, e, void 0);
            n[t] = {
                c: 1,
                z: u,
                r: e,
                s: o
            }
        }
    }
    function $r(n, r, t, u) {
        !function n(r, t, u, e, a, i, o) {
            var f = u[e];
            var c = f.r;
            for (; c === a; ) {
                var v = f.$;
                if (1 === v)
                    $r(r, t.k, f.s, o);
                else if (8 === v) {
                    f.t = r,
                        f.u = o;
                    var l = f.s.w;
                    0 < l.length && n(r, t, l, 0, a, i, o)
                } else if (9 === v) {
                    f.t = r,
                        f.u = o;
                    var s = f.s;
                    if (s) {
                        s.A.s = r;
                        var l = s.w;
                        0 < l.length && n(r, t, l, 0, a, i, o)
                    }
                } else
                    f.t = r,
                        f.u = o;
                if (!(f = u[++e]) || (c = f.r) > i)
                    return e
            }
            var b = t.$;
            if (4 === b) {
                for (var d = t.k; 4 === d.$; )
                    d = d.k;
                return n(r, d, u, e, a + 1, i, r.elm_event_node_ref)
            }
            var h = t.e;
            var g = r.childNodes;
            for (var _ = 0; _ < h.length; _++) {
                a++;
                var p = 1 === b ? h[_] : h[_].b
                    , $ = a + (p.b || 0);
                if (a <= c && c <= $ && (e = n(g[_], p, u, e, a, $, o),
                !(f = u[e]) || (c = f.r) > i))
                    return e;
                a = $
            }
            return e
        }(n, r, t, 0, 0, r.b, u)
    }
    function wr(n, r, t, u) {
        return 0 === t.length ? n : ($r(n, r, t, u),
            mr(n, t))
    }
    function mr(n, r) {
        for (var t = 0; t < r.length; t++) {
            var u = r[t]
                , e = u.t
                , a = yr(e, u);
            e === n && (n = a)
        }
        return n
    }
    function yr(n, r) {
        switch (r.$) {
            case 0:
                return function(n, r, t) {
                    var u = n.parentNode
                        , e = tr(r, t);
                    e.elm_event_node_ref || (e.elm_event_node_ref = n.elm_event_node_ref);
                    u && e !== n && u.replaceChild(e, n);
                    return e
                }(n, r.s, r.u);
            case 4:
                return ur(n, r.u, r.s),
                    n;
            case 3:
                return n.replaceData(0, n.length, r.s),
                    n;
            case 1:
                return mr(n, r.s);
            case 2:
                return n.elm_event_node_ref ? n.elm_event_node_ref.j = r.s : n.elm_event_node_ref = {
                    j: r.s,
                    p: r.u
                },
                    n;
            case 6:
                for (var t = r.s, u = 0; u < t.i; u++)
                    n.removeChild(n.childNodes[t.v]);
                return n;
            case 7:
                for (var e = (t = r.s).e, a = (u = t.v,
                    n.childNodes[u]); u < e.length; u++)
                    n.insertBefore(tr(e[u], r.u), a);
                return n;
            case 9:
                if (!(t = r.s))
                    return n.parentNode.removeChild(n),
                        n;
                var i = t.A;
                return void 0 !== i.r && n.parentNode.removeChild(n),
                    i.s = mr(n, t.w),
                    n;
            case 8:
                return function(n, r) {
                    var t = r.s
                        , u = function(n, r) {
                        if (!n)
                            return;
                        for (var t = On.createDocumentFragment(), u = 0; u < n.length; u++) {
                            var e = n[u].A;
                            qn(t, 2 === e.c ? e.s : tr(e.z, r.u))
                        }
                        return t
                    }(t.y, r);
                    n = mr(n, t.w);
                    for (var e = t.x, a = 0; a < e.length; a++) {
                        var i = e[a]
                            , o = i.A
                            , f = 2 === o.c ? o.s : tr(o.z, r.u);
                        n.insertBefore(f, n.childNodes[i.r])
                    }
                    u && qn(n, u);
                    return n
                }(n, r);
            case 5:
                return r.s(n);
            default:
                h(10)
        }
    }
    function Ar(n) {
        if (3 === n.nodeType)
            return In(n.textContent);
        if (1 !== n.nodeType)
            return In("");
        for (var r = Y, t = n.attributes, u = t.length; u--; ) {
            var e = t[u]
                , a = e.name
                , i = e.value;
            r = m(R(Vn, a, i), r)
        }
        var o = n.tagName.toLowerCase()
            , f = Y
            , c = n.childNodes;
        for (u = c.length; u--; )
            f = m(Ar(c[u]), f);
        return J(Jn, o, r, f)
    }
    var Er = u(function(r, n, t, o) {
        return En(n, o, r.a8, r.bf, r.bd, function(u, n) {
            var e = r.bg
                , a = o.node
                , i = Ar(a);
            return Cr(n, function(n) {
                var r = e(n)
                    , t = cr(i, r);
                a = wr(a, i, t, u),
                    i = r
            })
        })
    })
        , xr = (u(function(r, n, t, u) {
            return En(n, u, r.a8, r.bf, r.bd, function(e, n) {
                var a = r.ag && r.ag(e)
                    , i = r.bg
                    , o = On.title
                    , f = On.body
                    , c = Ar(f);
                return Cr(n, function(n) {
                    Sn = a;
                    var r = i(n)
                        , t = Jn("body")(Y)(r.a2)
                        , u = cr(c, t);
                    f = wr(f, c, u, e),
                        c = t,
                        Sn = 0,
                    o !== r.be && (On.title = o = r.be)
                })
            })
        }),
            "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(n) {
                setTimeout(n, 1e3 / 60)
            }
    );
    function Cr(t, u) {
        u(t);
        var e = 0;
        function a() {
            e = 1 === e ? 0 : (xr(a),
                u(t),
                1)
        }
        return function(n, r) {
            t = n,
                r ? (u(t),
                2 === e && (e = 1)) : (0 === e && xr(a),
                    e = 2)
        }
    }
    b(function(n, r) {
        return R(re, Yt, bn(function() {
            r && history.go(r),
                n()
        }))
    }),
        b(function(n, r) {
            return R(re, Yt, bn(function() {
                history.pushState({}, "", r),
                    n()
            }))
        }),
        b(function(n, r) {
            return R(re, Yt, bn(function() {
                history.replaceState({}, "", r),
                    n()
            }))
        });
    var Xr = {
        addEventListener: function() {},
        removeEventListener: function() {}
    }
        , kr = "undefined" != typeof window ? window : Xr;
    t(function(t, u, e) {
        return _n(bn(function(n) {
            function r(n) {
                gn(e(n))
            }
            return t.addEventListener(u, r, Yn && {
                passive: !0
            }),
                function() {
                    t.removeEventListener(u, r)
                }
        }))
    }),
        b(function(n, r) {
            var t = rn(n, r);
            return Mt(t) ? Fr(t.a) : Or
        });
    function Br(t, u) {
        return bn(function(r) {
            xr(function() {
                var n = document.getElementById(t);
                r(n ? sn(u(n)) : function(n) {
                    return {
                        $: 1,
                        a: n
                    }
                }(Ft(t)))
            })
        })
    }
    b(function(r, n) {
        return Br(n, function(n) {
            return n[r](),
                p
        })
    });
    b(function(n, r) {
        return function(r) {
            return bn(function(n) {
                xr(function() {
                    n(sn(r()))
                })
            })
        }(function() {
            return kr.scroll(n, r),
                p
        })
    });
    t(function(n, r, t) {
        return Br(n, function(n) {
            return n.scrollLeft = r,
                n.scrollTop = t,
                p
        })
    });
    b(function(n, r) {
        return n & r
    }),
        b(function(n, r) {
            return n | r
        }),
        b(function(n, r) {
            return n ^ r
        });
    b(function(n, r) {
        return r << n
    }),
        b(function(n, r) {
            return r >> n
        }),
        b(function(n, r) {
            return r >>> n
        });
    function jr(n) {
        return R(ut, "\n    ", R(et, "\n", n))
    }
    function Nr(n) {
        return J(at, b(function(n, r) {
            return r + 1
        }), 0, n)
    }
    function Mr(n) {
        var r = vt(n);
        return 97 <= r && r <= 122
    }
    function Gr(n) {
        var r = vt(n);
        return r <= 90 && 65 <= r
    }
    function Tr(n) {
        return Mr(n) || Gr(n) || function(n) {
            var r = vt(n);
            return r <= 57 && 48 <= r
        }(n)
    }
    function zr(n) {
        return {
            $: 1,
            a: n
        }
    }
    function Dr(n) {
        return n
    }
    function Sr(n) {
        return "" === n
    }
    var Lr, Fr = function(n) {
        return {
            $: 0,
            a: n
        }
    }, Or = {
        $: 1
    }, qr = y, Ir = d, Rr = (t(function(e, n, r) {
        var t = r.c
            , u = r.d
            , a = b(function(n, r) {
            if (n.$) {
                var t = n.a;
                return J(Ir, e, r, t)
            }
            var u = n.a;
            return J(Ir, a, r, u)
        });
        return J(Ir, a, J(Ir, e, n, u), t)
    }),
        t(function(n, r, t) {
            for (; ; ) {
                if (-2 === t.$)
                    return r;
                var u = t.b
                    , e = t.c
                    , a = t.d
                    , i = t.e
                    , o = n
                    , f = J(n, u, e, J(Rr, n, r, i));
                n = o,
                    r = f,
                    t = a
            }
        })), Jr = function(n) {
        return J(Rr, t(function(n, r, t) {
            return R(qr, U(n, r), t)
        }), Y, n)
    }, Hr = 1, Pr = 2, Kr = 0, Wr = function(n) {
        return {
            $: 1,
            a: n
        }
    }, Ur = b(function(n, r) {
        return {
            $: 3,
            a: n,
            b: r
        }
    }), Vr = b(function(n, r) {
        return {
            $: 0,
            a: n,
            b: r
        }
    }), Yr = b(function(n, r) {
        return {
            $: 1,
            a: n,
            b: r
        }
    }), Qr = function(n) {
        return {
            $: 0,
            a: n
        }
    }, Zr = function(n) {
        return {
            $: 2,
            a: n
        }
    }, nt = T, rt = fn, tt = S, ut = b(function(n, r) {
        return R(M, n, A(r))
    }), et = b(function(n, r) {
        return Q(R(N, n, r))
    }), at = t(function(n, r, t) {
        for (; ; ) {
            if (!t.b)
                return r;
            var u = t.a
                , e = t.b
                , a = n
                , i = R(n, u, r);
            n = a,
                r = i,
                t = e
        }
    }), it = E, ot = t(function(n, r, t) {
        for (; ; ) {
            if (!(W(n, r) < 1))
                return t;
            var u = n
                , e = r - 1
                , a = R(qr, r, t);
            n = u,
                r = e,
                t = a
        }
    }), ft = b(function(n, r) {
        return J(ot, n, r, Y)
    }), ct = b(function(n, r) {
        return J(it, n, R(ft, 0, Nr(r) - 1), r)
    }), vt = function(n) {
        var r = n.charCodeAt(0);
        return 55296 <= r && r <= 56319 ? 1024 * (r - 55296) + n.charCodeAt(1) - 56320 + 65536 : r
    }, lt = function(n) {
        return J(at, qr, Y, n)
    }, st = function(n) {
        var r = n.charCodeAt(0);
        return r ? Fr(55296 <= r && r <= 56319 ? U($(n[0] + n[1]), n.slice(2)) : U($(n[0]), n.slice(1))) : Or
    }, bt = b(function(n, r) {
        return "\n\n(" + tt(n + 1) + ") " + jr(dt(r))
    }), dt = function(n) {
        return R(ht, n, Y)
    }, ht = b(function(n, r) {
        n: for (; ; )
            switch (n.$) {
                case 0:
                    var a = n.a
                        , t = n.b
                        , u = function() {
                        var n = st(a);
                        if (1 === n.$)
                            return !1;
                        var r, t = n.a, u = t.a, e = t.b;
                        return (Mr(r = u) || Gr(r)) && R(nt, Tr, e)
                    }()
                        , e = t
                        , i = R(qr, u ? "." + a : "['" + a + "']", r);
                    n = e,
                        r = i;
                    continue n;
                case 1:
                    var o = n.a
                        , f = (t = n.b,
                    "[" + tt(o) + "]");
                    e = t,
                        i = R(qr, f, r);
                    n = e,
                        r = i;
                    continue n;
                case 2:
                    var c = n.a;
                    if (c.b) {
                        if (c.b.b) {
                            var v = (r.b ? "The Json.Decode.oneOf at json" + R(ut, "", lt(r)) : "Json.Decode.oneOf") + " failed in the following " + tt(Nr(c)) + " ways:";
                            return R(ut, "\n\n", R(qr, v, R(ct, bt, c)))
                        }
                        n = e = t = c.a,
                            r = i = r;
                        continue n
                    }
                    return "Ran into a Json.Decode.oneOf with no possibilities" + (r.b ? " at json" + R(ut, "", lt(r)) : "!");
                default:
                    var l = n.a
                        , s = n.b;
                    return (v = r.b ? "Problem with the value at json" + R(ut, "", lt(r)) + ":\n\n    " : "Problem with the given value:\n\n") + (jr(R(rt, 4, s)) + "\n\n") + l
            }
    }), gt = u(function(n, r, t, u) {
        return {
            $: 0,
            a: n,
            b: r,
            c: t,
            d: u
        }
    }), _t = [], pt = X, $t = b(function(n, r) {
        return j(r) / j(n)
    }), wt = pt(R($t, 2, 32)), mt = H(gt, 0, wt, _t, _t), yt = v, At = (b(function(n, r) {
        return n(r)
    }),
        b(function(n, r) {
            return r(n)
        }),
        k), Et = function(n) {
        return n.length
    }, xt = b(function(n, r) {
        return 0 < W(n, r) ? n : r
    }), Ct = l, Xt = b(function(n, r) {
        for (; ; ) {
            var t = R(Ct, 32, n)
                , u = t.a
                , e = t.b
                , a = R(qr, {
                $: 0,
                a: u
            }, r);
            if (!e.b)
                return lt(a);
            n = e,
                r = a
        }
    }), kt = b(function(n, r) {
        for (; ; ) {
            var t = pt(r / 32);
            if (1 === t)
                return R(Ct, 32, n).a;
            n = R(Xt, n, Y),
                r = t
        }
    }), Bt = b(function(n, r) {
        if (r.a) {
            var t = 32 * r.a
                , u = At(R($t, 32, t - 1))
                , e = n ? lt(r.d) : r.d
                , a = R(kt, e, r.a);
            return H(gt, Et(r.c) + t, R(xt, 5, u * wt), a, r.c)
        }
        return H(gt, Et(r.c), wt, _t, r.c)
    }), jt = e(function(n, r, t, u, e) {
        for (; ; ) {
            if (r < 0)
                return R(Bt, !1, {
                    d: u,
                    a: t / 32 | 0,
                    c: e
                });
            var a = zr(J(yt, 32, r, n));
            n = n,
                r = r - 32,
                t = t,
                u = R(qr, a, u),
                e = e
        }
    }), Nt = b(function(n, r) {
        if (n <= 0)
            return mt;
        var t = n % 32
            , u = J(yt, t, n - t, r);
        return P(jt, r, n - t - 32, n, Y, u)
    }), Mt = function(n) {
        return !n.$
    }, Gt = q, Tt = {
        $: 3
    }, zt = I, Dt = Z, St = function(n) {
        return {
            $: 0,
            a: n
        }
    }, Lt = function(n) {
        switch (n.$) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            default:
                return 3
        }
    }, Ft = Dr, Ot = a(function(n, r, t, u, e, a) {
        return {
            az: a,
            aA: r,
            aN: u,
            aP: t,
            aS: n,
            aT: e
        }
    }), qt = z, It = function(n) {
        return n.length
    }, Rt = G, Jt = b(function(n, r) {
        return n < 1 ? r : J(Rt, n, It(r), r)
    }), Ht = D, Pt = b(function(n, r) {
        return n < 1 ? "" : J(Rt, 0, n, r)
    }), Kt = function(n) {
        for (var r = 0, t = n.charCodeAt(0), u = 43 == t || 45 == t ? 1 : 0, e = u; e < n.length; ++e) {
            var a = n.charCodeAt(e);
            if (a < 48 || 57 < a)
                return Or;
            r = 10 * r + a - 48
        }
        return e == u ? Or : Fr(45 == t ? -r : r)
    }, Wt = e(function(n, r, t, u, e) {
        if (Sr(e) || R(qt, "@", e))
            return Or;
        var a = R(Ht, ":", e);
        if (a.b) {
            if (a.b.b)
                return Or;
            var i = a.a
                , o = Kt(R(Jt, i + 1, e));
            if (1 === o.$)
                return Or;
            var f = o;
            return Fr(c(Ot, n, R(Pt, i, e), f, r, t, u))
        }
        return Fr(c(Ot, n, e, Or, r, t, u))
    }), Ut = u(function(n, r, t, u) {
        if (Sr(u))
            return Or;
        var e = R(Ht, "/", u);
        if (e.b) {
            var a = e.a;
            return P(Wt, n, R(Jt, a, u), r, t, R(Pt, a, u))
        }
        return P(Wt, n, "/", r, t, u)
    }), Vt = t(function(n, r, t) {
        if (Sr(t))
            return Or;
        var u = R(Ht, "?", t);
        if (u.b) {
            var e = u.a;
            return H(Ut, n, Fr(R(Jt, e + 1, t)), r, R(Pt, e, t))
        }
        return H(Ut, n, Or, r, t)
    }), Yt = (b(function(n, r) {
            if (Sr(r))
                return Or;
            var t = R(Ht, "#", r);
            if (t.b) {
                var u = t.a;
                return J(Vt, n, Fr(R(Jt, u + 1, r)), R(Pt, u, r))
            }
            return J(Vt, n, Or, r)
        }),
            function(n) {
                for (; ; ) {
                    n = n
                }
            }
    ), Qt = sn, Zt = Qt(0), nu = u(function(n, r, t, u) {
        if (u.b) {
            var e = u.a
                , a = u.b;
            if (a.b) {
                var i = a.a
                    , o = a.b;
                if (o.b) {
                    var f = o.a
                        , c = o.b;
                    if (c.b) {
                        var v = c.a
                            , l = c.b;
                        return R(n, e, R(n, i, R(n, f, R(n, v, 500 < t ? J(at, n, r, lt(l)) : H(nu, n, r, t + 1, l)))))
                    }
                    return R(n, e, R(n, i, R(n, f, r)))
                }
                return R(n, e, R(n, i, r))
            }
            return R(n, e, r)
        }
        return r
    }), ru = t(function(n, r, t) {
        return H(nu, n, r, 0, t)
    }), tu = b(function(t, n) {
        return J(ru, b(function(n, r) {
            return R(qr, t(n), r)
        }), Y, n)
    }), uu = dn, eu = b(function(r, n) {
        return R(uu, function(n) {
            return Qt(r(n))
        }, n)
    }), au = t(function(t, n, u) {
        return R(uu, function(r) {
            return R(uu, function(n) {
                return Qt(R(t, r, n))
            }, u)
        }, n)
    }), iu = Xn, ou = b(function(n, r) {
        var t = r;
        return _n(R(uu, iu(n), t))
    }), fu = t(function(n, r, t) {
        return R(eu, function(n) {
            return 0
        }, function(n) {
            return J(ru, au(qr), Qt(Y), n)
        }(R(tu, ou(n), r)))
    }), cu = t(function(n, r, t) {
        return Qt(0)
    }), vu = b(function(n, r) {
        return R(eu, n, r)
    });
    xn.Task = {
        b: Zt,
        c: fu,
        d: cu,
        e: vu,
        f: Lr
    };
    function lu(n) {
        return cn(J(at, b(function(n, r) {
            var t = n.a
                , u = n.b;
            return J(ln, t, u, r)
        }), {}, n))
    }
    function su(n) {
        return {
            m: n.m,
            u: n.u,
            n: n.n,
            o: n.o,
            x: n.x,
            r: (r = n.r,
                1 === r.$ ? -1 : r.a),
            g: n.g,
            h: n.h,
            s: n.s
        };
        var r
    }
    function bu(n) {
        return J(ru, $e, Y, n)
    }
    function du(n) {
        if (n.b) {
            var r = n.a;
            n.b;
            return Fr(r)
        }
        return Or
    }
    function hu(n) {
        var r = Q([U("Ionian", 0), U("Major", 0), U("Major/Ionian", 0), U("Dorian", 1), U("Phrygian", 2), U("Lydian", 3), U("Mixolydian", 4), U("Aeolian", 5), U("Minor", 5), U("Minor/Aeolian", 5), U("Locrian", 6)]);
        return R(Re, n, function(n) {
            return J(at, b(function(n, r) {
                var t = n.a
                    , u = n.b;
                return J(Ie, t, u, r)
            }), Se, n)
        }(r))
    }
    function gu(n) {
        if (n.b) {
            n.a;
            var r = n.b;
            return Fr(r)
        }
        return Or
    }
    function _u(n) {
        return {
            $: 0,
            a: n
        }
    }
    function pu(n) {
        return {
            $: 12,
            a: n
        }
    }
    function $u(n) {
        return {
            $: 1,
            a: n
        }
    }
    function wu(n) {
        return {
            $: 2,
            a: n
        }
    }
    function mu(n) {
        return {
            $: 3,
            a: n
        }
    }
    function yu(n) {
        return {
            $: 4,
            a: n
        }
    }
    function Au(n) {
        return {
            $: 6,
            a: n
        }
    }
    function Eu(n) {
        return {
            $: 8,
            a: n
        }
    }
    function xu(n) {
        return {
            $: 7,
            a: n
        }
    }
    function Cu(n) {
        return V(n, {
            af: Or
        })
    }
    function Xu(r) {
        var n = R(Be, function(n) {
            return !R(wa, r, n)
        }, r.u);
        return V(r, {
            u: n
        })
    }
    function ku(n) {
        var r = n.r;
        if (1 === r.$)
            return 0;
        var t = r.a;
        return t ? 4 * t - .25 : 0
    }
    function Bu(n) {
        return n < 0 ? -n : n
    }
    function ju(r) {
        var n = r.ax;
        if (1 === n.$)
            return Y;
        var t, u = n.a, e = 1 === (t = r.af).$ ? Y : t.a, a = r.a_.aK + function(n) {
            var r = n.ax;
            return 1 === r.$ ? 0 : r.a.aX - n.a_.aH
        }(r) - u.aX, i = u.aE - r.a_.aG;
        return R(Na, r, R(tu, function(n) {
            return V(n, {
                aX: R(ka, r.n, n.aX)
            })
        }, R(tu, function(n) {
            return V(n, {
                aE: n.aE + i,
                aX: n.aX + a
            })
        }, e)))
    }
    function Nu(n) {
        return 1 / n
    }
    function Mu(n) {
        var r = function(n) {
            var r = R(Ta, n.n, n.a_.aH)
                , t = r + Nu(n.n)
                , u = R(ka, n.n, n.a_.aK);
            return U(r, R(xt, t, u))
        }(n)
            , t = r.a
            , u = r.b;
        return n.ac.aq ? Q([H(Da, n, t, u, n.a_.aG)]) : J(Ga, n, t, u)
    }
    function Gu(n) {
        var r = n.r;
        if (1 === r.$)
            return n.m;
        var t = r.a;
        return K(t, Xa(n.m / 4 - 1)) ? n.m : 4 * (t + 1) + .25
    }
    function Tu(n) {
        if (n.b) {
            var r = n.a
                , t = n.b;
            return Fr(J(at, Ba, r, t))
        }
        return Or
    }
    function zu(r) {
        var n = r.ax;
        if (1 === n.$)
            return Y;
        n.a;
        var t = R(He, 0, function(n) {
            var r = n.af;
            if (1 === r.$)
                return Or;
            var t = r.a;
            return Tu(R(tu, function(n) {
                return n.au
            }, t))
        }(r))
            , u = R(He, Y, r.af)
            , e = R(He, 0, function(r) {
            var n = r.af;
            if (1 === n.$)
                return Or;
            var t = n.a;
            return Tu(R(tu, function(n) {
                return R(Sa, r, n)
            }, t))
        }(r))
            , a = Nu(r.n) - t
            , i = r.a_.aK - r.a_.aH
            , o = R(Ba, R(xt, i, a), e)
            , f = R(ka, r.n, o);
        return R(tu, function(n) {
            return R(ja, r, n)
        }, R(tu, function(n) {
            return V(n, {
                au: n.au + f
            })
        }, u))
    }
    function Du(n) {
        return {
            S: R(xt, n.a_.aG, n.a_.aJ),
            Y: R(Ba, n.a_.aH, n.a_.aK),
            ae: R(xt, n.a_.aH, n.a_.aK),
            am: R(Ba, n.a_.aG, n.a_.aJ)
        }
    }
    function Su(n) {
        return {
            $: 0,
            a: n
        }
    }
    function Lu(n) {
        return 4 < n.m ? 50 : 0
    }
    function Fu(n) {
        return n.a_.V - Lu(n)
    }
    function Ou(n) {
        return n.a_.an - n.a_.X
    }
    function qu(n) {
        return V(n, {
            ao: 4
        })
    }
    function Iu(n) {
        return At(R(xt, n - 4, .75 * n))
    }
    function Ru(n) {
        var r = R(_i, n, Nu(n.n)) - R(_i, n, 0);
        return n.ac.aq && 10 < r
    }
    function Ju(n) {
        return Fu(n) / Nr(n.o)
    }
    function Hu(n) {
        if (1 === n.$)
            return "-1";
        var r = n.a;
        return tt(r)
    }
    function Pu(n) {
        return {
            $: 11,
            a: n
        }
    }
    function Ku(n) {
        return U(n, !0)
    }
    function Wu(n) {
        var r = n.s
            , t = R(io, Q([so("range"), fo("30"), oo("240"), bo(si(r)), function(n) {
            return R(co, "input", R(zt, Ku, R(zt, n, vo)))
        }(Pu), ao("ribbon__element range"), R(no, "flex-grow", "1"), R(no, "height", "25px")]), Y)
            , u = R(lo, Q([li("ribbon__element widget__bpm-label nowrap")]), Q([to("Tempo: " + si(r) + " bpm")]));
        return R(Bi, Q([li("ribbon ribbon--rigid")]), Q([u, t]))
    }
    function Uu(n) {
        return R(qi, "click", St(n))
    }
    function Vu(n) {
        var r = R(He, "Major", n.h)
            , t = (R(He, "C", n.g),
            function(r) {
                return R(tu, function(n) {
                    return R(Ue, r, n)
                }, Ze)
            }(r))
            , u = J(it, Qe, ho, t)
            , e = R(tu, _o(n), u)
            , a = R(Bi, Q([li("widget__choices")]), e);
        return R(Bi, Q([li("widget-pianoroll__root-chooser")]), Q([a]))
    }
    function Yu(n) {
        return R(Bi, Y, Q([n.ah ? Vu(n) : to(""), n.ai ? function(n) {
            R(He, "Major", n.h);
            var r = R(tu, po(n), n.R)
                , t = R(Bi, Q([li("widget__choices")]), r);
            return R(Bi, Q([li("widget-pianoroll__scale-chooser")]), Q([t]))
        }(n) : to("")]))
    }
    function Qu(n) {
        var r = n.ak || n.ah || n.ai ? function(n) {
            return R(Bi, Q([li("widget__controls")]), Q([n.ak ? Wu(n) : to(""), n.ah || n.ai ? Yu(n) : to("")]))
        }(n) : to("")
            , t = At(n.m / 4)
            , u = R(tu, Su, R(ft, 0, t - 1))
            , e = R(uo, n, u)
            , a = J(ki, "g", Y, R(tu, Mi(n), n.u))
            , i = function(n) {
            var r = R(ct, Pi(n), lt(n.o))
                , t = R(gi, Q([li("widget-pianoroll__label-divider"), wi(si(n.a_.X - 1)), Ai("0"), $i("1"), bi(si(Fu(n)))]), Y);
            return R(pi, Q([li("widget-pianoroll__lane-labels"), $i(si(n.a_.X)), bi(si(Fu(n)))]), bu(Q([r, Q([t])])))
        }(n)
            , o = function(n) {
            var r = R(ct, Li(n), lt(n.o));
            return R(pi, Q([li("widget-pianoroll__lane-highlights"), $i(si(n.a_.an)), bi(si(Fu(n)))]), r)
        }(n)
            , f = function(r) {
            var n = R(tu, function(n) {
                return n * Ju(r)
            }, R(ft, 0, Nr(r.o)))
                , t = R(tu, Di(r), n)
                , u = Nu(r.n)
                , e = At(Gu(r) / u)
                , a = R(tu, function(n) {
                return n * u
            }, R(ft, 1, e))
                , i = R(tu, function(n) {
                return R(_i, r, n)
            }, a)
                , o = R(tu, zi(r), i)
                , f = R(tu, function(n) {
                return R(_i, r, n)
            }, R(ft, 1, Xa(r.m)))
                , c = function() {
                var n = r.r;
                if (1 === n.$)
                    return 8 < r.m ? Y : f;
                n.a;
                return f
            }()
                , v = R(tu, function(n) {
                return R(Ti, r, n)
            }, c)
                , l = R(Be, function(n) {
                return n % 2 == 1
            }, R(ft, 0, Xa(r.m / 4)))
                , s = R(tu, function(n) {
                return R(Gi, r, n)
            }, l);
            return R(pi, Q([li("widget-pianoroll__grid"), $i(si(r.a_.an)), bi(si(Fu(r)))]), bu(Q([s, t, o, v])))
        }(n)
            , c = function(o) {
            var n = function() {
                switch (o.ao) {
                    case 0:
                        return Q([U("", R(gi, Y, Y))]);
                    case 1:
                        return R(tu, Xi(o), ju(o));
                    case 2:
                        return R(tu, Xi(o), zu(o));
                    case 3:
                        return R(tu, Xi(o), Mu(o));
                    default:
                        var n = Xa(R(Ba, o.a_.aI, o.a_.aL))
                            , r = Xa(R(xt, o.a_.aI, o.a_.aL)) - n
                            , t = Du(o)
                            , u = t.Y
                            , e = t.ae
                            , a = (t.am,
                            t.S,
                            R(_i, o, u))
                            , i = R(_i, o, e) - a;
                        return Q([U("selectionbox", R(gi, Q([li("widget-pianoroll__selection-box"), wi(si(a + .5)), Ai(si(n + .5)), $i(si(i)), bi(si(r))]), Y))])
                }
            }();
            return J(ki, "g", Q([li("widget-pianoroll__clipboard"), $i(si(o.a_.an)), bi(si(Fu(o)))]), n)
        }(n)
            , v = R(pi, Q([li("widget-pianoroll__event-editor"), $i(si(n.a_.an)), bi(si(Fu(n)))]), bu(Q([Q([o, f]), Q([a]), Q([c, i])])));
        return R(Bi, Q([R(no, "display", "flex"), R(no, "flex-direction", "column")]), Q(1 < t ? [r, e, v] : [r, v]))
    }
    var Zu, ne = kn("Task"), re = b(function(n, r) {
        return ne(R(eu, n, r))
    }), te = Er, ue = L, ee = {
        $: 4
    }, ae = {
        $: 1
    }, ie = {
        as: Or,
        T: Or,
        U: Or,
        _: Or,
        aa: Or
    }, oe = {
        V: 200,
        X: 70,
        aG: 0,
        aH: 0,
        aI: 0,
        aJ: 0,
        aK: 0,
        aL: 0,
        an: 630
    }, fe = t(function(n, r, t) {
        for (; ; ) {
            if (r <= 0)
                return n;
            n = R(qr, t, n),
                r = r - 1,
                t = t
        }
    }), ce = b(function(n, r) {
        return J(fe, Y, n, r)
    }), ve = Q([{
        aC: Q([0, 2, 4, 5, 7, 9, 11, 12]),
        aa: "Major"
    }, {
        aC: Q([0, 2, 4, 5, 7, 9, 11, 12]),
        aa: "Major/Ionian"
    }, {
        aC: Q([0, 2, 4, 5, 7, 9, 11, 12]),
        aa: "Ionian"
    }, {
        aC: Q([0, 2, 3, 5, 7, 8, 10, 12]),
        aa: "Minor"
    }, {
        aC: Q([0, 2, 3, 5, 7, 8, 10, 12]),
        aa: "Minor/Aeolian"
    }, {
        aC: Q([0, 2, 3, 5, 7, 8, 10, 12]),
        aa: "Aeolian"
    }, {
        aC: Q([0, 2, 3, 5, 7, 9, 10, 12]),
        aa: "Dorian"
    }, {
        aC: Q([0, 1, 3, 5, 7, 8, 10, 12]),
        aa: "Phrygian"
    }, {
        aC: Q([0, 2, 4, 6, 7, 9, 11, 12]),
        aa: "Lydian"
    }, {
        aC: Q([0, 2, 4, 5, 7, 9, 10, 12]),
        aa: "Mixolydian"
    }, {
        aC: Q([0, 1, 3, 5, 6, 8, 10, 12]),
        aa: "Locrian"
    }]), le = {
        ao: 0,
        R: R(tu, function(n) {
            return n.aa
        }, ve),
        m: 4,
        u: Y,
        ax: Or,
        ay: 0,
        n: 4,
        W: Y,
        o: R(ce, 5, ie),
        x: 0,
        y: Or,
        z: Or,
        ac: {
            aq: !0
        },
        r: ae,
        g: Or,
        h: Or,
        af: Or,
        ah: !1,
        ai: !1,
        aj: !0,
        ak: !0,
        s: 85,
        a_: oe
    }, se = t(function(n, r, t) {
        return t.$ ? n : r(t.a)
    }), be = cn, de = cn, he = b(function(n, r) {
        return cn(J(at, function(t) {
            return b(function(n, r) {
                return r.push(vn(t(n))),
                    r
            })
        }(n), [], r))
    }), ge = null, _e = cn, pe = Gn("exportModel", function(n) {
        return lu(Q([U("beats", be(n.m)), U("events", he(function(n) {
            return lu(Q([U("duration", be(n.au)), U("id", de(n.aB)), U("lane", de(n.aE)), U("start", be(n.aX))]))
        })(n.u)), U("gridSize", de(n.n)), U("lanes", he(function(n) {
            return lu(Q([U("choke", (a = n.as,
                J(se, ge, de, a))), U("color", (e = n.T,
                J(se, ge, _e, e))), U("freq", (u = n.U,
                J(se, ge, be, u))), U("midi", (t = n._,
                J(se, ge, de, t))), U("name", (r = n.aa,
                J(se, ge, _e, r)))]));
            var r, t, u, e, a
        })(n.o)), U("nextId", de(n.x)), U("page", de(n.r)), U("rootName", (t = n.g,
            J(se, ge, _e, t))), U("scaleName", (r = n.h,
            J(se, ge, _e, r))), U("tempo", be(n.s))]));
        var r, t
    }), $e = b(function(n, r) {
        return r.b ? J(ru, qr, r, n) : n
    }), we = {
        aC: Q([0, 2, 4, 5, 7, 9, 11, 12]),
        aa: "Major"
    }, me = t(function(n, r, t) {
        for (; ; ) {
            var u = R(Ct, 32, n)
                , e = u.a
                , a = u.b;
            if (W(Et(e), 32) < 0)
                return R(Bt, !0, {
                    d: r,
                    a: t,
                    c: e
                });
            n = a,
                r = R(qr, zr(e), r),
                t = t + 1
        }
    }), ye = 4294967295 >>> 32 - wt, Ae = s, Ee = t(function(n, r, t) {
        for (; ; ) {
            var u = R(Ae, ye & r >>> n, t);
            if (u.$) {
                var e = u.a;
                return R(Ae, ye & r, e)
            }
            var a = u.a;
            n = n - wt,
                r = r,
                t = a
        }
    }), xe = b(function(n, r) {
        var t = r.a
            , u = r.b
            , e = r.c
            , a = r.d;
        return n < 0 || -1 < W(n, t) ? Or : -1 < W(n, function(n) {
            return n >>> 5 << 5
        }(t)) ? Fr(R(Ae, ye & n, a)) : Fr(J(Ee, u, n, e))
    }), Ce = b(function(n, r) {
        for (; ; ) {
            if (!r.b)
                return !1;
            var t = r.a
                , u = r.b;
            if (n(t))
                return !0;
            n = n,
                r = u
        }
    }), Xe = b(function(r, n) {
        return R(Ce, function(n) {
            return K(n, r)
        }, n)
    }), ke = C, Be = b(function(t, n) {
        return J(ru, b(function(n, r) {
            return t(n) ? R(qr, n, r) : r
        }), Y, n)
    }), je = b(function(n, r) {
        for (; ; ) {
            if (n <= 0)
                return r;
            if (!r.b)
                return r;
            r.a;
            n = n - 1,
                r = r.b
        }
    }), Ne = Q([Q(["C", "D", "E", "F", "G", "A", "B"]), Q(["G", "A", "B", "C", "D", "E", "F♯"]), Q(["D", "E", "F♯", "G", "A", "B", "C♯"]), Q(["A", "B", "C♯", "D", "E", "F♯", "G♯"]), Q(["E", "F♯", "G♯", "A", "B", "C♯", "D♯"]), Q(["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"]), Q(["F♯", "G♯", "A♯", "B", "C♯", "D♯", "E♯"]), Q(["C♯", "D♯", "E♯", "F♯", "G♯", "A♯", "B♯"]), Q(["F", "G", "A", "B♭", "C", "D", "E"]), Q(["B♭", "C", "D", "E♭", "F", "G", "A"]), Q(["E♭", "F", "G", "A♭", "B♭", "C", "D"]), Q(["A♭", "B♭", "C", "D♭", "E♭", "F", "G"]), Q(["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"]), Q(["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F"]), Q(["C♭", "D♭", "E♭", "F♭", "G♭", "A♭", "B♭"])]), Me = t(function(n, r, t) {
        for (; ; ) {
            if (n <= 0)
                return t;
            if (!r.b)
                return t;
            var u = r.a;
            n = n - 1,
                r = r.b,
                t = R(qr, u, t)
        }
    }), Ge = b(function(n, r) {
        return lt(J(Me, n, r, Y))
    }), Te = t(function(n, r, t) {
        if (r <= 0)
            return Y;
        var u = U(r, t);
        n: for (; ; ) {
            r: for (; ; ) {
                if (!u.b.b)
                    return t;
                if (!u.b.b.b) {
                    if (1 === u.a)
                        break n;
                    break r
                }
                switch (u.a) {
                    case 1:
                        break n;
                    case 2:
                        var e = u.b;
                        return Q([i = e.a, v = e.b.a]);
                    case 3:
                        if (u.b.b.b.b) {
                            var a = u.b
                                , i = a.a
                                , o = a.b;
                            return Q([i, v = o.a, s = o.b.a])
                        }
                        break r;
                    default:
                        if (u.b.b.b.b && u.b.b.b.b.b) {
                            var f = u.b
                                , i = f.a
                                , c = f.b
                                , v = c.a
                                , l = c.b
                                , s = l.a
                                , b = l.b
                                , d = b.a
                                , h = b.b;
                            return R(qr, i, R(qr, v, R(qr, s, R(qr, d, 1e3 < n ? R(Ge, r - 4, h) : J(Te, n + 1, r - 4, h)))))
                        }
                        break r
                }
            }
            return t
        }
        return Q([i = u.b.a])
    }), ze = b(function(n, r) {
        return J(Te, 0, n, r)
    }), De = {
        $: -2
    }, Se = De, Le = e(function(n, r, t, u, e) {
        return {
            $: -1,
            a: n,
            b: r,
            c: t,
            d: u,
            e: e
        }
    }), Fe = e(function(n, r, t, u, e) {
        if (-1 !== e.$ || e.a) {
            if (-1 !== u.$ || u.a || -1 !== u.d.$ || u.d.a)
                return P(Le, n, r, t, u, e);
            u.a,
                d = u.b,
                h = u.c;
            var a = u.d
                , i = (a.a,
                a.b)
                , o = a.c
                , f = a.d
                , c = a.e;
            _ = u.e;
            return P(Le, 0, d, h, P(Le, 1, i, o, f, c), P(Le, 1, r, t, _, e))
        }
        e.a;
        var v = e.b
            , l = e.c
            , s = e.d
            , b = e.e;
        if (-1 !== u.$ || u.a)
            return P(Le, n, v, l, P(Le, 0, r, t, u, s), b);
        u.a;
        var d = u.b
            , h = u.c
            , g = u.d
            , _ = u.e;
        return P(Le, 0, r, t, P(Le, 1, d, h, g, _), P(Le, 1, v, l, s, b))
    }), Oe = _, qe = t(function(n, r, t) {
        if (-2 === t.$)
            return P(Le, 0, n, r, De, De);
        var u = t.a
            , e = t.b
            , a = t.c
            , i = t.d
            , o = t.e;
        switch (R(Oe, n, e)) {
            case 0:
                return P(Fe, u, e, a, J(qe, n, r, i), o);
            case 1:
                return P(Le, u, e, r, i, o);
            default:
                return P(Fe, u, e, a, i, J(qe, n, r, o))
        }
    }), Ie = t(function(n, r, t) {
        var u = J(qe, n, r, t);
        if (-1 !== u.$ || u.a)
            return u;
        u.a;
        var e = u.b
            , a = u.c
            , i = u.d
            , o = u.e;
        return P(Le, 1, e, a, i, o)
    }), Re = b(function(n, r) {
        n: for (; ; ) {
            if (-2 === r.$)
                return Or;
            var t = r.b
                , u = r.c
                , e = r.d
                , a = r.e;
            switch (R(Oe, n, t)) {
                case 0:
                    n = n,
                        r = e;
                    continue n;
                case 1:
                    return Fr(u);
                default:
                    n = n,
                        r = a;
                    continue n
            }
        }
    }), Je = x, He = b(function(n, r) {
        return r.$ ? n : r.a
    }), Pe = b(function(n, r) {
        var t = R(Ke, n, r);
        if (1 === t.$)
            return 7;
        var u = t.a;
        return J(ru, b(function(n, r) {
            return r + (R(qt, "♭", n) || R(qt, "♯", n) ? 1 : 0)
        }), 0, u)
    }), Ke = b(function(n, r) {
        var t = R(We, n, r)
            , u = R(He, 0, hu(r))
            , e = R(Be, function(n) {
            return K(R(He, "", du(n)), t)
        }, function(u) {
            return R(tu, function(n) {
                var r = R(je, u, n)
                    , t = R(ze, u, n);
                return R($e, r, t)
            }, Ne)
        }(u));
        return du(e)
    }), We = b(function(n, r) {
        return R(qt, "/", n) ? R(Ue, r, R(et, "/", n)) : n
    }), Ue = b(function(r, n) {
        var t = R(tu, function(n) {
            return {
                Q: R(Pe, n, r),
                aa: n
            }
        }, n)
            , u = R(Je, function(n) {
            return n.Q
        }, t);
        return R(He, {
            Q: 0,
            aa: ""
        }, du(u)).aa
    }), Ve = t(function(n, r, t) {
        var u = n(r);
        if (u.$)
            return t;
        var e = u.a;
        return R(qr, e, t)
    }), Ye = b(function(n, r) {
        return J(ru, Ve(n), Y, r)
    }), Qe = b(function(n, r) {
        return U(n, r)
    }), Ze = Q([Q(["C"]), Q(["C♯", "D♭"]), Q(["D"]), Q(["D♯", "E♭"]), Q(["E"]), Q(["F"]), Q(["F♯", "G♭"]), Q(["G"]), Q(["G♯", "A♭"]), Q(["A"]), Q(["A♯", "B♭"]), Q(["B"])]), na = u(function(n, r, t, u) {
        var e, a = 12 * t, i = function(n) {
            return n.b ? J(me, n, Y, 0) : mt
        }(1 === (e = R(Ke, r, n)).$ ? Y : e.a), o = R(He, we, function(r) {
            return du(R(Be, function(n) {
                return K(n.aa, r)
            }, ve))
        }(n)), f = R(He, 0, function(n) {
            var u = R(He, "C", du(R(et, "/", n)))
                , r = R(ct, Qe, Ze)
                , t = R(Ye, function(n) {
                var r = n.a
                    , t = n.b;
                return R(Xe, u, t) ? Fr(r) : Or
            }, r);
            return du(t)
        }(r)), c = R(He, Y, gu(o.aC)), v = 1 < u ? R(tu, function(r) {
            return R(tu, function(n) {
                return n + 12 * r
            }, c)
        }, R(ft, 1, u - 1)) : Q([Y]), l = bu(R(qr, o.aC, v)), s = R(tu, function(n) {
            return n + a + f
        }, l);
        return R(ct, b(function(t, n) {
            return V(ie, {
                T: function(n) {
                    return R(Xe, n % 12, Q([1, 3, 6, 8, 10]))
                }(n) ? Fr("Black") : Or,
                U: Fr(function(n) {
                    return 440 * R(ke, 2, (n - 69) / 12)
                }(n)),
                _: Fr(n),
                aa: function() {
                    var n = R(xe, t % 7, i);
                    if (1 === n.$)
                        return Or;
                    var r = n.a;
                    return Fr(r)
                }()
            })
        }), s)
    }), ra = e(function(n, r, t, u, e) {
        if (1 === r.$)
            return Or;
        var a = r.a;
        if (1 === t.$)
            return Or;
        var i = t.a;
        if (1 === u.$)
            return Or;
        var o = u.a;
        if (1 === e.$)
            return Or;
        var f = e.a;
        return Fr(H(n, a, i, o, f))
    }), ta = u(function(n, r, t, u) {
        return {
            y: t,
            z: u,
            g: r,
            h: n
        }
    }), ua = {
        $: 2
    }, ea = function(n) {
        return {
            $: 7,
            b: n
        }
    }, aa = function(n) {
        return {
            $: 9,
            c: n
        }
    }, ia = function(n) {
        return {
            $: 15,
            g: n
        }
    }, oa = {
        $: 6
    }, fa = Bn, ca = Dn("clear", oa), va = Dn("importModel", R(Gt, function(f) {
        return R(Gt, function(o) {
            return R(Gt, function(i) {
                return R(Gt, function(a) {
                    return R(Gt, function(e) {
                        return R(Gt, function(u) {
                            return R(Gt, function(t) {
                                return R(Gt, function(r) {
                                    return R(Gt, function(n) {
                                        return St({
                                            m: n,
                                            u: r,
                                            n: t,
                                            o: u,
                                            x: e,
                                            r: a,
                                            g: i,
                                            h: o,
                                            s: f
                                        })
                                    }, R(ue, "beats", ee))
                                }, R(ue, "events", ea(R(Gt, function(u) {
                                    return R(Gt, function(t) {
                                        return R(Gt, function(r) {
                                            return R(Gt, function(n) {
                                                return St({
                                                    au: n,
                                                    aB: r,
                                                    aE: t,
                                                    aX: u
                                                })
                                            }, R(ue, "duration", ee))
                                        }, R(ue, "id", ua))
                                    }, R(ue, "lane", ua))
                                }, R(ue, "start", ee)))))
                            }, R(ue, "gridSize", ua))
                        }, R(ue, "lanes", ea(R(Gt, function(e) {
                            return R(Gt, function(u) {
                                return R(Gt, function(t) {
                                    return R(Gt, function(r) {
                                        return R(Gt, function(n) {
                                            return St({
                                                as: n,
                                                T: r,
                                                U: t,
                                                _: u,
                                                aa: e
                                            })
                                        }, R(ue, "choke", ia(Q([aa(Or), R(zt, Fr, ua)]))))
                                    }, R(ue, "color", ia(Q([aa(Or), R(zt, Fr, oa)]))))
                                }, R(ue, "freq", ia(Q([aa(Or), R(zt, Fr, ee)]))))
                            }, R(ue, "midi", ia(Q([aa(Or), R(zt, Fr, ua)]))))
                        }, R(ue, "name", ia(Q([aa(Or), R(zt, Fr, oa)])))))))
                    }, R(ue, "nextId", ua))
                }, R(ue, "page", ua))
            }, R(ue, "rootName", ia(Q([aa(Or), R(zt, Fr, oa)]))))
        }, R(ue, "scaleName", ia(Q([aa(Or), R(zt, Fr, oa)]))))
    }, R(ue, "tempo", ee))), la = F, sa = Dn("mouseDown", R(Gt, function(r) {
        return R(Gt, function(n) {
            return St(U(r, n))
        }, R(la, 1, ee))
    }, R(la, 0, ee))), ba = Dn("mouseMove", R(Gt, function(r) {
        return R(Gt, function(n) {
            return St(U(r, n))
        }, R(la, 1, ee))
    }, R(la, 0, ee))), da = Dn("mouseUp", R(Gt, function(r) {
        return R(Gt, function(n) {
            return St(U(r, n))
        }, R(la, 1, ee))
    }, R(la, 0, ee))), ha = Dn("record", R(Gt, function(r) {
        return R(Gt, function(n) {
            return St(U(r, n))
        }, R(la, 1, ee))
    }, R(la, 0, ua))), ga = Dn("setOptions", R(Gt, function(n) {
        return St({
            aq: n
        })
    }, R(ue, "allowResize", Tt))), _a = Dn("setSize", R(Gt, function(r) {
        return R(Gt, function(n) {
            return St(U(r, n))
        }, R(la, 1, ee))
    }, R(la, 0, ee))), pa = Dn("setTempo", ee), $a = Bn, wa = b(function(n, r) {
        var t = n.af;
        if (1 === t.$)
            return !1;
        var u = t.a;
        return R(Ce, function(n) {
            return K(n.aB, r.aB)
        }, u)
    }), ma = b(function(n, r) {
        return 0 <= r.aB ? U(n, r) : U(V(n, {
            x: n.x + 1
        }), V(r, {
            aB: n.x
        }))
    }), ya = t(function(n, r, t) {
        var u = t.aX + t.au;
        return -1 < W(t.aX, n) && W(u, r) < 1
    }), Aa = t(function(n, r, t) {
        var u = t.aX + t.au;
        return 0 < W(u, n) && W(t.aX, n) < 0 || W(t.aX, r) < 0 && 0 < W(u, r) || J(ya, n, r, t)
    }), Ea = u(function(n, r, t, u) {
        return V(n, {
            u: R(Be, function(n) {
                return !J(Aa, r, t, n) || !K(n.aE, u)
            }, n.u)
        })
    }), xa = b(function(n, r) {
        var t = r.aX
            , u = t + r.au
            , e = H(Ea, n, t, u, r.aE)
            , a = R(ma, e, r)
            , i = a.a
            , o = a.b;
        return V(i, {
            u: R(qr, o, i.u)
        })
    }), Ca = b(function(n, r) {
        return J(ru, b(function(n, r) {
            return R(xa, r, n)
        }), n, r)
    }), Xa = B, ka = b(function(n, r) {
        return Xa(r * n) / n
    }), Ba = b(function(n, r) {
        return W(n, r) < 0 ? n : r
    }), ja = b(function(n, r) {
        var t = r.aX + r.au
            , u = R(xt, 0, r.aX)
            , e = Bu(r.aX - u)
            , a = R(Ba, n.m, t)
            , i = Bu(t - a);
        return V(r, {
            au: r.au - i - e,
            aX: u
        })
    }), Na = b(function(r, n) {
        return R(Be, function(n) {
            return 0 <= n.aE && W(n.aE, Nr(r.o)) < 0
        }, R(tu, function(n) {
            return R(ja, r, n)
        }, R(Be, function(n) {
            return J(Aa, 0, r.m, n)
        }, n)))
    }), Ma = {
        au: 1,
        aB: -1,
        aE: 0,
        aX: 0
    }, Ga = t(function(n, r, t) {
        var u = t - r
            , e = Nu(n.n)
            , a = Xa(u / e)
            , i = V(Ma, {
            au: e,
            aE: n.a_.aG
        });
        return R(tu, function(n) {
            return V(i, {
                aX: r + n * e
            })
        }, R(ft, 0, a - 1))
    }), Ta = b(function(n, r) {
        return At(r * n) / n
    }), za = t(function(n, r, t) {
        var u = R(xt, ku(n), R(Ta, n.n, r))
            , e = Nu(n.n);
        return V(Ma, {
            au: e,
            aE: t,
            aX: u
        })
    }), Da = u(function(n, r, t, u) {
        var e = J(za, n, r, u);
        return V(e, {
            au: t - e.aX
        })
    }), Sa = b(function(n, r) {
        var t = R(He, Y, n.af)
            , u = du(R(Je, function(n) {
            return n.aX
        }, R(Be, function(n) {
            return 0 < W(n.aX, r.aX)
        }, R(Be, function(n) {
            return K(n.aE, r.aE) && !K(n.aB, r.aB)
        }, t))))
            , e = r.aX + r.au;
        return 1 === u.$ ? Gu(n) - e : u.a.aX - e
    }), La = b(function(n, r) {
        var t = Du(n)
            , u = t.Y
            , e = t.ae
            , a = t.am
            , i = t.S;
        return J(Aa, u, e, r) && -1 < W(r.aE, a) && W(r.aE, i) < 1
    }), Fa = b(function(n, r) {
        var t = r.aX + r.au;
        return W(r.aX, n) < 1 && W(n, t) < 1
    }), Oa = t(function(n, r, t) {
        return du(R(Be, function(n) {
            return K(n.aE, t)
        }, R(Be, Fa(r), n.u)))
    }), qa = t(function(n, r, t) {
        return .75 <= (r - n.aX) / n.au && t ? 2 : 1
    }), Ia = u(function(n, r, t, u) {
        return V(n, {
            ax: Fr(r),
            ay: J(qa, r, t, n.ac.aq)
        })
    }), Ra = b(function(a, i) {
        return V(a, {
            m: i.m,
            u: i.u,
            n: i.n,
            o: function() {
                var n = P(ra, ta, i.h, i.g, a.y, a.z);
                if (1 === n.$)
                    return i.o;
                var r = n.a.h
                    , t = n.a.g
                    , u = n.a.y
                    , e = n.a.z;
                return H(na, r, t, u, e)
            }(),
            x: i.x,
            r: K(i.r, -1) ? ae : Su(i.r),
            g: i.g,
            h: i.h,
            af: Or,
            s: i.s
        })
    }), Ja = t(function(t, u, n) {
        var r = function() {
            var n = t.ax;
            if (1 === n.$)
                return !1;
            var r = n.a;
            return !R(Fa, u, r)
        }()
            , e = Nu(t.n)
            , a = !K(n, t.a_.aG);
        return 0 < W(Bu(t.a_.aH - u), e) || r || a
    }), Ha = t(function(r, n, t) {
        var u = Nu(r.n)
            , e = R(Be, function(n) {
            return W(n.aX - r.a_.aH, u) < 0
        }, R(Be, function(n) {
            return K(n.aE, t) && 0 < W(n.aX, r.a_.aH)
        }, r.u))
            , a = du(e);
        if (1 === a.$)
            return !1;
        a.a;
        return !0
    }), Pa = t(function(n, r, t) {
        return !K(t, n.a_.aG) || J(Ja, n, r, t) && (W(r, n.a_.aH) < 0 || J(Ha, n, r, t))
    }), Ka = b(function(n, r) {
        return 2 <= Bu(r - n.a_.aG)
    }), Wa = $a(Y), Ua = Gn("notesAdded", he(function(n) {
        return lu(Q([U("duration", be(n.au)), U("id", de(n.aB)), U("lane", de(n.aE)), U("start", be(n.aX))]))
    })), Va = Gn("notesDragged", he(function(n) {
        return lu(Q([U("duration", be(n.au)), U("id", de(n.aB)), U("lane", de(n.aE)), U("start", be(n.aX))]))
    })), Ya = Gn("notesSelected", he(function(n) {
        return lu(Q([U("duration", be(n.au)), U("id", de(n.aB)), U("lane", de(n.aE)), U("start", be(n.aX))]))
    })), Qa = t(function(n, r, t) {
        return W(t, n) < 0 ? n : 0 < W(t, r) ? r : t
    }), Za = b(function(n, r) {
        var t = r / Fu(n)
            , u = Nr(n.o)
            , e = At(t * u);
        return J(Qa, 0, u - 1, e)
    }), ni = b(function(n, r) {
        var t = Gu(n) - ku(n)
            , u = r / Ou(n) * t;
        return ku(n) + u
    }), ri = t(function(n, r, t) {
        return U(R(ni, n, r), R(Za, n, t))
    }), ti = Gn("previewNotes", he(function(n) {
        return lu(Q([U("duration", be(n.au)), U("id", de(n.aB)), U("lane", de(n.aE)), U("start", be(n.aX))]))
    })), ui = u(function(n, r, t, u) {
        var e = V(n.a_, {
            aG: t,
            aH: r,
            aI: u,
            aJ: t
        });
        return V(n, {
            a_: e
        })
    }), ei = b(function(n, r) {
        return V(n, {
            u: R(Be, function(n) {
                return !K(n.aB, r)
            }, n.u)
        })
    }), ai = e(function(n, r, t, u, e) {
        var a = V(n, {
            o: H(na, r, t, u, e),
            g: Fr(t),
            h: Fr(r)
        });
        return V(a, {
            u: R(Na, a, a.u)
        })
    }), ii = Gn("tempoChanged", be), oi = function(n) {
        if (0 === n.length || /[\sxbo]/.test(n))
            return Or;
        var r = +n;
        return r == r ? Fr(r) : Or
    }, fi = u(function(t, n, u, r) {
        var e = t.a_
            , a = function() {
            var n = t.ax;
            if (1 === n.$)
                return Or;
            var r = n.a;
            switch (t.ao) {
                case 0:
                case 2:
                    return Fr(r);
                case 1:
                    return Fr(V(r, {
                        aE: u
                    }));
                case 3:
                default:
                    return Fr(r)
            }
        }()
            , i = Nu(t.n) / 2
            , o = J(Qa, i, Gu(t) - i, n)
            , f = V(e, {
            aJ: u,
            aK: o,
            aL: r
        });
        return V(t, {
            ax: a,
            a_: f
        })
    }), ci = b(function(n, o) {
        switch (n.$) {
            case 1:
                var r = n.a
                    , t = V(T = R(Ra, o, r), {
                    u: R(Na, T, T.u)
                });
                return U(t, pe(su(t)));
            case 5:
                var u = n.a
                    , e = K(o.r, u);
                return U(T = V(o, {
                    r: e ? ae : u
                }), pe(su(T)));
            case 0:
                n.a;
                return U(T = V(o, {
                    u: Y,
                    af: Or
                }), pe(su(T)));
            case 6:
                var a = n.a
                    , i = a.a
                    , f = a.b
                    , c = R(ka, o.n, f)
                    , v = -1 < W(c, o.m) ? 0 : c;
                return U(T = R(xa, o, J(za, o, v, i)), pe(su(T)));
            case 7:
                var l = n.a
                    , s = l.a
                    , b = l.b
                    , d = V(o.a_, {
                    V: b,
                    an: s
                });
                return U(V(o, {
                    a_: d
                }), Wa);
            case 8:
                var h = n.a;
                return U(V(o, {
                    ac: h
                }), Wa);
            case 11:
                var g = n.a
                    , _ = R(He, 120, oi(g));
                return U(V(o, {
                    s: _
                }), ii(_));
            case 12:
                g = n.a;
                return U(V(o, {
                    s: g
                }), Wa);
            case 10:
                var p = n.a
                    , $ = R(He, "C", o.g)
                    , w = R(He, 2, o.z)
                    , m = R(He, 5, o.y);
                return U(T = P(ai, o, p, $, m, w), pe(su(T)));
            case 9:
                $ = n.a,
                    w = R(He, 2, o.z),
                    m = R(He, 5, o.y),
                    p = R(He, we.aa, o.h);
                return U(T = P(ai, o, p, $, m, w), pe(su(T)));
            case 13:
                var y = n.a
                    , A = J(za, o, 0, y);
                return U(o, ti(Q([A])));
            case 2:
                var E = n.a
                    , x = E.a
                    , C = E.b
                    , X = J(ri, o, x, C)
                    , k = (f = X.a,
                    i = X.b,
                    J(Oa, o, f, i))
                    , B = H(ui, o, f, i, C);
                return U(T = function() {
                    if (1 === k.$)
                        return function(n) {
                            return V(n, {
                                ax: Or,
                                ay: 0
                            })
                        }(B);
                    var n = k.a;
                    return H(Ia, B, n, f, i)
                }(), Wa);
            case 3:
                var j = n.a
                    , N = (x = j.a,
                    C = j.b,
                    o.ax);
                if (1 === N.$) {
                    var M = J(ri, o, x, C)
                        , G = (f = M.a,
                        i = M.b,
                        H(fi, o, f, i, C))
                        , T = o.ao ? 3 === o.ao && R(Ka, o, i) ? qu(G) : G : J(Pa, o, f, i) ? qu(G) : J(Ja, o, f, i) ? function(n) {
                        return V(n, {
                            ao: 3
                        })
                    }(G) : G
                        , z = function() {
                        if (4 !== T.ao)
                            return Wa;
                        var r = R(Be, La(o), o.u)
                            , n = R(Be, La(T), T.u)
                            , t = o.ao ? R(Be, function(n) {
                            return !R(Xe, n, r)
                        }, n) : n;
                        return Ya(t)
                    }();
                    return U(T, z)
                }
                N.a;
                var D = J(ri, o, x, C)
                    , S = (f = D.a,
                    i = D.b,
                    T = function() {
                        if (!J(Ja, o, f, i))
                            return o;
                        switch (o.ay) {
                            case 0:
                                return o;
                            case 1:
                                return function(t) {
                                    var n = function() {
                                        var n = t.ax;
                                        if (1 === n.$)
                                            return t;
                                        var r = n.a;
                                        return R(wa, t, r) ? Xu(t) : V(R(ei, t, r.aB), {
                                            af: Fr(Q([r]))
                                        })
                                    }();
                                    return V(n, {
                                        ao: 1
                                    })
                                }(o);
                            case 2:
                                return function(t) {
                                    var n = function() {
                                        var n = t.ax;
                                        if (1 === n.$)
                                            return t;
                                        var r = n.a;
                                        return R(wa, t, r) ? t : V(t, {
                                            af: Fr(Q([r]))
                                        })
                                    }();
                                    return V(n, {
                                        ao: 2
                                    })
                                }(o);
                            case 3:
                            default:
                                return o
                        }
                    }(),
                    H(fi, T, f, i, C));
                return U(S, z = !K(S.a_.aJ, o.a_.aJ) && 1 === T.ao ? Va(ju(S)) : Wa);
            default:
                var L = n.a;
                x = L.a,
                    C = L.b;
                switch (o.ao) {
                    case 0:
                        var F = function() {
                            var n = o.ax;
                            if (1 === n.$) {
                                var r = o.af;
                                if (1 === r.$) {
                                    var t = R(xt, ku(o), R(ni, o, x))
                                        , u = R(Za, o, C)
                                        , e = J(za, o, t, u);
                                    return U(R(xa, o, e), Ua(Q([e])))
                                }
                                r.a;
                                return U(Cu(o), Wa)
                            }
                            var a = n.a
                                , i = o.af;
                            if (1 === i.$)
                                return U(Cu(R(ei, o, a.aB)), Wa);
                            i.a;
                            return R(wa, o, a) ? U(Cu(Xu(o)), Wa) : U(Cu(o), Wa)
                        }()
                            , O = (T = F.a,
                            F.b);
                        return U(T, $a(Q([pe(su(T)), O])));
                    case 1:
                        return U(T = function(n) {
                            var r = ju(n)
                                , t = R(Ca, n, r)
                                , u = 1 < Nr(r) ? V(t, {
                                af: Fr(r)
                            }) : V(t, {
                                af: Or
                            });
                            return V(u, {
                                ao: 0,
                                ax: Or
                            })
                        }(o), pe(su(T)));
                    case 2:
                        return U(T = function(n) {
                            var r = zu(n)
                                , t = R(Ca, n, r)
                                , u = 1 < Nr(r) ? V(t, {
                                af: Fr(r)
                            }) : V(t, {
                                af: Or
                            });
                            return V(u, {
                                ao: 0,
                                ax: Or
                            })
                        }(o), pe(su(T)));
                    case 3:
                        var q = 1 === (I = du(Mu(o))).$ ? Y : Q([I.a]);
                        return U(T = Cu(function(n) {
                            return V(R(Ca, n, Mu(n)), {
                                ao: 0,
                                ax: Or
                            })
                        }(o)), $a(Q([pe(su(T)), Ua(q)])));
                    default:
                        return U(T = function(n) {
                            var r = R(Be, La(n), n.u);
                            return V(n, {
                                ao: 0,
                                ax: Or,
                                af: Fr(r)
                            })
                        }(o), pe(su(T)))
                }
        }
        var I
    }), vi = b(function(n, r) {
        return R(ci, n, r)
    }), li = Vn("class"), si = S, bi = Vn("height"), di = Vn("id"), hi = Rn("http://www.w3.org/2000/svg"), gi = hi("rect"), _i = b(function(n, r) {
        var t = Gu(n) - ku(n)
            , u = r - ku(n);
        return At(u / t * Ou(n) + n.a_.X)
    }), pi = hi("svg"), $i = Vn("width"), wi = Vn("x"), mi = t(function(n, r, t) {
        var u = r ? 1 : -1
            , e = R(_i, n, r + t)
            , a = R(_i, n, r);
        return U(a + u, e - a - (r ? 2 : 0))
    }), yi = b(function(n, r) {
        return J(mi, n, r.aX, r.au)
    }), Ai = Vn("y"), Ei = b(function(n, r) {
        return Ju(n) * r
    }), xi = b(function(n, r) {
        return U(R(Ei, n, r.aE) + 2, Ju(n) - 2)
    }), Ci = b(function(n, r) {
        var t, u = R(yi, n, r), e = u.a, a = u.b, i = R(xi, n, r), o = i.a, f = i.b, c = R(gi, Q([li("widget-pianoroll__event-background"), wi(tt(1)), Ai(si(o)), $i(si(a)), bi(si(f))]), Y), v = o + f / 2, l = R(gi, Q([li("widget-pianoroll__event-resize-handle"), wi(tt(Iu(a))), Ai(si(v - 7)), $i("2"), bi("14")]), Y);
        return t = Ru(n) ? Q([c, l]) : Q([c]),
            R(pi, Q([li("widget-pianoroll__event widget-pianoroll__event--selected"), di("event_" + tt(r.aB)), wi(si(e)), Ai("0"), $i(si(a + 1))]), t)
    }), Xi = b(function(n, r) {
        return U(tt(r.aB), R(Ci, n, r))
    }), ki = b(function(n, r) {
        return R(Hn, n, function(n) {
            return "script" == n ? "p" : n
        }(r))
    })("http://www.w3.org/2000/svg"), Bi = Jn("div"), ji = b(function(n, r) {
        var t = function() {
            switch (n.ao) {
                case 0:
                case 4:
                    return Y;
                case 3:
                    return Mu(n);
                case 1:
                    return ju(n);
                default:
                    return zu(n)
            }
        }()
            , u = R(Be, function(n) {
            return J(Aa, n.aX, n.aX + n.au, r) && K(n.aE, r.aE)
        }, t);
        return 0 < Nr(u)
    }), Ni = b(function(n, r) {
        var t, u = R(ji, n, r), e = function() {
            switch (n.ao) {
                case 0:
                case 1:
                case 2:
                case 3:
                    return R(wa, n, r);
                default:
                    return R(La, n, r)
            }
        }(), a = w(function() {
            switch (n.ao) {
                case 0:
                case 1:
                    return !1;
                case 2:
                    return R(wa, n, r);
                case 3:
                default:
                    return !1
            }
        }() ? " widget-pianoroll__event--hidden" : "", w(u ? " widget-pianoroll__event--would-be-deleted" : "", e ? " widget-pianoroll__event--selected" : "")), i = R(yi, n, r), o = i.a, f = i.b, c = R(xi, n, r), v = c.a, l = c.b, s = R(gi, Q([li("widget-pianoroll__event-background"), wi(tt(1)), Ai(si(v)), $i(si(f)), bi(si(l))]), Y), b = v + l / 2, d = R(gi, Q([li("widget-pianoroll__event-resize-handle"), wi(tt(Iu(f))), Ai(si(b - 7)), $i("2"), bi("14")]), Y);
        return t = Ru(n) ? Q([s, d]) : Q([s]),
            R(pi, Q([li("widget-pianoroll__event" + a), di("event_" + tt(r.aB)), wi(si(o)), Ai("0"), $i(si(f + 1))]), t)
    }), Mi = b(function(n, r) {
        return U(tt(r.aB), R(Ni, n, r))
    }), Gi = b(function(n, r) {
        var t = R(_i, n, 4 * r)
            , u = R(_i, n, 4) - R(_i, n, 0);
        return R(gi, Q([li("widget-pianoroll__bar-highlight"), wi(si(t)), Ai("0"), $i(si(u)), bi(si(Fu(n)))]), Y)
    }), Ti = b(function(n, r) {
        return R(gi, Q([li("widget-pianoroll__beat-line"), wi(si(r)), Ai("2"), $i("2"), bi(si(Fu(n)))]), Y)
    }), zi = b(function(n, r) {
        return R(gi, Q([li("widget-pianoroll__vertical-grid-line"), wi(si(r)), Ai("0"), $i("2"), bi(si(Fu(n)))]), Y)
    }), Di = b(function(n, r) {
        return R(gi, Q([li("widget-pianoroll__horizontal-grid-line"), wi("0"), Ai(si(r)), $i(si(n.a_.an)), bi("2")]), Y)
    }), Si = b(function(n, r) {
        var t = Nr(n.o) - 1 - r;
        return R(Xe, t, n.W)
    }), Li = t(function(n, r, t) {
        var u, e = R(Ei, n, r), a = 1 === (u = t.T).$ ? "" : "none" === u.a ? " widget-pianoroll__lane-highlight" : " widget-pianoroll__lane-highlight--black", i = R(Si, n, r) ? " widget-pianoroll__lane-label--highlight" : "", o = R(gi, Q([li("widget-pianoroll__lane-highlight" + a), wi("0"), Ai(si(e)), $i(si(n.a_.an)), bi(si(Ju(n)))]), Y);
        return R(pi, Q([li(i), $i(si(n.a_.an)), bi(si(Fu(n)))]), Q([o]))
    }), Fi = Vn("font-size"), Oi = Kn, qi = b(function(n, r) {
        return R(Oi, n, function(n) {
            return {
                $: 0,
                a: n
            }
        }(r))
    }), Ii = In, Ri = Ii, Ji = Vn("text-anchor"), Hi = hi("text"), Pi = t(function(n, r, t) {
        var u, e, a = R(Ei, n, r), i = 1 === (u = t.aa).$ ? "" : u.a, o = R(Si, n, r) ? " widget-pianoroll__lane-label--highlight" : "", f = Ju(n), c = R(Hi, Q([li("widget-pianoroll__lane-label-text"), wi(si(n.a_.X / 2 - 1)), Ai(si(f / 2 + 6)), $i(si(n.a_.X)), bi(si(f)), Ji("middle"), Fi("13px")]), Q([Ri(i)])), v = R(gi, Q([li("widget-pianoroll__beat-line"), wi(si(n.a_.X - 2)), Ai("2"), $i("2"), bi(si(f))]), Y), l = 1 === (e = t.T).$ ? "widget-pianoroll__lane-highlight" : "none" === e.a ? " widget-pianoroll__lane-highlight" : " widget-pianoroll__lane-highlight--black", s = R(gi, Q([li(l), wi("0"), Ai("2"), $i(si(n.a_.X)), bi(si(R(xt, 0, f - 2))), function(n) {
            return R(qi, "mousedown", St(n))
        }(function(n) {
            return {
                $: 13,
                a: n
            }
        }(r))]), Y);
        return R(pi, Q([li("widget-pianoroll__lane-label" + o), wi("0"), Ai(si(a))]), Q([s, v, c]))
    }), Ki = b(function(n, r) {
        var t = At(n.m / 4)
            , u = Xa(Lu(n))
            , e = Ou(n) / t
            , a = function() {
            if (1 === r.$)
                return 0;
            var n = r.a;
            return At(n * e)
        }();
        return R(gi, Q([li("widget-pianoroll__overview-bar-divider"), $i("2"), bi(tt(u)), wi(tt(a))]), Y)
    }), Wi = b(function(n, r) {
        var t = At(n.m / 4)
            , u = 1 === r.$ ? 0 : 0 < r.a ? 1 : 0
            , e = K(r, n.r) || K(n.r, ae) ? " widget-pianoroll__overview-button--saturated" : " widget-pianoroll__overview-button--desaturated"
            , a = Ou(n) / t
            , i = function() {
            if (1 === r.$)
                return 0;
            var n = r.a;
            return At(n * a)
        }()
            , o = Xa(Lu(n));
        return R(gi, Q([li("widget-pianoroll__overview-button" + e), function(n) {
            return R(qi, "click", St(n))
        }(function(n) {
            return {
                $: 5,
                a: n
            }
        }(r)), $i(tt(At(a))), bi(tt(o)), wi(tt(i + u)), Ai("0")]), Y)
    }), Ui = b(function(n, r) {
        return U(Hu(r), R(Wi, n, r))
    }), Vi = b(function(n, r) {
        var t = r.aE / Nr(n.o) * Lu(n)
            , u = (r.au,
            n.m,
            V(n, {
                r: ae
            }))
            , e = R(yi, u, r)
            , a = e.a
            , i = e.b
            , o = a - n.a_.X + 1
            , f = i
            , c = R(xi, u, r);
        c.a,
            c.b;
        return R(gi, Q([li("widget-pianoroll__event-background"), wi(si(o)), Ai(tt(At(t))), $i(tt(At(f))), bi(tt(At(2)))]), Y)
    }), Yi = b(function(n, r) {
        return U(tt(r.aB), R(Vi, n, r))
    }), Qi = b(function(n, r) {
        var t = 1 === r.$ ? 0 : r.a ? 3 : 1
            , u = At(n.m / 4)
            , e = K(r, n.r) && !K(n.r, ae) ? " widget-pianoroll__overview-frame--active" : " widget-pianoroll__overview-frame--inactive"
            , a = Ou(n) / u
            , i = function() {
            if (1 === r.$)
                return 0;
            var n = r.a;
            return At(n * a + t)
        }()
            , o = Xa(Lu(n));
        return R(gi, Q([li("widget-pianoroll__overview-frame" + e), $i(tt(Xa(a - t - 1))), bi(tt(o - 2)), wi(tt(i)), Ai("1")]), Y)
    }), Zi = b(function(n, r) {
        return U(Hu(r), R(Qi, n, r))
    }), no = Wn, ro = Vn("style"), to = Ii, uo = b(function(n, r) {
        var t = R(Bi, Q([li("widget-pianoroll__overview-spacer"), R(no, "width", si(n.a_.X) + "px"), R(no, "line-height", si(Lu(n)) + "px")]), Q([to("")]))
            , u = J(ki, "g", Y, R(tu, Yi(n), n.u))
            , e = J(ki, "g", Y, R(tu, Zi(n), r))
            , a = J(ki, "g", Y, R(tu, Ui(n), r))
            , i = R(pi, Q([li("widget-pianoroll__overview"), ro("width: " + si(Ou(n)) + "px;height: " + si(Lu(n)) + "px;")]), bu(Q([Q([u]), Q([function(n) {
            var r = function() {
                switch (n.ao) {
                    case 0:
                        return Q([U("", R(gi, Y, Y))]);
                    case 1:
                        return R(tu, Yi(n), ju(n));
                    case 2:
                        return R(tu, Yi(n), zu(n));
                    case 3:
                        return R(tu, Yi(n), Mu(n));
                    default:
                        return Q([U("", R(gi, Y, Y))])
                }
            }();
            return J(ki, "g", Y, r)
        }(n)]), Q([a]), R(tu, Ki(n), R(He, Y, gu(r))), Q([e])])));
        return R(Bi, Q([li("widget-pianoroll__crown")]), Q([t, i]))
    }), eo = b(function(n, r) {
        return R(Un, n, _e(r))
    }), ao = eo("className"), io = Jn("input"), oo = eo("max"), fo = eo("min"), co = b(function(n, r) {
        return R(Oi, n, function(n) {
            return {
                $: 1,
                a: n
            }
        }(r))
    }), vo = R(b(function(n, r) {
        return J(ru, ue, r, n)
    }), Q(["target", "value"]), oa), lo = Jn("span"), so = eo("type"), bo = eo("value"), ho = R(tu, function(n) {
        return R(ut, "/", n)
    }, Ze), go = Jn("button"), _o = b(function(n, r) {
        var t, u = r.a, e = r.b, a = 1 === (t = n.g).$ ? "" : K(t.a, u) ? " widget__choice--selected" : "";
        return R(go, Q([li("btn widget__choice" + a), Uu(function(n) {
            return {
                $: 9,
                a: n
            }
        }(u))]), Q([to(e)]))
    }), po = b(function(n, r) {
        var t, u = 1 === (t = n.h).$ ? "" : K(t.a, r) ? " widget__choice--selected" : "";
        return R(go, Q([li("btn widget__choice" + u), Uu(function(n) {
            return {
                $: 10,
                a: n
            }
        }(r))]), Q([to(r)]))
    }), $o = te({
        a8: function(a) {
            var n = function() {
                var n = P(ra, ta, a.h, a.g, a.y, a.z);
                if (1 === n.$)
                    return a.o;
                var r = n.a.h
                    , t = n.a.g
                    , u = n.a.y
                    , e = n.a.z;
                return H(na, r, t, u, e)
            }()
                , r = V(oe, {
                V: a.V,
                X: a.X,
                an: a.an
            })
                , t = V(le, {
                R: a.R,
                m: a.m,
                n: a.n,
                W: a.W,
                o: n,
                y: a.y,
                z: a.z,
                ac: a.ac,
                g: a.g,
                h: a.h,
                ah: a.ah,
                ai: a.ai,
                aj: a.aj,
                ak: a.ak,
                s: a.s,
                a_: r
            });
            return U(t, pe(su(t)))
        },
        bd: function(n) {
            return fa(Q([va($u), ca(_u), sa(wu), ba(mu), da(yu), ha(Au), _a(xu), ga(Eu), pa(pu)]))
        },
        bf: vi,
        bg: function(n) {
            return Qu(n)
        }
    });
    Zu = {
        SimplePianoRoll: {
            SimplePianoRoll: {
                init: $o(R(Gt, function(_) {
                    return R(Gt, function(g) {
                        return R(Gt, function(h) {
                            return R(Gt, function(d) {
                                return R(Gt, function(b) {
                                    return R(Gt, function(s) {
                                        return R(Gt, function(l) {
                                            return R(Gt, function(v) {
                                                return R(Gt, function(c) {
                                                    return R(Gt, function(f) {
                                                        return R(Gt, function(o) {
                                                            return R(Gt, function(i) {
                                                                return R(Gt, function(a) {
                                                                    return R(Gt, function(e) {
                                                                        return R(Gt, function(u) {
                                                                            return R(Gt, function(t) {
                                                                                return R(Gt, function(r) {
                                                                                    return R(Gt, function(n) {
                                                                                        return St({
                                                                                            R: n,
                                                                                            m: r,
                                                                                            n: t,
                                                                                            V: u,
                                                                                            W: e,
                                                                                            X: a,
                                                                                            o: i,
                                                                                            y: o,
                                                                                            z: f,
                                                                                            ac: c,
                                                                                            g: v,
                                                                                            h: l,
                                                                                            ah: s,
                                                                                            ai: b,
                                                                                            aj: d,
                                                                                            ak: h,
                                                                                            s: g,
                                                                                            an: _
                                                                                        })
                                                                                    }, R(ue, "availableScales", ea(oa)))
                                                                                }, R(ue, "beats", ee))
                                                                            }, R(ue, "gridSize", ua))
                                                                        }, R(ue, "height", ee))
                                                                    }, R(ue, "highlightedLanes", ea(ua)))
                                                                }, R(ue, "labelWidth", ee))
                                                            }, R(ue, "lanes", ea(R(Gt, function(e) {
                                                                return R(Gt, function(u) {
                                                                    return R(Gt, function(t) {
                                                                        return R(Gt, function(r) {
                                                                            return R(Gt, function(n) {
                                                                                return St({
                                                                                    as: n,
                                                                                    T: r,
                                                                                    U: t,
                                                                                    _: u,
                                                                                    aa: e
                                                                                })
                                                                            }, R(ue, "choke", ia(Q([aa(Or), R(zt, Fr, ua)]))))
                                                                        }, R(ue, "color", ia(Q([aa(Or), R(zt, Fr, oa)]))))
                                                                    }, R(ue, "freq", ia(Q([aa(Or), R(zt, Fr, ee)]))))
                                                                }, R(ue, "midi", ia(Q([aa(Or), R(zt, Fr, ua)]))))
                                                            }, R(ue, "name", ia(Q([aa(Or), R(zt, Fr, oa)])))))))
                                                        }, R(ue, "octave", ia(Q([aa(Or), R(zt, Fr, ua)]))))
                                                    }, R(ue, "octaveCount", ia(Q([aa(Or), R(zt, Fr, ua)]))))
                                                }, R(ue, "options", R(Gt, function(n) {
                                                    return St({
                                                        aq: n
                                                    })
                                                }, R(ue, "allowResize", Tt))))
                                            }, R(ue, "rootName", ia(Q([aa(Or), R(zt, Fr, oa)]))))
                                        }, R(ue, "scaleName", ia(Q([aa(Or), R(zt, Fr, oa)]))))
                                    }, R(ue, "showRootChooser", Tt))
                                }, R(ue, "showScaleChooser", Tt))
                            }, R(ue, "showSettings", Tt))
                        }, R(ue, "showTempoSlider", Tt))
                    }, R(ue, "tempo", ee))
                }, R(ue, "width", ee)))(0)
            }
        }
    },
        n.Elm ? function n(r, t) {
            for (var u in t)
                u in r ? "init" == u ? h(6) : n(r[u], t[u]) : r[u] = t[u]
        }(n.Elm, Zu) : n.Elm = Zu
}(this);
