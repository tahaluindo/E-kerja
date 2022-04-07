<template>
  <div>
    <p class="description font-medium">{{ descriptionText }}</p>

    <div style="height: 20px"></div>

    <div class="form">
      <div class="form-group">
        <label class="font-medium" for="forgetPasswordUsername">Username</label>
        <input
          type="text"
          class="form-control"
          id="forgetPasswordUsername"
          placeholder="Masukkan Username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label class="font-medium" for="forgetPasswordNIK">NIK</label>
        <input
          type="text"
          class="form-control"
          id="forgetPasswordNIK"
          placeholder="Masukkan NIK"
          v-model="nik"
        />
      </div>
      <div style="height: 20px"></div>
      <button class="btn btn-primary btn-block font-semibold" @click="$emit('forgetPassword', {
        username: username,
        nik: nik
      })">
        {{ buttonText }}
      </button>
      <div style="height: 20px"></div>
      <p class="font-medium">
        <span class="text-danger" @click="$emit('changeMode', 'login')"><i class="fa-solid fa-arrow-left"></i> <span style="border-bottom: 1px solid #DD3737;">Kembali ke halaman Login.</span></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    descriptionText: String,
    buttonText: String
  },
  data () {
    return {
      username: '',
      nik: ''
    }
  }
}
</script>

<style lang="less" scoped>
.description {
  color: #4d8279;
  font-size: 0.9rem;
}
p {
  font-size: 14px;
  span {
    cursor: pointer;
  }
}
</style>
