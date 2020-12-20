<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Torre Tasks</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      expand-on-hover
      temporary
    >
     <v-list nav>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{item.icon}}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
    </v-navigation-drawer>


    <v-main>
      <router-view></router-view>
      
    </v-main>
    <v-footer app>
      <v-row
            align="center"
            justify="center"
        >
        <h3>Redefining profile completion</h3>
      </v-row>      
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    //
    drawer:null,
    menuItems: [
      {
        title: 'Home',
        icon: 'mdi-star',
        link: '/'
      },
      {
        title: 'Search Job',
        icon: 'mdi-office-building',
        link: '/jobs'
      },
      {
        title: 'Search Candidate',
        icon: 'mdi-account',
        link: '/candidates'
      },
      {
        title: 'Torre Tasks',
        icon: 'mdi-clipboard-list',
        link: '/tasks'
      },
    ]
  }),
});
</script>
