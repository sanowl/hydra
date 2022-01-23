"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5560],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1883:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={id:"style_guide",title:"Style Guide",sidebar_label:"Style Guide"},c=void 0,s={unversionedId:"development/style_guide",id:"version-1.0/development/style_guide",isDocsHomePage:!1,title:"Style Guide",description:"The code need to pass verification by the following tools:",source:"@site/versioned_docs/version-1.0/development/style_guide.md",sourceDirName:"development",slug:"/development/style_guide",permalink:"/docs/1.0/development/style_guide",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/development/style_guide.md",tags:[],version:"1.0",lastUpdatedBy:"kalman13",lastUpdatedAt:1642943956,formattedLastUpdatedAt:"1/23/2022",frontMatter:{id:"style_guide",title:"Style Guide",sidebar_label:"Style Guide"},sidebar:"version-1.0/docs",previous:{title:"Testing",permalink:"/docs/1.0/development/testing"},next:{title:"Documentation",permalink:"/docs/1.0/development/documentation"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The code need to pass verification by the following tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"black .")," : Automatic code formatting for Python"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flake8")," : PEP8 compliance checker for Python, this includes copyright header verification"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isort .")," : Ensure imports are sorted properly"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypy --strict .")," : Ensures code passes strict type checking"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yamllint .")," : Ensures that yaml files are syntactically correct and properly indented.")),(0,o.kt)("p",null,"The easiest way to run the required verifications is: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nox -s lint")," : for the Hydra core"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nox -s lint_plugins")," : for the included plugins")),(0,o.kt)("p",null,"isort is a bit tricky to run for plugins. the best way to get it to sort the plugins imports is with the FIX environment\nvariable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ FIX=1 nox -s lint_plugins\n")),(0,o.kt)("p",null,"It is also recommended that you install pre-commit hooks (use ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit install"),").\npre-commit will execute some of the above tests when you commit your code locally.\nYou can disable it by appending ",(0,o.kt)("inlineCode",{parentName:"p"},"-n")," to your commit command: ",(0,o.kt)("inlineCode",{parentName:"p"},"git commit -m wip -n")),(0,o.kt)("p",null,"Pull requests that do not lint will fail the automated testing."))}d.isMDXComponent=!0}}]);