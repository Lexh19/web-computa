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
            src="../src/assets/img/registrasi/sign-up.svg"
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
            Selamat Datang di Sistem Presensi Compute! 👋
          </h5>
          <p class="mb-0">
            Silahkan masukkan email dan password anda untuk memulai menggunakan sistem
          </p>
        </VCardText>
        <VCardText>
          <VForm>
            <VRow>
              <!-- full name -->
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Nama Lengkap<span class="text-danger">*</span>
                </div>
                <VTextField
                  v-model="fullName"
                  required
                />
              </VCol>

             
              <!-- email -->
              <VCol cols="6">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Email<span class="text-danger">*</span>
                </div>
                <VTextField
                  v-model="email"
                  required
                />
              </VCol>

              <!-- phone number -->
              <VCol cols="6">
                <div class="text-subtitle-1 text-medium-emphasis">
                  No. HP<span class="text-danger">*</span>
                </div>
                <VTextField
                  v-model="phoneNumber"
                  required
                />
              </VCol>

              <!-- employee no -->
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  No. Pegawai<span class="text-danger">*</span>
                </div>
                <VTextField
                  v-model="employeeNo"
                  required
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Password<span class="text-danger">*</span>
                </div>
                <VTextField
                  v-model="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  required
                />
              </VCol>

              <!-- confirm password -->
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Konfirmasi Password<span class="text-danger">*</span>
                </div>
                <VTextField
                  v-model="confirmPassword"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  required
                />
                
                <br>
                <VBtn
                  block
                  class="text-none text-subtitle-1"
                  type="submit"
                >
                  Buat Akun
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                cols="12"
                class="text-center"
              >
                <span style="font-weight: bold;">Sudah memiliki akun?</span>
                <RouterLink
                  class="text-primary ms-2"
                  :to="{ name: 'login' }"
                >
                  <a
                    class="text-primary ms-2"
                    href="#"
                  >
                    Buat Akun
                  </a>
                </RouterLink>
              </VCol>
            </vrow>
          </vform>
        </vcardtext>
      </vcard>
    </vcol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";

.text-danger {
  color: red;
}
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
