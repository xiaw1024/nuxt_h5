


import { ref, onMounted, onUnmounted, onActivated } from "vue";
import { useRoute } from "vue-router";

export const useSearch = () => {
    let pageSize = 3;
  let pageNo = ref(1)
  let params=ref('')
  const route = useRoute();
  const { allKeywords } = route.query;
  const loading = ref(false);
  const finished = ref(false);
  let List = ref([]);
  const getSearchList = async () => {
      let url=`https://eicc.hndt.com/mobile/cms/fullText?allKeywords=${allKeywords}&pageNo=${pageNo.value}&pageSize=${pageSize}`
      
      const data = await useFetch(url);
      console.log(data,'seatchData');

    let {
      data: {
        _rawValue: {
          code,
          msg,
          result,
        },
      },
    } = data;
    // console.log(code,msg,content,'sda')
    if (code != 0) return;
    if(!result){
      List.value=[]
      finished.value = true;
      return
    }
    let {content} = result
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
