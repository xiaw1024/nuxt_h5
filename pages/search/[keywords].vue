<template>
  <div>
    <component :is="layout == 'default' ? PcSearch : MbSearch" />
  </div>
</template>
  
  <script setup>
const PcSearch = resolveComponent("LazyPcSearch");
const MbSearch = resolveComponent("LazyMbSearch");
import { ref } from "vue";

let layout = useState("layout");
</script>