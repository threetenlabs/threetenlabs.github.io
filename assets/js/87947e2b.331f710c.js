"use strict";(self.webpackChunkthreeten_labs_site=self.webpackChunkthreeten_labs_site||[]).push([[3530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),h=s,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const i={id:"index-persistence-options-in-redis",title:"2.1 Persistence options in Redis",sidebar_label:"2.1 Persistence options in Redis'",slug:"/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis",custom_edit_url:null},o=void 0,a={unversionedId:"support/redis-at-scale/persistence-and-durability/persistence-options-in-redis/index-persistence-options-in-redis",id:"support/redis-at-scale/persistence-and-durability/persistence-options-in-redis/index-persistence-options-in-redis",title:"2.1 Persistence options in Redis",description:"<iframe",source:"@site/docs/support/redis-at-scale/persistence-and-durability/persistence-options-in-redis/index-persistence-options-in-redis.mdx",sourceDirName:"support/redis-at-scale/persistence-and-durability/persistence-options-in-redis",slug:"/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis",permalink:"/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1699459240,formattedLastUpdatedAt:"Nov 8, 2023",frontMatter:{id:"index-persistence-options-in-redis",title:"2.1 Persistence options in Redis",sidebar_label:"2.1 Persistence options in Redis'",slug:"/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis",custom_edit_url:null},sidebar:"docs",previous:{title:"2.0 Introduction to Persistence and Durability'",permalink:"/operate/redis-at-scale/persistence-and-durability/introduction"},next:{title:"2.2 Exercise: Saving a Snapshot",permalink:"/operate/redis-at-scale/persistence-and-durability/exercise"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{align:"center"},(0,s.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/08V8KeXhZY4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("p",null,"If a Redis server that only stores data in RAM is restarted, all data is lost. To prevent such data loss, there needs to be some mechanism for persisting the data to disk; Redis provides two of them: ",(0,s.kt)("strong",null,"snapshotting")," and an",(0,s.kt)("strong",null,"append-only file"),", or ",(0,s.kt)("strong",null,"AOF"),". You can configure your Redis instances to use either of the two, or a combination of both."),(0,s.kt)("p",null,"When a snapshot is created, the entire point-in-time view of the dataset is written to persistent storage in a compact ",(0,s.kt)("strong",null,".rdb")," file. You can set up recurring backups, for example every 1, 12, or 24 hours and use these backups to easily restore different versions of the data set in case of disasters. You can also use these snapshots to create a clone of the server, or simply leave them in place for a future restart."),(0,s.kt)("p",null,"Creating a .rdb file requires a lot of disk I/O. If performed in the main Redis process, this would reduce the server\u2019s performance. That\u2019s why this work is done by a forked child process. But even forking can be time-consuming if the dataset is large. This may result in decreased performance or in Redis failing to serve clients for a few milliseconds or even up to a second for very large datasets. Understanding this should help you decide whether this solution makes sense for your requirements."),(0,s.kt)("p",null,"You can configure the name and location of the .rdb file with the ",(0,s.kt)("strong",null,"dbfilename")," and ",(0,s.kt)("strong",null,"dir")," configuration directives, either through the ",(0,s.kt)("strong",null,"redis.conf")," file, or through the redis-cli as explained in ",(0,s.kt)("a",{parentName:"p",href:"https://developer.redis.com//operate/redis-at-scale/talking-to-redis/configuring-a-redis-server"},"Section 1 Unit 2"),". And of course you can configure how often you want to create a snapshot. Here\u2019s an excerpt from the redis.conf file showing the default values."),(0,s.kt)("p",null,"As an example, this configuration will make Redis automatically dump the dataset to disk every 60 seconds if at least 1000 keys changed in that period. While snapshotting is a great strategy for the use cases explained above, it leaves a huge possibility for data loss. You can configure snapshots to run every few minutes, or after X writes against the database, but if the server crashes you lose all the writes since the last snapshot was taken. In many use cases, that kind of data loss can be acceptable, but in many others it is absolutely not. For all of those other use cases Redis offers the AOF persistence option."),(0,s.kt)("p",null,"AOF, or append-only file works by logging every incoming write command to disk as it happens. These commands can then be replayed at server startup, to reconstruct the original dataset. Commands are logged using the same format as the Redis protocol itself, in an append-only fashion. The AOF approach provides greater durability than snapshotting, and allows you to configure how often file syncs happen."),(0,s.kt)("p",null,"Depending on your durability requirements (or how much data you can afford to lose), you can choose which fsync policy is the best for your use case:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",null,"fsync every write"),": The safest policy: The write is acknowledged to the client only after it has been written to the AOF file and flushed to disk. Since in this approach we are writing to disk synchronously, we can expect a much higher latency than usual."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",null,"fsync every second"),": The default policy. Fsync is performed asynchronously, in a background thread, so write performance is still high. Choose this option if you need high performance and can afford to lose up to one second worth of writes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",null,"no fsync"),": In this case Redis will log the command to the file descriptor, but will not force the OS to flush the data to disk. If the OS crashes we can lose a few seconds of data (Normally Linux will flush data every 30 seconds with this configuration, but it's up to the kernel\u2019s exact tuning.).")),(0,s.kt)("p",null,"The relevant configuration directives for AOF are shown on the screen. AOF contains a log of all the operations that modified the database in a format that\u2019s easy to understand and parse. When the file gets too big, Redis can automatically rewrite it in the background, compacting it in a way that only the latest state of the data is preserved."))}u.isMDXComponent=!0}}]);