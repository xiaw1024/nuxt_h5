<template>
  <div class="search">
        <div class="search_box">
          <input type="text" placeholder="search" v-model="allKeywords" @keypress.enter="handleSearch" />
          <img class="search_icon" src="~/assets/img/search.png" alt=""  @click="handleSearch"  />
        </div>
      </div>
</template>
<script setup>
let {handleSearch,allKeywords}=useSearchRoute()
</script>
<style lang='scss' scoped>
.banner {
    width: 100%;
    min-width: 1200px;
    .header_bg {
      width: 100%;
      position: relative;
      height: 100%;
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
          width: 784px;
          height: 80px;
          background-image: url("~/assets/img/search_bg.png");
          background-repeat: no-repeat;
          background-size: contain;
          display: flex;
          justify-content: space-around;
          align-items: center;
          input {
            width: 600px;
            height: 53px;
            background-color: rgba(255, 255, 255, 0);
            border: none;
            outline: none;
            font-size: 24px;
            line-height: 53;
            font-family: HelveticaNeue, HelveticaNeue;
            font-weight: 500;
            color: #fff;
            &::placeholder {
              color: #fff;
            }
          }
  
          .search_icon {
            width: 32px;
            cursor: pointer;
          }
        }
      }
    }
    .cover {
      width: 100%;
      height: 137px;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  .container {
    max-width: 1200px;
    background-color: #fff;
    margin: 0 auto;
    padding: 30px 0 160px 0;
  }

</style>
