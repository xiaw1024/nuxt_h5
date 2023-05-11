<template>
  <div>
    <component :is="layout == 'default' ? PcBanner : MbBanner" />
  </div>
</template>

<script setup>
const PcBanner = resolveComponent('LazyPcBanner');
const MbBanner = resolveComponent('LazyMbBanner');
  import {
    ref
  } from "vue";

  let layout = useState("layout");

</script>