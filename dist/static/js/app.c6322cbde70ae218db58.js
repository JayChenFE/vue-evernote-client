webpackJsonp([5],{DVXa:function(t,e){},EJto:function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"https://note-server.hunger-valley.com"}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("pFYg"),r=n.n(o),s={friendlyDate:function(t){var e=("object"===(void 0===t?"undefined":r()(t))?t:new Date(t)).getTime(),n=Date.now()-e,o="";switch(!0){case n<6e4:o="刚刚";break;case n<36e5:o=Math.floor(n/6e4)+"分钟前";break;case n<864e5:o=Math.floor(n/36e5)+"小时前";break;default:o=Math.floor(n/864e5)+"天前"}return o}},a=n("7+uW"),u=n("zL8q"),i=(n("tvR6"),n("Dd8w")),c=n.n(i),d=n("NYxO"),f={data:function(){return{}},created:function(){this.checkLogin()},computed:c()({},Object(d.c)(["username","slug"])),methods:c()({},Object(d.b)(["checkLogin"]))},l={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var h={components:{avatar:n("VU/8")(f,l,!1,function(t){n("EJto")},"data-v-75e0fe4b",null).exports},methods:c()({},Object(d.b)(["logout"]),{onLogout:function(){this.logout()}})},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.onLogout}})])],1)},staticRenderFns:[]};var m={name:"App",components:{sidebar:n("VU/8")(h,v,!1,function(t){n("DVXa")},"data-v-0694ca68",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var p=n("VU/8")(m,b,!1,function(t){n("o0Kv")},null,null).exports,k=n("/ocq");a.default.use(k.a);var g=new k.a({routes:[{path:"/",redirect:"/login"},{path:"/login",component:function(t){return n.e(3).then(n.bind(null,"xJsL"))}},{path:"/notebooks",component:function(t){return n.e(2).then(n.bind(null,"C3fl"))}},{path:"/note",component:function(t){return n.e(0).then(n.bind(null,"Gb2o"))}},{path:"/trash",component:function(t){return n.e(1).then(n.bind(null,"WMg/"))}}]}),N=n("//Fk"),I=n.n(N),T=n("mtWM"),E=n.n(T),w=n("Jdfc"),D=n.n(w);function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new I.a(function(o,r){var s={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?s.params=n:s.data=n,E()(s).then(function(t){200===t.status?o(t.data):(u.Message.error(t.data.msg),r(t.data))}).catch(function(t){u.Message.error("网络异常"),r({msg:"网络异常"})})})}E.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",E.a.defaults.baseURL=D.a.baseURL,E.a.defaults.withCredentials=!0;var L={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},M=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return A(L.ADD,"POST",{title:e})},C=function(t){return A(L.DELETE.replace(":id",t),"DELETE")},U=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,n=void 0===e?"":e;return A(L.UPDATE.replace(":id",t),"PATCH",{title:n})},_=function(){return new I.a(function(t,e){A(L.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt}),t(e)}).catch(function(t){e(t)})})},P={state:{notebooks:null,currentNotebookId:null},getters:{notebooks:function(t){return t.notebooks||[]},currentNotebook:function(t){var e=t.currentNotebookId;return Array.isArray(t.notebooks)?e?t.notebooks.find(function(t){return t.id===e}):t.notebooks[0]||{}:{}}},mutations:{setNotebooks:function(t,e){var n=e.notebooks;t.notebooks=n},addNotebook:function(t,e){var n=e.notebook;t.notebooks.unshift(n)},updateNotebook:function(t,e){var n=e.notebookId,o=e.title;(t.notebooks.find(function(t){return t.id===n})||{}).title=o},deleteNotebook:function(t,e){var n=e.notebookId;t.notebooks=t.notebooks.filter(function(t){return t.id!==n})},setCurrentBookId:function(t,e){var n=e.currentNotebookId;t.currentNotebookId=n}},actions:{getNotebooks:function(t){var e=t.commit;return null!=t.state.notebooks?I.a.resolve():_().then(function(t){e("setNotebooks",{notebooks:t.data})})},addNotebook:function(t,e){var n=t.commit,o=e.title;return M({title:o}).then(function(t){n("addNotebook",{notebook:t.data}),u.Message.success(t.msg)})},updateNotebook:function(t,e){var n=t.commit,o=e.notebookId,r=e.title;return U(o,{title:r}).then(function(t){n("updateNotebook",{notebookId:o,title:r}),u.Message.success(t.msg)})},deleteNotebook:function(t,e){var n=t.commit,o=e.notebookId;return C(o).then(function(t){n("deleteNotebook",{notebookId:o}),u.Message.success(t.msg)})}}},R={GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"},y=function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,s=n.content,a=void 0===s?"":s;return A(R.ADD.replace(":notebookId",e),"POST",{title:r,content:a})},x=function(t){var e=t.noteId;return A(R.DELETE.replace(":noteId",e),"DELETE")},O=function(t,e){var n=t.noteId,o=e.title,r=e.content;return A(R.UPDATE.replace(":noteId",n),"PATCH",{title:o,content:r})},G=function(t){var e=t.notebookId;return new I.a(function(t,n){A(R.GET.replace(":notebookId",e)).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt}),t(e)}).catch(function(t){n(t)})})},V={state:{notes:null,currentNoteId:null},getters:{notes:function(t){return t.notes||[]},currentNote:function(t){var e=t.currentNoteId;return Array.isArray(t.notes)?e?t.notes.find(function(t){return t.id===e})||{}:t.notes[0]||{}:{}}},mutations:{setNotes:function(t,e){var n=e.notes;t.notes=n},addNote:function(t,e){var n=e.note;t.notes.unshift(n)},updateNote:function(t,e){var n=e.noteId,o=e.title,r=e.content,s=t.notes.find(function(t){return t.id===n})||{};s.title=o,s.content=r},deleteNote:function(t,e){var n=e.noteId;t.notes=t.notes.filter(function(t){return t.id!==n})},setCurrentNoteId:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).currentNoteId;t.currentNoteId=e}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;return G({notebookId:o}).then(function(t){n("setNotes",{notes:t.data})})},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,s=e.content;return y({notebookId:o},{title:r,content:s}).then(function(t){return n("addNote",{note:t.data}),u.Message.success(t.msg),t.data.id})},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,s=e.content;return O({noteId:o},{title:r,content:s}).then(function(t){n("updateNote",{noteId:o,title:r,content:s}),u.Message.success(t.msg)})},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return x({noteId:o}).then(function(t){n("deleteNote",{noteId:o}),u.Message.success(t.msg)})}}},J="/auth/register",S="/auth/login",$="/auth/logout",j="/auth",F=function(t){var e=t.username,n=t.password;return A(J,"POST",{username:e,password:n})},H=function(t){var e=t.username,n=t.password;return A(S,"POST",{username:e,password:n})},B=function(){return A($)},W=function(){return A(j)},q={state:{user:null},getters:{username:function(t){return null==t.user?"未登录":t.user.username},slug:function(t){return null==t.user?"未":t.user.username.charAt(0)}},mutations:{setUser:function(t,e){var n=e.user;t.user=n}},actions:{login:function(t,e){var n=t.commit,o=e.username,r=e.password;return H({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},register:function(t,e){var n=t.commit,o=e.username,r=e.password;return F({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},logout:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/login"};return B().then(function(t){e("setUser",{user:null}),g.push(n)})},checkLogin:function(t){var e=t.commit;return null!==t.state.user&&I.a.resolve(),W().then(function(t){t.isLogin?e("setUser",{user:t.data}):g.push({path:"/login"})})}}},K={GET:"/notes/trash",REVERT:"notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"},X=function(){return new I.a(function(t,e){A(K.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt}),t(e)}).catch(function(t){e(t)})})},Y=function(t){var e=t.noteId;return A(K.DELETE.replace(":noteId",e),"DELETE")},z=function(t){var e=t.noteId;return A(K.REVERT.replace(":noteId",e),"PATCH")},Q={state:{trashNotes:null,currentTrashNoteId:null},getters:{trashNotes:function(t){return t.trashNotes||[]},currentTrashNote:function(t,e){var n=t.currentTrashNoteId,o=t.trashNotes;return n?o.find(function(t){return t.id===n})||{}:e.trashNotes[0]||{}},belongTo:function(t,e,n,o){var r=e.currentTrashNote;return(o.notebooks.find(function(t){return t.id===r.notebookId})||{}).title||""}},mutations:{setTrashNotes:function(t,e){var n=e.trashNotes;t.trashNotes=n},addTrashNote:function(t,e){var n=e.note;t.trashNotes.unshift(n)},deleteTrashNote:function(t,e){var n=e.noteId;t.trashNotes=t.trashNotes.filter(function(t){return t.id!==n})},setCurrentTrashNoteId:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).currentTrashNoteId;t.currentTrashNoteId=e}},actions:{getTrashNotes:function(t){var e=t.commit;return X().then(function(t){e("setTrashNotes",{trashNotes:t.data})})},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return Y({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),u.Message.success(t.msg)})},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return z({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),u.Message.success(t.msg)})}}};a.default.use(d.a);var Z=new d.a.Store({modules:{notebook:P,note:V,user:q,trash:Q}});for(var tt in s)a.default.filter(tt,s[tt]);a.default.config.productionTip=!1,a.default.use(u.Button),a.default.use(u.Dropdown),a.default.use(u.DropdownMenu),a.default.use(u.DropdownItem),a.default.prototype.$message=u.Message,a.default.prototype.$confirm=u.MessageBox.confirm,a.default.prototype.$prompt=u.MessageBox.prompt,window.vm=new a.default({el:"#app",router:g,store:Z,components:{App:p},template:"<App/>"})},o0Kv:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c6322cbde70ae218db58.js.map