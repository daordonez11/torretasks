<template>
    <div class="mx-10">
        <v-row v-if="!loading"
        >
            <v-col
            cols="12"
            sm="6"
            xs="6"
            v-for="candidate in candidates"
            :key="candidate.id"           
            >
                <candidate-card
                   
                    :candidate="candidate"
                    :currentSelectedCandidate="selectedCandidate"
                    v-on:select-candidate="selectCandidate"
                />
            </v-col>
            
        </v-row>
        <v-row v-if="loading">
            <v-col
            cols="12"
            sm="6"
            xs="6"
            v-for="n in 4"
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
        
    </div>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as TorreService from '../services/TorreService'
import CandidateCard from '@/components/CandidateCard.vue';
import { SET_CANDIDATE_MUTATION } from '@/store/mutation-types';
@Component({
    name: "CandidatesComponent",
    components:{
        CandidateCard
    }
})
export default class CandidatesComponent extends Vue {
    loading = true;
    candidates = [];
    offset = 0;
    total = 0;
    size = 6;
    mounted() {
        this.fetchCandidates();
    }

    changeOffset(changeValue: number) {
        this.loading = true;
        this.offset = this.offset + changeValue;
        this.fetchCandidates();
    }

    fetchCandidates(){
        TorreService.getCandidates(this.offset, this.size,'').then((response) =>{
            console.log(response);
            this.loading = false;
            this.candidates = response.results;
            this.total = response.total;
        })
    }
    
    selectCandidate(selCandidate: any) {
        this.$store.commit(SET_CANDIDATE_MUTATION, { candidate: selCandidate})
    }

    get selectedCandidate() {
        return this.$store.state.currentCandidate;
    }

}
</script>
