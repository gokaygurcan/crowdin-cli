"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[3215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},p="crowdin pre-translate",o={unversionedId:"commands/crowdin-pre-translate",id:"commands/crowdin-pre-translate",title:"crowdin pre-translate",description:"Description",source:"@site/docs/commands/crowdin-pre-translate.md",sourceDirName:"commands",slug:"/commands/crowdin-pre-translate",permalink:"/crowdin-cli/commands/crowdin-pre-translate",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/cli3/website/docs/commands/crowdin-pre-translate.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin task list",permalink:"/crowdin-cli/commands/crowdin-task-list"},next:{title:"CI/CD Integration",permalink:"/crowdin-cli/ci-cd"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Config Options",id:"config-options",level:2},{value:"Notes",id:"notes",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crowdin-pre-translate"},"crowdin pre-translate"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Pre-translate files via Machine Translation (MT) or Translation Memory (TM)"),(0,a.kt)("h2",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"crowdin pre-translate [CONFIG OPTIONS] [OPTIONS]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--version"),(0,a.kt)("br",{parentName:"p"}),"\n","Display version information and exit"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),(0,a.kt)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--no-progress"),(0,a.kt)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--verbose"),(0,a.kt)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--no-colors"),(0,a.kt)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--config"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--identity"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-l"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--language"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Languages to which pre-translation should be applied"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--method"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Defines pre-translation method. Available values: 'mt', 'tm'"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--engine-id"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Machine Translation engine Identifier"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-b"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--branch"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Specify branch name. Default: none"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--auto-approve-option"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Defines which translations added by TM pre-translation should be\nauto-approved. Available values: all, except-auto-substituted,\nperfect-match-only. Default: none"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--[no-]duplicate-translations"),(0,a.kt)("br",{parentName:"p"}),"\n","Adds translations even if the same translation already exists"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--[no-]translate-untranslated-only"),(0,a.kt)("br",{parentName:"p"}),"\n","Applies pre-translation for untranslated strings only"),(0,a.kt)("p",null,"--","[no-]","translate-with-perfect-match-only",(0,a.kt)("br",{parentName:"p"}),"\n","Applies pre-translation only for the strings with perfect match"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--plain"),(0,a.kt)("br",{parentName:"p"}),"\n","Provide plain, processable output"),(0,a.kt)("h2",{id:"config-options"},"Config Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-T"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--token"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Personal access token required for authentication"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--project-id"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Numeric ID of the project"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--source"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Path to the source files"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-t"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--translation"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Path to the translation files"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--dest"),"=",(0,a.kt)("em",{parentName:"p"},"\u2026"),(0,a.kt)("br",{parentName:"p"}),"\n","Specify file name in Crowdin"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--[no-]preserve-hierarchy"),(0,a.kt)("br",{parentName:"p"}),"\n","Choose whether to save the directory hierarchy in the Crowdin project"),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"Crowdin CLI uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"crowdin.yml")," configuration to Pre-Translate files."),(0,a.kt)("p",null,"At first, it finds local source files that match the source\nconfiguration pattern. hen CLI tries to find the corresponding files in\nthe crowdin project. After that, CLI will request pre-translation for\nthe found file IDs (matching these files to local sources and\nconfiguration file)."))}d.isMDXComponent=!0}}]);