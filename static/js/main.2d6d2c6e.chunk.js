(this.webpackJsonpMyProjects=this.webpackJsonpMyProjects||[]).push([[0],[,,function(e){e.exports=JSON.parse('["3DFromScratch","WaveSim","Flocking","Frogger","GUIFrameWork","MachineLearningGPU","Mandelbrot","Fluid Simulation","Neural Net Visualizer"]')},,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=(n(11),n(1)),i=n.n(s),l=n(3);n(13),n(14);function u(e){var t=e.children;return a.a.createElement("div",{className:"list-container"},t)}n(15);function m(e){var t=e.header,n=e.description,r=e.src;return a.a.createElement("div",{className:"content-container"},t?a.a.createElement("h3",{className:"content-header"}," ",t," "):null,n?a.a.createElement("p",{className:"content-description"}," ",n," "):null,r?a.a.createElement("img",{className:"content-img",src:r}):null)}n(16);function p(e){var t=e.name,n=e.contents,r=e.description,c=e.gitHubLink,o=null;return n&&(o=n.map((function(e,t){return a.a.createElement(m,e)}))),a.a.createElement("div",{className:"project-container"},a.a.createElement("a",{href:c},a.a.createElement("h2",{className:"project-header"}," ",t)),a.a.createElement("p",{className:"project-description"}," ",r),a.a.createElement("div",{className:"project-contents-list"},o))}var d=n(2);function f(){return a.a.createElement("div",{style:{borderTop:3,width:"85%",height:5,marginTop:10,borderTopColor:"grey",borderTopStyle:"solid"}})}function v(e,t){e.contents=e.contents.map((function(e){return e.src=t+e.src,e}))}var h=function(){console.log("testy test"),console.log({folderName:d});var e,t,n=Object(r.useState)([]),c=Object(l.a)(n,2),o=c[0],s=c[1],m=Object(r.useState)("Not Retrieved"),h=Object(l.a)(m,2),g=h[0],E=h[1];console.log({projects:o,retrievedProjects:g}),"Not Retrieved"==g&&(E("Retrieving"),(e=d,t="projects/",i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all(e.map((function(e){var n,r;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,i.a.awrap(fetch(t+e+"/content.json"));case 3:return n=a.sent,console.log(n),a.next=7,i.a.awrap(n.json());case 7:return r=a.sent,console.log(r),v(r,t+e+"/"),a.abrupt("return",r);case 11:case"end":return a.stop()}}))}))));case 1:case"end":return n.stop()}}))).then((function(e){s(e),E("Retrieved")})));var N=o.map((function(e,t){return a.a.createElement(a.a.Fragment,{key:t},a.a.createElement(p,e),a.a.createElement(f,null))}));return a.a.createElement("div",{className:"App"},a.a.createElement(u,null,N))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.2d6d2c6e.chunk.js.map