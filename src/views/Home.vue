<template>
<div class="wrap">
  <div class="lists">
    <ElementsList></ElementsList>
    <MovedList></MovedList>
  </div>
  <Buttons></Buttons>
  <ErrorMessage v-if="isError"></ErrorMessage>
  </div>
</template>

<script>
import ElementsList from '@/components/ElementsList/ElementsList'
import MovedList from '@/components/MovedList/MovedList'
import Buttons from '@/components/Buttons/Buttons'
import ErrorMessage from '@/components/Messages/ErrorMessage'

export default {
  components: {
    ElementsList,
    MovedList,
    Buttons,
    ErrorMessage
  },
  computed: {
    isError() {
      return this.$store.state.isError
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/home.scss';
</style>
