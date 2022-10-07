// https://v3.nuxtjs.org/api/configuration/nuxt.config
 
export default defineNuxtConfig({

 
components: {
    global: true,     
    dirs: ['~/components']
    },
    css:[
        '~/assets/css/reset.css',
        '~/assets/css/_grids.scss',
        '~/assets/css/_colors.scss',
        '~/assets/css/_tools.scss',
        '~/assets/css/_paragraph.scss',
        '~/assets/css/_button.scss',
        '~/assets/css/_screen.scss'
    ],


  //  vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData:  '@/assets/screen.scss'
  //       }
  //     }
  //   }
  // }
})
