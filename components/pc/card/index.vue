<template>
  <div class="card" @click="goToDetail">
    <img v-if="data.articleType == 0" :src="data?.coverImagesList[0]?.url||''" alt=""  />
    <div class="play_btn" v-if="data.articleType == 1">
      <img v-if="data.articleType == 1" :src="data?.coverImagesList[0]?.url||''"  alt="" object-fit="cover" />
      <!-- <video  :src="data.url" controls :poster="data?.coverImagesList[0]?.url||''"></video> -->
      <img class="playicon" src="~/assets/img/play.png" alt="">
    </div>
    <div class="info" v-show="!hide">
      <p class="title">{{data.title}}</p>
      <span class="date">{{timeParse(data.publishDate)}}</span>
    </div>
  </div>
</template>
<script setup>
    import {defineProps,defineEmits} from 'vue'
    import { useRouter } from 'vue-router';
    import dayjs from 'dayjs';

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
  router.push(`/detail?id=${props.data.id}`);
};
const timeParse = (time) => {
  if(time){
    return dayjs(time).format("M月DD日");
  }else{
    return ''
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
