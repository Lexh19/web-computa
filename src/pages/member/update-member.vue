<template>
  <VRow>
    <VCol>
      <RouterLink to="member">
        <VBtn
          variant="outlined"
        >
          <VIcon style="position: absolute; left: 50%; transform: translateX(-50%);">
            mdi-arrow-left
          </VIcon>
        </VBtn>
      </RouterLink>
      <VText style="margin-left: 10px;">
        Daftar Anggota / <span class="font-weight-bold"> Tambah Data Anggota</span>
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
       
          <div class="pa-4 d-flex align-center">
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
                    block
                    class="text-none"
                    color="primary"
                    variant="outlined"
                  >
                    Upload foto baru    
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
            
              <VCardText>Uploud foto format jpg/png maks. 800kb</VCardText>
            </div>
          </div>
        </VCardItem>
        
          
        <VDivider />

        <VCardItem>
          <VFrom @submit.prevent="submitForm">
            <VRow>
              <VCol
                cols="12"
                sm="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Nama
                </div>
                <VTextField />
              </VCol>

        
              <VCol
                cols="12"
                sm="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Email
                </div>
                <VTextField />
              </VCol>

         
              <VCol cols="12">
                <div class="text-subtitle-1 text-medium-emphasis">
                  No. HP
                </div>
                <VTextField />
              </VCol>
        

              <VCol
                cols="12"
                sm="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Password
                </div>
                <VTextField />
              </VCol>

              <VCol
                cols="12"
                sm="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  No. Pegawai
                </div>
                <VTextField />
              </VCol>

              <VCol
                cols="12"
                sm="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Pekerjaan
                </div>
                <VTextField />
              </VCol>

              <VCol
                cols="12"
                sm="6"
              >
                <div class="text-subtitle-1 text-medium-emphasis">
                  Jabatan
                </div>
                <VTextField />
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
