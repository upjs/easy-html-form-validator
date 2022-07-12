var J=Object.defineProperty;var ee=(r,e,t)=>e in r?J(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(ee(r,typeof e!="symbol"?e+"":e,t),t);const re=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};re();class u extends Error{constructor(t,...n){super(t);c(this,"args");this.args=n}}const L="accepted",I="alpha",M="alpha-num",x="alpha-num-dash",R="between-length",P="between-number",O="digits",F="email",U="ends-with",q="equal-length",D="equal-number",H="greater-equal",B="integer",G="less-equal",V="max-length",W="min-length",j="num-dash",C="number",z="regex",k="required",Q="starts-with",T="within";function te(r){return r==="checked"?!0:new u(L)}const ne=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,se=/^[+-]?\d+$/,oe=/^[+-]?(\d+|\d*\.\d*)$/,ie=/^[\p{L}\p{M}]+$/u,ae=/^[\p{L}\p{M}\p{N}]+$/u,ue=/^[\p{L}\p{M}\p{N}_-]+$/u,le=/^[\p{N}_-]+$/u;function ce(r){return ie.test(r)||new u(I)}function he(r){return ae.test(r)||new u(M)}function fe(r){return ue.test(r)||new u(x)}class de{constructor(){c(this,"lang")}set(e){this.lang=e}get(){return typeof this.lang=="object"?this.lang:{}}}var S=new de;const me="checkbox",ge="radio";function X(r){return r.replace(/-./g,e=>e[1].toUpperCase())}function K(r){return r instanceof HTMLInputElement?r.type===me||r.type===ge?r.checked?"checked":"":r.value:r instanceof HTMLSelectElement?Array.from(r.selectedOptions).map(e=>e.value).join(","):""}function Ee(r,...e){return r.replace(/\$(\d)/g,(t,n)=>(e==null?void 0:e[n-1])||"")}function p(r,e){let[t,n=""]=r.split(":");if(we(r)){if(!Ne(r))throw new Error(`${r}: x-rules require an argument that is defined in the config.xRules object`);t=t.substring(2),n=String(e==null?void 0:e[n])||""}return{name:t,argsText:n,args:m(n)}}function m(r){return r?r.split(","):[]}function pe(r,...e){const t=S.get();let n=r;return Object.prototype.hasOwnProperty.call(t,r)&&(n=t[r]),Ee(n,...e)}function a(r){return{throwError(e){if(r)throw new Error(e)}}}function be(r){r.on("field:error",(e,t,n)=>{n.reverse().forEach(s=>{const o=document.createElement("p");o.classList.add("validator-err"),o.innerHTML=s.message,t.parentNode&&t.parentNode.insertBefore(o,t.nextSibling)})}),r.on("validation:start",e=>{e.querySelectorAll(".validator-err").forEach(t=>{t.remove()})})}function Ne(r){return r.includes(":")&&r.split(":").length===2}function we(r){return r.startsWith("x-")}const l="An argument must be provided",b="The argument must be a number",N="The argument must be a positive number",ve="The argument must be an integer",Te="Invalid pattern provided";function _e(r,e=""){const[t,n,s]=m(e);a(!t).throwError(l),a(!n||!s).throwError(l);const o=Number(n),i=Number(s);return a(Number.isNaN(o)||Number.isNaN(i)).throwError(b),a(o>i).throwError("min must be less than max"),a(o===i).throwError("min and max must not be equal"),t==="number"?ye(r,o,i):Se(r,o,i)}function ye(r,e,t){const n=Number(r);return r!==""&&!Number.isNaN(n)&&n>=e&&n<=t?!0:new u(P,String(e),String(t))}function Se(r,e,t){return a(e<0||t<0).throwError(N),r.length>=e&&r.length<=t?!0:new u(R,String(e),String(t))}function Ae(r,e=""){return a(e==="").throwError(l),a(_(e)!==!0||+e<1).throwError(ve),new RegExp(`^-?[0-9]{${e}}$`).test(r)?!0:new u(O,e)}function $e(r,e=""){return a(e==="").throwError(l),r.endsWith(e)||new u(U,e)}function Le(r){return ne.test(r)||new u(F)}function Ie(r,e=""){const[t,n]=m(e);a(!t).throwError(l),a(!n).throwError(l);const s=Number(n);return a(Number.isNaN(s)).throwError(b),t==="number"?Me(r,s):xe(r,s)}function Me(r,e){const t=Number(r);return r!==""&&!Number.isNaN(t)&&t>=e?!0:new u(H,String(e))}function xe(r,e){return a(e<0).throwError(N),r.length>=e?!0:new u(W,String(e))}function _(r){return se.test(r)||new u(B)}function Re(r,e=""){const[t,n]=m(e);a(!t).throwError(l),a(!n).throwError(l);const s=Number(n);return a(Number.isNaN(s)).throwError(b),t==="number"?Pe(r,s):Oe(r,s)}function Pe(r,e){const t=Number(r);return r!==""&&!Number.isNaN(t)&&t<=e?!0:new u(G,String(e))}function Oe(r,e){return a(e<0).throwError(N),r.length<=e?!0:new u(V,String(e))}function Fe(r){return oe.test(r)||new u(C)}function Ue(r){return le.test(r)||new u(j)}const qe=r=>{try{return new RegExp(r),!0}catch{return!1}},De=r=>{var n,s,o,i;const e=(s=(n=r.match(/\/(.+)\/.*/))==null?void 0:n[1])!=null?s:"",t=(i=(o=r.match(/\/.+\/(.*)/))==null?void 0:o[1])!=null?i:"";return new RegExp(e,t)};function He(r,e){return a(!e).throwError(l),a(qe(e)===!1).throwError(Te),De(e).test(r)||new u(z)}function y(r){return r.trim().length>0||new u(k)}function Be(r,e=""){return y(e)===!0?y(r):!0}function Ge(r,e=""){const[t,n]=m(e);a(!t).throwError(l),a(!n).throwError(l);const s=Number(n);return a(Number.isNaN(s)).throwError(b),t==="number"?Ve(r,s):We(r,s)}function Ve(r,e){const t=Number(r);return r!==""&&!Number.isNaN(t)&&t===e?!0:new u(D,String(e))}function We(r,e){return a(e<0).throwError(N),r.length===e?!0:new u(q,String(e))}function je(r,e=""){return a(e==="").throwError(l),r.startsWith(e)||new u(Q,e)}function A(r,e){const[t,...n]=m(e);if(a(!t).throwError(l),t==="array"){const s=m(r);for(const o of s)if(!n.includes(o))return new u(T);return!0}return n.includes(r)||new u(T)}var $=Object.freeze(Object.defineProperty({__proto__:null,accepted:te,alpha:ce,alphaNum:he,alphaNumDash:fe,between:_e,digits:Ae,endsWith:$e,email:Le,min:Ie,integer:_,int:_,max:Re,number:Fe,numDash:Ue,regex:He,required:y,requiredIf:Be,size:Ge,startsWith:je,within:A,in:A},Symbol.toStringTag,{value:"Module"}));class Ce{constructor(){c(this,"lang");c(this,"errorsList");this.lang=S.get(),this.errorsList=[]}setError(e,t,n){let s=this.errorsList.find(f=>f[0].element===e);s||(s=[],this.errorsList.push(s));const i={message:pe(n.message,...n.args),element:e,rule:t,cause:n.message,args:n.args};s.push(i)}get hasError(){return Object.keys(this.errorsList).length>0}get errors(){return this.errorsList}clearErrors(){this.errorsList=[]}}class ze{constructor(e={}){c(this,"events");this.events={},Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(this.events[n]=[],this.events[n].push(e[n]))})}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}off(e,t){if(typeof this.events[e]=="undefined")return;const n=this.events[e],s=n.indexOf(t);s!==-1&&n.splice(s,1)}call(e,...t){typeof this.events[e]!="undefined"&&this.events[e].forEach(s=>{s(...t)})}clear(){this.events={}}}const v={requiredIf:Qe,between:g,size:g,min:g,max:g,in:g};function ke(r,e,t,n,s){var i;const o=X(p(r,s).name);return((i=v[o])==null?void 0:i.call(v,r,e,t,n,s))||r}function g(r,e,t,n,s){const{name:o,argsText:i}=p(r,s),f=e.indexOf(r),h=e.slice(0,f);let d="string";return h.includes("number")||h.includes("int")||h.includes("integer")?d="number":h.includes("array")&&(d="array"),`${o}:${d},${i}`}function Qe(r,e,t,n,s){const{name:o,args:i}=p(r,s);if(i.length===0)return o;let f="";if(i.length>0){const h=document.getElementById(i[0]);h!==null&&(f=K(h))}return i.splice(0,1,f),`${o}:${i.join(",")}`}const Xe={renderErrors:!0};class Ke{constructor(e,t={}){c(this,"validatorError");c(this,"events");c(this,"options");c(this,"parentEl");if(e===null||!(e instanceof HTMLElement))throw new Error("Invalid parentEl element");this.options=Object.assign(Xe,t),this.validatorError=new Ce,this.events=new ze(this.options.on),this.parentEl=e,S.set(this.options.lang),this.options.renderErrors&&be(this.events),this.events.on("validation:start",()=>this.validatorError.clearErrors()),this.events.on("validation:failed",()=>this.errorEventTrigger())}validate(){this.events.call("validation:start",this.parentEl);let e=!0,t="success";const n=this.parentEl.querySelectorAll("[data-rules]");return n.length>0&&(e=this.validateFields(Array.from(n)),t=e?"success":"failed"),this.events.call(`validation:${t}`,this.parentEl),this.events.call("validation:end",this.parentEl,e),e}on(e,t){this.events.on(e,t)}off(e,t){this.events.off(e,t)}validateFields(e){var t;for(const n of e){const s=(t=n.getAttribute("data-rules"))==null?void 0:t.split("|");if(s&&s.length>0){const o=K(n),i=this.shouldStopOnFirstFailure(s),f=this.getComputedFieldRules(s,n);for(const h of f){const{name:d,argsText:Z}=p(h,this.options.xRules),w=X(d);if(this.isNullable(w)&&o==="")break;if(w in $)try{const E=$[w](o,Z);if(E instanceof u&&(this.validatorError.setError(n,d,E),i))break}catch(E){return console.error(new Error(`${d}: ${E.message}`)),!1}}}}return!this.validatorError.hasError}shouldStopOnFirstFailure(e){return e.includes("bail")}isNullable(e){return e==="nullable"}getComputedFieldRules(e,t){return e.map(n=>ke(n,e,t,this.parentEl,this.options.xRules))}errorEventTrigger(){this.validatorError.errors.forEach(t=>{t.length!==0&&this.events.call("field:error",this.parentEl,t[0].element,t)})}}const Ye={[L]:"Please accept this field",[I]:"Please enter only alphabetic characters",[M]:"Please enter only alpha-numeric characters",[x]:"Please enter only alpha-numeric characters, dashes, and underscores",[R]:"The value must have between $1 and $2 characters",[P]:"Please enter a number between $1 and $2",[O]:"The value must be a $1-digits number",[F]:"Please enter a valid email address",[U]:'The value must ends with "$1"',[q]:"The value must have $1 characters",[D]:"The value must be equal to $1",[H]:"Please enter a number greater than or equal to $1",[B]:"The value must be a valid integer",[G]:"Please enter a number less than or equal to $1",[V]:"Max length is $1",[W]:"Min length is $1",[j]:"Please enter numbers with dashes and underscores",[C]:"Please enter a valid number",[z]:"The value doesn't match the pattern",[k]:"This field is required",[Q]:'The value must start with "$1"',[T]:"The value is incorrect"},Y=document.querySelector("form");Y.onsubmit=r=>{r.preventDefault(),Ze.validate()};const Ze=new Ke(Y,{lang:Ye,xRules:{zipcode:"/^([0-9]{5})-([0-9]{5})$/","min-from-server":(()=>"2")()},on:{"validation:success":()=>{alert("Success! Form validated with no errors")}}});
