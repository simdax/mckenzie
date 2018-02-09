<template>
  <v-layout column>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar color="indigo" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Dernières nouvelles</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cards"
            :key="card.title"
            >
            <v-card>
              <v-card-media
                :src="card.src"
                height="200px"
		>
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="card.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions class="white">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
  data: () => ({
  cards: [
  { title: 'Presentation de la loi Finance', src: 'static/LF.jpg', flex: 6 },
  { title: 'Protection des données personnelles', src: 'static/building.jpeg', flex: 6, content: "Le Parlement Européen a adopté, le 14 avril 2016, son Règlement général sur les données numériques, reconnaissant ainsi un droit au contrôle et à la protection de ses données personnelles. En savoir plus ." },
  { title: 'Eolien en mer', src: 'static/Eolien.jpg', flex: 6, content: "Publication de l’arrêté pris après avis de la CRE, relatif aux indemnités dues en cas de dépassement du délai de raccordement d’une installation de production d’électricité offshore. Lire notre analyse " },
  { title: 'Vene fêter les 55 ans de Baker & McKenzie!', src: 'static/50ans.jpg', flex: 6,  },
  ]
  })
  }
</script>
