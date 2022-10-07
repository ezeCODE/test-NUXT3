<template>
  <div class="">
    <h1 class="attetion-paragraph font-roboto color-blue-soft">
      page router test {{ $route.params.id }}
    </h1>
    <p class="paragraph-small">dinamic router data and files tree</p>

    <div class=""></div>
  </div>
</template>
<script setup lang="js">

export default {


  setup(){

  let test = ref(3)



  return { test }



  }



}
</script>
