<template>
  <div class="CommonMenu">
    <ul class="CommonMenu-list">
      <li
        v-for="(link, index) in links"
        :key="'link_' + index"
        class="CommonMenu-item">
        <router-link
          :to="{ name: link.routeName }"
          class="CommonMenu-link">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.CommonMenu-list {
  margin: 0;
  padding: 0.2em;
  border-bottom: 1px solid #393939;
  text-align: center;
}
.CommonMenu-item {
  display: inline-block;
  padding: 1.5em;
}
.CommonMenu-link {
  text-decoration: none;
}
.CommonMenu-link.router-link-exact-active {
  text-decoration: underline;
}
</style>
