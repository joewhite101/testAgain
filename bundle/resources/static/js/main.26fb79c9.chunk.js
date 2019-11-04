(window['webpackJsonpconference-details-widget'] = window['webpackJsonpconference-details-widget'] || []).push([
  [0],
  {
    56: function(e) {
      e.exports = JSON.parse(
        '{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","missingId":"Please provide conference ID"},"entities":{"conference":{"id":"ID","asdf":"entities.conference.asdf"}}}'
      );
    },
    68: function(e, t, n) {
      e.exports = n(86);
    },
    78: function(e, t, n) {},
    86: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(29),
        r = n(16),
        c = n(45),
        o = { en: n(56) };
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      var s = Object.keys(o).reduce(function(e, t) {
        return (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(n, !0).forEach(function(t) {
                  Object(a.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : i(n).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e, Object(a.a)({}, t, { translation: o[t] }));
      }, {});
      r.a.use(c.a).init({ fallbackLng: 'en', resources: s, interpolation: { escapeValue: !1 } });
      n(78);
      var l = n(36),
        u = n(37),
        f = n(46),
        m = n(25),
        d = n(39),
        p = n(62),
        b = n(0),
        g = n.n(b),
        h = n(14),
        O = n.n(h),
        E = n(38),
        j = n(119),
        v = n(61),
        y = n(121),
        w = n(4),
        P = n.n(w),
        N = (P.a.shape({ id: P.a.number, asdf: P.a.string }), n(112)),
        S = n(117),
        k = n(116),
        C = n(114),
        D = n(115),
        M = function(e) {
          var t = e.t,
            n = (e.i18n.language, e.conference);
          return g.a.createElement(
            N.a,
            null,
            g.a.createElement(
              C.a,
              null,
              g.a.createElement(D.a, null, g.a.createElement(k.a, null, t('common.name')), g.a.createElement(k.a, null, t('common.value')))
            ),
            g.a.createElement(
              S.a,
              null,
              g.a.createElement(
                D.a,
                null,
                g.a.createElement(k.a, null, g.a.createElement('span', null, t(''.concat('entities.conference.', 'id')))),
                g.a.createElement(k.a, null, g.a.createElement('span', null, n.id))
              ),
              g.a.createElement(
                D.a,
                null,
                g.a.createElement(k.a, null, g.a.createElement('span', null, t(''.concat('entities.conference.', 'asdf')))),
                g.a.createElement(k.a, null, g.a.createElement('span', null, n.asdf))
              )
            )
          );
        };
      M.defaultProps = { conference: [] };
      var I = Object(c.b)()(M),
        T = function(e) {
          var t = e.conference;
          return g.a.createElement(
            y.a,
            null,
            g.a.createElement('h3', null, r.a.t('common.widgetName', { widgetNamePlaceholder: 'Conference' })),
            g.a.createElement(I, { conference: t })
          );
        };
      T.defaultProps = { conference: {} };
      var x = T,
        L = n(3),
        A = n(122),
        J = n(124),
        z = n(88),
        F = n(58),
        H = n.n(F),
        V = n(59),
        B = n.n(V),
        G = n(57),
        R = n.n(G),
        U = n(60),
        W = n.n(U),
        q = n(123),
        K = n(118),
        Q = { success: R.a, error: H.a, info: B.a },
        X = function(e) {
          var t = e.className,
            n = e.classes,
            a = e.status,
            r = e.message,
            c = e.onClose;
          if (!r) return '';
          var o = Q[a],
            i = g.a.createElement(
              'span',
              { className: n.message },
              g.a.createElement(o, { className: Object(L.a)(n.icon, n.iconStatus) }),
              r
            );
          return g.a.createElement(
            A.a,
            { open: !0, onClose: c },
            g.a.createElement(J.a, {
              className: Object(L.a)(n[a], t),
              message: i,
              action: [
                g.a.createElement(
                  q.a,
                  { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: c },
                  g.a.createElement(W.a, { className: n.icon })
                )
              ]
            })
          );
        };
      X.defaultProps = { message: null, className: '', status: 'info', onClose: function() {} };
      var Y = Object(z.a)(
        function(e) {
          return {
            message: { display: 'flex', alignItems: 'center' },
            icon: { fontSize: 20 },
            iconStatus: { opacity: 0.9, marginRight: e.spacing(1) },
            success: { backgroundColor: K.a[600] },
            error: { backgroundColor: e.palette.error.dark },
            info: { backgroundColor: e.palette.primary.main }
          };
        },
        { withTheme: !0 }
      )(X);
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(n, !0).forEach(function(t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var _ = (function(e) {
        function t(e) {
          var n;
          return (
            Object(l.a)(this, t),
            ((n = Object(f.a)(this, Object(m.a)(t).call(this, e))).state = {
              loading: !0,
              conference: {},
              notificationStatus: null,
              notificationMessage: null
            }),
            (n.theme = Object(v.a)()),
            (n.closeNotification = n.closeNotification.bind(Object(E.a)(n))),
            n
          );
        }
        return (
          Object(d.a)(t, e),
          Object(u.a)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.id,
                  a = t.onError;
                n
                  ? (function() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        n = e.options,
                        a = ''
                          .concat('')
                          .concat(''.endsWith('/') ? '' : '/', 'conferences/')
                          .concat(t),
                        r = { headers: new Headers({ Authorization: 'Bearer '.concat(''), 'Content-Type': 'application/json' }) };
                      return fetch(a, $({ method: 'GET' }, r, {}, n))
                        .then(function(e) {
                          return e.status >= 200 && e.status < 300
                            ? Promise.resolve(e)
                            : Promise.reject(new Error(e.statusText || e.status));
                        })
                        .then(function(e) {
                          return e.json();
                        });
                    })({ id: n })
                      .then(function(t) {
                        return e.setState({ notificationStatus: null, notificationMessage: null, conference: t });
                      })
                      .catch(function(t) {
                        a(t), e.setState({ notificationStatus: 'error', notificationMessage: r.a.t('common.couldNotFetchData') });
                      })
                      .finally(function() {
                        return e.setState({ loading: !1 });
                      })
                  : this.setState({ loading: !1, notificationStatus: 'error', notificationMessage: r.a.t('common.missingId') });
              }
            },
            {
              key: 'closeNotification',
              value: function() {
                this.setState({ error: null });
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.state,
                  t = e.conference,
                  n = e.notificationStatus,
                  a = e.notificationMessage,
                  c = e.loading;
                return g.a.createElement(
                  j.a,
                  { theme: this.theme },
                  c && r.a.t('common.loading'),
                  !c && g.a.createElement(x, { conference: t }),
                  g.a.createElement(Y, { status: n, message: a, onClose: this.closeNotification })
                );
              }
            }
          ]),
          t
        );
      })(g.a.Component);
      _.defaultProps = { onError: function() {} };
      var ee = _,
        te = (function(e) {
          function t() {
            return Object(l.a)(this, t), Object(f.a)(this, Object(m.a)(t).apply(this, arguments));
          }
          return (
            Object(d.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'connectedCallback',
                value: function() {
                  var e = this,
                    t = document.createElement('div');
                  this.appendChild(t);
                  var n = this.getAttribute('locale') || 'en';
                  r.a.changeLanguage(n);
                  var a = this.getAttribute('id'),
                    c = g.a.createElement(ee, {
                      id: a,
                      onError: function(t) {
                        var n = new CustomEvent(''.concat('conference.details.', 'error'), { details: { error: t } });
                        e.dispatchEvent(n);
                      }
                    });
                  O.a.render(c, t);
                }
              }
            ]),
            t
          );
        })(Object(p.a)(HTMLElement));
      customElements.define('conference-details', te);
    }
  },
  [[68, 1, 2]]
]);
//# sourceMappingURL=main.26fb79c9.chunk.js.map
