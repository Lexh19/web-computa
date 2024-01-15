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
            src="../src/assets/img/login/forgot-password.svg"
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
            Lupa Password? 🔒
          </h5>
          <p class="mb-0">
            Masukkan email Anda, dan kami akan mengirimkan petunjuk untuk mereset kata sandi Anda
          </p>
        </VCardText>
        <VCardText>
          <VForm>
            <VRow>
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Email
                </div>
                <VTextField />
                <br>
                <VBtn
                  block
                  class="text-none text-subtitle-1"
                  type="submit"
                >
                  Kirim Link Reset Password
                </VBtn>
              </VCol>

              <VCol
                cols="12"
              >
                <RouterLink
                  :to="{ name: 'login' }"
                >
                  <span class="d-flex align-items-center">
                    <VImg
                      class="mr-2"
                      :max-width="20"
                      src="../src/assets/img/compenents/arrow-left.svg"
                    />
                    Kembali ke Halaman Masuk
                  </span>
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
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
