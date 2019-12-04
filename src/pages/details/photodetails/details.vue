<template>
  <div>
    <div class="backGround" style="filter: blur(0px)"></div>
    <div class="back">
      <el-button class="backButton" @click="back()">
        <i class="el-icon-back"></i>
        <span class="t">Back</span>
      </el-button>
      <div class="options">
        <router-link to="">
          <el-button>分享</el-button>
        </router-link>
        <el-button>
          <i class="el-icon-star-off"></i>
          <span class="t">12</span>
        </el-button>
        <el-button>
          <i class="el-icon-download"></i>
          <span class="t">12</span>
        </el-button>
      </div>
    </div>
    <div class="description">
      <h3>{{ title }}</h3>
      <p class="calender">
        <span class="t">{{ calendar }}</span>
      </p>
      <p class="viewNumber">
        <i class="t">
          <span class="t">{{ viewsNumber }}</span>
        </i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      title: this.$route.query.title,
      calendar: this.$route.query.calendar,
      viewsNumber: this.$route.query.viewsNumber,
      src: this.$route.query.src
    }
  },
  mounted () {
    let d = document.getElementsByClassName('backGround')[0]
    d.style.backgroundImage = 'url(' + this.src + ')'
    console.log('hhhhhhhhhhhh', d, this.$route.query.src)
  },
  methods: {
    back () {
      window.history.back(-1)
    }
  }
}
</script>

<style scoped>
  .backGround {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-size: cover;
    background-position: center;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    -webkit-filter: blur(30px);
    filter: blur(20px);
  }
.back {
  margin-top: 10px;
}
  .backButton {
    margin-left: 10px;
    float: left;
  }
  .options {
    float: right;
  }
  .description {
    position: absolute;
    height: 15%;
    left: 0;
    bottom: 0;
    padding: .1rem;
    display: block;
    width: 100%;
    color: #fff;
    background: rgba(1, 1, 1, 0.5);
  }
  h3 {
    margin: 0;
  }
  .calender {
    margin: 0;
  }
  .viewNumber {
    margin: 0
  }
</style>
