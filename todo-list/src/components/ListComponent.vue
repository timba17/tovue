<template>
  <ul>
    <li v-for="task in tasks" :key="task.id">{{task.name}} - {{task.description}}</li>
  </ul>
</template>

<script>

export default {
  name: 'ListComponent',
  data() {
    return {
      tasks: [
        {id: 1, name: 'task one', description: 'this is task one', status: 'done'},
        {id: 2, name: 'task two', description: 'this is task two', status: 'todo'},
        {id: 3, name: 'task three', description: 'this is task three', status: 'todo'},
        {id: 4, name: 'task four', description: 'this is task four', status: 'done'},
        {id: 5, name: 'task five', description: 'this is task five', status: 'todo'}
      ]
    }
  }
}
</script>