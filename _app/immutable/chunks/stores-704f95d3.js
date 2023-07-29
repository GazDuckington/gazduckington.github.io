import{B as q,C as tt}from"./index-fec5a1b4.js";var et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nt($){return $&&$.__esModule&&Object.prototype.hasOwnProperty.call($,"default")?$.default:$}var G={exports:{}};(function($,A){(function(Y,S){$.exports=S()})(et,function(){var Y=1e3,S=6e4,Z=36e5,N="millisecond",b="second",O="minute",_="hour",y="day",C="week",M="month",z="quarter",g="year",k="date",E="Invalid Date",Q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,K=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},J=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},X={s:J,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+J(r,2,"0")+":"+J(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,M),i=t-e<0,a=n.clone().add(r+(i?-1:1),M);return+(-(r+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M,y:g,w:C,d:y,D:k,h:_,m:O,s:b,ms:N,Q:z}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},H="en",p={};p[H]=R;var F=function(s){return s instanceof L},j=function s(n,t,r){var e;if(!n)return H;if(typeof n=="string"){var i=n.toLowerCase();p[i]&&(e=i),t&&(p[i]=t,e=i);var a=n.split("-");if(!e&&a.length>1)return s(a[0])}else{var o=n.name;p[o]=n,e=o}return!r&&e&&(H=e),e||!r&&H},f=function(s,n){if(F(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new L(t)},u=X;u.l=j,u.i=F,u.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var L=function(){function s(t){this.$L=j(t.locale,null,!0),this.parse(t)}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(Q);if(a){var o=a[2]-1||0,c=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==E},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!u.u(r)||r,a=u.p(t),o=function(w,l){var v=u.w(e.$u?Date.UTC(e.$y,l,w):new Date(e.$y,l,w),e);return i?v:v.endOf(y)},c=function(w,l){return u.w(e.toDate()[w].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},d=this.$W,h=this.$M,m=this.$D,T="set"+(this.$u?"UTC":"");switch(a){case g:return i?o(1,0):o(31,11);case M:return i?o(1,h):o(0,h+1);case C:var D=this.$locale().weekStart||0,I=(d<D?d+7:d)-D;return o(i?m-I:m+(6-I),h);case y:case k:return c(T+"Hours",0);case _:return c(T+"Minutes",1);case O:return c(T+"Seconds",2);case b:return c(T+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=u.p(t),a="set"+(this.$u?"UTC":""),o=(e={},e[y]=a+"Date",e[k]=a+"Date",e[M]=a+"Month",e[g]=a+"FullYear",e[_]=a+"Hours",e[O]=a+"Minutes",e[b]=a+"Seconds",e[N]=a+"Milliseconds",e)[i],c=i===y?this.$D+(r-this.$W):r;if(i===M||i===g){var d=this.clone().set(k,1);d.$d[o](c),d.init(),this.$d=d.set(k,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var a=u.p(r),o=function(h){var m=f(i);return u.w(m.date(m.date()+Math.round(h*t)),i)};if(a===M)return this.set(M,this.$M+t);if(a===g)return this.set(g,this.$y+t);if(a===y)return o(1);if(a===C)return o(7);var c=(e={},e[O]=S,e[_]=Z,e[b]=Y,e)[a]||1,d=this.$d.getTime()+t*c;return u.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||E;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=u.z(this),o=this.$H,c=this.$m,d=this.$M,h=e.weekdays,m=e.months,T=e.meridiem,D=function(l,v,x,W){return l&&(l[v]||l(r,i))||x[v].slice(0,W)},I=function(l){return u.s(o%12||12,l,"0")},w=T||function(l,v,x){var W=l<12?"AM":"PM";return x?W.toLowerCase():W};return i.replace(K,function(l,v){return v||function(x){switch(x){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return d+1;case"MM":return u.s(d+1,2,"0");case"MMM":return D(e.monthsShort,d,m,3);case"MMMM":return D(m,d);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return D(e.weekdaysMin,r.$W,h,2);case"ddd":return D(e.weekdaysShort,r.$W,h,3);case"dddd":return h[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return I(1);case"hh":return I(2);case"a":return w(o,c,!0);case"A":return w(o,c,!1);case"m":return String(c);case"mm":return u.s(c,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return a}return null}(l)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,a=this,o=u.p(r),c=f(t),d=(c.utcOffset()-this.utcOffset())*S,h=this-c,m=function(){return u.m(a,c)};switch(o){case g:i=m()/12;break;case M:i=m();break;case z:i=m()/3;break;case C:i=(h-d)/6048e5;break;case y:i=(h-d)/864e5;break;case _:i=h/Z;break;case O:i=h/S;break;case b:i=h/Y;break;default:i=h}return e?i:u.a(i)},n.daysInMonth=function(){return this.endOf(M).$D},n.$locale=function(){return p[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=j(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),V=L.prototype;return f.prototype=V,[["$ms",N],["$s",b],["$m",O],["$H",_],["$W",y],["$M",M],["$y",g],["$D",k]].forEach(function(s){V[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,L,f),s.$i=!0),f},f.locale=j,f.isDayjs=F,f.unix=function(s){return f(1e3*s)},f.en=p[H],f.Ls=p,f.p={},f})})(G);var rt=G.exports;const U=nt(rt),B=window.localStorage.getItem("history"),st=q(B?JSON.parse(B):[]);st.subscribe($=>{window.localStorage.setItem("history",JSON.stringify($))});const P=window.localStorage.getItem("isDark"),it=q(P||!0);it.subscribe($=>{window.localStorage.setItem("isDark",$.toString())});const ut=tt(U().format("ddd, hh:mm. D/MMM."),function(A){A(U().format("ddd, hh:mm. D/MMM."));const Y=setInterval(()=>A(U().format("ddd, hh:mm. D/MMM.")),1e3);return function(){clearInterval(Y)}});export{ut as d,st as h,it as i};
