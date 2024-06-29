<template>
    <div>
      <component :is="layout == 'default' ? PcDetail : MbDetail" />
    </div>
</template>
  
  <script setup>
  const PcDetail = resolveComponent('LazyPcDetail');
  const MbDetail = resolveComponent('LazyMbDetail');
    import {
      ref
    } from "vue";
  
    let layout = useState("layout");
  
  </script>