<template>
  <!-- ★ここから追記 -->
  <!-- フォーム送信を防ぎながら送信時の処理を指定 -->
  <form class="addlist" @submit.prevent="addList">
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="Add new list"
    >
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
  <!-- ★ここまで追記 -->
</template>

<script>
  export default {
    data: function() {
      return {
        title: '',
      }
    },
    methods: {
      addList: function() {
        this.$store.dispatch('addlist', { title: this.title })
        this.title = ''
      },
    }
  }
</script>
