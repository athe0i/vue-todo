import TodoEntry from './TodoEntry.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'todo-app',
    data: function () {
        return {
            newTodo: {text: ""}
        };
    },
    computed: mapState('todo',{
            todos: state => state.todos
        }),
    methods: mapActions('todo', [
        'addTodo'
    ]),
    components: {
        'todo-entry': TodoEntry
    }
};
