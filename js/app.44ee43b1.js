(function(t){function e(e){for(var o,s,a=e[0],l=e[1],r=e[2],u=0,p=[];u<a.length;u++)s=a[u],n[s]&&p.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,r||[]),i()}function i(){for(var t,e=0;e<c.length;e++){for(var i=c[e],o=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(o=!1)}o&&(c.splice(e--,1),t=s(s.s=i[0]))}return t}var o={},n={app:0},c=[];function s(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=o,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var r=0;r<a.length;r++)e(a[r]);var d=l;c.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("b771")},"1b7c":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"input-group mb-3"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.newtodo,expression:"newtodo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"準備要做的任務"},domProps:{value:t.newtodo},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addtodo(e):null},input:function(e){e.target.composing||(t.newtodo=e.target.value)}}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addtodo}},[t._v("新增")])])]),i("div",{staticClass:"card text-center"},[i("div",{staticClass:"card-header"},[i("ul",{staticClass:"nav nav-tabs card-header-tabs"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:{active:"all"==t.visibility},attrs:{href:"#"},on:{click:function(e){t.visibility="all"}}},[t._v("全部")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:{active:"active"==t.visibility},attrs:{href:"#"},on:{click:function(e){t.visibility="active"}}},[t._v("進行中")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:{active:"completed"==t.visibility},attrs:{href:"#"},on:{click:function(e){t.visibility="completed"}}},[t._v("已完成")])])])]),i("ul",{staticClass:"list-group list-group-flush text-left"},t._l(t.filterTodos,function(e,o){return i("li",{staticClass:"list-group-item",on:{dblclick:function(i){t.edittodo(e)}}},[e.id!==t.catchtodo.id?i("div",{staticClass:"d-flex"},[i("div",{staticClass:"form-check"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"item.completed"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(i){var o=e.completed,n=i.target,c=!!n.checked;if(Array.isArray(o)){var s=null,a=t._i(o,s);n.checked?a<0&&t.$set(e,"completed",o.concat([s])):a>-1&&t.$set(e,"completed",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(e,"completed",c)}}}),i("label",{staticClass:"form-check-label",class:{completed:e.completed},attrs:{for:e.id}},[t._v(t._s(e.title))])]),i("button",{staticClass:"close ml-auto",attrs:{type:"button","aria-label":"Close"},on:{click:function(i){t.removetodo(e)}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),e.id===t.catchtodo.id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.catchtitle,expression:"catchtitle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.catchtitle},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.cancelEdit()},function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key,"Enter"))return null;t.doneEdit(e)}],input:function(e){e.target.composing||(t.catchtitle=e.target.value)}}}):t._e()])}),0),i("div",{staticClass:"card-footer d-flex justify-content-between"},[i("span",[t._v("還有"+t._s(t.numofUncompleted)+"筆任務未完成")]),i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearAll(e)}}},[t._v("清除所有任務")])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-group-prepend"},[i("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("待辦事項")])])}],c=(i("e0b2"),i("7c88"),i("60a8"),i("7bb5")),s=i.n(c),a=(i("2653"),i("9e03"),i("a36b"),i("bf05"),{data:function(){return{newtodo:"",todos:[{id:"",title:"",completed:!1}],catchtodo:{},catchtitle:"",visibility:"all",numofUncompleted:0}},methods:{addtodo:function(){var t=this.newtodo.trim(),e=Math.floor(s()());t&&(this.todos.push({id:e,title:t,computed:!1}),this.newtodo="",this.numofUncompleted=this.numofUncompleted+1)},removetodo:function(t){var e=this,i=e.todos.findIndex(function(e,i){return t.id==e.id});this.todos.splice(i,1)},edittodo:function(t){this.catchtodo=t,this.catchtitle=t.title},cancelEdit:function(){this.catchtodo={}},doneEdit:function(t){t.title=this.catchtitle,this.catchtitle="",this.catchtodo={}},countUncomplished:function(t){!0!==t.completed?this.numofUncompleted=this.numofUncompleted-1:this.numofUncompleted=this.numofUncompleted+1},clearAll:function(){this.todos=[],this.numofUncompleted=0}},computed:{filterTodos:function(){if("all"==this.visibility)return this.todos;if("active"==this.visibility){var t=[];return this.todos.forEach(function(e){e.completed||t.push(e)}),t}if("completed"==this.visibility){t=[];return this.todos.forEach(function(e){e.completed&&t.push(e)}),t}}}}),l=a,r=(i("ce36"),i("7056")),d=Object(r["a"])(l,o,n,!1,null,null,null);d.options.__file="index.vue";e["a"]=d.exports},ce36:function(t,e,i){"use strict";var o=i("f7cd"),n=i.n(o);n.a},f7cd:function(t,e,i){}});
//# sourceMappingURL=app.44ee43b1.js.map