import{S as D,i as E,s as $,k as p,q as _,a as x,l as v,m as g,r as y,h as d,c as w,n as h,b as k,J as m,E as J,P as I,Q as A,D as b,G as H,N as j,R as W,o as Y,T as Q,U as B,e as L,V as X,W as Z,X as ee,w as T,x as z,y as S,f as G,t as P,z as V,u as U,Y as te}from"../../chunks/index-d691dcb1.js";import{h as O,i as N,d as ne}from"../../chunks/stores-310e8c2e.js";function re(s){function t(r){r.key==="Enter"?s.dispatchEvent(new CustomEvent("enterkey")):r.key==="ArrowUp"?s.dispatchEvent(new CustomEvent("arrowup")):r.key==="ArrowDown"&&s.dispatchEvent(new CustomEvent("arrowdown"))}return document.addEventListener("keydown",t,!0),{destroy(){document.removeEventListener("keydown",t,!0)}}}function ie(s){let t,r,a,n,i,e,l;return{c(){t=p("form"),r=p("p"),a=_(K),n=x(),i=p("input"),this.h()},l(c){t=v(c,"FORM",{class:!0});var u=g(t);r=v(u,"P",{class:!0});var o=g(r);a=y(o,K),o.forEach(d),n=w(u),i=v(u,"INPUT",{class:!0,type:!0,placeholder:!0}),u.forEach(d),this.h()},h(){h(r,"class","w-6 h-6 text-green-500 dark:text-emerald-600 animate-pulse font-firacode"),h(i,"class","caret-pink-600 focus-visible:outline-none placeholder:text-slate-500 dark:placeholder:text-slate-600 bg-transparent text-sky-500 dark:text-cyan-500 crt-anim"),h(i,"type","text"),h(i,"placeholder","enter command here."),h(t,"class","flex")},m(c,u){k(c,t,u),m(t,r),m(r,a),m(t,n),m(t,i),s[5](i),e||(l=[J(re.call(null,i)),I(i,"arrowup",A(s[2])),I(i,"arrowdown",A(s[3])),I(t,"submit",A(s[1]))],e=!0)},p:b,i:b,o:b,d(c){c&&d(t),s[5](null),e=!1,H(l)}}}let K="";function ae(s,t,r){let a;j(s,O,f=>r(6,a=f));const n=W();let{hindex:i=a.length}=t,e;function l(){e.value&&(n("submit",e.value),B(O,a[a.length]=e.value,a),r(4,i=a.length),r(0,e.value="",e)),e.focus()}Y(()=>{e.focus()});function c(){i!=0&&(r(4,i--,i),r(0,e.value=a[i],e))}function u(){i<a.length-1?(r(4,i++,i),r(0,e.value=a[i],e)):(r(4,i=a.length),r(0,e.value="",e))}function o(f){Q[f?"unshift":"push"](()=>{e=f,r(0,e)})}return s.$$set=f=>{"hindex"in f&&r(4,i=f.hindex)},[e,l,c,u,i,o]}class se extends D{constructor(t){super(),E(this,t,ae,ie,$,{hindex:4})}}function le(s){switch(s.toLowerCase().trim()){default:return"<div class='text-red-600'>command '"+s+"' not found.</div>";case"contact":return me();case"help":return de();case"about":return fe();case"ls":return ue();case"src":return ce();case"sensi":return oe();case"project":return he()}}function oe(){return window.open("https://github.com/GazDuckington/sensi","_blank"),`
		<div>
			<a
				href="https://github.com/GazDuckington/sensi"
			 	target="_blank"
				rel="noopener noreferrer">Sensi: Naive-Bayes sentiment analysis tool, for Indonesian language.</a>
		</div>
	`}function ce(){return window.open("https://github.com/GazDuckington/my-site","_blank"),`
		<div>
			<a
				href="https://github.com/GazDuckington/my-site"
			 	target="_blank"
				rel="noopener noreferrer">Terminal's source code</a>
		</div>
	`}function ue(){return`
		<div class="flex flex-col">
			<div class="text-blue-600 italic">ls</div>
			<div>list all commands (this page)</div>
			<div class="text-blue-600 italic">help</div>
			<div>returns help informations.</div>
			<div class="text-blue-600">contact</div>
			<div>clears terminal output.</div>
			<div class="text-blue-600 italic">about</div>
			<div>returns a <b>very brief</b> personal history.</div>
			<div class="text-blue-600">contact</div>
			<div>lists all of my contact information.</div>
			<div class="text-blue-600">project</div>
			<div>my projects</div>
			<div class="text-blue-600">theme</div>
			<div>toggle dark theme</div>
		</div>
	`}function de(){return`
		<div>
			<div>🦆 You've found my terminal!</div>
			<div class="pl-6">Type 'ls' to list all commands.</div>
			<div class="pl-6">Type 'src' to go to this project's Github repository.</div>
		</div>
	`}function fe(){return`
<div class="flex flex-col">
			<h3 class="italic font-bold text-sky-500 dark:text-sky-600">Education</h3>
			<div class="font-bold">> S1 - Sistem Informasi</div>
			<div class="italic pl-3">Universitas AMIKOM Purwokerto, 2022</div>
			<div class="font-bold">> D3 - Sistem Informasi</div>
			<div class="italic pl-3">AMIK BSI Purwokerto, 2018</div>
			<h3 class="italic font-bold text-sky-500 dark:text-sky-600">Interests</h3>
			<ul class="list-inside">
				<li>> Python, Svelte</li>
				<li>> JAMStack, Backend development</li>
				<li>> Linux Ricing</li>
				<li>> Learning new programming languages</li>
			</ul>
		</div>
	`}function me(){return`
<div class="flex flex-col">
	<h3 class="italic font-bold text-sky-500 dark:text-sky-600">Contact Informations:</h3>
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

	`}function he(){return`
<div class="flex flex-col">
	<div class="italic font-bold text-sky-500 dark:text-sky-600 flex">
		<p>link: </p>
		<a href="https://github.com/GazDuckington/sensi" target="_blank" rel="noopener noreferrer"
			> Sensi
		</a>
	</div>
	<div>
		<i>Framework</i> analisis sentimen bahasa Indonesia, berdasarkan algoritma Naive-Bayes, untuk Python.
	</div>

	<div class="italic font-bold text-sky-500 dark:text-sky-600 flex">
		<p>link: </p>
		<a href="https://github.com/GazDuckington/my-site" target="_blank" rel="noopener noreferrer"
			> Website
		</a>
	</div>
	<div>
		Situs bertema terminal, yang berfungsi sebagain <i>landing page</i> personal.
	</div>

	<div class="italic font-bold text-sky-500 dark:text-sky-600 flex">
		<p>link: </p>
		<a href="https://github.com/GazDuckington/nvim" target="_blank" rel="noopener noreferrer"
			> PDE</a
		>
	</div>
	<div>
		Konfigurasi Neovim sebagai <i>Personal Development Environment</i>.
	</div>

	<div class="italic font-bold text-sky-500 dark:text-sky-600 flex">
		<p>link: </p>
		<a href="https://github.com/GazDuckington/dotfile" target="_blank" rel="noopener noreferrer"
			> Dotfiles</a
		>
	</div>
	<div>
		<i>Scripts, tweaks & window manager setups. A mess.</i>
	</div>
</div>
	`}function F(s,t,r){const a=s.slice();return a[1]=t[r],a}function R(s){let t,r=s[0],a=[];for(let n=0;n<r.length;n+=1)a[n]=q(F(s,r,n));return{c(){t=p("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){t=v(n,"DIV",{class:!0});var i=g(t);for(let e=0;e<a.length;e+=1)a[e].l(i);i.forEach(d),this.h()},h(){h(t,"class","text-indigo-500 dark:text-indigo-500 px-6")},m(n,i){k(n,t,i);for(let e=0;e<a.length;e+=1)a[e].m(t,null)},p(n,i){if(i&1){r=n[0];let e;for(e=0;e<r.length;e+=1){const l=F(n,r,e);a[e]?a[e].p(l,i):(a[e]=q(l),a[e].c(),a[e].m(t,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=r.length}},d(n){n&&d(t),X(a,n)}}}function q(s){let t,r=s[1]+"",a;return{c(){t=new Z(!1),a=L(),this.h()},l(n){t=ee(n,!1),a=L(),this.h()},h(){t.a=a},m(n,i){t.m(r,n,i),k(n,a,i)},p(n,i){i&1&&r!==(r=n[1]+"")&&t.p(r)},d(n){n&&d(a),n&&t.d()}}}function pe(s){let t,r,a,n,i=s[0]&&R(s);return{c(){t=p("div"),r=_("Type 'help' for more information."),a=x(),i&&i.c(),n=L(),this.h()},l(e){t=v(e,"DIV",{class:!0});var l=g(t);r=y(l,"Type 'help' for more information."),l.forEach(d),a=w(e),i&&i.l(e),n=L(),this.h()},h(){h(t,"class","text-violet-600 dark:text-violet-500 px-6")},m(e,l){k(e,t,l),m(t,r),k(e,a,l),i&&i.m(e,l),k(e,n,l)},p(e,[l]){e[0]?i?i.p(e,l):(i=R(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i:b,o:b,d(e){e&&d(t),e&&d(a),i&&i.d(e),e&&d(n)}}}function ve(s,t,r){let{output:a}=t;return s.$$set=n=>{"output"in n&&r(0,a=n.output)},[a]}class ge extends D{constructor(t){super(),E(this,t,ve,pe,$,{output:0})}}function be(s){let t,r,a,n,i;return r=new ge({props:{output:s[0]}}),n=new se({}),n.$on("submit",s[1]),{c(){t=p("div"),T(r.$$.fragment),a=x(),T(n.$$.fragment)},l(e){t=v(e,"DIV",{});var l=g(t);z(r.$$.fragment,l),a=w(l),z(n.$$.fragment,l),l.forEach(d)},m(e,l){k(e,t,l),S(r,t,null),m(t,a),S(n,t,null),i=!0},p(e,[l]){const c={};l&1&&(c.output=e[0]),r.$set(c)},i(e){i||(G(r.$$.fragment,e),G(n.$$.fragment,e),i=!0)},o(e){P(r.$$.fragment,e),P(n.$$.fragment,e),i=!1},d(e){e&&d(t),V(r),V(n)}}}function ke(s,t,r){let a;j(s,N,e=>r(2,a=e));var n=[];function i(e){if(e.detail=="clear")r(0,n=[]);else if(e.detail=="theme")B(N,a=!a,a);else{const l=le(e.detail);r(0,n[n.length]=l,n)}}return[n,i]}class _e extends D{constructor(t){super(),E(this,t,ke,be,$,{})}}function xe(s){let t,r,a,n,i;return{c(){t=p("nav"),r=p("p"),a=_("Terminal"),n=p("b"),i=_("_"),this.h()},l(e){t=v(e,"NAV",{class:!0});var l=g(t);r=v(l,"P",{class:!0});var c=g(r);a=y(c,"Terminal"),n=v(c,"B",{});var u=g(n);i=y(u,"_"),u.forEach(d),c.forEach(d),l.forEach(d),this.h()},h(){h(r,"class","text-green-500 animate-pulse"),h(t,"class","font-mono w-full text-sm text-slate-400 bg-slate-700 dark:bg-slate-800 pb-0.5 px-2 flex justify-between crt")},m(e,l){k(e,t,l),m(t,r),m(r,a),m(r,n),m(n,i)},p:b,i:b,o:b,d(e){e&&d(t)}}}function ye(s){return[]}class we extends D{constructor(t){super(),E(this,t,ye,xe,$,{})}}function De(s){let t,r,a,n,i=s[1]?" Dark":" Light",e,l,c;return{c(){t=p("div"),r=_(s[0]),a=x(),n=p("button"),e=_(i),this.h()},l(u){t=v(u,"DIV",{class:!0});var o=g(t);r=y(o,s[0]),a=w(o),n=v(o,"BUTTON",{title:!0,class:!0});var f=g(n);e=y(f,i),f.forEach(d),o.forEach(d),this.h()},h(){h(n,"title","toggle dark theme"),h(n,"class","hover:font-bold hover:text-green-500 font-firacode crt-anim"),h(t,"class","font-mono w-full text-sm text-slate-400 bg-slate-700 dark:bg-slate-800 pb-0 px-2 flex justify-between crt")},m(u,o){k(u,t,o),m(t,r),m(t,a),m(t,n),m(n,e),l||(c=[I(n,"keypress",s[2]),I(n,"click",s[3])],l=!0)},p(u,[o]){o&1&&U(r,u[0]),o&2&&i!==(i=u[1]?" Dark":" Light")&&U(e,i)},i:b,o:b,d(u){u&&d(t),l=!1,H(c)}}}function Ee(s,t,r){let a,n;j(s,ne,l=>r(0,a=l)),j(s,N,l=>r(1,n=l));function i(l){te.call(this,s,l)}return[a,n,i,()=>{B(N,n=!n,n)}]}class $e extends D{constructor(t){super(),E(this,t,Ee,De,$,{})}}function Ie(s){let t,r,a,n,i,e,l,c,u;return r=new we({}),e=new _e({}),c=new $e({}),{c(){t=p("div"),T(r.$$.fragment),a=x(),n=p("div"),i=p("div"),T(e.$$.fragment),l=x(),T(c.$$.fragment),this.h()},l(o){t=v(o,"DIV",{class:!0});var f=g(t);z(r.$$.fragment,f),a=w(f),n=v(f,"DIV",{class:!0});var C=g(n);i=v(C,"DIV",{class:!0});var M=g(i);z(e.$$.fragment,M),M.forEach(d),C.forEach(d),l=w(f),z(c.$$.fragment,f),f.forEach(d),this.h()},h(){h(i,"class","flex justify-start mx-2"),h(n,"class","grid grid-rows-2 dark:bg-slate-900 h-[80vh] overflow-auto crt"),h(t,"class","rounded border-2 shadow-xl border-slate-800 dark:border-slate-700 w-[20em] md:w-[45em] font-firacode crt")},m(o,f){k(o,t,f),S(r,t,null),m(t,a),m(t,n),m(n,i),S(e,i,null),m(t,l),S(c,t,null),u=!0},p:b,i(o){u||(G(r.$$.fragment,o),G(e.$$.fragment,o),G(c.$$.fragment,o),u=!0)},o(o){P(r.$$.fragment,o),P(e.$$.fragment,o),P(c.$$.fragment,o),u=!1},d(o){o&&d(t),V(r),V(e),V(c)}}}class Se extends D{constructor(t){super(),E(this,t,null,Ie,$,{})}}export{Se as default};
