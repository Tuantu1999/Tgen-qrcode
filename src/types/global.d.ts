import rules from "@/plugins/rules";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $rules: typeof rules;
  }
}
