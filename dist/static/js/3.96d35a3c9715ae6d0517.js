webpackJsonp([3],{vOrY:function(s,e){},xJsL:function(s,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("Dd8w"),t=i.n(r),o=i("NYxO"),n={data:function(){return{isShowLogin:!0,isShowRegister:!1,login:{username:"",password:"",notice:"输入用户名和密码",isError:!1},register:{username:"",password:"",notice:"创建账号后，请记住用户名和密码",isError:!1}}},methods:t()({},Object(o.b)({loginUser:"login",registerUser:"register"}),{showLogin:function(){this.isShowLogin=!0,this.isShowRegister=!1},showRegister:function(){this.isShowLogin=!1,this.isShowRegister=!0},onRegister:function(){var s=this,e=this.register,i=e.username,r=e.password;return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)?/^.{6,16}$/.test(this.register.password)?void this.registerUser({username:i,password:r}).then(function(e){s.login.isError=!1,s.login.notice="",s.$router.push({path:"notebooks"})}).catch(function(e){s.login.isError=!0,s.login.notice=e.msg}):(this.register.isError=!0,void(this.register.notice="密码长度为6~16个字符")):(this.register.isError=!0,void(this.register.notice="用户名3~15个字符，仅限于字母数字下划线中文"))},onLogin:function(){var s=this,e=this.login,i=e.username,r=e.password;return/^[\w\u4e00-\u9fa5]{3,15}$/.test(i)?/^.{6,16}$/.test(this.login.password)?void this.loginUser({username:i,password:r}).then(function(e){s.login.isError=!1,s.login.notice="",s.$router.push({path:"notebooks"})}).catch(function(e){s.login.isError=!0,s.login.notice=e.msg}):(this.login.isError=!0,void(this.login.notice="密码长度为6~16个字符")):(this.login.isError=!0,void(this.login.notice="用户名3~15个字符，仅限于字母数字下划线中文"))}})},a={render:function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{attrs:{id:"login"}},[i("div",{staticClass:"modal-mask"},[i("div",{staticClass:"modal-wrapper"},[i("div",{staticClass:"modal-container"},[i("div",{staticClass:"main"}),s._v(" "),i("div",{staticClass:"form"},[i("h3",{on:{click:s.showRegister}},[s._v("创建账户")]),s._v(" "),i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"register",class:{show:s.isShowRegister}},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:s.register.username},on:{input:function(e){e.target.composing||s.$set(s.register,"username",e.target.value)}}}),s._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:s.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:s.register.password},on:{input:function(e){e.target.composing||s.$set(s.register,"password",e.target.value)}}}),s._v(" "),i("p",{class:{error:s.register.isError}},[s._v(" "+s._s(s.register.notice))]),s._v(" "),i("div",{staticClass:"button",on:{click:s.onRegister}},[s._v("创建账号")])])]),s._v(" "),i("h3",{on:{click:s.showLogin}},[s._v("登录")]),s._v(" "),i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"login",class:{show:s.isShowLogin}},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"输入用户名"},domProps:{value:s.login.username},on:{input:function(e){e.target.composing||s.$set(s.login,"username",e.target.value)}}}),s._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:s.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:s.login.password},on:{input:function(e){e.target.composing||s.$set(s.login,"password",e.target.value)}}}),s._v(" "),i("p",{class:{error:s.login.isError}},[s._v(" "+s._s(s.login.notice))]),s._v(" "),i("div",{staticClass:"button",on:{click:s.onLogin}},[s._v(" 登录")])])])],1)])])])])},staticRenderFns:[]};var l=i("VU/8")(n,a,!1,function(s){i("vOrY")},"data-v-2da64462",null);e.default=l.exports}});
//# sourceMappingURL=3.96d35a3c9715ae6d0517.js.map