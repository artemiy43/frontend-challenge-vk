<template>
  <div class="container">
    <div class="cats-list">
      <div
        class="cat"
        v-for="cat in store.favouriteCats"
        @click="store.toggleStatusCat(cat.id)"
      >
        <v-img :src="cat.url" alt="cat" cover width="225" height="225" />
        <v-img
          :src="
            cat.isFavourite
              ? getImageUrl(favourite)
              : getImageUrl(favourite_border)
          "
          alt="like"
          cover
          width="40"
          height="40"
          class="cat__like"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();
const favourite = "favourite";
const favourite_border = "favourite_border";
function getImageUrl(name) {
  return new URL(`../assets/images/${name}.svg`, import.meta.url).href;
}
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  padding: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cats-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 47px;
  flex-wrap: wrap;
  max-width: 1440px;
  min-width: 320px;
}

.cat {
  transition: all 0.3s ease-in;
  position: relative;
}

.cat:hover {
  transform: scale(1.2);
}

.cat__like {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
