<template>
  <div>
    <v-card
      v-for="article in this.$store.state.articles"
      :key="article.id"
      :to="article.id"
      class="my-5"
    >
      <v-card-title>{{ article.title }}</v-card-title>
      <nuxt-link to="/test"></nuxt-link>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface Article {
  id: number
  title: string
}
export default Vue.extend({
  layout: 'flex',
  data() {
    return {
      articles: [],
    }
  }
})
</script>

<style></style>
