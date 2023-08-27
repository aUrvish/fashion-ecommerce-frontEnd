<template>
  <div class="dd-app">
      <NuxtPage/>
  </div>
</template>


<style lang="scss">

body , html{
  padding: 0;
  margin: 0;
  box-sizing: border-box ;
  height: 100%;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #999; 
  border: 1px solid transparent;
  background-clip: padding-box;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>