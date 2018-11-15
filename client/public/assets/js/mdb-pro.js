var WOW;
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , i = e.document
      , r = Object.getPrototypeOf
      , o = n.slice
      , s = n.concat
      , a = n.push
      , l = n.indexOf
      , c = {}
      , u = c.toString
      , d = c.hasOwnProperty
      , f = d.toString
      , h = f.call(Object)
      , p = {}
      , g = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , m = function(e) {
        return null != e && e === e.window
    }
      , v = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function y(e, t, n) {
        var r, o = (t = t || i).createElement("script");
        if (o.text = e,
        n)
            for (r in v)
                n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var w = function(e, t) {
        return new w.fn.init(e,t)
    }
      , _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function x(e) {
        var t = !!e && "length"in e && e.length
          , n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || g(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    s !== (i = e[t]) && (c && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {},
                    s[t] = w.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || f.call(n) !== h))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            y(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (x(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(_, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0, a = [];
            if (x(e))
                for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e)
                    null != (r = t(e[o], o, n)) && a.push(r);
            return s.apply([], a)
        },
        guid: 1,
        support: p
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        var t, n, i, r, o, s, a, l, c, u, d, f, h, p, g, m, v, y, b, w = "sizzle" + 1 * new Date, _ = e.document, x = 0, T = 0, S = se(), C = se(), E = se(), k = function(e, t) {
            return e === t && (d = !0),
            0
        }, A = {}.hasOwnProperty, O = [], P = O.pop, D = O.push, I = O.push, N = O.slice, L = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", $ = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]", W = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)", R = new RegExp(M + "+","g"), q = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), F = new RegExp("^" + M + "*," + M + "*"), B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), V = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), Y = new RegExp(W), X = new RegExp("^" + H + "$"), z = {
            ID: new RegExp("^#(" + H + ")"),
            CLASS: new RegExp("^\\.(" + H + ")"),
            TAG: new RegExp("^(" + H + "|[*])"),
            ATTR: new RegExp("^" + $),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + j + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, U = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, J = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ee = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ie = function() {
            f()
        }, re = ye(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            I.apply(O = N.call(_.childNodes), _.childNodes),
            O[_.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: O.length ? function(e, t) {
                    D.apply(e, N.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, i, r) {
            var o, a, c, u, d, p, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x)
                return i;
            if (!r && ((t ? t.ownerDocument || t : _) !== h && f(t),
            t = t || h,
            g)) {
                if (11 !== x && (d = K.exec(e)))
                    if (o = d[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(o)))
                                return i;
                            if (c.id === o)
                                return i.push(c),
                                i
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o)
                            return i.push(c),
                            i
                    } else {
                        if (d[2])
                            return I.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return I.apply(i, t.getElementsByClassName(o)),
                            i
                    }
                if (n.qsa && !E[e + " "] && (!m || !m.test(e))) {
                    if (1 !== x)
                        y = t,
                        v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w),
                        a = (p = s(e)).length; a--; )
                            p[a] = "#" + u + " " + ve(p[a]);
                        v = p.join(","),
                        y = Z.test(e) && ge(t.parentNode) || t
                    }
                    if (v)
                        try {
                            return I.apply(i, y.querySelectorAll(v)),
                            i
                        } catch (e) {} finally {
                            u === w && t.removeAttribute("id")
                        }
                }
            }
            return l(e.replace(q, "$1"), t, i, r)
        }
        function se() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
        }
        function ae(e) {
            return e[w] = !0,
            e
        }
        function le(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ce(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t
        }
        function ue(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function fe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function he(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function pe(e) {
            return ae(function(t) {
                return t = +t,
                ae(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = oe.support = {},
        o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        f = oe.setDocument = function(e) {
            var t, r, s = e ? e.ownerDocument || e : _;
            return s !== h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement,
            g = !o(h),
            _ !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)),
            n.attributes = le(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = le(function(e) {
                return e.appendChild(h.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = G.test(h.getElementsByClassName),
            n.getById = le(function(e) {
                return p.appendChild(e).id = w,
                !h.getElementsByName || !h.getElementsByName(w).length
            }),
            n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(J, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(e) {
                var t = e.replace(J, ee);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            m = [],
            (n.qsa = G.test(h.querySelectorAll)) && (le(function(e) {
                p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + j + ")"),
                e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
            }),
            le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = h.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                p.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                v.push("!=", W)
            }),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = G.test(p.compareDocumentPosition),
            b = t || G.test(p.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            k = t ? function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === _ && b(_, e) ? -1 : t === h || t.ownerDocument === _ && b(_, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return d = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!r || !o)
                    return e === h ? -1 : t === h ? 1 : r ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;
                if (r === o)
                    return ue(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? ue(s[i], a[i]) : s[i] === _ ? -1 : a[i] === _ ? 1 : 0
            }
            ,
            h) : h
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== h && f(e),
            t = t.replace(V, "='$1']"),
            n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return oe(t, h, null, [e]).length > 0
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== h && f(e),
            b(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== h && f(e);
            var r = i.attrHandle[t.toLowerCase()]
              , o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, i = [], r = 0, o = 0;
            if (d = !n.detectDuplicates,
            u = !n.sortStable && e.slice(0),
            e.sort(k),
            d) {
                for (; t = e[o++]; )
                    t === e[o] && (r = i.push(o));
                for (; r--; )
                    e.splice(i[r], 1)
            }
            return u = null,
            e
        }
        ,
        r = oe.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += r(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += r(t);
            return n
        }
        ,
        (i = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: z,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(J, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(J, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && S(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var r = oe.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "",
                        "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, d, f, h, p, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (f = t; f = f[g]; )
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (b = (h = (c = (u = (d = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2],
                                f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop(); )
                                    if (1 === f.nodeType && ++b && f === t) {
                                        u[e] = [x, h, b];
                                        break
                                    }
                            } else if (y && (b = h = (c = (u = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]),
                            !1 === b)
                                for (; (f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [x, b]),
                                f !== t)); )
                                    ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                        for (var i, o = r(e, t), s = o.length; s--; )
                            e[i = L(e, o[s])] = !(n[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var t = []
                      , n = []
                      , i = a(e.replace(q, "$1"));
                    return i[w] ? ae(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: ae(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: ae(function(e) {
                    return e = e.replace(J, ee),
                    function(t) {
                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                    }
                }),
                lang: ae(function(e) {
                    return X.test(e || "") || oe.error("unsupported lang: " + e),
                    e = e.replace(J, ee).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === p
                },
                focus: function(e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: he(!1),
                disabled: he(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return Q.test(e.nodeName)
                },
                input: function(e) {
                    return U.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: pe(function() {
                    return [0]
                }),
                last: pe(function(e, t) {
                    return [t - 1]
                }),
                eq: pe(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: pe(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: pe(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: pe(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: pe(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[t] = de(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            i.pseudos[t] = fe(t);
        function me() {}
        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ye(e, t, n) {
            var i = t.dir
              , r = t.next
              , o = r || i
              , s = n && "parentNode" === o
              , a = T++;
            return t.first ? function(t, n, r) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || s)
                        return e(t, n, r);
                return !1
            }
            : function(t, n, l) {
                var c, u, d, f = [x, a];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || s) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || s)
                            if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                            r && r === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === x && c[1] === a)
                                    return f[2] = c[2];
                                if (u[o] = f,
                                f[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function be(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function we(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                c && t.push(a)));
            return s
        }
        function _e(e, t, n, i, r, o) {
            return i && !i[w] && (i = _e(i)),
            r && !r[w] && (r = _e(r, o)),
            ae(function(o, s, a, l) {
                var c, u, d, f = [], h = [], p = s.length, g = o || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++)
                        oe(e, t[i], n);
                    return n
                }(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : we(g, f, e, a, l), v = n ? r || (o ? e : p || i) ? [] : s : m;
                if (n && n(m, v, a, l),
                i)
                    for (c = we(v, h),
                    i(c, [], a, l),
                    u = c.length; u--; )
                        (d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [],
                            u = v.length; u--; )
                                (d = v[u]) && c.push(m[u] = d);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--; )
                            (d = v[u]) && (c = r ? L(o, d) : f[u]) > -1 && (o[c] = !(s[c] = d))
                    }
                } else
                    v = we(v === s ? v.splice(p, v.length) : v),
                    r ? r(null, s, v, l) : I.apply(s, v)
            })
        }
        function xe(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function(e) {
                return e === t
            }, a, !0), d = ye(function(e) {
                return L(t, e) > -1
            }, a, !0), f = [function(e, n, i) {
                var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                return t = null,
                r
            }
            ]; l < o; l++)
                if (n = i.relative[e[l].type])
                    f = [ye(be(f), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++)
                            ;
                        return _e(l > 1 && be(f), l > 1 && ve(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), n, l < r && xe(e.slice(l, r)), r < o && xe(e = e.slice(r)), r < o && ve(e))
                    }
                    f.push(n)
                }
            return be(f)
        }
        function Te(e, t) {
            var n = t.length > 0
              , r = e.length > 0
              , o = function(o, s, a, l, u) {
                var d, p, m, v = 0, y = "0", b = o && [], w = [], _ = c, T = o || r && i.find.TAG("*", u), S = x += null == _ ? 1 : Math.random() || .1, C = T.length;
                for (u && (c = s === h || s || u); y !== C && null != (d = T[y]); y++) {
                    if (r && d) {
                        for (p = 0,
                        s || d.ownerDocument === h || (f(d),
                        a = !g); m = e[p++]; )
                            if (m(d, s || h, a)) {
                                l.push(d);
                                break
                            }
                        u && (x = S)
                    }
                    n && ((d = !m && d) && v--,
                    o && b.push(d))
                }
                if (v += y,
                n && y !== v) {
                    for (p = 0; m = t[p++]; )
                        m(b, w, s, a);
                    if (o) {
                        if (v > 0)
                            for (; y--; )
                                b[y] || w[y] || (w[y] = P.call(l));
                        w = we(w)
                    }
                    I.apply(l, w),
                    u && !o && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                }
                return u && (x = S,
                c = _),
                b
            };
            return n ? ae(o) : o
        }
        return me.prototype = i.filters = i.pseudos,
        i.setFilters = new me,
        s = oe.tokenize = function(e, t) {
            var n, r, o, s, a, l, c, u = C[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (a = e,
            l = [],
            c = i.preFilter; a; ) {
                for (s in n && !(r = F.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                l.push(o = [])),
                n = !1,
                (r = B.exec(a)) && (n = r.shift(),
                o.push({
                    value: n,
                    type: r[0].replace(q, " ")
                }),
                a = a.slice(n.length)),
                i.filter)
                    !(r = z[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(),
                    o.push({
                        value: n,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? oe.error(e) : C(e, l).slice(0)
        }
        ,
        a = oe.compile = function(e, t) {
            var n, i = [], r = [], o = E[e + " "];
            if (!o) {
                for (t || (t = s(e)),
                n = t.length; n--; )
                    (o = xe(t[n]))[w] ? i.push(o) : r.push(o);
                (o = E(e, Te(r, i))).selector = e
            }
            return o
        }
        ,
        l = oe.select = function(e, t, n, r) {
            var o, l, c, u, d, f = "function" == typeof e && e, h = !r && s(e = f.selector || e);
            if (n = n || [],
            1 === h.length) {
                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(J, ee), t) || [])[0]))
                        return n;
                    f && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (o = z.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o],
                !i.relative[u = c.type]); )
                    if ((d = i.find[u]) && (r = d(c.matches[0].replace(J, ee), Z.test(l[0].type) && ge(t.parentNode) || t))) {
                        if (l.splice(o, 1),
                        !(e = r.length && ve(l)))
                            return I.apply(n, r),
                            n;
                        break
                    }
            }
            return (f || a(e, h))(r, t, !g, n, !t || Z.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = w.split("").sort(k).join("") === w,
        n.detectDuplicates = !!d,
        f(),
        n.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }),
        le(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && le(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(j, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        oe
    }(e);
    w.find = T,
    w.expr = T.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = T.uniqueSort,
    w.text = T.getText,
    w.isXMLDoc = T.isXML,
    w.contains = T.contains,
    w.escapeSelector = T.escape;
    var S = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && w(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , C = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , E = w.expr.match.needsContext;
    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function O(e, t, n) {
        return g(t) ? w.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return l.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (w.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                w.find(e, r[t], n);
            return i > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(O(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(O(this, e || [], !0))
        },
        is: function(e) {
            return !!O(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1).length
        }
    });
    var P, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var r, o;
        if (!e)
            return this;
        if (n = n || P,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof w ? t[0] : t,
                w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)),
                A.test(r[1]) && w.isPlainObject(t))
                    for (r in t)
                        g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    P = w(i);
    var I = /^(?:parents|prev(?:Until|All))/
      , N = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function L(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && w(e);
            if (!E.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C(e.firstChild)
        },
        contents: function(e) {
            return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, i) {
            var r = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = w.filter(i, r)),
            this.length > 1 && (N[e] || w.uniqueSort(r),
            I.test(e) && r.reverse()),
            this.pushStack(r)
        }
    });
    var j = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function H(e) {
        throw e
    }
    function $(e, t, n, i) {
        var r;
        try {
            e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return w.each(e.match(j) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }(e) : w.extend({}, e);
        var t, n, i, r, o = [], s = [], a = -1, l = function() {
            for (r = r || e.once,
            i = t = !0; s.length; a = -1)
                for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            r && (o = n ? [] : "")
        }, c = {
            add: function() {
                return o && (n && !t && (a = o.length - 1,
                s.push(n)),
                function t(n) {
                    w.each(n, function(n, i) {
                        g(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i)
                    })
                }(arguments),
                n && !t && l()),
                this
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    for (var n; (n = w.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= a && a--
                }),
                this
            },
            has: function(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return r = s = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return r = s = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(e, n) {
                return r || (n = [e, (n = n || []).slice ? n.slice() : n],
                s.push(n),
                t || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , r = {
                state: function() {
                    return i
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return r.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, i) {
                            var r = g(e[i[4]]) && e[i[4]];
                            o[i[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, i, r) {
                    var o = 0;
                    function s(t, n, i, r) {
                        return function() {
                            var a = this
                              , l = arguments
                              , c = function() {
                                var e, c;
                                if (!(t < o)) {
                                    if ((e = i.apply(a, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    g(c) ? r ? c.call(e, s(o, n, M, r), s(o, n, H, r)) : (o++,
                                    c.call(e, s(o, n, M, r), s(o, n, H, r), s(o, n, M, n.notifyWith))) : (i !== M && (a = void 0,
                                    l = [e]),
                                    (r || n.resolveWith)(a, l))
                                }
                            }
                              , u = r ? c : function() {
                                try {
                                    c()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace),
                                    t + 1 >= o && (i !== H && (a = void 0,
                                    l = [e]),
                                    n.rejectWith(a, l))
                                }
                            }
                            ;
                            t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(u))
                        }
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(s(0, e, g(r) ? r : M, e.notifyWith)),
                        n[1][3].add(s(0, e, g(t) ? t : M)),
                        n[2][3].add(s(0, e, g(i) ? i : H))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, r) : r
                }
            }
              , o = {};
            return w.each(n, function(e, t) {
                var s = t[2]
                  , a = t[5];
                r[t[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                s.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = s.fireWith
            }),
            r.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , r = o.call(arguments)
              , s = w.Deferred()
              , a = function(e) {
                return function(n) {
                    i[e] = this,
                    r[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || s.resolveWith(i, r)
                }
            };
            if (t <= 1 && ($(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || g(r[n] && r[n].then)))
                return s.then();
            for (; n--; )
                $(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var R = w.Deferred();
    function q() {
        i.removeEventListener("DOMContentLoaded", q),
        e.removeEventListener("load", q),
        w.ready()
    }
    w.fn.ready = function(e) {
        return R.then(e).catch(function(e) {
            w.readyException(e)
        }),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0,
            !0 !== e && --w.readyWait > 0 || R.resolveWith(i, [w]))
        }
    }),
    w.ready.then = R.then,
    "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", q),
    e.addEventListener("load", q));
    var F = function(e, t, n, i, r, o, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === b(n))
            for (a in r = !0,
            n)
                F(e, t, a, n[a], !0, o, s);
        else if (void 0 !== i && (r = !0,
        g(i) || (s = !0),
        c && (s ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(w(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }
      , B = /^-ms-/
      , V = /-([a-z])/g;
    function Y(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(B, "ms-").replace(V, Y)
    }
    var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function U() {
        this.expando = w.expando + U.uid++
    }
    U.uid = 1,
    U.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[X(t)] = n;
            else
                for (i in t)
                    r[X(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in i ? [t] : t.match(j) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Q = new U
      , G = new U
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function J(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                G.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return G.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = G.get(o),
                1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = X(i.slice(5)),
                        J(o, i, r[i]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                G.set(this, e)
            }) : F(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = G.get(o, e)))
                        return n;
                    if (void 0 !== (n = J(o, e)))
                        return n
                } else
                    this.each(function() {
                        G.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = Q.get(e, t),
                n && (!i || Array.isArray(n) ? i = Q.access(e, t, w.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = w._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, function() {
                w.dequeue(e, t)
            }, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = w.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = Q.get(o[s], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , ie = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    }
      , re = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = n.apply(e, i || []),
        t)
            e.style[o] = s[o];
        return r
    };
    function oe(e, t, n, i) {
        var r, o, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (w.cssNumber[t] ? "" : "px"), u = (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2,
            c = c || u[3],
            u = +l || 1; s--; )
                w.style(e, t, u + c),
                (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                u /= o;
            u *= 2,
            w.style(e, t, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = r)),
        r
    }
    var se = {};
    function ae(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = se[i];
        return r || (t = n.body.appendChild(n.createElement(i)),
        r = w.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === r && (r = "block"),
        se[i] = r,
        r)
    }
    function le(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
            (i = e[o]).style && (n = i.style.display,
            t ? ("none" === n && (r[o] = Q.get(i, "display") || null,
            r[o] || (i.style.display = "")),
            "" === i.style.display && ie(i) && (r[o] = ae(i))) : "none" !== n && (r[o] = "none",
            Q.set(i, "display", n)));
        for (o = 0; o < s; o++)
            null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ie(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i
      , ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , de = /^$|^module$|\/(?:java|ecma)script/i
      , fe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function he(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && k(e, t) ? w.merge([e], n) : n
    }
    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    fe.optgroup = fe.option,
    fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead,
    fe.th = fe.td;
    var ge = /<|&#?\w+;/;
    function me(e, t, n, i, r) {
        for (var o, s, a, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o))
                    w.merge(f, o.nodeType ? [o] : o);
                else if (ge.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    a = (ue.exec(o) || ["", ""])[1].toLowerCase(),
                    l = fe[a] || fe._default,
                    s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2],
                    u = l[0]; u--; )
                        s = s.lastChild;
                    w.merge(f, s.childNodes),
                    (s = d.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(o));
        for (d.textContent = "",
        h = 0; o = f[h++]; )
            if (i && w.inArray(o, i) > -1)
                r && r.push(o);
            else if (c = w.contains(o.ownerDocument, o),
            s = he(d.appendChild(o), "script"),
            c && pe(s),
            n)
                for (u = 0; o = s[u++]; )
                    de.test(o.type || "") && n.push(o);
        return d
    }
    !function() {
        var e = i.createDocumentFragment().appendChild(i.createElement("div"))
          , t = i.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ve = i.documentElement
      , ye = /^key/
      , be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , we = /^([^.]*)(?:\.(.+)|)/;
    function _e() {
        return !0
    }
    function xe() {
        return !1
    }
    function Te() {
        try {
            return i.activeElement
        } catch (e) {}
    }
    function Se(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Se(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = xe;
        else if (!r)
            return e;
        return 1 === o && (s = r,
        (r = function(e) {
            return w().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = w.guid++)),
        e.each(function() {
            w.event.add(this, t, r, i, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, f, h, p, g, m = Q.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && w.find.matchesSelector(ve, r),
                n.guid || (n.guid = w.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) || (s = m.handle = function(t) {
                    return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(j) || [""]).length; c--; )
                    h = g = (a = we.exec(t[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    h && (d = w.event.special[h] || {},
                    h = (r ? d.delegateType : d.bindType) || h,
                    d = w.event.special[h] || {},
                    u = w.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && w.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o),
                    (f = l[h]) || ((f = l[h] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)),
                    d.add && (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                    w.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, f, h, p, g, m = Q.hasData(e) && Q.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(j) || [""]).length; c--; )
                    if (h = g = (a = we.exec(t[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    h) {
                        for (d = w.event.special[h] || {},
                        f = l[h = (i ? d.delegateType : d.bindType) || h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = f.length; o--; )
                            u = f[o],
                            !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1),
                            u.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || w.removeEvent(e, h, m.handle),
                        delete l[h])
                    } else
                        for (h in l)
                            w.event.remove(e, h + t[c], n, i, !0);
                w.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = w.event.fix(e), l = new Array(arguments.length), c = (Q.get(this, "events") || {})[a.type] || [], u = w.event.special[a.type] || {};
            for (l[0] = a,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (a.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = w.event.handlers.call(this, a, c),
                t = 0; (r = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? w(r, this).index(c) > -1 : w.find(r, this, null, [c]).length),
                            s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Te() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Te() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && k(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return k(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : xe,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = _e,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = _e,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _e,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = r.origType,
                n = r.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    w.fn.extend({
        on: function(e, t, n, i) {
            return Se(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Se(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = xe),
            this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ee = /<script|<style|<link/i
      , ke = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function De(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ie(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e),
            s = Q.set(t, o),
            c = o.events))
                for (r in delete s.handle,
                s.events = {},
                c)
                    for (n = 0,
                    i = c[r].length; n < i; n++)
                        w.event.add(t, r, c[r][n]);
            G.hasData(e) && (a = G.access(e),
            l = w.extend({}, a),
            G.set(t, l))
        }
    }
    function Ne(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Le(e, t, n, i) {
        t = s.apply([], t);
        var r, o, a, l, c, u, d = 0, f = e.length, h = f - 1, m = t[0], v = g(m);
        if (v || f > 1 && "string" == typeof m && !p.checkClone && ke.test(m))
            return e.each(function(r) {
                var o = e.eq(r);
                v && (t[0] = m.call(this, r, o.html())),
                Le(o, t, n, i)
            });
        if (f && (o = (r = me(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === r.childNodes.length && (r = o),
        o || i)) {
            for (l = (a = w.map(he(r, "script"), Pe)).length; d < f; d++)
                c = r,
                d !== h && (c = w.clone(c, !0, !0),
                l && w.merge(a, he(c, "script"))),
                n.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument,
                w.map(a, De),
                d = 0; d < l; d++)
                    c = a[d],
                    de.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Ae, ""), u, c))
        }
        return e
    }
    function je(e, t, n) {
        for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || w.cleanData(he(i)),
            i.parentNode && (n && w.contains(i.ownerDocument, i) && pe(he(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), l = w.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (s = he(a),
                i = 0,
                r = (o = he(e)).length; i < r; i++)
                    Ne(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || he(e),
                    s = s || he(a),
                    i = 0,
                    r = o.length; i < r; i++)
                        Ie(o[i], s[i]);
                else
                    Ie(e, a);
            return (s = he(a, "script")).length > 0 && pe(s, !l && he(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return je(this, e, !0)
        },
        remove: function(e) {
            return je(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(he(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !fe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(he(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Le(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(he(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, i = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0),
                w(r[s])[t](n),
                a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , He = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , $e = new RegExp(ne.join("|"),"i");
    function We(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || He(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)),
        !p.pixelBoxStyles() && Me.test(s) && $e.test(t) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function Re(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ve.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                u.style.right = "60%",
                a = 36 === n(t.right),
                o = 36 === n(t.width),
                u.style.position = "absolute",
                s = 36 === u.offsetWidth || "absolute",
                ve.removeChild(c),
                u = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, s, a, l, c = i.createElement("div"), u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        p.clearCloneStyle = "content-box" === u.style.backgroundClip,
        w.extend(p, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                s
            }
        }))
    }();
    var qe = /^(none|table(?!-c[ea]).+)/
      , Fe = /^--/
      , Be = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ye = ["Webkit", "Moz", "ms"]
      , Xe = i.createElement("div").style;
    function ze(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = function(e) {
            if (e in Xe)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; )
                if ((e = Ye[n] + t)in Xe)
                    return e
        }(e) || e),
        t
    }
    function Ue(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function Qe(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += w.css(e, n + ne[s], !0, r)),
            i ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, r)),
            "margin" !== n && (l -= w.css(e, "border" + ne[s] + "Width", !0, r))) : (l += w.css(e, "padding" + ne[s], !0, r),
            "padding" !== n ? l += w.css(e, "border" + ne[s] + "Width", !0, r) : a += w.css(e, "border" + ne[s] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))),
        l
    }
    function Ge(e, t, n) {
        var i = He(e)
          , r = We(e, t, i)
          , o = "border-box" === w.css(e, "boxSizing", !1, i)
          , s = o;
        if (Me.test(r)) {
            if (!n)
                return r;
            r = "auto"
        }
        return s = s && (p.boxSizingReliable() || r === e.style[t]),
        ("auto" === r || !parseFloat(r) && "inline" === w.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)],
        s = !0),
        (r = parseFloat(r) || 0) + Qe(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }
    function Ke(e, t, n, i, r) {
        return new Ke.prototype.init(e,t,n,i,r)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = X(t), l = Fe.test(t), c = e.style;
                if (l || (t = ze(a)),
                s = w.cssHooks[t] || w.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r),
                o = "number"),
                null != n && n == n && ("number" === o && (n += r && r[3] || (w.cssNumber[a] ? "" : "px")),
                p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = X(t);
            return Fe.test(t) || (t = ze(a)),
            (s = w.cssHooks[t] || w.cssHooks[a]) && "get"in s && (r = s.get(e, !0, n)),
            void 0 === r && (r = We(e, t, i)),
            "normal" === r && t in Ve && (r = Ve[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, i) : re(e, Be, function() {
                        return Ge(e, t, i)
                    })
            },
            set: function(e, n, i) {
                var r, o = He(e), s = "border-box" === w.css(e, "boxSizing", !1, o), a = i && Qe(e, t, i, s, o);
                return s && p.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qe(e, t, "border", !1, o) - .5)),
                a && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Ue(0, n, a)
            }
        }
    }),
    w.cssHooks.marginLeft = Re(p.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Ue)
    }),
    w.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = He(e),
                    r = t.length; s < r; s++)
                        o[t[s]] = w.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    w.Tween = Ke,
    Ke.prototype = {
        constructor: Ke,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || w.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
            this
        }
    },
    Ke.prototype.init.prototype = Ke.prototype,
    Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    Ke.propHooks.scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = Ke.prototype.init,
    w.fx.step = {};
    var Ze, Je, et = /^(?:toggle|show|hide)$/, tt = /queueHooks$/;
    function nt() {
        Je && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(nt) : e.setTimeout(nt, w.fx.interval),
        w.fx.tick())
    }
    function it() {
        return e.setTimeout(function() {
            Ze = void 0
        }),
        Ze = Date.now()
    }
    function rt(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function ot(e, t, n) {
        for (var i, r = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function st(e, t, n) {
        var i, r, o = 0, s = st.prefilters.length, a = w.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = Ze || it(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++)
                c.tweens[o].run(i);
            return a.notifyWith(e, [c, i, n]),
            i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]),
            a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ze || it(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n < i; n++)
                    c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (function(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (r = t[i = X(n)],
                o = e[n],
                Array.isArray(o) && (r = o[1],
                o = e[n] = o[0]),
                n !== i && (e[i] = o,
                delete e[n]),
                (s = w.cssHooks[i]) && "expand"in s)
                    for (n in o = s.expand(o),
                    delete e[i],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = r);
                else
                    t[i] = r
        }(u, c.opts.specialEasing); o < s; o++)
            if (i = st.prefilters[o].call(c, e, u, c.opts))
                return g(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                i;
        return w.map(u, ot, c),
        g(c.opts.start) && c.opts.start.call(e, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    w.Animation = w.extend(st, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            g(e) ? (t = e,
            e = ["*"]) : e = e.match(j);
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i],
                st.tweeners[n] = st.tweeners[n] || [],
                st.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, c, u, d = "width"in t || "height"in t, f = this, h = {}, p = e.style, g = e.nodeType && ie(e), m = Q.get(e, "fxshow");
            for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            f.always(function() {
                f.always(function() {
                    s.unqueued--,
                    w.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (r = t[i],
                et.test(r)) {
                    if (delete t[i],
                    o = o || "toggle" === r,
                    r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])
                            continue;
                        g = !0
                    }
                    h[i] = m && m[i] || w.style(e, i)
                }
            if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (c = m && m.display) && (c = Q.get(e, "display")),
                "none" === (u = w.css(e, "display")) && (c ? u = c : (le([e], !0),
                c = e.style.display || c,
                u = w.css(e, "display"),
                le([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (f.done(function() {
                    p.display = c
                }),
                null == c && (u = p.display,
                c = "none" === u ? "" : u)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                f.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1,
                h)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
                        display: c
                    }),
                    o && (m.hidden = !g),
                    g && le([e], !0),
                    f.done(function() {
                        for (i in g || le([e]),
                        Q.remove(e, "fxshow"),
                        h)
                            w.style(e, i, h[i])
                    })),
                    l = ot(g ? m[i] : 0, i, f),
                    i in m || (m[i] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e)
        }
    }),
    w.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            g(i.old) && i.old.call(this),
            i.queue && w.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    w.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ie).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = w.isEmptyObject(e)
              , o = w.speed(t, n, i)
              , s = function() {
                var t = st(this, w.extend({}, e), o);
                (r || Q.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = w.timers
                  , s = Q.get(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s)
                        s[r] && s[r].stop && tt.test(r) && i(s[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = Q.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = w.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                w.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < s; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, r)
        }
    }),
    w.each({
        slideDown: rt("show"),
        slideUp: rt("hide"),
        slideToggle: rt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    w.timers = [],
    w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (Ze = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(),
        Ze = void 0
    }
    ,
    w.fx.timer = function(e) {
        w.timers.push(e),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        Je || (Je = !0,
        nt())
    }
    ,
    w.fx.stop = function() {
        Je = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(t, n) {
        return t = w.fx && w.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e = i.createElement("input")
          , t = i.createElement("select").appendChild(i.createElement("option"));
        e.type = "checkbox",
        p.checkOn = "" !== e.value,
        p.optSelected = t.selected,
        (e = i.createElement("input")).value = "t",
        e.type = "radio",
        p.radioValue = "t" === e.value
    }();
    var at, lt = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return F(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? at : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(j);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    at = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = lt[t] || w.find.attr;
        lt[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = lt[s],
            lt[s] = r,
            r = null != n(e, t, i) ? s : null,
            lt[s] = o),
            r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i
      , ut = /^(?:a|area)$/i;
    function dt(e) {
        return (e.match(j) || []).join(" ")
    }
    function ft(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function ht(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return F(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t,
                r = w.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    p.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }),
    w.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, ft(this)))
                });
            if ((t = ht(e)).length)
                for (; n = this[l++]; )
                    if (r = ft(n),
                    i = 1 === n.nodeType && " " + dt(r) + " ") {
                        for (s = 0; o = t[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = dt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, ft(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = ht(e)).length)
                for (; n = this[l++]; )
                    if (r = ft(n),
                    i = 1 === n.nodeType && " " + dt(r) + " ") {
                        for (s = 0; o = t[s++]; )
                            for (; i.indexOf(" " + o + " ") > -1; )
                                i = i.replace(" " + o + " ", " ");
                        r !== (a = dt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, ft(this), t), t)
            }) : this.each(function() {
                var t, r, o, s;
                if (i)
                    for (r = 0,
                    o = w(this),
                    s = ht(e); t = s[r++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = ft(this)) && Q.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + dt(ft(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var pt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = g(e),
            this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, w(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(pt, "") : null == n ? "" : n : void 0
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : dt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = w.makeArray(t), s = r.length; s--; )
                        ((i = r[s]).selected = w.inArray(w.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = w.inArray(w(e).val(), t) > -1
            }
        },
        p.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    p.focusin = "onfocusin"in e;
    var gt = /^(?:focusinfocus|focusoutblur)$/
      , mt = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, r, o) {
            var s, a, l, c, u, f, h, p, v = [r || i], y = d.call(t, "type") ? t.type : t, b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = l = r = r || i,
            3 !== r.nodeType && 8 !== r.nodeType && !gt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(),
            b.sort()),
            u = y.indexOf(":") < 0 && "on" + y,
            (t = t[w.expando] ? t : new w.Event(y,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : w.makeArray(n, [t]),
            h = w.event.special[y] || {},
            o || !h.trigger || !1 !== h.trigger.apply(r, n))) {
                if (!o && !h.noBubble && !m(r)) {
                    for (c = h.delegateType || y,
                    gt.test(c + y) || (a = a.parentNode); a; a = a.parentNode)
                        v.push(a),
                        l = a;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
                    p = a,
                    t.type = s > 1 ? c : h.bindType || y,
                    (f = (Q.get(a, "events") || {})[t.type] && Q.get(a, "handle")) && f.apply(a, n),
                    (f = u && a[u]) && f.apply && z(a) && (t.result = f.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = y,
                o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !z(r) || u && g(r[y]) && !m(r) && ((l = r[u]) && (r[u] = null),
                w.event.triggered = y,
                t.isPropagationStopped() && p.addEventListener(y, mt),
                r[y](),
                t.isPropagationStopped() && p.removeEventListener(y, mt),
                w.event.triggered = void 0,
                l && (r[u] = l)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(i, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    p.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = Q.access(i, t);
                r || i.addEventListener(e, n, !0),
                Q.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = Q.access(i, t) - 1;
                r ? Q.access(i, t, r) : (i.removeEventListener(e, n, !0),
                Q.remove(i, t))
            }
        }
    });
    var vt = e.location
      , yt = Date.now()
      , bt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t),
        n
    }
    ;
    var wt = /\[\]$/
      , _t = /\r?\n/g
      , xt = /^(?:submit|button|image|reset|file)$/i
      , Tt = /^(?:input|select|textarea|keygen)/i;
    function St(e, t, n, i) {
        var r;
        if (Array.isArray(t))
            w.each(t, function(t, r) {
                n || wt.test(e) ? i(e, r) : St(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== b(t))
            i(e, t);
        else
            for (r in t)
                St(e + "[" + r + "]", t[r], n, i)
    }
    w.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = g(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                St(n, e[n], t, r);
        return i.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && Tt.test(this.nodeName) && !xt.test(e) && (this.checked || !ce.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(_t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(_t, "\r\n")
                }
            }).get()
        }
    });
    var Ct = /%20/g
      , Et = /#.*$/
      , kt = /([?&])_=[^&]*/
      , At = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Dt = {}
      , It = {}
      , Nt = "*/".concat("*")
      , Lt = i.createElement("a");
    function jt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(j) || [];
            if (g(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function Mt(e, t, n, i) {
        var r = {}
          , o = e === It;
        function s(a) {
            var l;
            return r[a] = !0,
            w.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                s(c),
                !1)
            }),
            l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }
    function Ht(e, t) {
        var n, i, r = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i),
        e
    }
    Lt.href = vt.href,
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Nt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ht(Ht(e, w.ajaxSettings), t) : Ht(w.ajaxSettings, e)
        },
        ajaxPrefilter: jt(Dt),
        ajaxTransport: jt(It),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, o, s, a, l, c, u, d, f, h, p = w.ajaxSetup({}, n), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), y = w.Callbacks("once memory"), b = p.statusCode || {}, _ = {}, x = {}, T = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!a)
                            for (a = {}; t = At.exec(s); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return u ? s : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                    _[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            S.always(e[S.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return r && r.abort(t),
                    C(0, t),
                    this
                }
            };
            if (v.promise(S),
            p.url = ((t || p.url || vt.href) + "").replace(Pt, vt.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""],
            null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url,
                    c.href = c.href,
                    p.crossDomain = Lt.protocol + "//" + Lt.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)),
            Mt(Dt, p, n, S),
            u)
                return S;
            for (f in (d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Ot.test(p.type),
            o = p.url.replace(Et, ""),
            p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ct, "+")) : (h = p.url.slice(o.length),
            p.data && (p.processData || "string" == typeof p.data) && (o += (bt.test(o) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (o = o.replace(kt, "$1"),
            h = (bt.test(o) ? "&" : "?") + "_=" + yt++ + h),
            p.url = o + h),
            p.ifModified && (w.lastModified[o] && S.setRequestHeader("If-Modified-Since", w.lastModified[o]),
            w.etag[o] && S.setRequestHeader("If-None-Match", w.etag[o])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType),
            S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                S.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || u))
                return S.abort();
            if (T = "abort",
            y.add(p.complete),
            S.done(p.success),
            S.fail(p.error),
            r = Mt(It, p, n, S)) {
                if (S.readyState = 1,
                d && m.trigger("ajaxSend", [S, p]),
                u)
                    return S;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    S.abort("timeout")
                }, p.timeout));
                try {
                    u = !1,
                    r.send(_, C)
                } catch (e) {
                    if (u)
                        throw e;
                    C(-1, e)
                }
            } else
                C(-1, "No Transport");
            function C(t, n, i, a) {
                var c, f, h, _, x, T = n;
                u || (u = !0,
                l && e.clearTimeout(l),
                r = void 0,
                s = a || "",
                S.readyState = t > 0 ? 4 : 0,
                c = t >= 200 && t < 300 || 304 === t,
                i && (_ = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(p, S, i)),
                _ = function(e, t, n, i) {
                    var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = u.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = c[l + " " + o] || c["* " + o]))
                                    for (r in c)
                                        if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0],
                                            u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, _, S, c),
                c ? (p.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (w.lastModified[o] = x),
                (x = S.getResponseHeader("etag")) && (w.etag[o] = x)),
                204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = _.state,
                f = _.data,
                c = !(h = _.error))) : (h = T,
                !t && T || (T = "error",
                t < 0 && (t = 0))),
                S.status = t,
                S.statusText = (n || T) + "",
                c ? v.resolveWith(g, [f, T, S]) : v.rejectWith(g, [S, T, h]),
                S.statusCode(b),
                b = void 0,
                d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, p, c ? f : h]),
                y.fireWith(g, [S, T]),
                d && (m.trigger("ajaxComplete", [S, p]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }),
    w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, i, r) {
            return g(n) && (r = r || i,
            i = n,
            n = void 0),
            w.ajax(w.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    }),
    w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var $t = {
        0: 200,
        1223: 204
    }
      , Wt = w.ajaxSettings.xhr();
    p.cors = !!Wt && "withCredentials"in Wt,
    p.ajax = Wt = !!Wt,
    w.ajaxTransport(function(t) {
        var n, i;
        if (p.cors || Wt && !t.crossDomain)
            return {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                    r)
                        a.setRequestHeader(s, r[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o($t[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = a.ontimeout = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e),
                e
            }
        }
    }),
    w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    w.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain)
            return {
                send: function(r, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    i.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var Rt = []
      , qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rt.pop() || w.expando + "_" + yt++;
            return this[e] = !0,
            e
        }
    }),
    w.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(qt, "$1" + r) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return s || w.error(r + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[r],
            e[r] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                void 0 === o ? w(e).removeProp(r) : e[r] = o,
                t[r] && (t.jsonpCallback = n.jsonpCallback,
                Rt.push(r)),
                s && g(o) && o(s[0]),
                s = o = void 0
            }),
            "script"
    }),
    p.createHTMLDocument = function() {
        var e = i.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href,
        t.head.appendChild(r)) : t = i),
        o = A.exec(e),
        s = !n && [],
        o ? [t.createElement(o[1])] : (o = me([e], t, s),
        s && s.length && w(s).remove(),
        w.merge([], o.childNodes)));
        var r, o, s
    }
    ,
    w.fn.load = function(e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = dt(e.slice(a)),
        e = e.slice(0, a)),
        g(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        s.length > 0 && w.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = w.css(e, "position"), u = w(e), d = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            o = w.css(e, "top"),
            l = w.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            g(t) && (t = t.call(e, n, w.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, d) : u.css(d)
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    r.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - w.css(i, "marginTop", !0),
                    left: t.left - r.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position"); )
                    e = e.offsetParent;
                return e || ve
            })
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(i) {
            return F(this, function(e, i, r) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
                    return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }),
    w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = Re(p.pixelPosition, function(e, n) {
            if (n)
                return n = We(e, t),
                Me.test(n) ? w(e).position()[t] + "px" : n
        })
    }),
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            w.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (!0 === r || !0 === o ? "margin" : "border");
                return F(this, function(t, n, r) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? w.css(t, n, a) : w.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    w.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return i = o.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }
            ).guid = e.guid = e.guid || w.guid++,
            r
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = k,
    w.isFunction = g,
    w.isWindow = m,
    w.camelCase = X,
    w.type = b,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Ft = e.jQuery
      , Bt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Bt),
        t && e.jQuery === w && (e.jQuery = Ft),
        w
    }
    ,
    t || (e.jQuery = e.$ = w),
    w
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function i(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var r = t(e)
          , o = r.overflow
          , s = r.overflowX
          , a = r.overflowY;
        return /(auto|scroll|overlay)/.test(o + a + s) ? e : i(n(e))
    }
    function r(e) {
        return 11 === e ? X : 10 === e ? z : X || z
    }
    function o(e) {
        if (!e)
            return document.documentElement;
        for (var n = r(10) ? document.body : null, i = e.offsetParent; i === n && e.nextElementSibling; )
            i = (e = e.nextElementSibling).offsetParent;
        var s = i && i.nodeName;
        return s && "BODY" !== s && "HTML" !== s ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? o(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }
    function a(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , r = n ? t : e
          , l = document.createRange();
        l.setStart(i, 0),
        l.setEnd(r, 0);
        var c = l.commonAncestorContainer;
        if (e !== c && t !== c || i.contains(r))
            return function(e) {
                var t = e.nodeName;
                return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
            }(c) ? c : o(c);
        var u = s(e);
        return u.host ? a(u.host, t) : a(e, s(t).host)
    }
    function l(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }
    function c(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , i = l(t, "top")
          , r = l(t, "left")
          , o = n ? -1 : 1;
        return e.top += i * o,
        e.bottom += i * o,
        e.left += r * o,
        e.right += r * o,
        e
    }
    function u(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }
    function d(e, t, n, i) {
        return R(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], r(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function f(e) {
        var t = e.body
          , n = e.documentElement
          , i = r(10) && getComputedStyle(n);
        return {
            height: d("Height", t, n, i),
            width: d("Width", t, n, i)
        }
    }
    function h(e) {
        return K({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function p(e) {
        var n = {};
        try {
            if (r(10)) {
                n = e.getBoundingClientRect();
                var i = l(e, "top")
                  , o = l(e, "left");
                n.top += i,
                n.left += o,
                n.bottom += i,
                n.right += o
            } else
                n = e.getBoundingClientRect()
        } catch (e) {}
        var s = {
            left: n.left,
            top: n.top,
            width: n.right - n.left,
            height: n.bottom - n.top
        }
          , a = "HTML" === e.nodeName ? f(e.ownerDocument) : {}
          , c = a.width || e.clientWidth || s.right - s.left
          , d = a.height || e.clientHeight || s.bottom - s.top
          , p = e.offsetWidth - c
          , g = e.offsetHeight - d;
        if (p || g) {
            var m = t(e);
            p -= u(m, "x"),
            g -= u(m, "y"),
            s.width -= p,
            s.height -= g
        }
        return h(s)
    }
    function g(e, n) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , s = r(10)
          , a = "HTML" === n.nodeName
          , l = p(e)
          , u = p(n)
          , d = i(e)
          , f = t(n)
          , g = parseFloat(f.borderTopWidth, 10)
          , m = parseFloat(f.borderLeftWidth, 10);
        o && a && (u.top = R(u.top, 0),
        u.left = R(u.left, 0));
        var v = h({
            top: l.top - u.top - g,
            left: l.left - u.left - m,
            width: l.width,
            height: l.height
        });
        if (v.marginTop = 0,
        v.marginLeft = 0,
        !s && a) {
            var y = parseFloat(f.marginTop, 10)
              , b = parseFloat(f.marginLeft, 10);
            v.top -= g - y,
            v.bottom -= g - y,
            v.left -= m - b,
            v.right -= m - b,
            v.marginTop = y,
            v.marginLeft = b
        }
        return (s && !o ? n.contains(d) : n === d && "BODY" !== d.nodeName) && (v = c(v, n)),
        v
    }
    function m(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = e.ownerDocument.documentElement
          , i = g(e, n)
          , r = R(n.clientWidth, window.innerWidth || 0)
          , o = R(n.clientHeight, window.innerHeight || 0)
          , s = t ? 0 : l(n)
          , a = t ? 0 : l(n, "left");
        return h({
            top: s - i.top + i.marginTop,
            left: a - i.left + i.marginLeft,
            width: r,
            height: o
        })
    }
    function v(e) {
        var i = e.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || v(n(e)))
    }
    function y(e) {
        if (!e || !e.parentElement || r())
            return document.documentElement;
        for (var n = e.parentElement; n && "none" === t(n, "transform"); )
            n = n.parentElement;
        return n || document.documentElement
    }
    function b(e, t, r, o) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , l = {
            top: 0,
            left: 0
        }
          , c = s ? y(e) : a(e, t);
        if ("viewport" === o)
            l = m(c, s);
        else {
            var u;
            "scrollParent" === o ? "BODY" === (u = i(n(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === o ? e.ownerDocument.documentElement : o;
            var d = g(u, c, s);
            if ("HTML" !== u.nodeName || v(c))
                l = d;
            else {
                var h = f(e.ownerDocument)
                  , p = h.height
                  , b = h.width;
                l.top += d.top - d.marginTop,
                l.bottom = p + d.top,
                l.left += d.left - d.marginLeft,
                l.right = b + d.left
            }
        }
        var w = "number" == typeof (r = r || 0);
        return l.left += w ? r : r.left || 0,
        l.top += w ? r : r.top || 0,
        l.right -= w ? r : r.right || 0,
        l.bottom -= w ? r : r.bottom || 0,
        l
    }
    function w(e, t, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var s = b(n, i, o, r)
          , a = {
            top: {
                width: s.width,
                height: t.top - s.top
            },
            right: {
                width: s.right - t.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - t.bottom
            },
            left: {
                width: t.left - s.left,
                height: s.height
            }
        }
          , l = Object.keys(a).map(function(e) {
            return K({
                key: e
            }, a[e], {
                area: function(e) {
                    return e.width * e.height
                }(a[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , c = l.filter(function(e) {
            var t = e.width
              , i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        })
          , u = 0 < c.length ? c[0].key : l[0].key
          , d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }
    function _(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return g(n, i ? y(t) : a(t, n), i)
    }
    function x(e) {
        var t = getComputedStyle(e)
          , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function T(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function S(e, t, n) {
        n = n.split("-")[0];
        var i = x(e)
          , r = {
            width: i.width,
            height: i.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , s = o ? "top" : "left"
          , a = o ? "left" : "top"
          , l = o ? "height" : "width"
          , c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2,
        r[a] = n === a ? t[a] - i[c] : t[T(a)],
        r
    }
    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function E(t, n, i) {
        return (void 0 === i ? t : t.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var i = C(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(t, "name", i))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = h(n.offsets.popper),
            n.offsets.reference = h(n.offsets.reference),
            n = i(n, t))
        }),
        n
    }
    function k(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }
    function A(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i]
              , o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o])
                return o
        }
        return null
    }
    function O(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function P(e, t, n, r) {
        n.updateBound = r,
        O(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = i(e);
        return function e(t, n, r, o) {
            var s = "BODY" === t.nodeName
              , a = s ? t.ownerDocument.defaultView : t;
            a.addEventListener(n, r, {
                passive: !0
            }),
            s || e(i(a.parentNode), n, r, o),
            o.push(a)
        }(o, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n
    }
    function D() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (e = this.reference,
        t = this.state,
        O(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t))
    }
    function I(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function N(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && I(t[n]) && (i = "px"),
            e.style[n] = t[n] + i
        })
    }
    function L(e, t, n) {
        var i = C(e, function(e) {
            return e.name === t
        })
          , r = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    function j(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = J.indexOf(e)
          , i = J.slice(n + 1).concat(J.slice(0, n));
        return t ? i.reverse() : i
    }
    function M(e, t, n, i) {
        var r = [0, 0]
          , o = -1 !== ["right", "left"].indexOf(i)
          , s = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , a = s.indexOf(C(s, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , c = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
        return (c = c.map(function(e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width"
              , s = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                s = !0,
                e) : s ? (e[e.length - 1] += t,
                s = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , o = +r[1]
                      , s = r[2];
                    if (!o)
                        return e;
                    if (0 === s.indexOf("%")) {
                        var a;
                        switch (s) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                        }
                        return h(a)[t] / 100 * o
                    }
                    return "vh" === s || "vw" === s ? ("vh" === s ? R(document.documentElement.clientHeight, window.innerHeight || 0) : R(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                }(e, r, t, n)
            })
        })).forEach(function(e, t) {
            e.forEach(function(n, i) {
                I(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }),
        r
    }
    for (var H = Math.min, $ = Math.round, W = Math.floor, R = Math.max, q = "undefined" != typeof window && "undefined" != typeof document, F = ["Edge", "Trident", "Firefox"], B = 0, V = 0; V < F.length; V += 1)
        if (q && 0 <= navigator.userAgent.indexOf(F[V])) {
            B = 1;
            break
        }
    var Y = q && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, B))
        }
    }
      , X = q && !(!window.MSInputMethodContext || !document.documentMode)
      , z = q && /MSIE 10/.test(navigator.userAgent)
      , U = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , Q = function() {
        function e(e, t) {
            for (var n, i = 0; i < t.length; i++)
                (n = t[i]).enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , G = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , K = Object.assign || function(e) {
        for (var t, n = 1; n < arguments.length; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }
      , Z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , J = Z.slice(3)
      , ee = "flip"
      , te = "clockwise"
      , ne = "counterclockwise"
      , ie = function() {
        function t(n, i) {
            var r = this
              , o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            U(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(r.update)
            }
            ,
            this.update = Y(this.update.bind(this)),
            this.options = K({}, t.Defaults, o),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = n && n.jquery ? n[0] : n,
            this.popper = i && i.jquery ? i[0] : i,
            this.options.modifiers = {},
            Object.keys(K({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                r.options.modifiers[e] = K({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return K({
                    name: e
                }, r.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
            }),
            this.update();
            var s = this.options.eventsEnabled;
            s && this.enableEventListeners(),
            this.state.eventsEnabled = s
        }
        return Q(t, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = _(this.state, this.popper, this.reference, this.options.positionFixed),
                        e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                        e.originalPlacement = e.placement,
                        e.positionFixed = this.options.positionFixed,
                        e.offsets.popper = S(this.popper, e.offsets.reference, e.placement),
                        e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                        e = E(this.modifiers, e),
                        this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                        this.options.onCreate(e))
                    }
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    k(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style.left = "",
                    this.popper.style.right = "",
                    this.popper.style.bottom = "",
                    this.popper.style.willChange = "",
                    this.popper.style[A("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return D.call(this)
            }
        }]),
        t
    }();
    return ie.Utils = ("undefined" == typeof window ? global : window).PopperUtils,
    ie.placements = Z,
    ie.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets
                          , o = r.reference
                          , s = r.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , c = a ? "width" : "height"
                          , u = {
                            start: G({}, l, o[l]),
                            end: G({}, l, o[l] + o[c] - s[c])
                        };
                        e.offsets.popper = K({}, s, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset, r = e.placement, o = e.offsets, s = o.popper, a = o.reference, l = r.split("-")[0];
                    return n = I(+i) ? [+i, 0] : M(i, s, a, l),
                    "left" === l ? (s.top += n[0],
                    s.left -= n[1]) : "right" === l ? (s.top += n[0],
                    s.left += n[1]) : "top" === l ? (s.left += n[0],
                    s.top -= n[1]) : "bottom" === l && (s.left += n[0],
                    s.top += n[1]),
                    e.popper = s,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || o(e.instance.popper);
                    e.instance.reference === n && (n = o(n));
                    var i = A("transform")
                      , r = e.instance.popper.style
                      , s = r.top
                      , a = r.left
                      , l = r[i];
                    r.top = "",
                    r.left = "",
                    r[i] = "";
                    var c = b(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    r.top = s,
                    r.left = a,
                    r[i] = l,
                    t.boundaries = c;
                    var u = t.priority
                      , d = e.offsets.popper
                      , f = {
                        primary: function(e) {
                            var n = d[e];
                            return d[e] < c[e] && !t.escapeWithReference && (n = R(d[e], c[e])),
                            G({}, e, n)
                        },
                        secondary: function(e) {
                            var n = "right" === e ? "left" : "top"
                              , i = d[n];
                            return d[e] > c[e] && !t.escapeWithReference && (i = H(d[n], c[e] - ("right" === e ? d.width : d.height))),
                            G({}, n, i)
                        }
                    };
                    return u.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        d = K({}, d, f[t](e))
                    }),
                    e.offsets.popper = d,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , r = e.placement.split("-")[0]
                      , o = W
                      , s = -1 !== ["top", "bottom"].indexOf(r)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]),
                    n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    var i;
                    if (!L(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var r = n.element;
                    if ("string" == typeof r) {
                        if (!(r = e.instance.popper.querySelector(r)))
                            return e
                    } else if (!e.instance.popper.contains(r))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var o = e.placement.split("-")[0]
                      , s = e.offsets
                      , a = s.popper
                      , l = s.reference
                      , c = -1 !== ["left", "right"].indexOf(o)
                      , u = c ? "height" : "width"
                      , d = c ? "Top" : "Left"
                      , f = d.toLowerCase()
                      , p = c ? "left" : "top"
                      , g = c ? "bottom" : "right"
                      , m = x(r)[u];
                    l[g] - m < a[f] && (e.offsets.popper[f] -= a[f] - (l[g] - m)),
                    l[f] + m > a[g] && (e.offsets.popper[f] += l[f] + m - a[g]),
                    e.offsets.popper = h(e.offsets.popper);
                    var v = l[f] + l[u] / 2 - m / 2
                      , y = t(e.instance.popper)
                      , b = parseFloat(y["margin" + d], 10)
                      , w = parseFloat(y["border" + d + "Width"], 10)
                      , _ = v - e.offsets.popper[f] - b - w;
                    return _ = R(H(a[u] - m, _), 0),
                    e.arrowElement = r,
                    e.offsets.arrow = (G(i = {}, f, $(_)),
                    G(i, p, ""),
                    i),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (k(e.instance.modifiers, "inner"))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var n = b(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , i = e.placement.split("-")[0]
                      , r = T(i)
                      , o = e.placement.split("-")[1] || ""
                      , s = [];
                    switch (t.behavior) {
                    case ee:
                        s = [i, r];
                        break;
                    case te:
                        s = j(i);
                        break;
                    case ne:
                        s = j(i, !0);
                        break;
                    default:
                        s = t.behavior
                    }
                    return s.forEach(function(a, l) {
                        if (i !== a || s.length === l + 1)
                            return e;
                        i = e.placement.split("-")[0],
                        r = T(i);
                        var c = e.offsets.popper
                          , u = e.offsets.reference
                          , d = W
                          , f = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom)
                          , h = d(c.left) < d(n.left)
                          , p = d(c.right) > d(n.right)
                          , g = d(c.top) < d(n.top)
                          , m = d(c.bottom) > d(n.bottom)
                          , v = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && m
                          , y = -1 !== ["top", "bottom"].indexOf(i)
                          , b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                        (f || v || b) && (e.flipped = !0,
                        (f || v) && (i = s[l + 1]),
                        b && (o = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(o)),
                        e.placement = i + (o ? "-" + o : ""),
                        e.offsets.popper = K({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)),
                        e = E(e.instance.modifiers, e, "flip"))
                    }),
                    e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , r = i.popper
                      , o = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0),
                    e.placement = T(t),
                    e.offsets.popper = h(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!L(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = C(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , r = e.offsets.popper
                      , s = C(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, c = void 0 === s ? t.gpuAcceleration : s, u = o(e.instance.popper), d = p(u), f = {
                        position: r.position
                    }, h = {
                        left: W(r.left),
                        top: $(r.top),
                        bottom: $(r.bottom),
                        right: W(r.right)
                    }, g = "bottom" === n ? "top" : "bottom", m = "right" === i ? "left" : "right", v = A("transform");
                    if (l = "bottom" == g ? "HTML" === u.nodeName ? -u.clientHeight + h.bottom : -d.height + h.bottom : h.top,
                    a = "right" == m ? "HTML" === u.nodeName ? -u.clientWidth + h.right : -d.width + h.right : h.left,
                    c && v)
                        f[v] = "translate3d(" + a + "px, " + l + "px, 0)",
                        f[g] = 0,
                        f[m] = 0,
                        f.willChange = "transform";
                    else {
                        var y = "bottom" == g ? -1 : 1
                          , b = "right" == m ? -1 : 1;
                        f[g] = l * y,
                        f[m] = a * b,
                        f.willChange = g + ", " + m
                    }
                    var w = {
                        "x-placement": e.placement
                    };
                    return e.attributes = K({}, w, e.attributes),
                    e.styles = K({}, f, e.styles),
                    e.arrowStyles = K({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return N(e.instance.popper, e.styles),
                    function(e, t) {
                        Object.keys(t).forEach(function(n) {
                            !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                        })
                    }(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && N(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = _(r, t, e, n.positionFixed)
                      , s = w(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s),
                    N(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    },
    ie
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function r(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(t) {
                o(e, t, n[t])
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t,
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var a = function(e) {
        var t = "transitionend";
        function n(t) {
            var n = this
              , r = !1;
            return e(this).one(i.TRANSITION_END, function() {
                r = !0
            }),
            setTimeout(function() {
                r || i.triggerTransitionEnd(n)
            }, t),
            this
        }
        var i = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                t && "#" !== t || (t = e.getAttribute("href") || "");
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(t) {
                if (!t)
                    return 0;
                var n = e(t).css("transition-duration");
                return parseFloat(n) ? (n = n.split(",")[0],
                1e3 * parseFloat(n)) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(n) {
                e(n).trigger(t)
            },
            supportsTransitionEnd: function() {
                return Boolean(t)
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, n) {
                for (var r in n)
                    if (Object.prototype.hasOwnProperty.call(n, r)) {
                        var o = n[r]
                          , s = t[r]
                          , a = s && i.isElement(s) ? "element" : (l = s,
                        {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(o).test(a))
                            throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                    }
                var l
            }
        };
        return e.fn.emulateTransitionEnd = n,
        e.event.special[i.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function(t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        },
        i
    }(t)
      , l = function(e) {
        var t = e.fn.alert
          , n = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
        }
          , i = "alert"
          , o = "fade"
          , s = "show"
          , l = function() {
            function t(e) {
                this._element = e
            }
            var l = t.prototype;
            return l.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)),
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }
            ,
            l.dispose = function() {
                e.removeData(this._element, "bs.alert"),
                this._element = null
            }
            ,
            l._getRootElement = function(t) {
                var n = a.getSelectorFromElement(t)
                  , r = !1;
                return n && (r = document.querySelector(n)),
                r || (r = e(t).closest("." + i)[0]),
                r
            }
            ,
            l._triggerCloseEvent = function(t) {
                var i = e.Event(n.CLOSE);
                return e(t).trigger(i),
                i
            }
            ,
            l._removeElement = function(t) {
                var n = this;
                if (e(t).removeClass(s),
                e(t).hasClass(o)) {
                    var i = a.getTransitionDurationFromElement(t);
                    e(t).one(a.TRANSITION_END, function(e) {
                        return n._destroyElement(t, e)
                    }).emulateTransitionEnd(i)
                } else
                    this._destroyElement(t)
            }
            ,
            l._destroyElement = function(t) {
                e(t).detach().trigger(n.CLOSED).remove()
            }
            ,
            t._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = e(this)
                      , r = i.data("bs.alert");
                    r || (r = new t(this),
                    i.data("bs.alert", r)),
                    "close" === n && r[n](this)
                })
            }
            ,
            t._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(),
                    e.close(this)
                }
            }
            ,
            r(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]),
            t
        }();
        return e(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l)),
        e.fn.alert = l._jQueryInterface,
        e.fn.alert.Constructor = l,
        e.fn.alert.noConflict = function() {
            return e.fn.alert = t,
            l._jQueryInterface
        }
        ,
        l
    }(t)
      , c = function(e) {
        var t = "button"
          , n = e.fn[t]
          , i = "active"
          , o = "btn"
          , s = "focus"
          , a = '[data-toggle^="button"]'
          , l = '[data-toggle="buttons"]'
          , c = "input"
          , u = ".active"
          , d = ".btn"
          , f = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        }
          , h = function() {
            function t(e) {
                this._element = e
            }
            var n = t.prototype;
            return n.toggle = function() {
                var t = !0
                  , n = !0
                  , r = e(this._element).closest(l)[0];
                if (r) {
                    var o = this._element.querySelector(c);
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && this._element.classList.contains(i))
                                t = !1;
                            else {
                                var s = r.querySelector(u);
                                s && e(s).removeClass(i)
                            }
                        if (t) {
                            if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled"))
                                return;
                            o.checked = !this._element.classList.contains(i),
                            e(o).trigger("change")
                        }
                        o.focus(),
                        n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(i)),
                t && e(this._element).toggleClass(i)
            }
            ,
            n.dispose = function() {
                e.removeData(this._element, "bs.button"),
                this._element = null
            }
            ,
            t._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = e(this).data("bs.button");
                    i || (i = new t(this),
                    e(this).data("bs.button", i)),
                    "toggle" === n && i[n]()
                })
            }
            ,
            r(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]),
            t
        }();
        return e(document).on(f.CLICK_DATA_API, a, function(t) {
            t.preventDefault();
            var n = t.target;
            e(n).hasClass(o) || (n = e(n).closest(d)),
            h._jQueryInterface.call(e(n), "toggle")
        }).on(f.FOCUS_BLUR_DATA_API, a, function(t) {
            var n = e(t.target).closest(d)[0];
            e(n).toggleClass(s, /^focus(in)?$/.test(t.type))
        }),
        e.fn[t] = h._jQueryInterface,
        e.fn[t].Constructor = h,
        e.fn[t].noConflict = function() {
            return e.fn[t] = n,
            h._jQueryInterface
        }
        ,
        h
    }(t)
      , u = function(e) {
        var t = "carousel"
          , n = "bs.carousel"
          , i = "." + n
          , o = e.fn[t]
          , l = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }
          , c = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }
          , u = "next"
          , d = "prev"
          , f = "left"
          , h = "right"
          , p = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
        }
          , g = "carousel"
          , m = "active"
          , v = "slide"
          , y = "carousel-item-right"
          , b = "carousel-item-left"
          , w = "carousel-item-next"
          , _ = "carousel-item-prev"
          , x = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }
          , T = function() {
            function o(t, n) {
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this.touchTimeout = null,
                this._config = this._getConfig(n),
                this._element = e(t)[0],
                this._indicatorsElement = this._element.querySelector(x.INDICATORS),
                this._addEventListeners()
            }
            var T = o.prototype;
            return T.next = function() {
                this._isSliding || this._slide(u)
            }
            ,
            T.nextWhenVisible = function() {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
            }
            ,
            T.prev = function() {
                this._isSliding || this._slide(d)
            }
            ,
            T.pause = function(e) {
                e || (this._isPaused = !0),
                this._element.querySelector(x.NEXT_PREV) && (a.triggerTransitionEnd(this._element),
                this.cycle(!0)),
                clearInterval(this._interval),
                this._interval = null
            }
            ,
            T.cycle = function(e) {
                e || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval),
                this._interval = null),
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }
            ,
            T.to = function(t) {
                var n = this;
                this._activeElement = this._element.querySelector(x.ACTIVE_ITEM);
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding)
                        e(this._element).one(p.SLID, function() {
                            return n.to(t)
                        });
                    else {
                        if (i === t)
                            return this.pause(),
                            void this.cycle();
                        var r = t > i ? u : d;
                        this._slide(r, this._items[t])
                    }
            }
            ,
            T.dispose = function() {
                e(this._element).off(i),
                e.removeData(this._element, n),
                this._items = null,
                this._config = null,
                this._element = null,
                this._interval = null,
                this._isPaused = null,
                this._isSliding = null,
                this._activeElement = null,
                this._indicatorsElement = null
            }
            ,
            T._getConfig = function(e) {
                return e = s({}, l, e),
                a.typeCheckConfig(t, e, c),
                e
            }
            ,
            T._addEventListeners = function() {
                var t = this;
                this._config.keyboard && e(this._element).on(p.KEYDOWN, function(e) {
                    return t._keydown(e)
                }),
                "hover" === this._config.pause && (e(this._element).on(p.MOUSEENTER, function(e) {
                    return t.pause(e)
                }).on(p.MOUSELEAVE, function(e) {
                    return t.cycle(e)
                }),
                "ontouchstart"in document.documentElement && e(this._element).on(p.TOUCHEND, function() {
                    t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    t.touchTimeout = setTimeout(function(e) {
                        return t.cycle(e)
                    }, 500 + t._config.interval)
                }))
            }
            ,
            T._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName))
                    switch (e.which) {
                    case 37:
                        e.preventDefault(),
                        this.prev();
                        break;
                    case 39:
                        e.preventDefault(),
                        this.next()
                    }
            }
            ,
            T._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(x.ITEM)) : [],
                this._items.indexOf(e)
            }
            ,
            T._getItemByDirection = function(e, t) {
                var n = e === u
                  , i = e === d
                  , r = this._getItemIndex(t)
                  , o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap)
                    return t;
                var s = (r + (e === d ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }
            ,
            T._triggerSlideEvent = function(t, n) {
                var i = this._getItemIndex(t)
                  , r = this._getItemIndex(this._element.querySelector(x.ACTIVE_ITEM))
                  , o = e.Event(p.SLIDE, {
                    relatedTarget: t,
                    direction: n,
                    from: r,
                    to: i
                });
                return e(this._element).trigger(o),
                o
            }
            ,
            T._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(x.ACTIVE));
                    e(n).removeClass(m);
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && e(i).addClass(m)
                }
            }
            ,
            T._slide = function(t, n) {
                var i, r, o, s = this, l = this._element.querySelector(x.ACTIVE_ITEM), c = this._getItemIndex(l), d = n || l && this._getItemByDirection(t, l), g = this._getItemIndex(d), T = Boolean(this._interval);
                if (t === u ? (i = b,
                r = w,
                o = f) : (i = y,
                r = _,
                o = h),
                d && e(d).hasClass(m))
                    this._isSliding = !1;
                else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && l && d) {
                    this._isSliding = !0,
                    T && this.pause(),
                    this._setActiveIndicatorElement(d);
                    var S = e.Event(p.SLID, {
                        relatedTarget: d,
                        direction: o,
                        from: c,
                        to: g
                    });
                    if (e(this._element).hasClass(v)) {
                        e(d).addClass(r),
                        a.reflow(d),
                        e(l).addClass(i),
                        e(d).addClass(i);
                        var C = a.getTransitionDurationFromElement(l);
                        e(l).one(a.TRANSITION_END, function() {
                            e(d).removeClass(i + " " + r).addClass(m),
                            e(l).removeClass(m + " " + r + " " + i),
                            s._isSliding = !1,
                            setTimeout(function() {
                                return e(s._element).trigger(S)
                            }, 0)
                        }).emulateTransitionEnd(C)
                    } else
                        e(l).removeClass(m),
                        e(d).addClass(m),
                        this._isSliding = !1,
                        e(this._element).trigger(S);
                    T && this.cycle()
                }
            }
            ,
            o._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = e(this).data(n)
                      , r = s({}, l, e(this).data());
                    "object" == typeof t && (r = s({}, r, t));
                    var a = "string" == typeof t ? t : r.slide;
                    if (i || (i = new o(this,r),
                    e(this).data(n, i)),
                    "number" == typeof t)
                        i.to(t);
                    else if ("string" == typeof a) {
                        if (void 0 === i[a])
                            throw new TypeError('No method named "' + a + '"');
                        i[a]()
                    } else
                        r.interval && (i.pause(),
                        i.cycle())
                })
            }
            ,
            o._dataApiClickHandler = function(t) {
                var i = a.getSelectorFromElement(this);
                if (i) {
                    var r = e(i)[0];
                    if (r && e(r).hasClass(g)) {
                        var l = s({}, e(r).data(), e(this).data())
                          , c = this.getAttribute("data-slide-to");
                        c && (l.interval = !1),
                        o._jQueryInterface.call(e(r), l),
                        c && e(r).data(n).to(c),
                        t.preventDefault()
                    }
                }
            }
            ,
            r(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }]),
            o
        }();
        return e(document).on(p.CLICK_DATA_API, x.DATA_SLIDE, T._dataApiClickHandler),
        e(window).on(p.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(x.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
                var r = e(t[n]);
                T._jQueryInterface.call(r, r.data())
            }
        }),
        e.fn[t] = T._jQueryInterface,
        e.fn[t].Constructor = T,
        e.fn[t].noConflict = function() {
            return e.fn[t] = o,
            T._jQueryInterface
        }
        ,
        T
    }(t)
      , d = function(e) {
        var t = "collapse"
          , n = "bs.collapse"
          , i = e.fn[t]
          , o = {
            toggle: !0,
            parent: ""
        }
          , l = {
            toggle: "boolean",
            parent: "(string|element)"
        }
          , c = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
        }
          , u = "show"
          , d = "collapse"
          , f = "collapsing"
          , h = "collapsed"
          , p = "width"
          , g = "height"
          , m = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }
          , v = function() {
            function i(t, n) {
                this._isTransitioning = !1,
                this._element = t,
                this._config = this._getConfig(n),
                this._triggerArray = e.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var i = [].slice.call(document.querySelectorAll(m.DATA_TOGGLE)), r = 0, o = i.length; r < o; r++) {
                    var s = i[r]
                      , l = a.getSelectorFromElement(s)
                      , c = [].slice.call(document.querySelectorAll(l)).filter(function(e) {
                        return e === t
                    });
                    null !== l && c.length > 0 && (this._selector = l,
                    this._triggerArray.push(s))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            var v = i.prototype;
            return v.toggle = function() {
                e(this._element).hasClass(u) ? this.hide() : this.show()
            }
            ,
            v.show = function() {
                var t, r, o = this;
                if (!this._isTransitioning && !e(this._element).hasClass(u) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(m.ACTIVES)).filter(function(e) {
                    return e.getAttribute("data-parent") === o._config.parent
                })).length && (t = null),
                !(t && (r = e(t).not(this._selector).data(n)) && r._isTransitioning))) {
                    var s = e.Event(c.SHOW);
                    if (e(this._element).trigger(s),
                    !s.isDefaultPrevented()) {
                        t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"),
                        r || e(t).data(n, null));
                        var l = this._getDimension();
                        e(this._element).removeClass(d).addClass(f),
                        this._element.style[l] = 0,
                        this._triggerArray.length && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0),
                        this.setTransitioning(!0);
                        var p = "scroll" + (l[0].toUpperCase() + l.slice(1))
                          , g = a.getTransitionDurationFromElement(this._element);
                        e(this._element).one(a.TRANSITION_END, function() {
                            e(o._element).removeClass(f).addClass(d).addClass(u),
                            o._element.style[l] = "",
                            o.setTransitioning(!1),
                            e(o._element).trigger(c.SHOWN)
                        }).emulateTransitionEnd(g),
                        this._element.style[l] = this._element[p] + "px"
                    }
                }
            }
            ,
            v.hide = function() {
                var t = this;
                if (!this._isTransitioning && e(this._element).hasClass(u)) {
                    var n = e.Event(c.HIDE);
                    if (e(this._element).trigger(n),
                    !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                        a.reflow(this._element),
                        e(this._element).addClass(f).removeClass(d).removeClass(u);
                        var r = this._triggerArray.length;
                        if (r > 0)
                            for (var o = 0; o < r; o++) {
                                var s = this._triggerArray[o]
                                  , l = a.getSelectorFromElement(s);
                                if (null !== l)
                                    e([].slice.call(document.querySelectorAll(l))).hasClass(u) || e(s).addClass(h).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[i] = "";
                        var p = a.getTransitionDurationFromElement(this._element);
                        e(this._element).one(a.TRANSITION_END, function() {
                            t.setTransitioning(!1),
                            e(t._element).removeClass(f).addClass(d).trigger(c.HIDDEN)
                        }).emulateTransitionEnd(p)
                    }
                }
            }
            ,
            v.setTransitioning = function(e) {
                this._isTransitioning = e
            }
            ,
            v.dispose = function() {
                e.removeData(this._element, n),
                this._config = null,
                this._parent = null,
                this._element = null,
                this._triggerArray = null,
                this._isTransitioning = null
            }
            ,
            v._getConfig = function(e) {
                return (e = s({}, o, e)).toggle = Boolean(e.toggle),
                a.typeCheckConfig(t, e, l),
                e
            }
            ,
            v._getDimension = function() {
                return e(this._element).hasClass(p) ? p : g
            }
            ,
            v._getParent = function() {
                var t = this
                  , n = null;
                a.isElement(this._config.parent) ? (n = this._config.parent,
                void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
                  , o = [].slice.call(n.querySelectorAll(r));
                return e(o).each(function(e, n) {
                    t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                }),
                n
            }
            ,
            v._addAriaAndCollapsedClass = function(t, n) {
                if (t) {
                    var i = e(t).hasClass(u);
                    n.length && e(n).toggleClass(h, !i).attr("aria-expanded", i)
                }
            }
            ,
            i._getTargetFromElement = function(e) {
                var t = a.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }
            ,
            i._jQueryInterface = function(t) {
                return this.each(function() {
                    var r = e(this)
                      , a = r.data(n)
                      , l = s({}, o, r.data(), "object" == typeof t && t ? t : {});
                    if (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1),
                    a || (a = new i(this,l),
                    r.data(n, a)),
                    "string" == typeof t) {
                        if (void 0 === a[t])
                            throw new TypeError('No method named "' + t + '"');
                        a[t]()
                    }
                })
            }
            ,
            r(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return o
                }
            }]),
            i
        }();
        return e(document).on(c.CLICK_DATA_API, m.DATA_TOGGLE, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var i = e(this)
              , r = a.getSelectorFromElement(this)
              , o = [].slice.call(document.querySelectorAll(r));
            e(o).each(function() {
                var t = e(this)
                  , r = t.data(n) ? "toggle" : i.data();
                v._jQueryInterface.call(t, r)
            })
        }),
        e.fn[t] = v._jQueryInterface,
        e.fn[t].Constructor = v,
        e.fn[t].noConflict = function() {
            return e.fn[t] = i,
            v._jQueryInterface
        }
        ,
        v
    }(t)
      , f = function(e) {
        var t = "dropdown"
          , i = "bs.dropdown"
          , o = "." + i
          , l = e.fn[t]
          , c = new RegExp("38|40|27")
          , u = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            CLICK: "click" + o,
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        }
          , d = "disabled"
          , f = "show"
          , h = "dropup"
          , p = "dropright"
          , g = "dropleft"
          , m = "dropdown-menu-right"
          , v = "position-static"
          , y = '[data-toggle="dropdown"]'
          , b = ".dropdown form"
          , w = ".dropdown-menu"
          , _ = ".navbar-nav"
          , x = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
          , T = "top-start"
          , S = "top-end"
          , C = "bottom-start"
          , E = "bottom-end"
          , k = "right-start"
          , A = "left-start"
          , O = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }
          , P = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }
          , D = function() {
            function l(e, t) {
                this._element = e,
                this._popper = null,
                this._config = this._getConfig(t),
                this._menu = this._getMenuElement(),
                this._inNavbar = this._detectNavbar(),
                this._addEventListeners()
            }
            var b = l.prototype;
            return b.toggle = function() {
                if (!this._element.disabled && !e(this._element).hasClass(d)) {
                    var t = l._getParentFromElement(this._element)
                      , i = e(this._menu).hasClass(f);
                    if (l._clearMenus(),
                    !i) {
                        var r = {
                            relatedTarget: this._element
                        }
                          , o = e.Event(u.SHOW, r);
                        if (e(t).trigger(o),
                        !o.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === n)
                                    throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var s = this._element;
                                "parent" === this._config.reference ? s = t : a.isElement(this._config.reference) && (s = this._config.reference,
                                void 0 !== this._config.reference.jquery && (s = this._config.reference[0])),
                                "scrollParent" !== this._config.boundary && e(t).addClass(v),
                                this._popper = new n(s,this._menu,this._getPopperConfig())
                            }
                            "ontouchstart"in document.documentElement && 0 === e(t).closest(_).length && e(document.body).children().on("mouseover", null, e.noop),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            e(this._menu).toggleClass(f),
                            e(t).toggleClass(f).trigger(e.Event(u.SHOWN, r))
                        }
                    }
                }
            }
            ,
            b.dispose = function() {
                e.removeData(this._element, i),
                e(this._element).off(o),
                this._element = null,
                this._menu = null,
                null !== this._popper && (this._popper.destroy(),
                this._popper = null)
            }
            ,
            b.update = function() {
                this._inNavbar = this._detectNavbar(),
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            b._addEventListeners = function() {
                var t = this;
                e(this._element).on(u.CLICK, function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.toggle()
                })
            }
            ,
            b._getConfig = function(n) {
                return n = s({}, this.constructor.Default, e(this._element).data(), n),
                a.typeCheckConfig(t, n, this.constructor.DefaultType),
                n
            }
            ,
            b._getMenuElement = function() {
                if (!this._menu) {
                    var e = l._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(w))
                }
                return this._menu
            }
            ,
            b._getPlacement = function() {
                var t = e(this._element.parentNode)
                  , n = C;
                return t.hasClass(h) ? (n = T,
                e(this._menu).hasClass(m) && (n = S)) : t.hasClass(p) ? n = k : t.hasClass(g) ? n = A : e(this._menu).hasClass(m) && (n = E),
                n
            }
            ,
            b._detectNavbar = function() {
                return e(this._element).closest(".navbar").length > 0
            }
            ,
            b._getPopperConfig = function() {
                var e = this
                  , t = {};
                "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}),
                    t
                }
                : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }),
                n
            }
            ,
            l._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = e(this).data(i);
                    if (n || (n = new l(this,"object" == typeof t ? t : null),
                    e(this).data(i, n)),
                    "string" == typeof t) {
                        if (void 0 === n[t])
                            throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }
            ,
            l._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var n = [].slice.call(document.querySelectorAll(y)), r = 0, o = n.length; r < o; r++) {
                        var s = l._getParentFromElement(n[r])
                          , a = e(n[r]).data(i)
                          , c = {
                            relatedTarget: n[r]
                        };
                        if (t && "click" === t.type && (c.clickEvent = t),
                        a) {
                            var d = a._menu;
                            if (e(s).hasClass(f) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(s, t.target))) {
                                var h = e.Event(u.HIDE, c);
                                e(s).trigger(h),
                                h.isDefaultPrevented() || ("ontouchstart"in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                                n[r].setAttribute("aria-expanded", "false"),
                                e(d).removeClass(f),
                                e(s).removeClass(f).trigger(e.Event(u.HIDDEN, c)))
                            }
                        }
                    }
            }
            ,
            l._getParentFromElement = function(e) {
                var t, n = a.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)),
                t || e.parentNode
            }
            ,
            l._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(w).length)) : c.test(t.which)) && (t.preventDefault(),
                t.stopPropagation(),
                !this.disabled && !e(this).hasClass(d))) {
                    var n = l._getParentFromElement(this)
                      , i = e(n).hasClass(f);
                    if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                        var r = [].slice.call(n.querySelectorAll(x));
                        if (0 !== r.length) {
                            var o = r.indexOf(t.target);
                            38 === t.which && o > 0 && o--,
                            40 === t.which && o < r.length - 1 && o++,
                            o < 0 && (o = 0),
                            r[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var s = n.querySelector(y);
                            e(s).trigger("focus")
                        }
                        e(this).trigger("click")
                    }
                }
            }
            ,
            r(l, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return O
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return P
                }
            }]),
            l
        }();
        return e(document).on(u.KEYDOWN_DATA_API, y, D._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, w, D._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, D._clearMenus).on(u.CLICK_DATA_API, y, function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            D._jQueryInterface.call(e(this), "toggle")
        }).on(u.CLICK_DATA_API, b, function(e) {
            e.stopPropagation()
        }),
        e.fn[t] = D._jQueryInterface,
        e.fn[t].Constructor = D,
        e.fn[t].noConflict = function() {
            return e.fn[t] = l,
            D._jQueryInterface
        }
        ,
        D
    }(t)
      , h = function(e) {
        var t = "modal"
          , n = ".bs.modal"
          , i = e.fn.modal
          , o = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
          , l = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
          , c = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
        }
          , u = "modal-scrollbar-measure"
          , d = "modal-backdrop"
          , f = "modal-open"
          , h = "fade"
          , p = "show"
          , g = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        }
          , m = function() {
            function i(e, t) {
                this._config = this._getConfig(t),
                this._element = e,
                this._dialog = e.querySelector(g.DIALOG),
                this._backdrop = null,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._scrollbarWidth = 0
            }
            var m = i.prototype;
            return m.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }
            ,
            m.show = function(t) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                    e(this._element).hasClass(h) && (this._isTransitioning = !0);
                    var i = e.Event(c.SHOW, {
                        relatedTarget: t
                    });
                    e(this._element).trigger(i),
                    this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    e(document.body).addClass(f),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    e(this._element).on(c.CLICK_DISMISS, g.DATA_DISMISS, function(e) {
                        return n.hide(e)
                    }),
                    e(this._dialog).on(c.MOUSEDOWN_DISMISS, function() {
                        e(n._element).one(c.MOUSEUP_DISMISS, function(t) {
                            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(function() {
                        return n._showElement(t)
                    }))
                }
            }
            ,
            m.hide = function(t) {
                var n = this;
                if (t && t.preventDefault(),
                !this._isTransitioning && this._isShown) {
                    var i = e.Event(c.HIDE);
                    if (e(this._element).trigger(i),
                    this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = e(this._element).hasClass(h);
                        if (r && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        e(document).off(c.FOCUSIN),
                        e(this._element).removeClass(p),
                        e(this._element).off(c.CLICK_DISMISS),
                        e(this._dialog).off(c.MOUSEDOWN_DISMISS),
                        r) {
                            var o = a.getTransitionDurationFromElement(this._element);
                            e(this._element).one(a.TRANSITION_END, function(e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else
                            this._hideModal()
                    }
                }
            }
            ,
            m.dispose = function() {
                e.removeData(this._element, "bs.modal"),
                e(window, document, this._element, this._backdrop).off(n),
                this._config = null,
                this._element = null,
                this._dialog = null,
                this._backdrop = null,
                this._isShown = null,
                this._isBodyOverflowing = null,
                this._ignoreBackdropClick = null,
                this._scrollbarWidth = null
            }
            ,
            m.handleUpdate = function() {
                this._adjustDialog()
            }
            ,
            m._getConfig = function(e) {
                return e = s({}, o, e),
                a.typeCheckConfig(t, e, l),
                e
            }
            ,
            m._showElement = function(t) {
                var n = this
                  , i = e(this._element).hasClass(h);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                this._element.style.display = "block",
                this._element.removeAttribute("aria-hidden"),
                this._element.scrollTop = 0,
                i && a.reflow(this._element),
                e(this._element).addClass(p),
                this._config.focus && this._enforceFocus();
                var r = e.Event(c.SHOWN, {
                    relatedTarget: t
                })
                  , o = function() {
                    n._config.focus && n._element.focus(),
                    n._isTransitioning = !1,
                    e(n._element).trigger(r)
                };
                if (i) {
                    var s = a.getTransitionDurationFromElement(this._element);
                    e(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                } else
                    o()
            }
            ,
            m._enforceFocus = function() {
                var t = this;
                e(document).off(c.FOCUSIN).on(c.FOCUSIN, function(n) {
                    document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                })
            }
            ,
            m._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? e(this._element).on(c.KEYDOWN_DISMISS, function(e) {
                    27 === e.which && (e.preventDefault(),
                    t.hide())
                }) : this._isShown || e(this._element).off(c.KEYDOWN_DISMISS)
            }
            ,
            m._setResizeEvent = function() {
                var t = this;
                this._isShown ? e(window).on(c.RESIZE, function(e) {
                    return t.handleUpdate(e)
                }) : e(window).off(c.RESIZE)
            }
            ,
            m._hideModal = function() {
                var t = this;
                this._element.style.display = "none",
                this._element.setAttribute("aria-hidden", !0),
                this._isTransitioning = !1,
                this._showBackdrop(function() {
                    e(document.body).removeClass(f),
                    t._resetAdjustments(),
                    t._resetScrollbar(),
                    e(t._element).trigger(c.HIDDEN)
                })
            }
            ,
            m._removeBackdrop = function() {
                this._backdrop && (e(this._backdrop).remove(),
                this._backdrop = null)
            }
            ,
            m._showBackdrop = function(t) {
                var n = this
                  , i = e(this._element).hasClass(h) ? h : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"),
                    this._backdrop.className = d,
                    i && this._backdrop.classList.add(i),
                    e(this._backdrop).appendTo(document.body),
                    e(this._element).on(c.CLICK_DISMISS, function(e) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                    }),
                    i && a.reflow(this._backdrop),
                    e(this._backdrop).addClass(p),
                    !t)
                        return;
                    if (!i)
                        return void t();
                    var r = a.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(p);
                    var o = function() {
                        n._removeBackdrop(),
                        t && t()
                    };
                    if (e(this._element).hasClass(h)) {
                        var s = a.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else
                        o()
                } else
                    t && t()
            }
            ,
            m._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }
            ,
            m._resetAdjustments = function() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
            ,
            m._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth,
                this._scrollbarWidth = this._getScrollbarWidth()
            }
            ,
            m._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(g.FIXED_CONTENT))
                      , i = [].slice.call(document.querySelectorAll(g.STICKY_CONTENT));
                    e(n).each(function(n, i) {
                        var r = i.style.paddingRight
                          , o = e(i).css("padding-right");
                        e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                    }),
                    e(i).each(function(n, i) {
                        var r = i.style.marginRight
                          , o = e(i).css("margin-right");
                        e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                    });
                    var r = document.body.style.paddingRight
                      , o = e(document.body).css("padding-right");
                    e(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
            }
            ,
            m._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(g.FIXED_CONTENT));
                e(t).each(function(t, n) {
                    var i = e(n).data("padding-right");
                    e(n).removeData("padding-right"),
                    n.style.paddingRight = i || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + g.STICKY_CONTENT));
                e(n).each(function(t, n) {
                    var i = e(n).data("margin-right");
                    void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                });
                var i = e(document.body).data("padding-right");
                e(document.body).removeData("padding-right"),
                document.body.style.paddingRight = i || ""
            }
            ,
            m._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = u,
                document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e),
                t
            }
            ,
            i._jQueryInterface = function(t, n) {
                return this.each(function() {
                    var r = e(this).data("bs.modal")
                      , a = s({}, o, e(this).data(), "object" == typeof t && t ? t : {});
                    if (r || (r = new i(this,a),
                    e(this).data("bs.modal", r)),
                    "string" == typeof t) {
                        if (void 0 === r[t])
                            throw new TypeError('No method named "' + t + '"');
                        r[t](n)
                    } else
                        a.show && r.show(n)
                })
            }
            ,
            r(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return o
                }
            }]),
            i
        }();
        return e(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function(t) {
            var n, i = this, r = a.getSelectorFromElement(this);
            r && (n = document.querySelector(r));
            var o = e(n).data("bs.modal") ? "toggle" : s({}, e(n).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var l = e(n).one(c.SHOW, function(t) {
                t.isDefaultPrevented() || l.one(c.HIDDEN, function() {
                    e(i).is(":visible") && i.focus()
                })
            });
            m._jQueryInterface.call(e(n), o, this)
        }),
        e.fn.modal = m._jQueryInterface,
        e.fn.modal.Constructor = m,
        e.fn.modal.noConflict = function() {
            return e.fn.modal = i,
            m._jQueryInterface
        }
        ,
        m
    }(t)
      , p = function(e) {
        var t = "tooltip"
          , i = ".bs.tooltip"
          , o = e.fn[t]
          , l = new RegExp("(^|\\s)bs-tooltip\\S+","g")
          , c = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }
          , u = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
          , d = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }
          , f = "show"
          , h = "out"
          , p = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i
        }
          , g = "fade"
          , m = "show"
          , v = ".tooltip-inner"
          , y = ".arrow"
          , b = "hover"
          , w = "focus"
          , _ = "click"
          , x = "manual"
          , T = function() {
            function o(e, t) {
                if (void 0 === n)
                    throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._popper = null,
                this.element = e,
                this.config = this._getConfig(t),
                this.tip = null,
                this._setListeners()
            }
            var T = o.prototype;
            return T.enable = function() {
                this._isEnabled = !0
            }
            ,
            T.disable = function() {
                this._isEnabled = !1
            }
            ,
            T.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }
            ,
            T.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var n = this.constructor.DATA_KEY
                          , i = e(t.currentTarget).data(n);
                        i || (i = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                        e(t.currentTarget).data(n, i)),
                        i._activeTrigger.click = !i._activeTrigger.click,
                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (e(this.getTipElement()).hasClass(m))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }
            ,
            T.dispose = function() {
                clearTimeout(this._timeout),
                e.removeData(this.element, this.constructor.DATA_KEY),
                e(this.element).off(this.constructor.EVENT_KEY),
                e(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && e(this.tip).remove(),
                this._isEnabled = null,
                this._timeout = null,
                this._hoverState = null,
                this._activeTrigger = null,
                null !== this._popper && this._popper.destroy(),
                this._popper = null,
                this.element = null,
                this.config = null,
                this.tip = null
            }
            ,
            T.show = function() {
                var t = this;
                if ("none" === e(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                var i = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(i);
                    var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r)
                        return;
                    var o = this.getTipElement()
                      , s = a.getUID(this.constructor.NAME);
                    o.setAttribute("id", s),
                    this.element.setAttribute("aria-describedby", s),
                    this.setContent(),
                    this.config.animation && e(o).addClass(g);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                      , c = this._getAttachment(l);
                    this.addAttachmentClass(c);
                    var u = !1 === this.config.container ? document.body : e(document).find(this.config.container);
                    e(o).data(this.constructor.DATA_KEY, this),
                    e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(u),
                    e(this.element).trigger(this.constructor.Event.INSERTED),
                    this._popper = new n(this.element,o,{
                        placement: c,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: y
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            t._handlePopperPlacementChange(e)
                        }
                    }),
                    e(o).addClass(m),
                    "ontouchstart"in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                    var d = function() {
                        t.config.animation && t._fixTransition();
                        var n = t._hoverState;
                        t._hoverState = null,
                        e(t.element).trigger(t.constructor.Event.SHOWN),
                        n === h && t._leave(null, t)
                    };
                    if (e(this.tip).hasClass(g)) {
                        var f = a.getTransitionDurationFromElement(this.tip);
                        e(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(f)
                    } else
                        d()
                }
            }
            ,
            T.hide = function(t) {
                var n = this
                  , i = this.getTipElement()
                  , r = e.Event(this.constructor.Event.HIDE)
                  , o = function() {
                    n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    e(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    t && t()
                };
                if (e(this.element).trigger(r),
                !r.isDefaultPrevented()) {
                    if (e(i).removeClass(m),
                    "ontouchstart"in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                    this._activeTrigger[_] = !1,
                    this._activeTrigger[w] = !1,
                    this._activeTrigger[b] = !1,
                    e(this.tip).hasClass(g)) {
                        var s = a.getTransitionDurationFromElement(i);
                        e(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else
                        o();
                    this._hoverState = ""
                }
            }
            ,
            T.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            T.isWithContent = function() {
                return Boolean(this.getTitle())
            }
            ,
            T.addAttachmentClass = function(t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t)
            }
            ,
            T.getTipElement = function() {
                return this.tip = this.tip || e(this.config.template)[0],
                this.tip
            }
            ,
            T.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(e(t.querySelectorAll(v)), this.getTitle()),
                e(t).removeClass(g + " " + m)
            }
            ,
            T.setElementContent = function(t, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
            }
            ,
            T.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                e
            }
            ,
            T._getAttachment = function(e) {
                return u[e.toUpperCase()]
            }
            ,
            T._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n)
                        e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                            return t.toggle(e)
                        });
                    else if (n !== x) {
                        var i = n === b ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                          , r = n === b ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        e(t.element).on(i, t.config.selector, function(e) {
                            return t._enter(e)
                        }).on(r, t.config.selector, function(e) {
                            return t._leave(e)
                        })
                    }
                    e(t.element).closest(".modal").on("hide.bs.modal", function() {
                        return t.hide()
                    })
                }),
                this.config.selector ? this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }
            ,
            T._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", ""))
            }
            ,
            T._enter = function(t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                e(t.currentTarget).data(i, n)),
                t && (n._activeTrigger["focusin" === t.type ? w : b] = !0),
                e(n.getTipElement()).hasClass(m) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout),
                n._hoverState = f,
                n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === f && n.show()
                }, n.config.delay.show) : n.show())
            }
            ,
            T._leave = function(t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                e(t.currentTarget).data(i, n)),
                t && (n._activeTrigger["focusout" === t.type ? w : b] = !1),
                n._isWithActiveTrigger() || (clearTimeout(n._timeout),
                n._hoverState = h,
                n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    n._hoverState === h && n.hide()
                }, n.config.delay.hide) : n.hide())
            }
            ,
            T._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e])
                        return !0;
                return !1
            }
            ,
            T._getConfig = function(n) {
                return "number" == typeof (n = s({}, this.constructor.Default, e(this.element).data(), "object" == typeof n && n ? n : {})).delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }),
                "number" == typeof n.title && (n.title = n.title.toString()),
                "number" == typeof n.content && (n.content = n.content.toString()),
                a.typeCheckConfig(t, n, this.constructor.DefaultType),
                n
            }
            ,
            T._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config)
                        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }
            ,
            T._cleanTipClass = function() {
                var t = e(this.getTipElement())
                  , n = t.attr("class").match(l);
                null !== n && n.length && t.removeClass(n.join(""))
            }
            ,
            T._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper,
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(e.placement))
            }
            ,
            T._fixTransition = function() {
                var t = this.getTipElement()
                  , n = this.config.animation;
                null === t.getAttribute("x-placement") && (e(t).removeClass(g),
                this.config.animation = !1,
                this.hide(),
                this.show(),
                this.config.animation = n)
            }
            ,
            o._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = e(this).data("bs.tooltip")
                      , i = "object" == typeof t && t;
                    if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this,i),
                    e(this).data("bs.tooltip", n)),
                    "string" == typeof t)) {
                        if (void 0 === n[t])
                            throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }
            ,
            r(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return d
                }
            }, {
                key: "NAME",
                get: function() {
                    return t
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return p
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return c
                }
            }]),
            o
        }();
        return e.fn[t] = T._jQueryInterface,
        e.fn[t].Constructor = T,
        e.fn[t].noConflict = function() {
            return e.fn[t] = o,
            T._jQueryInterface
        }
        ,
        T
    }(t)
      , g = function(e) {
        var t = "popover"
          , n = ".bs.popover"
          , i = e.fn[t]
          , o = new RegExp("(^|\\s)bs-popover\\S+","g")
          , a = s({}, p.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
          , l = s({}, p.DefaultType, {
            content: "(string|element|function)"
        })
          , c = "fade"
          , u = "show"
          , d = ".popover-header"
          , f = ".popover-body"
          , h = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            INSERTED: "inserted" + n,
            CLICK: "click" + n,
            FOCUSIN: "focusin" + n,
            FOCUSOUT: "focusout" + n,
            MOUSEENTER: "mouseenter" + n,
            MOUSELEAVE: "mouseleave" + n
        }
          , g = function(i) {
            var s, p;
            function g() {
                return i.apply(this, arguments) || this
            }
            p = i,
            (s = g).prototype = Object.create(p.prototype),
            s.prototype.constructor = s,
            s.__proto__ = p;
            var m = g.prototype;
            return m.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
            ,
            m.addAttachmentClass = function(t) {
                e(this.getTipElement()).addClass("bs-popover-" + t)
            }
            ,
            m.getTipElement = function() {
                return this.tip = this.tip || e(this.config.template)[0],
                this.tip
            }
            ,
            m.setContent = function() {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(d), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(t.find(f), n),
                t.removeClass(c + " " + u)
            }
            ,
            m._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }
            ,
            m._cleanTipClass = function() {
                var t = e(this.getTipElement())
                  , n = t.attr("class").match(o);
                null !== n && n.length > 0 && t.removeClass(n.join(""))
            }
            ,
            g._jQueryInterface = function(t) {
                return this.each(function() {
                    var n = e(this).data("bs.popover")
                      , i = "object" == typeof t ? t : null;
                    if ((n || !/destroy|hide/.test(t)) && (n || (n = new g(this,i),
                    e(this).data("bs.popover", n)),
                    "string" == typeof t)) {
                        if (void 0 === n[t])
                            throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }
            ,
            r(g, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }, {
                key: "NAME",
                get: function() {
                    return t
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return h
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return n
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return l
                }
            }]),
            g
        }(p);
        return e.fn[t] = g._jQueryInterface,
        e.fn[t].Constructor = g,
        e.fn[t].noConflict = function() {
            return e.fn[t] = i,
            g._jQueryInterface
        }
        ,
        g
    }(t)
      , m = function(e) {
        var t = "scrollspy"
          , n = e.fn[t]
          , i = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , o = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , l = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
        }
          , c = "dropdown-item"
          , u = "active"
          , d = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }
          , f = "offset"
          , h = "position"
          , p = function() {
            function n(t, n) {
                var i = this;
                this._element = t,
                this._scrollElement = "BODY" === t.tagName ? window : t,
                this._config = this._getConfig(n),
                this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS,
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                e(this._scrollElement).on(l.SCROLL, function(e) {
                    return i._process(e)
                }),
                this.refresh(),
                this._process()
            }
            var p = n.prototype;
            return p.refresh = function() {
                var t = this
                  , n = this._scrollElement === this._scrollElement.window ? f : h
                  , i = "auto" === this._config.method ? n : this._config.method
                  , r = i === h ? this._getScrollTop() : 0;
                this._offsets = [],
                this._targets = [],
                this._scrollHeight = this._getScrollHeight(),
                [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                    var n, o = a.getSelectorFromElement(t);
                    if (o && (n = document.querySelector(o)),
                    n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height)
                            return [e(n)[i]().top + r, o]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]),
                    t._targets.push(e[1])
                })
            }
            ,
            p.dispose = function() {
                e.removeData(this._element, "bs.scrollspy"),
                e(this._scrollElement).off(".bs.scrollspy"),
                this._element = null,
                this._scrollElement = null,
                this._config = null,
                this._selector = null,
                this._offsets = null,
                this._targets = null,
                this._activeTarget = null,
                this._scrollHeight = null
            }
            ,
            p._getConfig = function(n) {
                if ("string" != typeof (n = s({}, i, "object" == typeof n && n ? n : {})).target) {
                    var r = e(n.target).attr("id");
                    r || (r = a.getUID(t),
                    e(n.target).attr("id", r)),
                    n.target = "#" + r
                }
                return a.typeCheckConfig(t, n, o),
                n
            }
            ,
            p._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }
            ,
            p._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            p._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }
            ,
            p._process = function() {
                var e = this._getScrollTop() + this._config.offset
                  , t = this._getScrollHeight()
                  , n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(),
                e >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                        return this._activeTarget = null,
                        void this._clear();
                    for (var r = this._offsets.length; r--; ) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }
            ,
            p._activate = function(t) {
                this._activeTarget = t,
                this._clear();
                var n = this._selector.split(",");
                n = n.map(function(e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                });
                var i = e([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass(c) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(u),
                i.addClass(u)) : (i.addClass(u),
                i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(u),
                i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(u)),
                e(this._scrollElement).trigger(l.ACTIVATE, {
                    relatedTarget: t
                })
            }
            ,
            p._clear = function() {
                var t = [].slice.call(document.querySelectorAll(this._selector));
                e(t).filter(d.ACTIVE).removeClass(u)
            }
            ,
            n._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = e(this).data("bs.scrollspy");
                    if (i || (i = new n(this,"object" == typeof t && t),
                    e(this).data("bs.scrollspy", i)),
                    "string" == typeof t) {
                        if (void 0 === i[t])
                            throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }
            ,
            r(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return i
                }
            }]),
            n
        }();
        return e(window).on(l.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(d.DATA_SPY)), n = t.length; n--; ) {
                var i = e(t[n]);
                p._jQueryInterface.call(i, i.data())
            }
        }),
        e.fn[t] = p._jQueryInterface,
        e.fn[t].Constructor = p,
        e.fn[t].noConflict = function() {
            return e.fn[t] = n,
            p._jQueryInterface
        }
        ,
        p
    }(t)
      , v = function(e) {
        var t = e.fn.tab
          , n = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
        }
          , i = "dropdown-menu"
          , o = "active"
          , s = "disabled"
          , l = "fade"
          , c = "show"
          , u = ".dropdown"
          , d = ".nav, .list-group"
          , f = ".active"
          , h = "> li > .active"
          , p = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
          , g = ".dropdown-toggle"
          , m = "> .dropdown-menu .active"
          , v = function() {
            function t(e) {
                this._element = e
            }
            var p = t.prototype;
            return p.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(o) || e(this._element).hasClass(s))) {
                    var i, r, l = e(this._element).closest(d)[0], c = a.getSelectorFromElement(this._element);
                    if (l) {
                        var u = "UL" === l.nodeName ? h : f;
                        r = (r = e.makeArray(e(l).find(u)))[r.length - 1]
                    }
                    var p = e.Event(n.HIDE, {
                        relatedTarget: this._element
                    })
                      , g = e.Event(n.SHOW, {
                        relatedTarget: r
                    });
                    if (r && e(r).trigger(p),
                    e(this._element).trigger(g),
                    !g.isDefaultPrevented() && !p.isDefaultPrevented()) {
                        c && (i = document.querySelector(c)),
                        this._activate(this._element, l);
                        var m = function() {
                            var i = e.Event(n.HIDDEN, {
                                relatedTarget: t._element
                            })
                              , o = e.Event(n.SHOWN, {
                                relatedTarget: r
                            });
                            e(r).trigger(i),
                            e(t._element).trigger(o)
                        };
                        i ? this._activate(i, i.parentNode, m) : m()
                    }
                }
            }
            ,
            p.dispose = function() {
                e.removeData(this._element, "bs.tab"),
                this._element = null
            }
            ,
            p._activate = function(t, n, i) {
                var r = this
                  , o = ("UL" === n.nodeName ? e(n).find(h) : e(n).children(f))[0]
                  , s = i && o && e(o).hasClass(l)
                  , c = function() {
                    return r._transitionComplete(t, o, i)
                };
                if (o && s) {
                    var u = a.getTransitionDurationFromElement(o);
                    e(o).one(a.TRANSITION_END, c).emulateTransitionEnd(u)
                } else
                    c()
            }
            ,
            p._transitionComplete = function(t, n, r) {
                if (n) {
                    e(n).removeClass(c + " " + o);
                    var s = e(n.parentNode).find(m)[0];
                    s && e(s).removeClass(o),
                    "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (e(t).addClass(o),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                a.reflow(t),
                e(t).addClass(c),
                t.parentNode && e(t.parentNode).hasClass(i)) {
                    var l = e(t).closest(u)[0];
                    if (l) {
                        var d = [].slice.call(l.querySelectorAll(g));
                        e(d).addClass(o)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                r && r()
            }
            ,
            t._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = e(this)
                      , r = i.data("bs.tab");
                    if (r || (r = new t(this),
                    i.data("bs.tab", r)),
                    "string" == typeof n) {
                        if (void 0 === r[n])
                            throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }
            ,
            r(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]),
            t
        }();
        return e(document).on(n.CLICK_DATA_API, p, function(t) {
            t.preventDefault(),
            v._jQueryInterface.call(e(this), "show")
        }),
        e.fn.tab = v._jQueryInterface,
        e.fn.tab.Constructor = v,
        e.fn.tab.noConflict = function() {
            return e.fn.tab = t,
            v._jQueryInterface
        }
        ,
        v
    }(t);
    !function(e) {
        if (void 0 === e)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t),
    e.Util = a,
    e.Alert = l,
    e.Button = c,
    e.Carousel = u,
    e.Collapse = d,
    e.Dropdown = f,
    e.Modal = h,
    e.Popover = g,
    e.Scrollspy = m,
    e.Tab = v,
    e.Tooltip = p,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, i, r) {
        return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
    },
    easeInQuad: function(e, t, n, i, r) {
        return i * (t /= r) * t + n
    },
    easeOutQuad: function(e, t, n, i, r) {
        return -i * (t /= r) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, i, r) {
        return i * (t /= r) * t * t + n
    },
    easeOutCubic: function(e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, i, r) {
        return i * (t /= r) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, i, r) {
        return -i * ((t = t / r - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, i, r) {
        return i * (t /= r) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, i, r) {
        return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function(e, t, n, i, r) {
        return i * Math.sin(t / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, i, r) {
        return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
    },
    easeInExpo: function(e, t, n, i, r) {
        return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
    },
    easeOutExpo: function(e, t, n, i, r) {
        return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
    },
    easeInOutExpo: function(e, t, n, i, r) {
        return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function(e, t, n, i, r) {
        return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, i, r) {
        return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, i, r) {
        var o = 1.70158
          , s = 0
          , a = i;
        if (0 == t)
            return n;
        if (1 == (t /= r))
            return n + i;
        if (s || (s = .3 * r),
        a < Math.abs(i)) {
            a = i;
            o = s / 4
        } else
            o = s / (2 * Math.PI) * Math.asin(i / a);
        return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) + n
    },
    easeOutElastic: function(e, t, n, i, r) {
        var o = 1.70158
          , s = 0
          , a = i;
        if (0 == t)
            return n;
        if (1 == (t /= r))
            return n + i;
        if (s || (s = .3 * r),
        a < Math.abs(i)) {
            a = i;
            o = s / 4
        } else
            o = s / (2 * Math.PI) * Math.asin(i / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / s) + i + n
    },
    easeInOutElastic: function(e, t, n, i, r) {
        var o = 1.70158
          , s = 0
          , a = i;
        if (0 == t)
            return n;
        if (2 == (t /= r / 2))
            return n + i;
        if (s || (s = r * (.3 * 1.5)),
        a < Math.abs(i)) {
            a = i;
            o = s / 4
        } else
            o = s / (2 * Math.PI) * Math.asin(i / a);
        return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) * -.5 + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) * .5 + i + n
    },
    easeInBack: function(e, t, n, i, r, o) {
        return void 0 == o && (o = 1.70158),
        i * (t /= r) * t * ((o + 1) * t - o) + n
    },
    easeOutBack: function(e, t, n, i, r, o) {
        return void 0 == o && (o = 1.70158),
        i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
    },
    easeInOutBack: function(e, t, n, i, r, o) {
        return void 0 == o && (o = 1.70158),
        (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + n : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
    },
    easeInBounce: function(e, t, n, i, r) {
        return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
    },
    easeOutBounce: function(e, t, n, i, r) {
        return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(e, t, n, i, r) {
        return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
    }
}),
jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(e) {
    function t(e) {
        var t = e.length
          , i = n.type(e);
        return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    if (!e.jQuery) {
        var n = function(e, t) {
            return new n.fn.init(e,t)
        };
        n.isWindow = function(e) {
            return null != e && e == e.window
        }
        ,
        n.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[s.call(e)] || "object" : typeof e
        }
        ,
        n.isArray = Array.isArray || function(e) {
            return "array" === n.type(e)
        }
        ,
        n.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e))
                return !1;
            try {
                if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            for (t in e)
                ;
            return void 0 === t || o.call(e, t)
        }
        ,
        n.each = function(e, n, i) {
            var r = 0
              , o = e.length
              , s = t(e);
            if (i) {
                if (s)
                    for (; o > r && !1 !== n.apply(e[r], i); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === n.apply(e[r], i))
                            break
            } else if (s)
                for (; o > r && !1 !== n.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === n.call(e[r], r, e[r]))
                        break;
            return e
        }
        ,
        n.data = function(e, t, r) {
            if (void 0 === r) {
                var o = (s = e[n.expando]) && i[s];
                if (void 0 === t)
                    return o;
                if (o && t in o)
                    return o[t]
            } else if (void 0 !== t) {
                var s = e[n.expando] || (e[n.expando] = ++n.uuid);
                return i[s] = i[s] || {},
                i[s][t] = r,
                r
            }
        }
        ,
        n.removeData = function(e, t) {
            var r = e[n.expando]
              , o = r && i[r];
            o && n.each(t, function(e, t) {
                delete o[t]
            })
        }
        ,
        n.extend = function() {
            var e, t, i, r, o, s, a = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof a && (u = a,
            a = arguments[l] || {},
            l++),
            "object" != typeof a && "function" !== n.type(a) && (a = {}),
            l === c && (a = this,
            l--); c > l; l++)
                if (null != (o = arguments[l]))
                    for (r in o)
                        e = a[r],
                        a !== (i = o[r]) && (u && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1,
                        s = e && n.isArray(e) ? e : []) : s = e && n.isPlainObject(e) ? e : {},
                        a[r] = n.extend(u, s, i)) : void 0 !== i && (a[r] = i));
            return a
        }
        ,
        n.queue = function(e, i, r) {
            if (e) {
                i = (i || "fx") + "queue";
                var o = n.data(e, i);
                return r ? (!o || n.isArray(r) ? o = n.data(e, i, function(e, n) {
                    var i = n || [];
                    return null != e && (t(Object(e)) ? function(e, t) {
                        for (var n = +t.length, i = 0, r = e.length; n > i; )
                            e[r++] = t[i++];
                        if (n != n)
                            for (; void 0 !== t[i]; )
                                e[r++] = t[i++];
                        e.length = r
                    }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)),
                    i
                }(r)) : o.push(r),
                o) : o || []
            }
        }
        ,
        n.dequeue = function(e, t) {
            n.each(e.nodeType ? [e] : e, function(e, i) {
                t = t || "fx";
                var r = n.queue(i, t)
                  , o = r.shift();
                "inprogress" === o && (o = r.shift()),
                o && ("fx" === t && r.unshift("inprogress"),
                o.call(i, function() {
                    n.dequeue(i, t)
                }))
            })
        }
        ,
        n.fn = n.prototype = {
            init: function(e) {
                if (e.nodeType)
                    return this[0] = e,
                    this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; )
                        e = e.offsetParent;
                    return e || document
                }
                var t = this[0]
                  , e = e.apply(t)
                  , i = this.offset()
                  , r = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                } : n(e).offset();
                return i.top -= parseFloat(t.style.marginTop) || 0,
                i.left -= parseFloat(t.style.marginLeft) || 0,
                e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0,
                r.left += parseFloat(e.style.borderLeftWidth) || 0),
                {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        };
        var i = {};
        n.expando = "velocity" + (new Date).getTime(),
        n.uuid = 0;
        for (var r = {}, o = r.hasOwnProperty, s = r.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++)
            r["[object " + a[l] + "]"] = a[l].toLowerCase();
        n.fn.init.prototype = n.fn,
        e.Velocity = {
            Utilities: n
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, n, i) {
        function r(e) {
            return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]),
            e
        }
        function o(e) {
            var t = u.data(e, "velocity");
            return null === t ? i : t
        }
        function s(e, n, i, r) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }
            function s(e, t) {
                return 3 * t - 6 * e
            }
            function a(e) {
                return 3 * e
            }
            function l(e, t, n) {
                return ((o(t, n) * e + s(t, n)) * e + a(t)) * e
            }
            function c(e, t, n) {
                return 3 * o(t, n) * e * e + 2 * s(t, n) * e + a(t)
            }
            function u(t, n) {
                for (var r = 0; h > r; ++r) {
                    var o = c(n, e, i);
                    if (0 === o)
                        return n;
                    n -= (l(n, e, i) - t) / o
                }
                return n
            }
            function d(t, n, r) {
                var o, s, a = 0;
                do {
                    (o = l(s = n + (r - n) / 2, e, i) - t) > 0 ? r = s : n = s
                } while (Math.abs(o) > g && ++a < m);return s
            }
            function f() {
                x = !0,
                (e != n || i != r) && function() {
                    for (var t = 0; v > t; ++t)
                        _[t] = l(t * y, e, i)
                }()
            }
            var h = 4
              , p = .001
              , g = 1e-7
              , m = 10
              , v = 11
              , y = 1 / (v - 1)
              , b = "Float32Array"in t;
            if (4 !== arguments.length)
                return !1;
            for (var w = 0; 4 > w; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w]))
                    return !1;
            e = Math.min(e, 1),
            i = Math.min(i, 1),
            e = Math.max(e, 0),
            i = Math.max(i, 0);
            var _ = b ? new Float32Array(v) : new Array(v)
              , x = !1
              , T = function(t) {
                return x || f(),
                e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(function(t) {
                    for (var n = 0, r = 1, o = v - 1; r != o && _[r] <= t; ++r)
                        n += y;
                    var s = n + (t - _[--r]) / (_[r + 1] - _[r]) * y
                      , a = c(s, e, i);
                    return a >= p ? u(t, s) : 0 == a ? s : d(t, n, n + y)
                }(t), n, r)
            };
            T.getControlPoints = function() {
                return [{
                    x: e,
                    y: n
                }, {
                    x: i,
                    y: r
                }]
            }
            ;
            var S = "generateBezier(" + [e, n, i, r] + ")";
            return T.toString = function() {
                return S
            }
            ,
            T
        }
        function a(e, t) {
            var n = e;
            return h.isString(e) ? v.Easings[e] || (n = !1) : n = h.isArray(e) && 1 === e.length ? function(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }
            .apply(null, e) : h.isArray(e) && 2 === e.length ? y.apply(null, e.concat([t])) : !(!h.isArray(e) || 4 !== e.length) && s.apply(null, e),
            !1 === n && (n = v.Easings[v.defaults.easing] ? v.defaults.easing : m),
            n
        }
        function l(e) {
            if (e) {
                var t = (new Date).getTime()
                  , n = v.State.calls.length;
                n > 1e4 && (v.State.calls = function(e) {
                    for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                        var r = e[t];
                        r && i.push(r)
                    }
                    return i
                }(v.State.calls));
                for (var r = 0; n > r; r++)
                    if (v.State.calls[r]) {
                        var s = v.State.calls[r]
                          , a = s[0]
                          , d = s[2]
                          , f = s[3]
                          , p = !!f
                          , g = null;
                        f || (f = v.State.calls[r][3] = t - 16);
                        for (var m = Math.min((t - f) / d.duration, 1), y = 0, w = a.length; w > y; y++) {
                            var x = a[y]
                              , T = x.element;
                            if (o(T)) {
                                var S = !1;
                                if (d.display !== i && null !== d.display && "none" !== d.display) {
                                    if ("flex" === d.display) {
                                        u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                            b.setPropertyValue(T, "display", t)
                                        })
                                    }
                                    b.setPropertyValue(T, "display", d.display)
                                }
                                for (var C in d.visibility !== i && "hidden" !== d.visibility && b.setPropertyValue(T, "visibility", d.visibility),
                                x)
                                    if ("element" !== C) {
                                        var E, k = x[C], A = h.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                        if (1 === m)
                                            E = k.endValue;
                                        else {
                                            var O = k.endValue - k.startValue;
                                            if (E = k.startValue + O * A(m, d, O),
                                            !p && E === k.currentValue)
                                                continue
                                        }
                                        if (k.currentValue = E,
                                        "tween" === C)
                                            g = E;
                                        else {
                                            if (b.Hooks.registered[C]) {
                                                var P = b.Hooks.getRoot(C)
                                                  , D = o(T).rootPropertyValueCache[P];
                                                D && (k.rootPropertyValue = D)
                                            }
                                            var I = b.setPropertyValue(T, C, k.currentValue + (0 === parseFloat(E) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                            b.Hooks.registered[C] && (o(T).rootPropertyValueCache[P] = b.Normalizations.registered[P] ? b.Normalizations.registered[P]("extract", null, I[1]) : I[1]),
                                            "transform" === I[0] && (S = !0)
                                        }
                                    }
                                d.mobileHA && o(T).transformCache.translate3d === i && (o(T).transformCache.translate3d = "(0px, 0px, 0px)",
                                S = !0),
                                S && b.flushTransformCache(T)
                            }
                        }
                        d.display !== i && "none" !== d.display && (v.State.calls[r][2].display = !1),
                        d.visibility !== i && "hidden" !== d.visibility && (v.State.calls[r][2].visibility = !1),
                        d.progress && d.progress.call(s[1], s[1], m, Math.max(0, f + d.duration - t), f, g),
                        1 === m && c(r)
                    }
            }
            v.State.isTicking && _(l)
        }
        function c(e, t) {
            if (!v.State.calls[e])
                return !1;
            for (var n = v.State.calls[e][0], r = v.State.calls[e][1], s = v.State.calls[e][2], a = v.State.calls[e][4], l = !1, c = 0, d = n.length; d > c; c++) {
                var f = n[c].element;
                if (t || s.loop || ("none" === s.display && b.setPropertyValue(f, "display", s.display),
                "hidden" === s.visibility && b.setPropertyValue(f, "visibility", s.visibility)),
                !0 !== s.loop && (u.queue(f)[1] === i || !/\.velocityQueueEntryFlag/i.test(u.queue(f)[1])) && o(f)) {
                    o(f).isAnimating = !1,
                    o(f).rootPropertyValueCache = {};
                    var h = !1;
                    u.each(b.Lists.transforms3D, function(e, t) {
                        var n = /^scale/.test(t) ? 1 : 0
                          , r = o(f).transformCache[t];
                        o(f).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (h = !0,
                        delete o(f).transformCache[t])
                    }),
                    s.mobileHA && (h = !0,
                    delete o(f).transformCache.translate3d),
                    h && b.flushTransformCache(f),
                    b.Values.removeClass(f, "velocity-animating")
                }
                if (!t && s.complete && !s.loop && c === d - 1)
                    try {
                        s.complete.call(r, r)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                a && !0 !== s.loop && a(r),
                o(f) && !0 === s.loop && !t && (u.each(o(f).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0,
                    t.startValue = 360),
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0,
                    t.startValue = 100)
                }),
                v(f, "reverse", {
                    loop: !0,
                    delay: s.delay
                })),
                !1 !== s.queue && u.dequeue(f, s.queue)
            }
            v.State.calls[e] = !1;
            for (var p = 0, g = v.State.calls.length; g > p; p++)
                if (!1 !== v.State.calls[p]) {
                    l = !0;
                    break
                }
            !1 === l && (v.State.isTicking = !1,
            delete v.State.calls,
            v.State.calls = [])
        }
        var u, d = function() {
            if (n.documentMode)
                return n.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = n.createElement("div");
                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e",
                t.getElementsByTagName("span").length)
                    return t = null,
                    e
            }
            return i
        }(), f = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                var n, i = (new Date).getTime();
                return n = Math.max(0, 16 - (i - e)),
                e = i + n,
                setTimeout(function() {
                    t(i + n)
                }, n)
            }
        }(), h = {
            isString: function(e) {
                return "string" == typeof e
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ,
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            },
            isNode: function(e) {
                return e && e.nodeType
            },
            isNodeList: function(e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            },
            isWrapped: function(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            },
            isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement
            },
            isEmptyObject: function(e) {
                for (var t in e)
                    return !1;
                return !0
            }
        }, p = !1;
        if (e.fn && e.fn.jquery ? (u = e,
        p = !0) : u = t.Velocity.Utilities,
        8 >= d && !p)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(7 >= d)) {
            var g = 400
              , m = "swing"
              , v = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: n.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: u,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: g,
                    easing: m,
                    begin: i,
                    complete: i,
                    progress: i,
                    display: i,
                    visibility: i,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(e) {
                    u.data(e, "velocity", {
                        isSVG: h.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
            t.pageYOffset !== i ? (v.State.scrollAnchor = t,
            v.State.scrollPropertyLeft = "pageXOffset",
            v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body,
            v.State.scrollPropertyLeft = "scrollLeft",
            v.State.scrollPropertyTop = "scrollTop");
            var y = function() {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }
                function t(t, n, i) {
                    var r = {
                        x: t.x + i.dx * n,
                        v: t.v + i.dv * n,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: r.v,
                        dv: e(r)
                    }
                }
                function n(n, i) {
                    var r = {
                        dx: n.v,
                        dv: e(n)
                    }
                      , o = t(n, .5 * i, r)
                      , s = t(n, .5 * i, o)
                      , a = t(n, i, s)
                      , l = 1 / 6 * (r.dx + 2 * (o.dx + s.dx) + a.dx)
                      , c = 1 / 6 * (r.dv + 2 * (o.dv + s.dv) + a.dv);
                    return n.x = n.x + l * i,
                    n.v = n.v + c * i,
                    n
                }
                return function e(t, i, r) {
                    var o, s, a, l = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    }, c = [0], u = 0;
                    for (t = parseFloat(t) || 500,
                    i = parseFloat(i) || 20,
                    r = r || null,
                    l.tension = t,
                    l.friction = i,
                    (o = null !== r) ? s = (u = e(t, i)) / r * .016 : s = .016; a = n(a || l, s),
                    c.push(1 + a.x),
                    u += 16,
                    Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4; )
                        ;
                    return o ? function(e) {
                        return c[e * (c.length - 1) | 0]
                    }
                    : u
                }
            }();
            v.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            },
            u.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(e, t) {
                v.Easings[t[0]] = s.apply(null, t[1])
            });
            var b = v.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < b.Lists.colors.length; e++) {
                            var t = "color" === b.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            b.Hooks.templates[b.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var n, i, r;
                        if (d)
                            for (n in b.Hooks.templates) {
                                r = (i = b.Hooks.templates[n])[0].split(" ");
                                var o = i[1].match(b.RegEx.valueSplit);
                                "Color" === r[0] && (r.push(r.shift()),
                                o.push(o.shift()),
                                b.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                            }
                        for (n in b.Hooks.templates)
                            for (var e in r = (i = b.Hooks.templates[n])[0].split(" ")) {
                                var s = n + r[e]
                                  , a = e;
                                b.Hooks.registered[s] = [n, a]
                            }
                    },
                    getRoot: function(e) {
                        var t = b.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]),
                        b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]),
                        t
                    },
                    extractValue: function(e, t) {
                        var n = b.Hooks.registered[e];
                        if (n) {
                            var i = n[0]
                              , r = n[1];
                            return (t = b.Hooks.cleanRootPropertyValue(i, t)).toString().match(b.RegEx.valueSplit)[r]
                        }
                        return t
                    },
                    injectValue: function(e, t, n) {
                        var i = b.Hooks.registered[e];
                        if (i) {
                            var r, o = i[0], s = i[1];
                            return (r = (n = b.Hooks.cleanRootPropertyValue(o, n)).toString().match(b.RegEx.valueSplit))[s] = t,
                            r.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, n) {
                            switch (e) {
                            case "name":
                                return "clip";
                            case "extract":
                                var i;
                                return b.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : i = (i = n.toString().match(b.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n,
                                i;
                            case "inject":
                                return "rect(" + n + ")"
                            }
                        },
                        blur: function(e, t, n) {
                            switch (e) {
                            case "name":
                                return v.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var i = parseFloat(n);
                                if (!i && 0 !== i) {
                                    var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    i = r ? r[1] : 0
                                }
                                return i;
                            case "inject":
                                return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        },
                        opacity: function(e, t, n) {
                            if (8 >= d)
                                switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i ? i[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1,
                                    parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                }
                            else
                                switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return n
                                }
                        }
                    },
                    register: function() {
                        9 >= d || v.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                        for (var e = 0; e < b.Lists.transformsBase.length; e++)
                            !function() {
                                var t = b.Lists.transformsBase[e];
                                b.Normalizations.registered[t] = function(e, n, r) {
                                    switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return o(n) === i || o(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : o(n).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var s = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            s = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                            break;
                                        case "scal":
                                        case "scale":
                                            v.State.isAndroid && o(n).transformCache[t] === i && 1 > r && (r = 1),
                                            s = !/(\d)$/i.test(r);
                                            break;
                                        case "skew":
                                            s = !/(deg|\d)$/i.test(r);
                                            break;
                                        case "rotate":
                                            s = !/(deg|\d)$/i.test(r)
                                        }
                                        return s || (o(n).transformCache[t] = "(" + r + ")"),
                                        o(n).transformCache[t]
                                    }
                                }
                            }();
                        for (e = 0; e < b.Lists.colors.length; e++)
                            !function() {
                                var t = b.Lists.colors[e];
                                b.Normalizations.registered[t] = function(e, n, r) {
                                    switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var o;
                                        if (b.RegEx.wrappedValueAlreadyExtracted.test(r))
                                            o = r;
                                        else {
                                            var s, a = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(r) ? s = a[r] !== i ? a[r] : a.black : b.RegEx.isHex.test(r) ? s = "rgb(" + b.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (s = a.black),
                                            o = (s || r).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= d || 3 !== o.split(" ").length || (o += " 1"),
                                        o;
                                    case "inject":
                                        return 8 >= d ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"),
                                        (8 >= d ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (d || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"),
                        new RegExp("^(" + t + ")$","i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (v.State.prefixMatches[e])
                            return [v.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                            var r;
                            if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }),
                            h.isString(v.State.prefixElement.style[r]))
                                return v.State.prefixMatches[e] = r,
                                [r, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t;
                        return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                            return t + t + n + n + i + i
                        }),
                        (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function(e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    },
                    removeClass: function(e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)","gi"), " ")
                    }
                },
                getPropertyValue: function(e, n, r, s) {
                    function a(e, n) {
                        function r() {
                            f && b.setPropertyValue(e, "display", "none")
                        }
                        var l = 0;
                        if (8 >= d)
                            l = u.css(e, n);
                        else {
                            var c, f = !1;
                            if (/^(width|height)$/.test(n) && 0 === b.getPropertyValue(e, "display") && (f = !0,
                            b.setPropertyValue(e, "display", b.Values.getDisplayType(e))),
                            !s) {
                                if ("height" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var h = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                    return r(),
                                    h
                                }
                                if ("width" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var p = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                    return r(),
                                    p
                                }
                            }
                            c = o(e) === i ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null),
                            "borderColor" === n && (n = "borderTopColor"),
                            ("" === (l = 9 === d && "filter" === n ? c.getPropertyValue(n) : c[n]) || null === l) && (l = e.style[n]),
                            r()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                            var g = a(e, "position");
                            ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = u(e).position()[n] + "px")
                        }
                        return l
                    }
                    var l;
                    if (b.Hooks.registered[n]) {
                        var c = n
                          , f = b.Hooks.getRoot(c);
                        r === i && (r = b.getPropertyValue(e, b.Names.prefixCheck(f)[0])),
                        b.Normalizations.registered[f] && (r = b.Normalizations.registered[f]("extract", e, r)),
                        l = b.Hooks.extractValue(c, r)
                    } else if (b.Normalizations.registered[n]) {
                        var h, p;
                        "transform" !== (h = b.Normalizations.registered[n]("name", e)) && (p = a(e, b.Names.prefixCheck(h)[0]),
                        b.Values.isCSSNullValue(p) && b.Hooks.templates[n] && (p = b.Hooks.templates[n][1])),
                        l = b.Normalizations.registered[n]("extract", e, p)
                    }
                    if (!/^[\d-]/.test(l))
                        if (o(e) && o(e).isSVG && b.Names.SVGAttribute(n))
                            if (/^(height|width)$/i.test(n))
                                try {
                                    l = e.getBBox()[n]
                                } catch (e) {
                                    l = 0
                                }
                            else
                                l = e.getAttribute(n);
                        else
                            l = a(e, b.Names.prefixCheck(n)[0]);
                    return b.Values.isCSSNullValue(l) && (l = 0),
                    v.debug >= 2 && console.log("Get " + n + ": " + l),
                    l
                },
                setPropertyValue: function(e, n, i, r, s) {
                    var a = n;
                    if ("scroll" === n)
                        s.container ? s.container["scroll" + s.direction] = i : "Left" === s.direction ? t.scrollTo(i, s.alternateValue) : t.scrollTo(s.alternateValue, i);
                    else if (b.Normalizations.registered[n] && "transform" === b.Normalizations.registered[n]("name", e))
                        b.Normalizations.registered[n]("inject", e, i),
                        a = "transform",
                        i = o(e).transformCache[n];
                    else {
                        if (b.Hooks.registered[n]) {
                            var l = n
                              , c = b.Hooks.getRoot(n);
                            r = r || b.getPropertyValue(e, c),
                            i = b.Hooks.injectValue(l, i, r),
                            n = c
                        }
                        if (b.Normalizations.registered[n] && (i = b.Normalizations.registered[n]("inject", e, i),
                        n = b.Normalizations.registered[n]("name", e)),
                        a = b.Names.prefixCheck(n)[0],
                        8 >= d)
                            try {
                                e.style[a] = i
                            } catch (e) {
                                v.debug && console.log("Browser does not support [" + i + "] for [" + a + "]")
                            }
                        else
                            o(e) && o(e).isSVG && b.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[a] = i;
                        v.debug >= 2 && console.log("Set " + n + " (" + a + "): " + i)
                    }
                    return [a, i]
                },
                flushTransformCache: function(e) {
                    function t(t) {
                        return parseFloat(b.getPropertyValue(e, t))
                    }
                    var n = "";
                    if ((d || v.State.isAndroid && !v.State.isChrome) && o(e).isSVG) {
                        var i = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        u.each(o(e).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"),
                            i[e] && (n += e + "(" + i[e].join(" ") + ") ",
                            delete i[e])
                        })
                    } else {
                        var r, s;
                        u.each(o(e).transformCache, function(t) {
                            return r = o(e).transformCache[t],
                            "transformPerspective" === t ? (s = r,
                            !0) : (9 === d && "rotateZ" === t && (t = "rotate"),
                            void (n += t + r + " "))
                        }),
                        s && (n = "perspective" + s + " " + n)
                    }
                    b.setPropertyValue(e, "transform", n)
                }
            };
            b.Hooks.register(),
            b.Normalizations.register(),
            v.hook = function(e, t, n) {
                var s = i;
                return e = r(e),
                u.each(e, function(e, r) {
                    if (o(r) === i && v.init(r),
                    n === i)
                        s === i && (s = v.CSS.getPropertyValue(r, t));
                    else {
                        var a = v.CSS.setPropertyValue(r, t, n);
                        "transform" === a[0] && v.CSS.flushTransformCache(r),
                        s = a
                    }
                }),
                s
            }
            ;
            var w = function() {
                function e() {
                    return d ? k.promise || null : f
                }
                function s() {
                    function e(e) {
                        function f(e, t) {
                            var n = i
                              , r = i
                              , o = i;
                            return h.isArray(e) ? (n = e[0],
                            !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? o = e[1] : (h.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (r = t ? e[1] : a(e[1], c.duration),
                            e[2] !== i && (o = e[2]))) : n = e,
                            t || (r = r || c.easing),
                            h.isFunction(n) && (n = n.call(s, S, T)),
                            h.isFunction(o) && (o = o.call(s, S, T)),
                            [n || 0, r, o]
                        }
                        function p(e, t) {
                            var n, i;
                            return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                return n = e,
                                ""
                            }),
                            n || (n = b.Values.getUnitType(e)),
                            [i, n]
                        }
                        function g() {
                            var e = {
                                myParent: s.parentNode || n.body,
                                position: b.getPropertyValue(s, "position"),
                                fontSize: b.getPropertyValue(s, "fontSize")
                            }
                              , i = e.position === L.lastPosition && e.myParent === L.lastParent
                              , r = e.fontSize === L.lastFontSize;
                            L.lastParent = e.myParent,
                            L.lastPosition = e.position,
                            L.lastFontSize = e.fontSize;
                            var a = 100
                              , l = {};
                            if (r && i)
                                l.emToPx = L.lastEmToPx,
                                l.percentToPxWidth = L.lastPercentToPxWidth,
                                l.percentToPxHeight = L.lastPercentToPxHeight;
                            else {
                                var c = o(s).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                v.init(c),
                                e.myParent.appendChild(c),
                                u.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                    v.CSS.setPropertyValue(c, t, "hidden")
                                }),
                                v.CSS.setPropertyValue(c, "position", e.position),
                                v.CSS.setPropertyValue(c, "fontSize", e.fontSize),
                                v.CSS.setPropertyValue(c, "boxSizing", "content-box"),
                                u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                    v.CSS.setPropertyValue(c, t, a + "%")
                                }),
                                v.CSS.setPropertyValue(c, "paddingLeft", a + "em"),
                                l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(c, "width", null, !0)) || 1) / a,
                                l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(c, "height", null, !0)) || 1) / a,
                                l.emToPx = L.lastEmToPx = (parseFloat(b.getPropertyValue(c, "paddingLeft")) || 1) / a,
                                e.myParent.removeChild(c)
                            }
                            return null === L.remToPx && (L.remToPx = parseFloat(b.getPropertyValue(n.body, "fontSize")) || 16),
                            null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100,
                            L.vhToPx = parseFloat(t.innerHeight) / 100),
                            l.remToPx = L.remToPx,
                            l.vwToPx = L.vwToPx,
                            l.vhToPx = L.vhToPx,
                            v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), s),
                            l
                        }
                        if (c.begin && 0 === S)
                            try {
                                c.begin.call(m, m)
                            } catch (e) {
                                setTimeout(function() {
                                    throw e
                                }, 1)
                            }
                        if ("scroll" === E) {
                            var w, x, C, A = /^x$/i.test(c.axis) ? "Left" : "Top", O = parseFloat(c.offset) || 0;
                            c.container ? h.isWrapped(c.container) || h.isNode(c.container) ? (c.container = c.container[0] || c.container,
                            C = (w = c.container["scroll" + A]) + u(s).position()[A.toLowerCase()] + O) : c.container = null : (w = v.State.scrollAnchor[v.State["scrollProperty" + A]],
                            x = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]],
                            C = u(s).offset()[A.toLowerCase()] + O),
                            d = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: w,
                                    currentValue: w,
                                    endValue: C,
                                    unitType: "",
                                    easing: c.easing,
                                    scrollData: {
                                        container: c.container,
                                        direction: A,
                                        alternateValue: x
                                    }
                                },
                                element: s
                            },
                            v.debug && console.log("tweensContainer (scroll): ", d.scroll, s)
                        } else if ("reverse" === E) {
                            if (!o(s).tweensContainer)
                                return void u.dequeue(s, c.queue);
                            "none" === o(s).opts.display && (o(s).opts.display = "auto"),
                            "hidden" === o(s).opts.visibility && (o(s).opts.visibility = "visible"),
                            o(s).opts.loop = !1,
                            o(s).opts.begin = null,
                            o(s).opts.complete = null,
                            _.easing || delete c.easing,
                            _.duration || delete c.duration,
                            c = u.extend({}, o(s).opts, c);
                            var P = u.extend(!0, {}, o(s).tweensContainer);
                            for (var D in P)
                                if ("element" !== D) {
                                    var I = P[D].startValue;
                                    P[D].startValue = P[D].currentValue = P[D].endValue,
                                    P[D].endValue = I,
                                    h.isEmptyObject(_) || (P[D].easing = c.easing),
                                    v.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(P[D]), s)
                                }
                            d = P
                        } else if ("start" === E) {
                            for (var N in o(s).tweensContainer && !0 === o(s).isAnimating && (P = o(s).tweensContainer),
                            u.each(y, function(e, t) {
                                if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                    var n = f(t, !0)
                                      , r = n[0]
                                      , o = n[1]
                                      , s = n[2];
                                    if (b.RegEx.isHex.test(r)) {
                                        for (var a = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(r), c = s ? b.Values.hexToRgb(s) : i, u = 0; u < a.length; u++) {
                                            var d = [l[u]];
                                            o && d.push(o),
                                            c !== i && d.push(c[u]),
                                            y[e + a[u]] = d
                                        }
                                        delete y[e]
                                    }
                                }
                            }),
                            y) {
                                var M = f(y[N])
                                  , H = M[0]
                                  , $ = M[1]
                                  , W = M[2];
                                N = b.Names.camelCase(N);
                                var R = b.Hooks.getRoot(N)
                                  , q = !1;
                                if (o(s).isSVG || "tween" === R || !1 !== b.Names.prefixCheck(R)[1] || b.Normalizations.registered[R] !== i) {
                                    (c.display !== i && null !== c.display && "none" !== c.display || c.visibility !== i && "hidden" !== c.visibility) && /opacity|filter/.test(N) && !W && 0 !== H && (W = 0),
                                    c._cacheValues && P && P[N] ? (W === i && (W = P[N].endValue + P[N].unitType),
                                    q = o(s).rootPropertyValueCache[R]) : b.Hooks.registered[N] ? W === i ? (q = b.getPropertyValue(s, R),
                                    W = b.getPropertyValue(s, N, q)) : q = b.Hooks.templates[R][1] : W === i && (W = b.getPropertyValue(s, N));
                                    var F, B, V, Y = !1;
                                    if (W = (F = p(N, W))[0],
                                    V = F[1],
                                    H = (F = p(N, H))[0].replace(/^([+-\/*])=/, function(e, t) {
                                        return Y = t,
                                        ""
                                    }),
                                    B = F[1],
                                    W = parseFloat(W) || 0,
                                    H = parseFloat(H) || 0,
                                    "%" === B && (/^(fontSize|lineHeight)$/.test(N) ? (H /= 100,
                                    B = "em") : /^scale/.test(N) ? (H /= 100,
                                    B = "") : /(Red|Green|Blue)$/i.test(N) && (H = H / 100 * 255,
                                    B = "")),
                                    /[\/*]/.test(Y))
                                        B = V;
                                    else if (V !== B && 0 !== W)
                                        if (0 === H)
                                            B = V;
                                        else {
                                            r = r || g();
                                            var X = /margin|padding|left|right|width|text|word|letter/i.test(N) || /X$/.test(N) || "x" === N ? "x" : "y";
                                            switch (V) {
                                            case "%":
                                                W *= "x" === X ? r.percentToPxWidth : r.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                W *= r[V + "ToPx"]
                                            }
                                            switch (B) {
                                            case "%":
                                                W *= 1 / ("x" === X ? r.percentToPxWidth : r.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                W *= 1 / r[B + "ToPx"]
                                            }
                                        }
                                    switch (Y) {
                                    case "+":
                                        H = W + H;
                                        break;
                                    case "-":
                                        H = W - H;
                                        break;
                                    case "*":
                                        H *= W;
                                        break;
                                    case "/":
                                        H = W / H
                                    }
                                    d[N] = {
                                        rootPropertyValue: q,
                                        startValue: W,
                                        currentValue: W,
                                        endValue: H,
                                        unitType: B,
                                        easing: $
                                    },
                                    v.debug && console.log("tweensContainer (" + N + "): " + JSON.stringify(d[N]), s)
                                } else
                                    v.debug && console.log("Skipping [" + R + "] due to a lack of browser support.")
                            }
                            d.element = s
                        }
                        d.element && (b.Values.addClass(s, "velocity-animating"),
                        j.push(d),
                        "" === c.queue && (o(s).tweensContainer = d,
                        o(s).opts = c),
                        o(s).isAnimating = !0,
                        S === T - 1 ? (v.State.calls.push([j, m, c, null, k.resolver]),
                        !1 === v.State.isTicking && (v.State.isTicking = !0,
                        l())) : S++)
                    }
                    var r, s = this, c = u.extend({}, v.defaults, _), d = {};
                    switch (o(s) === i && v.init(s),
                    parseFloat(c.delay) && !1 !== c.queue && u.queue(s, c.queue, function(e) {
                        v.velocityQueueEntryFlag = !0,
                        o(s).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(c.delay)),
                            next: e
                        }
                    }),
                    c.duration.toString().toLowerCase()) {
                    case "fast":
                        c.duration = 200;
                        break;
                    case "normal":
                        c.duration = g;
                        break;
                    case "slow":
                        c.duration = 600;
                        break;
                    default:
                        c.duration = parseFloat(c.duration) || 1
                    }
                    !1 !== v.mock && (!0 === v.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(v.mock) || 1,
                    c.delay *= parseFloat(v.mock) || 1)),
                    c.easing = a(c.easing, c.duration),
                    c.begin && !h.isFunction(c.begin) && (c.begin = null),
                    c.progress && !h.isFunction(c.progress) && (c.progress = null),
                    c.complete && !h.isFunction(c.complete) && (c.complete = null),
                    c.display !== i && null !== c.display && (c.display = c.display.toString().toLowerCase(),
                    "auto" === c.display && (c.display = v.CSS.Values.getDisplayType(s))),
                    c.visibility !== i && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()),
                    c.mobileHA = c.mobileHA && v.State.isMobile && !v.State.isGingerbread,
                    !1 === c.queue ? c.delay ? setTimeout(e, c.delay) : e() : u.queue(s, c.queue, function(t, n) {
                        return !0 === n ? (k.promise && k.resolver(m),
                        !0) : (v.velocityQueueEntryFlag = !0,
                        void e())
                    }),
                    "" !== c.queue && "fx" !== c.queue || "inprogress" === u.queue(s)[0] || u.dequeue(s)
                }
                var d, f, p, m, y, _, x = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));
                if (h.isWrapped(this) ? (d = !1,
                p = 0,
                m = this,
                f = this) : (d = !0,
                p = 1,
                m = x ? arguments[0].elements || arguments[0].e : arguments[0]),
                m = r(m)) {
                    x ? (y = arguments[0].properties || arguments[0].p,
                    _ = arguments[0].options || arguments[0].o) : (y = arguments[p],
                    _ = arguments[p + 1]);
                    var T = m.length
                      , S = 0;
                    if (!/^(stop|finish)$/i.test(y) && !u.isPlainObject(_)) {
                        _ = {};
                        for (var C = p + 1; C < arguments.length; C++)
                            h.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? h.isString(arguments[C]) || h.isArray(arguments[C]) ? _.easing = arguments[C] : h.isFunction(arguments[C]) && (_.complete = arguments[C]) : _.duration = arguments[C]
                    }
                    var E, k = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    switch (d && v.Promise && (k.promise = new v.Promise(function(e, t) {
                        k.resolver = e,
                        k.rejecter = t
                    }
                    )),
                    y) {
                    case "scroll":
                        E = "scroll";
                        break;
                    case "reverse":
                        E = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        u.each(m, function(e, t) {
                            o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout),
                            o(t).delayTimer.next && o(t).delayTimer.next(),
                            delete o(t).delayTimer)
                        });
                        var A = [];
                        return u.each(v.State.calls, function(e, t) {
                            t && u.each(t[1], function(n, r) {
                                var s = _ === i ? "" : _;
                                return !0 !== s && t[2].queue !== s && (_ !== i || !1 !== t[2].queue) || void u.each(m, function(n, i) {
                                    i === r && ((!0 === _ || h.isString(_)) && (u.each(u.queue(i, h.isString(_) ? _ : ""), function(e, t) {
                                        h.isFunction(t) && t(null, !0)
                                    }),
                                    u.queue(i, h.isString(_) ? _ : "", [])),
                                    "stop" === y ? (o(i) && o(i).tweensContainer && !1 !== s && u.each(o(i).tweensContainer, function(e, t) {
                                        t.endValue = t.currentValue
                                    }),
                                    A.push(e)) : "finish" === y && (t[2].duration = 1))
                                })
                            })
                        }),
                        "stop" === y && (u.each(A, function(e, t) {
                            c(t, !0)
                        }),
                        k.promise && k.resolver(m)),
                        e();
                    default:
                        if (!u.isPlainObject(y) || h.isEmptyObject(y)) {
                            if (h.isString(y) && v.Redirects[y]) {
                                var O = (N = u.extend({}, _)).duration
                                  , P = N.delay || 0;
                                return !0 === N.backwards && (m = u.extend(!0, [], m).reverse()),
                                u.each(m, function(e, t) {
                                    parseFloat(N.stagger) ? N.delay = P + parseFloat(N.stagger) * e : h.isFunction(N.stagger) && (N.delay = P + N.stagger.call(t, e, T)),
                                    N.drag && (N.duration = parseFloat(O) || (/^(callout|transition)/.test(y) ? 1e3 : g),
                                    N.duration = Math.max(N.duration * (N.backwards ? 1 - e / T : (e + 1) / T), .75 * N.duration, 200)),
                                    v.Redirects[y].call(t, t, N || {}, e, T, m, k.promise ? k : i)
                                }),
                                e()
                            }
                            var D = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return k.promise ? k.rejecter(new Error(D)) : console.log(D),
                            e()
                        }
                        E = "start"
                    }
                    var I, N, L = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    }, j = [];
                    if (u.each(m, function(e, t) {
                        h.isNode(t) && s.call(t)
                    }),
                    (N = u.extend({}, v.defaults, _)).loop = parseInt(N.loop),
                    I = 2 * N.loop - 1,
                    N.loop)
                        for (var M = 0; I > M; M++) {
                            var H = {
                                delay: N.delay,
                                progress: N.progress
                            };
                            M === I - 1 && (H.display = N.display,
                            H.visibility = N.visibility,
                            H.complete = N.complete),
                            w(m, "reverse", H)
                        }
                    return e()
                }
            };
            (v = u.extend(w, v)).animate = w;
            var _ = t.requestAnimationFrame || f;
            return v.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
                n.hidden ? (_ = function(e) {
                    return setTimeout(function() {
                        e(!0)
                    }, 16)
                }
                ,
                l()) : _ = t.requestAnimationFrame || f
            }),
            e.Velocity = v,
            e !== t && (e.fn.velocity = w,
            e.fn.velocity.defaults = v.defaults),
            u.each(["Down", "Up"], function(e, t) {
                v.Redirects["slide" + t] = function(e, n, r, o, s, a) {
                    var l = u.extend({}, n)
                      , c = l.begin
                      , d = l.complete
                      , f = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    }
                      , h = {};
                    l.display === i && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"),
                    l.begin = function() {
                        for (var n in c && c.call(s, s),
                        f) {
                            h[n] = e.style[n];
                            var i = v.CSS.getPropertyValue(e, n);
                            f[n] = "Down" === t ? [i, 0] : [0, i]
                        }
                        h.overflow = e.style.overflow,
                        e.style.overflow = "hidden"
                    }
                    ,
                    l.complete = function() {
                        for (var t in h)
                            e.style[t] = h[t];
                        d && d.call(s, s),
                        a && a.resolver(s)
                    }
                    ,
                    v(e, f, l)
                }
            }),
            u.each(["In", "Out"], function(e, t) {
                v.Redirects["fade" + t] = function(e, n, r, o, s, a) {
                    var l = u.extend({}, n)
                      , c = {
                        opacity: "In" === t ? 1 : 0
                    }
                      , d = l.complete;
                    l.complete = r !== o - 1 ? l.begin = null : function() {
                        d && d.call(s, s),
                        a && a.resolver(s)
                    }
                    ,
                    l.display === i && (l.display = "In" === t ? "auto" : "none"),
                    v(this, c, l)
                }
            }),
            v
        }
        jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, document)
})),
function(e) {
    WOW = function() {
        return {
            init: function() {
                var t = []
                  , n = 1;
                function i() {
                    var n = window.innerHeight
                      , i = window.scrollY;
                    e(".wow").each(function() {
                        if ("visible" != e(this).css("visibility") && (n + i - 100 > r(this) && i < r(this) || n + i - 100 > r(this) + e(this).height() && i < r(this) + e(this).height() || n + i == e(document).height() && r(this) + 100 > e(document).height())) {
                            var o = e(this).index(".wow")
                              , s = e(this).attr("data-wow-delay");
                            if (s) {
                                s = e(this).attr("data-wow-delay").slice(0, -1);
                                var a = this;
                                parseFloat(s);
                                e(a).addClass("animated"),
                                e(a).css({
                                    visibility: "visible"
                                }),
                                e(a).css({
                                    "animation-delay": s
                                }),
                                e(a).css({
                                    "animation-name": t[o]
                                });
                                var l = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                e(this).attr("data-wow-delay") && (l += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                a = this;
                                setTimeout(function() {
                                    e(a).removeClass("animated")
                                }, l)
                            } else {
                                e(this).addClass("animated"),
                                e(this).css({
                                    visibility: "visible"
                                }),
                                e(this).css({
                                    "animation-name": t[o]
                                });
                                l = 1e3 * e(this).css("animation-duration").slice(0, -1),
                                a = this;
                                setTimeout(function() {
                                    e(a).removeClass("animated")
                                }, l)
                            }
                        }
                    })
                }
                function r(e) {
                    var t = e.getBoundingClientRect()
                      , n = document.body
                      , i = document.documentElement
                      , r = window.pageYOffset || i.scrollTop || n.scrollTop
                      , o = i.clientTop || n.clientTop || 0
                      , s = t.top + r - o;
                    return Math.round(s)
                }
                e(".wow").each(function() {
                    e(this).css({
                        visibility: "hidden"
                    }),
                    t[e(this).index(".wow")] = e(this).css("animation-name"),
                    e(this).css({
                        "animation-name": "none"
                    })
                }),
                e(window).scroll(function() {
                    var t, o;
                    n ? (t = window.innerHeight,
                    o = window.scrollY,
                    e(".wow.animated").each(function() {
                        if (t + o - 100 > r(this) && o > r(this) + 100 || t + o - 100 < r(this) && o < r(this) + 100 || r(this) + e(this).height > e(document).height() - 100)
                            e(this).removeClass("animated"),
                            e(this).css({
                                "animation-name": "none"
                            }),
                            e(this).css({
                                visibility: "hidden"
                            });
                        else {
                            var n = 1e3 * e(this).css("animation-duration").slice(0, -1);
                            e(this).attr("data-wow-delay") && (n += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                            var i = this;
                            setTimeout(function() {
                                e(i).removeClass("animated")
                            }, n)
                        }
                    }),
                    i(),
                    n--) : i()
                }),
                e(".wow").each(function() {
                    var n = e(this).index(".wow")
                      , i = e(this).attr("data-wow-delay");
                    i ? (i = e(this).attr("data-wow-delay").slice(0, -1),
                    parseFloat(i),
                    e(this).addClass("animated"),
                    e(this).css({
                        visibility: "visible"
                    }),
                    e(this).css({
                        "animation-delay": i + "s"
                    }),
                    e(this).css({
                        "animation-name": t[n]
                    })) : (e(this).addClass("animated"),
                    e(this).css({
                        visibility: "visible"
                    }),
                    e(this).css({
                        "animation-name": t[n]
                    }))
                })
            }
        }
    }
}(jQuery),
function(e) {
    e(window).on("scroll", function() {
        var t = e(".navbar");
        t.length && (t.offset().top > 50 ? e(".scrolling-navbar").addClass("top-nav-collapse") : e(".scrolling-navbar").removeClass("top-nav-collapse"))
    })
}(jQuery),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function() {
        return e.Waves = t.call(e),
        e.Waves
    }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
}("object" == typeof global ? global : this, function() {
    "use strict";
    var e = e || {}
      , t = document.querySelectorAll.bind(document)
      , n = Object.prototype.toString
      , i = "ontouchstart"in window;
    function r(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }
    function o(e) {
        var i, o = n.call(e);
        return "[object String]" === o ? t(e) : r(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(o) && e.hasOwnProperty("length") ? e : r(i = e) && i.nodeType > 0 ? [e] : []
    }
    function s(e) {
        var t, n, i = {
            top: 0,
            left: 0
        }, r = e && e.ownerDocument;
        return t = r.documentElement,
        void 0 !== e.getBoundingClientRect && (i = e.getBoundingClientRect()),
        n = function(e) {
            return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
            var t
        }(r),
        {
            top: i.top + n.pageYOffset - t.clientTop,
            left: i.left + n.pageXOffset - t.clientLeft
        }
    }
    function a(e) {
        var t = "";
        for (var n in e)
            e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
        return t
    }
    var l = {
        duration: 750,
        delay: 200,
        show: function(e, t, n) {
            if (2 === e.button)
                return !1;
            t = t || this;
            var i = document.createElement("div");
            i.className = "waves-ripple waves-rippling",
            t.appendChild(i);
            var r = s(t)
              , o = 0
              , c = 0;
            "touches"in e && e.touches.length ? (o = e.touches[0].pageY - r.top,
            c = e.touches[0].pageX - r.left) : (o = e.pageY - r.top,
            c = e.pageX - r.left),
            c = c >= 0 ? c : 0,
            o = o >= 0 ? o : 0;
            var u = "scale(" + t.clientWidth / 100 * 3 + ")"
              , d = "translate(0,0)";
            n && (d = "translate(" + n.x + "px, " + n.y + "px)"),
            i.setAttribute("data-hold", Date.now()),
            i.setAttribute("data-x", c),
            i.setAttribute("data-y", o),
            i.setAttribute("data-scale", u),
            i.setAttribute("data-translate", d);
            var f = {
                top: o + "px",
                left: c + "px"
            };
            i.classList.add("waves-notransition"),
            i.setAttribute("style", a(f)),
            i.classList.remove("waves-notransition"),
            f["-webkit-transform"] = u + " " + d,
            f["-moz-transform"] = u + " " + d,
            f["-ms-transform"] = u + " " + d,
            f["-o-transform"] = u + " " + d,
            f.transform = u + " " + d,
            f.opacity = "1";
            var h = "mousemove" === e.type ? 2500 : l.duration;
            f["-webkit-transition-duration"] = h + "ms",
            f["-moz-transition-duration"] = h + "ms",
            f["-o-transition-duration"] = h + "ms",
            f["transition-duration"] = h + "ms",
            i.setAttribute("style", a(f))
        },
        hide: function(e, t) {
            for (var n = (t = t || this).getElementsByClassName("waves-rippling"), r = 0, o = n.length; r < o; r++)
                u(e, t, n[r]);
            i && (t.removeEventListener("touchend", l.hide),
            t.removeEventListener("touchcancel", l.hide)),
            t.removeEventListener("mouseup", l.hide),
            t.removeEventListener("mouseleave", l.hide)
        }
    }
      , c = {
        input: function(e) {
            var t = e.parentNode;
            if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                n.className = e.className + " waves-input-wrapper",
                e.className = "waves-button-input",
                t.replaceChild(n, e),
                n.appendChild(e);
                var i = window.getComputedStyle(e, null)
                  , r = i.color
                  , o = i.backgroundColor;
                n.setAttribute("style", "color:" + r + ";background:" + o),
                e.setAttribute("style", "background-color:rgba(0,0,0,0);")
            }
        },
        img: function(e) {
            var t = e.parentNode;
            if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                t.replaceChild(n, e),
                n.appendChild(e)
            }
        }
    };
    function u(e, t, n) {
        if (n) {
            n.classList.remove("waves-rippling");
            var i = n.getAttribute("data-x")
              , r = n.getAttribute("data-y")
              , o = n.getAttribute("data-scale")
              , s = n.getAttribute("data-translate")
              , c = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
            c < 0 && (c = 0),
            "mousemove" === e.type && (c = 150);
            var u = "mousemove" === e.type ? 2500 : l.duration;
            setTimeout(function() {
                var e = {
                    top: r + "px",
                    left: i + "px",
                    opacity: "0",
                    "-webkit-transition-duration": u + "ms",
                    "-moz-transition-duration": u + "ms",
                    "-o-transition-duration": u + "ms",
                    "transition-duration": u + "ms",
                    "-webkit-transform": o + " " + s,
                    "-moz-transform": o + " " + s,
                    "-ms-transform": o + " " + s,
                    "-o-transform": o + " " + s,
                    transform: o + " " + s
                };
                n.setAttribute("style", a(e)),
                setTimeout(function() {
                    try {
                        t.removeChild(n)
                    } catch (e) {
                        return !1
                    }
                }, u)
            }, c)
        }
    }
    var d = {
        touches: 0,
        allowEvent: function(e) {
            var t = !0;
            return /^(mousedown|mousemove)$/.test(e.type) && d.touches && (t = !1),
            t
        },
        registerEvent: function(e) {
            var t = e.type;
            "touchstart" === t ? d.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                d.touches && (d.touches -= 1)
            }, 500)
        }
    };
    function f(e) {
        var t = function(e) {
            if (!1 === d.allowEvent(e))
                return null;
            for (var t = null, n = e.target || e.srcElement; n.parentElement; ) {
                if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                    t = n;
                    break
                }
                n = n.parentElement
            }
            return t
        }(e);
        if (null !== t) {
            if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled"))
                return;
            if (d.registerEvent(e),
            "touchstart" === e.type && l.delay) {
                var n = !1
                  , r = setTimeout(function() {
                    r = null,
                    l.show(e, t)
                }, l.delay)
                  , o = function(i) {
                    r && (clearTimeout(r),
                    r = null,
                    l.show(e, t)),
                    n || (n = !0,
                    l.hide(i, t)),
                    a()
                }
                  , s = function(e) {
                    r && (clearTimeout(r),
                    r = null),
                    o(e),
                    a()
                };
                t.addEventListener("touchmove", s, !1),
                t.addEventListener("touchend", o, !1),
                t.addEventListener("touchcancel", o, !1);
                var a = function() {
                    t.removeEventListener("touchmove", s),
                    t.removeEventListener("touchend", o),
                    t.removeEventListener("touchcancel", o)
                }
            } else
                l.show(e, t),
                i && (t.addEventListener("touchend", l.hide, !1),
                t.addEventListener("touchcancel", l.hide, !1)),
                t.addEventListener("mouseup", l.hide, !1),
                t.addEventListener("mouseleave", l.hide, !1)
        }
    }
    return e.init = function(e) {
        var t = document.body;
        "duration"in (e = e || {}) && (l.duration = e.duration),
        "delay"in e && (l.delay = e.delay),
        i && (t.addEventListener("touchstart", f, !1),
        t.addEventListener("touchcancel", d.registerEvent, !1),
        t.addEventListener("touchend", d.registerEvent, !1)),
        t.addEventListener("mousedown", f, !1)
    }
    ,
    e.attach = function(e, t) {
        var i, r;
        e = o(e),
        "[object Array]" === n.call(t) && (t = t.join(" ")),
        t = t ? " " + t : "";
        for (var s = 0, a = e.length; s < a; s++)
            r = (i = e[s]).tagName.toLowerCase(),
            -1 !== ["input", "img"].indexOf(r) && (c[r](i),
            i = i.parentElement),
            -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + t)
    }
    ,
    e.ripple = function(e, t) {
        var n = (e = o(e)).length;
        if ((t = t || {}).wait = t.wait || 0,
        t.position = t.position || null,
        n)
            for (var i, r, a, c = {}, u = 0, d = {
                type: "mousedown",
                button: 1
            }, f = function(e, t) {
                return function() {
                    l.hide(e, t)
                }
            }; u < n; u++)
                if (i = e[u],
                r = t.position || {
                    x: i.clientWidth / 2,
                    y: i.clientHeight / 2
                },
                a = s(i),
                c.x = a.left + r.x,
                c.y = a.top + r.y,
                d.pageX = c.x,
                d.pageY = c.y,
                l.show(d, i),
                t.wait >= 0 && null !== t.wait) {
                    setTimeout(f({
                        type: "mouseup",
                        button: 1
                    }, i), t.wait)
                }
    }
    ,
    e.calm = function(e) {
        for (var t = {
            type: "mouseup",
            button: 1
        }, n = 0, i = (e = o(e)).length; n < i; n++)
            l.hide(t, e[n])
    }
    ,
    e.displayEffect = function(t) {
        console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),
        e.init(t)
    }
    ,
    e
}),
Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]),
Waves.attach(".btn-flat", ["waves-effect"]),
Waves.attach(".chip", ["waves-effect"]),
Waves.attach(".view a .mask", ["waves-light"]),
Waves.attach(".waves-light", ["waves-light"]),
Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]),
Waves.attach(".pager li a", ["waves-light"]),
Waves.attach(".pagination .page-item .page-link", ["waves-effect"]),
Waves.init();
var _this = void 0;
!function(e) {
    var t, n, i = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function(e) {
        return "input[type=".concat(e, "]")
    }).join(", "), ", textarea"), r = function(e) {
        var t = e.siblings("label, i")
          , n = e.val().length
          , i = e.attr("placeholder");
        t["".concat(n || i ? "add" : "remove", "Class")]("active")
    }, o = function(e) {
        if (e.hasClass("validate")) {
            var t = e.val()
              , n = !t.length
              , i = !e[0].validity.badInput;
            if (n && i)
                e.removeClass("valid").removeClass("invalid");
            else {
                var r = e.is(":valid")
                  , o = Number(e.attr("length")) || 0;
                r && (!o || o > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
            }
        }
    }, s = function() {
        var t = e(_this);
        if (t.val().length) {
            var n = e(".hiddendiv")
              , i = t.css("font-family")
              , r = t.css("font-size");
            r && n.css("font-size", r),
            i && n.css("font-family", i),
            "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"),
            n.text("".concat(t.val(), "\n"));
            var o = n.html().replace(/\n/g, "<br>");
            n.html(o),
            n.css("width", t.is(":visible") ? t.width() : e(window).width() / 2),
            t.css("height", n.height())
        }
    };
    e(i).each(function(t, n) {
        var i = e(n)
          , o = i.siblings("label, i");
        r(i),
        n.validity.badInput && o.addClass("active")
    }),
    e(document).on("focus", i, function(t) {
        e(t.target).siblings("label, i").addClass("active")
    }),
    e(document).on("blur", i, function(t) {
        var n = e(t.target)
          , i = !n.val()
          , r = !t.target.validity.badInput
          , s = void 0 === n.attr("placeholder");
        i && r && s && n.siblings("label, i").removeClass("active"),
        o(n)
    }),
    e(document).on("change", i, function(t) {
        var n = e(t.target);
        r(n),
        o(n)
    }),
    e("input[autofocus]").siblings("label, i").addClass("active"),
    e(document).on("reset", function(t) {
        var n = e(t.target);
        n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid").each(function(t, n) {
            var i = e(n)
              , r = !i.val()
              , o = !i.attr("placeholder");
            r && o && i.siblings("label, i").removeClass("active")
        }),
        n.find("select.initialized").each(function(t, n) {
            var i = e(n)
              , r = i.siblings("input.select-dropdown")
              , o = i.children("[selected]").val();
            i.val(o),
            r.val(o)
        }))
    }),
    (n = e(".md-textarea-auto")).length && (t = window.attachEvent ? function(e, t, n) {
        e.attachEvent("on".concat(t), n)
    }
    : function(e, t, n) {
        e.addEventListener(t, n, !1)
    }
    ,
    n.each(function() {
        var e = this;
        function n() {
            e.style.height = "auto",
            e.style.height = "".concat(e.scrollHeight, "px")
        }
        function i() {
            window.setTimeout(n, 0)
        }
        t(e, "change", n),
        t(e, "cut", i),
        t(e, "paste", i),
        t(e, "drop", i),
        t(e, "keydown", i),
        n()
    }));
    var a = e("body");
    if (!e(".hiddendiv").first().length) {
        var l = e('<div class="hiddendiv common"></div>');
        a.append(l)
    }
    e(".materialize-textarea").each(s),
    a.on("keyup keydown", ".materialize-textarea", s)
}(jQuery),
$(document).ready(function() {
    $("body").attr("aria-busy", !0),
    $("#preloader-markup").load("mdb-addons/preloader.html", function() {
        $(window).on("load", function() {
            $("#mdb-preloader").fadeOut("slow"),
            $("body").removeAttr("aria-busy")
        })
    })
}),
function(e) {
    e(document).on("click.card", ".card", function(t) {
        if (e(this).find(".card-reveal").length) {
            var n = e(t.target)
              , i = n.is(".card-reveal .card-title")
              , r = n.is(".card-reveal .card-title i")
              , o = n.is(".card .activator")
              , s = n.is(".card .activator i");
            i || r ? e(this).find(".card-reveal").velocity({
                translateY: 0
            }, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function() {
                    e(this).css({
                        display: "none"
                    })
                }
            }) : (o || s) && e(this).find(".card-reveal").css({
                display: "block"
            }).velocity("stop", !1).velocity({
                translateY: "-100%"
            }, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            })
        }
    }),
    e(".rotate-btn").on("click", function() {
        var t = e(this).attr("data-card");
        e("#".concat(t)).toggleClass("flipped")
    });
    var t = e(".front").outerHeight()
      , n = e(".back").outerHeight();
    t > n ? e(".card-wrapper, .back").height(t) : t > n ? e(".card-wrapper, .front").height(n) : e(".card-wrapper").height(n),
    e(".card-share > a").on("click", function(t) {
        t.preventDefault(),
        e(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
    })
}(jQuery),
function(e) {
    function t() {
        var t = Number(e(this).attr("length"))
          , n = Number(e(this).val().length)
          , i = n <= t;
        e(this).parent().find('span[class="character-counter"]').html("".concat(n, "/").concat(t)),
        function(e, t) {
            var n = t.hasClass("invalid");
            e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"),
            t.addClass("invalid"))
        }(i, e(this))
    }
    function n() {
        e(this).parent().find('span[class="character-counter"]').html("")
    }
    e.fn.characterCounter = function() {
        return this.each(function() {
            var i, r;
            void 0 !== e(this).attr("length") && (e(this).on("input", t),
            e(this).on("focus", t),
            e(this).on("blur", n),
            i = e(this),
            r = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1),
            i.parent().append(r))
        })
    }
    ,
    e(document).ready(function() {
        e("input, textarea").characterCounter()
    })
}(jQuery),
function(e) {
    e(["jquery"], function(e) {
        return function() {
            var t, n, i, r = 0, o = {
                error: "error",
                info: "info",
                success: "success",
                warning: "warning"
            }, s = {
                clear: function(n, i) {
                    var r = d();
                    t || a(r);
                    l(n, r, i) || function(n) {
                        for (var i = t.children(), r = i.length - 1; r >= 0; r--)
                            l(e(i[r]), n)
                    }(r)
                },
                remove: function(n) {
                    var i = d();
                    t || a(i);
                    if (n && 0 === e(":focus", n).length)
                        return void f(n);
                    t.children().length && t.remove()
                },
                error: function(e, t, n) {
                    return u({
                        type: o.error,
                        iconClass: d().iconClasses.error,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                getContainer: a,
                info: function(e, t, n) {
                    return u({
                        type: o.info,
                        iconClass: d().iconClasses.info,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                options: {},
                subscribe: function(e) {
                    n = e
                },
                success: function(e, t, n) {
                    return u({
                        type: o.success,
                        iconClass: d().iconClasses.success,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                version: "2.1.1",
                warning: function(e, t, n) {
                    return u({
                        type: o.warning,
                        iconClass: d().iconClasses.warning,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }
            };
            return s;
            function a(n, i) {
                return n || (n = d()),
                (t = e("#" + n.containerId)).length ? t : (i && (t = function(n) {
                    return (t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(e(n.target)),
                    t
                }(n)),
                t)
            }
            function l(t, n, i) {
                var r = !(!i || !i.force) && i.force;
                return !(!t || !r && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                    duration: n.hideDuration,
                    easing: n.hideEasing,
                    complete: function() {
                        f(t)
                    }
                }),
                !0)
            }
            function c(e) {
                n && n(e)
            }
            function u(n) {
                var o = d()
                  , s = n.iconClass || o.iconClass;
                if (void 0 !== n.optionsOverride && (o = e.extend(o, n.optionsOverride),
                s = n.optionsOverride.iconClass || s),
                !function(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === i)
                            return !0;
                        i = t.message
                    }
                    return !1
                }(o, n)) {
                    r++,
                    t = a(o, !0);
                    var l = null
                      , u = e("<div/>")
                      , h = e("<div/>")
                      , p = e("<div/>")
                      , g = e("<div/>")
                      , m = e(o.closeHtml)
                      , v = {
                        intervalId: null,
                        hideEta: null,
                        maxHideTime: null
                    }
                      , y = {
                        toastId: r,
                        state: "visible",
                        startTime: new Date,
                        options: o,
                        map: n
                    };
                    return n.iconClass && u.addClass(o.toastClass).addClass(s),
                    n.title && (h.append(n.title).addClass(o.titleClass),
                    u.append(h)),
                    n.message && (p.append(n.message).addClass(o.messageClass),
                    u.append(p)),
                    o.closeButton && (m.addClass("toast-close-button").attr("role", "button"),
                    u.prepend(m)),
                    o.progressBar && (g.addClass("toast-progress"),
                    u.prepend(g)),
                    o.newestOnTop ? t.prepend(u) : t.append(u),
                    u.hide(),
                    u[o.showMethod]({
                        duration: o.showDuration,
                        easing: o.showEasing,
                        complete: o.onShown
                    }),
                    o.timeOut > 0 && (l = setTimeout(b, o.timeOut),
                    v.maxHideTime = parseFloat(o.timeOut),
                    v.hideEta = (new Date).getTime() + v.maxHideTime,
                    o.progressBar && (v.intervalId = setInterval(x, 10))),
                    function() {
                        u.hover(_, w),
                        !o.onclick && o.tapToDismiss && u.click(b);
                        o.closeButton && m && m.click(function(e) {
                            e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0),
                            b(!0)
                        });
                        o.onclick && u.click(function() {
                            o.onclick(),
                            b()
                        })
                    }(),
                    c(y),
                    o.debug && console && console.log(y),
                    u
                }
                function b(t) {
                    if (!e(":focus", u).length || t)
                        return clearTimeout(v.intervalId),
                        u[o.hideMethod]({
                            duration: o.hideDuration,
                            easing: o.hideEasing,
                            complete: function() {
                                f(u),
                                o.onHidden && "hidden" !== y.state && o.onHidden(),
                                y.state = "hidden",
                                y.endTime = new Date,
                                c(y)
                            }
                        })
                }
                function w() {
                    (o.timeOut > 0 || o.extendedTimeOut > 0) && (l = setTimeout(b, o.extendedTimeOut),
                    v.maxHideTime = parseFloat(o.extendedTimeOut),
                    v.hideEta = (new Date).getTime() + v.maxHideTime)
                }
                function _() {
                    clearTimeout(l),
                    v.hideEta = 0,
                    u.stop(!0, !0)[o.showMethod]({
                        duration: o.showDuration,
                        easing: o.showEasing
                    })
                }
                function x() {
                    var e = (v.hideEta - (new Date).getTime()) / v.maxHideTime * 100;
                    g.width(e + "%")
                }
            }
            function d() {
                return e.extend({}, {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1
                }, s.options)
            }
            function f(e) {
                t || (t = a()),
                e.is(":visible") || (e.remove(),
                e = null,
                0 === t.children().length && (t.remove(),
                i = void 0))
            }
        }()
    })
}("function" == typeof define && define.amd ? define : function(e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
}
);
var SMOOTH_SCROLL_DURATION = 700;
$(".smooth-scroll").on("click", "a", function() {
    var e = $(this).attr("href");
    if (void 0 !== e && 0 === e.indexOf("#")) {
        var t = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0
          , n = $(this).parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");
        return $("body,html").animate({
            scrollTop: $(e).offset().top - t
        }, SMOOTH_SCROLL_DURATION),
        void 0 !== n && !1 !== n && history.replaceState(null, null, e),
        !1
    }
}),
function(e) {
    e.fn.scrollTo = function(t) {
        return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top),
        this
    }
    ,
    e.fn.dropdown = function(t) {
        this.each(function() {
            var n = e(this)
              , i = e.extend({}, e.fn.dropdown.defaults, t)
              , r = !1
              , o = e("#".concat(n.attr("data-activates")));
            function s() {
                void 0 !== n.data("induration") && (i.inDuration = n.data("inDuration")),
                void 0 !== n.data("outduration") && (i.outDuration = n.data("outDuration")),
                void 0 !== n.data("constrainwidth") && (i.constrain_width = n.data("constrainwidth")),
                void 0 !== n.data("hover") && (i.hover = n.data("hover")),
                void 0 !== n.data("gutter") && (i.gutter = n.data("gutter")),
                void 0 !== n.data("beloworigin") && (i.belowOrigin = n.data("beloworigin")),
                void 0 !== n.data("alignment") && (i.alignment = n.data("alignment"))
            }
            function a(t) {
                "focus" === t && (r = !0),
                s(),
                o.addClass("active"),
                n.addClass("active"),
                !0 === i.constrain_width ? o.css("width", n.outerWidth()) : o.css("white-space", "nowrap");
                var a = window.innerHeight
                  , l = n.innerHeight()
                  , c = n.offset().left
                  , u = n.offset().top - e(window).scrollTop()
                  , d = i.alignment
                  , f = 0
                  , h = 0
                  , p = 0;
                !0 === i.belowOrigin && (p = l);
                var g = 0
                  , m = n.parent();
                if (!m.is("body") && m[0].scrollHeight > m[0].clientHeight && (g = m[0].scrollTop),
                c + o.innerWidth() > e(window).width() ? d = "right" : c - o.innerWidth() + n.innerWidth() < 0 && (d = "left"),
                u + o.innerHeight() > a)
                    if (u + l - o.innerHeight() < 0) {
                        var v = a - u - p;
                        o.css("max-height", v)
                    } else
                        p || (p += l),
                        p -= o.innerHeight();
                if ("left" === d)
                    f = i.gutter,
                    h = n.position().left + f;
                else if ("right" === d) {
                    h = n.position().left + n.outerWidth() - o.outerWidth() + (f = -i.gutter)
                }
                o.css({
                    position: "absolute",
                    top: n.position().top + p + g,
                    left: h
                }),
                o.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: i.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        e(this).css("height", "")
                    }
                }).animate({
                    opacity: 1,
                    scrollTop: 0
                }, {
                    queue: !1,
                    duration: i.inDuration,
                    easing: "easeOutSine"
                })
            }
            function l() {
                r = !1,
                o.fadeOut(i.outDuration),
                o.removeClass("active"),
                n.removeClass("active"),
                setTimeout(function() {
                    o.css("max-height", "")
                }, i.outDuration)
            }
            if (s(),
            n.after(o),
            i.hover) {
                var c = !1;
                n.unbind("click.".concat(n.attr("id"))),
                n.on("mouseenter", function() {
                    !1 === c && (a(),
                    c = !0)
                }),
                n.on("mouseleave", function(t) {
                    var n = t.toElement || t.relatedTarget;
                    e(n).closest(".dropdown-content").is(o) || (o.stop(!0, !0),
                    l(),
                    c = !1)
                }),
                o.on("mouseleave", function(t) {
                    var i = t.toElement || t.relatedTarget;
                    e(i).closest(".dropdown-button").is(n) || (o.stop(!0, !0),
                    l(),
                    c = !1)
                })
            } else
                n.unbind("click.".concat(n.attr("id"))),
                n.bind("click.".concat(n.attr("id")), function(t) {
                    r || (n[0] !== t.currentTarget || n.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? n.hasClass("active") && (l(),
                    e(document).unbind("click.".concat(o.attr("id"), " touchstart.").concat(o.attr("id")))) : (t.preventDefault(),
                    a("click")),
                    o.hasClass("active") && e(document).bind("click.".concat(o.attr("id"), " touchstart.").concat(o.attr("id")), function(t) {
                        o.is(t.target) || n.is(t.target) || n.find(t.target).length || (l(),
                        e(document).unbind("click.".concat(o.attr("id"), " touchstart.").concat(o.attr("id"))))
                    }))
                });
            n.on("open", function(e, t) {
                a(t)
            }),
            n.on("close", l)
        })
    }
    ,
    e.fn.dropdown.defaults = {
        inDuration: 300,
        outDuration: 225,
        constrain_width: !0,
        hover: !1,
        gutter: 0,
        belowOrigin: !1,
        alignment: "left"
    },
    e(".dropdown-button").dropdown(),
    e.fn.mdbDropSearch = function(t) {
        var n = e(this).find("input");
        this.filter(function(t) {
            e(this).on("keyup", t, function() {
                for (var e = n.closest("div[id]").find("a, li"), t = 0; t < e.length; t++)
                    e.eq(t).html().toUpperCase().indexOf(n.val().toUpperCase()) > -1 ? e.eq(t).css({
                        display: ""
                    }) : e.eq(t).css({
                        display: "none"
                    })
            })
        });
        var i = e.extend({
            color: "#000",
            backgroundColor: "",
            fontSize: ".9rem",
            fontWeight: "400",
            borderRadius: "",
            borderColor: ""
        }, t);
        return this.css({
            color: i.color,
            backgroundColor: i.backgroundColor,
            fontSize: i.fontSize,
            fontWeight: i.fontWeight,
            borderRadius: i.borderRadius,
            border: i.border,
            margin: i.margin
        })
    }
}(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");
function dropdownEffectData(e) {
    var t = "fadeIn"
      , n = "fadeOut"
      , i = $(e)
      , r = $(".dropdown-menu", e)
      , o = i.parents("ul.nav");
    return o.height > 0 && (t = o.data("dropdown-in") || null,
    n = o.data("dropdown-out") || null),
    {
        target: e,
        dropdown: i,
        dropdownMenu: r,
        effectIn: r.data("dropdown-in") || t,
        effectOut: r.data("dropdown-out") || n
    }
}
function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"),
    e.dropdownMenu.addClass(["animated", t].join(" ")))
}
function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        e.dropdown.removeClass("dropdown-animating"),
        e.dropdownMenu.removeClass(["animated", e.effectIn, e.effectOut].join(" ")),
        "function" == typeof t && t()
    })
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
    }
}
function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t),
    n && _defineProperties(e, n),
    e
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
    }
}
function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t),
    n && _defineProperties(e, n),
    e
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
    }
}
function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t),
    n && _defineProperties(e, n),
    e
}
dropdownSelectors.on({
    "show.bs.dropdown": function() {
        var e = dropdownEffectData(this);
        dropdownEffectStart(e, e.effectIn)
    },
    "shown.bs.dropdown": function() {
        var e = dropdownEffectData(this);
        e.effectIn && e.effectOut && dropdownEffectEnd(e)
    },
    "hide.bs.dropdown": function(e) {
        var t = dropdownEffectData(this);
        t.effectOut && (e.preventDefault(),
        dropdownEffectStart(t, t.effectOut),
        dropdownEffectEnd(t, function() {
            t.dropdown.removeClass("show"),
            t.dropdownMenu.removeClass("show")
        }))
    }
}),
function(e) {
    var t = this;
    e(document).ready(function() {
        e(document).on("mouseenter", ".fixed-action-btn", function() {
            var t = e(this);
            n(t)
        }),
        e(document).on("mouseleave", ".fixed-action-btn", function() {
            var t = e(this);
            i(t)
        }),
        e(document).on("click", ".fixed-action-btn > a", function() {
            var t = e(this).parent();
            t.hasClass("active") ? n(t) : i(t),
            t.hasClass("active") ? i(t) : n(t)
        })
    }),
    e.fn.extend({
        openFAB: function() {
            n(e(this))
        },
        closeFAB: function() {
            i(e(this))
        }
    });
    var n = function(e) {
        var t = e;
        t.hasClass("active") || (t.addClass("active"),
        document.querySelectorAll("ul .btn-floating").forEach(function(e) {
            e.classList.add("shown")
        }))
    }
      , i = function(e) {
        e.removeClass("active"),
        document.querySelectorAll("ul .btn-floating").forEach(function(e) {
            e.classList.remove("shown")
        })
    };
    e(".fixed-action-btn:not(.smooth-scroll) > .btn-floating").on("click", function(r) {
        if (!e(t).hasClass("smooth-scroll"))
            return r.preventDefault(),
            o = e(".fixed-action-btn"),
            (s = o).hasClass("active") ? i(s) : n(s),
            !1;
        var o, s
    })
}(jQuery),
function(e, t, n, i) {
    "use strict";
    var r, o = ["", "webkit", "Moz", "MS", "ms", "o"], s = t.createElement("div"), a = "function", l = Math.round, c = Math.abs, u = Date.now;
    function d(e, t, n) {
        return setTimeout(y(e, n), t)
    }
    function f(e, t, n) {
        return !!Array.isArray(e) && (h(e, n[t], n),
        !0)
    }
    function h(e, t, n) {
        var r;
        if (e)
            if (e.forEach)
                e.forEach(t, n);
            else if (e.length !== i)
                for (r = 0; r < e.length; )
                    t.call(n, e[r], r, e),
                    r++;
            else
                for (r in e)
                    e.hasOwnProperty(r) && t.call(n, e[r], r, e)
    }
    function p(t, n, i) {
        var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function() {
            var n = new Error("get-stack-trace")
              , i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , o = e.console && (e.console.warn || e.console.log);
            return o && o.call(e.console, r, i),
            t.apply(this, arguments)
        }
    }
    r = "function" != typeof Object.assign ? function(e) {
        if (e === i || null === e)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (r !== i && null !== r)
                for (var o in r)
                    r.hasOwnProperty(o) && (t[o] = r[o])
        }
        return t
    }
    : Object.assign;
    var g = p(function(e, t, n) {
        for (var r = Object.keys(t), o = 0; o < r.length; )
            (!n || n && e[r[o]] === i) && (e[r[o]] = t[r[o]]),
            o++;
        return e
    }, "extend", "Use `assign`.")
      , m = p(function(e, t) {
        return g(e, t, !0)
    }, "merge", "Use `assign`.");
    function v(e, t, n) {
        var i, o = t.prototype;
        (i = e.prototype = Object.create(o)).constructor = e,
        i._super = o,
        n && r(i, n)
    }
    function y(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function b(e, t) {
        return typeof e == a ? e.apply(t && t[0] || i, t) : e
    }
    function w(e, t) {
        return e === i ? t : e
    }
    function _(e, t, n) {
        h(C(t), function(t) {
            e.addEventListener(t, n, !1)
        })
    }
    function x(e, t, n) {
        h(C(t), function(t) {
            e.removeEventListener(t, n, !1)
        })
    }
    function T(e, t) {
        for (; e; ) {
            if (e == t)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function S(e, t) {
        return e.indexOf(t) > -1
    }
    function C(e) {
        return e.trim().split(/\s+/g)
    }
    function E(e, t, n) {
        if (e.indexOf && !n)
            return e.indexOf(t);
        for (var i = 0; i < e.length; ) {
            if (n && e[i][n] == t || !n && e[i] === t)
                return i;
            i++
        }
        return -1
    }
    function k(e) {
        return Array.prototype.slice.call(e, 0)
    }
    function A(e, t, n) {
        for (var i = [], r = [], o = 0; o < e.length; ) {
            var s = t ? e[o][t] : e[o];
            E(r, s) < 0 && i.push(e[o]),
            r[o] = s,
            o++
        }
        return n && (i = t ? i.sort(function(e, n) {
            return e[t] > n[t]
        }) : i.sort()),
        i
    }
    function O(e, t) {
        for (var n, r, s = t[0].toUpperCase() + t.slice(1), a = 0; a < o.length; ) {
            if ((r = (n = o[a]) ? n + s : t)in e)
                return r;
            a++
        }
        return i
    }
    var P = 1;
    function D(t) {
        var n = t.ownerDocument || t;
        return n.defaultView || n.parentWindow || e
    }
    var I = "ontouchstart"in e
      , N = O(e, "PointerEvent") !== i
      , L = I && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
      , j = 25
      , M = 1
      , H = 2
      , $ = 4
      , W = 8
      , R = 1
      , q = 2
      , F = 4
      , B = 8
      , V = 16
      , Y = q | F
      , X = B | V
      , z = Y | X
      , U = ["x", "y"]
      , Q = ["clientX", "clientY"];
    function G(e, t) {
        var n = this;
        this.manager = e,
        this.callback = t,
        this.element = e.element,
        this.target = e.options.inputTarget,
        this.domHandler = function(t) {
            b(e.options.enable, [e]) && n.handler(t)
        }
        ,
        this.init()
    }
    function K(e, t, n) {
        var r = n.pointers.length
          , o = n.changedPointers.length
          , s = t & M && r - o == 0
          , a = t & ($ | W) && r - o == 0;
        n.isFirst = !!s,
        n.isFinal = !!a,
        s && (e.session = {}),
        n.eventType = t,
        function(e, t) {
            var n = e.session
              , r = t.pointers
              , o = r.length;
            n.firstInput || (n.firstInput = Z(t));
            o > 1 && !n.firstMultiple ? n.firstMultiple = Z(t) : 1 === o && (n.firstMultiple = !1);
            var s = n.firstInput
              , a = n.firstMultiple
              , l = a ? a.center : s.center
              , d = t.center = J(r);
            t.timeStamp = u(),
            t.deltaTime = t.timeStamp - s.timeStamp,
            t.angle = ie(l, d),
            t.distance = ne(l, d),
            function(e, t) {
                var n = t.center
                  , i = e.offsetDelta || {}
                  , r = e.prevDelta || {}
                  , o = e.prevInput || {};
                t.eventType !== M && o.eventType !== $ || (r = e.prevDelta = {
                    x: o.deltaX || 0,
                    y: o.deltaY || 0
                },
                i = e.offsetDelta = {
                    x: n.x,
                    y: n.y
                });
                t.deltaX = r.x + (n.x - i.x),
                t.deltaY = r.y + (n.y - i.y)
            }(n, t),
            t.offsetDirection = te(t.deltaX, t.deltaY);
            var f = ee(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = f.x,
            t.overallVelocityY = f.y,
            t.overallVelocity = c(f.x) > c(f.y) ? f.x : f.y,
            t.scale = a ? (h = a.pointers,
            p = r,
            ne(p[0], p[1], Q) / ne(h[0], h[1], Q)) : 1,
            t.rotation = a ? function(e, t) {
                return ie(t[1], t[0], Q) + ie(e[1], e[0], Q)
            }(a.pointers, r) : 0,
            t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length,
            function(e, t) {
                var n, r, o, s, a = e.lastInterval || t, l = t.timeStamp - a.timeStamp;
                if (t.eventType != W && (l > j || a.velocity === i)) {
                    var u = t.deltaX - a.deltaX
                      , d = t.deltaY - a.deltaY
                      , f = ee(l, u, d);
                    r = f.x,
                    o = f.y,
                    n = c(f.x) > c(f.y) ? f.x : f.y,
                    s = te(u, d),
                    e.lastInterval = t
                } else
                    n = a.velocity,
                    r = a.velocityX,
                    o = a.velocityY,
                    s = a.direction;
                t.velocity = n,
                t.velocityX = r,
                t.velocityY = o,
                t.direction = s
            }(n, t);
            var h, p;
            var g = e.element;
            T(t.srcEvent.target, g) && (g = t.srcEvent.target);
            t.target = g
        }(e, n),
        e.emit("hammer.input", n),
        e.recognize(n),
        e.session.prevInput = n
    }
    function Z(e) {
        for (var t = [], n = 0; n < e.pointers.length; )
            t[n] = {
                clientX: l(e.pointers[n].clientX),
                clientY: l(e.pointers[n].clientY)
            },
            n++;
        return {
            timeStamp: u(),
            pointers: t,
            center: J(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }
    function J(e) {
        var t = e.length;
        if (1 === t)
            return {
                x: l(e[0].clientX),
                y: l(e[0].clientY)
            };
        for (var n = 0, i = 0, r = 0; r < t; )
            n += e[r].clientX,
            i += e[r].clientY,
            r++;
        return {
            x: l(n / t),
            y: l(i / t)
        }
    }
    function ee(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }
    function te(e, t) {
        return e === t ? R : c(e) >= c(t) ? e < 0 ? q : F : t < 0 ? B : V
    }
    function ne(e, t, n) {
        n || (n = U);
        var i = t[n[0]] - e[n[0]]
          , r = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + r * r)
    }
    function ie(e, t, n) {
        n || (n = U);
        var i = t[n[0]] - e[n[0]]
          , r = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
    }
    G.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && _(this.element, this.evEl, this.domHandler),
            this.evTarget && _(this.target, this.evTarget, this.domHandler),
            this.evWin && _(D(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && x(this.element, this.evEl, this.domHandler),
            this.evTarget && x(this.target, this.evTarget, this.domHandler),
            this.evWin && x(D(this.element), this.evWin, this.domHandler)
        }
    };
    var re = {
        mousedown: M,
        mousemove: H,
        mouseup: $
    }
      , oe = "mousedown"
      , se = "mousemove mouseup";
    function ae() {
        this.evEl = oe,
        this.evWin = se,
        this.pressed = !1,
        G.apply(this, arguments)
    }
    v(ae, G, {
        handler: function(e) {
            var t = re[e.type];
            t & M && 0 === e.button && (this.pressed = !0),
            t & H && 1 !== e.which && (t = $),
            this.pressed && (t & $ && (this.pressed = !1),
            this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: "mouse",
                srcEvent: e
            }))
        }
    });
    var le = {
        pointerdown: M,
        pointermove: H,
        pointerup: $,
        pointercancel: W,
        pointerout: W
    }
      , ce = {
        2: "touch",
        3: "pen",
        4: "mouse",
        5: "kinect"
    }
      , ue = "pointerdown"
      , de = "pointermove pointerup pointercancel";
    function fe() {
        this.evEl = ue,
        this.evWin = de,
        G.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    e.MSPointerEvent && !e.PointerEvent && (ue = "MSPointerDown",
    de = "MSPointerMove MSPointerUp MSPointerCancel"),
    v(fe, G, {
        handler: function(e) {
            var t = this.store
              , n = !1
              , i = e.type.toLowerCase().replace("ms", "")
              , r = le[i]
              , o = ce[e.pointerType] || e.pointerType
              , s = "touch" == o
              , a = E(t, e.pointerId, "pointerId");
            r & M && (0 === e.button || s) ? a < 0 && (t.push(e),
            a = t.length - 1) : r & ($ | W) && (n = !0),
            a < 0 || (t[a] = e,
            this.callback(this.manager, r, {
                pointers: t,
                changedPointers: [e],
                pointerType: o,
                srcEvent: e
            }),
            n && t.splice(a, 1))
        }
    });
    var he = {
        touchstart: M,
        touchmove: H,
        touchend: $,
        touchcancel: W
    }
      , pe = "touchstart"
      , ge = "touchstart touchmove touchend touchcancel";
    function me() {
        this.evTarget = pe,
        this.evWin = ge,
        this.started = !1,
        G.apply(this, arguments)
    }
    v(me, G, {
        handler: function(e) {
            var t = he[e.type];
            if (t === M && (this.started = !0),
            this.started) {
                var n = function(e, t) {
                    var n = k(e.touches)
                      , i = k(e.changedTouches);
                    t & ($ | W) && (n = A(n.concat(i), "identifier", !0));
                    return [n, i]
                }
                .call(this, e, t);
                t & ($ | W) && n[0].length - n[1].length == 0 && (this.started = !1),
                this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: "touch",
                    srcEvent: e
                })
            }
        }
    });
    var ve = {
        touchstart: M,
        touchmove: H,
        touchend: $,
        touchcancel: W
    }
      , ye = "touchstart touchmove touchend touchcancel";
    function be() {
        this.evTarget = ye,
        this.targetIds = {},
        G.apply(this, arguments)
    }
    v(be, G, {
        handler: function(e) {
            var t = ve[e.type]
              , n = function(e, t) {
                var n = k(e.touches)
                  , i = this.targetIds;
                if (t & (M | H) && 1 === n.length)
                    return i[n[0].identifier] = !0,
                    [n, n];
                var r, o, s = k(e.changedTouches), a = [], l = this.target;
                if (o = n.filter(function(e) {
                    return T(e.target, l)
                }),
                t === M)
                    for (r = 0; r < o.length; )
                        i[o[r].identifier] = !0,
                        r++;
                r = 0;
                for (; r < s.length; )
                    i[s[r].identifier] && a.push(s[r]),
                    t & ($ | W) && delete i[s[r].identifier],
                    r++;
                if (!a.length)
                    return;
                return [A(o.concat(a), "identifier", !0), a]
            }
            .call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: e
            })
        }
    });
    var we = 2500
      , _e = 25;
    function xe() {
        G.apply(this, arguments);
        var e = y(this.handler, this);
        this.touch = new be(this.manager,e),
        this.mouse = new ae(this.manager,e),
        this.primaryTouch = null,
        this.lastTouches = []
    }
    function Te(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var n = {
                x: t.clientX,
                y: t.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout(function() {
                var e = i.indexOf(n);
                e > -1 && i.splice(e, 1)
            }, we)
        }
    }
    v(xe, G, {
        handler: function(e, t, n) {
            var i = "touch" == n.pointerType
              , r = "mouse" == n.pointerType;
            if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i)
                    (function(e, t) {
                        e & M ? (this.primaryTouch = t.changedPointers[0].identifier,
                        Te.call(this, t)) : e & ($ | W) && Te.call(this, t)
                    }
                    ).call(this, t, n);
                else if (r && function(e) {
                    for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                        var r = this.lastTouches[i]
                          , o = Math.abs(t - r.x)
                          , s = Math.abs(n - r.y);
                        if (o <= _e && s <= _e)
                            return !0
                    }
                    return !1
                }
                .call(this, n))
                    return;
                this.callback(e, t, n)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var Se = O(s.style, "touchAction")
      , Ce = Se !== i
      , Ee = "auto"
      , ke = "manipulation"
      , Ae = "none"
      , Oe = "pan-x"
      , Pe = "pan-y"
      , De = function() {
        if (!Ce)
            return !1;
        var t = {}
          , n = e.CSS && e.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) {
            t[i] = !n || e.CSS.supports("touch-action", i)
        }),
        t
    }();
    function Ie(e, t) {
        this.manager = e,
        this.set(t)
    }
    Ie.prototype = {
        set: function(e) {
            "compute" == e && (e = this.compute()),
            Ce && this.manager.element.style && De[e] && (this.manager.element.style[Se] = e),
            this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return h(this.manager.recognizers, function(t) {
                b(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }),
            function(e) {
                if (S(e, Ae))
                    return Ae;
                var t = S(e, Oe)
                  , n = S(e, Pe);
                if (t && n)
                    return Ae;
                if (t || n)
                    return t ? Oe : Pe;
                if (S(e, ke))
                    return ke;
                return Ee
            }(e.join(" "))
        },
        preventDefaults: function(e) {
            var t = e.srcEvent
              , n = e.offsetDirection;
            if (this.manager.session.prevented)
                t.preventDefault();
            else {
                var i = this.actions
                  , r = S(i, Ae) && !De[Ae]
                  , o = S(i, Pe) && !De[Pe]
                  , s = S(i, Oe) && !De[Oe];
                if (r) {
                    var a = 1 === e.pointers.length
                      , l = e.distance < 2
                      , c = e.deltaTime < 250;
                    if (a && l && c)
                        return
                }
                if (!s || !o)
                    return r || o && n & Y || s && n & X ? this.preventSrc(t) : void 0
            }
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0,
            e.preventDefault()
        }
    };
    var Ne = 1
      , Le = 2
      , je = 4
      , Me = 8
      , He = Me
      , $e = 16;
    function We(e) {
        this.options = r({}, this.defaults, e || {}),
        this.id = P++,
        this.manager = null,
        this.options.enable = w(this.options.enable, !0),
        this.state = Ne,
        this.simultaneous = {},
        this.requireFail = []
    }
    function Re(e) {
        return e & $e ? "cancel" : e & Me ? "end" : e & je ? "move" : e & Le ? "start" : ""
    }
    function qe(e) {
        return e == V ? "down" : e == B ? "up" : e == q ? "left" : e == F ? "right" : ""
    }
    function Fe(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }
    function Be() {
        We.apply(this, arguments)
    }
    function Ve() {
        Be.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function Ye() {
        Be.apply(this, arguments)
    }
    function Xe() {
        We.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function ze() {
        Be.apply(this, arguments)
    }
    function Ue() {
        Be.apply(this, arguments)
    }
    function Qe() {
        We.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function Ge(e, t) {
        return (t = t || {}).recognizers = w(t.recognizers, Ge.defaults.preset),
        new Ke(e,t)
    }
    We.prototype = {
        defaults: {},
        set: function(e) {
            return r(this.options, e),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(e) {
            if (f(e, "recognizeWith", this))
                return this;
            var t = this.simultaneous;
            return t[(e = Fe(e, this)).id] || (t[e.id] = e,
            e.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(e) {
            return f(e, "dropRecognizeWith", this) ? this : (e = Fe(e, this),
            delete this.simultaneous[e.id],
            this)
        },
        requireFailure: function(e) {
            if (f(e, "requireFailure", this))
                return this;
            var t = this.requireFail;
            return -1 === E(t, e = Fe(e, this)) && (t.push(e),
            e.requireFailure(this)),
            this
        },
        dropRequireFailure: function(e) {
            if (f(e, "dropRequireFailure", this))
                return this;
            e = Fe(e, this);
            var t = E(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(e) {
            var t = this
              , n = this.state;
            function i(n) {
                t.manager.emit(n, e)
            }
            n < Me && i(t.options.event + Re(n)),
            i(t.options.event),
            e.additionalEvent && i(e.additionalEvent),
            n >= Me && i(t.options.event + Re(n))
        },
        tryEmit: function(e) {
            if (this.canEmit())
                return this.emit(e);
            this.state = 32
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length; ) {
                if (!(this.requireFail[e].state & (32 | Ne)))
                    return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = r({}, e);
            if (!b(this.options.enable, [this, t]))
                return this.reset(),
                void (this.state = 32);
            this.state & (He | $e | 32) && (this.state = Ne),
            this.state = this.process(t),
            this.state & (Le | je | Me | $e) && this.tryEmit(t)
        },
        process: function(e) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    v(Be, We, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state
              , n = e.eventType
              , i = t & (Le | je)
              , r = this.attrTest(e);
            return i && (n & W || !r) ? t | $e : i || r ? n & $ ? t | Me : t & Le ? t | je : Le : 32
        }
    }),
    v(Ve, Be, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: z
        },
        getTouchAction: function() {
            var e = this.options.direction
              , t = [];
            return e & Y && t.push(Pe),
            e & X && t.push(Oe),
            t
        },
        directionTest: function(e) {
            var t = this.options
              , n = !0
              , i = e.distance
              , r = e.direction
              , o = e.deltaX
              , s = e.deltaY;
            return r & t.direction || (t.direction & Y ? (r = 0 === o ? R : o < 0 ? q : F,
            n = o != this.pX,
            i = Math.abs(e.deltaX)) : (r = 0 === s ? R : s < 0 ? B : V,
            n = s != this.pY,
            i = Math.abs(e.deltaY))),
            e.direction = r,
            n && i > t.threshold && r & t.direction
        },
        attrTest: function(e) {
            return Be.prototype.attrTest.call(this, e) && (this.state & Le || !(this.state & Le) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX,
            this.pY = e.deltaY;
            var t = qe(e.direction);
            t && (e.additionalEvent = this.options.event + t),
            this._super.emit.call(this, e)
        }
    }),
    v(Ye, Be, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ae]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & Le)
        },
        emit: function(e) {
            if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
        }
    }),
    v(Xe, We, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [Ee]
        },
        process: function(e) {
            var t = this.options
              , n = e.pointers.length === t.pointers
              , i = e.distance < t.threshold
              , r = e.deltaTime > t.time;
            if (this._input = e,
            !i || !n || e.eventType & ($ | W) && !r)
                this.reset();
            else if (e.eventType & M)
                this.reset(),
                this._timer = d(function() {
                    this.state = He,
                    this.tryEmit()
                }, t.time, this);
            else if (e.eventType & $)
                return He;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === He && (e && e.eventType & $ ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = u(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    v(ze, Be, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ae]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & Le)
        }
    }),
    v(Ue, Be, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Y | X,
            pointers: 1
        },
        getTouchAction: function() {
            return Ve.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, n = this.options.direction;
            return n & (Y | X) ? t = e.overallVelocity : n & Y ? t = e.overallVelocityX : n & X && (t = e.overallVelocityY),
            this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && c(t) > this.options.velocity && e.eventType & $
        },
        emit: function(e) {
            var t = qe(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e),
            this.manager.emit(this.options.event, e)
        }
    }),
    v(Qe, We, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ke]
        },
        process: function(e) {
            var t = this.options
              , n = e.pointers.length === t.pointers
              , i = e.distance < t.threshold
              , r = e.deltaTime < t.time;
            if (this.reset(),
            e.eventType & M && 0 === this.count)
                return this.failTimeout();
            if (i && r && n) {
                if (e.eventType != $)
                    return this.failTimeout();
                var o = !this.pTime || e.timeStamp - this.pTime < t.interval
                  , s = !this.pCenter || ne(this.pCenter, e.center) < t.posThreshold;
                if (this.pTime = e.timeStamp,
                this.pCenter = e.center,
                s && o ? this.count += 1 : this.count = 1,
                this._input = e,
                0 === this.count % t.taps)
                    return this.hasRequireFailures() ? (this._timer = d(function() {
                        this.state = He,
                        this.tryEmit()
                    }, t.interval, this),
                    Le) : He
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = d(function() {
                this.state = 32
            }, this.options.interval, this),
            32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == He && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    Ge.VERSION = "2.0.7",
    Ge.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[ze, {
            enable: !1
        }], [Ye, {
            enable: !1
        }, ["rotate"]], [Ue, {
            direction: Y
        }], [Ve, {
            direction: Y
        }, ["swipe"]], [Qe], [Qe, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [Xe]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    function Ke(e, t) {
        var n;
        this.options = r({}, Ge.defaults, t || {}),
        this.options.inputTarget = this.options.inputTarget || e,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = e,
        this.input = new ((n = this).options.inputClass || (N ? fe : L ? be : I ? xe : ae))(n,K),
        this.touchAction = new Ie(this,this.options.touchAction),
        Ze(this, !0),
        h(this.options.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]),
            e[3] && t.requireFailure(e[3])
        }, this)
    }
    function Ze(e, t) {
        var n, i = e.element;
        i.style && (h(e.options.cssProps, function(r, o) {
            n = O(i.style, o),
            t ? (e.oldCssProps[n] = i.style[n],
            i.style[n] = r) : i.style[n] = e.oldCssProps[n] || ""
        }),
        t || (e.oldCssProps = {}))
    }
    Ke.prototype = {
        set: function(e) {
            return r(this.options, e),
            e.touchAction && this.touchAction.update(),
            e.inputTarget && (this.input.destroy(),
            this.input.target = e.inputTarget,
            this.input.init()),
            this
        },
        stop: function(e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                var n;
                this.touchAction.preventDefaults(e);
                var i = this.recognizers
                  , r = t.curRecognizer;
                (!r || r && r.state & He) && (r = t.curRecognizer = null);
                for (var o = 0; o < i.length; )
                    n = i[o],
                    2 === t.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(e),
                    !r && n.state & (Le | je | Me) && (r = t.curRecognizer = n),
                    o++
            }
        },
        get: function(e) {
            if (e instanceof We)
                return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e)
                    return t[n];
            return null
        },
        add: function(e) {
            if (f(e, "add", this))
                return this;
            var t = this.get(e.options.event);
            return t && this.remove(t),
            this.recognizers.push(e),
            e.manager = this,
            this.touchAction.update(),
            e
        },
        remove: function(e) {
            if (f(e, "remove", this))
                return this;
            if (e = this.get(e)) {
                var t = this.recognizers
                  , n = E(t, e);
                -1 !== n && (t.splice(n, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(e, t) {
            if (e !== i && t !== i) {
                var n = this.handlers;
                return h(C(e), function(e) {
                    n[e] = n[e] || [],
                    n[e].push(t)
                }),
                this
            }
        },
        off: function(e, t) {
            if (e !== i) {
                var n = this.handlers;
                return h(C(e), function(e) {
                    t ? n[e] && n[e].splice(E(n[e], t), 1) : delete n[e]
                }),
                this
            }
        },
        emit: function(e, n) {
            this.options.domEvents && function(e, n) {
                var i = t.createEvent("Event");
                i.initEvent(e, !0, !0),
                i.gesture = n,
                n.target.dispatchEvent(i)
            }(e, n);
            var i = this.handlers[e] && this.handlers[e].slice();
            if (i && i.length) {
                n.type = e,
                n.preventDefault = function() {
                    n.srcEvent.preventDefault()
                }
                ;
                for (var r = 0; r < i.length; )
                    i[r](n),
                    r++
            }
        },
        destroy: function() {
            this.element && Ze(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    r(Ge, {
        INPUT_START: M,
        INPUT_MOVE: H,
        INPUT_END: $,
        INPUT_CANCEL: W,
        STATE_POSSIBLE: Ne,
        STATE_BEGAN: Le,
        STATE_CHANGED: je,
        STATE_ENDED: Me,
        STATE_RECOGNIZED: He,
        STATE_CANCELLED: $e,
        STATE_FAILED: 32,
        DIRECTION_NONE: R,
        DIRECTION_LEFT: q,
        DIRECTION_RIGHT: F,
        DIRECTION_UP: B,
        DIRECTION_DOWN: V,
        DIRECTION_HORIZONTAL: Y,
        DIRECTION_VERTICAL: X,
        DIRECTION_ALL: z,
        Manager: Ke,
        Input: G,
        TouchAction: Ie,
        TouchInput: be,
        MouseInput: ae,
        PointerEventInput: fe,
        TouchMouseInput: xe,
        SingleTouchInput: me,
        Recognizer: We,
        AttrRecognizer: Be,
        Tap: Qe,
        Pan: Ve,
        Swipe: Ue,
        Pinch: Ye,
        Rotate: ze,
        Press: Xe,
        on: _,
        off: x,
        each: h,
        merge: m,
        extend: g,
        assign: r,
        inherit: v,
        bindFn: y,
        prefixed: O
    }),
    (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = Ge,
    "function" == typeof define && define.amd ? define(function() {
        return Ge
    }) : "undefined" != typeof module && module.exports ? module.exports = Ge : e.Hammer = Ge
}(window, document),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
}(function(e, t) {
    var n;
    e.fn.hammer = function(n) {
        return this.each(function() {
            !function(n, i) {
                var r = e(n);
                r.data("hammer") || r.data("hammer", new t(r[0],i))
            }(this, n)
        })
    }
    ,
    t.Manager.prototype.emit = (n = t.Manager.prototype.emit,
    function(t, i) {
        n.call(this, t, i),
        e(this.element).trigger({
            type: t,
            gesture: i
        })
    }
    )
}),
function(e) {
    var t = 240
      , n = function() {
        function n(i, r) {
            _classCallCheck(this, n),
            this.defaults = {
                MENU_WIDTH: t,
                edge: "left",
                closeOnClick: !1
            },
            this.$element = i,
            this.options = this.assignOptions(r),
            this.menuOut = !1,
            this.$body = e("body"),
            this.$menu = e("#".concat(this.$element.attr("data-activates"))),
            this.$sidenavOverlay = e("#sidenav-overlay"),
            this.$dragTarget = e('<div class="drag-target"></div>'),
            this.$body.append(this.$dragTarget),
            this.init()
        }
        return _createClass(n, [{
            key: "init",
            value: function() {
                this.setMenuWidth(),
                this.setMenuTranslation(),
                this.closeOnClick(),
                this.openOnClick(),
                this.bindTouchEvents()
            }
        }, {
            key: "bindTouchEvents",
            value: function() {
                var e = this;
                this.$dragTarget.on("click", function() {
                    e.removeMenu()
                }),
                this.$dragTarget.hammer({
                    prevent_default: !1
                }).bind("pan", this.panEventHandler.bind(this)).bind("panend", this.panendEventHandler.bind(this))
            }
        }, {
            key: "panEventHandler",
            value: function(e) {
                if ("touch" === e.gesture.pointerType) {
                    var t = e.gesture.center.x;
                    this.disableScrolling(),
                    0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(),
                    "left" === this.options.edge && (t > this.options.MENU_WIDTH ? t = this.options.MENU_WIDTH : t < 0 && (t = 0)),
                    this.translateSidenavX(t),
                    this.updateOverlayOpacity(t)
                }
            }
        }, {
            key: "translateSidenavX",
            value: function(e) {
                if ("left" === this.options.edge) {
                    var t = e >= this.options.MENU_WIDTH / 2;
                    this.menuOut = t,
                    this.$menu.css("transform", "translateX(".concat(e - this.options.MENU_WIDTH, "px)"))
                } else {
                    var n = e < window.innerWidth - this.options.MENU_WIDTH / 2;
                    this.menuOut = n;
                    var i = e - this.options.MENU_WIDTH / 2;
                    i < 0 && (i = 0),
                    this.$menu.css("transform", "translateX(".concat(i, "px)"))
                }
            }
        }, {
            key: "updateOverlayOpacity",
            value: function(e) {
                var t;
                t = "left" === this.options.edge ? e / this.options.MENU_WIDTH : Math.abs((e - window.innerWidth) / this.options.MENU_WIDTH),
                this.$sidenavOverlay.velocity({
                    opacity: t
                }, {
                    duration: 10,
                    queue: !1,
                    easing: "easeOutQuad"
                })
            }
        }, {
            key: "buildSidenavOverlay",
            value: function() {
                var t = this;
                this.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'),
                this.$sidenavOverlay.css("opacity", 0).on("click", function() {
                    t.removeMenu()
                }),
                this.$body.append(this.$sidenavOverlay)
            }
        }, {
            key: "disableScrolling",
            value: function() {
                var e = this.$body.innerWidth();
                this.$body.css("overflow", "hidden"),
                this.$body.width(e)
            }
        }, {
            key: "panendEventHandler",
            value: function(e) {
                if ("touch" === e.gesture.pointerType) {
                    var t = e.gesture.velocityX
                      , n = e.gesture.center.x
                      , i = n - this.options.MENU_WIDTH
                      , r = n - this.options.MENU_WIDTH / 2;
                    i > 0 && (i = 0),
                    r < 0 && (r = 0),
                    "left" === this.options.edge ? (this.menuOut && t <= .3 || t < -.5 ? (0 !== i && this.translateMenuX([0, i], "300"),
                    this.showSidenavOverlay()) : (!this.menuOut || t > .3) && (this.enableScrolling(),
                    this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, i], "200"),
                    this.hideSidenavOverlay()),
                    this.$dragTarget.css({
                        width: "10px",
                        right: "",
                        left: 0
                    })) : this.menuOut && t >= -.3 || t > .5 ? (this.translateMenuX([0, r], "300"),
                    this.showSidenavOverlay(),
                    this.$dragTarget.css({
                        width: "50%",
                        right: "",
                        left: 0
                    })) : (!this.menuOut || t < -.3) && (this.enableScrolling(),
                    this.translateMenuX([this.options.MENU_WIDTH + 10, r], "200"),
                    this.hideSidenavOverlay(),
                    this.$dragTarget.css({
                        width: "10px",
                        right: 0,
                        left: ""
                    }))
                }
            }
        }, {
            key: "translateMenuX",
            value: function(e, t) {
                this.$menu.velocity({
                    translateX: e
                }, {
                    duration: "string" == typeof t ? Number(t) : t,
                    queue: !1,
                    easing: "easeOutQuad"
                })
            }
        }, {
            key: "hideSidenavOverlay",
            value: function() {
                this.$sidenavOverlay.velocity({
                    opacity: 0
                }, {
                    duration: 200,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        e(this).remove()
                    }
                }),
                this.$sidenavOverlay = e()
            }
        }, {
            key: "showSidenavOverlay",
            value: function() {
                this.$sidenavOverlay.velocity({
                    opacity: 1
                }, {
                    duration: 50,
                    queue: !1,
                    easing: "easeOutQuad"
                })
            }
        }, {
            key: "enableScrolling",
            value: function() {
                this.$body.css({
                    overflow: "",
                    width: ""
                })
            }
        }, {
            key: "openOnClick",
            value: function() {
                var t = this;
                this.$element.on("click", function(n) {
                    if (n.preventDefault(),
                    !0 === t.menuOut)
                        t.menuOut = !1,
                        t.removeMenu();
                    else {
                        t.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'),
                        t.$body.append(t.$sidenavOverlay);
                        var i = [];
                        i = "left" === t.options.edge ? [0, -1 * t.options.MENU_WIDTH] : [0, t.options.MENU_WIDTH],
                        t.$menu.velocity({
                            translateX: i
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        t.$sidenavOverlay.on("click", function() {
                            t.removeMenu()
                        })
                    }
                })
            }
        }, {
            key: "closeOnClick",
            value: function() {
                var e = this;
                !0 === this.options.closeOnClick && this.$menu.on("click", "a:not(.collapsible-header)", function() {
                    e.removeMenu()
                })
            }
        }, {
            key: "setMenuTranslation",
            value: function() {
                var t = this;
                "left" === this.options.edge ? (this.$menu.css("transform", "translateX(-100%)"),
                this.$dragTarget.css({
                    left: 0
                })) : (this.$menu.addClass("right-aligned").css("transform", "translateX(100%)"),
                this.$dragTarget.css({
                    right: 0
                })),
                this.$menu.hasClass("fixed") && (window.innerWidth > 1440 && this.$menu.css("transform", "translateX(0)"),
                e(window).resize(function() {
                    if (window.innerWidth > 1440)
                        t.$sidenavOverlay.length ? t.removeMenu(!0) : t.$menu.css("transform", "translateX(0%)");
                    else if (!1 === t.menuOut) {
                        var e = "left" === t.options.edge ? "-100" : "100";
                        t.$menu.css("transform", "translateX(".concat(e, "%)"))
                    }
                }))
            }
        }, {
            key: "setMenuWidth",
            value: function() {
                var n = e("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");
                this.options.MENU_WIDTH !== t && (this.$menu.css("width", this.options.MENU_WIDTH),
                n.css("width", this.options.MENU_WIDTH))
            }
        }, {
            key: "assignOptions",
            value: function(t) {
                return e.extend({}, this.defaults, t)
            }
        }, {
            key: "removeMenu",
            value: function(e) {
                var t = this;
                this.$body.css({
                    overflow: "",
                    width: ""
                }),
                this.$menu.velocity({
                    translateX: "left" === this.options.edge ? "-100%" : "100%"
                }, {
                    duration: 200,
                    queue: !1,
                    easing: "easeOutCubic",
                    complete: function() {
                        !0 === e && (t.$menu.removeAttr("style"),
                        t.$menu.css("width", t.options.MENU_WIDTH))
                    }
                }),
                this.hideSidenavOverlay()
            }
        }, {
            key: "show",
            value: function() {
                this.trigger("click")
            }
        }, {
            key: "hide",
            value: function() {
                this.$sidenavOverlay.trigger("click")
            }
        }]),
        n
    }();
    e.fn.sideNav = function(t) {
        return this.each(function() {
            new n(e(this),t)
        })
    }
}(jQuery),
function(e) {
    e.fn.collapsible = function(t) {
        var n = {
            accordion: void 0
        };
        function i(t, n) {
            $panelHeaders = t.find("> li > .collapsible-header"),
            n.hasClass("active") ? n.parent().addClass("active") : n.parent().removeClass("active"),
            n.parent().hasClass("active") ? n.siblings(".collapsible-body").stop(!0, !1).slideDown({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function() {
                    e(this).css("height", "")
                }
            }) : n.siblings(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function() {
                    e(this).css("height", "")
                }
            }),
            $panelHeaders.not(n).removeClass("active").parent().removeClass("active"),
            $panelHeaders.not(n).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function() {
                    e(this).css("height", "")
                }
            })
        }
        function r(t) {
            t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"),
            t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function() {
                    e(this).css("height", "")
                }
            }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function() {
                    e(this).css("height", "")
                }
            })
        }
        function o(e) {
            return s(e).length > 0
        }
        function s(e) {
            return e.closest("li > .collapsible-header")
        }
        return t = e.extend(n, t),
        this.each(function() {
            var n = e(this)
              , a = e(this).find("> li > .collapsible-header")
              , l = n.data("collapsible");
            n.off("click.collapse", ".collapsible-header"),
            a.off("click.collapse"),
            t.accordion || "accordion" === l || void 0 === l ? ((a = n.find("> li > .collapsible-header")).on("click.collapse", function(t) {
                var r = e(t.target);
                o(r) && (r = s(r)),
                r.toggleClass("active"),
                i(n, r)
            }),
            i(n, a.filter(".active").first())) : a.each(function() {
                e(this).on("click.collapse", function(t) {
                    var n = e(t.target);
                    o(n) && (n = s(n)),
                    n.toggleClass("active"),
                    r(n)
                }),
                e(this).hasClass("active") && r(e(this))
            })
        })
    }
    ,
    e(".collapsible").collapsible()
}(jQuery),
function(e) {
    var t, n = "input[type=range]:not(.custom-range)", i = !1;
    e(document).on("change", n, function() {
        var t = e(this);
        t.siblings(".thumb").find(".value").html(t.val())
    }),
    e(document).on("input mousedown touchstart", n, function(r) {
        var o = e(this)
          , s = o.siblings(".thumb")
          , a = o.outerWidth();
        if (!s.length && function() {
            var t = e('<span class="thumb"><span class="value"></span></span>');
            e(n).after(t)
        }(),
        s.find(".value").html(o.val()),
        i = !0,
        o.addClass("active"),
        s.hasClass("active") || s.velocity({
            height: "30px",
            width: "30px",
            top: "-20px",
            marginLeft: "-15px"
        }, {
            duration: 300,
            easing: "easeOutExpo"
        }),
        "input" !== r.type) {
            var l = void 0 === r.pageX || null === r.pageX;
            (t = l ? r.originalEvent.touches[0].pageX - e(this).offset().left : r.pageX - e(this).offset().left) < 0 ? t = 0 : t > a && (t = a),
            s.addClass("active").css("left", t)
        }
        s.find(".value").html(o.val())
    }),
    e(document).on("mouseup touchend", ".range-field", function() {
        i = !1,
        e(this).removeClass("active")
    }),
    e(document).on("mousemove touchmove", ".range-field", function(t) {
        var r, o = e(this).children(".thumb");
        if (i) {
            o.hasClass("active") || o.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }),
            r = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
            var s = e(this).outerWidth();
            r < 0 ? r = 0 : r > s && (r = s),
            o.addClass("active").css("left", r),
            o.find(".value").html(o.siblings(n).val())
        }
    }),
    e(document).on("mouseout touchleave", ".range-field", function() {
        if (!i) {
            var t = e(this).children(".thumb");
            t.hasClass("active") && t.velocity({
                height: "0",
                width: "0",
                top: "10px",
                marginLeft: "-6px"
            }, {
                duration: 100
            }),
            t.removeClass("active")
        }
    })
}(jQuery),
function(e) {
    e(document).on("change", '.file-field input[type="file"]', function(t) {
        var n = e(t.target)
          , i = n.closest(".file-field").find("input.file-path")
          , r = n[0].files
          , o = [];
        Array.isArray(r) ? r.forEach(function(e) {
            return o.push(e.name)
        }) : Object.keys(r).forEach(function(e) {
            o.push(r[e].name)
        }),
        i.val(o.join(", ")),
        i.trigger("change")
    })
}(jQuery),
function(e) {
    var t, n = function() {
        function t(n, i) {
            _classCallCheck(this, t),
            this.options = i,
            this.$nativeSelect = n,
            this.isMultiple = Boolean(this.$nativeSelect.attr("multiple")),
            this.isSearchable = Boolean(this.$nativeSelect.attr("searchable")),
            this.isRequired = Boolean(this.$nativeSelect.attr("required")),
            this.uuid = this._randomUUID(),
            this.$selectWrapper = e('<div class="select-wrapper"></div>'),
            this.$materialOptionsList = e('<ul id="select-options-'.concat(this.uuid, '" class="dropdown-content select-dropdown w-100 ').concat(this.isMultiple ? "multiple-select-dropdown" : "", '"></ul>')),
            this.$materialSelectInitialOption = n.find("option:selected").html() || n.find("option:first").html() || "",
            this.$nativeSelectChildren = this.$nativeSelect.children("option, optgroup"),
            this.$materialSelect = e('<input type="text" class="select-dropdown" readonly="true" '.concat(this.$nativeSelect.is(":disabled") ? "disabled" : "", ' data-activates="select-options-').concat(this.uuid, '" value=""/>')),
            this.$dropdownIcon = e('<span class="caret">&#9660;</span>'),
            this.$searchInput = null,
            this.$toggleAll = e('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>Select all</label></span></li>'),
            this.valuesSelected = [],
            this.keyCodes = {
                tab: 9,
                esc: 27,
                enter: 13,
                arrowUp: 38,
                arrowDown: 40
            },
            t.mutationObservers = []
        }
        return _createClass(t, [{
            key: "init",
            value: function() {
                if (Boolean(this.$nativeSelect.data("select-id")) && this._removeMaterialWrapper(),
                "destroy" !== this.options) {
                    this.$nativeSelect.data("select-id", this.uuid),
                    this.$selectWrapper.addClass(this.$nativeSelect.attr("class"));
                    var e = this.$materialSelectInitialOption.replace(/"/g, "&quot;");
                    this.$materialSelect.val(e),
                    this.renderMaterialSelect(),
                    this.bindEvents(),
                    this.isRequired && this.enableValidation()
                } else
                    this.$nativeSelect.data("select-id", null).removeClass("initialized")
            }
        }, {
            key: "_removeMaterialWrapper",
            value: function() {
                var t = this.$nativeSelect.data("select-id");
                this.$nativeSelect.parent().find("span.caret").remove(),
                this.$nativeSelect.parent().find("input").remove(),
                this.$nativeSelect.unwrap(),
                e("ul#select-options-".concat(t)).remove()
            }
        }, {
            key: "renderMaterialSelect",
            value: function() {
                var t = this;
                if (this.$nativeSelect.before(this.$selectWrapper),
                this.appendDropdownIcon(),
                this.appendMaterialSelect(),
                this.appendMaterialOptionsList(),
                this.appendNativeSelect(),
                this.appendSaveSelectButton(),
                this.$nativeSelect.is(":disabled") || this.$materialSelect.dropdown({
                    hover: !1,
                    closeOnClick: !1
                }),
                !1 !== this.$nativeSelect.data("inherit-tabindex") && this.$materialSelect.attr("tabindex", this.$nativeSelect.attr("tabindex")),
                this.isMultiple)
                    this.$nativeSelect.find("option:selected:not(:disabled)").each(function(n, i) {
                        var r = e(i).index();
                        t._toggleSelectedValue(r),
                        t.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(r).find(":checkbox").prop("checked", !0)
                    });
                else {
                    var n = this.$nativeSelect.find("option:selected").index();
                    this.$materialOptionsList.find("li").eq(n).addClass("active")
                }
                this.$nativeSelect.addClass("initialized")
            }
        }, {
            key: "appendDropdownIcon",
            value: function() {
                this.$nativeSelect.is(":disabled") && this.$dropdownIcon.addClass("disabled"),
                this.$selectWrapper.append(this.$dropdownIcon)
            }
        }, {
            key: "appendMaterialSelect",
            value: function() {
                this.$selectWrapper.append(this.$materialSelect)
            }
        }, {
            key: "appendMaterialOptionsList",
            value: function() {
                this.isSearchable && this.appendSearchInputOption(),
                this.buildMaterialOptions(),
                this.isMultiple && this.appendToggleAllCheckbox(),
                this.$selectWrapper.append(this.$materialOptionsList)
            }
        }, {
            key: "appendNativeSelect",
            value: function() {
                this.$nativeSelect.appendTo(this.$selectWrapper)
            }
        }, {
            key: "appendSearchInputOption",
            value: function() {
                var t = this.$nativeSelect.attr("searchable");
                this.$searchInput = e('<span class="search-wrap ml-2"><div class="md-form mt-0"><input type="text" class="search form-control w-100 d-block" placeholder="'.concat(t, '"></div></span>')),
                this.$materialOptionsList.append(this.$searchInput)
            }
        }, {
            key: "appendToggleAllCheckbox",
            value: function() {
                this.$materialOptionsList.find("li.disabled").first().after(this.$toggleAll)
            }
        }, {
            key: "appendSaveSelectButton",
            value: function() {
                this.$selectWrapper.parent().find("button.btn-save").appendTo(this.$materialOptionsList)
            }
        }, {
            key: "buildMaterialOptions",
            value: function() {
                var t = this;
                this.$nativeSelectChildren.each(function(n, i) {
                    var r = e(i);
                    if (r.is("option"))
                        t.buildSingleOption(r, t.isMultiple ? "multiple" : "");
                    else if (r.is("optgroup")) {
                        var o = e('<li class="optgroup"><span>'.concat(r.attr("label"), "</span></li>"));
                        t.$materialOptionsList.append(o),
                        r.children("option").each(function(n, i) {
                            t.buildSingleOption(e(i), "optgroup-option")
                        })
                    }
                })
            }
        }, {
            key: "buildSingleOption",
            value: function(t, n) {
                var i = t.is(":disabled") ? "disabled" : ""
                  , r = "optgroup-option" === n ? "optgroup-option" : ""
                  , o = t.data("icon")
                  , s = t.data("fa") ? '<i class="fa fa-'.concat(t.data("fa"), '"></i>') : ""
                  , a = t.attr("class")
                  , l = o ? '<img alt="" src="'.concat(o, '" class="').concat(a, '">') : ""
                  , c = this.isMultiple ? '<input type="checkbox" class="form-check-input" '.concat(i, "/><label></label>") : "";
                this.$materialOptionsList.append(e('<li class="'.concat(i, " ").concat(r, '">').concat(l, '<span class="filtrable">').concat(c, " ").concat(s, " ").concat(t.html(), "</span></li>")))
            }
        }, {
            key: "enableValidation",
            value: function() {
                this.$nativeSelect.css({
                    position: "absolute",
                    top: "1rem",
                    left: "0",
                    height: "0",
                    width: "0",
                    opacity: "0",
                    padding: "0",
                    "pointer-events": "none"
                }),
                -1 === this.$nativeSelect.attr("style").indexOf("inline!important") && this.$nativeSelect.attr("style", "".concat(this.$nativeSelect.attr("style"), " display: inline!important;")),
                this.$nativeSelect.attr("tabindex", -1),
                this.$nativeSelect.data("inherit-tabindex", !1)
            }
        }, {
            key: "bindEvents",
            value: function() {
                var n = this
                  , i = new MutationObserver(this._onMutationObserverChange.bind(this));
                i.observe(this.$nativeSelect.get(0), {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }),
                i.customId = this.uuid,
                i.customStatus = "observing",
                t.clearMutationObservers(),
                t.mutationObservers.push(i),
                this.$nativeSelect.parent().find("button.btn-save").on("click", this._onSaveSelectBtnClick),
                this.$materialSelect.on("focus", this._onMaterialSelectFocus.bind(this)),
                this.$materialSelect.on("click", this._onMaterialSelectClick.bind(this)),
                this.$materialSelect.on("blur", this._onMaterialSelectBlur.bind(this)),
                this.$materialSelect.on("keydown", this._onMaterialSelectKeydown.bind(this)),
                this.$toggleAll.on("click", this._onToggleAllClick.bind(this)),
                this.$materialOptionsList.on("mousedown", this._onEachMaterialOptionMousedown.bind(this)),
                this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each(function(t, i) {
                    e(i).on("click", n._onEachMaterialOptionClick.bind(n, t, i))
                }),
                !this.isMultiple && this.isSearchable && this.$materialOptionsList.find("li").on("click", this._onSingleMaterialOptionClick.bind(this)),
                this.isSearchable && this.$searchInput.find(".search").on("keyup", this._onSearchInputKeyup),
                e("html").on("click", this._onHTMLClick.bind(this))
            }
        }, {
            key: "_onMutationObserverChange",
            value: function(n) {
                n.forEach(function(n) {
                    var i = e(n.target).closest("select");
                    !0 !== i.data("stop-refresh") && ("childList" === n.type || "attributes" === n.type && e(n.target).is("option")) && (t.clearMutationObservers(),
                    i.materialSelect("destroy"),
                    i.materialSelect())
                })
            }
        }, {
            key: "_onSaveSelectBtnClick",
            value: function() {
                e("input.select-dropdown").trigger("close")
            }
        }, {
            key: "_onEachMaterialOptionClick",
            value: function(t, n, i) {
                i.stopPropagation();
                var r = e(n);
                if (!r.hasClass("disabled") && !r.hasClass("optgroup")) {
                    var o = !0;
                    if (this.isMultiple) {
                        r.find('input[type="checkbox"]').prop("checked", function(e, t) {
                            return !t
                        });
                        var s = Boolean(this.$nativeSelect.find("optgroup").length)
                          , a = this._isToggleAllPresent() ? r.index() - 1 : r.index();
                        o = this.isSearchable && s ? this._toggleSelectedValue(a - r.prevAll(".optgroup").length - 1) : this.isSearchable ? this._toggleSelectedValue(a - 1) : s ? this._toggleSelectedValue(a - r.prevAll(".optgroup").length) : this._toggleSelectedValue(a),
                        this._isToggleAllPresent() && this._updateToggleAllOption(),
                        this.$materialSelect.trigger("focus")
                    } else
                        this.$materialOptionsList.find("li").removeClass("active"),
                        r.toggleClass("active"),
                        this.$materialSelect.val(r.text()),
                        this.$materialSelect.trigger("close");
                    this._selectSingleOption(r),
                    this.$nativeSelect.data("stop-refresh", !0),
                    this.$nativeSelect.find("option").eq(t).prop("selected", o),
                    this.$nativeSelect.removeData("stop-refresh"),
                    this._triggerChangeOnNativeSelect(),
                    "function" == typeof this.options && this.options()
                }
            }
        }, {
            key: "_triggerChangeOnNativeSelect",
            value: function() {
                var e = new KeyboardEvent("change",{
                    bubbles: !0,
                    cancelable: !0
                });
                this.$nativeSelect.get(0).dispatchEvent(e)
            }
        }, {
            key: "_onMaterialSelectFocus",
            value: function(t) {
                var n = e(t.target);
                if (e("ul.select-dropdown").not(this.$materialOptionsList.get(0)).is(":visible") && e("input.select-dropdown").trigger("close"),
                !this.$materialOptionsList.is(":visible")) {
                    n.trigger("open", ["focus"]);
                    var i = n.val()
                      , r = this.$materialOptionsList.find("li").filter(function() {
                        return e(this).text().toLowerCase() === i.toLowerCase()
                    })[0];
                    this._selectSingleOption(r)
                }
            }
        }, {
            key: "_onMaterialSelectClick",
            value: function(e) {
                e.stopPropagation()
            }
        }, {
            key: "_onMaterialSelectBlur",
            value: function(t) {
                var n = e(t);
                this.isMultiple || this.isSearchable || n.trigger("close"),
                this.$materialOptionsList.find("li.selected").removeClass("selected")
            }
        }, {
            key: "_onSingleMaterialOptionClick",
            value: function() {
                this.$materialSelect.trigger("close")
            }
        }, {
            key: "_onEachMaterialOptionMousedown",
            value: function(t) {
                var n = t.target;
                e(".modal-content").find(this.$materialOptionsList).length && n.scrollHeight > n.offsetHeight && t.preventDefault()
            }
        }, {
            key: "_onHTMLClick",
            value: function(t) {
                e(t.target).closest("#select-options-".concat(this.uuid)).length || this.$materialSelect.trigger("close")
            }
        }, {
            key: "_onToggleAllClick",
            value: function() {
                var t = this
                  , n = e(this.$toggleAll).find('input[type="checkbox"]').first()
                  , i = !e(n).prop("checked");
                e(n).prop("checked", i),
                this.$materialOptionsList.find("li:not(.optgroup):not(.disabled):not(.select-toggle-all)").each(function(n, r) {
                    var o = e(r).find('input[type="checkbox"]');
                    i && o.is(":checked") || !i && !o.is(":checked") || (t._isToggleAllPresent() && n++,
                    o.prop("checked", i),
                    t.$nativeSelect.find("option").eq(n).prop("selected", i),
                    i ? e(r).removeClass("active") : e(r).addClass("active"),
                    t._toggleSelectedValue(n),
                    t._selectOption(r),
                    t._setValueToMaterialSelect())
                }),
                this.$nativeSelect.data("stop-refresh", !0),
                this._triggerChangeOnNativeSelect(),
                this.$nativeSelect.removeData("stop-refresh")
            }
        }, {
            key: "_onMaterialSelectKeydown",
            value: function(t) {
                var n = e(t.target)
                  , i = t.which === this.keyCodes.tab
                  , r = t.which === this.keyCodes.esc
                  , o = t.which === this.keyCodes.enter
                  , s = t.which === this.keyCodes.arrowUp
                  , a = t.which === this.keyCodes.arrowDown
                  , l = this.$materialOptionsList.is(":visible");
                i ? this._handleTabKey(n) : !a || l ? o && !l || (t.preventDefault(),
                o ? this._handleEnterKey(n) : a ? this._handleArrowDownKey() : s ? this._handleArrowUpKey() : r ? this._handleEscKey(n) : this._handleLetterKey(t)) : n.trigger("open")
            }
        }, {
            key: "_handleTabKey",
            value: function(e) {
                this._handleEscKey(e)
            }
        }, {
            key: "_handleEnterKey",
            value: function(t) {
                var n = e(t);
                this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click"),
                this.isMultiple || n.trigger("close")
            }
        }, {
            key: "_handleArrowDownKey",
            value: function() {
                var e = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").first()
                  , t = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").last()
                  , n = this.$materialOptionsList.find("li.selected").length > 0
                  , i = n ? this.$materialOptionsList.find("li.selected") : e
                  , r = i.is(t) || !n ? i : i.next("li:not(.disabled)");
                this._selectSingleOption(r),
                this.$materialOptionsList.find("li").removeClass("active"),
                r.toggleClass("active")
            }
        }, {
            key: "_handleArrowUpKey",
            value: function() {
                var e = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").first()
                  , t = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").last()
                  , n = this.$materialOptionsList.find("li.selected").length > 0
                  , i = n ? this.$materialOptionsList.find("li.selected") : t
                  , r = i.is(e) || !n ? i : i.prev("li:not(.disabled)");
                this._selectSingleOption(r),
                this.$materialOptionsList.find("li").removeClass("active"),
                r.toggleClass("active")
            }
        }, {
            key: "_handleEscKey",
            value: function(t) {
                e(t).trigger("close")
            }
        }, {
            key: "_handleLetterKey",
            value: function(t) {
                var n = this
                  , i = ""
                  , r = String.fromCharCode(t.which).toLowerCase()
                  , o = Object.keys(this.keyCodes).map(function(e) {
                    return n.keyCodes[e]
                });
                if (r && -1 === o.indexOf(t.which)) {
                    i += r;
                    var s = this.$materialOptionsList.find("li").filter(function() {
                        return -1 !== e(this).text().toLowerCase().indexOf(i)
                    }).first();
                    this.isMultiple || this.$materialOptionsList.find("li").removeClass("active"),
                    s.addClass("active"),
                    this._selectSingleOption(s)
                }
            }
        }, {
            key: "_onSearchInputKeyup",
            value: function(t) {
                var n = e(t.target)
                  , i = n.closest("ul")
                  , r = n.val();
                i.find("li span.filtrable").each(function() {
                    var t = e(this);
                    "string" == typeof this.outerHTML && (this.textContent.toLowerCase().includes(r.toLowerCase()) ? t.show().parent().show() : t.hide().parent().hide())
                })
            }
        }, {
            key: "_isToggleAllPresent",
            value: function() {
                return this.$materialOptionsList.find(this.$toggleAll).length
            }
        }, {
            key: "_updateToggleAllOption",
            value: function() {
                var e = this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled").find("[type=checkbox]")
                  , t = e.filter(":checked")
                  , n = this.$toggleAll.find("[type=checkbox]").is(":checked");
                t.length !== e.length || n ? t.length < e.length && n && this.$toggleAll.find("[type=checkbox]").prop("checked", !1) : this.$toggleAll.find("[type=checkbox]").prop("checked", !0)
            }
        }, {
            key: "_toggleSelectedValue",
            value: function(e) {
                var t = this.valuesSelected.indexOf(e)
                  , n = -1 !== t;
                return n ? this.valuesSelected.splice(t, 1) : this.valuesSelected.push(e),
                this.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(e).toggleClass("active"),
                this.$nativeSelect.find("option").eq(e).prop("selected", !n),
                this._setValueToMaterialSelect(),
                !n
            }
        }, {
            key: "_selectSingleOption",
            value: function(e) {
                this.$materialOptionsList.find("li.selected").removeClass("selected"),
                this._selectOption(e)
            }
        }, {
            key: "_selectOption",
            value: function(t) {
                e(t).addClass("selected")
            }
        }, {
            key: "_setValueToMaterialSelect",
            value: function() {
                for (var e = "", t = this.valuesSelected.length, n = 0; n < t; n++) {
                    var i = this.$nativeSelect.find("option").eq(this.valuesSelected[n]).text();
                    e += ", ".concat(i)
                }
                0 === (e = t >= 5 ? "".concat(t, " options selected") : e.substring(2)).length && (e = this.$nativeSelect.find("option:disabled").eq(0).text()),
                this.$nativeSelect.siblings("input.select-dropdown").val(e)
            }
        }, {
            key: "_randomUUID",
            value: function() {
                var e = (new Date).getTime();
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16),
                    ("x" === t ? n : 3 & n | 8).toString(16)
                })
            }
        }], [{
            key: "clearMutationObservers",
            value: function() {
                t.mutationObservers.forEach(function(e) {
                    e.disconnect(),
                    e.customStatus = "stopped"
                })
            }
        }]),
        t
    }();
    e.fn.materialSelect = function(t) {
        e(this).not(".browser-default").not(".custom-select").each(function() {
            new n(e(this),t).init()
        })
    }
    ,
    e.fn.material_select = e.fn.materialSelect,
    t = e.fn.val,
    e.fn.val = function(e) {
        if (!arguments.length)
            return t.call(this);
        if (!0 !== this.data("stop-refresh") && this.hasClass("mdb-select") && this.hasClass("initialized") && !this.hasClass("browser-default") && !this.hasClass("custom-select")) {
            n.clearMutationObservers(),
            this.materialSelect("destroy");
            var i = t.call(this, e);
            return this.materialSelect(),
            i
        }
        return t.call(this, e)
    }
}(jQuery),
jQuery("select").siblings("input.select-dropdown").on("mousedown", function(e) {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
}),
function(e) {
    var t = 0
      , n = function() {
        function n(i, r) {
            _classCallCheck(this, n),
            this.defaults = {
                topSpacing: t,
                zIndex: !1,
                stopper: ".sticky-stopper",
                stickyClass: !1,
                startScrolling: "top",
                minWidth: !1
            },
            this.$element = i,
            this.options = this.assignOptions(r),
            this.$window = e(window),
            this.stopper = this.options.stopper,
            this.elementWidth = this.$element.outerWidth(),
            this.elementHeight = this.$element.outerHeight(!0),
            this.$placeholder = e('<div class="sticky-placeholder"></div>'),
            this.scrollTop = 0,
            this._getPushPoint(),
            this._getStopperPosition(),
            this.bindEvents()
        }
        return _createClass(n, [{
            key: "assignOptions",
            value: function(t) {
                return e.extend({}, this.defaults, t)
            }
        }, {
            key: "bindEvents",
            value: function() {
                this.$window.on("scroll resize", this.init.bind(this))
            }
        }, {
            key: "hasZIndex",
            value: function() {
                return "number" == typeof this.options.zIndex
            }
        }, {
            key: "hasStopper",
            value: function() {
                return !(!e(this.options.stopper).length && "number" != typeof this.options.stopper)
            }
        }, {
            key: "_getStopperPosition",
            value: function() {
                "string" == typeof this.options.stopper ? this.stopPoint = e(this.stopper).offset().top - .3 * this.options.topSpacing : "number" == typeof this.options.stopper && (this.stopPoint = this.options.stopper)
            }
        }, {
            key: "_getPushPoint",
            value: function() {
                "bottom" === this.options.startScrolling ? this.$pushPoint = this.$element.offset().top + this.$element.outerHeight() - this.$window.innerHeight() : this.$pushPoint = this.$element.offset().top - this.options.topSpacing
            }
        }, {
            key: "init",
            value: function() {
                if (this.options.minWidth && this.options.minWidth > this.$window.innerWidth())
                    return !1;
                this.scrollTop = this.$window.scrollTop(),
                this.$pushPoint < this.scrollTop ? (this._appendPlaceholder(),
                this._stickyStart()) : this._stickyEnd(),
                this._stop()
            }
        }, {
            key: "_appendPlaceholder",
            value: function() {
                this.$element.after(this.$placeholder),
                this.$placeholder.css({
                    width: this.elementWidth,
                    height: this.elementHeight
                })
            }
        }, {
            key: "_stickyStart",
            value: function() {
                if (this.options.stickyClass && this.$element.addClass(this.options.stickyClass),
                this.$element.css({
                    position: "fixed",
                    width: this.elementWidth
                }),
                "bottom" === this.options.startScrolling) {
                    var e = this.$window.innerHeight() - this.$element.height() - this.options.topSpacing / 2;
                    this.$element.css({
                        top: e
                    })
                } else
                    this.$element.css({
                        top: this.options.topSpacing
                    });
                this.hasZIndex() && this.$element.css({
                    zIndex: this.options.zIndex
                })
            }
        }, {
            key: "_stickyEnd",
            value: function() {
                this.options.stickyClass && this.$element.removeClass(this.options.stickyClass),
                this.$placeholder.remove(),
                this.$element.css({
                    position: "static",
                    top: t
                })
            }
        }, {
            key: "_stop",
            value: function() {
                if (this.stopPoint < e(this.$element).offset().top + this.$element.height()) {
                    var t = this.stopPoint - (e(this.$element).offset().top + this.$element.height()) + this.options.topSpacing;
                    "bottom" === this.options.startScrolling && (t = this.stopPoint - (this.scrollTop + this.elementHeight)),
                    this.$element.css({
                        top: t
                    })
                }
            }
        }]),
        n
    }();
    e.fn.sticky = function(t) {
        return this.each(function() {
            new n(e(this),t).init()
        })
    }
}(jQuery),
function e(t, n, i) {
    function r(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)
                    return l(s, !0);
                if (o)
                    return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var u = n[s] = {
                exports: {}
            };
            t[s][0].call(u.exports, function(e) {
                var n = t[s][1][e];
                return r(n || e)
            }, u, u.exports, e, t, n, i)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < i.length; s++)
        r(i[s]);
    return r
}({
    1: [function(e, t, n) {
        "use strict";
        var i = e("../main");
        "function" == typeof define && define.amd ? define(i) : (window.PerfectScrollbar = i,
        void 0 === window.Ps && (window.Ps = i))
    }
    , {
        "../main": 7
    }],
    2: [function(e, t, n) {
        "use strict";
        n.add = function(e, t) {
            e.classList ? e.classList.add(t) : function(e, t) {
                var n = e.className.split(" ");
                n.indexOf(t) < 0 && n.push(t),
                e.className = n.join(" ")
            }(e, t)
        }
        ,
        n.remove = function(e, t) {
            e.classList ? e.classList.remove(t) : function(e, t) {
                var n = e.className.split(" ")
                  , i = n.indexOf(t);
                i >= 0 && n.splice(i, 1),
                e.className = n.join(" ")
            }(e, t)
        }
        ,
        n.list = function(e) {
            return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
        }
    }
    , {}],
    3: [function(e, t, n) {
        "use strict";
        var i = {
            e: function(e, t) {
                var n = document.createElement(e);
                return n.className = t,
                n
            },
            appendTo: function(e, t) {
                return t.appendChild(e),
                e
            }
        };
        i.css = function(e, t, n) {
            return "object" == typeof t ? function(e, t) {
                for (var n in t) {
                    var i = t[n];
                    "number" == typeof i && (i = i.toString() + "px"),
                    e.style[n] = i
                }
                return e
            }(e, t) : void 0 === n ? function(e, t) {
                return window.getComputedStyle(e)[t]
            }(e, t) : function(e, t, n) {
                return "number" == typeof n && (n = n.toString() + "px"),
                e.style[t] = n,
                e
            }(e, t, n)
        }
        ,
        i.matches = function(e, t) {
            return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
        }
        ,
        i.remove = function(e) {
            void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
        }
        ,
        i.queryChildren = function(e, t) {
            return Array.prototype.filter.call(e.childNodes, function(e) {
                return i.matches(e, t)
            })
        }
        ,
        t.exports = i
    }
    , {}],
    4: [function(e, t, n) {
        "use strict";
        var i = function(e) {
            this.element = e,
            this.events = {}
        };
        i.prototype.bind = function(e, t) {
            void 0 === this.events[e] && (this.events[e] = []),
            this.events[e].push(t),
            this.element.addEventListener(e, t, !1)
        }
        ,
        i.prototype.unbind = function(e, t) {
            var n = void 0 !== t;
            this.events[e] = this.events[e].filter(function(i) {
                return !(!n || i === t) || (this.element.removeEventListener(e, i, !1),
                !1)
            }, this)
        }
        ,
        i.prototype.unbindAll = function() {
            for (var e in this.events)
                this.unbind(e)
        }
        ;
        var r = function() {
            this.eventElements = []
        };
        r.prototype.eventElement = function(e) {
            var t = this.eventElements.filter(function(t) {
                return t.element === e
            })[0];
            return void 0 === t && (t = new i(e),
            this.eventElements.push(t)),
            t
        }
        ,
        r.prototype.bind = function(e, t, n) {
            this.eventElement(e).bind(t, n)
        }
        ,
        r.prototype.unbind = function(e, t, n) {
            this.eventElement(e).unbind(t, n)
        }
        ,
        r.prototype.unbindAll = function() {
            for (var e = 0; e < this.eventElements.length; e++)
                this.eventElements[e].unbindAll()
        }
        ,
        r.prototype.once = function(e, t, n) {
            var i = this.eventElement(e)
              , r = function(e) {
                i.unbind(t, r),
                n(e)
            };
            i.bind(t, r)
        }
        ,
        t.exports = r
    }
    , {}],
    5: [function(e, t, n) {
        "use strict";
        t.exports = function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        }()
    }
    , {}],
    6: [function(e, t, n) {
        "use strict";
        function i(e) {
            return function(t, n) {
                e(t, "ps--in-scrolling"),
                void 0 !== n ? e(t, "ps--" + n) : (e(t, "ps--x"),
                e(t, "ps--y"))
            }
        }
        var r = e("./class")
          , o = e("./dom")
          , s = n.toInt = function(e) {
            return parseInt(e, 10) || 0
        }
          , a = n.clone = function(e) {
            if (e) {
                if (Array.isArray(e))
                    return e.map(a);
                if ("object" == typeof e) {
                    var t = {};
                    for (var n in e)
                        t[n] = a(e[n]);
                    return t
                }
                return e
            }
            return null
        }
        ;
        n.extend = function(e, t) {
            var n = a(e);
            for (var i in t)
                n[i] = a(t[i]);
            return n
        }
        ,
        n.isEditable = function(e) {
            return o.matches(e, "input,[contenteditable]") || o.matches(e, "select,[contenteditable]") || o.matches(e, "textarea,[contenteditable]") || o.matches(e, "button,[contenteditable]")
        }
        ,
        n.removePsClasses = function(e) {
            for (var t = r.list(e), n = 0; n < t.length; n++) {
                var i = t[n];
                0 === i.indexOf("ps-") && r.remove(e, i)
            }
        }
        ,
        n.outerWidth = function(e) {
            return s(o.css(e, "width")) + s(o.css(e, "paddingLeft")) + s(o.css(e, "paddingRight")) + s(o.css(e, "borderLeftWidth")) + s(o.css(e, "borderRightWidth"))
        }
        ,
        n.startScrolling = i(r.add),
        n.stopScrolling = i(r.remove),
        n.env = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
        }
    }
    , {
        "./class": 2,
        "./dom": 3
    }],
    7: [function(e, t, n) {
        "use strict";
        var i = e("./plugin/destroy")
          , r = e("./plugin/initialize")
          , o = e("./plugin/update");
        t.exports = {
            initialize: r,
            update: o,
            destroy: i
        }
    }
    , {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21
    }],
    8: [function(e, t, n) {
        "use strict";
        t.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }
    , {}],
    9: [function(e, t, n) {
        "use strict";
        var i = e("../lib/helper")
          , r = e("../lib/dom")
          , o = e("./instances");
        t.exports = function(e) {
            var t = o.get(e);
            t && (t.event.unbindAll(),
            r.remove(t.scrollbarX),
            r.remove(t.scrollbarY),
            r.remove(t.scrollbarXRail),
            r.remove(t.scrollbarYRail),
            i.removePsClasses(e),
            o.remove(e))
        }
    }
    , {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10: [function(e, t, n) {
        "use strict";
        var i = e("../instances")
          , r = e("../update-geometry")
          , o = e("../update-scroll");
        t.exports = function(e) {
            !function(e, t) {
                function n(e) {
                    return e.getBoundingClientRect()
                }
                var i = function(e) {
                    e.stopPropagation()
                };
                t.event.bind(t.scrollbarY, "click", i),
                t.event.bind(t.scrollbarYRail, "click", function(i) {
                    var s = i.pageY - window.pageYOffset - n(t.scrollbarYRail).top > t.scrollbarYTop ? 1 : -1;
                    o(e, "top", e.scrollTop + s * t.containerHeight),
                    r(e),
                    i.stopPropagation()
                }),
                t.event.bind(t.scrollbarX, "click", i),
                t.event.bind(t.scrollbarXRail, "click", function(i) {
                    var s = i.pageX - window.pageXOffset - n(t.scrollbarXRail).left > t.scrollbarXLeft ? 1 : -1;
                    o(e, "left", e.scrollLeft + s * t.containerWidth),
                    r(e),
                    i.stopPropagation()
                })
            }(e, i.get(e))
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    11: [function(e, t, n) {
        "use strict";
        var i = e("../../lib/helper")
          , r = e("../../lib/dom")
          , o = e("../instances")
          , s = e("../update-geometry")
          , a = e("../update-scroll");
        t.exports = function(e) {
            var t = o.get(e);
            (function(e, t) {
                function n(n) {
                    var r = o + n * t.railXRatio
                      , s = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                    t.scrollbarXLeft = r < 0 ? 0 : r > s ? s : r;
                    var l = i.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                    a(e, "left", l)
                }
                var o = null
                  , l = null
                  , c = function(t) {
                    n(t.pageX - l),
                    s(e),
                    t.stopPropagation(),
                    t.preventDefault()
                }
                  , u = function() {
                    i.stopScrolling(e, "x"),
                    t.event.unbind(t.ownerDocument, "mousemove", c)
                };
                t.event.bind(t.scrollbarX, "mousedown", function(n) {
                    l = n.pageX,
                    o = i.toInt(r.css(t.scrollbarX, "left")) * t.railXRatio,
                    i.startScrolling(e, "x"),
                    t.event.bind(t.ownerDocument, "mousemove", c),
                    t.event.once(t.ownerDocument, "mouseup", u),
                    n.stopPropagation(),
                    n.preventDefault()
                })
            }
            )(e, t),
            function(e, t) {
                function n(n) {
                    var r = o + n * t.railYRatio
                      , s = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                    t.scrollbarYTop = r < 0 ? 0 : r > s ? s : r;
                    var l = i.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                    a(e, "top", l)
                }
                var o = null
                  , l = null
                  , c = function(t) {
                    n(t.pageY - l),
                    s(e),
                    t.stopPropagation(),
                    t.preventDefault()
                }
                  , u = function() {
                    i.stopScrolling(e, "y"),
                    t.event.unbind(t.ownerDocument, "mousemove", c)
                };
                t.event.bind(t.scrollbarY, "mousedown", function(n) {
                    l = n.pageY,
                    o = i.toInt(r.css(t.scrollbarY, "top")) * t.railYRatio,
                    i.startScrolling(e, "y"),
                    t.event.bind(t.ownerDocument, "mousemove", c),
                    t.event.once(t.ownerDocument, "mouseup", u),
                    n.stopPropagation(),
                    n.preventDefault()
                })
            }(e, t)
        }
    }
    , {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function(e, t, n) {
        "use strict";
        function i(e, t) {
            var n = !1;
            t.event.bind(e, "mouseenter", function() {
                n = !0
            }),
            t.event.bind(e, "mouseleave", function() {
                n = !1
            });
            t.event.bind(t.ownerDocument, "keydown", function(i) {
                if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented)) {
                    var s = o.matches(t.scrollbarX, ":focus") || o.matches(t.scrollbarY, ":focus");
                    if (n || s) {
                        var c = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (c) {
                            if ("IFRAME" === c.tagName)
                                c = c.contentDocument.activeElement;
                            else
                                for (; c.shadowRoot; )
                                    c = c.shadowRoot.activeElement;
                            if (r.isEditable(c))
                                return
                        }
                        var u = 0
                          , d = 0;
                        switch (i.which) {
                        case 37:
                            u = i.metaKey ? -t.contentWidth : i.altKey ? -t.containerWidth : -30;
                            break;
                        case 38:
                            d = i.metaKey ? t.contentHeight : i.altKey ? t.containerHeight : 30;
                            break;
                        case 39:
                            u = i.metaKey ? t.contentWidth : i.altKey ? t.containerWidth : 30;
                            break;
                        case 40:
                            d = i.metaKey ? -t.contentHeight : i.altKey ? -t.containerHeight : -30;
                            break;
                        case 33:
                            d = 90;
                            break;
                        case 32:
                            d = i.shiftKey ? 90 : -90;
                            break;
                        case 34:
                            d = -90;
                            break;
                        case 35:
                            d = i.ctrlKey ? -t.contentHeight : -t.containerHeight;
                            break;
                        case 36:
                            d = i.ctrlKey ? e.scrollTop : t.containerHeight;
                            break;
                        default:
                            return
                        }
                        l(e, "top", e.scrollTop - d),
                        l(e, "left", e.scrollLeft + u),
                        a(e),
                        function(n, i) {
                            var r = e.scrollTop;
                            if (0 === n) {
                                if (!t.scrollbarYActive)
                                    return !1;
                                if (0 === r && i > 0 || r >= t.contentHeight - t.containerHeight && i < 0)
                                    return !t.settings.wheelPropagation
                            }
                            var o = e.scrollLeft;
                            if (0 === i) {
                                if (!t.scrollbarXActive)
                                    return !1;
                                if (0 === o && n < 0 || o >= t.contentWidth - t.containerWidth && n > 0)
                                    return !t.settings.wheelPropagation
                            }
                            return !0
                        }(u, d) && i.preventDefault()
                    }
                }
            })
        }
        var r = e("../../lib/helper")
          , o = e("../../lib/dom")
          , s = e("../instances")
          , a = e("../update-geometry")
          , l = e("../update-scroll");
        t.exports = function(e) {
            i(e, s.get(e))
        }
    }
    , {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function(e, t, n) {
        "use strict";
        function i(e, t) {
            function n(n) {
                var r = function(e) {
                    var t = e.deltaX
                      , n = -1 * e.deltaY;
                    return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6,
                    n = e.wheelDeltaY / 6),
                    e.deltaMode && 1 === e.deltaMode && (t *= 10,
                    n *= 10),
                    t != t && n != n && (t = 0,
                    n = e.wheelDelta),
                    e.shiftKey ? [-n, -t] : [t, n]
                }(n)
                  , a = r[0]
                  , l = r[1];
                (function(t, n) {
                    var i = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                    if (i) {
                        var r = window.getComputedStyle(i);
                        if (![r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/))
                            return !1;
                        var o = i.scrollHeight - i.clientHeight;
                        if (o > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === o && n < 0))
                            return !0;
                        var s = i.scrollLeft - i.clientWidth;
                        if (s > 0 && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === s && t > 0))
                            return !0
                    }
                    return !1
                }
                )(a, l) || (i = !1,
                t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (s(e, "top", l ? e.scrollTop - l * t.settings.wheelSpeed : e.scrollTop + a * t.settings.wheelSpeed),
                i = !0) : t.scrollbarXActive && !t.scrollbarYActive && (s(e, "left", a ? e.scrollLeft + a * t.settings.wheelSpeed : e.scrollLeft - l * t.settings.wheelSpeed),
                i = !0) : (s(e, "top", e.scrollTop - l * t.settings.wheelSpeed),
                s(e, "left", e.scrollLeft + a * t.settings.wheelSpeed)),
                o(e),
                (i = i || function(n, i) {
                    var r = e.scrollTop;
                    if (0 === n) {
                        if (!t.scrollbarYActive)
                            return !1;
                        if (0 === r && i > 0 || r >= t.contentHeight - t.containerHeight && i < 0)
                            return !t.settings.wheelPropagation
                    }
                    var o = e.scrollLeft;
                    if (0 === i) {
                        if (!t.scrollbarXActive)
                            return !1;
                        if (0 === o && n < 0 || o >= t.contentWidth - t.containerWidth && n > 0)
                            return !t.settings.wheelPropagation
                    }
                    return !0
                }(a, l)) && (n.stopPropagation(),
                n.preventDefault()))
            }
            var i = !1;
            void 0 !== window.onwheel ? t.event.bind(e, "wheel", n) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", n)
        }
        var r = e("../instances")
          , o = e("../update-geometry")
          , s = e("../update-scroll");
        t.exports = function(e) {
            i(e, r.get(e))
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    14: [function(e, t, n) {
        "use strict";
        var i = e("../instances")
          , r = e("../update-geometry");
        t.exports = function(e) {
            !function(e, t) {
                t.event.bind(e, "scroll", function() {
                    r(e)
                })
            }(e, i.get(e))
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15: [function(e, t, n) {
        "use strict";
        function i(e, t) {
            function n() {
                l || (l = setInterval(function() {
                    return o.get(e) ? (a(e, "top", e.scrollTop + c.top),
                    a(e, "left", e.scrollLeft + c.left),
                    void s(e)) : void clearInterval(l)
                }, 50))
            }
            function i() {
                l && (clearInterval(l),
                l = null),
                r.stopScrolling(e)
            }
            var l = null
              , c = {
                top: 0,
                left: 0
            }
              , u = !1;
            t.event.bind(t.ownerDocument, "selectionchange", function() {
                e.contains(function() {
                    var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
                }()) ? u = !0 : (u = !1,
                i())
            }),
            t.event.bind(window, "mouseup", function() {
                u && (u = !1,
                i())
            }),
            t.event.bind(window, "keyup", function() {
                u && (u = !1,
                i())
            }),
            t.event.bind(window, "mousemove", function(t) {
                if (u) {
                    var o = {
                        x: t.pageX,
                        y: t.pageY
                    }
                      , s = {
                        left: e.offsetLeft,
                        right: e.offsetLeft + e.offsetWidth,
                        top: e.offsetTop,
                        bottom: e.offsetTop + e.offsetHeight
                    };
                    o.x < s.left + 3 ? (c.left = -5,
                    r.startScrolling(e, "x")) : o.x > s.right - 3 ? (c.left = 5,
                    r.startScrolling(e, "x")) : c.left = 0,
                    o.y < s.top + 3 ? (c.top = s.top + 3 - o.y < 5 ? -5 : -20,
                    r.startScrolling(e, "y")) : o.y > s.bottom - 3 ? (c.top = o.y - s.bottom + 3 < 5 ? 5 : 20,
                    r.startScrolling(e, "y")) : c.top = 0,
                    0 === c.top && 0 === c.left ? i() : n()
                }
            })
        }
        var r = e("../../lib/helper")
          , o = e("../instances")
          , s = e("../update-geometry")
          , a = e("../update-scroll");
        t.exports = function(e) {
            i(e, o.get(e))
        }
    }
    , {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    16: [function(e, t, n) {
        "use strict";
        var i = e("../../lib/helper")
          , r = e("../instances")
          , o = e("../update-geometry")
          , s = e("../update-scroll");
        t.exports = function(e) {
            (i.env.supportsTouch || i.env.supportsIePointer) && function(e, t, n, i) {
                function a(n, i) {
                    var r = e.scrollTop
                      , o = e.scrollLeft
                      , s = Math.abs(n)
                      , a = Math.abs(i);
                    if (a > s) {
                        if (i < 0 && r === t.contentHeight - t.containerHeight || i > 0 && 0 === r)
                            return !t.settings.swipePropagation
                    } else if (s > a && (n < 0 && o === t.contentWidth - t.containerWidth || n > 0 && 0 === o))
                        return !t.settings.swipePropagation;
                    return !0
                }
                function l(t, n) {
                    s(e, "top", e.scrollTop - n),
                    s(e, "left", e.scrollLeft - t),
                    o(e)
                }
                function c() {
                    w = !0
                }
                function u() {
                    w = !1
                }
                function d(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }
                function f(e) {
                    return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                }
                function h(e) {
                    if (f(e)) {
                        _ = !0;
                        var t = d(e);
                        m.pageX = t.pageX,
                        m.pageY = t.pageY,
                        v = (new Date).getTime(),
                        null !== b && clearInterval(b),
                        e.stopPropagation()
                    }
                }
                function p(e) {
                    if (!_ && t.settings.swipePropagation && h(e),
                    !w && _ && f(e)) {
                        var n = d(e)
                          , i = {
                            pageX: n.pageX,
                            pageY: n.pageY
                        }
                          , r = i.pageX - m.pageX
                          , o = i.pageY - m.pageY;
                        l(r, o),
                        m = i;
                        var s = (new Date).getTime()
                          , c = s - v;
                        c > 0 && (y.x = r / c,
                        y.y = o / c,
                        v = s),
                        a(r, o) && (e.stopPropagation(),
                        e.preventDefault())
                    }
                }
                function g() {
                    !w && _ && (_ = !1,
                    t.settings.swipeEasing && (clearInterval(b),
                    b = setInterval(function() {
                        return r.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y),
                        y.x *= .8,
                        void (y.y *= .8)) : void clearInterval(b)
                    }, 10)))
                }
                var m = {}
                  , v = 0
                  , y = {}
                  , b = null
                  , w = !1
                  , _ = !1;
                n ? (t.event.bind(window, "touchstart", c),
                t.event.bind(window, "touchend", u),
                t.event.bind(e, "touchstart", h),
                t.event.bind(e, "touchmove", p),
                t.event.bind(e, "touchend", g)) : i && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c),
                t.event.bind(window, "pointerup", u),
                t.event.bind(e, "pointerdown", h),
                t.event.bind(e, "pointermove", p),
                t.event.bind(e, "pointerup", g)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c),
                t.event.bind(window, "MSPointerUp", u),
                t.event.bind(e, "MSPointerDown", h),
                t.event.bind(e, "MSPointerMove", p),
                t.event.bind(e, "MSPointerUp", g)))
            }(e, r.get(e), i.env.supportsTouch, i.env.supportsIePointer)
        }
    }
    , {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    17: [function(e, t, n) {
        "use strict";
        var i = e("../lib/helper")
          , r = e("../lib/class")
          , o = e("./instances")
          , s = e("./update-geometry")
          , a = {
            "click-rail": e("./handler/click-rail"),
            "drag-scrollbar": e("./handler/drag-scrollbar"),
            keyboard: e("./handler/keyboard"),
            wheel: e("./handler/mouse-wheel"),
            touch: e("./handler/touch"),
            selection: e("./handler/selection")
        }
          , l = e("./handler/native-scroll");
        t.exports = function(e, t) {
            t = "object" == typeof t ? t : {},
            r.add(e, "ps");
            var n = o.add(e);
            n.settings = i.extend(n.settings, t),
            r.add(e, "ps--theme_" + n.settings.theme),
            n.settings.handlers.forEach(function(t) {
                a[t](e)
            }),
            l(e),
            s(e)
        }
    }
    , {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function(e, t, n) {
        "use strict";
        function i(e) {
            return e.getAttribute("data-ps-id")
        }
        var r = e("../lib/helper")
          , o = e("../lib/class")
          , s = e("./default-setting")
          , a = e("../lib/dom")
          , l = e("../lib/event-manager")
          , c = e("../lib/guid")
          , u = {};
        n.add = function(e) {
            var t = c();
            return function(e, t) {
                e.setAttribute("data-ps-id", t)
            }(e, t),
            u[t] = new function(e) {
                function t() {
                    o.add(e, "ps--focus")
                }
                function n() {
                    o.remove(e, "ps--focus")
                }
                var i = this;
                i.settings = r.clone(s),
                i.containerWidth = null,
                i.containerHeight = null,
                i.contentWidth = null,
                i.contentHeight = null,
                i.isRtl = "rtl" === a.css(e, "direction"),
                i.isNegativeScroll = function() {
                    var t, n = e.scrollLeft;
                    return e.scrollLeft = -1,
                    t = e.scrollLeft < 0,
                    e.scrollLeft = n,
                    t
                }(),
                i.negativeScrollAdjustment = i.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0,
                i.event = new l,
                i.ownerDocument = e.ownerDocument || document,
                i.scrollbarXRail = a.appendTo(a.e("div", "ps__scrollbar-x-rail"), e),
                i.scrollbarX = a.appendTo(a.e("div", "ps__scrollbar-x"), i.scrollbarXRail),
                i.scrollbarX.setAttribute("tabindex", 0),
                i.event.bind(i.scrollbarX, "focus", t),
                i.event.bind(i.scrollbarX, "blur", n),
                i.scrollbarXActive = null,
                i.scrollbarXWidth = null,
                i.scrollbarXLeft = null,
                i.scrollbarXBottom = r.toInt(a.css(i.scrollbarXRail, "bottom")),
                i.isScrollbarXUsingBottom = i.scrollbarXBottom == i.scrollbarXBottom,
                i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : r.toInt(a.css(i.scrollbarXRail, "top")),
                i.railBorderXWidth = r.toInt(a.css(i.scrollbarXRail, "borderLeftWidth")) + r.toInt(a.css(i.scrollbarXRail, "borderRightWidth")),
                a.css(i.scrollbarXRail, "display", "block"),
                i.railXMarginWidth = r.toInt(a.css(i.scrollbarXRail, "marginLeft")) + r.toInt(a.css(i.scrollbarXRail, "marginRight")),
                a.css(i.scrollbarXRail, "display", ""),
                i.railXWidth = null,
                i.railXRatio = null,
                i.scrollbarYRail = a.appendTo(a.e("div", "ps__scrollbar-y-rail"), e),
                i.scrollbarY = a.appendTo(a.e("div", "ps__scrollbar-y"), i.scrollbarYRail),
                i.scrollbarY.setAttribute("tabindex", 0),
                i.event.bind(i.scrollbarY, "focus", t),
                i.event.bind(i.scrollbarY, "blur", n),
                i.scrollbarYActive = null,
                i.scrollbarYHeight = null,
                i.scrollbarYTop = null,
                i.scrollbarYRight = r.toInt(a.css(i.scrollbarYRail, "right")),
                i.isScrollbarYUsingRight = i.scrollbarYRight == i.scrollbarYRight,
                i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : r.toInt(a.css(i.scrollbarYRail, "left")),
                i.scrollbarYOuterWidth = i.isRtl ? r.outerWidth(i.scrollbarY) : null,
                i.railBorderYWidth = r.toInt(a.css(i.scrollbarYRail, "borderTopWidth")) + r.toInt(a.css(i.scrollbarYRail, "borderBottomWidth")),
                a.css(i.scrollbarYRail, "display", "block"),
                i.railYMarginHeight = r.toInt(a.css(i.scrollbarYRail, "marginTop")) + r.toInt(a.css(i.scrollbarYRail, "marginBottom")),
                a.css(i.scrollbarYRail, "display", ""),
                i.railYHeight = null,
                i.railYRatio = null
            }
            (e),
            u[t]
        }
        ,
        n.remove = function(e) {
            delete u[i(e)],
            function(e) {
                e.removeAttribute("data-ps-id")
            }(e)
        }
        ,
        n.get = function(e) {
            return u[i(e)]
        }
    }
    , {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function(e, t, n) {
        "use strict";
        function i(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
            e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
            t
        }
        var r = e("../lib/helper")
          , o = e("../lib/class")
          , s = e("../lib/dom")
          , a = e("./instances")
          , l = e("./update-scroll");
        t.exports = function(e) {
            var t, n = a.get(e);
            n.containerWidth = e.clientWidth,
            n.containerHeight = e.clientHeight,
            n.contentWidth = e.scrollWidth,
            n.contentHeight = e.scrollHeight,
            e.contains(n.scrollbarXRail) || ((t = s.queryChildren(e, ".ps__scrollbar-x-rail")).length > 0 && t.forEach(function(e) {
                s.remove(e)
            }),
            s.appendTo(n.scrollbarXRail, e)),
            e.contains(n.scrollbarYRail) || ((t = s.queryChildren(e, ".ps__scrollbar-y-rail")).length > 0 && t.forEach(function(e) {
                s.remove(e)
            }),
            s.appendTo(n.scrollbarYRail, e)),
            !n.settings.suppressScrollX && n.containerWidth + n.settings.scrollXMarginOffset < n.contentWidth ? (n.scrollbarXActive = !0,
            n.railXWidth = n.containerWidth - n.railXMarginWidth,
            n.railXRatio = n.containerWidth / n.railXWidth,
            n.scrollbarXWidth = i(n, r.toInt(n.railXWidth * n.containerWidth / n.contentWidth)),
            n.scrollbarXLeft = r.toInt((n.negativeScrollAdjustment + e.scrollLeft) * (n.railXWidth - n.scrollbarXWidth) / (n.contentWidth - n.containerWidth))) : n.scrollbarXActive = !1,
            !n.settings.suppressScrollY && n.containerHeight + n.settings.scrollYMarginOffset < n.contentHeight ? (n.scrollbarYActive = !0,
            n.railYHeight = n.containerHeight - n.railYMarginHeight,
            n.railYRatio = n.containerHeight / n.railYHeight,
            n.scrollbarYHeight = i(n, r.toInt(n.railYHeight * n.containerHeight / n.contentHeight)),
            n.scrollbarYTop = r.toInt(e.scrollTop * (n.railYHeight - n.scrollbarYHeight) / (n.contentHeight - n.containerHeight))) : n.scrollbarYActive = !1,
            n.scrollbarXLeft >= n.railXWidth - n.scrollbarXWidth && (n.scrollbarXLeft = n.railXWidth - n.scrollbarXWidth),
            n.scrollbarYTop >= n.railYHeight - n.scrollbarYHeight && (n.scrollbarYTop = n.railYHeight - n.scrollbarYHeight),
            function(e, t) {
                var n = {
                    width: t.railXWidth
                };
                t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft,
                t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop,
                s.css(t.scrollbarXRail, n);
                var i = {
                    top: e.scrollTop,
                    height: t.railYHeight
                };
                t.isScrollbarYUsingRight ? t.isRtl ? i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : i.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : i.left = t.scrollbarYLeft + e.scrollLeft,
                s.css(t.scrollbarYRail, i),
                s.css(t.scrollbarX, {
                    left: t.scrollbarXLeft,
                    width: t.scrollbarXWidth - t.railBorderXWidth
                }),
                s.css(t.scrollbarY, {
                    top: t.scrollbarYTop,
                    height: t.scrollbarYHeight - t.railBorderYWidth
                })
            }(e, n),
            n.scrollbarXActive ? o.add(e, "ps--active-x") : (o.remove(e, "ps--active-x"),
            n.scrollbarXWidth = 0,
            n.scrollbarXLeft = 0,
            l(e, "left", 0)),
            n.scrollbarYActive ? o.add(e, "ps--active-y") : (o.remove(e, "ps--active-y"),
            n.scrollbarYHeight = 0,
            n.scrollbarYTop = 0,
            l(e, "top", 0))
        }
    }
    , {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20
    }],
    20: [function(e, t, n) {
        "use strict";
        var i = e("./instances")
          , r = function(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0),
            t
        };
        t.exports = function(e, t, n) {
            if (void 0 === e)
                throw "You must provide an element to the update-scroll function";
            if (void 0 === t)
                throw "You must provide an axis to the update-scroll function";
            if (void 0 === n)
                throw "You must provide a value to the update-scroll function";
            "top" === t && n <= 0 && (e.scrollTop = n = 0,
            e.dispatchEvent(r("ps-y-reach-start"))),
            "left" === t && n <= 0 && (e.scrollLeft = n = 0,
            e.dispatchEvent(r("ps-x-reach-start")));
            var o = i.get(e);
            "top" === t && n >= o.contentHeight - o.containerHeight && ((n = o.contentHeight - o.containerHeight) - e.scrollTop <= 1 ? n = e.scrollTop : e.scrollTop = n,
            e.dispatchEvent(r("ps-y-reach-end"))),
            "left" === t && n >= o.contentWidth - o.containerWidth && ((n = o.contentWidth - o.containerWidth) - e.scrollLeft <= 1 ? n = e.scrollLeft : e.scrollLeft = n,
            e.dispatchEvent(r("ps-x-reach-end"))),
            void 0 === o.lastTop && (o.lastTop = e.scrollTop),
            void 0 === o.lastLeft && (o.lastLeft = e.scrollLeft),
            "top" === t && n < o.lastTop && e.dispatchEvent(r("ps-scroll-up")),
            "top" === t && n > o.lastTop && e.dispatchEvent(r("ps-scroll-down")),
            "left" === t && n < o.lastLeft && e.dispatchEvent(r("ps-scroll-left")),
            "left" === t && n > o.lastLeft && e.dispatchEvent(r("ps-scroll-right")),
            "top" === t && n !== o.lastTop && (e.scrollTop = o.lastTop = n,
            e.dispatchEvent(r("ps-scroll-y"))),
            "left" === t && n !== o.lastLeft && (e.scrollLeft = o.lastLeft = n,
            e.dispatchEvent(r("ps-scroll-x")))
        }
    }
    , {
        "./instances": 18
    }],
    21: [function(e, t, n) {
        "use strict";
        var i = e("../lib/helper")
          , r = e("../lib/dom")
          , o = e("./instances")
          , s = e("./update-geometry")
          , a = e("./update-scroll");
        t.exports = function(e) {
            var t = o.get(e);
            t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0,
            r.css(t.scrollbarXRail, "display", "block"),
            r.css(t.scrollbarYRail, "display", "block"),
            t.railXMarginWidth = i.toInt(r.css(t.scrollbarXRail, "marginLeft")) + i.toInt(r.css(t.scrollbarXRail, "marginRight")),
            t.railYMarginHeight = i.toInt(r.css(t.scrollbarYRail, "marginTop")) + i.toInt(r.css(t.scrollbarYRail, "marginBottom")),
            r.css(t.scrollbarXRail, "display", "none"),
            r.css(t.scrollbarYRail, "display", "none"),
            s(e),
            a(e, "top", e.scrollTop),
            a(e, "left", e.scrollLeft),
            r.css(t.scrollbarXRail, "display", ""),
            r.css(t.scrollbarYRail, "display", ""))
        }
    }
    , {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20
    }]
}, {}, [1]),
$.fn.mdb_autocomplete = function(e) {
    return e = $.extend({
        data: {}
    }, e),
    this.each(function() {
        var t, n = $(this), i = e.data;
        Object.keys(i).length && (t = $('<ul class="mdb-autocomplete-wrap"></ul>')).insertAfter($(this)),
        n.on("keyup", function(e) {
            var r = n.val();
            if (t.empty(),
            r.length)
                for (var o in i)
                    if (-1 !== i[o].toLowerCase().indexOf(r.toLowerCase())) {
                        var s = $("<li>".concat(i[o], "</li>"));
                        t.append(s)
                    }
            13 === e.which && (t.children(":first").trigger("click"),
            t.empty()),
            0 === r.length ? $(".mdb-autocomplete-clear").css("visibility", "hidden") : $(".mdb-autocomplete-clear").css("visibility", "visible")
        }),
        t.on("click", "li", function() {
            n.val($(this).text()),
            t.empty()
        }),
        $(".mdb-autocomplete-clear").on("click", function(e) {
            e.preventDefault(),
            n.val(""),
            $(this).css("visibility", "hidden"),
            t.empty(),
            $(this).parent().find("label").removeClass("active")
        })
    })
}
,
$("body").on("shown.bs.modal", ".modal", function() {
    $(".modal-backdrop").length || ($modal_dialog = $(this).children(".modal-dialog"),
    $modal_dialog.hasClass("modal-side") && ($(this).addClass("modal-scrolling"),
    $("body").addClass("scrollable")),
    $modal_dialog.hasClass("modal-frame") && ($(this).addClass("modal-content-clickable"),
    $("body").addClass("scrollable")))
}),
$("body").on("hidden.bs.modal", ".modal", function() {
    $("body").removeClass("scrollable")
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}
  , Prism = function() {
    var e = /\blang(?:uage)?-([\w-]+)\b/i
      , t = 0
      , n = _self.Prism = {
        manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        util: {
            encode: function(e) {
                return e instanceof i ? new i(e.type,n.util.encode(e.content),e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            },
            type: function(e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++t
                }),
                e.__id
            },
            clone: function(e, t) {
                var i = n.util.type(e);
                switch (t = t || {},
                i) {
                case "Object":
                    if (t[n.util.objId(e)])
                        return t[n.util.objId(e)];
                    var r = {};
                    for (var o in t[n.util.objId(e)] = r,
                    e)
                        e.hasOwnProperty(o) && (r[o] = n.util.clone(e[o], t));
                    return r;
                case "Array":
                    if (t[n.util.objId(e)])
                        return t[n.util.objId(e)];
                    r = [];
                    return t[n.util.objId(e)] = r,
                    e.forEach(function(e, i) {
                        r[i] = n.util.clone(e, t)
                    }),
                    r
                }
                return e
            }
        },
        languages: {
            extend: function(e, t) {
                var i = n.util.clone(n.languages[e]);
                for (var r in t)
                    i[r] = t[r];
                return i
            },
            insertBefore: function(e, t, i, r) {
                var o = (r = r || n.languages)[e];
                if (2 == arguments.length) {
                    for (var s in i = arguments[1])
                        i.hasOwnProperty(s) && (o[s] = i[s]);
                    return o
                }
                var a = {};
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        if (l == t)
                            for (var s in i)
                                i.hasOwnProperty(s) && (a[s] = i[s]);
                        a[l] = o[l]
                    }
                return n.languages.DFS(n.languages, function(t, n) {
                    n === r[e] && t != e && (this[t] = a)
                }),
                r[e] = a
            },
            DFS: function(e, t, i, r) {
                for (var o in r = r || {},
                e)
                    e.hasOwnProperty(o) && (t.call(e, o, e[o], i || o),
                    "Object" !== n.util.type(e[o]) || r[n.util.objId(e[o])] ? "Array" !== n.util.type(e[o]) || r[n.util.objId(e[o])] || (r[n.util.objId(e[o])] = !0,
                    n.languages.DFS(e[o], t, o, r)) : (r[n.util.objId(e[o])] = !0,
                    n.languages.DFS(e[o], t, null, r)))
            }
        },
        plugins: {},
        highlightAll: function(e, t) {
            n.highlightAllUnder(document, e, t)
        },
        highlightAllUnder: function(e, t, i) {
            var r = {
                callback: i,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            n.hooks.run("before-highlightall", r);
            for (var o, s = r.elements || e.querySelectorAll(r.selector), a = 0; o = s[a++]; )
                n.highlightElement(o, !0 === t, r.callback)
        },
        highlightElement: function(t, i, r) {
            for (var o, s, a = t; a && !e.test(a.className); )
                a = a.parentNode;
            a && (o = (a.className.match(e) || [, ""])[1].toLowerCase(),
            s = n.languages[o]),
            t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o,
            t.parentNode && (a = t.parentNode,
            /pre/i.test(a.nodeName) && (a.className = a.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o));
            var l = {
                element: t,
                language: o,
                grammar: s,
                code: t.textContent
            };
            if (n.hooks.run("before-sanity-check", l),
            !l.code || !l.grammar)
                return l.code && (n.hooks.run("before-highlight", l),
                l.element.textContent = l.code,
                n.hooks.run("after-highlight", l)),
                void n.hooks.run("complete", l);
            if (n.hooks.run("before-highlight", l),
            i && _self.Worker) {
                var c = new Worker(n.filename);
                c.onmessage = function(e) {
                    l.highlightedCode = e.data,
                    n.hooks.run("before-insert", l),
                    l.element.innerHTML = l.highlightedCode,
                    r && r.call(l.element),
                    n.hooks.run("after-highlight", l),
                    n.hooks.run("complete", l)
                }
                ,
                c.postMessage(JSON.stringify({
                    language: l.language,
                    code: l.code,
                    immediateClose: !0
                }))
            } else
                l.highlightedCode = n.highlight(l.code, l.grammar, l.language),
                n.hooks.run("before-insert", l),
                l.element.innerHTML = l.highlightedCode,
                r && r.call(t),
                n.hooks.run("after-highlight", l),
                n.hooks.run("complete", l)
        },
        highlight: function(e, t, r) {
            var o = {
                code: e,
                grammar: t,
                language: r
            };
            return n.hooks.run("before-tokenize", o),
            o.tokens = n.tokenize(o.code, o.grammar),
            n.hooks.run("after-tokenize", o),
            i.stringify(n.util.encode(o.tokens), o.language)
        },
        matchGrammar: function(e, t, i, r, o, s, a) {
            var l = n.Token;
            for (var c in i)
                if (i.hasOwnProperty(c) && i[c]) {
                    if (c == a)
                        return;
                    var u = i[c];
                    u = "Array" === n.util.type(u) ? u : [u];
                    for (var d = 0; d < u.length; ++d) {
                        var f = u[d]
                          , h = f.inside
                          , p = !!f.lookbehind
                          , g = !!f.greedy
                          , m = 0
                          , v = f.alias;
                        if (g && !f.pattern.global) {
                            var y = f.pattern.toString().match(/[imuy]*$/)[0];
                            f.pattern = RegExp(f.pattern.source, y + "g")
                        }
                        f = f.pattern || f;
                        for (var b = r, w = o; b < t.length; w += t[b].length,
                        ++b) {
                            var _ = t[b];
                            if (t.length > e.length)
                                return;
                            if (!(_ instanceof l)) {
                                if (g && b != t.length - 1) {
                                    if (f.lastIndex = w,
                                    !(k = f.exec(e)))
                                        break;
                                    for (var x = k.index + (p ? k[1].length : 0), T = k.index + k[0].length, S = b, C = w, E = t.length; S < E && (C < T || !t[S].type && !t[S - 1].greedy); ++S)
                                        x >= (C += t[S].length) && (++b,
                                        w = C);
                                    if (t[b]instanceof l)
                                        continue;
                                    A = S - b,
                                    _ = e.slice(w, C),
                                    k.index -= w
                                } else {
                                    f.lastIndex = 0;
                                    var k = f.exec(_)
                                      , A = 1
                                }
                                if (k) {
                                    p && (m = k[1] ? k[1].length : 0);
                                    T = (x = k.index + m) + (k = k[0].slice(m)).length;
                                    var O = _.slice(0, x)
                                      , P = _.slice(T)
                                      , D = [b, A];
                                    O && (++b,
                                    w += O.length,
                                    D.push(O));
                                    var I = new l(c,h ? n.tokenize(k, h) : k,v,k,g);
                                    if (D.push(I),
                                    P && D.push(P),
                                    Array.prototype.splice.apply(t, D),
                                    1 != A && n.matchGrammar(e, t, i, b, w, !0, c),
                                    s)
                                        break
                                } else if (s)
                                    break
                            }
                        }
                    }
                }
        },
        tokenize: function(e, t, i) {
            var r = [e]
              , o = t.rest;
            if (o) {
                for (var s in o)
                    t[s] = o[s];
                delete t.rest
            }
            return n.matchGrammar(e, r, t, 0, 0, !1),
            r
        },
        hooks: {
            all: {},
            add: function(e, t) {
                var i = n.hooks.all;
                i[e] = i[e] || [],
                i[e].push(t)
            },
            run: function(e, t) {
                var i = n.hooks.all[e];
                if (i && i.length)
                    for (var r, o = 0; r = i[o++]; )
                        r(t)
            }
        }
    }
      , i = n.Token = function(e, t, n, i, r) {
        this.type = e,
        this.content = t,
        this.alias = n,
        this.length = 0 | (i || "").length,
        this.greedy = !!r
    }
    ;
    if (i.stringify = function(e, t, r) {
        if ("string" == typeof e)
            return e;
        if ("Array" === n.util.type(e))
            return e.map(function(n) {
                return i.stringify(n, t, e)
            }).join("");
        var o = {
            type: e.type,
            content: i.stringify(e.content, t, r),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: t,
            parent: r
        };
        if (e.alias) {
            var s = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
            Array.prototype.push.apply(o.classes, s)
        }
        n.hooks.run("wrap", o);
        var a = Object.keys(o.attributes).map(function(e) {
            return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"'
        }).join(" ");
        return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + o.content + "</" + o.tag + ">"
    }
    ,
    !_self.document)
        return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data)
              , i = t.language
              , r = t.code
              , o = t.immediateClose;
            _self.postMessage(n.highlight(r, n.languages[i], i)),
            o && _self.close()
        }, !1),
        _self.Prism) : _self.Prism;
    var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return r && (n.filename = r.src,
    n.manual || r.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))),
    _self.Prism
}();
function get_social_counts() {
    var e = window.location.protocol + "//" + window.location.host + window.location.pathname;
    $.ajax({
        type: "GET",
        url: "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/inc/get_social_counts.php?thisurl=" + e,
        dataType: "json",
        success: function(e) {
            var t = 1 * document.getElementById("dom-target-fb").textContent.valueOf() + e.facebook;
            t > 0 ? $("#facebook-span").text(t) : $("#facebook-span").hide()
        }
    })
}
function loadTemplatesBy(e, t) {
    $.post(ajax_object.ajaxurl, {
        action: "ajax_action",
        category: e
    }, function(t) {
        console.log(e),
        $("#products").html(t)
    })
}
"undefined" != typeof module && module.exports && (module.exports = Prism),
"undefined" != typeof global && (global.Prism = Prism),
Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: {
                    punctuation: [/^=/, {
                        pattern: /(^|[^\\])["']/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
},
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity,
Prism.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}),
Prism.languages.xml = Prism.languages.markup,
Prism.languages.html = Prism.languages.markup,
Prism.languages.mathml = Prism.languages.markup,
Prism.languages.svg = Prism.languages.markup,
Prism.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^{}\s][^{};]*?(?=\s*\{)/,
    string: {
        pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
},
Prism.languages.css.atrule.inside.rest = Prism.languages.css,
Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css",
        greedy: !0
    }
}),
Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)),
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
},
Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}),
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
        alias: "function"
    },
    constant: /\b[A-Z][A-Z\d_]*\b/
}),
Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\${[^}]+}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\${|}$/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            string: /[\s\S]+/
        }
    }
}),
Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript,
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript",
        greedy: !0
    }
}),
Prism.languages.js = Prism.languages.javascript,
Prism.languages["markup-templating"] = {},
Object.defineProperties(Prism.languages["markup-templating"], {
    buildPlaceholders: {
        value: function(e, t, n, i) {
            e.language === t && (e.tokenStack = [],
            e.code = e.code.replace(n, function(n) {
                if ("function" == typeof i && !i(n))
                    return n;
                for (var r = e.tokenStack.length; -1 !== e.code.indexOf("___" + t.toUpperCase() + r + "___"); )
                    ++r;
                return e.tokenStack[r] = n,
                "___" + t.toUpperCase() + r + "___"
            }),
            e.grammar = Prism.languages.markup)
        }
    },
    tokenizePlaceholders: {
        value: function(e, t) {
            if (e.language === t && e.tokenStack) {
                e.grammar = Prism.languages[t];
                var n = 0
                  , i = Object.keys(e.tokenStack)
                  , r = function(o) {
                    if (!(n >= i.length))
                        for (var s = 0; s < o.length; s++) {
                            var a = o[s];
                            if ("string" == typeof a || a.content && "string" == typeof a.content) {
                                var l = i[n]
                                  , c = e.tokenStack[l]
                                  , u = "string" == typeof a ? a : a.content
                                  , d = u.indexOf("___" + t.toUpperCase() + l + "___");
                                if (d > -1) {
                                    ++n;
                                    var f, h = u.substring(0, d), p = new Prism.Token(t,Prism.tokenize(c, e.grammar, t),"language-" + t,c), g = u.substring(d + ("___" + t.toUpperCase() + l + "___").length);
                                    if (h || g ? (f = [h, p, g].filter(function(e) {
                                        return !!e
                                    }),
                                    r(f)) : f = p,
                                    "string" == typeof a ? Array.prototype.splice.apply(o, [s, 1].concat(f)) : a.content = f,
                                    n >= i.length)
                                        break
                                }
                            } else
                                a.content && "string" != typeof a.content && r(a.content)
                        }
                };
                r(e.tokens)
            }
        }
    }
}),
Prism.languages.json = {
    property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
    string: {
        pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        greedy: !0
    },
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    punctuation: /[{}[\]);,]/,
    operator: /:/g,
    boolean: /\b(?:true|false)\b/i,
    null: /\bnull\b/i
},
Prism.languages.jsonp = Prism.languages.json,
function(e) {
    e.languages.php = e.languages.extend("clike", {
        keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
        constant: /\b[A-Z0-9_]{2,}\b/,
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
        }
    }),
    e.languages.insertBefore("php", "string", {
        "shell-comment": {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0,
            alias: "comment"
        }
    }),
    e.languages.insertBefore("php", "keyword", {
        delimiter: {
            pattern: /\?>|<\?(?:php|=)?/i,
            alias: "important"
        },
        variable: /\$+(?:\w+\b|(?={))/i,
        package: {
            pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        }
    }),
    e.languages.insertBefore("php", "operator", {
        property: {
            pattern: /(->)[\w]+/,
            lookbehind: !0
        }
    }),
    e.languages.insertBefore("php", "string", {
        "nowdoc-string": {
            pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
            greedy: !0,
            alias: "string",
            inside: {
                delimiter: {
                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {
                        punctuation: /^<<<'?|[';]$/
                    }
                }
            }
        },
        "heredoc-string": {
            pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
            greedy: !0,
            alias: "string",
            inside: {
                delimiter: {
                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {
                        punctuation: /^<<<"?|[";]$/
                    }
                },
                interpolation: null
            }
        },
        "single-quoted-string": {
            pattern: /'(?:\\[\s\S]|[^\\'])*'/,
            greedy: !0,
            alias: "string"
        },
        "double-quoted-string": {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: !0,
            alias: "string",
            inside: {
                interpolation: null
            }
        }
    }),
    delete e.languages.php.string;
    var t = {
        pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
        lookbehind: !0,
        inside: {
            rest: e.languages.php
        }
    };
    e.languages.php["heredoc-string"].inside.interpolation = t,
    e.languages.php["double-quoted-string"].inside.interpolation = t,
    e.hooks.add("before-tokenize", function(t) {
        if (/(?:<\?php|<\?)/gi.test(t.code)) {
            e.languages["markup-templating"].buildPlaceholders(t, "php", /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)
        }
    }),
    e.hooks.add("after-tokenize", function(t) {
        e.languages["markup-templating"].tokenizePlaceholders(t, "php")
    })
}(Prism),
Prism.languages.typescript = Prism.languages.extend("javascript", {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
}),
Prism.languages.ts = Prism.languages.typescript,
Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0
    },
    atrule: {
        pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /(?:[-a-z]+-)*url(?=\()/i,
    selector: {
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
        inside: {
            parent: {
                pattern: /&/,
                alias: "important"
            },
            placeholder: /%[-\w]+/,
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
    }
}),
Prism.languages.insertBefore("scss", "atrule", {
    keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: !0
    }]
}),
Prism.languages.scss.property = {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
    inside: {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
},
Prism.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
}),
Prism.languages.insertBefore("scss", "function", {
    placeholder: {
        pattern: /%[-\w]+/,
        alias: "selector"
    },
    statement: {
        pattern: /\B!(?:default|optional)\b/i,
        alias: "keyword"
    },
    boolean: /\b(?:true|false)\b/,
    null: /\bnull\b/,
    operator: {
        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
        lookbehind: !0
    }
}),
Prism.languages.scss.atrule.inside.rest = Prism.languages.scss,
function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var e = /\n(?!$)/g
          , t = function(t) {
            var i = n(t)["white-space"];
            if ("pre-wrap" === i || "pre-line" === i) {
                var r = t.querySelector("code")
                  , o = t.querySelector(".line-numbers-rows")
                  , s = t.querySelector(".line-numbers-sizer")
                  , a = r.textContent.split(e);
                s || ((s = document.createElement("span")).className = "line-numbers-sizer",
                r.appendChild(s)),
                s.style.display = "block",
                a.forEach(function(e, t) {
                    s.textContent = e || "\n";
                    var n = s.getBoundingClientRect().height;
                    o.children[t].style.height = n + "px"
                }),
                s.textContent = "",
                s.style.display = "none"
            }
        }
          , n = function(e) {
            return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
        };
        window.addEventListener("resize", function() {
            Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"), t)
        }),
        Prism.hooks.add("complete", function(n) {
            if (n.code) {
                var i = n.element.parentNode
                  , r = /\s*\bline-numbers\b\s*/;
                if (i && /pre/i.test(i.nodeName) && (r.test(i.className) || r.test(n.element.className)) && !n.element.querySelector(".line-numbers-rows")) {
                    r.test(n.element.className) && (n.element.className = n.element.className.replace(r, " ")),
                    r.test(i.className) || (i.className += " line-numbers");
                    var o, s = n.code.match(e), a = s ? s.length + 1 : 1, l = new Array(a + 1);
                    l = l.join("<span></span>"),
                    (o = document.createElement("span")).setAttribute("aria-hidden", "true"),
                    o.className = "line-numbers-rows",
                    o.innerHTML = l,
                    i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)),
                    n.element.appendChild(o),
                    t(i),
                    Prism.hooks.run("line-numbers", n)
                }
            }
        }),
        Prism.hooks.add("line-numbers", function(e) {
            e.plugins = e.plugins || {},
            e.plugins.lineNumbers = !0
        }),
        Prism.plugins.lineNumbers = {
            getLine: function(e, t) {
                if ("PRE" === e.tagName && e.classList.contains("line-numbers")) {
                    var n = e.querySelector(".line-numbers-rows")
                      , i = parseInt(e.getAttribute("data-start"), 10) || 1
                      , r = i + (n.children.length - 1);
                    t < i && (t = i),
                    t > r && (t = r);
                    var o = t - i;
                    return n.children[o]
                }
            }
        }
    }
}(),
function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var e = []
          , t = {}
          , n = function() {};
        Prism.plugins.toolbar = {};
        var i = Prism.plugins.toolbar.registerButton = function(n, i) {
            var r;
            r = "function" == typeof i ? i : function(e) {
                var t;
                return "function" == typeof i.onClick ? ((t = document.createElement("button")).type = "button",
                t.addEventListener("click", function() {
                    i.onClick.call(this, e)
                })) : "string" == typeof i.url ? (t = document.createElement("a")).href = i.url : t = document.createElement("span"),
                t.textContent = i.text,
                t
            }
            ,
            e.push(t[n] = r)
        }
          , r = Prism.plugins.toolbar.hook = function(i) {
            var r = i.element.parentNode;
            if (r && /pre/i.test(r.nodeName) && !r.parentNode.classList.contains("code-toolbar")) {
                var o = document.createElement("div");
                o.classList.add("code-toolbar"),
                r.parentNode.insertBefore(o, r),
                o.appendChild(r);
                var s = document.createElement("div");
                s.classList.add("toolbar"),
                document.body.hasAttribute("data-toolbar-order") && (e = document.body.getAttribute("data-toolbar-order").split(",").map(function(e) {
                    return t[e] || n
                })),
                e.forEach(function(e) {
                    var t = e(i);
                    if (t) {
                        var n = document.createElement("div");
                        n.classList.add("toolbar-item"),
                        n.appendChild(t),
                        s.appendChild(n)
                    }
                }),
                o.appendChild(s)
            }
        }
        ;
        i("label", function(e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var n, i, r = t.getAttribute("data-label");
                try {
                    i = document.querySelector("template#" + r)
                } catch (e) {}
                return i ? n = i.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"),
                n.textContent = r),
                n
            }
        }),
        Prism.hooks.add("complete", r)
    }
}(),
function() {
    if (("undefined" == typeof self || self.Prism) && self.document && Function.prototype.bind) {
        var e, t, n = {
            gradient: {
                create: (e = {},
                t = function(t) {
                    if (e[t])
                        return e[t];
                    var n = t.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/)
                      , i = n && n[1]
                      , r = n && n[2]
                      , o = t.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, "").split(/\s*,\s*/);
                    return r.indexOf("linear") >= 0 ? e[t] = function(e, t, n) {
                        var i = "180deg";
                        return /^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(n[0]) && (i = n.shift()).indexOf("to ") < 0 && (i.indexOf("top") >= 0 ? i = i.indexOf("left") >= 0 ? "to bottom right" : i.indexOf("right") >= 0 ? "to bottom left" : "to bottom" : i.indexOf("bottom") >= 0 ? i = i.indexOf("left") >= 0 ? "to top right" : i.indexOf("right") >= 0 ? "to top left" : "to top" : i.indexOf("left") >= 0 ? i = "to right" : i.indexOf("right") >= 0 ? i = "to left" : e && (i.indexOf("deg") >= 0 ? i = 90 - parseFloat(i) + "deg" : i.indexOf("rad") >= 0 && (i = Math.PI / 2 - parseFloat(i) + "rad"))),
                        t + "(" + i + "," + n.join(",") + ")"
                    }(i, r, o) : r.indexOf("radial") >= 0 ? e[t] = function(e, t, n) {
                        if (n[0].indexOf("at") < 0) {
                            var i = "center"
                              , r = "ellipse"
                              , o = "farthest-corner";
                            if (/\bcenter|top|right|bottom|left\b|^\d+/.test(n[0]) && (i = n.shift().replace(/\s*-?\d+(?:rad|deg)\s*/, "")),
                            /\bcircle|ellipse|closest|farthest|contain|cover\b/.test(n[0])) {
                                var s = n.shift().split(/\s+/);
                                !s[0] || "circle" !== s[0] && "ellipse" !== s[0] || (r = s.shift()),
                                s[0] && (o = s.shift()),
                                "cover" === o ? o = "farthest-corner" : "contain" === o && (o = "clothest-side")
                            }
                            return t + "(" + r + " " + o + " at " + i + "," + n.join(",") + ")"
                        }
                        return t + "(" + n.join(",") + ")"
                    }(0, r, o) : e[t] = r + "(" + o.join(",") + ")"
                }
                ,
                function() {
                    new Prism.plugins.Previewer("gradient",function(e) {
                        return this.firstChild.style.backgroundImage = "",
                        this.firstChild.style.backgroundImage = t(e),
                        !!this.firstChild.style.backgroundImage
                    }
                    ,"*",function() {
                        this._elt.innerHTML = "<div></div>"
                    }
                    )
                }
                ),
                tokens: {
                    gradient: {
                        pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
                        inside: {
                            function: /[\w-]+(?=\()/,
                            punctuation: /[(),]/
                        }
                    }
                },
                languages: {
                    css: !0,
                    less: !0,
                    sass: [{
                        lang: "sass",
                        before: "punctuation",
                        inside: "inside",
                        root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                    }, {
                        lang: "sass",
                        before: "punctuation",
                        inside: "inside",
                        root: Prism.languages.sass && Prism.languages.sass["property-line"]
                    }],
                    scss: !0,
                    stylus: [{
                        lang: "stylus",
                        before: "func",
                        inside: "rest",
                        root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                    }, {
                        lang: "stylus",
                        before: "func",
                        inside: "rest",
                        root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                    }]
                }
            },
            angle: {
                create: function() {
                    new Prism.plugins.Previewer("angle",function(e) {
                        var t, n, i = parseFloat(e), r = e.match(/[a-z]+$/i);
                        if (!i || !r)
                            return !1;
                        switch (r = r[0]) {
                        case "deg":
                            t = 360;
                            break;
                        case "grad":
                            t = 400;
                            break;
                        case "rad":
                            t = 2 * Math.PI;
                            break;
                        case "turn":
                            t = 1
                        }
                        return n = 100 * i / t,
                        n %= 100,
                        this[(i < 0 ? "set" : "remove") + "Attribute"]("data-negative", ""),
                        this.querySelector("circle").style.strokeDasharray = Math.abs(n) + ",500",
                        !0
                    }
                    ,"*",function() {
                        this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                    }
                    )
                },
                tokens: {
                    angle: /(?:\b|\B-|(?=\B\.))\d*\.?\d+(?:deg|g?rad|turn)\b/i
                },
                languages: {
                    css: !0,
                    less: !0,
                    markup: {
                        lang: "markup",
                        before: "punctuation",
                        inside: "inside",
                        root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                    },
                    sass: [{
                        lang: "sass",
                        inside: "inside",
                        root: Prism.languages.sass && Prism.languages.sass["property-line"]
                    }, {
                        lang: "sass",
                        before: "operator",
                        inside: "inside",
                        root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                    }],
                    scss: !0,
                    stylus: [{
                        lang: "stylus",
                        before: "func",
                        inside: "rest",
                        root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                    }, {
                        lang: "stylus",
                        before: "func",
                        inside: "rest",
                        root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                    }]
                }
            },
            color: {
                create: function() {
                    new Prism.plugins.Previewer("color",function(e) {
                        return this.style.backgroundColor = "",
                        this.style.backgroundColor = e,
                        !!this.style.backgroundColor
                    }
                    )
                },
                tokens: {
                    color: {
                        pattern: /\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                        inside: {
                            function: /[\w-]+(?=\()/,
                            punctuation: /[(),]/
                        }
                    }
                },
                languages: {
                    css: !0,
                    less: !0,
                    markup: {
                        lang: "markup",
                        before: "punctuation",
                        inside: "inside",
                        root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                    },
                    sass: [{
                        lang: "sass",
                        before: "punctuation",
                        inside: "inside",
                        root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                    }, {
                        lang: "sass",
                        inside: "inside",
                        root: Prism.languages.sass && Prism.languages.sass["property-line"]
                    }],
                    scss: !0,
                    stylus: [{
                        lang: "stylus",
                        before: "hexcode",
                        inside: "rest",
                        root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                    }, {
                        lang: "stylus",
                        before: "hexcode",
                        inside: "rest",
                        root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                    }]
                }
            },
            easing: {
                create: function() {
                    new Prism.plugins.Previewer("easing",function(e) {
                        var t = (e = {
                            linear: "0,0,1,1",
                            ease: ".25,.1,.25,1",
                            "ease-in": ".42,0,1,1",
                            "ease-out": "0,0,.58,1",
                            "ease-in-out": ".42,0,.58,1"
                        }[e] || e).match(/-?\d*\.?\d+/g);
                        if (4 === t.length) {
                            t = t.map(function(e, t) {
                                return 100 * (t % 2 ? 1 - e : e)
                            }),
                            this.querySelector("path").setAttribute("d", "M0,100 C" + t[0] + "," + t[1] + ", " + t[2] + "," + t[3] + ", 100,0");
                            var n = this.querySelectorAll("line");
                            return n[0].setAttribute("x2", t[0]),
                            n[0].setAttribute("y2", t[1]),
                            n[1].setAttribute("x2", t[2]),
                            n[1].setAttribute("y2", t[3]),
                            !0
                        }
                        return !1
                    }
                    ,"*",function() {
                        this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /></svg>'
                    }
                    )
                },
                tokens: {
                    easing: {
                        pattern: /\bcubic-bezier\((?:-?\d*\.?\d+,\s*){3}-?\d*\.?\d+\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i,
                        inside: {
                            function: /[\w-]+(?=\()/,
                            punctuation: /[(),]/
                        }
                    }
                },
                languages: {
                    css: !0,
                    less: !0,
                    sass: [{
                        lang: "sass",
                        inside: "inside",
                        before: "punctuation",
                        root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                    }, {
                        lang: "sass",
                        inside: "inside",
                        root: Prism.languages.sass && Prism.languages.sass["property-line"]
                    }],
                    scss: !0,
                    stylus: [{
                        lang: "stylus",
                        before: "hexcode",
                        inside: "rest",
                        root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                    }, {
                        lang: "stylus",
                        before: "hexcode",
                        inside: "rest",
                        root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                    }]
                }
            },
            time: {
                create: function() {
                    new Prism.plugins.Previewer("time",function(e) {
                        var t = parseFloat(e)
                          , n = e.match(/[a-z]+$/i);
                        return !(!t || !n) && (n = n[0],
                        this.querySelector("circle").style.animationDuration = 2 * t + n,
                        !0)
                    }
                    ,"*",function() {
                        this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                    }
                    )
                },
                tokens: {
                    time: /(?:\b|\B-|(?=\B\.))\d*\.?\d+m?s\b/i
                },
                languages: {
                    css: !0,
                    less: !0,
                    markup: {
                        lang: "markup",
                        before: "punctuation",
                        inside: "inside",
                        root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                    },
                    sass: [{
                        lang: "sass",
                        inside: "inside",
                        root: Prism.languages.sass && Prism.languages.sass["property-line"]
                    }, {
                        lang: "sass",
                        before: "operator",
                        inside: "inside",
                        root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                    }],
                    scss: !0,
                    stylus: [{
                        lang: "stylus",
                        before: "hexcode",
                        inside: "rest",
                        root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                    }, {
                        lang: "stylus",
                        before: "hexcode",
                        inside: "rest",
                        root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                    }]
                }
            }
        }, i = /(?:^|\s)token(?=$|\s)/, r = /(?:^|\s)active(?=$|\s)/g, o = /(?:^|\s)flipped(?=$|\s)/g, s = function(e, t, n, i) {
            this._elt = null,
            this._type = e,
            this._clsRegexp = RegExp("(?:^|\\s)" + e + "(?=$|\\s)"),
            this._token = null,
            this.updater = t,
            this._mouseout = this.mouseout.bind(this),
            this.initializer = i;
            var r = this;
            n || (n = ["*"]),
            "Array" !== Prism.util.type(n) && (n = [n]),
            n.forEach(function(e) {
                "string" != typeof e && (e = e.lang),
                s.byLanguages[e] || (s.byLanguages[e] = []),
                s.byLanguages[e].indexOf(r) < 0 && s.byLanguages[e].push(r)
            }),
            s.byType[e] = this
        };
        for (var a in s.prototype.init = function() {
            this._elt || (this._elt = document.createElement("div"),
            this._elt.className = "prism-previewer prism-previewer-" + this._type,
            document.body.appendChild(this._elt),
            this.initializer && this.initializer())
        }
        ,
        s.prototype.isDisabled = function(e) {
            do {
                if (e.hasAttribute && e.hasAttribute("data-previewers"))
                    return -1 === (e.getAttribute("data-previewers") || "").split(/\s+/).indexOf(this._type)
            } while (e = e.parentNode);return !1
        }
        ,
        s.prototype.check = function(e) {
            if (!i.test(e.className) || !this.isDisabled(e)) {
                do {
                    if (i.test(e.className) && this._clsRegexp.test(e.className))
                        break
                } while (e = e.parentNode);e && e !== this._token && (this._token = e,
                this.show())
            }
        }
        ,
        s.prototype.mouseout = function() {
            this._token.removeEventListener("mouseout", this._mouseout, !1),
            this._token = null,
            this.hide()
        }
        ,
        s.prototype.show = function() {
            if (this._elt || this.init(),
            this._token)
                if (this.updater.call(this._elt, this._token.textContent)) {
                    this._token.addEventListener("mouseout", this._mouseout, !1);
                    var e = function(e) {
                        var t = 0
                          , n = 0
                          , i = e;
                        if (i.parentNode) {
                            do {
                                t += i.offsetLeft,
                                n += i.offsetTop
                            } while ((i = i.offsetParent) && i.nodeType < 9);i = e;
                            do {
                                t -= i.scrollLeft,
                                n -= i.scrollTop
                            } while ((i = i.parentNode) && !/body/i.test(i.nodeName))
                        }
                        return {
                            top: n,
                            right: innerWidth - t - e.offsetWidth,
                            bottom: innerHeight - n - e.offsetHeight,
                            left: t
                        }
                    }(this._token);
                    this._elt.className += " active",
                    e.top - this._elt.offsetHeight > 0 ? (this._elt.className = this._elt.className.replace(o, ""),
                    this._elt.style.top = e.top + "px",
                    this._elt.style.bottom = "") : (this._elt.className += " flipped",
                    this._elt.style.bottom = e.bottom + "px",
                    this._elt.style.top = ""),
                    this._elt.style.left = e.left + Math.min(200, this._token.offsetWidth / 2) + "px"
                } else
                    this.hide()
        }
        ,
        s.prototype.hide = function() {
            this._elt.className = this._elt.className.replace(r, "")
        }
        ,
        s.byLanguages = {},
        s.byType = {},
        s.initEvents = function(e, t) {
            var n = [];
            s.byLanguages[t] && (n = n.concat(s.byLanguages[t])),
            s.byLanguages["*"] && (n = n.concat(s.byLanguages["*"])),
            e.addEventListener("mouseover", function(e) {
                var t = e.target;
                n.forEach(function(e) {
                    e.check(t)
                })
            }, !1)
        }
        ,
        Prism.plugins.Previewer = s,
        Prism.hooks.add("before-highlight", function(e) {
            for (var t in n) {
                var i = n[t].languages;
                if (e.language && i[e.language] && !i[e.language].initialized) {
                    var r = i[e.language];
                    "Array" !== Prism.util.type(r) && (r = [r]),
                    r.forEach(function(r) {
                        var o, s, a, l;
                        !0 === r ? (o = "important",
                        s = e.language,
                        r = e.language) : (o = r.before || "important",
                        s = r.inside || r.lang,
                        a = r.root || Prism.languages,
                        l = r.skip,
                        r = e.language),
                        !l && Prism.languages[r] && (Prism.languages.insertBefore(s, o, n[t].tokens, a),
                        e.grammar = Prism.languages[r],
                        i[e.language] = {
                            initialized: !0
                        })
                    })
                }
            }
        }),
        Prism.hooks.add("after-highlight", function(e) {
            (s.byLanguages["*"] || s.byLanguages[e.language]) && s.initEvents(e.element, e.language)
        }),
        n)
            n[a].create()
    }
}(),
function() {
    var e = Object.assign || function(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    ;
    function t(t) {
        this.defaults = e({}, t)
    }
    function n(e) {
        for (var t = 0, n = 0; n < e.length; ++n)
            e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
        return e.length + t
    }
    t.prototype = {
        setDefaults: function(t) {
            this.defaults = e(this.defaults, t)
        },
        normalize: function(t, n) {
            for (var i in n = e(this.defaults, n)) {
                var r = i.replace(/-(\w)/g, function(e, t) {
                    return t.toUpperCase()
                });
                "normalize" !== i && "setDefaults" !== r && n[i] && this[r] && (t = this[r].call(this, t, n[i]))
            }
            return t
        },
        leftTrim: function(e) {
            return e.replace(/^\s+/, "")
        },
        rightTrim: function(e) {
            return e.replace(/\s+$/, "")
        },
        tabsToSpaces: function(e, t) {
            return t = 0 | t || 4,
            e.replace(/\t/g, new Array(++t).join(" "))
        },
        spacesToTabs: function(e, t) {
            return t = 0 | t || 4,
            e.replace(new RegExp(" {" + t + "}","g"), "\t")
        },
        removeTrailing: function(e) {
            return e.replace(/\s*?$/gm, "")
        },
        removeInitialLineFeed: function(e) {
            return e.replace(/^(?:\r?\n|\r)/, "")
        },
        removeIndent: function(e) {
            var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
            return t && t[0].length ? (t.sort(function(e, t) {
                return e.length - t.length
            }),
            t[0].length ? e.replace(new RegExp("^" + t[0],"gm"), "") : e) : e
        },
        indent: function(e, t) {
            return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&")
        },
        breakLines: function(e, t) {
            t = !0 === t ? 80 : 0 | t || 80;
            for (var i = e.split("\n"), r = 0; r < i.length; ++r)
                if (!(n(i[r]) <= t)) {
                    for (var o = i[r].split(/(\s+)/g), s = 0, a = 0; a < o.length; ++a) {
                        var l = n(o[a]);
                        (s += l) > t && (o[a] = "\n" + o[a],
                        s = l)
                    }
                    i[r] = o.join("")
                }
            return i.join("\n")
        }
    },
    "undefined" != typeof module && module.exports && (module.exports = t),
    void 0 !== Prism && (Prism.plugins.NormalizeWhitespace = new t({
        "remove-trailing": !0,
        "remove-indent": !0,
        "left-trim": !0,
        "right-trim": !0
    }),
    Prism.hooks.add("before-sanity-check", function(e) {
        var t = Prism.plugins.NormalizeWhitespace;
        if (!e.settings || !1 !== e.settings["whitespace-normalization"])
            if (e.element && e.element.parentNode || !e.code) {
                var n = e.element.parentNode
                  , i = /\bno-whitespace-normalization\b/;
                if (e.code && n && "pre" === n.nodeName.toLowerCase() && !i.test(n.className) && !i.test(e.element.className)) {
                    for (var r = n.childNodes, o = "", s = "", a = !1, l = 0; l < r.length; ++l) {
                        var c = r[l];
                        c == e.element ? a = !0 : "#text" === c.nodeName && (a ? s += c.nodeValue : o += c.nodeValue,
                        n.removeChild(c),
                        --l)
                    }
                    if (e.element.children.length && Prism.plugins.KeepMarkup) {
                        var u = o + e.element.innerHTML + s;
                        e.element.innerHTML = t.normalize(u, e.settings),
                        e.code = e.element.textContent
                    } else
                        e.code = o + e.code + s,
                        e.code = t.normalize(e.code, e.settings)
                }
            } else
                e.code = t.normalize(e.code, e.settings)
    }))
}(),
function() {
    if ("undefined" != typeof self && self.Prism && self.document)
        if (Prism.plugins.toolbar) {
            var e = window.ClipboardJS || void 0;
            e || "function" != typeof require || (e = require("clipboard"));
            var t = [];
            if (!e) {
                var n = document.createElement("script")
                  , i = document.querySelector("head");
                n.onload = function() {
                    if (e = window.ClipboardJS)
                        for (; t.length; )
                            t.pop()()
                }
                ,
                n.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
                i.appendChild(n)
            }
            Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(n) {
                var i = document.createElement("button");
                return i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code',
                i.classList = "btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect",
                e ? r() : t.push(r),
                i;
                function r() {
                    var t = new e(i,{
                        text: function() {
                            return n.code
                        }
                    });
                    t.on("success", function() {
                        i.textContent = "Copied!",
                        o()
                    }),
                    t.on("error", function() {
                        i.textContent = "Press Ctrl+C to copy",
                        o()
                    })
                }
                function o() {
                    setTimeout(function() {
                        i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code'
                    }, 5e3)
                }
            })
        } else
            console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
}(),
$(function(e) {
    e('.documentation a[href="#"]').click(function(e) {
        e.preventDefault()
    })
})