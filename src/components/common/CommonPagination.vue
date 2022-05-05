<template>
  <div class="CommonPagination">
    <ul class="CommonPagination-list">
        <li
            v-for="page in getTotalPages"
            :key="page"
            class="CommonPagination-item">
            <router-link
                :to="{ name: charactersUrl, query: { page: page} }"
                class="CommonPagination-link">{{ page }}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import * as helper from '@/js/helper'
import * as pathTypes from '@/js/path-types'

export default {
    data: function () {
        return {
            charactersUrl: pathTypes.CHARACTERS
        }
    },
    props: {
        totalItem: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        }
    },
    computed: {
        getTotalPages () {
            return helper.getTotalPages(this.limit, this.totalItem)
        }
    }
}
</script>

<style lang="scss" scoped>
.CommonPagination {
    &-list {
        margin: 0 0 10px 0;
        padding: 0;
        text-align: center;
    }
    &-item {
        display: inline;
        padding: 0;
    }
    &-link {
        display: inline;
        padding: 0 2px 0 2px;
        &.router-link-exact-active {
            text-decoration: underline;
        }
    }
}
</style>
