<template>
<v-layout row>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-toolbar color="light-blue" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>My files</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>view_module</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list two-line subheader>
        <v-subheader inset>Folders</v-subheader>
        <v-list-tile avatar v-for="item in items" v-bind:key="item.title" @click="">
          <v-list-tile-avatar>
            <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">info</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider inset></v-divider>
        <v-subheader inset>Files</v-subheader>
        <v-list-tile v-for="item in items2" v-bind:key="item.title" avatar @click="">
          <v-list-tile-avatar>
            <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">info</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
    data () {
	return {
	    items: [
		{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Contrat Licence société A', subtitle: 'Jan 9, 2014' },
		{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Memorandum de Structure', subtitle: 'Jan 17, 2014' },
		{ icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Proposition de Service', subtitle: 'Jan 28, 2014' }
	    ],
	    items2: [
		{ icon: 'assignment', iconClass: 'blue white--text', title: 'Lettre d\'engagement', subtitle: 'Jan 20, 2014' },
		{ icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kick Off meeting', subtitle: 'Jan 10, 2014' }
	    ]
	}
    }
}
</script>
