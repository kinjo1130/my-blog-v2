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

<script>
export default {
  data() {
    return {
      contents: {},
    }
  },
  //TODO:ここの詳細ページをどうにかコンポーネント化にする
  created() {
    console.log(this.$route.params.slug)
    const id = this.$route.params.slug
    this.$axios
      .$get(
        `https://${this.$config.SERVICE_DOMAIN}.microcms.io/api/v1/${this.$config.END_POINT}/${id}` ,
        {
          headers: {
            'X-MICROCMS-API-KEY': this.$config.API_KEY,
          },
        }
      )
      .then((res) => {
        console.log({ res })
        this.contents = res
      })
  },
}
</script>

<style>
#fixSize img {
  max-width: 100%;
  height: 100%;
}
</style>
