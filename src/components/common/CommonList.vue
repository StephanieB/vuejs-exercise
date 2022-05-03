<template>
  <div class="CommonList">
    <ul class="CommonList-container">
      <li v-for="(value, index) in data"
          :key="'character_' + index"
          class="CommonList-item">
        <div class="CommonList-thumbnailContainer">
          <img
            :src="value.thumbnail.path + '.' + value.thumbnail.extension"
            alt=""
            class="CommonList-thumbnail"/>
        </div>
        <p class="CommonList-title">{{ value.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.CommonList-container {
  margin: 0;
}
.CommonList-item {
  display: inline-block;
  width: 10%;
  padding: 0.5em;
}
.CommonList-thumbnailContainer {
  height: 200px;
  overflow: hidden;
}
.CommonList-thumbnail {
  max-width: 100%;
  min-height: 100%;
}
.CommonList-title {
  padding-top: 0.2em;
}
</style>
