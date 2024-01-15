<script setup>
import { ref } from "vue"
import { getdetail } from "../../services/detailpresenceServis"

const detailData = ref([])

const loadpageData = async () =>{
  try{
    const response = await getdetail()

    detailData.value = response.data.data.data
    console.log('Index Response:', detailData.value)

  } catch (error)
  {
    console.log(error)
  }
}

watchEffect(async () => {
  await loadpageData()

})
</script>

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
        Presensi / <span class="font-weight-bold">Detail Presensi</span>
      </VText>
    </VCol>
    <VRow>
      <VCol cols="5">
        <VCard>
          <VCardTitle>Scan Kode QR</VCardTitle>
          <VImg src="../../assets/img/detailed_presence/qrcode_teknoreka1.svg" />
          <VCardItem>
            <VBtn 
              class="text-none  "
              color="secondary"
              width="370"
              height="48"
              size="large"
            >
              KODE : 1003207
            </VBtn>
          </VCardItem>
        </VCard>
      </VCol>
    
      <VCol cols="7">
        <VCard>
          <VCardTitle>Event 1</VCardTitle>

          <VCardItem>
            <VCard color="secondary">
              <VCardTitle>catatan</VCardTitle>
              <div class="text mb-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </div>
            </VCard>
          </VCardItem>
          <VCardText>Jam Masuk 07:00 WIB</VCardText>
          <VCardText>Jam Keluar 09:00 WIB</VCardText>
          <VCardItem><VDivider /></VCardItem>
          <VCardText>Berikut adalah list yang telah absensi</VCardText>
        </VCard>
      </VCol>
    </VRow>

    <VRow>
      <VCol cols="5">
        <VCard>
          <VCardItem>
            <Vcol cols="12">
              <VBtn 
                class="text-none  "
                color="warning"
                width="370"
                height="48"
                size="large"
                prepend-icon="tabler-x"
              >
                Akhiri Presensi
              </VBtn>
            </Vcol>
          </VCardItem>
        </VCard>
      </VCol>
    

      <VCol cols="7">
        <VCard>
          <VCardTitle>List Presensi</VCardTitle>
          <VDivider />
          <VCol
            cols="12"
          >
            <VCard>
              <VTextField
                density="compact"
                variant="solo"
                label="Search"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
              />
            </VCard>
          </VCol>

     
          <VRow>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>nama</VCardText>
            </VCol>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>jam Masuk</VCardText>
            </VCol>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>Jam keluar</VCardText>
            </VCol>
          </VRow>
          <VDivider />

          <VRow>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>Nama 1</VCardText>
            </VCol>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>10, July 2021 20:07</VCardText>
            </VCol>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>10, July 2021 20:07</VCardText>
            </VCol>
          </VRow>
          <VDivider />
          <VRow>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>Nama 1</VCardText>
            </VCol>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>10, July 2021 20:07</VCardText>
            </VCol>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>10, July 2021 20:07</VCardText>
            </VCol>
          </VRow>
          <VDivider />
          <VRow>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>Nama 1</VCardText>
            </VCol>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>10, July 2021 20:07</VCardText>
            </VCol>
            <VCol
              cols="12"
              md="4"
            >
              <VCardText>10, July 2021 20:07</VCardText>
            </VCol>
          </VRow>
          <VDivider />
        </VCard>
      </VCol>
    </VRow>
  </vrow>
</template>


