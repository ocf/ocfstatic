"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Making OCF Google Apps accounts"},i=void 0,s={unversionedId:"staff/procedures/gapps",id:"staff/procedures/gapps",title:"Making OCF Google Apps accounts",description:"The OCF has its own Google Apps deployment, which we mainly use for GDrive and",source:"@site/docs/staff/procedures/gapps.md",sourceDirName:"staff/procedures",slug:"/staff/procedures/gapps",permalink:"/docs/staff/procedures/gapps",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/procedures/gapps.md",tags:[],version:"current",frontMatter:{title:"Making OCF Google Apps accounts"},sidebar:"tutorialSidebar",previous:{title:"Editing docs",permalink:"/docs/staff/procedures/editing-docs"},next:{title:"Granting staff privileges",permalink:"/docs/staff/procedures/granting-privileges"}},l={},c=[{value:"Making an account",id:"making-an-account",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The OCF has its own Google Apps deployment, which we mainly use for GDrive and\nGMail. While it's possible to use Calnet accounts for these (ocf.berkeley.edu\nemails redirect to Calnet by default), most active staffers choose to have a\ndedicated account because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It allows for nicer integration with our Google Drive folders"),(0,a.kt)("li",{parentName:"ul"},"It makes it easier to send emails from the ocf.berkeley.edu domain, which is\ngood if you want to send an email while representing the OCF"),(0,a.kt)("li",{parentName:"ul"},"It can be useful to have a separation between OCF and Calnet accounts.")),(0,a.kt)("h2",{id:"making-an-account"},"Making an account"),(0,a.kt)("p",null,"Google Apps accounts are available upon request for OCF staff members, and are\ngranted at SM discretion. Upon getting one, staffers should be aware that OCF\nemails will be sent to the new account instead of the Calnet account that\nthey're used to."),(0,a.kt)("p",null,"Making a new account requires Google Admin privileges:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to admin.google.com, click on the \"Users\" section of the Admin panel, and\npress the '+' button."),(0,a.kt)("li",{parentName:"ol"},"Fill in the first and last name of the user, and make sure their email\naddress matches their OCF username."),(0,a.kt)("li",{parentName:"ol"},"Update the user's ",(0,a.kt)("inlineCode",{parentName:"li"},"mail")," attribute in LDAP to use Google Apps: ",(0,a.kt)("inlineCode",{parentName:"li"},"kinit you/admin uid=usernamehere"),". Change it to ",(0,a.kt)("inlineCode",{parentName:"li"},"usernamehere@g.ocf.berkeley.edu"),".\n",(0,a.kt)("strong",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"g.")," in the domain is critical; omitting it can cause email delivery\nloops in our system!"))))}p.isMDXComponent=!0}}]);