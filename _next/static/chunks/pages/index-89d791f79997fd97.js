(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{705:function(){},39:function(e,t,n){"use strict";var i,s;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"==typeof(null==(s=n.g.process)?void 0:s.env)?n.g.process:n(9325)},5594:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(835)}])},5299:function(e,t,n){var i=n(39);n(705);var s=n(959),r=s&&"object"==typeof s&&"default"in s?s:{default:s};function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=void 0!==i&&i.env&&!0,c=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,r=void 0===s?a:s;u(c(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",u("boolean"==typeof r,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=r,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(u(c(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];u(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&u(c(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(i,n):s.appendChild(i),i},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},h={};function m(e,t){if(!t)return"jsx-"+e;var n=String(t),i=e+n;return h[i]||(h[i]="jsx-"+d(e+"-"+n)),h[i]}function f(e,t){var n=e+t;return h[n]||(h[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,s=t.optimizeForSpeed,r=void 0!==s&&s;this._sheet=i||new l({name:"styled-jsx",optimizeForSpeed:r}),this._sheet.inject(),i&&"boolean"==typeof r&&(this._sheet.setOptimizeForSpeed(r),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,s=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var r=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=r,this._instancesCounts[i]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],i=e[1];return r.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,i=e.id;if(n){var s=m(i,n);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return f(s,e)}):[f(s,t)]}}return{styleId:m(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),g=s.createContext(null);g.displayName="StyleSheetContext";var x=r.default.useInsertionEffect||r.default.useLayoutEffect,v=new p;function b(e){var t=v||s.useContext(g);return t&&x(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}b.dynamic=function(e){return e.map(function(e){return m(e[0],e[1])}).join(" ")},t.style=b},981:function(e,t,n){"use strict";e.exports=n(5299).style},835:function(e,t,n){"use strict";n.r(t),n.d(t,{FrontButton:function(){return j},default:function(){return y}});var i=n(1527),s=n(981),r=n.n(s),o=n(7998),a=n.n(o),c=n(959),l=n(43),u=n.n(l);let d=e=>{let{isVisibleCallback:t}=e;return(0,i.jsx)("section",{id:"main",className:"grid place-items-center",children:(0,i.jsxs)("div",{className:"w-full min-h-screen grid gap-7 p-3 lg:grid-cols-2 place-items-center",children:[(0,i.jsxs)("div",{className:"max-w-140 text-white relative text-lg sm:order-0",children:[(0,i.jsx)("h1",{className:"font-bold italic text-5xl",children:"whoami"}),(0,i.jsxs)("div",{className:"mt-3 space-y-3",children:[(0,i.jsx)("div",{children:"Developer passionate about new technologies. I value reliable software, so I tend to gravitate towards type safe languages/tech stacks, reproducible environments (nix) and test critical parts of my software."}),(0,i.jsxs)("div",{className:"flex gap-4",children:[(0,i.jsx)("a",{href:"#techstack",onClick:()=>{console.log("z")},className:"".concat(u().neonButton," flex items-center font-bold bg-[#FFFFFF22] duration-200 text-white rounded-sm border-0 text-xl py-4 px-7 border-white hover:bg-[#FFFFFF55] cursor-pointer"),children:"Read More"}),(0,i.jsxs)("a",{href:"https://github.com/nxy7",target:"_blank",onClick:()=>{console.log("z")},className:"".concat(u().neonButton," flex items-center font-bold bg-[#FFFFFF22] duration-200 text-white rounded-sm border-0 text-xl py-4 px-7 border-white hover:bg-[#FFFFFF55] cursor-pointer"),children:["My GitHub ",(0,i.jsx)("img",{src:"github_logo.svg",alt:"github icon",className:"ml-3 h-8 w-8 "})]})]})]})]}),(0,i.jsx)("div",{className:"grid place-items-center overflow-hidden",children:(0,i.jsx)("img",{className:"h-full w-full object-fit",src:"undraw_feeling_proud.svg"})})]})})},h=e=>{let{children:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{id:"contact",className:"flex flex-col items-center pb-20",children:[(0,i.jsx)("h2",{className:"text-5xl pb-4",children:"Contact"}),(0,i.jsx)("div",{children:"Feel free to contact me via email: danielukd@gmail.com"})]})})},m=e=>{let{children:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{})})},f=new Map([["rust",{name:"Rust",image:"rust_logo.svg"}],["ts",{name:"Typescript",image:"Typescript_logo_2020.svg"}],["go",{name:"Golang",image:"Go-Logo_Blue.svg"}],["docker",{name:"Docker",image:"docker-svgrepo-com.svg"}],["kubernetes",{name:"Kubernetes",image:"kubernetes.png"}],["react",{name:"React",image:"react.png"}],["svelte",{name:"Svelte",image:"svelte.png"}],["vue",{name:"Vue",image:"vue.png"}],["pgsql",{name:"Postgres",image:"pglogo.png"}],["kafka",{name:"Postgres",image:"kafka.png"}],["minio",{name:"Postgres",image:"minio.png"}],["nix",{name:"Nix",image:"nix_logo.svg"}]]),p=e=>{let{children:t,isVisibleCallback:n}=e;return c.Children.count(t),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{id:"techstack",className:"w-full py-10 flex flex-col items-center",children:[(0,i.jsx)("h2",{className:"text-5xl mb-10 text-center",children:"Technologies I've Used"}),(0,i.jsx)("div",{className:"flex gap-5 flex-wrap justify-center px-3",children:Array.from(f.values()).map((e,t)=>(0,i.jsx)("img",{className:"object-scale-down h-16 stroke-red",src:e.image},t))})]})})};function g(e){let{project:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"flex flex-col w-full items-center w-fit",children:[(0,i.jsxs)("div",{className:"px-2 max-w-120 lg:max-w-180 space-y-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"font-semibold mb-1",children:"Project description:"}),(0,i.jsx)("div",{className:"whitespace-pre-line",children:t.description})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"font-semibold mb-1",children:"Technologies used:"}),(0,i.jsx)("div",{className:"flex gap-3 flex-wrap justify-center",children:t.technologies.map((e,t)=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("img",{src:e.image,alt:"",className:"h-10"},t)}))})]})]}),(0,i.jsxs)("div",{className:"group mt-7 grid place-items-center relative w-full md:max-w-140 rounded-md aspect-video overflow-hidden",children:[(0,i.jsxs)("div",{className:"flex flex-col space-y-4 z-10 opacity-0 duration-350 group-hover:opacity-100",children:[t.liveLink&&(0,i.jsx)(x,{link:t.liveLink,children:"watch live"}),t.sourceCode&&(0,i.jsxs)(x,{link:t.sourceCode,children:["source code",(0,i.jsx)("img",{src:"github_logo.svg",alt:"github icon",className:"ml-3 h-8 w-8 "})]})]}),(0,i.jsx)("img",{src:t.backgroundImg,alt:"",className:"duration-350 absolute top-0 w-full h-full object-cover z-5 group-hover:blur-sm group-hover:saturate-50 "})]})]})})}function x(e){let{link:t,children:n}=e;return(0,i.jsx)("a",{href:t,className:"px-4 py-2 bg-slate-900 bg-opacity-70 hover:bg-opacity-90 duration-150 rounded-md text-white flex items-center justify-center font-bold text-xl",children:n})}let v=[{title:"Mediujemy.pl",description:"Website for mediation company.      ",liveLink:"https://mediujemy.pl",sourceCode:"https://github.com/nxy7/mediujemy",technologies:[f.get("ts"),f.get("vue")],backgroundImg:"mediujemy.jpg"},{title:"StockBuddy.pl",description:"Web app that makes following Polish Stock Market (GPW) data easier than ever. Unlike other websites StockBuddy displays data for long            timeframes in form of easily readable charts. Other than that the website has some features making stock valuation easier.        ",liveLink:"https://stockbuddy.pl",technologies:[f.get("ts"),f.get("react"),f.get("go"),f.get("pgsql"),f.get("docker"),f.get("nix")],backgroundImg:"stockbuddy.png"},{title:"Streampai.gg",description:"Web service dedicated for online broadcasters. Allows receiving donations and showing notifications on stream. Integrates with Youtube, Twitch and more.\n        Unlike other simmilar projects streampai merges notification streams from various sources and allows showing them within single component. There are many features that I'd love to implement into this project like custom notifications made by users (possibly using webassembly) and restreaming capibility.\n        Definitely the most ambitious project on the list, consisting of many microservices and hosted using kubernetes cluster. Right now it is not yet available publicly, but most of the underlying work is already done. What's left is polishing the way the app looks and it can go live.\n    ",technologies:[f.get("ts"),f.get("svelte"),f.get("rust"),f.get("pgsql"),f.get("docker"),f.get("nix"),f.get("kafka"),f.get("minio"),f.get("kubernetes")],backgroundImg:"streampai.png"}],b=e=>{let{children:t,isVisibleCallback:n}=e,[s,r]=(0,c.useState)(0);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{id:"projects",style:{},className:"flex flex-col w-full items-center",children:[(0,i.jsx)("h2",{className:"text-5xl mb-10",children:"My Projects"}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"flex space-x-4 flex-wrap justify-center",children:v.map((e,t)=>(0,i.jsx)("button",{onClick:()=>{r(t)},className:"px-4 py-3 text-white bg-transparent border-0 cursor-pointer text-2xl duration-200  underline! underline-offset-3 decoration-0 hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-500 focus:underline-offset-3 focus:decoration-2 focus:decoration-orange-500 active:underline-offset-5 ",children:e.title},t))})}),(0,i.jsx)("div",{style:{},className:"h-full w-full flex flex-col items-center mt-6",children:(0,i.jsx)(g,{project:v[s]})})]})})};function y(){let[e,t]=(0,c.useState)(0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{className:"jsx-f55849142cc42530",children:"Dawid Danieluk Portfolio Website"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-f55849142cc42530"})]}),(0,i.jsxs)("main",{className:"jsx-f55849142cc42530 bg-[#114B5F] text-white",children:[(0,i.jsx)(d,{isVisibleCallback:()=>{t(0)}}),(0,i.jsxs)("div",{className:"jsx-f55849142cc42530 flex flex-col gap-10 snap-proximity snap-y",children:[(0,i.jsx)(p,{isVisibleCallback:()=>{t(1)}}),(0,i.jsxs)(b,{isVisibleCallback:()=>{t(2)},children:[(0,i.jsx)("div",{className:"jsx-f55849142cc42530",children:"test1"}),(0,i.jsx)("div",{className:"jsx-f55849142cc42530",children:"test2"}),(0,i.jsx)("div",{className:"jsx-f55849142cc42530",children:"test3"}),(0,i.jsx)("div",{className:"jsx-f55849142cc42530",children:"test4"})]}),(0,i.jsx)(h,{})]}),(0,i.jsx)(m,{})]}),(0,i.jsx)(r(),{id:"81088bfa83227aab",children:".jsx-f55849142cc42530::-webkit-scrollbar{width:4px}.jsx-f55849142cc42530::-webkit-scrollbar-track{background:#222}.jsx-f55849142cc42530::-webkit-scrollbar-thumb{background:#fff}.jsx-f55849142cc42530::-webkit-scrollbar-thumb:hover{background:#555}footer.jsx-f55849142cc42530{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-f55849142cc42530 img.jsx-f55849142cc42530{margin-left:.5rem}footer.jsx-f55849142cc42530 a.jsx-f55849142cc42530{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;color:inherit}code.jsx-f55849142cc42530{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}"}),(0,i.jsx)(r(),{id:"4fbabcfed5a85c25",children:"html,body,main,#__next{scroll-behavior:smooth;padding:0;overflow-x:hidden;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"})]})}function j(e){return e.href?(0,i.jsx)("a",{href:e.href,className:"px-8 py-3 border-2 border-white rounded-sm duration-200 hover:bg-[#FFFFFF19] font-bold text-white",children:e.children}):(0,i.jsx)("button",{children:e.children})}},43:function(e){e.exports={neonButton:"Home_neonButton__Zx90T"}},9325:function(e){!function(){var t={229:function(e){var t,n,i,s=e.exports={};function r(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c=[],l=!1,u=-1;function d(){l&&i&&(l=!1,i.length?c=i.concat(c):u=-1,c.length&&h())}function h(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(i=c,c=[];++u<t;)i&&i[u].run();u=-1,t=c.length}i=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||l||a(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},n={};function i(e){var s=n[e];if(void 0!==s)return s.exports;var r=n[e]={exports:{}},o=!0;try{t[e](r,r.exports,i),o=!1}finally{o&&delete n[e]}return r.exports}i.ab="//";var s=i(229);e.exports=s}()},7998:function(e,t,n){e.exports=n(2289)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5594)}),_N_E=e.O()}]);