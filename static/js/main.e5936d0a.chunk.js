(this.webpackJsonpcompressorv2 = this.webpackJsonpcompressorv2 || []).push([
  [0],
  {
    110: function (e, t, s) {
      "use strict";
      s.r(t);
      var i = s(10),
        o = s.n(i),
        a = s(0),
        n = s.n(a),
        r = s(159),
        c = s(156),
        l = s(27),
        d = s(148),
        h = s(112),
        j = s(157),
        m = s(151),
        p = s(153),
        b = s(154),
        u = s(1),
        x = Object(d.a)({
          root: { maxWidth: 500, borderRadius: "20px" },
          media: {
            height: 250,
            objectFit: "contain",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            background: "#ECECEC",
          },
        });
      function g(e) {
        var t = x();
        return Object(u.jsx)(m.a, {
          className: t.root,
          children: Object(u.jsx)(p.a, {
            children: Object(u.jsx)(b.a, {
              component: "img",
              className: t.media,
              image: e.image,
              title: e.title,
              alt: e.alt,
            }),
          }),
        });
      }
      var y = s(163),
        O = s(69),
        f = s(158),
        v = s(155),
        w = Object(d.a)(function (e) {
          return {
            root: {
              display: "flex",
              "& > * + *": { marginLeft: e.spacing(2) },
            },
          };
        });
      function A() {
        var e = w();
        return Object(u.jsx)("div", {
          className: e.root,
          children: Object(u.jsx)(v.a, { style: { color: "#FC8B06" } }),
        });
      }
      var I = s(70),
        k = s(71),
        W = s(78),
        F = s(77),
        C = (function (e) {
          Object(W.a)(s, e);
          var t = Object(F.a)(s);
          function s() {
            return Object(I.a)(this, s), t.apply(this, arguments);
          }
          return (
            Object(k.a)(s, [
              {
                key: "componentDidMount",
                value: function () {
                  (window.adsbygoogle = window.adsbygoogle || []).push({});
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(u.jsx)("ins", {
                    className: "adsbygoogle",
                    style: { display: "block" },
                    "data-ad-client": "ca-pub-2406698245010515",
                    "data-ad-slot": this.props.slot,
                    "data-ad-format": "auto",
                    "data-full-width-responsive": "true",
                  });
                },
              },
            ]),
            s
          );
        })(a.Component),
        P = Object(d.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            paper: {
              padding: e.spacing(2),
              textAlign: "center",
              background: "#ECECEC",
              borderRadius: "20px",
            },
            logo: {
              align: "start",
              objectFit: "contain",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            },
            rules: {
              textAlign: "left",
              paddingLeft: "10px",
              borderRadius: "20px",
            },
            header: { height: "120px", minWidth: "316px" },
            grid: { backgroundColor: "red" },
          };
        });
      function T() {
        var e = Object(a.useState)(""),
          t = Object(l.a)(e, 2),
          s = t[0],
          i = t[1],
          o = Object(a.useState)(""),
          n = Object(l.a)(o, 2),
          r = n[0],
          d = n[1],
          m = Object(a.useState)(""),
          p = Object(l.a)(m, 2),
          b = p[0],
          x = p[1],
          v = Object(a.useState)(""),
          w = Object(l.a)(v, 2),
          I = w[0],
          k = w[1],
          W = Object(a.useState)(""),
          F = Object(l.a)(W, 2),
          T = F[0],
          U = F[1],
          B = Object(a.useState)(20 / 1024),
          N = Object(l.a)(B, 2),
          R = N[0],
          S = N[1],
          L = Object(a.useState)(""),
          G = Object(l.a)(L, 2),
          q = G[0],
          E = G[1],
          z = function (e) {
            e.preventDefault();
            var t,
              i = { maxSizeMB: R, useWebWorker: !0 };
            if (R >= T)
              return (
                E(""),
                alert("Enter size less than " + (1024 * T).toFixed(0) + "KB")
              );
            Object(O.a)(s, i).then(function (e) {
              console.log("else", R, T), (t = e);
              var s = URL.createObjectURL(t);
              x(s),
                E(""),
                document
                  .getElementById("compress button")
                  .scrollIntoView({ behavior: "smooth" });
            });
          };
        function D(e) {
          var t = e.target.value / 1024;
          S(t);
        }
        var J = P();
        return Object(u.jsx)("div", {
          className: J.root,
          children: Object(u.jsxs)(c.a, {
            maxWidth: "md",
            children: [
            //   Object(u.jsx)(j.a, {
            //     style: { margin: "5px 0px" },
                // children: Object(u.jsx)(C, { slot: "1452466980" }),
            //   }),
              Object(u.jsxs)(j.a, {
                container: !0,
                spacing: 3,
                children: [
                  Object(u.jsx)(j.a, {
                    item: !0,
                    xs: 12,
                    sm: 4,
                    id: "Upload Button",
                    children: Object(u.jsxs)(h.a, {
                      className: J.paper,
                      children: [
                        Object(u.jsx)("div", {
                          className: "compress",
                          children: Object(u.jsxs)("label", {
                            className: "custom-file-upload ",
                            children: [
                              "CUSTOM UPLOAD",
                              Object(u.jsx)("input", {
                                onChange: function (e) {
                                  return (function (e) {
                                    var t = e.target.files[0],
                                      s = t.size / 1024 / 1024;
                                    U(s),
                                      i(t),
                                      d(URL.createObjectURL(t)),
                                      k(t.name),
                                      document
                                        .getElementById("Upload Button")
                                        .scrollIntoView({ behavior: "smooth" });
                                  })(e);
                                },
                                type: "file",
                                accept: "image/*",
                              }),
                            ],
                          }),
                        }),
                        r
                          ? Object(u.jsx)(g, {
                              image: r,
                              title: "upload Image",
                              alt: "upload",
                            })
                          : Object(u.jsx)(g, {
                              image:
                                "data:image/png;base64,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",
                              title: "upload Image",
                              alt: "upload",
                            }),
                      ],
                    }),
                  }),
                  Object(u.jsx)(j.a, {
                    item: !0,
                    xs: 12,
                    sm: 4,
                    id: "compress button",
                    children: Object(u.jsxs)(h.a, {
                      className: J.paper,
                      children: [
                        r
                          ? Object(u.jsx)(y.a, {
                              style: { marginBottom: "10px" },
                              defaultValue: "20",
                              id: "outlined-basic",
                              onChange: D,
                              type: "number",
                              size: "small",
                              label: "Compression Size in KB",
                            })
                          : Object(u.jsx)(y.a, {
                              style: { marginBottom: "10px" },
                              defaultValue: "20",
                              disabled: !0,
                              id: "outlined-basic",
                              onChange: D,
                              type: "number",
                              size: "small",
                              label: "Compression Size in KB",
                            }),
                        r
                          ? Object(u.jsx)(f.a, {
                              style: {
                                background: "#FC8B06",
                                color: "white",
                                borderRadius: "20px",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                              },
                              variant: "contained",
                              color: "primary",
                              onClick: function (e) {
                                E("true"), z(e);
                              },
                              children: " Compress Image ",
                            })
                          : Object(u.jsx)(f.a, {
                              style: {
                                background: "#e0e0e0",
                                color: "#a8a8a8",
                                borderRadius: "20px",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                              },
                              variant: "contained",
                              color: "primary",
                              onClick: function (e) {
                                return z(e);
                              },
                              disabled: !0,
                              children: " Compress Image ",
                            }),
                        q
                          ? Object(u.jsx)("div", {
                              style: { display: "flex", float: "right" },
                              children: Object(u.jsx)(A, {}),
                            })
                          : Object(u.jsx)("div", {}),
                      ],
                    }),
                  }),
                  Object(u.jsx)(j.a, {
                    item: !0,
                    xs: 12,
                    sm: 4,
                    id: "Download image",
                    children: Object(u.jsxs)(h.a, {
                      className: J.paper,
                      children: [
                        b
                          ? Object(u.jsx)("div", {
                              className: "compress",
                              children: Object(u.jsx)("a", {
                                className: "custom-file-upload",
                                style: {
                                  background: "#FC8B06",
                                  color: "white",
                                  textDecoration: "none",
                                },
                                href: b,
                                download: I,
                                children: "DOWNLOAD IMAGE",
                              }),
                            })
                          : Object(u.jsx)("div", {
                              className: "compress",
                              children: Object(u.jsx)("a", {
                                href: b,
                                className: "custom-file-upload",
                                style: {
                                  background: "#e0e0e0",
                                  color: "#a8a8a8",
                                  textDecoration: "none",
                                },
                                children: "DOWNLOAD IMAGE",
                              }),
                            }),
                        b
                          ? Object(u.jsx)("a", {
                              href: b,
                              download: I,
                              children: Object(u.jsx)(g, {
                                image: b,
                                title: "Download Image",
                                alt: "download",
                              }),
                            })
                          : Object(u.jsx)(g, {
                              image:
                                "data:image/png;base64,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",
                              title: "Download Image",
                              alt: "download",
                            }),
                      ],
                    }),
                  }),
                ],
              }),
            //   Object(u.jsx)(j.a, {
            //     style: { marginTop: "5px" },
            //     // children: Object(u.jsx)(C, { slot: "4755549069" }),
            //   }),
            ],
          }),
        });
      }
      s(98);
      var U = s(42),
        B = s(76),
        N = s(164),
        R = s(55),
        S = s.n(R),
        L = s(72),
        G = s.n(L);
      function q() {
        return Object(u.jsxs)("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
          children: [
            Object(u.jsx)("h1", {
              className: "mainHead",
              style: { marginTop: "9px" },
              children: Object(u.jsx)("a", {
                href: "/",
                children: "COMPRESS THE IMAGE",
              }),
            }),
            Object(u.jsx)(S.a, {
              variant: "popover",
              popupId: "demo-popup-menu",
              children: function (e) {
                return Object(u.jsxs)(n.a.Fragment, {
                  children: [
                    Object(u.jsx)(
                      f.a,
                      Object(U.a)(
                        Object(U.a)({}, Object(R.bindTrigger)(e)),
                        {},
                        { children: Object(u.jsx)(G.a, {}) }
                      )
                    ),
                    Object(u.jsxs)(
                      B.a,
                      Object(U.a)(
                        Object(U.a)({}, Object(R.bindMenu)(e)),
                        {},
                        {
                          children: [
                            Object(u.jsx)(N.a, {
                              onClick: e.close,
                              children: Object(u.jsx)("a", {
                                href: "/about",
                                style: {
                                  textDecoration: "none",
                                  color: "#FC8B06",
                                },
                                children: "About",
                              }),
                            }),
                            Object(u.jsx)(N.a, {
                              onClick: e.close,
                              children: Object(u.jsx)("a", {
                                href: "/blogs",
                                style: {
                                  textDecoration: "none",
                                  color: "#FC8B06",
                                },
                                children: "Blogs",
                              }),
                            }),
                            Object(u.jsx)(N.a, {
                              onClick: e.close,
                              children: Object(u.jsx)("a", {
                                href: "#social",
                                style: {
                                  textDecoration: "none",
                                  color: "#FC8B06",
                                },
                                children: "Contact Us",
                              }),
                            }),
                          ],
                        }
                      )
                    ),
                  ],
                });
              },
            }),
          ],
        });
      }
      var E = function () {
          return Object(u.jsxs)("div", {
            children: [
              Object(u.jsxs)("div", {
                className: "navbarstyle",
                children: [
                  Object(u.jsx)("div", {
                    children: Object(u.jsx)("h1", {
                      className: "mainHead",
                      children: Object(u.jsx)("a", {
                        href: "/",
                        children: "COMPRESS THE IMAGE",
                      }),
                    }),
                  }),
                  Object(u.jsxs)("div", {
                    className: "navright",
                    children: [
                      Object(u.jsx)("h4", {
                        children: Object(u.jsx)("a", {
                          href: "/about",
                          children: "About",
                        }),
                      }),
                      Object(u.jsx)("h4", {
                        children: Object(u.jsx)("a", {
                          href: "/blogs",
                          children: "Blogs",
                        }),
                      }),
                      Object(u.jsx)("h4", {
                        children: Object(u.jsx)("a", {
                          href: "#social",
                          children: "Contact Us",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(u.jsx)("div", {
                className: "hideMe",
                children: Object(u.jsx)(q, {}),
              }),
            ],
          });
        },
        z = s(160);
      s(46);
      function D() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(c.a, {
              className: "mainContentStyle",
              children: Object(u.jsx)(z.a, {
                component: "div",
                children: Object(u.jsx)("div", {
                  className: "main-content",
                  children: Object(u.jsx)("div", {
                    children: Object(u.jsxs)("p", {
                      className: "main-content-para",
                      children: [
                        "This ",
                        Object(u.jsx)("span", {
                          className: "spanBold",
                          children: "Online Image Compressor",
                        }),
                        " (size reducing) tool is best to use  because",
                        Object(u.jsx)("span", {
                          className: "spanBold",
                          children: " we don't store any images ",
                        }),
                        " that you upload/compress in our website.",
                        Object(u.jsxs)("span", {
                          className: "cutWord",
                          children: [
                            " It also uses a combination of best optimization and modern compression techniques to ",
                            Object(u.jsx)("span", {
                              className: "spanBold",
                              children:
                                "compress the JPG, JPEG, PNG, WEBP, ICO and GIF ",
                            }),
                            "images to the required size without compromising the quality.",
                          ],
                        }),
                        Object(u.jsxs)("span", {
                          className: "displayMobile",
                          children: [
                            " We compress ",
                            Object(u.jsx)("span", {
                              children: "JPG, JPEG, PNG, WEBP, ICO and GIF",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var J = s(73),
        Q = s.n(J),
        Y = s(74),
        M = s.n(Y),
        K = s(75),
        Z = s.n(K);
      var V = function (e) {
        return Object(u.jsx)("footer", {
          children: Object(u.jsxs)("div", {
            className: "App",
            id: "social",
            style: {
              position: e.position,
              bottom: "0",
              width: "100%",
              padding: "10px",
            },
            children: [
              Object(u.jsx)("h3", { children: "Contact Us" }),
              Object(u.jsx)("a", {
                target: "_blank",
                className: "icons",
                rel: "noreferrer",
                href: "https://www.facebook.com/thinangroups/",
                children: Object(u.jsx)(Q.a, {
                  color: "primary",
                  style: { height: "45px", width: "45px" },
                }),
              }),
              Object(u.jsx)("a", {
                target: "_blank",
                rel: "noreferrer",
                className: "icons",
                href: "https://www.instagram.com/thinan_groups/",
                children: Object(u.jsx)(M.a, {
                  color: "secondary",
                  style: { height: "45px", width: "45px" },
                }),
              }),
              Object(u.jsx)("a", {
                target: "_blank",
                rel: "noreferrer",
                className: "icons",
                href: "mailTo:thinangroups@gmail.com",
                children: Object(u.jsx)(Z.a, {
                  style: { color: "orange", height: "45px", width: "45px" },
                }),
              }),
              Object(u.jsxs)("div", {
                children: [
                  Object(u.jsx)("a", {
                    target: "_blank",
                    href: "/privacy-policy",
                    children: "Privacy-Policy",
                  }),
                  " - ",
                  Object(u.jsx)("a", {
                    target: "_blank",
                    href: "/terms-and-conditions",
                    children: "Terms and Conditions",
                  }),
                ],
              }),
              Object(u.jsx)("div", {
                children: Object(u.jsx)("p", {
                  style: { display: "inline", padding: "10px" },
                  children: "\xa9 - 2021  Copyrights by ThinanGroups",
                }),
              }),
            ],
          }),
        });
      };
      function X() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(c.a, {
              maxWidth: "xl",
              className: "mainContentStyle",
              children: Object(u.jsxs)("div", {
                className: "rules-main main-content",
                children: [
                  Object(u.jsx)("h2", {
                    style: { marginBottom: "0px" },
                    children: "Steps to follow:",
                  }),
                  Object(u.jsxs)("ul", {
                    className: "rules-point main-content-para",
                    style: { marginLeft: "0px" },
                    children: [
                      Object(u.jsx)("li", {
                        children: " Click the custom upload button.",
                      }),
                      Object(u.jsx)("li", {
                        children:
                          " The file explorer appears. Browse the folder where the image to be upload is present, click the image  and click ok",
                      }),
                      Object(u.jsx)("li", {
                        children:
                          " After the image is uploaded, the image appears on the image space provided above.",
                      }),
                      Object(u.jsx)("li", {
                        children:
                          " Now enter the size(in KB), the image to be compressed in the space provided.",
                      }),
                      Object(u.jsx)("li", {
                        children:
                          " Click the compress button. The compressed image now appears in the given section.",
                      }),
                      Object(u.jsx)("li", {
                        children:
                          " Click the download button provided. Now the compressed image is successfully downloaded.",
                      }),
                      "Note: compresstheimage.com compress JPEG, JPG, PNG, GIF, ICO and WEBP",
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      s(47);
      function H() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(c.a, {
              maxWidth: "md",
              className: "kadhaiMainContainer",
              children: Object(u.jsxs)("div", {
                className: "rules-main",
                children: [
                  Object(u.jsx)("h2", {
                    className: "kadhaiHeading",
                    children: "Why do we Compress images?",
                  }),
                  Object(u.jsxs)("p", {
                    className: "rules-point kadhai",
                    children: [
                      Object(u.jsxs)("li", {
                        children: [
                          " We compress the image for various reasons. One the most important reason for compressing the image is to ",
                          Object(u.jsx)("b", { children: "reduce the space" }),
                          ". Compressing images are know in various forms like reducing image  size, optimizing the image. Most of the websites around the world uses different compression techniques or size reducing technique to improve the site's performance. They first take the original image and reduce the size of the image(in kb) for best loading performance. By reducing the size the loading performance is increased. Though many effective compression techniques are used the websites may still lag in performance where there is a requirement of many images. ",
                        ],
                      }),
                      Object(u.jsxs)("li", {
                        children: [
                          "In simple terms to describe why image compression is used. We have a memory card which has a space of 32GB. This memory card can hold 32,768 images of size (1MB). If we reduce the size by half of the image i.e 0.5MB then the memory card can hold upto 65,536. When reducing the size or ",
                          Object(u.jsx)("b", {
                            children: "optimizing the image",
                          }),
                          ", will result in loss of quality but it does save more space. This is just an example for a small amount of space. Think about a ",
                          Object(u.jsx)("b", {
                            children: "multinational companies",
                          }),
                          " or",
                          Object(u.jsx)("b", {
                            children: " E-Commerce websites",
                          }),
                          ", they have million and billions of images which require many servers and it costs them more. By reducing the size they save millions of dollars.",
                        ],
                      }),
                    //   Object(u.jsx)(C, { slot: "4755549069" }),
                      Object(u.jsxs)("li", {
                        children: [
                          "You may also note that many companies when asking for job applications they limit the size of the image to be uploaded. They limit the size like ",
                          Object(u.jsx)("b", {
                            children:
                              "compress to 200kb / resize to 200kb , compress to 100kb / resize to 100kb",
                          }),
                          ". They mention the size just because to save their amount that is spent on the  servers which store the images. Mostly MNC's prefer different compression and there are also many companies who try to reduce the compression with maintaining the quality.There are two types of compression techniques for different images formats. By not knowing which compression method  to be used may lead to loss in quality of the image. They are lossless and lossy compression.",
                        ],
                      }),
                      Object(u.jsx)("li", {
                        children:
                          "In this busy world, compressing images plays the major role in optimizing the space and reduce the cost in storage by reducing the size of images/photos from 200kb to 50kb/10kb. In some cases only one or two images is to be compressed in such case, online image compressor's are used where the requirements are like compress to 200kb, compress to 50kb, compress to 100kb. ",
                      }),
                      Object(u.jsx)("li", {
                        children:
                          "Image online optimizer are used in those cases to save time and space. In this service we compresstheimage.com also provide you with optimizing images, resize image(size in kb). These are the tools which is used by students, teachers for their personal and official works. It is also used by some graduates who apply for jobs where the image is to be compressed for required size. Optimized images places major role in space where as different image compression techniques places a vital role in it by mainting the quality. These are usually called by different names they are Web image optimizer, Image online compress, optimizer Online, image compression and image optimizer.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function _() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(c.a, {
              maxWidth: "md",
              className: "kadhaiMainContainer",
              children: Object(u.jsxs)("div", {
                className: "rules-main",
                children: [
                  Object(u.jsx)("h2", {
                    className: "kadhaiHeading",
                    children: "Different types of image formats:",
                  }),
                  Object(u.jsxs)("p", {
                    className: "rules-point kadhai",
                    children: [
                      Object(u.jsxs)("li", {
                        children: [
                          " ",
                          Object(u.jsx)("b", { children: "GIF:  " }),
                          Object(u.jsx)("br", {}),
                          Object(u.jsx)("p", {
                            style: { margin: "0px", textIndent: "100px" },
                            children:
                              "Graphics Interchange Format(GIF)  is a bitmap image format  that supports 8 bits per pixel, that is an image can have 256 distinct colors. One of the major advantage of using GIF is it gives animated formats of image. It does not have sounds, it has only animated images. This type of image can be compressed by using Lossless data compression technique which reduce the size without affecting the quality of the image.",
                          }),
                        ],
                      }),
                      Object(u.jsxs)("li", {
                        children: [
                          " ",
                          Object(u.jsx)("b", { children: "JPEG: " }),
                          Object(u.jsx)("br", {}),
                          Object(u.jsx)("p", {
                            style: { margin: "0px", textIndent: "100px" },
                            children:
                              "JPEG stands for Joint Photographic Experts Groups. This image format is widely used all over the world. This is famous for its popularity and it also supports in every system. These can also be compressed using lossy compression technique which can easily be compressed to the required size with maximum attain of the quality.",
                          }),
                        ],
                      }),
                    //   Object(u.jsx)(C, { slot: "4755549069" }),
                      Object(u.jsxs)("li", {
                        children: [
                          " ",
                          Object(u.jsx)("b", { children: "PNG:  " }),
                          Object(u.jsx)("br", {}),
                          Object(u.jsx)("p", {
                            style: { margin: "0px", textIndent: "100px" },
                            children:
                              "PNG means Portable Network Graphics. This image has a special ability to be invisible ie where there is no image and it may have white spaces in other image formats where as this image becomes transparent. This is used to give best UI designs where the images can adapt to the themes the user want, Like dark mode or lite mode. Most of the logos are PNG file format.",
                          }),
                        ],
                      }),
                      Object(u.jsxs)("li", {
                        children: [
                          " ",
                          Object(u.jsx)("b", { children: "WEBP:" }),
                          Object(u.jsx)("br", {}),
                          Object(u.jsx)("p", {
                            style: { margin: "0px", textIndent: "100px" },
                            children:
                              "WEBP is modern image format that supports transparency as PNG and also gives the effect of JPEG. Most of the websites now started to use WEBP format because it gives same quality as in much lower in size.  WebP is still not supported by most of the browsers, many feedbacks are raised to include webp as a supporting image format by website developers.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function $() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(E, {}),
            Object(u.jsx)(D, {}),
            Object(u.jsx)(c.a, {
              maxWidth: "xl",
              children: Object(u.jsx)(T, {}),
            }),
            Object(u.jsx)(X, {}),
            // Object(u.jsx)(c.a, {
            //   maxWidth: "md",
            //   children: Object(u.jsx)(C, { slot: "7900942379" }),
            // }),
            Object(u.jsx)(H, {}),
            Object(u.jsx)(_, {}),
            Object(u.jsx)(V, { position: "relative" }),
          ],
        });
      }
      var ee = s(11);
      function te() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsxs)(c.a, {
              maxWidth: "md",
              style: { background: "white" },
              children: [
                Object(u.jsxs)("div", {
                  className: "rules-main",
                  children: [
                    Object(u.jsx)("h1", {
                      style: { marginBottom: "0px" },
                      children: "Error : Page not found",
                    }),
                    Object(u.jsxs)("p", {
                      style: { textIndent: "50px" },
                      children: [
                        "Click here for ",
                        Object(u.jsx)("a", {
                          href: "/",
                          children: "Compresstheimage's homepage",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(u.jsx)(V, {}),
              ],
            }),
            // Object(u.jsx)(c.a, {
            //   maxWidth: "md",
            //   children: Object(u.jsx)(C, { slot: "4755549069" }),
            // }),
          ],
        });
      }
      function se() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(E, {}),
            Object(u.jsxs)(c.a, {
              maxWidth: "md",
              style: { marginTop: "30px", position: "relative" },
              children: [
                Object(u.jsxs)("div", {
                  className: "rules-main",
                  children: [
                    Object(u.jsx)("h1", {
                      style: { marginBottom: "10px" },
                      children: "About Us:",
                    }),
                    Object(u.jsx)("p", {
                      style: { textIndent: "50px" },
                      children:
                        "Compress The Image is the product of Thinan groups. Thinan Groups was started by group of young entrepreneurs because we need to solve the problems that is occurring in our day to day life. That's why we started this Thinan Groups which is started on 2020 during the pandemic. We faced many failures and we even closed the project and loose the confidence of building own websites. Then again we started during 2021 and successfully launched our website Compresstheimage.com which is now available worldwide. After our first launch our journey has started with many challenges where we learnt much about online and what should be done to have a successful business model. Now we are in towards developing many sites models to solve the problems that are faced by customers throughout the world. You can also email us to thinangroups@gmail.com. We value our users/customers suggestion.",
                    }),
                  ],
                }),
                // Object(u.jsx)(C, { slot: "4755549069" }),
              ],
            }),
            Object(u.jsx)(V, { position: "sticky" }),
          ],
        });
      }
      function ie() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(E, {}),
            Object(u.jsxs)(c.a, {
              maxWidth: "md",
              style: { background: "white", marginTop: "10px" },
              children: [
                // Object(u.jsx)(C, { slot: "4755549069" }),
                Object(u.jsx)("h2", {
                  children: "Privacy Policy for Compress The Image",
                }),
                Object(u.jsxs)("p", {
                  children: [
                    "At Compress The Image, accessible from ",
                    Object(u.jsx)("a", {
                      href: "https://compresstheimage.com/",
                      children: "https://compresstheimage.com/",
                    }),
                    ", one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Compress The Image and how we use it.",
                  ],
                }),
                Object(u.jsxs)("p", {
                  children: [
                    "If you have additional questions or require more information about our Privacy Policy, do not hesitate to Contact through email at ",
                    Object(u.jsx)("b", { children: "thinangroups@gmail.com" }),
                  ],
                }),
                // Object(u.jsx)(C, { slot: "4755549069" }),
                Object(u.jsx)("h2", { children: "Log Files" }),
                Object(u.jsx)("p", {
                  children:
                    "Compress The Image follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.",
                }),
                Object(u.jsx)("h2", { children: "Cookies and Web Beacons" }),
                Object(u.jsx)("p", {
                  children:
                    "Like any other website, Compress The Image uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
                }),
                Object(u.jsx)("h2", {
                  children: "Google DoubleClick DART Cookie",
                }),
                Object(u.jsxs)("p", {
                  children: [
                    "Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL \u2013 ",
                    Object(u.jsx)("a", {
                      href: "https://policies.google.com/technologies/ads",
                      children: "https://policies.google.com/technologies/ads",
                    }),
                  ],
                }),
                // Object(u.jsx)(C, { slot: "4755549069" }),
                Object(u.jsx)("h2", { children: "Privacy Policies" }),
                Object(u.jsxs)("p", {
                  children: [
                    "You may consult this list to find the Privacy Policy for each of the advertising partners of Compress The Image. Our Privacy Policy was created with the help of the ",
                    Object(u.jsx)("a", {
                      href: "https://webbeast.in",
                      children: "GDPR Privacy Policy Generator",
                    }),
                  ],
                }),
                Object(u.jsx)("p", {
                  children:
                    "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Compress The Image, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.",
                }),
                Object(u.jsx)("p", {
                  children:
                    "Note that Compress The Image has no access to or control over these cookies that are used by third-party advertisers.",
                }),
                // Object(u.jsx)(C, { slot: "4755549069" }),
                Object(u.jsx)("h2", {
                  children: "Third Pary Privacy Policies",
                }),
                Object(u.jsx)("p", {
                  children:
                    "Compress The Image's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.",
                }),
                Object(u.jsx)("p", {
                  children:
                    "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?",
                }),
                // Object(u.jsx)(C, { slot: "4755549069" }),
                Object(u.jsx)("h2", { children: "Children's Information" }),
                Object(u.jsx)("p", {
                  children:
                    "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
                }),
                Object(u.jsx)("p", {
                  children:
                    "Compress The Image does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records.",
                }),
                // Object(u.jsx)(C, { slot: "4755549069" }),
                Object(u.jsx)("h2", { children: "Online Privacy Policy Only" }),
                Object(u.jsx)("p", {
                  children:
                    "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Compress The Image. This policy is not applicable to any information collected offline or via channels other than this website.",
                }),
                Object(u.jsx)("h2", { children: "Consent" }),
                Object(u.jsx)("p", {
                  children:
                    "By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.",
                }),
                // Object(u.jsx)(C, { slot: "4755549069" }),
              ],
            }),
            Object(u.jsx)(V, {}),
          ],
        });
      }
      function oe() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(E, {}),
            Object(u.jsxs)(c.a, {
              maxWidth: "md",
              style: { background: "white", marginTop: "10px" },
              children: [
                // Object(u.jsx)(C, { slot: "4755549069" }),
                Object(u.jsxs)("div", {
                  className: "rules-main",
                  children: [
                    // Object(u.jsx)(C, { slot: "4755549069" }),
                    Object(u.jsx)("h1", {
                      style: { marginBottom: "20px" },
                      children: "Terms and Conditions:",
                    }),
                    Object(u.jsxs)("p", {
                      children: [
                        Object(u.jsx)("h2", {
                          children: "Personal identification information",
                        }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children:
                            "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, respond to a survey and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, Users may, however, visit our Site anonymously.",
                        }),
                        // Object(u.jsx)(C, { slot: "4755549069" }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children:
                            "We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.",
                        }),
                        Object(u.jsx)("h2", {
                          children: "Non-personal identification information",
                        }),
                        // Object(u.jsx)(C, { slot: "4755549069" }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children:
                            "We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.",
                        }),
                        Object(u.jsx)("h2", {
                          children: "Web browser cookies",
                        }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children:
                            'Our Site may use "cookies" to enhance User experience. User\'s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.',
                        }),
                        Object(u.jsx)("h2", {
                          children: "How we use collected information",
                        }),
                        Object(u.jsxs)("p", {
                          style: { textIndent: "50px" },
                          children: [
                            "Thinan Groups collects and uses Users personal information for the following purposes:",
                            // Object(u.jsx)(C, { slot: "4755549069" }),
                            Object(u.jsx)("li", {
                              children: "To send periodic emails",
                            }),
                            Object(u.jsx)("li", {
                              children:
                                "The email address Users provide for order processing, will only be used to send them information and updates pertaining to their order. It may also be used to respond to their inquiries, and/or other requests or questions. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.",
                            }),
                          ],
                        }),
                        // Object(u.jsx)(C, { slot: "4755549069" }),
                        Object(u.jsx)("h2", {
                          children: "How we protect your information",
                        }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children:
                            "We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.",
                        }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children:
                            'Google Adsense Some of the ads may be served by Google. Google\\\'s use of the DART cookie enables it to serve ads to Users based on their visit to our Site and other sites on the Internet. DART uses "non personally identifiable information" and does NOT track personal information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at http://www.google.com/privacy_ads.html',
                        }),
                        // Object(u.jsx)(C, { slot: "4755549069" }),
                        Object(u.jsx)("h2", {
                          children: "Changes to this privacy policy",
                        }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children:
                            "Thinan Groups has the discretion to update this privacy policy at any time. When we do, . We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.",
                        }),
                        // Object(u.jsx)(C, { slot: "4755549069" }),
                        Object(u.jsx)("h2", {
                          children: "Your acceptance of these terms",
                        }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children:
                            "By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.",
                        }),
                        // Object(u.jsx)(C, { slot: "4755549069" }),
                        Object(u.jsx)("h2", { children: "Contacting us" }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children:
                            "If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:",
                        }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children: "Thinan Groups",
                        }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children: "https://compresstheimage.com",
                        }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children: "Sivanthi nagar, Tenkasi",
                        }),
                        Object(u.jsx)("p", {
                          style: { textIndent: "50px" },
                          children: " thinangroups@gmail.com",
                        }),
                      ],
                    }),
                  ],
                }),
                // Object(u.jsx)(C, { slot: "4755549069" }),
              ],
            }),
            Object(u.jsx)(V, {}),
          ],
        });
      }
      var ae = s(162),
        ne = s(161),
        re = Object(d.a)({
          root: { maxWidth: 290, marginBottom: 20, marginRight: 20 },
          media: { maxHeight: 200, maxWidth: 290, objectFit: "contain" },
        });
      function ce(e) {
        var t = re();
        return Object(u.jsx)("a", {
          href: e.link,
          style: { textDecoration: "none" },
          children: Object(u.jsxs)(m.a, {
            className: t.root,
            children: [
              Object(u.jsxs)(p.a, {
                children: [
                  Object(u.jsx)("img", {
                    className: t.media,
                    src: e.image,
                    alt: e.heading,
                  }),
                  Object(u.jsxs)(ne.a, {
                    children: [
                      Object(u.jsx)(z.a, {
                        gutterBottom: !0,
                        variant: "h5",
                        component: "h2",
                        children: e.heading,
                      }),
                      Object(u.jsx)(z.a, {
                        variant: "body2",
                        color: "textSecondary",
                        component: "p",
                        children: e.kathai,
                      }),
                    ],
                  }),
                ],
              }),
              Object(u.jsx)(ae.a, {
                children: Object(u.jsx)(f.a, {
                  size: "small",
                  color: "primary",
                  href: e.link,
                  children: "Read More",
                }),
              }),
            ],
          }),
        });
      }
      function le() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(E, {}),
            Object(u.jsxs)(c.a, {
              maxWidth: "md",
              style: { marginTop: "40px", position: "relative" },
              children: [
                // Object(u.jsx)(C, { slot: "4755549069" }),
                Object(u.jsxs)("div", {
                  className: "blogsView",
                  children: [
                    Object(u.jsx)(ce, {
                      image:
                        "https://cdn.kastatic.org/ka-perseus-images/cdaa3bfc074058fe11e9fd6dad9ae3f419359372.svg",
                      heading: "Why Do We Compress Images ?",
                      kathai:
                        "We compress the image for various reasons. One the most important reason for\r compressing the image is to reduce the space. Compressing images forms like  . . . ",
                      link: "/why-do-we-compress-images",
                    }),
                    Object(u.jsx)(ce, {
                      image:
                        "https://cdn.mos.cms.futurecdn.net/TdaG9Gex57AHnRZG79wYKT-970-80.jpg.webp",
                      heading: "Different types of image formats",
                      kathai:
                        "GIF: Graphics Interchange Format(GIF)  is a bitmap image format  that supports\r 8 bits per pixel, that is an image can have 256 distinct colors. One of the major . . . ",
                      link: "/different-types-of-image-formats",
                    }),
                  ],
                }),
                // Object(u.jsx)(C, { slot: "4755549069" }),
              ],
            }),
            Object(u.jsx)(V, { position: "sticky" }),
          ],
        });
      }
      function de() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(E, {}),
            // Object(u.jsx)(C, { slot: "4755549069" }),
            Object(u.jsx)(H, {}),
            // Object(u.jsx)(C, { slot: "4755549069" }),
            Object(u.jsx)(V, { position: "sticky" }),
          ],
        });
      }
      function he() {
        return Object(u.jsxs)(n.a.Fragment, {
          children: [
            Object(u.jsx)(r.a, {}),
            Object(u.jsx)(E, {}),
            // Object(u.jsx)(C, { slot: "4755549069" }),
            Object(u.jsx)(_, {}),
            // Object(u.jsx)(C, { slot: "4755549069" }),
            Object(u.jsx)(V, { position: "sticky" }),
          ],
        });
      }
      var je = function () {
          return Object(u.jsx)("main", {
            style: { background: "#FFFFF0", color: "#353839" },
            children: Object(u.jsxs)(ee.c, {
              children: [
                Object(u.jsx)(ee.a, { path: "/", component: $, exact: !0 }),
                Object(u.jsx)(ee.a, { path: "/about", component: se }),
                Object(u.jsx)(ee.a, { path: "/blogs", component: le }),
                Object(u.jsx)(ee.a, {
                  path: "/why-do-we-compress-images",
                  component: de,
                }),
                Object(u.jsx)(ee.a, {
                  path: "/different-types-of-image-formats",
                  component: he,
                }),
                Object(u.jsx)(ee.a, { path: "/privacy-policy", component: ie }),
                Object(u.jsx)(ee.a, {
                  path: "/terms-and-conditions",
                  component: oe,
                }),
                Object(u.jsx)(ee.a, { component: te }),
              ],
            }),
          });
        },
        me = function (e) {
          e &&
            e instanceof Function &&
            s
              .e(3)
              .then(s.bind(null, 165))
              .then(function (t) {
                var s = t.getCLS,
                  i = t.getFID,
                  o = t.getFCP,
                  a = t.getLCP,
                  n = t.getTTFB;
                s(e), i(e), o(e), a(e), n(e);
              });
        },
        pe = s(54),
        be = document.getElementById("root");
      be.hasChildNodes()
        ? o.a.hydrate(
            Object(u.jsx)(pe.a, { children: Object(u.jsx)(je, {}) }),
            be
          )
        : o.a.render(
            Object(u.jsx)(pe.a, { children: Object(u.jsx)(je, {}) }),
            be
          ),
        me();
    },
    46: function (e, t, s) {},
    47: function (e, t, s) {},
    98: function (e, t, s) {},
  },
  [[110, 1, 2]],
]);
//# sourceMappingURL=main.e5936d0a.chunk.js.map
