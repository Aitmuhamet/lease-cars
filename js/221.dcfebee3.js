"use strict";(self["webpackChunklease_cars"]=self["webpackChunklease_cars"]||[]).push([[221],{8188:function(e,s,a){a.d(s,{A:function(){return h}});var t=a(641);const r={class:"car-posts"},o={class:"car-posts__img-wrapper"},i=["src"],m={class:"car-posts__content"};function l(e,s,a,l,n,c){const u=(0,t.g2)("base-heading"),d=(0,t.g2)("base-button");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("section",r,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.posts,((e,a)=>((0,t.uX)(),(0,t.CE)("div",{class:"car-posts__item",key:a},[(0,t.Lk)("div",o,[(0,t.Lk)("img",{src:c.getImageSrc(e.imgSrc),alt:""},null,8,i)]),(0,t.Lk)("div",m,[(0,t.bF)(u,{title:e.title,level:"4","custom-class":"heading-h4 car-posts__title"},null,8,["title"]),s[0]||(s[0]=(0,t.Lk)("button",{class:"car-posts__btn"},"more",-1))])])))),128))]),(0,t.bF)(d,{title:"show more",class:"show-more"})],64)}var n=a(6278),c=a(7678),u=a(8783),d={computed:{...(0,n.L8)("cars",{posts:"postsData"})},methods:{getImageSrc(e){let s;try{s=a(1382)(`./${e}`)}catch(t){console.log("error:",t),console.log("error message:",t.message),s=a(2283)}return s}},components:{BaseHeading:c.A,BaseButton:u.A}},g=a(6262);const p=(0,g.A)(d,[["render",l]]);var h=p},8783:function(e,s,a){a.d(s,{A:function(){return n}});var t=a(641),r=a(33);function o(e,s,a,o,i,m){return(0,t.uX)(),(0,t.CE)("button",{class:(0,r.C4)(a.customClass)},(0,r.v_)(a.title),3)}var i={props:{title:{type:String,required:!0},customClass:{type:String,default:""}}},m=a(6262);const l=(0,m.A)(i,[["render",o],["__scopeId","data-v-443cc466"]]);var n=l},5221:function(e,s,a){a.r(s),a.d(s,{default:function(){return S}});var t=a(641),r=a(33);const o={class:"container"};function i(e,s,a,i,m,l){const n=(0,t.g2)("feedback-form"),c=(0,t.g2)("cars-posts");return(0,t.uX)(),(0,t.CE)("main",{class:(0,r.C4)({main:!0,"page-top-padding":!1===e.$route.meta.mainPage})},[(0,t.Lk)("div",o,[(0,t.bF)(n),(0,t.bF)(c)])],2)}var m=a(8188),l=a(3751);const n={class:"feedback-form"},c={class:"form-group"},u={key:0,class:"error-message"},d={class:"form-group"},g={key:0,class:"error-message"},p={class:"form-group"},h={key:0,class:"error-message"},f={class:"btn-wrapper"},v=["disabled"];function b(e,s,a,o,i,m){const b=(0,t.g2)("base-heading");return(0,t.uX)(),(0,t.CE)("div",n,[(0,t.bF)(b,{title:"Contact Us",level:"2","custom-class":"heading-h2 feedback-form__title"},{default:(0,t.k6)((()=>s[7]||(s[7]=[(0,t.eW)("Форма обратной связи")]))),_:1}),s[8]||(s[8]=(0,t.Lk)("p",{class:"feedback-form__subtile"},"Feel free to contact us with questions, potencial partnerships or media inquiries ",-1)),(0,t.Lk)("form",{onSubmit:s[6]||(s[6]=(0,l.D$)(((...e)=>m.handleSubmit&&m.handleSubmit(...e)),["prevent"]))},[(0,t.Lk)("div",c,[(0,t.bo)((0,t.Lk)("input",{id:"name","onUpdate:modelValue":s[0]||(s[0]=e=>i.formData.name=e),type:"text",class:(0,r.C4)({error:i.errors.name}),onBlur:s[1]||(s[1]=(...e)=>m.validateName&&m.validateName(...e)),placeholder:"Name"},null,34),[[l.Jo,i.formData.name]]),i.errors.name?((0,t.uX)(),(0,t.CE)("span",u,(0,r.v_)(i.errors.name),1)):(0,t.Q3)("",!0)]),(0,t.Lk)("div",d,[(0,t.bo)((0,t.Lk)("input",{id:"email","onUpdate:modelValue":s[2]||(s[2]=e=>i.formData.email=e),type:"email",class:(0,r.C4)({error:i.errors.email}),onBlur:s[3]||(s[3]=(...e)=>m.validateEmail&&m.validateEmail(...e)),placeholder:"E-mail"},null,34),[[l.Jo,i.formData.email]]),i.errors.email?((0,t.uX)(),(0,t.CE)("span",g,(0,r.v_)(i.errors.email),1)):(0,t.Q3)("",!0)]),(0,t.Lk)("div",p,[(0,t.bo)((0,t.Lk)("textarea",{id:"message","onUpdate:modelValue":s[4]||(s[4]=e=>i.formData.message=e),class:(0,r.C4)({error:i.errors.message}),onBlur:s[5]||(s[5]=(...e)=>m.validateMessage&&m.validateMessage(...e)),placeholder:"Your text"},null,34),[[l.Jo,i.formData.message]]),i.errors.message?((0,t.uX)(),(0,t.CE)("span",h,(0,r.v_)(i.errors.message),1)):(0,t.Q3)("",!0)]),(0,t.Lk)("div",f,[(0,t.Lk)("button",{type:"submit",disabled:!m.isFormValid,class:"feedback-form__btn"},"Submit",8,v)])],32),i.submitStatus?((0,t.uX)(),(0,t.CE)("div",{key:0,class:(0,r.C4)(["status-message",i.submitStatus.type])},(0,r.v_)(i.submitStatus.message),3)):(0,t.Q3)("",!0)])}var k=a(7678),_={name:"FeedbackForm",components:{BaseHeading:k.A},data(){return{formData:{name:"",email:"",message:""},errors:{name:"",email:"",message:""},submitStatus:null}},computed:{isFormValid(){return this.formData.name&&this.formData.email&&this.formData.message&&!this.errors.name&&!this.errors.email&&!this.errors.message}},methods:{validateName(){this.formData.name?this.formData.name.length<2?this.errors.name="Имя должно содержать минимум 2 символа":this.errors.name="":this.errors.name="Имя обязательно для заполнения"},validateEmail(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.formData.email?e.test(this.formData.email)?this.errors.email="":this.errors.email="Введите корректный email адрес":this.errors.email="Email обязателен для заполнения"},validateMessage(){this.formData.message?this.formData.message.length<10?this.errors.message="Сообщение должно содержать минимум 10 символов":this.errors.message="":this.errors.message="Сообщение обязательно для заполнения"},async handleSubmit(){if(this.validateName(),this.validateEmail(),this.validateMessage(),this.isFormValid)try{this.submitStatus={type:"success",message:"Сообщение успешно отправлено!"},this.formData={name:"",email:"",message:""}}catch(e){this.submitStatus={type:"error",message:"Произошла ошибка при отправке сообщения."}}}}},C=a(6262);const D=(0,C.A)(_,[["render",b]]);var L=D,y={components:{CarsPosts:m.A,FeedbackForm:L}};const E=(0,C.A)(y,[["render",i],["__scopeId","data-v-1dc722f4"]]);var S=E}}]);
//# sourceMappingURL=221.dcfebee3.js.map