<template>
  <div style="display: inline-block;">
    <ul>
      <li v-for="menuParent in menu()" :key="menuParent.id">
        <router-link v-if="menu(menuParent.id).length === 0" :to="`/${menuParent.link}`">
          {{ menuParent.name }}
        </router-link>
        <span v-else>
          {{ menuParent.name }}
        </span>
        <ul v-for="menuChild in menu(menuParent.id)" :key="menuChild.id">
          <router-link :to="`/${menuParent.link}/${menuChild.link}`">
            {{ menuChild.name }}
          </router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          id: 1,
          name: 'Pegawai',
          icon: 'icone ning kene',
          link: 'pegawai',
          parent: 0
        },
        {
          id: 2,
          name: 'Master Pegawai',
          icon: 'icone ning kene',
          link: 'master-pegawai',
          parent: 1
        },
        {
          id: 3,
          name: 'Laporan',
          icon: 'icone ning kene',
          link: 'laporan',
          parent: 0
        },
        {
          id: 4,
          name: 'Data Pegawai',
          icon: 'icone ning kene',
          link: 'data-pegawai',
          parent: 1
        },
        {
          id: 5,
          name: 'Jabatan',
          icon: 'icone ning kene',
          link: 'jabatan',
          parent: 1
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    menu (parent = 0) {
      return this.menus.filter(el => el.parent === parent)
    }
  }
}
</script>
