<template>

	<div>
		<router-link to="/">Home</router-link>
		<AddTodo @add-todo="addTodo" />
		<select v-model="filter">
			<option value="all">All</option>
			<option value="completed">Completed</option>
			<option value="not-completed">Not Completed</option>
		</select>
		<hr>
		<Loader v-if="loading" />
		<TodoList v-bind:todos="filteredTodos" @remove-todo="removeTodo" v-else-if='todos.length' />
		<p v-else>The todos list is empty</p>

	</div>
</template>
<script>

import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import Home from '@/views/Home.vue'
import Loader from '@/components/Loader.vue'


export default {
	name: 'App',
	data() {
		return {
			todos: [],
			loading: true,
			filter: 'all'
		}
	},
	components: {
		TodoList,
		AddTodo,
		Home,
		Loader
	},
	mounted() {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
			.then(response => response.json())
			.then(json => {
				setTimeout(() => {
					this.todos = json
					this.loading = false
				}, 1000)

			})
	},
	computed: {
		filteredTodos() {
			if (this.filter === 'all') {
				return this.todos
			}
			if (this.filter === 'completed') {
				return this.todos.filter(t => t.completed)
			}

			if (this.filter === 'not-completed') {
				return this.todos.filter(t => !t.completed)
			}
		}
	},
	methods: {
		removeTodo(id) {
			this.todos = this.todos.filter(t => t.id !== id)
		},
		addTodo(todoItem) {
			this.todos.push(todoItem);
		}
	}
}
</script>