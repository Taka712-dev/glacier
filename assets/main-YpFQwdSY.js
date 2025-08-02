import {
    d as st,
    e as N,
    y as U,
    F as nt,
    D as Ld,
    o as B,
    A as St,
    B as Ct,
    f as b,
    _ as ft,
    b as ee,
    G as kt,
    H as qt,
    m as qo,
    z as Zn,
    C as Vt,
    q as Mt,
    x as Y,
    k as Pd,
    g as va,
    c as Wm,
    u as Hi,
    T as Um,
    U as Ym,
    J as xi,
    K as Xm,
    I as Zm
} from "./units-C_Ccm06b.js";
import {
    H as qm,
    F as Km,
    B as Ft,
    _ as jm,
    e as Qm,
    f as Jm,
    h as t_,
    i as ef
} from "./utils-DIODJSnO.js";
import {
    u as e_,
    c as r_,
    b as i_
} from "./vue-router-DrnZ-mwW.js";
const n_ = r => (St("data-v-40460f83"), r = r(), Ct(), r),
    a_ = n_(() => b("div", {
        class: "fixed left-0 top-0 right-0 h-screen z-[-1]"
    }, [b("div", {
        id: "stars"
    }), b("div", {
        id: "stars2"
    }), b("div", {
        id: "stars3"
    })], -1)),
    o_ = st({
        __name: "App",
        setup(r) {
            return (t, e) => {
                const i = Ld("router-view");
                return B(), N(nt, null, [a_, U(qm), U(i), U(Km)], 64)
            }
        }
    }),
    s_ = ft(o_, [
        ["__scopeId", "data-v-40460f83"]
    ]),
    l_ = "/assets/networks-AuU-og3T.webp",
    u_ = "/assets/topshadow-DuQtW1NH.svg",
    c_ = "/assets/whats-lb-CxcSBofr.webp",
    f_ = "/assets/whats-tr-C0QUCiyD.webp",
    h_ = "/assets/whats-DbV5btHk.webp",
    v_ = r => (St("data-v-f2719158"), r = r(), Ct(), r),
    d_ = {
        class: "player-wrap"
    },
    p_ = v_(() => b("div", {
        class: "player-video"
    }, [b("video", {
        autoplay: "",
        controls: "",
        src: "https://ob-public-bkt.s3.ap-northeast-1.amazonaws.com/www-res/medias/glacier-promo-0504.mp4"
    })], -1)),
    g_ = st({
        __name: "VideoPlayer",
        emits: ["close"],
        setup(r, {
            emit: t
        }) {
            const e = t;

            function i() {
                e("close")
            }
            return (n, a) => (B(), N("div", d_, [b("div", {
                class: "player-mask",
                onClick: i
            }), p_]))
        }
    }),
    m_ = ft(g_, [
        ["__scopeId", "data-v-f2719158"]
    ]),
    kr = r => (St("data-v-64af7af2"), r = r(), Ct(), r),
    __ = {
        class: "relative flex flex-col items-center text-center pt-28 px-5 top-wrap"
    },
    y_ = Vt('<div class="flex items-center px-4 link-tag h-7 mt-12" data-v-64af7af2><span class="uppercase font-title text-xs md:text-sm tag-text whitespace-nowrap" data-v-64af7af2>VERIFIABLE &amp; TRUSTLESS AI NETWORK</span></div><div class="mt-2 text-3xl md:text-[64px] leading-[1.1em] font-display px-5" data-v-64af7af2><div data-v-64af7af2>Data-Centric Blockchain</div><div class="linear-text" data-v-64af7af2>Supercharge AI at Scale</div></div><div class="max-w-[800px] text-white/80 mt-4 text-sm md:text-xl px-5" data-v-64af7af2> Glacier Network is building a programmable, modular and scalable blockchain infrastructure for agents, models and datasets, supercharging AI at scale. </div>', 3),
    x_ = {
        class: "flex items-center justify-center gap-3 mt-8"
    },
    w_ = {
        href: "https://node.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    b_ = {
        href: "https://docs.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    S_ = kr(() => b("div", {
        class: "w-full shadow-box flex items-end justify-center mt-10 md:mt-0"
    }, [b("img", {
        src: l_,
        class: "w-full max-w-[1100px]"
    }), b("img", {
        src: u_,
        class: "absolute max-w-full bottom-[-80px] md:bottom-[-600px]"
    })], -1)),
    C_ = {
        class: "relative w-full max-w-7xl mx-auto px-5 md:px-0"
    },
    T_ = kr(() => b("img", {
        src: c_,
        class: "w-[300px] md:w-[366px] absolute left-[-100px] bottom-[-100px]"
    }, null, -1)),
    M_ = {
        class: "main-box flex flex-col-reverse md:flex-row items-center gap-8 justify-between px-6 md:px-12 py-8"
    },
    D_ = kr(() => b("img", {
        src: f_,
        class: "hidden md:block absolute top-0 right-0 w-[341px]"
    }, null, -1)),
    A_ = {
        class: "flex-1 text-left max-w-md"
    },
    I_ = kr(() => b("div", {
        class: "text-3xl md:text-5xl font-display"
    }, [b("div", null, "What is"), b("div", {
        class: "linear-text"
    }, "Glacier Network?")], -1)),
    L_ = kr(() => b("div", {
        class: "leading-[1.5em] mt-4 text-sm md:text-xl"
    }, [b("p", null, " Glacier empowers verifiable computing through GlacierDB, GlacierAI and GlacierDA. "), b("p", {
        class: "mt-6"
    }, " Glacier provides the data-centric network to handle datasets seamlessly and effortlessly with GlacierDB and GlacierAI on top of Arweave, Filecoin, and Greenfield. GlacierDA addresses the need for off-chain verification and computing of GenAI and DePIN executed states. ")], -1)),
    P_ = {
        class: "mt-8 flex flex-col md:flex-row gap-5"
    },
    k_ = {
        href: "https://youtu.be/zfxURf0O8os",
        target: "_blank"
    },
    E_ = kr(() => b("span", null, "Demo in Terminal", -1)),
    R_ = {
        href: "https://youtu.be/b6GOxHS6El8",
        target: "_blank"
    },
    O_ = kr(() => b("span", null, "Demo in Browser", -1)),
    B_ = kr(() => b("img", {
        src: h_,
        class: "max-w-[612px] w-full"
    }, null, -1)),
    N_ = st({
        __name: "HomeTop",
        setup(r) {
            const t = ee(!1);
            return (e, i) => (B(), N(nt, null, [b("div", __, [y_, b("div", x_, [b("a", w_, [U(Ft, {
                "show-icon": ""
            }, {
                default: kt(() => [qt("Run Nodes")]),
                _: 1
            })]), b("a", b_, [U(Ft, null, {
                default: kt(() => [qt("How it works")]),
                _: 1
            })])]), S_]), b("div", C_, [T_, b("div", M_, [D_, b("div", A_, [I_, L_, b("div", P_, [b("a", k_, [U(Ft, {
                "show-icon": ""
            }, {
                default: kt(() => [E_]),
                _: 1
            })]), b("a", R_, [U(Ft, {
                "show-icon": ""
            }, {
                default: kt(() => [O_]),
                _: 1
            })])])]), B_])]), t.value ? (B(), qo(m_, {
                key: 0,
                onClose: i[0] || (i[0] = n => t.value = !1)
            })) : Zn("", !0)], 64))
        }
    }),
    F_ = ft(N_, [
        ["__scopeId", "data-v-64af7af2"]
    ]),
    $_ = "/assets/solution-1-DlTtnGZ1.png",
    z_ = "/assets/solution-2-cI5HaNqi.png",
    H_ = "/assets/solution-3-B4XhZWlm.png",
    Uu = r => (St("data-v-f8362b23"), r = r(), Ct(), r),
    G_ = {
        class: "px-5 mt-40 md:mt-48"
    },
    V_ = Uu(() => b("div", {
        class: "flex items-center justify-center"
    }, [b("div", {
        class: "capsule"
    }, "GLACIER PRODUCTS")], -1)),
    W_ = Uu(() => b("div", {
        class: "text-center text-2xl md:text-5xl font-display mt-6"
    }, [b("div", null, "Data-Centric Solution with"), b("div", {
        class: "linear-text"
    }, "Middleware Architecture")], -1)),
    U_ = {
        class: "max-w-7xl grid md:grid-cols-3 gap-6 mx-auto mt-12 md:mt-16"
    },
    Y_ = {
        class: "solution-item pt-8"
    },
    X_ = {
        class: "text-2xl md:text-3xl font-display leading-[1.3em]"
    },
    Z_ = {
        class: "linear-text"
    },
    q_ = {
        class: "max-w-[240px] text-gray-400 mt-4"
    },
    K_ = {
        class: "flex items-center justify-center gap-4 md:gap-6 w-full px-5"
    },
    j_ = Uu(() => b("div", {
        class: "flex-1"
    }, null, -1)),
    Q_ = ["src"],
    J_ = st({
        __name: "HomeSolution",
        setup(r) {
            const t = [{
                title: "GlacierAI",
                desc: "Data Ownership of AI",
                intro: "Chatbot-Bench and decentralized vector database built for AI",
                image: z_,
                links: [{
                    text: "Chatbot-Bench",
                    href: "/chatai"
                }, {
                    text: "VectorDB",
                    href: "/ai"
                }]
            }, {
                title: "GlacierDB",
                desc: "Database for AI ",
                intro: "Handle datasets seamlessly and effortlessly on permanent storages",
                image: $_,
                links: [{
                    text: "Arweave",
                    href: "/ar"
                }, {
                    text: "Greenfield",
                    href: "/bnb"
                }, {
                    text: "Filecoin",
                    href: "/filecoin"
                }]
            }, {
                title: "GlacierDA",
                desc: "Modular Design for AI",
                intro: "The first data availability layer integrating decentralized storages",
                image: H_,
                links: [{
                    text: "AI Data Layer is Coming Soon",
                    href: ""
                }]
            }];
            return (e, i) => (B(), N("div", G_, [V_, W_, b("div", U_, [(B(), N(nt, null, Mt(t, n => b("div", Y_, [b("div", X_, [b("div", null, Y(n.title), 1), b("div", Z_, Y(n.desc), 1)]), b("div", q_, Y(n.intro), 1), b("div", K_, [(B(!0), N(nt, null, Mt(n.links, a => (B(), qo(jm, {
                href: a.href,
                class: Pd(["flex items-center mt-6 h-8 md:h-10 px-5 text-xs md:text-sm link-tag", {
                    "hover:opacity-75": !!a.href
                }])
            }, {
                default: kt(() => [qt(Y(a.text), 1)]),
                _: 2
            }, 1032, ["href", "class"]))), 256))]), j_, b("img", {
                src: n.image,
                class: "w-full mt-5"
            }, null, 8, Q_)])), 64))])]))
        }
    }),
    ty = ft(J_, [
        ["__scopeId", "data-v-f8362b23"]
    ]),
    kd = r => (St("data-v-9c23f6cd"), r = r(), Ct(), r),
    ey = {
        class: "px-55 mt-36 md:mt-48"
    },
    ry = kd(() => b("div", {
        class: "flex items-center justify-center"
    }, [b("div", {
        class: "capsule"
    }, "Glacier Traction")], -1)),
    iy = kd(() => b("div", {
        class: "text-center text-2xl md:text-5xl font-display mt-6"
    }, [b("div", null, "Enabling Development"), b("div", {
        class: "linear-text"
    }, "Across Diverse User Bases")], -1)),
    ny = {
        class: "mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-5 gap-5 mt-10 md:mt-16 px-5"
    },
    ay = {
        class: "growth-item"
    },
    oy = {
        class: "text-base md:text-2xl font-boldtitle"
    },
    sy = {
        class: "text-sm md:text-base"
    },
    ly = st({
        __name: "HomeGrowth",
        setup(r) {
            const t = ee([{
                name: "Data Queries",
                value: "-"
            }, {
                name: "Transaction",
                value: "-"
            }, {
                name: "Collections",
                value: "-"
            }, {
                name: "Datasets",
                value: "-"
            }, {
                name: "Addresses",
                value: "-"
            }]);
            return va(async () => {
                const e = await Qm();
                t.value[0].value = "10Billion+", t.value[1].value = e.txOnChain.toLocaleString("en-us"), t.value[2].value = e.totalCollections.toLocaleString("en-us"), t.value[3].value = e.totalDatasets.toLocaleString("en-us"), t.value[4].value = e.totalAddress.toLocaleString("en-us")
            }), (e, i) => (B(), N("div", ey, [ry, iy, b("div", ny, [(B(!0), N(nt, null, Mt(t.value, n => (B(), N("div", ay, [b("div", oy, Y(n.value), 1), b("div", sy, Y(n.name), 1)]))), 256))])]))
        }
    }),
    uy = ft(ly, [
        ["__scopeId", "data-v-9c23f6cd"]
    ]),
    cy = "/assets/modular-big-D_pJn_10.webp",
    fy = {},
    hy = {
        class: "px-5 mt-36 md:mt-48"
    },
    vy = Vt('<div class="flex items-center justify-center"><div class="capsule">Glacier Architecture</div></div><div class="text-center text-3xl md:text-5xl font-display mt-6"><div>Building New Paradigm</div><div class="linear-text">In AI Data Infrastructure</div></div><img src="' + cy + '" class="max-w-[1064px] w-full mt-12 md:mt-16 mx-auto">', 3),
    dy = [vy];

function py(r, t) {
    return B(), N("div", hy, dy)
}
const gy = ft(fy, [
        ["render", py]
    ]),
    my = "/assets/tech-1-Bm90OiAH.webp",
    _y = "/assets/tech-2-0xN_gXDz.webp",
    yy = "/assets/tech-3-CwBv4BYI.webp",
    xy = "/assets/tech-4-BohImBmb.webp",
    Ed = r => (St("data-v-102f2aa0"), r = r(), Ct(), r),
    wy = {
        class: "px-5 mt-36 md:mt-48"
    },
    by = Ed(() => b("div", {
        class: "flex items-center justify-center"
    }, [b("div", {
        class: "capsule"
    }, "Glacier Technology")], -1)),
    Sy = Ed(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display mt-6"
    }, [b("div", null, "State-of-the-Art"), b("div", {
        class: "linear-text"
    }, "Technological Features for AI")], -1)),
    Cy = {
        class: "mx-auto max-w-7xl grid md:grid-cols-2 gap-8 mt-16"
    },
    Ty = {
        class: "tech-card p-7 md:p-10 md:pm-12"
    },
    My = ["src"],
    Dy = {
        class: "flex items-center h-8 md:h-10 px-5 text-xs md:text-sm link-tag hover:opacity-75"
    },
    Ay = {
        class: "text-2xl md:text-3xl mt-3"
    },
    Iy = {
        class: "text-sm md:text-base text-white/80 mt-3"
    },
    Ly = st({
        __name: "HomeTech",
        setup(r) {
            const t = [{
                icon: my,
                label: "TEE",
                title: "Trusted Execution Environments",
                desc: "Trusted Execution Environments (TEEs) represent a pivotal advancement in hardware-assisted confidential computing. Glacier utilizes TEE to conduct the inference process, safeguarding the intellectual property of machine learning models while ensuring the production of reliable and tamper-proof results."
            }, {
                icon: _y,
                label: "MPC",
                title: "Secure Multiparty Computation",
                desc: "Secure Multiparty Computation (MPC) is a cryptographic method enabling parties to jointly compute a function while keeping their inputs private. By leveraging MPC for AI model inference, Glacier enables the use of sensitive data to make powerful ML predictions while adhering to high privacy standards."
            }, {
                icon: yy,
                label: "FHE",
                title: "Fully Homomorphic Encryption",
                desc: "Fully Homomorphic Encryption (FHE) is a cryptographic technique enabling computation on encrypted data without ever needing to decrypt it. Utilizing FHE technology, Glacier processes vector data in a secure, encrypted form, ensuring the confidentiality of the data even during active use or manipulation."
            }, {
                icon: xy,
                label: "ZKP",
                title: "Zero-Knowledge Proofs",
                desc: "Zero-knowledge Proofs (ZKP) are layer2 scaling solutions that increase throughput by moving computation and state-storage off-chain. Glacier processes massive amounts of data in production to provide superior data services to users, with modularization and decentralization secured by ZKP."
            }];
            return (e, i) => (B(), N("div", wy, [by, Sy, b("div", Cy, [(B(), N(nt, null, Mt(t, n => b("div", Ty, [b("img", {
                src: n.icon
            }, null, 8, My), b("div", Dy, Y(n.label), 1), b("div", Ay, Y(n.title), 1), b("div", Iy, Y(n.desc), 1)])), 64))])]))
        }
    }),
    Py = ft(Ly, [
        ["__scopeId", "data-v-102f2aa0"]
    ]),
    ky = "/assets/trusted-mobile-NRK8r66l.webp",
    Ey = "/assets/trusted-pc-CGX_NXaA.webp",
    Ry = {},
    Oy = Vt('<div class="flex items-center justify-center mt-16" data-v-363ee11d><div class="capsule" data-v-363ee11d>Glacier Ecosystem</div></div><div class="text-center text-3xl md:text-5xl font-display mb-11 mt-6 px-10" data-v-363ee11d> Glacier AI-Powered Use Cases </div><div class="overflow-hidden w-full max-w-7xl mx-auto relative px-5 md:px-0" data-v-363ee11d><div class="logos-block" data-v-363ee11d><img src="' + ky + '" alt="" class="w-full md:hidden" data-v-363ee11d><img src="' + Ey + '" alt="" class="w-full hidden md:block" data-v-363ee11d></div></div>', 3);

function By(r, t) {
    return Oy
}
const Ny = ft(Ry, [
        ["render", By],
        ["__scopeId", "data-v-363ee11d"]
    ]),
    Fy = "/assets/chains-block-D-edO7VN.webp",
    Ca = "/assets/chains-C9ZCkRJE.png",
    $y = {},
    zy = {
        class: "w-full overflow-hidden absolute left-0 right-0 z-[-1]"
    },
    Hy = Vt('<div class="row scroll-to-left" data-v-9f885a39><img src="' + Ca + '" data-v-9f885a39><img src="' + Ca + '" data-v-9f885a39></div><div class="row mt-12 scroll-to-right" data-v-9f885a39><img src="' + Ca + '" data-v-9f885a39><img src="' + Ca + '" data-v-9f885a39></div>', 2),
    Gy = [Hy];

function Vy(r, t) {
    return B(), N("div", zy, Gy)
}
const Wy = ft($y, [
        ["render", Vy],
        ["__scopeId", "data-v-9f885a39"]
    ]),
    Uy = r => (St("data-v-7c5c53b0"), r = r(), Ct(), r),
    Yy = {
        class: "w-full flex items-center justify-center relative chains-wrap mt-40"
    },
    Xy = Uy(() => b("img", {
        src: Fy,
        alt: "",
        class: "relative"
    }, null, -1)),
    Zy = st({
        __name: "HomeChains",
        setup(r) {
            return (t, e) => (B(), N("div", Yy, [U(Wy), Xy]))
        }
    }),
    qy = ft(Zy, [
        ["__scopeId", "data-v-7c5c53b0"]
    ]),
    Ky = "/assets/code-B1FcWLbx.webp",
    jy = "data:image/svg+xml,%3csvg%20width='22'%20height='20'%20viewBox='0%200%2022%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.4091%2017.8409V16.1364C14.4091%2015.2322%2014.0499%2014.3651%2013.4106%2013.7258C12.7713%2013.0865%2011.9041%2012.7273%2011%2012.7273H5.03409C4.12994%2012.7273%203.26283%2013.0865%202.6235%2013.7258C1.98417%2014.3651%201.625%2015.2322%201.625%2016.1364V17.8409'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M8.017%209.31818C9.89979%209.31818%2011.4261%207.79188%2011.4261%205.90909C11.4261%204.0263%209.89979%202.5%208.017%202.5C6.13421%202.5%204.60791%204.0263%204.60791%205.90909C4.60791%207.79188%206.13421%209.31818%208.017%209.31818Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M15.2614%209.31807L16.9659%2011.0226L20.375%207.61353'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e",
    Qy = "data:image/svg+xml,%3csvg%20width='21'%20height='22'%20viewBox='0%200%2021%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.4301%2014.9436V6.97466C19.4298%206.6253%2019.3375%206.28217%2019.1627%205.9797C18.9879%205.67723%2018.7366%205.42606%2018.434%205.25138L11.4612%201.26691C11.1583%201.09205%2010.8148%201%2010.4651%201C10.1153%201%209.7718%201.09205%209.46894%201.26691L2.49612%205.25138C2.19356%205.42606%201.94226%205.67723%201.76742%205.9797C1.59258%206.28217%201.50036%206.6253%201.5%206.97466V14.9436C1.50036%2015.293%201.59258%2015.6361%201.76742%2015.9386C1.94226%2016.241%202.19356%2016.4922%202.49612%2016.6669L9.46894%2020.6514C9.7718%2020.8262%2010.1153%2020.9183%2010.4651%2020.9183C10.8148%2020.9183%2011.1583%2020.8262%2011.4612%2020.6514L18.434%2016.6669C18.7366%2016.4922%2018.9879%2016.241%2019.1627%2015.9386C19.3375%2015.6361%2019.4298%2015.293%2019.4301%2014.9436Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M5.98254%203.19946L10.4651%205.78937L14.9476%203.19946'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M5.98253%2018.719V13.5491L1.5%2010.9592'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M19.4302%2010.9592L14.9476%2013.5491V18.719'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M1.76892%205.93872L10.465%2010.9691L19.1611%205.93872'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M10.4651%2021.0001V10.9592'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e",
    Jy = "data:image/svg+xml,%3csvg%20width='20'%20height='22'%20viewBox='0%200%2020%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%207C14.9706%207%2019%205.65685%2019%204C19%202.34315%2014.9706%201%2010%201C5.02944%201%201%202.34315%201%204C1%205.65685%205.02944%207%2010%207Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M19%2011C19%2012.66%2015%2014%2010%2014C5%2014%201%2012.66%201%2011'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M1%204V18C1%2019.66%205%2021%2010%2021C15%2021%2019%2019.66%2019%2018V4'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e",
    t1 = {
        class: "px-5 mt-32 md:mt-48"
    },
    e1 = Vt('<div class="flex items-center justify-center"><div class="capsule">Glacier Toolkit</div></div><div class="text-center text-3xl md:text-5xl font-display mt-6"><div>Integrate GlacierAI</div><div class="linear-text">Easily and Seamlessly</div></div><div class="text-white/80 max-w-3xl text-center mx-auto text-sm md:text-base mt-4 md:mt-10"> Glacier DeVector bridges the gap between decentralized data storage and powerful AI ecosystems like LangChain, allowing users to effortlessly incorporate external context into their LLM interactions. </div>', 3),
    r1 = {
        class: "w-full max-w-7xl mx-auto relative flex flex-col md:flex-row gap-5 mt-8 md:mt-16"
    },
    i1 = b("div", {
        class: "flex-1 flex"
    }, [b("img", {
        src: Ky,
        class: "w-full max-w-[620px]"
    })], -1),
    n1 = {
        class: "flex-1 flex flex-col gap-5 text-black"
    },
    a1 = {
        class: "flex items-center p-5 md:p-7 rounded-[20px] md:rounded-[40px] bg-[#57FCFF] flex-1"
    },
    o1 = {
        class: "flex items-start gap-5"
    },
    s1 = {
        class: "w-[60px] h-[60px] bg-black flex items-center justify-center rounded-full"
    },
    l1 = ["src"],
    u1 = {
        class: "flex-1"
    },
    c1 = {
        class: "text-xl md:text-[30px]"
    },
    f1 = {
        class: "mt-2 md:mt-4 text-sm md:text-base"
    },
    Ko = st({
        __name: "HomeCode",
        setup(r) {
            const t = [{
                icon: jy,
                title: "Open Data Marketplace",
                desc: "Trade your data NFTs on a decentralized marketplace for secure and effective monetization. It emphasizes data sovereignty, resists censorship, and rewards data owners."
            }, {
                icon: Qy,
                title: "Verifiable Inference",
                desc: "Build an incentive layer to accelerate your inference process with techniques and protocols designed to ensure the integrity, privacy, and correctness of inference tasks."
            }, {
                icon: Jy,
                title: "Distributed Fine-tune",
                desc: "Train your customized generative AIs with your private data and fine-tune large models across multiple computing nodes independently while keeping humans in the loop."
            }];
            return (e, i) => (B(), N("div", t1, [e1, b("div", r1, [i1, b("div", n1, [(B(), N(nt, null, Mt(t, n => b("div", a1, [b("div", o1, [b("div", s1, [b("img", {
                src: n.icon
            }, null, 8, l1)]), b("div", u1, [b("div", c1, Y(n.title), 1), b("div", f1, Y(n.desc), 1)])])])), 64))])])]))
        }
    }),
    Rd = "/assets/backers-big-DSo-aprG.png",
    Od = "/assets/backers-small-Cx_cXrma.png",
    h1 = {},
    v1 = {
        class: "px-5 backers-wrap flex flex-col items-center mt-36 md:mt-52"
    },
    d1 = Vt('<div class="capsule" data-v-3a8d5072>Glacier Backers</div><div class="text-center text-3xl md:text-5xl font-display mt-6" data-v-3a8d5072><div data-v-3a8d5072>Unveiling the Forces</div><div class="linear-text" data-v-3a8d5072>Behind Glacier&#39;s Success</div></div><img src="' + Rd + '" class="w-full max-w-[1278px] mt-16 mb-44 hidden md:block" data-v-3a8d5072><img src="' + Od + '" class="w-full mt-16 md:hidden" data-v-3a8d5072>', 4),
    p1 = [d1];

function g1(r, t) {
    return B(), N("div", v1, p1)
}
const m1 = ft(h1, [
        ["render", g1],
        ["__scopeId", "data-v-3a8d5072"]
    ]),
    _1 = st({
        __name: "Home",
        setup(r) {
            return (t, e) => (B(), N(nt, null, [U(F_), U(ty), U(uy), U(gy), U(Py), U(qy), U(Ko), U(m1), U(Ny)], 64))
        }
    }),
    y1 = "/assets/bnb-logo-Cy68r6sm.svg",
    x1 = "/assets/backers-big-BHJQOaFL.png",
    w1 = "/assets/feature-1-DWCdO-xo.webp",
    b1 = "/assets/feature-2-BgSjtZno.webp",
    S1 = "/assets/feature-3-C2ljn594.webp",
    C1 = "/assets/feature-4-sp78HL7H.webp",
    Yu = r => (St("data-v-2c9a1b37"), r = r(), Ct(), r),
    T1 = {
        class: "banner-wrap"
    },
    M1 = Vt('<img src="' + y1 + '" class="w-32 h-32 md:w-auto md:h-auto mt-[180px] md:mt-[160px]" data-v-2c9a1b37><div class="flex items-center gap-2 p-1 pr-4 link-tag mt-8" data-v-2c9a1b37><div class="link-tag h-8 px-3 flex items-center" data-v-2c9a1b37>Powered by</div><span class="uppercase font-title text-sm" data-v-2c9a1b37>Greenfield</span></div><div class="text-center text-3xl md:text-[64px] leading-[1.1em] font-display mt-6" data-v-2c9a1b37><div data-v-2c9a1b37>Amplify Your</div><div data-v-2c9a1b37>Database within</div><div class="linear-text" data-v-2c9a1b37>BNB Chain Ecosystem</div></div>', 3),
    D1 = {
        class: "flex items-center justify-center gap-3 mt-5"
    },
    A1 = {
        href: "https://playground.bnb.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    I1 = {
        href: "https://scan.bnb.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    L1 = Yu(() => b("div", {
        class: "banner-bg"
    }, null, -1)),
    P1 = {
        class: "px-5"
    },
    k1 = Yu(() => b("div", {
        class: "flex items-center justify-center"
    }, [b("div", {
        class: "capsule"
    }, "Core Features")], -1)),
    E1 = Yu(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display mt-6"
    }, [b("div", null, "Elevating Your Database Experience"), b("div", {
        class: "linear-text"
    }, "in the BNB Chain Ecosystem")], -1)),
    R1 = {
        class: "max-w-7xl grid md:grid-cols-2 gap-6 mx-auto mt-16"
    },
    O1 = {
        class: "feature-item"
    },
    B1 = ["src"],
    N1 = {
        class: "capsule mt-5"
    },
    F1 = {
        class: "text-2xl md:text-3xl my-3"
    },
    $1 = {
        class: "text-white/80 text-sm md:text-base"
    },
    z1 = Vt('<div class="px-5 backers-wrap flex flex-col items-center mt-36 md:mt-52" data-v-2c9a1b37><div class="capsule" data-v-2c9a1b37>Key Backers</div><div class="text-center text-3xl md:text-5xl font-display mt-6" data-v-2c9a1b37><div data-v-2c9a1b37>Technology Behind Data Amplification</div><div class="linear-text" data-v-2c9a1b37>in the BNB Chain Ecosystem</div></div><img src="' + x1 + '" class="w-full max-w-[740px] mt-16 md:mb-44" data-v-2c9a1b37></div>', 1),
    H1 = st({
        __name: "BNB",
        setup(r) {
            const t = [{
                tag: "Harnessing Mighty Potential",
                title: "Powered by the BNB Ecosystem",
                desc: "By leveraging the extensive network,  Greenfield empowers users with a comprehensive and interconnected ecosystem.",
                image: w1
            }, {
                tag: "Unified Synergy",
                title: "Seamless Integration with BNB Chain",
                desc: "A relayer links the BNB Chain and Greenfield, providing a native Smart-Contract ecosystem for BNB chain DApps.",
                image: b1
            }, {
                tag: "Tailored Solutions, Endless Innovation",
                title: "Customize Permissions with Ease",
                desc: "With Data configuration, users can customize data and permissions, making fine-grained access control and data security a reality.",
                image: S1
            }, {
                tag: "Unrestricted Control",
                title: "Data-sovereign Ownership",
                desc: "With complete ownership and control over data assets, users have the ability to manage usage for financial gain.",
                image: C1
            }];
            return (e, i) => (B(), N(nt, null, [b("div", T1, [M1, b("div", D1, [b("a", A1, [U(Ft, {
                "show-icon": ""
            }, {
                default: kt(() => [qt("Playground")]),
                _: 1
            })]), b("a", I1, [U(Ft, null, {
                default: kt(() => [qt(" Explorer ")]),
                _: 1
            })])]), L1]), b("div", P1, [k1, E1, b("div", R1, [(B(), N(nt, null, Mt(t, n => b("div", O1, [b("img", {
                src: n.image,
                class: "w-full"
            }, null, 8, B1), b("div", N1, Y(n.tag), 1), b("div", F1, Y(n.title), 1), b("div", $1, Y(n.desc), 1)])), 64))])]), U(Ko), z1], 64))
        }
    }),
    G1 = ft(H1, [
        ["__scopeId", "data-v-2c9a1b37"]
    ]),
    V1 = "/assets/ar-logo-BqvbAHvZ.svg",
    W1 = "/assets/backers-big-w1Zdqzk_.png",
    U1 = "/assets/feature-1-DvXzn543.webp",
    Y1 = "/assets/feature-2-CvdOMhvV.webp",
    X1 = "/assets/feature-3-jyxL2jxK.webp",
    Z1 = "/assets/feature-4-2A0uYprM.webp",
    Xu = r => (St("data-v-79cd75a6"), r = r(), Ct(), r),
    q1 = {
        class: "banner-wrap"
    },
    K1 = Vt('<img src="' + V1 + '" class="w-32 h-32 md:w-auto md:h-auto mt-[180px] md:mt-[160px]" data-v-79cd75a6><div class="flex items-center gap-2 p-1 pr-4 link-tag mt-8" data-v-79cd75a6><div class="link-tag h-8 px-3 flex items-center" data-v-79cd75a6>Powered by</div><span class="uppercase font-title text-sm" data-v-79cd75a6>Arweave</span></div><div class="text-center text-3xl md:text-[64px] leading-[1.1em] font-display mt-6" data-v-79cd75a6><div data-v-79cd75a6>Maximize the</div><div data-v-79cd75a6>Potential of Permanence</div><div class="linear-text" data-v-79cd75a6>with Arweave-Powered Storage</div></div>', 3),
    j1 = {
        class: "flex items-center justify-center gap-3 mt-5"
    },
    Q1 = {
        href: "https://playground.ar.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    J1 = {
        href: "https://scan.ar.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    t2 = Xu(() => b("div", {
        class: "banner-bg"
    }, null, -1)),
    e2 = {
        class: "px-5"
    },
    r2 = Xu(() => b("div", {
        class: "flex items-center justify-center"
    }, [b("div", {
        class: "capsule"
    }, "Core Features")], -1)),
    i2 = Xu(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display mt-6"
    }, [b("div", null, "Empower Your Data's Permanence"), b("div", {
        class: "linear-text"
    }, "with Arweave-Powered Storage")], -1)),
    n2 = {
        class: "max-w-7xl grid md:grid-cols-2 gap-6 mx-auto mt-16"
    },
    a2 = {
        class: "feature-item"
    },
    o2 = {
        class: "capsule"
    },
    s2 = {
        class: "text-2xl md:text-3xl my-3"
    },
    l2 = {
        class: "text-white/80 flex-1 mb-8 text-sm md:text-base"
    },
    u2 = ["src"],
    c2 = Vt('<div class="px-5 backers-wrap flex flex-col items-center mt-36 md:mt-52" data-v-79cd75a6><div class="capsule" data-v-79cd75a6>Key Backers</div><div class="text-center text-3xl md:text-5xl font-display mt-6" data-v-79cd75a6><div data-v-79cd75a6>Technology Behind Data Permanence</div><div class="linear-text" data-v-79cd75a6>in Arweave-Powered Storage</div></div><img src="' + W1 + '" class="w-full max-w-[485px] mt-16 md:mb-44" data-v-79cd75a6></div>', 1),
    f2 = st({
        __name: "AR",
        setup(r) {
            const t = [{
                tag: "Library of alexandria",
                title: "Permanent",
                desc: "Blockweave mechanism, a blockchain-like structure where each of the blocks contains data and links back to the previous blocks on the blockchain.",
                image: U1
            }, {
                tag: "Lazy But Smart",
                title: "SmartWeave",
                desc: "SmartWeave is the smart contract protocol enabling developers to build various sorts of smart contract DApps. The “lazy evaluation” model allows computation-heavy DApps to be built.",
                image: Y1
            }, {
                tag: "A Tape for a Turing-complete Machine",
                title: "Storage-based Consensus Paradigm",
                desc: "The storage-based Consensus (SCP) is a trusted computation paradigm to achieve ultimate scalability and decentralization.",
                image: X1
            }, {
                tag: "Widely Adopted",
                title: "Easy to Use",
                desc: "The Arweave user interface is well-known for its beginner-friendliness and simplicity. Combined with a full-stack building environment, it has become widely adopted and witnessed significant development. ",
                image: Z1
            }];
            return (e, i) => (B(), N(nt, null, [b("div", q1, [K1, b("div", j1, [b("a", Q1, [U(Ft, {
                "show-icon": ""
            }, {
                default: kt(() => [qt("Playground")]),
                _: 1
            })]), b("a", J1, [U(Ft, null, {
                default: kt(() => [qt("Explorer")]),
                _: 1
            })])]), t2]), b("div", e2, [r2, i2, b("div", n2, [(B(), N(nt, null, Mt(t, n => b("div", a2, [b("div", o2, Y(n.tag), 1), b("div", s2, Y(n.title), 1), b("div", l2, Y(n.desc), 1), b("img", {
                src: n.image,
                class: "w-full"
            }, null, 8, u2)])), 64))])]), U(Ko), c2], 64))
        }
    }),
    h2 = ft(f2, [
        ["__scopeId", "data-v-79cd75a6"]
    ]),
    v2 = "/assets/vec-logo-DJuovGqF.svg",
    jo = "/assets/shadow-CPuX4tPI.svg",
    d2 = "/assets/ai-pic-CmDU4y37.webp",
    p2 = "/assets/content-bl-C8s3RKad.webp",
    g2 = r => (St("data-v-04aa828c"), r = r(), Ct(), r),
    m2 = {
        class: "banner-wrap"
    },
    _2 = Vt('<img src="' + v2 + '" class="w-32 h-32 md:w-auto md:h-auto mt-[180px] md:mt-[160px]" data-v-04aa828c><div class="flex items-center gap-2 p-1 pr-4 link-tag mt-8" data-v-04aa828c><div class="link-tag h-8 px-3 flex items-center" data-v-04aa828c>Powered by</div><span class="uppercase font-title text-xs md:text-sm" data-v-04aa828c>Greenfield</span></div><div class="text-center text-3xl md:text-[64px] leading-[1.1em] font-display mt-6 px-5" data-v-04aa828c><div data-v-04aa828c>The First Decentralized</div><div class="linear-text" data-v-04aa828c>Vector Database Built for AI</div></div>', 3),
    y2 = {
        class: "flex items-center justify-center gap-3 mt-5"
    },
    x2 = {
        href: "https://playground.bnb.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    w2 = g2(() => b("span", null, "Start building", -1)),
    b2 = Vt('<div class="banner-bg" data-v-04aa828c></div><div class="shadow-box" data-v-04aa828c><img src="' + jo + '" data-v-04aa828c></div><div class="px-5 md:px-0" data-v-04aa828c><div class="ai-content" data-v-04aa828c><div class="max-w-7xl ai-box flex flex-col md:flex-row items-center justify-between relative gap-5" data-v-04aa828c><div class="flex-1 gap-28 relative" data-v-04aa828c><div class="text-3xl md:text-5xl font-display" data-v-04aa828c><div data-v-04aa828c>What is</div><div class="linear-text" data-v-04aa828c>Glacier DeVector?</div></div><div class="text-white/80 max-w-[470px] mt-3 md:mt-5 text-sm md:text-base" data-v-04aa828c><p data-v-04aa828c> Glacier DeVector is a decentralized vector database built on top of decentralized storages, seamlessly integrated into the AI ecosystem. </p><p class="mt-3 md:mt-5" data-v-04aa828c>VectorDB + Web3 = Glacier DeVector</p></div></div><img src="' + d2 + '" class="md:w-[550px]" data-v-04aa828c></div><div class="max-w-7xl mx-auto relative" data-v-04aa828c><img src="' + p2 + '" class="content-bl" data-v-04aa828c></div></div></div>', 3),
    S2 = st({
        __name: "AITop",
        setup(r) {
            return (t, e) => (B(), N("div", m2, [_2, b("div", y2, [b("a", x2, [U(Ft, {
                "show-icon": ""
            }, {
                default: kt(() => [w2]),
                _: 1
            })])]), b2]))
        }
    }),
    C2 = ft(S2, [
        ["__scopeId", "data-v-04aa828c"]
    ]),
    T2 = "/assets/solution-1-CIhuu5tU.webp",
    M2 = "/assets/solution-2-COXv4HRS.webp",
    D2 = "/assets/solution-3-CEwFaeXU.webp",
    Bd = r => (St("data-v-b1792224"), r = r(), Ct(), r),
    A2 = {
        class: "px-5"
    },
    I2 = Bd(() => b("div", {
        class: "flex items-center justify-center"
    }, [b("div", {
        class: "capsule px-6 py-3 uppercase font-tag text-sm"
    }, "Maximize Your AI Potential")], -1)),
    L2 = Bd(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display mt-6"
    }, [b("div", null, "Why Utilize Blockchain"), b("div", {
        class: "linear-text"
    }, "Technology?")], -1)),
    P2 = {
        class: "max-w-7xl grid md:grid-cols-3 gap-6 mx-auto mt-16"
    },
    k2 = {
        class: "solution-item pb-8"
    },
    E2 = ["src"],
    R2 = {
        class: "text-2xl md:text-3xl font-display leading-[1.3em] mt-6"
    },
    O2 = {
        class: "max-w-[330px] text-gray-400 mt-4 text-sm md:text-base"
    },
    B2 = st({
        __name: "AISolution",
        setup(r) {
            const t = [{
                title: "Enhance Trust in Data Immutability",
                intro: "Using blockchain to store and distribute AI models creates a traceable history and gains trust in data transactions, enhancing data pipeline automation.",
                image: T2
            }, {
                title: "Optimize Efficiency with Smart Contracts",
                intro: "Integrating AI technology into smart contracts streamlines executions, resulting in a notable improvement in the overall efficiency of business networks.",
                image: M2
            }, {
                title: "Incentivize AI Models with Monetization",
                intro: "Monetization creates a synergy where decentralized networks incentivize valuable contributions, fueling innovation and efficiency in the AI ecosystem.",
                image: D2
            }];
            return (e, i) => (B(), N("div", A2, [I2, L2, b("div", P2, [(B(), N(nt, null, Mt(t, n => b("div", k2, [b("img", {
                src: n.image,
                class: "w-full"
            }, null, 8, E2), b("div", R2, Y(n.title), 1), b("div", O2, Y(n.intro), 1)])), 64))])]))
        }
    }),
    N2 = ft(B2, [
        ["__scopeId", "data-v-b1792224"]
    ]),
    F2 = "/assets/modular-big-60w3yvoZ.webp",
    $2 = {},
    z2 = {
        class: "px-5 mt-52 md:mt-72"
    },
    H2 = Vt('<div class="flex items-center justify-center"><div class="capsule"> Distributed Data Vectorization Network </div></div><div class="text-center text-3xl md:text-5xl font-display mt-6"><div>Vector Database</div><div class="linear-text">Powered by Blockchain</div></div><img src="' + F2 + '" class="max-w-7xl w-full mt-16 mx-auto">', 3),
    G2 = [H2];

function V2(r, t) {
    return B(), N("div", z2, G2)
}
const W2 = ft($2, [
        ["render", V2]
    ]),
    U2 = "/assets/feature-1-BtsvtX9T.webp",
    Y2 = "/assets/feature-2-lBkthqnh.webp",
    X2 = "/assets/feature-3-B6IMg2cq.webp",
    Z2 = "/assets/feature-4-GAWAfUmc.webp",
    Nd = r => (St("data-v-510bec9d"), r = r(), Ct(), r),
    q2 = {
        class: "px-5 mt-60"
    },
    K2 = Nd(() => b("div", {
        class: "flex items-center justify-center"
    }, [b("div", {
        class: "capsule"
    }, "Core Features")], -1)),
    j2 = Nd(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display mt-6"
    }, [b("div", null, "Unveiling the Core Features of"), b("div", {
        class: "linear-text"
    }, "Decentralized Vector Database")], -1)),
    Q2 = {
        class: "max-w-7xl grid md:grid-cols-2 gap-6 mx-auto mt-16"
    },
    J2 = {
        class: "solution-item pb-5 md:pb-12 md:min-h-[450px] px-5"
    },
    tx = ["src"],
    ex = {
        class: "capsule mt-6"
    },
    rx = {
        class: "text-2xl md:text-3xl font-display leading-[1.3em] mt-6"
    },
    ix = {
        class: "max-w-[550px] text-gray-400 mt-4 text-sm md:text-base"
    },
    nx = st({
        __name: "AIFeatures",
        setup(r) {
            const t = [{
                tag: "Enable Storage & Query for Vector",
                title: "Scalable Vector Management",
                intro: "Glacier Vector seamlessly expands to meet the growing demands of AI applications, capable of storing and managing vector data with efficiency.",
                image: U2
            }, {
                tag: "Native LLM Embedding Feature",
                title: "LLM Framework Compatible",
                intro: "Tailored database solution optimized for seamless integration with Large Language Model (LLM) frameworks, ensuring efficient storage and retrieval of complex vector data.",
                image: Y2
            }, {
                tag: "Efficient Data Pipeline Processing",
                title: "Distributed Pipeline Automation",
                intro: "Utilizing blockchain-driven distributed network, DeVector ensures secure, independent and resilient operations for AI pipeline automation.",
                image: X2
            }, {
                tag: "Support Composable Vector Indexing",
                title: "Composability and Modularity",
                intro: `The modular design, empowered by L2 rollup, enables seamless integration across diverse ecosystems, unleashing the potential of AI and Web3.
`,
                image: Z2
            }];
            return (e, i) => (B(), N("div", q2, [K2, j2, b("div", Q2, [(B(), N(nt, null, Mt(t, n => b("div", J2, [b("img", {
                src: n.image,
                class: "w-full max-w-[500px]"
            }, null, 8, tx), b("div", ex, Y(n.tag), 1), b("div", rx, Y(n.title), 1), b("div", ix, Y(n.intro), 1)])), 64))])]))
        }
    }),
    ax = ft(nx, [
        ["__scopeId", "data-v-510bec9d"]
    ]),
    ox = "/assets/case-bl-DIxoCxgF.webp",
    sx = "/assets/case-tr-1ENQadO7.png",
    lx = "/assets/case-1-BzX6ekTY.svg",
    ux = "data:image/svg+xml,%3csvg%20width='26'%20height='28'%20viewBox='0%200%2026%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17%2011.25C16.7348%2011.25%2016.4804%2011.3554%2016.2929%2011.5429C16.1054%2011.7304%2016%2011.9848%2016%2012.25V13.75C16%2014.0152%2016.1054%2014.2696%2016.2929%2014.4571C16.4804%2014.6446%2016.7348%2014.75%2017%2014.75C17.2652%2014.75%2017.5196%2014.6446%2017.7071%2014.4571C17.8946%2014.2696%2018%2014.0152%2018%2013.75V12.25C18%2011.9848%2017.8946%2011.7304%2017.7071%2011.5429C17.5196%2011.3554%2017.2652%2011.25%2017%2011.25Z'%20fill='white'/%3e%3cpath%20d='M9%2011.25C8.73478%2011.25%208.48043%2011.3554%208.29289%2011.5429C8.10536%2011.7304%208%2011.9848%208%2012.25V13.75C8%2014.0152%208.10536%2014.2696%208.29289%2014.4571C8.48043%2014.6446%208.73478%2014.75%209%2014.75C9.26522%2014.75%209.51957%2014.6446%209.70711%2014.4571C9.89464%2014.2696%2010%2014.0152%2010%2013.75V12.25C10%2011.9848%209.89464%2011.7304%209.70711%2011.5429C9.51957%2011.3554%209.26522%2011.25%209%2011.25Z'%20fill='white'/%3e%3cpath%20d='M13%200C4.13%200%200%209.85%200%2016.5C0%2023.15%205.47%2028%2013%2028C20.53%2028%2026%2023.16%2026%2016.5C26%209.84%2021.87%200%2013%200ZM13%2026C6.63%2026%202%2022%202%2016.5C2%2010.42%205.82%202%2013%202C20.18%202%2024%2010.42%2024%2016.5C24%2022%2019.37%2026%2013%2026Z'%20fill='white'/%3e%3cpath%20d='M13%207C6.78%207%204%2010.57%204%2014.11C4%2018.63%208.08%2019%2013%2019C17.92%2019%2022%2018.63%2022%2014.11C22%2010.57%2019.22%207%2013%207ZM13%2017C7%2017%206%2016.15%206%2014.11C6%2011%208.68%209%2013%209C17.32%209%2020%2011%2020%2014.11C20%2016.15%2019%2017%2013%2017Z'%20fill='white'/%3e%3cpath%20d='M15.2902%2020.79C14.6415%2021.3028%2013.8252%2021.5559%2013.0002%2021.5C12.1752%2021.5559%2011.3589%2021.3028%2010.7102%2020.79C10.6169%2020.6968%2010.5063%2020.6228%2010.3844%2020.5723C10.2626%2020.5219%2010.132%2020.4959%2010.0002%2020.4959C9.86833%2020.4959%209.73776%2020.5219%209.61594%2020.5723C9.49411%2020.6228%209.38342%2020.6968%209.29018%2020.79C9.19695%2020.8832%209.12299%2020.9939%209.07253%2021.1158C9.02206%2021.2376%208.99609%2021.3681%208.99609%2021.5C8.99609%2021.6319%209.02206%2021.7624%209.07253%2021.8843C9.12299%2022.0061%209.19695%2022.1168%209.29018%2022.21C10.3186%2023.0948%2011.6447%2023.5559%2013.0002%2023.5C14.3557%2023.5559%2015.6818%2023.0948%2016.7102%2022.21C16.8985%2022.0217%2017.0043%2021.7663%2017.0043%2021.5C17.0043%2021.2337%2016.8985%2020.9783%2016.7102%2020.79C16.5219%2020.6017%2016.2665%2020.4959%2016.0002%2020.4959C15.7339%2020.4959%2015.4785%2020.6017%2015.2902%2020.79Z'%20fill='white'/%3e%3c/svg%3e",
    cx = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%2030.6667C13.3333%2031.404%2012.7373%2032%2012%2032H6.66667C2.99067%2032%200%2029.0093%200%2025.3333V6.66667C0%202.99067%202.99067%200%206.66667%200H17.3333C21.0093%200%2024%202.99067%2024%206.66667V9.33333C24%2010.0707%2023.404%2010.6667%2022.6667%2010.6667C21.9293%2010.6667%2021.3333%2010.0707%2021.3333%209.33333V6.66667C21.3333%204.46133%2019.5387%202.66667%2017.3333%202.66667H6.66667C4.46133%202.66667%202.66667%204.46133%202.66667%206.66667V25.3333C2.66667%2027.5387%204.46133%2029.3333%206.66667%2029.3333H12C12.7373%2029.3333%2013.3333%2029.9293%2013.3333%2030.6667ZM18.6667%208C18.6667%207.26267%2018.0707%206.66667%2017.3333%206.66667H6.66667C5.92933%206.66667%205.33333%207.26267%205.33333%208C5.33333%208.73733%205.92933%209.33333%206.66667%209.33333H17.3333C18.0707%209.33333%2018.6667%208.73733%2018.6667%208ZM13.3333%2014.6667C13.3333%2013.9293%2012.7373%2013.3333%2012%2013.3333H6.66667C5.92933%2013.3333%205.33333%2013.9293%205.33333%2014.6667C5.33333%2015.404%205.92933%2016%206.66667%2016H12C12.7373%2016%2013.3333%2015.404%2013.3333%2014.6667ZM6.66667%2020C5.92933%2020%205.33333%2020.596%205.33333%2021.3333C5.33333%2022.0707%205.92933%2022.6667%206.66667%2022.6667H9.33333C10.0707%2022.6667%2010.6667%2022.0707%2010.6667%2021.3333C10.6667%2020.596%2010.0707%2020%209.33333%2020H6.66667ZM32%2022.6667C32%2027.812%2027.812%2032%2022.6667%2032C17.5213%2032%2013.3333%2027.812%2013.3333%2022.6667C13.3333%2017.5213%2017.5213%2013.3333%2022.6667%2013.3333C27.812%2013.3333%2032%2017.5213%2032%2022.6667ZM29.3333%2022.6667C29.3333%2018.9907%2026.3427%2016%2022.6667%2016C18.9907%2016%2016%2018.9907%2016%2022.6667C16%2026.3427%2018.9907%2029.3333%2022.6667%2029.3333C26.3427%2029.3333%2029.3333%2026.3427%2029.3333%2022.6667ZM25.0773%2021.012L22.1133%2023.8573C21.9213%2024.0453%2021.608%2024.0493%2021.4173%2023.86L19.9093%2022.3827C19.3813%2021.8653%2018.5387%2021.8733%2018.024%2022.4013C17.508%2022.928%2017.516%2023.7707%2018.0427%2024.2867L19.552%2025.7653C20.1653%2026.364%2020.968%2026.664%2021.7693%2026.664C22.5707%2026.664%2023.3707%2026.364%2023.9733%2025.7693L26.924%2022.9373C27.4547%2022.4267%2027.472%2021.5827%2026.9627%2021.052C26.452%2020.5187%2025.6067%2020.504%2025.0773%2021.0133V21.012Z'%20fill='white'/%3e%3c/svg%3e",
    fx = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.075%2019.8013C30.8177%2020.4906%2030.0484%2020.8399%2029.359%2020.5826C28.6697%2020.3253%2028.3204%2019.5559%2028.5777%2018.8666C29.2124%2017.1719%2029.4484%2015.3839%2029.283%2013.5506C28.787%208.05994%2024.4777%203.53194%2019.0337%202.78394C14.6164%202.18128%2010.395%203.93994%207.73369%207.49194C5.94302%209.70661%202.77502%2016.2586%202.66436%2017.3666L4.27369%2017.3346C4.94302%2017.3346%205.50836%2017.8306%205.59502%2018.4933L6.04036%2021.8586C6.30302%2023.8386%208.00836%2025.3333%2010.007%2025.3333H11.999C12.7364%2025.3333%2013.3324%2025.9293%2013.3324%2026.6666V27.9999C13.3324%2028.7359%2013.9297%2029.3333%2014.6657%2029.3333H23.999C24.2337%2029.3333%2024.4644%2029.2719%2024.6657%2029.1546C25.3017%2028.7866%2026.119%2029.0039%2026.487%2029.6426C26.855%2030.2799%2026.6364%2031.0946%2025.999%2031.4639C25.3937%2031.8146%2024.7017%2031.9986%2023.999%2031.9986H14.6657C12.4604%2031.9986%2010.6657%2030.2039%2010.6657%2027.9986H10.007C6.67636%2027.9986%203.83502%2025.5093%203.39769%2022.2066L3.10569%2019.9986H2.66569C0.93369%2019.9986%20-0.000976562%2018.6253%20-0.000976562%2017.3319C-0.000976562%2015.4386%203.90836%207.97994%205.62969%205.85194C8.85102%201.55194%2014.015%20-0.590722%2019.3964%200.139945C26.0577%201.05728%2031.3324%206.59461%2031.939%2013.3093C32.1404%2015.5453%2031.851%2017.7293%2031.075%2019.8013ZM28.943%2024.3906C29.4644%2024.9119%2029.4644%2025.7546%2028.943%2026.2759C28.683%2026.5359%2028.3417%2026.6666%2028.0004%2026.6666C27.659%2026.6666%2027.3177%2026.5359%2027.0577%2026.2759L21.9617%2021.1799C20.6537%2022.1119%2019.059%2022.6666%2017.3337%2022.6666C12.9217%2022.6666%209.33369%2019.0786%209.33369%2014.6666C9.33369%2010.2546%2012.9217%206.66661%2017.3337%206.66661C21.7457%206.66661%2025.3337%2010.2546%2025.3337%2014.6666C25.3337%2016.3919%2024.779%2017.9866%2023.847%2019.2946L28.943%2024.3906ZM17.3337%2019.9999C20.275%2019.9999%2022.667%2017.6079%2022.667%2014.6666C22.667%2011.7253%2020.275%209.33328%2017.3337%209.33328C14.3924%209.33328%2012.0004%2011.7253%2012.0004%2014.6666C12.0004%2017.6079%2014.3924%2019.9999%2017.3337%2019.9999Z'%20fill='white'/%3e%3c/svg%3e",
    Qo = r => (St("data-v-0425eede"), r = r(), Ct(), r),
    hx = {
        class: "px-5 mt-52 md:mt-64 md:pb-24"
    },
    vx = Qo(() => b("div", {
        class: "flex items-center justify-center"
    }, [b("div", {
        class: "capsule"
    }, "Use Case Scenarios")], -1)),
    dx = Qo(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display mt-6"
    }, [b("div", null, "Building with"), b("div", {
        class: "linear-text"
    }, "Transparency and Intelligence")], -1)),
    px = {
        class: "case-grid mt-16 max-w-7xl mx-auto"
    },
    gx = Qo(() => b("img", {
        src: ox,
        class: "absolute w-[320px] md:w-[450px] left-[-180px] bottom-[-130px] md:bottom-[-170px]"
    }, null, -1)),
    mx = {
        class: "case-item p-5 md:p-10"
    },
    _x = {
        class: "w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center border border-white/40"
    },
    yx = ["src"],
    xx = {
        class: "text-2xl md:text-3xl mt-6"
    },
    bx = {
        class: "text-white/80 mt-4 flex-1 text-sm md:text-base"
    },
    Sx = Qo(() => b("img", {
        src: sx,
        class: "hidden md:block absolute w-[355px] right-[-100px] top-[-200px]"
    }, null, -1)),
    Cx = st({
        __name: "AICase",
        setup(r) {
            const t = [{
                title: "Intent-Centric Infrastructure",
                desc: "Intent-Centric is the next big thing in Web3. Glacier DeVector with AI Agent framework is essential for preserving user habits and contexts, contributing to personalized actions by the LLM Model.",
                icon: lx
            }, {
                title: "DAO with Decentralized AI Agent",
                desc: "Integrating AI into decentralized governance empowers informed community decisions, reducing misinformation risks and fostering a more inclusive decision-making process for Dao Management.",
                icon: ux
            }, {
                title: "AI-Powered Smart Contract Execution",
                desc: "DeVector enables proactive adjustments and optimizes execution by adjusting parameters based on real-time data, and can analyze historical data to predict potential issues in smart contract execution.",
                icon: cx
            }, {
                title: "Insightful Lens for Data Analysis",
                desc: "Web3 platforms generate vast volume of decentralized and distributed data. AI excels in extracting insights from this data, revealing patterns, trends, and anomalies in decentralized ledgers.",
                icon: fx
            }];
            return (e, i) => (B(), N("div", hx, [vx, dx, b("div", px, [gx, (B(), N(nt, null, Mt(t, n => b("div", mx, [b("div", _x, [b("img", {
                src: n.icon
            }, null, 8, yx)]), b("div", xx, Y(n.title), 1), b("div", bx, Y(n.desc), 1)])), 64)), Sx])]))
        }
    }),
    Tx = ft(Cx, [
        ["__scopeId", "data-v-0425eede"]
    ]),
    Mx = st({
        __name: "AI",
        setup(r) {
            return (t, e) => (B(), N(nt, null, [U(C2), U(N2), U(W2), U(ax), U(Tx)], 64))
        }
    }),
    Dx = "/assets/da-logo-C9FitP-M.svg",
    Ax = "/assets/da-pic-rQDcYrtP.webp",
    Ix = "/assets/content-bl-Cgv_NMN-.webp",
    Lx = {
        class: "banner-wrap"
    },
    Px = Vt('<img src="' + Dx + '" class="w-32 h-32 md:w-auto md:h-auto mt-[180px] md:mt-[160px]" data-v-be2ecb45><div class="flex items-center gap-2 p-1 pr-4 link-tag mt-8" data-v-be2ecb45><div class="link-tag h-8 px-3 flex items-center" data-v-be2ecb45>Powered by</div><span class="uppercase font-title text-xs md:text-sm" data-v-be2ecb45>DECENTRALIZED STORAGE</span></div><div class="text-center text-3xl md:text-[64px] leading-[1.1em] font-display mt-6" data-v-be2ecb45><div data-v-be2ecb45>GlacierDA</div><div class="linear-text" data-v-be2ecb45> The First Data Availability<br data-v-be2ecb45>Layer for AI </div></div><div class="banner-bg" data-v-be2ecb45></div><div class="shadow-box" data-v-be2ecb45><img src="' + jo + '" data-v-be2ecb45></div><div class="px-5 md:px-0" data-v-be2ecb45><div class="ai-content" data-v-be2ecb45><div class="max-w-7xl ai-box flex flex-col md:flex-row items-center justify-between relative gap-5" data-v-be2ecb45><div class="flex-1 gap-28 relative" data-v-be2ecb45><div class="text-3xl md:text-5xl font-display" data-v-be2ecb45><div data-v-be2ecb45>What is</div><div class="linear-text" data-v-be2ecb45>GlacierDA?</div></div><div class="text-white/80 max-w-[470px] mt-5" data-v-be2ecb45><p data-v-be2ecb45> GlacierDA provides a programmable, modular and scalable data availability service that integrates with decentralized storage for AI and Rollups which needs heavy and veritable data workload. </p><p class="mt-6" data-v-be2ecb45> Data Availability Layer Tailored for GenAI Environment </p></div></div><img src="' + Ax + '" class="w-[550px]" data-v-be2ecb45></div><div class="max-w-7xl mx-auto relative" data-v-be2ecb45><img src="' + Ix + '" class="content-bl" data-v-be2ecb45></div></div></div>', 6),
    kx = [Px],
    Ex = st({
        __name: "DATop",
        setup(r) {
            return (t, e) => (B(), N("div", Lx, kx))
        }
    }),
    Rx = ft(Ex, [
        ["__scopeId", "data-v-be2ecb45"]
    ]),
    Ox = "/assets/modular-big-5JfXPwQK.webp",
    Bx = {},
    Nx = {
        class: "px-5 mt-6"
    },
    Fx = b("div", {
        class: "text-center text-3xl md:text-5xl font-display mt-6"
    }, " GlacierDA Redefines Scalability ", -1),
    $x = b("img", {
        src: Ox,
        class: "max-w-7xl w-full mt-16 mx-auto"
    }, null, -1),
    zx = [Fx, $x];

function Hx(r, t) {
    return B(), N("div", Nx, zx)
}
const Gx = ft(Bx, [
        ["render", Hx]
    ]),
    Vx = "/assets/feature-1-W-Z7eZnu.webp",
    Wx = "/assets/feature-2-CCjHytvQ.webp",
    Ux = "/assets/feature-3-Bl6KNM6M.webp",
    Yx = "/assets/feature-4-g_TAa-xl.webp",
    Fd = r => (St("data-v-87ae50e1"), r = r(), Ct(), r),
    Xx = {
        class: "px-5 mt-64"
    },
    Zx = Fd(() => b("div", {
        class: "flex items-center justify-center"
    }, [b("div", {
        class: "capsule"
    }, "Core Features")], -1)),
    qx = Fd(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display mt-6"
    }, " Solving Offchain Verification and Computing ", -1)),
    Kx = {
        class: "max-w-7xl grid md:grid-cols-2 gap-6 mx-auto mt-16"
    },
    jx = {
        class: "feature-item"
    },
    Qx = {
        class: "capsule"
    },
    Jx = {
        class: "text-2xl md:text-3xl my-3"
    },
    tw = {
        class: "text-white/80 flex-1 mb-8 text-sm md:text-base"
    },
    ew = ["src"],
    rw = st({
        __name: "DAFeatures",
        setup(r) {
            const t = [{
                tag: "Secure Off-Chain Verification",
                title: "Verifiable Computation",
                desc: "GlacierDA solves the demand for off-chain verification and computing of GenAI and DePIN executed states. It ensures that the network remains secure and decentralized by using a PoS consensus mechanism.",
                image: Vx
            }, {
                tag: "Value Maximization SOLUTION",
                title: "Cost-Effectiveness",
                desc: "GlacierDA is designed to be cost-effective for handling large datasets and maintaining data integrity. All the data in a block is available for validation utilizing GlacierDA sampling network, providing ultra-low costs for applications.",
                image: Wx
            }, {
                tag: "Scalable Data Foundation PRODUCT",
                title: "Scalability for GenAI",
                desc: "GlacierDA functions as a foundational (base) layer, offering scalable data hosting without transaction execution, specifically for rollups and GenAI which relies on heavy data workloads. It plays a key role in the synergy between AI and Crypto.",
                image: Ux
            }, {
                tag: "Trustworthy Access fOR ALL",
                title: "Permanent Storage",
                desc: "Permanent storage ensures all parties can access the data at any time for verification, auditing or compliance. Decentralized storage answers the question of where the data is published, crucial for maintaining trust and transparency.",
                image: Yx
            }];
            return (e, i) => (B(), N("div", Xx, [Zx, qx, b("div", Kx, [(B(), N(nt, null, Mt(t, n => b("div", jx, [b("div", Qx, Y(n.tag), 1), b("div", Jx, Y(n.title), 1), b("div", tw, Y(n.desc), 1), b("img", {
                src: n.image,
                class: "w-full"
            }, null, 8, ew)])), 64))])]))
        }
    }),
    iw = ft(rw, [
        ["__scopeId", "data-v-87ae50e1"]
    ]),
    nw = st({
        __name: "DA",
        setup(r) {
            return (t, e) => (B(), N(nt, null, [U(Rx), U(Gx), U(iw)], 64))
        }
    }),
    aw = "/assets/eco-logo-CYfY3RkI.svg",
    ow = "data:image/svg+xml,%3csvg%20width='37'%20height='36'%20viewBox='0%200%2037%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20width='36'%20height='36'%20rx='18'%20fill='%23090909'/%3e%3cpath%20d='M13.167%2018H23.8337M23.8337%2018L19.8337%2014M23.8337%2018L19.8337%2022'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
    Qi = r => (St("data-v-e66c232e"), r = r(), Ct(), r),
    sw = {
        class: "banner-wrap"
    },
    lw = Qi(() => b("img", {
        src: aw,
        class: "w-32 h-32 md:w-auto md:h-auto mt-[180px] md:mt-[160px]"
    }, null, -1)),
    uw = Qi(() => b("div", {
        class: "text-center text-3xl md:text-[64px] leading-[1.1em] font-display mt-16"
    }, [b("div", null, "Glacier Network Ecosystem"), b("div", {
        class: "linear-text"
    }, "Modularity for AI and DePIN")], -1)),
    cw = {
        class: "flex flex-col md:flex-row items-center justify-center gap-3 mt-5"
    },
    fw = {
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdkIfVEiQ8BkGPHvnaqHI9NeojaQSRHIveSw_qDR55OFbkHIw/viewform?usp=sf_link",
        target: "_blank"
    },
    hw = Qi(() => b("span", null, "Submit Your Project", -1)),
    vw = {
        href: "https://dorahacks.io/mini-grant/14/detail",
        target: "_blank"
    },
    dw = Qi(() => b("div", {
        class: "banner-bg"
    }, null, -1)),
    pw = Qi(() => b("div", {
        class: "shadow-box"
    }, [b("img", {
        src: jo
    })], -1)),
    gw = {
        class: "px-5"
    },
    mw = Qi(() => b("div", {
        class: "max-w-7xl mx-auto apply-box"
    }, [b("div", {
        class: "text-2xl md:text-5xl"
    }, "Glacier Grant Program"), b("a", {
        href: "https://docs.google.com/forms/d/e/1FAIpQLSf5PM-0PEB17MxdW5fm6mU0j-waAEMXmAUCdPycgT9_psRKDA/viewform?usp=sf_link",
        target: "_blank",
        class: "program-btn transition"
    }, [b("span", null, "Apply for Grant Program"), b("img", {
        src: ow
    })])], -1)),
    _w = {
        class: "max-w-7xl mx-auto flex gap-4 flex-wrap py-14 md:py-24"
    },
    yw = ["onClick"],
    xw = {
        class: "max-w-7xl mx-auto grid md:grid-cols-3 gap-5"
    },
    ww = ["src"],
    bw = {
        class: "capsule item-tag mt-4"
    },
    Sw = {
        class: "text-2xl md:text-3xl mt-4"
    },
    Cw = {
        class: "mt-3 text-white/80"
    },
    Tw = st({
        __name: "Eco",
        setup(r) {
            const t = ["All", "GenAI", "Dapps", "Identity", "Investors", "Media/Education", "Wallet", "Toolings", "Middleware", "Blockchain", "Storage Layers", "Grants & Awards"],
                e = ee(["All"]),
                i = ee([]),
                n = Wm(() => e.value[0] === "All" ? i.value : i.value.filter(l => e.value.includes(l.tag)));

            function a(l) {
                l === "All" ? e.value = [l] : e.value[0] === "All" ? e.value = [l] : e.value.includes(l) ? e.value = e.value.filter(u => u !== l) : e.value.push(l)
            }
            async function o() {
                const u = await (await fetch("/eco.json?t=" + Date.now())).json();
                i.value = u
            }

            function s(l) {
                return `https://ob-public-bkt.s3.ap-northeast-1.amazonaws.com/www-res/glacier/eco/${l.title.replace(/\s/g,"_").toLowerCase()}.png`
            }
            return va(() => {
                o()
            }), (l, u) => (B(), N(nt, null, [b("div", sw, [lw, uw, b("div", cw, [b("a", fw, [U(Ft, {
                "show-icon": ""
            }, {
                default: kt(() => [hw]),
                _: 1
            })]), b("a", vw, [U(Ft, null, {
                default: kt(() => [qt(" Join Grant Program ")]),
                _: 1
            })])]), dw, pw]), b("div", gw, [mw, b("div", _w, [(B(), N(nt, null, Mt(t, c => b("div", {
                class: Pd(["tag-item transition", {
                    "tag-active": e.value.includes(c)
                }]),
                onClick: f => a(c)
            }, Y(c), 11, yw)), 64))]), b("div", xw, [(B(!0), N(nt, null, Mt(n.value, c => (B(), N("div", {
                class: "item-card",
                key: c.id
            }, [b("img", {
                src: s(c),
                class: "w-[60px] h-[60px] md:w-20 md:h-20 rounded-full"
            }, null, 8, ww), b("div", bw, Y(c.tag), 1), b("div", Sw, Y(c.title), 1), b("div", Cw, Y(c.intro), 1)]))), 128))])])], 64))
        }
    }),
    Mw = ft(Tw, [
        ["__scopeId", "data-v-e66c232e"]
    ]),
    Dw = "/assets/filecoin-logo-BhmXyKTZ.svg",
    Aw = "/assets/backers-big-DqJ17b49.png",
    Iw = "/assets/feature-1-BliqlSHU.webp",
    Lw = "/assets/feature-2-DdHXzmkt.webp",
    Pw = "/assets/feature-3-CSHBU-pt.webp",
    kw = "/assets/feature-4-sFZlihqE.webp",
    Zu = r => (St("data-v-df12d7cf"), r = r(), Ct(), r),
    Ew = {
        class: "banner-wrap"
    },
    Rw = Vt('<img src="' + Dw + '" class="w-32 h-32 md:w-auto md:h-auto mt-[180px] md:mt-[160px]" data-v-df12d7cf><div class="flex items-center gap-2 p-1 pr-4 link-tag mt-8" data-v-df12d7cf><div class="link-tag h-8 px-3 flex items-center" data-v-df12d7cf>Powered by</div><span class="uppercase font-title text-sm" data-v-df12d7cf>FILECOIN</span></div><div class="text-center text-3xl md:text-[64px] leading-[1.1em] font-display mt-6" data-v-df12d7cf><div data-v-df12d7cf>Unlock the Possibilities</div><div class="linear-text" data-v-df12d7cf>with FVM Integration</div></div>', 3),
    Ow = {
        class: "flex items-center justify-center gap-3 mt-5"
    },
    Bw = {
        href: "https://playground.fil.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    Nw = {
        href: "https://scan.fil.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    Fw = Zu(() => b("div", {
        class: "banner-bg"
    }, null, -1)),
    $w = {
        class: "px-5"
    },
    zw = Zu(() => b("div", {
        class: "flex items-center justify-center"
    }, [b("div", {
        class: "capsule"
    }, "Core Features")], -1)),
    Hw = Zu(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display mt-6"
    }, [b("div", null, "A Deep Dive into"), b("div", {
        class: "linear-text"
    }, "FVM Integration Core Features")], -1)),
    Gw = {
        class: "max-w-7xl grid md:grid-cols-2 gap-6 mx-auto mt-16"
    },
    Vw = {
        class: "feature-item"
    },
    Ww = ["src"],
    Uw = {
        class: "capsule mt-5"
    },
    Yw = {
        class: "text-2xl md:text-3xl my-3"
    },
    Xw = {
        class: "text-white/80 text-sm md:text-base"
    },
    Zw = Vt('<div class="px-5 backers-wrap flex flex-col items-center mt-36 md:mt-52" data-v-df12d7cf><div class="capsule" data-v-df12d7cf>Key Backers</div><div class="text-center text-3xl md:text-5xl font-display mt-6" data-v-df12d7cf><div data-v-df12d7cf>Technology Behind Data Amplification</div><div class="linear-text" data-v-df12d7cf>in the BNB Chain Ecosystem</div></div><img src="' + Aw + '" class="w-full max-w-[575px] mt-12 md:mb-40" data-v-df12d7cf></div>', 1),
    qw = st({
        __name: "Filecoin",
        setup(r) {
            const t = [{
                tag: "Unleashing Synergy",
                title: "Compatible with IPFS",
                desc: "Filecoin leverages IPFS as its storage layer, ensuring the integrity and availability of the stored data.",
                image: Iw
            }, {
                tag: "Powerful Smart Contract Capabilities",
                title: "Filecoin Virtual Machine",
                desc: "Filecoin Virtual Machine (FVM) allows developers to build and deploy smart contracts on the Filecion network, unlocking the enormous potential of the provable storage.",
                image: Lw
            }, {
                tag: "Unlimited Solution",
                title: "Massive Storage Capacity",
                desc: "Filecoin Network boasts a vast storage capacity, primed for massive datasets. It makes available large datasets coming from enterprise-scale clients.",
                image: Pw
            }, {
                tag: "Fueling Vibrant Community",
                title: "Thriving Miner Ecosystem",
                desc: "It is more than a storage space. With its decentralized network, Filecoin Network provides a rich and diverse ecosystem for miners and builders.",
                image: kw
            }];
            return (e, i) => (B(), N(nt, null, [b("div", Ew, [Rw, b("div", Ow, [b("a", Bw, [U(Ft, {
                "show-icon": ""
            }, {
                default: kt(() => [qt("Playground")]),
                _: 1
            })]), b("a", Nw, [U(Ft, null, {
                default: kt(() => [qt("Explorer")]),
                _: 1
            })])]), Fw]), b("div", $w, [zw, Hw, b("div", Gw, [(B(), N(nt, null, Mt(t, n => b("div", Vw, [b("img", {
                src: n.image,
                class: "w-full"
            }, null, 8, Ww), b("div", Uw, Y(n.tag), 1), b("div", Yw, Y(n.title), 1), b("div", Xw, Y(n.desc), 1)])), 64))])]), U(Ko), Zw], 64))
        }
    }),
    Kw = ft(qw, [
        ["__scopeId", "data-v-df12d7cf"]
    ]),
    jw = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16"
    },
    Qw = b("path", {
        fill: "currentColor",
        d: "M2.501 8a5.5 5.5 0 1 1 5.5 5.5A.75.75 0 0 0 8 15a7 7 0 1 0-7-7 .75.75 0 0 0 1.501 0"
    }, null, -1),
    Jw = [Qw];

function tb(r, t) {
    return B(), N("svg", jw, [...Jw])
}
const $d = {
        render: tb
    },
    zd = r => (St("data-v-fb783a9a"), r = r(), Ct(), r),
    eb = zd(() => b("div", {
        class: "banner-wrap"
    }, null, -1)),
    rb = zd(() => b("div", {
        class: "banner-bg flex flex-col items-center text-center"
    }, [b("div", {
        class: "main-title"
    }, "Glacier Network Datasets"), b("div", {
        class: "sub-title linear-text"
    }, "Data Model Dashboard")], -1)),
    ib = {
        key: 0,
        class: "w-full max-w-6xl grid md:grid-cols-3 gap-5 mx-auto px-5 md:px-0"
    },
    nb = ["src"],
    ab = {
        class: "text-xl md:text-2xl"
    },
    ob = {
        class: "text-white/80"
    },
    sb = {
        key: 1,
        class: "h-48 flex items-center justify-center mx-auto text-6xl"
    },
    lb = st({
        __name: "Datasets",
        setup(r) {
            const t = ee(!1),
                e = ee([]);
            return va(async () => {
                const i = await Jm();
                e.value = i, t.value = !0
            }), (i, n) => {
                const a = Ld("router-link");
                return B(), N(nt, null, [eb, rb, t.value ? (B(), N("div", ib, [(B(!0), N(nt, null, Mt(e.value, o => (B(), qo(a, {
                    to: "/dashboard/" + o.id,
                    class: "dataset-item"
                }, {
                    default: kt(() => [b("img", {
                        src: o.logo,
                        class: "item-logo"
                    }, null, 8, nb), b("div", ab, Y(o.name), 1), b("div", ob, Y(o.description), 1)]),
                    _: 2
                }, 1032, ["to"]))), 256))])) : (B(), N("div", sb, [U(Hi($d), {
                    class: "animate-spin"
                })]))], 64)
            }
        }
    }),
    ub = ft(lb, [
        ["__scopeId", "data-v-fb783a9a"]
    ]),
    cb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhcSURBVHgB7Z3NThtXFMf/Yz4rVcJ9gTJZdJvQFwhGarYJeYAmIHWbBqouG0EeoEoidZkqTrrMAtIuGwmTF4jJMllgtt3ESFVTTM3tOfd4sDEee2Y8c+favj/pMjYeGJj/3HPOPffLwyjxSfn01ccUlTMU4bUKsHB+jsJR61inz2p0Xh3zqMLz6hgRPNjK32oJ0yihgGv0bgksBrQASWFRqlQOSLAKiVXFZ14NFmKPKEoVcYpVerVMhY/DCBCVqi5NPCeBKrCE/EX5pEpkjrYgtcGEEL1RZOo8qkENPMHnXhU5ko8oXCsauE9X30CeQoTDtecJ1Z4ycsCsKPaLcRGlA4WHpsUxI8qoidGNYXGyF+VftUERFPuM0ROjGxFnJeuorYCs4DZFQ+3RFR5hHARhPN1GOqT/65Gu/ZldJgvGqXaEwbXmFLeziNTSrSn89JyonbGqHWFwrZnFW/p/t5Ay6dUUNldT2IO0vCcLhV0SaD2tVE46okgDcAfjXjv6kWIQMLz5Yv8hNWRyBWHYnBXoPkjSdCiGE4XtqfgPByPR2VudTB3q1ySFBfGwDUcv6tRYXkkamSUTRUJeV0P6U6f82ddJfEx8UU7UKv3UDhyDSej844kiYe9bTLpTj0cVMyRMjHA5uqNvt0OcIPFYopZ/LFMfXRTxIT4cSVjDP2oj6snRzJeLtNKhQY4/QkQ2WBQxW4dwDA87/lkSZoB/GWy+xI840oAblw1sDD6tHw21Rl+fwZEuTVzpFyaH1xTJ4aSelnaArU/fB73Q55NtuGgrK0o6sx5Cb/Nlo3Ovk288PgYOqq3XdTkGrwMWfTkWqTm1QMX35XuLi7CMCma9lV4f9BblRJXpk7vIkzf7IsCbCrWJ6XhUw9BcW5JyvQQsL7cFzIumTsFUur99WZQ8awkL8WoX+K0sNSBrWJSbq8D39/MSKLS2XORUPaKoSxktrysKyyUFjuTzKnfWFD4cKuP/ex/f0qahDo39QX99zF+M7vJg27Qwe90SeF2CrMFUu6RWA26spOMr0ubbNeBXg82zGXzR2cqfvvChwqqx0cU/bsYXREdRvkRUHFkVW2WhPWcIRzJnSPsk/v18fFeN56PYpy1RQHDvPoxwQglL4HHwti2BSQfPDv2bUv9z+GZfpRtzixzx1WsSNRWH6DVgUfYrcm0+vqsOvv77w+GuGZ0Qh8+my5QdvbcRbtMXfYWfH4u/yfJveH+oyEzJ9cL+lj/3zNwPLh3DYNsteqVnT5nhOMSU8FP5ek/MRtZPKJtA9hsPtsLPCUyhCcSEadqieHpaW76wifnqCvDdupiZLK/Dv58DDb6WHZSCF+LoJVY2Yjwj8aIshZ36UqsFzj6FfUuSGsRP/EErK/D7bjtVYxOFdqUQUTwMNXgsM/gmcuFWfgCLwmKdR149RAryYhx2B6/tp6iDLUrpB6KUMCroJGQVY8mU1qEsPsXDIhw2oC1WofONI2fOpP+qQDGyPYI82AaePhPHnjXsjzhD/HJHjjYgq2uQo2+Sg5mCHbADv3OXypr4Dt2f0upXYaf9LqEvYQG+9CWSC6K45VL78z9ewRJ8/jKtF5+xEb6RfOM6bx7D0RgLFLwOoztHNipQBDZNLXnf4mVzLhMkJccVslyF1tJMDluYY1GUE8UqyHJlt7iBIzF2icJ5KdM9kUH/ikXYJ4rpLDF3tlnWJT0NG5nELHGAQp1FqcFWJitLLBRElNFinLPELQp6mViHPfyHWkGv3+uwB+rkKuj1eW0hjywxX8+WLLEsyUvRF88oaiiuLfm37PPKEmcZfsfjmL8Ejr4G2zq6JjNL3KopjMKBtYMnuhnnLDEv946gRa8s8iuTTMu/B6LswpEvPMe+NWNYRJE3LjTOE09MF9M5ljj/jupJzhI3cR4CtkU5QxmmWAiJhmzLEpucUTzfdiHt3nnZv4Tnp2QfP/KTeSPC/Ms8s8R87Q9mpusQ+5j1SsGbi0MmTE7V/mET+OUxYmMqS/y0LA1ZEzSxHr65AY++NzVJhicFXS+lN4E0zfLTlrnJQg31cfC6+SZnB3PhG2CLGMWiwssdk4JweYaBnKhtw39Ue6pbnmLww5H1lL5epcfi0peH4Zl0+N2wD+BlP148l2OWsD/iAOLmLckS55EfO6NmyLx3KUUdtjbLNn2yhTwxmSXOCw8rmImyNguTZ20ZxLhkibmxPne5ljDho4htqC3jTJ/V8cLHfc3qFRBqcGRBOdlyhbxWCDdqHOnC2eAmHvY7pf8ISV4gzKX100W2Jqz1O2XwzBSbnf7ocSHHFcbgscRsxpQzY0MjZmstyqnRBnjPeWzCnsAxDJtRt+yIN7GuoXibjtEYYGETivzInLcd9fQk+6fswa1XHB0OlOa823F+JP4UVLexTXQibjjQTfxJQ3pEJbjb0A206Eew9VOCDTmTzeTiPUBcRBbOkBtxJp9exxFZ09WYS6SwM+pwcx65xS+mrAYHU01jq9p01ppwUZlEWSlt6pzO7GB+MsSUVTCJSDvktl27bHcyWf0wkoKSjEdqpC8KI1uh8ygNH+PLvs5lpbDVeTfZLG7AAcAMNZrGM19WJ2e+qbO9GQjCZFNTOhmvIKBMD9tmWr4jjOyXAeGnada7Qq+4sVnDaLKvR57MeutZC8JkX1O6ke1AOBDwYT/7eifYHsOAssS8KAEiDpdl2AXXhOd0Z3ZNixGQnygB7HM8rJIh5c1KfOTHPjlwSrOT3zBgovqRvyid8HK8ZyiRQDxILesaVNcD4ngSrgVCdGKXKN2cUnunST2dvOy7rHXJ6/bG78dROGqtQVPVpUmZh4zC2TSwW5ReyOgaX4vE5ayHSAVdC+q8+Azm6WhRLYjC/4Jx+h8ycFR3AAAAAElFTkSuQmCC";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Vl = function (r, t) {
    return Vl = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function (e, i) {
        e.__proto__ = i
    } || function (e, i) {
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
    }, Vl(r, t)
};

function z(r, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    Vl(r, t);

    function e() {
        this.constructor = r
    }
    r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e)
}
var fb = function () {
        function r() {
            this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1
        }
        return r
    }(),
    hb = function () {
        function r() {
            this.browser = new fb, this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u"
        }
        return r
    }(),
    j = new hb;
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (j.wxa = !0, j.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? j.worker = !0 : typeof navigator > "u" || navigator.userAgent.indexOf("Node.js") === 0 ? (j.node = !0, j.svgSupported = !0) : vb(navigator.userAgent, j);

function vb(r, t) {
    var e = t.browser,
        i = r.match(/Firefox\/([\d.]+)/),
        n = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/),
        a = r.match(/Edge?\/([\d.]+)/),
        o = /micromessenger/i.test(r);
    i && (e.firefox = !0, e.version = i[1]), n && (e.ie = !0, e.version = n[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
    var s = document.documentElement.style;
    t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9
}
var qu = 12,
    db = "sans-serif",
    ci = qu + "px " + db,
    pb = 20,
    gb = 100,
    mb = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";

function _b(r) {
    var t = {};
    if (typeof JSON > "u") return t;
    for (var e = 0; e < r.length; e++) {
        var i = String.fromCharCode(e + 32),
            n = (r.charCodeAt(e) - pb) / gb;
        t[i] = n
    }
    return t
}
var yb = _b(mb),
    Ji = {
        createCanvas: function () {
            return typeof document < "u" && document.createElement("canvas")
        },
        measureText: function () {
            var r, t;
            return function (e, i) {
                if (!r) {
                    var n = Ji.createCanvas();
                    r = n && n.getContext("2d")
                }
                if (r) return t !== i && (t = r.font = i || ci), r.measureText(e);
                e = e || "", i = i || ci;
                var a = /(\d+)px/.exec(i),
                    o = a && +a[1] || qu,
                    s = 0;
                if (i.indexOf("mono") >= 0) s = o * e.length;
                else
                    for (var l = 0; l < e.length; l++) {
                        var u = yb[e[l]];
                        s += u == null ? o : u * o
                    }
                return {
                    width: s
                }
            }
        }(),
        loadImage: function (r, t, e) {
            var i = new Image;
            return i.onload = t, i.onerror = e, i.src = r, i
        }
    },
    Hd = Ir(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], function (r, t) {
        return r["[object " + t + "]"] = !0, r
    }, {}),
    Gd = Ir(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], function (r, t) {
        return r["[object " + t + "Array]"] = !0, r
    }, {}),
    da = Object.prototype.toString,
    Jo = Array.prototype,
    xb = Jo.forEach,
    wb = Jo.filter,
    Ku = Jo.slice,
    bb = Jo.map,
    rf = (function () {}).constructor,
    Ta = rf ? rf.prototype : null,
    ju = "__proto__",
    Sb = 2311;

function Vd() {
    return Sb++
}

function Qu() {
    for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
    typeof console < "u" && console.error.apply(console, r)
}

function ot(r) {
    if (r == null || typeof r != "object") return r;
    var t = r,
        e = da.call(r);
    if (e === "[object Array]") {
        if (!On(r)) {
            t = [];
            for (var i = 0, n = r.length; i < n; i++) t[i] = ot(r[i])
        }
    } else if (Gd[e]) {
        if (!On(r)) {
            var a = r.constructor;
            if (a.from) t = a.from(r);
            else {
                t = new a(r.length);
                for (var i = 0, n = r.length; i < n; i++) t[i] = r[i]
            }
        }
    } else if (!Hd[e] && !On(r) && !qn(r)) {
        t = {};
        for (var o in r) r.hasOwnProperty(o) && o !== ju && (t[o] = ot(r[o]))
    }
    return t
}

function pt(r, t, e) {
    if (!X(t) || !X(r)) return e ? ot(t) : r;
    for (var i in t)
        if (t.hasOwnProperty(i) && i !== ju) {
            var n = r[i],
                a = t[i];
            X(a) && X(n) && !H(a) && !H(n) && !qn(a) && !qn(n) && !nf(a) && !nf(n) && !On(a) && !On(n) ? pt(n, a, e) : (e || !(i in r)) && (r[i] = ot(t[i]))
        } return r
}

function O(r, t) {
    if (Object.assign) Object.assign(r, t);
    else
        for (var e in t) t.hasOwnProperty(e) && e !== ju && (r[e] = t[e]);
    return r
}

function ht(r, t, e) {
    for (var i = wt(t), n = 0; n < i.length; n++) {
        var a = i[n];
        (e ? t[a] != null : r[a] == null) && (r[a] = t[a])
    }
    return r
}

function dt(r, t) {
    if (r) {
        if (r.indexOf) return r.indexOf(t);
        for (var e = 0, i = r.length; e < i; e++)
            if (r[e] === t) return e
    }
    return -1
}

function Cb(r, t) {
    var e = r.prototype;

    function i() {}
    i.prototype = t.prototype, r.prototype = new i;
    for (var n in e) e.hasOwnProperty(n) && (r.prototype[n] = e[n]);
    r.prototype.constructor = r, r.superClass = t
}

function Ye(r, t, e) {
    if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
        for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
            var a = i[n];
            a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a])
        } else ht(r, t, e)
}

function oe(r) {
    return !r || typeof r == "string" ? !1 : typeof r.length == "number"
}

function D(r, t, e) {
    if (r && t)
        if (r.forEach && r.forEach === xb) r.forEach(t, e);
        else if (r.length === +r.length)
        for (var i = 0, n = r.length; i < n; i++) t.call(e, r[i], i, r);
    else
        for (var a in r) r.hasOwnProperty(a) && t.call(e, r[a], a, r)
}

function Z(r, t, e) {
    if (!r) return [];
    if (!t) return Ju(r);
    if (r.map && r.map === bb) return r.map(t, e);
    for (var i = [], n = 0, a = r.length; n < a; n++) i.push(t.call(e, r[n], n, r));
    return i
}

function Ir(r, t, e, i) {
    if (r && t) {
        for (var n = 0, a = r.length; n < a; n++) e = t.call(i, e, r[n], n, r);
        return e
    }
}

function Jt(r, t, e) {
    if (!r) return [];
    if (!t) return Ju(r);
    if (r.filter && r.filter === wb) return r.filter(t, e);
    for (var i = [], n = 0, a = r.length; n < a; n++) t.call(e, r[n], n, r) && i.push(r[n]);
    return i
}

function wt(r) {
    if (!r) return [];
    if (Object.keys) return Object.keys(r);
    var t = [];
    for (var e in r) r.hasOwnProperty(e) && t.push(e);
    return t
}

function Tb(r, t) {
    for (var e = [], i = 2; i < arguments.length; i++) e[i - 2] = arguments[i];
    return function () {
        return r.apply(t, e.concat(Ku.call(arguments)))
    }
}
var xt = Ta && Q(Ta.bind) ? Ta.call.bind(Ta.bind) : Tb;

function ie(r) {
    for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
    return function () {
        return r.apply(this, t.concat(Ku.call(arguments)))
    }
}

function H(r) {
    return Array.isArray ? Array.isArray(r) : da.call(r) === "[object Array]"
}

function Q(r) {
    return typeof r == "function"
}

function V(r) {
    return typeof r == "string"
}

function Wl(r) {
    return da.call(r) === "[object String]"
}

function _t(r) {
    return typeof r == "number"
}

function X(r) {
    var t = typeof r;
    return t === "function" || !!r && t === "object"
}

function nf(r) {
    return !!Hd[da.call(r)]
}

function se(r) {
    return !!Gd[da.call(r)]
}

function qn(r) {
    return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object"
}

function ts(r) {
    return r.colorStops != null
}

function Mb(r) {
    return r.image != null
}

function Co(r) {
    return r !== r
}

function Kn() {
    for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
    for (var e = 0, i = r.length; e < i; e++)
        if (r[e] != null) return r[e]
}

function rt(r, t) {
    return r ?? t
}

function Rn(r, t, e) {
    return r ?? t ?? e
}

function Ju(r) {
    for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
    return Ku.apply(r, t)
}

function Wd(r) {
    if (typeof r == "number") return [r, r, r, r];
    var t = r.length;
    return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r
}

function nr(r, t) {
    if (!r) throw new Error(t)
}

function Ve(r) {
    return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}
var Ud = "__ec_primitive__";

function Ul(r) {
    r[Ud] = !0
}

function On(r) {
    return r[Ud]
}
var Db = function () {
        function r() {
            this.data = {}
        }
        return r.prototype.delete = function (t) {
            var e = this.has(t);
            return e && delete this.data[t], e
        }, r.prototype.has = function (t) {
            return this.data.hasOwnProperty(t)
        }, r.prototype.get = function (t) {
            return this.data[t]
        }, r.prototype.set = function (t, e) {
            return this.data[t] = e, this
        }, r.prototype.keys = function () {
            return wt(this.data)
        }, r.prototype.forEach = function (t) {
            var e = this.data;
            for (var i in e) e.hasOwnProperty(i) && t(e[i], i)
        }, r
    }(),
    Yd = typeof Map == "function";

function Ab() {
    return Yd ? new Map : new Db
}
var Ib = function () {
    function r(t) {
        var e = H(t);
        this.data = Ab();
        var i = this;
        t instanceof r ? t.each(n) : t && D(t, n);

        function n(a, o) {
            e ? i.set(a, o) : i.set(o, a)
        }
    }
    return r.prototype.hasKey = function (t) {
        return this.data.has(t)
    }, r.prototype.get = function (t) {
        return this.data.get(t)
    }, r.prototype.set = function (t, e) {
        return this.data.set(t, e), e
    }, r.prototype.each = function (t, e) {
        this.data.forEach(function (i, n) {
            t.call(e, i, n)
        })
    }, r.prototype.keys = function () {
        var t = this.data.keys();
        return Yd ? Array.from(t) : t
    }, r.prototype.removeKey = function (t) {
        this.data.delete(t)
    }, r
}();

function it(r) {
    return new Ib(r)
}

function Lb(r, t) {
    for (var e = new r.constructor(r.length + t.length), i = 0; i < r.length; i++) e[i] = r[i];
    for (var n = r.length, i = 0; i < t.length; i++) e[i + n] = t[i];
    return e
}

function es(r, t) {
    var e;
    if (Object.create) e = Object.create(r);
    else {
        var i = function () {};
        i.prototype = r, e = new i
    }
    return t && O(e, t), e
}

function Xd(r) {
    var t = r.style;
    t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none"
}

function qi(r, t) {
    return r.hasOwnProperty(t)
}

function ne() {}
var Pb = 180 / Math.PI;

function tn(r, t) {
    return r == null && (r = 0), t == null && (t = 0), [r, t]
}

function kb(r) {
    return [r[0], r[1]]
}

function af(r, t, e) {
    return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r
}

function Eb(r, t, e) {
    return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r
}

function Rb(r) {
    return Math.sqrt(Ob(r))
}

function Ob(r) {
    return r[0] * r[0] + r[1] * r[1]
}

function Ms(r, t, e) {
    return r[0] = t[0] * e, r[1] = t[1] * e, r
}

function Bb(r, t) {
    var e = Rb(t);
    return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r
}

function Yl(r, t) {
    return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]))
}
var Xl = Yl;

function Nb(r, t) {
    return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1])
}
var Gi = Nb;

function Ds(r, t, e, i) {
    return r[0] = t[0] + i * (e[0] - t[0]), r[1] = t[1] + i * (e[1] - t[1]), r
}

function Te(r, t, e) {
    var i = t[0],
        n = t[1];
    return r[0] = e[0] * i + e[2] * n + e[4], r[1] = e[1] * i + e[3] * n + e[5], r
}

function Bi(r, t, e) {
    return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r
}

function Ni(r, t, e) {
    return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r
}
var wi = function () {
        function r(t, e) {
            this.target = t, this.topTarget = e && e.topTarget
        }
        return r
    }(),
    Fb = function () {
        function r(t) {
            this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this)
        }
        return r.prototype._dragStart = function (t) {
            for (var e = t.target; e && !e.draggable;) e = e.parent || e.__hostTarget;
            e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new wi(e, t), "dragstart", t.event))
        }, r.prototype._drag = function (t) {
            var e = this._draggingTarget;
            if (e) {
                var i = t.offsetX,
                    n = t.offsetY,
                    a = i - this._x,
                    o = n - this._y;
                this._x = i, this._y = n, e.drift(a, o, t), this.handler.dispatchToElement(new wi(e, t), "drag", t.event);
                var s = this.handler.findHover(i, n, e).target,
                    l = this._dropTarget;
                this._dropTarget = s, e !== s && (l && s !== l && this.handler.dispatchToElement(new wi(l, t), "dragleave", t.event), s && s !== l && this.handler.dispatchToElement(new wi(s, t), "dragenter", t.event))
            }
        }, r.prototype._dragEnd = function (t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.handler.dispatchToElement(new wi(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new wi(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }, r
    }(),
    Xe = function () {
        function r(t) {
            t && (this._$eventProcessor = t)
        }
        return r.prototype.on = function (t, e, i, n) {
            this._$handlers || (this._$handlers = {});
            var a = this._$handlers;
            if (typeof e == "function" && (n = i, i = e, e = null), !i || !t) return this;
            var o = this._$eventProcessor;
            e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)), a[t] || (a[t] = []);
            for (var s = 0; s < a[t].length; s++)
                if (a[t][s].h === i) return this;
            var l = {
                    h: i,
                    query: e,
                    ctx: n || this,
                    callAtLast: i.zrEventfulCallAtLast
                },
                u = a[t].length - 1,
                c = a[t][u];
            return c && c.callAtLast ? a[t].splice(u, 0, l) : a[t].push(l), this
        }, r.prototype.isSilent = function (t) {
            var e = this._$handlers;
            return !e || !e[t] || !e[t].length
        }, r.prototype.off = function (t, e) {
            var i = this._$handlers;
            if (!i) return this;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (i[t]) {
                    for (var n = [], a = 0, o = i[t].length; a < o; a++) i[t][a].h !== e && n.push(i[t][a]);
                    i[t] = n
                }
                i[t] && i[t].length === 0 && delete i[t]
            } else delete i[t];
            return this
        }, r.prototype.trigger = function (t) {
            for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            if (!this._$handlers) return this;
            var n = this._$handlers[t],
                a = this._$eventProcessor;
            if (n)
                for (var o = e.length, s = n.length, l = 0; l < s; l++) {
                    var u = n[l];
                    if (!(a && a.filter && u.query != null && !a.filter(t, u.query))) switch (o) {
                        case 0:
                            u.h.call(u.ctx);
                            break;
                        case 1:
                            u.h.call(u.ctx, e[0]);
                            break;
                        case 2:
                            u.h.call(u.ctx, e[0], e[1]);
                            break;
                        default:
                            u.h.apply(u.ctx, e);
                            break
                    }
                }
            return a && a.afterTrigger && a.afterTrigger(t), this
        }, r.prototype.triggerWithContext = function (t) {
            for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            if (!this._$handlers) return this;
            var n = this._$handlers[t],
                a = this._$eventProcessor;
            if (n)
                for (var o = e.length, s = e[o - 1], l = n.length, u = 0; u < l; u++) {
                    var c = n[u];
                    if (!(a && a.filter && c.query != null && !a.filter(t, c.query))) switch (o) {
                        case 0:
                            c.h.call(s);
                            break;
                        case 1:
                            c.h.call(s, e[0]);
                            break;
                        case 2:
                            c.h.call(s, e[0], e[1]);
                            break;
                        default:
                            c.h.apply(s, e.slice(1, o - 1));
                            break
                    }
                }
            return a && a.afterTrigger && a.afterTrigger(t), this
        }, r
    }(),
    $b = Math.log(2);

function Zl(r, t, e, i, n, a) {
    var o = i + "-" + n,
        s = r.length;
    if (a.hasOwnProperty(o)) return a[o];
    if (t === 1) {
        var l = Math.round(Math.log((1 << s) - 1 & ~n) / $b);
        return r[e][l]
    }
    for (var u = i | 1 << e, c = e + 1; i & 1 << c;) c++;
    for (var f = 0, v = 0, h = 0; v < s; v++) {
        var d = 1 << v;
        d & n || (f += (h % 2 ? -1 : 1) * r[e][v] * Zl(r, t - 1, c, u, n | d, a), h++)
    }
    return a[o] = f, f
}

function of (r, t) {
    var e = [
            [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
            [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
            [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
            [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
            [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
            [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
            [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
            [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
        ],
        i = {},
        n = Zl(e, 8, 0, 0, 0, i);
    if (n !== 0) {
        for (var a = [], o = 0; o < 8; o++)
            for (var s = 0; s < 8; s++) a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Zl(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, i) / n * t[o];
        return function (l, u, c) {
            var f = u * a[6] + c * a[7] + 1;
            l[0] = (u * a[0] + c * a[1] + a[2]) / f, l[1] = (u * a[3] + c * a[4] + a[5]) / f
        }
    }
}
var sf = "___zrEVENTSAVED",
    As = [];

function zb(r, t, e, i, n) {
    return ql(As, t, i, n, !0) && ql(r, e, As[0], As[1])
}

function ql(r, t, e, i, n) {
    if (t.getBoundingClientRect && j.domSupported && !Zd(t)) {
        var a = t[sf] || (t[sf] = {}),
            o = Hb(t, a),
            s = Gb(o, a, n);
        if (s) return s(r, e, i), !0
    }
    return !1
}

function Hb(r, t) {
    var e = t.markers;
    if (e) return e;
    e = t.markers = [];
    for (var i = ["left", "right"], n = ["top", "bottom"], a = 0; a < 4; a++) {
        var o = document.createElement("div"),
            s = o.style,
            l = a % 2,
            u = (a >> 1) % 2;
        s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i[l] + ":0", n[u] + ":0", i[1 - l] + ":auto", n[1 - u] + ":auto", ""].join("!important;"), r.appendChild(o), e.push(o)
    }
    return e
}

function Gb(r, t, e) {
    for (var i = e ? "invTrans" : "trans", n = t[i], a = t.srcCoords, o = [], s = [], l = !0, u = 0; u < 4; u++) {
        var c = r[u].getBoundingClientRect(),
            f = 2 * u,
            v = c.left,
            h = c.top;
        o.push(v, h), l = l && a && v === a[f] && h === a[f + 1], s.push(r[u].offsetLeft, r[u].offsetTop)
    }
    return l && n ? n : (t.srcCoords = o, t[i] = e ? of (s, o) : of (o, s))
}

function Zd(r) {
    return r.nodeName.toUpperCase() === "CANVAS"
}
var Vb = /([&<>"'])/g,
    Wb = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };

function xe(r) {
    return r == null ? "" : (r + "").replace(Vb, function (t, e) {
        return Wb[e]
    })
}
var Ub = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Is = [],
    Yb = j.browser.firefox && +j.browser.version.split(".")[0] < 39;

function Kl(r, t, e, i) {
    return e = e || {}, i ? lf(r, t, e) : Yb && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : lf(r, t, e), e
}

function lf(r, t, e) {
    if (j.domSupported && r.getBoundingClientRect) {
        var i = t.clientX,
            n = t.clientY;
        if (Zd(r)) {
            var a = r.getBoundingClientRect();
            e.zrX = i - a.left, e.zrY = n - a.top;
            return
        } else if (ql(Is, r, i, n)) {
            e.zrX = Is[0], e.zrY = Is[1];
            return
        }
    }
    e.zrX = e.zrY = 0
}

function tc(r) {
    return r || window.event
}

function me(r, t, e) {
    if (t = tc(t), t.zrX != null) return t;
    var i = t.type,
        n = i && i.indexOf("touch") >= 0;
    if (n) {
        var o = i !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
        o && Kl(r, o, t, e)
    } else {
        Kl(r, t, t, e);
        var a = Xb(t);
        t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3
    }
    var s = t.button;
    return t.which == null && s !== void 0 && Ub.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t
}

function Xb(r) {
    var t = r.wheelDelta;
    if (t) return t;
    var e = r.deltaX,
        i = r.deltaY;
    if (e == null || i == null) return t;
    var n = Math.abs(i !== 0 ? i : e),
        a = i > 0 ? -1 : i < 0 ? 1 : e > 0 ? -1 : 1;
    return 3 * n * a
}

function Zb(r, t, e, i) {
    r.addEventListener(t, e, i)
}

function qb(r, t, e, i) {
    r.removeEventListener(t, e, i)
}
var qd = function (r) {
        r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0
    },
    Kb = function () {
        function r() {
            this._track = []
        }
        return r.prototype.recognize = function (t, e, i) {
            return this._doTrack(t, e, i), this._recognize(t)
        }, r.prototype.clear = function () {
            return this._track.length = 0, this
        }, r.prototype._doTrack = function (t, e, i) {
            var n = t.touches;
            if (n) {
                for (var a = {
                        points: [],
                        touches: [],
                        target: e,
                        event: t
                    }, o = 0, s = n.length; o < s; o++) {
                    var l = n[o],
                        u = Kl(i, l, {});
                    a.points.push([u.zrX, u.zrY]), a.touches.push(l)
                }
                this._track.push(a)
            }
        }, r.prototype._recognize = function (t) {
            for (var e in Ls)
                if (Ls.hasOwnProperty(e)) {
                    var i = Ls[e](this._track, t);
                    if (i) return i
                }
        }, r
    }();

function uf(r) {
    var t = r[1][0] - r[0][0],
        e = r[1][1] - r[0][1];
    return Math.sqrt(t * t + e * e)
}

function jb(r) {
    return [(r[0][0] + r[1][0]) / 2, (r[0][1] + r[1][1]) / 2]
}
var Ls = {
    pinch: function (r, t) {
        var e = r.length;
        if (e) {
            var i = (r[e - 1] || {}).points,
                n = (r[e - 2] || {}).points || i;
            if (n && n.length > 1 && i && i.length > 1) {
                var a = uf(i) / uf(n);
                !isFinite(a) && (a = 1), t.pinchScale = a;
                var o = jb(i);
                return t.pinchX = o[0], t.pinchY = o[1], {
                    type: "pinch",
                    target: r[0].target,
                    event: t
                }
            }
        }
    }
};

function Vi() {
    return [1, 0, 0, 1, 0, 0]
}

function ec(r) {
    return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r
}

function Qb(r, t) {
    return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r
}

function Wi(r, t, e) {
    var i = t[0] * e[0] + t[2] * e[1],
        n = t[1] * e[0] + t[3] * e[1],
        a = t[0] * e[2] + t[2] * e[3],
        o = t[1] * e[2] + t[3] * e[3],
        s = t[0] * e[4] + t[2] * e[5] + t[4],
        l = t[1] * e[4] + t[3] * e[5] + t[5];
    return r[0] = i, r[1] = n, r[2] = a, r[3] = o, r[4] = s, r[5] = l, r
}

function jl(r, t, e) {
    return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r
}

function rc(r, t, e, i) {
    i === void 0 && (i = [0, 0]);
    var n = t[0],
        a = t[2],
        o = t[4],
        s = t[1],
        l = t[3],
        u = t[5],
        c = Math.sin(e),
        f = Math.cos(e);
    return r[0] = n * f + s * c, r[1] = -n * c + s * f, r[2] = a * f + l * c, r[3] = -a * c + f * l, r[4] = f * (o - i[0]) + c * (u - i[1]) + i[0], r[5] = f * (u - i[1]) - c * (o - i[0]) + i[1], r
}

function Jb(r, t, e) {
    var i = e[0],
        n = e[1];
    return r[0] = t[0] * i, r[1] = t[1] * n, r[2] = t[2] * i, r[3] = t[3] * n, r[4] = t[4] * i, r[5] = t[5] * n, r
}

function ic(r, t) {
    var e = t[0],
        i = t[2],
        n = t[4],
        a = t[1],
        o = t[3],
        s = t[5],
        l = e * o - a * i;
    return l ? (l = 1 / l, r[0] = o * l, r[1] = -a * l, r[2] = -i * l, r[3] = e * l, r[4] = (i * s - o * n) * l, r[5] = (a * n - e * s) * l, r) : null
}
var tS = function () {
    function r(t, e) {
        this.x = t || 0, this.y = e || 0
    }
    return r.prototype.copy = function (t) {
        return this.x = t.x, this.y = t.y, this
    }, r.prototype.clone = function () {
        return new r(this.x, this.y)
    }, r.prototype.set = function (t, e) {
        return this.x = t, this.y = e, this
    }, r.prototype.equal = function (t) {
        return t.x === this.x && t.y === this.y
    }, r.prototype.add = function (t) {
        return this.x += t.x, this.y += t.y, this
    }, r.prototype.scale = function (t) {
        this.x *= t, this.y *= t
    }, r.prototype.scaleAndAdd = function (t, e) {
        this.x += t.x * e, this.y += t.y * e
    }, r.prototype.sub = function (t) {
        return this.x -= t.x, this.y -= t.y, this
    }, r.prototype.dot = function (t) {
        return this.x * t.x + this.y * t.y
    }, r.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }, r.prototype.lenSquare = function () {
        return this.x * this.x + this.y * this.y
    }, r.prototype.normalize = function () {
        var t = this.len();
        return this.x /= t, this.y /= t, this
    }, r.prototype.distance = function (t) {
        var e = this.x - t.x,
            i = this.y - t.y;
        return Math.sqrt(e * e + i * i)
    }, r.prototype.distanceSquare = function (t) {
        var e = this.x - t.x,
            i = this.y - t.y;
        return e * e + i * i
    }, r.prototype.negate = function () {
        return this.x = -this.x, this.y = -this.y, this
    }, r.prototype.transform = function (t) {
        if (t) {
            var e = this.x,
                i = this.y;
            return this.x = t[0] * e + t[2] * i + t[4], this.y = t[1] * e + t[3] * i + t[5], this
        }
    }, r.prototype.toArray = function (t) {
        return t[0] = this.x, t[1] = this.y, t
    }, r.prototype.fromArray = function (t) {
        this.x = t[0], this.y = t[1]
    }, r.set = function (t, e, i) {
        t.x = e, t.y = i
    }, r.copy = function (t, e) {
        t.x = e.x, t.y = e.y
    }, r.len = function (t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
    }, r.lenSquare = function (t) {
        return t.x * t.x + t.y * t.y
    }, r.dot = function (t, e) {
        return t.x * e.x + t.y * e.y
    }, r.add = function (t, e, i) {
        t.x = e.x + i.x, t.y = e.y + i.y
    }, r.sub = function (t, e, i) {
        t.x = e.x - i.x, t.y = e.y - i.y
    }, r.scale = function (t, e, i) {
        t.x = e.x * i, t.y = e.y * i
    }, r.scaleAndAdd = function (t, e, i, n) {
        t.x = e.x + i.x * n, t.y = e.y + i.y * n
    }, r.lerp = function (t, e, i, n) {
        var a = 1 - n;
        t.x = a * e.x + n * i.x, t.y = a * e.y + n * i.y
    }, r
}();
const K = tS;
var Ma = Math.min,
    Da = Math.max,
    Rr = new K,
    Or = new K,
    Br = new K,
    Nr = new K,
    ln = new K,
    un = new K,
    ct = function () {
        function r(t, e, i, n) {
            i < 0 && (t = t + i, i = -i), n < 0 && (e = e + n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n
        }
        return r.prototype.union = function (t) {
            var e = Ma(t.x, this.x),
                i = Ma(t.y, this.y);
            isFinite(this.x) && isFinite(this.width) ? this.width = Da(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = Da(t.y + t.height, this.y + this.height) - i : this.height = t.height, this.x = e, this.y = i
        }, r.prototype.applyTransform = function (t) {
            r.applyTransform(this, this, t)
        }, r.prototype.calculateTransform = function (t) {
            var e = this,
                i = t.width / e.width,
                n = t.height / e.height,
                a = Vi();
            return jl(a, a, [-e.x, -e.y]), Jb(a, a, [i, n]), jl(a, a, [t.x, t.y]), a
        }, r.prototype.intersect = function (t, e) {
            if (!t) return !1;
            t instanceof r || (t = r.create(t));
            var i = this,
                n = i.x,
                a = i.x + i.width,
                o = i.y,
                s = i.y + i.height,
                l = t.x,
                u = t.x + t.width,
                c = t.y,
                f = t.y + t.height,
                v = !(a < l || u < n || s < c || f < o);
            if (e) {
                var h = 1 / 0,
                    d = 0,
                    m = Math.abs(a - l),
                    p = Math.abs(u - n),
                    g = Math.abs(s - c),
                    _ = Math.abs(f - o),
                    y = Math.min(m, p),
                    x = Math.min(g, _);
                a < l || u < n ? y > d && (d = y, m < p ? K.set(un, -m, 0) : K.set(un, p, 0)) : y < h && (h = y, m < p ? K.set(ln, m, 0) : K.set(ln, -p, 0)), s < c || f < o ? x > d && (d = x, g < _ ? K.set(un, 0, -g) : K.set(un, 0, _)) : y < h && (h = y, g < _ ? K.set(ln, 0, g) : K.set(ln, 0, -_))
            }
            return e && K.copy(e, v ? ln : un), v
        }, r.prototype.contain = function (t, e) {
            var i = this;
            return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
        }, r.prototype.clone = function () {
            return new r(this.x, this.y, this.width, this.height)
        }, r.prototype.copy = function (t) {
            r.copy(this, t)
        }, r.prototype.plain = function () {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }
        }, r.prototype.isFinite = function () {
            return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height)
        }, r.prototype.isZero = function () {
            return this.width === 0 || this.height === 0
        }, r.create = function (t) {
            return new r(t.x, t.y, t.width, t.height)
        }, r.copy = function (t, e) {
            t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height
        }, r.applyTransform = function (t, e, i) {
            if (!i) {
                t !== e && r.copy(t, e);
                return
            }
            if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
                var n = i[0],
                    a = i[3],
                    o = i[4],
                    s = i[5];
                t.x = e.x * n + o, t.y = e.y * a + s, t.width = e.width * n, t.height = e.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
                return
            }
            Rr.x = Br.x = e.x, Rr.y = Nr.y = e.y, Or.x = Nr.x = e.x + e.width, Or.y = Br.y = e.y + e.height, Rr.transform(i), Nr.transform(i), Or.transform(i), Br.transform(i), t.x = Ma(Rr.x, Or.x, Br.x, Nr.x), t.y = Ma(Rr.y, Or.y, Br.y, Nr.y);
            var l = Da(Rr.x, Or.x, Br.x, Nr.x),
                u = Da(Rr.y, Or.y, Br.y, Nr.y);
            t.width = l - t.x, t.height = u - t.y
        }, r
    }(),
    Kd = "silent";

function eS(r, t, e) {
    return {
        type: r,
        event: e,
        target: t.target,
        topTarget: t.topTarget,
        cancelBubble: !1,
        offsetX: e.zrX,
        offsetY: e.zrY,
        gestureEvent: e.gestureEvent,
        pinchX: e.pinchX,
        pinchY: e.pinchY,
        pinchScale: e.pinchScale,
        wheelDelta: e.zrDelta,
        zrByTouch: e.zrByTouch,
        which: e.which,
        stop: rS
    }
}

function rS() {
    qd(this.event)
}
var iS = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.handler = null, e
        }
        return t.prototype.dispose = function () {}, t.prototype.setCursor = function () {}, t
    }(Xe),
    cn = function () {
        function r(t, e) {
            this.x = t, this.y = e
        }
        return r
    }(),
    nS = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    Ps = new ct(0, 0, 0, 0),
    jd = function (r) {
        z(t, r);

        function t(e, i, n, a, o) {
            var s = r.call(this) || this;
            return s._hovered = new cn(0, 0), s.storage = e, s.painter = i, s.painterRoot = a, s._pointerSize = o, n = n || new iS, s.proxy = null, s.setHandlerProxy(n), s._draggingMgr = new Fb(s), s
        }
        return t.prototype.setHandlerProxy = function (e) {
            this.proxy && this.proxy.dispose(), e && (D(nS, function (i) {
                e.on && e.on(i, this[i], this)
            }, this), e.handler = this), this.proxy = e
        }, t.prototype.mousemove = function (e) {
            var i = e.zrX,
                n = e.zrY,
                a = Qd(this, i, n),
                o = this._hovered,
                s = o.target;
            s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
            var l = this._hovered = a ? new cn(i, n) : this.findHover(i, n),
                u = l.target,
                c = this.proxy;
            c.setCursor && c.setCursor(u ? u.cursor : "default"), s && u !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(l, "mousemove", e), u && u !== s && this.dispatchToElement(l, "mouseover", e)
        }, t.prototype.mouseout = function (e) {
            var i = e.zrEventControl;
            i !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), i !== "no_globalout" && this.trigger("globalout", {
                type: "globalout",
                event: e
            })
        }, t.prototype.resize = function () {
            this._hovered = new cn(0, 0)
        }, t.prototype.dispatch = function (e, i) {
            var n = this[e];
            n && n.call(this, i)
        }, t.prototype.dispose = function () {
            this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null
        }, t.prototype.setCursorStyle = function (e) {
            var i = this.proxy;
            i.setCursor && i.setCursor(e)
        }, t.prototype.dispatchToElement = function (e, i, n) {
            e = e || {};
            var a = e.target;
            if (!(a && a.silent)) {
                for (var o = "on" + i, s = eS(i, e, n); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(i, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble););
                s.cancelBubble || (this.trigger(i, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function (l) {
                    typeof l[o] == "function" && l[o].call(l, s), l.trigger && l.trigger(i, s)
                }))
            }
        }, t.prototype.findHover = function (e, i, n) {
            var a = this.storage.getDisplayList(),
                o = new cn(e, i);
            if (cf(a, o, e, i, n), this._pointerSize && !o.target) {
                for (var s = [], l = this._pointerSize, u = l / 2, c = new ct(e - u, i - u, l, l), f = a.length - 1; f >= 0; f--) {
                    var v = a[f];
                    v !== n && !v.ignore && !v.ignoreCoarsePointer && (!v.parent || !v.parent.ignoreCoarsePointer) && (Ps.copy(v.getBoundingRect()), v.transform && Ps.applyTransform(v.transform), Ps.intersect(c) && s.push(v))
                }
                if (s.length)
                    for (var h = 4, d = Math.PI / 12, m = Math.PI * 2, p = 0; p < u; p += h)
                        for (var g = 0; g < m; g += d) {
                            var _ = e + p * Math.cos(g),
                                y = i + p * Math.sin(g);
                            if (cf(s, o, _, y, n), o.target) return o
                        }
            }
            return o
        }, t.prototype.processGesture = function (e, i) {
            this._gestureMgr || (this._gestureMgr = new Kb);
            var n = this._gestureMgr;
            i === "start" && n.clear();
            var a = n.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
            if (i === "end" && n.clear(), a) {
                var o = a.type;
                e.gestureEvent = o;
                var s = new cn;
                s.target = a.target, this.dispatchToElement(s, o, a.event)
            }
        }, t
    }(Xe);
D(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (r) {
    jd.prototype[r] = function (t) {
        var e = t.zrX,
            i = t.zrY,
            n = Qd(this, e, i),
            a, o;
        if ((r !== "mouseup" || !n) && (a = this.findHover(e, i), o = a.target), r === "mousedown") this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
        else if (r === "mouseup") this._upEl = o;
        else if (r === "click") {
            if (this._downEl !== this._upEl || !this._downPoint || Xl(this._downPoint, [t.zrX, t.zrY]) > 4) return;
            this._downPoint = null
        }
        this.dispatchToElement(a, r, t)
    }
});

function aS(r, t, e) {
    if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
        for (var i = r, n = void 0, a = !1; i;) {
            if (i.ignoreClip && (a = !0), !a) {
                var o = i.getClipPath();
                if (o && !o.contain(t, e)) return !1
            }
            i.silent && (n = !0);
            var s = i.__hostTarget;
            i = s || i.parent
        }
        return n ? Kd : !0
    }
    return !1
}

function cf(r, t, e, i, n) {
    for (var a = r.length - 1; a >= 0; a--) {
        var o = r[a],
            s = void 0;
        if (o !== n && !o.ignore && (s = aS(o, e, i)) && (!t.topTarget && (t.topTarget = o), s !== Kd)) {
            t.target = o;
            break
        }
    }
}

function Qd(r, t, e) {
    var i = r.painter;
    return t < 0 || t > i.getWidth() || e < 0 || e > i.getHeight()
}
const oS = jd;
var Jd = 32,
    fn = 7;

function sS(r) {
    for (var t = 0; r >= Jd;) t |= r & 1, r >>= 1;
    return r + t
}

function ff(r, t, e, i) {
    var n = t + 1;
    if (n === e) return 1;
    if (i(r[n++], r[t]) < 0) {
        for (; n < e && i(r[n], r[n - 1]) < 0;) n++;
        lS(r, t, n)
    } else
        for (; n < e && i(r[n], r[n - 1]) >= 0;) n++;
    return n - t
}

function lS(r, t, e) {
    for (e--; t < e;) {
        var i = r[t];
        r[t++] = r[e], r[e--] = i
    }
}

function hf(r, t, e, i, n) {
    for (i === t && i++; i < e; i++) {
        for (var a = r[i], o = t, s = i, l; o < s;) l = o + s >>> 1, n(a, r[l]) < 0 ? s = l : o = l + 1;
        var u = i - o;
        switch (u) {
            case 3:
                r[o + 3] = r[o + 2];
            case 2:
                r[o + 2] = r[o + 1];
            case 1:
                r[o + 1] = r[o];
                break;
            default:
                for (; u > 0;) r[o + u] = r[o + u - 1], u--
        }
        r[o] = a
    }
}

function ks(r, t, e, i, n, a) {
    var o = 0,
        s = 0,
        l = 1;
    if (a(r, t[e + n]) > 0) {
        for (s = i - n; l < s && a(r, t[e + n + l]) > 0;) o = l, l = (l << 1) + 1, l <= 0 && (l = s);
        l > s && (l = s), o += n, l += n
    } else {
        for (s = n + 1; l < s && a(r, t[e + n - l]) <= 0;) o = l, l = (l << 1) + 1, l <= 0 && (l = s);
        l > s && (l = s);
        var u = o;
        o = n - l, l = n - u
    }
    for (o++; o < l;) {
        var c = o + (l - o >>> 1);
        a(r, t[e + c]) > 0 ? o = c + 1 : l = c
    }
    return l
}

function Es(r, t, e, i, n, a) {
    var o = 0,
        s = 0,
        l = 1;
    if (a(r, t[e + n]) < 0) {
        for (s = n + 1; l < s && a(r, t[e + n - l]) < 0;) o = l, l = (l << 1) + 1, l <= 0 && (l = s);
        l > s && (l = s);
        var u = o;
        o = n - l, l = n - u
    } else {
        for (s = i - n; l < s && a(r, t[e + n + l]) >= 0;) o = l, l = (l << 1) + 1, l <= 0 && (l = s);
        l > s && (l = s), o += n, l += n
    }
    for (o++; o < l;) {
        var c = o + (l - o >>> 1);
        a(r, t[e + c]) < 0 ? l = c : o = c + 1
    }
    return l
}

function uS(r, t) {
    var e = fn,
        i, n, a = 0,
        o = [];
    i = [], n = [];

    function s(h, d) {
        i[a] = h, n[a] = d, a += 1
    }

    function l() {
        for (; a > 1;) {
            var h = a - 2;
            if (h >= 1 && n[h - 1] <= n[h] + n[h + 1] || h >= 2 && n[h - 2] <= n[h] + n[h - 1]) n[h - 1] < n[h + 1] && h--;
            else if (n[h] > n[h + 1]) break;
            c(h)
        }
    }

    function u() {
        for (; a > 1;) {
            var h = a - 2;
            h > 0 && n[h - 1] < n[h + 1] && h--, c(h)
        }
    }

    function c(h) {
        var d = i[h],
            m = n[h],
            p = i[h + 1],
            g = n[h + 1];
        n[h] = m + g, h === a - 3 && (i[h + 1] = i[h + 2], n[h + 1] = n[h + 2]), a--;
        var _ = Es(r[p], r, d, m, 0, t);
        d += _, m -= _, m !== 0 && (g = ks(r[d + m - 1], r, p, g, g - 1, t), g !== 0 && (m <= g ? f(d, m, p, g) : v(d, m, p, g)))
    }

    function f(h, d, m, p) {
        var g = 0;
        for (g = 0; g < d; g++) o[g] = r[h + g];
        var _ = 0,
            y = m,
            x = h;
        if (r[x++] = r[y++], --p === 0) {
            for (g = 0; g < d; g++) r[x + g] = o[_ + g];
            return
        }
        if (d === 1) {
            for (g = 0; g < p; g++) r[x + g] = r[y + g];
            r[x + p] = o[_];
            return
        }
        for (var S = e, w, T, C;;) {
            w = 0, T = 0, C = !1;
            do
                if (t(r[y], o[_]) < 0) {
                    if (r[x++] = r[y++], T++, w = 0, --p === 0) {
                        C = !0;
                        break
                    }
                } else if (r[x++] = o[_++], w++, T = 0, --d === 1) {
                C = !0;
                break
            } while ((w | T) < S);
            if (C) break;
            do {
                if (w = Es(r[y], o, _, d, 0, t), w !== 0) {
                    for (g = 0; g < w; g++) r[x + g] = o[_ + g];
                    if (x += w, _ += w, d -= w, d <= 1) {
                        C = !0;
                        break
                    }
                }
                if (r[x++] = r[y++], --p === 0) {
                    C = !0;
                    break
                }
                if (T = ks(o[_], r, y, p, 0, t), T !== 0) {
                    for (g = 0; g < T; g++) r[x + g] = r[y + g];
                    if (x += T, y += T, p -= T, p === 0) {
                        C = !0;
                        break
                    }
                }
                if (r[x++] = o[_++], --d === 1) {
                    C = !0;
                    break
                }
                S--
            } while (w >= fn || T >= fn);
            if (C) break;
            S < 0 && (S = 0), S += 2
        }
        if (e = S, e < 1 && (e = 1), d === 1) {
            for (g = 0; g < p; g++) r[x + g] = r[y + g];
            r[x + p] = o[_]
        } else {
            if (d === 0) throw new Error;
            for (g = 0; g < d; g++) r[x + g] = o[_ + g]
        }
    }

    function v(h, d, m, p) {
        var g = 0;
        for (g = 0; g < p; g++) o[g] = r[m + g];
        var _ = h + d - 1,
            y = p - 1,
            x = m + p - 1,
            S = 0,
            w = 0;
        if (r[x--] = r[_--], --d === 0) {
            for (S = x - (p - 1), g = 0; g < p; g++) r[S + g] = o[g];
            return
        }
        if (p === 1) {
            for (x -= d, _ -= d, w = x + 1, S = _ + 1, g = d - 1; g >= 0; g--) r[w + g] = r[S + g];
            r[x] = o[y];
            return
        }
        for (var T = e;;) {
            var C = 0,
                M = 0,
                I = !1;
            do
                if (t(o[y], r[_]) < 0) {
                    if (r[x--] = r[_--], C++, M = 0, --d === 0) {
                        I = !0;
                        break
                    }
                } else if (r[x--] = o[y--], M++, C = 0, --p === 1) {
                I = !0;
                break
            } while ((C | M) < T);
            if (I) break;
            do {
                if (C = d - Es(o[y], r, h, d, d - 1, t), C !== 0) {
                    for (x -= C, _ -= C, d -= C, w = x + 1, S = _ + 1, g = C - 1; g >= 0; g--) r[w + g] = r[S + g];
                    if (d === 0) {
                        I = !0;
                        break
                    }
                }
                if (r[x--] = o[y--], --p === 1) {
                    I = !0;
                    break
                }
                if (M = p - ks(r[_], o, 0, p, p - 1, t), M !== 0) {
                    for (x -= M, y -= M, p -= M, w = x + 1, S = y + 1, g = 0; g < M; g++) r[w + g] = o[S + g];
                    if (p <= 1) {
                        I = !0;
                        break
                    }
                }
                if (r[x--] = r[_--], --d === 0) {
                    I = !0;
                    break
                }
                T--
            } while (C >= fn || M >= fn);
            if (I) break;
            T < 0 && (T = 0), T += 2
        }
        if (e = T, e < 1 && (e = 1), p === 1) {
            for (x -= d, _ -= d, w = x + 1, S = _ + 1, g = d - 1; g >= 0; g--) r[w + g] = r[S + g];
            r[x] = o[y]
        } else {
            if (p === 0) throw new Error;
            for (S = x - (p - 1), g = 0; g < p; g++) r[S + g] = o[g]
        }
    }
    return {
        mergeRuns: l,
        forceMergeRuns: u,
        pushRun: s
    }
}

function co(r, t, e, i) {
    e || (e = 0), i || (i = r.length);
    var n = i - e;
    if (!(n < 2)) {
        var a = 0;
        if (n < Jd) {
            a = ff(r, e, i, t), hf(r, e, i, e + a, t);
            return
        }
        var o = uS(r, t),
            s = sS(n);
        do {
            if (a = ff(r, e, i, t), a < s) {
                var l = n;
                l > s && (l = s), hf(r, e, e + l, e + a, t), a = l
            }
            o.pushRun(e, a), o.mergeRuns(), n -= a, e += a
        } while (n !== 0);
        o.forceMergeRuns()
    }
}
var fe = 1,
    Dn = 2,
    Ri = 4,
    vf = !1;

function Rs() {
    vf || (vf = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"))
}

function df(r, t) {
    return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel
}
var cS = function () {
        function r() {
            this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = df
        }
        return r.prototype.traverse = function (t, e) {
            for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e)
        }, r.prototype.getDisplayList = function (t, e) {
            e = e || !1;
            var i = this._displayList;
            return (t || !i.length) && this.updateDisplayList(e), i
        }, r.prototype.updateDisplayList = function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, i = this._displayList, n = 0, a = e.length; n < a; n++) this._updateAndAddDisplayable(e[n], null, t);
            i.length = this._displayListLen, co(i, df)
        }, r.prototype._updateAndAddDisplayable = function (t, e, i) {
            if (!(t.ignore && !i)) {
                t.beforeUpdate(), t.update(), t.afterUpdate();
                var n = t.getClipPath();
                if (t.ignoreClip) e = null;
                else if (n) {
                    e ? e = e.slice() : e = [];
                    for (var a = n, o = t; a;) a.parent = o, a.updateTransform(), e.push(a), o = a, a = a.getClipPath()
                }
                if (t.childrenRef) {
                    for (var s = t.childrenRef(), l = 0; l < s.length; l++) {
                        var u = s[l];
                        t.__dirty && (u.__dirty |= fe), this._updateAndAddDisplayable(u, e, i)
                    }
                    t.__dirty = 0
                } else {
                    var c = t;
                    e && e.length ? c.__clipPaths = e : c.__clipPaths && c.__clipPaths.length > 0 && (c.__clipPaths = []), isNaN(c.z) && (Rs(), c.z = 0), isNaN(c.z2) && (Rs(), c.z2 = 0), isNaN(c.zlevel) && (Rs(), c.zlevel = 0), this._displayList[this._displayListLen++] = c
                }
                var f = t.getDecalElement && t.getDecalElement();
                f && this._updateAndAddDisplayable(f, e, i);
                var v = t.getTextGuideLine();
                v && this._updateAndAddDisplayable(v, e, i);
                var h = t.getTextContent();
                h && this._updateAndAddDisplayable(h, e, i)
            }
        }, r.prototype.addRoot = function (t) {
            t.__zr && t.__zr.storage === this || this._roots.push(t)
        }, r.prototype.delRoot = function (t) {
            if (t instanceof Array) {
                for (var e = 0, i = t.length; e < i; e++) this.delRoot(t[e]);
                return
            }
            var n = dt(this._roots, t);
            n >= 0 && this._roots.splice(n, 1)
        }, r.prototype.delAllRoots = function () {
            this._roots = [], this._displayList = [], this._displayListLen = 0
        }, r.prototype.getRoots = function () {
            return this._roots
        }, r.prototype.dispose = function () {
            this._displayList = null, this._roots = null
        }, r
    }(),
    tp;
tp = j.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (r) {
    return setTimeout(r, 16)
};
const Ql = tp;
var Bn = {
        linear: function (r) {
            return r
        },
        quadraticIn: function (r) {
            return r * r
        },
        quadraticOut: function (r) {
            return r * (2 - r)
        },
        quadraticInOut: function (r) {
            return (r *= 2) < 1 ?.5 * r * r : -.5 * (--r * (r - 2) - 1)
        },
        cubicIn: function (r) {
            return r * r * r
        },
        cubicOut: function (r) {
            return --r * r * r + 1
        },
        cubicInOut: function (r) {
            return (r *= 2) < 1 ?.5 * r * r * r : .5 * ((r -= 2) * r * r + 2)
        },
        quarticIn: function (r) {
            return r * r * r * r
        },
        quarticOut: function (r) {
            return 1 - --r * r * r * r
        },
        quarticInOut: function (r) {
            return (r *= 2) < 1 ?.5 * r * r * r * r : -.5 * ((r -= 2) * r * r * r - 2)
        },
        quinticIn: function (r) {
            return r * r * r * r * r
        },
        quinticOut: function (r) {
            return --r * r * r * r * r + 1
        },
        quinticInOut: function (r) {
            return (r *= 2) < 1 ?.5 * r * r * r * r * r : .5 * ((r -= 2) * r * r * r * r + 2)
        },
        sinusoidalIn: function (r) {
            return 1 - Math.cos(r * Math.PI / 2)
        },
        sinusoidalOut: function (r) {
            return Math.sin(r * Math.PI / 2)
        },
        sinusoidalInOut: function (r) {
            return .5 * (1 - Math.cos(Math.PI * r))
        },
        exponentialIn: function (r) {
            return r === 0 ? 0 : Math.pow(1024, r - 1)
        },
        exponentialOut: function (r) {
            return r === 1 ? 1 : 1 - Math.pow(2, -10 * r)
        },
        exponentialInOut: function (r) {
            return r === 0 ? 0 : r === 1 ? 1 : (r *= 2) < 1 ?.5 * Math.pow(1024, r - 1) : .5 * (-Math.pow(2, -10 * (r - 1)) + 2)
        },
        circularIn: function (r) {
            return 1 - Math.sqrt(1 - r * r)
        },
        circularOut: function (r) {
            return Math.sqrt(1 - --r * r)
        },
        circularInOut: function (r) {
            return (r *= 2) < 1 ? -.5 * (Math.sqrt(1 - r * r) - 1) : .5 * (Math.sqrt(1 - (r -= 2) * r) + 1)
        },
        elasticIn: function (r) {
            var t, e = .1,
                i = .4;
            return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)))
        },
        elasticOut: function (r) {
            var t, e = .1,
                i = .4;
            return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * r) * Math.sin((r - t) * (2 * Math.PI) / i) + 1)
        },
        elasticInOut: function (r) {
            var t, e = .1,
                i = .4;
            return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), (r *= 2) < 1 ? -.5 * (e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)) : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i) * .5 + 1)
        },
        backIn: function (r) {
            var t = 1.70158;
            return r * r * ((t + 1) * r - t)
        },
        backOut: function (r) {
            var t = 1.70158;
            return --r * r * ((t + 1) * r + t) + 1
        },
        backInOut: function (r) {
            var t = 2.5949095;
            return (r *= 2) < 1 ?.5 * (r * r * ((t + 1) * r - t)) : .5 * ((r -= 2) * r * ((t + 1) * r + t) + 2)
        },
        bounceIn: function (r) {
            return 1 - Bn.bounceOut(1 - r)
        },
        bounceOut: function (r) {
            return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + .75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + .9375 : 7.5625 * (r -= 2.625 / 2.75) * r + .984375
        },
        bounceInOut: function (r) {
            return r < .5 ? Bn.bounceIn(r * 2) * .5 : Bn.bounceOut(r * 2 - 1) * .5 + .5
        }
    },
    Aa = Math.pow,
    Cr = Math.sqrt,
    To = 1e-8,
    ep = 1e-4,
    pf = Cr(3),
    Ia = 1 / 3,
    He = tn(),
    we = tn(),
    Ui = tn();

function xr(r) {
    return r > -To && r < To
}

function rp(r) {
    return r > To || r < -To
}

function Pt(r, t, e, i, n) {
    var a = 1 - n;
    return a * a * (a * r + 3 * n * t) + n * n * (n * i + 3 * a * e)
}

function gf(r, t, e, i, n) {
    var a = 1 - n;
    return 3 * (((t - r) * a + 2 * (e - t) * n) * a + (i - e) * n * n)
}

function Mo(r, t, e, i, n, a) {
    var o = i + 3 * (t - e) - r,
        s = 3 * (e - t * 2 + r),
        l = 3 * (t - r),
        u = r - n,
        c = s * s - 3 * o * l,
        f = s * l - 9 * o * u,
        v = l * l - 3 * s * u,
        h = 0;
    if (xr(c) && xr(f))
        if (xr(s)) a[0] = 0;
        else {
            var d = -l / s;
            d >= 0 && d <= 1 && (a[h++] = d)
        }
    else {
        var m = f * f - 4 * c * v;
        if (xr(m)) {
            var p = f / c,
                d = -s / o + p,
                g = -p / 2;
            d >= 0 && d <= 1 && (a[h++] = d), g >= 0 && g <= 1 && (a[h++] = g)
        } else if (m > 0) {
            var _ = Cr(m),
                y = c * s + 1.5 * o * (-f + _),
                x = c * s + 1.5 * o * (-f - _);
            y < 0 ? y = -Aa(-y, Ia) : y = Aa(y, Ia), x < 0 ? x = -Aa(-x, Ia) : x = Aa(x, Ia);
            var d = (-s - (y + x)) / (3 * o);
            d >= 0 && d <= 1 && (a[h++] = d)
        } else {
            var S = (2 * c * s - 3 * o * f) / (2 * Cr(c * c * c)),
                w = Math.acos(S) / 3,
                T = Cr(c),
                C = Math.cos(w),
                d = (-s - 2 * T * C) / (3 * o),
                g = (-s + T * (C + pf * Math.sin(w))) / (3 * o),
                M = (-s + T * (C - pf * Math.sin(w))) / (3 * o);
            d >= 0 && d <= 1 && (a[h++] = d), g >= 0 && g <= 1 && (a[h++] = g), M >= 0 && M <= 1 && (a[h++] = M)
        }
    }
    return h
}

function ip(r, t, e, i, n) {
    var a = 6 * e - 12 * t + 6 * r,
        o = 9 * t + 3 * i - 3 * r - 9 * e,
        s = 3 * t - 3 * r,
        l = 0;
    if (xr(o)) {
        if (rp(a)) {
            var u = -s / a;
            u >= 0 && u <= 1 && (n[l++] = u)
        }
    } else {
        var c = a * a - 4 * o * s;
        if (xr(c)) n[0] = -a / (2 * o);
        else if (c > 0) {
            var f = Cr(c),
                u = (-a + f) / (2 * o),
                v = (-a - f) / (2 * o);
            u >= 0 && u <= 1 && (n[l++] = u), v >= 0 && v <= 1 && (n[l++] = v)
        }
    }
    return l
}

function Do(r, t, e, i, n, a) {
    var o = (t - r) * n + r,
        s = (e - t) * n + t,
        l = (i - e) * n + e,
        u = (s - o) * n + o,
        c = (l - s) * n + s,
        f = (c - u) * n + u;
    a[0] = r, a[1] = o, a[2] = u, a[3] = f, a[4] = f, a[5] = c, a[6] = l, a[7] = i
}

function fS(r, t, e, i, n, a, o, s, l, u, c) {
    var f, v = .005,
        h = 1 / 0,
        d, m, p, g;
    He[0] = l, He[1] = u;
    for (var _ = 0; _ < 1; _ += .05) we[0] = Pt(r, e, n, o, _), we[1] = Pt(t, i, a, s, _), p = Gi(He, we), p < h && (f = _, h = p);
    h = 1 / 0;
    for (var y = 0; y < 32 && !(v < ep); y++) d = f - v, m = f + v, we[0] = Pt(r, e, n, o, d), we[1] = Pt(t, i, a, s, d), p = Gi(we, He), d >= 0 && p < h ? (f = d, h = p) : (Ui[0] = Pt(r, e, n, o, m), Ui[1] = Pt(t, i, a, s, m), g = Gi(Ui, He), m <= 1 && g < h ? (f = m, h = g) : v *= .5);
    return c && (c[0] = Pt(r, e, n, o, f), c[1] = Pt(t, i, a, s, f)), Cr(h)
}

function hS(r, t, e, i, n, a, o, s, l) {
    for (var u = r, c = t, f = 0, v = 1 / l, h = 1; h <= l; h++) {
        var d = h * v,
            m = Pt(r, e, n, o, d),
            p = Pt(t, i, a, s, d),
            g = m - u,
            _ = p - c;
        f += Math.sqrt(g * g + _ * _), u = m, c = p
    }
    return f
}

function Ht(r, t, e, i) {
    var n = 1 - i;
    return n * (n * r + 2 * i * t) + i * i * e
}

function mf(r, t, e, i) {
    return 2 * ((1 - i) * (t - r) + i * (e - t))
}

function vS(r, t, e, i, n) {
    var a = r - 2 * t + e,
        o = 2 * (t - r),
        s = r - i,
        l = 0;
    if (xr(a)) {
        if (rp(o)) {
            var u = -s / o;
            u >= 0 && u <= 1 && (n[l++] = u)
        }
    } else {
        var c = o * o - 4 * a * s;
        if (xr(c)) {
            var u = -o / (2 * a);
            u >= 0 && u <= 1 && (n[l++] = u)
        } else if (c > 0) {
            var f = Cr(c),
                u = (-o + f) / (2 * a),
                v = (-o - f) / (2 * a);
            u >= 0 && u <= 1 && (n[l++] = u), v >= 0 && v <= 1 && (n[l++] = v)
        }
    }
    return l
}

function np(r, t, e) {
    var i = r + e - 2 * t;
    return i === 0 ?.5 : (r - t) / i
}

function Ao(r, t, e, i, n) {
    var a = (t - r) * i + r,
        o = (e - t) * i + t,
        s = (o - a) * i + a;
    n[0] = r, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = e
}

function dS(r, t, e, i, n, a, o, s, l) {
    var u, c = .005,
        f = 1 / 0;
    He[0] = o, He[1] = s;
    for (var v = 0; v < 1; v += .05) {
        we[0] = Ht(r, e, n, v), we[1] = Ht(t, i, a, v);
        var h = Gi(He, we);
        h < f && (u = v, f = h)
    }
    f = 1 / 0;
    for (var d = 0; d < 32 && !(c < ep); d++) {
        var m = u - c,
            p = u + c;
        we[0] = Ht(r, e, n, m), we[1] = Ht(t, i, a, m);
        var h = Gi(we, He);
        if (m >= 0 && h < f) u = m, f = h;
        else {
            Ui[0] = Ht(r, e, n, p), Ui[1] = Ht(t, i, a, p);
            var g = Gi(Ui, He);
            p <= 1 && g < f ? (u = p, f = g) : c *= .5
        }
    }
    return l && (l[0] = Ht(r, e, n, u), l[1] = Ht(t, i, a, u)), Cr(f)
}

function pS(r, t, e, i, n, a, o) {
    for (var s = r, l = t, u = 0, c = 1 / o, f = 1; f <= o; f++) {
        var v = f * c,
            h = Ht(r, e, n, v),
            d = Ht(t, i, a, v),
            m = h - s,
            p = d - l;
        u += Math.sqrt(m * m + p * p), s = h, l = d
    }
    return u
}
var gS = /cubic-bezier\(([0-9,\.e ]+)\)/;

function ap(r) {
    var t = r && gS.exec(r);
    if (t) {
        var e = t[1].split(","),
            i = +Ve(e[0]),
            n = +Ve(e[1]),
            a = +Ve(e[2]),
            o = +Ve(e[3]);
        if (isNaN(i + n + a + o)) return;
        var s = [];
        return function (l) {
            return l <= 0 ? 0 : l >= 1 ? 1 : Mo(0, i, a, 1, l, s) && Pt(0, n, o, 1, s[0])
        }
    }
}
var mS = function () {
    function r(t) {
        this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || ne, this.ondestroy = t.ondestroy || ne, this.onrestart = t.onrestart || ne, t.easing && this.setEasing(t.easing)
    }
    return r.prototype.step = function (t, e) {
        if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
            this._pausedTime += e;
            return
        }
        var i = this._life,
            n = t - this._startTime - this._pausedTime,
            a = n / i;
        a < 0 && (a = 0), a = Math.min(a, 1);
        var o = this.easingFunc,
            s = o ? o(a) : a;
        if (this.onframe(s), a === 1)
            if (this.loop) {
                var l = n % i;
                this._startTime = t - l, this._pausedTime = 0, this.onrestart()
            } else return !0;
        return !1
    }, r.prototype.pause = function () {
        this._paused = !0
    }, r.prototype.resume = function () {
        this._paused = !1
    }, r.prototype.setEasing = function (t) {
        this.easing = t, this.easingFunc = Q(t) ? t : Bn[t] || ap(t)
    }, r
}();
const _S = mS;
var op = function () {
        function r(t) {
            this.value = t
        }
        return r
    }(),
    yS = function () {
        function r() {
            this._len = 0
        }
        return r.prototype.insert = function (t) {
            var e = new op(t);
            return this.insertEntry(e), e
        }, r.prototype.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
        }, r.prototype.remove = function (t) {
            var e = t.prev,
                i = t.next;
            e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
        }, r.prototype.len = function () {
            return this._len
        }, r.prototype.clear = function () {
            this.head = this.tail = null, this._len = 0
        }, r
    }(),
    pa = function () {
        function r(t) {
            this._list = new yS, this._maxSize = 10, this._map = {}, this._maxSize = t
        }
        return r.prototype.put = function (t, e) {
            var i = this._list,
                n = this._map,
                a = null;
            if (n[t] == null) {
                var o = i.len(),
                    s = this._lastRemovedEntry;
                if (o >= this._maxSize && o > 0) {
                    var l = i.head;
                    i.remove(l), delete n[l.key], a = l.value, this._lastRemovedEntry = l
                }
                s ? s.value = e : s = new op(e), s.key = t, i.insertEntry(s), n[t] = s
            }
            return a
        }, r.prototype.get = function (t) {
            var e = this._map[t],
                i = this._list;
            if (e != null) return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value
        }, r.prototype.clear = function () {
            this._list.clear(), this._map = {}
        }, r.prototype.len = function () {
            return this._list.len()
        }, r
    }(),
    _f = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    };

function Tr(r) {
    return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r
}

function Jl(r) {
    return r < 0 ? 0 : r > 1 ? 1 : r
}

function Os(r) {
    var t = r;
    return t.length && t.charAt(t.length - 1) === "%" ? Tr(parseFloat(t) / 100 * 255) : Tr(parseInt(t, 10))
}

function Nn(r) {
    var t = r;
    return t.length && t.charAt(t.length - 1) === "%" ? Jl(parseFloat(t) / 100) : Jl(parseFloat(t))
}

function Bs(r, t, e) {
    return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r
}

function La(r, t, e) {
    return r + (t - r) * e
}

function ge(r, t, e, i, n) {
    return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r
}

function tu(r, t) {
    return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r
}
var sp = new pa(20),
    Pa = null;

function bi(r, t) {
    Pa && tu(Pa, t), Pa = sp.put(r, Pa || t.slice())
}

function Mr(r, t) {
    if (r) {
        t = t || [];
        var e = sp.get(r);
        if (e) return tu(t, e);
        r = r + "";
        var i = r.replace(/ /g, "").toLowerCase();
        if (i in _f) return tu(t, _f[i]), bi(r, t), t;
        var n = i.length;
        if (i.charAt(0) === "#") {
            if (n === 4 || n === 5) {
                var a = parseInt(i.slice(1, 4), 16);
                if (!(a >= 0 && a <= 4095)) {
                    ge(t, 0, 0, 0, 1);
                    return
                }
                return ge(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, n === 5 ? parseInt(i.slice(4), 16) / 15 : 1), bi(r, t), t
            } else if (n === 7 || n === 9) {
                var a = parseInt(i.slice(1, 7), 16);
                if (!(a >= 0 && a <= 16777215)) {
                    ge(t, 0, 0, 0, 1);
                    return
                }
                return ge(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, n === 9 ? parseInt(i.slice(7), 16) / 255 : 1), bi(r, t), t
            }
            return
        }
        var o = i.indexOf("("),
            s = i.indexOf(")");
        if (o !== -1 && s + 1 === n) {
            var l = i.substr(0, o),
                u = i.substr(o + 1, s - (o + 1)).split(","),
                c = 1;
            switch (l) {
                case "rgba":
                    if (u.length !== 4) return u.length === 3 ? ge(t, +u[0], +u[1], +u[2], 1) : ge(t, 0, 0, 0, 1);
                    c = Nn(u.pop());
                case "rgb":
                    if (u.length >= 3) return ge(t, Os(u[0]), Os(u[1]), Os(u[2]), u.length === 3 ? c : Nn(u[3])), bi(r, t), t;
                    ge(t, 0, 0, 0, 1);
                    return;
                case "hsla":
                    if (u.length !== 4) {
                        ge(t, 0, 0, 0, 1);
                        return
                    }
                    return u[3] = Nn(u[3]), yf(u, t), bi(r, t), t;
                case "hsl":
                    if (u.length !== 3) {
                        ge(t, 0, 0, 0, 1);
                        return
                    }
                    return yf(u, t), bi(r, t), t;
                default:
                    return
            }
        }
        ge(t, 0, 0, 0, 1)
    }
}

function yf(r, t) {
    var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360,
        i = Nn(r[1]),
        n = Nn(r[2]),
        a = n <= .5 ? n * (i + 1) : n + i - n * i,
        o = n * 2 - a;
    return t = t || [], ge(t, Tr(Bs(o, a, e + 1 / 3) * 255), Tr(Bs(o, a, e) * 255), Tr(Bs(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t
}

function xf(r, t) {
    var e = Mr(r);
    if (e) {
        for (var i = 0; i < 3; i++) t < 0 ? e[i] = e[i] * (1 - t) | 0 : e[i] = (255 - e[i]) * t + e[i] | 0, e[i] > 255 ? e[i] = 255 : e[i] < 0 && (e[i] = 0);
        return nc(e, e.length === 4 ? "rgba" : "rgb")
    }
}

function xS(r, t, e) {
    if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
        var i = r * (t.length - 1),
            n = Math.floor(i),
            a = Math.ceil(i),
            o = Mr(t[n]),
            s = Mr(t[a]),
            l = i - n,
            u = nc([Tr(La(o[0], s[0], l)), Tr(La(o[1], s[1], l)), Tr(La(o[2], s[2], l)), Jl(La(o[3], s[3], l))], "rgba");
        return e ? {
            color: u,
            leftIndex: n,
            rightIndex: a,
            value: i
        } : u
    }
}

function nc(r, t) {
    if (!(!r || !r.length)) {
        var e = r[0] + "," + r[1] + "," + r[2];
        return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")"
    }
}

function Io(r, t) {
    var e = Mr(r);
    return e ? (.299 * e[0] + .587 * e[1] + .114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0
}
var wf = new pa(100);

function bf(r) {
    if (V(r)) {
        var t = wf.get(r);
        return t || (t = xf(r, -.1), wf.put(r, t)), t
    } else if (ts(r)) {
        var e = O({}, r);
        return e.colorStops = Z(r.colorStops, function (i) {
            return {
                offset: i.offset,
                color: xf(i.color, -.1)
            }
        }), e
    }
    return r
}

function wS(r) {
    return r.type === "linear"
}

function bS(r) {
    return r.type === "radial"
}(function () {
    return j.hasGlobalWindow && Q(window.btoa) ? function (r) {
        return window.btoa(unescape(encodeURIComponent(r)))
    } : typeof Buffer < "u" ? function (r) {
        return Buffer.from(r).toString("base64")
    } : function (r) {
        return null
    }
})();
var eu = Array.prototype.slice;

function Je(r, t, e) {
    return (t - r) * e + r
}

function Ns(r, t, e, i) {
    for (var n = t.length, a = 0; a < n; a++) r[a] = Je(t[a], e[a], i);
    return r
}

function SS(r, t, e, i) {
    for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
        r[o] || (r[o] = []);
        for (var s = 0; s < a; s++) r[o][s] = Je(t[o][s], e[o][s], i)
    }
    return r
}

function ka(r, t, e, i) {
    for (var n = t.length, a = 0; a < n; a++) r[a] = t[a] + e[a] * i;
    return r
}

function Sf(r, t, e, i) {
    for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
        r[o] || (r[o] = []);
        for (var s = 0; s < a; s++) r[o][s] = t[o][s] + e[o][s] * i
    }
    return r
}

function CS(r, t) {
    for (var e = r.length, i = t.length, n = e > i ? t : r, a = Math.min(e, i), o = n[a - 1] || {
            color: [0, 0, 0, 0],
            offset: 0
        }, s = a; s < Math.max(e, i); s++) n.push({
        offset: o.offset,
        color: o.color.slice()
    })
}

function TS(r, t, e) {
    var i = r,
        n = t;
    if (!(!i.push || !n.push)) {
        var a = i.length,
            o = n.length;
        if (a !== o) {
            var s = a > o;
            if (s) i.length = o;
            else
                for (var l = a; l < o; l++) i.push(e === 1 ? n[l] : eu.call(n[l]))
        }
        for (var u = i[0] && i[0].length, l = 0; l < i.length; l++)
            if (e === 1) isNaN(i[l]) && (i[l] = n[l]);
            else
                for (var c = 0; c < u; c++) isNaN(i[l][c]) && (i[l][c] = n[l][c])
    }
}

function fo(r) {
    if (oe(r)) {
        var t = r.length;
        if (oe(r[0])) {
            for (var e = [], i = 0; i < t; i++) e.push(eu.call(r[i]));
            return e
        }
        return eu.call(r)
    }
    return r
}

function ho(r) {
    return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")"
}

function MS(r) {
    return oe(r && r[0]) ? 2 : 1
}
var Ea = 0,
    vo = 1,
    lp = 2,
    An = 3,
    ru = 4,
    iu = 5,
    Cf = 6;

function Tf(r) {
    return r === ru || r === iu
}

function Ra(r) {
    return r === vo || r === lp
}
var hn = [0, 0, 0, 0],
    DS = function () {
        function r(t) {
            this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t
        }
        return r.prototype.isFinished = function () {
            return this._finished
        }, r.prototype.setFinished = function () {
            this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished()
        }, r.prototype.needsAnimate = function () {
            return this.keyframes.length >= 1
        }, r.prototype.getAdditiveTrack = function () {
            return this._additiveTrack
        }, r.prototype.addKeyframe = function (t, e, i) {
            this._needsSort = !0;
            var n = this.keyframes,
                a = n.length,
                o = !1,
                s = Cf,
                l = e;
            if (oe(e)) {
                var u = MS(e);
                s = u, (u === 1 && !_t(e[0]) || u === 2 && !_t(e[0][0])) && (o = !0)
            } else if (_t(e) && !Co(e)) s = Ea;
            else if (V(e))
                if (!isNaN(+e)) s = Ea;
                else {
                    var c = Mr(e);
                    c && (l = c, s = An)
                }
            else if (ts(e)) {
                var f = O({}, l);
                f.colorStops = Z(e.colorStops, function (h) {
                    return {
                        offset: h.offset,
                        color: Mr(h.color)
                    }
                }), wS(e) ? s = ru : bS(e) && (s = iu), l = f
            }
            a === 0 ? this.valType = s : (s !== this.valType || s === Cf) && (o = !0), this.discrete = this.discrete || o;
            var v = {
                time: t,
                value: l,
                rawValue: e,
                percent: 0
            };
            return i && (v.easing = i, v.easingFunc = Q(i) ? i : Bn[i] || ap(i)), n.push(v), v
        }, r.prototype.prepare = function (t, e) {
            var i = this.keyframes;
            this._needsSort && i.sort(function (m, p) {
                return m.time - p.time
            });
            for (var n = this.valType, a = i.length, o = i[a - 1], s = this.discrete, l = Ra(n), u = Tf(n), c = 0; c < a; c++) {
                var f = i[c],
                    v = f.value,
                    h = o.value;
                f.percent = f.time / t, s || (l && c !== a - 1 ? TS(v, h, n) : u && CS(v.colorStops, h.colorStops))
            }
            if (!s && n !== iu && e && this.needsAnimate() && e.needsAnimate() && n === e.valType && !e._finished) {
                this._additiveTrack = e;
                for (var d = i[0].value, c = 0; c < a; c++) n === Ea ? i[c].additiveValue = i[c].value - d : n === An ? i[c].additiveValue = ka([], i[c].value, d, -1) : Ra(n) && (i[c].additiveValue = n === vo ? ka([], i[c].value, d, -1) : Sf([], i[c].value, d, -1))
            }
        }, r.prototype.step = function (t, e) {
            if (!this._finished) {
                this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
                var i = this._additiveTrack != null,
                    n = i ? "additiveValue" : "value",
                    a = this.valType,
                    o = this.keyframes,
                    s = o.length,
                    l = this.propName,
                    u = a === An,
                    c, f = this._lastFr,
                    v = Math.min,
                    h, d;
                if (s === 1) h = d = o[0];
                else {
                    if (e < 0) c = 0;
                    else if (e < this._lastFrP) {
                        var m = v(f + 1, s - 1);
                        for (c = m; c >= 0 && !(o[c].percent <= e); c--);
                        c = v(c, s - 2)
                    } else {
                        for (c = f; c < s && !(o[c].percent > e); c++);
                        c = v(c - 1, s - 2)
                    }
                    d = o[c + 1], h = o[c]
                }
                if (h && d) {
                    this._lastFr = c, this._lastFrP = e;
                    var p = d.percent - h.percent,
                        g = p === 0 ? 1 : v((e - h.percent) / p, 1);
                    d.easingFunc && (g = d.easingFunc(g));
                    var _ = i ? this._additiveValue : u ? hn : t[l];
                    if ((Ra(a) || u) && !_ && (_ = this._additiveValue = []), this.discrete) t[l] = g < 1 ? h.rawValue : d.rawValue;
                    else if (Ra(a)) a === vo ? Ns(_, h[n], d[n], g) : SS(_, h[n], d[n], g);
                    else if (Tf(a)) {
                        var y = h[n],
                            x = d[n],
                            S = a === ru;
                        t[l] = {
                            type: S ? "linear" : "radial",
                            x: Je(y.x, x.x, g),
                            y: Je(y.y, x.y, g),
                            colorStops: Z(y.colorStops, function (T, C) {
                                var M = x.colorStops[C];
                                return {
                                    offset: Je(T.offset, M.offset, g),
                                    color: ho(Ns([], T.color, M.color, g))
                                }
                            }),
                            global: x.global
                        }, S ? (t[l].x2 = Je(y.x2, x.x2, g), t[l].y2 = Je(y.y2, x.y2, g)) : t[l].r = Je(y.r, x.r, g)
                    } else if (u) Ns(_, h[n], d[n], g), i || (t[l] = ho(_));
                    else {
                        var w = Je(h[n], d[n], g);
                        i ? this._additiveValue = w : t[l] = w
                    }
                    i && this._addToTarget(t)
                }
            }
        }, r.prototype._addToTarget = function (t) {
            var e = this.valType,
                i = this.propName,
                n = this._additiveValue;
            e === Ea ? t[i] = t[i] + n : e === An ? (Mr(t[i], hn), ka(hn, hn, n, 1), t[i] = ho(hn)) : e === vo ? ka(t[i], t[i], n, 1) : e === lp && Sf(t[i], t[i], n, 1)
        }, r
    }(),
    ac = function () {
        function r(t, e, i, n) {
            if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && n) {
                Qu("Can' use additive animation on looped animation.");
                return
            }
            this._additiveAnimators = n, this._allowDiscrete = i
        }
        return r.prototype.getMaxTime = function () {
            return this._maxTime
        }, r.prototype.getDelay = function () {
            return this._delay
        }, r.prototype.getLoop = function () {
            return this._loop
        }, r.prototype.getTarget = function () {
            return this._target
        }, r.prototype.changeTarget = function (t) {
            this._target = t
        }, r.prototype.when = function (t, e, i) {
            return this.whenWithKeys(t, e, wt(e), i)
        }, r.prototype.whenWithKeys = function (t, e, i, n) {
            for (var a = this._tracks, o = 0; o < i.length; o++) {
                var s = i[o],
                    l = a[s];
                if (!l) {
                    l = a[s] = new DS(s);
                    var u = void 0,
                        c = this._getAdditiveTrack(s);
                    if (c) {
                        var f = c.keyframes,
                            v = f[f.length - 1];
                        u = v && v.value, c.valType === An && u && (u = ho(u))
                    } else u = this._target[s];
                    if (u == null) continue;
                    t > 0 && l.addKeyframe(0, fo(u), n), this._trackKeys.push(s)
                }
                l.addKeyframe(t, fo(e[s]), n)
            }
            return this._maxTime = Math.max(this._maxTime, t), this
        }, r.prototype.pause = function () {
            this._clip.pause(), this._paused = !0
        }, r.prototype.resume = function () {
            this._clip.resume(), this._paused = !1
        }, r.prototype.isPaused = function () {
            return !!this._paused
        }, r.prototype.duration = function (t) {
            return this._maxTime = t, this._force = !0, this
        }, r.prototype._doneCallback = function () {
            this._setTracksFinished(), this._clip = null;
            var t = this._doneCbs;
            if (t)
                for (var e = t.length, i = 0; i < e; i++) t[i].call(this)
        }, r.prototype._abortedCallback = function () {
            this._setTracksFinished();
            var t = this.animation,
                e = this._abortedCbs;
            if (t && t.removeClip(this._clip), this._clip = null, e)
                for (var i = 0; i < e.length; i++) e[i].call(this)
        }, r.prototype._setTracksFinished = function () {
            for (var t = this._tracks, e = this._trackKeys, i = 0; i < e.length; i++) t[e[i]].setFinished()
        }, r.prototype._getAdditiveTrack = function (t) {
            var e, i = this._additiveAnimators;
            if (i)
                for (var n = 0; n < i.length; n++) {
                    var a = i[n].getTrack(t);
                    a && (e = a)
                }
            return e
        }, r.prototype.start = function (t) {
            if (!(this._started > 0)) {
                this._started = 1;
                for (var e = this, i = [], n = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
                    var o = this._trackKeys[a],
                        s = this._tracks[o],
                        l = this._getAdditiveTrack(o),
                        u = s.keyframes,
                        c = u.length;
                    if (s.prepare(n, l), s.needsAnimate())
                        if (!this._allowDiscrete && s.discrete) {
                            var f = u[c - 1];
                            f && (e._target[s.propName] = f.rawValue), s.setFinished()
                        } else i.push(s)
                }
                if (i.length || this._force) {
                    var v = new _S({
                        life: n,
                        loop: this._loop,
                        delay: this._delay || 0,
                        onframe: function (h) {
                            e._started = 2;
                            var d = e._additiveAnimators;
                            if (d) {
                                for (var m = !1, p = 0; p < d.length; p++)
                                    if (d[p]._clip) {
                                        m = !0;
                                        break
                                    } m || (e._additiveAnimators = null)
                            }
                            for (var p = 0; p < i.length; p++) i[p].step(e._target, h);
                            var g = e._onframeCbs;
                            if (g)
                                for (var p = 0; p < g.length; p++) g[p](e._target, h)
                        },
                        ondestroy: function () {
                            e._doneCallback()
                        }
                    });
                    this._clip = v, this.animation && this.animation.addClip(v), t && v.setEasing(t)
                } else this._doneCallback();
                return this
            }
        }, r.prototype.stop = function (t) {
            if (this._clip) {
                var e = this._clip;
                t && e.onframe(1), this._abortedCallback()
            }
        }, r.prototype.delay = function (t) {
            return this._delay = t, this
        }, r.prototype.during = function (t) {
            return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this
        }, r.prototype.done = function (t) {
            return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this
        }, r.prototype.aborted = function (t) {
            return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this
        }, r.prototype.getClip = function () {
            return this._clip
        }, r.prototype.getTrack = function (t) {
            return this._tracks[t]
        }, r.prototype.getTracks = function () {
            var t = this;
            return Z(this._trackKeys, function (e) {
                return t._tracks[e]
            })
        }, r.prototype.stopTracks = function (t, e) {
            if (!t.length || !this._clip) return !0;
            for (var i = this._tracks, n = this._trackKeys, a = 0; a < t.length; a++) {
                var o = i[t[a]];
                o && !o.isFinished() && (e ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished())
            }
            for (var s = !0, a = 0; a < n.length; a++)
                if (!i[n[a]].isFinished()) {
                    s = !1;
                    break
                } return s && this._abortedCallback(), s
        }, r.prototype.saveTo = function (t, e, i) {
            if (t) {
                e = e || this._trackKeys;
                for (var n = 0; n < e.length; n++) {
                    var a = e[n],
                        o = this._tracks[a];
                    if (!(!o || o.isFinished())) {
                        var s = o.keyframes,
                            l = s[i ? 0 : s.length - 1];
                        l && (t[a] = fo(l.rawValue))
                    }
                }
            }
        }, r.prototype.__changeFinalValue = function (t, e) {
            e = e || wt(t);
            for (var i = 0; i < e.length; i++) {
                var n = e[i],
                    a = this._tracks[n];
                if (a) {
                    var o = a.keyframes;
                    if (o.length > 1) {
                        var s = o.pop();
                        a.addKeyframe(s.time, t[n]), a.prepare(this._maxTime, a.getAdditiveTrack())
                    }
                }
            }
        }, r
    }();

function Fi() {
    return new Date().getTime()
}
var AS = function (r) {
        z(t, r);

        function t(e) {
            var i = r.call(this) || this;
            return i._running = !1, i._time = 0, i._pausedTime = 0, i._pauseStart = 0, i._paused = !1, e = e || {}, i.stage = e.stage || {}, i
        }
        return t.prototype.addClip = function (e) {
            e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this
        }, t.prototype.addAnimator = function (e) {
            e.animation = this;
            var i = e.getClip();
            i && this.addClip(i)
        }, t.prototype.removeClip = function (e) {
            if (e.animation) {
                var i = e.prev,
                    n = e.next;
                i ? i.next = n : this._head = n, n ? n.prev = i : this._tail = i, e.next = e.prev = e.animation = null
            }
        }, t.prototype.removeAnimator = function (e) {
            var i = e.getClip();
            i && this.removeClip(i), e.animation = null
        }, t.prototype.update = function (e) {
            for (var i = Fi() - this._pausedTime, n = i - this._time, a = this._head; a;) {
                var o = a.next,
                    s = a.step(i, n);
                s && (a.ondestroy(), this.removeClip(a)), a = o
            }
            this._time = i, e || (this.trigger("frame", n), this.stage.update && this.stage.update())
        }, t.prototype._startLoop = function () {
            var e = this;
            this._running = !0;

            function i() {
                e._running && (Ql(i), !e._paused && e.update())
            }
            Ql(i)
        }, t.prototype.start = function () {
            this._running || (this._time = Fi(), this._pausedTime = 0, this._startLoop())
        }, t.prototype.stop = function () {
            this._running = !1
        }, t.prototype.pause = function () {
            this._paused || (this._pauseStart = Fi(), this._paused = !0)
        }, t.prototype.resume = function () {
            this._paused && (this._pausedTime += Fi() - this._pauseStart, this._paused = !1)
        }, t.prototype.clear = function () {
            for (var e = this._head; e;) {
                var i = e.next;
                e.prev = e.next = e.animation = null, e = i
            }
            this._head = this._tail = null
        }, t.prototype.isFinished = function () {
            return this._head == null
        }, t.prototype.animate = function (e, i) {
            i = i || {}, this.start();
            var n = new ac(e, i.loop);
            return this.addAnimator(n), n
        }, t
    }(Xe),
    IS = 300,
    Fs = j.domSupported,
    $s = function () {
        var r = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            t = ["touchstart", "touchend", "touchmove"],
            e = {
                pointerdown: 1,
                pointerup: 1,
                pointermove: 1,
                pointerout: 1
            },
            i = Z(r, function (n) {
                var a = n.replace("mouse", "pointer");
                return e.hasOwnProperty(a) ? a : n
            });
        return {
            mouse: r,
            touch: t,
            pointer: i
        }
    }(),
    Mf = {
        mouse: ["mousemove", "mouseup"],
        pointer: ["pointermove", "pointerup"]
    },
    Df = !1;

function nu(r) {
    var t = r.pointerType;
    return t === "pen" || t === "touch"
}

function LS(r) {
    r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function () {
        r.touching = !1, r.touchTimer = null
    }, 700)
}

function zs(r) {
    r && (r.zrByTouch = !0)
}

function PS(r, t) {
    return me(r.dom, new kS(r, t), !0)
}

function up(r, t) {
    for (var e = t, i = !1; e && e.nodeType !== 9 && !(i = e.domBelongToZr || e !== t && e === r.painterRoot);) e = e.parentNode;
    return i
}
var kS = function () {
        function r(t, e) {
            this.stopPropagation = ne, this.stopImmediatePropagation = ne, this.preventDefault = ne, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY
        }
        return r
    }(),
    Pe = {
        mousedown: function (r) {
            r = me(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r)
        },
        mousemove: function (r) {
            r = me(this.dom, r);
            var t = this.__mayPointerCapture;
            t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r)
        },
        mouseup: function (r) {
            r = me(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r)
        },
        mouseout: function (r) {
            r = me(this.dom, r);
            var t = r.toElement || r.relatedTarget;
            up(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r))
        },
        wheel: function (r) {
            Df = !0, r = me(this.dom, r), this.trigger("mousewheel", r)
        },
        mousewheel: function (r) {
            Df || (r = me(this.dom, r), this.trigger("mousewheel", r))
        },
        touchstart: function (r) {
            r = me(this.dom, r), zs(r), this.__lastTouchMoment = new Date, this.handler.processGesture(r, "start"), Pe.mousemove.call(this, r), Pe.mousedown.call(this, r)
        },
        touchmove: function (r) {
            r = me(this.dom, r), zs(r), this.handler.processGesture(r, "change"), Pe.mousemove.call(this, r)
        },
        touchend: function (r) {
            r = me(this.dom, r), zs(r), this.handler.processGesture(r, "end"), Pe.mouseup.call(this, r), +new Date - +this.__lastTouchMoment < IS && Pe.click.call(this, r)
        },
        pointerdown: function (r) {
            Pe.mousedown.call(this, r)
        },
        pointermove: function (r) {
            nu(r) || Pe.mousemove.call(this, r)
        },
        pointerup: function (r) {
            Pe.mouseup.call(this, r)
        },
        pointerout: function (r) {
            nu(r) || Pe.mouseout.call(this, r)
        }
    };
D(["click", "dblclick", "contextmenu"], function (r) {
    Pe[r] = function (t) {
        t = me(this.dom, t), this.trigger(r, t)
    }
});
var au = {
    pointermove: function (r) {
        nu(r) || au.mousemove.call(this, r)
    },
    pointerup: function (r) {
        au.mouseup.call(this, r)
    },
    mousemove: function (r) {
        this.trigger("mousemove", r)
    },
    mouseup: function (r) {
        var t = this.__pointerCapturing;
        this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r))
    }
};

function ES(r, t) {
    var e = t.domHandlers;
    j.pointerEventsSupported ? D($s.pointer, function (i) {
        po(t, i, function (n) {
            e[i].call(r, n)
        })
    }) : (j.touchEventsSupported && D($s.touch, function (i) {
        po(t, i, function (n) {
            e[i].call(r, n), LS(t)
        })
    }), D($s.mouse, function (i) {
        po(t, i, function (n) {
            n = tc(n), t.touching || e[i].call(r, n)
        })
    }))
}

function RS(r, t) {
    j.pointerEventsSupported ? D(Mf.pointer, e) : j.touchEventsSupported || D(Mf.mouse, e);

    function e(i) {
        function n(a) {
            a = tc(a), up(r, a.target) || (a = PS(r, a), t.domHandlers[i].call(r, a))
        }
        po(t, i, n, {
            capture: !0
        })
    }
}

function po(r, t, e, i) {
    r.mounted[t] = e, r.listenerOpts[t] = i, Zb(r.domTarget, t, e, i)
}

function Hs(r) {
    var t = r.mounted;
    for (var e in t) t.hasOwnProperty(e) && qb(r.domTarget, e, t[e], r.listenerOpts[e]);
    r.mounted = {}
}
var Af = function () {
        function r(t, e) {
            this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e
        }
        return r
    }(),
    OS = function (r) {
        z(t, r);

        function t(e, i) {
            var n = r.call(this) || this;
            return n.__pointerCapturing = !1, n.dom = e, n.painterRoot = i, n._localHandlerScope = new Af(e, Pe), Fs && (n._globalHandlerScope = new Af(document, au)), ES(n, n._localHandlerScope), n
        }
        return t.prototype.dispose = function () {
            Hs(this._localHandlerScope), Fs && Hs(this._globalHandlerScope)
        }, t.prototype.setCursor = function (e) {
            this.dom.style && (this.dom.style.cursor = e || "default")
        }, t.prototype.__togglePointerCapture = function (e) {
            if (this.__mayPointerCapture = null, Fs && +this.__pointerCapturing ^ +e) {
                this.__pointerCapturing = e;
                var i = this._globalHandlerScope;
                e ? RS(this, i) : Hs(i)
            }
        }, t
    }(Xe);
const BS = OS;
var cp = 1;
j.hasGlobalWindow && (cp = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Lo = cp,
    ou = .4,
    su = "#333",
    lu = "#ccc",
    NS = "#eee",
    If = ec,
    Lf = 5e-5;

function Fr(r) {
    return r > Lf || r < -Lf
}
var $r = [],
    Si = [],
    Gs = Vi(),
    Vs = Math.abs,
    FS = function () {
        function r() {}
        return r.prototype.getLocalTransform = function (t) {
            return r.getLocalTransform(this, t)
        }, r.prototype.setPosition = function (t) {
            this.x = t[0], this.y = t[1]
        }, r.prototype.setScale = function (t) {
            this.scaleX = t[0], this.scaleY = t[1]
        }, r.prototype.setSkew = function (t) {
            this.skewX = t[0], this.skewY = t[1]
        }, r.prototype.setOrigin = function (t) {
            this.originX = t[0], this.originY = t[1]
        }, r.prototype.needLocalTransform = function () {
            return Fr(this.rotation) || Fr(this.x) || Fr(this.y) || Fr(this.scaleX - 1) || Fr(this.scaleY - 1) || Fr(this.skewX) || Fr(this.skewY)
        }, r.prototype.updateTransform = function () {
            var t = this.parent && this.parent.transform,
                e = this.needLocalTransform(),
                i = this.transform;
            if (!(e || t)) {
                i && (If(i), this.invTransform = null);
                return
            }
            i = i || Vi(), e ? this.getLocalTransform(i) : If(i), t && (e ? Wi(i, t, i) : Qb(i, t)), this.transform = i, this._resolveGlobalScaleRatio(i)
        }, r.prototype._resolveGlobalScaleRatio = function (t) {
            var e = this.globalScaleRatio;
            if (e != null && e !== 1) {
                this.getGlobalScale($r);
                var i = $r[0] < 0 ? -1 : 1,
                    n = $r[1] < 0 ? -1 : 1,
                    a = (($r[0] - i) * e + i) / $r[0] || 0,
                    o = (($r[1] - n) * e + n) / $r[1] || 0;
                t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o
            }
            this.invTransform = this.invTransform || Vi(), ic(this.invTransform, t)
        }, r.prototype.getComputedTransform = function () {
            for (var t = this, e = []; t;) e.push(t), t = t.parent;
            for (; t = e.pop();) t.updateTransform();
            return this.transform
        }, r.prototype.setLocalTransform = function (t) {
            if (t) {
                var e = t[0] * t[0] + t[1] * t[1],
                    i = t[2] * t[2] + t[3] * t[3],
                    n = Math.atan2(t[1], t[0]),
                    a = Math.PI / 2 + n - Math.atan2(t[3], t[2]);
                i = Math.sqrt(i) * Math.cos(a), e = Math.sqrt(e), this.skewX = a, this.skewY = 0, this.rotation = -n, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = i, this.originX = 0, this.originY = 0
            }
        }, r.prototype.decomposeTransform = function () {
            if (this.transform) {
                var t = this.parent,
                    e = this.transform;
                t && t.transform && (t.invTransform = t.invTransform || Vi(), Wi(Si, t.invTransform, e), e = Si);
                var i = this.originX,
                    n = this.originY;
                (i || n) && (Gs[4] = i, Gs[5] = n, Wi(Si, e, Gs), Si[4] -= i, Si[5] -= n, e = Si), this.setLocalTransform(e)
            }
        }, r.prototype.getGlobalScale = function (t) {
            var e = this.transform;
            return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
        }, r.prototype.transformCoordToLocal = function (t, e) {
            var i = [t, e],
                n = this.invTransform;
            return n && Te(i, i, n), i
        }, r.prototype.transformCoordToGlobal = function (t, e) {
            var i = [t, e],
                n = this.transform;
            return n && Te(i, i, n), i
        }, r.prototype.getLineScale = function () {
            var t = this.transform;
            return t && Vs(t[0] - 1) > 1e-10 && Vs(t[3] - 1) > 1e-10 ? Math.sqrt(Vs(t[0] * t[3] - t[2] * t[1])) : 1
        }, r.prototype.copyTransform = function (t) {
            $S(this, t)
        }, r.getLocalTransform = function (t, e) {
            e = e || [];
            var i = t.originX || 0,
                n = t.originY || 0,
                a = t.scaleX,
                o = t.scaleY,
                s = t.anchorX,
                l = t.anchorY,
                u = t.rotation || 0,
                c = t.x,
                f = t.y,
                v = t.skewX ? Math.tan(t.skewX) : 0,
                h = t.skewY ? Math.tan(-t.skewY) : 0;
            if (i || n || s || l) {
                var d = i + s,
                    m = n + l;
                e[4] = -d * a - v * m * o, e[5] = -m * o - h * d * a
            } else e[4] = e[5] = 0;
            return e[0] = a, e[3] = o, e[1] = h * a, e[2] = v * o, u && rc(e, e, u), e[4] += i + c, e[5] += n + f, e
        }, r.initDefaultProps = function () {
            var t = r.prototype;
            t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0
        }(), r
    }(),
    jn = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];

function $S(r, t) {
    for (var e = 0; e < jn.length; e++) {
        var i = jn[e];
        r[i] = t[i]
    }
}
const oc = FS;
var Pf = {};

function he(r, t) {
    t = t || ci;
    var e = Pf[t];
    e || (e = Pf[t] = new pa(500));
    var i = e.get(r);
    return i == null && (i = Ji.measureText(r, t).width, e.put(r, i)), i
}

function kf(r, t, e, i) {
    var n = he(r, t),
        a = lc(t),
        o = In(0, n, e),
        s = Oi(0, a, i),
        l = new ct(o, s, n, a);
    return l
}

function sc(r, t, e, i) {
    var n = ((r || "") + "").split(`
`),
        a = n.length;
    if (a === 1) return kf(n[0], t, e, i);
    for (var o = new ct(0, 0, 0, 0), s = 0; s < n.length; s++) {
        var l = kf(n[s], t, e, i);
        s === 0 ? o.copy(l) : o.union(l)
    }
    return o
}

function In(r, t, e) {
    return e === "right" ? r -= t : e === "center" && (r -= t / 2), r
}

function Oi(r, t, e) {
    return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r
}

function lc(r) {
    return he("国", r)
}

function Lr(r, t) {
    return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r
}

function fp(r, t, e) {
    var i = t.position || "inside",
        n = t.distance != null ? t.distance : 5,
        a = e.height,
        o = e.width,
        s = a / 2,
        l = e.x,
        u = e.y,
        c = "left",
        f = "top";
    if (i instanceof Array) l += Lr(i[0], e.width), u += Lr(i[1], e.height), c = null, f = null;
    else switch (i) {
        case "left":
            l -= n, u += s, c = "right", f = "middle";
            break;
        case "right":
            l += n + o, u += s, f = "middle";
            break;
        case "top":
            l += o / 2, u -= n, c = "center", f = "bottom";
            break;
        case "bottom":
            l += o / 2, u += a + n, c = "center";
            break;
        case "inside":
            l += o / 2, u += s, c = "center", f = "middle";
            break;
        case "insideLeft":
            l += n, u += s, f = "middle";
            break;
        case "insideRight":
            l += o - n, u += s, c = "right", f = "middle";
            break;
        case "insideTop":
            l += o / 2, u += n, c = "center";
            break;
        case "insideBottom":
            l += o / 2, u += a - n, c = "center", f = "bottom";
            break;
        case "insideTopLeft":
            l += n, u += n;
            break;
        case "insideTopRight":
            l += o - n, u += n, c = "right";
            break;
        case "insideBottomLeft":
            l += n, u += a - n, f = "bottom";
            break;
        case "insideBottomRight":
            l += o - n, u += a - n, c = "right", f = "bottom";
            break
    }
    return r = r || {}, r.x = l, r.y = u, r.align = c, r.verticalAlign = f, r
}
var Ws = "__zr_normal__",
    Us = jn.concat(["ignore"]),
    zS = Ir(jn, function (r, t) {
        return r[t] = !0, r
    }, {
        ignore: !1
    }),
    Ci = {},
    HS = new ct(0, 0, 0, 0),
    uc = function () {
        function r(t) {
            this.id = Vd(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t)
        }
        return r.prototype._init = function (t) {
            this.attr(t)
        }, r.prototype.drift = function (t, e, i) {
            switch (this.draggable) {
                case "horizontal":
                    e = 0;
                    break;
                case "vertical":
                    t = 0;
                    break
            }
            var n = this.transform;
            n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.markRedraw()
        }, r.prototype.beforeUpdate = function () {}, r.prototype.afterUpdate = function () {}, r.prototype.update = function () {
            this.updateTransform(), this.__dirty && this.updateInnerText()
        }, r.prototype.updateInnerText = function (t) {
            var e = this._textContent;
            if (e && (!e.ignore || t)) {
                this.textConfig || (this.textConfig = {});
                var i = this.textConfig,
                    n = i.local,
                    a = e.innerTransformable,
                    o = void 0,
                    s = void 0,
                    l = !1;
                a.parent = n ? this : null;
                var u = !1;
                if (a.copyTransform(e), i.position != null) {
                    var c = HS;
                    i.layoutRect ? c.copy(i.layoutRect) : c.copy(this.getBoundingRect()), n || c.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(Ci, i, c) : fp(Ci, i, c), a.x = Ci.x, a.y = Ci.y, o = Ci.align, s = Ci.verticalAlign;
                    var f = i.origin;
                    if (f && i.rotation != null) {
                        var v = void 0,
                            h = void 0;
                        f === "center" ? (v = c.width * .5, h = c.height * .5) : (v = Lr(f[0], c.width), h = Lr(f[1], c.height)), u = !0, a.originX = -a.x + v + (n ? 0 : c.x), a.originY = -a.y + h + (n ? 0 : c.y)
                    }
                }
                i.rotation != null && (a.rotation = i.rotation);
                var d = i.offset;
                d && (a.x += d[0], a.y += d[1], u || (a.originX = -d[0], a.originY = -d[1]));
                var m = i.inside == null ? typeof i.position == "string" && i.position.indexOf("inside") >= 0 : i.inside,
                    p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}),
                    g = void 0,
                    _ = void 0,
                    y = void 0;
                m && this.canBeInsideText() ? (g = i.insideFill, _ = i.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (_ == null || _ === "auto") && (_ = this.getInsideTextStroke(g), y = !0)) : (g = i.outsideFill, _ = i.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (_ == null || _ === "auto") && (_ = this.getOutsideStroke(g), y = !0)), g = g || "#000", (g !== p.fill || _ !== p.stroke || y !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (l = !0, p.fill = g, p.stroke = _, p.autoStroke = y, p.align = o, p.verticalAlign = s, e.setDefaultTextStyle(p)), e.__dirty |= fe, l && e.dirtyStyle(!0)
            }
        }, r.prototype.canBeInsideText = function () {
            return !0
        }, r.prototype.getInsideTextFill = function () {
            return "#fff"
        }, r.prototype.getInsideTextStroke = function (t) {
            return "#000"
        }, r.prototype.getOutsideFill = function () {
            return this.__zr && this.__zr.isDarkMode() ? lu : su
        }, r.prototype.getOutsideStroke = function (t) {
            var e = this.__zr && this.__zr.getBackgroundColor(),
                i = typeof e == "string" && Mr(e);
            i || (i = [255, 255, 255, 1]);
            for (var n = i[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++) i[o] = i[o] * n + (a ? 0 : 255) * (1 - n);
            return i[3] = 1, nc(i, "rgba")
        }, r.prototype.traverse = function (t, e) {}, r.prototype.attrKV = function (t, e) {
            t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, O(this.extra, e)) : this[t] = e
        }, r.prototype.hide = function () {
            this.ignore = !0, this.markRedraw()
        }, r.prototype.show = function () {
            this.ignore = !1, this.markRedraw()
        }, r.prototype.attr = function (t, e) {
            if (typeof t == "string") this.attrKV(t, e);
            else if (X(t))
                for (var i = t, n = wt(i), a = 0; a < n.length; a++) {
                    var o = n[a];
                    this.attrKV(o, t[o])
                }
            return this.markRedraw(), this
        }, r.prototype.saveCurrentToNormalState = function (t) {
            this._innerSaveToNormal(t);
            for (var e = this._normalState, i = 0; i < this.animators.length; i++) {
                var n = this.animators[i],
                    a = n.__fromStateTransition;
                if (!(n.getLoop() || a && a !== Ws)) {
                    var o = n.targetName,
                        s = o ? e[o] : e;
                    n.saveTo(s)
                }
            }
        }, r.prototype._innerSaveToNormal = function (t) {
            var e = this._normalState;
            e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, Us)
        }, r.prototype._savePrimaryToNormal = function (t, e, i) {
            for (var n = 0; n < i.length; n++) {
                var a = i[n];
                t[a] != null && !(a in e) && (e[a] = this[a])
            }
        }, r.prototype.hasState = function () {
            return this.currentStates.length > 0
        }, r.prototype.getState = function (t) {
            return this.states[t]
        }, r.prototype.ensureState = function (t) {
            var e = this.states;
            return e[t] || (e[t] = {}), e[t]
        }, r.prototype.clearStates = function (t) {
            this.useState(Ws, !1, t)
        }, r.prototype.useState = function (t, e, i, n) {
            var a = t === Ws,
                o = this.hasState();
            if (!(!o && a)) {
                var s = this.currentStates,
                    l = this.stateTransition;
                if (!(dt(s, t) >= 0 && (e || s.length === 1))) {
                    var u;
                    if (this.stateProxy && !a && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !a) {
                        Qu("State " + t + " not exists.");
                        return
                    }
                    a || this.saveCurrentToNormalState(u);
                    var c = !!(u && u.hoverLayer || n);
                    c && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, u, this._normalState, e, !i && !this.__inHover && l && l.duration > 0, l);
                    var f = this._textContent,
                        v = this._textGuide;
                    return f && f.useState(t, e, i, c), v && v.useState(t, e, i, c), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~fe), u
                }
            }
        }, r.prototype.useStates = function (t, e, i) {
            if (!t.length) this.clearStates();
            else {
                var n = [],
                    a = this.currentStates,
                    o = t.length,
                    s = o === a.length;
                if (s) {
                    for (var l = 0; l < o; l++)
                        if (t[l] !== a[l]) {
                            s = !1;
                            break
                        }
                }
                if (s) return;
                for (var l = 0; l < o; l++) {
                    var u = t[l],
                        c = void 0;
                    this.stateProxy && (c = this.stateProxy(u, t)), c || (c = this.states[u]), c && n.push(c)
                }
                var f = n[o - 1],
                    v = !!(f && f.hoverLayer || i);
                v && this._toggleHoverLayerFlag(!0);
                var h = this._mergeStates(n),
                    d = this.stateTransition;
                this.saveCurrentToNormalState(h), this._applyStateObj(t.join(","), h, this._normalState, !1, !e && !this.__inHover && d && d.duration > 0, d);
                var m = this._textContent,
                    p = this._textGuide;
                m && m.useStates(t, e, v), p && p.useStates(t, e, v), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !v && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~fe)
            }
        }, r.prototype.isSilent = function () {
            for (var t = this.silent, e = this.parent; !t && e;) {
                if (e.silent) {
                    t = !0;
                    break
                }
                e = e.parent
            }
            return t
        }, r.prototype._updateAnimationTargets = function () {
            for (var t = 0; t < this.animators.length; t++) {
                var e = this.animators[t];
                e.targetName && e.changeTarget(this[e.targetName])
            }
        }, r.prototype.removeState = function (t) {
            var e = dt(this.currentStates, t);
            if (e >= 0) {
                var i = this.currentStates.slice();
                i.splice(e, 1), this.useStates(i)
            }
        }, r.prototype.replaceState = function (t, e, i) {
            var n = this.currentStates.slice(),
                a = dt(n, t),
                o = dt(n, e) >= 0;
            a >= 0 ? o ? n.splice(a, 1) : n[a] = e : i && !o && n.push(e), this.useStates(n)
        }, r.prototype.toggleState = function (t, e) {
            e ? this.useState(t, !0) : this.removeState(t)
        }, r.prototype._mergeStates = function (t) {
            for (var e = {}, i, n = 0; n < t.length; n++) {
                var a = t[n];
                O(e, a), a.textConfig && (i = i || {}, O(i, a.textConfig))
            }
            return i && (e.textConfig = i), e
        }, r.prototype._applyStateObj = function (t, e, i, n, a, o) {
            var s = !(e && n);
            e && e.textConfig ? (this.textConfig = O({}, n ? this.textConfig : i.textConfig), O(this.textConfig, e.textConfig)) : s && i.textConfig && (this.textConfig = i.textConfig);
            for (var l = {}, u = !1, c = 0; c < Us.length; c++) {
                var f = Us[c],
                    v = a && zS[f];
                e && e[f] != null ? v ? (u = !0, l[f] = e[f]) : this[f] = e[f] : s && i[f] != null && (v ? (u = !0, l[f] = i[f]) : this[f] = i[f])
            }
            if (!a)
                for (var c = 0; c < this.animators.length; c++) {
                    var h = this.animators[c],
                        d = h.targetName;
                    h.getLoop() || h.__changeFinalValue(d ? (e || i)[d] : e || i)
                }
            u && this._transitionState(t, l, o)
        }, r.prototype._attachComponent = function (t) {
            if (!(t.__zr && !t.__hostTarget) && t !== this) {
                var e = this.__zr;
                e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this
            }
        }, r.prototype._detachComponent = function (t) {
            t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null
        }, r.prototype.getClipPath = function () {
            return this._clipPath
        }, r.prototype.setClipPath = function (t) {
            this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw()
        }, r.prototype.removeClipPath = function () {
            var t = this._clipPath;
            t && (this._detachComponent(t), this._clipPath = null, this.markRedraw())
        }, r.prototype.getTextContent = function () {
            return this._textContent
        }, r.prototype.setTextContent = function (t) {
            var e = this._textContent;
            e !== t && (e && e !== t && this.removeTextContent(), t.innerTransformable = new oc, this._attachComponent(t), this._textContent = t, this.markRedraw())
        }, r.prototype.setTextConfig = function (t) {
            this.textConfig || (this.textConfig = {}), O(this.textConfig, t), this.markRedraw()
        }, r.prototype.removeTextConfig = function () {
            this.textConfig = null, this.markRedraw()
        }, r.prototype.removeTextContent = function () {
            var t = this._textContent;
            t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw())
        }, r.prototype.getTextGuideLine = function () {
            return this._textGuide
        }, r.prototype.setTextGuideLine = function (t) {
            this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw()
        }, r.prototype.removeTextGuideLine = function () {
            var t = this._textGuide;
            t && (this._detachComponent(t), this._textGuide = null, this.markRedraw())
        }, r.prototype.markRedraw = function () {
            this.__dirty |= fe;
            var t = this.__zr;
            t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw()
        }, r.prototype.dirty = function () {
            this.markRedraw()
        }, r.prototype._toggleHoverLayerFlag = function (t) {
            this.__inHover = t;
            var e = this._textContent,
                i = this._textGuide;
            e && (e.__inHover = t), i && (i.__inHover = t)
        }, r.prototype.addSelfToZr = function (t) {
            if (this.__zr !== t) {
                this.__zr = t;
                var e = this.animators;
                if (e)
                    for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
                this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t)
            }
        }, r.prototype.removeSelfFromZr = function (t) {
            if (this.__zr) {
                this.__zr = null;
                var e = this.animators;
                if (e)
                    for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
                this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t)
            }
        }, r.prototype.animate = function (t, e, i) {
            var n = t ? this[t] : this,
                a = new ac(n, e, i);
            return t && (a.targetName = t), this.addAnimator(a, t), a
        }, r.prototype.addAnimator = function (t, e) {
            var i = this.__zr,
                n = this;
            t.during(function () {
                n.updateDuringAnimation(e)
            }).done(function () {
                var a = n.animators,
                    o = dt(a, t);
                o >= 0 && a.splice(o, 1)
            }), this.animators.push(t), i && i.animation.addAnimator(t), i && i.wakeUp()
        }, r.prototype.updateDuringAnimation = function (t) {
            this.markRedraw()
        }, r.prototype.stopAnimation = function (t, e) {
            for (var i = this.animators, n = i.length, a = [], o = 0; o < n; o++) {
                var s = i[o];
                !t || t === s.scope ? s.stop(e) : a.push(s)
            }
            return this.animators = a, this
        }, r.prototype.animateTo = function (t, e, i) {
            Ys(this, t, e, i)
        }, r.prototype.animateFrom = function (t, e, i) {
            Ys(this, t, e, i, !0)
        }, r.prototype._transitionState = function (t, e, i, n) {
            for (var a = Ys(this, e, i, n), o = 0; o < a.length; o++) a[o].__fromStateTransition = t
        }, r.prototype.getBoundingRect = function () {
            return null
        }, r.prototype.getPaintRect = function () {
            return null
        }, r.initDefaultProps = function () {
            var t = r.prototype;
            t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = fe;

            function e(i, n, a, o) {
                Object.defineProperty(t, i, {
                    get: function () {
                        if (!this[n]) {
                            var l = this[n] = [];
                            s(this, l)
                        }
                        return this[n]
                    },
                    set: function (l) {
                        this[a] = l[0], this[o] = l[1], this[n] = l, s(this, l)
                    }
                });

                function s(l, u) {
                    Object.defineProperty(u, 0, {
                        get: function () {
                            return l[a]
                        },
                        set: function (c) {
                            l[a] = c
                        }
                    }), Object.defineProperty(u, 1, {
                        get: function () {
                            return l[o]
                        },
                        set: function (c) {
                            l[o] = c
                        }
                    })
                }
            }
            Object.defineProperty && (e("position", "_legacyPos", "x", "y"), e("scale", "_legacyScale", "scaleX", "scaleY"), e("origin", "_legacyOrigin", "originX", "originY"))
        }(), r
    }();
Ye(uc, Xe);
Ye(uc, oc);

function Ys(r, t, e, i, n) {
    e = e || {};
    var a = [];
    hp(r, "", r, t, e, i, a, n);
    var o = a.length,
        s = !1,
        l = e.done,
        u = e.aborted,
        c = function () {
            s = !0, o--, o <= 0 && (s ? l && l() : u && u())
        },
        f = function () {
            o--, o <= 0 && (s ? l && l() : u && u())
        };
    o || l && l(), a.length > 0 && e.during && a[0].during(function (d, m) {
        e.during(m)
    });
    for (var v = 0; v < a.length; v++) {
        var h = a[v];
        c && h.done(c), f && h.aborted(f), e.force && h.duration(e.duration), h.start(e.easing)
    }
    return a
}

function Xs(r, t, e) {
    for (var i = 0; i < e; i++) r[i] = t[i]
}

function GS(r) {
    return oe(r[0])
}

function VS(r, t, e) {
    if (oe(t[e]))
        if (oe(r[e]) || (r[e] = []), se(t[e])) {
            var i = t[e].length;
            r[e].length !== i && (r[e] = new t[e].constructor(i), Xs(r[e], t[e], i))
        } else {
            var n = t[e],
                a = r[e],
                o = n.length;
            if (GS(n))
                for (var s = n[0].length, l = 0; l < o; l++) a[l] ? Xs(a[l], n[l], s) : a[l] = Array.prototype.slice.call(n[l]);
            else Xs(a, n, o);
            a.length = n.length
        }
    else r[e] = t[e]
}

function WS(r, t) {
    return r === t || oe(r) && oe(t) && US(r, t)
}

function US(r, t) {
    var e = r.length;
    if (e !== t.length) return !1;
    for (var i = 0; i < e; i++)
        if (r[i] !== t[i]) return !1;
    return !0
}

function hp(r, t, e, i, n, a, o, s) {
    for (var l = wt(i), u = n.duration, c = n.delay, f = n.additive, v = n.setToFinal, h = !X(a), d = r.animators, m = [], p = 0; p < l.length; p++) {
        var g = l[p],
            _ = i[g];
        if (_ != null && e[g] != null && (h || a[g]))
            if (X(_) && !oe(_) && !ts(_)) {
                if (t) {
                    s || (e[g] = _, r.updateDuringAnimation(t));
                    continue
                }
                hp(r, g, e[g], _, n, a && a[g], o, s)
            } else m.push(g);
        else s || (e[g] = _, r.updateDuringAnimation(t), m.push(g))
    }
    var y = m.length;
    if (!f && y)
        for (var x = 0; x < d.length; x++) {
            var S = d[x];
            if (S.targetName === t) {
                var w = S.stopTracks(m);
                if (w) {
                    var T = dt(d, S);
                    d.splice(T, 1)
                }
            }
        }
    if (n.force || (m = Jt(m, function (A) {
            return !WS(i[A], e[A])
        }), y = m.length), y > 0 || n.force && !o.length) {
        var C = void 0,
            M = void 0,
            I = void 0;
        if (s) {
            M = {}, v && (C = {});
            for (var x = 0; x < y; x++) {
                var g = m[x];
                M[g] = e[g], v ? C[g] = i[g] : e[g] = i[g]
            }
        } else if (v) {
            I = {};
            for (var x = 0; x < y; x++) {
                var g = m[x];
                I[g] = fo(e[g]), VS(e, i, g)
            }
        }
        var S = new ac(e, !1, !1, f ? Jt(d, function (L) {
            return L.targetName === t
        }) : null);
        S.targetName = t, n.scope && (S.scope = n.scope), v && C && S.whenWithKeys(0, C, m), I && S.whenWithKeys(0, I, m), S.whenWithKeys(u ?? 500, s ? M : i, m).delay(c || 0), r.addAnimator(S, t), o.push(S)
    }
}
const vp = uc;
var le = function (r) {
    z(t, r);

    function t(e) {
        var i = r.call(this) || this;
        return i.isGroup = !0, i._children = [], i.attr(e), i
    }
    return t.prototype.childrenRef = function () {
        return this._children
    }, t.prototype.children = function () {
        return this._children.slice()
    }, t.prototype.childAt = function (e) {
        return this._children[e]
    }, t.prototype.childOfName = function (e) {
        for (var i = this._children, n = 0; n < i.length; n++)
            if (i[n].name === e) return i[n]
    }, t.prototype.childCount = function () {
        return this._children.length
    }, t.prototype.add = function (e) {
        return e && e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), this
    }, t.prototype.addBefore = function (e, i) {
        if (e && e !== this && e.parent !== this && i && i.parent === this) {
            var n = this._children,
                a = n.indexOf(i);
            a >= 0 && (n.splice(a, 0, e), this._doAdd(e))
        }
        return this
    }, t.prototype.replace = function (e, i) {
        var n = dt(this._children, e);
        return n >= 0 && this.replaceAt(i, n), this
    }, t.prototype.replaceAt = function (e, i) {
        var n = this._children,
            a = n[i];
        if (e && e !== this && e.parent !== this && e !== a) {
            n[i] = e, a.parent = null;
            var o = this.__zr;
            o && a.removeSelfFromZr(o), this._doAdd(e)
        }
        return this
    }, t.prototype._doAdd = function (e) {
        e.parent && e.parent.remove(e), e.parent = this;
        var i = this.__zr;
        i && i !== e.__zr && e.addSelfToZr(i), i && i.refresh()
    }, t.prototype.remove = function (e) {
        var i = this.__zr,
            n = this._children,
            a = dt(n, e);
        return a < 0 ? this : (n.splice(a, 1), e.parent = null, i && e.removeSelfFromZr(i), i && i.refresh(), this)
    }, t.prototype.removeAll = function () {
        for (var e = this._children, i = this.__zr, n = 0; n < e.length; n++) {
            var a = e[n];
            i && a.removeSelfFromZr(i), a.parent = null
        }
        return e.length = 0, this
    }, t.prototype.eachChild = function (e, i) {
        for (var n = this._children, a = 0; a < n.length; a++) {
            var o = n[a];
            e.call(i, o, a)
        }
        return this
    }, t.prototype.traverse = function (e, i) {
        for (var n = 0; n < this._children.length; n++) {
            var a = this._children[n],
                o = e.call(i, a);
            a.isGroup && !o && a.traverse(e, i)
        }
        return this
    }, t.prototype.addSelfToZr = function (e) {
        r.prototype.addSelfToZr.call(this, e);
        for (var i = 0; i < this._children.length; i++) {
            var n = this._children[i];
            n.addSelfToZr(e)
        }
    }, t.prototype.removeSelfFromZr = function (e) {
        r.prototype.removeSelfFromZr.call(this, e);
        for (var i = 0; i < this._children.length; i++) {
            var n = this._children[i];
            n.removeSelfFromZr(e)
        }
    }, t.prototype.getBoundingRect = function (e) {
        for (var i = new ct(0, 0, 0, 0), n = e || this._children, a = [], o = null, s = 0; s < n.length; s++) {
            var l = n[s];
            if (!(l.ignore || l.invisible)) {
                var u = l.getBoundingRect(),
                    c = l.getLocalTransform(a);
                c ? (ct.applyTransform(i, u, c), o = o || i.clone(), o.union(i)) : (o = o || u.clone(), o.union(u))
            }
        }
        return o || i
    }, t
}(vp);
le.prototype.type = "group";
/*!
 * ZRender, a high performance 2d drawing library.
 *
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 *
 * LICENSE
 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
 */
var go = {},
    dp = {};

function YS(r) {
    delete dp[r]
}

function XS(r) {
    if (!r) return !1;
    if (typeof r == "string") return Io(r, 1) < ou;
    if (r.colorStops) {
        for (var t = r.colorStops, e = 0, i = t.length, n = 0; n < i; n++) e += Io(t[n].color, 1);
        return e /= i, e < ou
    }
    return !1
}
var ZS = function () {
    function r(t, e, i) {
        var n = this;
        this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, i = i || {}, this.dom = e, this.id = t;
        var a = new cS,
            o = i.renderer || "canvas";
        go[o] || (o = wt(go)[0]), i.useDirtyRect = i.useDirtyRect == null ? !1 : i.useDirtyRect;
        var s = new go[o](e, a, i, t),
            l = i.ssr || s.ssrOnly;
        this.storage = a, this.painter = s;
        var u = !j.node && !j.worker && !l ? new BS(s.getViewportRoot(), s.root) : null,
            c = i.useCoarsePointer,
            f = c == null || c === "auto" ? j.touchEventsSupported : !!c,
            v = 44,
            h;
        f && (h = rt(i.pointerSize, v)), this.handler = new oS(a, s, u, s.root, h), this.animation = new AS({
            stage: {
                update: l ? null : function () {
                    return n._flush(!0)
                }
            }
        }), l || this.animation.start()
    }
    return r.prototype.add = function (t) {
        this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh())
    }, r.prototype.remove = function (t) {
        this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh())
    }, r.prototype.configLayer = function (t, e) {
        this._disposed || (this.painter.configLayer && this.painter.configLayer(t, e), this.refresh())
    }, r.prototype.setBackgroundColor = function (t) {
        this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = XS(t))
    }, r.prototype.getBackgroundColor = function () {
        return this._backgroundColor
    }, r.prototype.setDarkMode = function (t) {
        this._darkMode = t
    }, r.prototype.isDarkMode = function () {
        return this._darkMode
    }, r.prototype.refreshImmediately = function (t) {
        this._disposed || (t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1)
    }, r.prototype.refresh = function () {
        this._disposed || (this._needsRefresh = !0, this.animation.start())
    }, r.prototype.flush = function () {
        this._disposed || this._flush(!1)
    }, r.prototype._flush = function (t) {
        var e, i = Fi();
        this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
        var n = Fi();
        e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
            elapsedTime: n - i
        })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop())
    }, r.prototype.setSleepAfterStill = function (t) {
        this._sleepAfterStill = t
    }, r.prototype.wakeUp = function () {
        this._disposed || (this.animation.start(), this._stillFrameAccum = 0)
    }, r.prototype.refreshHover = function () {
        this._needsRefreshHover = !0
    }, r.prototype.refreshHoverImmediately = function () {
        this._disposed || (this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover())
    }, r.prototype.resize = function (t) {
        this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize())
    }, r.prototype.clearAnimation = function () {
        this._disposed || this.animation.clear()
    }, r.prototype.getWidth = function () {
        if (!this._disposed) return this.painter.getWidth()
    }, r.prototype.getHeight = function () {
        if (!this._disposed) return this.painter.getHeight()
    }, r.prototype.setCursorStyle = function (t) {
        this._disposed || this.handler.setCursorStyle(t)
    }, r.prototype.findHover = function (t, e) {
        if (!this._disposed) return this.handler.findHover(t, e)
    }, r.prototype.on = function (t, e, i) {
        return this._disposed || this.handler.on(t, e, i), this
    }, r.prototype.off = function (t, e) {
        this._disposed || this.handler.off(t, e)
    }, r.prototype.trigger = function (t, e) {
        this._disposed || this.handler.trigger(t, e)
    }, r.prototype.clear = function () {
        if (!this._disposed) {
            for (var t = this.storage.getRoots(), e = 0; e < t.length; e++) t[e] instanceof le && t[e].removeSelfFromZr(this);
            this.storage.delAllRoots(), this.painter.clear()
        }
    }, r.prototype.dispose = function () {
        this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, YS(this.id))
    }, r
}();

function Ef(r, t) {
    var e = new ZS(Vd(), r, t);
    return dp[e.id] = e, e
}

function qS(r, t) {
    go[r] = t
}
var Rf = 1e-4,
    pp = 20;

function KS(r) {
    return r.replace(/^\s+|\s+$/g, "")
}

function uu(r, t, e, i) {
    var n = t[0],
        a = t[1],
        o = e[0],
        s = e[1],
        l = a - n,
        u = s - o;
    if (l === 0) return u === 0 ? o : (o + s) / 2;
    if (i)
        if (l > 0) {
            if (r <= n) return o;
            if (r >= a) return s
        } else {
            if (r >= n) return o;
            if (r <= a) return s
        }
    else {
        if (r === n) return o;
        if (r === a) return s
    }
    return (r - n) / l * u + o
}

function yt(r, t) {
    switch (r) {
        case "center":
        case "middle":
            r = "50%";
            break;
        case "left":
        case "top":
            r = "0%";
            break;
        case "right":
        case "bottom":
            r = "100%";
            break
    }
    return V(r) ? KS(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r
}

function It(r, t, e) {
    return t == null && (t = 10), t = Math.min(Math.max(0, t), pp), r = (+r).toFixed(t), e ? r : +r
}

function tr(r) {
    if (r = +r, isNaN(r)) return 0;
    if (r > 1e-14) {
        for (var t = 1, e = 0; e < 15; e++, t *= 10)
            if (Math.round(r * t) / t === r) return e
    }
    return jS(r)
}

function jS(r) {
    var t = r.toString().toLowerCase(),
        e = t.indexOf("e"),
        i = e > 0 ? +t.slice(e + 1) : 0,
        n = e > 0 ? e : t.length,
        a = t.indexOf("."),
        o = a < 0 ? 0 : n - 1 - a;
    return Math.max(0, o - i)
}

function QS(r, t) {
    var e = Math.log,
        i = Math.LN10,
        n = Math.floor(e(r[1] - r[0]) / i),
        a = Math.round(e(Math.abs(t[1] - t[0])) / i),
        o = Math.min(Math.max(-n + a, 0), 20);
    return isFinite(o) ? o : 20
}

function JS(r, t) {
    var e = Ir(r, function (h, d) {
        return h + (isNaN(d) ? 0 : d)
    }, 0);
    if (e === 0) return [];
    for (var i = Math.pow(10, t), n = Z(r, function (h) {
            return (isNaN(h) ? 0 : h) / e * i * 100
        }), a = i * 100, o = Z(n, function (h) {
            return Math.floor(h)
        }), s = Ir(o, function (h, d) {
            return h + d
        }, 0), l = Z(n, function (h, d) {
            return h - o[d]
        }); s < a;) {
        for (var u = Number.NEGATIVE_INFINITY, c = null, f = 0, v = l.length; f < v; ++f) l[f] > u && (u = l[f], c = f);
        ++o[c], l[c] = 0, ++s
    }
    return Z(o, function (h) {
        return h / i
    })
}

function tC(r, t) {
    var e = Math.max(tr(r), tr(t)),
        i = r + t;
    return e > pp ? i : It(i, e)
}

function gp(r) {
    var t = Math.PI * 2;
    return (r % t + t) % t
}

function Po(r) {
    return r > -Rf && r < Rf
}
var eC = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;

function ar(r) {
    if (r instanceof Date) return r;
    if (V(r)) {
        var t = eC.exec(r);
        if (!t) return new Date(NaN);
        if (t[8]) {
            var e = +t[4] || 0;
            return t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, e, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0))
        } else return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0)
    } else if (r == null) return new Date(NaN);
    return new Date(Math.round(r))
}

function rC(r) {
    return Math.pow(10, cc(r))
}

function cc(r) {
    if (r === 0) return 0;
    var t = Math.floor(Math.log(r) / Math.LN10);
    return r / Math.pow(10, t) >= 10 && t++, t
}

function mp(r, t) {
    var e = cc(r),
        i = Math.pow(10, e),
        n = r / i,
        a;
    return t ? n < 1.5 ? a = 1 : n < 2.5 ? a = 2 : n < 4 ? a = 3 : n < 7 ? a = 5 : a = 10 : n < 1 ? a = 1 : n < 2 ? a = 2 : n < 3 ? a = 3 : n < 5 ? a = 5 : a = 10, r = a * i, e >= -20 ? +r.toFixed(e < 0 ? -e : 0) : r
}

function ko(r) {
    var t = parseFloat(r);
    return t == r && (t !== 0 || !V(r) || r.indexOf("x") <= 0) ? t : NaN
}

function iC(r) {
    return !isNaN(ko(r))
}

function _p() {
    return Math.round(Math.random() * 9)
}

function yp(r, t) {
    return t === 0 ? r : yp(t, r % t)
}

function Of(r, t) {
    return r == null ? t : t == null ? r : r * t / yp(r, t)
}

function te(r) {
    throw new Error(r)
}

function Bf(r, t, e) {
    return (t - r) * e + r
}
var xp = "series\0",
    nC = "\0_ec_\0";

function Zt(r) {
    return r instanceof Array ? r : r == null ? [] : [r]
}

function cu(r, t, e) {
    if (r) {
        r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
        for (var i = 0, n = e.length; i < n; i++) {
            var a = e[i];
            !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a])
        }
    }
}
var Nf = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];

function ga(r) {
    return X(r) && !H(r) && !(r instanceof Date) ? r.value : r
}

function aC(r) {
    return X(r) && !(r instanceof Array)
}

function oC(r, t, e) {
    var i = e === "normalMerge",
        n = e === "replaceMerge",
        a = e === "replaceAll";
    r = r || [], t = (t || []).slice();
    var o = it();
    D(t, function (l, u) {
        if (!X(l)) {
            t[u] = null;
            return
        }
    });
    var s = sC(r, o, e);
    return (i || n) && lC(s, r, o, t), i && uC(s, t), i || n ? cC(s, t, n) : a && fC(s, t), hC(s), s
}

function sC(r, t, e) {
    var i = [];
    if (e === "replaceAll") return i;
    for (var n = 0; n < r.length; n++) {
        var a = r[n];
        a && a.id != null && t.set(a.id, n), i.push({
            existing: e === "replaceMerge" || Qn(a) ? null : a,
            newOption: null,
            keyInfo: null,
            brandNew: null
        })
    }
    return i
}

function lC(r, t, e, i) {
    D(i, function (n, a) {
        if (!(!n || n.id == null)) {
            var o = Fn(n.id),
                s = e.get(o);
            if (s != null) {
                var l = r[s];
                nr(!l.newOption, 'Duplicated option on id "' + o + '".'), l.newOption = n, l.existing = t[s], i[a] = null
            }
        }
    })
}

function uC(r, t) {
    D(t, function (e, i) {
        if (!(!e || e.name == null))
            for (var n = 0; n < r.length; n++) {
                var a = r[n].existing;
                if (!r[n].newOption && a && (a.id == null || e.id == null) && !Qn(e) && !Qn(a) && wp("name", a, e)) {
                    r[n].newOption = e, t[i] = null;
                    return
                }
            }
    })
}

function cC(r, t, e) {
    D(t, function (i) {
        if (i) {
            for (var n, a = 0;
                (n = r[a]) && (n.newOption || Qn(n.existing) || n.existing && i.id != null && !wp("id", i, n.existing));) a++;
            n ? (n.newOption = i, n.brandNew = e) : r.push({
                newOption: i,
                brandNew: e,
                existing: null,
                keyInfo: null
            }), a++
        }
    })
}

function fC(r, t) {
    D(t, function (e) {
        r.push({
            newOption: e,
            brandNew: !0,
            existing: null,
            keyInfo: null
        })
    })
}

function hC(r) {
    var t = it();
    D(r, function (e) {
        var i = e.existing;
        i && t.set(i.id, e)
    }), D(r, function (e) {
        var i = e.newOption;
        nr(!i || i.id == null || !t.get(i.id) || t.get(i.id) === e, "id duplicates: " + (i && i.id)), i && i.id != null && t.set(i.id, e), !e.keyInfo && (e.keyInfo = {})
    }), D(r, function (e, i) {
        var n = e.existing,
            a = e.newOption,
            o = e.keyInfo;
        if (X(a)) {
            if (o.name = a.name != null ? Fn(a.name) : n ? n.name : xp + i, n) o.id = Fn(n.id);
            else if (a.id != null) o.id = Fn(a.id);
            else {
                var s = 0;
                do o.id = "\0" + o.name + "\0" + s++; while (t.get(o.id))
            }
            t.set(o.id, e)
        }
    })
}

function wp(r, t, e) {
    var i = Ue(t[r], null),
        n = Ue(e[r], null);
    return i != null && n != null && i === n
}

function Fn(r) {
    return Ue(r, "")
}

function Ue(r, t) {
    return r == null ? t : V(r) ? r : _t(r) || Wl(r) ? r + "" : t
}

function bp(r) {
    var t = r.name;
    return !!(t && t.indexOf(xp))
}

function Qn(r) {
    return r && r.id != null && Fn(r.id).indexOf(nC) === 0
}

function vC(r, t, e) {
    D(r, function (i) {
        var n = i.newOption;
        X(n) && (i.keyInfo.mainType = t, i.keyInfo.subType = dC(t, n, i.existing, e))
    })
}

function dC(r, t, e, i) {
    var n = t.type ? t.type : e ? e.subType : i.determineSubType(r, t);
    return n
}

function fi(r, t) {
    if (t.dataIndexInside != null) return t.dataIndexInside;
    if (t.dataIndex != null) return H(t.dataIndex) ? Z(t.dataIndex, function (e) {
        return r.indexOfRawIndex(e)
    }) : r.indexOfRawIndex(t.dataIndex);
    if (t.name != null) return H(t.name) ? Z(t.name, function (e) {
        return r.indexOfName(e)
    }) : r.indexOfName(t.name)
}

function Lt() {
    var r = "__ec_inner_" + pC++;
    return function (t) {
        return t[r] || (t[r] = {})
    }
}
var pC = _p();

function Zs(r, t, e) {
    var i = fc(t, e),
        n = i.mainTypeSpecified,
        a = i.queryOptionMap,
        o = i.others,
        s = o,
        l = e ? e.defaultMainType : null;
    return !n && l && a.set(l, {}), a.each(function (u, c) {
        var f = ma(r, c, u, {
            useDefault: l === c,
            enableAll: e && e.enableAll != null ? e.enableAll : !0,
            enableNone: e && e.enableNone != null ? e.enableNone : !0
        });
        s[c + "Models"] = f.models, s[c + "Model"] = f.models[0]
    }), s
}

function fc(r, t) {
    var e;
    if (V(r)) {
        var i = {};
        i[r + "Index"] = 0, e = i
    } else e = r;
    var n = it(),
        a = {},
        o = !1;
    return D(e, function (s, l) {
        if (l === "dataIndex" || l === "dataIndexInside") {
            a[l] = s;
            return
        }
        var u = l.match(/^(\w+)(Index|Id|Name)$/) || [],
            c = u[1],
            f = (u[2] || "").toLowerCase();
        if (!(!c || !f || t && t.includeMainTypes && dt(t.includeMainTypes, c) < 0)) {
            o = o || !!c;
            var v = n.get(c) || n.set(c, {});
            v[f] = s
        }
    }), {
        mainTypeSpecified: o,
        queryOptionMap: n,
        others: a
    }
}
var Ee = {
    useDefault: !0,
    enableAll: !1,
    enableNone: !1
};

function ma(r, t, e, i) {
    i = i || Ee;
    var n = e.index,
        a = e.id,
        o = e.name,
        s = {
            models: null,
            specified: n != null || a != null || o != null
        };
    if (!s.specified) {
        var l = void 0;
        return s.models = i.useDefault && (l = r.getComponent(t)) ? [l] : [], s
    }
    return n === "none" || n === !1 ? (nr(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (n === "all" && (nr(i.enableAll, '`"all"` is not a valid value on index option.'), n = a = o = null), s.models = r.queryComponents({
        mainType: t,
        index: n,
        id: a,
        name: o
    }), s)
}

function Sp(r, t, e) {
    r.setAttribute ? r.setAttribute(t, e) : r[t] = e
}

function gC(r, t) {
    return r.getAttribute ? r.getAttribute(t) : r[t]
}

function mC(r) {
    return r === "auto" ? j.domSupported ? "html" : "richText" : r || "html"
}

function _C(r, t, e, i, n) {
    var a = t == null || t === "auto";
    if (i == null) return i;
    if (_t(i)) {
        var o = Bf(e || 0, i, n);
        return It(o, a ? Math.max(tr(e || 0), tr(i)) : t)
    } else {
        if (V(i)) return n < 1 ? e : i;
        for (var s = [], l = e, u = i, c = Math.max(l ? l.length : 0, u.length), f = 0; f < c; ++f) {
            var v = r.getDimensionInfo(f);
            if (v && v.type === "ordinal") s[f] = (n < 1 && l ? l : u)[f];
            else {
                var h = l && l[f] ? l[f] : 0,
                    d = u[f],
                    o = Bf(h, d, n);
                s[f] = It(o, a ? Math.max(tr(h), tr(d)) : t)
            }
        }
        return s
    }
}
var yC = ".",
    zr = "___EC__COMPONENT__CONTAINER___",
    Cp = "___EC__EXTENDED_CLASS___";

function We(r) {
    var t = {
        main: "",
        sub: ""
    };
    if (r) {
        var e = r.split(yC);
        t.main = e[0] || "", t.sub = e[1] || ""
    }
    return t
}

function xC(r) {
    nr(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal')
}

function wC(r) {
    return !!(r && r[Cp])
}

function hc(r, t) {
    r.$constructor = r, r.extend = function (e) {
        var i = this,
            n;
        return bC(i) ? n = function (a) {
            z(o, a);

            function o() {
                return a.apply(this, arguments) || this
            }
            return o
        }(i) : (n = function () {
            (e.$constructor || i).apply(this, arguments)
        }, Cb(n, this)), O(n.prototype, e), n[Cp] = !0, n.extend = this.extend, n.superCall = TC, n.superApply = MC, n.superClass = i, n
    }
}

function bC(r) {
    return Q(r) && /^class\s/.test(Function.prototype.toString.call(r))
}

function Tp(r, t) {
    r.extend = t.extend
}
var SC = Math.round(Math.random() * 10);

function CC(r) {
    var t = ["__\0is_clz", SC++].join("_");
    r.prototype[t] = !0, r.isInstance = function (e) {
        return !!(e && e[t])
    }
}

function TC(r, t) {
    for (var e = [], i = 2; i < arguments.length; i++) e[i - 2] = arguments[i];
    return this.superClass.prototype[t].apply(r, e)
}

function MC(r, t, e) {
    return this.superClass.prototype[t].apply(r, e)
}

function rs(r) {
    var t = {};
    r.registerClass = function (i) {
        var n = i.type || i.prototype.type;
        if (n) {
            xC(n), i.prototype.type = n;
            var a = We(n);
            if (!a.sub) t[a.main] = i;
            else if (a.sub !== zr) {
                var o = e(a);
                o[a.sub] = i
            }
        }
        return i
    }, r.getClass = function (i, n, a) {
        var o = t[i];
        if (o && o[zr] && (o = n ? o[n] : null), a && !o) throw new Error(n ? "Component " + i + "." + (n || "") + " is used but not imported." : i + ".type should be specified.");
        return o
    }, r.getClassesByMainType = function (i) {
        var n = We(i),
            a = [],
            o = t[n.main];
        return o && o[zr] ? D(o, function (s, l) {
            l !== zr && a.push(s)
        }) : a.push(o), a
    }, r.hasClass = function (i) {
        var n = We(i);
        return !!t[n.main]
    }, r.getAllClassMainTypes = function () {
        var i = [];
        return D(t, function (n, a) {
            i.push(a)
        }), i
    }, r.hasSubTypes = function (i) {
        var n = We(i),
            a = t[n.main];
        return a && a[zr]
    };

    function e(i) {
        var n = t[i.main];
        return (!n || !n[zr]) && (n = t[i.main] = {}, n[zr] = !0), n
    }
}

function Jn(r, t) {
    for (var e = 0; e < r.length; e++) r[e][1] || (r[e][1] = r[e][0]);
    return t = t || !1,
        function (i, n, a) {
            for (var o = {}, s = 0; s < r.length; s++) {
                var l = r[s][1];
                if (!(n && dt(n, l) >= 0 || a && dt(a, l) < 0)) {
                    var u = i.getShallow(l, t);
                    u != null && (o[r[s][0]] = u)
                }
            }
            return o
        }
}
var DC = [
        ["fill", "color"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["opacity"],
        ["shadowColor"]
    ],
    AC = Jn(DC),
    IC = function () {
        function r() {}
        return r.prototype.getAreaStyle = function (t, e) {
            return AC(this, t, e)
        }, r
    }(),
    fu = new pa(50);

function LC(r) {
    if (typeof r == "string") {
        var t = fu.get(r);
        return t && t.image
    } else return r
}

function Mp(r, t, e, i, n) {
    if (r)
        if (typeof r == "string") {
            if (t && t.__zrImageSrc === r || !e) return t;
            var a = fu.get(r),
                o = {
                    hostEl: e,
                    cb: i,
                    cbPayload: n
                };
            return a ? (t = a.image, !is(t) && a.pending.push(o)) : (t = Ji.loadImage(r, Ff, Ff), t.__zrImageSrc = r, fu.put(r, t.__cachedImgObj = {
                image: t,
                pending: [o]
            })), t
        } else return r;
    else return t
}

function Ff() {
    var r = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var t = 0; t < r.pending.length; t++) {
        var e = r.pending[t],
            i = e.cb;
        i && i(this, e.cbPayload), e.hostEl.dirty()
    }
    r.pending.length = 0
}

function is(r) {
    return r && r.width && r.height
}
var qs = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;

function PC(r, t, e, i, n) {
    if (!t) return "";
    var a = (r + "").split(`
`);
    n = Dp(t, e, i, n);
    for (var o = 0, s = a.length; o < s; o++) a[o] = Ap(a[o], n);
    return a.join(`
`)
}

function Dp(r, t, e, i) {
    i = i || {};
    var n = O({}, i);
    n.font = t, e = rt(e, "..."), n.maxIterations = rt(i.maxIterations, 2);
    var a = n.minChar = rt(i.minChar, 0);
    n.cnCharWidth = he("国", t);
    var o = n.ascCharWidth = he("a", t);
    n.placeholder = rt(i.placeholder, "");
    for (var s = r = Math.max(0, r - 1), l = 0; l < a && s >= o; l++) s -= o;
    var u = he(e, t);
    return u > s && (e = "", u = 0), s = r - u, n.ellipsis = e, n.ellipsisWidth = u, n.contentWidth = s, n.containerWidth = r, n
}

function Ap(r, t) {
    var e = t.containerWidth,
        i = t.font,
        n = t.contentWidth;
    if (!e) return "";
    var a = he(r, i);
    if (a <= e) return r;
    for (var o = 0;; o++) {
        if (a <= n || o >= t.maxIterations) {
            r += t.ellipsis;
            break
        }
        var s = o === 0 ? kC(r, n, t.ascCharWidth, t.cnCharWidth) : a > 0 ? Math.floor(r.length * n / a) : 0;
        r = r.substr(0, s), a = he(r, i)
    }
    return r === "" && (r = t.placeholder), r
}

function kC(r, t, e, i) {
    for (var n = 0, a = 0, o = r.length; a < o && n < t; a++) {
        var s = r.charCodeAt(a);
        n += 0 <= s && s <= 127 ? e : i
    }
    return a
}

function EC(r, t) {
    r != null && (r += "");
    var e = t.overflow,
        i = t.padding,
        n = t.font,
        a = e === "truncate",
        o = lc(n),
        s = rt(t.lineHeight, o),
        l = !!t.backgroundColor,
        u = t.lineOverflow === "truncate",
        c = t.width,
        f;
    c != null && (e === "break" || e === "breakAll") ? f = r ? Ip(r, t.font, c, e === "breakAll", 0).lines : [] : f = r ? r.split(`
`) : [];
    var v = f.length * s,
        h = rt(t.height, v);
    if (v > h && u) {
        var d = Math.floor(h / s);
        f = f.slice(0, d)
    }
    if (r && a && c != null)
        for (var m = Dp(c, n, t.ellipsis, {
                minChar: t.truncateMinChar,
                placeholder: t.placeholder
            }), p = 0; p < f.length; p++) f[p] = Ap(f[p], m);
    for (var g = h, _ = 0, p = 0; p < f.length; p++) _ = Math.max(he(f[p], n), _);
    c == null && (c = _);
    var y = _;
    return i && (g += i[0] + i[2], y += i[1] + i[3], c += i[1] + i[3]), l && (y = c), {
        lines: f,
        height: h,
        outerWidth: y,
        outerHeight: g,
        lineHeight: s,
        calculatedLineHeight: o,
        contentWidth: _,
        contentHeight: v,
        width: c
    }
}
var RC = function () {
        function r() {}
        return r
    }(),
    $f = function () {
        function r(t) {
            this.tokens = [], t && (this.tokens = t)
        }
        return r
    }(),
    OC = function () {
        function r() {
            this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = []
        }
        return r
    }();

function BC(r, t) {
    var e = new OC;
    if (r != null && (r += ""), !r) return e;
    for (var i = t.width, n = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && i != null ? {
            width: i,
            accumWidth: 0,
            breakAll: a === "breakAll"
        } : null, s = qs.lastIndex = 0, l;
        (l = qs.exec(r)) != null;) {
        var u = l.index;
        u > s && Ks(e, r.substring(s, u), t, o), Ks(e, l[2], t, o, l[1]), s = qs.lastIndex
    }
    s < r.length && Ks(e, r.substring(s, r.length), t, o);
    var c = [],
        f = 0,
        v = 0,
        h = t.padding,
        d = a === "truncate",
        m = t.lineOverflow === "truncate";

    function p(F, $, G) {
        F.width = $, F.lineHeight = G, f += G, v = Math.max(v, $)
    }
    t: for (var g = 0; g < e.lines.length; g++) {
        for (var _ = e.lines[g], y = 0, x = 0, S = 0; S < _.tokens.length; S++) {
            var w = _.tokens[S],
                T = w.styleName && t.rich[w.styleName] || {},
                C = w.textPadding = T.padding,
                M = C ? C[1] + C[3] : 0,
                I = w.font = T.font || t.font;
            w.contentHeight = lc(I);
            var A = rt(T.height, w.contentHeight);
            if (w.innerHeight = A, C && (A += C[0] + C[2]), w.height = A, w.lineHeight = Rn(T.lineHeight, t.lineHeight, A), w.align = T && T.align || t.align, w.verticalAlign = T && T.verticalAlign || "middle", m && n != null && f + w.lineHeight > n) {
                S > 0 ? (_.tokens = _.tokens.slice(0, S), p(_, x, y), e.lines = e.lines.slice(0, g + 1)) : e.lines = e.lines.slice(0, g);
                break t
            }
            var L = T.width,
                P = L == null || L === "auto";
            if (typeof L == "string" && L.charAt(L.length - 1) === "%") w.percentWidth = L, c.push(w), w.contentWidth = he(w.text, I);
            else {
                if (P) {
                    var k = T.backgroundColor,
                        R = k && k.image;
                    R && (R = LC(R), is(R) && (w.width = Math.max(w.width, R.width * A / R.height)))
                }
                var E = d && i != null ? i - x : null;
                E != null && E < w.width ? !P || E < M ? (w.text = "", w.width = w.contentWidth = 0) : (w.text = PC(w.text, E - M, I, t.ellipsis, {
                    minChar: t.truncateMinChar
                }), w.width = w.contentWidth = he(w.text, I)) : w.contentWidth = he(w.text, I)
            }
            w.width += M, x += w.width, T && (y = Math.max(y, w.lineHeight))
        }
        p(_, x, y)
    }
    e.outerWidth = e.width = rt(i, v), e.outerHeight = e.height = rt(n, f), e.contentHeight = f, e.contentWidth = v, h && (e.outerWidth += h[1] + h[3], e.outerHeight += h[0] + h[2]);
    for (var g = 0; g < c.length; g++) {
        var w = c[g],
            W = w.percentWidth;
        w.width = parseInt(W, 10) / 100 * e.width
    }
    return e
}

function Ks(r, t, e, i, n) {
    var a = t === "",
        o = n && e.rich[n] || {},
        s = r.lines,
        l = o.font || e.font,
        u = !1,
        c, f;
    if (i) {
        var v = o.padding,
            h = v ? v[1] + v[3] : 0;
        if (o.width != null && o.width !== "auto") {
            var d = Lr(o.width, i.width) + h;
            s.length > 0 && d + i.accumWidth > i.width && (c = t.split(`
`), u = !0), i.accumWidth = d
        } else {
            var m = Ip(t, l, i.width, i.breakAll, i.accumWidth);
            i.accumWidth = m.accumWidth + h, f = m.linesWidths, c = m.lines
        }
    } else c = t.split(`
`);
    for (var p = 0; p < c.length; p++) {
        var g = c[p],
            _ = new RC;
        if (_.styleName = n, _.text = g, _.isLineHolder = !g && !a, typeof o.width == "number" ? _.width = o.width : _.width = f ? f[p] : he(g, l), !p && !u) {
            var y = (s[s.length - 1] || (s[0] = new $f)).tokens,
                x = y.length;
            x === 1 && y[0].isLineHolder ? y[0] = _ : (g || !x || a) && y.push(_)
        } else s.push(new $f([_]))
    }
}

function NC(r) {
    var t = r.charCodeAt(0);
    return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303
}
var FC = Ir(",&?/;] ".split(""), function (r, t) {
    return r[t] = !0, r
}, {});

function $C(r) {
    return NC(r) ? !!FC[r] : !0
}

function Ip(r, t, e, i, n) {
    for (var a = [], o = [], s = "", l = "", u = 0, c = 0, f = 0; f < r.length; f++) {
        var v = r.charAt(f);
        if (v === `
`) {
            l && (s += l, c += u), a.push(s), o.push(c), s = "", l = "", u = 0, c = 0;
            continue
        }
        var h = he(v, t),
            d = i ? !1 : !$C(v);
        if (a.length ? c + h > e : n + c + h > e) {
            c ? (s || l) && (d ? (s || (s = l, l = "", u = 0, c = u), a.push(s), o.push(c - u), l += v, u += h, s = "", c = u) : (l && (s += l, l = "", u = 0), a.push(s), o.push(c), s = v, c = h)) : d ? (a.push(l), o.push(u), l = v, u = h) : (a.push(v), o.push(h));
            continue
        }
        c += h, d ? (l += v, u += h) : (l && (s += l, l = "", u = 0), s += v)
    }
    return !a.length && !s && (s = r, l = "", u = 0), l && (s += l), s && (a.push(s), o.push(c)), a.length === 1 && (c += n), {
        accumWidth: c,
        lines: a,
        linesWidths: o
    }
}
var hu = "__zr_style_" + Math.round(Math.random() * 10),
    oi = {
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: "#000",
        opacity: 1,
        blend: "source-over"
    },
    ns = {
        style: {
            shadowBlur: !0,
            shadowOffsetX: !0,
            shadowOffsetY: !0,
            shadowColor: !0,
            opacity: !0
        }
    };
oi[hu] = !0;
var zf = ["z", "z2", "invisible"],
    zC = ["invisible"],
    HC = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype._init = function (e) {
            for (var i = wt(e), n = 0; n < i.length; n++) {
                var a = i[n];
                a === "style" ? this.useStyle(e[a]) : r.prototype.attrKV.call(this, a, e[a])
            }
            this.style || this.useStyle({})
        }, t.prototype.beforeBrush = function () {}, t.prototype.afterBrush = function () {}, t.prototype.innerBeforeBrush = function () {}, t.prototype.innerAfterBrush = function () {}, t.prototype.shouldBePainted = function (e, i, n, a) {
            var o = this.transform;
            if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && GC(this, e, i) || o && !o[0] && !o[3]) return !1;
            if (n && this.__clipPaths) {
                for (var s = 0; s < this.__clipPaths.length; ++s)
                    if (this.__clipPaths[s].isZeroArea()) return !1
            }
            if (a && this.parent)
                for (var l = this.parent; l;) {
                    if (l.ignore) return !1;
                    l = l.parent
                }
            return !0
        }, t.prototype.contain = function (e, i) {
            return this.rectContain(e, i)
        }, t.prototype.traverse = function (e, i) {
            e.call(i, this)
        }, t.prototype.rectContain = function (e, i) {
            var n = this.transformCoordToLocal(e, i),
                a = this.getBoundingRect();
            return a.contain(n[0], n[1])
        }, t.prototype.getPaintRect = function () {
            var e = this._paintRect;
            if (!this._paintRect || this.__dirty) {
                var i = this.transform,
                    n = this.getBoundingRect(),
                    a = this.style,
                    o = a.shadowBlur || 0,
                    s = a.shadowOffsetX || 0,
                    l = a.shadowOffsetY || 0;
                e = this._paintRect || (this._paintRect = new ct(0, 0, 0, 0)), i ? ct.applyTransform(e, n, i) : e.copy(n), (o || s || l) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(l), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + l - o));
                var u = this.dirtyRectTolerance;
                e.isZero() || (e.x = Math.floor(e.x - u), e.y = Math.floor(e.y - u), e.width = Math.ceil(e.width + 1 + u * 2), e.height = Math.ceil(e.height + 1 + u * 2))
            }
            return e
        }, t.prototype.setPrevPaintRect = function (e) {
            e ? (this._prevPaintRect = this._prevPaintRect || new ct(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null
        }, t.prototype.getPrevPaintRect = function () {
            return this._prevPaintRect
        }, t.prototype.animateStyle = function (e) {
            return this.animate("style", e)
        }, t.prototype.updateDuringAnimation = function (e) {
            e === "style" ? this.dirtyStyle() : this.markRedraw()
        }, t.prototype.attrKV = function (e, i) {
            e !== "style" ? r.prototype.attrKV.call(this, e, i) : this.style ? this.setStyle(i) : this.useStyle(i)
        }, t.prototype.setStyle = function (e, i) {
            return typeof e == "string" ? this.style[e] = i : O(this.style, e), this.dirtyStyle(), this
        }, t.prototype.dirtyStyle = function (e) {
            e || this.markRedraw(), this.__dirty |= Dn, this._rect && (this._rect = null)
        }, t.prototype.dirty = function () {
            this.dirtyStyle()
        }, t.prototype.styleChanged = function () {
            return !!(this.__dirty & Dn)
        }, t.prototype.styleUpdated = function () {
            this.__dirty &= ~Dn
        }, t.prototype.createStyle = function (e) {
            return es(oi, e)
        }, t.prototype.useStyle = function (e) {
            e[hu] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle()
        }, t.prototype.isStyleObject = function (e) {
            return e[hu]
        }, t.prototype._innerSaveToNormal = function (e) {
            r.prototype._innerSaveToNormal.call(this, e);
            var i = this._normalState;
            e.style && !i.style && (i.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, i, zf)
        }, t.prototype._applyStateObj = function (e, i, n, a, o, s) {
            r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
            var l = !(i && a),
                u;
            if (i && i.style ? o ? a ? u = i.style : (u = this._mergeStyle(this.createStyle(), n.style), this._mergeStyle(u, i.style)) : (u = this._mergeStyle(this.createStyle(), a ? this.style : n.style), this._mergeStyle(u, i.style)) : l && (u = n.style), u)
                if (o) {
                    var c = this.style;
                    if (this.style = this.createStyle(l ? {} : c), l)
                        for (var f = wt(c), v = 0; v < f.length; v++) {
                            var h = f[v];
                            h in u && (u[h] = u[h], this.style[h] = c[h])
                        }
                    for (var d = wt(u), v = 0; v < d.length; v++) {
                        var h = d[v];
                        this.style[h] = this.style[h]
                    }
                    this._transitionState(e, {
                        style: u
                    }, s, this.getAnimationStyleProps())
                } else this.useStyle(u);
            for (var m = this.__inHover ? zC : zf, v = 0; v < m.length; v++) {
                var h = m[v];
                i && i[h] != null ? this[h] = i[h] : l && n[h] != null && (this[h] = n[h])
            }
        }, t.prototype._mergeStates = function (e) {
            for (var i = r.prototype._mergeStates.call(this, e), n, a = 0; a < e.length; a++) {
                var o = e[a];
                o.style && (n = n || {}, this._mergeStyle(n, o.style))
            }
            return n && (i.style = n), i
        }, t.prototype._mergeStyle = function (e, i) {
            return O(e, i), e
        }, t.prototype.getAnimationStyleProps = function () {
            return ns
        }, t.initDefaultProps = function () {
            var e = t.prototype;
            e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = fe | Dn
        }(), t
    }(vp),
    js = new ct(0, 0, 0, 0),
    Qs = new ct(0, 0, 0, 0);

function GC(r, t, e) {
    return js.copy(r.getBoundingRect()), r.transform && js.applyTransform(r.transform), Qs.width = t, Qs.height = e, !js.intersect(Qs)
}
const _a = HC;
var be = Math.min,
    Se = Math.max,
    Js = Math.sin,
    tl = Math.cos,
    Hr = Math.PI * 2,
    Oa = tn(),
    Ba = tn(),
    Na = tn();

function Hf(r, t, e, i, n, a) {
    n[0] = be(r, e), n[1] = be(t, i), a[0] = Se(r, e), a[1] = Se(t, i)
}
var Gf = [],
    Vf = [];

function VC(r, t, e, i, n, a, o, s, l, u) {
    var c = ip,
        f = Pt,
        v = c(r, e, n, o, Gf);
    l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
    for (var h = 0; h < v; h++) {
        var d = f(r, e, n, o, Gf[h]);
        l[0] = be(d, l[0]), u[0] = Se(d, u[0])
    }
    v = c(t, i, a, s, Vf);
    for (var h = 0; h < v; h++) {
        var m = f(t, i, a, s, Vf[h]);
        l[1] = be(m, l[1]), u[1] = Se(m, u[1])
    }
    l[0] = be(r, l[0]), u[0] = Se(r, u[0]), l[0] = be(o, l[0]), u[0] = Se(o, u[0]), l[1] = be(t, l[1]), u[1] = Se(t, u[1]), l[1] = be(s, l[1]), u[1] = Se(s, u[1])
}

function WC(r, t, e, i, n, a, o, s) {
    var l = np,
        u = Ht,
        c = Se(be(l(r, e, n), 1), 0),
        f = Se(be(l(t, i, a), 1), 0),
        v = u(r, e, n, c),
        h = u(t, i, a, f);
    o[0] = be(r, n, v), o[1] = be(t, a, h), s[0] = Se(r, n, v), s[1] = Se(t, a, h)
}

function UC(r, t, e, i, n, a, o, s, l) {
    var u = Bi,
        c = Ni,
        f = Math.abs(n - a);
    if (f % Hr < 1e-4 && f > 1e-4) {
        s[0] = r - e, s[1] = t - i, l[0] = r + e, l[1] = t + i;
        return
    }
    if (Oa[0] = tl(n) * e + r, Oa[1] = Js(n) * i + t, Ba[0] = tl(a) * e + r, Ba[1] = Js(a) * i + t, u(s, Oa, Ba), c(l, Oa, Ba), n = n % Hr, n < 0 && (n = n + Hr), a = a % Hr, a < 0 && (a = a + Hr), n > a && !o ? a += Hr : n < a && o && (n += Hr), o) {
        var v = a;
        a = n, n = v
    }
    for (var h = 0; h < a; h += Math.PI / 2) h > n && (Na[0] = tl(h) * e + r, Na[1] = Js(h) * i + t, u(s, Na, s), c(l, Na, l))
}
var ut = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        R: 7
    },
    Gr = [],
    Vr = [],
    Ne = [],
    ur = [],
    Fe = [],
    $e = [],
    el = Math.min,
    rl = Math.max,
    Wr = Math.cos,
    Ur = Math.sin,
    je = Math.abs,
    vu = Math.PI,
    _r = vu * 2,
    il = typeof Float32Array < "u",
    vn = [];

function nl(r) {
    var t = Math.round(r / vu * 1e8) / 1e8;
    return t % 2 * vu
}

function Lp(r, t) {
    var e = nl(r[0]);
    e < 0 && (e += _r);
    var i = e - r[0],
        n = r[1];
    n += i, !t && n - e >= _r ? n = e + _r : t && e - n >= _r ? n = e - _r : !t && e > n ? n = e + (_r - nl(e - n)) : t && e < n && (n = e - (_r - nl(n - e))), r[0] = e, r[1] = n
}
var hi = function () {
    function r(t) {
        this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = [])
    }
    return r.prototype.increaseVersion = function () {
        this._version++
    }, r.prototype.getVersion = function () {
        return this._version
    }, r.prototype.setScale = function (t, e, i) {
        i = i || 0, i > 0 && (this._ux = je(i / Lo / t) || 0, this._uy = je(i / Lo / e) || 0)
    }, r.prototype.setDPR = function (t) {
        this.dpr = t
    }, r.prototype.setContext = function (t) {
        this._ctx = t
    }, r.prototype.getContext = function () {
        return this._ctx
    }, r.prototype.beginPath = function () {
        return this._ctx && this._ctx.beginPath(), this.reset(), this
    }, r.prototype.reset = function () {
        this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++
    }, r.prototype.moveTo = function (t, e) {
        return this._drawPendingPt(), this.addData(ut.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
    }, r.prototype.lineTo = function (t, e) {
        var i = je(t - this._xi),
            n = je(e - this._yi),
            a = i > this._ux || n > this._uy;
        if (this.addData(ut.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a) this._xi = t, this._yi = e, this._pendingPtDist = 0;
        else {
            var o = i * i + n * n;
            o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o)
        }
        return this
    }, r.prototype.bezierCurveTo = function (t, e, i, n, a, o) {
        return this._drawPendingPt(), this.addData(ut.C, t, e, i, n, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, i, n, a, o), this._xi = a, this._yi = o, this
    }, r.prototype.quadraticCurveTo = function (t, e, i, n) {
        return this._drawPendingPt(), this.addData(ut.Q, t, e, i, n), this._ctx && this._ctx.quadraticCurveTo(t, e, i, n), this._xi = i, this._yi = n, this
    }, r.prototype.arc = function (t, e, i, n, a, o) {
        this._drawPendingPt(), vn[0] = n, vn[1] = a, Lp(vn, o), n = vn[0], a = vn[1];
        var s = a - n;
        return this.addData(ut.A, t, e, i, i, n, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, a, o), this._xi = Wr(a) * i + t, this._yi = Ur(a) * i + e, this
    }, r.prototype.arcTo = function (t, e, i, n, a) {
        return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, i, n, a), this
    }, r.prototype.rect = function (t, e, i, n) {
        return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, i, n), this.addData(ut.R, t, e, i, n), this
    }, r.prototype.closePath = function () {
        this._drawPendingPt(), this.addData(ut.Z);
        var t = this._ctx,
            e = this._x0,
            i = this._y0;
        return t && t.closePath(), this._xi = e, this._yi = i, this
    }, r.prototype.fill = function (t) {
        t && t.fill(), this.toStatic()
    }, r.prototype.stroke = function (t) {
        t && t.stroke(), this.toStatic()
    }, r.prototype.len = function () {
        return this._len
    }, r.prototype.setData = function (t) {
        var e = t.length;
        !(this.data && this.data.length === e) && il && (this.data = new Float32Array(e));
        for (var i = 0; i < e; i++) this.data[i] = t[i];
        this._len = e
    }, r.prototype.appendPath = function (t) {
        t instanceof Array || (t = [t]);
        for (var e = t.length, i = 0, n = this._len, a = 0; a < e; a++) i += t[a].len();
        il && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
        for (var a = 0; a < e; a++)
            for (var o = t[a].data, s = 0; s < o.length; s++) this.data[n++] = o[s];
        this._len = n
    }, r.prototype.addData = function (t, e, i, n, a, o, s, l, u) {
        if (this._saveData) {
            var c = this.data;
            this._len + arguments.length > c.length && (this._expandData(), c = this.data);
            for (var f = 0; f < arguments.length; f++) c[this._len++] = arguments[f]
        }
    }, r.prototype._drawPendingPt = function () {
        this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0)
    }, r.prototype._expandData = function () {
        if (!(this.data instanceof Array)) {
            for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
            this.data = t
        }
    }, r.prototype.toStatic = function () {
        if (this._saveData) {
            this._drawPendingPt();
            var t = this.data;
            t instanceof Array && (t.length = this._len, il && this._len > 11 && (this.data = new Float32Array(t)))
        }
    }, r.prototype.getBoundingRect = function () {
        Ne[0] = Ne[1] = Fe[0] = Fe[1] = Number.MAX_VALUE, ur[0] = ur[1] = $e[0] = $e[1] = -Number.MAX_VALUE;
        var t = this.data,
            e = 0,
            i = 0,
            n = 0,
            a = 0,
            o;
        for (o = 0; o < this._len;) {
            var s = t[o++],
                l = o === 1;
            switch (l && (e = t[o], i = t[o + 1], n = e, a = i), s) {
                case ut.M:
                    e = n = t[o++], i = a = t[o++], Fe[0] = n, Fe[1] = a, $e[0] = n, $e[1] = a;
                    break;
                case ut.L:
                    Hf(e, i, t[o], t[o + 1], Fe, $e), e = t[o++], i = t[o++];
                    break;
                case ut.C:
                    VC(e, i, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Fe, $e), e = t[o++], i = t[o++];
                    break;
                case ut.Q:
                    WC(e, i, t[o++], t[o++], t[o], t[o + 1], Fe, $e), e = t[o++], i = t[o++];
                    break;
                case ut.A:
                    var u = t[o++],
                        c = t[o++],
                        f = t[o++],
                        v = t[o++],
                        h = t[o++],
                        d = t[o++] + h;
                    o += 1;
                    var m = !t[o++];
                    l && (n = Wr(h) * f + u, a = Ur(h) * v + c), UC(u, c, f, v, h, d, m, Fe, $e), e = Wr(d) * f + u, i = Ur(d) * v + c;
                    break;
                case ut.R:
                    n = e = t[o++], a = i = t[o++];
                    var p = t[o++],
                        g = t[o++];
                    Hf(n, a, n + p, a + g, Fe, $e);
                    break;
                case ut.Z:
                    e = n, i = a;
                    break
            }
            Bi(Ne, Ne, Fe), Ni(ur, ur, $e)
        }
        return o === 0 && (Ne[0] = Ne[1] = ur[0] = ur[1] = 0), new ct(Ne[0], Ne[1], ur[0] - Ne[0], ur[1] - Ne[1])
    }, r.prototype._calculateLength = function () {
        var t = this.data,
            e = this._len,
            i = this._ux,
            n = this._uy,
            a = 0,
            o = 0,
            s = 0,
            l = 0;
        this._pathSegLen || (this._pathSegLen = []);
        for (var u = this._pathSegLen, c = 0, f = 0, v = 0; v < e;) {
            var h = t[v++],
                d = v === 1;
            d && (a = t[v], o = t[v + 1], s = a, l = o);
            var m = -1;
            switch (h) {
                case ut.M:
                    a = s = t[v++], o = l = t[v++];
                    break;
                case ut.L: {
                    var p = t[v++],
                        g = t[v++],
                        _ = p - a,
                        y = g - o;
                    (je(_) > i || je(y) > n || v === e - 1) && (m = Math.sqrt(_ * _ + y * y), a = p, o = g);
                    break
                }
                case ut.C: {
                    var x = t[v++],
                        S = t[v++],
                        p = t[v++],
                        g = t[v++],
                        w = t[v++],
                        T = t[v++];
                    m = hS(a, o, x, S, p, g, w, T, 10), a = w, o = T;
                    break
                }
                case ut.Q: {
                    var x = t[v++],
                        S = t[v++],
                        p = t[v++],
                        g = t[v++];
                    m = pS(a, o, x, S, p, g, 10), a = p, o = g;
                    break
                }
                case ut.A:
                    var C = t[v++],
                        M = t[v++],
                        I = t[v++],
                        A = t[v++],
                        L = t[v++],
                        P = t[v++],
                        k = P + L;
                    v += 1, d && (s = Wr(L) * I + C, l = Ur(L) * A + M), m = rl(I, A) * el(_r, Math.abs(P)), a = Wr(k) * I + C, o = Ur(k) * A + M;
                    break;
                case ut.R: {
                    s = a = t[v++], l = o = t[v++];
                    var R = t[v++],
                        E = t[v++];
                    m = R * 2 + E * 2;
                    break
                }
                case ut.Z: {
                    var _ = s - a,
                        y = l - o;
                    m = Math.sqrt(_ * _ + y * y), a = s, o = l;
                    break
                }
            }
            m >= 0 && (u[f++] = m, c += m)
        }
        return this._pathLen = c, c
    }, r.prototype.rebuildPath = function (t, e) {
        var i = this.data,
            n = this._ux,
            a = this._uy,
            o = this._len,
            s, l, u, c, f, v, h = e < 1,
            d, m, p = 0,
            g = 0,
            _, y = 0,
            x, S;
        if (!(h && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, m = this._pathLen, _ = e * m, !_))) t: for (var w = 0; w < o;) {
            var T = i[w++],
                C = w === 1;
            switch (C && (u = i[w], c = i[w + 1], s = u, l = c), T !== ut.L && y > 0 && (t.lineTo(x, S), y = 0), T) {
                case ut.M:
                    s = u = i[w++], l = c = i[w++], t.moveTo(u, c);
                    break;
                case ut.L: {
                    f = i[w++], v = i[w++];
                    var M = je(f - u),
                        I = je(v - c);
                    if (M > n || I > a) {
                        if (h) {
                            var A = d[g++];
                            if (p + A > _) {
                                var L = (_ - p) / A;
                                t.lineTo(u * (1 - L) + f * L, c * (1 - L) + v * L);
                                break t
                            }
                            p += A
                        }
                        t.lineTo(f, v), u = f, c = v, y = 0
                    } else {
                        var P = M * M + I * I;
                        P > y && (x = f, S = v, y = P)
                    }
                    break
                }
                case ut.C: {
                    var k = i[w++],
                        R = i[w++],
                        E = i[w++],
                        W = i[w++],
                        F = i[w++],
                        $ = i[w++];
                    if (h) {
                        var A = d[g++];
                        if (p + A > _) {
                            var L = (_ - p) / A;
                            Do(u, k, E, F, L, Gr), Do(c, R, W, $, L, Vr), t.bezierCurveTo(Gr[1], Vr[1], Gr[2], Vr[2], Gr[3], Vr[3]);
                            break t
                        }
                        p += A
                    }
                    t.bezierCurveTo(k, R, E, W, F, $), u = F, c = $;
                    break
                }
                case ut.Q: {
                    var k = i[w++],
                        R = i[w++],
                        E = i[w++],
                        W = i[w++];
                    if (h) {
                        var A = d[g++];
                        if (p + A > _) {
                            var L = (_ - p) / A;
                            Ao(u, k, E, L, Gr), Ao(c, R, W, L, Vr), t.quadraticCurveTo(Gr[1], Vr[1], Gr[2], Vr[2]);
                            break t
                        }
                        p += A
                    }
                    t.quadraticCurveTo(k, R, E, W), u = E, c = W;
                    break
                }
                case ut.A:
                    var G = i[w++],
                        tt = i[w++],
                        J = i[w++],
                        at = i[w++],
                        lt = i[w++],
                        Et = i[w++],
                        mt = i[w++],
                        Kt = !i[w++],
                        ce = J > at ? J : at,
                        Ot = je(J - at) > .001,
                        Dt = lt + Et,
                        q = !1;
                    if (h) {
                        var A = d[g++];
                        p + A > _ && (Dt = lt + Et * (_ - p) / A, q = !0), p += A
                    }
                    if (Ot && t.ellipse ? t.ellipse(G, tt, J, at, mt, lt, Dt, Kt) : t.arc(G, tt, ce, lt, Dt, Kt), q) break t;
                    C && (s = Wr(lt) * J + G, l = Ur(lt) * at + tt), u = Wr(Dt) * J + G, c = Ur(Dt) * at + tt;
                    break;
                case ut.R:
                    s = u = i[w], l = c = i[w + 1], f = i[w++], v = i[w++];
                    var et = i[w++],
                        Be = i[w++];
                    if (h) {
                        var A = d[g++];
                        if (p + A > _) {
                            var Rt = _ - p;
                            t.moveTo(f, v), t.lineTo(f + el(Rt, et), v), Rt -= et, Rt > 0 && t.lineTo(f + et, v + el(Rt, Be)), Rt -= Be, Rt > 0 && t.lineTo(f + rl(et - Rt, 0), v + Be), Rt -= et, Rt > 0 && t.lineTo(f, v + rl(Be - Rt, 0));
                            break t
                        }
                        p += A
                    }
                    t.rect(f, v, et, Be);
                    break;
                case ut.Z:
                    if (h) {
                        var A = d[g++];
                        if (p + A > _) {
                            var L = (_ - p) / A;
                            t.lineTo(u * (1 - L) + s * L, c * (1 - L) + l * L);
                            break t
                        }
                        p += A
                    }
                    t.closePath(), u = s, c = l
            }
        }
    }, r.prototype.clone = function () {
        var t = new r,
            e = this.data;
        return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t
    }, r.CMD = ut, r.initDefaultProps = function () {
        var t = r.prototype;
        t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0
    }(), r
}();

function Ti(r, t, e, i, n, a, o) {
    if (n === 0) return !1;
    var s = n,
        l = 0,
        u = r;
    if (o > t + s && o > i + s || o < t - s && o < i - s || a > r + s && a > e + s || a < r - s && a < e - s) return !1;
    if (r !== e) l = (t - i) / (r - e), u = (r * i - e * t) / (r - e);
    else return Math.abs(a - r) <= s / 2;
    var c = l * a - o + u,
        f = c * c / (l * l + 1);
    return f <= s / 2 * s / 2
}

function YC(r, t, e, i, n, a, o, s, l, u, c) {
    if (l === 0) return !1;
    var f = l;
    if (c > t + f && c > i + f && c > a + f && c > s + f || c < t - f && c < i - f && c < a - f && c < s - f || u > r + f && u > e + f && u > n + f && u > o + f || u < r - f && u < e - f && u < n - f && u < o - f) return !1;
    var v = fS(r, t, e, i, n, a, o, s, u, c, null);
    return v <= f / 2
}

function XC(r, t, e, i, n, a, o, s, l) {
    if (o === 0) return !1;
    var u = o;
    if (l > t + u && l > i + u && l > a + u || l < t - u && l < i - u && l < a - u || s > r + u && s > e + u && s > n + u || s < r - u && s < e - u && s < n - u) return !1;
    var c = dS(r, t, e, i, n, a, s, l, null);
    return c <= u / 2
}
var Wf = Math.PI * 2;

function Fa(r) {
    return r %= Wf, r < 0 && (r += Wf), r
}
var dn = Math.PI * 2;

function ZC(r, t, e, i, n, a, o, s, l) {
    if (o === 0) return !1;
    var u = o;
    s -= r, l -= t;
    var c = Math.sqrt(s * s + l * l);
    if (c - u > e || c + u < e) return !1;
    if (Math.abs(i - n) % dn < 1e-4) return !0;
    if (a) {
        var f = i;
        i = Fa(n), n = Fa(f)
    } else i = Fa(i), n = Fa(n);
    i > n && (n += dn);
    var v = Math.atan2(l, s);
    return v < 0 && (v += dn), v >= i && v <= n || v + dn >= i && v + dn <= n
}

function Yr(r, t, e, i, n, a) {
    if (a > t && a > i || a < t && a < i || i === t) return 0;
    var o = (a - t) / (i - t),
        s = i < t ? 1 : -1;
    (o === 1 || o === 0) && (s = i < t ?.5 : -.5);
    var l = o * (e - r) + r;
    return l === n ? 1 / 0 : l > n ? s : 0
}
var cr = hi.CMD,
    Xr = Math.PI * 2,
    qC = 1e-4;

function KC(r, t) {
    return Math.abs(r - t) < qC
}
var Ut = [-1, -1, -1],
    ye = [-1, -1];

function jC() {
    var r = ye[0];
    ye[0] = ye[1], ye[1] = r
}

function QC(r, t, e, i, n, a, o, s, l, u) {
    if (u > t && u > i && u > a && u > s || u < t && u < i && u < a && u < s) return 0;
    var c = Mo(t, i, a, s, u, Ut);
    if (c === 0) return 0;
    for (var f = 0, v = -1, h = void 0, d = void 0, m = 0; m < c; m++) {
        var p = Ut[m],
            g = p === 0 || p === 1 ?.5 : 1,
            _ = Pt(r, e, n, o, p);
        _ < l || (v < 0 && (v = ip(t, i, a, s, ye), ye[1] < ye[0] && v > 1 && jC(), h = Pt(t, i, a, s, ye[0]), v > 1 && (d = Pt(t, i, a, s, ye[1]))), v === 2 ? p < ye[0] ? f += h < t ? g : -g : p < ye[1] ? f += d < h ? g : -g : f += s < d ? g : -g : p < ye[0] ? f += h < t ? g : -g : f += s < h ? g : -g)
    }
    return f
}

function JC(r, t, e, i, n, a, o, s) {
    if (s > t && s > i && s > a || s < t && s < i && s < a) return 0;
    var l = vS(t, i, a, s, Ut);
    if (l === 0) return 0;
    var u = np(t, i, a);
    if (u >= 0 && u <= 1) {
        for (var c = 0, f = Ht(t, i, a, u), v = 0; v < l; v++) {
            var h = Ut[v] === 0 || Ut[v] === 1 ?.5 : 1,
                d = Ht(r, e, n, Ut[v]);
            d < o || (Ut[v] < u ? c += f < t ? h : -h : c += a < f ? h : -h)
        }
        return c
    } else {
        var h = Ut[0] === 0 || Ut[0] === 1 ?.5 : 1,
            d = Ht(r, e, n, Ut[0]);
        return d < o ? 0 : a < t ? h : -h
    }
}

function tT(r, t, e, i, n, a, o, s) {
    if (s -= t, s > e || s < -e) return 0;
    var l = Math.sqrt(e * e - s * s);
    Ut[0] = -l, Ut[1] = l;
    var u = Math.abs(i - n);
    if (u < 1e-4) return 0;
    if (u >= Xr - 1e-4) {
        i = 0, n = Xr;
        var c = a ? 1 : -1;
        return o >= Ut[0] + r && o <= Ut[1] + r ? c : 0
    }
    if (i > n) {
        var f = i;
        i = n, n = f
    }
    i < 0 && (i += Xr, n += Xr);
    for (var v = 0, h = 0; h < 2; h++) {
        var d = Ut[h];
        if (d + r > o) {
            var m = Math.atan2(s, d),
                c = a ? 1 : -1;
            m < 0 && (m = Xr + m), (m >= i && m <= n || m + Xr >= i && m + Xr <= n) && (m > Math.PI / 2 && m < Math.PI * 1.5 && (c = -c), v += c)
        }
    }
    return v
}

function Pp(r, t, e, i, n) {
    for (var a = r.data, o = r.len(), s = 0, l = 0, u = 0, c = 0, f = 0, v, h, d = 0; d < o;) {
        var m = a[d++],
            p = d === 1;
        switch (m === cr.M && d > 1 && (e || (s += Yr(l, u, c, f, i, n))), p && (l = a[d], u = a[d + 1], c = l, f = u), m) {
            case cr.M:
                c = a[d++], f = a[d++], l = c, u = f;
                break;
            case cr.L:
                if (e) {
                    if (Ti(l, u, a[d], a[d + 1], t, i, n)) return !0
                } else s += Yr(l, u, a[d], a[d + 1], i, n) || 0;
                l = a[d++], u = a[d++];
                break;
            case cr.C:
                if (e) {
                    if (YC(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, i, n)) return !0
                } else s += QC(l, u, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
                l = a[d++], u = a[d++];
                break;
            case cr.Q:
                if (e) {
                    if (XC(l, u, a[d++], a[d++], a[d], a[d + 1], t, i, n)) return !0
                } else s += JC(l, u, a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
                l = a[d++], u = a[d++];
                break;
            case cr.A:
                var g = a[d++],
                    _ = a[d++],
                    y = a[d++],
                    x = a[d++],
                    S = a[d++],
                    w = a[d++];
                d += 1;
                var T = !!(1 - a[d++]);
                v = Math.cos(S) * y + g, h = Math.sin(S) * x + _, p ? (c = v, f = h) : s += Yr(l, u, v, h, i, n);
                var C = (i - g) * x / y + g;
                if (e) {
                    if (ZC(g, _, x, S, S + w, T, t, C, n)) return !0
                } else s += tT(g, _, x, S, S + w, T, C, n);
                l = Math.cos(S + w) * y + g, u = Math.sin(S + w) * x + _;
                break;
            case cr.R:
                c = l = a[d++], f = u = a[d++];
                var M = a[d++],
                    I = a[d++];
                if (v = c + M, h = f + I, e) {
                    if (Ti(c, f, v, f, t, i, n) || Ti(v, f, v, h, t, i, n) || Ti(v, h, c, h, t, i, n) || Ti(c, h, c, f, t, i, n)) return !0
                } else s += Yr(v, f, v, h, i, n), s += Yr(c, h, c, f, i, n);
                break;
            case cr.Z:
                if (e) {
                    if (Ti(l, u, c, f, t, i, n)) return !0
                } else s += Yr(l, u, c, f, i, n);
                l = c, u = f;
                break
        }
    }
    return !e && !KC(u, f) && (s += Yr(l, u, c, f, i, n) || 0), s !== 0
}

function eT(r, t, e) {
    return Pp(r, 0, !1, t, e)
}

function rT(r, t, e, i) {
    return Pp(r, t, !0, e, i)
}
var kp = ht({
        fill: "#000",
        stroke: null,
        strokePercent: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        lineDashOffset: 0,
        lineWidth: 1,
        lineCap: "butt",
        miterLimit: 10,
        strokeNoScale: !1,
        strokeFirst: !1
    }, oi),
    iT = {
        style: ht({
            fill: !0,
            stroke: !0,
            strokePercent: !0,
            fillOpacity: !0,
            strokeOpacity: !0,
            lineDashOffset: !0,
            lineWidth: !0,
            miterLimit: !0
        }, ns.style)
    },
    al = jn.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]),
    nT = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype.update = function () {
            var e = this;
            r.prototype.update.call(this);
            var i = this.style;
            if (i.decal) {
                var n = this._decalEl = this._decalEl || new t;
                n.buildPath === t.prototype.buildPath && (n.buildPath = function (l) {
                    e.buildPath(l, e.shape)
                }), n.silent = !0;
                var a = n.style;
                for (var o in i) a[o] !== i[o] && (a[o] = i[o]);
                a.fill = i.fill ? i.decal : null, a.decal = null, a.shadowColor = null, i.strokeFirst && (a.stroke = null);
                for (var s = 0; s < al.length; ++s) n[al[s]] = this[al[s]];
                n.__dirty |= fe
            } else this._decalEl && (this._decalEl = null)
        }, t.prototype.getDecalElement = function () {
            return this._decalEl
        }, t.prototype._init = function (e) {
            var i = wt(e);
            this.shape = this.getDefaultShape();
            var n = this.getDefaultStyle();
            n && this.useStyle(n);
            for (var a = 0; a < i.length; a++) {
                var o = i[a],
                    s = e[o];
                o === "style" ? this.style ? O(this.style, s) : this.useStyle(s) : o === "shape" ? O(this.shape, s) : r.prototype.attrKV.call(this, o, s)
            }
            this.style || this.useStyle({})
        }, t.prototype.getDefaultStyle = function () {
            return null
        }, t.prototype.getDefaultShape = function () {
            return {}
        }, t.prototype.canBeInsideText = function () {
            return this.hasFill()
        }, t.prototype.getInsideTextFill = function () {
            var e = this.style.fill;
            if (e !== "none") {
                if (V(e)) {
                    var i = Io(e, 0);
                    return i > .5 ? su : i > .2 ? NS : lu
                } else if (e) return lu
            }
            return su
        }, t.prototype.getInsideTextStroke = function (e) {
            var i = this.style.fill;
            if (V(i)) {
                var n = this.__zr,
                    a = !!(n && n.isDarkMode()),
                    o = Io(e, 0) < ou;
                if (a === o) return i
            }
        }, t.prototype.buildPath = function (e, i, n) {}, t.prototype.pathUpdated = function () {
            this.__dirty &= ~Ri
        }, t.prototype.getUpdatedPathProxy = function (e) {
            return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path
        }, t.prototype.createPathProxy = function () {
            this.path = new hi(!1)
        }, t.prototype.hasStroke = function () {
            var e = this.style,
                i = e.stroke;
            return !(i == null || i === "none" || !(e.lineWidth > 0))
        }, t.prototype.hasFill = function () {
            var e = this.style,
                i = e.fill;
            return i != null && i !== "none"
        }, t.prototype.getBoundingRect = function () {
            var e = this._rect,
                i = this.style,
                n = !e;
            if (n) {
                var a = !1;
                this.path || (a = !0, this.createPathProxy());
                var o = this.path;
                (a || this.__dirty & Ri) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect()
            }
            if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
                var s = this._rectStroke || (this._rectStroke = e.clone());
                if (this.__dirty || n) {
                    s.copy(e);
                    var l = i.strokeNoScale ? this.getLineScale() : 1,
                        u = i.lineWidth;
                    if (!this.hasFill()) {
                        var c = this.strokeContainThreshold;
                        u = Math.max(u, c ?? 4)
                    }
                    l > 1e-10 && (s.width += u / l, s.height += u / l, s.x -= u / l / 2, s.y -= u / l / 2)
                }
                return s
            }
            return e
        }, t.prototype.contain = function (e, i) {
            var n = this.transformCoordToLocal(e, i),
                a = this.getBoundingRect(),
                o = this.style;
            if (e = n[0], i = n[1], a.contain(e, i)) {
                var s = this.path;
                if (this.hasStroke()) {
                    var l = o.lineWidth,
                        u = o.strokeNoScale ? this.getLineScale() : 1;
                    if (u > 1e-10 && (this.hasFill() || (l = Math.max(l, this.strokeContainThreshold)), rT(s, l / u, e, i))) return !0
                }
                if (this.hasFill()) return eT(s, e, i)
            }
            return !1
        }, t.prototype.dirtyShape = function () {
            this.__dirty |= Ri, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw()
        }, t.prototype.dirty = function () {
            this.dirtyStyle(), this.dirtyShape()
        }, t.prototype.animateShape = function (e) {
            return this.animate("shape", e)
        }, t.prototype.updateDuringAnimation = function (e) {
            e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw()
        }, t.prototype.attrKV = function (e, i) {
            e === "shape" ? this.setShape(i) : r.prototype.attrKV.call(this, e, i)
        }, t.prototype.setShape = function (e, i) {
            var n = this.shape;
            return n || (n = this.shape = {}), typeof e == "string" ? n[e] = i : O(n, e), this.dirtyShape(), this
        }, t.prototype.shapeChanged = function () {
            return !!(this.__dirty & Ri)
        }, t.prototype.createStyle = function (e) {
            return es(kp, e)
        }, t.prototype._innerSaveToNormal = function (e) {
            r.prototype._innerSaveToNormal.call(this, e);
            var i = this._normalState;
            e.shape && !i.shape && (i.shape = O({}, this.shape))
        }, t.prototype._applyStateObj = function (e, i, n, a, o, s) {
            r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
            var l = !(i && a),
                u;
            if (i && i.shape ? o ? a ? u = i.shape : (u = O({}, n.shape), O(u, i.shape)) : (u = O({}, a ? this.shape : n.shape), O(u, i.shape)) : l && (u = n.shape), u)
                if (o) {
                    this.shape = O({}, this.shape);
                    for (var c = {}, f = wt(u), v = 0; v < f.length; v++) {
                        var h = f[v];
                        typeof u[h] == "object" ? this.shape[h] = u[h] : c[h] = u[h]
                    }
                    this._transitionState(e, {
                        shape: c
                    }, s)
                } else this.shape = u, this.dirtyShape()
        }, t.prototype._mergeStates = function (e) {
            for (var i = r.prototype._mergeStates.call(this, e), n, a = 0; a < e.length; a++) {
                var o = e[a];
                o.shape && (n = n || {}, this._mergeStyle(n, o.shape))
            }
            return n && (i.shape = n), i
        }, t.prototype.getAnimationStyleProps = function () {
            return iT
        }, t.prototype.isZeroArea = function () {
            return !1
        }, t.extend = function (e) {
            var i = function (a) {
                z(o, a);

                function o(s) {
                    var l = a.call(this, s) || this;
                    return e.init && e.init.call(l, s), l
                }
                return o.prototype.getDefaultStyle = function () {
                    return ot(e.style)
                }, o.prototype.getDefaultShape = function () {
                    return ot(e.shape)
                }, o
            }(t);
            for (var n in e) typeof e[n] == "function" && (i.prototype[n] = e[n]);
            return i
        }, t.initDefaultProps = function () {
            var e = t.prototype;
            e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = fe | Dn | Ri
        }(), t
    }(_a);
const gt = nT;
var aT = ht({
        strokeFirst: !0,
        font: ci,
        x: 0,
        y: 0,
        textAlign: "left",
        textBaseline: "top",
        miterLimit: 2
    }, kp),
    Ep = function (r) {
        z(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t.prototype.hasStroke = function () {
            var e = this.style,
                i = e.stroke;
            return i != null && i !== "none" && e.lineWidth > 0
        }, t.prototype.hasFill = function () {
            var e = this.style,
                i = e.fill;
            return i != null && i !== "none"
        }, t.prototype.createStyle = function (e) {
            return es(aT, e)
        }, t.prototype.setBoundingRect = function (e) {
            this._rect = e
        }, t.prototype.getBoundingRect = function () {
            var e = this.style;
            if (!this._rect) {
                var i = e.text;
                i != null ? i += "" : i = "";
                var n = sc(i, e.font, e.textAlign, e.textBaseline);
                if (n.x += e.x || 0, n.y += e.y || 0, this.hasStroke()) {
                    var a = e.lineWidth;
                    n.x -= a / 2, n.y -= a / 2, n.width += a, n.height += a
                }
                this._rect = n
            }
            return this._rect
        }, t.initDefaultProps = function () {
            var e = t.prototype;
            e.dirtyRectTolerance = 10
        }(), t
    }(_a);
Ep.prototype.type = "tspan";
const du = Ep;
var oT = ht({
        x: 0,
        y: 0
    }, oi),
    sT = {
        style: ht({
            x: !0,
            y: !0,
            width: !0,
            height: !0,
            sx: !0,
            sy: !0,
            sWidth: !0,
            sHeight: !0
        }, ns.style)
    };

function lT(r) {
    return !!(r && typeof r != "string" && r.width && r.height)
}
var Rp = function (r) {
    z(t, r);

    function t() {
        return r !== null && r.apply(this, arguments) || this
    }
    return t.prototype.createStyle = function (e) {
        return es(oT, e)
    }, t.prototype._getSize = function (e) {
        var i = this.style,
            n = i[e];
        if (n != null) return n;
        var a = lT(i.image) ? i.image : this.__image;
        if (!a) return 0;
        var o = e === "width" ? "height" : "width",
            s = i[o];
        return s == null ? a[e] : a[e] / a[o] * s
    }, t.prototype.getWidth = function () {
        return this._getSize("width")
    }, t.prototype.getHeight = function () {
        return this._getSize("height")
    }, t.prototype.getAnimationStyleProps = function () {
        return sT
    }, t.prototype.getBoundingRect = function () {
        var e = this.style;
        return this._rect || (this._rect = new ct(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect
    }, t
}(_a);
Rp.prototype.type = "image";
const gi = Rp;

function uT(r, t) {
    var e = t.x,
        i = t.y,
        n = t.width,
        a = t.height,
        o = t.r,
        s, l, u, c;
    n < 0 && (e = e + n, n = -n), a < 0 && (i = i + a, a = -a), typeof o == "number" ? s = l = u = c = o : o instanceof Array ? o.length === 1 ? s = l = u = c = o[0] : o.length === 2 ? (s = u = o[0], l = c = o[1]) : o.length === 3 ? (s = o[0], l = c = o[1], u = o[2]) : (s = o[0], l = o[1], u = o[2], c = o[3]) : s = l = u = c = 0;
    var f;
    s + l > n && (f = s + l, s *= n / f, l *= n / f), u + c > n && (f = u + c, u *= n / f, c *= n / f), l + u > a && (f = l + u, l *= a / f, u *= a / f), s + c > a && (f = s + c, s *= a / f, c *= a / f), r.moveTo(e + s, i), r.lineTo(e + n - l, i), l !== 0 && r.arc(e + n - l, i + l, l, -Math.PI / 2, 0), r.lineTo(e + n, i + a - u), u !== 0 && r.arc(e + n - u, i + a - u, u, 0, Math.PI / 2), r.lineTo(e + c, i + a), c !== 0 && r.arc(e + c, i + a - c, c, Math.PI / 2, Math.PI), r.lineTo(e, i + s), s !== 0 && r.arc(e + s, i + s, s, Math.PI, Math.PI * 1.5)
}
var $i = Math.round;

function Op(r, t, e) {
    if (t) {
        var i = t.x1,
            n = t.x2,
            a = t.y1,
            o = t.y2;
        r.x1 = i, r.x2 = n, r.y1 = a, r.y2 = o;
        var s = e && e.lineWidth;
        return s && ($i(i * 2) === $i(n * 2) && (r.x1 = r.x2 = ii(i, s, !0)), $i(a * 2) === $i(o * 2) && (r.y1 = r.y2 = ii(a, s, !0))), r
    }
}

function Bp(r, t, e) {
    if (t) {
        var i = t.x,
            n = t.y,
            a = t.width,
            o = t.height;
        r.x = i, r.y = n, r.width = a, r.height = o;
        var s = e && e.lineWidth;
        return s && (r.x = ii(i, s, !0), r.y = ii(n, s, !0), r.width = Math.max(ii(i + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(ii(n + o, s, !1) - r.y, o === 0 ? 0 : 1)), r
    }
}

function ii(r, t, e) {
    if (!t) return r;
    var i = $i(r * 2);
    return (i + $i(t)) % 2 === 0 ? i / 2 : (i + (e ? 1 : -1)) / 2
}
var cT = function () {
        function r() {
            this.x = 0, this.y = 0, this.width = 0, this.height = 0
        }
        return r
    }(),
    fT = {},
    Np = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new cT
        }, t.prototype.buildPath = function (e, i) {
            var n, a, o, s;
            if (this.subPixelOptimize) {
                var l = Bp(fT, i, this.style);
                n = l.x, a = l.y, o = l.width, s = l.height, l.r = i.r, i = l
            } else n = i.x, a = i.y, o = i.width, s = i.height;
            i.r ? uT(e, i) : e.rect(n, a, o, s)
        }, t.prototype.isZeroArea = function () {
            return !this.shape.width || !this.shape.height
        }, t
    }(gt);
Np.prototype.type = "rect";
const ae = Np;
var Uf = {
        fill: "#000"
    },
    Yf = 2,
    hT = {
        style: ht({
            fill: !0,
            stroke: !0,
            fillOpacity: !0,
            strokeOpacity: !0,
            lineWidth: !0,
            fontSize: !0,
            lineHeight: !0,
            width: !0,
            height: !0,
            textShadowColor: !0,
            textShadowBlur: !0,
            textShadowOffsetX: !0,
            textShadowOffsetY: !0,
            backgroundColor: !0,
            padding: !0,
            borderColor: !0,
            borderWidth: !0,
            borderRadius: !0
        }, ns.style)
    },
    Fp = function (r) {
        z(t, r);

        function t(e) {
            var i = r.call(this) || this;
            return i.type = "text", i._children = [], i._defaultStyle = Uf, i.attr(e), i
        }
        return t.prototype.childrenRef = function () {
            return this._children
        }, t.prototype.update = function () {
            r.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                i.zlevel = this.zlevel, i.z = this.z, i.z2 = this.z2, i.culling = this.culling, i.cursor = this.cursor, i.invisible = this.invisible
            }
        }, t.prototype.updateTransform = function () {
            var e = this.innerTransformable;
            e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : r.prototype.updateTransform.call(this)
        }, t.prototype.getLocalTransform = function (e) {
            var i = this.innerTransformable;
            return i ? i.getLocalTransform(e) : r.prototype.getLocalTransform.call(this, e)
        }, t.prototype.getComputedTransform = function () {
            return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), r.prototype.getComputedTransform.call(this)
        }, t.prototype._updateSubTexts = function () {
            this._childCursor = 0, mT(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated()
        }, t.prototype.addSelfToZr = function (e) {
            r.prototype.addSelfToZr.call(this, e);
            for (var i = 0; i < this._children.length; i++) this._children[i].__zr = e
        }, t.prototype.removeSelfFromZr = function (e) {
            r.prototype.removeSelfFromZr.call(this, e);
            for (var i = 0; i < this._children.length; i++) this._children[i].__zr = null
        }, t.prototype.getBoundingRect = function () {
            if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
                for (var e = new ct(0, 0, 0, 0), i = this._children, n = [], a = null, o = 0; o < i.length; o++) {
                    var s = i[o],
                        l = s.getBoundingRect(),
                        u = s.getLocalTransform(n);
                    u ? (e.copy(l), e.applyTransform(u), a = a || e.clone(), a.union(e)) : (a = a || l.clone(), a.union(l))
                }
                this._rect = a || e
            }
            return this._rect
        }, t.prototype.setDefaultTextStyle = function (e) {
            this._defaultStyle = e || Uf
        }, t.prototype.setTextContent = function (e) {}, t.prototype._mergeStyle = function (e, i) {
            if (!i) return e;
            var n = i.rich,
                a = e.rich || n && {};
            return O(e, i), n && a ? (this._mergeRich(a, n), e.rich = a) : a && (e.rich = a), e
        }, t.prototype._mergeRich = function (e, i) {
            for (var n = wt(i), a = 0; a < n.length; a++) {
                var o = n[a];
                e[o] = e[o] || {}, O(e[o], i[o])
            }
        }, t.prototype.getAnimationStyleProps = function () {
            return hT
        }, t.prototype._getOrCreateChild = function (e) {
            var i = this._children[this._childCursor];
            return (!i || !(i instanceof e)) && (i = new e), this._children[this._childCursor++] = i, i.__zr = this.__zr, i.parent = this, i
        }, t.prototype._updatePlainTexts = function () {
            var e = this.style,
                i = e.font || ci,
                n = e.padding,
                a = Jf(e),
                o = EC(a, e),
                s = ol(e),
                l = !!e.backgroundColor,
                u = o.outerHeight,
                c = o.outerWidth,
                f = o.contentWidth,
                v = o.lines,
                h = o.lineHeight,
                d = this._defaultStyle,
                m = e.x || 0,
                p = e.y || 0,
                g = e.align || d.align || "left",
                _ = e.verticalAlign || d.verticalAlign || "top",
                y = m,
                x = Oi(p, o.contentHeight, _);
            if (s || n) {
                var S = In(m, c, g),
                    w = Oi(p, u, _);
                s && this._renderBackground(e, e, S, w, c, u)
            }
            x += h / 2, n && (y = Qf(m, g, n), _ === "top" ? x += n[0] : _ === "bottom" && (x -= n[2]));
            for (var T = 0, C = !1, M = jf("fill" in e ? e.fill : (C = !0, d.fill)), I = Kf("stroke" in e ? e.stroke : !l && (!d.autoStroke || C) ? (T = Yf, d.stroke) : null), A = e.textShadowBlur > 0, L = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), P = o.calculatedLineHeight, k = 0; k < v.length; k++) {
                var R = this._getOrCreateChild(du),
                    E = R.createStyle();
                R.useStyle(E), E.text = v[k], E.x = y, E.y = x, g && (E.textAlign = g), E.textBaseline = "middle", E.opacity = e.opacity, E.strokeFirst = !0, A && (E.shadowBlur = e.textShadowBlur || 0, E.shadowColor = e.textShadowColor || "transparent", E.shadowOffsetX = e.textShadowOffsetX || 0, E.shadowOffsetY = e.textShadowOffsetY || 0), E.stroke = I, E.fill = M, I && (E.lineWidth = e.lineWidth || T, E.lineDash = e.lineDash, E.lineDashOffset = e.lineDashOffset || 0), E.font = i, Zf(E, e), x += h, L && R.setBoundingRect(new ct(In(E.x, e.width, E.textAlign), Oi(E.y, P, E.textBaseline), f, P))
            }
        }, t.prototype._updateRichTexts = function () {
            var e = this.style,
                i = Jf(e),
                n = BC(i, e),
                a = n.width,
                o = n.outerWidth,
                s = n.outerHeight,
                l = e.padding,
                u = e.x || 0,
                c = e.y || 0,
                f = this._defaultStyle,
                v = e.align || f.align,
                h = e.verticalAlign || f.verticalAlign,
                d = In(u, o, v),
                m = Oi(c, s, h),
                p = d,
                g = m;
            l && (p += l[3], g += l[0]);
            var _ = p + a;
            ol(e) && this._renderBackground(e, e, d, m, o, s);
            for (var y = !!e.backgroundColor, x = 0; x < n.lines.length; x++) {
                for (var S = n.lines[x], w = S.tokens, T = w.length, C = S.lineHeight, M = S.width, I = 0, A = p, L = _, P = T - 1, k = void 0; I < T && (k = w[I], !k.align || k.align === "left");) this._placeToken(k, e, C, g, A, "left", y), M -= k.width, A += k.width, I++;
                for (; P >= 0 && (k = w[P], k.align === "right");) this._placeToken(k, e, C, g, L, "right", y), M -= k.width, L -= k.width, P--;
                for (A += (a - (A - p) - (_ - L) - M) / 2; I <= P;) k = w[I], this._placeToken(k, e, C, g, A + k.width / 2, "center", y), A += k.width, I++;
                g += C
            }
        }, t.prototype._placeToken = function (e, i, n, a, o, s, l) {
            var u = i.rich[e.styleName] || {};
            u.text = e.text;
            var c = e.verticalAlign,
                f = a + n / 2;
            c === "top" ? f = a + e.height / 2 : c === "bottom" && (f = a + n - e.height / 2);
            var v = !e.isLineHolder && ol(u);
            v && this._renderBackground(u, i, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, f - e.height / 2, e.width, e.height);
            var h = !!u.backgroundColor,
                d = e.textPadding;
            d && (o = Qf(o, s, d), f -= e.height / 2 - d[0] - e.innerHeight / 2);
            var m = this._getOrCreateChild(du),
                p = m.createStyle();
            m.useStyle(p);
            var g = this._defaultStyle,
                _ = !1,
                y = 0,
                x = jf("fill" in u ? u.fill : "fill" in i ? i.fill : (_ = !0, g.fill)),
                S = Kf("stroke" in u ? u.stroke : "stroke" in i ? i.stroke : !h && !l && (!g.autoStroke || _) ? (y = Yf, g.stroke) : null),
                w = u.textShadowBlur > 0 || i.textShadowBlur > 0;
            p.text = e.text, p.x = o, p.y = f, w && (p.shadowBlur = u.textShadowBlur || i.textShadowBlur || 0, p.shadowColor = u.textShadowColor || i.textShadowColor || "transparent", p.shadowOffsetX = u.textShadowOffsetX || i.textShadowOffsetX || 0, p.shadowOffsetY = u.textShadowOffsetY || i.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = e.font || ci, p.opacity = Rn(u.opacity, i.opacity, 1), Zf(p, u), S && (p.lineWidth = Rn(u.lineWidth, i.lineWidth, y), p.lineDash = rt(u.lineDash, i.lineDash), p.lineDashOffset = i.lineDashOffset || 0, p.stroke = S), x && (p.fill = x);
            var T = e.contentWidth,
                C = e.contentHeight;
            m.setBoundingRect(new ct(In(p.x, T, p.textAlign), Oi(p.y, C, p.textBaseline), T, C))
        }, t.prototype._renderBackground = function (e, i, n, a, o, s) {
            var l = e.backgroundColor,
                u = e.borderWidth,
                c = e.borderColor,
                f = l && l.image,
                v = l && !f,
                h = e.borderRadius,
                d = this,
                m, p;
            if (v || e.lineHeight || u && c) {
                m = this._getOrCreateChild(ae), m.useStyle(m.createStyle()), m.style.fill = null;
                var g = m.shape;
                g.x = n, g.y = a, g.width = o, g.height = s, g.r = h, m.dirtyShape()
            }
            if (v) {
                var _ = m.style;
                _.fill = l || null, _.fillOpacity = rt(e.fillOpacity, 1)
            } else if (f) {
                p = this._getOrCreateChild(gi), p.onload = function () {
                    d.dirtyStyle()
                };
                var y = p.style;
                y.image = l.image, y.x = n, y.y = a, y.width = o, y.height = s
            }
            if (u && c) {
                var _ = m.style;
                _.lineWidth = u, _.stroke = c, _.strokeOpacity = rt(e.strokeOpacity, 1), _.lineDash = e.borderDash, _.lineDashOffset = e.borderDashOffset || 0, m.strokeContainThreshold = 0, m.hasFill() && m.hasStroke() && (_.strokeFirst = !0, _.lineWidth *= 2)
            }
            var x = (m || p).style;
            x.shadowBlur = e.shadowBlur || 0, x.shadowColor = e.shadowColor || "transparent", x.shadowOffsetX = e.shadowOffsetX || 0, x.shadowOffsetY = e.shadowOffsetY || 0, x.opacity = Rn(e.opacity, i.opacity, 1)
        }, t.makeFont = function (e) {
            var i = "";
            return gT(e) && (i = [e.fontStyle, e.fontWeight, pT(e.fontSize), e.fontFamily || "sans-serif"].join(" ")), i && Ve(i) || e.textFont || e.font
        }, t
    }(_a),
    vT = {
        left: !0,
        right: 1,
        center: 1
    },
    dT = {
        top: 1,
        bottom: 1,
        middle: 1
    },
    Xf = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];

function pT(r) {
    return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? qu + "px" : r + "px"
}

function Zf(r, t) {
    for (var e = 0; e < Xf.length; e++) {
        var i = Xf[e],
            n = t[i];
        n != null && (r[i] = n)
    }
}

function gT(r) {
    return r.fontSize != null || r.fontFamily || r.fontWeight
}

function mT(r) {
    return qf(r), D(r.rich, qf), r
}

function qf(r) {
    if (r) {
        r.font = Fp.makeFont(r);
        var t = r.align;
        t === "middle" && (t = "center"), r.align = t == null || vT[t] ? t : "left";
        var e = r.verticalAlign;
        e === "center" && (e = "middle"), r.verticalAlign = e == null || dT[e] ? e : "top";
        var i = r.padding;
        i && (r.padding = Wd(r.padding))
    }
}

function Kf(r, t) {
    return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r
}

function jf(r) {
    return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r
}

function Qf(r, t, e) {
    return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3]
}

function Jf(r) {
    var t = r.text;
    return t != null && (t += ""), t
}

function ol(r) {
    return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor)
}
const ve = Fp;
var vt = Lt(),
    _T = function (r, t, e, i) {
        if (i) {
            var n = vt(i);
            n.dataIndex = e, n.dataType = t, n.seriesIndex = r, n.ssrType = "chart", i.type === "group" && i.traverse(function (a) {
                var o = vt(a);
                o.seriesIndex = r, o.dataIndex = e, o.dataType = t, o.ssrType = "chart"
            })
        }
    },
    th = 1,
    eh = {},
    $p = Lt(),
    vc = Lt(),
    dc = 0,
    as = 1,
    os = 2,
    Me = ["emphasis", "blur", "select"],
    Eo = ["normal", "emphasis", "blur", "select"],
    yT = 10,
    xT = 9,
    si = "highlight",
    mo = "downplay",
    $n = "select",
    _o = "unselect",
    zn = "toggleSelect";

function Mi(r) {
    return r != null && r !== "none"
}

function ss(r, t, e) {
    r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e
}

function zp(r) {
    ss(r, "emphasis", os)
}

function Hp(r) {
    r.hoverState === os && ss(r, "normal", dc)
}

function pc(r) {
    ss(r, "blur", as)
}

function Gp(r) {
    r.hoverState === as && ss(r, "normal", dc)
}

function wT(r) {
    r.selected = !0
}

function bT(r) {
    r.selected = !1
}

function rh(r, t, e) {
    t(r, e)
}

function sr(r, t, e) {
    rh(r, t, e), r.isGroup && r.traverse(function (i) {
        rh(i, t, e)
    })
}

function ih(r, t) {
    switch (t) {
        case "emphasis":
            r.hoverState = os;
            break;
        case "normal":
            r.hoverState = dc;
            break;
        case "blur":
            r.hoverState = as;
            break;
        case "select":
            r.selected = !0
    }
}

function ST(r, t, e, i) {
    for (var n = r.style, a = {}, o = 0; o < t.length; o++) {
        var s = t[o],
            l = n[s];
        a[s] = l ?? (i && i[s])
    }
    for (var o = 0; o < r.animators.length; o++) {
        var u = r.animators[o];
        u.__fromStateTransition && u.__fromStateTransition.indexOf(e) < 0 && u.targetName === "style" && u.saveTo(a, t)
    }
    return a
}

function CT(r, t, e, i) {
    var n = e && dt(e, "select") >= 0,
        a = !1;
    if (r instanceof gt) {
        var o = $p(r),
            s = n && o.selectFill || o.normalFill,
            l = n && o.selectStroke || o.normalStroke;
        if (Mi(s) || Mi(l)) {
            i = i || {};
            var u = i.style || {};
            u.fill === "inherit" ? (a = !0, i = O({}, i), u = O({}, u), u.fill = s) : !Mi(u.fill) && Mi(s) ? (a = !0, i = O({}, i), u = O({}, u), u.fill = bf(s)) : !Mi(u.stroke) && Mi(l) && (a || (i = O({}, i), u = O({}, u)), u.stroke = bf(l)), i.style = u
        }
    }
    if (i && i.z2 == null) {
        a || (i = O({}, i));
        var c = r.z2EmphasisLift;
        i.z2 = r.z2 + (c ?? yT)
    }
    return i
}

function TT(r, t, e) {
    if (e && e.z2 == null) {
        e = O({}, e);
        var i = r.z2SelectLift;
        e.z2 = r.z2 + (i ?? xT)
    }
    return e
}

function MT(r, t, e) {
    var i = dt(r.currentStates, t) >= 0,
        n = r.style.opacity,
        a = i ? null : ST(r, ["opacity"], t, {
            opacity: 1
        });
    e = e || {};
    var o = e.style || {};
    return o.opacity == null && (e = O({}, e), o = O({
        opacity: i ? n : a.opacity * .1
    }, o), e.style = o), e
}

function sl(r, t) {
    var e = this.states[r];
    if (this.style) {
        if (r === "emphasis") return CT(this, r, t, e);
        if (r === "blur") return MT(this, r, e);
        if (r === "select") return TT(this, r, e)
    }
    return e
}

function DT(r) {
    r.stateProxy = sl;
    var t = r.getTextContent(),
        e = r.getTextGuideLine();
    t && (t.stateProxy = sl), e && (e.stateProxy = sl)
}

function nh(r, t) {
    !Yp(r, t) && !r.__highByOuter && sr(r, zp)
}

function ah(r, t) {
    !Yp(r, t) && !r.__highByOuter && sr(r, Hp)
}

function Ro(r, t) {
    r.__highByOuter |= 1 << (t || 0), sr(r, zp)
}

function Oo(r, t) {
    !(r.__highByOuter &= ~(1 << (t || 0))) && sr(r, Hp)
}

function AT(r) {
    sr(r, pc)
}

function Vp(r) {
    sr(r, Gp)
}

function Wp(r) {
    sr(r, wT)
}

function Up(r) {
    sr(r, bT)
}

function Yp(r, t) {
    return r.__highDownSilentOnTouch && t.zrByTouch
}

function Xp(r) {
    var t = r.getModel(),
        e = [],
        i = [];
    t.eachComponent(function (n, a) {
        var o = vc(a),
            s = n === "series",
            l = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
        !s && i.push(l), o.isBlured && (l.group.traverse(function (u) {
            Gp(u)
        }), s && e.push(a)), o.isBlured = !1
    }), D(i, function (n) {
        n && n.toggleBlurSeries && n.toggleBlurSeries(e, !1, t)
    })
}

function pu(r, t, e, i) {
    var n = i.getModel();
    e = e || "coordinateSystem";

    function a(u, c) {
        for (var f = 0; f < c.length; f++) {
            var v = u.getItemGraphicEl(c[f]);
            v && Vp(v)
        }
    }
    if (r != null && !(!t || t === "none")) {
        var o = n.getSeriesByIndex(r),
            s = o.coordinateSystem;
        s && s.master && (s = s.master);
        var l = [];
        n.eachSeries(function (u) {
            var c = o === u,
                f = u.coordinateSystem;
            f && f.master && (f = f.master);
            var v = f && s ? f === s : c;
            if (!(e === "series" && !c || e === "coordinateSystem" && !v || t === "series" && c)) {
                var h = i.getViewOfSeriesModel(u);
                if (h.group.traverse(function (p) {
                        p.__highByOuter && c && t === "self" || pc(p)
                    }), oe(t)) a(u.getData(), t);
                else if (X(t))
                    for (var d = wt(t), m = 0; m < d.length; m++) a(u.getData(d[m]), t[d[m]]);
                l.push(u), vc(u).isBlured = !0
            }
        }), n.eachComponent(function (u, c) {
            if (u !== "series") {
                var f = i.getViewOfComponentModel(c);
                f && f.toggleBlurSeries && f.toggleBlurSeries(l, !0, n)
            }
        })
    }
}

function gu(r, t, e) {
    if (!(r == null || t == null)) {
        var i = e.getModel().getComponent(r, t);
        if (i) {
            vc(i).isBlured = !0;
            var n = e.getViewOfComponentModel(i);
            !n || !n.focusBlurEnabled || n.group.traverse(function (a) {
                pc(a)
            })
        }
    }
}

function IT(r, t, e) {
    var i = r.seriesIndex,
        n = r.getData(t.dataType);
    if (n) {
        var a = fi(n, t);
        a = (H(a) ? a[0] : a) || 0;
        var o = n.getItemGraphicEl(a);
        if (!o)
            for (var s = n.count(), l = 0; !o && l < s;) o = n.getItemGraphicEl(l++);
        if (o) {
            var u = vt(o);
            pu(i, u.focus, u.blurScope, e)
        } else {
            var c = r.get(["emphasis", "focus"]),
                f = r.get(["emphasis", "blurScope"]);
            c != null && pu(i, c, f, e)
        }
    }
}

function gc(r, t, e, i) {
    var n = {
        focusSelf: !1,
        dispatchers: null
    };
    if (r == null || r === "series" || t == null || e == null) return n;
    var a = i.getModel().getComponent(r, t);
    if (!a) return n;
    var o = i.getViewOfComponentModel(a);
    if (!o || !o.findHighDownDispatchers) return n;
    for (var s = o.findHighDownDispatchers(e), l, u = 0; u < s.length; u++)
        if (vt(s[u]).focus === "self") {
            l = !0;
            break
        } return {
        focusSelf: l,
        dispatchers: s
    }
}

function LT(r, t, e) {
    var i = vt(r),
        n = gc(i.componentMainType, i.componentIndex, i.componentHighDownName, e),
        a = n.dispatchers,
        o = n.focusSelf;
    a ? (o && gu(i.componentMainType, i.componentIndex, e), D(a, function (s) {
        return nh(s, t)
    })) : (pu(i.seriesIndex, i.focus, i.blurScope, e), i.focus === "self" && gu(i.componentMainType, i.componentIndex, e), nh(r, t))
}

function PT(r, t, e) {
    Xp(e);
    var i = vt(r),
        n = gc(i.componentMainType, i.componentIndex, i.componentHighDownName, e).dispatchers;
    n ? D(n, function (a) {
        return ah(a, t)
    }) : ah(r, t)
}

function kT(r, t, e) {
    if (yu(t)) {
        var i = t.dataType,
            n = r.getData(i),
            a = fi(n, t);
        H(a) || (a = [a]), r[t.type === zn ? "toggleSelect" : t.type === $n ? "select" : "unselect"](a, i)
    }
}

function oh(r) {
    var t = r.getAllData();
    D(t, function (e) {
        var i = e.data,
            n = e.type;
        i.eachItemGraphicEl(function (a, o) {
            r.isSelected(o, n) ? Wp(a) : Up(a)
        })
    })
}

function ET(r) {
    var t = [];
    return r.eachSeries(function (e) {
        var i = e.getAllData();
        D(i, function (n) {
            n.data;
            var a = n.type,
                o = e.getSelectedDataIndices();
            if (o.length > 0) {
                var s = {
                    dataIndex: o,
                    seriesIndex: e.seriesIndex
                };
                a != null && (s.dataType = a), t.push(s)
            }
        })
    }), t
}

function RT(r, t, e) {
    Zp(r, !0), sr(r, DT), BT(r, t, e)
}

function OT(r) {
    Zp(r, !1)
}

function Bo(r, t, e, i) {
    i ? OT(r) : RT(r, t, e)
}

function BT(r, t, e) {
    var i = vt(r);
    t != null ? (i.focus = t, i.blurScope = e) : i.focus && (i.focus = null)
}
var sh = ["emphasis", "blur", "select"],
    NT = {
        itemStyle: "getItemStyle",
        lineStyle: "getLineStyle",
        areaStyle: "getAreaStyle"
    };

function mu(r, t, e, i) {
    e = e || "itemStyle";
    for (var n = 0; n < sh.length; n++) {
        var a = sh[n],
            o = t.getModel([a, e]),
            s = r.ensureState(a);
        s.style = i ? i(o) : o[NT[e]]()
    }
}

function Zp(r, t) {
    var e = t === !1,
        i = r;
    r.highDownSilentOnTouch && (i.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !e)
}

function _u(r) {
    return !!(r && r.__highDownDispatcher)
}

function FT(r) {
    var t = eh[r];
    return t == null && th <= 32 && (t = eh[r] = th++), t
}

function yu(r) {
    var t = r.type;
    return t === $n || t === _o || t === zn
}

function lh(r) {
    var t = r.type;
    return t === si || t === mo
}

function $T(r) {
    var t = $p(r);
    t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
    var e = r.states.select || {};
    t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null
}
var Di = hi.CMD,
    zT = [
        [],
        [],
        []
    ],
    uh = Math.sqrt,
    HT = Math.atan2;

function GT(r, t) {
    if (t) {
        var e = r.data,
            i = r.len(),
            n, a, o, s, l, u, c = Di.M,
            f = Di.C,
            v = Di.L,
            h = Di.R,
            d = Di.A,
            m = Di.Q;
        for (o = 0, s = 0; o < i;) {
            switch (n = e[o++], s = o, a = 0, n) {
                case c:
                    a = 1;
                    break;
                case v:
                    a = 1;
                    break;
                case f:
                    a = 3;
                    break;
                case m:
                    a = 2;
                    break;
                case d:
                    var p = t[4],
                        g = t[5],
                        _ = uh(t[0] * t[0] + t[1] * t[1]),
                        y = uh(t[2] * t[2] + t[3] * t[3]),
                        x = HT(-t[1] / y, t[0] / _);
                    e[o] *= _, e[o++] += p, e[o] *= y, e[o++] += g, e[o++] *= _, e[o++] *= y, e[o++] += x, e[o++] += x, o += 2, s = o;
                    break;
                case h:
                    u[0] = e[o++], u[1] = e[o++], Te(u, u, t), e[s++] = u[0], e[s++] = u[1], u[0] += e[o++], u[1] += e[o++], Te(u, u, t), e[s++] = u[0], e[s++] = u[1]
            }
            for (l = 0; l < a; l++) {
                var S = zT[l];
                S[0] = e[o++], S[1] = e[o++], Te(S, S, t), e[s++] = S[0], e[s++] = S[1]
            }
        }
        r.increaseVersion()
    }
}
var ll = Math.sqrt,
    $a = Math.sin,
    za = Math.cos,
    pn = Math.PI;

function ch(r) {
    return Math.sqrt(r[0] * r[0] + r[1] * r[1])
}

function xu(r, t) {
    return (r[0] * t[0] + r[1] * t[1]) / (ch(r) * ch(t))
}

function fh(r, t) {
    return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(xu(r, t))
}

function hh(r, t, e, i, n, a, o, s, l, u, c) {
    var f = l * (pn / 180),
        v = za(f) * (r - e) / 2 + $a(f) * (t - i) / 2,
        h = -1 * $a(f) * (r - e) / 2 + za(f) * (t - i) / 2,
        d = v * v / (o * o) + h * h / (s * s);
    d > 1 && (o *= ll(d), s *= ll(d));
    var m = (n === a ? -1 : 1) * ll((o * o * (s * s) - o * o * (h * h) - s * s * (v * v)) / (o * o * (h * h) + s * s * (v * v))) || 0,
        p = m * o * h / s,
        g = m * -s * v / o,
        _ = (r + e) / 2 + za(f) * p - $a(f) * g,
        y = (t + i) / 2 + $a(f) * p + za(f) * g,
        x = fh([1, 0], [(v - p) / o, (h - g) / s]),
        S = [(v - p) / o, (h - g) / s],
        w = [(-1 * v - p) / o, (-1 * h - g) / s],
        T = fh(S, w);
    if (xu(S, w) <= -1 && (T = pn), xu(S, w) >= 1 && (T = 0), T < 0) {
        var C = Math.round(T / pn * 1e6) / 1e6;
        T = pn * 2 + C % 2 * pn
    }
    c.addData(u, _, y, o, s, x, T, f, a)
}
var VT = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig,
    WT = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;

function UT(r) {
    var t = new hi;
    if (!r) return t;
    var e = 0,
        i = 0,
        n = e,
        a = i,
        o, s = hi.CMD,
        l = r.match(VT);
    if (!l) return t;
    for (var u = 0; u < l.length; u++) {
        for (var c = l[u], f = c.charAt(0), v = void 0, h = c.match(WT) || [], d = h.length, m = 0; m < d; m++) h[m] = parseFloat(h[m]);
        for (var p = 0; p < d;) {
            var g = void 0,
                _ = void 0,
                y = void 0,
                x = void 0,
                S = void 0,
                w = void 0,
                T = void 0,
                C = e,
                M = i,
                I = void 0,
                A = void 0;
            switch (f) {
                case "l":
                    e += h[p++], i += h[p++], v = s.L, t.addData(v, e, i);
                    break;
                case "L":
                    e = h[p++], i = h[p++], v = s.L, t.addData(v, e, i);
                    break;
                case "m":
                    e += h[p++], i += h[p++], v = s.M, t.addData(v, e, i), n = e, a = i, f = "l";
                    break;
                case "M":
                    e = h[p++], i = h[p++], v = s.M, t.addData(v, e, i), n = e, a = i, f = "L";
                    break;
                case "h":
                    e += h[p++], v = s.L, t.addData(v, e, i);
                    break;
                case "H":
                    e = h[p++], v = s.L, t.addData(v, e, i);
                    break;
                case "v":
                    i += h[p++], v = s.L, t.addData(v, e, i);
                    break;
                case "V":
                    i = h[p++], v = s.L, t.addData(v, e, i);
                    break;
                case "C":
                    v = s.C, t.addData(v, h[p++], h[p++], h[p++], h[p++], h[p++], h[p++]), e = h[p - 2], i = h[p - 1];
                    break;
                case "c":
                    v = s.C, t.addData(v, h[p++] + e, h[p++] + i, h[p++] + e, h[p++] + i, h[p++] + e, h[p++] + i), e += h[p - 2], i += h[p - 1];
                    break;
                case "S":
                    g = e, _ = i, I = t.len(), A = t.data, o === s.C && (g += e - A[I - 4], _ += i - A[I - 3]), v = s.C, C = h[p++], M = h[p++], e = h[p++], i = h[p++], t.addData(v, g, _, C, M, e, i);
                    break;
                case "s":
                    g = e, _ = i, I = t.len(), A = t.data, o === s.C && (g += e - A[I - 4], _ += i - A[I - 3]), v = s.C, C = e + h[p++], M = i + h[p++], e += h[p++], i += h[p++], t.addData(v, g, _, C, M, e, i);
                    break;
                case "Q":
                    C = h[p++], M = h[p++], e = h[p++], i = h[p++], v = s.Q, t.addData(v, C, M, e, i);
                    break;
                case "q":
                    C = h[p++] + e, M = h[p++] + i, e += h[p++], i += h[p++], v = s.Q, t.addData(v, C, M, e, i);
                    break;
                case "T":
                    g = e, _ = i, I = t.len(), A = t.data, o === s.Q && (g += e - A[I - 4], _ += i - A[I - 3]), e = h[p++], i = h[p++], v = s.Q, t.addData(v, g, _, e, i);
                    break;
                case "t":
                    g = e, _ = i, I = t.len(), A = t.data, o === s.Q && (g += e - A[I - 4], _ += i - A[I - 3]), e += h[p++], i += h[p++], v = s.Q, t.addData(v, g, _, e, i);
                    break;
                case "A":
                    y = h[p++], x = h[p++], S = h[p++], w = h[p++], T = h[p++], C = e, M = i, e = h[p++], i = h[p++], v = s.A, hh(C, M, e, i, w, T, y, x, S, v, t);
                    break;
                case "a":
                    y = h[p++], x = h[p++], S = h[p++], w = h[p++], T = h[p++], C = e, M = i, e += h[p++], i += h[p++], v = s.A, hh(C, M, e, i, w, T, y, x, S, v, t);
                    break
            }
        }(f === "z" || f === "Z") && (v = s.Z, t.addData(v), e = n, i = a), o = v
    }
    return t.toStatic(), t
}
var qp = function (r) {
    z(t, r);

    function t() {
        return r !== null && r.apply(this, arguments) || this
    }
    return t.prototype.applyTransform = function (e) {}, t
}(gt);

function Kp(r) {
    return r.setData != null
}

function jp(r, t) {
    var e = UT(r),
        i = O({}, t);
    return i.buildPath = function (n) {
        if (Kp(n)) {
            n.setData(e.data);
            var a = n.getContext();
            a && n.rebuildPath(a, 1)
        } else {
            var a = n;
            e.rebuildPath(a, 1)
        }
    }, i.applyTransform = function (n) {
        GT(e, n), this.dirtyShape()
    }, i
}

function YT(r, t) {
    return new qp(jp(r, t))
}

function XT(r, t) {
    var e = jp(r, t),
        i = function (n) {
            z(a, n);

            function a(o) {
                var s = n.call(this, o) || this;
                return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s
            }
            return a
        }(qp);
    return i
}

function ZT(r, t) {
    for (var e = [], i = r.length, n = 0; n < i; n++) {
        var a = r[n];
        e.push(a.getUpdatedPathProxy(!0))
    }
    var o = new gt(t);
    return o.createPathProxy(), o.buildPath = function (s) {
        if (Kp(s)) {
            s.appendPath(e);
            var l = s.getContext();
            l && s.rebuildPath(l, 1)
        }
    }, o
}
var qT = function () {
        function r() {
            this.cx = 0, this.cy = 0, this.r = 0
        }
        return r
    }(),
    Qp = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new qT
        }, t.prototype.buildPath = function (e, i) {
            e.moveTo(i.cx + i.r, i.cy), e.arc(i.cx, i.cy, i.r, 0, Math.PI * 2)
        }, t
    }(gt);
Qp.prototype.type = "circle";
const mc = Qp;
var KT = function () {
        function r() {
            this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0
        }
        return r
    }(),
    Jp = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new KT
        }, t.prototype.buildPath = function (e, i) {
            var n = .5522848,
                a = i.cx,
                o = i.cy,
                s = i.rx,
                l = i.ry,
                u = s * n,
                c = l * n;
            e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - c, a - u, o - l, a, o - l), e.bezierCurveTo(a + u, o - l, a + s, o - c, a + s, o), e.bezierCurveTo(a + s, o + c, a + u, o + l, a, o + l), e.bezierCurveTo(a - u, o + l, a - s, o + c, a - s, o), e.closePath()
        }, t
    }(gt);
Jp.prototype.type = "ellipse";
const tg = Jp;
var eg = Math.PI,
    ul = eg * 2,
    Zr = Math.sin,
    Ai = Math.cos,
    jT = Math.acos,
    $t = Math.atan2,
    vh = Math.abs,
    Hn = Math.sqrt,
    Ln = Math.max,
    ze = Math.min,
    Le = 1e-4;

function QT(r, t, e, i, n, a, o, s) {
    var l = e - r,
        u = i - t,
        c = o - n,
        f = s - a,
        v = f * l - c * u;
    if (!(v * v < Le)) return v = (c * (t - a) - f * (r - n)) / v, [r + v * l, t + v * u]
}

function Ha(r, t, e, i, n, a, o) {
    var s = r - e,
        l = t - i,
        u = (o ? a : -a) / Hn(s * s + l * l),
        c = u * l,
        f = -u * s,
        v = r + c,
        h = t + f,
        d = e + c,
        m = i + f,
        p = (v + d) / 2,
        g = (h + m) / 2,
        _ = d - v,
        y = m - h,
        x = _ * _ + y * y,
        S = n - a,
        w = v * m - d * h,
        T = (y < 0 ? -1 : 1) * Hn(Ln(0, S * S * x - w * w)),
        C = (w * y - _ * T) / x,
        M = (-w * _ - y * T) / x,
        I = (w * y + _ * T) / x,
        A = (-w * _ + y * T) / x,
        L = C - p,
        P = M - g,
        k = I - p,
        R = A - g;
    return L * L + P * P > k * k + R * R && (C = I, M = A), {
        cx: C,
        cy: M,
        x0: -c,
        y0: -f,
        x1: C * (n / S - 1),
        y1: M * (n / S - 1)
    }
}

function JT(r) {
    var t;
    if (H(r)) {
        var e = r.length;
        if (!e) return r;
        e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r
    } else t = [r, r, r, r];
    return t
}

function t3(r, t) {
    var e, i = Ln(t.r, 0),
        n = Ln(t.r0 || 0, 0),
        a = i > 0,
        o = n > 0;
    if (!(!a && !o)) {
        if (a || (i = n, n = 0), n > i) {
            var s = i;
            i = n, n = s
        }
        var l = t.startAngle,
            u = t.endAngle;
        if (!(isNaN(l) || isNaN(u))) {
            var c = t.cx,
                f = t.cy,
                v = !!t.clockwise,
                h = vh(u - l),
                d = h > ul && h % ul;
            if (d > Le && (h = d), !(i > Le)) r.moveTo(c, f);
            else if (h > ul - Le) r.moveTo(c + i * Ai(l), f + i * Zr(l)), r.arc(c, f, i, l, u, !v), n > Le && (r.moveTo(c + n * Ai(u), f + n * Zr(u)), r.arc(c, f, n, u, l, v));
            else {
                var m = void 0,
                    p = void 0,
                    g = void 0,
                    _ = void 0,
                    y = void 0,
                    x = void 0,
                    S = void 0,
                    w = void 0,
                    T = void 0,
                    C = void 0,
                    M = void 0,
                    I = void 0,
                    A = void 0,
                    L = void 0,
                    P = void 0,
                    k = void 0,
                    R = i * Ai(l),
                    E = i * Zr(l),
                    W = n * Ai(u),
                    F = n * Zr(u),
                    $ = h > Le;
                if ($) {
                    var G = t.cornerRadius;
                    G && (e = JT(G), m = e[0], p = e[1], g = e[2], _ = e[3]);
                    var tt = vh(i - n) / 2;
                    if (y = ze(tt, g), x = ze(tt, _), S = ze(tt, m), w = ze(tt, p), M = T = Ln(y, x), I = C = Ln(S, w), (T > Le || C > Le) && (A = i * Ai(u), L = i * Zr(u), P = n * Ai(l), k = n * Zr(l), h < eg)) {
                        var J = QT(R, E, P, k, A, L, W, F);
                        if (J) {
                            var at = R - J[0],
                                lt = E - J[1],
                                Et = A - J[0],
                                mt = L - J[1],
                                Kt = 1 / Zr(jT((at * Et + lt * mt) / (Hn(at * at + lt * lt) * Hn(Et * Et + mt * mt))) / 2),
                                ce = Hn(J[0] * J[0] + J[1] * J[1]);
                            M = ze(T, (i - ce) / (Kt + 1)), I = ze(C, (n - ce) / (Kt - 1))
                        }
                    }
                }
                if (!$) r.moveTo(c + R, f + E);
                else if (M > Le) {
                    var Ot = ze(g, M),
                        Dt = ze(_, M),
                        q = Ha(P, k, R, E, i, Ot, v),
                        et = Ha(A, L, W, F, i, Dt, v);
                    r.moveTo(c + q.cx + q.x0, f + q.cy + q.y0), M < T && Ot === Dt ? r.arc(c + q.cx, f + q.cy, M, $t(q.y0, q.x0), $t(et.y0, et.x0), !v) : (Ot > 0 && r.arc(c + q.cx, f + q.cy, Ot, $t(q.y0, q.x0), $t(q.y1, q.x1), !v), r.arc(c, f, i, $t(q.cy + q.y1, q.cx + q.x1), $t(et.cy + et.y1, et.cx + et.x1), !v), Dt > 0 && r.arc(c + et.cx, f + et.cy, Dt, $t(et.y1, et.x1), $t(et.y0, et.x0), !v))
                } else r.moveTo(c + R, f + E), r.arc(c, f, i, l, u, !v);
                if (!(n > Le) || !$) r.lineTo(c + W, f + F);
                else if (I > Le) {
                    var Ot = ze(m, I),
                        Dt = ze(p, I),
                        q = Ha(W, F, A, L, n, -Dt, v),
                        et = Ha(R, E, P, k, n, -Ot, v);
                    r.lineTo(c + q.cx + q.x0, f + q.cy + q.y0), I < C && Ot === Dt ? r.arc(c + q.cx, f + q.cy, I, $t(q.y0, q.x0), $t(et.y0, et.x0), !v) : (Dt > 0 && r.arc(c + q.cx, f + q.cy, Dt, $t(q.y0, q.x0), $t(q.y1, q.x1), !v), r.arc(c, f, n, $t(q.cy + q.y1, q.cx + q.x1), $t(et.cy + et.y1, et.cx + et.x1), v), Ot > 0 && r.arc(c + et.cx, f + et.cy, Ot, $t(et.y1, et.x1), $t(et.y0, et.x0), !v))
                } else r.lineTo(c + W, f + F), r.arc(c, f, n, u, l, v)
            }
            r.closePath()
        }
    }
}
var e3 = function () {
        function r() {
            this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0
        }
        return r
    }(),
    rg = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new e3
        }, t.prototype.buildPath = function (e, i) {
            t3(e, i)
        }, t.prototype.isZeroArea = function () {
            return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0
        }, t
    }(gt);
rg.prototype.type = "sector";
const ya = rg;
var r3 = function () {
        function r() {
            this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0
        }
        return r
    }(),
    ig = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new r3
        }, t.prototype.buildPath = function (e, i) {
            var n = i.cx,
                a = i.cy,
                o = Math.PI * 2;
            e.moveTo(n + i.r, a), e.arc(n, a, i.r, 0, o, !1), e.moveTo(n + i.r0, a), e.arc(n, a, i.r0, 0, o, !0)
        }, t
    }(gt);
ig.prototype.type = "ring";
const ng = ig;

function i3(r, t, e, i) {
    var n = [],
        a = [],
        o = [],
        s = [],
        l, u, c, f;
    if (i) {
        c = [1 / 0, 1 / 0], f = [-1 / 0, -1 / 0];
        for (var v = 0, h = r.length; v < h; v++) Bi(c, c, r[v]), Ni(f, f, r[v]);
        Bi(c, c, i[0]), Ni(f, f, i[1])
    }
    for (var v = 0, h = r.length; v < h; v++) {
        var d = r[v];
        if (e) l = r[v ? v - 1 : h - 1], u = r[(v + 1) % h];
        else if (v === 0 || v === h - 1) {
            n.push(kb(r[v]));
            continue
        } else l = r[v - 1], u = r[v + 1];
        Eb(a, u, l), Ms(a, a, t);
        var m = Yl(d, l),
            p = Yl(d, u),
            g = m + p;
        g !== 0 && (m /= g, p /= g), Ms(o, a, -m), Ms(s, a, p);
        var _ = af([], d, o),
            y = af([], d, s);
        i && (Ni(_, _, c), Bi(_, _, f), Ni(y, y, c), Bi(y, y, f)), n.push(_), n.push(y)
    }
    return e && n.push(n.shift()), n
}

function ag(r, t, e) {
    var i = t.smooth,
        n = t.points;
    if (n && n.length >= 2) {
        if (i) {
            var a = i3(n, i, e, t.smoothConstraint);
            r.moveTo(n[0][0], n[0][1]);
            for (var o = n.length, s = 0; s < (e ? o : o - 1); s++) {
                var l = a[s * 2],
                    u = a[s * 2 + 1],
                    c = n[(s + 1) % o];
                r.bezierCurveTo(l[0], l[1], u[0], u[1], c[0], c[1])
            }
        } else {
            r.moveTo(n[0][0], n[0][1]);
            for (var s = 1, f = n.length; s < f; s++) r.lineTo(n[s][0], n[s][1])
        }
        e && r.closePath()
    }
}
var n3 = function () {
        function r() {
            this.points = null, this.smooth = 0, this.smoothConstraint = null
        }
        return r
    }(),
    og = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype.getDefaultShape = function () {
            return new n3
        }, t.prototype.buildPath = function (e, i) {
            ag(e, i, !0)
        }, t
    }(gt);
og.prototype.type = "polygon";
const sg = og;
var a3 = function () {
        function r() {
            this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null
        }
        return r
    }(),
    xa = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype.getDefaultStyle = function () {
            return {
                stroke: "#000",
                fill: null
            }
        }, t.prototype.getDefaultShape = function () {
            return new a3
        }, t.prototype.buildPath = function (e, i) {
            ag(e, i, !1)
        }, t
    }(gt);
xa.prototype.type = "polyline";
var o3 = {},
    s3 = function () {
        function r() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1
        }
        return r
    }(),
    lg = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype.getDefaultStyle = function () {
            return {
                stroke: "#000",
                fill: null
            }
        }, t.prototype.getDefaultShape = function () {
            return new s3
        }, t.prototype.buildPath = function (e, i) {
            var n, a, o, s;
            if (this.subPixelOptimize) {
                var l = Op(o3, i, this.style);
                n = l.x1, a = l.y1, o = l.x2, s = l.y2
            } else n = i.x1, a = i.y1, o = i.x2, s = i.y2;
            var u = i.percent;
            u !== 0 && (e.moveTo(n, a), u < 1 && (o = n * (1 - u) + o * u, s = a * (1 - u) + s * u), e.lineTo(o, s))
        }, t.prototype.pointAt = function (e) {
            var i = this.shape;
            return [i.x1 * (1 - e) + i.x2 * e, i.y1 * (1 - e) + i.y2 * e]
        }, t
    }(gt);
lg.prototype.type = "line";
const vi = lg;
var jt = [],
    l3 = function () {
        function r() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1
        }
        return r
    }();

function dh(r, t, e) {
    var i = r.cpx2,
        n = r.cpy2;
    return i != null || n != null ? [(e ? gf : Pt)(r.x1, r.cpx1, r.cpx2, r.x2, t), (e ? gf : Pt)(r.y1, r.cpy1, r.cpy2, r.y2, t)] : [(e ? mf : Ht)(r.x1, r.cpx1, r.x2, t), (e ? mf : Ht)(r.y1, r.cpy1, r.y2, t)]
}
var ug = function (r) {
    z(t, r);

    function t(e) {
        return r.call(this, e) || this
    }
    return t.prototype.getDefaultStyle = function () {
        return {
            stroke: "#000",
            fill: null
        }
    }, t.prototype.getDefaultShape = function () {
        return new l3
    }, t.prototype.buildPath = function (e, i) {
        var n = i.x1,
            a = i.y1,
            o = i.x2,
            s = i.y2,
            l = i.cpx1,
            u = i.cpy1,
            c = i.cpx2,
            f = i.cpy2,
            v = i.percent;
        v !== 0 && (e.moveTo(n, a), c == null || f == null ? (v < 1 && (Ao(n, l, o, v, jt), l = jt[1], o = jt[2], Ao(a, u, s, v, jt), u = jt[1], s = jt[2]), e.quadraticCurveTo(l, u, o, s)) : (v < 1 && (Do(n, l, c, o, v, jt), l = jt[1], c = jt[2], o = jt[3], Do(a, u, f, s, v, jt), u = jt[1], f = jt[2], s = jt[3]), e.bezierCurveTo(l, u, c, f, o, s)))
    }, t.prototype.pointAt = function (e) {
        return dh(this.shape, e, !1)
    }, t.prototype.tangentAt = function (e) {
        var i = dh(this.shape, e, !0);
        return Bb(i, i)
    }, t
}(gt);
ug.prototype.type = "bezier-curve";
const cg = ug;
var u3 = function () {
        function r() {
            this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0
        }
        return r
    }(),
    fg = function (r) {
        z(t, r);

        function t(e) {
            return r.call(this, e) || this
        }
        return t.prototype.getDefaultStyle = function () {
            return {
                stroke: "#000",
                fill: null
            }
        }, t.prototype.getDefaultShape = function () {
            return new u3
        }, t.prototype.buildPath = function (e, i) {
            var n = i.cx,
                a = i.cy,
                o = Math.max(i.r, 0),
                s = i.startAngle,
                l = i.endAngle,
                u = i.clockwise,
                c = Math.cos(s),
                f = Math.sin(s);
            e.moveTo(c * o + n, f * o + a), e.arc(n, a, o, s, l, !u)
        }, t
    }(gt);
fg.prototype.type = "arc";
const _c = fg;
var c3 = function (r) {
    z(t, r);

    function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = "compound", e
    }
    return t.prototype._updatePathDirty = function () {
        for (var e = this.shape.paths, i = this.shapeChanged(), n = 0; n < e.length; n++) i = i || e[n].shapeChanged();
        i && this.dirtyShape()
    }, t.prototype.beforeBrush = function () {
        this._updatePathDirty();
        for (var e = this.shape.paths || [], i = this.getGlobalScale(), n = 0; n < e.length; n++) e[n].path || e[n].createPathProxy(), e[n].path.setScale(i[0], i[1], e[n].segmentIgnoreThreshold)
    }, t.prototype.buildPath = function (e, i) {
        for (var n = i.paths || [], a = 0; a < n.length; a++) n[a].buildPath(e, n[a].shape, !0)
    }, t.prototype.afterBrush = function () {
        for (var e = this.shape.paths || [], i = 0; i < e.length; i++) e[i].pathUpdated()
    }, t.prototype.getBoundingRect = function () {
        return this._updatePathDirty.call(this), gt.prototype.getBoundingRect.call(this)
    }, t
}(gt);
const f3 = c3;
var h3 = function () {
    function r(t) {
        this.colorStops = t || []
    }
    return r.prototype.addColorStop = function (t, e) {
        this.colorStops.push({
            offset: t,
            color: e
        })
    }, r
}();
const hg = h3;
var vg = function (r) {
        z(t, r);

        function t(e, i, n, a, o, s) {
            var l = r.call(this, o) || this;
            return l.x = e ?? 0, l.y = i ?? 0, l.x2 = n ?? 1, l.y2 = a ?? 0, l.type = "linear", l.global = s || !1, l
        }
        return t
    }(hg),
    v3 = function (r) {
        z(t, r);

        function t(e, i, n, a, o) {
            var s = r.call(this, a) || this;
            return s.x = e ??.5, s.y = i ??.5, s.r = n ??.5, s.type = "radial", s.global = o || !1, s
        }
        return t
    }(hg);
const d3 = v3;
var qr = [0, 0],
    Kr = [0, 0],
    Ga = new K,
    Va = new K,
    p3 = function () {
        function r(t, e) {
            this._corners = [], this._axes = [], this._origin = [0, 0];
            for (var i = 0; i < 4; i++) this._corners[i] = new K;
            for (var i = 0; i < 2; i++) this._axes[i] = new K;
            t && this.fromBoundingRect(t, e)
        }
        return r.prototype.fromBoundingRect = function (t, e) {
            var i = this._corners,
                n = this._axes,
                a = t.x,
                o = t.y,
                s = a + t.width,
                l = o + t.height;
            if (i[0].set(a, o), i[1].set(s, o), i[2].set(s, l), i[3].set(a, l), e)
                for (var u = 0; u < 4; u++) i[u].transform(e);
            K.sub(n[0], i[1], i[0]), K.sub(n[1], i[3], i[0]), n[0].normalize(), n[1].normalize();
            for (var u = 0; u < 2; u++) this._origin[u] = n[u].dot(i[0])
        }, r.prototype.intersect = function (t, e) {
            var i = !0,
                n = !e;
            return Ga.set(1 / 0, 1 / 0), Va.set(0, 0), !this._intersectCheckOneSide(this, t, Ga, Va, n, 1) && (i = !1, n) || !this._intersectCheckOneSide(t, this, Ga, Va, n, -1) && (i = !1, n) || n || K.copy(e, i ? Ga : Va), i
        }, r.prototype._intersectCheckOneSide = function (t, e, i, n, a, o) {
            for (var s = !0, l = 0; l < 2; l++) {
                var u = this._axes[l];
                if (this._getProjMinMaxOnAxis(l, t._corners, qr), this._getProjMinMaxOnAxis(l, e._corners, Kr), qr[1] < Kr[0] || qr[0] > Kr[1]) {
                    if (s = !1, a) return s;
                    var c = Math.abs(Kr[0] - qr[1]),
                        f = Math.abs(qr[0] - Kr[1]);
                    Math.min(c, f) > n.len() && (c < f ? K.scale(n, u, -c * o) : K.scale(n, u, f * o))
                } else if (i) {
                    var c = Math.abs(Kr[0] - qr[1]),
                        f = Math.abs(qr[0] - Kr[1]);
                    Math.min(c, f) < i.len() && (c < f ? K.scale(i, u, c * o) : K.scale(i, u, -f * o))
                }
            }
            return s
        }, r.prototype._getProjMinMaxOnAxis = function (t, e, i) {
            for (var n = this._axes[t], a = this._origin, o = e[0].dot(n) + a[t], s = o, l = o, u = 1; u < e.length; u++) {
                var c = e[u].dot(n) + a[t];
                s = Math.min(c, s), l = Math.max(c, l)
            }
            i[0] = s, i[1] = l
        }, r
    }();
const No = p3;
var g3 = [],
    m3 = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.notClear = !0, e.incremental = !0, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e
        }
        return t.prototype.traverse = function (e, i) {
            e.call(i, this)
        }, t.prototype.useStyle = function () {
            this.style = {}
        }, t.prototype.getCursor = function () {
            return this._cursor
        }, t.prototype.innerAfterBrush = function () {
            this._cursor = this._displayables.length
        }, t.prototype.clearDisplaybles = function () {
            this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1
        }, t.prototype.clearTemporalDisplayables = function () {
            this._temporaryDisplayables = []
        }, t.prototype.addDisplayable = function (e, i) {
            i ? this._temporaryDisplayables.push(e) : this._displayables.push(e), this.markRedraw()
        }, t.prototype.addDisplayables = function (e, i) {
            i = i || !1;
            for (var n = 0; n < e.length; n++) this.addDisplayable(e[n], i)
        }, t.prototype.getDisplayables = function () {
            return this._displayables
        }, t.prototype.getTemporalDisplayables = function () {
            return this._temporaryDisplayables
        }, t.prototype.eachPendingDisplayable = function (e) {
            for (var i = this._cursor; i < this._displayables.length; i++) e && e(this._displayables[i]);
            for (var i = 0; i < this._temporaryDisplayables.length; i++) e && e(this._temporaryDisplayables[i])
        }, t.prototype.update = function () {
            this.updateTransform();
            for (var e = this._cursor; e < this._displayables.length; e++) {
                var i = this._displayables[e];
                i.parent = this, i.update(), i.parent = null
            }
            for (var e = 0; e < this._temporaryDisplayables.length; e++) {
                var i = this._temporaryDisplayables[e];
                i.parent = this, i.update(), i.parent = null
            }
        }, t.prototype.getBoundingRect = function () {
            if (!this._rect) {
                for (var e = new ct(1 / 0, 1 / 0, -1 / 0, -1 / 0), i = 0; i < this._displayables.length; i++) {
                    var n = this._displayables[i],
                        a = n.getBoundingRect().clone();
                    n.needLocalTransform() && a.applyTransform(n.getLocalTransform(g3)), e.union(a)
                }
                this._rect = e
            }
            return this._rect
        }, t.prototype.contain = function (e, i) {
            var n = this.transformCoordToLocal(e, i),
                a = this.getBoundingRect();
            if (a.contain(n[0], n[1]))
                for (var o = 0; o < this._displayables.length; o++) {
                    var s = this._displayables[o];
                    if (s.contain(e, i)) return !0
                }
            return !1
        }, t
    }(_a);
const _3 = m3;
var y3 = Lt();

function x3(r, t, e, i, n) {
    var a;
    if (t && t.ecModel) {
        var o = t.ecModel.getUpdatePayload();
        a = o && o.animation
    }
    var s = t && t.isAnimationEnabled(),
        l = r === "update";
    if (s) {
        var u = void 0,
            c = void 0,
            f = void 0;
        i ? (u = rt(i.duration, 200), c = rt(i.easing, "cubicOut"), f = 0) : (u = t.getShallow(l ? "animationDurationUpdate" : "animationDuration"), c = t.getShallow(l ? "animationEasingUpdate" : "animationEasing"), f = t.getShallow(l ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (u = a.duration), a.easing != null && (c = a.easing), a.delay != null && (f = a.delay)), Q(f) && (f = f(e, n)), Q(u) && (u = u(e));
        var v = {
            duration: u || 0,
            delay: f,
            easing: c
        };
        return v
    } else return null
}

function yc(r, t, e, i, n, a, o) {
    var s = !1,
        l;
    Q(n) ? (o = a, a = n, n = null) : X(n) && (a = n.cb, o = n.during, s = n.isFrom, l = n.removeOpt, n = n.dataIndex);
    var u = r === "leave";
    u || t.stopAnimation("leave");
    var c = x3(r, i, n, u ? l || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(t, n) : null);
    if (c && c.duration > 0) {
        var f = c.duration,
            v = c.delay,
            h = c.easing,
            d = {
                duration: f,
                delay: v || 0,
                easing: h,
                done: a,
                force: !!a || !!o,
                setToFinal: !u,
                scope: r,
                during: o
            };
        s ? t.animateFrom(e, d) : t.animateTo(e, d)
    } else t.stopAnimation(), !s && t.attr(e), o && o(1), a && a()
}

function or(r, t, e, i, n, a) {
    yc("update", r, t, e, i, n, a)
}

function Dr(r, t, e, i, n, a) {
    yc("enter", r, t, e, i, n, a)
}

function Gn(r) {
    if (!r.__zr) return !0;
    for (var t = 0; t < r.animators.length; t++) {
        var e = r.animators[t];
        if (e.scope === "leave") return !0
    }
    return !1
}

function Fo(r, t, e, i, n, a) {
    Gn(r) || yc("leave", r, t, e, i, n, a)
}

function ph(r, t, e, i) {
    r.removeTextContent(), r.removeTextGuideLine(), Fo(r, {
        style: {
            opacity: 0
        }
    }, t, e, i)
}

function dg(r, t, e) {
    function i() {
        r.parent && r.parent.remove(r)
    }
    r.isGroup ? r.traverse(function (n) {
        n.isGroup || ph(n, t, e, i)
    }) : ph(r, t, e, i)
}

function pg(r) {
    y3(r).oldStyle = r.style
}
var $o = Math.max,
    zo = Math.min,
    wu = {};

function w3(r) {
    return gt.extend(r)
}
var b3 = XT;

function S3(r, t) {
    return b3(r, t)
}

function Re(r, t) {
    wu[r] = t
}

function C3(r) {
    if (wu.hasOwnProperty(r)) return wu[r]
}

function xc(r, t, e, i) {
    var n = YT(r, t);
    return e && (i === "center" && (e = mg(e, n.getBoundingRect())), _g(n, e)), n
}

function gg(r, t, e) {
    var i = new gi({
        style: {
            image: r,
            x: t.x,
            y: t.y,
            width: t.width,
            height: t.height
        },
        onload: function (n) {
            if (e === "center") {
                var a = {
                    width: n.width,
                    height: n.height
                };
                i.setStyle(mg(t, a))
            }
        }
    });
    return i
}

function mg(r, t) {
    var e = t.width / t.height,
        i = r.height * e,
        n;
    i <= r.width ? n = r.height : (i = r.width, n = i / e);
    var a = r.x + r.width / 2,
        o = r.y + r.height / 2;
    return {
        x: a - i / 2,
        y: o - n / 2,
        width: i,
        height: n
    }
}
var T3 = ZT;

function _g(r, t) {
    if (r.applyTransform) {
        var e = r.getBoundingRect(),
            i = e.calculateTransform(t);
        r.applyTransform(i)
    }
}

function ta(r, t) {
    return Op(r, r, {
        lineWidth: t
    }), r
}

function M3(r) {
    return Bp(r.shape, r.shape, r.style), r
}
var D3 = ii;

function A3(r, t) {
    for (var e = ec([]); r && r !== t;) Wi(e, r.getLocalTransform(), e), r = r.parent;
    return e
}

function wc(r, t, e) {
    return t && !oe(t) && (t = oc.getLocalTransform(t)), e && (t = ic([], t)), Te([], r, t)
}

function I3(r, t, e) {
    var i = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]),
        n = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]),
        a = [r === "left" ? -i : r === "right" ? i : 0, r === "top" ? -n : r === "bottom" ? n : 0];
    return a = wc(a, t, e), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
}

function gh(r) {
    return !r.isGroup
}

function L3(r) {
    return r.shape != null
}

function yg(r, t, e) {
    if (!r || !t) return;

    function i(o) {
        var s = {};
        return o.traverse(function (l) {
            gh(l) && l.anid && (s[l.anid] = l)
        }), s
    }

    function n(o) {
        var s = {
            x: o.x,
            y: o.y,
            rotation: o.rotation
        };
        return L3(o) && (s.shape = O({}, o.shape)), s
    }
    var a = i(r);
    t.traverse(function (o) {
        if (gh(o) && o.anid) {
            var s = a[o.anid];
            if (s) {
                var l = n(o);
                o.attr(n(s)), or(o, l, e, vt(o).dataIndex)
            }
        }
    })
}

function P3(r, t) {
    return Z(r, function (e) {
        var i = e[0];
        i = $o(i, t.x), i = zo(i, t.x + t.width);
        var n = e[1];
        return n = $o(n, t.y), n = zo(n, t.y + t.height), [i, n]
    })
}

function k3(r, t) {
    var e = $o(r.x, t.x),
        i = zo(r.x + r.width, t.x + t.width),
        n = $o(r.y, t.y),
        a = zo(r.y + r.height, t.y + t.height);
    if (i >= e && a >= n) return {
        x: e,
        y: n,
        width: i - e,
        height: a - n
    }
}

function xg(r, t, e) {
    var i = O({
            rectHover: !0
        }, t),
        n = i.style = {
            strokeNoScale: !0
        };
    if (e = e || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, r) return r.indexOf("image://") === 0 ? (n.image = r.slice(8), ht(n, e), new gi(i)) : xc(r.replace("path://", ""), i, e, "center")
}

function E3(r, t, e, i, n) {
    for (var a = 0, o = n[n.length - 1]; a < n.length; a++) {
        var s = n[a];
        if (wg(r, t, e, i, s[0], s[1], o[0], o[1])) return !0;
        o = s
    }
}

function wg(r, t, e, i, n, a, o, s) {
    var l = e - r,
        u = i - t,
        c = o - n,
        f = s - a,
        v = cl(c, f, l, u);
    if (R3(v)) return !1;
    var h = r - n,
        d = t - a,
        m = cl(h, d, l, u) / v;
    if (m < 0 || m > 1) return !1;
    var p = cl(h, d, c, f) / v;
    return !(p < 0 || p > 1)
}

function cl(r, t, e, i) {
    return r * i - e * t
}

function R3(r) {
    return r <= 1e-6 && r >= -1e-6
}

function bg(r) {
    var t = r.itemTooltipOption,
        e = r.componentModel,
        i = r.itemName,
        n = V(t) ? {
            formatter: t
        } : t,
        a = e.mainType,
        o = e.componentIndex,
        s = {
            componentType: a,
            name: i,
            $vars: ["name"]
        };
    s[a + "Index"] = o;
    var l = r.formatterParamsExtra;
    l && D(wt(l), function (c) {
        qi(s, c) || (s[c] = l[c], s.$vars.push(c))
    });
    var u = vt(r.el);
    u.componentMainType = a, u.componentIndex = o, u.tooltipConfig = {
        name: i,
        option: ht({
            content: i,
            formatterParams: s
        }, n)
    }
}

function mh(r, t) {
    var e;
    r.isGroup && (e = t(r)), e || r.traverse(t)
}

function bc(r, t) {
    if (r)
        if (H(r))
            for (var e = 0; e < r.length; e++) mh(r[e], t);
        else mh(r, t)
}
Re("circle", mc);
Re("ellipse", tg);
Re("sector", ya);
Re("ring", ng);
Re("polygon", sg);
Re("polyline", xa);
Re("rect", ae);
Re("line", vi);
Re("bezierCurve", cg);
Re("arc", _c);
const O3 = Object.freeze(Object.defineProperty({
    __proto__: null,
    Arc: _c,
    BezierCurve: cg,
    BoundingRect: ct,
    Circle: mc,
    CompoundPath: f3,
    Ellipse: tg,
    Group: le,
    Image: gi,
    IncrementalDisplayable: _3,
    Line: vi,
    LinearGradient: vg,
    OrientedBoundingRect: No,
    Path: gt,
    Point: K,
    Polygon: sg,
    Polyline: xa,
    RadialGradient: d3,
    Rect: ae,
    Ring: ng,
    Sector: ya,
    Text: ve,
    applyTransform: wc,
    clipPointsByRect: P3,
    clipRectByRect: k3,
    createIcon: xg,
    extendPath: S3,
    extendShape: w3,
    getShapeClass: C3,
    getTransform: A3,
    groupTransition: yg,
    initProps: Dr,
    isElementRemoved: Gn,
    lineLineIntersect: wg,
    linePolygonIntersect: E3,
    makeImage: gg,
    makePath: xc,
    mergePath: T3,
    registerShape: Re,
    removeElement: Fo,
    removeElementWithFadeOut: dg,
    resizePath: _g,
    setTooltipConfig: bg,
    subPixelOptimize: D3,
    subPixelOptimizeLine: ta,
    subPixelOptimizeRect: M3,
    transformDirection: I3,
    traverseElements: bc,
    updateProps: or
}, Symbol.toStringTag, {
    value: "Module"
}));
var ls = {};

function B3(r, t) {
    for (var e = 0; e < Me.length; e++) {
        var i = Me[e],
            n = t[i],
            a = r.ensureState(i);
        a.style = a.style || {}, a.style.text = n
    }
    var o = r.currentStates.slice();
    r.clearStates(!0), r.setStyle({
        text: t.normal
    }), r.useStates(o, !0)
}

function _h(r, t, e) {
    var i = r.labelFetcher,
        n = r.labelDataIndex,
        a = r.labelDimIndex,
        o = t.normal,
        s;
    i && (s = i.getFormattedLabel(n, "normal", null, a, o && o.get("formatter"), e != null ? {
        interpolatedValue: e
    } : null)), s == null && (s = Q(r.defaultText) ? r.defaultText(n, r, e) : r.defaultText);
    for (var l = {
            normal: s
        }, u = 0; u < Me.length; u++) {
        var c = Me[u],
            f = t[c];
        l[c] = rt(i ? i.getFormattedLabel(n, c, null, a, f && f.get("formatter")) : null, s)
    }
    return l
}

function Sc(r, t, e, i) {
    e = e || ls;
    for (var n = r instanceof ve, a = !1, o = 0; o < Eo.length; o++) {
        var s = t[Eo[o]];
        if (s && s.getShallow("show")) {
            a = !0;
            break
        }
    }
    var l = n ? r : r.getTextContent();
    if (a) {
        n || (l || (l = new ve, r.setTextContent(l)), r.stateProxy && (l.stateProxy = r.stateProxy));
        var u = _h(e, t),
            c = t.normal,
            f = !!c.getShallow("show"),
            v = di(c, i && i.normal, e, !1, !n);
        v.text = u.normal, n || r.setTextConfig(yh(c, e, !1));
        for (var o = 0; o < Me.length; o++) {
            var h = Me[o],
                s = t[h];
            if (s) {
                var d = l.ensureState(h),
                    m = !!rt(s.getShallow("show"), f);
                if (m !== f && (d.ignore = !m), d.style = di(s, i && i[h], e, !0, !n), d.style.text = u[h], !n) {
                    var p = r.ensureState(h);
                    p.textConfig = yh(s, e, !0)
                }
            }
        }
        l.silent = !!c.getShallow("silent"), l.style.x != null && (v.x = l.style.x), l.style.y != null && (v.y = l.style.y), l.ignore = !f, l.useStyle(v), l.dirty(), e.enableTextSetter && (Sg(l).setLabelText = function (g) {
            var _ = _h(e, t, g);
            B3(l, _)
        })
    } else l && (l.ignore = !0);
    r.dirty()
}

function us(r, t) {
    t = t || "label";
    for (var e = {
            normal: r.getModel(t)
        }, i = 0; i < Me.length; i++) {
        var n = Me[i];
        e[n] = r.getModel([n, t])
    }
    return e
}

function di(r, t, e, i, n) {
    var a = {};
    return N3(a, r, e, i, n), t && O(a, t), a
}

function yh(r, t, e) {
    t = t || {};
    var i = {},
        n, a = r.getShallow("rotate"),
        o = rt(r.getShallow("distance"), e ? null : 5),
        s = r.getShallow("offset");
    return n = r.getShallow("position") || (e ? null : "inside"), n === "outside" && (n = t.defaultOutsidePosition || "top"), n != null && (i.position = n), s != null && (i.offset = s), a != null && (a *= Math.PI / 180, i.rotation = a), o != null && (i.distance = o), i.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", i
}

function N3(r, t, e, i, n) {
    e = e || ls;
    var a = t.ecModel,
        o = a && a.option.textStyle,
        s = F3(t),
        l;
    if (s) {
        l = {};
        for (var u in s)
            if (s.hasOwnProperty(u)) {
                var c = t.getModel(["rich", u]);
                Sh(l[u] = {}, c, o, e, i, n, !1, !0)
            }
    }
    l && (r.rich = l);
    var f = t.get("overflow");
    f && (r.overflow = f);
    var v = t.get("minMargin");
    v != null && (r.margin = v), Sh(r, t, o, e, i, n, !0, !1)
}

function F3(r) {
    for (var t; r && r !== r.ecModel;) {
        var e = (r.option || ls).rich;
        if (e) {
            t = t || {};
            for (var i = wt(e), n = 0; n < i.length; n++) {
                var a = i[n];
                t[a] = 1
            }
        }
        r = r.parentModel
    }
    return t
}
var xh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"],
    wh = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"],
    bh = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];

function Sh(r, t, e, i, n, a, o, s) {
    e = !n && e || ls;
    var l = i && i.inheritColor,
        u = t.getShallow("color"),
        c = t.getShallow("textBorderColor"),
        f = rt(t.getShallow("opacity"), e.opacity);
    (u === "inherit" || u === "auto") && (l ? u = l : u = null), (c === "inherit" || c === "auto") && (l ? c = l : c = null), a || (u = u || e.color, c = c || e.textBorderColor), u != null && (r.fill = u), c != null && (r.stroke = c);
    var v = rt(t.getShallow("textBorderWidth"), e.textBorderWidth);
    v != null && (r.lineWidth = v);
    var h = rt(t.getShallow("textBorderType"), e.textBorderType);
    h != null && (r.lineDash = h);
    var d = rt(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
    d != null && (r.lineDashOffset = d), !n && f == null && !s && (f = i && i.defaultOpacity), f != null && (r.opacity = f), !n && !a && r.fill == null && i.inheritColor && (r.fill = i.inheritColor);
    for (var m = 0; m < xh.length; m++) {
        var p = xh[m],
            g = rt(t.getShallow(p), e[p]);
        g != null && (r[p] = g)
    }
    for (var m = 0; m < wh.length; m++) {
        var p = wh[m],
            g = t.getShallow(p);
        g != null && (r[p] = g)
    }
    if (r.verticalAlign == null) {
        var _ = t.getShallow("baseline");
        _ != null && (r.verticalAlign = _)
    }
    if (!o || !i.disableBox) {
        for (var m = 0; m < bh.length; m++) {
            var p = bh[m],
                g = t.getShallow(p);
            g != null && (r[p] = g)
        }
        var y = t.getShallow("borderType");
        y != null && (r.borderDash = y), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && l && (r.backgroundColor = l), (r.borderColor === "auto" || r.borderColor === "inherit") && l && (r.borderColor = l)
    }
}

function $3(r, t) {
    var e = t && t.getModel("textStyle");
    return Ve([r.fontStyle || e && e.getShallow("fontStyle") || "", r.fontWeight || e && e.getShallow("fontWeight") || "", (r.fontSize || e && e.getShallow("fontSize") || 12) + "px", r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"].join(" "))
}
var Sg = Lt(),
    z3 = ["textStyle", "color"],
    fl = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"],
    hl = new ve,
    H3 = function () {
        function r() {}
        return r.prototype.getTextColor = function (t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get(z3) : null)
        }, r.prototype.getFont = function () {
            return $3({
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, this.ecModel)
        }, r.prototype.getTextRect = function (t) {
            for (var e = {
                    text: t,
                    verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
                }, i = 0; i < fl.length; i++) e[fl[i]] = this.getShallow(fl[i]);
            return hl.useStyle(e), hl.update(), hl.getBoundingRect()
        }, r
    }();
const G3 = H3;
var Cg = [
        ["lineWidth", "width"],
        ["stroke", "color"],
        ["opacity"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["shadowColor"],
        ["lineDash", "type"],
        ["lineDashOffset", "dashOffset"],
        ["lineCap", "cap"],
        ["lineJoin", "join"],
        ["miterLimit"]
    ],
    V3 = Jn(Cg),
    W3 = function () {
        function r() {}
        return r.prototype.getLineStyle = function (t) {
            return V3(this, t)
        }, r
    }(),
    Tg = [
        ["fill", "color"],
        ["stroke", "borderColor"],
        ["lineWidth", "borderWidth"],
        ["opacity"],
        ["shadowBlur"],
        ["shadowOffsetX"],
        ["shadowOffsetY"],
        ["shadowColor"],
        ["lineDash", "borderType"],
        ["lineDashOffset", "borderDashOffset"],
        ["lineCap", "borderCap"],
        ["lineJoin", "borderJoin"],
        ["miterLimit", "borderMiterLimit"]
    ],
    U3 = Jn(Tg),
    Y3 = function () {
        function r() {}
        return r.prototype.getItemStyle = function (t, e) {
            return U3(this, t, e)
        }, r
    }(),
    mi = function () {
        function r(t, e, i) {
            this.parentModel = e, this.ecModel = i, this.option = t
        }
        return r.prototype.init = function (t, e, i) {}, r.prototype.mergeOption = function (t, e) {
            pt(this.option, t, !0)
        }, r.prototype.get = function (t, e) {
            return t == null ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel)
        }, r.prototype.getShallow = function (t, e) {
            var i = this.option,
                n = i == null ? i : i[t];
            if (n == null && !e) {
                var a = this.parentModel;
                a && (n = a.getShallow(t))
            }
            return n
        }, r.prototype.getModel = function (t, e) {
            var i = t != null,
                n = i ? this.parsePath(t) : null,
                a = i ? this._doGet(n) : this.option;
            return e = e || this.parentModel && this.parentModel.getModel(this.resolveParentPath(n)), new r(a, e, this.ecModel)
        }, r.prototype.isEmpty = function () {
            return this.option == null
        }, r.prototype.restoreData = function () {}, r.prototype.clone = function () {
            var t = this.constructor;
            return new t(ot(this.option))
        }, r.prototype.parsePath = function (t) {
            return typeof t == "string" ? t.split(".") : t
        }, r.prototype.resolveParentPath = function (t) {
            return t
        }, r.prototype.isAnimationEnabled = function () {
            if (!j.node && this.option) {
                if (this.option.animation != null) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }, r.prototype._doGet = function (t, e) {
            var i = this.option;
            if (!t) return i;
            for (var n = 0; n < t.length && !(t[n] && (i = i && typeof i == "object" ? i[t[n]] : null, i == null)); n++);
            return i == null && e && (i = e._doGet(this.resolveParentPath(t), e.parentModel)), i
        }, r
    }();
hc(mi);
CC(mi);
Ye(mi, W3);
Ye(mi, Y3);
Ye(mi, IC);
Ye(mi, G3);
const Xt = mi;
var X3 = Math.round(Math.random() * 10);

function cs(r) {
    return [r || "", X3++].join("_")
}

function Z3(r) {
    var t = {};
    r.registerSubTypeDefaulter = function (e, i) {
        var n = We(e);
        t[n.main] = i
    }, r.determineSubType = function (e, i) {
        var n = i.type;
        if (!n) {
            var a = We(e).main;
            r.hasSubTypes(e) && t[a] && (n = t[a](i))
        }
        return n
    }
}

function q3(r, t) {
    r.topologicalTravel = function (a, o, s, l) {
        if (!a.length) return;
        var u = e(o),
            c = u.graph,
            f = u.noEntryList,
            v = {};
        for (D(a, function (_) {
                v[_] = !0
            }); f.length;) {
            var h = f.pop(),
                d = c[h],
                m = !!v[h];
            m && (s.call(l, h, d.originalDeps.slice()), delete v[h]), D(d.successor, m ? g : p)
        }
        D(v, function () {
            var _ = "";
            throw new Error(_)
        });

        function p(_) {
            c[_].entryCount--, c[_].entryCount === 0 && f.push(_)
        }

        function g(_) {
            v[_] = !0, p(_)
        }
    };

    function e(a) {
        var o = {},
            s = [];
        return D(a, function (l) {
            var u = i(o, l),
                c = u.originalDeps = t(l),
                f = n(c, a);
            u.entryCount = f.length, u.entryCount === 0 && s.push(l), D(f, function (v) {
                dt(u.predecessor, v) < 0 && u.predecessor.push(v);
                var h = i(o, v);
                dt(h.successor, v) < 0 && h.successor.push(l)
            })
        }), {
            graph: o,
            noEntryList: s
        }
    }

    function i(a, o) {
        return a[o] || (a[o] = {
            predecessor: [],
            successor: []
        }), a[o]
    }

    function n(a, o) {
        var s = [];
        return D(a, function (l) {
            dt(o, l) >= 0 && s.push(l)
        }), s
    }
}
const K3 = {
        time: {
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },
        legend: {
            selector: {
                all: "All",
                inverse: "Inv"
            }
        },
        toolbox: {
            brush: {
                title: {
                    rect: "Box Select",
                    polygon: "Lasso Select",
                    lineX: "Horizontally Select",
                    lineY: "Vertically Select",
                    keep: "Keep Selections",
                    clear: "Clear Selections"
                }
            },
            dataView: {
                title: "Data View",
                lang: ["Data View", "Close", "Refresh"]
            },
            dataZoom: {
                title: {
                    zoom: "Zoom",
                    back: "Zoom Reset"
                }
            },
            magicType: {
                title: {
                    line: "Switch to Line Chart",
                    bar: "Switch to Bar Chart",
                    stack: "Stack",
                    tiled: "Tile"
                }
            },
            restore: {
                title: "Restore"
            },
            saveAsImage: {
                title: "Save as Image",
                lang: ["Right Click to Save Image"]
            }
        },
        series: {
            typeNames: {
                pie: "Pie chart",
                bar: "Bar chart",
                line: "Line chart",
                scatter: "Scatter plot",
                effectScatter: "Ripple scatter plot",
                radar: "Radar chart",
                tree: "Tree",
                treemap: "Treemap",
                boxplot: "Boxplot",
                candlestick: "Candlestick",
                k: "K line chart",
                heatmap: "Heat map",
                map: "Map",
                parallel: "Parallel coordinate map",
                lines: "Line graph",
                graph: "Relationship graph",
                sankey: "Sankey diagram",
                funnel: "Funnel chart",
                gauge: "Gauge",
                pictorialBar: "Pictorial bar",
                themeRiver: "Theme River Map",
                sunburst: "Sunburst",
                custom: "Custom chart",
                chart: "Chart"
            }
        },
        aria: {
            general: {
                withTitle: 'This is a chart about "{title}"',
                withoutTitle: "This is a chart"
            },
            series: {
                single: {
                    prefix: "",
                    withName: " with type {seriesType} named {seriesName}.",
                    withoutName: " with type {seriesType}."
                },
                multiple: {
                    prefix: ". It consists of {seriesCount} series count.",
                    withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
                    withoutName: " The {seriesId} series is a {seriesType}.",
                    separator: {
                        middle: "",
                        end: ""
                    }
                }
            },
            data: {
                allData: "The data is as follows: ",
                partialData: "The first {displayCnt} items are: ",
                withName: "the data for {name} is {value}",
                withoutName: "{value}",
                separator: {
                    middle: ", ",
                    end: ". "
                }
            }
        }
    },
    j3 = {
        time: {
            month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
        },
        legend: {
            selector: {
                all: "全选",
                inverse: "反选"
            }
        },
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {
                title: "数据视图",
                lang: ["数据视图", "关闭", "刷新"]
            },
            dataZoom: {
                title: {
                    zoom: "区域缩放",
                    back: "区域缩放还原"
                }
            },
            magicType: {
                title: {
                    line: "切换为折线图",
                    bar: "切换为柱状图",
                    stack: "切换为堆叠",
                    tiled: "切换为平铺"
                }
            },
            restore: {
                title: "还原"
            },
            saveAsImage: {
                title: "保存为图片",
                lang: ["右键另存为图片"]
            }
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图",
                custom: "自定义图表",
                chart: "图表"
            }
        },
        aria: {
            general: {
                withTitle: "这是一个关于“{title}”的图表。",
                withoutTitle: "这是一个图表，"
            },
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {
                        middle: "；",
                        end: "。"
                    }
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {
                    middle: "，",
                    end: ""
                }
            }
        }
    };
var Ho = "ZH",
    Cc = "EN",
    Yi = Cc,
    yo = {},
    Tc = {},
    Mg = j.domSupported ? function () {
        var r = (document.documentElement.lang || navigator.language || navigator.browserLanguage || Yi).toUpperCase();
        return r.indexOf(Ho) > -1 ? Ho : Yi
    }() : Yi;

function Dg(r, t) {
    r = r.toUpperCase(), Tc[r] = new Xt(t), yo[r] = t
}

function Q3(r) {
    if (V(r)) {
        var t = yo[r.toUpperCase()] || {};
        return r === Ho || r === Cc ? ot(t) : pt(ot(t), ot(yo[Yi]), !1)
    } else return pt(ot(r), ot(yo[Yi]), !1)
}

function J3(r) {
    return Tc[r]
}

function tM() {
    return Tc[Yi]
}
Dg(Cc, K3);
Dg(Ho, j3);
var Mc = 1e3,
    Dc = Mc * 60,
    Vn = Dc * 60,
    Ce = Vn * 24,
    Ch = Ce * 365,
    Pn = {
        year: "{yyyy}",
        month: "{MMM}",
        day: "{d}",
        hour: "{HH}:{mm}",
        minute: "{HH}:{mm}",
        second: "{HH}:{mm}:{ss}",
        millisecond: "{HH}:{mm}:{ss} {SSS}",
        none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
    },
    Wa = "{yyyy}-{MM}-{dd}",
    Th = {
        year: "{yyyy}",
        month: "{yyyy}-{MM}",
        day: Wa,
        hour: Wa + " " + Pn.hour,
        minute: Wa + " " + Pn.minute,
        second: Wa + " " + Pn.second,
        millisecond: Pn.none
    },
    vl = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    Ag = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];

function fr(r, t) {
    return r += "", "0000".substr(0, t - r.length) + r
}

function Xi(r) {
    switch (r) {
        case "half-year":
        case "quarter":
            return "month";
        case "week":
        case "half-week":
            return "day";
        case "half-day":
        case "quarter-day":
            return "hour";
        default:
            return r
    }
}

function eM(r) {
    return r === Xi(r)
}

function rM(r) {
    switch (r) {
        case "year":
        case "month":
            return "day";
        case "millisecond":
            return "millisecond";
        default:
            return "second"
    }
}

function fs(r, t, e, i) {
    var n = ar(r),
        a = n[Ac(e)](),
        o = n[Zi(e)]() + 1,
        s = Math.floor((o - 1) / 3) + 1,
        l = n[hs(e)](),
        u = n["get" + (e ? "UTC" : "") + "Day"](),
        c = n[ea(e)](),
        f = (c - 1) % 12 + 1,
        v = n[vs(e)](),
        h = n[ds(e)](),
        d = n[ps(e)](),
        m = i instanceof Xt ? i : J3(i || Mg) || tM(),
        p = m.getModel("time"),
        g = p.get("month"),
        _ = p.get("monthAbbr"),
        y = p.get("dayOfWeek"),
        x = p.get("dayOfWeekAbbr");
    return (t || "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, fr(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, g[o - 1]).replace(/{MMM}/g, _[o - 1]).replace(/{MM}/g, fr(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, fr(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, y[u]).replace(/{ee}/g, x[u]).replace(/{e}/g, u + "").replace(/{HH}/g, fr(c, 2)).replace(/{H}/g, c + "").replace(/{hh}/g, fr(f + "", 2)).replace(/{h}/g, f + "").replace(/{mm}/g, fr(v, 2)).replace(/{m}/g, v + "").replace(/{ss}/g, fr(h, 2)).replace(/{s}/g, h + "").replace(/{SSS}/g, fr(d, 3)).replace(/{S}/g, d + "")
}

function iM(r, t, e, i, n) {
    var a = null;
    if (V(e)) a = e;
    else if (Q(e)) a = e(r.value, t, {
        level: r.level
    });
    else {
        var o = O({}, Pn);
        if (r.level > 0)
            for (var s = 0; s < vl.length; ++s) o[vl[s]] = "{primary|" + o[vl[s]] + "}";
        var l = e ? e.inherit === !1 ? e : ht(e, o) : o,
            u = Ig(r.value, n);
        if (l[u]) a = l[u];
        else if (l.inherit) {
            for (var c = Ag.indexOf(u), s = c - 1; s >= 0; --s)
                if (l[u]) {
                    a = l[u];
                    break
                } a = a || o.none
        }
        if (H(a)) {
            var f = r.level == null ? 0 : r.level >= 0 ? r.level : a.length + r.level;
            f = Math.min(f, a.length - 1), a = a[f]
        }
    }
    return fs(new Date(r.value), a, n, i)
}

function Ig(r, t) {
    var e = ar(r),
        i = e[Zi(t)]() + 1,
        n = e[hs(t)](),
        a = e[ea(t)](),
        o = e[vs(t)](),
        s = e[ds(t)](),
        l = e[ps(t)](),
        u = l === 0,
        c = u && s === 0,
        f = c && o === 0,
        v = f && a === 0,
        h = v && n === 1,
        d = h && i === 1;
    return d ? "year" : h ? "month" : v ? "day" : f ? "hour" : c ? "minute" : u ? "second" : "millisecond"
}

function Mh(r, t, e) {
    var i = _t(r) ? ar(r) : r;
    switch (t = t || Ig(r, e), t) {
        case "year":
            return i[Ac(e)]();
        case "half-year":
            return i[Zi(e)]() >= 6 ? 1 : 0;
        case "quarter":
            return Math.floor((i[Zi(e)]() + 1) / 4);
        case "month":
            return i[Zi(e)]();
        case "day":
            return i[hs(e)]();
        case "half-day":
            return i[ea(e)]() / 24;
        case "hour":
            return i[ea(e)]();
        case "minute":
            return i[vs(e)]();
        case "second":
            return i[ds(e)]();
        case "millisecond":
            return i[ps(e)]()
    }
}

function Ac(r) {
    return r ? "getUTCFullYear" : "getFullYear"
}

function Zi(r) {
    return r ? "getUTCMonth" : "getMonth"
}

function hs(r) {
    return r ? "getUTCDate" : "getDate"
}

function ea(r) {
    return r ? "getUTCHours" : "getHours"
}

function vs(r) {
    return r ? "getUTCMinutes" : "getMinutes"
}

function ds(r) {
    return r ? "getUTCSeconds" : "getSeconds"
}

function ps(r) {
    return r ? "getUTCMilliseconds" : "getMilliseconds"
}

function nM(r) {
    return r ? "setUTCFullYear" : "setFullYear"
}

function Lg(r) {
    return r ? "setUTCMonth" : "setMonth"
}

function Pg(r) {
    return r ? "setUTCDate" : "setDate"
}

function kg(r) {
    return r ? "setUTCHours" : "setHours"
}

function Eg(r) {
    return r ? "setUTCMinutes" : "setMinutes"
}

function Rg(r) {
    return r ? "setUTCSeconds" : "setSeconds"
}

function Og(r) {
    return r ? "setUTCMilliseconds" : "setMilliseconds"
}

function Bg(r) {
    if (!iC(r)) return V(r) ? r : "-";
    var t = (r + "").split(".");
    return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "")
}

function Ng(r, t) {
    return r = (r || "").toLowerCase().replace(/-(.)/g, function (e, i) {
        return i.toUpperCase()
    }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r
}
var Ic = Wd;

function bu(r, t, e) {
    var i = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";

    function n(c) {
        return c && Ve(c) ? c : "-"
    }

    function a(c) {
        return !!(c != null && !isNaN(c) && isFinite(c))
    }
    var o = t === "time",
        s = r instanceof Date;
    if (o || s) {
        var l = o ? ar(r) : r;
        if (isNaN(+l)) {
            if (s) return "-"
        } else return fs(l, i, e)
    }
    if (t === "ordinal") return Wl(r) ? n(r) : _t(r) && a(r) ? r + "" : "-";
    var u = ko(r);
    return a(u) ? Bg(u) : Wl(r) ? n(r) : typeof r == "boolean" ? r + "" : "-"
}
var Dh = ["a", "b", "c", "d", "e", "f", "g"],
    dl = function (r, t) {
        return "{" + r + (t ?? "") + "}"
    };

function Fg(r, t, e) {
    H(t) || (t = [t]);
    var i = t.length;
    if (!i) return "";
    for (var n = t[0].$vars || [], a = 0; a < n.length; a++) {
        var o = Dh[a];
        r = r.replace(dl(o), dl(o, 0))
    }
    for (var s = 0; s < i; s++)
        for (var l = 0; l < n.length; l++) {
            var u = t[s][n[l]];
            r = r.replace(dl(Dh[l], s), e ? xe(u) : u)
        }
    return r
}

function aM(r, t) {
    var e = V(r) ? {
            color: r,
            extraCssText: t
        } : r || {},
        i = e.color,
        n = e.type;
    t = e.extraCssText;
    var a = e.renderMode || "html";
    if (!i) return "";
    if (a === "html") return n === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + xe(i) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + xe(i) + ";" + (t || "") + '"></span>';
    var o = e.markerId || "markerX";
    return {
        renderMode: a,
        content: "{" + o + "|}  ",
        style: n === "subItem" ? {
            width: 4,
            height: 4,
            borderRadius: 2,
            backgroundColor: i
        } : {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: i
        }
    }
}

function pi(r, t) {
    return t = t || "transparent", V(r) ? r : X(r) && r.colorStops && (r.colorStops[0] || {}).color || t
}

function Ah(r, t) {
    if (t === "_blank" || t === "blank") {
        var e = window.open();
        e.opener = null, e.location.href = r
    } else window.open(r, t)
}
var xo = D,
    oM = ["left", "right", "top", "bottom", "width", "height"],
    Ua = [
        ["width", "left", "right"],
        ["height", "top", "bottom"]
    ];

function $g(r, t, e, i, n) {
    var a = 0,
        o = 0;
    i == null && (i = 1 / 0), n == null && (n = 1 / 0);
    var s = 0;
    t.eachChild(function (l, u) {
        var c = l.getBoundingRect(),
            f = t.childAt(u + 1),
            v = f && f.getBoundingRect(),
            h, d;
        if (r === "horizontal") {
            var m = c.width + (v ? -v.x + c.x : 0);
            h = a + m, h > i || l.newline ? (a = 0, h = m, o += s + e, s = c.height) : s = Math.max(s, c.height)
        } else {
            var p = c.height + (v ? -v.y + c.y : 0);
            d = o + p, d > n || l.newline ? (a += s + e, o = 0, d = p, s = c.width) : s = Math.max(s, c.width)
        }
        l.newline || (l.x = a, l.y = o, l.markRedraw(), r === "horizontal" ? a = h + e : o = d + e)
    })
}
ie($g, "vertical");
ie($g, "horizontal");

function gs(r, t, e) {
    e = Ic(e || 0);
    var i = t.width,
        n = t.height,
        a = yt(r.left, i),
        o = yt(r.top, n),
        s = yt(r.right, i),
        l = yt(r.bottom, n),
        u = yt(r.width, i),
        c = yt(r.height, n),
        f = e[2] + e[0],
        v = e[1] + e[3],
        h = r.aspect;
    switch (isNaN(u) && (u = i - s - v - a), isNaN(c) && (c = n - l - f - o), h != null && (isNaN(u) && isNaN(c) && (h > i / n ? u = i * .8 : c = n * .8), isNaN(u) && (u = h * c), isNaN(c) && (c = u / h)), isNaN(a) && (a = i - s - u - v), isNaN(o) && (o = n - l - c - f), r.left || r.right) {
        case "center":
            a = i / 2 - u / 2 - e[3];
            break;
        case "right":
            a = i - u - v;
            break
    }
    switch (r.top || r.bottom) {
        case "middle":
        case "center":
            o = n / 2 - c / 2 - e[0];
            break;
        case "bottom":
            o = n - c - f;
            break
    }
    a = a || 0, o = o || 0, isNaN(u) && (u = i - v - a - (s || 0)), isNaN(c) && (c = n - f - o - (l || 0));
    var d = new ct(a + e[3], o + e[0], u, c);
    return d.margin = e, d
}

function ra(r) {
    var t = r.layoutMode || r.constructor.layoutMode;
    return X(t) ? t : t ? {
        type: t
    } : null
}

function ia(r, t, e) {
    var i = e && e.ignoreSize;
    !H(i) && (i = [i, i]);
    var n = o(Ua[0], 0),
        a = o(Ua[1], 1);
    u(Ua[0], r, n), u(Ua[1], r, a);

    function o(c, f) {
        var v = {},
            h = 0,
            d = {},
            m = 0,
            p = 2;
        if (xo(c, function (y) {
                d[y] = r[y]
            }), xo(c, function (y) {
                s(t, y) && (v[y] = d[y] = t[y]), l(v, y) && h++, l(d, y) && m++
            }), i[f]) return l(t, c[1]) ? d[c[2]] = null : l(t, c[2]) && (d[c[1]] = null), d;
        if (m === p || !h) return d;
        if (h >= p) return v;
        for (var g = 0; g < c.length; g++) {
            var _ = c[g];
            if (!s(v, _) && s(r, _)) {
                v[_] = r[_];
                break
            }
        }
        return v
    }

    function s(c, f) {
        return c.hasOwnProperty(f)
    }

    function l(c, f) {
        return c[f] != null && c[f] !== "auto"
    }

    function u(c, f, v) {
        xo(c, function (h) {
            f[h] = v[h]
        })
    }
}

function Lc(r) {
    return sM({}, r)
}

function sM(r, t) {
    return t && r && xo(oM, function (e) {
        t.hasOwnProperty(e) && (r[e] = t[e])
    }), r
}
var lM = Lt(),
    en = function (r) {
        z(t, r);

        function t(e, i, n) {
            var a = r.call(this, e, i, n) || this;
            return a.uid = cs("ec_cpt_model"), a
        }
        return t.prototype.init = function (e, i, n) {
            this.mergeDefaultAndTheme(e, n)
        }, t.prototype.mergeDefaultAndTheme = function (e, i) {
            var n = ra(this),
                a = n ? Lc(e) : {},
                o = i.getTheme();
            pt(e, o.get(this.mainType)), pt(e, this.getDefaultOption()), n && ia(e, a, n)
        }, t.prototype.mergeOption = function (e, i) {
            pt(this.option, e, !0);
            var n = ra(this);
            n && ia(this.option, e, n)
        }, t.prototype.optionUpdated = function (e, i) {}, t.prototype.getDefaultOption = function () {
            var e = this.constructor;
            if (!wC(e)) return e.defaultOption;
            var i = lM(this);
            if (!i.defaultOption) {
                for (var n = [], a = e; a;) {
                    var o = a.prototype.defaultOption;
                    o && n.push(o), a = a.superClass
                }
                for (var s = {}, l = n.length - 1; l >= 0; l--) s = pt(s, n[l], !0);
                i.defaultOption = s
            }
            return i.defaultOption
        }, t.prototype.getReferringComponents = function (e, i) {
            var n = e + "Index",
                a = e + "Id";
            return ma(this.ecModel, e, {
                index: this.get(n, !0),
                id: this.get(a, !0)
            }, i)
        }, t.prototype.getBoxLayoutParams = function () {
            var e = this;
            return {
                left: e.get("left"),
                top: e.get("top"),
                right: e.get("right"),
                bottom: e.get("bottom"),
                width: e.get("width"),
                height: e.get("height")
            }
        }, t.prototype.getZLevelKey = function () {
            return ""
        }, t.prototype.setZLevel = function (e) {
            this.option.zlevel = e
        }, t.protoInitialize = function () {
            var e = t.prototype;
            e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0
        }(), t
    }(Xt);
Tp(en, Xt);
rs(en);
Z3(en);
q3(en, uM);

function uM(r) {
    var t = [];
    return D(en.getClassesByMainType(r), function (e) {
        t = t.concat(e.dependencies || e.prototype.dependencies || [])
    }), t = Z(t, function (e) {
        return We(e).main
    }), r !== "dataset" && dt(t, "dataset") <= 0 && t.unshift("dataset"), t
}
const bt = en;
var zg = "";
typeof navigator < "u" && (zg = navigator.platform || "");
var Ii = "rgba(0, 0, 0, 0.2)";
const cM = {
    darkMode: "auto",
    colorBy: "series",
    color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
    gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
    aria: {
        decal: {
            decals: [{
                color: Ii,
                dashArrayX: [1, 0],
                dashArrayY: [2, 5],
                symbolSize: 1,
                rotation: Math.PI / 6
            }, {
                color: Ii,
                symbol: "circle",
                dashArrayX: [
                    [8, 8],
                    [0, 8, 8, 0]
                ],
                dashArrayY: [6, 0],
                symbolSize: .8
            }, {
                color: Ii,
                dashArrayX: [1, 0],
                dashArrayY: [4, 3],
                rotation: -Math.PI / 4
            }, {
                color: Ii,
                dashArrayX: [
                    [6, 6],
                    [0, 6, 6, 0]
                ],
                dashArrayY: [6, 0]
            }, {
                color: Ii,
                dashArrayX: [
                    [1, 0],
                    [1, 6]
                ],
                dashArrayY: [1, 0, 6, 0],
                rotation: Math.PI / 4
            }, {
                color: Ii,
                symbol: "triangle",
                dashArrayX: [
                    [9, 9],
                    [0, 9, 9, 0]
                ],
                dashArrayY: [7, 2],
                symbolSize: .75
            }]
        }
    },
    textStyle: {
        fontFamily: zg.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal"
    },
    blendMode: null,
    stateAnimation: {
        duration: 300,
        easing: "cubicOut"
    },
    animation: "auto",
    animationDuration: 1e3,
    animationDurationUpdate: 500,
    animationEasing: "cubicInOut",
    animationEasingUpdate: "cubicInOut",
    animationThreshold: 2e3,
    progressiveThreshold: 3e3,
    progressive: 400,
    hoverLayerThreshold: 3e3,
    useUTC: !1
};
var Hg = it(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]),
    De = "original",
    ue = "arrayRows",
    Oe = "objectRows",
    Ze = "keyedColumns",
    Ar = "typedArray",
    Gg = "unknown",
    rr = "column",
    rn = "row",
    Bt = {
        Must: 1,
        Might: 2,
        Not: 3
    },
    Vg = Lt();

function fM(r) {
    Vg(r).datasetMap = it()
}

function hM(r, t, e) {
    var i = {},
        n = Pc(t);
    if (!n || !r) return i;
    var a = [],
        o = [],
        s = t.ecModel,
        l = Vg(s).datasetMap,
        u = n.uid + "_" + e.seriesLayoutBy,
        c, f;
    r = r.slice(), D(r, function (m, p) {
        var g = X(m) ? m : r[p] = {
            name: m
        };
        g.type === "ordinal" && c == null && (c = p, f = d(g)), i[g.name] = []
    });
    var v = l.get(u) || l.set(u, {
        categoryWayDim: f,
        valueWayDim: 0
    });
    D(r, function (m, p) {
        var g = m.name,
            _ = d(m);
        if (c == null) {
            var y = v.valueWayDim;
            h(i[g], y, _), h(o, y, _), v.valueWayDim += _
        } else if (c === p) h(i[g], 0, _), h(a, 0, _);
        else {
            var y = v.categoryWayDim;
            h(i[g], y, _), h(o, y, _), v.categoryWayDim += _
        }
    });

    function h(m, p, g) {
        for (var _ = 0; _ < g; _++) m.push(p + _)
    }

    function d(m) {
        var p = m.dimsDef;
        return p ? p.length : 1
    }
    return a.length && (i.itemName = a), o.length && (i.seriesName = o), i
}

function vM(r, t, e) {
    var i = {},
        n = Pc(r);
    if (!n) return i;
    var a = t.sourceFormat,
        o = t.dimensionsDefine,
        s;
    (a === Oe || a === Ze) && D(o, function (c, f) {
        (X(c) ? c.name : c) === "name" && (s = f)
    });
    var l = function () {
        for (var c = {}, f = {}, v = [], h = 0, d = Math.min(5, e); h < d; h++) {
            var m = Ug(t.data, a, t.seriesLayoutBy, o, t.startIndex, h);
            v.push(m);
            var p = m === Bt.Not;
            if (p && c.v == null && h !== s && (c.v = h), (c.n == null || c.n === c.v || !p && v[c.n] === Bt.Not) && (c.n = h), g(c) && v[c.n] !== Bt.Not) return c;
            p || (m === Bt.Might && f.v == null && h !== s && (f.v = h), (f.n == null || f.n === f.v) && (f.n = h))
        }

        function g(_) {
            return _.v != null && _.n != null
        }
        return g(c) ? c : g(f) ? f : null
    }();
    if (l) {
        i.value = [l.v];
        var u = s ?? l.n;
        i.itemName = [u], i.seriesName = [u]
    }
    return i
}

function Pc(r) {
    var t = r.get("data", !0);
    if (!t) return ma(r.ecModel, "dataset", {
        index: r.get("datasetIndex", !0),
        id: r.get("datasetId", !0)
    }, Ee).models[0]
}

function dM(r) {
    return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : ma(r.ecModel, "dataset", {
        index: r.get("fromDatasetIndex", !0),
        id: r.get("fromDatasetId", !0)
    }, Ee).models
}

function Wg(r, t) {
    return Ug(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t)
}

function Ug(r, t, e, i, n, a) {
    var o, s = 5;
    if (se(r)) return Bt.Not;
    var l, u;
    if (i) {
        var c = i[a];
        X(c) ? (l = c.name, u = c.type) : V(c) && (l = c)
    }
    if (u != null) return u === "ordinal" ? Bt.Must : Bt.Not;
    if (t === ue) {
        var f = r;
        if (e === rn) {
            for (var v = f[a], h = 0; h < (v || []).length && h < s; h++)
                if ((o = x(v[n + h])) != null) return o
        } else
            for (var h = 0; h < f.length && h < s; h++) {
                var d = f[n + h];
                if (d && (o = x(d[a])) != null) return o
            }
    } else if (t === Oe) {
        var m = r;
        if (!l) return Bt.Not;
        for (var h = 0; h < m.length && h < s; h++) {
            var p = m[h];
            if (p && (o = x(p[l])) != null) return o
        }
    } else if (t === Ze) {
        var g = r;
        if (!l) return Bt.Not;
        var v = g[l];
        if (!v || se(v)) return Bt.Not;
        for (var h = 0; h < v.length && h < s; h++)
            if ((o = x(v[h])) != null) return o
    } else if (t === De)
        for (var _ = r, h = 0; h < _.length && h < s; h++) {
            var p = _[h],
                y = ga(p);
            if (!H(y)) return Bt.Not;
            if ((o = x(y[a])) != null) return o
        }

    function x(S) {
        var w = V(S);
        if (S != null && isFinite(S) && S !== "") return w ? Bt.Might : Bt.Not;
        if (w && S !== "-") return Bt.Must
    }
    return Bt.Not
}
var pM = it();

function gM(r, t, e) {
    var i = pM.get(t);
    if (!i) return e;
    var n = i(r);
    return n ? e.concat(n) : e
}
var Ih = Lt();
Lt();
var kc = function () {
    function r() {}
    return r.prototype.getColorFromPalette = function (t, e, i) {
        var n = Zt(this.get("color", !0)),
            a = this.get("colorLayer", !0);
        return _M(this, Ih, n, a, t, e, i)
    }, r.prototype.clearColorPalette = function () {
        yM(this, Ih)
    }, r
}();

function mM(r, t) {
    for (var e = r.length, i = 0; i < e; i++)
        if (r[i].length > t) return r[i];
    return r[e - 1]
}

function _M(r, t, e, i, n, a, o) {
    a = a || r;
    var s = t(a),
        l = s.paletteIdx || 0,
        u = s.paletteNameMap = s.paletteNameMap || {};
    if (u.hasOwnProperty(n)) return u[n];
    var c = o == null || !i ? e : mM(i, o);
    if (c = c || e, !(!c || !c.length)) {
        var f = c[l];
        return n && (u[n] = f), s.paletteIdx = (l + 1) % c.length, f
    }
}

function yM(r, t) {
    t(r).paletteIdx = 0, t(r).paletteNameMap = {}
}
var Ya, gn, Lh, Ph = "\0_ec_inner",
    xM = 1,
    Ec = function (r) {
        z(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t.prototype.init = function (e, i, n, a, o, s) {
            a = a || {}, this.option = null, this._theme = new Xt(a), this._locale = new Xt(o), this._optionManager = s
        }, t.prototype.setOption = function (e, i, n) {
            var a = Rh(i);
            this._optionManager.setOption(e, n, a), this._resetOption(null, a)
        }, t.prototype.resetOption = function (e, i) {
            return this._resetOption(e, Rh(i))
        }, t.prototype._resetOption = function (e, i) {
            var n = !1,
                a = this._optionManager;
            if (!e || e === "recreate") {
                var o = a.mountOption(e === "recreate");
                !this.option || e === "recreate" ? Lh(this, o) : (this.restoreData(), this._mergeOption(o, i)), n = !0
            }
            if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
                var s = a.getTimelineOption(this);
                s && (n = !0, this._mergeOption(s, i))
            }
            if (!e || e === "recreate" || e === "media") {
                var l = a.getMediaOption(this);
                l.length && D(l, function (u) {
                    n = !0, this._mergeOption(u, i)
                }, this)
            }
            return n
        }, t.prototype.mergeOption = function (e) {
            this._mergeOption(e, null)
        }, t.prototype._mergeOption = function (e, i) {
            var n = this.option,
                a = this._componentsMap,
                o = this._componentsCount,
                s = [],
                l = it(),
                u = i && i.replaceMergeMainTypeMap;
            fM(this), D(e, function (f, v) {
                f != null && (bt.hasClass(v) ? v && (s.push(v), l.set(v, !0)) : n[v] = n[v] == null ? ot(f) : pt(n[v], f, !0))
            }), u && u.each(function (f, v) {
                bt.hasClass(v) && !l.get(v) && (s.push(v), l.set(v, !0))
            }), bt.topologicalTravel(s, bt.getAllClassMainTypes(), c, this);

            function c(f) {
                var v = gM(this, f, Zt(e[f])),
                    h = a.get(f),
                    d = h ? u && u.get(f) ? "replaceMerge" : "normalMerge" : "replaceAll",
                    m = oC(h, v, d);
                vC(m, f, bt), n[f] = null, a.set(f, null), o.set(f, 0);
                var p = [],
                    g = [],
                    _ = 0,
                    y;
                D(m, function (x, S) {
                    var w = x.existing,
                        T = x.newOption;
                    if (!T) w && (w.mergeOption({}, this), w.optionUpdated({}, !1));
                    else {
                        var C = f === "series",
                            M = bt.getClass(f, x.keyInfo.subType, !C);
                        if (!M) return;
                        if (f === "tooltip") {
                            if (y) return;
                            y = !0
                        }
                        if (w && w.constructor === M) w.name = x.keyInfo.name, w.mergeOption(T, this), w.optionUpdated(T, !1);
                        else {
                            var I = O({
                                componentIndex: S
                            }, x.keyInfo);
                            w = new M(T, this, this, I), O(w, I), x.brandNew && (w.__requireNewView = !0), w.init(T, this, this), w.optionUpdated(null, !0)
                        }
                    }
                    w ? (p.push(w.option), g.push(w), _++) : (p.push(void 0), g.push(void 0))
                }, this), n[f] = p, a.set(f, g), o.set(f, _), f === "series" && Ya(this)
            }
            this._seriesIndices || Ya(this)
        }, t.prototype.getOption = function () {
            var e = ot(this.option);
            return D(e, function (i, n) {
                if (bt.hasClass(n)) {
                    for (var a = Zt(i), o = a.length, s = !1, l = o - 1; l >= 0; l--) a[l] && !Qn(a[l]) ? s = !0 : (a[l] = null, !s && o--);
                    a.length = o, e[n] = a
                }
            }), delete e[Ph], e
        }, t.prototype.getTheme = function () {
            return this._theme
        }, t.prototype.getLocaleModel = function () {
            return this._locale
        }, t.prototype.setUpdatePayload = function (e) {
            this._payload = e
        }, t.prototype.getUpdatePayload = function () {
            return this._payload
        }, t.prototype.getComponent = function (e, i) {
            var n = this._componentsMap.get(e);
            if (n) {
                var a = n[i || 0];
                if (a) return a;
                if (i == null) {
                    for (var o = 0; o < n.length; o++)
                        if (n[o]) return n[o]
                }
            }
        }, t.prototype.queryComponents = function (e) {
            var i = e.mainType;
            if (!i) return [];
            var n = e.index,
                a = e.id,
                o = e.name,
                s = this._componentsMap.get(i);
            if (!s || !s.length) return [];
            var l;
            return n != null ? (l = [], D(Zt(n), function (u) {
                s[u] && l.push(s[u])
            })) : a != null ? l = kh("id", a, s) : o != null ? l = kh("name", o, s) : l = Jt(s, function (u) {
                return !!u
            }), Eh(l, e)
        }, t.prototype.findComponents = function (e) {
            var i = e.query,
                n = e.mainType,
                a = s(i),
                o = a ? this.queryComponents(a) : Jt(this._componentsMap.get(n), function (u) {
                    return !!u
                });
            return l(Eh(o, e));

            function s(u) {
                var c = n + "Index",
                    f = n + "Id",
                    v = n + "Name";
                return u && (u[c] != null || u[f] != null || u[v] != null) ? {
                    mainType: n,
                    index: u[c],
                    id: u[f],
                    name: u[v]
                } : null
            }

            function l(u) {
                return e.filter ? Jt(u, e.filter) : u
            }
        }, t.prototype.eachComponent = function (e, i, n) {
            var a = this._componentsMap;
            if (Q(e)) {
                var o = i,
                    s = e;
                a.each(function (f, v) {
                    for (var h = 0; f && h < f.length; h++) {
                        var d = f[h];
                        d && s.call(o, v, d, d.componentIndex)
                    }
                })
            } else
                for (var l = V(e) ? a.get(e) : X(e) ? this.findComponents(e) : null, u = 0; l && u < l.length; u++) {
                    var c = l[u];
                    c && i.call(n, c, c.componentIndex)
                }
        }, t.prototype.getSeriesByName = function (e) {
            var i = Ue(e, null);
            return Jt(this._componentsMap.get("series"), function (n) {
                return !!n && i != null && n.name === i
            })
        }, t.prototype.getSeriesByIndex = function (e) {
            return this._componentsMap.get("series")[e]
        }, t.prototype.getSeriesByType = function (e) {
            return Jt(this._componentsMap.get("series"), function (i) {
                return !!i && i.subType === e
            })
        }, t.prototype.getSeries = function () {
            return Jt(this._componentsMap.get("series"), function (e) {
                return !!e
            })
        }, t.prototype.getSeriesCount = function () {
            return this._componentsCount.get("series")
        }, t.prototype.eachSeries = function (e, i) {
            gn(this), D(this._seriesIndices, function (n) {
                var a = this._componentsMap.get("series")[n];
                e.call(i, a, n)
            }, this)
        }, t.prototype.eachRawSeries = function (e, i) {
            D(this._componentsMap.get("series"), function (n) {
                n && e.call(i, n, n.componentIndex)
            })
        }, t.prototype.eachSeriesByType = function (e, i, n) {
            gn(this), D(this._seriesIndices, function (a) {
                var o = this._componentsMap.get("series")[a];
                o.subType === e && i.call(n, o, a)
            }, this)
        }, t.prototype.eachRawSeriesByType = function (e, i, n) {
            return D(this.getSeriesByType(e), i, n)
        }, t.prototype.isSeriesFiltered = function (e) {
            return gn(this), this._seriesIndicesMap.get(e.componentIndex) == null
        }, t.prototype.getCurrentSeriesIndices = function () {
            return (this._seriesIndices || []).slice()
        }, t.prototype.filterSeries = function (e, i) {
            gn(this);
            var n = [];
            D(this._seriesIndices, function (a) {
                var o = this._componentsMap.get("series")[a];
                e.call(i, o, a) && n.push(a)
            }, this), this._seriesIndices = n, this._seriesIndicesMap = it(n)
        }, t.prototype.restoreData = function (e) {
            Ya(this);
            var i = this._componentsMap,
                n = [];
            i.each(function (a, o) {
                bt.hasClass(o) && n.push(o)
            }), bt.topologicalTravel(n, bt.getAllClassMainTypes(), function (a) {
                D(i.get(a), function (o) {
                    o && (a !== "series" || !wM(o, e)) && o.restoreData()
                })
            })
        }, t.internalField = function () {
            Ya = function (e) {
                var i = e._seriesIndices = [];
                D(e._componentsMap.get("series"), function (n) {
                    n && i.push(n.componentIndex)
                }), e._seriesIndicesMap = it(i)
            }, gn = function (e) {}, Lh = function (e, i) {
                e.option = {}, e.option[Ph] = xM, e._componentsMap = it({
                    series: []
                }), e._componentsCount = it();
                var n = i.aria;
                X(n) && n.enabled == null && (n.enabled = !0), bM(i, e._theme.option), pt(i, cM, !1), e._mergeOption(i, null)
            }
        }(), t
    }(Xt);

function wM(r, t) {
    if (t) {
        var e = t.seriesIndex,
            i = t.seriesId,
            n = t.seriesName;
        return e != null && r.componentIndex !== e || i != null && r.id !== i || n != null && r.name !== n
    }
}

function bM(r, t) {
    var e = r.color && !r.colorLayer;
    D(t, function (i, n) {
        n === "colorLayer" && e || bt.hasClass(n) || (typeof i == "object" ? r[n] = r[n] ? pt(r[n], i, !1) : ot(i) : r[n] == null && (r[n] = i))
    })
}

function kh(r, t, e) {
    if (H(t)) {
        var i = it();
        return D(t, function (a) {
            if (a != null) {
                var o = Ue(a, null);
                o != null && i.set(a, !0)
            }
        }), Jt(e, function (a) {
            return a && i.get(a[r])
        })
    } else {
        var n = Ue(t, null);
        return Jt(e, function (a) {
            return a && n != null && a[r] === n
        })
    }
}

function Eh(r, t) {
    return t.hasOwnProperty("subType") ? Jt(r, function (e) {
        return e && e.subType === t.subType
    }) : r
}

function Rh(r) {
    var t = it();
    return r && D(Zt(r.replaceMerge), function (e) {
        t.set(e, !0)
    }), {
        replaceMergeMainTypeMap: t
    }
}
Ye(Ec, kc);
var SM = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isSSR", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getOption", "getId", "updateLabelLayout"],
    CM = function () {
        function r(t) {
            D(SM, function (e) {
                this[e] = xt(t[e], t)
            }, this)
        }
        return r
    }();
const Yg = CM;
var pl = {},
    Rc = function () {
        function r() {
            this._coordinateSystems = []
        }
        return r.prototype.create = function (t, e) {
            var i = [];
            D(pl, function (n, a) {
                var o = n.create(t, e);
                i = i.concat(o || [])
            }), this._coordinateSystems = i
        }, r.prototype.update = function (t, e) {
            D(this._coordinateSystems, function (i) {
                i.update && i.update(t, e)
            })
        }, r.prototype.getCoordinateSystems = function () {
            return this._coordinateSystems.slice()
        }, r.register = function (t, e) {
            pl[t] = e
        }, r.get = function (t) {
            return pl[t]
        }, r
    }(),
    TM = /^(min|max)?(.+)$/,
    MM = function () {
        function r(t) {
            this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t
        }
        return r.prototype.setOption = function (t, e, i) {
            t && (D(Zt(t.series), function (o) {
                o && o.data && se(o.data) && Ul(o.data)
            }), D(Zt(t.dataset), function (o) {
                o && o.source && se(o.source) && Ul(o.source)
            })), t = ot(t);
            var n = this._optionBackup,
                a = DM(t, e, !n);
            this._newBaseOption = a.baseOption, n ? (a.timelineOptions.length && (n.timelineOptions = a.timelineOptions), a.mediaList.length && (n.mediaList = a.mediaList), a.mediaDefault && (n.mediaDefault = a.mediaDefault)) : this._optionBackup = a
        }, r.prototype.mountOption = function (t) {
            var e = this._optionBackup;
            return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], ot(t ? e.baseOption : this._newBaseOption)
        }, r.prototype.getTimelineOption = function (t) {
            var e, i = this._timelineOptions;
            if (i.length) {
                var n = t.getComponent("timeline");
                n && (e = ot(i[n.getCurrentIndex()]))
            }
            return e
        }, r.prototype.getMediaOption = function (t) {
            var e = this._api.getWidth(),
                i = this._api.getHeight(),
                n = this._mediaList,
                a = this._mediaDefault,
                o = [],
                s = [];
            if (!n.length && !a) return s;
            for (var l = 0, u = n.length; l < u; l++) AM(n[l].query, e, i) && o.push(l);
            return !o.length && a && (o = [-1]), o.length && !LM(o, this._currentMediaIndices) && (s = Z(o, function (c) {
                return ot(c === -1 ? a.option : n[c].option)
            })), this._currentMediaIndices = o, s
        }, r
    }();

function DM(r, t, e) {
    var i = [],
        n, a, o = r.baseOption,
        s = r.timeline,
        l = r.options,
        u = r.media,
        c = !!r.media,
        f = !!(l || s || o && o.timeline);
    o ? (a = o, a.timeline || (a.timeline = s)) : ((f || c) && (r.options = r.media = null), a = r), c && H(u) && D(u, function (h) {
        h && h.option && (h.query ? i.push(h) : n || (n = h))
    }), v(a), D(l, function (h) {
        return v(h)
    }), D(i, function (h) {
        return v(h.option)
    });

    function v(h) {
        D(t, function (d) {
            d(h, e)
        })
    }
    return {
        baseOption: a,
        timelineOptions: l || [],
        mediaDefault: n,
        mediaList: i
    }
}

function AM(r, t, e) {
    var i = {
            width: t,
            height: e,
            aspectratio: t / e
        },
        n = !0;
    return D(r, function (a, o) {
        var s = o.match(TM);
        if (!(!s || !s[1] || !s[2])) {
            var l = s[1],
                u = s[2].toLowerCase();
            IM(i[u], a, l) || (n = !1)
        }
    }), n
}

function IM(r, t, e) {
    return e === "min" ? r >= t : e === "max" ? r <= t : r === t
}

function LM(r, t) {
    return r.join(",") === t.join(",")
}
const PM = MM;
var Ae = D,
    na = X,
    Oh = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];

function gl(r) {
    var t = r && r.itemStyle;
    if (t)
        for (var e = 0, i = Oh.length; e < i; e++) {
            var n = Oh[e],
                a = t.normal,
                o = t.emphasis;
            a && a[n] && (r[n] = r[n] || {}, r[n].normal ? pt(r[n].normal, a[n]) : r[n].normal = a[n], a[n] = null), o && o[n] && (r[n] = r[n] || {}, r[n].emphasis ? pt(r[n].emphasis, o[n]) : r[n].emphasis = o[n], o[n] = null)
        }
}

function Gt(r, t, e) {
    if (r && r[t] && (r[t].normal || r[t].emphasis)) {
        var i = r[t].normal,
            n = r[t].emphasis;
        i && (e ? (r[t].normal = r[t].emphasis = null, ht(r[t], i)) : r[t] = i), n && (r.emphasis = r.emphasis || {}, r.emphasis[t] = n, n.focus && (r.emphasis.focus = n.focus), n.blurScope && (r.emphasis.blurScope = n.blurScope))
    }
}

function kn(r) {
    Gt(r, "itemStyle"), Gt(r, "lineStyle"), Gt(r, "areaStyle"), Gt(r, "label"), Gt(r, "labelLine"), Gt(r, "upperLabel"), Gt(r, "edgeLabel")
}

function At(r, t) {
    var e = na(r) && r[t],
        i = na(e) && e.textStyle;
    if (i)
        for (var n = 0, a = Nf.length; n < a; n++) {
            var o = Nf[n];
            i.hasOwnProperty(o) && (e[o] = i[o])
        }
}

function _e(r) {
    r && (kn(r), At(r, "label"), r.emphasis && At(r.emphasis, "label"))
}

function kM(r) {
    if (na(r)) {
        gl(r), kn(r), At(r, "label"), At(r, "upperLabel"), At(r, "edgeLabel"), r.emphasis && (At(r.emphasis, "label"), At(r.emphasis, "upperLabel"), At(r.emphasis, "edgeLabel"));
        var t = r.markPoint;
        t && (gl(t), _e(t));
        var e = r.markLine;
        e && (gl(e), _e(e));
        var i = r.markArea;
        i && _e(i);
        var n = r.data;
        if (r.type === "graph") {
            n = n || r.nodes;
            var a = r.links || r.edges;
            if (a && !se(a))
                for (var o = 0; o < a.length; o++) _e(a[o]);
            D(r.categories, function (u) {
                kn(u)
            })
        }
        if (n && !se(n))
            for (var o = 0; o < n.length; o++) _e(n[o]);
        if (t = r.markPoint, t && t.data)
            for (var s = t.data, o = 0; o < s.length; o++) _e(s[o]);
        if (e = r.markLine, e && e.data)
            for (var l = e.data, o = 0; o < l.length; o++) H(l[o]) ? (_e(l[o][0]), _e(l[o][1])) : _e(l[o]);
        r.type === "gauge" ? (At(r, "axisLabel"), At(r, "title"), At(r, "detail")) : r.type === "treemap" ? (Gt(r.breadcrumb, "itemStyle"), D(r.levels, function (u) {
            kn(u)
        })) : r.type === "tree" && kn(r.leaves)
    }
}

function Qe(r) {
    return H(r) ? r : r ? [r] : []
}

function Bh(r) {
    return (H(r) ? r[0] : r) || {}
}

function EM(r, t) {
    Ae(Qe(r.series), function (i) {
        na(i) && kM(i)
    });
    var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
    t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Ae(e, function (i) {
        Ae(Qe(r[i]), function (n) {
            n && (At(n, "axisLabel"), At(n.axisPointer, "label"))
        })
    }), Ae(Qe(r.parallel), function (i) {
        var n = i && i.parallelAxisDefault;
        At(n, "axisLabel"), At(n && n.axisPointer, "label")
    }), Ae(Qe(r.calendar), function (i) {
        Gt(i, "itemStyle"), At(i, "dayLabel"), At(i, "monthLabel"), At(i, "yearLabel")
    }), Ae(Qe(r.radar), function (i) {
        At(i, "name"), i.name && i.axisName == null && (i.axisName = i.name, delete i.name), i.nameGap != null && i.axisNameGap == null && (i.axisNameGap = i.nameGap, delete i.nameGap)
    }), Ae(Qe(r.geo), function (i) {
        na(i) && (_e(i), Ae(Qe(i.regions), function (n) {
            _e(n)
        }))
    }), Ae(Qe(r.timeline), function (i) {
        _e(i), Gt(i, "label"), Gt(i, "itemStyle"), Gt(i, "controlStyle", !0);
        var n = i.data;
        H(n) && D(n, function (a) {
            X(a) && (Gt(a, "label"), Gt(a, "itemStyle"))
        })
    }), Ae(Qe(r.toolbox), function (i) {
        Gt(i, "iconStyle"), Ae(i.feature, function (n) {
            Gt(n, "iconStyle")
        })
    }), At(Bh(r.axisPointer), "label"), At(Bh(r.tooltip).axisPointer, "label")
}

function RM(r, t) {
    for (var e = t.split(","), i = r, n = 0; n < e.length && (i = i && i[e[n]], i != null); n++);
    return i
}

function OM(r, t, e, i) {
    for (var n = t.split(","), a = r, o, s = 0; s < n.length - 1; s++) o = n[s], a[o] == null && (a[o] = {}), a = a[o];
    (i || a[n[s]] == null) && (a[n[s]] = e)
}

function Nh(r) {
    r && D(BM, function (t) {
        t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]])
    })
}
var BM = [
        ["x", "left"],
        ["y", "top"],
        ["x2", "right"],
        ["y2", "bottom"]
    ],
    NM = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
    ml = [
        ["borderRadius", "barBorderRadius"],
        ["borderColor", "barBorderColor"],
        ["borderWidth", "barBorderWidth"]
    ];

function mn(r) {
    var t = r && r.itemStyle;
    if (t)
        for (var e = 0; e < ml.length; e++) {
            var i = ml[e][1],
                n = ml[e][0];
            t[i] != null && (t[n] = t[i])
        }
}

function Fh(r) {
    r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (r.edgeDistance = r.margin)
}

function $h(r) {
    r && r.downplay && !r.blur && (r.blur = r.downplay)
}

function FM(r) {
    r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (r.emphasis.focus = "adjacency"))
}

function Xg(r, t) {
    if (r)
        for (var e = 0; e < r.length; e++) t(r[e]), r[e] && Xg(r[e].children, t)
}

function Zg(r, t) {
    EM(r, t), r.series = Zt(r.series), D(r.series, function (e) {
        if (X(e)) {
            var i = e.type;
            if (i === "line") e.clipOverflow != null && (e.clip = e.clipOverflow);
            else if (i === "pie" || i === "gauge") {
                e.clockWise != null && (e.clockwise = e.clockWise), Fh(e.label);
                var n = e.data;
                if (n && !se(n))
                    for (var a = 0; a < n.length; a++) Fh(n[a]);
                e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (e.emphasis.scaleSize = e.hoverOffset))
            } else if (i === "gauge") {
                var o = RM(e, "pointer.color");
                o != null && OM(e, "itemStyle.color", o)
            } else if (i === "bar") {
                mn(e), mn(e.backgroundStyle), mn(e.emphasis);
                var n = e.data;
                if (n && !se(n))
                    for (var a = 0; a < n.length; a++) typeof n[a] == "object" && (mn(n[a]), mn(n[a] && n[a].emphasis))
            } else if (i === "sunburst") {
                var s = e.highlightPolicy;
                s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s)), $h(e), Xg(e.data, $h)
            } else i === "graph" || i === "sankey" ? FM(e) : i === "map" && (e.mapType && !e.map && (e.map = e.mapType), e.mapLocation && ht(e, e.mapLocation));
            e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (e.emphasis.scale = e.hoverAnimation)), Nh(e)
        }
    }), r.dataRange && (r.visualMap = r.dataRange), D(NM, function (e) {
        var i = r[e];
        i && (H(i) || (i = [i]), D(i, function (n) {
            Nh(n)
        }))
    })
}

function $M(r) {
    var t = it();
    r.eachSeries(function (e) {
        var i = e.get("stack");
        if (i) {
            var n = t.get(i) || t.set(i, []),
                a = e.getData(),
                o = {
                    stackResultDimension: a.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: a.getCalculationInfo("stackedDimension"),
                    stackedByDimension: a.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
                    data: a,
                    seriesModel: e
                };
            if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension)) return;
            n.length && a.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(o)
        }
    }), t.each(zM)
}

function zM(r) {
    D(r, function (t, e) {
        var i = [],
            n = [NaN, NaN],
            a = [t.stackResultDimension, t.stackedOverDimension],
            o = t.data,
            s = t.isStackedByIndex,
            l = t.seriesModel.get("stackStrategy") || "samesign";
        o.modify(a, function (u, c, f) {
            var v = o.get(t.stackedDimension, f);
            if (isNaN(v)) return n;
            var h, d;
            s ? d = o.getRawIndex(f) : h = o.get(t.stackedByDimension, f);
            for (var m = NaN, p = e - 1; p >= 0; p--) {
                var g = r[p];
                if (s || (d = g.data.rawIndexOf(g.stackedByDimension, h)), d >= 0) {
                    var _ = g.data.getByRawIndex(g.stackResultDimension, d);
                    if (l === "all" || l === "positive" && _ > 0 || l === "negative" && _ < 0 || l === "samesign" && v >= 0 && _ > 0 || l === "samesign" && v <= 0 && _ < 0) {
                        v = tC(v, _), m = _;
                        break
                    }
                }
            }
            return i[0] = v, i[1] = m, i
        })
    })
}
var ms = function () {
    function r(t) {
        this.data = t.data || (t.sourceFormat === Ze ? {} : []), this.sourceFormat = t.sourceFormat || Gg, this.seriesLayoutBy = t.seriesLayoutBy || rr, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
        var e = this.dimensionsDefine = t.dimensionsDefine;
        if (e)
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.type == null && Wg(this, i) === Bt.Must && (n.type = "ordinal")
            }
    }
    return r
}();

function Oc(r) {
    return r instanceof ms
}

function Su(r, t, e) {
    e = e || qg(r);
    var i = t.seriesLayoutBy,
        n = GM(r, e, i, t.sourceHeader, t.dimensions),
        a = new ms({
            data: r,
            sourceFormat: e,
            seriesLayoutBy: i,
            dimensionsDefine: n.dimensionsDefine,
            startIndex: n.startIndex,
            dimensionsDetectedCount: n.dimensionsDetectedCount,
            metaRawOption: ot(t)
        });
    return a
}

function Bc(r) {
    return new ms({
        data: r,
        sourceFormat: se(r) ? Ar : De
    })
}

function HM(r) {
    return new ms({
        data: r.data,
        sourceFormat: r.sourceFormat,
        seriesLayoutBy: r.seriesLayoutBy,
        dimensionsDefine: ot(r.dimensionsDefine),
        startIndex: r.startIndex,
        dimensionsDetectedCount: r.dimensionsDetectedCount
    })
}

function qg(r) {
    var t = Gg;
    if (se(r)) t = Ar;
    else if (H(r)) {
        r.length === 0 && (t = ue);
        for (var e = 0, i = r.length; e < i; e++) {
            var n = r[e];
            if (n != null) {
                if (H(n) || se(n)) {
                    t = ue;
                    break
                } else if (X(n)) {
                    t = Oe;
                    break
                }
            }
        }
    } else if (X(r)) {
        for (var a in r)
            if (qi(r, a) && oe(r[a])) {
                t = Ze;
                break
            }
    }
    return t
}

function GM(r, t, e, i, n) {
    var a, o;
    if (!r) return {
        dimensionsDefine: zh(n),
        startIndex: o,
        dimensionsDetectedCount: a
    };
    if (t === ue) {
        var s = r;
        i === "auto" || i == null ? Hh(function (u) {
            u != null && u !== "-" && (V(u) ? o == null && (o = 1) : o = 0)
        }, e, s, 10) : o = _t(i) ? i : i ? 1 : 0, !n && o === 1 && (n = [], Hh(function (u, c) {
            n[c] = u != null ? u + "" : ""
        }, e, s, 1 / 0)), a = n ? n.length : e === rn ? s.length : s[0] ? s[0].length : null
    } else if (t === Oe) n || (n = VM(r));
    else if (t === Ze) n || (n = [], D(r, function (u, c) {
        n.push(c)
    }));
    else if (t === De) {
        var l = ga(r[0]);
        a = H(l) && l.length || 1
    }
    return {
        startIndex: o,
        dimensionsDefine: zh(n),
        dimensionsDetectedCount: a
    }
}

function VM(r) {
    for (var t = 0, e; t < r.length && !(e = r[t++]););
    if (e) return wt(e)
}

function zh(r) {
    if (r) {
        var t = it();
        return Z(r, function (e, i) {
            e = X(e) ? e : {
                name: e
            };
            var n = {
                name: e.name,
                displayName: e.displayName,
                type: e.type
            };
            if (n.name == null) return n;
            n.name += "", n.displayName == null && (n.displayName = n.name);
            var a = t.get(n.name);
            return a ? n.name += "-" + a.count++ : t.set(n.name, {
                count: 1
            }), n
        })
    }
}

function Hh(r, t, e, i) {
    if (t === rn)
        for (var n = 0; n < e.length && n < i; n++) r(e[n] ? e[n][0] : null, n);
    else
        for (var a = e[0] || [], n = 0; n < a.length && n < i; n++) r(a[n], n)
}

function Kg(r) {
    var t = r.sourceFormat;
    return t === Oe || t === Ze
}
var jr, Qr, Jr, Gh, Vh, jg = function () {
        function r(t, e) {
            var i = Oc(t) ? t : Bc(t);
            this._source = i;
            var n = this._data = i.data;
            i.sourceFormat === Ar && (this._offset = 0, this._dimSize = e, this._data = n), Vh(this, n, i)
        }
        return r.prototype.getSource = function () {
            return this._source
        }, r.prototype.count = function () {
            return 0
        }, r.prototype.getItem = function (t, e) {}, r.prototype.appendData = function (t) {}, r.prototype.clean = function () {}, r.protoInitialize = function () {
            var t = r.prototype;
            t.pure = !1, t.persistent = !0
        }(), r.internalField = function () {
            var t;
            Vh = function (o, s, l) {
                var u = l.sourceFormat,
                    c = l.seriesLayoutBy,
                    f = l.startIndex,
                    v = l.dimensionsDefine,
                    h = Gh[Nc(u, c)];
                if (O(o, h), u === Ar) o.getItem = e, o.count = n, o.fillStorage = i;
                else {
                    var d = Qg(u, c);
                    o.getItem = xt(d, null, s, f, v);
                    var m = Jg(u, c);
                    o.count = xt(m, null, s, f, v)
                }
            };
            var e = function (o, s) {
                    o = o - this._offset, s = s || [];
                    for (var l = this._data, u = this._dimSize, c = u * o, f = 0; f < u; f++) s[f] = l[c + f];
                    return s
                },
                i = function (o, s, l, u) {
                    for (var c = this._data, f = this._dimSize, v = 0; v < f; v++) {
                        for (var h = u[v], d = h[0] == null ? 1 / 0 : h[0], m = h[1] == null ? -1 / 0 : h[1], p = s - o, g = l[v], _ = 0; _ < p; _++) {
                            var y = c[_ * f + v];
                            g[o + _] = y, y < d && (d = y), y > m && (m = y)
                        }
                        h[0] = d, h[1] = m
                    }
                },
                n = function () {
                    return this._data ? this._data.length / this._dimSize : 0
                };
            Gh = (t = {}, t[ue + "_" + rr] = {
                pure: !0,
                appendData: a
            }, t[ue + "_" + rn] = {
                pure: !0,
                appendData: function () {
                    throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
                }
            }, t[Oe] = {
                pure: !0,
                appendData: a
            }, t[Ze] = {
                pure: !0,
                appendData: function (o) {
                    var s = this._data;
                    D(o, function (l, u) {
                        for (var c = s[u] || (s[u] = []), f = 0; f < (l || []).length; f++) c.push(l[f])
                    })
                }
            }, t[De] = {
                appendData: a
            }, t[Ar] = {
                persistent: !1,
                pure: !0,
                appendData: function (o) {
                    this._data = o
                },
                clean: function () {
                    this._offset += this.count(), this._data = null
                }
            }, t);

            function a(o) {
                for (var s = 0; s < o.length; s++) this._data.push(o[s])
            }
        }(), r
    }(),
    Wh = function (r, t, e, i) {
        return r[i]
    },
    WM = (jr = {}, jr[ue + "_" + rr] = function (r, t, e, i) {
        return r[i + t]
    }, jr[ue + "_" + rn] = function (r, t, e, i, n) {
        i += t;
        for (var a = n || [], o = r, s = 0; s < o.length; s++) {
            var l = o[s];
            a[s] = l ? l[i] : null
        }
        return a
    }, jr[Oe] = Wh, jr[Ze] = function (r, t, e, i, n) {
        for (var a = n || [], o = 0; o < e.length; o++) {
            var s = e[o].name,
                l = r[s];
            a[o] = l ? l[i] : null
        }
        return a
    }, jr[De] = Wh, jr);

function Qg(r, t) {
    var e = WM[Nc(r, t)];
    return e
}
var Uh = function (r, t, e) {
        return r.length
    },
    UM = (Qr = {}, Qr[ue + "_" + rr] = function (r, t, e) {
        return Math.max(0, r.length - t)
    }, Qr[ue + "_" + rn] = function (r, t, e) {
        var i = r[0];
        return i ? Math.max(0, i.length - t) : 0
    }, Qr[Oe] = Uh, Qr[Ze] = function (r, t, e) {
        var i = e[0].name,
            n = r[i];
        return n ? n.length : 0
    }, Qr[De] = Uh, Qr);

function Jg(r, t) {
    var e = UM[Nc(r, t)];
    return e
}
var _l = function (r, t, e) {
        return r[t]
    },
    YM = (Jr = {}, Jr[ue] = _l, Jr[Oe] = function (r, t, e) {
        return r[e]
    }, Jr[Ze] = _l, Jr[De] = function (r, t, e) {
        var i = ga(r);
        return i instanceof Array ? i[t] : i
    }, Jr[Ar] = _l, Jr);

function t0(r) {
    var t = YM[r];
    return t
}

function Nc(r, t) {
    return r === ue ? r + "_" + t : r
}

function Ki(r, t, e) {
    if (r) {
        var i = r.getRawDataItem(t);
        if (i != null) {
            var n = r.getStore(),
                a = n.getSource().sourceFormat;
            if (e != null) {
                var o = r.getDimensionIndex(e),
                    s = n.getDimensionProperty(o);
                return t0(a)(i, o, s)
            } else {
                var l = i;
                return a === De && (l = ga(i)), l
            }
        }
    }
}
var XM = /\{@(.+?)\}/g,
    ZM = function () {
        function r() {}
        return r.prototype.getDataParams = function (t, e) {
            var i = this.getData(e),
                n = this.getRawValue(t, e),
                a = i.getRawIndex(t),
                o = i.getName(t),
                s = i.getRawDataItem(t),
                l = i.getItemVisual(t, "style"),
                u = l && l[i.getItemVisual(t, "drawType") || "fill"],
                c = l && l.stroke,
                f = this.mainType,
                v = f === "series",
                h = i.userOutput && i.userOutput.get();
            return {
                componentType: f,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: v ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: v ? this.id : null,
                seriesName: v ? this.name : null,
                name: o,
                dataIndex: a,
                data: s,
                dataType: e,
                value: n,
                color: u,
                borderColor: c,
                dimensionNames: h ? h.fullDimensions : null,
                encode: h ? h.encode : null,
                $vars: ["seriesName", "name", "value"]
            }
        }, r.prototype.getFormattedLabel = function (t, e, i, n, a, o) {
            e = e || "normal";
            var s = this.getData(i),
                l = this.getDataParams(t, i);
            if (o && (l.value = o.interpolatedValue), n != null && H(l.value) && (l.value = l.value[n]), !a) {
                var u = s.getItemModel(t);
                a = u.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"])
            }
            if (Q(a)) return l.status = e, l.dimensionIndex = n, a(l);
            if (V(a)) {
                var c = Fg(a, l);
                return c.replace(XM, function (f, v) {
                    var h = v.length,
                        d = v;
                    d.charAt(0) === "[" && d.charAt(h - 1) === "]" && (d = +d.slice(1, h - 1));
                    var m = Ki(s, t, d);
                    if (o && H(o.interpolatedValue)) {
                        var p = s.getDimensionIndex(d);
                        p >= 0 && (m = o.interpolatedValue[p])
                    }
                    return m != null ? m + "" : ""
                })
            }
        }, r.prototype.getRawValue = function (t, e) {
            return Ki(this.getData(e), t)
        }, r.prototype.formatTooltip = function (t, e, i) {}, r
    }();

function Yh(r) {
    var t, e;
    return X(r) ? r.type && (e = r) : t = r, {
        text: t,
        frag: e
    }
}

function Wn(r) {
    return new qM(r)
}
var qM = function () {
        function r(t) {
            t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0
        }
        return r.prototype.perform = function (t) {
            var e = this._upstream,
                i = t && t.skip;
            if (this._dirty && e) {
                var n = this.context;
                n.data = n.outputData = e.context.outputData
            }
            this.__pipeline && (this.__pipeline.currentTask = this);
            var a;
            this._plan && !i && (a = this._plan(this.context));
            var o = c(this._modBy),
                s = this._modDataCount || 0,
                l = c(t && t.modBy),
                u = t && t.modDataCount || 0;
            (o !== l || s !== u) && (a = "reset");

            function c(_) {
                return !(_ >= 1) && (_ = 1), _
            }
            var f;
            (this._dirty || a === "reset") && (this._dirty = !1, f = this._doReset(i)), this._modBy = l, this._modDataCount = u;
            var v = t && t.step;
            if (e ? this._dueEnd = e._outputDueEnd : this._dueEnd = this._count ? this._count(this.context) : 1 / 0, this._progress) {
                var h = this._dueIndex,
                    d = Math.min(v != null ? this._dueIndex + v : 1 / 0, this._dueEnd);
                if (!i && (f || h < d)) {
                    var m = this._progress;
                    if (H(m))
                        for (var p = 0; p < m.length; p++) this._doProgress(m[p], h, d, l, u);
                    else this._doProgress(m, h, d, l, u)
                }
                this._dueIndex = d;
                var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
                this._outputDueEnd = g
            } else this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
            return this.unfinished()
        }, r.prototype.dirty = function () {
            this._dirty = !0, this._onDirty && this._onDirty(this.context)
        }, r.prototype._doProgress = function (t, e, i, n, a) {
            Xh.reset(e, i, n, a), this._callingProgress = t, this._callingProgress({
                start: e,
                end: i,
                count: i - e,
                next: Xh.next
            }, this.context)
        }, r.prototype._doReset = function (t) {
            this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
            var e, i;
            !t && this._reset && (e = this._reset(this.context), e && e.progress && (i = e.forceFirstProgress, e = e.progress), H(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
            var n = this._downstream;
            return n && n.dirty(), i
        }, r.prototype.unfinished = function () {
            return this._progress && this._dueIndex < this._dueEnd
        }, r.prototype.pipe = function (t) {
            (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
        }, r.prototype.dispose = function () {
            this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
        }, r.prototype.getUpstream = function () {
            return this._upstream
        }, r.prototype.getDownstream = function () {
            return this._downstream
        }, r.prototype.setOutputEnd = function (t) {
            this._outputDueEnd = this._settedOutputEnd = t
        }, r
    }(),
    Xh = function () {
        var r, t, e, i, n, a = {
            reset: function (l, u, c, f) {
                t = l, r = u, e = c, i = f, n = Math.ceil(i / e), a.next = e > 1 && i > 0 ? s : o
            }
        };
        return a;

        function o() {
            return t < r ? t++ : null
        }

        function s() {
            var l = t % n * e + Math.ceil(t / n),
                u = t >= r ? null : l < i ? l : t;
            return t++, u
        }
    }();

function wo(r, t) {
    var e = t && t.type;
    return e === "ordinal" ? r : (e === "time" && !_t(r) && r != null && r !== "-" && (r = +ar(r)), r == null || r === "" ? NaN : +r)
}
it({
    number: function (r) {
        return parseFloat(r)
    },
    time: function (r) {
        return +ar(r)
    },
    trim: function (r) {
        return V(r) ? Ve(r) : r
    }
});
var KM = function () {
        function r(t, e) {
            var i = t === "desc";
            this._resultLT = i ? 1 : -1, e == null && (e = i ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0
        }
        return r.prototype.evaluate = function (t, e) {
            var i = _t(t) ? t : ko(t),
                n = _t(e) ? e : ko(e),
                a = isNaN(i),
                o = isNaN(n);
            if (a && (i = this._incomparable), o && (n = this._incomparable), a && o) {
                var s = V(t),
                    l = V(e);
                s && (i = l ? t : 0), l && (n = s ? e : 0)
            }
            return i < n ? this._resultLT : i > n ? -this._resultLT : 0
        }, r
    }(),
    jM = function () {
        function r() {}
        return r.prototype.getRawData = function () {
            throw new Error("not supported")
        }, r.prototype.getRawDataItem = function (t) {
            throw new Error("not supported")
        }, r.prototype.cloneRawData = function () {}, r.prototype.getDimensionInfo = function (t) {}, r.prototype.cloneAllDimensionInfo = function () {}, r.prototype.count = function () {}, r.prototype.retrieveValue = function (t, e) {}, r.prototype.retrieveValueFromItem = function (t, e) {}, r.prototype.convertValue = function (t, e) {
            return wo(t, e)
        }, r
    }();

function QM(r, t) {
    var e = new jM,
        i = r.data,
        n = e.sourceFormat = r.sourceFormat,
        a = r.startIndex,
        o = "";
    r.seriesLayoutBy !== rr && te(o);
    var s = [],
        l = {},
        u = r.dimensionsDefine;
    if (u) D(u, function (m, p) {
        var g = m.name,
            _ = {
                index: p,
                name: g,
                displayName: m.displayName
            };
        if (s.push(_), g != null) {
            var y = "";
            qi(l, g) && te(y), l[g] = _
        }
    });
    else
        for (var c = 0; c < r.dimensionsDetectedCount; c++) s.push({
            index: c
        });
    var f = Qg(n, rr);
    t.__isBuiltIn && (e.getRawDataItem = function (m) {
        return f(i, a, s, m)
    }, e.getRawData = xt(JM, null, r)), e.cloneRawData = xt(tD, null, r);
    var v = Jg(n, rr);
    e.count = xt(v, null, i, a, s);
    var h = t0(n);
    e.retrieveValue = function (m, p) {
        var g = f(i, a, s, m);
        return d(g, p)
    };
    var d = e.retrieveValueFromItem = function (m, p) {
        if (m != null) {
            var g = s[p];
            if (g) return h(m, p, g.name)
        }
    };
    return e.getDimensionInfo = xt(eD, null, s, l), e.cloneAllDimensionInfo = xt(rD, null, s), e
}

function JM(r) {
    var t = r.sourceFormat;
    if (!Fc(t)) {
        var e = "";
        te(e)
    }
    return r.data
}

function tD(r) {
    var t = r.sourceFormat,
        e = r.data;
    if (!Fc(t)) {
        var i = "";
        te(i)
    }
    if (t === ue) {
        for (var n = [], a = 0, o = e.length; a < o; a++) n.push(e[a].slice());
        return n
    } else if (t === Oe) {
        for (var n = [], a = 0, o = e.length; a < o; a++) n.push(O({}, e[a]));
        return n
    }
}

function eD(r, t, e) {
    if (e != null) {
        if (_t(e) || !isNaN(e) && !qi(t, e)) return r[e];
        if (qi(t, e)) return t[e]
    }
}

function rD(r) {
    return ot(r)
}
var e0 = it();

function iD(r) {
    r = ot(r);
    var t = r.type,
        e = "";
    t || te(e);
    var i = t.split(":");
    i.length !== 2 && te(e);
    var n = !1;
    i[0] === "echarts" && (t = i[1], n = !0), r.__isBuiltIn = n, e0.set(t, r)
}

function nD(r, t, e) {
    var i = Zt(r),
        n = i.length,
        a = "";
    n || te(a);
    for (var o = 0, s = n; o < s; o++) {
        var l = i[o];
        t = aD(l, t), o !== s - 1 && (t.length = Math.max(t.length, 1))
    }
    return t
}

function aD(r, t, e, i) {
    var n = "";
    t.length || te(n), X(r) || te(n);
    var a = r.type,
        o = e0.get(a);
    o || te(n);
    var s = Z(t, function (u) {
            return QM(u, o)
        }),
        l = Zt(o.transform({
            upstream: s[0],
            upstreamList: s,
            config: ot(r.config)
        }));
    return Z(l, function (u, c) {
        var f = "";
        X(u) || te(f), u.data || te(f);
        var v = qg(u.data);
        Fc(v) || te(f);
        var h, d = t[0];
        if (d && c === 0 && !u.dimensions) {
            var m = d.startIndex;
            m && (u.data = d.data.slice(0, m).concat(u.data)), h = {
                seriesLayoutBy: rr,
                sourceHeader: m,
                dimensions: d.metaRawOption.dimensions
            }
        } else h = {
            seriesLayoutBy: rr,
            sourceHeader: 0,
            dimensions: u.dimensions
        };
        return Su(u.data, h, null)
    })
}

function Fc(r) {
    return r === ue || r === Oe
}
var _s = "undefined",
    oD = typeof Uint32Array === _s ? Array : Uint32Array,
    sD = typeof Uint16Array === _s ? Array : Uint16Array,
    r0 = typeof Int32Array === _s ? Array : Int32Array,
    Zh = typeof Float64Array === _s ? Array : Float64Array,
    i0 = {
        float: Zh,
        int: r0,
        ordinal: Array,
        number: Array,
        time: Zh
    },
    yl;

function _n(r) {
    return r > 65535 ? oD : sD
}

function Li() {
    return [1 / 0, -1 / 0]
}

function lD(r) {
    var t = r.constructor;
    return t === Array ? r.slice() : new t(r)
}

function qh(r, t, e, i, n) {
    var a = i0[e || "float"];
    if (n) {
        var o = r[t],
            s = o && o.length;
        if (s !== i) {
            for (var l = new a(i), u = 0; u < s; u++) l[u] = o[u];
            r[t] = l
        }
    } else r[t] = new a(i)
}
var Cu = function () {
        function r() {
            this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = it()
        }
        return r.prototype.initData = function (t, e, i) {
            this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
            var n = t.getSource(),
                a = this.defaultDimValueGetter = yl[n.sourceFormat];
            this._dimValueGetter = i || a, this._rawExtent = [], Kg(n), this._dimensions = Z(e, function (o) {
                return {
                    type: o.type,
                    property: o.property
                }
            }), this._initDataFromProvider(0, t.count())
        }, r.prototype.getProvider = function () {
            return this._provider
        }, r.prototype.getSource = function () {
            return this._provider.getSource()
        }, r.prototype.ensureCalculationDimension = function (t, e) {
            var i = this._calcDimNameToIdx,
                n = this._dimensions,
                a = i.get(t);
            if (a != null) {
                if (n[a].type === e) return a
            } else a = n.length;
            return n[a] = {
                type: e
            }, i.set(t, a), this._chunks[a] = new i0[e || "float"](this._rawCount), this._rawExtent[a] = Li(), a
        }, r.prototype.collectOrdinalMeta = function (t, e) {
            var i = this._chunks[t],
                n = this._dimensions[t],
                a = this._rawExtent,
                o = n.ordinalOffset || 0,
                s = i.length;
            o === 0 && (a[t] = Li());
            for (var l = a[t], u = o; u < s; u++) {
                var c = i[u] = e.parseAndCollect(i[u]);
                isNaN(c) || (l[0] = Math.min(c, l[0]), l[1] = Math.max(c, l[1]))
            }
            n.ordinalMeta = e, n.ordinalOffset = s, n.type = "ordinal"
        }, r.prototype.getOrdinalMeta = function (t) {
            var e = this._dimensions[t],
                i = e.ordinalMeta;
            return i
        }, r.prototype.getDimensionProperty = function (t) {
            var e = this._dimensions[t];
            return e && e.property
        }, r.prototype.appendData = function (t) {
            var e = this._provider,
                i = this.count();
            e.appendData(t);
            var n = e.count();
            return e.persistent || (n += i), i < n && this._initDataFromProvider(i, n, !0), [i, n]
        }, r.prototype.appendValues = function (t, e) {
            for (var i = this._chunks, n = this._dimensions, a = n.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e || 0), u = 0; u < a; u++) {
                var c = n[u];
                qh(i, u, c.type, l, !0)
            }
            for (var f = [], v = s; v < l; v++)
                for (var h = v - s, d = 0; d < a; d++) {
                    var c = n[d],
                        m = yl.arrayRows.call(this, t[h] || f, c.property, h, d);
                    i[d][v] = m;
                    var p = o[d];
                    m < p[0] && (p[0] = m), m > p[1] && (p[1] = m)
                }
            return this._rawCount = this._count = l, {
                start: s,
                end: l
            }
        }, r.prototype._initDataFromProvider = function (t, e, i) {
            for (var n = this._provider, a = this._chunks, o = this._dimensions, s = o.length, l = this._rawExtent, u = Z(o, function (_) {
                    return _.property
                }), c = 0; c < s; c++) {
                var f = o[c];
                l[c] || (l[c] = Li()), qh(a, c, f.type, e, i)
            }
            if (n.fillStorage) n.fillStorage(t, e, a, l);
            else
                for (var v = [], h = t; h < e; h++) {
                    v = n.getItem(h, v);
                    for (var d = 0; d < s; d++) {
                        var m = a[d],
                            p = this._dimValueGetter(v, u[d], h, d);
                        m[h] = p;
                        var g = l[d];
                        p < g[0] && (g[0] = p), p > g[1] && (g[1] = p)
                    }
                }!n.persistent && n.clean && n.clean(), this._rawCount = this._count = e, this._extent = []
        }, r.prototype.count = function () {
            return this._count
        }, r.prototype.get = function (t, e) {
            if (!(e >= 0 && e < this._count)) return NaN;
            var i = this._chunks[t];
            return i ? i[this.getRawIndex(e)] : NaN
        }, r.prototype.getValues = function (t, e) {
            var i = [],
                n = [];
            if (e == null) {
                e = t, t = [];
                for (var a = 0; a < this._dimensions.length; a++) n.push(a)
            } else n = t;
            for (var a = 0, o = n.length; a < o; a++) i.push(this.get(n[a], e));
            return i
        }, r.prototype.getByRawIndex = function (t, e) {
            if (!(e >= 0 && e < this._rawCount)) return NaN;
            var i = this._chunks[t];
            return i ? i[e] : NaN
        }, r.prototype.getSum = function (t) {
            var e = this._chunks[t],
                i = 0;
            if (e)
                for (var n = 0, a = this.count(); n < a; n++) {
                    var o = this.get(t, n);
                    isNaN(o) || (i += o)
                }
            return i
        }, r.prototype.getMedian = function (t) {
            var e = [];
            this.each([t], function (a) {
                isNaN(a) || e.push(a)
            });
            var i = e.sort(function (a, o) {
                    return a - o
                }),
                n = this.count();
            return n === 0 ? 0 : n % 2 === 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2
        }, r.prototype.indexOfRawIndex = function (t) {
            if (t >= this._rawCount || t < 0) return -1;
            if (!this._indices) return t;
            var e = this._indices,
                i = e[t];
            if (i != null && i < this._count && i === t) return t;
            for (var n = 0, a = this._count - 1; n <= a;) {
                var o = (n + a) / 2 | 0;
                if (e[o] < t) n = o + 1;
                else if (e[o] > t) a = o - 1;
                else return o
            }
            return -1
        }, r.prototype.indicesOfNearest = function (t, e, i) {
            var n = this._chunks,
                a = n[t],
                o = [];
            if (!a) return o;
            i == null && (i = 1 / 0);
            for (var s = 1 / 0, l = -1, u = 0, c = 0, f = this.count(); c < f; c++) {
                var v = this.getRawIndex(c),
                    h = e - a[v],
                    d = Math.abs(h);
                d <= i && ((d < s || d === s && h >= 0 && l < 0) && (s = d, l = h, u = 0), h === l && (o[u++] = c))
            }
            return o.length = u, o
        }, r.prototype.getIndices = function () {
            var t, e = this._indices;
            if (e) {
                var i = e.constructor,
                    n = this._count;
                if (i === Array) {
                    t = new i(n);
                    for (var a = 0; a < n; a++) t[a] = e[a]
                } else t = new i(e.buffer, 0, n)
            } else {
                var i = _n(this._rawCount);
                t = new i(this.count());
                for (var a = 0; a < t.length; a++) t[a] = a
            }
            return t
        }, r.prototype.filter = function (t, e) {
            if (!this._count) return this;
            for (var i = this.clone(), n = i.count(), a = _n(i._rawCount), o = new a(n), s = [], l = t.length, u = 0, c = t[0], f = i._chunks, v = 0; v < n; v++) {
                var h = void 0,
                    d = i.getRawIndex(v);
                if (l === 0) h = e(v);
                else if (l === 1) {
                    var m = f[c][d];
                    h = e(m, v)
                } else {
                    for (var p = 0; p < l; p++) s[p] = f[t[p]][d];
                    s[p] = v, h = e.apply(null, s)
                }
                h && (o[u++] = d)
            }
            return u < n && (i._indices = o), i._count = u, i._extent = [], i._updateGetRawIdx(), i
        }, r.prototype.selectRange = function (t) {
            var e = this.clone(),
                i = e._count;
            if (!i) return this;
            var n = wt(t),
                a = n.length;
            if (!a) return this;
            var o = e.count(),
                s = _n(e._rawCount),
                l = new s(o),
                u = 0,
                c = n[0],
                f = t[c][0],
                v = t[c][1],
                h = e._chunks,
                d = !1;
            if (!e._indices) {
                var m = 0;
                if (a === 1) {
                    for (var p = h[n[0]], g = 0; g < i; g++) {
                        var _ = p[g];
                        (_ >= f && _ <= v || isNaN(_)) && (l[u++] = m), m++
                    }
                    d = !0
                } else if (a === 2) {
                    for (var p = h[n[0]], y = h[n[1]], x = t[n[1]][0], S = t[n[1]][1], g = 0; g < i; g++) {
                        var _ = p[g],
                            w = y[g];
                        (_ >= f && _ <= v || isNaN(_)) && (w >= x && w <= S || isNaN(w)) && (l[u++] = m), m++
                    }
                    d = !0
                }
            }
            if (!d)
                if (a === 1)
                    for (var g = 0; g < o; g++) {
                        var T = e.getRawIndex(g),
                            _ = h[n[0]][T];
                        (_ >= f && _ <= v || isNaN(_)) && (l[u++] = T)
                    } else
                        for (var g = 0; g < o; g++) {
                            for (var C = !0, T = e.getRawIndex(g), M = 0; M < a; M++) {
                                var I = n[M],
                                    _ = h[I][T];
                                (_ < t[I][0] || _ > t[I][1]) && (C = !1)
                            }
                            C && (l[u++] = e.getRawIndex(g))
                        }
            return u < o && (e._indices = l), e._count = u, e._extent = [], e._updateGetRawIdx(), e
        }, r.prototype.map = function (t, e) {
            var i = this.clone(t);
            return this._updateDims(i, t, e), i
        }, r.prototype.modify = function (t, e) {
            this._updateDims(this, t, e)
        }, r.prototype._updateDims = function (t, e, i) {
            for (var n = t._chunks, a = [], o = e.length, s = t.count(), l = [], u = t._rawExtent, c = 0; c < e.length; c++) u[e[c]] = Li();
            for (var f = 0; f < s; f++) {
                for (var v = t.getRawIndex(f), h = 0; h < o; h++) l[h] = n[e[h]][v];
                l[o] = f;
                var d = i && i.apply(null, l);
                if (d != null) {
                    typeof d != "object" && (a[0] = d, d = a);
                    for (var c = 0; c < d.length; c++) {
                        var m = e[c],
                            p = d[c],
                            g = u[m],
                            _ = n[m];
                        _ && (_[v] = p), p < g[0] && (g[0] = p), p > g[1] && (g[1] = p)
                    }
                }
            }
        }, r.prototype.lttbDownSample = function (t, e) {
            var i = this.clone([t], !0),
                n = i._chunks,
                a = n[t],
                o = this.count(),
                s = 0,
                l = Math.floor(1 / e),
                u = this.getRawIndex(0),
                c, f, v, h = new(_n(this._rawCount))(Math.min((Math.ceil(o / l) + 2) * 2, o));
            h[s++] = u;
            for (var d = 1; d < o - 1; d += l) {
                for (var m = Math.min(d + l, o - 1), p = Math.min(d + l * 2, o), g = (p + m) / 2, _ = 0, y = m; y < p; y++) {
                    var x = this.getRawIndex(y),
                        S = a[x];
                    isNaN(S) || (_ += S)
                }
                _ /= p - m;
                var w = d,
                    T = Math.min(d + l, o),
                    C = d - 1,
                    M = a[u];
                c = -1, v = w;
                for (var I = -1, A = 0, y = w; y < T; y++) {
                    var x = this.getRawIndex(y),
                        S = a[x];
                    if (isNaN(S)) {
                        A++, I < 0 && (I = x);
                        continue
                    }
                    f = Math.abs((C - g) * (S - M) - (C - y) * (_ - M)), f > c && (c = f, v = x)
                }
                A > 0 && A < T - w && (h[s++] = Math.min(I, v), v = Math.max(I, v)), h[s++] = v, u = v
            }
            return h[s++] = this.getRawIndex(o - 1), i._count = s, i._indices = h, i.getRawIndex = this._getRawIdx, i
        }, r.prototype.downSample = function (t, e, i, n) {
            for (var a = this.clone([t], !0), o = a._chunks, s = [], l = Math.floor(1 / e), u = o[t], c = this.count(), f = a._rawExtent[t] = Li(), v = new(_n(this._rawCount))(Math.ceil(c / l)), h = 0, d = 0; d < c; d += l) {
                l > c - d && (l = c - d, s.length = l);
                for (var m = 0; m < l; m++) {
                    var p = this.getRawIndex(d + m);
                    s[m] = u[p]
                }
                var g = i(s),
                    _ = this.getRawIndex(Math.min(d + n(s, g) || 0, c - 1));
                u[_] = g, g < f[0] && (f[0] = g), g > f[1] && (f[1] = g), v[h++] = _
            }
            return a._count = h, a._indices = v, a._updateGetRawIdx(), a
        }, r.prototype.each = function (t, e) {
            if (this._count)
                for (var i = t.length, n = this._chunks, a = 0, o = this.count(); a < o; a++) {
                    var s = this.getRawIndex(a);
                    switch (i) {
                        case 0:
                            e(a);
                            break;
                        case 1:
                            e(n[t[0]][s], a);
                            break;
                        case 2:
                            e(n[t[0]][s], n[t[1]][s], a);
                            break;
                        default:
                            for (var l = 0, u = []; l < i; l++) u[l] = n[t[l]][s];
                            u[l] = a, e.apply(null, u)
                    }
                }
        }, r.prototype.getDataExtent = function (t) {
            var e = this._chunks[t],
                i = Li();
            if (!e) return i;
            var n = this.count(),
                a = !this._indices,
                o;
            if (a) return this._rawExtent[t].slice();
            if (o = this._extent[t], o) return o.slice();
            o = i;
            for (var s = o[0], l = o[1], u = 0; u < n; u++) {
                var c = this.getRawIndex(u),
                    f = e[c];
                f < s && (s = f), f > l && (l = f)
            }
            return o = [s, l], this._extent[t] = o, o
        }, r.prototype.getRawDataItem = function (t) {
            var e = this.getRawIndex(t);
            if (this._provider.persistent) return this._provider.getItem(e);
            for (var i = [], n = this._chunks, a = 0; a < n.length; a++) i.push(n[a][e]);
            return i
        }, r.prototype.clone = function (t, e) {
            var i = new r,
                n = this._chunks,
                a = t && Ir(t, function (s, l) {
                    return s[l] = !0, s
                }, {});
            if (a)
                for (var o = 0; o < n.length; o++) i._chunks[o] = a[o] ? lD(n[o]) : n[o];
            else i._chunks = n;
            return this._copyCommonProps(i), e || (i._indices = this._cloneIndices()), i._updateGetRawIdx(), i
        }, r.prototype._copyCommonProps = function (t) {
            t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = ot(this._extent), t._rawExtent = ot(this._rawExtent)
        }, r.prototype._cloneIndices = function () {
            if (this._indices) {
                var t = this._indices.constructor,
                    e = void 0;
                if (t === Array) {
                    var i = this._indices.length;
                    e = new t(i);
                    for (var n = 0; n < i; n++) e[n] = this._indices[n]
                } else e = new t(this._indices);
                return e
            }
            return null
        }, r.prototype._getRawIdxIdentity = function (t) {
            return t
        }, r.prototype._getRawIdx = function (t) {
            return t < this._count && t >= 0 ? this._indices[t] : -1
        }, r.prototype._updateGetRawIdx = function () {
            this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity
        }, r.internalField = function () {
            function t(e, i, n, a) {
                return wo(e[a], this._dimensions[a])
            }
            yl = {
                arrayRows: t,
                objectRows: function (e, i, n, a) {
                    return wo(e[i], this._dimensions[a])
                },
                keyedColumns: t,
                original: function (e, i, n, a) {
                    var o = e && (e.value == null ? e : e.value);
                    return wo(o instanceof Array ? o[a] : o, this._dimensions[a])
                },
                typedArray: function (e, i, n, a) {
                    return e[a]
                }
            }
        }(), r
    }(),
    uD = function () {
        function r(t) {
            this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t
        }
        return r.prototype.dirty = function () {
            this._setLocalSource([], []), this._storeList = [], this._dirty = !0
        }, r.prototype._setLocalSource = function (t, e) {
            this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0)
        }, r.prototype._getVersionSign = function () {
            return this._sourceHost.uid + "_" + this._versionSignBase
        }, r.prototype.prepareSource = function () {
            this._isDirty() && (this._createSource(), this._dirty = !1)
        }, r.prototype._createSource = function () {
            this._setLocalSource([], []);
            var t = this._sourceHost,
                e = this._getUpstreamSourceManagers(),
                i = !!e.length,
                n, a;
            if (Xa(t)) {
                var o = t,
                    s = void 0,
                    l = void 0,
                    u = void 0;
                if (i) {
                    var c = e[0];
                    c.prepareSource(), u = c.getSource(), s = u.data, l = u.sourceFormat, a = [c._getVersionSign()]
                } else s = o.get("data", !0), l = se(s) ? Ar : De, a = [];
                var f = this._getSourceMetaRawOption() || {},
                    v = u && u.metaRawOption || {},
                    h = rt(f.seriesLayoutBy, v.seriesLayoutBy) || null,
                    d = rt(f.sourceHeader, v.sourceHeader),
                    m = rt(f.dimensions, v.dimensions),
                    p = h !== v.seriesLayoutBy || !!d != !!v.sourceHeader || m;
                n = p ? [Su(s, {
                    seriesLayoutBy: h,
                    sourceHeader: d,
                    dimensions: m
                }, l)] : []
            } else {
                var g = t;
                if (i) {
                    var _ = this._applyTransform(e);
                    n = _.sourceList, a = _.upstreamSignList
                } else {
                    var y = g.get("source", !0);
                    n = [Su(y, this._getSourceMetaRawOption(), null)], a = []
                }
            }
            this._setLocalSource(n, a)
        }, r.prototype._applyTransform = function (t) {
            var e = this._sourceHost,
                i = e.get("transform", !0),
                n = e.get("fromTransformResult", !0);
            if (n != null) {
                var a = "";
                t.length !== 1 && Kh(a)
            }
            var o, s = [],
                l = [];
            return D(t, function (u) {
                u.prepareSource();
                var c = u.getSource(n || 0),
                    f = "";
                n != null && !c && Kh(f), s.push(c), l.push(u._getVersionSign())
            }), i ? o = nD(i, s, {
                datasetIndex: e.componentIndex
            }) : n != null && (o = [HM(s[0])]), {
                sourceList: o,
                upstreamSignList: l
            }
        }, r.prototype._isDirty = function () {
            if (this._dirty) return !0;
            for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
                var i = t[e];
                if (i._isDirty() || this._upstreamSignList[e] !== i._getVersionSign()) return !0
            }
        }, r.prototype.getSource = function (t) {
            t = t || 0;
            var e = this._sourceList[t];
            if (!e) {
                var i = this._getUpstreamSourceManagers();
                return i[0] && i[0].getSource(t)
            }
            return e
        }, r.prototype.getSharedDataStore = function (t) {
            var e = t.makeStoreSchema();
            return this._innerGetDataStore(e.dimensions, t.source, e.hash)
        }, r.prototype._innerGetDataStore = function (t, e, i) {
            var n = 0,
                a = this._storeList,
                o = a[n];
            o || (o = a[n] = {});
            var s = o[i];
            if (!s) {
                var l = this._getUpstreamSourceManagers()[0];
                Xa(this._sourceHost) && l ? s = l._innerGetDataStore(t, e, i) : (s = new Cu, s.initData(new jg(e, t.length), t)), o[i] = s
            }
            return s
        }, r.prototype._getUpstreamSourceManagers = function () {
            var t = this._sourceHost;
            if (Xa(t)) {
                var e = Pc(t);
                return e ? [e.getSourceManager()] : []
            } else return Z(dM(t), function (i) {
                return i.getSourceManager()
            })
        }, r.prototype._getSourceMetaRawOption = function () {
            var t = this._sourceHost,
                e, i, n;
            if (Xa(t)) e = t.get("seriesLayoutBy", !0), i = t.get("sourceHeader", !0), n = t.get("dimensions", !0);
            else if (!this._getUpstreamSourceManagers().length) {
                var a = t;
                e = a.get("seriesLayoutBy", !0), i = a.get("sourceHeader", !0), n = a.get("dimensions", !0)
            }
            return {
                seriesLayoutBy: e,
                sourceHeader: i,
                dimensions: n
            }
        }, r
    }();

function Xa(r) {
    return r.mainType === "series"
}

function Kh(r) {
    throw new Error(r)
}
var n0 = "line-height:1";

function a0(r, t) {
    var e = r.color || "#6e7079",
        i = r.fontSize || 12,
        n = r.fontWeight || "400",
        a = r.color || "#464646",
        o = r.fontSize || 14,
        s = r.fontWeight || "900";
    return t === "html" ? {
        nameStyle: "font-size:" + xe(i + "") + "px;color:" + xe(e) + ";font-weight:" + xe(n + ""),
        valueStyle: "font-size:" + xe(o + "") + "px;color:" + xe(a) + ";font-weight:" + xe(s + "")
    } : {
        nameStyle: {
            fontSize: i,
            fill: e,
            fontWeight: n
        },
        valueStyle: {
            fontSize: o,
            fill: a,
            fontWeight: s
        }
    }
}
var cD = [0, 10, 20, 30],
    fD = ["", `
`, `

`, `


`];

function aa(r, t) {
    return t.type = r, t
}

function Tu(r) {
    return r.type === "section"
}

function o0(r) {
    return Tu(r) ? hD : vD
}

function s0(r) {
    if (Tu(r)) {
        var t = 0,
            e = r.blocks.length,
            i = e > 1 || e > 0 && !r.noHeader;
        return D(r.blocks, function (n) {
            var a = s0(n);
            a >= t && (t = a + +(i && (!a || Tu(n) && !n.noHeader)))
        }), t
    }
    return 0
}

function hD(r, t, e, i) {
    var n = t.noHeader,
        a = dD(s0(t)),
        o = [],
        s = t.blocks || [];
    nr(!s || H(s)), s = s || [];
    var l = r.orderMode;
    if (t.sortBlocks && l) {
        s = s.slice();
        var u = {
            valueAsc: "asc",
            valueDesc: "desc"
        };
        if (qi(u, l)) {
            var c = new KM(u[l], null);
            s.sort(function (d, m) {
                return c.evaluate(d.sortParam, m.sortParam)
            })
        } else l === "seriesDesc" && s.reverse()
    }
    D(s, function (d, m) {
        var p = t.valueFormatter,
            g = o0(d)(p ? O(O({}, r), {
                valueFormatter: p
            }) : r, d, m > 0 ? a.html : 0, i);
        g != null && o.push(g)
    });
    var f = r.renderMode === "richText" ? o.join(a.richText) : Mu(o.join(""), n ? e : a.html);
    if (n) return f;
    var v = bu(t.header, "ordinal", r.useUTC),
        h = a0(i, r.renderMode).nameStyle;
    return r.renderMode === "richText" ? l0(r, v, h) + a.richText + f : Mu('<div style="' + h + ";" + n0 + ';">' + xe(v) + "</div>" + f, e)
}

function vD(r, t, e, i) {
    var n = r.renderMode,
        a = t.noName,
        o = t.noValue,
        s = !t.markerType,
        l = t.name,
        u = r.useUTC,
        c = t.valueFormatter || r.valueFormatter || function (x) {
            return x = H(x) ? x : [x], Z(x, function (S, w) {
                return bu(S, H(h) ? h[w] : h, u)
            })
        };
    if (!(a && o)) {
        var f = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", n),
            v = a ? "" : bu(l, "ordinal", u),
            h = t.valueType,
            d = o ? [] : c(t.value, t.dataIndex),
            m = !s || !a,
            p = !s && a,
            g = a0(i, n),
            _ = g.nameStyle,
            y = g.valueStyle;
        return n === "richText" ? (s ? "" : f) + (a ? "" : l0(r, v, _)) + (o ? "" : mD(r, d, m, p, y)) : Mu((s ? "" : f) + (a ? "" : pD(v, !s, _)) + (o ? "" : gD(d, m, p, y)), e)
    }
}

function jh(r, t, e, i, n, a) {
    if (r) {
        var o = o0(r),
            s = {
                useUTC: n,
                renderMode: e,
                orderMode: i,
                markupStyleCreator: t,
                valueFormatter: r.valueFormatter
            };
        return o(s, r, 0, a)
    }
}

function dD(r) {
    return {
        html: cD[r],
        richText: fD[r]
    }
}

function Mu(r, t) {
    var e = '<div style="clear:both"></div>',
        i = "margin: " + t + "px 0 0";
    return '<div style="' + i + ";" + n0 + ';">' + r + e + "</div>"
}

function pD(r, t, e) {
    var i = t ? "margin-left:2px" : "";
    return '<span style="' + e + ";" + i + '">' + xe(r) + "</span>"
}

function gD(r, t, e, i) {
    var n = e ? "10px" : "20px",
        a = t ? "float:right;margin-left:" + n : "";
    return r = H(r) ? r : [r], '<span style="' + a + ";" + i + '">' + Z(r, function (o) {
        return xe(o)
    }).join("&nbsp;&nbsp;") + "</span>"
}

function l0(r, t, e) {
    return r.markupStyleCreator.wrapRichTextStyle(t, e)
}

function mD(r, t, e, i, n) {
    var a = [n],
        o = i ? 10 : 20;
    return e && a.push({
        padding: [0, 0, 0, o],
        align: "right"
    }), r.markupStyleCreator.wrapRichTextStyle(H(t) ? t.join("  ") : t, a)
}

function _D(r, t) {
    var e = r.getData().getItemVisual(t, "style"),
        i = e[r.visualDrawType];
    return pi(i)
}

function u0(r, t) {
    var e = r.get("padding");
    return e ?? (t === "richText" ? [8, 10] : 10)
}
var xl = function () {
    function r() {
        this.richTextStyles = {}, this._nextStyleNameId = _p()
    }
    return r.prototype._generateStyleName = function () {
        return "__EC_aUTo_" + this._nextStyleNameId++
    }, r.prototype.makeTooltipMarker = function (t, e, i) {
        var n = i === "richText" ? this._generateStyleName() : null,
            a = aM({
                color: e,
                type: t,
                renderMode: i,
                markerId: n
            });
        return V(a) ? a : (this.richTextStyles[n] = a.style, a.content)
    }, r.prototype.wrapRichTextStyle = function (t, e) {
        var i = {};
        H(e) ? D(e, function (a) {
            return O(i, a)
        }) : O(i, e);
        var n = this._generateStyleName();
        return this.richTextStyles[n] = i, "{" + n + "|" + t + "}"
    }, r
}();

function yD(r) {
    var t = r.series,
        e = r.dataIndex,
        i = r.multipleSeries,
        n = t.getData(),
        a = n.mapDimensionsAll("defaultedTooltip"),
        o = a.length,
        s = t.getRawValue(e),
        l = H(s),
        u = _D(t, e),
        c, f, v, h;
    if (o > 1 || l && !o) {
        var d = xD(s, t, e, a, u);
        c = d.inlineValues, f = d.inlineValueTypes, v = d.blocks, h = d.inlineValues[0]
    } else if (o) {
        var m = n.getDimensionInfo(a[0]);
        h = c = Ki(n, e, a[0]), f = m.type
    } else h = c = l ? s[0] : s;
    var p = bp(t),
        g = p && t.name || "",
        _ = n.getName(e),
        y = i ? g : _;
    return aa("section", {
        header: g,
        noHeader: i || !p,
        sortParam: h,
        blocks: [aa("nameValue", {
            markerType: "item",
            markerColor: u,
            name: y,
            noName: !Ve(y),
            value: c,
            valueType: f,
            dataIndex: e
        })].concat(v || [])
    })
}

function xD(r, t, e, i, n) {
    var a = t.getData(),
        o = Ir(r, function (f, v, h) {
            var d = a.getDimensionInfo(h);
            return f = f || d && d.tooltip !== !1 && d.displayName != null
        }, !1),
        s = [],
        l = [],
        u = [];
    i.length ? D(i, function (f) {
        c(Ki(a, e, f), f)
    }) : D(r, c);

    function c(f, v) {
        var h = a.getDimensionInfo(v);
        !h || h.otherDims.tooltip === !1 || (o ? u.push(aa("nameValue", {
            markerType: "subItem",
            markerColor: n,
            name: h.displayName,
            value: f,
            valueType: h.type
        })) : (s.push(f), l.push(h.type)))
    }
    return {
        inlineValues: s,
        inlineValueTypes: l,
        blocks: u
    }
}
var hr = Lt();

function Za(r, t) {
    return r.getName(t) || r.getId(t)
}
var wD = "__universalTransitionEnabled",
    ys = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e._selectedDataIndicesMap = {}, e
        }
        return t.prototype.init = function (e, i, n) {
            this.seriesIndex = this.componentIndex, this.dataTask = Wn({
                count: SD,
                reset: CD
            }), this.dataTask.context = {
                model: this
            }, this.mergeDefaultAndTheme(e, n);
            var a = hr(this).sourceManager = new uD(this);
            a.prepareSource();
            var o = this.getInitialData(e, n);
            Jh(o, this), this.dataTask.context.data = o, hr(this).dataBeforeProcessed = o, Qh(this), this._initSelectedMapFromData(o)
        }, t.prototype.mergeDefaultAndTheme = function (e, i) {
            var n = ra(this),
                a = n ? Lc(e) : {},
                o = this.subType;
            bt.hasClass(o) && (o += "Series"), pt(e, i.getTheme().get(this.subType)), pt(e, this.getDefaultOption()), cu(e, "label", ["show"]), this.fillDataTextStyle(e.data), n && ia(e, a, n)
        }, t.prototype.mergeOption = function (e, i) {
            e = pt(this.option, e, !0), this.fillDataTextStyle(e.data);
            var n = ra(this);
            n && ia(this.option, e, n);
            var a = hr(this).sourceManager;
            a.dirty(), a.prepareSource();
            var o = this.getInitialData(e, i);
            Jh(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, hr(this).dataBeforeProcessed = o, Qh(this), this._initSelectedMapFromData(o)
        }, t.prototype.fillDataTextStyle = function (e) {
            if (e && !se(e))
                for (var i = ["show"], n = 0; n < e.length; n++) e[n] && e[n].label && cu(e[n], "label", i)
        }, t.prototype.getInitialData = function (e, i) {}, t.prototype.appendData = function (e) {
            var i = this.getRawData();
            i.appendData(e.data)
        }, t.prototype.getData = function (e) {
            var i = Du(this);
            if (i) {
                var n = i.context.data;
                return e == null ? n : n.getLinkedData(e)
            } else return hr(this).data
        }, t.prototype.getAllData = function () {
            var e = this.getData();
            return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
                data: e
            }]
        }, t.prototype.setData = function (e) {
            var i = Du(this);
            if (i) {
                var n = i.context;
                n.outputData = e, i !== this.dataTask && (n.data = e)
            }
            hr(this).data = e
        }, t.prototype.getEncode = function () {
            var e = this.get("encode", !0);
            if (e) return it(e)
        }, t.prototype.getSourceManager = function () {
            return hr(this).sourceManager
        }, t.prototype.getSource = function () {
            return this.getSourceManager().getSource()
        }, t.prototype.getRawData = function () {
            return hr(this).dataBeforeProcessed
        }, t.prototype.getColorBy = function () {
            var e = this.get("colorBy");
            return e || "series"
        }, t.prototype.isColorBySeries = function () {
            return this.getColorBy() === "series"
        }, t.prototype.getBaseAxis = function () {
            var e = this.coordinateSystem;
            return e && e.getBaseAxis && e.getBaseAxis()
        }, t.prototype.formatTooltip = function (e, i, n) {
            return yD({
                series: this,
                dataIndex: e,
                multipleSeries: i
            })
        }, t.prototype.isAnimationEnabled = function () {
            var e = this.ecModel;
            if (j.node && !(e && e.ssr)) return !1;
            var i = this.getShallow("animation");
            return i && this.getData().count() > this.getShallow("animationThreshold") && (i = !1), !!i
        }, t.prototype.restoreData = function () {
            this.dataTask.dirty()
        }, t.prototype.getColorFromPalette = function (e, i, n) {
            var a = this.ecModel,
                o = kc.prototype.getColorFromPalette.call(this, e, i, n);
            return o || (o = a.getColorFromPalette(e, i, n)), o
        }, t.prototype.coordDimToDataDim = function (e) {
            return this.getRawData().mapDimensionsAll(e)
        }, t.prototype.getProgressive = function () {
            return this.get("progressive")
        }, t.prototype.getProgressiveThreshold = function () {
            return this.get("progressiveThreshold")
        }, t.prototype.select = function (e, i) {
            this._innerSelect(this.getData(i), e)
        }, t.prototype.unselect = function (e, i) {
            var n = this.option.selectedMap;
            if (n) {
                var a = this.option.selectedMode,
                    o = this.getData(i);
                if (a === "series" || n === "all") {
                    this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
                    return
                }
                for (var s = 0; s < e.length; s++) {
                    var l = e[s],
                        u = Za(o, l);
                    n[u] = !1, this._selectedDataIndicesMap[u] = -1
                }
            }
        }, t.prototype.toggleSelect = function (e, i) {
            for (var n = [], a = 0; a < e.length; a++) n[0] = e[a], this.isSelected(e[a], i) ? this.unselect(n, i) : this.select(n, i)
        }, t.prototype.getSelectedDataIndices = function () {
            if (this.option.selectedMap === "all") return [].slice.call(this.getData().getIndices());
            for (var e = this._selectedDataIndicesMap, i = wt(e), n = [], a = 0; a < i.length; a++) {
                var o = e[i[a]];
                o >= 0 && n.push(o)
            }
            return n
        }, t.prototype.isSelected = function (e, i) {
            var n = this.option.selectedMap;
            if (!n) return !1;
            var a = this.getData(i);
            return (n === "all" || n[Za(a, e)]) && !a.getItemModel(e).get(["select", "disabled"])
        }, t.prototype.isUniversalTransitionEnabled = function () {
            if (this[wD]) return !0;
            var e = this.option.universalTransition;
            return e ? e === !0 ? !0 : e && e.enabled : !1
        }, t.prototype._innerSelect = function (e, i) {
            var n, a, o = this.option,
                s = o.selectedMode,
                l = i.length;
            if (!(!s || !l)) {
                if (s === "series") o.selectedMap = "all";
                else if (s === "multiple") {
                    X(o.selectedMap) || (o.selectedMap = {});
                    for (var u = o.selectedMap, c = 0; c < l; c++) {
                        var f = i[c],
                            v = Za(e, f);
                        u[v] = !0, this._selectedDataIndicesMap[v] = e.getRawIndex(f)
                    }
                } else if (s === "single" || s === !0) {
                    var h = i[l - 1],
                        v = Za(e, h);
                    o.selectedMap = (n = {}, n[v] = !0, n), this._selectedDataIndicesMap = (a = {}, a[v] = e.getRawIndex(h), a)
                }
            }
        }, t.prototype._initSelectedMapFromData = function (e) {
            if (!this.option.selectedMap) {
                var i = [];
                e.hasItemOption && e.each(function (n) {
                    var a = e.getRawDataItem(n);
                    a && a.selected && i.push(n)
                }), i.length > 0 && this._innerSelect(e, i)
            }
        }, t.registerClass = function (e) {
            return bt.registerClass(e)
        }, t.protoInitialize = function () {
            var e = t.prototype;
            e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill"
        }(), t
    }(bt);
Ye(ys, ZM);
Ye(ys, kc);
Tp(ys, bt);

function Qh(r) {
    var t = r.name;
    bp(r) || (r.name = bD(r) || t)
}

function bD(r) {
    var t = r.getRawData(),
        e = t.mapDimensionsAll("seriesName"),
        i = [];
    return D(e, function (n) {
        var a = t.getDimensionInfo(n);
        a.displayName && i.push(a.displayName)
    }), i.join(" ")
}

function SD(r) {
    return r.model.getRawData().count()
}

function CD(r) {
    var t = r.model;
    return t.setData(t.getRawData().cloneShallow()), TD
}

function TD(r, t) {
    t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData)
}

function Jh(r, t) {
    D(Lb(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function (e) {
        r.wrapMethod(e, ie(MD, t))
    })
}

function MD(r, t) {
    var e = Du(r);
    return e && e.setOutputEnd((t || this).count()), t
}

function Du(r) {
    var t = (r.ecModel || {}).scheduler,
        e = t && t.getPipeline(r.uid);
    if (e) {
        var i = e.currentTask;
        if (i) {
            var n = i.agentStubMap;
            n && (i = n.get(r.uid))
        }
        return i
    }
}
const ji = ys;
var $c = function () {
    function r() {
        this.group = new le, this.uid = cs("viewComponent")
    }
    return r.prototype.init = function (t, e) {}, r.prototype.render = function (t, e, i, n) {}, r.prototype.dispose = function (t, e) {}, r.prototype.updateView = function (t, e, i, n) {}, r.prototype.updateLayout = function (t, e, i, n) {}, r.prototype.updateVisual = function (t, e, i, n) {}, r.prototype.toggleBlurSeries = function (t, e, i) {}, r.prototype.eachRendered = function (t) {
        var e = this.group;
        e && e.traverse(t)
    }, r
}();
hc($c);
rs($c);
const Pr = $c;

function c0() {
    var r = Lt();
    return function (t) {
        var e = r(t),
            i = t.pipelineContext,
            n = !!e.large,
            a = !!e.progressiveRender,
            o = e.large = !!(i && i.large),
            s = e.progressiveRender = !!(i && i.progressiveRender);
        return (n !== o || a !== s) && "reset"
    }
}
var f0 = Lt(),
    DD = c0(),
    zc = function () {
        function r() {
            this.group = new le, this.uid = cs("viewChart"), this.renderTask = Wn({
                plan: AD,
                reset: ID
            }), this.renderTask.context = {
                view: this
            }
        }
        return r.prototype.init = function (t, e) {}, r.prototype.render = function (t, e, i, n) {}, r.prototype.highlight = function (t, e, i, n) {
            var a = t.getData(n && n.dataType);
            a && ev(a, n, "emphasis")
        }, r.prototype.downplay = function (t, e, i, n) {
            var a = t.getData(n && n.dataType);
            a && ev(a, n, "normal")
        }, r.prototype.remove = function (t, e) {
            this.group.removeAll()
        }, r.prototype.dispose = function (t, e) {}, r.prototype.updateView = function (t, e, i, n) {
            this.render(t, e, i, n)
        }, r.prototype.updateLayout = function (t, e, i, n) {
            this.render(t, e, i, n)
        }, r.prototype.updateVisual = function (t, e, i, n) {
            this.render(t, e, i, n)
        }, r.prototype.eachRendered = function (t) {
            bc(this.group, t)
        }, r.markUpdateMethod = function (t, e) {
            f0(t).updateMethod = e
        }, r.protoInitialize = function () {
            var t = r.prototype;
            t.type = "chart"
        }(), r
    }();

function tv(r, t, e) {
    r && _u(r) && (t === "emphasis" ? Ro : Oo)(r, e)
}

function ev(r, t, e) {
    var i = fi(r, t),
        n = t && t.highlightKey != null ? FT(t.highlightKey) : null;
    i != null ? D(Zt(i), function (a) {
        tv(r.getItemGraphicEl(a), e, n)
    }) : r.eachItemGraphicEl(function (a) {
        tv(a, e, n)
    })
}
hc(zc);
rs(zc);

function AD(r) {
    return DD(r.model)
}

function ID(r) {
    var t = r.model,
        e = r.ecModel,
        i = r.api,
        n = r.payload,
        a = t.pipelineContext.progressiveRender,
        o = r.view,
        s = n && f0(n).updateMethod,
        l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return l !== "render" && o[l](t, e, i, n), LD[l]
}
var LD = {
    incrementalPrepareRender: {
        progress: function (r, t) {
            t.view.incrementalRender(r, t.model, t.ecModel, t.api, t.payload)
        }
    },
    render: {
        forceFirstProgress: !0,
        progress: function (r, t) {
            t.view.render(t.model, t.ecModel, t.api, t.payload)
        }
    }
};
const ir = zc;
var Go = "\0__throttleOriginMethod",
    rv = "\0__throttleRate",
    iv = "\0__throttleType";

function h0(r, t, e) {
    var i, n = 0,
        a = 0,
        o = null,
        s, l, u, c;
    t = t || 0;

    function f() {
        a = new Date().getTime(), o = null, r.apply(l, u || [])
    }
    var v = function () {
        for (var h = [], d = 0; d < arguments.length; d++) h[d] = arguments[d];
        i = new Date().getTime(), l = this, u = h;
        var m = c || t,
            p = c || e;
        c = null, s = i - (p ? n : a) - m, clearTimeout(o), p ? o = setTimeout(f, m) : s >= 0 ? f() : o = setTimeout(f, -s), n = i
    };
    return v.clear = function () {
        o && (clearTimeout(o), o = null)
    }, v.debounceNextCall = function (h) {
        c = h
    }, v
}

function v0(r, t, e, i) {
    var n = r[t];
    if (n) {
        var a = n[Go] || n,
            o = n[iv],
            s = n[rv];
        if (s !== e || o !== i) {
            if (e == null || !i) return r[t] = a;
            n = r[t] = h0(a, e, i === "debounce"), n[Go] = a, n[iv] = i, n[rv] = e
        }
        return n
    }
}

function Au(r, t) {
    var e = r[t];
    e && e[Go] && (e.clear && e.clear(), r[t] = e[Go])
}
var nv = Lt(),
    av = {
        itemStyle: Jn(Tg, !0),
        lineStyle: Jn(Cg, !0)
    },
    PD = {
        lineStyle: "stroke",
        itemStyle: "fill"
    };

function d0(r, t) {
    var e = r.visualStyleMapper || av[t];
    return e || (console.warn("Unknown style type '" + t + "'."), av.itemStyle)
}

function p0(r, t) {
    var e = r.visualDrawType || PD[t];
    return e || (console.warn("Unknown style type '" + t + "'."), "fill")
}
var kD = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function (r, t) {
            var e = r.getData(),
                i = r.visualStyleAccessPath || "itemStyle",
                n = r.getModel(i),
                a = d0(r, i),
                o = a(n),
                s = n.getShallow("decal");
            s && (e.setVisual("decal", s), s.dirty = !0);
            var l = p0(r, i),
                u = o[l],
                c = Q(u) ? u : null,
                f = o.fill === "auto" || o.stroke === "auto";
            if (!o[l] || c || f) {
                var v = r.getColorFromPalette(r.name, null, t.getSeriesCount());
                o[l] || (o[l] = v, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || Q(o.fill) ? v : o.fill, o.stroke = o.stroke === "auto" || Q(o.stroke) ? v : o.stroke
            }
            if (e.setVisual("style", o), e.setVisual("drawType", l), !t.isSeriesFiltered(r) && c) return e.setVisual("colorFromPalette", !1), {
                dataEach: function (h, d) {
                    var m = r.getDataParams(d),
                        p = O({}, o);
                    p[l] = c(m), h.setItemVisual(d, "style", p)
                }
            }
        }
    },
    yn = new Xt,
    ED = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function (r, t) {
            if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
                var e = r.getData(),
                    i = r.visualStyleAccessPath || "itemStyle",
                    n = d0(r, i),
                    a = e.getVisual("drawType");
                return {
                    dataEach: e.hasItemOption ? function (o, s) {
                        var l = o.getRawDataItem(s);
                        if (l && l[i]) {
                            yn.option = l[i];
                            var u = n(yn),
                                c = o.ensureUniqueItemVisual(s, "style");
                            O(c, u), yn.option.decal && (o.setItemVisual(s, "decal", yn.option.decal), yn.option.decal.dirty = !0), a in u && o.setItemVisual(s, "colorFromPalette", !1)
                        }
                    } : null
                }
            }
        }
    },
    RD = {
        performRawSeries: !0,
        overallReset: function (r) {
            var t = it();
            r.eachSeries(function (e) {
                var i = e.getColorBy();
                if (!e.isColorBySeries()) {
                    var n = e.type + "-" + i,
                        a = t.get(n);
                    a || (a = {}, t.set(n, a)), nv(e).scope = a
                }
            }), r.eachSeries(function (e) {
                if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
                    var i = e.getRawData(),
                        n = {},
                        a = e.getData(),
                        o = nv(e).scope,
                        s = e.visualStyleAccessPath || "itemStyle",
                        l = p0(e, s);
                    a.each(function (u) {
                        var c = a.getRawIndex(u);
                        n[c] = u
                    }), i.each(function (u) {
                        var c = n[u],
                            f = a.getItemVisual(c, "colorFromPalette");
                        if (f) {
                            var v = a.ensureUniqueItemVisual(c, "style"),
                                h = i.getName(u) || u + "",
                                d = i.count();
                            v[l] = e.getColorFromPalette(h, o, d)
                        }
                    })
                }
            })
        }
    },
    qa = Math.PI;

function OD(r, t) {
    t = t || {}, ht(t, {
        text: "loading",
        textColor: "#000",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        fontFamily: "sans-serif",
        maskColor: "rgba(255, 255, 255, 0.8)",
        showSpinner: !0,
        color: "#5470c6",
        spinnerRadius: 10,
        lineWidth: 5,
        zlevel: 0
    });
    var e = new le,
        i = new ae({
            style: {
                fill: t.maskColor
            },
            zlevel: t.zlevel,
            z: 1e4
        });
    e.add(i);
    var n = new ve({
            style: {
                text: t.text,
                fill: t.textColor,
                fontSize: t.fontSize,
                fontWeight: t.fontWeight,
                fontStyle: t.fontStyle,
                fontFamily: t.fontFamily
            },
            zlevel: t.zlevel,
            z: 10001
        }),
        a = new ae({
            style: {
                fill: "none"
            },
            textContent: n,
            textConfig: {
                position: "right",
                distance: 10
            },
            zlevel: t.zlevel,
            z: 10001
        });
    e.add(a);
    var o;
    return t.showSpinner && (o = new _c({
        shape: {
            startAngle: -qa / 2,
            endAngle: -qa / 2 + .1,
            r: t.spinnerRadius
        },
        style: {
            stroke: t.color,
            lineCap: "round",
            lineWidth: t.lineWidth
        },
        zlevel: t.zlevel,
        z: 10001
    }), o.animateShape(!0).when(1e3, {
        endAngle: qa * 3 / 2
    }).start("circularInOut"), o.animateShape(!0).when(1e3, {
        startAngle: qa * 3 / 2
    }).delay(300).start("circularInOut"), e.add(o)), e.resize = function () {
        var s = n.getBoundingRect().width,
            l = t.showSpinner ? t.spinnerRadius : 0,
            u = (r.getWidth() - l * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : l),
            c = r.getHeight() / 2;
        t.showSpinner && o.setShape({
            cx: u,
            cy: c
        }), a.setShape({
            x: u - l,
            y: c - l,
            width: l * 2,
            height: l * 2
        }), i.setShape({
            x: 0,
            y: 0,
            width: r.getWidth(),
            height: r.getHeight()
        })
    }, e.resize(), e
}
var g0 = function () {
    function r(t, e, i, n) {
        this._stageTaskMap = it(), this.ecInstance = t, this.api = e, i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice(), this._allHandlers = i.concat(n)
    }
    return r.prototype.restoreData = function (t, e) {
        t.restoreData(e), this._stageTaskMap.each(function (i) {
            var n = i.overallTask;
            n && n.dirty()
        })
    }, r.prototype.getPerformArgs = function (t, e) {
        if (t.__pipeline) {
            var i = this._pipelineMap.get(t.__pipeline.id),
                n = i.context,
                a = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex,
                o = a ? i.step : null,
                s = n && n.modDataCount,
                l = s != null ? Math.ceil(s / o) : null;
            return {
                step: o,
                modBy: l,
                modDataCount: s
            }
        }
    }, r.prototype.getPipeline = function (t) {
        return this._pipelineMap.get(t)
    }, r.prototype.updateStreamModes = function (t, e) {
        var i = this._pipelineMap.get(t.uid),
            n = t.getData(),
            a = n.count(),
            o = i.progressiveEnabled && e.incrementalPrepareRender && a >= i.threshold,
            s = t.get("large") && a >= t.get("largeThreshold"),
            l = t.get("progressiveChunkMode") === "mod" ? a : null;
        t.pipelineContext = i.context = {
            progressiveRender: o,
            modDataCount: l,
            large: s
        }
    }, r.prototype.restorePipelines = function (t) {
        var e = this,
            i = e._pipelineMap = it();
        t.eachSeries(function (n) {
            var a = n.getProgressive(),
                o = n.uid;
            i.set(o, {
                id: o,
                head: null,
                tail: null,
                threshold: n.getProgressiveThreshold(),
                progressiveEnabled: a && !(n.preventIncremental && n.preventIncremental()),
                blockIndex: -1,
                step: Math.round(a || 700),
                count: 0
            }), e._pipe(n, n.dataTask)
        })
    }, r.prototype.prepareStageTasks = function () {
        var t = this._stageTaskMap,
            e = this.api.getModel(),
            i = this.api;
        D(this._allHandlers, function (n) {
            var a = t.get(n.uid) || t.set(n.uid, {}),
                o = "";
            nr(!(n.reset && n.overallReset), o), n.reset && this._createSeriesStageTask(n, a, e, i), n.overallReset && this._createOverallStageTask(n, a, e, i)
        }, this)
    }, r.prototype.prepareView = function (t, e, i, n) {
        var a = t.renderTask,
            o = a.context;
        o.model = e, o.ecModel = i, o.api = n, a.__block = !t.incrementalPrepareRender, this._pipe(e, a)
    }, r.prototype.performDataProcessorTasks = function (t, e) {
        this._performStageTasks(this._dataProcessorHandlers, t, e, {
            block: !0
        })
    }, r.prototype.performVisualTasks = function (t, e, i) {
        this._performStageTasks(this._visualHandlers, t, e, i)
    }, r.prototype._performStageTasks = function (t, e, i, n) {
        n = n || {};
        var a = !1,
            o = this;
        D(t, function (l, u) {
            if (!(n.visualType && n.visualType !== l.visualType)) {
                var c = o._stageTaskMap.get(l.uid),
                    f = c.seriesTaskMap,
                    v = c.overallTask;
                if (v) {
                    var h, d = v.agentStubMap;
                    d.each(function (p) {
                        s(n, p) && (p.dirty(), h = !0)
                    }), h && v.dirty(), o.updatePayload(v, i);
                    var m = o.getPerformArgs(v, n.block);
                    d.each(function (p) {
                        p.perform(m)
                    }), v.perform(m) && (a = !0)
                } else f && f.each(function (p, g) {
                    s(n, p) && p.dirty();
                    var _ = o.getPerformArgs(p, n.block);
                    _.skip = !l.performRawSeries && e.isSeriesFiltered(p.context.model), o.updatePayload(p, i), p.perform(_) && (a = !0)
                })
            }
        });

        function s(l, u) {
            return l.setDirty && (!l.dirtyMap || l.dirtyMap.get(u.__pipeline.id))
        }
        this.unfinished = a || this.unfinished
    }, r.prototype.performSeriesTasks = function (t) {
        var e;
        t.eachSeries(function (i) {
            e = i.dataTask.perform() || e
        }), this.unfinished = e || this.unfinished
    }, r.prototype.plan = function () {
        this._pipelineMap.each(function (t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break
                }
                e = e.getUpstream()
            } while (e)
        })
    }, r.prototype.updatePayload = function (t, e) {
        e !== "remain" && (t.context.payload = e)
    }, r.prototype._createSeriesStageTask = function (t, e, i, n) {
        var a = this,
            o = e.seriesTaskMap,
            s = e.seriesTaskMap = it(),
            l = t.seriesType,
            u = t.getTargetSeries;
        t.createOnAllSeries ? i.eachRawSeries(c) : l ? i.eachRawSeriesByType(l, c) : u && u(i, n).each(c);

        function c(f) {
            var v = f.uid,
                h = s.set(v, o && o.get(v) || Wn({
                    plan: zD,
                    reset: HD,
                    count: VD
                }));
            h.context = {
                model: f,
                ecModel: i,
                api: n,
                useClearVisual: t.isVisual && !t.isLayout,
                plan: t.plan,
                reset: t.reset,
                scheduler: a
            }, a._pipe(f, h)
        }
    }, r.prototype._createOverallStageTask = function (t, e, i, n) {
        var a = this,
            o = e.overallTask = e.overallTask || Wn({
                reset: BD
            });
        o.context = {
            ecModel: i,
            api: n,
            overallReset: t.overallReset,
            scheduler: a
        };
        var s = o.agentStubMap,
            l = o.agentStubMap = it(),
            u = t.seriesType,
            c = t.getTargetSeries,
            f = !0,
            v = !1,
            h = "";
        nr(!t.createOnAllSeries, h), u ? i.eachRawSeriesByType(u, d) : c ? c(i, n).each(d) : (f = !1, D(i.getSeries(), d));

        function d(m) {
            var p = m.uid,
                g = l.set(p, s && s.get(p) || (v = !0, Wn({
                    reset: ND,
                    onDirty: $D
                })));
            g.context = {
                model: m,
                overallProgress: f
            }, g.agent = o, g.__block = f, a._pipe(m, g)
        }
        v && o.dirty()
    }, r.prototype._pipe = function (t, e) {
        var i = t.uid,
            n = this._pipelineMap.get(i);
        !n.head && (n.head = e), n.tail && n.tail.pipe(e), n.tail = e, e.__idxInPipeline = n.count++, e.__pipeline = n
    }, r.wrapStageHandler = function (t, e) {
        return Q(t) && (t = {
            overallReset: t,
            seriesType: WD(t)
        }), t.uid = cs("stageHandler"), e && (t.visualType = e), t
    }, r
}();

function BD(r) {
    r.overallReset(r.ecModel, r.api, r.payload)
}

function ND(r) {
    return r.overallProgress && FD
}

function FD() {
    this.agent.dirty(), this.getDownstream().dirty()
}

function $D() {
    this.agent && this.agent.dirty()
}

function zD(r) {
    return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null
}

function HD(r) {
    r.useClearVisual && r.data.clearAllVisual();
    var t = r.resetDefines = Zt(r.reset(r.model, r.ecModel, r.api, r.payload));
    return t.length > 1 ? Z(t, function (e, i) {
        return m0(i)
    }) : GD
}
var GD = m0(0);

function m0(r) {
    return function (t, e) {
        var i = e.data,
            n = e.resetDefines[r];
        if (n && n.dataEach)
            for (var a = t.start; a < t.end; a++) n.dataEach(i, a);
        else n && n.progress && n.progress(t, i)
    }
}

function VD(r) {
    return r.data.count()
}

function WD(r) {
    Vo = null;
    try {
        r(oa, _0)
    } catch {}
    return Vo
}
var oa = {},
    _0 = {},
    Vo;
y0(oa, Ec);
y0(_0, Yg);
oa.eachSeriesByType = oa.eachRawSeriesByType = function (r) {
    Vo = r
};
oa.eachComponent = function (r) {
    r.mainType === "series" && r.subType && (Vo = r.subType)
};

function y0(r, t) {
    for (var e in t.prototype) r[e] = ne
}
var ov = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const UD = {
    color: ov,
    colorLayer: [
        ["#37A2DA", "#ffd85c", "#fd7b5f"],
        ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
        ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], ov
    ]
};
var Wt = "#B9B8CE",
    sv = "#100C2A",
    Ka = function () {
        return {
            axisLine: {
                lineStyle: {
                    color: Wt
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#484753"
                }
            },
            splitArea: {
                areaStyle: {
                    color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
                }
            },
            minorSplitLine: {
                lineStyle: {
                    color: "#20203B"
                }
            }
        }
    },
    lv = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"],
    x0 = {
        darkMode: !0,
        color: lv,
        backgroundColor: sv,
        axisPointer: {
            lineStyle: {
                color: "#817f91"
            },
            crossStyle: {
                color: "#817f91"
            },
            label: {
                color: "#fff"
            }
        },
        legend: {
            textStyle: {
                color: Wt
            }
        },
        textStyle: {
            color: Wt
        },
        title: {
            textStyle: {
                color: "#EEF1FA"
            },
            subtextStyle: {
                color: "#B9B8CE"
            }
        },
        toolbox: {
            iconStyle: {
                borderColor: Wt
            }
        },
        dataZoom: {
            borderColor: "#71708A",
            textStyle: {
                color: Wt
            },
            brushStyle: {
                color: "rgba(135,163,206,0.3)"
            },
            handleStyle: {
                color: "#353450",
                borderColor: "#C5CBE3"
            },
            moveHandleStyle: {
                color: "#B0B6C3",
                opacity: .3
            },
            fillerColor: "rgba(135,163,206,0.2)",
            emphasis: {
                handleStyle: {
                    borderColor: "#91B7F2",
                    color: "#4D587D"
                },
                moveHandleStyle: {
                    color: "#636D9A",
                    opacity: .7
                }
            },
            dataBackground: {
                lineStyle: {
                    color: "#71708A",
                    width: 1
                },
                areaStyle: {
                    color: "#71708A"
                }
            },
            selectedDataBackground: {
                lineStyle: {
                    color: "#87A3CE"
                },
                areaStyle: {
                    color: "#87A3CE"
                }
            }
        },
        visualMap: {
            textStyle: {
                color: Wt
            }
        },
        timeline: {
            lineStyle: {
                color: Wt
            },
            label: {
                color: Wt
            },
            controlStyle: {
                color: Wt,
                borderColor: Wt
            }
        },
        calendar: {
            itemStyle: {
                color: sv
            },
            dayLabel: {
                color: Wt
            },
            monthLabel: {
                color: Wt
            },
            yearLabel: {
                color: Wt
            }
        },
        timeAxis: Ka(),
        logAxis: Ka(),
        valueAxis: Ka(),
        categoryAxis: Ka(),
        line: {
            symbol: "circle"
        },
        graph: {
            color: lv
        },
        gauge: {
            title: {
                color: Wt
            },
            axisLine: {
                lineStyle: {
                    color: [
                        [1, "rgba(207,212,219,0.2)"]
                    ]
                }
            },
            axisLabel: {
                color: Wt
            },
            detail: {
                color: "#EEF1FA"
            }
        },
        candlestick: {
            itemStyle: {
                color: "#f64e56",
                color0: "#54ea92",
                borderColor: "#f64e56",
                borderColor0: "#54ea92"
            }
        }
    };
x0.categoryAxis.splitLine.show = !1;
const YD = x0;
var XD = function () {
        function r() {}
        return r.prototype.normalizeQuery = function (t) {
            var e = {},
                i = {},
                n = {};
            if (V(t)) {
                var a = We(t);
                e.mainType = a.main || null, e.subType = a.sub || null
            } else {
                var o = ["Index", "Name", "Id"],
                    s = {
                        name: 1,
                        dataIndex: 1,
                        dataType: 1
                    };
                D(t, function (l, u) {
                    for (var c = !1, f = 0; f < o.length; f++) {
                        var v = o[f],
                            h = u.lastIndexOf(v);
                        if (h > 0 && h === u.length - v.length) {
                            var d = u.slice(0, h);
                            d !== "data" && (e.mainType = d, e[v.toLowerCase()] = l, c = !0)
                        }
                    }
                    s.hasOwnProperty(u) && (i[u] = l, c = !0), c || (n[u] = l)
                })
            }
            return {
                cptQuery: e,
                dataQuery: i,
                otherQuery: n
            }
        }, r.prototype.filter = function (t, e) {
            var i = this.eventInfo;
            if (!i) return !0;
            var n = i.targetEl,
                a = i.packedEvent,
                o = i.model,
                s = i.view;
            if (!o || !s) return !0;
            var l = e.cptQuery,
                u = e.dataQuery;
            return c(l, o, "mainType") && c(l, o, "subType") && c(l, o, "index", "componentIndex") && c(l, o, "name") && c(l, o, "id") && c(u, a, "name") && c(u, a, "dataIndex") && c(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, n, a));

            function c(f, v, h, d) {
                return f[h] == null || v[d || h] === f[h]
            }
        }, r.prototype.afterTrigger = function () {
            this.eventInfo = null
        }, r
    }(),
    Iu = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"],
    uv = Iu.concat(["symbolKeepAspect"]),
    ZD = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function (r, t) {
            var e = r.getData();
            if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual) return;
            for (var i = {}, n = {}, a = !1, o = 0; o < Iu.length; o++) {
                var s = Iu[o],
                    l = r.get(s);
                Q(l) ? (a = !0, n[s] = l) : i[s] = l
            }
            if (i.symbol = i.symbol || r.defaultSymbol, e.setVisual(O({
                    legendIcon: r.legendIcon || i.symbol,
                    symbolKeepAspect: r.get("symbolKeepAspect")
                }, i)), t.isSeriesFiltered(r)) return;
            var u = wt(n);

            function c(f, v) {
                for (var h = r.getRawValue(v), d = r.getDataParams(v), m = 0; m < u.length; m++) {
                    var p = u[m];
                    f.setItemVisual(v, p, n[p](h, d))
                }
            }
            return {
                dataEach: a ? c : null
            }
        }
    },
    qD = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function (r, t) {
            if (!r.hasSymbolVisual || t.isSeriesFiltered(r)) return;
            var e = r.getData();

            function i(n, a) {
                for (var o = n.getItemModel(a), s = 0; s < uv.length; s++) {
                    var l = uv[s],
                        u = o.getShallow(l, !0);
                    u != null && n.setItemVisual(a, l, u)
                }
            }
            return {
                dataEach: e.hasItemOption ? i : null
            }
        }
    };

function KD(r, t, e) {
    switch (e) {
        case "color":
            var i = r.getItemVisual(t, "style");
            return i[r.getVisual("drawType")];
        case "opacity":
            return r.getItemVisual(t, "style").opacity;
        case "symbol":
        case "symbolSize":
        case "liftZ":
            return r.getItemVisual(t, e)
    }
}

function jD(r, t) {
    switch (t) {
        case "color":
            var e = r.getVisual("style");
            return e[r.getVisual("drawType")];
        case "opacity":
            return r.getVisual("style").opacity;
        case "symbol":
        case "symbolSize":
        case "liftZ":
            return r.getVisual(t)
    }
}

function QD(r, t) {
    function e(i, n) {
        var a = [];
        return i.eachComponent({
            mainType: "series",
            subType: r,
            query: n
        }, function (o) {
            a.push(o.seriesIndex)
        }), a
    }
    D([
        [r + "ToggleSelect", "toggleSelect"],
        [r + "Select", "select"],
        [r + "UnSelect", "unselect"]
    ], function (i) {
        t(i[0], function (n, a, o) {
            n = O({}, n), o.dispatchAction(O(n, {
                type: i[1],
                seriesIndex: e(a, n)
            }))
        })
    })
}

function Pi(r, t, e, i, n) {
    var a = r + t;
    e.isSilent(a) || i.eachComponent({
        mainType: "series",
        subType: "pie"
    }, function (o) {
        for (var s = o.seriesIndex, l = o.option.selectedMap, u = n.selected, c = 0; c < u.length; c++)
            if (u[c].seriesIndex === s) {
                var f = o.getData(),
                    v = fi(f, n.fromActionPayload);
                e.trigger(a, {
                    type: a,
                    seriesId: o.id,
                    name: H(v) ? f.getName(v[0]) : f.getName(v),
                    selected: V(l) ? l : O({}, l)
                })
            }
    })
}

function JD(r, t, e) {
    r.on("selectchanged", function (i) {
        var n = e.getModel();
        i.isFromClick ? (Pi("map", "selectchanged", t, n, i), Pi("pie", "selectchanged", t, n, i)) : i.fromAction === "select" ? (Pi("map", "selected", t, n, i), Pi("pie", "selected", t, n, i)) : i.fromAction === "unselect" && (Pi("map", "unselected", t, n, i), Pi("pie", "unselected", t, n, i))
    })
}

function En(r, t, e) {
    for (var i; r && !(t(r) && (i = r, e));) r = r.__hostTarget || r.parent;
    return i
}
var tA = Math.round(Math.random() * 9),
    eA = typeof Object.defineProperty == "function",
    rA = function () {
        function r() {
            this._id = "__ec_inner_" + tA++
        }
        return r.prototype.get = function (t) {
            return this._guard(t)[this._id]
        }, r.prototype.set = function (t, e) {
            var i = this._guard(t);
            return eA ? Object.defineProperty(i, this._id, {
                value: e,
                enumerable: !1,
                configurable: !0
            }) : i[this._id] = e, this
        }, r.prototype.delete = function (t) {
            return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1
        }, r.prototype.has = function (t) {
            return !!this._guard(t)[this._id]
        }, r.prototype._guard = function (t) {
            if (t !== Object(t)) throw TypeError("Value of WeakMap is not a non-null object.");
            return t
        }, r
    }(),
    iA = gt.extend({
        type: "triangle",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function (r, t) {
            var e = t.cx,
                i = t.cy,
                n = t.width / 2,
                a = t.height / 2;
            r.moveTo(e, i - a), r.lineTo(e + n, i + a), r.lineTo(e - n, i + a), r.closePath()
        }
    }),
    nA = gt.extend({
        type: "diamond",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function (r, t) {
            var e = t.cx,
                i = t.cy,
                n = t.width / 2,
                a = t.height / 2;
            r.moveTo(e, i - a), r.lineTo(e + n, i), r.lineTo(e, i + a), r.lineTo(e - n, i), r.closePath()
        }
    }),
    aA = gt.extend({
        type: "pin",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function (r, t) {
            var e = t.x,
                i = t.y,
                n = t.width / 5 * 3,
                a = Math.max(n, t.height),
                o = n / 2,
                s = o * o / (a - o),
                l = i - a + o + s,
                u = Math.asin(s / o),
                c = Math.cos(u) * o,
                f = Math.sin(u),
                v = Math.cos(u),
                h = o * .6,
                d = o * .7;
            r.moveTo(e - c, l + s), r.arc(e, l, o, Math.PI - u, Math.PI * 2 + u), r.bezierCurveTo(e + c - f * h, l + s + v * h, e, i - d, e, i), r.bezierCurveTo(e, i - d, e - c + f * h, l + s + v * h, e - c, l + s), r.closePath()
        }
    }),
    oA = gt.extend({
        type: "arrow",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function (r, t) {
            var e = t.height,
                i = t.width,
                n = t.x,
                a = t.y,
                o = i / 3 * 2;
            r.moveTo(n, a), r.lineTo(n + o, a + e), r.lineTo(n, a + e / 4 * 3), r.lineTo(n - o, a + e), r.lineTo(n, a), r.closePath()
        }
    }),
    sA = {
        line: vi,
        rect: ae,
        roundRect: ae,
        square: ae,
        circle: mc,
        diamond: nA,
        pin: aA,
        arrow: oA,
        triangle: iA
    },
    lA = {
        line: function (r, t, e, i, n) {
            n.x1 = r, n.y1 = t + i / 2, n.x2 = r + e, n.y2 = t + i / 2
        },
        rect: function (r, t, e, i, n) {
            n.x = r, n.y = t, n.width = e, n.height = i
        },
        roundRect: function (r, t, e, i, n) {
            n.x = r, n.y = t, n.width = e, n.height = i, n.r = Math.min(e, i) / 4
        },
        square: function (r, t, e, i, n) {
            var a = Math.min(e, i);
            n.x = r, n.y = t, n.width = a, n.height = a
        },
        circle: function (r, t, e, i, n) {
            n.cx = r + e / 2, n.cy = t + i / 2, n.r = Math.min(e, i) / 2
        },
        diamond: function (r, t, e, i, n) {
            n.cx = r + e / 2, n.cy = t + i / 2, n.width = e, n.height = i
        },
        pin: function (r, t, e, i, n) {
            n.x = r + e / 2, n.y = t + i / 2, n.width = e, n.height = i
        },
        arrow: function (r, t, e, i, n) {
            n.x = r + e / 2, n.y = t + i / 2, n.width = e, n.height = i
        },
        triangle: function (r, t, e, i, n) {
            n.cx = r + e / 2, n.cy = t + i / 2, n.width = e, n.height = i
        }
    },
    Lu = {};
D(sA, function (r, t) {
    Lu[t] = new r
});
var uA = gt.extend({
    type: "symbol",
    shape: {
        symbolType: "",
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    calculateTextPosition: function (r, t, e) {
        var i = fp(r, t, e),
            n = this.shape;
        return n && n.symbolType === "pin" && t.position === "inside" && (i.y = e.y + e.height * .4), i
    },
    buildPath: function (r, t, e) {
        var i = t.symbolType;
        if (i !== "none") {
            var n = Lu[i];
            n || (i = "rect", n = Lu[i]), lA[i](t.x, t.y, t.width, t.height, n.shape), n.buildPath(r, n.shape, e)
        }
    }
});

function cA(r, t) {
    if (this.type !== "image") {
        var e = this.style;
        this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw()
    }
}

function sa(r, t, e, i, n, a, o) {
    var s = r.indexOf("empty") === 0;
    s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
    var l;
    return r.indexOf("image://") === 0 ? l = gg(r.slice(8), new ct(t, e, i, n), o ? "center" : "cover") : r.indexOf("path://") === 0 ? l = xc(r.slice(7), {}, new ct(t, e, i, n), o ? "center" : "cover") : l = new uA({
        shape: {
            symbolType: r,
            x: t,
            y: e,
            width: i,
            height: n
        }
    }), l.__isEmptyBrush = s, l.setColor = cA, a && l.setColor(a), l
}

function fA(r) {
    return H(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0]
}

function w0(r, t) {
    if (r != null) return H(r) || (r = [r, r]), [yt(r[0], t[0]) || 0, yt(rt(r[1], r[0]), t[1]) || 0]
}

function ni(r) {
    return isFinite(r)
}

function hA(r, t, e) {
    var i = t.x == null ? 0 : t.x,
        n = t.x2 == null ? 1 : t.x2,
        a = t.y == null ? 0 : t.y,
        o = t.y2 == null ? 0 : t.y2;
    t.global || (i = i * e.width + e.x, n = n * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), i = ni(i) ? i : 0, n = ni(n) ? n : 1, a = ni(a) ? a : 0, o = ni(o) ? o : 0;
    var s = r.createLinearGradient(i, a, n, o);
    return s
}

function vA(r, t, e) {
    var i = e.width,
        n = e.height,
        a = Math.min(i, n),
        o = t.x == null ?.5 : t.x,
        s = t.y == null ?.5 : t.y,
        l = t.r == null ?.5 : t.r;
    t.global || (o = o * i + e.x, s = s * n + e.y, l = l * a), o = ni(o) ? o : .5, s = ni(s) ? s : .5, l = l >= 0 && ni(l) ? l : .5;
    var u = r.createRadialGradient(o, s, 0, o, s, l);
    return u
}

function Pu(r, t, e) {
    for (var i = t.type === "radial" ? vA(r, t, e) : hA(r, t, e), n = t.colorStops, a = 0; a < n.length; a++) i.addColorStop(n[a].offset, n[a].color);
    return i
}

function dA(r, t) {
    if (r === t || !r && !t) return !1;
    if (!r || !t || r.length !== t.length) return !0;
    for (var e = 0; e < r.length; e++)
        if (r[e] !== t[e]) return !0;
    return !1
}

function ja(r) {
    return parseInt(r, 10)
}

function Qa(r, t, e) {
    var i = ["width", "height"][t],
        n = ["clientWidth", "clientHeight"][t],
        a = ["paddingLeft", "paddingTop"][t],
        o = ["paddingRight", "paddingBottom"][t];
    if (e[i] != null && e[i] !== "auto") return parseFloat(e[i]);
    var s = document.defaultView.getComputedStyle(r);
    return (r[n] || ja(s[i]) || ja(r.style[i])) - (ja(s[a]) || 0) - (ja(s[o]) || 0) | 0
}

function pA(r, t) {
    return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : _t(r) ? [r] : H(r) ? r : null
}

function b0(r) {
    var t = r.style,
        e = t.lineDash && t.lineWidth > 0 && pA(t.lineDash, t.lineWidth),
        i = t.lineDashOffset;
    if (e) {
        var n = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
        n && n !== 1 && (e = Z(e, function (a) {
            return a / n
        }), i /= n)
    }
    return [e, i]
}
var gA = new hi(!0);

function Wo(r) {
    var t = r.stroke;
    return !(t == null || t === "none" || !(r.lineWidth > 0))
}

function cv(r) {
    return typeof r == "string" && r !== "none"
}

function Uo(r) {
    var t = r.fill;
    return t != null && t !== "none"
}

function fv(r, t) {
    if (t.fillOpacity != null && t.fillOpacity !== 1) {
        var e = r.globalAlpha;
        r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e
    } else r.fill()
}

function hv(r, t) {
    if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
        var e = r.globalAlpha;
        r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e
    } else r.stroke()
}

function ku(r, t, e) {
    var i = Mp(t.image, t.__image, e);
    if (is(i)) {
        var n = r.createPattern(i, t.repeat || "repeat");
        if (typeof DOMMatrix == "function" && n && n.setTransform) {
            var a = new DOMMatrix;
            a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * Pb), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), n.setTransform(a)
        }
        return n
    }
}

function mA(r, t, e, i) {
    var n, a = Wo(e),
        o = Uo(e),
        s = e.strokePercent,
        l = s < 1,
        u = !t.path;
    (!t.silent || l) && u && t.createPathProxy();
    var c = t.path || gA,
        f = t.__dirty;
    if (!i) {
        var v = e.fill,
            h = e.stroke,
            d = o && !!v.colorStops,
            m = a && !!h.colorStops,
            p = o && !!v.image,
            g = a && !!h.image,
            _ = void 0,
            y = void 0,
            x = void 0,
            S = void 0,
            w = void 0;
        (d || m) && (w = t.getBoundingRect()), d && (_ = f ? Pu(r, v, w) : t.__canvasFillGradient, t.__canvasFillGradient = _), m && (y = f ? Pu(r, h, w) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = y), p && (x = f || !t.__canvasFillPattern ? ku(r, v, t) : t.__canvasFillPattern, t.__canvasFillPattern = x), g && (S = f || !t.__canvasStrokePattern ? ku(r, h, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = x), d ? r.fillStyle = _ : p && (x ? r.fillStyle = x : o = !1), m ? r.strokeStyle = y : g && (S ? r.strokeStyle = S : a = !1)
    }
    var T = t.getGlobalScale();
    c.setScale(T[0], T[1], t.segmentIgnoreThreshold);
    var C, M;
    r.setLineDash && e.lineDash && (n = b0(t), C = n[0], M = n[1]);
    var I = !0;
    (u || f & Ri) && (c.setDPR(r.dpr), l ? c.setContext(null) : (c.setContext(r), I = !1), c.reset(), t.buildPath(c, t.shape, i), c.toStatic(), t.pathUpdated()), I && c.rebuildPath(r, l ? s : 1), C && (r.setLineDash(C), r.lineDashOffset = M), i || (e.strokeFirst ? (a && hv(r, e), o && fv(r, e)) : (o && fv(r, e), a && hv(r, e))), C && r.setLineDash([])
}

function _A(r, t, e) {
    var i = t.__image = Mp(e.image, t.__image, t, t.onload);
    if (!(!i || !is(i))) {
        var n = e.x || 0,
            a = e.y || 0,
            o = t.getWidth(),
            s = t.getHeight(),
            l = i.width / i.height;
        if (o == null && s != null ? o = s * l : s == null && o != null ? s = o / l : o == null && s == null && (o = i.width, s = i.height), e.sWidth && e.sHeight) {
            var u = e.sx || 0,
                c = e.sy || 0;
            r.drawImage(i, u, c, e.sWidth, e.sHeight, n, a, o, s)
        } else if (e.sx && e.sy) {
            var u = e.sx,
                c = e.sy,
                f = o - u,
                v = s - c;
            r.drawImage(i, u, c, f, v, n, a, o, s)
        } else r.drawImage(i, n, a, o, s)
    }
}

function yA(r, t, e) {
    var i, n = e.text;
    if (n != null && (n += ""), n) {
        r.font = e.font || ci, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
        var a = void 0,
            o = void 0;
        r.setLineDash && e.lineDash && (i = b0(t), a = i[0], o = i[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (Wo(e) && r.strokeText(n, e.x, e.y), Uo(e) && r.fillText(n, e.x, e.y)) : (Uo(e) && r.fillText(n, e.x, e.y), Wo(e) && r.strokeText(n, e.x, e.y)), a && r.setLineDash([])
    }
}
var vv = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"],
    dv = [
        ["lineCap", "butt"],
        ["lineJoin", "miter"],
        ["miterLimit", 10]
    ];

function S0(r, t, e, i, n) {
    var a = !1;
    if (!i && (e = e || {}, t === e)) return !1;
    if (i || t.opacity !== e.opacity) {
        re(r, n), a = !0;
        var o = Math.max(Math.min(t.opacity, 1), 0);
        r.globalAlpha = isNaN(o) ? oi.opacity : o
    }(i || t.blend !== e.blend) && (a || (re(r, n), a = !0), r.globalCompositeOperation = t.blend || oi.blend);
    for (var s = 0; s < vv.length; s++) {
        var l = vv[s];
        (i || t[l] !== e[l]) && (a || (re(r, n), a = !0), r[l] = r.dpr * (t[l] || 0))
    }
    return (i || t.shadowColor !== e.shadowColor) && (a || (re(r, n), a = !0), r.shadowColor = t.shadowColor || oi.shadowColor), a
}

function pv(r, t, e, i, n) {
    var a = la(t, n.inHover),
        o = i ? null : e && la(e, n.inHover) || {};
    if (a === o) return !1;
    var s = S0(r, a, o, i, n);
    if ((i || a.fill !== o.fill) && (s || (re(r, n), s = !0), cv(a.fill) && (r.fillStyle = a.fill)), (i || a.stroke !== o.stroke) && (s || (re(r, n), s = !0), cv(a.stroke) && (r.strokeStyle = a.stroke)), (i || a.opacity !== o.opacity) && (s || (re(r, n), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
        var l = a.lineWidth,
            u = l / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
        r.lineWidth !== u && (s || (re(r, n), s = !0), r.lineWidth = u)
    }
    for (var c = 0; c < dv.length; c++) {
        var f = dv[c],
            v = f[0];
        (i || a[v] !== o[v]) && (s || (re(r, n), s = !0), r[v] = a[v] || f[1])
    }
    return s
}

function xA(r, t, e, i, n) {
    return S0(r, la(t, n.inHover), e && la(e, n.inHover), i, n)
}

function C0(r, t) {
    var e = t.transform,
        i = r.dpr || 1;
    e ? r.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : r.setTransform(i, 0, 0, i, 0, 0)
}

function wA(r, t, e) {
    for (var i = !1, n = 0; n < r.length; n++) {
        var a = r[n];
        i = i || a.isZeroArea(), C0(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip()
    }
    e.allClipped = i
}

function bA(r, t) {
    return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t)
}
var gv = 1,
    mv = 2,
    _v = 3,
    yv = 4;

function SA(r) {
    var t = Uo(r),
        e = Wo(r);
    return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1)
}

function re(r, t) {
    t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = ""
}

function la(r, t) {
    return t && r.__hoverStyle || r.style
}

function T0(r, t) {
    ai(r, t, {
        inHover: !1,
        viewWidth: 0,
        viewHeight: 0
    }, !0)
}

function ai(r, t, e, i) {
    var n = t.transform;
    if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
        t.__dirty &= ~fe, t.__isRendered = !1;
        return
    }
    var a = t.__clipPaths,
        o = e.prevElClipPaths,
        s = !1,
        l = !1;
    if ((!o || dA(a, o)) && (o && o.length && (re(r, e), r.restore(), l = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (re(r, e), r.save(), wA(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
        t.__isRendered = !1;
        return
    }
    t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
    var u = e.prevEl;
    u || (l = s = !0);
    var c = t instanceof gt && t.autoBatch && SA(t.style);
    s || bA(n, u.transform) ? (re(r, e), C0(r, t)) : c || re(r, e);
    var f = la(t, e.inHover);
    t instanceof gt ? (e.lastDrawType !== gv && (l = !0, e.lastDrawType = gv), pv(r, t, u, l, e), (!c || !e.batchFill && !e.batchStroke) && r.beginPath(), mA(r, t, f, c), c && (e.batchFill = f.fill || "", e.batchStroke = f.stroke || "")) : t instanceof du ? (e.lastDrawType !== _v && (l = !0, e.lastDrawType = _v), pv(r, t, u, l, e), yA(r, t, f)) : t instanceof gi ? (e.lastDrawType !== mv && (l = !0, e.lastDrawType = mv), xA(r, t, u, l, e), _A(r, t, f)) : t.getTemporalDisplayables && (e.lastDrawType !== yv && (l = !0, e.lastDrawType = yv), CA(r, t, e)), c && i && re(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0
}

function CA(r, t, e) {
    var i = t.getDisplayables(),
        n = t.getTemporalDisplayables();
    r.save();
    var a = {
            prevElClipPaths: null,
            prevEl: null,
            allClipped: !1,
            viewWidth: e.viewWidth,
            viewHeight: e.viewHeight,
            inHover: e.inHover
        },
        o, s;
    for (o = t.getCursor(), s = i.length; o < s; o++) {
        var l = i[o];
        l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), ai(r, l, a, o === s - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l
    }
    for (var u = 0, c = n.length; u < c; u++) {
        var l = n[u];
        l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), ai(r, l, a, u === c - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l
    }
    t.clearTemporalDisplayables(), t.notClear = !0, r.restore()
}
var wl = new rA,
    xv = new pa(100),
    wv = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];

function bv(r, t) {
    if (r === "none") return null;
    var e = t.getDevicePixelRatio(),
        i = t.getZr(),
        n = i.painter.type === "svg";
    r.dirty && wl.delete(r);
    var a = wl.get(r);
    if (a) return a;
    var o = ht(r, {
        symbol: "rect",
        symbolSize: 1,
        symbolKeepAspect: !0,
        color: "rgba(0, 0, 0, 0.2)",
        backgroundColor: null,
        dashArrayX: 5,
        dashArrayY: 5,
        rotation: 0,
        maxTileWidth: 512,
        maxTileHeight: 512
    });
    o.backgroundColor === "none" && (o.backgroundColor = null);
    var s = {
        repeat: "repeat"
    };
    return l(s), s.rotation = o.rotation, s.scaleX = s.scaleY = n ? 1 : 1 / e, wl.set(r, s), r.dirty = !1, s;

    function l(u) {
        for (var c = [e], f = !0, v = 0; v < wv.length; ++v) {
            var h = o[wv[v]];
            if (h != null && !H(h) && !V(h) && !_t(h) && typeof h != "boolean") {
                f = !1;
                break
            }
            c.push(h)
        }
        var d;
        if (f) {
            d = c.join(",") + (n ? "-svg" : "");
            var m = xv.get(d);
            m && (n ? u.svgElement = m : u.image = m)
        }
        var p = D0(o.dashArrayX),
            g = TA(o.dashArrayY),
            _ = M0(o.symbol),
            y = MA(p),
            x = A0(g),
            S = !n && Ji.createCanvas(),
            w = n && {
                tag: "g",
                attrs: {},
                key: "dcl",
                children: []
            },
            T = M(),
            C;
        S && (S.width = T.width * e, S.height = T.height * e, C = S.getContext("2d")), I(), f && xv.put(d, S || w), u.image = S, u.svgElement = w, u.svgWidth = T.width, u.svgHeight = T.height;

        function M() {
            for (var A = 1, L = 0, P = y.length; L < P; ++L) A = Of(A, y[L]);
            for (var k = 1, L = 0, P = _.length; L < P; ++L) k = Of(k, _[L].length);
            A *= k;
            var R = x * y.length * _.length;
            return {
                width: Math.max(1, Math.min(A, o.maxTileWidth)),
                height: Math.max(1, Math.min(R, o.maxTileHeight))
            }
        }

        function I() {
            C && (C.clearRect(0, 0, S.width, S.height), o.backgroundColor && (C.fillStyle = o.backgroundColor, C.fillRect(0, 0, S.width, S.height)));
            for (var A = 0, L = 0; L < g.length; ++L) A += g[L];
            if (A <= 0) return;
            for (var P = -x, k = 0, R = 0, E = 0; P < T.height;) {
                if (k % 2 === 0) {
                    for (var W = R / 2 % _.length, F = 0, $ = 0, G = 0; F < T.width * 2;) {
                        for (var tt = 0, L = 0; L < p[E].length; ++L) tt += p[E][L];
                        if (tt <= 0) break;
                        if ($ % 2 === 0) {
                            var J = (1 - o.symbolSize) * .5,
                                at = F + p[E][$] * J,
                                lt = P + g[k] * J,
                                Et = p[E][$] * o.symbolSize,
                                mt = g[k] * o.symbolSize,
                                Kt = G / 2 % _[W].length;
                            ce(at, lt, Et, mt, _[W][Kt])
                        }
                        F += p[E][$], ++G, ++$, $ === p[E].length && ($ = 0)
                    }++E, E === p.length && (E = 0)
                }
                P += g[k], ++R, ++k, k === g.length && (k = 0)
            }

            function ce(Ot, Dt, q, et, Be) {
                var Rt = n ? 1 : e,
                    lr = sa(Be, Ot * Rt, Dt * Rt, q * Rt, et * Rt, o.color, o.symbolKeepAspect);
                if (n) {
                    var Ke = i.painter.renderOneToVNode(lr);
                    Ke && w.children.push(Ke)
                } else T0(C, lr)
            }
        }
    }
}

function M0(r) {
    if (!r || r.length === 0) return [
        ["rect"]
    ];
    if (V(r)) return [
        [r]
    ];
    for (var t = !0, e = 0; e < r.length; ++e)
        if (!V(r[e])) {
            t = !1;
            break
        } if (t) return M0([r]);
    for (var i = [], e = 0; e < r.length; ++e) V(r[e]) ? i.push([r[e]]) : i.push(r[e]);
    return i
}

function D0(r) {
    if (!r || r.length === 0) return [
        [0, 0]
    ];
    if (_t(r)) {
        var t = Math.ceil(r);
        return [
            [t, t]
        ]
    }
    for (var e = !0, i = 0; i < r.length; ++i)
        if (!_t(r[i])) {
            e = !1;
            break
        } if (e) return D0([r]);
    for (var n = [], i = 0; i < r.length; ++i)
        if (_t(r[i])) {
            var t = Math.ceil(r[i]);
            n.push([t, t])
        } else {
            var t = Z(r[i], function (s) {
                return Math.ceil(s)
            });
            t.length % 2 === 1 ? n.push(t.concat(t)) : n.push(t)
        } return n
}

function TA(r) {
    if (!r || typeof r == "object" && r.length === 0) return [0, 0];
    if (_t(r)) {
        var t = Math.ceil(r);
        return [t, t]
    }
    var e = Z(r, function (i) {
        return Math.ceil(i)
    });
    return r.length % 2 ? e.concat(e) : e
}

function MA(r) {
    return Z(r, function (t) {
        return A0(t)
    })
}

function A0(r) {
    for (var t = 0, e = 0; e < r.length; ++e) t += r[e];
    return r.length % 2 === 1 ? t * 2 : t
}

function DA(r, t) {
    r.eachRawSeries(function (e) {
        if (!r.isSeriesFiltered(e)) {
            var i = e.getData();
            i.hasItemVisual() && i.each(function (o) {
                var s = i.getItemVisual(o, "decal");
                if (s) {
                    var l = i.ensureUniqueItemVisual(o, "style");
                    l.decal = bv(s, t)
                }
            });
            var n = i.getVisual("decal");
            if (n) {
                var a = i.getVisual("style");
                a.decal = bv(n, t)
            }
        }
    })
}
var ke = new Xe,
    I0 = {};

function AA(r, t) {
    I0[r] = t
}

function IA(r) {
    return I0[r]
}
var LA = 1,
    PA = 800,
    kA = 900,
    EA = 1e3,
    RA = 2e3,
    OA = 5e3,
    L0 = 1e3,
    BA = 1100,
    Hc = 2e3,
    P0 = 3e3,
    NA = 4e3,
    xs = 4500,
    FA = 4600,
    $A = 5e3,
    zA = 6e3,
    k0 = 7e3,
    HA = {
        PROCESSOR: {
            FILTER: EA,
            SERIES_FILTER: PA,
            STATISTIC: OA
        },
        VISUAL: {
            LAYOUT: L0,
            PROGRESSIVE_LAYOUT: BA,
            GLOBAL: Hc,
            CHART: P0,
            POST_CHART_LAYOUT: FA,
            COMPONENT: NA,
            BRUSH: $A,
            CHART_ITEM: xs,
            ARIA: zA,
            DECAL: k0
        }
    },
    zt = "__flagInMainProcess",
    Qt = "__pendingUpdate",
    bl = "__needsUpdateStatus",
    Sv = /^[a-zA-Z0-9_]+$/,
    Sl = "__connectUpdateStatus",
    Cv = 0,
    GA = 1,
    VA = 2;

function E0(r) {
    return function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (this.isDisposed()) {
            this.id;
            return
        }
        return O0(this, r, t)
    }
}

function R0(r) {
    return function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return O0(this, r, t)
    }
}

function O0(r, t, e) {
    return e[0] = e[0] && e[0].toLowerCase(), Xe.prototype[t].apply(r, e)
}
var B0 = function (r) {
        z(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t
    }(Xe),
    N0 = B0.prototype;
N0.on = R0("on");
N0.off = R0("off");
var ki, Cl, Ja, vr, Tl, Ml, Dl, xn, wn, Tv, Mv, Al, Dv, to, Av, F0, de, Iv, $0 = function (r) {
        z(t, r);

        function t(e, i, n) {
            var a = r.call(this, new XD) || this;
            a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], n = n || {}, V(i) && (i = z0[i]), a._dom = e;
            var o = "canvas",
                s = "auto",
                l = !1;
            n.ssr;
            var u = a._zr = Ef(e, {
                renderer: n.renderer || o,
                devicePixelRatio: n.devicePixelRatio,
                width: n.width,
                height: n.height,
                ssr: n.ssr,
                useDirtyRect: rt(n.useDirtyRect, l),
                useCoarsePointer: rt(n.useCoarsePointer, s),
                pointerSize: n.pointerSize
            });
            a._ssr = n.ssr, a._throttledZrFlush = h0(xt(u.flush, u), 17), i = ot(i), i && Zg(i, !0), a._theme = i, a._locale = Q3(n.locale || Mg), a._coordSysMgr = new Rc;
            var c = a._api = Av(a);

            function f(v, h) {
                return v.__prio - h.__prio
            }
            return co(Xo, f), co(Eu, f), a._scheduler = new g0(a, c, Eu, Xo), a._messageCenter = new B0, a._initEvents(), a.resize = xt(a.resize, a), u.animation.on("frame", a._onframe, a), Tv(u, a), Mv(u, a), Ul(a), a
        }
        return t.prototype._onframe = function () {
            if (!this._disposed) {
                Iv(this);
                var e = this._scheduler;
                if (this[Qt]) {
                    var i = this[Qt].silent;
                    this[zt] = !0;
                    try {
                        ki(this), vr.update.call(this, null, this[Qt].updateParams)
                    } catch (l) {
                        throw this[zt] = !1, this[Qt] = null, l
                    }
                    this._zr.flush(), this[zt] = !1, this[Qt] = null, xn.call(this, i), wn.call(this, i)
                } else if (e.unfinished) {
                    var n = LA,
                        a = this._model,
                        o = this._api;
                    e.unfinished = !1;
                    do {
                        var s = +new Date;
                        e.performSeriesTasks(a), e.performDataProcessorTasks(a), Ml(this, a), e.performVisualTasks(a), to(this, this._model, o, "remain", {}), n -= +new Date - s
                    } while (n > 0 && e.unfinished);
                    e.unfinished || this._zr.flush()
                }
            }
        }, t.prototype.getDom = function () {
            return this._dom
        }, t.prototype.getId = function () {
            return this.id
        }, t.prototype.getZr = function () {
            return this._zr
        }, t.prototype.isSSR = function () {
            return this._ssr
        }, t.prototype.setOption = function (e, i, n) {
            if (!this[zt]) {
                if (this._disposed) {
                    this.id;
                    return
                }
                var a, o, s;
                if (X(i) && (n = i.lazyUpdate, a = i.silent, o = i.replaceMerge, s = i.transition, i = i.notMerge), this[zt] = !0, !this._model || i) {
                    var l = new PM(this._api),
                        u = this._theme,
                        c = this._model = new Ec;
                    c.scheduler = this._scheduler, c.ssr = this._ssr, c.init(null, null, null, u, this._locale, l)
                }
                this._model.setOption(e, {
                    replaceMerge: o
                }, Ru);
                var f = {
                    seriesTransition: s,
                    optionChanged: !0
                };
                if (n) this[Qt] = {
                    silent: a,
                    updateParams: f
                }, this[zt] = !1, this.getZr().wakeUp();
                else {
                    try {
                        ki(this), vr.update.call(this, null, f)
                    } catch (v) {
                        throw this[Qt] = null, this[zt] = !1, v
                    }
                    this._ssr || this._zr.flush(), this[Qt] = null, this[zt] = !1, xn.call(this, a), wn.call(this, a)
                }
            }
        }, t.prototype.setTheme = function () {}, t.prototype.getModel = function () {
            return this._model
        }, t.prototype.getOption = function () {
            return this._model && this._model.getOption()
        }, t.prototype.getWidth = function () {
            return this._zr.getWidth()
        }, t.prototype.getHeight = function () {
            return this._zr.getHeight()
        }, t.prototype.getDevicePixelRatio = function () {
            return this._zr.painter.dpr || j.hasGlobalWindow && window.devicePixelRatio || 1
        }, t.prototype.getRenderedCanvas = function (e) {
            return this.renderToCanvas(e)
        }, t.prototype.renderToCanvas = function (e) {
            e = e || {};
            var i = this._zr.painter;
            return i.getRenderedCanvas({
                backgroundColor: e.backgroundColor || this._model.get("backgroundColor"),
                pixelRatio: e.pixelRatio || this.getDevicePixelRatio()
            })
        }, t.prototype.renderToSVGString = function (e) {
            e = e || {};
            var i = this._zr.painter;
            return i.renderToString({
                useViewBox: e.useViewBox
            })
        }, t.prototype.getSvgDataURL = function () {
            if (j.svgSupported) {
                var e = this._zr,
                    i = e.storage.getDisplayList();
                return D(i, function (n) {
                    n.stopAnimation(null, !0)
                }), e.painter.toDataURL()
            }
        }, t.prototype.getDataURL = function (e) {
            if (this._disposed) {
                this.id;
                return
            }
            e = e || {};
            var i = e.excludeComponents,
                n = this._model,
                a = [],
                o = this;
            D(i, function (l) {
                n.eachComponent({
                    mainType: l
                }, function (u) {
                    var c = o._componentsMap[u.__viewId];
                    c.group.ignore || (a.push(c), c.group.ignore = !0)
                })
            });
            var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
            return D(a, function (l) {
                l.group.ignore = !1
            }), s
        }, t.prototype.getConnectedDataURL = function (e) {
            if (this._disposed) {
                this.id;
                return
            }
            var i = e.type === "svg",
                n = this.group,
                a = Math.min,
                o = Math.max,
                s = 1 / 0;
            if (Lv[n]) {
                var l = s,
                    u = s,
                    c = -s,
                    f = -s,
                    v = [],
                    h = e && e.pixelRatio || this.getDevicePixelRatio();
                D(Yn, function (y, x) {
                    if (y.group === n) {
                        var S = i ? y.getZr().painter.getSvgDom().innerHTML : y.renderToCanvas(ot(e)),
                            w = y.getDom().getBoundingClientRect();
                        l = a(w.left, l), u = a(w.top, u), c = o(w.right, c), f = o(w.bottom, f), v.push({
                            dom: S,
                            left: w.left,
                            top: w.top
                        })
                    }
                }), l *= h, u *= h, c *= h, f *= h;
                var d = c - l,
                    m = f - u,
                    p = Ji.createCanvas(),
                    g = Ef(p, {
                        renderer: i ? "svg" : "canvas"
                    });
                if (g.resize({
                        width: d,
                        height: m
                    }), i) {
                    var _ = "";
                    return D(v, function (y) {
                        var x = y.left - l,
                            S = y.top - u;
                        _ += '<g transform="translate(' + x + "," + S + ')">' + y.dom + "</g>"
                    }), g.painter.getSvgRoot().innerHTML = _, e.connectedBackgroundColor && g.painter.setBackgroundColor(e.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL()
                } else return e.connectedBackgroundColor && g.add(new ae({
                    shape: {
                        x: 0,
                        y: 0,
                        width: d,
                        height: m
                    },
                    style: {
                        fill: e.connectedBackgroundColor
                    }
                })), D(v, function (y) {
                    var x = new gi({
                        style: {
                            x: y.left * h - l,
                            y: y.top * h - u,
                            image: y.dom
                        }
                    });
                    g.add(x)
                }), g.refreshImmediately(), p.toDataURL("image/" + (e && e.type || "png"))
            } else return this.getDataURL(e)
        }, t.prototype.convertToPixel = function (e, i) {
            return Tl(this, "convertToPixel", e, i)
        }, t.prototype.convertFromPixel = function (e, i) {
            return Tl(this, "convertFromPixel", e, i)
        }, t.prototype.containPixel = function (e, i) {
            if (this._disposed) {
                this.id;
                return
            }
            var n = this._model,
                a, o = Zs(n, e);
            return D(o, function (s, l) {
                l.indexOf("Models") >= 0 && D(s, function (u) {
                    var c = u.coordinateSystem;
                    if (c && c.containPoint) a = a || !!c.containPoint(i);
                    else if (l === "seriesModels") {
                        var f = this._chartsMap[u.__viewId];
                        f && f.containPoint && (a = a || f.containPoint(i, u))
                    }
                }, this)
            }, this), !!a
        }, t.prototype.getVisual = function (e, i) {
            var n = this._model,
                a = Zs(n, e, {
                    defaultMainType: "series"
                }),
                o = a.seriesModel,
                s = o.getData(),
                l = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
            return l != null ? KD(s, l, i) : jD(s, i)
        }, t.prototype.getViewOfComponentModel = function (e) {
            return this._componentsMap[e.__viewId]
        }, t.prototype.getViewOfSeriesModel = function (e) {
            return this._chartsMap[e.__viewId]
        }, t.prototype._initEvents = function () {
            var e = this;
            D(WA, function (i) {
                var n = function (a) {
                    var o = e.getModel(),
                        s = a.target,
                        l, u = i === "globalout";
                    if (u ? l = {} : s && En(s, function (d) {
                            var m = vt(d);
                            if (m && m.dataIndex != null) {
                                var p = m.dataModel || o.getSeriesByIndex(m.seriesIndex);
                                return l = p && p.getDataParams(m.dataIndex, m.dataType, s) || {}, !0
                            } else if (m.eventData) return l = O({}, m.eventData), !0
                        }, !0), l) {
                        var c = l.componentType,
                            f = l.componentIndex;
                        (c === "markLine" || c === "markPoint" || c === "markArea") && (c = "series", f = l.seriesIndex);
                        var v = c && f != null && o.getComponent(c, f),
                            h = v && e[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
                        l.event = a, l.type = i, e._$eventProcessor.eventInfo = {
                            targetEl: s,
                            packedEvent: l,
                            model: v,
                            view: h
                        }, e.trigger(i, l)
                    }
                };
                n.zrEventfulCallAtLast = !0, e._zr.on(i, n, e)
            }), D(Un, function (i, n) {
                e._messageCenter.on(n, function (a) {
                    this.trigger(n, a)
                }, e)
            }), D(["selectchanged"], function (i) {
                e._messageCenter.on(i, function (n) {
                    this.trigger(i, n)
                }, e)
            }), JD(this._messageCenter, this, this._api)
        }, t.prototype.isDisposed = function () {
            return this._disposed
        }, t.prototype.clear = function () {
            if (this._disposed) {
                this.id;
                return
            }
            this.setOption({
                series: []
            }, !0)
        }, t.prototype.dispose = function () {
            if (this._disposed) {
                this.id;
                return
            }
            this._disposed = !0;
            var e = this.getDom();
            e && Sp(this.getDom(), Vc, "");
            var i = this,
                n = i._api,
                a = i._model;
            D(i._componentsViews, function (o) {
                o.dispose(a, n)
            }), D(i._chartsViews, function (o) {
                o.dispose(a, n)
            }), i._zr.dispose(), i._dom = i._model = i._chartsMap = i._componentsMap = i._chartsViews = i._componentsViews = i._scheduler = i._api = i._zr = i._throttledZrFlush = i._theme = i._coordSysMgr = i._messageCenter = null, delete Yn[i.id]
        }, t.prototype.resize = function (e) {
            if (!this[zt]) {
                if (this._disposed) {
                    this.id;
                    return
                }
                this._zr.resize(e);
                var i = this._model;
                if (this._loadingFX && this._loadingFX.resize(), !!i) {
                    var n = i.resetOption("media"),
                        a = e && e.silent;
                    this[Qt] && (a == null && (a = this[Qt].silent), n = !0, this[Qt] = null), this[zt] = !0;
                    try {
                        n && ki(this), vr.update.call(this, {
                            type: "resize",
                            animation: O({
                                duration: 0
                            }, e && e.animation)
                        })
                    } catch (o) {
                        throw this[zt] = !1, o
                    }
                    this[zt] = !1, xn.call(this, a), wn.call(this, a)
                }
            }
        }, t.prototype.showLoading = function (e, i) {
            if (this._disposed) {
                this.id;
                return
            }
            if (X(e) && (i = e, e = ""), e = e || "default", this.hideLoading(), !!Ou[e]) {
                var n = Ou[e](this._api, i),
                    a = this._zr;
                this._loadingFX = n, a.add(n)
            }
        }, t.prototype.hideLoading = function () {
            if (this._disposed) {
                this.id;
                return
            }
            this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
        }, t.prototype.makeActionFromEvent = function (e) {
            var i = O({}, e);
            return i.type = Un[e.type], i
        }, t.prototype.dispatchAction = function (e, i) {
            if (this._disposed) {
                this.id;
                return
            }
            if (X(i) || (i = {
                    silent: !!i
                }), !!Yo[e.type] && this._model) {
                if (this[zt]) {
                    this._pendingActions.push(e);
                    return
                }
                var n = i.silent;
                Dl.call(this, e, n);
                var a = i.flush;
                a ? this._zr.flush() : a !== !1 && j.browser.weChat && this._throttledZrFlush(), xn.call(this, n), wn.call(this, n)
            }
        }, t.prototype.updateLabelLayout = function () {
            ke.trigger("series:layoutlabels", this._model, this._api, {
                updatedSeries: []
            })
        }, t.prototype.appendData = function (e) {
            if (this._disposed) {
                this.id;
                return
            }
            var i = e.seriesIndex,
                n = this.getModel(),
                a = n.getSeriesByIndex(i);
            a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp()
        }, t.internalField = function () {
            ki = function (f) {
                var v = f._scheduler;
                v.restorePipelines(f._model), v.prepareStageTasks(), Cl(f, !0), Cl(f, !1), v.plan()
            }, Cl = function (f, v) {
                for (var h = f._model, d = f._scheduler, m = v ? f._componentsViews : f._chartsViews, p = v ? f._componentsMap : f._chartsMap, g = f._zr, _ = f._api, y = 0; y < m.length; y++) m[y].__alive = !1;
                v ? h.eachComponent(function (w, T) {
                    w !== "series" && x(T)
                }) : h.eachSeries(x);

                function x(w) {
                    var T = w.__requireNewView;
                    w.__requireNewView = !1;
                    var C = "_ec_" + w.id + "_" + w.type,
                        M = !T && p[C];
                    if (!M) {
                        var I = We(w.type),
                            A = v ? Pr.getClass(I.main, I.sub) : ir.getClass(I.sub);
                        M = new A, M.init(h, _), p[C] = M, m.push(M), g.add(M.group)
                    }
                    w.__viewId = M.__id = C, M.__alive = !0, M.__model = w, M.group.__ecComponentInfo = {
                        mainType: w.mainType,
                        index: w.componentIndex
                    }, !v && d.prepareView(M, w, h, _)
                }
                for (var y = 0; y < m.length;) {
                    var S = m[y];
                    S.__alive ? y++ : (!v && S.renderTask.dispose(), g.remove(S.group), S.dispose(h, _), m.splice(y, 1), p[S.__id] === S && delete p[S.__id], S.__id = S.group.__ecComponentInfo = null)
                }
            }, Ja = function (f, v, h, d, m) {
                var p = f._model;
                if (p.setUpdatePayload(h), !d) {
                    D([].concat(f._componentsViews).concat(f._chartsViews), S);
                    return
                }
                var g = {};
                g[d + "Id"] = h[d + "Id"], g[d + "Index"] = h[d + "Index"], g[d + "Name"] = h[d + "Name"];
                var _ = {
                    mainType: d,
                    query: g
                };
                m && (_.subType = m);
                var y = h.excludeSeriesId,
                    x;
                y != null && (x = it(), D(Zt(y), function (w) {
                    var T = Ue(w, null);
                    T != null && x.set(T, !0)
                })), p && p.eachComponent(_, function (w) {
                    var T = x && x.get(w.id) != null;
                    if (!T)
                        if (lh(h))
                            if (w instanceof ji) h.type === si && !h.notBlur && !w.get(["emphasis", "disabled"]) && IT(w, h, f._api);
                            else {
                                var C = gc(w.mainType, w.componentIndex, h.name, f._api),
                                    M = C.focusSelf,
                                    I = C.dispatchers;
                                h.type === si && M && !h.notBlur && gu(w.mainType, w.componentIndex, f._api), I && D(I, function (A) {
                                    h.type === si ? Ro(A) : Oo(A)
                                })
                            }
                    else yu(h) && w instanceof ji && (kT(w, h, f._api), oh(w), de(f))
                }, f), p && p.eachComponent(_, function (w) {
                    var T = x && x.get(w.id) != null;
                    T || S(f[d === "series" ? "_chartsMap" : "_componentsMap"][w.__viewId])
                }, f);

                function S(w) {
                    w && w.__alive && w[v] && w[v](w.__model, p, f._api, h)
                }
            }, vr = {
                prepareAndUpdate: function (f) {
                    ki(this), vr.update.call(this, f, {
                        optionChanged: f.newOption != null
                    })
                },
                update: function (f, v) {
                    var h = this._model,
                        d = this._api,
                        m = this._zr,
                        p = this._coordSysMgr,
                        g = this._scheduler;
                    if (h) {
                        h.setUpdatePayload(f), g.restoreData(h, f), g.performSeriesTasks(h), p.create(h, d), g.performDataProcessorTasks(h, f), Ml(this, h), p.update(h, d), e(h), g.performVisualTasks(h, f), Al(this, h, d, f, v);
                        var _ = h.get("backgroundColor") || "transparent",
                            y = h.get("darkMode");
                        m.setBackgroundColor(_), y != null && y !== "auto" && m.setDarkMode(y), ke.trigger("afterupdate", h, d)
                    }
                },
                updateTransform: function (f) {
                    var v = this,
                        h = this._model,
                        d = this._api;
                    if (h) {
                        h.setUpdatePayload(f);
                        var m = [];
                        h.eachComponent(function (g, _) {
                            if (g !== "series") {
                                var y = v.getViewOfComponentModel(_);
                                if (y && y.__alive)
                                    if (y.updateTransform) {
                                        var x = y.updateTransform(_, h, d, f);
                                        x && x.update && m.push(y)
                                    } else m.push(y)
                            }
                        });
                        var p = it();
                        h.eachSeries(function (g) {
                            var _ = v._chartsMap[g.__viewId];
                            if (_.updateTransform) {
                                var y = _.updateTransform(g, h, d, f);
                                y && y.update && p.set(g.uid, 1)
                            } else p.set(g.uid, 1)
                        }), e(h), this._scheduler.performVisualTasks(h, f, {
                            setDirty: !0,
                            dirtyMap: p
                        }), to(this, h, d, f, {}, p), ke.trigger("afterupdate", h, d)
                    }
                },
                updateView: function (f) {
                    var v = this._model;
                    v && (v.setUpdatePayload(f), ir.markUpdateMethod(f, "updateView"), e(v), this._scheduler.performVisualTasks(v, f, {
                        setDirty: !0
                    }), Al(this, v, this._api, f, {}), ke.trigger("afterupdate", v, this._api))
                },
                updateVisual: function (f) {
                    var v = this,
                        h = this._model;
                    h && (h.setUpdatePayload(f), h.eachSeries(function (d) {
                        d.getData().clearAllVisual()
                    }), ir.markUpdateMethod(f, "updateVisual"), e(h), this._scheduler.performVisualTasks(h, f, {
                        visualType: "visual",
                        setDirty: !0
                    }), h.eachComponent(function (d, m) {
                        if (d !== "series") {
                            var p = v.getViewOfComponentModel(m);
                            p && p.__alive && p.updateVisual(m, h, v._api, f)
                        }
                    }), h.eachSeries(function (d) {
                        var m = v._chartsMap[d.__viewId];
                        m.updateVisual(d, h, v._api, f)
                    }), ke.trigger("afterupdate", h, this._api))
                },
                updateLayout: function (f) {
                    vr.update.call(this, f)
                }
            }, Tl = function (f, v, h, d) {
                if (f._disposed) {
                    f.id;
                    return
                }
                for (var m = f._model, p = f._coordSysMgr.getCoordinateSystems(), g, _ = Zs(m, h), y = 0; y < p.length; y++) {
                    var x = p[y];
                    if (x[v] && (g = x[v](m, _, d)) != null) return g
                }
            }, Ml = function (f, v) {
                var h = f._chartsMap,
                    d = f._scheduler;
                v.eachSeries(function (m) {
                    d.updateStreamModes(m, h[m.__viewId])
                })
            }, Dl = function (f, v) {
                var h = this,
                    d = this.getModel(),
                    m = f.type,
                    p = f.escapeConnect,
                    g = Yo[m],
                    _ = g.actionInfo,
                    y = (_.update || "update").split(":"),
                    x = y.pop(),
                    S = y[0] != null && We(y[0]);
                this[zt] = !0;
                var w = [f],
                    T = !1;
                f.batch && (T = !0, w = Z(f.batch, function (k) {
                    return k = ht(O({}, k), f), k.batch = null, k
                }));
                var C = [],
                    M, I = yu(f),
                    A = lh(f);
                if (A && Xp(this._api), D(w, function (k) {
                        if (M = g.action(k, h._model, h._api), M = M || O({}, k), M.type = _.event || M.type, C.push(M), A) {
                            var R = fc(f),
                                E = R.queryOptionMap,
                                W = R.mainTypeSpecified,
                                F = W ? E.keys()[0] : "series";
                            Ja(h, x, k, F), de(h)
                        } else I ? (Ja(h, x, k, "series"), de(h)) : S && Ja(h, x, k, S.main, S.sub)
                    }), x !== "none" && !A && !I && !S) try {
                    this[Qt] ? (ki(this), vr.update.call(this, f), this[Qt] = null) : vr[x].call(this, f)
                } catch (k) {
                    throw this[zt] = !1, k
                }
                if (T ? M = {
                        type: _.event || m,
                        escapeConnect: p,
                        batch: C
                    } : M = C[0], this[zt] = !1, !v) {
                    var L = this._messageCenter;
                    if (L.trigger(M.type, M), I) {
                        var P = {
                            type: "selectchanged",
                            escapeConnect: p,
                            selected: ET(d),
                            isFromClick: f.isFromClick || !1,
                            fromAction: f.type,
                            fromActionPayload: f
                        };
                        L.trigger(P.type, P)
                    }
                }
            }, xn = function (f) {
                for (var v = this._pendingActions; v.length;) {
                    var h = v.shift();
                    Dl.call(this, h, f)
                }
            }, wn = function (f) {
                !f && this.trigger("updated")
            }, Tv = function (f, v) {
                f.on("rendered", function (h) {
                    v.trigger("rendered", h), f.animation.isFinished() && !v[Qt] && !v._scheduler.unfinished && !v._pendingActions.length && v.trigger("finished")
                })
            }, Mv = function (f, v) {
                f.on("mouseover", function (h) {
                    var d = h.target,
                        m = En(d, _u);
                    m && (LT(m, h, v._api), de(v))
                }).on("mouseout", function (h) {
                    var d = h.target,
                        m = En(d, _u);
                    m && (PT(m, h, v._api), de(v))
                }).on("click", function (h) {
                    var d = h.target,
                        m = En(d, function (_) {
                            return vt(_).dataIndex != null
                        }, !0);
                    if (m) {
                        var p = m.selected ? "unselect" : "select",
                            g = vt(m);
                        v._api.dispatchAction({
                            type: p,
                            dataType: g.dataType,
                            dataIndexInside: g.dataIndex,
                            seriesIndex: g.seriesIndex,
                            isFromClick: !0
                        })
                    }
                })
            };

            function e(f) {
                f.clearColorPalette(), f.eachSeries(function (v) {
                    v.clearColorPalette()
                })
            }

            function i(f) {
                var v = [],
                    h = [],
                    d = !1;
                if (f.eachComponent(function (_, y) {
                        var x = y.get("zlevel") || 0,
                            S = y.get("z") || 0,
                            w = y.getZLevelKey();
                        d = d || !!w, (_ === "series" ? h : v).push({
                            zlevel: x,
                            z: S,
                            idx: y.componentIndex,
                            type: _,
                            key: w
                        })
                    }), d) {
                    var m = v.concat(h),
                        p, g;
                    co(m, function (_, y) {
                        return _.zlevel === y.zlevel ? _.z - y.z : _.zlevel - y.zlevel
                    }), D(m, function (_) {
                        var y = f.getComponent(_.type, _.idx),
                            x = _.zlevel,
                            S = _.key;
                        p != null && (x = Math.max(p, x)), S ? (x === p && S !== g && x++, g = S) : g && (x === p && x++, g = ""), p = x, y.setZLevel(x)
                    })
                }
            }
            Al = function (f, v, h, d, m) {
                i(v), Dv(f, v, h, d, m), D(f._chartsViews, function (p) {
                    p.__alive = !1
                }), to(f, v, h, d, m), D(f._chartsViews, function (p) {
                    p.__alive || p.remove(v, h)
                })
            }, Dv = function (f, v, h, d, m, p) {
                D(p || f._componentsViews, function (g) {
                    var _ = g.__model;
                    u(_, g), g.render(_, v, h, d), s(_, g), c(_, g)
                })
            }, to = function (f, v, h, d, m, p) {
                var g = f._scheduler;
                m = O(m || {}, {
                    updatedSeries: v.getSeries()
                }), ke.trigger("series:beforeupdate", v, h, m);
                var _ = !1;
                v.eachSeries(function (y) {
                    var x = f._chartsMap[y.__viewId];
                    x.__alive = !0;
                    var S = x.renderTask;
                    g.updatePayload(S, d), u(y, x), p && p.get(y.uid) && S.dirty(), S.perform(g.getPerformArgs(S)) && (_ = !0), x.group.silent = !!y.get("silent"), o(y, x), oh(y)
                }), g.unfinished = _ || g.unfinished, ke.trigger("series:layoutlabels", v, h, m), ke.trigger("series:transition", v, h, m), v.eachSeries(function (y) {
                    var x = f._chartsMap[y.__viewId];
                    s(y, x), c(y, x)
                }), a(f, v), ke.trigger("series:afterupdate", v, h, m)
            }, de = function (f) {
                f[bl] = !0, f.getZr().wakeUp()
            }, Iv = function (f) {
                f[bl] && (f.getZr().storage.traverse(function (v) {
                    Gn(v) || n(v)
                }), f[bl] = !1)
            };

            function n(f) {
                for (var v = [], h = f.currentStates, d = 0; d < h.length; d++) {
                    var m = h[d];
                    m === "emphasis" || m === "blur" || m === "select" || v.push(m)
                }
                f.selected && f.states.select && v.push("select"), f.hoverState === os && f.states.emphasis ? v.push("emphasis") : f.hoverState === as && f.states.blur && v.push("blur"), f.useStates(v)
            }

            function a(f, v) {
                var h = f._zr,
                    d = h.storage,
                    m = 0;
                d.traverse(function (p) {
                    p.isGroup || m++
                }), m > v.get("hoverLayerThreshold") && !j.node && !j.worker && v.eachSeries(function (p) {
                    if (!p.preventUsingHoverLayer) {
                        var g = f._chartsMap[p.__viewId];
                        g.__alive && g.eachRendered(function (_) {
                            _.states.emphasis && (_.states.emphasis.hoverLayer = !0)
                        })
                    }
                })
            }

            function o(f, v) {
                var h = f.get("blendMode") || null;
                v.eachRendered(function (d) {
                    d.isGroup || (d.style.blend = h)
                })
            }

            function s(f, v) {
                if (!f.preventAutoZ) {
                    var h = f.get("z") || 0,
                        d = f.get("zlevel") || 0;
                    v.eachRendered(function (m) {
                        return l(m, h, d, -1 / 0), !0
                    })
                }
            }

            function l(f, v, h, d) {
                var m = f.getTextContent(),
                    p = f.getTextGuideLine(),
                    g = f.isGroup;
                if (g)
                    for (var _ = f.childrenRef(), y = 0; y < _.length; y++) d = Math.max(l(_[y], v, h, d), d);
                else f.z = v, f.zlevel = h, d = Math.max(f.z2, d);
                if (m && (m.z = v, m.zlevel = h, isFinite(d) && (m.z2 = d + 2)), p) {
                    var x = f.textGuideLineConfig;
                    p.z = v, p.zlevel = h, isFinite(d) && (p.z2 = d + (x && x.showAbove ? 1 : -1))
                }
                return d
            }

            function u(f, v) {
                v.eachRendered(function (h) {
                    if (!Gn(h)) {
                        var d = h.getTextContent(),
                            m = h.getTextGuideLine();
                        h.stateTransition && (h.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), m && m.stateTransition && (m.stateTransition = null), h.hasState() ? (h.prevStates = h.currentStates, h.clearStates()) : h.prevStates && (h.prevStates = null)
                    }
                })
            }

            function c(f, v) {
                var h = f.getModel("stateAnimation"),
                    d = f.isAnimationEnabled(),
                    m = h.get("duration"),
                    p = m > 0 ? {
                        duration: m,
                        delay: h.get("delay"),
                        easing: h.get("easing")
                    } : null;
                v.eachRendered(function (g) {
                    if (g.states && g.states.emphasis) {
                        if (Gn(g)) return;
                        if (g instanceof gt && $T(g), g.__dirty) {
                            var _ = g.prevStates;
                            _ && g.useStates(_)
                        }
                        if (d) {
                            g.stateTransition = p;
                            var y = g.getTextContent(),
                                x = g.getTextGuideLine();
                            y && (y.stateTransition = p), x && (x.stateTransition = p)
                        }
                        g.__dirty && n(g)
                    }
                })
            }
            Av = function (f) {
                return new(function (v) {
                    z(h, v);

                    function h() {
                        return v !== null && v.apply(this, arguments) || this
                    }
                    return h.prototype.getCoordinateSystems = function () {
                        return f._coordSysMgr.getCoordinateSystems()
                    }, h.prototype.getComponentByElement = function (d) {
                        for (; d;) {
                            var m = d.__ecComponentInfo;
                            if (m != null) return f._model.getComponent(m.mainType, m.index);
                            d = d.parent
                        }
                    }, h.prototype.enterEmphasis = function (d, m) {
                        Ro(d, m), de(f)
                    }, h.prototype.leaveEmphasis = function (d, m) {
                        Oo(d, m), de(f)
                    }, h.prototype.enterBlur = function (d) {
                        AT(d), de(f)
                    }, h.prototype.leaveBlur = function (d) {
                        Vp(d), de(f)
                    }, h.prototype.enterSelect = function (d) {
                        Wp(d), de(f)
                    }, h.prototype.leaveSelect = function (d) {
                        Up(d), de(f)
                    }, h.prototype.getModel = function () {
                        return f.getModel()
                    }, h.prototype.getViewOfComponentModel = function (d) {
                        return f.getViewOfComponentModel(d)
                    }, h.prototype.getViewOfSeriesModel = function (d) {
                        return f.getViewOfSeriesModel(d)
                    }, h
                }(Yg))(f)
            }, F0 = function (f) {
                function v(h, d) {
                    for (var m = 0; m < h.length; m++) {
                        var p = h[m];
                        p[Sl] = d
                    }
                }
                D(Un, function (h, d) {
                    f._messageCenter.on(d, function (m) {
                        if (Lv[f.group] && f[Sl] !== Cv) {
                            if (m && m.escapeConnect) return;
                            var p = f.makeActionFromEvent(m),
                                g = [];
                            D(Yn, function (_) {
                                _ !== f && _.group === f.group && g.push(_)
                            }), v(g, Cv), D(g, function (_) {
                                _[Sl] !== GA && _.dispatchAction(p)
                            }), v(g, VA)
                        }
                    })
                })
            }
        }(), t
    }(Xe),
    Gc = $0.prototype;
Gc.on = E0("on");
Gc.off = E0("off");
Gc.one = function (r, t, e) {
    var i = this;

    function n() {
        for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
        t && t.apply && t.apply(this, a), i.off(r, n)
    }
    this.on.call(this, r, n, e)
};
var WA = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
var Yo = {},
    Un = {},
    Eu = [],
    Ru = [],
    Xo = [],
    z0 = {},
    Ou = {},
    Yn = {},
    Lv = {},
    UA = +new Date - 0,
    Vc = "_echarts_instance_";

function Pv(r, t, e) {
    var i = !(e && e.ssr);
    if (i) {
        var n = YA(r);
        if (n) return n
    }
    var a = new $0(r, t, e);
    return a.id = "ec_" + UA++, Yn[a.id] = a, i && Sp(r, Vc, a.id), F0(a), ke.trigger("afterinit", a), a
}

function YA(r) {
    return Yn[gC(r, Vc)]
}

function H0(r, t) {
    z0[r] = t
}

function G0(r) {
    dt(Ru, r) < 0 && Ru.push(r)
}

function V0(r, t) {
    Uc(Eu, r, t, RA)
}

function XA(r) {
    Wc("afterinit", r)
}

function ZA(r) {
    Wc("afterupdate", r)
}

function Wc(r, t) {
    ke.on(r, t)
}

function nn(r, t, e) {
    Q(t) && (e = t, t = "");
    var i = X(r) ? r.type : [r, r = {
        event: t
    }][0];
    r.event = (r.event || i).toLowerCase(), t = r.event, !Un[t] && (nr(Sv.test(i) && Sv.test(t)), Yo[i] || (Yo[i] = {
        action: e,
        actionInfo: r
    }), Un[t] = i)
}

function qA(r, t) {
    Rc.register(r, t)
}

function KA(r, t) {
    Uc(Xo, r, t, L0, "layout")
}

function _i(r, t) {
    Uc(Xo, r, t, P0, "visual")
}
var kv = [];

function Uc(r, t, e, i, n) {
    if ((Q(t) || X(t)) && (e = t, t = i), !(dt(kv, e) >= 0)) {
        kv.push(e);
        var a = g0.wrapStageHandler(e, n);
        a.__prio = t, a.__raw = e, r.push(a)
    }
}

function W0(r, t) {
    Ou[r] = t
}

function jA(r, t, e) {
    var i = IA("registerMap");
    i && i(r, t, e)
}
var QA = iD;
_i(Hc, kD);
_i(xs, ED);
_i(xs, RD);
_i(Hc, ZD);
_i(xs, qD);
_i(k0, DA);
G0(Zg);
V0(kA, $M);
W0("default", OD);
nn({
    type: si,
    event: si,
    update: si
}, ne);
nn({
    type: mo,
    event: mo,
    update: mo
}, ne);
nn({
    type: $n,
    event: $n,
    update: $n
}, ne);
nn({
    type: _o,
    event: _o,
    update: _o
}, ne);
nn({
    type: zn,
    event: zn,
    update: zn
}, ne);
H0("light", UD);
H0("dark", YD);

function bn(r) {
    return r == null ? 0 : r.length || 1
}

function Ev(r) {
    return r
}
var JA = function () {
    function r(t, e, i, n, a, o) {
        this._old = t, this._new = e, this._oldKeyGetter = i || Ev, this._newKeyGetter = n || Ev, this.context = a, this._diffModeMultiple = o === "multiple"
    }
    return r.prototype.add = function (t) {
        return this._add = t, this
    }, r.prototype.update = function (t) {
        return this._update = t, this
    }, r.prototype.updateManyToOne = function (t) {
        return this._updateManyToOne = t, this
    }, r.prototype.updateOneToMany = function (t) {
        return this._updateOneToMany = t, this
    }, r.prototype.updateManyToMany = function (t) {
        return this._updateManyToMany = t, this
    }, r.prototype.remove = function (t) {
        return this._remove = t, this
    }, r.prototype.execute = function () {
        this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]()
    }, r.prototype._executeOneToOne = function () {
        var t = this._old,
            e = this._new,
            i = {},
            n = new Array(t.length),
            a = new Array(e.length);
        this._initIndexMap(t, null, n, "_oldKeyGetter"), this._initIndexMap(e, i, a, "_newKeyGetter");
        for (var o = 0; o < t.length; o++) {
            var s = n[o],
                l = i[s],
                u = bn(l);
            if (u > 1) {
                var c = l.shift();
                l.length === 1 && (i[s] = l[0]), this._update && this._update(c, o)
            } else u === 1 ? (i[s] = null, this._update && this._update(l, o)) : this._remove && this._remove(o)
        }
        this._performRestAdd(a, i)
    }, r.prototype._executeMultiple = function () {
        var t = this._old,
            e = this._new,
            i = {},
            n = {},
            a = [],
            o = [];
        this._initIndexMap(t, i, a, "_oldKeyGetter"), this._initIndexMap(e, n, o, "_newKeyGetter");
        for (var s = 0; s < a.length; s++) {
            var l = a[s],
                u = i[l],
                c = n[l],
                f = bn(u),
                v = bn(c);
            if (f > 1 && v === 1) this._updateManyToOne && this._updateManyToOne(c, u), n[l] = null;
            else if (f === 1 && v > 1) this._updateOneToMany && this._updateOneToMany(c, u), n[l] = null;
            else if (f === 1 && v === 1) this._update && this._update(c, u), n[l] = null;
            else if (f > 1 && v > 1) this._updateManyToMany && this._updateManyToMany(c, u), n[l] = null;
            else if (f > 1)
                for (var h = 0; h < f; h++) this._remove && this._remove(u[h]);
            else this._remove && this._remove(u)
        }
        this._performRestAdd(o, n)
    }, r.prototype._performRestAdd = function (t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i],
                a = e[n],
                o = bn(a);
            if (o > 1)
                for (var s = 0; s < o; s++) this._add && this._add(a[s]);
            else o === 1 && this._add && this._add(a);
            e[n] = null
        }
    }, r.prototype._initIndexMap = function (t, e, i, n) {
        for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
            var s = "_ec_" + this[n](t[o], o);
            if (a || (i[o] = s), !!e) {
                var l = e[s],
                    u = bn(l);
                u === 0 ? (e[s] = o, a && i.push(s)) : u === 1 ? e[s] = [l, o] : l.push(o)
            }
        }
    }, r
}();
const t5 = JA;
var e5 = function () {
    function r(t, e) {
        this._encode = t, this._schema = e
    }
    return r.prototype.get = function () {
        return {
            fullDimensions: this._getFullDimensionNames(),
            encode: this._encode
        }
    }, r.prototype._getFullDimensionNames = function () {
        return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames
    }, r
}();

function r5(r, t) {
    var e = {},
        i = e.encode = {},
        n = it(),
        a = [],
        o = [],
        s = {};
    D(r.dimensions, function (v) {
        var h = r.getDimensionInfo(v),
            d = h.coordDim;
        if (d) {
            var m = h.coordDimIndex;
            Il(i, d)[m] = v, h.isExtraCoord || (n.set(d, 1), n5(h.type) && (a[0] = v), Il(s, d)[m] = r.getDimensionIndex(h.name)), h.defaultTooltip && o.push(v)
        }
        Hg.each(function (p, g) {
            var _ = Il(i, g),
                y = h.otherDims[g];
            y != null && y !== !1 && (_[y] = h.name)
        })
    });
    var l = [],
        u = {};
    n.each(function (v, h) {
        var d = i[h];
        u[h] = d[0], l = l.concat(d)
    }), e.dataDimsOnCoord = l, e.dataDimIndicesOnCoord = Z(l, function (v) {
        return r.getDimensionInfo(v).storeDimIndex
    }), e.encodeFirstDimNotExtra = u;
    var c = i.label;
    c && c.length && (a = c.slice());
    var f = i.tooltip;
    return f && f.length ? o = f.slice() : o.length || (o = a.slice()), i.defaultedLabel = a, i.defaultedTooltip = o, e.userOutput = new e5(s, t), e
}

function Il(r, t) {
    return r.hasOwnProperty(t) || (r[t] = []), r[t]
}

function i5(r) {
    return r === "category" ? "ordinal" : r === "time" ? "time" : "float"
}

function n5(r) {
    return !(r === "ordinal" || r === "time")
}
var bo = function () {
        function r(t) {
            this.otherDims = {}, t != null && O(this, t)
        }
        return r
    }(),
    a5 = Lt(),
    o5 = {
        float: "f",
        int: "i",
        ordinal: "o",
        number: "n",
        time: "t"
    },
    U0 = function () {
        function r(t) {
            this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted)
        }
        return r.prototype.isDimensionOmitted = function () {
            return this._dimOmitted
        }, r.prototype._updateDimOmitted = function (t) {
            this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = Z0(this.source)))
        }, r.prototype.getSourceDimensionIndex = function (t) {
            return rt(this._dimNameMap.get(t), -1)
        }, r.prototype.getSourceDimension = function (t) {
            var e = this.source.dimensionsDefine;
            if (e) return e[t]
        }, r.prototype.makeStoreSchema = function () {
            for (var t = this._fullDimCount, e = Kg(this.source), i = !q0(t), n = "", a = [], o = 0, s = 0; o < t; o++) {
                var l = void 0,
                    u = void 0,
                    c = void 0,
                    f = this.dimensions[s];
                if (f && f.storeDimIndex === o) l = e ? f.name : null, u = f.type, c = f.ordinalMeta, s++;
                else {
                    var v = this.getSourceDimension(o);
                    v && (l = e ? v.name : null, u = v.type)
                }
                a.push({
                    property: l,
                    type: u,
                    ordinalMeta: c
                }), e && l != null && (!f || !f.isCalculationCoord) && (n += i ? l.replace(/\`/g, "`1").replace(/\$/g, "`2") : l), n += "$", n += o5[u] || "f", c && (n += c.uid), n += "$"
            }
            var h = this.source,
                d = [h.seriesLayoutBy, h.startIndex, n].join("$$");
            return {
                dimensions: a,
                hash: d
            }
        }, r.prototype.makeOutputDimensionNames = function () {
            for (var t = [], e = 0, i = 0; e < this._fullDimCount; e++) {
                var n = void 0,
                    a = this.dimensions[i];
                if (a && a.storeDimIndex === e) a.isCalculationCoord || (n = a.name), i++;
                else {
                    var o = this.getSourceDimension(e);
                    o && (n = o.name)
                }
                t.push(n)
            }
            return t
        }, r.prototype.appendCalculationDimension = function (t) {
            this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0)
        }, r
    }();

function Y0(r) {
    return r instanceof U0
}

function X0(r) {
    for (var t = it(), e = 0; e < (r || []).length; e++) {
        var i = r[e],
            n = X(i) ? i.name : i;
        n != null && t.get(n) == null && t.set(n, e)
    }
    return t
}

function Z0(r) {
    var t = a5(r);
    return t.dimNameMap || (t.dimNameMap = X0(r.dimensionsDefine))
}

function q0(r) {
    return r > 30
}
var Sn = X,
    dr = Z,
    s5 = typeof Int32Array > "u" ? Array : Int32Array,
    l5 = "e\0\0",
    Rv = -1,
    u5 = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"],
    c5 = ["_approximateExtent"],
    Ov, eo, Cn, Tn, Ll, ro, Pl, K0 = function () {
        function r(t, e) {
            this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
            var i, n = !1;
            Y0(t) ? (i = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (n = !0, i = t), i = i || ["x", "y"];
            for (var a = {}, o = [], s = {}, l = !1, u = {}, c = 0; c < i.length; c++) {
                var f = i[c],
                    v = V(f) ? new bo({
                        name: f
                    }) : f instanceof bo ? f : new bo(f),
                    h = v.name;
                v.type = v.type || "float", v.coordDim || (v.coordDim = h, v.coordDimIndex = 0);
                var d = v.otherDims = v.otherDims || {};
                o.push(h), a[h] = v, u[h] != null && (l = !0), v.createInvertedIndices && (s[h] = []), d.itemName === 0 && (this._nameDimIdx = c), d.itemId === 0 && (this._idDimIdx = c), n && (v.storeDimIndex = c)
            }
            if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(l), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
                var m = this._dimIdxToName = it();
                D(o, function (p) {
                    m.set(a[p].storeDimIndex, p)
                })
            }
        }
        return r.prototype.getDimension = function (t) {
            var e = this._recognizeDimIndex(t);
            if (e == null) return t;
            if (e = t, !this._dimOmitted) return this.dimensions[e];
            var i = this._dimIdxToName.get(e);
            if (i != null) return i;
            var n = this._schema.getSourceDimension(e);
            if (n) return n.name
        }, r.prototype.getDimensionIndex = function (t) {
            var e = this._recognizeDimIndex(t);
            if (e != null) return e;
            if (t == null) return -1;
            var i = this._getDimInfo(t);
            return i ? i.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1
        }, r.prototype._recognizeDimIndex = function (t) {
            if (_t(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0)) return +t
        }, r.prototype._getStoreDimIndex = function (t) {
            var e = this.getDimensionIndex(t);
            return e
        }, r.prototype.getDimensionInfo = function (t) {
            return this._getDimInfo(this.getDimension(t))
        }, r.prototype._initGetDimensionInfo = function (t) {
            var e = this._dimInfos;
            this._getDimInfo = t ? function (i) {
                return e.hasOwnProperty(i) ? e[i] : void 0
            } : function (i) {
                return e[i]
            }
        }, r.prototype.getDimensionsOnCoord = function () {
            return this._dimSummary.dataDimsOnCoord.slice()
        }, r.prototype.mapDimension = function (t, e) {
            var i = this._dimSummary;
            if (e == null) return i.encodeFirstDimNotExtra[t];
            var n = i.encode[t];
            return n ? n[e] : null
        }, r.prototype.mapDimensionsAll = function (t) {
            var e = this._dimSummary,
                i = e.encode[t];
            return (i || []).slice()
        }, r.prototype.getStore = function () {
            return this._store
        }, r.prototype.initData = function (t, e, i) {
            var n = this,
                a;
            if (t instanceof Cu && (a = t), !a) {
                var o = this.dimensions,
                    s = Oc(t) || oe(t) ? new jg(t, o.length) : t;
                a = new Cu;
                var l = dr(o, function (u) {
                    return {
                        type: n._dimInfos[u].type,
                        property: u
                    }
                });
                a.initData(s, l, i)
            }
            this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = r5(this, this._schema), this.userOutput = this._dimSummary.userOutput
        }, r.prototype.appendData = function (t) {
            var e = this._store.appendData(t);
            this._doInit(e[0], e[1])
        }, r.prototype.appendValues = function (t, e) {
            var i = this._store.appendValues(t, e.length),
                n = i.start,
                a = i.end,
                o = this._shouldMakeIdFromName();
            if (this._updateOrdinalMeta(), e)
                for (var s = n; s < a; s++) {
                    var l = s - n;
                    this._nameList[s] = e[l], o && Pl(this, s)
                }
        }, r.prototype._updateOrdinalMeta = function () {
            for (var t = this._store, e = this.dimensions, i = 0; i < e.length; i++) {
                var n = this._dimInfos[e[i]];
                n.ordinalMeta && t.collectOrdinalMeta(n.storeDimIndex, n.ordinalMeta)
            }
        }, r.prototype._shouldMakeIdFromName = function () {
            var t = this._store.getProvider();
            return this._idDimIdx == null && t.getSource().sourceFormat !== Ar && !t.fillStorage
        }, r.prototype._doInit = function (t, e) {
            if (!(t >= e)) {
                var i = this._store,
                    n = i.getProvider();
                this._updateOrdinalMeta();
                var a = this._nameList,
                    o = this._idList,
                    s = n.getSource().sourceFormat,
                    l = s === De;
                if (l && !n.pure)
                    for (var u = [], c = t; c < e; c++) {
                        var f = n.getItem(c, u);
                        if (!this.hasItemOption && aC(f) && (this.hasItemOption = !0), f) {
                            var v = f.name;
                            a[c] == null && v != null && (a[c] = Ue(v, null));
                            var h = f.id;
                            o[c] == null && h != null && (o[c] = Ue(h, null))
                        }
                    }
                if (this._shouldMakeIdFromName())
                    for (var c = t; c < e; c++) Pl(this, c);
                Ov(this)
            }
        }, r.prototype.getApproximateExtent = function (t) {
            return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t))
        }, r.prototype.setApproximateExtent = function (t, e) {
            e = this.getDimension(e), this._approximateExtent[e] = t.slice()
        }, r.prototype.getCalculationInfo = function (t) {
            return this._calculationInfo[t]
        }, r.prototype.setCalculationInfo = function (t, e) {
            Sn(t) ? O(this._calculationInfo, t) : this._calculationInfo[t] = e
        }, r.prototype.getName = function (t) {
            var e = this.getRawIndex(t),
                i = this._nameList[e];
            return i == null && this._nameDimIdx != null && (i = Cn(this, this._nameDimIdx, e)), i == null && (i = ""), i
        }, r.prototype._getCategory = function (t, e) {
            var i = this._store.get(t, e),
                n = this._store.getOrdinalMeta(t);
            return n ? n.categories[i] : i
        }, r.prototype.getId = function (t) {
            return eo(this, this.getRawIndex(t))
        }, r.prototype.count = function () {
            return this._store.count()
        }, r.prototype.get = function (t, e) {
            var i = this._store,
                n = this._dimInfos[t];
            if (n) return i.get(n.storeDimIndex, e)
        }, r.prototype.getByRawIndex = function (t, e) {
            var i = this._store,
                n = this._dimInfos[t];
            if (n) return i.getByRawIndex(n.storeDimIndex, e)
        }, r.prototype.getIndices = function () {
            return this._store.getIndices()
        }, r.prototype.getDataExtent = function (t) {
            return this._store.getDataExtent(this._getStoreDimIndex(t))
        }, r.prototype.getSum = function (t) {
            return this._store.getSum(this._getStoreDimIndex(t))
        }, r.prototype.getMedian = function (t) {
            return this._store.getMedian(this._getStoreDimIndex(t))
        }, r.prototype.getValues = function (t, e) {
            var i = this,
                n = this._store;
            return H(t) ? n.getValues(dr(t, function (a) {
                return i._getStoreDimIndex(a)
            }), e) : n.getValues(t)
        }, r.prototype.hasValue = function (t) {
            for (var e = this._dimSummary.dataDimIndicesOnCoord, i = 0, n = e.length; i < n; i++)
                if (isNaN(this._store.get(e[i], t))) return !1;
            return !0
        }, r.prototype.indexOfName = function (t) {
            for (var e = 0, i = this._store.count(); e < i; e++)
                if (this.getName(e) === t) return e;
            return -1
        }, r.prototype.getRawIndex = function (t) {
            return this._store.getRawIndex(t)
        }, r.prototype.indexOfRawIndex = function (t) {
            return this._store.indexOfRawIndex(t)
        }, r.prototype.rawIndexOf = function (t, e) {
            var i = t && this._invertedIndicesMap[t],
                n = i[e];
            return n == null || isNaN(n) ? Rv : n
        }, r.prototype.indicesOfNearest = function (t, e, i) {
            return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, i)
        }, r.prototype.each = function (t, e, i) {
            Q(t) && (i = e, e = t, t = []);
            var n = i || this,
                a = dr(Tn(t), this._getStoreDimIndex, this);
            this._store.each(a, n ? xt(e, n) : e)
        }, r.prototype.filterSelf = function (t, e, i) {
            Q(t) && (i = e, e = t, t = []);
            var n = i || this,
                a = dr(Tn(t), this._getStoreDimIndex, this);
            return this._store = this._store.filter(a, n ? xt(e, n) : e), this
        }, r.prototype.selectRange = function (t) {
            var e = this,
                i = {},
                n = wt(t);
            return D(n, function (a) {
                var o = e._getStoreDimIndex(a);
                i[o] = t[a]
            }), this._store = this._store.selectRange(i), this
        }, r.prototype.mapArray = function (t, e, i) {
            Q(t) && (i = e, e = t, t = []), i = i || this;
            var n = [];
            return this.each(t, function () {
                n.push(e && e.apply(this, arguments))
            }, i), n
        }, r.prototype.map = function (t, e, i, n) {
            var a = i || n || this,
                o = dr(Tn(t), this._getStoreDimIndex, this),
                s = ro(this);
            return s._store = this._store.map(o, a ? xt(e, a) : e), s
        }, r.prototype.modify = function (t, e, i, n) {
            var a = i || n || this,
                o = dr(Tn(t), this._getStoreDimIndex, this);
            this._store.modify(o, a ? xt(e, a) : e)
        }, r.prototype.downSample = function (t, e, i, n) {
            var a = ro(this);
            return a._store = this._store.downSample(this._getStoreDimIndex(t), e, i, n), a
        }, r.prototype.lttbDownSample = function (t, e) {
            var i = ro(this);
            return i._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), i
        }, r.prototype.getRawDataItem = function (t) {
            return this._store.getRawDataItem(t)
        }, r.prototype.getItemModel = function (t) {
            var e = this.hostModel,
                i = this.getRawDataItem(t);
            return new Xt(i, e, e && e.ecModel)
        }, r.prototype.diff = function (t) {
            var e = this;
            return new t5(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function (i) {
                return eo(t, i)
            }, function (i) {
                return eo(e, i)
            })
        }, r.prototype.getVisual = function (t) {
            var e = this._visual;
            return e && e[t]
        }, r.prototype.setVisual = function (t, e) {
            this._visual = this._visual || {}, Sn(t) ? O(this._visual, t) : this._visual[t] = e
        }, r.prototype.getItemVisual = function (t, e) {
            var i = this._itemVisuals[t],
                n = i && i[e];
            return n ?? this.getVisual(e)
        }, r.prototype.hasItemVisual = function () {
            return this._itemVisuals.length > 0
        }, r.prototype.ensureUniqueItemVisual = function (t, e) {
            var i = this._itemVisuals,
                n = i[t];
            n || (n = i[t] = {});
            var a = n[e];
            return a == null && (a = this.getVisual(e), H(a) ? a = a.slice() : Sn(a) && (a = O({}, a)), n[e] = a), a
        }, r.prototype.setItemVisual = function (t, e, i) {
            var n = this._itemVisuals[t] || {};
            this._itemVisuals[t] = n, Sn(e) ? O(n, e) : n[e] = i
        }, r.prototype.clearAllVisual = function () {
            this._visual = {}, this._itemVisuals = []
        }, r.prototype.setLayout = function (t, e) {
            Sn(t) ? O(this._layout, t) : this._layout[t] = e
        }, r.prototype.getLayout = function (t) {
            return this._layout[t]
        }, r.prototype.getItemLayout = function (t) {
            return this._itemLayouts[t]
        }, r.prototype.setItemLayout = function (t, e, i) {
            this._itemLayouts[t] = i ? O(this._itemLayouts[t] || {}, e) : e
        }, r.prototype.clearItemLayouts = function () {
            this._itemLayouts.length = 0
        }, r.prototype.setItemGraphicEl = function (t, e) {
            var i = this.hostModel && this.hostModel.seriesIndex;
            _T(i, this.dataType, t, e), this._graphicEls[t] = e
        }, r.prototype.getItemGraphicEl = function (t) {
            return this._graphicEls[t]
        }, r.prototype.eachItemGraphicEl = function (t, e) {
            D(this._graphicEls, function (i, n) {
                i && t && t.call(e, i, n)
            })
        }, r.prototype.cloneShallow = function (t) {
            return t || (t = new r(this._schema ? this._schema : dr(this.dimensions, this._getDimInfo, this), this.hostModel)), Ll(t, this), t._store = this._store, t
        }, r.prototype.wrapMethod = function (t, e) {
            var i = this[t];
            Q(i) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                var n = i.apply(this, arguments);
                return e.apply(this, [n].concat(Ju(arguments)))
            })
        }, r.internalField = function () {
            Ov = function (t) {
                var e = t._invertedIndicesMap;
                D(e, function (i, n) {
                    var a = t._dimInfos[n],
                        o = a.ordinalMeta,
                        s = t._store;
                    if (o) {
                        i = e[n] = new s5(o.categories.length);
                        for (var l = 0; l < i.length; l++) i[l] = Rv;
                        for (var l = 0; l < s.count(); l++) i[s.get(a.storeDimIndex, l)] = l
                    }
                })
            }, Cn = function (t, e, i) {
                return Ue(t._getCategory(e, i), null)
            }, eo = function (t, e) {
                var i = t._idList[e];
                return i == null && t._idDimIdx != null && (i = Cn(t, t._idDimIdx, e)), i == null && (i = l5 + e), i
            }, Tn = function (t) {
                return H(t) || (t = t != null ? [t] : []), t
            }, ro = function (t) {
                var e = new r(t._schema ? t._schema : dr(t.dimensions, t._getDimInfo, t), t.hostModel);
                return Ll(e, t), e
            }, Ll = function (t, e) {
                D(u5.concat(e.__wrappedMethods || []), function (i) {
                    e.hasOwnProperty(i) && (t[i] = e[i])
                }), t.__wrappedMethods = e.__wrappedMethods, D(c5, function (i) {
                    t[i] = ot(e[i])
                }), t._calculationInfo = O({}, e._calculationInfo)
            }, Pl = function (t, e) {
                var i = t._nameList,
                    n = t._idList,
                    a = t._nameDimIdx,
                    o = t._idDimIdx,
                    s = i[e],
                    l = n[e];
                if (s == null && a != null && (i[e] = s = Cn(t, a, e)), l == null && o != null && (n[e] = l = Cn(t, o, e)), l == null && s != null) {
                    var u = t._nameRepeatCount,
                        c = u[s] = (u[s] || 0) + 1;
                    l = s, c > 1 && (l += "__ec__" + c), n[e] = l
                }
            }
        }(), r
    }();

function j0(r, t) {
    Oc(r) || (r = Bc(r)), t = t || {};
    var e = t.coordDimensions || [],
        i = t.dimensionsDefine || r.dimensionsDefine || [],
        n = it(),
        a = [],
        o = h5(r, e, i, t.dimensionsCount),
        s = t.canOmitUnusedDimensions && q0(o),
        l = i === r.dimensionsDefine,
        u = l ? Z0(r) : X0(i),
        c = t.encodeDefine;
    !c && t.encodeDefaulter && (c = t.encodeDefaulter(r, o));
    for (var f = it(c), v = new r0(o), h = 0; h < v.length; h++) v[h] = -1;

    function d(M) {
        var I = v[M];
        if (I < 0) {
            var A = i[M],
                L = X(A) ? A : {
                    name: A
                },
                P = new bo,
                k = L.name;
            k != null && u.get(k) != null && (P.name = P.displayName = k), L.type != null && (P.type = L.type), L.displayName != null && (P.displayName = L.displayName);
            var R = a.length;
            return v[M] = R, P.storeDimIndex = M, a.push(P), P
        }
        return a[I]
    }
    if (!s)
        for (var h = 0; h < o; h++) d(h);
    f.each(function (M, I) {
        var A = Zt(M).slice();
        if (A.length === 1 && !V(A[0]) && A[0] < 0) {
            f.set(I, !1);
            return
        }
        var L = f.set(I, []);
        D(A, function (P, k) {
            var R = V(P) ? u.get(P) : P;
            R != null && R < o && (L[k] = R, p(d(R), I, k))
        })
    });
    var m = 0;
    D(e, function (M) {
        var I, A, L, P;
        if (V(M)) I = M, P = {};
        else {
            P = M, I = P.name;
            var k = P.ordinalMeta;
            P.ordinalMeta = null, P = O({}, P), P.ordinalMeta = k, A = P.dimsDef, L = P.otherDims, P.name = P.coordDim = P.coordDimIndex = P.dimsDef = P.otherDims = null
        }
        var R = f.get(I);
        if (R !== !1) {
            if (R = Zt(R), !R.length)
                for (var E = 0; E < (A && A.length || 1); E++) {
                    for (; m < o && d(m).coordDim != null;) m++;
                    m < o && R.push(m++)
                }
            D(R, function (W, F) {
                var $ = d(W);
                if (l && P.type != null && ($.type = P.type), p(ht($, P), I, F), $.name == null && A) {
                    var G = A[F];
                    !X(G) && (G = {
                        name: G
                    }), $.name = $.displayName = G.name, $.defaultTooltip = G.defaultTooltip
                }
                L && ht($.otherDims, L)
            })
        }
    });

    function p(M, I, A) {
        Hg.get(I) != null ? M.otherDims[I] = A : (M.coordDim = I, M.coordDimIndex = A, n.set(I, !0))
    }
    var g = t.generateCoord,
        _ = t.generateCoordCount,
        y = _ != null;
    _ = g ? _ || 1 : 0;
    var x = g || "value";

    function S(M) {
        M.name == null && (M.name = M.coordDim)
    }
    if (s) D(a, function (M) {
        S(M)
    }), a.sort(function (M, I) {
        return M.storeDimIndex - I.storeDimIndex
    });
    else
        for (var w = 0; w < o; w++) {
            var T = d(w),
                C = T.coordDim;
            C == null && (T.coordDim = v5(x, n, y), T.coordDimIndex = 0, (!g || _ <= 0) && (T.isExtraCoord = !0), _--), S(T), T.type == null && (Wg(r, w) === Bt.Must || T.isExtraCoord && (T.otherDims.itemName != null || T.otherDims.seriesName != null)) && (T.type = "ordinal")
        }
    return f5(a), new U0({
        source: r,
        dimensions: a,
        fullDimensionCount: o,
        dimensionOmitted: s
    })
}

function f5(r) {
    for (var t = it(), e = 0; e < r.length; e++) {
        var i = r[e],
            n = i.name,
            a = t.get(n) || 0;
        a > 0 && (i.name = n + (a - 1)), a++, t.set(n, a)
    }
}

function h5(r, t, e, i) {
    var n = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, i || 0);
    return D(t, function (a) {
        var o;
        X(a) && (o = a.dimsDef) && (n = Math.max(n, o.length))
    }), n
}

function v5(r, t, e) {
    if (e || t.hasKey(r)) {
        for (var i = 0; t.hasKey(r + i);) i++;
        r += i
    }
    return t.set(r, !0), r
}
var d5 = function () {
    function r(t) {
        this.coordSysDims = [], this.axisMap = it(), this.categoryAxisMap = it(), this.coordSysName = t
    }
    return r
}();

function p5(r) {
    var t = r.get("coordinateSystem"),
        e = new d5(t),
        i = g5[t];
    if (i) return i(r, e, e.axisMap, e.categoryAxisMap), e
}
var g5 = {
    cartesian2d: function (r, t, e, i) {
        var n = r.getReferringComponents("xAxis", Ee).models[0],
            a = r.getReferringComponents("yAxis", Ee).models[0];
        t.coordSysDims = ["x", "y"], e.set("x", n), e.set("y", a), Ei(n) && (i.set("x", n), t.firstCategoryDimIndex = 0), Ei(a) && (i.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1))
    },
    singleAxis: function (r, t, e, i) {
        var n = r.getReferringComponents("singleAxis", Ee).models[0];
        t.coordSysDims = ["single"], e.set("single", n), Ei(n) && (i.set("single", n), t.firstCategoryDimIndex = 0)
    },
    polar: function (r, t, e, i) {
        var n = r.getReferringComponents("polar", Ee).models[0],
            a = n.findAxisModel("radiusAxis"),
            o = n.findAxisModel("angleAxis");
        t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), Ei(a) && (i.set("radius", a), t.firstCategoryDimIndex = 0), Ei(o) && (i.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1))
    },
    geo: function (r, t, e, i) {
        t.coordSysDims = ["lng", "lat"]
    },
    parallel: function (r, t, e, i) {
        var n = r.ecModel,
            a = n.getComponent("parallel", r.get("parallelIndex")),
            o = t.coordSysDims = a.dimensions.slice();
        D(a.parallelAxisIndex, function (s, l) {
            var u = n.getComponent("parallelAxis", s),
                c = o[l];
            e.set(c, u), Ei(u) && (i.set(c, u), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = l))
        })
    }
};

function Ei(r) {
    return r.get("type") === "category"
}

function m5(r, t, e) {
    e = e || {};
    var i = e.byIndex,
        n = e.stackedCoordDimension,
        a, o, s;
    _5(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
    var l = !!(r && r.get("stack")),
        u, c, f, v;
    if (D(a, function (_, y) {
            V(_) && (a[y] = _ = {
                name: _
            }), l && !_.isExtraCoord && (!i && !u && _.ordinalMeta && (u = _), !c && _.type !== "ordinal" && _.type !== "time" && (!n || n === _.coordDim) && (c = _))
        }), c && !i && !u && (i = !0), c) {
        f = "__\0ecstackresult_" + r.id, v = "__\0ecstackedover_" + r.id, u && (u.createInvertedIndices = !0);
        var h = c.coordDim,
            d = c.type,
            m = 0;
        D(a, function (_) {
            _.coordDim === h && m++
        });
        var p = {
                name: f,
                coordDim: h,
                coordDimIndex: m,
                type: d,
                isExtraCoord: !0,
                isCalculationCoord: !0,
                storeDimIndex: a.length
            },
            g = {
                name: v,
                coordDim: v,
                coordDimIndex: m + 1,
                type: d,
                isExtraCoord: !0,
                isCalculationCoord: !0,
                storeDimIndex: a.length + 1
            };
        o ? (s && (p.storeDimIndex = s.ensureCalculationDimension(v, d), g.storeDimIndex = s.ensureCalculationDimension(f, d)), o.appendCalculationDimension(p), o.appendCalculationDimension(g)) : (a.push(p), a.push(g))
    }
    return {
        stackedDimension: c && c.name,
        stackedByDimension: u && u.name,
        isStackedByIndex: i,
        stackedOverDimension: v,
        stackResultDimension: f
    }
}

function _5(r) {
    return !Y0(r.schema)
}

function ua(r, t) {
    return !!t && t === r.getCalculationInfo("stackedDimension")
}

function y5(r, t) {
    return ua(r, t) ? r.getCalculationInfo("stackResultDimension") : t
}

function x5(r, t) {
    var e = r.get("coordinateSystem"),
        i = Rc.get(e),
        n;
    return t && t.coordSysDims && (n = Z(t.coordSysDims, function (a) {
        var o = {
                name: a
            },
            s = t.axisMap.get(a);
        if (s) {
            var l = s.get("type");
            o.type = i5(l)
        }
        return o
    })), n || (n = i && (i.getDimensionsInfo ? i.getDimensionsInfo() : i.dimensions.slice()) || ["x", "y"]), n
}

function w5(r, t, e) {
    var i, n;
    return e && D(r, function (a, o) {
        var s = a.coordDim,
            l = e.categoryAxisMap.get(s);
        l && (i == null && (i = o), a.ordinalMeta = l.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (n = !0)
    }), !n && i != null && (r[i].otherDims.itemName = 0), i
}

function b5(r, t, e) {
    e = e || {};
    var i = t.getSourceManager(),
        n, a = !1;
    r ? (a = !0, n = Bc(r)) : (n = i.getSource(), a = n.sourceFormat === De);
    var o = p5(t),
        s = x5(t, o),
        l = e.useEncodeDefaulter,
        u = Q(l) ? l : l ? ie(hM, s, t) : null,
        c = {
            coordDimensions: s,
            generateCoord: e.generateCoord,
            encodeDefine: t.getEncode(),
            encodeDefaulter: u,
            canOmitUnusedDimensions: !a
        },
        f = j0(n, c),
        v = w5(f.dimensions, e.createInvertedIndices, o),
        h = a ? null : i.getSharedDataStore(f),
        d = m5(t, {
            schema: f,
            store: h
        }),
        m = new K0(f, t);
    m.setCalculationInfo(d);
    var p = v != null && S5(n) ? function (g, _, y, x) {
        return x === v ? y : this.defaultDimValueGetter(g, _, y, x)
    } : null;
    return m.hasItemOption = !1, m.initData(a ? n : h, null, p), m
}

function S5(r) {
    if (r.sourceFormat === De) {
        var t = C5(r.data || []);
        return !H(ga(t))
    }
}

function C5(r) {
    for (var t = 0; t < r.length && r[t] == null;) t++;
    return r[t]
}
var qe = function () {
    function r(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0]
    }
    return r.prototype.getSetting = function (t) {
        return this._setting[t]
    }, r.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }, r.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
    }, r.prototype.getExtent = function () {
        return this._extent.slice()
    }, r.prototype.setExtent = function (t, e) {
        var i = this._extent;
        isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
    }, r.prototype.isInExtentRange = function (t) {
        return this._extent[0] <= t && this._extent[1] >= t
    }, r.prototype.isBlank = function () {
        return this._isBlank
    }, r.prototype.setBlank = function (t) {
        this._isBlank = t
    }, r
}();
rs(qe);
var T5 = 0,
    Bu = function () {
        function r(t) {
            this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++T5
        }
        return r.createByAxisModel = function (t) {
            var e = t.option,
                i = e.data,
                n = i && Z(i, M5);
            return new r({
                categories: n,
                needCollect: !n,
                deduplication: e.dedplication !== !1
            })
        }, r.prototype.getOrdinal = function (t) {
            return this._getOrCreateMap().get(t)
        }, r.prototype.parseAndCollect = function (t) {
            var e, i = this._needCollect;
            if (!V(t) && !i) return t;
            if (i && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
            var n = this._getOrCreateMap();
            return e = n.get(t), e == null && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e)) : e = NaN), e
        }, r.prototype._getOrCreateMap = function () {
            return this._map || (this._map = it(this.categories))
        }, r
    }();

function M5(r) {
    return X(r) && r.value != null ? r.value : r + ""
}

function Nu(r) {
    return r.type === "interval" || r.type === "log"
}

function D5(r, t, e, i) {
    var n = {},
        a = r[1] - r[0],
        o = n.interval = mp(a / t, !0);
    e != null && o < e && (o = n.interval = e), i != null && o > i && (o = n.interval = i);
    var s = n.intervalPrecision = Q0(o),
        l = n.niceTickExtent = [It(Math.ceil(r[0] / o) * o, s), It(Math.floor(r[1] / o) * o, s)];
    return A5(l, r), n
}

function kl(r) {
    var t = Math.pow(10, cc(r)),
        e = r / t;
    return e ? e === 2 ? e = 3 : e === 3 ? e = 5 : e *= 2 : e = 1, It(e * t)
}

function Q0(r) {
    return tr(r) + 2
}

function Bv(r, t, e) {
    r[t] = Math.max(Math.min(r[t], e[1]), e[0])
}

function A5(r, t) {
    !isFinite(r[0]) && (r[0] = t[0]), !isFinite(r[1]) && (r[1] = t[1]), Bv(r, 0, t), Bv(r, 1, t), r[0] > r[1] && (r[0] = r[1])
}

function ws(r, t) {
    return r >= t[0] && r <= t[1]
}

function bs(r, t) {
    return t[1] === t[0] ?.5 : (r - t[0]) / (t[1] - t[0])
}

function Ss(r, t) {
    return r * (t[1] - t[0]) + t[0]
}
var J0 = function (r) {
    z(t, r);

    function t(e) {
        var i = r.call(this, e) || this;
        i.type = "ordinal";
        var n = i.getSetting("ordinalMeta");
        return n || (n = new Bu({})), H(n) && (n = new Bu({
            categories: Z(n, function (a) {
                return X(a) ? a.value : a
            })
        })), i._ordinalMeta = n, i._extent = i.getSetting("extent") || [0, n.categories.length - 1], i
    }
    return t.prototype.parse = function (e) {
        return e == null ? NaN : V(e) ? this._ordinalMeta.getOrdinal(e) : Math.round(e)
    }, t.prototype.contain = function (e) {
        return e = this.parse(e), ws(e, this._extent) && this._ordinalMeta.categories[e] != null
    }, t.prototype.normalize = function (e) {
        return e = this._getTickNumber(this.parse(e)), bs(e, this._extent)
    }, t.prototype.scale = function (e) {
        return e = Math.round(Ss(e, this._extent)), this.getRawOrdinalNumber(e)
    }, t.prototype.getTicks = function () {
        for (var e = [], i = this._extent, n = i[0]; n <= i[1];) e.push({
            value: n
        }), n++;
        return e
    }, t.prototype.getMinorTicks = function (e) {}, t.prototype.setSortInfo = function (e) {
        if (e == null) {
            this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
            return
        }
        for (var i = e.ordinalNumbers, n = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, l = Math.min(s, i.length); o < l; ++o) {
            var u = i[o];
            n[o] = u, a[u] = o
        }
        for (var c = 0; o < s; ++o) {
            for (; a[c] != null;) c++;
            n.push(c), a[c] = o
        }
    }, t.prototype._getTickNumber = function (e) {
        var i = this._ticksByOrdinalNumber;
        return i && e >= 0 && e < i.length ? i[e] : e
    }, t.prototype.getRawOrdinalNumber = function (e) {
        var i = this._ordinalNumbersByTick;
        return i && e >= 0 && e < i.length ? i[e] : e
    }, t.prototype.getLabel = function (e) {
        if (!this.isBlank()) {
            var i = this.getRawOrdinalNumber(e.value),
                n = this._ordinalMeta.categories[i];
            return n == null ? "" : n + ""
        }
    }, t.prototype.count = function () {
        return this._extent[1] - this._extent[0] + 1
    }, t.prototype.unionExtentFromData = function (e, i) {
        this.unionExtent(e.getApproximateExtent(i))
    }, t.prototype.isInExtentRange = function (e) {
        return e = this._getTickNumber(e), this._extent[0] <= e && this._extent[1] >= e
    }, t.prototype.getOrdinalMeta = function () {
        return this._ordinalMeta
    }, t.prototype.calcNiceTicks = function () {}, t.prototype.calcNiceExtent = function () {}, t.type = "ordinal", t
}(qe);
qe.registerClass(J0);
const tm = J0;
var ti = It,
    em = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e
        }
        return t.prototype.parse = function (e) {
            return e
        }, t.prototype.contain = function (e) {
            return ws(e, this._extent)
        }, t.prototype.normalize = function (e) {
            return bs(e, this._extent)
        }, t.prototype.scale = function (e) {
            return Ss(e, this._extent)
        }, t.prototype.setExtent = function (e, i) {
            var n = this._extent;
            isNaN(e) || (n[0] = parseFloat(e)), isNaN(i) || (n[1] = parseFloat(i))
        }, t.prototype.unionExtent = function (e) {
            var i = this._extent;
            e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1]), this.setExtent(i[0], i[1])
        }, t.prototype.getInterval = function () {
            return this._interval
        }, t.prototype.setInterval = function (e) {
            this._interval = e, this._niceExtent = this._extent.slice(), this._intervalPrecision = Q0(e)
        }, t.prototype.getTicks = function (e) {
            var i = this._interval,
                n = this._extent,
                a = this._niceExtent,
                o = this._intervalPrecision,
                s = [];
            if (!i) return s;
            var l = 1e4;
            n[0] < a[0] && (e ? s.push({
                value: ti(a[0] - i, o)
            }) : s.push({
                value: n[0]
            }));
            for (var u = a[0]; u <= a[1] && (s.push({
                    value: u
                }), u = ti(u + i, o), u !== s[s.length - 1].value);)
                if (s.length > l) return [];
            var c = s.length ? s[s.length - 1].value : a[1];
            return n[1] > c && (e ? s.push({
                value: ti(c + i, o)
            }) : s.push({
                value: n[1]
            })), s
        }, t.prototype.getMinorTicks = function (e) {
            for (var i = this.getTicks(!0), n = [], a = this.getExtent(), o = 1; o < i.length; o++) {
                for (var s = i[o], l = i[o - 1], u = 0, c = [], f = s.value - l.value, v = f / e; u < e - 1;) {
                    var h = ti(l.value + (u + 1) * v);
                    h > a[0] && h < a[1] && c.push(h), u++
                }
                n.push(c)
            }
            return n
        }, t.prototype.getLabel = function (e, i) {
            if (e == null) return "";
            var n = i && i.precision;
            n == null ? n = tr(e.value) || 0 : n === "auto" && (n = this._intervalPrecision);
            var a = ti(e.value, n, !0);
            return Bg(a)
        }, t.prototype.calcNiceTicks = function (e, i, n) {
            e = e || 5;
            var a = this._extent,
                o = a[1] - a[0];
            if (isFinite(o)) {
                o < 0 && (o = -o, a.reverse());
                var s = D5(a, e, i, n);
                this._intervalPrecision = s.intervalPrecision, this._interval = s.interval, this._niceExtent = s.niceTickExtent
            }
        }, t.prototype.calcNiceExtent = function (e) {
            var i = this._extent;
            if (i[0] === i[1])
                if (i[0] !== 0) {
                    var n = Math.abs(i[0]);
                    e.fixMax || (i[1] += n / 2), i[0] -= n / 2
                } else i[1] = 1;
            var a = i[1] - i[0];
            isFinite(a) || (i[0] = 0, i[1] = 1), this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
            var o = this._interval;
            e.fixMin || (i[0] = ti(Math.floor(i[0] / o) * o)), e.fixMax || (i[1] = ti(Math.ceil(i[1] / o) * o))
        }, t.prototype.setNiceExtent = function (e, i) {
            this._niceExtent = [e, i]
        }, t.type = "interval", t
    }(qe);
qe.registerClass(em);
const wa = em;
var rm = typeof Float32Array < "u",
    I5 = rm ? Float32Array : Array;

function zi(r) {
    return H(r) ? rm ? new Float32Array(r) : r : new I5(r)
}
var L5 = "__ec_stack_";

function im(r) {
    return r.get("stack") || L5 + r.seriesIndex
}

function nm(r) {
    return r.dim + r.index
}

function P5(r, t) {
    var e = [];
    return t.eachSeriesByType(r, function (i) {
        B5(i) && e.push(i)
    }), e
}

function k5(r) {
    var t = {};
    D(r, function (l) {
        var u = l.coordinateSystem,
            c = u.getBaseAxis();
        if (!(c.type !== "time" && c.type !== "value"))
            for (var f = l.getData(), v = c.dim + "_" + c.index, h = f.getDimensionIndex(f.mapDimension(c.dim)), d = f.getStore(), m = 0, p = d.count(); m < p; ++m) {
                var g = d.get(h, m);
                t[v] ? t[v].push(g) : t[v] = [g]
            }
    });
    var e = {};
    for (var i in t)
        if (t.hasOwnProperty(i)) {
            var n = t[i];
            if (n) {
                n.sort(function (l, u) {
                    return l - u
                });
                for (var a = null, o = 1; o < n.length; ++o) {
                    var s = n[o] - n[o - 1];
                    s > 0 && (a = a === null ? s : Math.min(a, s))
                }
                e[i] = a
            }
        } return e
}

function E5(r) {
    var t = k5(r),
        e = [];
    return D(r, function (i) {
        var n = i.coordinateSystem,
            a = n.getBaseAxis(),
            o = a.getExtent(),
            s;
        if (a.type === "category") s = a.getBandWidth();
        else if (a.type === "value" || a.type === "time") {
            var l = a.dim + "_" + a.index,
                u = t[l],
                c = Math.abs(o[1] - o[0]),
                f = a.scale.getExtent(),
                v = Math.abs(f[1] - f[0]);
            s = u ? c / v * u : c
        } else {
            var h = i.getData();
            s = Math.abs(o[1] - o[0]) / h.count()
        }
        var d = yt(i.get("barWidth"), s),
            m = yt(i.get("barMaxWidth"), s),
            p = yt(i.get("barMinWidth") || (N5(i) ?.5 : 1), s),
            g = i.get("barGap"),
            _ = i.get("barCategoryGap");
        e.push({
            bandWidth: s,
            barWidth: d,
            barMaxWidth: m,
            barMinWidth: p,
            barGap: g,
            barCategoryGap: _,
            axisKey: nm(a),
            stackId: im(i)
        })
    }), R5(e)
}

function R5(r) {
    var t = {};
    D(r, function (i, n) {
        var a = i.axisKey,
            o = i.bandWidth,
            s = t[a] || {
                bandWidth: o,
                remainedWidth: o,
                autoWidthCount: 0,
                categoryGap: null,
                gap: "20%",
                stacks: {}
            },
            l = s.stacks;
        t[a] = s;
        var u = i.stackId;
        l[u] || s.autoWidthCount++, l[u] = l[u] || {
            width: 0,
            maxWidth: 0
        };
        var c = i.barWidth;
        c && !l[u].width && (l[u].width = c, c = Math.min(s.remainedWidth, c), s.remainedWidth -= c);
        var f = i.barMaxWidth;
        f && (l[u].maxWidth = f);
        var v = i.barMinWidth;
        v && (l[u].minWidth = v);
        var h = i.barGap;
        h != null && (s.gap = h);
        var d = i.barCategoryGap;
        d != null && (s.categoryGap = d)
    });
    var e = {};
    return D(t, function (i, n) {
        e[n] = {};
        var a = i.stacks,
            o = i.bandWidth,
            s = i.categoryGap;
        if (s == null) {
            var l = wt(a).length;
            s = Math.max(35 - l * 4, 15) + "%"
        }
        var u = yt(s, o),
            c = yt(i.gap, 1),
            f = i.remainedWidth,
            v = i.autoWidthCount,
            h = (f - u) / (v + (v - 1) * c);
        h = Math.max(h, 0), D(a, function (g) {
            var _ = g.maxWidth,
                y = g.minWidth;
            if (g.width) {
                var x = g.width;
                _ && (x = Math.min(x, _)), y && (x = Math.max(x, y)), g.width = x, f -= x + c * x, v--
            } else {
                var x = h;
                _ && _ < x && (x = Math.min(_, f)), y && y > x && (x = y), x !== h && (g.width = x, f -= x + c * x, v--)
            }
        }), h = (f - u) / (v + (v - 1) * c), h = Math.max(h, 0);
        var d = 0,
            m;
        D(a, function (g, _) {
            g.width || (g.width = h), m = g, d += g.width * (1 + c)
        }), m && (d -= m.width * c);
        var p = -d / 2;
        D(a, function (g, _) {
            e[n][_] = e[n][_] || {
                bandWidth: o,
                offset: p,
                width: g.width
            }, p += g.width * (1 + c)
        })
    }), e
}

function O5(r, t, e) {
    if (r && t) {
        var i = r[nm(t)];
        return i != null && e != null ? i[im(e)] : i
    }
}

function B5(r) {
    return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d"
}

function N5(r) {
    return r.pipelineContext && r.pipelineContext.large
}
var F5 = function (r, t, e, i) {
        for (; e < i;) {
            var n = e + i >>> 1;
            r[n][1] < t ? e = n + 1 : i = n
        }
        return e
    },
    am = function (r) {
        z(t, r);

        function t(e) {
            var i = r.call(this, e) || this;
            return i.type = "time", i
        }
        return t.prototype.getLabel = function (e) {
            var i = this.getSetting("useUTC");
            return fs(e.value, Th[rM(Xi(this._minLevelUnit))] || Th.second, i, this.getSetting("locale"))
        }, t.prototype.getFormattedLabel = function (e, i, n) {
            var a = this.getSetting("useUTC"),
                o = this.getSetting("locale");
            return iM(e, i, n, o, a)
        }, t.prototype.getTicks = function () {
            var e = this._interval,
                i = this._extent,
                n = [];
            if (!e) return n;
            n.push({
                value: i[0],
                level: 0
            });
            var a = this.getSetting("useUTC"),
                o = U5(this._minLevelUnit, this._approxInterval, a, i);
            return n = n.concat(o), n.push({
                value: i[1],
                level: 0
            }), n
        }, t.prototype.calcNiceExtent = function (e) {
            var i = this._extent;
            if (i[0] === i[1] && (i[0] -= Ce, i[1] += Ce), i[1] === -1 / 0 && i[0] === 1 / 0) {
                var n = new Date;
                i[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), i[0] = i[1] - Ce
            }
            this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval)
        }, t.prototype.calcNiceTicks = function (e, i, n) {
            e = e || 10;
            var a = this._extent,
                o = a[1] - a[0];
            this._approxInterval = o / e, i != null && this._approxInterval < i && (this._approxInterval = i), n != null && this._approxInterval > n && (this._approxInterval = n);
            var s = io.length,
                l = Math.min(F5(io, this._approxInterval, 0, s), s - 1);
            this._interval = io[l][1], this._minLevelUnit = io[Math.max(l - 1, 0)][0]
        }, t.prototype.parse = function (e) {
            return _t(e) ? e : +ar(e)
        }, t.prototype.contain = function (e) {
            return ws(this.parse(e), this._extent)
        }, t.prototype.normalize = function (e) {
            return bs(this.parse(e), this._extent)
        }, t.prototype.scale = function (e) {
            return Ss(e, this._extent)
        }, t.type = "time", t
    }(wa),
    io = [
        ["second", Mc],
        ["minute", Dc],
        ["hour", Vn],
        ["quarter-day", Vn * 6],
        ["half-day", Vn * 12],
        ["day", Ce * 1.2],
        ["half-week", Ce * 3.5],
        ["week", Ce * 7],
        ["month", Ce * 31],
        ["quarter", Ce * 95],
        ["half-year", Ch / 2],
        ["year", Ch]
    ];

function $5(r, t, e, i) {
    var n = ar(t),
        a = ar(e),
        o = function (d) {
            return Mh(n, d, i) === Mh(a, d, i)
        },
        s = function () {
            return o("year")
        },
        l = function () {
            return s() && o("month")
        },
        u = function () {
            return l() && o("day")
        },
        c = function () {
            return u() && o("hour")
        },
        f = function () {
            return c() && o("minute")
        },
        v = function () {
            return f() && o("second")
        },
        h = function () {
            return v() && o("millisecond")
        };
    switch (r) {
        case "year":
            return s();
        case "month":
            return l();
        case "day":
            return u();
        case "hour":
            return c();
        case "minute":
            return f();
        case "second":
            return v();
        case "millisecond":
            return h()
    }
}

function z5(r, t) {
    return r /= Ce, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1
}

function H5(r) {
    var t = 30 * Ce;
    return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1
}

function G5(r) {
    return r /= Vn, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1
}

function Nv(r, t) {
    return r /= t ? Dc : Mc, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1
}

function V5(r) {
    return mp(r, !0)
}

function W5(r, t, e) {
    var i = new Date(r);
    switch (Xi(t)) {
        case "year":
        case "month":
            i[Lg(e)](0);
        case "day":
            i[Pg(e)](1);
        case "hour":
            i[kg(e)](0);
        case "minute":
            i[Eg(e)](0);
        case "second":
            i[Rg(e)](0), i[Og(e)](0)
    }
    return i.getTime()
}

function U5(r, t, e, i) {
    var n = 1e4,
        a = Ag,
        o = 0;

    function s(I, A, L, P, k, R, E) {
        for (var W = new Date(A), F = A, $ = W[P](); F < L && F <= i[1];) E.push({
            value: F
        }), $ += I, W[k]($), F = W.getTime();
        E.push({
            value: F,
            notAdd: !0
        })
    }

    function l(I, A, L) {
        var P = [],
            k = !A.length;
        if (!$5(Xi(I), i[0], i[1], e)) {
            k && (A = [{
                value: W5(new Date(i[0]), I, e)
            }, {
                value: i[1]
            }]);
            for (var R = 0; R < A.length - 1; R++) {
                var E = A[R].value,
                    W = A[R + 1].value;
                if (E !== W) {
                    var F = void 0,
                        $ = void 0,
                        G = void 0,
                        tt = !1;
                    switch (I) {
                        case "year":
                            F = Math.max(1, Math.round(t / Ce / 365)), $ = Ac(e), G = nM(e);
                            break;
                        case "half-year":
                        case "quarter":
                        case "month":
                            F = H5(t), $ = Zi(e), G = Lg(e);
                            break;
                        case "week":
                        case "half-week":
                        case "day":
                            F = z5(t), $ = hs(e), G = Pg(e), tt = !0;
                            break;
                        case "half-day":
                        case "quarter-day":
                        case "hour":
                            F = G5(t), $ = ea(e), G = kg(e);
                            break;
                        case "minute":
                            F = Nv(t, !0), $ = vs(e), G = Eg(e);
                            break;
                        case "second":
                            F = Nv(t, !1), $ = ds(e), G = Rg(e);
                            break;
                        case "millisecond":
                            F = V5(t), $ = ps(e), G = Og(e);
                            break
                    }
                    s(F, E, W, $, G, tt, P), I === "year" && L.length > 1 && R === 0 && L.unshift({
                        value: L[0].value - F
                    })
                }
            }
            for (var R = 0; R < P.length; R++) L.push(P[R]);
            return P
        }
    }
    for (var u = [], c = [], f = 0, v = 0, h = 0; h < a.length && o++ < n; ++h) {
        var d = Xi(a[h]);
        if (eM(a[h])) {
            l(a[h], u[u.length - 1] || [], c);
            var m = a[h + 1] ? Xi(a[h + 1]) : null;
            if (d !== m) {
                if (c.length) {
                    v = f, c.sort(function (I, A) {
                        return I.value - A.value
                    });
                    for (var p = [], g = 0; g < c.length; ++g) {
                        var _ = c[g].value;
                        (g === 0 || c[g - 1].value !== _) && (p.push(c[g]), _ >= i[0] && _ <= i[1] && f++)
                    }
                    var y = (i[1] - i[0]) / t;
                    if (f > y * 1.5 && v > y / 1.5 || (u.push(p), f > y || r === a[h])) break
                }
                c = []
            }
        }
    }
    for (var x = Jt(Z(u, function (I) {
            return Jt(I, function (A) {
                return A.value >= i[0] && A.value <= i[1] && !A.notAdd
            })
        }), function (I) {
            return I.length > 0
        }), S = [], w = x.length - 1, h = 0; h < x.length; ++h)
        for (var T = x[h], C = 0; C < T.length; ++C) S.push({
            value: T[C].value,
            level: w - h
        });
    S.sort(function (I, A) {
        return I.value - A.value
    });
    for (var M = [], h = 0; h < S.length; ++h)(h === 0 || S[h].value !== S[h - 1].value) && M.push(S[h]);
    return M
}
qe.registerClass(am);
const Y5 = am;
var Fv = qe.prototype,
    Xn = wa.prototype,
    X5 = It,
    Z5 = Math.floor,
    q5 = Math.ceil,
    no = Math.pow,
    Ie = Math.log,
    Yc = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = "log", e.base = 10, e._originalScale = new wa, e._interval = 0, e
        }
        return t.prototype.getTicks = function (e) {
            var i = this._originalScale,
                n = this._extent,
                a = i.getExtent(),
                o = Xn.getTicks.call(this, e);
            return Z(o, function (s) {
                var l = s.value,
                    u = It(no(this.base, l));
                return u = l === n[0] && this._fixMin ? ao(u, a[0]) : u, u = l === n[1] && this._fixMax ? ao(u, a[1]) : u, {
                    value: u
                }
            }, this)
        }, t.prototype.setExtent = function (e, i) {
            var n = Ie(this.base);
            e = Ie(Math.max(0, e)) / n, i = Ie(Math.max(0, i)) / n, Xn.setExtent.call(this, e, i)
        }, t.prototype.getExtent = function () {
            var e = this.base,
                i = Fv.getExtent.call(this);
            i[0] = no(e, i[0]), i[1] = no(e, i[1]);
            var n = this._originalScale,
                a = n.getExtent();
            return this._fixMin && (i[0] = ao(i[0], a[0])), this._fixMax && (i[1] = ao(i[1], a[1])), i
        }, t.prototype.unionExtent = function (e) {
            this._originalScale.unionExtent(e);
            var i = this.base;
            e[0] = Ie(e[0]) / Ie(i), e[1] = Ie(e[1]) / Ie(i), Fv.unionExtent.call(this, e)
        }, t.prototype.unionExtentFromData = function (e, i) {
            this.unionExtent(e.getApproximateExtent(i))
        }, t.prototype.calcNiceTicks = function (e) {
            e = e || 10;
            var i = this._extent,
                n = i[1] - i[0];
            if (!(n === 1 / 0 || n <= 0)) {
                var a = rC(n),
                    o = e / n * a;
                for (o <= .5 && (a *= 10); !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0;) a *= 10;
                var s = [It(q5(i[0] / a) * a), It(Z5(i[1] / a) * a)];
                this._interval = a, this._niceExtent = s
            }
        }, t.prototype.calcNiceExtent = function (e) {
            Xn.calcNiceExtent.call(this, e), this._fixMin = e.fixMin, this._fixMax = e.fixMax
        }, t.prototype.parse = function (e) {
            return e
        }, t.prototype.contain = function (e) {
            return e = Ie(e) / Ie(this.base), ws(e, this._extent)
        }, t.prototype.normalize = function (e) {
            return e = Ie(e) / Ie(this.base), bs(e, this._extent)
        }, t.prototype.scale = function (e) {
            return e = Ss(e, this._extent), no(this.base, e)
        }, t.type = "log", t
    }(qe),
    om = Yc.prototype;
om.getMinorTicks = Xn.getMinorTicks;
om.getLabel = Xn.getLabel;

function ao(r, t) {
    return X5(r, tr(t))
}
qe.registerClass(Yc);
const K5 = Yc;
var j5 = function () {
        function r(t, e, i) {
            this._prepareParams(t, e, i)
        }
        return r.prototype._prepareParams = function (t, e, i) {
            i[1] < i[0] && (i = [NaN, NaN]), this._dataMin = i[0], this._dataMax = i[1];
            var n = this._isOrdinal = t.type === "ordinal";
            this._needCrossZero = t.type === "interval" && e.getNeedCrossZero && e.getNeedCrossZero();
            var a = this._modelMinRaw = e.get("min", !0);
            Q(a) ? this._modelMinNum = oo(t, a({
                min: i[0],
                max: i[1]
            })) : a !== "dataMin" && (this._modelMinNum = oo(t, a));
            var o = this._modelMaxRaw = e.get("max", !0);
            if (Q(o) ? this._modelMaxNum = oo(t, o({
                    min: i[0],
                    max: i[1]
                })) : o !== "dataMax" && (this._modelMaxNum = oo(t, o)), n) this._axisDataLen = e.getCategories().length;
            else {
                var s = e.get("boundaryGap"),
                    l = H(s) ? s : [s || 0, s || 0];
                typeof l[0] == "boolean" || typeof l[1] == "boolean" ? this._boundaryGapInner = [0, 0] : this._boundaryGapInner = [Lr(l[0], 1), Lr(l[1], 1)]
            }
        }, r.prototype.calculate = function () {
            var t = this._isOrdinal,
                e = this._dataMin,
                i = this._dataMax,
                n = this._axisDataLen,
                a = this._boundaryGapInner,
                o = t ? null : i - e || Math.abs(e),
                s = this._modelMinRaw === "dataMin" ? e : this._modelMinNum,
                l = this._modelMaxRaw === "dataMax" ? i : this._modelMaxNum,
                u = s != null,
                c = l != null;
            s == null && (s = t ? n ? 0 : NaN : e - a[0] * o), l == null && (l = t ? n ? n - 1 : NaN : i + a[1] * o), (s == null || !isFinite(s)) && (s = NaN), (l == null || !isFinite(l)) && (l = NaN);
            var f = Co(s) || Co(l) || t && !n;
            this._needCrossZero && (s > 0 && l > 0 && !u && (s = 0), s < 0 && l < 0 && !c && (l = 0));
            var v = this._determinedMin,
                h = this._determinedMax;
            return v != null && (s = v, u = !0), h != null && (l = h, c = !0), {
                min: s,
                max: l,
                minFixed: u,
                maxFixed: c,
                isBlank: f
            }
        }, r.prototype.modifyDataMinMax = function (t, e) {
            this[J5[t]] = e
        }, r.prototype.setDeterminedMinMax = function (t, e) {
            var i = Q5[t];
            this[i] = e
        }, r.prototype.freeze = function () {
            this.frozen = !0
        }, r
    }(),
    Q5 = {
        min: "_determinedMin",
        max: "_determinedMax"
    },
    J5 = {
        min: "_dataMin",
        max: "_dataMax"
    };

function tI(r, t, e) {
    var i = r.rawExtentInfo;
    return i || (i = new j5(r, t, e), r.rawExtentInfo = i, i)
}

function oo(r, t) {
    return t == null ? null : Co(t) ? NaN : r.parse(t)
}

function sm(r, t) {
    var e = r.type,
        i = tI(r, t, r.getExtent()).calculate();
    r.setBlank(i.isBlank);
    var n = i.min,
        a = i.max,
        o = t.ecModel;
    if (o && e === "time") {
        var s = P5("bar", o),
            l = !1;
        if (D(s, function (f) {
                l = l || f.getBaseAxis() === t.axis
            }), l) {
            var u = E5(s),
                c = eI(n, a, t, u);
            n = c.min, a = c.max
        }
    }
    return {
        extent: [n, a],
        fixMin: i.minFixed,
        fixMax: i.maxFixed
    }
}

function eI(r, t, e, i) {
    var n = e.axis.getExtent(),
        a = n[1] - n[0],
        o = O5(i, e.axis);
    if (o === void 0) return {
        min: r,
        max: t
    };
    var s = 1 / 0;
    D(o, function (h) {
        s = Math.min(h.offset, s)
    });
    var l = -1 / 0;
    D(o, function (h) {
        l = Math.max(h.offset + h.width, l)
    }), s = Math.abs(s), l = Math.abs(l);
    var u = s + l,
        c = t - r,
        f = 1 - (s + l) / a,
        v = c / f - c;
    return t += v * (l / u), r -= v * (s / u), {
        min: r,
        max: t
    }
}

function $v(r, t) {
    var e = t,
        i = sm(r, e),
        n = i.extent,
        a = e.get("splitNumber");
    r instanceof K5 && (r.base = e.get("logBase"));
    var o = r.type,
        s = e.get("interval"),
        l = o === "interval" || o === "time";
    r.setExtent(n[0], n[1]), r.calcNiceExtent({
        splitNumber: a,
        fixMin: i.fixMin,
        fixMax: i.fixMax,
        minInterval: l ? e.get("minInterval") : null,
        maxInterval: l ? e.get("maxInterval") : null
    }), s != null && r.setInterval && r.setInterval(s)
}

function rI(r, t) {
    if (t = t || r.get("type"), t) switch (t) {
        case "category":
            return new tm({
                ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
                extent: [1 / 0, -1 / 0]
            });
        case "time":
            return new Y5({
                locale: r.ecModel.getLocaleModel(),
                useUTC: r.ecModel.get("useUTC")
            });
        default:
            return new(qe.getClass(t) || wa)
    }
}

function iI(r) {
    var t = r.scale.getExtent(),
        e = t[0],
        i = t[1];
    return !(e > 0 && i > 0 || e < 0 && i < 0)
}

function ba(r) {
    var t = r.getLabelModel().get("formatter"),
        e = r.type === "category" ? r.scale.getExtent()[0] : null;
    return r.scale.type === "time" ? function (i) {
        return function (n, a) {
            return r.scale.getFormattedLabel(n, a, i)
        }
    }(t) : V(t) ? function (i) {
        return function (n) {
            var a = r.scale.getLabel(n),
                o = i.replace("{value}", a ?? "");
            return o
        }
    }(t) : Q(t) ? function (i) {
        return function (n, a) {
            return e != null && (a = n.value - e), i(Xc(r, n), a, n.level != null ? {
                level: n.level
            } : null)
        }
    }(t) : function (i) {
        return r.scale.getLabel(i)
    }
}

function Xc(r, t) {
    return r.type === "category" ? r.scale.getLabel(t) : t.value
}

function nI(r) {
    var t = r.model,
        e = r.scale;
    if (!(!t.get(["axisLabel", "show"]) || e.isBlank())) {
        var i, n, a = e.getExtent();
        e instanceof tm ? n = e.count() : (i = e.getTicks(), n = i.length);
        var o = r.getLabelModel(),
            s = ba(r),
            l, u = 1;
        n > 40 && (u = Math.ceil(n / 40));
        for (var c = 0; c < n; c += u) {
            var f = i ? i[c] : {
                    value: a[0] + c
                },
                v = s(f, c),
                h = o.getTextRect(v),
                d = aI(h, o.get("rotate") || 0);
            l ? l.union(d) : l = d
        }
        return l
    }
}

function aI(r, t) {
    var e = t * Math.PI / 180,
        i = r.width,
        n = r.height,
        a = i * Math.abs(Math.cos(e)) + Math.abs(n * Math.sin(e)),
        o = i * Math.abs(Math.sin(e)) + Math.abs(n * Math.cos(e)),
        s = new ct(r.x, r.y, a, o);
    return s
}

function Zc(r) {
    var t = r.get("interval");
    return t ?? "auto"
}

function lm(r) {
    return r.type === "category" && Zc(r.getLabelModel()) === 0
}

function oI(r, t) {
    var e = {};
    return D(r.mapDimensionsAll(t), function (i) {
        e[y5(r, i)] = !0
    }), wt(e)
}
var sI = function () {
        function r() {}
        return r.prototype.getNeedCrossZero = function () {
            var t = this.option;
            return !t.scale
        }, r.prototype.getCoordSysModel = function () {}, r
    }(),
    zv = [],
    lI = {
        registerPreprocessor: G0,
        registerProcessor: V0,
        registerPostInit: XA,
        registerPostUpdate: ZA,
        registerUpdateLifecycle: Wc,
        registerAction: nn,
        registerCoordinateSystem: qA,
        registerLayout: KA,
        registerVisual: _i,
        registerTransform: QA,
        registerLoading: W0,
        registerMap: jA,
        registerImpl: AA,
        PRIORITY: HA,
        ComponentModel: bt,
        ComponentView: Pr,
        SeriesModel: ji,
        ChartView: ir,
        registerComponentModel: function (r) {
            bt.registerClass(r)
        },
        registerComponentView: function (r) {
            Pr.registerClass(r)
        },
        registerSeriesModel: function (r) {
            ji.registerClass(r)
        },
        registerChartView: function (r) {
            ir.registerClass(r)
        },
        registerSubTypeDefaulter: function (r, t) {
            bt.registerSubTypeDefaulter(r, t)
        },
        registerPainter: function (r, t) {
            qS(r, t)
        }
    };

function ca(r) {
    if (H(r)) {
        D(r, function (t) {
            ca(t)
        });
        return
    }
    dt(zv, r) >= 0 || (zv.push(r), Q(r) && (r = {
        install: r
    }), r.install(lI))
}
var fa = Lt();

function uI(r) {
    return r.type === "category" ? fI(r) : vI(r)
}

function cI(r, t) {
    return r.type === "category" ? hI(r, t) : {
        ticks: Z(r.scale.getTicks(), function (e) {
            return e.value
        })
    }
}

function fI(r) {
    var t = r.getLabelModel(),
        e = um(r, t);
    return !t.get("show") || r.scale.isBlank() ? {
        labels: [],
        labelCategoryInterval: e.labelCategoryInterval
    } : e
}

function um(r, t) {
    var e = cm(r, "labels"),
        i = Zc(t),
        n = fm(e, i);
    if (n) return n;
    var a, o;
    return Q(i) ? a = dm(r, i) : (o = i === "auto" ? dI(r) : i, a = vm(r, o)), hm(e, i, {
        labels: a,
        labelCategoryInterval: o
    })
}

function hI(r, t) {
    var e = cm(r, "ticks"),
        i = Zc(t),
        n = fm(e, i);
    if (n) return n;
    var a, o;
    if ((!t.get("show") || r.scale.isBlank()) && (a = []), Q(i)) a = dm(r, i, !0);
    else if (i === "auto") {
        var s = um(r, r.getLabelModel());
        o = s.labelCategoryInterval, a = Z(s.labels, function (l) {
            return l.tickValue
        })
    } else o = i, a = vm(r, o, !0);
    return hm(e, i, {
        ticks: a,
        tickCategoryInterval: o
    })
}

function vI(r) {
    var t = r.scale.getTicks(),
        e = ba(r);
    return {
        labels: Z(t, function (i, n) {
            return {
                level: i.level,
                formattedLabel: e(i, n),
                rawLabel: r.scale.getLabel(i),
                tickValue: i.value
            }
        })
    }
}

function cm(r, t) {
    return fa(r)[t] || (fa(r)[t] = [])
}

function fm(r, t) {
    for (var e = 0; e < r.length; e++)
        if (r[e].key === t) return r[e].value
}

function hm(r, t, e) {
    return r.push({
        key: t,
        value: e
    }), e
}

function dI(r) {
    var t = fa(r).autoInterval;
    return t ?? (fa(r).autoInterval = r.calculateCategoryInterval())
}

function pI(r) {
    var t = gI(r),
        e = ba(r),
        i = (t.axisRotate - t.labelRotate) / 180 * Math.PI,
        n = r.scale,
        a = n.getExtent(),
        o = n.count();
    if (a[1] - a[0] < 1) return 0;
    var s = 1;
    o > 40 && (s = Math.max(1, Math.floor(o / 40)));
    for (var l = a[0], u = r.dataToCoord(l + 1) - r.dataToCoord(l), c = Math.abs(u * Math.cos(i)), f = Math.abs(u * Math.sin(i)), v = 0, h = 0; l <= a[1]; l += s) {
        var d = 0,
            m = 0,
            p = sc(e({
                value: l
            }), t.font, "center", "top");
        d = p.width * 1.3, m = p.height * 1.3, v = Math.max(v, d, 7), h = Math.max(h, m, 7)
    }
    var g = v / c,
        _ = h / f;
    isNaN(g) && (g = 1 / 0), isNaN(_) && (_ = 1 / 0);
    var y = Math.max(0, Math.floor(Math.min(g, _))),
        x = fa(r.model),
        S = r.getExtent(),
        w = x.lastAutoInterval,
        T = x.lastTickCount;
    return w != null && T != null && Math.abs(w - y) <= 1 && Math.abs(T - o) <= 1 && w > y && x.axisExtent0 === S[0] && x.axisExtent1 === S[1] ? y = w : (x.lastTickCount = o, x.lastAutoInterval = y, x.axisExtent0 = S[0], x.axisExtent1 = S[1]), y
}

function gI(r) {
    var t = r.getLabelModel();
    return {
        axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
        labelRotate: t.get("rotate") || 0,
        font: t.getFont()
    }
}

function vm(r, t, e) {
    var i = ba(r),
        n = r.scale,
        a = n.getExtent(),
        o = r.getLabelModel(),
        s = [],
        l = Math.max((t || 0) + 1, 1),
        u = a[0],
        c = n.count();
    u !== 0 && l > 1 && c / l > 2 && (u = Math.round(Math.ceil(u / l) * l));
    var f = lm(r),
        v = o.get("showMinLabel") || f,
        h = o.get("showMaxLabel") || f;
    v && u !== a[0] && m(a[0]);
    for (var d = u; d <= a[1]; d += l) m(d);
    h && d - l !== a[1] && m(a[1]);

    function m(p) {
        var g = {
            value: p
        };
        s.push(e ? p : {
            formattedLabel: i(g),
            rawLabel: n.getLabel(g),
            tickValue: p
        })
    }
    return s
}

function dm(r, t, e) {
    var i = r.scale,
        n = ba(r),
        a = [];
    return D(i.getTicks(), function (o) {
        var s = i.getLabel(o),
            l = o.value;
        t(o.value, s) && a.push(e ? l : {
            formattedLabel: n(o),
            rawLabel: s,
            tickValue: l
        })
    }), a
}
var Hv = [0, 1],
    mI = function () {
        function r(t, e, i) {
            this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = i || [0, 0]
        }
        return r.prototype.contain = function (t) {
            var e = this._extent,
                i = Math.min(e[0], e[1]),
                n = Math.max(e[0], e[1]);
            return t >= i && t <= n
        }, r.prototype.containData = function (t) {
            return this.scale.contain(t)
        }, r.prototype.getExtent = function () {
            return this._extent.slice()
        }, r.prototype.getPixelPrecision = function (t) {
            return QS(t || this.scale.getExtent(), this._extent)
        }, r.prototype.setExtent = function (t, e) {
            var i = this._extent;
            i[0] = t, i[1] = e
        }, r.prototype.dataToCoord = function (t, e) {
            var i = this._extent,
                n = this.scale;
            return t = n.normalize(t), this.onBand && n.type === "ordinal" && (i = i.slice(), Gv(i, n.count())), uu(t, Hv, i, e)
        }, r.prototype.coordToData = function (t, e) {
            var i = this._extent,
                n = this.scale;
            this.onBand && n.type === "ordinal" && (i = i.slice(), Gv(i, n.count()));
            var a = uu(t, i, Hv, e);
            return this.scale.scale(a)
        }, r.prototype.pointToData = function (t, e) {}, r.prototype.getTicksCoords = function (t) {
            t = t || {};
            var e = t.tickModel || this.getTickModel(),
                i = cI(this, e),
                n = i.ticks,
                a = Z(n, function (s) {
                    return {
                        coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(s) : s),
                        tickValue: s
                    }
                }, this),
                o = e.get("alignWithLabel");
            return _I(this, a, o, t.clamp), a
        }, r.prototype.getMinorTicksCoords = function () {
            if (this.scale.type === "ordinal") return [];
            var t = this.model.getModel("minorTick"),
                e = t.get("splitNumber");
            e > 0 && e < 100 || (e = 5);
            var i = this.scale.getMinorTicks(e),
                n = Z(i, function (a) {
                    return Z(a, function (o) {
                        return {
                            coord: this.dataToCoord(o),
                            tickValue: o
                        }
                    }, this)
                }, this);
            return n
        }, r.prototype.getViewLabels = function () {
            return uI(this).labels
        }, r.prototype.getLabelModel = function () {
            return this.model.getModel("axisLabel")
        }, r.prototype.getTickModel = function () {
            return this.model.getModel("axisTick")
        }, r.prototype.getBandWidth = function () {
            var t = this._extent,
                e = this.scale.getExtent(),
                i = e[1] - e[0] + (this.onBand ? 1 : 0);
            i === 0 && (i = 1);
            var n = Math.abs(t[1] - t[0]);
            return Math.abs(n) / i
        }, r.prototype.calculateCategoryInterval = function () {
            return pI(this)
        }, r
    }();

function Gv(r, t) {
    var e = r[1] - r[0],
        i = t,
        n = e / i / 2;
    r[0] += n, r[1] -= n
}

function _I(r, t, e, i) {
    var n = t.length;
    if (!r.onBand || e || !n) return;
    var a = r.getExtent(),
        o, s;
    if (n === 1) t[0].coord = a[0], o = t[1] = {
        coord: a[1]
    };
    else {
        var l = t[n - 1].tickValue - t[0].tickValue,
            u = (t[n - 1].coord - t[0].coord) / l;
        D(t, function (h) {
            h.coord -= u / 2
        });
        var c = r.scale.getExtent();
        s = 1 + c[1] - t[n - 1].tickValue, o = {
            coord: t[n - 1].coord + u * s
        }, t.push(o)
    }
    var f = a[0] > a[1];
    v(t[0].coord, a[0]) && (i ? t[0].coord = a[0] : t.shift()), i && v(a[0], t[0].coord) && t.unshift({
        coord: a[0]
    }), v(a[1], o.coord) && (i ? o.coord = a[1] : t.pop()), i && v(o.coord, a[1]) && t.push({
        coord: a[1]
    });

    function v(h, d) {
        return h = It(h), d = It(d), f ? h > d : h < d
    }
}
const yI = mI;

function pm(r, t, e, i, n, a, o, s) {
    var l = n - r,
        u = a - t,
        c = e - r,
        f = i - t,
        v = Math.sqrt(c * c + f * f);
    c /= v, f /= v;
    var h = l * c + u * f,
        d = h / v;
    s && (d = Math.min(Math.max(d, 0), 1)), d *= v;
    var m = o[0] = r + d * c,
        p = o[1] = t + d * f;
    return Math.sqrt((m - n) * (m - n) + (p - a) * (p - a))
}
var wr = new K,
    Tt = new K,
    Nt = new K,
    br = new K,
    Ge = new K,
    Zo = [],
    Yt = new K;

function xI(r, t) {
    if (t <= 180 && t > 0) {
        t = t / 180 * Math.PI, wr.fromArray(r[0]), Tt.fromArray(r[1]), Nt.fromArray(r[2]), K.sub(br, wr, Tt), K.sub(Ge, Nt, Tt);
        var e = br.len(),
            i = Ge.len();
        if (!(e < .001 || i < .001)) {
            br.scale(1 / e), Ge.scale(1 / i);
            var n = br.dot(Ge),
                a = Math.cos(t);
            if (a < n) {
                var o = pm(Tt.x, Tt.y, Nt.x, Nt.y, wr.x, wr.y, Zo, !1);
                Yt.fromArray(Zo), Yt.scaleAndAdd(Ge, o / Math.tan(Math.PI - t));
                var s = Nt.x !== Tt.x ? (Yt.x - Tt.x) / (Nt.x - Tt.x) : (Yt.y - Tt.y) / (Nt.y - Tt.y);
                if (isNaN(s)) return;
                s < 0 ? K.copy(Yt, Tt) : s > 1 && K.copy(Yt, Nt), Yt.toArray(r[1])
            }
        }
    }
}

function wI(r, t, e) {
    if (e <= 180 && e > 0) {
        e = e / 180 * Math.PI, wr.fromArray(r[0]), Tt.fromArray(r[1]), Nt.fromArray(r[2]), K.sub(br, Tt, wr), K.sub(Ge, Nt, Tt);
        var i = br.len(),
            n = Ge.len();
        if (!(i < .001 || n < .001)) {
            br.scale(1 / i), Ge.scale(1 / n);
            var a = br.dot(t),
                o = Math.cos(e);
            if (a < o) {
                var s = pm(Tt.x, Tt.y, Nt.x, Nt.y, wr.x, wr.y, Zo, !1);
                Yt.fromArray(Zo);
                var l = Math.PI / 2,
                    u = Math.acos(Ge.dot(t)),
                    c = l + u - e;
                if (c >= l) K.copy(Yt, Nt);
                else {
                    Yt.scaleAndAdd(Ge, s / Math.tan(Math.PI / 2 - c));
                    var f = Nt.x !== Tt.x ? (Yt.x - Tt.x) / (Nt.x - Tt.x) : (Yt.y - Tt.y) / (Nt.y - Tt.y);
                    if (isNaN(f)) return;
                    f < 0 ? K.copy(Yt, Tt) : f > 1 && K.copy(Yt, Nt)
                }
                Yt.toArray(r[1])
            }
        }
    }
}

function El(r, t, e, i) {
    var n = e === "normal",
        a = n ? r : r.ensureState(e);
    a.ignore = t;
    var o = i.get("smooth");
    o && o === !0 && (o = .3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
    var s = i.getModel("lineStyle").getLineStyle();
    n ? r.useStyle(s) : a.style = s
}

function bI(r, t) {
    var e = t.smooth,
        i = t.points;
    if (i)
        if (r.moveTo(i[0][0], i[0][1]), e > 0 && i.length >= 3) {
            var n = Xl(i[0], i[1]),
                a = Xl(i[1], i[2]);
            if (!n || !a) {
                r.lineTo(i[1][0], i[1][1]), r.lineTo(i[2][0], i[2][1]);
                return
            }
            var o = Math.min(n, a) * e,
                s = Ds([], i[1], i[0], o / n),
                l = Ds([], i[1], i[2], o / a),
                u = Ds([], s, l, .5);
            r.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), r.bezierCurveTo(l[0], l[1], l[0], l[1], i[2][0], i[2][1])
        } else
            for (var c = 1; c < i.length; c++) r.lineTo(i[c][0], i[c][1])
}

function SI(r, t, e) {
    var i = r.getTextGuideLine(),
        n = r.getTextContent();
    if (!n) {
        i && r.removeTextGuideLine();
        return
    }
    for (var a = t.normal, o = a.get("show"), s = n.ignore, l = 0; l < Eo.length; l++) {
        var u = Eo[l],
            c = t[u],
            f = u === "normal";
        if (c) {
            var v = c.get("show"),
                h = f ? s : rt(n.states[u] && n.states[u].ignore, s);
            if (h || !rt(v, o)) {
                var d = f ? i : i && i.states[u];
                d && (d.ignore = !0), i && El(i, !0, u, c);
                continue
            }
            i || (i = new xa, r.setTextGuideLine(i), !f && (s || !o) && El(i, !0, "normal", t.normal), r.stateProxy && (i.stateProxy = r.stateProxy)), El(i, !1, u, c)
        }
    }
    if (i) {
        ht(i.style, e), i.style.fill = null;
        var m = a.get("showAbove"),
            p = r.textGuideLineConfig = r.textGuideLineConfig || {};
        p.showAbove = m || !1, i.buildPath = bI
    }
}

function CI(r, t) {
    t = t || "labelLine";
    for (var e = {
            normal: r.getModel(t)
        }, i = 0; i < Me.length; i++) {
        var n = Me[i];
        e[n] = r.getModel([n, t])
    }
    return e
}

function TI(r) {
    for (var t = [], e = 0; e < r.length; e++) {
        var i = r[e];
        if (!i.defaultAttr.ignore) {
            var n = i.label,
                a = n.getComputedTransform(),
                o = n.getBoundingRect(),
                s = !a || a[1] < 1e-5 && a[2] < 1e-5,
                l = n.style.margin || 0,
                u = o.clone();
            u.applyTransform(a), u.x -= l / 2, u.y -= l / 2, u.width += l, u.height += l;
            var c = s ? new No(o, a) : null;
            t.push({
                label: n,
                labelLine: i.labelLine,
                rect: u,
                localRect: o,
                obb: c,
                priority: i.priority,
                defaultAttr: i.defaultAttr,
                layoutOption: i.computedLayoutOption,
                axisAligned: s,
                transform: a
            })
        }
    }
    return t
}

function MI(r, t, e, i, n, a) {
    var o = r.length;
    if (o < 2) return;
    r.sort(function (C, M) {
        return C.rect[t] - M.rect[t]
    });
    for (var s = 0, l, u = !1, c = 0, f = 0; f < o; f++) {
        var v = r[f],
            h = v.rect;
        l = h[t] - s, l < 0 && (h[t] -= l, v.label[t] -= l, u = !0);
        var d = Math.max(-l, 0);
        c += d, s = h[t] + h[e]
    }
    c > 0 && a && S(-c / o, 0, o);
    var m = r[0],
        p = r[o - 1],
        g, _;
    y(), g < 0 && w(-g, .8), _ < 0 && w(_, .8), y(), x(g, _, 1), x(_, g, -1), y(), g < 0 && T(-g), _ < 0 && T(_);

    function y() {
        g = m.rect[t] - i, _ = n - p.rect[t] - p.rect[e]
    }

    function x(C, M, I) {
        if (C < 0) {
            var A = Math.min(M, -C);
            if (A > 0) {
                S(A * I, 0, o);
                var L = A + C;
                L < 0 && w(-L * I, 1)
            } else w(-C * I, 1)
        }
    }

    function S(C, M, I) {
        C !== 0 && (u = !0);
        for (var A = M; A < I; A++) {
            var L = r[A],
                P = L.rect;
            P[t] += C, L.label[t] += C
        }
    }

    function w(C, M) {
        for (var I = [], A = 0, L = 1; L < o; L++) {
            var P = r[L - 1].rect,
                k = Math.max(r[L].rect[t] - P[t] - P[e], 0);
            I.push(k), A += k
        }
        if (A) {
            var R = Math.min(Math.abs(C) / A, M);
            if (C > 0)
                for (var L = 0; L < o - 1; L++) {
                    var E = I[L] * R;
                    S(E, 0, L + 1)
                } else
                    for (var L = o - 1; L > 0; L--) {
                        var E = I[L - 1] * R;
                        S(-E, L, o)
                    }
        }
    }

    function T(C) {
        var M = C < 0 ? -1 : 1;
        C = Math.abs(C);
        for (var I = Math.ceil(C / (o - 1)), A = 0; A < o - 1; A++)
            if (M > 0 ? S(I, 0, A + 1) : S(-I, o - A - 1, o), C -= I, C <= 0) return
    }
    return u
}

function DI(r, t, e, i) {
    return MI(r, "y", "height", t, e, i)
}

function AI(r) {
    var t = [];
    r.sort(function (m, p) {
        return p.priority - m.priority
    });
    var e = new ct(0, 0, 0, 0);

    function i(m) {
        if (!m.ignore) {
            var p = m.ensureState("emphasis");
            p.ignore == null && (p.ignore = !1)
        }
        m.ignore = !0
    }
    for (var n = 0; n < r.length; n++) {
        var a = r[n],
            o = a.axisAligned,
            s = a.localRect,
            l = a.transform,
            u = a.label,
            c = a.labelLine;
        e.copy(a.rect), e.width -= .1, e.height -= .1, e.x += .05, e.y += .05;
        for (var f = a.obb, v = !1, h = 0; h < t.length; h++) {
            var d = t[h];
            if (e.intersect(d.rect)) {
                if (o && d.axisAligned) {
                    v = !0;
                    break
                }
                if (d.obb || (d.obb = new No(d.localRect, d.transform)), f || (f = new No(s, l)), f.intersect(d.obb)) {
                    v = !0;
                    break
                }
            }
        }
        v ? (i(u), c && i(c)) : (u.attr("ignore", a.defaultAttr.ignore), c && c.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a))
    }
}
var II = function (r) {
    z(t, r);

    function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e.hasSymbolVisual = !0, e
    }
    return t.prototype.getInitialData = function (e) {
        return b5(null, this, {
            useEncodeDefaulter: !0
        })
    }, t.prototype.getLegendIcon = function (e) {
        var i = new le,
            n = sa("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
        i.add(n), n.setStyle(e.lineStyle);
        var a = this.getData().getVisual("symbol"),
            o = this.getData().getVisual("symbolRotate"),
            s = a === "none" ? "circle" : a,
            l = e.itemHeight * .8,
            u = sa(s, (e.itemWidth - l) / 2, (e.itemHeight - l) / 2, l, l, e.itemStyle.fill);
        i.add(u), u.setStyle(e.itemStyle);
        var c = e.iconRotate === "inherit" ? o : e.iconRotate || 0;
        return u.rotation = c * Math.PI / 180, u.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), s.indexOf("empty") > -1 && (u.style.stroke = u.style.fill, u.style.fill = "#fff", u.style.lineWidth = 2), i
    }, t.type = "series.line", t.dependencies = ["grid", "polar"], t.defaultOption = {
        z: 3,
        coordinateSystem: "cartesian2d",
        legendHoverLink: !0,
        clip: !0,
        label: {
            position: "top"
        },
        endLabel: {
            show: !1,
            valueAnimation: !0,
            distance: 8
        },
        lineStyle: {
            width: 2,
            type: "solid"
        },
        emphasis: {
            scale: !0
        },
        step: !1,
        smooth: !1,
        smoothMonotone: null,
        symbol: "emptyCircle",
        symbolSize: 4,
        symbolRotate: null,
        showSymbol: !0,
        showAllSymbol: "auto",
        connectNulls: !1,
        sampling: "none",
        animationEasing: "linear",
        progressive: 0,
        hoverLayerThreshold: 1 / 0,
        universalTransition: {
            divideShape: "clone"
        },
        triggerLineEvent: !1
    }, t
}(ji);
const LI = II;

function gm(r, t) {
    var e = r.mapDimensionsAll("defaultedLabel"),
        i = e.length;
    if (i === 1) {
        var n = Ki(r, t, e[0]);
        return n != null ? n + "" : null
    } else if (i) {
        for (var a = [], o = 0; o < e.length; o++) a.push(Ki(r, t, e[o]));
        return a.join(" ")
    }
}

function PI(r, t) {
    var e = r.mapDimensionsAll("defaultedLabel");
    if (!H(t)) return t + "";
    for (var i = [], n = 0; n < e.length; n++) {
        var a = r.getDimensionIndex(e[n]);
        a >= 0 && i.push(t[a])
    }
    return i.join(" ")
}
var qc = function (r) {
    z(t, r);

    function t(e, i, n, a) {
        var o = r.call(this) || this;
        return o.updateData(e, i, n, a), o
    }
    return t.prototype._createSymbol = function (e, i, n, a, o) {
        this.removeAll();
        var s = sa(e, -1, -1, 2, 2, null, o);
        s.attr({
            z2: 100,
            culling: !0,
            scaleX: a[0] / 2,
            scaleY: a[1] / 2
        }), s.drift = kI, this._symbolType = e, this.add(s)
    }, t.prototype.stopSymbolAnimation = function (e) {
        this.childAt(0).stopAnimation(null, e)
    }, t.prototype.getSymbolType = function () {
        return this._symbolType
    }, t.prototype.getSymbolPath = function () {
        return this.childAt(0)
    }, t.prototype.highlight = function () {
        Ro(this.childAt(0))
    }, t.prototype.downplay = function () {
        Oo(this.childAt(0))
    }, t.prototype.setZ = function (e, i) {
        var n = this.childAt(0);
        n.zlevel = e, n.z = i
    }, t.prototype.setDraggable = function (e, i) {
        var n = this.childAt(0);
        n.draggable = e, n.cursor = !i && e ? "move" : n.cursor
    }, t.prototype.updateData = function (e, i, n, a) {
        this.silent = !1;
        var o = e.getItemVisual(i, "symbol") || "circle",
            s = e.hostModel,
            l = t.getSymbolSize(e, i),
            u = o !== this._symbolType,
            c = a && a.disableAnimation;
        if (u) {
            var f = e.getItemVisual(i, "symbolKeepAspect");
            this._createSymbol(o, e, i, l, f)
        } else {
            var v = this.childAt(0);
            v.silent = !1;
            var h = {
                scaleX: l[0] / 2,
                scaleY: l[1] / 2
            };
            c ? v.attr(h) : or(v, h, s, i), pg(v)
        }
        if (this._updateCommon(e, i, l, n, a), u) {
            var v = this.childAt(0);
            if (!c) {
                var h = {
                    scaleX: this._sizeX,
                    scaleY: this._sizeY,
                    style: {
                        opacity: v.style.opacity
                    }
                };
                v.scaleX = v.scaleY = 0, v.style.opacity = 0, Dr(v, h, s, i)
            }
        }
        c && this.childAt(0).stopAnimation("leave")
    }, t.prototype._updateCommon = function (e, i, n, a, o) {
        var s = this.childAt(0),
            l = e.hostModel,
            u, c, f, v, h, d, m, p, g;
        if (a && (u = a.emphasisItemStyle, c = a.blurItemStyle, f = a.selectItemStyle, v = a.focus, h = a.blurScope, m = a.labelStatesModels, p = a.hoverScale, g = a.cursorStyle, d = a.emphasisDisabled), !a || e.hasItemOption) {
            var _ = a && a.itemModel ? a.itemModel : e.getItemModel(i),
                y = _.getModel("emphasis");
            u = y.getModel("itemStyle").getItemStyle(), f = _.getModel(["select", "itemStyle"]).getItemStyle(), c = _.getModel(["blur", "itemStyle"]).getItemStyle(), v = y.get("focus"), h = y.get("blurScope"), d = y.get("disabled"), m = us(_), p = y.getShallow("scale"), g = _.getShallow("cursor")
        }
        var x = e.getItemVisual(i, "symbolRotate");
        s.attr("rotation", (x || 0) * Math.PI / 180 || 0);
        var S = w0(e.getItemVisual(i, "symbolOffset"), n);
        S && (s.x = S[0], s.y = S[1]), g && s.attr("cursor", g);
        var w = e.getItemVisual(i, "style"),
            T = w.fill;
        if (s instanceof gi) {
            var C = s.style;
            s.useStyle(O({
                image: C.image,
                x: C.x,
                y: C.y,
                width: C.width,
                height: C.height
            }, w))
        } else s.__isEmptyBrush ? s.useStyle(O({}, w)) : s.useStyle(w), s.style.decal = null, s.setColor(T, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
        var M = e.getItemVisual(i, "liftZ"),
            I = this._z2;
        M != null ? I == null && (this._z2 = s.z2, s.z2 += M) : I != null && (s.z2 = I, this._z2 = null);
        var A = o && o.useNameLabel;
        Sc(s, m, {
            labelFetcher: l,
            labelDataIndex: i,
            defaultText: L,
            inheritColor: T,
            defaultOpacity: w.opacity
        });

        function L(R) {
            return A ? e.getName(R) : gm(e, R)
        }
        this._sizeX = n[0] / 2, this._sizeY = n[1] / 2;
        var P = s.ensureState("emphasis");
        P.style = u, s.ensureState("select").style = f, s.ensureState("blur").style = c;
        var k = p == null || p === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(p) && p > 0 ? +p : 1;
        P.scaleX = this._sizeX * k, P.scaleY = this._sizeY * k, this.setSymbolScale(1), Bo(this, v, h, d)
    }, t.prototype.setSymbolScale = function (e) {
        this.scaleX = this.scaleY = e
    }, t.prototype.fadeOut = function (e, i, n) {
        var a = this.childAt(0),
            o = vt(this).dataIndex,
            s = n && n.animation;
        if (this.silent = a.silent = !0, n && n.fadeLabel) {
            var l = a.getTextContent();
            l && Fo(l, {
                style: {
                    opacity: 0
                }
            }, i, {
                dataIndex: o,
                removeOpt: s,
                cb: function () {
                    a.removeTextContent()
                }
            })
        } else a.removeTextContent();
        Fo(a, {
            style: {
                opacity: 0
            },
            scaleX: 0,
            scaleY: 0
        }, i, {
            dataIndex: o,
            cb: e,
            removeOpt: s
        })
    }, t.getSymbolSize = function (e, i) {
        return fA(e.getItemVisual(i, "symbolSize"))
    }, t
}(le);

function kI(r, t) {
    this.parent.drift(r, t)
}

function Rl(r, t, e, i) {
    return t && !isNaN(t[0]) && !isNaN(t[1]) && !(i.isIgnore && i.isIgnore(e)) && !(i.clipShape && !i.clipShape.contain(t[0], t[1])) && r.getItemVisual(e, "symbol") !== "none"
}

function Vv(r) {
    return r != null && !X(r) && (r = {
        isIgnore: r
    }), r || {}
}

function Wv(r) {
    var t = r.hostModel,
        e = t.getModel("emphasis");
    return {
        emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
        blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
        selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
        focus: e.get("focus"),
        blurScope: e.get("blurScope"),
        emphasisDisabled: e.get("disabled"),
        hoverScale: e.get("scale"),
        labelStatesModels: us(t),
        cursorStyle: t.get("cursor")
    }
}
var EI = function () {
    function r(t) {
        this.group = new le, this._SymbolCtor = t || qc
    }
    return r.prototype.updateData = function (t, e) {
        this._progressiveEls = null, e = Vv(e);
        var i = this.group,
            n = t.hostModel,
            a = this._data,
            o = this._SymbolCtor,
            s = e.disableAnimation,
            l = Wv(t),
            u = {
                disableAnimation: s
            },
            c = e.getSymbolPoint || function (f) {
                return t.getItemLayout(f)
            };
        a || i.removeAll(), t.diff(a).add(function (f) {
            var v = c(f);
            if (Rl(t, v, f, e)) {
                var h = new o(t, f, l, u);
                h.setPosition(v), t.setItemGraphicEl(f, h), i.add(h)
            }
        }).update(function (f, v) {
            var h = a.getItemGraphicEl(v),
                d = c(f);
            if (!Rl(t, d, f, e)) {
                i.remove(h);
                return
            }
            var m = t.getItemVisual(f, "symbol") || "circle",
                p = h && h.getSymbolType && h.getSymbolType();
            if (!h || p && p !== m) i.remove(h), h = new o(t, f, l, u), h.setPosition(d);
            else {
                h.updateData(t, f, l, u);
                var g = {
                    x: d[0],
                    y: d[1]
                };
                s ? h.attr(g) : or(h, g, n)
            }
            i.add(h), t.setItemGraphicEl(f, h)
        }).remove(function (f) {
            var v = a.getItemGraphicEl(f);
            v && v.fadeOut(function () {
                i.remove(v)
            }, n)
        }).execute(), this._getSymbolPoint = c, this._data = t
    }, r.prototype.updateLayout = function () {
        var t = this,
            e = this._data;
        e && e.eachItemGraphicEl(function (i, n) {
            var a = t._getSymbolPoint(n);
            i.setPosition(a), i.markRedraw()
        })
    }, r.prototype.incrementalPrepareUpdate = function (t) {
        this._seriesScope = Wv(t), this._data = null, this.group.removeAll()
    }, r.prototype.incrementalUpdate = function (t, e, i) {
        this._progressiveEls = [], i = Vv(i);

        function n(l) {
            l.isGroup || (l.incremental = !0, l.ensureState("emphasis").hoverLayer = !0)
        }
        for (var a = t.start; a < t.end; a++) {
            var o = e.getItemLayout(a);
            if (Rl(e, o, a, i)) {
                var s = new this._SymbolCtor(e, a, this._seriesScope);
                s.traverse(n), s.setPosition(o), this.group.add(s), e.setItemGraphicEl(a, s), this._progressiveEls.push(s)
            }
        }
    }, r.prototype.eachRendered = function (t) {
        bc(this._progressiveEls || this.group, t)
    }, r.prototype.remove = function (t) {
        var e = this.group,
            i = this._data;
        i && t ? i.eachItemGraphicEl(function (n) {
            n.fadeOut(function () {
                e.remove(n)
            }, i.hostModel)
        }) : e.removeAll()
    }, r
}();

function mm(r, t, e) {
    var i = r.getBaseAxis(),
        n = r.getOtherAxis(i),
        a = RI(n, e),
        o = i.dim,
        s = n.dim,
        l = t.mapDimension(s),
        u = t.mapDimension(o),
        c = s === "x" || s === "radius" ? 1 : 0,
        f = Z(r.dimensions, function (d) {
            return t.mapDimension(d)
        }),
        v = !1,
        h = t.getCalculationInfo("stackResultDimension");
    return ua(t, f[0]) && (v = !0, f[0] = h), ua(t, f[1]) && (v = !0, f[1] = h), {
        dataDimsForPoint: f,
        valueStart: a,
        valueAxisDim: s,
        baseAxisDim: o,
        stacked: !!v,
        valueDim: l,
        baseDim: u,
        baseDataOffset: c,
        stackedOverDimension: t.getCalculationInfo("stackedOverDimension")
    }
}

function RI(r, t) {
    var e = 0,
        i = r.scale.getExtent();
    return t === "start" ? e = i[0] : t === "end" ? e = i[1] : _t(t) && !isNaN(t) ? e = t : i[0] > 0 ? e = i[0] : i[1] < 0 && (e = i[1]), e
}

function _m(r, t, e, i) {
    var n = NaN;
    r.stacked && (n = e.get(e.getCalculationInfo("stackedOverDimension"), i)), isNaN(n) && (n = r.valueStart);
    var a = r.baseDataOffset,
        o = [];
    return o[a] = e.get(r.baseDim, i), o[1 - a] = n, t.dataToPoint(o)
}

function OI(r, t) {
    var e = [];
    return t.diff(r).add(function (i) {
        e.push({
            cmd: "+",
            idx: i
        })
    }).update(function (i, n) {
        e.push({
            cmd: "=",
            idx: n,
            idx1: i
        })
    }).remove(function (i) {
        e.push({
            cmd: "-",
            idx: i
        })
    }).execute(), e
}

function BI(r, t, e, i, n, a, o, s) {
    for (var l = OI(r, t), u = [], c = [], f = [], v = [], h = [], d = [], m = [], p = mm(n, t, o), g = r.getLayout("points") || [], _ = t.getLayout("points") || [], y = 0; y < l.length; y++) {
        var x = l[y],
            S = !0,
            w = void 0,
            T = void 0;
        switch (x.cmd) {
            case "=":
                w = x.idx * 2, T = x.idx1 * 2;
                var C = g[w],
                    M = g[w + 1],
                    I = _[T],
                    A = _[T + 1];
                (isNaN(C) || isNaN(M)) && (C = I, M = A), u.push(C, M), c.push(I, A), f.push(e[w], e[w + 1]), v.push(i[T], i[T + 1]), m.push(t.getRawIndex(x.idx1));
                break;
            case "+":
                var L = x.idx,
                    P = p.dataDimsForPoint,
                    k = n.dataToPoint([t.get(P[0], L), t.get(P[1], L)]);
                T = L * 2, u.push(k[0], k[1]), c.push(_[T], _[T + 1]);
                var R = _m(p, n, t, L);
                f.push(R[0], R[1]), v.push(i[T], i[T + 1]), m.push(t.getRawIndex(L));
                break;
            case "-":
                S = !1
        }
        S && (h.push(x), d.push(d.length))
    }
    d.sort(function (Et, mt) {
        return m[Et] - m[mt]
    });
    for (var E = u.length, W = zi(E), F = zi(E), $ = zi(E), G = zi(E), tt = [], y = 0; y < d.length; y++) {
        var J = d[y],
            at = y * 2,
            lt = J * 2;
        W[at] = u[lt], W[at + 1] = u[lt + 1], F[at] = c[lt], F[at + 1] = c[lt + 1], $[at] = f[lt], $[at + 1] = f[lt + 1], G[at] = v[lt], G[at + 1] = v[lt + 1], tt[y] = h[J]
    }
    return {
        current: W,
        next: F,
        stackedOnCurrent: $,
        stackedOnNext: G,
        status: tt
    }
}
var pr = Math.min,
    gr = Math.max;

function li(r, t) {
    return isNaN(r) || isNaN(t)
}

function Fu(r, t, e, i, n, a, o, s, l) {
    for (var u, c, f, v, h, d, m = e, p = 0; p < i; p++) {
        var g = t[m * 2],
            _ = t[m * 2 + 1];
        if (m >= n || m < 0) break;
        if (li(g, _)) {
            if (l) {
                m += a;
                continue
            }
            break
        }
        if (m === e) r[a > 0 ? "moveTo" : "lineTo"](g, _), f = g, v = _;
        else {
            var y = g - u,
                x = _ - c;
            if (y * y + x * x < .5) {
                m += a;
                continue
            }
            if (o > 0) {
                for (var S = m + a, w = t[S * 2], T = t[S * 2 + 1]; w === g && T === _ && p < i;) p++, S += a, m += a, w = t[S * 2], T = t[S * 2 + 1], g = t[m * 2], _ = t[m * 2 + 1], y = g - u, x = _ - c;
                var C = p + 1;
                if (l)
                    for (; li(w, T) && C < i;) C++, S += a, w = t[S * 2], T = t[S * 2 + 1];
                var M = .5,
                    I = 0,
                    A = 0,
                    L = void 0,
                    P = void 0;
                if (C >= i || li(w, T)) h = g, d = _;
                else {
                    I = w - u, A = T - c;
                    var k = g - u,
                        R = w - g,
                        E = _ - c,
                        W = T - _,
                        F = void 0,
                        $ = void 0;
                    if (s === "x") {
                        F = Math.abs(k), $ = Math.abs(R);
                        var G = I > 0 ? 1 : -1;
                        h = g - G * F * o, d = _, L = g + G * $ * o, P = _
                    } else if (s === "y") {
                        F = Math.abs(E), $ = Math.abs(W);
                        var tt = A > 0 ? 1 : -1;
                        h = g, d = _ - tt * F * o, L = g, P = _ + tt * $ * o
                    } else F = Math.sqrt(k * k + E * E), $ = Math.sqrt(R * R + W * W), M = $ / ($ + F), h = g - I * o * (1 - M), d = _ - A * o * (1 - M), L = g + I * o * M, P = _ + A * o * M, L = pr(L, gr(w, g)), P = pr(P, gr(T, _)), L = gr(L, pr(w, g)), P = gr(P, pr(T, _)), I = L - g, A = P - _, h = g - I * F / $, d = _ - A * F / $, h = pr(h, gr(u, g)), d = pr(d, gr(c, _)), h = gr(h, pr(u, g)), d = gr(d, pr(c, _)), I = g - h, A = _ - d, L = g + I * $ / F, P = _ + A * $ / F
                }
                r.bezierCurveTo(f, v, h, d, g, _), f = L, v = P
            } else r.lineTo(g, _)
        }
        u = g, c = _, m += a
    }
    return p
}
var ym = function () {
        function r() {
            this.smooth = 0, this.smoothConstraint = !0
        }
        return r
    }(),
    NI = function (r) {
        z(t, r);

        function t(e) {
            var i = r.call(this, e) || this;
            return i.type = "ec-polyline", i
        }
        return t.prototype.getDefaultStyle = function () {
            return {
                stroke: "#000",
                fill: null
            }
        }, t.prototype.getDefaultShape = function () {
            return new ym
        }, t.prototype.buildPath = function (e, i) {
            var n = i.points,
                a = 0,
                o = n.length / 2;
            if (i.connectNulls) {
                for (; o > 0 && li(n[o * 2 - 2], n[o * 2 - 1]); o--);
                for (; a < o && li(n[a * 2], n[a * 2 + 1]); a++);
            }
            for (; a < o;) a += Fu(e, n, a, o, o, 1, i.smooth, i.smoothMonotone, i.connectNulls) + 1
        }, t.prototype.getPointOn = function (e, i) {
            this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
            for (var n = this.path, a = n.data, o = hi.CMD, s, l, u = i === "x", c = [], f = 0; f < a.length;) {
                var v = a[f++],
                    h = void 0,
                    d = void 0,
                    m = void 0,
                    p = void 0,
                    g = void 0,
                    _ = void 0,
                    y = void 0;
                switch (v) {
                    case o.M:
                        s = a[f++], l = a[f++];
                        break;
                    case o.L:
                        if (h = a[f++], d = a[f++], y = u ? (e - s) / (h - s) : (e - l) / (d - l), y <= 1 && y >= 0) {
                            var x = u ? (d - l) * y + l : (h - s) * y + s;
                            return u ? [e, x] : [x, e]
                        }
                        s = h, l = d;
                        break;
                    case o.C:
                        h = a[f++], d = a[f++], m = a[f++], p = a[f++], g = a[f++], _ = a[f++];
                        var S = u ? Mo(s, h, m, g, e, c) : Mo(l, d, p, _, e, c);
                        if (S > 0)
                            for (var w = 0; w < S; w++) {
                                var T = c[w];
                                if (T <= 1 && T >= 0) {
                                    var x = u ? Pt(l, d, p, _, T) : Pt(s, h, m, g, T);
                                    return u ? [e, x] : [x, e]
                                }
                            }
                        s = g, l = _;
                        break
                }
            }
        }, t
    }(gt),
    FI = function (r) {
        z(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t
    }(ym),
    $I = function (r) {
        z(t, r);

        function t(e) {
            var i = r.call(this, e) || this;
            return i.type = "ec-polygon", i
        }
        return t.prototype.getDefaultShape = function () {
            return new FI
        }, t.prototype.buildPath = function (e, i) {
            var n = i.points,
                a = i.stackedOnPoints,
                o = 0,
                s = n.length / 2,
                l = i.smoothMonotone;
            if (i.connectNulls) {
                for (; s > 0 && li(n[s * 2 - 2], n[s * 2 - 1]); s--);
                for (; o < s && li(n[o * 2], n[o * 2 + 1]); o++);
            }
            for (; o < s;) {
                var u = Fu(e, n, o, s, s, 1, i.smooth, l, i.connectNulls);
                Fu(e, a, o + u - 1, u, s, -1, i.stackedOnSmooth, l, i.connectNulls), o += u + 1, e.closePath()
            }
        }, t
    }(gt);

function zI(r, t, e, i, n) {
    var a = r.getArea(),
        o = a.x,
        s = a.y,
        l = a.width,
        u = a.height,
        c = e.get(["lineStyle", "width"]) || 2;
    o -= c / 2, s -= c / 2, l += c, u += c, l = Math.ceil(l), o !== Math.floor(o) && (o = Math.floor(o), l++);
    var f = new ae({
        shape: {
            x: o,
            y: s,
            width: l,
            height: u
        }
    });
    if (t) {
        var v = r.getBaseAxis(),
            h = v.isHorizontal(),
            d = v.inverse;
        h ? (d && (f.shape.x += l), f.shape.width = 0) : (d || (f.shape.y += u), f.shape.height = 0);
        var m = Q(n) ? function (p) {
            n(p, f)
        } : null;
        Dr(f, {
            shape: {
                width: l,
                height: u,
                x: o,
                y: s
            }
        }, e, null, i, m)
    }
    return f
}

function HI(r, t, e) {
    var i = r.getArea(),
        n = It(i.r0, 1),
        a = It(i.r, 1),
        o = new ya({
            shape: {
                cx: It(r.cx, 1),
                cy: It(r.cy, 1),
                r0: n,
                r: a,
                startAngle: i.startAngle,
                endAngle: i.endAngle,
                clockwise: i.clockwise
            }
        });
    if (t) {
        var s = r.getBaseAxis().dim === "angle";
        s ? o.shape.endAngle = i.startAngle : o.shape.r = n, Dr(o, {
            shape: {
                endAngle: i.endAngle,
                r: a
            }
        }, e)
    }
    return o
}

function GI(r, t) {
    return r.type === t
}

function Uv(r, t) {
    if (r.length === t.length) {
        for (var e = 0; e < r.length; e++)
            if (r[e] !== t[e]) return;
        return !0
    }
}

function Yv(r) {
    for (var t = 1 / 0, e = 1 / 0, i = -1 / 0, n = -1 / 0, a = 0; a < r.length;) {
        var o = r[a++],
            s = r[a++];
        isNaN(o) || (t = Math.min(o, t), i = Math.max(o, i)), isNaN(s) || (e = Math.min(s, e), n = Math.max(s, n))
    }
    return [
        [t, e],
        [i, n]
    ]
}

function Xv(r, t) {
    var e = Yv(r),
        i = e[0],
        n = e[1],
        a = Yv(t),
        o = a[0],
        s = a[1];
    return Math.max(Math.abs(i[0] - o[0]), Math.abs(i[1] - o[1]), Math.abs(n[0] - s[0]), Math.abs(n[1] - s[1]))
}

function Zv(r) {
    return _t(r) ? r : r ?.5 : 0
}

function VI(r, t, e) {
    if (!e.valueDim) return [];
    for (var i = t.count(), n = zi(i * 2), a = 0; a < i; a++) {
        var o = _m(e, r, t, a);
        n[a * 2] = o[0], n[a * 2 + 1] = o[1]
    }
    return n
}

function mr(r, t, e, i) {
    var n = t.getBaseAxis(),
        a = n.dim === "x" || n.dim === "radius" ? 0 : 1,
        o = [],
        s = 0,
        l = [],
        u = [],
        c = [],
        f = [];
    if (i) {
        for (s = 0; s < r.length; s += 2) !isNaN(r[s]) && !isNaN(r[s + 1]) && f.push(r[s], r[s + 1]);
        r = f
    }
    for (s = 0; s < r.length - 2; s += 2) switch (c[0] = r[s + 2], c[1] = r[s + 3], u[0] = r[s], u[1] = r[s + 1], o.push(u[0], u[1]), e) {
        case "end":
            l[a] = c[a], l[1 - a] = u[1 - a], o.push(l[0], l[1]);
            break;
        case "middle":
            var v = (u[a] + c[a]) / 2,
                h = [];
            l[a] = h[a] = v, l[1 - a] = u[1 - a], h[1 - a] = c[1 - a], o.push(l[0], l[1]), o.push(h[0], h[1]);
            break;
        default:
            l[a] = u[a], l[1 - a] = c[1 - a], o.push(l[0], l[1])
    }
    return o.push(r[s++], r[s++]), o
}

function WI(r, t) {
    var e = [],
        i = r.length,
        n, a;

    function o(c, f, v) {
        var h = c.coord,
            d = (v - h) / (f.coord - h),
            m = xS(d, [c.color, f.color]);
        return {
            coord: v,
            color: m
        }
    }
    for (var s = 0; s < i; s++) {
        var l = r[s],
            u = l.coord;
        if (u < 0) n = l;
        else if (u > t) {
            a ? e.push(o(a, l, t)) : n && e.push(o(n, l, 0), o(n, l, t));
            break
        } else n && (e.push(o(n, l, 0)), n = null), e.push(l), a = l
    }
    return e
}

function UI(r, t, e) {
    var i = r.getVisual("visualMeta");
    if (!(!i || !i.length || !r.count()) && t.type === "cartesian2d") {
        for (var n, a, o = i.length - 1; o >= 0; o--) {
            var s = r.getDimensionInfo(i[o].dimension);
            if (n = s && s.coordDim, n === "x" || n === "y") {
                a = i[o];
                break
            }
        }
        if (a) {
            var l = t.getAxis(n),
                u = Z(a.stops, function (y) {
                    return {
                        coord: l.toGlobalCoord(l.dataToCoord(y.value)),
                        color: y.color
                    }
                }),
                c = u.length,
                f = a.outerColors.slice();
            c && u[0].coord > u[c - 1].coord && (u.reverse(), f.reverse());
            var v = WI(u, n === "x" ? e.getWidth() : e.getHeight()),
                h = v.length;
            if (!h && c) return u[0].coord < 0 ? f[1] ? f[1] : u[c - 1].color : f[0] ? f[0] : u[0].color;
            var d = 10,
                m = v[0].coord - d,
                p = v[h - 1].coord + d,
                g = p - m;
            if (g < .001) return "transparent";
            D(v, function (y) {
                y.offset = (y.coord - m) / g
            }), v.push({
                offset: h ? v[h - 1].offset : .5,
                color: f[1] || "transparent"
            }), v.unshift({
                offset: h ? v[0].offset : .5,
                color: f[0] || "transparent"
            });
            var _ = new vg(0, 0, 0, 0, v, !0);
            return _[n] = m, _[n + "2"] = p, _
        }
    }
}

function YI(r, t, e) {
    var i = r.get("showAllSymbol"),
        n = i === "auto";
    if (!(i && !n)) {
        var a = e.getAxesByScale("ordinal")[0];
        if (a && !(n && XI(a, t))) {
            var o = t.mapDimension(a.dim),
                s = {};
            return D(a.getViewLabels(), function (l) {
                    var u = a.scale.getRawOrdinalNumber(l.tickValue);
                    s[u] = 1
                }),
                function (l) {
                    return !s.hasOwnProperty(t.get(o, l))
                }
        }
    }
}

function XI(r, t) {
    var e = r.getExtent(),
        i = Math.abs(e[1] - e[0]) / r.scale.count();
    isNaN(i) && (i = 0);
    for (var n = t.count(), a = Math.max(1, Math.round(n / 5)), o = 0; o < n; o += a)
        if (qc.getSymbolSize(t, o)[r.isHorizontal() ? 1 : 0] * 1.5 > i) return !1;
    return !0
}

function ZI(r, t) {
    return isNaN(r) || isNaN(t)
}

function qI(r) {
    for (var t = r.length / 2; t > 0 && ZI(r[t * 2 - 2], r[t * 2 - 1]); t--);
    return t - 1
}

function qv(r, t) {
    return [r[t * 2], r[t * 2 + 1]]
}

function KI(r, t, e) {
    for (var i = r.length / 2, n = e === "x" ? 0 : 1, a, o, s = 0, l = -1, u = 0; u < i; u++)
        if (o = r[u * 2 + n], !(isNaN(o) || isNaN(r[u * 2 + 1 - n]))) {
            if (u === 0) {
                a = o;
                continue
            }
            if (a <= t && o >= t || a >= t && o <= t) {
                l = u;
                break
            }
            s = u, a = o
        } return {
        range: [s, l],
        t: (t - a) / (o - a)
    }
}

function xm(r) {
    if (r.get(["endLabel", "show"])) return !0;
    for (var t = 0; t < Me.length; t++)
        if (r.get([Me[t], "endLabel", "show"])) return !0;
    return !1
}

function Ol(r, t, e, i) {
    if (GI(t, "cartesian2d")) {
        var n = i.getModel("endLabel"),
            a = n.get("valueAnimation"),
            o = i.getData(),
            s = {
                lastFrameIndex: 0
            },
            l = xm(i) ? function (h, d) {
                r._endLabelOnDuring(h, d, o, s, a, n, t)
            } : null,
            u = t.getBaseAxis().isHorizontal(),
            c = zI(t, e, i, function () {
                var h = r._endLabel;
                h && e && s.originalX != null && h.attr({
                    x: s.originalX,
                    y: s.originalY
                })
            }, l);
        if (!i.get("clip", !0)) {
            var f = c.shape,
                v = Math.max(f.width, f.height);
            u ? (f.y -= v, f.height += v * 2) : (f.x -= v, f.width += v * 2)
        }
        return l && l(1, c), c
    } else return HI(t, e, i)
}

function jI(r, t) {
    var e = t.getBaseAxis(),
        i = e.isHorizontal(),
        n = e.inverse,
        a = i ? n ? "right" : "left" : "center",
        o = i ? "middle" : n ? "top" : "bottom";
    return {
        normal: {
            align: r.get("align") || a,
            verticalAlign: r.get("verticalAlign") || o
        }
    }
}
var QI = function (r) {
    z(t, r);

    function t() {
        return r !== null && r.apply(this, arguments) || this
    }
    return t.prototype.init = function () {
        var e = new le,
            i = new EI;
        this.group.add(i.group), this._symbolDraw = i, this._lineGroup = e
    }, t.prototype.render = function (e, i, n) {
        var a = this,
            o = e.coordinateSystem,
            s = this.group,
            l = e.getData(),
            u = e.getModel("lineStyle"),
            c = e.getModel("areaStyle"),
            f = l.getLayout("points") || [],
            v = o.type === "polar",
            h = this._coordSys,
            d = this._symbolDraw,
            m = this._polyline,
            p = this._polygon,
            g = this._lineGroup,
            _ = !i.ssr && e.get("animation"),
            y = !c.isEmpty(),
            x = c.get("origin"),
            S = mm(o, l, x),
            w = y && VI(o, l, S),
            T = e.get("showSymbol"),
            C = e.get("connectNulls"),
            M = T && !v && YI(e, l, o),
            I = this._data;
        I && I.eachItemGraphicEl(function (mt, Kt) {
            mt.__temp && (s.remove(mt), I.setItemGraphicEl(Kt, null))
        }), T || d.remove(), s.add(g);
        var A = v ? !1 : e.get("step"),
            L;
        o && o.getArea && e.get("clip", !0) && (L = o.getArea(), L.width != null ? (L.x -= .1, L.y -= .1, L.width += .2, L.height += .2) : L.r0 && (L.r0 -= .5, L.r += .5)), this._clipShapeForSymbol = L;
        var P = UI(l, o, n) || l.getVisual("style")[l.getVisual("drawType")];
        if (!(m && h.type === o.type && A === this._step)) T && d.updateData(l, {
            isIgnore: M,
            clipShape: L,
            disableAnimation: !0,
            getSymbolPoint: function (mt) {
                return [f[mt * 2], f[mt * 2 + 1]]
            }
        }), _ && this._initSymbolLabelAnimation(l, o, L), A && (f = mr(f, o, A, C), w && (w = mr(w, o, A, C))), m = this._newPolyline(f), y ? p = this._newPolygon(f, w) : p && (g.remove(p), p = this._polygon = null), v || this._initOrUpdateEndLabel(e, o, pi(P)), g.setClipPath(Ol(this, o, !0, e));
        else {
            y && !p ? p = this._newPolygon(f, w) : p && !y && (g.remove(p), p = this._polygon = null), v || this._initOrUpdateEndLabel(e, o, pi(P));
            var k = g.getClipPath();
            if (k) {
                var R = Ol(this, o, !1, e);
                Dr(k, {
                    shape: R.shape
                }, e)
            } else g.setClipPath(Ol(this, o, !0, e));
            T && d.updateData(l, {
                isIgnore: M,
                clipShape: L,
                disableAnimation: !0,
                getSymbolPoint: function (mt) {
                    return [f[mt * 2], f[mt * 2 + 1]]
                }
            }), (!Uv(this._stackedOnPoints, w) || !Uv(this._points, f)) && (_ ? this._doUpdateAnimation(l, w, o, n, A, x, C) : (A && (f = mr(f, o, A, C), w && (w = mr(w, o, A, C))), m.setShape({
                points: f
            }), p && p.setShape({
                points: f,
                stackedOnPoints: w
            })))
        }
        var E = e.getModel("emphasis"),
            W = E.get("focus"),
            F = E.get("blurScope"),
            $ = E.get("disabled");
        if (m.useStyle(ht(u.getLineStyle(), {
                fill: "none",
                stroke: P,
                lineJoin: "bevel"
            })), mu(m, e, "lineStyle"), m.style.lineWidth > 0 && e.get(["emphasis", "lineStyle", "width"]) === "bolder") {
            var G = m.getState("emphasis").style;
            G.lineWidth = +m.style.lineWidth + 1
        }
        vt(m).seriesIndex = e.seriesIndex, Bo(m, W, F, $);
        var tt = Zv(e.get("smooth")),
            J = e.get("smoothMonotone");
        if (m.setShape({
                smooth: tt,
                smoothMonotone: J,
                connectNulls: C
            }), p) {
            var at = l.getCalculationInfo("stackedOnSeries"),
                lt = 0;
            p.useStyle(ht(c.getAreaStyle(), {
                fill: P,
                opacity: .7,
                lineJoin: "bevel",
                decal: l.getVisual("style").decal
            })), at && (lt = Zv(at.get("smooth"))), p.setShape({
                smooth: tt,
                stackedOnSmooth: lt,
                smoothMonotone: J,
                connectNulls: C
            }), mu(p, e, "areaStyle"), vt(p).seriesIndex = e.seriesIndex, Bo(p, W, F, $)
        }
        var Et = function (mt) {
            a._changePolyState(mt)
        };
        l.eachItemGraphicEl(function (mt) {
            mt && (mt.onHoverStateChange = Et)
        }), this._polyline.onHoverStateChange = Et, this._data = l, this._coordSys = o, this._stackedOnPoints = w, this._points = f, this._step = A, this._valueOrigin = x, e.get("triggerLineEvent") && (this.packEventData(e, m), p && this.packEventData(e, p))
    }, t.prototype.packEventData = function (e, i) {
        vt(i).eventData = {
            componentType: "series",
            componentSubType: "line",
            componentIndex: e.componentIndex,
            seriesIndex: e.seriesIndex,
            seriesName: e.name,
            seriesType: "line"
        }
    }, t.prototype.highlight = function (e, i, n, a) {
        var o = e.getData(),
            s = fi(o, a);
        if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
            var l = o.getLayout("points"),
                u = o.getItemGraphicEl(s);
            if (!u) {
                var c = l[s * 2],
                    f = l[s * 2 + 1];
                if (isNaN(c) || isNaN(f) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(c, f)) return;
                var v = e.get("zlevel") || 0,
                    h = e.get("z") || 0;
                u = new qc(o, s), u.x = c, u.y = f, u.setZ(v, h);
                var d = u.getSymbolPath().getTextContent();
                d && (d.zlevel = v, d.z = h, d.z2 = this._polyline.z2 + 1), u.__temp = !0, o.setItemGraphicEl(s, u), u.stopSymbolAnimation(!0), this.group.add(u)
            }
            u.highlight()
        } else ir.prototype.highlight.call(this, e, i, n, a)
    }, t.prototype.downplay = function (e, i, n, a) {
        var o = e.getData(),
            s = fi(o, a);
        if (this._changePolyState("normal"), s != null && s >= 0) {
            var l = o.getItemGraphicEl(s);
            l && (l.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(l)) : l.downplay())
        } else ir.prototype.downplay.call(this, e, i, n, a)
    }, t.prototype._changePolyState = function (e) {
        var i = this._polygon;
        ih(this._polyline, e), i && ih(i, e)
    }, t.prototype._newPolyline = function (e) {
        var i = this._polyline;
        return i && this._lineGroup.remove(i), i = new NI({
            shape: {
                points: e
            },
            segmentIgnoreThreshold: 2,
            z2: 10
        }), this._lineGroup.add(i), this._polyline = i, i
    }, t.prototype._newPolygon = function (e, i) {
        var n = this._polygon;
        return n && this._lineGroup.remove(n), n = new $I({
            shape: {
                points: e,
                stackedOnPoints: i
            },
            segmentIgnoreThreshold: 2
        }), this._lineGroup.add(n), this._polygon = n, n
    }, t.prototype._initSymbolLabelAnimation = function (e, i, n) {
        var a, o, s = i.getBaseAxis(),
            l = s.inverse;
        i.type === "cartesian2d" ? (a = s.isHorizontal(), o = !1) : i.type === "polar" && (a = s.dim === "angle", o = !0);
        var u = e.hostModel,
            c = u.get("animationDuration");
        Q(c) && (c = c(null));
        var f = u.get("animationDelay") || 0,
            v = Q(f) ? f(null) : f;
        e.eachItemGraphicEl(function (h, d) {
            var m = h;
            if (m) {
                var p = [h.x, h.y],
                    g = void 0,
                    _ = void 0,
                    y = void 0;
                if (n)
                    if (o) {
                        var x = n,
                            S = i.pointToCoord(p);
                        a ? (g = x.startAngle, _ = x.endAngle, y = -S[1] / 180 * Math.PI) : (g = x.r0, _ = x.r, y = S[0])
                    } else {
                        var w = n;
                        a ? (g = w.x, _ = w.x + w.width, y = h.x) : (g = w.y + w.height, _ = w.y, y = h.y)
                    } var T = _ === g ? 0 : (y - g) / (_ - g);
                l && (T = 1 - T);
                var C = Q(f) ? f(d) : c * T + v,
                    M = m.getSymbolPath(),
                    I = M.getTextContent();
                m.attr({
                    scaleX: 0,
                    scaleY: 0
                }), m.animateTo({
                    scaleX: 1,
                    scaleY: 1
                }, {
                    duration: 200,
                    setToFinal: !0,
                    delay: C
                }), I && I.animateFrom({
                    style: {
                        opacity: 0
                    }
                }, {
                    duration: 300,
                    delay: C
                }), M.disableLabelAnimation = !0
            }
        })
    }, t.prototype._initOrUpdateEndLabel = function (e, i, n) {
        var a = e.getModel("endLabel");
        if (xm(e)) {
            var o = e.getData(),
                s = this._polyline,
                l = o.getLayout("points");
            if (!l) {
                s.removeTextContent(), this._endLabel = null;
                return
            }
            var u = this._endLabel;
            u || (u = this._endLabel = new ve({
                z2: 200
            }), u.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
            var c = qI(l);
            c >= 0 && (Sc(s, us(e, "endLabel"), {
                inheritColor: n,
                labelFetcher: e,
                labelDataIndex: c,
                defaultText: function (f, v, h) {
                    return h != null ? PI(o, h) : gm(o, f)
                },
                enableTextSetter: !0
            }, jI(a, i)), s.textConfig.position = null)
        } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null)
    }, t.prototype._endLabelOnDuring = function (e, i, n, a, o, s, l) {
        var u = this._endLabel,
            c = this._polyline;
        if (u) {
            e < 1 && a.originalX == null && (a.originalX = u.x, a.originalY = u.y);
            var f = n.getLayout("points"),
                v = n.hostModel,
                h = v.get("connectNulls"),
                d = s.get("precision"),
                m = s.get("distance") || 0,
                p = l.getBaseAxis(),
                g = p.isHorizontal(),
                _ = p.inverse,
                y = i.shape,
                x = _ ? g ? y.x : y.y + y.height : g ? y.x + y.width : y.y,
                S = (g ? m : 0) * (_ ? -1 : 1),
                w = (g ? 0 : -m) * (_ ? -1 : 1),
                T = g ? "x" : "y",
                C = KI(f, x, T),
                M = C.range,
                I = M[1] - M[0],
                A = void 0;
            if (I >= 1) {
                if (I > 1 && !h) {
                    var L = qv(f, M[0]);
                    u.attr({
                        x: L[0] + S,
                        y: L[1] + w
                    }), o && (A = v.getRawValue(M[0]))
                } else {
                    var L = c.getPointOn(x, T);
                    L && u.attr({
                        x: L[0] + S,
                        y: L[1] + w
                    });
                    var P = v.getRawValue(M[0]),
                        k = v.getRawValue(M[1]);
                    o && (A = _C(n, d, P, k, C.t))
                }
                a.lastFrameIndex = M[0]
            } else {
                var R = e === 1 || a.lastFrameIndex > 0 ? M[0] : 0,
                    L = qv(f, R);
                o && (A = v.getRawValue(R)), u.attr({
                    x: L[0] + S,
                    y: L[1] + w
                })
            }
            if (o) {
                var E = Sg(u);
                typeof E.setLabelText == "function" && E.setLabelText(A)
            }
        }
    }, t.prototype._doUpdateAnimation = function (e, i, n, a, o, s, l) {
        var u = this._polyline,
            c = this._polygon,
            f = e.hostModel,
            v = BI(this._data, e, this._stackedOnPoints, i, this._coordSys, n, this._valueOrigin),
            h = v.current,
            d = v.stackedOnCurrent,
            m = v.next,
            p = v.stackedOnNext;
        if (o && (h = mr(v.current, n, o, l), d = mr(v.stackedOnCurrent, n, o, l), m = mr(v.next, n, o, l), p = mr(v.stackedOnNext, n, o, l)), Xv(h, m) > 3e3 || c && Xv(d, p) > 3e3) {
            u.stopAnimation(), u.setShape({
                points: m
            }), c && (c.stopAnimation(), c.setShape({
                points: m,
                stackedOnPoints: p
            }));
            return
        }
        u.shape.__points = v.current, u.shape.points = h;
        var g = {
            shape: {
                points: m
            }
        };
        v.current !== h && (g.shape.__points = v.next), u.stopAnimation(), or(u, g, f), c && (c.setShape({
            points: h,
            stackedOnPoints: d
        }), c.stopAnimation(), or(c, {
            shape: {
                stackedOnPoints: p
            }
        }, f), u.shape.points !== c.shape.points && (c.shape.points = u.shape.points));
        for (var _ = [], y = v.status, x = 0; x < y.length; x++) {
            var S = y[x].cmd;
            if (S === "=") {
                var w = e.getItemGraphicEl(y[x].idx1);
                w && _.push({
                    el: w,
                    ptIdx: x
                })
            }
        }
        u.animators && u.animators.length && u.animators[0].during(function () {
            c && c.dirtyShape();
            for (var T = u.shape.__points, C = 0; C < _.length; C++) {
                var M = _[C].el,
                    I = _[C].ptIdx * 2;
                M.x = T[I], M.y = T[I + 1], M.markRedraw()
            }
        })
    }, t.prototype.remove = function (e) {
        var i = this.group,
            n = this._data;
        this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function (a, o) {
            a.__temp && (i.remove(a), n.setItemGraphicEl(o, null))
        }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null
    }, t.type = "line", t
}(ir);
const JI = QI;

function t6(r, t) {
    return {
        seriesType: r,
        plan: c0(),
        reset: function (e) {
            var i = e.getData(),
                n = e.coordinateSystem,
                a = e.pipelineContext,
                o = t || a.large;
            if (n) {
                var s = Z(n.dimensions, function (h) {
                        return i.mapDimension(h)
                    }).slice(0, 2),
                    l = s.length,
                    u = i.getCalculationInfo("stackResultDimension");
                ua(i, s[0]) && (s[0] = u), ua(i, s[1]) && (s[1] = u);
                var c = i.getStore(),
                    f = i.getDimensionIndex(s[0]),
                    v = i.getDimensionIndex(s[1]);
                return l && {
                    progress: function (h, d) {
                        for (var m = h.end - h.start, p = o && zi(m * l), g = [], _ = [], y = h.start, x = 0; y < h.end; y++) {
                            var S = void 0;
                            if (l === 1) {
                                var w = c.get(f, y);
                                S = n.dataToPoint(w, null, _)
                            } else g[0] = c.get(f, y), g[1] = c.get(v, y), S = n.dataToPoint(g, null, _);
                            o ? (p[x++] = S[0], p[x++] = S[1]) : d.setItemLayout(y, S.slice())
                        }
                        o && d.setLayout("points", p)
                    }
                }
            }
        }
    }
}
var e6 = {
        average: function (r) {
            for (var t = 0, e = 0, i = 0; i < r.length; i++) isNaN(r[i]) || (t += r[i], e++);
            return e === 0 ? NaN : t / e
        },
        sum: function (r) {
            for (var t = 0, e = 0; e < r.length; e++) t += r[e] || 0;
            return t
        },
        max: function (r) {
            for (var t = -1 / 0, e = 0; e < r.length; e++) r[e] > t && (t = r[e]);
            return isFinite(t) ? t : NaN
        },
        min: function (r) {
            for (var t = 1 / 0, e = 0; e < r.length; e++) r[e] < t && (t = r[e]);
            return isFinite(t) ? t : NaN
        },
        minmax: function (r) {
            for (var t = -1 / 0, e = -1 / 0, i = 0; i < r.length; i++) {
                var n = r[i],
                    a = Math.abs(n);
                a > t && (t = a, e = n)
            }
            return isFinite(e) ? e : NaN
        },
        nearest: function (r) {
            return r[0]
        }
    },
    r6 = function (r) {
        return Math.round(r.length / 2)
    };

function i6(r) {
    return {
        seriesType: r,
        reset: function (t, e, i) {
            var n = t.getData(),
                a = t.get("sampling"),
                o = t.coordinateSystem,
                s = n.count();
            if (s > 10 && o.type === "cartesian2d" && a) {
                var l = o.getBaseAxis(),
                    u = o.getOtherAxis(l),
                    c = l.getExtent(),
                    f = i.getDevicePixelRatio(),
                    v = Math.abs(c[1] - c[0]) * (f || 1),
                    h = Math.round(s / v);
                if (isFinite(h) && h > 1) {
                    a === "lttb" && t.setData(n.lttbDownSample(n.mapDimension(u.dim), 1 / h));
                    var d = void 0;
                    V(a) ? d = e6[a] : Q(a) && (d = a), d && t.setData(n.downSample(n.mapDimension(u.dim), 1 / h, d, r6))
                }
            }
        }
    }
}

function n6(r) {
    r.registerChartView(JI), r.registerSeriesModel(LI), r.registerLayout(t6("line", !0)), r.registerVisual({
        seriesType: "line",
        reset: function (t) {
            var e = t.getData(),
                i = t.getModel("lineStyle").getLineStyle();
            i && !i.stroke && (i.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", i)
        }
    }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, i6("line"))
}

function so(r, t, e) {
    var i = r.get("borderRadius");
    if (i == null) return e ? {
        cornerRadius: 0
    } : null;
    H(i) || (i = [i, i, i, i]);
    var n = Math.abs(t.r || 0 - t.r0 || 0);
    return {
        cornerRadius: Z(i, function (a) {
            return Lr(a, n)
        })
    }
}
var Kv = Math.PI * 2,
    lo = Math.PI / 180;

function wm(r, t) {
    return gs(r.getBoxLayoutParams(), {
        width: t.getWidth(),
        height: t.getHeight()
    })
}

function bm(r, t) {
    var e = wm(r, t),
        i = r.get("center"),
        n = r.get("radius");
    H(n) || (n = [0, n]);
    var a = yt(e.width, t.getWidth()),
        o = yt(e.height, t.getHeight()),
        s = Math.min(a, o),
        l = yt(n[0], s / 2),
        u = yt(n[1], s / 2),
        c, f, v = r.coordinateSystem;
    if (v) {
        var h = v.dataToPoint(i);
        c = h[0] || 0, f = h[1] || 0
    } else H(i) || (i = [i, i]), c = yt(i[0], a) + e.x, f = yt(i[1], o) + e.y;
    return {
        cx: c,
        cy: f,
        r0: l,
        r: u
    }
}

function a6(r, t, e) {
    t.eachSeriesByType(r, function (i) {
        var n = i.getData(),
            a = n.mapDimension("value"),
            o = wm(i, e),
            s = bm(i, e),
            l = s.cx,
            u = s.cy,
            c = s.r,
            f = s.r0,
            v = -i.get("startAngle") * lo,
            h = i.get("endAngle"),
            d = i.get("padAngle") * lo;
        h = h === "auto" ? v - Kv : -h * lo;
        var m = i.get("minAngle") * lo,
            p = m + d,
            g = 0;
        n.each(a, function (E) {
            !isNaN(E) && g++
        });
        var _ = n.getSum(a),
            y = Math.PI / (_ || g) * 2,
            x = i.get("clockwise"),
            S = i.get("roseType"),
            w = i.get("stillShowZeroSum"),
            T = n.getDataExtent(a);
        T[0] = 0;
        var C = x ? 1 : -1,
            M = [v, h],
            I = C * d / 2;
        Lp(M, !x), v = M[0], h = M[1];
        var A = Math.abs(h - v),
            L = A,
            P = 0,
            k = v;
        if (n.setLayout({
                viewRect: o,
                r: c
            }), n.each(a, function (E, W) {
                var F;
                if (isNaN(E)) {
                    n.setItemLayout(W, {
                        angle: NaN,
                        startAngle: NaN,
                        endAngle: NaN,
                        clockwise: x,
                        cx: l,
                        cy: u,
                        r0: f,
                        r: S ? NaN : c
                    });
                    return
                }
                S !== "area" ? F = _ === 0 && w ? y : E * y : F = A / g, F < p ? (F = p, L -= p) : P += E;
                var $ = k + C * F,
                    G = 0,
                    tt = 0;
                d > F ? (G = k + C * F / 2, tt = G) : (G = k + I, tt = $ - I), n.setItemLayout(W, {
                    angle: F,
                    startAngle: G,
                    endAngle: tt,
                    clockwise: x,
                    cx: l,
                    cy: u,
                    r0: f,
                    r: S ? uu(E, T, [f, c]) : c
                }), k = $
            }), L < Kv && g)
            if (L <= .001) {
                var R = A / g;
                n.each(a, function (E, W) {
                    if (!isNaN(E)) {
                        var F = n.getItemLayout(W);
                        F.angle = R;
                        var $ = 0,
                            G = 0;
                        R < d ? ($ = v + C * (W + 1 / 2) * R, G = $) : ($ = v + C * W * R + I, G = v + C * (W + 1) * R - I), F.startAngle = $, F.endAngle = G
                    }
                })
            } else y = L / P, k = v, n.each(a, function (E, W) {
                if (!isNaN(E)) {
                    var F = n.getItemLayout(W),
                        $ = F.angle === p ? p : E * y,
                        G = 0,
                        tt = 0;
                    $ < d ? (G = k + C * $ / 2, tt = G) : (G = k + I, tt = k + C * $ - I), F.startAngle = G, F.endAngle = tt, k += C * $
                }
            })
    })
}

function o6(r) {
    return {
        seriesType: r,
        reset: function (t, e) {
            var i = e.findComponents({
                mainType: "legend"
            });
            if (!(!i || !i.length)) {
                var n = t.getData();
                n.filterSelf(function (a) {
                    for (var o = n.getName(a), s = 0; s < i.length; s++)
                        if (!i[s].isSelected(o)) return !1;
                    return !0
                })
            }
        }
    }
}
var s6 = Math.PI / 180;

function jv(r, t, e, i, n, a, o, s, l, u) {
    if (r.length < 2) return;

    function c(m) {
        for (var p = m.rB, g = p * p, _ = 0; _ < m.list.length; _++) {
            var y = m.list[_],
                x = Math.abs(y.label.y - e),
                S = i + y.len,
                w = S * S,
                T = Math.sqrt((1 - Math.abs(x * x / g)) * w),
                C = t + (T + y.len2) * n,
                M = C - y.label.x,
                I = y.targetTextWidth - M * n;
            Sm(y, I, !0), y.label.x = C
        }
    }

    function f(m) {
        for (var p = {
                list: [],
                maxY: 0
            }, g = {
                list: [],
                maxY: 0
            }, _ = 0; _ < m.length; _++)
            if (m[_].labelAlignTo === "none") {
                var y = m[_],
                    x = y.label.y > e ? g : p,
                    S = Math.abs(y.label.y - e);
                if (S >= x.maxY) {
                    var w = y.label.x - t - y.len2 * n,
                        T = i + y.len,
                        C = Math.abs(w) < T ? Math.sqrt(S * S / (1 - w * w / T / T)) : T;
                    x.rB = C, x.maxY = S
                }
                x.list.push(y)
            } c(p), c(g)
    }
    for (var v = r.length, h = 0; h < v; h++)
        if (r[h].position === "outer" && r[h].labelAlignTo === "labelLine") {
            var d = r[h].label.x - u;
            r[h].linePoints[1][0] += d, r[h].label.x = u
        } DI(r, l, l + o) && f(r)
}

function l6(r, t, e, i, n, a, o, s) {
    for (var l = [], u = [], c = Number.MAX_VALUE, f = -Number.MAX_VALUE, v = 0; v < r.length; v++) {
        var h = r[v].label;
        Bl(r[v]) || (h.x < t ? (c = Math.min(c, h.x), l.push(r[v])) : (f = Math.max(f, h.x), u.push(r[v])))
    }
    for (var v = 0; v < r.length; v++) {
        var d = r[v];
        if (!Bl(d) && d.linePoints) {
            if (d.labelStyleWidth != null) continue;
            var h = d.label,
                m = d.linePoints,
                p = void 0;
            d.labelAlignTo === "edge" ? h.x < t ? p = m[2][0] - d.labelDistance - o - d.edgeDistance : p = o + n - d.edgeDistance - m[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? h.x < t ? p = c - o - d.bleedMargin : p = o + n - f - d.bleedMargin : h.x < t ? p = h.x - o - d.bleedMargin : p = o + n - h.x - d.bleedMargin, d.targetTextWidth = p, Sm(d, p)
        }
    }
    jv(u, t, e, i, 1, n, a, o, s, f), jv(l, t, e, i, -1, n, a, o, s, c);
    for (var v = 0; v < r.length; v++) {
        var d = r[v];
        if (!Bl(d) && d.linePoints) {
            var h = d.label,
                m = d.linePoints,
                g = d.labelAlignTo === "edge",
                _ = h.style.padding,
                y = _ ? _[1] + _[3] : 0,
                x = h.style.backgroundColor ? 0 : y,
                S = d.rect.width + x,
                w = m[1][0] - m[2][0];
            g ? h.x < t ? m[2][0] = o + d.edgeDistance + S + d.labelDistance : m[2][0] = o + n - d.edgeDistance - S - d.labelDistance : (h.x < t ? m[2][0] = h.x + d.labelDistance : m[2][0] = h.x - d.labelDistance, m[1][0] = m[2][0] + w), m[1][1] = m[2][1] = h.y
        }
    }
}

function Sm(r, t, e) {
    if (e === void 0 && (e = !1), r.labelStyleWidth == null) {
        var i = r.label,
            n = i.style,
            a = r.rect,
            o = n.backgroundColor,
            s = n.padding,
            l = s ? s[1] + s[3] : 0,
            u = n.overflow,
            c = a.width + (o ? 0 : l);
        if (t < c || e) {
            var f = a.height;
            if (u && u.match("break")) {
                i.setStyle("backgroundColor", null), i.setStyle("width", t - l);
                var v = i.getBoundingRect();
                i.setStyle("width", Math.ceil(v.width)), i.setStyle("backgroundColor", o)
            } else {
                var h = t - l,
                    d = t < c ? h : e ? h > r.unconstrainedWidth ? null : h : null;
                i.setStyle("width", d)
            }
            var m = i.getBoundingRect();
            a.width = m.width;
            var p = (i.style.margin || 0) + 2.1;
            a.height = m.height + p, a.y -= (a.height - f) / 2
        }
    }
}

function Bl(r) {
    return r.position === "center"
}

function u6(r) {
    var t = r.getData(),
        e = [],
        i, n, a = !1,
        o = (r.get("minShowLabelAngle") || 0) * s6,
        s = t.getLayout("viewRect"),
        l = t.getLayout("r"),
        u = s.width,
        c = s.x,
        f = s.y,
        v = s.height;

    function h(w) {
        w.ignore = !0
    }

    function d(w) {
        if (!w.ignore) return !0;
        for (var T in w.states)
            if (w.states[T].ignore === !1) return !0;
        return !1
    }
    t.each(function (w) {
        var T = t.getItemGraphicEl(w),
            C = T.shape,
            M = T.getTextContent(),
            I = T.getTextGuideLine(),
            A = t.getItemModel(w),
            L = A.getModel("label"),
            P = L.get("position") || A.get(["emphasis", "label", "position"]),
            k = L.get("distanceToLabelLine"),
            R = L.get("alignTo"),
            E = yt(L.get("edgeDistance"), u),
            W = L.get("bleedMargin"),
            F = A.getModel("labelLine"),
            $ = F.get("length");
        $ = yt($, u);
        var G = F.get("length2");
        if (G = yt(G, u), Math.abs(C.endAngle - C.startAngle) < o) {
            D(M.states, h), M.ignore = !0, I && (D(I.states, h), I.ignore = !0);
            return
        }
        if (d(M)) {
            var tt = (C.startAngle + C.endAngle) / 2,
                J = Math.cos(tt),
                at = Math.sin(tt),
                lt, Et, mt, Kt;
            i = C.cx, n = C.cy;
            var ce = P === "inside" || P === "inner";
            if (P === "center") lt = C.cx, Et = C.cy, Kt = "center";
            else {
                var Ot = (ce ? (C.r + C.r0) / 2 * J : C.r * J) + i,
                    Dt = (ce ? (C.r + C.r0) / 2 * at : C.r * at) + n;
                if (lt = Ot + J * 3, Et = Dt + at * 3, !ce) {
                    var q = Ot + J * ($ + l - C.r),
                        et = Dt + at * ($ + l - C.r),
                        Be = q + (J < 0 ? -1 : 1) * G,
                        Rt = et;
                    R === "edge" ? lt = J < 0 ? c + E : c + u - E : lt = Be + (J < 0 ? -k : k), Et = Rt, mt = [
                        [Ot, Dt],
                        [q, et],
                        [Be, Rt]
                    ]
                }
                Kt = ce ? "center" : R === "edge" ? J > 0 ? "right" : "left" : J > 0 ? "left" : "right"
            }
            var lr = Math.PI,
                Ke = 0,
                on = L.get("rotate");
            if (_t(on)) Ke = on * (lr / 180);
            else if (P === "center") Ke = 0;
            else if (on === "radial" || on === !0) {
                var Gm = J < 0 ? -tt + lr : -tt;
                Ke = Gm
            } else if (on === "tangential" && P !== "outside" && P !== "outer") {
                var yi = Math.atan2(J, at);
                yi < 0 && (yi = lr * 2 + yi);
                var Vm = at > 0;
                Vm && (yi = lr + yi), Ke = yi - lr
            }
            if (a = !!Ke, M.x = lt, M.y = Et, M.rotation = Ke, M.setStyle({
                    verticalAlign: "middle"
                }), ce) {
                M.setStyle({
                    align: Kt
                });
                var Ts = M.states.select;
                Ts && (Ts.x += M.x, Ts.y += M.y)
            } else {
                var sn = M.getBoundingRect().clone();
                sn.applyTransform(M.getComputedTransform());
                var tf = (M.style.margin || 0) + 2.1;
                sn.y -= tf / 2, sn.height += tf, e.push({
                    label: M,
                    labelLine: I,
                    position: P,
                    len: $,
                    len2: G,
                    minTurnAngle: F.get("minTurnAngle"),
                    maxSurfaceAngle: F.get("maxSurfaceAngle"),
                    surfaceNormal: new K(J, at),
                    linePoints: mt,
                    textAlign: Kt,
                    labelDistance: k,
                    labelAlignTo: R,
                    edgeDistance: E,
                    bleedMargin: W,
                    rect: sn,
                    unconstrainedWidth: sn.width,
                    labelStyleWidth: M.style.width
                })
            }
            T.setTextConfig({
                inside: ce
            })
        }
    }), !a && r.get("avoidLabelOverlap") && l6(e, i, n, l, u, v, c, f);
    for (var m = 0; m < e.length; m++) {
        var p = e[m],
            g = p.label,
            _ = p.labelLine,
            y = isNaN(g.x) || isNaN(g.y);
        if (g) {
            g.setStyle({
                align: p.textAlign
            }), y && (D(g.states, h), g.ignore = !0);
            var x = g.states.select;
            x && (x.x += g.x, x.y += g.y)
        }
        if (_) {
            var S = p.linePoints;
            y || !S ? (D(_.states, h), _.ignore = !0) : (xI(S, p.minTurnAngle), wI(S, p.surfaceNormal, p.maxSurfaceAngle), _.setShape({
                points: S
            }), g.__hostTarget.textGuideLineConfig = {
                anchor: new K(S[0][0], S[0][1])
            })
        }
    }
}
var c6 = function (r) {
        z(t, r);

        function t(e, i, n) {
            var a = r.call(this) || this;
            a.z2 = 2;
            var o = new ve;
            return a.setTextContent(o), a.updateData(e, i, n, !0), a
        }
        return t.prototype.updateData = function (e, i, n, a) {
            var o = this,
                s = e.hostModel,
                l = e.getItemModel(i),
                u = l.getModel("emphasis"),
                c = e.getItemLayout(i),
                f = O(so(l.getModel("itemStyle"), c, !0), c);
            if (isNaN(f.startAngle)) {
                o.setShape(f);
                return
            }
            if (a) {
                o.setShape(f);
                var v = s.getShallow("animationType");
                s.ecModel.ssr ? (Dr(o, {
                    scaleX: 0,
                    scaleY: 0
                }, s, {
                    dataIndex: i,
                    isFrom: !0
                }), o.originX = f.cx, o.originY = f.cy) : v === "scale" ? (o.shape.r = c.r0, Dr(o, {
                    shape: {
                        r: c.r
                    }
                }, s, i)) : n != null ? (o.setShape({
                    startAngle: n,
                    endAngle: n
                }), Dr(o, {
                    shape: {
                        startAngle: c.startAngle,
                        endAngle: c.endAngle
                    }
                }, s, i)) : (o.shape.endAngle = c.startAngle, or(o, {
                    shape: {
                        endAngle: c.endAngle
                    }
                }, s, i))
            } else pg(o), or(o, {
                shape: f
            }, s, i);
            o.useStyle(e.getItemVisual(i, "style")), mu(o, l);
            var h = (c.startAngle + c.endAngle) / 2,
                d = s.get("selectedOffset"),
                m = Math.cos(h) * d,
                p = Math.sin(h) * d,
                g = l.getShallow("cursor");
            g && o.attr("cursor", g), this._updateLabel(s, e, i), o.ensureState("emphasis").shape = O({
                r: c.r + (u.get("scale") && u.get("scaleSize") || 0)
            }, so(u.getModel("itemStyle"), c)), O(o.ensureState("select"), {
                x: m,
                y: p,
                shape: so(l.getModel(["select", "itemStyle"]), c)
            }), O(o.ensureState("blur"), {
                shape: so(l.getModel(["blur", "itemStyle"]), c)
            });
            var _ = o.getTextGuideLine(),
                y = o.getTextContent();
            _ && O(_.ensureState("select"), {
                x: m,
                y: p
            }), O(y.ensureState("select"), {
                x: m,
                y: p
            }), Bo(this, u.get("focus"), u.get("blurScope"), u.get("disabled"))
        }, t.prototype._updateLabel = function (e, i, n) {
            var a = this,
                o = i.getItemModel(n),
                s = o.getModel("labelLine"),
                l = i.getItemVisual(n, "style"),
                u = l && l.fill,
                c = l && l.opacity;
            Sc(a, us(o), {
                labelFetcher: i.hostModel,
                labelDataIndex: n,
                inheritColor: u,
                defaultOpacity: c,
                defaultText: e.getFormattedLabel(n, "normal") || i.getName(n)
            });
            var f = a.getTextContent();
            a.setTextConfig({
                position: null,
                rotation: null
            }), f.attr({
                z2: 10
            });
            var v = e.get(["label", "position"]);
            if (v !== "outside" && v !== "outer") a.removeTextGuideLine();
            else {
                var h = this.getTextGuideLine();
                h || (h = new xa, this.setTextGuideLine(h)), SI(this, CI(o), {
                    stroke: u,
                    opacity: Rn(s.get(["lineStyle", "opacity"]), c, 1)
                })
            }
        }, t
    }(ya),
    f6 = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.ignoreLabelLineUpdate = !0, e
        }
        return t.prototype.render = function (e, i, n, a) {
            var o = e.getData(),
                s = this._data,
                l = this.group,
                u;
            if (!s && o.count() > 0) {
                for (var c = o.getItemLayout(0), f = 1; isNaN(c && c.startAngle) && f < o.count(); ++f) c = o.getItemLayout(f);
                c && (u = c.startAngle)
            }
            if (this._emptyCircleSector && l.remove(this._emptyCircleSector), o.count() === 0 && e.get("showEmptyCircle")) {
                var v = new ya({
                    shape: bm(e, n)
                });
                v.useStyle(e.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = v, l.add(v)
            }
            o.diff(s).add(function (h) {
                var d = new c6(o, h, u);
                o.setItemGraphicEl(h, d), l.add(d)
            }).update(function (h, d) {
                var m = s.getItemGraphicEl(d);
                m.updateData(o, h, u), m.off("click"), l.add(m), o.setItemGraphicEl(h, m)
            }).remove(function (h) {
                var d = s.getItemGraphicEl(h);
                dg(d, e, h)
            }).execute(), u6(e), e.get("animationTypeUpdate") !== "expansion" && (this._data = o)
        }, t.prototype.dispose = function () {}, t.prototype.containPoint = function (e, i) {
            var n = i.getData(),
                a = n.getItemLayout(0);
            if (a) {
                var o = e[0] - a.cx,
                    s = e[1] - a.cy,
                    l = Math.sqrt(o * o + s * s);
                return l <= a.r && l >= a.r0
            }
        }, t.type = "pie", t
    }(ir);
const h6 = f6;

function v6(r, t, e) {
    t = H(t) && {
        coordDimensions: t
    } || O({
        encodeDefine: r.getEncode()
    }, t);
    var i = r.getSource(),
        n = j0(i, t).dimensions,
        a = new K0(n, r);
    return a.initData(i, e), a
}
var d6 = function () {
    function r(t, e) {
        this._getDataWithEncodedVisual = t, this._getRawData = e
    }
    return r.prototype.getAllNames = function () {
        var t = this._getRawData();
        return t.mapArray(t.getName)
    }, r.prototype.containName = function (t) {
        var e = this._getRawData();
        return e.indexOfName(t) >= 0
    }, r.prototype.indexOfName = function (t) {
        var e = this._getDataWithEncodedVisual();
        return e.indexOfName(t)
    }, r.prototype.getItemVisual = function (t, e) {
        var i = this._getDataWithEncodedVisual();
        return i.getItemVisual(t, e)
    }, r
}();
const p6 = d6;
var g6 = Lt(),
    m6 = function (r) {
        z(t, r);

        function t() {
            return r !== null && r.apply(this, arguments) || this
        }
        return t.prototype.init = function (e) {
            r.prototype.init.apply(this, arguments), this.legendVisualProvider = new p6(xt(this.getData, this), xt(this.getRawData, this)), this._defaultLabelLine(e)
        }, t.prototype.mergeOption = function () {
            r.prototype.mergeOption.apply(this, arguments)
        }, t.prototype.getInitialData = function () {
            return v6(this, {
                coordDimensions: ["value"],
                encodeDefaulter: ie(vM, this)
            })
        }, t.prototype.getDataParams = function (e) {
            var i = this.getData(),
                n = g6(i),
                a = n.seats;
            if (!a) {
                var o = [];
                i.each(i.mapDimension("value"), function (l) {
                    o.push(l)
                }), a = n.seats = JS(o, i.hostModel.get("percentPrecision"))
            }
            var s = r.prototype.getDataParams.call(this, e);
            return s.percent = a[e] || 0, s.$vars.push("percent"), s
        }, t.prototype._defaultLabelLine = function (e) {
            cu(e, "labelLine", ["show"]);
            var i = e.labelLine,
                n = e.emphasis.labelLine;
            i.show = i.show && e.label.show, n.show = n.show && e.emphasis.label.show
        }, t.type = "series.pie", t.defaultOption = {
            z: 2,
            legendHoverLink: !0,
            colorBy: "data",
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            endAngle: "auto",
            padAngle: 0,
            minAngle: 0,
            minShowLabelAngle: 0,
            selectedOffset: 10,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: null,
            height: null,
            label: {
                rotate: 0,
                show: !0,
                overflow: "truncate",
                position: "outer",
                alignTo: "none",
                edgeDistance: "25%",
                bleedMargin: 10,
                distanceToLabelLine: 5
            },
            labelLine: {
                show: !0,
                length: 15,
                length2: 15,
                smooth: !1,
                minTurnAngle: 90,
                maxSurfaceAngle: 90,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            itemStyle: {
                borderWidth: 1,
                borderJoin: "round"
            },
            showEmptyCircle: !0,
            emptyCircleStyle: {
                color: "lightgray",
                opacity: 1
            },
            labelLayout: {
                hideOverlap: !0
            },
            emphasis: {
                scale: !0,
                scaleSize: 5
            },
            avoidLabelOverlap: !0,
            animationType: "expansion",
            animationDuration: 1e3,
            animationTypeUpdate: "transition",
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500,
            animationEasing: "cubicInOut"
        }, t
    }(ji);
const _6 = m6;

function y6(r) {
    return {
        seriesType: r,
        reset: function (t, e) {
            var i = t.getData();
            i.filterSelf(function (n) {
                var a = i.mapDimension("value"),
                    o = i.get(a, n);
                return !(_t(o) && !isNaN(o) && o < 0)
            })
        }
    }
}

function x6(r) {
    r.registerChartView(h6), r.registerSeriesModel(_6), QD("pie", r.registerAction), r.registerLayout(ie(a6, "pie")), r.registerProcessor(o6("pie")), r.registerProcessor(y6("pie"))
}
var w6 = function (r) {
    z(t, r);

    function t() {
        return r !== null && r.apply(this, arguments) || this
    }
    return t.type = "grid", t.dependencies = ["xAxis", "yAxis"], t.layoutMode = "box", t.defaultOption = {
        show: !1,
        z: 0,
        left: "10%",
        top: 60,
        right: "10%",
        bottom: 70,
        containLabel: !1,
        backgroundColor: "rgba(0,0,0,0)",
        borderWidth: 1,
        borderColor: "#ccc"
    }, t
}(bt);
const b6 = w6;
var $u = function (r) {
    z(t, r);

    function t() {
        return r !== null && r.apply(this, arguments) || this
    }
    return t.prototype.getCoordSysModel = function () {
        return this.getReferringComponents("grid", Ee).models[0]
    }, t.type = "cartesian2dAxis", t
}(bt);
Ye($u, sI);
var Cm = {
        show: !0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {
            maxWidth: null,
            ellipsis: "...",
            placeholder: "."
        },
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {
            show: !1
        },
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {
                color: "#6E7079",
                width: 1,
                type: "solid"
            },
            symbol: ["none", "none"],
            symbolSize: [10, 15]
        },
        axisTick: {
            show: !0,
            inside: !1,
            length: 5,
            lineStyle: {
                width: 1
            }
        },
        axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12
        },
        splitLine: {
            show: !0,
            lineStyle: {
                color: ["#E0E6F1"],
                width: 1,
                type: "solid"
            }
        },
        splitArea: {
            show: !1,
            areaStyle: {
                color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
            }
        }
    },
    S6 = pt({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {
            show: !1
        },
        axisTick: {
            alignWithLabel: !1,
            interval: "auto"
        },
        axisLabel: {
            interval: "auto"
        }
    }, Cm),
    Kc = pt({
        boundaryGap: [0, 0],
        axisLine: {
            show: "auto"
        },
        axisTick: {
            show: "auto"
        },
        splitNumber: 5,
        minorTick: {
            show: !1,
            splitNumber: 5,
            length: 3,
            lineStyle: {}
        },
        minorSplitLine: {
            show: !1,
            lineStyle: {
                color: "#F4F7FD",
                width: 1
            }
        }
    }, Cm),
    C6 = pt({
        splitNumber: 6,
        axisLabel: {
            showMinLabel: !1,
            showMaxLabel: !1,
            rich: {
                primary: {
                    fontWeight: "bold"
                }
            }
        },
        splitLine: {
            show: !1
        }
    }, Kc),
    T6 = ht({
        logBase: 10
    }, Kc);
const M6 = {
    category: S6,
    value: Kc,
    time: C6,
    log: T6
};
var D6 = {
    value: 1,
    category: 1,
    time: 1,
    log: 1
};

function Qv(r, t, e, i) {
    D(D6, function (n, a) {
        var o = pt(pt({}, M6[a], !0), i, !0),
            s = function (l) {
                z(u, l);

                function u() {
                    var c = l !== null && l.apply(this, arguments) || this;
                    return c.type = t + "Axis." + a, c
                }
                return u.prototype.mergeDefaultAndTheme = function (c, f) {
                    var v = ra(this),
                        h = v ? Lc(c) : {},
                        d = f.getTheme();
                    pt(c, d.get(a + "Axis")), pt(c, this.getDefaultOption()), c.type = Jv(c), v && ia(c, h, v)
                }, u.prototype.optionUpdated = function () {
                    var c = this.option;
                    c.type === "category" && (this.__ordinalMeta = Bu.createByAxisModel(this))
                }, u.prototype.getCategories = function (c) {
                    var f = this.option;
                    if (f.type === "category") return c ? f.data : this.__ordinalMeta.categories
                }, u.prototype.getOrdinalMeta = function () {
                    return this.__ordinalMeta
                }, u.type = t + "Axis." + a, u.defaultOption = o, u
            }(e);
        r.registerComponentModel(s)
    }), r.registerSubTypeDefaulter(t + "Axis", Jv)
}

function Jv(r) {
    return r.type || (r.data ? "category" : "value")
}
var A6 = function () {
    function r(t) {
        this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || ""
    }
    return r.prototype.getAxis = function (t) {
        return this._axes[t]
    }, r.prototype.getAxes = function () {
        return Z(this._dimList, function (t) {
            return this._axes[t]
        }, this)
    }, r.prototype.getAxesByScale = function (t) {
        return t = t.toLowerCase(), Jt(this.getAxes(), function (e) {
            return e.scale.type === t
        })
    }, r.prototype.addAxis = function (t) {
        var e = t.dim;
        this._axes[e] = t, this._dimList.push(e)
    }, r
}();
const I6 = A6;
var zu = ["x", "y"];

function td(r) {
    return r.type === "interval" || r.type === "time"
}
var L6 = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = "cartesian2d", e.dimensions = zu, e
        }
        return t.prototype.calcAffineTransform = function () {
            this._transform = this._invTransform = null;
            var e = this.getAxis("x").scale,
                i = this.getAxis("y").scale;
            if (!(!td(e) || !td(i))) {
                var n = e.getExtent(),
                    a = i.getExtent(),
                    o = this.dataToPoint([n[0], a[0]]),
                    s = this.dataToPoint([n[1], a[1]]),
                    l = n[1] - n[0],
                    u = a[1] - a[0];
                if (!(!l || !u)) {
                    var c = (s[0] - o[0]) / l,
                        f = (s[1] - o[1]) / u,
                        v = o[0] - n[0] * c,
                        h = o[1] - a[0] * f,
                        d = this._transform = [c, 0, 0, f, v, h];
                    this._invTransform = ic([], d)
                }
            }
        }, t.prototype.getBaseAxis = function () {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
        }, t.prototype.containPoint = function (e) {
            var i = this.getAxis("x"),
                n = this.getAxis("y");
            return i.contain(i.toLocalCoord(e[0])) && n.contain(n.toLocalCoord(e[1]))
        }, t.prototype.containData = function (e) {
            return this.getAxis("x").containData(e[0]) && this.getAxis("y").containData(e[1])
        }, t.prototype.containZone = function (e, i) {
            var n = this.dataToPoint(e),
                a = this.dataToPoint(i),
                o = this.getArea(),
                s = new ct(n[0], n[1], a[0] - n[0], a[1] - n[1]);
            return o.intersect(s)
        }, t.prototype.dataToPoint = function (e, i, n) {
            n = n || [];
            var a = e[0],
                o = e[1];
            if (this._transform && a != null && isFinite(a) && o != null && isFinite(o)) return Te(n, e, this._transform);
            var s = this.getAxis("x"),
                l = this.getAxis("y");
            return n[0] = s.toGlobalCoord(s.dataToCoord(a, i)), n[1] = l.toGlobalCoord(l.dataToCoord(o, i)), n
        }, t.prototype.clampData = function (e, i) {
            var n = this.getAxis("x").scale,
                a = this.getAxis("y").scale,
                o = n.getExtent(),
                s = a.getExtent(),
                l = n.parse(e[0]),
                u = a.parse(e[1]);
            return i = i || [], i[0] = Math.min(Math.max(Math.min(o[0], o[1]), l), Math.max(o[0], o[1])), i[1] = Math.min(Math.max(Math.min(s[0], s[1]), u), Math.max(s[0], s[1])), i
        }, t.prototype.pointToData = function (e, i) {
            var n = [];
            if (this._invTransform) return Te(n, e, this._invTransform);
            var a = this.getAxis("x"),
                o = this.getAxis("y");
            return n[0] = a.coordToData(a.toLocalCoord(e[0]), i), n[1] = o.coordToData(o.toLocalCoord(e[1]), i), n
        }, t.prototype.getOtherAxis = function (e) {
            return this.getAxis(e.dim === "x" ? "y" : "x")
        }, t.prototype.getArea = function (e) {
            e = e || 0;
            var i = this.getAxis("x").getGlobalExtent(),
                n = this.getAxis("y").getGlobalExtent(),
                a = Math.min(i[0], i[1]) - e,
                o = Math.min(n[0], n[1]) - e,
                s = Math.max(i[0], i[1]) - a + e,
                l = Math.max(n[0], n[1]) - o + e;
            return new ct(a, o, s, l)
        }, t
    }(I6),
    P6 = function (r) {
        z(t, r);

        function t(e, i, n, a, o) {
            var s = r.call(this, e, i, n) || this;
            return s.index = 0, s.type = a || "value", s.position = o || "bottom", s
        }
        return t.prototype.isHorizontal = function () {
            var e = this.position;
            return e === "top" || e === "bottom"
        }, t.prototype.getGlobalExtent = function (e) {
            var i = this.getExtent();
            return i[0] = this.toGlobalCoord(i[0]), i[1] = this.toGlobalCoord(i[1]), e && i[0] > i[1] && i.reverse(), i
        }, t.prototype.pointToData = function (e, i) {
            return this.coordToData(this.toLocalCoord(e[this.dim === "x" ? 0 : 1]), i)
        }, t.prototype.setCategorySortInfo = function (e) {
            if (this.type !== "category") return !1;
            this.model.option.categorySortInfo = e, this.scale.setSortInfo(e)
        }, t
    }(yI);
const k6 = P6;

function Hu(r, t, e) {
    e = e || {};
    var i = r.coordinateSystem,
        n = t.axis,
        a = {},
        o = n.getAxesOnZeroOf()[0],
        s = n.position,
        l = o ? "onZero" : s,
        u = n.dim,
        c = i.getRect(),
        f = [c.x, c.x + c.width, c.y, c.y + c.height],
        v = {
            left: 0,
            right: 1,
            top: 0,
            bottom: 1,
            onZero: 2
        },
        h = t.get("offset") || 0,
        d = u === "x" ? [f[2] - h, f[3] + h] : [f[0] - h, f[1] + h];
    if (o) {
        var m = o.toGlobalCoord(o.dataToCoord(0));
        d[v.onZero] = Math.max(Math.min(m, d[1]), d[0])
    }
    a.position = [u === "y" ? d[v[l]] : f[0], u === "x" ? d[v[l]] : f[3]], a.rotation = Math.PI / 2 * (u === "x" ? 0 : 1);
    var p = {
        top: -1,
        bottom: 1,
        left: -1,
        right: 1
    };
    a.labelDirection = a.tickDirection = a.nameDirection = p[s], a.labelOffset = o ? d[v[s]] - d[v.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), Kn(e.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
    var g = t.get(["axisLabel", "rotate"]);
    return a.labelRotate = l === "top" ? -g : g, a.z2 = 1, a
}

function ed(r) {
    return r.get("coordinateSystem") === "cartesian2d"
}

function rd(r) {
    var t = {
        xAxisModel: null,
        yAxisModel: null
    };
    return D(t, function (e, i) {
        var n = i.replace(/Model$/, ""),
            a = r.getReferringComponents(n, Ee).models[0];
        t[i] = a
    }), t
}
var Nl = Math.log;

function E6(r, t, e) {
    var i = wa.prototype,
        n = i.getTicks.call(e),
        a = i.getTicks.call(e, !0),
        o = n.length - 1,
        s = i.getInterval.call(e),
        l = sm(r, t),
        u = l.extent,
        c = l.fixMin,
        f = l.fixMax;
    if (r.type === "log") {
        var v = Nl(r.base);
        u = [Nl(u[0]) / v, Nl(u[1]) / v]
    }
    r.setExtent(u[0], u[1]), r.calcNiceExtent({
        splitNumber: o,
        fixMin: c,
        fixMax: f
    });
    var h = i.getExtent.call(r);
    c && (u[0] = h[0]), f && (u[1] = h[1]);
    var d = i.getInterval.call(r),
        m = u[0],
        p = u[1];
    if (c && f) d = (p - m) / o;
    else if (c)
        for (p = u[0] + d * o; p < u[1] && isFinite(p) && isFinite(u[1]);) d = kl(d), p = u[0] + d * o;
    else if (f)
        for (m = u[1] - d * o; m > u[0] && isFinite(m) && isFinite(u[0]);) d = kl(d), m = u[1] - d * o;
    else {
        var g = r.getTicks().length - 1;
        g > o && (d = kl(d));
        var _ = d * o;
        p = Math.ceil(u[1] / d) * d, m = It(p - _), m < 0 && u[0] >= 0 ? (m = 0, p = It(_)) : p > 0 && u[1] <= 0 && (p = 0, m = -It(_))
    }
    var y = (n[0].value - a[0].value) / s,
        x = (n[o].value - a[o].value) / s;
    i.setExtent.call(r, m + d * y, p + d * x), i.setInterval.call(r, d), (y || x) && i.setNiceExtent.call(r, m + d, p - d)
}
var R6 = function () {
    function r(t, e, i) {
        this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = zu, this._initCartesian(t, e, i), this.model = t
    }
    return r.prototype.getRect = function () {
        return this._rect
    }, r.prototype.update = function (t, e) {
        var i = this._axesMap;
        this._updateScale(t, this.model);

        function n(o) {
            var s, l = wt(o),
                u = l.length;
            if (u) {
                for (var c = [], f = u - 1; f >= 0; f--) {
                    var v = +l[f],
                        h = o[v],
                        d = h.model,
                        m = h.scale;
                    Nu(m) && d.get("alignTicks") && d.get("interval") == null ? c.push(h) : ($v(m, d), Nu(m) && (s = h))
                }
                c.length && (s || (s = c.pop(), $v(s.scale, s.model)), D(c, function (p) {
                    E6(p.scale, p.model, s.scale)
                }))
            }
        }
        n(i.x), n(i.y);
        var a = {};
        D(i.x, function (o) {
            id(i, "y", o, a)
        }), D(i.y, function (o) {
            id(i, "x", o, a)
        }), this.resize(this.model, e)
    }, r.prototype.resize = function (t, e, i) {
        var n = t.getBoxLayoutParams(),
            a = !i && t.get("containLabel"),
            o = gs(n, {
                width: e.getWidth(),
                height: e.getHeight()
            });
        this._rect = o;
        var s = this._axesList;
        l(), a && (D(s, function (u) {
            if (!u.model.get(["axisLabel", "inside"])) {
                var c = nI(u);
                if (c) {
                    var f = u.isHorizontal() ? "height" : "width",
                        v = u.model.get(["axisLabel", "margin"]);
                    o[f] -= c[f] + v, u.position === "top" ? o.y += c.height + v : u.position === "left" && (o.x += c.width + v)
                }
            }
        }), l()), D(this._coordsList, function (u) {
            u.calcAffineTransform()
        });

        function l() {
            D(s, function (u) {
                var c = u.isHorizontal(),
                    f = c ? [0, o.width] : [0, o.height],
                    v = u.inverse ? 1 : 0;
                u.setExtent(f[v], f[1 - v]), O6(u, c ? o.x : o.y)
            })
        }
    }, r.prototype.getAxis = function (t, e) {
        var i = this._axesMap[t];
        if (i != null) return i[e || 0]
    }, r.prototype.getAxes = function () {
        return this._axesList.slice()
    }, r.prototype.getCartesian = function (t, e) {
        if (t != null && e != null) {
            var i = "x" + t + "y" + e;
            return this._coordsMap[i]
        }
        X(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var n = 0, a = this._coordsList; n < a.length; n++)
            if (a[n].getAxis("x").index === t || a[n].getAxis("y").index === e) return a[n]
    }, r.prototype.getCartesians = function () {
        return this._coordsList.slice()
    }, r.prototype.convertToPixel = function (t, e, i) {
        var n = this._findConvertTarget(e);
        return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null
    }, r.prototype.convertFromPixel = function (t, e, i) {
        var n = this._findConvertTarget(e);
        return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null
    }, r.prototype._findConvertTarget = function (t) {
        var e = t.seriesModel,
            i = t.xAxisModel || e && e.getReferringComponents("xAxis", Ee).models[0],
            n = t.yAxisModel || e && e.getReferringComponents("yAxis", Ee).models[0],
            a = t.gridModel,
            o = this._coordsList,
            s, l;
        if (e) s = e.coordinateSystem, dt(o, s) < 0 && (s = null);
        else if (i && n) s = this.getCartesian(i.componentIndex, n.componentIndex);
        else if (i) l = this.getAxis("x", i.componentIndex);
        else if (n) l = this.getAxis("y", n.componentIndex);
        else if (a) {
            var u = a.coordinateSystem;
            u === this && (s = this._coordsList[0])
        }
        return {
            cartesian: s,
            axis: l
        }
    }, r.prototype.containPoint = function (t) {
        var e = this._coordsList[0];
        if (e) return e.containPoint(t)
    }, r.prototype._initCartesian = function (t, e, i) {
        var n = this,
            a = this,
            o = {
                left: !1,
                right: !1,
                top: !1,
                bottom: !1
            },
            s = {
                x: {},
                y: {}
            },
            l = {
                x: 0,
                y: 0
            };
        if (e.eachComponent("xAxis", u("x"), this), e.eachComponent("yAxis", u("y"), this), !l.x || !l.y) {
            this._axesMap = {}, this._axesList = [];
            return
        }
        this._axesMap = s, D(s.x, function (c, f) {
            D(s.y, function (v, h) {
                var d = "x" + f + "y" + h,
                    m = new L6(d);
                m.master = n, m.model = t, n._coordsMap[d] = m, n._coordsList.push(m), m.addAxis(c), m.addAxis(v)
            })
        });

        function u(c) {
            return function (f, v) {
                if (Fl(f, t)) {
                    var h = f.get("position");
                    c === "x" ? h !== "top" && h !== "bottom" && (h = o.bottom ? "top" : "bottom") : h !== "left" && h !== "right" && (h = o.left ? "right" : "left"), o[h] = !0;
                    var d = new k6(c, rI(f), [0, 0], f.get("type"), h),
                        m = d.type === "category";
                    d.onBand = m && f.get("boundaryGap"), d.inverse = f.get("inverse"), f.axis = d, d.model = f, d.grid = a, d.index = v, a._axesList.push(d), s[c][v] = d, l[c]++
                }
            }
        }
    }, r.prototype._updateScale = function (t, e) {
        D(this._axesList, function (n) {
            if (n.scale.setExtent(1 / 0, -1 / 0), n.type === "category") {
                var a = n.model.get("categorySortInfo");
                n.scale.setSortInfo(a)
            }
        }), t.eachSeries(function (n) {
            if (ed(n)) {
                var a = rd(n),
                    o = a.xAxisModel,
                    s = a.yAxisModel;
                if (!Fl(o, e) || !Fl(s, e)) return;
                var l = this.getCartesian(o.componentIndex, s.componentIndex),
                    u = n.getData(),
                    c = l.getAxis("x"),
                    f = l.getAxis("y");
                i(u, c), i(u, f)
            }
        }, this);

        function i(n, a) {
            D(oI(n, a.dim), function (o) {
                a.scale.unionExtentFromData(n, o)
            })
        }
    }, r.prototype.getTooltipAxes = function (t) {
        var e = [],
            i = [];
        return D(this.getCartesians(), function (n) {
            var a = t != null && t !== "auto" ? n.getAxis(t) : n.getBaseAxis(),
                o = n.getOtherAxis(a);
            dt(e, a) < 0 && e.push(a), dt(i, o) < 0 && i.push(o)
        }), {
            baseAxes: e,
            otherAxes: i
        }
    }, r.create = function (t, e) {
        var i = [];
        return t.eachComponent("grid", function (n, a) {
            var o = new r(n, t, e);
            o.name = "grid_" + a, o.resize(n, e, !0), n.coordinateSystem = o, i.push(o)
        }), t.eachSeries(function (n) {
            if (ed(n)) {
                var a = rd(n),
                    o = a.xAxisModel,
                    s = a.yAxisModel,
                    l = o.getCoordSysModel(),
                    u = l.coordinateSystem;
                n.coordinateSystem = u.getCartesian(o.componentIndex, s.componentIndex)
            }
        }), i
    }, r.dimensions = zu, r
}();

function Fl(r, t) {
    return r.getCoordSysModel() === t
}

function id(r, t, e, i) {
    e.getAxesOnZeroOf = function () {
        return a ? [a] : []
    };
    var n = r[t],
        a, o = e.model,
        s = o.get(["axisLine", "onZero"]),
        l = o.get(["axisLine", "onZeroAxisIndex"]);
    if (!s) return;
    if (l != null) nd(n[l]) && (a = n[l]);
    else
        for (var u in n)
            if (n.hasOwnProperty(u) && nd(n[u]) && !i[c(n[u])]) {
                a = n[u];
                break
            } a && (i[c(a)] = !0);

    function c(f) {
        return f.dim + "_" + f.index
    }
}

function nd(r) {
    return r && r.type !== "category" && r.type !== "time" && iI(r)
}

function O6(r, t) {
    var e = r.getExtent(),
        i = e[0] + e[1];
    r.toGlobalCoord = r.dim === "x" ? function (n) {
        return n + t
    } : function (n) {
        return i - n + t
    }, r.toLocalCoord = r.dim === "x" ? function (n) {
        return n - t
    } : function (n) {
        return i - n + t
    }
}
const B6 = R6;
var Sr = Math.PI,
    ui = function () {
        function r(t, e) {
            this.group = new le, this.opt = e, this.axisModel = t, ht(e, {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: !0,
                handleAutoShown: function () {
                    return !0
                }
            });
            var i = new le({
                x: e.position[0],
                y: e.position[1],
                rotation: e.rotation
            });
            i.updateTransform(), this._transformGroup = i
        }
        return r.prototype.hasBuilder = function (t) {
            return !!ad[t]
        }, r.prototype.add = function (t) {
            ad[t](this.opt, this.axisModel, this.group, this._transformGroup)
        }, r.prototype.getGroup = function () {
            return this.group
        }, r.innerTextLayout = function (t, e, i) {
            var n = gp(e - t),
                a, o;
            return Po(n) ? (o = i > 0 ? "top" : "bottom", a = "center") : Po(n - Sr) ? (o = i > 0 ? "bottom" : "top", a = "center") : (o = "middle", n > 0 && n < Sr ? a = i > 0 ? "right" : "left" : a = i > 0 ? "left" : "right"), {
                rotation: n,
                textAlign: a,
                textVerticalAlign: o
            }
        }, r.makeAxisEventDataBase = function (t) {
            var e = {
                componentType: t.mainType,
                componentIndex: t.componentIndex
            };
            return e[t.mainType + "Index"] = t.componentIndex, e
        }, r.isLabelSilent = function (t) {
            var e = t.get("tooltip");
            return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
        }, r
    }(),
    ad = {
        axisLine: function (r, t, e, i) {
            var n = t.get(["axisLine", "show"]);
            if (n === "auto" && r.handleAutoShown && (n = r.handleAutoShown("axisLine")), !!n) {
                var a = t.axis.getExtent(),
                    o = i.transform,
                    s = [a[0], 0],
                    l = [a[1], 0],
                    u = s[0] > l[0];
                o && (Te(s, s, o), Te(l, l, o));
                var c = O({
                        lineCap: "round"
                    }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()),
                    f = new vi({
                        shape: {
                            x1: s[0],
                            y1: s[1],
                            x2: l[0],
                            y2: l[1]
                        },
                        style: c,
                        strokeContainThreshold: r.strokeContainThreshold || 5,
                        silent: !0,
                        z2: 1
                    });
                ta(f.shape, f.style.lineWidth), f.anid = "line", e.add(f);
                var v = t.get(["axisLine", "symbol"]);
                if (v != null) {
                    var h = t.get(["axisLine", "symbolSize"]);
                    V(v) && (v = [v, v]), (V(h) || _t(h)) && (h = [h, h]);
                    var d = w0(t.get(["axisLine", "symbolOffset"]) || 0, h),
                        m = h[0],
                        p = h[1];
                    D([{
                        rotate: r.rotation + Math.PI / 2,
                        offset: d[0],
                        r: 0
                    }, {
                        rotate: r.rotation - Math.PI / 2,
                        offset: d[1],
                        r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1]))
                    }], function (g, _) {
                        if (v[_] !== "none" && v[_] != null) {
                            var y = sa(v[_], -m / 2, -p / 2, m, p, c.stroke, !0),
                                x = g.r + g.offset,
                                S = u ? l : s;
                            y.attr({
                                rotation: g.rotate,
                                x: S[0] + x * Math.cos(r.rotation),
                                y: S[1] - x * Math.sin(r.rotation),
                                silent: !0,
                                z2: 11
                            }), e.add(y)
                        }
                    })
                }
            }
        },
        axisTickLabel: function (r, t, e, i) {
            var n = $6(e, i, t, r),
                a = H6(e, i, t, r);
            if (F6(t, a, n), z6(e, i, t, r.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
                var o = TI(Z(a, function (s) {
                    return {
                        label: s,
                        priority: s.z2,
                        defaultAttr: {
                            ignore: s.ignore
                        }
                    }
                }));
                AI(o)
            }
        },
        axisName: function (r, t, e, i) {
            var n = Kn(r.axisName, t.get("name"));
            if (n) {
                var a = t.get("nameLocation"),
                    o = r.nameDirection,
                    s = t.getModel("nameTextStyle"),
                    l = t.get("nameGap") || 0,
                    u = t.axis.getExtent(),
                    c = u[0] > u[1] ? -1 : 1,
                    f = [a === "start" ? u[0] - c * l : a === "end" ? u[1] + c * l : (u[0] + u[1]) / 2, sd(a) ? r.labelOffset + o * l : 0],
                    v, h = t.get("nameRotate");
                h != null && (h = h * Sr / 180);
                var d;
                sd(a) ? v = ui.innerTextLayout(r.rotation, h ?? r.rotation, o) : (v = N6(r.rotation, a, h || 0, u), d = r.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(v.rotation)), !isFinite(d) && (d = null)));
                var m = s.getFont(),
                    p = t.get("nameTruncate", !0) || {},
                    g = p.ellipsis,
                    _ = Kn(r.nameTruncateMaxWidth, p.maxWidth, d),
                    y = new ve({
                        x: f[0],
                        y: f[1],
                        rotation: v.rotation,
                        silent: ui.isLabelSilent(t),
                        style: di(s, {
                            text: n,
                            font: m,
                            overflow: "truncate",
                            width: _,
                            ellipsis: g,
                            fill: s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
                            align: s.get("align") || v.textAlign,
                            verticalAlign: s.get("verticalAlign") || v.textVerticalAlign
                        }),
                        z2: 1
                    });
                if (bg({
                        el: y,
                        componentModel: t,
                        itemName: n
                    }), y.__fullText = n, y.anid = "name", t.get("triggerEvent")) {
                    var x = ui.makeAxisEventDataBase(t);
                    x.targetType = "axisName", x.name = n, vt(y).eventData = x
                }
                i.add(y), y.updateTransform(), e.add(y), y.decomposeTransform()
            }
        }
    };

function N6(r, t, e, i) {
    var n = gp(e - r),
        a, o, s = i[0] > i[1],
        l = t === "start" && !s || t !== "start" && s;
    return Po(n - Sr / 2) ? (o = l ? "bottom" : "top", a = "center") : Po(n - Sr * 1.5) ? (o = l ? "top" : "bottom", a = "center") : (o = "middle", n < Sr * 1.5 && n > Sr / 2 ? a = l ? "left" : "right" : a = l ? "right" : "left"), {
        rotation: n,
        textAlign: a,
        textVerticalAlign: o
    }
}

function F6(r, t, e) {
    if (!lm(r.axis)) {
        var i = r.get(["axisLabel", "showMinLabel"]),
            n = r.get(["axisLabel", "showMaxLabel"]);
        t = t || [], e = e || [];
        var a = t[0],
            o = t[1],
            s = t[t.length - 1],
            l = t[t.length - 2],
            u = e[0],
            c = e[1],
            f = e[e.length - 1],
            v = e[e.length - 2];
        i === !1 ? (pe(a), pe(u)) : od(a, o) && (i ? (pe(o), pe(c)) : (pe(a), pe(u))), n === !1 ? (pe(s), pe(f)) : od(l, s) && (n ? (pe(l), pe(v)) : (pe(s), pe(f)))
    }
}

function pe(r) {
    r && (r.ignore = !0)
}

function od(r, t) {
    var e = r && r.getBoundingRect().clone(),
        i = t && t.getBoundingRect().clone();
    if (!(!e || !i)) {
        var n = ec([]);
        return rc(n, n, -r.rotation), e.applyTransform(Wi([], n, r.getLocalTransform())), i.applyTransform(Wi([], n, t.getLocalTransform())), e.intersect(i)
    }
}

function sd(r) {
    return r === "middle" || r === "center"
}

function Tm(r, t, e, i, n) {
    for (var a = [], o = [], s = [], l = 0; l < r.length; l++) {
        var u = r[l].coord;
        o[0] = u, o[1] = 0, s[0] = u, s[1] = e, t && (Te(o, o, t), Te(s, s, t));
        var c = new vi({
            shape: {
                x1: o[0],
                y1: o[1],
                x2: s[0],
                y2: s[1]
            },
            style: i,
            z2: 2,
            autoBatch: !0,
            silent: !0
        });
        ta(c.shape, c.style.lineWidth), c.anid = n + "_" + r[l].tickValue, a.push(c)
    }
    return a
}

function $6(r, t, e, i) {
    var n = e.axis,
        a = e.getModel("axisTick"),
        o = a.get("show");
    if (o === "auto" && i.handleAutoShown && (o = i.handleAutoShown("axisTick")), !(!o || n.scale.isBlank())) {
        for (var s = a.getModel("lineStyle"), l = i.tickDirection * a.get("length"), u = n.getTicksCoords(), c = Tm(u, t.transform, l, ht(s.getLineStyle(), {
                stroke: e.get(["axisLine", "lineStyle", "color"])
            }), "ticks"), f = 0; f < c.length; f++) r.add(c[f]);
        return c
    }
}

function z6(r, t, e, i) {
    var n = e.axis,
        a = e.getModel("minorTick");
    if (!(!a.get("show") || n.scale.isBlank())) {
        var o = n.getMinorTicksCoords();
        if (o.length)
            for (var s = a.getModel("lineStyle"), l = i * a.get("length"), u = ht(s.getLineStyle(), ht(e.getModel("axisTick").getLineStyle(), {
                    stroke: e.get(["axisLine", "lineStyle", "color"])
                })), c = 0; c < o.length; c++)
                for (var f = Tm(o[c], t.transform, l, u, "minorticks_" + c), v = 0; v < f.length; v++) r.add(f[v])
    }
}

function H6(r, t, e, i) {
    var n = e.axis,
        a = Kn(i.axisLabelShow, e.get(["axisLabel", "show"]));
    if (!(!a || n.scale.isBlank())) {
        var o = e.getModel("axisLabel"),
            s = o.get("margin"),
            l = n.getViewLabels(),
            u = (Kn(i.labelRotate, o.get("rotate")) || 0) * Sr / 180,
            c = ui.innerTextLayout(i.rotation, u, i.labelDirection),
            f = e.getCategories && e.getCategories(!0),
            v = [],
            h = ui.isLabelSilent(e),
            d = e.get("triggerEvent");
        return D(l, function (m, p) {
            var g = n.scale.type === "ordinal" ? n.scale.getRawOrdinalNumber(m.tickValue) : m.tickValue,
                _ = m.formattedLabel,
                y = m.rawLabel,
                x = o;
            if (f && f[g]) {
                var S = f[g];
                X(S) && S.textStyle && (x = new Xt(S.textStyle, o, e.ecModel))
            }
            var w = x.getTextColor() || e.get(["axisLine", "lineStyle", "color"]),
                T = n.dataToCoord(g),
                C = x.getShallow("align", !0) || c.textAlign,
                M = rt(x.getShallow("alignMinLabel", !0), C),
                I = rt(x.getShallow("alignMaxLabel", !0), C),
                A = x.getShallow("verticalAlign", !0) || x.getShallow("baseline", !0) || c.textVerticalAlign,
                L = rt(x.getShallow("verticalAlignMinLabel", !0), A),
                P = rt(x.getShallow("verticalAlignMaxLabel", !0), A),
                k = new ve({
                    x: T,
                    y: i.labelOffset + i.labelDirection * s,
                    rotation: c.rotation,
                    silent: h,
                    z2: 10 + (m.level || 0),
                    style: di(x, {
                        text: _,
                        align: p === 0 ? M : p === l.length - 1 ? I : C,
                        verticalAlign: p === 0 ? L : p === l.length - 1 ? P : A,
                        fill: Q(w) ? w(n.type === "category" ? y : n.type === "value" ? g + "" : g, p) : w
                    })
                });
            if (k.anid = "label_" + g, d) {
                var R = ui.makeAxisEventDataBase(e);
                R.targetType = "axisLabel", R.value = y, R.tickIndex = p, n.type === "category" && (R.dataIndex = g), vt(k).eventData = R
            }
            t.add(k), k.updateTransform(), v.push(k), r.add(k), k.decomposeTransform()
        }), v
    }
}
const Mm = ui;

function G6(r, t) {
    var e = {
        axesInfo: {},
        seriesInvolved: !1,
        coordSysAxesInfo: {},
        coordSysMap: {}
    };
    return V6(e, r, t), e.seriesInvolved && U6(e, r), e
}

function V6(r, t, e) {
    var i = t.getComponent("tooltip"),
        n = t.getComponent("axisPointer"),
        a = n.get("link", !0) || [],
        o = [];
    D(e.getCoordinateSystems(), function (s) {
        if (!s.axisPointerEnabled) return;
        var l = ha(s.model),
            u = r.coordSysAxesInfo[l] = {};
        r.coordSysMap[l] = s;
        var c = s.model,
            f = c.getModel("tooltip", i);
        if (D(s.getAxes(), ie(m, !1, null)), s.getTooltipAxes && i && f.get("show")) {
            var v = f.get("trigger") === "axis",
                h = f.get(["axisPointer", "type"]) === "cross",
                d = s.getTooltipAxes(f.get(["axisPointer", "axis"]));
            (v || h) && D(d.baseAxes, ie(m, h ? "cross" : !0, v)), h && D(d.otherAxes, ie(m, "cross", !1))
        }

        function m(p, g, _) {
            var y = _.model.getModel("axisPointer", n),
                x = y.get("show");
            if (!(!x || x === "auto" && !p && !Gu(y))) {
                g == null && (g = y.get("triggerTooltip")), y = p ? W6(_, f, n, t, p, g) : y;
                var S = y.get("snap"),
                    w = y.get("triggerEmphasis"),
                    T = ha(_.model),
                    C = g || S || _.type === "category",
                    M = r.axesInfo[T] = {
                        key: T,
                        axis: _,
                        coordSys: s,
                        axisPointerModel: y,
                        triggerTooltip: g,
                        triggerEmphasis: w,
                        involveSeries: C,
                        snap: S,
                        useHandle: Gu(y),
                        seriesModels: [],
                        linkGroup: null
                    };
                u[T] = M, r.seriesInvolved = r.seriesInvolved || C;
                var I = Y6(a, _);
                if (I != null) {
                    var A = o[I] || (o[I] = {
                        axesInfo: {}
                    });
                    A.axesInfo[T] = M, A.mapper = a[I].mapper, M.linkGroup = A
                }
            }
        }
    })
}

function W6(r, t, e, i, n, a) {
    var o = t.getModel("axisPointer"),
        s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"],
        l = {};
    D(s, function (v) {
        l[v] = ot(o.get(v))
    }), l.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (l.type = "line");
    var u = l.label || (l.label = {});
    if (u.show == null && (u.show = !1), n === "cross") {
        var c = o.get(["label", "show"]);
        if (u.show = c ?? !0, !a) {
            var f = l.lineStyle = o.get("crossStyle");
            f && ht(u, f.textStyle)
        }
    }
    return r.model.getModel("axisPointer", new Xt(l, e, i))
}

function U6(r, t) {
    t.eachSeries(function (e) {
        var i = e.coordinateSystem,
            n = e.get(["tooltip", "trigger"], !0),
            a = e.get(["tooltip", "show"], !0);
        !i || n === "none" || n === !1 || n === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || D(r.coordSysAxesInfo[ha(i.model)], function (o) {
            var s = o.axis;
            i.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count())
        })
    })
}

function Y6(r, t) {
    for (var e = t.model, i = t.dim, n = 0; n < r.length; n++) {
        var a = r[n] || {};
        if ($l(a[i + "AxisId"], e.id) || $l(a[i + "AxisIndex"], e.componentIndex) || $l(a[i + "AxisName"], e.name)) return n
    }
}

function $l(r, t) {
    return r === "all" || H(r) && dt(r, t) >= 0 || r === t
}

function X6(r) {
    var t = jc(r);
    if (t) {
        var e = t.axisPointerModel,
            i = t.axis.scale,
            n = e.option,
            a = e.get("status"),
            o = e.get("value");
        o != null && (o = i.parse(o));
        var s = Gu(e);
        a == null && (n.status = s ? "show" : "hide");
        var l = i.getExtent().slice();
        l[0] > l[1] && l.reverse(), (o == null || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), n.value = o, s && (n.status = t.axis.scale.isBlank() ? "hide" : "show")
    }
}

function jc(r) {
    var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return t && t.axesInfo[ha(r)]
}

function Z6(r) {
    var t = jc(r);
    return t && t.axisPointerModel
}

function Gu(r) {
    return !!r.get(["handle", "show"])
}

function ha(r) {
    return r.type + "||" + r.id
}
var ld = {},
    Dm = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = t.type, e
        }
        return t.prototype.render = function (e, i, n, a) {
            this.axisPointerClass && X6(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, n, !0)
        }, t.prototype.updateAxisPointer = function (e, i, n, a) {
            this._doUpdateAxisPointerClass(e, n, !1)
        }, t.prototype.remove = function (e, i) {
            var n = this._axisPointer;
            n && n.remove(i)
        }, t.prototype.dispose = function (e, i) {
            this._disposeAxisPointer(i), r.prototype.dispose.apply(this, arguments)
        }, t.prototype._doUpdateAxisPointerClass = function (e, i, n) {
            var a = t.getAxisPointerClass(this.axisPointerClass);
            if (a) {
                var o = Z6(e);
                o ? (this._axisPointer || (this._axisPointer = new a)).render(e, o, i, n) : this._disposeAxisPointer(i)
            }
        }, t.prototype._disposeAxisPointer = function (e) {
            this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null
        }, t.registerAxisPointerClass = function (e, i) {
            ld[e] = i
        }, t.getAxisPointerClass = function (e) {
            return e && ld[e]
        }, t.type = "axis", t
    }(Pr),
    Vu = Lt();

function q6(r, t, e, i) {
    var n = e.axis;
    if (!n.scale.isBlank()) {
        var a = e.getModel("splitArea"),
            o = a.getModel("areaStyle"),
            s = o.get("color"),
            l = i.coordinateSystem.getRect(),
            u = n.getTicksCoords({
                tickModel: a,
                clamp: !0
            });
        if (u.length) {
            var c = s.length,
                f = Vu(r).splitAreaColors,
                v = it(),
                h = 0;
            if (f)
                for (var d = 0; d < u.length; d++) {
                    var m = f.get(u[d].tickValue);
                    if (m != null) {
                        h = (m + (c - 1) * d) % c;
                        break
                    }
                }
            var p = n.toGlobalCoord(u[0].coord),
                g = o.getAreaStyle();
            s = H(s) ? s : [s];
            for (var d = 1; d < u.length; d++) {
                var _ = n.toGlobalCoord(u[d].coord),
                    y = void 0,
                    x = void 0,
                    S = void 0,
                    w = void 0;
                n.isHorizontal() ? (y = p, x = l.y, S = _ - y, w = l.height, p = y + S) : (y = l.x, x = p, S = l.width, w = _ - x, p = x + w);
                var T = u[d - 1].tickValue;
                T != null && v.set(T, h), t.add(new ae({
                    anid: T != null ? "area_" + T : null,
                    shape: {
                        x: y,
                        y: x,
                        width: S,
                        height: w
                    },
                    style: ht({
                        fill: s[h]
                    }, g),
                    autoBatch: !0,
                    silent: !0
                })), h = (h + 1) % c
            }
            Vu(r).splitAreaColors = v
        }
    }
}

function K6(r) {
    Vu(r).splitAreaColors = null
}
var j6 = ["axisLine", "axisTickLabel", "axisName"],
    Q6 = ["splitArea", "splitLine", "minorSplitLine"],
    Am = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = t.type, e.axisPointerClass = "CartesianAxisPointer", e
        }
        return t.prototype.render = function (e, i, n, a) {
            this.group.removeAll();
            var o = this._axisGroup;
            if (this._axisGroup = new le, this.group.add(this._axisGroup), !!e.get("show")) {
                var s = e.getCoordSysModel(),
                    l = Hu(s, e),
                    u = new Mm(e, O({
                        handleAutoShown: function (f) {
                            for (var v = s.coordinateSystem.getCartesians(), h = 0; h < v.length; h++)
                                if (Nu(v[h].getOtherAxis(e.axis).scale)) return !0;
                            return !1
                        }
                    }, l));
                D(j6, u.add, u), this._axisGroup.add(u.getGroup()), D(Q6, function (f) {
                    e.get([f, "show"]) && J6[f](this, this._axisGroup, e, s)
                }, this);
                var c = a && a.type === "changeAxisOrder" && a.isInitSort;
                c || yg(o, this._axisGroup, e), r.prototype.render.call(this, e, i, n, a)
            }
        }, t.prototype.remove = function () {
            K6(this)
        }, t.type = "cartesianAxis", t
    }(Dm),
    J6 = {
        splitLine: function (r, t, e, i) {
            var n = e.axis;
            if (!n.scale.isBlank()) {
                var a = e.getModel("splitLine"),
                    o = a.getModel("lineStyle"),
                    s = o.get("color");
                s = H(s) ? s : [s];
                for (var l = i.coordinateSystem.getRect(), u = n.isHorizontal(), c = 0, f = n.getTicksCoords({
                        tickModel: a
                    }), v = [], h = [], d = o.getLineStyle(), m = 0; m < f.length; m++) {
                    var p = n.toGlobalCoord(f[m].coord);
                    u ? (v[0] = p, v[1] = l.y, h[0] = p, h[1] = l.y + l.height) : (v[0] = l.x, v[1] = p, h[0] = l.x + l.width, h[1] = p);
                    var g = c++ % s.length,
                        _ = f[m].tickValue,
                        y = new vi({
                            anid: _ != null ? "line_" + f[m].tickValue : null,
                            autoBatch: !0,
                            shape: {
                                x1: v[0],
                                y1: v[1],
                                x2: h[0],
                                y2: h[1]
                            },
                            style: ht({
                                stroke: s[g]
                            }, d),
                            silent: !0
                        });
                    ta(y.shape, d.lineWidth), t.add(y)
                }
            }
        },
        minorSplitLine: function (r, t, e, i) {
            var n = e.axis,
                a = e.getModel("minorSplitLine"),
                o = a.getModel("lineStyle"),
                s = i.coordinateSystem.getRect(),
                l = n.isHorizontal(),
                u = n.getMinorTicksCoords();
            if (u.length)
                for (var c = [], f = [], v = o.getLineStyle(), h = 0; h < u.length; h++)
                    for (var d = 0; d < u[h].length; d++) {
                        var m = n.toGlobalCoord(u[h][d].coord);
                        l ? (c[0] = m, c[1] = s.y, f[0] = m, f[1] = s.y + s.height) : (c[0] = s.x, c[1] = m, f[0] = s.x + s.width, f[1] = m);
                        var p = new vi({
                            anid: "minor_line_" + u[h][d].tickValue,
                            autoBatch: !0,
                            shape: {
                                x1: c[0],
                                y1: c[1],
                                x2: f[0],
                                y2: f[1]
                            },
                            style: v,
                            silent: !0
                        });
                        ta(p.shape, v.lineWidth), t.add(p)
                    }
        },
        splitArea: function (r, t, e, i) {
            q6(r, t, e, i)
        }
    },
    Im = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = t.type, e
        }
        return t.type = "xAxis", t
    }(Am),
    tL = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = Im.type, e
        }
        return t.type = "yAxis", t
    }(Am),
    eL = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = "grid", e
        }
        return t.prototype.render = function (e, i) {
            this.group.removeAll(), e.get("show") && this.group.add(new ae({
                shape: e.coordinateSystem.getRect(),
                style: ht({
                    fill: e.get("backgroundColor")
                }, e.getItemStyle()),
                silent: !0,
                z2: -1
            }))
        }, t.type = "grid", t
    }(Pr),
    ud = {
        offset: 0
    };

function rL(r) {
    r.registerComponentView(eL), r.registerComponentModel(b6), r.registerCoordinateSystem("cartesian2d", B6), Qv(r, "x", $u, ud), Qv(r, "y", $u, ud), r.registerComponentView(Im), r.registerComponentView(tL), r.registerPreprocessor(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    })
}
var ri = Lt(),
    cd = ot,
    zl = xt,
    iL = function () {
        function r() {
            this._dragging = !1, this.animationThreshold = 15
        }
        return r.prototype.render = function (t, e, i, n) {
            var a = e.get("value"),
                o = e.get("status");
            if (this._axisModel = t, this._axisPointerModel = e, this._api = i, !(!n && this._lastValue === a && this._lastStatus === o)) {
                this._lastValue = a, this._lastStatus = o;
                var s = this._group,
                    l = this._handle;
                if (!o || o === "hide") {
                    s && s.hide(), l && l.hide();
                    return
                }
                s && s.show(), l && l.show();
                var u = {};
                this.makeElOption(u, a, t, e, i);
                var c = u.graphicKey;
                c !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = c;
                var f = this._moveAnimation = this.determineAnimation(t, e);
                if (!s) s = this._group = new le, this.createPointerEl(s, u, t, e), this.createLabelEl(s, u, t, e), i.getZr().add(s);
                else {
                    var v = ie(fd, e, f);
                    this.updatePointerEl(s, u, v), this.updateLabelEl(s, u, v, e)
                }
                vd(s, e, !0), this._renderHandle(a)
            }
        }, r.prototype.remove = function (t) {
            this.clear(t)
        }, r.prototype.dispose = function (t) {
            this.clear(t)
        }, r.prototype.determineAnimation = function (t, e) {
            var i = e.get("animation"),
                n = t.axis,
                a = n.type === "category",
                o = e.get("snap");
            if (!o && !a) return !1;
            if (i === "auto" || i == null) {
                var s = this.animationThreshold;
                if (a && n.getBandWidth() > s) return !0;
                if (o) {
                    var l = jc(t).seriesDataCount,
                        u = n.getExtent();
                    return Math.abs(u[0] - u[1]) / l > s
                }
                return !1
            }
            return i === !0
        }, r.prototype.makeElOption = function (t, e, i, n, a) {}, r.prototype.createPointerEl = function (t, e, i, n) {
            var a = e.pointer;
            if (a) {
                var o = ri(t).pointerEl = new O3[a.type](cd(e.pointer));
                t.add(o)
            }
        }, r.prototype.createLabelEl = function (t, e, i, n) {
            if (e.label) {
                var a = ri(t).labelEl = new ve(cd(e.label));
                t.add(a), hd(a, n)
            }
        }, r.prototype.updatePointerEl = function (t, e, i) {
            var n = ri(t).pointerEl;
            n && e.pointer && (n.setStyle(e.pointer.style), i(n, {
                shape: e.pointer.shape
            }))
        }, r.prototype.updateLabelEl = function (t, e, i, n) {
            var a = ri(t).labelEl;
            a && (a.setStyle(e.label.style), i(a, {
                x: e.label.x,
                y: e.label.y
            }), hd(a, n))
        }, r.prototype._renderHandle = function (t) {
            if (!(this._dragging || !this.updateHandleTransform)) {
                var e = this._axisPointerModel,
                    i = this._api.getZr(),
                    n = this._handle,
                    a = e.getModel("handle"),
                    o = e.get("status");
                if (!a.get("show") || !o || o === "hide") {
                    n && i.remove(n), this._handle = null;
                    return
                }
                var s;
                this._handle || (s = !0, n = this._handle = xg(a.get("icon"), {
                    cursor: "move",
                    draggable: !0,
                    onmousemove: function (u) {
                        qd(u.event)
                    },
                    onmousedown: zl(this._onHandleDragMove, this, 0, 0),
                    drift: zl(this._onHandleDragMove, this),
                    ondragend: zl(this._onHandleDragEnd, this)
                }), i.add(n)), vd(n, e, !1), n.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
                var l = a.get("size");
                H(l) || (l = [l, l]), n.scaleX = l[0] / 2, n.scaleY = l[1] / 2, v0(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s)
            }
        }, r.prototype._moveHandleToValue = function (t, e) {
            fd(this._axisPointerModel, !e && this._moveAnimation, this._handle, Hl(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
        }, r.prototype._onHandleDragMove = function (t, e) {
            var i = this._handle;
            if (i) {
                this._dragging = !0;
                var n = this.updateHandleTransform(Hl(i), [t, e], this._axisModel, this._axisPointerModel);
                this._payloadInfo = n, i.stopAnimation(), i.attr(Hl(n)), ri(i).lastProp = null, this._doDispatchAxisPointer()
            }
        }, r.prototype._doDispatchAxisPointer = function () {
            var t = this._handle;
            if (t) {
                var e = this._payloadInfo,
                    i = this._axisModel;
                this._api.dispatchAction({
                    type: "updateAxisPointer",
                    x: e.cursorPoint[0],
                    y: e.cursorPoint[1],
                    tooltipOption: e.tooltipOption,
                    axesInfo: [{
                        axisDim: i.axis.dim,
                        axisIndex: i.componentIndex
                    }]
                })
            }
        }, r.prototype._onHandleDragEnd = function () {
            this._dragging = !1;
            var t = this._handle;
            if (t) {
                var e = this._axisPointerModel.get("value");
                this._moveHandleToValue(e), this._api.dispatchAction({
                    type: "hideTip"
                })
            }
        }, r.prototype.clear = function (t) {
            this._lastValue = null, this._lastStatus = null;
            var e = t.getZr(),
                i = this._group,
                n = this._handle;
            e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null), Au(this, "_doDispatchAxisPointer")
        }, r.prototype.doClear = function () {}, r.prototype.buildLabel = function (t, e, i) {
            return i = i || 0, {
                x: t[i],
                y: t[1 - i],
                width: e[i],
                height: e[1 - i]
            }
        }, r
    }();

function fd(r, t, e, i) {
    Lm(ri(e).lastProp, i) || (ri(e).lastProp = i, t ? or(e, i, r) : (e.stopAnimation(), e.attr(i)))
}

function Lm(r, t) {
    if (X(r) && X(t)) {
        var e = !0;
        return D(t, function (i, n) {
            e = e && Lm(r[n], i)
        }), !!e
    } else return r === t
}

function hd(r, t) {
    r[t.get(["label", "show"]) ? "show" : "hide"]()
}

function Hl(r) {
    return {
        x: r.x || 0,
        y: r.y || 0,
        rotation: r.rotation || 0
    }
}

function vd(r, t, e) {
    var i = t.get("z"),
        n = t.get("zlevel");
    r && r.traverse(function (a) {
        a.type !== "group" && (i != null && (a.z = i), n != null && (a.zlevel = n), a.silent = e)
    })
}
const nL = iL;

function aL(r) {
    var t = r.get("type"),
        e = r.getModel(t + "Style"),
        i;
    return t === "line" ? (i = e.getLineStyle(), i.fill = null) : t === "shadow" && (i = e.getAreaStyle(), i.stroke = null), i
}

function oL(r, t, e, i, n) {
    var a = e.get("value"),
        o = Pm(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
            precision: e.get(["label", "precision"]),
            formatter: e.get(["label", "formatter"])
        }),
        s = e.getModel("label"),
        l = Ic(s.get("padding") || 0),
        u = s.getFont(),
        c = sc(o, u),
        f = n.position,
        v = c.width + l[1] + l[3],
        h = c.height + l[0] + l[2],
        d = n.align;
    d === "right" && (f[0] -= v), d === "center" && (f[0] -= v / 2);
    var m = n.verticalAlign;
    m === "bottom" && (f[1] -= h), m === "middle" && (f[1] -= h / 2), sL(f, v, h, i);
    var p = s.get("backgroundColor");
    (!p || p === "auto") && (p = t.get(["axisLine", "lineStyle", "color"])), r.label = {
        x: f[0],
        y: f[1],
        style: di(s, {
            text: o,
            font: u,
            fill: s.getTextColor(),
            padding: l,
            backgroundColor: p
        }),
        z2: 10
    }
}

function sL(r, t, e, i) {
    var n = i.getWidth(),
        a = i.getHeight();
    r[0] = Math.min(r[0] + t, n) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0)
}

function Pm(r, t, e, i, n) {
    r = t.scale.parse(r);
    var a = t.scale.getLabel({
            value: r
        }, {
            precision: n.precision
        }),
        o = n.formatter;
    if (o) {
        var s = {
            value: Xc(t, {
                value: r
            }),
            axisDimension: t.dim,
            axisIndex: t.index,
            seriesData: []
        };
        D(i, function (l) {
            var u = e.getSeriesByIndex(l.seriesIndex),
                c = l.dataIndexInside,
                f = u && u.getDataParams(c);
            f && s.seriesData.push(f)
        }), V(o) ? a = o.replace("{value}", a) : Q(o) && (a = o(s))
    }
    return a
}

function km(r, t, e) {
    var i = Vi();
    return rc(i, i, e.rotation), jl(i, i, e.position), wc([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], i)
}

function lL(r, t, e, i, n, a) {
    var o = Mm.innerTextLayout(e.rotation, 0, e.labelDirection);
    e.labelMargin = n.get(["label", "margin"]), oL(t, i, n, a, {
        position: km(i.axis, r, e),
        align: o.textAlign,
        verticalAlign: o.textVerticalAlign
    })
}

function uL(r, t, e) {
    return e = e || 0, {
        x1: r[e],
        y1: r[1 - e],
        x2: t[e],
        y2: t[1 - e]
    }
}

function cL(r, t, e) {
    return e = e || 0, {
        x: r[e],
        y: r[1 - e],
        width: t[e],
        height: t[1 - e]
    }
}
var fL = function (r) {
    z(t, r);

    function t() {
        return r !== null && r.apply(this, arguments) || this
    }
    return t.prototype.makeElOption = function (e, i, n, a, o) {
        var s = n.axis,
            l = s.grid,
            u = a.get("type"),
            c = dd(l, s).getOtherAxis(s).getGlobalExtent(),
            f = s.toGlobalCoord(s.dataToCoord(i, !0));
        if (u && u !== "none") {
            var v = aL(a),
                h = hL[u](s, f, c);
            h.style = v, e.graphicKey = h.type, e.pointer = h
        }
        var d = Hu(l.model, n);
        lL(i, e, d, n, a, o)
    }, t.prototype.getHandleTransform = function (e, i, n) {
        var a = Hu(i.axis.grid.model, i, {
            labelInside: !1
        });
        a.labelMargin = n.get(["handle", "margin"]);
        var o = km(i.axis, e, a);
        return {
            x: o[0],
            y: o[1],
            rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
        }
    }, t.prototype.updateHandleTransform = function (e, i, n, a) {
        var o = n.axis,
            s = o.grid,
            l = o.getGlobalExtent(!0),
            u = dd(s, o).getOtherAxis(o).getGlobalExtent(),
            c = o.dim === "x" ? 0 : 1,
            f = [e.x, e.y];
        f[c] += i[c], f[c] = Math.min(l[1], f[c]), f[c] = Math.max(l[0], f[c]);
        var v = (u[1] + u[0]) / 2,
            h = [v, v];
        h[c] = f[c];
        var d = [{
            verticalAlign: "middle"
        }, {
            align: "center"
        }];
        return {
            x: f[0],
            y: f[1],
            rotation: e.rotation,
            cursorPoint: h,
            tooltipOption: d[c]
        }
    }, t
}(nL);

function dd(r, t) {
    var e = {};
    return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e)
}
var hL = {
    line: function (r, t, e) {
        var i = uL([t, e[0]], [t, e[1]], pd(r));
        return {
            type: "Line",
            subPixelOptimize: !0,
            shape: i
        }
    },
    shadow: function (r, t, e) {
        var i = Math.max(1, r.getBandWidth()),
            n = e[1] - e[0];
        return {
            type: "Rect",
            shape: cL([t - i / 2, e[0]], [i, n], pd(r))
        }
    }
};

function pd(r) {
    return r.dim === "x" ? 0 : 1
}
const vL = fL;
var dL = function (r) {
    z(t, r);

    function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e
    }
    return t.type = "axisPointer", t.defaultOption = {
        show: "auto",
        z: 50,
        type: "line",
        snap: !1,
        triggerTooltip: !0,
        triggerEmphasis: !0,
        value: null,
        status: null,
        link: [],
        animation: null,
        animationDurationUpdate: 200,
        lineStyle: {
            color: "#B9BEC9",
            width: 1,
            type: "dashed"
        },
        shadowStyle: {
            color: "rgba(210,219,238,0.2)"
        },
        label: {
            show: !0,
            formatter: null,
            precision: "auto",
            margin: 3,
            color: "#fff",
            padding: [5, 7, 5, 7],
            backgroundColor: "auto",
            borderColor: null,
            borderWidth: 0,
            borderRadius: 3
        },
        handle: {
            show: !1,
            icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
            size: 45,
            margin: 50,
            color: "#333",
            shadowBlur: 3,
            shadowColor: "#aaa",
            shadowOffsetX: 0,
            shadowOffsetY: 2,
            throttle: 40
        }
    }, t
}(bt);
const pL = dL;
var er = Lt(),
    gL = D;

function Em(r, t, e) {
    if (!j.node) {
        var i = t.getZr();
        er(i).records || (er(i).records = {}), mL(i, t);
        var n = er(i).records[r] || (er(i).records[r] = {});
        n.handler = e
    }
}

function mL(r, t) {
    if (er(r).initialized) return;
    er(r).initialized = !0, e("click", ie(gd, "click")), e("mousemove", ie(gd, "mousemove")), e("globalout", yL);

    function e(i, n) {
        r.on(i, function (a) {
            var o = xL(t);
            gL(er(r).records, function (s) {
                s && n(s, a, o.dispatchAction)
            }), _L(o.pendings, t)
        })
    }
}

function _L(r, t) {
    var e = r.showTip.length,
        i = r.hideTip.length,
        n;
    e ? n = r.showTip[e - 1] : i && (n = r.hideTip[i - 1]), n && (n.dispatchAction = null, t.dispatchAction(n))
}

function yL(r, t, e) {
    r.handler("leave", null, e)
}

function gd(r, t, e, i) {
    t.handler(r, e, i)
}

function xL(r) {
    var t = {
            showTip: [],
            hideTip: []
        },
        e = function (i) {
            var n = t[i.type];
            n ? n.push(i) : (i.dispatchAction = e, r.dispatchAction(i))
        };
    return {
        dispatchAction: e,
        pendings: t
    }
}

function Wu(r, t) {
    if (!j.node) {
        var e = t.getZr(),
            i = (er(e).records || {})[r];
        i && (er(e).records[r] = null)
    }
}
var wL = function (r) {
    z(t, r);

    function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e
    }
    return t.prototype.render = function (e, i, n) {
        var a = i.getComponent("tooltip"),
            o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click";
        Em("axisPointer", n, function (s, l, u) {
            o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && u({
                type: "updateAxisPointer",
                currTrigger: s,
                x: l && l.offsetX,
                y: l && l.offsetY
            })
        })
    }, t.prototype.remove = function (e, i) {
        Wu("axisPointer", i)
    }, t.prototype.dispose = function (e, i) {
        Wu("axisPointer", i)
    }, t.type = "axisPointer", t
}(Pr);
const bL = wL;

function Rm(r, t) {
    var e = [],
        i = r.seriesIndex,
        n;
    if (i == null || !(n = t.getSeriesByIndex(i))) return {
        point: []
    };
    var a = n.getData(),
        o = fi(a, r);
    if (o == null || o < 0 || H(o)) return {
        point: []
    };
    var s = a.getItemGraphicEl(o),
        l = n.coordinateSystem;
    if (n.getTooltipPosition) e = n.getTooltipPosition(o) || [];
    else if (l && l.dataToPoint)
        if (r.isStacked) {
            var u = l.getBaseAxis(),
                c = l.getOtherAxis(u),
                f = c.dim,
                v = u.dim,
                h = f === "x" || f === "radius" ? 1 : 0,
                d = a.mapDimension(v),
                m = [];
            m[h] = a.get(d, o), m[1 - h] = a.get(a.getCalculationInfo("stackResultDimension"), o), e = l.dataToPoint(m) || []
        } else e = l.dataToPoint(a.getValues(Z(l.dimensions, function (g) {
            return a.mapDimension(g)
        }), o)) || [];
    else if (s) {
        var p = s.getBoundingRect().clone();
        p.applyTransform(s.transform), e = [p.x + p.width / 2, p.y + p.height / 2]
    }
    return {
        point: e,
        el: s
    }
}
var md = Lt();

function SL(r, t, e) {
    var i = r.currTrigger,
        n = [r.x, r.y],
        a = r,
        o = r.dispatchAction || xt(e.dispatchAction, e),
        s = t.getComponent("axisPointer").coordSysAxesInfo;
    if (s) {
        So(n) && (n = Rm({
            seriesIndex: a.seriesIndex,
            dataIndex: a.dataIndex
        }, t).point);
        var l = So(n),
            u = a.axesInfo,
            c = s.axesInfo,
            f = i === "leave" || So(n),
            v = {},
            h = {},
            d = {
                list: [],
                map: {}
            },
            m = {
                showPointer: ie(TL, h),
                showTooltip: ie(ML, d)
            };
        D(s.coordSysMap, function (g, _) {
            var y = l || g.containPoint(n);
            D(s.coordSysAxesInfo[_], function (x, S) {
                var w = x.axis,
                    T = LL(u, x);
                if (!f && y && (!u || T)) {
                    var C = T && T.value;
                    C == null && !l && (C = w.pointToData(n)), C != null && _d(x, C, m, !1, v)
                }
            })
        });
        var p = {};
        return D(c, function (g, _) {
            var y = g.linkGroup;
            y && !h[_] && D(y.axesInfo, function (x, S) {
                var w = h[S];
                if (x !== g && w) {
                    var T = w.value;
                    y.mapper && (T = g.axis.scale.parse(y.mapper(T, yd(x), yd(g)))), p[g.key] = T
                }
            })
        }), D(p, function (g, _) {
            _d(c[_], g, m, !0, v)
        }), DL(h, c, v), AL(d, n, r, o), IL(c, o, e), v
    }
}

function _d(r, t, e, i, n) {
    var a = r.axis;
    if (!(a.scale.isBlank() || !a.containData(t))) {
        if (!r.involveSeries) {
            e.showPointer(r, t);
            return
        }
        var o = CL(t, r),
            s = o.payloadBatch,
            l = o.snapToValue;
        s[0] && n.seriesIndex == null && O(n, s[0]), !i && r.snap && a.containData(l) && l != null && (t = l), e.showPointer(r, t, s), e.showTooltip(r, o, l)
    }
}

function CL(r, t) {
    var e = t.axis,
        i = e.dim,
        n = r,
        a = [],
        o = Number.MAX_VALUE,
        s = -1;
    return D(t.seriesModels, function (l, u) {
        var c = l.getData().mapDimensionsAll(i),
            f, v;
        if (l.getAxisTooltipData) {
            var h = l.getAxisTooltipData(c, r, e);
            v = h.dataIndices, f = h.nestestValue
        } else {
            if (v = l.getData().indicesOfNearest(c[0], r, e.type === "category" ?.5 : null), !v.length) return;
            f = l.getData().get(c[0], v[0])
        }
        if (!(f == null || !isFinite(f))) {
            var d = r - f,
                m = Math.abs(d);
            m <= o && ((m < o || d >= 0 && s < 0) && (o = m, s = d, n = f, a.length = 0), D(v, function (p) {
                a.push({
                    seriesIndex: l.seriesIndex,
                    dataIndexInside: p,
                    dataIndex: l.getData().getRawIndex(p)
                })
            }))
        }
    }), {
        payloadBatch: a,
        snapToValue: n
    }
}

function TL(r, t, e, i) {
    r[t.key] = {
        value: e,
        payloadBatch: i
    }
}

function ML(r, t, e, i) {
    var n = e.payloadBatch,
        a = t.axis,
        o = a.model,
        s = t.axisPointerModel;
    if (!(!t.triggerTooltip || !n.length)) {
        var l = t.coordSys.model,
            u = ha(l),
            c = r.map[u];
        c || (c = r.map[u] = {
            coordSysId: l.id,
            coordSysIndex: l.componentIndex,
            coordSysType: l.type,
            coordSysMainType: l.mainType,
            dataByAxis: []
        }, r.list.push(c)), c.dataByAxis.push({
            axisDim: a.dim,
            axisIndex: o.componentIndex,
            axisType: o.type,
            axisId: o.id,
            value: i,
            valueLabelOpt: {
                precision: s.get(["label", "precision"]),
                formatter: s.get(["label", "formatter"])
            },
            seriesDataIndices: n.slice()
        })
    }
}

function DL(r, t, e) {
    var i = e.axesInfo = [];
    D(t, function (n, a) {
        var o = n.axisPointerModel.option,
            s = r[a];
        s ? (!n.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !n.useHandle && (o.status = "hide"), o.status === "show" && i.push({
            axisDim: n.axis.dim,
            axisIndex: n.axis.model.componentIndex,
            value: o.value
        })
    })
}

function AL(r, t, e, i) {
    if (So(t) || !r.list.length) {
        i({
            type: "hideTip"
        });
        return
    }
    var n = ((r.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    i({
        type: "showTip",
        escapeConnect: !0,
        x: t[0],
        y: t[1],
        tooltipOption: e.tooltipOption,
        position: e.position,
        dataIndexInside: n.dataIndexInside,
        dataIndex: n.dataIndex,
        seriesIndex: n.seriesIndex,
        dataByCoordSys: r.list
    })
}

function IL(r, t, e) {
    var i = e.getZr(),
        n = "axisPointerLastHighlights",
        a = md(i)[n] || {},
        o = md(i)[n] = {};
    D(r, function (u, c) {
        var f = u.axisPointerModel.option;
        f.status === "show" && u.triggerEmphasis && D(f.seriesDataIndices, function (v) {
            var h = v.seriesIndex + " | " + v.dataIndex;
            o[h] = v
        })
    });
    var s = [],
        l = [];
    D(a, function (u, c) {
        !o[c] && l.push(u)
    }), D(o, function (u, c) {
        !a[c] && s.push(u)
    }), l.length && e.dispatchAction({
        type: "downplay",
        escapeConnect: !0,
        notBlur: !0,
        batch: l
    }), s.length && e.dispatchAction({
        type: "highlight",
        escapeConnect: !0,
        notBlur: !0,
        batch: s
    })
}

function LL(r, t) {
    for (var e = 0; e < (r || []).length; e++) {
        var i = r[e];
        if (t.axis.dim === i.axisDim && t.axis.model.componentIndex === i.axisIndex) return i
    }
}

function yd(r) {
    var t = r.axis.model,
        e = {},
        i = e.axisDim = r.axis.dim;
    return e.axisIndex = e[i + "AxisIndex"] = t.componentIndex, e.axisName = e[i + "AxisName"] = t.name, e.axisId = e[i + "AxisId"] = t.id, e
}

function So(r) {
    return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1])
}

function Om(r) {
    Dm.registerAxisPointerClass("CartesianAxisPointer", vL), r.registerComponentModel(pL), r.registerComponentView(bL), r.registerPreprocessor(function (t) {
        if (t) {
            (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !H(e) && (t.axisPointer.link = [e])
        }
    }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = G6(t, e)
    }), r.registerAction({
        type: "updateAxisPointer",
        event: "updateAxisPointer",
        update: ":updateAxisPointer"
    }, SL)
}

function PL(r) {
    ca(rL), ca(Om)
}
var kL = function (r) {
    z(t, r);

    function t() {
        var e = r !== null && r.apply(this, arguments) || this;
        return e.type = t.type, e
    }
    return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
        z: 60,
        show: !0,
        showContent: !0,
        trigger: "item",
        triggerOn: "mousemove|click",
        alwaysShowContent: !1,
        displayMode: "single",
        renderMode: "auto",
        confine: null,
        showDelay: 0,
        hideDelay: 100,
        transitionDuration: .4,
        enterable: !1,
        backgroundColor: "#fff",
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, .2)",
        shadowOffsetX: 1,
        shadowOffsetY: 2,
        borderRadius: 4,
        borderWidth: 1,
        padding: null,
        extraCssText: "",
        axisPointer: {
            type: "line",
            axis: "auto",
            animation: "auto",
            animationDurationUpdate: 200,
            animationEasingUpdate: "exponentialOut",
            crossStyle: {
                color: "#999",
                width: 1,
                type: "dashed",
                textStyle: {}
            }
        },
        textStyle: {
            color: "#666",
            fontSize: 14
        }
    }, t
}(bt);
const EL = kL;

function Bm(r) {
    var t = r.get("confine");
    return t != null ? !!t : r.get("renderMode") === "richText"
}

function Nm(r) {
    if (j.domSupported) {
        for (var t = document.documentElement.style, e = 0, i = r.length; e < i; e++)
            if (r[e] in t) return r[e]
    }
}
var Fm = Nm(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
    RL = Nm(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);

function $m(r, t) {
    if (!r) return t;
    t = Ng(t, !0);
    var e = r.indexOf(t);
    return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase()
}

function OL(r, t) {
    var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
    return e ? t ? e[t] : e : null
}
var BL = $m(RL, "transition"),
    Qc = $m(Fm, "transform"),
    NL = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (j.transform3dSupported ? "will-change:transform;" : "");

function FL(r) {
    return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r
}

function $L(r, t, e) {
    if (!V(e) || e === "inside") return "";
    var i = r.get("backgroundColor"),
        n = r.get("borderWidth");
    t = pi(t);
    var a = FL(e),
        o = Math.max(Math.round(n) * 1.5, 6),
        s = "",
        l = Qc + ":",
        u;
    dt(["left", "right"], a) > -1 ? (s += "top:50%", l += "translateY(-50%) rotate(" + (u = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", l += "translateX(-50%) rotate(" + (u = a === "top" ? 225 : 45) + "deg)");
    var c = u * Math.PI / 180,
        f = o + n,
        v = f * Math.abs(Math.cos(c)) + f * Math.abs(Math.sin(c)),
        h = Math.round(((v - Math.SQRT2 * n) / 2 + Math.SQRT2 * n - (v - f) / 2) * 100) / 100;
    s += ";" + a + ":-" + h + "px";
    var d = t + " solid " + n + "px;",
        m = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + l + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + i + ";"];
    return '<div style="' + m.join("") + '"></div>'
}

function zL(r, t) {
    var e = "cubic-bezier(0.23,1,0.32,1)",
        i = " " + r / 2 + "s " + e,
        n = "opacity" + i + ",visibility" + i;
    return t || (i = " " + r + "s " + e, n += j.transformSupported ? "," + Qc + i : ",left" + i + ",top" + i), BL + ":" + n
}

function xd(r, t, e) {
    var i = r.toFixed(0) + "px",
        n = t.toFixed(0) + "px";
    if (!j.transformSupported) return e ? "top:" + n + ";left:" + i + ";" : [
        ["top", n],
        ["left", i]
    ];
    var a = j.transform3dSupported,
        o = "translate" + (a ? "3d" : "") + "(" + i + "," + n + (a ? ",0" : "") + ")";
    return e ? "top:0;left:0;" + Qc + ":" + o + ";" : [
        ["top", 0],
        ["left", 0],
        [Fm, o]
    ]
}

function HL(r) {
    var t = [],
        e = r.get("fontSize"),
        i = r.getTextColor();
    i && t.push("color:" + i), t.push("font:" + r.getFont()), e && t.push("line-height:" + Math.round(e * 3 / 2) + "px");
    var n = r.get("textShadowColor"),
        a = r.get("textShadowBlur") || 0,
        o = r.get("textShadowOffsetX") || 0,
        s = r.get("textShadowOffsetY") || 0;
    return n && a && t.push("text-shadow:" + o + "px " + s + "px " + a + "px " + n), D(["decoration", "align"], function (l) {
        var u = r.get(l);
        u && t.push("text-" + l + ":" + u)
    }), t.join(";")
}

function GL(r, t, e) {
    var i = [],
        n = r.get("transitionDuration"),
        a = r.get("backgroundColor"),
        o = r.get("shadowBlur"),
        s = r.get("shadowColor"),
        l = r.get("shadowOffsetX"),
        u = r.get("shadowOffsetY"),
        c = r.getModel("textStyle"),
        f = u0(r, "html"),
        v = l + "px " + u + "px " + o + "px " + s;
    return i.push("box-shadow:" + v), t && n && i.push(zL(n, e)), a && i.push("background-color:" + a), D(["width", "color", "radius"], function (h) {
        var d = "border-" + h,
            m = Ng(d),
            p = r.get(m);
        p != null && i.push(d + ":" + p + (h === "color" ? "" : "px"))
    }), i.push(HL(c)), f != null && i.push("padding:" + Ic(f).join("px ") + "px"), i.join(";") + ";"
}

function wd(r, t, e, i, n) {
    var a = t && t.painter;
    if (e) {
        var o = a && a.getViewportRoot();
        o && zb(r, o, e, i, n)
    } else {
        r[0] = i, r[1] = n;
        var s = a && a.getViewportRootOffset();
        s && (r[0] += s.offsetLeft, r[1] += s.offsetTop)
    }
    r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight()
}
var VL = function () {
    function r(t, e) {
        if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, j.wxa) return null;
        var i = document.createElement("div");
        i.domBelongToZr = !0, this.el = i;
        var n = this._zr = t.getZr(),
            a = e.appendTo,
            o = a && (V(a) ? document.querySelector(a) : qn(a) ? a : Q(a) && a(t.getDom()));
        wd(this._styleCoord, n, o, t.getWidth() / 2, t.getHeight() / 2), (o || t.getDom()).appendChild(i), this._api = t, this._container = o;
        var s = this;
        i.onmouseenter = function () {
            s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0
        }, i.onmousemove = function (l) {
            if (l = l || window.event, !s._enterable) {
                var u = n.handler,
                    c = n.painter.getViewportRoot();
                me(c, l, !0), u.dispatch("mousemove", l)
            }
        }, i.onmouseleave = function () {
            s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay)
        }
    }
    return r.prototype.update = function (t) {
        if (!this._container) {
            var e = this._api.getDom(),
                i = OL(e, "position"),
                n = e.style;
            n.position !== "absolute" && i !== "absolute" && (n.position = "relative")
        }
        var a = t.get("alwaysShowContent");
        a && this._moveIfResized(), this._alwaysShowContent = a, this.el.className = t.get("className") || ""
    }, r.prototype.show = function (t, e) {
        clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
        var i = this.el,
            n = i.style,
            a = this._styleCoord;
        i.innerHTML ? n.cssText = NL + GL(t, !this._firstShow, this._longHide) + xd(a[0], a[1], !0) + ("border-color:" + pi(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : n.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1
    }, r.prototype.setContent = function (t, e, i, n, a) {
        var o = this.el;
        if (t == null) {
            o.innerHTML = "";
            return
        }
        var s = "";
        if (V(a) && i.get("trigger") === "item" && !Bm(i) && (s = $L(i, n, a)), V(t)) o.innerHTML = t + s;
        else if (t) {
            o.innerHTML = "", H(t) || (t = [t]);
            for (var l = 0; l < t.length; l++) qn(t[l]) && t[l].parentNode !== o && o.appendChild(t[l]);
            if (s && o.childNodes.length) {
                var u = document.createElement("div");
                u.innerHTML = s, o.appendChild(u)
            }
        }
    }, r.prototype.setEnterable = function (t) {
        this._enterable = t
    }, r.prototype.getSize = function () {
        var t = this.el;
        return [t.offsetWidth, t.offsetHeight]
    }, r.prototype.moveTo = function (t, e) {
        var i = this._styleCoord;
        if (wd(i, this._zr, this._container, t, e), i[0] != null && i[1] != null) {
            var n = this.el.style,
                a = xd(i[0], i[1]);
            D(a, function (o) {
                n[o[0]] = o[1]
            })
        }
    }, r.prototype._moveIfResized = function () {
        var t = this._styleCoord[2],
            e = this._styleCoord[3];
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
    }, r.prototype.hide = function () {
        var t = this,
            e = this.el.style;
        e.visibility = "hidden", e.opacity = "0", j.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function () {
            return t._longHide = !0
        }, 500)
    }, r.prototype.hideLater = function (t) {
        this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(xt(this.hide, this), t)) : this.hide())
    }, r.prototype.isShow = function () {
        return this._show
    }, r.prototype.dispose = function () {
        clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
        var t = this.el.parentNode;
        t && t.removeChild(this.el), this.el = this._container = null
    }, r
}();
const WL = VL;
var UL = function () {
    function r(t) {
        this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), Sd(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2)
    }
    return r.prototype.update = function (t) {
        var e = t.get("alwaysShowContent");
        e && this._moveIfResized(), this._alwaysShowContent = e
    }, r.prototype.show = function () {
        this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0
    }, r.prototype.setContent = function (t, e, i, n, a) {
        var o = this;
        X(t) && te(""), this.el && this._zr.remove(this.el);
        var s = i.getModel("textStyle");
        this.el = new ve({
            style: {
                rich: e.richTextStyles,
                text: t,
                lineHeight: 22,
                borderWidth: 1,
                borderColor: n,
                textShadowColor: s.get("textShadowColor"),
                fill: i.get(["textStyle", "color"]),
                padding: u0(i, "richText"),
                verticalAlign: "top",
                align: "left"
            },
            z: i.get("z")
        }), D(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function (u) {
            o.el.style[u] = i.get(u)
        }), D(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function (u) {
            o.el.style[u] = s.get(u) || 0
        }), this._zr.add(this.el);
        var l = this;
        this.el.on("mouseover", function () {
            l._enterable && (clearTimeout(l._hideTimeout), l._show = !0), l._inContent = !0
        }), this.el.on("mouseout", function () {
            l._enterable && l._show && l.hideLater(l._hideDelay), l._inContent = !1
        })
    }, r.prototype.setEnterable = function (t) {
        this._enterable = t
    }, r.prototype.getSize = function () {
        var t = this.el,
            e = this.el.getBoundingRect(),
            i = bd(t.style);
        return [e.width + i.left + i.right, e.height + i.top + i.bottom]
    }, r.prototype.moveTo = function (t, e) {
        var i = this.el;
        if (i) {
            var n = this._styleCoord;
            Sd(n, this._zr, t, e), t = n[0], e = n[1];
            var a = i.style,
                o = yr(a.borderWidth || 0),
                s = bd(a);
            i.x = t + o + s.left, i.y = e + o + s.top, i.markRedraw()
        }
    }, r.prototype._moveIfResized = function () {
        var t = this._styleCoord[2],
            e = this._styleCoord[3];
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
    }, r.prototype.hide = function () {
        this.el && this.el.hide(), this._show = !1
    }, r.prototype.hideLater = function (t) {
        this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(xt(this.hide, this), t)) : this.hide())
    }, r.prototype.isShow = function () {
        return this._show
    }, r.prototype.dispose = function () {
        this._zr.remove(this.el)
    }, r
}();

function yr(r) {
    return Math.max(0, r)
}

function bd(r) {
    var t = yr(r.shadowBlur || 0),
        e = yr(r.shadowOffsetX || 0),
        i = yr(r.shadowOffsetY || 0);
    return {
        left: yr(t - e),
        right: yr(t + e),
        top: yr(t - i),
        bottom: yr(t + i)
    }
}

function Sd(r, t, e, i) {
    r[0] = e, r[1] = i, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight()
}
var YL = new ae({
        shape: {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }
    }),
    XL = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = t.type, e
        }
        return t.prototype.init = function (e, i) {
            if (!(j.node || !i.getDom())) {
                var n = e.getComponent("tooltip"),
                    a = this._renderMode = mC(n.get("renderMode"));
                this._tooltipContent = a === "richText" ? new UL(i) : new WL(i, {
                    appendTo: n.get("appendToBody", !0) ? "body" : n.get("appendTo", !0)
                })
            }
        }, t.prototype.render = function (e, i, n) {
            if (!(j.node || !n.getDom())) {
                this.group.removeAll(), this._tooltipModel = e, this._ecModel = i, this._api = n;
                var a = this._tooltipContent;
                a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? v0(this, "_updatePosition", 50, "fixRate") : Au(this, "_updatePosition")
            }
        }, t.prototype._initGlobalListener = function () {
            var e = this._tooltipModel,
                i = e.get("triggerOn");
            Em("itemTooltip", this._api, xt(function (n, a, o) {
                i !== "none" && (i.indexOf(n) >= 0 ? this._tryShow(a, o) : n === "leave" && this._hide(o))
            }, this))
        }, t.prototype._keepShow = function () {
            var e = this._tooltipModel,
                i = this._ecModel,
                n = this._api,
                a = e.get("triggerOn");
            if (this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
                var o = this;
                clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                    !n.isDisposed() && o.manuallyShowTip(e, i, n, {
                        x: o._lastX,
                        y: o._lastY,
                        dataByCoordSys: o._lastDataByCoordSys
                    })
                })
            }
        }, t.prototype.manuallyShowTip = function (e, i, n, a) {
            if (!(a.from === this.uid || j.node || !n.getDom())) {
                var o = Cd(a, n);
                this._ticket = "";
                var s = a.dataByCoordSys,
                    l = jL(a, i, n);
                if (l) {
                    var u = l.el.getBoundingRect().clone();
                    u.applyTransform(l.el.transform), this._tryShow({
                        offsetX: u.x + u.width / 2,
                        offsetY: u.y + u.height / 2,
                        target: l.el,
                        position: a.position,
                        positionDefault: "bottom"
                    }, o)
                } else if (a.tooltip && a.x != null && a.y != null) {
                    var c = YL;
                    c.x = a.x, c.y = a.y, c.update(), vt(c).tooltipConfig = {
                        name: null,
                        option: a.tooltip
                    }, this._tryShow({
                        offsetX: a.x,
                        offsetY: a.y,
                        target: c
                    }, o)
                } else if (s) this._tryShow({
                    offsetX: a.x,
                    offsetY: a.y,
                    position: a.position,
                    dataByCoordSys: s,
                    tooltipOption: a.tooltipOption
                }, o);
                else if (a.seriesIndex != null) {
                    if (this._manuallyAxisShowTip(e, i, n, a)) return;
                    var f = Rm(a, i),
                        v = f.point[0],
                        h = f.point[1];
                    v != null && h != null && this._tryShow({
                        offsetX: v,
                        offsetY: h,
                        target: f.el,
                        position: a.position,
                        positionDefault: "bottom"
                    }, o)
                } else a.x != null && a.y != null && (n.dispatchAction({
                    type: "updateAxisPointer",
                    x: a.x,
                    y: a.y
                }), this._tryShow({
                    offsetX: a.x,
                    offsetY: a.y,
                    position: a.position,
                    target: n.getZr().findHover(a.x, a.y).target
                }, o))
            }
        }, t.prototype.manuallyHideTip = function (e, i, n, a) {
            var o = this._tooltipContent;
            this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, a.from !== this.uid && this._hide(Cd(a, n))
        }, t.prototype._manuallyAxisShowTip = function (e, i, n, a) {
            var o = a.seriesIndex,
                s = a.dataIndex,
                l = i.getComponent("axisPointer").coordSysAxesInfo;
            if (!(o == null || s == null || l == null)) {
                var u = i.getSeriesByIndex(o);
                if (u) {
                    var c = u.getData(),
                        f = Mn([c.getItemModel(s), u, (u.coordinateSystem || {}).model], this._tooltipModel);
                    if (f.get("trigger") === "axis") return n.dispatchAction({
                        type: "updateAxisPointer",
                        seriesIndex: o,
                        dataIndex: s,
                        position: a.position
                    }), !0
                }
            }
        }, t.prototype._tryShow = function (e, i) {
            var n = e.target,
                a = this._tooltipModel;
            if (a) {
                this._lastX = e.offsetX, this._lastY = e.offsetY;
                var o = e.dataByCoordSys;
                if (o && o.length) this._showAxisTooltip(o, e);
                else if (n) {
                    var s = vt(n);
                    if (s.ssrType === "legend") return;
                    this._lastDataByCoordSys = null;
                    var l, u;
                    En(n, function (c) {
                        if (vt(c).dataIndex != null) return l = c, !0;
                        if (vt(c).tooltipConfig != null) return u = c, !0
                    }, !0), l ? this._showSeriesItemTooltip(e, l, i) : u ? this._showComponentItemTooltip(e, u, i) : this._hide(i)
                } else this._lastDataByCoordSys = null, this._hide(i)
            }
        }, t.prototype._showOrMove = function (e, i) {
            var n = e.get("showDelay");
            i = xt(i, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(i, n) : i()
        }, t.prototype._showAxisTooltip = function (e, i) {
            var n = this._ecModel,
                a = this._tooltipModel,
                o = [i.offsetX, i.offsetY],
                s = Mn([i.tooltipOption], a),
                l = this._renderMode,
                u = [],
                c = aa("section", {
                    blocks: [],
                    noHeader: !0
                }),
                f = [],
                v = new xl;
            D(e, function (_) {
                D(_.dataByAxis, function (y) {
                    var x = n.getComponent(y.axisDim + "Axis", y.axisIndex),
                        S = y.value;
                    if (!(!x || S == null)) {
                        var w = Pm(S, x.axis, n, y.seriesDataIndices, y.valueLabelOpt),
                            T = aa("section", {
                                header: w,
                                noHeader: !Ve(w),
                                sortBlocks: !0,
                                blocks: []
                            });
                        c.blocks.push(T), D(y.seriesDataIndices, function (C) {
                            var M = n.getSeriesByIndex(C.seriesIndex),
                                I = C.dataIndexInside,
                                A = M.getDataParams(I);
                            if (!(A.dataIndex < 0)) {
                                A.axisDim = y.axisDim, A.axisIndex = y.axisIndex, A.axisType = y.axisType, A.axisId = y.axisId, A.axisValue = Xc(x.axis, {
                                    value: S
                                }), A.axisValueLabel = w, A.marker = v.makeTooltipMarker("item", pi(A.color), l);
                                var L = Yh(M.formatTooltip(I, !0, null)),
                                    P = L.frag;
                                if (P) {
                                    var k = Mn([M], a).get("valueFormatter");
                                    T.blocks.push(k ? O({
                                        valueFormatter: k
                                    }, P) : P)
                                }
                                L.text && f.push(L.text), u.push(A)
                            }
                        })
                    }
                })
            }), c.blocks.reverse(), f.reverse();
            var h = i.position,
                d = s.get("order"),
                m = jh(c, v, l, d, n.get("useUTC"), s.get("textStyle"));
            m && f.unshift(m);
            var p = l === "richText" ? `

` : "<br/>",
                g = f.join(p);
            this._showOrMove(s, function () {
                this._updateContentNotChangedOnAxis(e, u) ? this._updatePosition(s, h, o[0], o[1], this._tooltipContent, u) : this._showTooltipContent(s, g, u, Math.random() + "", o[0], o[1], h, null, v)
            })
        }, t.prototype._showSeriesItemTooltip = function (e, i, n) {
            var a = this._ecModel,
                o = vt(i),
                s = o.seriesIndex,
                l = a.getSeriesByIndex(s),
                u = o.dataModel || l,
                c = o.dataIndex,
                f = o.dataType,
                v = u.getData(f),
                h = this._renderMode,
                d = e.positionDefault,
                m = Mn([v.getItemModel(c), u, l && (l.coordinateSystem || {}).model], this._tooltipModel, d ? {
                    position: d
                } : null),
                p = m.get("trigger");
            if (!(p != null && p !== "item")) {
                var g = u.getDataParams(c, f),
                    _ = new xl;
                g.marker = _.makeTooltipMarker("item", pi(g.color), h);
                var y = Yh(u.formatTooltip(c, !1, f)),
                    x = m.get("order"),
                    S = m.get("valueFormatter"),
                    w = y.frag,
                    T = w ? jh(S ? O({
                        valueFormatter: S
                    }, w) : w, _, h, x, a.get("useUTC"), m.get("textStyle")) : y.text,
                    C = "item_" + u.name + "_" + c;
                this._showOrMove(m, function () {
                    this._showTooltipContent(m, T, g, C, e.offsetX, e.offsetY, e.position, e.target, _)
                }), n({
                    type: "showTip",
                    dataIndexInside: c,
                    dataIndex: v.getRawIndex(c),
                    seriesIndex: s,
                    from: this.uid
                })
            }
        }, t.prototype._showComponentItemTooltip = function (e, i, n) {
            var a = vt(i),
                o = a.tooltipConfig,
                s = o.option || {};
            if (V(s)) {
                var l = s;
                s = {
                    content: l,
                    formatter: l
                }
            }
            var u = [s],
                c = this._ecModel.getComponent(a.componentMainType, a.componentIndex);
            c && u.push(c), u.push({
                formatter: s.content
            });
            var f = e.positionDefault,
                v = Mn(u, this._tooltipModel, f ? {
                    position: f
                } : null),
                h = v.get("content"),
                d = Math.random() + "",
                m = new xl;
            this._showOrMove(v, function () {
                var p = ot(v.get("formatterParams") || {});
                this._showTooltipContent(v, h, p, d, e.offsetX, e.offsetY, e.position, i, m)
            }), n({
                type: "showTip",
                from: this.uid
            })
        }, t.prototype._showTooltipContent = function (e, i, n, a, o, s, l, u, c) {
            if (this._ticket = "", !(!e.get("showContent") || !e.get("show"))) {
                var f = this._tooltipContent;
                f.setEnterable(e.get("enterable"));
                var v = e.get("formatter");
                l = l || e.get("position");
                var h = i,
                    d = this._getNearestPoint([o, s], n, e.get("trigger"), e.get("borderColor")),
                    m = d.color;
                if (v)
                    if (V(v)) {
                        var p = e.ecModel.get("useUTC"),
                            g = H(n) ? n[0] : n,
                            _ = g && g.axisType && g.axisType.indexOf("time") >= 0;
                        h = v, _ && (h = fs(g.axisValue, h, p)), h = Fg(h, n, !0)
                    } else if (Q(v)) {
                    var y = xt(function (x, S) {
                        x === this._ticket && (f.setContent(S, c, e, m, l), this._updatePosition(e, l, o, s, f, n, u))
                    }, this);
                    this._ticket = a, h = v(n, a, y)
                } else h = v;
                f.setContent(h, c, e, m, l), f.show(e, m), this._updatePosition(e, l, o, s, f, n, u)
            }
        }, t.prototype._getNearestPoint = function (e, i, n, a) {
            if (n === "axis" || H(i)) return {
                color: a || (this._renderMode === "html" ? "#fff" : "none")
            };
            if (!H(i)) return {
                color: a || i.color || i.borderColor
            }
        }, t.prototype._updatePosition = function (e, i, n, a, o, s, l) {
            var u = this._api.getWidth(),
                c = this._api.getHeight();
            i = i || e.get("position");
            var f = o.getSize(),
                v = e.get("align"),
                h = e.get("verticalAlign"),
                d = l && l.getBoundingRect().clone();
            if (l && d.applyTransform(l.transform), Q(i) && (i = i([n, a], s, o.el, d, {
                    viewSize: [u, c],
                    contentSize: f.slice()
                })), H(i)) n = yt(i[0], u), a = yt(i[1], c);
            else if (X(i)) {
                var m = i;
                m.width = f[0], m.height = f[1];
                var p = gs(m, {
                    width: u,
                    height: c
                });
                n = p.x, a = p.y, v = null, h = null
            } else if (V(i) && l) {
                var g = KL(i, d, f, e.get("borderWidth"));
                n = g[0], a = g[1]
            } else {
                var g = ZL(n, a, o, u, c, v ? null : 20, h ? null : 20);
                n = g[0], a = g[1]
            }
            if (v && (n -= Td(v) ? f[0] / 2 : v === "right" ? f[0] : 0), h && (a -= Td(h) ? f[1] / 2 : h === "bottom" ? f[1] : 0), Bm(e)) {
                var g = qL(n, a, o, u, c);
                n = g[0], a = g[1]
            }
            o.moveTo(n, a)
        }, t.prototype._updateContentNotChangedOnAxis = function (e, i) {
            var n = this._lastDataByCoordSys,
                a = this._cbParamsList,
                o = !!n && n.length === e.length;
            return o && D(n, function (s, l) {
                var u = s.dataByAxis || [],
                    c = e[l] || {},
                    f = c.dataByAxis || [];
                o = o && u.length === f.length, o && D(u, function (v, h) {
                    var d = f[h] || {},
                        m = v.seriesDataIndices || [],
                        p = d.seriesDataIndices || [];
                    o = o && v.value === d.value && v.axisType === d.axisType && v.axisId === d.axisId && m.length === p.length, o && D(m, function (g, _) {
                        var y = p[_];
                        o = o && g.seriesIndex === y.seriesIndex && g.dataIndex === y.dataIndex
                    }), a && D(v.seriesDataIndices, function (g) {
                        var _ = g.seriesIndex,
                            y = i[_],
                            x = a[_];
                        y && x && x.data !== y.data && (o = !1)
                    })
                })
            }), this._lastDataByCoordSys = e, this._cbParamsList = i, !!o
        }, t.prototype._hide = function (e) {
            this._lastDataByCoordSys = null, e({
                type: "hideTip",
                from: this.uid
            })
        }, t.prototype.dispose = function (e, i) {
            j.node || !i.getDom() || (Au(this, "_updatePosition"), this._tooltipContent.dispose(), Wu("itemTooltip", i))
        }, t.type = "tooltip", t
    }(Pr);

function Mn(r, t, e) {
    var i = t.ecModel,
        n;
    e ? (n = new Xt(e, i, i), n = new Xt(t.option, n, i)) : n = t;
    for (var a = r.length - 1; a >= 0; a--) {
        var o = r[a];
        o && (o instanceof Xt && (o = o.get("tooltip", !0)), V(o) && (o = {
            formatter: o
        }), o && (n = new Xt(o, n, i)))
    }
    return n
}

function Cd(r, t) {
    return r.dispatchAction || xt(t.dispatchAction, t)
}

function ZL(r, t, e, i, n, a, o) {
    var s = e.getSize(),
        l = s[0],
        u = s[1];
    return a != null && (r + l + a + 2 > i ? r -= l + a : r += a), o != null && (t + u + o > n ? t -= u + o : t += o), [r, t]
}

function qL(r, t, e, i, n) {
    var a = e.getSize(),
        o = a[0],
        s = a[1];
    return r = Math.min(r + o, i) - o, t = Math.min(t + s, n) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t]
}

function KL(r, t, e, i) {
    var n = e[0],
        a = e[1],
        o = Math.ceil(Math.SQRT2 * i) + 8,
        s = 0,
        l = 0,
        u = t.width,
        c = t.height;
    switch (r) {
        case "inside":
            s = t.x + u / 2 - n / 2, l = t.y + c / 2 - a / 2;
            break;
        case "top":
            s = t.x + u / 2 - n / 2, l = t.y - a - o;
            break;
        case "bottom":
            s = t.x + u / 2 - n / 2, l = t.y + c + o;
            break;
        case "left":
            s = t.x - n - o, l = t.y + c / 2 - a / 2;
            break;
        case "right":
            s = t.x + u + o, l = t.y + c / 2 - a / 2
    }
    return [s, l]
}

function Td(r) {
    return r === "center" || r === "middle"
}

function jL(r, t, e) {
    var i = fc(r).queryOptionMap,
        n = i.keys()[0];
    if (!(!n || n === "series")) {
        var a = ma(t, n, i.get(n), {
                useDefault: !1,
                enableAll: !1,
                enableNone: !1
            }),
            o = a.models[0];
        if (o) {
            var s = e.getViewOfComponentModel(o),
                l;
            if (s.group.traverse(function (u) {
                    var c = vt(u).tooltipConfig;
                    if (c && c.name === r.name) return l = u, !0
                }), l) return {
                componentMainType: n,
                componentIndex: o.componentIndex,
                el: l
            }
        }
    }
}
const QL = XL;

function JL(r) {
    ca(Om), r.registerComponentModel(EL), r.registerComponentView(QL), r.registerAction({
        type: "showTip",
        event: "showTip",
        update: "tooltip:manuallyShowTip"
    }, ne), r.registerAction({
        type: "hideTip",
        event: "hideTip",
        update: "tooltip:manuallyHideTip"
    }, ne)
}
var tP = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = t.type, e.layoutMode = {
                type: "box",
                ignoreSize: !0
            }, e
        }
        return t.type = "title", t.defaultOption = {
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {
                fontSize: 18,
                fontWeight: "bold",
                color: "#464646"
            },
            subtextStyle: {
                fontSize: 12,
                color: "#6E7079"
            }
        }, t
    }(bt),
    eP = function (r) {
        z(t, r);

        function t() {
            var e = r !== null && r.apply(this, arguments) || this;
            return e.type = t.type, e
        }
        return t.prototype.render = function (e, i, n) {
            if (this.group.removeAll(), !!e.get("show")) {
                var a = this.group,
                    o = e.getModel("textStyle"),
                    s = e.getModel("subtextStyle"),
                    l = e.get("textAlign"),
                    u = rt(e.get("textBaseline"), e.get("textVerticalAlign")),
                    c = new ve({
                        style: di(o, {
                            text: e.get("text"),
                            fill: o.getTextColor()
                        }, {
                            disableBox: !0
                        }),
                        z2: 10
                    }),
                    f = c.getBoundingRect(),
                    v = e.get("subtext"),
                    h = new ve({
                        style: di(s, {
                            text: v,
                            fill: s.getTextColor(),
                            y: f.height + e.get("itemGap"),
                            verticalAlign: "top"
                        }, {
                            disableBox: !0
                        }),
                        z2: 10
                    }),
                    d = e.get("link"),
                    m = e.get("sublink"),
                    p = e.get("triggerEvent", !0);
                c.silent = !d && !p, h.silent = !m && !p, d && c.on("click", function () {
                    Ah(d, "_" + e.get("target"))
                }), m && h.on("click", function () {
                    Ah(m, "_" + e.get("subtarget"))
                }), vt(c).eventData = vt(h).eventData = p ? {
                    componentType: "title",
                    componentIndex: e.componentIndex
                } : null, a.add(c), v && a.add(h);
                var g = a.getBoundingRect(),
                    _ = e.getBoxLayoutParams();
                _.width = g.width, _.height = g.height;
                var y = gs(_, {
                    width: n.getWidth(),
                    height: n.getHeight()
                }, e.get("padding"));
                l || (l = e.get("left") || e.get("right"), l === "middle" && (l = "center"), l === "right" ? y.x += y.width : l === "center" && (y.x += y.width / 2)), u || (u = e.get("top") || e.get("bottom"), u === "center" && (u = "middle"), u === "bottom" ? y.y += y.height : u === "middle" && (y.y += y.height / 2), u = u || "top"), a.x = y.x, a.y = y.y, a.markRedraw();
                var x = {
                    align: l,
                    verticalAlign: u
                };
                c.setStyle(x), h.setStyle(x), g = a.getBoundingRect();
                var S = y.margin,
                    w = e.getItemStyle(["color", "opacity"]);
                w.fill = e.get("backgroundColor");
                var T = new ae({
                    shape: {
                        x: g.x - S[3],
                        y: g.y - S[0],
                        width: g.width + S[1] + S[3],
                        height: g.height + S[0] + S[2],
                        r: e.get("borderRadius")
                    },
                    style: w,
                    subPixelOptimize: !0,
                    silent: !0
                });
                a.add(T)
            }
        }, t.type = "title", t
    }(Pr);

function rP(r) {
    r.registerComponentModel(tP), r.registerComponentView(eP)
}

function Md(r, t, e) {
    var i = Ji.createCanvas(),
        n = t.getWidth(),
        a = t.getHeight(),
        o = i.style;
    return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = n + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", r)), i.width = n * e, i.height = a * e, i
}
var iP = function (r) {
    z(t, r);

    function t(e, i, n) {
        var a = r.call(this) || this;
        a.motionBlur = !1, a.lastFrameAlpha = .7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
        var o;
        n = n || Lo, typeof e == "string" ? o = Md(e, i, n) : X(e) && (o = e, e = o.id), a.id = e, a.dom = o;
        var s = o.style;
        return s && (Xd(o), o.onselectstart = function () {
            return !1
        }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = i, a.dpr = n, a
    }
    return t.prototype.getElementCount = function () {
        return this.__endIndex - this.__startIndex
    }, t.prototype.afterBrush = function () {
        this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex
    }, t.prototype.initContext = function () {
        this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
    }, t.prototype.setUnpainted = function () {
        this.__firstTimePaint = !0
    }, t.prototype.createBackBuffer = function () {
        var e = this.dpr;
        this.domBack = Md("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e)
    }, t.prototype.createRepaintRects = function (e, i, n, a) {
        if (this.__firstTimePaint) return this.__firstTimePaint = !1, null;
        var o = [],
            s = this.maxRepaintRectCount,
            l = !1,
            u = new ct(0, 0, 0, 0);

        function c(_) {
            if (!(!_.isFinite() || _.isZero()))
                if (o.length === 0) {
                    var y = new ct(0, 0, 0, 0);
                    y.copy(_), o.push(y)
                } else {
                    for (var x = !1, S = 1 / 0, w = 0, T = 0; T < o.length; ++T) {
                        var C = o[T];
                        if (C.intersect(_)) {
                            var M = new ct(0, 0, 0, 0);
                            M.copy(C), M.union(_), o[T] = M, x = !0;
                            break
                        } else if (l) {
                            u.copy(_), u.union(C);
                            var I = _.width * _.height,
                                A = C.width * C.height,
                                L = u.width * u.height,
                                P = L - I - A;
                            P < S && (S = P, w = T)
                        }
                    }
                    if (l && (o[w].union(_), x = !0), !x) {
                        var y = new ct(0, 0, 0, 0);
                        y.copy(_), o.push(y)
                    }
                    l || (l = o.length >= s)
                }
        }
        for (var f = this.__startIndex; f < this.__endIndex; ++f) {
            var v = e[f];
            if (v) {
                var h = v.shouldBePainted(n, a, !0, !0),
                    d = v.__isRendered && (v.__dirty & fe || !h) ? v.getPrevPaintRect() : null;
                d && c(d);
                var m = h && (v.__dirty & fe || !v.__isRendered) ? v.getPaintRect() : null;
                m && c(m)
            }
        }
        for (var f = this.__prevStartIndex; f < this.__prevEndIndex; ++f) {
            var v = i[f],
                h = v && v.shouldBePainted(n, a, !0, !0);
            if (v && (!h || !v.__zr) && v.__isRendered) {
                var d = v.getPrevPaintRect();
                d && c(d)
            }
        }
        var p;
        do {
            p = !1;
            for (var f = 0; f < o.length;) {
                if (o[f].isZero()) {
                    o.splice(f, 1);
                    continue
                }
                for (var g = f + 1; g < o.length;) o[f].intersect(o[g]) ? (p = !0, o[f].union(o[g]), o.splice(g, 1)) : g++;
                f++
            }
        } while (p);
        return this._paintRects = o, o
    }, t.prototype.debugGetPaintRects = function () {
        return (this._paintRects || []).slice()
    }, t.prototype.resize = function (e, i) {
        var n = this.dpr,
            a = this.dom,
            o = a.style,
            s = this.domBack;
        o && (o.width = e + "px", o.height = i + "px"), a.width = e * n, a.height = i * n, s && (s.width = e * n, s.height = i * n, n !== 1 && this.ctxBack.scale(n, n))
    }, t.prototype.clear = function (e, i, n) {
        var a = this.dom,
            o = this.ctx,
            s = a.width,
            l = a.height;
        i = i || this.clearColor;
        var u = this.motionBlur && !e,
            c = this.lastFrameAlpha,
            f = this.dpr,
            v = this;
        u && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / f, l / f));
        var h = this.domBack;

        function d(m, p, g, _) {
            if (o.clearRect(m, p, g, _), i && i !== "transparent") {
                var y = void 0;
                if (ts(i)) {
                    var x = i.global || i.__width === g && i.__height === _;
                    y = x && i.__canvasGradient || Pu(o, i, {
                        x: 0,
                        y: 0,
                        width: g,
                        height: _
                    }), i.__canvasGradient = y, i.__width = g, i.__height = _
                } else Mb(i) && (i.scaleX = i.scaleX || f, i.scaleY = i.scaleY || f, y = ku(o, i, {
                    dirty: function () {
                        v.setUnpainted(), v.painter.refresh()
                    }
                }));
                o.save(), o.fillStyle = y || i, o.fillRect(m, p, g, _), o.restore()
            }
            u && (o.save(), o.globalAlpha = c, o.drawImage(h, m, p, g, _), o.restore())
        }!n || u ? d(0, 0, s, l) : n.length && D(n, function (m) {
            d(m.x * f, m.y * f, m.width * f, m.height * f)
        })
    }, t
}(Xe);
const Gl = iP;
var Dd = 1e5,
    ei = 314159,
    uo = .01,
    nP = .001;

function aP(r) {
    return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1
}

function oP(r, t) {
    var e = document.createElement("div");
    return e.style.cssText = ["position:relative", "width:" + r + "px", "height:" + t + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", e
}
var sP = function () {
    function r(t, e, i, n) {
        this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
        var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
        this._opts = i = O({}, i || {}), this.dpr = i.devicePixelRatio || Lo, this._singleCanvas = a, this.root = t;
        var o = t.style;
        o && (Xd(t), t.innerHTML = ""), this.storage = e;
        var s = this._zlevelList;
        this._prevDisplayList = [];
        var l = this._layers;
        if (a) {
            var c = t,
                f = c.width,
                v = c.height;
            i.width != null && (f = i.width), i.height != null && (v = i.height), this.dpr = i.devicePixelRatio || 1, c.width = f * this.dpr, c.height = v * this.dpr, this._width = f, this._height = v;
            var h = new Gl(c, this, this.dpr);
            h.__builtin__ = !0, h.initContext(), l[ei] = h, h.zlevel = ei, s.push(ei), this._domRoot = t
        } else {
            this._width = Qa(t, 0, i), this._height = Qa(t, 1, i);
            var u = this._domRoot = oP(this._width, this._height);
            t.appendChild(u)
        }
    }
    return r.prototype.getType = function () {
        return "canvas"
    }, r.prototype.isSingleCanvas = function () {
        return this._singleCanvas
    }, r.prototype.getViewportRoot = function () {
        return this._domRoot
    }, r.prototype.getViewportRootOffset = function () {
        var t = this.getViewportRoot();
        if (t) return {
            offsetLeft: t.offsetLeft || 0,
            offsetTop: t.offsetTop || 0
        }
    }, r.prototype.refresh = function (t) {
        var e = this.storage.getDisplayList(!0),
            i = this._prevDisplayList,
            n = this._zlevelList;
        this._redrawId = Math.random(), this._paintList(e, i, t, this._redrawId);
        for (var a = 0; a < n.length; a++) {
            var o = n[a],
                s = this._layers[o];
            if (!s.__builtin__ && s.refresh) {
                var l = a === 0 ? this._backgroundColor : null;
                s.refresh(l)
            }
        }
        return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
    }, r.prototype.refreshHover = function () {
        this._paintHoverList(this.storage.getDisplayList(!1))
    }, r.prototype._paintHoverList = function (t) {
        var e = t.length,
            i = this._hoverlayer;
        if (i && i.clear(), !!e) {
            for (var n = {
                    inHover: !0,
                    viewWidth: this._width,
                    viewHeight: this._height
                }, a, o = 0; o < e; o++) {
                var s = t[o];
                s.__inHover && (i || (i = this._hoverlayer = this.getLayer(Dd)), a || (a = i.ctx, a.save()), ai(a, s, n, o === e - 1))
            }
            a && a.restore()
        }
    }, r.prototype.getHoverLayer = function () {
        return this.getLayer(Dd)
    }, r.prototype.paintOne = function (t, e) {
        T0(t, e)
    }, r.prototype._paintList = function (t, e, i, n) {
        if (this._redrawId === n) {
            i = i || !1, this._updateLayerStatus(t);
            var a = this._doPaintList(t, e, i),
                o = a.finished,
                s = a.needsRefreshHover;
            if (this._needsManuallyCompositing && this._compositeManually(), s && this._paintHoverList(t), o) this.eachLayer(function (u) {
                u.afterBrush && u.afterBrush()
            });
            else {
                var l = this;
                Ql(function () {
                    l._paintList(t, e, i, n)
                })
            }
        }
    }, r.prototype._compositeManually = function () {
        var t = this.getLayer(ei).ctx,
            e = this._domRoot.width,
            i = this._domRoot.height;
        t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function (n) {
            n.virtual && t.drawImage(n.dom, 0, 0, e, i)
        })
    }, r.prototype._doPaintList = function (t, e, i) {
        for (var n = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
            var l = this._zlevelList[s],
                u = this._layers[l];
            u.__builtin__ && u !== this._hoverlayer && (u.__dirty || i) && a.push(u)
        }
        for (var c = !0, f = !1, v = function (m) {
                var p = a[m],
                    g = p.ctx,
                    _ = o && p.createRepaintRects(t, e, h._width, h._height),
                    y = i ? p.__startIndex : p.__drawIndex,
                    x = !i && p.incremental && Date.now,
                    S = x && Date.now(),
                    w = p.zlevel === h._zlevelList[0] ? h._backgroundColor : null;
                if (p.__startIndex === p.__endIndex) p.clear(!1, w, _);
                else if (y === p.__startIndex) {
                    var T = t[y];
                    (!T.incremental || !T.notClear || i) && p.clear(!1, w, _)
                }
                y === -1 && (console.error("For some unknown reason. drawIndex is -1"), y = p.__startIndex);
                var C, M = function (P) {
                    var k = {
                        inHover: !1,
                        allClipped: !1,
                        prevEl: null,
                        viewWidth: n._width,
                        viewHeight: n._height
                    };
                    for (C = y; C < p.__endIndex; C++) {
                        var R = t[C];
                        if (R.__inHover && (f = !0), n._doPaintEl(R, p, o, P, k, C === p.__endIndex - 1), x) {
                            var E = Date.now() - S;
                            if (E > 15) break
                        }
                    }
                    k.prevElClipPaths && g.restore()
                };
                if (_)
                    if (_.length === 0) C = p.__endIndex;
                    else
                        for (var I = h.dpr, A = 0; A < _.length; ++A) {
                            var L = _[A];
                            g.save(), g.beginPath(), g.rect(L.x * I, L.y * I, L.width * I, L.height * I), g.clip(), M(L), g.restore()
                        } else g.save(), M(), g.restore();
                p.__drawIndex = C, p.__drawIndex < p.__endIndex && (c = !1)
            }, h = this, d = 0; d < a.length; d++) v(d);
        return j.wxa && D(this._layers, function (m) {
            m && m.ctx && m.ctx.draw && m.ctx.draw()
        }), {
            finished: c,
            needsRefreshHover: f
        }
    }, r.prototype._doPaintEl = function (t, e, i, n, a, o) {
        var s = e.ctx;
        if (i) {
            var l = t.getPaintRect();
            (!n || l && l.intersect(n)) && (ai(s, t, a, o), t.setPrevPaintRect(l))
        } else ai(s, t, a, o)
    }, r.prototype.getLayer = function (t, e) {
        this._singleCanvas && !this._needsManuallyCompositing && (t = ei);
        var i = this._layers[t];
        return i || (i = new Gl("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] ? pt(i, this._layerConfig[t], !0) : this._layerConfig[t - uo] && pt(i, this._layerConfig[t - uo], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i
    }, r.prototype.insertLayer = function (t, e) {
        var i = this._layers,
            n = this._zlevelList,
            a = n.length,
            o = this._domRoot,
            s = null,
            l = -1;
        if (!i[t] && aP(e)) {
            if (a > 0 && t > n[0]) {
                for (l = 0; l < a - 1 && !(n[l] < t && n[l + 1] > t); l++);
                s = i[n[l]]
            }
            if (n.splice(l + 1, 0, t), i[t] = e, !e.virtual)
                if (s) {
                    var u = s.dom;
                    u.nextSibling ? o.insertBefore(e.dom, u.nextSibling) : o.appendChild(e.dom)
                } else o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
            e.painter || (e.painter = this)
        }
    }, r.prototype.eachLayer = function (t, e) {
        for (var i = this._zlevelList, n = 0; n < i.length; n++) {
            var a = i[n];
            t.call(e, this._layers[a], a)
        }
    }, r.prototype.eachBuiltinLayer = function (t, e) {
        for (var i = this._zlevelList, n = 0; n < i.length; n++) {
            var a = i[n],
                o = this._layers[a];
            o.__builtin__ && t.call(e, o, a)
        }
    }, r.prototype.eachOtherLayer = function (t, e) {
        for (var i = this._zlevelList, n = 0; n < i.length; n++) {
            var a = i[n],
                o = this._layers[a];
            o.__builtin__ || t.call(e, o, a)
        }
    }, r.prototype.getLayers = function () {
        return this._layers
    }, r.prototype._updateLayerStatus = function (t) {
        this.eachBuiltinLayer(function (f, v) {
            f.__dirty = f.__used = !1
        });

        function e(f) {
            a && (a.__endIndex !== f && (a.__dirty = !0), a.__endIndex = f)
        }
        if (this._singleCanvas)
            for (var i = 1; i < t.length; i++) {
                var n = t[i];
                if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
                    this._needsManuallyCompositing = !0;
                    break
                }
            }
        var a = null,
            o = 0,
            s, l;
        for (l = 0; l < t.length; l++) {
            var n = t[l],
                u = n.zlevel,
                c = void 0;
            s !== u && (s = u, o = 0), n.incremental ? (c = this.getLayer(u + nP, this._needsManuallyCompositing), c.incremental = !0, o = 1) : c = this.getLayer(u + (o > 0 ? uo : 0), this._needsManuallyCompositing), c.__builtin__ || Qu("ZLevel " + u + " has been used by unkown layer " + c.id), c !== a && (c.__used = !0, c.__startIndex !== l && (c.__dirty = !0), c.__startIndex = l, c.incremental ? c.__drawIndex = -1 : c.__drawIndex = l, e(l), a = c), n.__dirty & fe && !n.__inHover && (c.__dirty = !0, c.incremental && c.__drawIndex < 0 && (c.__drawIndex = l))
        }
        e(l), this.eachBuiltinLayer(function (f, v) {
            !f.__used && f.getElementCount() > 0 && (f.__dirty = !0, f.__startIndex = f.__endIndex = f.__drawIndex = 0), f.__dirty && f.__drawIndex < 0 && (f.__drawIndex = f.__startIndex)
        })
    }, r.prototype.clear = function () {
        return this.eachBuiltinLayer(this._clearLayer), this
    }, r.prototype._clearLayer = function (t) {
        t.clear()
    }, r.prototype.setBackgroundColor = function (t) {
        this._backgroundColor = t, D(this._layers, function (e) {
            e.setUnpainted()
        })
    }, r.prototype.configLayer = function (t, e) {
        if (e) {
            var i = this._layerConfig;
            i[t] ? pt(i[t], e, !0) : i[t] = e;
            for (var n = 0; n < this._zlevelList.length; n++) {
                var a = this._zlevelList[n];
                if (a === t || a === t + uo) {
                    var o = this._layers[a];
                    pt(o, i[t], !0)
                }
            }
        }
    }, r.prototype.delLayer = function (t) {
        var e = this._layers,
            i = this._zlevelList,
            n = e[t];
        n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(dt(i, t), 1))
    }, r.prototype.resize = function (t, e) {
        if (this._domRoot.style) {
            var i = this._domRoot;
            i.style.display = "none";
            var n = this._opts,
                a = this.root;
            if (t != null && (n.width = t), e != null && (n.height = e), t = Qa(a, 0, n), e = Qa(a, 1, n), i.style.display = "", this._width !== t || e !== this._height) {
                i.style.width = t + "px", i.style.height = e + "px";
                for (var o in this._layers) this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
                this.refresh(!0)
            }
            this._width = t, this._height = e
        } else {
            if (t == null || e == null) return;
            this._width = t, this._height = e, this.getLayer(ei).resize(t, e)
        }
        return this
    }, r.prototype.clearLayer = function (t) {
        var e = this._layers[t];
        e && e.clear()
    }, r.prototype.dispose = function () {
        this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
    }, r.prototype.getRenderedCanvas = function (t) {
        if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[ei].dom;
        var e = new Gl("image", this, t.pixelRatio || this.dpr);
        e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
        var i = e.ctx;
        if (t.pixelRatio <= this.dpr) {
            this.refresh();
            var n = e.dom.width,
                a = e.dom.height;
            this.eachLayer(function (f) {
                f.__builtin__ ? i.drawImage(f.dom, 0, 0, n, a) : f.renderToCanvas && (i.save(), f.renderToCanvas(i), i.restore())
            })
        } else
            for (var o = {
                    inHover: !1,
                    viewWidth: this._width,
                    viewHeight: this._height
                }, s = this.storage.getDisplayList(!0), l = 0, u = s.length; l < u; l++) {
                var c = s[l];
                ai(i, c, o, l === u - 1)
            }
        return e.dom
    }, r.prototype.getWidth = function () {
        return this._width
    }, r.prototype.getHeight = function () {
        return this._height
    }, r
}();
const lP = sP;

function uP(r) {
    r.registerPainter("canvas", lP)
}
const cP = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 37 37"
    },
    fP = b("rect", {
        width: "36",
        height: "36",
        x: ".5",
        y: ".617",
        fill: "currentColor",
        "fill-opacity": ".1",
        rx: "18"
    }, null, -1),
    hP = b("rect", {
        width: "35",
        height: "35",
        x: "1",
        y: "1.117",
        stroke: "#fff",
        "stroke-opacity": ".4",
        rx: "17.5"
    }, null, -1),
    vP = b("path", {
        stroke: "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        d: "M13.167 18.617h10.666m0 0-4-4m4 4-4 4"
    }, null, -1),
    dP = [fP, hP, vP];

function pP(r, t) {
    return B(), N("svg", cP, [...dP])
}
const Ad = {
        render: pP
    },
    gP = {
        class: "relative"
    },
    mP = {
        key: 0,
        class: "w-full h-72 flex flex-col"
    },
    _P = {
        class: "flex items-center gap-3 justify-end text-3xl"
    },
    yP = ["disabled"],
    xP = ["disabled"],
    wP = {
        class: "overflow-y-auto overflow-x-hidden flex-1 custom-scrollbar table-wrap"
    },
    bP = {
        class: "h-7 flex items-center justify-between text-sm gap-5 overflow-hidden"
    },
    SP = ["innerHTML"],
    CP = st({
        __name: "DatasetChart",
        props: {
            option: {}
        },
        setup(r) {
            ca([x6, n6, rP, JL, PL, uP]);
            const t = r,
                e = ee(0),
                i = ee(),
                n = ee([...t.option.documents]),
                a = ee(0),
                o = ee("#fff");

            function s() {
                var h = Math.floor(Math.random() * 360),
                    d = 70 + Math.random() * 20,
                    m = 50 + Math.random() * 20;
                return `hsl(${h}, ${d}%, ${m}%)`
            }

            function l(h) {
                h = h.replace(/^\./, "");
                const d = [],
                    m = h.split("#");
                for (const g of m.slice(1)) {
                    let _ = g,
                        y = [];
                    const x = g.match(/^toFixed(\d{0,2})$/);
                    x && (_ = "toFixed", y = [Number(x[1])]), d.push({
                        name: _,
                        args: y
                    })
                }
                return {
                    name: m[0],
                    methods: d
                }
            }

            function u(h, d) {
                if (typeof d != "number") return d;
                for (const m of h.methods) switch (m.name) {
                    case "formatEther":
                        d = Number(Ym(d));
                        break;
                    case "toFixed":
                        d = Number(d.toFixed(m.args[0]));
                        break
                }
                return d
            }

            function c() {
                const h = t.option.chart,
                    d = l(h.counter.keyPath),
                    m = u(d, t.option.documents[0][d.name]);
                a.value = m, o.value = s();
                const p = {
                    tooltip: {
                        show: !1
                    },
                    series: [{
                        name: t.option.title,
                        type: "pie",
                        radius: ["65%", "90%"],
                        avoidLabelOverlap: !1,
                        label: {
                            show: !1,
                            position: "center"
                        },
                        data: [{
                            value: Math.abs(m),
                            name: d.name,
                            itemStyle: {
                                color: o.value
                            }
                        }]
                    }]
                };
                Pv(i.value).setOption(p)
            }

            function f() {
                const h = t.option.chart,
                    d = h.line.xaxis.replace(/^\./, ""),
                    m = t.option.documents.map(y => {
                        var x, S;
                        return ((S = (x = y[d]) == null ? void 0 : x.split(" ")) == null ? void 0 : S[0]) || 0
                    }),
                    p = h.line.yaxis.map(y => {
                        const x = l(y),
                            S = t.option.documents.map(T => u(x, T[x.name] || 0));
                        return {
                            name: x.name,
                            type: "line",
                            smooth: !0,
                            data: S
                        }
                    }),
                    g = {
                        tooltip: {
                            trigger: "axis"
                        },
                        grid: {
                            top: "5%",
                            left: "3%",
                            right: "4%",
                            bottom: "3%",
                            containLabel: !0
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: !1,
                            data: m
                        },
                        yAxis: {
                            type: "value"
                        },
                        series: p
                    };
                Pv(i.value).setOption(g)
            }

            function v() {
                const h = t.option.chart;
                for (const d of h.table.header) {
                    const m = l(d);
                    for (const p of t.option.documents) p[m.name] = u(m, p[m.name])
                }
                n.value = [...t.option.documents]
            }
            return va(() => {
                switch (t.option.chart.type) {
                    case "counter":
                        c();
                        break;
                    case "line":
                        f();
                        break;
                    case "table":
                        v()
                }
            }), (h, d) => (B(), N("div", gP, [b("div", {
                ref_key: "container",
                ref: i,
                class: "h-72 w-full"
            }, [h.option.chart.type === "table" ? (B(), N("div", mP, [b("div", _P, [b("button", {
                class: "arrow-btn",
                disabled: e.value === 0,
                onClick: d[0] || (d[0] = m => e.value--)
            }, [U(Hi(Ad), {
                class: "rotate-180"
            })], 8, yP), b("button", {
                class: "arrow-btn",
                disabled: e.value === h.option.documents.length - 1,
                onClick: d[1] || (d[1] = m => e.value++)
            }, [U(Hi(Ad))], 8, xP)]), b("div", wP, [(B(!0), N(nt, null, Mt(h.option.chart.table.header, m => (B(), N("div", bP, [b("div", null, Y(m.slice(1)), 1), b("div", {
                innerHTML: n.value[e.value][m.slice(1)],
                class: "line-clamp-1 w-36 md:w-44 text-right whitespace-nowrap"
            }, null, 8, SP)]))), 256))])])) : Zn("", !0)], 512), h.option.chart.type === "counter" ? (B(), N("div", {
                key: 0,
                class: "absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center text-xl font-semibold pointer-events-none",
                style: Um({
                    color: o.value
                })
            }, Y(a.value.toLocaleString("en-US")), 5)) : Zn("", !0)]))
        }
    }),
    Cs = r => (St("data-v-0462f035"), r = r(), Ct(), r),
    TP = Cs(() => b("div", {
        class: "banner-wrap"
    }, null, -1)),
    MP = {
        class: "w-full max-w-7xl mx-auto mt-24 md:mt-44 px-5 md:px-0"
    },
    DP = {
        key: 0,
        class: "top-box"
    },
    AP = ["src"],
    IP = {
        class: "text-2xl md:text-3xl"
    },
    LP = {
        class: "max-w-4xl text-white/80"
    },
    PP = {
        class: "w-full max-w-7xl grid md:grid-cols-3 gap-5 mx-auto mt-6 md:mt-16 px-5 md:px-0"
    },
    kP = {
        class: "coll-item"
    },
    EP = {
        class: "item-top"
    },
    RP = {
        class: "flex items-center gap-5"
    },
    OP = Cs(() => b("img", {
        src: cb,
        class: "w-12 h-12"
    }, null, -1)),
    BP = {
        class: "text-xl md:text-2xl"
    },
    NP = {
        key: 0
    },
    FP = {
        class: "flex items-center justify-between"
    },
    $P = {
        class: "flex flex-col"
    },
    zP = Cs(() => b("div", {
        class: "text-sm text-gray-400"
    }, "Created At", -1)),
    HP = {
        class: "text-maintext"
    },
    GP = {
        class: "flex flex-col text-right"
    },
    VP = Cs(() => b("div", {
        class: "text-sm text-gray-400"
    }, "Last Updated At", -1)),
    WP = {
        class: "text-maintext"
    },
    UP = {
        key: 1,
        class: "h-screen flex items-center justify-center mx-auto text-6xl"
    },
    YP = st({
        __name: "Dataset",
        setup(r) {
            const t = e_(),
                e = ee(!1),
                i = ee(),
                n = ee([]);
            return va(async () => {
                let a = t.params.id;
                const o = await t_(a);
                n.value = o.collections, i.value = o.dataset, e.value = !0
            }), (a, o) => (B(), N(nt, null, [TP, e.value ? (B(), N(nt, {
                key: 0
            }, [b("div", MP, [i.value ? (B(), N("div", DP, [b("img", {
                src: i.value.logo,
                class: "w-24 h-24 rounded-full"
            }, null, 8, AP), b("div", IP, Y(i.value.name), 1), b("div", LP, Y(i.value.description), 1)])) : Zn("", !0)]), b("div", PP, [(B(!0), N(nt, null, Mt(n.value, s => (B(), N("div", kP, [b("div", EP, [b("div", RP, [OP, b("div", BP, Y(s.title), 1)]), s.description ? (B(), N("div", NP, Y(s.description), 1)) : Zn("", !0)]), b("div", FP, [b("div", $P, [zP, b("div", HP, Y(Hi(ef)(s.createdAt)), 1)]), b("div", GP, [VP, b("div", WP, Y(Hi(ef)(s.lastUpdatedAt)), 1)])]), U(CP, {
                option: s
            }, null, 8, ["option"])]))), 256))])], 64)) : (B(), N("div", UP, [U(Hi($d), {
                class: "animate-spin"
            })]))], 64))
        }
    }),
    XP = ft(YP, [
        ["__scopeId", "data-v-0462f035"]
    ]),
    ZP = "/assets/nv-logo-CVMOYWGs.svg",
    qP = "/assets/logo-ai-DyN1rDcs.svg",
    KP = "/assets/logo-db-CAKpUOl4.svg",
    jP = "/assets/logo-da-CXPpf032.svg",
    Er = r => (St("data-v-b2b2b192"), r = r(), Ct(), r),
    QP = {
        class: "banner-wrap"
    },
    JP = Er(() => b("img", {
        src: ZP,
        class: "w-32 h-32 md:w-auto md:h-auto mt-[180px] md:mt-[160px]"
    }, null, -1)),
    tk = Er(() => b("div", {
        class: "text-center text-3xl md:text-[64px] leading-[1.1em] font-display mt-12"
    }, [b("div", null, "Become a Glacier Network"), b("div", {
        class: "linear-text"
    }, "Verifier Node")], -1)),
    ek = {
        class: "flex items-center justify-center gap-3 mt-5"
    },
    rk = {
        href: "https://node.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    ik = Er(() => b("span", null, "Run Your Nodes", -1)),
    nk = {
        href: "https://docs.glacier.io/getting-started/glacier-nodes/run-mainnet-nodes/nodes-portal-tutorial",
        target: "_blank",
        class: "flex"
    },
    ak = Er(() => b("span", null, "Tutorial", -1)),
    ok = Er(() => b("div", {
        class: "text-center mt-3 text-white/80 text-sm md:text-base px-5"
    }, " Truly Decentralized. Accessible on All Devices. Empowering Everyone. ", -1)),
    sk = Er(() => b("div", {
        class: "banner-bg"
    }, null, -1)),
    lk = Er(() => b("div", {
        class: "shadow-box"
    }, [b("img", {
        src: jo
    })], -1)),
    uk = {
        class: "px-5 md:px-0 w-full"
    },
    ck = {
        class: "ai-content"
    },
    fk = {
        class: "max-w-7xl ai-box flex flex-col md:flex-row items-center justify-around relative gap-7"
    },
    hk = Er(() => b("div", {
        class: "flex-1 max-w-[400px] gap-28 relative text-center"
    }, [b("div", {
        class: "text-3xl md:text-5xl font-display"
    }, [b("div", null, [qt("Glacier Network"), b("br"), qt("Mainnet Alpha")])]), b("div", {
        class: "text-white/80 mt-5 text-sm md:text-base"
    }, [b("p", null, " Glacier is building the first data-centric blockchain to supercharge AI at scale, empowering verifiable computing through GlacierAI, GlacierDA, and GlacierDB products. In our data-centric blockchain, nodes plays a critical role in maintaining functionality, security, and data integrity. "), b("p", {
        class: "mt-6 text-maintext"
    }, " Glacier Mainnet Alpha is now onboarding the verifier nodes, to contribute to network decentralization and drive the AI-powered consensus. ")])], -1)),
    vk = {
        class: "flex-1 w-full max-w-sm flex flex-col gap-5 px-3 md:px-0"
    },
    dk = {
        class: "flex items-center gap-5"
    },
    pk = ["src"],
    gk = {
        class: "text-maintext text-base md:text-xl font-semibold"
    },
    mk = {
        class: "text-sm md:text-base text-white/80"
    },
    _k = st({
        __name: "ValidatorTop",
        setup(r) {
            const t = [{
                icon: qP,
                title: "GlacierAI",
                desc: "Decentralized Vector Database and Chatbot-Bench built for AI"
            }, {
                icon: KP,
                title: "GlacierDB",
                desc: "Decentralized database on permanent storages with modularity"
            }, {
                icon: jP,
                title: "GlacierDA",
                desc: "The first data availability layer integrating decentralized storages"
            }];
            return (e, i) => (B(), N("div", QP, [JP, tk, b("div", ek, [b("a", rk, [U(Ft, {
                "show-icon": ""
            }, {
                default: kt(() => [ik]),
                _: 1
            })]), b("a", nk, [U(Ft, null, {
                default: kt(() => [ak]),
                _: 1
            })])]), ok, sk, lk, b("div", uk, [b("div", ck, [b("div", fk, [hk, b("div", vk, [(B(), N(nt, null, Mt(t, n => b("div", dk, [b("img", {
                src: n.icon
            }, null, 8, pk), b("div", null, [b("div", gk, Y(n.title), 1), b("div", mk, Y(n.desc), 1)])])), 64))])])])])]))
        }
    }),
    yk = ft(_k, [
        ["__scopeId", "data-v-b2b2b192"]
    ]),
    Sa = r => (St("data-v-e5f5d6b8"), r = r(), Ct(), r),
    xk = {
        class: "overflow-hidden w-full max-w-7xl mx-auto relative px-5 md:px-0 mb-11"
    },
    wk = Sa(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display"
    }, [b("div", null, "The Role of Glacier Nodes")], -1)),
    bk = Sa(() => b("div", {
        class: "text-sm md:text-base text-white/80 mt-4 text-center"
    }, " The Glacier Network currently consists of two types of nodes: Verifier Nodes and Worker Nodes. ", -1)),
    Sk = {
        class: "w-full flex flex-col md:flex-row gap-5 mt-8"
    },
    Ck = {
        class: "content-right flex flex-row md:flex-col gap-5"
    },
    Tk = Sa(() => b("div", {
        class: "bg-cardbg min-w-12 min-h-12 rounded-full border border-maintext flex items-center justify-center relative text-sm md:text-xl font-display max-w-20 md:max-w-none text-center text-maintext"
    }, " Verifier Nodes ", -1)),
    Mk = {
        class: "flex-1 bg-cardbg pt-6 pb-5 px-4 md:px-8 text-center rounded-[48px] border border-maintext relative"
    },
    Dk = {
        class: "text-base md:text-xl font-display text-maintext"
    },
    Ak = {
        class: "text-xs md:text-sm mt-3"
    },
    Ik = {
        class: "content-left flex md:flex-col gap-5"
    },
    Lk = Sa(() => b("div", {
        class: "bg-cardbg min-w-12 min-h-12 rounded-full border border-white/5 flex items-center justify-center text-maintext text-sm md:text-xl font-display max-w-20 md:max-w-none text-center relative"
    }, [b("div", {
        class: "linear-border top-[-1px] hidden md:block"
    }), qt(" Worker Nodes ")], -1)),
    Pk = {
        class: "flex flex-1 flex-col md:flex-row gap-5"
    },
    kk = {
        class: "flex-1 bg-cardbg pt-6 pb-5 text-center rounded-[48px] border border-white/5 relative"
    },
    Ek = Sa(() => b("div", {
        class: "linear-border top-[-1px]"
    }, null, -1)),
    Rk = {
        class: "text-sm md:text-xl text-maintext font-display"
    },
    Ok = {
        class: "text-xs md:text-sm mt-3 px-4 md:px-8"
    },
    Bk = st({
        __name: "ValidatorRole",
        setup(r) {
            const t = [{
                title: "Data Availability(DA) Nodes",
                desc: "Data Availability (DA) Nodes are responsible for generating the blocks, and guaranteeing the data is stored immutably, and remains retrievable, and intact."
            }, {
                title: "TEE Computation Nodes",
                desc: "TEE Nodes ensure all communications and data flows are encrypted, remaining safeguarded from external threats and protect the intellectual property of AI models and datasets."
            }, {
                title: "Indexer Nodes",
                desc: "Indexer nodes provide indexing and query processing services for Glacier Database and Vector Database, ensuring the data conforms structurally to predefined schemas."
            }, {
                title: "Verifier Nodes",
                desc: "Verifier Nodes act as the guardians of the network, responsible for verifying the Work Proof of Worker Nodes, ensuring consensus, and maintenance of the network's integrity."
            }];
            return (e, i) => (B(), N("div", xk, [wk, bk, b("div", Sk, [b("div", Ck, [Tk, b("div", Mk, [b("div", Dk, Y(t[3].title), 1), b("div", Ak, Y(t[3].desc), 1)])]), b("div", Ik, [Lk, b("div", Pk, [(B(!0), N(nt, null, Mt(t.slice(0, 3), n => (B(), N("div", kk, [Ek, b("div", Rk, Y(n.title), 1), b("div", Ok, Y(n.desc), 1)]))), 256))])])])]))
        }
    }),
    Nk = ft(Bk, [
        ["__scopeId", "data-v-e5f5d6b8"]
    ]),
    Fk = "/assets/func-1-DWUIFNWU.webp",
    $k = "/assets/func-2-2nHRQdB6.webp",
    zk = "/assets/func-3-BPfgQ-fR.webp",
    Hk = "/assets/func-4-oNZBKsPl.webp",
    Gk = "/assets/func-5-5Gwi08K5.webp",
    Vk = {
        class: "overflow-hidden w-full max-w-7xl mx-auto relative px-5 md:px-0 mb-11 mt-48 md:mt-64"
    },
    Wk = b("div", {
        class: "text-center text-3xl md:text-5xl font-display"
    }, [b("div", null, "Node Core Functions")], -1),
    Uk = b("div", {
        class: "text-sm md:text-base text-white/80 mt-4 text-center"
    }, " The Essential Framework Driving the Heart of Decentralized Networks ", -1),
    Yk = {
        class: "flex flex-col md:flex-row gap-14 md:gap-4 mt-16"
    },
    Xk = {
        class: "flex-1 flex flex-col items-center bg-cardbg rounded-[48px] border border-white/5 pb-5 relative validator-func-item"
    },
    Zk = ["src"],
    qk = ["innerHTML"],
    Kk = b("div", {
        class: "linear-border bottom-[-1px]"
    }, null, -1),
    jk = st({
        __name: "ValidatorFunction",
        setup(r) {
            const t = [{
                img: Fk,
                title: "Decentralization<br /> Kickoff"
            }, {
                img: $k,
                title: "Expansion and<br /> Growth"
            }, {
                img: zk,
                title: "Ecosystem<br /> Development"
            }, {
                img: Hk,
                title: "Security and<br /> Scalability"
            }, {
                img: Gk,
                title: "Attracting Authentic<br /> Contributions"
            }];
            return (e, i) => (B(), N("div", Vk, [Wk, Uk, b("div", Yk, [(B(), N(nt, null, Mt(t, n => b("div", Xk, [b("img", {
                src: n.img,
                class: "h-[100px] md:h-[140px] relative top-[-24px]"
            }, null, 8, Zk), b("div", {
                innerHTML: n.title,
                class: "text-center"
            }, null, 8, qk), Kk])), 64))])]))
        }
    }),
    Qk = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 60 61"
    },
    Jk = b("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "M30 37.734c9.665 0 17.5-7.835 17.5-17.5s-7.835-17.5-17.5-17.5-17.5 7.835-17.5 17.5 7.835 17.5 17.5 17.5"
    }, null, -1),
    tE = b("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "M20.525 34.959 17.5 57.734l12.5-7.5 12.5 7.5-3.025-22.8"
    }, null, -1),
    eE = [Jk, tE];

function rE(r, t) {
    return B(), N("svg", Qk, [...eE])
}
const iE = {
        render: rE
    },
    nE = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 61 61"
    },
    aE = b("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "m37.52 35.734 12.5-12.5-12.5-12.5"
    }, null, -1),
    oE = b("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "M10.02 50.734v-17.5a10 10 0 0 1 10-10h30"
    }, null, -1),
    sE = [aE, oE];

function lE(r, t) {
    return B(), N("svg", nE, [...sE])
}
const uE = {
        render: lE
    },
    cE = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 61 61"
    },
    fE = b("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "M17.52 55.734h-7.5a5 5 0 0 1-5-5v-17.5a5 5 0 0 1 5-5h7.5m17.5-5v-10a7.5 7.5 0 0 0-7.5-7.5l-10 22.5v27.5h28.2a5 5 0 0 0 5-4.25l3.45-22.5a5 5 0 0 0-5-5.75z"
    }, null, -1),
    hE = [fE];

function vE(r, t) {
    return B(), N("svg", cE, [...hE])
}
const dE = {
        render: vE
    },
    pE = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 60 61"
    },
    gE = b("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "M35 5.234H15a5 5 0 0 0-5 5v40a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5v-30z"
    }, null, -1),
    mE = b("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "M35 5.234v15h15M40 32.734H20M40 42.734H20M25 22.734h-5"
    }, null, -1),
    _E = [gE, mE];

function yE(r, t) {
    return B(), N("svg", pE, [..._E])
}
const xE = {
        render: yE
    },
    wE = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 60 61"
    },
    bE = b("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "m30.01 5.234 7.725 15.65 17.275 2.525-12.5 12.175 2.95 17.2-15.45-8.125-15.45 8.125 2.95-17.2-12.5-12.175 17.275-2.525z"
    }, null, -1),
    SE = [bE];

function CE(r, t) {
    return B(), N("svg", wE, [...SE])
}
const TE = {
        render: CE
    },
    ME = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 61 61"
    },
    DE = b("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "M10.02 37.734s2.5-2.5 10-2.5 12.5 5 20 5 10-2.5 10-2.5v-30s-2.5 2.5-10 2.5-12.5-5-20-5-10 2.5-10 2.5zM10.02 55.234v-17.5"
    }, null, -1),
    AE = [DE];

function IE(r, t) {
    return B(), N("svg", ME, [...AE])
}
const LE = {
        render: IE
    },
    zm = r => (St("data-v-5d33bc94"), r = r(), Ct(), r),
    PE = {
        class: "overflow-hidden w-full max-w-7xl mx-auto relative px-5 md:px-0 mb-11 mt-48 md:mt-64"
    },
    kE = zm(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display"
    }, [b("div", null, "Benefits of Running Glacier Nodes")], -1)),
    EE = zm(() => b("div", {
        class: "text-sm md:text-base text-white/80 mt-4 text-center max-w-3xl mx-auto"
    }, " As the verifier nodes and worker nodes, you will play a pivotal role in shaping the future of Glacier Network. In recognition of your contributions, Glacier Network will promise the following: ", -1)),
    RE = {
        class: "grid md:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-14 mt-8"
    },
    OE = {
        class: "benefit-item"
    },
    BE = {
        class: "item-icon"
    },
    NE = {
        class: "text-lg md:text-2xl"
    },
    FE = st({
        __name: "ValidatorBenefits",
        setup(r) {
            const t = [{
                icon: xi(iE),
                title: "Mining Rewards"
            }, {
                icon: xi(uE),
                title: "Revenue Sharing"
            }, {
                icon: xi(dE),
                title: "Indexer Incentives"
            }, {
                icon: xi(xE),
                title: "Whitelist Candidate"
            }, {
                icon: xi(TE),
                title: "Ecosystem Rewards"
            }, {
                icon: xi(LE),
                title: "Governance Rights"
            }];
            return (e, i) => (B(), N("div", PE, [kE, EE, b("div", RE, [(B(), N(nt, null, Mt(t, n => b("div", OE, [b("div", BE, [(B(), qo(Xm(n.icon)))]), b("div", NE, Y(n.title), 1)])), 64))])]))
        }
    }),
    $E = ft(FE, [
        ["__scopeId", "data-v-5d33bc94"]
    ]),
    an = r => (St("data-v-1eccd874"), r = r(), Ct(), r),
    zE = {
        class: "px-5 backers-wrap flex flex-col items-center mt-36 md:mt-52"
    },
    HE = an(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display mt-6 linear-animate"
    }, [qt(" Apply for Now"), b("br"), qt(" Join the Revolution ")], -1)),
    GE = an(() => b("div", {
        class: "text-sm md:text-base text-white/80 mt-4 text-center max-w-3xl mx-auto"
    }, " We are advancing our vision in strategic stages, and are now beginning the recruitment of Glacier Network verifier nodes. Be sure to read the documentation, and submit your application. ", -1)),
    VE = {
        class: "flex flex-col md:flex-row items-center justify-center gap-3 mt-5 mb-24"
    },
    WE = {
        href: "https://node.glacier.io/",
        target: "_blank",
        class: "flex"
    },
    UE = an(() => b("span", null, "Run Your Nodes", -1)),
    YE = {
        href: "https://docs.glacier.io/getting-started/glacier-nodes/run-mainnet-nodes/nodes-portal-tutorial",
        target: "_blank",
        class: "flex"
    },
    XE = an(() => b("span", null, "Tutorial", -1)),
    ZE = an(() => b("div", {
        class: "text-center text-3xl md:text-5xl font-display px-10"
    }, " Key Backers Fueling Our Mission ", -1)),
    qE = an(() => b("div", {
        class: "flex flex-col w-full mt-12 md:mt-20 mb-44 px-5"
    }, [b("img", {
        src: Rd,
        class: "w-full max-w-[1278px] hidden md:block mx-auto"
    }), b("img", {
        src: Od,
        class: "w-full md:hidden"
    })], -1)),
    KE = st({
        __name: "ValidatorBackers",
        setup(r) {
            return (t, e) => (B(), N(nt, null, [b("div", zE, [HE, GE, b("div", VE, [b("a", WE, [U(Ft, {
                "show-icon": ""
            }, {
                default: kt(() => [UE]),
                _: 1
            })]), b("a", YE, [U(Ft, null, {
                default: kt(() => [XE]),
                _: 1
            })])])]), ZE, qE], 64))
        }
    }),
    jE = ft(KE, [
        ["__scopeId", "data-v-1eccd874"]
    ]),
    QE = st({
        __name: "Validator",
        setup(r) {
            return (t, e) => (B(), N(nt, null, [U(yk), U(Nk), U(jk), U($E), U(jE)], 64))
        }
    }),
    JE = "/assets/kucoin-CuYFHxhE.png",
    t4 = "/assets/gate-D6JT-rPx.png",
    e4 = "/assets/uniswap-DFtrUvgV.png",
    r4 = "/assets/aerodrome-zRY_QkJw.png",
    i4 = "/assets/kcex-C81tl16W.png",
    n4 = "/assets/blynex-BWb3H7Gt.png",
    a4 = "/assets/1inch-1TKleV9V.png",
    o4 = "/assets/coingecko-8nFgo4i_.png",
    s4 = "/assets/coinmarket-gGRSftCO.png",
    Id = "/assets/dexscreener-BOD1RcV-.png",
    Jc = r => (St("data-v-502a4ef8"), r = r(), Ct(), r),
    l4 = {
        class: "banner-wrap"
    },
    u4 = Jc(() => b("div", {
        class: "text-center text-3xl md:text-[64px] leading-[1.1em] font-display mt-12"
    }, [b("div", null, "Glacier Network $GLS"), b("div", {
        class: "linear-text"
    }, "The Core of the Glacier Ecosystem")], -1)),
    c4 = Jc(() => b("div", {
        class: "text-center mt-3 text-white/80 text-sm md:text-xl px-5"
    }, " $GLS is currently listed and live on multiple networks, DEX and CEX. ", -1)),
    f4 = Jc(() => b("div", {
        class: "banner-bg"
    }, null, -1)),
    h4 = {
        class: "w-full max-w-7xl mx-auto grid lg:grid-cols-3 gap-4 mt-24 lg:mt-64 lg:pt-36 px-5"
    },
    v4 = ["href"],
    d4 = ["src"],
    p4 = ["innerHTML"],
    g4 = st({
        __name: "BuyGls",
        setup(r) {
            const t = [{
                icon: e4,
                title: "Uniswap v3<br />(Ethereum)",
                link: "https://app.uniswap.org/swap?outputCurrency=0x68e2e5c9dff32419a108713f83274a4fb5e194ca"
            }, {
                icon: JE,
                title: "KuCoin",
                link: "https://www.kucoin.com/trade/GLS-USDT"
            }, {
                icon: t4,
                title: "Gate.io",
                link: "https://www.gate.io/zh/trade/GLS_USDT"
            }, {
                icon: r4,
                title: "Aerodrome<br />Finance",
                link: "https://aerodrome.finance/swap?from=eth&to=0xe898bcd00b86a3eae43914319d2d4460230f735c"
            }, {
                icon: i4,
                title: "KCEX",
                link: "https://www.kcex.com/exchange/GLS_USDT"
            }, {
                icon: n4,
                title: "Blynex",
                link: "https://blynex.com/spot/GLS_USDT"
            }, {
                icon: a4,
                title: "1inch",
                link: "https://app.1inch.io/#/1/simple/swap/1:ETH/1:GLS"
            }, {
                icon: s4,
                title: "Coinmarketcap",
                link: "https://coinmarketcap.com/currencies/glacier-network"
            }, {
                icon: o4,
                title: "Coingecko",
                link: "https://www.coingecko.com/en/coins/glacier-network"
            }, {
                icon: Id,
                title: "Dexscreener<br />(Base)",
                link: "https://dexscreener.com/base/0x615c3c7bf39fcf6a3dec5bdeb30a21c0b037b066"
            }, {
                icon: Id,
                title: "Dexscreener (Ethereum)",
                link: "https://dexscreener.com/ethereum/0x9b146ea3ac0d33e1682d64b92725797c8111e606"
            }];
            return (e, i) => (B(), N("div", l4, [u4, c4, f4, b("div", h4, [(B(), N(nt, null, Mt(t, n => b("a", {
                href: n.link,
                target: "_blank",
                class: "flex items-center gap-10 lg:gap-5 bg-white/5 backdrop-blur-xl border border-white/5 p-5 lg:p-[45px] rounded-xl lg:rounded-[40px] hover:bg-white/10"
            }, [b("img", {
                src: n.icon,
                class: "w-14 lg:w-[100px]"
            }, null, 8, d4), b("div", {
                innerHTML: n.title,
                class: "text-xl lg:text-3xl font-normal"
            }, null, 8, p4)], 8, v4)), 64))])]))
        }
    }),
    m4 = ft(g4, [
        ["__scopeId", "data-v-502a4ef8"]
    ]),
    _4 = [{
        path: "/",
        component: _1
    }, {
        path: "/bnb",
        component: G1
    }, {
        path: "/ar",
        component: h2
    }, {
        path: "/filecoin",
        component: Kw
    }, {
        path: "/ai",
        component: Mx
    }, {
        path: "/da",
        component: nw
    }, {
        path: "/eco",
        component: Mw
    }, {
        path: "/dashboard",
        component: ub
    }, {
        path: "/dashboard/:id",
        component: XP
    }, {
        path: "/chatai",
        redirect: "/"
    }, {
        path: "/nodes",
        component: QE
    }, {
        path: "/buygls",
        component: m4
    }],
    y4 = r_({
        history: i_(),
        routes: _4,
        scrollBehavior() {
            return {
                top: 0
            }
        }
    });
location.pathname === "/points" && (location.href = "/points/");
const Hm = Zm(s_);
Hm.use(y4);
Hm.mount("#app");