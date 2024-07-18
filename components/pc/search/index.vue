<template>
  <div class="banner">
    <div class="header_bg">
      <img class="bg" src="~/assets/img/banner.png" alt="" />
      <PcSearchBox></PcSearchBox>
      <!-- <div class="search">
        <div class="search_box">
          <input type="text" placeholder="search" v-model="allKeywords" />
          <img class="search_icon" src="~/assets/img/search.png" alt="" @click="handleSearch" />
        </div>
      </div> -->
    </div>
    <img class="cover" src="~/assets/img/cover.png" alt="" />

    <div class="container">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <template v-for="item in List" :key="item.id">
          <PcCard :data="item"></PcCard>
        </template>
      </van-list>
    </div>
  </div>
</template>

<script setup >
const { loading, finished, List, getSearchList, pageNo } = useSearch();
import {useRouter, useRoute} from 'vue-router'
let allKeywords=ref('')
const router = useRoute()
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  if (process.client) {
    //值回显
    allKeywords.value=router.params.keywords||""
    pageNo.value++;
    getSearchList();
  }
};
// const handleSearch = () => {
//   router.push({
//         path:`/search?allKeywords=${allKeywords.value}`,
//     })
// };
</script>

<style lang="scss" >
@import "./index.scss";

</style>