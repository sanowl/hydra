(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{220:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),i=(a(0),a(232)),o={id:"nevergrad_sweeper",title:"Nevergrad Sweeper plugin",sidebar_label:"Nevergrad Sweeper plugin"},l={id:"plugins/nevergrad_sweeper",title:"Nevergrad Sweeper plugin",description:"[![Example application](https://img.shields.io/badge/-Example%20application-informational)](https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_nevergrad_sweeper/example)",source:"@site/docs/plugins/nevergrad_sweeper.md",permalink:"/docs/next/plugins/nevergrad_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/nevergrad_sweeper.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1590278799,sidebar_label:"Nevergrad Sweeper plugin",sidebar:"Docs",previous:{title:"Joblib Launcher plugin",permalink:"/docs/next/plugins/joblib_launcher"},next:{title:"The @package directive",permalink:"/docs/next/advanced/package_directive"}},p=[{value:"Example of training using Nevergrad hyperparameter search",id:"example-of-training-using-nevergrad-hyperparameter-search",children:[]},{value:"Defining the parameters",id:"defining-the-parameters",children:[{value:"Choices",id:"choices",children:[]},{value:"Scalars",id:"scalars",children:[]}]}],c={rightToc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_nevergrad_sweeper/example"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_nevergrad_sweeper"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebookresearch.github.io/nevergrad/"}),"Nevergrad")," is a derivative-free optimization platform proposing a library of state-of-the art algorithms for hyperparameter search. This plugin provides a mechanism for Hydra applications to use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebookresearch.github.io/nevergrad/"}),"Nevergrad")," algorithms for the optimization of experiments/applications parameters."),Object(i.b)("p",null,"This plugin requires Hydra 1.0 which is not yet released.\nTo install, checkout Hydra from master, and install both Hydra and this plugin from the checkout directory."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/facebookresearch/hydra.git\n$ cd hydra\n$ pip install .                               # install hydra\n$ pip install plugins/hydra_nevergrad_sweeper # Install plugin\n")),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper=nevergrad")," to the cmd command. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/sweeper: nevergrad\n")),Object(i.b)("p",null,"The default configuration is ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_nevergrad_sweeper/hydra_plugins/hydra_nevergrad_sweeper/config.py"}),"here"),"."),Object(i.b)("h2",{id:"example-of-training-using-nevergrad-hyperparameter-search"},"Example of training using Nevergrad hyperparameter search"),Object(i.b)("p",null,"We include an example of how to use this plugin. The file ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"plugins/hydra_nevergrad_sweeper/example/dummy_training.py"}),Object(i.b)("inlineCode",{parentName:"a"},"example/dummy_training.py"))," implements an example of how to perform minimization of a (dummy) function including a mixture of continuous and discrete parameters. "),Object(i.b)("p",null,"This application has the following configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/sweeper: nevergrad\n\nhydra:\n  sweeper:\n    params:\n      # configuration of the optimizer\n      optim:\n        # name of the nevergrad optimizer to use\n        # OnePlusOne is good at low budget, but may converge early\n        optimizer: OnePlusOne\n        # total number of function evaluations to perform\n        budget: 100\n        # number of parallel workers for performing function evaluations\n        num_workers: 10\n        # maximize: true  # comment out for maximization\n      # default parametrization of the search space\n      parametrization:\n        # either one or the other\n        db:\n          - mnist\n          - cifar\n        # a log-distributed positive scalar, evolving by factors of 2 on average\n        lr:\n          init: 0.02\n          step: 2.0\n          log: true\n        # a linearly-distributed scalar between 0 and 1\n        dropout:\n          lower: 0.0\n          upper: 1.0\n        # an integer scalar going from 4 to 16\n        # init and step parameters could also be provided,\n        # by default init is set to the middle of the range\n        # and step is set to a sixth of the range\n        batch_size:\n          lower: 4\n          upper: 16\n          integer: true\n\ndb: cifar\nlr: 0.01\nbatch_size: 8\ndropout: 0.6\n")),Object(i.b)("p",null,"The function decorated with ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main()")," returns a float which we want to minimize, the minimum is 0 and reached for:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"db: mnist\nlr: 0.12\ndropout: 0.33\nbatch_size=4\n")),Object(i.b)("p",null,"To run hyperparameter search and look for the best parameters for this function, clone the code and run the following command in the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins/hydra_nevergrad_sweeper")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"python example/dummy_training.py -m\n")),Object(i.b)("p",null,"You can also override the search space parametrization:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"python example/dummy_training.py -m db=mnist,cifar batch_size=4,8,16 lr=log:0.001:1 dropout=0:1\n")),Object(i.b)("p",null,"The initialization of the sweep and the first 5 evaluations (out of 100) look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"[HYDRA] NevergradSweeper(optimizer=OnePlusOne, budget=100, num_workers=10) minimization\n[HYDRA] with parametrization Dict(batch_size=TransitionChoice(choices=Tuple(4,8,16),position=Scalar[sigma=Log{exp=1.2}],transitions=[1. 1.]),db=Choice(choices=Tuple(mnist,cifar),weights=Array{(2,)}),dropout=Scalar{Cl(0,1)}[sigma=Log{exp=1.2}],lr=Log{exp=3.162277660168379,Cl(0.001,1)}):{'db': 'cifar', 'batch_size': 8, 'lr': 0.03162277660168379, 'dropout': 0.5}\n[HYDRA] Sweep output dir: multirun/2020-03-04/17-53-29\n[HYDRA] Launching 10 jobs locally\n[HYDRA]     #0 : db=mnist batch_size=8 lr=0.032 dropout=0.5\n[__main__][INFO] - dummy_training(dropout=0.500, lr=0.032, db=mnist, batch_size=8) = 5.258\n[HYDRA]     #1 : db=mnist batch_size=16 lr=0.035 dropout=0.714\n[__main__][INFO] - dummy_training(dropout=0.714, lr=0.035, db=mnist, batch_size=16) = 13.469\n[HYDRA]     #2 : db=cifar batch_size=8 lr=0.053 dropout=0.408\n[__main__][INFO] - dummy_training(dropout=0.408, lr=0.053, db=cifar, batch_size=8) = 4.145\n[HYDRA]     #3 : db=cifar batch_size=8 lr=0.012 dropout=0.305\n[__main__][INFO] - dummy_training(dropout=0.305, lr=0.012, db=cifar, batch_size=8) = 4.133\n[HYDRA]     #4 : db=mnist batch_size=4 lr=0.030 dropout=0.204\n[__main__][INFO] - dummy_training(dropout=0.204, lr=0.030, db=mnist, batch_size=4) = 1.216\n")),Object(i.b)("p",null,"and the final 2 evaluations look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"[HYDRA]     #8 : db=mnist batch_size=4 lr=0.094 dropout=0.381\n[__main__][INFO] - dummy_training(dropout=0.381, lr=0.094, db=mnist, batch_size=4) = 1.077\n[HYDRA]     #9 : db=mnist batch_size=4 lr=0.094 dropout=0.381\n[__main__][INFO] - dummy_training(dropout=0.381, lr=0.094, db=mnist, batch_size=4) = 1.077\n[HYDRA] Best parameters: db=mnist batch_size=4 lr=0.094 dropout=0.381\n")),Object(i.b)("p",null,"The run also creates an ",Object(i.b)("inlineCode",{parentName:"p"},"optimization_results.yaml")," file in your sweep folder with the parameters recommended by the optimizer:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"best_evaluated_result: 0.381\n\nbest_evaluated_params:\n  batch_size: 4\n  db: mnist\n  dropout: 0.381\n  lr: 0.094\n\nname: nevergrad:\n")),Object(i.b)("h2",{id:"defining-the-parameters"},"Defining the parameters"),Object(i.b)("p",null,"The plugin can use 2 types of parameters:"),Object(i.b)("h3",{id:"choices"},"Choices"),Object(i.b)("p",null,"Choices are defined with ",Object(i.b)("strong",{parentName:"p"},"comma-separated values")," in the command-line (",Object(i.b)("inlineCode",{parentName:"p"},"db=mnist,cifar")," or ",Object(i.b)("inlineCode",{parentName:"p"},"batch_size=4,8,12,16"),") or with a list in a config file.\nBy default, values are processed as floats if all can be converted to it, but you can modify this behavior by adding colon-separated specifications ",Object(i.b)("inlineCode",{parentName:"p"},"int")," or ",Object(i.b)("inlineCode",{parentName:"p"},"str")," before the the list. (eg.: ",Object(i.b)("inlineCode",{parentName:"p"},"batch_size=int:4,8,12,16"),")"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," sequences of increasing scalars are treated as a special case, easier to solve. Make sure to specify it this way when possible."),Object(i.b)("h3",{id:"scalars"},"Scalars"),Object(i.b)("p",null,"Scalars can be defined:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"through a commandline override with ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},":"),"-separated values")," defining a range (eg: ",Object(i.b)("inlineCode",{parentName:"p"},"dropout=0:1"),").\nYou can add specifications for log distributed values (eg.: ",Object(i.b)("inlineCode",{parentName:"p"},"lr=log:0.001:1"),") or integer values (eg.: ",Object(i.b)("inlineCode",{parentName:"p"},"batch_size=int:4:8"),")\nor a combination of both (eg.: ",Object(i.b)("inlineCode",{parentName:"p"},"batch_size=log:int:4:1024"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"through a config files, with fields:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"init"),": optional initial value"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lower")," : optional lower bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"upper"),": optional upper bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"log"),": set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"\xa0for log distributed values"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"step"),": optional step size for looking for better parameters. In linear mode this is an additive step, in logarithmic mode it\nis multiplicative.\xa0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"integer"),": set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"\xa0for integers (favor floats over integers whenever possible)")),Object(i.b)("p",{parentName:"li"},"Providing only ",Object(i.b)("inlineCode",{parentName:"p"},"lower")," and ",Object(i.b)("inlineCode",{parentName:"p"},"upper")," bound will set the initial value to the middle of the range, and the step to a sixth of the range."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": unbounded scalars (scalars with no upper and/or lower bounds) can only be defined through a config file."))}s.isMDXComponent=!0},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(m,l({ref:t},c,{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);