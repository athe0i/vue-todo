export default {
    name: 'hello-app',
    //props: ['name'],
    data: function () {
        return {
            name: ""
        }
    },
    computed: {
        message: function () {
            return this.name
                ? "Hello, " + this.name + "!"
                : "Please, introduce yourself first!"
        }
    }
}
