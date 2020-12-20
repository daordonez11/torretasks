<template>
    <v-container >
        <v-row 
        >
            <v-col
            cols="4"            
            >
                <job-card
                   
                    :job="selectedJob"
                    :currentSelectedJob="selectedJob"
                />
            </v-col>
            
        </v-row>
        
    </v-container>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JobCard from '@/components/JobCard.vue';
@Component({
    name: "TasksComponent",
    components:{
        JobCard
    }
})
export default class TasksComponent extends Vue {
    
    get selectedJob() {
        return this.$store.state.currentJob;
    }

}
</script>
