import{S as y,i as k,s as x,e as p,y as K,o as G,a as v,b as _,z as N,f,q as j,g as d,h as b,r as m,D as B,E,F as D,n as g,G as F,x as A,H as J,I as R,J as W,K as q,L as w,M as Q,N as X,O as Y,A as Z,c as I,d as T,m as $,t as z,j as L,k as S}from"./index-fec5a1b4.js";import{h as C,d as ee,i as M}from"./stores-704f95d3.js";function te(i){function n(e){e.key==="Enter"?i.dispatchEvent(new CustomEvent("enterkey")):e.key==="ArrowUp"?i.dispatchEvent(new CustomEvent("arrowup")):e.key==="ArrowDown"&&i.dispatchEvent(new CustomEvent("arrowdown"))}return document.addEventListener("keydown",n,!0),{destroy(){document.removeEventListener("keydown",n,!0)}}}function ne(i){let n,e,t,r,s,a,o;return{c(){n=p("form"),e=p("p"),t=K(O),r=G(),s=p("input"),this.h()},l(h){n=v(h,"FORM",{class:!0});var l=_(n);e=v(l,"P",{class:!0});var u=_(e);t=N(u,O),u.forEach(f),r=j(l),s=v(l,"INPUT",{class:!0,type:!0,placeholder:!0}),l.forEach(f),this.h()},h(){d(e,"class","w-6 h-6 text-green-500 dark:text-emerald-600"),d(s,"class","w-full mr-2 caret-pink-600 focus-visible:outline-none placeholder:text-slate-500 dark:placeholder:text-slate-600 bg-transparent text-sky-500 dark:text-cyan-500 crt-anim "),d(s,"type","text"),d(s,"placeholder","Type 'command' and press enter."),d(n,"class","flex")},m(h,l){b(h,n,l),m(n,e),m(e,t),m(n,r),m(n,s),i[5](s),a||(o=[B(te.call(null,s)),E(s,"arrowdown",D(i[3])),E(s,"arrowup",D(i[2])),E(n,"submit",D(i[1]))],a=!0)},p:g,i:g,o:g,d(h){h&&f(n),i[5](null),a=!1,F(o)}}}let O="";function re(i,n,e){let t;A(i,C,c=>e(6,t=c));const r=J();let{hindex:s=t.length}=n,a;function o(){if(a.value){r("submit",a.value),q(C,t[t.length]=a.value,t),e(4,s=t.length),e(0,a.value="",a);return}a.focus()}R(()=>{a.focus()});function h(){s!=0&&(e(4,s--,s),e(0,a.value=t[s],a))}function l(){s<t.length-1?(e(4,s++,s),e(0,a.value=t[s],a)):(e(4,s=t.length),e(0,a.value="",a))}function u(c){W[c?"unshift":"push"](()=>{a=c,e(0,a)})}return i.$$set=c=>{"hindex"in c&&e(4,s=c.hindex)},[a,o,h,l,s,u]}class ae extends y{constructor(n){super(),k(this,n,re,ne,x,{hindex:4})}}function P(i,n,e){const t=i.slice();return t[1]=n[e],t}function U(i){let n,e=i[0],t=[];for(let r=0;r<e.length;r+=1)t[r]=V(P(i,e,r));return{c(){n=p("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){n=v(r,"DIV",{class:!0});var s=_(n);for(let a=0;a<t.length;a+=1)t[a].l(s);s.forEach(f),this.h()},h(){d(n,"class","output px-6 overflow-scroll")},m(r,s){b(r,n,s);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(n,null)},p(r,s){if(s&1){e=r[0];let a;for(a=0;a<e.length;a+=1){const o=P(r,e,a);t[a]?t[a].p(o,s):(t[a]=V(o),t[a].c(),t[a].m(n,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=e.length}},d(r){r&&f(n),Q(t,r)}}}function V(i){let n,e=i[1]+"",t;return{c(){n=new X(!1),t=w(),this.h()},l(r){n=Y(r,!1),t=w(),this.h()},h(){n.a=t},m(r,s){n.m(e,r,s),b(r,t,s)},p(r,s){s&1&&e!==(e=r[1]+"")&&n.p(e)},d(r){r&&f(t),r&&n.d()}}}function se(i){let n,e=i[0]&&U(i);return{c(){e&&e.c(),n=w()},l(t){e&&e.l(t),n=w()},m(t,r){e&&e.m(t,r),b(t,n,r)},p(t,[r]){t[0]?e?e.p(t,r):(e=U(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},i:g,o:g,d(t){e&&e.d(t),t&&f(n)}}}function ie(i,n,e){let{output:t}=n;return i.$$set=r=>{"output"in r&&e(0,t=r.output)},[t]}class le extends y{constructor(n){super(),k(this,n,ie,se,x,{output:0})}}function oe(i){let n,e,t;return{c(){n=p("div"),e=p("p"),t=K(i[0]),this.h()},l(r){n=v(r,"DIV",{class:!0});var s=_(n);e=v(s,"P",{});var a=_(e);t=N(a,i[0]),a.forEach(f),s.forEach(f),this.h()},h(){d(n,"class","rounded-t-md w-full text-sm pb-0 px-2 flex justify-between bg-gray-900 text-gray-400 ")},m(r,s){b(r,n,s),m(n,e),m(e,t)},p(r,[s]){s&1&&Z(t,r[0])},i:g,o:g,d(r){r&&f(n)}}}function ce(i,n,e){let t;return A(i,ee,r=>e(0,t=r)),[t]}class ue extends y{constructor(n){super(),k(this,n,ce,oe,x,{})}}function fe(i){switch(i.toLowerCase().trim()){default:return"<div class='text-red-500'>command '"+i+"' not found.</div>";case"contact":return de();case"about":return he();case"ls":return H();case"help":return H();case"project":return me()}}function H(){return`<h2>🦆 Welcome to my terminal!</h2>
    <h3>Available commands:</h3>
    <ul>
    <li><b>ls</b>/<b>help</b>: show this info.</li>
    <li><b>about</b>: about author.</li>
    <li><b>contact</b>: show author's contact information.</li>
    <li><b>project</b>: author's active projects.</li>
    </ul>
    `}function he(){return`
<div class="flex flex-col">
			<h3>Education</h3>
			<div class="font-bold">> S1 - Sistem Informasi</div>
			<div class="italic pl-3">Universitas AMIKOM Purwokerto, 2022</div>
			<h3>Interests</h3>
			<ul class="list-inside">
				<li>> Python, Svelte</li>
				<li>> JAMStack, Backend development</li>
				<li>> Linux Ricing</li>
				<li>> Learning new programming languages</li>
			</ul>
		</div>
	`}function de(){return`
<div class="flex flex-col">
	<h3>Contact Informations:</h3>
	<div>
		> <a href="mailto:dianghazy@protonmail.com">dianghazy@protonmail.com</a>
	</div>
	<div>
		>
		<a
			href="https://www.linkedin.com/in/ghazy-alfuadi-0bab72242/"
			target="_blank"
			rel="noopener noreferrer">LinkedIn</a
		>
	</div>
	<div>
		>
		<a href="https://www.github.com/GazDuckington/" target="_blank" rel="noopener noreferrer"
			>Github</a
		>
	</div>
</div>

	`}function me(){return`
<div class="flex flex-col">
	<div>
		Sensi: <a href="https://github.com/GazDuckington/sensi" target="_blank" rel="noopener noreferrer">github:GazDuckington/sensi</a>
	</div>
	<div>
		<i>Library</i> analisis sentimen bahasa Indonesia.
	</div>

	<div>
		This site: <a href="https://github.com/GazDuckington/my-site" target="_blank" rel="noopener noreferrer">github:GazDuckington/my-site</a>
	</div>
</div>
	`}function pe(i){let n,e,t,r,s,a,o,h;return e=new ue({}),s=new le({props:{output:i[0]}}),o=new ae({}),o.$on("submit",i[1]),{c(){n=p("div"),I(e.$$.fragment),t=G(),r=p("div"),I(s.$$.fragment),a=G(),I(o.$$.fragment),this.h()},l(l){n=v(l,"DIV",{class:!0});var u=_(n);T(e.$$.fragment,u),t=j(u),r=v(u,"DIV",{class:!0});var c=_(r);T(s.$$.fragment,c),a=j(c),T(o.$$.fragment,c),c.forEach(f),u.forEach(f),this.h()},h(){d(r,"class","overflow-scroll pl-2 h-[60vh] rounded-b-md bg-gray-900 "),d(n,"class","md:w-[90vh] w-[99%] crt crt-anim font-firacode ")},m(l,u){b(l,n,u),$(e,n,null),m(n,t),m(n,r),$(s,r,null),m(r,a),$(o,r,null),h=!0},p(l,[u]){const c={};u&1&&(c.output=l[0]),s.$set(c)},i(l){h||(z(e.$$.fragment,l),z(s.$$.fragment,l),z(o.$$.fragment,l),h=!0)},o(l){L(e.$$.fragment,l),L(s.$$.fragment,l),L(o.$$.fragment,l),h=!1},d(l){l&&f(n),S(e),S(s),S(o)}}}function ve(i,n,e){let t;A(i,M,a=>e(2,t=a));var r=[];function s(a){if(a.detail=="clear"||a.detail=="cl")e(0,r=[]);else if(a.detail=="theme")q(M,t=!t,t);else{const o=fe(a.detail);e(0,r[r.length]=o,r)}}return[r,s]}class be extends y{constructor(n){super(),k(this,n,ve,pe,x,{})}}export{be as T};
