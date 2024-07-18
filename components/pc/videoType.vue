<script setup>
import { defineProps, onMounted, computed } from "vue";
const element = ref(null);
const props = defineProps({
  articleData: {
    type: Object,
    default: ()=>{},
  },
});
const url=computed(()=>{
    if (props.articleData.articleAttachmentsList) {
        props.articleData.articleAttachmentsList.forEach((item) => {
        if (item.category === 'VIDEO' && item.url) {
          return item.url
        }else{
            return ''
        }
      })
    }
})
</script>
<template>
  <video :src="url" class="videoType"></video>
</template>
<style lang='scss'>
.videoType {
    width: 1200px !important;
    height: auto !important;

}
</style>