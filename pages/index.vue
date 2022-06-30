<template>
  <div>
    <Header>書き残しサイト</Header>
    <v-flex>
      <v-container>
        <Lists></Lists>
      </v-container>
    </v-flex>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {}
  },
  async asyncData({ store }) {
    await store.dispatch('getArticles')
    console.log('uu')
  },
}
</script>
