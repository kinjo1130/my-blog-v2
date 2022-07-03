import { actionTree, getAccessorType, mutationTree } from 'typed-vuex'

export const state = () => ({
  //TODO:もっといい方法があるかも
  articles: [] as [],
  contents: {},
})
export type RootState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  setArticles(state, articles: []) {
    state.articles = articles
  },
  setContents(state, contents: {}) {
    state.contents = contents
  },
})

export const actions = actionTree(
  { state, mutations },
  {
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
        .catch((err) => {
          console.log({ err })
        })
    },
    async getContents({ commit }, id) {
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
        .catch((err) => {
          console.log({ err })
        })
    },
  }
)
export const accessorType = getAccessorType({
  state,
  mutations,
  actions,
})
