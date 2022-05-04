<template>
  <div class="HelloWord">
    <common-title
      :title="title"/>

    <common-menu
      :links="menuLinks"/>

    <router-view v-if="!isHome"></router-view>
    <div class="HelloWord-content" v-else>
      <img src="@/assets/marvel-bg.jpg" class="HelloWorld-marvelBackground">
    </div>
  </div>
</template>

<script>
import CommonMenu from '@/components/common/CommonMenu'
import CommonTitle from '@/components/common/CommonTitle'
export default {
  components: { CommonTitle, CommonMenu },
  data: function () {
    return {
      title: 'Marvel',
      menuLinks: [
        {
          name: 'Accueil',
          routeName: 'home'
        },
        {
          name: 'Comics',
          routeName: 'comics'
        },
        {
          name: 'Personnages',
          routeName: 'characters',
          onClick: 'getCharacters'
        }
      ]
    }
  },
  computed: {
    isHome: function () {
      return this.$route.name === 'home'
    }
  }
}
</script>

<style lang='scss'>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  color: white;
}
a {
  color: white;
}
.HelloWorld-marvelBackground {
  width: 100%;
}
</style>
