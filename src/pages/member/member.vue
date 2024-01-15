<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Daftar Anggota">
          <!-- 👉 Filters -->

          <VCardText class="d-flex flex-wrap py-4 gap-4">
            <div
              class="me-3"
              style="width: 80px;"
            >
              <VSelect
                density="compact"
                variant="outlined"
                :items="[10, 20, 30, 50]"
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

          <VDivider />
          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
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
            <tbody>
              <tr
                style="height: 3.75rem;"
              >
                <!-- 👉 Name -->
                <td>
                  <div class="d-flex align-center">
                    <div class="d-flex flex-column">
                      <h6 class="text-base" />
                    </div>
                  </div>
                </td>

                <!-- 👉 Nama Anggota -->
                <td>
                  <span class="text-capitalize text-base" />
                </td>

                <!-- 👉 No.hp -->
                <td />

                <!-- 👉 Email -->
                <td>
                  <span class="text-base" />
                </td>

                <!-- 👉 Pekerjaan -->
                <td />

                <!-- 👉 Jabatan  -->
                <td />

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

          <VDivider />

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
