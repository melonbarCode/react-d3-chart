(this["webpackJsonpreact-d3-chart"]=this["webpackJsonpreact-d3-chart"]||[]).push([[0],{112:function(t,n,e){},117:function(t,n,e){"use strict";e.r(n);var a,c=e(0),r=e.n(c),i=e(28),o=e.n(i),s=(e(112),e(29)),u=e(2),d=e.p+"static/media/population.e7e8d498.csv",p=e(30),l=e(1),h=function(t){var n=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=Object(u.g)(n.current);console.log(t.attr("width"));var e=+t.attr("width"),a=+t.attr("height"),c=20,r=50,i=e-r-20,o=a-c-20,s=function(t){return t.population},p=function(t){return t.country};Object(u.c)(d).then((function(n){n.forEach((function(t){t.population=1e3*+t.population})),n.sort((function(t,n){return n.population-t.population})),function(n){var e=Object(u.f)().domain([0,Object(u.d)(n,s)]).range([0,i]),a=Object(u.e)().domain(n.map(p)).range([0,o]).padding(.3),d=t.append("g").attr("transform","translate(".concat(r,",").concat(c,")"));d.append("g").call(Object(u.b)(a)),d.append("g").call(Object(u.a)(e)).attr("transform","translate(0, ".concat(o,")")),d.selectAll("rect").data(n).enter().append("rect").attr("y",(function(t){return a(p(t))})).attr("width",(function(t){return e(s(t))})).attr("height",a.bandwidth())}(n)}))}),[]),Object(l.jsx)(f,{className:"barchart-section",style:{width:"1000px",height:"800px"},children:Object(l.jsx)("svg",{width:1e3,height:800,ref:n})})},f=p.a.div(a||(a=Object(s.a)(["\n  .barchart-section {\n    margin: 0px;\n    overflow: hidden;\n  }\n\n  rect {\n    fill: steelblue;\n  }\n\n  text {\n    font-size: 1.4em;\n  }\n"])));var b=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header"}),Object(l.jsx)(h,{})]})},j=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,118)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;e(t),a(t),c(t),r(t),i(t)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),j()}},[[117,1,2]]]);
//# sourceMappingURL=main.183f6d65.chunk.js.map