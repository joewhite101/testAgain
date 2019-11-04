(window['webpackJsonpconference-table-widget'] =
  window['webpackJsonpconference-table-widget'] || []).push([
  [0],
  {
    54: function(e) {
      e.exports = JSON.parse(
        '{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data"},"entities":{"conference":{"noItems":"No conferences available","id":"ID","asdf":"entities.conference.asdf"}}}'
      );
    },
    55: function(e) {
      e.exports = JSON.parse(
        '{"common":{"couldNotFetchData":"Errore durante la connessione al server"},"entities":{"conference":{"noItems":"Nessun conference disponibile","id":"ID","asdf":"entities.conference.asdf"}}}'
      );
    },
    67: function(e, t, n) {
      e.exports = n(86);
    },
    77: function(e, t, n) {},
    86: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(29),
        a = n(15),
        c = n(62),
        o = { en: n(54), it: n(55) };
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var i = Object.keys(o).reduce(function(e, t) {
        return (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(n, !0).forEach(function(t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : s(n).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e, Object(r.a)({}, t, { translation: o[t] }));
      }, {});
      a.a.use(c.a).init({ fallbackLng: 'en', resources: i, interpolation: { escapeValue: !1 } });
      n(77);
      var l = n(35),
        u = n(36),
        f = n(44),
        p = n(24),
        m = n(37),
        b = n(63),
        h = n(0),
        O = n.n(h),
        d = n(14),
        v = n.n(d),
        g = n(27),
        j = n.n(g),
        y = n(38),
        E = n(88),
        w = n(114),
        k = n(116),
        S = n(113),
        P = n(115),
        C = n(111),
        N = n(4),
        D = n.n(N),
        x =
          (D.a.arrayOf(D.a.shape({ id: D.a.number, asdf: D.a.string })),
          function(e) {
            var t = e.classes,
              n = e.conferences,
              r = e.onSelect,
              c = n.map(function(e) {
                return O.a.createElement(
                  C.a,
                  {
                    hover: !0,
                    className: t.root,
                    key: e.id,
                    onClick: function() {
                      return r(e);
                    },
                  },
                  O.a.createElement(S.a, null, O.a.createElement('span', null, e.asdf))
                );
              });
            return n.length
              ? O.a.createElement(
                  w.a,
                  null,
                  O.a.createElement(
                    P.a,
                    null,
                    O.a.createElement(
                      C.a,
                      null,
                      O.a.createElement(
                        S.a,
                        null,
                        O.a.createElement('span', null, a.a.t('entities.conference.asdf'))
                      )
                    )
                  ),
                  O.a.createElement(k.a, null, c)
                )
              : a.a.t('entities.conference.noItems');
          });
      x.defaultProps = { classes: { root: '' }, onSelect: function() {} };
      var I = Object(E.a)({ root: { cursor: 'pointer' } })(x),
        M = Object(y.a)(
          j.a.mark(function e() {
            var t, n, r;
            return j.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = ''.concat('', '/conferences')),
                      (n = { headers: { Authorization: 'Bearer '.concat('') } }),
                      (e.next = 4),
                      fetch(t, n)
                    );
                  case 4:
                    return (r = e.sent), e.abrupt('return', r.json());
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        ),
        J = n(3),
        A = n(120),
        F = n(121),
        L = n(58),
        z = n.n(L),
        T = n(59),
        B = n.n(T),
        H = n(57),
        R = n.n(H),
        U = n(60),
        V = n.n(U),
        q = n(119),
        G = n(117),
        K = { success: R.a, error: z.a, info: B.a },
        Q = function(e) {
          var t = e.className,
            n = e.classes,
            r = e.status,
            a = e.message,
            c = e.onClose;
          if (!a) return '';
          var o = K[r],
            s = O.a.createElement(
              'span',
              { className: n.message },
              O.a.createElement(o, { className: Object(J.a)(n.icon, n.iconStatus) }),
              a
            );
          return O.a.createElement(
            A.a,
            { open: !0, onClose: c },
            O.a.createElement(F.a, {
              className: Object(J.a)(n[r], t),
              message: s,
              action: [
                O.a.createElement(
                  q.a,
                  { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: c },
                  O.a.createElement(V.a, { className: n.icon })
                ),
              ],
            })
          );
        };
      Q.defaultProps = { message: null, className: '', status: 'info', onClose: function() {} };
      var W = Object(E.a)(
          function(e) {
            return {
              message: { display: 'flex', alignItems: 'center' },
              icon: { fontSize: 20 },
              iconStatus: { opacity: 0.9, marginRight: e.spacing(1) },
              success: { backgroundColor: G.a[600] },
              error: { backgroundColor: e.palette.error.dark },
              info: { backgroundColor: e.palette.primary.main },
            };
          },
          { withTheme: !0 }
        )(Q),
        X = n(118),
        Y = n(61);
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(n, !0).forEach(function(t) {
                Object(r.a)(e, t, n[t]);
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
        function t() {
          var e, n;
          Object(l.a)(this, t);
          for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c];
          return (
            ((n = Object(f.a)(
              this,
              (e = Object(p.a)(t)).call.apply(e, [this].concat(a))
            )).theme = Object(Y.a)()),
            (n.state = { conferences: [], notificationStatus: null, notificationMessage: null }),
            (n.closeNotification = function() {
              n.setState({ error: null });
            }),
            n
          );
        }
        return (
          Object(m.a)(t, e),
          Object(u.a)(t, [
            {
              key: 'componentDidMount',
              value: (function() {
                var e = Object(y.a)(
                  j.a.mark(function e() {
                    var t, n;
                    return j.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), M();
                            case 3:
                              (t = e.sent),
                                (n = t.map(function(e) {
                                  return $({}, e);
                                })),
                                this.setState({
                                  conferences: n,
                                  notificationStatus: null,
                                  notificationMessage: null,
                                }),
                                (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8), (e.t0 = e.catch(0)), this.handleError(e.t0);
                            case 11:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 8]]
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'handleError',
              value: function(e) {
                (0, this.props.onError)(e),
                  this.setState({
                    notificationStatus: 'error',
                    notificationMessage: a.a.t('common.couldNotFetchData'),
                  });
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.state,
                  t = e.notificationStatus,
                  n = e.notificationMessage,
                  r = e.conferences,
                  a = this.props.onSelect;
                return O.a.createElement(
                  X.a,
                  { theme: this.theme },
                  O.a.createElement(I, { conferences: r, onSelect: a }),
                  O.a.createElement(W, { status: t, message: n, onClose: this.closeNotification })
                );
              },
            },
          ]),
          t
        );
      })(h.PureComponent);
      _.defaultProps = { onError: function() {}, onSelect: function() {} };
      var ee = (function(e) {
        function t() {
          return Object(l.a)(this, t), Object(f.a)(this, Object(p.a)(t).apply(this, arguments));
        }
        return (
          Object(m.a)(t, e),
          Object(u.a)(t, [
            {
              key: 'connectedCallback',
              value: function() {
                var e = this,
                  t = document.createElement('div');
                this.appendChild(t);
                var n = this.getAttribute('locale') || 'en';
                a.a.changeLanguage(n);
                var r = O.a.createElement(
                  _,
                  {
                    onError: function(t) {
                      var n = new CustomEvent(''.concat('Conference.table.', 'error'), {
                        detail: { error: t },
                      });
                      e.dispatchEvent(n);
                    },
                    onSelect: function(t) {
                      var n = new CustomEvent(''.concat('Conference.table.', 'select'), {
                        detail: { item: t },
                      });
                      e.dispatchEvent(n);
                    },
                  },
                  null
                );
                v.a.render(r, t);
              },
            },
          ]),
          t
        );
      })(Object(b.a)(HTMLElement));
      customElements.define('conference-table', ee);
    },
  },
  [[67, 1, 2]],
]);
//# sourceMappingURL=main.7b28e646.chunk.js.map
