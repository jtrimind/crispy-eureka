(this["webpackJsonpcrispy-eureka"]=this["webpackJsonpcrispy-eureka"]||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),s=(n(64),n(10)),l=(n(65),n(46)),i=function(e){var t=e.name;return o.a.createElement("div",null,t)};var u=function(e){var t=e.latlng,n=e.storeList,c=e.onPositionChanged,r=e.keyword,u=e.gps,m=Object(a.useState)(null),p=Object(s.a)(m,2),f=p[0],d=p[1];Object(a.useEffect)((function(){var e=document.createElement("script");e.async=!0,e.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=f5185fb09b4ee9df57bd6b168585bb8c&libraries=services&autoload=false",document.head.appendChild(e),e.onload=function(){d(window.kakao)}}),[]);var g=Object(a.useState)(null),v=Object(s.a)(g,2),E=v[0],b=v[1];return Object(a.useEffect)((function(){f&&f.maps.load((function(){var e=document.getElementById("map"),n={center:new f.maps.LatLng(t[0],t[1]),level:5};b(new f.maps.Map(e,n))}))}),[f]),Object(a.useEffect)((function(){E&&(f.maps.event.addListener(E,"dragend",(function(){var e=E.getCenter();c(e.getLat(),e.getLng())})),f.maps.event.addListener(E,"zoom_changed",(function(){E.getLevel()>5&&E.setLevel(5)})))}),[E]),Object(a.useEffect)((function(){E&&E.panTo(new f.maps.LatLng(t[0],t[1]))}),[t]),Object(a.useEffect)((function(){E&&n&&n.forEach((function(e){var t=new f.maps.LatLng(e.latlng[0],e.latlng[1]);new f.maps.CustomOverlay({content:Object(l.renderToStaticMarkup)(o.a.createElement(i,{name:e.name})),position:t}).setMap(E)}))}),[n]),Object(a.useEffect)((function(){r&&(console.log("keyword:",r),(new f.maps.services.Places).keywordSearch(r,(function(e,t){if(console.log(t),console.log(e),t===f.maps.services.Status.OK){var n=e[0],a=n.y,o=n.x;console.log(a,o);var c=new f.maps.LatLng(a,o);E.panTo(c),E.setLevel(3)}})))}),[r]),Object(a.useEffect)((function(){if(u){console.log("gps:",u);var e=new f.maps.Size(24,35),t=new f.maps.MarkerImage("http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png",e),n=new f.maps.LatLng(u[0],u[1]);new f.maps.Marker({map:E,position:n,image:t}).setMap(E)}}),[u]),o.a.createElement("div",{id:"map",className:"Map"})},m=n(33),p=n.n(m),f=n(47),d=n(48),g=n.n(d);var v=function(e){var t=e.latlng,n=e.onStoreListUpdated,c=e.renew,r=e.setRenew,l=Object(a.useState)([]),i=Object(s.a)(l,2),u=i[0],m=i[1],d=function(){var e=Object(f.a)(p.a.mark((function e(){var n,a,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://congenial-spoon.web.app/pharmacy",e.next=3,g.a.get("https://congenial-spoon.web.app/pharmacy",{params:{WGS84_LAT:t[0],WGS84_LON:t[1],numOfRows:30}});case 3:n=e.sent,console.log(n),200===n.status&&(a=n.data.response.body.items,console.log(a),a&&(o=a.item,c=o.map((function(e){return{name:e.dutyName,latlng:[e.latitude,e.longitude]}})),console.log(c),m(c)));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d().catch((function(e){console.log(e)}))}),[t]),Object(a.useEffect)((function(){n(u)}),[u]),Object(a.useEffect)((function(){1==c&&(console.log("renew"),d().catch((function(e){console.log(e)})),r(!1))}),[c]),o.a.createElement("div",null)},E=n(118),b=n(53),w=n.n(b),O=n(117),j=n(112),h=n(113);var k=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{onClick:function(){c(!0)}},o.a.createElement(w.a,null)),o.a.createElement(O.a,{open:n},o.a.createElement(j.a,null,"\ub2f9\uc7a5\uc57d\uad6d\uc740?"),o.a.createElement(h.a,null,"\uc9c0\uae08 \ub2f9\uc7a5 \ucc3e\uc544\uac08 \uc218 \uc788\ub294 \uc57d\uad6d\uc744 \ubc14\ub85c \ud655\uc778\ud560 \uc218 \uc788\uac8c \uac1c\ubc1c\ub41c \uc11c\ube44\uc2a4 \uc785\ub2c8\ub2e4. \uad6d\ub9bd\uc911\uc559\uc758\ub8cc\uc6d0\uc5d0\uc11c \uacf5\uac1c\ud558\ub294 \uc804\uad6d \uc57d\uad6d \uc815\ubcf4\ub97c \ud1a0\ub300\ub85c \uc81c\uacf5\ub418\uba70, \ubcf8 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc548\ub0b4\ub418\ub294 \uc57d\uad6d\uc758 \uc2e4\uc81c \uc601\uc5c5\uc5ec\ubd80\ub294 \uac01 \uc57d\uad6d\uc758 \uc0ac\uc815\uc5d0 \ub530\ub77c \ubcc0\ub3d9 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubb38\uc758\uc0ac\ud56d :"),o.a.createElement(E.a,{onClick:function(){c(!1)}},"\ub2eb\uae30")))},L=n(114),S=n(119);var y=function(e){var t=e.onSearch,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],l=c[1];return o.a.createElement("div",{className:"SearchBar"},o.a.createElement(L.a,{style:{color:"black"}}),o.a.createElement(S.a,{value:r,onChange:function(e){return l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(r)}}))},C=n(115);var N=function(e){var t=e.setLatlng,n=e.setGps;return o.a.createElement("div",{className:"Gps"},o.a.createElement(E.a,{onClick:function(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(e){t([e.coords.latitude,e.coords.longitude]),n([e.coords.latitude,e.coords.longitude])}),(function(e){console.error("Error Code = "+e.code+" - "+e.message)})):console.log("Not Available")}},o.a.createElement(C.a,null)))},M=n(116);var G=function(){var e=Object(a.useState)([37,127]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),l=Object(s.a)(r,2),i=l[0],m=l[1],p=Object(a.useState)(""),f=Object(s.a)(p,2),d=f[0],g=f[1],b=Object(a.useState)(),w=Object(s.a)(b,2),O=w[0],j=w[1],h=Object(a.useState)(!1),L=Object(s.a)(h,2),S=L[0],C=L[1];return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Top"},"\ub2f9\uc7a5\uc57d\uad6d",o.a.createElement(k,null),o.a.createElement(y,{onSearch:g})),o.a.createElement("div",{className:"MapContent"},o.a.createElement("div",{className:"MapControl"},o.a.createElement(N,{setLatlng:c,setGps:j}),o.a.createElement("div",{className:"Renew"},o.a.createElement(E.a,{onClick:function(){C(!0)}},o.a.createElement(M.a,null)))),o.a.createElement(u,{latlng:n,onPositionChanged:function(e,t){console.log("position changed: "+e+" "+t),c([e,t])},storeList:i,keyword:d,gps:O})),o.a.createElement(v,{latlng:n,onStoreListUpdated:function(e){m(e)},renew:S,setRenew:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[91,1,2]]]);
//# sourceMappingURL=main.61afb3c9.chunk.js.map