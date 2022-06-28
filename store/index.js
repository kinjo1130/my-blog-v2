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
    this.$microcms.get({ endpoint: 'blog' }).then((res) => {
      console.log(res)
      commit('setArticles', res.contents)
    })
  },

}
