<template>
  <v-app-bar elevation="0" class="indigo lighten-1">
    <h2><nuxt-link to="/" id="text-decoration"><slot></slot></nuxt-link></h2
  ></v-app-bar>
</template>

<script>
export default {}
</script>

<style>
#text-decoration {
  text-decoration: none;
  color:black;
  color:white;
}
</style>
