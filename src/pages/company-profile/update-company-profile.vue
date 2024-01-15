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

    <VCol cols="12">
      <VCard>
        <VCol cols="12">
          <Vcarditem>
            <VCardTitle>Detail Profil Perusahaan</VCardTitle>
          </Vcarditem>
          <div class="pa-4 d-flex align-center">
            <VImg
              :max-width="100"
              src="../src/assets/img/company-profil/Avatar.svg"
            />
            <div class="d-flex flex-column align-start">
              <VCardItem>
                <VRow>
                  <VCol cols="6">
                    <VBtn
                      class="text-none"
                      color="primary"
                    >
                      Ganti foto
                    </VBtn>
                  </VCol>
                  <VCol cols="6">
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

        
          
          <VDivider />

          <VCardActions class="pa-md-6 mx-lg-auto">
            <VRow>
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Nama Perusahaan
                </div>
                <VTextField />
              </VCol>

        
              <VCol cols="6">
                <div class="text-subtitle-1 text-medium-emphasis">
                  No. HP
                </div>
                <VTextField />
              </VCol>

         
              <VCol cols="6">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Email
                </div>
                <VTextField />
              </VCol>
        

              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  Alamat
                </div>
                <VTextField />
              </VCol>
            </VRow>
          </VCardActions>
        </vcol>
      </VCard>
    </VCol>
  </VRow>
</template>
