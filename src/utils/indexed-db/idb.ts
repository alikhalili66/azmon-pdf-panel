/**
 * Bundled by jsDelivr using Rollup v2.67.2 and Terser v5.10.0.
 * Original file: /npm/idb@7.0.1/build/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
//@ts-nocheck

let e, t;
const n = new WeakMap(),
	r = new WeakMap(),
	o = new WeakMap(),
	s = new WeakMap(),
	a = new WeakMap();
let i = {
	get(e, t, n) {
		if (e instanceof IDBTransaction) {
			if ('done' === t) return r.get(e);
			if ('objectStoreNames' === t) return e.objectStoreNames || o.get(e);
			if ('store' === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
		}
		return d(e[t]);
	},
	set: (e, t, n) => ((e[t] = n), !0),
	has: (e, t) => (e instanceof IDBTransaction && ('done' === t || 'store' === t)) || t in e,
};
function c(e) {
	return e !== IDBDatabase.prototype.transaction || 'objectStoreNames' in IDBTransaction.prototype
		? (t || (t = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e)
			? function (...t) {
					return e.apply(l(this), t), d(n.get(this));
			  }
			: function (...t) {
					return d(e.apply(l(this), t));
			  }
		: function (t, ...n) {
				const r = e.call(l(this), t, ...n);
				return o.set(r, t.sort ? t.sort() : [t]), d(r);
		  };
}
function u(t) {
	return 'function' == typeof t
		? c(t)
		: (t instanceof IDBTransaction &&
				(function (e) {
					if (r.has(e)) return;
					const t = new Promise((t, n) => {
						const r = () => {
								e.removeEventListener('complete', o), e.removeEventListener('error', s), e.removeEventListener('abort', s);
							},
							o = () => {
								t(), r();
							},
							s = () => {
								n(e.error || new DOMException('AbortError', 'AbortError')), r();
							};
						e.addEventListener('complete', o), e.addEventListener('error', s), e.addEventListener('abort', s);
					});
					r.set(e, t);
				})(t),
		  (n = t),
		  (e || (e = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e) => n instanceof e)
				? new Proxy(t, i)
				: t);
	var n;
}
function d(e) {
	if (e instanceof IDBRequest)
		return (function (e) {
			const t = new Promise((t, n) => {
				const r = () => {
						e.removeEventListener('success', o), e.removeEventListener('error', s);
					},
					o = () => {
						t(d(e.result)), r();
					},
					s = () => {
						n(e.error), r();
					};
				e.addEventListener('success', o), e.addEventListener('error', s);
			});
			return (
				t
					.then((t) => {
						t instanceof IDBCursor && n.set(t, e);
					})
					.catch(() => {}),
				a.set(t, e),
				t
			);
		})(e);
	if (s.has(e)) return s.get(e);
	const t = u(e);
	return t !== e && (s.set(e, t), a.set(t, e)), t;
}
const l = (e) => a.get(e);
function f(e, t, { blocked: n, upgrade: r, blocking: o, terminated: s } = {}) {
	const a = indexedDB.open(e, t),
		i = d(a);
	return (
		r &&
			a.addEventListener('upgradeneeded', (e) => {
				r(d(a.result), e.oldVersion, e.newVersion, d(a.transaction));
			}),
		n && a.addEventListener('blocked', () => n()),
		i
			.then((e) => {
				s && e.addEventListener('close', () => s()), o && e.addEventListener('versionchange', () => o());
			})
			.catch(() => {}),
		i
	);
}
function p(e, { blocked: t } = {}) {
	const n = indexedDB.deleteDatabase(e);
	return t && n.addEventListener('blocked', () => t()), d(n).then(() => {});
}
const D = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
	v = ['put', 'add', 'delete', 'clear'],
	b = new Map();
function I(e, t) {
	if (!(e instanceof IDBDatabase) || t in e || 'string' != typeof t) return;
	if (b.get(t)) return b.get(t);
	const n = t.replace(/FromIndex$/, ''),
		r = t !== n,
		o = v.includes(n);
	if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || (!o && !D.includes(n))) return;
	const s = async function (e, ...t) {
		const s = this.transaction(e, o ? 'readwrite' : 'readonly');
		let a = s.store;
		return r && (a = a.index(t.shift())), (await Promise.all([a[n](...t), o && s.done]))[0];
	};
	return b.set(t, s), s;
}
i = ((e) => ({ ...e, get: (t, n, r) => I(t, n) || e.get(t, n, r), has: (t, n) => !!I(t, n) || e.has(t, n) }))(i);
export { p as deleteDB, f as openDB, l as unwrap, d as wrap };
//# sourceMappingURL=/sm/8b3d9dc6242aa179b44ac56c276ea9b7bf63a66eaddfa7ca77337528485c7dd7.map
