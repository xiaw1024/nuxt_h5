<template>
    <div class="default-layout">
        <!-- 页头 -->
        <div class="header">
            <img class="logo" src="~/assets/img/logo.png" alt="">
            <!-- <div class="nav">
                <NuxtLink to="/">跳转到首页</NuxtLink>
                <NuxtLink to="/about">跳转到关于我们</NuxtLink>
            </div> -->
        </div>
        <img class="bread" src="~/assets/img/bread.png" alt="">
        <!-- 页面主题 pages中的页面将放到这里面 -->
        <div class="main">
            <slot></slot>
        </div>
        <!-- 页脚 -->
        <div class="footer">
            <div class="left">
                <img src="~/assets/img/logo.png" alt="">
                <div class="more">
                    <NuxtLink to="/contact">Contact Us</NuxtLink>
                    <span class="split">|</span>
                    <NuxtLink to="/about">About Us</NuxtLink>

                </div>
            </div>
            <div class="right">
                <p>Follow us</p>
                <div class="partner-list">
                    <a href="http://ww.baidu.com">
                        <img class="partner" src="~/assets/img/face.png" alt="">
                    </a>
                    <a href="http://ww.baidu.com">
                        <img class="partner" src="~/assets/img/ins.png" alt="">
                    </a>
                    <a href="http://ww.baidu.com">
                        <img class="partner" src="~/assets/img/tiktok.png" alt="">
                    </a>
                    <a href="http://ww.baidu.com">
                        <img class="partner" src="~/assets/img/twitter.png" alt="">
                    </a>
                    <a href="http://ww.baidu.com">
                        <img class="partner" src="~/assets/img/youtobe.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './../assets/styles/pc/index.scss';
    .header{
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
        
        .logo{
            width: 210px;
        }
    }
    .bread{
            position: fixed;
            left: 60px;
            top: 45px;
            width: 40px;
            cursor: pointer;
        z-index: 10;

        }
    .footer{
        width: 100%;
        min-width: 1200px;
        height: 256px;
        background-color: rgba(0, 30, 67, 1);
        display: flex;
        justify-content: space-around;
        align-items: center;

        .left{
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: flex-start;
                .logo{
                width: 210px;
                }
            .more{
                font-family: HelveticaNeue;
                font-size: 14px;
                color: #FFFFFF;
                line-height: 16px;
                text-align: center;
                margin-top: 15px;
                a{
                    color: #FFFFFF;
                }
                .split{
                    margin: 0 15px;
                }
            }
        }
        .right{
            p{
                font-family: GurmukhiSangamMN, GurmukhiSangamMN;
                font-weight: bold;
                font-size: 24px;
                color: #FFFFFF;
                line-height: 31px;

            }
            .partner-list{
                display: flex;

            .partner{
                width: 30px;
                height: 30px;
                margin-right: 10px;
                background-color: #fff;
                border-radius: 50%;
            }
            }
        }
    }
    
</style>