/*! For license information please see app.bundle.js.LICENSE.txt */
(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[143],{74:function(e,t,n){!function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(n);const{cssManager:s}=t.__,{DOM_COMPONENT_INSTANCE_PROPERTY:i}=t.__.globals;function a(e){const{name:n}=e;return n?o.default(`${n}, [is=${n}]`).map((r=>{const o=r[i];if(!o)return;o.unmount(!0),s.remove(n);const a=t.component(e)(r,o.props);return a.update(o.state),a})):(console.warn("Anonymous components can not be reloaded"),[])}e.default=a,e.reload=a,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(69),n(562))},432:e=>{!function(t,n){const r="*",o=Object.defineProperties,s=Object.entries,i=(e,t)=>(n,r)=>(e.has(n)?e.get(n).add(r):e.set(n,(new Set).add(r)),t),a=(e,t)=>(n,o)=>(n!==r||o?((e,t,n,r)=>{if(r){const t=e.get(n);t&&(t.delete(r),0===t.size&&e.delete(n))}else e.delete(n)})(e,0,n,o):e.clear(),t),u=(e,t)=>(e,n)=>t.on(e,(function r(...o){t.off(e,r),n.apply(t,o)})),c=(e,t)=>(n,...o)=>{const s=e.get(n);return s&&s.forEach((e=>e.apply(t,o))),e.get(r)&&n!==r&&t.trigger(r,n,...o),t};e.exports=function(e){const t=new Map;return o(e=e||{},s({on:i,off:a,one:u,trigger:c}).reduce(((n,[r,o])=>(n[r]={value:o(t,e),enumerable:!1,writable:!1,configurable:!1},n)),{})),e}}("undefined"!=typeof window&&window)},695:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(812);const o={css:null,exports:{state:{disabled:!0,items:[],text:""},onBeforeMount(e,t){r.Z.addStore(this.store),r.Z.on("todos_changed",(e=>{this.update({items:e})}))},onMounted(){r.Z.trigger("todo_init")},edit(e){this.update({text:e.target.value})},add(e){this.state.text&&(e.preventDefault(),e.target.input.value="",r.Z.trigger("todo_add",{title:this.state.text}))},toggle(e){e.done=!e.done,this.update()},remove(e){r.Z.trigger("todo_remove")}},template:(e,t,n,r)=>e('<h3>RiotControl ToDo Demo</h3><span>A Simplistic Central Event Controller / Dispatcher For RiotJS, Inspired By Flux</span><hr/><h3 expr0="expr0"> </h3><ul><li expr1="expr1"></li></ul><form expr4="expr4"><input expr5="expr5" name="input"/><button expr6="expr6"> </button></form><button expr7="expr7" class="danger">Remove</button>',[{redundantAttribute:"expr0",selector:"[expr0]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:e=>e.props.title}]},{type:n.EACH,getKey:null,condition:null,template:e('<label expr2="expr2"><input expr3="expr3" type="checkbox"/> </label>',[{redundantAttribute:"expr2",selector:"[expr2]",expressions:[{type:t.TEXT,childNodeIndex:1,evaluate:e=>[e.item.title].join("")},{type:t.ATTRIBUTE,name:"class",evaluate:e=>e.item.done&&"completed"}]},{redundantAttribute:"expr3",selector:"[expr3]",expressions:[{type:t.ATTRIBUTE,name:"checked",evaluate:e=>e.item.done},{type:t.EVENT,name:"onclick",evaluate:e=>()=>e.toggle(e.item)}]}]),redundantAttribute:"expr1",selector:"[expr1]",itemName:"item",indexName:null,evaluate:e=>e.state.items},{redundantAttribute:"expr4",selector:"[expr4]",expressions:[{type:t.EVENT,name:"onsubmit",evaluate:e=>e.add}]},{redundantAttribute:"expr5",selector:"[expr5]",expressions:[{type:t.EVENT,name:"onkeyup",evaluate:e=>e.edit}]},{redundantAttribute:"expr6",selector:"[expr6]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:e=>["Add #",e.state.items.length+1].join("")},{type:t.ATTRIBUTE,name:"disabled",evaluate:e=>!e.state.text}]},{redundantAttribute:"expr7",selector:"[expr7]",expressions:[{type:t.ATTRIBUTE,name:"disabled",evaluate:e=>!e.state.items.length},{type:t.EVENT,name:"onclick",evaluate:e=>e.remove}]}]),name:"todo"};(()=>{{const t=n(74).default;e.hot.accept(),e.hot.data&&t(n(695).default)}})()},562:(e,t,n)=>{"use strict";function r(e,t){return n="string"==typeof e?(t||document).querySelectorAll(e):e,Array.isArray(n)?n:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(n))&&"number"==typeof n.length?Array.from(n):[n];var n}n.r(t),n.d(t,{default:()=>r})},783:(e,t,n)=>{"use strict";var r=n(618),o=Object.create(null),s="undefined"==typeof document,i=Array.prototype.forEach;function a(){}function u(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(l(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var n=e.cloneNode();n.isLoaded=!1,n.addEventListener("load",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.addEventListener("error",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(n,e.nextSibling):e.parentNode.appendChild(n)}}function c(){var e=document.querySelectorAll("link");i.call(e,(function(e){!0!==e.visited&&u(e)}))}function l(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,t){if(s)return console.log("no window.document found, will not HMR CSS"),a;var n,d,p=function(e){var t=o[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var n=document.getElementsByTagName("script"),s=n[n.length-1];s&&(t=s.src)}o[e]=t}return function(e){if(!t)return null;var n=t.split(/([^\\/]+)\.js$/),o=n&&n[1];return o&&e?e.split(",").map((function(e){var n=new RegExp("".concat(o,"\\.js$"),"g");return r(t.replace(n,"".concat(e.replace(/{fileName}/g,o),".css")))})):[t.replace(".js",".css")]}}(e);return n=function(){var e=p(t.filename),n=function(e){if(!e)return!1;var t=document.querySelectorAll("link"),n=!1;return i.call(t,(function(t){if(t.href){var o=function(e,t){var n;return e=r(e),t.some((function(r){e.indexOf(t)>-1&&(n=r)})),n}(t.href,e);l(o)&&!0!==t.visited&&o&&(u(t,o),n=!0)}})),n}(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void c();n?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),c())},50,d=0,function(){var e=this,t=arguments,r=function(){return n.apply(e,t)};clearTimeout(d),d=setTimeout(r,50)}}},618:e=>{"use strict";e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",n=e.replace(new RegExp(t,"i"),"").split("/"),r=n[0].toLowerCase().replace(/\.$/,"");return n[0]="",t+r+n.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},307:(e,t,n)=>{"use strict";var r=n(783)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},69:(e,t,n)=>{"use strict";function r(e){return e.replace(/-(\w)/g,((e,t)=>t.toUpperCase()))}function o(e,t){e.firstChild&&(t.appendChild(e.firstChild),o(e,t))}function s(e){i(e.childNodes)}function i(e){Array.from(e).forEach(a)}n.r(t),n.d(t,{__:()=>nt,component:()=>We,install:()=>Xe,mount:()=>qe,pure:()=>Qe,register:()=>Ve,uninstall:()=>Je,unmount:()=>Ge,unregister:()=>Ze,version:()=>tt,withTypes:()=>et});const a=e=>e&&e.parentNode&&e.parentNode.removeChild(e),u=(e,t)=>t&&t.parentNode&&t.parentNode.insertBefore(e,t),c=new Map,l=Symbol("riot-component"),d=new Set,p="is",h="mount",m="update",f="unmount",g="shouldUpdate",b="onBeforeMount",v="onMounted",O="onBeforeUpdate",E="onUpdated",y="onBeforeUnmount",N="onUnmounted",T="props",x="state",_="slots",A="root",M=Symbol("pure"),j=Symbol("is_updating"),w=Symbol("parent"),S=Symbol("attributes"),C=Symbol("template");var D=Object.freeze({__proto__:null,COMPONENTS_IMPLEMENTATION_MAP:c,DOM_COMPONENT_INSTANCE_PROPERTY:l,PLUGINS_SET:d,IS_DIRECTIVE:p,VALUE_ATTRIBUTE:"value",MOUNT_METHOD_KEY:h,UPDATE_METHOD_KEY:m,UNMOUNT_METHOD_KEY:f,SHOULD_UPDATE_KEY:g,ON_BEFORE_MOUNT_KEY:b,ON_MOUNTED_KEY:v,ON_BEFORE_UPDATE_KEY:O,ON_UPDATED_KEY:E,ON_BEFORE_UNMOUNT_KEY:y,ON_UNMOUNTED_KEY:N,PROPS_KEY:T,STATE_KEY:x,SLOTS_KEY:_,ROOT_KEY:A,IS_PURE_SYMBOL:M,IS_COMPONENT_UPDATING:j,PARENT_KEY_SYMBOL:w,ATTRIBUTES_KEY_SYMBOL:S,TEMPLATE_KEY_SYMBOL:C}),P={EACH:0,IF:1,SIMPLE:2,TAG:3,SLOT:4},U={ATTRIBUTE:0,EVENT:1,TEXT:2,VALUE:3};const L=Symbol("head"),I=Symbol("tail");function R(e,t,n,r){return void 0===r&&(r={}),Object.defineProperty(e,t,Object.assign({value:n,enumerable:!1,writable:!1,configurable:!0},r)),e}function k(e,t,n){return Object.entries(t).forEach((t=>{let[r,o]=t;R(e,r,o,n)})),e}function B(e,t){return Object.entries(t).forEach((t=>{let[n,r]=t;e[n]||(e[n]=r)})),e}function Y(e,t){return typeof e===t}function K(e){const t=e.ownerSVGElement;return!!t||null===t}function $(e){return"template"===e.tagName.toLowerCase()}function H(e){return Y(e,"function")}function z(e){return!F(e)&&e.constructor===Object}function F(e){return null==e}const V=Symbol("unmount"),Z={nodes:[],mount(e,t){return this.update(e,t)},update(e,t){const{placeholder:n,nodes:r,childrenMap:o}=this,s=e===V?null:this.evaluate(e),i=s?Array.from(s):[],{newChildrenMap:c,batches:l,futureNodes:d}=function(e,t,n,r){const{condition:o,template:s,childrenMap:i,itemName:a,getKey:u,indexName:c,root:l,isTemplateTag:d}=r,p=new Map,h=[],m=[];return e.forEach(((e,r)=>{const f=function(e,t){let{itemName:n,indexName:r,index:o,item:s}=t;return R(e,n,s),r&&R(e,r,o),e}(Object.create(t),{itemName:a,indexName:c,index:r,item:e}),g=u?u(f):r,b=i.get(g),v=[];if(function(e,t){return!!e&&!e(t)}(o,f))return;const O=!b,E=b?b.template:s.clone(),y=E.el||l.cloneNode(),N=d&&O?function(e){const t=e.dom.cloneNode(!0),{head:n,tail:r}=function(){const e=document.createTextNode(""),t=document.createTextNode("");return e[L]=!0,t[I]=!0,{head:e,tail:t}}();return{avoidDOMInjection:!0,fragment:t,head:n,tail:r,children:[n,...Array.from(t.childNodes),r]}}(E):E.meta;O?h.push((()=>E.mount(y,f,n,N))):h.push((()=>E.update(f,n))),d?v.push(...N.children):v.push(y),i.delete(g),m.push(...v),p.set(g,{nodes:v,template:E,context:f,index:r})})),{newChildrenMap:p,batches:h,futureNodes:m}}(i,e,t,this);return((e,t,n,r)=>{const o=t.length;let s=e.length,i=o,c=0,l=0,d=null;for(;c<s||l<i;)if(s===c){const e=i<o?l?n(t[l-1],-0).nextSibling:n(t[i-l],0):r;for(;l<i;)u(n(t[l++],1),e)}else if(i===l)for(;c<s;)d&&d.has(e[c])||a(n(e[c],-1)),c++;else if(e[c]===t[l])c++,l++;else if(e[s-1]===t[i-1])s--,i--;else if(e[c]===t[i-1]&&t[l]===e[s-1]){const r=n(e[--s],-1).nextSibling;u(n(t[l++],1),n(e[c++],-1).nextSibling),u(n(t[--i],1),r),e[s]=t[i]}else{if(!d){d=new Map;let e=l;for(;e<i;)d.set(t[e],e++)}if(d.has(e[c])){const r=d.get(e[c]);if(l<r&&r<i){let o=c,a=1;for(;++o<s&&o<i&&d.get(e[o])===r+a;)a++;if(a>r-l){const o=n(e[c],0);for(;l<r;)u(n(t[l++],1),o)}else p=n(t[l++],1),(h=n(e[c++],-1))&&h.parentNode&&h.parentNode.replaceChild(p,h)}else c++}else a(n(e[c++],-1))}var p,h})(r,d,function(e,t){return(n,r)=>{if(r<0){const n=e[e.length-1];if(n){const{template:r,nodes:o,context:s}=n;o.pop(),o.length||(e.pop(),r.unmount(s,t,null))}}return n}}(Array.from(o.values()),t),n),l.forEach((e=>e())),this.childrenMap=c,this.nodes=d,this},unmount(e,t){return this.update(V,t),this}},q={mount(e,t){return this.update(e,t)},update(e,t){const n=!!this.evaluate(e),r=!this.value&&n,o=this.value&&!n,s=()=>{const n=this.node.cloneNode();u(n,this.placeholder),this.template=this.template.clone(),this.template.mount(n,e,t)};switch(!0){case r:s();break;case o:this.unmount(e);break;default:n&&this.template.update(e,t)}return this.value=n,this},unmount(e,t){return this.template.unmount(e,t,!0),this}};function G(e){throw new Error(e)}function X(e){const t=new Map,n=n=>(t.has(n)||t.set(n,e.call(this,n)))&&t.get(n);return n.cache=t,n}function J(e){return e.reduce(((e,t)=>{const{value:n,type:o}=t;switch(!0){case!t.name&&0===o:return Object.assign({},e,n);case 3===o:e.value=t.value;break;default:e[r(t.name)]=t.value}return e}),{})}const W="undefined"==typeof Element?{}:Element.prototype,Q=X((e=>W.hasOwnProperty(e)));const ee=/^on/,te={handleEvent(e){this[e.type](e)}},ne=new WeakMap;function re(e){return F(e)?"":e}const oe=(e,t)=>{const n=e.childNodes[t];if(n.nodeType===Node.COMMENT_NODE){const t=document.createTextNode("");return e.replaceChild(t,n),t}return n};var se={0:function e(t,n,r,o){let{name:s}=n;if(!s)return o&&function(e,t,n){const r=t?Object.keys(t):[];Object.keys(n).filter((e=>!r.includes(e))).forEach((t=>e.removeAttribute(t)))}(t,r,o),void(r&&function(t,n){Object.entries(n).forEach((n=>{let[r,o]=n;return e(t,{name:r},o)}))}(t,r));!Q(s)&&(function(e){return Y(e,"boolean")}(r)||z(r)||H(r))&&(t[s]=r),function(e){return!e&&0!==e}(r)?t.removeAttribute(s):function(e){return!0===e||["string","number"].includes(typeof e)}(r)&&t.setAttribute(s,function(e,t){return!0===t?e:t}(s,r))},1:function(e,t,n){let{name:r}=t;const o=r.replace(ee,""),s=ne.get(e)||(e=>{const t=Object.create(te);return ne.set(e,t),t})(e),[i,a]=(e=>Array.isArray(e)?e:[e,!1])(n),u=s[o],c=i&&!u;u&&!i&&e.removeEventListener(o,s),c&&e.addEventListener(o,s,a),s[o]=i},2:function(e,t,n){e.data=re(n)},3:function(e,t,n){e.value=re(n)}};const ie={mount(e){return this.value=this.evaluate(e),ae(this,this.value),this},update(e){const t=this.evaluate(e);return this.value!==t&&(ae(this,t),this.value=t),this},unmount(){return 1===this.type&&ae(this,null),this}};function ae(e,t){return se[e.type](e.node,e,t,e.value)}function ue(e,t){return Object.assign({},ie,t,{node:2===t.type?oe(e,t.childNodeIndex):e})}const ce=(e,t)=>e[w]||t,le={attributes:[],getTemplateScope(e,t){return function(e,t,n){if(!e||!e.length)return n;const r=e.map((e=>Object.assign({},e,{value:e.evaluate(t)})));return Object.assign(Object.create(n||null),J(r))}(this.attributes,e,t)},mount(e,t){const n=!!e.slots&&e.slots.find((e=>{let{id:t}=e;return t===this.name})),{parentNode:r}=this.node,o=ce(e,t);return this.template=n&&Oe(n.html,n.bindings).createDOM(r),this.template&&(s(this.node),this.template.mount(this.node,this.getTemplateScope(e,o),o),this.template.children=Array.from(this.node.childNodes)),de(this.node),a(this.node),this},update(e,t){if(this.template){const n=ce(e,t);this.template.update(this.getTemplateScope(e,n),n)}return this},unmount(e,t,n){return this.template&&this.template.unmount(this.getTemplateScope(e,t),null,n),this}};function de(e){const t=e&&e.firstChild;t&&(u(t,e),de(e))}function pe(e){return e.reduce(((e,t)=>{let{bindings:n}=t;return e.concat(n)}),[])}const he={mount(e){return this.update(e)},update(e,t){const n=this.evaluate(e);return n&&n===this.name?this.tag.update(e):(this.unmount(e,t,!0),this.name=n,this.tag=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=[]),e?e({slots:t,attributes:n}):Oe(function(e){return e.reduce(((e,t)=>e+t.html),"")}(t),[...pe(t),{expressions:n.map((e=>Object.assign({type:0},e)))}])}(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,e)),this},unmount(e,t,n){return this.tag&&this.tag.unmount(n),this}};var me={1:function(e,t){let{evaluate:n,template:r}=t;const o=document.createTextNode("");return u(o,e),a(e),Object.assign({},q,{node:e,evaluate:n,placeholder:o,template:r.createDOM(e)})},2:function(e,t){let{expressions:n}=t;return Object.assign({},(r=n.map((t=>ue(e,t))),["mount","update","unmount"].reduce(((e,t)=>Object.assign({},e,{[t]:e=>r.map((n=>n[t](e)))&&undefined})),{})));var r},0:function(e,t){let{evaluate:n,condition:r,itemName:o,indexName:s,getKey:i,template:c}=t;const l=document.createTextNode(""),d=e.cloneNode();return u(l,e),a(e),Object.assign({},Z,{childrenMap:new Map,node:e,root:d,condition:r,evaluate:n,isTemplateTag:$(d),template:c.createDOM(e),getKey:i,indexName:s,itemName:o,placeholder:l})},3:function(e,t){let{evaluate:n,getComponent:r,slots:o,attributes:s}=t;return Object.assign({},he,{node:e,evaluate:n,slots:o,attributes:s,getComponent:r})},4:function(e,t){let{name:n,attributes:r}=t;return Object.assign({},le,{attributes:r,node:e,name:n})}};function fe(e,t){return e.map((e=>2===e.type?Object.assign({},e,{childNodeIndex:e.childNodeIndex+t}):e))}function ge(e,t,n){const{selector:r,type:o,redundantAttribute:s,expressions:i}=t,a=r?e.querySelector(r):e;s&&a.removeAttribute(s);const u=i||[];return(me[o]||me[2])(a,Object.assign({},t,{expressions:n&&!r?fe(u,n):u}))}function be(e,t){switch(!0){case K(e):o(t,e);break;case $(e):e.parentNode.replaceChild(t,e);break;default:e.appendChild(t)}}const ve=Object.freeze({createDOM(e){return this.dom=this.dom||function(e,t){return t&&("string"==typeof t?function(e,t){return K(e)?function(e,t){return t.ownerDocument.importNode((new window.DOMParser).parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${e}</svg>`,"application/xml").documentElement,!0)}(t,e):function(e,t){const n=$(t)?t:document.createElement("template");return n.innerHTML=e,n.content}(t,e)}(e,t):t)}(e,this.html)||document.createDocumentFragment(),this},mount(e,t,n,r){if(void 0===r&&(r={}),!e)throw new Error("Please provide DOM node to mount properly your template");this.el&&this.unmount(t);const{fragment:o,children:s,avoidDOMInjection:i}=r,{parentNode:a}=s?s[0]:e,u=$(e),c=u?function(e,t,n){const r=Array.from(e.childNodes);return Math.max(r.indexOf(t),r.indexOf(n.head)+1,0)}(a,e,r):null;this.createDOM(e);const l=o||this.dom.cloneNode(!0);return this.el=u?a:e,this.children=u?s||Array.from(l.childNodes):null,!i&&l&&be(e,l),this.bindings=this.bindingsData.map((e=>ge(this.el,e,c))),this.bindings.forEach((e=>e.mount(t,n))),this.meta=r,this},update(e,t){return this.bindings.forEach((n=>n.update(e,t))),this},unmount(e,t,n){void 0===n&&(n=!1);const r=this.el;if(!r)return this;switch(this.bindings.forEach((r=>r.unmount(e,t,n))),!0){case r[M]||null===n:break;case Array.isArray(this.children):i(this.children);break;case!n:s(r);break;case!!n:a(r)}return this.el=null,this},clone(){return Object.assign({},this,{meta:{},el:null})}});function Oe(e,t){return void 0===t&&(t=[]),Object.assign({},ve,{html:e,bindingsData:t})}var Ee=Object.freeze({__proto__:null,template:Oe,createBinding:ge,createExpression:ue,bindingTypes:P,expressionTypes:U});function ye(){return this}function Ne(e){return H(e)?e.prototype&&e.prototype.constructor?new e:e():e}function Te(e){return Array.isArray(e)?e:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&"number"==typeof e.length?Array.from(e):[e]}function xe(e,t){return Te("string"==typeof e?(t||document).querySelectorAll(e):e)}const _e=e=>1===e.length?e[0]:e;function Ae(e,t,n){const r="object"==typeof t?t:{[t]:n},o=Object.keys(r);return Te(e).forEach((e=>{o.forEach((t=>e.setAttribute(t,r[t])))})),e}const Me=new Map;var je,we={CSS_BY_NAME:Me,add(e,t){return Me.has(e)||(Me.set(e,t),this.inject()),this},inject(){return(je||(Ae(je=xe("style[riot]")[0]||document.createElement("style"),"type","text/css"),je.parentNode||document.head.appendChild(je),je)).innerHTML=[...Me.values()].join("\n"),this},remove(e){return Me.has(e)&&(Me.delete(e),this.inject()),this}};function Se(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(r=[...n,...r]).length<e.length?Se(e,...r):e(...r)}}function Ce(e){return function(e,t,n){const r="string"==typeof t?[t]:t;return _e(Te(e).map((e=>_e(r.map((t=>e.getAttribute(t)))))))}(e,p)||e.tagName.toLowerCase()}const De=Object.freeze({$(e){return xe(e,this.root)[0]},$$(e){return xe(e,this.root)}}),Pe=Object.freeze({[h]:ye,[m]:ye,[f]:ye}),Ue=Object.freeze({[g]:ye,[b]:ye,[v]:ye,[O]:ye,[E]:ye,[y]:ye,[N]:ye}),Le=Object.assign({},Pe,{clone:ye,createDOM:ye}),Ie=X(Be);const Re=(e,t)=>e[l]=t;function ke(e){return[h,m,f].reduce(((t,n)=>(t[n]=e(n),t)),{})}function Be(e){const{css:t,template:n,exports:r,name:o}=e,s=n?function(e,t){const n=function(e){return void 0===e&&(e={}),Object.entries(Ne(e)).reduce(((e,t)=>{let[n,r]=t;var o;return e[(o=n,o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())]=Be(r),e}),{})}(t.exports?t.exports.components:{});return e(Oe,U,P,(e=>e===t.name?Ie(t):n[e]||c.get(e)))}(n,e):Le;return e=>{let{slots:i,attributes:a,props:u}=e;if(r&&r[M])return function(e,t){let{slots:n,attributes:r,props:o,css:s,template:i}=t;i&&G("Pure components can not have html"),s&&G("Pure components do not have css");const a=B(e({slots:n,attributes:r,props:o}),Pe);return ke((e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(e===h){const[e]=n;R(e,M,!0),Re(e,a)}return a[e](...n),a}))}(r,{slots:i,attributes:a,props:u,css:t,template:n});const c=Ne(r)||{},l=Ye({css:t,template:s,componentAPI:c,name:o})({slots:i,attributes:a,props:u});return{mount:(e,t,n)=>l.mount(e,n,t),update:(e,t)=>l.update(t,e),unmount:e=>l.unmount(e)}}}function Ye(e){let{css:t,template:n,componentAPI:r,name:o}=e;return t&&o&&we.add(o,t),Se($e)(k(B(r,Object.assign({},Ue,{[T]:{},[x]:{}})),Object.assign({[_]:null,[A]:null},De,{name:o,css:t,template:n})))}function Ke(e,t){return Object.assign({},e,Ne(t))}function $e(e,t){let{slots:n,attributes:o,props:s}=t;return i=function(e){return[...d].reduce(((e,t)=>t(e)||e),e)}(k(z(e)?Object.create(e):e,{mount(t,i,a){return void 0===i&&(i={}),R(t,M,!1),this[w]=a,this[S]=function(e,t){void 0===t&&(t=[]);const n=t.map((t=>ue(e,t))),r={};return Object.assign(r,Object.assign({expressions:n},ke((e=>t=>(n.forEach((n=>n[e](t))),r)))))}(t,o).mount(a),R(this,T,Object.freeze(Object.assign({},function(e,t){return void 0===t&&(t={}),Object.assign({},function(e){return Array.from(e.attributes).reduce(((e,t)=>(e[r(t.name)]=t.value,e)),{})}(e),Ne(t))}(t,s),J(this[S].expressions)))),this.state=Ke(this.state,i),this[C]=this.template.createDOM(t).clone(),Re(t,this),e.name&&function(e,t){Ce(e)!==t&&Ae(e,p,t)}(t,e.name),R(this,A,t),R(this,_,n),this.onBeforeMount(this.props,this.state),this[C].mount(t,this,a),this.onMounted(this.props,this.state),this},update(e,t){void 0===e&&(e={}),t&&(this[w]=t,this[S].update(t));const n=J(this[S].expressions);if(!1!==this.shouldUpdate(n,this.props))return R(this,T,Object.freeze(Object.assign({},this.props,n))),this.state=Ke(this.state,e),this.onBeforeUpdate(this.props,this.state),this[j]||(this[j]=!0,this[C].update(this,this[w])),this.onUpdated(this.props,this.state),this[j]=!1,this},unmount(e){return this.onBeforeUnmount(this.props,this.state),this[S].unmount(),this[C].unmount(this,this[w],null===e?null:!e),this.onUnmounted(this.props,this.state),this}})),Object.keys(e).filter((t=>H(e[t]))).forEach((e=>{i[e]=i[e].bind(i)})),i;var i}const{DOM_COMPONENT_INSTANCE_PROPERTY:He,COMPONENTS_IMPLEMENTATION_MAP:ze,PLUGINS_SET:Fe}=D;function Ve(e,t){let{css:n,template:r,exports:o}=t;return ze.has(e)&&G(`The component "${e}" was already registered`),ze.set(e,Be({name:e,css:n,template:r,exports:o})),ze}function Ze(e){return ze.has(e)||G(`The component "${e}" was never registered`),ze.delete(e),we.remove(e),ze}function qe(e,t,n){return xe(e).map((e=>function(e,t,n){const r=n||Ce(e);return c.has(r)||G(`The component named "${r}" was never registered`),c.get(r)({props:t}).mount(e)}(e,t,n)))}function Ge(e,t){return xe(e).map((e=>(e[He]&&e[He].unmount(t),e)))}function Xe(e){return H(e)||G("Plugins must be of type function"),Fe.has(e)&&G("This plugin was already installed"),Fe.add(e),Fe}function Je(e){return Fe.has(e)||G("This plugin was never installed"),Fe.delete(e),Fe}function We(e){return function(t,n,r){let{slots:o,attributes:s,parentScope:i}=void 0===r?{}:r;return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>function(){return e(t(...arguments))}))}((e=>e.mount(t,i)),(e=>e({props:n,slots:o,attributes:s})),Be)(e)}}function Qe(e){return H(e)||G('riot.pure accepts only arguments of type "function"'),e[M]=!0,e}const et=e=>e,tt="v6.1.2",nt={cssManager:we,DOMBindings:Ee,createComponent:Be,defineComponent:Ye,globals:D}},191:(e,t,n)=>{var r={"./todo/todo.riot":695};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=191},94:(e,t,n)=>{"use strict";n(307),n(74);var r=n(69);const o=n(191);var s=n(432),i=n.n(s);function a(){i()(this);const e=this;e.todos=[{title:"Task 1",done:!1},{title:"Task 2",done:!1}],e.on("todo_add",(t=>{e.todos.push(t),e.trigger("todos_changed",e.todos)})),e.on("todo_remove",(()=>{e.todos.pop(),e.trigger("todos_changed",e.todos)})),e.on("todo_init",(()=>{e.trigger("todos_changed",e.todos)}))}(0,r.install)((e=>{const t=i()(e);return t.store=new a,t})),o.keys().map((e=>{const t=((e,t="")=>e.split("/").reverse()[0].replace(t,""))(e,".riot"),n=o(e);return(0,r.register)(t,n.default||n),{name:t,component:n}})),(0,r.mount)("[data-riot-component]")},812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const r={_stores:[],addStore:function(e){this._stores.push(e)},reset:function(){this._stores=[]}};["on","one","off","trigger"].forEach((e=>{r[e]=function(){const t=[].slice.call(arguments);this._stores.forEach((n=>{n[e].apply(n,t)}))}}));const o=r}},e=>{e(e.s=94)}]);
//# sourceMappingURL=app.bundle.js.map