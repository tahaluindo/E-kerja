<template>
  <div>
    <flip-card :nomorKarisKarsu="pegawai.karpeg_karsu_karis.nomor_karis"></flip-card>
    <h1>
      Data Pegawai
    </h1>
    <button @click="mode = 'admin'">Show untuk admin</button>
    <button @click="mode = 'pegawai'">Show untuk pegawai (pribadi)</button>
    <div v-if="mode === 'admin'">
      <!-- Data Pribadi -->
      <div v-if="typeof(pegawai) == 'object'">
        <fieldset>
          <legend>
            Data Pribadi
          </legend>
          <p>NIK:<br />{{ pegawai.data_pribadi.nomor_ktp }}</p>
          <p>nama:<br />{{ pegawai.data_pribadi.nama }}</p>
          <p>tempat/tanggal lahir:<br />{{ pegawai.data_pribadi.tempat_lahir }}, {{ pegawai.data_pribadi.tanggal_lahir }}</p>
          <p>jenis kelamin:<br />{{ pegawai.jenis_kelamin.jenis_kelamin }}</p>
          <p>status perkawinan:<br />{{ pegawai.status_perkawinan.status_perkawinan == null ? 'Masih NULL' : '' }}</p>
          <p>alamat:<br />{{ pegawai.data_pribadi.alamat }}</p>
          <p>nomor hp:<br />{{ pegawai.data_pribadi.nomor_hp }}</p>
          <p>nomor rekening:<br />{{ pegawai.rekening.nomor_rekening }} - {{ pegawai.rekening.bank }}</p>
          <button>Ubah Data</button>
        </fieldset>
        <fieldset>
          <legend>
            Data Kepegawaian
          </legend>
          <p>formasi pengangkatan:<br />{{ pegawai.formasi_pengangkatan.formasi_pengangkatan }}</p>
          <p>TMT CPNS:<br />{{ pegawai.tmt_cpns_pns.tmt_cpns }}</p>
          <p>TMT PNS:<br />{{ pegawai.tmt_cpns_pns.tmt_pns }}</p>
          <p>nomor kartu pegawai:<br />{{ pegawai.karpeg_karsu_karis.nomor_karpeg }}</p>
          <p>nomor kartu {{ pegawai.karpeg_karsu_karis.nomor_karsu == null ? 'istri' : 'suami' }}:<br />{{ pegawai.karpeg_karsu_karis.nomor_karsu == null ? pegawai.karpeg_karsu_karis.nomor_karis : pegawai.karpeg_karsu_karis.nomor_karsu }}</p>
          <p>Riwayat Jabatan:</p>
          <button>Tambah Jabatan</button>
          <table border="1">
            <thead>
              <th>
                <td>No.</td>
              </th>
              <th>
                <td>TMT</td>
              </th>
              <th>
                <td>Jabatan</td>
              </th>
              <th>
                <td>Eselon</td>
              </th>
              <th>
                <td>Unit Kerja</td>
              </th>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in pegawai.jabatan_unit_kerja" :key="idx">
                <td>{{ idx + 1 }}</td>
                <td>{{ item.tmt_jabatan }}</td>
                <td style="max-width: 200px; vertical-align: middle;">{{ item.jabatan }}</td>
                <td>{{ item.eselon !== null ? `${item.eselon}/${item.ruang}` : '-' }}</td>
                <td style="max-width: 200px;">{{ item.unit_kerja }}</td>
              </tr>
            </tbody>
          </table>
          <p>Riwayat Golongan/Pangkat:</p>
          <button>Tambah Golongan/Pangkat</button>
          <table border="1">
            <thead>
              <th>
                <td>No.</td>
              </th>
              <th>
                <td>TMT</td>
              </th>
              <th>
                <td>Golongan</td>
              </th>
              <th>
                <td>Pangkat</td>
              </th>
              <th>
                <td>Kriteria</td>
              </th>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in pegawai.golongan_pangkat" :key="idx">
                <td>{{ idx + 1 }}</td>
                <td>{{ item.tmt_golongan_pangkat }}</td>
                <td>{{ item.golongan }}</td>
                <td style="max-width: 200px; vertical-align: middle;">{{ item.pangkat }}</td>
                <td style="max-width: 200px;">{{ item.kriteria_golongan_pangkat }}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import FlipCard from './FlipCard.vue'
import axios from 'axios'
export default {
  components: {
    FlipCard
  },
  data () {
    return {
      mode: 'admin',
      pegawai: Object
    }
  },
  methods: {
    getDataPegawai () {
      axios(
        {
          url: `dataPegawai/${this.$route.params.nip}`,
          method: 'get'
        }
      ).then(res => {
        this.pegawai = res.data.pegawai
        console.log(this.pegawai)
      })
    }
  },
  beforeMount () {
    this.getDataPegawai()
  }
}
</script>
