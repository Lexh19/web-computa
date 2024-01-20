<template>
  <VRow>
    <VCol>
      <RouterLink to="profil">
        <VBtn
          variant="outlined"
        >
          <VIcon style="position: absolute; left: 50%; transform: translateX(-50%);">
            mdi-arrow-left
          </VIcon>
        </VBtn>
      </RouterLink>
      <VText style="margin-left: 10px;">
        Profil  /  <span class="font-weight-bold"> Ubah Password </span>
      </VText>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VCardItem>
          <VCardTitle class="mb-3">
            Ubah Password
          </VCardTitle>
       
          <form @submit.prevent="onSubmit">
            <VRow>
              <VCol cols="6">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Password Baru
                </div>
                <VTextField 
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

        
              <VCol cols="6">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Konfirmasi Password Baru
                </div>
                <VTextField 
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <VCardTitle class="mb-3">
                  Persyaratan Password :
                </VCardTitle>
                <p>&#8226; Panjang minimum 8 karakter - semakin banyak, semakin baik</p>
                <p> &#8226; Setidaknya satu karakter huruf kecil</p>
                <p> &#8226; Setidaknya satu angka, simbol, atau karakter spasi</p>
              </Vcol>
    
        
              <div class="pa-md-3">
                <VRow>
                  <VCol cols="6">
                    <VBtn
                      class="text-none"
                      color="primary"
                      variant="flat"
                      @click="updateAction"
                    >
                      Simpan
                    </VBtn>
                  </VCol>

                  <VCol cols="6">
                    <VBtn
                      class="text-none"
                      color="primary"
                      variant="outlined"
                    >
                      Batal
                    </VBtn>
                  </VCol>
                </VRow>
              </div>
            </VRow>
          </form>
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>
</template>
