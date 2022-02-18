<template lang="pug">
h1 HOME
Card
button(@click='click') dark
</template>

<script>
import Card from "@/components/UI/Card.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Card,
  },
  methods: {
    ...mapActions(["setTheme"]),
    click() {
      this.setTheme("dark");
    },
  },
};
</script>

<style lang="less"></style>
