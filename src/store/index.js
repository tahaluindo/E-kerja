import Vue from 'vue'
import Vuex from 'vuex'
import cryptoJS from 'crypto-js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BASE_URL: 'http://localhost:8000/api/',
    CryptoJSAesJson: {
      stringify: function (cipherParams) {
        var j = { ct: cipherParams.ciphertext.toString(cryptoJS.enc.Base64) }
        if (cipherParams.iv) j.iv = cipherParams.iv.toString()
        if (cipherParams.salt) j.s = cipherParams.salt.toString()
        return JSON.stringify(j)
      },
      parse: function (jsonStr) {
        var j = JSON.parse(jsonStr)
        var cipherParams = cryptoJS.lib.CipherParams.create({ ciphertext: cryptoJS.enc.Base64.parse(j.ct) })
        if (j.iv) cipherParams.iv = cryptoJS.enc.Hex.parse(j.iv)
        if (j.s) cipherParams.salt = cryptoJS.enc.Hex.parse(j.s)
        return cipherParams
      }
    },
    cryptoEncrypt (plaintext, password) {
      return cryptoJS.AES.encrypt(JSON.stringify(plaintext), password, { format: this.CryptoJSAesJson }).toString()
    },
    cryptoDecrypt (ecryptedText, password) {
      return JSON.parse(JSON.parse(cryptoJS.AES.decrypt(ecryptedText, password, { format: this.CryptoJSAesJson }).toString(cryptoJS.enc.Utf8)))
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
