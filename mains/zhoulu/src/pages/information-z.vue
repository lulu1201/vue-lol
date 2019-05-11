<template>
    <div class="information">
        <van-nav-bar
            title="联盟最新资讯"
        />
        <van-panel
        v-for="(item,index) of lista"
        :key="index"
         :title="item.title" 
         :desc="item.cont" 
         :status="'更新时间：'+item.date">
            <img class="imgs" :src="item.ims" alt="">
            <span class="p1">{{item.use}}</span>
        </van-panel>
        
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            lista:[]
        }
    },
    computed:mapGetters([
        'info'
    ]),
    mounted(){
            this.$store.dispatch('INFO',)
            this.lista = this.$store.state.info
    }

}
</script>

<style scoped>
    .van-nav-bar{background:#6495ED;}
    .imgs{height: 20px;width: 20px;float: left;margin: 2px 0 0 4px;border-radius: 50%;}
    .p1{display: inline-block;font-size: 12px;line-height: 20px;margin: 4px 0 0 10px}
    .van-cell__value{font-size: 12px;}
    .van-panel__content{height: 26px;}
    .van-panel__header{background:#fafafa;}
    .van-hairline--top-bottom{margin: 0 0 10px 0;}
    .van-cell-group{background: #eeeded;}
    .van-cell__label{width: 260px;}
</style>

