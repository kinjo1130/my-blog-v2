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

<script>
export default {
  layout: 'flex',
  data() {
    return {
      articles: [],
    }
  },
  //TODO:ここの配列のpushが動かないから、ここを治すようにする
  mounted() {
    //this.articles = this.$store.state.articles
    this.articles.push(this.$store.state.articles)
  },
  created() {
    this.$store.dispatch('getArticles')
  },
}
</script>

<style></style>
