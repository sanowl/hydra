"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return u},mdx:function(){return b},useMDXComponents:function(){return d},withMDXComponents:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){return function(n){var t=d(n.components);return r.createElement(e,o({},n,{components:t}))}},d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90009:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={id:"objects",title:"Creating objects",sidebar_label:"Creating objects"},c=void 0,l={unversionedId:"patterns/objects",id:"version-0.11/patterns/objects",title:"Creating objects",description:"One of the best ways to drive different behavior in the application is to instantiate different implementations of an interface.",source:"@site/versioned_docs/version-0.11/patterns/objects.md",sourceDirName:"patterns",slug:"/patterns/objects",permalink:"/docs/0.11/patterns/objects",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/patterns/objects.md",tags:[],version:"0.11",lastUpdatedBy:"Gerard Sanroma-Guell",lastUpdatedAt:1712180563,formattedLastUpdatedAt:"4/3/2024",frontMatter:{id:"objects",title:"Creating objects",sidebar_label:"Creating objects"},sidebar:"version-0.11/docs",previous:{title:"Debugging",permalink:"/docs/0.11/tutorial/debugging"},next:{title:"Specializing configuration",permalink:"/docs/0.11/patterns/specializing_config"}},p=[],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"One of the best ways to drive different behavior in the application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),(0,o.mdx)("p",null,"A Database connection interface may have a ",(0,o.mdx)("inlineCode",{parentName:"p"},"connect()")," method, implemented by different database drivers."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'class DBConnection:\n    def connect(self):\n        pass\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, host, user, password):\n        self.host = host\n        self.user = user\n        self.password = password\n\n    def connect(self):\n        print(\n            "MySQL connecting to {} with user={} and password={}".format(\n                self.host, self.user, self.password\n            )\n        )\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, host, user, password, database):\n        self.host = host\n        self.user = user\n        self.password = password\n        self.database = database\n\n    def connect(self):\n        print(\n            "PostgreSQL connecting to {} "\n            "with user={} and password={} and database={}".format(\n                self.host, self.user, self.password, self.database\n            )\n        )\n')),(0,o.mdx)("p",null,"To support this, we can have a parallel config structure:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),(0,o.mdx)("p",null,"Config file: ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - db: mysql\n")),(0,o.mdx)("p",null,"Config file: ",(0,o.mdx)("inlineCode",{parentName:"p"},"db/mysql.yaml")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"db:\n  class: tutorial.objects_example.objects.MySQLConnection\n  params:\n    host: localhost\n    user: root\n    password: 1234\n")),(0,o.mdx)("p",null,"db/postgresql.yaml:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"db:\n  class: tutorial.objects_example.objects.PostgreSQLConnection\n  params:\n    host: localhost\n    user: root\n    password: 1234\n    database: tutorial\n")),(0,o.mdx)("p",null,"With this, you can instantiate the object from the configuration with a single line of code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf/config.yaml")\ndef my_app(cfg):\n    connection = hydra.utils.instantiate(cfg.db)\n    connection.connect()\n')),(0,o.mdx)("p",null,"MySQL is the default per the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml")," file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py\nMySQL connecting to localhost with user=root and password=1234\n")),(0,o.mdx)("p",null,"Change the instantiated object class and override values from the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py db=postgresql db.params.password=abcde\nPostgreSQL connecting to localhost with user=root and password=abcde and database=tutorial\n")))}u.isMDXComponent=!0}}]);