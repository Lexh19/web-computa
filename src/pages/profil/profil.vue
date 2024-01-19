<script>
import { watchEffect } from "vue"
import { getprofil } from "../../services/profil"

export default {

  setup() {
    const profilData = ref([])

    const loadpageData = async () => {
      try {
        const response = await getprofil()

        profilData.value = response.data.data
        console.log("profil", profilData.value)
      }
      catch (error) {
        console.log(error)
      }
    }

    watchEffect(async () => {
      await loadpageData()
    })
    
    return {
      profilData,
    }
  },
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard style="padding: 40px;">
        <VRow>
          <!-- Left Column -->
          <VCol cols="3">
            <VCardItem class="text-center">
              <VImg
                :max-width="100"
                :src="profilData.avatar"
                class="mx-auto"
              />
      
              <VCardTitle class="text-center mt-3">
                {{ profilData.name }}
              </VCardTitle>

   
              <RouterLink :to="{ name: 'profil-update-profil' }">
                <VBtn
                  
                  variant="flat"
                  size="large"
                  prepend-icon="tabler:edit"
                  class="mx-auto mt-3 text-none"
                >
                  Edit Profil
                </VBtn>
              </RouterLink>
            </VCardItem>
          </VCol>
        
          <VDivider vertical />

          <!-- Right Column -->
          <VCol cols="9">
            <VCardItem>
              <VCardSubtitle
                class="font-weight-bold text-left mb-6"
              >
                DETAIL
              </VCardSubtitle>
          
              <VRow>
                <VCol
                  cols="6"
                  md="6"
                >
                  <VCardTitle>Nama</VCardTitle>
                  <VTextField
                    v-model="profilData.name"
                    variant="underlined"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="6"
                >
                  <VCardTitle>No.Pegawai</VCardTitle>
                  <VTextField
                    v-model="profilData.no_pegawai"
                    variant="underlined"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="6"
                >
                  <VCardTitle>Jabatan</VCardTitle>
                  <VTextField
                    v-model="profilData.job_title"
                    variant="underlined"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="6"
                >
                  <VCardTitle>Pangkat</VCardTitle>
                  <VTextField
                    v-model="profilData.job_grade"
                    variant="underlined"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="6"
                >
                  <VCardTitle>No.HP</VCardTitle>
                  <VTextField
                    v-model="profilData.no_hp"
                    variant="underlined"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="6"
                >
                  <VCardTitle>Email</VCardTitle>
                  <VTextField
                    v-model="profilData.email"
                    variant="underlined"
                  />
                </VCol>
              </VRow>
            </VCardItem>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard>
        <VCardItem>
          <VCardText>
            <VCardTitle>Ubah Password</VCardTitle>
          </VCardText>

          <RouterLink :to="{ name: 'profil-change-password' }">
            <VBtn 
              class="text-none"
              color="warning"
            >
              Ubah Password
            </VBtn>
          </RouterLink>
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>
</template>

