<template>
  <div class="detail">
    <div class="header"></div>
    <div class="banner">
      <div class="search_box">
        <div class="inner_search">
          <input type="text" name="" id="" placeholder="search" />
          <img class="search_icon" src="~/assets/img/search_d.png" alt="" />
        </div>
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
        <PcRichArea :content="articleData.contentBody"></PcRichArea>
      <div class="like_box" @click="handleLike">
        <img
          v-if="likes"
          class="like"
          src="~/assets/img/like.png"
          alt=""
        />
        <img v-else class="liked" src="~/assets/img/liked.png" alt="" />
        <span>{{ articleData.collection }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import dayjs from "dayjs";

// const articleData={
//     title:'Longmen Grottoes: A Longmen Grottoes: A  ',
//     articleOrigin:'Sarah',
//     publishDate:'2024-06-13 13:33',
//     like:'0',
//     likeCount:0,
//     type:2,
//     url:'https://cmsres.dianzhenkeji.com/transcode/2020/5/27/1265458130520657920.mp4',
// }

let articleData = ref({});
const route = useRoute();
const { id } = route.query;
const type = ref("");
type.value = id;
console.log(id, route, "iddd");
let testUrl=`https://pubmod.hntv.tv/mobile/cms/article?articleId=${id}&tenantId=1`
let prodUrl=`https://eicc.hndt.com/mobile/cms/articlewithrelated?articleId=${id}`
const getDetail = async () => {
  const data = await useFetch(testUrl);
  console.log(data, "asta");
  let {
    data: {
      _rawValue: { code, msg, result },
    },
  } = data;
  console.log(code, msg, articleData, "sda");
  if (code != 0) return;
  articleData.value = result;
  useSeoMeta({
    title: `EICC ${result.title}`,
    description: result.seoDescription,
    keywords: result.seoKeywords,
  });
};
getDetail();
let likes=ref(false)
const handleLike = () => {
  likes.value=!likes.value
};
const timeParse = (time) => {
  if (time) {
    return dayjs(time).format("YYYY-MM-DD HH:mm");
  } else {
    return "";
  }
};
</script>
<style lang='scss' scoped>
@import "./index.scss";
</style>
