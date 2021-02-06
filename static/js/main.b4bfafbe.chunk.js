(this["webpackJsonpreact-d3-chart"]=this["webpackJsonpreact-d3-chart"]||[]).push([[0],{115:function(t,n,e){},116:function(t,n,e){"use strict";e.r(n);var a,c,r=e(0),i=e.n(r),o=e(29),l=e.n(o),s=e(10),u=e(2),p=e.p+"static/media/population.e7e8d498.csv",d=e(12),f=e(1),h=function(t){var n=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=Object(u.h)(n.current),e=n.current.clientWidth,a=n.current.clientHeight;console.log(e,a);var c=20,r=100,i=e-r-20,o=a-c-20,l=function(t){return t.population},s=function(t){return t.country};Object(u.c)(p).then((function(n){n.forEach((function(t){t.population=1e3*+t.population})),n.sort((function(t,n){return n.population-t.population})),function(n){var e=Object(u.g)().domain([0,Object(u.e)(n,l)]).range([0,i]),a=Object(u.f)().domain(n.map(s)).range([0,o]).padding(.3),p=t.append("g").attr("transform","translate(".concat(r,",").concat(c,")"));p.append("g").call(Object(u.b)(a)),p.append("g").call(Object(u.a)(e)).attr("transform","translate(0, ".concat(o,")")),p.selectAll("rect").data(n).enter().append("rect").attr("y",(function(t){return a(s(t))})).attr("width",(function(t){return e(l(t))})).attr("height",a.bandwidth())}(n)}))}),[]),Object(f.jsx)(b,{className:"barchart-section",children:Object(f.jsx)("svg",{className:"barchart-svg",ref:n})})},b=d.a.div(a||(a=Object(s.a)(["\n  margin: 0px auto;\n  margin-bottom: 50px;\n  overflow: hidden;\n  height: 900px;\n  width: 1600px;\n  text-align: center;\n\n  .barchart-svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  rect {\n    fill: steelblue;\n  }\n\n  text {\n    font-size: 1.4em;\n  }\n"]))),j=e.p+"static/media/population.e7e8d498.csv",g=function(t){var n=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=Object(u.h)(n.current),e=n.current.clientWidth,a=n.current.clientHeight;console.log(e,a);var c=100,r=200,i=e-r-20,o=a-c-80,l=function(t){return t.population},s=function(t){return t.country};Object(u.c)(j).then((function(n){n.forEach((function(t){t.population=1e3*+t.population})),n.sort((function(t,n){return n.population-t.population})),function(n){var e=Object(u.g)().domain([0,Object(u.e)(n,l)]).range([0,i]),a=Object(u.f)().domain(n.map(s)).range([0,o]).padding(.3),p=Object(u.a)(e).tickFormat((function(t){return Object(u.d)(".3s")(t).replace("G","B")})).tickSize(-o),d=t.append("g").attr("transform","translate(".concat(r,",").concat(c,")"));d.append("g").call(Object(u.b)(a)).selectAll(".domain ,.tick line").remove();var f=d.append("g").call(p).attr("transform","translate(0, ".concat(o,")"));f.select(".domain").remove(),f.append("text").attr("class","axis-label").attr("y",65).attr("x",i/2).attr("fill","#000000").text("Population"),d.selectAll("rect").data(n).enter().append("rect").attr("y",(function(t){return a(s(t))})).attr("width",(function(t){return e(l(t))})).attr("height",a.bandwidth()),d.append("text").attr("class","title").attr("y",-50).text("Top Population Country")}(n)}))}),[]),Object(f.jsx)(m,{className:"barchart-section",children:Object(f.jsx)("svg",{className:"barchart-svg",ref:n})})},m=d.a.div(c||(c=Object(s.a)(["\n  margin: 0px auto;\n  overflow: hidden;\n  height: 900px;\n  width: 1600px;\n  text-align: center;\n  margin-bottom: 50px;\n\n  .barchart-svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  rect {\n    fill: steelblue;\n  }\n\n  text {\n    font-size: 3em;\n    font-family: sans-serif;\n    /* fill: #8e8883; */\n  }\n\n  .tick text {\n    /* fill: #8e8883; */\n    font-size: 2em;\n    fill: #635f5d;\n  }\n\n  .tick line {\n    stroke: #c0c0bb;\n  }\n\n  .axis-label {\n    font-size: 2.7em;\n    fill: #8e8883;\n  }\n\n  .title {\n    font-size: 3.3em;\n    fill: #8e8883;\n  }\n"])));e(115);var O=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{className:"App-header",children:"D3 WITH REACT"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"chart-title",children:"BAR CHART"}),Object(f.jsx)(h,{}),Object(f.jsx)("div",{className:"chart-title",children:"BAR CUSTOM CHART"}),Object(f.jsx)(g,{})]})]})},x=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,117)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;e(t),a(t),c(t),r(t),i(t)}))};l.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),x()}},[[116,1,2]]]);
//# sourceMappingURL=main.b4bfafbe.chunk.js.map