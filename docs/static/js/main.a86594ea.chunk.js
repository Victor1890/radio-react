(this["webpackJsonpradio-react"]=this["webpackJsonpradio-react"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(12),i=n.n(s),r=(n(30),n(31),n(8)),o=n(4),j=function(e){var t=e.station,n=e.filter,a=e.onClick;return Object(o.jsx)("span",{className:t===n?"selected":"",onClick:a,children:n},n)};n(33);function l(){return Object(o.jsxs)("div",{className:"lds-roller",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})}var u=n(25),d=n.p+"static/media/radio.6085ad72.jpg",O=function(e){var t=e.favicon,n=e.name,a=e.audio;return Object(o.jsxs)("div",{className:"station",children:[Object(o.jsxs)("div",{className:"stationName",children:[Object(o.jsx)("img",{className:"logo",src:t,alt:"station logo",onError:function(e){e.target.src=d}}),Object(o.jsx)("div",{className:"name",children:n})]}),Object(o.jsx)(u.a,{className:"player",src:a,showJumpControls:!1,layout:"stacked",customProgressBarSection:[],customControlsSection:["MAIN_CONTROLS","VOLUME_CONTROLS"],autoPlayAfterSrcChange:!1})]})},b=n(3),f=n.n(b),h=n(5),v=n(24),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=Object(a.useState)([]),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!1),o=Object(r.a)(i,2),j=o[0],l=o[1],u=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new v.a("My Radio App"),e.next=3,n.searchStations({language:"english",tag:t,limit:30}).then((function(e){return e}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l(!1),u(e).then((function(e){l(!0),s(e)}))}),[e]),{dataStations:c,isLoading:j}},p=(n(36),["all","classical","country","dance","disco","house","jazz","pop","rap","retro","rock"]),x=function(){var e=Object(a.useState)("all"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=m(n),i=s.dataStations,u=s.isLoading;return Object(o.jsxs)("div",{className:"radio",children:[!u&&Object(o.jsx)(l,{}),Object(o.jsx)("div",{className:"filters",style:{display:!u&&"none"},children:p.map((function(e){return Object(o.jsx)(j,{station:n,filter:e,onClick:function(){return c(e)}},e)}))}),Object(o.jsx)("div",{className:"stations",style:{display:!u&&"none"},children:u&&i.map((function(e){return Object(o.jsx)(O,{name:e.name,favicon:e.favicon,audio:e.urlResolved},e.changeId)}))})]})},g=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Super Radio Player"}),Object(o.jsx)("h2",{children:"Pincha un genero musical, escoje una estaci\xf3n, empieza a escuchar."}),Object(o.jsx)(x,{})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a86594ea.chunk.js.map