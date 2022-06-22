<template>
    <div class="todo-container">
        <ul>
            <TodoItem v-for="(todo, i) of todos" v-bind:todo="todo" v-bind:index="i" :key="todo._id"
                v-on:remove-todo="removeTodo" />
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
    props: ['todos'],
    components: {
        TodoItem,
    },
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>