/// <reference types="vite/client" />

declare module '*.css' {
  const css: string;
  export default css;
}

declare module 'swiper/css' {
  const css: string;
  export default css;
}

declare module 'swiper/css/*' {
  const css: string;
  export default css;
}
