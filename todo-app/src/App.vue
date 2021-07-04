<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
        <h2 class="font-weight-bold">
          Todo List
        </h2>
    </v-app-bar>

    <v-main>
      <ListComponent/>
    </v-main>
  </v-app>
</template>

<script>
import ListComponent from './components/ListComponent';

export default {
  name: 'App',

  components: {
    ListComponent,
  },

  data: () => ({
    //
  }),
};
</script>
