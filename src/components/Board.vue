<template>
<!-- ここにHTMLを書きます -->
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <list-add />
    </main>
  </div>
</template>

<script>
// ここにJSを書きます
import ListAdd from './ListAdd.vue'
export default {
  components: {
    ListAdd
  },
}
</script>
