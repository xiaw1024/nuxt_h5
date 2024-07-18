<template>
  <div>
    <component :is="layout == 'default' ? PcColumn : MbColumn" />
  </div>
</template>

<script setup>
const PcColumn = resolveComponent("LazyPcColumn");
const MbColumn = resolveComponent("LazyMbColumn");
import { ref } from "vue";

let layout = useState("layout");
</script>
