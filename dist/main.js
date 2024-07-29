(()=>{"use strict";var e={919:(e,n,t)=>{t.d(n,{A:()=>a});var o=t(601),r=t.n(o),i=t(314),c=t.n(i)()(r());c.push([e.id,"\nhtml,body{\n    padding:0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n.page-content{\n    \n    display:grid;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: auto 1fr;;\n    height: 100vh;\n    width: 100vw;\n}\n\n.header{\n    grid-row: 1/2;\n    grid-column: 2/-1;\n    background-color: #333333;\n    padding: 1.5rem;\n    color: white;\n}\n\n\n.sidebar{\n\n    grid-column: 1/2;\n    grid-row: 1/-1;\n    background-color: #4A90E2 ;\n    padding: 1rem;  \n    width: 15vw;\n}\n\n\n\n.content{\n    grid-row: 2/-1;\n    grid-column: 2/-1;\n    background-color: #F5F5F5 ;\n    padding: 5rem;\n}\n\n\nul{\n    display:flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n\n.todo:hover{\n    background-color:#FF6F6199 ;\n}\n\n.project-name{\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n\n.todos{\n    margin-top: 2rem;\n    display:flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.2rem;\n}\n\n.todo{\n    display:flex;\n    gap: 1rem;\n}\n\n.todo-delete{\n    margin-left:auto;\n}\n\n.projects{\n    display:flex;\n    flex-direction: column;\n    gap: 1rem;\n\n\n}\n\n.project-button{\n    border: none;\n    font-size: 1.2rem;\n    background-color: #4A90E2;\n    color: #333333;\n    position:relative;\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\n    \n\n}\n\n.project-button:hover{\n    background-color: #33333388;;\n    color: white;\n\n}\n\n.project-button::before{\n    content: '#';\n    color: white;\n\n    position:absolute;\n    left: 1rem;\n}\n\n\n.add-icon{\n    width: 2rem;\n    height: 2rem;\n}\n\n\n.add-todo-button{\n    cursor: pointer;    border: none;\n\n}\n\n.add-Todo{\n    display:flex;\n    gap : 30px;\n    margin-top: 2rem;\n}\n\n.add-Todo:hover{\n    color: black;\n    font-size: bold;;\n    background-color: #FF6F6166;\n    cursor: pointer;\n}\n\n\nform{\n    border: 2px solid black;\n    display:flex;\n    flex-direction: column;\n    gap: 5px;\n    padding: 1rem;\n    \n}\n\ninput{\n    border: none;\n    outline: none;\n}\n\ntextarea{\n    resize:none;\n    outline:none;\n}\n\n.submit{\n    width: 5rem;\n}\n\n.form-buttons{\n    margin-left: auto;\n    gap: 10px;\n    display:flex;\n\n}\n\n.hidden{\n    display:none;\n}",""]);const a=c},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},c=[],a=0;a<e.length;a++){var d=e[a],s=o.base?d[0]+o.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=a,n.splice(a,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=t(i[c]);n[a].references--}for(var d=o(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;const o=function(){let e=[],n="",t="";return{getTodos:function(){return e},addTodo:function(n){e.push(n)},deleteTodo:function(n){e=e.filter((e=>e!==n))},setProjectTitle:function(e){n=e},setProjectDescription:function(e){t=e},getProjectTitle:function(){return n},getProjectDescription:function(){return t}}},r=function(){let e="",n="",t=0,o=!1;return{getTitle:function(){return e},setTitle:function(n){e=n},getDescription:function(){return n},setDescription:function(e){n=e},setPriority:function(e){t=e},getPriority:function(){return t},toggleState:function(){o=!o},getState:function(){return o}}};var i=t(72),c=t.n(i),a=t(825),d=t.n(a),s=t(659),l=t.n(s),u=t(56),p=t.n(u),f=t(540),m=t.n(f),g=t(113),h=t.n(g),v=t(919),b={};b.styleTagTransform=h(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=m(),c()(v.A,b),v.A&&v.A.locals&&v.A.locals,t.p;let y=new function(){let e=[];return{getProjects:function(){return e},addProject:function(n){e.push(n)},deleteProject:function(n){e=e.filter((e=>e!==n))}}},T=new o;T.name="Test Project",T.description="yoooooooo!",y.addProject(T),console.log(y.getProjects());let w=new r;w.setTitle("breakfast"),w.setDescription("eggs");let j=new r;j.setTitle("study"),j.setDescription("Javascript"),T.addTodo(w),T.addTodo(j);let x=new r;x.setTitle("coffee"),T.addTodo(x),console.log("Project Test todos are: ",T.getTodos());let P=new function(){return{renderTodos:function(e){let n=document.querySelector(".todos");n.innerHTML="",document.createElement("div").classList.add("todo-item"),e.forEach((e=>{let t=document.createElement("div");t.classList.add("todo");let o=document.createElement("input");o.type="checkbox",o.id=e.getTitle();let r=document.createElement("label");r.textContent=e.getTitle(),r.htmlFor=e.getTitle();let i=document.createElement("button");i.textContent="Delete",i.classList.add("todo-delete"),t.appendChild(o),t.appendChild(r),n.appendChild(t),t.appendChild(i)}))},renderProjects:function(e){let n=document.querySelector(".projects");n.innerHTML="",e.forEach((e=>{let t=document.createElement("button");t.classList.add("project-button"),t.innerHTML=e.getProjectTitle(),n.appendChild(t)}))},formRenderer:function(){let e=document.querySelector(".add-Todo");e.addEventListener("click",(n=>{document.querySelector(".div-form").classList.remove("hidden"),e.classList.add("hidden")}))}}};P.renderTodos(T.getTodos());let E=new o;E.setProjectTitle("seecond project"),y.addProject(E),console.log("project 2 title is:",E.getProjectTitle()),T.setProjectTitle("hello world"),P.renderProjects(y.getProjects());let S=new r;S.setTitle("read"),S.setDescription("quran"),S.setPriority(3),T.addTodo(S),console.log("projects: ",y.getProjects()),console.log("Todos",T.getTodos()[2].getState()),P.formRenderer(),document.querySelector(".submit").addEventListener("click",(e=>{let n=new r;n.setTitle(document.querySelector(".task").innerHTML),n.setDescription(document.querySelector(".description").innerHTML)}))})();