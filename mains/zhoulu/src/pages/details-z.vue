<template>
    <div class="details">
        <van-nav-bar
            title="英雄详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <!-- <router-lick
            v-for="(item,index) of detail"
            :key="item.id"
        > -->

        <van-card
            :desc="detail.user1"  
            :title="detail.user"
            :thumb="detail.imgs"
        />
        <span class="span1">操作难度：</span>        
        <van-rate v-model="value" />
          <van-collapse v-model="activeNames">
            <van-collapse-item :title="detail.data.skill1" name="1">
                    {{detail.data.SkillsIntroduction1}}
            </van-collapse-item>
            <van-collapse-item :title="detail.data.skill2" name="2">
                    {{detail.data.SkillsIntroduction2}}
            </van-collapse-item>
            <van-collapse-item :title="detail.data.skill3" name="3">
                    {{detail.data.SkillsIntroduction3}}
            </van-collapse-item>
            <van-collapse-item :title="detail.data.skill4" name="4">
                    {{detail.data.SkillsIntroduction4}}
            </van-collapse-item>
            <van-collapse-item :title="detail.data.skill5" name="5">
                    {{detail.data.SkillsIntroduction5}}
            </van-collapse-item>
        </van-collapse>
                    
        <!-- </router-lick> -->
    </div>
</template>

<script>
export default {
    data() {
    return {
      activeNames: ['1'],
      imageURL:'./assets/img/tu5.jpg',
      value: 4,
      detail:{},
    }
  },
    methods: {
    onClickLeft() {
      this.$router.push({
          path:'/home'
      })
    }
  },
    async mounted(){
    let dataName = this.$route.query.dataName;
    let id = this.$route.params.id;
    let res = await axios({url:'/api/'+dataName+'/'+ id});
    if(res.data.error==0){
      this.detail = res.data.data;
    }else{
      this.error=true;
    }

  }
}
</script>


<style scoped>
.span1{display: inline-block;margin:0 8px 0 18px;line-height: 25px}
.van-rate{display: inline-block;height: 25px;}
.van-card__header >>> .van-card__title{margin-top: 20px;margin-bottom: 4px;}
</style>

