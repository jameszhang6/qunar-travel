<template>
  <div class="city">
    <div>
      <div class="city-header">
        <div class="header-title">
          <div><span class="iconfont icon-fanhui back-icon"></span></div>
          <div class="select-city-title">城市选择</div>
        </div>
        <div class="header-input-bar">
          <input type="text" class="header-input" placeholder="输入城市名或拼音">
        </div>
      </div>
      <h1 class="my-location-title">我的位置</h1>
      <div class="my-location-city">
        <div class="my-city">重庆</div>
      </div>
      <h1 class="my-hotcity-title">热门城市</h1>
      <div class="hot-cities">
        <div class="hot-city-list">
          <div v-for="city in hotCities" :key="city.id">{{ city.name }}</div>
        </div>
        <!-- 字母列表 -->
        <div class="letters">
          <div v-for="(item, letter,index) in cities"
               :key="index"
               @click="scrollToLetterCity(`${letter}`)">
            {{ letter }}
          </div>
        </div>
      </div>
      <div style="clear: both;"></div>
      <!-- 每个字母列表城市 -->
      <div ref="wrapper" class="wrapper">
        <div class="content">
          <div v-for="(letterCity,letter,index) in cities" :key="index" :ref="letter">
            <!-- 每个字母 -->
            <h1 class="letter-city">{{ letter }}</h1>
            <!-- 某个字母的城市列表 -->
            <ul style="background:#fff;" >
              <li v-for="city in cities[letter]" :key="city.id" class="city-by-letter">{{ city.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// 将 vuex 中的getters 中所有的函数映射出来
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "City",
  data() {
    return {
      // cities: [],
      // hotCities: [],
      // scroll: null
    }
  },
  methods: {
    scrollToLetterCity(letter) {
      console.log('scroll to: %s',letter);
      // 滚动到哪个DOM元素, this.$refs['A'] === this.$refs.A
      let letterElement = this.$refs[letter][0]
      console.dirxml(letterElement);

      //滚动到 letterElement 元素的位置
      // this.scroll.scrollToElement(letterElement, 500);
      this.scroll.scrollToElement(letterElement, 1000);
      console.log(">>> scrollToElement");
    },
    doSomething() { // 这个函数是演示用，没有用到
      //this.getHotCities();
    },
    // 将 Vuex 中 actions中定义的函数映射为组件的的 method
    ...mapActions(['getHotCities'])
  },
  computed: {
    // 将展开数组的两个元素作为两个计算属性
    ...mapGetters(['cities','hotCities'])
  },
  mounted() {
    /*
    // 使用axios请求 mock（模拟） 数据
    this.axios.get(`/api/china_city_data.json`).then(response => { //成功的回调函数
      // response.data 表示返回的 Promise 对象的数据
      this.cities = response.data.data.cities;
      this.hotCities = response.data.data.hotCities;

    },err => { // 失败回调函数
      console.error(err);
    })
    */
   // 调用 Vuex中 City 模块的 action 方法
   this.getHotCities();
   // 这种方式也可以调到 Vuex 中的 action 函数，一般会在组件的点击操作的时候用
   //  this.$store.dispatch('getHotCities')

    // 创建 better-scroll 实例去接管可滚动的区域
    // this.scroll = new BScroll(this.$refs.wrapper);
    let wrapper = document.querySelector(".wrapper")
    this.scroll = new BScroll(wrapper, {})
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
@import "~styles/mixins.styl"
.city
  height 300px
  background #eaeaea
  .city-header
    display flex  // 弹性盒子模型
    flex-direction column //盒子内元素列排
    background: $bgColor
    color white
    .header-title
      display flex
      flex-direction row //盒子内元素行排（默认）
      justify-content center
      align-items center //盒子内元素垂直居中
      height 60px
      .back-icon
        font-size 20px
        padding-left 5px
      .select-city-title
        flex 1
        text-align center
        font-size 16px
        font-weight bold
    .header-input-bar
      display flex
      margin 5px
      .header-input
        flex 1
        border 0px
        height 30px
        border-radius 4px
        background: #fff;
        text-align center
        font-size 16px
  .my-location-title,.my-hotcity-title,.letter-city
    padding 10px
    font-size 18px
    color $descTextColor
  .hot-cities
    position relative
    float left
    width 100%
    background: #fff;
    .hot-city-list
      float left
      display grid
      grid-template-columns: repeat(3, 1fr); /* fr 单位是一个自适应单位*/
      grid-auto-rows: minmax(25px, auto);
      width 94%
      //border 1px solid red
      padding-top 4px
      padding-bottom 4px
    .hot-city-list > div
      city() // mixins.styl中定义的 stylus 函数
    .letters
      position fixed
      right 1px
      width 2%
      padding-right 10px
      padding-top 10px
      text-align right
      font-size 16px
      color $bgColor
    .letters > div
      height 20px
  .wrapper
    height 500px
    .content /* 滚动内容 */
      .letter-city
        height 18px
        line-height 18px
        vertical-align center
        background: #eaeaea
      .city-by-letter
        height 30px
        line-height 30px
        border-bottom 1px solid #eaeaea
        padding-left 15px
        font-size 16px
        color $darkTextColor
  .my-location-city /* 我的城市 */
    display flex
    align-items center
    height 50px
    background #fff
    .my-city
      width 100px
      height 25px
      line-height 25px
      margin-left 10px
      border 1px solid #d4d2d2
      border-radius 3px
      text-align center //文字水平居中
      vertical-align middle //文字垂直居中
      font-size 16px
      color $darkTextColor
/*
  .hot-cities
    position relative
    float left
    width 100%
    background: #fff;
    .hot-city-list
      float left
      display grid
      grid-template-columns: repeat(3, 1fr); !* fr 单位是一个自适应单位*!
      grid-auto-rows: minmax(25px, auto);
      width 94%
      //border 1px solid red
      padding-top 4px
      padding-bottom 4px
    .hot-city-list > div
        city() // mixins.styl中定义的 stylus 函数
    .letters
      position fixed
      float right
      right 1px
      width 2%
      padding-right 10px
      padding-top 10px
      text-align right
      font-size 16px
      color $bgColor
    .letters > div
      height 20px
*/
</style>
