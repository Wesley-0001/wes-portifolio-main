(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();var Hh={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function cM(){if(E_)return nl;E_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var f in r)f!=="key"&&(c[f]=r[f])}else c=r;return r=c.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:c}}return nl.Fragment=e,nl.jsx=n,nl.jsxs=n,nl}var T_;function uM(){return T_||(T_=1,Hh.exports=cM()),Hh.exports}var G=uM(),kh={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function fM(){if(A_)return st;A_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(D,$,me){this.props=D,this.context=$,this.refs=M,this.updater=me||b}x.prototype.isReactComponent={},x.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},x.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function O(){}O.prototype=x.prototype;function L(D,$,me){this.props=D,this.context=$,this.refs=M,this.updater=me||b}var C=L.prototype=new O;C.constructor=L,E(C,x.prototype),C.isPureReactComponent=!0;var V=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function N(D,$,me){var j=me.ref;return{$$typeof:o,type:D,key:$,ref:j!==void 0?j:null,props:me}}function R(D,$){return N(D.type,$,D.props)}function F(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function he(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(me){return $[me]})}var oe=/\/+/g;function xe(D,$){return typeof D=="object"&&D!==null&&D.key!=null?he(""+D.key):$.toString(36)}function ye(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(H,H):(D.status="pending",D.then(function($){D.status==="pending"&&(D.status="fulfilled",D.value=$)},function($){D.status==="pending"&&(D.status="rejected",D.reason=$)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function I(D,$,me,j,le){var ce=typeof D;(ce==="undefined"||ce==="boolean")&&(D=null);var fe=!1;if(D===null)fe=!0;else switch(ce){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(D.$$typeof){case o:case e:fe=!0;break;case _:return fe=D._init,I(fe(D._payload),$,me,j,le)}}if(fe)return le=le(D),fe=j===""?"."+xe(D,0):j,V(le)?(me="",fe!=null&&(me=fe.replace(oe,"$&/")+"/"),I(le,$,me,"",function(Be){return Be})):le!=null&&(F(le)&&(le=R(le,me+(le.key==null||D&&D.key===le.key?"":(""+le.key).replace(oe,"$&/")+"/")+fe)),$.push(le)),1;fe=0;var we=j===""?".":j+":";if(V(D))for(var ze=0;ze<D.length;ze++)j=D[ze],ce=we+xe(j,ze),fe+=I(j,$,me,ce,le);else if(ze=y(D),typeof ze=="function")for(D=ze.call(D),ze=0;!(j=D.next()).done;)j=j.value,ce=we+xe(j,ze++),fe+=I(j,$,me,ce,le);else if(ce==="object"){if(typeof D.then=="function")return I(ye(D),$,me,j,le);throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return fe}function J(D,$,me){if(D==null)return D;var j=[],le=0;return I(D,j,"","",function(ce){return $.call(me,ce,le++)}),j}function Z(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(me){(D._status===0||D._status===-1)&&(D._status=1,D._result=me)},function(me){(D._status===0||D._status===-1)&&(D._status=2,D._result=me)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var re=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},ve={map:J,forEach:function(D,$,me){J(D,function(){$.apply(this,arguments)},me)},count:function(D){var $=0;return J(D,function(){$++}),$},toArray:function(D){return J(D,function($){return $})||[]},only:function(D){if(!F(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return st.Activity=g,st.Children=ve,st.Component=x,st.Fragment=n,st.Profiler=r,st.PureComponent=L,st.StrictMode=a,st.Suspense=d,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,st.__COMPILER_RUNTIME={__proto__:null,c:function(D){return P.H.useMemoCache(D)}},st.cache=function(D){return function(){return D.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(D,$,me){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var j=E({},D.props),le=D.key;if($!=null)for(ce in $.key!==void 0&&(le=""+$.key),$)!q.call($,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&$.ref===void 0||(j[ce]=$[ce]);var ce=arguments.length-2;if(ce===1)j.children=me;else if(1<ce){for(var fe=Array(ce),we=0;we<ce;we++)fe[we]=arguments[we+2];j.children=fe}return N(D.type,le,j)},st.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},st.createElement=function(D,$,me){var j,le={},ce=null;if($!=null)for(j in $.key!==void 0&&(ce=""+$.key),$)q.call($,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(le[j]=$[j]);var fe=arguments.length-2;if(fe===1)le.children=me;else if(1<fe){for(var we=Array(fe),ze=0;ze<fe;ze++)we[ze]=arguments[ze+2];le.children=we}if(D&&D.defaultProps)for(j in fe=D.defaultProps,fe)le[j]===void 0&&(le[j]=fe[j]);return N(D,ce,le)},st.createRef=function(){return{current:null}},st.forwardRef=function(D){return{$$typeof:f,render:D}},st.isValidElement=F,st.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:Z}},st.memo=function(D,$){return{$$typeof:p,type:D,compare:$===void 0?null:$}},st.startTransition=function(D){var $=P.T,me={};P.T=me;try{var j=D(),le=P.S;le!==null&&le(me,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(H,re)}catch(ce){re(ce)}finally{$!==null&&me.types!==null&&($.types=me.types),P.T=$}},st.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},st.use=function(D){return P.H.use(D)},st.useActionState=function(D,$,me){return P.H.useActionState(D,$,me)},st.useCallback=function(D,$){return P.H.useCallback(D,$)},st.useContext=function(D){return P.H.useContext(D)},st.useDebugValue=function(){},st.useDeferredValue=function(D,$){return P.H.useDeferredValue(D,$)},st.useEffect=function(D,$){return P.H.useEffect(D,$)},st.useEffectEvent=function(D){return P.H.useEffectEvent(D)},st.useId=function(){return P.H.useId()},st.useImperativeHandle=function(D,$,me){return P.H.useImperativeHandle(D,$,me)},st.useInsertionEffect=function(D,$){return P.H.useInsertionEffect(D,$)},st.useLayoutEffect=function(D,$){return P.H.useLayoutEffect(D,$)},st.useMemo=function(D,$){return P.H.useMemo(D,$)},st.useOptimistic=function(D,$){return P.H.useOptimistic(D,$)},st.useReducer=function(D,$,me){return P.H.useReducer(D,$,me)},st.useRef=function(D){return P.H.useRef(D)},st.useState=function(D){return P.H.useState(D)},st.useSyncExternalStore=function(D,$,me){return P.H.useSyncExternalStore(D,$,me)},st.useTransition=function(){return P.H.useTransition()},st.version="19.2.4",st}var w_;function Mp(){return w_||(w_=1,kh.exports=fM()),kh.exports}var dt=Mp(),Gh={exports:{}},il={},Vh={exports:{}},jh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function hM(){return R_||(R_=1,(function(o){function e(I,J){var Z=I.length;I.push(J);e:for(;0<Z;){var re=Z-1>>>1,ve=I[re];if(0<r(ve,J))I[re]=J,I[Z]=ve,Z=re;else break e}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var J=I[0],Z=I.pop();if(Z!==J){I[0]=Z;e:for(var re=0,ve=I.length,D=ve>>>1;re<D;){var $=2*(re+1)-1,me=I[$],j=$+1,le=I[j];if(0>r(me,Z))j<ve&&0>r(le,me)?(I[re]=le,I[j]=Z,re=j):(I[re]=me,I[$]=Z,re=$);else if(j<ve&&0>r(le,Z))I[re]=le,I[j]=Z,re=j;else break e}}return J}function r(I,J){var Z=I.sortIndex-J.sortIndex;return Z!==0?Z:I.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var d=[],p=[],_=1,g=null,v=3,y=!1,b=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var J=n(p);J!==null;){if(J.callback===null)a(p);else if(J.startTime<=I)a(p),J.sortIndex=J.expirationTime,e(d,J);else break;J=n(p)}}function V(I){if(E=!1,C(I),!b)if(n(d)!==null)b=!0,H||(H=!0,he());else{var J=n(p);J!==null&&ye(V,J.startTime-I)}}var H=!1,P=-1,q=5,N=-1;function R(){return M?!0:!(o.unstable_now()-N<q)}function F(){if(M=!1,H){var I=o.unstable_now();N=I;var J=!0;try{e:{b=!1,E&&(E=!1,O(P),P=-1),y=!0;var Z=v;try{t:{for(C(I),g=n(d);g!==null&&!(g.expirationTime>I&&R());){var re=g.callback;if(typeof re=="function"){g.callback=null,v=g.priorityLevel;var ve=re(g.expirationTime<=I);if(I=o.unstable_now(),typeof ve=="function"){g.callback=ve,C(I),J=!0;break t}g===n(d)&&a(d),C(I)}else a(d);g=n(d)}if(g!==null)J=!0;else{var D=n(p);D!==null&&ye(V,D.startTime-I),J=!1}}break e}finally{g=null,v=Z,y=!1}J=void 0}}finally{J?he():H=!1}}}var he;if(typeof L=="function")he=function(){L(F)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,xe=oe.port2;oe.port1.onmessage=F,he=function(){xe.postMessage(null)}}else he=function(){x(F,0)};function ye(I,J){P=x(function(){I(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(I){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var Z=v;v=J;try{return I()}finally{v=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(I,J){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=v;v=I;try{return J()}finally{v=Z}},o.unstable_scheduleCallback=function(I,J,Z){var re=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,I){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Z+ve,I={id:_++,callback:J,priorityLevel:I,startTime:Z,expirationTime:ve,sortIndex:-1},Z>re?(I.sortIndex=Z,e(p,I),n(d)===null&&I===n(p)&&(E?(O(P),P=-1):E=!0,ye(V,Z-re))):(I.sortIndex=ve,e(d,I),b||y||(b=!0,H||(H=!0,he()))),I},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(I){var J=v;return function(){var Z=v;v=J;try{return I.apply(this,arguments)}finally{v=Z}}}})(jh)),jh}var C_;function dM(){return C_||(C_=1,Vh.exports=hM()),Vh.exports}var Xh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function pM(){if(D_)return On;D_=1;var o=Mp();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(d,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:d,containerInfo:p,implementation:_}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,On.createPortal=function(d,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(d,p,null,_)},On.flushSync=function(d){var p=u.T,_=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=_,a.d.f()}},On.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},On.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},On.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=f(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},On.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin);a.d.L(d,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(d,p){if(typeof d=="string")if(p){var _=f(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},On.requestFormReset=function(d){a.d.r(d)},On.unstable_batchedUpdates=function(d,p){return d(p)},On.useFormState=function(d,p,_){return u.H.useFormState(d,p,_)},On.useFormStatus=function(){return u.H.useHostTransitionStatus()},On.version="19.2.4",On}var N_;function mM(){if(N_)return Xh.exports;N_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xh.exports=pM(),Xh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function gM(){if(L_)return il;L_=1;var o=dM(),e=Mp(),n=mM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return d(h),t;if(m===l)return d(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=m;else{for(var S=!1,T=h.child;T;){if(T===s){S=!0,s=h,l=m;break}if(T===l){S=!0,l=h,s=m;break}T=T.sibling}if(!S){for(T=m.child;T;){if(T===s){S=!0,s=m,l=h;break}if(T===l){S=!0,l=m,s=h;break}T=T.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case L:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case q:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}var ye=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},re=[],ve=-1;function D(t){return{current:t}}function $(t){0>ve||(t.current=re[ve],re[ve]=null,ve--)}function me(t,i){ve++,re[ve]=t.current,t.current=i}var j=D(null),le=D(null),ce=D(null),fe=D(null);function we(t,i){switch(me(ce,i),me(le,t),me(j,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?q0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=q0(i),t=Y0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(j),me(j,t)}function ze(){$(j),$(le),$(ce)}function Be(t){t.memoizedState!==null&&me(fe,t);var i=j.current,s=Y0(i,t.type);i!==s&&(me(le,t),me(j,s))}function At(t){le.current===t&&($(j),$(le)),fe.current===t&&($(fe),Jo._currentValue=Z)}var wt,lt;function B(t){if(wt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);wt=i&&i[1]||"",lt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wt+t+lt}var xn=!1;function pt(t,i){if(!t||xn)return"";xn=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ue){var ne=ue}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ue){ne=ue}t.call(Me.prototype)}}else{try{throw Error()}catch(ue){ne=ue}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ue){if(ue&&ne&&typeof ue.stack=="string")return[ue.stack,ne.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],T=m[1];if(S&&T){var z=S.split(`
`),te=T.split(`
`);for(h=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;h<te.length&&!te[h].includes("DetermineComponentFrameRoot");)h++;if(l===z.length||h===te.length)for(l=z.length-1,h=te.length-1;1<=l&&0<=h&&z[l]!==te[h];)h--;for(;1<=l&&0<=h;l--,h--)if(z[l]!==te[h]){if(l!==1||h!==1)do if(l--,h--,0>h||z[l]!==te[h]){var pe=`
`+z[l].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=l&&0<=h);break}}}finally{xn=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?B(s):""}function mt(t,i){switch(t.tag){case 26:case 27:case 5:return B(t.type);case 16:return B("Lazy");case 13:return t.child!==i&&i!==null?B("Suspense Fallback"):B("Suspense");case 19:return B("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return B("Activity");default:return""}}function Xe(t){try{var i="",s=null;do i+=mt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var It=Object.prototype.hasOwnProperty,We=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,A=o.unstable_shouldYield,ie=o.unstable_requestPaint,ge=o.unstable_now,Ee=o.unstable_getCurrentPriorityLevel,Se=o.unstable_ImmediatePriority,Ve=o.unstable_UserBlockingPriority,Ce=o.unstable_NormalPriority,Fe=o.unstable_LowPriority,yt=o.unstable_IdlePriority,Ae=o.log,He=o.unstable_setDisableYieldValue,Ze=null,je=null;function Pe(t){if(typeof Ae=="function"&&He(t),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(Ze,t)}catch{}}var $e=Math.clz32?Math.clz32:Y,rt=Math.log,kt=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(rt(t)/kt|0)|0}var De=256,de=262144,be=4194304;function Re(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ne(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var h=0,m=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~m,l!==0?h=Re(l):(S&=T,S!==0?h=Re(S):s||(s=T&~t,s!==0&&(h=Re(s))))):(T=l&~m,T!==0?h=Re(T):S!==0?h=Re(S):s||(s=l&~t,s!==0&&(h=Re(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function et(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Jt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dn(){var t=be;return be<<=1,(be&62914560)===0&&(be=4194304),t}function Dt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Tn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ti(t,i,s,l,h,m){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var T=t.entanglements,z=t.expirationTimes,te=t.hiddenUpdates;for(s=S&~s;0<s;){var pe=31-$e(s),Me=1<<pe;T[pe]=0,z[pe]=-1;var ne=te[pe];if(ne!==null)for(te[pe]=null,pe=0;pe<ne.length;pe++){var ue=ne[pe];ue!==null&&(ue.lane&=-536870913)}s&=~Me}l!==0&&co(t,l,0),m!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=m&~(S&~i))}function co(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-$e(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function uo(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-$e(s),h=1<<l;h&i|t[l]&i&&(t[l]|=i),s&=~h}}function Hi(t,i){var s=i&-i;return s=(s&42)!==0?1:ds(s),(s&(t.suspendedLanes|i))!==0?0:s}function ds(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ys(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fo(){var t=J.p;return t!==0?t:(t=window.event,t===void 0?32:__(t.type))}function ps(t,i){var s=J.p;try{return J.p=t,i()}finally{J.p=s}}var Ai=Math.random().toString(36).slice(2),tn="__reactFiber$"+Ai,An="__reactProps$"+Ai,Qi="__reactContainer$"+Ai,ho="__reactEvents$"+Ai,Uu="__reactListeners$"+Ai,Ou="__reactHandles$"+Ai,Dl="__reactResources$"+Ai,ms="__reactMarker$"+Ai;function po(t){delete t[tn],delete t[An],delete t[ho],delete t[Uu],delete t[Ou]}function w(t){var i=t[tn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Qi]||s[tn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=t_(t);t!==null;){if(s=t[tn])return s;t=t_(t)}return i}t=s,s=t.parentNode}return null}function K(t){if(t=t[tn]||t[Qi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function ae(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function se(t){var i=t[Dl];return i||(i=t[Dl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function W(t){t[ms]=!0}var Te=new Set,Le={};function Oe(t,i){Ie(t,i),Ie(t+"Capture",i)}function Ie(t,i){for(Le[t]=i,t=0;t<i.length;t++)Te.add(i[t])}var tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},qe={};function bt(t){return It.call(qe,t)?!0:It.call(Je,t)?!1:tt.test(t)?qe[t]=!0:(Je[t]=!0,!1)}function Et(t,i,s){if(bt(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Kt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Nt(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pn(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(S){s=""+S,m.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){if(!t._valueTracker){var i=Ke(t)?"checked":"value";t._valueTracker=pn(t,i,""+t[i])}}function qn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ke(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function wi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zn=/[\n"\\]/g;function yn(t){return t.replace(zn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Gt(t,i,s,l,h,m,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+it(i)):t.value!==""+it(i)&&(t.value=""+it(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?Un(t,S,it(i)):s!=null?Un(t,S,it(s)):l!=null&&t.removeAttribute("value"),h==null&&m!=null&&(t.defaultChecked=!!m),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+it(T):t.removeAttribute("name")}function Bn(t,i,s,l,h,m,S,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Rt(t);return}s=s!=null?""+it(s):"",i=i!=null?""+it(i):s,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Rt(t)}function Un(t,i,s){i==="number"&&wi(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function nn(t,i,s,l){if(t=t.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=i.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&l&&(t[s].defaultSelected=!0)}else{for(s=""+it(s),i=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function wn(t,i,s){if(i!=null&&(i=""+it(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+it(s):""}function Ks(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ye(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=it(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Rt(t)}function Yn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var ay=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jp(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||ay.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Xp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&jp(t,h,l)}else for(var m in i)i.hasOwnProperty(m)&&jp(t,m,i[m])}function Pu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ry=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(t){return ry.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ji(){}var Iu=null;function zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zs=null,Qs=null;function Wp(t){var i=K(t);if(i&&(t=i.stateNode)){var s=t[An]||null;e:switch(t=i.stateNode,i.type){case"input":if(Gt(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var h=l[An]||null;if(!h)throw Error(a(90));Gt(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&qn(l)}break e;case"textarea":wn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&nn(t,!!s.multiple,i,!1)}}}var Bu=!1;function qp(t,i,s){if(Bu)return t(i,s);Bu=!0;try{var l=t(i);return l}finally{if(Bu=!1,(Zs!==null||Qs!==null)&&(vc(),Zs&&(i=Zs,t=Qs,Qs=Zs=null,Wp(i),t)))for(i=0;i<t.length;i++)Wp(t[i])}}function mo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[An]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=!1;if($i)try{var go={};Object.defineProperty(go,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Fu=!1}var Da=null,Hu=null,Ll=null;function Yp(){if(Ll)return Ll;var t,i=Hu,s=i.length,l,h="value"in Da?Da.value:Da.textContent,m=h.length;for(t=0;t<s&&i[t]===h[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===h[m-l];l++);return Ll=h.slice(t,1<l?1-l:void 0)}function Ul(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function Kp(){return!1}function Kn(t){function i(s,l,h,m,S){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(s=t[T],this[T]=s?s(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ol:Kp,this.isPropagationStopped=Kp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Kn(gs),_o=g({},gs,{view:0,detail:0}),oy=Kn(_o),ku,Gu,vo,Il=g({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(ku=t.screenX-vo.screenX,Gu=t.screenY-vo.screenY):Gu=ku=0,vo=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),Zp=Kn(Il),ly=g({},Il,{dataTransfer:0}),cy=Kn(ly),uy=g({},_o,{relatedTarget:0}),Vu=Kn(uy),fy=g({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),hy=Kn(fy),dy=g({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),py=Kn(dy),my=g({},gs,{data:0}),Qp=Kn(my),gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=vy[t])?!!i[t]:!1}function ju(){return xy}var yy=g({},_o,{key:function(t){if(t.key){var i=gy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_y[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sy=Kn(yy),My=g({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Kn(My),by=g({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Ey=Kn(by),Ty=g({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=Kn(Ty),wy=g({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ry=Kn(wy),Cy=g({},gs,{newState:0,oldState:0}),Dy=Kn(Cy),Ny=[9,13,27,32],Xu=$i&&"CompositionEvent"in window,xo=null;$i&&"documentMode"in document&&(xo=document.documentMode);var Ly=$i&&"TextEvent"in window&&!xo,$p=$i&&(!Xu||xo&&8<xo&&11>=xo),em=" ",tm=!1;function nm(t,i){switch(t){case"keyup":return Ny.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function Uy(t,i){switch(t){case"compositionend":return im(i);case"keypress":return i.which!==32?null:(tm=!0,em);case"textInput":return t=i.data,t===em&&tm?null:t;default:return null}}function Oy(t,i){if(Js)return t==="compositionend"||!Xu&&nm(t,i)?(t=Yp(),Ll=Hu=Da=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $p&&i.locale!=="ko"?null:i.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Py[t.type]:i==="textarea"}function sm(t,i,s,l){Zs?Qs?Qs.push(l):Qs=[l]:Zs=l,i=Tc(i,"onChange"),0<i.length&&(s=new Pl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var yo=null,So=null;function Iy(t){k0(t,0)}function zl(t){var i=ae(t);if(qn(i))return t}function rm(t,i){if(t==="change")return i}var om=!1;if($i){var Wu;if($i){var qu="oninput"in document;if(!qu){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),qu=typeof lm.oninput=="function"}Wu=qu}else Wu=!1;om=Wu&&(!document.documentMode||9<document.documentMode)}function cm(){yo&&(yo.detachEvent("onpropertychange",um),So=yo=null)}function um(t){if(t.propertyName==="value"&&zl(So)){var i=[];sm(i,So,t,zu(t)),qp(Iy,i)}}function zy(t,i,s){t==="focusin"?(cm(),yo=i,So=s,yo.attachEvent("onpropertychange",um)):t==="focusout"&&cm()}function By(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(So)}function Fy(t,i){if(t==="click")return zl(i)}function Hy(t,i){if(t==="input"||t==="change")return zl(i)}function ky(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:ky;function Mo(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!It.call(i,h)||!ii(t[h],i[h]))return!1}return!0}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,i){var s=fm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=fm(s)}}function dm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?dm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function pm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=wi(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=wi(t.document)}return i}function Yu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Gy=$i&&"documentMode"in document&&11>=document.documentMode,$s=null,Ku=null,bo=null,Zu=!1;function mm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Zu||$s==null||$s!==wi(l)||(l=$s,"selectionStart"in l&&Yu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bo&&Mo(bo,l)||(bo=l,l=Tc(Ku,"onSelect"),0<l.length&&(i=new Pl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=$s)))}function _s(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var er={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},Qu={},gm={};$i&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function vs(t){if(Qu[t])return Qu[t];if(!er[t])return t;var i=er[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in gm)return Qu[t]=i[s];return t}var _m=vs("animationend"),vm=vs("animationiteration"),xm=vs("animationstart"),Vy=vs("transitionrun"),jy=vs("transitionstart"),Xy=vs("transitioncancel"),ym=vs("transitionend"),Sm=new Map,Ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ju.push("scrollEnd");function Ri(t,i){Sm.set(t,i),Oe(i,[t])}var Bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],tr=0,$u=0;function Fl(){for(var t=tr,i=$u=tr=0;i<t;){var s=pi[i];pi[i++]=null;var l=pi[i];pi[i++]=null;var h=pi[i];pi[i++]=null;var m=pi[i];if(pi[i++]=null,l!==null&&h!==null){var S=l.pending;S===null?h.next=h:(h.next=S.next,S.next=h),l.pending=h}m!==0&&Mm(s,h,m)}}function Hl(t,i,s,l){pi[tr++]=t,pi[tr++]=i,pi[tr++]=s,pi[tr++]=l,$u|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ef(t,i,s,l){return Hl(t,i,s,l),kl(t)}function xs(t,i){return Hl(t,null,null,i),kl(t)}function Mm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var h=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(h=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,h&&i!==null&&(h=31-$e(s),t=m.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=s|536870912),m):null}function kl(t){if(50<Xo)throw Xo=0,uh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var nr={};function Wy(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,i,s,l){return new Wy(t,i,s,l)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,i){var s=t.alternate;return s===null?(s=ai(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function bm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Gl(t,i,s,l,h,m){var S=0;if(l=t,typeof t=="function")tf(t)&&(S=1);else if(typeof t=="string")S=QS(t,s,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ai(31,s,i,h),t.elementType=N,t.lanes=m,t;case E:return ys(s.children,h,m,i);case M:S=8,h|=24;break;case x:return t=ai(12,s,i,h|2),t.elementType=x,t.lanes=m,t;case V:return t=ai(13,s,i,h),t.elementType=V,t.lanes=m,t;case H:return t=ai(19,s,i,h),t.elementType=H,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case O:S=9;break e;case C:S=11;break e;case P:S=14;break e;case q:S=16,l=null;break e}S=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ai(S,s,i,h),i.elementType=t,i.type=l,i.lanes=m,i}function ys(t,i,s,l){return t=ai(7,t,l,i),t.lanes=s,t}function nf(t,i,s){return t=ai(6,t,null,i),t.lanes=s,t}function Em(t){var i=ai(18,null,null,0);return i.stateNode=t,i}function af(t,i,s){return i=ai(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Tm=new WeakMap;function mi(t,i){if(typeof t=="object"&&t!==null){var s=Tm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Xe(i)},Tm.set(t,i),i)}return{value:t,source:i,stack:Xe(i)}}var ir=[],ar=0,Vl=null,Eo=0,gi=[],_i=0,Na=null,ki=1,Gi="";function ta(t,i){ir[ar++]=Eo,ir[ar++]=Vl,Vl=t,Eo=i}function Am(t,i,s){gi[_i++]=ki,gi[_i++]=Gi,gi[_i++]=Na,Na=t;var l=ki;t=Gi;var h=32-$e(l)-1;l&=~(1<<h),s+=1;var m=32-$e(i)+h;if(30<m){var S=h-h%5;m=(l&(1<<S)-1).toString(32),l>>=S,h-=S,ki=1<<32-$e(i)+h|s<<h|l,Gi=m+t}else ki=1<<m|s<<h|l,Gi=t}function sf(t){t.return!==null&&(ta(t,1),Am(t,1,0))}function rf(t){for(;t===Vl;)Vl=ir[--ar],ir[ar]=null,Eo=ir[--ar],ir[ar]=null;for(;t===Na;)Na=gi[--_i],gi[_i]=null,Gi=gi[--_i],gi[_i]=null,ki=gi[--_i],gi[_i]=null}function wm(t,i){gi[_i++]=ki,gi[_i++]=Gi,gi[_i++]=Na,ki=i.id,Gi=i.overflow,Na=t}var Rn=null,Zt=null,Tt=!1,La=null,vi=!1,of=Error(a(519));function Ua(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw To(mi(i,t)),of}function Rm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[tn]=t,i[An]=l,s){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(s=0;s<qo.length;s++)vt(qo[s],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":vt("invalid",i),Bn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":vt("invalid",i);break;case"textarea":vt("invalid",i),Ks(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||X0(i.textContent,s)?(l.popover!=null&&(vt("beforetoggle",i),vt("toggle",i)),l.onScroll!=null&&vt("scroll",i),l.onScrollEnd!=null&&vt("scrollend",i),l.onClick!=null&&(i.onclick=Ji),i=!0):i=!1,i||Ua(t,!0)}function Cm(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Rn=Rn.return}}function sr(t){if(t!==Rn)return!1;if(!Tt)return Cm(t),Tt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Th(t.type,t.memoizedProps)),s=!s),s&&Zt&&Ua(t),Cm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Zt=e_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Zt=e_(t)}else i===27?(i=Zt,qa(t.type)?(t=Dh,Dh=null,Zt=t):Zt=i):Zt=Rn?yi(t.stateNode.nextSibling):null;return!0}function Ss(){Zt=Rn=null,Tt=!1}function lf(){var t=La;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),La=null),t}function To(t){La===null?La=[t]:La.push(t)}var cf=D(null),Ms=null,na=null;function Oa(t,i,s){me(cf,i._currentValue),i._currentValue=s}function ia(t){t._currentValue=cf.current,$(cf)}function uf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ff(t,i,s,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var m=h.dependencies;if(m!==null){var S=h.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=h;for(var z=0;z<i.length;z++)if(T.context===i[z]){m.lanes|=s,T=m.alternate,T!==null&&(T.lanes|=s),uf(m.return,s,t),l||(S=null);break e}m=T.next}}else if(h.tag===18){if(S=h.return,S===null)throw Error(a(341));S.lanes|=s,m=S.alternate,m!==null&&(m.lanes|=s),uf(S,s,t),S=null}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===t){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}}function rr(t,i,s,l){t=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var S=h.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var T=h.type;ii(h.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(h===fe.current){if(S=h.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Jo):t=[Jo])}h=h.return}t!==null&&ff(i,t,s,l),i.flags|=262144}function jl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bs(t){Ms=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Dm(Ms,t)}function Xl(t,i){return Ms===null&&bs(t),Dm(t,i)}function Dm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},na===null){if(t===null)throw Error(a(308));na=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else na=na.next=i;return s}var qy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Yy=o.unstable_scheduleCallback,Ky=o.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new qy,data:new Map,refCount:0}}function Ao(t){t.refCount--,t.refCount===0&&Yy(Ky,function(){t.controller.abort()})}var wo=null,df=0,or=0,lr=null;function Zy(t,i){if(wo===null){var s=wo=[];df=0,or=gh(),lr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return df++,i.then(Nm,Nm),i}function Nm(){if(--df===0&&wo!==null){lr!==null&&(lr.status="fulfilled");var t=wo;wo=null,or=0,lr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Qy(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var Lm=I.S;I.S=function(t,i){m0=ge(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Zy(t,i),Lm!==null&&Lm(t,i)};var Es=D(null);function pf(){var t=Es.current;return t!==null?t:Yt.pooledCache}function Wl(t,i){i===null?me(Es,Es.current):me(Es,i.pool)}function Um(){var t=pf();return t===null?null:{parent:ln._currentValue,pool:t}}var cr=Error(a(460)),mf=Error(a(474)),ql=Error(a(542)),Yl={then:function(){}};function Om(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Ji,Ji),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,zm(t),t;default:if(typeof i.status=="string")i.then(Ji,Ji);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,zm(t),t}throw As=i,cr}}function Ts(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(As=s,cr):s}}var As=null;function Im(){if(As===null)throw Error(a(459));var t=As;return As=null,t}function zm(t){if(t===cr||t===ql)throw Error(a(483))}var ur=null,Ro=0;function Kl(t){var i=Ro;return Ro+=1,ur===null&&(ur=[]),Pm(ur,t,i)}function Co(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Zl(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Bm(t){function i(Q,k){if(t){var ee=Q.deletions;ee===null?(Q.deletions=[k],Q.flags|=16):ee.push(k)}}function s(Q,k){if(!t)return null;for(;k!==null;)i(Q,k),k=k.sibling;return null}function l(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function h(Q,k){return Q=ea(Q,k),Q.index=0,Q.sibling=null,Q}function m(Q,k,ee){return Q.index=ee,t?(ee=Q.alternate,ee!==null?(ee=ee.index,ee<k?(Q.flags|=67108866,k):ee):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function T(Q,k,ee,_e){return k===null||k.tag!==6?(k=nf(ee,Q.mode,_e),k.return=Q,k):(k=h(k,ee),k.return=Q,k)}function z(Q,k,ee,_e){var Ye=ee.type;return Ye===E?pe(Q,k,ee.props.children,_e,ee.key):k!==null&&(k.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===q&&Ts(Ye)===k.type)?(k=h(k,ee.props),Co(k,ee),k.return=Q,k):(k=Gl(ee.type,ee.key,ee.props,null,Q.mode,_e),Co(k,ee),k.return=Q,k)}function te(Q,k,ee,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==ee.containerInfo||k.stateNode.implementation!==ee.implementation?(k=af(ee,Q.mode,_e),k.return=Q,k):(k=h(k,ee.children||[]),k.return=Q,k)}function pe(Q,k,ee,_e,Ye){return k===null||k.tag!==7?(k=ys(ee,Q.mode,_e,Ye),k.return=Q,k):(k=h(k,ee),k.return=Q,k)}function Me(Q,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=nf(""+k,Q.mode,ee),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return ee=Gl(k.type,k.key,k.props,null,Q.mode,ee),Co(ee,k),ee.return=Q,ee;case b:return k=af(k,Q.mode,ee),k.return=Q,k;case q:return k=Ts(k),Me(Q,k,ee)}if(ye(k)||he(k))return k=ys(k,Q.mode,ee,null),k.return=Q,k;if(typeof k.then=="function")return Me(Q,Kl(k),ee);if(k.$$typeof===L)return Me(Q,Xl(Q,k),ee);Zl(Q,k)}return null}function ne(Q,k,ee,_e){var Ye=k!==null?k.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Ye!==null?null:T(Q,k,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:return ee.key===Ye?z(Q,k,ee,_e):null;case b:return ee.key===Ye?te(Q,k,ee,_e):null;case q:return ee=Ts(ee),ne(Q,k,ee,_e)}if(ye(ee)||he(ee))return Ye!==null?null:pe(Q,k,ee,_e,null);if(typeof ee.then=="function")return ne(Q,k,Kl(ee),_e);if(ee.$$typeof===L)return ne(Q,k,Xl(Q,ee),_e);Zl(Q,ee)}return null}function ue(Q,k,ee,_e,Ye){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Q=Q.get(ee)||null,T(k,Q,""+_e,Ye);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case y:return Q=Q.get(_e.key===null?ee:_e.key)||null,z(k,Q,_e,Ye);case b:return Q=Q.get(_e.key===null?ee:_e.key)||null,te(k,Q,_e,Ye);case q:return _e=Ts(_e),ue(Q,k,ee,_e,Ye)}if(ye(_e)||he(_e))return Q=Q.get(ee)||null,pe(k,Q,_e,Ye,null);if(typeof _e.then=="function")return ue(Q,k,ee,Kl(_e),Ye);if(_e.$$typeof===L)return ue(Q,k,ee,Xl(k,_e),Ye);Zl(k,_e)}return null}function ke(Q,k,ee,_e){for(var Ye=null,Lt=null,Ge=k,ct=k=0,Mt=null;Ge!==null&&ct<ee.length;ct++){Ge.index>ct?(Mt=Ge,Ge=null):Mt=Ge.sibling;var Ut=ne(Q,Ge,ee[ct],_e);if(Ut===null){Ge===null&&(Ge=Mt);break}t&&Ge&&Ut.alternate===null&&i(Q,Ge),k=m(Ut,k,ct),Lt===null?Ye=Ut:Lt.sibling=Ut,Lt=Ut,Ge=Mt}if(ct===ee.length)return s(Q,Ge),Tt&&ta(Q,ct),Ye;if(Ge===null){for(;ct<ee.length;ct++)Ge=Me(Q,ee[ct],_e),Ge!==null&&(k=m(Ge,k,ct),Lt===null?Ye=Ge:Lt.sibling=Ge,Lt=Ge);return Tt&&ta(Q,ct),Ye}for(Ge=l(Ge);ct<ee.length;ct++)Mt=ue(Ge,Q,ct,ee[ct],_e),Mt!==null&&(t&&Mt.alternate!==null&&Ge.delete(Mt.key===null?ct:Mt.key),k=m(Mt,k,ct),Lt===null?Ye=Mt:Lt.sibling=Mt,Lt=Mt);return t&&Ge.forEach(function(Ja){return i(Q,Ja)}),Tt&&ta(Q,ct),Ye}function Qe(Q,k,ee,_e){if(ee==null)throw Error(a(151));for(var Ye=null,Lt=null,Ge=k,ct=k=0,Mt=null,Ut=ee.next();Ge!==null&&!Ut.done;ct++,Ut=ee.next()){Ge.index>ct?(Mt=Ge,Ge=null):Mt=Ge.sibling;var Ja=ne(Q,Ge,Ut.value,_e);if(Ja===null){Ge===null&&(Ge=Mt);break}t&&Ge&&Ja.alternate===null&&i(Q,Ge),k=m(Ja,k,ct),Lt===null?Ye=Ja:Lt.sibling=Ja,Lt=Ja,Ge=Mt}if(Ut.done)return s(Q,Ge),Tt&&ta(Q,ct),Ye;if(Ge===null){for(;!Ut.done;ct++,Ut=ee.next())Ut=Me(Q,Ut.value,_e),Ut!==null&&(k=m(Ut,k,ct),Lt===null?Ye=Ut:Lt.sibling=Ut,Lt=Ut);return Tt&&ta(Q,ct),Ye}for(Ge=l(Ge);!Ut.done;ct++,Ut=ee.next())Ut=ue(Ge,Q,ct,Ut.value,_e),Ut!==null&&(t&&Ut.alternate!==null&&Ge.delete(Ut.key===null?ct:Ut.key),k=m(Ut,k,ct),Lt===null?Ye=Ut:Lt.sibling=Ut,Lt=Ut);return t&&Ge.forEach(function(lM){return i(Q,lM)}),Tt&&ta(Q,ct),Ye}function Xt(Q,k,ee,_e){if(typeof ee=="object"&&ee!==null&&ee.type===E&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:e:{for(var Ye=ee.key;k!==null;){if(k.key===Ye){if(Ye=ee.type,Ye===E){if(k.tag===7){s(Q,k.sibling),_e=h(k,ee.props.children),_e.return=Q,Q=_e;break e}}else if(k.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===q&&Ts(Ye)===k.type){s(Q,k.sibling),_e=h(k,ee.props),Co(_e,ee),_e.return=Q,Q=_e;break e}s(Q,k);break}else i(Q,k);k=k.sibling}ee.type===E?(_e=ys(ee.props.children,Q.mode,_e,ee.key),_e.return=Q,Q=_e):(_e=Gl(ee.type,ee.key,ee.props,null,Q.mode,_e),Co(_e,ee),_e.return=Q,Q=_e)}return S(Q);case b:e:{for(Ye=ee.key;k!==null;){if(k.key===Ye)if(k.tag===4&&k.stateNode.containerInfo===ee.containerInfo&&k.stateNode.implementation===ee.implementation){s(Q,k.sibling),_e=h(k,ee.children||[]),_e.return=Q,Q=_e;break e}else{s(Q,k);break}else i(Q,k);k=k.sibling}_e=af(ee,Q.mode,_e),_e.return=Q,Q=_e}return S(Q);case q:return ee=Ts(ee),Xt(Q,k,ee,_e)}if(ye(ee))return ke(Q,k,ee,_e);if(he(ee)){if(Ye=he(ee),typeof Ye!="function")throw Error(a(150));return ee=Ye.call(ee),Qe(Q,k,ee,_e)}if(typeof ee.then=="function")return Xt(Q,k,Kl(ee),_e);if(ee.$$typeof===L)return Xt(Q,k,Xl(Q,ee),_e);Zl(Q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,k!==null&&k.tag===6?(s(Q,k.sibling),_e=h(k,ee),_e.return=Q,Q=_e):(s(Q,k),_e=nf(ee,Q.mode,_e),_e.return=Q,Q=_e),S(Q)):s(Q,k)}return function(Q,k,ee,_e){try{Ro=0;var Ye=Xt(Q,k,ee,_e);return ur=null,Ye}catch(Ge){if(Ge===cr||Ge===ql)throw Ge;var Lt=ai(29,Ge,null,Q.mode);return Lt.lanes=_e,Lt.return=Q,Lt}finally{}}}var ws=Bm(!0),Fm=Bm(!1),Pa=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ot&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=kl(t),Mm(t,null,s),i}return Hl(t,l,i,s),kl(t)}function Do(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,uo(t,s)}}function vf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=S:m=m.next=S,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var xf=!1;function No(){if(xf){var t=lr;if(t!==null)throw t}}function Lo(t,i,s,l){xf=!1;var h=t.updateQueue;Pa=!1;var m=h.firstBaseUpdate,S=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var z=T,te=z.next;z.next=null,S===null?m=te:S.next=te,S=z;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,T=pe.lastBaseUpdate,T!==S&&(T===null?pe.firstBaseUpdate=te:T.next=te,pe.lastBaseUpdate=z))}if(m!==null){var Me=h.baseState;S=0,pe=te=z=null,T=m;do{var ne=T.lane&-536870913,ue=ne!==T.lane;if(ue?(St&ne)===ne:(l&ne)===ne){ne!==0&&ne===or&&(xf=!0),pe!==null&&(pe=pe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ke=t,Qe=T;ne=i;var Xt=s;switch(Qe.tag){case 1:if(ke=Qe.payload,typeof ke=="function"){Me=ke.call(Xt,Me,ne);break e}Me=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Qe.payload,ne=typeof ke=="function"?ke.call(Xt,Me,ne):ke,ne==null)break e;Me=g({},Me,ne);break e;case 2:Pa=!0}}ne=T.callback,ne!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=h.callbacks,ue===null?h.callbacks=[ne]:ue.push(ne))}else ue={lane:ne,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pe===null?(te=pe=ue,z=Me):pe=pe.next=ue,S|=ne;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;ue=T,T=ue.next,ue.next=null,h.lastBaseUpdate=ue,h.shared.pending=null}}while(!0);pe===null&&(z=Me),h.baseState=z,h.firstBaseUpdate=te,h.lastBaseUpdate=pe,m===null&&(h.shared.lanes=0),Ga|=S,t.lanes=S,t.memoizedState=Me}}function Hm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function km(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Hm(s[t],i)}var fr=D(null),Ql=D(0);function Gm(t,i){t=ha,me(Ql,t),me(fr,i),ha=t|i.baseLanes}function yf(){me(Ql,ha),me(fr,fr.current)}function Sf(){ha=Ql.current,$(fr),$(Ql)}var si=D(null),xi=null;function Ba(t){var i=t.alternate;me(rn,rn.current&1),me(si,t),xi===null&&(i===null||fr.current!==null||i.memoizedState!==null)&&(xi=t)}function Mf(t){me(rn,rn.current),me(si,t),xi===null&&(xi=t)}function Vm(t){t.tag===22?(me(rn,rn.current),me(si,t),xi===null&&(xi=t)):Fa()}function Fa(){me(rn,rn.current),me(si,si.current)}function ri(t){$(si),xi===t&&(xi=null),$(rn)}var rn=D(0);function Jl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Rh(s)||Ch(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var aa=0,ot=null,Vt=null,cn=null,$l=!1,hr=!1,Rs=!1,ec=0,Uo=0,dr=null,Jy=0;function an(){throw Error(a(321))}function bf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ii(t[s],i[s]))return!1;return!0}function Ef(t,i,s,l,h,m){return aa=m,ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?Ag:Ff,Rs=!1,m=s(l,h),Rs=!1,hr&&(m=Xm(i,s,l,h)),jm(t),m}function jm(t){I.H=Io;var i=Vt!==null&&Vt.next!==null;if(aa=0,cn=Vt=ot=null,$l=!1,Uo=0,dr=null,i)throw Error(a(300));t===null||un||(t=t.dependencies,t!==null&&jl(t)&&(un=!0))}function Xm(t,i,s,l){ot=t;var h=0;do{if(hr&&(dr=null),Uo=0,hr=!1,25<=h)throw Error(a(301));if(h+=1,cn=Vt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=wg,m=i(s,l)}while(hr);return m}function $y(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?Oo(i):i,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(ot.flags|=1024),i}function Tf(){var t=ec!==0;return ec=0,t}function Af(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function wf(t){if($l){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}$l=!1}aa=0,cn=Vt=ot=null,hr=!1,Uo=ec=0,dr=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ot.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(Vt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var i=cn===null?ot.memoizedState:cn.next;if(i!==null)cn=i,Vt=t;else{if(t===null)throw ot.alternate===null?Error(a(467)):Error(a(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},cn===null?ot.memoizedState=cn=t:cn=cn.next=t}return cn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oo(t){var i=Uo;return Uo+=1,dr===null&&(dr=[]),t=Pm(dr,t,i),i=ot,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Ag:Ff),t}function nc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Oo(t);if(t.$$typeof===L)return Cn(t)}throw Error(a(438,String(t)))}function Rf(t){var i=null,s=ot.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ot.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=tc(),ot.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=R;return i.index++,s}function sa(t,i){return typeof i=="function"?i(t):i}function ic(t){var i=on();return Cf(i,Vt,t)}function Cf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=t.baseQueue,m=l.pending;if(m!==null){if(h!==null){var S=h.next;h.next=m.next,m.next=S}i.baseQueue=h=m,l.pending=null}if(m=t.baseState,h===null)t.memoizedState=m;else{i=h.next;var T=S=null,z=null,te=i,pe=!1;do{var Me=te.lane&-536870913;if(Me!==te.lane?(St&Me)===Me:(aa&Me)===Me){var ne=te.revertLane;if(ne===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),Me===or&&(pe=!0);else if((aa&ne)===ne){te=te.next,ne===or&&(pe=!0);continue}else Me={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(T=z=Me,S=m):z=z.next=Me,ot.lanes|=ne,Ga|=ne;Me=te.action,Rs&&s(m,Me),m=te.hasEagerState?te.eagerState:s(m,Me)}else ne={lane:Me,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(T=z=ne,S=m):z=z.next=ne,ot.lanes|=Me,Ga|=Me;te=te.next}while(te!==null&&te!==i);if(z===null?S=m:z.next=T,!ii(m,t.memoizedState)&&(un=!0,pe&&(s=lr,s!==null)))throw s;t.memoizedState=m,t.baseState=S,t.baseQueue=z,l.lastRenderedState=m}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Df(t){var i=on(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var S=h=h.next;do m=t(m,S.action),S=S.next;while(S!==h);ii(m,i.memoizedState)||(un=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Wm(t,i,s){var l=ot,h=on(),m=Tt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!ii((Vt||h).memoizedState,s);if(S&&(h.memoizedState=s,un=!0),h=h.queue,Uf(Km.bind(null,l,h,t),[t]),h.getSnapshot!==i||S||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,pr(9,{destroy:void 0},Ym.bind(null,l,h,s,i),null),Yt===null)throw Error(a(349));m||(aa&127)!==0||qm(l,i,s)}return s}function qm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ot.updateQueue,i===null?(i=tc(),ot.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Ym(t,i,s,l){i.value=s,i.getSnapshot=l,Zm(i)&&Qm(t)}function Km(t,i,s){return s(function(){Zm(i)&&Qm(t)})}function Zm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ii(t,s)}catch{return!0}}function Qm(t){var i=xs(t,2);i!==null&&ei(i,t,2)}function Nf(t){var i=Fn();if(typeof t=="function"){var s=t;if(t=s(),Rs){Pe(!0);try{s()}finally{Pe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},i}function Jm(t,i,s,l){return t.baseState=s,Cf(t,Vt,typeof l=="function"?l:sa)}function eS(t,i,s,l,h){if(rc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};I.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,$m(i,m)):(m.next=s.next,i.pending=s.next=m)}}function $m(t,i){var s=i.action,l=i.payload,h=t.state;if(i.isTransition){var m=I.T,S={};I.T=S;try{var T=s(h,l),z=I.S;z!==null&&z(S,T),eg(t,i,T)}catch(te){Lf(t,i,te)}finally{m!==null&&S.types!==null&&(m.types=S.types),I.T=m}}else try{m=s(h,l),eg(t,i,m)}catch(te){Lf(t,i,te)}}function eg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){tg(t,i,l)},function(l){return Lf(t,i,l)}):tg(t,i,s)}function tg(t,i,s){i.status="fulfilled",i.value=s,ng(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,$m(t,s)))}function Lf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,ng(i),i=i.next;while(i!==l)}t.action=null}function ng(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ig(t,i){return i}function ag(t,i){if(Tt){var s=Yt.formState;if(s!==null){e:{var l=ot;if(Tt){if(Zt){t:{for(var h=Zt,m=vi;h.nodeType!==8;){if(!m){h=null;break t}if(h=yi(h.nextSibling),h===null){h=null;break t}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Zt=yi(h.nextSibling),l=h.data==="F!";break e}}Ua(l)}l=!1}l&&(i=s[0])}}return s=Fn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ig,lastRenderedState:i},s.queue=l,s=bg.bind(null,ot,l),l.dispatch=s,l=Nf(!1),m=Bf.bind(null,ot,!1,l.queue),l=Fn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,s=eS.bind(null,ot,h,m,s),h.dispatch=s,l.memoizedState=t,[i,s,!1]}function sg(t){var i=on();return rg(i,Vt,t)}function rg(t,i,s){if(i=Cf(t,i,ig)[0],t=ic(sa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Oo(i)}catch(S){throw S===cr?ql:S}else l=i;i=on();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(ot.flags|=2048,pr(9,{destroy:void 0},tS.bind(null,h,s),null)),[l,m,t]}function tS(t,i){t.action=i}function og(t){var i=on(),s=Vt;if(s!==null)return rg(i,s,t);on(),i=i.memoizedState,s=on();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function pr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ot.updateQueue,i===null&&(i=tc(),ot.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function lg(){return on().memoizedState}function ac(t,i,s,l){var h=Fn();ot.flags|=t,h.memoizedState=pr(1|i,{destroy:void 0},s,l===void 0?null:l)}function sc(t,i,s,l){var h=on();l=l===void 0?null:l;var m=h.memoizedState.inst;Vt!==null&&l!==null&&bf(l,Vt.memoizedState.deps)?h.memoizedState=pr(i,m,s,l):(ot.flags|=t,h.memoizedState=pr(1|i,m,s,l))}function cg(t,i){ac(8390656,8,t,i)}function Uf(t,i){sc(2048,8,t,i)}function nS(t){ot.flags|=4;var i=ot.updateQueue;if(i===null)i=tc(),ot.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function ug(t){var i=on().memoizedState;return nS({ref:i,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function fg(t,i){return sc(4,2,t,i)}function hg(t,i){return sc(4,4,t,i)}function dg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function pg(t,i,s){s=s!=null?s.concat([t]):null,sc(4,4,dg.bind(null,i,t),s)}function Of(){}function mg(t,i){var s=on();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&bf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function gg(t,i){var s=on();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&bf(i,l[1]))return l[0];if(l=t(),Rs){Pe(!0);try{t()}finally{Pe(!1)}}return s.memoizedState=[l,i],l}function Pf(t,i,s){return s===void 0||(aa&1073741824)!==0&&(St&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=_0(),ot.lanes|=t,Ga|=t,s)}function _g(t,i,s,l){return ii(s,i)?s:fr.current!==null?(t=Pf(t,s,l),ii(t,i)||(un=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(St&261930)===0?(un=!0,t.memoizedState=s):(t=_0(),ot.lanes|=t,Ga|=t,i)}function vg(t,i,s,l,h){var m=J.p;J.p=m!==0&&8>m?m:8;var S=I.T,T={};I.T=T,Bf(t,!1,i,s);try{var z=h(),te=I.S;if(te!==null&&te(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var pe=Qy(z,l);Po(t,i,pe,ci(t))}else Po(t,i,l,ci(t))}catch(Me){Po(t,i,{then:function(){},status:"rejected",reason:Me},ci())}finally{J.p=m,S!==null&&T.types!==null&&(S.types=T.types),I.T=S}}function iS(){}function If(t,i,s,l){if(t.tag!==5)throw Error(a(476));var h=xg(t).queue;vg(t,h,i,Z,s===null?iS:function(){return yg(t),s(l)})}function xg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:Z},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function yg(t){var i=xg(t);i.next===null&&(i=t.alternate.memoizedState),Po(t,i.next.queue,{},ci())}function zf(){return Cn(Jo)}function Sg(){return on().memoizedState}function Mg(){return on().memoizedState}function aS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ci();t=Ia(s);var l=za(i,t,s);l!==null&&(ei(l,i,s),Do(l,i,s)),i={cache:hf()},t.payload=i;return}i=i.return}}function sS(t,i,s){var l=ci();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},rc(t)?Eg(i,s):(s=ef(t,i,s,l),s!==null&&(ei(s,t,l),Tg(s,i,l)))}function bg(t,i,s){var l=ci();Po(t,i,s,l)}function Po(t,i,s,l){var h={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(rc(t))Eg(i,h);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var S=i.lastRenderedState,T=m(S,s);if(h.hasEagerState=!0,h.eagerState=T,ii(T,S))return Hl(t,i,h,0),Yt===null&&Fl(),!1}catch{}finally{}if(s=ef(t,i,h,l),s!==null)return ei(s,t,l),Tg(s,i,l),!0}return!1}function Bf(t,i,s,l){if(l={lane:2,revertLane:gh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},rc(t)){if(i)throw Error(a(479))}else i=ef(t,s,l,2),i!==null&&ei(i,t,2)}function rc(t){var i=t.alternate;return t===ot||i!==null&&i===ot}function Eg(t,i){hr=$l=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Tg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,uo(t,s)}}var Io={readContext:Cn,use:nc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Io.useEffectEvent=an;var Ag={readContext:Cn,use:nc,useCallback:function(t,i){return Fn().memoizedState=[t,i===void 0?null:i],t},useContext:Cn,useEffect:cg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,ac(4194308,4,dg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ac(4194308,4,t,i)},useInsertionEffect:function(t,i){ac(4,2,t,i)},useMemo:function(t,i){var s=Fn();i=i===void 0?null:i;var l=t();if(Rs){Pe(!0);try{t()}finally{Pe(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Fn();if(s!==void 0){var h=s(i);if(Rs){Pe(!0);try{s(i)}finally{Pe(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=sS.bind(null,ot,t),[l.memoizedState,t]},useRef:function(t){var i=Fn();return t={current:t},i.memoizedState=t},useState:function(t){t=Nf(t);var i=t.queue,s=bg.bind(null,ot,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Of,useDeferredValue:function(t,i){var s=Fn();return Pf(s,t,i)},useTransition:function(){var t=Nf(!1);return t=vg.bind(null,ot,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ot,h=Fn();if(Tt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Yt===null)throw Error(a(349));(St&127)!==0||qm(l,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,cg(Km.bind(null,l,m,t),[t]),l.flags|=2048,pr(9,{destroy:void 0},Ym.bind(null,l,m,s,i),null),s},useId:function(){var t=Fn(),i=Yt.identifierPrefix;if(Tt){var s=Gi,l=ki;s=(l&~(1<<32-$e(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=ec++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Jy++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:zf,useFormState:ag,useActionState:ag,useOptimistic:function(t){var i=Fn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Bf.bind(null,ot,!0,s),s.dispatch=i,[t,i]},useMemoCache:Rf,useCacheRefresh:function(){return Fn().memoizedState=aS.bind(null,ot)},useEffectEvent:function(t){var i=Fn(),s={impl:t};return i.memoizedState=s,function(){if((Ot&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Ff={readContext:Cn,use:nc,useCallback:mg,useContext:Cn,useEffect:Uf,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:gg,useReducer:ic,useRef:lg,useState:function(){return ic(sa)},useDebugValue:Of,useDeferredValue:function(t,i){var s=on();return _g(s,Vt.memoizedState,t,i)},useTransition:function(){var t=ic(sa)[0],i=on().memoizedState;return[typeof t=="boolean"?t:Oo(t),i]},useSyncExternalStore:Wm,useId:Sg,useHostTransitionStatus:zf,useFormState:sg,useActionState:sg,useOptimistic:function(t,i){var s=on();return Jm(s,Vt,t,i)},useMemoCache:Rf,useCacheRefresh:Mg};Ff.useEffectEvent=ug;var wg={readContext:Cn,use:nc,useCallback:mg,useContext:Cn,useEffect:Uf,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:gg,useReducer:Df,useRef:lg,useState:function(){return Df(sa)},useDebugValue:Of,useDeferredValue:function(t,i){var s=on();return Vt===null?Pf(s,t,i):_g(s,Vt.memoizedState,t,i)},useTransition:function(){var t=Df(sa)[0],i=on().memoizedState;return[typeof t=="boolean"?t:Oo(t),i]},useSyncExternalStore:Wm,useId:Sg,useHostTransitionStatus:zf,useFormState:og,useActionState:og,useOptimistic:function(t,i){var s=on();return Vt!==null?Jm(s,Vt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:Mg};wg.useEffectEvent=ug;function Hf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var kf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ci(),h=Ia(l);h.payload=i,s!=null&&(h.callback=s),i=za(t,h,l),i!==null&&(ei(i,t,l),Do(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ci(),h=Ia(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=za(t,h,l),i!==null&&(ei(i,t,l),Do(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ci(),l=Ia(s);l.tag=2,i!=null&&(l.callback=i),i=za(t,l,s),i!==null&&(ei(i,t,s),Do(i,t,s))}};function Rg(t,i,s,l,h,m,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,S):i.prototype&&i.prototype.isPureReactComponent?!Mo(s,l)||!Mo(h,m):!0}function Cg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&kf.enqueueReplaceState(i,i.state,null)}function Cs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var h in t)s[h]===void 0&&(s[h]=t[h])}return s}function Dg(t){Bl(t)}function Ng(t){console.error(t)}function Lg(t){Bl(t)}function oc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Ug(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Gf(t,i,s){return s=Ia(s),s.tag=3,s.payload={element:null},s.callback=function(){oc(t,i)},s}function Og(t){return t=Ia(t),t.tag=3,t}function Pg(t,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;t.payload=function(){return h(m)},t.callback=function(){Ug(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Ug(i,s,l),typeof h!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function rS(t,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&rr(i,s,h,!0),s=si.current,s!==null){switch(s.tag){case 31:case 13:return xi===null?xc():s.alternate===null&&sn===0&&(sn=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Yl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),dh(t,l,h)),!1;case 22:return s.flags|=65536,l===Yl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),dh(t,l,h)),!1}throw Error(a(435,s.tag))}return dh(t,l,h),xc(),!1}if(Tt)return i=si.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==of&&(t=Error(a(422),{cause:l}),To(mi(t,s)))):(l!==of&&(i=Error(a(423),{cause:l}),To(mi(i,s))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=mi(l,s),h=Gf(t.stateNode,l,h),vf(t,h),sn!==4&&(sn=2)),!1;var m=Error(a(520),{cause:l});if(m=mi(m,s),jo===null?jo=[m]:jo.push(m),sn!==4&&(sn=2),i===null)return!0;l=mi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=h&-h,s.lanes|=t,t=Gf(s.stateNode,l,t),vf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Va===null||!Va.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Og(h),Pg(h,t,s,l),vf(s,h),!1}s=s.return}while(s!==null);return!1}var Vf=Error(a(461)),un=!1;function Dn(t,i,s,l){i.child=t===null?Fm(i,null,s,l):ws(i,t.child,s,l)}function Ig(t,i,s,l,h){s=s.render;var m=i.ref;if("ref"in l){var S={};for(var T in l)T!=="ref"&&(S[T]=l[T])}else S=l;return bs(i),l=Ef(t,i,s,S,m,h),T=Tf(),t!==null&&!un?(Af(t,i,h),ra(t,i,h)):(Tt&&T&&sf(i),i.flags|=1,Dn(t,i,l,h),i.child)}function zg(t,i,s,l,h){if(t===null){var m=s.type;return typeof m=="function"&&!tf(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Bg(t,i,m,l,h)):(t=Gl(s.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Qf(t,h)){var S=m.memoizedProps;if(s=s.compare,s=s!==null?s:Mo,s(S,l)&&t.ref===i.ref)return ra(t,i,h)}return i.flags|=1,t=ea(m,l),t.ref=i.ref,t.return=i,i.child=t}function Bg(t,i,s,l,h){if(t!==null){var m=t.memoizedProps;if(Mo(m,l)&&t.ref===i.ref)if(un=!1,i.pendingProps=l=m,Qf(t,h))(t.flags&131072)!==0&&(un=!0);else return i.lanes=t.lanes,ra(t,i,h)}return jf(t,i,s,l,h)}function Fg(t,i,s,l){var h=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return Hg(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(i,m!==null?m.cachePool:null),m!==null?Gm(i,m):yf(),Vm(i);else return l=i.lanes=536870912,Hg(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(Wl(i,m.cachePool),Gm(i,m),Fa(),i.memoizedState=null):(t!==null&&Wl(i,null),yf(),Fa());return Dn(t,i,h,s),i.child}function zo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Hg(t,i,s,l,h){var m=pf();return m=m===null?null:{parent:ln._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&Wl(i,null),yf(),Vm(i),t!==null&&rr(t,i,l,!0),i.childLanes=h,null}function lc(t,i){return i=uc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function kg(t,i,s){return ws(i,t.child,null,s),t=lc(i,i.pendingProps),t.flags|=2,ri(i),i.memoizedState=null,t}function oS(t,i,s){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Tt){if(l.mode==="hidden")return t=lc(i,l),i.lanes=536870912,zo(null,t);if(Mf(i),(t=Zt)?(t=$0(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Na!==null?{id:ki,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},s=Em(t),s.return=i,i.child=s,Rn=i,Zt=null)):t=null,t===null)throw Ua(i);return i.lanes=536870912,null}return lc(i,l)}var m=t.memoizedState;if(m!==null){var S=m.dehydrated;if(Mf(i),h)if(i.flags&256)i.flags&=-257,i=kg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(un||rr(t,i,s,!1),h=(s&t.childLanes)!==0,un||h){if(l=Yt,l!==null&&(S=Hi(l,s),S!==0&&S!==m.retryLane))throw m.retryLane=S,xs(t,S),ei(l,t,S),Vf;xc(),i=kg(t,i,s)}else t=m.treeContext,Zt=yi(S.nextSibling),Rn=i,Tt=!0,La=null,vi=!1,t!==null&&wm(i,t),i=lc(i,l),i.flags|=4096;return i}return t=ea(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function cc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function jf(t,i,s,l,h){return bs(i),s=Ef(t,i,s,l,void 0,h),l=Tf(),t!==null&&!un?(Af(t,i,h),ra(t,i,h)):(Tt&&l&&sf(i),i.flags|=1,Dn(t,i,s,h),i.child)}function Gg(t,i,s,l,h,m){return bs(i),i.updateQueue=null,s=Xm(i,l,s,h),jm(t),l=Tf(),t!==null&&!un?(Af(t,i,m),ra(t,i,m)):(Tt&&l&&sf(i),i.flags|=1,Dn(t,i,s,m),i.child)}function Vg(t,i,s,l,h){if(bs(i),i.stateNode===null){var m=nr,S=s.contextType;typeof S=="object"&&S!==null&&(m=Cn(S)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=kf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},gf(i),S=s.contextType,m.context=typeof S=="object"&&S!==null?Cn(S):nr,m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Hf(i,s,S,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&kf.enqueueReplaceState(m,m.state,null),Lo(i,l,m,h),No(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var T=i.memoizedProps,z=Cs(s,T);m.props=z;var te=m.context,pe=s.contextType;S=nr,typeof pe=="object"&&pe!==null&&(S=Cn(pe));var Me=s.getDerivedStateFromProps;pe=typeof Me=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,pe||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||te!==S)&&Cg(i,m,l,S),Pa=!1;var ne=i.memoizedState;m.state=ne,Lo(i,l,m,h),No(),te=i.memoizedState,T||ne!==te||Pa?(typeof Me=="function"&&(Hf(i,s,Me,l),te=i.memoizedState),(z=Pa||Rg(i,s,z,l,ne,te,S))?(pe||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=te),m.props=l,m.state=te,m.context=S,l=z):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,_f(t,i),S=i.memoizedProps,pe=Cs(s,S),m.props=pe,Me=i.pendingProps,ne=m.context,te=s.contextType,z=nr,typeof te=="object"&&te!==null&&(z=Cn(te)),T=s.getDerivedStateFromProps,(te=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==Me||ne!==z)&&Cg(i,m,l,z),Pa=!1,ne=i.memoizedState,m.state=ne,Lo(i,l,m,h),No();var ue=i.memoizedState;S!==Me||ne!==ue||Pa||t!==null&&t.dependencies!==null&&jl(t.dependencies)?(typeof T=="function"&&(Hf(i,s,T,l),ue=i.memoizedState),(pe=Pa||Rg(i,s,pe,l,ne,ue,z)||t!==null&&t.dependencies!==null&&jl(t.dependencies))?(te||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ue,z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ue,z)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ue),m.props=l,m.state=ue,m.context=z,l=pe):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ne===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,cc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=ws(i,t.child,null,h),i.child=ws(i,null,s,h)):Dn(t,i,s,h),i.memoizedState=m.state,t=i.child):t=ra(t,i,h),t}function jg(t,i,s,l){return Ss(),i.flags|=256,Dn(t,i,s,l),i.child}var Xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(t){return{baseLanes:t,cachePool:Um()}}function qf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=li),t}function Xg(t,i,s){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,S;if((S=m)||(S=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),S&&(h=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Tt){if(h?Ba(i):Fa(),(t=Zt)?(t=$0(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Na!==null?{id:ki,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},s=Em(t),s.return=i,i.child=s,Rn=i,Zt=null)):t=null,t===null)throw Ua(i);return Ch(t)?i.lanes=32:i.lanes=536870912,null}var T=l.children;return l=l.fallback,h?(Fa(),h=i.mode,T=uc({mode:"hidden",children:T},h),l=ys(l,h,s,null),T.return=i,l.return=i,T.sibling=l,i.child=T,l=i.child,l.memoizedState=Wf(s),l.childLanes=qf(t,S,s),i.memoizedState=Xf,zo(null,l)):(Ba(i),Yf(i,T))}var z=t.memoizedState;if(z!==null&&(T=z.dehydrated,T!==null)){if(m)i.flags&256?(Ba(i),i.flags&=-257,i=Kf(t,i,s)):i.memoizedState!==null?(Fa(),i.child=t.child,i.flags|=128,i=null):(Fa(),T=l.fallback,h=i.mode,l=uc({mode:"visible",children:l.children},h),T=ys(T,h,s,null),T.flags|=2,l.return=i,T.return=i,l.sibling=T,i.child=l,ws(i,t.child,null,s),l=i.child,l.memoizedState=Wf(s),l.childLanes=qf(t,S,s),i.memoizedState=Xf,i=zo(null,l));else if(Ba(i),Ch(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var te=S.dgst;S=te,l=Error(a(419)),l.stack="",l.digest=S,To({value:l,source:null,stack:null}),i=Kf(t,i,s)}else if(un||rr(t,i,s,!1),S=(s&t.childLanes)!==0,un||S){if(S=Yt,S!==null&&(l=Hi(S,s),l!==0&&l!==z.retryLane))throw z.retryLane=l,xs(t,l),ei(S,t,l),Vf;Rh(T)||xc(),i=Kf(t,i,s)}else Rh(T)?(i.flags|=192,i.child=t.child,i=null):(t=z.treeContext,Zt=yi(T.nextSibling),Rn=i,Tt=!0,La=null,vi=!1,t!==null&&wm(i,t),i=Yf(i,l.children),i.flags|=4096);return i}return h?(Fa(),T=l.fallback,h=i.mode,z=t.child,te=z.sibling,l=ea(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,te!==null?T=ea(te,T):(T=ys(T,h,s,null),T.flags|=2),T.return=i,l.return=i,l.sibling=T,i.child=l,zo(null,l),l=i.child,T=t.child.memoizedState,T===null?T=Wf(s):(h=T.cachePool,h!==null?(z=ln._currentValue,h=h.parent!==z?{parent:z,pool:z}:h):h=Um(),T={baseLanes:T.baseLanes|s,cachePool:h}),l.memoizedState=T,l.childLanes=qf(t,S,s),i.memoizedState=Xf,zo(t.child,l)):(Ba(i),s=t.child,t=s.sibling,s=ea(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function Yf(t,i){return i=uc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function uc(t,i){return t=ai(22,t,null,i),t.lanes=0,t}function Kf(t,i,s){return ws(i,t.child,null,s),t=Yf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Wg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),uf(t.return,i,s)}function Zf(t,i,s,l,h,m){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h,treeForkCount:m}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=h,S.treeForkCount=m)}function qg(t,i,s){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var S=rn.current,T=(S&2)!==0;if(T?(S=S&1|2,i.flags|=128):S&=1,me(rn,S),Dn(t,i,l,s),l=Tt?Eo:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wg(t,s,i);else if(t.tag===19)Wg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)t=s.alternate,t!==null&&Jl(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Zf(i,!1,h,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Jl(t)===null){i.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}Zf(i,!0,s,null,m,l);break;case"together":Zf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ra(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ga|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(rr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ea(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ea(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Qf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&jl(t)))}function lS(t,i,s){switch(i.tag){case 3:we(i,i.stateNode.containerInfo),Oa(i,ln,t.memoizedState.cache),Ss();break;case 27:case 5:Be(i);break;case 4:we(i,i.stateNode.containerInfo);break;case 10:Oa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Mf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ba(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Xg(t,i,s):(Ba(i),t=ra(t,i,s),t!==null?t.sibling:null);Ba(i);break;case 19:var h=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(rr(t,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return qg(t,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),me(rn,rn.current),l)break;return null;case 22:return i.lanes=0,Fg(t,i,s,i.pendingProps);case 24:Oa(i,ln,t.memoizedState.cache)}return ra(t,i,s)}function Yg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)un=!0;else{if(!Qf(t,s)&&(i.flags&128)===0)return un=!1,lS(t,i,s);un=(t.flags&131072)!==0}else un=!1,Tt&&(i.flags&1048576)!==0&&Am(i,Eo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ts(i.elementType),i.type=t,typeof t=="function")tf(t)?(l=Cs(t,l),i.tag=1,i=Vg(null,i,t,l,s)):(i.tag=0,i=jf(null,i,t,l,s));else{if(t!=null){var h=t.$$typeof;if(h===C){i.tag=11,i=Ig(null,i,t,l,s);break e}else if(h===P){i.tag=14,i=zg(null,i,t,l,s);break e}}throw i=xe(t)||t,Error(a(306,i,""))}}return i;case 0:return jf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=Cs(l,i.pendingProps),Vg(t,i,l,h,s);case 3:e:{if(we(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,_f(t,i),Lo(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Oa(i,ln,l),l!==m.cache&&ff(i,[ln],s,!0),No(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=jg(t,i,l,s);break e}else if(l!==h){h=mi(Error(a(424)),i),To(h),i=jg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=yi(t.firstChild),Rn=i,Tt=!0,La=null,vi=!0,s=Fm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ss(),l===h){i=ra(t,i,s);break e}Dn(t,i,l,s)}i=i.child}return i;case 26:return cc(t,i),t===null?(s=s_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Tt||(s=i.type,t=i.pendingProps,l=Ac(ce.current).createElement(s),l[tn]=i,l[An]=t,Nn(l,s,t),W(l),i.stateNode=l):i.memoizedState=s_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Be(i),t===null&&Tt&&(l=i.stateNode=n_(i.type,i.pendingProps,ce.current),Rn=i,vi=!0,h=Zt,qa(i.type)?(Dh=h,Zt=yi(l.firstChild)):Zt=h),Dn(t,i,i.pendingProps.children,s),cc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Tt&&((h=l=Zt)&&(l=BS(l,i.type,i.pendingProps,vi),l!==null?(i.stateNode=l,Rn=i,Zt=yi(l.firstChild),vi=!1,h=!0):h=!1),h||Ua(i)),Be(i),h=i.type,m=i.pendingProps,S=t!==null?t.memoizedProps:null,l=m.children,Th(h,m)?l=null:S!==null&&Th(h,S)&&(i.flags|=32),i.memoizedState!==null&&(h=Ef(t,i,$y,null,null,s),Jo._currentValue=h),cc(t,i),Dn(t,i,l,s),i.child;case 6:return t===null&&Tt&&((t=s=Zt)&&(s=FS(s,i.pendingProps,vi),s!==null?(i.stateNode=s,Rn=i,Zt=null,t=!0):t=!1),t||Ua(i)),null;case 13:return Xg(t,i,s);case 4:return we(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ws(i,null,l,s):Dn(t,i,l,s),i.child;case 11:return Ig(t,i,i.type,i.pendingProps,s);case 7:return Dn(t,i,i.pendingProps,s),i.child;case 8:return Dn(t,i,i.pendingProps.children,s),i.child;case 12:return Dn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Oa(i,i.type,l.value),Dn(t,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,bs(i),h=Cn(h),l=l(h),i.flags|=1,Dn(t,i,l,s),i.child;case 14:return zg(t,i,i.type,i.pendingProps,s);case 15:return Bg(t,i,i.type,i.pendingProps,s);case 19:return qg(t,i,s);case 31:return oS(t,i,s);case 22:return Fg(t,i,s,i.pendingProps);case 24:return bs(i),l=Cn(ln),t===null?(h=pf(),h===null&&(h=Yt,m=hf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:l,cache:h},gf(i),Oa(i,ln,h)):((t.lanes&s)!==0&&(_f(t,i),Lo(i,null,null,s),No()),h=t.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Oa(i,ln,l)):(l=m.cache,Oa(i,ln,l),l!==h.cache&&ff(i,[ln],s,!0))),Dn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function oa(t){t.flags|=4}function Jf(t,i,s,l,h){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(S0())t.flags|=8192;else throw As=Yl,mf}else t.flags&=-16777217}function Kg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!u_(i))if(S0())t.flags|=8192;else throw As=Yl,mf}function fc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?dn():536870912,t.lanes|=i,vr|=i)}function Bo(t,i){if(!Tt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Qt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function cS(t,i,s){var l=i.pendingProps;switch(rf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(i),null;case 1:return Qt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ia(ln),ze(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(sr(i)?oa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,lf())),Qt(i),null;case 26:var h=i.type,m=i.memoizedState;return t===null?(oa(i),m!==null?(Qt(i),Kg(i,m)):(Qt(i),Jf(i,h,null,l,s))):m?m!==t.memoizedState?(oa(i),Qt(i),Kg(i,m)):(Qt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&oa(i),Qt(i),Jf(i,h,t,l,s)),null;case 27:if(At(i),s=ce.current,h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qt(i),null}t=j.current,sr(i)?Rm(i):(t=n_(h,l,s),i.stateNode=t,oa(i))}return Qt(i),null;case 5:if(At(i),h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qt(i),null}if(m=j.current,sr(i))Rm(i);else{var S=Ac(ce.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(h,{is:l.is}):S.createElement(h)}}m[tn]=i,m[An]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=m;e:switch(Nn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&oa(i)}}return Qt(i),Jf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ce.current,sr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,h=Rn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[tn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||X0(t.nodeValue,s)),t||Ua(i,!0)}else t=Ac(t).createTextNode(l),t[tn]=i,i.stateNode=t}return Qt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=sr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[tn]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qt(i),t=!1}else s=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ri(i),i):(ri(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Qt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=sr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[tn]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qt(i),h=!1}else h=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ri(i),i):(ri(i),null)}return ri(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),fc(i,i.updateQueue),Qt(i),null);case 4:return ze(),t===null&&yh(i.stateNode.containerInfo),Qt(i),null;case 10:return ia(i.type),Qt(i),null;case 19:if($(rn),l=i.memoizedState,l===null)return Qt(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Bo(l,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Jl(t),m!==null){for(i.flags|=128,Bo(l,!1),t=m.updateQueue,i.updateQueue=t,fc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)bm(s,t),s=s.sibling;return me(rn,rn.current&1|2),Tt&&ta(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&ge()>gc&&(i.flags|=128,h=!0,Bo(l,!1),i.lanes=4194304)}else{if(!h)if(t=Jl(m),t!==null){if(i.flags|=128,h=!0,t=t.updateQueue,i.updateQueue=t,fc(i,t),Bo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Tt)return Qt(i),null}else 2*ge()-l.renderingStartTime>gc&&s!==536870912&&(i.flags|=128,h=!0,Bo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ge(),t.sibling=null,s=rn.current,me(rn,h?s&1|2:s&1),Tt&&ta(i,l.treeForkCount),t):(Qt(i),null);case 22:case 23:return ri(i),Sf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Qt(i),i.subtreeFlags&6&&(i.flags|=8192)):Qt(i),s=i.updateQueue,s!==null&&fc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&$(Es),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ia(ln),Qt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function uS(t,i){switch(rf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ia(ln),ze(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return At(i),null;case 31:if(i.memoizedState!==null){if(ri(i),i.alternate===null)throw Error(a(340));Ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ri(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return $(rn),null;case 4:return ze(),null;case 10:return ia(i.type),null;case 22:case 23:return ri(i),Sf(),t!==null&&$(Es),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ia(ln),null;case 25:return null;default:return null}}function Zg(t,i){switch(rf(i),i.tag){case 3:ia(ln),ze();break;case 26:case 27:case 5:At(i);break;case 4:ze();break;case 31:i.memoizedState!==null&&ri(i);break;case 13:ri(i);break;case 19:$(rn);break;case 10:ia(i.type);break;case 22:case 23:ri(i),Sf(),t!==null&&$(Es);break;case 24:ia(ln)}}function Fo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&t)===t){l=void 0;var m=s.create,S=s.inst;l=m(),S.destroy=l}s=s.next}while(s!==h)}}catch(T){Bt(i,i.return,T)}}function Ha(t,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&t)===t){var S=l.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,h=i;var z=s,te=T;try{te()}catch(pe){Bt(h,z,pe)}}}l=l.next}while(l!==m)}}catch(pe){Bt(i,i.return,pe)}}function Qg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{km(i,s)}catch(l){Bt(t,t.return,l)}}}function Jg(t,i,s){s.props=Cs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Bt(t,i,l)}}function Ho(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(h){Bt(t,i,h)}}function Vi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){Bt(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Bt(t,i,h)}else s.current=null}function $g(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){Bt(t,t.return,h)}}function $f(t,i,s){try{var l=t.stateNode;LS(l,t.type,s,i),l[An]=i}catch(h){Bt(t,t.return,h)}}function e0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function eh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ji));else if(l!==4&&(l===27&&qa(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(th(t,i,s),t=t.sibling;t!==null;)th(t,i,s),t=t.sibling}function hc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&qa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(hc(t,i,s),t=t.sibling;t!==null;)hc(t,i,s),t=t.sibling}function t0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Nn(i,l,s),i[tn]=t,i[An]=s}catch(m){Bt(t,t.return,m)}}var la=!1,fn=!1,nh=!1,n0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function fS(t,i){if(t=t.containerInfo,bh=Uc,t=pm(t),Yu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var S=0,T=-1,z=-1,te=0,pe=0,Me=t,ne=null;t:for(;;){for(var ue;Me!==s||h!==0&&Me.nodeType!==3||(T=S+h),Me!==m||l!==0&&Me.nodeType!==3||(z=S+l),Me.nodeType===3&&(S+=Me.nodeValue.length),(ue=Me.firstChild)!==null;)ne=Me,Me=ue;for(;;){if(Me===t)break t;if(ne===s&&++te===h&&(T=S),ne===m&&++pe===l&&(z=S),(ue=Me.nextSibling)!==null)break;Me=ne,ne=Me.parentNode}Me=ue}s=T===-1||z===-1?null:{start:T,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Eh={focusedElem:t,selectionRange:s},Uc=!1,Sn=i;Sn!==null;)if(i=Sn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Sn=t;else for(;Sn!==null;){switch(i=Sn,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)h=t[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ke=Cs(s.type,h);t=l.getSnapshotBeforeUpdate(ke,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(Qe){Bt(s,s.return,Qe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)wh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Sn=t;break}Sn=i.return}}function i0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ua(t,s),l&4&&Fo(5,s);break;case 1:if(ua(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){Bt(s,s.return,S)}else{var h=Cs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(s,s.return,S)}}l&64&&Qg(s),l&512&&Ho(s,s.return);break;case 3:if(ua(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{km(t,i)}catch(S){Bt(s,s.return,S)}}break;case 27:i===null&&l&4&&t0(s);case 26:case 5:ua(t,s),i===null&&l&4&&$g(s),l&512&&Ho(s,s.return);break;case 12:ua(t,s);break;case 31:ua(t,s),l&4&&r0(t,s);break;case 13:ua(t,s),l&4&&o0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=yS.bind(null,s),HS(t,s))));break;case 22:if(l=s.memoizedState!==null||la,!l){i=i!==null&&i.memoizedState!==null||fn,h=la;var m=fn;la=l,(fn=i)&&!m?fa(t,s,(s.subtreeFlags&8772)!==0):ua(t,s),la=h,fn=m}break;case 30:break;default:ua(t,s)}}function a0(t){var i=t.alternate;i!==null&&(t.alternate=null,a0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&po(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Zn=!1;function ca(t,i,s){for(s=s.child;s!==null;)s0(t,i,s),s=s.sibling}function s0(t,i,s){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Ze,s)}catch{}switch(s.tag){case 26:fn||Vi(s,i),ca(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:fn||Vi(s,i);var l=$t,h=Zn;qa(s.type)&&($t=s.stateNode,Zn=!1),ca(t,i,s),Ko(s.stateNode),$t=l,Zn=h;break;case 5:fn||Vi(s,i);case 6:if(l=$t,h=Zn,$t=null,ca(t,i,s),$t=l,Zn=h,$t!==null)if(Zn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(s.stateNode)}catch(m){Bt(s,i,m)}else try{$t.removeChild(s.stateNode)}catch(m){Bt(s,i,m)}break;case 18:$t!==null&&(Zn?(t=$t,Q0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Ar(t)):Q0($t,s.stateNode));break;case 4:l=$t,h=Zn,$t=s.stateNode.containerInfo,Zn=!0,ca(t,i,s),$t=l,Zn=h;break;case 0:case 11:case 14:case 15:Ha(2,s,i),fn||Ha(4,s,i),ca(t,i,s);break;case 1:fn||(Vi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Jg(s,i,l)),ca(t,i,s);break;case 21:ca(t,i,s);break;case 22:fn=(l=fn)||s.memoizedState!==null,ca(t,i,s),fn=l;break;default:ca(t,i,s)}}function r0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ar(t)}catch(s){Bt(i,i.return,s)}}}function o0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ar(t)}catch(s){Bt(i,i.return,s)}}function hS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new n0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new n0),i;default:throw Error(a(435,t.tag))}}function dc(t,i){var s=hS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var h=SS.bind(null,t,l);l.then(h,h)}})}function Qn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],m=t,S=i,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(qa(T.type)){$t=T.stateNode,Zn=!1;break e}break;case 5:$t=T.stateNode,Zn=!1;break e;case 3:case 4:$t=T.stateNode.containerInfo,Zn=!0;break e}T=T.return}if($t===null)throw Error(a(160));s0(m,S,h),$t=null,Zn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)l0(i,t),i=i.sibling}var Ci=null;function l0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(i,t),Jn(t),l&4&&(Ha(3,t,t.return),Fo(3,t),Ha(5,t,t.return));break;case 1:Qn(i,t),Jn(t),l&512&&(fn||s===null||Vi(s,s.return)),l&64&&la&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=Ci;if(Qn(i,t),Jn(t),l&512&&(fn||s===null||Vi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[ms]||m[tn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Nn(m,l,s),m[tn]=t,W(m),l=m;break e;case"link":var S=l_("link","href",h).get(l+(s.href||""));if(S){for(var T=0;T<S.length;T++)if(m=S[T],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(T,1);break t}}m=h.createElement(l),Nn(m,l,s),h.head.appendChild(m);break;case"meta":if(S=l_("meta","content",h).get(l+(s.content||""))){for(T=0;T<S.length;T++)if(m=S[T],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(T,1);break t}}m=h.createElement(l),Nn(m,l,s),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[tn]=t,W(m),l=m}t.stateNode=l}else c_(h,t.type,t.stateNode);else t.stateNode=o_(h,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?c_(h,t.type,t.stateNode):o_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&$f(t,t.memoizedProps,s.memoizedProps)}break;case 27:Qn(i,t),Jn(t),l&512&&(fn||s===null||Vi(s,s.return)),s!==null&&l&4&&$f(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Qn(i,t),Jn(t),l&512&&(fn||s===null||Vi(s,s.return)),t.flags&32){h=t.stateNode;try{Yn(h,"")}catch(ke){Bt(t,t.return,ke)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,$f(t,h,s!==null?s.memoizedProps:h)),l&1024&&(nh=!0);break;case 6:if(Qn(i,t),Jn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ke){Bt(t,t.return,ke)}}break;case 3:if(Cc=null,h=Ci,Ci=wc(i.containerInfo),Qn(i,t),Ci=h,Jn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ar(i.containerInfo)}catch(ke){Bt(t,t.return,ke)}nh&&(nh=!1,c0(t));break;case 4:l=Ci,Ci=wc(t.stateNode.containerInfo),Qn(i,t),Jn(t),Ci=l;break;case 12:Qn(i,t),Jn(t);break;case 31:Qn(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,dc(t,l)));break;case 13:Qn(i,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(mc=ge()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,dc(t,l)));break;case 22:h=t.memoizedState!==null;var z=s!==null&&s.memoizedState!==null,te=la,pe=fn;if(la=te||h,fn=pe||z,Qn(i,t),fn=pe,la=te,Jn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||z||la||fn||Ds(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){z=s=i;try{if(m=z.stateNode,h)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=z.stateNode;var Me=z.memoizedProps.style,ne=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;T.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ke){Bt(z,z.return,ke)}}}else if(i.tag===6){if(s===null){z=i;try{z.stateNode.nodeValue=h?"":z.memoizedProps}catch(ke){Bt(z,z.return,ke)}}}else if(i.tag===18){if(s===null){z=i;try{var ue=z.stateNode;h?J0(ue,!0):J0(z.stateNode,!1)}catch(ke){Bt(z,z.return,ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,dc(t,s))));break;case 19:Qn(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,dc(t,l)));break;case 30:break;case 21:break;default:Qn(i,t),Jn(t)}}function Jn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(e0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=eh(t);hc(t,m,h);break;case 5:var S=s.stateNode;s.flags&32&&(Yn(S,""),s.flags&=-33);var T=eh(t);hc(t,T,S);break;case 3:case 4:var z=s.stateNode.containerInfo,te=eh(t);th(t,te,z);break;default:throw Error(a(161))}}catch(pe){Bt(t,t.return,pe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function c0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;c0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ua(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)i0(t,i.alternate,i),i=i.sibling}function Ds(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ha(4,i,i.return),Ds(i);break;case 1:Vi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Jg(i,i.return,s),Ds(i);break;case 27:Ko(i.stateNode);case 26:case 5:Vi(i,i.return),Ds(i);break;case 22:i.memoizedState===null&&Ds(i);break;case 30:Ds(i);break;default:Ds(i)}t=t.sibling}}function fa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,m=i,S=m.flags;switch(m.tag){case 0:case 11:case 15:fa(h,m,s),Fo(4,m);break;case 1:if(fa(h,m,s),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(te){Bt(l,l.return,te)}if(l=m,h=l.updateQueue,h!==null){var T=l.stateNode;try{var z=h.shared.hiddenCallbacks;if(z!==null)for(h.shared.hiddenCallbacks=null,h=0;h<z.length;h++)Hm(z[h],T)}catch(te){Bt(l,l.return,te)}}s&&S&64&&Qg(m),Ho(m,m.return);break;case 27:t0(m);case 26:case 5:fa(h,m,s),s&&l===null&&S&4&&$g(m),Ho(m,m.return);break;case 12:fa(h,m,s);break;case 31:fa(h,m,s),s&&S&4&&r0(h,m);break;case 13:fa(h,m,s),s&&S&4&&o0(h,m);break;case 22:m.memoizedState===null&&fa(h,m,s),Ho(m,m.return);break;case 30:break;default:fa(h,m,s)}i=i.sibling}}function ih(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Ao(s))}function ah(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Ao(t))}function Di(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)u0(t,i,s,l),i=i.sibling}function u0(t,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Di(t,i,s,l),h&2048&&Fo(9,i);break;case 1:Di(t,i,s,l);break;case 3:Di(t,i,s,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Ao(t)));break;case 12:if(h&2048){Di(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,S=m.id,T=m.onPostCommit;typeof T=="function"&&T(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Bt(i,i.return,z)}}else Di(t,i,s,l);break;case 31:Di(t,i,s,l);break;case 13:Di(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,S=i.alternate,i.memoizedState!==null?m._visibility&2?Di(t,i,s,l):ko(t,i):m._visibility&2?Di(t,i,s,l):(m._visibility|=2,mr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&ih(S,i);break;case 24:Di(t,i,s,l),h&2048&&ah(i.alternate,i);break;default:Di(t,i,s,l)}}function mr(t,i,s,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,S=i,T=s,z=l,te=S.flags;switch(S.tag){case 0:case 11:case 15:mr(m,S,T,z,h),Fo(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?mr(m,S,T,z,h):ko(m,S):(pe._visibility|=2,mr(m,S,T,z,h)),h&&te&2048&&ih(S.alternate,S);break;case 24:mr(m,S,T,z,h),h&&te&2048&&ah(S.alternate,S);break;default:mr(m,S,T,z,h)}i=i.sibling}}function ko(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,h=l.flags;switch(l.tag){case 22:ko(s,l),h&2048&&ih(l.alternate,l);break;case 24:ko(s,l),h&2048&&ah(l.alternate,l);break;default:ko(s,l)}i=i.sibling}}var Go=8192;function gr(t,i,s){if(t.subtreeFlags&Go)for(t=t.child;t!==null;)f0(t,i,s),t=t.sibling}function f0(t,i,s){switch(t.tag){case 26:gr(t,i,s),t.flags&Go&&t.memoizedState!==null&&JS(s,Ci,t.memoizedState,t.memoizedProps);break;case 5:gr(t,i,s);break;case 3:case 4:var l=Ci;Ci=wc(t.stateNode.containerInfo),gr(t,i,s),Ci=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Go,Go=16777216,gr(t,i,s),Go=l):gr(t,i,s));break;default:gr(t,i,s)}}function h0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Vo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Sn=l,p0(l,t)}h0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)d0(t),t=t.sibling}function d0(t){switch(t.tag){case 0:case 11:case 15:Vo(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:Vo(t);break;case 12:Vo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,pc(t)):Vo(t);break;default:Vo(t)}}function pc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Sn=l,p0(l,t)}h0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ha(8,i,i.return),pc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,pc(i));break;default:pc(i)}t=t.sibling}}function p0(t,i){for(;Sn!==null;){var s=Sn;switch(s.tag){case 0:case 11:case 15:Ha(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ao(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Sn=l;else e:for(s=t;Sn!==null;){l=Sn;var h=l.sibling,m=l.return;if(a0(l),l===s){Sn=null;break e}if(h!==null){h.return=m,Sn=h;break e}Sn=m}}}var dS={getCacheForType:function(t){var i=Cn(ln),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Cn(ln).controller.signal}},pS=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Yt=null,_t=null,St=0,zt=0,oi=null,ka=!1,_r=!1,sh=!1,ha=0,sn=0,Ga=0,Ns=0,rh=0,li=0,vr=0,jo=null,$n=null,oh=!1,mc=0,m0=0,gc=1/0,_c=null,Va=null,mn=0,ja=null,xr=null,da=0,lh=0,ch=null,g0=null,Xo=0,uh=null;function ci(){return(Ot&2)!==0&&St!==0?St&-St:I.T!==null?gh():fo()}function _0(){if(li===0)if((St&536870912)===0||Tt){var t=de;de<<=1,(de&3932160)===0&&(de=262144),li=t}else li=536870912;return t=si.current,t!==null&&(t.flags|=32),li}function ei(t,i,s){(t===Yt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(yr(t,0),Xa(t,St,li,!1)),Tn(t,s),((Ot&2)===0||t!==Yt)&&(t===Yt&&((Ot&2)===0&&(Ns|=s),sn===4&&Xa(t,St,li,!1)),ji(t))}function v0(t,i,s){if((Ot&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||et(t,i),h=l?_S(t,i):hh(t,i,!0),m=l;do{if(h===0){_r&&!l&&Xa(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!mS(s)){h=hh(t,i,!1),m=!1;continue}if(h===2){if(m=i,t.errorRecoveryDisabledLanes&m)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var T=t;h=jo;var z=T.current.memoizedState.isDehydrated;if(z&&(yr(T,S).flags|=256),S=hh(T,S,!1),S!==2){if(sh&&!z){T.errorRecoveryDisabledLanes|=m,Ns|=m,h=4;break e}m=$n,$n=h,m!==null&&($n===null?$n=m:$n.push.apply($n,m))}h=S}if(m=!1,h!==2)continue}}if(h===1){yr(t,0),Xa(t,i,0,!0);break}e:{switch(l=t,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Xa(l,i,li,!ka);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=mc+300-ge(),10<h)){if(Xa(l,i,li,!ka),Ne(l,0,!0)!==0)break e;da=i,l.timeoutHandle=K0(x0.bind(null,l,s,$n,_c,oh,i,li,Ns,vr,ka,m,"Throttled",-0,0),h);break e}x0(l,s,$n,_c,oh,i,li,Ns,vr,ka,m,null,-0,0)}}break}while(!0);ji(t)}function x0(t,i,s,l,h,m,S,T,z,te,pe,Me,ne,ue){if(t.timeoutHandle=-1,Me=i.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},f0(i,m,Me);var ke=(m&62914560)===m?mc-ge():(m&4194048)===m?m0-ge():0;if(ke=$S(Me,ke),ke!==null){da=m,t.cancelPendingCommit=ke(w0.bind(null,t,i,m,s,l,h,S,T,z,pe,Me,null,ne,ue)),Xa(t,m,S,!te);return}}w0(t,i,m,s,l,h,S,T,z)}function mS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],m=h.getSnapshot;h=h.value;try{if(!ii(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xa(t,i,s,l){i&=~rh,i&=~Ns,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var m=31-$e(h),S=1<<m;l[m]=-1,h&=~S}s!==0&&co(t,s,i)}function vc(){return(Ot&6)===0?(Wo(0),!1):!0}function fh(){if(_t!==null){if(zt===0)var t=_t.return;else t=_t,na=Ms=null,wf(t),ur=null,Ro=0,t=_t;for(;t!==null;)Zg(t.alternate,t),t=t.return;_t=null}}function yr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,PS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),da=0,fh(),Yt=t,_t=s=ea(t.current,null),St=i,zt=0,oi=null,ka=!1,_r=et(t,i),sh=!1,vr=li=rh=Ns=Ga=sn=0,$n=jo=null,oh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-$e(l),m=1<<h;i|=t[h],l&=~m}return ha=i,Fl(),s}function y0(t,i){ot=null,I.H=Io,i===cr||i===ql?(i=Im(),zt=3):i===mf?(i=Im(),zt=4):zt=i===Vf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,oi=i,_t===null&&(sn=1,oc(t,mi(i,t.current)))}function S0(){var t=si.current;return t===null?!0:(St&4194048)===St?xi===null:(St&62914560)===St||(St&536870912)!==0?t===xi:!1}function M0(){var t=I.H;return I.H=Io,t===null?Io:t}function b0(){var t=I.A;return I.A=dS,t}function xc(){sn=4,ka||(St&4194048)!==St&&si.current!==null||(_r=!0),(Ga&134217727)===0&&(Ns&134217727)===0||Yt===null||Xa(Yt,St,li,!1)}function hh(t,i,s){var l=Ot;Ot|=2;var h=M0(),m=b0();(Yt!==t||St!==i)&&(_c=null,yr(t,i)),i=!1;var S=sn;e:do try{if(zt!==0&&_t!==null){var T=_t,z=oi;switch(zt){case 8:fh(),S=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(i=!0);var te=zt;if(zt=0,oi=null,Sr(t,T,z,te),s&&_r){S=0;break e}break;default:te=zt,zt=0,oi=null,Sr(t,T,z,te)}}gS(),S=sn;break}catch(pe){y0(t,pe)}while(!0);return i&&t.shellSuspendCounter++,na=Ms=null,Ot=l,I.H=h,I.A=m,_t===null&&(Yt=null,St=0,Fl()),S}function gS(){for(;_t!==null;)E0(_t)}function _S(t,i){var s=Ot;Ot|=2;var l=M0(),h=b0();Yt!==t||St!==i?(_c=null,gc=ge()+500,yr(t,i)):_r=et(t,i);e:do try{if(zt!==0&&_t!==null){i=_t;var m=oi;t:switch(zt){case 1:zt=0,oi=null,Sr(t,i,m,1);break;case 2:case 9:if(Om(m)){zt=0,oi=null,T0(i);break}i=function(){zt!==2&&zt!==9||Yt!==t||(zt=7),ji(t)},m.then(i,i);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Om(m)?(zt=0,oi=null,T0(i)):(zt=0,oi=null,Sr(t,i,m,7));break;case 5:var S=null;switch(_t.tag){case 26:S=_t.memoizedState;case 5:case 27:var T=_t;if(S?u_(S):T.stateNode.complete){zt=0,oi=null;var z=T.sibling;if(z!==null)_t=z;else{var te=T.return;te!==null?(_t=te,yc(te)):_t=null}break t}}zt=0,oi=null,Sr(t,i,m,5);break;case 6:zt=0,oi=null,Sr(t,i,m,6);break;case 8:fh(),sn=6;break e;default:throw Error(a(462))}}vS();break}catch(pe){y0(t,pe)}while(!0);return na=Ms=null,I.H=l,I.A=h,Ot=s,_t!==null?0:(Yt=null,St=0,Fl(),sn)}function vS(){for(;_t!==null&&!A();)E0(_t)}function E0(t){var i=Yg(t.alternate,t,ha);t.memoizedProps=t.pendingProps,i===null?yc(t):_t=i}function T0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Gg(s,i,i.pendingProps,i.type,void 0,St);break;case 11:i=Gg(s,i,i.pendingProps,i.type.render,i.ref,St);break;case 5:wf(i);default:Zg(s,i),i=_t=bm(i,ha),i=Yg(s,i,ha)}t.memoizedProps=t.pendingProps,i===null?yc(t):_t=i}function Sr(t,i,s,l){na=Ms=null,wf(i),ur=null,Ro=0;var h=i.return;try{if(rS(t,h,i,s,St)){sn=1,oc(t,mi(s,t.current)),_t=null;return}}catch(m){if(h!==null)throw _t=h,m;sn=1,oc(t,mi(s,t.current)),_t=null;return}i.flags&32768?(Tt||l===1?t=!0:_r||(St&536870912)!==0?t=!1:(ka=t=!0,(l===2||l===9||l===3||l===6)&&(l=si.current,l!==null&&l.tag===13&&(l.flags|=16384))),A0(i,t)):yc(i)}function yc(t){var i=t;do{if((i.flags&32768)!==0){A0(i,ka);return}t=i.return;var s=cS(i.alternate,i,ha);if(s!==null){_t=s;return}if(i=i.sibling,i!==null){_t=i;return}_t=i=t}while(i!==null);sn===0&&(sn=5)}function A0(t,i){do{var s=uS(t.alternate,t);if(s!==null){s.flags&=32767,_t=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){_t=t;return}_t=t=s}while(t!==null);sn=6,_t=null}function w0(t,i,s,l,h,m,S,T,z){t.cancelPendingCommit=null;do Sc();while(mn!==0);if((Ot&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=$u,Ti(t,s,m,S,T,z),t===Yt&&(_t=Yt=null,St=0),xr=i,ja=t,da=s,lh=m,ch=h,g0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,MS(Ce,function(){return L0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,h=J.p,J.p=2,S=Ot,Ot|=4;try{fS(t,i,s)}finally{Ot=S,J.p=h,I.T=l}}mn=1,R0(),C0(),D0()}}function R0(){if(mn===1){mn=0;var t=ja,i=xr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=J.p;J.p=2;var h=Ot;Ot|=4;try{l0(i,t);var m=Eh,S=pm(t.containerInfo),T=m.focusedElem,z=m.selectionRange;if(S!==T&&T&&T.ownerDocument&&dm(T.ownerDocument.documentElement,T)){if(z!==null&&Yu(T)){var te=z.start,pe=z.end;if(pe===void 0&&(pe=te),"selectionStart"in T)T.selectionStart=te,T.selectionEnd=Math.min(pe,T.value.length);else{var Me=T.ownerDocument||document,ne=Me&&Me.defaultView||window;if(ne.getSelection){var ue=ne.getSelection(),ke=T.textContent.length,Qe=Math.min(z.start,ke),Xt=z.end===void 0?Qe:Math.min(z.end,ke);!ue.extend&&Qe>Xt&&(S=Xt,Xt=Qe,Qe=S);var Q=hm(T,Qe),k=hm(T,Xt);if(Q&&k&&(ue.rangeCount!==1||ue.anchorNode!==Q.node||ue.anchorOffset!==Q.offset||ue.focusNode!==k.node||ue.focusOffset!==k.offset)){var ee=Me.createRange();ee.setStart(Q.node,Q.offset),ue.removeAllRanges(),Qe>Xt?(ue.addRange(ee),ue.extend(k.node,k.offset)):(ee.setEnd(k.node,k.offset),ue.addRange(ee))}}}}for(Me=[],ue=T;ue=ue.parentNode;)ue.nodeType===1&&Me.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Me.length;T++){var _e=Me[T];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Uc=!!bh,Eh=bh=null}finally{Ot=h,J.p=l,I.T=s}}t.current=i,mn=2}}function C0(){if(mn===2){mn=0;var t=ja,i=xr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=J.p;J.p=2;var h=Ot;Ot|=4;try{i0(t,i.alternate,i)}finally{Ot=h,J.p=l,I.T=s}}mn=3}}function D0(){if(mn===4||mn===3){mn=0,ie();var t=ja,i=xr,s=da,l=g0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?mn=5:(mn=0,xr=ja=null,N0(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Va=null),Ys(s),i=i.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Ze,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,h=J.p,J.p=2,I.T=null;try{for(var m=t.onRecoverableError,S=0;S<l.length;S++){var T=l[S];m(T.value,{componentStack:T.stack})}}finally{I.T=i,J.p=h}}(da&3)!==0&&Sc(),ji(t),h=t.pendingLanes,(s&261930)!==0&&(h&42)!==0?t===uh?Xo++:(Xo=0,uh=t):Xo=0,Wo(0)}}function N0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Ao(i)))}function Sc(){return R0(),C0(),D0(),L0()}function L0(){if(mn!==5)return!1;var t=ja,i=lh;lh=0;var s=Ys(da),l=I.T,h=J.p;try{J.p=32>s?32:s,I.T=null,s=ch,ch=null;var m=ja,S=da;if(mn=0,xr=ja=null,da=0,(Ot&6)!==0)throw Error(a(331));var T=Ot;if(Ot|=4,d0(m.current),u0(m,m.current,S,s),Ot=T,Wo(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Ze,m)}catch{}return!0}finally{J.p=h,I.T=l,N0(t,i)}}function U0(t,i,s){i=mi(s,i),i=Gf(t.stateNode,i,2),t=za(t,i,2),t!==null&&(Tn(t,2),ji(t))}function Bt(t,i,s){if(t.tag===3)U0(t,t,s);else for(;i!==null;){if(i.tag===3){U0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Va===null||!Va.has(l))){t=mi(s,t),s=Og(2),l=za(i,s,2),l!==null&&(Pg(s,l,i,t),Tn(l,2),ji(l));break}}i=i.return}}function dh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new pS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(sh=!0,h.add(s),t=xS.bind(null,t,i,s),i.then(t,t))}function xS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Yt===t&&(St&s)===s&&(sn===4||sn===3&&(St&62914560)===St&&300>ge()-mc?(Ot&2)===0&&yr(t,0):rh|=s,vr===St&&(vr=0)),ji(t)}function O0(t,i){i===0&&(i=dn()),t=xs(t,i),t!==null&&(Tn(t,i),ji(t))}function yS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),O0(t,s)}function SS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),O0(t,s)}function MS(t,i){return We(t,i)}var Mc=null,Mr=null,ph=!1,bc=!1,mh=!1,Wa=0;function ji(t){t!==Mr&&t.next===null&&(Mr===null?Mc=Mr=t:Mr=Mr.next=t),bc=!0,ph||(ph=!0,ES())}function Wo(t,i){if(!mh&&bc){mh=!0;do for(var s=!1,l=Mc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var S=l.suspendedLanes,T=l.pingedLanes;m=(1<<31-$e(42|t)+1)-1,m&=h&~(S&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,B0(l,m))}else m=St,m=Ne(l,l===Yt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||et(l,m)||(s=!0,B0(l,m));l=l.next}while(s);mh=!1}}function bS(){P0()}function P0(){bc=ph=!1;var t=0;Wa!==0&&OS()&&(t=Wa);for(var i=ge(),s=null,l=Mc;l!==null;){var h=l.next,m=I0(l,i);m===0?(l.next=null,s===null?Mc=h:s.next=h,h===null&&(Mr=s)):(s=l,(t!==0||(m&3)!==0)&&(bc=!0)),l=h}mn!==0&&mn!==5||Wo(t),Wa!==0&&(Wa=0)}function I0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var S=31-$e(m),T=1<<S,z=h[S];z===-1?((T&s)===0||(T&l)!==0)&&(h[S]=Jt(T,i)):z<=i&&(t.expiredLanes|=T),m&=~T}if(i=Yt,s=St,s=Ne(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&U(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||et(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&U(l),Ys(s)){case 2:case 8:s=Ve;break;case 32:s=Ce;break;case 268435456:s=yt;break;default:s=Ce}return l=z0.bind(null,t),s=We(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&U(l),t.callbackPriority=2,t.callbackNode=null,2}function z0(t,i){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Sc()&&t.callbackNode!==s)return null;var l=St;return l=Ne(t,t===Yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(v0(t,l,i),I0(t,ge()),t.callbackNode!=null&&t.callbackNode===s?z0.bind(null,t):null)}function B0(t,i){if(Sc())return null;v0(t,i,!0)}function ES(){IS(function(){(Ot&6)!==0?We(Se,bS):P0()})}function gh(){if(Wa===0){var t=or;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),Wa=t}return Wa}function F0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nl(""+t)}function H0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function TS(t,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var m=F0((h[An]||null).action),S=l.submitter;S&&(i=(i=S[An]||null)?F0(i.formAction):S.getAttribute("formAction"),i!==null&&(m=i,S=null));var T=new Pl("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Wa!==0){var z=S?H0(h,S):new FormData(h);If(s,{pending:!0,data:z,method:h.method,action:m},null,z)}}else typeof m=="function"&&(T.preventDefault(),z=S?H0(h,S):new FormData(h),If(s,{pending:!0,data:z,method:h.method,action:m},m,z))},currentTarget:h}]})}}for(var _h=0;_h<Ju.length;_h++){var vh=Ju[_h],AS=vh.toLowerCase(),wS=vh[0].toUpperCase()+vh.slice(1);Ri(AS,"on"+wS)}Ri(_m,"onAnimationEnd"),Ri(vm,"onAnimationIteration"),Ri(xm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Vy,"onTransitionRun"),Ri(jy,"onTransitionStart"),Ri(Xy,"onTransitionCancel"),Ri(ym,"onTransitionEnd"),Ie("onMouseEnter",["mouseout","mouseover"]),Ie("onMouseLeave",["mouseout","mouseover"]),Ie("onPointerEnter",["pointerout","pointerover"]),Ie("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function k0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],h=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var S=l.length-1;0<=S;S--){var T=l[S],z=T.instance,te=T.currentTarget;if(T=T.listener,z!==m&&h.isPropagationStopped())break e;m=T,h.currentTarget=te;try{m(h)}catch(pe){Bl(pe)}h.currentTarget=null,m=z}else for(S=0;S<l.length;S++){if(T=l[S],z=T.instance,te=T.currentTarget,T=T.listener,z!==m&&h.isPropagationStopped())break e;m=T,h.currentTarget=te;try{m(h)}catch(pe){Bl(pe)}h.currentTarget=null,m=z}}}}function vt(t,i){var s=i[ho];s===void 0&&(s=i[ho]=new Set);var l=t+"__bubble";s.has(l)||(G0(i,t,2,!1),s.add(l))}function xh(t,i,s){var l=0;i&&(l|=4),G0(s,t,l,i)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function yh(t){if(!t[Ec]){t[Ec]=!0,Te.forEach(function(s){s!=="selectionchange"&&(RS.has(s)||xh(s,!1,t),xh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ec]||(i[Ec]=!0,xh("selectionchange",!1,i))}}function G0(t,i,s,l){switch(__(i)){case 2:var h=nM;break;case 8:h=iM;break;default:h=Ph}s=h.bind(null,i,s,t),h=void 0,!Fu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,s,{capture:!0,passive:h}):t.addEventListener(i,s,!0):h!==void 0?t.addEventListener(i,s,{passive:h}):t.addEventListener(i,s,!1)}function Sh(t,i,s,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var T=l.stateNode.containerInfo;if(T===h)break;if(S===4)for(S=l.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===h)return;S=S.return}for(;T!==null;){if(S=w(T),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){l=m=S;continue e}T=T.parentNode}}l=l.return}qp(function(){var te=m,pe=zu(s),Me=[];e:{var ne=Sm.get(t);if(ne!==void 0){var ue=Pl,ke=t;switch(t){case"keypress":if(Ul(s)===0)break e;case"keydown":case"keyup":ue=Sy;break;case"focusin":ke="focus",ue=Vu;break;case"focusout":ke="blur",ue=Vu;break;case"beforeblur":case"afterblur":ue=Vu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Ey;break;case _m:case vm:case xm:ue=hy;break;case ym:ue=Ay;break;case"scroll":case"scrollend":ue=oy;break;case"wheel":ue=Ry;break;case"copy":case"cut":case"paste":ue=py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Jp;break;case"toggle":case"beforetoggle":ue=Dy}var Qe=(i&4)!==0,Xt=!Qe&&(t==="scroll"||t==="scrollend"),Q=Qe?ne!==null?ne+"Capture":null:ne;Qe=[];for(var k=te,ee;k!==null;){var _e=k;if(ee=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ee===null||Q===null||(_e=mo(k,Q),_e!=null&&Qe.push(Yo(k,_e,ee))),Xt)break;k=k.return}0<Qe.length&&(ne=new ue(ne,ke,null,s,pe),Me.push({event:ne,listeners:Qe}))}}if((i&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",ne&&s!==Iu&&(ke=s.relatedTarget||s.fromElement)&&(w(ke)||ke[Qi]))break e;if((ue||ne)&&(ne=pe.window===pe?pe:(ne=pe.ownerDocument)?ne.defaultView||ne.parentWindow:window,ue?(ke=s.relatedTarget||s.toElement,ue=te,ke=ke?w(ke):null,ke!==null&&(Xt=c(ke),Qe=ke.tag,ke!==Xt||Qe!==5&&Qe!==27&&Qe!==6)&&(ke=null)):(ue=null,ke=te),ue!==ke)){if(Qe=Zp,_e="onMouseLeave",Q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=Jp,_e="onPointerLeave",Q="onPointerEnter",k="pointer"),Xt=ue==null?ne:ae(ue),ee=ke==null?ne:ae(ke),ne=new Qe(_e,k+"leave",ue,s,pe),ne.target=Xt,ne.relatedTarget=ee,_e=null,w(pe)===te&&(Qe=new Qe(Q,k+"enter",ke,s,pe),Qe.target=ee,Qe.relatedTarget=Xt,_e=Qe),Xt=_e,ue&&ke)t:{for(Qe=CS,Q=ue,k=ke,ee=0,_e=Q;_e;_e=Qe(_e))ee++;_e=0;for(var Ye=k;Ye;Ye=Qe(Ye))_e++;for(;0<ee-_e;)Q=Qe(Q),ee--;for(;0<_e-ee;)k=Qe(k),_e--;for(;ee--;){if(Q===k||k!==null&&Q===k.alternate){Qe=Q;break t}Q=Qe(Q),k=Qe(k)}Qe=null}else Qe=null;ue!==null&&V0(Me,ne,ue,Qe,!1),ke!==null&&Xt!==null&&V0(Me,Xt,ke,Qe,!0)}}e:{if(ne=te?ae(te):window,ue=ne.nodeName&&ne.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ne.type==="file")var Lt=rm;else if(am(ne))if(om)Lt=Hy;else{Lt=By;var Ge=zy}else ue=ne.nodeName,!ue||ue.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?te&&Pu(te.elementType)&&(Lt=rm):Lt=Fy;if(Lt&&(Lt=Lt(t,te))){sm(Me,Lt,s,pe);break e}Ge&&Ge(t,ne,te),t==="focusout"&&te&&ne.type==="number"&&te.memoizedProps.value!=null&&Un(ne,"number",ne.value)}switch(Ge=te?ae(te):window,t){case"focusin":(am(Ge)||Ge.contentEditable==="true")&&($s=Ge,Ku=te,bo=null);break;case"focusout":bo=Ku=$s=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,mm(Me,s,pe);break;case"selectionchange":if(Gy)break;case"keydown":case"keyup":mm(Me,s,pe)}var ct;if(Xu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Js?nm(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&($p&&s.locale!=="ko"&&(Js||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Js&&(ct=Yp()):(Da=pe,Hu="value"in Da?Da.value:Da.textContent,Js=!0)),Ge=Tc(te,Mt),0<Ge.length&&(Mt=new Qp(Mt,t,null,s,pe),Me.push({event:Mt,listeners:Ge}),ct?Mt.data=ct:(ct=im(s),ct!==null&&(Mt.data=ct)))),(ct=Ly?Uy(t,s):Oy(t,s))&&(Mt=Tc(te,"onBeforeInput"),0<Mt.length&&(Ge=new Qp("onBeforeInput","beforeinput",null,s,pe),Me.push({event:Ge,listeners:Mt}),Ge.data=ct)),TS(Me,t,te,s,pe)}k0(Me,i)})}function Yo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Tc(t,i){for(var s=i+"Capture",l=[];t!==null;){var h=t,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=mo(t,s),h!=null&&l.unshift(Yo(t,h,m)),h=mo(t,i),h!=null&&l.push(Yo(t,h,m))),t.tag===3)return l;t=t.return}return[]}function CS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function V0(t,i,s,l,h){for(var m=i._reactName,S=[];s!==null&&s!==l;){var T=s,z=T.alternate,te=T.stateNode;if(T=T.tag,z!==null&&z===l)break;T!==5&&T!==26&&T!==27||te===null||(z=te,h?(te=mo(s,m),te!=null&&S.unshift(Yo(s,te,z))):h||(te=mo(s,m),te!=null&&S.push(Yo(s,te,z)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var DS=/\r\n?/g,NS=/\u0000|\uFFFD/g;function j0(t){return(typeof t=="string"?t:""+t).replace(DS,`
`).replace(NS,"")}function X0(t,i){return i=j0(i),j0(t)===i}function jt(t,i,s,l,h,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Yn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Yn(t,""+l);break;case"className":Kt(t,"class",l);break;case"tabIndex":Kt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Kt(t,s,l);break;case"style":Xp(t,l,m);break;case"data":if(i!=="object"){Kt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Nl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&jt(t,i,"name",h.name,h,null),jt(t,i,"formEncType",h.formEncType,h,null),jt(t,i,"formMethod",h.formMethod,h,null),jt(t,i,"formTarget",h.formTarget,h,null)):(jt(t,i,"encType",h.encType,h,null),jt(t,i,"method",h.method,h,null),jt(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Nl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Ji);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Nl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Et(t,"popover",l);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Et(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=sy.get(s)||s,Et(t,s,l))}}function Mh(t,i,s,l,h,m){switch(s){case"style":Xp(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Yn(t,l):(typeof l=="number"||typeof l=="bigint")&&Yn(t,""+l);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Le.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=t[An]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,h);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Et(t,s,l)}}}function Nn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var l=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var S=s[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:jt(t,i,m,S,s,null)}}h&&jt(t,i,"srcSet",s.srcSet,s,null),l&&jt(t,i,"src",s.src,s,null);return;case"input":vt("invalid",t);var T=m=S=h=null,z=null,te=null;for(l in s)if(s.hasOwnProperty(l)){var pe=s[l];if(pe!=null)switch(l){case"name":h=pe;break;case"type":S=pe;break;case"checked":z=pe;break;case"defaultChecked":te=pe;break;case"value":m=pe;break;case"defaultValue":T=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,i));break;default:jt(t,i,l,pe,s,null)}}Bn(t,m,T,z,te,S,h,!1);return;case"select":vt("invalid",t),l=S=m=null;for(h in s)if(s.hasOwnProperty(h)&&(T=s[h],T!=null))switch(h){case"value":m=T;break;case"defaultValue":S=T;break;case"multiple":l=T;default:jt(t,i,h,T,s,null)}i=m,s=S,t.multiple=!!l,i!=null?nn(t,!!l,i,!1):s!=null&&nn(t,!!l,s,!0);return;case"textarea":vt("invalid",t),m=h=l=null;for(S in s)if(s.hasOwnProperty(S)&&(T=s[S],T!=null))switch(S){case"value":l=T;break;case"defaultValue":h=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:jt(t,i,S,T,s,null)}Ks(t,l,h,m);return;case"option":for(z in s)if(s.hasOwnProperty(z)&&(l=s[z],l!=null))switch(z){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:jt(t,i,z,l,s,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(l=0;l<qo.length;l++)vt(qo[l],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(l=s[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:jt(t,i,te,l,s,null)}return;default:if(Pu(i)){for(pe in s)s.hasOwnProperty(pe)&&(l=s[pe],l!==void 0&&Mh(t,i,pe,l,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(l=s[T],l!=null&&jt(t,i,T,l,s,null))}function LS(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,S=null,T=null,z=null,te=null,pe=null;for(ue in s){var Me=s[ue];if(s.hasOwnProperty(ue)&&Me!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":z=Me;default:l.hasOwnProperty(ue)||jt(t,i,ue,null,l,Me)}}for(var ne in l){var ue=l[ne];if(Me=s[ne],l.hasOwnProperty(ne)&&(ue!=null||Me!=null))switch(ne){case"type":m=ue;break;case"name":h=ue;break;case"checked":te=ue;break;case"defaultChecked":pe=ue;break;case"value":S=ue;break;case"defaultValue":T=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(a(137,i));break;default:ue!==Me&&jt(t,i,ne,ue,l,Me)}}Gt(t,S,T,z,te,pe,m,h);return;case"select":ue=S=T=ne=null;for(m in s)if(z=s[m],s.hasOwnProperty(m)&&z!=null)switch(m){case"value":break;case"multiple":ue=z;default:l.hasOwnProperty(m)||jt(t,i,m,null,l,z)}for(h in l)if(m=l[h],z=s[h],l.hasOwnProperty(h)&&(m!=null||z!=null))switch(h){case"value":ne=m;break;case"defaultValue":T=m;break;case"multiple":S=m;default:m!==z&&jt(t,i,h,m,l,z)}i=T,s=S,l=ue,ne!=null?nn(t,!!s,ne,!1):!!l!=!!s&&(i!=null?nn(t,!!s,i,!0):nn(t,!!s,s?[]:"",!1));return;case"textarea":ue=ne=null;for(T in s)if(h=s[T],s.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:jt(t,i,T,null,l,h)}for(S in l)if(h=l[S],m=s[S],l.hasOwnProperty(S)&&(h!=null||m!=null))switch(S){case"value":ne=h;break;case"defaultValue":ue=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&jt(t,i,S,h,l,m)}wn(t,ne,ue);return;case"option":for(var ke in s)if(ne=s[ke],s.hasOwnProperty(ke)&&ne!=null&&!l.hasOwnProperty(ke))switch(ke){case"selected":t.selected=!1;break;default:jt(t,i,ke,null,l,ne)}for(z in l)if(ne=l[z],ue=s[z],l.hasOwnProperty(z)&&ne!==ue&&(ne!=null||ue!=null))switch(z){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:jt(t,i,z,ne,l,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in s)ne=s[Qe],s.hasOwnProperty(Qe)&&ne!=null&&!l.hasOwnProperty(Qe)&&jt(t,i,Qe,null,l,ne);for(te in l)if(ne=l[te],ue=s[te],l.hasOwnProperty(te)&&ne!==ue&&(ne!=null||ue!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(a(137,i));break;default:jt(t,i,te,ne,l,ue)}return;default:if(Pu(i)){for(var Xt in s)ne=s[Xt],s.hasOwnProperty(Xt)&&ne!==void 0&&!l.hasOwnProperty(Xt)&&Mh(t,i,Xt,void 0,l,ne);for(pe in l)ne=l[pe],ue=s[pe],!l.hasOwnProperty(pe)||ne===ue||ne===void 0&&ue===void 0||Mh(t,i,pe,ne,l,ue);return}}for(var Q in s)ne=s[Q],s.hasOwnProperty(Q)&&ne!=null&&!l.hasOwnProperty(Q)&&jt(t,i,Q,null,l,ne);for(Me in l)ne=l[Me],ue=s[Me],!l.hasOwnProperty(Me)||ne===ue||ne==null&&ue==null||jt(t,i,Me,ne,l,ue)}function W0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function US(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var h=s[l],m=h.transferSize,S=h.initiatorType,T=h.duration;if(m&&T&&W0(S)){for(S=0,T=h.responseEnd,l+=1;l<s.length;l++){var z=s[l],te=z.startTime;if(te>T)break;var pe=z.transferSize,Me=z.initiatorType;pe&&W0(Me)&&(z=z.responseEnd,S+=pe*(z<T?1:(T-te)/(z-te)))}if(--l,i+=8*(m+S)/(h.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bh=null,Eh=null;function Ac(t){return t.nodeType===9?t:t.ownerDocument}function q0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Th(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ah=null;function OS(){var t=window.event;return t&&t.type==="popstate"?t===Ah?!1:(Ah=t,!0):(Ah=null,!1)}var K0=typeof setTimeout=="function"?setTimeout:void 0,PS=typeof clearTimeout=="function"?clearTimeout:void 0,Z0=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof Z0<"u"?function(t){return Z0.resolve(null).then(t).catch(zS)}:K0;function zS(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function Q0(t,i){var s=i,l=0;do{var h=s.nextSibling;if(t.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(h),Ar(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Ko(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Ko(s);for(var m=s.firstChild;m;){var S=m.nextSibling,T=m.nodeName;m[ms]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=S}}else s==="body"&&Ko(t.ownerDocument.body);s=h}while(s);Ar(i)}function J0(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function wh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":wh(s),po(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function BS(t,i,s,l){for(;t.nodeType===1;){var h=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ms])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function FS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=yi(t.nextSibling),t===null))return null;return t}function $0(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=yi(t.nextSibling),t===null))return null;return t}function Rh(t){return t.data==="$?"||t.data==="$~"}function Ch(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function HS(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function yi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Dh=null;function e_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return yi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function t_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function n_(t,i,s){switch(i=Ac(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Ko(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);po(t)}var Si=new Map,i_=new Set;function wc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=J.d;J.d={f:kS,r:GS,D:VS,C:jS,L:XS,m:WS,X:YS,S:qS,M:KS};function kS(){var t=pa.f(),i=vc();return t||i}function GS(t){var i=K(t);i!==null&&i.tag===5&&i.type==="form"?yg(i):pa.r(t)}var br=typeof document>"u"?null:document;function a_(t,i,s){var l=br;if(l&&typeof i=="string"&&i){var h=yn(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),i_.has(h)||(i_.add(h),t={rel:t,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Nn(i,"link",t),W(i),l.head.appendChild(i)))}}function VS(t){pa.D(t),a_("dns-prefetch",t,null)}function jS(t,i){pa.C(t,i),a_("preconnect",t,i)}function XS(t,i,s){pa.L(t,i,s);var l=br;if(l&&t&&i){var h='link[rel="preload"][as="'+yn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+yn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+yn(s.imageSizes)+'"]')):h+='[href="'+yn(t)+'"]';var m=h;switch(i){case"style":m=Er(t);break;case"script":m=Tr(t)}Si.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Si.set(m,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Zo(m))||i==="script"&&l.querySelector(Qo(m))||(i=l.createElement("link"),Nn(i,"link",t),W(i),l.head.appendChild(i)))}}function WS(t,i){pa.m(t,i);var s=br;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+yn(l)+'"][href="'+yn(t)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Tr(t)}if(!Si.has(m)&&(t=g({rel:"modulepreload",href:t},i),Si.set(m,t),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Qo(m)))return}l=s.createElement("link"),Nn(l,"link",t),W(l),s.head.appendChild(l)}}}function qS(t,i,s){pa.S(t,i,s);var l=br;if(l&&t){var h=se(l).hoistableStyles,m=Er(t);i=i||"default";var S=h.get(m);if(!S){var T={loading:0,preload:null};if(S=l.querySelector(Zo(m)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Si.get(m))&&Nh(t,s);var z=S=l.createElement("link");W(z),Nn(z,"link",t),z._p=new Promise(function(te,pe){z.onload=te,z.onerror=pe}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Rc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:T},h.set(m,S)}}}function YS(t,i){pa.X(t,i);var s=br;if(s&&t){var l=se(s).hoistableScripts,h=Tr(t),m=l.get(h);m||(m=s.querySelector(Qo(h)),m||(t=g({src:t,async:!0},i),(i=Si.get(h))&&Lh(t,i),m=s.createElement("script"),W(m),Nn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function KS(t,i){pa.M(t,i);var s=br;if(s&&t){var l=se(s).hoistableScripts,h=Tr(t),m=l.get(h);m||(m=s.querySelector(Qo(h)),m||(t=g({src:t,async:!0,type:"module"},i),(i=Si.get(h))&&Lh(t,i),m=s.createElement("script"),W(m),Nn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function s_(t,i,s,l){var h=(h=ce.current)?wc(h):null;if(!h)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Er(s.href),s=se(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Er(s.href);var m=se(h).hoistableStyles,S=m.get(t);if(S||(h=h.ownerDocument||h,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,S),(m=h.querySelector(Zo(t)))&&!m._p&&(S.instance=m,S.state.loading=5),Si.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Si.set(t,s),m||ZS(h,t,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Tr(s),s=se(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Er(t){return'href="'+yn(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function r_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function ZS(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Nn(i,"link",s),W(i),t.head.appendChild(i))}function Tr(t){return'[src="'+yn(t)+'"]'}function Qo(t){return"script[async]"+t}function o_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+yn(s.href)+'"]');if(l)return i.instance=l,W(l),l;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),W(l),Nn(l,"style",h),Rc(l,s.precedence,t),i.instance=l;case"stylesheet":h=Er(s.href);var m=t.querySelector(Zo(h));if(m)return i.state.loading|=4,i.instance=m,W(m),m;l=r_(s),(h=Si.get(h))&&Nh(l,h),m=(t.ownerDocument||t).createElement("link"),W(m);var S=m;return S._p=new Promise(function(T,z){S.onload=T,S.onerror=z}),Nn(m,"link",l),i.state.loading|=4,Rc(m,s.precedence,t),i.instance=m;case"script":return m=Tr(s.src),(h=t.querySelector(Qo(m)))?(i.instance=h,W(h),h):(l=s,(h=Si.get(m))&&(l=g({},s),Lh(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),W(h),Nn(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Rc(l,s.precedence,t));return i.instance}function Rc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,S=0;S<l.length;S++){var T=l[S];if(T.dataset.precedence===i)m=T;else if(m!==h)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Nh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Lh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Cc=null;function l_(t,i,s){if(Cc===null){var l=new Map,h=Cc=new Map;h.set(s,l)}else h=Cc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),h=0;h<s.length;h++){var m=s[h];if(!(m[ms]||m[tn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(i)||"";S=t+S;var T=l.get(S);T?T.push(m):l.set(S,[m])}}return l}function c_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function QS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function u_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function JS(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=Er(l.href),m=i.querySelector(Zo(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Dc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,W(m);return}m=i.ownerDocument||i,l=r_(l),(h=Si.get(h))&&Nh(l,h),m=m.createElement("link"),W(m);var S=m;S._p=new Promise(function(T,z){S.onload=T,S.onerror=z}),Nn(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Dc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Uh=0;function $S(t,i){return t.stylesheets&&t.count===0&&Lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Uh===0&&(Uh=62500*US());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Uh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nc=null;function Lc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nc=new Map,i.forEach(eM,t),Nc=null,Dc.call(t))}function eM(t,i){if(!(i.state.loading&4)){var s=Nc.get(t);if(s)var l=s.get(null);else{s=new Map,Nc.set(t,s);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var S=h[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}h=i.instance,S=h.getAttribute("data-precedence"),m=s.get(S)||l,m===l&&s.set(null,h),s.set(S,h),this.count++,l=Dc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Jo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function tM(t,i,s,l,h,m,S,T,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function f_(t,i,s,l,h,m,S,T,z,te,pe,Me){return t=new tM(t,i,s,S,z,te,pe,Me,T),i=1,m===!0&&(i|=24),m=ai(3,null,null,i),t.current=m,m.stateNode=t,i=hf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},gf(m),t}function h_(t){return t?(t=nr,t):nr}function d_(t,i,s,l,h,m){h=h_(h),l.context===null?l.context=h:l.pendingContext=h,l=Ia(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=za(t,l,i),s!==null&&(ei(s,t,i),Do(s,t,i))}function p_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Oh(t,i){p_(t,i),(t=t.alternate)&&p_(t,i)}function m_(t){if(t.tag===13||t.tag===31){var i=xs(t,67108864);i!==null&&ei(i,t,67108864),Oh(t,67108864)}}function g_(t){if(t.tag===13||t.tag===31){var i=ci();i=ds(i);var s=xs(t,i);s!==null&&ei(s,t,i),Oh(t,i)}}var Uc=!0;function nM(t,i,s,l){var h=I.T;I.T=null;var m=J.p;try{J.p=2,Ph(t,i,s,l)}finally{J.p=m,I.T=h}}function iM(t,i,s,l){var h=I.T;I.T=null;var m=J.p;try{J.p=8,Ph(t,i,s,l)}finally{J.p=m,I.T=h}}function Ph(t,i,s,l){if(Uc){var h=Ih(l);if(h===null)Sh(t,i,l,Oc,s),v_(t,l);else if(sM(h,t,i,s,l))l.stopPropagation();else if(v_(t,l),i&4&&-1<aM.indexOf(t)){for(;h!==null;){var m=K(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=Re(m.pendingLanes);if(S!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var z=1<<31-$e(S);T.entanglements[1]|=z,S&=~z}ji(m),(Ot&6)===0&&(gc=ge()+500,Wo(0))}}break;case 31:case 13:T=xs(m,2),T!==null&&ei(T,m,2),vc(),Oh(m,2)}if(m=Ih(l),m===null&&Sh(t,i,l,Oc,s),m===h)break;h=m}h!==null&&l.stopPropagation()}else Sh(t,i,l,null,s)}}function Ih(t){return t=zu(t),zh(t)}var Oc=null;function zh(t){if(Oc=null,t=w(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Oc=t,null}function __(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case Se:return 2;case Ve:return 8;case Ce:case Fe:return 32;case yt:return 268435456;default:return 32}default:return 32}}var Bh=!1,Ya=null,Ka=null,Za=null,$o=new Map,el=new Map,Qa=[],aM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v_(t,i){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":$o.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(i.pointerId)}}function tl(t,i,s,l,h,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=K(i),i!==null&&m_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function sM(t,i,s,l,h){switch(i){case"focusin":return Ya=tl(Ya,t,i,s,l,h),!0;case"dragenter":return Ka=tl(Ka,t,i,s,l,h),!0;case"mouseover":return Za=tl(Za,t,i,s,l,h),!0;case"pointerover":var m=h.pointerId;return $o.set(m,tl($o.get(m)||null,t,i,s,l,h)),!0;case"gotpointercapture":return m=h.pointerId,el.set(m,tl(el.get(m)||null,t,i,s,l,h)),!0}return!1}function x_(t){var i=w(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ps(t.priority,function(){g_(s)});return}}else if(i===31){if(i=f(s),i!==null){t.blockedOn=i,ps(t.priority,function(){g_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ih(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Iu=l,s.target.dispatchEvent(l),Iu=null}else return i=K(s),i!==null&&m_(i),t.blockedOn=s,!1;i.shift()}return!0}function y_(t,i,s){Pc(t)&&s.delete(i)}function rM(){Bh=!1,Ya!==null&&Pc(Ya)&&(Ya=null),Ka!==null&&Pc(Ka)&&(Ka=null),Za!==null&&Pc(Za)&&(Za=null),$o.forEach(y_),el.forEach(y_)}function Ic(t,i){t.blockedOn===i&&(t.blockedOn=null,Bh||(Bh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,rM)))}var zc=null;function S_(t){zc!==t&&(zc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){zc===t&&(zc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(zh(l||s)===null)continue;break}var m=K(s);m!==null&&(t.splice(i,3),i-=3,If(m,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Ar(t){function i(z){return Ic(z,t)}Ya!==null&&Ic(Ya,t),Ka!==null&&Ic(Ka,t),Za!==null&&Ic(Za,t),$o.forEach(i),el.forEach(i);for(var s=0;s<Qa.length;s++){var l=Qa[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Qa.length&&(s=Qa[0],s.blockedOn===null);)x_(s),s.blockedOn===null&&Qa.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],m=s[l+1],S=h[An]||null;if(typeof m=="function")S||S_(s);else if(S){var T=null;if(m&&m.hasAttribute("formAction")){if(h=m,S=m[An]||null)T=S.formAction;else if(zh(h)!==null)continue}else T=S.action;typeof T=="function"?s[l+1]=T:(s.splice(l,3),l-=3),S_(s)}}}function M_(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return h=S})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Fh(t){this._internalRoot=t}Bc.prototype.render=Fh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ci();d_(s,l,t,i,null,null)},Bc.prototype.unmount=Fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;d_(t.current,2,null,t,null,null),vc(),i[Qi]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var i=fo();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Qa.length&&i!==0&&i<Qa[s].priority;s++);Qa.splice(s,0,t),s===0&&x_(t)}};var b_=e.version;if(b_!=="19.2.4")throw Error(a(527,b_,"19.2.4"));J.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var oM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{Ze=Fc.inject(oM),je=Fc}catch{}}return il.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,l="",h=Dg,m=Ng,S=Lg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=f_(t,1,!1,null,null,s,l,null,h,m,S,M_),t[Qi]=i.current,yh(t),new Fh(i)},il.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var l=!1,h="",m=Dg,S=Ng,T=Lg,z=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.formState!==void 0&&(z=s.formState)),i=f_(t,1,!0,i,s??null,l,h,z,m,S,T,M_),i.context=h_(null),s=i.current,l=ci(),l=ds(l),h=Ia(l),h.callback=null,za(s,h,l),s=l,i.current.lanes=s,Tn(i,s),ji(i),t[Qi]=i.current,yh(t),new Bc(i)},il.version="19.2.4",il}var U_;function _M(){if(U_)return Gh.exports;U_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gh.exports=gM(),Gh.exports}var vM=_M();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yM=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),O_=o=>{const e=yM(o);return e.charAt(0).toUpperCase()+e.slice(1)},dx=(...o)=>o.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),SM=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var MM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=dt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:r="",children:c,iconNode:u,...f},d)=>dt.createElement("svg",{ref:d,...MM,width:e,height:e,stroke:o,strokeWidth:a?Number(n)*24/Number(e):n,className:dx("lucide",r),...!c&&!SM(f)&&{"aria-hidden":"true"},...f},[...u.map(([p,_])=>dt.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=(o,e)=>{const n=dt.forwardRef(({className:a,...r},c)=>dt.createElement(bM,{ref:c,iconNode:e,className:dx(`lucide-${xM(O_(o))}`,`lucide-${o}`,a),...r}));return n.displayName=O_(o),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],TM=Ca("arrow-up-right",EM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],wM=Ca("chevron-left",AM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],CM=Ca("chevron-right",RM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],NM=Ca("code-xml",DM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Wh=Ca("external-link",LM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],OM=Ca("github",UM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],IM=Ca("globe",PM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],BM=Ca("linkedin",zM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],HM=Ca("palette",FM),js={email:"wesley2014.wv53@gmail.com",linkedin:"https://www.linkedin.com/in/wesley-vitor-3946152b6",site:"wes.experience",whatsappE164:"5511999999999",github:"https://github.com/Wesley-0001"},kM=`https://${js.site}`,GM="https://wesley-0001.github.io/BBS-Portfolio-main/";function P_(o){return function(){let e=o+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const px="[data-wes-hero-visual]";function VM(o,e){const n=document.elementFromPoint(o,e);return n instanceof Element?n.closest(px)!==null:!1}function jM(o){return o instanceof Element?!!o.closest(`a,button,input,textarea,select,label,[role='button'],[contenteditable='true'],canvas,${px}`):!1}function XM({alternateBg:o=!1,className:e=""}){const n=dt.useRef(null);return dt.useEffect(()=>{const a=n.current;if(!a)return;const r=a.getContext("2d",{alpha:!0});if(!r)return;const c=window.matchMedia("(prefers-reduced-motion: reduce)");let u=c.matches;const f=[];let d=window.innerWidth,p=window.innerHeight;const _={x:0,y:0,active:!1},g=()=>d<768,v=()=>g()?88:128,y=()=>g()?2:4,b=.011,E=.935,M=.92;function x(){f.length=0;const re=P_(21611),ve=d*p,$=g()?Math.min(34,Math.max(22,Math.floor(ve/52e3))):Math.min(52,Math.max(34,Math.floor(ve/38e3)));for(let me=0;me<$;me++){const j=re(),le=re(),ce=j*d,fe=le*p;f.push({nx:j,ny:le,x:ce,y:fe,vx:0,vy:0,spawned:!1})}}function O(){for(const re of f)re.x=re.nx*d,re.y=re.ny*p,re.vx=0,re.vy=0}function L(){const re=v();for(;f.length>re;){const ve=f.findIndex(D=>D.spawned);if(ve===-1)break;f.splice(ve,1)}}function C(re,ve){if(u)return;const D=P_((Date.now()^re*997)>>>0),$=Math.min(42,Math.min(d,p)*.045);for(let me=0;me<y();me++){const j=D()*Math.PI*2,le=D()*$;let ce=(re+Math.cos(j)*le)/d,fe=(ve+Math.sin(j)*le)/p;ce=Math.min(.998,Math.max(.002,ce)),fe=Math.min(.998,Math.max(.002,fe)),f.push({nx:ce,ny:fe,x:ce*d,y:fe*p,vx:(D()-.5)*.42,vy:(D()-.5)*.42,spawned:!0})}L()}function V(){const re=Math.min(d,p),ve=Math.min(185,Math.max(118,re*.21)),D=Math.min(168,Math.max(96,re*.14));return{linkDist:ve,linkDistSq:ve*ve,repulseR:D,repulseRSq:D*D}}function H(){const{repulseR:re,repulseRSq:ve}=V();for(const D of f){D.nx=Math.min(.999,Math.max(.001,D.nx)),D.ny=Math.min(.999,Math.max(.001,D.ny));const $=D.nx*d,me=D.ny*p;let j=($-D.x)*b,le=(me-D.y)*b;if(_.active){const fe=D.x-_.x,we=D.y-_.y,ze=fe*fe+we*we;if(ze>4&&ze<ve){const Be=Math.sqrt(ze),wt=M*(1-Be/re)/Be;j+=fe*wt,le+=we*wt}}D.vx=(D.vx+j)*E,D.vy=(D.vy+le)*E,D.x+=D.vx,D.y+=D.vy;const ce=8;D.x<ce&&(D.x=ce),D.y<ce&&(D.y=ce),D.x>d-ce&&(D.x=d-ce),D.y>p-ce&&(D.y=p-ce)}}function P(re){return o?`rgba(200, 230, 235, ${re})`:`rgba(255, 255, 255, ${re})`}function q(re){return o?`rgba(215, 235, 240, ${re})`:`rgba(255, 255, 255, ${re})`}function N(){const{linkDist:re,linkDistSq:ve}=V();r.clearRect(0,0,d,p);const D=f.length;r.lineWidth=.55,r.lineCap="round";for(let $=0;$<D;$++)for(let me=$+1;me<D;me++){const j=f[$],le=f[me],ce=j.x-le.x,fe=j.y-le.y,we=ce*ce+fe*fe;if(we>ve)continue;const At=.026+(1-Math.sqrt(we)/re)*.062;r.strokeStyle=P(At),r.beginPath(),r.moveTo(j.x,j.y),r.lineTo(le.x,le.y),r.stroke()}for(const $ of f){const me=.19+($.spawned?.055:0);r.fillStyle=q(me),r.beginPath(),r.arc($.x,$.y,$.spawned?1.25:1.05,0,Math.PI*2),r.fill()}}function R(){const{linkDist:re,linkDistSq:ve}=V();r.clearRect(0,0,d,p),r.lineWidth=.55;for(let D=0;D<f.length;D++)for(let $=D+1;$<f.length;$++){const me=f[D],j=f[$],le=me.x-j.x,ce=me.y-j.y,fe=le*le+ce*ce;if(fe>ve)continue;const Be=.026+(1-Math.sqrt(fe)/re)*.06;r.strokeStyle=P(Be),r.beginPath(),r.moveTo(me.x,me.y),r.lineTo(j.x,j.y),r.stroke()}for(const D of f)r.fillStyle=q(.32),r.beginPath(),r.arc(D.x,D.y,1.05,0,Math.PI*2),r.fill()}let F=0;const he=()=>{u||(H(),N(),F=requestAnimationFrame(he))};function oe(){d=window.innerWidth,p=window.innerHeight;const re=g()?1.25:2,ve=Math.min(window.devicePixelRatio||1,re);a.width=Math.floor(d*ve),a.height=Math.floor(p*ve),a.style.width=`${d}px`,a.style.height=`${p}px`,r.setTransform(ve,0,0,ve,0,0),O(),L()}const xe=()=>{cancelAnimationFrame(F),F=0,!(document.visibilityState==="hidden"||u)&&(F=requestAnimationFrame(he))},ye=re=>{if(VM(re.clientX,re.clientY)){_.active=!1;return}_.x=re.clientX,_.y=re.clientY,_.active=!0},I=()=>{_.active=!1},J=re=>{re.button===0&&(jM(re.target)||C(re.clientX,re.clientY))},Z=()=>{u=c.matches,cancelAnimationFrame(F),u?(O(),R()):F=requestAnimationFrame(he)};return x(),oe(),u?R():F=requestAnimationFrame(he),window.addEventListener("resize",oe),window.addEventListener("pointermove",ye,{passive:!0}),window.addEventListener("pointerdown",J,{passive:!0}),document.documentElement.addEventListener("pointerleave",I),document.addEventListener("visibilitychange",xe),c.addEventListener("change",Z),()=>{cancelAnimationFrame(F),window.removeEventListener("resize",oe),window.removeEventListener("pointermove",ye),window.removeEventListener("pointerdown",J),document.documentElement.removeEventListener("pointerleave",I),document.removeEventListener("visibilitychange",xe),c.removeEventListener("change",Z)}},[o]),G.jsx("canvas",{ref:n,className:e,"aria-hidden":!0})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bp="175",jr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},WM=0,I_=1,qM=2,mx=1,YM=2,Sa=3,wa=0,ni=1,Wi=2,us=0,Xr=1,z_=2,B_=3,F_=4,KM=5,Hs=100,ZM=101,QM=102,JM=103,$M=104,eb=200,tb=201,nb=202,ib=203,Nd=204,Ld=205,ab=206,sb=207,rb=208,ob=209,lb=210,cb=211,ub=212,fb=213,hb=214,Ud=0,Od=1,Pd=2,Yr=3,Id=4,zd=5,Bd=6,Fd=7,gx=0,db=1,pb=2,fs=0,mb=1,gb=2,_b=3,_x=4,vb=5,xb=6,yb=7,H_="attached",Sb="detached",vx=300,Kr=301,Zr=302,Hd=303,kd=304,Cu=306,Qr=1e3,ls=1001,Eu=1002,jn=1003,xx=1004,ml=1005,hi=1006,gu=1007,ba=1008,Ra=1009,yx=1010,Sx=1011,yl=1012,Ep=1013,Xs=1014,Ii=1015,wl=1016,Tp=1017,Ap=1018,Sl=1020,Mx=35902,bx=1021,Ex=1022,Ei=1023,Tx=1024,Ax=1025,Ml=1026,bl=1027,wp=1028,Rp=1029,wx=1030,Cp=1031,Dp=1033,_u=33776,vu=33777,xu=33778,yu=33779,Gd=35840,Vd=35841,jd=35842,Xd=35843,Wd=36196,qd=37492,Yd=37496,Kd=37808,Zd=37809,Qd=37810,Jd=37811,$d=37812,ep=37813,tp=37814,np=37815,ip=37816,ap=37817,sp=37818,rp=37819,op=37820,lp=37821,Su=36492,cp=36494,up=36495,Rx=36283,fp=36284,hp=36285,dp=36286,El=2300,Tl=2301,qh=2302,k_=2400,G_=2401,V_=2402,Mb=2500,bb=0,Cx=1,pp=2,Eb=3200,Tb=3201,Dx=0,Ab=1,os="",bn="srgb",Wn="srgb-linear",Tu="linear",Wt="srgb",wr=7680,j_=519,wb=512,Rb=513,Cb=514,Nx=515,Db=516,Nb=517,Lb=518,Ub=519,mp=35044,X_="300 es",Ea=2e3,Au=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let W_=1234567;const _l=Math.PI/180,Jr=180/Math.PI;function zi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function Np(o,e){return(o%e+e)%e}function Ob(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function Pb(o,e,n){return o!==e?(n-o)/(e-o):0}function vl(o,e,n){return(1-n)*o+n*e}function Ib(o,e,n,a){return vl(o,e,1-Math.exp(-n*a))}function zb(o,e=1){return e-Math.abs(Np(o,e*2)-e)}function Bb(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function Fb(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function Hb(o,e){return o+Math.floor(Math.random()*(e-o+1))}function kb(o,e){return o+Math.random()*(e-o)}function Gb(o){return o*(.5-Math.random())}function Vb(o){o!==void 0&&(W_=o);let e=W_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jb(o){return o*_l}function Xb(o){return o*Jr}function Wb(o){return(o&o-1)===0&&o!==0}function qb(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Yb(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Kb(o,e,n,a,r){const c=Math.cos,u=Math.sin,f=c(n/2),d=u(n/2),p=c((e+a)/2),_=u((e+a)/2),g=c((e-a)/2),v=u((e-a)/2),y=c((a-e)/2),b=u((a-e)/2);switch(r){case"XYX":o.set(f*_,d*g,d*v,f*p);break;case"YZY":o.set(d*v,f*_,d*g,f*p);break;case"ZXZ":o.set(d*g,d*v,f*_,f*p);break;case"XZX":o.set(f*_,d*b,d*y,f*p);break;case"YXY":o.set(d*y,f*_,d*b,f*p);break;case"ZYZ":o.set(d*b,d*y,f*_,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Oi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ft(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Lp={DEG2RAD:_l,RAD2DEG:Jr,generateUUID:zi,clamp:gt,euclideanModulo:Np,mapLinear:Ob,inverseLerp:Pb,lerp:vl,damp:Ib,pingpong:zb,smoothstep:Bb,smootherstep:Fb,randInt:Hb,randFloat:kb,randFloatSpread:Gb,seededRandom:Vb,degToRad:jb,radToDeg:Xb,isPowerOfTwo:Wb,ceilPowerOfTwo:qb,floorPowerOfTwo:Yb,setQuaternionFromProperEuler:Kb,normalize:Ft,denormalize:Oi};class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*r+e.x,this.y=c*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,a,r,c,u,f,d,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,f,d,p)}set(e,n,a,r,c,u,f,d,p){const _=this.elements;return _[0]=e,_[1]=r,_[2]=f,_[3]=n,_[4]=c,_[5]=d,_[6]=a,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],f=a[3],d=a[6],p=a[1],_=a[4],g=a[7],v=a[2],y=a[5],b=a[8],E=r[0],M=r[3],x=r[6],O=r[1],L=r[4],C=r[7],V=r[2],H=r[5],P=r[8];return c[0]=u*E+f*O+d*V,c[3]=u*M+f*L+d*H,c[6]=u*x+f*C+d*P,c[1]=p*E+_*O+g*V,c[4]=p*M+_*L+g*H,c[7]=p*x+_*C+g*P,c[2]=v*E+y*O+b*V,c[5]=v*M+y*L+b*H,c[8]=v*x+y*C+b*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],f=e[5],d=e[6],p=e[7],_=e[8];return n*u*_-n*f*p-a*c*_+a*f*d+r*c*p-r*u*d}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],f=e[5],d=e[6],p=e[7],_=e[8],g=_*u-f*p,v=f*d-_*c,y=p*c-u*d,b=n*g+a*v+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=g*E,e[1]=(r*p-_*a)*E,e[2]=(f*a-r*u)*E,e[3]=v*E,e[4]=(_*n-r*d)*E,e[5]=(r*c-f*n)*E,e[6]=y*E,e[7]=(a*d-p*n)*E,e[8]=(u*n-a*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,c,u,f){const d=Math.cos(c),p=Math.sin(c);return this.set(a*d,a*p,-a*(d*u+p*f)+u+e,-r*p,r*d,-r*(-p*u+d*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Yh.makeScale(e,n)),this}rotate(e){return this.premultiply(Yh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yh=new ut;function Lx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Al(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zb(){const o=Al("canvas");return o.style.display="block",o}const q_={};function Mu(o){o in q_||(q_[o]=!0,console.warn(o))}function Qb(o,e,n){return new Promise(function(a,r){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function Jb(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $b(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Y_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eE(){const o={enabled:!0,workingColorSpace:Wn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Wt&&(r.r=Ta(r.r),r.g=Ta(r.g),r.b=Ta(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Wt&&(r.r=Wr(r.r),r.g=Wr(r.g),r.b=Wr(r.b))),r},fromWorkingColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},toWorkingColorSpace:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===os?Tu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Wn]:{primaries:e,whitePoint:a,transfer:Tu,toXYZ:Y_,fromXYZ:K_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:a,transfer:Wt,toXYZ:Y_,fromXYZ:K_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),o}const Ct=eE();function Ta(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Rr;class tE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Rr===void 0&&(Rr=Al("canvas")),Rr.width=e.width,Rr.height=e.height;const r=Rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Rr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=Ta(c[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ta(n[a]/255)*255):n[a]=Ta(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nE=0;class Up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?c.push(Kh(r[u].image)):c.push(Kh(r[u]))}else c=Kh(r);a.url=c}return n||(e.images[this.uuid]=a),a}}function Kh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iE=0;class En extends qs{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,a=ls,r=ls,c=hi,u=ba,f=Ei,d=Ra,p=En.DEFAULT_ANISOTROPY,_=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=zi(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case Eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case Eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=vx;En.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,a=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,c;const d=e.elements,p=d[0],_=d[4],g=d[8],v=d[1],y=d[5],b=d[9],E=d[2],M=d[6],x=d[10];if(Math.abs(_-v)<.01&&Math.abs(g-E)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+E)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,C=(y+1)/2,V=(x+1)/2,H=(_+v)/4,P=(g+E)/4,q=(b+M)/4;return L>C&&L>V?L<.01?(a=0,r=.707106781,c=.707106781):(a=Math.sqrt(L),r=H/a,c=P/a):C>V?C<.01?(a=.707106781,r=0,c=.707106781):(r=Math.sqrt(C),a=H/r,c=q/r):V<.01?(a=.707106781,r=.707106781,c=0):(c=Math.sqrt(V),a=P/c,r=q/c),this.set(a,r,c,n),this}let O=Math.sqrt((M-b)*(M-b)+(g-E)*(g-E)+(v-_)*(v-_));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(g-E)/O,this.z=(v-_)/O,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aE extends qs{constructor(e=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new En(r,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Up(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ws extends aE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Ux extends En{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sE extends En{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,c,u,f){let d=a[r+0],p=a[r+1],_=a[r+2],g=a[r+3];const v=c[u+0],y=c[u+1],b=c[u+2],E=c[u+3];if(f===0){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=g;return}if(f===1){e[n+0]=v,e[n+1]=y,e[n+2]=b,e[n+3]=E;return}if(g!==E||d!==v||p!==y||_!==b){let M=1-f;const x=d*v+p*y+_*b+g*E,O=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const V=Math.sqrt(L),H=Math.atan2(V,x*O);M=Math.sin(M*H)/V,f=Math.sin(f*H)/V}const C=f*O;if(d=d*M+v*C,p=p*M+y*C,_=_*M+b*C,g=g*M+E*C,M===1-f){const V=1/Math.sqrt(d*d+p*p+_*_+g*g);d*=V,p*=V,_*=V,g*=V}}e[n]=d,e[n+1]=p,e[n+2]=_,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,r,c,u){const f=a[r],d=a[r+1],p=a[r+2],_=a[r+3],g=c[u],v=c[u+1],y=c[u+2],b=c[u+3];return e[n]=f*b+_*g+d*y-p*v,e[n+1]=d*b+_*v+p*g-f*y,e[n+2]=p*b+_*y+f*v-d*g,e[n+3]=_*b-f*g-d*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,c=e._z,u=e._order,f=Math.cos,d=Math.sin,p=f(a/2),_=f(r/2),g=f(c/2),v=d(a/2),y=d(r/2),b=d(c/2);switch(u){case"XYZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"YXZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"ZXY":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"ZYX":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"YZX":this._x=v*_*g+p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g-v*y*b;break;case"XZY":this._x=v*_*g-p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g+v*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],c=n[8],u=n[1],f=n[5],d=n[9],p=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-d)*y,this._y=(c-p)*y,this._z=(u-r)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-d)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(c+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(c-p)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(d+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(u-r)/y,this._x=(c+p)/y,this._y=(d+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,c=e._z,u=e._w,f=n._x,d=n._y,p=n._z,_=n._w;return this._x=a*_+u*f+r*p-c*d,this._y=r*_+u*d+c*f-a*p,this._z=c*_+u*p+a*d-r*f,this._w=u*_-a*f-r*d-c*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,r=this._y,c=this._z,u=this._w;let f=u*e._w+a*e._x+r*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=a,this._y=r,this._z=c,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-n;return this._w=y*u+n*this._w,this._x=y*a+n*this._x,this._y=y*r+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const p=Math.sqrt(d),_=Math.atan2(p,f),g=Math.sin((1-n)*_)/p,v=Math.sin(n*_)/p;return this._w=u*g+this._w*v,this._x=a*g+this._x*v,this._y=r*g+this._y*v,this._z=c*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,a=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Z_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Z_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*r,this.y=c[1]*n+c[4]*a+c[7]*r,this.z=c[2]*n+c[5]*a+c[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*r+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*r+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*r+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*r+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,c=e.x,u=e.y,f=e.z,d=e.w,p=2*(u*r-f*a),_=2*(f*n-c*r),g=2*(c*a-u*n);return this.x=n+d*p+u*g-f*_,this.y=a+d*_+f*p-c*g,this.z=r+d*g+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*r,this.y=c[1]*n+c[5]*a+c[9]*r,this.z=c[2]*n+c[6]*a+c[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,c=e.z,u=n.x,f=n.y,d=n.z;return this.x=r*d-c*f,this.y=c*u-a*d,this.z=a*f-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Zh.copy(this).projectOnVector(e),this.sub(Zh)}reflect(e){return this.sub(Zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zh=new X,Z_=new Yi;class Vn{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ni):Ni.fromBufferAttribute(c,u),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Hc.copy(a.boundingBox)),Hc.applyMatrix4(e.matrixWorld),this.union(Hc)}const r=e.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),kc.subVectors(this.max,al),Cr.subVectors(e.a,al),Dr.subVectors(e.b,al),Nr.subVectors(e.c,al),$a.subVectors(Dr,Cr),es.subVectors(Nr,Dr),Ls.subVectors(Cr,Nr);let n=[0,-$a.z,$a.y,0,-es.z,es.y,0,-Ls.z,Ls.y,$a.z,0,-$a.x,es.z,0,-es.x,Ls.z,0,-Ls.x,-$a.y,$a.x,0,-es.y,es.x,0,-Ls.y,Ls.x,0];return!Qh(n,Cr,Dr,Nr,kc)||(n=[1,0,0,0,1,0,0,0,1],!Qh(n,Cr,Dr,Nr,kc))?!1:(Gc.crossVectors($a,es),n=[Gc.x,Gc.y,Gc.z],Qh(n,Cr,Dr,Nr,kc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ma=[new X,new X,new X,new X,new X,new X,new X,new X],Ni=new X,Hc=new Vn,Cr=new X,Dr=new X,Nr=new X,$a=new X,es=new X,Ls=new X,al=new X,kc=new X,Gc=new X,Us=new X;function Qh(o,e,n,a,r){for(let c=0,u=o.length-3;c<=u;c+=3){Us.fromArray(o,c);const f=r.x*Math.abs(Us.x)+r.y*Math.abs(Us.y)+r.z*Math.abs(Us.z),d=e.dot(Us),p=n.dot(Us),_=a.dot(Us);if(Math.max(-Math.max(d,p,_),Math.min(d,p,_))>f)return!1}return!0}const rE=new Vn,sl=new X,Jh=new X;class di{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):rE.setFromPoints(e).getCenter(a);let r=0;for(let c=0,u=e.length;c<u;c++)r=Math.max(r,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sl.subVectors(e,this.center);const n=sl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(sl,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sl.copy(e.center).add(Jh)),this.expandByPoint(sl.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ga=new X,$h=new X,Vc=new X,ts=new X,ed=new X,jc=new X,td=new X;class Rl{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ga.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,n),ga.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){$h.copy(e).add(n).multiplyScalar(.5),Vc.copy(n).sub(e).normalize(),ts.copy(this.origin).sub($h);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Vc),f=ts.dot(this.direction),d=-ts.dot(Vc),p=ts.lengthSq(),_=Math.abs(1-u*u);let g,v,y,b;if(_>0)if(g=u*d-f,v=u*f-d,b=c*_,g>=0)if(v>=-b)if(v<=b){const E=1/_;g*=E,v*=E,y=g*(g+u*v+2*f)+v*(u*g+v+2*d)+p}else v=c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*d)+p;else v=-c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*d)+p;else v<=-b?(g=Math.max(0,-(-u*c+f)),v=g>0?-c:Math.min(Math.max(-c,-d),c),y=-g*g+v*(v+2*d)+p):v<=b?(g=0,v=Math.min(Math.max(-c,-d),c),y=v*(v+2*d)+p):(g=Math.max(0,-(u*c+f)),v=g>0?c:Math.min(Math.max(-c,-d),c),y=-g*g+v*(v+2*d)+p);else v=u>0?-c:c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy($h).addScaledVector(Vc,v),y}intersectSphere(e,n){ga.subVectors(e.center,this.origin);const a=ga.dot(this.direction),r=ga.dot(ga)-a*a,c=e.radius*e.radius;if(r>c)return null;const u=Math.sqrt(c-r),f=a-u,d=a+u;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,c,u,f,d;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(a=(e.min.x-v.x)*p,r=(e.max.x-v.x)*p):(a=(e.max.x-v.x)*p,r=(e.min.x-v.x)*p),_>=0?(c=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),a>u||c>r||((c>a||isNaN(a))&&(a=c),(u<r||isNaN(r))&&(r=u),g>=0?(f=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),a>d||f>r)||((f>a||a!==a)&&(a=f),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,n,a,r,c){ed.subVectors(n,e),jc.subVectors(a,e),td.crossVectors(ed,jc);let u=this.direction.dot(td),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ts.subVectors(this.origin,e);const d=f*this.direction.dot(jc.crossVectors(ts,jc));if(d<0)return null;const p=f*this.direction.dot(ed.cross(ts));if(p<0||d+p>u)return null;const _=-f*ts.dot(td);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,a,r,c,u,f,d,p,_,g,v,y,b,E,M){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,f,d,p,_,g,v,y,b,E,M)}set(e,n,a,r,c,u,f,d,p,_,g,v,y,b,E,M){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=r,x[1]=c,x[5]=u,x[9]=f,x[13]=d,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=b,x[11]=E,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),c=1/Lr.setFromMatrixColumn(e,1).length(),u=1/Lr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,c=e.z,u=Math.cos(a),f=Math.sin(a),d=Math.cos(r),p=Math.sin(r),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=u*_,y=u*g,b=f*_,E=f*g;n[0]=d*_,n[4]=-d*g,n[8]=p,n[1]=y+b*p,n[5]=v-E*p,n[9]=-f*d,n[2]=E-v*p,n[6]=b+y*p,n[10]=u*d}else if(e.order==="YXZ"){const v=d*_,y=d*g,b=p*_,E=p*g;n[0]=v+E*f,n[4]=b*f-y,n[8]=u*p,n[1]=u*g,n[5]=u*_,n[9]=-f,n[2]=y*f-b,n[6]=E+v*f,n[10]=u*d}else if(e.order==="ZXY"){const v=d*_,y=d*g,b=p*_,E=p*g;n[0]=v-E*f,n[4]=-u*g,n[8]=b+y*f,n[1]=y+b*f,n[5]=u*_,n[9]=E-v*f,n[2]=-u*p,n[6]=f,n[10]=u*d}else if(e.order==="ZYX"){const v=u*_,y=u*g,b=f*_,E=f*g;n[0]=d*_,n[4]=b*p-y,n[8]=v*p+E,n[1]=d*g,n[5]=E*p+v,n[9]=y*p-b,n[2]=-p,n[6]=f*d,n[10]=u*d}else if(e.order==="YZX"){const v=u*d,y=u*p,b=f*d,E=f*p;n[0]=d*_,n[4]=E-v*g,n[8]=b*g+y,n[1]=g,n[5]=u*_,n[9]=-f*_,n[2]=-p*_,n[6]=y*g+b,n[10]=v-E*g}else if(e.order==="XZY"){const v=u*d,y=u*p,b=f*d,E=f*p;n[0]=d*_,n[4]=-g,n[8]=p*_,n[1]=v*g+E,n[5]=u*_,n[9]=y*g-b,n[2]=b*g-y,n[6]=f*_,n[10]=E*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oE,e,lE)}lookAt(e,n,a){const r=this.elements;return ui.subVectors(e,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ns.crossVectors(a,ui),ns.lengthSq()===0&&(Math.abs(a.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ns.crossVectors(a,ui)),ns.normalize(),Xc.crossVectors(ui,ns),r[0]=ns.x,r[4]=Xc.x,r[8]=ui.x,r[1]=ns.y,r[5]=Xc.y,r[9]=ui.y,r[2]=ns.z,r[6]=Xc.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],f=a[4],d=a[8],p=a[12],_=a[1],g=a[5],v=a[9],y=a[13],b=a[2],E=a[6],M=a[10],x=a[14],O=a[3],L=a[7],C=a[11],V=a[15],H=r[0],P=r[4],q=r[8],N=r[12],R=r[1],F=r[5],he=r[9],oe=r[13],xe=r[2],ye=r[6],I=r[10],J=r[14],Z=r[3],re=r[7],ve=r[11],D=r[15];return c[0]=u*H+f*R+d*xe+p*Z,c[4]=u*P+f*F+d*ye+p*re,c[8]=u*q+f*he+d*I+p*ve,c[12]=u*N+f*oe+d*J+p*D,c[1]=_*H+g*R+v*xe+y*Z,c[5]=_*P+g*F+v*ye+y*re,c[9]=_*q+g*he+v*I+y*ve,c[13]=_*N+g*oe+v*J+y*D,c[2]=b*H+E*R+M*xe+x*Z,c[6]=b*P+E*F+M*ye+x*re,c[10]=b*q+E*he+M*I+x*ve,c[14]=b*N+E*oe+M*J+x*D,c[3]=O*H+L*R+C*xe+V*Z,c[7]=O*P+L*F+C*ye+V*re,c[11]=O*q+L*he+C*I+V*ve,c[15]=O*N+L*oe+C*J+V*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],c=e[12],u=e[1],f=e[5],d=e[9],p=e[13],_=e[2],g=e[6],v=e[10],y=e[14],b=e[3],E=e[7],M=e[11],x=e[15];return b*(+c*d*g-r*p*g-c*f*v+a*p*v+r*f*y-a*d*y)+E*(+n*d*y-n*p*v+c*u*v-r*u*y+r*p*_-c*d*_)+M*(+n*p*g-n*f*y-c*u*g+a*u*y+c*f*_-a*p*_)+x*(-r*f*_-n*d*g+n*f*v+r*u*g-a*u*v+a*d*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],f=e[5],d=e[6],p=e[7],_=e[8],g=e[9],v=e[10],y=e[11],b=e[12],E=e[13],M=e[14],x=e[15],O=g*M*p-E*v*p+E*d*y-f*M*y-g*d*x+f*v*x,L=b*v*p-_*M*p-b*d*y+u*M*y+_*d*x-u*v*x,C=_*E*p-b*g*p+b*f*y-u*E*y-_*f*x+u*g*x,V=b*g*d-_*E*d-b*f*v+u*E*v+_*f*M-u*g*M,H=n*O+a*L+r*C+c*V;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=O*P,e[1]=(E*v*c-g*M*c-E*r*y+a*M*y+g*r*x-a*v*x)*P,e[2]=(f*M*c-E*d*c+E*r*p-a*M*p-f*r*x+a*d*x)*P,e[3]=(g*d*c-f*v*c-g*r*p+a*v*p+f*r*y-a*d*y)*P,e[4]=L*P,e[5]=(_*M*c-b*v*c+b*r*y-n*M*y-_*r*x+n*v*x)*P,e[6]=(b*d*c-u*M*c-b*r*p+n*M*p+u*r*x-n*d*x)*P,e[7]=(u*v*c-_*d*c+_*r*p-n*v*p-u*r*y+n*d*y)*P,e[8]=C*P,e[9]=(b*g*c-_*E*c-b*a*y+n*E*y+_*a*x-n*g*x)*P,e[10]=(u*E*c-b*f*c+b*a*p-n*E*p-u*a*x+n*f*x)*P,e[11]=(_*f*c-u*g*c-_*a*p+n*g*p+u*a*y-n*f*y)*P,e[12]=V*P,e[13]=(_*E*r-b*g*r+b*a*v-n*E*v-_*a*M+n*g*M)*P,e[14]=(b*f*r-u*E*r-b*a*d+n*E*d+u*a*M-n*f*M)*P,e[15]=(u*g*r-_*f*r+_*a*d-n*g*d-u*a*v+n*f*v)*P,this}scale(e){const n=this.elements,a=e.x,r=e.y,c=e.z;return n[0]*=a,n[4]*=r,n[8]*=c,n[1]*=a,n[5]*=r,n[9]*=c,n[2]*=a,n[6]*=r,n[10]*=c,n[3]*=a,n[7]*=r,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),c=1-a,u=e.x,f=e.y,d=e.z,p=c*u,_=c*f;return this.set(p*u+a,p*f-r*d,p*d+r*f,0,p*f+r*d,_*f+a,_*d-r*u,0,p*d-r*f,_*d+r*u,c*d*d+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,c,u){return this.set(1,a,c,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,c=n._x,u=n._y,f=n._z,d=n._w,p=c+c,_=u+u,g=f+f,v=c*p,y=c*_,b=c*g,E=u*_,M=u*g,x=f*g,O=d*p,L=d*_,C=d*g,V=a.x,H=a.y,P=a.z;return r[0]=(1-(E+x))*V,r[1]=(y+C)*V,r[2]=(b-L)*V,r[3]=0,r[4]=(y-C)*H,r[5]=(1-(v+x))*H,r[6]=(M+O)*H,r[7]=0,r[8]=(b+L)*P,r[9]=(M-O)*P,r[10]=(1-(v+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;let c=Lr.set(r[0],r[1],r[2]).length();const u=Lr.set(r[4],r[5],r[6]).length(),f=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),e.x=r[12],e.y=r[13],e.z=r[14],Li.copy(this);const p=1/c,_=1/u,g=1/f;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=_,Li.elements[5]*=_,Li.elements[6]*=_,Li.elements[8]*=g,Li.elements[9]*=g,Li.elements[10]*=g,n.setFromRotationMatrix(Li),a.x=c,a.y=u,a.z=f,this}makePerspective(e,n,a,r,c,u,f=Ea){const d=this.elements,p=2*c/(n-e),_=2*c/(a-r),g=(n+e)/(n-e),v=(a+r)/(a-r);let y,b;if(f===Ea)y=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(f===Au)y=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,r,c,u,f=Ea){const d=this.elements,p=1/(n-e),_=1/(a-r),g=1/(u-c),v=(n+e)*p,y=(a+r)*_;let b,E;if(f===Ea)b=(u+c)*g,E=-2*g;else if(f===Au)b=c*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*_,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=E,d[14]=-b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Lr=new X,Li=new ft,oE=new X(0,0,0),lE=new X(1,1,1),ns=new X,Xc=new X,ui=new X,Q_=new ft,J_=new Yi;class Ki{constructor(e=0,n=0,a=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,c=r[0],u=r[4],f=r[8],d=r[1],p=r[5],_=r[9],g=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Q_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Q_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return J_.setFromEuler(this),this.setFromQuaternion(J_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class Ox{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cE=0;const $_=new X,Ur=new Yi,_a=new ft,Wc=new X,rl=new X,uE=new X,fE=new Yi,ev=new X(1,0,0),tv=new X(0,1,0),nv=new X(0,0,1),iv={type:"added"},hE={type:"removed"},Or={type:"childadded",child:null},nd={type:"childremoved",child:null};class en extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new X,n=new Ki,a=new Yi,r=new X(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new ut}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ox,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(ev,e)}rotateY(e){return this.rotateOnAxis(tv,e)}rotateZ(e){return this.rotateOnAxis(nv,e)}translateOnAxis(e,n){return $_.copy(e).applyQuaternion(this.quaternion),this.position.add($_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ev,e)}translateY(e){return this.translateOnAxis(tv,e)}translateZ(e){return this.translateOnAxis(nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Wc.copy(e):Wc.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(rl,Wc,this.up):_a.lookAt(Wc,rl,this.up),this.quaternion.setFromRotationMatrix(_a),r&&(_a.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(_a),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iv),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hE),nd.child=e,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iv),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,uE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,fE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function c(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,_=d.length;p<_;p++){const g=d[p];c(e.shapes,g)}else c(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(c(e.materials,this.material[d]));r.material=f}else r.material=c(e.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];r.animations.push(c(e.animations,d))}}if(n){const f=u(e.geometries),d=u(e.materials),p=u(e.textures),_=u(e.images),g=u(e.shapes),v=u(e.skeletons),y=u(e.animations),b=u(e.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),b.length>0&&(a.nodes=b)}return a.object=r,a;function u(f){const d=[];for(const p in f){const _=f[p];delete _.metadata,d.push(_)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}en.DEFAULT_UP=new X(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new X,va=new X,id=new X,xa=new X,Pr=new X,Ir=new X,av=new X,ad=new X,sd=new X,rd=new X,od=new Pt,ld=new Pt,cd=new Pt;class Pi{constructor(e=new X,n=new X,a=new X){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Ui.subVectors(e,n),r.cross(Ui);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(e,n,a,r,c){Ui.subVectors(r,n),va.subVectors(a,n),id.subVectors(e,n);const u=Ui.dot(Ui),f=Ui.dot(va),d=Ui.dot(id),p=va.dot(va),_=va.dot(id),g=u*p-f*f;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(p*d-f*_)*v,b=(u*_-f*d)*v;return c.set(1-y-b,b,y)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,n,a,r,c,u,f,d){return this.getBarycoord(e,n,a,r,xa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,xa.x),d.addScaledVector(u,xa.y),d.addScaledVector(f,xa.z),d)}static getInterpolatedAttribute(e,n,a,r,c,u){return od.setScalar(0),ld.setScalar(0),cd.setScalar(0),od.fromBufferAttribute(e,n),ld.fromBufferAttribute(e,a),cd.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(od,c.x),u.addScaledVector(ld,c.y),u.addScaledVector(cd,c.z),u}static isFrontFacing(e,n,a,r){return Ui.subVectors(a,n),va.subVectors(e,n),Ui.cross(va).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ui.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,c){return Pi.getInterpolation(e,this.a,this.b,this.c,n,a,r,c)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,c=this.c;let u,f;Pr.subVectors(r,a),Ir.subVectors(c,a),ad.subVectors(e,a);const d=Pr.dot(ad),p=Ir.dot(ad);if(d<=0&&p<=0)return n.copy(a);sd.subVectors(e,r);const _=Pr.dot(sd),g=Ir.dot(sd);if(_>=0&&g<=_)return n.copy(r);const v=d*g-_*p;if(v<=0&&d>=0&&_<=0)return u=d/(d-_),n.copy(a).addScaledVector(Pr,u);rd.subVectors(e,c);const y=Pr.dot(rd),b=Ir.dot(rd);if(b>=0&&y<=b)return n.copy(c);const E=y*p-d*b;if(E<=0&&p>=0&&b<=0)return f=p/(p-b),n.copy(a).addScaledVector(Ir,f);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return av.subVectors(c,r),f=(g-_)/(g-_+(y-b)),n.copy(r).addScaledVector(av,f);const x=1/(M+E+v);return u=E*x,f=v*x,n.copy(a).addScaledVector(Pr,u).addScaledVector(Ir,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},qc={h:0,s:0,l:0};function ud(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class at{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,n),this}setRGB(e,n,a,r=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=a,Ct.toWorkingColorSpace(this,r),this}setHSL(e,n,a,r=Ct.workingColorSpace){if(e=Np(e,1),n=gt(n,0,1),a=gt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=ud(u,c,e+1/3),this.g=ud(u,c,e),this.b=ud(u,c,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,n=bn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const a=Px[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Ct.fromWorkingColorSpace(In.copy(this),e),Math.round(gt(In.r*255,0,255))*65536+Math.round(gt(In.g*255,0,255))*256+Math.round(gt(In.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.fromWorkingColorSpace(In.copy(this),n);const a=In.r,r=In.g,c=In.b,u=Math.max(a,r,c),f=Math.min(a,r,c);let d,p;const _=(f+u)/2;if(f===u)d=0,p=0;else{const g=u-f;switch(p=_<=.5?g/(u+f):g/(2-u-f),u){case a:d=(r-c)/g+(r<c?6:0);break;case r:d=(c-a)/g+2;break;case c:d=(a-r)/g+4;break}d/=6}return e.h=d,e.s=p,e.l=_,e}getRGB(e,n=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(In.copy(this),n),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=bn){Ct.fromWorkingColorSpace(In.copy(this),e);const n=In.r,a=In.g,r=In.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(is),this.setHSL(is.h+e,is.s+n,is.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(is),e.getHSL(qc);const a=vl(is.h,qc.h,n),r=vl(is.s,qc.s,n),c=vl(is.l,qc.l,n);return this.setHSL(a,r,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*r,this.g=c[1]*n+c[4]*a+c[7]*r,this.b=c[2]*n+c[5]*a+c[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new at;at.NAMES=Px;let dE=0;class qi extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Xr,this.side=wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Ld,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(a.blending=this.blending),this.side!==wa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Nd&&(a.blendSrc=this.blendSrc),this.blendDst!==Ld&&(a.blendDst=this.blendDst),this.blendEquation!==Hs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(c){const u=[];for(const f in c){const d=c[f];delete d.metadata,u.push(d)}return u}if(n){const c=r(e.textures),u=r(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let c=0;c!==r;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gs extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new X,Yc=new nt;let pE=0;class Xn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=mp,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Yc.fromBufferAttribute(this,n),Yc.applyMatrix3(e),this.setXY(n,Yc.x,Yc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Oi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Ft(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Ft(n,this.array),a=Ft(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=Ft(n,this.array),a=Ft(a,this.array),r=Ft(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e*=this.itemSize,this.normalized&&(n=Ft(n,this.array),a=Ft(a,this.array),r=Ft(r,this.array),c=Ft(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mp&&(e.usage=this.usage),e}}class Ix extends Xn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class zx extends Xn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Aa extends Xn{constructor(e,n,a){super(new Float32Array(e),n,a)}}let mE=0;const Mi=new ft,fd=new en,zr=new X,fi=new Vn,ol=new Vn,Mn=new X;class Zi extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lx(e)?zx:Ix)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ut().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,n,a){return Mi.makeTranslation(e,n,a),this.applyMatrix4(Mi),this}scale(e,n,a){return Mi.makeScale(e,n,a),this.applyMatrix4(Mi),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,c=e.length;r<c;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Aa(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const c=n[a];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const a=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];ol.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(fi.min,ol.min),fi.expandByPoint(Mn),Mn.addVectors(fi.max,ol.max),fi.expandByPoint(Mn)):(fi.expandByPoint(ol.min),fi.expandByPoint(ol.max))}fi.getCenter(a);let r=0;for(let c=0,u=e.count;c<u;c++)Mn.fromBufferAttribute(e,c),r=Math.max(r,a.distanceToSquared(Mn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],d=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)Mn.fromBufferAttribute(f,p),d&&(zr.fromBufferAttribute(e,p),Mn.add(zr)),r=Math.max(r,a.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let q=0;q<a.count;q++)f[q]=new X,d[q]=new X;const p=new X,_=new X,g=new X,v=new nt,y=new nt,b=new nt,E=new X,M=new X;function x(q,N,R){p.fromBufferAttribute(a,q),_.fromBufferAttribute(a,N),g.fromBufferAttribute(a,R),v.fromBufferAttribute(c,q),y.fromBufferAttribute(c,N),b.fromBufferAttribute(c,R),_.sub(p),g.sub(p),y.sub(v),b.sub(v);const F=1/(y.x*b.y-b.x*y.y);isFinite(F)&&(E.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(F),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(F),f[q].add(E),f[N].add(E),f[R].add(E),d[q].add(M),d[N].add(M),d[R].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let q=0,N=O.length;q<N;++q){const R=O[q],F=R.start,he=R.count;for(let oe=F,xe=F+he;oe<xe;oe+=3)x(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const L=new X,C=new X,V=new X,H=new X;function P(q){V.fromBufferAttribute(r,q),H.copy(V);const N=f[q];L.copy(N),L.sub(V.multiplyScalar(V.dot(N))).normalize(),C.crossVectors(H,N);const F=C.dot(d[q])<0?-1:1;u.setXYZW(q,L.x,L.y,L.z,F)}for(let q=0,N=O.length;q<N;++q){const R=O[q],F=R.start,he=R.count;for(let oe=F,xe=F+he;oe<xe;oe+=3)P(e.getX(oe+0)),P(e.getX(oe+1)),P(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new X,c=new X,u=new X,f=new X,d=new X,p=new X,_=new X,g=new X;if(e)for(let v=0,y=e.count;v<y;v+=3){const b=e.getX(v+0),E=e.getX(v+1),M=e.getX(v+2);r.fromBufferAttribute(n,b),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),_.subVectors(u,c),g.subVectors(r,c),_.cross(g),f.fromBufferAttribute(a,b),d.fromBufferAttribute(a,E),p.fromBufferAttribute(a,M),f.add(_),d.add(_),p.add(_),a.setXYZ(b,f.x,f.y,f.z),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),_.subVectors(u,c),g.subVectors(r,c),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(f,d){const p=f.array,_=f.itemSize,g=f.normalized,v=new p.constructor(d.length*_);let y=0,b=0;for(let E=0,M=d.length;E<M;E++){f.isInterleavedBufferAttribute?y=d[E]*f.data.stride+f.offset:y=d[E]*_;for(let x=0;x<_;x++)v[b++]=p[y++]}return new Xn(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zi,a=this.index.array,r=this.attributes;for(const f in r){const d=r[f],p=e(d,a);n.setAttribute(f,p)}const c=this.morphAttributes;for(const f in c){const d=[],p=c[f];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=e(v,a);d.push(y)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];e.data.attributes[d]=p.toJSON(e.data)}const r={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(r[d]=_,c=!0)}c&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const p in r){const _=r[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sv=new ft,Os=new Rl,Kc=new di,rv=new X,Zc=new X,Qc=new X,Jc=new X,hd=new X,$c=new X,ov=new X,eu=new X;class Ln extends en{constructor(e=new Zi,n=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const f=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const f=this.morphTargetInfluences;if(c&&f){$c.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const _=f[d],g=c[d];_!==0&&(hd.fromBufferAttribute(g,e),u?$c.addScaledVector(hd,_):$c.addScaledVector(hd.sub(n),_))}n.add($c)}return n}raycast(e,n){const a=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Kc.copy(a.boundingSphere),Kc.applyMatrix4(c),Os.copy(e.ray).recast(e.near),!(Kc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Kc,rv)===null||Os.origin.distanceToSquared(rv)>(e.far-e.near)**2))&&(sv.copy(c).invert(),Os.copy(e.ray).applyMatrix4(sv),!(a.boundingBox!==null&&Os.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Os)))}_computeIntersections(e,n,a){let r;const c=this.geometry,u=this.material,f=c.index,d=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,E=v.length;b<E;b++){const M=v[b],x=u[M.materialIndex],O=Math.max(M.start,y.start),L=Math.min(f.count,Math.min(M.start+M.count,y.start+y.count));for(let C=O,V=L;C<V;C+=3){const H=f.getX(C),P=f.getX(C+1),q=f.getX(C+2);r=tu(this,x,e,a,p,_,g,H,P,q),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=M.materialIndex,n.push(r))}}else{const b=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let M=b,x=E;M<x;M+=3){const O=f.getX(M),L=f.getX(M+1),C=f.getX(M+2);r=tu(this,u,e,a,p,_,g,O,L,C),r&&(r.faceIndex=Math.floor(M/3),n.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let b=0,E=v.length;b<E;b++){const M=v[b],x=u[M.materialIndex],O=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=O,V=L;C<V;C+=3){const H=C,P=C+1,q=C+2;r=tu(this,x,e,a,p,_,g,H,P,q),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=M.materialIndex,n.push(r))}}else{const b=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let M=b,x=E;M<x;M+=3){const O=M,L=M+1,C=M+2;r=tu(this,u,e,a,p,_,g,O,L,C),r&&(r.faceIndex=Math.floor(M/3),n.push(r))}}}}function gE(o,e,n,a,r,c,u,f){let d;if(e.side===ni?d=a.intersectTriangle(u,c,r,!0,f):d=a.intersectTriangle(r,c,u,e.side===wa,f),d===null)return null;eu.copy(f),eu.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(eu);return p<n.near||p>n.far?null:{distance:p,point:eu.clone(),object:o}}function tu(o,e,n,a,r,c,u,f,d,p){o.getVertexPosition(f,Zc),o.getVertexPosition(d,Qc),o.getVertexPosition(p,Jc);const _=gE(o,e,n,a,Zc,Qc,Jc,ov);if(_){const g=new X;Pi.getBarycoord(ov,Zc,Qc,Jc,g),r&&(_.uv=Pi.getInterpolatedAttribute(r,f,d,p,g,new nt)),c&&(_.uv1=Pi.getInterpolatedAttribute(c,f,d,p,g,new nt)),u&&(_.normal=Pi.getInterpolatedAttribute(u,f,d,p,g,new X),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new X,materialIndex:0};Pi.getNormal(Zc,Qc,Jc,v.normal),_.face=v,_.barycoord=g}return _}class io extends Zi{constructor(e=1,n=1,a=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:c,depthSegments:u};const f=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],_=[],g=[];let v=0,y=0;b("z","y","x",-1,-1,a,n,e,u,c,0),b("z","y","x",1,-1,a,n,-e,u,c,1),b("x","z","y",1,1,e,a,n,r,u,2),b("x","z","y",1,-1,e,a,-n,r,u,3),b("x","y","z",1,-1,e,n,a,r,c,4),b("x","y","z",-1,-1,e,n,-a,r,c,5),this.setIndex(d),this.setAttribute("position",new Aa(p,3)),this.setAttribute("normal",new Aa(_,3)),this.setAttribute("uv",new Aa(g,2));function b(E,M,x,O,L,C,V,H,P,q,N){const R=C/P,F=V/q,he=C/2,oe=V/2,xe=H/2,ye=P+1,I=q+1;let J=0,Z=0;const re=new X;for(let ve=0;ve<I;ve++){const D=ve*F-oe;for(let $=0;$<ye;$++){const me=$*R-he;re[E]=me*O,re[M]=D*L,re[x]=xe,p.push(re.x,re.y,re.z),re[E]=0,re[M]=0,re[x]=H>0?1:-1,_.push(re.x,re.y,re.z),g.push($/P),g.push(1-ve/q),J+=1}}for(let ve=0;ve<q;ve++)for(let D=0;D<P;D++){const $=v+D+ye*ve,me=v+D+ye*(ve+1),j=v+(D+1)+ye*(ve+1),le=v+(D+1)+ye*ve;d.push($,me,le),d.push(me,j,le),Z+=6}f.addGroup(y,Z,N),y+=Z,v+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function kn(o){const e={};for(let n=0;n<o.length;n++){const a=$r(o[n]);for(const r in a)e[r]=a[r]}return e}function _E(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Bx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const vE={clone:$r,merge:kn};var xE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xE,this.fragmentShader=yE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=_E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Fx extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Ea}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new X,lv=new nt,cv=new nt;class Gn extends Fx{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(_l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,n){return this.getViewBounds(e,lv,cv),n.subVectors(cv,lv)}setViewOffset(e,n,a,r,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_l*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*r/d,n-=u.offsetY*a/p,r*=u.width/d,a*=u.height/p}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,n,n-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,Fr=1;class SE extends en{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Br,Fr,e,n);r.layers=this.layers,this.add(r);const c=new Gn(Br,Fr,e,n);c.layers=this.layers,this.add(c);const u=new Gn(Br,Fr,e,n);u.layers=this.layers,this.add(u);const f=new Gn(Br,Fr,e,n);f.layers=this.layers,this.add(f);const d=new Gn(Br,Fr,e,n);d.layers=this.layers,this.add(d);const p=new Gn(Br,Fr,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,c,u,f,d]=n;for(const p of n)this.remove(p);if(e===Ea)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Au)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,d,p,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,c),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,f),e.setRenderTarget(a,3,r),e.render(n,d),e.setRenderTarget(a,4,r),e.render(n,p),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,r),e.render(n,_),e.setRenderTarget(g,v,y),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class Hx extends En{constructor(e=[],n=Kr,a,r,c,u,f,d,p,_){super(e,n,a,r,c,u,f,d,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ME extends Ws{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new Hx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new io(5,5,5),c=new hs({name:"CubemapFromEquirect",uniforms:$r(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ni,blending:us});c.uniforms.tEquirect.value=n;const u=new Ln(r,c),f=n.minFilter;return n.minFilter===ba&&(n.minFilter=hi),new SE(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(c)}}class Vs extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bE={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,c=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const M=n.getJointPose(E,a),x=this._getHandJoint(p,E);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&c!==null&&(r=c),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(bE)))}return f!==null&&(f.visible=r!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Vs;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class EE extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class TE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=mp,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let r=0,c=this.stride;r<c;r++)this.array[e+r]=n.array[a+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new X;class Op{constructor(e,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.applyMatrix4(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.applyNormalMatrix(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.transformDirection(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Oi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Ft(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Oi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Oi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Oi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Oi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ft(n,this.array),a=Ft(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ft(n,this.array),a=Ft(a,this.array),r=Ft(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ft(n,this.array),a=Ft(a,this.array),r=Ft(r,this.array),c=Ft(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return new Xn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Op(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const uv=new X,fv=new Pt,hv=new Pt,AE=new X,dv=new ft,nu=new X,pd=new di,pv=new ft,md=new Rl;class wE extends Ln{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=H_,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,nu),this.boundingBox.expandByPoint(nu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,nu),this.boundingSphere.expandByPoint(nu)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pd.copy(this.boundingSphere),pd.applyMatrix4(r),e.ray.intersectsSphere(pd)!==!1&&(pv.copy(r).invert(),md.copy(e.ray).applyMatrix4(pv),!(this.boundingBox!==null&&md.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,md)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===H_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,r=this.geometry;fv.fromBufferAttribute(r.attributes.skinIndex,e),hv.fromBufferAttribute(r.attributes.skinWeight,e),uv.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=hv.getComponent(c);if(u!==0){const f=fv.getComponent(c);dv.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),n.addScaledVector(AE.copy(uv).applyMatrix4(dv),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class kx extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gx extends En{constructor(e=null,n=1,a=1,r,c,u,f,d,p=jn,_=jn,g,v){super(null,u,f,d,p,_,r,c,g,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mv=new ft,RE=new ft;class Pp{constructor(e=[],n=[]){this.uuid=zi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new ft;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const f=e[c]?e[c].matrixWorld:RE;mv.multiplyMatrices(f,n[c]),mv.toArray(a,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Pp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new Gx(n,e,e,Ei,Ii);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const c=e.bones[a];let u=n[c];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),u=new kx),this.bones.push(u),this.boneInverses.push(new ft().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,c=n.length;r<c;r++){const u=n[r];e.bones.push(u.uuid);const f=a[r];e.boneInverses.push(f.toArray())}return e}}class gp extends Xn{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hr=new ft,gv=new ft,iu=[],_v=new Vn,CE=new ft,ll=new Ln,cl=new di;class DE extends Ln{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new gp(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,CE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Hr),_v.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(_v)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Hr),cl.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(cl)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let f=0;f<a.length;f++)a[f]=r[u+f]}raycast(e,n){const a=this.matrixWorld,r=this.count;if(ll.geometry=this.geometry,ll.material=this.material,ll.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(a),e.ray.intersectsSphere(cl)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,Hr),gv.multiplyMatrices(a,Hr),ll.matrixWorld=gv,ll.raycast(e,iu);for(let u=0,f=iu.length;u<f;u++){const d=iu[u];d.instanceId=c,d.object=this,n.push(d)}iu.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new gp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new Gx(new Float32Array(r*this.count),r,this.count,wp,Ii));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const f=this.geometry.morphTargetsRelative?1:1-u,d=r*e;c[d]=f,c.set(a,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gd=new X,NE=new X,LE=new ut;class rs{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=gd.subVectors(a,n).cross(NE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(gd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||LE.getNormalMatrix(e),r=this.coplanarPoint(gd).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new di,au=new X;class Ip{constructor(e=new rs,n=new rs,a=new rs,r=new rs,c=new rs,u=new rs){this.planes=[e,n,a,r,c,u]}set(e,n,a,r,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Ea){const a=this.planes,r=e.elements,c=r[0],u=r[1],f=r[2],d=r[3],p=r[4],_=r[5],g=r[6],v=r[7],y=r[8],b=r[9],E=r[10],M=r[11],x=r[12],O=r[13],L=r[14],C=r[15];if(a[0].setComponents(d-c,v-p,M-y,C-x).normalize(),a[1].setComponents(d+c,v+p,M+y,C+x).normalize(),a[2].setComponents(d+u,v+_,M+b,C+O).normalize(),a[3].setComponents(d-u,v-_,M-b,C-O).normalize(),a[4].setComponents(d-f,v-g,M-E,C-L).normalize(),n===Ea)a[5].setComponents(d+f,v+g,M+E,C+L).normalize();else if(n===Au)a[5].setComponents(f,g,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(au.x=r.normal.x>0?e.max.x:e.min.x,au.y=r.normal.y>0?e.max.y:e.min.y,au.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vx extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wu=new X,Ru=new X,vv=new ft,ul=new Rl,su=new di,_d=new X,xv=new X;class zp extends en{constructor(e=new Zi,n=new Vx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let r=1,c=n.count;r<c;r++)wu.fromBufferAttribute(n,r-1),Ru.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=wu.distanceTo(Ru);e.setAttribute("lineDistance",new Aa(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),su.copy(a.boundingSphere),su.applyMatrix4(r),su.radius+=c,e.ray.intersectsSphere(su)===!1)return;vv.copy(r).invert(),ul.copy(e.ray).applyMatrix4(vv);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=this.isLineSegments?2:1,_=a.index,v=a.attributes.position;if(_!==null){const y=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let E=y,M=b-1;E<M;E+=p){const x=_.getX(E),O=_.getX(E+1),L=ru(this,e,ul,d,x,O,E);L&&n.push(L)}if(this.isLineLoop){const E=_.getX(b-1),M=_.getX(y),x=ru(this,e,ul,d,E,M,b-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let E=y,M=b-1;E<M;E+=p){const x=ru(this,e,ul,d,E,E+1,E);x&&n.push(x)}if(this.isLineLoop){const E=ru(this,e,ul,d,b-1,y,b-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const f=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function ru(o,e,n,a,r,c,u){const f=o.geometry.attributes.position;if(wu.fromBufferAttribute(f,r),Ru.fromBufferAttribute(f,c),n.distanceSqToSegment(wu,Ru,_d,xv)>a)return;_d.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(_d);if(!(p<e.near||p>e.far))return{distance:p,point:xv.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const yv=new X,Sv=new X;class UE extends zp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let r=0,c=n.count;r<c;r+=2)yv.fromBufferAttribute(n,r),Sv.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+yv.distanceTo(Sv);e.setAttribute("lineDistance",new Aa(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class OE extends zp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class jx extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mv=new ft,_p=new Rl,ou=new di,lu=new X;class PE extends en{constructor(e=new Zi,n=new jx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ou.copy(a.boundingSphere),ou.applyMatrix4(r),ou.radius+=c,e.ray.intersectsSphere(ou)===!1)return;Mv.copy(r).invert(),_p.copy(e.ray).applyMatrix4(Mv);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=a.index,g=a.attributes.position;if(p!==null){const v=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let b=v,E=y;b<E;b++){const M=p.getX(b);lu.fromBufferAttribute(g,M),bv(lu,M,d,r,e,n,this)}}else{const v=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let b=v,E=y;b<E;b++)lu.fromBufferAttribute(g,b),bv(lu,b,d,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const f=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function bv(o,e,n,a,r,c,u){const f=_p.distanceSqToPoint(o);if(f<n){const d=new X;_p.closestPointToPoint(o,d),d.applyMatrix4(a);const p=r.ray.origin.distanceTo(d);if(p<r.near||p>r.far)return;c.push({distance:p,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Xx extends En{constructor(e,n,a=Xs,r,c,u,f=jn,d=jn,p,_=Ml){if(_!==Ml&&_!==bl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,c,u,f,d,_,a,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Du extends Zi{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const c=e/2,u=n/2,f=Math.floor(a),d=Math.floor(r),p=f+1,_=d+1,g=e/f,v=n/d,y=[],b=[],E=[],M=[];for(let x=0;x<_;x++){const O=x*v-u;for(let L=0;L<p;L++){const C=L*g-c;b.push(C,-O,0),E.push(0,0,1),M.push(L/f),M.push(1-x/d)}}for(let x=0;x<d;x++)for(let O=0;O<f;O++){const L=O+p*x,C=O+p*(x+1),V=O+1+p*(x+1),H=O+1+p*x;y.push(L,C,H),y.push(C,V,H)}this.setIndex(y),this.setAttribute("position",new Aa(b,3)),this.setAttribute("normal",new Aa(E,3)),this.setAttribute("uv",new Aa(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}class ao extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dx,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bi extends ao{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class IE extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zE extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function cu(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function BE(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function FE(o){function e(r,c){return o[r]-o[c]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(e),a}function Ev(o,e,n){const a=o.length,r=new o.constructor(a);for(let c=0,u=0;u!==a;++c){const f=n[c]*e;for(let d=0;d!==e;++d)r[u++]=o[f+d]}return r}function Wx(o,e,n,a){let r=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[r++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=o[r++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=o[r++];while(c!==void 0)}class Cl{constructor(e,n,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let f=a+2;;){if(r===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(c=r,r=n[++a],e<r)break t}u=n.length;break n}if(!(e>=c)){const f=n[1];e<f&&(a=2,c=f);for(let d=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===d)break;if(r=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const f=a+u>>>1;e<n[f]?u=f:a=f+1}if(r=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,r)}return this.interpolate_(a,c,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r;for(let u=0;u!==r;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class HE extends Cl{constructor(e,n,a,r){super(e,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:k_,endingEnd:k_}}intervalChanged_(e,n,a){const r=this.parameterPositions;let c=e-2,u=e+1,f=r[c],d=r[u];if(f===void 0)switch(this.getSettings_().endingStart){case G_:c=e,f=2*n-a;break;case V_:c=r.length-2,f=n+r[c]-r[c+1];break;default:c=e,f=a}if(d===void 0)switch(this.getSettings_().endingEnd){case G_:u=e,d=2*a-n;break;case V_:u=1,d=a+r[1]-r[0];break;default:u=e-1,d=n}const p=(a-n)*.5,_=this.valueSize;this._weightPrev=p/(n-f),this._weightNext=p/(d-a),this._offsetPrev=c*_,this._offsetNext=u*_}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,p=d-f,_=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,y=this._weightNext,b=(a-n)/(r-n),E=b*b,M=E*b,x=-v*M+2*v*E-v*b,O=(1+v)*M+(-1.5-2*v)*E+(-.5+v)*b+1,L=(-1-y)*M+(1.5+y)*E+.5*b,C=y*M-y*E;for(let V=0;V!==f;++V)c[V]=x*u[_+V]+O*u[p+V]+L*u[d+V]+C*u[g+V];return c}}class kE extends Cl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,p=d-f,_=(a-n)/(r-n),g=1-_;for(let v=0;v!==f;++v)c[v]=u[p+v]*g+u[d+v]*_;return c}}class GE extends Cl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fi{constructor(e,n,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cu(n,this.TimeBufferType),this.values=cu(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:cu(e.times,Array),values:cu(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new GE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new HE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case El:n=this.InterpolantFactoryMethodDiscrete;break;case Tl:n=this.InterpolantFactoryMethodLinear;break;case qh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return El;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return qh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=e}return this}trim(e,n){const a=this.times,r=a.length;let c=0,u=r-1;for(;c!==r&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const f=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*f,u*f)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,c=a.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==c;f++){const d=a[f];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,d,u),e=!1;break}u=d}if(r!==void 0&&BE(r))for(let f=0,d=r.length;f!==d;++f){const p=r[f];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,p),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===qh,c=e.length-1;let u=1;for(let f=1;f<c;++f){let d=!1;const p=e[f],_=e[f+1];if(p!==_&&(f!==1||p!==e[0]))if(r)d=!0;else{const g=f*a,v=g-a,y=g+a;for(let b=0;b!==a;++b){const E=n[g+b];if(E!==n[v+b]||E!==n[y+b]){d=!0;break}}}if(d){if(f!==u){e[u]=e[f];const g=f*a,v=u*a;for(let y=0;y!==a;++y)n[v+y]=n[g+y]}++u}}if(c>0){e[u]=e[c];for(let f=c*a,d=u*a,p=0;p!==a;++p)n[d+p]=n[f+p];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}Fi.prototype.ValueTypeName="";Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=Tl;class so extends Fi{constructor(e,n,a){super(e,n,a)}}so.prototype.ValueTypeName="bool";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=El;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;class qx extends Fi{constructor(e,n,a,r){super(e,n,a,r)}}qx.prototype.ValueTypeName="color";class eo extends Fi{constructor(e,n,a,r){super(e,n,a,r)}}eo.prototype.ValueTypeName="number";class VE extends Cl{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=(a-n)/(r-n);let p=e*f;for(let _=p+f;p!==_;p+=4)Yi.slerpFlat(c,0,u,p-f,u,p,d);return c}}class to extends Fi{constructor(e,n,a,r){super(e,n,a,r)}InterpolantFactoryMethodLinear(e){return new VE(this.times,this.values,this.getValueSize(),e)}}to.prototype.ValueTypeName="quaternion";to.prototype.InterpolantFactoryMethodSmooth=void 0;class ro extends Fi{constructor(e,n,a){super(e,n,a)}}ro.prototype.ValueTypeName="string";ro.prototype.ValueBufferType=Array;ro.prototype.DefaultInterpolation=El;ro.prototype.InterpolantFactoryMethodLinear=void 0;ro.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends Fi{constructor(e,n,a,r){super(e,n,a,r)}}no.prototype.ValueTypeName="vector";class jE{constructor(e="",n=-1,a=[],r=Mb){this.name=e,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=zi(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,f=a.length;u!==f;++u)n.push(WE(a[u]).scale(r));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c}static toJSON(e){const n=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let c=0,u=a.length;c!==u;++c)n.push(Fi.toJSON(a[c]));return r}static CreateFromMorphTargetSequence(e,n,a,r){const c=n.length,u=[];for(let f=0;f<c;f++){let d=[],p=[];d.push((f+c-1)%c,f,(f+1)%c),p.push(0,1,0);const _=FE(d);d=Ev(d,1,_),p=Ev(p,1,_),!r&&d[0]===0&&(d.push(c),p.push(p[0])),u.push(new eo(".morphTargetInfluences["+n[f].name+"]",d,p).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const r={},c=/^([\w-]*?)([\d]+)$/;for(let f=0,d=e.length;f<d;f++){const p=e[f],_=p.name.match(c);if(_&&_.length>1){const g=_[1];let v=r[g];v||(r[g]=v=[]),v.push(p)}}const u=[];for(const f in r)u.push(this.CreateFromMorphTargetSequence(f,r[f],n,a));return u}static parseAnimation(e,n){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(g,v,y,b,E){if(y.length!==0){const M=[],x=[];Wx(y,M,x,b),M.length!==0&&E.push(new g(v,M,x))}},r=[],c=e.name||"default",u=e.fps||30,f=e.blendMode;let d=e.length||-1;const p=e.hierarchy||[];for(let g=0;g<p.length;g++){const v=p[g].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let b;for(b=0;b<v.length;b++)if(v[b].morphTargets)for(let E=0;E<v[b].morphTargets.length;E++)y[v[b].morphTargets[E]]=-1;for(const E in y){const M=[],x=[];for(let O=0;O!==v[b].morphTargets.length;++O){const L=v[b];M.push(L.time),x.push(L.morphTarget===E?1:0)}r.push(new eo(".morphTargetInfluence["+E+"]",M,x))}d=y.length*u}else{const y=".bones["+n[g].name+"]";a(no,y+".position",v,"pos",r),a(to,y+".quaternion",v,"rot",r),a(no,y+".scale",v,"scl",r)}}return r.length===0?null:new this(c,d,r,f)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,r=e.length;a!==r;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function XE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return eo;case"vector":case"vector2":case"vector3":case"vector4":return no;case"color":return qx;case"quaternion":return to;case"bool":case"boolean":return so;case"string":return ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function WE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=XE(o.type);if(o.times===void 0){const n=[],a=[];Wx(o.keys,n,a,"value"),o.times=n,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const cs={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class qE{constructor(e,n,a){const r=this;let c=!1,u=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this.itemStart=function(_){f++,c===!1&&r.onStart!==void 0&&r.onStart(_,u,f),c=!0},this.itemEnd=function(_){u++,r.onProgress!==void 0&&r.onProgress(_,u,f),u===f&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(_){r.onError!==void 0&&r.onError(_)},this.resolveURL=function(_){return d?d(_):_},this.setURLModifier=function(_){return d=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=p.length;g<v;g+=2){const y=p[g],b=p[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return b}return null}}}const YE=new qE;class oo{constructor(e){this.manager=e!==void 0?e:YE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(r,c){a.load(e,r,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ya={};class KE extends Error{constructor(e,n){super(e),this.response=n}}class Yx extends oo{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=cs.get(e);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(ya[e]!==void 0){ya[e].push({onLoad:n,onProgress:a,onError:r});return}ya[e]=[],ya[e].push({onLoad:n,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,d=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const _=ya[e],g=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=v?parseInt(v):0,b=y!==0;let E=0;const M=new ReadableStream({start(x){O();function O(){g.read().then(({done:L,value:C})=>{if(L)x.close();else{E+=C.byteLength;const V=new ProgressEvent("progress",{lengthComputable:b,loaded:E,total:y});for(let H=0,P=_.length;H<P;H++){const q=_[H];q.onProgress&&q.onProgress(V)}x.enqueue(C),O()}},L=>{x.error(L)})}}});return new Response(M)}else throw new KE(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(_=>new DOMParser().parseFromString(_,f));case"json":return p.json();default:if(f==="")return p.text();{const g=/charset="?([^;"\s]*)"?/i.exec(f),v=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(v);return p.arrayBuffer().then(b=>y.decode(b))}}}).then(p=>{cs.add(e,p);const _=ya[e];delete ya[e];for(let g=0,v=_.length;g<v;g++){const y=_[g];y.onLoad&&y.onLoad(p)}}).catch(p=>{const _=ya[e];if(_===void 0)throw this.manager.itemError(e),p;delete ya[e];for(let g=0,v=_.length;g<v;g++){const y=_[g];y.onError&&y.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ZE extends oo{constructor(e){super(e)}load(e,n,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=cs.get(e);if(u!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u;const f=Al("img");function d(){_(),cs.add(e,this),n&&n(this),c.manager.itemEnd(e)}function p(g){_(),r&&r(g),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),c.manager.itemStart(e),f.src=e,f}}class QE extends oo{constructor(e){super(e)}load(e,n,a,r){const c=new En,u=new ZE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},a,r),c}}class Nu extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const vd=new ft,Tv=new X,Av=new X;class Bp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ip,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Tv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tv),Av.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Av),n.updateMatrixWorld(),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JE extends Bp{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,a=Jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,c=e.distance||n.far;(a!==n.fov||r!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=r,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $E extends Nu{constructor(e,n,a=0,r=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=a,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new JE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wv=new ft,fl=new X,xd=new X;class eT extends Bp{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,n=0){const a=this.camera,r=this.matrix,c=e.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),fl.setFromMatrixPosition(e.matrixWorld),a.position.copy(fl),xd.copy(a.position),xd.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(xd),a.updateMatrixWorld(),r.makeTranslation(-fl.x,-fl.y,-fl.z),wv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wv)}}class tT extends Nu{constructor(e,n,a=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new eT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fp extends Fx{constructor(e=-1,n=1,a=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=a-e,u=a+e,f=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,f-=_*this.view.offsetY,d=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class nT extends Bp{constructor(){super(new Fp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vp extends Nu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new nT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class iT extends Nu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class xl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class aT extends oo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=cs.get(e);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(p=>{n&&n(p),c.manager.itemEnd(e)}).catch(p=>{r&&r(p)});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader;const d=fetch(e,f).then(function(p){return p.blob()}).then(function(p){return createImageBitmap(p,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(p){return cs.add(e,p),n&&n(p),c.manager.itemEnd(e),p}).catch(function(p){r&&r(p),cs.remove(e),c.manager.itemError(e),c.manager.itemEnd(e)});cs.add(e,d),c.manager.itemStart(e)}}class sT extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class rT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Rv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Rv(){return performance.now()}const Hp="\\[\\]\\.:\\/",oT=new RegExp("["+Hp+"]","g"),kp="[^"+Hp+"]",lT="[^"+Hp.replace("\\.","")+"]",cT=/((?:WC+[\/:])*)/.source.replace("WC",kp),uT=/(WCOD+)?/.source.replace("WCOD",lT),fT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kp),hT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kp),dT=new RegExp("^"+cT+uT+fT+hT+"$"),pT=["material","materials","bones","map"];class mT{constructor(e,n,a){const r=a||Ht.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=a.length;r!==c;++r)a[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Ht{constructor(e,n,a){this.path=n,this.parsedPath=a||Ht.parseTrackName(n),this.node=Ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Ht.Composite(e,n,a):new Ht(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oT,"")}static parseTrackName(e){const n=dT.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=a.nodeName.substring(r+1);pT.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const f=c[u];if(f.name===n||f.uuid===n)return f;const d=a(f.children);if(d)return d}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)e[n++]=a[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let c=n.propertyIndex;if(e||(e=Ht.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let p=n.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let _=0;_<e.length;_++)if(e[_].name===p){p=_;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(p!==void 0){if(e[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[p]}}const u=e[r];if(u===void 0){const p=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+r+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=mT;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cv{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gT extends qs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Dv(o,e,n,a){const r=_T(a);switch(n){case bx:return o*e;case Tx:return o*e;case Ax:return o*e*2;case wp:return o*e/r.components*r.byteLength;case Rp:return o*e/r.components*r.byteLength;case wx:return o*e*2/r.components*r.byteLength;case Cp:return o*e*2/r.components*r.byteLength;case Ex:return o*e*3/r.components*r.byteLength;case Ei:return o*e*4/r.components*r.byteLength;case Dp:return o*e*4/r.components*r.byteLength;case _u:case vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case xu:case yu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vd:case Xd:return Math.max(o,16)*Math.max(e,8)/4;case Gd:case jd:return Math.max(o,8)*Math.max(e,8)/2;case Wd:case qd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Yd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case $d:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ep:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case tp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case np:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ip:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ap:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case sp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case rp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case op:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case lp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Su:case cp:case up:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Rx:case fp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case hp:case dp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _T(o){switch(o){case Ra:case yx:return{byteLength:1,components:1};case yl:case Sx:case wl:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case Xs:case Ep:case Ii:return{byteLength:4,components:1};case Mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kx(){let o=null,e=!1,n=null,a=null;function r(c,u){n(c,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function vT(o){const e=new WeakMap;function n(f,d){const p=f.array,_=f.usage,g=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,d,p){const _=d.array,g=d.updateRanges;if(o.bindBuffer(p,f),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<g.length;y++){const b=g[v],E=g[y];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++v,g[v]=E)}g.length=v+1;for(let y=0,b=g.length;y<b;y++){const E=g[y];o.bufferSubData(p,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(o.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:r,remove:c,update:u}}var xT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ST=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ET=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,GT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$T=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_A=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$A=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,l1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,A1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,w1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,z1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,H1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,V1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:xT,alphahash_pars_fragment:yT,alphamap_fragment:ST,alphamap_pars_fragment:MT,alphatest_fragment:bT,alphatest_pars_fragment:ET,aomap_fragment:TT,aomap_pars_fragment:AT,batching_pars_vertex:wT,batching_vertex:RT,begin_vertex:CT,beginnormal_vertex:DT,bsdfs:NT,iridescence_fragment:LT,bumpmap_pars_fragment:UT,clipping_planes_fragment:OT,clipping_planes_pars_fragment:PT,clipping_planes_pars_vertex:IT,clipping_planes_vertex:zT,color_fragment:BT,color_pars_fragment:FT,color_pars_vertex:HT,color_vertex:kT,common:GT,cube_uv_reflection_fragment:VT,defaultnormal_vertex:jT,displacementmap_pars_vertex:XT,displacementmap_vertex:WT,emissivemap_fragment:qT,emissivemap_pars_fragment:YT,colorspace_fragment:KT,colorspace_pars_fragment:ZT,envmap_fragment:QT,envmap_common_pars_fragment:JT,envmap_pars_fragment:$T,envmap_pars_vertex:eA,envmap_physical_pars_fragment:fA,envmap_vertex:tA,fog_vertex:nA,fog_pars_vertex:iA,fog_fragment:aA,fog_pars_fragment:sA,gradientmap_pars_fragment:rA,lightmap_pars_fragment:oA,lights_lambert_fragment:lA,lights_lambert_pars_fragment:cA,lights_pars_begin:uA,lights_toon_fragment:hA,lights_toon_pars_fragment:dA,lights_phong_fragment:pA,lights_phong_pars_fragment:mA,lights_physical_fragment:gA,lights_physical_pars_fragment:_A,lights_fragment_begin:vA,lights_fragment_maps:xA,lights_fragment_end:yA,logdepthbuf_fragment:SA,logdepthbuf_pars_fragment:MA,logdepthbuf_pars_vertex:bA,logdepthbuf_vertex:EA,map_fragment:TA,map_pars_fragment:AA,map_particle_fragment:wA,map_particle_pars_fragment:RA,metalnessmap_fragment:CA,metalnessmap_pars_fragment:DA,morphinstance_vertex:NA,morphcolor_vertex:LA,morphnormal_vertex:UA,morphtarget_pars_vertex:OA,morphtarget_vertex:PA,normal_fragment_begin:IA,normal_fragment_maps:zA,normal_pars_fragment:BA,normal_pars_vertex:FA,normal_vertex:HA,normalmap_pars_fragment:kA,clearcoat_normal_fragment_begin:GA,clearcoat_normal_fragment_maps:VA,clearcoat_pars_fragment:jA,iridescence_pars_fragment:XA,opaque_fragment:WA,packing:qA,premultiplied_alpha_fragment:YA,project_vertex:KA,dithering_fragment:ZA,dithering_pars_fragment:QA,roughnessmap_fragment:JA,roughnessmap_pars_fragment:$A,shadowmap_pars_fragment:e1,shadowmap_pars_vertex:t1,shadowmap_vertex:n1,shadowmask_pars_fragment:i1,skinbase_vertex:a1,skinning_pars_vertex:s1,skinning_vertex:r1,skinnormal_vertex:o1,specularmap_fragment:l1,specularmap_pars_fragment:c1,tonemapping_fragment:u1,tonemapping_pars_fragment:f1,transmission_fragment:h1,transmission_pars_fragment:d1,uv_pars_fragment:p1,uv_pars_vertex:m1,uv_vertex:g1,worldpos_vertex:_1,background_vert:v1,background_frag:x1,backgroundCube_vert:y1,backgroundCube_frag:S1,cube_vert:M1,cube_frag:b1,depth_vert:E1,depth_frag:T1,distanceRGBA_vert:A1,distanceRGBA_frag:w1,equirect_vert:R1,equirect_frag:C1,linedashed_vert:D1,linedashed_frag:N1,meshbasic_vert:L1,meshbasic_frag:U1,meshlambert_vert:O1,meshlambert_frag:P1,meshmatcap_vert:I1,meshmatcap_frag:z1,meshnormal_vert:B1,meshnormal_frag:F1,meshphong_vert:H1,meshphong_frag:k1,meshphysical_vert:G1,meshphysical_frag:V1,meshtoon_vert:j1,meshtoon_frag:X1,points_vert:W1,points_frag:q1,shadow_vert:Y1,shadow_frag:K1,sprite_vert:Z1,sprite_frag:Q1},Ue={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Xi={basic:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:kn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:kn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new at(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:kn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:kn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:kn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:kn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:kn([Ue.common,Ue.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:kn([Ue.lights,Ue.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Xi.physical={uniforms:kn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const uu={r:0,b:0,g:0},Is=new Ki,J1=new ft;function $1(o,e,n,a,r,c,u){const f=new at(0);let d=c===!0?0:1,p,_,g=null,v=0,y=null;function b(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function E(L){let C=!1;const V=b(L);V===null?x(f,d):V&&V.isColor&&(x(V,1),C=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?a.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(L,C){const V=b(C);V&&(V.isCubeTexture||V.mapping===Cu)?(_===void 0&&(_=new Ln(new io(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:$r(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,P,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),Is.copy(C.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(J1.makeRotationFromEuler(Is)),_.material.toneMapped=Ct.getTransfer(V.colorSpace)!==Wt,(g!==V||v!==V.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=V,v=V.version,y=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Ln(new Du(2,2),new hs({name:"BackgroundMaterial",uniforms:$r(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(V.colorSpace)!==Wt,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||v!==V.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=V,v=V.version,y=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,C){L.getRGB(uu,Bx(o)),a.buffers.color.setClear(uu.r,uu.g,uu.b,C,u)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,C=1){f.set(L),d=C,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,x(f,d)},render:E,addToRenderList:M,dispose:O}}function ew(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let c=r,u=!1;function f(R,F,he,oe,xe){let ye=!1;const I=g(oe,he,F);c!==I&&(c=I,p(c.object)),ye=y(R,oe,he,xe),ye&&b(R,oe,he,xe),xe!==null&&e.update(xe,o.ELEMENT_ARRAY_BUFFER),(ye||u)&&(u=!1,C(R,F,he,oe),xe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function d(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function g(R,F,he){const oe=he.wireframe===!0;let xe=a[R.id];xe===void 0&&(xe={},a[R.id]=xe);let ye=xe[F.id];ye===void 0&&(ye={},xe[F.id]=ye);let I=ye[oe];return I===void 0&&(I=v(d()),ye[oe]=I),I}function v(R){const F=[],he=[],oe=[];for(let xe=0;xe<n;xe++)F[xe]=0,he[xe]=0,oe[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:he,attributeDivisors:oe,object:R,attributes:{},index:null}}function y(R,F,he,oe){const xe=c.attributes,ye=F.attributes;let I=0;const J=he.getAttributes();for(const Z in J)if(J[Z].location>=0){const ve=xe[Z];let D=ye[Z];if(D===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(D=R.instanceColor)),ve===void 0||ve.attribute!==D||D&&ve.data!==D.data)return!0;I++}return c.attributesNum!==I||c.index!==oe}function b(R,F,he,oe){const xe={},ye=F.attributes;let I=0;const J=he.getAttributes();for(const Z in J)if(J[Z].location>=0){let ve=ye[Z];ve===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ve=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ve=R.instanceColor));const D={};D.attribute=ve,ve&&ve.data&&(D.data=ve.data),xe[Z]=D,I++}c.attributes=xe,c.attributesNum=I,c.index=oe}function E(){const R=c.newAttributes;for(let F=0,he=R.length;F<he;F++)R[F]=0}function M(R){x(R,0)}function x(R,F){const he=c.newAttributes,oe=c.enabledAttributes,xe=c.attributeDivisors;he[R]=1,oe[R]===0&&(o.enableVertexAttribArray(R),oe[R]=1),xe[R]!==F&&(o.vertexAttribDivisor(R,F),xe[R]=F)}function O(){const R=c.newAttributes,F=c.enabledAttributes;for(let he=0,oe=F.length;he<oe;he++)F[he]!==R[he]&&(o.disableVertexAttribArray(he),F[he]=0)}function L(R,F,he,oe,xe,ye,I){I===!0?o.vertexAttribIPointer(R,F,he,xe,ye):o.vertexAttribPointer(R,F,he,oe,xe,ye)}function C(R,F,he,oe){E();const xe=oe.attributes,ye=he.getAttributes(),I=F.defaultAttributeValues;for(const J in ye){const Z=ye[J];if(Z.location>=0){let re=xe[J];if(re===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),re!==void 0){const ve=re.normalized,D=re.itemSize,$=e.get(re);if($===void 0)continue;const me=$.buffer,j=$.type,le=$.bytesPerElement,ce=j===o.INT||j===o.UNSIGNED_INT||re.gpuType===Ep;if(re.isInterleavedBufferAttribute){const fe=re.data,we=fe.stride,ze=re.offset;if(fe.isInstancedInterleavedBuffer){for(let Be=0;Be<Z.locationSize;Be++)x(Z.location+Be,fe.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<Z.locationSize;Be++)M(Z.location+Be);o.bindBuffer(o.ARRAY_BUFFER,me);for(let Be=0;Be<Z.locationSize;Be++)L(Z.location+Be,D/Z.locationSize,j,ve,we*le,(ze+D/Z.locationSize*Be)*le,ce)}else{if(re.isInstancedBufferAttribute){for(let fe=0;fe<Z.locationSize;fe++)x(Z.location+fe,re.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let fe=0;fe<Z.locationSize;fe++)M(Z.location+fe);o.bindBuffer(o.ARRAY_BUFFER,me);for(let fe=0;fe<Z.locationSize;fe++)L(Z.location+fe,D/Z.locationSize,j,ve,D*le,D/Z.locationSize*fe*le,ce)}}else if(I!==void 0){const ve=I[J];if(ve!==void 0)switch(ve.length){case 2:o.vertexAttrib2fv(Z.location,ve);break;case 3:o.vertexAttrib3fv(Z.location,ve);break;case 4:o.vertexAttrib4fv(Z.location,ve);break;default:o.vertexAttrib1fv(Z.location,ve)}}}}O()}function V(){q();for(const R in a){const F=a[R];for(const he in F){const oe=F[he];for(const xe in oe)_(oe[xe].object),delete oe[xe];delete F[he]}delete a[R]}}function H(R){if(a[R.id]===void 0)return;const F=a[R.id];for(const he in F){const oe=F[he];for(const xe in oe)_(oe[xe].object),delete oe[xe];delete F[he]}delete a[R.id]}function P(R){for(const F in a){const he=a[F];if(he[R.id]===void 0)continue;const oe=he[R.id];for(const xe in oe)_(oe[xe].object),delete oe[xe];delete he[R.id]}}function q(){N(),u=!0,c!==r&&(c=r,p(c.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:q,resetDefaultState:N,dispose:V,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:M,disableUnusedAttributes:O}}function tw(o,e,n){let a;function r(p){a=p}function c(p,_){o.drawArrays(a,p,_),n.update(_,a,1)}function u(p,_,g){g!==0&&(o.drawArraysInstanced(a,p,_,g),n.update(_,a,g))}function f(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];n.update(y,a,1)}function d(p,_,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)u(p[b],_[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,_,0,v,0,g);let b=0;for(let E=0;E<g;E++)b+=_[E]*v[E];n.update(b,a,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function nw(o,e,n,a){let r;function c(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(P){return!(P!==Ei&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(P){const q=P===wl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ra&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ii&&!q)}function d(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=d(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=b>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:V,maxSamples:H}}function iw(o){const e=this;let n=null,a=0,r=!1,c=!1;const u=new rs,f=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||r;return r=v,a=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const b=g.clippingPlanes,E=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!r||b===null||b.length===0||c&&!M)c?_(null):p();else{const O=c?0:a,L=O*4;let C=x.clippingState||null;d.value=C,C=_(b,v,L,y);for(let V=0;V!==L;++V)C[V]=n[V];x.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=O}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(g,v,y,b){const E=g!==null?g.length:0;let M=null;if(E!==0){if(M=d.value,b!==!0||M===null){const x=y+E*4,O=v.matrixWorldInverse;f.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,C=y;L!==E;++L,C+=4)u.copy(g[L]).applyMatrix4(O,f),u.normal.toArray(M,C),M[C+3]=u.constant}d.value=M,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,M}}function aw(o){let e=new WeakMap;function n(u,f){return f===Hd?u.mapping=Kr:f===kd&&(u.mapping=Zr),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Hd||f===kd)if(e.has(u)){const d=e.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new ME(d.height);return p.fromEquirectangularTexture(o,u),e.set(u,p),u.addEventListener("dispose",r),n(p.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Vr=4,Nv=[.125,.215,.35,.446,.526,.582],ks=20,yd=new Fp,Lv=new at;let Sd=null,Md=0,bd=0,Ed=!1;const Fs=(1+Math.sqrt(5))/2,kr=1/Fs,Uv=[new X(-Fs,kr,0),new X(Fs,kr,0),new X(-kr,0,Fs),new X(kr,0,Fs),new X(0,Fs,-kr),new X(0,Fs,kr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],sw=new X;class Ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,r=100,c={}){const{size:u=256,position:f=sw}=c;Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,a,r,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,Md,bd),this._renderer.xr.enabled=Ed,e.scissorTest=!1,fu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:wl,format:Ei,colorSpace:Wn,depthBuffer:!1},r=Pv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pv(e,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rw(c)),this._blurMaterial=ow(c,e,n)}return r}_compileMaterial(e){const n=new Ln(this._lodPlanes[0],e);this._renderer.compile(n,yd)}_sceneToCubeUV(e,n,a,r,c){const d=new Gn(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Lv),g.toneMapping=fs,g.autoClear=!1;const b=new Gs({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),E=new Ln(new io,b);let M=!1;const x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,M=!0):(b.color.copy(Lv),M=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(d.up.set(0,p[O],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+_[O],c.y,c.z)):L===1?(d.up.set(0,0,p[O]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+_[O],c.z)):(d.up.set(0,p[O],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+_[O]));const C=this._cubeSize;fu(r,L*C,O>2?C:0,C,C),g.setRenderTarget(r),M&&g.render(E,d),g.render(e,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=x}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===Kr||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iv());const c=r?this._cubemapMaterial:this._equirectMaterial,u=new Ln(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const d=this._cubeSize;fu(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,yd)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let c=1;c<r;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Uv[(r-c-1)%Uv.length];this._blur(e,c-1,c,u,f)}n.autoClear=a}_blur(e,n,a,r,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",c),this._halfBlur(u,e,a,a,r,"longitudinal",c)}_halfBlur(e,n,a,r,c,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Ln(this._lodPlanes[r],p),v=p.uniforms,y=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ks-1),E=c/b,M=isFinite(c)?1+Math.floor(_*E):ks;M>ks&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ks}`);const x=[];let O=0;for(let P=0;P<ks;++P){const q=P/E,N=Math.exp(-q*q/2);x.push(N),P===0?O+=N:P<M&&(O+=2*N)}for(let P=0;P<x.length;P++)x[P]=x[P]/O;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=b,v.mipInt.value=L-a;const C=this._sizeLods[r],V=3*C*(r>L-Vr?r-L+Vr:0),H=4*(this._cubeSize-C);fu(n,V,H,3*C,2*C),d.setRenderTarget(n),d.render(g,yd)}}function rw(o){const e=[],n=[],a=[];let r=o;const c=o-Vr+1+Nv.length;for(let u=0;u<c;u++){const f=Math.pow(2,r);n.push(f);let d=1/f;u>o-Vr?d=Nv[u-o+Vr-1]:u===0&&(d=0),a.push(d);const p=1/(f-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,E=3,M=2,x=1,O=new Float32Array(E*b*y),L=new Float32Array(M*b*y),C=new Float32Array(x*b*y);for(let H=0;H<y;H++){const P=H%3*2/3-1,q=H>2?0:-1,N=[P,q,0,P+2/3,q,0,P+2/3,q+1,0,P,q,0,P+2/3,q+1,0,P,q+1,0];O.set(N,E*b*H),L.set(v,M*b*H);const R=[H,H,H,H,H,H];C.set(R,x*b*H)}const V=new Zi;V.setAttribute("position",new Xn(O,E)),V.setAttribute("uv",new Xn(L,M)),V.setAttribute("faceIndex",new Xn(C,x)),e.push(V),r>Vr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function Pv(o,e,n){const a=new Ws(o,e,n);return a.texture.mapping=Cu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function fu(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function ow(o,e,n){const a=new Float32Array(ks),r=new X(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function Iv(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function zv(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function Gp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lw(o){let e=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===Hd||d===kd,_=d===Kr||d===Zr;if(p||_){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Ov(o)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&r(y)?(n===null&&(n=new Ov(o)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function r(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function cw(o){const e={};function n(a){if(e[a]!==void 0)return e[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Mu("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function uw(o,e,n,a){const r={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete r[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function d(g){const v=g.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,b=g.attributes.position;let E=0;if(y!==null){const O=y.array;E=y.version;for(let L=0,C=O.length;L<C;L+=3){const V=O[L+0],H=O[L+1],P=O[L+2];v.push(V,H,H,P,P,V)}}else if(b!==void 0){const O=b.array;E=b.version;for(let L=0,C=O.length/3-1;L<C;L+=3){const V=L+0,H=L+1,P=L+2;v.push(V,H,H,P,P,V)}}else return;const M=new(Lx(v)?zx:Ix)(v,1);M.version=E;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:f,update:d,getWireframeAttribute:_}}function fw(o,e,n){let a;function r(v){a=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function d(v,y){o.drawElements(a,y,c,v*u),n.update(y,a,1)}function p(v,y,b){b!==0&&(o.drawElementsInstanced(a,y,c,v*u,b),n.update(y,a,b))}function _(v,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];n.update(M,a,1)}function g(v,y,b,E){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/u,y[x],E[x]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,E,0,b);let x=0;for(let O=0;O<b;O++)x+=y[O]*E[O];n.update(x,a,1)}}this.setMode=r,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function hw(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,f){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=f*(c/3);break;case o.LINES:n.lines+=f*(c/2);break;case o.LINE_STRIP:n.lines+=f*(c-1);break;case o.LINE_LOOP:n.lines+=f*c;break;case o.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function dw(o,e,n){const a=new WeakMap,r=new Pt;function c(u,f,d){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let R=function(){q.dispose(),a.delete(f),f.removeEventListener("dispose",R)};var y=R;v!==void 0&&v.texture.dispose();const b=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],O=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let C=0;b===!0&&(C=1),E===!0&&(C=2),M===!0&&(C=3);let V=f.attributes.position.count*C,H=1;V>e.maxTextureSize&&(H=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const P=new Float32Array(V*H*4*g),q=new Ux(P,V,H,g);q.type=Ii,q.needsUpdate=!0;const N=C*4;for(let F=0;F<g;F++){const he=x[F],oe=O[F],xe=L[F],ye=V*H*4*F;for(let I=0;I<he.count;I++){const J=I*N;b===!0&&(r.fromBufferAttribute(he,I),P[ye+J+0]=r.x,P[ye+J+1]=r.y,P[ye+J+2]=r.z,P[ye+J+3]=0),E===!0&&(r.fromBufferAttribute(oe,I),P[ye+J+4]=r.x,P[ye+J+5]=r.y,P[ye+J+6]=r.z,P[ye+J+7]=0),M===!0&&(r.fromBufferAttribute(xe,I),P[ye+J+8]=r.x,P[ye+J+9]=r.y,P[ye+J+10]=r.z,P[ye+J+11]=xe.itemSize===4?r.w:1)}}v={count:g,texture:q,size:new nt(V,H)},a.set(f,v),f.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const E=f.morphTargetsRelative?1:1-b;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function pw(o,e,n,a){let r=new WeakMap;function c(d){const p=a.render.frame,_=d.geometry,g=e.get(d,_);if(r.get(g)!==p&&(e.update(g),r.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),r.get(d)!==p&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return g}function u(){r=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const Zx=new En,Bv=new Xx(1,1),Qx=new Ux,Jx=new sE,$x=new Hx,Fv=[],Hv=[],kv=new Float32Array(16),Gv=new Float32Array(9),Vv=new Float32Array(4);function lo(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let c=Fv[r];if(c===void 0&&(c=new Float32Array(r),Fv[r]=c),e!==0){a.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,o[u].toArray(c,f)}return c}function _n(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function vn(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function Lu(o,e){let n=Hv[e];n===void 0&&(n=new Int32Array(e),Hv[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function mw(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function gw(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;o.uniform2fv(this.addr,e),vn(n,e)}}function _w(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;o.uniform3fv(this.addr,e),vn(n,e)}}function vw(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;o.uniform4fv(this.addr,e),vn(n,e)}}function xw(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(_n(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,a))return;Vv.set(a),o.uniformMatrix2fv(this.addr,!1,Vv),vn(n,a)}}function yw(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(_n(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,a))return;Gv.set(a),o.uniformMatrix3fv(this.addr,!1,Gv),vn(n,a)}}function Sw(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(_n(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,a))return;kv.set(a),o.uniformMatrix4fv(this.addr,!1,kv),vn(n,a)}}function Mw(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function bw(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;o.uniform2iv(this.addr,e),vn(n,e)}}function Ew(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;o.uniform3iv(this.addr,e),vn(n,e)}}function Tw(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;o.uniform4iv(this.addr,e),vn(n,e)}}function Aw(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function ww(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;o.uniform2uiv(this.addr,e),vn(n,e)}}function Rw(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;o.uniform3uiv(this.addr,e),vn(n,e)}}function Cw(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;o.uniform4uiv(this.addr,e),vn(n,e)}}function Dw(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(Bv.compareFunction=Nx,c=Bv):c=Zx,n.setTexture2D(e||c,r)}function Nw(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||Jx,r)}function Lw(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||$x,r)}function Uw(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||Qx,r)}function Ow(o){switch(o){case 5126:return mw;case 35664:return gw;case 35665:return _w;case 35666:return vw;case 35674:return xw;case 35675:return yw;case 35676:return Sw;case 5124:case 35670:return Mw;case 35667:case 35671:return bw;case 35668:case 35672:return Ew;case 35669:case 35673:return Tw;case 5125:return Aw;case 36294:return ww;case 36295:return Rw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Lw;case 36289:case 36303:case 36311:case 36292:return Uw}}function Pw(o,e){o.uniform1fv(this.addr,e)}function Iw(o,e){const n=lo(e,this.size,2);o.uniform2fv(this.addr,n)}function zw(o,e){const n=lo(e,this.size,3);o.uniform3fv(this.addr,n)}function Bw(o,e){const n=lo(e,this.size,4);o.uniform4fv(this.addr,n)}function Fw(o,e){const n=lo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Hw(o,e){const n=lo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function kw(o,e){const n=lo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Gw(o,e){o.uniform1iv(this.addr,e)}function Vw(o,e){o.uniform2iv(this.addr,e)}function jw(o,e){o.uniform3iv(this.addr,e)}function Xw(o,e){o.uniform4iv(this.addr,e)}function Ww(o,e){o.uniform1uiv(this.addr,e)}function qw(o,e){o.uniform2uiv(this.addr,e)}function Yw(o,e){o.uniform3uiv(this.addr,e)}function Kw(o,e){o.uniform4uiv(this.addr,e)}function Zw(o,e,n){const a=this.cache,r=e.length,c=Lu(n,r);_n(a,c)||(o.uniform1iv(this.addr,c),vn(a,c));for(let u=0;u!==r;++u)n.setTexture2D(e[u]||Zx,c[u])}function Qw(o,e,n){const a=this.cache,r=e.length,c=Lu(n,r);_n(a,c)||(o.uniform1iv(this.addr,c),vn(a,c));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||Jx,c[u])}function Jw(o,e,n){const a=this.cache,r=e.length,c=Lu(n,r);_n(a,c)||(o.uniform1iv(this.addr,c),vn(a,c));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||$x,c[u])}function $w(o,e,n){const a=this.cache,r=e.length,c=Lu(n,r);_n(a,c)||(o.uniform1iv(this.addr,c),vn(a,c));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||Qx,c[u])}function eR(o){switch(o){case 5126:return Pw;case 35664:return Iw;case 35665:return zw;case 35666:return Bw;case 35674:return Fw;case 35675:return Hw;case 35676:return kw;case 5124:case 35670:return Gw;case 35667:case 35671:return Vw;case 35668:case 35672:return jw;case 35669:case 35673:return Xw;case 5125:return Ww;case 36294:return qw;case 36295:return Yw;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Qw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return $w}}class tR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Ow(n.type)}}class nR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eR(n.type)}}class iR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const f=r[c];f.setValue(e,n[f.id],a)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function jv(o,e){o.seq.push(e),o.map[e.id]=e}function aR(o,e,n){const a=o.name,r=a.length;for(Td.lastIndex=0;;){const c=Td.exec(a),u=Td.lastIndex;let f=c[1];const d=c[2]==="]",p=c[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===r){jv(n,p===void 0?new tR(f,o,e):new nR(f,o,e));break}else{let g=n.map[f];g===void 0&&(g=new iR(f),jv(n,g)),n=g}}}class bu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const c=e.getActiveUniform(n,r),u=e.getUniformLocation(n,c.name);aR(c,u,this)}}setValue(e,n,a,r){const c=this.map[n];c!==void 0&&c.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let c=0,u=n.length;c!==u;++c){const f=n[c],d=a[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,c=e.length;r!==c;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function Xv(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const sR=37297;let rR=0;function oR(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=r;u<c;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const Wv=new ut;function lR(o){Ct._getMatrix(Wv,Ct.workingColorSpace,o);const e=`mat3( ${Wv.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(o)){case Tu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function qv(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),r=o.getShaderInfoLog(e).trim();if(a&&r==="")return"";const c=/ERROR: 0:(\d+)/.exec(r);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+r+`

`+oR(o.getShaderSource(e),u)}else return r}function cR(o,e){const n=lR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function uR(o,e){let n;switch(e){case mb:n="Linear";break;case gb:n="Reinhard";break;case _b:n="Cineon";break;case _x:n="ACESFilmic";break;case xb:n="AgX";break;case yb:n="Neutral";break;case vb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hu=new X;function fR(){Ct.getLuminanceCoefficients(hu);const o=hu.x.toFixed(4),e=hu.y.toFixed(4),n=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function dR(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function pR(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const c=o.getActiveAttrib(e,r),u=c.name;let f=1;c.type===o.FLOAT_MAT2&&(f=2),c.type===o.FLOAT_MAT3&&(f=3),c.type===o.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:o.getAttribLocation(e,u),locationSize:f}}return n}function gl(o){return o!==""}function Yv(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mR=/^[ \t]*#include +<([\w\d./]+)>/gm;function xp(o){return o.replace(mR,_R)}const gR=new Map;function _R(o,e){let n=ht[e];if(n===void 0){const a=gR.get(e);if(a!==void 0)n=ht[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return xp(n)}const vR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zv(o){return o.replace(vR,xR)}function xR(o,e,n,a){let r="";for(let c=parseInt(e);c<parseInt(n);c++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function Qv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===mx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===YM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Sa&&(e="SHADOWMAP_TYPE_VSM"),e}function SR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Kr:case Zr:e="ENVMAP_TYPE_CUBE";break;case Cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function bR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case gx:e="ENVMAP_BLENDING_MULTIPLY";break;case db:e="ENVMAP_BLENDING_MIX";break;case pb:e="ENVMAP_BLENDING_ADD";break}return e}function ER(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function TR(o,e,n,a){const r=o.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const d=yR(n),p=SR(n),_=MR(n),g=bR(n),v=ER(n),y=hR(n),b=dR(c),E=r.createProgram();let M,x,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(gl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(gl).join(`
`),x.length>0&&(x+=`
`)):(M=[Qv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),x=[Qv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fs?"#define TONE_MAPPING":"",n.toneMapping!==fs?ht.tonemapping_pars_fragment:"",n.toneMapping!==fs?uR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,cR("linearToOutputTexel",n.outputColorSpace),fR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gl).join(`
`)),u=xp(u),u=Yv(u,n),u=Kv(u,n),f=xp(f),f=Yv(f,n),f=Kv(f,n),u=Zv(u),f=Zv(f),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===X_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===X_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=O+M+u,C=O+x+f,V=Xv(r,r.VERTEX_SHADER,L),H=Xv(r,r.FRAGMENT_SHADER,C);r.attachShader(E,V),r.attachShader(E,H),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(F){if(o.debug.checkShaderErrors){const he=r.getProgramInfoLog(E).trim(),oe=r.getShaderInfoLog(V).trim(),xe=r.getShaderInfoLog(H).trim();let ye=!0,I=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(ye=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,E,V,H);else{const J=qv(r,V,"vertex"),Z=qv(r,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+he+`
`+J+`
`+Z)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(oe===""||xe==="")&&(I=!1);I&&(F.diagnostics={runnable:ye,programLog:he,vertexShader:{log:oe,prefix:M},fragmentShader:{log:xe,prefix:x}})}r.deleteShader(V),r.deleteShader(H),q=new bu(r,E),N=pR(r,E)}let q;this.getUniforms=function(){return q===void 0&&P(this),q};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(E,sR)),R},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rR++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=H,this}let AR=0;class wR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new RR(e),n.set(e,a)),a}}class RR{constructor(e){this.id=AR++,this.code=e,this.usedTimes=0}}function CR(o,e,n,a,r,c,u){const f=new Ox,d=new wR,p=new Set,_=[],g=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(N){return p.add(N),N===0?"uv":`uv${N}`}function M(N,R,F,he,oe){const xe=he.fog,ye=oe.geometry,I=N.isMeshStandardMaterial?he.environment:null,J=(N.isMeshStandardMaterial?n:e).get(N.envMap||I),Z=J&&J.mapping===Cu?J.image.height:null,re=b[N.type];N.precision!==null&&(y=r.getMaxPrecision(N.precision),y!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",y,"instead."));const ve=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,D=ve!==void 0?ve.length:0;let $=0;ye.morphAttributes.position!==void 0&&($=1),ye.morphAttributes.normal!==void 0&&($=2),ye.morphAttributes.color!==void 0&&($=3);let me,j,le,ce;if(re){const Dt=Xi[re];me=Dt.vertexShader,j=Dt.fragmentShader}else me=N.vertexShader,j=N.fragmentShader,d.update(N),le=d.getVertexShaderID(N),ce=d.getFragmentShaderID(N);const fe=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),ze=oe.isInstancedMesh===!0,Be=oe.isBatchedMesh===!0,At=!!N.map,wt=!!N.matcap,lt=!!J,B=!!N.aoMap,xn=!!N.lightMap,pt=!!N.bumpMap,mt=!!N.normalMap,Xe=!!N.displacementMap,It=!!N.emissiveMap,We=!!N.metalnessMap,U=!!N.roughnessMap,A=N.anisotropy>0,ie=N.clearcoat>0,ge=N.dispersion>0,Ee=N.iridescence>0,Se=N.sheen>0,Ve=N.transmission>0,Ce=A&&!!N.anisotropyMap,Fe=ie&&!!N.clearcoatMap,yt=ie&&!!N.clearcoatNormalMap,Ae=ie&&!!N.clearcoatRoughnessMap,He=Ee&&!!N.iridescenceMap,Ze=Ee&&!!N.iridescenceThicknessMap,je=Se&&!!N.sheenColorMap,Pe=Se&&!!N.sheenRoughnessMap,$e=!!N.specularMap,rt=!!N.specularColorMap,kt=!!N.specularIntensityMap,Y=Ve&&!!N.transmissionMap,De=Ve&&!!N.thicknessMap,de=!!N.gradientMap,be=!!N.alphaMap,Re=N.alphaTest>0,Ne=!!N.alphaHash,et=!!N.extensions;let Jt=fs;N.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const dn={shaderID:re,shaderType:N.type,shaderName:N.name,vertexShader:me,fragmentShader:j,defines:N.defines,customVertexShaderID:le,customFragmentShaderID:ce,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:y,batching:Be,batchingColor:Be&&oe._colorsTexture!==null,instancing:ze,instancingColor:ze&&oe.instanceColor!==null,instancingMorph:ze&&oe.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:fe===null?o.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Wn,alphaToCoverage:!!N.alphaToCoverage,map:At,matcap:wt,envMap:lt,envMapMode:lt&&J.mapping,envMapCubeUVHeight:Z,aoMap:B,lightMap:xn,bumpMap:pt,normalMap:mt,displacementMap:v&&Xe,emissiveMap:It,normalMapObjectSpace:mt&&N.normalMapType===Ab,normalMapTangentSpace:mt&&N.normalMapType===Dx,metalnessMap:We,roughnessMap:U,anisotropy:A,anisotropyMap:Ce,clearcoat:ie,clearcoatMap:Fe,clearcoatNormalMap:yt,clearcoatRoughnessMap:Ae,dispersion:ge,iridescence:Ee,iridescenceMap:He,iridescenceThicknessMap:Ze,sheen:Se,sheenColorMap:je,sheenRoughnessMap:Pe,specularMap:$e,specularColorMap:rt,specularIntensityMap:kt,transmission:Ve,transmissionMap:Y,thicknessMap:De,gradientMap:de,opaque:N.transparent===!1&&N.blending===Xr&&N.alphaToCoverage===!1,alphaMap:be,alphaTest:Re,alphaHash:Ne,combine:N.combine,mapUv:At&&E(N.map.channel),aoMapUv:B&&E(N.aoMap.channel),lightMapUv:xn&&E(N.lightMap.channel),bumpMapUv:pt&&E(N.bumpMap.channel),normalMapUv:mt&&E(N.normalMap.channel),displacementMapUv:Xe&&E(N.displacementMap.channel),emissiveMapUv:It&&E(N.emissiveMap.channel),metalnessMapUv:We&&E(N.metalnessMap.channel),roughnessMapUv:U&&E(N.roughnessMap.channel),anisotropyMapUv:Ce&&E(N.anisotropyMap.channel),clearcoatMapUv:Fe&&E(N.clearcoatMap.channel),clearcoatNormalMapUv:yt&&E(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&E(N.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&E(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&E(N.iridescenceThicknessMap.channel),sheenColorMapUv:je&&E(N.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&E(N.sheenRoughnessMap.channel),specularMapUv:$e&&E(N.specularMap.channel),specularColorMapUv:rt&&E(N.specularColorMap.channel),specularIntensityMapUv:kt&&E(N.specularIntensityMap.channel),transmissionMapUv:Y&&E(N.transmissionMap.channel),thicknessMapUv:De&&E(N.thicknessMap.channel),alphaMapUv:be&&E(N.alphaMap.channel),vertexTangents:!!ye.attributes.tangent&&(mt||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!ye.attributes.uv&&(At||be),fog:!!xe,useFog:N.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:we,skinning:oe.isSkinnedMesh===!0,morphTargets:ye.morphAttributes.position!==void 0,morphNormals:ye.morphAttributes.normal!==void 0,morphColors:ye.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:$,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:At&&N.map.isVideoTexture===!0&&Ct.getTransfer(N.map.colorSpace)===Wt,decodeVideoTextureEmissive:It&&N.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(N.emissiveMap.colorSpace)===Wt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Wi,flipSided:N.side===ni,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:et&&N.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&N.extensions.multiDraw===!0||Be)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return dn.vertexUv1s=p.has(1),dn.vertexUv2s=p.has(2),dn.vertexUv3s=p.has(3),p.clear(),dn}function x(N){const R=[];if(N.shaderID?R.push(N.shaderID):(R.push(N.customVertexShaderID),R.push(N.customFragmentShaderID)),N.defines!==void 0)for(const F in N.defines)R.push(F),R.push(N.defines[F]);return N.isRawShaderMaterial===!1&&(O(R,N),L(R,N),R.push(o.outputColorSpace)),R.push(N.customProgramCacheKey),R.join()}function O(N,R){N.push(R.precision),N.push(R.outputColorSpace),N.push(R.envMapMode),N.push(R.envMapCubeUVHeight),N.push(R.mapUv),N.push(R.alphaMapUv),N.push(R.lightMapUv),N.push(R.aoMapUv),N.push(R.bumpMapUv),N.push(R.normalMapUv),N.push(R.displacementMapUv),N.push(R.emissiveMapUv),N.push(R.metalnessMapUv),N.push(R.roughnessMapUv),N.push(R.anisotropyMapUv),N.push(R.clearcoatMapUv),N.push(R.clearcoatNormalMapUv),N.push(R.clearcoatRoughnessMapUv),N.push(R.iridescenceMapUv),N.push(R.iridescenceThicknessMapUv),N.push(R.sheenColorMapUv),N.push(R.sheenRoughnessMapUv),N.push(R.specularMapUv),N.push(R.specularColorMapUv),N.push(R.specularIntensityMapUv),N.push(R.transmissionMapUv),N.push(R.thicknessMapUv),N.push(R.combine),N.push(R.fogExp2),N.push(R.sizeAttenuation),N.push(R.morphTargetsCount),N.push(R.morphAttributeCount),N.push(R.numDirLights),N.push(R.numPointLights),N.push(R.numSpotLights),N.push(R.numSpotLightMaps),N.push(R.numHemiLights),N.push(R.numRectAreaLights),N.push(R.numDirLightShadows),N.push(R.numPointLightShadows),N.push(R.numSpotLightShadows),N.push(R.numSpotLightShadowsWithMaps),N.push(R.numLightProbes),N.push(R.shadowMapType),N.push(R.toneMapping),N.push(R.numClippingPlanes),N.push(R.numClipIntersection),N.push(R.depthPacking)}function L(N,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),N.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),N.push(f.mask)}function C(N){const R=b[N.type];let F;if(R){const he=Xi[R];F=vE.clone(he.uniforms)}else F=N.uniforms;return F}function V(N,R){let F;for(let he=0,oe=_.length;he<oe;he++){const xe=_[he];if(xe.cacheKey===R){F=xe,++F.usedTimes;break}}return F===void 0&&(F=new TR(o,R,N,c),_.push(F)),F}function H(N){if(--N.usedTimes===0){const R=_.indexOf(N);_[R]=_[_.length-1],_.pop(),N.destroy()}}function P(N){d.remove(N)}function q(){d.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:C,acquireProgram:V,releaseProgram:H,releaseShaderCache:P,programs:_,dispose:q}}function DR(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function r(u,f,d){o.get(u)[f]=d}function c(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:c}}function NR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Jv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function $v(){const o=[];let e=0;const n=[],a=[],r=[];function c(){e=0,n.length=0,a.length=0,r.length=0}function u(g,v,y,b,E,M){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:b,renderOrder:g.renderOrder,z:E,group:M},o[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=E,x.group=M),e++,x}function f(g,v,y,b,E,M){const x=u(g,v,y,b,E,M);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function d(g,v,y,b,E,M){const x=u(g,v,y,b,E,M);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function p(g,v){n.length>1&&n.sort(g||NR),a.length>1&&a.sort(v||Jv),r.length>1&&r.sort(v||Jv)}function _(){for(let g=e,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:c,push:f,unshift:d,finish:_,sort:p}}function LR(){let o=new WeakMap;function e(a,r){const c=o.get(a);let u;return c===void 0?(u=new $v,o.set(a,[u])):r>=c.length?(u=new $v,c.push(u)):u=c[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function UR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new at};break;case"SpotLight":n={position:new X,direction:new X,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new X,halfWidth:new X,halfHeight:new X};break}return o[e.id]=n,n}}}function OR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let PR=0;function IR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function zR(o){const e=new UR,n=OR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new X);const r=new X,c=new ft,u=new ft;function f(p){let _=0,g=0,v=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let y=0,b=0,E=0,M=0,x=0,O=0,L=0,C=0,V=0,H=0,P=0;p.sort(IR);for(let N=0,R=p.length;N<R;N++){const F=p[N],he=F.color,oe=F.intensity,xe=F.distance,ye=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=he.r*oe,g+=he.g*oe,v+=he.b*oe;else if(F.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(F.sh.coefficients[I],oe);P++}else if(F.isDirectionalLight){const I=e.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const J=F.shadow,Z=n.get(F);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,a.directionalShadow[y]=Z,a.directionalShadowMap[y]=ye,a.directionalShadowMatrix[y]=F.shadow.matrix,O++}a.directional[y]=I,y++}else if(F.isSpotLight){const I=e.get(F);I.position.setFromMatrixPosition(F.matrixWorld),I.color.copy(he).multiplyScalar(oe),I.distance=xe,I.coneCos=Math.cos(F.angle),I.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),I.decay=F.decay,a.spot[E]=I;const J=F.shadow;if(F.map&&(a.spotLightMap[V]=F.map,V++,J.updateMatrices(F),F.castShadow&&H++),a.spotLightMatrix[E]=J.matrix,F.castShadow){const Z=n.get(F);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,a.spotShadow[E]=Z,a.spotShadowMap[E]=ye,C++}E++}else if(F.isRectAreaLight){const I=e.get(F);I.color.copy(he).multiplyScalar(oe),I.halfWidth.set(F.width*.5,0,0),I.halfHeight.set(0,F.height*.5,0),a.rectArea[M]=I,M++}else if(F.isPointLight){const I=e.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity),I.distance=F.distance,I.decay=F.decay,F.castShadow){const J=F.shadow,Z=n.get(F);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,a.pointShadow[b]=Z,a.pointShadowMap[b]=ye,a.pointShadowMatrix[b]=F.shadow.matrix,L++}a.point[b]=I,b++}else if(F.isHemisphereLight){const I=e.get(F);I.skyColor.copy(F.color).multiplyScalar(oe),I.groundColor.copy(F.groundColor).multiplyScalar(oe),a.hemi[x]=I,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ue.LTC_FLOAT_1,a.rectAreaLTC2=Ue.LTC_FLOAT_2):(a.rectAreaLTC1=Ue.LTC_HALF_1,a.rectAreaLTC2=Ue.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const q=a.hash;(q.directionalLength!==y||q.pointLength!==b||q.spotLength!==E||q.rectAreaLength!==M||q.hemiLength!==x||q.numDirectionalShadows!==O||q.numPointShadows!==L||q.numSpotShadows!==C||q.numSpotMaps!==V||q.numLightProbes!==P)&&(a.directional.length=y,a.spot.length=E,a.rectArea.length=M,a.point.length=b,a.hemi.length=x,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=C+V-H,a.spotLightMap.length=V,a.numSpotLightShadowsWithMaps=H,a.numLightProbes=P,q.directionalLength=y,q.pointLength=b,q.spotLength=E,q.rectAreaLength=M,q.hemiLength=x,q.numDirectionalShadows=O,q.numPointShadows=L,q.numSpotShadows=C,q.numSpotMaps=V,q.numLightProbes=P,a.version=PR++)}function d(p,_){let g=0,v=0,y=0,b=0,E=0;const M=_.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const L=p[x];if(L.isDirectionalLight){const C=a.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(M),g++}else if(L.isSpotLight){const C=a.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const C=a.rectArea[b];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(M),u.identity(),c.copy(L.matrixWorld),c.premultiply(M),u.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),b++}else if(L.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(M),v++}else if(L.isHemisphereLight){const C=a.hemi[E];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(M),E++}}}return{setup:f,setupView:d,state:a}}function ex(o){const e=new zR(o),n=[],a=[];function r(_){p.camera=_,n.length=0,a.length=0}function c(_){n.push(_)}function u(_){a.push(_)}function f(){e.setup(n)}function d(_){e.setupView(n,_)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:f,setupLightsView:d,pushLight:c,pushShadow:u}}function BR(o){let e=new WeakMap;function n(r,c=0){const u=e.get(r);let f;return u===void 0?(f=new ex(o),e.set(r,[f])):c>=u.length?(f=new ex(o),u.push(f)):f=u[c],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const FR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kR(o,e,n){let a=new Ip;const r=new nt,c=new nt,u=new Pt,f=new IE({depthPacking:Tb}),d=new zE,p={},_=n.maxTextureSize,g={[wa]:ni,[ni]:wa,[Wi]:Wi},v=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:FR,fragmentShader:HR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new Zi;b.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ln(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mx;let x=this.type;this.render=function(H,P,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const N=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),he=o.state;he.setBlending(us),he.buffers.color.setClear(1,1,1,1),he.buffers.depth.setTest(!0),he.setScissorTest(!1);const oe=x!==Sa&&this.type===Sa,xe=x===Sa&&this.type!==Sa;for(let ye=0,I=H.length;ye<I;ye++){const J=H[ye],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const re=Z.getFrameExtents();if(r.multiply(re),c.copy(Z.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(c.x=Math.floor(_/re.x),r.x=c.x*re.x,Z.mapSize.x=c.x),r.y>_&&(c.y=Math.floor(_/re.y),r.y=c.y*re.y,Z.mapSize.y=c.y)),Z.map===null||oe===!0||xe===!0){const D=this.type!==Sa?{minFilter:jn,magFilter:jn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ws(r.x,r.y,D),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const ve=Z.getViewportCount();for(let D=0;D<ve;D++){const $=Z.getViewport(D);u.set(c.x*$.x,c.y*$.y,c.x*$.z,c.y*$.w),he.viewport(u),Z.updateMatrices(J,D),a=Z.getFrustum(),C(P,q,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Sa&&O(Z,q),Z.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(N,R,F)};function O(H,P){const q=e.update(E);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ws(r.x,r.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,q,v,E,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,q,y,E,null)}function L(H,P,q,N){let R=null;const F=q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)R=F;else if(R=q.isPointLight===!0?d:f,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const he=R.uuid,oe=P.uuid;let xe=p[he];xe===void 0&&(xe={},p[he]=xe);let ye=xe[oe];ye===void 0&&(ye=R.clone(),xe[oe]=ye,P.addEventListener("dispose",V)),R=ye}if(R.visible=P.visible,R.wireframe=P.wireframe,N===Sa?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:g[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const he=o.properties.get(R);he.light=q}return R}function C(H,P,q,N,R){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===Sa)&&(!H.frustumCulled||a.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,H.matrixWorld);const oe=e.update(H),xe=H.material;if(Array.isArray(xe)){const ye=oe.groups;for(let I=0,J=ye.length;I<J;I++){const Z=ye[I],re=xe[Z.materialIndex];if(re&&re.visible){const ve=L(H,re,N,R);H.onBeforeShadow(o,H,P,q,oe,ve,Z),o.renderBufferDirect(q,null,oe,ve,H,Z),H.onAfterShadow(o,H,P,q,oe,ve,Z)}}}else if(xe.visible){const ye=L(H,xe,N,R);H.onBeforeShadow(o,H,P,q,oe,ye,null),o.renderBufferDirect(q,null,oe,ye,H,null),H.onAfterShadow(o,H,P,q,oe,ye,null)}}const he=H.children;for(let oe=0,xe=he.length;oe<xe;oe++)C(he[oe],P,q,N,R)}function V(H){H.target.removeEventListener("dispose",V);for(const q in p){const N=p[q],R=H.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}const GR={[Ud]:Od,[Pd]:Bd,[Id]:Fd,[Yr]:zd,[Od]:Ud,[Bd]:Pd,[Fd]:Id,[zd]:Yr};function VR(o,e){function n(){let Y=!1;const De=new Pt;let de=null;const be=new Pt(0,0,0,0);return{setMask:function(Re){de!==Re&&!Y&&(o.colorMask(Re,Re,Re,Re),de=Re)},setLocked:function(Re){Y=Re},setClear:function(Re,Ne,et,Jt,dn){dn===!0&&(Re*=Jt,Ne*=Jt,et*=Jt),De.set(Re,Ne,et,Jt),be.equals(De)===!1&&(o.clearColor(Re,Ne,et,Jt),be.copy(De))},reset:function(){Y=!1,de=null,be.set(-1,0,0,0)}}}function a(){let Y=!1,De=!1,de=null,be=null,Re=null;return{setReversed:function(Ne){if(De!==Ne){const et=e.get("EXT_clip_control");Ne?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),De=Ne;const Jt=Re;Re=null,this.setClear(Jt)}},getReversed:function(){return De},setTest:function(Ne){Ne?fe(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(Ne){de!==Ne&&!Y&&(o.depthMask(Ne),de=Ne)},setFunc:function(Ne){if(De&&(Ne=GR[Ne]),be!==Ne){switch(Ne){case Ud:o.depthFunc(o.NEVER);break;case Od:o.depthFunc(o.ALWAYS);break;case Pd:o.depthFunc(o.LESS);break;case Yr:o.depthFunc(o.LEQUAL);break;case Id:o.depthFunc(o.EQUAL);break;case zd:o.depthFunc(o.GEQUAL);break;case Bd:o.depthFunc(o.GREATER);break;case Fd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}be=Ne}},setLocked:function(Ne){Y=Ne},setClear:function(Ne){Re!==Ne&&(De&&(Ne=1-Ne),o.clearDepth(Ne),Re=Ne)},reset:function(){Y=!1,de=null,be=null,Re=null,De=!1}}}function r(){let Y=!1,De=null,de=null,be=null,Re=null,Ne=null,et=null,Jt=null,dn=null;return{setTest:function(Dt){Y||(Dt?fe(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(Dt){De!==Dt&&!Y&&(o.stencilMask(Dt),De=Dt)},setFunc:function(Dt,Tn,Ti){(de!==Dt||be!==Tn||Re!==Ti)&&(o.stencilFunc(Dt,Tn,Ti),de=Dt,be=Tn,Re=Ti)},setOp:function(Dt,Tn,Ti){(Ne!==Dt||et!==Tn||Jt!==Ti)&&(o.stencilOp(Dt,Tn,Ti),Ne=Dt,et=Tn,Jt=Ti)},setLocked:function(Dt){Y=Dt},setClear:function(Dt){dn!==Dt&&(o.clearStencil(Dt),dn=Dt)},reset:function(){Y=!1,De=null,de=null,be=null,Re=null,Ne=null,et=null,Jt=null,dn=null}}}const c=new n,u=new a,f=new r,d=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,y=[],b=null,E=!1,M=null,x=null,O=null,L=null,C=null,V=null,H=null,P=new at(0,0,0),q=0,N=!1,R=null,F=null,he=null,oe=null,xe=null;const ye=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,J=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Z)[1]),I=J>=1):Z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),I=J>=2);let re=null,ve={};const D=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),me=new Pt().fromArray(D),j=new Pt().fromArray($);function le(Y,De,de,be){const Re=new Uint8Array(4),Ne=o.createTexture();o.bindTexture(Y,Ne),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let et=0;et<de;et++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,be,0,o.RGBA,o.UNSIGNED_BYTE,Re):o.texImage2D(De+et,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Re);return Ne}const ce={};ce[o.TEXTURE_2D]=le(o.TEXTURE_2D,o.TEXTURE_2D,1),ce[o.TEXTURE_CUBE_MAP]=le(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[o.TEXTURE_2D_ARRAY]=le(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ce[o.TEXTURE_3D]=le(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),fe(o.DEPTH_TEST),u.setFunc(Yr),pt(!1),mt(I_),fe(o.CULL_FACE),B(us);function fe(Y){_[Y]!==!0&&(o.enable(Y),_[Y]=!0)}function we(Y){_[Y]!==!1&&(o.disable(Y),_[Y]=!1)}function ze(Y,De){return g[Y]!==De?(o.bindFramebuffer(Y,De),g[Y]=De,Y===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=De),Y===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=De),!0):!1}function Be(Y,De){let de=y,be=!1;if(Y){de=v.get(De),de===void 0&&(de=[],v.set(De,de));const Re=Y.textures;if(de.length!==Re.length||de[0]!==o.COLOR_ATTACHMENT0){for(let Ne=0,et=Re.length;Ne<et;Ne++)de[Ne]=o.COLOR_ATTACHMENT0+Ne;de.length=Re.length,be=!0}}else de[0]!==o.BACK&&(de[0]=o.BACK,be=!0);be&&o.drawBuffers(de)}function At(Y){return b!==Y?(o.useProgram(Y),b=Y,!0):!1}const wt={[Hs]:o.FUNC_ADD,[ZM]:o.FUNC_SUBTRACT,[QM]:o.FUNC_REVERSE_SUBTRACT};wt[JM]=o.MIN,wt[$M]=o.MAX;const lt={[eb]:o.ZERO,[tb]:o.ONE,[nb]:o.SRC_COLOR,[Nd]:o.SRC_ALPHA,[lb]:o.SRC_ALPHA_SATURATE,[rb]:o.DST_COLOR,[ab]:o.DST_ALPHA,[ib]:o.ONE_MINUS_SRC_COLOR,[Ld]:o.ONE_MINUS_SRC_ALPHA,[ob]:o.ONE_MINUS_DST_COLOR,[sb]:o.ONE_MINUS_DST_ALPHA,[cb]:o.CONSTANT_COLOR,[ub]:o.ONE_MINUS_CONSTANT_COLOR,[fb]:o.CONSTANT_ALPHA,[hb]:o.ONE_MINUS_CONSTANT_ALPHA};function B(Y,De,de,be,Re,Ne,et,Jt,dn,Dt){if(Y===us){E===!0&&(we(o.BLEND),E=!1);return}if(E===!1&&(fe(o.BLEND),E=!0),Y!==KM){if(Y!==M||Dt!==N){if((x!==Hs||C!==Hs)&&(o.blendEquation(o.FUNC_ADD),x=Hs,C=Hs),Dt)switch(Y){case Xr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case z_:o.blendFunc(o.ONE,o.ONE);break;case B_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case F_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Xr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case z_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case B_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case F_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}O=null,L=null,V=null,H=null,P.set(0,0,0),q=0,M=Y,N=Dt}return}Re=Re||De,Ne=Ne||de,et=et||be,(De!==x||Re!==C)&&(o.blendEquationSeparate(wt[De],wt[Re]),x=De,C=Re),(de!==O||be!==L||Ne!==V||et!==H)&&(o.blendFuncSeparate(lt[de],lt[be],lt[Ne],lt[et]),O=de,L=be,V=Ne,H=et),(Jt.equals(P)===!1||dn!==q)&&(o.blendColor(Jt.r,Jt.g,Jt.b,dn),P.copy(Jt),q=dn),M=Y,N=!1}function xn(Y,De){Y.side===Wi?we(o.CULL_FACE):fe(o.CULL_FACE);let de=Y.side===ni;De&&(de=!de),pt(de),Y.blending===Xr&&Y.transparent===!1?B(us):B(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const be=Y.stencilWrite;f.setTest(be),be&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),It(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?fe(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function pt(Y){R!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),R=Y)}function mt(Y){Y!==WM?(fe(o.CULL_FACE),Y!==F&&(Y===I_?o.cullFace(o.BACK):Y===qM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),F=Y}function Xe(Y){Y!==he&&(I&&o.lineWidth(Y),he=Y)}function It(Y,De,de){Y?(fe(o.POLYGON_OFFSET_FILL),(oe!==De||xe!==de)&&(o.polygonOffset(De,de),oe=De,xe=de)):we(o.POLYGON_OFFSET_FILL)}function We(Y){Y?fe(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function U(Y){Y===void 0&&(Y=o.TEXTURE0+ye-1),re!==Y&&(o.activeTexture(Y),re=Y)}function A(Y,De,de){de===void 0&&(re===null?de=o.TEXTURE0+ye-1:de=re);let be=ve[de];be===void 0&&(be={type:void 0,texture:void 0},ve[de]=be),(be.type!==Y||be.texture!==De)&&(re!==de&&(o.activeTexture(de),re=de),o.bindTexture(Y,De||ce[Y]),be.type=Y,be.texture=De)}function ie(){const Y=ve[re];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ge(){try{o.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ee(){try{o.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{o.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ve(){try{o.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ce(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Fe(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function yt(){try{o.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ae(){try{o.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{o.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ze(){try{o.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function je(Y){me.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),me.copy(Y))}function Pe(Y){j.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),j.copy(Y))}function $e(Y,De){let de=p.get(De);de===void 0&&(de=new WeakMap,p.set(De,de));let be=de.get(Y);be===void 0&&(be=o.getUniformBlockIndex(De,Y.name),de.set(Y,be))}function rt(Y,De){const be=p.get(De).get(Y);d.get(De)!==be&&(o.uniformBlockBinding(De,be,Y.__bindingPointIndex),d.set(De,be))}function kt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},re=null,ve={},g={},v=new WeakMap,y=[],b=null,E=!1,M=null,x=null,O=null,L=null,C=null,V=null,H=null,P=new at(0,0,0),q=0,N=!1,R=null,F=null,he=null,oe=null,xe=null,me.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:fe,disable:we,bindFramebuffer:ze,drawBuffers:Be,useProgram:At,setBlending:B,setMaterial:xn,setFlipSided:pt,setCullFace:mt,setLineWidth:Xe,setPolygonOffset:It,setScissorTest:We,activeTexture:U,bindTexture:A,unbindTexture:ie,compressedTexImage2D:ge,compressedTexImage3D:Ee,texImage2D:He,texImage3D:Ze,updateUBOMapping:$e,uniformBlockBinding:rt,texStorage2D:yt,texStorage3D:Ae,texSubImage2D:Se,texSubImage3D:Ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:je,viewport:Pe,reset:kt}}function jR(o,e,n,a,r,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new nt,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,A){return y?new OffscreenCanvas(U,A):Al("canvas")}function E(U,A,ie){let ge=1;const Ee=We(U);if((Ee.width>ie||Ee.height>ie)&&(ge=ie/Math.max(Ee.width,Ee.height)),ge<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Se=Math.floor(ge*Ee.width),Ve=Math.floor(ge*Ee.height);g===void 0&&(g=b(Se,Ve));const Ce=A?b(Se,Ve):g;return Ce.width=Se,Ce.height=Ve,Ce.getContext("2d").drawImage(U,0,0,Se,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+Se+"x"+Ve+")."),Ce}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),U;return U}function M(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,A,ie,ge,Ee=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Se=A;if(A===o.RED&&(ie===o.FLOAT&&(Se=o.R32F),ie===o.HALF_FLOAT&&(Se=o.R16F),ie===o.UNSIGNED_BYTE&&(Se=o.R8)),A===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(Se=o.R8UI),ie===o.UNSIGNED_SHORT&&(Se=o.R16UI),ie===o.UNSIGNED_INT&&(Se=o.R32UI),ie===o.BYTE&&(Se=o.R8I),ie===o.SHORT&&(Se=o.R16I),ie===o.INT&&(Se=o.R32I)),A===o.RG&&(ie===o.FLOAT&&(Se=o.RG32F),ie===o.HALF_FLOAT&&(Se=o.RG16F),ie===o.UNSIGNED_BYTE&&(Se=o.RG8)),A===o.RG_INTEGER&&(ie===o.UNSIGNED_BYTE&&(Se=o.RG8UI),ie===o.UNSIGNED_SHORT&&(Se=o.RG16UI),ie===o.UNSIGNED_INT&&(Se=o.RG32UI),ie===o.BYTE&&(Se=o.RG8I),ie===o.SHORT&&(Se=o.RG16I),ie===o.INT&&(Se=o.RG32I)),A===o.RGB_INTEGER&&(ie===o.UNSIGNED_BYTE&&(Se=o.RGB8UI),ie===o.UNSIGNED_SHORT&&(Se=o.RGB16UI),ie===o.UNSIGNED_INT&&(Se=o.RGB32UI),ie===o.BYTE&&(Se=o.RGB8I),ie===o.SHORT&&(Se=o.RGB16I),ie===o.INT&&(Se=o.RGB32I)),A===o.RGBA_INTEGER&&(ie===o.UNSIGNED_BYTE&&(Se=o.RGBA8UI),ie===o.UNSIGNED_SHORT&&(Se=o.RGBA16UI),ie===o.UNSIGNED_INT&&(Se=o.RGBA32UI),ie===o.BYTE&&(Se=o.RGBA8I),ie===o.SHORT&&(Se=o.RGBA16I),ie===o.INT&&(Se=o.RGBA32I)),A===o.RGB&&ie===o.UNSIGNED_INT_5_9_9_9_REV&&(Se=o.RGB9_E5),A===o.RGBA){const Ve=Ee?Tu:Ct.getTransfer(ge);ie===o.FLOAT&&(Se=o.RGBA32F),ie===o.HALF_FLOAT&&(Se=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(Se=Ve===Wt?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT_4_4_4_4&&(Se=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(Se=o.RGB5_A1)}return(Se===o.R16F||Se===o.R32F||Se===o.RG16F||Se===o.RG32F||Se===o.RGBA16F||Se===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function C(U,A){let ie;return U?A===null||A===Xs||A===Sl?ie=o.DEPTH24_STENCIL8:A===Ii?ie=o.DEPTH32F_STENCIL8:A===yl&&(ie=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Xs||A===Sl?ie=o.DEPTH_COMPONENT24:A===Ii?ie=o.DEPTH_COMPONENT32F:A===yl&&(ie=o.DEPTH_COMPONENT16),ie}function V(U,A){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==jn&&U.minFilter!==hi?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function H(U){const A=U.target;A.removeEventListener("dispose",H),q(A),A.isVideoTexture&&_.delete(A)}function P(U){const A=U.target;A.removeEventListener("dispose",P),R(A)}function q(U){const A=a.get(U);if(A.__webglInit===void 0)return;const ie=U.source,ge=v.get(ie);if(ge){const Ee=ge[A.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&N(U),Object.keys(ge).length===0&&v.delete(ie)}a.remove(U)}function N(U){const A=a.get(U);o.deleteTexture(A.__webglTexture);const ie=U.source,ge=v.get(ie);delete ge[A.__cacheKey],u.memory.textures--}function R(U){const A=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let Ee=0;Ee<A.__webglFramebuffer[ge].length;Ee++)o.deleteFramebuffer(A.__webglFramebuffer[ge][Ee]);else o.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)o.deleteFramebuffer(A.__webglFramebuffer[ge]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ie=U.textures;for(let ge=0,Ee=ie.length;ge<Ee;ge++){const Se=a.get(ie[ge]);Se.__webglTexture&&(o.deleteTexture(Se.__webglTexture),u.memory.textures--),a.remove(ie[ge])}a.remove(U)}let F=0;function he(){F=0}function oe(){const U=F;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),F+=1,U}function xe(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function ye(U,A){const ie=a.get(U);if(U.isVideoTexture&&Xe(U),U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){const ge=U.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(ie,U,A);return}}n.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+A)}function I(U,A){const ie=a.get(U);if(U.version>0&&ie.__version!==U.version){j(ie,U,A);return}n.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+A)}function J(U,A){const ie=a.get(U);if(U.version>0&&ie.__version!==U.version){j(ie,U,A);return}n.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+A)}function Z(U,A){const ie=a.get(U);if(U.version>0&&ie.__version!==U.version){le(ie,U,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+A)}const re={[Qr]:o.REPEAT,[ls]:o.CLAMP_TO_EDGE,[Eu]:o.MIRRORED_REPEAT},ve={[jn]:o.NEAREST,[xx]:o.NEAREST_MIPMAP_NEAREST,[ml]:o.NEAREST_MIPMAP_LINEAR,[hi]:o.LINEAR,[gu]:o.LINEAR_MIPMAP_NEAREST,[ba]:o.LINEAR_MIPMAP_LINEAR},D={[wb]:o.NEVER,[Ub]:o.ALWAYS,[Rb]:o.LESS,[Nx]:o.LEQUAL,[Cb]:o.EQUAL,[Lb]:o.GEQUAL,[Db]:o.GREATER,[Nb]:o.NOTEQUAL};function $(U,A){if(A.type===Ii&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===hi||A.magFilter===gu||A.magFilter===ml||A.magFilter===ba||A.minFilter===hi||A.minFilter===gu||A.minFilter===ml||A.minFilter===ba)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,re[A.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,re[A.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,re[A.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,ve[A.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,ve[A.minFilter]),A.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,D[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===jn||A.minFilter!==ml&&A.minFilter!==ba||A.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function me(U,A){let ie=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",H));const ge=A.source;let Ee=v.get(ge);Ee===void 0&&(Ee={},v.set(ge,Ee));const Se=xe(A);if(Se!==U.__cacheKey){Ee[Se]===void 0&&(Ee[Se]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),Ee[Se].usedTimes++;const Ve=Ee[U.__cacheKey];Ve!==void 0&&(Ee[U.__cacheKey].usedTimes--,Ve.usedTimes===0&&N(A)),U.__cacheKey=Se,U.__webglTexture=Ee[Se].texture}return ie}function j(U,A,ie){let ge=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=o.TEXTURE_3D);const Ee=me(U,A),Se=A.source;n.bindTexture(ge,U.__webglTexture,o.TEXTURE0+ie);const Ve=a.get(Se);if(Se.version!==Ve.__version||Ee===!0){n.activeTexture(o.TEXTURE0+ie);const Ce=Ct.getPrimaries(Ct.workingColorSpace),Fe=A.colorSpace===os?null:Ct.getPrimaries(A.colorSpace),yt=A.colorSpace===os||Ce===Fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Ae=E(A.image,!1,r.maxTextureSize);Ae=It(A,Ae);const He=c.convert(A.format,A.colorSpace),Ze=c.convert(A.type);let je=L(A.internalFormat,He,Ze,A.colorSpace,A.isVideoTexture);$(ge,A);let Pe;const $e=A.mipmaps,rt=A.isVideoTexture!==!0,kt=Ve.__version===void 0||Ee===!0,Y=Se.dataReady,De=V(A,Ae);if(A.isDepthTexture)je=C(A.format===bl,A.type),kt&&(rt?n.texStorage2D(o.TEXTURE_2D,1,je,Ae.width,Ae.height):n.texImage2D(o.TEXTURE_2D,0,je,Ae.width,Ae.height,0,He,Ze,null));else if(A.isDataTexture)if($e.length>0){rt&&kt&&n.texStorage2D(o.TEXTURE_2D,De,je,$e[0].width,$e[0].height);for(let de=0,be=$e.length;de<be;de++)Pe=$e[de],rt?Y&&n.texSubImage2D(o.TEXTURE_2D,de,0,0,Pe.width,Pe.height,He,Ze,Pe.data):n.texImage2D(o.TEXTURE_2D,de,je,Pe.width,Pe.height,0,He,Ze,Pe.data);A.generateMipmaps=!1}else rt?(kt&&n.texStorage2D(o.TEXTURE_2D,De,je,Ae.width,Ae.height),Y&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae.width,Ae.height,He,Ze,Ae.data)):n.texImage2D(o.TEXTURE_2D,0,je,Ae.width,Ae.height,0,He,Ze,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){rt&&kt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,De,je,$e[0].width,$e[0].height,Ae.depth);for(let de=0,be=$e.length;de<be;de++)if(Pe=$e[de],A.format!==Ei)if(He!==null)if(rt){if(Y)if(A.layerUpdates.size>0){const Re=Dv(Pe.width,Pe.height,A.format,A.type);for(const Ne of A.layerUpdates){const et=Pe.data.subarray(Ne*Re/Pe.data.BYTES_PER_ELEMENT,(Ne+1)*Re/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,Ne,Pe.width,Pe.height,1,He,et)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,0,Pe.width,Pe.height,Ae.depth,He,Pe.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,de,je,Pe.width,Pe.height,Ae.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Y&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,0,Pe.width,Pe.height,Ae.depth,He,Ze,Pe.data):n.texImage3D(o.TEXTURE_2D_ARRAY,de,je,Pe.width,Pe.height,Ae.depth,0,He,Ze,Pe.data)}else{rt&&kt&&n.texStorage2D(o.TEXTURE_2D,De,je,$e[0].width,$e[0].height);for(let de=0,be=$e.length;de<be;de++)Pe=$e[de],A.format!==Ei?He!==null?rt?Y&&n.compressedTexSubImage2D(o.TEXTURE_2D,de,0,0,Pe.width,Pe.height,He,Pe.data):n.compressedTexImage2D(o.TEXTURE_2D,de,je,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Y&&n.texSubImage2D(o.TEXTURE_2D,de,0,0,Pe.width,Pe.height,He,Ze,Pe.data):n.texImage2D(o.TEXTURE_2D,de,je,Pe.width,Pe.height,0,He,Ze,Pe.data)}else if(A.isDataArrayTexture)if(rt){if(kt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,De,je,Ae.width,Ae.height,Ae.depth),Y)if(A.layerUpdates.size>0){const de=Dv(Ae.width,Ae.height,A.format,A.type);for(const be of A.layerUpdates){const Re=Ae.data.subarray(be*de/Ae.data.BYTES_PER_ELEMENT,(be+1)*de/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,be,Ae.width,Ae.height,1,He,Ze,Re)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,Ze,Ae.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,je,Ae.width,Ae.height,Ae.depth,0,He,Ze,Ae.data);else if(A.isData3DTexture)rt?(kt&&n.texStorage3D(o.TEXTURE_3D,De,je,Ae.width,Ae.height,Ae.depth),Y&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,Ze,Ae.data)):n.texImage3D(o.TEXTURE_3D,0,je,Ae.width,Ae.height,Ae.depth,0,He,Ze,Ae.data);else if(A.isFramebufferTexture){if(kt)if(rt)n.texStorage2D(o.TEXTURE_2D,De,je,Ae.width,Ae.height);else{let de=Ae.width,be=Ae.height;for(let Re=0;Re<De;Re++)n.texImage2D(o.TEXTURE_2D,Re,je,de,be,0,He,Ze,null),de>>=1,be>>=1}}else if($e.length>0){if(rt&&kt){const de=We($e[0]);n.texStorage2D(o.TEXTURE_2D,De,je,de.width,de.height)}for(let de=0,be=$e.length;de<be;de++)Pe=$e[de],rt?Y&&n.texSubImage2D(o.TEXTURE_2D,de,0,0,He,Ze,Pe):n.texImage2D(o.TEXTURE_2D,de,je,He,Ze,Pe);A.generateMipmaps=!1}else if(rt){if(kt){const de=We(Ae);n.texStorage2D(o.TEXTURE_2D,De,je,de.width,de.height)}Y&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,He,Ze,Ae)}else n.texImage2D(o.TEXTURE_2D,0,je,He,Ze,Ae);M(A)&&x(ge),Ve.__version=Se.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function le(U,A,ie){if(A.image.length!==6)return;const ge=me(U,A),Ee=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+ie);const Se=a.get(Ee);if(Ee.version!==Se.__version||ge===!0){n.activeTexture(o.TEXTURE0+ie);const Ve=Ct.getPrimaries(Ct.workingColorSpace),Ce=A.colorSpace===os?null:Ct.getPrimaries(A.colorSpace),Fe=A.colorSpace===os||Ve===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const yt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,He=[];for(let be=0;be<6;be++)!yt&&!Ae?He[be]=E(A.image[be],!0,r.maxCubemapSize):He[be]=Ae?A.image[be].image:A.image[be],He[be]=It(A,He[be]);const Ze=He[0],je=c.convert(A.format,A.colorSpace),Pe=c.convert(A.type),$e=L(A.internalFormat,je,Pe,A.colorSpace),rt=A.isVideoTexture!==!0,kt=Se.__version===void 0||ge===!0,Y=Ee.dataReady;let De=V(A,Ze);$(o.TEXTURE_CUBE_MAP,A);let de;if(yt){rt&&kt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,De,$e,Ze.width,Ze.height);for(let be=0;be<6;be++){de=He[be].mipmaps;for(let Re=0;Re<de.length;Re++){const Ne=de[Re];A.format!==Ei?je!==null?rt?Y&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re,0,0,Ne.width,Ne.height,je,Ne.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re,$e,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?Y&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re,0,0,Ne.width,Ne.height,je,Pe,Ne.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re,$e,Ne.width,Ne.height,0,je,Pe,Ne.data)}}}else{if(de=A.mipmaps,rt&&kt){de.length>0&&De++;const be=We(He[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,De,$e,be.width,be.height)}for(let be=0;be<6;be++)if(Ae){rt?Y&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,He[be].width,He[be].height,je,Pe,He[be].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,$e,He[be].width,He[be].height,0,je,Pe,He[be].data);for(let Re=0;Re<de.length;Re++){const et=de[Re].image[be].image;rt?Y&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re+1,0,0,et.width,et.height,je,Pe,et.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re+1,$e,et.width,et.height,0,je,Pe,et.data)}}else{rt?Y&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,je,Pe,He[be]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,$e,je,Pe,He[be]);for(let Re=0;Re<de.length;Re++){const Ne=de[Re];rt?Y&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re+1,0,0,je,Pe,Ne.image[be]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re+1,$e,je,Pe,Ne.image[be])}}}M(A)&&x(o.TEXTURE_CUBE_MAP),Se.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ce(U,A,ie,ge,Ee,Se){const Ve=c.convert(ie.format,ie.colorSpace),Ce=c.convert(ie.type),Fe=L(ie.internalFormat,Ve,Ce,ie.colorSpace),yt=a.get(A),Ae=a.get(ie);if(Ae.__renderTarget=A,!yt.__hasExternalTextures){const He=Math.max(1,A.width>>Se),Ze=Math.max(1,A.height>>Se);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?n.texImage3D(Ee,Se,Fe,He,Ze,A.depth,0,Ve,Ce,null):n.texImage2D(Ee,Se,Fe,He,Ze,0,Ve,Ce,null)}n.bindFramebuffer(o.FRAMEBUFFER,U),mt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,Ee,Ae.__webglTexture,0,pt(A)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,Ee,Ae.__webglTexture,Se),n.bindFramebuffer(o.FRAMEBUFFER,null)}function fe(U,A,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,U),A.depthBuffer){const ge=A.depthTexture,Ee=ge&&ge.isDepthTexture?ge.type:null,Se=C(A.stencilBuffer,Ee),Ve=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=pt(A);mt(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ce,Se,A.width,A.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ce,Se,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Se,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,U)}else{const ge=A.textures;for(let Ee=0;Ee<ge.length;Ee++){const Se=ge[Ee],Ve=c.convert(Se.format,Se.colorSpace),Ce=c.convert(Se.type),Fe=L(Se.internalFormat,Ve,Ce,Se.colorSpace),yt=pt(A);ie&&mt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,yt,Fe,A.width,A.height):mt(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,yt,Fe,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function we(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=a.get(A.depthTexture);ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ye(A.depthTexture,0);const Ee=ge.__webglTexture,Se=pt(A);if(A.depthTexture.format===Ml)mt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0,Se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0);else if(A.depthTexture.format===bl)mt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0,Se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function ze(U){const A=a.get(U),ie=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const ge=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){const Ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",Ee)};ge.addEventListener("dispose",Ee),A.__depthDisposeCallback=Ee}A.__boundDepthTexture=ge}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");we(A.__webglFramebuffer,U)}else if(ie){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=o.createRenderbuffer(),fe(A.__webglDepthbuffer[ge],U,!1);else{const Ee=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Se=A.__webglDepthbuffer[ge];o.bindRenderbuffer(o.RENDERBUFFER,Se),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,Se)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),fe(A.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ee=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ee),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Ee)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Be(U,A,ie){const ge=a.get(U);A!==void 0&&ce(ge.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&ze(U)}function At(U){const A=U.texture,ie=a.get(U),ge=a.get(A);U.addEventListener("dispose",P);const Ee=U.textures,Se=U.isWebGLCubeRenderTarget===!0,Ve=Ee.length>1;if(Ve||(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=A.version,u.memory.textures++),Se){ie.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)ie.__webglFramebuffer[Ce][Fe]=o.createFramebuffer()}else ie.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)ie.__webglFramebuffer[Ce]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let Ce=0,Fe=Ee.length;Ce<Fe;Ce++){const yt=a.get(Ee[Ce]);yt.__webglTexture===void 0&&(yt.__webglTexture=o.createTexture(),u.memory.textures++)}if(U.samples>0&&mt(U)===!1){ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Ee.length;Ce++){const Fe=Ee[Ce];ie.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce]);const yt=c.convert(Fe.format,Fe.colorSpace),Ae=c.convert(Fe.type),He=L(Fe.internalFormat,yt,Ae,Fe.colorSpace,U.isXRRenderTarget===!0),Ze=pt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ze,He,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),fe(ie.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Se){n.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),$(o.TEXTURE_CUBE_MAP,A);for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)ce(ie.__webglFramebuffer[Ce][Fe],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else ce(ie.__webglFramebuffer[Ce],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);M(A)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ce=0,Fe=Ee.length;Ce<Fe;Ce++){const yt=Ee[Ce],Ae=a.get(yt);n.bindTexture(o.TEXTURE_2D,Ae.__webglTexture),$(o.TEXTURE_2D,yt),ce(ie.__webglFramebuffer,U,yt,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,0),M(yt)&&x(o.TEXTURE_2D)}n.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ce,ge.__webglTexture),$(Ce,A),A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)ce(ie.__webglFramebuffer[Fe],U,A,o.COLOR_ATTACHMENT0,Ce,Fe);else ce(ie.__webglFramebuffer,U,A,o.COLOR_ATTACHMENT0,Ce,0);M(A)&&x(Ce),n.unbindTexture()}U.depthBuffer&&ze(U)}function wt(U){const A=U.textures;for(let ie=0,ge=A.length;ie<ge;ie++){const Ee=A[ie];if(M(Ee)){const Se=O(U),Ve=a.get(Ee).__webglTexture;n.bindTexture(Se,Ve),x(Se),n.unbindTexture()}}}const lt=[],B=[];function xn(U){if(U.samples>0){if(mt(U)===!1){const A=U.textures,ie=U.width,ge=U.height;let Ee=o.COLOR_BUFFER_BIT;const Se=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=a.get(U),Ce=A.length>1;if(Ce)for(let Fe=0;Fe<A.length;Fe++)n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Fe]);const yt=a.get(A[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,ie,ge,0,0,ie,ge,Ee,o.NEAREST),d===!0&&(lt.length=0,B.length=0,lt.push(o.COLOR_ATTACHMENT0+Fe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(lt.push(Se),B.push(Se),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<A.length;Fe++){n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Fe]);const yt=a.get(A[Fe]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,yt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const A=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function pt(U){return Math.min(r.maxSamples,U.samples)}function mt(U){const A=a.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xe(U){const A=u.render.frame;_.get(U)!==A&&(_.set(U,A),U.update())}function It(U,A){const ie=U.colorSpace,ge=U.format,Ee=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ie!==Wn&&ie!==os&&(Ct.getTransfer(ie)===Wt?(ge!==Ei||Ee!==Ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),A}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=he,this.setTexture2D=ye,this.setTexture2DArray=I,this.setTexture3D=J,this.setTextureCube=Z,this.rebindTextures=Be,this.setupRenderTarget=At,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=mt}function XR(o,e){function n(a,r=os){let c;const u=Ct.getTransfer(r);if(a===Ra)return o.UNSIGNED_BYTE;if(a===Tp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Ap)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Mx)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===yx)return o.BYTE;if(a===Sx)return o.SHORT;if(a===yl)return o.UNSIGNED_SHORT;if(a===Ep)return o.INT;if(a===Xs)return o.UNSIGNED_INT;if(a===Ii)return o.FLOAT;if(a===wl)return o.HALF_FLOAT;if(a===bx)return o.ALPHA;if(a===Ex)return o.RGB;if(a===Ei)return o.RGBA;if(a===Tx)return o.LUMINANCE;if(a===Ax)return o.LUMINANCE_ALPHA;if(a===Ml)return o.DEPTH_COMPONENT;if(a===bl)return o.DEPTH_STENCIL;if(a===wp)return o.RED;if(a===Rp)return o.RED_INTEGER;if(a===wx)return o.RG;if(a===Cp)return o.RG_INTEGER;if(a===Dp)return o.RGBA_INTEGER;if(a===_u||a===vu||a===xu||a===yu)if(u===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===_u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===_u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===vu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===yu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Gd||a===Vd||a===jd||a===Xd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Wd||a===qd||a===Yd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Wd||a===qd)return u===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Yd)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Kd||a===Zd||a===Qd||a===Jd||a===$d||a===ep||a===tp||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Kd)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Zd)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Qd)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Jd)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===$d)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ep)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===tp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===np)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ip)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ap)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===sp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===rp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===op)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===lp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Su||a===cp||a===up)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Su)return u===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===cp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===up)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Rx||a===fp||a===hp||a===dp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Su)return c.COMPRESSED_RED_RGTC1_EXT;if(a===fp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===hp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Sl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const WR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,a){if(this.texture===null){const r=new En,c=e.properties.get(r);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new hs({vertexShader:WR,fragmentShader:qR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ln(new Du(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KR extends qs{constructor(e,n){super();const a=this;let r=null,c=1,u=null,f="local-floor",d=1,p=null,_=null,g=null,v=null,y=null,b=null;const E=new YR,M=n.getContextAttributes();let x=null,O=null;const L=[],C=[],V=new nt;let H=null;const P=new Gn;P.viewport=new Pt;const q=new Gn;q.viewport=new Pt;const N=[P,q],R=new sT;let F=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=L[j];return le===void 0&&(le=new dd,L[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=L[j];return le===void 0&&(le=new dd,L[j]=le),le.getGripSpace()},this.getHand=function(j){let le=L[j];return le===void 0&&(le=new dd,L[j]=le),le.getHandSpace()};function oe(j){const le=C.indexOf(j.inputSource);if(le===-1)return;const ce=L[le];ce!==void 0&&(ce.update(j.inputSource,j.frame,p||u),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function xe(){r.removeEventListener("select",oe),r.removeEventListener("selectstart",oe),r.removeEventListener("selectend",oe),r.removeEventListener("squeeze",oe),r.removeEventListener("squeezestart",oe),r.removeEventListener("squeezeend",oe),r.removeEventListener("end",xe),r.removeEventListener("inputsourceschange",ye);for(let j=0;j<L.length;j++){const le=C[j];le!==null&&(C[j]=null,L[j].disconnect(le))}F=null,he=null,E.reset(),e.setRenderTarget(x),y=null,v=null,g=null,r=null,O=null,me.stop(),a.isPresenting=!1,e.setPixelRatio(H),e.setSize(V.width,V.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",oe),r.addEventListener("selectstart",oe),r.addEventListener("selectend",oe),r.addEventListener("squeeze",oe),r.addEventListener("squeezestart",oe),r.addEventListener("squeezeend",oe),r.addEventListener("end",xe),r.addEventListener("inputsourceschange",ye),M.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,fe=null,we=null;M.depth&&(we=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=M.stencil?bl:Ml,fe=M.stencil?Sl:Xs);const ze={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:c};g=new XRWebGLBinding(r,n),v=g.createProjectionLayer(ze),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),O=new Ws(v.textureWidth,v.textureHeight,{format:Ei,type:Ra,depthTexture:new Xx(v.textureWidth,v.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ce={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Ws(y.framebufferWidth,y.framebufferHeight,{format:Ei,type:Ra,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(f),me.setContext(r),me.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ye(j){for(let le=0;le<j.removed.length;le++){const ce=j.removed[le],fe=C.indexOf(ce);fe>=0&&(C[fe]=null,L[fe].disconnect(ce))}for(let le=0;le<j.added.length;le++){const ce=j.added[le];let fe=C.indexOf(ce);if(fe===-1){for(let ze=0;ze<L.length;ze++)if(ze>=C.length){C.push(ce),fe=ze;break}else if(C[ze]===null){C[ze]=ce,fe=ze;break}if(fe===-1)break}const we=L[fe];we&&we.connect(ce)}}const I=new X,J=new X;function Z(j,le,ce){I.setFromMatrixPosition(le.matrixWorld),J.setFromMatrixPosition(ce.matrixWorld);const fe=I.distanceTo(J),we=le.projectionMatrix.elements,ze=ce.projectionMatrix.elements,Be=we[14]/(we[10]-1),At=we[14]/(we[10]+1),wt=(we[9]+1)/we[5],lt=(we[9]-1)/we[5],B=(we[8]-1)/we[0],xn=(ze[8]+1)/ze[0],pt=Be*B,mt=Be*xn,Xe=fe/(-B+xn),It=Xe*-B;if(le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(It),j.translateZ(Xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const We=Be+Xe,U=At+Xe,A=pt-It,ie=mt+(fe-It),ge=wt*At/U*We,Ee=lt*At/U*We;j.projectionMatrix.makePerspective(A,ie,ge,Ee,We,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function re(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let le=j.near,ce=j.far;E.texture!==null&&(E.depthNear>0&&(le=E.depthNear),E.depthFar>0&&(ce=E.depthFar)),R.near=q.near=P.near=le,R.far=q.far=P.far=ce,(F!==R.near||he!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,he=R.far),P.layers.mask=j.layers.mask|2,q.layers.mask=j.layers.mask|4,R.layers.mask=P.layers.mask|q.layers.mask;const fe=j.parent,we=R.cameras;re(R,fe);for(let ze=0;ze<we.length;ze++)re(we[ze],fe);we.length===2?Z(R,P,q):R.projectionMatrix.copy(P.projectionMatrix),ve(j,R,fe)};function ve(j,le,ce){ce===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Jr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(j){d=j,v!==null&&(v.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let D=null;function $(j,le){if(_=le.getViewerPose(p||u),b=le,_!==null){const ce=_.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let fe=!1;ce.length!==R.cameras.length&&(R.cameras.length=0,fe=!0);for(let Be=0;Be<ce.length;Be++){const At=ce[Be];let wt=null;if(y!==null)wt=y.getViewport(At);else{const B=g.getViewSubImage(v,At);wt=B.viewport,Be===0&&(e.setRenderTargetTextures(O,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(O))}let lt=N[Be];lt===void 0&&(lt=new Gn,lt.layers.enable(Be),lt.viewport=new Pt,N[Be]=lt),lt.matrix.fromArray(At.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(At.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(wt.x,wt.y,wt.width,wt.height),Be===0&&(R.matrix.copy(lt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),fe===!0&&R.cameras.push(lt)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){const Be=g.getDepthInformation(ce[0]);Be&&Be.isValid&&Be.texture&&E.init(e,Be,r.renderState)}}for(let ce=0;ce<L.length;ce++){const fe=C[ce],we=L[ce];fe!==null&&we!==void 0&&we.update(fe,le,p||u)}D&&D(j,le),le.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:le}),b=null}const me=new Kx;me.setAnimationLoop($),this.setAnimationLoop=function(j){D=j},this.dispose=function(){}}}const zs=new Ki,ZR=new ft;function QR(o,e){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,Bx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function r(M,x,O,L,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,C)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),E(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&f(M,x)):x.isPointsMaterial?d(M,x,O,L):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ni&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ni&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=e.get(x),L=O.envMap,C=O.envMapRotation;L&&(M.envMap.value=L,zs.copy(C),zs.x*=-1,zs.y*=-1,zs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),M.envMapRotation.value.setFromMatrix4(ZR.makeRotationFromEuler(zs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function f(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function d(M,x,O,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=L*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ni&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function E(M,x){const O=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function JR(o,e,n,a){let r={},c={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(O,L){const C=L.program;a.uniformBlockBinding(O,C)}function p(O,L){let C=r[O.id];C===void 0&&(b(O),C=_(O),r[O.id]=C,O.addEventListener("dispose",M));const V=L.program;a.updateUBOMapping(O,V);const H=e.render.frame;c[O.id]!==H&&(v(O),c[O.id]=H)}function _(O){const L=g();O.__bindingPointIndex=L;const C=o.createBuffer(),V=O.__size,H=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,V,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function g(){for(let O=0;O<f;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const L=r[O.id],C=O.uniforms,V=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let H=0,P=C.length;H<P;H++){const q=Array.isArray(C[H])?C[H]:[C[H]];for(let N=0,R=q.length;N<R;N++){const F=q[N];if(y(F,H,N,V)===!0){const he=F.__offset,oe=Array.isArray(F.value)?F.value:[F.value];let xe=0;for(let ye=0;ye<oe.length;ye++){const I=oe[ye],J=E(I);typeof I=="number"||typeof I=="boolean"?(F.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,he+xe,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=0,F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=0,F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=0):(I.toArray(F.__data,xe),xe+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,he,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(O,L,C,V){const H=O.value,P=L+"_"+C;if(V[P]===void 0)return typeof H=="number"||typeof H=="boolean"?V[P]=H:V[P]=H.clone(),!0;{const q=V[P];if(typeof H=="number"||typeof H=="boolean"){if(q!==H)return V[P]=H,!0}else if(q.equals(H)===!1)return q.copy(H),!0}return!1}function b(O){const L=O.uniforms;let C=0;const V=16;for(let P=0,q=L.length;P<q;P++){const N=Array.isArray(L[P])?L[P]:[L[P]];for(let R=0,F=N.length;R<F;R++){const he=N[R],oe=Array.isArray(he.value)?he.value:[he.value];for(let xe=0,ye=oe.length;xe<ye;xe++){const I=oe[xe],J=E(I),Z=C%V,re=Z%J.boundary,ve=Z+re;C+=re,ve!==0&&V-ve<J.storage&&(C+=V-ve),he.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=C,C+=J.storage}}}const H=C%V;return H>0&&(C+=V-H),O.__size=C,O.__cache={},this}function E(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function M(O){const L=O.target;L.removeEventListener("dispose",M);const C=u.indexOf(L.__bindingPointIndex);u.splice(C,1),o.deleteBuffer(r[L.id]),delete r[L.id],delete c[L.id]}function x(){for(const O in r)o.deleteBuffer(r[O]);u=[],r={},c={}}return{bind:d,update:p,dispose:x}}class $R{constructor(e={}){const{canvas:n=Zb(),context:a=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const b=new Uint32Array(4),E=new Int32Array(4);let M=null,x=null;const O=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let V=!1;this._outputColorSpace=bn;let H=0,P=0,q=null,N=-1,R=null;const F=new Pt,he=new Pt;let oe=null;const xe=new at(0);let ye=0,I=n.width,J=n.height,Z=1,re=null,ve=null;const D=new Pt(0,0,I,J),$=new Pt(0,0,I,J);let me=!1;const j=new Ip;let le=!1,ce=!1;const fe=new ft,we=new ft,ze=new X,Be=new Pt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function lt(){return q===null?Z:1}let B=a;function xn(w,K){return n.getContext(w,K)}try{const w={alpha:!0,depth:r,stencil:c,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bp}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",Re,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),B===null){const K="webgl2";if(B=xn(K,w),B===null)throw xn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let pt,mt,Xe,It,We,U,A,ie,ge,Ee,Se,Ve,Ce,Fe,yt,Ae,He,Ze,je,Pe,$e,rt,kt,Y;function De(){pt=new cw(B),pt.init(),rt=new XR(B,pt),mt=new nw(B,pt,e,rt),Xe=new VR(B,pt),mt.reverseDepthBuffer&&v&&Xe.buffers.depth.setReversed(!0),It=new hw(B),We=new DR,U=new jR(B,pt,Xe,We,mt,rt,It),A=new aw(C),ie=new lw(C),ge=new vT(B),kt=new ew(B,ge),Ee=new uw(B,ge,It,kt),Se=new pw(B,Ee,ge,It),je=new dw(B,mt,U),Ae=new iw(We),Ve=new CR(C,A,ie,pt,mt,kt,Ae),Ce=new QR(C,We),Fe=new LR,yt=new BR(pt),Ze=new $1(C,A,ie,Xe,Se,y,d),He=new kR(C,Se,mt),Y=new JR(B,It,mt,Xe),Pe=new tw(B,pt,It),$e=new fw(B,pt,It),It.programs=Ve.programs,C.capabilities=mt,C.extensions=pt,C.properties=We,C.renderLists=Fe,C.shadowMap=He,C.state=Xe,C.info=It}De();const de=new KR(C,B);this.xr=de,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(I,J,!1))},this.getSize=function(w){return w.set(I,J)},this.setSize=function(w,K,ae=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,J=K,n.width=Math.floor(w*Z),n.height=Math.floor(K*Z),ae===!0&&(n.style.width=w+"px",n.style.height=K+"px"),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(I*Z,J*Z).floor()},this.setDrawingBufferSize=function(w,K,ae){I=w,J=K,Z=ae,n.width=Math.floor(w*ae),n.height=Math.floor(K*ae),this.setViewport(0,0,w,K)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(D)},this.setViewport=function(w,K,ae,se){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,K,ae,se),Xe.viewport(F.copy(D).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy($)},this.setScissor=function(w,K,ae,se){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,K,ae,se),Xe.scissor(he.copy($).multiplyScalar(Z).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(w){Xe.setScissorTest(me=w)},this.setOpaqueSort=function(w){re=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,ae=!0){let se=0;if(w){let W=!1;if(q!==null){const Te=q.texture.format;W=Te===Dp||Te===Cp||Te===Rp}if(W){const Te=q.texture.type,Le=Te===Ra||Te===Xs||Te===yl||Te===Sl||Te===Tp||Te===Ap,Oe=Ze.getClearColor(),Ie=Ze.getClearAlpha(),tt=Oe.r,Je=Oe.g,qe=Oe.b;Le?(b[0]=tt,b[1]=Je,b[2]=qe,b[3]=Ie,B.clearBufferuiv(B.COLOR,0,b)):(E[0]=tt,E[1]=Je,E[2]=qe,E[3]=Ie,B.clearBufferiv(B.COLOR,0,E))}else se|=B.COLOR_BUFFER_BIT}K&&(se|=B.DEPTH_BUFFER_BIT),ae&&(se|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",Re,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Ze.dispose(),Fe.dispose(),yt.dispose(),We.dispose(),A.dispose(),ie.dispose(),Se.dispose(),kt.dispose(),Y.dispose(),Ve.dispose(),de.dispose(),de.removeEventListener("sessionstart",co),de.removeEventListener("sessionend",uo),Hi.stop()};function be(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const w=It.autoReset,K=He.enabled,ae=He.autoUpdate,se=He.needsUpdate,W=He.type;De(),It.autoReset=w,He.enabled=K,He.autoUpdate=ae,He.needsUpdate=se,He.type=W}function Ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function et(w){const K=w.target;K.removeEventListener("dispose",et),Jt(K)}function Jt(w){dn(w),We.remove(w)}function dn(w){const K=We.get(w).programs;K!==void 0&&(K.forEach(function(ae){Ve.releaseProgram(ae)}),w.isShaderMaterial&&Ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,ae,se,W,Te){K===null&&(K=At);const Le=W.isMesh&&W.matrixWorld.determinant()<0,Oe=ho(w,K,ae,se,W);Xe.setMaterial(se,Le);let Ie=ae.index,tt=1;if(se.wireframe===!0){if(Ie=Ee.getWireframeAttribute(ae),Ie===void 0)return;tt=2}const Je=ae.drawRange,qe=ae.attributes.position;let bt=Je.start*tt,Et=(Je.start+Je.count)*tt;Te!==null&&(bt=Math.max(bt,Te.start*tt),Et=Math.min(Et,(Te.start+Te.count)*tt)),Ie!==null?(bt=Math.max(bt,0),Et=Math.min(Et,Ie.count)):qe!=null&&(bt=Math.max(bt,0),Et=Math.min(Et,qe.count));const Kt=Et-bt;if(Kt<0||Kt===1/0)return;kt.setup(W,se,Oe,ae,Ie);let Nt,it=Pe;if(Ie!==null&&(Nt=ge.get(Ie),it=$e,it.setIndex(Nt)),W.isMesh)se.wireframe===!0?(Xe.setLineWidth(se.wireframeLinewidth*lt()),it.setMode(B.LINES)):it.setMode(B.TRIANGLES);else if(W.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),Xe.setLineWidth(Ke*lt()),W.isLineSegments?it.setMode(B.LINES):W.isLineLoop?it.setMode(B.LINE_LOOP):it.setMode(B.LINE_STRIP)}else W.isPoints?it.setMode(B.POINTS):W.isSprite&&it.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Mu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))it.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ke=W._multiDrawStarts,pn=W._multiDrawCounts,Rt=W._multiDrawCount,qn=Ie?ge.get(Ie).bytesPerElement:1,wi=We.get(se).currentProgram.getUniforms();for(let zn=0;zn<Rt;zn++)wi.setValue(B,"_gl_DrawID",zn),it.render(Ke[zn]/qn,pn[zn])}else if(W.isInstancedMesh)it.renderInstances(bt,Kt,W.count);else if(ae.isInstancedBufferGeometry){const Ke=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,pn=Math.min(ae.instanceCount,Ke);it.renderInstances(bt,Kt,pn)}else it.render(bt,Kt)};function Dt(w,K,ae){w.transparent===!0&&w.side===Wi&&w.forceSinglePass===!1?(w.side=ni,w.needsUpdate=!0,tn(w,K,ae),w.side=wa,w.needsUpdate=!0,tn(w,K,ae),w.side=Wi):tn(w,K,ae)}this.compile=function(w,K,ae=null){ae===null&&(ae=w),x=yt.get(ae),x.init(K),L.push(x),ae.traverseVisible(function(W){W.isLight&&W.layers.test(K.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),w!==ae&&w.traverseVisible(function(W){W.isLight&&W.layers.test(K.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights();const se=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Oe=Te[Le];Dt(Oe,ae,W),se.add(Oe)}else Dt(Te,ae,W),se.add(Te)}),x=L.pop(),se},this.compileAsync=function(w,K,ae=null){const se=this.compile(w,K,ae);return new Promise(W=>{function Te(){if(se.forEach(function(Le){We.get(Le).currentProgram.isReady()&&se.delete(Le)}),se.size===0){W(w);return}setTimeout(Te,10)}pt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Tn=null;function Ti(w){Tn&&Tn(w)}function co(){Hi.stop()}function uo(){Hi.start()}const Hi=new Kx;Hi.setAnimationLoop(Ti),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(w){Tn=w,de.setAnimationLoop(w),w===null?Hi.stop():Hi.start()},de.addEventListener("sessionstart",co),de.addEventListener("sessionend",uo),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(K),K=de.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,K,q),x=yt.get(w,L.length),x.init(K),L.push(x),we.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),j.setFromProjectionMatrix(we),ce=this.localClippingEnabled,le=Ae.init(this.clippingPlanes,ce),M=Fe.get(w,O.length),M.init(),O.push(M),de.enabled===!0&&de.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&ds(Te,K,-1/0,C.sortObjects)}ds(w,K,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(re,ve),wt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,wt&&Ze.addToRenderList(M,w),this.info.render.frame++,le===!0&&Ae.beginShadows();const ae=x.state.shadowsArray;He.render(ae,w,K),le===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=M.opaque,W=M.transmissive;if(x.setupLights(),K.isArrayCamera){const Te=K.cameras;if(W.length>0)for(let Le=0,Oe=Te.length;Le<Oe;Le++){const Ie=Te[Le];fo(se,W,w,Ie)}wt&&Ze.render(w);for(let Le=0,Oe=Te.length;Le<Oe;Le++){const Ie=Te[Le];Ys(M,w,Ie,Ie.viewport)}}else W.length>0&&fo(se,W,w,K),wt&&Ze.render(w),Ys(M,w,K);q!==null&&P===0&&(U.updateMultisampleRenderTarget(q),U.updateRenderTargetMipmap(q)),w.isScene===!0&&w.onAfterRender(C,w,K),kt.resetDefaultState(),N=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],le===!0&&Ae.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function ds(w,K,ae,se){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)ae=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){se&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const Le=Se.update(w),Oe=w.material;Oe.visible&&M.push(w,Le,Oe,ae,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const Le=Se.update(w),Oe=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Be.copy(Le.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Oe)){const Ie=Le.groups;for(let tt=0,Je=Ie.length;tt<Je;tt++){const qe=Ie[tt],bt=Oe[qe.materialIndex];bt&&bt.visible&&M.push(w,Le,bt,ae,Be.z,qe)}}else Oe.visible&&M.push(w,Le,Oe,ae,Be.z,null)}}const Te=w.children;for(let Le=0,Oe=Te.length;Le<Oe;Le++)ds(Te[Le],K,ae,se)}function Ys(w,K,ae,se){const W=w.opaque,Te=w.transmissive,Le=w.transparent;x.setupLightsView(ae),le===!0&&Ae.setGlobalState(C.clippingPlanes,ae),se&&Xe.viewport(F.copy(se)),W.length>0&&ps(W,K,ae),Te.length>0&&ps(Te,K,ae),Le.length>0&&ps(Le,K,ae),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function fo(w,K,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new Ws(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?wl:Ra,minFilter:ba,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Te=x.state.transmissionRenderTarget[se.id],Le=se.viewport||F;Te.setSize(Le.z*C.transmissionResolutionScale,Le.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget();C.setRenderTarget(Te),C.getClearColor(xe),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),wt&&Ze.render(ae);const Ie=C.toneMapping;C.toneMapping=fs;const tt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),le===!0&&Ae.setGlobalState(C.clippingPlanes,se),ps(w,ae,se),U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let qe=0,bt=K.length;qe<bt;qe++){const Et=K[qe],Kt=Et.object,Nt=Et.geometry,it=Et.material,Ke=Et.group;if(it.side===Wi&&Kt.layers.test(se.layers)){const pn=it.side;it.side=ni,it.needsUpdate=!0,Ai(Kt,ae,se,Nt,it,Ke),it.side=pn,it.needsUpdate=!0,Je=!0}}Je===!0&&(U.updateMultisampleRenderTarget(Te),U.updateRenderTargetMipmap(Te))}C.setRenderTarget(Oe),C.setClearColor(xe,ye),tt!==void 0&&(se.viewport=tt),C.toneMapping=Ie}function ps(w,K,ae){const se=K.isScene===!0?K.overrideMaterial:null;for(let W=0,Te=w.length;W<Te;W++){const Le=w[W],Oe=Le.object,Ie=Le.geometry,tt=Le.group;let Je=Le.material;Je.allowOverride===!0&&se!==null&&(Je=se),Oe.layers.test(ae.layers)&&Ai(Oe,K,ae,Ie,Je,tt)}}function Ai(w,K,ae,se,W,Te){w.onBeforeRender(C,K,ae,se,W,Te),w.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(C,K,ae,se,w,Te),W.transparent===!0&&W.side===Wi&&W.forceSinglePass===!1?(W.side=ni,W.needsUpdate=!0,C.renderBufferDirect(ae,K,se,W,w,Te),W.side=wa,W.needsUpdate=!0,C.renderBufferDirect(ae,K,se,W,w,Te),W.side=Wi):C.renderBufferDirect(ae,K,se,W,w,Te),w.onAfterRender(C,K,ae,se,W,Te)}function tn(w,K,ae){K.isScene!==!0&&(K=At);const se=We.get(w),W=x.state.lights,Te=x.state.shadowsArray,Le=W.state.version,Oe=Ve.getParameters(w,W.state,Te,K,ae),Ie=Ve.getProgramCacheKey(Oe);let tt=se.programs;se.environment=w.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(w.isMeshStandardMaterial?ie:A).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,tt===void 0&&(w.addEventListener("dispose",et),tt=new Map,se.programs=tt);let Je=tt.get(Ie);if(Je!==void 0){if(se.currentProgram===Je&&se.lightsStateVersion===Le)return Qi(w,Oe),Je}else Oe.uniforms=Ve.getUniforms(w),w.onBeforeCompile(Oe,C),Je=Ve.acquireProgram(Oe,Ie),tt.set(Ie,Je),se.uniforms=Oe.uniforms;const qe=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=Ae.uniform),Qi(w,Oe),se.needsLights=Ou(w),se.lightsStateVersion=Le,se.needsLights&&(qe.ambientLightColor.value=W.state.ambient,qe.lightProbe.value=W.state.probe,qe.directionalLights.value=W.state.directional,qe.directionalLightShadows.value=W.state.directionalShadow,qe.spotLights.value=W.state.spot,qe.spotLightShadows.value=W.state.spotShadow,qe.rectAreaLights.value=W.state.rectArea,qe.ltc_1.value=W.state.rectAreaLTC1,qe.ltc_2.value=W.state.rectAreaLTC2,qe.pointLights.value=W.state.point,qe.pointLightShadows.value=W.state.pointShadow,qe.hemisphereLights.value=W.state.hemi,qe.directionalShadowMap.value=W.state.directionalShadowMap,qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qe.spotShadowMap.value=W.state.spotShadowMap,qe.spotLightMatrix.value=W.state.spotLightMatrix,qe.spotLightMap.value=W.state.spotLightMap,qe.pointShadowMap.value=W.state.pointShadowMap,qe.pointShadowMatrix.value=W.state.pointShadowMatrix),se.currentProgram=Je,se.uniformsList=null,Je}function An(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=bu.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function Qi(w,K){const ae=We.get(w);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.batchingColor=K.batchingColor,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function ho(w,K,ae,se,W){K.isScene!==!0&&(K=At),U.resetTextureUnits();const Te=K.fog,Le=se.isMeshStandardMaterial?K.environment:null,Oe=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Wn,Ie=(se.isMeshStandardMaterial?ie:A).get(se.envMap||Le),tt=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Je=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),qe=!!ae.morphAttributes.position,bt=!!ae.morphAttributes.normal,Et=!!ae.morphAttributes.color;let Kt=fs;se.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Kt=C.toneMapping);const Nt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,it=Nt!==void 0?Nt.length:0,Ke=We.get(se),pn=x.state.lights;if(le===!0&&(ce===!0||w!==R)){const nn=w===R&&se.id===N;Ae.setState(se,w,nn)}let Rt=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==pn.state.version||Ke.outputColorSpace!==Oe||W.isBatchedMesh&&Ke.batching===!1||!W.isBatchedMesh&&Ke.batching===!0||W.isBatchedMesh&&Ke.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ke.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ke.instancing===!1||!W.isInstancedMesh&&Ke.instancing===!0||W.isSkinnedMesh&&Ke.skinning===!1||!W.isSkinnedMesh&&Ke.skinning===!0||W.isInstancedMesh&&Ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ke.instancingMorph===!1&&W.morphTexture!==null||Ke.envMap!==Ie||se.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ae.numPlanes||Ke.numIntersection!==Ae.numIntersection)||Ke.vertexAlphas!==tt||Ke.vertexTangents!==Je||Ke.morphTargets!==qe||Ke.morphNormals!==bt||Ke.morphColors!==Et||Ke.toneMapping!==Kt||Ke.morphTargetsCount!==it)&&(Rt=!0):(Rt=!0,Ke.__version=se.version);let qn=Ke.currentProgram;Rt===!0&&(qn=tn(se,K,W));let wi=!1,zn=!1,yn=!1;const Gt=qn.getUniforms(),Bn=Ke.uniforms;if(Xe.useProgram(qn.program)&&(wi=!0,zn=!0,yn=!0),se.id!==N&&(N=se.id,zn=!0),wi||R!==w){Xe.buffers.depth.getReversed()?(fe.copy(w.projectionMatrix),Jb(fe),$b(fe),Gt.setValue(B,"projectionMatrix",fe)):Gt.setValue(B,"projectionMatrix",w.projectionMatrix),Gt.setValue(B,"viewMatrix",w.matrixWorldInverse);const wn=Gt.map.cameraPosition;wn!==void 0&&wn.setValue(B,ze.setFromMatrixPosition(w.matrixWorld)),mt.logarithmicDepthBuffer&&Gt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,zn=!0,yn=!0)}if(W.isSkinnedMesh){Gt.setOptional(B,W,"bindMatrix"),Gt.setOptional(B,W,"bindMatrixInverse");const nn=W.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Gt.setValue(B,"boneTexture",nn.boneTexture,U))}W.isBatchedMesh&&(Gt.setOptional(B,W,"batchingTexture"),Gt.setValue(B,"batchingTexture",W._matricesTexture,U),Gt.setOptional(B,W,"batchingIdTexture"),Gt.setValue(B,"batchingIdTexture",W._indirectTexture,U),Gt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Gt.setValue(B,"batchingColorTexture",W._colorsTexture,U));const Un=ae.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&je.update(W,ae,qn),(zn||Ke.receiveShadow!==W.receiveShadow)&&(Ke.receiveShadow=W.receiveShadow,Gt.setValue(B,"receiveShadow",W.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Bn.envMap.value=Ie,Bn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&K.environment!==null&&(Bn.envMapIntensity.value=K.environmentIntensity),zn&&(Gt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ke.needsLights&&Uu(Bn,yn),Te&&se.fog===!0&&Ce.refreshFogUniforms(Bn,Te),Ce.refreshMaterialUniforms(Bn,se,Z,J,x.state.transmissionRenderTarget[w.id]),bu.upload(B,An(Ke),Bn,U)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(bu.upload(B,An(Ke),Bn,U),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(B,"center",W.center),Gt.setValue(B,"modelViewMatrix",W.modelViewMatrix),Gt.setValue(B,"normalMatrix",W.normalMatrix),Gt.setValue(B,"modelMatrix",W.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const nn=se.uniformsGroups;for(let wn=0,Ks=nn.length;wn<Ks;wn++){const Yn=nn[wn];Y.update(Yn,qn),Y.bind(Yn,qn)}}return qn}function Uu(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function Ou(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,K,ae){const se=We.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),We.get(w.texture).__webglTexture=K,We.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ae,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const ae=We.get(w);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0};const Dl=B.createFramebuffer();this.setRenderTarget=function(w,K=0,ae=0){q=w,H=K,P=ae;let se=!0,W=null,Te=!1,Le=!1;if(w){const Ie=We.get(w);if(Ie.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(B.FRAMEBUFFER,null),se=!1;else if(Ie.__webglFramebuffer===void 0)U.setupRenderTarget(w);else if(Ie.__hasExternalTextures)U.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qe=w.depthTexture;if(Ie.__boundDepthTexture!==qe){if(qe!==null&&We.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(w)}}const tt=w.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Le=!0);const Je=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[K])?W=Je[K][ae]:W=Je[K],Te=!0):w.samples>0&&U.useMultisampledRTT(w)===!1?W=We.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?W=Je[ae]:W=Je,F.copy(w.viewport),he.copy(w.scissor),oe=w.scissorTest}else F.copy(D).multiplyScalar(Z).floor(),he.copy($).multiplyScalar(Z).floor(),oe=me;if(ae!==0&&(W=Dl),Xe.bindFramebuffer(B.FRAMEBUFFER,W)&&se&&Xe.drawBuffers(w,W),Xe.viewport(F),Xe.scissor(he),Xe.setScissorTest(oe),Te){const Ie=We.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ie.__webglTexture,ae)}else if(Le){const Ie=We.get(w.texture),tt=K;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.__webglTexture,ae,tt)}else if(w!==null&&ae!==0){const Ie=We.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ie.__webglTexture,ae)}N=-1},this.readRenderTargetPixels=function(w,K,ae,se,W,Te,Le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){Xe.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const Ie=w.texture,tt=Ie.format,Je=Ie.type;if(!mt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-se&&ae>=0&&ae<=w.height-W&&B.readPixels(K,ae,se,W,rt.convert(tt),rt.convert(Je),Te)}finally{const Ie=q!==null?We.get(q).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(w,K,ae,se,W,Te,Le){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(K>=0&&K<=w.width-se&&ae>=0&&ae<=w.height-W){Xe.bindFramebuffer(B.FRAMEBUFFER,Oe);const Ie=w.texture,tt=Ie.format,Je=Ie.type;if(!mt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(K,ae,se,W,rt.convert(tt),rt.convert(Je),0);const bt=q!==null?We.get(q).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,bt);const Et=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Qb(B,Et,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te),B.deleteBuffer(qe),B.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,ae=0){const se=Math.pow(2,-ae),W=Math.floor(w.image.width*se),Te=Math.floor(w.image.height*se),Le=K!==null?K.x:0,Oe=K!==null?K.y:0;U.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,ae,0,0,Le,Oe,W,Te),Xe.unbindTexture()};const ms=B.createFramebuffer(),po=B.createFramebuffer();this.copyTextureToTexture=function(w,K,ae=null,se=null,W=0,Te=null){Te===null&&(W!==0?(Mu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=W,W=0):Te=0);let Le,Oe,Ie,tt,Je,qe,bt,Et,Kt;const Nt=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(ae!==null)Le=ae.max.x-ae.min.x,Oe=ae.max.y-ae.min.y,Ie=ae.isBox3?ae.max.z-ae.min.z:1,tt=ae.min.x,Je=ae.min.y,qe=ae.isBox3?ae.min.z:0;else{const Un=Math.pow(2,-W);Le=Math.floor(Nt.width*Un),Oe=Math.floor(Nt.height*Un),w.isDataArrayTexture?Ie=Nt.depth:w.isData3DTexture?Ie=Math.floor(Nt.depth*Un):Ie=1,tt=0,Je=0,qe=0}se!==null?(bt=se.x,Et=se.y,Kt=se.z):(bt=0,Et=0,Kt=0);const it=rt.convert(K.format),Ke=rt.convert(K.type);let pn;K.isData3DTexture?(U.setTexture3D(K,0),pn=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(U.setTexture2DArray(K,0),pn=B.TEXTURE_2D_ARRAY):(U.setTexture2D(K,0),pn=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const Rt=B.getParameter(B.UNPACK_ROW_LENGTH),qn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),wi=B.getParameter(B.UNPACK_SKIP_PIXELS),zn=B.getParameter(B.UNPACK_SKIP_ROWS),yn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qe);const Gt=w.isDataArrayTexture||w.isData3DTexture,Bn=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const Un=We.get(w),nn=We.get(K),wn=We.get(Un.__renderTarget),Ks=We.get(nn.__renderTarget);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,wn.__webglFramebuffer),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let Yn=0;Yn<Ie;Yn++)Gt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(w).__webglTexture,W,qe+Yn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(K).__webglTexture,Te,Kt+Yn)),B.blitFramebuffer(tt,Je,Le,Oe,bt,Et,Le,Oe,B.DEPTH_BUFFER_BIT,B.NEAREST);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||We.has(w)){const Un=We.get(w),nn=We.get(K);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,ms),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,po);for(let wn=0;wn<Ie;wn++)Gt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Un.__webglTexture,W,qe+wn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Un.__webglTexture,W),Bn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,nn.__webglTexture,Te,Kt+wn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,nn.__webglTexture,Te),W!==0?B.blitFramebuffer(tt,Je,Le,Oe,bt,Et,Le,Oe,B.COLOR_BUFFER_BIT,B.NEAREST):Bn?B.copyTexSubImage3D(pn,Te,bt,Et,Kt+wn,tt,Je,Le,Oe):B.copyTexSubImage2D(pn,Te,bt,Et,tt,Je,Le,Oe);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Bn?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(pn,Te,bt,Et,Kt,Le,Oe,Ie,it,Ke,Nt.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(pn,Te,bt,Et,Kt,Le,Oe,Ie,it,Nt.data):B.texSubImage3D(pn,Te,bt,Et,Kt,Le,Oe,Ie,it,Ke,Nt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Te,bt,Et,Le,Oe,it,Ke,Nt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Te,bt,Et,Nt.width,Nt.height,it,Nt.data):B.texSubImage2D(B.TEXTURE_2D,Te,bt,Et,Le,Oe,it,Ke,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Rt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,wi),B.pixelStorei(B.UNPACK_SKIP_ROWS,zn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yn),Te===0&&K.generateMipmaps&&B.generateMipmap(pn),Xe.unbindTexture()},this.copyTextureToTexture3D=function(w,K,ae=null,se=null,W=0){return Mu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,K,ae,se,W)},this.initRenderTarget=function(w){We.get(w).__webglFramebuffer===void 0&&U.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?U.setTextureCube(w,0):w.isData3DTexture?U.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?U.setTexture2DArray(w,0):U.setTexture2D(w,0),Xe.unbindTexture()},this.resetState=function(){H=0,P=0,q=null,Xe.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}const tx={type:"change"},Vp={type:"start"},ey={type:"end"},du=new Rl,nx=new rs,e2=Math.cos(70*Lp.DEG2RAD),gn=new X,ti=2*Math.PI,qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ad=1e-6;class t2 extends gT{constructor(e,n=null){super(e,n),this.state=qt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Yi,this._lastTargetPosition=new X,this._quat=new Yi().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cv,this._sphericalDelta=new Cv,this._scale=1,this._panOffset=new X,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new X,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=i2.bind(this),this._onPointerDown=n2.bind(this),this._onPointerUp=a2.bind(this),this._onContextMenu=f2.bind(this),this._onMouseWheel=o2.bind(this),this._onKeyDown=l2.bind(this),this._onTouchStart=c2.bind(this),this._onTouchMove=u2.bind(this),this._onMouseDown=s2.bind(this),this._onMouseMove=r2.bind(this),this._interceptControlDown=h2.bind(this),this._interceptControlUp=d2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tx),this.update(),this.state=qt.NONE}update(e=null){const n=this.object.position;gn.copy(n).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(a)&&isFinite(r)&&(a<-Math.PI?a+=ti:a>Math.PI&&(a-=ti),r<-Math.PI?r+=ti:r>Math.PI&&(r-=ti),a<=r?this._spherical.theta=Math.max(a,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+r)/2?Math.max(a,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),n.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=gn.length();u=this._clampDistance(f*this._scale);const d=f-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),c=!!d}else if(this.object.isOrthographicCamera){const f=new X(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=d!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(du.origin.copy(this.object.position),du.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(du.direction))<e2?this.object.lookAt(this.target):(nx.setFromNormalAndCoplanarPoint(this.object.up,this.target),du.intersectPlane(nx,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Ad||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ad||this._lastTargetPosition.distanceToSquared(this.target)>Ad?(this.dispatchEvent(tx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ti/60*this.autoRotateSpeed*e:ti/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){gn.setFromMatrixColumn(n,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,n){this.screenSpacePanning===!0?gn.setFromMatrixColumn(n,1):(gn.setFromMatrixColumn(n,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;gn.copy(r).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),r=e-a.left,c=n-a.top,u=a.width,f=a.height;this._mouse.x=r/u*2-1,this._mouse.y=-(c/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/n.clientHeight),this._rotateUp(ti*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(a,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(a,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,r=e.pageY-n.y,c=Math.sqrt(a*a+r*r);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),r=.5*(e.pageX+a.x),c=.5*(e.pageY+a.y);this._rotateEnd.set(r,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/n.clientHeight),this._rotateUp(ti*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(a,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,r=e.pageY-n.y,c=Math.sqrt(a*a+r*r);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+n.x)*.5,f=(e.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new nt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function n2(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function i2(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function a2(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ey),this.state=qt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function s2(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=qt.DOLLY;break;case jr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qt.ROTATE}break;case jr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=qt.PAN}break;default:this.state=qt.NONE}this.state!==qt.NONE&&this.dispatchEvent(Vp)}function r2(o){switch(this.state){case qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function o2(o){this.enabled===!1||this.enableZoom===!1||this.state!==qt.NONE||(o.preventDefault(),this.dispatchEvent(Vp),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(ey))}function l2(o){this.enabled!==!1&&this._handleKeyDown(o)}function c2(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=qt.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=qt.TOUCH_PAN;break;default:this.state=qt.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=qt.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=qt.TOUCH_DOLLY_ROTATE;break;default:this.state=qt.NONE}break;default:this.state=qt.NONE}this.state!==qt.NONE&&this.dispatchEvent(Vp)}function u2(o){switch(this._trackPointer(o),this.state){case qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=qt.NONE}}function f2(o){this.enabled!==!1&&o.preventDefault()}function h2(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d2(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ix(o,e){if(e===bb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===pp||e===Cx){let n=o.getIndex();if(n===null){const u=[],f=o.getAttribute("position");if(f!==void 0){for(let d=0;d<f.count;d++)u.push(d);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(e===pp)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class p2 extends oo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new x2(n)}),this.register(function(n){return new y2(n)}),this.register(function(n){return new C2(n)}),this.register(function(n){return new D2(n)}),this.register(function(n){return new N2(n)}),this.register(function(n){return new M2(n)}),this.register(function(n){return new b2(n)}),this.register(function(n){return new E2(n)}),this.register(function(n){return new T2(n)}),this.register(function(n){return new v2(n)}),this.register(function(n){return new A2(n)}),this.register(function(n){return new S2(n)}),this.register(function(n){return new R2(n)}),this.register(function(n){return new w2(n)}),this.register(function(n){return new g2(n)}),this.register(function(n){return new L2(n)}),this.register(function(n){return new U2(n)})}load(e,n,a,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const p=xl.extractUrlBase(e);u=xl.resolveURL(p,this.path)}else u=xl.extractUrlBase(e);this.manager.itemStart(e);const f=function(p){r?r(p):console.error(p),c.manager.itemError(e),c.manager.itemEnd(e)},d=new Yx(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(p){try{c.parse(p,u,function(_){n(_),c.manager.itemEnd(e)},f)}catch(_){f(_)}},a,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,r){let c;const u={},f={},d=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===ty){try{u[xt.KHR_BINARY_GLTF]=new O2(e)}catch(g){r&&r(g);return}c=JSON.parse(u[xt.KHR_BINARY_GLTF].content)}else c=JSON.parse(d.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const p=new q2(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let _=0;_<this.pluginCallbacks.length;_++){const g=this.pluginCallbacks[_](p);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[g.name]=g,u[g.name]=!0}if(c.extensionsUsed)for(let _=0;_<c.extensionsUsed.length;++_){const g=c.extensionsUsed[_],v=c.extensionsRequired||[];switch(g){case xt.KHR_MATERIALS_UNLIT:u[g]=new _2;break;case xt.KHR_DRACO_MESH_COMPRESSION:u[g]=new P2(c,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:u[g]=new I2;break;case xt.KHR_MESH_QUANTIZATION:u[g]=new z2;break;default:v.indexOf(g)>=0&&f[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}p.setExtensions(u),p.setPlugins(f),p.parse(a,r)}parseAsync(e,n){const a=this;return new Promise(function(r,c){a.parse(e,n,r,c)})}}function m2(){let o={};return{get:function(e){return o[e]},add:function(e,n){o[e]=n},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class g2{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let r=n.cache.get(a);if(r)return r;const c=n.json,d=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let p;const _=new at(16777215);d.color!==void 0&&_.setRGB(d.color[0],d.color[1],d.color[2],Wn);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":p=new vp(_),p.target.position.set(0,0,-1),p.add(p.target);break;case"point":p=new tT(_),p.distance=g;break;case"spot":p=new $E(_),p.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,p.angle=d.spot.outerConeAngle,p.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,p.target.position.set(0,0,-1),p.add(p.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return p.position.set(0,0,0),Ma(p,d),d.intensity!==void 0&&(p.intensity=d.intensity),p.name=n.createUniqueName(d.name||"light_"+e),r=Promise.resolve(p),n.cache.add(a,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],f=(c.extensions&&c.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(d){return a._getNodeRef(n.cache,f,d)})}}class _2{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Gs}extendParams(e,n,a){const r=[];e.color=new at(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Wn),e.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",c.baseColorTexture,bn))}return Promise.all(r)}}class v2{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name].emissiveStrength;return c!==void 0&&(n.emissiveIntensity=c),Promise.resolve()}}class x2{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(n.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(c.push(a.assignTexture(n,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const f=u.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new nt(f,f)}return Promise.all(c)}}class y2{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class S2{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(n.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(n.iridescenceIOR=u.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(c)}}class M2{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[];n.sheenColor=new at(0,0,0),n.sheenRoughness=0,n.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const f=u.sheenColorFactor;n.sheenColor.setRGB(f[0],f[1],f[2],Wn)}return u.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&c.push(a.assignTexture(n,"sheenColorMap",u.sheenColorTexture,bn)),u.sheenRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(c)}}class b2{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(n.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&c.push(a.assignTexture(n,"transmissionMap",u.transmissionTexture)),Promise.all(c)}}class E2{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&c.push(a.assignTexture(n,"thicknessMap",u.thicknessTexture)),n.attenuationDistance=u.attenuationDistance||1/0;const f=u.attenuationColor||[1,1,1];return n.attenuationColor=new at().setRGB(f[0],f[1],f[2],Wn),Promise.all(c)}}class T2{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class A2{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&c.push(a.assignTexture(n,"specularIntensityMap",u.specularTexture));const f=u.specularColorFactor||[1,1,1];return n.specularColor=new at().setRGB(f[0],f[1],f[2],Wn),u.specularColorTexture!==void 0&&c.push(a.assignTexture(n,"specularColorMap",u.specularColorTexture,bn)),Promise.all(c)}}class w2{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return n.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&c.push(a.assignTexture(n,"bumpMap",u.bumpTexture)),Promise.all(c)}}class R2{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bi}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(n.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(n.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&c.push(a.assignTexture(n,"anisotropyMap",u.anisotropyTexture)),Promise.all(c)}}class C2{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class D2{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],f=r.images[u.source];let d=a.textureLoader;if(f.uri){const p=a.options.manager.getHandler(f.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return a.loadTextureImage(e,u.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return a.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class N2{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],f=r.images[u.source];let d=a.textureLoader;if(f.uri){const p=a.options.manager.getHandler(f.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return a.loadTextureImage(e,u.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return a.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class L2{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(f){const d=r.byteOffset||0,p=r.byteLength||0,_=r.count,g=r.byteStride,v=new Uint8Array(f,d,p);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(_,g,v,r.mode,r.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(_*g);return u.decodeGltfBuffer(new Uint8Array(y),_,g,v,r.mode,r.filter),y})})}else return null}}class U2{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const p of r.primitives)if(p.mode!==bi.TRIANGLES&&p.mode!==bi.TRIANGLE_STRIP&&p.mode!==bi.TRIANGLE_FAN&&p.mode!==void 0)return null;const u=a.extensions[this.name].attributes,f=[],d={};for(const p in u)f.push(this.parser.getDependency("accessor",u[p]).then(_=>(d[p]=_,d[p])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(p=>{const _=p.pop(),g=_.isGroup?_.children:[_],v=p[0].count,y=[];for(const b of g){const E=new ft,M=new X,x=new Yi,O=new X(1,1,1),L=new DE(b.geometry,b.material,v);for(let C=0;C<v;C++)d.TRANSLATION&&M.fromBufferAttribute(d.TRANSLATION,C),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,C),d.SCALE&&O.fromBufferAttribute(d.SCALE,C),L.setMatrixAt(C,E.compose(M,x,O));for(const C in d)if(C==="_COLOR_0"){const V=d[C];L.instanceColor=new gp(V.array,V.itemSize,V.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&b.geometry.setAttribute(C,d[C]);en.prototype.copy.call(L,b),this.parser.assignFinalMaterial(L),y.push(L)}return _.isGroup?(_.clear(),_.add(...y),_):y[0]}))}}const ty="glTF",hl=12,ax={JSON:1313821514,BIN:5130562};class O2{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,hl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==ty)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-hl,c=new DataView(e,hl);let u=0;for(;u<r;){const f=c.getUint32(u,!0);u+=4;const d=c.getUint32(u,!0);if(u+=4,d===ax.JSON){const p=new Uint8Array(e,hl+u,f);this.content=a.decode(p)}else if(d===ax.BIN){const p=hl+u;this.body=e.slice(p,p+f)}u+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class P2{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,f={},d={},p={};for(const _ in u){const g=yp[_]||_.toLowerCase();f[g]=u[_]}for(const _ in e.attributes){const g=yp[_]||_.toLowerCase();if(u[_]!==void 0){const v=a.accessors[e.attributes[_]],y=qr[v.componentType];p[g]=y.name,d[g]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(_){return new Promise(function(g,v){r.decodeDracoFile(_,function(y){for(const b in y.attributes){const E=y.attributes[b],M=d[b];M!==void 0&&(E.normalized=M)}g(y)},f,p,Wn,v)})})}}class I2{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class z2{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class ny extends Cl{constructor(e,n,a,r){super(e,n,a,r)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r*3+r;for(let u=0;u!==r;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=f*2,p=f*3,_=r-n,g=(a-n)/_,v=g*g,y=v*g,b=e*p,E=b-p,M=-2*y+3*v,x=y-v,O=1-M,L=x-v+g;for(let C=0;C!==f;C++){const V=u[E+C+f],H=u[E+C+d]*_,P=u[b+C+f],q=u[b+C]*_;c[C]=O*V+L*H+M*P+x*q}return c}}const B2=new Yi;class F2 extends ny{interpolate_(e,n,a,r){const c=super.interpolate_(e,n,a,r);return B2.fromArray(c).normalize().toArray(c),c}}const bi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sx={9728:jn,9729:hi,9984:xx,9985:gu,9986:ml,9987:ba},rx={33071:ls,33648:Eu,10497:Qr},wd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},H2={CUBICSPLINE:void 0,LINEAR:Tl,STEP:El},Rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function k2(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new ao({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wa})),o.DefaultMaterial}function Bs(o,e,n){for(const a in n.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function Ma(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function G2(o,e,n){let a=!1,r=!1,c=!1;for(let p=0,_=e.length;p<_;p++){const g=e[p];if(g.POSITION!==void 0&&(a=!0),g.NORMAL!==void 0&&(r=!0),g.COLOR_0!==void 0&&(c=!0),a&&r&&c)break}if(!a&&!r&&!c)return Promise.resolve(o);const u=[],f=[],d=[];for(let p=0,_=e.length;p<_;p++){const g=e[p];if(a){const v=g.POSITION!==void 0?n.getDependency("accessor",g.POSITION):o.attributes.position;u.push(v)}if(r){const v=g.NORMAL!==void 0?n.getDependency("accessor",g.NORMAL):o.attributes.normal;f.push(v)}if(c){const v=g.COLOR_0!==void 0?n.getDependency("accessor",g.COLOR_0):o.attributes.color;d.push(v)}}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(d)]).then(function(p){const _=p[0],g=p[1],v=p[2];return a&&(o.morphAttributes.position=_),r&&(o.morphAttributes.normal=g),c&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function V2(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)o.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function j2(o){let e;const n=o.extensions&&o.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Cd(n.attributes):e=o.indices+":"+Cd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+Cd(o.targets[a]);return e}function Cd(o){let e="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)e+=n[a]+":"+o[n[a]]+";";return e}function Sp(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function X2(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const W2=new ft;class q2{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new m2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"){const f=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(f)===!0;const d=f.match(/Version\/(\d+)/);r=a&&d?parseInt(d[1],10):-1,c=f.indexOf("Firefox")>-1,u=c?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||c&&u<98?this.textureLoader=new QE(this.options.manager):this.textureLoader=new aT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const f={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return Bs(c,f,r),Ma(f,r),Promise.all(a._invokeAll(function(d){return d.afterRoot&&d.afterRoot(f)})).then(function(){for(const d of f.scenes)d.updateMatrixWorld();e(f)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,c=n.length;r<c;r++){const u=n[r].joints;for(let f=0,d=u.length;f<d;f++)e[u[f]].isBone=!0}for(let r=0,c=e.length;r<c;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const r=a.clone(),c=(u,f)=>{const d=this.associations.get(u);d!=null&&this.associations.set(f,d);for(const[p,_]of u.children.entries())c(_,f.children[p])};return c(a,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=e(n[a]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const c=e(n[r]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){a.load(xl.resolveURL(n.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+r)})}loadAccessor(e){const n=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=wd[r.type],f=qr[r.componentType],d=r.normalized===!0,p=new f(r.count*u);return Promise.resolve(new Xn(p,u,d))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const f=u[0],d=wd[r.type],p=qr[r.componentType],_=p.BYTES_PER_ELEMENT,g=_*d,v=r.byteOffset||0,y=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,b=r.normalized===!0;let E,M;if(y&&y!==g){const x=Math.floor(v/y),O="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let L=n.cache.get(O);L||(E=new p(f,x*y,r.count*y/_),L=new TE(E,y/_),n.cache.add(O,L)),M=new Op(L,d,v%y/_,b)}else f===null?E=new p(r.count*d):E=new p(f,v,r.count*d),M=new Xn(E,d,b);if(r.sparse!==void 0){const x=wd.SCALAR,O=qr[r.sparse.indices.componentType],L=r.sparse.indices.byteOffset||0,C=r.sparse.values.byteOffset||0,V=new O(u[1],L,r.sparse.count*x),H=new p(u[2],C,r.sparse.count*d);f!==null&&(M=new Xn(M.array.slice(),M.itemSize,M.normalized)),M.normalized=!1;for(let P=0,q=V.length;P<q;P++){const N=V[P];if(M.setX(N,H[P*d]),d>=2&&M.setY(N,H[P*d+1]),d>=3&&M.setZ(N,H[P*d+2]),d>=4&&M.setW(N,H[P*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=b}return M})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let f=this.textureLoader;if(u.uri){const d=a.manager.getHandler(u.uri);d!==null&&(f=d)}return this.loadTextureImage(e,c,f)}loadTextureImage(e,n,a){const r=this,c=this.json,u=c.textures[e],f=c.images[n],d=(f.uri||f.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const p=this.loadImageSource(n,a).then(function(_){_.flipY=!1,_.name=u.name||f.name||"",_.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(_.name=f.uri);const v=(c.samplers||{})[u.sampler]||{};return _.magFilter=sx[v.magFilter]||hi,_.minFilter=sx[v.minFilter]||ba,_.wrapS=rx[v.wrapS]||Qr,_.wrapT=rx[v.wrapT]||Qr,_.generateMipmaps=!_.isCompressedTexture&&_.minFilter!==jn&&_.minFilter!==hi,r.associations.set(_,{textures:e}),_}).catch(function(){return null});return this.textureCache[d]=p,p}loadImageSource(e,n){const a=this,r=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const u=r.images[e],f=self.URL||self.webkitURL;let d=u.uri||"",p=!1;if(u.bufferView!==void 0)d=a.getDependency("bufferView",u.bufferView).then(function(g){p=!0;const v=new Blob([g],{type:u.mimeType});return d=f.createObjectURL(v),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const _=Promise.resolve(d).then(function(g){return new Promise(function(v,y){let b=v;n.isImageBitmapLoader===!0&&(b=function(E){const M=new En(E);M.needsUpdate=!0,v(M)}),n.load(xl.resolveURL(g,c.path),b,void 0,y)})}).then(function(g){return p===!0&&f.revokeObjectURL(d),Ma(g,u),g.userData.mimeType=u.mimeType||X2(u.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=_,_}assignTexture(e,n,a,r){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[xt.KHR_TEXTURE_TRANSFORM]){const f=a.extensions!==void 0?a.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const d=c.associations.get(u);u=c.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(u,f),c.associations.set(u,d)}}return r!==void 0&&(u.colorSpace=r),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const r=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+a.uuid;let d=this.cache.get(f);d||(d=new jx,qi.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,d.sizeAttenuation=!1,this.cache.add(f,d)),a=d}else if(e.isLine){const f="LineBasicMaterial:"+a.uuid;let d=this.cache.get(f);d||(d=new Vx,qi.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,this.cache.add(f,d)),a=d}if(r||c||u){let f="ClonedMaterial:"+a.uuid+":";r&&(f+="derivative-tangents:"),c&&(f+="vertex-colors:"),u&&(f+="flat-shading:");let d=this.cache.get(f);d||(d=a.clone(),c&&(d.vertexColors=!0),u&&(d.flatShading=!0),r&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(f,d),this.associations.set(d,this.associations.get(a))),a=d}e.material=a}getMaterialType(){return ao}loadMaterial(e){const n=this,a=this.json,r=this.extensions,c=a.materials[e];let u;const f={},d=c.extensions||{},p=[];if(d[xt.KHR_MATERIALS_UNLIT]){const g=r[xt.KHR_MATERIALS_UNLIT];u=g.getMaterialType(),p.push(g.extendParams(f,c,n))}else{const g=c.pbrMetallicRoughness||{};if(f.color=new at(1,1,1),f.opacity=1,Array.isArray(g.baseColorFactor)){const v=g.baseColorFactor;f.color.setRGB(v[0],v[1],v[2],Wn),f.opacity=v[3]}g.baseColorTexture!==void 0&&p.push(n.assignTexture(f,"map",g.baseColorTexture,bn)),f.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,f.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(p.push(n.assignTexture(f,"metalnessMap",g.metallicRoughnessTexture)),p.push(n.assignTexture(f,"roughnessMap",g.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),p.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,f)})))}c.doubleSided===!0&&(f.side=Wi);const _=c.alphaMode||Rd.OPAQUE;if(_===Rd.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,_===Rd.MASK&&(f.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==Gs&&(p.push(n.assignTexture(f,"normalMap",c.normalTexture)),f.normalScale=new nt(1,1),c.normalTexture.scale!==void 0)){const g=c.normalTexture.scale;f.normalScale.set(g,g)}if(c.occlusionTexture!==void 0&&u!==Gs&&(p.push(n.assignTexture(f,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==Gs){const g=c.emissiveFactor;f.emissive=new at().setRGB(g[0],g[1],g[2],Wn)}return c.emissiveTexture!==void 0&&u!==Gs&&p.push(n.assignTexture(f,"emissiveMap",c.emissiveTexture,bn)),Promise.all(p).then(function(){const g=new u(f);return c.name&&(g.name=c.name),Ma(g,c),n.associations.set(g,{materials:e}),c.extensions&&Bs(r,g,c),g})}createUniqueName(e){const n=Ht.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,r=this.primitiveCache;function c(f){return a[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,n).then(function(d){return ox(d,f,n)})}const u=[];for(let f=0,d=e.length;f<d;f++){const p=e[f],_=j2(p),g=r[_];if(g)u.push(g.promise);else{let v;p.extensions&&p.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?v=c(p):v=ox(new Zi,p,n),r[_]={primitive:p,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,r=this.extensions,c=a.meshes[e],u=c.primitives,f=[];for(let d=0,p=u.length;d<p;d++){const _=u[d].material===void 0?k2(this.cache):this.getDependency("material",u[d].material);f.push(_)}return f.push(n.loadGeometries(u)),Promise.all(f).then(function(d){const p=d.slice(0,d.length-1),_=d[d.length-1],g=[];for(let y=0,b=_.length;y<b;y++){const E=_[y],M=u[y];let x;const O=p[y];if(M.mode===bi.TRIANGLES||M.mode===bi.TRIANGLE_STRIP||M.mode===bi.TRIANGLE_FAN||M.mode===void 0)x=c.isSkinnedMesh===!0?new wE(E,O):new Ln(E,O),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),M.mode===bi.TRIANGLE_STRIP?x.geometry=ix(x.geometry,Cx):M.mode===bi.TRIANGLE_FAN&&(x.geometry=ix(x.geometry,pp));else if(M.mode===bi.LINES)x=new UE(E,O);else if(M.mode===bi.LINE_STRIP)x=new zp(E,O);else if(M.mode===bi.LINE_LOOP)x=new OE(E,O);else if(M.mode===bi.POINTS)x=new PE(E,O);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(x.geometry.morphAttributes).length>0&&V2(x,c),x.name=n.createUniqueName(c.name||"mesh_"+e),Ma(x,c),M.extensions&&Bs(r,x,M),n.assignFinalMaterial(x),g.push(x)}for(let y=0,b=g.length;y<b;y++)n.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return c.extensions&&Bs(r,g[0],c),g[0];const v=new Vs;c.extensions&&Bs(r,v,c),n.associations.set(v,{meshes:e});for(let y=0,b=g.length;y<b;y++)v.add(g[y]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Gn(Lp.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new Fp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),Ma(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let r=0,c=n.joints.length;r<c;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const c=r.pop(),u=r,f=[],d=[];for(let p=0,_=u.length;p<_;p++){const g=u[p];if(g){f.push(g);const v=new ft;c!==null&&v.fromArray(c.array,p*16),d.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[p])}return new Pp(f,d)})}loadAnimation(e){const n=this.json,a=this,r=n.animations[e],c=r.name?r.name:"animation_"+e,u=[],f=[],d=[],p=[],_=[];for(let g=0,v=r.channels.length;g<v;g++){const y=r.channels[g],b=r.samplers[y.sampler],E=y.target,M=E.node,x=r.parameters!==void 0?r.parameters[b.input]:b.input,O=r.parameters!==void 0?r.parameters[b.output]:b.output;E.node!==void 0&&(u.push(this.getDependency("node",M)),f.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",O)),p.push(b),_.push(E))}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(d),Promise.all(p),Promise.all(_)]).then(function(g){const v=g[0],y=g[1],b=g[2],E=g[3],M=g[4],x=[];for(let O=0,L=v.length;O<L;O++){const C=v[O],V=y[O],H=b[O],P=E[O],q=M[O];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const N=a._createAnimationTracks(C,V,H,P,q);if(N)for(let R=0;R<N.length;R++)x.push(N[R])}return new jE(c,void 0,x)})}createNodeMesh(e){const n=this.json,a=this,r=n.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(f){if(f.isMesh)for(let d=0,p=r.weights.length;d<p;d++)f.morphTargetInfluences[d]=r.weights[d]}),u})}loadNode(e){const n=this.json,a=this,r=n.nodes[e],c=a._loadNodeShallow(e),u=[],f=r.children||[];for(let p=0,_=f.length;p<_;p++)u.push(a.getDependency("node",f[p]));const d=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),d]).then(function(p){const _=p[0],g=p[1],v=p[2];v!==null&&_.traverse(function(y){y.isSkinnedMesh&&y.bind(v,W2)});for(let y=0,b=g.length;y<b;y++)_.add(g[y]);return _})}_loadNodeShallow(e){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?r.createUniqueName(c.name):"",f=[],d=r._invokeOne(function(p){return p.createNodeMesh&&p.createNodeMesh(e)});return d&&f.push(d),c.camera!==void 0&&f.push(r.getDependency("camera",c.camera).then(function(p){return r._getNodeRef(r.cameraCache,c.camera,p)})),r._invokeAll(function(p){return p.createNodeAttachment&&p.createNodeAttachment(e)}).forEach(function(p){f.push(p)}),this.nodeCache[e]=Promise.all(f).then(function(p){let _;if(c.isBone===!0?_=new kx:p.length>1?_=new Vs:p.length===1?_=p[0]:_=new en,_!==p[0])for(let g=0,v=p.length;g<v;g++)_.add(p[g]);if(c.name&&(_.userData.name=c.name,_.name=u),Ma(_,c),c.extensions&&Bs(a,_,c),c.matrix!==void 0){const g=new ft;g.fromArray(c.matrix),_.applyMatrix4(g)}else c.translation!==void 0&&_.position.fromArray(c.translation),c.rotation!==void 0&&_.quaternion.fromArray(c.rotation),c.scale!==void 0&&_.scale.fromArray(c.scale);return r.associations.has(_)||r.associations.set(_,{}),r.associations.get(_).nodes=e,_}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],r=this,c=new Vs;a.name&&(c.name=r.createUniqueName(a.name)),Ma(c,a),a.extensions&&Bs(n,c,a);const u=a.nodes||[],f=[];for(let d=0,p=u.length;d<p;d++)f.push(r.getDependency("node",u[d]));return Promise.all(f).then(function(d){for(let _=0,g=d.length;_<g;_++)c.add(d[_]);const p=_=>{const g=new Map;for(const[v,y]of r.associations)(v instanceof qi||v instanceof En)&&g.set(v,y);return _.traverse(v=>{const y=r.associations.get(v);y!=null&&g.set(v,y)}),g};return r.associations=p(c),c})}_createAnimationTracks(e,n,a,r,c){const u=[],f=e.name?e.name:e.uuid,d=[];ss[c.path]===ss.weights?e.traverse(function(v){v.morphTargetInfluences&&d.push(v.name?v.name:v.uuid)}):d.push(f);let p;switch(ss[c.path]){case ss.weights:p=eo;break;case ss.rotation:p=to;break;case ss.translation:case ss.scale:p=no;break;default:switch(a.itemSize){case 1:p=eo;break;case 2:case 3:default:p=no;break}break}const _=r.interpolation!==void 0?H2[r.interpolation]:Tl,g=this._getArrayFromAccessor(a);for(let v=0,y=d.length;v<y;v++){const b=new p(d[v]+"."+ss[c.path],n.array,g,_);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),u.push(b)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=Sp(n.constructor),r=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=n[c]*a;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof to?F2:ny;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Y2(o,e,n){const a=e.attributes,r=new Vn;if(a.POSITION!==void 0){const f=n.json.accessors[a.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(r.set(new X(d[0],d[1],d[2]),new X(p[0],p[1],p[2])),f.normalized){const _=Sp(qr[f.componentType]);r.min.multiplyScalar(_),r.max.multiplyScalar(_)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const f=new X,d=new X;for(let p=0,_=c.length;p<_;p++){const g=c[p];if(g.POSITION!==void 0){const v=n.json.accessors[g.POSITION],y=v.min,b=v.max;if(y!==void 0&&b!==void 0){if(d.setX(Math.max(Math.abs(y[0]),Math.abs(b[0]))),d.setY(Math.max(Math.abs(y[1]),Math.abs(b[1]))),d.setZ(Math.max(Math.abs(y[2]),Math.abs(b[2]))),v.normalized){const E=Sp(qr[v.componentType]);d.multiplyScalar(E)}f.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(f)}o.boundingBox=r;const u=new di;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function ox(o,e,n){const a=e.attributes,r=[];function c(u,f){return n.getDependency("accessor",u).then(function(d){o.setAttribute(f,d)})}for(const u in a){const f=yp[u]||u.toLowerCase();f in o.attributes||r.push(c(a[u],f))}if(e.indices!==void 0&&!o.index){const u=n.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});r.push(u)}return Ct.workingColorSpace!==Wn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),Ma(o,e),Y2(o,e,n),Promise.all(r).then(function(){return e.targets!==void 0?G2(o,e.targets,n):o})}const pu={x:.22,y:.16},lx=1,K2=3e3,Z2=.13;function mu(o){o.traverse(e=>{var n;if(e instanceof Ln){(n=e.geometry)==null||n.dispose();const a=e.material;Array.isArray(a)?a.forEach(r=>r.dispose()):a==null||a.dispose()}})}function dl(o){const e=o.name.toLowerCase();if(e==="lcd"||/(^|_)lcd$/.test(e))return 100;if(e.includes("lcd"))return 85;if(e.includes("screen"))return 70;if(e.includes("display")||e.includes("monitor"))return 55;if(e.includes("glass"))return 48;const n=o.material,a=Array.isArray(n)?n:n?[n]:[];for(const r of a){const c=((r==null?void 0:r.name)??"").toLowerCase();if(c.includes("lcd")||c.includes("screen"))return 50}return 0}function Q2(o){const e=[];if(o.traverse(c=>{c instanceof Ln&&dl(c)>0&&e.push(c)}),e.length===0)return null;e.sort((c,u)=>dl(u)-dl(c));const n=e.filter(c=>dl(c)===dl(e[0]));if(n.length===1)return n[0];let a=n[0],r=1/0;for(const c of n){const f=new Vn().setFromObject(c).getSize(new X),p=Math.min(f.x,f.y,f.z)*(f.x*f.y+f.y*f.z+f.x*f.z);p<r&&(r=p,a=c)}return a}function J2(o){var e,n,a,r,c,u,f,d,p;(o instanceof ao||o instanceof Bi)&&((e=o.map)==null||e.dispose(),(n=o.emissiveMap)==null||n.dispose(),(a=o.normalMap)==null||a.dispose(),(r=o.roughnessMap)==null||r.dispose(),(c=o.metalnessMap)==null||c.dispose(),(u=o.aoMap)==null||u.dispose(),(f=o.lightMap)==null||f.dispose(),(d=o.bumpMap)==null||d.dispose(),(p=o.displacementMap)==null||p.dispose())}function $2(o,e){let n=0;return o.traverse(a=>{if(a instanceof Ln){const r=Array.isArray(a.material)?a.material:[a.material];for(const c of r)c===e&&n++}}),n}function eC(o,e){const n=o.material,a=Array.isArray(n)?[...n]:[n];o.material=new ao({color:new at(1118481),emissive:new at(657930),emissiveIntensity:1,roughness:.4,metalness:.1});for(const r of a)$2(e,r)===0&&(J2(r),r.dispose())}function tC(o,e,n,a,r,c=1.08,u,f){const d=a/Math.max(r,1);o.aspect=d;const p=o.fov*Math.PI/180,_=2*Math.atan(Math.tan(p/2)*d),g=n*c/Math.sin(p/2),v=n*c/Math.sin(_/2);let y=Math.max(g,v,n*2.35);y=Lp.clamp(y,u*1.02,f*.92);const b=new X(.18,.4,1).normalize().multiplyScalar(y);return o.position.copy(e).add(b),o.near=.1,o.far=100,o.updateProjectionMatrix(),y}function cx(){const o=new Ln(new io(1.35,.85,1.05),new ao({color:3462041,emissive:417606,emissiveIntensity:.2,metalness:.2,roughness:.45}));return o.name="hero-3d-fallback",o}function nC(o){let e=!1,n=null,a=0,r=0,c=.6;const u="/wes-portifolio-main/models/computer.glb",f=new X,d=new X,p=new X,_=new nt(0,0),g=new EE,v=new Gn(45,1,.1,100),y=new $R({antialias:!1,alpha:!0,powerPreference:"high-performance"});y.setPixelRatio(1),y.outputColorSpace=bn,y.toneMapping=_x,y.toneMappingExposure=1.05,y.setClearColor(0,0),y.domElement.style.display="block",y.domElement.style.width="100%",y.domElement.style.height="100%",y.domElement.style.pointerEvents="auto",y.domElement.style.cursor="grab",o.appendChild(y.domElement);const b=y.domElement,E=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)"):null,M=()=>(E==null?void 0:E.matches)??!1,x=new t2(v,b);x.enableDamping=!0,x.dampingFactor=.05,x.enableZoom=!0,x.zoomSpeed=.65,x.enablePan=!1,x.enableRotate=!0,x.rotateSpeed=.72,x.minPolarAngle=Math.PI/3,x.maxPolarAngle=Math.PI/2,x.minAzimuthAngle=-1/0,x.maxAzimuthAngle=1/0,x.autoRotate=!M(),x.autoRotateSpeed=.42;let O=0,L=!1,C=null;const V=()=>{C!=null&&(clearTimeout(C),C=null)},H=()=>{V(),!M()&&(C=setTimeout(()=>{x.autoRotate=!0,C=null},K2))},P=()=>{x.autoRotate=!1,V(),O=performance.now()+1e6},q=()=>{H(),O=performance.now()+480};x.addEventListener("start",P),x.addEventListener("end",q);const N=()=>{L=!0,b.style.cursor="grabbing"},R=()=>{L=!1,b.style.cursor="grab"},F=()=>{L||(b.style.cursor="grab")};b.addEventListener("pointerdown",N),b.addEventListener("pointerup",R),b.addEventListener("pointercancel",R),b.addEventListener("pointerleave",F);const he=ce=>{const fe=o.getBoundingClientRect();fe.width<1||fe.height<1||(_.x=(ce.clientX-fe.left)/fe.width*2-1,_.y=(ce.clientY-fe.top)/fe.height*2-1)};o.addEventListener("pointermove",he);const oe=new iT(16777215,.4);g.add(oe);const xe=new vp(16775412,1.42);xe.position.set(4.6,2.35,2.1),g.add(xe);const ye=new vp(13164799,.62);ye.position.set(-3.8,.35,-1.6),g.add(ye);const I=new rT,J=2,Z=6,re=(ce,fe)=>{if(!n||e||!o.isConnected)return;n.updateMatrixWorld(!0);const we=new Vn().setFromObject(n);if(we.isEmpty())return;const ze=new di;we.getBoundingSphere(ze);const Be=ze.center.clone();c=Math.max(ze.radius,.08);const At=Math.max(ce??o.clientWidth,1),wt=Math.max(fe??o.clientHeight,1);x.minDistance=J,x.maxDistance=Z,tC(v,Be,c,At,wt,1.08,J,Z),f.copy(Be),x.target.copy(Be),x.update(),x.saveState()},ve=(ce,fe)=>{if(e){mu(ce);return}n=ce,n.updateMatrixWorld(!0);const we=new Vn().setFromObject(n);if(we.isEmpty()){n.parent&&g.remove(n),mu(n),n=cx(),n.updateMatrixWorld(!0);const B=new Vn().setFromObject(n);if(!B.isEmpty()){const xn=B.getCenter(new X);n.position.sub(xn),n.position.x+=pu.x,n.position.y+=pu.y,n.updateMatrixWorld(!0);const pt=new Vn().setFromObject(n),mt=new di;pt.getBoundingSphere(mt);const Xe=Math.max(mt.radius,.001);n.scale.multiplyScalar(lx/Xe)}n.updateMatrixWorld(!0),a=n.position.y,g.add(n),re();return}const ze=we.getCenter(new X);n.position.sub(ze),n.position.x+=pu.x,n.position.y+=pu.y,n.updateMatrixWorld(!0);const Be=new Vn().setFromObject(n),At=new di;Be.getBoundingSphere(At);const wt=Math.max(At.radius,.001);if(n.scale.multiplyScalar(lx/wt),n.updateMatrixWorld(!0),a=n.position.y,g.add(n),re(),fe==="glb"){const lt=Q2(n);lt&&eC(lt,n)}};new p2().load(u,ce=>{if(e){mu(ce.scene);return}ve(ce.scene,"glb")},void 0,()=>{if(e)return;const ce=cx();ve(ce,"fallback")});const $=()=>{if(!o.isConnected)return;let ce=o.clientWidth,fe=o.clientHeight;(ce<8||fe<8)&&(ce=Math.max(ce,200),fe=Math.max(fe,200)),y.setSize(ce,fe,!1),re(ce,fe)},me=new ResizeObserver(()=>$());me.observe(o),$(),requestAnimationFrame(()=>{requestAnimationFrame($)});const j=()=>{r=requestAnimationFrame(j);const ce=I.getDelta(),fe=I.getElapsedTime(),we=M();n&&(we?n.position.y=a:n.position.y=a+Math.sin(fe)*.2);const ze=c*Z2;p.set(_.x*ze,-_.y*ze*.68,0);const Be=!we&&!L&&performance.now()>O;we?d.lerp(new X(0,0,0),.14):Be?d.lerp(p,.07):d.lerp(new X(0,0,0),.1),x.target.copy(f).add(d),x.update(ce),y.render(g,v)};j();const le=()=>{M()?(x.autoRotate=!1,V()):H()};return E==null||E.addEventListener("change",le),()=>{e=!0,cancelAnimationFrame(r),V(),me.disconnect(),E==null||E.removeEventListener("change",le),x.removeEventListener("start",P),x.removeEventListener("end",q),o.removeEventListener("pointermove",he),b.removeEventListener("pointerdown",N),b.removeEventListener("pointerup",R),b.removeEventListener("pointercancel",R),b.removeEventListener("pointerleave",F),x.dispose(),n&&(g.remove(n),mu(n),n=null),y.dispose(),y.domElement.parentNode===o&&o.removeChild(y.domElement)}}function iC(){const o=dt.useRef(null);return dt.useEffect(()=>{const e=o.current;if(e)return nC(e)},[]),G.jsx("div",{className:"wes-portfolio-3d-shell","aria-hidden":!0,children:G.jsx("div",{id:"portfolio-3d",ref:o,style:{background:"transparent"}})})}const aC=o=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.trim());function sC(){const[o,e]=dt.useState({name:"",email:"",message:""}),[n,a]=dt.useState({}),r=f=>{const{name:d,value:p}=f.target,_=d;e(g=>({...g,[_]:p})),a(g=>({...g,[_]:void 0}))},c=()=>{const f={};return o.name.trim()||(f.name="Informe seu nome."),o.email.trim()?aC(o.email)||(f.email="E-mail inválido."):f.email="Informe seu e-mail.",o.message.trim()||(f.message="Escreva uma mensagem."),a(f),Object.keys(f).length===0},u=f=>{f.preventDefault(),c()};return G.jsxs("form",{className:"contact-form",onSubmit:u,noValidate:!0,children:[G.jsxs("label",{className:"contact-form-field",children:[G.jsx("span",{className:"sr-only",children:"Nome"}),G.jsx("input",{name:"name",type:"text",placeholder:"Nome",autoComplete:"name",value:o.name,onChange:r,className:n.name?"input-error":void 0,"aria-invalid":n.name?!0:void 0,"aria-describedby":n.name?"contact-name-error":void 0}),n.name?G.jsx("span",{id:"contact-name-error",className:"error-text",role:"alert",children:n.name}):null]}),G.jsxs("label",{className:"contact-form-field",children:[G.jsx("span",{className:"sr-only",children:"Email"}),G.jsx("input",{name:"email",type:"email",placeholder:"Email",autoComplete:"email",value:o.email,onChange:r,className:n.email?"input-error":void 0,"aria-invalid":n.email?!0:void 0,"aria-describedby":n.email?"contact-email-error":void 0}),n.email?G.jsx("span",{id:"contact-email-error",className:"error-text",role:"alert",children:n.email}):null]}),G.jsxs("label",{className:"contact-form-field",children:[G.jsx("span",{className:"sr-only",children:"Mensagem"}),G.jsx("textarea",{name:"message",placeholder:"Sua mensagem",rows:5,value:o.message,onChange:r,className:n.message?"input-error":void 0,"aria-invalid":n.message?!0:void 0,"aria-describedby":n.message?"contact-message-error":void 0}),n.message?G.jsx("span",{id:"contact-message-error",className:"error-text",role:"alert",children:n.message}):null]}),G.jsx("button",{type:"submit",className:"contact-form-submit",children:"Enviar →"})]})}function rC(){const[o,e]=dt.useState(null),n=()=>{window.open(`https://wa.me/${js.whatsappE164}`,"_blank","noopener,noreferrer")},a=async()=>{try{await navigator.clipboard.writeText(js.email),e("E-mail copiado!"),window.setTimeout(()=>e(null),2500)}catch{e("Não foi possível copiar."),window.setTimeout(()=>e(null),2500)}},r=()=>{window.open(js.github,"_blank","noopener,noreferrer")};return G.jsxs("div",{className:"contact-links",children:[G.jsx("button",{type:"button",onClick:n,children:"WhatsApp"}),G.jsx("button",{type:"button",onClick:a,children:"Copiar E-mail"}),G.jsx("button",{type:"button",onClick:r,children:"SoftwareHouse"}),o?G.jsx("p",{className:"contact-links-hint",role:"status","aria-live":"polite",children:o}):null]})}function oC(){return G.jsxs("section",{className:"contact scroll-mt-28",id:"contact","aria-labelledby":"contact-title",children:[G.jsxs("div",{className:"contact-header",children:[G.jsx("span",{className:"contact-header-label",children:"VAMOS CONVERSAR!"}),G.jsx("h2",{id:"contact-title",children:"Entre em contato"}),G.jsx("p",{children:"Se você deseja discutir um projeto, fazer uma parceria ou apenas bater um papo..."})]}),G.jsxs("div",{className:"contact-content",children:[G.jsx(rC,{}),G.jsx(sC,{})]})]})}const lC=[{label:"Home",href:"#home"},{label:"Sobre",href:"#about"},{label:"Projetos",href:"#work"},{label:"Contato",href:"#contact"}];function cC(){return G.jsxs("footer",{className:"footer",children:[G.jsxs("div",{className:"footer-top",children:[G.jsxs("div",{children:[G.jsx("h3",{children:"Wesley Cruz"}),G.jsx("p",{children:"Transformando ideias em experiências digitais excepcionais com precisão e criatividade."})]}),G.jsx("div",{className:"footer-right",children:G.jsx("a",{href:`mailto:${js.email}`,children:G.jsx("span",{children:js.email})})})]}),G.jsx("hr",{}),G.jsxs("div",{className:"footer-bottom",children:[G.jsx("nav",{"aria-label":"Navegação do rodapé",children:lC.map(({label:o,href:e})=>G.jsx("a",{href:e,children:o},e))}),G.jsxs("p",{children:["© ",new Date().getFullYear()," Wesley Cruz"]})]})]})}function iy(o){const e=o.trim();if(/^https?:\/\//i.test(e))return e;const n=e.replace(/^\/+/,""),a="/wes-portifolio-main/";return a.endsWith("/")?`${a}${n}`:`${a}/${n}`}const uC=[{id:"wes-portfolio",title:"wes — portfolio",description:"terminal-first interface. projects, stack, contact — minimal product surface.",category:"web",tags:["PROJETO REAL","REACT","VITE"],coverImage:"/screenshots/wes-portfolio.jpg",link:kM,status:"live"},{id:"termo",title:"TERMO",description:"Portuguese Wordle-style word game — React + TypeScript; ships as a standalone app alongside the portfolio.",category:"game",tags:["PROJETO REAL","REACT","TYPESCRIPT"],coverImage:"/screenshots/termo.gif",status:"live"},{id:"barbearia-da-tropa",title:"Barbearia da Tropa",description:"Projeto em desenvolvimento com foco em presença digital, identidade visual e experiência moderna para barbearia.",category:"web",tags:["EM DESENVOLVIMENTO","WEB","IDENTIDADE"],coverImage:"/screenshots/barbearia-da-tropa.png",status:"in_progress",accessLabel:"Em desenvolvimento"}],pl=uC,ux=[{id:"react",name:"React",icon:"react",iconSlug:"react",brandHex:"61DAFB",description:"Interfaces declarativas, componentização e SPA com hooks e ecossistema moderno para produtos web.",tags:["Componentes","Hooks","SPA","UI"],experience:"2 anos",knowledge:88},{id:"typescript",name:"TypeScript",icon:"typescript",iconSlug:"typescript",brandHex:"3178C6",description:"Uso avançado do TypeScript para tipagem segura e escalável em aplicações frontend e backend.",tags:["React","Node.js","NestJS"],experience:"2 anos",knowledge:86},{id:"javascript",name:"JavaScript",icon:"javascript",iconSlug:"javascript",brandHex:"F7DF1E",description:"Linguagem base da web: lógica no browser e no Node, APIs modernas e integração com o ecossistema.",tags:["ES6+","Web","Front-end","Node"],experience:"2 anos",knowledge:87},{id:"html",name:"HTML",icon:"html",iconSlug:"html5",brandHex:"E34F26",description:"Estrutura semântica de páginas, acessibilidade e base sólida para qualquer interface web.",tags:["Semântica","Acessibilidade","Markup","Web"],experience:"2 anos",knowledge:85},{id:"css",name:"CSS",icon:"css",iconSlug:"css",brandHex:"1572B6",description:"Estilização, layout responsivo, animações e design systems alinhados ao produto.",tags:["Layout","Responsivo","Animações","Design"],experience:"2 anos",knowledge:86},{id:"node",name:"Node.js",icon:"node",iconSlug:"nodedotjs",brandHex:"339933",description:"Runtime JavaScript no servidor: APIs, tooling e automações com o mesmo ecossistema do front.",tags:["APIs","Backend","Tooling","npm"],experience:"2 anos",knowledge:82},{id:"firebase",name:"Firebase",icon:"firebase",iconSlug:"firebase",brandHex:"FFCA28",description:"Auth, Firestore, hosting e serviços gerenciados para acelerar MVPs e apps em produção.",tags:["Auth","Firestore","Hosting","BaaS"],experience:"2 anos",knowledge:80},{id:"github",name:"GitHub",icon:"github",iconSlug:"github",brandHex:"FFFFFF",description:"Repositórios, revisão de código, Actions e fluxo de trabalho colaborativo em projetos reais.",tags:["Git","Actions","PRs","Colaboração"],experience:"2 anos",knowledge:83},{id:"python",name:"Python",icon:"python",iconSlug:"python",brandHex:"3776AB",description:"Scripts, automações e peças de backend quando a clareza e a produtividade são prioridade.",tags:["Scripts","Automação","APIs","Produtividade"],experience:"2 anos",knowledge:81}],fx="https://github.com/Wesley-0001",fC=["Developer","Desenvolvedor Full Stack","Front-end Developer","Back-end Developer"],hC=["React","TypeScript","JavaScript","CSS","Vite","Firebase"],dC=48,pC=32,mC=2800,gC=480,_C=["home","about","work","skills","education","contact"];function vC(o){const[e,n]=dt.useState(0);return dt.useEffect(()=>{const a=()=>{const r=window.innerHeight*.42;let c=0,u=Number.POSITIVE_INFINITY;o.forEach((f,d)=>{const p=document.getElementById(f);if(!p)return;const _=p.getBoundingClientRect(),g=_.top+_.height*.35,v=Math.abs(g-r);_.bottom>80&&_.top<window.innerHeight-80&&v<u&&(u=v,c=d)}),n(c)};return a(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[o]),e}function xC(o){var e;(e=document.getElementById(o))==null||e.scrollIntoView({behavior:"smooth"})}const yC=[{id:"home",label:"Início"},{id:"about",label:"Sobre mim"},{id:"work",label:"Ver Projetos"},{id:"skills",label:"Habilidades"},{id:"education",label:"Educação"},{id:"contact",label:"Contato"}];function SC({active:o,totalPages:e,onSelect:n}){return e<=1?null:G.jsx("div",{className:"mt-8 flex items-center justify-center gap-2.5",role:"tablist","aria-label":"Projetos em destaque",children:Array.from({length:e},(a,r)=>G.jsx("button",{type:"button",role:"tab","aria-selected":o===r,className:"group relative flex h-2 w-2 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 outline-none transition-[transform] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/35",onClick:()=>n(r),"aria-label":`Projeto ${r+1} de ${e}`,children:o===r?G.jsx("span",{"aria-hidden":!0,className:"pointer-events-none absolute left-1/2 top-1/2 h-2 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/95 opacity-100 shadow-[0_0_12px_rgba(52,211,153,0.35)] transition-[opacity,transform] duration-300 ease-out"}):G.jsx("span",{"aria-hidden":!0,className:"pointer-events-none h-2 w-2 scale-95 rounded-full bg-white/12 opacity-50 transition-[background-color,opacity] duration-300 ease-out group-hover:bg-white/22 group-hover:opacity-80"})},r))})}function MC(o){switch(o){case"wes-portfolio":return"bg-gradient-to-br from-[#0c1822] via-[#0d1912] to-[#030506]";case"termo":return"bg-gradient-to-br from-[#1a1040]/90 via-[#0f172a] to-[#030506]";case"barbearia-da-tropa":return"bg-gradient-to-br from-[#2a1810] via-[#141110] to-[#030506]";default:return"bg-gradient-to-br from-neutral-900 to-black"}}function Dd({project:o,emphasis:e}){const[n,a]=dt.useState(!1);dt.useEffect(()=>{a(!1)},[o.id]);const c=typeof o.coverImage=="string"&&o.coverImage.length>0&&!n,u=e==="center"?"border-white/[0.08] shadow-[0_12px_44px_rgba(0,0,0,0.32),0_0_32px_rgba(56,189,248,0.04)]":"border-white/[0.06] opacity-[0.44] transition duration-300 hover:opacity-[0.62]";return G.jsxs("div",{className:`relative h-full w-full overflow-hidden rounded-[1.35rem] border ${u}`,children:[c?G.jsx("img",{src:iy(o.coverImage),alt:"",className:"absolute inset-0 z-[1] h-full w-full object-cover object-center",loading:"lazy",decoding:"async",sizes:e==="center"?"(max-width: 768px) min(92vw, 640px), min(600px, 45vw)":"(max-width: 768px) 0px, min(240px, 22vw)",onError:()=>a(!0)},o.coverImage):G.jsx("div",{className:`absolute inset-0 z-0 ${MC(o.id)}`,"aria-hidden":!0}),c?null:G.jsx("div",{className:"pointer-events-none absolute inset-0 z-[2] opacity-[0.11]",style:{backgroundImage:`radial-gradient(1px 1px at 18% 28%, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 78% 72%, rgba(255,255,255,0.75), transparent)`,backgroundSize:"38px 38px"},"aria-hidden":!0}),G.jsx("div",{className:"pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-black/60 via-black/15 to-transparent","aria-hidden":!0}),G.jsx("p",{className:`absolute bottom-0 left-0 right-0 z-[4] px-4 pb-3.5 pt-10 text-left font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] ${e==="center"?"text-base sm:text-lg md:text-[1.35rem]":"text-[0.65rem] leading-snug sm:text-[0.72rem]"}`,children:o.title})]})}function bC({active:o,onSelect:e}){const n=pl.length,a=()=>e((o-1+n)%n),r=()=>e((o+1)%n),c=b=>(o+b+n*100)%n,u=pl[c(-1)],f=pl[o],d=pl[c(1)],p=b=>String(pl.findIndex(E=>E.id===b)+1).padStart(2,"0"),_=f.status==="in_progress",g=dt.useRef(null),v=b=>{var E;g.current=((E=b.targetTouches[0])==null?void 0:E.clientX)??null},y=b=>{var x;if(g.current==null||n<=1)return;const E=(x=b.changedTouches[0])==null?void 0:x.clientX;if(E===void 0)return;const M=E-g.current;g.current=null,!(Math.abs(M)<52)&&(M<0?r():a())};return G.jsxs("div",{className:"mt-10",role:"region","aria-roledescription":"carousel","aria-label":"Projetos em destaque",children:[G.jsxs("div",{className:"relative px-2 pb-1 pt-0 [touch-action:pan-y] sm:px-14 md:px-[4.25rem]",onTouchStart:v,onTouchEnd:y,children:[G.jsx("button",{type:"button",onClick:a,disabled:n<=1,className:"absolute left-0 top-1/2 z-30 flex h-11 min-h-[44px] w-11 min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-900 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:bg-neutral-100 active:scale-95 disabled:pointer-events-none disabled:opacity-0 sm:left-0 sm:h-10 sm:min-h-0 sm:w-10 sm:min-w-0","aria-label":"Projeto anterior",children:G.jsx(wM,{className:"h-5 w-5","aria-hidden":!0})}),G.jsx("button",{type:"button",onClick:r,disabled:n<=1,className:"absolute right-0 top-1/2 z-30 flex h-11 min-h-[44px] w-11 min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-900 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:bg-neutral-100 active:scale-95 disabled:pointer-events-none disabled:opacity-0 sm:right-0 sm:h-10 sm:min-h-0 sm:w-10 sm:min-w-0","aria-label":"Próximo projeto",children:G.jsx(CM,{className:"h-5 w-5","aria-hidden":!0})}),G.jsxs("div",{className:"flex items-center justify-center gap-3 md:gap-5 lg:gap-8",children:[G.jsx("button",{type:"button",onClick:()=>e(c(-1)),className:"hidden w-[min(30vw,200px)] shrink-0 scale-[0.92] md:block md:w-[min(22vw,220px)] md:scale-[0.88] lg:w-[240px]","aria-label":`Ver projeto: ${u.title}`,children:G.jsx("div",{className:"aspect-[16/10] w-full",children:G.jsx(Dd,{project:u,emphasis:"side"})})}),G.jsx("div",{className:"relative z-20 w-full max-w-[min(92vw,600px)] shrink-0 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",children:G.jsx("div",{className:"aspect-[16/10] w-full",children:G.jsx("div",{className:"h-full w-full",children:G.jsx(Dd,{project:f,emphasis:"center"})})})}),G.jsx("button",{type:"button",onClick:()=>e(c(1)),className:"hidden w-[min(30vw,200px)] shrink-0 scale-[0.92] md:block md:w-[min(22vw,220px)] md:scale-[0.88] lg:w-[240px]","aria-label":`Ver projeto: ${d.title}`,children:G.jsx("div",{className:"aspect-[16/10] w-full",children:G.jsx(Dd,{project:d,emphasis:"side"})})})]})]}),G.jsxs("div",{className:"mx-auto mt-9 max-w-2xl px-1 text-center sm:mt-10",children:[G.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:f.tags.map(b=>G.jsx("span",{className:"wes-label-mono rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-[0.62rem] font-medium tracking-[0.12em] text-neutral-300/95",children:b},b))}),G.jsx("h3",{className:"mt-5 text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]",children:f.title}),G.jsx("p",{className:"mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 md:text-[0.95rem]",children:f.description}),G.jsx("div",{className:"mt-6 flex flex-wrap items-center justify-center gap-4",children:f.link?G.jsxs("a",{href:f.link,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400/95 transition hover:text-emerald-300",children:["Abrir projeto",G.jsx(TM,{size:16,"aria-hidden":!0})]}):_?G.jsx("p",{className:"wes-label-mono text-[0.72rem] text-neutral-500",children:f.accessLabel??"Disponível em breve"}):G.jsxs("p",{className:"wes-label-mono text-[0.72rem] text-neutral-600",children:["Acesso pelo terminal:"," ",G.jsxs("span",{className:"text-neutral-400",children:["open ",p(f.id)]})]})})]}),G.jsx(SC,{active:o,totalPages:n,onSelect:e})]})}function EC(o,e){const[n,a]=dt.useState(""),r=dt.useRef(0),c=dt.useRef(0),u=dt.useRef("typing"),f=dt.useRef(null);return dt.useEffect(()=>{if(!e){a(o[0]??"");return}let d=!1;const p=()=>{f.current!=null&&(clearTimeout(f.current),f.current=null)},_=(v,y)=>{p(),f.current=setTimeout(()=>{d||v()},y)},g=()=>{if(d)return;const v=o[r.current%o.length]??"";u.current==="typing"?c.current<v.length?(c.current+=1,a(v.slice(0,c.current)),_(g,dC)):(u.current="pause",_(()=>{u.current="deleting",g()},mC)):u.current==="deleting"&&(c.current>0?(c.current-=1,a(v.slice(0,c.current)),_(g,pC)):(r.current=(r.current+1)%o.length,u.current="typing",_(g,gC)))};return c.current=0,u.current="typing",r.current=0,a(""),g(),()=>{d=!0,p()}},[e,o]),n}function hx({slug:o,hex:e,className:n,title:a}){const[r,c]=dt.useState(!1),u=`https://cdn.simpleicons.org/${o}/${e}`;return dt.useEffect(()=>{c(!1)},[o,e]),r?G.jsx("span",{className:`inline-flex items-center justify-center text-white/40 ${n??""}`,title:a??o,"aria-hidden":!0,children:G.jsx(NM,{className:"h-[55%] w-[55%] shrink-0",strokeWidth:1.35})}):G.jsx("img",{src:u,alt:"",title:a,className:n,loading:"lazy",decoding:"async",onError:()=>c(!0)})}function TC(o){const e=o.replace("#","").trim(),n=e.length===3?e.split("").map(r=>r+r).join(""):e,a=parseInt(n,16);return{r:a>>16&255,g:a>>8&255,b:a&255}}function AC(){const[o,e]=dt.useState(ux[0]),[n,a]=dt.useState(!0),[r,c]=dt.useState(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1),[u,f]=dt.useState(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1),d=dt.useRef(null);dt.useEffect(()=>{const y=window.matchMedia("(prefers-reduced-motion: reduce)");c(y.matches);const b=()=>c(y.matches);return y.addEventListener("change",b),()=>y.removeEventListener("change",b)},[]),dt.useEffect(()=>{const y=d.current;if(!y)return;if(r){f(!0);return}const b=new IntersectionObserver(([E])=>{E!=null&&E.isIntersecting&&f(!0)},{root:null,rootMargin:"100px 0px 120px 0px",threshold:[0,.08,.18]});return b.observe(y),()=>b.disconnect()},[r]);const p=r?0:320,_=y=>{if(y.id!==o.id){if(r){e(y);return}a(!1),window.setTimeout(()=>{e(y),a(!0)},p)}},g=TC(o.brandHex),v=g.r>248&&g.g>248&&g.b>248;return G.jsxs("section",{ref:d,id:"skills",className:`wes-skills-section relative isolate mt-12 min-h-[min(92svh,880px)] scroll-mt-28 border-t border-white/[0.05] pt-[clamp(5rem,11vw,7.5rem)] pb-[clamp(5.5rem,12vw,9rem)] md:mt-16 md:pt-[clamp(6rem,12vw,8.5rem)] md:pb-[clamp(6rem,11vw,9.5rem)] ${u?"wes-skills-section--inview":""}`,"aria-labelledby":"wes-skills-title",children:[G.jsx("div",{className:"wes-skills-section-pattern pointer-events-none absolute inset-0 z-[1]","aria-hidden":!0}),G.jsxs("div",{className:"wes-skills-inner relative z-10 -mx-[clamp(0.75rem,4vw,2.5rem)] px-[clamp(1rem,4vw,2.25rem)] sm:-mx-[clamp(1rem,5vw,3rem)] sm:px-[clamp(1.25rem,4.5vw,3rem)] lg:-mx-[clamp(1.5rem,6vw,4.5rem)] lg:px-[clamp(1.75rem,5vw,4rem)]",children:[G.jsxs("header",{className:"wes-skills-header relative z-10 mx-auto max-w-[min(100%,44rem)] text-center",children:[G.jsx("p",{className:"wes-skills-eyebrow wes-label-mono text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-neutral-500",children:"Tecnologias que uso"}),G.jsx("h2",{id:"wes-skills-title",className:"mt-4 text-[clamp(1.9rem,4.2vw,2.75rem)] font-semibold tracking-[-0.038em] text-white",children:"Habilidades e Tecnologias"}),G.jsx("p",{className:"wes-skills-subtitle mx-auto mt-5 max-w-[36rem] text-[0.9375rem] leading-snug text-neutral-500 md:mt-6 md:text-[0.97rem] md:leading-relaxed",children:"Aqui estão algumas das tecnologias que tenho experiência e conhecimento. Clique em cada uma delas para ver mais detalhes."})]}),G.jsxs("div",{className:"wes-skills-grid relative z-10 mt-[clamp(3.25rem,7.5vw,5rem)] w-full min-w-0",children:[G.jsx("div",{className:"flex w-full min-w-0 flex-col items-center justify-center justify-self-center xl:justify-self-stretch","aria-live":"polite","aria-label":`Tecnologia em destaque: ${o.name}`,children:G.jsx("div",{className:`flex w-full max-w-[min(100%,960px)] flex-col items-center justify-center ${r?"":"wes-skills-float-wrap"}`,children:G.jsxs("div",{className:"wes-skills-stage relative w-full overflow-hidden rounded-[2.5rem] px-7 pb-6 pt-8 sm:rounded-[2.65rem] sm:px-9 sm:pb-7 sm:pt-9 md:px-10 md:pb-7 md:pt-9",children:[G.jsx("div",{className:"pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-[0.14]",style:{background:"linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 38%)"},"aria-hidden":!0}),G.jsxs("div",{className:"relative z-[1] flex min-h-0 w-full flex-1 flex-col justify-between",children:[G.jsx("div",{className:"relative flex min-h-0 w-full flex-1 flex-col items-center justify-center pb-2",children:G.jsx("div",{className:"group wes-skills-hero-wrap relative z-[1] flex h-[132px] w-[132px] shrink-0 items-center justify-center sm:h-[140px] sm:w-[140px]",children:G.jsx("div",{className:`flex h-full w-full items-center justify-center rounded-[1.35rem] p-[1.35rem] shadow-[0_16px_48px_rgba(0,0,0,0.45)] wes-skills-hero-surface ${n?"wes-skills-hero-surface--on":"wes-skills-hero-surface--off"}`,style:{backgroundColor:v?"rgb(30 41 59)":`#${o.brandHex}`},children:G.jsx(hx,{slug:o.iconSlug,hex:v?o.brandHex:"FFFFFF",className:`wes-skills-hero-icon h-full w-full origin-center object-contain ${!r&&n?"wes-skills-hero-icon--breathe":""}`,title:o.name})})})}),G.jsx("div",{className:"wes-skills-stage-tabs w-full shrink-0 border-t border-white/[0.08] pt-4 sm:pt-5",role:"tablist","aria-label":"Selecionar tecnologia",children:G.jsx("div",{className:"wes-skills-tab-row mx-auto flex w-full max-w-full flex-nowrap items-center justify-center gap-2.5 overflow-x-auto overflow-y-visible py-1.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 md:gap-3.5 [&::-webkit-scrollbar]:hidden",children:ux.map(y=>{const b=y.id===o.id;return G.jsxs("button",{type:"button",role:"tab","aria-selected":b,"aria-controls":"wes-skills-detail",id:`wes-skill-tab-${y.id}`,onClick:()=>_(y),className:`wes-skills-tab flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.65rem] border border-transparent bg-transparent transition-[opacity,transform,box-shadow,background-color,border-color,filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/35 sm:h-10 sm:w-10 ${b?"wes-skills-tab--active opacity-100":"opacity-[0.34] hover:border-white/[0.06] hover:bg-white/[0.04] hover:opacity-[0.58] active:opacity-[0.72]"}`,title:y.name,children:[G.jsx(hx,{slug:y.iconSlug,hex:y.brandHex,className:`h-[1.12rem] w-[1.12rem] object-contain sm:h-[1.2rem] sm:w-[1.2rem] ${r?"":"wes-skills-tab-icon"}`}),G.jsx("span",{className:"sr-only",children:y.name})]},y.id)})})})]})]})})}),G.jsx("div",{id:"wes-skills-detail",role:"tabpanel","aria-labelledby":`wes-skill-tab-${o.id}`,className:"flex min-w-0 w-full flex-col justify-center border-0 bg-transparent px-0.5 py-1 text-center sm:px-1 xl:max-w-none xl:min-w-0 xl:px-0 xl:text-left",children:G.jsxs("div",{className:`wes-skills-detail-inner flex flex-col gap-0 ${n?"wes-skills-detail-inner--on":"wes-skills-detail-inner--off"}`,children:[G.jsx("h3",{className:"text-[clamp(1.85rem,2.8vw,2.45rem)] font-semibold tracking-[-0.042em] text-white",children:o.name}),G.jsx("p",{className:"mx-auto mt-5 max-w-[26rem] text-[0.96rem] leading-[1.75] text-neutral-400/95 xl:mx-0 xl:mt-6 xl:max-w-[28rem] xl:text-[1.01rem] xl:leading-[1.82]",children:o.description}),G.jsx("ul",{className:"mt-8 flex flex-wrap justify-center gap-2 md:mt-9 md:gap-2.5 xl:mt-10 xl:justify-start","aria-label":"Tags relacionadas",children:o.tags.map(y=>G.jsx("li",{children:G.jsx("span",{className:"wes-skills-tag wes-label-mono",children:y})},y))}),G.jsx("div",{className:"mt-10 border-t border-white/[0.06] pt-9 md:mt-11 md:pt-10",children:G.jsxs("div",{className:"flex flex-col gap-8 md:gap-9",children:[G.jsxs("p",{className:"text-[0.98rem] leading-snug text-neutral-400 md:text-[1.02rem]",children:[G.jsx("span",{className:"text-neutral-500",children:"Experiência:"})," ",G.jsx("span",{className:"font-semibold tracking-[-0.02em] text-neutral-50",children:o.experience})]}),G.jsxs("div",{className:"w-full min-w-0",children:[G.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[G.jsx("span",{className:"wes-label-mono text-[0.58rem] font-medium uppercase tracking-[0.22em] text-neutral-500/85",children:"Conhecimento"}),G.jsxs("span",{className:"wes-label-mono text-[0.74rem] tabular-nums tracking-tight text-neutral-300/95",children:[o.knowledge,"%"]})]}),G.jsx("div",{className:"wes-skills-bar-track mt-5 h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06] sm:h-[3px]",role:"progressbar","aria-valuenow":o.knowledge,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`Conhecimento em ${o.name}: ${o.knowledge} por cento`,children:G.jsx("div",{className:"wes-skills-bar-fill h-full max-w-full rounded-full",style:{width:`${o.knowledge}%`,transition:r?"none":"width 0.65s cubic-bezier(0.22, 1, 0.36, 1)"}})})]})]})})]})})]})]})]})}function wC({onBack:o}){const[e,n]=dt.useState(!1),[a,r]=dt.useState(!1),[c,u]=dt.useState(!1),f=EC(fC,!c);dt.useEffect(()=>{const b=window.matchMedia("(prefers-reduced-motion: reduce)");u(b.matches);const E=()=>u(b.matches);return b.addEventListener("change",E),()=>b.removeEventListener("change",E)},[]),dt.useEffect(()=>{const b=requestAnimationFrame(()=>{requestAnimationFrame(()=>n(!0))});return()=>cancelAnimationFrame(b)},[]);const d=()=>{o&&(a||(r(!0),window.setTimeout(()=>o(),280)))},[p,_]=dt.useState(0),[g,v]=dt.useState(!1),y=vC(_C);return G.jsxs("div",{className:`wes-landing-root relative min-h-screen w-full text-neutral-100 transition-[opacity,background-color] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] will-change-[opacity] ${g?"bg-[#05070d]":"bg-black"} ${e&&!a?"opacity-100":"opacity-0"}`,children:[G.jsx("style",{children:`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap");
        .wes-landing-root {
          font-family: "DM Sans", ui-sans-serif, system-ui, sans-serif;
          font-size: 16px;
        }
        .wes-top-nav {
          font-family: "DM Sans", ui-sans-serif, system-ui, sans-serif;
        }
        .wes-label-mono {
          font-family: "IBM Plex Mono", ui-monospace, monospace;
        }
        @keyframes wes-hero-line {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .wes-hero-enter {
          animation: wes-hero-line 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes wes-hero-name-in {
          0% {
            opacity: 0;
            transform: translateY(0.5rem);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .wes-hero-name-gradient {
          display: inline-block;
          max-width: 100%;
          background-image: linear-gradient(
            118deg,
            #f8fafc 0%,
            #e8edf2 28%,
            #cbd5e1 58%,
            #94a3b8 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: wes-hero-name-in 1s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 0.12s;
        }
        @keyframes wes-hero-orbit {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -2px, 0); }
        }
        .wes-hero-orbit-card {
          animation: wes-hero-orbit 7s ease-in-out infinite;
        }
        @keyframes wes-hero-monitor {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -2px, 0); }
        }
        .wes-hero-monitor-wrap {
          animation: wes-hero-monitor 9s ease-in-out infinite;
        }
        @keyframes wes-hero-glow {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 0.92; transform: scale(1.02); }
        }
        .wes-hero-monitor-glow-inner {
          animation: wes-hero-glow 10s ease-in-out infinite;
          transform-origin: center center;
        }
        /* Seção skills — véu suave + padrão local mais discreto */
        .wes-skills-section-pattern {
          background-image:
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.09) 1px, transparent 0),
            linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
          background-size:
            32px 32px,
            100% 56px,
            56px 100%;
          background-position: 0 0, 0 0, 0 0;
          opacity: 0.35;
          mask-image: radial-gradient(
            ellipse 85% 70% at 50% 45%,
            #000 20%,
            transparent 72%
          );
          -webkit-mask-image: radial-gradient(
            ellipse 85% 70% at 50% 45%,
            #000 20%,
            transparent 72%
          );
        }
        .wes-skills-section::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -4rem;
          bottom: -5rem;
          width: min(132%, 100vw);
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse 88% 72% at 50% 42%,
              rgba(5, 7, 13, 0.42) 0%,
              rgba(5, 7, 13, 0.18) 48%,
              transparent 78%
            );
        }
        /* Ponte visual com a seção anterior — sem “corte seco” */
        .wes-skills-section::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: min(28vh, 220px);
          z-index: 0;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(5, 7, 13, 0.22) 0%,
            rgba(5, 7, 13, 0) 100%
          );
        }
        .wes-skills-section:not(.wes-skills-section--inview) {
          opacity: 0;
          transform: translate3d(0, 32px, 0);
        }
        .wes-skills-section--inview {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition:
            opacity 0.95s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.95s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes wes-skills-stage-float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -6px, 0);
          }
        }
        .wes-skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          justify-items: center;
          gap: clamp(2.75rem, 7vw, 4.25rem);
          width: 100%;
          max-width: min(1320px, 100%);
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 1280px) {
          .wes-skills-grid {
            grid-template-columns: minmax(0, 1.12fr) minmax(300px, 0.88fr);
            gap: clamp(2.25rem, 3.8vw, 3.75rem);
            align-items: center;
            justify-items: stretch;
            max-width: min(1120px, 100%);
          }
        }
        .wes-skills-float-wrap {
          width: 100%;
          max-width: min(100%, 960px);
          animation: wes-skills-stage-float 5.5s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes wes-skills-tab-icon-sway {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -2px, 0);
          }
        }
        .wes-skills-tab-icon {
          display: block;
          animation: wes-skills-tab-icon-sway 4.4s ease-in-out infinite;
        }
        .wes-skills-tab:nth-child(3n + 1) .wes-skills-tab-icon {
          animation-delay: 0s;
        }
        .wes-skills-tab:nth-child(3n + 2) .wes-skills-tab-icon {
          animation-delay: 0.4s;
        }
        .wes-skills-tab:nth-child(3n + 3) .wes-skills-tab-icon {
          animation-delay: 0.8s;
        }
        /* Palco — fundo mate (sem halo de marca atrás do hero) */
        .wes-skills-stage {
          --wes-skills-stage-max: 960px;
          display: flex;
          flex-direction: column;
          aspect-ratio: 1.4 / 1;
          max-width: min(100%, var(--wes-skills-stage-max));
          min-height: 0;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          background: radial-gradient(
            ellipse 92% 80% at 50% 26%,
            rgba(72, 80, 96, 0.24) 0%,
            rgba(34, 40, 54, 0.52) 46%,
            rgba(12, 16, 26, 0.92) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.032);
          box-shadow:
            0 56px 128px -32px rgba(0, 0, 0, 0.62),
            0 26px 64px -22px rgba(0, 0, 0, 0.42),
            0 0 0 0.5px rgba(255, 255, 255, 0.018),
            inset 0 1px 0 rgba(255, 255, 255, 0.048),
            inset 0 -22px 56px -28px rgba(0, 0, 0, 0.38);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .wes-skills-hero-wrap {
          width: 132px;
          height: 132px;
        }
        @media (min-width: 640px) {
          .wes-skills-hero-wrap {
            width: 140px;
            height: 140px;
          }
        }
        .wes-skills-stage-tabs {
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }
        .wes-skills-hero-icon {
          filter: brightness(0.9) saturate(1.08) contrast(1.03)
            drop-shadow(0 10px 28px rgba(0, 0, 0, 0.42));
          transition: transform 0.4s ease, filter 0.4s ease;
        }
        @keyframes wes-skills-hero-icon-breathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.012);
          }
        }
        .wes-skills-hero-icon--breathe {
          animation: wes-skills-hero-icon-breathe 3.5s ease-in-out infinite;
        }
        .group:hover .wes-skills-hero-icon {
          animation: none;
          transform: scale(1.02);
          filter: brightness(0.94) saturate(1.1) contrast(1.04)
            drop-shadow(0 12px 32px rgba(0, 0, 0, 0.45));
        }
        .wes-skills-tab--active {
          transform: scale(1.03);
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07);
        }
        .wes-skills-tab:not(.wes-skills-tab--active) .wes-skills-tab-icon {
          filter: grayscale(1) brightness(0.72) saturate(0.85) contrast(0.96);
        }
        .wes-skills-tab--active .wes-skills-tab-icon {
          filter: none;
        }
        .wes-skills-bar-fill {
          background: linear-gradient(90deg, #6ba3ff, #8ec8ff);
        }
        /* Vitrine: card fixo — só o conteúdo interno faz fade + leve translateY/scale (sem loop, sem rotate) */
        .wes-skills-hero-surface {
          transition: opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .wes-skills-hero-surface--off {
          opacity: 0;
          transform: translateY(4px) scale(0.985);
        }
        .wes-skills-hero-surface--on {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .wes-skills-detail-inner {
          transition: opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .wes-skills-detail-inner--off {
          opacity: 0;
          transform: translateY(4px) scale(0.985);
        }
        .wes-skills-detail-inner--on {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .wes-skills-tag {
          display: inline-flex;
          align-items: center;
          min-height: 1.85rem;
          padding: 0.4rem 0.85rem;
          border-radius: 0.45rem;
          font-size: 0.65625rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: rgba(214, 223, 235, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(8, 12, 22, 0.55);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }
        .wes-skills-bar-track {
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.045);
        }
        .wes-skills-subtitle {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        @media (prefers-reduced-motion: reduce) {
          .wes-hero-orbit-card,
          .wes-hero-monitor-wrap,
          .wes-hero-monitor-glow-inner {
            animation: none !important;
          }
          .wes-skills-float-wrap {
            animation: none !important;
          }
          .wes-skills-tab-icon {
            animation: none !important;
          }
          .wes-skills-section:not(.wes-skills-section--inview),
          .wes-skills-section--inview {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .wes-skills-hero-icon--breathe {
            animation: none !important;
          }
          .group:hover .wes-skills-hero-icon {
            transform: none !important;
          }
          .wes-skills-tab--active {
            transform: none !important;
          }
          .wes-skills-hero-surface,
          .wes-skills-detail-inner {
            transition: none !important;
          }
          .wes-hero-name-gradient {
            animation: none !important;
            filter: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}),G.jsxs("div",{className:"pointer-events-none fixed inset-0 z-0 h-full min-h-screen w-full overflow-hidden","aria-hidden":!0,children:[g?G.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(61,184,196,0.09),transparent_50%),radial-gradient(ellipse_70%_50%_at_100%_30%,rgba(123,181,49,0.06),transparent_45%),radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(160,75,115,0.05),transparent_40%)]"}):null,G.jsx(XM,{alternateBg:g,className:"absolute inset-0 h-full w-full opacity-[0.55]"}),G.jsx("div",{className:`absolute inset-0 transition-opacity duration-500 ${g?"opacity-25":"opacity-[0.18]"}`,style:{backgroundImage:`
              radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.45) 0, transparent 1px),
              radial-gradient(1px 1px at 72% 55%, rgba(255,255,255,0.35) 0, transparent 1px),
              radial-gradient(1px 1px at 40% 88%, rgba(255,255,255,0.3) 0, transparent 1px),
              radial-gradient(1px 1px at 88% 12%, rgba(255,255,255,0.28) 0, transparent 1px),
              radial-gradient(1px 1px at 25% 65%, rgba(255,255,255,0.25) 0, transparent 1px),
              radial-gradient(1px 1px at 55% 30%, rgba(255,255,255,0.22) 0, transparent 1px)
            `,backgroundSize:"100% 100%"}}),G.jsx("div",{className:`pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.034)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_88%_72%_at_48%_38%,black,transparent)] blur-[0.35px] transition-opacity duration-500 ${g?"opacity-[0.22]":"opacity-0"}`}),G.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"})]}),o?G.jsx("button",{type:"button",onClick:d,className:"wes-label-mono fixed top-4 right-4 z-[60] px-4 py-2 text-sm font-medium tracking-wide rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-md text-neutral-200/95 shadow-sm transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-out hover:bg-white/10 hover:border-white/18 hover:shadow-md active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/30 sm:top-7 sm:right-7 sm:px-5 sm:py-2.5",children:"⌘ terminal"}):null,G.jsx("nav",{className:"wes-top-nav fixed top-4 left-1/2 z-50 w-[min(100%,calc(100vw-7rem))] max-w-4xl -translate-x-1/2 px-3 sm:top-6 sm:w-[min(100%,calc(100vw-5rem))]","aria-label":"Navegação principal",children:G.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-1 rounded-full border border-white/[0.12] bg-white/[0.06] px-1.5 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md sm:gap-0 sm:px-2 sm:py-1.5",children:[yC.map((b,E)=>{const M=y===E;return G.jsx("a",{href:`#${b.id}`,onClick:x=>{x.preventDefault(),xC(b.id)},className:`rounded-full px-2.5 py-1.5 text-[0.7rem] font-medium transition-colors duration-200 sm:px-3 sm:text-[0.78rem] ${M?"bg-white text-neutral-950 shadow-sm":"text-neutral-200/90 hover:bg-white/[0.08] hover:text-white"}`,children:b.label},b.id)}),G.jsxs("button",{type:"button",onClick:()=>v(b=>!b),className:"ml-0.5 inline-flex items-center gap-1 rounded-full px-2 py-1.5 text-[0.68rem] font-medium text-neutral-400/95 transition-colors hover:bg-white/[0.07] hover:text-neutral-100 sm:px-2.5 sm:text-[0.76rem]","aria-pressed":g,title:"Alternar fundo",children:[G.jsx(HM,{className:"h-3.5 w-3.5 shrink-0 opacity-80","aria-hidden":!0}),G.jsx("span",{className:"hidden sm:inline",children:"Mudar fundo"})]})]})}),G.jsxs("div",{className:"relative z-[1] mx-auto flex w-full flex-col pb-24",children:[G.jsx("section",{id:"home",className:"hero wes-hero w-full scroll-mt-28 text-left pt-[clamp(4.5rem,10vw,6rem)]","aria-labelledby":"wes-hero-name",children:G.jsxs("div",{className:"hero-container",children:[G.jsxs("div",{className:"wes-hero-enter wes-hero-text-col order-1 min-w-0 w-full lg:shrink-0",children:[G.jsx("p",{className:"wes-hero-hello-badge wes-label-mono inline-flex items-center rounded-full border border-white/[0.09] bg-[#0a1018]/80 px-3 py-1 text-[0.6875rem] font-medium tracking-[0.02em] text-neutral-400/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",children:"Hello!"}),G.jsx("h1",{id:"wes-hero-name",className:"wes-hero-title mt-6 max-w-[min(100%,28rem)] text-[clamp(2rem,4.6vw,3.45rem)] leading-[1.1] tracking-[-0.038em] sm:max-w-none md:mt-7 md:text-[clamp(2.1rem,3.8vw,3.5rem)]",children:G.jsx("span",{className:"wes-hero-name-gradient",children:"Wesley Cruz"})}),G.jsxs("p",{className:"wes-hero-role mt-6 min-h-[3.15rem] max-w-[min(100%,28rem)] text-[clamp(1.05rem,1.2vw+0.8rem,1.28rem)] leading-[1.5] tracking-[-0.014em] text-neutral-400/95 sm:min-h-[2.85rem] sm:max-w-[32rem] md:mt-7","aria-live":"polite",children:[G.jsx("span",{className:"inline break-words align-middle font-medium text-neutral-200/88",children:f}),c?null:G.jsx("span",{className:"cursor-blink ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.06em] align-middle bg-emerald-400/55","aria-hidden":!0})]}),G.jsxs("div",{className:"mt-11 flex flex-wrap items-center gap-3 md:mt-12 md:gap-3",children:[G.jsxs("a",{href:fx,target:"_blank",rel:"noopener noreferrer",className:"wes-hero-social wes-label-mono inline-flex h-10 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-[1.15rem] text-[0.78rem] font-medium tracking-[0.03em] text-neutral-300/95 transition-[background-color,border-color,color] duration-200 ease-out hover:border-white/[0.16] hover:bg-white/[0.055] hover:text-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/18",children:[G.jsx(OM,{size:16,"aria-hidden":!0}),"GitHub",G.jsx(Wh,{size:11,className:"opacity-35","aria-hidden":!0})]}),G.jsxs("a",{href:js.linkedin,target:"_blank",rel:"noopener noreferrer",className:"wes-hero-social wes-label-mono inline-flex h-10 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-[1.15rem] text-[0.78rem] font-medium tracking-[0.03em] text-neutral-300/95 transition-[background-color,border-color,color] duration-200 ease-out hover:border-white/[0.16] hover:bg-white/[0.055] hover:text-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/18",children:[G.jsx(BM,{size:16,"aria-hidden":!0}),"LinkedIn",G.jsx(Wh,{size:11,className:"opacity-35","aria-hidden":!0})]}),G.jsxs("a",{href:GM,target:"_blank",rel:"noopener noreferrer",className:"wes-hero-social wes-label-mono inline-flex h-10 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-[1.15rem] text-[0.78rem] font-medium tracking-[0.03em] text-neutral-300/95 transition-[background-color,border-color,color] duration-200 ease-out hover:border-white/[0.16] hover:bg-white/[0.055] hover:text-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/18",children:[G.jsx(IM,{size:16,"aria-hidden":!0}),"Portfolio BBS",G.jsx(Wh,{size:11,className:"opacity-35","aria-hidden":!0})]})]})]}),G.jsx("div",{className:"order-2 flex w-full min-w-0 justify-center self-stretch lg:order-2 lg:justify-end lg:pl-2 xl:pl-4",children:G.jsxs("div",{className:"wes-hero-visual-slot relative flex w-full min-w-0 flex-col items-stretch lg:max-w-none lg:items-end","data-wes-hero-visual":"",children:[G.jsx("div",{className:"hero-interact",children:G.jsx("span",{children:"Interaja aqui ↓"})}),G.jsx(iC,{})]})})]})}),G.jsxs("div",{className:"mx-auto w-full max-w-[min(100%,92rem)] px-[clamp(1.25rem,5vw,3.5rem)] lg:px-[clamp(2rem,6vw,4rem)]",children:[G.jsxs("section",{id:"about",className:"about scroll-mt-28 border-t border-white/[0.07]","aria-labelledby":"wes-about-title",children:[G.jsxs("div",{className:"about-header",children:[G.jsx("span",{className:"about-header-label",children:"Sobre mim"}),G.jsxs("h2",{id:"wes-about-title",className:"about-header-name",children:["Wesley ",G.jsx("span",{children:"Vitor Souza"})," Cruz"]}),G.jsx("p",{className:"about-header-tagline",children:"Desenvolvedor Full Stack • Transformando ideias em código"})]}),G.jsxs("div",{className:"about-content",children:[G.jsx("div",{className:"about-card",children:G.jsx("img",{src:iy("/textures/eu.jpg"),alt:"Foto de perfil de Wesley",width:360,height:480,loading:"lazy",decoding:"async"})}),G.jsxs("div",{className:"about-text",children:[G.jsx("p",{children:"Prazer! Sou desenvolvedor full stack e atuo na fronteira entre código e interface: construo telas e sistemas com intenção de produto — da estrutura visual à clareza dos dados."}),G.jsxs("p",{children:["Minha jornada como desenvolvedor é focada em experiências que sejam bonitas de usar, fáceis de manter e alinhadas com quem está do outro lado da tela. Trabalho com"," ",G.jsx("span",{className:"text-neutral-200/95",children:hC.join(", ")}),"— a mesma stack que sustenta os projetos deste portfólio."]}),G.jsx("p",{children:"Se você está procurando um desenvolvedor para dar forma a uma ideia, evoluir um produto ou entregar interfaces sólidas e consistentes, ficarei feliz em conversar."})]})]})]}),G.jsx("section",{id:"work",className:"relative mt-20 scroll-mt-28 border-t border-white/[0.07] pt-16 md:mt-24 md:pt-20","aria-labelledby":"wes-work-title",children:G.jsx("div",{className:"relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.28),0_0_28px_rgba(56,189,248,0.05)] backdrop-blur-[8px] md:p-10",children:G.jsxs("div",{className:"relative",children:[G.jsx("p",{className:"wes-label-mono text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-neutral-500",children:"Navegue pelos destaques"}),G.jsx("h2",{id:"wes-work-title",className:"mt-3 text-[1.65rem] font-semibold tracking-tight text-white md:text-3xl",children:"Projetos em destaque"}),G.jsxs("p",{className:"mt-3 max-w-lg text-sm leading-relaxed text-neutral-500 md:text-[0.95rem]",children:["Confira uma seleção dos principais projetos — um por vez, com a mesma identidade e rigor de entrega."," ",G.jsx("a",{href:fx,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-neutral-300/95 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/40",children:"Ver todos"})]}),G.jsx(bC,{active:p,onSelect:_})]})})}),G.jsx(AC,{}),G.jsx("section",{id:"education",className:"mt-20 scroll-mt-28 border-t border-white/[0.07] pt-16 md:mt-24 md:pt-20","aria-labelledby":"wes-education-title",children:G.jsxs("div",{className:"mx-auto max-w-3xl text-center md:text-left",children:[G.jsx("p",{className:"wes-label-mono text-[0.68rem] font-medium uppercase tracking-[0.38em] text-neutral-500",children:"Formação"}),G.jsx("h2",{id:"wes-education-title",className:"mt-3 text-[1.65rem] font-semibold tracking-tight text-white md:text-3xl",children:"Educação"}),G.jsx("p",{className:"mt-4 text-sm leading-relaxed text-neutral-500 md:text-[0.95rem]",children:"Cursos e formação acadêmica que sustentam a base técnica por trás dos projetos — atualize esta seção com instituição, curso e período."})]})}),G.jsx(oC,{})]}),G.jsx(cC,{})]})]})}function RC(){return G.jsx(wC,{})}vM.createRoot(document.getElementById("root")).render(G.jsx(dt.StrictMode,{children:G.jsx(RC,{})}));
