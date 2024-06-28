<template>
  <div class="card" @click="goToDetail">
    <img v-if="data.type == 1" :src="data.url" alt="" />
    <video v-if="data.type == 2" :src="data.url" controls></video>
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
