<template>
    <div class="footer">
        <van-tabbar
            v-model="active"
            active-color="#07c160"
            >
            <van-tabbar-item icon="home-o" to="/home">
                首页
            </van-tabbar-item>
            <van-tabbar-item icon="volume-o" to="/information">
                资讯
            </van-tabbar-item>
            <van-tabbar-item icon="smile-o" to="/amusement">
                娱乐
            </van-tabbar-item>
            <van-tabbar-item icon="shop-collect-o" to="/shoppingcart">
                周边商城
            </van-tabbar-item>
            <van-tabbar-item icon="user-o" to="/user">
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
        active: 0,
        }
    },
    methods:{

    }
}
</script>

<style>
</style>

