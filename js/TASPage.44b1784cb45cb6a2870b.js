/*! For license information please see TASPage.44b1784cb45cb6a2870b.js.LICENSE.txt */
(self.webpackChunkdbaas=self.webpackChunkdbaas||[]).push([[1252],{5140:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(4025),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};const a=function(e){var t,n=(0,r.useScalprum)(),a=(null===(t=n.api)||void 0===t?void 0:t.chrome)||{};return a=o(o({},a),{initialized:n.initialized}),"function"==typeof e?e(a):a}},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},8559:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(2747),o=n.n(r),a=n(5950),c=n(3539),i=n(5893),s=n(4184),l=n.n(s),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};const d=function(e){var t=e.children,n=e.className,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["children","className"]);return(0,r.useEffect)((function(){console.error('Using deprecated "Main" component. Do not use it. Either remove it from your JSX or replace it by "section" HTML element.')}),[]),(0,i.jsx)("section",u({},o,{className:"".concat(l()(n,"pf-v5-l-page__main-section pf-v5-c-page__main-section")),children:t}))};var p=n(8956);const f=function(e){var t=e.className,n=e.title,r=l()(t);return(0,i.jsx)(p.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle",children:n})};var h=n(5140),m=n(5998),g=n(3215),v=n(3307);const y=(0,r.lazy)((()=>Promise.all([n.e(2819),n.e(359)]).then(n.bind(n,359)))),S=()=>{const{appAction:e}=(0,h.Z)(),{nextStep:t,prevStep:n,step:i}=(()=>{const[e,t]=(0,r.useState)(0);return{step:e,nextStep:()=>t((e=>e+1)),prevStep:()=>t((e=>e-1))}})(),{handleDownloadPullSecret:s,userHasDownloadedSecret:l}=(()=>{const{accessToken:e}=function(){const[e,t]=o().useState(void 0),[n,r]=o().useState(void 0),{auth:a}=(0,h.Z)();return o().useEffect((()=>{(0,g.L1)(),a.getToken().then((e=>t(e)))}),[]),o().useEffect((()=>{void 0!==e?async function(e){const t=await fetch("https://api.openshift.com/api/accounts_mgmt/v1/access_token",{method:"POST",headers:{Authorization:`Bearer ${e}`}});return await t.json()}(e).then((e=>{"auths"in e?(console.log("received authorization token"),r(e)):console.error("received error response from createAuthorizationToken",e)})):console.log("authToken is undefined")}),[e]),{accessToken:n}}(),{analytics:t,auth:n}=(0,h.Z)(),r=(0,m.I0)(),[a,c]=o().useState(!1),i=o().useCallback((async()=>{if(void 0===e)return console.error("could not download pull secret, access token is undefined"),void r((0,g.wN)({variant:"danger",title:"Could not download the pull secret",description:o().createElement("p",null,"User Access Token is empty. Please try refreshing the page and checking the console output for errors.")}));const t=await n.getUser();if(void 0===t)return console.error("could not download pull secret, user object is undefined"),void r((0,g.wN)({variant:"danger",title:"Could not get user information",description:o().createElement("p",null,"Could not read the user object.")}));const a={...e,orgId:t.identity.org_id,userId:t.identity.internal?.account_id},i=new Blob([JSON.stringify(a)],{type:"application/json;charset=utf-8"}),s=URL.createObjectURL(i),l=document.createElement("a");l.href=s,l.download="pull-secret.json",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(s),c(!0)}),[e,n,r,c]);return{userHasDownloadedSecret:a,handleDownloadPullSecret:o().useCallback((async()=>{t.track(v.Z.TAS_PULL_SECRET_DOWNLOAD_CLICKED),i()}),[t,i])}})(),{handleDocumentationClick:u}=function(){const{analytics:e}=(0,h.Z)();return{handleDocumentationClick:(0,r.useCallback)((()=>{e.track(v.Z.TAS_DOCUMENTATION_CLICKED),window.open("https://access.redhat.com/documentation/en-us/red_hat_trusted_artifact_signer/2023-q4/html-single/deployment_guide/index")}),[e])}}();return(0,r.useEffect)((()=>{e("secure-sign")}),[]),o().createElement(o().Fragment,null,o().createElement("div",{style:{paddingLeft:"2.5rem",paddingTop:"1rem",paddingBottom:"1rem"}},o().createElement(f,{title:"Artifact Signer"}),o().createElement("p",null,"Enables cryptographic signing, verification and provenance of software")),o().createElement(d,null,o().createElement(c.Stack,{hasGutter:!0},o().createElement(c.StackItem,null,o().createElement(r.Suspense,{fallback:o().createElement(a.Spinner,null)},o().createElement(y,{nextStep:t,previousStep:n,currentStep:i,onDownloadSecret:s,userHasDownloadedSecret:l,onDocumentationClick:u}))))))};S.displayName="Trusted Artifact Signer";const b=S},3307:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={TAS_PULL_SECRET_DOWNLOAD_CLICKED:"tas-ui-clicked-download-pull-secret",TAS_DOCUMENTATION_CLICKED:"tas-ui-clicked-documentation",TC_WAITING_LIST_CLICK:"tc-learn-more-1-click"}}}]);