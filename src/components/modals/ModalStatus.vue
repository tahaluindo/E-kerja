<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modalStatus"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalStatusLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content" style="background-color: #F4FAF3;">
        <div class="modal-body">
          <div style="height: 40px"></div>
          <illustration-success v-if="status === 1"
            style="max-width: 100%; max-height: 200px;"
          />
          <illustration-failed v-else-if="status === 0"
            style="max-width: 100%; max-height: 200px;"
          />
          <div style="height: 20px"></div>
          <h4
            style="padding: 0; margin: 0" class="font-bold text-center"
            :class="status === 1 ? '' : 'text-danger'"
          >
            {{ status === 1 ? 'Selamat!' : 'Maaf.' }}
          </h4>
          <p style="font-size: 16px;" class="text-center font-medium" :class="status === 1 ? '' : 'text-danger'" v-html="message"></p>
          <div style="height: 10px"></div>
          <button class="btn-block font-semibold" :class="status === 1 ? 'btn btn-primary' : 'btn btn-danger'" data-dismiss="modal">
            {{ status === 1 ? 'Lanjutkan' : 'Coba lagi' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
</style>

<script>
import IllustrationFailed from '../svg/IllustrationFailed.vue'
import IllustrationSuccess from '../svg/IllustrationSuccess.vue'
export default {
  props: {
    status: Number,
    message: String
  },
  components: { IllustrationFailed, IllustrationSuccess }
}
</script>
