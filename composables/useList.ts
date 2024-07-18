import { ref, onMounted, onUnmounted, onActivated } from "vue";

export const useList = () => {
  const route = useRoute();
  let { id } = route.params
  if(!id){
    id ="1760504763108921345"
  }
  console.log(id,"id");
  
  let pageSize = 3;
  let pageNo = ref(1)
  let testListUrl = `https://pubmod.hntv.tv/mobile/cms/articles?channelId=1760504763108921345&pageNo=${pageNo.value}&pageSize=${pageSize}`;
  const loading = ref(false);
  const finished = ref(false);
  let List = ref([]);
  const getTestList = async () => {
    testListUrl = `https://pubmod.hntv.tv/mobile/cms/articles?channelId=${id}&pageNo=${pageNo.value}&pageSize=${pageSize}`;
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
//   onActivated(() => {
    getTestList();
//   });
  return {
    loading,
    finished,
    List,
    pageNo,
    getTestList,
  };
};
