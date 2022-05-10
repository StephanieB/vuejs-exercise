<template>
    <div class="MarvelCharacters">
        <!--<common-button
          :name="buttonName"
          @buttonClicked="getCharacters"/>-->
        <template v-if="charactersLoaded">
            <h1>test</h1>
            <common-list
                :data="characters"
                :limit="limitNbPerPage"
                :totalItem="charactersTotal"/>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import * as actionTypes from '@/store/action-types'
import * as charactersType from '@/js/character-types'
import * as mutationTypes from '@/store/mutation-types'
import CommonList from '@/components/common/CommonList'

export default {
    components: { CommonList },
    data () {
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
        },
        charactersLoaded () {
            this.updateShowGlobalLoader()
        }
    },
    mounted () {
        this.getCharacters()
        this.updateShowGlobalLoader()
    },
    methods: {
        getCharacters () {
            this.$store.dispatch(actionTypes.GET_CHARACTERS, {
                page: this.$route.query.page,
                limit: charactersType.ITEM_NB_PER_PAGE
            })
        },
        updateShowGlobalLoader () {
            this.$store.commit(mutationTypes.UPDATE_SHOW_GLOBAL_LOADER, !this.charactersLoaded)
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
