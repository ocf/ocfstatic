"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7064],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5591:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Remote shell and file transfer (SSH/SFTP)"},s=void 0,l={unversionedId:"services/shell/shell",id:"services/shell/shell",title:"Remote shell and file transfer (SSH/SFTP)",description:"A shell account refers to a text-mode interface where commands can be run",source:"@site/docs/services/shell/shell.md",sourceDirName:"services/shell",slug:"/services/shell/",permalink:"/docs/services/shell/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/services/shell/shell.md",tags:[],version:"current",frontMatter:{title:"Remote shell and file transfer (SSH/SFTP)"},sidebar:"tutorialSidebar",previous:{title:"Database (MySQL)",permalink:"/docs/services/mysql"},next:{title:"Command Reference",permalink:"/docs/services/shell/commands"}},i={},u=[{value:"SSH",id:"ssh",level:2},{value:"From your browser",id:"from-your-browser",level:4},{value:"Mac OS X or Linux",id:"mac-os-x-or-linux",level:4},{value:"Windows",id:"windows",level:4},{value:"Mosh",id:"mosh",level:4},{value:"SFTP",id:"sftp",level:2},{value:"Disk quotas {disk_quotas}",id:"disk-quotas-disk_quotas",level:2},{value:"Unattended processes {unattended_processes}",id:"unattended-processes-unattended_processes",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A shell account refers to a text-mode interface where commands can be run\ninteractively. All OCF accounts include shell account access. You can access\nyour shell account over an encrypted connection in the OCF lab or remotely via\nSSH/SFTP."),(0,o.kt)("p",null,"We support the following commonly used shell account tools (to name a few):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Subversion, Git, and Mercurial: version control"),(0,o.kt)("li",{parentName:"ul"},"cron and at: execute commands on a periodic or scheduled basis"),(0,o.kt)("li",{parentName:"ul"},"vim and emacs: powerful and extensible text editors")),(0,o.kt)("p",null,"Most SSH/SFTP clients will prompt you to accept an unknown key when you first\nconnect. Our SSH fingerprint can be used to verify that you're connecting to\nthe correct server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1024 SHA256:xz0N4OqJtabwVvdAy6AvmXSG/Ct1cVyoSv7Ag75eYg8  tsunami.ocf.berkeley.edu (DSA)\n1024 MD5:7e:19:bc:fd:b5:cd:5c:e3:42:a4:a5:74:eb:ce:5d:2e tsunami.ocf.berkeley.edu (DSA)\n256  SHA256:h6Rnqg1tyl6VMFrotrR+DSnNW6DF8wQylVllkp03DIw  tsunami.ocf.berkeley.edu (ECDSA)\n256  MD5:a2:4b:d5:17:43:2e:a7:ea:50:d7:ab:1f:63:45:a9:6c tsunami.ocf.berkeley.edu (ECDSA)\n256  SHA256:queQQ1NML1znAVQTaYirF/R5WKEVSAPnRXjEVQug7Xw  tsunami.ocf.berkeley.edu (ED25519)\n256  MD5:c6:dc:62:4f:51:8b:b1:c3:72:cf:d4:63:65:92:6f:2d tsunami.ocf.berkeley.edu (ED25519)\n2048 SHA256:X5sl/Pw8Knjl4evLlFyC9kkq02aVZjaIIsubMN/NZ8s  tsunami.ocf.berkeley.edu (RSA)\n2048 MD5:55:0a:e3:4f:4b:2c:15:f8:d4:7d:f9:93:bf:a0:41:21 tsunami.ocf.berkeley.edu (RSA)\n")),(0,o.kt)("h2",{id:"ssh"},"SSH"),(0,o.kt)("p",null,"Your shell account can be controlled remotely using\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Secure_Shell"},"SSH"),". The server name is\n",(0,o.kt)("inlineCode",{parentName:"p"},"ssh.ocf.berkeley.edu")," (",(0,o.kt)("inlineCode",{parentName:"p"},"tsunami"),")."),(0,o.kt)("h4",{id:"from-your-browser"},"From your browser"),(0,o.kt)("p",null,"If you just need to access SSH quickly, you can use our ",(0,o.kt)("a",{parentName:"p",href:"https://ssh.ocf.berkeley.edu/"},"web-based SSH\ninterface")," from your web browser."),(0,o.kt)("h4",{id:"mac-os-x-or-linux"},"Mac OS X or Linux"),(0,o.kt)("p",null,"On Mac OS X or Linux, enter in the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh username@ssh.ocf.berkeley.edu\n")),(0,o.kt)("h4",{id:"windows"},"Windows"),(0,o.kt)("p",null,"On Windows, use ",(0,o.kt)("a",{parentName:"p",href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"},"PuTTY")," (download the ",(0,o.kt)("inlineCode",{parentName:"p"},"putty.exe")," file):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Host Name: ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh.ocf.berkeley.edu")),(0,o.kt)("li",{parentName:"ul"},"Port: 22")),(0,o.kt)("h4",{id:"mosh"},"Mosh"),(0,o.kt)("p",null,"We also support ",(0,o.kt)("a",{parentName:"p",href:"https://mosh.org/"},"Mosh"),", an SSH alternative with improved\nsupport for laggy or roaming connections:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mosh username@ssh.ocf.berkeley.edu\n")),(0,o.kt)("h2",{id:"sftp"},"SFTP"),(0,o.kt)("p",null,"You can transfer files to your account using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol"},"SFTP"),". To transfer files\nyou can use the command line utility ",(0,o.kt)("inlineCode",{parentName:"p"},"sftp"),", or a graphical program such as\n",(0,o.kt)("a",{parentName:"p",href:"https://filezilla-project.org/"},"FileZilla")," (Linux, Mac, Windows), ",(0,o.kt)("a",{parentName:"p",href:"https://winscp.net/eng/index.php"},"WinSCP")," (Windows), or\n",(0,o.kt)("a",{parentName:"p",href:"https://cyberduck.io/"},"Cyberduck")," (Mac, Windows)."),(0,o.kt)("p",null,"Otherwise, use the following information in your SFTP client."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Protocol: SFTP (or SSH)"),(0,o.kt)("li",{parentName:"ul"},"Host Name: ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh.ocf.berkeley.edu")),(0,o.kt)("li",{parentName:"ul"},"Port: 22")),(0,o.kt)("h2",{id:"disk-quotas-disk_quotas"},"Disk quotas {disk_quotas}"),(0,o.kt)("p",null,"Currently, accounts are limited to 5 GB of disk usage under the home and web\ndirectories. You can check your disk usage by running ",(0,o.kt)("inlineCode",{parentName:"p"},"quota -v")," over SSH or\n[","[from your browser|commands]","]."),(0,o.kt)("h2",{id:"unattended-processes-unattended_processes"},"Unattended processes {unattended_processes}"),(0,o.kt)("p",null,"You are welcome to run unattended processes on the OCF. However, you are\nultimately responsible for ensuring that your unattended processes do not\nunduly interfere with others\u2019 ability to use the shared computing resources."),(0,o.kt)("p",null,"In particular, if you are going to run a batch job which may require a lot of\ncomputing power, you are advised to run it under ",(0,o.kt)("inlineCode",{parentName:"p"},"nice")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"ionice")," to\nlower its CPU priority and I/O priority respectively. OCF staff reserve the\nright to terminate or otherwise decrease the resource usage of processes which\nare consuming too many resources."),(0,o.kt)("p",null,"If you\u2019re trying to run a webapp or other kind of server process on the SSH\nlogin server (",(0,o.kt)("inlineCode",{parentName:"p"},"ssh.ocf.berkeley.edu"),"), please note that the SSH login server is\nfirewalled and what you\u2019re trying to do unfortunately won\u2019t work. If you\u2019re a\ngroup and you\u2019re trying to run a webapp, you may want to consider\n",(0,o.kt)("a",{parentName:"p",href:"/docs/services/webapps"},"apphosting")," instead."))}p.isMDXComponent=!0}}]);