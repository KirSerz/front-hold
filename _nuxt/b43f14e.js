(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1184:function(e,t,o){"use strict";o(884)},1185:function(e,t,o){var n=o(3)(!1);n.push([e.i,".content[data-v-c42f941e]{justify-content:center;min-height:100vh;height:100%;background:url(/img/modal_welcome.png) no-repeat 100% 100%;background-size:cover}.content[data-v-c42f941e],.content .modal[data-v-c42f941e]{display:flex;align-items:center}.content .modal[data-v-c42f941e]{max-width:26.25em;flex-direction:column;position:relative;margin:0 auto}@media only screen and (max-width:768px){.content .modal[data-v-c42f941e]{padding:1.25em}}.content .modal .modal-header[data-v-c42f941e]{margin-bottom:1.9375em}.content .modal .modal-header .modal-title[data-v-c42f941e]{font-size:2.25em;font-weight:600;color:#fff;line-height:2em}@media only screen and (max-width:768px){.content .modal .modal-header .modal-title[data-v-c42f941e]{font-size:1.5em}}.content .modal .modal-header .modal-title__orange[data-v-c42f941e]{color:#ffba38}.content .modal .modal-inputs[data-v-c42f941e]{margin-bottom:1.25em}.content .modal .modal-inputs .modal-input[data-v-c42f941e]{max-width:26.25em;width:100%;margin-bottom:1.25em}.content .modal .modal-inputs .modal-input[data-v-c42f941e]:last-child{margin-bottom:0}.content .modal .modal-action[data-v-c42f941e]{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;margin-bottom:1.5625em}.content .modal .modal-action__text[data-v-c42f941e]{max-width:25.625em;font-size:.75em;line-height:1.75em;color:#fff}.content .modal .modal-action__text a.orange[data-v-c42f941e]{color:#ffba38;cursor:pointer}.content .modal .modal-action__btn[data-v-c42f941e]{margin-right:1.5625em}.content .modal .modal-btn[data-v-c42f941e]{width:100%;display:flex;flex-direction:row;justify-content:space-between}.content .modal .close-modal[data-v-c42f941e]{position:absolute;right:-1.25em;top:1.375em}@media only screen and (max-width:768px){.content .modal .close-modal[data-v-c42f941e]{right:1.25em;top:1.875em}}.error[data-v-c42f941e]{border-color:red}",""]),e.exports=n},1224:function(e,t,o){"use strict";o.r(t);o(14),o(12),o(10),o(9),o(13);var n=o(1),r=o(6),l=o(652);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,f={head:function(){return{title:"Welcome to the Best Cryptocurrency Portfolio Management Tool",meta:[{hid:"description",name:"description",content:"Welcome to Bitcoin cryptocurrency portfolio management tool with connected to cryptocurrency exchanges: Binance, Coinbase Pro, Huobi, Bittrex, Kucoin"}]}},layout:"modal",components:{CloseModal:l.a},data:function(){return{login:null,password:null,confirm_password:null,promo:null,email:null,isEmailTouched:!1,isCheckboxFilter:!1}},computed:d(d({},Object(r.d)("page",["popup","activeEmailReg"])),{},{isEmailValid:function(){return""==this.email||m.test(this.email)}}),watch:{secretToken:function(){this.$cookie.set("secret_token",this.secretToken,10),this.$router.push({path:"/dashboard/"})}},mounted:function(){},methods:d(d(d({},Object(r.b)("page",["makeRegister"])),Object(r.c)("page",["setPopup","setActiveEmailReg","setPassLog"])),{},{registerUser:function(){this.setActiveEmailReg(this.email),this.setPassLog(this.password),this.makeRegister({login:this.login,email:this.email,password:this.password,confirm_password:this.confirm_password,promo:this.promo}),this.$router.push({path:"/landing-modal/signing-up/"})}})},h=(o(1184),o(0)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.someAction()}}},[o("div",{staticClass:"field"},[o("div",{staticClass:"modal modal-hello"},[o("div",{staticClass:"modal-header"},[e._m(0),e._v(" "),o("CloseModal",{staticClass:"close-modal"})],1),e._v(" "),o("div",{staticClass:"modal-inputs"},[o("BaseInput",{staticClass:"modal-input modal-input__email",attrs:{editable:!0,type:"text",name:"name",placeholder:"Holder name"},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}}),e._v(" "),o("BaseInput",{staticClass:"modal-input modal-input__email",class:{error:!e.isEmailValid},attrs:{editable:!0,name:"name",type:"email",placeholder:"E-mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),o("BaseInput",{staticClass:"modal-input modal-input__password",attrs:{type:"password",name:"key",icon:"eye",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),o("BaseInput",{staticClass:"modal-input modal-input__password",attrs:{type:"password",name:"key",icon:"eye",placeholder:"Repeat password"},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}}),e._v(" "),o("BaseInput",{staticClass:"modal-input modal-input__email",attrs:{editable:!0,name:"name",type:"text",placeholder:"Promo code"},model:{value:e.promo,callback:function(t){e.promo=t},expression:"promo"}})],1),e._v(" "),o("div",{staticClass:"modal-action"},[o("BaseCheckboxFilter",{staticClass:"modal-action__btn",attrs:{"is-active":e.isCheckboxFilter},model:{value:e.isCheckboxFilter,callback:function(t){e.isCheckboxFilter=t},expression:"isCheckboxFilter"}}),e._v(" "),e._m(1)],1),e._v(" "),o("div",{staticClass:"modal-btn"},[o("BaseButton",{attrs:{to:"/landing-modal/hello/",type:"default"}},[e._v("\n            LOG IN\n          ")]),e._v(" "),o("BaseButton",{staticClass:"modal-btn__login",attrs:{"is-inactive":!(e.login&&e.isEmailValid&&e.password&&e.confirm_password&&e.password==e.confirm_password&&e.isCheckboxFilter),type:"orange"},nativeOn:{click:function(t){return e.registerUser(t)}}},[e._v("\n            GO\n          ")])],1)])])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",{staticClass:"modal-title"},[e._v("\n            WELCOME "),o("span",{staticClass:"modal-title__orange"},[e._v("HOLDER!")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"modal-action__text"},[e._v("\n            Review our\n            "),o("a",{staticClass:"orange",attrs:{href:"https://holderlab.io/landing-terms-of-service/",target:"_blank"}},[e._v("terms of service")]),e._v("\n            and\n            "),o("a",{staticClass:"orange",attrs:{href:"https://holderlab.io/landing-privacy-policy/",target:"_blank"}},[e._v("privacy policy")]),e._v(", if you agree and confirm that you are 18 years old or more.\n          ")])}],!1,null,"c42f941e",null);t.default=component.exports},635:function(e,t,o){var content=o(650);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("3fb8e278",content,!0,{sourceMap:!1})},649:function(e,t,o){"use strict";o(635)},650:function(e,t,o){var n=o(3)(!1);n.push([e.i,".hamburger[data-v-bbda299e]{display:flex;align-items:center;justify-content:center;cursor:pointer}.hamburger .hamburger__line_1[data-v-bbda299e]{transform:translateY(.5625em) rotate(45deg)}.hamburger .hamburger__line_2[data-v-bbda299e]{transform:scaleX(0)}.hamburger .hamburger__line_3[data-v-bbda299e]{transform:translateY(-.6875em) rotate(-45deg)}@media only screen and (max-width:768px){.hamburger[data-v-bbda299e]{transform:translateX(0)}}.hamburger:hover .hamburger__line[data-v-bbda299e]{background:#ffee57}.is_active .hamburger .hamburger__line_1[data-v-bbda299e]{transform:translateY(.5625em) rotate(45deg)}.is_active .hamburger .hamburger__line_2[data-v-bbda299e]{transform:scaleX(0)}.is_active .hamburger .hamburger__line_3[data-v-bbda299e]{transform:translateY(-.6875em) rotate(-45deg)}@media only screen and (max-width:768px){.is_active .hamburger[data-v-bbda299e]{transform:translateX(0)}}.hamburger__icon[data-v-bbda299e]{position:relative;width:1.4375em;height:1.1875em}.hamburger__line[data-v-bbda299e]{position:absolute;width:100%;height:.125em;left:0;background:#fff;transition-property:background,transform;transition-duration:.1s}.hamburger__line_1[data-v-bbda299e]{top:-.05em}.hamburger__line_2[data-v-bbda299e]{top:50%;margin-top:-1px}.hamburger__line_3[data-v-bbda299e]{bottom:-.175em}",""]),e.exports=n},652:function(e,t,o){"use strict";o(649);var n=o(0),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nuxt-link",{staticClass:"hamburger",attrs:{to:"/landing/"}},[o("div",{staticClass:"hamburger__icon"},[o("div",{staticClass:"hamburger__line hamburger__line_1"}),e._v(" "),o("div",{staticClass:"hamburger__line hamburger__line_2"}),e._v(" "),o("div",{staticClass:"hamburger__line hamburger__line_3"})])])}),[],!1,null,"bbda299e",null);t.a=component.exports},884:function(e,t,o){var content=o(1185);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("5f69ad30",content,!0,{sourceMap:!1})}}]);