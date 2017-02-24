<template>
    <div>
        <h2>You need to do:</h2>
        <ul>
            <li v-for="todo in todos">
                {{ todo.id }}
                <todo-entry :todo="todo"></todo-entry>
            </li>
        </ul>
        <input type="text" v-model="newTodo.text"/>
        <input type="button" @click="addTodo" text="Add Todo"/>
    </div>
</template>

<script src="./todo-app.component.js"></script>
