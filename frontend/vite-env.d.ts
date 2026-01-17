
/// <reference types="vite/client" />

declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/scrollbar';
declare module 'react-toastify/dist/ReactToastify.css';

/// <reference types="vite/client" />

interface CSSModule {
  [className: string]: string;
}

// Declaração específica para o Swiper e Toastify
declare module "swiper/css" {
  const content: CSSModule;
  export default content;
}

declare module "swiper/css/navigation" {
  const content: CSSModule;
  export default content;
}

declare module "swiper/css/pagination" {
  const content: CSSModule;
  export default content;
}

declare module "react-toastify/dist/ReactToastify.css" {
  const content: CSSModule;
  export default content;
}
