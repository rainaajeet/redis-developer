(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{203:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=a,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?r.a.createElement(h,s(s({ref:n},l),{},{components:t})):r.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},204:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var a=t(21),r=t(212);function o(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(s)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+d:d}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},212:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},368:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/configure_insight-0cf35a63ac79c52866b244b16d2864f0.png"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(203)),i=(t(204),{id:"index-runningtheapplication",title:"Up and Running with the Sample Application",sidebar_label:"Running the Application",slug:"/develop/node/nodecrashcourse/runningtheapplication"}),s={unversionedId:"develop/node/node-crash-course/runningtheapplication/index-runningtheapplication",id:"develop/node/node-crash-course/runningtheapplication/index-runningtheapplication",isDocsHomePage:!1,title:"Up and Running with the Sample Application",description:"Let's get hands on, clone the application repository from GitHub, start up Redis in a Docker container, and load the sample data!",source:"@site/docs/develop/node/node-crash-course/runningtheapplication/index-runningtheapplication.mdx",slug:"/develop/node/nodecrashcourse/runningtheapplication",permalink:"/develop/node/nodecrashcourse/runningtheapplication",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/runningtheapplication/index-runningtheapplication.mdx",version:"current",sidebar_label:"Running the Application",sidebar:"docs",previous:{title:"Sample Application Overview",permalink:"/develop/node/nodecrashcourse/sampleapplicationoverview"},next:{title:"Managing Domain Objects with Redis Hashes",permalink:"/develop/node/nodecrashcourse/domainobjectswithhashes"}},c=[{value:"Reminder - Software Prerequisites",id:"reminder---software-prerequisites",children:[]},{value:"Setup / Installation Process",id:"setup--installation-process",children:[{value:"Get the Code and Install Dependencies",id:"get-the-code-and-install-dependencies",children:[]},{value:"Start Redis (Docker)",id:"start-redis-docker",children:[]},{value:"Load the Sample Data into Redis",id:"load-the-sample-data-into-redis",children:[]}]},{value:"Start and Configure RedisInsight",id:"start-and-configure-redisinsight",children:[]},{value:"Start the Application",id:"start-the-application",children:[]},{value:"Stopping redis-cli, the Redis Container and the Application",id:"stopping-redis-cli-the-redis-container-and-the-application",children:[]}],l={toc:c};function d(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's get hands on, clone the application repository from GitHub, start up Redis in a Docker container, and load the sample data!"),Object(o.b)("div",{class:"text--center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5XymCb7b7XE",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"reminder---software-prerequisites"},"Reminder - Software Prerequisites"),Object(o.b)("p",null,"To get the most from this course, you'll need a machine that can run the application and the Redis server.  The application runs directly on your machine and the Redis server runs in a Docker container."),Object(o.b)("p",null,"You'll need the following installed on your machine:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.docker.com/"}),"Docker")," (you'll need the docker-compose command)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/"}),"Node.js")," (use the current Long Term Stable - LTS - version)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://git-scm.com/downloads"}),"git command line tools")),Object(o.b)("li",{parentName:"ul"},"Your favorite IDE (we like ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"VSCode"),", but anything you're comfortable with works)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postman.com/"}),"Postman")," - we're going to make some API calls and Postman makes that easy.")),Object(o.b)("h2",{id:"setup--installation-process"},"Setup / Installation Process"),Object(o.b)("h3",{id:"get-the-code-and-install-dependencies"},"Get the Code and Install Dependencies"),Object(o.b)("p",null,"Clone the course repo from GitHub and install the dependencies:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/redislabs-training/node-js-crash-course.git\n$ cd node-js-crash-course\n$ npm install\n")),Object(o.b)("h3",{id:"start-redis-docker"},"Start Redis (Docker)"),Object(o.b)("p",null,"From the node-js-crash-course directory, start Redis using ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ docker-compose up -d\nCreating network "node-js-crash-course_default" with the default driver\nCreating rediscrashcourse ... done\n$ docker ps\n')),Object(o.b)("p",null,'The output from the docker ps command should show one container running, using the "redislabs/redismod" image.  This container runs Redis 6 with the RediSearch, RedisJSON and RedisBloom modules.'),Object(o.b)("h3",{id:"load-the-sample-data-into-redis"},"Load the Sample Data into Redis"),Object(o.b)("p",null,"Load the course example data using the provided data loader. This is a Node.js application:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ npm run load all\n> node src/utils/dataloader.js -- "all"\n\nLoading user data...\nUser data loaded with 0 errors.\nLoading location data...\nLocation data loaded with 0 errors.\nLoading location details...\nLocation detail data loaded with 0 errors.\nLoading checkin stream entries...\nLoaded 5000 checkin stream entries.\nCreating consumer group...\nConsumer group created.\nDropping any existing indexes, creating new indexes...\nCreated indexes.\nDeleting any previous bloom filter, creating new bloom filter...\nCreated bloom filter.\n')),Object(o.b)("p",null,"In another terminal window, run the redis-cli executable that's in the Docker container. Then, enter the Redis commands shown at the redis-cli prompt to verify that data loaded successfully:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ docker exec -it rediscrashcourse redis-cli\n127.0.0.1:6379> hgetall ncc:locations:106\n 1) "id"\n 2) "106"\n 3) "name"\n 4) "Viva Bubble Tea"\n 5) "category"\n 6) "cafe"\n 7) "location"\n 8) "-122.268645,37.764288"\n 9) "numCheckins"\n10) "886"\n11) "numStars"\n12) "1073"\n13) "averageStars"\n14) "1"\n127.0.0.1:6379> hgetall ncc:users:12\n 1) "id"\n 2) "12"\n 3) "firstName"\n 4) "Franziska"\n 5) "lastName"\n 6) "Sieben"\n 7) "email"\n 8) "franziska.sieben@example.com"\n 9) "password"\n10) "$2b$05$uV38PUcdFD3Gm6ElMlBkE.lzZutqWVE6R6ro48GsEjcmnioaZZ55C"\n11) "numCheckins"\n12) "8945"\n13) "lastCheckin"\n14) "1490641385511"\n15) "lastSeenAt"\n16) "22"\n127.0.0.1:6379> xlen ncc:checkins\n(integer) 5000\n')),Object(o.b)("h2",{id:"start-and-configure-redisinsight"},"Start and Configure RedisInsight"),Object(o.b)("p",null,"If you're using RedisInsight, start it up and it should open in your browser automatically.  If not, point your browser at http://localhost:8001.  "),Object(o.b)("p",null,'If this is your first time using RedisInsight click "I already have a database".'),Object(o.b)("p",null,'If you already have other Redis databases configured in RedisInsight, click "Add Redis Database".'),Object(o.b)("p",null,'Now, click "Connect to a Redis Database Using hostname and port".  Configure the database details as shown below, then click "Add Redis Database".'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Configuring RedisInsight",src:t(368).default})),Object(o.b)("p",null,"You should now be able to browse your Redis instance.  If you need more guidance on how to connect to Redis from RedisInsight, check out Justin's video below but be sure to use 127.0.0.1 as the host, 6379 as the port and leave the username and password fields blank when configuring your database."),Object(o.b)("div",{class:"text--center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LSiLuNPeq9Y?start=359",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"start-the-application"},"Start the Application"),Object(o.b)("p",null,"Now it's time to start the API Server component of the application and make sure it connects to Redis.  This component listens on port 8081."),Object(o.b)("p",null,"If port 8081 is in use on your system, edit this section of the ",Object(o.b)("inlineCode",{parentName:"p"},"config.json")," file and pick another available port:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"application": {\n  "port": 8081\n},\n')),Object(o.b)("p",null,"Start the server like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ npm run dev\n\n> ./node_modules/nodemon/bin/nodemon.js\n\n[nodemon] 2.0.7\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,mjs,json\n[nodemon] starting `node src/server.js`\nWarning: Environment variable WEATHER_API_KEY is not set!\ninfo: Application listening on port 8081.\n")),Object(o.b)("p",null,"This starts the application using nodemon, which monitors for changes in the source code and will restart the server when a change is detected.  This will be useful in the next module where you'll be making some code changes. "),Object(o.b)("p",null,"Ignore the warning about ",Object(o.b)("inlineCode",{parentName:"p"},"WEATHER_API_KEY")," \u2014 we'll address this in a later exercise when we look at using Redis as a cache."),Object(o.b)("p",null,"To verify that the server is running correctly and connected to Redis, point your browser at:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"http://localhost:8081/api/location/200\n")),Object(o.b)("p",null,"You should see the summary information for location 200, Katia's Kitchen:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "200",\n  "name": "Katia\'s Kitchen",\n  "category": "restaurant",\n  "location": "-122.2349598,37.7356811",\n  "numCheckins": "359",\n  "numStars": "1021",\n  "averageStars": "3"\n}\n')),Object(o.b)("p",null,"Great! Now you're up and running.  Let's move on to the next module and see how we're using Redis Hashes in the application.  You'll also get to write some code!"),Object(o.b)("h2",{id:"stopping-redis-cli-the-redis-container-and-the-application"},"Stopping redis-cli, the Redis Container and the Application"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Don't do this now, as we\u2019ve only just started!"),"  However, when you do want to shut everything down, here's how to do it..."),Object(o.b)("p",null,"To stop running redis-cli, simply enter the quit command at the redis-cli prompt:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"127.0.0.1:6379> quit\n$\n")),Object(o.b)("p",null,"To stop the Redis Server, make sure you are in the ",Object(o.b)("inlineCode",{parentName:"p"},"node-js-crash-course")," folder that you checked the application repo out to, then:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker-compose down\nStopping rediscrashcourse ... done\nRemoving rediscrashcourse ... done\nRemoving network node-js-crash-course_default\n")),Object(o.b)("p",null,'Redis persists data to the "redisdata" folder.  If you want to remove this, just delete it:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ rm -rf redisdata\n")),Object(o.b)("p",null,"To stop each of the application's components, press Ctrl+C in the terminal window that the component is running in.  For example, to stop the API server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ npm run dev\n\n> ./node_modules/nodemon/bin/nodemon.js\n\n[nodemon] 2.0.7\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,mjs,json\n[nodemon] starting `node src/server.js`\ninfo: Application listening on port 8081.\n^C\nnode-js-crash-course $\n")))}d.isMDXComponent=!0}}]);