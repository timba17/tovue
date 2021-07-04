import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
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
      }
    ]
  },
  mutations: {
    addNewTask(state, task) {
      state.tasks.push(task)
    }
  },
  getters:{
    allTasks: state => {
      return state.tasks
    },
    completedTasks: state => {
      return state.tasks.filter(task => task.isCompleted)
    }
  }
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
