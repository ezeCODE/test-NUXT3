<template>
  <div class="padding-1-1 bg-silver-soft border-1">

  <div class="grids gap-1 padding-1-1">
  <p class="paragraph-small ">  send props ...</p>
  <label class="sub-title font-poppins"> {{ nameProfile }}  </label>
  <p class="paragraph font-poppins"> age :{{ ageProfile }} </p>

  <div class="padding-1-1"
  v-if="isTrue"
  >
  <p class="color-red">The variable number is greater than 30</p>
  </div>

  </div>
  </div>
</template>
<script setup lang="js">

export default {



   props: {
    nameProfile: {type: String },
    ageProfile: { type: Number},
    isTrue: { type: Boolean}

  },
  //  setup(props){

  //    onMounted(){
  //      console.log("mounted " ,props);
  //    }

  //  }





}
</script>
