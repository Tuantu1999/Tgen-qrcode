import { reactive } from "vue";

type SnackbarType = "success" | "error" | "info" | "warning";

interface SnackbarState {
  show: boolean;
  message: string;
  color: SnackbarType;
  timeout: number;
}

const state = reactive<SnackbarState>({
  show: false,
  message: "",
  color: "success",
  timeout: 3000,
});

export const snackbar = {
  state,

  show(message: string, color: SnackbarType = "success", timeout = 3000) {
    state.message = message;
    state.color = color;
    state.timeout = timeout;
    state.show = true;
  },

  success(message: string, timeout = 3000) {
    this.show(message, "success", timeout);
  },

  error(message: string, timeout = 3000) {
    this.show(message, "error", timeout);
  },

  info(message: string, timeout = 3000) {
    this.show(message, "info", timeout);
  },

  warning(message: string, timeout = 3000) {
    this.show(message, "warning", timeout);
  },
};
