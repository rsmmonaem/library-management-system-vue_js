const __vite__fileDeps = ['assets/AboutView-Dc8_qgVq.js', 'assets/AboutView-C6Dx7pxG.css'],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i])
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList')
        for (const i of o.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const o = {}
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const o = n(r)
    fetch(r.href, o)
  }
})()
/**
 * @vue/shared v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Fs(e, t) {
  const n = new Set(e.split(','))
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s)
}
const Z = {},
  Ot = [],
  Se = () => {},
  el = () => !1,
  Ln = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ls = (e) => e.startsWith('onUpdate:'),
  fe = Object.assign,
  Is = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  tl = Object.prototype.hasOwnProperty,
  z = (e, t) => tl.call(e, t),
  D = Array.isArray,
  Pt = (e) => In(e) === '[object Map]',
  yo = (e) => In(e) === '[object Set]',
  H = (e) => typeof e == 'function',
  ie = (e) => typeof e == 'string',
  vt = (e) => typeof e == 'symbol',
  se = (e) => e !== null && typeof e == 'object',
  bo = (e) => (se(e) || H(e)) && H(e.then) && H(e.catch),
  vo = Object.prototype.toString,
  In = (e) => vo.call(e),
  nl = (e) => In(e).slice(8, -1),
  Eo = (e) => In(e) === '[object Object]',
  Ms = (e) => ie(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Ut = Fs(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Mn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  sl = /-(\w)/g,
  Ve = Mn((e) => e.replace(sl, (t, n) => (n ? n.toUpperCase() : ''))),
  rl = /\B([A-Z])/g,
  Lt = Mn((e) => e.replace(rl, '-$1').toLowerCase()),
  jn = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Yn = Mn((e) => (e ? `on${jn(e)}` : '')),
  ct = (e, t) => !Object.is(e, t),
  Zn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  wo = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  ol = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let fr
const xo = () =>
  fr ||
  (fr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function js(e) {
  if (D(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ie(s) ? al(s) : js(s)
      if (r) for (const o in r) t[o] = r[o]
    }
    return t
  } else if (ie(e) || se(e)) return e
}
const il = /;(?![^(]*\))/g,
  ll = /:([^]+)/,
  cl = /\/\*[^]*?\*\//g
function al(e) {
  const t = {}
  return (
    e
      .replace(cl, '')
      .split(il)
      .forEach((n) => {
        if (n) {
          const s = n.split(ll)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function ks(e) {
  let t = ''
  if (ie(e)) t = e
  else if (D(e))
    for (let n = 0; n < e.length; n++) {
      const s = ks(e[n])
      s && (t += s + ' ')
    }
  else if (se(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const ul = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  fl = Fs(ul)
function Ro(e) {
  return !!e || e === ''
}
const Te = (e) =>
    ie(e)
      ? e
      : e == null
        ? ''
        : D(e) || (se(e) && (e.toString === vo || !H(e.toString)))
          ? JSON.stringify(e, So, 2)
          : String(e),
  So = (e, t) =>
    t && t.__v_isRef
      ? So(e, t.value)
      : Pt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], o) => ((n[es(s, o) + ' =>'] = r), n),
              {}
            )
          }
        : yo(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => es(n)) }
          : vt(t)
            ? es(t)
            : se(t) && !D(t) && !Eo(t)
              ? String(t)
              : t,
  es = (e, t = '') => {
    var n
    return vt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ae
class dl {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ae),
      !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Ae
      try {
        return (Ae = this), t()
      } finally {
        Ae = n
      }
    }
  }
  on() {
    Ae = this
  }
  off() {
    Ae = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function hl(e, t = Ae) {
  t && t.active && t.effects.push(e)
}
function pl() {
  return Ae
}
let yt
class Ds {
  constructor(t, n, s, r) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      hl(this, r)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), at()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (ml(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ut()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = it,
      n = yt
    try {
      return (it = !0), (yt = this), this._runnings++, dr(this), this.fn()
    } finally {
      hr(this), this._runnings--, (yt = n), (it = t)
    }
  }
  stop() {
    var t
    this.active &&
      (dr(this), hr(this), (t = this.onStop) == null || t.call(this), (this.active = !1))
  }
}
function ml(e) {
  return e.value
}
function dr(e) {
  e._trackId++, (e._depsLength = 0)
}
function hr(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Oo(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Oo(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let it = !0,
  hs = 0
const Po = []
function at() {
  Po.push(it), (it = !1)
}
function ut() {
  const e = Po.pop()
  it = e === void 0 ? !0 : e
}
function Bs() {
  hs++
}
function Hs() {
  for (hs--; !hs && ps.length; ) ps.shift()()
}
function Ao(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && Oo(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const ps = []
function Co(e, t, n) {
  Bs()
  for (const s of e.keys()) {
    let r
    s._dirtyLevel < t &&
      (r ?? (r = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (r ?? (r = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && ps.push(s.scheduler)))
  }
  Hs()
}
const To = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  ms = new WeakMap(),
  bt = Symbol(''),
  gs = Symbol('')
function Ee(e, t, n) {
  if (it && yt) {
    let s = ms.get(e)
    s || ms.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = To(() => s.delete(n)))), Ao(yt, r)
  }
}
function We(e, t, n, s, r, o) {
  const i = ms.get(e)
  if (!i) return
  let l = []
  if (t === 'clear') l = [...i.values()]
  else if (n === 'length' && D(e)) {
    const c = Number(s)
    i.forEach((f, a) => {
      ;(a === 'length' || (!vt(a) && a >= c)) && l.push(f)
    })
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case 'add':
        D(e) ? Ms(n) && l.push(i.get('length')) : (l.push(i.get(bt)), Pt(e) && l.push(i.get(gs)))
        break
      case 'delete':
        D(e) || (l.push(i.get(bt)), Pt(e) && l.push(i.get(gs)))
        break
      case 'set':
        Pt(e) && l.push(i.get(bt))
        break
    }
  Bs()
  for (const c of l) c && Co(c, 4)
  Hs()
}
const gl = Fs('__proto__,__v_isRef,__isVue'),
  No = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(vt)
  ),
  pr = _l()
function _l() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = J(this)
        for (let o = 0, i = this.length; o < i; o++) Ee(s, 'get', o + '')
        const r = s[t](...n)
        return r === -1 || r === !1 ? s[t](...n.map(J)) : r
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        at(), Bs()
        const s = J(this)[t].apply(this, n)
        return Hs(), ut(), s
      }
    }),
    e
  )
}
function yl(e) {
  vt(e) || (e = String(e))
  const t = J(this)
  return Ee(t, 'has', e), t.hasOwnProperty(e)
}
class $o {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return s === (r ? (o ? Nl : Mo) : o ? Io : Lo).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const i = D(t)
    if (!r) {
      if (i && z(pr, n)) return Reflect.get(pr, n, s)
      if (n === 'hasOwnProperty') return yl
    }
    const l = Reflect.get(t, n, s)
    return (vt(n) ? No.has(n) : gl(n)) || (r || Ee(t, 'get', n), o)
      ? l
      : we(l)
        ? i && Ms(n)
          ? l
          : l.value
        : se(l)
          ? r
            ? ko(l)
            : Dn(l)
          : l
  }
}
class Fo extends $o {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let o = t[n]
    if (!this._isShallow) {
      const c = Jt(o)
      if ((!An(s) && !Jt(s) && ((o = J(o)), (s = J(s))), !D(t) && we(o) && !we(s)))
        return c ? !1 : ((o.value = s), !0)
    }
    const i = D(t) && Ms(n) ? Number(n) < t.length : z(t, n),
      l = Reflect.set(t, n, s, r)
    return t === J(r) && (i ? ct(s, o) && We(t, 'set', n, s) : We(t, 'add', n, s)), l
  }
  deleteProperty(t, n) {
    const s = z(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && We(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!vt(n) || !No.has(n)) && Ee(t, 'has', n), s
  }
  ownKeys(t) {
    return Ee(t, 'iterate', D(t) ? 'length' : bt), Reflect.ownKeys(t)
  }
}
class bl extends $o {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const vl = new Fo(),
  El = new bl(),
  wl = new Fo(!0)
const Us = (e) => e,
  kn = (e) => Reflect.getPrototypeOf(e)
function fn(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = J(e),
    o = J(t)
  n || (ct(t, o) && Ee(r, 'get', t), Ee(r, 'get', o))
  const { has: i } = kn(r),
    l = s ? Us : n ? zs : Qt
  if (i.call(r, t)) return l(e.get(t))
  if (i.call(r, o)) return l(e.get(o))
  e !== r && e.get(t)
}
function dn(e, t = !1) {
  const n = this.__v_raw,
    s = J(n),
    r = J(e)
  return (
    t || (ct(e, r) && Ee(s, 'has', e), Ee(s, 'has', r)), e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function hn(e, t = !1) {
  return (e = e.__v_raw), !t && Ee(J(e), 'iterate', bt), Reflect.get(e, 'size', e)
}
function mr(e) {
  e = J(e)
  const t = J(this)
  return kn(t).has.call(t, e) || (t.add(e), We(t, 'add', e, e)), this
}
function gr(e, t) {
  t = J(t)
  const n = J(this),
    { has: s, get: r } = kn(n)
  let o = s.call(n, e)
  o || ((e = J(e)), (o = s.call(n, e)))
  const i = r.call(n, e)
  return n.set(e, t), o ? ct(t, i) && We(n, 'set', e, t) : We(n, 'add', e, t), this
}
function _r(e) {
  const t = J(this),
    { has: n, get: s } = kn(t)
  let r = n.call(t, e)
  r || ((e = J(e)), (r = n.call(t, e))), s && s.call(t, e)
  const o = t.delete(e)
  return r && We(t, 'delete', e, void 0), o
}
function yr() {
  const e = J(this),
    t = e.size !== 0,
    n = e.clear()
  return t && We(e, 'clear', void 0, void 0), n
}
function pn(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = J(i),
      c = t ? Us : e ? zs : Qt
    return !e && Ee(l, 'iterate', bt), i.forEach((f, a) => s.call(r, c(f), c(a), o))
  }
}
function mn(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = J(r),
      i = Pt(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      c = e === 'keys' && i,
      f = r[e](...s),
      a = n ? Us : t ? zs : Qt
    return (
      !t && Ee(o, 'iterate', c ? gs : bt),
      {
        next() {
          const { value: d, done: p } = f.next()
          return p ? { value: d, done: p } : { value: l ? [a(d[0]), a(d[1])] : a(d), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Ze(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function xl() {
  const e = {
      get(o) {
        return fn(this, o)
      },
      get size() {
        return hn(this)
      },
      has: dn,
      add: mr,
      set: gr,
      delete: _r,
      clear: yr,
      forEach: pn(!1, !1)
    },
    t = {
      get(o) {
        return fn(this, o, !1, !0)
      },
      get size() {
        return hn(this)
      },
      has: dn,
      add: mr,
      set: gr,
      delete: _r,
      clear: yr,
      forEach: pn(!1, !0)
    },
    n = {
      get(o) {
        return fn(this, o, !0)
      },
      get size() {
        return hn(this, !0)
      },
      has(o) {
        return dn.call(this, o, !0)
      },
      add: Ze('add'),
      set: Ze('set'),
      delete: Ze('delete'),
      clear: Ze('clear'),
      forEach: pn(!0, !1)
    },
    s = {
      get(o) {
        return fn(this, o, !0, !0)
      },
      get size() {
        return hn(this, !0)
      },
      has(o) {
        return dn.call(this, o, !0)
      },
      add: Ze('add'),
      set: Ze('set'),
      delete: Ze('delete'),
      clear: Ze('clear'),
      forEach: pn(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = mn(o, !1, !1)),
        (n[o] = mn(o, !0, !1)),
        (t[o] = mn(o, !1, !0)),
        (s[o] = mn(o, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [Rl, Sl, Ol, Pl] = xl()
function Vs(e, t) {
  const n = t ? (e ? Pl : Ol) : e ? Sl : Rl
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(z(n, r) && r in s ? n : s, r, o)
}
const Al = { get: Vs(!1, !1) },
  Cl = { get: Vs(!1, !0) },
  Tl = { get: Vs(!0, !1) }
const Lo = new WeakMap(),
  Io = new WeakMap(),
  Mo = new WeakMap(),
  Nl = new WeakMap()
function $l(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Fl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $l(nl(e))
}
function Dn(e) {
  return Jt(e) ? e : qs(e, !1, vl, Al, Lo)
}
function jo(e) {
  return qs(e, !1, wl, Cl, Io)
}
function ko(e) {
  return qs(e, !0, El, Tl, Mo)
}
function qs(e, t, n, s, r) {
  if (!se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = r.get(e)
  if (o) return o
  const i = Fl(e)
  if (i === 0) return e
  const l = new Proxy(e, i === 2 ? s : n)
  return r.set(e, l), l
}
function Vt(e) {
  return Jt(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Jt(e) {
  return !!(e && e.__v_isReadonly)
}
function An(e) {
  return !!(e && e.__v_isShallow)
}
function Do(e) {
  return e ? !!e.__v_raw : !1
}
function J(e) {
  const t = e && e.__v_raw
  return t ? J(t) : e
}
function Ll(e) {
  return Object.isExtensible(e) && wo(e, '__v_skip', !0), e
}
const Qt = (e) => (se(e) ? Dn(e) : e),
  zs = (e) => (se(e) ? ko(e) : e)
class Bo {
  constructor(t, n, s, r) {
    ;(this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Ds(
        () => t(this._value),
        () => yn(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = J(this)
    return (
      (!t._cacheable || t.effect.dirty) && ct(t._value, (t._value = t.effect.run())) && yn(t, 4),
      Ho(t),
      t.effect._dirtyLevel >= 2 && yn(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function Il(e, t, n = !1) {
  let s, r
  const o = H(e)
  return o ? ((s = e), (r = Se)) : ((s = e.get), (r = e.set)), new Bo(s, r, o || !r, n)
}
function Ho(e) {
  var t
  it &&
    yt &&
    ((e = J(e)),
    Ao(
      yt,
      (t = e.dep) != null ? t : (e.dep = To(() => (e.dep = void 0), e instanceof Bo ? e : void 0))
    ))
}
function yn(e, t = 4, n) {
  e = J(e)
  const s = e.dep
  s && Co(s, t)
}
function we(e) {
  return !!(e && e.__v_isRef === !0)
}
function Ml(e) {
  return Uo(e, !1)
}
function jl(e) {
  return Uo(e, !0)
}
function Uo(e, t) {
  return we(e) ? e : new kl(e, t)
}
class kl {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : Qt(t))
  }
  get value() {
    return Ho(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || An(t) || Jt(t)
    ;(t = n ? t : J(t)),
      ct(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : Qt(t)), yn(this, 4))
  }
}
function At(e) {
  return we(e) ? e.value : e
}
const Dl = {
  get: (e, t, n) => At(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return we(r) && !we(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function Vo(e) {
  return Vt(e) ? e : new Proxy(e, Dl)
}
/**
 * @vue/runtime-core v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function lt(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Bn(r, t, n)
  }
}
function $e(e, t, n, s) {
  if (H(e)) {
    const r = lt(e, t, n, s)
    return (
      r &&
        bo(r) &&
        r.catch((o) => {
          Bn(o, t, n)
        }),
      r
    )
  }
  if (D(e)) {
    const r = []
    for (let o = 0; o < e.length; o++) r.push($e(e[o], t, n, s))
    return r
  }
}
function Bn(e, t, n, s = !0) {
  const r = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const i = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; o; ) {
      const f = o.ec
      if (f) {
        for (let a = 0; a < f.length; a++) if (f[a](e, i, l) === !1) return
      }
      o = o.parent
    }
    const c = t.appContext.config.errorHandler
    if (c) {
      at(), lt(c, null, 10, [e, i, l]), ut()
      return
    }
  }
  Bl(e, n, r, s)
}
function Bl(e, t, n, s = !0) {
  console.error(e)
}
let Xt = !1,
  _s = !1
const he = []
let He = 0
const Ct = []
let nt = null,
  gt = 0
const qo = Promise.resolve()
let Ks = null
function zo(e) {
  const t = Ks || qo
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Hl(e) {
  let t = He + 1,
    n = he.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = he[s],
      o = Yt(r)
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s)
  }
  return t
}
function Ws(e) {
  ;(!he.length || !he.includes(e, Xt && e.allowRecurse ? He + 1 : He)) &&
    (e.id == null ? he.push(e) : he.splice(Hl(e.id), 0, e), Ko())
}
function Ko() {
  !Xt && !_s && ((_s = !0), (Ks = qo.then(Go)))
}
function Ul(e) {
  const t = he.indexOf(e)
  t > He && he.splice(t, 1)
}
function Vl(e) {
  D(e) ? Ct.push(...e) : (!nt || !nt.includes(e, e.allowRecurse ? gt + 1 : gt)) && Ct.push(e), Ko()
}
function br(e, t, n = Xt ? He + 1 : 0) {
  for (; n < he.length; n++) {
    const s = he[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      he.splice(n, 1), n--, s()
    }
  }
}
function Wo(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)].sort((n, s) => Yt(n) - Yt(s))
    if (((Ct.length = 0), nt)) {
      nt.push(...t)
      return
    }
    for (nt = t, gt = 0; gt < nt.length; gt++) nt[gt]()
    ;(nt = null), (gt = 0)
  }
}
const Yt = (e) => (e.id == null ? 1 / 0 : e.id),
  ql = (e, t) => {
    const n = Yt(e) - Yt(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Go(e) {
  ;(_s = !1), (Xt = !0), he.sort(ql)
  try {
    for (He = 0; He < he.length; He++) {
      const t = he[He]
      t && t.active !== !1 && lt(t, null, 14)
    }
  } finally {
    ;(He = 0), (he.length = 0), Wo(), (Xt = !1), (Ks = null), (he.length || Ct.length) && Go()
  }
}
function zl(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || Z
  let r = n
  const o = t.startsWith('update:'),
    i = o && t.slice(7)
  if (i && i in s) {
    const a = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: d, trim: p } = s[a] || Z
    p && (r = n.map((g) => (ie(g) ? g.trim() : g))), d && (r = n.map(ol))
  }
  let l,
    c = s[(l = Yn(t))] || s[(l = Yn(Ve(t)))]
  !c && o && (c = s[(l = Yn(Lt(t)))]), c && $e(c, e, 6, r)
  const f = s[l + 'Once']
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), $e(f, e, 6, r)
  }
}
function Jo(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const o = e.emits
  let i = {},
    l = !1
  if (!H(e)) {
    const c = (f) => {
      const a = Jo(f, t, !0)
      a && ((l = !0), fe(i, a))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !o && !l
    ? (se(e) && s.set(e, null), null)
    : (D(o) ? o.forEach((c) => (i[c] = null)) : fe(i, o), se(e) && s.set(e, i), i)
}
function Hn(e, t) {
  return !e || !Ln(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      z(e, t[0].toLowerCase() + t.slice(1)) || z(e, Lt(t)) || z(e, t))
}
let ve = null,
  Qo = null
function Cn(e) {
  const t = ve
  return (ve = e), (Qo = (e && e.type.__scopeId) || null), t
}
function Zt(e, t = ve, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && Tr(-1)
    const o = Cn(t)
    let i
    try {
      i = e(...r)
    } finally {
      Cn(o), s._d && Tr(1)
    }
    return i
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function ts(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [o],
      slots: i,
      attrs: l,
      emit: c,
      render: f,
      renderCache: a,
      props: d,
      data: p,
      setupState: g,
      ctx: b,
      inheritAttrs: w
    } = e,
    I = Cn(e)
  let C, F
  try {
    if (n.shapeFlag & 4) {
      const K = r || s,
        oe = K
      ;(C = Be(f.call(oe, K, a, d, g, p, b))), (F = l)
    } else {
      const K = t
      ;(C = Be(K.length > 1 ? K(d, { attrs: l, slots: i, emit: c }) : K(d, null))),
        (F = t.props ? l : Kl(l))
    }
  } catch (K) {
    ;(Kt.length = 0), Bn(K, e, 1), (C = ne(en))
  }
  let k = C
  if (F && w !== !1) {
    const K = Object.keys(F),
      { shapeFlag: oe } = k
    K.length && oe & 7 && (o && K.some(Ls) && (F = Wl(F, o)), (k = Tt(k, F)))
  }
  return (
    n.dirs && ((k = Tt(k)), (k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (k.transition = n.transition),
    (C = k),
    Cn(I),
    C
  )
}
const Kl = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || Ln(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Wl = (e, t) => {
    const n = {}
    for (const s in e) (!Ls(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function Gl(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: c } = t,
    f = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? vr(s, i, f) : !!i
    if (c & 8) {
      const a = t.dynamicProps
      for (let d = 0; d < a.length; d++) {
        const p = a[d]
        if (i[p] !== s[p] && !Hn(f, p)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? (i ? vr(s, i, f) : !0) : !!i
  return !1
}
function vr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const o = s[r]
    if (t[o] !== e[o] && !Hn(n, o)) return !0
  }
  return !1
}
function Jl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Xo = 'components',
  Ql = 'directives'
function Fe(e, t) {
  return Yo(Xo, e, !0, t) || e
}
const Xl = Symbol.for('v-ndc')
function Yl(e) {
  return Yo(Ql, e)
}
function Yo(e, t, n = !0, s = !1) {
  const r = ve || pe
  if (r) {
    const o = r.type
    if (e === Xo) {
      const l = Kc(o, !1)
      if (l && (l === t || l === Ve(t) || l === jn(Ve(t)))) return o
    }
    const i = Er(r[e] || o[e], t) || Er(r.appContext[e], t)
    return !i && s ? o : i
  }
}
function Er(e, t) {
  return e && (e[t] || e[Ve(t)] || e[jn(Ve(t))])
}
const Zl = (e) => e.__isSuspense
function ec(e, t) {
  t && t.pendingBranch ? (D(e) ? t.effects.push(...e) : t.effects.push(e)) : Vl(e)
}
const tc = Symbol.for('v-scx'),
  nc = () => Ge(tc),
  gn = {}
function bn(e, t, n) {
  return Zo(e, t, n)
}
function Zo(e, t, { immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: l } = Z) {
  if (t && o) {
    const U = t
    t = (...me) => {
      U(...me), oe()
    }
  }
  const c = pe,
    f = (U) => (s === !0 ? U : _t(U, s === !1 ? 1 : void 0))
  let a,
    d = !1,
    p = !1
  if (
    (we(e)
      ? ((a = () => e.value), (d = An(e)))
      : Vt(e)
        ? ((a = () => f(e)), (d = !0))
        : D(e)
          ? ((p = !0),
            (d = e.some((U) => Vt(U) || An(U))),
            (a = () =>
              e.map((U) => {
                if (we(U)) return U.value
                if (Vt(U)) return f(U)
                if (H(U)) return lt(U, c, 2)
              })))
          : H(e)
            ? t
              ? (a = () => lt(e, c, 2))
              : (a = () => (g && g(), $e(e, c, 3, [b])))
            : (a = Se),
    t && s)
  ) {
    const U = a
    a = () => _t(U())
  }
  let g,
    b = (U) => {
      g = k.onStop = () => {
        lt(U, c, 4), (g = k.onStop = void 0)
      }
    },
    w
  if (qn)
    if (((b = Se), t ? n && $e(t, c, 3, [a(), p ? [] : void 0, b]) : a(), r === 'sync')) {
      const U = nc()
      w = U.__watcherHandles || (U.__watcherHandles = [])
    } else return Se
  let I = p ? new Array(e.length).fill(gn) : gn
  const C = () => {
    if (!(!k.active || !k.dirty))
      if (t) {
        const U = k.run()
        ;(s || d || (p ? U.some((me, Re) => ct(me, I[Re])) : ct(U, I))) &&
          (g && g(), $e(t, c, 3, [U, I === gn ? void 0 : p && I[0] === gn ? [] : I, b]), (I = U))
      } else k.run()
  }
  C.allowRecurse = !!t
  let F
  r === 'sync'
    ? (F = C)
    : r === 'post'
      ? (F = () => be(C, c && c.suspense))
      : ((C.pre = !0), c && (C.id = c.uid), (F = () => Ws(C)))
  const k = new Ds(a, Se, F),
    K = pl(),
    oe = () => {
      k.stop(), K && Is(K.effects, k)
    }
  return (
    t ? (n ? C() : (I = k.run())) : r === 'post' ? be(k.run.bind(k), c && c.suspense) : k.run(),
    w && w.push(oe),
    oe
  )
}
function sc(e, t, n) {
  const s = this.proxy,
    r = ie(e) ? (e.includes('.') ? ei(s, e) : () => s[e]) : e.bind(s, s)
  let o
  H(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = ln(this),
    l = Zo(r, o.bind(s), n)
  return i(), l
}
function ei(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function _t(e, t, n = 0, s) {
  if (!se(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((s = s || new Set()), s.has(e))) return e
  if ((s.add(e), we(e))) _t(e.value, t, n, s)
  else if (D(e)) for (let r = 0; r < e.length; r++) _t(e[r], t, n, s)
  else if (yo(e) || Pt(e))
    e.forEach((r) => {
      _t(r, t, n, s)
    })
  else if (Eo(e)) for (const r in e) _t(e[r], t, n, s)
  return e
}
function _n(e, t) {
  if (ve === null) return e
  const n = zn(ve) || ve.proxy,
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, c = Z] = t[r]
    o &&
      (H(o) && (o = { mounted: o, updated: o }),
      o.deep && _t(i),
      s.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: l, modifiers: c }))
  }
  return e
}
function pt(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < r.length; i++) {
    const l = r[i]
    o && (l.oldValue = o[i].value)
    let c = l.dir[s]
    c && (at(), $e(c, n, 8, [e.el, l, e, t]), ut())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function ti(e, t) {
  return H(e) ? fe({ name: e.name }, t, { setup: e }) : e
}
const vn = (e) => !!e.type.__asyncLoader,
  ni = (e) => e.type.__isKeepAlive
function rc(e, t) {
  si(e, 'a', t)
}
function oc(e, t) {
  si(e, 'da', t)
}
function si(e, t, n = pe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Un(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) ni(r.parent.vnode) && ic(s, t, n, r), (r = r.parent)
  }
}
function ic(e, t, n, s) {
  const r = Un(t, e, s, !0)
  ri(() => {
    Is(s[t], r)
  }, n)
}
function Un(e, t, n = pe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          at()
          const l = ln(n),
            c = $e(t, n, e, i)
          return l(), ut(), c
        })
    return s ? r.unshift(o) : r.push(o), o
  }
}
const Qe =
    (e) =>
    (t, n = pe) =>
      (!qn || e === 'sp') && Un(e, (...s) => t(...s), n),
  lc = Qe('bm'),
  cc = Qe('m'),
  ac = Qe('bu'),
  uc = Qe('u'),
  fc = Qe('bum'),
  ri = Qe('um'),
  dc = Qe('sp'),
  hc = Qe('rtg'),
  pc = Qe('rtc')
function mc(e, t = pe) {
  Un('ec', e, t)
}
function Gs(e, t, n, s) {
  let r
  const o = n && n[s]
  if (D(e) || ie(e)) {
    r = new Array(e.length)
    for (let i = 0, l = e.length; i < l; i++) r[i] = t(e[i], i, void 0, o && o[i])
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i])
  } else if (se(e))
    if (e[Symbol.iterator]) r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]))
    else {
      const i = Object.keys(e)
      r = new Array(i.length)
      for (let l = 0, c = i.length; l < c; l++) {
        const f = i[l]
        r[l] = t(e[f], f, l, o && o[l])
      }
    }
  else r = []
  return n && (n[s] = r), r
}
const ys = (e) => (e ? (yi(e) ? zn(e) || e.proxy : ys(e.parent)) : null),
  qt = fe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ys(e.parent),
    $root: (e) => ys(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Js(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Ws(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = zo.bind(e.proxy)),
    $watch: (e) => sc.bind(e)
  }),
  ns = (e, t) => e !== Z && !e.__isScriptSetup && z(e, t),
  gc = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: c } = e
      let f
      if (t[0] !== '$') {
        const g = i[t]
        if (g !== void 0)
          switch (g) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (ns(s, t)) return (i[t] = 1), s[t]
          if (r !== Z && z(r, t)) return (i[t] = 2), r[t]
          if ((f = e.propsOptions[0]) && z(f, t)) return (i[t] = 3), o[t]
          if (n !== Z && z(n, t)) return (i[t] = 4), n[t]
          bs && (i[t] = 0)
        }
      }
      const a = qt[t]
      let d, p
      if (a) return t === '$attrs' && Ee(e.attrs, 'get', ''), a(e)
      if ((d = l.__cssModules) && (d = d[t])) return d
      if (n !== Z && z(n, t)) return (i[t] = 4), n[t]
      if (((p = c.config.globalProperties), z(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e
      return ns(r, t)
        ? ((r[t] = n), !0)
        : s !== Z && z(s, t)
          ? ((s[t] = n), !0)
          : z(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } },
      i
    ) {
      let l
      return (
        !!n[i] ||
        (e !== Z && z(e, i)) ||
        ns(t, i) ||
        ((l = o[0]) && z(l, i)) ||
        z(s, i) ||
        z(qt, i) ||
        z(r.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : z(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function wr(e) {
  return D(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let bs = !0
function _c(e) {
  const t = Js(e),
    n = e.proxy,
    s = e.ctx
  ;(bs = !1), t.beforeCreate && xr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: f,
    created: a,
    beforeMount: d,
    mounted: p,
    beforeUpdate: g,
    updated: b,
    activated: w,
    deactivated: I,
    beforeDestroy: C,
    beforeUnmount: F,
    destroyed: k,
    unmounted: K,
    render: oe,
    renderTracked: U,
    renderTriggered: me,
    errorCaptured: Re,
    serverPrefetch: dt,
    expose: Ie,
    inheritAttrs: Xe,
    components: ht,
    directives: Me,
    filters: Mt
  } = t
  if ((f && yc(f, s, null), i))
    for (const X in i) {
      const W = i[X]
      H(W) && (s[X] = W.bind(n))
    }
  if (r) {
    const X = r.call(n, n)
    se(X) && (e.data = Dn(X))
  }
  if (((bs = !0), o))
    for (const X in o) {
      const W = o[X],
        ze = H(W) ? W.bind(n, n) : H(W.get) ? W.get.bind(n, n) : Se,
        Ye = !H(W) && H(W.set) ? W.set.bind(n) : Se,
        je = Ce({ get: ze, set: Ye })
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (ye) => (je.value = ye)
      })
    }
  if (l) for (const X in l) oi(l[X], s, n, X)
  if (c) {
    const X = H(c) ? c.call(n) : c
    Reflect.ownKeys(X).forEach((W) => {
      En(W, X[W])
    })
  }
  a && xr(a, e, 'c')
  function le(X, W) {
    D(W) ? W.forEach((ze) => X(ze.bind(n))) : W && X(W.bind(n))
  }
  if (
    (le(lc, d),
    le(cc, p),
    le(ac, g),
    le(uc, b),
    le(rc, w),
    le(oc, I),
    le(mc, Re),
    le(pc, U),
    le(hc, me),
    le(fc, F),
    le(ri, K),
    le(dc, dt),
    D(Ie))
  )
    if (Ie.length) {
      const X = e.exposed || (e.exposed = {})
      Ie.forEach((W) => {
        Object.defineProperty(X, W, { get: () => n[W], set: (ze) => (n[W] = ze) })
      })
    } else e.exposed || (e.exposed = {})
  oe && e.render === Se && (e.render = oe),
    Xe != null && (e.inheritAttrs = Xe),
    ht && (e.components = ht),
    Me && (e.directives = Me)
}
function yc(e, t, n = Se) {
  D(e) && (e = vs(e))
  for (const s in e) {
    const r = e[s]
    let o
    se(r)
      ? 'default' in r
        ? (o = Ge(r.from || s, r.default, !0))
        : (o = Ge(r.from || s))
      : (o = Ge(r)),
      we(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i)
          })
        : (t[s] = o)
  }
}
function xr(e, t, n) {
  $e(D(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function oi(e, t, n, s) {
  const r = s.includes('.') ? ei(n, s) : () => n[s]
  if (ie(e)) {
    const o = t[e]
    H(o) && bn(r, o)
  } else if (H(e)) bn(r, e.bind(n))
  else if (se(e))
    if (D(e)) e.forEach((o) => oi(o, t, n, s))
    else {
      const o = H(e.handler) ? e.handler.bind(n) : t[e.handler]
      H(o) && bn(r, o, e)
    }
}
function Js(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i }
    } = e.appContext,
    l = o.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}), r.length && r.forEach((f) => Tn(c, f, i, !0)), Tn(c, t, i)),
    se(t) && o.set(t, c),
    c
  )
}
function Tn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t
  o && Tn(e, o, n, !0), r && r.forEach((i) => Tn(e, i, n, !0))
  for (const i in t)
    if (!(s && i === 'expose')) {
      const l = bc[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const bc = {
  data: Rr,
  props: Sr,
  emits: Sr,
  methods: Ht,
  computed: Ht,
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  components: Ht,
  directives: Ht,
  watch: Ec,
  provide: Rr,
  inject: vc
}
function Rr(e, t) {
  return t
    ? e
      ? function () {
          return fe(H(e) ? e.call(this, this) : e, H(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function vc(e, t) {
  return Ht(vs(e), vs(t))
}
function vs(e) {
  if (D(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Ht(e, t) {
  return e ? fe(Object.create(null), e, t) : t
}
function Sr(e, t) {
  return e
    ? D(e) && D(t)
      ? [...new Set([...e, ...t])]
      : fe(Object.create(null), wr(e), wr(t ?? {}))
    : t
}
function Ec(e, t) {
  if (!e) return t
  if (!t) return e
  const n = fe(Object.create(null), e)
  for (const s in t) n[s] = ge(e[s], t[s])
  return n
}
function ii() {
  return {
    app: null,
    config: {
      isNativeTag: el,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let wc = 0
function xc(e, t) {
  return function (s, r = null) {
    H(s) || (s = fe({}, s)), r != null && !se(r) && (r = null)
    const o = ii(),
      i = new WeakSet()
    let l = !1
    const c = (o.app = {
      _uid: wc++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Gc,
      get config() {
        return o.config
      },
      set config(f) {},
      use(f, ...a) {
        return (
          i.has(f) ||
            (f && H(f.install) ? (i.add(f), f.install(c, ...a)) : H(f) && (i.add(f), f(c, ...a))),
          c
        )
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), c
      },
      component(f, a) {
        return a ? ((o.components[f] = a), c) : o.components[f]
      },
      directive(f, a) {
        return a ? ((o.directives[f] = a), c) : o.directives[f]
      },
      mount(f, a, d) {
        if (!l) {
          const p = ne(s, r)
          return (
            (p.appContext = o),
            d === !0 ? (d = 'svg') : d === !1 && (d = void 0),
            a && t ? t(p, f) : e(p, f, d),
            (l = !0),
            (c._container = f),
            (f.__vue_app__ = c),
            zn(p.component) || p.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__)
      },
      provide(f, a) {
        return (o.provides[f] = a), c
      },
      runWithContext(f) {
        const a = zt
        zt = c
        try {
          return f()
        } finally {
          zt = a
        }
      }
    })
    return c
  }
}
let zt = null
function En(e, t) {
  if (pe) {
    let n = pe.provides
    const s = pe.parent && pe.parent.provides
    s === n && (n = pe.provides = Object.create(s)), (n[e] = t)
  }
}
function Ge(e, t, n = !1) {
  const s = pe || ve
  if (s || zt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : zt._context.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && H(t) ? t.call(s && s.proxy) : t
  }
}
const li = {},
  ci = () => Object.create(li),
  ai = (e) => Object.getPrototypeOf(e) === li
function Rc(e, t, n, s = !1) {
  const r = {},
    o = ci()
  ;(e.propsDefaults = Object.create(null)), ui(e, t, r, o)
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0)
  n ? (e.props = s ? r : jo(r)) : e.type.props ? (e.props = r) : (e.props = o), (e.attrs = o)
}
function Sc(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i }
    } = e,
    l = J(r),
    [c] = e.propsOptions
  let f = !1
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const a = e.vnode.dynamicProps
      for (let d = 0; d < a.length; d++) {
        let p = a[d]
        if (Hn(e.emitsOptions, p)) continue
        const g = t[p]
        if (c)
          if (z(o, p)) g !== o[p] && ((o[p] = g), (f = !0))
          else {
            const b = Ve(p)
            r[b] = Es(c, l, b, g, e, !1)
          }
        else g !== o[p] && ((o[p] = g), (f = !0))
      }
    }
  } else {
    ui(e, t, r, o) && (f = !0)
    let a
    for (const d in l)
      (!t || (!z(t, d) && ((a = Lt(d)) === d || !z(t, a)))) &&
        (c
          ? n && (n[d] !== void 0 || n[a] !== void 0) && (r[d] = Es(c, l, d, void 0, e, !0))
          : delete r[d])
    if (o !== l) for (const d in o) (!t || !z(t, d)) && (delete o[d], (f = !0))
  }
  f && We(e.attrs, 'set', '')
}
function ui(e, t, n, s) {
  const [r, o] = e.propsOptions
  let i = !1,
    l
  if (t)
    for (let c in t) {
      if (Ut(c)) continue
      const f = t[c]
      let a
      r && z(r, (a = Ve(c)))
        ? !o || !o.includes(a)
          ? (n[a] = f)
          : ((l || (l = {}))[a] = f)
        : Hn(e.emitsOptions, c) || ((!(c in s) || f !== s[c]) && ((s[c] = f), (i = !0)))
    }
  if (o) {
    const c = J(n),
      f = l || Z
    for (let a = 0; a < o.length; a++) {
      const d = o[a]
      n[d] = Es(r, c, d, f[d], e, !z(f, d))
    }
  }
  return i
}
function Es(e, t, n, s, r, o) {
  const i = e[n]
  if (i != null) {
    const l = z(i, 'default')
    if (l && s === void 0) {
      const c = i.default
      if (i.type !== Function && !i.skipFactory && H(c)) {
        const { propsDefaults: f } = r
        if (n in f) s = f[n]
        else {
          const a = ln(r)
          ;(s = f[n] = c.call(null, t)), a()
        }
      } else s = c
    }
    i[0] && (o && !l ? (s = !1) : i[1] && (s === '' || s === Lt(n)) && (s = !0))
  }
  return s
}
function fi(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e)
  if (r) return r
  const o = e.props,
    i = {},
    l = []
  let c = !1
  if (!H(e)) {
    const a = (d) => {
      c = !0
      const [p, g] = fi(d, t, !0)
      fe(i, p), g && l.push(...g)
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  if (!o && !c) return se(e) && s.set(e, Ot), Ot
  if (D(o))
    for (let a = 0; a < o.length; a++) {
      const d = Ve(o[a])
      Or(d) && (i[d] = Z)
    }
  else if (o)
    for (const a in o) {
      const d = Ve(a)
      if (Or(d)) {
        const p = o[a],
          g = (i[d] = D(p) || H(p) ? { type: p } : fe({}, p))
        if (g) {
          const b = Cr(Boolean, g.type),
            w = Cr(String, g.type)
          ;(g[0] = b > -1), (g[1] = w < 0 || b < w), (b > -1 || z(g, 'default')) && l.push(d)
        }
      }
    }
  const f = [i, l]
  return se(e) && s.set(e, f), f
}
function Or(e) {
  return e[0] !== '$' && !Ut(e)
}
function Pr(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function Ar(e, t) {
  return Pr(e) === Pr(t)
}
function Cr(e, t) {
  return D(t) ? t.findIndex((n) => Ar(n, e)) : H(t) && Ar(t, e) ? 0 : -1
}
const di = (e) => e[0] === '_' || e === '$stable',
  Qs = (e) => (D(e) ? e.map(Be) : [Be(e)]),
  Oc = (e, t, n) => {
    if (t._n) return t
    const s = Zt((...r) => Qs(t(...r)), n)
    return (s._c = !1), s
  },
  hi = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (di(r)) continue
      const o = e[r]
      if (H(o)) t[r] = Oc(r, o, s)
      else if (o != null) {
        const i = Qs(o)
        t[r] = () => i
      }
    }
  },
  pi = (e, t) => {
    const n = Qs(t)
    e.slots.default = () => n
  },
  Pc = (e, t) => {
    const n = (e.slots = ci())
    if (e.vnode.shapeFlag & 32) {
      const s = t._
      s ? (fe(n, t), wo(n, '_', s)) : hi(t, n)
    } else t && pi(e, t)
  },
  Ac = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let o = !0,
      i = Z
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (o = !1)
          : (fe(r, t), !n && l === 1 && delete r._)
        : ((o = !t.$stable), hi(t, r)),
        (i = t)
    } else t && (pi(e, t), (i = { default: 1 }))
    if (o) for (const l in r) !di(l) && i[l] == null && delete r[l]
  }
function ws(e, t, n, s, r = !1) {
  if (D(e)) {
    e.forEach((p, g) => ws(p, t && (D(t) ? t[g] : t), n, s, r))
    return
  }
  if (vn(s) && !r) return
  const o = s.shapeFlag & 4 ? zn(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: l, r: c } = e,
    f = t && t.r,
    a = l.refs === Z ? (l.refs = {}) : l.refs,
    d = l.setupState
  if (
    (f != null &&
      f !== c &&
      (ie(f) ? ((a[f] = null), z(d, f) && (d[f] = null)) : we(f) && (f.value = null)),
    H(c))
  )
    lt(c, l, 12, [i, a])
  else {
    const p = ie(c),
      g = we(c)
    if (p || g) {
      const b = () => {
        if (e.f) {
          const w = p ? (z(d, c) ? d[c] : a[c]) : c.value
          r
            ? D(w) && Is(w, o)
            : D(w)
              ? w.includes(o) || w.push(o)
              : p
                ? ((a[c] = [o]), z(d, c) && (d[c] = a[c]))
                : ((c.value = [o]), e.k && (a[e.k] = c.value))
        } else p ? ((a[c] = i), z(d, c) && (d[c] = i)) : g && ((c.value = i), e.k && (a[e.k] = i))
      }
      i ? ((b.id = -1), be(b, n)) : b()
    }
  }
}
const be = ec
function Cc(e) {
  return Tc(e)
}
function Tc(e, t) {
  const n = xo()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: a,
      parentNode: d,
      nextSibling: p,
      setScopeId: g = Se,
      insertStaticContent: b
    } = e,
    w = (u, h, m, E = null, _ = null, S = null, A = void 0, R = null, O = !!h.dynamicChildren) => {
      if (u === h) return
      u && !kt(u, h) && ((E = v(u)), ye(u, _, S, !0), (u = null)),
        h.patchFlag === -2 && ((O = !1), (h.dynamicChildren = null))
      const { type: x, ref: $, shapeFlag: j } = h
      switch (x) {
        case Vn:
          I(u, h, m, E)
          break
        case en:
          C(u, h, m, E)
          break
        case wn:
          u == null && F(h, m, E, A)
          break
        case _e:
          ht(u, h, m, E, _, S, A, R, O)
          break
        default:
          j & 1
            ? oe(u, h, m, E, _, S, A, R, O)
            : j & 6
              ? Me(u, h, m, E, _, S, A, R, O)
              : (j & 64 || j & 128) && x.process(u, h, m, E, _, S, A, R, O, L)
      }
      $ != null && _ && ws($, u && u.ref, S, h || u, !h)
    },
    I = (u, h, m, E) => {
      if (u == null) s((h.el = l(h.children)), m, E)
      else {
        const _ = (h.el = u.el)
        h.children !== u.children && f(_, h.children)
      }
    },
    C = (u, h, m, E) => {
      u == null ? s((h.el = c(h.children || '')), m, E) : (h.el = u.el)
    },
    F = (u, h, m, E) => {
      ;[u.el, u.anchor] = b(u.children, h, m, E, u.el, u.anchor)
    },
    k = ({ el: u, anchor: h }, m, E) => {
      let _
      for (; u && u !== h; ) (_ = p(u)), s(u, m, E), (u = _)
      s(h, m, E)
    },
    K = ({ el: u, anchor: h }) => {
      let m
      for (; u && u !== h; ) (m = p(u)), r(u), (u = m)
      r(h)
    },
    oe = (u, h, m, E, _, S, A, R, O) => {
      h.type === 'svg' ? (A = 'svg') : h.type === 'math' && (A = 'mathml'),
        u == null ? U(h, m, E, _, S, A, R, O) : dt(u, h, _, S, A, R, O)
    },
    U = (u, h, m, E, _, S, A, R) => {
      let O, x
      const { props: $, shapeFlag: j, transition: M, dirs: B } = u
      if (
        ((O = u.el = i(u.type, S, $ && $.is, $)),
        j & 8 ? a(O, u.children) : j & 16 && Re(u.children, O, null, E, _, ss(u, S), A, R),
        B && pt(u, null, E, 'created'),
        me(O, u, u.scopeId, A, E),
        $)
      ) {
        for (const Y in $) Y !== 'value' && !Ut(Y) && o(O, Y, null, $[Y], S, u.children, E, _, de)
        'value' in $ && o(O, 'value', null, $.value, S), (x = $.onVnodeBeforeMount) && De(x, E, u)
      }
      B && pt(u, null, E, 'beforeMount')
      const V = Nc(_, M)
      V && M.beforeEnter(O),
        s(O, h, m),
        ((x = $ && $.onVnodeMounted) || V || B) &&
          be(() => {
            x && De(x, E, u), V && M.enter(O), B && pt(u, null, E, 'mounted')
          }, _)
    },
    me = (u, h, m, E, _) => {
      if ((m && g(u, m), E)) for (let S = 0; S < E.length; S++) g(u, E[S])
      if (_) {
        let S = _.subTree
        if (h === S) {
          const A = _.vnode
          me(u, A, A.scopeId, A.slotScopeIds, _.parent)
        }
      }
    },
    Re = (u, h, m, E, _, S, A, R, O = 0) => {
      for (let x = O; x < u.length; x++) {
        const $ = (u[x] = R ? st(u[x]) : Be(u[x]))
        w(null, $, h, m, E, _, S, A, R)
      }
    },
    dt = (u, h, m, E, _, S, A) => {
      const R = (h.el = u.el)
      let { patchFlag: O, dynamicChildren: x, dirs: $ } = h
      O |= u.patchFlag & 16
      const j = u.props || Z,
        M = h.props || Z
      let B
      if (
        (m && mt(m, !1),
        (B = M.onVnodeBeforeUpdate) && De(B, m, h, u),
        $ && pt(h, u, m, 'beforeUpdate'),
        m && mt(m, !0),
        x
          ? Ie(u.dynamicChildren, x, R, m, E, ss(h, _), S)
          : A || W(u, h, R, null, m, E, ss(h, _), S, !1),
        O > 0)
      ) {
        if (O & 16) Xe(R, h, j, M, m, E, _)
        else if (
          (O & 2 && j.class !== M.class && o(R, 'class', null, M.class, _),
          O & 4 && o(R, 'style', j.style, M.style, _),
          O & 8)
        ) {
          const V = h.dynamicProps
          for (let Y = 0; Y < V.length; Y++) {
            const te = V[Y],
              ce = j[te],
              Pe = M[te]
            ;(Pe !== ce || te === 'value') && o(R, te, ce, Pe, _, u.children, m, E, de)
          }
        }
        O & 1 && u.children !== h.children && a(R, h.children)
      } else !A && x == null && Xe(R, h, j, M, m, E, _)
      ;((B = M.onVnodeUpdated) || $) &&
        be(() => {
          B && De(B, m, h, u), $ && pt(h, u, m, 'updated')
        }, E)
    },
    Ie = (u, h, m, E, _, S, A) => {
      for (let R = 0; R < h.length; R++) {
        const O = u[R],
          x = h[R],
          $ = O.el && (O.type === _e || !kt(O, x) || O.shapeFlag & 70) ? d(O.el) : m
        w(O, x, $, null, E, _, S, A, !0)
      }
    },
    Xe = (u, h, m, E, _, S, A) => {
      if (m !== E) {
        if (m !== Z)
          for (const R in m) !Ut(R) && !(R in E) && o(u, R, m[R], null, A, h.children, _, S, de)
        for (const R in E) {
          if (Ut(R)) continue
          const O = E[R],
            x = m[R]
          O !== x && R !== 'value' && o(u, R, x, O, A, h.children, _, S, de)
        }
        'value' in E && o(u, 'value', m.value, E.value, A)
      }
    },
    ht = (u, h, m, E, _, S, A, R, O) => {
      const x = (h.el = u ? u.el : l('')),
        $ = (h.anchor = u ? u.anchor : l(''))
      let { patchFlag: j, dynamicChildren: M, slotScopeIds: B } = h
      B && (R = R ? R.concat(B) : B),
        u == null
          ? (s(x, m, E), s($, m, E), Re(h.children || [], m, $, _, S, A, R, O))
          : j > 0 && j & 64 && M && u.dynamicChildren
            ? (Ie(u.dynamicChildren, M, m, _, S, A, R),
              (h.key != null || (_ && h === _.subTree)) && mi(u, h, !0))
            : W(u, h, m, $, _, S, A, R, O)
    },
    Me = (u, h, m, E, _, S, A, R, O) => {
      ;(h.slotScopeIds = R),
        u == null
          ? h.shapeFlag & 512
            ? _.ctx.activate(h, m, E, A, O)
            : Mt(h, m, E, _, S, A, O)
          : Et(u, h, O)
    },
    Mt = (u, h, m, E, _, S, A) => {
      const R = (u.component = Hc(u, E, _))
      if ((ni(u) && (R.ctx.renderer = L), Uc(R), R.asyncDep)) {
        if ((_ && _.registerDep(R, le), !u.el)) {
          const O = (R.subTree = ne(en))
          C(null, O, h, m)
        }
      } else le(R, u, h, m, _, S, A)
    },
    Et = (u, h, m) => {
      const E = (h.component = u.component)
      if (Gl(u, h, m))
        if (E.asyncDep && !E.asyncResolved) {
          X(E, h, m)
          return
        } else (E.next = h), Ul(E.update), (E.effect.dirty = !0), E.update()
      else (h.el = u.el), (E.vnode = h)
    },
    le = (u, h, m, E, _, S, A) => {
      const R = () => {
          if (u.isMounted) {
            let { next: $, bu: j, u: M, parent: B, vnode: V } = u
            {
              const Rt = gi(u)
              if (Rt) {
                $ && (($.el = V.el), X(u, $, A)),
                  Rt.asyncDep.then(() => {
                    u.isUnmounted || R()
                  })
                return
              }
            }
            let Y = $,
              te
            mt(u, !1),
              $ ? (($.el = V.el), X(u, $, A)) : ($ = V),
              j && Zn(j),
              (te = $.props && $.props.onVnodeBeforeUpdate) && De(te, B, $, V),
              mt(u, !0)
            const ce = ts(u),
              Pe = u.subTree
            ;(u.subTree = ce),
              w(Pe, ce, d(Pe.el), v(Pe), u, _, S),
              ($.el = ce.el),
              Y === null && Jl(u, ce.el),
              M && be(M, _),
              (te = $.props && $.props.onVnodeUpdated) && be(() => De(te, B, $, V), _)
          } else {
            let $
            const { el: j, props: M } = h,
              { bm: B, m: V, parent: Y } = u,
              te = vn(h)
            if (
              (mt(u, !1),
              B && Zn(B),
              !te && ($ = M && M.onVnodeBeforeMount) && De($, Y, h),
              mt(u, !0),
              j && ee)
            ) {
              const ce = () => {
                ;(u.subTree = ts(u)), ee(j, u.subTree, u, _, null)
              }
              te ? h.type.__asyncLoader().then(() => !u.isUnmounted && ce()) : ce()
            } else {
              const ce = (u.subTree = ts(u))
              w(null, ce, m, E, u, _, S), (h.el = ce.el)
            }
            if ((V && be(V, _), !te && ($ = M && M.onVnodeMounted))) {
              const ce = h
              be(() => De($, Y, ce), _)
            }
            ;(h.shapeFlag & 256 || (Y && vn(Y.vnode) && Y.vnode.shapeFlag & 256)) &&
              u.a &&
              be(u.a, _),
              (u.isMounted = !0),
              (h = m = E = null)
          }
        },
        O = (u.effect = new Ds(R, Se, () => Ws(x), u.scope)),
        x = (u.update = () => {
          O.dirty && O.run()
        })
      ;(x.id = u.uid), mt(u, !0), x()
    },
    X = (u, h, m) => {
      h.component = u
      const E = u.vnode.props
      ;(u.vnode = h), (u.next = null), Sc(u, h.props, E, m), Ac(u, h.children, m), at(), br(u), ut()
    },
    W = (u, h, m, E, _, S, A, R, O = !1) => {
      const x = u && u.children,
        $ = u ? u.shapeFlag : 0,
        j = h.children,
        { patchFlag: M, shapeFlag: B } = h
      if (M > 0) {
        if (M & 128) {
          Ye(x, j, m, E, _, S, A, R, O)
          return
        } else if (M & 256) {
          ze(x, j, m, E, _, S, A, R, O)
          return
        }
      }
      B & 8
        ? ($ & 16 && de(x, _, S), j !== x && a(m, j))
        : $ & 16
          ? B & 16
            ? Ye(x, j, m, E, _, S, A, R, O)
            : de(x, _, S, !0)
          : ($ & 8 && a(m, ''), B & 16 && Re(j, m, E, _, S, A, R, O))
    },
    ze = (u, h, m, E, _, S, A, R, O) => {
      ;(u = u || Ot), (h = h || Ot)
      const x = u.length,
        $ = h.length,
        j = Math.min(x, $)
      let M
      for (M = 0; M < j; M++) {
        const B = (h[M] = O ? st(h[M]) : Be(h[M]))
        w(u[M], B, m, null, _, S, A, R, O)
      }
      x > $ ? de(u, _, S, !0, !1, j) : Re(h, m, E, _, S, A, R, O, j)
    },
    Ye = (u, h, m, E, _, S, A, R, O) => {
      let x = 0
      const $ = h.length
      let j = u.length - 1,
        M = $ - 1
      for (; x <= j && x <= M; ) {
        const B = u[x],
          V = (h[x] = O ? st(h[x]) : Be(h[x]))
        if (kt(B, V)) w(B, V, m, null, _, S, A, R, O)
        else break
        x++
      }
      for (; x <= j && x <= M; ) {
        const B = u[j],
          V = (h[M] = O ? st(h[M]) : Be(h[M]))
        if (kt(B, V)) w(B, V, m, null, _, S, A, R, O)
        else break
        j--, M--
      }
      if (x > j) {
        if (x <= M) {
          const B = M + 1,
            V = B < $ ? h[B].el : E
          for (; x <= M; ) w(null, (h[x] = O ? st(h[x]) : Be(h[x])), m, V, _, S, A, R, O), x++
        }
      } else if (x > M) for (; x <= j; ) ye(u[x], _, S, !0), x++
      else {
        const B = x,
          V = x,
          Y = new Map()
        for (x = V; x <= M; x++) {
          const xe = (h[x] = O ? st(h[x]) : Be(h[x]))
          xe.key != null && Y.set(xe.key, x)
        }
        let te,
          ce = 0
        const Pe = M - V + 1
        let Rt = !1,
          cr = 0
        const jt = new Array(Pe)
        for (x = 0; x < Pe; x++) jt[x] = 0
        for (x = B; x <= j; x++) {
          const xe = u[x]
          if (ce >= Pe) {
            ye(xe, _, S, !0)
            continue
          }
          let ke
          if (xe.key != null) ke = Y.get(xe.key)
          else
            for (te = V; te <= M; te++)
              if (jt[te - V] === 0 && kt(xe, h[te])) {
                ke = te
                break
              }
          ke === void 0
            ? ye(xe, _, S, !0)
            : ((jt[ke - V] = x + 1),
              ke >= cr ? (cr = ke) : (Rt = !0),
              w(xe, h[ke], m, null, _, S, A, R, O),
              ce++)
        }
        const ar = Rt ? $c(jt) : Ot
        for (te = ar.length - 1, x = Pe - 1; x >= 0; x--) {
          const xe = V + x,
            ke = h[xe],
            ur = xe + 1 < $ ? h[xe + 1].el : E
          jt[x] === 0
            ? w(null, ke, m, ur, _, S, A, R, O)
            : Rt && (te < 0 || x !== ar[te] ? je(ke, m, ur, 2) : te--)
        }
      }
    },
    je = (u, h, m, E, _ = null) => {
      const { el: S, type: A, transition: R, children: O, shapeFlag: x } = u
      if (x & 6) {
        je(u.component.subTree, h, m, E)
        return
      }
      if (x & 128) {
        u.suspense.move(h, m, E)
        return
      }
      if (x & 64) {
        A.move(u, h, m, L)
        return
      }
      if (A === _e) {
        s(S, h, m)
        for (let j = 0; j < O.length; j++) je(O[j], h, m, E)
        s(u.anchor, h, m)
        return
      }
      if (A === wn) {
        k(u, h, m)
        return
      }
      if (E !== 2 && x & 1 && R)
        if (E === 0) R.beforeEnter(S), s(S, h, m), be(() => R.enter(S), _)
        else {
          const { leave: j, delayLeave: M, afterLeave: B } = R,
            V = () => s(S, h, m),
            Y = () => {
              j(S, () => {
                V(), B && B()
              })
            }
          M ? M(S, V, Y) : Y()
        }
      else s(S, h, m)
    },
    ye = (u, h, m, E = !1, _ = !1) => {
      const {
        type: S,
        props: A,
        ref: R,
        children: O,
        dynamicChildren: x,
        shapeFlag: $,
        patchFlag: j,
        dirs: M
      } = u
      if ((R != null && ws(R, null, m, u, !0), $ & 256)) {
        h.ctx.deactivate(u)
        return
      }
      const B = $ & 1 && M,
        V = !vn(u)
      let Y
      if ((V && (Y = A && A.onVnodeBeforeUnmount) && De(Y, h, u), $ & 6)) un(u.component, m, E)
      else {
        if ($ & 128) {
          u.suspense.unmount(m, E)
          return
        }
        B && pt(u, null, h, 'beforeUnmount'),
          $ & 64
            ? u.type.remove(u, h, m, _, L, E)
            : x && (S !== _e || (j > 0 && j & 64))
              ? de(x, h, m, !1, !0)
              : ((S === _e && j & 384) || (!_ && $ & 16)) && de(O, h, m),
          E && wt(u)
      }
      ;((V && (Y = A && A.onVnodeUnmounted)) || B) &&
        be(() => {
          Y && De(Y, h, u), B && pt(u, null, h, 'unmounted')
        }, m)
    },
    wt = (u) => {
      const { type: h, el: m, anchor: E, transition: _ } = u
      if (h === _e) {
        xt(m, E)
        return
      }
      if (h === wn) {
        K(u)
        return
      }
      const S = () => {
        r(m), _ && !_.persisted && _.afterLeave && _.afterLeave()
      }
      if (u.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: A, delayLeave: R } = _,
          O = () => A(m, S)
        R ? R(u.el, S, O) : O()
      } else S()
    },
    xt = (u, h) => {
      let m
      for (; u !== h; ) (m = p(u)), r(u), (u = m)
      r(h)
    },
    un = (u, h, m) => {
      const { bum: E, scope: _, update: S, subTree: A, um: R } = u
      E && Zn(E),
        _.stop(),
        S && ((S.active = !1), ye(A, u, h, m)),
        R && be(R, h),
        be(() => {
          u.isUnmounted = !0
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve())
    },
    de = (u, h, m, E = !1, _ = !1, S = 0) => {
      for (let A = S; A < u.length; A++) ye(u[A], h, m, E, _)
    },
    v = (u) =>
      u.shapeFlag & 6
        ? v(u.component.subTree)
        : u.shapeFlag & 128
          ? u.suspense.next()
          : p(u.anchor || u.el)
  let N = !1
  const P = (u, h, m) => {
      u == null
        ? h._vnode && ye(h._vnode, null, null, !0)
        : w(h._vnode || null, u, h, null, null, null, m),
        N || ((N = !0), br(), Wo(), (N = !1)),
        (h._vnode = u)
    },
    L = { p: w, um: ye, m: je, r: wt, mt: Mt, mc: Re, pc: W, pbc: Ie, n: v, o: e }
  let G, ee
  return t && ([G, ee] = t(L)), { render: P, hydrate: G, createApp: xc(P, G) }
}
function ss({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function mt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Nc(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function mi(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (D(s) && D(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o]
      let l = r[o]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[o] = st(r[o])), (l.el = i.el)),
        n || mi(i, l)),
        l.type === Vn && (l.el = i.el)
    }
}
function $c(e) {
  const t = e.slice(),
    n = [0]
  let s, r, o, i, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const f = e[s]
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; ) (l = (o + i) >> 1), e[n[l]] < f ? (o = l + 1) : (i = l)
      f < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i])
  return n
}
function gi(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : gi(t)
}
const Fc = (e) => e.__isTeleport,
  _e = Symbol.for('v-fgt'),
  Vn = Symbol.for('v-txt'),
  en = Symbol.for('v-cmt'),
  wn = Symbol.for('v-stc'),
  Kt = []
let Ne = null
function ae(e = !1) {
  Kt.push((Ne = e ? null : []))
}
function Lc() {
  Kt.pop(), (Ne = Kt[Kt.length - 1] || null)
}
let tn = 1
function Tr(e) {
  tn += e
}
function Ic(e) {
  return (e.dynamicChildren = tn > 0 ? Ne || Ot : null), Lc(), tn > 0 && Ne && Ne.push(e), e
}
function ue(e, t, n, s, r, o) {
  return Ic(T(e, t, n, s, r, o, !0))
}
function xs(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function kt(e, t) {
  return e.type === t.type && e.key === t.key
}
const _i = ({ key: e }) => e ?? null,
  xn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (ie(e) || we(e) || H(e) ? { i: ve, r: e, k: t, f: !!n } : e) : null
  )
function T(e, t = null, n = null, s = 0, r = null, o = e === _e ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _i(t),
    ref: t && xn(t),
    scopeId: Qo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  }
  return (
    l ? (Xs(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ie(n) ? 8 : 16),
    tn > 0 && !i && Ne && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Ne.push(c),
    c
  )
}
const ne = Mc
function Mc(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Xl) && (e = en), xs(e))) {
    const l = Tt(e, t, !0)
    return (
      n && Xs(l, n),
      tn > 0 && !o && Ne && (l.shapeFlag & 6 ? (Ne[Ne.indexOf(e)] = l) : Ne.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((Wc(e) && (e = e.__vccOpts), t)) {
    t = jc(t)
    let { class: l, style: c } = t
    l && !ie(l) && (t.class = ks(l)),
      se(c) && (Do(c) && !D(c) && (c = fe({}, c)), (t.style = js(c)))
  }
  const i = ie(e) ? 1 : Zl(e) ? 128 : Fc(e) ? 64 : se(e) ? 4 : H(e) ? 2 : 0
  return T(e, t, n, s, r, i, o, !0)
}
function jc(e) {
  return e ? (Do(e) || ai(e) ? fe({}, e) : e) : null
}
function Tt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    l = t ? kc(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && _i(l),
    ref: t && t.ref ? (n && r ? (D(r) ? r.concat(xn(t)) : [r, xn(t)]) : xn(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== _e ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Tt(e.ssContent),
    ssFallback: e.ssFallback && Tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function Nn(e = ' ', t = 0) {
  return ne(Vn, null, e, t)
}
function on(e, t) {
  const n = ne(wn, null, e)
  return (n.staticCount = t), n
}
function Be(e) {
  return e == null || typeof e == 'boolean'
    ? ne(en)
    : D(e)
      ? ne(_e, null, e.slice())
      : typeof e == 'object'
        ? st(e)
        : ne(Vn, null, String(e))
}
function st(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Tt(e)
}
function Xs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (D(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Xs(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !ai(t)
        ? (t._ctx = ve)
        : r === 3 && ve && (ve.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    H(t)
      ? ((t = { default: t, _ctx: ve }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Nn(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function kc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = ks([t.class, s.class]))
      else if (r === 'style') t.style = js([t.style, s.style])
      else if (Ln(r)) {
        const o = t[r],
          i = s[r]
        i && o !== i && !(D(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function De(e, t, n, s = null) {
  $e(e, t, 7, [n, s])
}
const Dc = ii()
let Bc = 0
function Hc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Dc,
    o = {
      uid: Bc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new dl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: fi(s, r),
      emitsOptions: Jo(s, r),
      emit: null,
      emitted: null,
      propsDefaults: Z,
      inheritAttrs: s.inheritAttrs,
      ctx: Z,
      data: Z,
      props: Z,
      attrs: Z,
      slots: Z,
      refs: Z,
      setupState: Z,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = zl.bind(null, o)), e.ce && e.ce(o), o
  )
}
let pe = null,
  $n,
  Rs
{
  const e = xo(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o)
        }
      )
    }
  ;($n = t('__VUE_INSTANCE_SETTERS__', (n) => (pe = n))),
    (Rs = t('__VUE_SSR_SETTERS__', (n) => (qn = n)))
}
const ln = (e) => {
    const t = pe
    return (
      $n(e),
      e.scope.on(),
      () => {
        e.scope.off(), $n(t)
      }
    )
  },
  Nr = () => {
    pe && pe.scope.off(), $n(null)
  }
function yi(e) {
  return e.vnode.shapeFlag & 4
}
let qn = !1
function Uc(e, t = !1) {
  t && Rs(t)
  const { props: n, children: s } = e.vnode,
    r = yi(e)
  Rc(e, n, r, t), Pc(e, s)
  const o = r ? Vc(e, t) : void 0
  return t && Rs(!1), o
}
function Vc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, gc))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? zc(e) : null),
      o = ln(e)
    at()
    const i = lt(s, e, 0, [e.props, r])
    if ((ut(), o(), bo(i))) {
      if ((i.then(Nr, Nr), t))
        return i
          .then((l) => {
            $r(e, l, t)
          })
          .catch((l) => {
            Bn(l, e, 0)
          })
      e.asyncDep = i
    } else $r(e, i, t)
  } else bi(e, t)
}
function $r(e, t, n) {
  H(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : se(t) && (e.setupState = Vo(t)),
    bi(e, n)
}
let Fr
function bi(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && Fr && !s.render) {
      const r = s.template || Js(e).template
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          f = fe(fe({ isCustomElement: o, delimiters: l }, i), c)
        s.render = Fr(r, f)
      }
    }
    e.render = s.render || Se
  }
  {
    const r = ln(e)
    at()
    try {
      _c(e)
    } finally {
      ut(), r()
    }
  }
}
const qc = {
  get(e, t) {
    return Ee(e, 'get', ''), e[t]
  }
}
function zc(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, qc), slots: e.slots, emit: e.emit, expose: t }
}
function zn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Vo(Ll(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in qt) return qt[n](e)
        },
        has(t, n) {
          return n in t || n in qt
        }
      }))
    )
}
function Kc(e, t = !0) {
  return H(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Wc(e) {
  return H(e) && '__vccOpts' in e
}
const Ce = (e, t) => Il(e, t, qn)
function vi(e, t, n) {
  const s = arguments.length
  return s === 2
    ? se(t) && !D(t)
      ? xs(t)
        ? ne(e, null, [t])
        : ne(e, t)
      : ne(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && xs(n) && (n = [n]),
      ne(e, t, n))
}
const Gc = '3.4.25'
/**
 * @vue/runtime-dom v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Jc = 'http://www.w3.org/2000/svg',
  Qc = 'http://www.w3.org/1998/Math/MathML',
  rt = typeof document < 'u' ? document : null,
  Lr = rt && rt.createElement('template'),
  Xc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? rt.createElementNS(Jc, e)
          : t === 'mathml'
            ? rt.createElementNS(Qc, e)
            : rt.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r
    },
    createText: (e) => rt.createTextNode(e),
    createComment: (e) => rt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => rt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (r && (r === o || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); );
      else {
        Lr.innerHTML = s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e
        const l = Lr.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  Yc = Symbol('_vtc')
function Zc(e, t, n) {
  const s = e[Yc]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const Ir = Symbol('_vod'),
  ea = Symbol('_vsh'),
  ta = Symbol(''),
  na = /(^|;)\s*display\s*:/
function sa(e, t, n) {
  const s = e.style,
    r = ie(n)
  let o = !1
  if (n && !r) {
    if (t)
      if (ie(t))
        for (const i of t.split(';')) {
          const l = i.slice(0, i.indexOf(':')).trim()
          n[l] == null && Rn(s, l, '')
        }
      else for (const i in t) n[i] == null && Rn(s, i, '')
    for (const i in n) i === 'display' && (o = !0), Rn(s, i, n[i])
  } else if (r) {
    if (t !== n) {
      const i = s[ta]
      i && (n += ';' + i), (s.cssText = n), (o = na.test(n))
    }
  } else t && e.removeAttribute('style')
  Ir in e && ((e[Ir] = o ? s.display : ''), e[ea] && (s.display = 'none'))
}
const Mr = /\s*!important$/
function Rn(e, t, n) {
  if (D(n)) n.forEach((s) => Rn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = ra(e, t)
    Mr.test(n) ? e.setProperty(Lt(s), n.replace(Mr, ''), 'important') : (e[s] = n)
  }
}
const jr = ['Webkit', 'Moz', 'ms'],
  rs = {}
function ra(e, t) {
  const n = rs[t]
  if (n) return n
  let s = Ve(t)
  if (s !== 'filter' && s in e) return (rs[t] = s)
  s = jn(s)
  for (let r = 0; r < jr.length; r++) {
    const o = jr[r] + s
    if (o in e) return (rs[t] = o)
  }
  return t
}
const kr = 'http://www.w3.org/1999/xlink'
function oa(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(kr, t.slice(6, t.length)) : e.setAttributeNS(kr, t, n)
  else {
    const o = fl(t)
    n == null || (o && !Ro(n)) ? e.removeAttribute(t) : e.setAttribute(t, o ? '' : n)
  }
}
function ia(e, t, n, s, r, o, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && i(s, r, o), (e[t] = n ?? '')
    return
  }
  const l = e.tagName
  if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
    const f = l === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      a = n ?? ''
    ;(f !== a || !('_value' in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let c = !1
  if (n === '' || n == null) {
    const f = typeof e[t]
    f === 'boolean'
      ? (n = Ro(n))
      : n == null && f === 'string'
        ? ((n = ''), (c = !0))
        : f === 'number' && ((n = 0), (c = !0))
  }
  try {
    e[t] = n
  } catch {}
  c && e.removeAttribute(t)
}
function la(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function ca(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Dr = Symbol('_vei')
function aa(e, t, n, s, r = null) {
  const o = e[Dr] || (e[Dr] = {}),
    i = o[t]
  if (s && i) i.value = s
  else {
    const [l, c] = ua(t)
    if (s) {
      const f = (o[t] = ha(s, r))
      la(e, l, f, c)
    } else i && (ca(e, l, i, c), (o[t] = void 0))
  }
}
const Br = /(?:Once|Passive|Capture)$/
function ua(e) {
  let t
  if (Br.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Br)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Lt(e.slice(2)), t]
}
let os = 0
const fa = Promise.resolve(),
  da = () => os || (fa.then(() => (os = 0)), (os = Date.now()))
function ha(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    $e(pa(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = da()), n
}
function pa(e, t) {
  if (D(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const Hr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ma = (e, t, n, s, r, o, i, l, c) => {
    const f = r === 'svg'
    t === 'class'
      ? Zc(e, s, f)
      : t === 'style'
        ? sa(e, n, s)
        : Ln(t)
          ? Ls(t) || aa(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : ga(e, t, s, f)
              )
            ? ia(e, t, s, o, i, l, c)
            : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s),
              oa(e, t, s, f))
  }
function ga(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Hr(t) && H(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
  }
  return Hr(t) && ie(n) ? !1 : t in e
}
const _a = fe({ patchProp: ma }, Xc)
let Ur
function ya() {
  return Ur || (Ur = Cc(_a))
}
const ba = (...e) => {
  const t = ya().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = Ea(s)
      if (!r) return
      const o = t._component
      !H(o) && !o.render && !o.template && (o.template = r.innerHTML), (r.innerHTML = '')
      const i = n(r, !1, va(r))
      return (
        r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), i
      )
    }),
    t
  )
}
function va(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function Ea(e) {
  return ie(e) ? document.querySelector(e) : e
}
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const St = typeof document < 'u'
function wa(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const Q = Object.assign
function is(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Le(r) ? r.map(e) : e(r)
  }
  return n
}
const Wt = () => {},
  Le = Array.isArray,
  Ei = /#/g,
  xa = /&/g,
  Ra = /\//g,
  Sa = /=/g,
  Oa = /\?/g,
  wi = /\+/g,
  Pa = /%5B/g,
  Aa = /%5D/g,
  xi = /%5E/g,
  Ca = /%60/g,
  Ri = /%7B/g,
  Ta = /%7C/g,
  Si = /%7D/g,
  Na = /%20/g
function Ys(e) {
  return encodeURI('' + e)
    .replace(Ta, '|')
    .replace(Pa, '[')
    .replace(Aa, ']')
}
function $a(e) {
  return Ys(e).replace(Ri, '{').replace(Si, '}').replace(xi, '^')
}
function Ss(e) {
  return Ys(e)
    .replace(wi, '%2B')
    .replace(Na, '+')
    .replace(Ei, '%23')
    .replace(xa, '%26')
    .replace(Ca, '`')
    .replace(Ri, '{')
    .replace(Si, '}')
    .replace(xi, '^')
}
function Fa(e) {
  return Ss(e).replace(Sa, '%3D')
}
function La(e) {
  return Ys(e).replace(Ei, '%23').replace(Oa, '%3F')
}
function Ia(e) {
  return e == null ? '' : La(e).replace(Ra, '%2F')
}
function nn(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Ma = /\/$/,
  ja = (e) => e.replace(Ma, '')
function ls(e, t, n = '/') {
  let s,
    r = {},
    o = '',
    i = ''
  const l = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 && ((s = t.slice(0, c)), (o = t.slice(c + 1, l > -1 ? l : t.length)), (r = e(o))),
    l > -1 && ((s = s || t.slice(0, l)), (i = t.slice(l, t.length))),
    (s = Ha(s ?? t, n)),
    { fullPath: s + (o && '?') + o + i, path: s, query: r, hash: nn(i) }
  )
}
function ka(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Vr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Da(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Nt(t.matched[s], n.matched[r]) &&
    Oi(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Nt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Oi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Ba(e[n], t[n])) return !1
  return !0
}
function Ba(e, t) {
  return Le(e) ? qr(e, t) : Le(t) ? qr(t, e) : e === t
}
function qr(e, t) {
  return Le(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function Ha(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let o = n.length - 1,
    i,
    l
  for (i = 0; i < s.length; i++)
    if (((l = s[i]), l !== '.'))
      if (l === '..') o > 1 && o--
      else break
  return n.slice(0, o).join('/') + '/' + s.slice(i).join('/')
}
var sn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(sn || (sn = {}))
var Gt
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Gt || (Gt = {}))
function Ua(e) {
  if (!e)
    if (St) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), ja(e)
}
const Va = /^[^#]+#/
function qa(e, t) {
  return e.replace(Va, '#') + t
}
function za(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  }
}
const Kn = () => ({ left: window.scrollX, top: window.scrollY })
function Ka(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = za(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function zr(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Os = new Map()
function Wa(e, t) {
  Os.set(e, t)
}
function Ga(e) {
  const t = Os.get(e)
  return Os.delete(e), t
}
let Ja = () => location.protocol + '//' + location.host
function Pi(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let l = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = r.slice(l)
    return c[0] !== '/' && (c = '/' + c), Vr(c, '')
  }
  return Vr(n, e) + s + r
}
function Qa(e, t, n, s) {
  let r = [],
    o = [],
    i = null
  const l = ({ state: p }) => {
    const g = Pi(e, location),
      b = n.value,
      w = t.value
    let I = 0
    if (p) {
      if (((n.value = g), (t.value = p), i && i === b)) {
        i = null
        return
      }
      I = w ? p.position - w.position : 0
    } else s(g)
    r.forEach((C) => {
      C(n.value, b, {
        delta: I,
        type: sn.pop,
        direction: I ? (I > 0 ? Gt.forward : Gt.back) : Gt.unknown
      })
    })
  }
  function c() {
    i = n.value
  }
  function f(p) {
    r.push(p)
    const g = () => {
      const b = r.indexOf(p)
      b > -1 && r.splice(b, 1)
    }
    return o.push(g), g
  }
  function a() {
    const { history: p } = window
    p.state && p.replaceState(Q({}, p.state, { scroll: Kn() }), '')
  }
  function d() {
    for (const p of o) p()
    ;(o = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', a)
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', a, { passive: !0 }),
    { pauseListeners: c, listen: f, destroy: d }
  )
}
function Kr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Kn() : null
  }
}
function Xa(e) {
  const { history: t, location: n } = window,
    s = { value: Pi(e, n) },
    r = { value: t.state }
  r.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function o(c, f, a) {
    const d = e.indexOf('#'),
      p = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + c : Ja() + e + c
    try {
      t[a ? 'replaceState' : 'pushState'](f, '', p), (r.value = f)
    } catch (g) {
      console.error(g), n[a ? 'replace' : 'assign'](p)
    }
  }
  function i(c, f) {
    const a = Q({}, t.state, Kr(r.value.back, c, r.value.forward, !0), f, {
      position: r.value.position
    })
    o(c, a, !0), (s.value = c)
  }
  function l(c, f) {
    const a = Q({}, r.value, t.state, { forward: c, scroll: Kn() })
    o(a.current, a, !0)
    const d = Q({}, Kr(s.value, c, null), { position: a.position + 1 }, f)
    o(c, d, !1), (s.value = c)
  }
  return { location: s, state: r, push: l, replace: i }
}
function Ya(e) {
  e = Ua(e)
  const t = Xa(e),
    n = Qa(e, t.state, t.location, t.replace)
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o)
  }
  const r = Q({ location: '', base: e, go: s, createHref: qa.bind(null, e) }, t, n)
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  )
}
function Za(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Ai(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const et = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  Ci = Symbol('')
var Wr
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Wr || (Wr = {}))
function $t(e, t) {
  return Q(new Error(), { type: e, [Ci]: !0 }, t)
}
function Ke(e, t) {
  return e instanceof Error && Ci in e && (t == null || !!(e.type & t))
}
const Gr = '[^/]+?',
  eu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  tu = /[.+*?^${}()[\]/\\]/g
function nu(e, t) {
  const n = Q({}, eu, t),
    s = []
  let r = n.start ? '^' : ''
  const o = []
  for (const f of e) {
    const a = f.length ? [] : [90]
    n.strict && !f.length && (r += '/')
    for (let d = 0; d < f.length; d++) {
      const p = f[d]
      let g = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0) d || (r += '/'), (r += p.value.replace(tu, '\\$&')), (g += 40)
      else if (p.type === 1) {
        const { value: b, repeatable: w, optional: I, regexp: C } = p
        o.push({ name: b, repeatable: w, optional: I })
        const F = C || Gr
        if (F !== Gr) {
          g += 10
          try {
            new RegExp(`(${F})`)
          } catch (K) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${F}): ` + K.message)
          }
        }
        let k = w ? `((?:${F})(?:/(?:${F}))*)` : `(${F})`
        d || (k = I && f.length < 2 ? `(?:/${k})` : '/' + k),
          I && (k += '?'),
          (r += k),
          (g += 20),
          I && (g += -8),
          w && (g += -20),
          F === '.*' && (g += -50)
      }
      a.push(g)
    }
    s.push(a)
  }
  if (n.strict && n.end) {
    const f = s.length - 1
    s[f][s[f].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
  const i = new RegExp(r, n.sensitive ? '' : 'i')
  function l(f) {
    const a = f.match(i),
      d = {}
    if (!a) return null
    for (let p = 1; p < a.length; p++) {
      const g = a[p] || '',
        b = o[p - 1]
      d[b.name] = g && b.repeatable ? g.split('/') : g
    }
    return d
  }
  function c(f) {
    let a = '',
      d = !1
    for (const p of e) {
      ;(!d || !a.endsWith('/')) && (a += '/'), (d = !1)
      for (const g of p)
        if (g.type === 0) a += g.value
        else if (g.type === 1) {
          const { value: b, repeatable: w, optional: I } = g,
            C = b in f ? f[b] : ''
          if (Le(C) && !w)
            throw new Error(
              `Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`
            )
          const F = Le(C) ? C.join('/') : C
          if (!F)
            if (I) p.length < 2 && (a.endsWith('/') ? (a = a.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${b}"`)
          a += F
        }
    }
    return a || '/'
  }
  return { re: i, score: s, keys: o, parse: l, stringify: c }
}
function su(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function ru(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const o = su(s[n], r[n])
    if (o) return o
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (Jr(s)) return 1
    if (Jr(r)) return -1
  }
  return r.length - s.length
}
function Jr(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const ou = { type: 0, value: '' },
  iu = /[a-zA-Z0-9_]/
function lu(e) {
  if (!e) return [[]]
  if (e === '/') return [[ou]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(g) {
    throw new Error(`ERR (${n})/"${f}": ${g}`)
  }
  let n = 0,
    s = n
  const r = []
  let o
  function i() {
    o && r.push(o), (o = [])
  }
  let l = 0,
    c,
    f = '',
    a = ''
  function d() {
    f &&
      (n === 0
        ? o.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (c === '*' || c === '+') &&
              t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: f,
              regexp: a,
              repeatable: c === '*' || c === '+',
              optional: c === '*' || c === '?'
            }))
          : t('Invalid state to consume buffer'),
      (f = ''))
  }
  function p() {
    f += c
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        c === '/' ? (f && d(), i()) : c === ':' ? (d(), (n = 1)) : p()
        break
      case 4:
        p(), (n = s)
        break
      case 1:
        c === '('
          ? (n = 2)
          : iu.test(c)
            ? p()
            : (d(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--)
        break
      case 2:
        c === ')' ? (a[a.length - 1] == '\\' ? (a = a.slice(0, -1) + c) : (n = 3)) : (a += c)
        break
      case 3:
        d(), (n = 0), c !== '*' && c !== '?' && c !== '+' && l--, (a = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), d(), i(), r
}
function cu(e, t, n) {
  const s = nu(lu(e.path), n),
    r = Q(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function au(e, t) {
  const n = [],
    s = new Map()
  t = Yr({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(a) {
    return s.get(a)
  }
  function o(a, d, p) {
    const g = !p,
      b = uu(a)
    b.aliasOf = p && p.record
    const w = Yr(t, a),
      I = [b]
    if ('alias' in a) {
      const k = typeof a.alias == 'string' ? [a.alias] : a.alias
      for (const K of k)
        I.push(
          Q({}, b, {
            components: p ? p.record.components : b.components,
            path: K,
            aliasOf: p ? p.record : b
          })
        )
    }
    let C, F
    for (const k of I) {
      const { path: K } = k
      if (d && K[0] !== '/') {
        const oe = d.record.path,
          U = oe[oe.length - 1] === '/' ? '' : '/'
        k.path = d.record.path + (K && U + K)
      }
      if (
        ((C = cu(k, d, w)),
        p
          ? p.alias.push(C)
          : ((F = F || C), F !== C && F.alias.push(C), g && a.name && !Xr(C) && i(a.name)),
        b.children)
      ) {
        const oe = b.children
        for (let U = 0; U < oe.length; U++) o(oe[U], C, p && p.children[U])
      }
      ;(p = p || C),
        ((C.record.components && Object.keys(C.record.components).length) ||
          C.record.name ||
          C.record.redirect) &&
          c(C)
    }
    return F
      ? () => {
          i(F)
        }
      : Wt
  }
  function i(a) {
    if (Ai(a)) {
      const d = s.get(a)
      d && (s.delete(a), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i))
    } else {
      const d = n.indexOf(a)
      d > -1 &&
        (n.splice(d, 1),
        a.record.name && s.delete(a.record.name),
        a.children.forEach(i),
        a.alias.forEach(i))
    }
  }
  function l() {
    return n
  }
  function c(a) {
    let d = 0
    for (
      ;
      d < n.length && ru(a, n[d]) >= 0 && (a.record.path !== n[d].record.path || !Ti(a, n[d]));

    )
      d++
    n.splice(d, 0, a), a.record.name && !Xr(a) && s.set(a.record.name, a)
  }
  function f(a, d) {
    let p,
      g = {},
      b,
      w
    if ('name' in a && a.name) {
      if (((p = s.get(a.name)), !p)) throw $t(1, { location: a })
      ;(w = p.record.name),
        (g = Q(
          Qr(
            d.params,
            p.keys
              .filter((F) => !F.optional)
              .concat(p.parent ? p.parent.keys.filter((F) => F.optional) : [])
              .map((F) => F.name)
          ),
          a.params &&
            Qr(
              a.params,
              p.keys.map((F) => F.name)
            )
        )),
        (b = p.stringify(g))
    } else if (a.path != null)
      (b = a.path), (p = n.find((F) => F.re.test(b))), p && ((g = p.parse(b)), (w = p.record.name))
    else {
      if (((p = d.name ? s.get(d.name) : n.find((F) => F.re.test(d.path))), !p))
        throw $t(1, { location: a, currentLocation: d })
      ;(w = p.record.name), (g = Q({}, d.params, a.params)), (b = p.stringify(g))
    }
    const I = []
    let C = p
    for (; C; ) I.unshift(C.record), (C = C.parent)
    return { name: w, path: b, params: g, matched: I, meta: du(I) }
  }
  return (
    e.forEach((a) => o(a)),
    { addRoute: o, resolve: f, removeRoute: i, getRoutes: l, getRecordMatcher: r }
  )
}
function Qr(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function uu(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: fu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function fu(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function Xr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function du(e) {
  return e.reduce((t, n) => Q(t, n.meta), {})
}
function Yr(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Ti(e, t) {
  return t.children.some((n) => n === e || Ti(e, n))
}
function hu(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(wi, ' '),
      i = o.indexOf('='),
      l = nn(i < 0 ? o : o.slice(0, i)),
      c = i < 0 ? null : nn(o.slice(i + 1))
    if (l in t) {
      let f = t[l]
      Le(f) || (f = t[l] = [f]), f.push(c)
    } else t[l] = c
  }
  return t
}
function Zr(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = Fa(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Le(s) ? s.map((o) => o && Ss(o)) : [s && Ss(s)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function pu(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Le(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s)
  }
  return t
}
const mu = Symbol(''),
  eo = Symbol(''),
  Zs = Symbol(''),
  Ni = Symbol(''),
  Ps = Symbol('')
function Dt() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function ot(e, t, n, s, r, o = (i) => i()) {
  const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((l, c) => {
      const f = (p) => {
          p === !1
            ? c($t(4, { from: n, to: t }))
            : p instanceof Error
              ? c(p)
              : Za(p)
                ? c($t(2, { from: t, to: p }))
                : (i && s.enterCallbacks[r] === i && typeof p == 'function' && i.push(p), l())
        },
        a = o(() => e.call(s && s.instances[r], t, n, f))
      let d = Promise.resolve(a)
      e.length < 3 && (d = d.then(f)), d.catch((p) => c(p))
    })
}
function cs(e, t, n, s, r = (o) => o()) {
  const o = []
  for (const i of e)
    for (const l in i.components) {
      let c = i.components[l]
      if (!(t !== 'beforeRouteEnter' && !i.instances[l]))
        if (gu(c)) {
          const a = (c.__vccOpts || c)[t]
          a && o.push(ot(a, n, s, i, l, r))
        } else {
          let f = c()
          o.push(() =>
            f.then((a) => {
              if (!a)
                return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`))
              const d = wa(a) ? a.default : a
              i.components[l] = d
              const g = (d.__vccOpts || d)[t]
              return g && ot(g, n, s, i, l, r)()
            })
          )
        }
    }
  return o
}
function gu(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function to(e) {
  const t = Ge(Zs),
    n = Ge(Ni),
    s = Ce(() => {
      const c = At(e.to)
      return t.resolve(c)
    }),
    r = Ce(() => {
      const { matched: c } = s.value,
        { length: f } = c,
        a = c[f - 1],
        d = n.matched
      if (!a || !d.length) return -1
      const p = d.findIndex(Nt.bind(null, a))
      if (p > -1) return p
      const g = no(c[f - 2])
      return f > 1 && no(a) === g && d[d.length - 1].path !== g
        ? d.findIndex(Nt.bind(null, c[f - 2]))
        : p
    }),
    o = Ce(() => r.value > -1 && vu(n.params, s.value.params)),
    i = Ce(() => r.value > -1 && r.value === n.matched.length - 1 && Oi(n.params, s.value.params))
  function l(c = {}) {
    return bu(c) ? t[At(e.replace) ? 'replace' : 'push'](At(e.to)).catch(Wt) : Promise.resolve()
  }
  return { route: s, href: Ce(() => s.value.href), isActive: o, isExactActive: i, navigate: l }
}
const _u = ti({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: to,
    setup(e, { slots: t }) {
      const n = Dn(to(e)),
        { options: s } = Ge(Zs),
        r = Ce(() => ({
          [so(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [so(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : vi(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
              },
              o
            )
      }
    }
  }),
  yu = _u
function bu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function vu(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!Le(r) || r.length !== s.length || s.some((o, i) => o !== r[i])) return !1
  }
  return !0
}
function no(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const so = (e, t, n) => e ?? t ?? n,
  Eu = ti({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Ge(Ps),
        r = Ce(() => e.route || s.value),
        o = Ge(eo, 0),
        i = Ce(() => {
          let f = At(o)
          const { matched: a } = r.value
          let d
          for (; (d = a[f]) && !d.components; ) f++
          return f
        }),
        l = Ce(() => r.value.matched[i.value])
      En(
        eo,
        Ce(() => i.value + 1)
      ),
        En(mu, l),
        En(Ps, r)
      const c = Ml()
      return (
        bn(
          () => [c.value, l.value, e.name],
          ([f, a, d], [p, g, b]) => {
            a &&
              ((a.instances[d] = f),
              g &&
                g !== a &&
                f &&
                f === p &&
                (a.leaveGuards.size || (a.leaveGuards = g.leaveGuards),
                a.updateGuards.size || (a.updateGuards = g.updateGuards))),
              f && a && (!g || !Nt(a, g) || !p) && (a.enterCallbacks[d] || []).forEach((w) => w(f))
          },
          { flush: 'post' }
        ),
        () => {
          const f = r.value,
            a = e.name,
            d = l.value,
            p = d && d.components[a]
          if (!p) return ro(n.default, { Component: p, route: f })
          const g = d.props[a],
            b = g ? (g === !0 ? f.params : typeof g == 'function' ? g(f) : g) : null,
            I = vi(
              p,
              Q({}, b, t, {
                onVnodeUnmounted: (C) => {
                  C.component.isUnmounted && (d.instances[a] = null)
                },
                ref: c
              })
            )
          return ro(n.default, { Component: I, route: f }) || I
        }
      )
    }
  })
function ro(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const wu = Eu
function xu(e) {
  const t = au(e.routes, e),
    n = e.parseQuery || hu,
    s = e.stringifyQuery || Zr,
    r = e.history,
    o = Dt(),
    i = Dt(),
    l = Dt(),
    c = jl(et)
  let f = et
  St && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const a = is.bind(null, (v) => '' + v),
    d = is.bind(null, Ia),
    p = is.bind(null, nn)
  function g(v, N) {
    let P, L
    return Ai(v) ? ((P = t.getRecordMatcher(v)), (L = N)) : (L = v), t.addRoute(L, P)
  }
  function b(v) {
    const N = t.getRecordMatcher(v)
    N && t.removeRoute(N)
  }
  function w() {
    return t.getRoutes().map((v) => v.record)
  }
  function I(v) {
    return !!t.getRecordMatcher(v)
  }
  function C(v, N) {
    if (((N = Q({}, N || c.value)), typeof v == 'string')) {
      const h = ls(n, v, N.path),
        m = t.resolve({ path: h.path }, N),
        E = r.createHref(h.fullPath)
      return Q(h, m, { params: p(m.params), hash: nn(h.hash), redirectedFrom: void 0, href: E })
    }
    let P
    if (v.path != null) P = Q({}, v, { path: ls(n, v.path, N.path).path })
    else {
      const h = Q({}, v.params)
      for (const m in h) h[m] == null && delete h[m]
      ;(P = Q({}, v, { params: d(h) })), (N.params = d(N.params))
    }
    const L = t.resolve(P, N),
      G = v.hash || ''
    L.params = a(p(L.params))
    const ee = ka(s, Q({}, v, { hash: $a(G), path: L.path })),
      u = r.createHref(ee)
    return Q({ fullPath: ee, hash: G, query: s === Zr ? pu(v.query) : v.query || {} }, L, {
      redirectedFrom: void 0,
      href: u
    })
  }
  function F(v) {
    return typeof v == 'string' ? ls(n, v, c.value.path) : Q({}, v)
  }
  function k(v, N) {
    if (f !== v) return $t(8, { from: N, to: v })
  }
  function K(v) {
    return me(v)
  }
  function oe(v) {
    return K(Q(F(v), { replace: !0 }))
  }
  function U(v) {
    const N = v.matched[v.matched.length - 1]
    if (N && N.redirect) {
      const { redirect: P } = N
      let L = typeof P == 'function' ? P(v) : P
      return (
        typeof L == 'string' &&
          ((L = L.includes('?') || L.includes('#') ? (L = F(L)) : { path: L }), (L.params = {})),
        Q({ query: v.query, hash: v.hash, params: L.path != null ? {} : v.params }, L)
      )
    }
  }
  function me(v, N) {
    const P = (f = C(v)),
      L = c.value,
      G = v.state,
      ee = v.force,
      u = v.replace === !0,
      h = U(P)
    if (h)
      return me(
        Q(F(h), { state: typeof h == 'object' ? Q({}, G, h.state) : G, force: ee, replace: u }),
        N || P
      )
    const m = P
    m.redirectedFrom = N
    let E
    return (
      !ee && Da(s, L, P) && ((E = $t(16, { to: m, from: L })), je(L, L, !0, !1)),
      (E ? Promise.resolve(E) : Ie(m, L))
        .catch((_) => (Ke(_) ? (Ke(_, 2) ? _ : Ye(_)) : W(_, m, L)))
        .then((_) => {
          if (_) {
            if (Ke(_, 2))
              return me(
                Q({ replace: u }, F(_.to), {
                  state: typeof _.to == 'object' ? Q({}, G, _.to.state) : G,
                  force: ee
                }),
                N || m
              )
          } else _ = ht(m, L, !0, u, G)
          return Xe(m, L, _), _
        })
    )
  }
  function Re(v, N) {
    const P = k(v, N)
    return P ? Promise.reject(P) : Promise.resolve()
  }
  function dt(v) {
    const N = xt.values().next().value
    return N && typeof N.runWithContext == 'function' ? N.runWithContext(v) : v()
  }
  function Ie(v, N) {
    let P
    const [L, G, ee] = Ru(v, N)
    P = cs(L.reverse(), 'beforeRouteLeave', v, N)
    for (const h of L)
      h.leaveGuards.forEach((m) => {
        P.push(ot(m, v, N))
      })
    const u = Re.bind(null, v, N)
    return (
      P.push(u),
      de(P)
        .then(() => {
          P = []
          for (const h of o.list()) P.push(ot(h, v, N))
          return P.push(u), de(P)
        })
        .then(() => {
          P = cs(G, 'beforeRouteUpdate', v, N)
          for (const h of G)
            h.updateGuards.forEach((m) => {
              P.push(ot(m, v, N))
            })
          return P.push(u), de(P)
        })
        .then(() => {
          P = []
          for (const h of ee)
            if (h.beforeEnter)
              if (Le(h.beforeEnter)) for (const m of h.beforeEnter) P.push(ot(m, v, N))
              else P.push(ot(h.beforeEnter, v, N))
          return P.push(u), de(P)
        })
        .then(
          () => (
            v.matched.forEach((h) => (h.enterCallbacks = {})),
            (P = cs(ee, 'beforeRouteEnter', v, N, dt)),
            P.push(u),
            de(P)
          )
        )
        .then(() => {
          P = []
          for (const h of i.list()) P.push(ot(h, v, N))
          return P.push(u), de(P)
        })
        .catch((h) => (Ke(h, 8) ? h : Promise.reject(h)))
    )
  }
  function Xe(v, N, P) {
    l.list().forEach((L) => dt(() => L(v, N, P)))
  }
  function ht(v, N, P, L, G) {
    const ee = k(v, N)
    if (ee) return ee
    const u = N === et,
      h = St ? history.state : {}
    P &&
      (L || u
        ? r.replace(v.fullPath, Q({ scroll: u && h && h.scroll }, G))
        : r.push(v.fullPath, G)),
      (c.value = v),
      je(v, N, P, u),
      Ye()
  }
  let Me
  function Mt() {
    Me ||
      (Me = r.listen((v, N, P) => {
        if (!un.listening) return
        const L = C(v),
          G = U(L)
        if (G) {
          me(Q(G, { replace: !0 }), L).catch(Wt)
          return
        }
        f = L
        const ee = c.value
        St && Wa(zr(ee.fullPath, P.delta), Kn()),
          Ie(L, ee)
            .catch((u) =>
              Ke(u, 12)
                ? u
                : Ke(u, 2)
                  ? (me(u.to, L)
                      .then((h) => {
                        Ke(h, 20) && !P.delta && P.type === sn.pop && r.go(-1, !1)
                      })
                      .catch(Wt),
                    Promise.reject())
                  : (P.delta && r.go(-P.delta, !1), W(u, L, ee))
            )
            .then((u) => {
              ;(u = u || ht(L, ee, !1)),
                u &&
                  (P.delta && !Ke(u, 8)
                    ? r.go(-P.delta, !1)
                    : P.type === sn.pop && Ke(u, 20) && r.go(-1, !1)),
                Xe(L, ee, u)
            })
            .catch(Wt)
      }))
  }
  let Et = Dt(),
    le = Dt(),
    X
  function W(v, N, P) {
    Ye(v)
    const L = le.list()
    return L.length ? L.forEach((G) => G(v, N, P)) : console.error(v), Promise.reject(v)
  }
  function ze() {
    return X && c.value !== et
      ? Promise.resolve()
      : new Promise((v, N) => {
          Et.add([v, N])
        })
  }
  function Ye(v) {
    return X || ((X = !v), Mt(), Et.list().forEach(([N, P]) => (v ? P(v) : N())), Et.reset()), v
  }
  function je(v, N, P, L) {
    const { scrollBehavior: G } = e
    if (!St || !G) return Promise.resolve()
    const ee =
      (!P && Ga(zr(v.fullPath, 0))) || ((L || !P) && history.state && history.state.scroll) || null
    return zo()
      .then(() => G(v, N, ee))
      .then((u) => u && Ka(u))
      .catch((u) => W(u, v, N))
  }
  const ye = (v) => r.go(v)
  let wt
  const xt = new Set(),
    un = {
      currentRoute: c,
      listening: !0,
      addRoute: g,
      removeRoute: b,
      hasRoute: I,
      getRoutes: w,
      resolve: C,
      options: e,
      push: K,
      replace: oe,
      go: ye,
      back: () => ye(-1),
      forward: () => ye(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: le.add,
      isReady: ze,
      install(v) {
        const N = this
        v.component('RouterLink', yu),
          v.component('RouterView', wu),
          (v.config.globalProperties.$router = N),
          Object.defineProperty(v.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => At(c)
          }),
          St && !wt && c.value === et && ((wt = !0), K(r.location).catch((G) => {}))
        const P = {}
        for (const G in et) Object.defineProperty(P, G, { get: () => c.value[G], enumerable: !0 })
        v.provide(Zs, N), v.provide(Ni, jo(P)), v.provide(Ps, c)
        const L = v.unmount
        xt.add(v),
          (v.unmount = function () {
            xt.delete(v),
              xt.size < 1 &&
                ((f = et), Me && Me(), (Me = null), (c.value = et), (wt = !1), (X = !1)),
              L()
          })
      }
    }
  function de(v) {
    return v.reduce((N, P) => N.then(() => dt(P)), Promise.resolve())
  }
  return un
}
function Ru(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < o; i++) {
    const l = t.matched[i]
    l && (e.matched.find((f) => Nt(f, l)) ? s.push(l) : n.push(l))
    const c = e.matched[i]
    c && (t.matched.find((f) => Nt(f, c)) || r.push(c))
  }
  return [n, s, r]
}
const ft = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  Su = {}
function Ou(e, t, n, s, r, o) {
  const i = Fe('RouterView')
  return ae(), ue('div', null, [ne(i)])
}
const Pu = ft(Su, [['render', Ou]]),
  Au = 'modulepreload',
  Cu = function (e) {
    return '/' + e
  },
  oo = {},
  Tu = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      const o = document.getElementsByTagName('link'),
        i = document.querySelector('meta[property=csp-nonce]'),
        l = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      r = Promise.all(
        n.map((c) => {
          if (((c = Cu(c)), c in oo)) return
          oo[c] = !0
          const f = c.endsWith('.css'),
            a = f ? '[rel="stylesheet"]' : ''
          if (!!s)
            for (let g = o.length - 1; g >= 0; g--) {
              const b = o[g]
              if (b.href === c && (!f || b.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${c}"]${a}`)) return
          const p = document.createElement('link')
          if (
            ((p.rel = f ? 'stylesheet' : Au),
            f || ((p.as = 'script'), (p.crossOrigin = '')),
            (p.href = c),
            l && p.setAttribute('nonce', l),
            document.head.appendChild(p),
            f)
          )
            return new Promise((g, b) => {
              p.addEventListener('load', g),
                p.addEventListener('error', () => b(new Error(`Unable to preload CSS for ${c}`)))
            })
        })
      )
    }
    return r
      .then(() => t())
      .catch((o) => {
        const i = new Event('vite:preloadError', { cancelable: !0 })
        if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented)) throw o
      })
  }
function $i(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: Nu } = Object.prototype,
  { getPrototypeOf: er } = Object,
  Wn = ((e) => (t) => {
    const n = Nu.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  qe = (e) => ((e = e.toLowerCase()), (t) => Wn(t) === e),
  Gn = (e) => (t) => typeof t === e,
  { isArray: It } = Array,
  rn = Gn('undefined')
function $u(e) {
  return (
    e !== null &&
    !rn(e) &&
    e.constructor !== null &&
    !rn(e.constructor) &&
    Oe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const Fi = qe('ArrayBuffer')
function Fu(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Fi(e.buffer)),
    t
  )
}
const Lu = Gn('string'),
  Oe = Gn('function'),
  Li = Gn('number'),
  Jn = (e) => e !== null && typeof e == 'object',
  Iu = (e) => e === !0 || e === !1,
  Sn = (e) => {
    if (Wn(e) !== 'object') return !1
    const t = er(e)
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  Mu = qe('Date'),
  ju = qe('File'),
  ku = qe('Blob'),
  Du = qe('FileList'),
  Bu = (e) => Jn(e) && Oe(e.pipe),
  Hu = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Oe(e.append) &&
          ((t = Wn(e)) === 'formdata' ||
            (t === 'object' && Oe(e.toString) && e.toString() === '[object FormData]'))))
    )
  },
  Uu = qe('URLSearchParams'),
  Vu = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
function cn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let s, r
  if ((typeof e != 'object' && (e = [e]), It(e)))
    for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e)
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length
    let l
    for (s = 0; s < i; s++) (l = o[s]), t.call(null, e[l], l, e)
  }
}
function Ii(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let s = n.length,
    r
  for (; s-- > 0; ) if (((r = n[s]), t === r.toLowerCase())) return r
  return null
}
const Mi =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  ji = (e) => !rn(e) && e !== Mi
function As() {
  const { caseless: e } = (ji(this) && this) || {},
    t = {},
    n = (s, r) => {
      const o = (e && Ii(t, r)) || r
      Sn(t[o]) && Sn(s)
        ? (t[o] = As(t[o], s))
        : Sn(s)
          ? (t[o] = As({}, s))
          : It(s)
            ? (t[o] = s.slice())
            : (t[o] = s)
    }
  for (let s = 0, r = arguments.length; s < r; s++) arguments[s] && cn(arguments[s], n)
  return t
}
const qu = (e, t, n, { allOwnKeys: s } = {}) => (
    cn(
      t,
      (r, o) => {
        n && Oe(r) ? (e[o] = $i(r, n)) : (e[o] = r)
      },
      { allOwnKeys: s }
    ),
    e
  ),
  zu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ku = (e, t, n, s) => {
    ;(e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  Wu = (e, t, n, s) => {
    let r, o, i
    const l = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
        (i = r[o]), (!s || s(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0))
      e = n !== !1 && er(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  Gu = (e, t, n) => {
    ;(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length)
    const s = e.indexOf(t, n)
    return s !== -1 && s === n
  },
  Ju = (e) => {
    if (!e) return null
    if (It(e)) return e
    let t = e.length
    if (!Li(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  Qu = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && er(Uint8Array)),
  Xu = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e)
    let r
    for (; (r = s.next()) && !r.done; ) {
      const o = r.value
      t.call(e, o[0], o[1])
    }
  },
  Yu = (e, t) => {
    let n
    const s = []
    for (; (n = e.exec(t)) !== null; ) s.push(n)
    return s
  },
  Zu = qe('HTMLFormElement'),
  ef = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
      return s.toUpperCase() + r
    }),
  io = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  tf = qe('RegExp'),
  ki = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {}
    cn(n, (r, o) => {
      let i
      ;(i = t(r, o, e)) !== !1 && (s[o] = i || r)
    }),
      Object.defineProperties(e, s)
  },
  nf = (e) => {
    ki(e, (t, n) => {
      if (Oe(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
      const s = e[n]
      if (Oe(s)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  sf = (e, t) => {
    const n = {},
      s = (r) => {
        r.forEach((o) => {
          n[o] = !0
        })
      }
    return It(e) ? s(e) : s(String(e).split(t)), n
  },
  rf = () => {},
  of = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  as = 'abcdefghijklmnopqrstuvwxyz',
  lo = '0123456789',
  Di = { DIGIT: lo, ALPHA: as, ALPHA_DIGIT: as + as.toUpperCase() + lo },
  lf = (e = 16, t = Di.ALPHA_DIGIT) => {
    let n = ''
    const { length: s } = t
    for (; e--; ) n += t[(Math.random() * s) | 0]
    return n
  }
function cf(e) {
  return !!(e && Oe(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator])
}
const af = (e) => {
    const t = new Array(10),
      n = (s, r) => {
        if (Jn(s)) {
          if (t.indexOf(s) >= 0) return
          if (!('toJSON' in s)) {
            t[r] = s
            const o = It(s) ? [] : {}
            return (
              cn(s, (i, l) => {
                const c = n(i, r + 1)
                !rn(c) && (o[l] = c)
              }),
              (t[r] = void 0),
              o
            )
          }
        }
        return s
      }
    return n(e, 0)
  },
  uf = qe('AsyncFunction'),
  ff = (e) => e && (Jn(e) || Oe(e)) && Oe(e.then) && Oe(e.catch),
  y = {
    isArray: It,
    isArrayBuffer: Fi,
    isBuffer: $u,
    isFormData: Hu,
    isArrayBufferView: Fu,
    isString: Lu,
    isNumber: Li,
    isBoolean: Iu,
    isObject: Jn,
    isPlainObject: Sn,
    isUndefined: rn,
    isDate: Mu,
    isFile: ju,
    isBlob: ku,
    isRegExp: tf,
    isFunction: Oe,
    isStream: Bu,
    isURLSearchParams: Uu,
    isTypedArray: Qu,
    isFileList: Du,
    forEach: cn,
    merge: As,
    extend: qu,
    trim: Vu,
    stripBOM: zu,
    inherits: Ku,
    toFlatObject: Wu,
    kindOf: Wn,
    kindOfTest: qe,
    endsWith: Gu,
    toArray: Ju,
    forEachEntry: Xu,
    matchAll: Yu,
    isHTMLForm: Zu,
    hasOwnProperty: io,
    hasOwnProp: io,
    reduceDescriptors: ki,
    freezeMethods: nf,
    toObjectSet: sf,
    toCamelCase: ef,
    noop: rf,
    toFiniteNumber: of,
    findKey: Ii,
    global: Mi,
    isContextDefined: ji,
    ALPHABET: Di,
    generateString: lf,
    isSpecCompliantForm: cf,
    toJSONObject: af,
    isAsyncFn: uf,
    isThenable: ff
  }
function q(e, t, n, s, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    r && (this.response = r)
}
y.inherits(q, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    }
  }
})
const Bi = q.prototype,
  Hi = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach((e) => {
  Hi[e] = { value: e }
})
Object.defineProperties(q, Hi)
Object.defineProperty(Bi, 'isAxiosError', { value: !0 })
q.from = (e, t, n, s, r, o) => {
  const i = Object.create(Bi)
  return (
    y.toFlatObject(
      e,
      i,
      function (c) {
        return c !== Error.prototype
      },
      (l) => l !== 'isAxiosError'
    ),
    q.call(i, e.message, t, n, s, r),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  )
}
const df = null
function Cs(e) {
  return y.isPlainObject(e) || y.isArray(e)
}
function Ui(e) {
  return y.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function co(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (r, o) {
          return (r = Ui(r)), !n && o ? '[' + r + ']' : r
        })
        .join(n ? '.' : '')
    : t
}
function hf(e) {
  return y.isArray(e) && !e.some(Cs)
}
const pf = y.toFlatObject(y, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function Qn(e, t, n) {
  if (!y.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = y.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (w, I) {
      return !y.isUndefined(I[w])
    }))
  const s = n.metaTokens,
    r = n.visitor || a,
    o = n.dots,
    i = n.indexes,
    c = (n.Blob || (typeof Blob < 'u' && Blob)) && y.isSpecCompliantForm(t)
  if (!y.isFunction(r)) throw new TypeError('visitor must be a function')
  function f(b) {
    if (b === null) return ''
    if (y.isDate(b)) return b.toISOString()
    if (!c && y.isBlob(b)) throw new q('Blob is not supported. Use a Buffer instead.')
    return y.isArrayBuffer(b) || y.isTypedArray(b)
      ? c && typeof Blob == 'function'
        ? new Blob([b])
        : Buffer.from(b)
      : b
  }
  function a(b, w, I) {
    let C = b
    if (b && !I && typeof b == 'object') {
      if (y.endsWith(w, '{}')) (w = s ? w : w.slice(0, -2)), (b = JSON.stringify(b))
      else if (
        (y.isArray(b) && hf(b)) ||
        ((y.isFileList(b) || y.endsWith(w, '[]')) && (C = y.toArray(b)))
      )
        return (
          (w = Ui(w)),
          C.forEach(function (k, K) {
            !(y.isUndefined(k) || k === null) &&
              t.append(i === !0 ? co([w], K, o) : i === null ? w : w + '[]', f(k))
          }),
          !1
        )
    }
    return Cs(b) ? !0 : (t.append(co(I, w, o), f(b)), !1)
  }
  const d = [],
    p = Object.assign(pf, { defaultVisitor: a, convertValue: f, isVisitable: Cs })
  function g(b, w) {
    if (!y.isUndefined(b)) {
      if (d.indexOf(b) !== -1) throw Error('Circular reference detected in ' + w.join('.'))
      d.push(b),
        y.forEach(b, function (C, F) {
          ;(!(y.isUndefined(C) || C === null) &&
            r.call(t, C, y.isString(F) ? F.trim() : F, w, p)) === !0 && g(C, w ? w.concat(F) : [F])
        }),
        d.pop()
    }
  }
  if (!y.isObject(e)) throw new TypeError('data must be an object')
  return g(e), t
}
function ao(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s]
  })
}
function tr(e, t) {
  ;(this._pairs = []), e && Qn(e, this, t)
}
const Vi = tr.prototype
Vi.append = function (t, n) {
  this._pairs.push([t, n])
}
Vi.toString = function (t) {
  const n = t
    ? function (s) {
        return t.call(this, s, ao)
      }
    : ao
  return this._pairs
    .map(function (r) {
      return n(r[0]) + '=' + n(r[1])
    }, '')
    .join('&')
}
function mf(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function qi(e, t, n) {
  if (!t) return e
  const s = (n && n.encode) || mf,
    r = n && n.serialize
  let o
  if (
    (r ? (o = r(t, n)) : (o = y.isURLSearchParams(t) ? t.toString() : new tr(t, n).toString(s)), o)
  ) {
    const i = e.indexOf('#')
    i !== -1 && (e = e.slice(0, i)), (e += (e.indexOf('?') === -1 ? '?' : '&') + o)
  }
  return e
}
class uo {
  constructor() {
    this.handlers = []
  }
  use(t, n, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    y.forEach(this.handlers, function (s) {
      s !== null && t(s)
    })
  }
}
const zi = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  gf = typeof URLSearchParams < 'u' ? URLSearchParams : tr,
  _f = typeof FormData < 'u' ? FormData : null,
  yf = typeof Blob < 'u' ? Blob : null,
  bf = {
    isBrowser: !0,
    classes: { URLSearchParams: gf, FormData: _f, Blob: yf },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  },
  Ki = typeof window < 'u' && typeof document < 'u',
  vf = ((e) => Ki && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product
  ),
  Ef =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  wf = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ki,
        hasStandardBrowserEnv: vf,
        hasStandardBrowserWebWorkerEnv: Ef
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Ue = { ...wf, ...bf }
function xf(e, t) {
  return Qn(
    e,
    new Ue.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, r, o) {
          return Ue.isNode && y.isBuffer(n)
            ? (this.append(s, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments)
        }
      },
      t
    )
  )
}
function Rf(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function Sf(e) {
  const t = {},
    n = Object.keys(e)
  let s
  const r = n.length
  let o
  for (s = 0; s < r; s++) (o = n[s]), (t[o] = e[o])
  return t
}
function Wi(e) {
  function t(n, s, r, o) {
    let i = n[o++]
    if (i === '__proto__') return !0
    const l = Number.isFinite(+i),
      c = o >= n.length
    return (
      (i = !i && y.isArray(r) ? r.length : i),
      c
        ? (y.hasOwnProp(r, i) ? (r[i] = [r[i], s]) : (r[i] = s), !l)
        : ((!r[i] || !y.isObject(r[i])) && (r[i] = []),
          t(n, s, r[i], o) && y.isArray(r[i]) && (r[i] = Sf(r[i])),
          !l)
    )
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {}
    return (
      y.forEachEntry(e, (s, r) => {
        t(Rf(s), r, n, 0)
      }),
      n
    )
  }
  return null
}
function Of(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e)
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s
    }
  return (n || JSON.stringify)(e)
}
const nr = {
  transitional: zi,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const s = n.getContentType() || '',
        r = s.indexOf('application/json') > -1,
        o = y.isObject(t)
      if ((o && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)))
        return r ? JSON.stringify(Wi(t)) : t
      if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t))
        return t
      if (y.isArrayBufferView(t)) return t.buffer
      if (y.isURLSearchParams(t))
        return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
      let l
      if (o) {
        if (s.indexOf('application/x-www-form-urlencoded') > -1)
          return xf(t, this.formSerializer).toString()
        if ((l = y.isFileList(t)) || s.indexOf('multipart/form-data') > -1) {
          const c = this.env && this.env.FormData
          return Qn(l ? { 'files[]': t } : t, c && new c(), this.formSerializer)
        }
      }
      return o || r ? (n.setContentType('application/json', !1), Of(t)) : t
    }
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || nr.transitional,
        s = n && n.forcedJSONParsing,
        r = this.responseType === 'json'
      if (t && y.isString(t) && ((s && !this.responseType) || r)) {
        const i = !(n && n.silentJSONParsing) && r
        try {
          return JSON.parse(t)
        } catch (l) {
          if (i)
            throw l.name === 'SyntaxError'
              ? q.from(l, q.ERR_BAD_RESPONSE, this, null, this.response)
              : l
        }
      }
      return t
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ue.classes.FormData, Blob: Ue.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } }
}
y.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  nr.headers[e] = {}
})
const sr = nr,
  Pf = y.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ]),
  Af = (e) => {
    const t = {}
    let n, s, r
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            ;(r = i.indexOf(':')),
              (n = i.substring(0, r).trim().toLowerCase()),
              (s = i.substring(r + 1).trim()),
              !(!n || (t[n] && Pf[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(s)
                    : (t[n] = [s])
                  : (t[n] = t[n] ? t[n] + ', ' + s : s))
          }),
      t
    )
  },
  fo = Symbol('internals')
function Bt(e) {
  return e && String(e).trim().toLowerCase()
}
function On(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(On) : String(e)
}
function Cf(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let s
  for (; (s = n.exec(e)); ) t[s[1]] = s[2]
  return t
}
const Tf = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function us(e, t, n, s, r) {
  if (y.isFunction(s)) return s.call(this, t, n)
  if ((r && (t = n), !!y.isString(t))) {
    if (y.isString(s)) return t.indexOf(s) !== -1
    if (y.isRegExp(s)) return s.test(t)
  }
}
function Nf(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s)
}
function $f(e, t) {
  const n = y.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function (r, o, i) {
        return this[s].call(this, t, r, o, i)
      },
      configurable: !0
    })
  })
}
class Xn {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, s) {
    const r = this
    function o(l, c, f) {
      const a = Bt(c)
      if (!a) throw new Error('header name must be a non-empty string')
      const d = y.findKey(r, a)
      ;(!d || r[d] === void 0 || f === !0 || (f === void 0 && r[d] !== !1)) && (r[d || c] = On(l))
    }
    const i = (l, c) => y.forEach(l, (f, a) => o(f, a, c))
    return (
      y.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : y.isString(t) && (t = t.trim()) && !Tf(t)
          ? i(Af(t), n)
          : t != null && o(n, t, s),
      this
    )
  }
  get(t, n) {
    if (((t = Bt(t)), t)) {
      const s = y.findKey(this, t)
      if (s) {
        const r = this[s]
        if (!n) return r
        if (n === !0) return Cf(r)
        if (y.isFunction(n)) return n.call(this, r, s)
        if (y.isRegExp(n)) return n.exec(r)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = Bt(t)), t)) {
      const s = y.findKey(this, t)
      return !!(s && this[s] !== void 0 && (!n || us(this, this[s], s, n)))
    }
    return !1
  }
  delete(t, n) {
    const s = this
    let r = !1
    function o(i) {
      if (((i = Bt(i)), i)) {
        const l = y.findKey(s, i)
        l && (!n || us(s, s[l], l, n)) && (delete s[l], (r = !0))
      }
    }
    return y.isArray(t) ? t.forEach(o) : o(t), r
  }
  clear(t) {
    const n = Object.keys(this)
    let s = n.length,
      r = !1
    for (; s--; ) {
      const o = n[s]
      ;(!t || us(this, this[o], o, t, !0)) && (delete this[o], (r = !0))
    }
    return r
  }
  normalize(t) {
    const n = this,
      s = {}
    return (
      y.forEach(this, (r, o) => {
        const i = y.findKey(s, o)
        if (i) {
          ;(n[i] = On(r)), delete n[o]
          return
        }
        const l = t ? Nf(o) : String(o).trim()
        l !== o && delete n[o], (n[l] = On(r)), (s[l] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      y.forEach(this, (s, r) => {
        s != null && s !== !1 && (n[r] = t && y.isArray(s) ? s.join(', ') : s)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const s = new this(t)
    return n.forEach((r) => s.set(r)), s
  }
  static accessor(t) {
    const s = (this[fo] = this[fo] = { accessors: {} }).accessors,
      r = this.prototype
    function o(i) {
      const l = Bt(i)
      s[l] || ($f(r, i), (s[l] = !0))
    }
    return y.isArray(t) ? t.forEach(o) : o(t), this
  }
}
Xn.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization'
])
y.reduceDescriptors(Xn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(s) {
      this[n] = s
    }
  }
})
y.freezeMethods(Xn)
const Je = Xn
function fs(e, t) {
  const n = this || sr,
    s = t || n,
    r = Je.from(s.headers)
  let o = s.data
  return (
    y.forEach(e, function (l) {
      o = l.call(n, o, r.normalize(), t ? t.status : void 0)
    }),
    r.normalize(),
    o
  )
}
function Gi(e) {
  return !!(e && e.__CANCEL__)
}
function an(e, t, n) {
  q.call(this, e ?? 'canceled', q.ERR_CANCELED, t, n), (this.name = 'CanceledError')
}
y.inherits(an, q, { __CANCEL__: !0 })
function Ff(e, t, n) {
  const s = n.config.validateStatus
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
        new q(
          'Request failed with status code ' + n.status,
          [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      )
}
const Lf = Ue.hasStandardBrowserEnv
  ? {
      write(e, t, n, s, r, o) {
        const i = [e + '=' + encodeURIComponent(t)]
        y.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
          y.isString(s) && i.push('path=' + s),
          y.isString(r) && i.push('domain=' + r),
          o === !0 && i.push('secure'),
          (document.cookie = i.join('; '))
      },
      read(e) {
        const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
        return t ? decodeURIComponent(t[3]) : null
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5)
      }
    }
  : {
      write() {},
      read() {
        return null
      },
      remove() {}
    }
function If(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Mf(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function Ji(e, t) {
  return e && !If(t) ? Mf(e, t) : t
}
const jf = Ue.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let s
      function r(o) {
        let i = o
        return (
          t && (n.setAttribute('href', i), (i = n.href)),
          n.setAttribute('href', i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname
          }
        )
      }
      return (
        (s = r(window.location.href)),
        function (i) {
          const l = y.isString(i) ? r(i) : i
          return l.protocol === s.protocol && l.host === s.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function kf(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function Df(e, t) {
  e = e || 10
  const n = new Array(e),
    s = new Array(e)
  let r = 0,
    o = 0,
    i
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const f = Date.now(),
        a = s[o]
      i || (i = f), (n[r] = c), (s[r] = f)
      let d = o,
        p = 0
      for (; d !== r; ) (p += n[d++]), (d = d % e)
      if (((r = (r + 1) % e), r === o && (o = (o + 1) % e), f - i < t)) return
      const g = a && f - a
      return g ? Math.round((p * 1e3) / g) : void 0
    }
  )
}
function ho(e, t) {
  let n = 0
  const s = Df(50, 250)
  return (r) => {
    const o = r.loaded,
      i = r.lengthComputable ? r.total : void 0,
      l = o - n,
      c = s(l),
      f = o <= i
    n = o
    const a = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && f ? (i - o) / c : void 0,
      event: r
    }
    ;(a[t ? 'download' : 'upload'] = !0), e(a)
  }
}
const Bf = typeof XMLHttpRequest < 'u',
  Hf =
    Bf &&
    function (e) {
      return new Promise(function (n, s) {
        let r = e.data
        const o = Je.from(e.headers).normalize()
        let { responseType: i, withXSRFToken: l } = e,
          c
        function f() {
          e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener('abort', c)
        }
        let a
        if (y.isFormData(r)) {
          if (Ue.hasStandardBrowserEnv || Ue.hasStandardBrowserWebWorkerEnv) o.setContentType(!1)
          else if ((a = o.getContentType()) !== !1) {
            const [w, ...I] = a
              ? a
                  .split(';')
                  .map((C) => C.trim())
                  .filter(Boolean)
              : []
            o.setContentType([w || 'multipart/form-data', ...I].join('; '))
          }
        }
        let d = new XMLHttpRequest()
        if (e.auth) {
          const w = e.auth.username || '',
            I = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''
          o.set('Authorization', 'Basic ' + btoa(w + ':' + I))
        }
        const p = Ji(e.baseURL, e.url)
        d.open(e.method.toUpperCase(), qi(p, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout)
        function g() {
          if (!d) return
          const w = Je.from('getAllResponseHeaders' in d && d.getAllResponseHeaders()),
            C = {
              data: !i || i === 'text' || i === 'json' ? d.responseText : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: w,
              config: e,
              request: d
            }
          Ff(
            function (k) {
              n(k), f()
            },
            function (k) {
              s(k), f()
            },
            C
          ),
            (d = null)
        }
        if (
          ('onloadend' in d
            ? (d.onloadend = g)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 && !(d.responseURL && d.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(g)
              }),
          (d.onabort = function () {
            d && (s(new q('Request aborted', q.ECONNABORTED, e, d)), (d = null))
          }),
          (d.onerror = function () {
            s(new q('Network Error', q.ERR_NETWORK, e, d)), (d = null)
          }),
          (d.ontimeout = function () {
            let I = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded'
            const C = e.transitional || zi
            e.timeoutErrorMessage && (I = e.timeoutErrorMessage),
              s(new q(I, C.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED, e, d)),
              (d = null)
          }),
          Ue.hasStandardBrowserEnv &&
            (l && y.isFunction(l) && (l = l(e)), l || (l !== !1 && jf(p))))
        ) {
          const w = e.xsrfHeaderName && e.xsrfCookieName && Lf.read(e.xsrfCookieName)
          w && o.set(e.xsrfHeaderName, w)
        }
        r === void 0 && o.setContentType(null),
          'setRequestHeader' in d &&
            y.forEach(o.toJSON(), function (I, C) {
              d.setRequestHeader(C, I)
            }),
          y.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials),
          i && i !== 'json' && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            d.addEventListener('progress', ho(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            d.upload &&
            d.upload.addEventListener('progress', ho(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((c = (w) => {
              d && (s(!w || w.type ? new an(null, e, d) : w), d.abort(), (d = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal && (e.signal.aborted ? c() : e.signal.addEventListener('abort', c)))
        const b = kf(p)
        if (b && Ue.protocols.indexOf(b) === -1) {
          s(new q('Unsupported protocol ' + b + ':', q.ERR_BAD_REQUEST, e))
          return
        }
        d.send(r || null)
      })
    },
  Ts = { http: df, xhr: Hf }
y.forEach(Ts, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const po = (e) => `- ${e}`,
  Uf = (e) => y.isFunction(e) || e === null || e === !1,
  Qi = {
    getAdapter: (e) => {
      e = y.isArray(e) ? e : [e]
      const { length: t } = e
      let n, s
      const r = {}
      for (let o = 0; o < t; o++) {
        n = e[o]
        let i
        if (((s = n), !Uf(n) && ((s = Ts[(i = String(n)).toLowerCase()]), s === void 0)))
          throw new q(`Unknown adapter '${i}'`)
        if (s) break
        r[i || '#' + o] = s
      }
      if (!s) {
        const o = Object.entries(r).map(
          ([l, c]) =>
            `adapter ${l} ` +
            (c === !1 ? 'is not supported by the environment' : 'is not available in the build')
        )
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(po).join(`
`)
            : ' ' + po(o[0])
          : 'as no adapter specified'
        throw new q('There is no suitable adapter to dispatch the request ' + i, 'ERR_NOT_SUPPORT')
      }
      return s
    },
    adapters: Ts
  }
function ds(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new an(null, e)
}
function mo(e) {
  return (
    ds(e),
    (e.headers = Je.from(e.headers)),
    (e.data = fs.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Qi.getAdapter(e.adapter || sr.adapter)(e).then(
      function (s) {
        return (
          ds(e), (s.data = fs.call(e, e.transformResponse, s)), (s.headers = Je.from(s.headers)), s
        )
      },
      function (s) {
        return (
          Gi(s) ||
            (ds(e),
            s &&
              s.response &&
              ((s.response.data = fs.call(e, e.transformResponse, s.response)),
              (s.response.headers = Je.from(s.response.headers)))),
          Promise.reject(s)
        )
      }
    )
  )
}
const go = (e) => (e instanceof Je ? { ...e } : e)
function Ft(e, t) {
  t = t || {}
  const n = {}
  function s(f, a, d) {
    return y.isPlainObject(f) && y.isPlainObject(a)
      ? y.merge.call({ caseless: d }, f, a)
      : y.isPlainObject(a)
        ? y.merge({}, a)
        : y.isArray(a)
          ? a.slice()
          : a
  }
  function r(f, a, d) {
    if (y.isUndefined(a)) {
      if (!y.isUndefined(f)) return s(void 0, f, d)
    } else return s(f, a, d)
  }
  function o(f, a) {
    if (!y.isUndefined(a)) return s(void 0, a)
  }
  function i(f, a) {
    if (y.isUndefined(a)) {
      if (!y.isUndefined(f)) return s(void 0, f)
    } else return s(void 0, a)
  }
  function l(f, a, d) {
    if (d in t) return s(f, a)
    if (d in e) return s(void 0, f)
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (f, a) => r(go(f), go(a), !0)
  }
  return (
    y.forEach(Object.keys(Object.assign({}, e, t)), function (a) {
      const d = c[a] || r,
        p = d(e[a], t[a], a)
      ;(y.isUndefined(p) && d !== l) || (n[a] = p)
    }),
    n
  )
}
const Xi = '1.6.8',
  rr = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  rr[e] = function (s) {
    return typeof s === e || 'a' + (t < 1 ? 'n ' : ' ') + e
  }
})
const _o = {}
rr.transitional = function (t, n, s) {
  function r(o, i) {
    return '[Axios v' + Xi + "] Transitional option '" + o + "'" + i + (s ? '. ' + s : '')
  }
  return (o, i, l) => {
    if (t === !1) throw new q(r(i, ' has been removed' + (n ? ' in ' + n : '')), q.ERR_DEPRECATED)
    return (
      n &&
        !_o[i] &&
        ((_o[i] = !0),
        console.warn(
          r(i, ' has been deprecated since v' + n + ' and will be removed in the near future')
        )),
      t ? t(o, i, l) : !0
    )
  }
}
function Vf(e, t, n) {
  if (typeof e != 'object') throw new q('options must be an object', q.ERR_BAD_OPTION_VALUE)
  const s = Object.keys(e)
  let r = s.length
  for (; r-- > 0; ) {
    const o = s[r],
      i = t[o]
    if (i) {
      const l = e[o],
        c = l === void 0 || i(l, o, e)
      if (c !== !0) throw new q('option ' + o + ' must be ' + c, q.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new q('Unknown option ' + o, q.ERR_BAD_OPTION)
  }
}
const Ns = { assertOptions: Vf, validators: rr },
  tt = Ns.validators
class Fn {
  constructor(t) {
    ;(this.defaults = t), (this.interceptors = { request: new uo(), response: new uo() })
  }
  async request(t, n) {
    try {
      return await this._request(t, n)
    } catch (s) {
      if (s instanceof Error) {
        let r
        Error.captureStackTrace ? Error.captureStackTrace((r = {})) : (r = new Error())
        const o = r.stack ? r.stack.replace(/^.+\n/, '') : ''
        s.stack
          ? o &&
            !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
            (s.stack +=
              `
` + o)
          : (s.stack = o)
      }
      throw s
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = Ft(this.defaults, n))
    const { transitional: s, paramsSerializer: r, headers: o } = n
    s !== void 0 &&
      Ns.assertOptions(
        s,
        {
          silentJSONParsing: tt.transitional(tt.boolean),
          forcedJSONParsing: tt.transitional(tt.boolean),
          clarifyTimeoutError: tt.transitional(tt.boolean)
        },
        !1
      ),
      r != null &&
        (y.isFunction(r)
          ? (n.paramsSerializer = { serialize: r })
          : Ns.assertOptions(r, { encode: tt.function, serialize: tt.function }, !0)),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let i = o && y.merge(o.common, o[n.method])
    o &&
      y.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (b) => {
        delete o[b]
      }),
      (n.headers = Je.concat(i, o))
    const l = []
    let c = !0
    this.interceptors.request.forEach(function (w) {
      ;(typeof w.runWhen == 'function' && w.runWhen(n) === !1) ||
        ((c = c && w.synchronous), l.unshift(w.fulfilled, w.rejected))
    })
    const f = []
    this.interceptors.response.forEach(function (w) {
      f.push(w.fulfilled, w.rejected)
    })
    let a,
      d = 0,
      p
    if (!c) {
      const b = [mo.bind(this), void 0]
      for (b.unshift.apply(b, l), b.push.apply(b, f), p = b.length, a = Promise.resolve(n); d < p; )
        a = a.then(b[d++], b[d++])
      return a
    }
    p = l.length
    let g = n
    for (d = 0; d < p; ) {
      const b = l[d++],
        w = l[d++]
      try {
        g = b(g)
      } catch (I) {
        w.call(this, I)
        break
      }
    }
    try {
      a = mo.call(this, g)
    } catch (b) {
      return Promise.reject(b)
    }
    for (d = 0, p = f.length; d < p; ) a = a.then(f[d++], f[d++])
    return a
  }
  getUri(t) {
    t = Ft(this.defaults, t)
    const n = Ji(t.baseURL, t.url)
    return qi(n, t.params, t.paramsSerializer)
  }
}
y.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Fn.prototype[t] = function (n, s) {
    return this.request(Ft(s || {}, { method: t, url: n, data: (s || {}).data }))
  }
})
y.forEach(['post', 'put', 'patch'], function (t) {
  function n(s) {
    return function (o, i, l) {
      return this.request(
        Ft(l || {}, {
          method: t,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i
        })
      )
    }
  }
  ;(Fn.prototype[t] = n()), (Fn.prototype[t + 'Form'] = n(!0))
})
const Pn = Fn
class or {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (o) {
      n = o
    })
    const s = this
    this.promise.then((r) => {
      if (!s._listeners) return
      let o = s._listeners.length
      for (; o-- > 0; ) s._listeners[o](r)
      s._listeners = null
    }),
      (this.promise.then = (r) => {
        let o
        const i = new Promise((l) => {
          s.subscribe(l), (o = l)
        }).then(r)
        return (
          (i.cancel = function () {
            s.unsubscribe(o)
          }),
          i
        )
      }),
      t(function (o, i, l) {
        s.reason || ((s.reason = new an(o, i, l)), n(s.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new or(function (r) {
        t = r
      }),
      cancel: t
    }
  }
}
const qf = or
function zf(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function Kf(e) {
  return y.isObject(e) && e.isAxiosError === !0
}
const $s = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
}
Object.entries($s).forEach(([e, t]) => {
  $s[t] = e
})
const Wf = $s
function Yi(e) {
  const t = new Pn(e),
    n = $i(Pn.prototype.request, t)
  return (
    y.extend(n, Pn.prototype, t, { allOwnKeys: !0 }),
    y.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return Yi(Ft(e, r))
    }),
    n
  )
}
const re = Yi(sr)
re.Axios = Pn
re.CanceledError = an
re.CancelToken = qf
re.isCancel = Gi
re.VERSION = Xi
re.toFormData = Qn
re.AxiosError = q
re.Cancel = re.CanceledError
re.all = function (t) {
  return Promise.all(t)
}
re.spread = zf
re.isAxiosError = Kf
re.mergeConfig = Ft
re.AxiosHeaders = Je
re.formToJSON = (e) => Wi(y.isHTMLForm(e) ? new FormData(e) : e)
re.getAdapter = Qi.getAdapter
re.HttpStatusCode = Wf
re.default = re
const Gf = {
    data() {
      return {
        responseData: null,
        Allproducts: () => {
          console.log('hi')
        }
      }
    },
    mounted() {
      this.fatchProducts()
    },
    methods: {
      async fatchProducts() {
        try {
          const e = await re.get('https://fakestoreapi.com/products/categories')
          this.responseData = e.data
        } catch (e) {
          console.error('Error fetching data:', e)
        }
      },
      truncate(e, t) {
        return e.length > t ? e.substring(0, t) + '...' : e
      }
    }
  },
  Jf = { class: 'navbar navbar-expand-lg navbar-light bg-light' },
  Qf = T(
    'button',
    {
      class: 'navbar-toggler',
      type: 'button',
      'data-toggle': 'collapse',
      'data-target': '#navbarNavDropdown',
      'aria-controls': 'navbarNavDropdown',
      'aria-expanded': 'false',
      'aria-label': 'Toggle navigation'
    },
    [T('span', { class: 'navbar-toggler-icon' })],
    -1
  ),
  Xf = { class: 'collapse navbar-collapse', id: 'navbarNavDropdown' },
  Yf = { class: 'navbar-nav' }
function Zf(e, t, n, s, r, o) {
  const i = Fe('router-link')
  return (
    ae(),
    ue('nav', Jf, [
      ne(
        i,
        { to: { name: 'home' }, class: 'navbar-brand' },
        { default: Zt(() => [Nn(' Home ')]), _: 1 }
      ),
      Qf,
      T('div', Xf, [
        T('ul', Yf, [
          (ae(!0),
          ue(
            _e,
            null,
            Gs(
              r.responseData,
              (l, c) => (
                ae(),
                ue('li', { class: 'nav-item', key: c }, [
                  ne(
                    i,
                    { to: { name: 'categories', params: { id: l } }, class: 'nav-link' },
                    { default: Zt(() => [Nn(Te(l), 1)]), _: 2 },
                    1032,
                    ['to']
                  )
                ])
              )
            ),
            128
          ))
        ])
      ])
    ])
  )
}
const ir = ft(Gf, [['render', Zf]]),
  ed = {
    data() {
      return { responseData: null, dataLoaded: !1 }
    },
    mounted() {
      this.fatchProducts()
    },
    methods: {
      async fatchProducts() {
        try {
          const e = await re.get('https://fakestoreapi.com/products')
          ;(this.responseData = e.data), (this.dataLoaded = !0)
        } catch (e) {
          console.error('Error fetching data:', e)
        }
      },
      truncate(e, t) {
        return e.length > t ? e.substring(0, t) + '...' : e
      }
    }
  },
  td = { key: 0, class: 'container mt-5' },
  nd = { class: 'row' },
  sd = { class: 'card' },
  rd = { class: 'image-container' },
  od = T(
    'div',
    { class: 'first' },
    [
      T('div', { class: 'd-flex justify-content-between align-items-center' }, [
        T('span', { class: 'discount' }, '-25%'),
        T('span', { class: 'wishlist' }, [T('i', { class: 'fas fa-heart' })])
      ])
    ],
    -1
  ),
  id = ['src'],
  ld = { class: 'product-detail-container p-2' },
  cd = { class: 'd-flex justify-content-between align-items-center' },
  ad = { class: 'dress-name' },
  ud = { class: 'd-flex flex-column mb-2' },
  fd = { class: 'new-price' },
  dd = T(
    'div',
    { class: 'd-flex justify-content-between align-items-center pt-1' },
    [
      T('div', { class: 'color-select d-flex' }, [
        T('input', { id: 'btn', type: 'button', name: 'grey', class: 'creme' }),
        T('input', { id: 'btn', type: 'button', name: 'red', class: 'red ml-2' }),
        T('input', { id: 'btn', type: 'button', name: 'blue', class: 'blue ml-2' })
      ])
    ],
    -1
  ),
  hd = { class: 'd-flex justify-content-between align-items-center pt-1' },
  pd = T('i', { class: 'fa fa-star-o rating-star' }, null, -1),
  md = { class: 'rating-number' },
  gd = T('span', { class: 'buy' }, 'BUY +', -1),
  _d = { key: 1, class: 'container' },
  yd = T(
    'h1',
    { style: { 'text-align': 'center', 'justify-content': 'center' } },
    'Loading....',
    -1
  ),
  bd = [yd]
function vd(e, t, n, s, r, o) {
  const i = Fe('router-link')
  return r.dataLoaded
    ? (ae(),
      ue('div', td, [
        T('div', nd, [
          (ae(!0),
          ue(
            _e,
            null,
            Gs(
              r.responseData,
              (l, c) => (
                ae(),
                ue('div', { class: 'col-md-3 col-sm-6 mb-4', key: c }, [
                  ne(
                    i,
                    { id: 'link', to: { name: 'SingleProduct', params: { id: l.id } } },
                    {
                      default: Zt(() => [
                        T('div', sd, [
                          T('div', rd, [
                            od,
                            T(
                              'img',
                              { style: { height: '200px' }, src: l.image, class: 'img-thumbnail' },
                              null,
                              8,
                              id
                            )
                          ]),
                          T('div', ld, [
                            T('div', cd, [
                              T('h5', ad, Te(o.truncate(l.title, 25)), 1),
                              T('div', ud, [T('span', fd, '$' + Te(l.price), 1)])
                            ]),
                            dd,
                            T('div', hd, [
                              T('div', null, [pd, T('span', md, Te(l.rating.rate), 1)]),
                              gd
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    },
                    1032,
                    ['to']
                  )
                ])
              )
            ),
            128
          ))
        ])
      ]))
    : (ae(), ue('div', _d, bd))
}
const Ed = ft(ed, [['render', vd]]),
  wd = {},
  xd = { class: 'container' },
  Rd = on(
    '<footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top"><div class="col mb-3"><a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none"><svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg></a><p class="text-muted">© 2024</p></div><div class="col mb-3"></div><div class="col mb-3"><h5>Section</h5><ul class="nav flex-column"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li></ul></div><div class="col mb-3"><h5>Section</h5><ul class="nav flex-column"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li></ul></div><div class="col mb-3"><h5>Section</h5><ul class="nav flex-column"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li></ul></div></footer>',
    1
  ),
  Sd = [Rd]
function Od(e, t) {
  return ae(), ue('div', xd, Sd)
}
const lr = ft(wd, [['render', Od]]),
  Pd = { components: { Head: ir, AllProducts: Ed, Footer: lr } }
function Ad(e, t, n, s, r, o) {
  const i = Fe('Head'),
    l = Fe('AllProducts'),
    c = Fe('Footer')
  return ae(), ue(_e, null, [ne(i), ne(l), ne(c)], 64)
}
const Cd = ft(Pd, [['render', Ad]]),
  Td = {
    data() {
      return { responseData: null, dataLoaded: !1, id: this.$route.params.id }
    },
    components: { Head: ir, Footer: lr },
    mounted() {
      this.fetchProducts()
    },
    methods: {
      async fetchProducts() {
        try {
          const e = await re.get(`https://fakestoreapi.com/products/${this.id}`)
          ;(this.responseData = e.data), console.log(e.data), (this.dataLoaded = !0)
        } catch (e) {
          console.error('Error fetching data:', e)
        }
      }
    },
    directives: {
      lazy: {
        beforeMount(e, t) {
          const n = { rootMargin: '50px 0px', threshold: 0.01 },
            s = new IntersectionObserver((r) => {
              r.forEach((o) => {
                if (o.isIntersecting) {
                  const i = o.target
                  ;(i.src = t.value), s.unobserve(i)
                }
              })
            }, n)
          s.observe(e)
        }
      }
    }
  },
  Nd = { key: 0, class: 'container' },
  $d = { class: 'col-lg-8 border p-3 main-section bg-white' },
  Fd = { class: 'row m-0' },
  Ld = { class: 'col-lg-4 left-side-product-box pb-3' },
  Id = ['src'],
  Md = { class: 'sub-img' },
  jd = ['src'],
  kd = ['src'],
  Dd = ['src'],
  Bd = { class: 'col-lg-8' },
  Hd = { class: 'right-side-pro-detail border p-3 m-0' },
  Ud = { class: 'row' },
  Vd = { class: 'col-lg-12' },
  qd = { class: 'm-0 p-0' },
  zd = { class: 'col-lg-12' },
  Kd = { class: 'm-0 p-0 price-pro' },
  Wd = T('hr', { class: 'p-0 m-0' }, null, -1),
  Gd = { class: 'col-lg-12 pt-2' },
  Jd = T('h5', null, 'Product Detail', -1),
  Qd = T('hr', { class: 'm-0 pt-2 mt-2' }, null, -1),
  Xd = on(
    '<div class="col-lg-12"><p class="tag-section"><strong>Tag : </strong><a href="">Woman</a><a href="">,Man</a></p></div><div class="col-lg-12"><h6>Quantity :</h6><input type="number" class="form-control text-center w-100" value="1"></div><div class="col-lg-12 mt-3"><div class="row"><div class="col-lg-6"><a href="#" class="btn btn-danger w-100" style="height:100%;">Add To Cart</a></div><div class="col-lg-6"><a href="#" class="btn btn-success w-100" style="height:100%;">Shop Now</a></div></div></div>',
    3
  ),
  Yd = { key: 1, class: 'container' },
  Zd = T(
    'h1',
    { style: { 'text-align': 'center', 'justify-content': 'center' } },
    'Loading....',
    -1
  ),
  eh = [Zd]
function th(e, t, n, s, r, o) {
  const i = Fe('Head'),
    l = Fe('Footer'),
    c = Yl('lazy')
  return (
    ae(),
    ue(
      _e,
      null,
      [
        ne(i),
        r.dataLoaded
          ? (ae(),
            ue('div', Nd, [
              T('div', $d, [
                T('div', Fd, [
                  T('div', Ld, [
                    _n(
                      T(
                        'img',
                        { src: r.responseData.image, class: 'border p-3', loading: 'lazy' },
                        null,
                        8,
                        Id
                      ),
                      [[c, r.responseData.image]]
                    ),
                    T('span', Md, [
                      _n(
                        T(
                          'img',
                          { src: r.responseData.image, class: 'border p-2', loading: 'lazy' },
                          null,
                          8,
                          jd
                        ),
                        [[c, r.responseData.image]]
                      ),
                      _n(
                        T(
                          'img',
                          { src: r.responseData.image, class: 'border p-2', loading: 'lazy' },
                          null,
                          8,
                          kd
                        ),
                        [[c, r.responseData.image]]
                      ),
                      _n(
                        T(
                          'img',
                          { src: r.responseData.image, class: 'border p-2', loading: 'lazy' },
                          null,
                          8,
                          Dd
                        ),
                        [[c, r.responseData.image]]
                      )
                    ])
                  ]),
                  T('div', Bd, [
                    T('div', Hd, [
                      T('div', Ud, [
                        T('div', Vd, [
                          T('span', null, Te(r.responseData.category), 1),
                          T('p', qd, Te(r.responseData.title), 1)
                        ]),
                        T('div', zd, [T('p', Kd, '$' + Te(r.responseData.price), 1), Wd]),
                        T('div', Gd, [Jd, T('span', null, Te(r.responseData.description), 1), Qd]),
                        Xd
                      ])
                    ])
                  ])
                ])
              ])
            ]))
          : (ae(), ue('div', Yd, eh)),
        ne(l)
      ],
      64
    )
  )
}
const nh = ft(Td, [['render', th]]),
  sh = {
    data() {
      return { responseData: null, dataLoaded: !1, slug: this.$route.params.id }
    },
    components: { Head: ir, Footer: lr },
    watch: {
      $route(e, t) {
        ;(this.slug = this.$route.params.id), this.fetchProducts()
      }
    },
    mounted() {
      this.fetchProducts()
    },
    methods: {
      async fetchProducts() {
        try {
          const e = await re.get(`https://fakestoreapi.com/products/category/${this.slug}`)
          ;(this.responseData = e.data), (this.dataLoaded = !0)
        } catch (e) {
          console.error('Error fetching data:', e)
        }
      },
      truncate(e, t) {
        return e.length > t ? e.substring(0, t) + '...' : e
      }
    }
  },
  rh = { key: 0, class: 'container mt-5' },
  oh = { class: 'row' },
  ih = { class: 'card' },
  lh = { class: 'image-container' },
  ch = on(
    '<div class="first"><div class="d-flex justify-content-between align-items-center"><span class="discount">-25%</span><span class="wishlist"><i class="fas fa-heart"></i></span></div></div>',
    1
  ),
  ah = ['src'],
  uh = { class: 'product-detail-container p-2' },
  fh = { class: 'd-flex justify-content-between align-items-center' },
  dh = { class: 'dress-name' },
  hh = { class: 'd-flex flex-column mb-2' },
  ph = { class: 'new-price' },
  mh = on(
    '<div class="d-flex justify-content-between align-items-center pt-1"><div class="color-select d-flex"><input id="btn" type="button" name="grey" class="creme"><input id="btn" type="button" name="red" class="red ml-2"><input id="btn" type="button" name="blue" class="blue ml-2"></div></div>',
    1
  ),
  gh = { class: 'd-flex justify-content-between align-items-center pt-1' },
  _h = T('i', { class: 'fa fa-star-o rating-star' }, null, -1),
  yh = { class: 'rating-number' },
  bh = T('span', { class: 'buy' }, 'BUY +', -1),
  vh = { key: 1, class: 'container' },
  Eh = T(
    'h1',
    { style: { 'text-align': 'center', 'justify-content': 'center' } },
    'Loading....',
    -1
  ),
  wh = [Eh]
function xh(e, t, n, s, r, o) {
  const i = Fe('Head'),
    l = Fe('router-link'),
    c = Fe('Footer')
  return (
    ae(),
    ue(
      _e,
      null,
      [
        ne(i),
        r.dataLoaded
          ? (ae(),
            ue('div', rh, [
              T('div', oh, [
                (ae(!0),
                ue(
                  _e,
                  null,
                  Gs(
                    r.responseData,
                    (f, a) => (
                      ae(),
                      ue('div', { class: 'col-md-3 col-sm-6 mb-4', key: a }, [
                        T('div', ih, [
                          T('div', lh, [
                            ch,
                            T(
                              'img',
                              { style: { height: '200px' }, src: f.image, class: 'img-thumbnail' },
                              null,
                              8,
                              ah
                            )
                          ]),
                          T('div', uh, [
                            T('div', fh, [
                              T('h5', dh, [
                                ne(
                                  l,
                                  { to: { name: 'SingleProduct', params: { id: f.id } } },
                                  { default: Zt(() => [Nn(Te(o.truncate(f.title, 25)), 1)]), _: 2 },
                                  1032,
                                  ['to']
                                )
                              ]),
                              T('div', hh, [T('span', ph, '$' + Te(f.price), 1)])
                            ]),
                            mh,
                            T('div', gh, [
                              T('div', null, [_h, T('span', yh, Te(f.rating.rate), 1)]),
                              bh
                            ])
                          ])
                        ])
                      ])
                    )
                  ),
                  128
                ))
              ])
            ]))
          : (ae(), ue('div', vh, wh)),
        ne(c)
      ],
      64
    )
  )
}
const Rh = ft(sh, [['render', xh]]),
  Sh = {},
  Oh = on(
    '<meta name="robots" content="noindex, follow"><div id="notfound"><div class="notfound"><div class="notfound-404"><h1>404</h1><h2>Page not found</h2></div><a href="/">Homepage</a></div></div>',
    2
  )
function Ph(e, t) {
  return Oh
}
const Ah = ft(Sh, [['render', Ph]]),
  Ch = xu({
    history: Ya('/'),
    routes: [
      { path: '/', name: 'home', component: Cd },
      { path: '/product/:id', name: 'SingleProduct', component: nh },
      { path: '/products/category/:id', name: 'categories', component: Rh },
      {
        path: '/about',
        name: 'about',
        component: () => Tu(() => import('./AboutView-Dc8_qgVq.js'), __vite__mapDeps([0, 1]))
      },
      { path: '/:catchAll(.*)', name: 'NotFound', component: Ah }
    ]
  }),
  Zi = ba(Pu)
Zi.use(Ch)
Zi.mount('#app')
export { ft as _, T as a, ue as c, ae as o }
