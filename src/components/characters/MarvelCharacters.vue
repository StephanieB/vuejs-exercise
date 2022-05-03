<template>
  <div class="MarvelCharacters">
    <!--<common-button
      :name="buttonName"
      @buttonClicked="getCharacters"/>-->

    <div
      v-if="!charactersLoaded"
      class="MarvelCharacters-loaderContainer" >
      <img src="@/assets/marvel-loader.gif" class="MarvelCharacters-loaderImg" alt=""/>
      <p class="MarvelCharacters-loaderText">Loading...</p>
    </div>
   <common-list
     v-else
     :data="characters" />

  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as actionTypes from '@/store/action-types'
// import CommonButton from '@/components/common/CommonButton'
import CommonList from '@/components/common/CommonList'

export default {
  components: { CommonList },
  data: function () {
    return {
      buttonName: 'Récupérer la liste des personnages',
      currentCharacters: [],
      currentCharactersLoaded: false
    }
  },
  computed: {
    ...mapState(['characters', 'charactersLoaded']),
    getCurrentCharacters () {
      return this.currentCharacters
    },
    getCurrentCharactersLoaded () {
      return this.currentCharactersLoaded
    }
  },
  watch: {
    characters (val) {
      this.currentCharacters = [...val]
    },
    charactersLoaded (val) {
      this.currentCharactersLoaded = val
    }
  },
  mounted: function () {
    if (!this.charactersLoaded) {
      this.$store.dispatch(actionTypes.GET_CHARACTERS)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MarvelCharacters-loaderContainer {
  width: 400px;
  margin: 5em auto;
}
.MarvelCharacters-loaderImg {
  width: 100%;
}
.MarvelCharacters-loaderText {
  text-align: center;
}
</style>
