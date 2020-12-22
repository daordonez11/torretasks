<template>
    <div class="mx-10" >
        <v-row 
        >
            <v-col
            cols="12"
            sm="4"
            xs="4"
            v-if="selectedJob.id!=undefined"
            >
                <job-card
                   
                    :job="selectedJob"
                    :currentSelectedJob="selectedJob"
                />
                <v-btn
                    class="mx-5 my-5"
                    outlined
                    to="/jobs"
                >
                    Select other Job
                </v-btn>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            xs="4"
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
            cols="12"
            sm="4"
            xs="4"
            >
            <v-card
            elevation="10"           
            rounded
            >
                <v-subheader>Skills required by the Candidate</v-subheader>
                <p class="mx-5"  v-if="selectedCandidate.subjectId==undefined || selectedCandidate.subjectId==undefined">
                    Information will only appear when both job and candidate are selected
                </p>
                <v-list >
                    <v-list-item
                        v-for="skill in requiredSkills"
                        :key="skill.name"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="skill.name"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <p v-if="requiredSkills.length===0 && selectedCandidate.subjectId!=undefined && selectedCandidate.subjectId!=undefined">
                    This candidate has all the required skills for the job!    
                </p>
                <v-card-actions v-if="selectedCandidate.subjectId!=undefined && selectedCandidate.subjectId!=undefined">
                    <v-btn
                        text             
                        @click="saveSkillList"           
                    >
                    Save
                    </v-btn>
                    <v-btn
                        text
                        @click="sendListInEmail"
                    >
                    Send Email
                    </v-btn>
                    <v-btn
                        text
                        @click="copyListToClipboard"
                    >
                    Copy 
                    <v-icon
                        right>
                        mdi-content-copy
                    </v-icon>                    
                    </v-btn>                    
                </v-card-actions>
            </v-card>
                
            </v-col>
            <v-col
            cols="12"
            sm="4"
            xs="4"
            v-if="selectedCandidate.subjectId!=undefined"
            >
                <candidate-card
                   
                    :candidate="selectedCandidate"
                    :currentSelectedCandidate="selectedCandidate"
                />
                <v-btn
                    class="mx-5 my-5"
                    outlined
                    to="/candidates"
                >
                    Select other Candidate
                </v-btn>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            xs="4"
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
        <h1>Previously Stored Lists</h1>
        <v-row>
            <v-col
            cols="12"
            sm="4"
            xs="4"
            v-for="storedList in storedTasks"
            :key="storedList.job.id+'-'+storedList.candidate.subjectId"           
            >
                <stored-list-card                   
                    :job="storedList.job"
                    :candidate="storedList.candidate"
                    :currentSelectedJob="selectedJob"
                    :currentSelectedCandidate="selectedCandidate"
                    v-on:select-stored-list="selectStoredList"
                    v-on:delete-stored-list="deleteStoredList"
                />
            </v-col>
        </v-row>
        <v-snackbar
        v-model="snackbarShown"
        timeout="3000"
        >
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
            <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbarShown = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
    </div>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import JobCard from '@/components/JobCard.vue';
import CandidateCard from '@/components/CandidateCard.vue';
import StoredListCard from '@/components/StoredListCard.vue';
import { db, Timestamp } from '@/db'
import { SET_CANDIDATE_MUTATION, SET_JOB_MUTATION } from '@/store/mutation-types';
@Component({
    name: "TasksComponent",
    components:{
        JobCard,
        CandidateCard,
        StoredListCard
    }
})
export default class TasksComponent extends Vue {
    storedTasks = [];
    snackbarShown = false;
    snackbarText = '';
    get selectedJob() {
        return this.$store.state.currentJob;
    }

    get selectedCandidate() {
        return this.$store.state.currentCandidate;
    }

    get requiredSkills() {
        if(Array.isArray(this.selectedJob.skills) && Array.isArray(this.selectedCandidate.skills))
            return this.selectedJob.skills.filter((skill: any) => !this.selectedCandidate.skills.includes(skill));
        else
            return []
    }

    created() {
        this.$bind('storedTasks',db.collection('tasks-todo').orderBy('createdAt'));
    }

    saveSkillList(){
        const tasksTodo = {
            candidate: this.selectedCandidate,
            job: this.selectedJob,
            createdAt: Timestamp.now()
        }
        db.collection('tasks-todo')
            .doc(this.selectedJob.id+'-'+this.selectedCandidate.subjectId)
            .set(tasksTodo)
            .then(() => {
               this.snackbarShown = true;
                this.snackbarText = 'Element saved in storage';
            })
    }

    selectStoredList(storedList: any){
        this.$store.commit(SET_JOB_MUTATION, { job: storedList.job})
        this.$store.commit(SET_CANDIDATE_MUTATION, { candidate: storedList.candidate})
    }

    deleteStoredList(storedList: any){
        db.collection('tasks-todo')
            .doc(storedList.job.id+'-'+storedList.candidate.subjectId)
            .delete()
            .then(() => {
                this.snackbarShown = true;
                this.snackbarText = 'List deleted from storage';
            })
    }
    
    copyText(text: string) {
            const copyFrom = document.createElement('textarea');
            copyFrom.setAttribute("style", "position:fixed;opacity:0;top:100px;left:100px;");
            copyFrom.value = text;
            document.body.appendChild(copyFrom);
            copyFrom.select();
            document.execCommand('copy');
            const copied = document.createElement('div');
            copied.setAttribute('class', 'copied');
            copied.appendChild(document.createTextNode('Copied to Clipboard'));
            document.body.appendChild(copied);
            setTimeout(function () {
                document.body.removeChild(copyFrom);
                document.body.removeChild(copied);
            }, 1500);
    }

    copyListToClipboard(){
        this.copyText(this.generateSkillListString())
        this.snackbarShown = true;
        this.snackbarText = 'Succesfully copied information';
    }

    sendListInEmail(){
        const reducer = (accumulator: string, currentValue: any, index: number) =>
             accumulator + (index!=0?", ":"")+ currentValue.name;
        window.location.href='mailto:?subject=Required Skills&body='+this.generateSkillListString()
    }

    generateSkillListString(){
        const reducer = (accumulator: string, currentValue: any, index: number) =>
            accumulator + (index!=0?", ":"")+ currentValue.name;  
        return this.requiredSkills.reduce(reducer,"")
    }

}
</script>