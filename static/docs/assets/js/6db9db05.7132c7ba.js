"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Kubernetes"},s=void 0,i={unversionedId:"staff/backend/kubernetes",id:"staff/backend/kubernetes",title:"Kubernetes",description:"At the OCF we have fully migrated all services from Mesos/Marathon to",source:"@site/docs/staff/backend/kubernetes.md",sourceDirName:"staff/backend",slug:"/staff/backend/kubernetes",permalink:"/docs/staff/backend/kubernetes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/backend/kubernetes.md",tags:[],version:"current",frontMatter:{title:"Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"Kerberos",permalink:"/docs/staff/backend/kerberos"},next:{title:"LDAP",permalink:"/docs/staff/backend/ldap"}},l={},u=[{value:"Kubernetes",id:"kubernetes",level:2},{value:"Kubernetes Cluster",id:"kubernetes-cluster",level:2},{value:"Masters",id:"masters",level:3},{value:"Why the odd number of masters?",id:"why-the-odd-number-of-masters",level:4},{value:"Workers",id:"workers",level:3},{value:"Pods",id:"pods",level:3},{value:"OCF Kubernetes Cluster Bootstrapping",id:"ocf-kubernetes-cluster-bootstrapping",level:2},{value:"Kubernetes PKI",id:"kubernetes-pki",level:3},{value:"OCF Kubernetes Configuration",id:"ocf-kubernetes-configuration",level:3},{value:"Getting traffic into the cluster",id:"getting-traffic-into-the-cluster",level:2},{value:"Why didn&#39;t we use MetalLB?",id:"why-didnt-we-use-metallb",level:3},{value:"Why don&#39;t we copy Marathon and specify one port per service?",id:"why-dont-we-copy-marathon-and-specify-one-port-per-service",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the OCF we have fully migrated all services from Mesos/Marathon to\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes"),". In this document we will explain the design of our\nKubernetes cluster while also touching briefly on relevant core concepts. This\npage is ",(0,a.kt)("em",{parentName:"p"},"not")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"HOWTO")," for deploying services or troubleshooting a bad\ncluster. Rather, it is meant to explain architectural considerations such that\ncurrent work can be built upon. Although, reading this document will help you\nboth deploy services in the OCF Kubernetes cluster and debug issues when they\narise."),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"Kubernetes is a container orchestration system open sourced by Google. Its main\npurpose is to schedule services to run on a cluster of computers while\nabstracting away the existence of the cluster from the services. The design of\nKubernetes is loosely based on Google's internal orchestration system Borg.\nKubernetes is now maintained by the ",(0,a.kt)("a",{parentName:"p",href:"https://cncf.io"},"Cloud Native Computing Foundation"),",\nwhich is a part of the Linux Foundation. Kubernetes can flexibly handle\nreplication, impose resource limits, and recover quickly from failures."),(0,a.kt)("h2",{id:"kubernetes-cluster"},"Kubernetes Cluster"),(0,a.kt)("p",null,'A Kubernetes cluster consists of "master" nodes and "worker" nodes. In short,\nmaster nodes share state to manage the cluster and schedule jobs to run on\nworkers. ',(0,a.kt)("a",{parentName:"p",href:"/docs/staff/backend/kubernetes#h3_why-the-odd-number-of-masters"},"It is considered best practice to run an odd number of masters"),", and currently our\ncluster has three masters."),(0,a.kt)("h3",{id:"masters"},"Masters"),(0,a.kt)("p",null,"Kubernetes masters share state via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd"},"etcd"),", a distributed key-value\nstore (KVS) implementing the ",(0,a.kt)("a",{parentName:"p",href:"https://raft.github.io/raft.pdf"},"Raft")," protocol. The three main goals of\nRaft are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Leader elections in case of failure."),(0,a.kt)("li",{parentName:"ol"},"Log replication across all masters."),(0,a.kt)("li",{parentName:"ol"},"Ensuring log integrity across all masters.")),(0,a.kt)("p",null,"One master is elected as a leader of the cluster. The leader has the ability to\ncommit writes to the KVS. ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," then reliably replicates this state across\nevery master, so that if the leader fails, another master can be elected and no\nstate will be lost in the process. Do note that the state stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," is\nscheduling state, service locations, and other cluster metadata; it does ",(0,a.kt)("em",{parentName:"p"},"not"),"\nkeep state for the services running on the cluster."),(0,a.kt)("h4",{id:"why-the-odd-number-of-masters"},"Why the odd number of masters?"),(0,a.kt)("p",null,"Consider a cluster of ",(0,a.kt)("em",{parentName:"p"},"N")," members. When masters form quorum to agree on cluster\nstate, quorum must have ",(0,a.kt)("em",{parentName:"p"},"at least")," \u230a",(0,a.kt)("em",{parentName:"p"},"N"),"/2\u230b+1 members. Every new odd number in a\ncluster with ",(0,a.kt)("em",{parentName:"p"},"M")," > 1 masters adds one more node of fault tolerance. Therefore,\nadding an extra node to an odd numbered cluster gives us nothing. If interested\nread more ",(0,a.kt)("a",{parentName:"p",href:"https://coreos.com/etcd/docs/latest/faq.html#what-is-failure-tolerance"},"here"),"."),(0,a.kt)("h3",{id:"workers"},"Workers"),(0,a.kt)("p",null,"Workers are the brawn in the Kubernetes cluster. While master nodes are\nconstantly sharing data, managing the control plane (routing inside the\nKubernetes cluster), and scheduling services, workers primarily run\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/"},"pods"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," is the service that executes pods as dictated by the\ncontrol plane, performs health checks, and recovers from pod failures should\nthey occur. Workers also run an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-proxy"),", which forwards\ncontrol plane traffic to the correct ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),"."),(0,a.kt)("h3",{id:"pods"},"Pods"),(0,a.kt)("p",null,"In the Kubernetes world, pods are the smallest computing unit. A pod is made up\nof one or more containers. The difference between a pod and a standalone\ncontainer is best illustrated by an example. Consider ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ocf/ocfweb/tree/master/services"},"ocfweb"),"; it is\ncomposed of several containers\u2014the web container, static container, and worker\ncontainer. In Kubernetes, together these three containers form one pod, and it\nis pods that can be scaled up or down. A failure in any of these containers\nindicates a failure in the entire pod. An astute reader might wonder: ",(0,a.kt)("em",{parentName:"p"},"if pods\ncan be broken down into containers, how can pods possibly be the smallest\nunit?")," Do note that if one wished to deploy a singleton container, it would\nstill need to be wrapped in the pod abstraction for Kubernetes to do anything\nwith it."),(0,a.kt)("p",null,"While pods are essential for understanding Kubernetes, when writing services we\ndon't actually deal in pods but one further abstraction,\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"deployments"),", which create pods for us."),(0,a.kt)("h2",{id:"ocf-kubernetes-cluster-bootstrapping"},"OCF Kubernetes Cluster Bootstrapping"),(0,a.kt)("p",null,"Since almost all OCF architecture is bootstapped using Puppet, it was necessary\nfor us to do the same with Kubernetes. We rely on the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppetlabs/puppetlabs-kubernetes"},"puppetlabs-kubernetes")," module to handle initial\nbootstrapping and bolt OCF specific configurations on top of it.\n",(0,a.kt)("inlineCode",{parentName:"p"},"puppetlabs-kubernetes")," performs two crucial tasks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installs ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kubelet"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-proxy"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-dns"),", initializes the\ncluster, and applies a networking backend."),(0,a.kt)("li",{parentName:"ol"},"Generates the required ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/certificates"},"PKI for Kubernetes and etcd"),".")),(0,a.kt)("p",null,"Do note that ",(0,a.kt)("inlineCode",{parentName:"p"},"puppetlabs-kubernetes")," is still very much a work in progress. If\nyou notice an issue in the module you are encouraged to write a patch and send\nit upstream."),(0,a.kt)("h3",{id:"kubernetes-pki"},"Kubernetes PKI"),(0,a.kt)("p",null,"All the private keys and certs for the PKI are in the puppet private share, in\n",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/puppet/shares/private/kubernetes"),". We won't go into detail of everything\ncontained there, but Kubernetes and ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," communication is authenticated using\nclient certificates. All the necessary items for workers are included in\n",(0,a.kt)("inlineCode",{parentName:"p"},"os/Debian.yaml"),", although adding a new master to the cluster requires a manual\nre-run of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppetlabs/puppetlabs-kubernetes#Setup"},"kubetool")," to generate new ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd server")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"etcd peer")," certs."),(0,a.kt)("h3",{id:"ocf-kubernetes-configuration"},"OCF Kubernetes Configuration"),(0,a.kt)("p",null,"Currently, the OCF has three Kubernetes masters: (1) ",(0,a.kt)("inlineCode",{parentName:"p"},"deadlock"),", (2) ",(0,a.kt)("inlineCode",{parentName:"p"},"coup"),",\nand (3) ",(0,a.kt)("inlineCode",{parentName:"p"},"autocrat"),". A Container Networking Interface (",(0,a.kt)("inlineCode",{parentName:"p"},"cni"),") is the last piece\nrequired for a working cluster. The ",(0,a.kt)("inlineCode",{parentName:"p"},"cni"),"'s purpose is to faciltate intra-pod\ncommunication. ",(0,a.kt)("inlineCode",{parentName:"p"},"puppetlabs-kubernetes")," supports two choices: ",(0,a.kt)("inlineCode",{parentName:"p"},"weave")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"flannel"),". Both solutions work out-the-box, and we've had success with\n",(0,a.kt)("inlineCode",{parentName:"p"},"flannel")," thus far so we've stuck with it."),(0,a.kt)("h2",{id:"getting-traffic-into-the-cluster"},"Getting traffic into the cluster"),(0,a.kt)("p",null,"One of the challenges with running Kubernetes on bare-metal is getting traffic\ninto the cluster. Kubernetes is commonly deployed on ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GCP"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"Azure"),",\nso Kubernetes has native support for ingress on these providers. Since we are\non bare-metal, we designed our own scheme for ingressing traffic."),(0,a.kt)("p",null,"The figure below demonstrates a request made for ",(0,a.kt)("inlineCode",{parentName:"p"},"templates.ocf.berkeley.edu"),".\nFor the purpose of simplicity, we assume ",(0,a.kt)("inlineCode",{parentName:"p"},"deadlock")," is the current ",(0,a.kt)("inlineCode",{parentName:"p"},"keepalived"),"\nmaster, and that ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," will send this request to ",(0,a.kt)("inlineCode",{parentName:"p"},"Worker1"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"                                    ----------------------------------------------------\n                                    |                 Kubernetes Cluster               |\n                nginx               |                                                  |\n             ----------             |                    Ingress          Ocfweb Pod   |\n             |autocrat|             | Host: Templates   ---------         ---------    |\n             ----------             |      ---------\x3e   |Worker1| -       |Worker1|    |\n                                    |     /             ---------  \\      ---------    |\n                                    |    /                          |                  |\n                nginx               |   /                Ingress    |   Templates Pod  |\n         -------------------  \u2718 SSL /  /                ---------   |     ---------    |\nREQ --\x3e  |    deadlock:    |   ---\x3e   -                 |Worker2|   ---\x3e  |Worker2|    |\n         |keepalived master|        \\                   ---------         ---------    |\n         -------------------        |                                                  |\n                                    |                                                  |\n                nginx               |                    Ingress         Grafana Pod   |\n             ----------             |                   ---------         ---------    |\n             |  coup  |             |                   |Worker3|         |Worker3|    |\n             ----------             |                   ---------         ---------    |\n                                    ----------------------------------------------------\n")),(0,a.kt)("p",null,"All three Kubernetes masters are running an instance of ",(0,a.kt)("a",{parentName:"p",href:"https://nginx.org/"},"Nginx"),".\nFurthermore, the masters are all running ",(0,a.kt)("inlineCode",{parentName:"p"},"keepalived"),". The traffic for any\nKubernetes HTTP service will go through the current ",(0,a.kt)("inlineCode",{parentName:"p"},"keepalived")," master, which\nholds the virtual IP for all Kubernetes services. The ",(0,a.kt)("inlineCode",{parentName:"p"},"keepalived")," master is\nrandomly chosen but will move hosts in the case of failure. ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," will\nterminate ssl and pass the request on to a worker running ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx"},"Ingress\nNginx"),". Right now ingress is running as a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort"),"\nservice on all workers (Note: we can easily change this to be a subset of\nworkers if our cluster scales such that this is no longer feasible). The\ningress worker will inspect the ",(0,a.kt)("inlineCode",{parentName:"p"},"Host")," header and forward the request on to the\nappropriate pod where the request is finally processed. ",(0,a.kt)("em",{parentName:"p"},"Do note that the\ntarget pod is not necessarily on the same worker that routed the traffic"),"."),(0,a.kt)("h3",{id:"why-didnt-we-use-metallb"},"Why didn't we use MetalLB?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MetalLB")," was created so a bare-metal Kubernetes cluster could use ",(0,a.kt)("inlineCode",{parentName:"p"},"Type: LoadBalancer")," in Service definitions. The problem is, in ",(0,a.kt)("inlineCode",{parentName:"p"},"L2")," mode, it takes a\npool of IPs and puts your service on a random IP in that pool. How one makes\nDNS work in this configuration is completely unspecified. We would need to\ndynamically update our DNS, which sounds like a myriad of outages waiting to\nhappen. ",(0,a.kt)("inlineCode",{parentName:"p"},"L3")," mode would require the OCF dedicating a router to Kubernetes."),(0,a.kt)("h3",{id:"why-dont-we-copy-marathon-and-specify-one-port-per-service"},"Why don't we copy Marathon and specify one port per service?"),(0,a.kt)("p",null,"In our previous Marathon configuration, we gave each service a port on the load\nbalancer and traffic coming into that port is routed accordingly. First, in\nKubernetes we would emulate this behavior using ",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort")," services, and all\nKubernetes documentation discourages this. Second, it's ugly. Every time we add\na new service we need to modify the load balancer configuration in Puppet. With\nour Kubernetes configuration we can add unlimited HTTP services without\ntouching Puppet."),(0,a.kt)("p",null,"But wait! The Kubernetes documentation says not to use ",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort")," services in\nproduction, and you just said that above too! True, but we only run ",(0,a.kt)("em",{parentName:"p"},"one"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort")," service, ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress-nginx"),", to keep us from needing other ",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort"),"\nservices. SoundCloud, a music streaming company that runs massive bare-metal\nKubernetes clusters, also has an interesting blog post about ",(0,a.kt)("a",{parentName:"p",href:"https://developers.soundcloud.com/blog/how-soundcloud-uses-haproxy-with-kubernetes-for-user-facing-traffic"},"running NodePort\nin production"),"."))}d.isMDXComponent=!0}}]);