<template>
    <div class="home">
        <van-row>
            <van-col span="4">
            LOL
            </van-col>
            <van-col span="16">
            <!-- <a href="#" class="logo1">英雄联盟</a> -->
            英雄联盟
            </van-col>
            <van-col span="4">
            <van-icon class="qr" name="qr" size="40px" color="blue" />
            </van-col>
        </van-row>
        <van-swipe :autoplay="3000" vertical  :height="220">
            <van-swipe-item
                 indicator-color="#000"
                v-for="(item,index) of imges"
                :key="index"
            >
            <img :src="item" class="swipe-item-img" >               
            </van-swipe-item>
        </van-swipe>
        <van-search
            shape="round"
            placeholder="请输入搜索关键词" 
            v-model="value"
            label="英雄人物"
            @search="onSearch"
            show-action
            >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>

       <!-- <van-card
            v-for="(item) of list"
            :key="item.id"
            :desc="item.user1"
            :title="item.user"
            :thumb="item.imgs"
            @click="abc"
        /> -->
        <list :list="list" :dataName="'home'"></list>
        <!-- </van-card> -->


    </div>
</template>
<script>

import list from "../components/list-z"
export default {
    data(){
        return {
            value:'',
            imges:[
                './assets/img/tu1.jpg',
                './assets/img/tu2.jpg',
                './assets/img/tu3.jpg',
                './assets/img/tu4.jpg',
            ],
            list:[]
        }
    },
    methods:{
        onSearch(){},
        abc(){
            this.$router.push({
          path:'/details'
      })
        }
    },
    components:{list},
    mounted(){
        axios({url:'/api/home'})
        .then(
            res=>{

                this.list = res.data.data;
                // console.log(this.list)
            }
        )
    }

}
</script>

<style scoped>
.logo{text-align: center;line-height: 40px;}
.logo1{text-align: center;line-height: 40px;width: 100%;}
.van-col--16{height: 40px;text-align: center;line-height: 40px;color: blue;}
.van-col--4{height: 40px;text-align: center;line-height: 40px;color: blue;}
.swipe-item-img{width: 100%;}
.van-swipe{height: 150px;margin-top: 10px;}
.van-card__header >>> .van-card__title{margin-top: 20px;margin-bottom: 4px;}
</style>

