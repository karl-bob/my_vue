<template>
  <div>
    <div class="itemMusicTop">
      <img :src="playList.coverImgUrl" alt="" class="bgImg" />
      <div class="itemLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="itemRight">
        <svg class="icon" aria-hidden="true" @click="$router.push('/Search')">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31liebiao"></use>
        </svg>
      </div>
    </div>

    <div class="itemTopContent">
      <div class="contentLeft">
        <img :src="playList.coverImgUrl" alt="" />
        <span class="playCount">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang1"></use>
          </svg>
          <span> {{ modCount(playList.playCount) }}</span>
        </span>
      </div>

      <div class="contentRight">
        <p class="title">{{ playList.name }}</p>

        <div class="author">
          <img :src="playList.creator.avatarUrl" alt="" />
          <span>{{ playList.creator.nickname }}</span>
          <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-jiantouyou"></use>
          </svg>
        </div>

        <div class="content">
          <p>{{ playList.description }}</p>

        </div>
      </div>
    </div>

    <div class="itemTopNav">
      <div class="navItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31xiaoxi"></use>
        </svg>
        <span>{{ playList.commentCount }}</span>
      </div>
      <div class="navItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playList.shareCount }}</span>
      </div>
      <div class="navItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="navItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xuanze"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    // console.log(props);
    props.playList.creator = "";

    function modCount(num) {
      if (num >= 100000000) {
        return (
          (+(Math.round(num / 100000000 + "e2") + "e-2")).toFixed(1) + "亿"
        );
      } else if (num > 10000) {
        return (+(Math.round(num / 10000 + "e2") + "e-2")).toFixed(1) + "万";
      }
    }
    return { modCount };
  },
  props: ["playList"],
};
</script>

<style lang="less">
.itemMusicTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .itemLeft,
  .itemRight {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.2rem;
    span {
      font-size: 0.5rem;
      color: rgb(41, 141, 255);
    }
    .icon {
      fill: rgb(41, 141, 255); //填充颜色
    }
  }
  .bgImg {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    filter: blur(30px);
  }
}
.itemTopContent {
  width: 100%;
  height: 3rem;
  // padding: 0.2rem;
  //   margin-top: 0.3rem;
//   background-color: rgb(10, 62, 62);
  display: flex;
  justify-content: space-between;
  .contentLeft {
    width: 2.6rem;
    height: 2.6rem;
    // background-color: rgb(244, 101, 5);
    position: relative;
    margin-left: 0.4rem;
    img {
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.4rem;
    }
    .playCount {
      position: absolute;
      padding: 0.1rem;
      right: 0;
      bottom: 0;
      z-index: 99;
      color: #fff;
      font-size: 0.2rem;
      border-radius: 0.4rem;
      vertical-align: middle;

      .icon {
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.04rem;
      }
    }
  }
  .contentRight {
    width: 66%;
    height: 2.6rem;
    // background-color: rgb(112, 206, 29);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      width: 100%;
      height: 0.3rem;
    //   background-color: rgb(35, 65, 236);
      font-size: 0.3rem;
      line-height: 0.3rem;
      font-weight: 900;
      color: #fff;
    }
    .author,
    .content {
      width: 100%;

      color: #eee;
      .icon {
        fill: #eee;
      }
    }
    .author {
      height: 0.6rem;
    //   background-color: rgb(0, 132, 255);
      img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        height: 0.6rem;
        // background-color: rgb(10, 118, 70);
        padding: 0 0.2rem;
      }
      .icon {
        width: 0.26rem;
        height: 0.26rem;
        // margin-top: -0.08rem;
        vertical-align: middle;
      }
    }
    .content {
      //   margin-bottom: 0.1rem;
      height: 1rem;
    //   background-color: rgb(255, 0, 242);
      //   align-items: center;
      p {
        width: 100%;
        // height: 100%;
        font-size: 0.24rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /*  -webkit-line-clamp 限制在一个块元素显示的文本的行数 */
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        // overflow: hidden;
      }
    }
  }
}
.itemTopNav {
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
  .navItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .icon {
      height: 45%;
      fill: #fff;
    }
    span {
      display: block;
      height: 0.4rem;
      margin-top: 0.1rem;
    }
  }
}
</style>