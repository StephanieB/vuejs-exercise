<template>
    <div class="MarvelCharacters">
        <!--<common-button
          :name="buttonName"
          @buttonClicked="getCharacters"/>-->
        <global-loader
            v-if="!charactersLoaded"
            :showGlobalLoader="true"/>

        <common-list
            v-else
            :data="characters"
            :limit="limitNbPerPage"
            :totalItem="charactersTotal"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import * as actionTypes from '@/store/action-types'
import * as charactersType from '@/js/character-types'
import CommonList from '@/components/common/CommonList'
import GlobalLoader from 'common/components/GlobalLoader'

export default {
    components: { CommonList, GlobalLoader },
    data: function () {
        return {
            buttonName: 'Récupérer la liste des personnages',
            limitNbPerPage: charactersType.ITEM_NB_PER_PAGE
        }
    },
    computed: {
        ...mapState(['characters', 'charactersLoaded', 'charactersTotal'])
    },
    watch: {
        $route () {
            this.getCharacters()
        }
    },
    mounted: function () {
        this.getCharacters()
    },
    methods: {
        getCharacters () {
            this.$store.dispatch(actionTypes.GET_CHARACTERS, {
                page: this.$route.query.page,
                limit: charactersType.ITEM_NB_PER_PAGE
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .MarvelCharacters {
        width: 95%;
        margin: auto;
    }
</style>
