<template>
  <div class="about">
    我是mb幻灯片页面
    <template v-for="(item,index) in List" :key="index">
        <MbCard :data="item"></MbCard>
    </template>
  </div>
</template>
<script setup>
const List = [
    {
        type:1,
        title:'标题',
        content:'内容',
        url:'https://media2.hndt.com/data_01/1/1/2024/01/15/6ecdcf4c8d1a1f305dbd1d97b63a8f0b.png'
    },
    {
        type:2,
        title:'标题',
        content:'内容',
        url:'https://cmsres.dianzhenkeji.com/transcode/2020/5/27/1265458130520657920.mp4'
    }
]
</script>
<style lang="scss" scoped>

.about {
  width: 375px;
  background-color: red;
}
</style>
