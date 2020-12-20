<template>
    <v-container >
        <v-row 
        >
            <v-col
            cols="4"
            v-if="selectedJob.id!=undefined"
            >
                <job-card
                   
                    :job="selectedJob"
                    :currentSelectedJob="selectedJob"
                />
            </v-col>
            <v-col
            cols="4"
            v-if="selectedJob.id==undefined"         
            >
                <v-skeleton-loader 
                    boilerplate                   
                    type="list-item-avatar, article, actions"
                    ></v-skeleton-loader>
                    <h3>Please select a job in <router-link
                        to="/jobs"
                        class="subheading mx-3">
                    Job List
                    </router-link></h3>
            </v-col>
            <v-col
            cols="4"
            >
                <p>List feature</p>
            </v-col>
            <v-col
            cols="4"
            v-if="selectedCandidate.subjectId!=undefined"
            >
                <candidate-card
                   
                    :candidate="selectedCandidate"
                    :currentSelectedCandidate="selectedCandidate"
                />
            </v-col>
            <v-col
            cols="4"
            v-if="selectedCandidate.subjectId==undefined"         
            >
                <v-skeleton-loader 
                    boilerplate                   
                    type="list-item-avatar, article, actions"
                    ></v-skeleton-loader>
                    <h3>Please select a candidate in <router-link
                        to="/candidates"
                        class="subheading mx-3">
                    Candidates List
                    </router-link></h3>
            </v-col>
        </v-row>
        
    </v-container>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JobCard from '@/components/JobCard.vue';
import CandidateCard from '@/components/CandidateCard.vue';
@Component({
    name: "TasksComponent",
    components:{
        JobCard,
        CandidateCard
    }
})
export default class TasksComponent extends Vue {
    
    get selectedJob() {
        return this.$store.state.currentJob;
    }

    get selectedCandidate() {
        return this.$store.state.currentCandidate;
    }

}
</script>
