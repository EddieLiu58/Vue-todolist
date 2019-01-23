(function(t){function e(e){for(var n,s,a=e[0],l=e[1],r=e[2],d=0,p=[];d<a.length;d++)s=a[d],o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,r||[]),i()}function i(){for(var t,e=0;e<c.length;e++){for(var i=c[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==o[l]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},c=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var r=0;r<a.length;r++)e(a[r]);var u=l;c.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("b771")},"1b7c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mt-4"},[i("div",{staticClass:"input-group mb-3"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"準備要做的任務"},domProps:{value:t.newTodo},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addTodo}},[t._v("新增")])])]),i("div",{staticClass:"card text-center"},[i("div",{staticClass:"card-header"},[i("ul",{staticClass:"nav nav-tabs card-header-tabs"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:{active:"all"===t.visibility},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.visibility="all"}}},[t._v("全部")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:{active:"ing"===t.visibility},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.visibility="ing"}}},[t._v("進行中")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:{active:"complete"===t.visibility},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.visibility="complete"}}},[t._v("已完成")])])])]),i("ul",{staticClass:"list-group list-group-flush text-left"},t._l(t.filteredTodos,function(e,n){return i("li",{key:n,staticClass:"list-group-item",on:{dblclick:function(i){t.editTodo(e)}}},[e.id!==t.cacheTodo.id?i("div",{staticClass:"d-flex"},[i("div",{staticClass:"form-check"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"item.completed"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{click:function(i){t.countUncomplished(e)},change:function(i){var n=e.completed,o=i.target,c=!!o.checked;if(Array.isArray(n)){var s=null,a=t._i(n,s);o.checked?a<0&&t.$set(e,"completed",n.concat([s])):a>-1&&t.$set(e,"completed",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(e,"completed",c)}}}),i("label",{staticClass:"form-check-label",class:{completed:e.completed},attrs:{for:e.id}},[t._v(t._s(e.title))])]),i("button",{staticClass:"close ml-auto",attrs:{type:"button","aria-label":"Close"},on:{click:function(i){t.removeTodo(e)}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),e.id===t.cacheTodo.id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.cacheTitle,expression:"cacheTitle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.cacheTitle},on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?t.cancelEdit(e):null},function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key,"Enter"))return null;t.doneEdit(e)}],input:function(e){e.target.composing||(t.cacheTitle=e.target.value)}}}):t._e()])}),0),i("div",{staticClass:"card-footer d-flex justify-content-between"},[i("span",[t._v("還有 "+t._s(t.numofUncompleted)+" 筆任務未完成")]),i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearAll(e)}}},[t._v("清除所有任務")])])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-group-prepend"},[i("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("待辦事項")])])}],c=(i("e0b2"),i("7c88"),i("7bb5")),s=i.n(c),a=(i("2653"),i("9e03"),i("a36b"),i("bf05"),{data:function(){return{newTodo:"",todos:[],cacheTodo:{},cacheTitle:"",visibility:"all",numofUncompleted:0}},methods:{addTodo:function(){var t=this.newTodo.trim(),e=Math.floor(s()());t&&(this.todos.push({id:e,title:t,completed:!1}),this.newTodo="",this.numofUncompleted=this.numofUncompleted+1)},removeTodo:function(t){var e="",i=this;i.todos.forEach(function(i,n){t.id===i.id&&(e=n)}),this.todos.splice(e,1),!1===t.completed&&(this.numofUncompleted=this.numofUncompleted-1)},editTodo:function(t){this.cacheTodo=t,this.cacheTitle=t.title},cancelEdit:function(){this.cacheTodo={}},doneEdit:function(t){t.title=this.cacheTitle,this.cacheTitle="",this.cacheTodo={}},countUncomplished:function(t){!0!==t.completed?this.numofUncompleted=this.numofUncompleted-1:this.numofUncompleted=this.numofUncompleted+1},clearAll:function(){this.todos=[],this.numofUncompleted=0}},computed:{filteredTodos:function(){if("all"===this.visibility)return this.todos;if("ing"===this.visibility){var t=[];return this.todos.forEach(function(e){e.completed||t.push(e)}),t}var e=[];return this.todos.forEach(function(t){t.completed&&e.push(t)}),e}}}),l=a,r=(i("ce36"),i("7056")),u=Object(r["a"])(l,n,o,!1,null,null,null);u.options.__file="index.vue";e["a"]=u.exports},ce36:function(t,e,i){"use strict";var n=i("f7cd"),o=i.n(n);o.a},f7cd:function(t,e,i){}});
//# sourceMappingURL=app.352cf2cf.js.map