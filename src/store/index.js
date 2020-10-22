import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//ローカルストレージに保存したリストを取得する
const savedLists = localStorage.getItem('trello-lists')

//storeインスタンスを定義して最終行でimportしてmain.jsで拾う形
const store = new Vuex.Store({
  //？？？
  state: {
    // 保存があればparseして使用（json状態のものをオブジェクトに変換してる)、なければ雛形を作成
    lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  //定義,同期的でなければならない
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    removeCardFromList(state, payload) {
      console.log("test")
      console.log(state.lists[payload.listIndex]["cards"])
      state.lists[payload.listIndex]["cards"].splice(payload.cardIndex, 1)
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body })
    },
  },
  //commit用、コンポーネント操作はここで行うらしい...
  //actionsは第一引数にcontextというストアインスタンスのメソッドやプロパティを呼び出せるオブジェクトを受け取ることができます。
  //ここで実行第一引数はmutationsで定義した関数を指す。
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    removeCardFromList(context, payload) {
      context.commit('removeCardFromList', payload)
    },
    addCardToList(context, payload) {
      context.commit('addCardToList', payload)
    },
  },
  // modules: {
    //本来はこの状態管理ファイルを分割した際に、それらをimportするために使う。今回は単一ファイルなので不要
  // }

  getters: {
    totalCardCount(state) {
      let count = 0
      // content => count += content.cards.length
      const map1 = state.lists.map((content) => count += content.cards.length)
      console.log(map1)
      return count
    },
  },
})

//データの状態を更新後にlocalStorageへデータの状態を保存しています
store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
