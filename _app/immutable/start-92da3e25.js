import{S as He,i as Me,s as Xe,a as Ye,e as V,c as Qe,b as z,g as le,t as B,d as ce,f as J,h as F,j as Ze,o as ye,k as et,l as tt,m as nt,n as ge,p as C,q as at,r as rt,u as st,v as W,w as Re,x as H,y as M,z as xe}from"./chunks/index-f5d7fa2f.js";import{g as Ve,f as Be,s as K,a as be,b as ot,i as it}from"./chunks/singletons-275813a1.js";const lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ct=function(n,e){return new URL(n,e).href},Je={},oe=function(e,t,c){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=ct(o,c),o in Je)return;Je[o]=!0;const d=o.endsWith(".css"),r=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":lt,d||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),d)return new Promise((_,m)=>{f.addEventListener("load",_),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};function ft(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function ut(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const dt=["href","pathname","search","searchParams","toString","toJSON"];function pt(n,e){const t=new URL(n);for(const c of dt){let o=t[c];Object.defineProperty(t,c,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,o,d)=>d(n,o),ht(t),t}function ht(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function mt(n){let e=5381,t=n.length;if(typeof n=="string")for(;t;)e=e*33^n.charCodeAt(--t);else for(;t;)e=e*33^n[--t];return(e>>>0).toString(36)}const Se=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ie.delete(c)}return Se(n,e)};const ie=new Map;function _t(n,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${mt(t.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:r,...f}=JSON.parse(d.textContent),_=d.getAttribute("data-ttl");return _&&ie.set(e,{body:r,init:f,ttl:1e3*Number(_)}),Promise.resolve(new Response(r,f))}return Se(n,t)}function gt(n,e){const t=ie.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ie.delete(n)}return Se(n,e)}const wt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function yt(n){const e=[],t=[];let c=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(bt).map((d,r,f)=>{const _=decodeURIComponent(d),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const y=r===f.length-1;return _&&"/"+_.split(/\[(.+?)\]/).map((L,R)=>{if(R%2){const N=wt.exec(L);if(!N)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,q,T]=N;return e.push(q),t.push(T),D?"(.*?)":"([^/]+?)"}return y&&L.includes(".")&&(c=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function bt(n){return!/^\([^)]+\)$/.test(n)}function vt(n,e,t,c){const o={};for(let d=0;d<e.length;d+=1){const r=e[d],f=t[d],_=n[d+1]||"";if(f){const m=c[f];if(!m)throw new Error(`Missing "${f}" param matcher`);if(!m(_))return}o[r]=_}return o}function kt(n,e,t,c){const o=new Set(e);return Object.entries(t).map(([f,[_,m,y]])=>{const{pattern:L,names:R,types:N}=yt(f),D={id:f,exec:q=>{const T=L.exec(q);if(T)return vt(T,R,N,c)},errors:[1,...y||[]].map(q=>n[q]),layouts:[0,...m||[]].map(r),leaf:d(_)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function d(f){const _=f<0;return _&&(f=~f),[_,n[f]]}function r(f){return f===void 0?f:[o.has(f),n[f]]}}function Et(n){let e,t,c;var o=n[0][0];function d(r){return{props:{data:r[2],form:r[1]}}}return o&&(e=new o(d(n))),{c(){e&&W(e.$$.fragment),t=V()},l(r){e&&Re(e.$$.fragment,r),t=V()},m(r,f){e&&H(e,r,f),z(r,t,f),c=!0},p(r,f){const _={};if(f&4&&(_.data=r[2]),f&2&&(_.form=r[1]),o!==(o=r[0][0])){if(e){le();const m=e;B(m.$$.fragment,1,0,()=>{M(m,1)}),ce()}o?(e=new o(d(r)),W(e.$$.fragment),J(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(r){c||(e&&J(e.$$.fragment,r),c=!0)},o(r){e&&B(e.$$.fragment,r),c=!1},d(r){r&&F(t),e&&M(e,r)}}}function Rt(n){let e,t,c;var o=n[0][0];function d(r){return{props:{data:r[2],$$slots:{default:[St]},$$scope:{ctx:r}}}}return o&&(e=new o(d(n))),{c(){e&&W(e.$$.fragment),t=V()},l(r){e&&Re(e.$$.fragment,r),t=V()},m(r,f){e&&H(e,r,f),z(r,t,f),c=!0},p(r,f){const _={};if(f&4&&(_.data=r[2]),f&523&&(_.$$scope={dirty:f,ctx:r}),o!==(o=r[0][0])){if(e){le();const m=e;B(m.$$.fragment,1,0,()=>{M(m,1)}),ce()}o?(e=new o(d(r)),W(e.$$.fragment),J(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(r){c||(e&&J(e.$$.fragment,r),c=!0)},o(r){e&&B(e.$$.fragment,r),c=!1},d(r){r&&F(t),e&&M(e,r)}}}function St(n){let e,t,c;var o=n[0][1];function d(r){return{props:{data:r[3],form:r[1]}}}return o&&(e=new o(d(n))),{c(){e&&W(e.$$.fragment),t=V()},l(r){e&&Re(e.$$.fragment,r),t=V()},m(r,f){e&&H(e,r,f),z(r,t,f),c=!0},p(r,f){const _={};if(f&8&&(_.data=r[3]),f&2&&(_.form=r[1]),o!==(o=r[0][1])){if(e){le();const m=e;B(m.$$.fragment,1,0,()=>{M(m,1)}),ce()}o?(e=new o(d(r)),W(e.$$.fragment),J(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(r){c||(e&&J(e.$$.fragment,r),c=!0)},o(r){e&&B(e.$$.fragment,r),c=!1},d(r){r&&F(t),e&&M(e,r)}}}function Fe(n){let e,t=n[5]&&Ke(n);return{c(){e=et("div"),t&&t.c(),this.h()},l(c){e=tt(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=nt(e);t&&t.l(o),o.forEach(F),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(c,o){z(c,e,o),t&&t.m(e,null)},p(c,o){c[5]?t?t.p(c,o):(t=Ke(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&F(e),t&&t.d()}}}function Ke(n){let e;return{c(){e=at(n[6])},l(t){e=rt(t,n[6])},m(t,c){z(t,e,c)},p(t,c){c&64&&st(e,t[6])},d(t){t&&F(e)}}}function $t(n){let e,t,c,o,d;const r=[Rt,Et],f=[];function _(y,L){return y[0][1]?0:1}e=_(n),t=f[e]=r[e](n);let m=n[4]&&Fe(n);return{c(){t.c(),c=Ye(),m&&m.c(),o=V()},l(y){t.l(y),c=Qe(y),m&&m.l(y),o=V()},m(y,L){f[e].m(y,L),z(y,c,L),m&&m.m(y,L),z(y,o,L),d=!0},p(y,[L]){let R=e;e=_(y),e===R?f[e].p(y,L):(le(),B(f[R],1,1,()=>{f[R]=null}),ce(),t=f[e],t?t.p(y,L):(t=f[e]=r[e](y),t.c()),J(t,1),t.m(c.parentNode,c)),y[4]?m?m.p(y,L):(m=Fe(y),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},i(y){d||(J(t),d=!0)},o(y){B(t),d=!1},d(y){f[e].d(y),y&&F(c),m&&m.d(y),y&&F(o)}}}function Lt(n,e,t){let{stores:c}=e,{page:o}=e,{components:d}=e,{form:r}=e,{data_0:f=null}=e,{data_1:_=null}=e;Ze(c.page.notify);let m=!1,y=!1,L=null;return ye(()=>{const R=c.page.subscribe(()=>{m&&(t(5,y=!0),t(6,L=document.title||"untitled page"))});return t(4,m=!0),R}),n.$$set=R=>{"stores"in R&&t(7,c=R.stores),"page"in R&&t(8,o=R.page),"components"in R&&t(0,d=R.components),"form"in R&&t(1,r=R.form),"data_0"in R&&t(2,f=R.data_0),"data_1"in R&&t(3,_=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&c.page.set(o)},[d,r,f,_,m,y,L,c,o]}class Pt extends He{constructor(e){super(),Me(this,e,Lt,$t,Xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ot={},fe=[()=>oe(()=>import("./chunks/0-ff175ee6.js"),["chunks/0-ff175ee6.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-2fff87c5.js","assets/_layout-12648353.css","chunks/index-f5d7fa2f.js"],import.meta.url),()=>oe(()=>import("./chunks/1-f220bfa2.js"),["chunks/1-f220bfa2.js","components/error.svelte-021f75e3.js","chunks/index-f5d7fa2f.js","chunks/singletons-275813a1.js"],import.meta.url),()=>oe(()=>import("./chunks/2-f205a9bd.js"),["chunks/2-f205a9bd.js","components/pages/_page.svelte-8bf65cbd.js","assets/_page-97256e2d.css","chunks/index-f5d7fa2f.js"],import.meta.url)],Ut=[],It={"":[2]},jt={handleError:({error:n})=>{console.error(n)}};class ve{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(e,t){this.status=e,this.location=t}}const At="/__data.js";async function Nt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,o])=>[c,await o])));return n}const We="sveltekit:scroll",x="sveltekit:index",ae=kt(fe,Ut,It,Ot),ke=fe[0],Ee=fe[1];ke();Ee();let Z={};try{Z=JSON.parse(sessionStorage[We])}catch{}function we(n){Z[n]=be()}function Tt({target:n,base:e,trailing_slash:t}){var De;const c=[];let o=null;const d={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,url:null},f=!1,_=!1,m=!0,y=!1,L=!1,R,N=(De=history.state)==null?void 0:De[x];N||(N=Date.now(),history.replaceState({...history.state,[x]:N},"",location.href));const D=Z[N];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let q=!1,T,$e,ee;async function Le(){ee=ee||Promise.resolve(),await ee,ee=null;const a=new URL(location.href),l=he(a,!0);o=null,await Oe(l,a,[])}async function ue(a,{noscroll:l=!1,replaceState:u=!1,keepfocus:s=!1,state:i={}},p,h){return typeof a=="string"&&(a=new URL(a,Ve(document))),me({url:a,scroll:l?be():null,keepfocus:s,redirect_chain:p,details:{state:i,replaceState:u},nav_token:h,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const l=he(a,!1);if(!l)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o={id:l.id,promise:je(l)},o.promise}async function Oe(a,l,u,s,i={},p){var k,v;$e=i;let h=a&&await je(a);if(h||(h=await Te(l,null,Q(new Error(`Not found: ${l.pathname}`),{url:l,params:{},routeId:null}),404)),l=(a==null?void 0:a.url)||l,$e!==i)return!1;if(h.type==="redirect")if(u.length>10||u.includes(l.pathname))h=await te({status:500,error:Q(new Error("Redirect loop"),{url:l,params:{},routeId:null}),url:l,routeId:null});else return ue(new URL(h.location,l).href,{},[...u,l.pathname],i),!1;else((v=(k=h.props)==null?void 0:k.page)==null?void 0:v.status)>=400&&await K.updated.check()&&await ne(l);if(c.length=0,L=!1,y=!0,s&&s.details){const{details:w}=s,b=w.replaceState?0:1;w.state[x]=N+=b,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(o=null,_){r=h.state,h.props.page&&(h.props.page.url=l);const w=se();R.$set(h.props),w()}else Ue(h);if(s){const{scroll:w,keepfocus:b}=s;if(!b){const S=document.body,P=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var O;(O=getSelection())==null||O.removeAllRanges()}),P!==null?S.setAttribute("tabindex",P):S.removeAttribute("tabindex")}if(await xe(),m){const S=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await xe();m=!0,h.props.page&&(T=h.props.page),p&&p(),y=!1}function Ue(a){var i,p;r=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),T=a.props.page;const u=se();R=new Pt({target:n,props:{...a.props,stores:K},hydrate:!0}),u();const s={from:null,to:re("to",{params:r.params,routeId:(p=(i=r.route)==null?void 0:i.id)!=null?p:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(h=>h(s)),_=!0}async function X({url:a,params:l,branch:u,status:s,error:i,route:p,form:h}){var P;const k=u.filter(Boolean),v={type:"loaded",state:{url:a,params:l,branch:u,error:i,route:p},props:{components:k.map(O=>O.node.component)}};h!==void 0&&(v.props.form=h);let w={},b=!T;for(let O=0;O<k.length;O+=1){const j=k[O];w={...w,...j.data},(b||!r.branch.some(A=>A===j))&&(v.props[`data_${O}`]=w,b=b||Object.keys((P=j.data)!=null?P:{}).length>0)}if(b||(b=Object.keys(T.data).length!==Object.keys(w).length),!r.url||a.href!==r.url.href||r.error!==i||b){v.props.page={error:i,params:l,routeId:p&&p.id,status:s,url:a,data:b?w:T.data};const O=(j,A)=>{Object.defineProperty(v.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${A}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return v}async function de({loader:a,parent:l,url:u,params:s,routeId:i,server_data_node:p}){var w,b,S,P,O;let h=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},v=await a();if((w=v.shared)!=null&&w.load){let j=function(...$){for(const g of $){const{href:E}=new URL(g,u);k.dependencies.add(E)}};const A={routeId:i,params:new Proxy(s,{get:($,g)=>(k.params.add(g),$[g])}),data:(b=p==null?void 0:p.data)!=null?b:null,url:pt(u,()=>{k.url=!0}),async fetch($,g){let E;$ instanceof Request?(E=$.url,g={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...g}):E=$;const I=new URL(E,u).href;return j(I),_?gt(I,g):_t(E,I,g)},setHeaders:()=>{},depends:j,parent(){return k.parent=!0,l()}};Object.defineProperties(A,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(S=await v.shared.load.call(null,A))!=null?S:null,h=h?await Nt(h):null}return{node:v,loader:a,server:p,shared:(P=v.shared)!=null&&P.load?{type:"data",data:h,uses:k}:null,data:(O=h!=null?h:p==null?void 0:p.data)!=null?O:null}}function Ie(a,l,u,s){if(L)return!0;if(!u)return!1;if(u.parent&&l||u.url&&a)return!0;for(const i of u.params)if(s[i]!==r.params[i])return!0;for(const i of u.dependencies)if(c.some(p=>p(new URL(i))))return!0;return!1}function pe(a,l){var u,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((u=a.uses.dependencies)!=null?u:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function je({id:a,invalidating:l,url:u,params:s,route:i}){var $;if((o==null?void 0:o.id)===a)return o.promise;const{errors:p,layouts:h,leaf:k}=i,v=[...h,k];p.forEach(g=>g==null?void 0:g().catch(()=>{})),v.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let w=null;const b=r.url?a!==r.url.pathname+r.url.search:!1,S=v.reduce((g,E,I)=>{var Y;const U=r.branch[I],G=!!(E!=null&&E[0])&&((U==null?void 0:U.loader)!==E[1]||Ie(b,g.some(Boolean),(Y=U.server)==null?void 0:Y.uses,s));return g.push(G),g},[]);if(S.some(Boolean)){try{w=await Ge(u,S)}catch(g){return te({status:500,error:Q(g,{url:u,params:s,routeId:i.id}),url:u,routeId:i.id})}if(w.type==="redirect")return w}const P=w==null?void 0:w.nodes;let O=!1;const j=v.map(async(g,E)=>{var Y;if(!g)return;const I=r.branch[E],U=P==null?void 0:P[E];if((!U||U.type==="skip")&&g[1]===(I==null?void 0:I.loader)&&!Ie(b,O,(Y=I.shared)==null?void 0:Y.uses,s))return I;if(O=!0,(U==null?void 0:U.type)==="error")throw U;return de({loader:g[1],url:u,params:s,routeId:i.id,parent:async()=>{var Ce;const qe={};for(let _e=0;_e<E;_e+=1)Object.assign(qe,(Ce=await j[_e])==null?void 0:Ce.data);return qe},server_data_node:pe(U===void 0&&g[0]?{type:"skip"}:U!=null?U:null,I==null?void 0:I.server)})});for(const g of j)g.catch(()=>{});const A=[];for(let g=0;g<v.length;g+=1)if(v[g])try{A.push(await j[g])}catch(E){if(E instanceof ze)return{type:"redirect",location:E.location};let I=500,U;P!=null&&P.includes(E)?(I=($=E.status)!=null?$:I,U=E.error):E instanceof ve?(I=E.status,U=E.body):U=Q(E,{params:s,url:u,routeId:i.id});const G=await Ae(g,A,p);return G?await X({url:u,params:s,branch:A.slice(0,G.idx).concat(G.node),status:I,error:U,route:i}):await Te(u,i.id,U,I)}else A.push(void 0);return await X({url:u,params:s,branch:A,status:200,error:null,route:i,form:l?void 0:null})}async function Ae(a,l,u){for(;a--;)if(u[a]){let s=a;for(;!l[s];)s-=1;try{return{idx:s+1,node:{node:await u[a](),loader:u[a],data:{},server:null,shared:null}}}catch{continue}}}async function te({status:a,error:l,url:u,routeId:s}){var w;const i={},p=await ke();let h=null;if(p.server)try{const b=await Ge(u,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(w=b.nodes[0])!=null?w:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||f)&&await ne(u)}const k=await de({loader:ke,url:u,params:i,routeId:s,parent:()=>Promise.resolve({}),server_data_node:pe(h)}),v={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await X({url:u,params:i,branch:[k,v],status:a,error:l,route:null})}function he(a,l){if(Ne(a))return;const u=decodeURI(a.pathname.slice(e.length)||"/");for(const s of ae){const i=s.exec(u);if(i){const p=new URL(a.origin+ft(a.pathname,t)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:l,route:s,params:ut(i),url:p}}}}function Ne(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function me({url:a,scroll:l,keepfocus:u,redirect_chain:s,details:i,type:p,delta:h,nav_token:k,accepted:v,blocked:w}){var j,A,$,g;let b=!1;const S=he(a,!1),P={from:re("from",{params:r.params,routeId:(A=(j=r.route)==null?void 0:j.id)!=null?A:null,url:r.url}),to:re("to",{params:($=S==null?void 0:S.params)!=null?$:null,routeId:(g=S==null?void 0:S.route.id)!=null?g:null,url:a}),type:p};h!==void 0&&(P.delta=h);const O={...P,cancel:()=>{b=!0}};if(d.before_navigate.forEach(E=>E(O)),b){w();return}we(N),v(),_&&K.navigating.set(P),await Oe(S,a,s,{scroll:l,keepfocus:u,details:i},k,()=>{d.after_navigate.forEach(E=>E(P)),K.navigating.set(null)})}async function Te(a,l,u,s){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await te({status:s,error:u,url:a,routeId:l}):await ne(a)}function ne(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ye(()=>(d.after_navigate.push(a),()=>{const l=d.after_navigate.indexOf(a);d.after_navigate.splice(l,1)}))},before_navigate:a=>{ye(()=>(d.before_navigate.push(a),()=>{const l=d.before_navigate.indexOf(a);d.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(y||!_)&&(m=!1)},goto:(a,l={})=>ue(a,l,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")c.push(a);else{const{href:l}=new URL(a,location.href);c.push(u=>u.href===l)}return Le()},invalidateAll:()=>(L=!0,Le()),prefetch:async a=>{const l=new URL(a,Ve(document));await Pe(l)},prefetch_routes:async a=>{const u=(a?ae.filter(s=>a.some(i=>s.exec(i))):ae).map(s=>Promise.all([...s.layouts,s.leaf].map(i=>i==null?void 0:i[1]())));await Promise.all(u)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:u,route:s}=r;if(!s)return;const i=await Ae(r.branch.length,u,s.errors);if(i){const p=await X({url:l,params:r.params,branch:u.slice(0,i.idx).concat(i.node),status:500,error:a.error,route:s});r=p.state;const h=se();R.$set(p.props),h()}}else if(a.type==="redirect")ue(a.location,{},[]);else{const l={form:a.data};a.status!==T.status&&(T={...T,status:a.status},l.page=T);const u=se();R.$set(l),u()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,k;let i=!1;const p={from:re("from",{params:r.params,routeId:(k=(h=r.route)==null?void 0:h.id)!=null?k:null,url:r.url}),to:null,type:"unload",cancel:()=>i=!0};d.before_navigate.forEach(v=>v(p)),i?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){we(N);try{sessionStorage[We]=JSON.stringify(Z)}catch{}}});const a=s=>{const{url:i,options:p}=Be(s);if(i&&p.prefetch){if(Ne(i))return;Pe(i)}};let l;const u=s=>{clearTimeout(l),l=setTimeout(()=>{var i;(i=s.target)==null||i.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:i,url:p,options:h}=Be(s);if(!i||!p)return;const k=i instanceof SVGAElement;if(!k&&!(p.protocol==="https:"||p.protocol==="http:"))return;const v=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||v.includes("external")||h.reload||(k?i.target.baseVal:i.target))return;const[w,b]=p.href.split("#");if(b!==void 0&&w===location.href.split("#")[0]){q=!0,we(N),r.url=p,K.page.set({...T,url:p}),K.page.notify();return}me({url:p,scroll:h.noscroll?be():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[x]===N)return;const i=s.state[x]-N;me({url:new URL(location.href),scroll:Z[s.state[x]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=s.state[x]},blocked:()=>{history.go(-i)},type:"popstate",delta:i})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[x]:++N},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:u,params:s,routeId:i,data:p,form:h})=>{var w;f=!0;const k=new URL(location.href);let v;try{const b=u.map(async(S,P)=>{const O=p[P];return de({loader:fe[S],url:k,params:s,routeId:i,parent:async()=>{const j={};for(let A=0;A<P;A+=1)Object.assign(j,(await b[A]).data);return j},server_data_node:pe(O)})});v=await X({url:k,params:s,branch:await Promise.all(b),status:a,error:l,form:h,route:(w=ae.find(S=>S.id===i))!=null?w:null})}catch(b){if(b instanceof ze){await ne(new URL(b.location,location.href));return}v=await te({status:b instanceof ve?b.status:500,error:Q(b,{url:k,params:s,routeId:i}),url:k,routeId:i})}Ue(v)}}}let Dt=1;async function Ge(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+At,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(Dt++)),await oe(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function Q(n,e){var t;return n instanceof ve?n.body:(t=jt.handleError({error:n,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const qt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(n,e){for(const t of qt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return e}function se(){return()=>{}}async function Vt({env:n,hydrate:e,paths:t,target:c,trailing_slash:o}){ot(t);const d=Tt({target:c,base:t.base,trailing_slash:o});it({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Vt as start};
