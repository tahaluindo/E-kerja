<template>
  <div>
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from './../components/Menu.vue'
export default {
  components: {
    Menu
  },
  data () {
    return {
      coba: 'ini coba'
    }
  }
}
</script>

<style scoped>
</style>
