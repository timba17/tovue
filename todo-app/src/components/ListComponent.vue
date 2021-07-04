<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Todo List
        </h2>
        <v-card
          class="mx-auto"
          max-width="300"
          tile
        >
          <v-list dense>
            <v-subheader>TASKS</v-subheader>
            <v-list-item-group
              v-model="selectedTask"
              color="primary"
            >
              <v-list-item
                v-for="(task, i) in tasks"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="task.id"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="task.description"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-text-field
                  label="New task"
                  :rules="rules"
                  hide-details="auto"
                  v-model="newTask"
                />
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ListComponent',

    data: () => ({
      tasks: [
        {
          id: 0,
          isCompleted: false,
          description: 'this is a description about task one'
        },
        {
          id: 1,
          isCompleted: true,
          description: 'this is a description about task two'
        },
        {
          id: 2,
          isCompleted: false,
          description: 'this is a description about task three'
        },
        {
          id: 3,
          isCompleted: false,
          description: 'this is a description about task four'
        },
        {
          id: 4,
          isCompleted: true,
          description: 'this is a description about task five'
        },
      ]
    }),
    methods: {
      addNewTask() {
        this.tasks.push(this.newTask.description)
      }
    }
  }
</script>
