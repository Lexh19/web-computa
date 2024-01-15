<template>
  <VRow
    no-gutters
    class="auth-wrapper"
  >
    <VCol
      lg="6"
      class="d-none d-lg-flex"
    >
      <div class="position-relative auth-bg rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg
            :max-width="600"
            src="../src/assets/img/login/authentication-1.svg"
            class="auth-illustration mt-16 mb-2"
          />
        </div>
      </div>
    </VCol>
    <VCol
      cols="12"
      lg="6"
      class="d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="736"
        class="mt-12 mt-sm-0 pa-16"
      >
        <VImg 
          :max-width="247.87"
          src="../src/assets/img/login/image1.svg"
        />
        <VCardText>
          <h5 class="text-h5 font-weight-semibold mb-1">
            Two-Step Verification 📧
          </h5>
          <p class="mb-0">
            Kami mengirimkan kode verifikasi ke ponsel Anda. Masukkan kode dari email di kolom di bawah ini.
          </p>
        </VCardText>
        <VCardText>
          <VForm>
            <VRow>
              <VCol cols="12">
                <VTextField>
                  <VOtpInput
                    v-model="otpValue"
                    :length="7"
                    :mask="['1', '1', '1', '1', '1', '1', '1']"
                  />
                </VTextField>
                <br>
                <VBtn
                  block
                  class="text-none text-subtitle-1"
                  type="submit"
                >
                  Verivikasi
                </VBtn>
              </VCol>

              <VCol
                cols="12"
                class="text-center"
              >
                <span style="font-weight: bold;">Tidak mendapatkan kode ?</span>
                <RouterLink
                  class="text-primary ms-2"
                  :to="{ name: 'register' }"
                >
                  <a
                    class="text-primary ms-2"
                    href="#"
                  >
                    Kirim Ulang
                  </a>
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </vcol>
  </VRow>
</template>



<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";

</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
