<template>
  <div>
    <Header>書き残しサイト</Header>
    <v-flex>
      <v-container>
        <v-row class="d-flex justify-center pt-7 mb-15">
          <v-col cols="10">
            <div v-html="contents.body" id="fixSize"></div>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      contents: {},
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch('getContents', params.slug)
    return { contents: store.state.contents }
  },
})
</script>

<style>
#fixSize img {
  max-width: 100%;
  height: 100%;
}
</style>
