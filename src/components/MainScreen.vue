<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import QRCode from "qrcode";
import type { NameUrl } from "@/plugins/NameUrl.ts";
import { snackbar } from "@/plugins/snackbar.ts";
import Loading from "./Loading.vue";

const router = useRouter();
const isLoading = ref(false);
const form = ref();
const url = ref("");
const qrDataUrl = ref("");
const qrName = ref("");
const listCode = ref<NameUrl[]>([]);

const fetchListUrl = () => {
  listCode.value = JSON.parse(localStorage.getItem("qrCodes") || "[]") || [];
};

fetchListUrl();

const checkUrlAvailable = (url: string) => {
  if (!url) return true;
  const isExist = listCode.value.some((code) => code.url === url);
  return isExist;
};

const genQR = async (url: string) => {
  try {
    isLoading.value = true;
    const { valid } = await form.value.validate();
    const checkUrl = checkUrlAvailable(url);
    if (!valid) return;
    if (checkUrl) {
      snackbar.warning("Url đã tồn tại!");
      return;
    }
    qrDataUrl.value = await QRCode.toDataURL(url);

    localStorage.setItem(
      "qrCodes",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("qrCodes") || "[]") || []),
        { name: qrName.value, url: url, qrDataUrl: qrDataUrl.value },
      ]),
    );
    fetchListUrl();
  } catch (error) {
    console.error("Error generating QR code:", error);
  } finally {
    isLoading.value = false;
  }
};

const toStore = () => {
  router.push("/qr-store");
};

const download = () => {
  if (!qrDataUrl.value) return;
  const link = document.createElement("a");
  link.href = qrDataUrl.value;
  link.download = "qr-code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
<template>
  <Loading v-if="isLoading" />
  <v-container>
    <v-card class="mx-auto">
      <v-card-title cols="12">
        <h1 class="text-center">TGen QR Code</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="12">
              <label class="font-bold" for="name">QR name</label>
              <v-text-field
                placeholder="Enter QR name"
                variant="outlined"
                clearable
                autocomplete="off"
                :rules="[$rules.required, $rules.notHtml, $rules.notScripts]"
                v-model="qrName"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <label class="font-bold" for="link">Enter address</label>
              <v-text-field
                placeholder="Enter link for QR code"
                variant="outlined"
                clearable
                :rules="[
                  $rules.required,
                  $rules.url,
                  $rules.notHtml,
                  $rules.notScripts,
                ]"
                v-model="url"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn color="primary" @click="genQR(url)" class="mr-3">
                Generate QR Code
              </v-btn>
              <v-btn
                v-if="listCode.length > 0"
                color="primary"
                @click="toStore"
              >
                QR Store
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
    <v-row v-if="qrDataUrl">
      <v-col cols="12" class="d-flex justify-center mt-5">QR Code</v-col>
      <v-col cols="12" class="d-flex justify-center" v-if="qrDataUrl">
        <v-card class="">
          <v-img :src="qrDataUrl" width="200" />
        </v-card>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn color="primary" @click="download"> Download QR Code </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
