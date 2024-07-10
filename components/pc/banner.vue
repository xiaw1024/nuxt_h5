<template>
<div class="banner">
    <div class="header_bg">
        <img class="bg" src="~/assets/img/banner.png" alt="">
        <div class="search">
            <div class="search_box">
                <input type="text" placeholder="search">
                <img class="search_icon" src="~/assets/img/search.png" alt="">
            </div>
        </div>
    </div>
    <img class="cover" src="~/assets/img/cover.png" alt="" />

    <div class="container">
        <template v-for="item in List" :key="item.id">
        <PcCard :data="item"></PcCard>
        </template>
    </div>
</div>
</template>

<script setup >
// let List = [
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
// 查询指定栏目下的稿件列表：https://eicc.hndt.com/mobile/cms/articles?channelId=1810136737417199617&pageNo=1&pageSize=10 查询稿件详情：https://eicc.hndt.com/mobile/cms/articlewithrelated?articleId=1810137459849887745
let List=ref([])
let pageNo=1,pageSize=10
const getList = async()=>{
    const data = await useFetch(`https://eicc.hndt.com/mobile/cms/articles?channelId=1810136737417199617&pageNo=${pageNo}&pageSize=${pageSize}`)
    let {data:{_rawValue:{code,msg,result:{content}}}}=data
    console.log(code,msg,content,'sda')
    if(code != 0) return
    List.value=content
    
}
getList()


// console.log(List,'List');
</script>
<style lang="scss" scoped> 
.banner{
    width: 100%;
    min-width: 1200px;
.header_bg{
    width: 100%;
    position: relative;
    .bg{
        width: 100%;
        display: block;
}
    .search{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        bottom: 0;
        right: 0;
        .search_box{
            width: 784px;
            height: 80px;
            background-image: url('~/assets/img/search_bg.png');
            background-repeat: no-repeat;
            background-size: contain;
            display: flex;
            justify-content: space-around;
            align-items: center;
            input{
                width: 600px;
                height: 53px;
                background-color: rgba(255,255,255,0);
                border: none;
                outline: none;
                font-size: 24px;
                line-height: 53;
                font-family: HelveticaNeue, HelveticaNeue;
                font-weight: 500;
                color: #fff;
                &::placeholder{
                    color: #fff;
                }
            }
           
            .search_icon{
                width: 32px;
                cursor: pointer;
            }
        }
    }
}
.cover{
    width: 100%;
    height: 137px;
    position: fixed;
    top: 0;
    left: 0;
}

}
.container{
    max-width: 1200px;
    background-color: #fff;
    margin: 0 auto;
    padding: 30px 0 160px 0;
}
</style>