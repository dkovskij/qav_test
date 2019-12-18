<template>
  <div class="elements-list">
    <div
      v-for="(item, index) in filteredList"
      :key="'list' + index"
      class="wrap"
    >
      <div class="item">
        {{ item }}
      </div>
      <div @click="moveItem(item)" class="move-button" />
    </div>
    <div class="input">
      <input v-model="query" type="text">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      localList: [],
    }
  },
  computed: {
    query: {
      get() {
        return this.$store.state.list.query
      },
      set(val) {
        this.$store.state.list.query = val
      }
    },
    filteredList() {
      return this.$store.getters.filteredList
    }
  },
  created() {
    // this.$store.dispatch('list/getList')
  },
  methods: {
    moveItem(item) {
      this.$store.dispatch('list/moveItem', item)
      this.$store.commit('history/ADD_EVENT', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/elements-list.scss';
</style>
