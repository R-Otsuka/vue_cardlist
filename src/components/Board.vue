<template>
<!-- ここにHTMLを書きます -->
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <div class="list-index">
        <!-- listsをループしてlistコンポーネントを量産してる -->
        <!-- listに渡す値を指定(ループ内で差をつける)、listsはcomputedでstoreから取得 -->
        <list v-for="(item,index) in lists"
          :key="item.id"
          :title="item.title"
          :cards="item.cards"
          :listIndex="index"
        />
        <list-add />
      </div>
    </main>
  </div>
</template>

<script>
// ここにJSを書きます
import ListAdd from './ListAdd.vue'
import List from './List.vue'
import { mapState } from 'vuex'
export default {
  components: {
    ListAdd,
    List,
  },
  //storeのStateで定義したものを使用、一応this.$store.stateでもアクセス可能
  computed:{
    ...mapState([
      'lists'
    ]),
    totalCardCount(){
      return this.$store.getters.totalCardCount
    },
  },
}
</script>
