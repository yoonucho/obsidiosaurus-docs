"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6306],{3905:(A,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>w});var n=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function s(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},i=Object.keys(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var a=n.createContext({}),B=function(A){var e=n.useContext(a),t=e;return A&&(t="function"==typeof A?A(e):s(s({},e),A)),t},c=function(A){var e=B(A.components);return n.createElement(a.Provider,{value:e},A.children)},u="mdxType",l={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,i=A.originalType,a=A.parentName,c=o(A,["components","mdxType","originalType","parentName"]),u=B(t),g=r,w=u["".concat(a,".").concat(g)]||u[g]||l[g]||i;return t?n.createElement(w,s(s({ref:e},c),{},{components:t})):n.createElement(w,s({ref:e},c))}));function w(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var a in e)hasOwnProperty.call(e,a)&&(o[a]=e[a]);o.originalType=A,o[u]="string"==typeof A?A:r,s[1]=o;for(var B=2;B<i;B++)s[B]=t[B];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3565:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>B});var n=t(7462),r=(t(7294),t(3905));const i={},s="How to use Obsidiosaurus",o={unversionedId:"main/Get started/Usage",id:"main/Get started/Usage",title:"How to use Obsidiosaurus",description:"After successfully setting up your Repo, Docusaurus and your Obsidian Vault its time to check if Obsidiosaurus is working successfully.",source:"@site/docs/main/1. Get started/2. Usage.md",sourceDirName:"main/1. Get started",slug:"/main/Get started/Usage",permalink:"/obsidiosaurus-docs/docs/main/Get started/Usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main/1. Get started/2. Usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create your first notes",permalink:"/obsidiosaurus-docs/docs/main/Get started/Installation/Create notes"},next:{title:"Deploying to Github Pages",permalink:"/obsidiosaurus-docs/docs/main/Get started/Deployment/Github Pages"}},a={},B=[{value:"Errors",id:"errors",level:2}],c={toc:B},u="wrapper";function l(A){let{components:e,...i}=A;return(0,r.kt)(u,(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-obsidiosaurus"},"How to use Obsidiosaurus"),(0,r.kt)("p",null,"After successfully setting up your Repo, Docusaurus and your Obsidian Vault its time to check if Obsidiosaurus is working successfully."),(0,r.kt)("p",null,"Once you've made your to some of your note files, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"page with up arrow")," in your left sidebar in Obsidian:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"obsidiosaurus_sidebar_icon",src:t(6273).Z,width:"332",height:"92"})),(0,r.kt)("p",null,"This will trigger the Obsidiosaurus conversion process. Once the conversion process is complete, you get a notification on the top right"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"obsidiosaurus_run_sucess_notifaction_2",src:t(4170).Z,width:"400",height:"331"})),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("admonition",{title:"Log Files",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If you encounter any errors, enable Debug mode in Plugin settings and check the Logs in the Obsidian Console. ")),(0,r.kt)("p",null,"To open the console press:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MacOs: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Command"),"+",(0,r.kt)("inlineCode",{parentName:"li"},"Option"),"+",(0,r.kt)("inlineCode",{parentName:"li"},"I")))),(0,r.kt)("li",{parentName:"ul"},"Windows: `",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Control",(0,r.kt)("inlineCode",{parentName:"li"},"+"),"Shift",(0,r.kt)("inlineCode",{parentName:"li"},"+"),"I`")))),(0,r.kt)("p",null,"Afterwards select ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")," at the top:\n",(0,r.kt)("img",{alt:"obsidian_console",src:t(4717).Z,width:"1664",height:"496"})),(0,r.kt)("p",null,"Feel free to post your Logs on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CIMSTA/obsidiosaurus/issues"},"Github Issues")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/SSGK5tuqJh"},"CIMSTA Discord"),"for additional help."))}l.isMDXComponent=!0},4717:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/obsidian_console-6afcebd843111e8f6d30c23b94a208ad.webp"},4170:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/obsidiosaurus_run_sucess_notifaction_2_400-c59301b6bf6a1169da5d29b7222078c2.webp"},6273:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/webp;base64,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"}}]);