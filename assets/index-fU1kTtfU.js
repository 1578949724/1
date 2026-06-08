(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function l(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(f){if(f.ep)return;f.ep=!0;const m=l(f);fetch(f.href,m)}})();var Ki={exports:{}},jr={},Wi={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function e2(){if(mp)return re;mp=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),y=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),E=Symbol.iterator;function b(g){return g===null||typeof g!="object"?null:(g=E&&g[E]||g["@@iterator"],typeof g=="function"?g:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,L={};function T(g,D,J){this.props=g,this.context=D,this.refs=L,this.updater=J||K}T.prototype.isReactComponent={},T.prototype.setState=function(g,D){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,D,"setState")},T.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function I(){}I.prototype=T.prototype;function U(g,D,J){this.props=g,this.context=D,this.refs=L,this.updater=J||K}var ee=U.prototype=new I;ee.constructor=U,V(ee,T.prototype),ee.isPureReactComponent=!0;var X=Array.isArray,se=Object.prototype.hasOwnProperty,pe={current:null},fe={key:!0,ref:!0,__self:!0,__source:!0};function we(g,D,J){var G,oe={},ie=null,me=null;if(D!=null)for(G in D.ref!==void 0&&(me=D.ref),D.key!==void 0&&(ie=""+D.key),D)se.call(D,G)&&!fe.hasOwnProperty(G)&&(oe[G]=D[G]);var ue=arguments.length-2;if(ue===1)oe.children=J;else if(1<ue){for(var _e=Array(ue),tt=0;tt<ue;tt++)_e[tt]=arguments[tt+2];oe.children=_e}if(g&&g.defaultProps)for(G in ue=g.defaultProps,ue)oe[G]===void 0&&(oe[G]=ue[G]);return{$$typeof:i,type:g,key:ie,ref:me,props:oe,_owner:pe.current}}function je(g,D){return{$$typeof:i,type:g.type,key:D,ref:g.ref,props:g.props,_owner:g._owner}}function Le(g){return typeof g=="object"&&g!==null&&g.$$typeof===i}function Ke(g){var D={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(J){return D[J]})}var Ie=/\/+/g;function ne(g,D){return typeof g=="object"&&g!==null&&g.key!=null?Ke(""+g.key):D.toString(36)}function Pe(g,D,J,G,oe){var ie=typeof g;(ie==="undefined"||ie==="boolean")&&(g=null);var me=!1;if(g===null)me=!0;else switch(ie){case"string":case"number":me=!0;break;case"object":switch(g.$$typeof){case i:case c:me=!0}}if(me)return me=g,oe=oe(me),g=G===""?"."+ne(me,0):G,X(oe)?(J="",g!=null&&(J=g.replace(Ie,"$&/")+"/"),Pe(oe,D,J,"",function(tt){return tt})):oe!=null&&(Le(oe)&&(oe=je(oe,J+(!oe.key||me&&me.key===oe.key?"":(""+oe.key).replace(Ie,"$&/")+"/")+g)),D.push(oe)),1;if(me=0,G=G===""?".":G+":",X(g))for(var ue=0;ue<g.length;ue++){ie=g[ue];var _e=G+ne(ie,ue);me+=Pe(ie,D,J,_e,oe)}else if(_e=b(g),typeof _e=="function")for(g=_e.call(g),ue=0;!(ie=g.next()).done;)ie=ie.value,_e=G+ne(ie,ue++),me+=Pe(ie,D,J,_e,oe);else if(ie==="object")throw D=String(g),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return me}function ye(g,D,J){if(g==null)return g;var G=[],oe=0;return Pe(g,G,"","",function(ie){return D.call(J,ie,oe++)}),G}function De(g){if(g._status===-1){var D=g._result;D=D(),D.then(function(J){(g._status===0||g._status===-1)&&(g._status=1,g._result=J)},function(J){(g._status===0||g._status===-1)&&(g._status=2,g._result=J)}),g._status===-1&&(g._status=0,g._result=D)}if(g._status===1)return g._result.default;throw g._result}var O={current:null},R={transition:null},W={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:R,ReactCurrentOwner:pe};function j(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:ye,forEach:function(g,D,J){ye(g,function(){D.apply(this,arguments)},J)},count:function(g){var D=0;return ye(g,function(){D++}),D},toArray:function(g){return ye(g,function(D){return D})||[]},only:function(g){if(!Le(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},re.Component=T,re.Fragment=l,re.Profiler=f,re.PureComponent=U,re.StrictMode=u,re.Suspense=A,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,re.act=j,re.cloneElement=function(g,D,J){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var G=V({},g.props),oe=g.key,ie=g.ref,me=g._owner;if(D!=null){if(D.ref!==void 0&&(ie=D.ref,me=pe.current),D.key!==void 0&&(oe=""+D.key),g.type&&g.type.defaultProps)var ue=g.type.defaultProps;for(_e in D)se.call(D,_e)&&!fe.hasOwnProperty(_e)&&(G[_e]=D[_e]===void 0&&ue!==void 0?ue[_e]:D[_e])}var _e=arguments.length-2;if(_e===1)G.children=J;else if(1<_e){ue=Array(_e);for(var tt=0;tt<_e;tt++)ue[tt]=arguments[tt+2];G.children=ue}return{$$typeof:i,type:g.type,key:oe,ref:ie,props:G,_owner:me}},re.createContext=function(g){return g={$$typeof:y,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:m,_context:g},g.Consumer=g},re.createElement=we,re.createFactory=function(g){var D=we.bind(null,g);return D.type=g,D},re.createRef=function(){return{current:null}},re.forwardRef=function(g){return{$$typeof:v,render:g}},re.isValidElement=Le,re.lazy=function(g){return{$$typeof:F,_payload:{_status:-1,_result:g},_init:De}},re.memo=function(g,D){return{$$typeof:S,type:g,compare:D===void 0?null:D}},re.startTransition=function(g){var D=R.transition;R.transition={};try{g()}finally{R.transition=D}},re.unstable_act=j,re.useCallback=function(g,D){return O.current.useCallback(g,D)},re.useContext=function(g){return O.current.useContext(g)},re.useDebugValue=function(){},re.useDeferredValue=function(g){return O.current.useDeferredValue(g)},re.useEffect=function(g,D){return O.current.useEffect(g,D)},re.useId=function(){return O.current.useId()},re.useImperativeHandle=function(g,D,J){return O.current.useImperativeHandle(g,D,J)},re.useInsertionEffect=function(g,D){return O.current.useInsertionEffect(g,D)},re.useLayoutEffect=function(g,D){return O.current.useLayoutEffect(g,D)},re.useMemo=function(g,D){return O.current.useMemo(g,D)},re.useReducer=function(g,D,J){return O.current.useReducer(g,D,J)},re.useRef=function(g){return O.current.useRef(g)},re.useState=function(g){return O.current.useState(g)},re.useSyncExternalStore=function(g,D,J){return O.current.useSyncExternalStore(g,D,J)},re.useTransition=function(){return O.current.useTransition()},re.version="18.3.1",re}var hp;function io(){return hp||(hp=1,Wi.exports=e2()),Wi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function t2(){if(gp)return jr;gp=1;var i=io(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function y(v,A,S){var F,E={},b=null,K=null;S!==void 0&&(b=""+S),A.key!==void 0&&(b=""+A.key),A.ref!==void 0&&(K=A.ref);for(F in A)u.call(A,F)&&!m.hasOwnProperty(F)&&(E[F]=A[F]);if(v&&v.defaultProps)for(F in A=v.defaultProps,A)E[F]===void 0&&(E[F]=A[F]);return{$$typeof:c,type:v,key:b,ref:K,props:E,_owner:f.current}}return jr.Fragment=l,jr.jsx=y,jr.jsxs=y,jr}var xp;function n2(){return xp||(xp=1,Ki.exports=t2()),Ki.exports}var p=n2(),k=io(),Vs={},Xi={exports:{}},Je={},Gi={exports:{}},Yi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function r2(){return yp||(yp=1,(function(i){function c(R,W){var j=R.length;R.push(W);e:for(;0<j;){var g=j-1>>>1,D=R[g];if(0<f(D,W))R[g]=W,R[j]=D,j=g;else break e}}function l(R){return R.length===0?null:R[0]}function u(R){if(R.length===0)return null;var W=R[0],j=R.pop();if(j!==W){R[0]=j;e:for(var g=0,D=R.length,J=D>>>1;g<J;){var G=2*(g+1)-1,oe=R[G],ie=G+1,me=R[ie];if(0>f(oe,j))ie<D&&0>f(me,oe)?(R[g]=me,R[ie]=j,g=ie):(R[g]=oe,R[G]=j,g=G);else if(ie<D&&0>f(me,j))R[g]=me,R[ie]=j,g=ie;else break e}}return W}function f(R,W){var j=R.sortIndex-W.sortIndex;return j!==0?j:R.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var y=Date,v=y.now();i.unstable_now=function(){return y.now()-v}}var A=[],S=[],F=1,E=null,b=3,K=!1,V=!1,L=!1,T=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(R){for(var W=l(S);W!==null;){if(W.callback===null)u(S);else if(W.startTime<=R)u(S),W.sortIndex=W.expirationTime,c(A,W);else break;W=l(S)}}function X(R){if(L=!1,ee(R),!V)if(l(A)!==null)V=!0,De(se);else{var W=l(S);W!==null&&O(X,W.startTime-R)}}function se(R,W){V=!1,L&&(L=!1,I(we),we=-1),K=!0;var j=b;try{for(ee(W),E=l(A);E!==null&&(!(E.expirationTime>W)||R&&!Ke());){var g=E.callback;if(typeof g=="function"){E.callback=null,b=E.priorityLevel;var D=g(E.expirationTime<=W);W=i.unstable_now(),typeof D=="function"?E.callback=D:E===l(A)&&u(A),ee(W)}else u(A);E=l(A)}if(E!==null)var J=!0;else{var G=l(S);G!==null&&O(X,G.startTime-W),J=!1}return J}finally{E=null,b=j,K=!1}}var pe=!1,fe=null,we=-1,je=5,Le=-1;function Ke(){return!(i.unstable_now()-Le<je)}function Ie(){if(fe!==null){var R=i.unstable_now();Le=R;var W=!0;try{W=fe(!0,R)}finally{W?ne():(pe=!1,fe=null)}}else pe=!1}var ne;if(typeof U=="function")ne=function(){U(Ie)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,ye=Pe.port2;Pe.port1.onmessage=Ie,ne=function(){ye.postMessage(null)}}else ne=function(){T(Ie,0)};function De(R){fe=R,pe||(pe=!0,ne())}function O(R,W){we=T(function(){R(i.unstable_now())},W)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_continueExecution=function(){V||K||(V=!0,De(se))},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_getFirstCallbackNode=function(){return l(A)},i.unstable_next=function(R){switch(b){case 1:case 2:case 3:var W=3;break;default:W=b}var j=b;b=W;try{return R()}finally{b=j}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(R,W){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=b;b=R;try{return W()}finally{b=j}},i.unstable_scheduleCallback=function(R,W,j){var g=i.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?g+j:g):j=g,R){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=j+D,R={id:F++,callback:W,priorityLevel:R,startTime:j,expirationTime:D,sortIndex:-1},j>g?(R.sortIndex=j,c(S,R),l(A)===null&&R===l(S)&&(L?(I(we),we=-1):L=!0,O(X,j-g))):(R.sortIndex=D,c(A,R),V||K||(V=!0,De(se))),R},i.unstable_shouldYield=Ke,i.unstable_wrapCallback=function(R){var W=b;return function(){var j=b;b=W;try{return R.apply(this,arguments)}finally{b=j}}}})(Yi)),Yi}var _p;function s2(){return _p||(_p=1,Gi.exports=r2()),Gi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function a2(){if(vp)return Je;vp=1;var i=io(),c=s2();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,f={};function m(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(f[e]=t,e=0;e<t.length;e++)u.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),A=Object.prototype.hasOwnProperty,S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F={},E={};function b(e){return A.call(E,e)?!0:A.call(F,e)?!1:S.test(e)?E[e]=!0:(F[e]=!0,!1)}function K(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V(e,t,n,r){if(t===null||typeof t>"u"||K(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function L(e,t,n,r,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new L(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];T[t]=new L(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new L(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new L(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new L(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new L(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(I,U);T[t]=new L(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(I,U);T[t]=new L(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(I,U);T[t]=new L(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,r){var s=T.hasOwnProperty(t)?T[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V(t,n,s,r)&&(n=null),r||s===null?b(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var X=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),pe=Symbol.for("react.portal"),fe=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),Ke=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),ye=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),R=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,g;function D(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var J=!1;function G(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var r=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){r=C}e.call(t.prototype)}else{try{throw Error()}catch(C){r=C}e()}}catch(C){if(C&&r&&typeof C.stack=="string"){for(var s=C.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,d=a.length-1;1<=o&&0<=d&&s[o]!==a[d];)d--;for(;1<=o&&0<=d;o--,d--)if(s[o]!==a[d]){if(o!==1||d!==1)do if(o--,d--,0>d||s[o]!==a[d]){var h=`
`+s[o].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=o&&0<=d);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function oe(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fe:return"Fragment";case pe:return"Portal";case je:return"Profiler";case we:return"StrictMode";case ne:return"Suspense";case Pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ke:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case Ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ye:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case De:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _e(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tt(e){var t=_e(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=tt(e))}function vo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_e(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ko(e,t){t=t.checked,t!=null&&ee(e,"checked",t,!1)}function ta(e,t){ko(e,t);var n=ue(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?na(e,t.type,n):t.hasOwnProperty("defaultValue")&&na(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ao(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function na(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $n=Array.isArray;function yn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Co(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if($n(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function Eo(e,t){var n=ue(t.value),r=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function So(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,Do=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},su=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){su.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function No(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function jo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=No(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var au=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(e,t){if(t){if(au[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function ia(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oa=null;function la(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ca=null,_n=null,vn=null;function Po(e){if(e=hr(e)){if(typeof ca!="function")throw Error(l(280));var t=e.stateNode;t&&(t=os(t),ca(e.stateNode,e.type,t))}}function Mo(e){_n?vn?vn.push(e):vn=[e]:_n=e}function Ro(){if(_n){var e=_n,t=vn;if(vn=_n=null,Po(e),t)for(e=0;e<t.length;e++)Po(t[e])}}function Bo(e,t){return e(t)}function bo(){}var pa=!1;function To(e,t,n){if(pa)return e(t,n);pa=!0;try{return Bo(e,t,n)}finally{pa=!1,(_n!==null||vn!==null)&&(bo(),Ro())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=os(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var ua=!1;if(v)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){ua=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{ua=!1}function iu(e,t,n,r,s,a,o,d,h){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(P){this.onError(P)}}var Gn=!1,zr=null,Or=!1,da=null,ou={onError:function(e){Gn=!0,zr=e}};function lu(e,t,n,r,s,a,o,d,h){Gn=!1,zr=null,iu.apply(ou,arguments)}function cu(e,t,n,r,s,a,o,d,h){if(lu.apply(this,arguments),Gn){if(Gn){var C=zr;Gn=!1,zr=null}else throw Error(l(198));Or||(Or=!0,da=C)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Io(e){if(rn(e)!==e)throw Error(l(188))}function pu(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Io(s),e;if(a===r)return Io(s),t;a=a.sibling}throw Error(l(188))}if(n.return!==r.return)n=s,r=a;else{for(var o=!1,d=s.child;d;){if(d===n){o=!0,n=s,r=a;break}if(d===r){o=!0,r=s,n=a;break}d=d.sibling}if(!o){for(d=a.child;d;){if(d===n){o=!0,n=a,r=s;break}if(d===r){o=!0,r=a,n=s;break}d=d.sibling}if(!o)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function zo(e){return e=pu(e),e!==null?Oo(e):null}function Oo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Oo(e);if(t!==null)return t;e=e.sibling}return null}var qo=c.unstable_scheduleCallback,Ho=c.unstable_cancelCallback,uu=c.unstable_shouldYield,du=c.unstable_requestPaint,Se=c.unstable_now,fu=c.unstable_getCurrentPriorityLevel,fa=c.unstable_ImmediatePriority,Qo=c.unstable_UserBlockingPriority,qr=c.unstable_NormalPriority,mu=c.unstable_LowPriority,Uo=c.unstable_IdlePriority,Hr=null,wt=null;function hu(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Hr,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:yu,gu=Math.log,xu=Math.LN2;function yu(e){return e>>>=0,e===0?32:31-(gu(e)/xu|0)|0}var Qr=64,Ur=4194304;function Yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var d=o&~s;d!==0?r=Yn(d):(a&=o,a!==0&&(r=Yn(a)))}else o=n&~s,o!==0?r=Yn(o):a!==0&&(r=Yn(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&s)===0&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),s=1<<n,r|=e[n],t&=~s;return r}function _u(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ft(a),d=1<<o,h=s[o];h===-1?((d&n)===0||(d&r)!==0)&&(s[o]=_u(d,t)):h<=t&&(e.expiredLanes|=d),a&=~d}}function ma(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $o(){var e=Qr;return Qr<<=1,(Qr&4194240)===0&&(Qr=64),e}function ha(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function wu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-ft(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var de=0;function Vo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ko,xa,Wo,Xo,Go,ya=!1,Vr=[],It=null,zt=null,Ot=null,Jn=new Map,er=new Map,qt=[],ku="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yo(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function tr(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=hr(t),t!==null&&xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Au(e,t,n,r,s){switch(t){case"focusin":return It=tr(It,e,t,n,r,s),!0;case"dragenter":return zt=tr(zt,e,t,n,r,s),!0;case"mouseover":return Ot=tr(Ot,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return Jn.set(a,tr(Jn.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,er.set(a,tr(er.get(a)||null,e,t,n,r,s)),!0}return!1}function Zo(e){var t=sn(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Lo(n),t!==null){e.blockedOn=t,Go(e.priority,function(){Wo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oa=r,n.target.dispatchEvent(r),oa=null}else return t=hr(n),t!==null&&xa(t),e.blockedOn=n,!1;t.shift()}return!0}function Jo(e,t,n){Kr(e)&&n.delete(t)}function Cu(){ya=!1,It!==null&&Kr(It)&&(It=null),zt!==null&&Kr(zt)&&(zt=null),Ot!==null&&Kr(Ot)&&(Ot=null),Jn.forEach(Jo),er.forEach(Jo)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,ya||(ya=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Cu)))}function rr(e){function t(s){return nr(s,e)}if(0<Vr.length){nr(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&nr(It,e),zt!==null&&nr(zt,e),Ot!==null&&nr(Ot,e),Jn.forEach(t),er.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)Zo(n),n.blockedOn===null&&qt.shift()}var wn=X.ReactCurrentBatchConfig,Wr=!0;function Eu(e,t,n,r){var s=de,a=wn.transition;wn.transition=null;try{de=1,_a(e,t,n,r)}finally{de=s,wn.transition=a}}function Su(e,t,n,r){var s=de,a=wn.transition;wn.transition=null;try{de=4,_a(e,t,n,r)}finally{de=s,wn.transition=a}}function _a(e,t,n,r){if(Wr){var s=va(e,t,n,r);if(s===null)La(e,t,r,Xr,n),Yo(e,r);else if(Au(s,e,t,n,r))r.stopPropagation();else if(Yo(e,r),t&4&&-1<ku.indexOf(e)){for(;s!==null;){var a=hr(s);if(a!==null&&Ko(a),a=va(e,t,n,r),a===null&&La(e,t,r,Xr,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else La(e,t,r,null,n)}}var Xr=null;function va(e,t,n,r){if(Xr=null,e=la(r),e=sn(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function el(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fu()){case fa:return 1;case Qo:return 4;case qr:case mu:return 16;case Uo:return 536870912;default:return 16}default:return 16}}var Ht=null,wa=null,Gr=null;function tl(){if(Gr)return Gr;var e,t=wa,n=t.length,r,s="value"in Ht?Ht.value:Ht.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[a-r];r++);return Gr=s.slice(e,1<r?1-r:void 0)}function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function nl(){return!1}function nt(e){function t(n,r,s,a,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(a):a[d]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zr:nl,this.isPropagationStopped=nl,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=nt(kn),sr=j({},kn,{view:0,detail:0}),Fu=nt(sr),Aa,Ca,ar,Jr=j({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(Aa=e.screenX-ar.screenX,Ca=e.screenY-ar.screenY):Ca=Aa=0,ar=e),Aa)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),rl=nt(Jr),Du=j({},Jr,{dataTransfer:0}),Nu=nt(Du),ju=j({},sr,{relatedTarget:0}),Ea=nt(ju),Pu=j({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mu=nt(Pu),Ru=j({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bu=nt(Ru),bu=j({},kn,{data:0}),sl=nt(bu),Tu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Iu[e])?!!t[e]:!1}function Sa(){return zu}var Ou=j({},sr,{key:function(e){if(e.key){var t=Tu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qu=nt(Ou),Hu=j({},Jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),al=nt(Hu),Qu=j({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),Uu=nt(Qu),$u=j({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vu=nt($u),Ku=j({},Jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wu=nt(Ku),Xu=[9,13,27,32],Fa=v&&"CompositionEvent"in window,ir=null;v&&"documentMode"in document&&(ir=document.documentMode);var Gu=v&&"TextEvent"in window&&!ir,il=v&&(!Fa||ir&&8<ir&&11>=ir),ol=" ",ll=!1;function cl(e,t){switch(e){case"keyup":return Xu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Yu(e,t){switch(e){case"compositionend":return pl(t);case"keypress":return t.which!==32?null:(ll=!0,ol);case"textInput":return e=t.data,e===ol&&ll?null:e;default:return null}}function Zu(e,t){if(An)return e==="compositionend"||!Fa&&cl(e,t)?(e=tl(),Gr=wa=Ht=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return il&&t.locale!=="ko"?null:t.data;default:return null}}var Ju={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ju[e.type]:t==="textarea"}function dl(e,t,n,r){Mo(r),t=ss(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,lr=null;function ed(e){jl(e,0)}function es(e){var t=Dn(e);if(vo(t))return e}function td(e,t){if(e==="change")return t}var fl=!1;if(v){var Da;if(v){var Na="oninput"in document;if(!Na){var ml=document.createElement("div");ml.setAttribute("oninput","return;"),Na=typeof ml.oninput=="function"}Da=Na}else Da=!1;fl=Da&&(!document.documentMode||9<document.documentMode)}function hl(){or&&(or.detachEvent("onpropertychange",gl),lr=or=null)}function gl(e){if(e.propertyName==="value"&&es(lr)){var t=[];dl(t,lr,e,la(e)),To(ed,t)}}function nd(e,t,n){e==="focusin"?(hl(),or=t,lr=n,or.attachEvent("onpropertychange",gl)):e==="focusout"&&hl()}function rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return es(lr)}function sd(e,t){if(e==="click")return es(t)}function ad(e,t){if(e==="input"||e==="change")return es(t)}function id(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:id;function cr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!A.call(t,s)||!mt(e[s],t[s]))return!1}return!0}function xl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yl(e,t){var n=xl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xl(n)}}function _l(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_l(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vl(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function od(e){var t=vl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_l(n.ownerDocument.documentElement,n)){if(r!==null&&ja(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=yl(n,a);var o=yl(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ld=v&&"documentMode"in document&&11>=document.documentMode,Cn=null,Pa=null,pr=null,Ma=!1;function wl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||Cn==null||Cn!==Lr(r)||(r=Cn,"selectionStart"in r&&ja(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&cr(pr,r)||(pr=r,r=ss(Pa,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function ts(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionend:ts("Transition","TransitionEnd")},Ra={},kl={};v&&(kl=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function ns(e){if(Ra[e])return Ra[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kl)return Ra[e]=t[n];return e}var Al=ns("animationend"),Cl=ns("animationiteration"),El=ns("animationstart"),Sl=ns("transitionend"),Fl=new Map,Dl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Fl.set(e,t),m(t,[e])}for(var Ba=0;Ba<Dl.length;Ba++){var ba=Dl[Ba],cd=ba.toLowerCase(),pd=ba[0].toUpperCase()+ba.slice(1);Qt(cd,"on"+pd)}Qt(Al,"onAnimationEnd"),Qt(Cl,"onAnimationIteration"),Qt(El,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(Sl,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Nl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cu(r,t,void 0,e),e.currentTarget=null}function jl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var d=r[o],h=d.instance,C=d.currentTarget;if(d=d.listener,h!==a&&s.isPropagationStopped())break e;Nl(s,d,C),a=h}else for(o=0;o<r.length;o++){if(d=r[o],h=d.instance,C=d.currentTarget,d=d.listener,h!==a&&s.isPropagationStopped())break e;Nl(s,d,C),a=h}}}if(Or)throw e=da,Or=!1,da=null,e}function ge(e,t){var n=t[Qa];n===void 0&&(n=t[Qa]=new Set);var r=e+"__bubble";n.has(r)||(Pl(t,e,2,!1),n.add(r))}function Ta(e,t,n){var r=0;t&&(r|=4),Pl(n,e,r,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[rs]){e[rs]=!0,u.forEach(function(n){n!=="selectionchange"&&(ud.has(n)||Ta(n,!1,e),Ta(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,Ta("selectionchange",!1,t))}}function Pl(e,t,n,r){switch(el(t)){case 1:var s=Eu;break;case 4:s=Su;break;default:s=_a}n=s.bind(null,t,n,e),s=void 0,!ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function La(e,t,n,r,s){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var d=r.stateNode.containerInfo;if(d===s||d.nodeType===8&&d.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var h=o.tag;if((h===3||h===4)&&(h=o.stateNode.containerInfo,h===s||h.nodeType===8&&h.parentNode===s))return;o=o.return}for(;d!==null;){if(o=sn(d),o===null)return;if(h=o.tag,h===5||h===6){r=a=o;continue e}d=d.parentNode}}r=r.return}To(function(){var C=a,P=la(n),M=[];e:{var N=Fl.get(e);if(N!==void 0){var z=ka,H=e;switch(e){case"keypress":if(Yr(n)===0)break e;case"keydown":case"keyup":z=qu;break;case"focusin":H="focus",z=Ea;break;case"focusout":H="blur",z=Ea;break;case"beforeblur":case"afterblur":z=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=rl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Nu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Uu;break;case Al:case Cl:case El:z=Mu;break;case Sl:z=Vu;break;case"scroll":z=Fu;break;case"wheel":z=Wu;break;case"copy":case"cut":case"paste":z=Bu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=al}var Q=(t&4)!==0,Fe=!Q&&e==="scroll",_=Q?N!==null?N+"Capture":null:N;Q=[];for(var x=C,w;x!==null;){w=x;var B=w.stateNode;if(w.tag===5&&B!==null&&(w=B,_!==null&&(B=Wn(x,_),B!=null&&Q.push(fr(x,B,w)))),Fe)break;x=x.return}0<Q.length&&(N=new z(N,H,null,n,P),M.push({event:N,listeners:Q}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",N&&n!==oa&&(H=n.relatedTarget||n.fromElement)&&(sn(H)||H[Nt]))break e;if((z||N)&&(N=P.window===P?P:(N=P.ownerDocument)?N.defaultView||N.parentWindow:window,z?(H=n.relatedTarget||n.toElement,z=C,H=H?sn(H):null,H!==null&&(Fe=rn(H),H!==Fe||H.tag!==5&&H.tag!==6)&&(H=null)):(z=null,H=C),z!==H)){if(Q=rl,B="onMouseLeave",_="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(Q=al,B="onPointerLeave",_="onPointerEnter",x="pointer"),Fe=z==null?N:Dn(z),w=H==null?N:Dn(H),N=new Q(B,x+"leave",z,n,P),N.target=Fe,N.relatedTarget=w,B=null,sn(P)===C&&(Q=new Q(_,x+"enter",H,n,P),Q.target=w,Q.relatedTarget=Fe,B=Q),Fe=B,z&&H)t:{for(Q=z,_=H,x=0,w=Q;w;w=Sn(w))x++;for(w=0,B=_;B;B=Sn(B))w++;for(;0<x-w;)Q=Sn(Q),x--;for(;0<w-x;)_=Sn(_),w--;for(;x--;){if(Q===_||_!==null&&Q===_.alternate)break t;Q=Sn(Q),_=Sn(_)}Q=null}else Q=null;z!==null&&Ml(M,N,z,Q,!1),H!==null&&Fe!==null&&Ml(M,Fe,H,Q,!0)}}e:{if(N=C?Dn(C):window,z=N.nodeName&&N.nodeName.toLowerCase(),z==="select"||z==="input"&&N.type==="file")var $=td;else if(ul(N))if(fl)$=ad;else{$=rd;var Y=nd}else(z=N.nodeName)&&z.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&($=sd);if($&&($=$(e,C))){dl(M,$,n,P);break e}Y&&Y(e,N,C),e==="focusout"&&(Y=N._wrapperState)&&Y.controlled&&N.type==="number"&&na(N,"number",N.value)}switch(Y=C?Dn(C):window,e){case"focusin":(ul(Y)||Y.contentEditable==="true")&&(Cn=Y,Pa=C,pr=null);break;case"focusout":pr=Pa=Cn=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,wl(M,n,P);break;case"selectionchange":if(ld)break;case"keydown":case"keyup":wl(M,n,P)}var Z;if(Fa)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else An?cl(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(il&&n.locale!=="ko"&&(An||te!=="onCompositionStart"?te==="onCompositionEnd"&&An&&(Z=tl()):(Ht=P,wa="value"in Ht?Ht.value:Ht.textContent,An=!0)),Y=ss(C,te),0<Y.length&&(te=new sl(te,e,null,n,P),M.push({event:te,listeners:Y}),Z?te.data=Z:(Z=pl(n),Z!==null&&(te.data=Z)))),(Z=Gu?Yu(e,n):Zu(e,n))&&(C=ss(C,"onBeforeInput"),0<C.length&&(P=new sl("onBeforeInput","beforeinput",null,n,P),M.push({event:P,listeners:C}),P.data=Z))}jl(M,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Wn(e,n),a!=null&&r.unshift(fr(e,a,s)),a=Wn(e,t),a!=null&&r.push(fr(e,a,s))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ml(e,t,n,r,s){for(var a=t._reactName,o=[];n!==null&&n!==r;){var d=n,h=d.alternate,C=d.stateNode;if(h!==null&&h===r)break;d.tag===5&&C!==null&&(d=C,s?(h=Wn(n,a),h!=null&&o.unshift(fr(n,h,d))):s||(h=Wn(n,a),h!=null&&o.push(fr(n,h,d)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var dd=/\r\n?/g,fd=/\u0000|\uFFFD/g;function Rl(e){return(typeof e=="string"?e:""+e).replace(dd,`
`).replace(fd,"")}function as(e,t,n){if(t=Rl(t),Rl(e)!==t&&n)throw Error(l(425))}function is(){}var Ia=null,za=null;function Oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,md=typeof clearTimeout=="function"?clearTimeout:void 0,Bl=typeof Promise=="function"?Promise:void 0,hd=typeof queueMicrotask=="function"?queueMicrotask:typeof Bl<"u"?function(e){return Bl.resolve(null).then(e).catch(gd)}:qa;function gd(e){setTimeout(function(){throw e})}function Ha(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);rr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),kt="__reactFiber$"+Fn,mr="__reactProps$"+Fn,Nt="__reactContainer$"+Fn,Qa="__reactEvents$"+Fn,xd="__reactListeners$"+Fn,yd="__reactHandles$"+Fn;function sn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bl(e);e!==null;){if(n=e[kt])return n;e=bl(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[kt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function os(e){return e[mr]||null}var Ua=[],Nn=-1;function $t(e){return{current:e}}function xe(e){0>Nn||(e.current=Ua[Nn],Ua[Nn]=null,Nn--)}function he(e,t){Nn++,Ua[Nn]=e.current,e.current=t}var Vt={},qe=$t(Vt),We=$t(!1),an=Vt;function jn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Xe(e){return e=e.childContextTypes,e!=null}function ls(){xe(We),xe(qe)}function Tl(e,t,n){if(qe.current!==Vt)throw Error(l(168));he(qe,t),he(We,n)}function Ll(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(l(108,me(e)||"Unknown",s));return j({},n,r)}function cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,an=qe.current,he(qe,e),he(We,We.current),!0}function Il(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=Ll(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,xe(We),xe(qe),he(qe,e)):xe(We),he(We,n)}var jt=null,ps=!1,$a=!1;function zl(e){jt===null?jt=[e]:jt.push(e)}function _d(e){ps=!0,zl(e)}function Kt(){if(!$a&&jt!==null){$a=!0;var e=0,t=de;try{var n=jt;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,ps=!1}catch(s){throw jt!==null&&(jt=jt.slice(e+1)),qo(fa,Kt),s}finally{de=t,$a=!1}}return null}var Pn=[],Mn=0,us=null,ds=0,it=[],ot=0,on=null,Pt=1,Mt="";function ln(e,t){Pn[Mn++]=ds,Pn[Mn++]=us,us=e,ds=t}function Ol(e,t,n){it[ot++]=Pt,it[ot++]=Mt,it[ot++]=on,on=e;var r=Pt;e=Mt;var s=32-ft(r)-1;r&=~(1<<s),n+=1;var a=32-ft(t)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Pt=1<<32-ft(t)+s|n<<s|r,Mt=a+e}else Pt=1<<a|n<<s|r,Mt=e}function Va(e){e.return!==null&&(ln(e,1),Ol(e,1,0))}function Ka(e){for(;e===us;)us=Pn[--Mn],Pn[Mn]=null,ds=Pn[--Mn],Pn[Mn]=null;for(;e===on;)on=it[--ot],it[ot]=null,Mt=it[--ot],it[ot]=null,Pt=it[--ot],it[ot]=null}var rt=null,st=null,ve=!1,ht=null;function ql(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,st=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:Pt,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,st=null,!0):!1;default:return!1}}function Wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xa(e){if(ve){var t=st;if(t){var n=t;if(!Hl(e,t)){if(Wa(e))throw Error(l(418));t=Ut(n.nextSibling);var r=rt;t&&Hl(e,t)?ql(r,n):(e.flags=e.flags&-4097|2,ve=!1,rt=e)}}else{if(Wa(e))throw Error(l(418));e.flags=e.flags&-4097|2,ve=!1,rt=e}}}function Ql(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function fs(e){if(e!==rt)return!1;if(!ve)return Ql(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oa(e.type,e.memoizedProps)),t&&(t=st)){if(Wa(e))throw Ul(),Error(l(418));for(;t;)ql(e,t),t=Ut(t.nextSibling)}if(Ql(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=rt?Ut(e.stateNode.nextSibling):null;return!0}function Ul(){for(var e=st;e;)e=Ut(e.nextSibling)}function Rn(){st=rt=null,ve=!1}function Ga(e){ht===null?ht=[e]:ht.push(e)}var vd=X.ReactCurrentBatchConfig;function gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var d=s.refs;o===null?delete d[a]:d[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function ms(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $l(e){var t=e._init;return t(e._payload)}function Vl(e){function t(_,x){if(e){var w=_.deletions;w===null?(_.deletions=[x],_.flags|=16):w.push(x)}}function n(_,x){if(!e)return null;for(;x!==null;)t(_,x),x=x.sibling;return null}function r(_,x){for(_=new Map;x!==null;)x.key!==null?_.set(x.key,x):_.set(x.index,x),x=x.sibling;return _}function s(_,x){return _=tn(_,x),_.index=0,_.sibling=null,_}function a(_,x,w){return _.index=w,e?(w=_.alternate,w!==null?(w=w.index,w<x?(_.flags|=2,x):w):(_.flags|=2,x)):(_.flags|=1048576,x)}function o(_){return e&&_.alternate===null&&(_.flags|=2),_}function d(_,x,w,B){return x===null||x.tag!==6?(x=qi(w,_.mode,B),x.return=_,x):(x=s(x,w),x.return=_,x)}function h(_,x,w,B){var $=w.type;return $===fe?P(_,x,w.props.children,B,w.key):x!==null&&(x.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===De&&$l($)===x.type)?(B=s(x,w.props),B.ref=gr(_,x,w),B.return=_,B):(B=Is(w.type,w.key,w.props,null,_.mode,B),B.ref=gr(_,x,w),B.return=_,B)}function C(_,x,w,B){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=Hi(w,_.mode,B),x.return=_,x):(x=s(x,w.children||[]),x.return=_,x)}function P(_,x,w,B,$){return x===null||x.tag!==7?(x=gn(w,_.mode,B,$),x.return=_,x):(x=s(x,w),x.return=_,x)}function M(_,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return x=qi(""+x,_.mode,w),x.return=_,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case se:return w=Is(x.type,x.key,x.props,null,_.mode,w),w.ref=gr(_,null,x),w.return=_,w;case pe:return x=Hi(x,_.mode,w),x.return=_,x;case De:var B=x._init;return M(_,B(x._payload),w)}if($n(x)||W(x))return x=gn(x,_.mode,w,null),x.return=_,x;ms(_,x)}return null}function N(_,x,w,B){var $=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return $!==null?null:d(_,x,""+w,B);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case se:return w.key===$?h(_,x,w,B):null;case pe:return w.key===$?C(_,x,w,B):null;case De:return $=w._init,N(_,x,$(w._payload),B)}if($n(w)||W(w))return $!==null?null:P(_,x,w,B,null);ms(_,w)}return null}function z(_,x,w,B,$){if(typeof B=="string"&&B!==""||typeof B=="number")return _=_.get(w)||null,d(x,_,""+B,$);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case se:return _=_.get(B.key===null?w:B.key)||null,h(x,_,B,$);case pe:return _=_.get(B.key===null?w:B.key)||null,C(x,_,B,$);case De:var Y=B._init;return z(_,x,w,Y(B._payload),$)}if($n(B)||W(B))return _=_.get(w)||null,P(x,_,B,$,null);ms(x,B)}return null}function H(_,x,w,B){for(var $=null,Y=null,Z=x,te=x=0,Te=null;Z!==null&&te<w.length;te++){Z.index>te?(Te=Z,Z=null):Te=Z.sibling;var ce=N(_,Z,w[te],B);if(ce===null){Z===null&&(Z=Te);break}e&&Z&&ce.alternate===null&&t(_,Z),x=a(ce,x,te),Y===null?$=ce:Y.sibling=ce,Y=ce,Z=Te}if(te===w.length)return n(_,Z),ve&&ln(_,te),$;if(Z===null){for(;te<w.length;te++)Z=M(_,w[te],B),Z!==null&&(x=a(Z,x,te),Y===null?$=Z:Y.sibling=Z,Y=Z);return ve&&ln(_,te),$}for(Z=r(_,Z);te<w.length;te++)Te=z(Z,_,te,w[te],B),Te!==null&&(e&&Te.alternate!==null&&Z.delete(Te.key===null?te:Te.key),x=a(Te,x,te),Y===null?$=Te:Y.sibling=Te,Y=Te);return e&&Z.forEach(function(nn){return t(_,nn)}),ve&&ln(_,te),$}function Q(_,x,w,B){var $=W(w);if(typeof $!="function")throw Error(l(150));if(w=$.call(w),w==null)throw Error(l(151));for(var Y=$=null,Z=x,te=x=0,Te=null,ce=w.next();Z!==null&&!ce.done;te++,ce=w.next()){Z.index>te?(Te=Z,Z=null):Te=Z.sibling;var nn=N(_,Z,ce.value,B);if(nn===null){Z===null&&(Z=Te);break}e&&Z&&nn.alternate===null&&t(_,Z),x=a(nn,x,te),Y===null?$=nn:Y.sibling=nn,Y=nn,Z=Te}if(ce.done)return n(_,Z),ve&&ln(_,te),$;if(Z===null){for(;!ce.done;te++,ce=w.next())ce=M(_,ce.value,B),ce!==null&&(x=a(ce,x,te),Y===null?$=ce:Y.sibling=ce,Y=ce);return ve&&ln(_,te),$}for(Z=r(_,Z);!ce.done;te++,ce=w.next())ce=z(Z,_,te,ce.value,B),ce!==null&&(e&&ce.alternate!==null&&Z.delete(ce.key===null?te:ce.key),x=a(ce,x,te),Y===null?$=ce:Y.sibling=ce,Y=ce);return e&&Z.forEach(function(Jd){return t(_,Jd)}),ve&&ln(_,te),$}function Fe(_,x,w,B){if(typeof w=="object"&&w!==null&&w.type===fe&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case se:e:{for(var $=w.key,Y=x;Y!==null;){if(Y.key===$){if($=w.type,$===fe){if(Y.tag===7){n(_,Y.sibling),x=s(Y,w.props.children),x.return=_,_=x;break e}}else if(Y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===De&&$l($)===Y.type){n(_,Y.sibling),x=s(Y,w.props),x.ref=gr(_,Y,w),x.return=_,_=x;break e}n(_,Y);break}else t(_,Y);Y=Y.sibling}w.type===fe?(x=gn(w.props.children,_.mode,B,w.key),x.return=_,_=x):(B=Is(w.type,w.key,w.props,null,_.mode,B),B.ref=gr(_,x,w),B.return=_,_=B)}return o(_);case pe:e:{for(Y=w.key;x!==null;){if(x.key===Y)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){n(_,x.sibling),x=s(x,w.children||[]),x.return=_,_=x;break e}else{n(_,x);break}else t(_,x);x=x.sibling}x=Hi(w,_.mode,B),x.return=_,_=x}return o(_);case De:return Y=w._init,Fe(_,x,Y(w._payload),B)}if($n(w))return H(_,x,w,B);if(W(w))return Q(_,x,w,B);ms(_,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,x!==null&&x.tag===6?(n(_,x.sibling),x=s(x,w),x.return=_,_=x):(n(_,x),x=qi(w,_.mode,B),x.return=_,_=x),o(_)):n(_,x)}return Fe}var Bn=Vl(!0),Kl=Vl(!1),hs=$t(null),gs=null,bn=null,Ya=null;function Za(){Ya=bn=gs=null}function Ja(e){var t=hs.current;xe(hs),e._currentValue=t}function ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){gs=e,Ya=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Ya!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(gs===null)throw Error(l(308));bn=e,gs.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var cn=null;function ti(e){cn===null?cn=[e]:cn.push(e)}function Wl(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,ti(t)):(n.next=s.next,s.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(le&2)!==0){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Rt(e,n)}return s=r.interleaved,s===null?(t.next=t,ti(r)):(t.next=s.next,s.next=t),r.interleaved=t,Rt(e,n)}function xs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}function Gl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ys(e,t,n,r){var s=e.updateQueue;Wt=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,d=s.shared.pending;if(d!==null){s.shared.pending=null;var h=d,C=h.next;h.next=null,o===null?a=C:o.next=C,o=h;var P=e.alternate;P!==null&&(P=P.updateQueue,d=P.lastBaseUpdate,d!==o&&(d===null?P.firstBaseUpdate=C:d.next=C,P.lastBaseUpdate=h))}if(a!==null){var M=s.baseState;o=0,P=C=h=null,d=a;do{var N=d.lane,z=d.eventTime;if((r&N)===N){P!==null&&(P=P.next={eventTime:z,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var H=e,Q=d;switch(N=t,z=n,Q.tag){case 1:if(H=Q.payload,typeof H=="function"){M=H.call(z,M,N);break e}M=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=Q.payload,N=typeof H=="function"?H.call(z,M,N):H,N==null)break e;M=j({},M,N);break e;case 2:Wt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,N=s.effects,N===null?s.effects=[d]:N.push(d))}else z={eventTime:z,lane:N,tag:d.tag,payload:d.payload,callback:d.callback,next:null},P===null?(C=P=z,h=M):P=P.next=z,o|=N;if(d=d.next,d===null){if(d=s.shared.pending,d===null)break;N=d,d=N.next,N.next=null,s.lastBaseUpdate=N,s.shared.pending=null}}while(!0);if(P===null&&(h=M),s.baseState=h,s.firstBaseUpdate=C,s.lastBaseUpdate=P,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);dn|=o,e.lanes=o,e.memoizedState=M}}function Yl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(l(191,s));s.call(r)}}}var xr={},At=$t(xr),yr=$t(xr),_r=$t(xr);function pn(e){if(e===xr)throw Error(l(174));return e}function ri(e,t){switch(he(_r,t),he(yr,e),he(At,xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sa(t,e)}xe(At),he(At,t)}function Ln(){xe(At),xe(yr),xe(_r)}function Zl(e){pn(_r.current);var t=pn(At.current),n=sa(t,e.type);t!==n&&(he(yr,e),he(At,n))}function si(e){yr.current===e&&(xe(At),xe(yr))}var ke=$t(0);function _s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ai=[];function ii(){for(var e=0;e<ai.length;e++)ai[e]._workInProgressVersionPrimary=null;ai.length=0}var vs=X.ReactCurrentDispatcher,oi=X.ReactCurrentBatchConfig,un=0,Ae=null,Me=null,Be=null,ws=!1,vr=!1,wr=0,wd=0;function He(){throw Error(l(321))}function li(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function ci(e,t,n,r,s,a){if(un=a,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vs.current=e===null||e.memoizedState===null?Ed:Sd,e=n(r,s),vr){a=0;do{if(vr=!1,wr=0,25<=a)throw Error(l(301));a+=1,Be=Me=null,t.updateQueue=null,vs.current=Fd,e=n(r,s)}while(vr)}if(vs.current=Cs,t=Me!==null&&Me.next!==null,un=0,Be=Me=Ae=null,ws=!1,t)throw Error(l(300));return e}function pi(){var e=wr!==0;return wr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ae.memoizedState=Be=e:Be=Be.next=e,Be}function ct(){if(Me===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Be===null?Ae.memoizedState:Be.next;if(t!==null)Be=t,Me=e;else{if(e===null)throw Error(l(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?Ae.memoizedState=Be=e:Be=Be.next=e}return Be}function kr(e,t){return typeof t=="function"?t(e):t}function ui(e){var t=ct(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=Me,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var d=o=null,h=null,C=a;do{var P=C.lane;if((un&P)===P)h!==null&&(h=h.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),r=C.hasEagerState?C.eagerState:e(r,C.action);else{var M={lane:P,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};h===null?(d=h=M,o=r):h=h.next=M,Ae.lanes|=P,dn|=P}C=C.next}while(C!==null&&C!==a);h===null?o=r:h.next=d,mt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,Ae.lanes|=a,dn|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function di(e){var t=ct(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);mt(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Jl(){}function ec(e,t){var n=Ae,r=ct(),s=t(),a=!mt(r.memoizedState,s);if(a&&(r.memoizedState=s,Ge=!0),r=r.queue,fi(rc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Ar(9,nc.bind(null,n,r,s,t),void 0,null),be===null)throw Error(l(349));(un&30)!==0||tc(n,t,s)}return s}function tc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nc(e,t,n,r){t.value=n,t.getSnapshot=r,sc(t)&&ac(e)}function rc(e,t,n){return n(function(){sc(t)&&ac(e)})}function sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function ac(e){var t=Rt(e,1);t!==null&&_t(t,e,1,-1)}function ic(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:e},t.queue=e,e=e.dispatch=Cd.bind(null,Ae,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function oc(){return ct().memoizedState}function ks(e,t,n,r){var s=Ct();Ae.flags|=e,s.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function As(e,t,n,r){var s=ct();r=r===void 0?null:r;var a=void 0;if(Me!==null){var o=Me.memoizedState;if(a=o.destroy,r!==null&&li(r,o.deps)){s.memoizedState=Ar(t,n,a,r);return}}Ae.flags|=e,s.memoizedState=Ar(1|t,n,a,r)}function lc(e,t){return ks(8390656,8,e,t)}function fi(e,t){return As(2048,8,e,t)}function cc(e,t){return As(4,2,e,t)}function pc(e,t){return As(4,4,e,t)}function uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dc(e,t,n){return n=n!=null?n.concat([e]):null,As(4,4,uc.bind(null,t,e),n)}function mi(){}function fc(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&li(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mc(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&li(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hc(e,t,n){return(un&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(mt(n,t)||(n=$o(),Ae.lanes|=n,dn|=n,e.baseState=!0),t)}function kd(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{de=n,oi.transition=r}}function gc(){return ct().memoizedState}function Ad(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xc(e))yc(t,n);else if(n=Wl(e,t,n,r),n!==null){var s=Ve();_t(n,e,r,s),_c(n,t,r)}}function Cd(e,t,n){var r=Jt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xc(e))yc(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,d=a(o,n);if(s.hasEagerState=!0,s.eagerState=d,mt(d,o)){var h=t.interleaved;h===null?(s.next=s,ti(t)):(s.next=h.next,h.next=s),t.interleaved=s;return}}catch{}finally{}n=Wl(e,t,s,r),n!==null&&(s=Ve(),_t(n,e,r,s),_c(n,t,r))}}function xc(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function yc(e,t){vr=ws=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _c(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}var Cs={readContext:lt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},Ed={readContext:lt,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:lc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ks(4194308,4,uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ks(4194308,4,e,t)},useInsertionEffect:function(e,t){return ks(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ad.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:mi,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=kd.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,s=Ct();if(ve){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),be===null)throw Error(l(349));(un&30)!==0||tc(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,lc(rc.bind(null,r,a,e),[e]),r.flags|=2048,Ar(9,nc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ct(),t=be.identifierPrefix;if(ve){var n=Mt,r=Pt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sd={readContext:lt,useCallback:fc,useContext:lt,useEffect:fi,useImperativeHandle:dc,useInsertionEffect:cc,useLayoutEffect:pc,useMemo:mc,useReducer:ui,useRef:oc,useState:function(){return ui(kr)},useDebugValue:mi,useDeferredValue:function(e){var t=ct();return hc(t,Me.memoizedState,e)},useTransition:function(){var e=ui(kr)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Jl,useSyncExternalStore:ec,useId:gc,unstable_isNewReconciler:!1},Fd={readContext:lt,useCallback:fc,useContext:lt,useEffect:fi,useImperativeHandle:dc,useInsertionEffect:cc,useLayoutEffect:pc,useMemo:mc,useReducer:di,useRef:oc,useState:function(){return di(kr)},useDebugValue:mi,useDeferredValue:function(e){var t=ct();return Me===null?t.memoizedState=e:hc(t,Me.memoizedState,e)},useTransition:function(){var e=di(kr)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Jl,useSyncExternalStore:ec,useId:gc,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Es={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),s=Jt(e),a=Bt(r,s);a.payload=t,n!=null&&(a.callback=n),t=Xt(e,a,s),t!==null&&(_t(t,e,s,r),xs(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),s=Jt(e),a=Bt(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Xt(e,a,s),t!==null&&(_t(t,e,s,r),xs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=Jt(e),s=Bt(n,r);s.tag=2,t!=null&&(s.callback=t),t=Xt(e,s,r),t!==null&&(_t(t,e,r,n),xs(t,e,r))}};function vc(e,t,n,r,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!cr(n,r)||!cr(s,a):!0}function wc(e,t,n){var r=!1,s=Vt,a=t.contextType;return typeof a=="object"&&a!==null?a=lt(a):(s=Xe(t)?an:qe.current,r=t.contextTypes,a=(r=r!=null)?jn(e,s):Vt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Es,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function kc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Es.enqueueReplaceState(t,t.state,null)}function gi(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},ni(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=lt(a):(a=Xe(t)?an:qe.current,s.context=jn(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(hi(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Es.enqueueReplaceState(s,s.state,null),ys(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",r=t;do n+=oe(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function xi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dd=typeof WeakMap=="function"?WeakMap:Map;function Ac(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ms||(Ms=!0,Ri=r),yi(e,t)},n}function Cc(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){yi(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){yi(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ec(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dd;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Hd.bind(null,e,t,n),t.then(e,e))}function Sc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fc(e,t,n,r,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Nd=X.ReactCurrentOwner,Ge=!1;function $e(e,t,n,r){t.child=e===null?Kl(t,null,n,r):Bn(t,e.child,n,r)}function Dc(e,t,n,r,s){n=n.render;var a=t.ref;return Tn(t,s),r=ci(e,t,n,r,a,s),n=pi(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,bt(e,t,s)):(ve&&n&&Va(t),t.flags|=1,$e(e,t,r,s),t.child)}function Nc(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!Oi(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,jc(e,t,a,r,s)):(e=Is(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&s)===0){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:cr,n(o,r)&&e.ref===t.ref)return bt(e,t,s)}return t.flags|=1,e=tn(a,r),e.ref=t.ref,e.return=t,t.child=e}function jc(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(cr(a,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,bt(e,t,s)}return _i(e,t,n,r,s)}function Pc(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(On,at),at|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(On,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,he(On,at),at|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,he(On,at),at|=r;return $e(e,t,s,n),t.child}function Mc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _i(e,t,n,r,s){var a=Xe(n)?an:qe.current;return a=jn(t,a),Tn(t,s),n=ci(e,t,n,r,a,s),r=pi(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,bt(e,t,s)):(ve&&r&&Va(t),t.flags|=1,$e(e,t,n,s),t.child)}function Rc(e,t,n,r,s){if(Xe(n)){var a=!0;cs(t)}else a=!1;if(Tn(t,s),t.stateNode===null)Fs(e,t),wc(t,n,r),gi(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,d=t.memoizedProps;o.props=d;var h=o.context,C=n.contextType;typeof C=="object"&&C!==null?C=lt(C):(C=Xe(n)?an:qe.current,C=jn(t,C));var P=n.getDerivedStateFromProps,M=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function";M||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==r||h!==C)&&kc(t,o,r,C),Wt=!1;var N=t.memoizedState;o.state=N,ys(t,r,o,s),h=t.memoizedState,d!==r||N!==h||We.current||Wt?(typeof P=="function"&&(hi(t,n,P,r),h=t.memoizedState),(d=Wt||vc(t,n,d,r,N,h,C))?(M||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=C,r=d):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Xl(e,t),d=t.memoizedProps,C=t.type===t.elementType?d:gt(t.type,d),o.props=C,M=t.pendingProps,N=o.context,h=n.contextType,typeof h=="object"&&h!==null?h=lt(h):(h=Xe(n)?an:qe.current,h=jn(t,h));var z=n.getDerivedStateFromProps;(P=typeof z=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==M||N!==h)&&kc(t,o,r,h),Wt=!1,N=t.memoizedState,o.state=N,ys(t,r,o,s);var H=t.memoizedState;d!==M||N!==H||We.current||Wt?(typeof z=="function"&&(hi(t,n,z,r),H=t.memoizedState),(C=Wt||vc(t,n,C,r,N,H,h)||!1)?(P||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,H,h),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,H,h)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=H),o.props=r,o.state=H,o.context=h,r=C):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),r=!1)}return vi(e,t,n,r,a,s)}function vi(e,t,n,r,s,a){Mc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&Il(t,n,!1),bt(e,t,a);r=t.stateNode,Nd.current=t;var d=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Bn(t,e.child,null,a),t.child=Bn(t,null,d,a)):$e(e,t,d,a),t.memoizedState=r.state,s&&Il(t,n,!0),t.child}function Bc(e){var t=e.stateNode;t.pendingContext?Tl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tl(e,t.context,!1),ri(e,t.containerInfo)}function bc(e,t,n,r,s){return Rn(),Ga(s),t.flags|=256,$e(e,t,n,r),t.child}var wi={dehydrated:null,treeContext:null,retryLane:0};function ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tc(e,t,n){var r=t.pendingProps,s=ke.current,a=!1,o=(t.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(s&2)!==0),d?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),he(ke,s&1),e===null)return Xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=zs(o,r,0,null),e=gn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ki(n),t.memoizedState=wi,e):Ai(t,o));if(s=e.memoizedState,s!==null&&(d=s.dehydrated,d!==null))return jd(e,t,o,r,d,s,n);if(a){a=r.fallback,o=t.mode,s=e.child,d=s.sibling;var h={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=tn(s,h),r.subtreeFlags=s.subtreeFlags&14680064),d!==null?a=tn(d,a):(a=gn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ki(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=wi,r}return a=e.child,e=a.sibling,r=tn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ai(e,t){return t=zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ss(e,t,n,r){return r!==null&&Ga(r),Bn(t,e.child,null,n),e=Ai(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jd(e,t,n,r,s,a,o){if(n)return t.flags&256?(t.flags&=-257,r=xi(Error(l(422))),Ss(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=zs({mode:"visible",children:r.children},s,0,null),a=gn(a,s,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Bn(t,e.child,null,o),t.child.memoizedState=ki(o),t.memoizedState=wi,a);if((t.mode&1)===0)return Ss(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var d=r.dgst;return r=d,a=Error(l(419)),r=xi(a,r,void 0),Ss(e,t,o,r)}if(d=(o&e.childLanes)!==0,Ge||d){if(r=be,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(r.suspendedLanes|o))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Rt(e,s),_t(r,e,s,-1))}return zi(),r=xi(Error(l(421))),Ss(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Qd.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,st=Ut(s.nextSibling),rt=t,ve=!0,ht=null,e!==null&&(it[ot++]=Pt,it[ot++]=Mt,it[ot++]=on,Pt=e.id,Mt=e.overflow,on=t),t=Ai(t,r.children),t.flags|=4096,t)}function Lc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ei(e.return,t,n)}function Ci(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Ic(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if($e(e,t,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lc(e,n,t);else if(e.tag===19)Lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(ke,r),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&_s(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ci(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&_s(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ci(t,!0,n,null,a);break;case"together":Ci(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pd(e,t,n){switch(t.tag){case 3:Bc(t),Rn();break;case 5:Zl(t);break;case 1:Xe(t.type)&&cs(t);break;case 4:ri(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;he(hs,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(ke,ke.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Tc(e,t,n):(he(ke,ke.current&1),e=bt(e,t,n),e!==null?e.sibling:null);he(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ic(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),he(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,Pc(e,t,n)}return bt(e,t,n)}var zc,Ei,Oc,qc;zc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ei=function(){},Oc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,pn(At.current);var a=null;switch(n){case"input":s=ea(e,s),r=ea(e,r),a=[];break;case"select":s=j({},s,{value:void 0}),r=j({},r,{value:void 0}),a=[];break;case"textarea":s=ra(e,s),r=ra(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=is)}aa(n,r);var o;n=null;for(C in s)if(!r.hasOwnProperty(C)&&s.hasOwnProperty(C)&&s[C]!=null)if(C==="style"){var d=s[C];for(o in d)d.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(f.hasOwnProperty(C)?a||(a=[]):(a=a||[]).push(C,null));for(C in r){var h=r[C];if(d=s!=null?s[C]:void 0,r.hasOwnProperty(C)&&h!==d&&(h!=null||d!=null))if(C==="style")if(d){for(o in d)!d.hasOwnProperty(o)||h&&h.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in h)h.hasOwnProperty(o)&&d[o]!==h[o]&&(n||(n={}),n[o]=h[o])}else n||(a||(a=[]),a.push(C,n)),n=h;else C==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,d=d?d.__html:void 0,h!=null&&d!==h&&(a=a||[]).push(C,h)):C==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(C,""+h):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(f.hasOwnProperty(C)?(h!=null&&C==="onScroll"&&ge("scroll",e),a||d===h||(a=[])):(a=a||[]).push(C,h))}n&&(a=a||[]).push("style",n);var C=a;(t.updateQueue=C)&&(t.flags|=4)}},qc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Md(e,t,n){var r=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return Xe(t.type)&&ls(),Qe(t),null;case 3:return r=t.stateNode,Ln(),xe(We),xe(qe),ii(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ht!==null&&(Ti(ht),ht=null))),Ei(e,t),Qe(t),null;case 5:si(t);var s=pn(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)Oc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return Qe(t),null}if(e=pn(At.current),fs(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[kt]=t,r[mr]=a,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(s=0;s<ur.length;s++)ge(ur[s],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":wo(r,a),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ge("invalid",r);break;case"textarea":Co(r,a),ge("invalid",r)}aa(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="children"?typeof d=="string"?r.textContent!==d&&(a.suppressHydrationWarning!==!0&&as(r.textContent,d,e),s=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(a.suppressHydrationWarning!==!0&&as(r.textContent,d,e),s=["children",""+d]):f.hasOwnProperty(o)&&d!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Tr(r),Ao(r,a,!0);break;case"textarea":Tr(r),So(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=is)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[kt]=t,e[mr]=r,zc(e,t,!1,!1),t.stateNode=e;e:{switch(o=ia(n,r),n){case"dialog":ge("cancel",e),ge("close",e),s=r;break;case"iframe":case"object":case"embed":ge("load",e),s=r;break;case"video":case"audio":for(s=0;s<ur.length;s++)ge(ur[s],e);s=r;break;case"source":ge("error",e),s=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),s=r;break;case"details":ge("toggle",e),s=r;break;case"input":wo(e,r),s=ea(e,r),ge("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=j({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Co(e,r),s=ra(e,r),ge("invalid",e);break;default:s=r}aa(n,s),d=s;for(a in d)if(d.hasOwnProperty(a)){var h=d[a];a==="style"?jo(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Do(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Vn(e,h):typeof h=="number"&&Vn(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(f.hasOwnProperty(a)?h!=null&&a==="onScroll"&&ge("scroll",e):h!=null&&ee(e,a,h,o))}switch(n){case"input":Tr(e),Ao(e,r,!1);break;case"textarea":Tr(e),So(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?yn(e,!!r.multiple,a,!1):r.defaultValue!=null&&yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=is)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)qc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=pn(_r.current),pn(At.current),fs(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(a=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:as(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&as(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Qe(t),null;case 13:if(xe(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&st!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ul(),Rn(),t.flags|=98560,a=!1;else if(a=fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[kt]=t}else Rn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),a=!1}else ht!==null&&(Ti(ht),ht=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?Re===0&&(Re=3):zi())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Ln(),Ei(e,t),e===null&&dr(t.stateNode.containerInfo),Qe(t),null;case 10:return Ja(t.type._context),Qe(t),null;case 17:return Xe(t.type)&&ls(),Qe(t),null;case 19:if(xe(ke),a=t.memoizedState,a===null)return Qe(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Cr(a,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=_s(e),o!==null){for(t.flags|=128,Cr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(ke,ke.current&1|2),t.child}e=e.sibling}a.tail!==null&&Se()>qn&&(t.flags|=128,r=!0,Cr(a,!1),t.lanes=4194304)}else{if(!r)if(e=_s(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ve)return Qe(t),null}else 2*Se()-a.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,Cr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Se(),t.sibling=null,n=ke.current,he(ke,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return Ii(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Rd(e,t){switch(Ka(t),t.tag){case 1:return Xe(t.type)&&ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),xe(We),xe(qe),ii(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return si(t),null;case 13:if(xe(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(ke),null;case 4:return Ln(),null;case 10:return Ja(t.type._context),null;case 22:case 23:return Ii(),null;case 24:return null;default:return null}}var Ds=!1,Ue=!1,Bd=typeof WeakSet=="function"?WeakSet:Set,q=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Si(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var Hc=!1;function bd(e,t){if(Ia=Wr,e=vl(),ja(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,d=-1,h=-1,C=0,P=0,M=e,N=null;t:for(;;){for(var z;M!==n||s!==0&&M.nodeType!==3||(d=o+s),M!==a||r!==0&&M.nodeType!==3||(h=o+r),M.nodeType===3&&(o+=M.nodeValue.length),(z=M.firstChild)!==null;)N=M,M=z;for(;;){if(M===e)break t;if(N===n&&++C===s&&(d=o),N===a&&++P===r&&(h=o),(z=M.nextSibling)!==null)break;M=N,N=M.parentNode}M=z}n=d===-1||h===-1?null:{start:d,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(za={focusedElem:e,selectionRange:n},Wr=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var H=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var Q=H.memoizedProps,Fe=H.memoizedState,_=t.stateNode,x=_.getSnapshotBeforeUpdate(t.elementType===t.type?Q:gt(t.type,Q),Fe);_.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(B){Ee(t,t.return,B)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return H=Hc,Hc=!1,H}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Si(t,n,a)}s=s.next}while(s!==r)}}function Ns(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qc(e){var t=e.alternate;t!==null&&(e.alternate=null,Qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[mr],delete t[Qa],delete t[xd],delete t[yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uc(e){return e.tag===5||e.tag===3||e.tag===4}function $c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=is));else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}function Ni(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ni(e,t,n),e=e.sibling;e!==null;)Ni(e,t,n),e=e.sibling}var ze=null,xt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Vc(e,t,n),n=n.sibling}function Vc(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Hr,n)}catch{}switch(n.tag){case 5:Ue||zn(n,t);case 6:var r=ze,s=xt;ze=null,Gt(e,t,n),ze=r,xt=s,ze!==null&&(xt?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(xt?(e=ze,n=n.stateNode,e.nodeType===8?Ha(e.parentNode,n):e.nodeType===1&&Ha(e,n),rr(e)):Ha(ze,n.stateNode));break;case 4:r=ze,s=xt,ze=n.stateNode.containerInfo,xt=!0,Gt(e,t,n),ze=r,xt=s;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&Si(n,t,o),s=s.next}while(s!==r)}Gt(e,t,n);break;case 1:if(!Ue&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Ee(n,t,d)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Gt(e,t,n),Ue=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Kc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bd),t.forEach(function(r){var s=Ud.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 5:ze=d.stateNode,xt=!1;break e;case 3:ze=d.stateNode.containerInfo,xt=!0;break e;case 4:ze=d.stateNode.containerInfo,xt=!0;break e}d=d.return}if(ze===null)throw Error(l(160));Vc(a,o,s),ze=null,xt=!1;var h=s.alternate;h!==null&&(h.return=null),s.return=null}catch(C){Ee(s,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wc(t,e),t=t.sibling}function Wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),Et(e),r&4){try{Er(3,e,e.return),Ns(3,e)}catch(Q){Ee(e,e.return,Q)}try{Er(5,e,e.return)}catch(Q){Ee(e,e.return,Q)}}break;case 1:yt(t,e),Et(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(yt(t,e),Et(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var s=e.stateNode;try{Vn(s,"")}catch(Q){Ee(e,e.return,Q)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,d=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{d==="input"&&a.type==="radio"&&a.name!=null&&ko(s,a),ia(d,o);var C=ia(d,a);for(o=0;o<h.length;o+=2){var P=h[o],M=h[o+1];P==="style"?jo(s,M):P==="dangerouslySetInnerHTML"?Do(s,M):P==="children"?Vn(s,M):ee(s,P,M,C)}switch(d){case"input":ta(s,a);break;case"textarea":Eo(s,a);break;case"select":var N=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var z=a.value;z!=null?yn(s,!!a.multiple,z,!1):N!==!!a.multiple&&(a.defaultValue!=null?yn(s,!!a.multiple,a.defaultValue,!0):yn(s,!!a.multiple,a.multiple?[]:"",!1))}s[mr]=a}catch(Q){Ee(e,e.return,Q)}}break;case 6:if(yt(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(Q){Ee(e,e.return,Q)}}break;case 3:if(yt(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rr(t.containerInfo)}catch(Q){Ee(e,e.return,Q)}break;case 4:yt(t,e),Et(e);break;case 13:yt(t,e),Et(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Mi=Se())),r&4&&Kc(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(C=Ue)||P,yt(t,e),Ue=C):yt(t,e),Et(e),r&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!P&&(e.mode&1)!==0)for(q=e,P=e.child;P!==null;){for(M=q=P;q!==null;){switch(N=q,z=N.child,N.tag){case 0:case 11:case 14:case 15:Er(4,N,N.return);break;case 1:zn(N,N.return);var H=N.stateNode;if(typeof H.componentWillUnmount=="function"){r=N,n=N.return;try{t=r,H.props=t.memoizedProps,H.state=t.memoizedState,H.componentWillUnmount()}catch(Q){Ee(r,n,Q)}}break;case 5:zn(N,N.return);break;case 22:if(N.memoizedState!==null){Yc(M);continue}}z!==null?(z.return=N,q=z):Yc(M)}P=P.sibling}e:for(P=null,M=e;;){if(M.tag===5){if(P===null){P=M;try{s=M.stateNode,C?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(d=M.stateNode,h=M.memoizedProps.style,o=h!=null&&h.hasOwnProperty("display")?h.display:null,d.style.display=No("display",o))}catch(Q){Ee(e,e.return,Q)}}}else if(M.tag===6){if(P===null)try{M.stateNode.nodeValue=C?"":M.memoizedProps}catch(Q){Ee(e,e.return,Q)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===e)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===e)break e;for(;M.sibling===null;){if(M.return===null||M.return===e)break e;P===M&&(P=null),M=M.return}P===M&&(P=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:yt(t,e),Et(e),r&4&&Kc(e);break;case 21:break;default:yt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uc(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Vn(s,""),r.flags&=-33);var a=$c(e);Ni(e,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,d=$c(e);Di(e,d,o);break;default:throw Error(l(161))}}catch(h){Ee(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Td(e,t,n){q=e,Xc(e)}function Xc(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var s=q,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ds;if(!o){var d=s.alternate,h=d!==null&&d.memoizedState!==null||Ue;d=Ds;var C=Ue;if(Ds=o,(Ue=h)&&!C)for(q=s;q!==null;)o=q,h=o.child,o.tag===22&&o.memoizedState!==null?Zc(s):h!==null?(h.return=o,q=h):Zc(s);for(;a!==null;)q=a,Xc(a),a=a.sibling;q=s,Ds=d,Ue=C}Gc(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,q=a):Gc(e)}}function Gc(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ue||Ns(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Yl(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yl(t,o,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var P=C.memoizedState;if(P!==null){var M=P.dehydrated;M!==null&&rr(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ue||t.flags&512&&Fi(t)}catch(N){Ee(t,t.return,N)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function Yc(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Zc(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ns(4,t)}catch(h){Ee(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(h){Ee(t,s,h)}}var a=t.return;try{Fi(t)}catch(h){Ee(t,a,h)}break;case 5:var o=t.return;try{Fi(t)}catch(h){Ee(t,o,h)}}}catch(h){Ee(t,t.return,h)}if(t===e){q=null;break}var d=t.sibling;if(d!==null){d.return=t.return,q=d;break}q=t.return}}var Ld=Math.ceil,js=X.ReactCurrentDispatcher,ji=X.ReactCurrentOwner,pt=X.ReactCurrentBatchConfig,le=0,be=null,Ne=null,Oe=0,at=0,On=$t(0),Re=0,Sr=null,dn=0,Ps=0,Pi=0,Fr=null,Ye=null,Mi=0,qn=1/0,Tt=null,Ms=!1,Ri=null,Yt=null,Rs=!1,Zt=null,Bs=0,Dr=0,Bi=null,bs=-1,Ts=0;function Ve(){return(le&6)!==0?Se():bs!==-1?bs:bs=Se()}function Jt(e){return(e.mode&1)===0?1:(le&2)!==0&&Oe!==0?Oe&-Oe:vd.transition!==null?(Ts===0&&(Ts=$o()),Ts):(e=de,e!==0||(e=window.event,e=e===void 0?16:el(e.type)),e)}function _t(e,t,n,r){if(50<Dr)throw Dr=0,Bi=null,Error(l(185));Zn(e,n,r),((le&2)===0||e!==be)&&(e===be&&((le&2)===0&&(Ps|=n),Re===4&&en(e,Oe)),Ze(e,r),n===1&&le===0&&(t.mode&1)===0&&(qn=Se()+500,ps&&Kt()))}function Ze(e,t){var n=e.callbackNode;vu(e,t);var r=$r(e,e===be?Oe:0);if(r===0)n!==null&&Ho(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ho(n),t===1)e.tag===0?_d(ep.bind(null,e)):zl(ep.bind(null,e)),hd(function(){(le&6)===0&&Kt()}),n=null;else{switch(Vo(r)){case 1:n=fa;break;case 4:n=Qo;break;case 16:n=qr;break;case 536870912:n=Uo;break;default:n=qr}n=lp(n,Jc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jc(e,t){if(bs=-1,Ts=0,(le&6)!==0)throw Error(l(327));var n=e.callbackNode;if(Hn()&&e.callbackNode!==n)return null;var r=$r(e,e===be?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ls(e,r);else{t=r;var s=le;le|=2;var a=np();(be!==e||Oe!==t)&&(Tt=null,qn=Se()+500,mn(e,t));do try{Od();break}catch(d){tp(e,d)}while(!0);Za(),js.current=a,le=s,Ne!==null?t=0:(be=null,Oe=0,t=Re)}if(t!==0){if(t===2&&(s=ma(e),s!==0&&(r=s,t=bi(e,s))),t===1)throw n=Sr,mn(e,0),en(e,r),Ze(e,Se()),n;if(t===6)en(e,r);else{if(s=e.current.alternate,(r&30)===0&&!Id(s)&&(t=Ls(e,r),t===2&&(a=ma(e),a!==0&&(r=a,t=bi(e,a))),t===1))throw n=Sr,mn(e,0),en(e,r),Ze(e,Se()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:hn(e,Ye,Tt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=Mi+500-Se(),10<t)){if($r(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=qa(hn.bind(null,e,Ye,Tt),t);break}hn(e,Ye,Tt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-ft(r);a=1<<o,o=t[o],o>s&&(s=o),r&=~a}if(r=s,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ld(r/1960))-r,10<r){e.timeoutHandle=qa(hn.bind(null,e,Ye,Tt),r);break}hn(e,Ye,Tt);break;case 5:hn(e,Ye,Tt);break;default:throw Error(l(329))}}}return Ze(e,Se()),e.callbackNode===n?Jc.bind(null,e):null}function bi(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Ls(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Ti(t)),e}function Ti(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Id(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!mt(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~Pi,t&=~Ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function ep(e){if((le&6)!==0)throw Error(l(327));Hn();var t=$r(e,0);if((t&1)===0)return Ze(e,Se()),null;var n=Ls(e,t);if(e.tag!==0&&n===2){var r=ma(e);r!==0&&(t=r,n=bi(e,r))}if(n===1)throw n=Sr,mn(e,0),en(e,t),Ze(e,Se()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Ye,Tt),Ze(e,Se()),null}function Li(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(qn=Se()+500,ps&&Kt())}}function fn(e){Zt!==null&&Zt.tag===0&&(le&6)===0&&Hn();var t=le;le|=1;var n=pt.transition,r=de;try{if(pt.transition=null,de=1,e)return e()}finally{de=r,pt.transition=n,le=t,(le&6)===0&&Kt()}}function Ii(){at=On.current,xe(On)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,md(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ls();break;case 3:Ln(),xe(We),xe(qe),ii();break;case 5:si(r);break;case 4:Ln();break;case 13:xe(ke);break;case 19:xe(ke);break;case 10:Ja(r.type._context);break;case 22:case 23:Ii()}n=n.return}if(be=e,Ne=e=tn(e.current,null),Oe=at=t,Re=0,Sr=null,Pi=Ps=dn=0,Ye=Fr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}n.pending=r}cn=null}return e}function tp(e,t){do{var n=Ne;try{if(Za(),vs.current=Cs,ws){for(var r=Ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ws=!1}if(un=0,Be=Me=Ae=null,vr=!1,wr=0,ji.current=null,n===null||n.return===null){Re=1,Sr=t,Ne=null;break}e:{var a=e,o=n.return,d=n,h=t;if(t=Oe,d.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var C=h,P=d,M=P.tag;if((P.mode&1)===0&&(M===0||M===11||M===15)){var N=P.alternate;N?(P.updateQueue=N.updateQueue,P.memoizedState=N.memoizedState,P.lanes=N.lanes):(P.updateQueue=null,P.memoizedState=null)}var z=Sc(o);if(z!==null){z.flags&=-257,Fc(z,o,d,a,t),z.mode&1&&Ec(a,C,t),t=z,h=C;var H=t.updateQueue;if(H===null){var Q=new Set;Q.add(h),t.updateQueue=Q}else H.add(h);break e}else{if((t&1)===0){Ec(a,C,t),zi();break e}h=Error(l(426))}}else if(ve&&d.mode&1){var Fe=Sc(o);if(Fe!==null){(Fe.flags&65536)===0&&(Fe.flags|=256),Fc(Fe,o,d,a,t),Ga(In(h,d));break e}}a=h=In(h,d),Re!==4&&(Re=2),Fr===null?Fr=[a]:Fr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var _=Ac(a,h,t);Gl(a,_);break e;case 1:d=h;var x=a.type,w=a.stateNode;if((a.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Yt===null||!Yt.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var B=Cc(a,d,t);Gl(a,B);break e}}a=a.return}while(a!==null)}sp(n)}catch($){t=$,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function np(){var e=js.current;return js.current=Cs,e===null?Cs:e}function zi(){(Re===0||Re===3||Re===2)&&(Re=4),be===null||(dn&268435455)===0&&(Ps&268435455)===0||en(be,Oe)}function Ls(e,t){var n=le;le|=2;var r=np();(be!==e||Oe!==t)&&(Tt=null,mn(e,t));do try{zd();break}catch(s){tp(e,s)}while(!0);if(Za(),le=n,js.current=r,Ne!==null)throw Error(l(261));return be=null,Oe=0,Re}function zd(){for(;Ne!==null;)rp(Ne)}function Od(){for(;Ne!==null&&!uu();)rp(Ne)}function rp(e){var t=op(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?sp(e):Ne=t,ji.current=null}function sp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Md(n,t,at),n!==null){Ne=n;return}}else{if(n=Rd(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Ne=null;return}}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Re===0&&(Re=5)}function hn(e,t,n){var r=de,s=pt.transition;try{pt.transition=null,de=1,qd(e,t,n,r)}finally{pt.transition=s,de=r}return null}function qd(e,t,n,r){do Hn();while(Zt!==null);if((le&6)!==0)throw Error(l(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(wu(e,a),e===be&&(Ne=be=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Rs||(Rs=!0,lp(qr,function(){return Hn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=pt.transition,pt.transition=null;var o=de;de=1;var d=le;le|=4,ji.current=null,bd(e,n),Wc(n,e),od(za),Wr=!!Ia,za=Ia=null,e.current=n,Td(n),du(),le=d,de=o,pt.transition=a}else e.current=n;if(Rs&&(Rs=!1,Zt=e,Bs=s),a=e.pendingLanes,a===0&&(Yt=null),hu(n.stateNode),Ze(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ms)throw Ms=!1,e=Ri,Ri=null,e;return(Bs&1)!==0&&e.tag!==0&&Hn(),a=e.pendingLanes,(a&1)!==0?e===Bi?Dr++:(Dr=0,Bi=e):Dr=0,Kt(),null}function Hn(){if(Zt!==null){var e=Vo(Bs),t=pt.transition,n=de;try{if(pt.transition=null,de=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Bs=0,(le&6)!==0)throw Error(l(331));var s=le;for(le|=4,q=e.current;q!==null;){var a=q,o=a.child;if((q.flags&16)!==0){var d=a.deletions;if(d!==null){for(var h=0;h<d.length;h++){var C=d[h];for(q=C;q!==null;){var P=q;switch(P.tag){case 0:case 11:case 15:Er(8,P,a)}var M=P.child;if(M!==null)M.return=P,q=M;else for(;q!==null;){P=q;var N=P.sibling,z=P.return;if(Qc(P),P===C){q=null;break}if(N!==null){N.return=z,q=N;break}q=z}}}var H=a.alternate;if(H!==null){var Q=H.child;if(Q!==null){H.child=null;do{var Fe=Q.sibling;Q.sibling=null,Q=Fe}while(Q!==null)}}q=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,q=o;else e:for(;q!==null;){if(a=q,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Er(9,a,a.return)}var _=a.sibling;if(_!==null){_.return=a.return,q=_;break e}q=a.return}}var x=e.current;for(q=x;q!==null;){o=q;var w=o.child;if((o.subtreeFlags&2064)!==0&&w!==null)w.return=o,q=w;else e:for(o=x;q!==null;){if(d=q,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Ns(9,d)}}catch($){Ee(d,d.return,$)}if(d===o){q=null;break e}var B=d.sibling;if(B!==null){B.return=d.return,q=B;break e}q=d.return}}if(le=s,Kt(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Hr,e)}catch{}r=!0}return r}finally{de=n,pt.transition=t}}return!1}function ap(e,t,n){t=In(n,t),t=Ac(e,t,1),e=Xt(e,t,1),t=Ve(),e!==null&&(Zn(e,1,t),Ze(e,t))}function Ee(e,t,n){if(e.tag===3)ap(e,e,n);else for(;t!==null;){if(t.tag===3){ap(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=In(n,e),e=Cc(t,e,1),t=Xt(t,e,1),e=Ve(),t!==null&&(Zn(t,1,e),Ze(t,e));break}}t=t.return}}function Hd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Oe&n)===n&&(Re===4||Re===3&&(Oe&130023424)===Oe&&500>Se()-Mi?mn(e,0):Pi|=n),Ze(e,t)}function ip(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ur,Ur<<=1,(Ur&130023424)===0&&(Ur=4194304)));var n=Ve();e=Rt(e,t),e!==null&&(Zn(e,t,n),Ze(e,n))}function Qd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ip(e,n)}function Ud(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),ip(e,n)}var op;op=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,Pd(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,ve&&(t.flags&1048576)!==0&&Ol(t,ds,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fs(e,t),e=t.pendingProps;var s=jn(t,qe.current);Tn(t,n),s=ci(null,t,r,e,s,n);var a=pi();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(a=!0,cs(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ni(t),s.updater=Es,t.stateNode=s,s._reactInternals=t,gi(t,r,e,n),t=vi(null,t,r,!0,a,n)):(t.tag=0,ve&&a&&Va(t),$e(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fs(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Vd(r),e=gt(r,e),s){case 0:t=_i(null,t,r,e,n);break e;case 1:t=Rc(null,t,r,e,n);break e;case 11:t=Dc(null,t,r,e,n);break e;case 14:t=Nc(null,t,r,gt(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:gt(r,s),_i(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:gt(r,s),Rc(e,t,r,s,n);case 3:e:{if(Bc(t),e===null)throw Error(l(387));r=t.pendingProps,a=t.memoizedState,s=a.element,Xl(e,t),ys(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=In(Error(l(423)),t),t=bc(e,t,r,n,s);break e}else if(r!==s){s=In(Error(l(424)),t),t=bc(e,t,r,n,s);break e}else for(st=Ut(t.stateNode.containerInfo.firstChild),rt=t,ve=!0,ht=null,n=Kl(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rn(),r===s){t=bt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return Zl(t),e===null&&Xa(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,Oa(r,s)?o=null:a!==null&&Oa(r,a)&&(t.flags|=32),Mc(e,t),$e(e,t,o,n),t.child;case 6:return e===null&&Xa(t),null;case 13:return Tc(e,t,n);case 4:return ri(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:gt(r,s),Dc(e,t,r,s,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,he(hs,r._currentValue),r._currentValue=o,a!==null)if(mt(a.value,o)){if(a.children===s.children&&!We.current){t=bt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var d=a.dependencies;if(d!==null){o=a.child;for(var h=d.firstContext;h!==null;){if(h.context===r){if(a.tag===1){h=Bt(-1,n&-n),h.tag=2;var C=a.updateQueue;if(C!==null){C=C.shared;var P=C.pending;P===null?h.next=h:(h.next=P.next,P.next=h),C.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),ei(a.return,n,t),d.lanes|=n;break}h=h.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(l(341));o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),ei(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}$e(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Tn(t,n),s=lt(s),r=r(s),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,s=gt(r,t.pendingProps),s=gt(r.type,s),Nc(e,t,r,s,n);case 15:return jc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:gt(r,s),Fs(e,t),t.tag=1,Xe(r)?(e=!0,cs(t)):e=!1,Tn(t,n),wc(t,r,s),gi(t,r,s,n),vi(null,t,r,!0,e,n);case 19:return Ic(e,t,n);case 22:return Pc(e,t,n)}throw Error(l(156,t.tag))};function lp(e,t){return qo(e,t)}function $d(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new $d(e,t,n,r)}function Oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vd(e){if(typeof e=="function")return Oi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ie)return 11;if(e===ye)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Is(e,t,n,r,s,a){var o=2;if(r=e,typeof e=="function")Oi(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fe:return gn(n.children,s,a,t);case we:o=8,s|=8;break;case je:return e=ut(12,n,t,s|2),e.elementType=je,e.lanes=a,e;case ne:return e=ut(13,n,t,s),e.elementType=ne,e.lanes=a,e;case Pe:return e=ut(19,n,t,s),e.elementType=Pe,e.lanes=a,e;case O:return zs(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:o=10;break e;case Ke:o=9;break e;case Ie:o=11;break e;case ye:o=14;break e;case De:o=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=ut(o,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function gn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function zs(e,t,n,r){return e=ut(22,e,r,t),e.elementType=O,e.lanes=n,e.stateNode={isHidden:!1},e}function qi(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Hi(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kd(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ha(0),this.expirationTimes=ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qi(e,t,n,r,s,a,o,d,h){return e=new Kd(e,t,n,d,h),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ut(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ni(a),e}function Wd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cp(e){if(!e)return Vt;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(Xe(n))return Ll(e,n,t)}return t}function pp(e,t,n,r,s,a,o,d,h){return e=Qi(n,r,!0,e,s,a,o,d,h),e.context=cp(null),n=e.current,r=Ve(),s=Jt(n),a=Bt(r,s),a.callback=t??null,Xt(n,a,s),e.current.lanes=s,Zn(e,s,r),Ze(e,r),e}function Os(e,t,n,r){var s=t.current,a=Ve(),o=Jt(s);return n=cp(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(s,t,o),e!==null&&(_t(e,s,o,a),xs(e,s,o)),o}function qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ui(e,t){up(e,t),(e=e.alternate)&&up(e,t)}function Xd(){return null}var dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function $i(e){this._internalRoot=e}Hs.prototype.render=$i.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Os(e,t,null,null)},Hs.prototype.unmount=$i.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Os(null,e,null,null)}),t[Nt]=null}};function Hs(e){this._internalRoot=e}Hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&Zo(e)}};function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fp(){}function Gd(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var C=qs(o);a.call(C)}}var o=pp(t,r,e,0,null,!1,!1,"",fp);return e._reactRootContainer=o,e[Nt]=o.current,dr(e.nodeType===8?e.parentNode:e),fn(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var d=r;r=function(){var C=qs(h);d.call(C)}}var h=Qi(e,0,!1,null,null,!1,!1,"",fp);return e._reactRootContainer=h,e[Nt]=h.current,dr(e.nodeType===8?e.parentNode:e),fn(function(){Os(t,h,n,r)}),h}function Us(e,t,n,r,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var d=s;s=function(){var h=qs(o);d.call(h)}}Os(t,o,e,s)}else o=Gd(n,t,e,s,r);return qs(o)}Ko=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Yn(t.pendingLanes);n!==0&&(ga(t,n|1),Ze(t,Se()),(le&6)===0&&(qn=Se()+500,Kt()))}break;case 13:fn(function(){var r=Rt(e,1);if(r!==null){var s=Ve();_t(r,e,1,s)}}),Ui(e,1)}},xa=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=Ve();_t(t,e,134217728,n)}Ui(e,134217728)}},Wo=function(e){if(e.tag===13){var t=Jt(e),n=Rt(e,t);if(n!==null){var r=Ve();_t(n,e,t,r)}Ui(e,t)}},Xo=function(){return de},Go=function(e,t){var n=de;try{return de=e,t()}finally{de=n}},ca=function(e,t,n){switch(t){case"input":if(ta(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=os(r);if(!s)throw Error(l(90));vo(r),ta(r,s)}}}break;case"textarea":Eo(e,n);break;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}},Bo=Li,bo=fn;var Yd={usingClientEntryPoint:!1,Events:[hr,Dn,os,Mo,Ro,Li]},Nr={findFiberByHostInstance:sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zd={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zo(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||Xd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$s.isDisabled&&$s.supportsFiber)try{Hr=$s.inject(Zd),wt=$s}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd,Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vi(t))throw Error(l(200));return Wd(e,t,null,n)},Je.createRoot=function(e,t){if(!Vi(e))throw Error(l(299));var n=!1,r="",s=dp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Qi(e,1,!1,null,null,n,!1,r,s),e[Nt]=t.current,dr(e.nodeType===8?e.parentNode:e),new $i(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=zo(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return fn(e)},Je.hydrate=function(e,t,n){if(!Qs(t))throw Error(l(200));return Us(null,e,t,!0,n)},Je.hydrateRoot=function(e,t,n){if(!Vi(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",o=dp;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=pp(t,null,e,1,n??null,s,!1,a,o),e[Nt]=t.current,dr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Hs(t)},Je.render=function(e,t,n){if(!Qs(t))throw Error(l(200));return Us(null,e,t,!1,n)},Je.unmountComponentAtNode=function(e){if(!Qs(e))throw Error(l(40));return e._reactRootContainer?(fn(function(){Us(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1},Je.unstable_batchedUpdates=Li,Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qs(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Us(e,t,n,!1,r)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var wp;function i2(){if(wp)return Xi.exports;wp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Xi.exports=a2(),Xi.exports}var kp;function o2(){if(kp)return Vs;kp=1;var i=i2();return Vs.createRoot=i.createRoot,Vs.hydrateRoot=i.hydrateRoot,Vs}var l2=o2();/**
 * react-router v7.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ap="popstate";function Cp(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function c2(i={}){function c(u,f){var S;let m=(S=f.state)==null?void 0:S.masked,{pathname:y,search:v,hash:A}=m||u.location;return no("",{pathname:y,search:v,hash:A},f.state&&f.state.usr||null,f.state&&f.state.key||"default",m?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function l(u,f){return typeof f=="string"?f:Mr(f)}return u2(c,l,null,i)}function Ce(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function St(i,c){if(!i){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function p2(){return Math.random().toString(36).substring(2,10)}function Ep(i,c){return{usr:i.state,key:i.key,idx:c,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function no(i,c,l=null,u,f){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof c=="string"?Qn(c):c,state:l,key:c&&c.key||u||p2(),mask:f}}function Mr({pathname:i="/",search:c="",hash:l=""}){return c&&c!=="?"&&(i+=c.charAt(0)==="?"?c:"?"+c),l&&l!=="#"&&(i+=l.charAt(0)==="#"?l:"#"+l),i}function Qn(i){let c={};if(i){let l=i.indexOf("#");l>=0&&(c.hash=i.substring(l),i=i.substring(0,l));let u=i.indexOf("?");u>=0&&(c.search=i.substring(u),i=i.substring(0,u)),i&&(c.pathname=i)}return c}function u2(i,c,l,u={}){let{window:f=document.defaultView,v5Compat:m=!1}=u,y=f.history,v="POP",A=null,S=F();S==null&&(S=0,y.replaceState({...y.state,idx:S},""));function F(){return(y.state||{idx:null}).idx}function E(){v="POP";let T=F(),I=T==null?null:T-S;S=T,A&&A({action:v,location:L.location,delta:I})}function b(T,I){v="PUSH";let U=Cp(T)?T:no(L.location,T,I);S=F()+1;let ee=Ep(U,S),X=L.createHref(U.mask||U);try{y.pushState(ee,"",X)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;f.location.assign(X)}m&&A&&A({action:v,location:L.location,delta:1})}function K(T,I){v="REPLACE";let U=Cp(T)?T:no(L.location,T,I);S=F();let ee=Ep(U,S),X=L.createHref(U.mask||U);y.replaceState(ee,"",X),m&&A&&A({action:v,location:L.location,delta:0})}function V(T){return d2(f,T)}let L={get action(){return v},get location(){return i(f,y)},listen(T){if(A)throw new Error("A history only accepts one active listener");return f.addEventListener(Ap,E),A=T,()=>{f.removeEventListener(Ap,E),A=null}},createHref(T){return c(f,T)},createURL:V,encodeLocation(T){let I=V(T);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:b,replace:K,go(T){return y.go(T)}};return L}function d2(i,c,l=!1){let u="http://localhost";i&&(u=i.location.origin!=="null"?i.location.origin:i.location.href),Ce(u,"No window.location.(origin|href) available to create URL");let f=typeof c=="string"?c:Mr(c);return f=f.replace(/ $/,"%20"),!l&&f.startsWith("//")&&(f=u+f),new URL(f,u)}function Mp(i,c,l="/"){return f2(i,c,l,!1)}function f2(i,c,l,u,f){let m=typeof c=="string"?Qn(c):c,y=Lt(m.pathname||"/",l);if(y==null)return null;let v=m2(i),A=null,S=S2(y);for(let F=0;A==null&&F<v.length;++F)A=C2(v[F],S,u);return A}function m2(i){let c=Rp(i);return h2(c),c}function Rp(i,c=[],l=[],u="",f=!1){let m=(y,v,A=f,S)=>{let F={relativePath:S===void 0?y.path||"":S,caseSensitive:y.caseSensitive===!0,childrenIndex:v,route:y};if(F.relativePath.startsWith("/")){if(!F.relativePath.startsWith(u)&&A)return;Ce(F.relativePath.startsWith(u),`Absolute route path "${F.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),F.relativePath=F.relativePath.slice(u.length)}let E=vt([u,F.relativePath]),b=l.concat(F);y.children&&y.children.length>0&&(Ce(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Rp(y.children,c,b,E,A)),!(y.path==null&&!y.index)&&c.push({path:E,score:k2(E,y.index),routesMeta:b})};return i.forEach((y,v)=>{var A;if(y.path===""||!((A=y.path)!=null&&A.includes("?")))m(y,v);else for(let S of Bp(y.path))m(y,v,!0,S)}),c}function Bp(i){let c=i.split("/");if(c.length===0)return[];let[l,...u]=c,f=l.endsWith("?"),m=l.replace(/\?$/,"");if(u.length===0)return f?[m,""]:[m];let y=Bp(u.join("/")),v=[];return v.push(...y.map(A=>A===""?m:[m,A].join("/"))),f&&v.push(...y),v.map(A=>i.startsWith("/")&&A===""?"/":A)}function h2(i){i.sort((c,l)=>c.score!==l.score?l.score-c.score:A2(c.routesMeta.map(u=>u.childrenIndex),l.routesMeta.map(u=>u.childrenIndex)))}var g2=/^:[\w-]+$/,x2=3,y2=2,_2=1,v2=10,w2=-2,Sp=i=>i==="*";function k2(i,c){let l=i.split("/"),u=l.length;return l.some(Sp)&&(u+=w2),c&&(u+=y2),l.filter(f=>!Sp(f)).reduce((f,m)=>f+(g2.test(m)?x2:m===""?_2:v2),u)}function A2(i,c){return i.length===c.length&&i.slice(0,-1).every((u,f)=>u===c[f])?i[i.length-1]-c[c.length-1]:0}function C2(i,c,l=!1){let{routesMeta:u}=i,f={},m="/",y=[];for(let v=0;v<u.length;++v){let A=u[v],S=v===u.length-1,F=m==="/"?c:c.slice(m.length)||"/",E=Gs({path:A.relativePath,caseSensitive:A.caseSensitive,end:S},F),b=A.route;if(!E&&S&&l&&!u[u.length-1].route.index&&(E=Gs({path:A.relativePath,caseSensitive:A.caseSensitive,end:!1},F)),!E)return null;Object.assign(f,E.params),y.push({params:f,pathname:vt([m,E.pathname]),pathnameBase:j2(vt([m,E.pathnameBase])),route:b}),E.pathnameBase!=="/"&&(m=vt([m,E.pathnameBase]))}return y}function Gs(i,c){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[l,u]=E2(i.path,i.caseSensitive,i.end),f=c.match(l);if(!f)return null;let m=f[0],y=m.replace(/(.)\/+$/,"$1"),v=f.slice(1);return{params:u.reduce((S,{paramName:F,isOptional:E},b)=>{if(F==="*"){let V=v[b]||"";y=m.slice(0,m.length-V.length).replace(/(.)\/+$/,"$1")}const K=v[b];return E&&!K?S[F]=void 0:S[F]=(K||"").replace(/%2F/g,"/"),S},{}),pathname:m,pathnameBase:y,pattern:i}}function E2(i,c=!1,l=!0){St(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,v,A,S,F)=>{if(u.push({paramName:v,isOptional:A!=null}),A){let E=F.charAt(S+y.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(u.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,c?void 0:"i"),u]}function S2(i){try{return i.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return St(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),i}}function Lt(i,c){if(c==="/")return i;if(!i.toLowerCase().startsWith(c.toLowerCase()))return null;let l=c.endsWith("/")?c.length-1:c.length,u=i.charAt(l);return u&&u!=="/"?null:i.slice(l)||"/"}var F2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function D2(i,c="/"){let{pathname:l,search:u="",hash:f=""}=typeof i=="string"?Qn(i):i,m;return l?(l=Tp(l),l.startsWith("/")?m=Fp(l.substring(1),"/"):m=Fp(l,c)):m=c,{pathname:m,search:P2(u),hash:M2(f)}}function Fp(i,c){let l=Ys(c).split("/");return i.split("/").forEach(f=>{f===".."?l.length>1&&l.pop():f!=="."&&l.push(f)}),l.length>1?l.join("/"):"/"}function Zi(i,c,l,u){return`Cannot include a '${i}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function N2(i){return i.filter((c,l)=>l===0||c.route.path&&c.route.path.length>0)}function bp(i){let c=N2(i);return c.map((l,u)=>u===c.length-1?l.pathname:l.pathnameBase)}function oo(i,c,l,u=!1){let f;typeof i=="string"?f=Qn(i):(f={...i},Ce(!f.pathname||!f.pathname.includes("?"),Zi("?","pathname","search",f)),Ce(!f.pathname||!f.pathname.includes("#"),Zi("#","pathname","hash",f)),Ce(!f.search||!f.search.includes("#"),Zi("#","search","hash",f)));let m=i===""||f.pathname==="",y=m?"/":f.pathname,v;if(y==null)v=l;else{let E=c.length-1;if(!u&&y.startsWith("..")){let b=y.split("/");for(;b[0]==="..";)b.shift(),E-=1;f.pathname=b.join("/")}v=E>=0?c[E]:"/"}let A=D2(f,v),S=y&&y!=="/"&&y.endsWith("/"),F=(m||y===".")&&l.endsWith("/");return!A.pathname.endsWith("/")&&(S||F)&&(A.pathname+="/"),A}var Tp=i=>i.replace(/\/\/+/g,"/"),vt=i=>Tp(i.join("/")),Ys=i=>i.replace(/\/+$/,""),j2=i=>Ys(i).replace(/^\/*/,"/"),P2=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,M2=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,R2=class{constructor(i,c,l,u=!1){this.status=i,this.statusText=c||"",this.internal=u,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function B2(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function b2(i){let c=i.map(l=>l.route.path).filter(Boolean);return vt(c)||"/"}var Lp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ip(i,c){let l=i;if(typeof l!="string"||!F2.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let u=l,f=!1;if(Lp)try{let m=new URL(window.location.href),y=l.startsWith("//")?new URL(m.protocol+l):new URL(l),v=Lt(y.pathname,c);y.origin===m.origin&&v!=null?l=v+y.search+y.hash:f=!0}catch{St(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:f,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zp=["POST","PUT","PATCH","DELETE"];new Set(zp);var T2=["GET",...zp];new Set(T2);var Un=k.createContext(null);Un.displayName="DataRouter";var Zs=k.createContext(null);Zs.displayName="DataRouterState";var Op=k.createContext(!1);function L2(){return k.useContext(Op)}var qp=k.createContext({isTransitioning:!1});qp.displayName="ViewTransition";var I2=k.createContext(new Map);I2.displayName="Fetchers";var z2=k.createContext(null);z2.displayName="Await";var dt=k.createContext(null);dt.displayName="Navigation";var Rr=k.createContext(null);Rr.displayName="Location";var Ft=k.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var lo=k.createContext(null);lo.displayName="RouteError";var Hp="REACT_ROUTER_ERROR",O2="REDIRECT",q2="ROUTE_ERROR_RESPONSE";function H2(i){if(i.startsWith(`${Hp}:${O2}:{`))try{let c=JSON.parse(i.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Q2(i){if(i.startsWith(`${Hp}:${q2}:{`))try{let c=JSON.parse(i.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new R2(c.status,c.statusText,c.data)}catch{}}function U2(i,{relative:c}={}){Ce(Br(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:u}=k.useContext(dt),{hash:f,pathname:m,search:y}=br(i,{relative:c}),v=m;return l!=="/"&&(v=m==="/"?l:vt([l,m])),u.createHref({pathname:v,search:y,hash:f})}function Br(){return k.useContext(Rr)!=null}function Dt(){return Ce(Br(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Rr).location}var Qp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Up(i){k.useContext(dt).static||k.useLayoutEffect(i)}function $2(){let{isDataRoute:i}=k.useContext(Ft);return i?sf():V2()}function V2(){Ce(Br(),"useNavigate() may be used only in the context of a <Router> component.");let i=k.useContext(Un),{basename:c,navigator:l}=k.useContext(dt),{matches:u}=k.useContext(Ft),{pathname:f}=Dt(),m=JSON.stringify(bp(u)),y=k.useRef(!1);return Up(()=>{y.current=!0}),k.useCallback((A,S={})=>{if(St(y.current,Qp),!y.current)return;if(typeof A=="number"){l.go(A);return}let F=oo(A,JSON.parse(m),f,S.relative==="path");i==null&&c!=="/"&&(F.pathname=F.pathname==="/"?c:vt([c,F.pathname])),(S.replace?l.replace:l.push)(F,S.state,S)},[c,l,m,f,i])}k.createContext(null);function co(){let{matches:i}=k.useContext(Ft),c=i[i.length-1];return(c==null?void 0:c.params)??{}}function br(i,{relative:c}={}){let{matches:l}=k.useContext(Ft),{pathname:u}=Dt(),f=JSON.stringify(bp(l));return k.useMemo(()=>oo(i,JSON.parse(f),u,c==="path"),[i,f,u,c])}function K2(i,c){return $p(i,c)}function $p(i,c,l){var T;Ce(Br(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=k.useContext(dt),{matches:f}=k.useContext(Ft),m=f[f.length-1],y=m?m.params:{},v=m?m.pathname:"/",A=m?m.pathnameBase:"/",S=m&&m.route;{let I=S&&S.path||"";Kp(v,!S||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let F=Dt(),E;if(c){let I=typeof c=="string"?Qn(c):c;Ce(A==="/"||((T=I.pathname)==null?void 0:T.startsWith(A)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${I.pathname}" was given in the \`location\` prop.`),E=I}else E=F;let b=E.pathname||"/",K=b;if(A!=="/"){let I=A.replace(/^\//,"").split("/");K="/"+b.replace(/^\//,"").split("/").slice(I.length).join("/")}let V=l&&l.state.matches.length?l.state.matches.map(I=>Object.assign(I,{route:l.manifest[I.route.id]||I.route})):Mp(i,{pathname:K});St(S||V!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),St(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=Z2(V&&V.map(I=>Object.assign({},I,{params:Object.assign({},y,I.params),pathname:vt([A,u.encodeLocation?u.encodeLocation(I.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?A:vt([A,u.encodeLocation?u.encodeLocation(I.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:I.pathnameBase])})),f,l);return c&&L?k.createElement(Rr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...E},navigationType:"POP"}},L):L}function W2(){let i=rf(),c=B2(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),l=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",i),y=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:m},"ErrorBoundary")," or"," ",k.createElement("code",{style:m},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},c),l?k.createElement("pre",{style:f},l):null,y)}var X2=k.createElement(W2,null),Vp=class extends k.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,c){return c.location!==i.location||c.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:c.error,location:c.location,revalidation:i.revalidation||c.revalidation}}componentDidCatch(i,c){this.props.onError?this.props.onError(i,c):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const l=Q2(i.digest);l&&(i=l)}let c=i!==void 0?k.createElement(Ft.Provider,{value:this.props.routeContext},k.createElement(lo.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?k.createElement(G2,{error:i},c):c}};Vp.contextType=Op;var Ji=new WeakMap;function G2({children:i,error:c}){let{basename:l}=k.useContext(dt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let u=H2(c.digest);if(u){let f=Ji.get(c);if(f)throw f;let m=Ip(u.location,l);if(Lp&&!Ji.get(c))if(m.isExternal||u.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:u.replace}));throw Ji.set(c,y),y}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return i}function Y2({routeContext:i,match:c,children:l}){let u=k.useContext(Un);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),k.createElement(Ft.Provider,{value:i},l)}function Z2(i,c=[],l){let u=l==null?void 0:l.state;if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let f=i,m=u==null?void 0:u.errors;if(m!=null){let F=f.findIndex(E=>E.route.id&&(m==null?void 0:m[E.route.id])!==void 0);Ce(F>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,F+1))}let y=!1,v=-1;if(l&&u){y=u.renderFallback;for(let F=0;F<f.length;F++){let E=f[F];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(v=F),E.route.id){let{loaderData:b,errors:K}=u,V=E.route.loader&&!b.hasOwnProperty(E.route.id)&&(!K||K[E.route.id]===void 0);if(E.route.lazy||V){l.isStatic&&(y=!0),v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}}let A=l==null?void 0:l.onError,S=u&&A?(F,E)=>{var b,K;A(F,{location:u.location,params:((K=(b=u.matches)==null?void 0:b[0])==null?void 0:K.params)??{},pattern:b2(u.matches),errorInfo:E})}:void 0;return f.reduceRight((F,E,b)=>{let K,V=!1,L=null,T=null;u&&(K=m&&E.route.id?m[E.route.id]:void 0,L=E.route.errorElement||X2,y&&(v<0&&b===0?(Kp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,T=null):v===b&&(V=!0,T=E.route.hydrateFallbackElement||null)));let I=c.concat(f.slice(0,b+1)),U=()=>{let ee;return K?ee=L:V?ee=T:E.route.Component?ee=k.createElement(E.route.Component,null):E.route.element?ee=E.route.element:ee=F,k.createElement(Y2,{match:E,routeContext:{outlet:F,matches:I,isDataRoute:u!=null},children:ee})};return u&&(E.route.ErrorBoundary||E.route.errorElement||b===0)?k.createElement(Vp,{location:u.location,revalidation:u.revalidation,component:L,error:K,children:U(),routeContext:{outlet:null,matches:I,isDataRoute:!0},onError:S}):U()},null)}function po(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J2(i){let c=k.useContext(Un);return Ce(c,po(i)),c}function ef(i){let c=k.useContext(Zs);return Ce(c,po(i)),c}function tf(i){let c=k.useContext(Ft);return Ce(c,po(i)),c}function uo(i){let c=tf(i),l=c.matches[c.matches.length-1];return Ce(l.route.id,`${i} can only be used on routes that contain a unique "id"`),l.route.id}function nf(){return uo("useRouteId")}function rf(){var u;let i=k.useContext(lo),c=ef("useRouteError"),l=uo("useRouteError");return i!==void 0?i:(u=c.errors)==null?void 0:u[l]}function sf(){let{router:i}=J2("useNavigate"),c=uo("useNavigate"),l=k.useRef(!1);return Up(()=>{l.current=!0}),k.useCallback(async(f,m={})=>{St(l.current,Qp),l.current&&(typeof f=="number"?await i.navigate(f):await i.navigate(f,{fromRouteId:c,...m}))},[i,c])}var Dp={};function Kp(i,c,l){!c&&!Dp[i]&&(Dp[i]=!0,St(!1,l))}k.memo(af);function af({routes:i,manifest:c,future:l,state:u,isStatic:f,onError:m}){return $p(i,void 0,{manifest:c,state:u,isStatic:f,onError:m})}function xn(i){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function of({basename:i="/",children:c=null,location:l,navigationType:u="POP",navigator:f,static:m=!1,useTransitions:y}){Ce(!Br(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=i.replace(/^\/*/,"/"),A=k.useMemo(()=>({basename:v,navigator:f,static:m,useTransitions:y,future:{}}),[v,f,m,y]);typeof l=="string"&&(l=Qn(l));let{pathname:S="/",search:F="",hash:E="",state:b=null,key:K="default",mask:V}=l,L=k.useMemo(()=>{let T=Lt(S,v);return T==null?null:{location:{pathname:T,search:F,hash:E,state:b,key:K,mask:V},navigationType:u}},[v,S,F,E,b,K,u,V]);return St(L!=null,`<Router basename="${v}"> is not able to match the URL "${S}${F}${E}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:k.createElement(dt.Provider,{value:A},k.createElement(Rr.Provider,{children:c,value:L}))}function lf({children:i,location:c}){return K2(ro(i),c)}function ro(i,c=[]){let l=[];return k.Children.forEach(i,(u,f)=>{if(!k.isValidElement(u))return;let m=[...c,f];if(u.type===k.Fragment){l.push.apply(l,ro(u.props.children,m));return}Ce(u.type===xn,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=ro(u.props.children,m)),l.push(y)}),l}var Ws="get",Xs="application/x-www-form-urlencoded";function Js(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function cf(i){return Js(i)&&i.tagName.toLowerCase()==="button"}function pf(i){return Js(i)&&i.tagName.toLowerCase()==="form"}function uf(i){return Js(i)&&i.tagName.toLowerCase()==="input"}function df(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function ff(i,c){return i.button===0&&(!c||c==="_self")&&!df(i)}var Ks=null;function mf(){if(Ks===null)try{new FormData(document.createElement("form"),0),Ks=!1}catch{Ks=!0}return Ks}var hf=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function eo(i){return i!=null&&!hf.has(i)?(St(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xs}"`),null):i}function gf(i,c){let l,u,f,m,y;if(pf(i)){let v=i.getAttribute("action");u=v?Lt(v,c):null,l=i.getAttribute("method")||Ws,f=eo(i.getAttribute("enctype"))||Xs,m=new FormData(i)}else if(cf(i)||uf(i)&&(i.type==="submit"||i.type==="image")){let v=i.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let A=i.getAttribute("formaction")||v.getAttribute("action");if(u=A?Lt(A,c):null,l=i.getAttribute("formmethod")||v.getAttribute("method")||Ws,f=eo(i.getAttribute("formenctype"))||eo(v.getAttribute("enctype"))||Xs,m=new FormData(v,i),!mf()){let{name:S,type:F,value:E}=i;if(F==="image"){let b=S?`${S}.`:"";m.append(`${b}x`,"0"),m.append(`${b}y`,"0")}else S&&m.append(S,E)}}else{if(Js(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Ws,u=null,f=Xs,y=i}return m&&f==="text/plain"&&(y=m,m=void 0),{action:u,method:l.toLowerCase(),encType:f,formData:m,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fo(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function Wp(i,c,l,u){let f=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return l?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${u}`:f.pathname=`${f.pathname}.${u}`:f.pathname==="/"?f.pathname=`_root.${u}`:c&&Lt(f.pathname,c)==="/"?f.pathname=`${Ys(c)}/_root.${u}`:f.pathname=`${Ys(f.pathname)}.${u}`,f}async function xf(i,c){if(i.id in c)return c[i.id];try{let l=await import(i.module);return c[i.id]=l,l}catch(l){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yf(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function _f(i,c,l){let u=await Promise.all(i.map(async f=>{let m=c.routes[f.route.id];if(m){let y=await xf(m,l);return y.links?y.links():[]}return[]}));return Af(u.flat(1).filter(yf).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Np(i,c,l,u,f,m){let y=(A,S)=>l[S]?A.route.id!==l[S].route.id:!0,v=(A,S)=>{var F;return l[S].pathname!==A.pathname||((F=l[S].route.path)==null?void 0:F.endsWith("*"))&&l[S].params["*"]!==A.params["*"]};return m==="assets"?c.filter((A,S)=>y(A,S)||v(A,S)):m==="data"?c.filter((A,S)=>{var E;let F=u.routes[A.route.id];if(!F||!F.hasLoader)return!1;if(y(A,S)||v(A,S))return!0;if(A.route.shouldRevalidate){let b=A.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((E=l[0])==null?void 0:E.params)||{},nextUrl:new URL(i,window.origin),nextParams:A.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function vf(i,c,{includeHydrateFallback:l}={}){return wf(i.map(u=>{let f=c.routes[u.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),l&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function wf(i){return[...new Set(i)]}function kf(i){let c={},l=Object.keys(i).sort();for(let u of l)c[u]=i[u];return c}function Af(i,c){let l=new Set;return new Set(c),i.reduce((u,f)=>{let m=JSON.stringify(kf(f));return l.has(m)||(l.add(m),u.push({key:m,link:f})),u},[])}function mo(){let i=k.useContext(Un);return fo(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Cf(){let i=k.useContext(Zs);return fo(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var ho=k.createContext(void 0);ho.displayName="FrameworkContext";function go(){let i=k.useContext(ho);return fo(i,"You must render this element inside a <HydratedRouter> element"),i}function Ef(i,c){let l=k.useContext(ho),[u,f]=k.useState(!1),[m,y]=k.useState(!1),{onFocus:v,onBlur:A,onMouseEnter:S,onMouseLeave:F,onTouchStart:E}=c,b=k.useRef(null);k.useEffect(()=>{if(i==="render"&&y(!0),i==="viewport"){let L=I=>{I.forEach(U=>{y(U.isIntersecting)})},T=new IntersectionObserver(L,{threshold:.5});return b.current&&T.observe(b.current),()=>{T.disconnect()}}},[i]),k.useEffect(()=>{if(u){let L=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(L)}}},[u]);let K=()=>{f(!0)},V=()=>{f(!1),y(!1)};return l?i!=="intent"?[m,b,{}]:[m,b,{onFocus:Pr(v,K),onBlur:Pr(A,V),onMouseEnter:Pr(S,K),onMouseLeave:Pr(F,V),onTouchStart:Pr(E,K)}]:[!1,b,{}]}function Pr(i,c){return l=>{i&&i(l),l.defaultPrevented||c(l)}}function Sf({page:i,...c}){let l=L2(),{router:u}=mo(),f=k.useMemo(()=>Mp(u.routes,i,u.basename),[u.routes,i,u.basename]);return f?l?k.createElement(Df,{page:i,matches:f,...c}):k.createElement(Nf,{page:i,matches:f,...c}):null}function Ff(i){let{manifest:c,routeModules:l}=go(),[u,f]=k.useState([]);return k.useEffect(()=>{let m=!1;return _f(i,c,l).then(y=>{m||f(y)}),()=>{m=!0}},[i,c,l]),u}function Df({page:i,matches:c,...l}){let u=Dt(),{future:f}=go(),{basename:m}=mo(),y=k.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let v=Wp(i,m,f.v8_trailingSlashAwareDataRequests,"rsc"),A=!1,S=[];for(let F of c)typeof F.route.shouldRevalidate=="function"?A=!0:S.push(F.route.id);return A&&S.length>0&&v.searchParams.set("_routes",S.join(",")),[v.pathname+v.search]},[m,f.v8_trailingSlashAwareDataRequests,i,u,c]);return k.createElement(k.Fragment,null,y.map(v=>k.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...l})))}function Nf({page:i,matches:c,...l}){let u=Dt(),{future:f,manifest:m,routeModules:y}=go(),{basename:v}=mo(),{loaderData:A,matches:S}=Cf(),F=k.useMemo(()=>Np(i,c,S,m,u,"data"),[i,c,S,m,u]),E=k.useMemo(()=>Np(i,c,S,m,u,"assets"),[i,c,S,m,u]),b=k.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let L=new Set,T=!1;if(c.forEach(U=>{var X;let ee=m.routes[U.route.id];!ee||!ee.hasLoader||(!F.some(se=>se.route.id===U.route.id)&&U.route.id in A&&((X=y[U.route.id])!=null&&X.shouldRevalidate)||ee.hasClientLoader?T=!0:L.add(U.route.id))}),L.size===0)return[];let I=Wp(i,v,f.v8_trailingSlashAwareDataRequests,"data");return T&&L.size>0&&I.searchParams.set("_routes",c.filter(U=>L.has(U.route.id)).map(U=>U.route.id).join(",")),[I.pathname+I.search]},[v,f.v8_trailingSlashAwareDataRequests,A,u,m,F,c,i,y]),K=k.useMemo(()=>vf(E,m),[E,m]),V=Ff(E);return k.createElement(k.Fragment,null,b.map(L=>k.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...l})),K.map(L=>k.createElement("link",{key:L,rel:"modulepreload",href:L,...l})),V.map(({key:L,link:T})=>k.createElement("link",{key:L,nonce:l.nonce,...T,crossOrigin:T.crossOrigin??l.crossOrigin})))}function jf(...i){return c=>{i.forEach(l=>{typeof l=="function"?l(c):l!=null&&(l.current=c)})}}var Pf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Pf&&(window.__reactRouterVersion="7.17.0")}catch{}function Mf({basename:i,children:c,useTransitions:l,window:u}){let f=k.useRef();f.current==null&&(f.current=c2({window:u,v5Compat:!0}));let m=f.current,[y,v]=k.useState({action:m.action,location:m.location}),A=k.useCallback(S=>{l===!1?v(S):k.startTransition(()=>v(S))},[l]);return k.useLayoutEffect(()=>m.listen(A),[m,A]),k.createElement(of,{basename:i,children:c,location:y.location,navigationType:y.action,navigator:m,useTransitions:l})}var Xp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,et=k.forwardRef(function({onClick:c,discover:l="render",prefetch:u="none",relative:f,reloadDocument:m,replace:y,mask:v,state:A,target:S,to:F,preventScrollReset:E,viewTransition:b,defaultShouldRevalidate:K,...V},L){let{basename:T,navigator:I,useTransitions:U}=k.useContext(dt),ee=typeof F=="string"&&Xp.test(F),X=Ip(F,T);F=X.to;let se=U2(F,{relative:f}),pe=Dt(),fe=null;if(v){let ye=oo(v,[],pe.mask?pe.mask.pathname:"/",!0);T!=="/"&&(ye.pathname=ye.pathname==="/"?T:vt([T,ye.pathname])),fe=I.createHref(ye)}let[we,je,Le]=Ef(u,V),Ke=Tf(F,{replace:y,mask:v,state:A,target:S,preventScrollReset:E,relative:f,viewTransition:b,defaultShouldRevalidate:K,useTransitions:U});function Ie(ye){c&&c(ye),ye.defaultPrevented||Ke(ye)}let ne=!(X.isExternal||m),Pe=k.createElement("a",{...V,...Le,href:(ne?fe:void 0)||X.absoluteURL||se,onClick:ne?Ie:c,ref:jf(L,je),target:S,"data-discover":!ee&&l==="render"?"true":void 0});return we&&!ee?k.createElement(k.Fragment,null,Pe,k.createElement(Sf,{page:se})):Pe});et.displayName="Link";var Rf=k.forwardRef(function({"aria-current":c="page",caseSensitive:l=!1,className:u="",end:f=!1,style:m,to:y,viewTransition:v,children:A,...S},F){let E=br(y,{relative:S.relative}),b=Dt(),K=k.useContext(Zs),{navigator:V,basename:L}=k.useContext(dt),T=K!=null&&qf(E)&&v===!0,I=V.encodeLocation?V.encodeLocation(E).pathname:E.pathname,U=b.pathname,ee=K&&K.navigation&&K.navigation.location?K.navigation.location.pathname:null;l||(U=U.toLowerCase(),ee=ee?ee.toLowerCase():null,I=I.toLowerCase()),ee&&L&&(ee=Lt(ee,L)||ee);const X=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let se=U===I||!f&&U.startsWith(I)&&U.charAt(X)==="/",pe=ee!=null&&(ee===I||!f&&ee.startsWith(I)&&ee.charAt(I.length)==="/"),fe={isActive:se,isPending:pe,isTransitioning:T},we=se?c:void 0,je;typeof u=="function"?je=u(fe):je=[u,se?"active":null,pe?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Le=typeof m=="function"?m(fe):m;return k.createElement(et,{...S,"aria-current":we,className:je,ref:F,style:Le,to:y,viewTransition:v},typeof A=="function"?A(fe):A)});Rf.displayName="NavLink";var Bf=k.forwardRef(({discover:i="render",fetcherKey:c,navigate:l,reloadDocument:u,replace:f,state:m,method:y=Ws,action:v,onSubmit:A,relative:S,preventScrollReset:F,viewTransition:E,defaultShouldRevalidate:b,...K},V)=>{let{useTransitions:L}=k.useContext(dt),T=zf(),I=Of(v,{relative:S}),U=y.toLowerCase()==="get"?"get":"post",ee=typeof v=="string"&&Xp.test(v),X=se=>{if(A&&A(se),se.defaultPrevented)return;se.preventDefault();let pe=se.nativeEvent.submitter,fe=(pe==null?void 0:pe.getAttribute("formmethod"))||y,we=()=>T(pe||se.currentTarget,{fetcherKey:c,method:fe,navigate:l,replace:f,state:m,relative:S,preventScrollReset:F,viewTransition:E,defaultShouldRevalidate:b});L&&l!==!1?k.startTransition(()=>we()):we()};return k.createElement("form",{ref:V,method:U,action:I,onSubmit:u?A:X,...K,"data-discover":!ee&&i==="render"?"true":void 0})});Bf.displayName="Form";function bf(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gp(i){let c=k.useContext(Un);return Ce(c,bf(i)),c}function Tf(i,{target:c,replace:l,mask:u,state:f,preventScrollReset:m,relative:y,viewTransition:v,defaultShouldRevalidate:A,useTransitions:S}={}){let F=$2(),E=Dt(),b=br(i,{relative:y});return k.useCallback(K=>{if(ff(K,c)){K.preventDefault();let V=l!==void 0?l:Mr(E)===Mr(b),L=()=>F(i,{replace:V,mask:u,state:f,preventScrollReset:m,relative:y,viewTransition:v,defaultShouldRevalidate:A});S?k.startTransition(()=>L()):L()}},[E,F,b,l,u,f,c,i,m,y,v,A,S])}var Lf=0,If=()=>`__${String(++Lf)}__`;function zf(){let{router:i}=Gp("useSubmit"),{basename:c}=k.useContext(dt),l=nf(),u=i.fetch,f=i.navigate;return k.useCallback(async(m,y={})=>{let{action:v,method:A,encType:S,formData:F,body:E}=gf(m,c);if(y.navigate===!1){let b=y.fetcherKey||If();await u(b,l,y.action||v,{defaultShouldRevalidate:y.defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:F,body:E,formMethod:y.method||A,formEncType:y.encType||S,flushSync:y.flushSync})}else await f(y.action||v,{defaultShouldRevalidate:y.defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:F,body:E,formMethod:y.method||A,formEncType:y.encType||S,replace:y.replace,state:y.state,fromRouteId:l,flushSync:y.flushSync,viewTransition:y.viewTransition})},[u,f,c,l])}function Of(i,{relative:c}={}){let{basename:l}=k.useContext(dt),u=k.useContext(Ft);Ce(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),m={...br(i||".",{relative:c})},y=Dt();if(i==null){m.search=y.search;let v=new URLSearchParams(m.search),A=v.getAll("index");if(A.some(F=>F==="")){v.delete("index"),A.filter(E=>E).forEach(E=>v.append("index",E));let F=v.toString();m.search=F?`?${F}`:""}}return(!i||i===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(m.pathname=m.pathname==="/"?l:vt([l,m.pathname])),Mr(m)}function qf(i,{relative:c}={}){let l=k.useContext(qp);Ce(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Gp("useViewTransitionState"),f=br(i,{relative:c});if(!l.isTransitioning)return!1;let m=Lt(l.currentLocation.pathname,u)||l.currentLocation.pathname,y=Lt(l.nextLocation.pathname,u)||l.nextLocation.pathname;return Gs(f.pathname,y)!=null||Gs(f.pathname,m)!=null}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qf=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,l,u)=>u?u.toUpperCase():l.toLowerCase()),jp=i=>{const c=Qf(i);return c.charAt(0).toUpperCase()+c.slice(1)},Yp=(...i)=>i.filter((c,l,u)=>!!c&&c.trim()!==""&&u.indexOf(c)===l).join(" ").trim(),Uf=i=>{for(const c in i)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=k.forwardRef(({color:i="currentColor",size:c=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:f="",children:m,iconNode:y,...v},A)=>k.createElement("svg",{ref:A,...$f,width:c,height:c,stroke:i,strokeWidth:u?Number(l)*24/Number(c):l,className:Yp("lucide",f),...!m&&!Uf(v)&&{"aria-hidden":"true"},...v},[...y.map(([S,F])=>k.createElement(S,F)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(i,c)=>{const l=k.forwardRef(({className:u,...f},m)=>k.createElement(Vf,{ref:m,iconNode:c,className:Yp(`lucide-${Hf(jp(i))}`,`lucide-${i}`,u),...f}));return l.displayName=jp(i),l};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Wf=ae("activity",Kf);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xo=ae("book-open",Xf);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Yf=ae("book",Gf);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Zp=ae("chart-column",Zf);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],em=ae("chart-pie",Jf);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],nm=ae("check",tm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sm=ae("chevron-down",rm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],yo=ae("chevron-left",am);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Jp=ae("chevron-right",im);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],lm=ae("circle-alert",om);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],_o=ae("circle-check-big",cm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]],um=ae("circle-play",pm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],fm=ae("circle-x",dm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],hm=ae("circle",mm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],xm=ae("clock",gm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],_m=ae("code-xml",ym);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],so=ae("code",vm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],to=ae("copy",wm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Am=ae("database",km);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Em=ae("file-spreadsheet",Cm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ao=ae("file-text",Sm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Dm=ae("funnel",Fm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],jm=ae("github",Nm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Mm=ae("house",Pm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Bm=ae("linkedin",Rm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],Tm=ae("panel-left-close",bm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Im=ae("panel-left-open",Lm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],eu=ae("play",zm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],tu=ae("search",Om);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Hm=ae("target",qm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Um=ae("terminal",Qm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],nu=ae("trash-2",$m);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Km=ae("trending-down",Vm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],ru=ae("trending-up",Wm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Gm=ae("truck",Xm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Zm=ae("user",Ym);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],eh=ae("users",Jm);function th(){const i=Dt(),c=[{path:"/",label:"我的课程",icon:Zm},{path:"/about",label:"个人主页",icon:Mm},{path:"/pandas",label:"Pandas训练项目",icon:_m}];return p.jsx("nav",{"trae-inspector-start-line":"14","trae-inspector-start-column":"4","trae-inspector-end-line":"44","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-300",children:p.jsx("div",{"trae-inspector-start-line":"15","trae-inspector-start-column":"6","trae-inspector-end-line":"43","trae-inspector-end-column":"12","trae-inspector-file-path":"src/components/Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{"trae-inspector-start-line":"16","trae-inspector-start-column":"8","trae-inspector-end-line":"42","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center justify-between h-16",children:[p.jsxs(et,{to:"/",className:"flex items-center space-x-3",children:[p.jsx("div",{"trae-inspector-start-line":"18","trae-inspector-start-column":"12","trae-inspector-end-line":"20","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"w-9 h-9 bg-black rounded-full flex items-center justify-center",children:p.jsx("span",{"trae-inspector-start-line":"19","trae-inspector-start-column":"14","trae-inspector-end-line":"19","trae-inspector-end-column":"69","trae-inspector-file-path":"src/components/Navbar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Z%22%2C%22textStartLine%22%3A%2219%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%2219%22%2C%22textEndColumn%22%3A%2262%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-white font-bold text-lg",children:"Z"})}),p.jsx("span",{"trae-inspector-start-line":"21","trae-inspector-start-column":"12","trae-inspector-end-line":"21","trae-inspector-end-column":"72","trae-inspector-file-path":"src/components/Navbar.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E5%AD%A6%E4%B9%A0%22%2C%22textStartLine%22%3A%2221%22%2C%22textStartColumn%22%3A%2259%22%2C%22textEndLine%22%3A%2221%22%2C%22textEndColumn%22%3A%2265%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-black font-bold text-lg",children:"数据分析学习"})]}),p.jsx("div",{"trae-inspector-start-line":"24","trae-inspector-start-column":"10","trae-inspector-end-line":"41","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/Navbar.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center space-x-2",children:c.map(l=>{const u=i.pathname===l.path;return p.jsx(et,{to:l.path,className:`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${u?"bg-black text-white":"text-gray-600 hover:text-black hover:bg-gray-100"}`,children:l.label},l.path)})})]})})})}function nh(){const i=["电子商务数据分析","企业财务数据分析","供应链数据分析","数据库技术与应用","应用统计实务","数据分析技术"];return p.jsx("div",{"trae-inspector-start-line":"14","trae-inspector-start-column":"4","trae-inspector-end-line":"74","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"min-h-screen bg-white text-black pt-24 pb-12 px-4",children:p.jsxs("div",{"trae-inspector-start-line":"15","trae-inspector-start-column":"6","trae-inspector-end-line":"73","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"max-w-5xl mx-auto",children:[p.jsxs("div",{"trae-inspector-start-line":"17","trae-inspector-start-column":"8","trae-inspector-end-line":"52","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-center mb-16",children:[p.jsx("div",{"trae-inspector-start-line":"18","trae-inspector-start-column":"10","trae-inspector-end-line":"24","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"w-24 h-24 mx-auto rounded-full border-4 border-black overflow-hidden bg-gray-200 mb-6",children:p.jsx("img",{"trae-inspector-start-line":"19","trae-inspector-start-column":"12","trae-inspector-end-line":"23","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",src:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20professional%20business%20analyst%20portrait&image_size=square",alt:"个人头像",className:"w-full h-full object-cover"})}),p.jsx("h2",{"trae-inspector-start-line":"25","trae-inspector-start-column":"10","trae-inspector-end-line":"27","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%B9%BF%E4%B8%9C%E7%A7%91%E5%AD%A6%E6%8A%80%E6%9C%AF%E8%81%8C%E4%B8%9A%E5%AD%A6%E9%99%A2%20%C2%B7%20%E5%95%86%E5%8A%A1%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E4%B8%8E%E5%BA%94%E7%94%A8%22%2C%22textStartLine%22%3A%2225%22%2C%22textStartColumn%22%3A%2253%22%2C%22textEndLine%22%3A%2227%22%2C%22textEndColumn%22%3A%2210%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-xl text-gray-600 mb-2",children:"广东科学技术职业学院 · 商务数据分析与应用"}),p.jsx("h1",{"trae-inspector-start-line":"28","trae-inspector-start-column":"10","trae-inspector-end-line":"30","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%91%A8%E4%BF%8A%E6%9D%B0%22%2C%22textStartLine%22%3A%2228%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%2230%22%2C%22textEndColumn%22%3A%2210%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-4xl font-bold mb-6 text-black",children:"周俊杰"}),p.jsx("div",{"trae-inspector-start-line":"31","trae-inspector-start-column":"10","trae-inspector-end-line":"37","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex flex-wrap justify-center gap-2 mb-8",children:i.map((c,l)=>p.jsx("span",{"trae-inspector-start-line":"33","trae-inspector-start-column":"14","trae-inspector-end-line":"35","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"px-3 py-1 bg-gray-100 text-black rounded-full text-sm border border-gray-300",children:c},l))}),p.jsx("p",{"trae-inspector-start-line":"38","trae-inspector-start-column":"10","trae-inspector-end-line":"40","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%88%91%E6%98%AF24%E5%B1%8A%E5%95%86%E5%8A%A1%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E4%B8%8E%E5%BA%94%E7%94%A8%E4%B8%93%E4%B8%9A%E7%9A%84%E5%AD%A6%E7%94%9F%EF%BC%8C%E5%85%B7%E5%A4%87%E6%89%8E%E5%AE%9E%E7%9A%84%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E8%83%BD%E5%8A%9B%E3%80%82%E6%93%85%E9%95%BF%E4%BD%BF%E7%94%A8Python%E3%80%81SQL%E5%92%8C%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B7%A5%E5%85%B7%E8%A7%A3%E5%86%B3%E4%B8%9A%E5%8A%A1%E9%97%AE%E9%A2%98%EF%BC%8C%E8%83%BD%E5%A4%9F%E4%BB%8E%E6%95%B0%E6%8D%AE%E4%B8%AD%E6%8F%90%E5%8F%96%E6%9C%89%E4%BB%B7%E5%80%BC%E7%9A%84%E6%B4%9E%E5%AF%9F%E3%80%82%22%2C%22textStartLine%22%3A%2238%22%2C%22textStartColumn%22%3A%2270%22%2C%22textEndLine%22%3A%2240%22%2C%22textEndColumn%22%3A%2210%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-700 text-lg max-w-2xl mx-auto mb-8",children:"我是24届商务数据分析与应用专业的学生，具备扎实的数据分析能力。擅长使用Python、SQL和数据可视化工具解决业务问题，能够从数据中提取有价值的洞察。"}),p.jsxs("div",{"trae-inspector-start-line":"41","trae-inspector-start-column":"10","trae-inspector-end-line":"51","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex justify-center space-x-6",children:[p.jsx("a",{"trae-inspector-start-line":"42","trae-inspector-start-column":"12","trae-inspector-end-line":"44","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",href:"#",className:"text-gray-600 hover:text-black transition-colors",children:p.jsx(jm,{className:"w-6 h-6"})}),p.jsx("a",{"trae-inspector-start-line":"45","trae-inspector-start-column":"12","trae-inspector-end-line":"47","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",href:"#",className:"text-gray-600 hover:text-black transition-colors",children:p.jsx(Bm,{className:"w-6 h-6"})}),p.jsx("a",{"trae-inspector-start-line":"48","trae-inspector-start-column":"12","trae-inspector-end-line":"50","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",href:"#",className:"text-gray-600 hover:text-black transition-colors",children:p.jsx(xo,{className:"w-6 h-6"})})]})]}),p.jsxs("footer",{"trae-inspector-start-line":"55","trae-inspector-start-column":"8","trae-inspector-end-line":"72","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"pt-12 border-t border-gray-300",children:[p.jsxs("div",{"trae-inspector-start-line":"56","trae-inspector-start-column":"10","trae-inspector-end-line":"68","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"grid md:grid-cols-2 gap-8 mb-8",children:[p.jsxs("div",{"trae-inspector-start-line":"57","trae-inspector-start-column":"12","trae-inspector-end-line":"60","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:[p.jsx("h3",{"trae-inspector-start-line":"58","trae-inspector-start-column":"14","trae-inspector-end-line":"58","trae-inspector-end-column":"66","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F%22%2C%22textStartLine%22%3A%2258%22%2C%22textStartColumn%22%3A%2257%22%2C%22textEndLine%22%3A%2258%22%2C%22textEndColumn%22%3A%2261%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-lg font-semibold mb-3",children:"联系方式"}),p.jsx("p",{"trae-inspector-start-line":"59","trae-inspector-start-column":"14","trae-inspector-end-line":"59","trae-inspector-end-column":"76","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%82%AE%E7%AE%B1%3A%201578949724%40qq.com%22%2C%22textStartLine%22%3A%2259%22%2C%22textStartColumn%22%3A%2251%22%2C%22textEndLine%22%3A%2259%22%2C%22textEndColumn%22%3A%2272%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600 text-sm",children:"邮箱: 1578949724@qq.com"})]}),p.jsxs("div",{"trae-inspector-start-line":"61","trae-inspector-start-column":"12","trae-inspector-end-line":"67","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:[p.jsx("h3",{"trae-inspector-start-line":"62","trae-inspector-start-column":"14","trae-inspector-end-line":"62","trae-inspector-end-column":"66","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%BF%AB%E9%80%9F%E9%93%BE%E6%8E%A5%22%2C%22textStartLine%22%3A%2262%22%2C%22textStartColumn%22%3A%2257%22%2C%22textEndLine%22%3A%2262%22%2C%22textEndColumn%22%3A%2261%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-lg font-semibold mb-3",children:"快速链接"}),p.jsxs("div",{"trae-inspector-start-line":"63","trae-inspector-start-column":"14","trae-inspector-end-line":"66","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-2",children:[p.jsx("a",{"trae-inspector-start-line":"64","trae-inspector-start-column":"16","trae-inspector-end-line":"64","trae-inspector-end-column":"109","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%A6%96%E9%A1%B5%22%2C%22textStartLine%22%3A%2264%22%2C%22textStartColumn%22%3A%22103%22%2C%22textEndLine%22%3A%2264%22%2C%22textEndColumn%22%3A%22105%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",href:"#",className:"text-gray-600 hover:text-black text-sm transition-colors block",children:"首页"}),p.jsx("a",{"trae-inspector-start-line":"65","trae-inspector-start-column":"16","trae-inspector-end-line":"65","trae-inspector-end-column":"111","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%88%91%E7%9A%84%E8%AF%BE%E7%A8%8B%22%2C%22textStartLine%22%3A%2265%22%2C%22textStartColumn%22%3A%22103%22%2C%22textEndLine%22%3A%2265%22%2C%22textEndColumn%22%3A%22107%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",href:"#",className:"text-gray-600 hover:text-black text-sm transition-colors block",children:"我的课程"})]})]})]}),p.jsx("div",{"trae-inspector-start-line":"69","trae-inspector-start-column":"10","trae-inspector-end-line":"71","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-center text-gray-500 text-sm",children:p.jsx("p",{"trae-inspector-start-line":"70","trae-inspector-start-column":"12","trae-inspector-end-line":"70","trae-inspector-end-column":"51","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%C2%A9%202024%20%E5%91%A8%E4%BF%8A%E6%9D%B0.%20All%20rights%20reserved.%22%2C%22textStartLine%22%3A%2270%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%2270%22%2C%22textEndColumn%22%3A%2247%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:"© 2024 周俊杰. All rights reserved."})})]})]})})}function rh(){const i=[{path:"python",icon:so,emoji:"🐍",title:"Python基础",description:"学习Python编程语言的基础语法和核心概念"},{path:"data-analysis",icon:Zp,emoji:"📊",title:"数据分析技术",description:"掌握数据分析的基本方法和常用工具"},{path:"data-collection",icon:tu,emoji:"🔍",title:"数据采集与处理",description:"学习网络爬虫和数据处理的实用技术"},{path:"supply-chain",icon:Gm,emoji:"🚚",title:"供应链数据分析",description:"应用数据分析技术优化供应链管理"},{path:"database",icon:Am,emoji:"🗄️",title:"数据库原理与应用",description:"学习数据库系统的原理和SQL操作"},{path:"visualization",icon:ru,emoji:"📈",title:"数据可视化",description:"用图表讲述数据故事，让数据更有说服力"}];return p.jsx("div",{"trae-inspector-start-line":"51","trae-inspector-start-column":"4","trae-inspector-end-line":"86","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"min-h-screen bg-white text-black pt-24 pb-12 px-4",children:p.jsxs("div",{"trae-inspector-start-line":"52","trae-inspector-start-column":"6","trae-inspector-end-line":"85","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"max-w-5xl mx-auto",children:[p.jsxs("div",{"trae-inspector-start-line":"54","trae-inspector-start-column":"8","trae-inspector-end-line":"58","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-center mb-12",children:[p.jsx("h1",{"trae-inspector-start-line":"55","trae-inspector-start-column":"10","trae-inspector-end-line":"55","trae-inspector-end-column":"59","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%88%91%E7%9A%84%E8%AF%BE%E7%A8%8B%22%2C%22textStartLine%22%3A%2255%22%2C%22textStartColumn%22%3A%2250%22%2C%22textEndLine%22%3A%2255%22%2C%22textEndColumn%22%3A%2254%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-4xl font-bold mb-4",children:"我的课程"}),p.jsx("p",{"trae-inspector-start-line":"56","trae-inspector-start-column":"10","trae-inspector-end-line":"56","trae-inspector-end-column":"72","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%B9%BF%E4%B8%9C%E7%A7%91%E5%AD%A6%E6%8A%80%E6%9C%AF%E8%81%8C%E4%B8%9A%E5%AD%A6%E9%99%A2%20%C2%B7%20%E5%95%86%E5%AD%A6%E9%99%A2%22%2C%22textStartLine%22%3A%2256%22%2C%22textStartColumn%22%3A%2252%22%2C%22textEndLine%22%3A%2256%22%2C%22textEndColumn%22%3A%2268%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600 text-lg mb-2",children:"广东科学技术职业学院 · 商学院"}),p.jsx("p",{"trae-inspector-start-line":"57","trae-inspector-start-column":"10","trae-inspector-end-line":"57","trae-inspector-end-column":"54","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%95%86%E5%8A%A1%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E4%B8%8E%E5%BA%94%E7%94%A8%E4%B8%93%E4%B8%9A%22%2C%22textStartLine%22%3A%2257%22%2C%22textStartColumn%22%3A%2239%22%2C%22textEndLine%22%3A%2257%22%2C%22textEndColumn%22%3A%2250%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-800",children:"商务数据分析与应用专业"})]}),p.jsx("div",{"trae-inspector-start-line":"61","trae-inspector-start-column":"8","trae-inspector-end-line":"84","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map((c,l)=>(c.icon,p.jsxs("div",{"trae-inspector-start-line":"65","trae-inspector-start-column":"14","trae-inspector-end-line":"81","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300 hover:border-black transition-all hover:shadow-lg group",children:[p.jsxs("div",{"trae-inspector-start-line":"66","trae-inspector-start-column":"16","trae-inspector-end-line":"74","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-start gap-4 mb-4",children:[p.jsx("div",{"trae-inspector-start-line":"67","trae-inspector-start-column":"18","trae-inspector-end-line":"67","trae-inspector-end-column":"64","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-4xl",children:c.emoji}),p.jsxs("div",{"trae-inspector-start-line":"68","trae-inspector-start-column":"18","trae-inspector-end-line":"73","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex-1",children:[p.jsx("h3",{"trae-inspector-start-line":"69","trae-inspector-start-column":"20","trae-inspector-end-line":"71","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-xl font-semibold mb-2 group-hover:text-black transition-colors",children:c.title}),p.jsx("p",{"trae-inspector-start-line":"72","trae-inspector-start-column":"20","trae-inspector-end-line":"72","trae-inspector-end-column":"81","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600 text-sm",children:c.description})]})]}),p.jsxs(et,{to:`/course/${c.path}`,className:"w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 text-gray-800 hover:text-black",children:["开始学习 ",p.jsx("span",{"trae-inspector-start-line":"79","trae-inspector-start-column":"23","trae-inspector-end-line":"79","trae-inspector-end-column":"60","trae-inspector-file-path":"src/pages/About.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%86%92%22%2C%22textStartLine%22%3A%2279%22%2C%22textStartColumn%22%3A%2252%22%2C%22textEndLine%22%3A%2279%22%2C%22textEndColumn%22%3A%2253%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-black",children:"→"})]})]},l)))})]})})}function sh(){const[i,c]=k.useState("all"),l=[{id:"01",difficulty:"入门",level:"简单",color:"green",title:"数据清洗实战",description:"处理编码错误、统一金额格式、填充缺失ID、转换日期格式，掌握数据清洗核心技能。数据清洗是数据科学中最基础也最关键的环节，决定后续所有分析的质量。",tags:["缺失值处理","重复值处理","格式错误","异常脏数据"],icon:Dm,category:"simple"},{id:"02",difficulty:"入门",level:"简单",color:"green",title:"分组聚合分析",description:"将长格式用户行为数据重塑为宽表特征，计算行为间隔与会话窗口。",tags:["groupby","aggregate","pivot_table","crosstab"],icon:Zp,category:"simple"},{id:"03",difficulty:"中级",level:"实战",color:"yellow",title:"购物篮关联分析",description:'找出"买了尿布是否买啤酒"等关联规则，支持捆绑销售策略。',tags:["购物篮分析","支持度","置信度","提升度"],icon:em,category:"intermediate"},{id:"04",difficulty:"中级",level:"实战",color:"yellow",title:"客户聚类分群分析",description:"计算最近消费间隔、消费频率、消费金额，将客户分为高价值/流失/普通等层级。",tags:["K-Means聚类","客户分群","StandardScaler"],icon:eh,category:"intermediate"},{id:"05",difficulty:"中级",level:"实战",color:"yellow",title:"专业数据可视化",description:"对RFM特征进行Z-Score标准化，使用K-Means聚类将用户分为5个群体并分析业务特征。",tags:["Matplotlib","柱状图","折线图","饼图","散点图"],icon:ru,category:"intermediate"},{id:"06",difficulty:"中级",level:"实战",color:"yellow",title:"业务A/B测试数据分析",description:"按小时汇总订单额，计算滚动均值与标准差，找出GMV突刺或断崖的异常时间点。",tags:["A/B测试","转化率","卡方检验","t检验","置信区间"],icon:Wf,category:"intermediate"},{id:"07",difficulty:"中级",level:"实战",color:"yellow",title:"销量时间序列分析",description:"使用merge_asof将点击流与订单数据做非精确匹配，计算最后一次点击归因模型和各渠道ROI。",tags:["时间序列","移动平均","季节性","同比环比","趋势预测"],icon:Km,category:"intermediate"},{id:"08",difficulty:"高级",level:"实战",color:"red",title:"数据分析特征工程",description:"清洗评论中的HTML标签和表情符号，分词处理，为NLP情感分析模型准备训练数据。",tags:["特征构造","特征编码","特征缩放","PCA","特征筛选"],icon:tu,category:"advanced"},{id:"09",difficulty:"高级",level:"实战",color:"red",title:"全域数据异常值检测",description:"找出前20%贡献80%流水的商品，将商品分类为爆款、腰部、长尾。",tags:["异常检测","3σ原则","IQR","Z-Score","孤立森林"],icon:Hm,category:"advanced"},{id:"10",difficulty:"高级",level:"实战",color:"red",title:"多源数据集融合整合",description:"整合所有技能：构建商品共现矩阵、用户品类偏好聚类、输出业务洞察报告。",tags:["merge","concat","join","多表关联","字段匹配"],icon:Em,category:"advanced"}],u=[{id:"all",label:"全部项目",count:10},{id:"simple",label:"简单入门",count:2},{id:"intermediate",label:"中级实战",count:5},{id:"advanced",label:"综合实战",count:3}],f=v=>{const A={green:"bg-gray-100 text-gray-800 border-gray-300",yellow:"bg-gray-100 text-gray-800 border-gray-300",red:"bg-gray-100 text-gray-800 border-gray-300"};return A[v]||A.green},m=v=>v==="入门"?"简单":"实战",y=i==="all"?l:l.filter(v=>v.category===i);return p.jsx("div",{"trae-inspector-start-line":"147","trae-inspector-start-column":"4","trae-inspector-end-line":"229","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"min-h-screen bg-white text-black pt-24 pb-12 px-4",children:p.jsxs("div",{"trae-inspector-start-line":"148","trae-inspector-start-column":"6","trae-inspector-end-line":"228","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"max-w-7xl mx-auto",children:[p.jsxs("div",{"trae-inspector-start-line":"150","trae-inspector-start-column":"8","trae-inspector-end-line":"157","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-center mb-12",children:[p.jsx("h1",{"trae-inspector-start-line":"151","trae-inspector-start-column":"10","trae-inspector-end-line":"153","trae-inspector-end-column":"15","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%A1%B9%E7%9B%AE%E5%B9%BF%E5%9C%BA%22%2C%22textStartLine%22%3A%22151%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%22153%22%2C%22textEndColumn%22%3A%2210%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-5xl font-bold mb-4 text-black",children:"项目广场"}),p.jsx("p",{"trae-inspector-start-line":"154","trae-inspector-start-column":"10","trae-inspector-end-line":"156","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%80%89%E6%8B%A9%E4%BD%A0%E7%9A%84%E5%AD%A6%E4%B9%A0%E8%B7%AF%E5%BE%84%EF%BC%8C%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E9%AB%98%E7%BA%A7%EF%BC%8C%E9%80%90%E6%AD%A5%E6%8F%90%E5%8D%87%20Pandas%20%E6%8A%80%E8%83%BD%22%2C%22textStartLine%22%3A%22154%22%2C%22textStartColumn%22%3A%2265%22%2C%22textEndLine%22%3A%22156%22%2C%22textEndColumn%22%3A%2210%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"选择你的学习路径，从入门到高级，逐步提升 Pandas 技能"})]}),p.jsx("div",{"trae-inspector-start-line":"160","trae-inspector-start-column":"8","trae-inspector-end-line":"177","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex flex-wrap gap-3 justify-center mb-12",children:u.map(v=>p.jsxs("button",{"trae-inspector-start-line":"162","trae-inspector-start-column":"12","trae-inspector-end-line":"175","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>{c(v.id);const A=document.getElementById("projects-list");A&&A.scrollIntoView({behavior:"smooth",block:"start"})},className:i===v.id?"px-5 py-2 rounded-full text-sm font-medium transition-all bg-black text-white cursor-pointer":"px-5 py-2 rounded-full text-sm font-medium transition-all bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer",children:[v.label," ",v.count]},v.id))}),p.jsx("div",{"trae-inspector-start-line":"180","trae-inspector-start-column":"8","trae-inspector-end-line":"182","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"mb-8 text-center",children:p.jsxs("span",{"trae-inspector-start-line":"181","trae-inspector-start-column":"10","trae-inspector-end-line":"181","trae-inspector-end-column":"126","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600",children:["共 ",p.jsx("span",{"trae-inspector-start-line":"181","trae-inspector-start-column":"44","trae-inspector-end-line":"181","trae-inspector-end-column":"115","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-black font-bold",children:y.length})," 个项目"]})}),p.jsx("div",{"trae-inspector-start-line":"185","trae-inspector-start-column":"8","trae-inspector-end-line":"227","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",id:"projects-list",className:"grid md:grid-cols-2 gap-6",children:y.map(v=>{const A=v.icon,S=f(v.color);return p.jsxs("div",{"trae-inspector-start-line":"191","trae-inspector-start-column":"14","trae-inspector-end-line":"224","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300 hover:border-black transition-all hover:shadow-lg group",children:[p.jsxs("div",{"trae-inspector-start-line":"192","trae-inspector-start-column":"16","trae-inspector-end-line":"205","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-start justify-between mb-4",children:[p.jsxs("div",{"trae-inspector-start-line":"193","trae-inspector-start-column":"18","trae-inspector-end-line":"201","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center gap-3",children:[p.jsx("div",{"trae-inspector-start-line":"194","trae-inspector-start-column":"20","trae-inspector-end-line":"196","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"w-10 h-10 bg-black rounded-lg flex items-center justify-center",children:p.jsx(A,{className:"w-5 h-5 text-white"})}),p.jsxs("div",{"trae-inspector-start-line":"197","trae-inspector-start-column":"20","trae-inspector-end-line":"200","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:[p.jsxs("span",{"trae-inspector-start-line":"198","trae-inspector-start-column":"22","trae-inspector-end-line":"198","trae-inspector-end-column":"103","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-500 text-xs",children:["#",v.id," ",v.difficulty]}),p.jsx("h3",{"trae-inspector-start-line":"199","trae-inspector-start-column":"22","trae-inspector-end-line":"199","trae-inspector-end-column":"92","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-xl font-bold text-black mb-1",children:v.title})]})]}),p.jsx("span",{"trae-inspector-start-line":"202","trae-inspector-start-column":"18","trae-inspector-end-line":"204","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"px-3 py-1 rounded-full text-xs border flex items-center gap-1 "+S,children:m(v.difficulty)})]}),p.jsx("p",{"trae-inspector-start-line":"207","trae-inspector-start-column":"16","trae-inspector-end-line":"209","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600 text-sm leading-relaxed mb-4",children:v.description}),p.jsx("div",{"trae-inspector-start-line":"211","trae-inspector-start-column":"16","trae-inspector-end-line":"217","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex flex-wrap gap-2 mb-4",children:v.tags.map((F,E)=>p.jsx("span",{"trae-inspector-start-line":"213","trae-inspector-start-column":"20","trae-inspector-end-line":"215","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Pandas.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs",children:F},E))}),p.jsxs(et,{to:`/project/${v.id}`,className:"w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 group-hover:bg-black group-hover:text-white",children:["开始学习 ",p.jsx(Jp,{className:"w-4 h-4"})]})]},v.id)})})]})})}function ah(){const{id:i}=co(),l={python:{emoji:"🐍",title:"Python基础",description:"学习Python编程语言的基础语法和核心概念",totalHours:60,chapters:[{title:"第1章 程序设计基本方法",hours:8,content:[{subtitle:"1.1 环境安装",type:"practice",steps:["1. 访问 https://www.python.org/downloads/ 下载最新Python",'2. 运行安装程序，勾选"Add Python to PATH"',"3. 打开命令提示符，输入 python --version 验证安装","4. 安装VS Code编辑器，下载Python扩展",'5. 创建第一个Python文件：print("Hello World")'],code:`# 第一个Python程序
print("Hello World")

# 运行结果
# Hello World`},{subtitle:"1.2 变量和数据类型",type:"theory",steps:["变量是存储数据的容器","Python中常见数据类型：整数(int)、浮点数(float)、字符串(str)、布尔值(bool)","变量命名规则：字母、数字、下划线，不能以数字开头"],code:`# 变量定义示例
name = "张三"        # 字符串
age = 25            # 整数
height = 1.75       # 浮点数
is_student = True   # 布尔值

print(f"姓名: {name}")
print(f"年龄: {age}")
print(f"身高: {height}")
print(f"是否学生: {is_student}")`},{subtitle:"1.3 输入输出",type:"practice",steps:["使用input()函数获取用户输入","使用print()函数输出内容","f-string格式化字符串"],code:`# 用户交互示例
name = input("请输入您的姓名: ")
age = input("请输入您的年龄: ")

print(f"您好，{name}！")
print(f"您今年{age}岁了。")

# 类型转换
age_int = int(age)
print(f"明年您将{age_int + 1}岁")`}]},{title:"第2章 Python程序示例解析",hours:10,content:[{subtitle:"2.1 温度转换程序",type:"practice",steps:["学习Python的基本语法元素","理解input()、print()、int()函数","掌握温度转换公式：F = C × 9/5 + 32"],code:`# 温度转换程序
celsius = float(input("请输入摄氏度温度: "))
fahrenheit = celsius * 9/5 + 32

print(f"摄氏度 {celsius}°C = 华氏度 {fahrenheit}°F")

# 实战练习：反向转换
fahrenheit_input = float(input("\\n请输入华氏度温度: "))
celsius_result = (fahrenheit_input - 32) * 5/9
print(f"华氏度 {fahrenheit_input}°F = 摄氏度 {celsius_result:.2f}°C")`},{subtitle:"2.2 turtle库绘图",type:"practice",steps:["导入turtle库：import turtle","控制画笔前进：forward(距离)","左转右转：left(角度)、right(角度)","抬起画笔：penup()，放下画笔：pendown()"],code:`import turtle

# 创建画布
t = turtle.Turtle()
t.shape("turtle")
t.speed(1)

# 绘制正方形
for i in range(4):
    t.forward(100)
    t.right(90)

# 绘制三角形
t.penup()
t.goto(50, 50)
t.pendown()

for i in range(3):
    t.forward(100)
    t.right(120)

turtle.done()`}]},{title:"第3章 基本数据类型",hours:12,content:[{subtitle:"3.1 数字类型运算",type:"theory",steps:["整数运算：+、-、*、//(整除)、%(取余)、**(幂)","浮点数运算：注意精度问题","类型转换：int()、float()"],code:`# 数学运算示例
a = 10
b = 3

print(f"加法: {a} + {b} = {a + b}")
print(f"减法: {a} - {b} = {a - b}")
print(f"乘法: {a} * {b} = {a * b}")
print(f"除法: {a} / {b} = {a / b:.2f}")
print(f"整除: {a} // {b} = {a // b}")
print(f"取余: {a} % {b} = {a % b}")
print(f"幂运算: {a} ** {b} = {a ** b}")

# 实战：计算圆的面积
radius = 5
area = 3.14159 * radius ** 2
print(f"\\n半径为{radius}的圆面积为: {area:.2f}")`},{subtitle:"3.2 字符串处理",type:"practice",steps:["字符串索引和切片","字符串方法：upper()、lower()、strip()、replace()","字符串拼接和格式化"],code:`# 字符串操作
text = "  Hello, Python!  "

# 基本操作
print(f"原字符串: '{text}'")
print(f"去除空格: '{text.strip()}'")
print(f"大写: '{text.upper()}'")
print(f"小写: '{text.lower()}'")
print(f"替换: '{text.replace('Python', 'World')}'")

# 索引和切片
message = "Python数据分析"
print(f"\\n第一个字符: {message[0]}")
print(f"最后3个字符: {message[-3:]}")
print(f"切片[0:6]: {message[0:6]}")

# 实战：处理用户输入
name = input("\\n请输入姓名: ").strip()
print(f"您好，{name.upper()}！")
print(f"您的姓名有{len(name)}个字符")`}]},{title:"第4章 程序的控制结构",hours:10,content:[{subtitle:"4.1 条件语句",type:"practice",steps:["if语句的基本结构","elif多条件判断","else默认处理","比较运算符：==、!=、>、<、>=、<="],code:`# 成绩评级系统
score = float(input("请输入成绩(0-100): "))

if score >= 90:
    grade = "A"
    print(f"成绩{score}分，获得等级{grade}，优秀！")
elif score >= 80:
    grade = "B"
    print(f"成绩{score}分，获得等级{grade}，良好！")
elif score >= 70:
    grade = "C"
    print(f"成绩{score}分，获得等级{grade}，中等！")
elif score >= 60:
    grade = "D"
    print(f"成绩{score}分，获得等级{grade}，及格！")
else:
    grade = "F"
    print(f"成绩{score}分，获得等级{grade}，不及格，需要努力！")

# 实战：计算器
num1 = float(input("\\n输入第一个数: "))
operator = input("输入运算符(+,-,*,/): ")
num2 = float(input("输入第二个数: "))

if operator == '+':
    result = num1 + num2
elif operator == '-':
    result = num1 - num2
elif operator == '*':
    result = num1 * num2
elif operator == '/':
    if num2 != 0:
        result = num1 / num2
    else:
        result = "错误：除数不能为零"
else:
    result = "错误：无效的运算符"

print(f"{num1} {operator} {num2} = {result}")`},{subtitle:"4.2 循环结构",type:"practice",steps:["for循环：遍历序列","while循环：条件循环","break和continue控制","range()函数生成序列"],code:`# for循环示例
print("=== for循环 ===")
for i in range(1, 6):
    print(f"第{i}次循环")

# while循环示例
print("\\n=== while循环 ===")
count = 1
while count <= 5:
    print(f"计数: {count}")
    count += 1

# 实战：猜数字游戏
import random
target = random.randint(1, 100)
attempts = 0

print("\\n=== 猜数字游戏 ===")
print("我已经想好了一个1-100之间的数字")

while True:
    guess = int(input("请猜一个数字: "))
    attempts += 1
    
    if guess < target:
        print("太小了，再试一次！")
    elif guess > target:
        print("太大了，再试一次！")
    else:
        print(f"恭喜你！猜对了！用了{attempts}次")
        break
    
    if attempts >= 10:
        print(f"游戏结束！正确答案是{target}")
        break`}]},{title:"第5章 函数和代码复用",hours:8,content:[{subtitle:"5.1 函数定义和调用",type:"practice",steps:["使用def关键字定义函数","参数和返回值","默认参数值","文档字符串"],code:`# 定义函数
def greet(name):
    """问候函数"""
    return f"你好，{name}！欢迎学习Python！"

def calculate_area(length, width):
    """计算矩形面积"""
    return length * width

def calculate_stats(numbers):
    """计算统计值"""
    return {
        '总和': sum(numbers),
        '平均值': sum(numbers) / len(numbers),
        '最大值': max(numbers),
        '最小值': min(numbers)
    }

# 调用函数
print(greet("周俊杰"))

length = 10
width = 5
area = calculate_area(length, width)
print(f"矩形面积: {length} × {width} = {area}")

scores = [85, 92, 78, 95, 88]
stats = calculate_stats(scores)
print(f"\\n成绩统计: {stats}")`},{subtitle:"5.2 模块的使用",type:"practice",steps:["导入模块：import module_name","使用模块功能：module.function()","常用标准库：math、random、datetime"],code:`import math
import random
from datetime import datetime

# math模块
print("=== math模块 ===")
print(f"圆周率: {math.pi}")
print(f"平方根: √16 = {math.sqrt(16)}")
print(f"绝对值: |-5| = {math.abs(-5)}")
print(f"向上取整: 3.2 = {math.ceil(3.2)}")
print(f"向下取整: 3.8 = {math.floor(3.8)}")

# random模块
print("\\n=== random模块 ===")
print(f"随机整数: {random.randint(1, 100)}")
print(f"随机小数: {random.random():.4f}")
print(f"随机选择: {random.choice(['苹果', '香蕉', '橙子'])}")
print(f"打乱顺序: {random.sample([1,2,3,4,5], 3)}")

# datetime模块
print("\\n=== datetime模块 ===")
now = datetime.now()
print(f"当前时间: {now.strftime('%Y-%m-%d %H:%M:%S')}")
print(f"当前年份: {now.year}")
print(f"当前月份: {now.month}")
print(f"当前日期: {now.day}")`}]},{title:"第6章 组合数据类型",hours:12,content:[{subtitle:"6.1 列表操作",type:"practice",steps:["创建列表：[]或list()","索引和切片","增删改查操作","列表方法：append()、pop()、sort()"],code:`# 列表基础
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
print(f"水果列表: {fruits}")
print(f"第一个水果: {fruits[0]}")
print(f"最后两个: {fruits[-2:]}")

# 增删改
fruits.append("西瓜")  # 添加
print(f"\\n添加后: {fruits}")

fruits.insert(1, "草莓")  # 插入
print(f"插入后: {fruits}")

fruits[0] = "苹果(红)"  # 修改
print(f"修改后: {fruits}")

removed = fruits.pop()  # 删除
print(f"删除'{removed}': {fruits}")

# 列表推导式
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = [x**2 for x in numbers]
even_numbers = [x for x in numbers if x % 2 == 0]
print(f"\\n原始列表: {numbers}")
print(f"平方: {squares}")
print(f"偶数: {even_numbers}")

# 实战：学生成绩管理
students = [
    {"name": "张三", "score": 85},
    {"name": "李四", "score": 92},
    {"name": "王五", "score": 78},
]

total = sum(s["score"] for s in students)
average = total / len(students)
print(f"\\n总平均分: {average:.2f}")
print(f"最高分: {max(students, key=lambda x: x['score'])}")`},{subtitle:"6.2 字典操作",type:"practice",steps:["创建字典：{key: value}","键值对操作","遍历字典","字典方法：get()、keys()、values()"],code:`# 字典基础
student = {
    "name": "周俊杰",
    "age": 22,
    "major": "数据分析",
    "skills": ["Python", "SQL", "Excel"]
}

print(f"学生信息: {student}")
print(f"姓名: {student['name']}")
print(f"年龄: {student.get('age')}")
print(f"技能: {student['skills']}")

# 添加和修改
student['gpa'] = 3.8
student['age'] = 23
print(f"\\n更新后: {student}")

# 遍历字典
print("\\n=== 遍历字典 ===")
for key, value in student.items():
    print(f"{key}: {value}")

# 字典推导式
scores = {"数学": 90, "语文": 85, "英语": 92, "物理": 88}
passed = {k: v for k, v in scores.items() if v >= 90}
print(f"\\n90分以上: {passed}")

# 实战：商品库存管理
inventory = {
    "苹果": 100,
    "香蕉": 50,
    "橙子": 75
}

# 添加商品
inventory["葡萄"] = 60

# 销售
item = "苹果"
quantity = 10
if inventory.get(item, 0) >= quantity:
    inventory[item] -= quantity
    print(f"销售成功！剩余{inventory[item]}个{item}")
else:
    print(f"库存不足！")`}]}]},"data-analysis":{emoji:"📊",title:"数据分析技术",description:"掌握数据分析的基本方法和常用工具",totalHours:64,chapters:[{title:"第1章 数据分析概述",hours:4,content:[{subtitle:"1.1 数据分析流程",type:"theory",steps:["数据获取：爬虫、数据库、API","数据清洗：缺失值、异常值、重复值","数据分析：描述性统计、探索性分析","数据可视化：图表展示洞察","报告撰写：结论和建议"],code:`# 数据分析流程示例
import pandas as pd

# 1. 数据获取
data = {
    '姓名': ['张三', '李四', '王五', '赵六', '钱七'],
    '年龄': [25, 30, 28, 35, 27],
    '部门': ['销售', '技术', '销售', '技术', '销售'],
    '薪资': [8000, 12000, 9500, 15000, 9000]
}

df = pd.DataFrame(data)
print("=== 原始数据 ===")
print(df)

# 2. 数据清洗
print("\\n=== 数据清洗 ===")
print(f"缺失值:\\n{df.isnull().sum()}")
print(f"重复行: {df.duplicated().sum()}")

# 3. 数据分析
print("\\n=== 描述性统计 ===")
print(df.describe())

# 4. 分组分析
print("\\n=== 按部门统计 ===")
dept_stats = df.groupby('部门').agg({
    '薪资': ['mean', 'sum', 'count']
}).round(2)
print(dept_stats)

# 5. 结论
print("\\n=== 分析结论 ===")
print(f"销售部门平均薪资: {df[df['部门']=='销售']['薪资'].mean():.2f}")
print(f"技术部门平均薪资: {df[df['部门']=='技术']['薪资'].mean():.2f}")`}]},{title:"第2章 Pandas数据处理",hours:14,content:[{subtitle:"2.1 数据读取和存储",type:"practice",steps:["读取CSV：pd.read_csv()","读取Excel：pd.read_excel()","保存数据：to_csv()、to_excel()","处理中文编码问题"],code:`import pandas as pd

# 读取CSV文件
# df = pd.read_csv('data.csv', encoding='utf-8')

# 创建DataFrame示例
data = {
    '日期': ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'],
    '产品': ['A', 'B', 'A', 'C', 'B'],
    '销量': [120, 85, 95, 110, 78],
    '单价': [10, 20, 10, 15, 20]
}

df = pd.DataFrame(data)
print("=== 销售数据 ===")
print(df)

# 保存为CSV
df.to_csv('sales_data.csv', index=False, encoding='utf-8-sig')
print("\\n数据已保存为CSV文件")

# 基本信息
print(f"\\n数据形状: {df.shape}")
print(f"列名: {df.columns.tolist()}")
print(f"数据类型:\\n{df.dtypes}")`},{subtitle:"2.2 数据清洗实战",type:"practice",steps:["处理缺失值：fillna()、dropna()","处理重复值：drop_duplicates()","数据类型转换","字符串处理"],code:`import pandas as pd
import numpy as np

# 创建有问题的数据
data = {
    '姓名': ['张三', '李四', '张三', '王五', '赵六', None],
    '年龄': [25, 30, 28, None, 27, 22],
    '城市': ['北京', '上海', '北京', '深圳', None, '广州'],
    '薪资': ['10K', '20K', '15K', '18K', '12K', '25K']
}

df = pd.DataFrame(data)
print("=== 原始数据(含问题) ===")
print(df)

# 1. 处理缺失值
print("\\n=== 处理缺失值 ===")
print(f"缺失值统计:\\n{df.isnull().sum()}")
df_filled = df.fillna('未知')
print(f"\\n填充后:\\n{df_filled}")

# 2. 处理重复值
print("\\n=== 处理重复值 ===")
print(f"重复行: {df.duplicated().sum()}")
df_unique = df.drop_duplicates()
print(f"\\n去重后:\\n{df_unique}")

# 3. 数据类型转换
print("\\n=== 数据类型转换 ===")
df['薪资_numeric'] = df['薪资'].str.replace('K', '').astype(float) * 1000
print(f"薪资转换为数值型:\\n{df[['姓名', '薪资', '薪资_numeric']]}")

# 4. 字符串处理
print("\\n=== 字符串处理 ===")
df['姓名_clean'] = df['姓名'].str.strip()
print(f"清理姓名:\\n{df[['姓名', '姓名_clean']]}")`},{subtitle:"2.3 数据筛选和查询",type:"practice",steps:["行筛选：df[df[列名]条件]","列选择：df[[列名列表]]","loc和iloc用法","多条件筛选"],code:`import pandas as pd

# 创建数据
data = {
    '姓名': ['张三', '李四', '王五', '赵六', '钱七', '孙八'],
    '部门': ['销售', '技术', '销售', '技术', '人事', '技术'],
    '薪资': [8000, 12000, 9500, 15000, 7000, 11000],
    '工龄': [2, 5, 3, 7, 1, 4],
    '绩效': [85, 92, 88, 95, 78, 90]
}

df = pd.DataFrame(data)
print("=== 原始数据 ===")
print(df)

# 1. 单条件筛选
print("\\n=== 单条件筛选 ===")
sales = df[df['部门'] == '销售']
print(f"销售部门:\\n{sales}")

# 2. 多条件筛选
print("\\n=== 多条件筛选 ===")
high_salary_tech = df[(df['部门'] == '技术') & (df['薪资'] > 11000)]
print(f"技术部高薪员工:\\n{high_salary_tech}")

# 3. 使用loc和iloc
print("\\n=== loc和iloc用法 ===")
print(f"loc[0]: {df.loc[0]}")
print(f"\\niloc[0:3]:\\n{df.iloc[0:3]}")

# 4. 复杂查询
print("\\n=== 复杂查询 ===")
condition = (df['工龄'] > 2) | (df['绩效'] >= 90)
result = df[condition].sort_values('薪资', ascending=False)
print(f"工龄>2年 或 绩效>=90:\\n{result}")`}]},{title:"第3章 数据可视化",hours:10,content:[{subtitle:"3.1 Matplotlib基础图表",type:"practice",steps:["创建画布：plt.figure()","绘制图表：plt.plot()、plt.bar()、plt.scatter()","设置标签：plt.title()、plt.xlabel()、plt.ylabel()","保存图片：plt.savefig()"],code:`import matplotlib.pyplot as plt
import numpy as np

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 创建数据
months = ['1月', '2月', '3月', '4月', '5月', '6月']
sales = [120, 145, 132, 168, 175, 190]
profit = [25, 32, 28, 38, 42, 48]

# 1. 折线图
plt.figure(figsize=(10, 6))
plt.plot(months, sales, marker='o', linewidth=2, label='销售额(万)')
plt.plot(months, profit, marker='s', linewidth=2, label='利润(万)')
plt.title('2024年上半年销售趋势', fontsize=16)
plt.xlabel('月份', fontsize=12)
plt.ylabel('金额(万)', fontsize=12)
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig('sales_trend.png', dpi=150)
plt.show()

# 2. 柱状图
plt.figure(figsize=(10, 6))
products = ['产品A', '产品B', '产品C', '产品D']
quantity = [450, 320, 280, 520]
colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12']
plt.bar(products, quantity, color=colors)
plt.title('各产品销量', fontsize=16)
plt.xlabel('产品', fontsize=12)
plt.ylabel('销量', fontsize=12)
for i, v in enumerate(quantity):
    plt.text(i, v + 10, str(v), ha='center')
plt.tight_layout()
plt.savefig('product_sales.png', dpi=150)
plt.show()

# 3. 饼图
plt.figure(figsize=(8, 8))
regions = ['华东', '华南', '华北', '西南', '其他']
market_share = [35, 25, 20, 15, 5]
colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6']
explode = (0.05, 0, 0, 0, 0)
plt.pie(market_share, explode=explode, labels=regions, colors=colors, 
        autopct='%1.1f%%', shadow=True, startangle=90)
plt.title('市场份额分布', fontsize=16)
plt.tight_layout()
plt.savefig('market_share.png', dpi=150)
plt.show()`}]}]},"data-collection":{emoji:"🔍",title:"数据采集与处理",description:"学习网络爬虫和数据处理的实用技术",totalHours:54,chapters:[{title:"第1章 网络爬虫基础",hours:8,content:[{subtitle:"1.1 HTTP协议基础",type:"theory",steps:["HTTP请求方法：GET、POST","HTTP状态码：200成功、404未找到、500服务器错误","请求头和响应头","JSON数据格式"],code:`# HTTP协议基础概念
print("=== HTTP协议基础 ===")
print("""
1. GET请求：获取资源
   - URL: https://api.example.com/data?id=123
   - 参数在URL中
   - 用于获取数据

2. POST请求：提交数据
   - URL: https://api.example.com/submit
   - 参数在请求体中
   - 用于提交表单、上传文件

3. 常见状态码：
   - 200: 请求成功
   - 301/302: 重定向
   - 404: 资源未找到
   - 500: 服务器错误

4. 请求头示例：
   - User-Agent: 浏览器标识
   - Content-Type: 内容类型
   - Cookie: 会话信息
""")

# 实际请求示例
import requests

url = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(url)
print(f"状态码: {response.status_code}")
print(f"响应内容: {response.json()}")`},{subtitle:"1.2 Requests库使用",type:"practice",steps:["安装requests库：pip install requests","发送GET请求","处理响应数据","设置请求头和参数"],code:`import requests

# 1. 基本GET请求
url = "https://jsonplaceholder.typicode.com/posts"
response = requests.get(url)
print(f"状态码: {response.status_code}")
print(f"数据类型: {type(response.json())}")
print(f"数据条数: {len(response.json())}")

# 2. 带参数的请求
params = {
    'userId': 1,
    'title': 'qui est esse'
}
response = requests.get(url, params=params)
print(f"\\n筛选结果: {len(response.json())}条")

# 3. 设置请求头
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}
response = requests.get(url, headers=headers)
print(f"\\n带请求头请求: 状态码{response.status_code}")

# 4. POST请求
new_post = {
    'title': '测试文章',
    'body': '这是爬虫学习的内容',
    'userId': 1
}
response = requests.post(url, json=new_post)
print(f"\\nPOST请求结果: {response.status_code}")
print(f"创建的文章ID: {response.json()['id']}")`}]},{title:"第2章 Beautiful Soup解析HTML",hours:12,content:[{subtitle:"2.1 HTML解析基础",type:"practice",steps:["安装bs4库：pip install beautifulsoup4","创建BeautifulSoup对象","查找元素：find()、find_all()","获取文本和属性"],code:`from bs4 import BeautifulSoup

html_content = """
<html>
<head><title>示例网页</title></head>
<body>
    <div class="container">
        <h1 class="title">Python学习</h1>
        <div class="course">
            <p class="name">数据分析</p>
            <p class="teacher">李老师</p>
            <p class="price">299元</p>
        </div>
        <div class="course">
            <p class="name">Web开发</p>
            <p class="teacher">王老师</p>
            <p class="price">399元</p>
        </div>
    </div>
</body>
</html>
"""

soup = BeautifulSoup(html_content, 'html.parser')

# 1. 查找标题
title = soup.find('h1', class_='title')
print(f"页面标题: {title.text}")

# 2. 查找所有课程
courses = soup.find_all('div', class_='course')
print(f"\\n找到{len(courses)}门课程:")
for course in courses:
    name = course.find('p', class_='name').text
    teacher = course.find('p', class_='teacher').text
    price = course.find('p', class_='price').text
    print(f"  - {name} | {teacher} | {price}")

# 3. CSS选择器
print("\\n使用CSS选择器:")
titles = soup.select('div.course p.name')
for t in titles:
    print(f"  {t.text}")`},{subtitle:"2.2 实战：爬取豆瓣电影",type:"practice",steps:["分析网页结构","提取电影名称、评分、评价人数","处理多个页面","保存为CSV文件"],code:`from bs4 import BeautifulSoup
import requests
import pandas as pd
import time

def get_movies(page=0):
    """爬取豆瓣电影Top250"""
    url = f"https://movie.douban.com/top250?start={page * 25}"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        movies = []
        for item in soup.select('div.item'):
            title = item.select_one('span.title').text
            rating = item.select_one('span.rating_num').text
            quote = item.select_one('span.inq')
            quote = quote.text if quote else '无'
            
            movies.append({
                '标题': title,
                '评分': rating,
                '推荐语': quote
            })
        
        return movies
    except Exception as e:
        print(f"爬取失败: {e}")
        return []

# 测试爬取第一页
print("=== 爬取豆瓣电影Top250 ===")
movies = get_movies(0)
print(f"\\n成功爬取{len(movies)}部电影:")
for i, movie in enumerate(movies[:5], 1):
    print(f"{i}. {movie['标题']} | 评分: {movie['评分']} | {movie['推荐语']}")

# 保存为CSV
df = pd.DataFrame(movies)
df.to_csv('movies.csv', index=False, encoding='utf-8-sig')
print(f"\\n数据已保存到movies.csv")`}]}]},"supply-chain":{emoji:"🚚",title:"供应链数据分析",description:"应用数据分析技术优化供应链管理",totalHours:54,chapters:[{title:"第1章 供应链数据概述",hours:6,content:[{subtitle:"1.1 供应链关键指标",type:"theory",steps:["库存周转率 = 销售成本 / 平均库存","准时交货率 = 准时交货数 / 总订单数 × 100%","订单完成率 = 完成订单数 / 总订单数 × 100%","客户满意度 = 满意客户数 / 总客户数 × 100%"],code:`import pandas as pd

# 创建供应链数据
data = {
    '产品': ['A', 'B', 'C', 'D', 'E'],
    '销量': [1000, 800, 1200, 600, 900],
    '平均库存': [200, 150, 300, 100, 180],
    '销售成本': [50000, 40000, 60000, 30000, 45000],
    '库存成本': [10000, 7500, 15000, 5000, 9000],
    '订单数': [100, 80, 120, 60, 90],
    '准时交货': [95, 78, 115, 58, 85]
}

df = pd.DataFrame(data)
print("=== 供应链基础数据 ===")
print(df)

# 计算关键指标
df['库存周转率'] = df['销售成本'] / df['平均库存']
df['准时交货率'] = (df['准时交货'] / df['订单数'] * 100).round(2)
df['库存成本占比'] = (df['库存成本'] / df['销售成本'] * 100).round(2)

print("\\n=== 计算关键指标 ===")
metrics = df[['产品', '库存周转率', '准时交货率', '库存成本占比']]
print(metrics)

print("\\n=== 指标分析 ===")
print(f"平均库存周转率: {df['库存周转率'].mean():.2f}")
print(f"平均准时交货率: {df['准时交货率'].mean():.2f}%")
print(f"最高库存周转率产品: {df.loc[df['库存周转率'].idxmax(), '产品']}")
print(f"最低库存周转率产品: {df.loc[df['库存周转率'].idxmin(), '产品']}")`}]},{title:"第2章 库存管理分析",hours:12,content:[{subtitle:"2.1 ABC分类法",type:"practice",steps:["按销售额排序产品","计算累计百分比","划分A、B、C类","A类：重点管理(70%)，B类：一般管理(20%)，C类：简单管理(10%)"],code:`import pandas as pd

# 产品销售数据
data = {
    '产品编码': ['P001', 'P002', 'P003', 'P004', 'P005', 'P006', 'P007', 'P008'],
    '产品名称': ['鼠标', '键盘', '显示器', '耳机', '摄像头', '鼠标垫', '音箱', 'U盘'],
    '年销量': [5000, 3000, 800, 2500, 1200, 8000, 600, 4000],
    '单价': [50, 150, 1200, 80, 200, 20, 300, 40]
}

df = pd.DataFrame(data)
df['销售额'] = df['年销量'] * df['单价']

# 按销售额降序排列
df = df.sort_values('销售额', ascending=False).reset_index(drop=True)

# 计算累计销售额
df['累计销售额'] = df['销售额'].cumsum()
df['累计占比'] = (df['累计销售额'] / df['销售额'].sum() * 100).round(2)

# ABC分类
def classify_abc(cumulative):
    if cumulative <= 70:
        return 'A'
    elif cumulative <= 90:
        return 'B'
    else:
        return 'C'

df['分类'] = df['累计占比'].apply(classify_abc)

print("=== ABC分类结果 ===")
print(df[['产品编码', '产品名称', '销售额', '累计占比', '分类']])

print("\\n=== 分类汇总 ===")
summary = df.groupby('分类').agg({
    '销售额': ['sum', 'count'],
    '产品名称': lambda x: ', '.join(x)
}).round(2)
print(summary)

print("\\n=== 管理建议 ===")
for category in ['A', 'B', 'C']:
    products = df[df['分类'] == category]['产品名称'].tolist()
    print(f"\\n{category}类产品({len(products)}个): {', '.join(products)}")
    if category == 'A':
        print("  → 重点管理：每日盘点，优化库存，优先补货")
    elif category == 'B':
        print("  → 一般管理：定期盘点，保持合理库存")
    else:
        print("  → 简单管理：按需采购，减少库存积压")`},{subtitle:"2.2 安全库存计算",type:"practice",steps:["理解安全库存的概念","计算标准差和z值","安全库存 = z × σ × √(提前期)","根据服务水平选择z值"],code:`import numpy as np

# 假设数据
daily_demand = 100  # 日均需求
demand_std = 20     # 需求标准差
lead_time = 5       # 提前期(天)
lead_time_std = 1   # 提前期标准差

# 不同服务水平对应的z值
service_levels = {
    90: 1.28,
    95: 1.65,
    97.5: 1.96,
    99: 2.33
}

print("=== 安全库存计算 ===")
print(f"日均需求: {daily_demand}")
print(f"需求标准差: {demand_std}")
print(f"提前期: {lead_time}天")
print(f"提前期标准差: {lead_time_std}")

# 计算综合标准差
combined_std = np.sqrt(lead_time * demand_std**2 + daily_demand**2 * lead_time_std**2)

print(f"\\n综合标准差: {combined_std:.2f}")

print("\\n=== 不同服务水平下的安全库存 ===")
for service, z in service_levels.items():
    safety_stock = z * combined_std
    reorder_point = daily_demand * lead_time + safety_stock
    
    print(f"\\n服务水平: {service}%")
    print(f"  z值: {z}")
    print(f"  安全库存: {safety_stock:.0f}件")
    print(f"  再订货点: {reorder_point:.0f}件")

# 实战应用
print("\\n=== 库存优化建议 ===")
avg_daily = daily_demand
max_stock = max(service_levels.values())[0] * combined_std + daily_demand * lead_time
min_stock = min(service_levels.values())[0] * combined_std + daily_demand * lead_time

print(f"按95%服务水平:")
print(f"  建议安全库存: {1.65 * combined_std:.0f}件")
print(f"  库存范围: {daily_demand * lead_time:.0f} ~ {(1.65 * combined_std + daily_demand * lead_time):.0f}件")
print(f"\\n优化策略:")
print(f"  1. 实施JIT采购，减少资金占用")
print(f"  2. 建立供应商协同系统，缩短提前期")
print(f"  3. 实时监控库存，及时补货")`}]}]},database:{emoji:"🗄️",title:"数据库原理与应用",description:"学习数据库系统的原理和SQL操作",totalHours:54,chapters:[{title:"第1章 MySQL基础",hours:8,content:[{subtitle:"1.1 数据库基本操作",type:"practice",steps:["创建数据库：CREATE DATABASE","选择数据库：USE database_name","删除数据库：DROP DATABASE","查看数据库：SHOW DATABASES"],code:`-- MySQL数据库基本操作

-- 1. 创建数据库
CREATE DATABASE IF NOT EXISTS shop_db
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

-- 2. 查看所有数据库
SHOW DATABASES;

-- 3. 选择数据库
USE shop_db;

-- 4. 删除数据库(谨慎使用)
-- DROP DATABASE IF EXISTS shop_db;

-- 5. 创建数据表
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT '产品ID',
    name VARCHAR(100) NOT NULL COMMENT '产品名称',
    category VARCHAR(50) COMMENT '产品类别',
    price DECIMAL(10,2) COMMENT '价格',
    stock INT DEFAULT 0 COMMENT '库存',
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. 查看表结构
DESC products;

-- 7. 查看建表语句
SHOW CREATE TABLE products;`},{subtitle:"1.2 SQL查询基础",type:"practice",steps:["SELECT语句基本结构","WHERE条件筛选","ORDER BY排序","LIMIT分页查询"],code:`-- SQL查询基础

-- 准备测试数据
CREATE TABLE IF NOT EXISTS employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE
);

INSERT INTO employees VALUES
(1, '张三', '销售', 8000, '2022-01-15'),
(2, '李四', '技术', 12000, '2021-06-20'),
(3, '王五', '销售', 9500, '2022-03-10'),
(4, '赵六', '技术', 15000, '2020-09-01'),
(5, '钱七', '人事', 7000, '2022-08-05'),
(6, '孙八', '销售', 8800, '2021-11-20');

-- 1. 基本查询
SELECT * FROM employees;
SELECT name, department, salary FROM employees;

-- 2. 条件查询
SELECT * FROM employees WHERE department = '销售';
SELECT * FROM employees WHERE salary >= 10000;
SELECT * FROM employees WHERE department = '技术' AND salary > 12000;

-- 3. 排序
SELECT * FROM employees ORDER BY salary DESC;
SELECT * FROM employees ORDER BY department, salary DESC;

-- 4. 分页查询
SELECT * FROM employees LIMIT 3;
SELECT * FROM employees LIMIT 3 OFFSET 2;

-- 5. 去重和统计
SELECT DISTINCT department FROM employees;
SELECT COUNT(*) as total FROM employees;
SELECT AVG(salary) as avg_salary FROM employees;
SELECT SUM(salary) as total_salary FROM employees WHERE department = '销售';`}]},{title:"第2章 SQL高级查询",hours:12,content:[{subtitle:"2.1 分组和聚合",type:"practice",steps:["GROUP BY分组","HAVING过滤分组","聚合函数：COUNT、SUM、AVG、MAX、MIN","多字段分组"],code:`-- 分组和聚合查询

-- 1. 按部门统计
SELECT 
    department,
    COUNT(*) as emp_count,
    AVG(salary) as avg_salary,
    MAX(salary) as max_salary,
    MIN(salary) as min_salary,
    SUM(salary) as total_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

-- 2. HAVING过滤分组
SELECT 
    department,
    COUNT(*) as emp_count,
    AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > 8000
ORDER BY avg_salary DESC;

-- 3. 实战：销售数据分析
CREATE TABLE IF NOT EXISTS orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product VARCHAR(50),
    category VARCHAR(50),
    quantity INT,
    price DECIMAL(10,2),
    order_date DATE
);

INSERT INTO orders VALUES
(1, '手机', '电子产品', 10, 2999, '2024-01-15'),
(2, '电脑', '电子产品', 5, 5999, '2024-01-16'),
(3, 'T恤', '服装', 50, 99, '2024-01-17'),
(4, '手机', '电子产品', 8, 2999, '2024-01-18'),
(5, '牛仔裤', '服装', 30, 199, '2024-01-19'),
(6, '平板', '电子产品', 3, 3999, '2024-01-20');

-- 按产品统计
SELECT 
    product,
    SUM(quantity) as total_qty,
    SUM(quantity * price) as total_amount
FROM orders
GROUP BY product
ORDER BY total_amount DESC;

-- 按类别统计
SELECT 
    category,
    COUNT(*) as order_count,
    SUM(quantity) as total_qty,
    SUM(quantity * price) as total_amount,
    AVG(price) as avg_price
FROM orders
GROUP BY category
ORDER BY total_amount DESC;`},{subtitle:"2.2 多表查询",type:"practice",steps:["INNER JOIN内连接","LEFT/RIGHT JOIN外连接","多表关联查询","子查询"],code:`-- 多表查询

-- 创建订单表
CREATE TABLE IF NOT EXISTS customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    city VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    order_date DATE,
    total DECIMAL(10,2)
);

INSERT INTO customers VALUES
(1, '张三', '北京'),
(2, '李四', '上海'),
(3, '王五', '北京'),
(4, '赵六', '深圳');

INSERT INTO orders VALUES
(1, 1, '2024-01-15', 2999),
(2, 2, '2024-01-16', 5999),
(3, 1, '2024-01-17', 1999),
(4, 5, '2024-01-18', 3999),  -- 不存在的客户
(5, 3, '2024-01-19', 999);

-- 1. 内连接(INNER JOIN)
SELECT 
    c.name,
    c.city,
    o.order_date,
    o.total
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
ORDER BY o.order_date;

-- 2. 左连接(LEFT JOIN)
SELECT 
    c.name,
    c.city,
    o.order_date,
    o.total
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
ORDER BY c.name;

-- 3. 多表连接
CREATE TABLE IF NOT EXISTS order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product VARCHAR(50),
    quantity INT,
    price DECIMAL(10,2)
);

INSERT INTO order_items VALUES
(1, 1, '手机', 1, 2999),
(2, 2, '电脑', 1, 5999),
(3, 3, '耳机', 2, 999);

SELECT 
    c.name,
    o.order_date,
    i.product,
    i.quantity,
    i.price,
    (i.quantity * i.price) as subtotal
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
INNER JOIN order_items i ON o.id = i.order_id
ORDER BY c.name, o.order_date;

-- 4. 子查询
-- 查找订单金额大于平均值的订单
SELECT * FROM orders 
WHERE total > (SELECT AVG(total) FROM orders);

-- 查找消费最多的客户
SELECT c.name, SUM(o.total) as total_spent
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
ORDER BY total_spent DESC
LIMIT 1;`}]}]},visualization:{emoji:"📈",title:"数据可视化",description:"用图表讲述数据故事，让数据更有说服力",totalHours:54,chapters:[{title:"第1章 数据可视化基础",hours:6,content:[{subtitle:"1.1 图表选择指南",type:"theory",steps:["对比关系：柱状图、条形图","趋势关系：折线图、面积图","构成关系：饼图、堆叠图","分布关系：直方图、箱线图、散点图","关联关系：散点图"],code:`import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

print("""
=== 图表选择指南 ===

1. 对比关系 → 柱状图/条形图
   适用场景：比较不同类别的大小
   示例：各产品销量对比、各部门人数对比

2. 趋势关系 → 折线图
   适用场景：展示随时间变化的数据
   示例：月度销售额趋势、股票价格走势

3. 构成关系 → 饼图/堆叠图
   适用场景：展示整体中的各部分占比
   示例：市场份额、预算分配

4. 分布关系 → 直方图/箱线图
   适用场景：展示数据的分布情况
   示例：学生成绩分布、客户年龄分布

5. 关联关系 → 散点图
   适用场景：展示两个变量之间的关系
   示例：身高体重关系、广告投入与销售额
""")

# 示例：不同图表类型
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 1. 柱状图 - 对比
categories = ['产品A', '产品B', '产品C', '产品D']
values = [450, 320, 280, 520]
axes[0, 0].bar(categories, values, color=['#3498db', '#2ecc71', '#e74c3c', '#f39c12'])
axes[0, 0].set_title('柱状图 - 对比关系', fontsize=12)
axes[0, 0].set_ylabel('销量')

# 2. 折线图 - 趋势
months = ['1月', '2月', '3月', '4月', '5月', '6月']
sales = [120, 145, 132, 168, 175, 190]
axes[0, 1].plot(months, sales, marker='o', linewidth=2, color='#3498db')
axes[0, 1].set_title('折线图 - 趋势关系', fontsize=12)
axes[0, 1].set_ylabel('销售额(万)')
axes[0, 1].grid(True, alpha=0.3)

# 3. 饼图 - 构成
sizes = [30, 25, 20, 15, 10]
labels = ['华东', '华南', '华北', '西南', '其他']
axes[1, 0].pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
axes[1, 0].set_title('饼图 - 构成关系', fontsize=12)

# 4. 散点图 - 关联
np.random.seed(42)
x = np.random.rand(50) * 100  # 广告投入
y = x * 0.8 + np.random.randn(50) * 10  # 销售额
axes[1, 1].scatter(x, y, alpha=0.6, c='#3498db')
axes[1, 1].set_title('散点图 - 关联关系', fontsize=12)
axes[1, 1].set_xlabel('广告投入')
axes[1, 1].set_ylabel('销售额')
axes[1, 1].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('chart_types.png', dpi=150, bbox_inches='tight')
plt.show()`}]},{title:"第2章 PyECharts交互图表",hours:12,content:[{subtitle:"2.1 PyECharts基础",type:"practice",steps:["安装pyecharts：pip install pyecharts","创建图表对象","添加数据和配置","生成HTML文件"],code:`from pyecharts import options as opts
from pyecharts.charts import Bar, Line, Pie, Scatter, Page
from pyecharts.globals import ThemeType

# 1. 柱状图
bar = (
    Bar(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
    .add_xaxis(["衬衫", "牛仔裤", "运动裤", "袜子", "帽子"])
    .add_yaxis("商家A", [114, 55, 27, 101, 125])
    .add_yaxis("商家B", [57, 134, 137, 129, 120])
    .set_global_opts(
        title_opts=opts.TitleOpts(title="服装销量对比", subtitle="2024年Q1"),
        toolbox_opts=opts.ToolboxOpts(),
        datazoom_opts=opts.DataZoomOpts(),
    )
    .set_series_opts(
        label_opts=opts.LabelOpts(is_show=True),
    )
)
bar.render("bar_chart.html")
print("柱状图已生成: bar_chart.html")

# 2. 折线图
line = (
    Line(init_opts=opts.InitOpts(theme=ThemeType.LIGHT))
    .add_xaxis(["周一", "周二", "周三", "周四", "周五", "周六", "周日"])
    .add_yaxis("最高气温", [32, 33, 35, 34, 33, 31, 30], 
               markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="max")]))
    .add_yaxis("最低气温", [22, 23, 25, 24, 23, 21, 20],
               markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="min")]))
    .set_global_opts(
        title_opts=opts.TitleOpts(title="一周气温变化"),
        tooltip_opts=opts.TooltipOpts(trigger="axis"),
        xaxis_opts=opts.AxisOpts(type_="category"),
        yaxis_opts=opts.AxisOpts(type_="value", axislabel_opts=opts.LabelOpts(formatter="{value}°C")),
    )
)
line.render("line_chart.html")
print("折线图已生成: line_chart.html")

# 3. 饼图
pie = (
    Pie()
    .add(
        "",
        [("直接访问", 335), ("邮件营销", 310), ("联盟广告", 234), ("视频广告", 135), ("搜索引擎", 1488)],
        radius=["40%", "70%"],
        label_opts=opts.LabelOpts(formatter="{b}: {c} ({d}%)"),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="营销渠道效果"),
        legend_opts=opts.LegendOpts(orient="vertical", pos_left="left"),
    )
)
pie.render("pie_chart.html")
print("饼图已生成: pie_chart.html")

print("\\n所有图表已生成，可以在浏览器中打开查看！")`},{subtitle:"2.2 实战：销售数据仪表盘",type:"practice",steps:["创建多个图表组合","设置统一主题","布局优化","添加交互功能"],code:`from pyecharts import options as opts
from pyecharts.charts import Grid, Bar, Line, Pie, Gauge
from pyecharts.globals import ThemeType

# 1. 仪表盘 - KPI展示
gauge = (
    Gauge(init_opts=opts.InitOpts(width="300px", height="300px"))
    .add(
        "完成率",
        [("目标完成", 78)],
        split_number=10,
        axisline_opts=opts.AxisLineOpts(
            linestyle_opts=opts.LineStyleOpts(
                color=[(0.3, "#67e0e3"), (0.7, "#37a2da"), (1, "#fd666d")]
            )
        ),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="KPI仪表盘"),
    )
)

# 2. 柱状图 - 区域销售
bar = (
    Bar(init_opts=opts.InitOpts(width="400px", height="300px"))
    .add_xaxis(["华东", "华南", "华北", "西南", "东北"])
    .add_yaxis("销售额", [12500, 9800, 8200, 6500, 4300])
    .add_yaxis("目标", [10000, 10000, 10000, 10000, 10000])
    .set_series_opts(
        label_opts=opts.LabelOpts(is_show=True),
        markline_opts=opts.MarkLineOpts(
            data=[opts.MarkLineItem(y=8000, name="平均")]
        ),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="区域销售对比"),
        yaxis_opts=opts.AxisOpts(name="万元"),
    )
)

# 3. 折线图 - 趋势
line = (
    Line(init_opts=opts.InitOpts(width="400px", height="300px"))
    .add_xaxis(["1月", "2月", "3月", "4月", "5月", "6月"])
    .add_yaxis("2024年", [125, 136, 148, 152, 168, 175], 
               areadataopts=opts.AreaStyleOpacityOpts(opacity=0.3))
    .add_yaxis("2023年", [105, 112, 128, 135, 142, 150],
               areadataopts=opts.AreaStyleOpacityOpts(opacity=0.3))
    .set_global_opts(
        title_opts=opts.TitleOpts(title="月度销售趋势", pos_left="center"),
        tooltip_opts=opts.TooltipOpts(trigger="axis"),
        legend_opts=opts.LegendOpts(pos_left="right"),
        xaxis_opts=opts.AxisOpts(name="月份"),
        yaxis_opts=opts.AxisOpts(name="万元"),
    )
)

# 4. 饼图 - 产品占比
pie = (
    Pie(init_opts=opts.InitOpts(width="300px", height="300px"))
    .add(
        "产品",
        [("电子产品", 45), ("服装", 25), ("食品", 15), ("其他", 15)],
        radius=["40%", "70%"],
        label_opts=opts.LabelOpts(formatter="{b}: {d}%"),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="产品销售占比", pos_left="center"),
        legend_opts=opts.LegendOpts(orient="vertical", pos_left="left"),
    )
)

# 5. 组合布局
grid = (
    Grid()
    .add(gauge, grid_opts=opts.GridOpts(pos_left="5%", pos_top="5%", width="25%", height="40%"))
    .add(bar, grid_opts=opts.GridOpts(pos_left="35%", pos_top="5%", width="60%", height="40%"))
    .add(line, grid_opts=opts.GridOpts(pos_left="5%", pos_top="50%", width="55%", height="45%"))
    .add(pie, grid_opts=opts.GridOpts(pos_left="65%", pos_top="50%", width="30%", height="45%"))
)

grid.render("sales_dashboard.html")
print("销售仪表盘已生成: sales_dashboard.html")
print("\\n这是一个完整的销售数据仪表盘，包含：")
print("- KPI完成率仪表盘")
print("- 区域销售对比柱状图")
print("- 月度销售趋势折线图")
print("- 产品销售占比饼图")`}]}]}}[i];return l?p.jsx("div",{"trae-inspector-start-line":"1699","trae-inspector-start-column":"4","trae-inspector-end-line":"1776","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"min-h-screen bg-white text-black pt-24 pb-12 px-4",children:p.jsxs("div",{"trae-inspector-start-line":"1700","trae-inspector-start-column":"6","trae-inspector-end-line":"1775","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"max-w-5xl mx-auto",children:[p.jsxs(et,{to:"/about",className:"inline-flex items-center gap-2 text-gray-800 hover:text-black mb-8 transition-colors",children:[p.jsx(yo,{className:"w-5 h-5"}),"返回课程列表"]}),p.jsx("div",{"trae-inspector-start-line":"1709","trae-inspector-start-column":"8","trae-inspector-end-line":"1718","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"mb-12",children:p.jsxs("div",{"trae-inspector-start-line":"1710","trae-inspector-start-column":"10","trae-inspector-end-line":"1717","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center gap-4 mb-4",children:[p.jsx("span",{"trae-inspector-start-line":"1711","trae-inspector-start-column":"12","trae-inspector-end-line":"1711","trae-inspector-end-column":"60","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-6xl",children:l.emoji}),p.jsxs("div",{"trae-inspector-start-line":"1712","trae-inspector-start-column":"12","trae-inspector-end-line":"1716","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:[p.jsx("h1",{"trae-inspector-start-line":"1713","trae-inspector-start-column":"14","trae-inspector-end-line":"1713","trae-inspector-end-column":"68","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-4xl font-bold",children:l.title}),p.jsx("p",{"trae-inspector-start-line":"1714","trae-inspector-start-column":"14","trae-inspector-end-line":"1714","trae-inspector-end-column":"80","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600 text-lg mt-2",children:l.description}),p.jsxs("p",{"trae-inspector-start-line":"1715","trae-inspector-start-column":"14","trae-inspector-end-line":"1715","trae-inspector-end-column":"86","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-800 text-sm mt-1",children:["总课时: ",l.totalHours,"小时"]})]})]})}),p.jsx("div",{"trae-inspector-start-line":"1720","trae-inspector-start-column":"8","trae-inspector-end-line":"1774","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-8",children:l.chapters.map((u,f)=>p.jsxs("div",{"trae-inspector-start-line":"1722","trae-inspector-start-column":"12","trae-inspector-end-line":"1772","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300",children:[p.jsxs("div",{"trae-inspector-start-line":"1723","trae-inspector-start-column":"14","trae-inspector-end-line":"1731","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center gap-3 mb-6",children:[p.jsx("div",{"trae-inspector-start-line":"1724","trae-inspector-start-column":"16","trae-inspector-end-line":"1726","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold",children:f+1}),p.jsxs("div",{"trae-inspector-start-line":"1727","trae-inspector-start-column":"16","trae-inspector-end-line":"1730","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:[p.jsx("h2",{"trae-inspector-start-line":"1728","trae-inspector-start-column":"18","trae-inspector-end-line":"1728","trae-inspector-end-column":"76","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-xl font-semibold",children:u.title}),p.jsxs("p",{"trae-inspector-start-line":"1729","trae-inspector-start-column":"18","trae-inspector-end-line":"1729","trae-inspector-end-column":"76","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600 text-sm",children:[u.hours,"课时"]})]})]}),p.jsx("div",{"trae-inspector-start-line":"1733","trae-inspector-start-column":"14","trae-inspector-end-line":"1771","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-6",children:u.content.map((m,y)=>p.jsxs("div",{"trae-inspector-start-line":"1735","trae-inspector-start-column":"18","trae-inspector-end-line":"1769","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-50 rounded-lg p-5",children:[p.jsxs("div",{"trae-inspector-start-line":"1736","trae-inspector-start-column":"20","trae-inspector-end-line":"1743","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center gap-2 mb-4",children:[m.type==="practice"?p.jsx(um,{className:"w-5 h-5 text-gray-800"}):p.jsx(xo,{className:"w-5 h-5 text-gray-800"}),p.jsx("h3",{"trae-inspector-start-line":"1742","trae-inspector-start-column":"22","trae-inspector-end-line":"1742","trae-inspector-end-column":"94","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-lg font-semibold text-gray-800",children:m.subtitle})]}),p.jsxs("div",{"trae-inspector-start-line":"1745","trae-inspector-start-column":"20","trae-inspector-end-line":"1758","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"mb-4",children:[p.jsxs("h4",{"trae-inspector-start-line":"1746","trae-inspector-start-column":"22","trae-inspector-end-line":"1749","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-sm text-gray-600 mb-2 flex items-center gap-2",children:[p.jsx(_o,{className:"w-4 h-4"}),"学习步骤"]}),p.jsx("ul",{"trae-inspector-start-line":"1750","trae-inspector-start-column":"22","trae-inspector-end-line":"1757","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-1",children:m.steps.map((v,A)=>p.jsxs("li",{"trae-inspector-start-line":"1752","trae-inspector-start-column":"26","trae-inspector-end-line":"1755","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-700 text-sm flex items-start gap-2",children:[p.jsx("span",{"trae-inspector-start-line":"1753","trae-inspector-start-column":"28","trae-inspector-end-line":"1753","trae-inspector-end-column":"73","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%80%A2%22%2C%22textStartLine%22%3A%221753%22%2C%22textStartColumn%22%3A%2265%22%2C%22textEndLine%22%3A%221753%22%2C%22textEndColumn%22%3A%2266%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-800 mt-1",children:"•"}),v]},A))})]}),p.jsxs("div",{"trae-inspector-start-line":"1760","trae-inspector-start-column":"20","trae-inspector-end-line":"1768","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:[p.jsxs("h4",{"trae-inspector-start-line":"1761","trae-inspector-start-column":"22","trae-inspector-end-line":"1764","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-sm text-gray-600 mb-2 flex items-center gap-2",children:[p.jsx(Um,{className:"w-4 h-4"}),"代码示例"]}),p.jsx("pre",{"trae-inspector-start-line":"1765","trae-inspector-start-column":"22","trae-inspector-end-line":"1767","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm",children:p.jsx("code",{"trae-inspector-start-line":"1766","trae-inspector-start-column":"24","trae-inspector-end-line":"1766","trae-inspector-end-column":"74","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-900",children:m.code})})]})]},y))})]},f))})]})}):p.jsx("div",{"trae-inspector-start-line":"1689","trae-inspector-start-column":"6","trae-inspector-end-line":"1694","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"min-h-screen bg-white text-black pt-24 pb-12 px-4",children:p.jsxs("div",{"trae-inspector-start-line":"1690","trae-inspector-start-column":"8","trae-inspector-end-line":"1693","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"max-w-4xl mx-auto text-center",children:[p.jsx("h1",{"trae-inspector-start-line":"1691","trae-inspector-start-column":"10","trae-inspector-end-line":"1691","trae-inspector-end-column":"60","trae-inspector-file-path":"src/pages/CourseDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%AF%BE%E7%A8%8B%E4%B8%8D%E5%AD%98%E5%9C%A8%22%2C%22textStartLine%22%3A%221691%22%2C%22textStartColumn%22%3A%2250%22%2C%22textEndLine%22%3A%221691%22%2C%22textEndColumn%22%3A%2255%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-3xl font-bold mb-4",children:"课程不存在"}),p.jsx(et,{to:"/about",className:"text-gray-800 hover:text-black",children:"返回课程列表"})]})})}function ih(){var Pe,ye,De;const{id:i}=co(),[c,l]=k.useState(0),[u,f]=k.useState(!1),[m,y]=k.useState(""),[v,A]=k.useState(""),[S,F]=k.useState([]),[E,b]=k.useState(!1),[K,V]=k.useState(!1),[L,T]=k.useState({}),U={"01":{title:"数据清洗实战",difficulty:"入门",duration:"约 30 分钟",sectionGroups:[{title:"基础概念",sections:[{title:"什么是数据清洗？",content:"数据清洗（Data Cleaning）是数据预处理的核心环节，旨在识别并修正数据中的错误、不一致和缺失值。在电商场景中，来自不同系统的订单数据往往存在格式不统一、字段错位、空值逻辑各异等问题。",tips:["建议先使用 df.info() 和 df.describe() 了解数据基本情况，再制定清洗策略。"],warnings:["切勿跳过数据诊断直接清洗。不了解数据问题就动手，可能导致错误的数据转换。"],exampleCode:`# 示例：使用 info() 诊断数据
import pandas as pd

# 加载数据集
df = pd.read_csv("datasets/retail_orders.csv")
print(f"数据加载完成，共 {len(df)} 行 {len(df.columns)} 列")
print(df.head())
print(df.info())`},{title:"数据清洗的完整流程",content:"经典四步走：1) 读取文件 → 2) 诊断探索 → 3) 逐列清洗 → 4) 验证导出。",tips:["清洗过程中多保存中间版本，以便可以回滚。"],warnings:[],exampleCode:`# 数据清洗流程概览
import pandas as pd

# 1. 读取
df = pd.read_csv("datasets/retail_orders.csv")

# 2. 诊断
print(df.head())
print(df.info())

# 3. 清洗
# ... 具体清洗步骤 ...

# 4. 保存
df.to_csv("cleaned_orders.csv", index=False)
print("数据已保存！")`}]},{title:"数据准备",sections:[{title:"1.1 导入必要工具库",content:"先确保环境已装好 pandas。本项目还会用到 numpy，主要是处理缺失值，以及 re 用于正则表达式。",tips:["如果报错找不到 pandas，请在终端运行 pip install pandas。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np
import re

print("库加载成功！")`},{title:"1.2 读取原始数据",content:"使用 pd.read_csv 读取数据。注意：原数据可能有编码问题，我们可以使用 utf-8-sig 处理带 BOM 的 csv。",tips:['如果遇到乱码，尝试 encoding="gbk" 或 encoding="utf-8-sig"。'],warnings:["直接在内存中直接操作处理，不要修改源文件，始终保持原始数据文件只读。"],exampleCode:`import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")

print(f"读取成功：共 {len(df)} 条订单")
print(df.head())`}]},{title:"核心清洗",sections:[{title:"2.0 数据诊断与探索",content:"先用 info() 看看有多少缺失值，用 describe() 看看分布，再按需用 value_counts 或 unique 查看分类数据。",tips:['对于 object 类型的列，多用 df["列名"].value_counts(dropna=False) 查看有哪些奇怪的值。'],warnings:[],exampleCode:`# 数据诊断
print("=== 数据基本信息 ===")
print(df.info())

print("\\n=== 数据统计摘要 ===")
print(df.describe(include="all"))

print("\\n=== 仓库列唯一值 ===")
print(df["warehouse"].value_counts(dropna=False))`},{title:"2.1 清洗金额格式",content:"金额字段通常包含货币符号、千位分隔符或多个小数点，直接转为数值会报错。这是一个最常见的数据清洗场景。",tips:["建议写个 helper 函数专门处理金额，配合 apply 按行处理。",'正则表达式 str.replace(r"[^\\d.-]", "") 是最稳健的做法。'],warnings:["直接处理时注意有些字段可能已经是数字，要加 try-except 判断。"],exampleCode:`# 清洗金额列
def clean_amount(val):
    if pd.isna(val):
        return np.nan
    s = str(val)
    s = re.sub(r"[^\\d.-]", "", s)
    try:
        return float(s)
    except:
        return np.nan

df["amount"] = df["amount"].apply(clean_amount)
print(df["amount"].head())
print(f"金额清洗完成，缺失值：{df["amount"].isna().sum()}")`},{title:"2.2 填充缺失客户ID",content:'可以填 "Unknown"、"Guest" 等，根据业务决定。我们可以用 fillna 或 mask/where。',tips:['对不同列分别制定填充策略：数值型可用均值，类别型用众数或者 "Other"。'],warnings:["不要对整个 DataFrame 统一 fillna，否则会把本该保留的空值都覆盖掉。"],exampleCode:`# 填充缺失客户ID
df["customer_id"] = df["customer_id"].fillna("Guest")
print("客户ID缺失值已填充为 Guest")
print(df["customer_id"].value_counts())`},{title:"2.3 统一日期格式",content:'用 pd.to_datetime。可以通过 errors="coerce" 把无法解析的日期设为空值，后续再单独处理。',tips:["可以用 dt.dayofweek、dt.month 等提取时间特征。","推荐直接按 datetime 处理，不要手动切片字符串。"],warnings:["不同地区年月日顺序不一致时，要指定 format 参数或使用 dayfirst=True，避免解析错误。"],exampleCode:`# 统一日期格式
df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")

print("日期清洗后前10条：")
print(df["order_date"].head(10))

# 简单过滤未来日期
today = pd.Timestamp.now().normalize()
df = df[df["order_date"] <= today].copy()

print(f"剔除未来日期后剩余：{len(df)} 条")`},{title:"2.4 处理重复数据",content:"使用 drop_duplicates，配合 subset 参数可以只针对特定列去重。",tips:["去重前先 sort_values，决定保留哪一行。","在清洗最后一步再去重，防止中间变换产生新的重复。"],warnings:["如果不加 subset，可能会误删行。建议显示打印 df.duplicated().sum() 确认。"],exampleCode:`# 处理重复数据
print(f"去重前：{len(df)}")
df = df.sort_values("order_date", ascending=False)
df = df.drop_duplicates(subset=["order_id"], keep="first")
print(f"去重后：{len(df)}")`},{title:"2.5 数值异常值检测",content:"可以用 IQR（四分位距）判断：超出 Q1-1.5*IQR 或 Q3+1.5*IQR 视为离群值，也可以直接用 describe 结合业务经验看是否合理。",tips:["不要盲目删除异常值，要看业务场景：可能是真实的大订单，也可能是错漏数据标记出来即可。"],warnings:[],exampleCode:`# 异常值检测
Q1 = df["amount"].quantile(0.25)
Q3 = df["amount"].quantile(0.75)
IQR = Q3 - Q1

lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR

print(f"金额合理范围：{lower:.2f} ~ {upper:.2f}")

outliers = df[(df["amount"] < lower) | (df["amount"] > upper)]
print(f"发现异常值：{len(outliers)} 条")
print(outliers[["order_id", "amount"]])`},{title:"2.6 数据类型优化",content:"把 category 类型的列转成 category，能省内存；对于整数列，确认无小数后可以转成 int。",tips:["对重复值较多的字符串列（如仓库、地区等）转 category 性价比最高。"],warnings:[],exampleCode:`# 数据类型优化
before = df.memory_usage(deep=True).sum()
df["warehouse"] = df["warehouse"].astype("category")
after = df.memory_usage(deep=True).sum()

print(f"内存占用：{before/1024/1024:.2f}MB → {after/1024/1024:.2f}MB")
print(f"节省了 {(1 - after/before)*100:.1f}%")`},{title:"2.7 创建衍生列",content:"有了清洗好的日期、金额，可以派生星期几、月份、订单金额区间、是否 VIP 等特征。",tips:["在建模前再做特征工程，这里保留原始清洗结果以便复用。"],warnings:[],exampleCode:`# 创建衍生列
df["order_month"] = df["order_date"].dt.month
df["is_vip"] = df["amount"] > 500
df["amount_bin"] = pd.cut(df["amount"], bins=3, labels=["低", "中", "高"])

print("衍生列创建完成：")
print(df[["order_month", "is_vip", "amount_bin"]].head())`}]},{title:"结果验证",sections:[{title:"3.1 验证清洗结果",content:"最后查看整体 info，检查是否还有空值，抽样看一下数据是否正确。",tips:["把检查写成 assert 方便后续回归验证。"],warnings:[],exampleCode:`# 验证清洗结果
print("=== 最终数据信息 ===")
print(df.info())

print("\\n=== 缺失值统计 ===")
print(df.isna().sum())

print("\\n=== 最终数据样本 ===")
print(df.sample(5))`},{title:"3.2 保存清洗后数据",content:"可以 to_csv 也可以 to_excel，to_parquet 等。这里我们保存为 csv。",tips:["to_csv 时带上 index=False，避免多出一列 Unnamed:0。"],warnings:[],exampleCode:`# 保存清洗后数据
df.to_csv("cleaned_orders.csv", index=False, encoding="utf-8-sig")
print("已保存至：cleaned_orders.csv")
print(f"最终数据量：{len(df)} 条")`}]}],practiceTitle:"实战练习：数据清洗验证",practiceDesc:"动手编写代码完成清洗与验证",initialCode:`# 数据清洗实战练习
import pandas as pd
import numpy as np
import re

# 1. 加载数据
df = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")

# 2. 诊断数据
print("数据加载完成，开始诊断...")
print(df.info())

# 3. 清洗金额
def clean_amount(val):
    if pd.isna(val):
        return np.nan
    s = str(val)
    s = re.sub(r"[^\\d.-]", "", s)
    try:
        return float(s)
    except:
        return np.nan
df["amount"] = df["amount"].apply(clean_amount)

# 4. 填充客户ID
df["customer_id"] = df["customer_id"].fillna("Guest")

# 5. 处理日期
df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")

# 6. 去重
df = df.drop_duplicates(subset=["order_id"], keep="first")

# 7. 保存
df.to_csv("cleaned_orders.csv", index=False)
print("清洗完成！共保存", len(df), "条数据")`,sectionAnswers:[`# 章节1参考答案
import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")
print(f"数据加载完成，共 {len(df)} 行 {len(df.columns)} 列")
print(df.head())
print(df.info())`,`# 章节2参考答案
import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")
print(df.head())
print(df.info())
df.to_csv("cleaned_orders.csv", index=False)
print("数据已保存！")`,`# 章节3参考答案
import pandas as pd
import numpy as np
import re

print("库加载成功！")`,`# 章节4参考答案
import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")
print(f"读取成功：共 {len(df)} 条订单")
print(df.head())`,`# 章节5参考答案
print("=== 数据基本信息 ===")
print(df.info())
print(df.describe(include="all"))
print(df["warehouse"].value_counts(dropna=False))`,`# 章节6参考答案
def clean_amount(val):
    if pd.isna(val):
        return np.nan
    s = str(val)
    s = re.sub(r"[^\\d.-]", "", s)
    try:
        return float(s)
    except:
        return np.nan

df["amount"] = df["amount"].apply(clean_amount)
print(df["amount"].head())
print(f"金额清洗完成，缺失值：{df["amount"].isna().sum()}")`,`# 章节7参考答案
df["customer_id"] = df["customer_id"].fillna("Guest")
print("客户ID缺失值已填充为 Guest")
print(df["customer_id"].value_counts())`,`# 章节8参考答案
df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")
print(df["order_date"].head(10))
today = pd.Timestamp.now().normalize()
df = df[df["order_date"] <= today].copy()
print(f"剔除未来日期后剩余：{len(df)} 条")`,`# 章节9参考答案
print(f"去重前：{len(df)}")
df = df.sort_values("order_date", ascending=False)
df = df.drop_duplicates(subset=["order_id"], keep="first")
print(f"去重后：{len(df)}")`,`# 章节10参考答案
Q1 = df["amount"].quantile(0.25)
Q3 = df["amount"].quantile(0.75)
IQR = Q3 - Q1
lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR
print(f"金额合理范围：{lower:.2f} ~ {upper:.2f}")
outliers = df[(df["amount"] < lower) | (df["amount"] > upper)]
print(f"发现异常值：{len(outliers)} 条")`,`# 章节11参考答案
before = df.memory_usage(deep=True).sum()
df["warehouse"] = df["warehouse"].astype("category")
after = df.memory_usage(deep=True).sum()
print(f"内存占用：{before/1024/1024:.2f}MB → {after/1024/1024:.2f}MB")
print(f"节省了 {(1 - after/before)*100:.1f}%")`,`# 章节12参考答案
df["order_month"] = df["order_date"].dt.month
df["is_vip"] = df["amount"] > 500
df["amount_bin"] = pd.cut(df["amount"], bins=3, labels=["低", "中", "高"])
print("衍生列创建完成：")
print(df[["order_month", "is_vip", "amount_bin"]].head())`,`# 章节13参考答案
print("=== 最终数据信息 ===")
print(df.info())
print("\\n=== 缺失值统计 ===")
print(df.isna().sum())
print("\\n=== 最终数据样本 ===")
print(df.sample(5))`,`# 章节14参考答案
df.to_csv("cleaned_orders.csv", index=False, encoding="utf-8-sig")
print("已保存至：cleaned_orders.csv")
print(f"最终数据量：{len(df)} 条")`]},"02":{title:"分组聚合分析",difficulty:"入门",duration:"约 30 分钟",sectionGroups:[{title:"基础概念",sections:[{title:"什么是分组聚合？",content:"分组聚合是数据分析中最核心的操作之一，类似于SQL中的GROUP BY。pandas的groupby可以按一个或多个列分组，然后对每个组应用聚合函数。",tips:["先 groupby 再 agg，最后可以 unstack 或 pivot 改变展示形态。"],warnings:[],exampleCode:`import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")
print("数据加载完成！")

# 简单分组统计
user_count = df.groupby("warehouse")["amount"].sum()
print("各仓库销售额统计：")
print(user_count)`},{title:"分组聚合的完整流程",content:"三步法：1) 拆分（Split）→ 2) 应用（Apply）→ 3) 合并（Combine）。这个过程叫做 Split-Apply-Combine。",tips:["熟练掌握这个流程，可以应对几乎所有分组聚合场景。"],warnings:[],exampleCode:`# 分组聚合三步法
# 1. 拆分：按仓库分组
groups = df.groupby("warehouse")

# 2. 应用：对每组求和
sales = groups["amount"].sum()

# 3. 合并：展示结果
print(sales)`}]},{title:"数据准备",sections:[{title:"1.1 导入必要工具库",content:"导入 pandas 和 numpy，pandas 是主要的数据处理库。",tips:["确保已安装：pip install pandas numpy"],warnings:[],exampleCode:`import pandas as pd
import numpy as np

print("库加载成功！")`},{title:"1.2 读取数据并查看结构",content:"读取CSV文件，查看数据的基本信息：行数、列数、数据类型。",tips:["使用 df.info() 查看数据类型，使用 df.head() 查看前几行。"],warnings:[],exampleCode:`import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")
print(f"数据形状：{df.shape}")
print("\\n前5行：")
print(df.head())
print("\\n数据类型：")
print(df.info())`}]},{title:"核心分组聚合",sections:[{title:"2.1 基础分组统计",content:"按单个列分组，求和、计数、求均值是最常用的操作。",tips:["count() 统计非空值数量，size() 统计组大小（包括空值）。"],warnings:[],exampleCode:`# 按仓库分组统计
print("各仓库订单数：")
print(df.groupby("warehouse").size())

print("\\n各仓库销售额：")
print(df.groupby("warehouse")["amount"].sum())

print("\\n各仓库平均订单额：")
print(df.groupby("warehouse")["amount"].mean())`},{title:"2.2 多列分组",content:"按多个列分组，可以实现更细粒度的统计分析。",tips:['使用列表指定多个分组列：groupby(["col1", "col2"])。'],warnings:[],exampleCode:`# 按仓库和品类分组
result = df.groupby(["warehouse", "product_category"])["amount"].sum()
print("各仓库各品类销售额：")
print(result)

# 也可以用 agg 同时计算多个指标
result2 = df.groupby(["warehouse", "product_category"]).agg({
    "amount": ["sum", "mean", "count"]
})
print("\\n详细统计：")
print(result2)`},{title:"2.3 聚合函数大全",content:"常用聚合函数：sum, mean, count, min, max, median, std, var。还有 nunique 统计唯一值数量。",tips:["使用 agg 可以同时应用多个聚合函数。"],warnings:[],exampleCode:`# 综合聚合
result = df.groupby("warehouse").agg({
    "amount": ["sum", "mean", "std", "min", "max"],
    "order_id": "count"
})
print(result)`},{title:"2.4 分组筛选",content:"使用 filter 方法可以筛选满足条件的组。",tips:["filter 的函数输入是整个组，返回True保留该组。"],warnings:[],exampleCode:`# 筛选订单数大于3的仓库
result = df.groupby("warehouse").filter(
    lambda x: len(x) > 3
)
print(f"符合条件的仓库数据：{len(result)} 条")`},{title:"2.5 transform变换",content:"transform 可以在组内进行变换，返回与原数据相同长度的结果。常用场景：组内标准化、组内排名。",tips:["transform 常用于计算组内占比、组内排名等。"],warnings:[],exampleCode:`# 组内销售额占比
df["amount_share"] = df.groupby("warehouse")["amount"].transform(
    lambda x: x / x.sum()
)
print("各仓库销售占比：")
print(df[["warehouse", "amount", "amount_share"]].head())`}]},{title:"高级聚合",sections:[{title:"3.1 数据透视表",content:"pivot_table 可以快速创建透视表，类似于Excel的数据透视功能。",tips:["index 是行索引，columns 是列展开，values 是数值，aggfunc 是聚合方式。"],warnings:[],exampleCode:`# 创建透视表
pivot = pd.pivot_table(
    df,
    values="amount",
    index="warehouse",
    columns="product_category",
    aggfunc="sum",
    fill_value=0
)
print("透视表：")
print(pivot)`},{title:"3.2 交叉表分析",content:"crosstab 用于计算两列或多列的频数交叉表。",tips:["crosstab 是快速创建频数表的便捷方式。"],warnings:[],exampleCode:`# 创建交叉表
cross = pd.crosstab(df["warehouse"], df["product_category"])
print("交叉表：")
print(cross)`}]}],practiceTitle:"实战练习：综合分组聚合分析",practiceDesc:"综合运用分组聚合完成业务分析",initialCode:`# 分组聚合分析练习
import pandas as pd
import numpy as np

# 加载数据
df = pd.read_csv("datasets/retail_orders.csv")

# 1. 按仓库统计订单数和销售额
warehouse_stats = df.groupby("warehouse").agg({
    "order_id": "count",
    "amount": "sum"
})
print("仓库统计：")
print(warehouse_stats)

# 2. 按仓库和品类分组统计
category_stats = df.groupby(["warehouse", "product_category"])["amount"].sum()
print("\\n仓库-品类统计：")
print(category_stats)

# 3. 创建透视表
pivot = pd.pivot_table(
    df,
    values="amount",
    index="warehouse",
    columns="product_category",
    aggfunc="sum",
    fill_value=0
)
print("\\n透视表：")
print(pivot)`,sectionAnswers:[`# 章节1参考答案
import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")
print("数据加载完成！")

user_count = df.groupby("warehouse")["amount"].sum()
print("各仓库销售额统计：")
print(user_count)`,`# 章节2参考答案
groups = df.groupby("warehouse")
sales = groups["amount"].sum()
print(sales)`,`# 章节3参考答案
import pandas as pd
import numpy as np

print("库加载成功！")`,`# 章节4参考答案
df = pd.read_csv("datasets/retail_orders.csv")
print(f"数据形状：{df.shape}")
print(df.head())
print(df.info())`,`# 章节5参考答案
print("各仓库订单数：")
print(df.groupby("warehouse").size())

print("\\n各仓库销售额：")
print(df.groupby("warehouse")["amount"].sum())

print("\\n各仓库平均订单额：")
print(df.groupby("warehouse")["amount"].mean())`,`# 章节6参考答案
result = df.groupby(["warehouse", "product_category"])["amount"].sum()
print("各仓库各品类销售额：")
print(result)

result2 = df.groupby(["warehouse", "product_category"]).agg({
    "amount": ["sum", "mean", "count"]
})
print(result2)`,`# 章节7参考答案
result = df.groupby("warehouse").agg({
    "amount": ["sum", "mean", "std", "min", "max"],
    "order_id": "count"
})
print(result)`,`# 章节8参考答案
result = df.groupby("warehouse").filter(
    lambda x: len(x) > 3
)
print(f"符合条件的仓库数据：{len(result)} 条")`,`# 章节9参考答案
df["amount_share"] = df.groupby("warehouse")["amount"].transform(
    lambda x: x / x.sum()
)
print(df[["warehouse", "amount", "amount_share"]].head())`,`# 章节10参考答案
pivot = pd.pivot_table(
    df,
    values="amount",
    index="warehouse",
    columns="product_category",
    aggfunc="sum",
    fill_value=0
)
print("透视表：")
print(pivot)`,`# 章节11参考答案
cross = pd.crosstab(df["warehouse"], df["product_category"])
print("交叉表：")
print(cross)`]},"03":{title:"购物篮关联分析",difficulty:"进阶",duration:"约 45 分钟",sectionGroups:[{title:"基础概念",sections:[{title:"什么是购物篮关联分析？",content:'关联分析用于发现"买了尿布是否买啤酒"这样的关联规则，是零售业经典的分析方法。著名的"啤酒与尿布"故事就是关联分析的经典案例。',tips:["关联分析帮助发现商品间的潜在关系，指导商品摆放和促销策略。"],warnings:[],exampleCode:`# 关联分析示例
# 经典问题：买面包的人通常也会买什么？
import pandas as pd

df = pd.read_csv("datasets/market_basket.csv")
print("数据加载成功！")
print(df.head())`},{title:"三大核心指标",content:"支持度：商品A和B同时购买的概率。置信度：买了A的人中，多少也买了B。提升度：关联规则比随机情况强多少倍。",tips:["支持度决定规则是否普遍，置信度决定规则是否可靠，提升度决定规则是否有价值。"],warnings:[],exampleCode:`# 计算支持度
total_transactions = len(df)
item_counts = df["items"].str.split(",").explode().value_counts()
support_bread = item_counts.get("面包", 0) / total_transactions
print(f"面包的支持度：{support_bread:.2%}")`}]},{title:"数据准备",sections:[{title:"1.1 导入必要工具库",content:"导入 pandas 处理数据转换，numpy 进行数值计算。",tips:["关联分析需要将商品列表转换为0/1矩阵格式。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np

print("库加载成功！")`},{title:"1.2 数据预处理",content:"将逗号分隔的商品字符串转换为0/1矩阵（事务矩阵），这是进行关联分析的必要准备。",tips:["使用 str.split + explode 将列表展开，然后用 pivot_table 转成事务矩阵。"],warnings:[],exampleCode:`# 转换为事务矩阵
df["items_list"] = df["items"].str.split(",")

# 创建事务矩阵
all_items = set()
for items in df["items_list"]:
    all_items.update([item.strip() for item in items])

# 转换为0/1矩阵
transaction_matrix = pd.DataFrame(
    [[1 if item.strip() in items else 0 for item in all_items] 
     for items in df["items_list"]],
    columns=list(all_items)
)
print(f"事务矩阵形状：{transaction_matrix.shape}")
print(transaction_matrix.head())`}]},{title:"核心关联分析",sections:[{title:"2.1 频繁项集挖掘",content:"使用纯pandas实现Apriori算法的核心：计算所有项集的支持度，找出满足最小支持度阈值的频繁项集。",tips:["支持度 = 包含项集的交易数 / 总交易数"],warnings:[],exampleCode:`# 频繁项集挖掘
def get_support(transaction_matrix, items):
    return transaction_matrix[list(items)].all(axis=1).sum() / len(transaction_matrix)

# 单项支持度
item_supports = transaction_matrix.sum() / len(transaction_matrix)
print("单项支持度：")
print(item_supports.sort_values(ascending=False))`},{title:"2.2 关联规则生成",content:"从频繁项集中生成形如 A → B 的关联规则，计算每条规则的置信度。",tips:["置信度 = P(A∩B) / P(A) = 支持度(A,B) / 支持度(A)"],warnings:[],exampleCode:`# 生成关联规则
# 例如：牛奶 → 面包
milk_support = item_supports.get("牛奶", 0)
bread_support = item_supports.get("面包", 0)
milk_bread_support = transaction_matrix["牛奶"] & transaction_matrix["面包"]

confidence = milk_bread_support.sum() / milk_support / len(transaction_matrix)
print(f"牛奶 → 面包的置信度：{confidence:.2%}")`},{title:"2.3 提升度计算",content:"提升度衡量关联规则的价值：提升度 > 1 表示正相关，= 1 表示独立，< 1 表示负相关。",tips:["提升度 = 置信度 / B的支持度"],warnings:[],exampleCode:`# 计算提升度
bread_support = item_supports.get("面包", 0)
confidence = milk_bread_support.sum() / milk_support / len(transaction_matrix)
lift = confidence / bread_support

print(f"牛奶 → 面包的提升度：{lift:.2f}")
if lift > 1:
    print("存在正相关，建议关联销售")`}]},{title:"实战应用",sections:[{title:"3.1 商品推荐引擎",content:"基于关联规则构建简单的商品推荐系统：当用户购买某商品时，推荐关联规则置信度高的其他商品。",tips:["可以预先计算所有强关联规则，存储在字典中用于实时推荐。"],warnings:[],exampleCode:`# 简单的推荐引擎
rules = [
    {"from": "牛奶", "to": "面包", "confidence": 0.75},
    {"from": "尿布", "to": "啤酒", "confidence": 0.80},
]

def recommend(item, rules):
    recommendations = [r["to"] for r in rules if r["from"] == item]
    return recommendations

print("买了牛奶的人还买了：", recommend("牛奶", rules))
print("买了尿布的人还买了：", recommend("尿布", rules))`}]}],practiceTitle:"实战练习：完整购物篮关联分析",practiceDesc:"从原始数据到推荐结果的完整代码实现",initialCode:`# 购物篮关联分析练习
import pandas as pd
import numpy as np

# 1. 加载数据
df = pd.read_csv("datasets/market_basket.csv")
print("数据加载成功！")

# 2. 转换为事务矩阵
df["items_list"] = df["items"].str.split(",")

# 3. 计算单项支持度
all_items = set()
for items in df["items_list"]:
    all_items.update([item.strip() for item in items])

transaction_matrix = pd.DataFrame(
    [[1 if item.strip() in items else 0 for item in all_items] 
     for items in df["items_list"]],
    columns=list(all_items)
)

item_supports = transaction_matrix.sum() / len(transaction_matrix)
print("\\n支持度排名：")
print(item_supports.sort_values(ascending=False))

# 4. 计算关联规则
print("\\n关联规则分析...")`,sectionAnswers:[`# 章节1参考答案
import pandas as pd

df = pd.read_csv("datasets/market_basket.csv")
print("数据加载成功！")
print(df.head())`,`# 章节2参考答案
total_transactions = len(df)
item_counts = df["items"].str.split(",").explode().value_counts()
support_bread = item_counts.get("面包", 0) / total_transactions
print(f"面包的支持度：{support_bread:.2%}")`,`# 章节3参考答案
import pandas as pd
import numpy as np

print("库加载成功！")`,`# 章节4参考答案
df["items_list"] = df["items"].str.split(",")

all_items = set()
for items in df["items_list"]:
    all_items.update([item.strip() for item in items])

transaction_matrix = pd.DataFrame(
    [[1 if item.strip() in items else 0 for item in all_items] 
     for items in df["items_list"]],
    columns=list(all_items)
)
print(f"事务矩阵形状：{transaction_matrix.shape}")
print(transaction_matrix.head())`,`# 章节5参考答案
def get_support(transaction_matrix, items):
    return transaction_matrix[list(items)].all(axis=1).sum() / len(transaction_matrix)

item_supports = transaction_matrix.sum() / len(transaction_matrix)
print("单项支持度：")
print(item_supports.sort_values(ascending=False))`,`# 章节6参考答案
milk_support = item_supports.get("牛奶", 0)
milk_bread_support = transaction_matrix["牛奶"] & transaction_matrix["面包"]
confidence = milk_bread_support.sum() / milk_support / len(transaction_matrix)
print(f"牛奶 → 面包的置信度：{confidence:.2%}")`,`# 章节7参考答案
bread_support = item_supports.get("面包", 0)
confidence = milk_bread_support.sum() / milk_support / len(transaction_matrix)
lift = confidence / bread_support

print(f"牛奶 → 面包的提升度：{lift:.2f}")
if lift > 1:
    print("存在正相关，建议关联销售")`,`# 章节8参考答案
rules = [
    {"from": "牛奶", "to": "面包", "confidence": 0.75},
    {"from": "尿布", "to": "啤酒", "confidence": 0.80},
]

def recommend(item, rules):
    recommendations = [r["to"] for r in rules if r["from"] == item]
    return recommendations

print("买了牛奶的人还买了：", recommend("牛奶", rules))`]},"04":{title:"客户聚类分群分析",difficulty:"进阶",duration:"约 45 分钟",sectionGroups:[{title:"基础概念",sections:[{title:"什么是客户聚类分群？",content:"客户聚类是将客户按照行为特征相似度分组的过程。K-Means是最常用的聚类算法之一，将客户划分为K个群体，每个群体内部相似度高，群体之间差异大。",tips:["聚类是无监督学习，不需要预先知道标签。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("客户数据加载成功！")
print(df.head())`},{title:"聚类分析完整流程",content:"五步走：1) 数据准备 → 2) 特征选择 → 3) 标准化 → 4) 聚类 → 5) 评估与解读。",tips:["特征选择和标准化对聚类结果影响很大。"],warnings:[],exampleCode:`# 聚类流程
# 1. 准备数据
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]

# 2. 提取特征
X = df[features]

# 3. 标准化
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 4. K-Means聚类
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=3, random_state=42)
df["cluster"] = kmeans.fit_predict(X_scaled)

print("聚类完成！")
print(df.groupby("cluster").mean())`}]},{title:"数据准备",sections:[{title:"1.1 导入必要工具库",content:"导入pandas、numpy和sklearn的聚类和预处理模块。",tips:["确保已安装：pip install scikit-learn"],warnings:[],exampleCode:`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

print("库加载成功！")`},{title:"1.2 特征选择与标准化",content:"选择用于聚类的特征，并使用StandardScaler进行Z-Score标准化，消除量纲影响。",tips:["不同量纲的特征（如年龄和收入）必须标准化，否则收入会主导距离计算。"],warnings:[],exampleCode:`# 特征选择
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]

# Z-Score标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print("标准化前：")
print(X.describe())
print("\\n标准化后：")
print(pd.DataFrame(X_scaled, columns=features).describe())`}]},{title:"核心聚类分析",sections:[{title:"2.1 K-Means基础聚类",content:"K-Means将数据划分为K个簇，每个点属于距其最近的质心所在的簇。",tips:["n_clusters是要分的簇数，random_state保证结果可复现。"],warnings:[],exampleCode:`# K-Means聚类
kmeans = KMeans(n_clusters=3, random_state=42)
df["cluster"] = kmeans.fit_predict(X_scaled)

print("各簇客户数量：")
print(df["cluster"].value_counts().sort_index())`},{title:"2.2 肘部法则确定K值",content:"通过WCSS（簇内平方和）曲线找到最优的K值。WCSS下降变缓的拐点就是最佳K值。",tips:["K值太小会欠拟合，K值太大会过拟合。"],warnings:[],exampleCode:`# 肘部法则
wcss = []
K_range = range(1, 8)

for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    wcss.append(kmeans.inertia_)

print("WCSS值：")
for k, w in zip(K_range, wcss):
    print(f"K={k}: {w:.2f}")`},{title:"2.3 聚类结果分析",content:"分析每个簇的特征，计算各簇的均值统计量，形成客户画像。",tips:['结合业务理解给每个簇命名（如"高价值客户"、"流失风险客户"等）。'],warnings:[],exampleCode:`# 各簇特征分析
cluster_stats = df.groupby("cluster")[features].mean()
print("各簇特征均值：")
print(cluster_stats)

# 各簇客户画像
for cluster_id in range(3):
    cluster_data = df[df["cluster"] == cluster_id]
    print(f"\\n簇 {cluster_id} ({len(cluster_data)}人)：")
    print(f"  平均年龄：{cluster_data['age'].mean():.1f}岁")
    print(f"  平均收入：{cluster_data['income'].mean():.0f}元")
    print(f"  平均消费频率：{cluster_data['purchase_freq'].mean():.1f}次")`}]},{title:"实战应用",sections:[{title:"3.1 差异化运营策略",content:"根据不同客户群体的特征，制定精准的运营策略。",tips:["高价值客户要维护，流失风险客户要挽留，潜力客户要培养。"],warnings:[],exampleCode:`# 运营策略
strategies = {
    0: "高价值客户 - 提供VIP服务和专属优惠",
    1: "潜力客户 - 推送新品和促销活动",
    2: "流失风险客户 - 发送召回邮件和优惠券"
}

for cluster_id, strategy in strategies.items():
    count = len(df[df["cluster"] == cluster_id])
    print(f"簇 {cluster_id} ({count}人): {strategy}")`}]}],practiceTitle:"实战练习：完整客户聚类分群",practiceDesc:"从原始数据到业务策略的完整代码实现",initialCode:`# 客户聚类分群练习
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

# 1. 加载数据
df = pd.read_csv("datasets/customer_features.csv")
print("数据加载成功！")

# 2. 特征选择与标准化
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 3. 肘部法则确定K值
wcss = []
K_range = range(1, 6)
for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    wcss.append(kmeans.inertia_)

print("\\nWCSS值：")
for k, w in zip(K_range, wcss):
    print(f"K={k}: {w:.2f}")

# 4. K-Means聚类（假设K=3）
kmeans = KMeans(n_clusters=3, random_state=42)
df["cluster"] = kmeans.fit_predict(X_scaled)

# 5. 聚类结果分析
print("\\n各簇特征均值：")
print(df.groupby("cluster")[features].mean())`,sectionAnswers:[`# 章节1参考答案
import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("客户数据加载成功！")
print(df.head())`,`# 章节2参考答案
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=3, random_state=42)
df["cluster"] = kmeans.fit_predict(X_scaled)
print("聚类完成！")
print(df.groupby("cluster").mean())`,`# 章节3参考答案
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

print("库加载成功！")`,`# 章节4参考答案
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print("标准化后：")
print(pd.DataFrame(X_scaled, columns=features).describe())`,`# 章节5参考答案
kmeans = KMeans(n_clusters=3, random_state=42)
df["cluster"] = kmeans.fit_predict(X_scaled)
print("各簇客户数量：")
print(df["cluster"].value_counts().sort_index())`,`# 章节6参考答案
wcss = []
K_range = range(1, 8)
for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    wcss.append(kmeans.inertia_)
for k, w in zip(K_range, wcss):
    print(f"K={k}: {w:.2f}")`,`# 章节7参考答案
cluster_stats = df.groupby("cluster")[features].mean()
print("各簇特征均值：")
print(cluster_stats)`,`# 章节8参考答案
strategies = {
    0: "高价值客户 - 提供VIP服务",
    1: "潜力客户 - 推送促销活动",
    2: "流失风险客户 - 发送召回邮件"
}
for cluster_id, strategy in strategies.items():
    count = len(df[df["cluster"] == cluster_id])
    print(f"簇 {cluster_id} ({count}人): {strategy}")`]},"05":{title:"专业数据可视化",difficulty:"进阶",duration:"约 45 分钟",sectionGroups:[{title:"基础概念",sections:[{title:"什么是数据可视化？",content:'数据可视化是将数据转换为图形/图表的过程，帮助发现数据中的模式、趋势和异常。好的可视化让数据"说话"。',tips:["选择正确的图表类型是可视化成功的关键。"],warnings:[],exampleCode:`import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/retail_orders.csv")
print("数据加载成功！")

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False`},{title:"图表类型选择指南",content:"柱状图：比较类别大小。折线图：展示趋势变化。饼图：显示占比关系。散点图：探索变量关系。",tips:["避免使用3D图表和过多颜色，保持简洁清晰。"],warnings:[],exampleCode:`# 选择图表类型
# 比较类目：柱状图 plt.bar()
# 展示趋势：折线图 plt.plot()
# 显示占比：饼图 plt.pie()
# 探索关系：散点图 plt.scatter()`}]},{title:"数据准备",sections:[{title:"1.1 导入必要工具库",content:"导入pandas、numpy和matplotlib。matplotlib是Python最基础的可视化库。",tips:["seaborn是matplotlib的高级封装，图表更美观。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

print("库加载成功！")`},{title:"1.2 数据预处理",content:"在进行可视化之前，通常需要对数据进行聚合、分组等预处理。",tips:["先聚合再绘图，避免图表过于拥挤。"],warnings:[],exampleCode:`# 数据聚合
warehouse_sales = df.groupby("warehouse")["amount"].sum()
print("各仓库销售额：")
print(warehouse_sales)`}]},{title:"核心图表绘制",sections:[{title:"2.1 柱状图",content:"使用plt.bar()绘制柱状图，适合比较不同类别的数值大小。",tips:["可以使用plt.xticks(rotation=45)旋转x轴标签。"],warnings:[],exampleCode:`import matplotlib.pyplot as plt

# 柱状图
plt.figure(figsize=(10, 6))
plt.bar(warehouse_sales.index, warehouse_sales.values, color='steelblue')
plt.title('各仓库销售额', fontsize=16)
plt.xlabel('仓库', fontsize=12)
plt.ylabel('销售额', fontsize=12)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()`},{title:"2.2 折线图",content:"使用plt.plot()绘制折线图，适合展示时间序列数据的趋势变化。",tips:["可以用marker参数添加数据点标记。"],warnings:[],exampleCode:`# 转换日期
df["order_date"] = pd.to_datetime(df["order_date"])
daily_sales = df.groupby("order_date")["amount"].sum().sort_index()

# 折线图
plt.figure(figsize=(12, 6))
plt.plot(daily_sales.index, daily_sales.values, marker='o', linewidth=2)
plt.title('每日销售额趋势', fontsize=16)
plt.xlabel('日期', fontsize=12)
plt.ylabel('销售额', fontsize=12)
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()`},{title:"2.3 饼图",content:"使用plt.pie()绘制饼图，适合展示各部分占整体的比例关系。",tips:["使用autopct显示百分比，explode突出某部分。"],warnings:[],exampleCode:`# 饼图
plt.figure(figsize=(8, 8))
plt.pie(warehouse_sales.values, 
        labels=warehouse_sales.index, 
        autopct='%1.1f%%',
        colors=['#ff9999','#66b3ff','#99ff99'])
plt.title('各仓库销售占比', fontsize=16)
plt.axis('equal')
plt.tight_layout()
plt.show()`},{title:"2.4 散点图",content:"使用plt.scatter()绘制散点图，适合探索两个变量之间的关系。",tips:["可以用c参数添加颜色映射，用s参数调整点大小。"],warnings:[],exampleCode:`# 散点图
plt.figure(figsize=(10, 6))
plt.scatter(df["order_id"].astype(str), 
            df["amount"], 
            alpha=0.6, 
            s=100)
plt.title('订单金额分布', fontsize=16)
plt.xlabel('订单ID', fontsize=12)
plt.ylabel('金额', fontsize=12)
plt.tight_layout()
plt.show()`}]},{title:"高级技巧",sections:[{title:"3.1 组合图表",content:"使用twinx()创建双Y轴图表，在同一图中展示两个不同量级的指标。",tips:["左右Y轴分别对应不同指标，注意颜色区分。"],warnings:[],exampleCode:`# 双Y轴组合图
fig, ax1 = plt.subplots(figsize=(12, 6))

ax1.bar(daily_sales.index, daily_sales.values, alpha=0.6, label='销售额')
ax1.set_xlabel('日期')
ax1.set_ylabel('销售额', color='blue')

ax2 = ax1.twinx()
ax2.plot(daily_sales.index, daily_sales.values.cumsum(), 
         color='red', linewidth=2, label='累计销售额')
ax2.set_ylabel('累计销售额', color='red')

plt.title('销售额与累计销售额')
plt.tight_layout()
plt.show()`}]}],practiceTitle:"实战练习：综合可视化分析",practiceDesc:"综合运用多种图表完成一份完整的数据分析报告",initialCode:`# 数据可视化练习
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 1. 加载数据
df = pd.read_csv("datasets/retail_orders.csv")
print("数据加载成功！")

# 2. 聚合数据
warehouse_sales = df.groupby("warehouse")["amount"].sum()
category_sales = df.groupby("product_category")["amount"].sum()

# 3. 绘制柱状图
plt.figure(figsize=(10, 6))
plt.bar(warehouse_sales.index, warehouse_sales.values, color='steelblue')
plt.title('各仓库销售额')
plt.xlabel('仓库')
plt.ylabel('销售额')
plt.tight_layout()
plt.show()

# 4. 绘制饼图
plt.figure(figsize=(8, 8))
plt.pie(category_sales.values, labels=category_sales.index, autopct='%1.1f%%')
plt.title('各品类销售占比')
plt.axis('equal')
plt.tight_layout()
plt.show()`,sectionAnswers:[`# 章节1参考答案
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/retail_orders.csv")
print("数据加载成功！")
plt.rcParams['font.sans-serif'] = ['SimHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False`,`# 章节2参考答案
# 选择图表类型
# 比较类目：柱状图 plt.bar()
# 展示趋势：折线图 plt.plot()
# 显示占比：饼图 plt.pie()
# 探索关系：散点图 plt.scatter()`,`# 章节3参考答案
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

print("库加载成功！")`,`# 章节4参考答案
warehouse_sales = df.groupby("warehouse")["amount"].sum()
print("各仓库销售额：")
print(warehouse_sales)`,`# 章节5参考答案
plt.figure(figsize=(10, 6))
plt.bar(warehouse_sales.index, warehouse_sales.values, color='steelblue')
plt.title('各仓库销售额', fontsize=16)
plt.xlabel('仓库', fontsize=12)
plt.ylabel('销售额', fontsize=12)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()`,`# 章节6参考答案
df["order_date"] = pd.to_datetime(df["order_date"])
daily_sales = df.groupby("order_date")["amount"].sum().sort_index()
plt.figure(figsize=(12, 6))
plt.plot(daily_sales.index, daily_sales.values, marker='o', linewidth=2)
plt.title('每日销售额趋势', fontsize=16)
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()`,`# 章节7参考答案
plt.figure(figsize=(8, 8))
plt.pie(warehouse_sales.values, labels=warehouse_sales.index, autopct='%1.1f%%')
plt.title('各仓库销售占比', fontsize=16)
plt.axis('equal')
plt.tight_layout()
plt.show()`,`# 章节8参考答案
plt.figure(figsize=(10, 6))
plt.scatter(df["order_id"].astype(str), df["amount"], alpha=0.6, s=100)
plt.title('订单金额分布', fontsize=16)
plt.tight_layout()
plt.show()`,`# 章节9参考答案
fig, ax1 = plt.subplots(figsize=(12, 6))
ax1.bar(daily_sales.index, daily_sales.values, alpha=0.6, label='销售额')
ax1.set_xlabel('日期')
ax1.set_ylabel('销售额', color='blue')
ax2 = ax1.twinx()
ax2.plot(daily_sales.index, daily_sales.values.cumsum(), color='red', linewidth=2)
ax2.set_ylabel('累计销售额', color='red')
plt.title('销售额与累计销售额')
plt.tight_layout()
plt.show()`]},"06":{title:"业务A/B测试数据分析",difficulty:"进阶",duration:"约 45 分钟",sectionGroups:[{title:"基础概念",sections:[{title:"什么是A/B测试？",content:"A/B测试是一种对照实验方法，将用户随机分为对照组和实验组，比较不同策略的效果差异。",tips:["A/B测试的核心是控制变量，只有实验因素不同，其他条件一致。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np

df = pd.read_csv("datasets/ab_test.csv")
print("A/B测试数据加载成功！")
print(df.head())`},{title:"核心评估指标",content:"转化率：完成目标行为的用户比例。提升度：实验组相比对照组的提升百分比。显著性：差异是否具有统计学意义。",tips:["p值小于0.05通常被认为具有统计显著性。"],warnings:[],exampleCode:`# 计算转化率
control = df[df["group"] == "control"]
treatment = df[df["group"] == "treatment"]

control_rate = control["conversion"].mean()
treatment_rate = treatment["conversion"].mean()
lift = (treatment_rate - control_rate) / control_rate * 100

print(f"对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"提升度：{lift:.2f}%")`}]},{title:"数据准备",sections:[{title:"1.1 导入必要工具库",content:"导入pandas、numpy和scipy.stats进行统计检验。",tips:["scipy.stats提供各种统计分布和假设检验函数。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np
from scipy import stats

print("库加载成功！")`},{title:"1.2 数据校验",content:"在分析前检查样本量是否足够、分组是否均衡、数据质量是否合格。",tips:["样本量太小会导致结果不稳定，分组不均衡会引入偏差。"],warnings:[],exampleCode:`# 数据校验
print(f"总样本量：{len(df)}")
print(f"\\n分组情况：")
print(df["group"].value_counts())

# 检查分组均衡性
group_sizes = df["group"].value_counts()
imbalance = abs(group_sizes["control"] - group_sizes["treatment"]) / len(df) * 100
print(f"\\n分组不均衡程度：{imbalance:.2f}%")`}]},{title:"核心分析",sections:[{title:"2.1 转化率对比",content:"计算对照组和实验组的转化率，直观展示实验效果。",tips:["转化率是最直观的业务指标，但需要统计检验确认显著性。"],warnings:[],exampleCode:`# 转化率对比
conversion_rates = df.groupby("group")["conversion"].agg(["mean", "sum", "count"])
print("各组转化情况：")
print(conversion_rates)`},{title:"2.2 统计显著性检验",content:"使用卡方检验判断转化率差异是否显著，或使用t检验判断均值差异是否显著。",tips:["卡方检验适用于比例数据，t检验适用于连续数据。"],warnings:[],exampleCode:`# 卡方检验
from scipy.stats import chi2_contingency

contingency_table = pd.crosstab(df["group"], df["conversion"])
chi2, p_value, dof, expected = chi2_contingency(contingency_table)

print(f"卡方统计量：{chi2:.4f}")
print(f"p值：{p_value:.4f}")

if p_value < 0.05:
    print("结论：差异具有统计显著性 ✓")
else:
    print("结论：差异不具有统计显著性 ✗")`},{title:"2.3 置信区间计算",content:"计算转化率差异的置信区间，给出效果估计的范围。",tips:["95%置信区间表示真实值有95%的概率落在这个范围内。"],warnings:[],exampleCode:`# 置信区间计算
from scipy.stats import norm

# 转化率差异的置信区间
p1 = treatment["conversion"].mean()
p2 = control["conversion"].mean()
n1, n2 = len(treatment), len(control)

# pooled proportion
p_pooled = (treatment["conversion"].sum() + control["conversion"].sum()) / (n1 + n2)
se = np.sqrt(p_pooled * (1 - p_pooled) * (1/n1 + 1/n2))

# 95%置信区间
z = 1.96
diff = p1 - p2
ci_lower = diff - z * se
ci_upper = diff + z * se

print(f"转化率差异：{diff:.4f}")
print(f"95%置信区间：[{ci_lower:.4f}, {ci_upper:.4f}]")`}]},{title:"结论报告",sections:[{title:"3.1 结果解读",content:"综合统计检验和业务指标，给出明确的实验结论和业务建议。",tips:["即使统计显著，也要结合业务成本收益决定是否上线。"],warnings:[],exampleCode:`# 结果解读
print("="*50)
print("A/B测试分析报告")
print("="*50)
print(f"对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"相对提升：{lift:.2f}%")
print(f"统计显著性：{'是' if p_value < 0.05 else '否'} (p={p_value:.4f})")
print("="*50)

if p_value < 0.05 and lift > 0:
    print("建议：实验组方案效果更优，建议全量上线")
else:
    print("建议：实验组方案与对照组无显著差异或效果下降，继续优化")`}]}],practiceTitle:"实战练习：完整A/B测试分析",practiceDesc:"综合运用所学知识完成一次完整的A/B测试数据分析",initialCode:`# A/B测试分析练习
import pandas as pd
import numpy as np
from scipy import stats

# 1. 加载数据
df = pd.read_csv("datasets/ab_test.csv")
print("数据加载成功！")

# 2. 数据校验
print("\\n分组情况：")
print(df["group"].value_counts())

# 3. 转化率对比
control = df[df["group"] == "control"]
treatment = df[df["group"] == "treatment"]

control_rate = control["conversion"].mean()
treatment_rate = treatment["conversion"].mean()
lift = (treatment_rate - control_rate) / control_rate * 100

print(f"\\n对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"提升度：{lift:.2f}%")

# 4. 统计检验
from scipy.stats import chi2_contingency
contingency_table = pd.crosstab(df["group"], df["conversion"])
chi2, p_value, dof, expected = chi2_contingency(contingency_table)

print(f"\\n卡方检验p值：{p_value:.4f}")
if p_value < 0.05:
    print("结论：差异具有统计显著性 ✓")`,sectionAnswers:[`# 章节1参考答案
import pandas as pd
import numpy as np

df = pd.read_csv("datasets/ab_test.csv")
print("A/B测试数据加载成功！")
print(df.head())`,`# 章节2参考答案
control = df[df["group"] == "control"]
treatment = df[df["group"] == "treatment"]

control_rate = control["conversion"].mean()
treatment_rate = treatment["conversion"].mean()
lift = (treatment_rate - control_rate) / control_rate * 100

print(f"对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"提升度：{lift:.2f}%")`,`# 章节3参考答案
import pandas as pd
import numpy as np
from scipy import stats

print("库加载成功！")`,`# 章节4参考答案
print(f"总样本量：{len(df)}")
print(f"分组情况：")
print(df["group"].value_counts())`,`# 章节5参考答案
conversion_rates = df.groupby("group")["conversion"].agg(["mean", "sum", "count"])
print("各组转化情况：")
print(conversion_rates)`,`# 章节6参考答案
from scipy.stats import chi2_contingency

contingency_table = pd.crosstab(df["group"], df["conversion"])
chi2, p_value, dof, expected = chi2_contingency(contingency_table)

print(f"卡方统计量：{chi2:.4f}")
print(f"p值：{p_value:.4f}")

if p_value < 0.05:
    print("结论：差异具有统计显著性 ✓")
else:
    print("结论：差异不具有统计显著性 ✗")`,`# 章节7参考答案
p1 = treatment["conversion"].mean()
p2 = control["conversion"].mean()
n1, n2 = len(treatment), len(control)

p_pooled = (treatment["conversion"].sum() + control["conversion"].sum()) / (n1 + n2)
se = np.sqrt(p_pooled * (1 - p_pooled) * (1/n1 + 1/n2))

z = 1.96
diff = p1 - p2
ci_lower = diff - z * se
ci_upper = diff + z * se

print(f"转化率差异：{diff:.4f}")
print(f"95%置信区间：[{ci_lower:.4f}, {ci_upper:.4f}]")`,`# 章节8参考答案
print("="*50)
print("A/B测试分析报告")
print("="*50)
print(f"对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"相对提升：{lift:.2f}%")
print(f"统计显著性：{'是' if p_value < 0.05 else '否'}")
print("="*50)

if p_value < 0.05 and lift > 0:
    print("建议：实验组方案效果更优，建议全量上线")
else:
    print("建议：继续优化方案")`]},"07":{title:"销量时间序列分析",difficulty:"进阶",duration:"约 45 分钟",sectionGroups:[{title:"基础概念",sections:[{title:"什么是时间序列分析？",content:"时间序列分析是针对按时间顺序排列的数据进行分析，发现趋势、周期和季节性等规律。",tips:["时间序列分析广泛应用于销量预测、股票分析、流量监控等场景。"],warnings:[],exampleCode:`import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/time_series_sales.csv")
print("时间序列数据加载成功！")

# 转换日期列为索引
df["date"] = pd.to_datetime(df["date"])
df = df.sort_values("date")
print(df.head())`},{title:"时间序列分解",content:"时间序列可以分解为：趋势（Trend）、周期（Seasonal）、残差（Residual）。理解这些成分是分析的基础。",tips:["加性模型：Y=T+S+R，乘性模型：Y=T×S×R。"],warnings:[],exampleCode:`# 时间序列分解概念
# 趋势(Trend)：长期的变化方向
# 周期(Seasonal)：固定周期的波动
# 残差(Residual)：无法解释的随机波动

print("时间序列包含的成分：")
print("1. 趋势(Trend)：长期上升或下降")
print("2. 周期(Seasonal)：固定周期波动")
print("3. 残差(Residual)：随机波动")`}]},{title:"数据准备",sections:[{title:"1.1 导入必要工具库",content:"导入pandas、numpy和matplotlib进行时间序列分析和可视化。",tips:["datetime模块用于日期处理，matplotlib用于绘图。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

print("库加载成功！")`},{title:"1.2 时间序列预处理",content:"将日期列转换为datetime类型，设置日期为索引，进行必要的缺失值处理。",tips:["缺失值处理方法：前向填充、后向填充、插值等。"],warnings:[],exampleCode:`# 时间序列预处理
df["date"] = pd.to_datetime(df["date"])
df = df.set_index("date")
df = df.sort_index()

# 处理缺失值（如果存在）
df["sales"] = df["sales"].fillna(method="ffill")

print("预处理完成！")
print(f"时间范围：{df.index.min()} 至 {df.index.max()}")
print(f"数据量：{len(df)} 条")`}]},{title:"核心分析",sections:[{title:"2.1 趋势分析",content:"使用移动平均平滑短期波动，展示长期趋势变化。",tips:["窗口大小选择要合适，太小噪音多，太大趋势不明显。"],warnings:[],exampleCode:`# 趋势分析 - 移动平均
df["ma_7"] = df["sales"].rolling(window=7).mean()
df["ma_30"] = df["sales"].rolling(window=30).mean()

print("7日移动平均：")
print(df[["sales", "ma_7"]].tail(10))

# 绘制趋势图
plt.figure(figsize=(12, 6))
plt.plot(df.index, df["sales"], label="原始数据", alpha=0.5)
plt.plot(df.index, df["ma_7"], label="7日均线", linewidth=2)
plt.plot(df.index, df["ma_30"], label="30日均线", linewidth=2)
plt.legend()
plt.title("销量趋势分析")
plt.tight_layout()
plt.show()`},{title:"2.2 季节性分析",content:"按月、按周聚合数据，识别周期性的波动模式。",tips:["使用groupby按时间周期聚合，可以发现季节性规律。"],warnings:[],exampleCode:`# 季节性分析
df["month"] = df.index.month
df["weekday"] = df.index.dayofweek

# 按月聚合
monthly_sales = df.groupby("month")["sales"].sum()
print("月度销量：")
print(monthly_sales)

# 按星期聚合
weekday_sales = df.groupby("weekday")["sales"].mean()
print("\\n星期平均销量：")
print(weekday_sales)`},{title:"2.3 增长率计算",content:"计算同比增长率和环比增长率，是业务分析中最常用的指标。",tips:["同比：与去年同期比；环比：与上期比。"],warnings:[],exampleCode:`# 同比和环比增长率
df["sales_yoy"] = df["sales"].pct_change(periods=365) * 100  # 同比
df["sales_qoq"] = df["sales"].pct_change(periods=30) * 100   # 环比

print("增长率分析：")
print(df[["sales", "sales_yoy", "sales_qoq"]].tail(10))`}]},{title:"预测与评估",sections:[{title:"3.1 移动平均预测",content:"使用简单移动平均进行短期销量预测，是最基础的时间序列预测方法。",tips:["移动平均预测适合平稳时间序列，对趋势转折预测效果差。"],warnings:[],exampleCode:`# 移动平均预测
# 用过去7天的平均预测下一天
df["forecast"] = df["sales"].rolling(window=7).mean().shift(1)

# 计算预测误差
df["error"] = df["sales"] - df["forecast"]
df["abs_error"] = abs(df["error"])

mae = df["abs_error"].mean()
print(f"平均绝对误差(MAE)：{mae:.2f}")

# 绘制预测对比
plt.figure(figsize=(12, 6))
plt.plot(df.index, df["sales"], label="实际销量")
plt.plot(df.index, df["forecast"], label="预测销量")
plt.legend()
plt.title("销量预测 vs 实际")
plt.tight_layout()
plt.show()`}]}],practiceTitle:"实战练习：完整时间序列分析",practiceDesc:"从数据导入到预测评估的完整流程",initialCode:`# 时间序列分析练习
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 1. 加载数据
df = pd.read_csv("datasets/time_series_sales.csv")
df["date"] = pd.to_datetime(df["date"])
df = df.sort_values("date")
print("数据加载成功！")

# 2. 时间序列预处理
df = df.set_index("date")
print(f"时间范围：{df.index.min()} 至 {df.index.max()}")

# 3. 趋势分析
df["ma_7"] = df["sales"].rolling(window=7).mean()
print("\\n7日移动平均：")
print(df[["sales", "ma_7"]].tail(10))

# 4. 季节性分析
df["month"] = df.index.month
monthly_sales = df.groupby("month")["sales"].sum()
print("\\n月度销量：")
print(monthly_sales)

# 5. 预测
df["forecast"] = df["sales"].rolling(window=7).mean().shift(1)
mae = (df["sales"] - df["forecast"]).abs().mean()
print(f"\\n预测误差MAE：{mae:.2f}")`,sectionAnswers:[`# 章节1参考答案
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/time_series_sales.csv")
df["date"] = pd.to_datetime(df["date"])
df = df.sort_values("date")
print("时间序列数据加载成功！")
print(df.head())`,`# 章节2参考答案
print("时间序列包含的成分：")
print("1. 趋势(Trend)：长期上升或下降")
print("2. 周期(Seasonal)：固定周期波动")
print("3. 残差(Residual)：随机波动")`,`# 章节3参考答案
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

print("库加载成功！")`,`# 章节4参考答案
df["date"] = pd.to_datetime(df["date"])
df = df.set_index("date")
df = df.sort_index()
df["sales"] = df["sales"].fillna(method="ffill")
print("预处理完成！")
print(f"时间范围：{df.index.min()} 至 {df.index.max()}")`,`# 章节5参考答案
df["ma_7"] = df["sales"].rolling(window=7).mean()
df["ma_30"] = df["sales"].rolling(window=30).mean()
print("7日移动平均：")
print(df[["sales", "ma_7"]].tail(10))`,`# 章节6参考答案
df["month"] = df.index.month
df["weekday"] = df.index.dayofweek

monthly_sales = df.groupby("month")["sales"].sum()
print("月度销量：")
print(monthly_sales)

weekday_sales = df.groupby("weekday")["sales"].mean()
print("\\n星期平均销量：")
print(weekday_sales)`,`# 章节7参考答案
df["sales_yoy"] = df["sales"].pct_change(periods=365) * 100
df["sales_qoq"] = df["sales"].pct_change(periods=30) * 100
print("增长率分析：")
print(df[["sales", "sales_yoy", "sales_qoq"]].tail(10))`,`# 章节8参考答案
df["forecast"] = df["sales"].rolling(window=7).mean().shift(1)
df["error"] = df["sales"] - df["forecast"]
df["abs_error"] = abs(df["error"])
mae = df["abs_error"].mean()
print(f"平均绝对误差(MAE)：{mae:.2f}")`]},"08":{title:"数据分析特征工程",difficulty:"高级",duration:"约 60 分钟",sectionGroups:[{title:"基础概念",sections:[{title:"什么是特征工程？",content:"特征工程是将原始数据转换为模型可用特征的过程。好的特征工程可以大幅提升模型效果，有时甚至比选择算法更重要。",tips:["特征工程是数据科学中最耗时间但也最重要的环节。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("客户数据加载成功！")
print(df.head())`},{title:"特征类型",content:"数值特征：年龄、收入等连续数值。类别特征：性别、省份等离散类别。时间特征：从日期提取的年月日等。",tips:["不同类型的特征需要不同的处理方法。"],warnings:[],exampleCode:`# 识别特征类型
numerical_cols = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
categorical_cols = []  # 本数据集没有明显的类别特征
date_cols = ["register_date", "last_purchase"]

print("数值特征：", numerical_cols)
print("类别特征：", categorical_cols)
print("日期特征：", date_cols)`}]},{title:"数据准备",sections:[{title:"1.1 导入必要工具库",content:"导入pandas、numpy和sklearn的预处理模块。",tips:["sklearn.preprocessing提供各种特征预处理工具。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder

print("库加载成功！")`},{title:"1.2 原始数据探索",content:"使用info、describe、corr了解数据的基本情况、分布和相关性。",tips:["相关性分析可以发现可能冗余的特征。"],warnings:[],exampleCode:`# 数据探索
print("数据基本信息：")
print(df.info())

print("\\n统计描述：")
print(df.describe())

print("\\n相关性矩阵：")
print(df[numerical_cols].corr())`}]},{title:"特征构建",sections:[{title:"2.1 数值特征构造",content:"通过现有数值特征构造新的分析特征，如比率、差值、分箱等。",tips:["有业务意义的衍生特征往往比原始特征更有价值。"],warnings:[],exampleCode:`# 构造数值特征
# 客单价与均值的比率
df["order_value_ratio"] = df["avg_order_value"] / df["avg_order_value"].mean()

# 消费频率分段
df["freq_level"] = pd.cut(df["purchase_freq"], bins=[0, 5, 15, 100], 
                          labels=["低频", "中频", "高频"])

# 最近一次消费天数
df["last_purchase"] = pd.to_datetime(df["last_purchase"])
df["days_since_last"] = (pd.Timestamp.now() - df["last_purchase"]).dt.days

print("新增特征：")
print(df[["order_value_ratio", "freq_level", "days_since_last"]].head())`},{title:"2.2 时间特征提取",content:"从日期列提取年、月、日、星期等时间特征，以及时间间隔特征。",tips:["用户行为往往与时间周期相关，如周末、节假日等。"],warnings:[],exampleCode:`# 时间特征提取
df["register_date"] = pd.to_datetime(df["register_date"])

df["register_year"] = df["register_date"].dt.year
df["register_month"] = df["register_date"].dt.month
df["register_weekday"] = df["register_date"].dt.dayofweek
df["register_quarter"] = df["register_date"].dt.quarter

# 客户生命周期天数
df["customer_lifetime"] = (pd.Timestamp.now() - df["register_date"]).dt.days

print("时间特征：")
print(df[["register_year", "register_month", "register_weekday", "customer_lifetime"]].head())`},{title:"2.3 特征缩放",content:"使用StandardScaler进行Z-Score标准化，或使用MinMaxScaler进行归一化，消除量纲影响。",tips:["K-Means、SVM、神经网络等算法对特征缩放敏感。"],warnings:[],exampleCode:`# 特征缩放
features_to_scale = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]

# Z-Score标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df[features_to_scale])
print("Z-Score标准化后：")
print(pd.DataFrame(X_scaled, columns=features_to_scale).describe())`}]},{title:"特征优化",sections:[{title:"3.1 特征筛选",content:"使用方差阈值、相关系数等方法筛选高质量特征，剔除冗余特征。",tips:["特征不是越多越好，高质量特征比数量更重要。"],warnings:[],exampleCode:`# 特征筛选 - 相关性分析
corr_matrix = df[features_to_scale].corr()

# 找出高相关特征对（相关系数>0.9）
high_corr_pairs = []
for i in range(len(corr_matrix.columns)):
    for j in range(i+1, len(corr_matrix.columns)):
        if abs(corr_matrix.iloc[i, j]) > 0.9:
            high_corr_pairs.append(
                (corr_matrix.columns[i], corr_matrix.columns[j], corr_matrix.iloc[i, j])
            )

print("高相关特征对（可能存在冗余）：")
for pair in high_corr_pairs:
    print(f"  {pair[0]} <-> {pair[1]}: {pair[2]:.3f}")`}]}],practiceTitle:"实战练习：完整特征工程流程",practiceDesc:"综合运用特征工程完成客户数据的全流程处理",initialCode:`# 特征工程练习
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

# 1. 加载数据
df = pd.read_csv("datasets/customer_features.csv")
print("数据加载成功！")

# 2. 数据探索
numerical_cols = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
print("\\n相关性矩阵：")
print(df[numerical_cols].corr())

# 3. 构造数值特征
df["order_value_ratio"] = df["avg_order_value"] / df["avg_order_value"].mean()

# 4. 提取时间特征
df["register_date"] = pd.to_datetime(df["register_date"])
df["last_purchase"] = pd.to_datetime(df["last_purchase"])
df["days_since_last"] = (pd.Timestamp.now() - df["last_purchase"]).dt.days
df["customer_lifetime"] = (pd.Timestamp.now() - df["register_date"]).dt.days

# 5. 特征缩放
scaler = StandardScaler()
features_to_scale = numerical_cols + ["days_since_last", "customer_lifetime"]
X_scaled = scaler.fit_transform(df[features_to_scale])

print("\\n特征工程完成！")
print(f"最终特征数：{X_scaled.shape[1]}")`,sectionAnswers:[`# 章节1参考答案
import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("客户数据加载成功！")
print(df.head())`,`# 章节2参考答案
numerical_cols = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
print("数值特征：", numerical_cols)`,`# 章节3参考答案
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

print("库加载成功！")`,`# 章节4参考答案
print("数据基本信息：")
print(df.info())
print("\\n相关性矩阵：")
print(df[numerical_cols].corr())`,`# 章节5参考答案
df["order_value_ratio"] = df["avg_order_value"] / df["avg_order_value"].mean()
df["freq_level"] = pd.cut(df["purchase_freq"], bins=[0, 5, 15, 100], 
                          labels=["低频", "中频", "高频"])
df["days_since_last"] = (pd.Timestamp.now() - pd.to_datetime(df["last_purchase"])).dt.days
print("新增特征：")
print(df[["order_value_ratio", "freq_level", "days_since_last"]].head())`,`# 章节6参考答案
df["register_date"] = pd.to_datetime(df["register_date"])
df["register_year"] = df["register_date"].dt.year
df["register_month"] = df["register_date"].dt.month
df["customer_lifetime"] = (pd.Timestamp.now() - df["register_date"]).dt.days
print("时间特征：")
print(df[["register_year", "register_month", "customer_lifetime"]].head())`,`# 章节7参考答案
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df[features_to_scale])
print("Z-Score标准化后：")
print(pd.DataFrame(X_scaled, columns=features_to_scale).describe())`,`# 章节8参考答案
corr_matrix = df[features_to_scale].corr()
high_corr_pairs = []
for i in range(len(corr_matrix.columns)):
    for j in range(i+1, len(corr_matrix.columns)):
        if abs(corr_matrix.iloc[i, j]) > 0.9:
            high_corr_pairs.append((corr_matrix.columns[i], corr_matrix.columns[j], corr_matrix.iloc[i, j]))
print("高相关特征对：")
for pair in high_corr_pairs:
    print(f"  {pair[0]} <-> {pair[1]}: {pair[2]:.3f}")`]},"09":{title:"全域数据异常值检测",difficulty:"高级",duration:"约 45 分钟",sectionGroups:[{title:"基础概念",sections:[{title:"什么是异常值？",content:"异常值是偏离正常数据分布的观测点，可能是数据录入错误、设备故障或真实的极端情况。",tips:["异常值会严重影响统计分析结果，发现和处理异常值非常重要。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("数据加载成功！")
print(df.head())`},{title:"异常值的影响",content:"异常值会扭曲均值、标准差等统计量，影响模型训练效果，甚至导致错误的业务决策。",tips:["在建模前一定要做异常值检测和处理。"],warnings:[],exampleCode:`# 异常值影响示例
# 均值对异常值敏感
normal_data = [10, 11, 12, 13, 14, 15]
outlier_data = [10, 11, 12, 13, 14, 150]

print(f"正常数据均值：{np.mean(normal_data):.2f}")
print(f"含异常值数据均值：{np.mean(outlier_data):.2f}")
print(f"\\n异常值导致均值偏差：{np.mean(outlier_data) - np.mean(normal_data):.2f}")`}]},{title:"数据准备",sections:[{title:"1.1 导入必要工具库",content:"导入pandas、numpy和sklearn的异常检测模块。",tips:["sklearn.ensemble提供IsolationForest等异常检测算法。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

print("库加载成功！")`},{title:"1.2 数据画像",content:"通过统计描述了解数据的分布特征，识别可能存在问题的列。",tips:["关注min、max、mean、std这些统计量，发现明显不合理的值。"],warnings:[],exampleCode:`# 数据画像
print("统计描述：")
print(df.describe())

print("\\n各列分布检查：")
for col in df.columns:
    if df[col].dtype in ['int64', 'float64']:
        min_val = df[col].min()
        max_val = df[col].max()
        print(f"{col}: 范围 [{min_val}, {max_val}]")`}]},{title:"异常检测方法",sections:[{title:"2.1 统计学方法",content:"使用3σ原则（正态分布）或IQR四分位距方法检测单变量异常值。",tips:["3σ原则适用于近似正态分布的数据，IQR适用于任何分布。"],warnings:[],exampleCode:`# 3σ原则
def detect_outliers_3sigma(data, column):
    mean = data[column].mean()
    std = data[column].std()
    lower = mean - 3 * std
    upper = mean + 3 * std
    outliers = data[(data[column] < lower) | (data[column] > upper)]
    return outliers, lower, upper

# 检测年龄异常值
outliers, lower, upper = detect_outliers_3sigma(df, "age")
print(f"3σ原则检测到的年龄异常值：{len(outliers)} 条")
print(f"正常范围：[{lower:.1f}, {upper:.1f}]")

# IQR方法
def detect_outliers_iqr(data, column):
    Q1 = data[column].quantile(0.25)
    Q3 = data[column].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    outliers = data[(data[column] < lower) | (data[column] > upper)]
    return outliers, lower, upper

outliers, lower, upper = detect_outliers_iqr(df, "income")
print(f"\\nIQR方法检测到的收入异常值：{len(outliers)} 条")
print(f"正常范围：[{lower:.0f}, {upper:.0f}]")`},{title:"2.2 孤立森林检测",content:"使用sklearn的IsolationForest进行多维异常检测，自动识别复杂模式。",tips:["contamination参数表示预期的异常比例。"],warnings:[],exampleCode:`# 孤立森林
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]

# 训练孤立森林模型
iso_forest = IsolationForest(contamination=0.1, random_state=42)
df["anomaly"] = iso_forest.fit_predict(X)

# 标记异常（-1表示异常，1表示正常）
anomalies = df[df["anomaly"] == -1]
print(f"孤立森林检测到的异常记录：{len(anomalies)} 条")
print("\\n异常记录详情：")
print(anomalies[features])`},{title:"2.3 业务规则检测",content:"基于业务常识定义硬性规则，如年龄必须在0-150之间、收入不能为负等。",tips:["业务规则是最直接的异常检测方法，但只能检测已知类型的异常。"],warnings:[],exampleCode:`# 业务规则检测
def check_business_rules(df):
    issues = []
    
    # 规则1：年龄必须在0-150之间
    invalid_age = df[(df["age"] < 0) | (df["age"] > 150)]
    if len(invalid_age) > 0:
        issues.append(f"年龄异常：{len(invalid_age)} 条")
        issues.extend([f"  - {row['customer_id']}: age={row['age']}" 
                       for _, row in invalid_age.iterrows()])
    
    # 规则2：收入不能为负
    invalid_income = df[df["income"] < 0]
    if len(invalid_income) > 0:
        issues.append(f"收入异常：{len(invalid_income)} 条")
        issues.extend([f"  - {row['customer_id']}: income={row['income']}" 
                       for _, row in invalid_income.iterrows()])
    
    return issues

issues = check_business_rules(df)
print("业务规则检测结果：")
for issue in issues:
    print(issue)`}]},{title:"处理与报告",sections:[{title:"3.1 异常值处理策略",content:"三种处理策略：删除（删除异常记录）、替换（用均值/中位数替换）、保留（标记但不修改）。",tips:["选择哪种策略取决于异常原因和业务场景。"],warnings:[],exampleCode:`# 异常值处理策略
# 策略1：删除
df_cleaned = df[df["anomaly"] == 1].copy()
print(f"删除异常后数据量：{len(df_cleaned)} 条")

# 策略2：替换为中位数
df_fixed = df.copy()
for col in ["age", "income"]:
    median_val = df[df["anomaly"] == 1][col].median()
    df_fixed.loc[df_fixed["anomaly"] == -1, col] = median_val

print("\\n异常值处理完成！")`}]}],practiceTitle:"实战练习：完整异常值检测流程",practiceDesc:"从数据加载到报告输出的完整异常值检测流程",initialCode:`# 异常值检测练习
import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

# 1. 加载数据
df = pd.read_csv("datasets/customer_features.csv")
print("数据加载成功！")

# 2. 数据探索
print("\\n统计描述：")
print(df.describe())

# 3. 业务规则检测
def check_business_rules(df):
    issues = []
    if len(df[(df["age"] < 0) | (df["age"] > 150)]) > 0:
        issues.append("发现年龄异常")
    if len(df[df["income"] < 0]) > 0:
        issues.append("发现收入异常")
    return issues

issues = check_business_rules(df)
print("\\n业务规则检测：", issues)

# 4. 孤立森林检测
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
iso_forest = IsolationForest(contamination=0.1, random_state=42)
df["anomaly"] = iso_forest.fit_predict(df[features])

anomalies = df[df["anomaly"] == -1]
print(f"\\n孤立森林检测到 {len(anomalies)} 条异常记录")

# 5. 异常处理
df_cleaned = df[df["anomaly"] == 1].copy()
print(f"清洗后数据量：{len(df_cleaned)} 条")`,sectionAnswers:[`# 章节1参考答案
import pandas as pd
import numpy as np

df = pd.read_csv("datasets/customer_features.csv")
print("数据加载成功！")
print(df.head())`,`# 章节2参考答案
normal_data = [10, 11, 12, 13, 14, 15]
outlier_data = [10, 11, 12, 13, 14, 150]
print(f"正常数据均值：{np.mean(normal_data):.2f}")
print(f"含异常值数据均值：{np.mean(outlier_data):.2f}")`,`# 章节3参考答案
import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

print("库加载成功！")`,`# 章节4参考答案
print("统计描述：")
print(df.describe())`,`# 章节5参考答案
def detect_outliers_3sigma(data, column):
    mean = data[column].mean()
    std = data[column].std()
    lower = mean - 3 * std
    upper = mean + 3 * std
    outliers = data[(data[column] < lower) | (data[column] > upper)]
    return outliers, lower, upper

outliers, lower, upper = detect_outliers_3sigma(df, "age")
print(f"3σ原则检测到的年龄异常值：{len(outliers)} 条")`,`# 章节6参考答案
iso_forest = IsolationForest(contamination=0.1, random_state=42)
df["anomaly"] = iso_forest.fit_predict(df[features])
anomalies = df[df["anomaly"] == -1]
print(f"孤立森林检测到的异常记录：{len(anomalies)} 条")`,`# 章节7参考答案
def check_business_rules(df):
    issues = []
    invalid_age = df[(df["age"] < 0) | (df["age"] > 150)]
    if len(invalid_age) > 0:
        issues.append(f"年龄异常：{len(invalid_age)} 条")
    invalid_income = df[df["income"] < 0]
    if len(invalid_income) > 0:
        issues.append(f"收入异常：{len(invalid_income)} 条")
    return issues`,`# 章节8参考答案
df_cleaned = df[df["anomaly"] == 1].copy()
print(f"删除异常后数据量：{len(df_cleaned)} 条")`]},10:{title:"多源数据集融合整合",difficulty:"进阶",duration:"约 45 分钟",sectionGroups:[{title:"基础概念",sections:[{title:"什么是数据融合？",content:"数据融合是将来自不同来源的数据整合在一起，形成完整的分析视图。企业数据通常分散在多个系统中，需要通过关键字段关联。",tips:["数据融合的关键是找到各表之间的关联键（主键、外键）。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np

# 加载三张表
orders = pd.read_csv("datasets/retail_orders.csv")
customers = pd.read_csv("datasets/customer_info.csv")
products = pd.read_csv("datasets/product_catalog.csv")

print("订单表：", orders.shape)
print("客户表：", customers.shape)
print("产品表：", products.shape)`},{title:"合并类型对比",content:"concat：纵向拼接相同结构的表。merge：按关键字段横向合并。join：基于索引的快速关联。",tips:["选择正确的合并方式很重要，合并错误会导致数据丢失或重复。"],warnings:[],exampleCode:`# 合并方式选择
# concat: pd.concat([df1, df2], axis=0)
# merge: pd.merge(df1, df2, on="key", how="inner")
# join: df1.join(df2)`}]},{title:"数据准备",sections:[{title:"1.1 导入必要工具库",content:"导入pandas和numpy，主要使用pandas的合并功能。",tips:["熟练掌握merge、concat、join三种合并方法。"],warnings:[],exampleCode:`import pandas as pd
import numpy as np

print("库加载成功！")`},{title:"1.2 创建多源数据集",content:"模拟企业环境，创建订单表、客户表、产品表三张关联表。",tips:["关联键可以是订单ID、客户ID、产品ID等。"],warnings:[],exampleCode:`# 模拟数据
orders = pd.DataFrame({
    "order_id": ["O001", "O002", "O003"],
    "customer_id": ["C001", "C002", "C001"],
    "product_id": ["P101", "P103", "P102"],
    "amount": [1200, 580, 3200],
    "order_date": ["2024-01-05", "2024-01-08", "2024-01-12"]
})

customers = pd.DataFrame({
    "customer_id": ["C001", "C002", "C003"],
    "name": ["张三", "李四", "王五"],
    "age": [28, 35, 42],
    "city": ["北京", "上海", "广州"]
})

products = pd.DataFrame({
    "product_id": ["P101", "P102", "P103"],
    "name": ["手机", "电脑", "平板"],
    "price": [2999, 5999, 1999],
    "category": ["数码", "数码", "数码"]
})

print("数据创建成功！")
print("\\n订单表：")
print(orders)
print("\\n客户表：")
print(customers)
print("\\n产品表：")
print(products)`}]},{title:"核心合并操作",sections:[{title:"2.1 纵向拼接（concat）",content:"使用pd.concat纵向拼接结构相同的表，常用于合并多个月的同类数据。",tips:["concat默认外拼接，axis=0表示纵向拼接。"],warnings:[],exampleCode:`# 纵向拼接
orders_jan = orders.copy()
orders_feb = orders.copy()

combined = pd.concat([orders_jan, orders_feb], ignore_index=True)
print(f"合并后数据量：{len(combined)} 条")`},{title:"2.2 内连接合并（merge）",content:'使用pd.merge(how="inner")只保留两表键值匹配的记录，常用于关联查询。',tips:["inner join只保留两边都有的键，会丢失不匹配的数据。"],warnings:[],exampleCode:`# 内连接
merged = pd.merge(orders, customers, on="customer_id", how="inner")
print("订单-客户内连接结果：")
print(merged)`},{title:"2.3 左连接合并",content:'使用pd.merge(how="left")保留左表全部记录，右表没有匹配的填充空值。',tips:["左连接保留所有左表数据，是最常用的连接方式。"],warnings:[],exampleCode:`# 左连接
left_merged = pd.merge(orders, customers, on="customer_id", how="left")
print("左连接结果：")
print(left_merged)
print(f"\\n结果行数与订单表相同：{len(left_merged) == len(orders)}")`},{title:"2.4 多表关联",content:"通过多次merge将三张或更多表关联在一起，形成完整的宽表。",tips:["多表关联要注意合并顺序，避免出现笛卡尔积。"],warnings:[],exampleCode:`# 多表关联
# 第一步：订单关联客户
result = pd.merge(orders, customers, on="customer_id", how="left")

# 第二步：关联产品
result = pd.merge(result, products, on="product_id", how="left")

print("完整宽表：")
print(result)
print(f"\\n最终数据形状：{result.shape}")`}]},{title:"数据整合",sections:[{title:"3.1 数据完整性验证",content:"合并后检查数据完整性：匹配率、缺失值、重复记录等。",tips:["合并后一定要验证数据质量，确保没有意外丢失。"],warnings:[],exampleCode:`# 数据完整性验证
print("匹配率检查：")
print(f"  订单匹配客户率：{result['name'].notna().sum() / len(result):.1%}")
print(f"  订单匹配产品率：{result['name_x'].notna().sum() / len(result):.1%}")

print("\\n缺失值检查：")
print(result.isnull().sum())

print("\\n重复记录检查：")
print(f"  重复订单ID：{result['order_id'].duplicated().sum()} 条")`}]}],practiceTitle:"实战练习：完整多源数据融合",practiceDesc:"综合运用 concat、merge、join 完成数据整合",initialCode:`# 多源数据融合练习
import pandas as pd
import numpy as np

# 1. 创建模拟数据
orders = pd.DataFrame({
    "order_id": ["O001", "O002", "O003", "O004"],
    "customer_id": ["C001", "C002", "C001", "C003"],
    "product_id": ["P101", "P103", "P102", "P101"],
    "amount": [1200, 580, 3200, 890],
    "order_date": ["2024-01-05", "2024-01-08", "2024-01-12", "2024-01-15"]
})

customers = pd.DataFrame({
    "customer_id": ["C001", "C002", "C003"],
    "name": ["张三", "李四", "王五"],
    "city": ["北京", "上海", "广州"]
})

products = pd.DataFrame({
    "product_id": ["P101", "P102", "P103"],
    "name": ["手机", "电脑", "平板"],
    "category": ["数码", "数码", "数码"]
})

print("数据加载成功！")

# 2. 多表关联
# 订单关联客户
result = pd.merge(orders, customers, on="customer_id", how="left", suffixes=("", "_customer"))

# 关联产品
result = pd.merge(result, products, on="product_id", how="left", suffixes=("", "_product"))

print("\\n完整数据：")
print(result)

# 3. 数据验证
print(f"\\n数据匹配率：{(result['name'].notna().sum() / len(result)):.1%}")
print(f"\\n缺失值：")
print(result.isnull().sum())`,sectionAnswers:[`# 章节1参考答案
import pandas as pd
import numpy as np

orders = pd.read_csv("datasets/retail_orders.csv")
customers = pd.read_csv("datasets/customer_info.csv")
products = pd.read_csv("datasets/product_catalog.csv")

print("订单表：", orders.shape)
print("客户表：", customers.shape)
print("产品表：", products.shape)`,`# 章节2参考答案
# 合并方式选择
# concat: pd.concat([df1, df2], axis=0)
# merge: pd.merge(df1, df2, on="key", how="inner")
# join: df1.join(df2)`,`# 章节3参考答案
import pandas as pd
import numpy as np

print("库加载成功！")`,`# 章节4参考答案
orders = pd.DataFrame({
    "order_id": ["O001", "O002", "O003"],
    "customer_id": ["C001", "C002", "C001"],
    "product_id": ["P101", "P103", "P102"],
    "amount": [1200, 580, 3200],
    "order_date": ["2024-01-05", "2024-01-08", "2024-01-12"]
})
print("数据创建成功！")
print("\\n订单表：")
print(orders)`,`# 章节5参考答案
combined = pd.concat([orders_jan, orders_feb], ignore_index=True)
print(f"合并后数据量：{len(combined)} 条")`,`# 章节6参考答案
merged = pd.merge(orders, customers, on="customer_id", how="inner")
print("订单-客户内连接结果：")
print(merged)`,`# 章节7参考答案
left_merged = pd.merge(orders, customers, on="customer_id", how="left")
print("左连接结果：")
print(left_merged)`,`# 章节8参考答案
result = pd.merge(orders, customers, on="customer_id", how="left")
result = pd.merge(result, products, on="product_id", how="left")
print("完整宽表：")
print(result)`,`# 章节9参考答案
print("匹配率检查：")
print(f"  订单匹配客户率：{result['name'].notna().sum() / len(result):.1%}")
print("\\n缺失值检查：")
print(result.isnull().sum())`]}}[i];if(k.useEffect(()=>{var O;if(U){y(U.initialCode),A(""),l(0),f(!1),V(!1);const R={};(O=U.sectionGroups)==null||O.forEach((W,j)=>{R[W.title]=j===0}),T(R)}},[i]),k.useEffect(()=>{},[c]),!U)return p.jsx("div",{"trae-inspector-start-line":"2738","trae-inspector-start-column":"6","trae-inspector-end-line":"2743","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"min-h-screen bg-white text-black pt-24 pb-12 px-4",children:p.jsxs("div",{"trae-inspector-start-line":"2739","trae-inspector-start-column":"8","trae-inspector-end-line":"2742","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"max-w-4xl mx-auto text-center",children:[p.jsx("h1",{"trae-inspector-start-line":"2740","trae-inspector-start-column":"10","trae-inspector-end-line":"2740","trae-inspector-end-column":"60","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%A1%B9%E7%9B%AE%E4%B8%8D%E5%AD%98%E5%9C%A8%22%2C%22textStartLine%22%3A%222740%22%2C%22textStartColumn%22%3A%2250%22%2C%22textEndLine%22%3A%222740%22%2C%22textEndColumn%22%3A%2255%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-3xl font-bold mb-4",children:"项目不存在"}),p.jsx(et,{to:"/pandas",className:"text-gray-800 hover:text-black",children:"返回项目列表"})]})});const X=(((Pe=U.sectionGroups)==null?void 0:Pe.flatMap(O=>O.sections))||[])[c],se=((ye=U.sectionAnswers)==null?void 0:ye[c])||"",pe=()=>{navigator.clipboard.writeText(m)},fe=()=>{y("")},we=()=>{y(U.initialCode),A(""),F([])},je=()=>{f(!u)},Le=()=>{b(!0),F([]),setTimeout(()=>{const O=[];i==="01"?(O.push("数据加载成功！"),O.push(""),O.push("原始数据预览："),O.push("   order_id customer_id  amount order_date    warehouse"),O.push("0      001        C101   $1200  2024-01-15    US-WEST"),O.push("1      002        C102  $850.5  01/20/2024 EU-CENTRAL"),O.push(""),O.push("金额清洗中..."),O.push("客户ID填充中..."),O.push("日期统一中..."),O.push("去重中..."),O.push(""),O.push("=== 清洗完成 ==="),O.push("最终数据量：5 条"),O.push("已保存至：cleaned_orders.csv")):(O.push("代码执行成功！"),O.push(""),O.push("运行结果预览...")),F(O),b(!1)},1e3)},Ke=()=>{X!=null&&X.exampleCode&&y(X.exampleCode)},Ie=O=>{T(R=>({...R,[O]:!R[O]}))};let ne=0;return p.jsx("div",{"trae-inspector-start-line":"2821","trae-inspector-start-column":"4","trae-inspector-end-line":"3145","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"min-h-screen bg-white text-black pt-24 pb-12 px-4",children:p.jsxs("div",{"trae-inspector-start-line":"2822","trae-inspector-start-column":"6","trae-inspector-end-line":"3144","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"max-w-[1800px] mx-auto",children:[p.jsxs(et,{to:"/pandas",className:"inline-flex items-center gap-2 text-gray-800 hover:text-black mb-6 transition-colors",children:[p.jsx(yo,{className:"w-5 h-5"}),"返回项目列表"]}),p.jsx("div",{"trae-inspector-start-line":"2832","trae-inspector-start-column":"8","trae-inspector-end-line":"2844","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300 mb-6",children:p.jsx("div",{"trae-inspector-start-line":"2833","trae-inspector-start-column":"10","trae-inspector-end-line":"2843","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-start justify-between mb-4",children:p.jsxs("div",{"trae-inspector-start-line":"2834","trae-inspector-start-column":"12","trae-inspector-end-line":"2842","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:[p.jsx("h1",{"trae-inspector-start-line":"2835","trae-inspector-start-column":"14","trae-inspector-end-line":"2835","trae-inspector-end-column":"74","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-3xl font-bold mb-2",children:U.title}),p.jsxs("div",{"trae-inspector-start-line":"2836","trae-inspector-start-column":"14","trae-inspector-end-line":"2841","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center gap-3 text-gray-600",children:[p.jsx("span",{"trae-inspector-start-line":"2837","trae-inspector-start-column":"16","trae-inspector-end-line":"2839","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-300",children:U.difficulty}),p.jsxs("span",{"trae-inspector-start-line":"2840","trae-inspector-start-column":"16","trae-inspector-end-line":"2840","trae-inspector-end-column":"49","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:["⏱ ",U.duration]})]})]})})}),p.jsxs("div",{"trae-inspector-start-line":"2846","trae-inspector-start-column":"8","trae-inspector-end-line":"3143","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex gap-6 relative",children:[K&&p.jsx("button",{"trae-inspector-start-line":"2849","trae-inspector-start-column":"12","trae-inspector-end-line":"2855","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>V(!1),className:"fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-black hover:bg-gray-800 text-white px-2 py-8 rounded-r-lg shadow-lg transition-all",style:{top:"50%"},children:p.jsx(Im,{className:"w-5 h-5"})}),p.jsx("div",{"trae-inspector-start-line":"2859","trae-inspector-start-column":"10","trae-inspector-end-line":"2934","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:`${K?"w-0 overflow-hidden":"w-80"} transition-all duration-300 flex-shrink-0`,children:p.jsxs("div",{"trae-inspector-start-line":"2860","trae-inspector-start-column":"12","trae-inspector-end-line":"2933","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-5 border border-gray-300 sticky top-24 max-h-[calc(100vh-12rem)] overflow-y-auto",children:[p.jsxs("div",{"trae-inspector-start-line":"2861","trae-inspector-start-column":"14","trae-inspector-end-line":"2873","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center justify-between mb-4",children:[p.jsxs("h2",{"trae-inspector-start-line":"2862","trae-inspector-start-column":"16","trae-inspector-end-line":"2865","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-lg font-bold flex items-center gap-2",children:[p.jsx(xo,{className:"w-5 h-5"}),"学习章节"]}),p.jsx("button",{"trae-inspector-start-line":"2866","trae-inspector-start-column":"16","trae-inspector-end-line":"2872","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>V(!0),className:"p-1 hover:bg-gray-200 rounded transition-colors",title:"收起目录",children:p.jsx(Tm,{className:"w-4 h-4 text-gray-600"})})]}),p.jsx("div",{"trae-inspector-start-line":"2875","trae-inspector-start-column":"14","trae-inspector-end-line":"2917","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-2",children:(De=U.sectionGroups)==null?void 0:De.map((O,R)=>p.jsxs("div",{"trae-inspector-start-line":"2877","trae-inspector-start-column":"18","trae-inspector-end-line":"2915","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:[p.jsxs("button",{"trae-inspector-start-line":"2878","trae-inspector-start-column":"20","trae-inspector-end-line":"2888","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>Ie(O.title),className:"w-full flex items-center justify-between p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-left",children:[p.jsx("span",{"trae-inspector-start-line":"2882","trae-inspector-start-column":"22","trae-inspector-end-line":"2882","trae-inspector-end-column":"96","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-sm font-semibold text-gray-800",children:O.title}),L[O.title]?p.jsx(sm,{className:"w-4 h-4 text-gray-600"}):p.jsx(Jp,{className:"w-4 h-4 text-gray-600"})]}),L[O.title]&&p.jsx("div",{"trae-inspector-start-line":"2891","trae-inspector-start-column":"22","trae-inspector-end-line":"2913","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"mt-1 ml-2 space-y-1",children:O.sections.map((W,j)=>{const g=ne++;return p.jsx("button",{"trae-inspector-start-line":"2895","trae-inspector-start-column":"28","trae-inspector-end-line":"2910","trae-inspector-end-column":"37","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>l(g),className:`w-full text-left p-2 rounded-lg transition-all ${c===g?"bg-black text-white":"bg-gray-50 text-gray-800 hover:bg-gray-200"}`,children:p.jsxs("div",{"trae-inspector-start-line":"2904","trae-inspector-start-column":"30","trae-inspector-end-line":"2909","trae-inspector-end-column":"36","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-start gap-2",children:[p.jsx("span",{"trae-inspector-start-line":"2905","trae-inspector-start-column":"32","trae-inspector-end-line":"2907","trae-inspector-end-column":"39","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-xs font-bold opacity-60 mt-0.5",children:String(g+1).padStart(2,"0")}),p.jsx("span",{"trae-inspector-start-line":"2908","trae-inspector-start-column":"32","trae-inspector-end-line":"2908","trae-inspector-end-column":"80","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-xs",children:W.title})]})},j)})})]},R))}),p.jsxs("div",{"trae-inspector-start-line":"2920","trae-inspector-start-column":"14","trae-inspector-end-line":"2932","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"mt-6 pt-4 border-t border-gray-300",children:[p.jsxs("h3",{"trae-inspector-start-line":"2921","trae-inspector-start-column":"16","trae-inspector-end-line":"2924","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-base font-bold mb-2 flex items-center gap-2",children:[p.jsx(ao,{className:"w-4 h-4"}),U.practiceTitle]}),p.jsx("p",{"trae-inspector-start-line":"2925","trae-inspector-start-column":"16","trae-inspector-end-line":"2925","trae-inspector-end-column":"84","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600 text-sm mb-3",children:U.practiceDesc}),p.jsx(et,{to:`/practice/${i}/0`,className:"block w-full py-2 px-4 bg-black hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors text-center",children:"开始练习"})]})]})}),p.jsx("div",{"trae-inspector-start-line":"2937","trae-inspector-start-column":"10","trae-inspector-end-line":"3021","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex-1 min-w-0",children:X&&p.jsxs("div",{"trae-inspector-start-line":"2939","trae-inspector-start-column":"14","trae-inspector-end-line":"3019","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300",children:[p.jsxs("h2",{"trae-inspector-start-line":"2940","trae-inspector-start-column":"16","trae-inspector-end-line":"2943","trae-inspector-end-column":"21","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[p.jsx(Yf,{className:"w-6 h-6 text-gray-800"}),X.title]}),p.jsx("div",{"trae-inspector-start-line":"2946","trae-inspector-start-column":"16","trae-inspector-end-line":"2948","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4",children:p.jsx("p",{"trae-inspector-start-line":"2947","trae-inspector-start-column":"18","trae-inspector-end-line":"2947","trae-inspector-end-column":"91","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-800 leading-relaxed",children:X.content})}),X.tips&&X.tips.length>0&&p.jsxs("div",{"trae-inspector-start-line":"2952","trae-inspector-start-column":"18","trae-inspector-end-line":"2965","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4",children:[p.jsxs("h4",{"trae-inspector-start-line":"2953","trae-inspector-start-column":"20","trae-inspector-end-line":"2956","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"font-semibold text-gray-800 mb-2 flex items-center gap-2",children:[p.jsx(_o,{className:"w-4 h-4"}),"学习提示"]}),p.jsx("ul",{"trae-inspector-start-line":"2957","trae-inspector-start-column":"20","trae-inspector-end-line":"2964","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-1",children:X.tips.map((O,R)=>p.jsxs("li",{"trae-inspector-start-line":"2959","trae-inspector-start-column":"24","trae-inspector-end-line":"2962","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-700 text-sm flex items-start gap-2",children:[p.jsx("span",{"trae-inspector-start-line":"2960","trae-inspector-start-column":"26","trae-inspector-end-line":"2960","trae-inspector-end-column":"71","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%80%A2%22%2C%22textStartLine%22%3A%222960%22%2C%22textStartColumn%22%3A%2263%22%2C%22textEndLine%22%3A%222960%22%2C%22textEndColumn%22%3A%2264%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-800 mt-1",children:"•"}),O]},R))})]}),X.warnings&&X.warnings.length>0&&p.jsxs("div",{"trae-inspector-start-line":"2970","trae-inspector-start-column":"18","trae-inspector-end-line":"2983","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4",children:[p.jsxs("h4",{"trae-inspector-start-line":"2971","trae-inspector-start-column":"20","trae-inspector-end-line":"2974","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"font-semibold text-gray-800 mb-2 flex items-center gap-2",children:[p.jsx(lm,{className:"w-4 h-4"}),"注意事项"]}),p.jsx("ul",{"trae-inspector-start-line":"2975","trae-inspector-start-column":"20","trae-inspector-end-line":"2982","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-1",children:X.warnings.map((O,R)=>p.jsxs("li",{"trae-inspector-start-line":"2977","trae-inspector-start-column":"24","trae-inspector-end-line":"2980","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-700 text-sm flex items-start gap-2",children:[p.jsx("span",{"trae-inspector-start-line":"2978","trae-inspector-start-column":"26","trae-inspector-end-line":"2978","trae-inspector-end-column":"71","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%80%A2%22%2C%22textStartLine%22%3A%222978%22%2C%22textStartColumn%22%3A%2263%22%2C%22textEndLine%22%3A%222978%22%2C%22textEndColumn%22%3A%2264%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-800 mt-1",children:"•"}),O]},R))})]}),X.exampleCode&&p.jsxs("div",{"trae-inspector-start-line":"2988","trae-inspector-start-column":"18","trae-inspector-end-line":"3017","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"mb-4",children:[p.jsxs("div",{"trae-inspector-start-line":"2989","trae-inspector-start-column":"20","trae-inspector-end-line":"3011","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center justify-between mb-2",children:[p.jsxs("h4",{"trae-inspector-start-line":"2990","trae-inspector-start-column":"22","trae-inspector-end-line":"2993","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"font-semibold text-gray-800 flex items-center gap-2",children:[p.jsx(so,{className:"w-4 h-4"}),"示例代码"]}),p.jsxs("div",{"trae-inspector-start-line":"2994","trae-inspector-start-column":"22","trae-inspector-end-line":"3010","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex gap-2",children:[p.jsxs("button",{"trae-inspector-start-line":"2995","trae-inspector-start-column":"24","trae-inspector-end-line":"3003","trae-inspector-end-column":"33","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>{navigator.clipboard.writeText(X.exampleCode)},className:"px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xs flex items-center gap-1 transition-colors",children:[p.jsx(to,{className:"w-3 h-3"}),"复制"]}),p.jsx("button",{"trae-inspector-start-line":"3004","trae-inspector-start-column":"24","trae-inspector-end-line":"3009","trae-inspector-end-column":"33","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BD%BF%E7%94%A8%22%2C%22textStartLine%22%3A%223007%22%2C%22textStartColumn%22%3A%2225%22%2C%22textEndLine%22%3A%223009%22%2C%22textEndColumn%22%3A%2224%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:Ke,className:"px-3 py-1 bg-black hover:bg-gray-800 rounded text-xs flex items-center gap-1 transition-colors text-white",children:"使用"})]})]}),p.jsx("div",{"trae-inspector-start-line":"3012","trae-inspector-start-column":"20","trae-inspector-end-line":"3016","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-100 rounded-lg p-4 overflow-y-auto",style:{maxHeight:"300px"},children:p.jsx("pre",{"trae-inspector-start-line":"3013","trae-inspector-start-column":"22","trae-inspector-end-line":"3015","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-sm font-mono text-gray-900",children:p.jsx("code",{"trae-inspector-start-line":"3014","trae-inspector-start-column":"24","trae-inspector-end-line":"3014","trae-inspector-end-column":"65","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:X.exampleCode})})})]})]})}),p.jsx("div",{"trae-inspector-start-line":"3024","trae-inspector-start-column":"10","trae-inspector-end-line":"3142","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex-1 min-w-0",children:p.jsxs("div",{"trae-inspector-start-line":"3025","trae-inspector-start-column":"12","trae-inspector-end-line":"3141","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300 sticky top-24",children:[p.jsxs("div",{"trae-inspector-start-line":"3026","trae-inspector-start-column":"14","trae-inspector-end-line":"3036","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center justify-between mb-3",children:[p.jsxs("div",{"trae-inspector-start-line":"3027","trae-inspector-start-column":"16","trae-inspector-end-line":"3034","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center gap-2",children:[p.jsxs("div",{"trae-inspector-start-line":"3028","trae-inspector-start-column":"18","trae-inspector-end-line":"3032","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex gap-1",children:[p.jsx("div",{"trae-inspector-start-line":"3029","trae-inspector-start-column":"20","trae-inspector-end-line":"3029","trae-inspector-end-column":"76","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"w-3 h-3 rounded-full bg-gray-400"}),p.jsx("div",{"trae-inspector-start-line":"3030","trae-inspector-start-column":"20","trae-inspector-end-line":"3030","trae-inspector-end-column":"76","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"w-3 h-3 rounded-full bg-gray-500"}),p.jsx("div",{"trae-inspector-start-line":"3031","trae-inspector-start-column":"20","trae-inspector-end-line":"3031","trae-inspector-end-column":"76","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"w-3 h-3 rounded-full bg-gray-600"})]}),p.jsx("span",{"trae-inspector-start-line":"3033","trae-inspector-start-column":"18","trae-inspector-end-line":"3033","trae-inspector-end-column":"85","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%84%20Python%20-%20%E5%8F%AF%E7%BC%96%E8%BE%91%22%2C%22textStartLine%22%3A%223033%22%2C%22textStartColumn%22%3A%2263%22%2C%22textEndLine%22%3A%223033%22%2C%22textEndColumn%22%3A%2278%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600 text-sm ml-2",children:"📄 Python - 可编辑"})]}),p.jsx("span",{"trae-inspector-start-line":"3035","trae-inspector-start-column":"16","trae-inspector-end-line":"3035","trae-inspector-end-column":"70","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%F0%9F%93%8F%2020px%22%2C%22textStartLine%22%3A%223035%22%2C%22textStartColumn%22%3A%2256%22%2C%22textEndLine%22%3A%223035%22%2C%22textEndColumn%22%3A%2263%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-500 text-xs",children:"📏 20px"})]}),p.jsx("div",{"trae-inspector-start-line":"3038","trae-inspector-start-column":"14","trae-inspector-end-line":"3046","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-100 rounded-lg min-h-[250px] relative",children:p.jsx("textarea",{"trae-inspector-start-line":"3039","trae-inspector-start-column":"16","trae-inspector-end-line":"3045","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",value:m,onChange:O=>y(O.target.value),className:"w-full h-[250px] bg-transparent text-gray-900 font-mono text-sm p-4 resize-none focus:outline-none",spellCheck:!1,placeholder:"# 在此编写你的代码..."})}),p.jsxs("div",{"trae-inspector-start-line":"3048","trae-inspector-start-column":"14","trae-inspector-end-line":"3095","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex flex-wrap items-center justify-between mt-3 gap-2",children:[p.jsxs("div",{"trae-inspector-start-line":"3049","trae-inspector-start-column":"16","trae-inspector-end-line":"3080","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex gap-2 flex-wrap",children:[p.jsxs("button",{"trae-inspector-start-line":"3050","trae-inspector-start-column":"18","trae-inspector-end-line":"3056","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:pe,className:"px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded text-xs flex items-center gap-1 transition-colors",children:[p.jsx(to,{className:"w-3 h-3"}),"复制"]}),p.jsxs("button",{"trae-inspector-start-line":"3057","trae-inspector-start-column":"18","trae-inspector-end-line":"3063","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:fe,className:"px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded text-xs flex items-center gap-1 transition-colors",children:[p.jsx(nu,{className:"w-3 h-3"}),"清空"]}),p.jsx("button",{"trae-inspector-start-line":"3064","trae-inspector-start-column":"18","trae-inspector-end-line":"3069","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%87%8D%E7%BD%AE%22%2C%22textStartLine%22%3A%223067%22%2C%22textStartColumn%22%3A%2219%22%2C%22textEndLine%22%3A%223069%22%2C%22textEndColumn%22%3A%2218%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:we,className:"px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded text-xs flex items-center gap-1 transition-colors",children:"重置"}),p.jsx("button",{"trae-inspector-start-line":"3070","trae-inspector-start-column":"18","trae-inspector-end-line":"3079","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:je,className:`px-3 py-1.5 rounded text-xs flex items-center gap-1 transition-colors ${u?"bg-gray-500 text-white border border-gray-400":"bg-gray-200 text-gray-800 border border-gray-300"}`,children:u?"收起答案":"答案"})]}),p.jsxs("div",{"trae-inspector-start-line":"3081","trae-inspector-start-column":"16","trae-inspector-end-line":"3094","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex gap-2",children:[p.jsxs("button",{"trae-inspector-start-line":"3082","trae-inspector-start-column":"18","trae-inspector-end-line":"3089","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:Le,disabled:E,className:"px-4 py-2 bg-black hover:bg-gray-800 disabled:opacity-50 rounded-lg text-sm flex items-center gap-2 transition-colors text-white",children:[p.jsx(eu,{className:"w-4 h-4"}),E?"运行中...":"运行"]}),p.jsxs("button",{"trae-inspector-start-line":"3090","trae-inspector-start-column":"18","trae-inspector-end-line":"3093","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300 rounded-lg text-sm flex items-center gap-2 transition-colors",children:[p.jsx(ao,{className:"w-4 h-4"}),"测试"]})]})]}),u&&se&&p.jsxs("div",{"trae-inspector-start-line":"3099","trae-inspector-start-column":"16","trae-inspector-end-line":"3120","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"mt-4",children:[p.jsxs("div",{"trae-inspector-start-line":"3100","trae-inspector-start-column":"18","trae-inspector-end-line":"3114","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center justify-between mb-2",children:[p.jsxs("h4",{"trae-inspector-start-line":"3101","trae-inspector-start-column":"20","trae-inspector-end-line":"3104","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-sm font-semibold text-gray-800 flex items-center gap-2",children:[p.jsx(so,{className:"w-4 h-4"}),"参考答案（章节 ",c+1,"）"]}),p.jsxs("button",{"trae-inspector-start-line":"3105","trae-inspector-start-column":"20","trae-inspector-end-line":"3113","trae-inspector-end-column":"29","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>{navigator.clipboard.writeText(se)},className:"px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xs flex items-center gap-1 transition-colors",children:[p.jsx(to,{className:"w-3 h-3"}),"复制"]})]}),p.jsx("div",{"trae-inspector-start-line":"3115","trae-inspector-start-column":"18","trae-inspector-end-line":"3119","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-100 rounded-lg p-4 overflow-y-auto",style:{maxHeight:"200px"},children:p.jsx("pre",{"trae-inspector-start-line":"3116","trae-inspector-start-column":"20","trae-inspector-end-line":"3118","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-sm font-mono text-gray-900",children:p.jsx("code",{"trae-inspector-start-line":"3117","trae-inspector-start-column":"22","trae-inspector-end-line":"3117","trae-inspector-end-column":"57","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:se})})})]}),S.length>0&&p.jsxs("div",{"trae-inspector-start-line":"3125","trae-inspector-start-column":"16","trae-inspector-end-line":"3139","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"mt-4",children:[p.jsxs("h4",{"trae-inspector-start-line":"3126","trae-inspector-start-column":"18","trae-inspector-end-line":"3129","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-sm font-semibold mb-2 flex items-center gap-2",children:[p.jsx("span",{"trae-inspector-start-line":"3127","trae-inspector-start-column":"20","trae-inspector-end-line":"3127","trae-inspector-end-column":"60","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E2%96%B6%22%2C%22textStartLine%22%3A%223127%22%2C%22textStartColumn%22%3A%2252%22%2C%22textEndLine%22%3A%223127%22%2C%22textEndColumn%22%3A%2253%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-800",children:"▶"}),"运行结果"]}),p.jsx("div",{"trae-inspector-start-line":"3130","trae-inspector-start-column":"18","trae-inspector-end-line":"3138","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-100 rounded-lg p-4 overflow-y-auto",style:{maxHeight:"200px"},children:p.jsx("pre",{"trae-inspector-start-line":"3131","trae-inspector-start-column":"20","trae-inspector-end-line":"3137","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-sm font-mono",children:S.map((O,R)=>p.jsx("div",{"trae-inspector-start-line":"3133","trae-inspector-start-column":"24","trae-inspector-end-line":"3135","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:O.startsWith("===")?"text-gray-800 mt-2 font-bold":"text-gray-700",children:O||" "},R))})})]})]})})]})]})})}const Pp={"01-0":{title:"数据清洗实战 - 综合练习",quizQuestions:[{id:1,question:"数据清洗的第一步应该是什么？",options:["直接开始修改数据","了解数据的基本信息（行数、列数、数据类型）","删除所有空值","保存数据为Excel"],correctAnswer:1,explanation:"数据清洗第一步应该是了解数据的基本信息，使用 df.info() 和 df.describe() 来查看数据的结构、类型和统计情况。",commonMistake:"很多初学者直接开始修改数据，没有先了解数据的整体情况，容易导致不可逆的错误。"},{id:2,question:"以下哪个命令可以查看数据的基本信息？",options:["df.show()","df.head()","df.info()","df.describe()"],correctAnswer:2,explanation:"df.info() 显示数据的行数、列数、每列的数据类型和非空值数量，是了解数据结构的关键命令。",commonMistake:"混淆 df.info() 和 df.describe()。df.describe() 主要显示数值列的统计信息。"},{id:3,question:"在数据清洗过程中，原始数据文件应该？",options:["直接修改","在内存中操作，保持原始文件只读","删除后重建","重命名即可"],correctAnswer:1,explanation:"原始数据文件应该保持只读，所有操作都在内存中进行，这样可以保证数据的可追溯性，出问题时可以恢复。",commonMistake:"直接修改原始数据文件，一旦出错无法恢复。"},{id:4,question:"pandas中读取CSV文件的命令是？",options:["pd.read_excel()","pd.read_csv()","pd.load_csv()","pd.open_csv()"],correctAnswer:1,explanation:"pandas中使用 pd.read_csv() 来读取CSV文件。",commonMistake:"混淆 read_excel 和 read_csv，或者错误地使用 load_csv。"},{id:5,question:"df.describe() 和 df.info() 的主要区别是？",options:["两者功能完全相同","describe显示数值统计信息，info显示数据类型和缺失值","info显示数值统计信息，describe显示数据类型","describe只能用于字符串列"],correctAnswer:1,explanation:"df.describe() 主要显示数值列的统计描述，df.info() 显示数据类型、内存占用和缺失值情况。",commonMistake:"不清楚两者各有分工，需要结合使用才能全面了解数据。"},{id:6,question:"处理异常值时，以下哪种做法是正确的？",options:["直接删除所有异常值","根据业务场景判断是真实异常还是数据错误，再决定处理方式","异常值不影响分析结果，可以忽略","所有异常值都替换为均值"],correctAnswer:1,explanation:"处理异常值需要结合业务场景判断，有些异常值可能是真实的极端情况，不应直接删除。",commonMistake:"一刀切地删除或替换异常值，忽略业务逻辑。"},{id:7,question:"fillna() 和 dropna() 的区别是？",options:["两者功能相同，只是写法不同","fillna用于填充缺失值，dropna用于删除缺失值","fillna用于删除缺失值，dropna用于填充缺失值","两者都用于删除缺失值"],correctAnswer:1,explanation:"fillna() 填充缺失值，dropna() 删除包含缺失值的行或列。",commonMistake:"混淆两个函数的功能。"},{id:8,question:"drop_duplicates() 默认保留重复行的哪一行？",options:["最后一行","第一行","随机保留一行","全部删除"],correctAnswer:1,explanation:'drop_duplicates() 默认保留重复行的第一行（keep="first"），可以通过 keep="last" 改为保留最后一行。',commonMistake:"记反了默认行为。"},{id:9,question:'使用正则表达式清洗金额时，re.sub(r"[^\\d.-]", "", s) 可以保留哪些字符？',options:["只保留数字","保留数字、点号和减号","保留所有字符","只保留字母"],correctAnswer:1,explanation:"正则表达式 [^\\d.-] 表示匹配除数字、点号和减号外的所有字符，替换为空字符串，从而保留数字、小数点和负号。",commonMistake:"不清楚正则表达式中哪些字符被保留。"},{id:10,question:"数据类型category相比object类型的优势是？",options:["处理速度更快","节省内存开销","支持更多操作","两者完全相同"],correctAnswer:1,explanation:"category类型将重复的字符串值存储为整数编码，比object类型更节省内存。",commonMistake:"不清楚category类型的内存优化优势。"}],judgmentQuestions:[{id:1,question:"数据清洗应该先清洗再诊断，以提高效率。",correctAnswer:!1,explanation:"正确的流程是先诊断再清洗。不了解数据问题就动手，可能导致错误的数据转换或丢失重要信息。",commonMistake:"急于动手，忽视诊断环节。"},{id:2,question:"原始数据文件可以直接在代码中进行修改，以便下次使用时已经是清洗后的状态。",correctAnswer:!1,explanation:"原始数据应该始终保持只读，所有操作在内存中进行，以便出问题时可以恢复。",commonMistake:"为了方便直接修改原始文件。"},{id:3,question:"IQR方法检测异常值时，异常值范围是 Q1-1.5*IQR 到 Q3+1.5*IQR。",correctAnswer:!0,explanation:"这是统计学中经典的 Tukey 方法，1.5*IQR 是标准系数。",commonMistake:"记错系数或记反范围。"},{id:4,question:"将字符串类型的数值列转换为数值时，应该使用 astype(float)。",correctAnswer:!1,explanation:'对于可能包含非数值内容的字符串，应该使用 pd.to_numeric(errors="coerce")，它会将无法转换的值设为NaN。',commonMistake:"直接使用 astype 导致转换错误。"},{id:5,question:"数据清洗完成后，验证工作可有可无。",correctAnswer:!1,explanation:"数据清洗后必须进行验证，检查是否还有缺失值、数据类型是否正确、异常值是否处理妥当等。",commonMistake:"认为清洗完就结束了。"},{id:6,question:"pd.to_datetime() 可以自动识别大多数常见的日期格式。",correctAnswer:!0,explanation:'pd.to_datetime() 有良好的格式推断能力，可以处理如 "2024-01-15"、"01/15/2024"、"Jan 15, 2024" 等多种格式。',commonMistake:"以为每种日期格式都需要手动指定format参数。"},{id:7,question:"创建衍生列会增加数据冗余，应该尽量避免。",correctAnswer:!1,explanation:"衍生列是从已有列派生的有业务意义的新特征，是特征工程的重要部分，不等于数据冗余。",commonMistake:"混淆数据冗余和有用特征的区别。"},{id:8,question:"数值异常值检测中，标准差法比IQR方法对异常值更敏感。",correctAnswer:!0,explanation:"标准差法基于均值计算，受异常值影响大，比IQR方法更敏感。",commonMistake:"不清楚两种方法的敏感性差异。"},{id:9,question:'可以使用 df[df["amount"].isna()] = 0 的方式将所有缺失值填充为0。',correctAnswer:!1,explanation:"这种方式会设置布尔条件而非实际填充，应该使用 df.loc 索引或 df.fillna(0)。",commonMistake:"使用了错误的填充语法。"},{id:10,question:"清洗后的数据保存时，选择合适的文件格式也很重要，如CSV适合通用场景。",correctAnswer:!0,explanation:"不同文件格式有不同的适用场景，CSV通用性好但不支持多工作表，Parquet适合大数据分析。",commonMistake:"忽视文件格式选择的实际影响。"}],codingChallenges:[{id:1,description:'【综合实战】请编写完整的数据清洗代码：读取 retail_orders.csv，处理金额格式（去除$符号和逗号转为浮点数），填充缺失的客户ID为"Guest"，统一日期格式为datetime类型，并检测金额异常值（使用IQR方法），最后统计清洗后的数据质量。',initialCode:`import pandas as pd
import numpy as np
import re

# 读取数据
df = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")

# 请编写代码：
# 1. 清洗金额格式（去除$和逗号，转为浮点数）
# 2. 填充缺失客户ID为"Guest"
# 3. 统一日期格式为datetime
# 4. 使用IQR方法检测金额异常值
# 5. 输出数据质量报告
`,expectedOutput:`金额清洗完成！
客户ID缺失值已填充
日期统一完成
异常值检测结果：...
数据质量报告：...`,correctAnswer:`import pandas as pd
import numpy as np
import re

# 读取数据
df = pd.read_csv("datasets/retail_orders.csv", encoding="utf-8-sig")
print(f"原始数据：{df.shape[0]}行，{df.shape[1]}列")

# 1. 清洗金额格式
def clean_amount(val):
    if pd.isna(val):
        return np.nan
    s = str(val)
    s = re.sub(r"[^\\d.-]", "", s)
    try:
        return float(s)
    except:
        return np.nan

df["amount"] = df["amount"].apply(clean_amount)
print(f"金额清洗完成！缺失值：{df['amount'].isna().sum()}")

# 2. 填充缺失客户ID
missing_customer = df["customer_id"].isna().sum()
df["customer_id"] = df["customer_id"].fillna("Guest")
print(f"客户ID缺失值已填充（{missing_customer}条）")

# 3. 统一日期格式
df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")
print(f"日期统一完成！缺失值：{df['order_date'].isna().sum()}")

# 4. IQR异常值检测
Q1 = df["amount"].quantile(0.25)
Q3 = df["amount"].quantile(0.75)
IQR = Q3 - Q1
lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR
outliers = df[(df["amount"] < lower) | (df["amount"] > upper)]
print(f"异常值检测：正常范围[{lower:.2f}, {upper:.2f}]，发现{len(outliers)}条异常")

# 5. 数据质量报告
print("\\n=== 数据质量报告 ===")
print(df.info())
print("\\n各列缺失值：")
print(df.isnull().sum())`,commonMistake:"正则表达式写错、日期转换不考虑错误处理、异常值边界计算错误。"},{id:2,description:"【综合实战】对清洗后的数据进行多维度分析：按仓库统计订单数、销售额、平均订单额，找出销售额最高和最低的仓库，计算各仓库销售额占比，并分析是否存在数据质量问题（如异常仓库）。",initialCode:`import pandas as pd
import numpy as np

# 假设df已经过基本清洗，有amount和warehouse列

# 请编写代码：
# 1. 按仓库分组统计（订单数、销售额、平均订单额）
# 2. 找出销售额最高和最低的仓库
# 3. 计算各仓库销售额占比
# 4. 分析是否存在数据质量问题
`,expectedOutput:`各仓库统计：...
最高/最低销售额仓库：...
各仓库销售占比：...
数据质量分析：...`,correctAnswer:`import pandas as pd
import numpy as np

# 按仓库分组统计
stats = df.groupby("warehouse").agg({
    "order_id": "count",
    "amount": ["sum", "mean"]
})
stats.columns = ["订单数", "销售额", "平均订单额"]
print("各仓库统计：")
print(stats)

# 找出最高和最低销售额仓库
max_warehouse = stats["销售额"].idxmax()
min_warehouse = stats["销售额"].idxmin()
print(f"\\n最高销售额仓库：{max_warehouse}，销售额：{stats.loc[max_warehouse, "销售额"]:.2f}")
print(f"最低销售额仓库：{min_warehouse}，销售额：{stats.loc[min_warehouse, "销售额"]:.2f}")

# 计算销售占比
total_sales = stats["销售额"].sum()
stats["销售占比"] = stats["销售额"] / total_sales * 100
print(f"\\n各仓库销售占比：")
for wh in stats.index:
    print(f"  {wh}: {stats.loc[wh, "销售占比"]:.1f}%")

# 数据质量分析
print("\\n=== 数据质量分析 ===")
for wh in stats.index:
    avg = stats.loc[wh, "平均订单额"]
    overall_avg = df["amount"].mean()
    if avg > overall_avg * 3 or avg < overall_avg * 0.3:
        print(f"  ⚠️ {wh}平均订单额异常：{avg:.2f}（整体均值：{overall_avg:.2f}）")`,commonMistake:"agg函数使用不当、销售占比计算错误、不会做数据质量分析。"}]},"02-0":{title:"分组聚合分析 - 综合练习",quizQuestions:[{id:1,question:"pandas中分组聚合的三步流程是？",options:["读取→分组→保存","拆分→应用→合并","筛选→计算→输出","导入→处理→展示"],correctAnswer:1,explanation:"分组聚合的核心理念是 Split-Apply-Combine，即拆分→应用→合并。",commonMistake:"不清楚分组聚合的标准流程。"},{id:2,question:"按单列分组的正确语法是？",options:['df.group("column")','df.groupby("column")','df.group_by("column")','df.groups("column")'],correctAnswer:1,explanation:'pandas中使用 df.groupby("列名") 来按某列分组。',commonMistake:"使用错误的函数名。"},{id:3,question:"对分组后的多个列同时计算不同聚合应该用？",options:['df.groupby("col").mean()','df.groupby("col").agg()','df.groupby("col").apply()','df.groupby("col").transform()'],correctAnswer:1,explanation:"agg() 函数可以同时对不同列应用不同的聚合函数。",commonMistake:"不知道 agg() 可以接受字典参数。"},{id:4,question:"pivot_table 和 crosstab 的主要区别是？",options:["两者功能完全相同","pivot_table是值汇总，crosstab是频数统计","crosstab是值汇总，pivot_table是频数统计","两者都用于频数统计"],correctAnswer:1,explanation:"pivot_table 用于对数值列进行汇总分析，crosstab 用于计算两个分类变量的频数交叉表。",commonMistake:"混淆两者的使用场景。"},{id:5,question:'使用 agg({"col": ["sum", "mean"]}) 时，生成的结果列名格式是？',options:['"col_sum", "col_mean"','("col", "sum"), ("col", "mean")','"sum", "mean"','"col"'],correctAnswer:1,explanation:"使用多参数 agg 时，结果是 MultiIndex 列名，格式为 (列名, 聚合函数名)。",commonMistake:"不习惯访问多层索引的列。"},{id:6,question:"groupby().filter() 和 groupby().transform() 的区别是？",options:["两者功能相同","filter筛选组，transform返回与原数据相同长度","filter返回与原数据相同长度，transform筛选组","两者都用于筛选列"],correctAnswer:1,explanation:"filter() 用于筛选满足条件的整个组，transform() 返回与原数据行数相同的结果。",commonMistake:"混淆filter和transform的作用对象。"},{id:7,question:"多列分组时，结果的索引类型是？",options:["单层索引","MultiIndex（多层索引）","无索引","整数索引"],correctAnswer:1,explanation:"多列分组会产生MultiIndex。",commonMistake:"不习惯处理多层索引数据。"},{id:8,question:"crosstab 的 margins 参数用于？",options:["设置边距颜色","添加行列合计","设置边距宽度","合并单元格"],correctAnswer:1,explanation:"margins=True 会在结果中添加一行一列的合计。",commonMistake:"不清楚margins的作用。"},{id:9,question:"groupby().size() 和 groupby().count() 的区别是？",options:["两者完全相同","size()包括NaN，count()不包括","size()不包括NaN，count()包括","两者返回类型不同"],correctAnswer:1,explanation:"size() 统计每个组的总行数（包括NaN），count() 只统计非空值的数量。",commonMistake:"认为两者等价。"},{id:10,question:"使用 sort_values() 后再 drop_duplicates() 可以控制保留哪条重复记录。",options:["正确，可以控制","错误，drop_duplicates不考虑排序","两者功能完全相同","drop_duplicates会忽略排序"],correctAnswer:0,explanation:'先排序使目标记录排在前面或后面，再用 drop_duplicates(keep="first" 或 "last") 控制保留。',commonMistake:"不清楚去重的顺序控制方法。"}],judgmentQuestions:[{id:1,question:"groupby().size() 和 groupby().count() 的结果完全相同。",correctAnswer:!1,explanation:"size() 统计每个组的总行数（包括NaN），count() 只统计非空值的数量。",commonMistake:"认为两者等价。"},{id:2,question:"transform() 返回的结果与原DataFrame行数相同。",correctAnswer:!0,explanation:"transform() 对每组应用函数后返回与原数据相同长度的结果，常用于组内标准化等场景。",commonMistake:"混淆transform和agg的返回值形状。"},{id:3,question:"pivot_table 的 fill_value 参数用于填充缺失值，但不会影响值为0的单元格。",correctAnswer:!0,explanation:"fill_value 只填充因合并产生的NaN，值为0的单元格不会被填充。",commonMistake:"误以为 fill_value 会填充所有空值。"},{id:4,question:'groupby().agg({"amount": "sum"}) 可以对amount列同时求和与求均值。',correctAnswer:!1,explanation:'一次只能指定一个聚合函数，如需多个需要用列表：{"amount": ["sum", "mean"]}。',commonMistake:"agg的字典格式写错。"},{id:5,question:"crosstab 可以接受两个以上的列进行交叉分析。",correctAnswer:!1,explanation:"crosstab 接受两个 Series 或数组进行双向交叉，超过两个变量需用 pivot_table。",commonMistake:"尝试用crosstab做多维交叉表。"},{id:6,question:"groupby().apply() 可以使用任何自定义函数，包括返回标量、Series或DataFrame。",correctAnswer:!0,explanation:"apply() 非常灵活，可以返回各种形状的结果，pandas会自动适配。",commonMistake:"以为apply只能返回标量。"},{id:7,question:"多列分组后，使用 unstack() 可以将内层索引转换为列名。",correctAnswer:!0,explanation:"unstack() 将行索引（内层）转换为列名，常用于将分组结果转换为宽表格式。",commonMistake:"不清楚unstack的作用。"},{id:8,question:"pivot_table和groupby的主要区别是pivot_table生成宽表，groupby生成窄表。",correctAnswer:!0,explanation:"pivot_table将数据透视为宽表形式，groupby保持窄表形式。",commonMistake:"不清楚两者在输出格式上的区别。"},{id:9,question:"使用 agg 时，给列重命名需要使用 rename(columns={...}) 方法。",correctAnswer:!0,explanation:"agg返回的结果需要用rename或直接构造DataFrame来重命名列。",commonMistake:"不知道如何重命名agg结果列。"},{id:10,question:"分组聚合分析中，组的顺序会影响最终结果。",correctAnswer:!1,explanation:"分组聚合是集合操作，组的顺序不影响聚合结果。",commonMistake:"误以为分组有顺序依赖。"}],codingChallenges:[{id:1,description:"【综合实战】对订单数据进行多维度分析：按仓库和月份分组统计销售额，找出每个仓库销售额最好的月份，并计算该月销售额占该仓库全年销售额的比例，最后找出增长最快和最慢的月份。",initialCode:`import pandas as pd
import numpy as np

df = pd.read_csv("datasets/retail_orders.csv")
df["order_date"] = pd.to_datetime(df["order_date"])
df["month"] = df["order_date"].dt.month

# 请编写代码：
# 1. 按仓库和月份分组统计销售额
# 2. 找出每个仓库销售额最好的月份
# 3. 计算该月占全年比例
# 4. 找出增长最快/最慢月份
`,expectedOutput:`各仓库各月销售额：...
各仓库最佳月份及占比：...
增长分析：...`,correctAnswer:`import pandas as pd
import numpy as np

df = pd.read_csv("datasets/retail_orders.csv")
df["order_date"] = pd.to_datetime(df["order_date"])
df["month"] = df["order_date"].dt.month

# 按仓库和月份分组统计
monthly_sales = df.groupby(["warehouse", "month"])["amount"].sum().reset_index()
monthly_sales.columns = ["仓库", "月份", "销售额"]
print("各仓库各月销售额：")
print(monthly_sales)

# 找出每个仓库最佳月份
best_months = monthly_sales.loc[monthly_sales.groupby("仓库")["销售额"].idxmax()]
print("\\n各仓库最佳月份：")
total_by_warehouse = df.groupby("warehouse")["amount"].sum()
for _, row in best_months.iterrows():
    wh = row["仓库"]
    month = int(row["月份"])
    sales = row["销售额"]
    total = total_by_warehouse[wh]
    ratio = sales / total * 100
    print(f"  {wh}: {month}月，销售额{sales:.0f}，占比{ratio:.1f}%")

# 增长分析
monthly_total = df.groupby("month")["amount"].sum().sort_index()
monthly_total_diff = monthly_total.diff()
fastest_month = monthly_total_diff.idxmax()
slowest_month = monthly_total_diff.idxmin()
print(f"\\n增长最快月份：{fastest_month}月（+{monthly_total_diff[fastest_month]:.0f}）")
print(f"增长最慢月份：{slowest_month}月（{monthly_total_diff[slowest_month]:.0f}）")`,commonMistake:"不会用idxmax分组、不会计算组内占比、增长分析逻辑错误。"},{id:2,description:"【综合实战】创建数据透视表，展示各仓库各品类的销售额和订单数，添加合计行和合计列，并计算各品类在各仓库的销售额占比，最后找出销售额占比超过50%的品类-仓库组合。",initialCode:`import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")

# 请编写代码：
# 1. 创建透视表（行=仓库，列=品类，值=销售额和订单数）
# 2. 添加合计行和合计列
# 3. 计算各品类销售占比
# 4. 找出占比超过50%的组合
`,expectedOutput:`透视表：...
各品类销售占比：...
高占比组合：...`,correctAnswer:`import pandas as pd

df = pd.read_csv("datasets/retail_orders.csv")

# 创建透视表
pivot = pd.pivot_table(
    df,
    values="amount",
    index="warehouse",
    columns="product_category",
    aggfunc="sum",
    fill_value=0,
    margins=True,
    margins_name="合计"
)
print("各仓库各品类销售额透视表：")
print(pivot)

# 计算各品类占比（不含合计行和列）
pivot_no_total = pivot.iloc[:-1, :-1]
category_total = pivot_no_total.sum(axis=0)
ratio = pivot_no_total.div(category_total, axis=1) * 100
print("\\n各品类销售占比（按仓库）：")
print(ratio.round(1).astype(str) + "%")

# 找出占比超过50%的组合
print("\\n=== 高占比组合（>50%）===")
for warehouse in pivot_no_total.index:
    for category in pivot_no_total.columns:
        r = ratio.loc[warehouse, category]
        if r > 50:
            print(f"  {warehouse} - {category}: {r:.1f}%")`,commonMistake:"margins参数使用错误、不会计算占比、索引切片不当。"}]},"03-0":{title:"购物篮关联分析 - 综合练习",quizQuestions:[{id:1,question:"关联分析中，支持度表示？",options:["买了A的人中多少也买了B","商品A和B同时购买的概率","关联规则比随机情况强多少倍","商品的购买频率"],correctAnswer:1,explanation:"支持度 = 包含商品A和B的交易数 / 总交易数，表示两个商品同时出现的概率。",commonMistake:"混淆支持度、置信度、提升度的定义。"},{id:2,question:"置信度的定义是？",options:["P(A∩B)","P(B|A) = P(A∩B)/P(A)","P(A∩B)/P(B)","P(A)/P(B)"],correctAnswer:1,explanation:"置信度表示买了A的人中，多少也买了B，即条件概率 P(B|A)。",commonMistake:"混淆置信度与支持度的计算公式。"},{id:3,question:"提升度大于1表示？",options:["负相关","独立","正相关","无法判断"],correctAnswer:2,explanation:"提升度 > 1 表示正相关，即A和B的关联比随机情况更强。",commonMistake:"不清楚提升度的判断标准。"},{id:4,question:"Apriori算法的核心思想是？",options:["如果项集频繁，则所有子项集也频繁","如果项集频繁，则所有超项集也频繁","项集的频繁与否与子项集无关","只统计单项的支持度"],correctAnswer:0,explanation:"Apriori算法的核心是：如果一个项集是频繁的，那么它的所有子项集也一定是频繁的。",commonMistake:"记反了父子项集之间的关系。"},{id:5,question:'商品A的支持度为0.6，商品B的支持度为0.4，A和B的联合支持度为0.3，则"牛奶→面包"的提升度是多少？',options:["0.5","0.75","1.0","1.25"],correctAnswer:3,explanation:"置信度 = 0.3/0.6 = 0.5，提升度 = 0.5/0.4 = 1.25",commonMistake:"计算错误：提升度 = 置信度 / B的支持度。"},{id:6,question:"在商品推荐场景中，应该优先推荐哪种关联规则？",options:["支持度高、置信度高、提升度大于1","只要支持度高就行","只要置信度高就行","支持度越低越好"],correctAnswer:0,explanation:"有效的推荐规则需要：支持度高（普遍） + 置信度高（可靠） + 提升度>1（有价值）。",commonMistake:"只关注单一指标。"},{id:7,question:"为什么关联分析中要设置最小支持度阈值？",options:["为了加快计算速度","过滤掉没有商业价值的罕见规则","必须满足统计学要求","没有实际作用"],correctAnswer:1,explanation:"如果规则的支持度太低，即使置信度高，也没有实际商业价值（如只出现1次的组合）。",commonMistake:"忽视最小支持度阈值的作用。"},{id:8,question:'置信度是对称的，即"牛奶→面包"的置信度等于"面包→牛奶"的置信度。',options:["对，两者是相等的","错，置信度不对称","无法确定","取决于商品顺序"],correctAnswer:1,explanation:"置信度不对称，因为计算时用的是条件概率 P(B|A) vs P(A|B)。",commonMistake:"误以为置信度是对称的。"},{id:9,question:'关联规则"A→B"中，A称为？',options:["后项","前项/前提","结果","支持项"],correctAnswer:1,explanation:'在关联规则"A→B"中，A是前项（前件/前提），B是后项（后件/结果）。',commonMistake:"混淆前项和后项的定义。"},{id:10,question:"购物篮分析中，事务矩阵的作用是？",options:["方便存储和传输","将商品列表转换为0/1矩阵，便于计算支持度","加快查询速度","减少内存占用"],correctAnswer:1,explanation:"事务矩阵将每行转换为商品是否出现的0/1向量，便于计算共现支持度。",commonMistake:"不清楚事务矩阵的实际用途。"}],judgmentQuestions:[{id:1,question:"提升度越大，说明关联规则越有价值，可以直接推荐给所有用户。",correctAnswer:!1,explanation:"提升度大只是说明关联比随机强，还需要结合置信度和支持度综合判断，以及考虑业务成本。",commonMistake:"过度依赖单一指标。"},{id:2,question:"如果{牛奶,面包}是频繁项集，那么{牛奶}和{面包}也一定是频繁项集。",correctAnswer:!0,explanation:"这是Apriori算法的核心性质：频繁项集的所有非空子集也必须是频繁的。",commonMistake:"不清楚Apriori性质。"},{id:3,question:"关联规则的提升度可以用置信度除以前项的支持度来计算。",correctAnswer:!1,explanation:"提升度 = 置信度 / 后项的支持度，不是前项的支持度。",commonMistake:"公式记错。"},{id:4,question:"在购物篮分析中，同一交易记录中的商品顺序会影响支持度计算。",correctAnswer:!1,explanation:"支持度只关心商品是否同时出现，与顺序无关。",commonMistake:"误以为顺序影响结果。"},{id:5,question:"最小支持度设置得越高，计算速度越快，但可能遗漏有价值的规则。",correctAnswer:!0,explanation:"支持度阈值高时，候选项集数量减少，但可能过滤掉长尾组合的规则。",commonMistake:"不理解阈值与召回率的权衡。"},{id:6,question:"可以用 pd.crosstab 来验证购物篮分析的结果。",correctAnswer:!0,explanation:"crosstab 可以快速计算两个商品（或商品组合）的共现频数，验证支持度计算是否正确。",commonMistake:"不会用crosstab辅助分析。"},{id:7,question:"关联分析只能用于零售场景，不能用于其他领域。",correctAnswer:!1,explanation:"关联分析广泛应用于医疗诊断、用户行为分析、金融欺诈检测等众多领域。",commonMistake:"认为关联分析应用范围有限。"},{id:8,question:"频繁项集挖掘只能找到2项商品之间的关联。",correctAnswer:!1,explanation:"频繁项集可以是任意数量的商品组合，Apriori算法可以挖掘多项集。",commonMistake:"以为只能做两项关联。"},{id:9,question:"支持度高的规则一定是有效的推荐规则。",correctAnswer:!1,explanation:"高支持度只说明普遍，但可能置信度和提升度都很低，实际价值不大。",commonMistake:"只关注支持度。"},{id:10,question:"在实际业务中，关联分析结果需要结合业务经验进行筛选和验证。",correctAnswer:!0,explanation:"统计分析结果需要业务专家判断是否符合常识、是否有执行可行性。",commonMistake:"纯粹依赖统计结果做决策。"}],codingChallenges:[{id:1,description:"【综合实战】实现完整的关联规则挖掘流程：读取购物篮数据，转换为事务矩阵，计算所有单项支持度，筛选支持度>0.3的商品，输出高频商品列表，并计算所有商品两两之间的支持度和提升度，找出提升度>1.2的强关联规则。",initialCode:`import pandas as pd

df = pd.read_csv("datasets/market_basket.csv")

# 请编写代码：
# 1. 将items列转换为事务矩阵
# 2. 计算单项支持度
# 3. 筛选支持度>0.3的商品
# 4. 计算商品两两之间的支持度和提升度
# 5. 找出提升度>1.2的强关联规则
`,expectedOutput:`高频商品列表：...
强关联规则：...`,correctAnswer:`import pandas as pd
import numpy as np

df = pd.read_csv("datasets/market_basket.csv")

# 转换为事务矩阵
df["items_list"] = df["items"].str.split(",")
all_items = set()
for items in df["items_list"]:
    all_items.update([item.strip() for item in items])

items_list = list(all_items)
transaction_matrix = pd.DataFrame(
    [[1 if item.strip() in items else 0 for item in items_list] 
     for items in df["items_list"]],
    columns=items_list
)
n = len(transaction_matrix)

# 单项支持度
item_supports = transaction_matrix.sum() / n
high_freq = item_supports[item_supports > 0.3].sort_values(ascending=False)
print(f"高频商品列表（支持度>0.3）：{len(high_freq)}个")
for item, support in high_freq.items():
    print(f"  {item}: {support:.2%}")

# 计算两两之间的支持度和提升度
print("\\n=== 强关联规则（提升度>1.2）===")
for i, item1 in enumerate(items_list):
    for j, item2 in enumerate(items_list):
        if i >= j:
            continue
        # 联合支持度
        joint_support = (transaction_matrix[item1] & transaction_matrix[item2]).sum() / n
        if joint_support == 0:
            continue
        # 置信度 A->B
        conf1 = joint_support / item_supports[item1]
        conf2 = joint_support / item_supports[item2]
        # 提升度
        lift1 = conf1 / item_supports[item2]
        lift2 = conf2 / item_supports[item1]
        if lift1 > 1.2:
            print(f"  {item1} -> {item2}: 支持度={joint_support:.2%}, 置信度={conf1:.2%}, 提升度={lift1:.2f}")
        if lift2 > 1.2:
            print(f"  {item2} -> {item1}: 支持度={joint_support:.2%}, 置信度={conf2:.2%}, 提升度={lift2:.2f}")`,commonMistake:"事务矩阵构建逻辑错误、支持度计算除错、不会计算两两关联。"},{id:2,description:'【综合实战】基于购物篮数据，计算"牛奶→面包"的完整关联指标：支持度、置信度、提升度，并判断该规则是否有商业价值，如果有一定规模的超市应该如何应用这条规则进行促销。',initialCode:`import pandas as pd

# 假设transaction_matrix已创建
# 请计算：
# 1. 牛奶的支持度
# 2. 面包的支持度
# 3. 牛奶+面包的支持度
# 4. 置信度（牛奶→面包）
# 5. 提升度
# 6. 判断商业价值并给出促销建议
`,expectedOutput:`牛奶支持度：...
面包支持度：...
联合支持度：...
置信度：...
提升度：...
商业价值及建议：...`,correctAnswer:`import pandas as pd

# 计算各支持度
milk_support = transaction_matrix["牛奶"].sum() / len(transaction_matrix)
bread_support = transaction_matrix["面包"].sum() / len(transaction_matrix)
milk_bread_support = (transaction_matrix["牛奶"] & transaction_matrix["面包"]).sum() / len(transaction_matrix)

# 计算置信度
confidence = milk_bread_support / milk_support

# 计算提升度
lift = confidence / bread_support

print(f"牛奶支持度：{milk_support:.2%}")
print(f"面包支持度：{bread_support:.2%}")
print(f"联合支持度：{milk_bread_support:.2%}")
print(f"置信度（牛奶→面包）：{confidence:.2%}")
print(f"提升度：{lift:.2f}")

# 商业价值判断和建议
print("\\n=== 商业价值及促销建议 ===")
if lift > 1.2 and milk_support > 0.2 and confidence > 0.3:
    print("✓ 建议关联销售策略")
    print(f"  1. 将面包货架摆放在牛奶附近，增加曝光机会")
    print(f"  2. 开展"买牛奶送面包优惠券"活动")
    print(f"  3. 预计可提升面包销量约{(lift-1)*100:.0f}%")
elif lift > 1:
    print("△ 建议小规模试点")
    print("  1. 先在部分门店试点关联陈列")
    print("  2. 收集2周数据后再决定是否推广")
else:
    print("✗ 暂不推荐此关联策略")
    print("  提升度不足，关联购买效果不明显")`,commonMistake:"公式混淆、不知如何给出业务建议。"}]},"04-0":{title:"客户聚类分群分析 - 综合练习",quizQuestions:[{id:1,question:"K-Means聚类前需要标准化的原因是？",options:["加快计算速度","消除不同特征量纲的影响","必须满足正态分布","减少内存占用"],correctAnswer:1,explanation:"不同量纲的特征（如年龄和收入）数值范围差异大，不标准化会导致距离计算被大数值特征主导。",commonMistake:"忽略标准化的重要性。"},{id:2,question:'肘部法则中，"肘部"指什么？',options:["WCSS值最小的点","WCSS下降速度由快变慢的拐点","聚类数量为2的点","WCSS值最大的点"],correctAnswer:1,explanation:"肘部是WCSS曲线下降速度开始减缓的点，表示增加更多簇也无法显著降低WCSS。",commonMistake:"不清楚肘部的判断方法。"},{id:3,question:"聚类结果的轮廓系数（Silhouette Score）的范围是？",options:["[-1, 1]","[0, 1]","[-∞, ∞]","[0, ∞]"],correctAnswer:0,explanation:"轮廓系数范围是[-1, 1]，越接近1表示聚类效果越好，接近-1表示可能分到了错误的簇。",commonMistake:"不清楚轮廓系数的取值范围。"},{id:4,question:"K-Means的random_state参数的作用是？",options:["设置随机种子，保证结果可复现","设置随机初始化的样本数","控制是否使用随机初始化","决定随机抽样的比例"],correctAnswer:0,explanation:"K-Means使用随机初始化，random_state确保每次运行结果一致，便于复现和调试。",commonMistake:"忽视random_state的重要性。"},{id:5,question:"各簇样本数量差异很大（如一簇占95%）可能说明什么？",options:["聚类效果很好","数据可能存在较大异常","K值设置太小","标准化出了问题"],correctAnswer:1,explanation:"簇大小极度不均衡可能说明某些簇实际上是异常点被单独分组，或者K值不合适。",commonMistake:"不分析簇大小分布。"},{id:6,question:'聚类分析中，"高价值客户"的RFM特征通常是？',options:["R低、F低、R高","R低、F高、M高","R高、F低、M低","R高、F高、M高"],correctAnswer:1,explanation:"高价值客户特征：最近消费(R低)、消费频率高(F高)、消费金额高(M高)。",commonMistake:"对RFM模型理解不清。"},{id:7,question:"K-Means聚类要求数据在特征空间中呈什么形状分布？",options:["任意形状","球形","线性","无要求"],correctAnswer:1,explanation:"K-Means基于欧氏距离，擅长发现球形簇。对于非球形数据（如月牙形），效果较差。",commonMistake:"以为K-Means适用于任何形状的数据。"},{id:8,question:"用不同random_state多次运行K-Means，如果结果差异很大，说明什么？",options:["数据分布非常均匀","数据本身没有自然的聚类结构或初始化敏感","K值设置太小","标准化出了问题"],correctAnswer:1,explanation:"如果初始化敏感导致结果不稳定，说明数据可能没有明显的聚类结构，或者需要更多特征。",commonMistake:"忽视初始化敏感性问题。"},{id:9,question:"MiniBatch K-Means 比标准K-Means速度更快，但可能牺牲一定的？",options:["准确性","聚类质量","可解释性","稳定性"],correctAnswer:1,explanation:"MiniBatch通过随机抽样加速计算，适用于大数据集，但结果可能有偏差。",commonMistake:"不清楚MiniBatch的优缺点。"},{id:10,question:"聚类中心（质心）的数量由什么决定？",options:["数据量大小","K值","特征数量","算法自动确定"],correctAnswer:1,explanation:"K值决定了聚类中心的数量，是K-Means的第一个参数。",commonMistake:"混淆K的含义。"}],judgmentQuestions:[{id:1,question:"K-Means聚类中，如果某个簇只有一个样本，这个样本一定是异常值。",correctAnswer:!1,explanation:"可能是真实的孤立点，也可能是小众群体的代表，需要结合业务判断。",commonMistake:"过度解读单样本簇。"},{id:2,question:"标准化后的数据聚类，效果一定比未标准化更好。",correctAnswer:!1,explanation:"如果所有特征本来就在同一量纲下，标准化反而可能引入误差。需要根据实际情况判断。",commonMistake:"认为标准化总是必要的。"},{id:3,question:"K-Means对噪声和异常值非常敏感，一个离群点可能严重影响质心位置。",correctAnswer:!0,explanation:"K-Means基于质心计算，异常值会大幅拉偏质心。可以先用异常检测预处理。",commonMistake:"忽视异常值对K-Means的影响。"},{id:4,question:"聚类结果可以用均方误差（MSE）来评估。",correctAnswer:!1,explanation:"MSE用于回归评估，聚类用轮廓系数、Calinski-Harabasz指数等内部评估指标。",commonMistake:"用错了评估指标。"},{id:5,question:"在客户分群后，可以直接套用同一运营策略给所有客户。",correctAnswer:!1,explanation:"不同客户群体特征不同，需要差异化运营策略才能效果最大化。",commonMistake:"忽视差异化运营的重要性。"},{id:6,question:"K-Means对噪声和异常值非常敏感，一个离群点可能严重影响质心位置。",correctAnswer:!0,explanation:"K-Means基于质心计算，异常值会大幅拉偏质心。可以先用异常检测预处理。",commonMistake:"忽视异常值对K-Means的影响。"},{id:7,question:"轮廓系数越高越好，且接近1表示聚类效果好。",correctAnswer:!0,explanation:"轮廓系数范围[-1,1]，接近1说明簇内紧密、簇间分离，聚类效果好。",commonMistake:"不清楚轮廓系数的判断标准。"},{id:8,question:"在实际业务中，应该只用一种方法确定K值。",correctAnswer:!1,explanation:"可以结合肘部法则、轮廓系数、业务理解等多种方法综合确定K值。",commonMistake:"只用单一方法确定K值。"},{id:9,question:"聚类分析是无监督学习，不需要标签数据。",correctAnswer:!0,explanation:"聚类是无监督学习，不需要预先知道标签，让算法自己发现数据中的结构。",commonMistake:"不清楚聚类所属的机器学习类别。"},{id:10,question:"DBSCAN相比K-Means的优势是可以发现任意形状的簇。",correctAnswer:!0,explanation:"DBSCAN基于密度聚类，可以发现任意形状的簇，而K-Means只能发现球形簇。",commonMistake:"以为所有聚类算法效果相同。"}],codingChallenges:[{id:1,description:"【综合实战】实现完整的客户分群流程：读取客户特征数据，进行Z-Score标准化，使用肘部法则确定最优K值（K=2到6），绘制WCSS曲线，对客户进行聚类分群，并分析各簇的特征，包括消费能力、年龄分布、客户数量等。",initialCode:`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/customer_features.csv")
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]

# 请编写代码：
# 1. 标准化特征
# 2. 计算K=2到6的WCSS
# 3. 绘制肘部曲线
# 4. 用最优K进行聚类
# 5. 分析各簇特征
`,expectedOutput:`WCSS曲线图
各簇特征统计：...
客户画像：...`,correctAnswer:`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/customer_features.csv")
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]

# 标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 计算WCSS
wcss = []
K_range = range(2, 7)
for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    wcss.append(kmeans.inertia_)

# 绘制肘部曲线
plt.figure(figsize=(8, 5))
plt.plot(K_range, wcss, "bo-")
plt.xlabel("K值")
plt.ylabel("WCSS")
plt.title("肘部法则确定最优K值")
plt.grid(True)
plt.savefig("elbow_curve.png")
plt.close()
print("WCSS值：", dict(zip(K_range, [round(w, 2) for w in wcss])))

# 最优K聚类（假设K=3）
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
df["cluster"] = kmeans.fit_predict(X_scaled)

# 各簇特征分析
print("\\n各簇特征统计：")
cluster_stats = df.groupby("cluster")[features].mean().round(2)
print(cluster_stats)

# 客户画像
print("\\n客户画像分析：")
for i in range(3):
    cluster_data = df[df["cluster"] == i]
    print(f"簇{i}（{len(cluster_data)}人）：")
    print(f"  平均年龄{cluster_data['age'].mean():.0f}岁")
    print(f"  平均收入{cluster_data['income'].mean():.0f}元")
    print(f"  平均消费{cluster_data['total_spent'].mean():.0f}元")`,commonMistake:"不会计算WCSS、不会绑制肘部曲线、不会解读簇特征。"},{id:2,description:"【综合实战】基于聚类结果，为每个客户簇制定差异化运营策略：计算各簇的大小占比、消费能力分层（打分）、推荐适合的营销活动，并预测各簇的留存率。",initialCode:`import pandas as pd
import numpy as np

# 假设df已有cluster列
# 请编写代码：
# 1. 计算各簇客户数量和占比
# 2. 按消费能力对各簇分层
# 3. 制定差异化运营策略
# 4. 预测各簇留存率
`,expectedOutput:`簇分布：...
各簇消费分层：...
运营策略：...
留存率预测：...`,correctAnswer:`import pandas as pd
import numpy as np

# 计算簇分布
cluster_counts = df["cluster"].value_counts().sort_index()
total = len(df)
print("各簇客户数量和占比：")
for cluster_id, count in cluster_counts.items():
    print(f"  簇{cluster_id}：{count}人（{count/total:.1%}）")

# 消费能力分层
cluster_stats = df.groupby("cluster").agg({
    "age": "mean",
    "income": "mean",
    "purchase_freq": "mean",
    "avg_order_value": "mean",
    "total_spent": "mean"
}).round(2)

# 标准化后打分
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
scores = scaler.fit_transform(cluster_stats[["income", "purchase_freq", "avg_order_value"]])
cluster_stats["消费能力得分"] = scores.mean(axis=1).round(2)

print("\\n各簇消费能力得分：")
for idx, row in cluster_stats.iterrows():
    score = row["消费能力得分"]
    level = "高" if score >= 0.6 else "中" if score >= 0.3 else "低"
    print(f"  簇{idx}：得分{score:.2f}（{level}价值客户）")

# 差异化运营策略
print("\\n=== 差异化运营策略 ===")
strategies = {
    0: [],
    1: [],
    2: []
}

for idx, row in cluster_stats.iterrows():
    score = row["消费能力得分"]
    if score >= 0.6:
        strategies[idx] = ["VIP专属服务", "优先新品体验", "生日专属优惠"]
    elif score >= 0.3:
        strategies[idx] = ["积分加倍活动", "满减优惠券", "唤醒短信"]
    else:
        strategies[idx] = ["大额折扣活动", "限时秒杀", "Push推送"]

for cluster_id, tactic in strategies.items():
    print(f"簇{cluster_id}运营策略：")
    for t in tactic:
        print(f"  - {t}")

# 留存率预测（简化模型）
print("\\n=== 留存率预测 ===")
# 假设消费能力越高，留存率越高
for idx, row in cluster_stats.iterrows():
    score = row["消费能力得分"]
    predicted_retention = 0.5 + 0.3 * score  # 简单线性模型
    print(f"  簇{idx}预测留存率：{predicted_retention:.1%}")`,commonMistake:"不会计算综合得分、策略制定不贴合业务、留存率预测方法错误。"}]},"05-0":{title:"专业数据可视化 - 综合练习",quizQuestions:[{id:1,question:"展示各部分占整体的比例关系，应该用哪种图表？",options:["折线图","柱状图","饼图或环形图","散点图"],correctAnswer:2,explanation:"饼图和环形图适合展示占比关系，直观显示各部分占整体的比例。",commonMistake:"用柱状图展示占比。"},{id:2,question:"plt.tight_layout() 的作用是？",options:["压缩图表尺寸","自动调整子图参数防止标签重叠","设置图表边框","调整字体大小"],correctAnswer:1,explanation:"tight_layout() 自动调整子图参数，防止标题、标签被遮挡。",commonMistake:"忽视tight_layout()导致图表元素重叠。"},{id:3,question:"在同一图中展示两个差异很大的指标（如销量和利润率），应该用？",options:["单Y轴柱状图","双Y轴组合图","散点图","饼图"],correctAnswer:1,explanation:"双Y轴组合图（twinx）可以共享X轴，左右Y轴分别对应不同量级的指标。",commonMistake:"强行用单Y轴导致小指标无法显示。"},{id:4,question:"Matplotlib中，中文字体设置的正确方式是？",options:['plt.set_font("SimHei")','plt.rcParams["font.sans-serif"] = ["SimHei"]','FontProperties(name="SimHei")',"所有选项都正确"],correctAnswer:1,explanation:'可以通过 plt.rcParams["font.sans-serif"] 设置全局字体。',commonMistake:"用错API设置中文字体。"},{id:5,question:"绘制时间序列趋势图时，为了更清晰地展示趋势，应该？",options:["直接绘制原始数据","添加移动平均线平滑噪声","删除所有异常点","使用3D图表"],correctAnswer:1,explanation:"移动平均可以消除短期波动，更清晰地展示长期趋势。",commonMistake:"忽视趋势线的辅助作用。"},{id:6,question:"plt.subplot(2, 2, 1) 和 plt.subplot(221) 的关系是？",options:["两者完全相同","前者是后者的展开形式","前者创建1个图，后者创建2个图","两者功能相反"],correctAnswer:1,explanation:"plt.subplot(2, 2, 1) 和 plt.subplot(221) 都表示2x2布局中的第1个子图。",commonMistake:"不清楚subplot的简写规则。"},{id:7,question:"颜色映射（colormap）使用场景是？",options:["所有图表","散点图、热力图等需要颜色编码数值的情况","只有饼图","只有柱状图"],correctAnswer:1,explanation:"颜色映射用于用颜色表示数值大小，常见于散点图的颜色编码、热力图等。",commonMistake:"滥用颜色导致图表混乱。"},{id:8,question:"图表标题、坐标轴标签的字体大小应该？",options:["全部一样大","标题 > 轴标签 > 刻度标签","刻度标签最大","无所谓"],correctAnswer:1,explanation:"遵循视觉层次：标题最大、轴标签次之、刻度标签最小，保持层次分明。",commonMistake:"不注意字体大小层次。"},{id:9,question:"plt.figure(figsize=(10, 6)) 设置的 figsize 参数单位是什么？",options:["像素","英寸","厘米","毫米"],correctAnswer:1,explanation:"figsize 单位是英寸，像素 = 英寸 × DPI。",commonMistake:"混淆单位。"},{id:10,question:"seaborn 是 matplotlib 的什么？",options:["替代品","高级封装","独立产品","不同协议"],correctAnswer:1,explanation:"seaborn 基于 matplotlib，可以与 matplotlib 混合使用，返回的也是 matplotlib 的 axes 对象。",commonMistake:"以为两者完全独立。"}],judgmentQuestions:[{id:1,question:"plt.show() 可以在所有环境下正常显示图表。",correctAnswer:!1,explanation:"在某些服务器环境（如无图形界面）下需要用 plt.savefig() 保存图片。",commonMistake:"以为 show() 总是可用。"},{id:2,question:"plt.figure(figsize=(10, 6)) 设置的 figsize 参数单位是像素。",correctAnswer:!1,explanation:"figsize 单位是英寸，像素 = 英寸 × DPI。",commonMistake:"混淆单位。"},{id:3,question:"可以在一个图表中同时使用 plt.bar() 和 plt.plot() 来创建组合图。",correctAnswer:!0,explanation:"可以先用 bar() 绘制柱状图，再用 plot() 在同一axes上添加折线。",commonMistake:"不知道可以叠加不同类型图表。"},{id:4,question:'设置 plt.rcParams["axes.unicode_minus"] = False 可以正常显示负号。',correctAnswer:!1,explanation:"应该设为 True 才能解决负号显示问题，False 会导致负号显示异常。",commonMistake:"记反了参数值。"},{id:5,question:"使用 plt.xticks(rotation=45) 可以旋转X轴标签防止重叠。",correctAnswer:!0,explanation:"当标签文字较长时，旋转可以防止它们互相重叠。",commonMistake:"标签重叠时不知道如何处理。"},{id:6,question:"plt.legend() 可以自动识别要添加图例的数据系列。",correctAnswer:!0,explanation:"只要绘制时设置了label参数，legend()会自动收集并显示图例。",commonMistake:"手动创建图例不必要。"},{id:7,question:"plt.grid(True, alpha=0.3) 的 alpha 参数用于设置网格线透明度。",correctAnswer:!0,explanation:"alpha=0.3 使网格线半透明，避免遮挡数据。",commonMistake:"不知道alpha参数的作用。"},{id:8,question:"在制作报表时，应该尽可能多地在一个图表中添加信息。",correctAnswer:!1,explanation:"好的可视化应该简洁清晰，避免信息过载。",commonMistake:"追求信息量而非可读性。"},{id:9,question:"箱线图可以展示数据的分布特征，包括中位数、四分位数和异常值。",correctAnswer:!0,explanation:"箱线图是展示数据分布的经典图表，可以直观看到中位数、IQR和异常值。",commonMistake:"不清楚箱线图展示的信息。"},{id:10,question:"热力图适合展示两个分类变量之间的数值关系。",correctAnswer:!0,explanation:"热力图用颜色深浅表示数值大小，适合展示两个分类变量交叉的数值数据。",commonMistake:"不清楚热力图的适用场景。"}],codingChallenges:[{id:1,description:"【综合实战】创建一份完整的销售分析仪表盘：绘制各仓库销售额对比柱状图、各月销售额趋势折线图、各品类销售占比饼图、各仓库订单金额分布箱线图，所有图表放在一个2x2的布局中，并添加总标题和子标题。",initialCode:`import pandas as pd
import matplotlib.pyplot as plt

plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False

df = pd.read_csv("datasets/retail_orders.csv")
df["order_date"] = pd.to_datetime(df["order_date"])
df["month"] = df["order_date"].dt.month

# 请编写代码：
# 1. 创建2x2子图布局
# 2. 子图1：各仓库销售额柱状图
# 3. 子图2：各月销售额趋势折线图
# 4. 子图3：各品类销售占比饼图
# 5. 子图4：各仓库订单金额分布箱线图
`,expectedOutput:"仪表盘图表",correctAnswer:`import pandas as pd
import matplotlib.pyplot as plt

plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False

df = pd.read_csv("datasets/retail_orders.csv")
df["order_date"] = pd.to_datetime(df["order_date"])
df["month"] = df["order_date"].dt.month

fig, axes = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle("销售数据分析仪表盘", fontsize=20, fontweight="bold")

# 子图1：各仓库销售额柱状图
warehouse_sales = df.groupby("warehouse")["amount"].sum().sort_values(ascending=False)
axes[0, 0].bar(warehouse_sales.index, warehouse_sales.values, color="steelblue")
axes[0, 0].set_title("各仓库销售额对比")
axes[0, 0].set_xlabel("仓库")
axes[0, 0].set_ylabel("销售额")
axes[0, 0].tick_params(axis="x", rotation=45)

# 子图2：各月销售额趋势折线图
monthly_sales = df.groupby("month")["amount"].sum().sort_index()
axes[0, 1].plot(monthly_sales.index, monthly_sales.values, marker="o", linewidth=2, color="coral")
axes[0, 1].set_title("各月销售额趋势")
axes[0, 1].set_xlabel("月份")
axes[0, 1].set_ylabel("销售额")
axes[0, 1].grid(True, alpha=0.3)

# 子图3：各品类销售占比饼图
category_sales = df.groupby("product_category")["amount"].sum()
axes[1, 0].pie(category_sales.values, labels=category_sales.index, autopct="%1.1f%%", startangle=90)
axes[1, 0].set_title("各品类销售占比")

# 子图4：箱线图展示分布
warehouses = df["warehouse"].unique()
data_for_box = [df[df["warehouse"]==wh]["amount"] for wh in warehouses]
axes[1, 1].boxplot(data_for_box, labels=warehouses)
axes[1, 1].set_title("各仓库订单金额分布")
axes[1, 1].set_xlabel("仓库")
axes[1, 1].set_ylabel("订单金额")
axes[1, 1].tick_params(axis="x", rotation=45)

plt.tight_layout()
plt.savefig("sales_dashboard.png", dpi=150)
plt.show()
print("仪表盘已保存为 sales_dashboard.png")`,commonMistake:"子图索引错误、布局混乱、标题重叠。"},{id:2,description:"【综合实战】绘制RFM客户分析可视化：用散点图展示客户分布（X=消费频率，Y=消费金额，点大小=最近消费间隔，颜色=客户价值分层），并添加适当的图例、轴标签和标注，最后将客户分为4个象限进行解读。",initialCode:`import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False

# 假设已有RFM数据，包含frequency, monetary, recency, label列
# 请编写代码：
# 1. 按label设置不同颜色
# 2. 用散点图展示，点大小反映recency
# 3. 添加图例和轴标签
# 4. 添加象限分割线和标注
`,expectedOutput:"RFM散点图",correctAnswer:`import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False

# 模拟RFM数据
np.random.seed(42)
n = 200
rfm = pd.DataFrame({
    "frequency": np.random.randint(1, 50, n),
    "monetary": np.random.randint(100, 10000, n),
    "recency": np.random.randint(1, 365, n),
    "label": np.random.choice(["VIP", "潜力", "普通", "流失"], n, p=[0.1, 0.3, 0.4, 0.2])
})

# 颜色映射
colors = {"VIP": "red", "潜力": "green", "普通": "blue", "流失": "gray"}
sizes = 100 / rfm["recency"]  # 最近购买间隔越小，点越大

fig, ax = plt.subplots(figsize=(12, 8))

for label in ["VIP", "潜力", "普通", "流失"]:
    mask = rfm["label"] == label
    ax.scatter(
        rfm.loc[mask, "frequency"],
        rfm.loc[mask, "monetary"],
        s=sizes[mask] * 5,
        c=colors[label],
        alpha=0.6,
        label=label,
        edgecolors="white"
    )

ax.set_xlabel("消费频率（次）", fontsize=12)
ax.set_ylabel("消费金额（元）", fontsize=12)
ax.set_title("RFM客户价值分析", fontsize=16, fontweight="bold")
ax.legend(title="客户分层", loc="upper right")
ax.grid(True, alpha=0.3)

# 添加象限分割线（以中位数为界）
freq_median = rfm["frequency"].median()
monetary_median = rfm["monetary"].median()
ax.axvline(x=freq_median, color="black", linestyle="--", alpha=0.5)
ax.axhline(y=monetary_median, color="black", linestyle="--", alpha=0.5)

# 象限标注
ax.text(45, 9000, "高频率×高金额\\nVIP客户", fontsize=10, color="red", ha="center")
ax.text(5, 9000, "低频率×高金额\\n潜力客户", fontsize=10, color="green", ha="center")
ax.text(5, 500, "低频率×低金额\\n流失风险", fontsize=10, color="gray", ha="center")
ax.text(45, 500, "高频率×低金额\\n普通客户", fontsize=10, color="blue", ha="center")

plt.tight_layout()
plt.savefig("rfm_analysis.png", dpi=150)
plt.show()`,commonMistake:"散点图参数设置不当、不会用颜色区分分组、标注位置错误。"}]},"06-0":{title:"业务A/B测试数据分析 - 综合练习",quizQuestions:[{id:1,question:"A/B测试中，转化率的计算方式是？",options:["转化用户数/总用户数","总用户数/转化用户数","未转化用户数/总用户数","转化用户数*总用户数"],correctAnswer:0,explanation:"转化率 = 转化用户数 / 总用户数，表示完成目标行为的用户比例。",commonMistake:"计算公式记反了。"},{id:2,question:"p值小于多少通常被认为具有统计显著性？",options:["0.01","0.05","0.1","0.5"],correctAnswer:1,explanation:"p值小于0.05通常被认为差异具有统计显著性。",commonMistake:"记错了显著性水平。"},{id:3,question:"卡方检验和t检验的主要区别是？",options:["卡方检验用于连续数据，t检验用于离散数据","卡方检验用于分类数据，t检验用于连续数据","两者可以互换使用","卡方检验更快"],correctAnswer:1,explanation:"卡方检验适用于比例/频数数据，t检验适用于比较两组连续数据的均值。",commonMistake:"混淆两者的适用场景。"},{id:4,question:"95%置信区间的含义是？",options:["真实值有95%的概率落在这个范围内","95%的样本落在这个范围内","这个范围包含95%的数据","95%的置信水平下真实值在此范围内"],correctAnswer:0,explanation:"95%置信区间表示，如果重复实验多次，构建的区间中有95%会包含真实参数值。",commonMistake:"对置信区间的统计学含义理解错误。"},{id:5,question:'样本量计算中，"统计功效"（power）通常设置为多少？',options:["0.5","0.8","0.95","0.99"],correctAnswer:1,explanation:"统计功效通常设置为0.8，表示当差异确实存在时，有80%的概率能检测到。",commonMistake:"不清楚功效设置标准。"},{id:6,question:"如果p值=0.03，我们应该？",options:["立即上线新方案","认为差异具有统计显著性，但需结合业务成本收益决定是否上线","认为差异不显著","需要增大样本量"],correctAnswer:1,explanation:"p<0.05说明差异显著，但还要考虑效应大小、业务成本、风险等因素决定是否全量上线。",commonMistake:"过度解读p值。"},{id:7,question:'A/B测试的"新奇效应"（Novelty Effect）是指？',options:["新方案总是更好","用户因为好奇而短期表现异常","测试周期太长","样本量不足"],correctAnswer:1,explanation:"新奇效应指用户因新鲜感而初期行为异常，随着时间推移会回归正常，影响长期指标判断。",commonMistake:"忽视新奇效应对结果的影响。"},{id:8,question:"多重比较问题（Multiple Testing Problem）会导致？",options:["结果更准确","增加第一类错误概率（假阳性）","增加第二类错误概率","无影响"],correctAnswer:1,explanation:"多重比较会增加假阳性风险，需要用Bonferroni校正等方法控制整体错误率。",commonMistake:"忽视多重比较的影响。"},{id:9,question:"效应量（Effect Size）可以告诉我们什么？",options:["统计显著性","差异的实际大小，而不仅是统计显著性","样本量","p值"],correctAnswer:1,explanation:"效应量如Cohen's d表示标准化后的差异大小，比p值更能反映实际业务意义。",commonMistake:"只关注p值忽视效应量。"},{id:10,question:"随机分流是A/B测试的核心，确保什么？",options:["两组用户数量相等","两组用户特征分布一致","结果一定有显著差异","测试周期一致"],correctAnswer:1,explanation:"随机分流保证除了实验因素外，其他特征（年龄、设备、地域等）两组分布均衡。",commonMistake:"忽视随机分流的重要性。"}],judgmentQuestions:[{id:1,question:"A/B测试中，实验组和对照组的样本量应该完全相等。",correctAnswer:!1,explanation:"不一定相等，1:1分配是最常见的均匀分配，但不是必须的。有时也会用不均匀分配。",commonMistake:"认为必须1:1分配。"},{id:2,question:"p值小于0.05说明新方案一定比旧方案好。",correctAnswer:!1,explanation:"p值只是说差异显著，不代表实际业务价值。需要综合效应大小和业务成本判断。",commonMistake:"过度解读p值。"},{id:3,question:"置信区间越窄，说明估计越精确。",correctAnswer:!0,explanation:"窄的置信区间表示估计的精确度高，不确定性小。",commonMistake:"不清楚置信区间宽窄的含义。"},{id:4,question:"可以使用历史数据做A/B测试的对照参考。",correctAnswer:!1,explanation:"A/B测试要求实验组和对照组同时存在且条件一致，历史数据无法控制同期因素。",commonMistake:"误以为可以用历史数据做对照。"},{id:5,question:"如果A/B测试结果不显著，就不应该上线新方案。",correctAnswer:!1,explanation:"不显著只说明没有足够证据证明差异，也可能效应太小虽存在但无实际价值，需结合业务判断。",commonMistake:"将统计不显著等同于业务无价值。"},{id:6,question:"效应量（Effect Size）可以告诉我们差异的实际大小，而不仅是统计显著性。",correctAnswer:!0,explanation:"效应量如Cohen's d表示标准化后的差异大小，比p值更能反映实际业务意义。",commonMistake:"只关注p值忽视效应量。"},{id:7,question:"A/B测试可以检测到所有真实存在的差异。",correctAnswer:!1,explanation:"A/B测试的统计功效不是100%，样本量不足时可能无法检测到真实存在的差异（第二类错误）。",commonMistake:"以为统计检验是万能的。"},{id:8,question:'A/B测试中，" novelty effect"是指用户因为好奇而短期表现异常。',correctAnswer:!0,explanation:"新奇效应指用户因新鲜感而初期行为异常，随着时间推移会回归正常，影响长期指标判断。",commonMistake:"不清楚新奇效应的概念。"},{id:9,question:"统计显著性意味着业务显著性。",correctAnswer:!1,explanation:"统计显著不等于业务显著，还需考虑效应大小和实施成本。",commonMistake:"混淆统计显著性和业务显著性。"},{id:10,question:"在实验前应该计算所需的最小样本量。",correctAnswer:!0,explanation:"提前计算样本量可以避免实验周期过长或样本量不足导致结果不可靠。",commonMistake:"不进行样本量计算。"}],codingChallenges:[{id:1,description:"【综合实战】完成完整的A/B测试分析：读取数据，检验两组分组均衡性，计算转化率差异、卡方检验p值、95%置信区间，并给出是否应该全量上线的建议。",initialCode:`import pandas as pd
import numpy as np
from scipy import stats

df = pd.read_csv("datasets/ab_test.csv")

# 请编写代码：
# 1. 检验两组分组均衡性（样本量比例）
# 2. 计算各组转化率
# 3. 卡方检验判断显著性
# 4. 计算置信区间
# 5. 给出上线建议
`,expectedOutput:`分组均衡性检验：...
转化率对比：...
显著性检验结果：...
置信区间：...
上线建议：...`,correctAnswer:`import pandas as pd
import numpy as np
from scipy import stats

df = pd.read_csv("datasets/ab_test.csv")

# 分组均衡性检验
control = df[df["group"] == "control"]
treatment = df[df["group"] == "treatment"]
print(f"对照组样本量：{len(control)}")
print(f"实验组样本量：{len(treatment)}")
ratio = len(control) / len(treatment)
print(f"对照组/实验组比例：{ratio:.2f}（理想值1.0）")

# 各组转化率
control_rate = control["conversion"].mean()
treatment_rate = treatment["conversion"].mean()
lift = (treatment_rate - control_rate) / control_rate * 100
print(f"\\n对照组转化率：{control_rate:.2%}")
print(f"实验组转化率：{treatment_rate:.2%}")
print(f"相对提升：{lift:.2f}%")

# 卡方检验
from scipy.stats import chi2_contingency
contingency = pd.crosstab(df["group"], df["conversion"])
chi2, p_value, dof, expected = chi2_contingency(contingency)
print(f"\\n卡方检验p值：{p_value:.4f}")
print(f"显著性：{'是' if p_value < 0.05 else '否'}（α=0.05）")

# 置信区间
p_pooled = df["conversion"].mean()
n1, n2 = len(control), len(treatment)
se = np.sqrt(p_pooled * (1 - p_pooled) * (1/n1 + 1/n2))
z = 1.96
diff = treatment_rate - control_rate
ci_lower = diff - z * se
ci_upper = diff + z * se
print(f"\\n转化率差异95%置信区间：[{ci_lower:.4f}, {ci_upper:.4f}]")

# 上线建议
print("\\n=== 上线建议 ===")
if p_value < 0.05 and lift > 0:
    print("✓ 建议全量上线：实验组显著优于对照组")
elif p_value < 0.05 and lift < 0:
    print("✗ 不建议上线：实验组反而下降")
else:
    print("△ 建议继续观察：差异不显著")`,commonMistake:"不懂置信区间计算、不会综合判断给出建议。"},{id:2,description:"【综合实战】进行细分维度的A/B测试分析：按设备类型（mobile/desktop/tablet）分组，分析各设备的转化率差异，找出哪个设备群体对新方案更敏感，并给出分设备的上线建议。",initialCode:`import pandas as pd
import numpy as np
from scipy.stats import chi2_contingency

df = pd.read_csv("datasets/ab_test.csv")

# 请编写代码：
# 1. 按设备类型和分组交叉统计
# 2. 计算各设备类型的转化率差异
# 3. 进行卡方检验
# 4. 找出最敏感的设备群体
# 5. 给出分设备上线建议
`,expectedOutput:`各设备转化率对比：...
细分分析结果：...
最敏感设备：...
分设备上线建议：...`,correctAnswer:`import pandas as pd
import numpy as np
from scipy.stats import chi2_contingency

df = pd.read_csv("datasets/ab_test.csv")

# 按设备和分组交叉统计
print("各设备各组转化情况：")
device_analysis = df.groupby(["device", "group"]).agg({
    "conversion": ["sum", "count", "mean"]
}).round(4)
device_analysis.columns = ["转化数", "样本数", "转化率"]
print(device_analysis)

# 计算各设备的转化率差异
print("\\n各设备转化率差异分析：")
devices = df["device"].unique()
sensitive_device = None
max_lift = 0

for device in devices:
    dev_data = df[df["device"] == device]
    ctrl = dev_data[dev_data["group"] == "control"]["conversion"].mean()
    treat = dev_data[dev_data["group"] == "treatment"]["conversion"].mean()
    lift = (treat - ctrl) / ctrl * 100 if ctrl > 0 else 0
    
    # 卡方检验
    contingency = pd.crosstab(dev_data["group"], dev_data["conversion"])
    if contingency.shape == (2, 2):
        chi2, p_value, _, _ = chi2_contingency(contingency)
        sig = "显著" if p_value < 0.05 else "不显著"
    else:
        p_value = 1.0
        sig = "样本不足"
    
    print(f"  {device}: 对照组{ctrl:.2%} → 实验组{treat:.2%}，提升{lift:.1f}%，{sig}")
    
    if lift > max_lift and p_value < 0.05:
        max_lift = lift
        sensitive_device = device

print(f"\\n最敏感设备群体：{sensitive_device}（提升{max_lift:.1f}%）")

# 分设备上线建议
print("\\n=== 分设备上线建议 ===")
for device in devices:
    dev_data = df[df["device"] == device]
    ctrl = dev_data[dev_data["group"] == "control"]["conversion"].mean()
    treat = dev_data[dev_data["group"] == "treatment"]["conversion"].mean()
    lift = (treat - ctrl) / ctrl * 100 if ctrl > 0 else 0
    
    if lift > 5:
        print(f"  {device}：✓ 建议全量上线（提升{lift:.1f}%）")
    elif lift > 0:
        print(f"  {device}：△ 建议小流量观察")
    else:
        print(f"  {device}：✗ 不建议上线")`,commonMistake:"不会分组分析、混淆总体和细分结论。"}]},"07-0":{title:"销量时间序列分析 - 综合练习",quizQuestions:[{id:1,question:'时间序列分解中的"趋势"指什么？',options:["固定周期的波动","无法解释的随机波动","长期的变化方向","季节性变化"],correctAnswer:2,explanation:"趋势(Trend)是时间序列长期的变化方向，可能是上升、下降或保持平稳。",commonMistake:"混淆趋势和季节性的定义。"},{id:2,question:"移动平均的作用是？",options:["预测未来值","平滑短期波动，展示趋势","消除季节性","检测异常值"],correctAnswer:1,explanation:"移动平均通过平均历史数据点来平滑短期波动，更清晰地展示长期趋势。",commonMistake:"误以为移动平均可以直接预测未来。"},{id:3,question:"同比增长率是和什么相比？",options:["上月","去年同期","年初","上一周"],correctAnswer:1,explanation:"同比是与去年同期相比，用于消除季节性影响，反映年度变化。",commonMistake:"混淆同比和环比的定义。"},{id:4,question:"MAE和RMSE的主要区别是？",options:["MAE对异常值更敏感","RMSE对异常值更敏感","两者完全相同","MAE总是大于RMSE"],correctAnswer:1,explanation:"RMSE通过平方放大异常值的影响，所以对异常值更敏感。",commonMistake:"不清楚两者区别。"},{id:5,question:"时间序列预测中，加性模型和乘性模型的选择取决于？",options:["数据量大小","季节性波动是否随趋势增加而增加","数据类型","无所谓"],correctAnswer:1,explanation:"如果季节性波动随趋势增加而增加，应该用乘性模型；否则用加性模型。",commonMistake:"随意选择模型类型。"},{id:6,question:"在时间序列中，白噪声（White Noise）的特征是？",options:["有明显的趋势","有季节性","序列间无相关性，纯粹随机波动","可以用移动平均预测"],correctAnswer:2,explanation:"白噪声是纯随机序列，没有任何可预测的模式，无法进行有意义的预测。",commonMistake:"误以为白噪声有规律。"},{id:7,question:'时间序列分析中，"季节性调整"的目的是？',options:["消除季节性，更清晰地看趋势","增强季节性","预测季节性","没有实际作用"],correctAnswer:0,explanation:"季节性调整去除季节性波动，使趋势和周期变化更明显，便于分析。",commonMistake:"忽视季节性调整的意义。"},{id:8,question:"环比增长率 = (本期值 - 上期值) / 上期值 * 100%。",options:["正确","错误，分子分母颠倒","错误，应该用同比","无法确定"],correctAnswer:0,explanation:"环比是与紧邻的上一个周期相比，反映短期变化。",commonMistake:"混淆同比和环比的计算公式。"},{id:9,question:"当时间序列存在明显趋势时，应该使用什么方法预测？",options:["简单移动平均","指数平滑法（如Holt-Winters）","朴素预测（用最后一个值）","随机游走"],correctAnswer:1,explanation:"带趋势的时间序列需要使用能捕捉趋势的模型，如Holt-Winters的线性趋势版本。",commonMistake:"用简单方法处理复杂序列。"},{id:10,question:"差分操作（differencing）可以消除趋势，使非平稳序列变得平稳。",options:["正确","错误，差分会增强趋势","错误，差分用于消除季节性","无法确定"],correctAnswer:0,explanation:"差分通过计算相邻时点的变化来消除趋势，是使序列平稳化的常用方法。",commonMistake:"不清楚差分的作用。"}],judgmentQuestions:[{id:1,question:"时间序列数据中，如果自相关（ACF）在多个滞后阶处显著不为零，说明数据存在趋势或季节性。",correctAnswer:!0,explanation:"ACF用于检测序列相关性，持续高值的ACF表明存在趋势或季节性模式。",commonMistake:"不会解读ACF图。"},{id:2,question:"移动平均的窗口越大，趋势线越平滑，但可能滞后越严重。",correctAnswer:!0,explanation:"大窗口平滑效果好，但对趋势变化的响应滞后也越大。",commonMistake:"不清楚窗口大小的权衡。"},{id:3,question:"时间序列预测中，RMSE越低说明模型越好，与MAE无关。",correctAnswer:!1,explanation:"RMSE和MAE都是评估指标，RMSE对大误差更敏感，两者结合能更全面评估模型。",commonMistake:"只依赖单一指标。"},{id:4,question:"差分操作（differencing）可以消除趋势，使非平稳序列变得平稳。",correctAnswer:!0,explanation:"差分通过计算相邻时点的变化来消除趋势，是使序列平稳化的常用方法。",commonMistake:"不清楚差分的作用。"},{id:5,question:"如果时间序列有明显的年度季节性，那么至少需要一年的数据才能捕捉季节模式。",correctAnswer:!0,explanation:"年度季节性需要覆盖完整年度周期才能识别，至少需要12个月（如果是月度数据）。",commonMistake:"数据不足时强行建模。"},{id:6,question:"时间序列中，离群点应该直接删除以保证预测准确性。",correctAnswer:!1,explanation:"离群点可能是真实的极端事件（如促销、灾害），应该调查原因并决定如何处理，而不是简单删除。",commonMistake:"盲目删除异常值。"},{id:7,question:"可以用ARIMA模型同时处理趋势和季节性。",correctAnswer:!0,explanation:"SARIMA（季节性ARIMA）可以同时建模趋势和季节性，通过设置(p,d,q)和(P,D,Q,s)参数。",commonMistake:"不知道SARIMA可以处理季节性。"},{id:8,question:"环比增长率 = (本期值 - 上期值) / 上期值 * 100%。",correctAnswer:!0,explanation:"环比是与紧邻的上一个周期相比，反映短期变化。",commonMistake:"混淆同比和环比的计算公式。"},{id:9,question:"移动平均可以准确预测未来的趋势。",correctAnswer:!1,explanation:"移动平均是平滑历史数据的方法，不能直接预测未来，只能作为预测的参考。",commonMistake:"误以为移动平均可以预测。"},{id:10,question:"时间序列分解中，残差（Residual）是无法解释的随机波动。",correctAnswer:!0,explanation:"残差是原始数据减去趋势、季节性后的剩余部分，代表无法解释的随机波动。",commonMistake:"不清楚残差的含义。"}],codingChallenges:[{id:1,description:"【综合实战】对销量数据进行完整的时间序列分析：加载数据并设置为时间索引，计算7日和30日移动平均，绘制趋势对比图，检测异常时间点（偏离均值超过2倍标准差），并计算同比和环比增长率。",initialCode:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/time_series_sales.csv")
df["date"] = pd.to_datetime(df["date"])
df = df.sort_values("date").set_index("date")

# 请编写代码：
# 1. 计算7日和30日移动平均
# 2. 绘制趋势对比图
# 3. 检测异常时间点（偏离均值>2倍标准差）
# 4. 计算同比和环比增长率
`,expectedOutput:`趋势对比图
异常时间点：...
同比/环比增长率：...`,correctAnswer:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/time_series_sales.csv")
df["date"] = pd.to_datetime(df["date"])
df = df.sort_values("date").set_index("date")

# 移动平均
df["ma_7"] = df["sales"].rolling(window=7).mean()
df["ma_30"] = df["sales"].rolling(window=30).mean()

# 趋势对比图
plt.figure(figsize=(14, 6))
plt.plot(df.index, df["sales"], alpha=0.5, label="原始数据")
plt.plot(df.index, df["ma_7"], linewidth=2, label="7日均线")
plt.plot(df.index, df["ma_30"], linewidth=2, label="30日均线")
plt.xlabel("日期")
plt.ylabel("销量")
plt.title("销量趋势分析")
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("trend_analysis.png")
plt.close()

# 异常检测
mean_sales = df["sales"].mean()
std_sales = df["sales"].std()
lower = mean_sales - 2 * std_sales
upper = mean_sales + 2 * std_sales
outliers = df[(df["sales"] < lower) | (df["sales"] > upper)]
print(f"异常检测：均值={mean_sales:.0f}，标准差={std_sales:.0f}")
print(f"正常范围：[{lower:.0f}, {upper:.0f}]")
print(f"发现 {len(outliers)} 个异常时间点")
if len(outliers) > 0:
    print(outliers[["sales"]])

# 同比和环比
df["环比"] = df["sales"].pct_change() * 100
df["同比"] = df["sales"].pct_change(periods=12) * 100
print("\\n增长率：")
print(df[["sales", "环比", "同比"]].tail(10))`,commonMistake:"不会同时计算多个移动平均、异常检测逻辑错误。"},{id:2,description:"【综合实战】实现简单的销量预测：使用过去7天的移动平均预测下一天，计算预测误差MAE和RMSE，并用预测值填充未来3天的销量，绘制预测对比图。",initialCode:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/time_series_sales.csv")
df["date"] = pd.to_datetime(df["date"])
df = df.sort_values("date").set_index("date")

# 请编写代码：
# 1. 使用7日移动平均预测
# 2. 计算MAE和RMSE
# 3. 预测未来3天销量
# 4. 绘制预测对比图
`,expectedOutput:`MAE：...
RMSE：...
未来3天预测：...
预测对比图`,correctAnswer:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/time_series_sales.csv")
df["date"] = pd.to_datetime(df["date"])
df = df.sort_values("date").set_index("date")

# 移动平均预测
df["forecast"] = df["sales"].rolling(window=7).mean().shift(1)
df["error"] = df["sales"] - df["forecast"]
df["abs_error"] = abs(df["error"])

# 计算误差指标
valid_data = df.dropna(subset=["forecast"])
mae = valid_data["abs_error"].mean()
rmse = np.sqrt((valid_data["error"] ** 2).mean())
print(f"预测误差评估：")
print(f"  MAE（平均绝对误差）：{mae:.2f}")
print(f"  RMSE（均方根误差）：{rmse:.2f}")

# 预测未来3天
last_7_avg = df["sales"].tail(7).mean()
last_date = df.index[-1]
future_dates = pd.date_range(start=last_date + pd.Timedelta(days=1), periods=3)
future_sales = [last_7_avg] * 3
print(f"\\n未来3天销量预测：")
for date, sales in zip(future_dates, future_sales):
    print(f"  {date.strftime('%Y-%m-%d')}: {sales:.0f}")

# 预测对比图
plt.figure(figsize=(12, 6))
plt.plot(df.index[-30:], df["sales"].tail(30), "b-", label="实际销量", marker="o")
plt.plot(df.index[-30:], df["forecast"].tail(30), "r--", label="预测值", marker="x")
plt.axhline(y=last_7_avg, color="green", linestyle=":", label=f"未来预测({last_7_avg:.0f})")
plt.xlabel("日期")
plt.ylabel("销量")
plt.title("销量预测对比（最后30天+未来3天）")
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("forecast_comparison.png")
plt.close()
print("\\n预测对比图已保存")`,commonMistake:"shift(1)忘记设置、RMSE计算错误、预测逻辑不对。"}]},"08-0":{title:"数据分析特征工程 - 综合练习",quizQuestions:[{id:1,question:"特征工程的目的是？",options:["减少数据量","将原始数据转换为模型可用特征","删除数据","可视化数据"],correctAnswer:1,explanation:"特征工程是将原始数据转换为模型可用特征的过程，提升模型效果。",commonMistake:"对特征工程的核心目的理解不清。"},{id:2,question:"Z-Score标准化和MinMaxScaler的主要区别是？",options:["两者完全相同","Z-Score转换为均值0标准差1，MinMaxScaler转换到[0,1]","Z-Score转换到[0,1]，MinMaxScaler转换到均值0","Z-Score用于分类，MinMaxScaler用于回归"],correctAnswer:1,explanation:"Z-Score是标准化（基于分布），MinMaxScaler是归一化（基于范围）。",commonMistake:"混淆两者的变换方式。"},{id:3,question:"特征选择和特征提取的区别是？",options:["特征选择从原特征中挑选，特征提取生成新特征","两者没有区别","特征选择生成新特征，特征提取挑选原特征","特征提取用于监督学习"],correctAnswer:0,explanation:"特征选择从现有特征中选择子集，特征提取（如PCA）通过变换生成新特征。",commonMistake:"混淆两者的概念。"},{id:4,question:"高维数据（如1000个特征）进行PCA降维时，应该？",options:["直接降维到2维","先确定保留多少主成分（如保留80%方差），再降维","降维到10维","不使用PCA"],correctAnswer:1,explanation:"应该基于方差解释比例确定主成分数量，而不是随意设定目标维度。",commonMistake:"盲目设定降维目标。"},{id:5,question:"特征交叉（Feature Crossing）的作用是？",options:["减少特征数量","捕捉特征间的非线性关系","提高计算速度","消除噪声"],correctAnswer:1,explanation:"特征交叉通过组合原有特征，捕捉特征间的交互作用和非线性关系。",commonMistake:"不清楚特征交叉的意义。"},{id:6,question:"树模型（如随机森林、GBDT）对特征缩放敏感吗？",options:["非常敏感，必须标准化","不敏感，基于分裂点判断","取决于树的数量","只对类别特征敏感"],correctAnswer:1,explanation:"树模型基于特征阈值分裂，不需要特征缩放。但线性模型和神经网络需要缩放。",commonMistake:"以为所有模型都需要特征缩放。"},{id:7,question:"One-Hot编码和Label编码的区别是？",options:["两者完全相同","One-Hot增加维度，Label编码保持单一数值","Label编码用于数值特征","没有区别"],correctAnswer:1,explanation:"One-Hot将类别扩展为多个0/1列，Label编码将类别映射为整数，适用于不同场景。",commonMistake:"混淆编码方式。"},{id:8,question:"共线性（multicollinearity）特征对模型的影响是？",options:["提升模型效果","增加模型稳定性","导致模型不稳定、解释困难","无影响"],correctAnswer:2,explanation:"共线性特征信息冗余，导致模型权重不稳定、解释困难，应该处理。",commonMistake:"忽视共线性的影响。"},{id:9,question:"特征工程越复杂越好，特征越多模型效果越强。",options:["正确","错误，过多无关或冗余特征会降低模型泛化能力","无法确定","取决于数据量"],correctAnswer:1,explanation:"过多无关或冗余特征会降低模型泛化能力，增加过拟合风险。",commonMistake:"追求特征数量忽视质量。"},{id:10,question:"特征标准化应该在划分训练集和测试集之后进行。",options:["正确","错误，应该在划分之前","无所谓","只能在划分之前"],correctAnswer:0,explanation:"应该先用训练集拟合scaler，再用训练集的scaler变换测试集，防止数据泄露。",commonMistake:"不注意数据泄露问题。"}],judgmentQuestions:[{id:1,question:"特征工程越复杂越好，特征越多模型效果越强。",correctAnswer:!1,explanation:"过多无关或冗余特征会降低模型泛化能力，增加过拟合风险。",commonMistake:"追求特征数量忽视质量。"},{id:2,question:"特征标准化应该在划分训练集和测试集之后进行。",correctAnswer:!0,explanation:"应该先用训练集拟合scaler，再用训练集的scaler变换测试集，防止数据泄露。",commonMistake:"不注意数据泄露问题。"},{id:3,question:"PCA降维后，主成分是原始特征的线性组合。",correctAnswer:!0,explanation:"PCA通过正交变换将原始特征投影到主成分空间，主成分是原始特征的线性组合。",commonMistake:"不清楚PCA的原理。"},{id:4,question:"对于高基类别特征（如用户ID），可以使用One-Hot编码。",correctAnswer:!1,explanation:"高基类别特征（如用户ID可能有数百万个）使用One-Hot会产生极高维度，应该用标签编码或目标编码。",commonMistake:"对高基类别特征处理不当。"},{id:5,question:"特征重要性（Feature Importance）可以帮助我们理解模型，但不代表因果关系。",correctAnswer:!0,explanation:"特征重要性反映特征对预测的贡献，但相关不等于因果。",commonMistake:"过度解读特征重要性。"},{id:6,question:'在特征工程中，"时间戳"应该直接作为数值特征使用。',correctAnswer:!1,explanation:"时间戳应该提取出年、月、日、小时、星期等特征，或计算与特定时间点的间隔。",commonMistake:"直接使用原始时间戳。"},{id:7,question:"分箱（Binning）可以将连续特征离散化，有助于处理异常值和增加模型鲁棒性。",correctAnswer:!0,explanation:"分箱将连续值分段，可以减少异常值影响，使模型更鲁棒。",commonMistake:"不清楚分箱的作用。"},{id:8,question:"目标编码（Target Encoding）可以直接用测试集数据计算编码值。",correctAnswer:!1,explanation:"目标编码只能用训练集计算，防止数据泄露。测试集应该用训练集计算的编码映射。",commonMistake:"不注意目标编码的数据泄露。"},{id:9,question:"特征缩放对树模型（如随机森林）的效果没有影响。",correctAnswer:!0,explanation:"树模型基于特征阈值分裂，不受特征量纲影响。",commonMistake:"以为所有模型都需要特征缩放。"},{id:10,question:"L1正则化可以产生稀疏特征，即自动进行特征选择。",correctAnswer:!0,explanation:"L1正则化会使部分权重为0，从而实现特征选择的效果。",commonMistake:"不清楚L1正则化的作用。"}],codingChallenges:[{id:1,description:"【综合实战】完成完整的特征工程流程：读取客户数据，对数值特征进行Z-Score标准化，对类别特征（如城市）进行One-Hot编码，计算特征间的相关性矩阵并找出高相关特征对（>0.9），输出处理后的特征矩阵形状。",initialCode:`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

df = pd.read_csv("datasets/customer_features.csv")

# 请编写代码：
# 1. 对数值特征进行Z-Score标准化
# 2. 对城市等类别特征进行One-Hot编码
# 3. 计算相关性矩阵
# 4. 找出高相关特征对（>0.9）
`,expectedOutput:`标准化后特征统计：...
One-Hot编码后形状：...
高相关特征对：...`,correctAnswer:`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler

df = pd.read_csv("datasets/customer_features.csv")

# 数值特征标准化
num_features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
scaler = StandardScaler()
df_scaled = df.copy()
df_scaled[num_features] = scaler.fit_transform(df[num_features])
print("Z-Score标准化后统计：")
print(df_scaled[num_features].describe().round(2))

# 类别特征One-Hot编码
cat_features = ["city"]
df_encoded = pd.get_dummies(df_scaled, columns=cat_features, drop_first=True)
print(f"\\n编码后特征矩阵形状：{df_encoded.shape}")

# 相关性矩阵
corr_matrix = df_scaled[num_features].corr()
print("\\n相关性矩阵：")
print(corr_matrix.round(3))

# 高相关特征对
print("\\n高相关特征对（|r|>0.9）：")
high_corr = []
for i in range(len(corr_matrix.columns)):
    for j in range(i+1, len(corr_matrix.columns)):
        if abs(corr_matrix.iloc[i, j]) > 0.9:
            high_corr.append((corr_matrix.columns[i], corr_matrix.columns[j], corr_matrix.iloc[i, j]))
if high_corr:
    for f1, f2, r in high_corr:
        print(f"  {f1} <-> {f2}: {r:.3f}")
else:
    print("  无高相关特征对")`,commonMistake:"标准化和编码顺序错误、不会用get_dummies、相关性计算错误。"},{id:2,description:"【综合实战】使用PCA进行降维分析：读取客户特征数据，标准化后进行PCA，计算各主成分的方差解释比例，绘制累积方差解释比例图，选取保留95%方差所需的主成分数量，并输出降维后的数据形状。",initialCode:`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/customer_features.csv")
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]

# 请编写代码：
# 1. 标准化特征
# 2. 进行PCA
# 3. 计算方差解释比例
# 4. 绘制累积方差图
# 5. 选取保留95%方差的主成分数
`,expectedOutput:`各主成分方差解释：...
累积方差图
保留95%方差所需主成分数：...
降维后形状：...`,correctAnswer:`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

df = pd.read_csv("datasets/customer_features.csv")
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]
X = df[features]

# 标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# PCA
pca_full = PCA()
pca_full.fit(X_scaled)

# 方差解释比例
explained_var = pca_full.explained_variance_ratio_
cumsum_var = np.cumsum(explained_var)

print("各主成分方差解释比例：")
for i, (ev, cv) in enumerate(zip(explained_var, cumsum_var)):
    print(f"  PC{i+1}: {ev:.2%}（累积: {cv:.2%}）")

# 累积方差图
plt.figure(figsize=(10, 5))
plt.bar(range(1, len(explained_var)+1), explained_var, alpha=0.6, label="单个主成分")
plt.plot(range(1, len(cumsum_var)+1), cumsum_var, "ro-", label="累积方差")
plt.axhline(y=0.95, color="green", linestyle="--", label="95%阈值")
plt.xlabel("主成分")
plt.ylabel("方差解释比例")
plt.title("PCA方差解释比例")
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("pca_variance.png")
plt.close()

# 保留95%方差的主成分数
n_components_95 = np.argmax(cumsum_var >= 0.95) + 1
print(f"\\n保留95%方差所需主成分数：{n_components_95}")

# 降维
pca = PCA(n_components=n_components_95)
X_pca = pca.fit_transform(X_scaled)
print(f"降维后数据形状：{X_pca.shape}")`,commonMistake:"不懂如何确定主成分数量、方差比例计算错误、图表绘制不当。"}]},"09-0":{title:"全域数据异常值检测 - 综合练习",quizQuestions:[{id:1,question:"异常值检测中，3σ原则适用于什么分布？",options:["任意分布","近似正态分布","偏态分布","均匀分布"],correctAnswer:1,explanation:"3σ原则基于正态分布假设，数据落在3σ之外的概率很小。",commonMistake:"忽略3σ原则的分布假设。"},{id:2,question:"IQR四分位距方法中，异常值的范围是？",options:["Q1 - IQR 到 Q3 + IQR","Q1 - 1.5*IQR 到 Q3 + 1.5*IQR","Q1 - IQR 到 Q3 + 1.5*IQR","Q1 - 1.5*IQR 到 Q3 + IQR"],correctAnswer:1,explanation:"IQR方法中，异常值定义为小于Q1-1.5*IQR或大于Q3+1.5*IQR的值。",commonMistake:"记错了IQR方法的阈值系数。"},{id:3,question:"孤立森林（IsolationForest）的核心思想是？",options:["找到密集区域","异常点更容易被孤立","计算距离","聚类分析"],correctAnswer:1,explanation:"异常点更容易被随机切分孤立出来，因此路径长度更短。",commonMistake:"不理解孤立森林的原理。"},{id:4,question:"多变量异常检测相比单变量的优势是？",options:["计算更快","能发现联合异常","更简单","不需要标准化"],correctAnswer:1,explanation:"多变量检测能发现那些单个变量正常但联合起来是异常的情况。",commonMistake:"忽视多变量分析的重要性。"},{id:5,question:'在异常值处理中，"删除"策略适用于什么情况？',options:["所有异常值","明确是数据录入错误或测量仪故障导致的异常","真实存在的极端值","所有缺失值"],correctAnswer:1,explanation:"只有当异常值确定是错误或故障导致时才应该删除，真实极端值应该保留或特殊处理。",commonMistake:"过度删除异常值。"},{id:6,question:"Z-Score大于3的点在正态分布下约占多少比例？",options:["约1%","约0.3%","约5%","约10%"],correctAnswer:1,explanation:"在正态分布下，约0.27%的数据点会落在±3σ之外。",commonMistake:"不清楚正态分布的概率。"},{id:7,question:"MAD（绝对中位差）方法相比IQR方法的优势是？",options:["更简单","对异常值更鲁棒","计算更快","更准确"],correctAnswer:1,explanation:"MAD使用中位数，对异常值完全不敏感，而IQR虽然鲁棒但对极端异常值仍敏感。",commonMistake:"不清楚MAD的鲁棒性优势。"},{id:8,question:"异常值对以下哪个统计量影响最大？",options:["中位数","均值","众数","最大值"],correctAnswer:1,explanation:"均值对异常值最敏感，一个极端异常值会大幅改变均值。",commonMistake:"以为所有统计量都同样受异常值影响。"},{id:9,question:"异常值检测应该在特征工程之后进行。",options:["正确","错误，通常在数据清洗阶段进行","无所谓","取决于数据质量"],correctAnswer:1,explanation:"异常值检测通常在数据清洗阶段进行，早于特征工程。",commonMistake:"顺序安排错误。"},{id:10,question:"可以使用多个异常检测方法的结果进行综合判断。",options:["正确","错误，应该只用一个方法","无所谓","增加复杂度没有意义"],correctAnswer:0,explanation:"综合多种方法（如IQR、Z-Score、孤立森林）的结果可以更全面地识别异常。",commonMistake:"只依赖单一方法。"}],judgmentQuestions:[{id:1,question:"异常值就是错误数据，应该全部删除或替换。",correctAnswer:!1,explanation:"异常值可能是真实的极端情况（如高额订单），应该调查原因后再决定处理方式。",commonMistake:"一刀切处理异常值。"},{id:2,question:"IQR方法不需要假设数据分布，适用于任何分布的数据。",correctAnswer:!0,explanation:"IQR是基于分位数的非参数方法，不依赖数据分布假设。",commonMistake:"以为IQR需要正态分布假设。"},{id:3,question:"可以使用多个异常检测方法的结果进行综合判断。",correctAnswer:!0,explanation:"综合多种方法（如IQR、Z-Score、孤立森林）的结果可以更全面地识别异常。",commonMistake:"只依赖单一方法。"},{id:4,question:"孤立森林中，contamination参数表示数据中真实的异常比例。",correctAnswer:!1,explanation:"contamination是用户预期的异常比例，用于设置决策边界的阈值，不一定是真实比例。",commonMistake:"误解contamination的含义。"},{id:5,question:"如果数据中存在大量异常值，使用均值填充会比中位数填充效果更好。",correctAnswer:!1,explanation:"异常值会严重影响均值，此时应该使用中位数填充。",commonMistake:"不知道异常值对均值的影响。"},{id:6,question:"可以通过可视化（如箱线图、散点图）直观地发现异常值。",correctAnswer:!0,explanation:"可视化是发现异常值的重要手段，箱线图能清晰展示边界外的点。",commonMistake:"忽视可视化在异常检测中的作用。"},{id:7,question:"业务规则检测和统计方法检测的异常值应该完全一致。",correctAnswer:!1,explanation:"业务规则基于常识（如年龄>150），统计方法基于数据分布，两者检测结果可能不同。",commonMistake:"混淆两种检测方法。"},{id:8,question:"异常值检测前不需要了解数据的业务背景。",correctAnswer:!1,explanation:"了解业务背景对于判断异常值是否有意义至关重要。",commonMistake:"忽视业务知识的重要性。"},{id:9,question:"Z-Score方法对异常值的敏感度高于IQR方法。",correctAnswer:!0,explanation:"Z-Score基于均值和标准差，而均值和标准差都受异常值影响，所以Z-Score对异常值更敏感。",commonMistake:"不清楚两种方法的敏感性差异。"},{id:10,question:"异常值处理后应该进行验证，确保处理正确。",correctAnswer:!0,explanation:"处理异常值后应验证结果，确保没有引入新问题。",commonMistake:"处理完不验证。"}],codingChallenges:[{id:1,description:"【综合实战】使用多种方法进行综合异常检测：读取客户数据，首先用业务规则检测（年龄<0或>120，收入<0），然后用IQR方法检测各数值列异常，最后用孤立森林检测多维异常，输出各方法检测到的异常记录并比较。",initialCode:`import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

df = pd.read_csv("datasets/customer_features.csv")
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]

# 请编写代码：
# 1. 业务规则检测
# 2. IQR方法检测各列
# 3. 孤立森林检测
# 4. 比较各方法结果
`,expectedOutput:`业务规则异常：...
IQR异常：...
孤立森林异常：...
综合分析：...`,correctAnswer:`import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

df = pd.read_csv("datasets/customer_features.csv")
features = ["age", "income", "purchase_freq", "avg_order_value", "total_spent"]

# 业务规则检测
print("=== 业务规则检测 ===")
rules_violations = df[(df["age"] < 0) | (df["age"] > 120) | (df["income"] < 0)]
print(f"发现 {len(rules_violations)} 条业务规则违规")

# IQR方法检测
print("\\n=== IQR方法检测 ===")
iqr_outliers = set()
for col in features:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    outliers_idx = df[(df[col] < lower) | (df[col] > upper)].index
    iqr_outliers.update(outliers_idx)
    print(f"  {col}: 发现 {len(outliers_idx)} 个异常值")
print(f"IQR共检测到 {len(iqr_outliers)} 条异常记录")

# 孤立森林检测
print("\\n=== 孤立森林检测 ===")
X = df[features]
iso_forest = IsolationForest(contamination=0.1, random_state=42)
df["anomaly_iso"] = iso_forest.fit_predict(X)
anomaly_idx = df[df["anomaly_iso"] == -1].index
print(f"发现 {len(anomaly_idx)} 条异常记录")

# 综合分析
print("\\n=== 综合分析 ===")
rules_idx = set(rules_violations.index)
all_outliers = rules_idx | iqr_outliers | set(anomaly_idx)
print(f"各方法共检测到 {len(all_outliers)} 条唯一异常记录")

overlap = rules_idx & iqr_outliers & set(anomaly_idx)
print(f"三种方法都检测到的：{len(overlap)} 条")`,commonMistake:"不会综合多种方法、忽略方法间的差异。"},{id:2,description:"【综合实战】对检测到的异常值进行处理：根据异常类型分别采用删除、替换或保留策略，更新数据集，并验证处理后的数据质量（检查分布、缺失值、统计指标）。",initialCode:`import pandas as pd
import numpy as np

# 假设已有df和检测到的异常索引
# 请编写代码：
# 1. 区分不同类型的异常（明显错误 vs 极端值）
# 2. 对明显错误进行删除或替换
# 3. 对极端值进行标记
# 4. 验证处理后的数据质量
`,expectedOutput:`异常处理方案：...
处理后数据统计：...
数据质量验证：...`,correctAnswer:`import pandas as pd
import numpy as np

df_clean = df.copy()
df_clean["is_anomaly"] = 0

# 业务规则异常（明显错误）- 替换为中位数
print("=== 业务规则异常处理 ===")
business_errors = df_clean[(df_clean["age"] < 0) | (df_clean["age"] > 120) | (df_clean["income"] < 0)]
print(f"发现 {len(business_errors)} 条明显错误")
for idx in business_errors.index:
    if df_clean.loc[idx, "age"] < 0 or df_clean.loc[idx, "age"] > 120:
        df_clean.loc[idx, "age"] = df_clean["age"].median()
    if df_clean.loc[idx, "income"] < 0:
        df_clean.loc[idx, "income"] = df_clean["income"].median()

# 统计异常（极端值）- 标记但不删除
print("\\n=== 统计异常标记 ===")
outlier_mask = df_clean.index.isin(iqr_outliers) & ~df_clean.index.isin(business_errors.index)
df_clean.loc[outlier_mask, "is_anomaly"] = 1
print(f"标记 {outlier_mask.sum()} 条极端值为异常（保留）")

# 处理后数据质量验证
print("\\n=== 处理后数据质量验证 ===")
print("数据统计：")
print(df_clean[features].describe().round(2))

print("\\n缺失值检查：")
print(df_clean.isnull().sum())

print("\\n异常标记分布：")
print(df_clean["is_anomaly"].value_counts())

# 保存
df_clean.to_csv("customer_data_cleaned.csv", index=False)
print("\\n处理后数据已保存")`,commonMistake:"处理策略不当、验证不完整。"}]},"10-0":{title:"多源数据集融合整合 - 综合练习",quizQuestions:[{id:1,question:"pd.concat和pd.merge的主要区别是？",options:["concat用于纵向拼接，merge用于横向合并","concat用于横向合并，merge用于纵向拼接","两者功能完全相同","merge更快"],correctAnswer:0,explanation:"concat用于纵向（增加行）拼接相同结构的表，merge用于横向（增加列）按键合并。",commonMistake:"混淆两种合并方式的使用场景。"},{id:2,question:"inner join和left join的区别是？",options:["inner只保留左边有的键，left保留全部","inner只保留两边都有的键","left只保留右边有的键","两者没有区别"],correctAnswer:1,explanation:"inner join只保留两表键值匹配的记录，left join保留左表全部记录。",commonMistake:"混淆inner和left join的行为。"},{id:3,question:"多表关联时需要注意什么？",options:["随意合并顺序","避免笛卡尔积","不需要考虑键的类型","表越多越好"],correctAnswer:1,explanation:"多表关联要注意合并顺序和键的匹配，避免产生笛卡尔积导致数据量爆炸。",commonMistake:"忽视笛卡尔积的风险。"},{id:4,question:"当两表有重名字段时，merge会如何处理？",options:["报错","自动添加后缀区分","覆盖","跳过"],correctAnswer:1,explanation:"merge会自动给重名字段添加后缀区分，可用suffixes参数指定。",commonMistake:"不清楚merge如何处理重名字段。"},{id:5,question:"数据融合后验证的内容不包括？",options:["缺失值检查","匹配率检查","删除所有不匹配记录","重复记录检查"],correctAnswer:2,explanation:"验证包括缺失值、匹配率、重复记录检查，但不应盲目删除所有不匹配记录。",commonMistake:"过于激进地处理不匹配数据。"},{id:6,question:"merge的how参数有哪些选项？",options:["only","inner, outer, left, right, cross","join, union","first, last"],correctAnswer:1,explanation:"merge的how参数有：inner, outer, left, right, cross。",commonMistake:"记不全how的选项。"},{id:7,question:"concat时ignore_index=True的作用是？",options:["忽略索引","重置索引为0,1,2...","删除索引","保留原索引"],correctAnswer:1,explanation:"ignore_index=True会丢弃原有索引，重置为0,1,2...的整数索引。",commonMistake:"不清楚ignore_index参数的作用。"},{id:8,question:"笛卡尔积在什么情况下会产生？",options:["使用inner join时","使用cross join或两表无关联键时","使用left join时","永远不会"],correctAnswer:1,explanation:"当两表没有正确的关联键或使用cross join时，会产生笛卡尔积（所有行两两组合）。",commonMistake:"不清楚笛卡尔积的产生条件。"},{id:9,question:"使用merge时，如果键名不同，可以用left_on和right_on指定。",options:["正确","错误，必须先重命名","无所谓","只能用on参数"],correctAnswer:0,explanation:"当两表的关联键列名不同时，用left_on和right_on分别指定。",commonMistake:"不知道如何处理键名不同的情况。"},{id:10,question:"数据融合时，应该先处理质量差的表，再处理质量好的表。",options:["正确","错误，通常以质量最好的表作为主表","无所谓","同时处理"],correctAnswer:1,explanation:"通常先以质量最好的表作为主表，再关联其他表，避免误差传播。",commonMistake:"合并顺序安排不当。"}],judgmentQuestions:[{id:1,question:"merge比join更灵活，可以基于任何列进行关联。",correctAnswer:!0,explanation:"merge可以基于任意列（或列的列表）进行关联，而join基于索引。",commonMistake:"以为join比merge更灵活。"},{id:2,question:"concat可以合并任意数量的DataFrame。",correctAnswer:!0,explanation:"pd.concat([df1, df2, df3, ...]) 可以合并多个DataFrame。",commonMistake:"以为concat只能合并两个。"},{id:3,question:"使用left join时，如果右表中没有匹配的键，对应列会填充为NaN。",correctAnswer:!0,explanation:"left join保留左表全部记录，右表无匹配时填充NaN。",commonMistake:"不清楚left join的填充规则。"},{id:4,question:"outer join是inner join和left join的组合。",correctAnswer:!1,explanation:"outer join（full join）返回两表所有记录，没有匹配的填充NaN。",commonMistake:"误解outer join的含义。"},{id:5,question:"合并后的数据中，如果左表有100行，右表有100行，merge后最多可能有10000行（笛卡尔积）。",correctAnswer:!0,explanation:"如果两表有重复的键又没有指定正确的合并方式，可能产生笛卡尔积。",commonMistake:"忽视笛卡尔积的风险。"},{id:6,question:"使用merge时，如果键名不同，可以用left_on和right_on指定。",correctAnswer:!0,explanation:"当两表的关联键列名不同时，用left_on和right_on分别指定。",commonMistake:"不知道如何处理键名不同的情况。"},{id:7,question:"concat的axis参数默认为0，表示纵向拼接。",correctAnswer:!0,explanation:"axis=0表示按行拼接（增加行），axis=1表示按列拼接（增加列）。",commonMistake:"记错axis的默认值。"},{id:8,question:"数据融合时，应该先处理质量差的表，再处理质量好的表。",correctAnswer:!1,explanation:"通常先以质量最好的表作为主表，再关联其他表，避免误差传播。",commonMistake:"合并顺序安排不当。"},{id:9,question:"left join和right join可以通过反转表的顺序互相替代。",correctAnswer:!0,explanation:"A left join B 等于 B right join A。",commonMistake:"不清楚left和right join的对称性。"},{id:10,question:"在融合后的数据中，应该删除所有包含NaN的行以保证数据质量。",correctAnswer:!1,explanation:"NaN可能是有意义的（如左连接中右表无匹配），不应盲目删除。",commonMistake:"过于激进地处理缺失值。"}],codingChallenges:[{id:1,description:"【综合实战】实现完整的多源数据融合：读取订单表、客户表、产品表三张表，使用left join将订单与客户关联，再与产品表关联，验证融合后的数据质量（缺失值、匹配率），并计算各维度的销售额统计。",initialCode:`import pandas as pd

orders = pd.read_csv("datasets/retail_orders.csv")
customers = pd.read_csv("datasets/customer_info.csv")
products = pd.read_csv("datasets/product_catalog.csv")

# 请编写代码：
# 1. 订单表关联客户表（left join）
# 2. 结果关联产品表（left join）
# 3. 验证数据质量
# 4. 各维度销售统计
`,expectedOutput:`融合后数据形状：...
数据质量报告：...
各维度销售统计：...`,correctAnswer:`import pandas as pd

orders = pd.read_csv("datasets/retail_orders.csv")
customers = pd.read_csv("datasets/customer_info.csv")
products = pd.read_csv("datasets/product_catalog.csv")

print(f"原始数据：订单{orders.shape}，客户{customers.shape}，产品{products.shape}")

# 订单关联客户
merged = pd.merge(orders, customers, on="customer_id", how="left", suffixes=("", "_customer"))
print(f"\\n关联客户后：{merged.shape}")

# 关联产品
merged = pd.merge(merged, products, on="product_id", how="left", suffixes=("", "_product"))
print(f"关联产品后：{merged.shape}")

# 数据质量验证
print("\\n=== 数据质量验证 ===")
print(f"总记录数：{len(merged)}")
print(f"客户匹配率：{merged["name"].notna().mean():.1%}")
print(f"产品匹配率：{merged["name_product"].notna().mean():.1%}")

print("\\n缺失值统计：")
missing = merged.isnull().sum()
missing_cols = missing[missing > 0]
for col, count in missing_cols.items():
    print(f"  {col}: {count} ({count/len(merged):.1%})")

# 各维度销售统计
print("\\n=== 各维度销售统计 ===")
print("\\n按客户统计（Top10）：")
customer_stats = merged.groupby("name").agg({
    "amount": ["sum", "mean", "count"]
}).round(2)
customer_stats.columns = ["销售额", "平均订单", "订单数"]
print(customer_stats.sort_values("销售额", ascending=False).head(10))

print("\\n按产品统计：")
product_stats = merged.groupby("name_product").agg({
    "amount": ["sum", "mean", "count"]
}).round(2)
product_stats.columns = ["销售额", "平均订单", "订单数"]
print(product_stats.sort_values("销售额", ascending=False))`,commonMistake:"多表关联顺序错误、不会验证数据质量、统计维度不全面。"},{id:2,description:'【综合实战】对融合后的宽表数据进行去重和冲突处理：检查重复订单ID，检查同一订单在不同时段的金额冲突（如有），对缺失的客户信息用"未知"填充，最终输出一份干净的分析用数据。',initialCode:`import pandas as pd

# 假设merged已经是融合后的宽表

# 请编写代码：
# 1. 检查重复订单ID
# 2. 检查金额冲突
# 3. 处理缺失值
# 4. 输出干净数据
`,expectedOutput:`重复订单检查：...
金额冲突检查：...
缺失值处理：...
最终数据：...`,correctAnswer:`import pandas as pd

# 检查重复订单
print("=== 重复订单检查 ===")
duplicated_orders = merged[merged["order_id"].duplicated(keep=False)]
print(f"发现 {len(duplicated_orders)} 条重复订单记录")
if len(duplicated_orders) > 0:
    print(duplicated_orders[["order_id", "name", "amount"]].head(10))
    merged = merged.drop_duplicates(subset=["order_id"], keep="last")
    print(f"去重后剩余 {len(merged)} 条记录")

# 检查金额冲突
print("\\n=== 金额冲突检查 ===")
amount_conflicts = merged.groupby("order_id")["amount"].nunique()
conflicted_orders = amount_conflicts[amount_conflicts > 1]
print(f"发现 {len(conflicted_orders)} 个订单存在金额冲突")

# 处理缺失值
print("\\n=== 缺失值处理 ===")
for col in ["name", "city", "name_product", "category"]:
    if col in merged.columns:
        missing_before = merged[col].isna().sum()
        merged[col] = merged[col].fillna("未知")
        print(f"  {col}: 填充{missing_before}个缺失值为"未知"")

# 最终数据
print("\\n=== 最终干净数据 ===")
print(f"数据形状：{merged.shape}")
print(f"列名：{list(merged.columns)}")

merged.to_csv("analysis_data_clean.csv", index=False)
print("\\n分析用数据已保存为 analysis_data_clean.csv")`,commonMistake:"不会处理冲突和重复、缺失值处理不当。"}]}};function oh(){const{projectId:i,sectionId:c}=co(),l=`${i}-${c}`,[u,f]=k.useState({}),[m,y]=k.useState({}),[v,A]=k.useState(""),[S,F]=k.useState(""),[E,b]=k.useState([]),[K,V]=k.useState([]),[L,T]=k.useState(!1),[I,U]=k.useState(!1),[ee,X]=k.useState(!1),[se,pe]=k.useState(0),[fe,we]=k.useState(0),[je,Le]=k.useState(0),[Ke,Ie]=k.useState(1200),ne=Pp[l]||Pp["01-0"];k.useEffect(()=>{ne&&(A(ne.codingChallenges[0].initialCode),F(ne.codingChallenges[1].initialCode),f({}),y({}),X(!1),b([]),V([]),Ie(1200))},[l]),k.useEffect(()=>{if(ee)return;const j=setInterval(()=>{Ie(g=>g<=1?(R(),0):g-1)},1e3);return()=>clearInterval(j)},[ee]);const Pe=j=>{const g=Math.floor(j/60),D=j%60;return`${String(g).padStart(2,"0")}:${String(D).padStart(2,"0")}`},ye=(j,g)=>{f(D=>({...D,[j]:g}))},De=(j,g)=>{y(D=>({...D,[j]:g}))},O=j=>{const g=j===1?T:U,D=j===1?b:V,J=j===1?ne.codingChallenges[0]:ne.codingChallenges[1];g(!0),D([]),setTimeout(()=>{const G=[];G.push("代码执行中..."),G.push(""),G.push("模拟运行结果："),G.push(J.expectedOutput),D(G),g(!1)},1e3)},R=()=>{let j=0;ne.quizQuestions.forEach(G=>{u[G.id]===G.correctAnswer&&j++});const g=Math.round(j/ne.quizQuestions.length*100);pe(g);let D=0;ne.judgmentQuestions.forEach(G=>{m[G.id]===G.correctAnswer&&D++});const J=Math.round(D/ne.judgmentQuestions.length*100);we(J),Le(85),X(!0)},W=()=>Math.round(se*.4+fe*.2+je*.4);return p.jsx("div",{"trae-inspector-start-line":"1909","trae-inspector-start-column":"4","trae-inspector-end-line":"2132","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"min-h-screen bg-white text-black pt-24 pb-12 px-4",children:p.jsxs("div",{"trae-inspector-start-line":"1910","trae-inspector-start-column":"6","trae-inspector-end-line":"2131","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"max-w-7xl mx-auto",children:[p.jsxs("div",{"trae-inspector-start-line":"1911","trae-inspector-start-column":"8","trae-inspector-end-line":"1924","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center justify-between mb-6",children:[p.jsxs(et,{to:`/project/${i}`,className:"inline-flex items-center gap-2 text-gray-800 hover:text-black transition-colors",children:[p.jsx(yo,{className:"w-5 h-5"}),"返回学习"]}),p.jsxs("div",{"trae-inspector-start-line":"1920","trae-inspector-start-column":"10","trae-inspector-end-line":"1923","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:`flex items-center gap-2 px-4 py-2 rounded-lg ${Ke<300?"bg-gray-300":"bg-gray-100"} border border-gray-300`,children:[p.jsx(xm,{className:"w-5 h-5"}),p.jsx("span",{"trae-inspector-start-line":"1922","trae-inspector-start-column":"12","trae-inspector-end-line":"1922","trae-inspector-end-column":"77","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"font-mono text-lg",children:Pe(Ke)})]})]}),p.jsxs("div",{"trae-inspector-start-line":"1926","trae-inspector-start-column":"8","trae-inspector-end-line":"1929","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300 mb-6",children:[p.jsx("h1",{"trae-inspector-start-line":"1927","trae-inspector-start-column":"10","trae-inspector-end-line":"1927","trae-inspector-end-column":"62","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-3xl font-bold",children:ne.title}),p.jsxs("p",{"trae-inspector-start-line":"1928","trae-inspector-start-column":"10","trae-inspector-end-line":"1928","trae-inspector-end-column":"159","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600 mt-2",children:["总分：",ne.quizQuestions.length,"道选择题 + ",ne.judgmentQuestions.length,"道判断题 + ",ne.codingChallenges.length,"道综合实战题"]})]}),ee?p.jsxs("div",{"trae-inspector-start-line":"2093","trae-inspector-start-column":"10","trae-inspector-end-line":"2129","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-6",children:[p.jsx("div",{"trae-inspector-start-line":"2094","trae-inspector-start-column":"12","trae-inspector-end-line":"2113","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300",children:p.jsxs("div",{"trae-inspector-start-line":"2095","trae-inspector-start-column":"14","trae-inspector-end-line":"2112","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-center",children:[p.jsx("h2",{"trae-inspector-start-line":"2096","trae-inspector-start-column":"16","trae-inspector-end-line":"2096","trae-inspector-end-column":"66","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%BB%83%E4%B9%A0%E5%AE%8C%E6%88%90%EF%BC%81%22%2C%22textStartLine%22%3A%222096%22%2C%22textStartColumn%22%3A%2256%22%2C%22textEndLine%22%3A%222096%22%2C%22textEndColumn%22%3A%2261%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-3xl font-bold mb-2",children:"练习完成！"}),p.jsxs("div",{"trae-inspector-start-line":"2097","trae-inspector-start-column":"16","trae-inspector-end-line":"2097","trae-inspector-end-column":"92","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-6xl font-bold text-black mb-4",children:[W(),"分"]}),p.jsxs("div",{"trae-inspector-start-line":"2098","trae-inspector-start-column":"16","trae-inspector-end-line":"2111","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex justify-center gap-8",children:[p.jsxs("div",{"trae-inspector-start-line":"2099","trae-inspector-start-column":"18","trae-inspector-end-line":"2102","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-center",children:[p.jsxs("div",{"trae-inspector-start-line":"2100","trae-inspector-start-column":"20","trae-inspector-end-line":"2100","trae-inspector-end-column":"85","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-3xl font-bold text-black",children:[se,"分"]}),p.jsx("div",{"trae-inspector-start-line":"2101","trae-inspector-start-column":"20","trae-inspector-end-line":"2101","trae-inspector-end-column":"60","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%80%89%E6%8B%A9%E9%A2%98%22%2C%22textStartLine%22%3A%222101%22%2C%22textStartColumn%22%3A%2251%22%2C%22textEndLine%22%3A%222101%22%2C%22textEndColumn%22%3A%2254%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600",children:"选择题"})]}),p.jsxs("div",{"trae-inspector-start-line":"2103","trae-inspector-start-column":"18","trae-inspector-end-line":"2106","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-center",children:[p.jsxs("div",{"trae-inspector-start-line":"2104","trae-inspector-start-column":"20","trae-inspector-end-line":"2104","trae-inspector-end-column":"89","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-3xl font-bold text-black",children:[fe,"分"]}),p.jsx("div",{"trae-inspector-start-line":"2105","trae-inspector-start-column":"20","trae-inspector-end-line":"2105","trae-inspector-end-column":"60","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%88%A4%E6%96%AD%E9%A2%98%22%2C%22textStartLine%22%3A%222105%22%2C%22textStartColumn%22%3A%2251%22%2C%22textEndLine%22%3A%222105%22%2C%22textEndColumn%22%3A%2254%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600",children:"判断题"})]}),p.jsxs("div",{"trae-inspector-start-line":"2107","trae-inspector-start-column":"18","trae-inspector-end-line":"2110","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-center",children:[p.jsxs("div",{"trae-inspector-start-line":"2108","trae-inspector-start-column":"20","trae-inspector-end-line":"2108","trae-inspector-end-column":"87","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-3xl font-bold text-black",children:[je,"分"]}),p.jsx("div",{"trae-inspector-start-line":"2109","trae-inspector-start-column":"20","trae-inspector-end-line":"2109","trae-inspector-end-column":"62","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E7%BB%BC%E5%90%88%E5%AE%9E%E6%88%98%E9%A2%98%22%2C%22textStartLine%22%3A%222109%22%2C%22textStartColumn%22%3A%2251%22%2C%22textEndLine%22%3A%222109%22%2C%22textEndColumn%22%3A%2256%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-gray-600",children:"综合实战题"})]})]})]})}),p.jsxs("div",{"trae-inspector-start-line":"2115","trae-inspector-start-column":"12","trae-inspector-end-line":"2128","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex justify-center gap-4",children:[p.jsx(et,{to:`/practice/${i}/${c}`,className:"py-3 px-8 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors",children:"重新练习"}),p.jsx(et,{to:`/project/${i}`,className:"py-3 px-8 bg-black hover:bg-gray-800 rounded-lg font-medium transition-colors text-white",children:"返回学习"})]})]}):p.jsxs("div",{"trae-inspector-start-line":"1932","trae-inspector-start-column":"10","trae-inspector-end-line":"2091","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-6",children:[p.jsxs("div",{"trae-inspector-start-line":"1934","trae-inspector-start-column":"12","trae-inspector-end-line":"1964","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300",children:[p.jsxs("h2",{"trae-inspector-start-line":"1935","trae-inspector-start-column":"14","trae-inspector-end-line":"1938","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-2xl font-bold mb-6 flex items-center gap-2",children:[p.jsx(_o,{className:"w-6 h-6 text-gray-800"}),"选择题 (",ne.quizQuestions.length,"题)"]}),p.jsx("div",{"trae-inspector-start-line":"1940","trae-inspector-start-column":"14","trae-inspector-end-line":"1963","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-6",children:ne.quizQuestions.map((j,g)=>p.jsxs("div",{"trae-inspector-start-line":"1942","trae-inspector-start-column":"18","trae-inspector-end-line":"1961","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-50 rounded-lg p-5",children:[p.jsxs("h3",{"trae-inspector-start-line":"1943","trae-inspector-start-column":"20","trae-inspector-end-line":"1945","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-lg font-semibold mb-4",children:[g+1,". ",j.question]}),p.jsx("div",{"trae-inspector-start-line":"1946","trae-inspector-start-column":"20","trae-inspector-end-line":"1960","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-3",children:j.options.map((D,J)=>p.jsxs("button",{"trae-inspector-start-line":"1948","trae-inspector-start-column":"24","trae-inspector-end-line":"1958","trae-inspector-end-column":"33","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>ye(j.id,J),className:`w-full text-left p-4 rounded-lg transition-all ${u[j.id]===J?"bg-black text-white":"bg-gray-100 text-gray-900 hover:bg-gray-200"}`,children:[String.fromCharCode(65+J),". ",D]},J))})]},j.id))})]}),p.jsxs("div",{"trae-inspector-start-line":"1967","trae-inspector-start-column":"12","trae-inspector-end-line":"2006","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300",children:[p.jsxs("h2",{"trae-inspector-start-line":"1968","trae-inspector-start-column":"14","trae-inspector-end-line":"1971","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-2xl font-bold mb-6 flex items-center gap-2",children:[p.jsx(hm,{className:"w-6 h-6 text-gray-800"}),"判断题 (",ne.judgmentQuestions.length,"题)"]}),p.jsx("div",{"trae-inspector-start-line":"1973","trae-inspector-start-column":"14","trae-inspector-end-line":"2005","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-6",children:ne.judgmentQuestions.map((j,g)=>p.jsxs("div",{"trae-inspector-start-line":"1975","trae-inspector-start-column":"18","trae-inspector-end-line":"2003","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-50 rounded-lg p-5",children:[p.jsxs("h3",{"trae-inspector-start-line":"1976","trae-inspector-start-column":"20","trae-inspector-end-line":"1978","trae-inspector-end-column":"25","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-lg font-semibold mb-4",children:[g+1,". ",j.question]}),p.jsxs("div",{"trae-inspector-start-line":"1979","trae-inspector-start-column":"20","trae-inspector-end-line":"2002","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex gap-4",children:[p.jsxs("button",{"trae-inspector-start-line":"1980","trae-inspector-start-column":"22","trae-inspector-end-line":"1990","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>De(j.id,!0),className:`flex-1 p-4 rounded-lg transition-all flex items-center justify-center gap-2 ${m[j.id]===!0?"bg-black text-white":"bg-gray-100 text-gray-900 hover:bg-gray-200"}`,children:[p.jsx(nm,{className:"w-5 h-5"}),"正确"]}),p.jsxs("button",{"trae-inspector-start-line":"1991","trae-inspector-start-column":"22","trae-inspector-end-line":"2001","trae-inspector-end-column":"31","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>De(j.id,!1),className:`flex-1 p-4 rounded-lg transition-all flex items-center justify-center gap-2 ${m[j.id]===!1?"bg-black text-white":"bg-gray-100 text-gray-900 hover:bg-gray-200"}`,children:[p.jsx(fm,{className:"w-5 h-5"}),"错误"]})]})]},j.id))})]}),p.jsxs("div",{"trae-inspector-start-line":"2009","trae-inspector-start-column":"12","trae-inspector-end-line":"2081","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-white rounded-xl p-6 border border-gray-300",children:[p.jsxs("h2",{"trae-inspector-start-line":"2010","trae-inspector-start-column":"14","trae-inspector-end-line":"2013","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-2xl font-bold mb-6 flex items-center gap-2",children:[p.jsx(ao,{className:"w-6 h-6 text-gray-800"}),"综合实战题 (",ne.codingChallenges.length,"题)"]}),p.jsx("div",{"trae-inspector-start-line":"2015","trae-inspector-start-column":"14","trae-inspector-end-line":"2080","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"space-y-8",children:ne.codingChallenges.map((j,g)=>{const D=g===0?v:S,J=g===0?A:F,G=g===0?E:K,oe=g===0?L:I;return p.jsxs("div",{"trae-inspector-start-line":"2023","trae-inspector-start-column":"20","trae-inspector-end-line":"2077","trae-inspector-end-column":"26","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-50 rounded-lg p-5",children:[p.jsxs("h3",{"trae-inspector-start-line":"2024","trae-inspector-start-column":"22","trae-inspector-end-line":"2026","trae-inspector-end-column":"27","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-lg font-semibold mb-4",children:["综合实战题",g+1,"：",j.description]}),p.jsxs("div",{"trae-inspector-start-line":"2028","trae-inspector-start-column":"22","trae-inspector-end-line":"2045","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"mb-3",children:[p.jsx("div",{"trae-inspector-start-line":"2029","trae-inspector-start-column":"24","trae-inspector-end-line":"2035","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex items-center justify-between mb-2",children:p.jsxs("div",{"trae-inspector-start-line":"2030","trae-inspector-start-column":"26","trae-inspector-end-line":"2034","trae-inspector-end-column":"32","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex gap-1",children:[p.jsx("div",{"trae-inspector-start-line":"2031","trae-inspector-start-column":"28","trae-inspector-end-line":"2031","trae-inspector-end-column":"84","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"w-2 h-2 rounded-full bg-gray-400"}),p.jsx("div",{"trae-inspector-start-line":"2032","trae-inspector-start-column":"28","trae-inspector-end-line":"2032","trae-inspector-end-column":"84","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"w-2 h-2 rounded-full bg-gray-500"}),p.jsx("div",{"trae-inspector-start-line":"2033","trae-inspector-start-column":"28","trae-inspector-end-line":"2033","trae-inspector-end-column":"84","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"w-2 h-2 rounded-full bg-gray-600"})]})}),p.jsx("div",{"trae-inspector-start-line":"2036","trae-inspector-start-column":"24","trae-inspector-end-line":"2044","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-100 rounded-lg overflow-hidden",children:p.jsx("textarea",{"trae-inspector-start-line":"2037","trae-inspector-start-column":"26","trae-inspector-end-line":"2043","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",value:D,onChange:ie=>J(ie.target.value),className:"w-full h-48 bg-transparent text-gray-900 font-mono text-sm p-4 resize-none focus:outline-none",spellCheck:!1,placeholder:"# 请在此处编写你的代码..."})})]}),p.jsxs("div",{"trae-inspector-start-line":"2047","trae-inspector-start-column":"22","trae-inspector-end-line":"2063","trae-inspector-end-column":"28","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex gap-2 mb-4",children:[p.jsxs("button",{"trae-inspector-start-line":"2048","trae-inspector-start-column":"24","trae-inspector-end-line":"2055","trae-inspector-end-column":"33","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>O(g+1),disabled:oe,className:"py-2 px-4 bg-black hover:bg-gray-800 disabled:opacity-50 rounded-lg text-sm flex items-center gap-2 transition-colors text-white",children:[p.jsx(eu,{className:"w-4 h-4"}),oe?"运行中...":"运行"]}),p.jsxs("button",{"trae-inspector-start-line":"2056","trae-inspector-start-column":"24","trae-inspector-end-line":"2062","trae-inspector-end-column":"33","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:()=>J(j.initialCode),className:"py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm flex items-center gap-2 transition-colors",children:[p.jsx(nu,{className:"w-4 h-4"}),"重置"]})]}),G.length>0&&p.jsxs("div",{"trae-inspector-start-line":"2066","trae-inspector-start-column":"24","trae-inspector-end-line":"2075","trae-inspector-end-column":"30","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"mb-4",children:[p.jsx("div",{"trae-inspector-start-line":"2067","trae-inspector-start-column":"26","trae-inspector-end-line":"2067","trae-inspector-end-column":"79","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E8%BE%93%E5%87%BA%EF%BC%9A%22%2C%22textStartLine%22%3A%222067%22%2C%22textStartColumn%22%3A%2270%22%2C%22textEndLine%22%3A%222067%22%2C%22textEndColumn%22%3A%2273%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-xs text-gray-600 mb-1",children:"输出："}),p.jsx("div",{"trae-inspector-start-line":"2068","trae-inspector-start-column":"26","trae-inspector-end-line":"2074","trae-inspector-end-column":"32","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"bg-gray-100 rounded-lg p-3",children:p.jsx("pre",{"trae-inspector-start-line":"2069","trae-inspector-start-column":"28","trae-inspector-end-line":"2073","trae-inspector-end-column":"34","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"text-sm font-mono text-gray-800",children:G.map((ie,me)=>p.jsx("div",{"trae-inspector-start-line":"2071","trae-inspector-start-column":"32","trae-inspector-end-line":"2071","trae-inspector-end-column":"59","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",children:ie},me))})})]})]},j.id)})})]}),p.jsx("div",{"trae-inspector-start-line":"2083","trae-inspector-start-column":"12","trae-inspector-end-line":"2090","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",className:"flex justify-center",children:p.jsx("button",{"trae-inspector-start-line":"2084","trae-inspector-start-column":"14","trae-inspector-end-line":"2089","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Practice.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%8F%90%E4%BA%A4%E7%BB%83%E4%B9%A0%22%2C%22textStartLine%22%3A%222087%22%2C%22textStartColumn%22%3A%2215%22%2C%22textEndLine%22%3A%222089%22%2C%22textEndColumn%22%3A%2214%22%2C%22cwd%22%3A%22%2Fworkspace%2F1%22%7D",onClick:R,className:"py-4 px-12 bg-black hover:bg-gray-800 rounded-lg text-xl font-medium transition-colors text-white",children:"提交练习"})})]})]})})}function lh(){return p.jsxs(Mf,{children:[p.jsx(th,{}),p.jsxs(lf,{children:[p.jsx(xn,{path:"/",element:p.jsx(rh,{})}),p.jsx(xn,{path:"/about",element:p.jsx(nh,{})}),p.jsx(xn,{path:"/pandas",element:p.jsx(sh,{})}),p.jsx(xn,{path:"/course/:id",element:p.jsx(ah,{})}),p.jsx(xn,{path:"/project/:id",element:p.jsx(ih,{})}),p.jsx(xn,{path:"/practice/:projectId/:sectionId",element:p.jsx(oh,{})})]})]})}l2.createRoot(document.getElementById("root")).render(p.jsx(k.StrictMode,{children:p.jsx(lh,{})}));
