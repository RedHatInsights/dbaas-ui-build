/*! For license information please see HomePage.1658938034370.83ec94116661e39c7685.js.LICENSE.txt */
(self.webpackChunkdbaas=self.webpackChunkdbaas||[]).push([[460],{5183:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const n=a(655),r=n.__importStar(a(3264));var c;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(c=t.IconSize||(t.IconSize={})),t.getSize=e=>{switch(e){case c.sm:return"1em";case c.md:return"1.5em";case c.lg:return"2em";case c.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:a=0,yOffset:l=0,width:o,height:s,svgPath:u}){var m;return m=class extends r.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:c,color:i,title:m,noVerticalAlign:p}=e,h=n.__rest(e,["size","color","title","noVerticalAlign"]),d=Boolean(m),f=t.getSize(c),g=-.125*Number.parseFloat(f),y=p?null:{verticalAlign:`${g}em`},v=[a,l,o,s].join(" ");return r.createElement("svg",Object.assign({style:y,fill:i,height:f,width:f,viewBox:v,"aria-labelledby":d?this.id:null,"aria-hidden":!d||null,role:"img"},h),d&&r.createElement("title",{id:this.id},m),r.createElement("path",{d:u}))}},m.displayName=e,m.defaultProps={color:"currentColor",size:c.sm,noVerticalAlign:!1},m}},470:(e,t,a)=>{"use strict";t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=a(5183).createIcon(t.mq),t.ZP=t.LA},2466:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(3264);const r=a.n(n)().createContext("light")},6350:(e,t,a)=>{"use strict";a.d(t,{Z:()=>O});var n=a(7462),r=a(5987),c=a(2982),i=a(4942),l=a(5671),o=a(3144),s=a(136),u=a(6215),m=a(1120),p=a(3264),h=a.n(p),d=a(5697),f=a.n(d),g=a(4184),y=a.n(g),v=a(8216),b=a(2466);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=function(e){(0,s.Z)(d,e);var t,a,p=(t=d,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,m.Z)(t);if(a){var r=(0,m.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,u.Z)(this,e)});function d(){return(0,l.Z)(this,d),p.apply(this,arguments)}return(0,o.Z)(d,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,a=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var n=insights.chrome.$internal.store.getState();if(t&&n)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=S(S({},e.dynamic),{},(0,i.Z)({},"data-".concat(t.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),a[t.substr(1)])):e.staticPart=[].concat((0,c.Z)(e.staticPart),(0,c.Z)(""!==t?[t]:[])),e}),{staticPart:[n.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,c=(e.params,e.path,(0,r.Z)(e,["className","children","params","path"])),l=this.calculateLocation(),o=l.dynamic,s=l.staticPart;return h().createElement(b.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",r=y()((0,i.Z)({},"pf-m-".concat(e),"dark"===e));return{dark:h().createElement("section",(0,n.Z)({},c,o,{"page-type":s.join("-"),className:"".concat(y()(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)}),h().Children.map(a,(function(e){return h().cloneElement(e,{className:"pf-m-dark"})}))),light:h().createElement("section",(0,n.Z)({},c,o,{"page-type":s.join("-"),className:"".concat(y()(t,"pf-l-page__main-section pf-c-page__main-section"))}),a)}[e]}))}}]),d}(p.Component);w.propTypes={className:f().string,children:f().any.isRequired,params:f().any,path:f().string};const O=(0,v.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(w)},8972:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var n=a(3264),r=a.n(n),c=a(4669),i=a(6350),l=a(7462),o=a(4942),s=a(5987),u=a(5697),m=a.n(u),p=a(4184),h=a.n(p),d=a(2466),f=function(e){var t=e.className,a=e.children,n=(0,s.Z)(e,["className","children"]),c=h()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return r().createElement(d.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=h()((0,o.Z)({},"pf-m-".concat(e,"-200"),"dark"===e),(0,o.Z)({},"pf-m-light","light"===e));return r().createElement("section",(0,l.Z)({},n,{className:"".concat(c," ").concat(t),"widget-type":"InsightsPageHeader"}),a)}))};const g=f;f.propTypes={children:m().any.isRequired,className:m().string};var y=a(470);const v=function(){return r().createElement(r().Fragment,null,r().createElement(g,{className:"dbaas-home-page__header pf-u-p-2xl"},r().createElement(c.Grid,null,r().createElement(c.GridItem,{sm:12,md:6},r().createElement(c.Title,{size:"2xl",headingLevel:"h1"},"Get started with Red Hat OpenShift Database Access"),r().createElement(c.Stack,{hasGutter:!0},r().createElement(c.StackItem,null,r().createElement(c.TextContent,null,r().createElement(c.Text,{size:"lg",className:"dbaas-home-page__subtitle"},"Add-on service for managed OpenShift"),r().createElement(c.Text,null,"Simplifies and standardizes how teams provision, monitor, and connect to cloud-hosted partner database services across your environment on the managed OpenShift Platform. OpenShift Database Access helps accelerate your development for applications that use MongoDB Atlas, Crunchy Bridge, CockroachDB Dedicated and Amazon RDS (MySQL, PostgreSQL, MariaDB, Oracle BYOL, or SQL Server) cloud database services."))),r().createElement(c.StackItem,null,r().createElement(c.Button,{iconPosition:"right",icon:r().createElement(y.ZP,null),component:"a",target:"_blank",variant:"secondary",href:"https://access.redhat.com/documentation/en-us/red_hat_openshift_database_access/1/html-single/quick_start_guide/index"},"Get Started with OpenShift Database Access")))))),r().createElement(i.Z,{className:"pf-u-pt-xl pf-u-pb-xl pf-u-pl-2xl pf-u-pr-2xl"},r().createElement(c.Title,{className:"pf-u-mb-lg",headingLevel:"h2",size:"xl"},"Demo of OpenShift Database Access"),r().createElement(c.Stack,{hasGutter:!0},r().createElement(c.StackItem,null,r().createElement(c.Grid,{hasGutter:!0},r().createElement(c.GridItem,{md:6,sm:12},r().createElement(c.Stack,{hasGutter:!0},r().createElement(c.StackItem,null,r().createElement(c.TextContent,null,r().createElement(c.Text,null,r().createElement("b",null,"For database admins:")," in this video you’ll learn how to set up a cloud database service connection on your OpenShift cluster for self-service consumption by application developers."))),r().createElement(c.StackItem,null,r().createElement(c.Button,{iconPosition:"right",icon:r().createElement(y.ZP,null),target:"_blank",component:"a",variant:"secondary",href:"https://youtu.be/vDrh3SnciL0"},"View the demo")))),r().createElement(c.GridItem,{md:6,sm:12},r().createElement("iframe",{style:{width:"100%",height:"315px"},width:"560",height:"315",src:"https://www.youtube.com/embed/vDrh3SnciL0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))),r().createElement(c.StackItem,null,r().createElement(c.Grid,{hasGutter:!0},r().createElement(c.GridItem,{md:6,sm:12},r().createElement(c.Stack,{hasGutter:!0},r().createElement(c.StackItem,null,r().createElement(c.TextContent,null,r().createElement(c.Text,null,r().createElement("b",null,"For application developers:")," in this video, you’ll learn how to quickly and easily connect your application to a cloud database service on your OpenShift cluster."))),r().createElement(c.StackItem,null,r().createElement(c.Button,{iconPosition:"right",icon:r().createElement(y.ZP,null),target:"_blank",component:"a",variant:"secondary",href:"https://youtu.be/qWaAwhxwjWs"},"View the demo")))),r().createElement(c.GridItem,{md:6,sm:12},r().createElement("iframe",{style:{width:"100%",height:"315px"},width:"560",height:"315",src:"https://www.youtube.com/embed/qWaAwhxwjWs",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))))))}},4184:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)){if(a.length){var i=r.apply(null,a);i&&e.push(i)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var l in a)n.call(a,l)&&a[l]&&e.push(l);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);