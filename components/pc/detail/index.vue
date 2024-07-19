<template>
  <div class="detail">
    <div class="header"></div>
    <div class="banner">
      <!-- <div class="search">
        <div class="search_box">
          <input type="text" name="" id="" placeholder="search" />
          <img class="search_icon" src="~/assets/img/search_d.png" alt="" />
        </div>
      </div> -->
      <div class="header_bg">
      <PcSearchBox></PcSearchBox>
      </div>
    </div>
    <div class="detail_content">
      <p class="article_title">{{ articleData.title }}</p>
      <p class="article_info">
        <span>Publish Site：{{ articleData.articleOrigin }}</span>
        <span class="date">{{ timeParse(articleData.publishDate) }}</span>
      </p>
      <div class="lines"></div>
      <!-- <PcCard :data="articleData" :hide="true"></PcCard> -->
      <!-- 图文 -->
      <PcRichArea
        v-if="articleData.articleType == 0"
        :content="articleData.contentBody"
      ></PcRichArea>
      <!-- 视频 -->
      <PcVideoType
        v-if="articleData.articleType == 1"
        :articleData="articleData"
      ></PcVideoType>
      <div class="like_box" @click="handleLike">
        <img v-if="likes" class="like" src="~/assets/img/like.png" alt="" />
        <img v-else class="liked" src="~/assets/img/liked.png" alt="" />
        <span>{{ articleData.clickNum }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { useRoute } from "vue-router";

// const articleData={
//     title:'Longmen Grottoes: A Longmen Grottoes: A  ',
//     articleOrigin:'Sarah',
//     publishDate:'2024-06-13 13:33',
//     like:'0',
//     likeCount:0,
//     type:2,
//     url:'https://cmsres.dianzhenkeji.com/transcode/2020/5/27/1265458130520657920.mp4',
// }

// const route = useRoute();
// const { id } = route.query;
// type.value = id;
let { articleData, timeParse } = useDetail();
let likes = ref(false);
const handleLike = () => {
  likes.value = !likes.value;
};

</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
