(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(2),r=n.n(i),c=(n(15),n(3)),s=n(4),u=n(7),l=n(5),d=n(8),m=(n(16),n(17),n(6)),f=n.n(m),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).updateContent=function(e){n.setState({content:e})},n.setRef=function(e){return n.jodit=e},n.config={readonly:!1},n.state={content:"content"},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.jodit=new f.a("#editor",{extraButtons:[{name:"insertDate",iconURL:"https://images.vexels.com/media/users/3/128866/isolated/preview/9d104cd78be9c669adf883bf1eb37c92-target-icon-svg-by-vexels.png",exec:function(e){e.selection.insertHTML((new Date).toDateString())}}]}),this.jodit.value="<p>start</p>",console.log("started editor")}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Editor"),a.a.createElement("textarea",{id:"editor",name:"editor"}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.152c29c6.chunk.js.map