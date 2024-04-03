"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[502],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return y},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){return function(t){var r=s(t.components);return n.createElement(e,a({},t,{components:r}))}},s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80665:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"intro",title:"Introduction",sidebar_label:"Introduction"},u=void 0,l={unversionedId:"experimental/intro",id:"experimental/intro",title:"Introduction",description:"Experimental features are new features in Hydra that are considered experimental because their API may have not yet",source:"@site/docs/experimental/intro.md",sourceDirName:"experimental",slug:"/experimental/intro",permalink:"/docs/experimental/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/experimental/intro.md",tags:[],version:"current",lastUpdatedBy:"Gerard Sanroma-Guell",lastUpdatedAt:1712180563,formattedLastUpdatedAt:"4/3/2024",frontMatter:{id:"intro",title:"Introduction",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Hydra in Unit Tests",permalink:"/docs/advanced/unit_testing"},next:{title:"Callbacks",permalink:"/docs/experimental/callbacks"}},p=[],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Experimental features are new features in Hydra that are considered experimental because their API may have not yet\nstabilized."),(0,a.mdx)("p",null,"Those features should all work, but code relying on them may break in future versions as they evolve.\nExperimental features are expected be promoted out of experimental once they deemed stable and complete enough."))}d.isMDXComponent=!0}}]);