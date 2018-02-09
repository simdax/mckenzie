<template>
  <v-list>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>compare_arrows</v-icon>
      </v-list-tile-action>
      <v-list-tile-title @click="io">
	  {{title}}
      </v-list-tile-title>
    </v-list-tile>
  </v-list>
</template>

<script>
export default{
    props: ["title"],
    data(){
	return {
	    //	    title: "coucou"
	}
    },
    methods:{
	io(){
	    console.log(this.$router.push("project"))
	}
    }
  }
</script>
