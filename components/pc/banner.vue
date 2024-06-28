<template>
    <div class="container">
        我是pc幻灯片页面
        <template v-for="(item,index) in List" :key="index">
        <PcCard :data="item"></PcCard>
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
.container{
    max-width: 1200px;
    background-color: #fff;
    margin: 0 auto;
    border: 1px solid #000;
}
</style>