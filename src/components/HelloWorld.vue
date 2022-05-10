<template>
  <div class="HelloWord">
    <global-loader :showGlobalLoader="showGlobalLoader"/>
    <common-title
      :title="getLocale('roles:page_title')"
      class="HelloWorld-title"/>
    <common-menu :links="menuLinks"/>
    <router-view v-if="!isHome"/>
    <div
        v-else
        class="HelloWord-content">
      <img
        class="HelloWorld-marvelBackground"
        src="@/assets/marvel-bg.jpg" alt=""/>
    </div>
      <span>{{ getFeedbackError }}</span>
      <button @click="setFeedbackError">Coucou</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as pathTypes from '@/js/path-types'
import CommonMenu from '@/components/common/CommonMenu'
import CommonTitle from '@/components/common/CommonTitle'
import GlobalLoader from 'common/components/GlobalLoader'

export default {
    components: {
        CommonMenu,
        CommonTitle,
        GlobalLoader
    },
    data: function () {
        return {
            feedbackError: '',
            menuLinks: [
                {
                    name: 'Accueil',
                    routeName: pathTypes.HOME
                },
                {
                    name: 'Comics',
                    routeName: pathTypes.COMICS
                },
                {
                    name: 'Personnages',
                    routeName: pathTypes.CHARACTERS
                }
            ]
        }
    },
    computed: {
        ...mapState(['showGlobalLoader']),
        isHome: function () {
            return this.$route.name === pathTypes.HOME
        }
    },
    methods: {
        setFeedbackError () {
            this.updateFeedbackMessage({
                message: 'Salut les artistes',
                success: false
            })
        }
    }
}
</script>

<style lang="scss">
.HelloWorld {
  &-marvelBackground {
    width: 100%;
  }

  &-title {
    text-align: center;
  }
}
</style>
