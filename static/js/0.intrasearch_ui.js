(this.webpackJsonpintrasearch_ui=this.webpackJsonpintrasearch_ui||[]).push([[0],{388:function(e,t,n){e.exports=n(445)},43:function(e,t,n){e.exports={url:"https://api.govwizely.com/v1/web_documents/search.json",apiKey:"FqEELAPpt-UDPBxpoo5onvku"}},440:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){},444:function(e,t,n){},445:function(e,t,n){"use strict";n.r(t);n(106),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(129),n(165),n(167),n(168),n(169),n(170),n(171),n(172),n(174),n(175),n(133),n(179),n(180),n(80),n(184),n(185),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(140),n(209),n(211),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(142),n(228),n(229),n(230),n(231),n(233),n(234),n(235),n(236),n(237),n(239),n(241),n(243),n(244),n(246),n(247),n(248),n(249),n(250),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(143),n(269),n(270),n(271),n(272),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(98),n(300),n(301),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(364),n(365),n(367),n(368),n(369),n(370),n(372),n(151),n(401),n(409),n(374);var a=n(0),r=n.n(a),o=n(102),s=n.n(o),c=n(41),i=n(37),u=n(57),l=n(382),h=n(23),p=n(58),g=n(67),f=n(52),m=n(53),y=n(55),E=n(54),d=n(68),b=n(56),v=n(387),O=n(20),j=n(43),k=n.n(j),S=n(104),_=n(383);function w(e){var t=O.parse(e),n=(t.q,Object(_.a)(t,["q"])),a={};return""!==Object.keys(n).toString()&&Object.entries(n).forEach((function(e){var t=Object(S.a)(e,2),n=t[0],r=t[1];return a[n]=r.split(",")})),a}var T=function(e,t,n){var a=function(e,t,n){var a=w(n);return a[e]&&a[e].includes(t)?a[e]=a[e].filter((function(e){return e!==t})):a[e]?a[e].push(t):a[e]=[t],0===a[e].length&&delete a[e],a}(e,t,n);return function(t){t({type:"LOADING_RESULTS"});var r=O.stringify(a,{arrayFormat:"comma"}),o=O.parse(n).q;return $.push({search:"q=".concat(o,"&").concat(r)}),fetch("".concat(k.a.url,"?q=").concat(o,"&").concat(r,"&api_key=").concat(k.a.apiKey,"&size=10&offset=0")).then((function(e){return e.json()})).then((function(n){return t(C("q=".concat(o,"&").concat(r),n,e))}))}},C=function(e,t,n){return function(a){var r=[];["trade_topics","industries","countries"].forEach((function(t){t===n&&Object.keys(w(e))!==[]&&w(e)[t]||(console.log("Updating ".concat(t,"!")),r.push(t))})),a({type:"FETCH_WITH_FILTERS",response:t}),r.forEach((function(e){a({type:"UPDATE_SOME_AGGREGATIONS",aggregations:t.aggregations,aggregation:e})}))}},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return document.querySelectorAll("input[type=checkbox]").forEach((function(e){return e.checked=!1})),function(n){return n({type:"LOADING_RESULTS"}),fetch("".concat(k.a.url).concat(e,"&api_key=").concat(k.a.apiKey,"&size=10&offset=").concat(10*(t-1))).then((function(e){return e.json()})).then((function(e){return n({type:"FETCH_NEW_QUERY",response:e})}))}},N=n(384),P=n.n(N),F=n(385),q=n.n(F),I=(n(439),n(440),Object(p.e)((function(e){return r.a.createElement("div",{className:"ResultsList"},r.a.createElement("p",{className:"totalMessage"},r.a.createElement("strong",null,e.total)," results"),e.results.map((function(e){var t=new Date(parseInt(e.changed)).toDateString();return r.a.createElement("div",{className:"anItem",key:e.id},r.a.createElement("a",{href:e.link},e.title),r.a.createElement("p",null,"Updated ",t),r.a.createElement("p",null,e.summary))})))}))),D=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(y.a)(this,Object(E.a)(t).call(this,e))).state={isChecked:!1},n.handleToggleFilter=n.handleToggleFilter.bind(Object(d.a)(n)),n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleToggleFilter",value:function(e){var t=this;e.preventDefault();var n=e.target,a=n.name,r=n.value;this.setState({isChecked:!this.state.isChecked},(function(){t.props.toggleFilter(a,r,t.props.location.search)}))}},{key:"componentDidMount",value:function(){w(this.props.location.search)[this.props.category]&&(w(this.props.location.search)[this.props.category].includes(this.props.item.key)?this.setState({isChecked:!0}):this.setState({isChecked:!1}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.key,a=t.category,o=t.item,s=o.key;return r.a.createElement("label",{key:n},r.a.createElement("input",{type:"checkbox",name:a,value:s,key:n,onChange:function(t){return e.handleToggleFilter(t)},checked:this.state.isChecked})," ",s,": ",o.doc_count)}}]),t}(a.Component),U=Object(p.e)(Object(i.b)(null,(function(e){return{toggleFilter:function(t,n,a){return e(T(t,n,a))}}}))(D));n(380);var R=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(y.a)(this,Object(E.a)(t).call(this,e))).state={showAll:!1},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"resetToggle",value:function(){this.setState({showAll:!1})}},{key:"componentDidUpdate",value:function(e,t){O.parse(this.props.location.search).q!==O.parse(e.location.search).q&&this.resetToggle()}},{key:"toggleShowAll",value:function(e){e.preventDefault(),this.setState({showAll:!this.state.showAll})}},{key:"toggleShowButton",value:function(e){var t=this,n=this.state.showAll?"- Show Less":"+ Show More";return e<=this.props.limit?null:r.a.createElement("button",{onClick:function(e){return t.toggleShowAll(e)},className:"toggleShow"},n)}},{key:"render",value:function(){var e=this;return r.a.createElement("details",{className:"FilterCategory",open:!0},r.a.createElement("summary",null,L[this.props.category]),this.props.items.length>this.props.limit&&!this.state.showAll?this.props.items.sort((function(e,t){return e.key>t.key?1:-1})).slice(0,this.props.limit).map((function(t,n){return r.a.createElement(U,{key:n,category:e.props.category,item:t})})):this.props.items.sort((function(e,t){return e.key>t.key?1:-1})).map((function(t,n){return r.a.createElement(U,{key:n,category:e.props.category,item:t})})),this.toggleShowButton(this.props.items.length))}}]),t}(a.Component),G=Object(p.e)(R),L={trade_topics:"Trade Topics",industries:"Industries",countries:"Countries"};n(442);n(380);var Q=Object(p.e)(Object(i.b)((function(e){return{resultState:e.resultState}}),(function(e){return{clearFilters:function(t){return e(function(e){return document.querySelectorAll("input[type=checkbox]").forEach((function(e){return e.checked=!1})),$.push({search:"q=".concat(e)}),function(t){return fetch("".concat(k.a.url,"?q=").concat(e,"&api_key=").concat(k.a.apiKey,"&size=10&offset=0")).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_NEW_QUERY",response:e})}))}}(t))}}}))((function(e){return r.a.createElement("div",{className:"FiltersContainer"},e.aggregations!=={}?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Filter Results"),r.a.createElement("button",{onClick:function(){e.clearFilters(O.parse(e.location.search).q)}},"[Clear All]")),function(){var t=[];return Object.entries(e.aggregations).forEach((function(e){var n=Object(S.a)(e,2),a=n[0];return n[1],t.push(a)})),t}().map((function(t,n){if(e.aggregations[t].length)return r.a.createElement(G,{category:t,key:n,items:e.aggregations[t],limit:5})}))):null)}))),x=(n(443),function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(y.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).getQueryTerm=function(){return O.parse(n.props.location.search).q},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handlePageChange",value:function(e){this.props.fetchNewPage(this.props.location.search,e)}},{key:"componentDidMount",value:function(){this.props.fetchNewQuery(this.props.location.search,this.props.resultState.activePage)}},{key:"componentDidUpdate",value:function(e,t){O.parse(this.props.location.search).q!==O.parse(e.location.search).q&&this.props.fetchNewQuery(this.props.location.search,this.props.resultState.activePage)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ResultsContainer"},r.a.createElement(Q,{aggregations:this.props.resultState.aggregations}),r.a.createElement(q.a,{type:"text",showLoadingAnimation:!0,ready:!this.props.resultState.loading,rows:6,style:{width:250,margin:"2em 0 0.5em 1em"},color:"#E0E0E0"},r.a.createElement(I,{searchQuery:this.getQueryTerm(),total:this.props.resultState.total,results:this.props.resultState.results})),this.props.resultState.total>0?r.a.createElement(P.a,{activePage:this.props.resultState.activePage,totalItemsCount:this.props.resultState.total,itemsCountPerPage:10,firstPageText:"<<",prevPageText:"<",nextPageText:">",lastPageText:">>",onChange:function(t){return e.handlePageChange(t)}}):null)}}]),t}(a.Component)),M=x=Object(p.e)(Object(i.b)((function(e){return{resultState:e.resultState}}),(function(e){return{fetchNewQuery:function(t,n){return e(A(t,n))},fetchNewPage:function(t,n){return e(function(e,t){return function(n){return n({type:"UPDATE_PAGE_NUMBER",pageNumber:t}),fetch("".concat(k.a.url).concat(e,"&api_key=").concat(k.a.apiKey,"&size=10&offset=").concat(10*(t-1))).then((function(e){return e.json()})).then((function(e){return n({type:"FETCH_NEW_PAGE",response:e})}))}}(t,n))}}}))(x)),H=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(y.a)(this,Object(E.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),n.props.history.push({search:"q=".concat(n.state.searchQuery)})},n.state={searchQuery:""},n.handleChangeInput=n.handleChangeInput.bind(Object(d.a)(n)),n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleChangeInput",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(g.a)({},n,a))}},{key:"render",value:function(){var e=this,t=O.parse(this.props.location.search),n=t.q;return r.a.createElement("div",null,n?r.a.createElement("p",{className:"searchMessage"},"Search Results for ",r.a.createElement("strong",{className:"searchMessageKeyword"},n)):null,r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{type:"text",name:"searchQuery","aria-label":"Enter search query",placeholder:"Enter search query",value:this.state.searchQuery,onChange:function(t){return e.handleChangeInput(t)}}),r.a.createElement("button",{type:"submit","aria-label":"submit"},r.a.createElement(v.a,{size:"2em"}))),n?r.a.createElement(M,{searchQuery:t}):null)}}]),t}(a.Component),W=Object(p.e)(Object(i.b)((function(e){return{resultState:e.resultState}}),(function(e){return{fetchNewQuery:function(t){return e(A(t))}}}))(H));n(444);var B=Object(p.e)((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{path:"/:query?",render:function(e){return r.a.createElement(W,Object.assign({},e,{location:e.location}))}}))})),z=n(44),K={total:0,offset:0,activePage:1,results:[],aggregations:{},loading:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_RESULTS":return Object(z.a)({},e,{loading:!0});case"FETCH_NEW_QUERY":return Object(z.a)({},e,{loading:!1,total:t.response.total,offset:t.response.offset,results:t.response.results,aggregations:t.response.aggregations});case"FETCH_WITH_FILTERS":return Object(z.a)({},e,{loading:!1,total:t.response.total,offset:t.response.offset,results:t.response.results});case"UPDATE_SOME_AGGREGATIONS":return Object(z.a)({},e,{aggregations:Object(z.a)({},e.aggregations,Object(g.a)({},t.aggregation,t.aggregations[t.aggregation]))});case"UPDATE_ALL_AGGREGATIONS":return Object(z.a)({},e,{aggregations:t.aggregations});case"UPDATE_PAGE_NUMBER":return Object(z.a)({},e,{loading:!0,activePage:t.pageNumber});case"FETCH_NEW_PAGE":return Object(z.a)({},e,{loading:!1,offset:t.response.offset,results:t.response.results});default:return e}},J=Object(u.c)({resultState:Y});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.d(t,"history",(function(){return $}));var X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,V=Object(u.e)(J,X(Object(u.a)(l.a))),$=Object(h.b)();function Z(e){s.a.render(r.a.createElement(i.a,{store:V},r.a.createElement(c.a,{hashType:"noslash",history:$},r.a.createElement(B,null))),document.getElementById(e))}t.default=Z;window.Explorer={renderIntrasearchUI:Z},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[388,1,2]]]);
//# sourceMappingURL=0.intrasearch_ui.js.map