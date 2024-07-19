<script setup>
import { defineProps, onMounted, computed } from "vue";
const element = ref(null);
const props = defineProps({
  articleData: {
    type: Object,
    default: () => {},
  },
});
const url = computed(() => {
  if (props.articleData.articleAttachmentsList) {
    props.articleData.articleAttachmentsList.forEach((item) => {
      if (item.category === "VIDEO" && item.url) {
        return item.url;
      } else {
        return "";
      }
    });
  }
});
const poster= computed(() => {
  if (props.articleData.coverImagesList) {
    return props.articleData.coverImagesList[0].url|| ''
  }
})
</script>
<template>
  <video
    :src="url"
    class="videoType"
    controls
    controlsList="nodownload"
    preload="metadata"
    playsInline
    x5-playsinline="true"
    :poster="poster"
  ></video>
</template>
<style lang="scss">
.videoType {
  width: 343px !important;
  height: auto !important;
}
</style>
