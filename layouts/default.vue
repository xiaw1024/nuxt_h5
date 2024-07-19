<template>
  <div class="default-layout">
    <!-- 页头 -->
    <div class="header">
      <NuxtLink to="/">
        <img class="logo" src="~/assets/img/logo.png" alt="" />
      </NuxtLink>
      <!-- <div class="nav">
                <NuxtLink to="/about">跳转到关于我们</NuxtLink>
            </div> -->
    </div>
    <img
      class="bread"
      src="~/assets/img/bread.png"
      @click="handleBread"
      alt=""
    />
    <!-- 页面主题 pages中的页面将放到这里面 -->
    <div class="main">
      <slot></slot>
    </div>
    <!-- 页脚 -->
    <div class="footer">
      <div class="left">
        <img src="~/assets/img/logo.png" alt="" />
        <div class="more">
          <NuxtLink to="/contact">Contact Us</NuxtLink>
          <span class="split">|</span>
          <NuxtLink to="/about">About Us</NuxtLink>
        </div>
      </div>
      <div class="right">
        <p>Follow us</p>
        <div class="partner-list">
          <a href="https://www.facebook.com/">
            <img class="partner" src="~/assets/img/f_fb.png" alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img class="partner" src="~/assets/img/f_ins.png" alt="" />
          </a>
          <a href="https://www.tiktok.com/">
            <img class="partner" src="~/assets/img/f_tt.png" alt="" />
          </a>
          <a href="https://x.com/">
            <img class="partner" src="~/assets/img/f_tw.png" alt="" />
          </a>
          <a href="https://www.youtube.com/">
            <img class="partner" src="~/assets/img/f_ytb.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="overlay" v-show="siderbar" @click="handleClose">
    </div>
    <div :class="['sidebar', siderbar ? 'show' : '']">
      <img
        @click="handleClose"
        class="close"
        src="~/assets/img/close.png"
        alt=""
      />
      <div class="manue">
        <img class="bar_icon" src="~/assets/img/like.png" alt="" />
        <span class="manue1">popular</span>
      </div>
      <div class="lines"></div>
      <div class="manues" @click="handleToggle">
        <img class="bar_icon" src="~/assets/img/publish.png" alt="" />
        <span class="manue1">popular</span>
        <div class="toggle_box">
          <img
            :class="['arrow', toggle ? 'expand' : '']"
            src="~/assets/img/arrow_close.png"
            alt=""
          />
        </div>
      </div>
      <div v-show="toggle">
        <PcNavbar :item="columList"></PcNavbar>
      </div>
      <div class="lines"></div>
      <div class="backend">
        <div class="more">
          <NuxtLink to="/contact">Contact Us</NuxtLink>
          <span class="split">|</span>
          <NuxtLink to="/about">About Us</NuxtLink>
        </div>
        <div class="partner-list">
          <a href="https://www.facebook.com/">
            <img class="partner" src="~/assets/img/face.png" alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img class="partner" src="~/assets/img/ins.png" alt="" />
          </a>
          <a href="https://www.tiktok.com/">
            <img class="partner" src="~/assets/img/tiktok.png" alt="" />
          </a>
          <a href="https://x.com/">
            <img class="partner" src="~/assets/img/twitter.png" alt="" />
          </a>
          <a href="https://www.youtube.com/">
            <img class="partner" src="~/assets/img/youtobe.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const siderbar = ref(false);
const handleBread = () => {
  console.log("handleBread");
  siderbar.value = true;
};
const handleClose = () => {
  siderbar.value = false;
};
const toggle = ref(false);
const handleToggle = () => {
  toggle.value = !toggle.value;
};
const {columList} = useColumn()

</script>
<style lang="scss" scoped>
@import "./../assets/styles/pc/index.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  min-width: 1200px;

  .logo {
    width: 210px;
  }
}
.bread {
  position: fixed;
  left: 60px;
  top: 45px;
  width: 40px;
  cursor: pointer;
  z-index: 10;
}

.footer {
  width: 100%;
  min-width: 1200px;
  height: 256px;
  background-color: rgba(0, 30, 67, 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("~/assets/img/f_bg.png");
      background-repeat: no-repeat;
      background-size: cover;
  .left {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    .logo {
      width: 210px;
    }
    .more {
      font-family: HelveticaNeue;
      font-size: 14px;
      color: #ffffff;
      line-height: 16px;
      text-align: center;
      margin-top: 15px;
      a {
        color: #ffffff;
      }
      .split {
        margin: 0 15px;
      }
    }
  }
  .right {
    p {
      font-family: GurmukhiSangamMN, GurmukhiSangamMN;
      font-weight: bold;
      font-size: 24px;
      color: #ffffff;
      line-height: 31px;
    }
    .partner-list {
      display: flex;
      .partner {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        // background-color: #fff;
        border-radius: 50%;
      }
    }
  }
}
.overlay{
  position: fixed;
  width: 100%;;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.48;
}
.sidebar {
  position: fixed;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 10;
  .close {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 24px;
    right: 20px;
    cursor: pointer;
  }
  .manue {
    padding-top: 130px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    .bar_icon {
      width: 15px;
      height: 15px;
    }
    .manue1 {
      font-size: 16px;
      color: #303030;
      line-height: 19px;
      font-family: HelveticaNeue, HelveticaNeue;
      font-weight: 600;
      margin-left: 19px;
    }
  }
  .lines {
    border-top: 1px solid #303030;
    opacity: 0.07;
    margin-top: 50px;
  }
  .manues {
    padding-top: 40px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    position: relative;
    cursor: pointer;
    .bar_icon {
      width: 15px;
      height: 15px;
    }
    .manue1 {
      font-size: 16px;
      color: #303030;
      line-height: 19px;
      font-family: HelveticaNeue, HelveticaNeue;
      font-weight: 600;
      margin-left: 19px;
    }
    .toggle_box {
      width: 18px;
      height: 18px;
      position: absolute;
      bottom: 0;
      right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
                width: 18px;
                height: 18px;
            }
      .toggle {
        width: 18px;
        display: block;
      }
      .expand {
        transform: rotateZ(90deg);
      }
    }
  }

  transition: all 0.3s ease-in-out;
  overflow: hidden;
  .backend{
    position: absolute;
    bottom: 72px;
    left: 0;
    width: 100%;
    .more{
      font-family: HelveticaNeue;
      font-size: 14px;
      color: rgba(31, 13, 91, 1);
      line-height: 16px;
      text-align: center;
      margin-top: 15px;
      a {
        color: rgba(31, 13, 91, 1);
      }
      .split {
        margin: 0 15px;
      }
    }
    .partner-list {
      display: flex;
        margin-top: 20px;
        justify-content: center;
        a{
            line-height: 0;
        }
      .partner {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
}
.show {
  width: 280px;
  padding: 0 20px;
}
</style>
