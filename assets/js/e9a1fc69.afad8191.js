"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[569],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1148:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"defaults",title:"Defaults",sidebar_label:"Defaults"},u=void 0,p={unversionedId:"tutorial/defaults",id:"version-0.11/tutorial/defaults",isDocsHomePage:!1,title:"Defaults",description:"After office politics, you decide that you want to use MySQL by default.",source:"@site/versioned_docs/version-0.11/tutorial/4_defaults.md",sourceDirName:"tutorial",slug:"/tutorial/defaults",permalink:"/docs/0.11/tutorial/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/4_defaults.md",tags:[],version:"0.11",lastUpdatedBy:"kalman13",lastUpdatedAt:1642943956,formattedLastUpdatedAt:"1/23/2022",sidebarPosition:4,frontMatter:{id:"defaults",title:"Defaults",sidebar_label:"Defaults"},sidebar:"version-0.11/docs",previous:{title:"Config groups",permalink:"/docs/0.11/tutorial/config_groups"},next:{title:"Config composition",permalink:"/docs/0.11/tutorial/composition"}},c=[{value:"Config group defaults",id:"config-group-defaults",children:[{value:"Overriding a config group default",id:"overriding-a-config-group-default",children:[]}]},{value:"Non-config group defaults",id:"non-config-group-defaults",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After office politics, you decide that you want to use MySQL by default.\nYou no longer want to type ",(0,a.kt)("inlineCode",{parentName:"p"},"db=mysql")," every time you run your application."),(0,a.kt)("p",null,"You can add a ",(0,a.kt)("inlineCode",{parentName:"p"},"defaults")," list into your config file."),(0,a.kt)("h2",{id:"config-group-defaults"},"Config group defaults"),(0,a.kt)("p",null,"Configuration file: ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - db: mysql\n")),(0,a.kt)("p",null,"Remember to specify ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"config_path"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='conf/config.yaml')\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n")),(0,a.kt)("p",null,"When you run the updated application, MySQL is loaded by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),(0,a.kt)("h3",{id:"overriding-a-config-group-default"},"Overriding a config group default"),(0,a.kt)("p",null,"You can still load PostgreSQL, and override individual values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),(0,a.kt)("p",null,"You can prevent a default from being loaded by assigning ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," to it in the command line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=null\n{}\n")),(0,a.kt)("h2",{id:"non-config-group-defaults"},"Non-config group defaults"),(0,a.kt)("p",null,"Sometimes a config file you want to merge does not belong in any config group.\nThe following will load ",(0,a.kt)("inlineCode",{parentName:"p"},"some_file.yaml")," from your config directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - some_file\n")),(0,a.kt)("p",null,"Config files that not a part of a ",(0,a.kt)("inlineCode",{parentName:"p"},"config group")," like ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," cannot be overridden."))}d.isMDXComponent=!0}}]);