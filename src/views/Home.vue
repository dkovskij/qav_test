<template>
<div class="wrap">
  <div class="lists">
    <ElementsList></ElementsList>
    <MovedList></MovedList>
  </div>
  <Buttons></Buttons>
  </div>
</template>

<script>
import ElementsList from '@/components/ElementsList/ElementsList'
import MovedList from '@/components/MovedList/MovedList'
import Buttons from '@/components/Buttons/Buttons'

export default {
  components: {
    ElementsList,
    MovedList,
    Buttons
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/home.scss';
</style>
