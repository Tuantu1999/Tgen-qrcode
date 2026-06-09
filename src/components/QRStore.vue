<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { NameUrl } from "@/plugins/NameUrl";

const router = useRouter();
const listItems = ref<NameUrl[]>();
const headers: any = ref([
  { title: "Name", key: "name", align: "start" },
  { title: "Url", key: "url", align: "start" },
  { title: "QR data images", key: "qrDataUrl", align: "start" },
]);

const fetchListUrl = () => {
  listItems.value = JSON.parse(localStorage.getItem("qrCodes") || "[]") || [];
};

fetchListUrl();

const back = () => {
  router.push("/");
};
</script>
<template>
  <v-container>
    <v-card>
      <v-data-table :headers="headers" :items="listItems" disable-sort>
        <template #item.qrDataUrl="{ item }">
          <v-img
            :src="item.qrDataUrl"
            :width="100"
            aspect-ratio="16/9"
            cover
          ></v-img>
        </template>
      </v-data-table>
      <v-card-actions>
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn color="primary" @click="back">
              Back to QR generate tool
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
