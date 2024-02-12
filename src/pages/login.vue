<script setup>
import { login } from "../services/authService"

const isPasswordVisible = ref(false)
const email = ref('apdefasta@gmail.com')
const password = ref('Computa123@')
const rememberMe = ref(false)

const loginAction = async () => {

  
  try{

    const fomData =  new FormData()

    fomData.append("email",email.value)
    fomData.append("password",password.value)

    const response = await login(fomData)

    console.log(response.data.data)
    localStorage.setItem("userData",JSON.stringify( response.data.data))

  } catch (error)
  {
    console.log(error)
  }
}
</script>

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
            src="../src/assets/img/login/login.svg"
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
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Email
                </div>
                <VTextField
                  v-model="email"
                  type="email"
                  :rules="[requiredValidator, emailValidator]"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Password
                </div>
                <VTextField
                  v-model="password"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4">
                  <VCheckbox
                    v-model="rememberMe"
                    label="Ingat Saya"
                  />
                  <a
                    class="text-primary ms-2 mb-1"
                    href="#"
                  >
                    <RouterLink
                      :to="{ name: 'forgotpassword' }"
                    >
                      Lupa Password?
                    </RouterLink>
                  </a>
                </div>

                <VBtn
                  block
                  class="text-none text-subtitle-1"
                  type="submit"
                  @click="loginAction"
                >
                  Login
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                cols="12"
                class="text-center"
              >
                <span style="font-weight: bold;">Belum memiliki akun?</span>
                <RouterLink
                  class="text-primary ms-2"
                  :to="{ name: 'register' }"
                >
                  <a
                    class="text-primary ms-2"
                    href="#"
                  >
                    Buat akun
                  </a>
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
