(window['webpackJsonpconference-form-widget'] =
  window['webpackJsonpconference-form-widget'] || []).push([
  [0],
  {
    167(e) {
      e.exports = JSON.parse(
        '{"errors":{"dataLoading":"Error during server connection"},"entities":{"conference":{"name":"Name","summary":"Summary","start":"Start","end":"End"}},"common":{"save":"Save","dataSaved":"Data successfully saved"},"validation":{"required":"{{field}} is required"}}'
      );
    },
    181(e, t, n) {
      e.exports = n(329);
    },
    329(e, t, n) {
      n.r(t);
      const a = n(36);
      const r = n(51);
      const o = n(52);
      const c = n(56);
      const i = n(33);
      const s = n(53);
      const u = n(171);
      const l = n(0);
      const f = n.n(l);
      const p = n(8);
      const d = n.n(p);
      const m = n(15);
      const h = n.n(m);
      const b = n(29);
      const v = n(37);
      const O = n(21);
      const j = n(368);
      const y = n(169);
      const g = n(330);
      const S = n(360);
      const E = n(365);
      const w = n(369);
      const k = n(168);
      const P = n(62);
      const x = n(172);
      const N = n(4);
      const C = n.n(N);
      const J =
        (C.a.shape({ id: C.a.number, asdf: C.a.string }),
        C.a.shape({ asdf: C.a.string }),
        C.a.shape({ asdf: C.a.bool }),
        C.a.shape({ asdf: C.a.oneOfType([C.a.string, C.a.shape()]) }),
        function(e) {
          let t;
          const n = e.classes;
          const a = e.values;
          const r = e.touched;
          const o = e.errors;
          const c = e.handleChange;
          const i = e.handleBlur;
          const s = e.handleSubmit;
          e.setFieldValue;
          return f.a.createElement(
            'form',
            { onSubmit: s, className: n.root },
            f.a.createElement(
              S.a,
              { container: !0, spacing: 2 },
              f.a.createElement(
                S.a,
                { item: !0, xs: 12, sm: 6 },
                f.a.createElement(w.a, {
                  id: 'conference-asdf',
                  error: o.name && r.name,
                  helperText: ((t = 'asdf'), o[t] && r[t] ? o[t] : ''),
                  className: n.textField,
                  onBlur: i,
                  value: a.asdf,
                  name: 'asdf',
                  onChange: c,
                  label: O.a.t('entities.conference.asdf'),
                })
              ),
              f.a.createElement(
                E.a,
                { type: 'submit', color: 'primary', 'data-testid': 'submit-btn' },
                O.a.t('common.save')
              )
            )
          );
        });
      J.defaultProps = { classes: {}, values: {}, touched: {}, errors: {} };
      const M = { asdf: '' };
      const D = {
        mapPropsToValues(e) {
          return e.conference || M;
        },
        enableReinitialize: !0,
        validationSchema: P.object().shape({ asdf: P.string() }),
        handleSubmit(e, t) {
          (0, t.props.onSubmit)(e);
        },
        displayName: 'ConferenceForm',
      };
      const T = Object(x.a)(
        Object(g.a)(
          function(e) {
            return { root: { margin: e.spacing(3) }, textField: { width: '100%' } };
          },
          { withTheme: !0 }
        ),
        Object(k.a)(D)
      )(J);
      const U = n(3);
      const I = n(371);
      const L = n(372);
      const V = n(161);
      const q = n.n(V);
      const z = n(162);
      const F = n.n(z);
      const A = n(160);
      const B = n.n(A);
      const G = n(163);
      const H = n.n(G);
      const Q = n(367);
      const R = n(366);
      const X = { success: B.a, error: q.a, info: F.a };
      const Y = function(e) {
        const t = e.className;
        const n = e.classes;
        const a = e.status;
        const r = e.message;
        const o = e.onClose;
        if (!r) return '';
        const c = X[a];
        const i = f.a.createElement(
          'span',
          { className: n.message },
          f.a.createElement(c, { className: Object(U.a)(n.icon, n.iconStatus) }),
          r
        );
        return f.a.createElement(
          I.a,
          { open: !0, onClose: o },
          f.a.createElement(L.a, {
            className: Object(U.a)(n[a], t),
            message: i,
            action: [
              f.a.createElement(
                Q.a,
                { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: o },
                f.a.createElement(H.a, { className: n.icon })
              ),
            ],
          })
        );
      };
      Y.defaultProps = { message: null, className: '', status: 'info', onClose() {} };
      const K = Object(g.a)(
        function(e) {
          return {
            message: { display: 'flex', alignItems: 'center' },
            icon: { fontSize: 20 },
            iconStatus: { opacity: 0.9, marginRight: e.spacing(1) },
            success: { backgroundColor: R.a[600] },
            error: { backgroundColor: e.palette.error.dark },
            info: { backgroundColor: e.palette.primary.main },
          };
        },
        { withTheme: !0 }
      )(Y);
      const W = 'http://localhost:8085/services/jhEntandoBlueprint/api';
      function Z(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function _(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
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
      const $ = {
        headers: new Headers({
          Authorization: 'Bearer '.concat(
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiYXV0aCI6InJvbGUifQ.vYrrCSDUHOgXlZQwaaMnDqPuxUkRLkFlSNU5NnxwT_s'
          ),
          'Content-Type': 'application/json',
        }),
      };
      const ee = (function() {
        const e = Object(b.a)(
          h.a.mark(function e(t, n) {
            let a;
            return h.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), fetch(t, n);
                  case 2:
                    return (
                      (a = e.sent),
                      e.abrupt(
                        'return',
                        a.status >= 200 && a.status < 300
                          ? a.json()
                          : Promise.reject(new Error(a.statusText || a.status))
                      )
                    );
                  case 4:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function(t, n) {
          return e.apply(this, arguments);
        };
      })();
      const te = (function() {
        const e = Object(b.a)(
          h.a.mark(function e(t) {
            let n;
            let a;
            return h.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = ''
                        .concat(W, '/')
                        .concat('conferences', '/')
                        .concat(t)),
                      (a = _({}, $, { method: 'GET' })),
                      e.abrupt('return', ee(n, a))
                    );
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function(t) {
          return e.apply(this, arguments);
        };
      })();
      const ne = (function() {
        const e = Object(b.a)(
          h.a.mark(function e(t) {
            let n;
            let a;
            return h.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = ''.concat(W, '/').concat('conferences')),
                      (a = _({}, $, { method: 'POST', body: t ? JSON.stringify(t) : null })),
                      e.abrupt('return', ee(n, a))
                    );
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function(t) {
          return e.apply(this, arguments);
        };
      })();
      const ae = (function() {
        const e = Object(b.a)(
          h.a.mark(function e(t) {
            let n;
            let a;
            return h.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = ''.concat(W, '/').concat('conferences')),
                      (a = _({}, $, { method: 'PUT', body: t ? JSON.stringify(t) : null })),
                      e.abrupt('return', ee(n, a))
                    );
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function(t) {
          return e.apply(this, arguments);
        };
      })();
      const re = (function(e) {
        function t(e) {
          let n;
          return (
            Object(r.a)(this, t),
            ((n = Object(c.a)(this, Object(i.a)(t).call(this, e))).theme = Object(y.a)()),
            (n.state = { conference: null, notificationMessage: null }),
            (n.closeNotification = n.closeNotification.bind(Object(v.a)(n))),
            (n.handleSubmit = n.handleSubmit.bind(Object(v.a)(n))),
            n
          );
        }
        return (
          Object(s.a)(t, e),
          Object(o.a)(t, [
            {
              key: 'componentDidMount',
              value: (function() {
                const e = Object(b.a)(
                  h.a.mark(function e() {
                    let t;
                    let n;
                    return h.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ((t = this.props.id)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt('return');
                            case 3:
                              return (e.prev = 3), (e.next = 6), te(t);
                            case 6:
                              (n = e.sent), this.setState({ conference: n }), (e.next = 13);
                              break;
                            case 10:
                              (e.prev = 10), (e.t0 = e.catch(3)), this.handleError(e.t0);
                            case 13:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[3, 10]]
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'closeNotification',
              value() {
                this.setState({ notificationMessage: null, notificationStatus: null });
              },
            },
            {
              key: 'handleSubmit',
              value: (function() {
                const e = Object(b.a)(
                  h.a.mark(function e(t) {
                    let n;
                    return h.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), ae(t);
                            case 3:
                              (n = e.sent),
                                (0, this.props.onUpdate)(n),
                                this.setState({
                                  conference: n,
                                  notificationMessage: O.a.t('common.dataSaved'),
                                  notificationStatus: 'success',
                                }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9), (e.t0 = e.catch(0)), this.handleError(e.t0);
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 9]]
                    );
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'handleError',
              value(e) {
                (0, this.props.onError)(e),
                  this.setState({
                    notificationMessage: O.a.t('errors.dataLoading'),
                    notificationStatus: 'error',
                  });
              },
            },
            {
              key: 'render',
              value() {
                const e = this.state;
                const t = e.notificationMessage;
                const n = e.notificationStatus;
                const a = e.conference;
                return f.a.createElement(
                  j.a,
                  { theme: this.theme },
                  f.a.createElement(T, { conference: a, onSubmit: this.handleSubmit }),
                  f.a.createElement(K, { status: n, message: t, onClose: this.closeNotification })
                );
              },
            },
          ]),
          t
        );
      })(l.PureComponent);
      re.defaultProps = { onError() {}, onUpdate() {} };
      const oe = re;
      const ce = (function(e) {
        function t(e) {
          let n;
          return (
            Object(r.a)(this, t),
            ((n = Object(c.a)(this, Object(i.a)(t).call(this, e))).theme = Object(y.a)()),
            (n.state = { notificationMessage: null }),
            (n.closeNotification = n.closeNotification.bind(Object(v.a)(n))),
            (n.handleSubmit = n.handleSubmit.bind(Object(v.a)(n))),
            n
          );
        }
        return (
          Object(s.a)(t, e),
          Object(o.a)(t, [
            {
              key: 'closeNotification',
              value() {
                this.setState({ notificationMessage: null, notificationStatus: null });
              },
            },
            {
              key: 'handleSubmit',
              value: (function() {
                const e = Object(b.a)(
                  h.a.mark(function e(t) {
                    let n;
                    return h.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), ne(t);
                            case 3:
                              (n = e.sent),
                                (0, this.props.onCreate)(n),
                                this.setState({
                                  notificationMessage: O.a.t('common.dataSaved'),
                                  notificationStatus: 'success',
                                }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9), (e.t0 = e.catch(0)), this.handleError(e.t0);
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 9]]
                    );
                  })
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'handleError',
              value(e) {
                (0, this.props.onError)(e),
                  this.setState({
                    notificationMessage: O.a.t('errors.dataLoading'),
                    notificationStatus: 'error',
                  });
              },
            },
            {
              key: 'render',
              value() {
                const e = this.state;
                const t = e.notificationMessage;
                const n = e.notificationStatus;
                return f.a.createElement(
                  j.a,
                  { theme: this.theme },
                  f.a.createElement(T, { onSubmit: this.handleSubmit }),
                  f.a.createElement(K, { status: n, message: t, onClose: this.closeNotification })
                );
              },
            },
          ]),
          t
        );
      })(l.PureComponent);
      ce.defaultProps = { onError() {}, onCreate() {} };
      const ie = ce;
      const se = n(170);
      const ue = { en: n(167) };
      function le(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      const fe = Object.keys(ue).reduce(function(e, t) {
        return (function(e) {
          for (let t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2
              ? le(n, !0).forEach(function(t) {
                  Object(a.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : le(n).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e, Object(a.a)({}, t, Object(a.a)({}, 'translation', ue[t])));
      }, {});
      const pe = O.a.t;
      const de = function(e) {
        !(function(e, t) {
          O.a.use(se.a).init({
            defaultNs: 'translation',
            interpolation: { escapeValue: !1 },
            resources: fe,
            lng: e,
            fallbackLng: t,
          });
        })(e, 'en'),
          (function(e) {
            const t = {
              mixed: {
                required(t) {
                  const n = t.path;
                  return e('validation.required', {
                    field: e('entities.<%= entityInstance %>.'.concat(n)),
                  });
                },
              },
            };
            P.setLocale(t);
          })(pe);
      };
      const me = (function(e) {
        function t() {
          return Object(r.a)(this, t), Object(c.a)(this, Object(i.a)(t).apply(this, arguments));
        }
        return (
          Object(s.a)(t, e),
          Object(o.a)(t, [
            {
              key: 'connectedCallback',
              value() {
                const e = this;
                const t = document.createElement('div');
                this.appendChild(t);
                const n = this.getAttribute('id');
                const r = this.getAttribute('locale');
                de(r);
                const o = 'conference.form.';
                const c = function(t, n) {
                  return function(r) {
                    const o = new CustomEvent(t, { detail: Object(a.a)({}, n, r) });
                    e.dispatchEvent(o);
                  };
                };
                const i = c(''.concat(o, 'createError'), 'error');
                const s = c(''.concat(o, 'updateError'), 'error');
                const u = c(''.concat(o, 'create'), 'item');
                const l = c(''.concat(o, 'update'), 'item');
                const p = n
                  ? f.a.createElement(oe, { id: n, onError: s, onUpdate: l }, null)
                  : f.a.createElement(ie, { onError: i, onCreate: u }, null);
                d.a.render(p, t);
              },
            },
          ]),
          t
        );
      })(Object(u.a)(HTMLElement));
      customElements.define('conference-form', me);
    },
  },
  [[181, 1, 2]],
]);
// # sourceMappingURL=main.66856f9a.chunk.js.map
