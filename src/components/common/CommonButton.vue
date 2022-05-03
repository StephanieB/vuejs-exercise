<template>
  <div class="CommonButton">
    <button @click="onClick">{{ name }}</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick () {
      console.log('click')
      this.$emit('buttonClicked')
    }
  }
}
</script>
