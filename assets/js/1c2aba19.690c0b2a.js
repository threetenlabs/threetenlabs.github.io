"use strict";(self.webpackChunkthreeten_labs_site=self.webpackChunkthreeten_labs_site||[]).push([[1221],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={id:"index-datadog",title:"Redis Enterprise Observability with Datadog",sidebar_label:"Redis Enterprise Observability with Datadog",slug:"/operate/observability/datadog",authors:["ajeet","christian"]},s=void 0,o={unversionedId:"support/observability/datadog/index-datadog",id:"support/observability/datadog/index-datadog",title:"Redis Enterprise Observability with Datadog",description:"Datadog",source:"@site/docs/support/observability/datadog/index-datadog.mdx",sourceDirName:"support/observability/datadog",slug:"/operate/observability/datadog",permalink:"/operate/observability/datadog",draft:!1,editUrl:"https://github.com/threetenlabs/threetenlabs/edit/master/docs/support/observability/datadog/index-datadog.mdx",tags:[],version:"current",lastUpdatedAt:1699459240,formattedLastUpdatedAt:"Nov 8, 2023",frontMatter:{id:"index-datadog",title:"Redis Enterprise Observability with Datadog",sidebar_label:"Redis Enterprise Observability with Datadog",slug:"/operate/observability/datadog",authors:["ajeet","christian"]},sidebar:"docs",previous:{title:"Redis Data Source for Grafana",permalink:"/operate/observability/redisdatasource"},next:{title:"Deploy and Manage Redis Database on AWS using Terraform",permalink:"/operate/provisioning/terraform"}},l={},d=[{value:"Redis",id:"redis",level:4},{value:"Why Datadog?",id:"why-datadog",level:3},{value:"Key Performance Indicators",id:"key-performance-indicators",level:3},{value:"1. Latency",id:"1-latency",level:3},{value:"Definition",id:"definition",level:4},{value:"redisenterprise.avg_latency (unit: microseconds)",id:"redisenterpriseavg_latency-unit-microseconds",level:5},{value:"Characteristics",id:"characteristics",level:5},{value:"Possible Causes",id:"possible-causes",level:5},{value:"Remediation",id:"remediation",level:5},{value:"2. Memory Usage Percentage",id:"2-memory-usage-percentage",level:3},{value:"Definition",id:"definition-1",level:4},{value:"redisenterprise.memory_usage_percent (unit: percentage)",id:"redisenterprisememory_usage_percent-unit-percentage",level:5},{value:"Characteristics",id:"characteristics-1",level:5},{value:"Possible Causes",id:"possible-causes-1",level:5},{value:"Remediation",id:"remediation-1",level:5},{value:"3. Cache Hit Rate",id:"3-cache-hit-rate",level:3},{value:"Definition",id:"definition-2",level:5},{value:"redisenterprise.cache_hit_rate (unit: percent)",id:"redisenterprisecache_hit_rate-unit-percent",level:5},{value:"Characteristics",id:"characteristics-2",level:5},{value:"Possible Causes",id:"possible-causes-2",level:5},{value:"Remediation",id:"remediation-2",level:5},{value:"4. Evictions",id:"4-evictions",level:3},{value:"Definition",id:"definition-3",level:5},{value:"redisenterprise.evicted_objects (unit: count)",id:"redisenterpriseevicted_objects-unit-count",level:5},{value:"Characteristics",id:"characteristics-3",level:5},{value:"Possible Causes",id:"possible-causes-3",level:5},{value:"Remediation",id:"remediation-3",level:5},{value:"Secondary Indicators",id:"secondary-indicators",level:3},{value:"1. Network Traffic",id:"1-network-traffic",level:3},{value:"Definition",id:"definition-4",level:5},{value:"redisenterprise.ingress_bytes/redisenterprise.egress_bytes (unit: bytes)",id:"redisenterpriseingress_bytesredisenterpriseegress_bytes-unit-bytes",level:5},{value:"Characteristics",id:"characteristics-4",level:5},{value:"2. Connection Count",id:"2-connection-count",level:3},{value:"Definition",id:"definition-5",level:5},{value:"redisenterprise.conns (unit: count)",id:"redisenterpriseconns-unit-count",level:5},{value:"Characteristics",id:"characteristics-5",level:5},{value:"Possible Causes",id:"possible-causes-4",level:5},{value:"Remediation",id:"remediation-4",level:5},{value:"Getting Started",id:"getting-started",level:2},{value:"Quickstart Guide:",id:"quickstart-guide",level:3},{value:"Prerequisites:",id:"prerequisites",level:4},{value:"Step 1. Set Up a Datadog Agent",id:"step-1-set-up-a-datadog-agent",level:3},{value:"External Monitor Mode",id:"external-monitor-mode",level:4},{value:"Localhost Mode",id:"localhost-mode",level:4},{value:"Step 2. Launch the Datadog agent on the Master node",id:"step-2-launch-the-datadog-agent-on-the-master-node",level:3},{value:"Step 3. Configuring Datadog configuration file",id:"step-3-configuring-datadog-configuration-file",level:3},{value:"For Localhost Mode",id:"for-localhost-mode",level:4},{value:"For External Monitor Mode",id:"for-external-monitor-mode",level:4},{value:"Step 4. Restart the Datadog Agent service",id:"step-4-restart-the-datadog-agent-service",level:3},{value:"Step 5. Viewing the Datadog Dashboard UI",id:"step-5-viewing-the-datadog-dashboard-ui",level:3},{value:"Step 6. Verifying the Datadog Agent Status",id:"step-6-verifying-the-datadog-agent-status",level:3},{value:"Redis Enterprise Cluster Top View",id:"redis-enterprise-cluster-top-view",level:3},{value:"References:",id:"references",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Datadog",src:a(6298).Z,width:"1024",height:"536"})),(0,i.kt)("p",null,"Devops and SRE practitioners are already keenly aware of the importance of system reliability, as it\u2019s one of the shared goals in every high performing organization. Defining clear reliability targets based on solid data is crucial for productive collaboration between developers and SREs. This need spans the entire infrastructure from application to backend database services."),(0,i.kt)("p",null,"Service Level Objectives (SLOs) provide a powerful interface for all teams to set clear performance and reliability goals based on Service Level Indicators (SLIs) or data points. A good model is to think of the SLIs as the data and the SLO as the information one uses to make critical decisions."),(0,i.kt)("p",null,"Further Read: ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos"},"https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos")),(0,i.kt)("h4",{id:"redis"},"Redis"),(0,i.kt)("p",null,"Redis is a popular multi-model NoSQL database server that provides in-memory data access speeds for search, messaging, streaming, caching, and graph\u2014amongst other capabilities. Highly performant sites such as Twitter, Snapchat, Freshworks, GitHub, Docker, Pinterest, and Stack Overflow all look to Redis to move data in real time."),(0,i.kt)("p",null,"Redis SLOs can be broken down into three main categories:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Category"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"),(0,i.kt)("th",{parentName:"tr",align:null},"Example SLO"),(0,i.kt)("th",{parentName:"tr",align:null},"Example SLI"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Throughput"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of operations being pushed through the service in a given time period"),(0,i.kt)("td",{parentName:"tr",align:null},"System should be capable of performing 200M operations per second"),(0,i.kt)("td",{parentName:"tr",align:null},"redisenterprise.total_req")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Latency"),(0,i.kt)("td",{parentName:"tr",align:null},"Elapsed time it takes for an operation"),(0,i.kt)("td",{parentName:"tr",align:null},"Average write latency should not exceed 1 millisecond"),(0,i.kt)("td",{parentName:"tr",align:null},"redis_enterprise.avg_latency")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Capacity"),(0,i.kt)("td",{parentName:"tr",align:null},"Memory/storage/network limits of the underlying data source"),(0,i.kt)("td",{parentName:"tr",align:null},"Database should have 20% memory overhead available to handle bursts"),(0,i.kt)("td",{parentName:"tr",align:null},"redisenterprise.used_memory_percent")))),(0,i.kt)("h3",{id:"why-datadog"},"Why Datadog?"),(0,i.kt)("p",null,"Running your own performance data platform is time consuming and difficult. Datadog provides an excellent platform with an open source agent to collect metrics and allows them to be displayed easily and alerted upon when necessary."),(0,i.kt)("p",null,"Datadog allows you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Collect metrics from various infrastructure components out of the box"),(0,i.kt)("li",{parentName:"ul"},"Display that data in easy to read dashboards"),(0,i.kt)("li",{parentName:"ul"},"Monitor performance metrics and alert accordingly"),(0,i.kt)("li",{parentName:"ul"},"Correlate log entries with metrics to quickly drill down to root causes")),(0,i.kt)("h3",{id:"key-performance-indicators"},"Key Performance Indicators"),(0,i.kt)("h3",{id:"1-latency"},"1. Latency"),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("h5",{id:"redisenterpriseavg_latency-unit-microseconds"},"redisenterprise.avg_latency (unit: microseconds)"),(0,i.kt)("p",null,"This is the average amount of time that a request takes to return from the time that it first hits the Redis Enterprise proxy until the response is returned. It does not include the full time from the remote client\u2019s perspective."),(0,i.kt)("h5",{id:"characteristics"},"Characteristics"),(0,i.kt)("p",null,"Since Redis is popular due to performance, generally you would expect most operations to return in single digit milliseconds. Tune any alerts to match your SLA. It\u2019s generally recommended that you also measure Redis operation latency at the client side to make it easier to determine if a server slow down or an increase in network latency is the culprit in any performance issues."),(0,i.kt)("h5",{id:"possible-causes"},"Possible Causes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Cause"),(0,i.kt)("th",{parentName:"tr",align:null},"Factors"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Spike in requests"),(0,i.kt)("td",{parentName:"tr",align:null},"Check both the Network Traffic and Operations Per Second metrics to determine if there is a corresponding increase")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Slow-running queries"),(0,i.kt)("td",{parentName:"tr",align:null},"Check the slow log in the Redis Enterprise UI for the database")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Insufficient compute resources"),(0,i.kt)("td",{parentName:"tr",align:null},"Check to see if the CPU Usage, Memory Usage Percentage, or Evictions are increasing")))),(0,i.kt)("h5",{id:"remediation"},"Remediation"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Method"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Increase resources"),(0,i.kt)("td",{parentName:"tr",align:null},"The database can be scaled up online by going to the Web UI and enabling clustering on the database. In extreme cases, more nodes can be added to the cluster and resources rebalanced")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inefficient queries"),(0,i.kt)("td",{parentName:"tr",align:null},"Redis allows you to view a slow log with a tunable threshold. It can be viewed either in the Redis Enterprise UI or by running: redis-cli -h HOST -p PORT -a PASSWORD SLOWLOG GET 100")))),(0,i.kt)("h3",{id:"2-memory-usage-percentage"},"2. Memory Usage Percentage"),(0,i.kt)("h4",{id:"definition-1"},"Definition"),(0,i.kt)("h5",{id:"redisenterprisememory_usage_percent-unit-percentage"},"redisenterprise.memory_usage_percent (unit: percentage)"),(0,i.kt)("p",null,"This is the percentage of used memory over the memory limit set for the database."),(0,i.kt)("h5",{id:"characteristics-1"},"Characteristics"),(0,i.kt)("p",null,"In Redis Enterprise, all databases have a maximum memory limit set to ensure isolation in a multi-tenant environment. This is also highly recommended when running open source Redis. Be aware that Redis does not immediately free memory upon key deletion. Depending on the size of the database, generally between 80-95% is a safe threshold."),(0,i.kt)("h5",{id:"possible-causes-1"},"Possible Causes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Cause"),(0,i.kt)("th",{parentName:"tr",align:null},"Factors"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Possible spike in activity"),(0,i.kt)("td",{parentName:"tr",align:null},"Check both the Network Traffic and Operations Per Second metrics to determine if there is a corresponding increase")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Database sized incorrectly"),(0,i.kt)("td",{parentName:"tr",align:null},"View the Memory Usage raw bytes over time to see if a usage pattern has changed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Incorrect retention policies"),(0,i.kt)("td",{parentName:"tr",align:null},"Check to see if keys are being Evicted or Expired")))),(0,i.kt)("h5",{id:"remediation-1"},"Remediation"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Method"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Increase resources"),(0,i.kt)("td",{parentName:"tr",align:null},"The database memory limit can be raised online with no downtime through either the Redis Enterprise UI or the API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Retention Policy"),(0,i.kt)("td",{parentName:"tr",align:null},"In a caching use case, setting a TTL for unused data to expire is often helpful. In addition, Eviction policies can be set, however, these may often not be able to keep up in extremely high throughput environments with very tight resource constraints")))),(0,i.kt)("h3",{id:"3-cache-hit-rate"},"3. Cache Hit Rate"),(0,i.kt)("h5",{id:"definition-2"},"Definition"),(0,i.kt)("h5",{id:"redisenterprisecache_hit_rate-unit-percent"},"redisenterprise.cache_hit_rate (unit: percent)"),(0,i.kt)("p",null,"This is the percentage of time that Redis is accessing a key that already exists."),(0,i.kt)("h5",{id:"characteristics-2"},"Characteristics"),(0,i.kt)("p",null,"This metric is useful only in the caching use case and should be ignored for all other use cases. There are tradeoffs between the freshness of the data in the cache and efficacy of the cache mitigating traffic to any backend data service. These tradeoffs should be considered carefully when determining the threshold for alerting."),(0,i.kt)("h5",{id:"possible-causes-2"},"Possible Causes"),(0,i.kt)("p",null,"This is highly specific to the application caching with no general rules that are applicable in the majority of cases."),(0,i.kt)("h5",{id:"remediation-2"},"Remediation"),(0,i.kt)("p",null,"Note that Redis commands return information on whether or not a key or field already exists. For example, the ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/commands/hset"},"HSET")," command returns the number of fields in the hash that were added."),(0,i.kt)("h3",{id:"4-evictions"},"4. Evictions"),(0,i.kt)("h5",{id:"definition-3"},"Definition"),(0,i.kt)("h5",{id:"redisenterpriseevicted_objects-unit-count"},"redisenterprise.evicted_objects (unit: count)"),(0,i.kt)("p",null,"This is the count of items that have been evicted from the database."),(0,i.kt)("h5",{id:"characteristics-3"},"Characteristics"),(0,i.kt)("p",null,"Eviction occurs when the database is close to capacity. In this condition, the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.redis.com/latest/rs/administering/database-operations/eviction-policy/"},"eviction policy")," starts to take effect. While ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/commands/expire"},"Expiration")," is fairly common in the caching use case, Eviction from the cache should generally be a matter of concern. At very high throughput and very restricted resource use cases, sometimes the eviction sweeps cannot keep up with memory pressure. Relying on Eviction as a memory management technique should be considered carefully."),(0,i.kt)("h5",{id:"possible-causes-3"},"Possible Causes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#possible-causes-1"},"See Memory Usage Percentage Possible Causes")),(0,i.kt)("h5",{id:"remediation-3"},"Remediation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#remediation-1"},"See Memory Usage Percentage Remediation")),(0,i.kt)("h3",{id:"secondary-indicators"},"Secondary Indicators"),(0,i.kt)("h3",{id:"1-network-traffic"},"1. Network Traffic"),(0,i.kt)("h5",{id:"definition-4"},"Definition"),(0,i.kt)("h5",{id:"redisenterpriseingress_bytesredisenterpriseegress_bytes-unit-bytes"},"redisenterprise.ingress_bytes/redisenterprise.egress_bytes (unit: bytes)"),(0,i.kt)("p",null,"Counters for the network traffic coming into the database and out from the database."),(0,i.kt)("h5",{id:"characteristics-4"},"Characteristics"),(0,i.kt)("p",null,"While these two metrics will not help you pinpoint a root cause, network traffic is an excellent leading indicator of trouble. Changes in network traffic patterns indicate corresponding changes in database behavior and further investigation is usually warranted."),(0,i.kt)("h3",{id:"2-connection-count"},"2. Connection Count"),(0,i.kt)("h5",{id:"definition-5"},"Definition"),(0,i.kt)("h5",{id:"redisenterpriseconns-unit-count"},"redisenterprise.conns (unit: count)"),(0,i.kt)("p",null,"The number of current client connections to the database."),(0,i.kt)("h5",{id:"characteristics-5"},"Characteristics"),(0,i.kt)("p",null,"This metric should be monitored with both a minimum and maximum number of connections. The minimum number of connections not being met is an excellent indicator of either networking or application configuration errors. The maximum number of connections being exceeded may indicate a need to tune the database."),(0,i.kt)("h5",{id:"possible-causes-4"},"Possible Causes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Cause"),(0,i.kt)("th",{parentName:"tr",align:null},"Factors"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Minimum clients not met"),(0,i.kt)("td",{parentName:"tr",align:null},"Incorrect client configuration, network firewall, or network issues")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maximum connections exceeded"),(0,i.kt)("td",{parentName:"tr",align:null},"Client library is not releasing connections or an increase in the number of clients")))),(0,i.kt)("h5",{id:"remediation-4"},"Remediation"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Method"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Clients Misconfigured"),(0,i.kt)("td",{parentName:"tr",align:null},"Confirm client configurations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Networking issue"),(0,i.kt)("td",{parentName:"tr",align:null},"Issue the PING command from a client node TELNET to the endpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Too many connections"),(0,i.kt)("td",{parentName:"tr",align:null},"Be sure that you are using pooling on your client library and that your pools are sized accordingly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Too many connections"),(0,i.kt)("td",{parentName:"tr",align:null},"Using rladmin, run: tune proxy PROXY_NUMBER threads VALUE threads VALUE")))),(0,i.kt)("p",null,"You can access the complete list of metrics ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DataDog/integrations-extras/blob/master/redisenterprise/metadata.csv"},"here"),"."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Follow the steps below to set up the Datadog agent to monitor your Redis Enterprise cluster, as well as database metrics:"),(0,i.kt)("h3",{id:"quickstart-guide"},"Quickstart Guide:"),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.redis.com/latest/rs/installing-upgrading/"},"Follow this link")," to setup your Redis Enterprise cluster and database"),(0,i.kt)("li",{parentName:"ul"},"Setup a Read-only user account by logging into your Redis Enterprise instance and visiting the \u201cAccess Control\u201d section")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(8233).Z,width:"1244",height:"772"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a new user account with Cluster View Permissions.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(9668).Z,width:"1244",height:"582"})),(0,i.kt)("h3",{id:"step-1-set-up-a-datadog-agent"},"Step 1. Set Up a Datadog Agent"),(0,i.kt)("p",null,"Before we jump into the installation, let\u2019s look at the various modes that you can run the Datadog agent in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"External Monitor Mode"),(0,i.kt)("li",{parentName:"ul"},"Localhost Mode")),(0,i.kt)("h4",{id:"external-monitor-mode"},"External Monitor Mode"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(3686).Z,width:"1234",height:"716"})),(0,i.kt)("p",null,"In external monitor mode, a Datadog agent running outside of the cluster can monitor multiple Redis Enterprise clusters, as shown in the diagram above."),(0,i.kt)("h4",{id:"localhost-mode"},"Localhost Mode"),(0,i.kt)("p",null,"Using localhost mode, the integration can be installed on every node of a Redis Enterprise cluster. This allows the user to correlate OS level metrics with Redis-specific metrics for faster root cause analysis. Only the Redis Enterprise cluster leader will submit metrics and events to Datadog. In the event of a migration of the cluster leader, the new cluster leader will begin to submit data to Datadog."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(262).Z,width:"1276",height:"1066"})),(0,i.kt)("p",null,"For this demo, we will be leveraging localhost mode as we just have two nodes to configure."),(0,i.kt)("h3",{id:"step-2-launch-the-datadog-agent-on-the-master-node"},"Step 2. Launch the Datadog agent on the Master node"),(0,i.kt)("p",null,"Pick up your preferred OS distribution and install the Datadog agent"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(329).Z,width:"1264",height:"1620"})),(0,i.kt)("p",null,"Run the following command to install the integration wheel with the Agent. Replace the integration version with 1.0.1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," datadog-agent integration install -t datadog-redisenterprise==<INTEGRATION_VERSION>\n")),(0,i.kt)("h3",{id:"step-3-configuring-datadog-configuration-file"},"Step 3. Configuring Datadog configuration file"),(0,i.kt)("p",null,"Copy the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DataDog/integrations-extras/blob/master/redisenterprise/datadog_checks/redisenterprise/data/conf.yaml.example"},"sample configuration")," and update the required sections to collect data from your Redis Enterprise cluster:"),(0,i.kt)("h4",{id:"for-localhost-mode"},"For Localhost Mode"),(0,i.kt)("p",null,"The following minimal configuration should be added to the Enterprise Master node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," sudo vim /etc/datadog-agent/conf.d/redisenterprise.d/conf.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," #################################################################\n #  Base configuration\n init_config:\n\n instances:\n  - host: localhost\n    username: user@example.com\n    password: secretPassword\n    port: 9443\n")),(0,i.kt)("p",null,"Similarly, you need to add the edit the configuration file for the Enterprise Follower to add the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," sudo vim /etc/datadog-agent/conf.d/redisenterprise.d/conf.yaml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  #################################################################\n  #  Base configuration\n  init_config:\n\n  instances:\n    - host: localhost\n      username: user@example.com\n      password: secretPassword\n      port: 9443\n")),(0,i.kt)("h4",{id:"for-external-monitor-mode"},"For External Monitor Mode"),(0,i.kt)("p",null,"The following configuration should be added to the Monitor node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#  Base configuration\ninit_config:\n\ninstances:\n  - host: cluster1.fqdn\n    username: user@example.com\n    password: secretPassword\n    port: 9443\n\n  - host: cluster2.fqdn\n    username: user@example.com\n    password: secretPassword\n    port: 9443\n")),(0,i.kt)("h3",{id:"step-4-restart-the-datadog-agent-service"},"Step 4. Restart the Datadog Agent service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," sudo service datadog-agent restart\n")),(0,i.kt)("h3",{id:"step-5-viewing-the-datadog-dashboard-ui"},"Step 5. Viewing the Datadog Dashboard UI"),(0,i.kt)("p",null,"Find the Redis Enterprise Integration under the Integration Menu:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(5256).Z,width:"1258",height:"502"})),(0,i.kt)("p",null,"Displaying the host reporting data to Datadog:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(354).Z,width:"1254",height:"668"})),(0,i.kt)("p",null,"Listing the Redis Enterprise dashboards:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(4645).Z,width:"1262",height:"462"})),(0,i.kt)("p",null,"Host details under Datadog Infrastructure list:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(5103).Z,width:"1284",height:"1476"})),(0,i.kt)("p",null,"Datadog dashboard displaying host metrics of the 1st host (CPU, Memory Usage, Load Average etc):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(3001).Z,width:"1268",height:"568"})),(0,i.kt)("p",null,"Datadog dashboard displaying host metrics of the 2nd host:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(5552).Z,width:"1292",height:"438"})),(0,i.kt)("h3",{id:"step-6-verifying-the-datadog-agent-status"},"Step 6. Verifying the Datadog Agent Status"),(0,i.kt)("p",null,"Running the ",(0,i.kt)("inlineCode",{parentName:"p"},"datadog-agent")," command shows that the Redis Enterprise integration is working correctly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," sudo datadog-agent status\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redisenterprise (1.0.1)\n  -----------------------\n    Instance ID: redisenterprise:ef4cd60aadac5744 [OK]\n    Configuration Source: file:/etc/datadog-agent/conf.d/redisenterprise.d/conf.yaml\n    Total Runs: 2\n    Metric Samples: Last Run: 0, Total: 0\n    Events: Last Run: 0, Total: 0\n    Service Checks: Last Run: 0, Total: 0\n    Average Execution Time : 46ms\n    Last Execution Date : 2021-10-28 17:27:10 UTC (1635442030000)\n    Last Successful Execution Date : 2021-10-28 17:27:10 UTC (1635442030000)\n\n")),(0,i.kt)("h3",{id:"redis-enterprise-cluster-top-view"},"Redis Enterprise Cluster Top View"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(1184).Z,width:"1250",height:"962"})),(0,i.kt)("p",null,"Let\u2019s run a memory benchmark tool called redis-benchmark to simulate an arbitrary number of clients connecting at the same time and performing actions on the server, measuring how long it takes for the requests to be completed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," memtier_benchmark --server localhost -p 19701 -a password\n [RUN #1] Preparing benchmark client...\n [RUN #1] Launching threads now...\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(3091).Z,width:"1280",height:"880"})),(0,i.kt)("p",null,"This command instructs memtier_benchmark to connect to your Redis Enterprise database and generates a load doing the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Write objects only, no reads."),(0,i.kt)("li",{parentName:"ul"},"Each object is 500 bytes."),(0,i.kt)("li",{parentName:"ul"},"Each object has random data in the value."),(0,i.kt)("li",{parentName:"ul"},"Each key has a random pattern, then a colon, followed by a random pattern.")),(0,i.kt)("p",null,"Run this command until it fills up your database to where you want it for testing. The easiest way to check is on the database metrics page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," memtier_benchmark --server localhost -p 19701 -a Oracle9ias12# -R -n allkeys -d 500 --key-pattern=P:P --ratio=1:0\n setting requests to 50001\n [RUN #1] Preparing benchmark client...\n [RUN #1] Launching threads now...\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(1320).Z,width:"1260",height:"726"})),(0,i.kt)("p",null,"The Datadog Events Stream shows an instant view of your infrastructure and services events to help you troubleshoot issues happening now or in the past. The event stream displays the most recent events generated by your infrastructure and the associated monitors, as shown in the diagram below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:a(1320).Z,width:"1260",height:"726"})),(0,i.kt)("h3",{id:"references"},"References:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.datadoghq.com/integrations/redisenterprise/"},"https://docs.datadoghq.com/integrations/redisenterprise/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/DataDog/integrations-extras/blob/master/redisenterprise/datadog_checks/redisenterprise/data/conf.yaml.example"},"Datadog Sample Configuration")," for Redis Enterprise"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/DataDog/integrations-extras/blob/master/redisenterprise/metadata.csv"},"Complete List of Performance Metrics"))))}p.isMDXComponent=!0},6298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datadog-redis-72238fc1934a27dd98a2373a6a4f46ff.png"},8233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image1-3502a8e4ff44d81c3eb542d52d7fa7bc.png"},5103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image10-dd0f1dd3ee6350a01f38356fda628e78.png"},3001:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image11-6b80ce4b9427660a1b75a63bb58c1209.png"},5552:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image12-e1688bffed20cea575c8998a7d236e83.png"},1184:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image13-7962d3f8f76e42b6caaf9ab841906e8e.png"},3091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image14-aff4ae25cdc6e7f5a580f78524e379d9.png"},1320:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image15-f22887c33eb24634cd301ab9f933f0ae.png"},9668:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image2-370159a1aba409e22e29deb1967cdbc1.png"},3686:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image3-830146bed95ab4febee08dae923dc2cd.png"},262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image4-0a02980b029d4bed60135e65bf2275f7.png"},329:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image5-9c19bf3e7977d28a7816018677f963ff.png"},5256:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image6-18d31671a3065c117018d4e47421c240.png"},354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image7-1f11634da146326ff2020ce275ec3cbf.png"},4645:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image8-6745b061b39203811c7c33242078f01f.png"}}]);