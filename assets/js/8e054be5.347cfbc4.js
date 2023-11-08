"use strict";(self.webpackChunkthreeten_labs_site=self.webpackChunkthreeten_labs_site||[]).push([[8191],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(i),h=r,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||n;return i?a.createElement(f,o(o({ref:t},u),{},{components:i})):a.createElement(f,o({ref:t},u))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=i[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},1172:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=i(7462),r=(i(7294),i(3905));const n={id:"index-introduction",title:"3.0 Introduction to High Availability",sidebar_label:"3.0 Introduction to High Availability",slug:"/operate/redis-at-scale/high-availability/introduction",custom_edit_url:null},o=void 0,l={unversionedId:"support/redis-at-scale/high-availability/introduction/index-introduction",id:"support/redis-at-scale/high-availability/introduction/index-introduction",title:"3.0 Introduction to High Availability",description:"<iframe",source:"@site/docs/support/redis-at-scale/high-availability/introduction/index-index-introduction.mdx",sourceDirName:"support/redis-at-scale/high-availability/introduction",slug:"/operate/redis-at-scale/high-availability/introduction",permalink:"/operate/redis-at-scale/high-availability/introduction",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1699459240,formattedLastUpdatedAt:"Nov 8, 2023",frontMatter:{id:"index-introduction",title:"3.0 Introduction to High Availability",sidebar_label:"3.0 Introduction to High Availability",slug:"/operate/redis-at-scale/high-availability/introduction",custom_edit_url:null},sidebar:"docs",previous:{title:"2.2 Exercise: Saving a Snapshot",permalink:"/operate/redis-at-scale/persistence-and-durability/exercise"},next:{title:"3.1 Basic Replication",permalink:"/operate/redis-at-scale/high-availability/basic-replication"}},c={},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/X6D2AQ_FCl0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"High availability is a computing concept describing systems that guarantee a high level of uptime, designed to be fault-tolerant, highly dependable, operating continuously without intervention and without a single point of failure."),(0,r.kt)("p",null,"What does this mean for Redis specifically? Well, it means that if your primary Redis server fails, a backup will kick in, and you, as a user, will see little to no disruption in the service. There are two components needed for this to be possible: replication and automatic failover."),(0,r.kt)("p",null,"Replication is the continuous copying of data from a primary database to a backup, or a replica database. The two databases are usually located on different physical servers, so that we can have a functional copy of our data in case we lose the server where our primary database sits."),(0,r.kt)("p",null,"But having a backup of our data is not enough for high availability. We also have to have a mechanism that will automatically kick in and redirect all requests towards the replica in the event that the primary fails. This mechanism is called automatic failover."),(0,r.kt)("p",null,"In the rest of this section we\u2019ll see how Redis handles replication and which automatic failover solutions it offers. Let\u2019s dig in."))}p.isMDXComponent=!0}}]);