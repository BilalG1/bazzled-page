(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af334c54"],{"0b42":function(e,t,n){var a=n("861d"),l=n("e8b5"),o=n("b622"),r=o("species");e.exports=function(e){var t;return l(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!l(t.prototype)?a(t)&&(t=t[r],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},"159b":function(e,t,n){var a=n("da84"),l=n("fdbc"),o=n("17c2"),r=n("9112");for(var c in l){var i=a[c],s=i&&i.prototype;if(s&&s.forEach!==o)try{r(s,"forEach",o)}catch(u){s.forEach=o}}},"17c2":function(e,t,n){"use strict";var a=n("b727").forEach,l=n("a640"),o=l("forEach");e.exports=o?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},2532:function(e,t,n){"use strict";var a=n("23e7"),l=n("5a34"),o=n("1d80"),r=n("577e"),c=n("ab13");a({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~r(o(this)).indexOf(r(l(e)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,n){var a=n("861d"),l=n("c6b6"),o=n("b622"),r=o("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==l(e))}},"4c68":function(e,t,n){},"5a34":function(e,t,n){var a=n("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"65f0":function(e,t,n){var a=n("0b42");e.exports=function(e,t){return new(a(e))(0===t?0:t)}},a640:function(e,t,n){"use strict";var a=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&a((function(){n.call(null,t||function(){throw 1},1)}))}},ab13:function(e,t,n){var a=n("b622"),l=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[l]=!1,"/./"[e](t)}catch(a){}}return!1}},b727:function(e,t,n){var a=n("0366"),l=n("44ad"),o=n("7b0b"),r=n("50c4"),c=n("65f0"),i=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,u=4==e,d=6==e,m=7==e,f=5==e||d;return function(p,b,y,g){for(var h,v,j=o(p),x=l(j),O=a(b,y,3),E=r(x.length),k=0,w=g||c,B=t?w(p,E):n||m?w(p,0):void 0;E>k;k++)if((f||k in x)&&(h=x[k],v=O(h,k,j),e))if(t)B[k]=v;else if(v)switch(e){case 3:return!0;case 5:return h;case 6:return k;case 2:i.call(B,h)}else switch(e){case 4:return!1;case 7:i.call(B,h)}return d?-1:s||u?u:B}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},bc06:function(e,t,n){"use strict";n("4c68")},caad:function(e,t,n){"use strict";var a=n("23e7"),l=n("4d64").includes,o=n("44d2");a({target:"Array",proto:!0},{includes:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},e8b5:function(e,t,n){var a=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},f868:function(e,t,n){"use strict";n.r(t);var a=n("7a23");Object(a["x"])("data-v-41c78090");var l={class:"signup-page"},o={key:0,class:"main-login"},r={class:"welcome-back"},c=Object(a["j"])(" Get started "),i={class:"own-channel"},s=Object(a["j"])(" Own a channel? "),u=Object(a["j"])("Click here"),d=Object(a["h"])("div",{class:"wrong-login",id:"wrong-login"}," Please enter a valid email ",-1),m={class:"full-width"},f=Object(a["h"])("span",{id:"sign-up-text"},"Sign up",-1),p=Object(a["h"])("div",{class:"loader",id:"login-loader"},null,-1),b=[f,p],y={key:1,class:"setup-complete"};function g(e,t,n,f,p,g){var h=Object(a["B"])("router-link");return Object(a["u"])(),Object(a["g"])("div",l,[Object(a["k"])(a["b"],{name:"fade",mode:"out-in"},{default:Object(a["I"])((function(){return[0==p.signupStep?(Object(a["u"])(),Object(a["g"])("div",o,[Object(a["h"])("div",r,[c,Object(a["h"])("div",i,[s,Object(a["k"])(h,{to:"/partner-signup",class:"own-channel-click"},{default:Object(a["I"])((function(){return[u]})),_:1})])]),Object(a["h"])("label",{class:"form-box-label",style:Object(a["q"])(p.firstName.length?"opacity: 1; transform: translateY(0px); z-index: 2;":"")}," First name ",4),Object(a["J"])(Object(a["h"])("input",{type:"text",placeholder:"First name",class:"form-box","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.firstName=e}),spellcheck:"false"},null,512),[[a["G"],p.firstName]]),Object(a["h"])("label",{class:"form-box-label",style:Object(a["q"])(p.lastName.length?"opacity: 1; transform: translateY(0px); z-index: 2;":"")}," Last name ",4),Object(a["J"])(Object(a["h"])("input",{type:"text",placeholder:"Last name",class:"form-box","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.lastName=e}),spellcheck:"false"},null,512),[[a["G"],p.lastName]]),Object(a["h"])("label",{class:"form-box-label",style:Object(a["q"])(p.email.length?"opacity: 1; transform: translateY(0px); z-index: 2;":"")}," Email ",4),Object(a["J"])(Object(a["h"])("input",{type:"text",placeholder:"Email",class:"form-box","onUpdate:modelValue":t[2]||(t[2]=function(e){return p.email=e}),spellcheck:"false"},null,512),[[a["G"],p.email]]),Object(a["h"])("label",{class:"form-box-label",style:Object(a["q"])(p.confirmEmail.length?"opacity: 1; transform: translateY(0px); z-index: 2;":"")}," Confirm email ",4),Object(a["J"])(Object(a["h"])("input",{type:"text",placeholder:"Confirm email",class:"form-box","onUpdate:modelValue":t[3]||(t[3]=function(e){return p.confirmEmail=e}),spellcheck:"false"},null,512),[[a["G"],p.confirmEmail]]),Object(a["h"])("label",{class:"form-box-label",style:Object(a["q"])(p.creatorCode.length?"opacity: 1; transform: translateY(0px); z-index: 2;":"")}," Creator code (optional) ",4),Object(a["J"])(Object(a["h"])("input",{type:"text",placeholder:"Creator code (optional)",class:"form-box","onUpdate:modelValue":t[4]||(t[4]=function(e){return p.creatorCode=e}),spellcheck:"false"},null,512),[[a["G"],p.creatorCode]]),d,Object(a["h"])("div",m,[Object(a["h"])("button",{class:"sign-in",onClick:t[5]||(t[5]=function(){return g.signIn&&g.signIn.apply(g,arguments)}),id:"login-button",style:Object(a["q"])(p.email.length&&p.firstName.length&&p.lastName.length&&p.confirmEmail.length?"opacity: 1":"")},b,4)])])):1==p.signupStep?(Object(a["u"])(),Object(a["g"])("div",y," Sorry. We are currently receiving a large number of new users, and your account could not be created at this time. We'll email you when new spots become available. ")):Object(a["f"])("",!0)]})),_:1})])}Object(a["v"])();n("159b"),n("caad"),n("2532"),n("d3b7");var h={data:function(){return{firstName:"",lastName:"",email:"",confirmEmail:"",creatorCode:"",signupStep:0}},mounted:function(){document.getElementsByClassName("footer")[0].style.display="none",document.getElementsByClassName("mobile-logo")[0].style.display="none",document.getElementsByClassName("navbar-link").forEach((function(e){e.style.display="none"})),document.getElementsByClassName("navbar-link-signup")[0].style.display="none",document.getElementById("navbar-login-button").style.display="block",document.getElementById("desktop-navigation-links").style.display="block",document.getElementsByClassName("navigation-drop")[0].style.display="none",document.getElementById("navbar-border").style.borderBottom="1px solid white"},unmounted:function(){document.getElementsByClassName("footer")[0].style.display="flex",document.getElementsByClassName("mobile-logo")[0].style.display="",document.getElementsByClassName("navbar-link").forEach((function(e){e.style.display=""})),document.getElementsByClassName("navbar-link-signup")[0].style.display="",document.getElementById("desktop-navigation-links").style.display="",document.getElementsByClassName("navigation-drop")[0].style.display="",document.getElementById("navbar-border").style.borderBottom=""},methods:{signIn:function(){var e=this;document.getElementById("login-loader").style.display="inline-block",document.getElementById("sign-up-text").innerText="",document.getElementById("wrong-login").style.opacity=0,setTimeout((function(){if(document.getElementById("login-loader").style.display="none",document.getElementById("sign-up-text").innerText="Sign up",!e.email.includes("@")||!e.email.includes(".")||e.email.length<5)document.getElementById("wrong-login").innerText="Please enter a valid email",document.getElementById("wrong-login").style.opacity=1;else if(e.email!=e.confirmEmail)document.getElementById("wrong-login").innerText="Emails do not match",document.getElementById("wrong-login").style.opacity=1;else{var t={method:"post",body:JSON.stringify({first:e.firstName,last:e.lastName,email:e.email,creatorCode:e.creatorCode,messageType:"User Sign Up"}),headers:{"Content-Type":"application/json"}};fetch("/api/mail",t),e.signupStep=1}}),1e3)}}};n("bc06");h.render=g,h.__scopeId="data-v-41c78090";t["default"]=h}}]);
//# sourceMappingURL=chunk-af334c54.ea8397ed.js.map