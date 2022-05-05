<template lang="html">
  <h1
    :aria-label="title"
    class="CommonTitle Accessibility-reachableByTab"
    tabindex="0">
        <span
          class="Accessibility-notReachableByClick"
          tabindex="-1">
            {{ title }}
        </span>
  </h1>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang='scss' scoped>

.CommonTitle {
  margin: 0;
  text-transform: uppercase;
}
</style>
