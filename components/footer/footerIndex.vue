<template>
  <div class="footer padding-1-1">
    <h5 class="font-roboto padding-2-0  attetion-paragraph ">add components footer</h5>
    <ul class=" grids gap-1 grid-x1-x4">
      <li 
      v-for="(item, index) in 10" :key="index"
      class="paragraph "
      >
        items
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
