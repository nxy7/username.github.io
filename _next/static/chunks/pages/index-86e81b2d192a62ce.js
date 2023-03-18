(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{705:function(){},4211:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(6393)},240:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7327)}])},2433:function(e,t,n){var r=n(4211);n(705);var i=n(959),s=i&&"object"==typeof i&&"default"in i?i:{default:i};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=void 0!==r&&r.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,s=void 0===i?c:i;u(l(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",u("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(c||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(u(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return c||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){c||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];u(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&u(l(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},h={};function f(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return h[r]||(h[r]="jsx-"+d(e+"-"+n)),h[r]}function m(e,t){var n=e+t;return h[n]||(h[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i;this._sheet=r||new a({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var s=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=s,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=f(r,n);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return m(i,e)}):[m(i,t)]}}return{styleId:f(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),x=i.createContext(null);x.displayName="StyleSheetContext";var g=s.default.useInsertionEffect||s.default.useLayoutEffect,b=new p;function v(e){var t=b||i.useContext(x);return t&&g(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}v.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},t.style=v},2727:function(e,t,n){"use strict";e.exports=n(2433).style},7327:function(e,t,n){"use strict";n.r(t),n.d(t,{BlurredBG:function(){return v},FrontButton:function(){return b},default:function(){return d}});var r=n(1527),i=n(2727),s=n.n(i),o=n(3670),c=n.n(o),l=n(959),a=n(9048),u=n.n(a);function d(){let[e,t]=(0,l.useState)(0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{className:"jsx-f55849142cc42530",children:"Dawid Danieluk Portfolio Website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-f55849142cc42530"})]}),(0,r.jsxs)("main",{className:"jsx-f55849142cc42530 bg-primary text-white",children:[(0,r.jsx)(g,{isVisibleCallback:()=>{t(0)}}),(0,r.jsxs)("div",{className:"jsx-f55849142cc42530 flex flex-col gap-10 snap-proximity snap-y",children:[(0,r.jsx)(h,{isVisibleCallback:()=>{t(1)}}),(0,r.jsxs)(f,{isVisibleCallback:()=>{t(2)},children:[(0,r.jsx)("div",{className:"jsx-f55849142cc42530",children:"test1"}),(0,r.jsx)("div",{className:"jsx-f55849142cc42530",children:"test2"}),(0,r.jsx)("div",{className:"jsx-f55849142cc42530",children:"test3"}),(0,r.jsx)("div",{className:"jsx-f55849142cc42530",children:"test4"})]}),(0,r.jsx)(m,{})]}),(0,r.jsx)(p,{})]}),(0,r.jsx)(s(),{id:"81088bfa83227aab",children:".jsx-f55849142cc42530::-webkit-scrollbar{width:4px}.jsx-f55849142cc42530::-webkit-scrollbar-track{background:#222}.jsx-f55849142cc42530::-webkit-scrollbar-thumb{background:#fff}.jsx-f55849142cc42530::-webkit-scrollbar-thumb:hover{background:#555}footer.jsx-f55849142cc42530{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-f55849142cc42530 img.jsx-f55849142cc42530{margin-left:.5rem}footer.jsx-f55849142cc42530 a.jsx-f55849142cc42530{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none;color:inherit}code.jsx-f55849142cc42530{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}"}),(0,r.jsx)(s(),{id:"4fbabcfed5a85c25",children:"html,body,main,#__next{scroll-behavior:smooth;padding:0;overflow-x:hidden;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"})]})}let h=e=>{let{children:t,isVisibleCallback:n}=e;return l.Children.count(t),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("section",{className:"w-full px-32",children:[(0,r.jsx)("h2",{className:"text-5xl mb-10",children:"Technologies I Use"}),(0,r.jsx)("div",{className:"flex space-x-5",children:["Typescript_logo_2020.svg","Go-Logo_Blue.svg","rust_logo.svg","docker-svgrepo-com.svg","nix_logo.svg"].map((e,t)=>(0,r.jsx)("img",{className:"object-scale-down h-16",src:e},t))})]})})},f=e=>{let{children:t,isVisibleCallback:n}=e,[i,s]=(0,l.useState)(0);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{style:{},className:"h-screen border-2 border-black relative snap-center overflow-hidden",children:(0,r.jsxs)("div",{className:"grid grid-cols-5 h-full",children:[(0,r.jsxs)("div",{className:"col-span-3",children:[(0,r.jsx)("h2",{className:"text-5xl mb-10",children:"Projects"}),"project selection and details"]}),(0,r.jsx)("div",{style:{backgroundImage:"url(".concat([{title:"Mediujemy",technologies:[],backgroundImg:"mediujemy.png"},{title:"StockBuddy",technologies:[],backgroundImg:"mediujemy.png"},{title:"Streampai",technologies:[],backgroundImg:"mediujemy.png"}][i].backgroundImg,")"),backgroundPosition:"center",backgroundSize:"fit",clipPath:"ellipse(100% 150% at right)"},className:"col-span-2 h-full w-full"})]})})})},m=e=>{let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"text-5xl",children:"Contact"}),(0,r.jsx)("div",{children:"email?"})]})})},p=e=>{let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{children:"Footer"})})},x=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"md:absolute m-20 text-lg",children:(0,r.jsxs)("ul",{className:"flex gap-8 font-semibold",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#about",children:"About Me"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#techstack",children:"Tech Stack"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#projects",children:"My Projects"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#contact",children:"Contact"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/blog",children:"Blog"})})]})})}),g=e=>{let{isVisibleCallback:t}=e;return(0,r.jsxs)("section",{id:"main",className:"h-screen",children:[(0,r.jsx)(x,{}),(0,r.jsxs)("div",{className:"w-full overflow-hidden grow grid md:grid-cols-2 items-center place-items-center",children:[(0,r.jsxs)("div",{className:"text-white w-96 relative text-lg",children:[(0,r.jsx)("h1",{className:"font-bold italic text-5xl order-2 md:order-1",children:"whoami"}),(0,r.jsxs)("div",{className:"mt-3 space-y-3",children:[(0,r.jsx)("div",{children:"Developer passionate about new technologies. I value reliable software, so I tend to gravitate towards type safe languages/tech stacks, reproducible environments (nix) and test critical parts of my software."}),(0,r.jsx)("button",{onClick:()=>{console.log("z")},className:"".concat(u().neonButton," bg-[#FFFFFF22] duration-200 text-white text-semibold rounded-sm border-0 text-xl py-4 px-7 border-white hover:bg-[#FFFFFF55] cursor-pointer"),children:"Read more"})]})]}),(0,r.jsx)("div",{className:"w-full h-full overflow-hidden",children:(0,r.jsx)("img",{className:"ratio-square md:h-full object-fit p-20",src:"undraw_feeling_proud.svg"})})]})]})};function b(e){return e.href?(0,r.jsx)("a",{href:e.href,className:"px-8 py-3 border-2 border-white rounded-sm duration-200 hover:bg-[#FFFFFF19] font-bold text-white",children:e.children}):(0,r.jsx)("button",{children:e.children})}function v(){return(0,r.jsx)("div",{className:"absolute w-full h-20 -bottom-10 z-50 backdrop-blur-xl"})}},9048:function(e){e.exports={neonButton:"Home_neonButton__Zx90T"}},6393:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],a=!1,u=-1;function d(){a&&r&&(a=!1,r.length?l=r.concat(l):u=-1,l.length&&h())}function h(){if(!a){var e=c(d);a=!0;for(var t=l.length;t;){for(r=l,l=[];++u<t;)r&&r[u].run();u=-1,t=l.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||a||c(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,r),o=!1}finally{o&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},3670:function(e,t,n){e.exports=n(9041)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=240)}),_N_E=e.O()}]);