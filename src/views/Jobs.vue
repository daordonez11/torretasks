<template>
    <v-container >
        <v-row v-if="!loading"
        >
            <v-col
            cols="4"
            v-for="job in jobs"
            :key="job.id"           
            >
                <job-card
                   
                    :job="job"
                    :currentSelectedJob="selectedJob"
                    v-on:select-job="selectJob"
                />
            </v-col>
            
        </v-row>
        <v-row v-if="loading">
            <v-col
            cols="4"
            v-for="n in 3"
            :key="n"           
            >
                <v-skeleton-loader                    
                    type="list-item-avatar, article, actions"
                    ></v-skeleton-loader>
            </v-col>
        </v-row>
        
        <v-row
            v-if="!loading"
            align="center"
            justify="center"
        >
                <v-btn
                elevation="4"
                v-if="offset != 0" 
                v-on:click='changeOffset(-6)'
                >
                   <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <p class="mx-5 my-5">Showing {{offset+1}} to {{offset+6}} of {{total}}</p>
                <v-btn
                elevation="2"
                v-if="offset <= total" 
                v-on:click='changeOffset(6)'
                >
                <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
        </v-row>
        
    </v-container>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as TorreService from '../services/TorreService'
import JobCard from '@/components/JobCard.vue';
import { SET_JOB_MUTATION } from '@/store/mutation-types';
@Component({
    name: "JobsComponent",
    components:{
        JobCard
    }
})
export default class JobsComponent extends Vue {
    loading = true;
    jobs = [];
    offset = 0;
    total = 0;
    size = 6;
    mounted() {
        this.fetchJobs();
    }

    changeOffset(changeValue: number) {
        this.loading = true;
        this.offset = this.offset + changeValue;
        this.fetchJobs();
    }

    fetchJobs(){
        TorreService.getJobs(this.offset, this.size).then((response) =>{
            console.log(response);
            this.loading = false;
            this.jobs = response.results;
            this.total = response.total;
        })
    }
    
    selectJob(selJob: any) {
        this.$store.commit(SET_JOB_MUTATION, { job: selJob})
    }

    get selectedJob() {
        return this.$store.state.currentJob;
    }

}
</script>
