import{S,i as q,s as x,e as m,r as _,a as k,b as d,g,v,d as l,f as w,l as b,k as h,w as $,n as E,q as y}from"../chunks/index-84bf64d2.js";import{s as C}from"../chunks/singletons-2360b086.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function j(s){var f;let t,r=s[0].status+"",o,n,i,p=((f=s[0].error)==null?void 0:f.message)+"",u;return{c(){t=m("h1"),o=_(r),n=k(),i=m("p"),u=_(p)},l(e){t=d(e,"H1",{});var a=g(t);o=v(a,r),a.forEach(l),n=w(e),i=d(e,"P",{});var c=g(i);u=v(c,p),c.forEach(l)},m(e,a){b(e,t,a),h(t,o),b(e,n,a),b(e,i,a),h(i,u)},p(e,[a]){var c;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&p!==(p=((c=e[0].error)==null?void 0:c.message)+"")&&$(u,p)},i:E,o:E,d(e){e&&l(t),e&&l(n),e&&l(i)}}}function z(s,t,r){let o;return y(s,P,n=>r(0,o=n)),[o]}let D=class extends S{constructor(t){super(),q(this,t,z,j,x,{})}};export{D as default};
