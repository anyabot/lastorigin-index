(this["webpackJsonplastorigin-index"] = this["webpackJsonplastorigin-index"] || []).push([
    [0], {
        12: function(e, t, a) {
            e.exports = a(21)
        },
        19: function(e, t, a) {},
        20: function(e, t, a) {},
        21: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                l = a.n(n),
                s = a(9),
                i = a.n(s);

            function c(e) {
                return new Promise((function(t, a) {
                    var n = new XMLHttpRequest;
                    n.open("GET", e), n.responseType = "json", n.onreadystatechange = function() {
                        n.readyState === XMLHttpRequest.DONE && 200 === n.status && t(n.response)
                    }, n.send()
                }))
            }

            function r(e) {
                return new Promise((function(t) {
                    c("./data/data-enemy.json").then((function(a) {
                        var n = a[e];
                        t(n)
                    }))
                }))
            }

            function o(e) {
                for (var t = window.location.search.substring(1).split("&"), a = 0; a < t.length; a++) {
                    var n = t[a].split("=");
                    if (n[0] === e) return n[1]
                }
            }
            var m = a(10),
                u = a(1),
                d = a(7),
                p = a.n(d),
                h = a(11),
                v = a(2),
                E = a(3),
                g = a(5),
                y = a(4),
                f = a(6),
                x = a(18),
                S = function(e) {
                    function t() {
                        var e, a;
                        Object(v.a)(this, t);
                        for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
                        return (a = Object(g.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(l)))).state = {
                            showSearchResult: !1,
                            showIndexResult: !1,
                            SearchList: null,
                            ResultListStyle: null,
                            IndexResultListStyle: null,
                            ContainerStyle: null
                        }, a.NameList = null, a.isResultClosing = !1, a.isSearchResultClosed = !0, a.updateSearchList = function(e, t) {
                            if (e.showSearchResult = !0, e.showIndexResult = !1, t.length > 0) {
                                var n = new x.Searcher(t),
                                    l = Object.keys(a.NameList).reduce((function(e, t) {
                                        return -1 !== n.search(t) && e.push([t, n.search(t)]), e
                                    }), []).sort((function(e, t) {
                                        return e[1] < t[1] ? -1 : e[1] > t[1] ? 1 : e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
                                    })).map((function(e) {
                                        return e[0]
                                    }));
                                e.SearchList = l
                            } else e.SearchList = Object.keys(a.NameList)
                        }, a.openResultList = function(e) {
                            if (console.log("openResultList"), e.showSearchResult = !0, !matchMedia("(min-width: 1100px)").matches) {
                                var t = document.querySelector(".list").scrollHeight + "px";
                                e.ResultListStyle = Object(u.a)({}, a.state.ResultListStyle, {
                                    maxHeight: t
                                })
                            }
                        }, a.closeResultList = function(e) {
                            console.log("closeResultList"), e.showSearchResult = !1, matchMedia("(min-width: 1100px)").matches || (e.ResultListStyle = Object(u.a)({}, a.state.ResultListStyle, {
                                maxHeight: null
                            }), a.isResultClosing = !0)
                        }, a.openIndexResultList = function(e, t) {
                            if (console.log("openIndexResultList"), e.showIndexResult = t, matchMedia("(min-width: 1100px)").matches) {
                                e.IndexResultListStyle = Object(u.a)({}, a.state.IndexResultListStyle, {
                                    maxWidth: "230px",
                                    opacity: 1
                                })
                            } else {
                                var n = document.querySelector("#" + t).scrollHeight + "px",
                                    l = document.querySelector(".list").scrollHeight + document.querySelector("#" + t).scrollHeight + "px";
                                e.IndexResultListStyle = Object(u.a)({}, a.state.IndexResultListStyle, {
                                    maxHeight: n
                                }), e.ResultListStyle = Object(u.a)({}, a.state.IndexResultListStyle, {
                                    maxHeight: l
                                })
                            }
                        }, a.closeIndexResultList = function(e) {
                            console.log("closeIndexResultList"), e.showIndexResult = !1, matchMedia("(min-width: 1100px)").matches ? e.IndexResultListStyle = Object(u.a)({}, a.state.IndexResultListStyle, {
                                maxWidth: null,
                                opacity: null
                            }) : e.IndexResultListStyle = Object(u.a)({}, a.state.IndexResultListStyle, {
                                maxHeight: null
                            })
                        }, a.handleResultsToggleClick = function() {
                            document.querySelector(".navbar-input").value = null;
                            var e = {};
                            a.state.showSearchResult ? a.closeResultList(e) : a.openResultList(e), a.setState((function(t) {
                                return Object(u.a)({}, t, {}, e)
                            }))
                        }, a.handleInputFocus = function() {
                            console.log("handleInputFocus");
                            var e = {};
                            a.openResultList(e), a.setState((function(t) {
                                return Object(u.a)({}, t, {}, e)
                            }))
                        }, a.handleInputChange = function(e) {
                            console.log("handleInputChange");
                            var t = {};
                            a.updateSearchList(t, e.target.value), a.closeIndexResultList(t), window.scrollTo(0, 0), a.setState((function(e) {
                                return Object(u.a)({}, e, {}, t)
                            }))
                        }, a.handleResultsClick = function(e, t) {
                            var n = {};
                            a.state.showIndexResult && a.closeIndexResultList(n), t !== a.state.showIndexResult && a.openIndexResultList(n, t), a.setState((function(e) {
                                return Object(u.a)({}, e, {}, n)
                            }))
                        }, a.handleIndexResultsClick = function(e, t) {
                            a.props.onEnemyChange(e);
                            var n = {};
                            a.closeResultList(n), document.querySelector(".navbar-input").value = null, matchMedia("(min-width: 1100px)").matches && (a.openIndexResultList(n, a.state.showIndexResult), n.SearchList = Object.keys(a.NameList)), a.isResultClosing = !0, a.setState((function(e) {
                                return Object(u.a)({}, e, {}, n)
                            }))
                        }, a.scrollToIndex = function(e) {
                            window.scrollTo(0, 50 * Object.values(a.NameList).map((function(e) {
                                return e[0]
                            })).indexOf(e))
                        }, a.resetSearchResult = function() {
                            if (console.log("resetSearchResult"), !matchMedia("(min-width: 1100px)").matches && a.isResultClosing) {
                                a.isResultClosing = !1;
                                var e = {};
                                a.closeIndexResultList(e), a.setState((function(t) {
                                    return Object(u.a)({}, t, {}, e, {
                                        showSearchResult: !1,
                                        showIndexResult: !1,
                                        SearchList: Object.keys(a.NameList)
                                    })
                                }))
                            }
                        }, a
                    }
                    return Object(f.a)(t, e), Object(E.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            ! function() {
                                var t;
                                p.a.async((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, p.a.awrap(new Promise((function(e) {
                                                c("./data/data-enemy.json").then((function(t) {
                                                    e(t)
                                                }))
                                            })));
                                        case 2:
                                            t = a.sent, e.NameList = Object.keys(t).reduce((function(e, a) {
                                                return Object.keys(e).includes(t[a].name) ? e[t[a].name].push(a) : e[t[a].name] = [a], e
                                            }), {}), e.setState((function(t) {
                                                return Object(u.a)({}, t, {
                                                    showSearchResult: !1,
                                                    showIndexResult: !1,
                                                    SearchList: Object.keys(e.NameList)
                                                })
                                            }));
                                        case 5:
                                        case "end":
                                            return a.stop()
                                    }
                                }))
                            }()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            matchMedia("(min-width: 1100px)").matches && this.isResultClosing && (this.scrollToIndex(this.state.showIndexResult), this.isResultClosing = !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return console.log("renderNavBar"), l.a.createElement("div", {
                                className: "nav"
                            }, l.a.createElement("div", {
                                className: "navbar"
                            }, l.a.createElement("div", {
                                className: "navbar-button",
                                onClick: this.handleResultsToggleClick
                            }, l.a.createElement("i", {
                                className: "material-icons material-icons-list",
                                style: this.state.showSearchResult ? {
                                    opacity: 0
                                } : null
                            }, "list"), l.a.createElement("i", {
                                className: "material-icons material-icons-close",
                                style: this.state.showSearchResult ? null : {
                                    opacity: 0
                                }
                            }, "close")), l.a.createElement("input", {
                                type: "text",
                                className: "navbar-input",
                                placeholder: "\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694.",
                                onFocus: this.handleInputFocus,
                                onChange: this.handleInputChange
                            }), l.a.createElement("div", {
                                className: "navbar-input-icon"
                            }, l.a.createElement("i", {
                                className: "material-icons"
                            }, "search"))), l.a.createElement(b, {
                                SearchList: this.state.SearchList,
                                NameList: this.NameList,
                                handleResultsClick: this.handleResultsClick,
                                handleIndexResultsClick: this.handleIndexResultsClick,
                                resetSearchResult: this.resetSearchResult,
                                ResultListStyle: this.state.ResultListStyle,
                                showIndexResult: this.state.showIndexResult,
                                IndexResultListStyle: this.state.IndexResultListStyle
                            }))
                        }
                    }]), t
                }(l.a.Component),
                b = function(e) {
                    function t() {
                        return Object(v.a)(this, t), Object(g.a)(this, Object(y.a)(t).apply(this, arguments))
                    }
                    return Object(f.a)(t, e), Object(E.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = null == this.props.SearchList ? [] : this.props.SearchList.reduce((function(t, a) {
                                    var n = a,
                                        s = e.props.NameList[a],
                                        i = s[0];
                                    return t.value.push(l.a.createElement("div", {
                                        className: "list-result-container",
                                        key: i + "container",
                                        id: i + "container"
                                    }, l.a.createElement("li", {
                                        className: "list-result",
                                        key: i,
                                        onClick: function() {
                                            e.props.handleResultsClick(n, i)
                                        }
                                    }, n), l.a.createElement("ul", {
                                        className: "list list-index",
                                        id: i,
                                        key: i + "indexlist",
                                        style: i === e.props.showIndexResult ? e.props.IndexResultListStyle : null
                                    }, s.reduce((function(t, a) {
                                        return t.index++, t.value.push(l.a.createElement("li", {
                                            className: "list-result list-indexresult",
                                            key: a,
                                            onClick: function() {
                                                e.props.handleIndexResultsClick(a, i)
                                            }
                                        }, n + " " + t.index)), t
                                    }), {
                                        index: 0,
                                        value: []
                                    }).value))), t.index++, t
                                }), {
                                    value: [],
                                    index: 0
                                }).value;
                            return l.a.createElement("ul", {
                                className: "list",
                                style: this.props.ResultListStyle,
                                onTransitionEnd: this.props.resetSearchResult
                            }, t)
                        }
                    }]), t
                }(l.a.Component),
                N = S,
                k = function(e) {
                    function t() {
                        return Object(v.a)(this, t), Object(g.a)(this, Object(y.a)(t).apply(this, arguments))
                    }
                    return Object(f.a)(t, e), Object(E.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.tooltipdata.base,
                                t = this.props.tooltipdata.increment;
                            return this.props.isStatExpanded ? l.a.createElement(n.Fragment, null, this.props.children, l.a.createElement("div", {
                                className: "tooltip-innertext tooltip-innertext-expanded"
                            }, " ", e, " + ", t, " / Lv")) : l.a.createElement("div", {
                                className: "tooltip tooltip-stat"
                            }, this.props.children, l.a.createElement("div", {
                                className: "tooltip-innertext tooltip-innertext-right"
                            }, "\uae30\ubcf8: ", e, l.a.createElement("br", null), "\ub808\ubca8\ub2f9 \uc99d\uac00\ub7c9: ", t))
                        }
                    }]), t
                }(l.a.Component),
                L = function(e) {
                    function t() {
                        var e, a;
                        Object(v.a)(this, t);
                        for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
                        return (a = Object(g.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(l)))).state = {
                            isStatExpanded: !1
                        }, a.toggleExpandStat = function() {
                            a.setState((function(e) {
                                return Object(u.a)({}, e, {
                                    isStatExpanded: !0 ^ e.isStatExpanded
                                })
                            }))
                        }, a.calcLvlValue = function(e, t) {
                            return Math.floor(e.base + e.increment * (t - 1))
                        }, a.handleLvlPlus = function() {
                            a.props.onLvlChange("+")
                        }, a.handleLvlMinus = function() {
                            a.props.onLvlChange("-")
                        }, a.handleLvlChange = function(e) {
                            a.props.onLvlChange(e.target.value)
                        }, a
                    }
                    return Object(f.a)(t, e), Object(E.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.data,
                                t = e.enemyData,
                                a = e.lvl;
                            return l.a.createElement("div", {
                                className: "info-container"
                            }, l.a.createElement("div", {
                                className: "image"
                            }, l.a.createElement("img", {
                                src: "images/profile/" + t.img + ".png",
                                alt: t.img
                            })), l.a.createElement("div", {
                                className: "type"
                            }, l.a.createElement("h4", {
                                id: "type"
                            }, t.type)), l.a.createElement("div", {
                                className: "name"
                            }, l.a.createElement("h2", {
                                id: "name"
                            }, t.name)), l.a.createElement("div", {
                                className: "LVL"
                            }, l.a.createElement("button", {
                                className: "lvl-change lvl-minus",
                                onClick: this.handleLvlMinus
                            }, l.a.createElement("i", {
                                className: "material-icons"
                            }, "remove")), l.a.createElement("div", null, l.a.createElement("input", {
                                className: "lvl-header",
                                type: "text",
                                value: "Lv.",
                                readOnly: !0
                            }), l.a.createElement("div", {
                                className: "tooltip"
                            }, l.a.createElement("input", {
                                className: "lvl-input",
                                type: "text",
                                value: a,
                                onChange: this.handleLvlChange
                            }), l.a.createElement("div", {
                                className: "tooltip-innertext tooltip-innertext-bottom"
                            }, "\uac12\uc744 \uc9c1\uc811 \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"))), l.a.createElement("button", {
                                className: "lvl-change lvl-plus",
                                onClick: this.handleLvlPlus
                            }, l.a.createElement("i", {
                                className: "material-icons"
                            }, "add"))), l.a.createElement("div", {
                                className: "spec-wrap"
                            }, l.a.createElement("div", {
                                className: "spec-item spec-item-header",
                                id: "HP"
                            }, l.a.createElement("img", {
                                src: "images/icon_HP2.png",
                                alt: "HP Icon"
                            }), l.a.createElement("div", null, "HP")), l.a.createElement("div", {
                                className: "spec-item",
                                id: "HP"
                            }, l.a.createElement(k, {
                                tooltipdata: t.HP,
                                isStatExpanded: this.state.isStatExpanded
                            }, l.a.createElement("span", {
                                className: "tooltip-text",
                                onClick: this.toggleExpandStat
                            }, this.calcLvlValue(t.HP, a)))), l.a.createElement("div", {
                                className: "spec-item spec-item-header"
                            }), l.a.createElement("div", {
                                className: "spec-item"
                            }), l.a.createElement("div", {
                                className: "spec-item spec-item-header"
                            }, l.a.createElement("img", {
                                src: "images/icon_ATK2.png",
                                alt: "ATK Icon"
                            }), l.a.createElement("div", null, "\uacf5\uaca9\ub825")), l.a.createElement("div", {
                                className: "spec-item",
                                id: "ATK"
                            }, l.a.createElement(k, {
                                tooltipdata: t.ATK,
                                isStatExpanded: this.state.isStatExpanded
                            }, l.a.createElement("span", {
                                className: "tooltip-text",
                                onClick: this.toggleExpandStat
                            }, this.calcLvlValue(t.ATK, a)))), l.a.createElement("div", {
                                className: "spec-item spec-item-header"
                            }, l.a.createElement("img", {
                                src: "images/icon_CRT2.png",
                                alt: "CRT Icon"
                            }), l.a.createElement("div", null, "\uce58\uba85\ud0c0")), l.a.createElement("div", {
                                className: "spec-item",
                                id: "CRT"
                            }, t.CRT, " %"), l.a.createElement("div", {
                                className: "spec-item spec-item-header"
                            }, l.a.createElement("img", {
                                src: "images/icon_DEF2.png",
                                alt: "DEF Icon"
                            }), l.a.createElement("div", null, "\ubc29\uc5b4\ub825")), l.a.createElement("div", {
                                className: "spec-item",
                                id: "DEF"
                            }, l.a.createElement(k, {
                                tooltipdata: t.DEF,
                                isStatExpanded: this.state.isStatExpanded
                            }, l.a.createElement("span", {
                                className: "tooltip-text",
                                onClick: this.toggleExpandStat
                            }, this.calcLvlValue(t.DEF, a)))), l.a.createElement("div", {
                                className: "spec-item spec-item-header"
                            }, l.a.createElement("img", {
                                src: "images/icon_HIT2.png",
                                alt: "HIT Icon"
                            }), l.a.createElement("div", null, "\uc801\uc911\ub960")), l.a.createElement("div", {
                                className: "spec-item",
                                id: "HIT"
                            }, t.HIT, " %"), l.a.createElement("div", {
                                className: "spec-item spec-item-header"
                            }, l.a.createElement("img", {
                                src: "images/icon_AGI.png",
                                alt: "AGI Icon"
                            }), l.a.createElement("div", null, "\ud589\ub3d9\ub825")), l.a.createElement("div", {
                                className: "spec-item",
                                id: "AGI"
                            }, t.AGI), l.a.createElement("div", {
                                className: "spec-item spec-item-header"
                            }, l.a.createElement("img", {
                                src: "images/icon_DOD2.png",
                                alt: "DOD Icon"
                            }), l.a.createElement("div", null, "\ud68c\ud53c\uc728")), l.a.createElement("div", {
                                className: "spec-item",
                                id: "DOD"
                            }, t.DOD, " %"), l.a.createElement("div", {
                                className: "spec-item resist-wrap"
                            }, l.a.createElement("div", {
                                className: "spec-item resist resist-header"
                            }, "\uc18d\uc131 \uc800\ud56d"), l.a.createElement("div", {
                                className: "spec-item resist",
                                id: "fire"
                            }, l.a.createElement("img", {
                                className: "icon-attr",
                                src: "images/fire.png",
                                alt: "fireicon"
                            }), " ", t.resist[0], " %"), l.a.createElement("div", {
                                className: "spec-item resist",
                                id: "ice"
                            }, l.a.createElement("img", {
                                className: "icon-attr",
                                src: "images/ice.png",
                                alt: "iceicon"
                            }), " ", t.resist[1], " %"), l.a.createElement("div", {
                                className: "spec-item resist",
                                id: "electric"
                            }, l.a.createElement("img", {
                                className: "icon-attr",
                                src: "images/electric.png",
                                alt: "electricicon"
                            }), " ", t.resist[2], " %"))))
                        }
                    }]), t
                }(l.a.Component),
                R = function(e) {
                    function t() {
                        var e, a;
                        Object(v.a)(this, t);
                        for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++) l[s] = arguments[s];
                        return (a = Object(g.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(l)))).state = {
                            displayedSkill: 0
                        }, a.displayedEnemyName = a.props.data.enemyData.name, a.changeDisplayedSkill = function(e) {
                            a.setState({
                                displayedSkill: e
                            })
                        }, a
                    }
                    return Object(f.a)(t, e), Object(E.a)(t, [{
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.data.enemyData.name !== this.displayedEnemyName && (this.displayedEnemyName = this.props.data.enemyData.name, this.setState({
                                displayedSkill: 0
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state.displayedSkill,
                                a = this.props.data,
                                n = a.enemyData,
                                s = a.skillData,
                                i = a.lvl,
                                c = s.map((function(a, n) {
                                    return l.a.createElement("button", {
                                        className: "btn skill-".concat(a.type, " ").concat(t === n ? "active" : ""),
                                        key: "skillbtn" + n,
                                        onClick: function() {
                                            return e.changeDisplayedSkill(n)
                                        }
                                    }, l.a.createElement("img", {
                                        className: "skill-icon",
                                        src: "images/SkillIcon/".concat(a.img, "_").concat(a.type, ".png"),
                                        alt: "".concat(a.img, "_").concat(a.type, " icon")
                                    }))
                                }));
                            c.push(l.a.createElement("button", {
                                className: "btn btn-info skill-active ".concat(t === s.length ? "active" : ""),
                                key: "skillinfobtn",
                                onClick: function() {
                                    return e.changeDisplayedSkill(s.length)
                                }
                            }, l.a.createElement("img", {
                                className: "skill-icon info-icon",
                                src: "images/info.png",
                                alt: "info icon"
                            })));
                            var r = "skill-nav-wrap skill-active";
                            return t < s.length && (r = "skill-nav-wrap skill-" + s[t].type), l.a.createElement("div", {
                                className: "skill-container"
                            }, l.a.createElement("div", {
                                className: "skill-header"
                            }, l.a.createElement("h3", null, "\ubcf4\uc720 \uc2a4\ud0ac")), l.a.createElement("div", {
                                className: r
                            }, l.a.createElement("nav", {
                                className: "skill-nav"
                            }, c)), t < s.length ? l.a.createElement(O, {
                                skilldata: s[t],
                                ATK: n.ATK,
                                lvl: i
                            }) : l.a.createElement(I, {
                                enemyInfo: n.info
                            }))
                        }
                    }]), t
                }(l.a.Component),
                O = function(e) {
                    function t() {
                        return Object(v.a)(this, t), Object(g.a)(this, Object(y.a)(t).apply(this, arguments))
                    }
                    return Object(f.a)(t, e), Object(E.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.skilldata,
                                t = this.props.ATK.base + this.props.ATK.increment * (this.props.lvl - 1),
                                a = "normal";
                            void 0 !== e.attr && (a = e.attr);
                            var n = "";
                            if (null != e.description.match(/\$\((\d+\.*\d*)\)/)) {
                                var s = e.description.match(/\$\((\d+\.*\d*)\)/)[1];
                                (n = Math.floor(t * s)) < 1 && (n = 1)
                            }
                            var i = [];
                            if (e.areadata.some((function(e) {
                                    return e < 1
                                })))
                                for (var c = 0; c < 9; c++) {
                                    var r = [255, Math.round(170 * (e.areadata[c] - .5) + 128), 0];
                                    0 === e.areadata[c] && (r = [45, 45, 45]), i[c] = {
                                        backgroundColor: "rgb(".concat(r, ")")
                                    }
                                } else
                                    for (var o = 0; o < e.areadata.length; o++) i[e.areadata[o] - 1] = {
                                        backgroundColor: "rgb(255, 213, 0)"
                                    };
                            return l.a.createElement("div", {
                                className: "skillview-container"
                            }, l.a.createElement("div", {
                                className: "skill-name"
                            }, l.a.createElement("img", {
                                className: "icon-attr",
                                src: "images/" + a + ".png",
                                alt: a + " icon"
                            }), l.a.createElement("h5", null, " Lv. 1"), " ", l.a.createElement("h3", null, " ", e.name, " ")), l.a.createElement("div", {
                                className: "skill-area"
                            }, l.a.createElement("table", null, l.a.createElement("tbody", null, l.a.createElement("tr", null, l.a.createElement("td", {
                                style: i[6]
                            }), l.a.createElement("td", {
                                style: i[7]
                            }), l.a.createElement("td", {
                                style: i[8]
                            })), l.a.createElement("tr", null, l.a.createElement("td", {
                                style: i[3]
                            }), l.a.createElement("td", {
                                style: i[4]
                            }), l.a.createElement("td", {
                                style: i[5]
                            })), l.a.createElement("tr", null, l.a.createElement("td", {
                                style: i[0]
                            }), l.a.createElement("td", {
                                style: i[1]
                            }), l.a.createElement("td", {
                                style: i[2]
                            }))))), l.a.createElement("div", {
                                className: "skill-description"
                            }, l.a.createElement("p", null, e.description.replace(/\$\((\d+\.*\d*)\)/g, n + " ($1\ubc30)").split("<br>").map((function(e, t) {
                                return l.a.createElement("span", {
                                    key: t
                                }, e, l.a.createElement("br", null))
                            })))), l.a.createElement("div", {
                                className: "skill-range"
                            }, "\uc0ac\uc815\uac70\ub9ac ", e.range, l.a.createElement("br", null), "AP-", e.AP))
                        }
                    }]), t
                }(l.a.Component),
                I = function(e) {
                    function t() {
                        return Object(v.a)(this, t), Object(g.a)(this, Object(y.a)(t).apply(this, arguments))
                    }
                    return Object(f.a)(t, e), Object(E.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement("div", {
                                className: "skillview-container info-description"
                            }, l.a.createElement("h3", null, "\ub300\uc0c1 \uc815\ubcf4"), l.a.createElement("p", null, this.props.enemyInfo.split("<br>").map((function(e, t) {
                                return l.a.createElement("span", {
                                    key: t
                                }, e, l.a.createElement("br", null))
                            }))))
                        }
                    }]), t
                }(l.a.Component),
                j = R,
                w = (a(19), function(e) {
                    function t(e) {
                        var a;
                        return Object(v.a)(this, t), console.log("constructor"), (a = Object(g.a)(this, Object(y.a)(t).call(this, e))).state = {
                            enemyIndex: null,
                            lvl: null,
                            enemyData: null,
                            skillData: null,
                            SpottedStage: null,
                            isStageExpanded: !1
                        }, a.loadData = function(e) {
                            var t, n, l, s;
                            return p.a.async((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, p.a.awrap(r(e));
                                    case 2:
                                        return t = i.sent, i.next = 5, p.a.awrap(new Promise((function(e) {
                                            c("./data/data-skill.json").then((function(t) {
                                                e(t)
                                            }))
                                        })));
                                    case 5:
                                        n = i.sent, l = a.state.lvl || a.props.enemyLVL, s = new Map, a.areadatalist.forEach((function(t) {
                                            var a, n = t.stage.filter((function(t) {
                                                return t.wave.some((function(t) {
                                                    return t.enemylist.some((function(t) {
                                                        return t.index === e
                                                    }))
                                                }))
                                            })).map((function(e) {
                                                var t = {
                                                    title: e.title
                                                };
                                                return "name" in e && (t.name = e.name), t
                                            }));
                                            n.length > 0 && (t.title.includes("Daily") ? s.has("Daily") ? (a = s.get("Daily")).push.apply(a, Object(h.a)(n)) : s.set("Daily", n) : s.set(t.title, n))
                                        })), a.setState({
                                            enemyIndex: e,
                                            enemyData: t,
                                            lvl: parseInt(l),
                                            skillData: t.skills.map((function(e) {
                                                return n[e]
                                            })),
                                            SpottedStage: s
                                        });
                                    case 10:
                                    case "end":
                                        return i.stop()
                                }
                            }))
                        }, a.loadAreaData = function(e) {
                            var t;
                            return p.a.async((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return t = ["1", "2", "3", "4", "5", "6", "Daily1", "Daily2", "Daily3", "Ev11", "Ev21", "Ev22", "Ev23", "Ev31", "Ev41", "Ev51", "Ev52", "Ev61", "Ev62"], n.next = 3, p.a.awrap(Promise.all(t.map((function(e) {
                                            return t = e, new Promise((function(e, a) {
                                                c("data/data-area" + t + ".json").then((function(t) {
                                                    return e(t)
                                                }), (function() {
                                                    return a()
                                                }))
                                            }));
                                            var t
                                        }))));
                                    case 3:
                                        a.areadatalist = n.sent, a.loadData(e);
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }))
                        }, a.handleLvlChange = function(e) {
                            var t = a.state.lvl;
                            "+" === e ? t++ : "-" === e ? t > 1 && t-- : t = parseInt(0 === e.length || e < 1 ? 1 : e), a.setState((function(e) {
                                return Object(u.a)({}, e, {
                                    lvl: t
                                })
                            }))
                        }, a.handleEnemyChange = function(e) {
                            a.loadData(e)
                        }, a.toggleExpandStage = function() {
                            a.setState((function(e) {
                                return Object(u.a)({}, e, {
                                    isStageExpanded: !0 ^ e.isStageExpanded
                                })
                            }))
                        }, a.trackScrolling = function() {
                            var e = document.querySelector(".content");
                            a.isBottom(e) && (console.log("header bottom reached"), document.removeEventListener("scroll", a.trackScrolling))
                        }, a.loadAreaData(a.props.enemyIndex), a
                    }
                    return Object(f.a)(t, e), Object(E.a)(t, [{
                        key: "isBottom",
                        value: function(e) {
                            return e.getBoundingClientRect().bottom <= window.innerHeight
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            console.log("componentDidMount"), document.addEventListener("scroll", this.trackScrolling)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            console.log("componentDidUpdate")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return console.log("renderApp"), null == this.state.enemyData ? l.a.createElement("div", null, "Loading...") : l.a.createElement("div", {
                                className: "container"
                            }, l.a.createElement("div", {
                                className: "nav-container"
                            }, l.a.createElement(N, {
                                onEnemyChange: this.handleEnemyChange
                            })), l.a.createElement("div", {
                                className: "content-container"
                            }, l.a.createElement("div", {
                                className: "content"
                            }, l.a.createElement(L, {
                                data: this.state,
                                onLvlChange: this.handleLvlChange
                            }), l.a.createElement(j, {
                                data: this.state,
                                index: this.props.enemyIndex
                            }), l.a.createElement(C, {
                                SpottedStage: this.state.SpottedStage,
                                isStageExpanded: this.state.isStageExpanded,
                                toggleExpandStage: this.toggleExpandStage
                            }))))
                        }
                    }]), t
                }(l.a.Component)),
                C = function(e) {
                    return l.a.createElement("div", {
                        className: "stage"
                    }, l.a.createElement("div", {
                        className: "stage-header",
                        onClick: e.toggleExpandStage
                    }, "\ub4f1\uc7a5 \uc2a4\ud14c\uc774\uc9c0", l.a.createElement("i", {
                        className: "material-icons"
                    }, e.isStageExpanded ? "expand_less" : "expand_more")), l.a.createElement("div", {
                        className: "stage-inner" + (e.isStageExpanded ? "" : " stage-inner-hidden")
                    }, 0 === e.SpottedStage.size ? l.a.createElement("table", {
                        key: "stagetable"
                    }, l.a.createElement("thead", null, l.a.createElement("tr", null, l.a.createElement("th", null, "\uc601\uc6d0\uc758 \uc804\uc7a5 (\uc5c5\ub370\uc774\ud2b8 \uc608\uc815)")))) : Array.from(e.SpottedStage, (function(e) {
                        var t = Object(m.a)(e, 2),
                            a = t[0],
                            n = t[1];
                        return l.a.createElement("table", {
                            key: a
                        }, l.a.createElement("thead", null, a.includes("Daily") ? "" : l.a.createElement("tr", null, l.a.createElement("th", {
                            colSpan: n.length
                        }, a + (isNaN(a) ? "" : "\uc9c0\uc5ed")))), l.a.createElement("tbody", null, l.a.createElement("tr", null, n.map((function(e) {
                            return l.a.createElement("td", {
                                key: e.title
                            }, l.a.createElement("a", {
                                href: "https://anyabot.github.io/stage.html?stagetitle=" + e.title
                            }, e.name || e.title))
                        })))))
                    }))))
                },
                D = w,
                T = (a(20), o("enemy") || "NightChick_N"),
                H = o("lvl") || 1;
            i.a.render(l.a.createElement(D, {
                enemyIndex: T,
                enemyLVL: H
            }), document.getElementById("root"))
        }
    },
    [
        [12, 1, 2]
    ]
]);
//# sourceMappingURL=main.7c5dd7d4.chunk.js.map