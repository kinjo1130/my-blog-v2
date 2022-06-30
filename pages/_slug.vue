<template>
  <div>
    <Header>書き残しサイト</Header>
    <v-flex>
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col cols="10">
            <div v-html="contents.body" id="fixSize"></div>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      contents: {},
    }
  },

  async asyncData({ store, params }) {
    await store.dispatch('getContents', params.slug)
    return { contents: store.state.contents }
  },
}
</script>

<style>
#fixSize img {
  max-width: 100%;
  height: 100%;
}
</style>
