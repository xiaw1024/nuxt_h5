<template>
  <div class="detail">
    <div class="header">

    </div>
    <div class="banner">
        <div class="search_box">
                <div class="inner_search">
                    <input type="text" name="" id="" placeholder="search">
                    <img class="search_icon" src="~/assets/img/search_d.png" alt="">
                </div>
        </div>
    </div>
    <div class="detail_content">
        <p class="article_title">{{articleData.title}}</p>
        <p class="article_info">
            <span>Publish Site：{{articleData.origin}}</span>
            <span class="date">{{articleData.date}}</span>
        </p>
        <div class="lines"></div>
        <PcCard :data="articleData" :hide="true"></PcCard>
        <div class="like_box" @click="handleLike">
            <img v-if="articleData.like=='0'" class="like" src="~/assets/img/like.png" alt="">
            <img v-else class="liked" src="~/assets/img/liked.png" alt="">
            <span>{{articleData.likeCount}}</span>
        </div>
    </div>
    


  </div>
</template>
<script setup>
    import { useRoute } from 'vue-router';
    const articleData={
        title:'Longmen Grottoes: A Longmen Grottoes: A  ',
        origin:'Sarah',
        date:'2024-06-13 13:33',
        like:'0',
        likeCount:0,
        type:2,
        time:'2024-06-13 13:33',
        url:'https://cmsres.dianzhenkeji.com/transcode/2020/5/27/1265458130520657920.mp4',
    }
 const route = useRoute();
 const { id } = route.query;
 const type=ref('')
 type.value=id
 console.log(id,route,'iddd');
 const handleLike=()=>{
    if(articleData.like=='0'){
        articleData.like='1'
        articleData.likeCount++
    }else{
        articleData.like='0'
        articleData.likeCount--
    }
}
</script>
<style lang='scss' scoped>
 @import './index.scss';
</style>
