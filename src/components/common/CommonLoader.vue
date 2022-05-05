<template>
    <div class="MarvelCharacters-loaderContainer">
        <img src="@/assets/marvel-loader.gif" class="MarvelCharacters-loaderImg" alt=""/>
        <p class="MarvelCharacters-loaderText">Loading...</p>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
