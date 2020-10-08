<template>
  <div class="nav"
       :class="{ 'nav-bar-wrap': navBarFixed }">
    <div class="logo">
      <router-link to="/">
        <img id="logo-img" src=""/>
      </router-link>
    </div>
    <div id="menu">
      <el-menu :default-active="activeIndex"
               class="el-menu-header"
               mode="horizontal"
               @select="handleSelect"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               router>
        <el-menu-item v-for="item in routes"
                      :key="item.path"
                      :index="item.path"
                      :class="
                        $route.path === item.path
                            ? 'my-el-menu-item tabActive'
                            : 'my-el-menu-item'
                    ">
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>

</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      routes: [
        {
          path: '/main',
          name: '首页'
        },
        {
          path: '/cal',
          name: '统计'
        },
        {
          path: '/about',
          name: '关于'
        }
      ],
      navBarFixed: false,
      direction: 'rtl',
      height: ''
    }
  },
  computed: {
    activeIndex: function () {
      return this.$route.path
    }
  },
  mounted () {
    // 监听滚动条
    window.addEventListener('scroll', this.watchScroll)
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    watchScroll () {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 399) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    }
  }
}
</script>

<style scoped>
  .nav{
    width: 100%;
    height: 60px;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    z-index: 1333;
    display: flex;
    background-color: #545c64;
    justify-content: space-between;
  }
  .nav-bar-wrap {
    position: fixed;
    box-shadow: 0 3px 12px 2px rgba(0, 0, 0, 0.25);
    top: 0;
    z-index: 1333;
    animation: scrollSlide 1s;
  }
  #menu{
    margin-right: auto;
  }
  .el-menu-header{
   background-color: #545c64;
    margin-left: auto;
  }
  .logo{
    height: 60px;
    display: flex;
  }
  #logo-img {
    display: flex;
    height: 100%;
    margin-right: 10px;
  }
  .my-el-menu-item span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 80px;
    text-align: center;
  }
</style>
