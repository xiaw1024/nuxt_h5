<template>
  <div class="card" @click="goToDetail">
    <img v-if="data.articleType == 0" :src="data.url" alt="" />
    <div class="play_btn" v-if="data.articleType == 1">
      <video  :src="data.url" controls></video>
      <img class="playicon" src="~/assets/img/play.png" alt="">
    </div>
    <div class="info" v-show="!hide">
      <p class="title">{{data.title}}</p>
      <span class="date">{{data.publishDate}}</span>
    </div>
  </div>
</template>
<script setup>
    import {defineProps,defineEmits} from 'vue'
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const props = defineProps({
        data:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        hide:{
          type:Boolean,
          default:false
        }
    })
    const emit = defineEmits(['click'])
    const goToDetail = () => {
  router.push(`/detail?id=${props.data.type}`);
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
