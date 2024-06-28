<template>
  <div>
    <h3>详情页{{ type }}</h3>

  </div>
</template>
<script setup>
    import { useRoute } from 'vue-router';
 
 const route = useRoute();
 const { id } = route.query;
 const type=ref('')
 type.value=id
 console.log(id,route,'iddd');
</script>
<style lang='scss' scoped>
 
</style>
