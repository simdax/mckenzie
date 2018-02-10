<template>
<div>
  <v-card class="mb-3">
    <v-card-text>
      <bottom @ok="onInput($event)"></bottom>
      <!-- <v-text-field -->
      <!--   label="# of steps" -->
      <!--   :value="steps" -->
      <!--   @input="onInput" -->
      <!--   min="1" -->
      <!--   max="6" -->
      <!--   hint="This demo has a maximum of 6 steps" -->
      <!--   persistent-hint -->
      <!--   ></v-text-field> -->
    </v-card-text>
  </v-card>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <template v-for="n in steps">
	{{titles[n - 1]}}
        <v-stepper-step
	  :key="n+'key'"
          :step="n"
          :complete="e1 > n"
          editable
          >
        </v-stepper-step>
        <v-divider v-if="n !== steps" :key="n"></v-divider>
      </template>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content
        :step="n"
        v-for="n in steps"
        :key="n"
        >
	<stepper-content v-for="stepper in steppers[n - 1]"
	  		 :type="stepper.type"
	  		 :title="stepper.title"
	  		 />
        <!-- <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card> -->
        <v-btn color="primary" @click="nextStep(n)">Continue</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</div>
</template>

<script>
import List from "./lists"
import Bottom from "./bottom-button"
import StepperContent from './stepperContent'

export default {
    components: {List, Bottom, StepperContent},
    data () {
	return {
	    titles: ["Démarrage", "Kickoff", "Due Diligence", "SPA",
		     "Post Acquisition"],
	    steppers:[
		[
		    {title: "Lettre d'engagement"},
		    {title: "Proposition d'assistance"},
		    {title: "Conditions générales de vente" }],
		[
		    {title: "Call / Meeting"},
		    {title: "Invitation outlook"},
		    {title: "Scope de la mission & délai" }],
		[
		    {title: "Rappel codes d'accès"},
		    {title: "Rapport définitif"},
		    {title: "Scope de la mission & délai" }],	    
		[
		    {title: "Signing"},
		],
		[ ]
	    ],
	    currentPage: 0,
            pageCount: 0,
            e1: 1,
            steps: 5
	}
    },
    
    watch: {
	steps (val) {
            if (this.e1 > val) {
		this.e1 = val
            }
	}
    },
    methods: {
	onInput (payload) {
            this.steps += 1
	    this.titles.push(payload.title)
	},
	nextStep (n) {
            if (n === this.steps) {
		this.e1 = 1
            } else {
		this.e1 = n + 1
            }
	}
    }
}
</script>
