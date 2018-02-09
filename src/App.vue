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
    <!-- <v-list> -->
      <!--   <v-list-tile -->
      <!--     value="true" -->
      <!--     v-for="(item, i) in items" -->
      <!--     :key="i" -->
      <!--   > -->
	<!--     <v-list-tile-action> -->
	  <!--       <v-icon v-html="item.icon"></v-icon> -->
	  <!--     </v-list-tile-action> -->
	<!--     <v-list-tile-content> -->
	  <!--       <v-list-tile-title v-text="item.title"></v-list-tile-title> -->
	  <!--     </v-list-tile-content> -->
	<!--   </v-list-tile> -->
      <!-- </v-list> -->
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
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="rightDrawer = !rightDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
  <v-content>
    <router-view/>
  </v-content>
  <v-navigation-drawer
    temporary
    :right="right"
    v-model="rightDrawer"
    fixed
    app
    >
    <project v-for="title in project_titles"
	     :key="title"
	     :title="title"/>
  </v-navigation-drawer>
  <v-footer :fixed="fixed" app>
    <span>&copy; 2017</span>
  </v-footer>
</v-app>
</template>

<script>
import Subscribe from "@/components/subscribe"
import Project from "@/components/project"

export default {
    components: {Subscribe, Project},
    data () {
	return {
	    project_titles: ["Project Topaze",
			     "Project Deep-Blue"],
	    clipped: false,
	    drawer: true,
	    fixed: false,
	    items: [{
		icon: 'user',
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
