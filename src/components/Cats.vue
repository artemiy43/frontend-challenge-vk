<template>
  <div class="container">
    <div class="cats-list">
      <div
        class="cat"
        v-for="cat in store.cats"
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
    <p v-intersect="onIntersect">... загружаем ещё котиков ...</p>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app";
import { watch, ref } from "vue";
const store = useAppStore();
const favourite = "favourite";
const favourite_border = "favourite_border";
const isIntersectingg = ref(false);
function getImageUrl(name) {
  return new URL(`../assets/images/${name}.svg`, import.meta.url).href;
}

const onIntersect = (isIntersecting, entries, observer) => {
  isIntersectingg.value = isIntersecting;
};

watch(isIntersectingg, (newisIntersecting, oldisIntersecting) => {
  if (newisIntersecting === true) {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=15&page=${store.page}&api_key=live_gOSAOwPKswdc8dYMNl6p24gBkIPU74ITfdt9Hu84TyOebvj6EHvvZLZxnusYmUyM`
    )
      .then((res) => res.json())
      .then((data) => {
        store.setCats([...store.cats, ...data]);
        store.incPage(store.page + 1);
      });
  }
});
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  padding: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
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
