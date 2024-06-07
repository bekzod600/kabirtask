import { defineStore } from "pinia";
import axios from "axios";

export const useFormStore = defineStore("form", {
  state: () => ({
    form: [],
    status: "idle",
  }),
  actions: {
    async addForm(form) {
      try {
        this.status = "loading";
        const res = await axios.post(
          "https://voha.leetcode.uz/api/form/",
          form
        );
        this.form = res.data;
        this.status = "confirm";
      } catch (error) {
        this.status = "error";
        console.log(error);
      }
    },
  },
});
