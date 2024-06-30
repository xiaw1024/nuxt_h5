<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeMount } from "vue";
  import { deviceType } from "~/utils/deviceType";
  import { throttle } from "~/utils/tools";

  //如果是server
  if (process.server) {
    const headers = useRequestHeaders();
    let layout = deviceType(headers["user-agent"]).type == "pc" ? "default" : "mobile";
    useState("layout", () => layout);
  }

  let layout = useState("layout");


  // 监听屏幕变化
  onMounted(() => {
    window.onresize = throttle(() => {
      let w = window.innerWidth;
      if(deviceType(headers["user-agent"]).type == "pc" ){
      // if (w <= 690) { // 断点
        useState("layout").value = "mobile";
      } else {
        useState("layout").value = "default";
      }
    }, 100);

    // 如果你希望根据屏幕宽度做首次渲染，请加上下面的代码( 不推荐 )
    // window.dispatchEvent(  new Event( "resize" ) );
  });

</script>
