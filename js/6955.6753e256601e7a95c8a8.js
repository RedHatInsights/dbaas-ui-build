"use strict";(self.webpackChunkdbaas=self.webpackChunkdbaas||[]).push([[6955],{5824:(e,t,n)=>{n.d(t,{u:()=>D});var o=n(5353),r=n(2747);n(9854);const i="pf-m-top",s="pf-m-top-left",a="pf-m-top-right",c="pf-m-bottom",l="pf-m-bottom-left",p="pf-m-bottom-right",f="pf-m-left",u="pf-m-left-top",d="pf-m-left-bottom",m="pf-m-right",h="pf-m-right-top",g="pf-m-right-bottom",b="pf-m-text-align-left";var y=n(8296);const x=e=>{var{className:t,children:n,isLeftAligned:i}=e,s=(0,o._T)(e,["className","children","isLeftAligned"]);return r.createElement("div",Object.assign({className:(0,y.i)("pf-v5-c-tooltip__content",i&&b,t)},s),n)};x.displayName="TooltipContent";const O=e=>{var{className:t}=e,n=(0,o._T)(e,["className"]);return r.createElement("div",Object.assign({className:(0,y.i)("pf-v5-c-tooltip__arrow",t)},n))};O.displayName="TooltipArrow";var v=n(1405);const w={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var E,j=n(9121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(E||(E={}));let M=1;const D=e=>{var{content:t,position:n="top",trigger:b="mouseenter focus",isVisible:E=!1,isContentLeftAligned:D=!1,enableFlip:k=!0,className:L="",entryDelay:P=300,exitDelay:T=300,appendTo:W=(()=>document.body),zIndex:S=9999,minWidth:C,maxWidth:N=w.value,distance:$=15,aria:R="describedby",flipBehavior:B=["top","right","bottom","left","top","right","bottom"],id:A="pf-tooltip-"+M++,children:H,animationDuration:I=300,triggerRef:z,"aria-live":F=(z?"polite":"off"),onTooltipHidden:_=(()=>{})}=e,q=(0,o._T)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const V=b.includes("mouseenter"),U=b.includes("focus"),J=b.includes("click"),K="manual"===b,[X,Y]=r.useState(!1),Z=r.createRef();r.useEffect((()=>{E?G():Q()}),[E]);const G=()=>{Y(!0)},Q=()=>{Y(!1)},ee={top:i,bottom:c,left:f,right:m,"top-start":s,"top-end":a,"bottom-start":l,"bottom-end":p,"left-start":u,"left-end":d,"right-start":h,"right-end":g},te=N!==w.value,ne=r.createElement("div",Object.assign({"aria-live":F,className:(0,y.i)("pf-v5-c-tooltip",L),role:"tooltip",id:A,style:{maxWidth:te?N:null},ref:Z},q),r.createElement(O,null),r.createElement(x,{isLeftAligned:D},t));return r.createElement(j.rD,{trigger:"none"!==R&&X?"describedby"===R&&H&&H.props&&!H.props["aria-describedby"]?r.cloneElement(H,{"aria-describedby":A}):"labelledby"===R&&H.props&&!H.props["aria-labelledby"]?r.cloneElement(H,{"aria-labelledby":A}):H:H,triggerRef:z,popper:ne,popperRef:Z,minWidth:void 0!==C?C:"revert",appendTo:W,isVisible:X,positionModifiers:ee,distance:$,placement:n,onMouseEnter:V&&G,onMouseLeave:V&&Q,onPopperMouseEnter:V&&G,onPopperMouseLeave:V&&Q,onFocus:U&&G,onBlur:U&&Q,onDocumentClick:J&&((e,t)=>{X?Q():e.target===t&&G()}),onDocumentKeyDown:K?null:e=>{K||e.key===v.yu.Escape&&X&&Q()},onTriggerEnter:K?null:e=>{e.key===v.yu.Enter&&(X?Q():G())},enableFlip:k,zIndex:S,flipBehavior:B,animationDuration:I,entryDelay:P,exitDelay:T,onHidden:_})};D.displayName="Tooltip"},9121:(e,t,n)=>{n.d(t,{rD:()=>ge});var o=n(2747),r=n(56);function i(e){const t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function s(e){if("[object Window]"!==e.toString()){const t=e.ownerDocument;return t?t.defaultView:window}return e}function a(e){const t=s(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function c(e){return e instanceof s(e).Element||e instanceof Element}function l(e){return e instanceof s(e).HTMLElement||e instanceof HTMLElement}function p(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return(c(e)?e.ownerDocument:e.document).documentElement}function u(e){return i(f(e)).left+a(e).scrollLeft}function d(e){return s(e).getComputedStyle(e)}function m(e){const{overflow:t,overflowX:n,overflowY:o}=d(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function h(e,t,n=!1){const o=f(t),r=i(e),c=l(t);let d={scrollLeft:0,scrollTop:0},h={x:0,y:0};var g,b;return(c||!c&&!n)&&(("body"!==p(t)||m(o))&&(d=(g=t)!==s(g)&&l(g)?{scrollLeft:(b=g).scrollLeft,scrollTop:b.scrollTop}:a(g)),l(t)?(h=i(t),h.x+=t.clientLeft,h.y+=t.clientTop):o&&(h.x=u(o))),{x:r.left+d.scrollLeft-h.x,y:r.top+d.scrollTop-h.y,width:r.width,height:r.height}}function g(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function b(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||e.host||f(e)}function y(e){return["html","body","#document"].indexOf(p(e))>=0?e.ownerDocument.body:l(e)&&m(e)?e:y(b(e))}function x(e,t=[]){const n=y(e),o="body"===p(n),r=s(n),i=o?[r].concat(r.visualViewport||[],m(n)?n:[]):n,a=t.concat(i);return o?a:a.concat(x(b(i)))}function O(e){return["table","td","th"].indexOf(p(e))>=0}function v(e){if(!l(e)||"fixed"===d(e).position)return null;const t=e.offsetParent;if(t){const e=f(t);if("body"===p(t)&&"static"===d(t).position&&"static"!==d(e).position)return e}return t}function w(e){const t=s(e);let n=v(e);for(;n&&O(n)&&"static"===d(n).position;)n=v(n);return n&&"body"===p(n)&&"static"===d(n).position?t:n||function(e){let t=b(e);for(;l(t)&&["html","body"].indexOf(p(t))<0;){const e=d(t);if("none"!==e.transform||"none"!==e.perspective||e.willChange&&"auto"!==e.willChange)return t;t=t.parentNode}return null}(e)||t}const E="top",j="bottom",M="right",D="left",k="auto",L=[E,j,M,D],P="start",T="end",W="clippingParents",S="viewport",C="popper",N=L.reduce(((e,t)=>e.concat([`${t}-${P}`,`${t}-${T}`])),[]),$=[...L,k].reduce(((e,t)=>e.concat([t,`${t}-${P}`,`${t}-${T}`])),[]),R=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function B(e){const t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[...e.requires||[],...e.requiresIfExists||[]].forEach((e=>{if(!n.has(e)){const n=t.get(e);n&&r(n)}})),o.push(e)}return e.forEach((e=>{t.set(e.name,e)})),e.forEach((e=>{n.has(e.name)||r(e)})),o}function A(e){let t;return()=>(t||(t=new Promise((n=>{Promise.resolve().then((()=>{t=void 0,n(e())}))}))),t)}const H={placement:"bottom",modifiers:[],strategy:"absolute"};function I(...e){return!e.some((e=>!(e&&"function"==typeof e.getBoundingClientRect)))}function z(e={}){const{defaultModifiers:t=[],defaultOptions:n=H}=e;return function(e,o,r=n){let i={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},H),n),modifiersData:{},elements:{reference:e,popper:o},attributes:{},styles:{}},s=[],a=!1;const l={state:i,setOptions(r){p(),i.options=Object.assign(Object.assign(Object.assign({},n),i.options),r),i.scrollParents={reference:c(e)?x(e):e.contextElement?x(e.contextElement):[],popper:x(o)};const a=function(e){const t=B(e);return R.reduce(((e,n)=>e.concat(t.filter((e=>e.phase===n)))),[])}(function(e){const t=e.reduce(((e,t)=>{const n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((e=>t[e]))}([...t,...i.options.modifiers]));return i.orderedModifiers=a.filter((e=>e.enabled)),i.orderedModifiers.forEach((({name:e,options:t={},effect:n})=>{if("function"==typeof n){const o=n({state:i,name:e,instance:l,options:t}),r=()=>{};s.push(o||r)}})),l.update()},forceUpdate(){if(a)return;const{reference:e,popper:t}=i.elements;if(I(e,t)){i.rects={reference:h(e,w(t),"fixed"===i.options.strategy),popper:g(t)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((e=>i.modifiersData[e.name]=Object.assign({},e.data)));for(let e=0;e<i.orderedModifiers.length;e++){if(!0===i.reset){i.reset=!1,e=-1;continue}const{fn:t,options:n={},name:o}=i.orderedModifiers[e];"function"==typeof t&&(i=t({state:i,options:n,name:o,instance:l})||i)}}},update:A((()=>new Promise((e=>{l.forceUpdate(),e(i)})))),destroy(){p(),a=!0}};if(!I(e,o))return l;function p(){s.forEach((e=>e())),s=[]}return l.setOptions(r).then((e=>{!a&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}z();const F={passive:!0};function _(e){return e.split("-")[0]}function q(e){return e.split("-")[1]}function V(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function U({reference:e,element:t,placement:n}){const o=n?_(n):null,r=n?q(n):null,i=e.x+e.width/2-t.width/2,s=e.y+e.height/2-t.height/2;let a;switch(o){case E:a={x:i,y:e.y-t.height};break;case j:a={x:i,y:e.y+e.height};break;case M:a={x:e.x+e.width,y:s};break;case D:a={x:e.x-t.width,y:s};break;default:a={x:e.x,y:e.y}}const c=o?V(o):null;if(null!=c){const n="y"===c?"height":"width";switch(r){case P:a[c]=Math.floor(a[c])-Math.floor(e[n]/2-t[n]/2);break;case T:a[c]=Math.floor(a[c])+Math.ceil(e[n]/2-t[n]/2)}}return a}const J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K({popper:e,popperRect:t,placement:n,offsets:o,position:r,gpuAcceleration:i,adaptive:a}){let{x:c,y:l}=function({x:e,y:t}){const n=window.devicePixelRatio||1;return{x:Math.round(e*n)/n||0,y:Math.round(t*n)/n||0}}(o);const p=o.hasOwnProperty("x"),u=o.hasOwnProperty("y");let d=D,m=E;const h=window;if(a){let o=w(e);o===s(e)&&(o=f(e)),n===E&&(m=j,l-=o.clientHeight-t.height,l*=i?1:-1),n===D&&(d=M,c-=o.clientWidth-t.width,c*=i?1:-1)}const g=Object.assign({position:r},a&&J);return i?Object.assign(Object.assign({},g),{[m]:u?"0":"",[d]:p?"0":"",transform:(h.devicePixelRatio||1)<2?`translate(${c}px, ${l}px)`:`translate3d(${c}px, ${l}px, 0)`}):Object.assign(Object.assign({},g),{[m]:u?`${l}px`:"",[d]:p?`${c}px`:"",transform:""})}const X={left:"right",right:"left",bottom:"top",top:"bottom"};function Y(e){return e.replace(/left|right|bottom|top/g,(e=>X[e]))}const Z={start:"end",end:"start"};function G(e){return e.replace(/start|end/g,(e=>Z[e]))}function Q(e,t){const n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){let n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ee(e){return Object.assign(Object.assign({},e),{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,t){return t===S?ee(function(e){const t=s(e),n=f(e),o=t.visualViewport;let r=n.clientWidth,i=n.clientHeight,a=0,c=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,c=o.offsetTop)),{width:r,height:i,x:a+u(e),y:c}}(e)):l(t)?function(e){const t=i(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ee(function(e){const t=f(e),n=a(e),o=e.ownerDocument.body,r=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let s=-n.scrollLeft+u(e);const c=-n.scrollTop;return"rtl"===d(o||t).direction&&(s+=Math.max(t.clientWidth,o?o.clientWidth:0)-r),{width:r,height:i,x:s,y:c}}(f(e)))}function ne(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function oe(e,t){return t.reduce(((t,n)=>(t[n]=e,t)),{})}function re(e,t={}){const{placement:n=e.placement,boundary:o=W,rootBoundary:r=S,elementContext:s=C,altBoundary:a=!1,padding:u=0}=t,m=ne("number"!=typeof u?u:oe(u,L)),h=s===C?"reference":C,g=e.elements.reference,y=e.rects.popper,O=e.elements[a?h:s],v=function(e,t,n){const o="clippingParents"===t?function(e){const t=x(b(e)),n=["absolute","fixed"].indexOf(d(e).position)>=0&&l(e)?w(e):e;return c(n)?t.filter((e=>c(e)&&Q(e,n)&&"body"!==p(e))):[]}(e):[].concat(t),r=[...o,n],i=r[0],s=r.reduce(((t,n)=>{const o=te(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),te(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(c(O)?O:O.contextElement||f(e.elements.popper),o,r),D=i(g),k=U({reference:D,element:y,strategy:"absolute",placement:n}),P=ee(Object.assign(Object.assign({},y),k)),T=s===C?P:D,N={top:v.top-T.top+m.top,bottom:T.bottom-v.bottom+m.bottom,left:v.left-T.left+m.left,right:T.right-v.right+m.right},$=e.modifiersData.offset;if(s===C&&$){const e=$[n];Object.keys(N).forEach((t=>{const n=[M,j].indexOf(t)>=0?1:-1,o=[E,j].indexOf(t)>=0?"y":"x";N[t]+=e[o]*n}))}return N}function ie(e,t,n){return Math.max(e,Math.min(t,n))}function se(e,t,n={x:0,y:0}){return{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[E,M,j,D].some((t=>e[t]>=0))}const ce=z({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:()=>{},effect:function({state:e,instance:t,options:n}){const{scroll:o=!0,resize:r=!0}=n,i=s(e.elements.popper),a=[...e.scrollParents.reference,...e.scrollParents.popper];return o&&a.forEach((e=>{e.addEventListener("scroll",t.update,F)})),r&&i.addEventListener("resize",t.update,F),()=>{o&&a.forEach((e=>{e.removeEventListener("scroll",t.update,F)})),r&&i.removeEventListener("resize",t.update,F)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function({state:e,name:t}){e.modifiersData[t]=U({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function({state:e,options:t}){const{gpuAcceleration:n=!0,adaptive:o=!0}=t,r={placement:_(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),K(Object.assign(Object.assign({},r),{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),K(Object.assign(Object.assign({},r),{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function({state:e}){Object.keys(e.elements).forEach((t=>{const n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t];l(r)&&p(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((e=>{const t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function({state:e}){const t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),()=>{Object.keys(e.elements).forEach((n=>{const o=e.elements[n],r=e.attributes[n]||{},i=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]).reduce(((e,t)=>(e[t]="",e)),{});l(o)&&p(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((e=>{o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function({state:e,options:t,name:n}){const{offset:o=[0,0]}=t,r=$.reduce(((t,n)=>(t[n]=function(e,t,n){const o=_(e),r=[D,E].indexOf(o)>=0?-1:1;let[i,s]="function"==typeof n?n(Object.assign(Object.assign({},t),{placement:e})):n;return i=i||0,s=(s||0)*r,[D,M].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}(n,e.rects,o),t)),{}),{x:i,y:s}=r[e.placement];null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=s),e.modifiersData[n]=r}},{name:"flip",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){if(e.modifiersData[n]._skip)return;const{mainAxis:o=!0,altAxis:r=!0,fallbackPlacements:i,padding:s,boundary:a,rootBoundary:c,altBoundary:l,flipVariations:p=!0,allowedAutoPlacements:f}=t,u=e.options.placement,d=_(u),m=[u,...i||(d!==u&&p?function(e){if(_(e)===k)return[];const t=Y(e);return[G(e),t,G(t)]}(u):[Y(u)])].reduce(((t,n)=>t.concat(_(n)===k?function(e,t={}){const{placement:n,boundary:o,rootBoundary:r,padding:i,flipVariations:s,allowedAutoPlacements:a=$}=t,c=q(n),l=c?s?N:N.filter((e=>q(e)===c)):L;let p=l.filter((e=>a.indexOf(e)>=0));0===p.length&&(p=l);const f=p.reduce(((t,n)=>(t[n]=re(e,{placement:n,boundary:o,rootBoundary:r,padding:i})[_(n)],t)),{});return Object.keys(f).sort(((e,t)=>f[e]-f[t]))}(e,{placement:n,boundary:a,rootBoundary:c,padding:s,flipVariations:p,allowedAutoPlacements:f}):n)),[]),h=e.rects.reference,g=e.rects.popper,b=new Map;let y=!0,x=m[0];for(let t=0;t<m.length;t++){const n=m[t],i=_(n),p=q(n)===P,f=[E,j].indexOf(i)>=0,u=f?"width":"height",d=re(e,{placement:n,boundary:a,rootBoundary:c,altBoundary:l,padding:s});let O=f?p?M:D:p?j:E;h[u]>g[u]&&(O=Y(O));const v=Y(O),w=[];if(o&&w.push(d[i]<=0),r&&w.push(d[O]<=0,d[v]<=0),w.every((e=>e))){x=n,y=!1;break}b.set(n,w)}if(y)for(let e=p?3:1;e>0;e--){const t=m.find((t=>{const n=b.get(t);if(n)return n.slice(0,e).every((e=>e))}));if(t){x=t;break}}e.placement!==x&&(e.modifiersData[n]._skip=!0,e.placement=x,e.reset=!0)},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){const{mainAxis:o=!0,altAxis:r=!1,boundary:i,rootBoundary:s,altBoundary:a,padding:c,tether:l=!0,tetherOffset:p=0}=t,f=re(e,{boundary:i,rootBoundary:s,padding:c,altBoundary:a}),u=_(e.placement),d=q(e.placement),m=!d,h=V(u),b="x"===h?"y":"x",y=e.modifiersData.popperOffsets,x=e.rects.reference,O=e.rects.popper,v="function"==typeof p?p(Object.assign(Object.assign({},e.rects),{placement:e.placement})):p,k={x:0,y:0};if(y){if(o){const t="y"===h?E:D,n="y"===h?j:M,o="y"===h?"height":"width",r=y[h],i=y[h]+f[t],s=y[h]-f[n],a=l?-O[o]/2:0,c=d===P?x[o]:O[o],p=d===P?-O[o]:-x[o],u=e.elements.arrow,b=l&&u?g(u):{width:0,height:0},L=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},T=L[t],W=L[n],S=ie(0,x[o],b[o]),C=m?x[o]/2-a-S-T-v:c-S-T-v,N=m?-x[o]/2+a+S+W+v:p+S+W+v,$=e.elements.arrow&&w(e.elements.arrow),R=$?"y"===h?$.clientTop||0:$.clientLeft||0:0,B=e.modifiersData.offset?e.modifiersData.offset[e.placement][h]:0,A=y[h]+C-B-R,H=y[h]+N-B,I=ie(l?Math.min(i,A):i,r,l?Math.max(s,H):s);y[h]=I,k[h]=I-r}if(r){const e="x"===h?E:D,t="x"===h?j:M,n=y[b],o=ie(n+f[e],n,n-f[t]);y[b]=o,k[b]=o-n}e.modifiersData[n]=k}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function({state:e,name:t}){const n=e.elements.arrow,o=e.modifiersData.popperOffsets,r=_(e.placement),i=V(r),s=[D,M].indexOf(r)>=0?"height":"width";if(!n||!o)return;const a=e.modifiersData[`${t}#persistent`].padding,c=g(n),l="y"===i?E:D,p="y"===i?j:M,f=e.rects.reference[s]+e.rects.reference[i]-o[i]-e.rects.popper[s],u=o[i]-e.rects.reference[i],d=w(n),m=d?"y"===i?d.clientHeight||0:d.clientWidth||0:0,h=f/2-u/2,b=a[l],y=m-c[s]-a[p],x=m/2-c[s]/2+h,O=ie(b,x,y),v=i;e.modifiersData[t]={[v]:O,centerOffset:O-x}},effect:function({state:e,options:t,name:n}){let{element:o="[data-popper-arrow]",padding:r=0}=t;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o),o))&&Q(e.elements.popper,o)&&(e.elements.arrow=o,e.modifiersData[`${n}#persistent`]={padding:ne("number"!=typeof r?r:oe(r,L))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function({state:e,name:t}){const n=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,i=re(e,{elementContext:"reference"}),s=re(e,{altBoundary:!0}),a=se(i,n),c=se(s,o,r),l=ae(a),p=ae(c);e.modifiersData[t]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:p},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-reference-hidden":l,"data-popper-escaped":p})}}]});var le=n(6551);const pe=e=>e.reduce(((e,[t,n])=>(e[t]=n,e)),{}),fe=[];var ue=n(164),de=n(8296);n(5467);const me={left:"right",right:"left",bottom:"top",top:"bottom","top-start":"bottom-end","top-end":"bottom-start","bottom-start":"top-end","bottom-end":"top-start","left-start":"right-end","left-end":"right-start","right-start":"left-end","right-end":"left-start"},he=e=>`opacity ${e}ms cubic-bezier(.54, 1.5, .38, 1.11)`,ge=({trigger:e,popper:t,direction:n="down",position:i="start",placement:s,width:a,minWidth:c="trigger",maxWidth:l,appendTo:p="inline",zIndex:f=9999,isVisible:u=!0,positionModifiers:d,distance:m=0,onMouseEnter:h,onMouseLeave:g,onFocus:b,onBlur:y,onDocumentClick:x,onTriggerClick:O,onTriggerEnter:v,onPopperClick:w,onPopperMouseEnter:E,onPopperMouseLeave:j,onDocumentKeyDown:M,enableFlip:D=!0,flipBehavior:k="flip",triggerRef:L,popperRef:P,animationDuration:T=0,entryDelay:W=0,exitDelay:S=0,onHidden:C=(()=>{}),onHide:N=(()=>{}),onMount:$=(()=>{}),onShow:R=(()=>{}),onShown:B=(()=>{})})=>{var A;const[H,I]=o.useState(null),[z,F]=o.useState(null),[_,q]=o.useState(null),[V,U]=o.useState(null),[J,K]=o.useState(!1),[X,Y]=o.useState(0),[Z,G]=o.useState(u),Q=o.useRef(null),ee=o.useRef(null),te=o.useRef(null),ne=o.useRef(),oe=z||H,re=u||Z,ie=(e=>{let t="ltr";return e&&(t=getComputedStyle(e).getPropertyValue("direction")),["ltr","rtl"].includes(t)?t:"ltr"})(null===(A=(null==L?void 0:L.current)||H)||void 0===A?void 0:A.parentElement),se=o.useMemo((()=>{const e={left:"left",right:"right",center:"center"};return{ltr:Object.assign({start:"left",end:"right"},e),rtl:Object.assign({start:"right",end:"left"},e)}[ie][i]}),[i,ie]),ae=o.useCallback((e=>x(e,oe,_)),[re,H,z,_,x]);o.useEffect((()=>{K(!0),$()}),[]),o.useEffect((()=>()=>{(0,ue.I_)([Q,te,ee])}),[]),o.useEffect((()=>{L&&(L.current?F(L.current):"function"==typeof L&&F(L()))}),[L]),o.useEffect((()=>{P&&(P.current?q(P.current):"function"==typeof P&&q(P()))}),[re,P]),o.useEffect((()=>{const e=new MutationObserver((()=>{je&&je()}));return _&&e.observe(_,{attributes:!0,childList:!0,subtree:!0}),()=>{e.disconnect()}}),[_]);const ge=(e,t,n,o=!1)=>{e&&t&&t.addEventListener(n,e,{capture:o})},be=(e,t,n,o=!1)=>{e&&t&&t.removeEventListener(n,e,{capture:o})};o.useEffect((()=>(ge(h,oe,"mouseenter"),ge(g,oe,"mouseleave"),ge(b,oe,"focus"),ge(y,oe,"blur"),ge(O,oe,"click"),ge(v,oe,"keydown"),ge(w,_,"click"),ge(E,_,"mouseenter"),ge(j,_,"mouseleave"),x&&ge(ae,document,"click",!0),ge(M,document,"keydown",!0),()=>{be(h,oe,"mouseenter"),be(g,oe,"mouseleave"),be(b,oe,"focus"),be(y,oe,"blur"),be(O,oe,"click"),be(v,oe,"keydown"),be(w,_,"click"),be(E,_,"mouseenter"),be(j,_,"mouseleave"),x&&be(ae,document,"click",!0),be(M,document,"keydown",!0)})),[H,_,h,g,b,y,O,v,w,E,j,x,M,z]);const ye=()=>{if(s)return s;let e="up"===n?"top":"bottom";return"center"!==se&&(e=`${e}-${"right"===se?"end":"start"}`),e},xe=o.useMemo(ye,[n,se,s]),Oe=o.useMemo((()=>(e=>e.replace(/left|right|bottom|top|top-start|top-end|bottom-start|bottom-end|right-start|right-end|left-start|left-end/g,(e=>me[e])))(ye())),[n,se,s]),ve=o.useMemo((()=>({name:"widthMods",enabled:void 0!==a||void 0!==c||void 0!==l,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{const t=e.rects.reference.width;a&&(e.styles.popper.width="trigger"===a?`${t}px`:a),c&&(e.styles.popper.minWidth="trigger"===c?`${t}px`:c),l&&(e.styles.popper.maxWidth="trigger"===l?`${t}px`:l)},effect:({state:e})=>{const t=e.elements.reference.offsetWidth;return a&&(e.elements.popper.style.width="trigger"===a?`${t}px`:a),c&&(e.elements.popper.style.minWidth="trigger"===c?`${t}px`:c),l&&(e.elements.popper.style.maxWidth="trigger"===l?`${t}px`:l),()=>{}}})),[a,c,l]),{styles:we,attributes:Ee,update:je,forceUpdate:Me}=((e,t,n={})=>{const r=o.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||fe},[s,a]=o.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"}},attributes:{}}),c=o.useMemo((()=>({name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=Object.keys(e.elements);a({styles:pe(t.map((t=>[t,e.styles[t]||{}]))),attributes:pe(t.map((t=>[t,e.attributes[t]])))})},requires:["computeStyles"]})),[]),l=o.useMemo((()=>{const e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[...i.modifiers,c,{name:"applyStyles",enabled:!1}]};return t=r.current,n=e,JSON.stringify(t)===JSON.stringify(n)?r.current||e:(r.current=e,e);var t,n}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),p=o.useRef();return(0,le.L)((()=>{p&&p.current&&p.current.setOptions(l)}),[l]),(0,le.L)((()=>{if(null==e||null==t)return;const o=(n.createPopper||ce)(e,t,l);return p.current=o,()=>{o.destroy(),p.current=null}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}})(oe,_,{placement:xe,modifiers:[{name:"offset",options:{offset:[0,m]}},{name:"preventOverflow",enabled:!1},{name:"hide",enabled:!0},{name:"flip",enabled:xe.startsWith("auto")||D,options:{fallbackPlacements:"flip"===k?[Oe]:k}},ve]});o.useEffect((()=>{var e,n,o;const r=null===(o=null===(n=null===(e=null==t?void 0:t.props)||void 0===e?void 0:e.children[1])||void 0===n?void 0:n.props)||void 0===o?void 0:o.children;U(r),r&&V&&r!==V&&Me&&Me()}),[t]),o.useEffect((()=>{ne.current<S&&((0,ue.I_)([Q,te]),te.current=setTimeout((()=>{Q.current=setTimeout((()=>{G(!1)}),T)}),S)),ne.current=S}),[S]),o.useEffect((()=>{u?(R(),(0,ue.I_)([Q,te]),ee.current=setTimeout((()=>{G(!0),Y(1),B()}),W)):(N(),(0,ue.I_)([ee]),te.current=setTimeout((()=>{Y(0),Q.current=setTimeout((()=>{G(!1),C()}),T)}),S))}),[u]);const De=Object.assign({className:(0,de.i)(t.props&&t.props.className,d&&(()=>{if(Ee&&Ee.popper&&Ee.popper["data-popper-placement"]){const e=Ee.popper["data-popper-placement"];return d[e]}return d.top})()),style:Object.assign(Object.assign(Object.assign({},t.props&&t.props.style||{}),we.popper),{zIndex:f,opacity:X,transition:he(T)})},Ee.popper),ke=()=>{const e=o.cloneElement(t,De);return P?e:o.createElement("div",{style:{display:"contents"},ref:e=>q(null==e?void 0:e.firstElementChild)},e)};return o.createElement(o.Fragment,null,!L&&e&&o.isValidElement(e)&&o.createElement("div",{style:{display:"contents"},ref:e=>I(null==e?void 0:e.firstElementChild)},e),L&&e&&o.isValidElement(e)&&e,J&&re&&(()=>{if("inline"===p)return ke();{const e="function"==typeof p?p():p;return r.createPortal(ke(),e)}})())};ge.displayName="Popper"},6551:(e,t,n)=>{n.d(t,{L:()=>r});var o=n(2747);const r=n(164).Nq?o.useLayoutEffect:o.useEffect},8778:(e,t,n)=>{n.d(t,{ZP:()=>o});const o=(0,n(400).I)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0})},9957:(e,t,n)=>{n.d(t,{ZP:()=>o});const o=(0,n(400).I)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})}}]);
//# sourceMappingURL=../sourcemaps/6955.c76612764c7eec8ff2297efd0f0c645e.js.map