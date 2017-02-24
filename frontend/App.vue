<template>
    <div>
        <router-link to="/hello">Please, greet me with honour!</router-link>
        <router-link to="/todo">Let me see what i should do!</router-link>

        <router-view></router-view>
    </div>
</template>
<script>
    //import Vue from 'vue';
    //import VueRouter from 'vue-router';
    import store from './store';
    import HelloApp from './hello-app/HelloApp.vue';
    import TodoApp from './todo-app/TodoApp.vue';

    const routes = [
        {path: '', component: HelloApp},
        {path: '/hello', component: HelloApp},
        {path: '/todo', component: TodoApp}
    ];

    const router = new VueRouter({routes});
    console.log(store);
    let app = new Vue({
        el: '#app',
        router,
        store
    });
</script>
