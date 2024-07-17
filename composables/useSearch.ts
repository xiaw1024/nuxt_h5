


import { ref, onMounted, onUnmounted, onActivated } from "vue";

export const useSearch = () => {
    let pageSize = 3;
  let pageNo = ref(1)
  let params=ref('')
  const loading = ref(false);
  const finished = ref(false);
  let List = ref([]);
  const getSearchList = async () => {
      let url=`https://eicc.hndt.com/mobile/cms/fullText?allKeywords=${params.value}&pageNo=${pageNo.value}&pageSize=${pageSize}`
    const data = await useFetch(url);

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
    getSearchList();
//   });
  return {
    loading,
    finished,
    List,
    pageNo,
    params,
    getSearchList,
  };
};
