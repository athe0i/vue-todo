export default {
    namespaced: true,
    // state definitions
    state: {
        todos: [
            {id: 1, text: "blablabla", done: true},
            {id: 2, text: "some other blabla", done: false}
        ]
    },
    // mutate state itself
    mutations: {
        addTodo (todo) {
            state.todos.push(todo);
        }
    },
    // all async shit
    actions: {
        addTodo ({commit}, todo) {
            commit('addTodo', todo)
        }
    }
};
