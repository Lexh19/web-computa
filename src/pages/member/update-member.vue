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

    <VCol cols="12">
      <VCard>
        <Vcarditem>
          <VCardTitle>Data Anggota</VCardTitle>
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
                    variant="outlined"
                  >
                    Upload foto baru
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
            <VCardText>Uploud foto format jpg/png maks. 800kb</VCardText>
          </div>
        </div>

        
          
        <VDivider />

        <VCardItem class="pa-md-6 mx-lg-auto">
          <VRow>
            <VCol cols="6">
              <div class="text-subtitle-1 text-medium-emphasis">
                Nama
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
                No. HP
              </div>
              <VTextField />
            </VCol>
        

            <VCol cols="6">
              <div class="text-subtitle-1 text-medium-emphasis">
                Password
              </div>
              <VTextField />
            </VCol>

            <VCol cols="6">
              <div class="text-subtitle-1 text-medium-emphasis">
                No. Pegawai
              </div>
              <VTextField />
            </VCol>

            <VCol cols="6">
              <div class="text-subtitle-1 text-medium-emphasis">
                Pekerjaan
              </div>
              <VTextField />
            </VCol>

            <VCol cols="6">
              <div class="text-subtitle-1 text-medium-emphasis">
                Jabatan
              </div>
              <VTextField />
            </VCol>

            <div class="pa-md-3">
              <VRow>
                <VCol cols="6">
                  <VBtn
                    class="text-none"
                    color="primary"
                    variant="flat"
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
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>
</template>
