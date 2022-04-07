<template>
  <div>
    <h1>
      Master Pegawai
    </h1>
    <div>
      <input type="text" v-model="search">
      <!-- <button>Cari</button> -->
    </div>
    <div>
      <table border="1" class="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>NIP</th>
            <th>Nama</th>
            <th>Golongan</th>
            <th>Pangkat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in searchPegawai" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ item.nip }}</td>
            <td>{{ item.nama_gelar }}</td>
            <td>{{ item.golongan }}</td>
            <td>{{ item.pangkat }}</td>
            <td>
              <router-link :to="`/pegawai/data-pegawai/${item.nip}`">
                Lihat
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
td {
  border: 1px solid black;
}
</style>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      pegawai: [],
      search: ''
    }
  },
  computed: {
    searchPegawai () {
      var tempPegawai = this.pegawai
      if (this.search.length > 0) {
        tempPegawai = tempPegawai.filter(el => el.nip.includes(this.search.toLowerCase()) || el.nama_gelar.toLowerCase().includes(this.search.toLowerCase()))
      } else tempPegawai = this.pegawai
      return tempPegawai
    }
  },
  methods: {
    getCurrentDataPegawai () {
      axios(
        {
          method: 'get',
          url: 'currentDataPegawai',
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
      ).then(res => {
        this.pegawai = res.data.pegawai
      }).catch(err => {
        var statusCode = err.response.status
        if (statusCode >= 400 && statusCode < 500) {
          this.$router.replace('/')
        } else if (statusCode >= 500 && statusCode < 600) {
          console.log('Terjadi kesalahan pada server, silahkan coba lagi nanti')
        }
      })
    }
  },
  mounted () {
    this.getCurrentDataPegawai()
  }
}
</script>
