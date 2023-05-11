<template>
  <div>
    <component :is="layout == 'default' ? PcAbout : MbAbout" />
  </div>
</template>

<script setup>
const PcAbout = resolveComponent('LazyPcAbout');
const MbAbout = resolveComponent('LazyMbAbout');
  import {
    ref
  } from "vue";

  let layout = useState("layout");

</script>