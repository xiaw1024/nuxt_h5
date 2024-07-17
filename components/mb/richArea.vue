<script setup>
import { defineProps, onMounted, computed } from "vue";
const element = ref(null);
const props = defineProps({
  content: {
    type: String,
    default: ``,
  },
});
</script>
<template>
  <div v-html="content" class="article_content"></div>
</template>
<style lang='scss'>
.article_content {
  p {
    font-size: 14px !important;
    color: #666 !important;
    line-height: 1.75;
    img {
      width: 343px !important;
      height: auto !important;
      margin: 10px 0;
    }
    video {
      width: 343px !important;
      height: auto !important;
      margin: 10px 0;

    }
    audio {
      width: 343px !important;
      height: auto !important;
      margin: 10px 0;

    }
  }
}
</style>