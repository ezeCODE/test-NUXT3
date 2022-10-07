<template>
  <div>
    <h1 class="attetion-paragraph font-roboto color-blue-soft ">PAGE ONE1</h1>
    <p class="paragraph-small">random name</p>

    <div class="">
      <div class="grids grid-cols-x3 padding-2-1 items-center  justify-center ">
        <button class="button-defualt" 
        @click="subNums()">
          sub num
        </button>
        <h2 class="sub-title color-black font-roboto ">{{ age }}</h2>
        <button class="button-defualt" 
        @click="addnum()">+ add num</button>
      </div>
      {{ check }}
    </div>

    <profile :nameProfile="fullName" :ageProfile="age" :isTrue="msgAlert" />

    <div class="padding-2-0">
      <p class="paragraph-small">plugins</p>
      <ClientOnly>
        <h5 class="title-h3 font-Anton ">moments js {{ $times(2011102) }}</h5>
      </ClientOnly>

      <ClientOnly>
        <h5 class="title-h3 font-Anton ">
          moments js
          <strong style="color:red"> momento/index.client.js </strong>
          {{ $momento(2011102) }}
        </h5>
      </ClientOnly>
    </div>
  </div>
</template>
<script setup lang="js">
import profile  from "~/components/profile.vue";

export default {



setup(){

 //call plugin
const { $times } = useNuxtApp()
const { $momento } = useNuxtApp()

// onMounted(() => {
//    console.log("onMounted");

// })
//vars
let fullName = ref("Sebastian Lucas")
let age = ref(20)
let msgAlert = ref(false)

//methods
function addnum() {
  age.value+=1

}

function subNums (){
  age.value-=1

}

//computed methods
let check = computed(() => {

      age.value > 30 ? msgAlert.value = true : msgAlert.value = false;

    });


return { msgAlert, age, msgAlert, fullName, addnum, subNums, check}


}



}
</script>
