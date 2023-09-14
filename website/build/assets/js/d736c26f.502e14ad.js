"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[630],{3905:(A,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>g});var o=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,o)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function a(A,e){if(null==A)return{};var t,o,n=function(A,e){if(null==A)return{};var t,o,n={},i=Object.keys(A);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var s=o.createContext({}),l=function(A){var e=o.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},u=function(A){var e=l(A.components);return o.createElement(s.Provider,{value:e},A.children)},c="mdxType",p={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},B=o.forwardRef((function(A,e){var t=A.components,n=A.mdxType,i=A.originalType,s=A.parentName,u=a(A,["components","mdxType","originalType","parentName"]),c=l(t),B=n,g=c["".concat(s,".").concat(B)]||c[B]||p[B]||i;return t?o.createElement(g,r(r({ref:e},u),{},{components:t})):o.createElement(g,r({ref:e},u))}));function g(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var i=t.length,r=new Array(i);r[0]=B;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=A,a[c]="string"==typeof A?A:n,r[1]=a;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}B.displayName="MDXCreateElement"},6996:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(7462),n=(t(7294),t(3905));const i={},r="Setup Repository",a={unversionedId:"main/Get started/Installation/Setup Git Repo",id:"main/Get started/Installation/Setup Git Repo",title:"Setup Repository",description:"Step 2: Set up a git Repository",source:"@site/docs/main/1. Get started/1. Installation/2. Setup Git Repo.md",sourceDirName:"main/1. Get started/1. Installation",slug:"/main/Get started/Installation/Setup Git Repo",permalink:"/obsidiosaurus-docs/docs/main/Get started/Installation/Setup Git Repo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/main/1. Get started/1. Installation/2. Setup Git Repo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/obsidiosaurus-docs/docs/main/Get started/Installation/Required Tools"},next:{title:"Docusaurus Installation",permalink:"/obsidiosaurus-docs/docs/main/Get started/Installation/Docusaurus Installation"}},s={},l=[{value:"Step 2: Set up a <code>git</code> Repository",id:"step-2-set-up-a-git-repository",level:2},{value:"1) Register a Github Account",id:"1-register-a-github-account",level:3},{value:"2) Create a New Repository",id:"2-create-a-new-repository",level:3},{value:"3) Clone the Repository to Your Local Machine",id:"3-clone-the-repository-to-your-local-machine",level:3},{value:"4) Add a <code>.gitignore</code> file to the root",id:"4-add-a-gitignore-file-to-the-root",level:3},{value:"5) Access the Repository Folder using VSCode",id:"5-access-the-repository-folder-using-vscode",level:3},{value:"6) Initiate a New Terminal Session in VSCode",id:"6-initiate-a-new-terminal-session-in-vscode",level:3}],u={toc:l},c="wrapper";function p(A){let{components:e,...i}=A;return(0,n.kt)(c,(0,o.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setup-repository"},"Setup Repository"),(0,n.kt)("h2",{id:"step-2-set-up-a-git-repository"},"Step 2: Set up a ",(0,n.kt)("inlineCode",{parentName:"h2"},"git")," Repository"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"e strongly recommend utilizing a git repository for efficient version control. While any git\nrovider can be used for this purpose, we will use Github for this tutorial. Github is not only\nhe most popular choice, but also offers the added benefits of hosting websites with Github\nages and an automated release pipeline.")),(0,n.kt)("h3",{id:"1-register-a-github-account"},"1) Register a Github Account"),(0,n.kt)("p",null,"If you do not have a Github account yet, you can register for one ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/join"},"here"),"."),(0,n.kt)("h3",{id:"2-create-a-new-repository"},"2) Create a New Repository"),(0,n.kt)("p",null,"Proceed to create a new repository for your Docusaurus website and Obsidian vault."),(0,n.kt)("admonition",{title:"Public vs. Private Repository",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Please note that with a free Github subscription, you cannot use Github Pages without ",(0,n.kt)("strong",{parentName:"p"},"making your repository public, and thus, accessible to every user on the internet.")," This implies that your ",(0,n.kt)("strong",{parentName:"p"},"vault with all files & settings, including files in draft mode will be fully exposed.")," If you wish to keep your repository private, you will need to either upgrade your Github account to enable Github Pages on a private repository, or explore alternative deployment methods.")),(0,n.kt)("h3",{id:"3-clone-the-repository-to-your-local-machine"},"3) Clone the Repository to Your Local Machine"),(0,n.kt)("p",null,"To clone the repository, open a terminal and execute the following command: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/{USERNAME}/{REPOSITORY}.git"))),(0,n.kt)("h3",{id:"4-add-a-gitignore-file-to-the-root"},"4) Add a ",(0,n.kt)("inlineCode",{parentName:"h3"},".gitignore")," file to the root"),(0,n.kt)("p",null,"Obsidiosaurus creates JSON files at the root of your repo to keep track of the conversion.\nIt allows a smart conversion, it only converts what has been actual changed."),(0,n.kt)("p",null,"Add in your ",(0,n.kt)("inlineCode",{parentName:"p"},".gitignore")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"allSourceAssetsInfo.json\nallFilesInfo.json\nassetInfo.json\n")),(0,n.kt)("h3",{id:"5-access-the-repository-folder-using-vscode"},"5) Access the Repository Folder using VSCode"),(0,n.kt)("p",null,"Once you have cloned the repository to your local machine, you can open the repository folder with Visual Studio Code (VSCode)."),(0,n.kt)("h3",{id:"6-initiate-a-new-terminal-session-in-vscode"},"6) Initiate a New Terminal Session in VSCode"),(0,n.kt)("p",null,"If you haven't already, start a new Terminal session in VSCode."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"vs-code_new_terminal",src:t(2362).Z,width:"400",height:"114"})),(0,n.kt)("p",null,"Your Terminal session should now be directed to your repository's root folder."))}p.isMDXComponent=!0},2362:(A,e,t)=>{t.d(e,{Z:()=>o});const o="data:image/webp;base64,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"}}]);