import { ref, onActivated } from "vue";
import dayjs from "dayjs";
export const useDetail = (id: string) => {

  let testUrl = `https://pubmod.hntv.tv/mobile/cms/article?articleId=${id}&tenantId=1`;
  let articleData = ref({});
  const getDetail = async () => {
    const data = await useFetch(testUrl);
    console.log(data, "asta");
    let {
      data: {
        _rawValue: { code, msg, result },
      },
    } = data;
    if (code != 0) return;
    articleData.value = result;
    useSeoMeta({
      title: `EICC ${result.title}`,
      description: result.seoDescription,
      keywords: result.seoKeywords,
    });
  };
  const timeParse = (time: string) => {
    if (time) {
      return dayjs(time).format("YYYY-MM-DD HH:mm");
    } else {
      return "";
    }
  };
  getDetail();

  onActivated(() => {});
  return {
    articleData,
    timeParse,
  };
};
