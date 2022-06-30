export const state = () => ({
  //TODO:もっといい方法があるかも
  articles: [],
})
export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
}

export const actions = {
  //TODO:何回も取得してくるのも防ぐ
  getArticles({ commit }) {
    this.$axios
      .$get(`https://${this.$config.SERVICE_DOMAIN}.microcms.io/api/v1/${this.$config.END_POINT}`, {
        headers: {
          'X-MICROCMS-API-KEY': this.$config.API_KEY,
        },
      })
      .then((res) => {
        commit('setArticles', res.contents)
      })
  },
}
