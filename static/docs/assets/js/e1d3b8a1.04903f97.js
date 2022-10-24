"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={title:"ocf-tv: connect to the tv or modify the volume"},i=void 0,c={unversionedId:"staff/scripts/ocf-tv",id:"staff/scripts/ocf-tv",title:"ocf-tv: connect to the tv or modify the volume",description:"The usage of ocf-tv looks like:",source:"@site/docs/staff/scripts/ocf-tv.md",sourceDirName:"staff/scripts",slug:"/staff/scripts/ocf-tv",permalink:"/docs/staff/scripts/ocf-tv",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/scripts/ocf-tv.md",tags:[],version:"current",frontMatter:{title:"ocf-tv: connect to the tv or modify the volume"},sidebar:"tutorialSidebar",previous:{title:"note: add notes to a user account",permalink:"/docs/staff/scripts/note"},next:{title:"paper: view and modify print quotas",permalink:"/docs/staff/scripts/paper"}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"ocf-tv")," looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ocf-tv [-h] [-H HOST] {connect,volume,mute,stop-tunnel,tunnel-audio}\n")),(0,r.kt)("p",null,"If you provide no arguments to ",(0,r.kt)("inlineCode",{parentName:"p"},"ocf-tv")," the default behavior is that it will\nstart a VNC session to the TV. If you do not specify the host it will use the\nTV by default."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ocf-tv connect")," will open up a VNC window using ",(0,r.kt)("inlineCode",{parentName:"p"},"xvncviewer")," to the host.\nThe TV uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/staff/i3wm"},"i3wm"),", a tiling window manager, so if you are\nunsure of how to use it read the linked documentation."),(0,r.kt)("p",null,"If you'd like to just change the volume on the host, you can use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"volume")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"mute")," options to change the pulseaudio volume level.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ocf-tv volume 50")," sets the remote volume to 50% (acceptable values in ","[0,150]",")\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"mute")," does what you might expect."),(0,r.kt)("p",null,"If you'd like to tunnel audio playing on your local desktop to the TV (for\nexample, so you don't have to manipulate YouTube over VNC), you can start\nthe tunnel via ",(0,r.kt)("inlineCode",{parentName:"p"},"ocf-tv tunnel-audio")," from any desktop, and similarly, use\n",(0,r.kt)("inlineCode",{parentName:"p"},"ocf-tv stop-tunnel")," to close the tunnel and resume local-only playback."))}p.isMDXComponent=!0}}]);