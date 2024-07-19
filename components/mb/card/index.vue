<template>
  <div class="card" @click="goToDetail">
    <div class="round_cell">
    <img v-if="data.articleType == 0" :src="data?.coverImagesList[0]?.url||''"  alt="" />
    <div class="play_btn" v-if="data.articleType == 1">
      <img v-if="data.articleType == 1" :src="data?.coverImagesList[0]?.url||''"  alt="" />
      <!-- <video  :src="data.url" controls :poster="data?.coverImagesList[0]?.url||''"></video> -->
      <img class="playicon" src="~/assets/img/play.png" alt="">
    </div>
    </div>
    <div class="info" v-show="!hide">
      <p class="title">{{data.title}}</p>
      <p class="date">{{data.time}}</p>
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
    const goToDetail = () => {
  router.push(`/detail?id=${props.data.id}`);
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
