
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
            src="../src/assets/img/login/resetpassword.svg"
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
            Reset Password 🔒
          </h5>
          <p class="mb-0">
            Untuk Contoh@contoh.com
          </p>
        </VCardText>
        
        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Password Baru
                </div>
                <VTextField
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

             
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Konfirmasi Password Baru
                </div>
                <VTextField
                  
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <VCardItem>
                  <VCardTitle class="mb-5">
                    Persyaratan Password :
                  </VCardTitle>
                  <p>&#8226; Panjang minimum 8 karakter - semakin banyak, semakin baik</p>
                  <p> &#8226; Setidaknya satu karakter huruf kecil</p>
                  <p> &#8226; Setidaknya satu angka, simbol, atau karakter spasi</p>
                </VCardItem>

                <VBtn
                  block
                  class="text-none text-subtitle-1"
                  type="submit"
                >
                  Simpan Password Baru
                </VBtn>
              </VCol>

              <VRow class="text-center">
                <VCol
                  cols="12"
                  class="d-flex align-center justify-center"
                >
                  <RouterLink
                    class="text-primary ms-2"
                    :to="{ name: 'login' }"
                  >
                    <span class="d-flex align-items-center">
                      <VImg
                        class="ms-2"
                        :max-width="20"
                        src="../src/assets/img/compenents/arrow-left.svg"
                      />
                      <span class="ms-2">Kembali ke Halaman Masuk</span>
                    </span>
                  </RouterLink>
                </VCol>
              </VRow>
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
