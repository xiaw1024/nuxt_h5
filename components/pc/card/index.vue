<template>
  <div class="card" @click="goToDetail">
    <img v-if="data.type == 1" :src="data.url" alt="" />
    <div class="play_btn" v-if="data.type == 2">
      <video  :src="data.url" controls></video>
      <img class="playicon" src="~/assets/img/play.png" alt="">
    </div>
    <div class="info">
      <p class="title">{{data.title}}</p>
      <span class="date">{{data.time}}</span>
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
