<template>
  <div>
    <div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      default-active="1">
        <el-menu-item index="1">主页</el-menu-item>
        <el-menu-item index="2">喜欢榜</el-menu-item>
        <el-menu-item index="3">关于</el-menu-item>
        <el-row class="buttonClass" v-show="isLogin">
          <router-link :to="{name: 'login'}">
            <el-button type="primary">登录</el-button>
          </router-link>
          <router-link to="/regist">
            <el-button type="primary">注册</el-button>
          </router-link>
        </el-row>
        <el-popover
          placement="top"
          width="50"
          v-model="visible"
          v-show="!isLogin">
          <div class="dropdown" style="text-align: center;">
            <li style="margin-top: 0">
              <router-link to="">喜欢</router-link>
            </li>
            <li>
              <div @click="signOut()">退出</div>
            </li>
          </div>
          <el-avatar
            class="user" :size="45"
            style="margin-right: 10px; float: right; margin-top: 5px"
            slot="reference"></el-avatar>
        </el-popover>
      </el-menu>
    </div>
    <div class="container">
      <user></user>
      <div class="item" @mouseenter="enter(index)" @mouseleave="leave(index)" v-for="(photo, index) in photos" :key="photo">
        <div class="card progressive">
          <div @click="jumpToDetails(index, photo)">
            <el-image
                :src="photo.src" :fit="fit"/>
          </div>
        </div>
        <div :class="'description des-' + index">
          <h3>{{photo.title}}</h3>
          <p class="calender">{{photo.calendar}}</p>
          <p class="views">{{photo.viewsNumber}}</p>
        </div>
        <div :class="'options op-' + index">
          <router-link to="">
            <el-button>分享</el-button>
          </router-link>
          <router-link to="">
            <el-button>
              <i class="el-icon-star-off"></i>
              <span class="t">12</span>
            </el-button>
          </router-link>
          <router-link to="">
            <el-button>
              <i class="el-icon-download"></i>
              <span class="t">12</span>
            </el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <el-button type="primary" @click="click()">Click</el-button>
    </div>
    <div class="pagination">
      <el-pagination
        background
        page-size="12"
        layout="prev, pager, next"
        :total="120">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isLogin: this.$route.query.isLogin, // 头像框显示
      num: 2,
      info: '',
      photos: [
        {
          title: 'lalal',
          calendar: '2000.0.0',
          viewsNumber: 120,
          src: 'http://h1.ioliu.cn/bing/AtchafalayaCypress_ZH-CN0183179230_1920x1080.jpg'
        },
        {
          title: 'lalalasda',
          calendar: '2001.0.0',
          viewsNumber: 150,
          src: 'http://h1.ioliu.cn/bing/OverwinteringMonarchs_ZH-CN0248511586_1920x1080.jpg'
        }
      ]
    }
  },
  methods: {
    enter (index) {
      console.log('hover')
      let description = document.getElementsByClassName('des-' + index)[0]
      let options = document.getElementsByClassName('op-' + index)[0]
      description.setAttribute('style', 'opacity: 1;')
      options.setAttribute('style', 'opacity: 1;')
    },
    leave (index) {
      let description = document.getElementsByClassName('des-' + index)[0]
      let options = document.getElementsByClassName('op-' + index)[0]
      description.setAttribute('style', 'opacity: 0;')
      options.setAttribute('style', 'opacity: 0;')
    },
    jumpToDetails (index, photo) {
      console.log('hjump')
      this.$router.push({
        path: '/details',
        query: {
          title: photo.title,
          calendar: photo.calendar,
          viewsNumber: photo.viewsNumber,
          src: photo.src
        }
      })
    },
    signOut () {
      console.log(this.$store.state.isLogin)
      this.$store.commit('show')
      location.reload()
    },
    click () {
      this.$axios.get('https://bing.ioliu.cn/v1?d=2')
        .then(function (response) {
          console.log(response)
        })
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
.container {
  font-size: 0;
  position: relative;
  margin: 0 auto;
  margin-top: 5px;
}
/*div {*/
  /*display: block;*/
/*}*/
.item {
  display: inline-block;
  width: 33%;
  height: auto;
  position: relative;
  border: none;
}
.card {
  display: block;
  height: 100%;
  background: #dedede;
  position: relative;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}
.progressive {
  overflow: hidden;
  position: relative;
  background: #efefef;
}
/*.progressive__img {*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*transform: translateZ(0);*/
/*}*/
/*.progressive--is-loaded {*/
  /*filter: blur(20px);*/
  /*animation: sharpen 0.5s both;*/
/*}*/
.description  {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding: .05rem;
  display: block;
  color: #fff;
  opacity: 0;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
  z-index: 1;
  pointer-events: none;
}
h3 {
  float: left;
  height: 20px;
  width: 100%;
  text-align: left;
  font-size: 10px;
  letter-spacing: .01rem;
  font-weight: 400;
  color: #fff;
  padding: .02rem;
  margin-top: 0;
  margin-bottom: 0;
}
p {
  margin-top: 0;
  margin-bottom: 0;
  font-size: .12rem;
  text-align: left;
}
.calender {
  width: 100%;
  float: left;
}
.views {
  width: 100%;
  float: left;
}
.buttonClass {
  margin-top: 10px;
  margin-right: 5px;
  float: right;
}
  .options {
    font-size: .12rem;
    position: absolute;
    right: .05rem;
    bottom: .05rem;
    padding: .05rem;
    display: block;
    text-align: right;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    opacity: 0;
    z-index: 3;
  }
  li {
    margin-top: 5px;
    list-style-type:none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .pagination {
    text-align: center;
    margin-top: 20px;
  }
</style>
