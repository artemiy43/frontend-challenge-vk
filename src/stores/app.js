// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    cats: [],
    page: 0,
  }),
  getters: {
    favouriteCats: (state) => {
      return state.cats.filter((cat) => cat.isFavourite === true);
    },
  },
  actions: {
    setCats(cats) {
      const editedCats = cats.map((cat) =>
        cat?.isFavourite === true ? cat : { ...cat, isFavourite: false }
      );
      this.cats = editedCats;
    },
    toggleStatusCat(catId) {
      const cat = this.cats.find((cat) => cat.id === catId);
      cat.isFavourite = !cat.isFavourite;
      // const searchedCat = this.cats.findIndex((catt) => catt.id === catId);
      // if (index !== -1) {
      //   this.favCats.splice(index, 1);
      //   searchedCat.isFavourite = !searchedCat.isFavourite;
      // }
    },
    incPage(page) {
      this.page = page;
    },
  },
});
