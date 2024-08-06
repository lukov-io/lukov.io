import{n as B,_ as f,o as d,c as m,t as y,q as N,s as F,u as q,v as E,x as S,a as c,y as $,z as T,A as j,B as _,b as n,w as u,C as M,D as k,d as p,p as I,e as V}from"./Dvw0BTjD.js";import{A as P,I as U}from"./B8bXbKo9.js";const R=B("form",{state:()=>({formData:{name:"",phone:"",email:"",details:""}})}),Z={name:"BaseField",props:{modelValue:{type:String,required:!0},label:{type:String,default:""},type:{type:String,default:""},id:{type:String,default:""},hasError:{type:Boolean,default:!1},tag:{type:String,default:"input",validator:e=>["input","textarea","vue-tel-input"].includes(e)}},emits:["update:modelValue"],computed:{fieldClass(){return{"base-field__input":this.tag==="input","base-field__textarea":this.tag==="textarea"}}},methods:{updateValue(e){this.tag==="vue-tel-input"?this.$emit("update:modelValue",e):this.$emit("update:modelValue",e.target.value)}}},J=["for"];function O(e,t,a,o,r,l){return d(),m("div",{class:S(["base-field",{error:a.hasError}])},[a.label?(d(),m("label",{key:0,class:"base-field__label",for:a.id},y(a.label),9,J)):N("",!0),(d(),F(E(a.tag),q({id:a.id,class:l.fieldClass,type:a.type},e.$attrs,{value:a.modelValue,onInput:t[0]||(t[0]=s=>e.$emit("update:modelValue",s.target.value))}),null,16,["id","class","type","value"]))],2)}const W=f(Z,[["render",O],["__scopeId","data-v-054a69ae"]]),X={name:"IconClip"},Y={class:"icon-clip",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=c("path",{d:"M10.5144 20.7158C9.68888 21.5381 8.56926 22 7.40182 22C6.23438 22 5.11476 21.5381 4.28926 20.7158C3.46376 19.8935 3 18.7783 3 17.6154C3 16.4526 3.46376 15.3373 4.28926 14.5151L14.9905 3.85572C15.2631 3.58433 15.5867 3.36908 15.9428 3.22226C16.2989 3.07543 16.6805 2.99991 17.0659 3C17.4513 3.00009 17.8329 3.07579 18.189 3.22279C18.545 3.36978 18.8685 3.58518 19.1409 3.8567C19.4134 4.12821 19.6295 4.45052 19.7769 4.80523C19.9243 5.15993 20.0001 5.54008 20 5.92397C19.9999 6.30786 19.9239 6.68798 19.7763 7.04261C19.6288 7.39725 19.4125 7.71945 19.1399 7.99084L8.43086 18.658C8.15304 18.9233 7.78171 19.0682 7.39688 19.0634C7.01205 19.0585 6.64454 18.9033 6.37356 18.631C6.10258 18.3588 5.94982 17.9914 5.94821 17.6081C5.9466 17.2247 6.09627 16.8561 6.36495 16.5816L14.0045 8.97201M8.43966 18.6482L8.42988 18.658",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),H=c("path",{class:"icon-clip__item",d:"M10.5703 20.6809L19.0703 12.1045",stroke:"black","stroke-width":"1.5","stroke-linecap":"round"},null,-1),K=[G,H];function Q(e,t,a,o,r,l){return d(),m("svg",Y,K)}const ee=f(X,[["render",Q]]),C=e=>{if(e=$(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let t in e)return!0;return!1}return!!String(e).length},D=e=>(e=$(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function h(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return o=>(o=$(o),!C(o)||t.every(r=>(r.lastIndex=0,r.test(o))))}h(/^[a-zA-Z]*$/);h(/^[a-zA-Z0-9]*$/);h(/^\d*(\.\d+)?$/);const te=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var ae=h(te),oe={$validator:ae,$message:"Value is not a valid email address",$params:{type:"email"}};function ne(e){return t=>!C(t)||D(t)<=$(e)}function w(e){return{$validator:ne(e),$message:t=>{let{$params:a}=t;return`The maximum length allowed is ${a.max}`},$params:{max:e,type:"maxLength"}}}function se(e){return t=>!C(t)||D(t)>=$(e)}function v(e){return{$validator:se(e),$message:t=>{let{$params:a}=t;return`This field should be at least ${a.min} characters long`},$params:{min:e,type:"minLength"}}}function re(e){return typeof e=="string"&&(e=e.trim()),C(e)}var x={$validator:re,$message:"Value is required",$params:{type:"required"}};const le=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;h(le);h(/(^[0-9]*$)|(^-[0-9]+$)/);h(/^[-]?\d*(\.\d+)?$/);const ie={name:{required:x,minLength:v(3),maxLength:w(20)},phone:{required:x,minLength:v(10),maxLength:w(15)},email:{required:x,email:oe},details:{required:x,minLength:v(10)}},ce={name:"FormContacts",components:{BaseField:W,AppButton:P,IconEnvelope:U,IconClip:ee},setup(){const e=R(),t=T({...e.formData}),a=j(ie,t);return{formData:t,v$:a,store:e}},methods:{handleChange(e){this.v$[e].$validate(),console.log(`${e} validation error:`,this.v$[e].$error)},async submitForm(){var e,t,a;if(this.v$.$touch(),!this.v$.$invalid){console.log(this.store.formData);try{const o=await axios.post("apiUrl",this.store.formData);if(o.data.status==="error"){console.log("fail",o.data.message);return}if(o.data.status)console.log("success");else{const r=((e=o.data)==null?void 0:e.message)||"An error occurred.";console.error("fail",r)}}catch(o){const r=((a=(t=o.response)==null?void 0:t.data)==null?void 0:a.message)||"An error occurred.";console.error("fail",r)}}}}},de={class:"form-contacts__buttons"};function me(e,t,a,o,r,l){const s=_("BaseField"),b=_("IconClip"),g=_("AppButton"),L=_("IconEnvelope");return d(),m("form",{ref:"form",class:"form-contacts",onSubmit:t[8]||(t[8]=M((...i)=>l.submitForm&&l.submitForm(...i),["prevent"]))},[n(s,{id:"contacts-name",modelValue:o.formData.name,"onUpdate:modelValue":t[0]||(t[0]=i=>o.formData.name=i),"has-error":o.v$.name.$error,class:"form-contacts__input",tag:"input",type:"text",placeholder:"John Doe",label:"Your name:",onChange:t[1]||(t[1]=i=>l.handleChange("name"))},null,8,["modelValue","has-error"]),n(s,{id:"contacts-phone",modelValue:o.formData.phone,"onUpdate:modelValue":t[2]||(t[2]=i=>o.formData.phone=i),"has-error":o.v$.phone.$error,class:"form-contacts__input",tag:"input",type:"tel",placeholder:"Phone number...",label:"Phone:",onChange:t[3]||(t[3]=i=>l.handleChange("phone"))},null,8,["modelValue","has-error"]),n(s,{id:"contacts-email",modelValue:o.formData.email,"onUpdate:modelValue":t[4]||(t[4]=i=>o.formData.email=i),"has-error":o.v$.email.$error,class:"form-contacts__input",tag:"input",type:"email",placeholder:"john_doe@gmail.com",label:"Email:",onChange:t[5]||(t[5]=i=>l.handleChange("email"))},null,8,["modelValue","has-error"]),n(s,{id:"contacts-details",modelValue:o.formData.details,"onUpdate:modelValue":t[6]||(t[6]=i=>o.formData.details=i),"has-error":o.v$.details.$error,class:"form-contacts__textarea",tag:"textarea",placeholder:"Enter a detailed description of your project here...",label:"Project details",onChange:t[7]||(t[7]=i=>l.handleChange("details"))},null,8,["modelValue","has-error"]),c("div",de,[n(g,{tag:"span","button-text":"Attach","collapse-on-mobile":"collapse"},{default:u(()=>[n(b)]),_:1}),n(g,{tag:"button","button-text":"Send","collapse-on-mobile":"collapse"},{default:u(()=>[n(L)]),_:1})]),c("pre",null,"      "+y(o.formData)+`
    `,1)],544)}const ue=f(ce,[["render",me],["__scopeId","data-v-903b67bb"]]),fe={name:"ContactsItem",props:{label:{type:String,required:!0}}},_e={class:"contacts-item"},pe={class:"contacts-item__label"},he={class:"contacts-item__text"};function $e(e,t,a,o,r,l){return d(),m("div",_e,[c("span",pe,y(a.label),1),c("span",he,[k(e.$slots,"default",{},void 0,!0)])])}const A=f(fe,[["render",$e],["__scopeId","data-v-558d8093"]]),ge={name:"ContactsData",components:{ContactsItem:A}},xe=e=>(I("data-v-d2dc9602"),e=e(),V(),e),Ce={class:"contacts-data"},be=xe(()=>c("br",null,null,-1));function ve(e,t,a,o,r,l){const s=A;return d(),m("div",Ce,[n(s,{label:"Address"},{default:u(()=>[p(" Schimmelt 245611 ZX "),be,p(" EindhovenThe Netherlands ")]),_:1}),n(s,{label:"Telephone"},{default:u(()=>[p(" +49 89 411422250 ")]),_:1}),n(s,{label:"Mail"},{default:u(()=>[p(" lukovio ")]),_:1})])}const ye=f(ge,[["render",ve],["__scopeId","data-v-d2dc9602"]]),we={name:"SocialNetworksItem",props:{icon:{type:String,required:!0,validator:e=>["icons-font--tg","icons-font--in","icons-font--wa"].includes(e)},linkTo:{type:String,required:!0,default:"#"}}},Se=["href"],ke={class:"social-networks-item__name"};function Ie(e,t,a,o,r,l){return d(),m("a",{class:"social-networks-item",href:a.linkTo},[c("span",{class:S(["social-networks-item__icon",a.icon])},null,2),c("span",ke,[k(e.$slots,"default",{},void 0,!0)])],8,Se)}const z=f(we,[["render",Ie],["__scopeId","data-v-420cef64"]]),Ve={name:"SocialNetworks",components:{SocialNetworksItem:z}},De={class:"social-networks"};function Ae(e,t,a,o,r,l){const s=z;return d(),m("div",De,[n(s,{"link-to":"#",icon:"icons-font--tg"},{default:u(()=>[p(" Telegram ")]),_:1}),n(s,{"link-to":"#",icon:"icons-font--in"},{default:u(()=>[p(" Instagram ")]),_:1}),n(s,{"link-to":"#",icon:"icons-font--wa"},{default:u(()=>[p(" WhatsApp ")]),_:1})])}const ze=f(Ve,[["render",Ae],["__scopeId","data-v-8fd31eb4"]]),Le={name:"Contacts",components:{FormContacts:ue,ContactsData:ye,SocialNetworks:ze}},Be=e=>(I("data-v-3e51e262"),e=e(),V(),e),Ne={class:"contacts"},Fe=Be(()=>c("h2",null,"Please tell what project you want to do with us?",-1)),qe={class:"contacts__grid"},Ee={class:"contacts__other"};function Te(e,t,a,o,r,l){const s=_("FormContacts"),b=_("ContactsData"),g=_("SocialNetworks");return d(),m("div",Ne,[Fe,c("div",qe,[n(s,{class:"contacts__form"}),c("div",Ee,[n(b,{class:"contacts__data"}),n(g)])])])}const Pe=f(Le,[["render",Te],["__scopeId","data-v-3e51e262"]]);export{Pe as default};
