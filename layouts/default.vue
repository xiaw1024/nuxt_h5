<template>
    <div class="default-layout">
        <!-- 页头 -->
        <div class="header">
            我是pc端的页头
            <div class="nav">
                <NuxtLink to="/">跳转到首页</NuxtLink>
                <NuxtLink to="/about">跳转到关于我们</NuxtLink>
            </div>
        </div>
        <!-- 页面主题 pages中的页面将放到这里面 -->
        <div class="main">
            <slot></slot>
        </div>
        <!-- 页脚 -->
        <div class="footer">
            我是pc端的页脚
        </div>
    </div>
</template>

<style scoped>
    .header,
    .footer {
        padding: 10px;
        background: #ccc;
        border-bottom: 1px #ccc solid;
    }

    .main {
        padding: 20px;
    }

    .nav {
        display: flex;
        gap: 0 20px
    }
</style>