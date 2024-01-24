<script setup>
import { updateinstances } from "../../services/update-instances"

const name = ref()
const phone = ref()
const email = ref()
const address = ref()
const fomData = new FormData() 

const updateAction = async () => {
  try {
    fomData.append('name', name.value)
    fomData.append('phone', phone.value)
    fomData.append('email', email.value)
    fomData.append('address', address.value)
    
    const response = await updateinstances(fomData)

    console.log(response.data.data)
    localStorage.setItem("userData", JSON.stringify(response.data.data))
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <VRow>
    <VCol>
      <RouterLink to="company-profile">
        <VBtn
          variant="outlined"
        >
          <VIcon style="position: absolute; left: 50%; transform: translateX(-50%);">
            mdi-arrow-left
          </VIcon>
        </VBtn>
      </RouterLink>
      <VText style="margin-left: 10px;">
        Profil Perusahaan / <span class="font-weight-bold">  Update Profil  Perusahaan</span>
      </VText>
    </VCol>

    <VCol
      cols="12"
      md="12"
      lg="12"
    >
      <VCard>
        <VCardItem class="pa-md-3">
          <VCardTitle class="ml-3">
            Detail Profil Perusahaan
          </VCardTitle>
          <div class="pa-4 d-flex align-center d-sm-flex">
            <VImg
              :max-width="100"
              src="../src/assets/img/company-profil/Avatar.svg"
            />
            <div class="d-flex flex-column align-start">
              <VCardItem>
                <VRow>
                  <VCol
                    cols="6"
                    md="6"
                  >
                    <VBtn
                      class="text-none"
                      color="primary"
                    >
                      Ganti foto
                    </VBtn>
                  </VCol>
                  <VCol
                    cols="6"
                    md="6"
                  >
                    <VBtn
                      class="text-none"
                      color="secondary"
                      variant="flat"
                    >
                      Reset
                    </VBtn>
                  </VCol>
                </VRow>
              </VCardItem>
              <VCardText>Hanya dapat ganti foto dengan file format JPG, GIF atau PNG. Maks ukuran 800K</VCardText>
            </div>
          </div>
        </VCardItem>

        
        <VDivider />

        <VCardItem>
          <VFrom @submit.prevent="submitForm">
            <VRow>
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Nama Perusahaan
                </div>
                <VTextField 
                  v-model="name"
                  :rules="[requiredValidator]"
                />
              </VCol>

        
              <VCol
                cols="12"
                sm="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  No. HP
                </div>
                <VTextField 
                  v-model="phone"
                  :rules="[requiredValidator]"
                />
              </VCol>

         
              <VCol
                cols="12"
                sm="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Email
                </div>
                <VTextField 
                  v-model="email"
                  :rules="[requiredValidator]"
                />
              </VCol>
        

              <VCol
                cols="12"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Alamat
                </div>
                <VTextField 
                  v-model="address"
                  :rules="[requiredValidator]"
                />
              </VCol>
              <VCardActions class="mt-2">
                <VRow>
                  <VCol
                    cols="6"
                    sm="6"
                  >
                    <VBtn
                      class="text-none"
                      color="primary"
                      variant="flat"
                      @click="updateAction"
                    >
                      Simpan
                    </VBtn>
                  </VCol>

                  <VCol
                    cols="6"
                    sm="6"
                  >
                    <VBtn
                      class="text-none"
                      color="primary"
                      variant="outlined"
                    >
                      Reset
                    </VBtn>
                  </VCol>
                </VRow>
              </VCardActions>
            </VRow>
          </VFrom>
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>
</template>
