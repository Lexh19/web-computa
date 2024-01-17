<template>
  <VRow>
    <VCol cols="12">
      <RouterLink to="presence">
        <VBtn
          variant="outlined"
        >
          <VIcon style="position: absolute; left: 50%; transform: translateX(-50%);">
            mdi-arrow-left
          </VIcon>
        </VBtn>
      </RouterLink>
     
      <VText style="margin-left: 10px;">
        Presensi / <span class="font-weight-bold"> Tambah Presensi </span>
      </VText>
    </VCol>
    
   
    <VCol cols="12">
      <VCard>
        <VCardItem>
          <VCardTitle>
            Data Presensi
          </VCardTitle>
        </VCardItem>
        <VDivider />

        
        <VCardActions class="pa-md-6 mx-lg-auto">
          <VRow>
            <VCol cols="12">
              <div class="text-subtitle-1 text-medium-emphasis">
                Nama Event
              </div>
              <VTextField />
            </VCol>

        
            <VCol cols="6">
              <div class="text-subtitle-1 text-medium-emphasis">
                Masukkan Jam Masuk
              </div>
              <VTextField />
            </VCol>

         
            <VCol cols="6">
              <div class="text-subtitle-1 text-medium-emphasis">
                Masukkan Jam Keluar
              </div>
              <VTextField />
            </VCol>
        

            <VCol cols="12">
              <div class="text-subtitle-1 text-medium-emphasis">
                Catatan
              </div>
              <VTextarea
                rows="4"
              />
            </VCol>
            
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
                    Reset
                  </VBtn>
                </VCol>
              </VRow>
            </div>
          </VRow>
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
</template>
