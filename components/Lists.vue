<template>
  <div>
    <v-card
      v-for="article in this.$store.state.articles"
      :key="article.id"
      :to="article.id"
    >
      <v-card-title>{{ article.title }}</v-card-title>
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
  created() {
    console.log(this.$store.state.articles)
  },
  data() {
    return {
      articles: [],
    }
  }
})
</script>

<style></style>
