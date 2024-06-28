<template>
    <div class="card">
          <img  v-if="data.type==1" :src="data.url" alt="">
          <video v-if="data.type==2" :src="data.url" controls></video>
    </div>
  </template>
  <script setup>
    import {defineProps,defineEmits} from 'vue'
    const props = defineProps({
        data:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    })
    const emit = defineEmits(['click'])
  
  </script>
  <style lang='scss' scoped>
 @import './index.scss'
</style>