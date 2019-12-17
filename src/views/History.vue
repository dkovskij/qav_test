<template>
  <div class="history">
    <table class="history-table">
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Name
          </th>
          <th>
            Действие
          </th>
          <th>
            Дата
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in historyList"
          :key="'item' + index"
        >
          <td>
            {{ item.id }}
          </td>
          <td>
            {{ item.name}}
          </td>
          <td>
            {{ item.action === 'add' ? 'Добавление' : 'Удаление'}}
          </td>
          <td>
            {{ item.date }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historyList: []
    }
  },
  created() {
    if (this.$route.params.event === 'both') {
      this.historyList = this.history
    } else if (this.$route.params.event === 'add') {
      this.historyList = this.history.filter(el => el.action === 'add')
    } else if (this.$route.params.event === 'remove') {
      this.historyList = this.history.filter(el => el.action === 'remove')
    }
  },
  computed: {
    history() {
      return this.$store.state.history.history
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/history.scss';
</style>
