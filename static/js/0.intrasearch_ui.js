(this.webpackJsonpintrasearch_ui=this.webpackJsonpintrasearch_ui||[]).push([[0],{387:function(e,t,n){e.exports=n(444)},41:function(e,t,n){e.exports={url:"https://api.govwizely.com/v1/web_documents/search.json",apiKey:"FqEELAPpt-UDPBxpoo5onvku"}},439:function(e,t,n){},441:function(e,t,n){},442:function(e,t,n){},443:function(e,t,n){},444:function(e,t,n){"use strict";n.r(t);n(104),n(114),n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(164),n(166),n(167),n(168),n(169),n(170),n(171),n(173),n(174),n(131),n(178),n(179),n(78),n(183),n(184),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(138),n(208),n(210),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(140),n(227),n(228),n(229),n(230),n(232),n(233),n(234),n(235),n(236),n(238),n(240),n(242),n(243),n(245),n(246),n(247),n(248),n(249),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(141),n(268),n(269),n(270),n(271),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(98),n(299),n(300),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(363),n(364),n(366),n(367),n(368),n(369),n(371),n(149),n(400),n(408),n(373);var a=n(0),r=n.n(a),s=n(102),o=n.n(s),c=n(445),i=n(35),u=n(55),l=n(381),h=n(37),p=n(65),g=n(50),f=n(51),m=n(53),y=n(52),E=n(66),d=n(54),b=n(386),v=n(14),O=n(41),j=n.n(O),S=n(83),k=n(382);function w(e){var t=v.parse(e),n=(t.q,Object(k.a)(t,["q"])),a={};return""!==Object.keys(n).toString()&&Object.entries(n).forEach((function(e){var t=Object(S.a)(e,2),n=t[0],r=t[1];return a[n]=r.split(",")})),a}var _=function(e,t,n){var a=function(e,t,n){var a=w(n);return a[e]&&a[e].includes(t)?a[e]=a[e].filter((function(e){return e!==t})):a[e]?a[e].push(t):a[e]=[t],0===a[e].length&&delete a[e],a}(e,t,n);return function(t){t({type:"LOADING_RESULTS"});var r=v.stringify(a,{arrayFormat:"comma"}),s=v.parse(n).q;return $.push({search:"q=".concat(s,"&").concat(r)}),fetch("".concat(j.a.url,"?q=").concat(s,"&").concat(r,"&api_key=").concat(j.a.apiKey,"&size=10&offset=0")).then((function(e){return e.json()})).then((function(n){return t(C("q=".concat(s,"&").concat(r),n,e))}))}},C=function(e,t,n){return function(a){var r=[];["trade_topics","industries","countries"].forEach((function(t){t===n&&Object.keys(w(e))!==[]&&w(e)[t]||r.push(t)})),a({type:"FETCH_WITH_FILTERS",response:t}),r.forEach((function(n){var r=[];w(e)[n]&&(r=w(e)[n].map((function(e){return{key:e}}))),a({type:"UPDATE_SOME_AGGREGATIONS",aggregations:t.aggregations,aggregation:n,existingFilters:r})}))}},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return document.querySelectorAll("input[type=checkbox]").forEach((function(e){return e.checked=!1})),function(n){return n({type:"LOADING_RESULTS"}),fetch("".concat(j.a.url).concat(e,"&api_key=").concat(j.a.apiKey,"&size=10&offset=").concat(10*(t-1))).then((function(e){return e.json()})).then((function(e){return n({type:"FETCH_NEW_QUERY",response:e})}))}},N=n(383),A=n.n(N),q=n(384),P=n.n(q),F=(n(438),n(439),Object(c.c)((function(e){return r.a.createElement("div",{className:"ResultsList"},r.a.createElement("p",{className:"totalMessage"},r.a.createElement("strong",null,e.total)," results"),e.results.map((function(e){var t=new Date(parseInt(e.changed)).toDateString();return r.a.createElement("div",{className:"anItem",key:e.id},r.a.createElement("a",{href:e.link},e.title),r.a.createElement("p",null,"Updated ",t),r.a.createElement("p",null,e.summary))})))}))),I=n(82),D=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(m.a)(this,Object(y.a)(t).call(this,e))).state={isChecked:!1},n.handleToggleFilter=n.handleToggleFilter.bind(Object(E.a)(n)),n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"handleToggleFilter",value:function(e){var t=this,n=e.target,a=n.name,r=n.value;this.setState({isChecked:!this.state.isChecked},(function(){t.props.toggleFilter(a,r,t.props.location.search)}))}},{key:"componentDidMount",value:function(){w(this.props.location.search)[this.props.category]&&(w(this.props.location.search)[this.props.category].includes(this.props.item)?this.setState({isChecked:!0}):this.setState({isChecked:!1}))}},{key:"componentDidUpdate",value:function(e,t){v.parse(this.props.location.search).q!==v.parse(e.location.search).q?this.setState({isChecked:!1}):this.props.uniqStr!==e.uniqStr&&this.setState({isChecked:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.key,a=t.category,s=t.item;return r.a.createElement("label",{key:n},r.a.createElement("input",{type:"checkbox",name:a,value:s,key:n,onChange:function(t){return e.handleToggleFilter(t)},checked:this.state.isChecked})," ",s)}}]),t}(a.Component),U=Object(c.c)(Object(i.b)(null,(function(e){return{toggleFilter:function(t,n,a){return e(_(t,n,a))}}}))(D));n(379);var Q=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(m.a)(this,Object(y.a)(t).call(this,e))).state={showAll:!1},n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"resetToggle",value:function(){this.setState({showAll:!1})}},{key:"componentDidUpdate",value:function(e,t){v.parse(this.props.location.search).q!==v.parse(e.location.search).q&&this.resetToggle()}},{key:"toggleShowAll",value:function(e){e.preventDefault(),this.setState({showAll:!this.state.showAll})}},{key:"toggleShowButton",value:function(e){var t=this,n=this.state.showAll?"- Show Less":"+ Show More";return e<=this.props.limit?null:r.a.createElement("button",{onClick:function(e){return t.toggleShowAll(e)},className:"toggleShow"},n)}},{key:"render",value:function(){var e=this,t=this.props.items.sort((function(e,t){return e.key>t.key?1:-1})).map((function(e){return e.key})),n=Object(I.a)(new Set(t));return r.a.createElement("details",{className:"FilterCategory",open:!0},r.a.createElement("summary",null,G[this.props.category]),n.length>this.props.limit&&!this.state.showAll?n.slice(0,this.props.limit).map((function(t,n){return r.a.createElement(U,{key:n,category:e.props.category,item:t,uniqStr:e.props.uniqStr})})):n.map((function(t,n){return r.a.createElement(U,{key:n,category:e.props.category,item:t,uniqStr:e.props.uniqStr})})),this.toggleShowButton(n.length))}}]),t}(a.Component),R=Object(c.c)(Q),G={trade_topics:"Trade Topics",industries:"Industries",countries:"Countries"};n(441);n(379);var x=Object(c.c)(Object(i.b)(null,(function(e){return{clearFilters:function(t){return e(function(e){return $.push({search:"q=".concat(e)}),function(t){return fetch("".concat(j.a.url,"?q=").concat(e,"&api_key=").concat(j.a.apiKey,"&size=10&offset=0")).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_NEW_QUERY",response:e})}))}}(t))}}}))((function(e){var t=Object(a.useState)(0),n=Object(S.a)(t,2),s=n[0],o=n[1];return r.a.createElement("div",{className:"FiltersContainer"},e.aggregations!=={}?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Filter Results"),r.a.createElement("button",{onClick:function(){return e.clearFilters(v.parse(e.location.search).q),void o(Date.now())}},"[Clear All]")),function(){var t=[];return Object.entries(e.aggregations).forEach((function(e){var n=Object(S.a)(e,2),a=n[0];return n[1],t.push(a)})),t}().map((function(t,n){if(e.aggregations[t].length)return r.a.createElement(R,{category:t,key:n,items:e.aggregations[t],limit:5,uniqStr:s})}))):null)}))),L=(n(442),function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).getQueryTerm=function(){return v.parse(n.props.location.search).q},n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"handlePageChange",value:function(e){this.props.fetchNewPage(this.props.location.search,e)}},{key:"componentDidMount",value:function(){this.props.fetchNewQuery(this.props.location.search,this.props.resultState.activePage)}},{key:"componentDidUpdate",value:function(e,t){v.parse(this.props.location.search).q!==v.parse(e.location.search).q&&this.props.fetchNewQuery(this.props.location.search,this.props.resultState.activePage)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ResultsContainer"},r.a.createElement(x,{aggregations:this.props.resultState.aggregations}),r.a.createElement(P.a,{type:"text",showLoadingAnimation:!0,ready:!this.props.resultState.loading,rows:6,style:{width:"60vw",margin:"2em 0 0.5em 1em"},color:"#E0E0E0"},r.a.createElement(F,{searchQuery:this.getQueryTerm(),total:this.props.resultState.total,results:this.props.resultState.results})),this.props.resultState.total>0?r.a.createElement(A.a,{activePage:this.props.resultState.activePage,totalItemsCount:this.props.resultState.total,itemsCountPerPage:10,firstPageText:"<<",prevPageText:"<",nextPageText:">",lastPageText:">>",onChange:function(t){return e.handlePageChange(t)}}):null)}}]),t}(a.Component)),M=L=Object(c.c)(Object(i.b)((function(e){return{resultState:e.resultState}}),(function(e){return{fetchNewQuery:function(t,n){return e(T(t,n))},fetchNewPage:function(t,n){return e(function(e,t){return function(n){return n({type:"UPDATE_PAGE_NUMBER",pageNumber:t}),fetch("".concat(j.a.url).concat(e,"&api_key=").concat(j.a.apiKey,"&size=10&offset=").concat(10*(t-1))).then((function(e){return e.json()})).then((function(e){return n({type:"FETCH_NEW_PAGE",response:e})}))}}(t,n))}}}))(L)),H=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(m.a)(this,Object(y.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),v.parse(n.props.location.search).q===n.state.searchQuery?n.props.fetchNewQuery("?q=".concat(n.state.searchQuery)):n.props.history.push({search:"q=".concat(n.state.searchQuery)})},n.state={searchQuery:""},n.handleChangeInput=n.handleChangeInput.bind(Object(E.a)(n)),n}return Object(d.a)(t,e),Object(f.a)(t,[{key:"handleChangeInput",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(p.a)({},n,a))}},{key:"render",value:function(){var e=this,t=v.parse(this.props.location.search),n=t.q;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},n?r.a.createElement("p",{className:"searchMessage"},"Search Results for ",r.a.createElement("strong",{className:"searchMessageKeyword"},n)):null,r.a.createElement("input",{type:"text",name:"searchQuery","aria-label":"Enter search query",placeholder:"Enter search query",value:this.state.searchQuery,onChange:function(t){return e.handleChangeInput(t)}}),r.a.createElement("button",{type:"submit","aria-label":"submit"},r.a.createElement(b.a,{size:"2em"}))),n?r.a.createElement(M,{searchQuery:t}):null)}}]),t}(a.Component),W=Object(c.c)(Object(i.b)((function(e){return{resultState:e.resultState}}),(function(e){return{fetchNewQuery:function(t){return e(T(t))}}}))(H));n(443);var B=Object(c.c)((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{path:"/:query?",render:function(e){return r.a.createElement(W,Object.assign({},e,{location:e.location}))}}))})),z=n(42),K={total:0,offset:0,activePage:1,results:[],aggregations:{},loading:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_RESULTS":return Object(z.a)({},e,{loading:!0});case"FETCH_NEW_QUERY":return Object(z.a)({},e,{loading:!1,total:t.response.total,offset:t.response.offset,results:t.response.results,aggregations:t.response.aggregations});case"FETCH_WITH_FILTERS":return Object(z.a)({},e,{loading:!1,total:t.response.total,offset:t.response.offset,results:t.response.results});case"UPDATE_SOME_AGGREGATIONS":return Object(z.a)({},e,{aggregations:Object(z.a)({},e.aggregations,Object(p.a)({},t.aggregation,[].concat(Object(I.a)(t.aggregations[t.aggregation]),Object(I.a)(t.existingFilters))))});case"UPDATE_ALL_AGGREGATIONS":return Object(z.a)({},e,{aggregations:t.aggregations});case"UPDATE_PAGE_NUMBER":return Object(z.a)({},e,{loading:!0,activePage:t.pageNumber});case"FETCH_NEW_PAGE":return Object(z.a)({},e,{loading:!1,offset:t.response.offset,results:t.response.results});default:return e}},J=Object(u.c)({resultState:Y});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.d(t,"history",(function(){return $}));var X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,V=Object(u.e)(J,X(Object(u.a)(l.a))),$=Object(h.a)();function Z(e){o.a.render(r.a.createElement(i.a,{store:V},r.a.createElement(c.b,{history:$},r.a.createElement(B,null))),document.getElementById(e))}t.default=Z;window.Explorer={renderIntrasearchUI:Z},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[387,1,2]]]);
//# sourceMappingURL=0.intrasearch_ui.js.map