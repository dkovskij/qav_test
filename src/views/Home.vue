<template>
  <div class="lists">
    <ElementsList></ElementsList>
    <MovedList></MovedList>
  </div>
</template>

<script>
import ElementsList from '@/components/ElementsList/ElementsList'
import MovedList from '@/components/MovedList/MovedList'

export default {
  components: {
    ElementsList,
    MovedList
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/home.scss';
</style>
