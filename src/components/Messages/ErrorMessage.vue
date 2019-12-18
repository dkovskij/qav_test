<template>
  <div class="error-wrap">
    <div class="error-message">
      К сожалению произошла ошибка, попробуйте позже.
      <button @click="closeErrorMessage">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeErrorMessage() {
      this.$store.commit('SET_ERROR',false)
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '@/styles/error-message.scss';
</style>
