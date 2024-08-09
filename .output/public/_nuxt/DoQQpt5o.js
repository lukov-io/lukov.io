import{n as F,_ as f,o as d,c as m,t as S,q as k,s as q,u as V,v as E,x as y,y as u,b as o,a as c,z as g,A as j,w as _,B as M,C as D,d as p,p as A,e as B}from"./DJMpr7IK.js";import{A as U,I as P}from"./58smUvsu.js";const R=F("form",{state:()=>({formData:{name:"",phone:"",email:"",details:""}})}),Z={name:"BaseField",props:{modelValue:{type:String,required:!0},label:{type:String,default:""},type:{type:String,default:""},id:{type:String,default:""},hasError:{type:Boolean,default:!1},tag:{type:String,default:"input",validator:e=>["input","textarea","vue-tel-input"].includes(e)}},emits:["update:modelValue"],computed:{fieldClass(){return{"base-field__input":this.tag==="input","base-field__textarea":this.tag==="textarea"}}}},J=["for"];function O(e,t,a,n,i,r){return d(),m("div",{class:y(["base-field",{error:a.hasError}])},[a.label?(d(),m("label",{key:0,class:"base-field__label",for:a.id},S(a.label),9,J)):k("",!0),(d(),q(E(a.tag),V({id:a.id,class:r.fieldClass,type:a.type},e.$attrs,{value:a.modelValue,onInput:t[0]||(t[0]=s=>e.$emit("update:modelValue",s.target.value))}),null,16,["id","class","type","value"]))],2)}const W=f(Z,[["render",O],["__scopeId","data-v-c7903061"]]),X={name:"BaseTelInput",props:{modelValue:{type:String,required:!0},label:{type:String,default:""},id:{type:String,default:""},hasError:{type:Boolean,default:!1}},emits:["update:modelValue"]},Y=["for"];function G(e,t,a,n,i,r){const s=u("vue-tel-input");return d(),m("div",{class:y(["base-tel-input",{error:a.hasError}])},[a.label?(d(),m("label",{key:0,class:"base-tel-input__label",for:a.id},S(a.label),9,Y)):k("",!0),o(s,V({id:a.id},e.$attrs,{value:a.modelValue,onInput:t[0]||(t[0]=$=>e.$emit("update:modelValue",$.target.value))}),null,16,["id","value"])],2)}const H=f(X,[["render",G],["__scopeId","data-v-1362baaf"]]),K={name:"IconClip"},Q={class:"icon-clip"},ee=c("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M10.5144 20.7158C9.68888 21.5381 8.56926 22 7.40182 22C6.23438 22 5.11476 21.5381 4.28926 20.7158C3.46376 19.8935 3 18.7783 3 17.6154C3 16.4526 3.46376 15.3373 4.28926 14.5151L14.9905 3.85572C15.2631 3.58433 15.5867 3.36908 15.9428 3.22226C16.2989 3.07543 16.6805 2.99991 17.0659 3C17.4513 3.00009 17.8329 3.07579 18.189 3.22279C18.545 3.36978 18.8685 3.58518 19.1409 3.8567C19.4134 4.12821 19.6295 4.45052 19.7769 4.80523C19.9243 5.15993 20.0001 5.54008 20 5.92397C19.9999 6.30786 19.9239 6.68798 19.7763 7.04261C19.6288 7.39725 19.4125 7.71945 19.1399 7.99084L8.43086 18.658C8.15304 18.9233 7.78171 19.0682 7.39688 19.0634C7.01205 19.0585 6.64454 18.9033 6.37356 18.631C6.10258 18.3588 5.94982 17.9914 5.94821 17.6081C5.9466 17.2247 6.09627 16.8561 6.36495 16.5816L14.0045 8.97201M8.43966 18.6482L8.42988 18.658",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),c("path",{class:"icon-clip__item",d:"M10.5703 20.6809L19.0703 12.1045",stroke:"black","stroke-width":"1.5","stroke-linecap":"round"})],-1),te=[ee];function ae(e,t,a,n,i,r){return d(),m("span",Q,te)}const ne=f(K,[["render",ae]]),x=e=>{if(e=g(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let t in e)return!0;return!1}return!!String(e).length},z=e=>(e=g(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function h(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return n=>(n=g(n),!x(n)||t.every(i=>(i.lastIndex=0,i.test(n))))}h(/^[a-zA-Z]*$/);h(/^[a-zA-Z0-9]*$/);h(/^\d*(\.\d+)?$/);const oe=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var se=h(oe),re={$validator:se,$message:"Value is not a valid email address",$params:{type:"email"}};function ie(e){return t=>!x(t)||z(t)<=g(e)}function w(e){return{$validator:ie(e),$message:t=>{let{$params:a}=t;return`The maximum length allowed is ${a.max}`},$params:{max:e,type:"maxLength"}}}function le(e){return t=>!x(t)||z(t)>=g(e)}function C(e){return{$validator:le(e),$message:t=>{let{$params:a}=t;return`This field should be at least ${a.min} characters long`},$params:{min:e,type:"minLength"}}}function de(e){return typeof e=="string"&&(e=e.trim()),x(e)}var b={$validator:de,$message:"Value is required",$params:{type:"required"}};const ce=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;h(ce);h(/(^[0-9]*$)|(^-[0-9]+$)/);h(/^[-]?\d*(\.\d+)?$/);const me={name:{required:b,minLength:C(3),maxLength:w(20)},phone:{required:b,minLength:C(10),maxLength:w(17)},email:{required:b,email:re},details:{required:b,minLength:C(10)}},ue={name:"FormContacts",components:{BaseField:W,AppButton:U,IconEnvelope:P,IconClip:ne,BaseTelInput:H},setup(){const e=R();return{v$:j(me,e.formData),store:e}},data(){return{isSubmitting:!1}},computed:{isSubmitDisabled(){return this.isSubmitting||this.v$.name.$invalid||this.v$.phone.$invalid||this.v$.email.$invalid||this.v$.details.$invalid}},methods:{handleChange(e){this.v$[e].$validate()},async submitForm(){var e,t,a;if(this.v$.$touch(),!this.v$.$invalid){this.isSubmitting=!0;try{const n=await axios.post("apiUrl",this.store.formData);if(this.isSubmitting=!1,n.data.status==="error"){this.isSubmitting=!1,console.log("fail",n.data.message);return}if(n.data.status)console.log("success");else{const i=((e=n.data)==null?void 0:e.message)||"An error occurred.";this.isSubmitting=!1,console.error("fail",i)}}catch(n){const i=((a=(t=n.response)==null?void 0:t.data)==null?void 0:a.message)||"An error occurred.";this.isSubmitting=!1,console.error("fail",i)}}}}},fe={class:"form-contacts__buttons"};function _e(e,t,a,n,i,r){const s=u("BaseField"),$=u("BaseTelInput"),v=u("IconClip"),I=u("AppButton"),T=u("IconEnvelope");return d(),m("form",{ref:"form",class:"form-contacts",onSubmit:t[8]||(t[8]=M((...l)=>r.submitForm&&r.submitForm(...l),["prevent"]))},[o(s,{id:"contacts-name",modelValue:n.store.formData.name,"onUpdate:modelValue":t[0]||(t[0]=l=>n.store.formData.name=l),"has-error":n.v$.name.$error,class:"form-contacts__input",tag:"input",type:"text",placeholder:"John Doe",label:"Your name:",onChange:t[1]||(t[1]=l=>r.handleChange("name"))},null,8,["modelValue","has-error"]),o($,{id:"contacts-tel-input",modelValue:n.store.formData.phone,"onUpdate:modelValue":t[2]||(t[2]=l=>n.store.formData.phone=l),label:"Phone:","has-error":n.v$.phone.$error,onChange:t[3]||(t[3]=l=>r.handleChange("phone"))},null,8,["modelValue","has-error"]),o(s,{id:"contacts-email",modelValue:n.store.formData.email,"onUpdate:modelValue":t[4]||(t[4]=l=>n.store.formData.email=l),"has-error":n.v$.email.$error,class:"form-contacts__input",tag:"input",type:"email",placeholder:"john_doe@gmail.com",label:"Email:",onChange:t[5]||(t[5]=l=>r.handleChange("email"))},null,8,["modelValue","has-error"]),o(s,{id:"contacts-details",modelValue:n.store.formData.details,"onUpdate:modelValue":t[6]||(t[6]=l=>n.store.formData.details=l),"has-error":n.v$.details.$error,class:"form-contacts__textarea",tag:"textarea",placeholder:"Enter a detailed description of your project here...",label:"Project details",onChange:t[7]||(t[7]=l=>r.handleChange("details"))},null,8,["modelValue","has-error"]),c("div",fe,[o(I,{tag:"span","button-text":"Attach","collapse-on-mobile":"collapse"},{default:_(()=>[o(v)]),_:1}),o(I,{tag:"button","button-text":"Send","collapse-on-mobile":"collapse",disabled:r.isSubmitDisabled},{default:_(()=>[o(T)]),_:1},8,["disabled"])])],544)}const pe=f(ue,[["render",_e],["__scopeId","data-v-7a5856f1"]]),he={name:"ContactsItem",props:{label:{type:String,required:!0}}},$e={class:"contacts-item"},ge={class:"contacts-item__label"},be={class:"contacts-item__text"};function xe(e,t,a,n,i,r){return d(),m("div",$e,[c("span",ge,S(a.label),1),c("span",be,[D(e.$slots,"default",{},void 0,!0)])])}const L=f(he,[["render",xe],["__scopeId","data-v-558d8093"]]),ve={name:"ContactsData",components:{ContactsItem:L}},Ce=e=>(A("data-v-d2dc9602"),e=e(),B(),e),Se={class:"contacts-data"},ye=Ce(()=>c("br",null,null,-1));function Ie(e,t,a,n,i,r){const s=L;return d(),m("div",Se,[o(s,{label:"Address"},{default:_(()=>[p(" Schimmelt 245611 ZX "),ye,p(" EindhovenThe Netherlands ")]),_:1}),o(s,{label:"Telephone"},{default:_(()=>[p(" +49 89 411422250 ")]),_:1}),o(s,{label:"Mail"},{default:_(()=>[p(" lukovio ")]),_:1})])}const we=f(ve,[["render",Ie],["__scopeId","data-v-d2dc9602"]]),ke={name:"SocialNetworksItem",props:{icon:{type:String,required:!0,validator:e=>["icons-font--tg","icons-font--in","icons-font--wa"].includes(e)},linkTo:{type:String,required:!0,default:"#"}}},Ve=["href"],De={class:"social-networks-item__name"};function Ae(e,t,a,n,i,r){return d(),m("a",{class:"social-networks-item",href:a.linkTo},[c("span",{class:y(["social-networks-item__icon",a.icon])},null,2),c("span",De,[D(e.$slots,"default",{},void 0,!0)])],8,Ve)}const N=f(ke,[["render",Ae],["__scopeId","data-v-420cef64"]]),Be={name:"SocialNetworks",components:{SocialNetworksItem:N}},ze={class:"social-networks"};function Le(e,t,a,n,i,r){const s=N;return d(),m("div",ze,[o(s,{"link-to":"#",icon:"icons-font--tg"},{default:_(()=>[p(" Telegram ")]),_:1}),o(s,{"link-to":"#",icon:"icons-font--in"},{default:_(()=>[p(" Instagram ")]),_:1}),o(s,{"link-to":"#",icon:"icons-font--wa"},{default:_(()=>[p(" WhatsApp ")]),_:1})])}const Ne=f(Be,[["render",Le],["__scopeId","data-v-8fd31eb4"]]),Te={name:"Contacts",components:{FormContacts:pe,ContactsData:we,SocialNetworks:Ne}},Fe=e=>(A("data-v-ede3bcf4"),e=e(),B(),e),qe={class:"contacts"},Ee=Fe(()=>c("h2",null,"Please tell what project you want to do with us?",-1)),je={class:"contacts__grid"},Me={class:"contacts__other"};function Ue(e,t,a,n,i,r){const s=u("FormContacts"),$=u("ContactsData"),v=u("SocialNetworks");return d(),m("div",qe,[Ee,c("div",je,[o(s,{class:"contacts__form"}),c("div",Me,[o($,{class:"contacts__data"}),o(v)])])])}const Ze=f(Te,[["render",Ue],["__scopeId","data-v-ede3bcf4"]]);export{Ze as default};
