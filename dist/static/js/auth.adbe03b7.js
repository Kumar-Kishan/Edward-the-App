(function(t){function e(e){for(var a,s,r=e[0],c=e[1],u=e[2],l=0,d=[];l<r.length;l++)s=r[l],o[s]&&d.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={auth:0},o={auth:0},i=[];function r(t){return c.p+"static/js/"+({"account-page":"account-page"}[t]||t)+"."+{"account-page":"7bfb062e"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"account-page":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var a="static/css/"+({"account-page":"account-page"}[t]||t)+"."+{"account-page":"86a206ee"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,delete s[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){s[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=i);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(t),u=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");i.type=a,i.request=s,n[1](i)}o[t]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([1,"chunk-vendors"]),n()})({"0ba1":function(t,e,n){"use strict";var a=n("176c"),s=n.n(a);s.a},"0cad":function(t,e,n){"use strict";var a=n("9354"),s=n.n(a);s.a},1:function(t,e,n){t.exports=n("1ab6")},"176c":function(t,e,n){},"1ab6":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=n("3652"),o=n.n(s),i=n("2955"),r=n.n(i),c=n("8c4f"),u=n("53cf"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"delete"},[n("h1",[t._v("Is this goodbye?")]),t._m(0),n("p",[t._v('To continue, type your account password below and click "Delete my account".')]),n("div",{staticClass:"actions"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password-input",attrs:{type:"password",autocomplete:"off",disabled:t.saving},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.saving?t._e():n("button",{staticClass:"button-red",on:{click:t.deleteAccount}},[t._v("Delete my account")]),t.saving?n("pulse-loader"):t._e()],1),t.error?n("div",{staticClass:"error"},[t._v("\n      That didn't work. Please check your password and try again.\n      If the problem persists, contact "),n("a",{attrs:{href:"mailto:support@edwardtheapp.com"}},[t._v("support@edwardtheapp.com")]),t._v(".\n    ")]):t._e()]),n("hr"),n("div",{staticClass:"cancel"},[n("router-link",{attrs:{to:"/account"}},[n("button",{staticClass:"button-link"},[t._v("Never mind, go back")])])],1)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n      All your data will be lost permanently. "),n("strong",[t._v("There is no way to undo this.")]),t._v("\n      If you want to keep your documents, you should download them first.\n    ")])}],p=n("8a5d"),f={components:{PulseLoader:p["a"]},data:function(){return{error:!1,password:"",saving:!1}},methods:{deleteAccount:function(){var t=this;this.saving=!0,this.error=!1,u["a"].deleteAccount({password:this.password}).then(function(){t.saving=!1,t.$router.push("/login")},function(e){t.error=!0,t.saving=!1,console.error(e)})}}},h=f,v=(n("5a37"),n("2877")),m=Object(v["a"])(h,l,d,!1,null,"49564cae",null);m.options.__file="deleteAccount.page.vue";var g=m.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"forgot"},[t._m(0),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email-input",attrs:{tabindex:"1",placeholder:"edward@example.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"captcha"},[n("Captcha",{ref:"captcha",attrs:{tabindex:2},on:{change:t.setCaptchaResponse,expire:t.resetCaptchaResponse}})],1),t.emailSent?t._e():n("div",{staticClass:"actions"},[t.saving?n("pulse-loader"):t._e(),t.saving?t._e():n("button",{staticClass:"button-green reset-button",attrs:{tabindex:"3"},on:{click:function(e){t.reset()}}},[t._v("Reset my password")]),t.error?n("p",{staticClass:"error"},[t._v("\n        That didn't work. Please check your email address and try again.\n      ")]):t._e()],1),t.emailSent?n("div",{staticClass:"success"},[t._v("\n      Email sent! Go check your inbox.\n    ")]):t._e(),n("div",{staticClass:"cancel"},[n("router-link",{attrs:{to:"/login"}},[n("button",{staticClass:"button-link",attrs:{tabindex:"4"}},[t._v("Back to login")])])],1)])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message"},[n("h3",[t._v("Forgot your password?")]),n("p",[t._v("\n        No problem. Enter the email address associated with your Edward account and click the button.\n        You'll get an email with a link to log in and change your password.\n      ")])])}],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"recaptcha"})},y=[],C=(n("c5f6"),{created:function(){var t=this,e=setInterval(function(){var n=t.$refs.recaptcha&&t.$refs.recaptcha.querySelector("iframe");n&&(n.setAttribute("tabindex",t.tabindex),clearInterval(e))},100)},data:function(){return{}},methods:{mountCaptcha:function(){var t=this;if(!window.grecaptcha||!window.grecaptcha.render)return!1;var e=this.$refs.recaptcha;return e.innerHTML="",window.grecaptcha.render(e,{tabindex:this.tabindex,callback:function(e){t.$emit("change",e)},"expired-callback":function(){t.$emit("expire")},sitekey:window.recaptchaSiteKey}),!0},reset:function(){window.grecaptcha&&window.grecaptcha.reset()}},mounted:function(){var t=this,e=window.setInterval(function(){var n=t.mountCaptcha();n&&window.clearInterval(e)},100)},props:{tabindex:{required:!0,type:Number}}}),k=C,x=(n("5197"),Object(v["a"])(k,b,y,!1,null,"080be90c",null));x.options.__file="captcha.vue";var P=x.exports,E={components:{Captcha:P,PulseLoader:p["a"]},computed:{isTest:function(){return"trash@edwardtheapp.com"===this.email}},data:function(){return{captchaResponse:"",email:"",error:!1,saving:!1,emailSent:!1}},methods:{reset:function(){var t=this;this.error=!1,this.saving=!0,u["a"].sendResetPasswordLink({email:this.email,captchaResponse:this.captchaResponse,integration:this.isTest}).then(function(){t.saving=!1,t.emailSent=!0},function(e){t.saving=!1,t.error=!0,t.emailSent=!1,console.error(e)})},resetCaptchaResponse:function(){this.captchaResponse=""},setCaptchaResponse:function(t){this.captchaResponse=t}}},L=E,T=(n("aeb5"),Object(v["a"])(L,w,_,!1,null,"db3fad78",null));T.options.__file="forgot.page.vue";var $=T.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"warning"},[n("h1",[t._v("Just so you know...")]),t._m(0),t._m(1),n("p",[t._v("\n      Dreamer accounts are not intended for long-term use, but you can use yours for as long as you want.\n      "),n("router-link",{attrs:{to:"/account"}},[n("strong",[t._v("Or upgrade to an Author account")])]),t._v("\n      to get "),n("strong",[t._v("private, safe, permanent online storage")]),t._v(" for all your documents. It's only $7.99 per month.\n    ")],1)]),n("div",{staticClass:"fill"}),n("div",{staticClass:"actions"},[n("router-link",{attrs:{to:"/account"}},[n("button",{staticClass:"button-green"},[t._v("\n        Upgrade to Author\n      ")])]),n("button",{staticClass:"continue-button button-link",on:{click:function(e){t.noPremium()}}},[t._v("\n      Continue as a Dreamer\n    ")])],1)])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("This is a Dreamer account.")]),t._v(" When you use a Dreamer account, you should know:\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("strong",[t._v("Your documents are not private.")]),t._v(" Anyone who logs in on this computer may be able to see and edit them.\n      ")]),n("li",[n("strong",[t._v("Your documents are not safe.")]),t._v(" If you reinstall your browser, clear your browsing data, or wipe your hard drive, all your work will be deleted. If you use more space than your browser allows, it may erase all your data without warning.\n      ")]),n("li",[n("strong",[t._v("Your documents are not online.")]),t._v(" You can't access them from any other computer.\n      ")])])}],A=(n("7514"),n("f125")),O={computed:{user:function(){var t=this.$route.matched.find(function(t){return t&&t.meta.getCurrentUser});return t&&t.meta&&t.meta.getCurrentUser()}},created:function(){this.user.isPremium&&Object(A["a"])()},data:function(){return{}},methods:{noPremium:function(){Object(A["a"])()}},props:{}},M=O,j=(n("c3eb"),Object(v["a"])(M,R,I,!1,null,"d23b1b68",null));j.options.__file="limited.page.vue";var S=j.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"username"},[n("label",{attrs:{for:"login-username-input"}},[t._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"login-field",attrs:{tabindex:"1",id:"login-username-input",type:"text",placeholder:"Type your email here"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"password"},[n("label",{attrs:{for:"login-password-input"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"login-field",attrs:{tabindex:"2",id:"login-password-input",type:"password",placeholder:"Type your password here"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",{staticClass:"forgot-password"},[t._v("\n    Forgotten your password?\n    "),n("router-link",{attrs:{to:"/forgot"}},[n("button",{staticClass:"button-link forgot-button",attrs:{tabindex:"3"}},[t._v("Click here to fix.")])])],1),n("div",{staticClass:"captcha"},[n("Captcha",{ref:"captcha",attrs:{tabindex:4},on:{change:t.setCaptchaResponse,expire:t.resetCaptchaResponse}})],1),t.loginMessage?n("div",{staticClass:"messages"},[n("p",[n("span",{staticClass:"fa fa-exclamation-circle"}),t._v("\n      "+t._s(t.loginMessage)+"\n    ")])]):t._e(),n("div",{staticClass:"actions"},[t.loading?n("pulse-loader"):t._e(),t.loading?t._e():n("button",{staticClass:"login-button button-green",attrs:{tabindex:"5",disabled:!t.canLogin},on:{click:function(e){t.logIn()}}},[t._v("Log In")])],1),n("hr",{staticClass:"divider"}),n("div",{staticClass:"sign-up"},[t._v("\n    Don't have an account?\n    "),n("button",{staticClass:"button-link",attrs:{tabindex:"6"},on:{click:function(e){t.signUp()}}},[t._v("Sign up for free.")])])])},U=[],N={beforeCreate:function(){u["a"].logOut()},components:{Captcha:P,PulseLoader:p["a"]},computed:{canLogin:function(){return!!this.email.trim()&&!!this.password.trim()},isTest:function(){return"trash@edwardtheapp.com"===this.email}},data:function(){return{captchaResponse:"",email:"",loading:!1,loginMessage:"",password:""}},methods:{logIn:function(){var t=this;this.loginMessage="",this.captchaResponse||this.isTest?(this.loading=!0,u["a"].logIn({email:this.email,password:this.password,captchaResponse:this.captchaResponse,integration:this.isTest}).then(function(e){t.loading=!1,e.verified?e.isPremium?Object(A["a"])():t.$router.push("/limited"):t.$router.push("/verification")},function(){t.loading=!1,t.$refs.captcha.reset(),t.loginMessage="One or more of the details you entered are wrong. Please check your responses and try again."})):this.loginMessage="Please indicate that you are not a robot."},resetCaptchaResponse:function(){this.captchaResponse=""},setCaptchaResponse:function(t){this.captchaResponse=t},signUp:function(){this.$router.push("/signup")},viewDemo:function(){var t=this;this.loading=!0,u["a"].demoLogIn().then(function(){t.loading=!1,Object(A["a"])()},function(){t.loading=!1,t.loginMessage="The demo account isn't working right now. Please try again later."})}}},Y=N,B=(n("6f64"),Object(v["a"])(Y,D,U,!1,null,"48b6f63e",null));B.options.__file="login.page.vue";var F=B.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"inner"},[t.authLoading?n("div",[n("pulse-loader")],1):t._e(),t.authFailed||t.authLoading?t._e():n("div",[t._m(0),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password-input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.resetLoading?n("div",[n("pulse-loader")],1):t._e(),t.resetFailed?n("div",{staticClass:"error"},[n("p",[t._v("\n          Password reset failed.\n        ")]),t._m(1)]):t._e(),t.success?n("div",{staticClass:"success"},[t._v("\n        Password changed!\n      ")]):t._e(),n("div",{staticClass:"actions"},[t.success?t._e():n("button",{staticClass:"button-green submit-button",on:{click:function(e){t.submit()}}},[t._v("Set password")]),t.success?n("button",{staticClass:"button-green finish-button",on:{click:function(e){t.finish()}}},[t._v("Go to the app")]):t._e()])]),t.authFailed?n("div",[n("h1",[t._v("This link doesn't work.")]),n("p",[t._v("\n        If you're trying to reset your password, please go back to the\n        "),n("router-link",{attrs:{to:"/forgot"}},[t._v("Forgot Password")]),t._v(" screen and try again.\n      ")],1)]):t._e(),n("div",{staticClass:"cancel"},[n("router-link",{attrs:{to:"/login"}},[n("button",{staticClass:"button-link"},[t._v("Back to login")])])],1)])])},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message"},[n("h4",[t._v("Let's change your password.")]),n("p",[t._v("\n          Enter your new password below and click the button.\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n          Please try again later or contact "),n("a",{attrs:{href:"mailto:support@edwardtheapp.com"}},[t._v("support@edwardtheapp.com")]),t._v(".\n        ")])}],H={beforeCreate:function(){var t=this,e=this.$route.params,n=e.email,a=e.key;this.authLoading=!0,u["a"].authenticatePasswordReset({email:n,key:a}).then(function(){t.authLoading=!1},function(){t.authLoading=!1,t.authFailed=!0})},components:{PulseLoader:p["a"]},data:function(){return{authFailed:!1,authLoading:!0,resetFailed:!1,resetLoading:!1,password:"",success:!1}},methods:{finish:function(){Object(A["a"])()},submit:function(){var t=this;this.resetFailed=!1,this.resetLoading=!0,u["a"].updatePassword(this.password).then(function(){t.resetLoading=!1,t.success=!0},function(e){t.resetLoading=!1,t.success=!1,t.resetFailed=!0,console.error(e)})}}},q=H,z=(n("0ba1"),Object(v["a"])(q,G,V,!1,null,"b8df41c2",null));z.options.__file="reset.page.vue";var W=z.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[t._m(0),n("div",{staticClass:"signup-section username"},[n("div",{staticClass:"signup-field"},[n("label",{staticClass:"signup-label",attrs:{for:"signup-email"}},[t._v("Email address:")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"signup-input",class:{invalid:t.warnEmail},attrs:{id:"signup-email",type:"text",tabindex:"1",placeholder:"greg@example.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),n("button",{ref:"emailInfo",staticClass:"field-info",class:{invalid:t.warnEmail},attrs:{title:t.emailInfo},domProps:{innerHTML:t._s(t.infoSvg)}})]),n("div",{staticClass:"signup-section password"},[n("div",{staticClass:"signup-field"},[n("label",{staticClass:"signup-label",attrs:{for:"signup-password"}},[t._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"signup-input",class:{invalid:t.warnPassword},attrs:{id:"signup-password",type:"password",tabindex:"2"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{ref:"passwordInfo",staticClass:"field-info",class:{invalid:t.warnPassword},attrs:{title:t.passwordInfo},domProps:{innerHTML:t._s(t.infoSvg)}})]),n("div",{staticClass:"captcha"},[n("Captcha",{ref:"captcha",attrs:{tabindex:4},on:{change:t.setCaptchaResponse,expire:t.resetCaptchaResponse}})],1),n("div",{staticClass:"message"},[n("p",{staticClass:"message-text"},[t._v(t._s(t.message))])]),t._m(1),n("div",{staticClass:"actions"},[t.loading?n("pulse-loader"):t._e(),t.loading?t._e():n("button",{staticClass:"button-green",attrs:{tabindex:"7",disabled:!t.canSignUp},on:{click:function(e){t.submit()}}},[t._v("\n      Create account\n    ")])],1),n("hr",{staticClass:"divider"}),n("div",{staticClass:"log-in"},[n("div",{staticClass:"log-in-text"},[t._v("Already have an account?")]),n("button",{staticClass:"log-in-link button-link",attrs:{tabindex:"6"},on:{click:function(e){t.logIn()}}},[t._v("Log in")])])])},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"signup-message"},[n("strong",[t._v("Your Dreamer account is free. You can use it for as long as you like.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"legal"},[t._v("\n    Before creating an account, you must read and agree to our\n    "),n("a",{attrs:{tabindex:"5",href:"/privacy"}},[t._v("Privacy Policy")]),t._v(" and "),n("a",{attrs:{tabindex:"6",href:"/terms"}},[t._v("Terms of Use.")])])}],Q=(n("6762"),n("2fdb"),n("89fa")),X=n.n(Q),Z=/^.+@.+\..+$/,tt='<svg version="1.1" width="14" height="14" viewBox="0 0 14 16" class="octicon octicon-info" aria-hidden="true"><path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"></path></svg>',et={components:{Captcha:P,PulseLoader:p["a"]},computed:{canSignUp:function(){return this.validEmail&&this.validPassword},isTest:function(){return"trash@edwardtheapp.com"===this.email},warnEmail:function(){return this.email&&!this.validEmail},warnPassword:function(){return this.password&&!this.validPassword},validEmail:function(){return!!this.email&&Z.test(this.email)&&!this.email.includes(" ")},validPassword:function(){return!!this.password&&this.password.length>=12}},data:function(){return{captchaResponse:"",email:"",emailInfo:"Please enter a valid email address so you can verify your account. We won't email you unless it's important.",infoSvg:tt,loading:!1,message:"",password:"",passwordInfo:"Please choose a long password (12 characters or more)."}},methods:{logIn:function(){this.$router.push("/login")},setInfoTooltip:function(t){X()(t,{arrow:!0,position:"top"})},resetCaptchaResponse:function(){this.captchaResponse=""},setCaptchaResponse:function(t){this.captchaResponse=t},submit:function(){var t=this;this.message="",this.captchaResponse||this.isTest?(this.loading=!0,u["a"].signUp({captchaResponse:this.captchaResponse,email:this.email,password:this.password,integration:this.isTest}).then(function(){t.loading=!1,"function"===typeof window.gtag_report_conversion?(window.gtag_report_conversion(function(){return t.$router.push("/verification")}),window.setTimeout(function(){window.location.href.includes("/verification")||t.$router.push("/verification")},3e3)):(console.warn("Google Analytics conversion monitoring had an error."),t.$router.push("/verification"))},function(){t.loading=!1,t.$refs.captcha.reset(),t.message="Signup failed. Please check your email/password and try again."})):this.message="Please indicate that you are not a robot."}},mounted:function(){this.setInfoTooltip(this.$refs.emailInfo),this.setInfoTooltip(this.$refs.passwordInfo)}},nt=et,at=(n("9595"),Object(v["a"])(nt,J,K,!1,null,"0329babc",null));at.options.__file="signup.page.vue";var st=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"page"},[n("h3",[t._v("\n      Your account change was successful. Thanks for using Edward!\n    ")]),n("div",{staticClass:"actions"},[n("router-link",{attrs:{to:"/account"}},[n("button",{staticClass:"button-link"},[t._v("\n          Back to account settings\n        ")])]),n("button",{staticClass:"button-green",on:{click:function(e){t.finished()}}},[t._v("\n        Go to the app\n      ")])],1)])])},it=[],rt={data:function(){return{}},methods:{finished:function(){Object(A["a"])()}}},ct=rt,ut=(n("838b"),Object(v["a"])(ct,ot,it,!1,null,"3cb4f7f7",null));ut.options.__file="success.page.vue";var lt=ut.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[t.email?t._e():n("div",{staticClass:"content"},[n("pulse-loader")],1),t.email?n("div",{staticClass:"content"},[n("h1",[t._v("You're almost done.")]),n("p",[t._v("\n      Before you can use Edward, you'll need to verify your email address. We've sent a link to "+t._s(t.email)+".\n      "),n("b",[t._v("Please allow up to 10 minutes for it to arrive.")])]),n("p",[t._v("\n      Didn't get the email? Click the button to resend it.\n    ")]),n("div",[t.sent?t._e():n("button",{staticClass:"button-green",on:{click:function(e){t.sendLink()}}},[t._v("\n        Send email\n      ")]),t.sent?n("p",[t._v("\n        Email sent.\n      ")]):t._e(),t.error?n("p",{staticClass:"error"},[t._v("\n        That didn't work. Please try again later or contact "),n("a",{attrs:{href:"mailto:support@edwardtheapp.com"}},[t._v("support@edwardtheapp.com")]),t._v(".\n      ")]):t._e()]),n("p",[t._v("\n      Once you get the email, you can click the link to verify your account.\n    ")]),n("div",[n("router-link",{attrs:{to:"/login"}},[n("button",{staticClass:"button-link"},[t._v("Log out")])])],1)]):t._e()])},pt=[],ft=(n("7f7f"),n("a353")),ht=n.n(ft),vt={created:function(){this.user&&this.user.accountType&&this.user.accountType.name!==ht.a.DEMO.name?this.sendLink(!0):this.$router.push("/login")},components:{PulseLoader:p["a"]},computed:{email:function(){return this.user&&this.user.email},user:function(){var t=this.$route.matched.find(function(t){return t&&t.meta.getCurrentUser});return t&&t.meta&&t.meta.getCurrentUser()}},data:function(){return{error:!1,sent:!1}},methods:{sendLink:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.error=!1,this.sent=!1,u["a"].sendVerifyLink().then(function(){e||(t.sent=!0)},function(e){t.sent=!1,t.error=!0,console.error(e)})}}},mt=vt,gt=(n("55e0"),Object(v["a"])(mt,dt,pt,!1,null,"14e4ca25",null));gt.options.__file="verification.page.vue";var wt=gt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[t.failed?t._e():n("div",[n("h1",[t._v("\n      Verifying...\n    ")])]),t.failed?n("div",[n("h1",[t._v("\n      Verification failed.\n    ")]),n("p",[t._v("\n      Please try again. If you keep having trouble, email support@edwardtheapp.com.\n    ")])]):t._e(),t.failed?t._e():n("div",[n("pulse-loader")],1)])},bt=[],yt={beforeCreate:function(){var t=this,e=this.$route.params,n=e.email,a=e.key;u["a"].verify({email:n,key:a}).then(function(){t.$router.push("/limited")},function(){t.failed=!0})},components:{PulseLoader:p["a"]},data:function(){return{failed:!1}}},Ct=yt,kt=(n("0cad"),Object(v["a"])(Ct,_t,bt,!1,null,"7c95c318",null));kt.options.__file="verify.page.vue";var xt=kt.exports;a["a"].use(c["a"]);var Pt=null,Et=function(){return Pt},Lt=function(t,e,n){u["a"].getUser().then(function(t){Pt=t,n()},function(t){console.error(t),n({path:"/login"})})},Tt=function(t,e,n){u["a"].getUser().then(function(t){if(Pt=t,!1===t.verified)return n({path:"/verification"});n()},function(t){console.error(t),n({path:"/login"})})},$t=function(t,e,n){u["a"].getUser().then(function(t){if(Pt=t,!0===t.verified)return n({path:"/account"});n()},function(t){console.error(t),n({path:"/login"})})},Rt=new c["a"]({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Log In",component:F},{path:"/account",name:"Account",component:function(){return n.e("account-page").then(n.bind(null,"98db"))},beforeEnter:Lt,meta:{getCurrentUser:Et}},{path:"/delete-account",name:"Delete Your Account",component:g,beforeEnter:Lt},{path:"/forgot",name:"Forgot Password",component:$},{path:"/limited",name:"Dreamer Account",component:S,beforeEnter:Tt,meta:{getCurrentUser:Et}},{path:"/reset/:email/:key",name:"Reset Password",component:W},{path:"/signup",name:"Sign Up",component:st},{path:"/success",name:"Success",component:lt,beforeEnter:Lt},{path:"/verification",name:"Verify Account",component:wt,beforeEnter:$t,meta:{getCurrentUser:Et}},{path:"/verify/:email/:key",name:"Verify Link",component:xt},{path:"*",redirect:"/"}]}),It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[t.incompatible?a("div",{staticClass:"error"},[t._m(0)]):t._e(),a("div",{staticClass:"page"},[a("div",{staticClass:"logo",on:{click:function(e){t.goToLogin()}}},[a("img",{attrs:{src:n("99d5")}})]),a("router-view")],1),t._m(1)])},At=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n      This web browser does not support all the features of Edward.\n      For the best experience, the latest version of "),n("a",{attrs:{href:"https://www.google.com/chrome/"}},[t._v("Google Chrome")]),t._v(" is recommended.\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",{staticClass:"footer-text"},[t._v("\n      Edward the App © 2018 by "),n("a",{staticClass:"footer-link",attrs:{href:"http://isaaclyman.com"}},[t._v("Novelist LLC")]),t._v(".\n    ")])])}],Ot={data:function(){return{incompatible:"function"!==typeof"".includes||!("serviceWorker"in navigator)||!("storage"in navigator)||"function"!==typeof window.Promise}},methods:{goToLogin:function(){this.$router.push("/")}}},Mt=Ot,jt=(n("ae21"),Object(v["a"])(Mt,It,At,!1,null,"28239547",null));jt.options.__file="Auth.vue";var St=jt.exports;n("52df"),n("db43"),n("e74e");o.a.config("https://1deaeecd96244297ad475854be0d5502@sentry.io/540818").addPlugin(r.a,a["a"]).install(),a["a"].config.productionTip=!1,new a["a"]({el:"#app",components:{Auth:St},router:Rt,render:function(t){return t("Auth")}})},"28c0":function(t,e,n){},"30f5":function(t,e,n){},3320:function(t,e,n){},5197:function(t,e,n){"use strict";var a=n("b463"),s=n.n(a);s.a},"53cf":function(t,e,n){"use strict";var a=n("bc3a"),s=n.n(a),o=function(t){return"/api/user/".concat(t)},i={authenticatePasswordReset:function(t){var e=t.email,n=t.key;return s.a.post(o("authenticate-password-reset"),{email:e,key:n}).then(function(t){return t.data})},deleteAccount:function(t){var e=t.password;return s.a.post(o("delete-account"),{password:e}).then(function(t){return t.data})},demoLogIn:function(){return s.a.post(o("demo-login"),{}).then(function(t){return t.data})},getUser:function(){return s.a.get(o("current")).then(function(t){return t.data})},logIn:function(t){var e=t.email,n=t.password,a=t.captchaResponse,i=t.integration;return s.a.post(o("login"),{email:e,password:n,captchaResponse:a,integration:i}).then(function(t){return t.data})},logOut:function(){return s.a.get(o("logout"))},sendResetPasswordLink:function(t){var e=t.email,n=t.captchaResponse,a=t.integration;return s.a.post(o("send-reset-password-link"),{email:e,captchaResponse:n,integration:a}).then(function(t){return t.data})},sendVerifyLink:function(){return s.a.post(o("send-verify-link")).then(function(t){return t.data})},signUp:function(t){var e=t.email,n=t.password,a=t.captchaResponse,i=t.integration;return s.a.post(o("signup"),{email:e,password:n,captchaResponse:a,integration:i}).then(function(t){return t.data})},updatePayment:function(t){var e=t.token;return s.a.post(o("update-payment"),{token:e}).then(function(t){return t.data})},upgrade:function(t){var e=t.oldAccountType,n=t.newAccountType,a=t.token,i=void 0===a?null:a;return s.a.post(o("upgrade"),{oldAccountType:e,newAccountType:n,token:i}).then(function(t){return t.data})},verify:function(t){var e=t.email,n=t.key;return s.a.post(o("verify"),{email:e,key:n}).then(function(t){return t.data})},updateEmail:function(t){return s.a.post(o("email"),{email:t}).then(function(t){return t.data})},updatePassword:function(t){return s.a.post(o("password"),{password:t}).then(function(t){return t.data})}};e["a"]=i},5562:function(t,e,n){},"55e0":function(t,e,n){"use strict";var a=n("9607"),s=n.n(a);s.a},"5a37":function(t,e,n){"use strict";var a=n("30f5"),s=n.n(a);s.a},"6f64":function(t,e,n){"use strict";var a=n("3320"),s=n.n(a);s.a},"838b":function(t,e,n){"use strict";var a=n("dc4b"),s=n.n(a);s.a},9354:function(t,e,n){},9595:function(t,e,n){"use strict";var a=n("5562"),s=n.n(a);s.a},9607:function(t,e,n){},"97a5":function(t,e,n){},"99d5":function(t,e,n){t.exports=n.p+"static/img/modal-logo@2x.a7ee511e.png"},a353:function(t,e){var n=function(t,e,n){return{name:t,displayName:e,description:n}},a={DEMO:n("DEMO","Demo Account","This is a demo. Your data is not stored and will be lost if you refresh the page or close this tab."),LIMITED:n("LIMITED","Dreamer Account","All data is stored insecurely on your computer's hard drive and may be lost if your browsing data is cleared.    Your maximum storage limit is probably 5MB (about 2,500 pages)."),PREMIUM:n("PREMIUM","Author Account","Your data is stored on our servers. Your storage limit is 20MB (about 10,000 pages)."),GOLD:n("GOLD","Bestseller Account","Your data is stored on our servers. Your storage limit is 250MB (about 125,000 pages)."),ADMIN:n("ADMIN","Admin Account","You know who you are.")};t.exports=a},ae21:function(t,e,n){"use strict";var a=n("28c0"),s=n.n(a);s.a},aeb5:function(t,e,n){"use strict";var a=n("f064"),s=n.n(a);s.a},b463:function(t,e,n){},c3eb:function(t,e,n){"use strict";var a=n("97a5"),s=n.n(a);s.a},db43:function(t,e,n){},dc4b:function(t,e,n){},e74e:function(t,e,n){},f064:function(t,e,n){},f125:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(){window.location.href="/app"}}});
//# sourceMappingURL=auth.adbe03b7.js.map