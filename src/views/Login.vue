<template>
  <div class="container" id="login">
    <modal-status :message="modalStatus.message" :status="modalStatus.status" />
    <div class="row" style="min-height: calc(100vh - 80px)">
      <div class="col-md-6" id="illustration">
        <table style="width: 100%; height: 100%">
          <tr>
            <td>
              <illustration-login
                v-if="
                  (mode.current === 'login' && mode.prev === '') ||
                  (mode.current === 'loading' && mode.prev === 'login') ||
                  (mode.current === 'login' && mode.prev === 'forgetPassword')
                "
                style="max-width: 100%; max-height: 400px"
              />
              <illustration-forget-password
                v-else-if="
                  (mode.current === 'forgetPassword' &&
                    mode.prev === 'login') ||
                  (mode.current === 'loading' && mode.prev === 'forgetPassword')
                "
                style="max-width: 100%; max-height: 400px"
              />
            </td>
          </tr>
        </table>
      </div>
      <div class="col-xs-12 col-md-6">
        <div style="height: 40px; position: relative; overflow: hidden">
          <logo style="max-height: 40px; width: 104px" />
        </div>
        <div style="height: 60px"></div>
        <h4 class="font-semibold">Selamat Datang di</h4>
        <h3 class="font-bold">Aplikasi Kepegawaian Situbondo</h3>
        <div id="wrapperLoginForgotPassword">
          <form-login
            v-if="mode.current === 'login'"
            :descriptionText="login.descriptionText"
            :buttonText="login.buttonText"
            @login="doAction"
            @changeMode="doChangeMode"
          />
          <div
            v-else-if="mode.current === 'loading'"
            id="loading"
            style="min-height: 360px; position: relative"
          >
            <div
              style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              "
            >
              <div
                style="
                  height: 120px;
                  width: 120px;
                  border: 4px solid #004d40;
                  border-radius: 100%;
                  box-sizing: border-box;
                  position: relative;
                  overflow: hidden;
                "
              >
                <loading
                  style="
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    max-height: 40px;
                    max-width: 110px;
                    block-size: fit-content;
                  "
                  class="img-responsive center-block d-block"
                />
              </div>
            </div>
          </div>
          <form-forget-password
            v-else-if="mode.current === 'forgetPassword'"
            :descriptionText="forgetPassword.descriptionText"
            :buttonText="forgetPassword.buttonText"
            @forgetPassword="doAction"
            @changeMode="doChangeMode"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  padding-top: 40px;
}
h3,
h4 {
  margin: 0;
}
.logo {
  max-height: 60%;
}
#illustration {
  display: none;
}
@media screen and (min-width: 768px) {
  #illustration {
    display: initial;
  }
}
</style>

<script>
import * as $ from 'jquery'
import axios from 'axios'
import FormLogin from '../components/FormLogin.vue'
import FormForgetPassword from '../components/FormForgetPassword.vue'
import Loading from '../components/Loading.vue'
import Logo from '../components/svg/Logo.vue'
import IllustrationLogin from '../components/svg/IllustrationLogin.vue'
import IllustrationForgetPassword from '../components/svg/IllustrationForgetPassword.vue'
import ModalStatus from '../components/modals/ModalStatus.vue'
export default {
  components: { FormLogin, FormForgetPassword, Loading, Logo, IllustrationLogin, IllustrationForgetPassword, ModalStatus },
  data () {
    return {
      modalStatus: {
        message: '',
        status: -1
      },
      mode: {
        prev: '',
        current: 'login', // 'login' or 'forgetPassword'
        next: ''
      },
      login: {
        descriptionText: 'Silahkan Login dengan memasukkan username dan password yang telah dimiliki.',
        buttonText: 'Masuk'
      },
      forgetPassword: {
        descriptionText: 'Fitur Lupa Password, silahkan gunakan fitur ini dengan bijak.',
        buttonText: 'Reset Password'
      }
    }
  },
  methods: {
    doChangeMode (val) {
      this.mode.prev = this.mode.current
      this.mode.current = 'loading'
      setTimeout(() => {
        this.mode.current = val
      }, 1000)
    },
    doAction (val) {
      if (this.mode.current === 'login') {
        this.doLogin(val)
      } else {
        this.doForgetPassword(val)
      }
    },
    doLogin (login) {
      console.log(login)
      // ---------------
      // const text = `{"username":"${login.username}","password":"${login.password}"}`
      // const password = 'bkpsdmkabupatensitubondo'
      // const encrypted = this.$store.state.cryptoEncrypt(text, password)
      // axios({
      //   method: 'post',
      //   url: 'login',
      //   data: {
      //     message: encrypted
      //   }
      // }).then(res => {
      //   const callback = this.$store.state.cryptoDecrypt(res.data.callback, password)
      //   if (callback.status === 0) return
      //   localStorage.token = callback.message
      //   this.$router.replace('/pegawai')
      // }).catch(err => {
      //   console.log(err)
      //   var statusCode = err.response.status
      //   if (statusCode >= 400 && statusCode < 500) {
      //     console.log(err.response.data.message)
      //   } else if (statusCode >= 500 && statusCode < 600) {
      //     console.log('Terjadi kesalahan pada server, silahkan coba lagi nanti')
      //   }
      // })
    },
    doForgetPassword (forgetPassword) {
      const text = JSON.stringify(forgetPassword)
      const password = 'bkpsdmkabupatensitubondo'
      const encrypted = this.$store.state.cryptoEncrypt(text, password)
      axios({
        method: 'post',
        url: 'forgetPassword',
        data: {
          message: encrypted
        }
      }).then(res => {
        const result = this.$store.state.cryptoDecrypt(res.data.callback, password)
        this.modalStatus.message = result.message
        this.modalStatus.status = result.status
        $('#modalStatus').modal('toggle')
      })
    },
    doCreateAccount () {
      // ---------------
      const text = JSON.stringify(
        {
          username: this.login.username,
          password: this.login.password
        }
      )
      const password = 'bkpsdmkabupatensitubondo'
      const encrypted = this.$store.state.cryptoEncrypt(text, password)
      axios({
        method: 'post',
        url: 'create',
        data: {
          message: encrypted
        }
      }).then(res => {
        const callback = this.$store.state.cryptoDecrypt(res.data.callback, password)
        if (callback.status === 1) console.log('bener')
      }).catch(err => {
        var statusCode = err.response.status
        if (statusCode >= 400 && statusCode < 500) {
          console.log(err.response.data.message)
        } else if (statusCode >= 500 && statusCode < 600) {
          console.log('Terjadi kesalahan pada server, silahkan coba lagi nanti')
        }
      })
    }
  }
}
</script>
