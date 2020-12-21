<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://torre-media.s3-us-west-2.amazonaws.com/organizations/Torre+(generic)+-+Dark+icon+-+Lime+(x2).png"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Torre Tasks
        </h1>

        <p class="subheading font-weight-regular">
          Please select a job and a candidate to generate a list of tasks/skills
          <br>
          You can copy, save and email the list of missing skills to fulfil a job
          
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          How to?
        </h2>

        <v-row justify="center">
          <router-link
            v-for="(next, i) in whatsNext"
            :key="i"
            :to="next.href"
            class="subheading mx-3"
          >
            {{ next.text }}
          </router-link>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Made With
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Select a Job',
          href: '/jobs',
        },
        {
          text: 'Select a Candidate',
          href: '/candidates',
        },
        {
          text: 'Export/Save Skill List',
          href: '/tasks',
        },
      ],
    }),
  })
</script>
