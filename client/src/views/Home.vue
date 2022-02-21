<template lang="pug">
h1 HOME
//- Card
Icon
Icon(icon='plus')
Icon(icon='out')
Icon(icon='right')
Icon(icon='left')
Icon(icon='down')
Icon(icon='up')
Icon(icon='gap')
Icon(icon='padding')
button(@click='click') dark
</template>

<script>
import Card from "@/components/UI/Card.vue";
import Icon from "@/components/UI/Icon.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Card,
    Icon,
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
