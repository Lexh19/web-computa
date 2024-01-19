<script setup>
import { watchEffect } from "vue"
import { getdate, getlist } from "../../services/presenceServis "

const indexData = ref([])
const dateData = ref({ months: [], years: [] })
const selectedMonth = ref(null)
const selectedYear = ref(null)

const getTimeFromDate = dateTimeString => {
  const date = new Date(dateTimeString)
  
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}



const loadpageData = async () =>{
  try{
    const params = {
      month : selectedMonth.value || "",
      year: selectedYear.value || "",
    }
    
    const response = await getlist(params)
    const response2 = await getdate()

    indexData.value = response.data.data.data
    console.log("indexdata:",indexData.value)

    dateData.value.months = response2.data.data.months 
    dateData.value.years = response2.data.data.years 
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
    <VCol
      cols="md-8"
    >
      <VCard>
        <div class="card-content">
          <VIcon 
            color="primary"
            icon="ph:list-checks-bold"
          />
          <VCardItem>
            <VCardTitle>
              Daftar presensi
            </VCardTitle>
            <VCardSubtitle>
              Berikut adalah list daftar presensi yang telah Tanggal
            </VCardSubtitle>
          </VCardItem>
        </div>
      </VCard>
    </VCol>


    <VCol cols="md-4">
      <VCard>
        <VRow>
          <VCol cols="4">
            <div class="image-container">
              <VImg
                :max-width="52.33" 
                src="../src/assets/img/presence/Group2.svg"
              />
            </div>
          </VCol>

          <VCol cols="8">
            <div class="content-btn">
              <VCardText class="white-text">
                Tambahkan presensi dengan klik tombol ini
              </VCardText>
              <RouterLink :to="{ name: 'presence-add-presence' }">
                <VBtn
                  class="btn btn-primary text-none mb-4"
                  color="white"
                  prepend-icon="material-symbols:add"
                >
                  Tambah Presensi
                </VBtn>
              </RouterLink>
            </div>
          </VCol>
        </VRow>
      </VCard>
    </VCol>

    <!-- Search and Date -->
    <div class="container">
      <VRow>
        <VCol
          cols="12"
          md="8"
        >
          <VCard>
            <VTextField
              density="compact"
              variant="solo"
              label="Cari nama event"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
            />
          </VCard>
        </VCol>

        <VCol
          cols="12"
          md="2"
        >
          <VSelect
            v-model="selectedMonth"
            item-title="name"
            item-value="code"
            :items="dateData.months"
            label="Bulan"
          />
        </VCol>

        <VCol
          cols="12"
          md="2"
        >
          <VSelect
            v-model="selectedYear"
            item-title="year"
            :items="dateData.years"
            label="Tahun"
          />
        </VCol>
      </VRow>
    </div>

    <!-- Presence Index -->
    <VCol
      v-for="data in indexData"
      :key="data.id"
      cols="12"
      md="3" 
    >
      <VCard>
        <VCardItem>
          <VCardTitle>{{ data.name }}</VCardTitle>
          <VCardSubtitle>Total Kehadiran : {{ data.attendances_count }}</VCardSubtitle>
        </VCardItem>

        <VCardText>
          Jam Masuk : <VLabel>
            {{ getTimeFromDate(data.start_at) }}
          </VLabel>
        </VCardText>
        <VCardText>Jam Keluar : <VLabel>{{ getTimeFromDate(data.end_at) }}</VLabel></VCardText>
        <VCardText>Tanggal: 24 Agustus 2023</VCardText>
        <VCardText style="color: #d51f27;">
          <span>Lihat detail</span>
          
          <a>
            <VIcon
              style="margin-left: 90;"
              color="warning"
              icon="mdi-arrow-right"
            />
          </a>
        </VCardText>

        <VDivider />
        
        <VCardItem>
          <VRow justify="center">
            <VCol cols="6">
              <VBtn
                class="text-none"
                prepend-icon="ph:trash"
                color="warning"
                variant="outlined"
                style=" width: 107.5px;"
              >
                Hapus
              </VBtn>
            </VCol>
            <VCol cols="6">
              <VBtn 
                class="text-none"
                prepend-icon="ph:note-pencil"
                variant="outlined"
                style=" width: 107.5px;"
              >
                Edit
              </VBtn>
            </VCol>
          </VRow>
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>
</template>




<style scoped>
.card-content {
  display: flex;
  align-items: center;
  padding: 25px;
}

.container {
  padding: 16px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 10%);
  inline-size: 100%;
  margin-inline-start: 10px;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-start: 10px;
}

.content-btn {
  align-items: center;
  background: linear-gradient(87.22deg, #2771d8 11.51%, #1f5aad 95.44%);
  text-align: center;
}

.white-text {
  color: white;
}
</style>
