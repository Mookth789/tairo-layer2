import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "empty"
declare module "/project/sandbox/node_modules/.pnpm/nuxt@3.6.5/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}