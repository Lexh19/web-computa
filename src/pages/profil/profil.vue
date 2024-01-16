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

   
              <RouterLink :to="{ name: 'company-profile-update-company-profile' }">
                <VBtn
                  variant="flat"
                  size="large"
                  prepend-icon="tabler:edit"
                  class="mx-auto mt-3"
                >
                  Edit Profil
                </VBtn>
              </RouterLink>
            </VCardItem>
          </VCol>


        
          <VDivider vertical />

          <!-- Right Column -->
          <VCol cols="9">
            <Vcarditem>
              <VCardSubtitle
                class="font-weight-bold"
              >
                DETAIL
              </VCardSubtitle>
              <VRow>
                <VCol
                  cols="6"
                  md="6"
                >
                  <VLabel>Nama</VLabel>
                  <VTextField
                    v-model="profilData.name"
                    variant="underlined"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="6"
                >
                  <VLabel>No.Pegawai</VLabel>
                  <VTextField
                    v-model="profilData.no_pegawai"
                    variant="underlined"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="6"
                >
                  <VLabel>Jabatan</VLabel>
                  <VTextField
                    v-model="profilData.job_title"
                    variant="underlined"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="6"
                >
                  <VLabel>Pangkat</VLabel>
                  <VTextField
                    v-model="profilData.job_grade"
                    variant="underlined"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="6"
                >
                  <VLabel>No.HP</VLabel>
                  <VTextField
                    v-model="profilData.no_hp"
                    variant="underlined"
                  />
                </VCol>

                <VCol
                  cols="6"
                  md="6"
                >
                  <VLabel>Email</VLabel>
                  <VTextField
                    v-model="profilData.email"
                    variant="underlined"
                  />
                </VCol>
              </VRow>
            </Vcarditem>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
  </VRow>
</template>

