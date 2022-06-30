export const state = () => ({
  //TODO:もっといい方法があるかも
  articles: [],
  contents: {}
})
export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setContents(state, contents) {
    state.contents = contents
  }
}

export const actions = {
  //TODO:何回も取得してくるのも防ぐ
  async getArticles({ commit }) {
    await this.$axios
      .$get(
        `https://${this.$config.SERVICE_DOMAIN}.microcms.io/api/v1/${this.$config.END_POINT}`,
        {
          headers: {
            'X-MICROCMS-API-KEY': this.$config.API_KEY,
          },
        }
      )
      .then((res) => {
        commit('setArticles', res.contents)
      })
  },
  async getContents({ commit }, id) {
    console.log(id)
    await this.$axios
      .$get(
        `https://${this.$config.SERVICE_DOMAIN}.microcms.io/api/v1/${this.$config.END_POINT}/${id}`,
        {
          headers: {
            'X-MICROCMS-API-KEY': this.$config.API_KEY,
          },
        }
      )
      .then((res) => {
        commit('setContents', res)
      })
  },
}
