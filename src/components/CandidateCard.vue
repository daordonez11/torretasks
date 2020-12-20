<template>
  <v-card v-if="candidate!=undefined"
  class="px-2">
    <v-card-title class="search-result-card__card-title">
        
            <v-avatar
                size="56">
                <img        
                :alt="candidate.name+ 'image'"
                :src="candidate.picture"
                >
            </v-avatar>
            <p class="mx-3 search-result-card__entity-name text-truncate">{{candidate.name}}</p>        
    </v-card-title>
    <v-card-subtitle>
        {{candidate.professionalHeadline}}
    </v-card-subtitle>
    <v-card-text>
        {{candidate.locationName}}
        <br>
        {{candidate.remoter ? 'Remoter' : 'Local city'}}
        <br>
    </v-card-text>
    <div class="skill-container">
        <div
        v-for="skill in candidate.skills"
        :key="skill.name"
        class="skill mx-2 my-2 px-2 py-2"
        >
       <p class="text-truncate mb-0">{{skill.name}}</p> 
        </div>
    </div>
    <v-card-actions>
      <v-btn
        text
        v-on:click="$emit('select-candidate', candidate)"
        :disabled="candidate.subjectId===currentSelectedCandidate.subjectId"
      >
        {{ candidate.subjectId===currentSelectedCandidate.subjectId ? 'This Candidate is Selected' : 'Select Candidate for List'}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
    name:"CandidateCard"
})
export default class CandidateCard extends Vue {
    @Prop() candidate!: any
    @Prop() currentSelectedCandidate: any

    calculateCompensation(data: any){
        if(data.code==="range")
            return data.currency + data.minAmount + ' - ' + data.maxAmount + '/' + data.periodicity 
        else
            return ""
    }
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
