<template>
<v-app>
  <v-navigation-drawer
    persistent
    :mini-variant="miniVariant"
    :clipped="clipped"
    v-model="drawer"
    enable-resize-watcher
    fixed
    app
    >
    <subscribe></subscribe>
  </v-navigation-drawer>
  <v-toolbar
    app
    :clipped-left="clipped"
    >
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <!-- <v-btn icon @click.stop="miniVariant = !miniVariant"> -->
      <!--   <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon> -->
      <!-- </v-btn> -->
    <!-- <v-btn icon @click.stop="clipped = !clipped"> -->
      <!--   <v-icon>web</v-icon> -->
      <!-- </v-btn> -->
    <!-- <v-btn icon @click.stop="fixed = !fixed"> -->
      <!--   <v-icon>remove</v-icon> -->
      <!-- </v-btn> -->
    <v-toolbar-title @click="$router.push('/')" :style="{cursor: 'pointer'}" v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="rightDrawer = !rightDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
  <v-content>
    <router-view/>
  </v-content>
  <v-navigation-drawer
    align-center
    temporary
    :right="right"
    v-model="rightDrawer"
    fixed
    app
    >
    <img class="badge" src="static/identity.jpg">
    <project/>
  </v-navigation-drawer>
  <v-footer :fixed="fixed" app>
  </v-footer>
</v-app>
</template>

<script>
import Subscribe from "@/components/subscribe"
import Project from "@/components/project"
import Under from "@/components/underlist"

export default {
    components: {Subscribe, Project, Under},
    data () {
	return {
	    clipped: false,
	    drawer: true,
	    fixed: false,
	    items: [{
		icon: 'mdi-mouse',
		title: 'Connection'
	    }],
	    miniVariant: false,
	    right: true,
	    rightDrawer: false,
	    title: 'Baker & me'
	}
    },
    name: 'App'
}
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Fira+Sans|Montserrat|Anton");

body, *{
    font-family: Helvetica;
    //      letter-spacing: 3px; 
    color: black;
}
.toolbar{

}
.badge{
    background: hsl(180, 20%, 30%);
    height: 100px;
    width: 100px;
    border-radius: 100%;
    margin: 30px auto;
    display: block;
}
.list__tile--link[href="#/project"],
.list__tile--link[href="#/files"],
.list__tile--link[href="#/budget"]{
    background: hsl(100, 10%, 50%);
    height: 30px;
}
.list__tile--link[href="#/project"]:hover,
.list__tile--link[href="#/files"]:hover,
.list__tile--link[href="#/budget"]:hover{
    background: hsl(100, 50%, 50%);
}

</style>
