<template>
  <v-toolbar :elevation="8" class="header">
    <v-toolbar-items>
      <v-btn class="header__button" to="/" active-color="white"
        >Все котики</v-btn
      >
      <v-btn class="header__button" to="/favourite" active-color="white"
        >Любимые котики</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
  <v-main>
    <router-view />
  </v-main>
</template>

<script setup>
//
</script>

<style lang="css" scoped>
.header {
  background-color: #2196f3;
  padding: 0 62px;
}
.header__button {
  color: rgba(255, 255, 255, 0.7);
  height: 100%;
}
.header__button:hover {
  background-color: #1e88e5;
  color: rgba(255, 255, 255, 1);
}
</style>
