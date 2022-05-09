<template>
  <div class="CommonList">
    <ul class="CommonList-container">
      <li v-for="(value, index) in data"
          :key="'character_' + index"
          class="CommonList-item">
          <img
            :src="value.thumbnail.path + '.' + value.thumbnail.extension"
            alt=""
            class="CommonList-thumbnail"/>
          <p class="CommonList-title">{{ value.name }}</p>
      </li>
    </ul>
    <common-pagination
        :limit="limit"
        :totalItem="totalItem"/>
  </div>
</template>

<script>
import CommonPagination from '@/components/common/CommonPagination'

export default {
    components: { CommonPagination },
    props: {
        data: {
            type: Array,
            required: true
        },
        totalItem: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.CommonList {
    &-container {
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 auto;
        padding: 1em 0 2em 0;
        &:after {
            display: block;
            content: '';
            clear: both;
            visibility: hidden;
        }
    }
    &-item {
        display: block;
        position: relative;
        flex: 1 1 12%;
        width: 30vw;
        height: 15vw;
        margin: 0;
        padding: 1em;
        float: left;
        text-align: center;
    }
    &-thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &-title {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        margin: 0;
        padding: 0.5em;
        background: $color-black;
        color: $color-white;
    }
}
</style>
