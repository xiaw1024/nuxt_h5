<template>
  <div v-for="(item,index) in props.item" class="manue_item" :key="index" >
    <div class="first_item" @click="handleToggle(item)">
        <img :class="['arrow',item.toggle?'expand':'']" src="~/assets/img/arrow_close.png" alt="">
        <span class="menu_name">{{item.channelName}}</span>
    </div>
    <div v-for="(ele,idx) in item.children" class="second_item" :key="idx" v-show="item.toggle" @click="handleChannel(ele)">
        <span class="dot"></span>
        <span class="second_name">{{ele.channelName}}</span>
    </div>
  </div>
</template>

<script setup>
import {defineProps,defineEmits} from 'vue'
import {useRouter} from 'vue-router'
const props=defineProps({
    item:{
        type:Array,
        default:()=>{
            return [{
                name:'YouTube',
                url:'',
                toggle:false,
                children:[
                    {
                        name:'Andy',
                        url:''
                    },
                    {
                        name:'Sarah备份',
                        url:''
                    },
                    {
                        name:'Cody',
                        url:''
                    },
                ]
            }]
        }
    }
})
const handleToggle=(item)=>{
    item.toggle=!item.toggle

}
const router=useRouter()
const handleChannel=(item)=>{
    console.log(item.channelId,'item')
    router.push({
        path:`/column/${item.channelId}`,
    })
}
</script>

<style lang='scss' scoped>
.manue_item{
    margin-top: 14px;
    .first_item{
        display: flex;
        justify-content: flex-start;
        align-content: center;
        padding-left: 30px;
        cursor: pointer;
        .arrow{
            width: 14px;
            transition: all .5;

        }
        .expand{
            transform: rotateZ(90deg);
        }
        .menu_name{
            font-family: HelveticaNeue;
            font-size: 14px;
            color: #303030;
            line-height: 16px;
            text-align: left;
            font-style: normal;
            margin-left: 5px;
        }

    }
    .second_item{
        padding-left: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 30px;
        .dot{
            display: block;
            width: 4px;
            height: 4px;
            background-color: rgba(153, 153, 153, 1);
            border-radius: 50%;
        }
        .second_name{
            font-family: HelveticaNeue;
            font-size: 14px;
            color: #999999;
            text-align: left;
            font-style: normal;
            margin-left: 6px;
        }
    }
}
</style>