<template>
  <div class="HelloWord">
    <common-title
      :title="title"
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
import * as pathTypes from '@/js/path-types'
import CommonMenu from '@/components/common/CommonMenu'
import CommonTitle from '@/components/common/CommonTitle'

export default {
    components: {
        CommonMenu,
        CommonTitle
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
            ],
            title: 'Marvel'
        }
    },
    computed: {
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
