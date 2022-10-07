<template>
  <header>
    <nav class="padding-2-0">
       <h1 class="sub-title font-roboto color-blue-soft "> TEST  NUXT 3 😎 </h1>

        <ul class="display-flex gap-2  ">

        <NuxtLink  to="/" class="font-roboto paragraph"> Home  </NuxtLink>
        <NuxtLink  to="/one" class="font-roboto paragraph"> page one  </NuxtLink>
        <NuxtLink  to="/post/123" class="font-roboto paragraph">  dinamic route    </NuxtLink>
          
        </ul>
      <!-- <ul>
        <li><NuxtLink to="/"> index </NuxtLink></li>
        <li><NuxtLink to="/pictures"> pictures  </NuxtLink></li>
        <li><NuxtLink to="/pictures/1"> pictures 1</NuxtLink></li>
      </ul> -->
    </nav>
   
  </header>
</template>