(function(t){function e(e){for(var r,o,s=e[0],i=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},c=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=i;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04d8":function(t,e,a){"use strict";a("f8cd")},"098b":function(t,e,a){"use strict";a("8c4d")},"18b8":function(t,e,a){"use strict";a("9243")},"1f2f":function(t,e,a){t.exports=a.p+"img/error-img.6c30150e.png"},2567:function(t,e,a){},"2c99":function(t,e,a){"use strict";a("413c")},"413c":function(t,e,a){},"4fe2":function(t,e,a){"use strict";a("7114")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("7a23");const n={id:"app"};function c(t,e,a,c,o,s){const i=Object(r["D"])("notifications"),l=Object(r["D"])("router-view");return Object(r["v"])(),Object(r["g"])("div",n,[Object(r["k"])(i,{class:"notify",group:"error",position:"top right",max:"6","close-on-click":"",width:"30%"}),Object(r["k"])(l)])}var o={name:"App"},s=(a("2c99"),a("6b0d")),i=a.n(s);const l=i()(o,[["render",c]]);var d=l,u=a("0d7b");const p=t=>(Object(r["y"])("data-v-3621cb99"),t=t(),Object(r["w"])(),t),h={class:"main-background",id:"main-div"},b={class:"div-block"},m=p(()=>Object(r["h"])("br",null,null,-1)),O=p(()=>Object(r["h"])("br",null,null,-1));function j(t,e,a,n,c,o){const s=Object(r["D"])("Header"),i=Object(r["D"])("TextBlock"),l=Object(r["D"])("AccountBlock"),d=Object(r["D"])("Footer");return Object(r["v"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",h,[Object(r["k"])(s),Object(r["h"])("div",b,[c.info?(Object(r["v"])(),Object(r["e"])(i,{key:0,onClick:e[0]||(e[0]=t=>o.start(t)),button_msg:"Начать"},{default:Object(r["K"])(()=>[Object(r["j"])(" Скрипт определяет попадание точки на координатной плоскости в заданную область. "),m,O,Object(r["j"])(" Параметр R и координаты точки задаются с помощью полей ввода или графика. Итоговая таблица содержит полученные параметры и результат вычислений - факт попадания или непопадания точки в область. ")]),_:1})):Object(r["f"])("",!0),c.account?(Object(r["v"])(),Object(r["e"])(l,{key:1,login:c.login,"onUpdate:login":e[1]||(e[1]=t=>c.login=t),password:c.password,"onUpdate:password":e[2]||(e[2]=t=>c.password=t),onCreateUser:e[3]||(e[3]=t=>o.createUser(t)),onLogIn:e[4]||(e[4]=t=>o.logIn(t))},null,8,["login","password"])):Object(r["f"])("",!0)])]),Object(r["k"])(d)],64)}a("d9e2"),a("14d9");const v=t=>(Object(r["y"])("data-v-faacc712"),t=t(),Object(r["w"])(),t),g=v(()=>Object(r["h"])("div",{id:"title"},[Object(r["h"])("h1",null,"Калькулятор попадания в область")],-1)),f=v(()=>Object(r["h"])("div",{class:"name-div"}," Минтус Евгений Андреевич ",-1)),k=v(()=>Object(r["h"])("div",{class:"variant-div"}," Группа Р32121, вариант 507 ",-1));function y(t,e,a,n,c,o){const s=Object(r["D"])("Link");return Object(r["v"])(),Object(r["g"])("header",null,[g,f,k,Object(r["h"])("nav",null,[Object(r["k"])(s,{href:"https://vk.com/id203830477",name:"ВКонтакте"}),Object(r["k"])(s,{href:"https://github.com/mmmlpmsw",name:"Git"})])])}const x=["href"];function _(t,e,a,n,c,o){return Object(r["v"])(),Object(r["g"])("a",{href:a.href},Object(r["G"])(a.name),9,x)}var w={name:"Link",props:["href","name"]};a("8a0c");const S=i()(w,[["render",_],["__scopeId","data-v-5db0c26c"]]);var B=S,I={name:"Header",components:{Link:B}};a("18b8");const C=i()(I,[["render",y],["__scopeId","data-v-faacc712"]]);var N=C;const A={class:"info-div background"};function G(t,e,a,n,c,o){const s=Object(r["D"])("Button");return Object(r["v"])(),Object(r["g"])("div",A,[Object(r["h"])("p",null,[Object(r["C"])(t.$slots,"default",{},void 0,!0)]),Object(r["k"])(s,{msg:a.button_msg,onClick:e[0]||(e[0]=e=>t.$emit("click"))},null,8,["msg"])])}const R={class:"button"};function D(t,e,a,n,c,o){return Object(r["v"])(),Object(r["g"])("button",R,Object(r["G"])(a.msg),1)}var T={name:"Button",props:["msg"]};a("e5ef");const E=i()(T,[["render",D],["__scopeId","data-v-92c01fb0"]]);var q=E,P={name:"TextBlock",components:{Button:q},props:["button_msg"]};a("7952");const $=i()(P,[["render",G],["__scopeId","data-v-27feded8"]]);var U=$;const L=t=>(Object(r["y"])("data-v-0683ba5a"),t=t(),Object(r["w"])(),t),F={class:"background",id:"account"},M=L(()=>Object(r["h"])("div",{class:"title"},[Object(r["h"])("h2",null,"Вход в аккаунт")],-1)),V=L(()=>Object(r["h"])("h3",null,"Логин",-1)),X=L(()=>Object(r["h"])("h3",null,"Пароль",-1));function Y(t,e,a,n,c,o){const s=Object(r["D"])("Input"),i=Object(r["D"])("ButtonsBlock");return Object(r["v"])(),Object(r["g"])("div",F,[M,Object(r["h"])("div",null,[V,Object(r["k"])(s,{type:"text",id:"loginInput",placeholder:"Username",value:a.login,onInput:e[0]||(e[0]=e=>t.$emit("update:login",e.target.value))},null,8,["value"]),X,Object(r["k"])(s,{type:"password",id:"password",placeholder:"Password",value:a.password,onInput:e[1]||(e[1]=e=>t.$emit("update:password",e.target.value))},null,8,["value"])]),Object(r["k"])(i,{buttons:c.buttons,onLogIn:e[2]||(e[2]=e=>t.$emit("logIn")),onCreateUser:e[3]||(e[3]=e=>t.$emit("createUser"))},null,8,["buttons"])])}function J(t,e,a,n,c,o){const s=Object(r["D"])("Button");return Object(r["v"])(),Object(r["g"])("div",null,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(a.buttons,e=>(Object(r["v"])(),Object(r["g"])("div",{class:"buttons-inline",key:e},[Object(r["k"])(s,{msg:e.msg,onClick:a=>t.$emit(e.command)},null,8,["msg","onClick"])]))),128))])}var W={name:"ButtonsBlock",components:{Button:q},props:["buttons"]};a("68db");const z=i()(W,[["render",J],["__scopeId","data-v-caf7ca9e"]]);var H=z;const K=["type","name","placeholder","value"];function Q(t,e,a,n,c,o){return Object(r["v"])(),Object(r["g"])("input",{type:a.type,name:a.name,maxlength:"17",autocomplete:"off",placeholder:a.placeholder,value:a.param,onInput:e[0]||(e[0]=e=>t.$emit("update:param",e.target.value))},null,40,K)}var Z={name:"Input",props:["type","name","placeholder","param"],emits:["update:param"]};a("b23c");const tt=i()(Z,[["render",Q],["__scopeId","data-v-49a708d3"]]);var et=tt,at={name:"AccountBlock",props:["login","password"],emits:["update:login","update:password"],components:{Input:et,ButtonsBlock:H},data(){return{buttons:[{msg:"Войти",command:"logIn"},{msg:"Создать",command:"createUser"}]}}};a("4fe2");const rt=i()(at,[["render",Y],["__scopeId","data-v-0683ba5a"]]);var nt=rt;const ct=t=>(Object(r["y"])("data-v-606420c9"),t=t(),Object(r["w"])(),t),ot=ct(()=>Object(r["h"])("div",null,[Object(r["h"])("p",null,[Object(r["j"])("Студентческий проект по предмету "),Object(r["h"])("br"),Object(r["j"])(" веб-программировние")])],-1));function st(t,e,a,n,c,o){const s=Object(r["D"])("Link");return Object(r["v"])(),Object(r["g"])("footer",null,[ot,Object(r["h"])("nav",null,[Object(r["k"])(s,{href:"https://itmo.ru/",name:"Университет ИТМО"})])])}var it={name:"Footer",components:{Link:B}};a("a059");const lt=i()(it,[["render",st],["__scopeId","data-v-606420c9"]]);var dt=lt,ut={components:{Footer:dt,Header:N,TextBlock:U,AccountBlock:nt},name:"Index",data(){return{login:"",password:"",account:!1,info:!0}},beforeMount(){localStorage.removeItem("par")},methods:{createUser(){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.login,password:this.password})};this.sendRequest(t,"/api/user/new-user")},logIn(){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.login,password:this.password})};this.sendRequest(t,"/api/user/check-user")},start(){this.account=!0,this.info=!1},sendRequest(t,e){fetch(e,t).then(t=>t.ok?t.text():t.text().then(t=>{throw new Error(t)})).then(t=>{localStorage.setItem("par",t),this.$router.push({name:"main-page"})}).catch(t=>{localStorage.removeItem("par"),this.$notify({group:"error",title:"Ошибка",text:t.message,type:"error"})})}}};a("d329");const pt=i()(ut,[["render",j],["__scopeId","data-v-3621cb99"]]);var ht=pt;const bt={class:"main-background div-block"},mt={class:"div-block",id:"div-inline"},Ot={class:"div-inline"},jt={class:"div-block",id:"div-buttons"},vt={class:"div-block",id:"result-table"};function gt(t,e,a,n,c,o){const s=Object(r["D"])("Header"),i=Object(r["D"])("PictureGraph"),l=Object(r["D"])("ArgsBlock"),d=Object(r["D"])("ButtonsBlock"),u=Object(r["D"])("ResultTable"),p=Object(r["D"])("Footer");return Object(r["v"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",null,[Object(r["k"])(s),Object(r["h"])("div",bt,[Object(r["h"])("div",mt,[Object(r["h"])("div",Ot,[Object(r["k"])(i,{data:c.data,param_r:c.param_r,onClickOnSVG:e[0]||(e[0]=t=>o.clickOnSVG(t))},null,8,["data","param_r"])]),Object(r["k"])(l,{class:"div-inline",param_x:c.param_x,"onUpdate:param_x":e[1]||(e[1]=t=>c.param_x=t),param_r:c.param_r,"onUpdate:param_r":e[2]||(e[2]=t=>c.param_r=t),param_y:c.param_y,"onUpdate:param_y":e[3]||(e[3]=t=>c.param_y=t)},null,8,["param_x","param_r","param_y"])]),Object(r["h"])("div",jt,[Object(r["k"])(d,{buttons:c.buttons,onGoBack:o.goBack,onSubmit:o.submit,onClear:o.clear},null,8,["buttons","onGoBack","onSubmit","onClear"])])]),Object(r["h"])("div",vt,[Object(r["k"])(u,{data:c.data,"onUpdate:data":e[4]||(e[4]=t=>c.data=t)},null,8,["data"])])]),Object(r["k"])(p)],64)}a("5b81");const ft=Object(r["i"])('<polygon points="100,100 100,20 60,100" class="svg-figure-color" stroke-width="2"></polygon><polygon points="100,180 60,180 60,100 100,100" class="svg-figure-color" stroke-width="2"></polygon><path d="M100,100 h40 a40,40 0 0,0 -40,-40z" class="svg-figure-color" stroke-width="2"></path><line x1="100" y1="0" x2="100" y2="200" stroke-width="2" class="svg-line-color"></line><line x1="0" y1="100" x2="200" y2="100" stroke-width="2" class="svg-line-color"></line><line x1="97" y1="60" x2="103" y2="60" stroke-width="2" class="svg-line-color"></line><line x1="97" y1="20" x2="103" y2="20" stroke-width="2" class="svg-line-color"></line><line x1="97" y1="140" x2="103" y2="140" stroke-width="2" class="svg-line-color"></line><line x1="97" y1="180" x2="103" y2="180" stroke-width="2" class="svg-line-color"></line><line x1="60" y1="97" x2="60" y2="103" stroke-width="2" class="svg-line-color"></line><line x1="20" y1="97" x2="20" y2="103" stroke-width="2" class="svg-line-color"></line><line x1="140" y1="97" x2="140" y2="103" stroke-width="2" class="svg-line-color"></line><line x1="180" y1="97" x2="180" y2="103" stroke-width="2" class="svg-line-color"></line><line x1="100" y1="0" x2="95" y2="10" stroke-width="2" class="svg-line-color"></line><line x1="100" y1="0" x2="105" y2="10" stroke-width="2" class="svg-line-color"></line><line x1="200" y1="100" x2="190" y2="105" stroke-width="2" class="svg-line-color"></line><line x1="200" y1="100" x2="190" y2="95" stroke-width="2" class="svg-line-color"></line>',17),kt={x:"30",y:"92",class:"svg-text"},yt={x:"6",y:"92",class:"svg-text"},xt={x:"107",y:"30",class:"svg-text"},_t={x:"107",y:"70",class:"svg-text"},wt=Object(r["h"])("text",{x:"110",y:"10",class:"svg-text"},"y",-1),St={x:"130",y:"92",class:"svg-text"},Bt={x:"170",y:"92",class:"svg-text"},It=Object(r["h"])("text",{x:"190",y:"92",class:"svg-text"},"x",-1),Ct={x:"107",y:"140",class:"svg-text"},Nt={x:"107",y:"180",class:"svg-text"};function At(t,e,a,n,c,o){return Object(r["v"])(),Object(r["g"])("svg",{id:"svg",width:"210",height:"210",xmlns:"http://www.w3.org/2000/svg",onClick:e[0]||(e[0]=e=>t.$emit("clickOnSVG"))},[ft,Object(r["h"])("text",kt,Object(r["G"])(a.param_r/2),1),Object(r["h"])("text",yt,Object(r["G"])(a.param_r),1),Object(r["h"])("text",xt,Object(r["G"])(a.param_r),1),Object(r["h"])("text",_t,Object(r["G"])(a.param_r/2),1),wt,Object(r["h"])("text",St,Object(r["G"])(a.param_r/2),1),Object(r["h"])("text",Bt,Object(r["G"])(a.param_r),1),It,Object(r["h"])("text",Ct,Object(r["G"])(a.param_r/2),1),Object(r["h"])("text",Nt,Object(r["G"])(a.param_r),1)])}var Gt={name:"PictureGraph",props:["data","param_r"],watch:{data(){this.drawAll()},param_r(){this.drawAll()}},methods:{drawAll(){if(this.deletePointsFromSVG(),0!==this.data.length)for(let t=0;t<this.data.length;t++){let e=this.data[t];const a=e.x,r=e.y,n=e.r,c=e.answer;let o;isNaN(a)||isNaN(r)||(this.param_r.length>0?(o=this.param_r==n,this.drawPoint(a,r,this.param_r,c,o)):(o=1==n,this.drawPoint(a,r,1,c,o)))}},drawPoint(t,e,a,r,n){let c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("cx",(80*t/a+100).toString()),c.setAttribute("cy",(-80*e/a+100).toString()),c.setAttribute("r",3..toString()),c.setAttribute("data-x",t),c.setAttribute("data-y",e),n?r?c.classList.add("good-coord"):c.classList.add("bad-coord"):c.classList.add("old-coord"),document.getElementById("svg").appendChild(c)},deletePointsFromSVG(){document.querySelectorAll(".good-coord").forEach(t=>t.remove()),document.querySelectorAll(".bad-coord").forEach(t=>t.remove()),document.querySelectorAll(".old-coord").forEach(t=>t.remove())}}};a("a516");const Rt=i()(Gt,[["render",At]]);var Dt=Rt;const Tt=t=>(Object(r["y"])("data-v-4ca541f8"),t=t(),Object(r["w"])(),t),Et=Tt(()=>Object(r["h"])("thead",null,[Object(r["h"])("tr",null,[Object(r["h"])("th",{id:"real-time"},"Текущее время"),Object(r["h"])("th",{id:"X"},"X"),Object(r["h"])("th",{id:"Y"},"Y"),Object(r["h"])("th",{id:"R"},"R"),Object(r["h"])("th",{id:"flag"},"Результат")])],-1)),qt={key:0},Pt={key:1};function $t(t,e,a,n,c,o){return Object(r["v"])(),Object(r["g"])("table",null,[Et,Object(r["h"])("tbody",null,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(a.data,t=>(Object(r["v"])(),Object(r["g"])("tr",{key:t},[Object(r["h"])("td",null,Object(r["G"])(t.time),1),Object(r["h"])("td",null,Object(r["G"])(t.x),1),Object(r["h"])("td",null,Object(r["G"])(t.y),1),Object(r["h"])("td",null,Object(r["G"])(t.r),1),t.answer?(Object(r["v"])(),Object(r["g"])("td",qt,"да")):(Object(r["v"])(),Object(r["g"])("td",Pt,"нет"))]))),128))])])}var Ut={name:"ResultTable",props:["data"]};a("04d8");const Lt=i()(Ut,[["render",$t],["__scopeId","data-v-4ca541f8"]]);var Ft=Lt;const Mt=t=>(Object(r["y"])("data-v-17938929"),t=t(),Object(r["w"])(),t),Vt={class:"background"},Xt=Mt(()=>Object(r["h"])("p",null,"X:",-1)),Yt=Mt(()=>Object(r["h"])("p",null,"Y:",-1)),Jt={class:"background"},Wt=Mt(()=>Object(r["h"])("p",null,"R:",-1));function zt(t,e,a,n,c,o){const s=Object(r["D"])("RadioBoxChain"),i=Object(r["D"])("Input"),l=Object(r["D"])("BoxChainOne");return Object(r["v"])(),Object(r["g"])("div",null,[Object(r["h"])("div",Vt,[Xt,Object(r["k"])(s,{radio_data:c.radio_data,param_x:c.x,"onUpdate:param_x":e[0]||(e[0]=t=>c.x=t),radio_name:"xCheckbox"},null,8,["radio_data","param_x"])]),Object(r["h"])("div",null,[Yt,Object(r["k"])(i,{class:"input-with-check",name:"y",placeholder:"Введите число: (-3; 3)",param:c.y,"onUpdate:param":e[1]||(e[1]=t=>c.y=t)},null,8,["param"])]),Object(r["h"])("div",Jt,[Wt,Object(r["k"])(l,{radio_data:c.radio_data,param_x:c.r,"onUpdate:param_x":e[2]||(e[2]=t=>c.r=t),radio_name:"rCheckbox"},null,8,["radio_data","param_x"])])])}const Ht=["name","value"];function Kt(t,e,a,n,c,o){return Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(a.radio_data,t=>(Object(r["v"])(),Object(r["g"])("div",{key:t,class:"labels"},[Object(r["h"])("label",null,[Object(r["L"])(Object(r["h"])("input",{name:a.radio_name,type:"checkbox",value:t,"onUpdate:modelValue":e[0]||(e[0]=t=>c.checkedNames=t)},null,8,Ht),[[r["I"],c.checkedNames]]),Object(r["h"])("p",null,Object(r["G"])(t),1)])]))),128)}var Qt={name:"RadioBoxChain",props:["radio_data","param_x","radio_name"],emits:["update:param_x"],data(){return{checkedNames:[]}},watch:{checkedNames(t){this.$emit("update:param_x",t)}}};a("8adf");const Zt=i()(Qt,[["render",Kt],["__scopeId","data-v-280ae7ed"]]);var te=Zt;const ee=["name","value","checked"];function ae(t,e,a,n,c,o){return Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(a.radio_data,t=>(Object(r["v"])(),Object(r["g"])("div",{key:t,class:"labels"},[Object(r["h"])("label",null,[Object(r["h"])("input",{name:a.radio_name,type:"checkbox",value:t,checked:o.checkSelection(t),onInput:e[0]||(e[0]=(...t)=>o.setCheckedName&&o.setCheckedName(...t))},null,40,ee),Object(r["h"])("p",null,Object(r["G"])(t),1)])]))),128)}var re={name:"BoxChainOne",props:["radio_data","param_x","radio_name"],emits:["update:param_x"],data(){return{checkedName:""}},methods:{setCheckedName(t){console.dir(t.target.value),this.checkedName!==t.target.value?this.checkedName=t.target.value:this.checkedName="",this.$emit("update:param_x",this.checkedName)},checkSelection(t){return console.log(t),Number(t)===Number(this.checkedName)}}};a("f992");const ne=i()(re,[["render",ae],["__scopeId","data-v-46e38be7"]]);var ce=ne,oe={name:"ArgsBlock",components:{Input:et,RadioBoxChain:te,BoxChainOne:ce},props:["param_x","param_r","param_y"],emits:["update:param_x","update:param_r","update:param_y"],data(){return{radio_data:[-3,-2,-1,0,1,2,3,4,5],x:[],r:0,y:""}},watch:{r(t){this.$emit("update:param_r",t)},x(t){this.$emit("update:param_x",t)},y(t){this.$emit("update:param_y",t)},param_x(t){this.x=t},param_r(t){this.r=t},param_y(t){this.y=t}}};a("f1d3");const se=i()(oe,[["render",zt],["__scopeId","data-v-17938929"]]);var ie=se;let le;var de={components:{Footer:dt,Header:N,PictureGraph:Dt,ButtonsBlock:H,ResultTable:Ft,ArgsBlock:ie},name:"Main",data(){return{param_x:[],param_y:"",param_r:1,data:new Array(0),buttons:[{msg:"выйти",command:"goBack"},{msg:"результат",command:"submit"},{msg:"очистить",command:"clear"}]}},created:function(){document.addEventListener("beforeunload",this.handlerClose)},watch:{param_r(t){this.checkR(t)}},methods:{handleClose(){localStorage.removeItem("par")},goBack(){localStorage.removeItem("par"),this.$router.push({name:"auth-page"})},clickOnSVG(){this.checkR(this.param_r)?(this.param_x=(event.offsetX-100)/80*this.param_r,this.param_y=(100-event.offsetY)/80*this.param_r,this.sendRequestWithArgs()):this.showError("R должен быть (0,5]")},sendRequestWithArgs(t=this.param_x){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("par")},body:JSON.stringify({x:t,y:this.param_y,r:this.param_r})},a="/api/data/add-data";this.sendRequest(a,e)},sendRequestWithArgsTik(t=this.param_x){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("par")},body:JSON.stringify({x:t,y:this.param_y.replaceAll(",","."),r:this.param_r})},a="/api/data/add-data";this.sendRequest(a,e)},loadData(){const t={method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("par")}},e="/api/data/get-data";this.sendRequestWithData(e,t)},clear(){const t={method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("par")}},e="/api/data/delete";this.sendRequest(e,t),this.data=[],this.param_x=-5,this.param_r=1,document.querySelector(".input-with-check").value="",document.querySelector(".input-with-check").classList.remove("error-input")},sendRequestWithData(t,e){fetch(t,e).then(t=>t.ok?t.json():t.text().then(t=>{throw new Error(t)})).then(t=>{this.data=t}).catch(t=>{this.showError(t.message)})},sendRequest(t,e){fetch(t,e).then(t=>t.ok?t:t.text().then(t=>{throw new Error(t)})).then(()=>{this.loadData()}).catch(t=>{this.showError(t.message)})},checkR(t){const e=5,a=0;return!isNaN(t)&&parseFloat(t)>a&&parseFloat(t)<=e||(this.showError("R должен быть выбран и находиться в пределах (0;5]"),!1)},checkY(t){const e=3,a=-3;return!isNaN(t)&&parseFloat(t)>a&&parseFloat(t)<e?(document.querySelector(".input-with-check").classList.remove("error-input"),!0):(document.querySelector(".input-with-check").classList.add("error-input"),this.showError("Y должен быть в пределах от -3 до 3"),!1)},checkX(t){const e=5,a=-3;return!isNaN(t)&&parseFloat(t)>=a&&parseFloat(t)<=e||(this.showError("X должен быть выбран и находиться в пределах [-3;5]"),!1)},submit(){for(let t=0;t<this.param_x.length;t++)this.checkX(this.param_x[t])&&this.checkY(this.param_y.replaceAll(",","."))&&this.checkR(this.param_r)&&this.sendRequestWithArgsTik(this.param_x[t])},showError(t){this.$notify({group:"error",title:"Ошибка",text:t,type:"error"})}},mounted(){le=window.setInterval(function(){this.loadData()}.bind(this),1e3)},unmounted(){clearInterval(le)}};a("5f36");const ue=i()(de,[["render",gt]]);var pe=ue,he=a("1f2f"),be=a.n(he);const me=t=>(Object(r["y"])("data-v-705b910b"),t=t(),Object(r["w"])(),t),Oe={id:"main-div",class:"main-background"},je=me(()=>Object(r["h"])("div",{class:"div-block"},[Object(r["h"])("img",{id:"error-img",src:be.a,alt:"Error image"})],-1)),ve={class:"div-block"};function ge(t,e,a,n,c,o){const s=Object(r["D"])("TextBlock");return Object(r["v"])(),Object(r["g"])("div",Oe,[je,Object(r["h"])("div",ve,[Object(r["k"])(s,{button_msg:"На главную",onClick:o.goToStart},{default:Object(r["K"])(()=>[Object(r["j"])(" Что-то пошло не так... Вернитесь, пожалуйста, на стартовую страницу ")]),_:1},8,["onClick"])])])}var fe={name:"NotFoundError",components:{TextBlock:U},props:{errorCode:String,errorMessage:String},methods:{goToStart(){localStorage.removeItem("par"),this.$router.push({name:"auth-page"})}}};a("098b");const ke=i()(fe,[["render",ge],["__scopeId","data-v-705b910b"]]);var ye=ke,xe=a("6605");const _e=[{path:"/",name:"index-page",component:ht},{path:"/auth",name:"auth-page",component:ht},{path:"/main",name:"main-page",component:pe,beforeEnter:(t,e,a)=>{null!==localStorage.getItem("par")?a():a({name:"auth-page"})}},{path:"/:pathMatch(.*)*",name:"error-page",component:ye,props:{errorCode:"404",errorMessage:"Данной страницы не существует"}}],we=Object(xe["a"])({history:Object(xe["b"])(),routes:_e});var Se=we;r["d"](d).use(Se).use(u["a"]).mount("#app")},"5f36":function(t,e,a){"use strict";a("9a58")},"62f0":function(t,e,a){},"68db":function(t,e,a){"use strict";a("fbc1")},7114:function(t,e,a){},7778:function(t,e,a){},7952:function(t,e,a){"use strict";a("2567")},"8a0c":function(t,e,a){"use strict";a("b68e")},"8adf":function(t,e,a){"use strict";a("f5b9")},"8c4d":function(t,e,a){},9152:function(t,e,a){},9243:function(t,e,a){},"9a58":function(t,e,a){},"9b5f":function(t,e,a){},a059:function(t,e,a){"use strict";a("f1fe")},a516:function(t,e,a){"use strict";a("d942")},b23c:function(t,e,a){"use strict";a("ecc2")},b68e:function(t,e,a){},d329:function(t,e,a){"use strict";a("9b5f")},d942:function(t,e,a){},e5ef:function(t,e,a){"use strict";a("62f0")},ecc2:function(t,e,a){},f1d3:function(t,e,a){"use strict";a("7778")},f1fe:function(t,e,a){},f5b9:function(t,e,a){},f8cd:function(t,e,a){},f992:function(t,e,a){"use strict";a("9152")},fbc1:function(t,e,a){}});
//# sourceMappingURL=app.da5f4048.js.map