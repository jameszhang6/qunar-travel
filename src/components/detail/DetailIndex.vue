<template>
    <div>
        <h1>{{ scenicSpotDetail.sightName }} </h1>
        <img :src="scenicSpotDetail.bannerImg" alt="" srcset="">
        <h1>景点一览</h1>
        <img v-for="(item,index) in scenicSpotDetail.gallaryImg" :src="item" :key="index" class="gallary">
        <!-- 每类票的信息 -->
        <div v-for="(categoryTicket,index) in scenicSpotDetail.categoryList" :key="'category'+index">
            <h1><span class="iconfont icon-youhuiquan ticket-icon"></span> {{ categoryTicket.title }}</h1>
            <ul class="category-ticket">
                <li v-for="(ticket,index) in categoryTicket.children" :key="'ticket'+index">
                    <div class="ticket">
                        <div class="ticket-title">{{ ticket.title }}</div>
                        <div class="ticket-price">¥{{ ticket.price }}</div>
                    </div>
                </li>
            </ul>
            <!-- <hr style="color: #d3d7d4;height:1px;"> -->
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DetailIndex',
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(['getScenicSpotDetailById'])
    },
    created() { // 生命周期钩子函数
        console.log('景点 id：', this.$route.params.id)
        const { id } = this.$route.params // 效果一样 const spotId = this.$route.params.id
        this.getScenicSpotDetailById(id)
    },
    computed: {
        // 将 Vuex 中的 getter 属性映射为组件的计算属性，也就说是组件有了一个 scenicSpotDetail 属性
        ...mapGetters(['scenicSpotDetail'])
    },
}
</script>

<style lang="stylus" scoped>
.gallary
  margin 3px
.ticket-icon
  margin-left 5px
  color #78cdd1  
.category-ticket
    display flex
    flex-direction column
    margin 3px
    border-bottom 1px solid #d3d7d4
    .ticket
      display flex
      font-size 14px
      .ticket-title
        padding-left 10px
      .ticket-price
        flex 1
        text-align right 
        padding-right 6px
        font-size 16px
        color #f47920

</style>