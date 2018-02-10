<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12 lg5 mb-3>
      <v-expansion-panel popout>
	<v-expansion-panel-content>
	  <div slot="header">{{title}}</div>
	  <v-card>
	    <pdf></pdf>
	    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
	    <upload title="upload"></upload>
	  </v-card>
 	</v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</v-container>

</template>

<script>
import Pdf from './pdf'
import Upload from "./upload-button"

export default{
    props: ["title", "type"],
    components:{Pdf, Upload},
    mounted(){
	 
    }
}
</script>
