<script setup>
import { watchEffect } from "vue"
import { getlistmember } from "../../services/member-list"

const listmember = ref([])
const selectedItemsPerPage = ref(5)

const formattedListMember = computed(() => {
  const slicedData = listmember.value.slice(0, selectedItemsPerPage.value)

  return slicedData.map((data, index) => {
    const formattedIndex = (index + 1).toString().padStart(2, '0')

    return { ...data, formattedIndex }
  })
})

const loadpageData = async () =>{
  try{
    const response = await getlistmember()
    

    listmember.value = response.data.data.data
    console.log("listmember", listmember.value)
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
  <section>
    <VRow>
      <VCol
        ols="12"
        md="6"
        lg="12"
      >
        <VCard title="Daftar Anggota">
          <!-- 👉 Filters -->

          <VCardText class="d-flex flex-wrap py-4 gap-4">
            <div
              class="me-3"
              style="width: 80px;"
            >
              <VSelect
                v-model="selectedItemsPerPage"
                density="compact"
                variant="outlined"
                :items="[5, 10, 15, 25]"
              />
            </div>

            <VSpacer />

            <div class=" d-flex align-start flex-wrap gap-5">
              <!-- 👉 Search  -->
              <div style="width: 10rem;">
                <VTextField
                  placeholder="Pencarian...."
                  density="compact"
                />
              </div>


              <!-- 👉 Add user button -->
              <RouterLink :to="{ name: 'member-update-member' }">
                <VBtn
                  prepend-icon="tabler-plus"
                >
                  Tambah Anggota
                </VBtn>
              </RouterLink>
            </div>
          </VCardText>


          <!-- 👉 table head -->
          <VTable class="text-no-wrap pa-7">
            <thead>
              <tr>
                <th scope="col">
                  NO
                </th>
                <th scope="col">
                  NAMA ANGGOTA
                </th>
                <th scope="col">
                  NO.HP
                </th>
                <th scope="col">
                  EMAIL
                </th>
                <th scope="col">
                  PEKERJAAN
                </th>
                <th scope="col">
                  JABATAN
                </th>
                <th scope="col">
                  AKSI
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody
              v-for="(data, index) in formattedListMember"
              :key="data.id"
            >
              <tr
                style="height: 3.75rem;"
              >
                <!-- 👉 Nomer -->
                <td>
                  <div class="d-flex align-center">
                    <div class="d-flex flex-column">
                      <h1
                        class="text-base"
                        :style="{ color: 'rgba(39, 113, 216, 1)' }"
                      >
                        {{ data.formattedIndex }}
                      </h1>
                    </div>
                  </div>
                </td>

                <!-- 👉 Nama Anggota -->
                <td>
                  <div class="d-flex align-center">
                    <VAvatar
                      variant="tonal"
                      class="me-3"
                      size="38"
                    >
                      <VImg :src="data.avatar" />
                    </VAvatar>

                    <div class="d-flex flex-column">
                      <span>{{ data.name }}</span>
                    </div>
                  </div>
                </td>

                <!-- 👉 No.hp -->
                <td>
                  <span class="text-capitalize text-base">{{ data.no_hp }} </span>
                </td>

                <!-- 👉 Email -->
                <td>
                  <span class="text-base">{{ data.email }}</span>
                </td>

                <!-- 👉 Pekerjaan -->
                <td><span class="text-capitalize text-base">{{ data.job_title }} </span></td>

                <!-- 👉 Jabatan  -->
                <td><span class="text-capitalize text-base">{{ data.job_grade }} </span></td>

                <!-- 👉 Aksi  -->
                <td
                  class="text-center"
                  style="width: 5rem;"
                >
                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-edit"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                  >
                    <VIcon
                      color="warning"
                      size="22"
                      icon="tabler-trash"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                  />
                </td>
              </tr>
            </tbody>
            <!-- 👉 table footer  -->
            <tfoot>
              <tr>
                <td
                  colspan="7"
                  class="text-center"
                >
                  No data available
                </td>
              </tr>
            </tfoot>
          </VTable>
          

          <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
            <span class="text-sm text-disabled" />

            <VPagination
            
              size="small"
              :total-visible="5"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- 👉 Add New User -->
    <AddNewUserDrawer />
  </section>
</template>

<style lang="scss">
.text-no-wrap {
  border-collapse: separate;
  inline-size: 100%;
}

.text-no-wrap th,
.text-no-wrap td {
  border-block-end: 1px solid #ddd; /* Border at the bottom */
  border-block-start: 1px solid #ddd; /* Border only at the top */
  text-align: start;
}

.text-no-wrap th:first-child,
.text-no-wrap td:first-child {
  border-inline-start: 1px solid #ddd; /* Border only on the left for the first column */
}

.text-no-wrap th:last-child,
.text-no-wrap td:last-child {
  border-inline-end: 1px solid #ddd; /* Border only on the right for the last column */
}

.app-user-search-filter {
  inline-size: 31.6rem;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>
