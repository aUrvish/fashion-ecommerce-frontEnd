<template>
  <div class="dd-app">
      <NuxtPage/>
  </div>
</template>

<style src="@/assets/scss/main.scss"></style>
<style lang="scss">

body , html{
  padding: 0;
  margin: 0;
  box-sizing: border-box ;
  height: 100%;
}

::-webkit-scrollbar {
  width: .8vw;
}

::-webkit-scrollbar-thumb {
  background: #444; 
  border: 1px solid transparent;
  background-clip: padding-box;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>