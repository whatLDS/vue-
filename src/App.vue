<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab ">
      <router-link v-for="item in products" :key="item.label" :value="item.value" :to="{ path: item.path }" tag="div"
                   class="tab-item" active-class="active">
        {{ item.name }}
      </router-link>
    </div>
    <router-view keep-alive></router-view>
  </div>
</template>
<script>
  import header from './components/header/header'
  export default {
    name: 'App',
    components: {
      'v-header': header
    },
    data () {
      return {
        products: [
          {
            name: '商品',
            path: '/goods'
          },
          {
            name: '评论',
            path: '/comments'
          },
          {
            name: '商家',
            path: '/seller'
          }
        ],
        seller: {}
      }
    },
    created () {
      this.$http.jsonp('http://192.168.43.141:8081/api/seller').then((res) => {
          this.seller = res.data
          console.log(res.data)
      }, (error) => {
        console.log(error)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))

    .tab-item
      flex: 1
      text-align: center
      display: block
      font-size: 14px
      color: rgb(77, 85, 93)

      &.active
        color: rgb(240, 20, 20)
</style>
