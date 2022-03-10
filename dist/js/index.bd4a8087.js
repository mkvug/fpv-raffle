(function(){"use strict";var t={9447:function(t,e,o){var s=o(9242),n=o(3396),r=o(7139);const a={class:"app-wrapper"},u={class:"contestants"},c={class:"raffle"};function i(t,e,o,i,l,m){const d=(0,n.up)("Header"),h=(0,n.up)("SettingsForm"),p=(0,n.up)("Textarea"),f=(0,n.up)("Tickets"),g=(0,n.up)("the-drone"),v=(0,n.up)("post-raffle"),w=(0,n.up)("the-footer");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(d),(0,n._)("section",{class:(0,r.C_)(["settings",m.showSettings])},[(0,n.Wm)(h)],2),(0,n.wy)((0,n._)("section",u,[(0,n.Wm)(p)],512),[[s.F8,m.showContestants]]),(0,n.wy)((0,n._)("section",c,[((0,n.wg)(),(0,n.j4)(f,{key:this.$store.state.winnerKey,class:(0,r.C_)(this.$store.state.ticketsClass)},null,8,["class"])),(0,n.Wm)(g,{class:(0,r.C_)(this.$store.state.droneClass)},null,8,["class"]),(0,n.Wm)(v,{class:(0,r.C_)(this.$store.state.postRaffleClass)},null,8,["class"])],512),[[s.F8,m.showRaffle]]),(0,n.Wm)(w)])}const l=t=>((0,n.dD)("data-v-872cf46e"),t=t(),(0,n.Cn)(),t),m=l((()=>(0,n._)("h1",null,"FPV Raffle",-1))),d={class:"settings"};function h(t,e,o,s,r,a){const u=(0,n.up)("IconSettings");return(0,n.wg)(),(0,n.iD)("header",null,[m,(0,n._)("div",d,[(0,n._)("button",{onClick:e[0]||(e[0]=(...t)=>a.toggleSettings&&a.toggleSettings(...t))},[(0,n.Wm)(u)])])])}const p={fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px"},f=(0,n._)("path",{d:"M39.139,26.282C38.426,25.759,38,24.919,38,24.034s0.426-1.725,1.138-2.247l3.294-2.415\tc0.525-0.386,0.742-1.065,0.537-1.684c-0.848-2.548-2.189-4.872-3.987-6.909c-0.433-0.488-1.131-0.642-1.728-0.38l-3.709,1.631\tc-0.808,0.356-1.749,0.305-2.516-0.138c-0.766-0.442-1.28-1.23-1.377-2.109l-0.446-4.072c-0.071-0.648-0.553-1.176-1.191-1.307\tc-2.597-0.531-5.326-0.54-7.969-0.01c-0.642,0.129-1.125,0.657-1.196,1.308l-0.442,4.046c-0.097,0.88-0.611,1.668-1.379,2.11\tc-0.766,0.442-1.704,0.495-2.515,0.138l-3.729-1.64c-0.592-0.262-1.292-0.11-1.725,0.377c-1.804,2.029-3.151,4.35-4.008,6.896\tc-0.208,0.618,0.008,1.301,0.535,1.688l3.273,2.4C9.574,22.241,10,23.081,10,23.966s-0.426,1.725-1.138,2.247l-3.294,2.415\tc-0.525,0.386-0.742,1.065-0.537,1.684c0.848,2.548,2.189,4.872,3.987,6.909c0.433,0.489,1.133,0.644,1.728,0.38l3.709-1.631\tc0.808-0.356,1.748-0.305,2.516,0.138c0.766,0.442,1.28,1.23,1.377,2.109l0.446,4.072c0.071,0.648,0.553,1.176,1.191,1.307\tC21.299,43.864,22.649,44,24,44c1.318,0,2.648-0.133,3.953-0.395c0.642-0.129,1.125-0.657,1.196-1.308l0.443-4.046\tc0.097-0.88,0.611-1.668,1.379-2.11c0.766-0.441,1.705-0.493,2.515-0.138l3.729,1.64c0.594,0.263,1.292,0.111,1.725-0.377\tc1.804-2.029,3.151-4.35,4.008-6.896c0.208-0.618-0.008-1.301-0.535-1.688L39.139,26.282z M24,31c-3.866,0-7-3.134-7-7s3.134-7,7-7\ts7,3.134,7,7S27.866,31,24,31z"},null,-1),g=[f];function v(t,e){return(0,n.wg)(),(0,n.iD)("svg",p,g)}var w=o(89);const C={},k=(0,w.Z)(C,[["render",v]]);var y=k,b={methods:{toggleSettings(){this.$store.commit("toggleSettings")}},components:{IconSettings:y}};const _=(0,w.Z)(b,[["render",h],["__scopeId","data-v-872cf46e"]]);var T=_;const $=(0,n._)("h2",null,"Settings",-1),B={class:"form-element"},x=(0,n._)("label",{for:"duration"},"Duration",-1),D={class:"form-element"},H=(0,n._)("label",{for:"quad"},"Quad",-1),S=(0,n._)("option",{value:"player1"},"Player 1",-1),I=(0,n._)("option",{value:"crush"},"MQTB Crush Light",-1),F=(0,n._)("option",{value:"sourceone"},"Source One",-1),P=[S,I,F],q={class:"form-element"},R=(0,n._)("label",{for:"custom-theme"},"Custom Theme",-1),M={key:0,class:"form-element"},z=(0,n._)("label",{for:"custom-background"},"Background",-1),W={key:1,class:"form-element"},O=(0,n._)("label",{for:"custom-header"},"Header Background",-1),V={key:2,class:"form-element"},U=(0,n._)("label",{for:"custom-header-color"},"Header Text",-1),Z={key:3,class:"form-element"},j=(0,n._)("label",{for:"custom-header-color"},"Text Color",-1),Y={key:4,class:"form-element"},A=(0,n._)("label",{for:"custom-button"},"Button Background",-1),L={key:5,class:"form-element"},E=(0,n._)("label",{for:"custom-button"},"Button Text",-1),K=(0,n._)("input",{type:"submit",value:"Save"},null,-1);function N(t,e,o,r,a,u){const c=(0,n.up)("Field"),i=(0,n.up)("ErrorMessage"),l=(0,n.up)("Form");return(0,n.wg)(),(0,n.iD)(n.HY,null,[$,(0,n.Wm)(l,{onSubmit:u.updateSettings},{default:(0,n.w5)((()=>[(0,n._)("div",B,[x,(0,n.Wm)(c,{type:"text",id:"duration",name:"duration",modelValue:u.duration,"onUpdate:modelValue":e[0]||(e[0]=t=>u.duration=t),rules:u.validateDuration},null,8,["modelValue","rules"]),(0,n.Wm)(i,{name:"duration"})]),(0,n._)("div",D,[H,(0,n.wy)((0,n._)("select",{name:"quad",id:"quad","onUpdate:modelValue":e[1]||(e[1]=t=>u.quad=t)},P,512),[[s.bM,u.quad]])]),(0,n._)("div",q,[R,(0,n.wy)((0,n._)("input",{type:"checkbox",name:"custom-theme",id:"custom-theme","onUpdate:modelValue":e[2]||(e[2]=t=>u.customTheme=t)},null,512),[[s.e8,u.customTheme]])]),u.customTheme?((0,n.wg)(),(0,n.iD)("div",M,[z,(0,n.wy)((0,n._)("input",{type:"color",name:"custom-background",id:"custom-background","onUpdate:modelValue":e[3]||(e[3]=t=>u.customBackground=t)},null,512),[[s.nr,u.customBackground]])])):(0,n.kq)("",!0),u.customTheme?((0,n.wg)(),(0,n.iD)("div",W,[O,(0,n.wy)((0,n._)("input",{type:"color",name:"custom-header",id:"custom-header","onUpdate:modelValue":e[4]||(e[4]=t=>u.customHeader=t)},null,512),[[s.nr,u.customHeader]])])):(0,n.kq)("",!0),u.customTheme?((0,n.wg)(),(0,n.iD)("div",V,[U,(0,n.wy)((0,n._)("input",{type:"color",name:"custom-header-color",id:"custom-header-color","onUpdate:modelValue":e[5]||(e[5]=t=>u.customHeaderColor=t)},null,512),[[s.nr,u.customHeaderColor]])])):(0,n.kq)("",!0),u.customTheme?((0,n.wg)(),(0,n.iD)("div",Z,[j,(0,n.wy)((0,n._)("input",{type:"color",name:"custom-text-color",id:"custom-text-color","onUpdate:modelValue":e[6]||(e[6]=t=>u.customTextColor=t)},null,512),[[s.nr,u.customTextColor]])])):(0,n.kq)("",!0),u.customTheme?((0,n.wg)(),(0,n.iD)("div",Y,[A,(0,n.wy)((0,n._)("input",{type:"color",name:"custom-button",id:"custom-button","onUpdate:modelValue":e[7]||(e[7]=t=>u.customButton=t)},null,512),[[s.nr,u.customButton]])])):(0,n.kq)("",!0),u.customTheme?((0,n.wg)(),(0,n.iD)("div",L,[E,(0,n.wy)((0,n._)("input",{type:"color",name:"custom-button-text",id:"custom-button-text","onUpdate:modelValue":e[8]||(e[8]=t=>u.customButtonColor=t)},null,512),[[s.nr,u.customButtonColor]])])):(0,n.kq)("",!0),K])),_:1},8,["onSubmit"])],64)}var Q=o(5708),X={components:{Form:Q.l0,Field:Q.gN,ErrorMessage:Q.Bc},data(){return{durationError:null}},computed:{duration:{get(){return this.$store.state.duration},set(t){this.$store.commit("udpateDuration",t)}},quad:{get(){return this.$store.state.quad},set(t){this.$store.commit("updateQuad",t)}},customTheme:{get(){return this.$store.state.customTheme},set(){this.$store.commit("customTheme")}},customBackground:{get(){return this.$store.state.customBackground},set(t){var e={type:"customBackground",value:t};this.$store.commit("updateThemeProp",e)}},customHeader:{get(){return this.$store.state.customHeader},set(t){var e={type:"customHeader",value:t};this.$store.commit("updateThemeProp",e)}},customHeaderColor:{get(){return this.$store.state.customHeaderColor},set(t){var e={type:"customHeaderColor",value:t};this.$store.commit("updateThemeProp",e)}},customTextColor:{get(){return this.$store.state.customTextColor},set(t){var e={type:"customTextColor",value:t};this.$store.commit("updateThemeProp",e)}},customButton:{get(){return this.$store.state.customButton},set(t){var e={type:"customButton",value:t};this.$store.commit("updateThemeProp",e)}},customButtonColor:{get(){return this.$store.state.customButtonColor},set(t){var e={type:"customButtonColor",value:t};this.$store.commit("updateThemeProp",e)}}},methods:{updateSettings(){this.$store.commit("toggleSettings")},validateDuration(t){if(Array.isArray(t)&&(t=t.join()),!t)return"This field is required";const e=/[^0-9,\s]/g;return!t.match(e)||"This field must only contain numbers or commas"}}};const G=(0,w.Z)(X,[["render",N]]);var J=G;const tt=t=>((0,n.dD)("data-v-1c42c169"),t=t(),(0,n.Cn)(),t),et=tt((()=>(0,n._)("h3",null,"Raffle Participants:",-1))),ot=["disabled"];function st(t,e,o,r,a,u){return(0,n.wg)(),(0,n.iD)(n.HY,null,[et,(0,n.wy)((0,n._)("textarea",{name:"participants",id:"participants",cols:"30",rows:"10",placeholder:"Enter names separated by newlines.","onUpdate:modelValue":e[0]||(e[0]=t=>u.participants=t)},"\r\n  ",512),[[s.nr,u.participants]]),(0,n._)("input",{type:"submit",disabled:0==this.$store.state.rawContestants.length,onClick:e[1]||(e[1]=(...t)=>u.submitParticipants&&u.submitParticipants(...t)),value:"Submit"},null,8,ot)],64)}var nt={computed:{participants:{get(){return this.$store.state.rawContestants},set(t){this.$store.commit("contestantsInput",t)}}},methods:{submitParticipants(){this.$store.state.rawContestants.length>0&&(this.$store.commit("addContestants",this.$store.state.rawContestants),this.$store.commit("toggleContestantsForm"),this.$store.commit("toggleRaffle"))}}};const rt=(0,w.Z)(nt,[["render",st],["__scopeId","data-v-1c42c169"]]);var at=rt;const ut={class:"tickets"};function ct(t,e,o,s,r,a){const u=(0,n.up)("ticket-item");return(0,n.wg)(),(0,n.iD)("div",ut,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.tickets,((t,e)=>((0,n.wg)(),(0,n.j4)(u,{key:e,name:t},null,8,["name"])))),128))])}const it=["data-number"];function lt(t,e,o,s,a,u){return(0,n.wg)(),(0,n.iD)("div",{class:"ticket",style:(0,r.j5)(u.ticketPosition)},[(0,n._)("div",{"data-number":u.ticketNumber},(0,r.zw)(o.name),9,it)],4)}var mt={methods:{randomInt(t,e=0){return 0!=e?Math.floor(Math.random()*(t-e)+e):Math.floor(Math.random()*t)},randomFloat(t,e=0){return 0!=e?Math.random()*(t-e)+e:Math.random()*t},raffleTime(t){var e;return e=t.length>1?this.randomInt(parseInt(t[0]),parseInt(t[1])):parseInt(t[0]),e},getCoords(t){var e=t.getBoundingClientRect(),o=document.body,s=document.documentElement,n=window.pageYOffset||s.scrollTop||o.scrollTop,r=window.pageXOffset||s.scrollLeft||o.scrollLeft,a=s.clientTop||o.clientTop||0,u=s.clientLeft||o.clientLeft||0,c=e.top+n-a,i=e.left+r-u;return{top:Math.round(c),left:Math.round(i)}}}},dt={props:{name:{type:String,required:!0}},mixins:[mt],computed:{ticketPosition(){let t=mt.methods.randomInt(10,90),e=mt.methods.randomInt(10,90),o=mt.methods.randomInt(360),s=mt.methods.randomInt(100);return{top:t+"%",left:e+"%",transform:"rotate("+o+"deg) scale(0.5) translate(0, 0)",zIndex:s}},ticketNumber(){var t=0;if(0==this.name.length)return t;for(var e=0;e<this.name.length;e++){var o=this.name.charCodeAt(e);t=(t<<5)-t+o,t&=t}return t=t.toString().replace(/-/g,"").slice(0,6),t}}};const ht=(0,w.Z)(dt,[["render",lt]]);var pt=ht,ft={components:{TicketItem:pt},computed:{tickets(){return this.$store.state.contestants}}};const gt=(0,w.Z)(ft,[["render",ct]]);var vt=gt;const wt={class:"post-raffle"};function Ct(t,e,o,s,r,a){return(0,n.wg)(),(0,n.iD)("div",wt,[this.$store.state.contestants.length>1?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:e[0]||(e[0]=t=>a.action("again"))}," Play Again ")):(0,n.kq)("",!0),(0,n._)("button",{onClick:e[1]||(e[1]=t=>a.action("reset"))},"Reset")])}var kt={methods:{action(t){switch(t){case"again":this.$store.commit("updateContestants");break;case"reset":this.$store.commit("toggleContestantsForm"),this.$store.commit("emptyContestants"),this.$store.commit("toggleRaffle");break;default:break}}}};const yt=(0,w.Z)(kt,[["render",Ct],["__scopeId","data-v-36b6be47"]]);var bt=yt;const _t=t=>((0,n.dD)("data-v-319fd11c"),t=t(),(0,n.Cn)(),t),Tt={class:"the-drone"},$t=_t((()=>(0,n._)("div",{id:"button-load",slot:"poster"},[(0,n.Uk)(" Loading 3D Model..."),(0,n._)("br"),(0,n.Uk)(" Once loaded, click to play. ")],-1)));function Bt(t,e,o,s,r,a){const u=(0,n.up)("model-viewer");return(0,n.wg)(),(0,n.iD)("div",Tt,[(0,n.Wm)(u,{id:"reveal",onClick:a.pickWinner,"min-field-of-view":"35deg","max-field-of-view":"35deg","camera-orbit":"0deg 5deg",src:a.drone,"shadow-intensity":"1","shadow-softness":".15",alt:"BrockleeFPV Player 1"},{default:(0,n.w5)((()=>[$t])),_:1},8,["onClick","src"])])}var xt={methods:{pickWinner(){this.$store.commit("pickWinner")}},computed:{drone(){return"./drones/"+this.$store.state.quad+".glb"}}};const Dt=(0,w.Z)(xt,[["render",Bt],["__scopeId","data-v-319fd11c"]]);var Ht=Dt;const St=t=>((0,n.dD)("data-v-04ce703e"),t=t(),(0,n.Cn)(),t),It=St((()=>(0,n._)("a",{class:"logo",href:"https://www.youtube.com/pokeyfpv",target:"_blank"},[(0,n._)("img",{src:"/img/pokeyfpv.png",alt:"PokeyFPV"})],-1))),Ft={class:"copyright"},Pt=St((()=>(0,n._)("div",null,[(0,n._)("a",{href:"https://paypal.me/pokeyfpv",target:"_blank"},"Buy me a drink or some parts.")],-1)));function qt(t,e,o,s,a,u){return(0,n.wg)(),(0,n.iD)("footer",null,[(0,n._)("div",null,[It,(0,n._)("span",Ft,"© "+(0,r.zw)(u.theYear),1)]),Pt])}var Rt={computed:{theYear(){return(new Date).getFullYear()}}};const Mt=(0,w.Z)(Rt,[["render",qt],["__scopeId","data-v-04ce703e"]]);var zt=Mt;console.log("#teamLevelUp");const Wt={name:"App",components:{Header:T,SettingsForm:J,Textarea:at,Tickets:vt,PostRaffle:bt,TheDrone:Ht,TheFooter:zt},computed:{customTheme(){return this.$store.state.customTheme},showSettings(){return this.$store.state.showSettings},showContestants(){return this.$store.state.showContestantsForm},showRaffle(){return this.$store.state.showRaffle},customBackground(){return this.$store.state.customBackground},customHeader(){return this.$store.state.customHeader},customHeaderColor(){return this.$store.state.customHeaderColor},customTextColor(){return this.$store.state.customTextColor},customButton(){return""==this.$store.state.customButton?"#0070f3":this.$store.state.customButton},customButtonColor(){return""==this.$store.state.customButtonColor?"#ffffff":this.$store.state.customButtonColor}}},Ot=()=>{(0,s.sj)((t=>({"288402eb":t.customBackground,"2fd454d9":t.customTextColor,"7eeef6ca":t.customHeader,"6adc128e":t.customHeaderColor,"759c3b6f":t.customButton,"1b1ed134":t.customButtonColor})))},Vt=Wt.setup;Wt.setup=Vt?(t,e)=>(Ot(),Vt(t,e)):Ot;var Ut=Wt;const Zt=(0,w.Z)(Ut,[["render",i]]);var jt=Zt,Yt=o(9749),At=(0,Yt.MT)({state(){return{duration:[10,20],quad:"player1",rawContestants:"",contestants:[],showSettings:"hidden",showContestantsForm:!0,showRaffle:!1,winner:"",winners:[],winnerKey:0,ticketsClass:"z0",droneClass:"z1",postRaffleClass:"z-1",customTheme:!1,customBackground:"",customHeaderBackground:"",customHeaderColor:"",customTextColor:"",customButton:"",customButtonColor:""}},getters:{},mutations:{toggleSettings(t){t.showSettings="hidden"==t.showSettings?"show":"hidden"},toggleContestantsForm(t){t.showContestantsForm=!t.showContestantsForm},toggleRaffle(t){t.showRaffle=!t.showRaffle},udpateDuration(t,e){e.includes(",")?(e=e.replace(/\s/g,""),t.duration=e.split(",")):t.duration=[e]},updateQuad(t,e){t.quad=e},contestantsInput(t,e){t.rawContestants=e},addContestants(t,e){t.contestants=e.split("\n")},emptyContestants(t){t.contestants=[],t.rawContestants="",t.ticketsClass="z0",t.droneClass="z1",t.postRaffleClass="z-1"},updateContestants(t){t.ticketsClass="z0",t.droneClass="z1",t.postRaffleClass="z-1",t.winnerKey=t.winners.length,t.contestants=t.contestants.filter((function(e){return e!=t.winner}))},pickWinner(t){var e=t.contestants[Math.floor(Math.random()*t.contestants.length)];t.winner=e,t.winners.push(e);const o=document.querySelector("#reveal");o.animationName="Running",o.play();const s=mt.methods.raffleTime(t.duration),n=document.querySelectorAll(".ticket");for(let r=0;r<n.length;r++){let t=n[r],o=mt.methods.getCoords(t),a=t.children[0].innerText,u=window.innerWidth,c=window.innerHeight,i=o.left<=u/2?mt.methods.randomInt(-100,0):mt.methods.randomInt(0,100),l=o.top<=c/2?mt.methods.randomInt(-100,0):mt.methods.randomInt(0,100),m=mt.methods.randomInt(360),d=mt.methods.randomInt(360),h=mt.methods.randomInt(360);a!=e?t.setAttribute("style","opacity: 0; left: "+3*i+"%; top: "+3*l+"%; transform: rotateX("+m+"deg) rotateY("+d+"deg) rotateZ("+h+"deg) translateX(0) translate(0, 0); transition-delay: "+mt.methods.randomFloat(0,s)+"s"):t.setAttribute("style","left: 50%; top: 50%; transition-delay: "+s+"s; transform: scale(1) rotateX(0) rotateY(0) rotateZ(0) translate(-25px, 0)")}setTimeout((()=>{o.pause(),t.ticketsClass="z1",t.droneClass="z0",t.postRaffleClass="z1"}),1e3*s)},customTheme(t){t.customTheme=!t.customTheme},updateThemeProp(t,e){switch(e.type){case"customBackground":t.customBackground=e.value;break;case"customHeader":t.customHeader=e.value;break;case"customHeaderColor":t.customHeaderColor=e.value;break;case"customTextColor":t.customTextColor=e.value;break;case"customButton":t.customButton=e.value;break;case"customButtonColor":t.customButtonColor=e.value;break;default:break}}},actions:{},modules:{}});const Lt=(0,s.ri)(jt);Lt.use(At),Lt.config.compilerOptions.isCustomElement=t=>t.startsWith("model-"),Lt.mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,r){if(!s){var a=1/0;for(l=0;l<t.length;l++){s=t[l][0],n=t[l][1],r=t[l][2];for(var u=!0,c=0;c<s.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((function(t){return o.O[t](s[c])}))?s.splice(c--,1):(u=!1,r<a&&(a=r));if(u){t.splice(l--,1);var i=n();void 0!==i&&(e=i)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[s,n,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={826:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,a=s[0],u=s[1],c=s[2],i=0;if(a.some((function(e){return 0!==t[e]}))){for(n in u)o.o(u,n)&&(o.m[n]=u[n]);if(c)var l=c(o)}for(e&&e(s);i<a.length;i++)r=a[i],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(l)},s=self["webpackChunkfpv_shuffle"]=self["webpackChunkfpv_shuffle"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(9447)}));s=o.O(s)})();
//# sourceMappingURL=index.bd4a8087.js.map