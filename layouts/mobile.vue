<template>
  <div class="default-layout">
    <!-- 页头 -->
    <div class="header">
      <NuxtLink to="/">
        <span class="logo">大象国际</span>
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
        <MbNavbar :item="channels"></MbNavbar>
      </div>
      <div class="lines"></div>
      <div class="backend">
        <div class="more">
          <NuxtLink to="/contact">Contact Us</NuxtLink>
          <span class="split">|</span>
          <NuxtLink to="/about">About Us</NuxtLink>
        </div>
        <div class="partner-list">
          <a href="http://ww.baidu.com">
            <img class="partner" src="~/assets/img/face.png" alt="" />
          </a>
          <a href="http://ww.baidu.com">
            <img class="partner" src="~/assets/img/ins.png" alt="" />
          </a>
          <a href="http://ww.baidu.com">
            <img class="partner" src="~/assets/img/tiktok.png" alt="" />
          </a>
          <a href="http://ww.baidu.com">
            <img class="partner" src="~/assets/img/twitter.png" alt="" />
          </a>
          <a href="http://ww.baidu.com">
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
const channels = ref([
  {
    name: "YouTube",
    url: "",
    toggle: false,
    children: [
      {
        name: "Andy",
        url: "",
      },
      {
        name: "Sarah备份",
        url: "",
      },
      {
        name: "Cody",
        url: "",
      },
    ],
  },
  {
    name: "twitter",
    url: "",
    toggle: false,
    children: [
      {
        name: "Andy",
        url: "",
      },
      {
        name: "Sarah备份",
        url: "",
      },
      {
        name: "Cody",
        url: "",
      },
    ],
  },
  {
    name: "ins",
    url: "",
    toggle: false,
    children: [
      {
        name: "Andy",
        url: "",
      },
      {
        name: "Sarah备份",
        url: "",
      },
      {
        name: "Cody",
        url: "",
      },
    ],
  },
  {
    name: "facebook",
    url: "",
    toggle: false,
    children: [
      {
        name: "Andy",
        url: "",
      },
      {
        name: "Sarah备份",
        url: "",
      },
      {
        name: "Cody",
        url: "",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
@import './../assets/styles/wap/index.scss';
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
.logo {
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 45px;
    text-align: center;
    font-style: normal;
  }
  
}
.bread {
  position: fixed;
  left: 13px;
  top: 15px;
  width: 20px;
  cursor: pointer;
  z-index: 10;
}

.sidebar {
  position: fixed;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 0px 19px 19px 0px;
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
    padding-top: 64px;
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
    margin-top: 19px;
  }
  .manues {
    padding-top: 40px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    position: relative;
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
    bottom: 100px;
    left: 0;
    width: 100%;
    .more{
      font-family: HelveticaNeue;
      font-size: 14px;
      color: rgba(102, 102, 102, 1);
      line-height: 16px;
      text-align: center;
      margin-top: 15px;
      a {
        color: rgba(102, 102, 102, 1);
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