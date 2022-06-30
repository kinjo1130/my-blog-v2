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
export default {
  layout: 'flex',
  data() {
    return {
      articles: [],
    }
  }
}
</script>

<style></style>
