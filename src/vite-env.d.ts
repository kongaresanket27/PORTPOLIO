/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_EMAILJS_SERVICE_ID?: string;
  readonly REACT_APP_EMAILJS_TEMPLATE_ID?: string;
  readonly REACT_APP_EMAILJS_MAIN_TEMPLATE_ID?: string;
  readonly REACT_APP_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_MAIN_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
