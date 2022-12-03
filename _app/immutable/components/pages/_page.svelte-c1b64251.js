import{S as y,i as w,s as D,k as p,q as P,a as _,l as v,m as g,r as V,h as u,c as x,n as m,b,J as h,E as J,P as $,Q as A,D as k,G as H,N as j,R as W,o as Y,T as Q,U as B,e as L,V as X,W as Z,X as ee,w as E,x as I,y as T,f as z,t as S,z as G,u as U,Y as te}from"../../chunks/index-b5746da8.js";import{h as O,i as N,d as ne}from"../../chunks/stores-54d26941.js";function re(s){function e(i){i.key==="Enter"?s.dispatchEvent(new CustomEvent("enterkey")):i.key==="ArrowUp"?s.dispatchEvent(new CustomEvent("arrowup")):i.key==="ArrowDown"&&s.dispatchEvent(new CustomEvent("arrowdown"))}return document.addEventListener("keydown",e,!0),{destroy(){document.removeEventListener("keydown",e,!0)}}}function ie(s){let e,i,a,n,r,t,l;return{c(){e=p("form"),i=p("p"),a=P(F),n=_(),r=p("input"),this.h()},l(d){e=v(d,"FORM",{class:!0});var c=g(e);i=v(c,"P",{class:!0});var o=g(i);a=V(o,F),o.forEach(u),n=x(c),r=v(c,"INPUT",{class:!0,type:!0,placeholder:!0}),c.forEach(u),this.h()},h(){m(i,"class","w-6 h-6 text-green-500 dark:text-emerald-600 animate-pulse font-firacode"),m(r,"class","caret-pink-600 focus-visible:outline-none placeholder:text-slate-900 dark:placeholder:text-slate-500 bg-transparent text-sky-500 dark:text-cyan-500 crt-anim"),m(r,"type","text"),m(r,"placeholder","enter command here."),m(e,"class","flex")},m(d,c){b(d,e,c),h(e,i),h(i,a),h(e,n),h(e,r),s[5](r),t||(l=[J(re.call(null,r)),$(r,"arrowup",A(s[2])),$(r,"arrowdown",A(s[3])),$(e,"submit",A(s[1]))],t=!0)},p:k,i:k,o:k,d(d){d&&u(e),s[5](null),t=!1,H(l)}}}let F="\uF054";function ae(s,e,i){let a;j(s,O,f=>i(6,a=f));const n=W();let{hindex:r=a.length}=e,t;function l(){t.value&&(n("submit",t.value),B(O,a[a.length]=t.value,a),i(4,r=a.length),i(0,t.value="",t)),t.focus()}Y(()=>{t.focus()});function d(){r!=0&&(i(4,r--,r),i(0,t.value=a[r],t))}function c(){r<a.length-1?(i(4,r++,r),i(0,t.value=a[r],t)):(i(4,r=a.length),i(0,t.value="",t))}function o(f){Q[f?"unshift":"push"](()=>{t=f,i(0,t)})}return s.$$set=f=>{"hindex"in f&&i(4,r=f.hindex)},[t,l,d,c,r,o]}class se extends y{constructor(e){super(),w(this,e,ae,ie,D,{hindex:4})}}function le(s){switch(s.toLowerCase().trim()){default:return"<div class='text-red-600'>command '"+s+"' not found.</div>";case"contact":return he();case"help":return de();case"about":return fe();case"ls":return ue();case"src":return ce();case"sensi":return oe();case"project":return me()}}function oe(){return window.open("https://github.com/GazDuckington/sensi","_blank"),`
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
			<div>\u{1F986} You've found my terminal!</div>
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
	`}function he(){return`
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

	`}function me(){return`
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
	`}function K(s,e,i){const a=s.slice();return a[1]=e[i],a}function R(s){let e,i=s[0],a=[];for(let n=0;n<i.length;n+=1)a[n]=q(K(s,i,n));return{c(){e=p("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=v(n,"DIV",{class:!0});var r=g(e);for(let t=0;t<a.length;t+=1)a[t].l(r);r.forEach(u),this.h()},h(){m(e,"class","text-indigo-500 dark:text-indigo-500 px-6")},m(n,r){b(n,e,r);for(let t=0;t<a.length;t+=1)a[t].m(e,null)},p(n,r){if(r&1){i=n[0];let t;for(t=0;t<i.length;t+=1){const l=K(n,i,t);a[t]?a[t].p(l,r):(a[t]=q(l),a[t].c(),a[t].m(e,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=i.length}},d(n){n&&u(e),X(a,n)}}}function q(s){let e,i=s[1]+"",a;return{c(){e=new Z(!1),a=L(),this.h()},l(n){e=ee(n,!1),a=L(),this.h()},h(){e.a=a},m(n,r){e.m(i,n,r),b(n,a,r)},p(n,r){r&1&&i!==(i=n[1]+"")&&e.p(i)},d(n){n&&u(a),n&&e.d()}}}function pe(s){let e,i,a,n,r=s[0]&&R(s);return{c(){e=p("div"),i=P("Type 'help' for more information."),a=_(),r&&r.c(),n=L(),this.h()},l(t){e=v(t,"DIV",{class:!0});var l=g(e);i=V(l,"Type 'help' for more information."),l.forEach(u),a=x(t),r&&r.l(t),n=L(),this.h()},h(){m(e,"class","text-violet-600 dark:text-violet-500 px-6")},m(t,l){b(t,e,l),h(e,i),b(t,a,l),r&&r.m(t,l),b(t,n,l)},p(t,[l]){t[0]?r?r.p(t,l):(r=R(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:k,o:k,d(t){t&&u(e),t&&u(a),r&&r.d(t),t&&u(n)}}}function ve(s,e,i){let{output:a}=e;return s.$$set=n=>{"output"in n&&i(0,a=n.output)},[a]}class ge extends y{constructor(e){super(),w(this,e,ve,pe,D,{output:0})}}function ke(s){let e,i,a,n,r;return i=new ge({props:{output:s[0]}}),n=new se({}),n.$on("submit",s[1]),{c(){e=p("div"),E(i.$$.fragment),a=_(),E(n.$$.fragment)},l(t){e=v(t,"DIV",{});var l=g(e);I(i.$$.fragment,l),a=x(l),I(n.$$.fragment,l),l.forEach(u)},m(t,l){b(t,e,l),T(i,e,null),h(e,a),T(n,e,null),r=!0},p(t,[l]){const d={};l&1&&(d.output=t[0]),i.$set(d)},i(t){r||(z(i.$$.fragment,t),z(n.$$.fragment,t),r=!0)},o(t){S(i.$$.fragment,t),S(n.$$.fragment,t),r=!1},d(t){t&&u(e),G(i),G(n)}}}function be(s,e,i){let a;j(s,N,t=>i(2,a=t));var n=[];function r(t){if(t.detail=="clear")i(0,n=[]);else if(t.detail=="theme")B(N,a=!a,a);else{const l=le(t.detail);i(0,n[n.length]=l,n)}}return[n,r]}class _e extends y{constructor(e){super(),w(this,e,be,ke,D,{})}}function xe(s){let e,i,a;return{c(){e=p("nav"),i=p("p"),a=P("Terminal _"),this.h()},l(n){e=v(n,"NAV",{class:!0});var r=g(e);i=v(r,"P",{class:!0});var t=g(i);a=V(t,"Terminal _"),t.forEach(u),r.forEach(u),this.h()},h(){m(i,"class","text-green-500"),m(e,"class","font-firacode bg-slate-800 dark:bg-slate-900 pt-0.5 pb-0 px-2 flex justify-between crt")},m(n,r){b(n,e,r),h(e,i),h(i,a)},p:k,i:k,o:k,d(n){n&&u(e)}}}function ye(s){return[]}class we extends y{constructor(e){super(),w(this,e,ye,xe,D,{})}}function De(s){let e,i,a,n,r=s[1]?"\uF186 Dark":"\uF185 Light",t,l,d;return{c(){e=p("div"),i=P(s[0]),a=_(),n=p("button"),t=P(r),this.h()},l(c){e=v(c,"DIV",{class:!0});var o=g(e);i=V(o,s[0]),a=x(o),n=v(o,"BUTTON",{title:!0,class:!0});var f=g(n);t=V(f,r),f.forEach(u),o.forEach(u),this.h()},h(){m(n,"title","toggle dark theme"),m(n,"class","hover:font-bold hover:text-green-500 font-firacode crt-anim"),m(e,"class","font-mono w-full text-sm text-slate-400 bg-slate-800 dark:bg-slate-900 pt-0.5 pb-0 px-2 flex justify-between crt")},m(c,o){b(c,e,o),h(e,i),h(e,a),h(e,n),h(n,t),l||(d=[$(n,"keypress",s[2]),$(n,"click",s[3])],l=!0)},p(c,[o]){o&1&&U(i,c[0]),o&2&&r!==(r=c[1]?"\uF186 Dark":"\uF185 Light")&&U(t,r)},i:k,o:k,d(c){c&&u(e),l=!1,H(d)}}}function $e(s,e,i){let a,n;j(s,ne,l=>i(0,a=l)),j(s,N,l=>i(1,n=l));function r(l){te.call(this,s,l)}return[a,n,r,()=>{B(N,n=!n,n)}]}class Ee extends y{constructor(e){super(),w(this,e,$e,De,D,{})}}function Ie(s){let e,i,a,n,r,t,l,d,c;return i=new we({}),t=new _e({}),d=new Ee({}),{c(){e=p("div"),E(i.$$.fragment),a=_(),n=p("div"),r=p("div"),E(t.$$.fragment),l=_(),E(d.$$.fragment),this.h()},l(o){e=v(o,"DIV",{class:!0});var f=g(e);I(i.$$.fragment,f),a=x(f),n=v(f,"DIV",{class:!0});var C=g(n);r=v(C,"DIV",{class:!0});var M=g(r);I(t.$$.fragment,M),M.forEach(u),C.forEach(u),l=x(f),I(d.$$.fragment,f),f.forEach(u),this.h()},h(){m(r,"class","flex justify-start mx-2"),m(n,"class","grid grid-rows-2 w-96 lg:w-[50em] dark:bg-slate-900 h-[80vh] overflow-auto crt"),m(e,"class","rounded border-2 shadow-md border-slate-800 dark:border-slate-900 font-firacode crt")},m(o,f){b(o,e,f),T(i,e,null),h(e,a),h(e,n),h(n,r),T(t,r,null),h(e,l),T(d,e,null),c=!0},p:k,i(o){c||(z(i.$$.fragment,o),z(t.$$.fragment,o),z(d.$$.fragment,o),c=!0)},o(o){S(i.$$.fragment,o),S(t.$$.fragment,o),S(d.$$.fragment,o),c=!1},d(o){o&&u(e),G(i),G(t),G(d)}}}class Se extends y{constructor(e){super(),w(this,e,null,Ie,D,{})}}export{Se as default};
