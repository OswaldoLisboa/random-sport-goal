(this["webpackJsonprandom-sport-goal"]=this["webpackJsonprandom-sport-goal"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),s=(n(12),n(3)),i=n(4),l=n(6),u=n(5),m=(n(13),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={scorer:"",source:"",game:"",date:"",views:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://aqueous-bastion-92424.herokuapp.com/").then((function(e){return e.json()})).then((function(t){e.setState({scorer:t.scorer,source:t.link,game:t.game,date:t.game_date,views:t.views})}))}},{key:"render",value:function(){var e=this.state,t=e.game,n=e.source,a=e.scorer,r=e.date,c=e.views;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,a),o.a.createElement("img",{src:n,alt:"Gol"}),o.a.createElement("h2",null,t),o.a.createElement("h3",null,"Data: ",r),o.a.createElement("h3",null,"Vizualiza\xe7\xf5es: ",c))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ec3d89f4.chunk.js.map