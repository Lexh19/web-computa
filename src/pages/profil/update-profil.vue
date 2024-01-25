<script setup>
import { updateprofil } from "../../services/update-profil"

const name = ref()
const no_hp = ref()
const email = ref()
const job_title = ref()
const job_grade = ref()
const no_pegawai = ref()


const updateAction = async () => {

  try{

    const fomData =  new FormData()

    fomData.append("nama ",name.value)
    fomData.append("no.hp",no_hp.value)
    fomData.append("email",email.value)
    fomData.append("alamat",job_title.value)
    fomData.append("email",job_grade.value)
    fomData.append("alamat",no_pegawai.value)

    const response = await updateprofil(fomData)

    console.log(response.data.data)
    
  } catch (error)
  {
    console.log(error)
  }
}
</script>

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
        Profil /<span class="font-weight-bold">  Update Profil</span>
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
            Data Anggota
          </VCardTitle>
        
          <div class="pa-4 d-flex align-center d-sm-flex">
            <VImg
              :max-width="100"
              src="../src/assets/img/company-profil/Avatar.svg"
            />
            <div class="d-flex flex-column align-start">
              <VRow class="ml-3 mt-2">
                <VCol
                  cols="8"
                  md="8"
                >
                  <VBtn        
                    variant="flat"
                    class="text-none flex-grow-1 "
                  >
                    Ganti foto profil   
                  </VBtn>
                </VCol>
                <VCol
                  cols="4"
                  md="4"
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
             
              <VCardText>Hanya dapat ganti foto dengan file format JPG, GIF atau PNG. Maks ukuran 800K</VCardText>
            </div>
          </div>
        </VCardItem>

        
        <VDivider />

        <VCardText>
          <VFrom @submit.prevent="() => {}">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Nama 
                </div>
                <VTextField 
                  v-model="name"
                  :rules="[requiredValidator]"
                />
              </VCol>

        
              <VCol
                cols="12"
                md="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  No. Pegawai
                </div>
                <VTextField 
                  v-model="no_pegawai"
                  :rules="[requiredValidator]"
                />
              </VCol>

         
              <VCol
                cols="12"
                md="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Jabatan
                </div>
                <VTextField 
                  v-model="job_title"
                  :rules="[requiredValidator]"
                />
              </VCol>
        

              <VCol
                cols="12"
                md="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Pangkat
                </div>
                <VTextField 
                  v-model="job_grade"
                  :rules="[requiredValidator]"
                />
              </VCol>

              
              <VCol
                cols="12"
                md="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  No. HP
                </div>
                <VTextField 
                  v-model="no_hp"
                  :rules="[requiredValidator]"
                />
              </VCol>
        

              <VCol
                cols="12"
                md="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Email
                </div>
                <VTextField 
                  v-model="email"
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
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
