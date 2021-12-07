(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),o=a(7),i=(a(0),a(295)),r={id:"redisbloom-withdotnet",title:"Using RedisBloom with .NET",sidebar_label:"Using RedisBloom with .NET",slug:"/howtos/redisbloom/with-dotnet/redisbloom-withdotnet",authors:["steve"]},c={unversionedId:"howtos/redisbloom/with-dotnet/redisbloom-withdotnet",id:"howtos/redisbloom/with-dotnet/redisbloom-withdotnet",isDocsHomePage:!1,title:"Using RedisBloom with .NET",description:"Using RedisBloom allows you to efficiently keep track of presence, heavy hitters, and counts on large streams of data. To use RedisBloom in .NET, you should use the StackExchange.Redis library. To get started with that package, follow our getting started guide. Once you have a reference to an IDatabase object, you will need to use the db.Execute and db.ExecuteAsync methods to run the custom commands you want against redis bloom.",source:"@site/docs/howtos/redisbloom/with-dotnet/index.md",slug:"/howtos/redisbloom/with-dotnet/redisbloom-withdotnet",permalink:"/howtos/redisbloom/with-dotnet/redisbloom-withdotnet",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisbloom/with-dotnet/index.md",version:"current",sidebar_label:"Using RedisBloom with .NET",sidebar:"docs",previous:{title:"RedisBloom Tutorial",permalink:"/howtos/redisbloom"},next:{title:"RedisGears Tutorial",permalink:"/howtos/redisgears"}},l=[{value:"Bloom Filters",id:"bloom-filters",children:[{value:"Create a Filter",id:"create-a-filter",children:[]},{value:"Adding to a Filter",id:"adding-to-a-filter",children:[]},{value:"Check if an Item is in a Filter",id:"check-if-an-item-is-in-a-filter",children:[]}]},{value:"Count-Min Sketch",id:"count-min-sketch",children:[{value:"Creating a Count-Min Sketch",id:"creating-a-count-min-sketch",children:[]},{value:"Adding Items to a Count-Min Sketch",id:"adding-items-to-a-count-min-sketch",children:[]},{value:"Querying the Sketch",id:"querying-the-sketch",children:[]}]},{value:"Cuckoo Filters",id:"cuckoo-filters",children:[{value:"Creating a Cuckoo Filter",id:"creating-a-cuckoo-filter",children:[]},{value:"Adding to a Cuckoo Filter",id:"adding-to-a-cuckoo-filter",children:[]},{value:"Checking Item Presence in a Cuckoo Filter",id:"checking-item-presence-in-a-cuckoo-filter",children:[]}]},{value:"Top-K",id:"top-k",children:[{value:"Initializing a Top-K",id:"initializing-a-top-k",children:[]},{value:"Add Items to the Top-K",id:"add-items-to-the-top-k",children:[]},{value:"List the Top K Items",id:"list-the-top-k-items",children:[]},{value:"Query if an Item is in the Top-K",id:"query-if-an-item-is-in-the-top-k",children:[]}]},{value:"Resources",id:"resources",children:[]}],s={toc:l};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Using RedisBloom allows you to efficiently keep track of presence, heavy hitters, and counts on large streams of data. To use RedisBloom in .NET, you should use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stackexchange/stackexchange.redis"}),"StackExchange.Redis")," library. To get started with that package, follow our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.redis.com/develop/dotnet/"}),"getting started guide"),". Once you have a reference to an ",Object(i.b)("inlineCode",{parentName:"p"},"IDatabase")," object, you will need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"db.Execute")," and ",Object(i.b)("inlineCode",{parentName:"p"},"db.ExecuteAsync")," methods to run the custom commands you want against redis bloom."),Object(i.b)("h2",{id:"bloom-filters"},"Bloom Filters"),Object(i.b)("p",null,"Bloom Filters are a powerful data structure that can tell if an item is in a set, think a username on a sign-up form. They're incredibly compact, requiring only 10-20 bits per item you want to add, and extremely quick to add items to, and equally fast to determine if an item is in a set or not. "),Object(i.b)("h3",{id:"create-a-filter"},"Create a Filter"),Object(i.b)("p",null,"You don't need to create a Bloom Filter explicitly as any call of ",Object(i.b)("inlineCode",{parentName:"p"},"BF.ADD")," to a non-existent key will automatically create a Bloom Filter for you. However, if you want to tell Redis ahead of time how much data the Bloom Filter can expect and the error rate that you want for that data (the number of false positives it will report), You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"BF.RESERVE")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'await db.ExecuteAsync("BF.RESERVE", "bf:username", .01, 10000);\n')),Object(i.b)("p",null,"The above command will reserve a Bloom Filter on the key ",Object(i.b)("inlineCode",{parentName:"p"},"bf:username")," that expects 10000 records and will have an error rate of 1%."),Object(i.b)("h3",{id:"adding-to-a-filter"},"Adding to a Filter"),Object(i.b)("p",null,"To add to a Bloom Filter, all you need is to use the ",Object(i.b)("inlineCode",{parentName:"p"},"BF.ADD")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'await db.ExecuteAsync("BF.ADD", "bf:username", "Kermit");\n')),Object(i.b)("p",null,"The preceding code will add the username ",Object(i.b)("inlineCode",{parentName:"p"},"Kermit")," to the ",Object(i.b)("inlineCode",{parentName:"p"},"bf:username")," filter."),Object(i.b)("h3",{id:"check-if-an-item-is-in-a-filter"},"Check if an Item is in a Filter"),Object(i.b)("p",null,"To check if an item has been added to a Bloom Filter yet, you will use the ",Object(i.b)("inlineCode",{parentName:"p"},"BF.EXISTS")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var exists = await db.ExecuteAsync("BF.EXISTS", "bf:username", "Kermit") == 1; \n')),Object(i.b)("p",null,"After running that command, if the Bloom Filter reports that it contains the item, ",Object(i.b)("inlineCode",{parentName:"p"},"exists")," will be true; otherwise, ",Object(i.b)("inlineCode",{parentName:"p"},"exists")," will be false."),Object(i.b)("h2",{id:"count-min-sketch"},"Count-Min Sketch"),Object(i.b)("p",null,"You can use Count-Min Sketches to count the number of times an item has been added to a set quickly and compactly. Although, of course, like other probabilistic data structures, it has some margin of error. In this case, it can over count the number of occurrences. The dimensions of the sketch determine the likelihood of this."),Object(i.b)("h3",{id:"creating-a-count-min-sketch"},"Creating a Count-Min Sketch"),Object(i.b)("p",null,"There are two ways to create a Count-Min Sketch, by probability and by dimension. Creating a Count-Min Sketch by probability will automatically generate a Count-Min Sketch based on the amount of overestimation you want to allow and the likelihood of overestimating a given element. If you want to initialize by dimensions, a Count-Min Sketch will initialize with the provided width and depth."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'await db.ExecuteAsync("CMS.INITBYPROB", "cms:views", .1, .01);\n')),Object(i.b)("p",null,"This code will initialize a Count-Min Sketch. The sketch will have an acceptable overcount of 10% and a probability of overcounting of 1%."),Object(i.b)("h3",{id:"adding-items-to-a-count-min-sketch"},"Adding Items to a Count-Min Sketch"),Object(i.b)("p",null,"To add an item to a Count-Min Sketch, you call the ",Object(i.b)("inlineCode",{parentName:"p"},"CMS.INCRBY")," command, passing in the quantity of the given item you want to add to the sketch."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'await db.ExecuteAsync("CMS.INCRBY", "cms:views", "Gangnam Style", 1);\nawait db.ExecuteAsync("CMS.INCRBY", "cms:views", "Baby Shark", 1);\nawait db.ExecuteAsync("CMS.INCRBY", "cms:views", "Gangnam Style", 2);\n')),Object(i.b)("p",null,"The above will add three views of Gangnam Style to the sketch and one view of Baby Shark."),Object(i.b)("h3",{id:"querying-the-sketch"},"Querying the Sketch"),Object(i.b)("p",null,"To query the number of occurrences of an element in the sketch, you need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"CMS.QUERY")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var numViewsGangnamStyle = (long)await db.ExecuteAsync("CMS.QUERY", "cms:views", "Gangnam Style");\nvar numViewsBabyShark = (long)await db.ExecuteAsync("CMS.QUERY", "cms:views", "Baby Shark");\nConsole.WriteLine($"Gangnam Style Views: {numViewsGangnamStyle}");\nConsole.WriteLine($"Baby Shark Views: {numViewsBabyShark}");\n')),Object(i.b)("h2",{id:"cuckoo-filters"},"Cuckoo Filters"),Object(i.b)("p",null,"Cuckoo Filters solve a similar problem to Bloom Filters; they allow you to determine if an item has been added to a set yet. However, Cuckoo Filters have slightly different characteristics than Bloom Filters. For example, you may add the same item to a Cuckoo Filter more than once, and they do support delete operations (which introduces the possibility of false negatives in addition to false positives)."),Object(i.b)("h3",{id:"creating-a-cuckoo-filter"},"Creating a Cuckoo Filter"),Object(i.b)("p",null,"Similar to a Bloom Filter, a Cuckoo Filter is automatically created by adding an item to a Cuckoo Filter that does not exist. However, you may want to reserve a Cuckoo Filter ahead of time explicitly, so it knows precisely how many items you expect and how to expand. To do this, just run the ",Object(i.b)("inlineCode",{parentName:"p"},"CF.RESERVE")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'await db.ExecuteAsync("CF.RESERVE", "cf:emails", 10000);\n')),Object(i.b)("h3",{id:"adding-to-a-cuckoo-filter"},"Adding to a Cuckoo Filter"),Object(i.b)("p",null,"To add an item to a Cuckoo Filter, use the ",Object(i.b)("inlineCode",{parentName:"p"},"CF.ADD")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'await db.ExecuteAsync("CF.ADD", "cf:emails", "foo@bar.com");\nawait db.ExecuteAsync("CF.ADD", "cf:emails", "James.Bond@mi6.com");\n')),Object(i.b)("p",null,"The above will add ",Object(i.b)("inlineCode",{parentName:"p"},"foo@bar.com")," and ",Object(i.b)("inlineCode",{parentName:"p"},"James.Bond@mi6.com")," to the Cuckoo Filter."),Object(i.b)("h3",{id:"checking-item-presence-in-a-cuckoo-filter"},"Checking Item Presence in a Cuckoo Filter"),Object(i.b)("p",null,"To check if an item has been added to a Cuckoo Filter yet, use the ",Object(i.b)("inlineCode",{parentName:"p"},"CF.EXISTS")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var jamesEmailExists = (int) await db.ExecuteAsync("CF.EXISTS", "cf:emails", "James.Bond@mi6.com") == 1;\nvar str = jamesEmailExists\n    ? "James.Bond@mi6.com has already been added"\n    : "James.Bond@mi6.com has not been added";\nConsole.WriteLine(str);\n')),Object(i.b)("h2",{id:"top-k"},"Top-K"),Object(i.b)("p",null,"The Top-K data structure allows you to keep a compact leader board of heavy-hitters. This data structure can be extremely useful when keeping track of the most popular items in an enormous stream of data as it makes it so you don't have to keep track of all of the counts of all of your records."),Object(i.b)("h3",{id:"initializing-a-top-k"},"Initializing a Top-K"),Object(i.b)("p",null,"To initialize a Top-K, use the ",Object(i.b)("inlineCode",{parentName:"p"},"TOPK.RESERVE")," command. This command will reserve a Top-K that will keep track of the highest ",Object(i.b)("inlineCode",{parentName:"p"},"k")," items:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'await db.ExecuteAsync("TOPK.RESERVE", "topk:views", 5);\n')),Object(i.b)("p",null,"The above, for example, will keep track of the five most viewed videos sent to the Top-K."),Object(i.b)("h3",{id:"add-items-to-the-top-k"},"Add Items to the Top-K"),Object(i.b)("p",null,"Adding Items to a Top-K requires the use of the ",Object(i.b)("inlineCode",{parentName:"p"},"TOPK.ADD")," command, this command can take however many items you want to insert into it, so if you get a batch of items to send at once, it may make sense to send them all across at the same time. For example, let's say we wanted to send 10,000 updates to the Top-K at the same time from a random set of videos:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var videos = new[] {"Gangnam Style", "Baby Shark", "Despacito", "Uptown Funk", "See You Again", "Hello", "Roar", "Sorry"};\nvar rand = new Random();\nvar args = new List<string>(10001){"topk:views"};\nfor (var i = 0; i < 10000; i++)\n{\n    args.Add(videos[rand.Next(videos.Length)]);\n}\n\nawait db.ExecuteAsync("TOPK.ADD", args.ToArray());\n')),Object(i.b)("p",null,"This code will send them all across in one shot. You can, of course, chunk the items and send them in batches as well. Regardless, this will add items to your Top-K."),Object(i.b)("h3",{id:"list-the-top-k-items"},"List the Top K Items"),Object(i.b)("p",null,"To list the items in your Top-K, you need to query the Top-K using the ",Object(i.b)("inlineCode",{parentName:"p"},"TOPK.LIST")," command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var topK = (RedisResult[]) await db.ExecuteAsync("TOPK.LIST", "topk:views");\nforeach (var item in topK)\n{\n    Console.WriteLine(item);\n}\n')),Object(i.b)("p",null,"This code will get all the items back for you and print them out."),Object(i.b)("h3",{id:"query-if-an-item-is-in-the-top-k"},"Query if an Item is in the Top-K"),Object(i.b)("p",null,"To see if a given item is present in the Top-K, you would use ",Object(i.b)("inlineCode",{parentName:"p"},"TOPK.QUERY"),", passing in the item you want to check membership of:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var BabySharkInTopK = (int) await db.ExecuteAsync("TOPK.QUERY", "topk:views", "Baby Shark") == 1;\nConsole.WriteLine(BabySharkInTopK ? "Baby Shark is in the Top 5" : "Baby Shark is Not in the Top 5" );\n')),Object(i.b)("p",null,"The above code will check if Baby Shark is in the Top 5 for video views from our above example."),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Code for this Demo can be found in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redis-developer/redis-bloom-dotnet-demo"}),"GitHub"))))}d.isMDXComponent=!0},295:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,h=b["".concat(r,".").concat(m)]||b[m]||u[m]||i;return a?o.a.createElement(h,c(c({ref:t},s),{},{components:a})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);