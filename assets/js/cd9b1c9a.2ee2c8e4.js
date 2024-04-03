"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6205],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){return function(n){var t=p(n.components);return r.createElement(e,a({},n,{components:t}))}},p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,s(s({ref:n},l),{},{components:t})):r.createElement(g,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return c},T:function(){return l}});var r=t(87462),o=t(67294),a=t(39960),i=t(52263),s=t(80907);function c(e){return o.createElement(a.default,(0,r.Z)({},e,{to:(n=e.to,c=(0,s.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==c?void 0:c.name)?t:"current"]+n),target:"_blank"}));var n,t,c}function l(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(c,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},79618:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=t(93899),s=["components"],c={id:"dynamic_schema",title:"Dynamic schema with many configs"},l=void 0,m={unversionedId:"tutorials/structured_config/dynamic_schema",id:"version-1.0/tutorials/structured_config/dynamic_schema",title:"Dynamic schema with many configs",description:"In this page we will see how to get runtime type safety for configs with dynamic schema.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/7_dynamic_schema_many_configs.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/dynamic_schema",permalink:"/docs/1.0/tutorials/structured_config/dynamic_schema",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/7_dynamic_schema_many_configs.md",tags:[],version:"1.0",lastUpdatedBy:"Gerard Sanroma-Guell",lastUpdatedAt:1712180563,formattedLastUpdatedAt:"4/3/2024",sidebarPosition:7,frontMatter:{id:"dynamic_schema",title:"Dynamic schema with many configs"},sidebar:"version-1.0/docs",previous:{title:"Static schema with many configs",permalink:"/docs/1.0/tutorials/structured_config/static_schema"},next:{title:"Config Store API",permalink:"/docs/1.0/tutorials/structured_config/config_store"}},p=[],d={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(i.T,{to:"examples/tutorials/structured_configs/7_dynamic_schema_many_configs",mdxType:"ExampleGithubLink"}),(0,a.mdx)("p",null,"In this page we will see how to get runtime type safety for configs with dynamic schema.\nOur top level config contains a single field - ",(0,a.mdx)("inlineCode",{parentName:"p"},"db"),", with the type ",(0,a.mdx)("inlineCode",{parentName:"p"},"DBConfig"),".\nBased on user choice, we would like its type to be either ",(0,a.mdx)("inlineCode",{parentName:"p"},"MySQLConfig")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"PostGreSQLConfig")," at runtime.\nThe two schemas differs: config files that are appropriate for one are inappropriate for the other."),(0,a.mdx)("p",null,"For each of the two schemas, we have two options - one for prod and one for staging:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory"',title:'"Config','directory"':!0},"\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql_prod.yaml\n    \u251c\u2500\u2500 mysql_staging.yaml\n    \u251c\u2500\u2500 postgresql_prod.yaml\n    \u2514\u2500\u2500 postgresql_staging.yaml\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = MISSING\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    encoding: str = MISSING\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    timeout: int = MISSING\n\n@dataclass\nclass Config:\n    db: DBConfig = MISSING\n\ncs = ConfigStore.instance()\ncs.store(group="schema/db", name="mysql", node=MySQLConfig, package="db")\ncs.store(group="schema/db", name="postgresql", node=PostGreSQLConfig, package="db")\ncs.store(name="config", node=Config)\n\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,a.mdx)("p",null,"When composing the config, we need to select both the schema and the actual config group option.\nThis is what the defaults list looks like:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - schema/db: mysql\n  - db: mysql_staging\n")),(0,a.mdx)("p",null,"Let's dissect the how we store the schemas into the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ConfigStore"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'cs.store(group="schema/db", name="mysql", node=MySQLConfig, package="db")\n')),(0,a.mdx)("p",null,"There are several notable things here:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"We use the group ",(0,a.mdx)("inlineCode",{parentName:"li"},"schema/db")," and not ",(0,a.mdx)("inlineCode",{parentName:"li"},"db"),".",(0,a.mdx)("br",{parentName:"li"}),"Config Groups are mutually exclusive, only one option can be selected from a Config Group. We want to select both the schema and the config.\nStoring all schemas in subgroups of the config group schema is good practice. This also helps in preventing name collisions."),(0,a.mdx)("li",{parentName:"ul"},"We need to specify the package to be ",(0,a.mdx)("inlineCode",{parentName:"li"},"db"),".\nBy default, the package for configs stored in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"ConfigStore")," is ",(0,a.mdx)("inlineCode",{parentName:"li"},"_group_"),". We want to schematize ",(0,a.mdx)("inlineCode",{parentName:"li"},"db")," and not ",(0,a.mdx)("inlineCode",{parentName:"li"},"schema.db")," in the config so we have to override that. ")),(0,a.mdx)("p",null,"By default, we get the mysql staging config:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"db:\n  driver: mysql\n  host: mysql001.staging\n  encoding: utf-8\n")),(0,a.mdx)("p",null,"We can change both the schema and the config: "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py schema/db=postgresql db=postgresql_prod"',title:'"$',python:!0,"my_app.py":!0,"schema/db":"postgresql",db:'postgresql_prod"'},"db:\n  driver: postgresql\n  host: postgresql01.prod\n  timeout: 10\n")),(0,a.mdx)("p",null,"If we try to use a postgresql config without changing the schema as well we will get an error:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python my_app.py db=postgresql_prod"',title:'"$',python:!0,"my_app.py":!0,db:'postgresql_prod"'},"Error merging db=postgresql_prod\nKey 'timeout' not in 'MySQLConfig'\n        full_key: db.timeout\n        reference_type=DBConfig\n        object_type=MySQLConfig\n")))}u.isMDXComponent=!0}}]);