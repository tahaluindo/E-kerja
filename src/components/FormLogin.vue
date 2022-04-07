<template>
  <div>
    <p class="description font-medium">{{ descriptionText }}</p>

    <div style="height: 20px"></div>

    <div class="form">
      <div class="form-group">
        <label class="font-medium" for="loginUsername">Username</label>
        <input
          type="text"
          class="form-control"
          id="loginUsername"
          placeholder="Masukkan Username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label class="font-medium" for="loginPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="loginPassword"
          placeholder="Masukkan Password"
          v-model="password"
        />
      </div>
      <div style="height: 20px"></div>
      <button class="btn btn-primary btn-block font-semibold" @click="$emit('login', {
        username: username,
        password: password
      })">
        {{ buttonText }}
      </button>
      <div style="height: 20px"></div>
      <p class="font-medium">
        Lupa dengan Password?
        <span class="text-danger" style="border-bottom: 1px solid #DD3737;" @click="$emit('changeMode', 'forgetPassword')">Silahkan klik disini.</span>
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
      password: ''
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
