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
            this.$emit('buttonClicked')
        }
    }
}
</script>
