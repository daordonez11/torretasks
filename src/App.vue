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
        <h3 v-if="selectedJob.id==undefined"> Begin by selecting a job in <router-link to="/jobs">Jobs</router-link></h3>
        <h3 v-if="selectedJob.id!=undefined && selectedCandidate.subjectId==undefined">
           Now select a candidate in <router-link to="/candidates">Candidates</router-link>
        </h3>
        <h3 v-if="selectedJob.id!=undefined && selectedCandidate.subjectId!=undefined">
          Work with the required skills in <router-link to="/tasks">Tasks</router-link>
        </h3>
      </v-row>      
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
@Component({
  name: 'App'
})
export default class App extends Vue {
    drawer = null
    menuItems = [
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

    get selectedJob() {
        return this.$store.state.currentJob;
    }

    get selectedCandidate() {
        return this.$store.state.currentCandidate;
    }
}
</script>
