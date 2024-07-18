import {useRouter,useRoute} from 'vue-router'

export const useSearchRoute = () => {
    const route = useRoute();
    const router = useRouter();  
    let allKeywords = ref("");
    if (process.client) {
        //值回显
        allKeywords.value = route.params?.keywords || "";
      }
    const handleSearch = () => {
      if (allKeywords.value) {
        router.push({
          path: `/search/${allKeywords.value}`,
          // query: { allKeywords: allKeywords.value },
        });
      } else {
        router.push({
          path: `/`,
        });
      }
    };

    return {
        handleSearch,
        allKeywords,
    }
};