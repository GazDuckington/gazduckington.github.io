function d(){}function K(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function k(){return Object.create(null)}function b(t){t.forEach(q)}function S(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function z(t,...e){if(t==null)return d;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function mt(t){let e;return z(t,n=>e=n)(),e}function pt(t,e,n){t.$$.on_destroy.push(z(e,n))}function yt(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?K(n.ctx.slice(),t[1](i(e))):n.ctx}function gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function bt(t,e,n,i,r,u){if(r){const s=O(e,n,i,u);t.p(s,r)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function $t(t,e,n){return t.set(n),e}function Et(t){return t&&S(t.destroy)?t.destroy:d}let v=!1;function V(){v=!0}function X(){v=!1}function Y(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const a=e[c];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=c?r+1:Y(1,r,x=>e[n[x]].claim_order,c))-1;i[l]=n[a]+1;const f=a+1;n[f]=l,r=Math.max(f,r)}const u=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const a=c<u.length?u[c]:null;t.insertBefore(s[l],a)}}function tt(t,e){if(v){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function et(t,e,n){t.insertBefore(e,n||null)}function nt(t,e,n){v&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function vt(){return C(" ")}function Nt(){return C("")}function Tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t){return function(e){return e.preventDefault(),t.call(this,e)}}function St(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,e,n,i,r=!1){R(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function st(t,e,n,i){return F(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ct(t,e,n){return st(t,e,n,G)}function ct(t,e){return F(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function Ht(t){return ct(t," ")}function D(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function Mt(t,e){const n=D(t,"HTML_TAG_START",0),i=D(t,"HTML_TAG_END",n);if(n===i)return new L(void 0,e);R(t);const r=t.splice(n,i-n+1);w(r[0]),w(r[r.length-1]);const u=r.slice(1,r.length-1);for(const s of u)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(u,e)}function jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function kt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Dt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}class ot{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=it(n.nodeName):this.e=G(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)et(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class L extends ot{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)nt(this.t,this.n[n],e)}}function Lt(t,e){return new t(e)}let g;function y(t){g=t}function H(){if(!g)throw new Error("Function called outside component initialization");return g}function Bt(t){H().$$.on_mount.push(t)}function Pt(t){H().$$.after_update.push(t)}function qt(){const t=H();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=lt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}function zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const p=[],B=[],$=[],P=[],W=Promise.resolve();let T=!1;function I(){T||(T=!0,W.then(J))}function Ot(){return I(),W}function A(t){$.push(t)}const N=new Set;let h=0;function J(){if(h!==0)return;const t=g;do{try{for(;h<p.length;){const e=p[h];h++,y(e),ut(e.$$)}}catch(e){throw p.length=0,h=0,e}for(y(null),p.length=0,h=0;B.length;)B.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];N.has(n)||(N.add(n),n())}$.length=0}while(p.length);for(;P.length;)P.pop()();T=!1,N.clear(),y(t)}function ut(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const E=new Set;let _;function Gt(){_={r:0,c:[],p:_}}function Rt(){_.r||b(_.c),_=_.p}function ft(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Wt(t){t&&t.c()}function It(t,e){t&&t.l(e)}function at(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||A(()=>{const s=t.$$.on_mount.map(q).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...s):b(s),t.$$.on_mount=[]}),u.forEach(A)}function dt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(p.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Jt(t,e,n,i,r,u,s,o=[-1]){const l=g;y(t);const c=t.$$={fragment:null,ctx:[],props:u,update:d,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:k(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(f,x,...M)=>{const j=M.length?M[0]:x;return c.ctx&&r(c.ctx[f],c.ctx[f]=j)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](j),a&&_t(t,f)),x}):[],c.update(),a=!0,b(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){V();const f=rt(e.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&ft(t.$$.fragment),at(t,e.target,e.anchor,e.customElement),X(),J()}y(l)}class Kt{$destroy(){dt(this,1),this.$destroy=d}$on(e,n){if(!S(n))return d;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!U(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const m=[];function Qt(t,e){return{subscribe:ht(t,e).subscribe}}function ht(t,e=d){let n;const i=new Set;function r(o){if(Q(t,o)&&(t=o,n)){const l=!m.length;for(const c of i)c[1](),m.push(c,t);if(l){for(let c=0;c<m.length;c+=2)m[c][0](m[c+1]);m.length=0}}}function u(o){r(o(t))}function s(o,l=d){const c=[o,l];return i.add(c),i.size===1&&(n=e(r)||d),o(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:s}}export{Ot as A,ht as B,mt as C,d as D,Et as E,S as F,b as G,yt as H,Dt as I,tt as J,bt as K,xt as L,gt as M,pt as N,Qt as O,Tt as P,At as Q,qt as R,Kt as S,B as T,$t as U,wt as V,L as W,Mt as X,zt as Y,vt as a,nt as b,Ht as c,Rt as d,Nt as e,ft as f,Gt as g,w as h,Jt as i,Pt as j,G as k,Ct as l,rt as m,St as n,Bt as o,kt as p,C as q,ct as r,Q as s,Ft as t,jt as u,Lt as v,Wt as w,It as x,at as y,dt as z};