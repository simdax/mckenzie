<template>
  <div class="text-xs-center">
    <v-bottom-sheet v-model="sheet">
      <v-btn slot="activator" color="purple" dark>rajouter une date</v-btn>
      <v-list >
        <v-subheader>Quel type d'evenement</v-subheader>
        <v-list-tile
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false; $emit('ok', tile)"
        >
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <!-- <img :src="`/static/doc-images/bottom-sheets/${tile.img}`" :alt="tile.title"> -->
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
          { img: 'hangouts.png', title: 'Litiges' },
          { img: 'messenger.png', title: 'Droits de la concurrence' },
          { img: 'google.png', title: 'Comité d\'entreprise' },
      ]
    })
  }
</script>
