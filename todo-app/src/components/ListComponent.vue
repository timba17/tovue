<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        class="mb-5 mt-5"
        cols="12"
      >
        <v-card
          class="mx-auto"
          max-width="900"
          tile
        >
          <v-list dense>
            <v-subheader>TASKS</v-subheader>
            <v-list-item-group
              color="primary"
            >
              <v-list-item
                v-for="(task, i) in allTasks"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="task.id + 1"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="task.description"></v-list-item-title>
                </v-list-item-content>
                <v-switch v-model="task.isCompleted"></v-switch>
                </v-list-item>


                <v-list-item>
                  <v-form v-model="valid">
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          md="4"
                        >
                          <v-text-field
                            v-model="newTask.id"
                            label="ID"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="newTask.description"
                            label="Description"
                            required
                          ></v-text-field>
                          <v-btn
                            class="mr-4"
                            type="submit"
                            @submit="addNewTask"
                          >
                            submit
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
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
      valid: true,
      newTask: {
        id: '',
        isCompleted: '',
        description: ''
      }
    }),

    computed: {
      allTasks() {
        return this.$store.getters.allTasks
      },
      completedTasks() {
        return this.$store.getters.completedTasks
      }
    },
    methods: {
      addNewTask(e) {
        console.log(e.target.value)
        this.$store.commit.addNewTask(e.target.value)
      }
    }
  }
</script>
