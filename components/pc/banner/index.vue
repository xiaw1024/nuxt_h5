<template>
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
// let List = [
//     {
//         type:1,
//         title:'Longmen Grottoes: A Treasure of One Day Tour in Henan Longmen Grottoes: A Treasure of One Day Tour in Henan Longmen Grottoes: A Treasure of One Day Tour in Henan',
//         content:'内容',
//         time:'6月13日',
//         url:'https://media2.hndt.com/data_01/1/1/2024/01/15/6ecdcf4c8d1a1f305dbd1d97b63a8f0b.png'
//     },
//     {
//         type:2,
//         title:'Longmen Grottoes: A Treasure of One Day Tour in Henan',
//         time:'6月13日',
//         content:'内容',
//         url:'https://cmsres.dianzhenkeji.com/transcode/2020/5/27/1265458130520657920.mp4'
//     },
//     {
//         type:1,
//         title:'Longmen Grottoes: A Treasure of One Day Tour in Henan Longmen Grottoes: A Treasure of One Day Tour in Henan Longmen Grottoes: A Treasure of One Day Tour in Henan',
//         content:'内容',
//         time:'6月13日',
//         url:'https://media2.hndt.com/data_01/1/1/2024/01/15/6ecdcf4c8d1a1f305dbd1d97b63a8f0b.png'
//     },
//     {
//         type:2,
//         title:'Longmen Grottoes: A Treasure of One Day Tour in Henan',
//         time:'6月13日',
//         content:'内容',
//         url:'https://cmsres.dianzhenkeji.com/transcode/2020/5/27/1265458130520657920.mp4'
//     }
// ]
// 查询指定栏目下的稿件列表：https://eicc.hndt.com/mobile/cms/articles?channelId=1810136737417199617&pageNo=1&pageSize=10 查询稿件详情：https://eicc.hndt.com/mobile/cms/articlewithrelated?articleId=1810137459849887745
let List = ref([]);
let pageSize = 3;
let pageNo = 1;
let testNaveUrl =
  "https://pubmod.hntv.tv/mobile/cms/channelsbyparentchanneid?channelId=1760954163992039426";
let testListUrl = `https://pubmod.hntv.tv/mobile/cms/articles?channelId=1760504763108921345&pageNo=${pageNo.value}&pageSize=${pageSize}`;
let prodUrl = `https://eicc.hndt.com/mobile/cms/articles?channelId=1810136737417199617&pageNo=${pageNo.pageNo}&pageSize=${pageSize}`;
// const getList = async()=>{
//     const data = await useFetch(prodUrl)
//     console.log(data,'data');
//     let {data:{_rawValue:{code,msg,result:{content}}}}=data
//     console.log(code,msg,content,'sda')
//     if(code != 0) return
//     List.value=content

// }
// getList()
const loading = ref(false);
const finished = ref(false);

const getTestList = async () => {
  testListUrl = `https://pubmod.hntv.tv/mobile/cms/articles?channelId=1760504763108921345&pageNo=${pageNo}&pageSize=${pageSize}`;
  const data = await useFetch(testListUrl);

  let {
    data: {
      _rawValue: {
        code,
        msg,
        result: { content },
      },
    },
  } = data;
  // console.log(code,msg,content,'sda')
  if (code != 0) return;
  if (content.length > 0) {
    // 加载状态结束
    loading.value = false;
    if (List.value.length > 0) {
      List.value = List.value.concat(content);
    } else {
      List.value = content;
    }
  } else {
    finished.value = true;
  }
};
getTestList();
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  if (process.client) {
    pageNo++;
    getTestList();
  }
};
</script>

<style lang="scss" >
@import "./index.scss";

</style>