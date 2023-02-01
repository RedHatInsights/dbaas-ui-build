"use strict";(self.webpackChunkdbaas=self.webpackChunkdbaas||[]).push([[460],{3838:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var a=n(4942),r=n(5861),l=n(7462),i=n(5987),c=n(885),s=n(4687),o=n.n(s),u=n(3264),d=n.n(u),m=n(6625),p=n.n(m),h=n(8216),f=n(3215),g=n(5140),v=n(4669),E=n(6350),b=n(8716),y=n(4046),S=n(470),k={ARO:"Azure Red Hat OpenShift",OSD:"Openshift Dedicated"},C={Detecting:"Detecting",Install:"Install",Upgrade:"Upgrade",Create:"Create"},O="".concat(document.baseURI,"openshift/create "),w="".concat(document.baseURI,"openshift/details/s/{subscriptionID}#machinePools"),I="".concat(document.baseURI,"openshift/details/s/{subscriptionID}#addOns"),A="dbaas-operator",D="Cancel",x="Create new cluster",_="Clicking Create new cluster redirects you to the OpenShift Cluster Manager where you can create a cluster, and install the OpenShift Database Access add-on.",T="Install OpenShift Database Access on your cluster",R=["handleStrategyChange","upgradeStrategy"],Z=["clusterId"];function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(e){var t=e.clusters,n=e.handleSelectCluster,a=e.selectedCluster,r=e.isDisabled,l=(0,u.useState)(!1),i=(0,c.Z)(l,2),s=i[0],o=i[1],m=function(e){var t,n,a=void 0!==(null===(t=e.plan)||void 0===t?void 0:t.type)?k[null===(n=e.plan)||void 0===n?void 0:n.type]:"".concat("Red Hat OpenShift Service"," on ").concat(e.cloud_provider_id);return"".concat(e.display_name," (").concat(a,")")};return d().createElement(v.Select,{isDisabled:r,"data-testid":"select-RHODA-cluster",onSelect:function(){return o(!1)},selections:a?{toString:function(){return m(a)},compareTo:function(e){return e===a.cluster_id}}:void 0,isOpen:s,menuAppendTo:"parent",variant:"single",onToggle:function(e){return o(e)}},t.map((function(e){return d().createElement(v.SelectOption,{onClick:function(){o(!1),n(e)},key:e.cluster_id,value:{toString:function(){return m(e)},compareTo:function(t){return t===e.cluster_id}}})})))},H=function(e){var t;return d().createElement(v.Stack,{hasGutter:!0},d().createElement(v.StackItem,null,d().createElement(v.TextContent,null,d().createElement(v.Text,null,"The OpenShift Database Access add-on will be installed on the selected cluster. You can remove it later by accessing the Add-ons menu in the OpenShift Cluster Manager(OCM)"))),d().createElement(v.StackItem,null,d().createElement(v.TextContent,null,d().createElement(v.Text,null,_))),d().createElement(v.StackItem,null,d().createElement(v.Split,{style:{alignItems:"center"}},d().createElement(v.SplitItem,null,d().createElement(v.TextContent,{className:"pf-u-mb-sm"},d().createElement(v.Text,{component:"p"},"Existing clusters:"))),d().createElement(v.SplitItem,{style:{marginLeft:"5px"}},d().createElement(v.Popover,{headerContent:"Clusters",bodyContent:d().createElement("div",null,d().createElement("p",null,"A list of clusters that have a minimum required version of OpenShift 4.10 to be compatible with the OpenShift Database Access add-on."),d().createElement("br",null),d().createElement("b",null,"Support clusters"),d().createElement(v.List,null,d().createElement(v.ListItem,null,"Red Hat OpenShift Service on AWS (ROSA)"),d().createElement(v.ListItem,null,"OpenShift Dedicated (OSD)"),d().createElement(v.ListItem,null,"Azure Red Hat OpenShift (ARO)")))},d().createElement("button",{type:"button","aria-label":"more info",onClick:function(e){return e.preventDefault()},"aria-describedby":"more-info",className:"pf-c-form__group-label-help"},d().createElement(y.ZP,{noVerticalAlign:!0}))))),d().createElement(G,e)),d().createElement(v.StackItem,null,e.selectedCluster&&"ARO"===(null===(t=e.selectedCluster.plan)||void 0===t?void 0:t.type)&&d().createElement(v.Alert,{variant:"info",isInline:!0,title:"You have selected an ARO cluster",className:"co-info co-break-word"},d().createElement("p",null,"Installing OpenShift Database Access on an Azure Red Hat OpenShift (ARO) cluster requires a different process. See the Red Hat OpenShift Database Access Quick Start Guide for more details."),d().createElement(v.Button,{variant:"link",component:"a",href:"https://access.redhat.com/documentation/en-us/red_hat_openshift_database_access/1/html-single/quick_start_guide/index#manual-installation-of-openshift-database-access-on-azure-red-hat-openshift",target:"_blank",rel:"noopener noreferrer",icon:d().createElement(S.ZP,null),iconPosition:"right",isInline:!0},"Quick Start Guide"))))},j=function(e){var t=e.handleStrategyChange,n=e.upgradeStrategy,a=(0,i.Z)(e,R),r=d().createElement(v.TextContent,null,d().createElement(v.Text,{component:"small"},"We'll automatically install OpenShift Database Access after the upgrade."),d().createElement(G,(0,l.Z)({},a,{isDisabled:"Upgrade"!==n})),d().createElement(v.TextContent,null,d().createElement(v.Text,null,"For this cluster to meet installation prerequisites, it must have:"),d().createElement(v.List,null,d().createElement(v.ListItem,null,"At least 2 worker nodes"),d().createElement(v.ListItem,null,"At least 8 CPUs per node"),d().createElement(v.ListItem,null,"At least 32 GB of memory per node"))));return d().createElement(v.Stack,{hasGutter:!0},d().createElement(v.StackItem,null,d().createElement(v.Radio,{id:"upgrade-cluster",name:"upgrade-cluster","data-testid":"radio-RHODA-action-upgrade",label:"Select a cluster to upgrade",onChange:function(){return t("Upgrade")},isChecked:"Upgrade"===n,body:r})),d().createElement(v.StackItem,null,d().createElement(v.Radio,{id:"create-cluster",name:"create-cluster","data-testid":"radio-RHODA-action-create",label:"Create a new cluster with the installation prerequisites",onChange:function(){return t("Create")},isChecked:"Create"===n})))},q=function(){return d().createElement(v.TextContent,null,d().createElement(v.Text,null,_))},L=function(e){var t=e.mode,n=e.clusters,a=e.handleSelectCluster,r=e.selectedCluster,l=e.upgradeStrategy,i=e.handleStrategyChange;return t===C.Detecting||t===C.Installing?d().createElement(v.Bullseye,null,d().createElement(v.Spinner,{size:"xl"})):t===C.Install?d().createElement(H,{selectedCluster:r,handleSelectCluster:a,clusters:n}):t===C.Upgrade?d().createElement(j,{selectedCluster:r,handleSelectCluster:a,clusters:n,upgradeStrategy:l,handleStrategyChange:i}):t===C.Create?d().createElement(q,null):null};function U(e){var t;return!(null===(t=e.metrics)||void 0===t||!t.find((function(e){return e&&e.nodes&&e.nodes.compute>=2})))}function z(e){return N.apply(this,arguments)}function N(){return(N=(0,r.Z)(o().mark((function e(t){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.next=4,window.insights.chrome.auth.getToken();case 4:return n=e.sent,a=fetch("https://api.openshift.com/api/clusters_mgmt/v1/clusters/".concat(t.cluster_id,"/addon_inquiries/").concat(A),{method:"get",headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})),e.abrupt("return",a.then((function(e){return B({clusterId:t.cluster_id},e)})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){var t,n,a,r,l=e.value,c=l.clusterId,s=(0,i.Z)(l,Z);return{clusterId:c,hasAddon:null==s||null===(t=s.requirements)||void 0===t?void 0:t.every((function(e){return e.enabled})),canInstallAddon:null==s||null===(n=s.requirements)||void 0===n?void 0:n.every((function(e){return e.status.fulfilled})),minimumClusterVersion:null==s||null===(a=s.requirements[0])||void 0===a||null===(r=a.data["version.raw_id"])||void 0===r?void 0:r.split("=")[1].trim()}}function F(){return W.apply(this,arguments)}function W(){return(W=(0,r.Z)(o().mark((function e(){var t,n,r,l,i,c,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.next=4,window.insights.chrome.auth.getToken();case 4:return t=e.sent,e.next=8,fetch("https://api.openshift.com/api/accounts_mgmt/v1/subscriptions?search=".concat("status IN ('Active', 'Reserved')","&fetchMetrics=true"),{method:"get",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()}));case 8:return n=e.sent.items,r=n.filter((function(e){return U(e)})),l=r.filter((function(e){var t;return"ARO"!==(null===(t=e.plan)||void 0===t?void 0:t.type)})),e.next=13,Promise.allSettled(l.map(z));case 13:return i=e.sent,c=i.filter((function(e){var t=e.status,n=e.value.kind;return"fulfilled"===t&&"Error"!==n})).reduce((function(e,t){var n=M(t);return B(B({},e),{},(0,a.Z)({},n.clusterId,n))}),{}),s=r.filter((function(e){var t,n,a;if("ARO"===(null===(t=e.plan)||void 0===t?void 0:t.type))return!0;if(void 0===c[e.cluster_id])return!1;var r=null===(n=e.metrics)||void 0===n?void 0:n.every((function(t){var n,a=t.openshift_version;return p().gt(p().valid(p().coerce(a)),p().valid(p().coerce(null===(n=c[e.cluster_id])||void 0===n?void 0:n.minimumClusterVersion)))}));return(null===(a=c[e.cluster_id])||void 0===a?void 0:a.canInstallAddon)&&r})),e.abrupt("return",{installableClusters:s,clusters:n});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const V=function(){var e,t,n=(0,h.I0)(),l=(0,u.useState)(!1),i=(0,c.Z)(l,2),s=i[0],m=i[1],p=(0,u.useState)(),y=(0,c.Z)(p,2),k=y[0],_=y[1],R=(0,u.useState)("Upgrade"),Z=(0,c.Z)(R,2),P=Z[0],B=Z[1],G=(0,u.useState)({clusters:[],mode:C.Detecting}),H=(0,c.Z)(G,2),j=H[0],q=j.mode,U=j.clusters,z=H[1],N=(0,g.Z)().analytics,M=(e={},(0,a.Z)(e,C.Install,"We detected clusters that meet the pre-requisites for installing OpenShift Database Access."),(0,a.Z)(e,C.Upgrade,"We detected your clusters, but none meet the installation prerequisites. To install OpenShift Database Access, you can upgrade an existing cluster, or create a new one that meets the prerequisites."),(0,a.Z)(e,C.Create,"We didn’t detect any clusters. The minimal requirement for installing OpenShift Database Access is running OpenShift Container Platform (OCP) 4.10 or higher."),e),W=(t={},(0,a.Z)(t,C.Detecting,"Detecting clusters…"),(0,a.Z)(t,C.Installing,"Installing add-on…"),(0,a.Z)(t,C.Install,T),(0,a.Z)(t,C.Upgrade,T),(0,a.Z)(t,C.Create,"Clusters were not detected"),t),V=(0,u.useCallback)((0,r.Z)(o().mark((function e(){var t,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,n=t.clusters,(a=t.installableClusters).length>0?(z({mode:C.Install,clusters:a}),_(a[0])):z({mode:C.Create,clusters:n});case 6:case"end":return e.stop()}}),e)}))),[F]),Q=function(){var e=(0,r.Z)(o().mark((function e(){var t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.next=4,window.insights.chrome.auth.getToken();case 4:return t=e.sent,a={addon:{id:A},billing:{billing_model:"standard"}},z({mode:C.Installing}),e.next=9,fetch("https://api.openshift.com/api/clusters_mgmt/v1/clusters/".concat(k.cluster_id,"/addons"),{method:"post",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return t=e,m(!1),z({mode:C.Detecting,clusters:[]}),t&&"ready"===t.state&&n((0,f.wN)({variant:"success",title:"RHODA add-on successfully installed",description:d().createElement(d().Fragment,null,d().createElement("p",null,"The add-on has been installed on ",k.display_name,". To view the cluster or to interact with it go to the OpenShift Cluster Manager (OCM)."),d().createElement("br",null),d().createElement(v.Button,{variant:"link",component:"a",href:k.console_url,target:"_blank",rel:"noopener noreferrer",icon:d().createElement(S.ZP,null),iconPosition:"right",isInline:!0},"Go to the OpenShift Cluster Manager console"))})),t&&"installing"===t.state&&n((0,f.wN)({variant:"info",title:"Add-on installation in progress",description:d().createElement(d().Fragment,null,d().createElement("p",null,"The Red Hat OpenShift Database Access add-on is being installed on the cluster you selected. To monitor the installation progress click on the link below."),d().createElement("br",null),d().createElement(v.Button,{variant:"link",component:"a",href:I.replace("{subscriptionID}",(null==k?void 0:k.id)||""),rel:"noopener noreferrer",icon:d().createElement(S.ZP,null),iconPosition:"right",isInline:!0},"View progress"))})),void(t&&"Error"===t.kind&&n((0,f.wN)({variant:"danger",title:"RHODA add-on successfully failed",description:t&&t.reason?t.reason:"The add-on could not be installed on ".concat(k.display_name,".")})));var t})).catch((function(e){m(!1),z({mode:C.Detecting,clusters:[]}),n((0,f.wN)({variant:"danger",title:"RHODA add-on successfully failed",description:e&&e.reason?e.reason:"The add-on could not be installed on ".concat(k.display_name,". Please try again later.")}))}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){n((0,f.L1)())}),[]),d().createElement(d().Fragment,null,d().createElement(v.Modal,{isOpen:s,onClose:function(){return m(!1)},variant:"medium","data-testid":"database-access-modal",actions:function(e){var t,n=k&&"ARO"===(null===(t=k.plan)||void 0===t?void 0:t.type);return e===C.Detecting||e===C.Installing?[]:e===C.Install?[d().createElement(v.Button,{isDisabled:n,variant:"primary",key:"install",onClick:function(){Q()},"data-testid":"install-RHODA-button"},"Install"),d().createElement(v.Button,{component:"a",href:O,variant:"secondary",key:"install"},x),d().createElement(v.Button,{onClick:function(){return m(!1)},key:"cancel",variant:"link","data-testid":"install-RHODA-cancel"},D)]:e===C.Upgrade?[d().createElement(v.Button,{variant:"primary",key:"install",component:"a","data-testid":"upgrade-RHODA-button",href:"Create"===P?O:w.replace("{subscriptionID}",(null==k?void 0:k.id)||"")},"Create"===P?x:"Upgrade"),d().createElement(v.Button,{onClick:function(){return m(!1)},key:"cancel",variant:"link","data-testid":"install-RHODA-cancel"},D)]:e===C.Create?[d().createElement(v.Button,{component:"a",href:O,variant:"primary",key:"install"},x),d().createElement(v.Button,{onClick:function(){return m(!1)},key:"cancel",variant:"link","data-testid":"install-RHODA-cancel"},D)]:void 0}(q),title:W[q],description:q!==C.Detecting||q!==C.Installing?d().createElement(v.Title,{headingLevel:"h2",size:"md"},M[q]):void 0},d().createElement(L,{upgradeStrategy:P,handleSelectCluster:function(e){_(e)},selectedCluster:k,mode:q,clusters:U,handleStrategyChange:B})),d().createElement(b.Z,{className:"dbaas-home-page__header pf-u-p-2xl"},d().createElement(v.Grid,null,d().createElement(v.GridItem,{sm:12,md:6},d().createElement(v.Title,{size:"2xl",headingLevel:"h1"},"Get started with Red Hat OpenShift Database Access"),d().createElement(v.Stack,{hasGutter:!0},d().createElement(v.StackItem,null,d().createElement(v.TextContent,null,d().createElement(v.Text,{size:"lg",className:"dbaas-home-page__subtitle"},"Add-on service for managed OpenShift"),d().createElement(v.Text,null,"OpenShift Database Access helps accelerate development for applications using cloud-hosted database services like MongoDB Atlas, Crunchy Bridge, CockroachDB or Amazon’s Aurora and Relational Database Service (RDS) with support for popular database engines, including: MySQL, PostgreSQL, SQL Server, MariaDB, and Oracle."),d().createElement(v.Text,null,"To learn more access the  ",d().createElement(v.Button,{onClick:function(){N.track("rhoda-get-started-click")},iconPosition:"right",icon:d().createElement(S.ZP,null),isInline:!0,variant:"link",component:"a",target:"_blank",href:"https://access.redhat.com/documentation/en-us/red_hat_openshift_database_access/1/html-single/quick_start_guide/index"},"quick start guide")))),d().createElement(v.StackItem,null,d().createElement(v.Flex,null,d().createElement(v.Button,{"data-testid":"hero-buttonInstall",ouiaId:"button-rhoda-install",onClick:function(){N.track("rhoda-install-it-on-cluster-button-click"),V(),m(!0)}},"Install it on a cluster"),d().createElement(v.Button,{onClick:function(){N.track("rhoda-try-it-on-sandbox-button-click")},iconPosition:"right",icon:d().createElement(S.ZP,null),component:"a",target:"_blank",variant:"secondary",href:"https://developers.redhat.com/developer-sandbox"},"Try it in the Developer Sandbox"))))))),d().createElement(E.Z,{className:"pf-u-pt-xl pf-u-pb-xl pf-u-pl-2xl pf-u-pr-2xl"},d().createElement(v.Title,{className:"pf-u-mb-lg",headingLevel:"h2",size:"xl"},"Demo of OpenShift Database Access"),d().createElement(v.Stack,{hasGutter:!0},d().createElement(v.StackItem,null,d().createElement(v.Grid,{hasGutter:!0},d().createElement(v.GridItem,{md:6,sm:12},d().createElement(v.Stack,{hasGutter:!0},d().createElement(v.StackItem,null,d().createElement(v.TextContent,null,d().createElement(v.Text,null,d().createElement("b",null,"For database admins:")," in this video you’ll learn how to set up a cloud database service connection on your OpenShift cluster for self-service consumption by application developers."))),d().createElement(v.StackItem,null,d().createElement(v.Button,{onClick:function(){N.track("rhoda-video-1-click")},iconPosition:"right",icon:d().createElement(S.ZP,null),target:"_blank",component:"a",variant:"secondary",href:"https://youtu.be/vDrh3SnciL0"},"View the demo")))),d().createElement(v.GridItem,{md:6,sm:12},d().createElement("iframe",{style:{width:"100%",height:"315px"},width:"560",height:"315",src:"https://www.youtube.com/embed/vDrh3SnciL0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))),d().createElement(v.StackItem,null,d().createElement(v.Grid,{hasGutter:!0},d().createElement(v.GridItem,{md:6,sm:12},d().createElement(v.Stack,{hasGutter:!0},d().createElement(v.StackItem,null,d().createElement(v.TextContent,null,d().createElement(v.Text,null,d().createElement("b",null,"For application developers:")," in this video, you’ll learn how to quickly and easily connect your application to a cloud database service on your OpenShift cluster."))),d().createElement(v.StackItem,null,d().createElement(v.Button,{onClick:function(){N.track("rhoda-video-2-click")},iconPosition:"right",icon:d().createElement(S.ZP,null),target:"_blank",component:"a",variant:"secondary",href:"https://youtu.be/qWaAwhxwjWs"},"View the demo")))),d().createElement(v.GridItem,{md:6,sm:12},d().createElement("iframe",{style:{width:"100%",height:"315px"},width:"560",height:"315",src:"https://www.youtube.com/embed/qWaAwhxwjWs",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))))))}}}]);
//# sourceMappingURL=../sourcemaps/HomePage.e4bd9a39634355b93f1bc4dfa29c2fba.js.map