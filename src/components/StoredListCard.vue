<template>
  <v-card v-if="candidate!=undefined"
  class="px-2"
  :class="{'active-list':candidate.subjectId===currentSelectedCandidate.subjectId && job.id===currentSelectedJob.id}">
    <v-card-title class="search-result-card__card-title">
            <v-avatar
            class="mx-5"
            size="56">
                <img        
                alt="job.organizations[0].name+ 'image'"
                :src="job.organizations[0].picture"
                >
            </v-avatar>
            <v-avatar
            class="mx-5"
            size="56">
                <img        
                :alt="candidate.name+ 'image'"
                :src="candidate.picture"
                >
            </v-avatar>
    </v-card-title>
    <v-card-subtitle>
        Job: {{job.objective}}
        <br>
        Candidate: {{candidate.name}}        
    </v-card-subtitle>    
    <v-card-actions>
      <v-btn
        text
        v-on:click="$emit('select-stored-list', {candidate: candidate, job: job})"
        :disabled="candidate.subjectId===currentSelectedCandidate.subjectId && job.id===currentSelectedJob.id"
      >
        {{ candidate.subjectId===currentSelectedCandidate.subjectId && job.id===currentSelectedJob.id ? 'Task List Loaded' : 'Load Stored List'}}
      </v-btn>
      <v-btn
      text
      @click="$emit('delete-stored-list', {candidate: candidate, job: job})"
      >
        Delete
        <v-icon
        right>
        mdi-delete
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
    name:"StoredListCard"
})
export default class StoredListCard extends Vue {
    @Prop() candidate!: any
    @Prop() job!: any
    @Prop() currentSelectedCandidate: any
    @Prop() currentSelectedJob: any
}
</script>

<style scoped>
.search-result-card__card-title {
    flex-wrap: nowrap;
}
.search-result-card__entity-name {
    -webkit-box-flex: 1;
    color: #cddc39!important;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
}
.skill-container {
    display: flex;
    overflow-x: auto;
}
.skill {
    border-color: #cddc39;
    border-width: thin;
    border-style: solid;
}
.active-list {
    border-color: #cddc39;
    border-width: thick;
    border-style: solid;
}
::-webkit-scrollbar {
    height: 4px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #393939;
}

/* Handle */
::-webkit-scrollbar-thumb {
    border-radius: 9px;
    background: #cddc39;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
