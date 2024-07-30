/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly VITE_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
