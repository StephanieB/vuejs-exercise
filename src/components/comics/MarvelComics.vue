<template>
  <div class="MarvelComics">
    <div class="MarvelComics-banner">
      <img src="@/assets/marvel-banner.jpeg" alt=""/>
    </div>
    <p>Il n'y a aucun comics à consulter pour l'instant</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.MarvelComics-banner{
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.MarvelComics-banner img {
  width: 100%;
}
.MarvelComics p {
  padding: 1em;
  text-align: center;
}
</style>
