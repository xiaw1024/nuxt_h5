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

    <!-- <div class="container">
        <template v-for="(item,index) in List" :key="index">
        <MbCard :data="item"></MbCard>
        </template>
    </div> -->
    <div class="container">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <template v-for="item in List" :key="item.id">
          <MbCard :data="item"></MbCard>
        </template>
      </van-list>
    </div>
  </div>
</template>

<script setup>
// const List = [
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

const { loading, finished, List, getTestList, pageNo } = useList();
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  if (process.client) {
    console.log(pageNo.value, "pageNo");
    pageNo.value++;
    getTestList();
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 375px;
  min-width: unset;
  .header_bg {
    width: 375px;
    position: relative;
    border-radius: 0px 0px 22px 22px;
    overflow: hidden;
    .bg {
      width: 100%;
      display: block;
    }
    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      bottom: 0;
      right: 0;

      .search_box {
        width: 276px;
        height: 36px;
        background-image: url("~/assets/img/search_bg_m.png");
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        justify-content: space-around;
        align-items: center;
        input {
          width: 180px;
          height: 36px;
          background-color: rgba(255, 255, 255, 0);
          border: none;
          outline: none;
          font-size: 12px;
          line-height: 36px;
          font-family: HelveticaNeue, HelveticaNeue;
          font-weight: 500;
          color: #fff;
          &::placeholder {
            color: #fff;
          }
        }

        .search_icon {
          width: 20px;
          cursor: pointer;
        }
      }
    }
  }
  .cover {
    width: 100%;
    height: 45px;
    position: fixed;
    top: 0;
    left: 0;
  }
    .container {
    background-color: #fff;
    margin: 0 auto;
    padding: 30px 16px 160px 16px;
    box-sizing: border-box;
    width: 375px;
    }
}

</style>