(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{126:function(e,t,n){"use strict";var r=n(0),a=n(129);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},127:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(121),c=n(131);n(123),n(55);t.a=function(e){var t=a.a.useState(!1),n=t[0],r=t[1];return a.a.createElement("div",{className:"ri-container"},a.a.createElement("div",{className:"ri-description-short"},a.a.createElement("div",{className:"ri-icon"},a.a.createElement("span",{className:"fe fe-zap"})),a.a.createElement("div",{className:"ri-detail"},a.a.createElement("div",{className:"ri-title"},a.a.createElement("a",{href:e.page},e.title)),a.a.createElement("div",{className:"ri-description"},e.description,a.a.Children.count(e.children)>0&&a.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return r(!n)}})))),n&&a.a.createElement("div",{className:"ri-description-long"},a.a.createElement(i.a,{components:c.a},e.children)))}},129:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},133:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(126),c=n(122),s=n(60),o=n.n(s),d=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,u=e.values,b=e.groupId,p=e.className,m=Object(i.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(r.useState)(s),g=O[0],j=O[1],v=r.Children.toArray(e.children);if(null!=b){var k=f[b];null!=k&&k!==g&&u.some((function(e){return e.value===k}))&&j(k)}var y=function(e){j(e),null!=b&&h(b,e)},E=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(r.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},134:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},182:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/resoftware-1-8553fcad2eaf49ad63c696fb8fdc9ac5.png"},183:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/resoftware-2-e2cd05a56f85365ee5a312cde93f70d5.png"},184:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/resoftware-4-ad5f97e0530aa58c2d851035039b9e7d.png"},185:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/resoftware-5-afe8d87c1538e50b4667951e9ee5a660.png"},186:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/resoftware-7-62977eb9c622424a63b3b93a91a52947.png"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(121)),c=n(133),s=n(134),o=(n(123),n(127),{id:"index-docker",title:"Install and create Redis database using Docker",sidebar_label:"Docker",slug:"/create/docker"}),d={unversionedId:"create/docker/index-docker",id:"create/docker/index-docker",isDocsHomePage:!1,title:"Install and create Redis database using Docker",description:"<Tabs",source:"@site/docs/create/docker/index-docker.mdx",slug:"/create/docker",permalink:"/create/docker",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/docker/index-docker.mdx",version:"current",sidebar_label:"Docker",sidebar:"docs",previous:{title:"Create a database using Redis Enterprise Cloud",permalink:"/create/cloud"},next:{title:"Install and Create Redis database from Source",permalink:"/create/resoftware"}},l=[{value:"Pre-requisites:",id:"pre-requisites",children:[]},{value:"Run the Redis instance:",id:"run-the-redis-instance",children:[]},{value:"Verify if Redis container is running or not:",id:"verify-if-redis-container-is-running-or-not",children:[]},{value:"Connecting to Redis Server using redis-cli client",id:"connecting-to-redis-server-using-redis-cli-client",children:[]},{value:"Testing Redis container",id:"testing-redis-container",children:[]},{value:"Running Redis container with Persistent Storage",id:"running-redis-container-with-persistent-storage",children:[]},{value:"Pre-requisite",id:"pre-requisite",children:[]}],u={toc:l};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c.a,{defaultValue:"Redis Enterprise",values:[{label:"Redis",value:"Redis"},{label:"Redis Enterprise",value:"Redis Enterprise"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"Redis",mdxType:"TabItem"},Object(i.b)("h3",{id:"pre-requisites"},"Pre-requisites:"),Object(i.b)("p",null,"Ensure that Docker is installed in your system. Follow ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"https://docs.docker.com/engine/install/")," if you haven\u2019t installed yet."),Object(i.b)("h3",{id:"run-the-redis-instance"},"Run the Redis instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run --name myredis -d redis\n")),Object(i.b)("p",null,"where,"),Object(i.b)("p",null,"myredis is the name of Docker container\n-d represent daemon mode\nredis is the name of Docker Image which it fetches from Docker Hub."),Object(i.b)("h3",{id:"verify-if-redis-container-is-running-or-not"},"Verify if Redis container is running or not:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES\n241f2411637e   redis     "docker-entrypoint.s\u2026"   2 minutes ago   Up 2 minutes   6379/tcp   myredis\n')),Object(i.b)("h3",{id:"connecting-to-redis-server-using-redis-cli-client"},"Connecting to Redis Server using redis-cli client"),Object(i.b)("p",null,'The below CLI uses the first three alphanumeric character of Container ID  and opens up "sh" shell of Redis Docker container:'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker exec -it 241 sh\n# redis-cli\n")),Object(i.b)("h3",{id:"testing-redis-container"},"Testing Redis container"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"127.0.0.1:6379>ping\nPONG\n")),Object(i.b)("p",null,"Please note: By default, Redis has 0-15 indexes for databases, you can change that number databases NUMBER in redis.conf."),Object(i.b)("h3",{id:"running-redis-container-with-persistent-storage"},"Running Redis container with Persistent Storage"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker run --name some-redis -d redis redis-server --appendonly yes\n")),Object(i.b)("p",null,"If persistence is enabled, data is stored in the VOLUME /data, which can be used with --volumes-from some-volume-container or -v /docker/host/dir:/data ")),Object(i.b)(s.a,{value:"Redis Enterprise",mdxType:"TabItem"},Object(i.b)("h3",{id:"pre-requisite"},"Pre-requisite"),Object(i.b)("p",null,"Ensure that Docker is installed in your system."),Object(i.b)("p",null,"If you're new, refer ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/install/"}),"https://docs.docker.com/docker-for-mac/install/")," to install Docker on Mac. "),Object(i.b)("p",null,"To pull and start the Redis Enterprise Software Docker container, run this docker run command in the terminal or command-line for your operating system."),Object(i.b)("p",null,"Note: On Windows, make sure Docker is configured to run Linux-based containers."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"docker run -d --cap-add sys_resource --name rp -p 8443:8443 -p 9443:9443 -p 12000:12000 redislabs/redis\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(182).default})),Object(i.b)("p",null,"Click on \u201cSetup\u201d."),Object(i.b)("p",null,"In the Node Configuration settings, enter a cluster FQDN such as cluster.local. Then click Next button."),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(183).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(184).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(185).default})),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:n(186).default})))))}b.isMDXComponent=!0}}]);