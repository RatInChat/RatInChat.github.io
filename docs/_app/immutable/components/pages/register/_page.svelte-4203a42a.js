import{S as D,i as H,s as S,k as h,q as V,a as y,l as m,m as I,r as j,h as b,c as P,n as s,b as x,F as n,H as _,I as E,A as k,J as A}from"../../../chunks/index-5c111bca.js";import{x as B}from"../../../chunks/pocketbase.es-f1ca8109.js";function F(c){let o,e,d,t,w,a,g,r,v,i,T,f,U,N,R;return{c(){o=h("div"),e=h("div"),d=h("h1"),t=V("Register"),w=y(),a=h("input"),g=y(),r=h("input"),v=y(),i=h("input"),T=y(),f=h("button"),U=V("Register"),this.h()},l(l){o=m(l,"DIV",{class:!0});var p=I(o);e=m(p,"DIV",{class:!0});var u=I(e);d=m(u,"H1",{class:!0});var q=I(d);t=j(q,"Register"),q.forEach(b),w=P(u),a=m(u,"INPUT",{type:!0,class:!0,placeholder:!0}),g=P(u),r=m(u,"INPUT",{type:!0,class:!0,placeholder:!0}),v=P(u),i=m(u,"INPUT",{type:!0,class:!0,placeholder:!0}),T=P(u),f=m(u,"BUTTON",{class:!0});var C=I(f);U=j(C,"Register"),C.forEach(b),u.forEach(b),p.forEach(b),this.h()},h(){s(d,"class","text-3xl font-bold underline"),s(a,"type","text"),s(a,"class","w-1/2 h-10 border-2 border-gray-300 rounded-lg"),s(a,"placeholder","Email"),s(r,"type","password"),s(r,"class","w-1/2 h-10 border-2 border-gray-300 rounded-lg"),s(r,"placeholder","Password"),s(i,"type","password"),s(i,"class","w-1/2 h-10 border-2 border-gray-300 rounded-lg"),s(i,"placeholder","Confirm Password"),s(f,"class","w-1/2 h-10 bg-blue-500 rounded-lg"),s(e,"class","flex flex-col items-center justify-center w-1/2 h-1/2 bg-gray-200 rounded-lg"),s(o,"class","flex flex-col items-center justify-center h-screen")},m(l,p){x(l,o,p),n(o,e),n(e,d),n(d,t),n(e,w),n(e,a),_(a,c[0].email),n(e,g),n(e,r),_(r,c[0].password),n(e,v),n(e,i),_(i,c[0].confirm),n(e,T),n(e,f),n(f,U),N||(R=[E(a,"input",c[2]),E(r,"input",c[3]),E(i,"input",c[4]),E(f,"click",c[1])],N=!0)},p(l,[p]){p&1&&a.value!==l[0].email&&_(a,l[0].email),p&1&&r.value!==l[0].password&&_(r,l[0].password),p&1&&i.value!==l[0].confirm&&_(i,l[0].confirm)},i:k,o:k,d(l){l&&b(o),N=!1,A(R)}}}function J(c,o,e){const d=new B("http://localhost:8090");let t={password:"",email:"",confirm:""};async function w(){await d.users.create({email:t.email,password:t.password,passwordConfirm:t.confirm})&&a()}async function a(){await d.users.requestVerification(t.email)}function g(){t.email=this.value,e(0,t)}function r(){t.password=this.value,e(0,t)}function v(){t.confirm=this.value,e(0,t)}return[t,w,g,r,v]}class G extends D{constructor(o){super(),H(this,o,J,F,S,{})}}export{G as default};
