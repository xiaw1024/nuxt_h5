<template>
  <div class="detail">
    <div class="banner">
      <div class="header_bg">
        <img class="bg" src="~/assets/img/banner.png" alt="" />
        <div class="search">
          <div class="search_box">
            <input type="text" placeholder="search" />
            <img class="search_icon" src="~/assets/img/search.png" alt="" />
          </div>
        </div>
      </div>
      <img class="cover" src="~/assets/img/cover.png" alt="" />
    </div>
    <div class="detail_content">
      <p class="article_title">{{ articleData.title }}</p>
      <p class="article_info">
        <span>Publish Site：{{ articleData.articleOrigin }}</span>
        <span class="date">{{ timeParse(articleData.publishDate) }}</span>
      </p>
      <div class="lines"></div>
      <!-- <MbCard :data="articleData" :hide="true"></MbCard> -->
      <!-- 图文 -->
      <MbRichArea
        v-if="articleData.articleType == 0"
        :content="articleData.contentBody"
      ></MbRichArea>
      <!-- 视频 -->
      <MbVideoType
        v-if="articleData.articleType == 1"
        :articleData="articleData"
      ></MbVideoType>
      <div class="like_box" @click="handleLike">
        <img v-if="likes" class="like" src="~/assets/img/like.png" alt="" />
        <img v-else class="liked" src="~/assets/img/liked.png" alt="" />
        <span>{{ articleData.collection }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { useRoute } from "vue-router";
// const articleData={
//     title:'Longmen Grottoes: A Longmen Grottoes: A  ',
//     origin:'Sarah',
//     date:'2024-06-13 13:33',
//     like:'1',
//     likeCount:0,
//     type:2,
//     time:'2024-06-13 13:33',
//     url:'https://cmsres.dianzhenkeji.com/transcode/2020/5/27/1265458130520657920.mp4',
// }
// const route = useRoute();
// const { id } = route.query;
let { articleData, timeParse } = useDetail();
let likes = ref(false);
const handleLike = () => {
  likes.value = !likes.value;
};
</script>
<style lang="scss" scoped>
@use "./index.scss";
</style>
<style module="classes">
.red {
  color: green;
}
</style>
