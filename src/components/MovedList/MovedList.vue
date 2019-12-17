<template>
  <div class="moved-list">
    <div
      v-for="(item, index) in movedList"
      :key="'movedItem' + index"
      class="wrap">
      <div class="item">
        {{ item }}
      </div>
      <div class="move-back" @click="moveBack(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movedList() {
      return this.$store.state.list.movedList
    }
  },
  methods: {
    moveBack(index) {
      this.$store.dispatch('list/moveBack', index)
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '@/styles/moved-list.scss';
</style>
