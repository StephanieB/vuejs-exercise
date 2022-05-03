<template>
  <div class="CommonTitle">
    <h1>{{ title }}</h1>
  </div>
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

<style scoped>
.CommonTitle h1{
  margin: 0;
  padding: 1em 1em 0.5em 1em;
  border-bottom: 1px solid #393939;
  font-size: 46px;
  text-align: center;
}
</style>
