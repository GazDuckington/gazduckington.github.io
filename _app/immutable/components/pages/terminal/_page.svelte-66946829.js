import{S as w,i as y,s as k,e as p,r as H,a as j,b as g,g as _,v as K,d as c,f as C,j as d,l as b,k as m,x as F,y as L,z as S,n as v,A as J,q as G,B as N,C as R,D as W,E as q,F as z,G as Q,H as X,I as Y,w as Z,J as x,K as E,L as $,t as D,p as I,M as T}from"../../../chunks/index-84bf64d2.js";import{h as A,d as ee,i as M}from"../../../chunks/stores-469869db.js";function te(i){function t(e){e.key==="Enter"?i.dispatchEvent(new CustomEvent("enterkey")):e.key==="ArrowUp"?i.dispatchEvent(new CustomEvent("arrowup")):e.key==="ArrowDown"&&i.dispatchEvent(new CustomEvent("arrowdown"))}return document.addEventListener("keydown",t,!0),{destroy(){document.removeEventListener("keydown",t,!0)}}}function ne(i){let t,e,n,r,a,s,o;return{c(){t=p("form"),e=p("p"),n=H(P),r=j(),a=p("input"),this.h()},l(h){t=g(h,"FORM",{class:!0});var l=_(t);e=g(l,"P",{class:!0});var f=_(e);n=K(f,P),f.forEach(c),r=C(l),a=g(l,"INPUT",{class:!0,type:!0,placeholder:!0}),l.forEach(c),this.h()},h(){d(e,"class","w-6 h-6 text-green-500 dark:text-emerald-600"),d(a,"class","w-full mr-2 caret-pink-600 focus-visible:outline-none placeholder:text-slate-500 dark:placeholder:text-slate-600 bg-transparent text-sky-500 dark:text-cyan-500 crt-anim "),d(a,"type","text"),d(a,"placeholder","Type 'command' and press enter."),d(t,"class","flex")},m(h,l){b(h,t,l),m(t,e),m(e,n),m(t,r),m(t,a),i[5](a),s||(o=[F(te.call(null,a)),L(a,"arrowdown",S(i[3])),L(a,"arrowup",S(i[2])),L(t,"submit",S(i[1]))],s=!0)},p:v,i:v,o:v,d(h){h&&c(t),i[5](null),s=!1,J(o)}}}let P="";function re(i,t,e){let n;G(i,A,u=>e(6,n=u));const r=N();let{hindex:a=n.length}=t,s;function o(){if(s.value){r("submit",s.value),q(A,n[n.length]=s.value,n),e(4,a=n.length),e(0,s.value="",s);return}s.focus()}R(()=>{s.focus()});function h(){a!=0&&(e(4,a--,a),e(0,s.value=n[a],s))}function l(){a<n.length-1?(e(4,a++,a),e(0,s.value=n[a],s)):(e(4,a=n.length),e(0,s.value="",s))}function f(u){W[u?"unshift":"push"](()=>{s=u,e(0,s)})}return i.$$set=u=>{"hindex"in u&&e(4,a=u.hindex)},[s,o,h,l,a,f]}class ae extends w{constructor(t){super(),y(this,t,re,ne,k,{hindex:4})}}function O(i,t,e){const n=i.slice();return n[1]=t[e],n}function V(i){let t,e=i[0],n=[];for(let r=0;r<e.length;r+=1)n[r]=U(O(i,e,r));return{c(){t=p("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){t=g(r,"DIV",{class:!0});var a=_(t);for(let s=0;s<n.length;s+=1)n[s].l(a);a.forEach(c),this.h()},h(){d(t,"class","output px-6 overflow-scroll")},m(r,a){b(r,t,a);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(t,null)},p(r,a){if(a&1){e=r[0];let s;for(s=0;s<e.length;s+=1){const o=O(r,e,s);n[s]?n[s].p(o,a):(n[s]=U(o),n[s].c(),n[s].m(t,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=e.length}},d(r){r&&c(t),Q(n,r)}}}function U(i){let t,e=i[1]+"",n;return{c(){t=new X(!1),n=z(),this.h()},l(r){t=Y(r,!1),n=z(),this.h()},h(){t.a=n},m(r,a){t.m(e,r,a),b(r,n,a)},p(r,a){a&1&&e!==(e=r[1]+"")&&t.p(e)},d(r){r&&c(n),r&&t.d()}}}function se(i){let t,e=i[0]&&V(i);return{c(){e&&e.c(),t=z()},l(n){e&&e.l(n),t=z()},m(n,r){e&&e.m(n,r),b(n,t,r)},p(n,[r]){n[0]?e?e.p(n,r):(e=V(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:v,o:v,d(n){e&&e.d(n),n&&c(t)}}}function ie(i,t,e){let{output:n}=t;return i.$$set=r=>{"output"in r&&e(0,n=r.output)},[n]}class le extends w{constructor(t){super(),y(this,t,ie,se,k,{output:0})}}function oe(i){let t,e,n;return{c(){t=p("div"),e=p("p"),n=H(i[0]),this.h()},l(r){t=g(r,"DIV",{class:!0});var a=_(t);e=g(a,"P",{});var s=_(e);n=K(s,i[0]),s.forEach(c),a.forEach(c),this.h()},h(){d(t,"class","rounded-t-md w-full text-sm pb-0 px-2 flex justify-between bg-gray-900 text-gray-400 ")},m(r,a){b(r,t,a),m(t,e),m(e,n)},p(r,[a]){a&1&&Z(n,r[0])},i:v,o:v,d(r){r&&c(t)}}}function ue(i,t,e){let n;return G(i,ee,r=>e(0,n=r)),[n]}class ce extends w{constructor(t){super(),y(this,t,ue,oe,k,{})}}function fe(i){switch(i.toLowerCase().trim()){default:return"<div class='text-red-500'>command '"+i+"' not found.</div>";case"contact":return de();case"about":return he();case"ls":return B();case"help":return B();case"project":return me()}}function B(){return`<h2>🦆 Welcome to my terminal!</h2>
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
	`}function pe(i){let t,e,n,r,a,s,o,h;return e=new ce({}),a=new le({props:{output:i[0]}}),o=new ae({}),o.$on("submit",i[1]),{c(){t=p("div"),x(e.$$.fragment),n=j(),r=p("div"),x(a.$$.fragment),s=j(),x(o.$$.fragment),this.h()},l(l){t=g(l,"DIV",{class:!0});var f=_(t);E(e.$$.fragment,f),n=C(f),r=g(f,"DIV",{class:!0});var u=_(r);E(a.$$.fragment,u),s=C(u),E(o.$$.fragment,u),u.forEach(c),f.forEach(c),this.h()},h(){d(r,"class","overflow-scroll pl-2 h-[60vh] rounded-b-md bg-gray-900 "),d(t,"class","md:w-[90vh] w-[99%] crt crt-anim font-firacode ")},m(l,f){b(l,t,f),$(e,t,null),m(t,n),m(t,r),$(a,r,null),m(r,s),$(o,r,null),h=!0},p(l,[f]){const u={};f&1&&(u.output=l[0]),a.$set(u)},i(l){h||(D(e.$$.fragment,l),D(a.$$.fragment,l),D(o.$$.fragment,l),h=!0)},o(l){I(e.$$.fragment,l),I(a.$$.fragment,l),I(o.$$.fragment,l),h=!1},d(l){l&&c(t),T(e),T(a),T(o)}}}function ge(i,t,e){let n;G(i,M,s=>e(2,n=s));var r=[];function a(s){if(s.detail=="clear"||s.detail=="cl")e(0,r=[]);else if(s.detail=="theme")q(M,n=!n,n);else{const o=fe(s.detail);e(0,r[r.length]=o,r)}}return[r,a]}class ve extends w{constructor(t){super(),y(this,t,ge,pe,k,{})}}function _e(i){let t,e,n;return e=new ve({}),{c(){t=p("div"),x(e.$$.fragment),this.h()},l(r){t=g(r,"DIV",{class:!0});var a=_(t);E(e.$$.fragment,a),a.forEach(c),this.h()},h(){d(t,"class","translate-all easi-in-out duration-150 flex items-center justify-center h-screen font-mono ")},m(r,a){b(r,t,a),$(e,t,null),n=!0},p:v,i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){I(e.$$.fragment,r),n=!1},d(r){r&&c(t),T(e)}}}class ye extends w{constructor(t){super(),y(this,t,null,_e,k,{})}}export{ye as default};
