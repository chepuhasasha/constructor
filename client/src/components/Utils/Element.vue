<template lang="pug">
component(
  :is="element.tag"
  :style='element.style'
  :class='element.classes'
  v-bind='element.attrs'
) {{ element.content }}
  Element(
    v-for='child in element.childs' 
    :element='child'
  )
</template>

<script>
export default {
  name: "Element",
  props: {
    element: {
      type: Object,
      default: null,
    },
  },
};
</script>
