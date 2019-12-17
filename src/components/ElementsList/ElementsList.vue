<template>
  <div class="elements-list">
    <div
      v-for="(item, index) in list"
      :key="'list' + index"
      class="wrap"
    >
      <div class="item">
        {{ item }}
      </div>
      <div @click="moveItem(index, item)" class="move-button" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.list.list
    }
  },
  created() {
    this.$store.dispatch('list/getList')
  },
  methods: {
    moveItem(index, item) {
      console.log(index)
      this.$store.dispatch('list/moveItem', index)
      this.$store.commit('history/ADD_EVENT', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/elements-list.scss';
</style>
