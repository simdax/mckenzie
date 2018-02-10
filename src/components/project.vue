<template>
<v-list two-line align-center>
    <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
      <v-list-tile slot="item" @click="">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
          <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action >
          <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
      	  <v-icon>keyboard_arrow_down</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      </v-list-tile subheader>
      <v-list-tile to="project" @click="">
        <v-list-tile-content>
          <v-icon>fa-arrow</v-icon>
          <v-list-tile-title>Timeline</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile subheader>
      <v-list-tile to="budget" @click="">
        <v-list-tile-content>
            <v-icon>fa-arrow</v-icon>
            <v-list-tile-title>Budget</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>
</v-list>
</template>

<script>
export default{
    props: ["title"],
    data(){
	return {
	    avatar: "static/identity.jpg",
	    items: [
		{ action: '1 year', headline: 'Data Privacy', title: 'Project New World',
		  subtitle: "financement" },
		{ action: '5 days', headline: 'Finance', title: 'Project topaze',
		  subtitle: "restructuration" },
		{ action: '5 days', headline: 'Finance', title: 'Project Z',
		  subtitle: "acquisition" },
		{ action: '2 months', headline: 'Finance', title: 'Project Brenus',
		  subtitle: "cautionnement" },
	    ]
	}
    },
    methods:{
	io(){
	    console.log(this.$router.push("project"))
	}
    }
}
</script>

<style>
.avatar{
    text-align: center;
}
</style>
