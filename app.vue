<template>
  <div class="container padding-1-1">

      <bar/>
    <!-- <NuxtWelcome /> -->
    
    <NuxtPage/>

     <footerIndex />
  </div>
</template>
<script setup >
import  bar  from '~/components/header/bar.vue'
import  footerIndex  from '~/components/footer/footerIndex.vue'
   

 // const nuxtApp = useNuxtApp()

  // nuxtApp.hook('hola', () => {
  // /* your code goes here */
  // console.log("pluginsssss");

  // })

 </script>
 <style lang="css">
  
/* local css styles  */

.container {
width: 100%;
max-width: 2300px; margin: auto;
min-height: 5000px;
/* background: yellow; */
}

 </style>
 
