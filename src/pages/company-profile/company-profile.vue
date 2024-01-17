<script>
import { watchEffect } from "vue"
import { getprofilinstances } from "../../services/profil-instances"

export default {

  setup() {
    const instancesData = ref([])

    const loadpageData = async () => {
      try {
        const response = await getprofilinstances()

        instancesData.value = response.data.data
      }
      catch (error) {
        console.log(error)
      }
    }

    watchEffect(async () => {
      await loadpageData()
    })
    
    return {
      instancesData,
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
                :src="instancesData.logo"
                class="mx-auto"
              />
      
              <VCardTitle class="text-center mt-3">
                {{ instancesData.name }}
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
            <VCardItem>
              <VCardSubtitle
                class="font-weight-bold text-left mb-4"
              >
                DETAIL
              </VCardSubtitle>
              <VRow>
                <VCol
                  cols="12"
                  md="12"
                >
                  <VCardTitle>Nama</VCardTitle>
                  <VTextField
                    v-model="instancesData.name"
                    variant="underlined"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VCardTitle>Email</VCardTitle>
                  <VTextField
                    v-model="instancesData.email"
                    variant="underlined"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VCardTitle>Phone</VCardTitle>
                  <VTextField
                    v-model="instancesData.phone"
                    variant="underlined"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="12"
                >
                  <VCardTitle>Alamat</VCardTitle>
                  <VTextField
                    v-model="instancesData.address"
                    variant="underlined"
                  />
                </VCol>
              </VRow>
            </VCardItem>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
  </VRow>
</template>

