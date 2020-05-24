(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),i=n(9),a=(n(0),n(232)),o={id:"strict_mode",title:"Strict config errors"},c={id:"tutorials/basic/running_your_app/strict_mode",title:"Strict config errors",description:"### Overview",source:"@site/docs/tutorials/basic/running_your_app/config_strict_mode.md",permalink:"/docs/next/tutorials/basic/running_your_app/strict_mode",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/running_your_app/config_strict_mode.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1590278799,sidebar:"Docs",previous:{title:"Command line overrides",permalink:"/docs/next/tutorials/basic/running_your_app/command_line_overrides"},next:{title:"Multi-run",permalink:"/docs/next/tutorials/basic/running_your_app/multi-run"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Adding fields at runtime",id:"adding-fields-at-runtime",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"overview"},"Overview"),Object(a.b)("p",null,"Hydra sets the ",Object(a.b)("inlineCode",{parentName:"p"},"struct")," flag on the config object. This catches references to fields not specified in the config. "),Object(a.b)("p",null,"This results in two useful behaviors:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Accessing a field that not in the config file raises exception:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{3}","{3}":!0}),"@hydra.main(config_name='config')\ndef my_app(cfg : DictConfig) -> None:\n    print(cfg.db.drover)  # typo: cfg.db.driver, raises an exception\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Overriding a field that is not in the config file via the command line prints an error:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:"{1}","{1}":!0}),"$ python my_app.py db.drover=mariadb\nError merging overrides\nKey 'drover' in not in struct\n        full_key: db.drover\n        reference_type=Optional[Dict[Any, Any]]\n        object_type=dict\n")),Object(a.b)("h3",{id:"adding-fields-at-runtime"},"Adding fields at runtime"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can disable the struct flag a specific context using ",Object(a.b)("inlineCode",{parentName:"li"},"open_dict"),"."),Object(a.b)("li",{parentName:"ul"},"You can disable the struct flag permanently for your config using ",Object(a.b)("inlineCode",{parentName:"li"},"OmegaConf.set_struct(cfg, False)"),".")),Object(a.b)("p",null,"Learn more about OmegaConf struct flag ",Object(a.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#struct-flag",target:"_blank"},"here"),"."))}s.isMDXComponent=!0},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(f,c({ref:t},u,{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);