<template>
  <div class="container mt-4">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">待辦事項</span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="準備要做的任務"
        v-model="newTodo"
        @keyup.enter="addTodo"
      >
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="addTodo">新增</button>
      </div>
    </div>
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{'active':visibility==='all'}"
              @click.prevent="visibility='all'"
              href="#"
            >全部</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{'active':visibility==='ing'}"
              @click.prevent="visibility='ing'"
              href="#"
            >進行中</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{'active':visibility==='complete'}"
              @click.prevent="visibility='complete'"
              href="#"
            >已完成</a>
          </li>
        </ul>
      </div>
      <ul class="list-group list-group-flush text-left">
        <li class="list-group-item" v-for="(item,i) in filteredTodos" :key="i" @dblclick="editTodo(item)">
          <div class="d-flex" v-if="item.id!==cacheTodo.id">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="item.completed"
                :id="item.id"
                @click="countUncomplished(item)"
              >
              <label
                class="form-check-label"
                :class="{'completed':item.completed}"
                :for="item.id"
              >{{item.title}}</label>
            </div>
            <button
              type="button"
              class="close ml-auto"
              @click="removeTodo(item)"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <input
            type="text"
            class="form-control"
            v-if="item.id===cacheTodo.id"
            v-model="cacheTitle"
            @keyup.esc="cancelEdit"
            @keyup.enter="doneEdit(item)"
          >
        </li>
        <!--
                <li class="list-group-item">
                  <input type="text" class="form-control">
                </li>
        -->
      </ul>
      <div class="card-footer d-flex justify-content-between">
        <span>還有 {{numofUncompleted}} 筆任務未完成</span>
        <a href="#" @click.prevent="clearAll">清除所有任務</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
       newTodo: "",
    todos: [],
    cacheTodo: {},
    cacheTitle: "",
    visibility: "all",
    numofUncompleted: 0
    }
  },
  methods: {
    addTodo: function() {
      var value = this.newTodo.trim();
      //trim():刪除多餘空白
      var timestamp = Math.floor(Date.now());
      //把時間當ID
      if (!value) {
        return;
      }
      this.todos.push({
        id: timestamp,
        title: value,
        completed: false
      });
      this.newTodo = "";
      this.numofUncompleted = this.numofUncompleted + 1;
    },
    removeTodo: function(todo) {
      var newIndex = "";
      var vm = this;
      vm.todos.forEach(function(item, i) {
        if (todo.id === item.id) {
          newIndex = i;
        }
      });
      this.todos.splice(newIndex, 1);
      if (todo.completed === false) {
        this.numofUncompleted = this.numofUncompleted - 1;
      }
    },
    editTodo: function(item) {
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    cancelEdit: function() {
      this.cacheTodo = {};
    },
    doneEdit: function(item) {
      item.title = this.cacheTitle;
      this.cacheTitle = "";
      this.cacheTodo = {};
    },
    countUncomplished: function(item) {
      if (item.completed === true) {
        this.numofUncompleted = this.numofUncompleted + 1;
        return;
      } else {
        this.numofUncompleted = this.numofUncompleted - 1;
      }
    },
    clearAll: function() {
      this.todos = [];
      this.numofUncompleted = 0;
    }
  },
  computed: {
    filteredTodos: function() {
      if (this.visibility === "all") {
        return this.todos;
      } else if (this.visibility === "ing") {
        let newTodos = [];
        this.todos.forEach(function(item) {
          if (!item.completed) {
            newTodos.push(item);
          }
        });
        return newTodos;
      } else {
        let newTodos = [];
        this.todos.forEach(function(item) {
          if (item.completed) {
            newTodos.push(item);
          }
        });
        return newTodos;
      }
    }
  }
};
</script>
<style>
@import url(./CSS/all.css);
.completed {
  text-decoration: line-through;
}
</style>