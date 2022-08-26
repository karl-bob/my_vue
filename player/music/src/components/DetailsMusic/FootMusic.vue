<template>
  <div class="footerMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].name }}</p>
        <!-- <span>横向滑动切换上下首</span> -->
      </div>
    </div>

    <div class="footerRight">
      <svg
        class="icon shangyishou"
        aria-hidden="true"
        @click="go(-1), updateAudio(0)"
      >
        <use xlink:href="#icon-shangyishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play" v-if="isBtnShow">
        <use xlink:href="#icon-bofang"></use>
      </svg>

      <svg class="icon" aria-hidden="true" @click="stop" v-else>
        <use xlink:href="#icon-zanting"></use>
      </svg>

      <svg
        class="icon xiayishou1"
        aria-hidden="true"
        @click="go(1), updateAudio(0)"
      >
        <use xlink:href="#icon-xiayishou1"></use>
      </svg>

      <svg
        class="icon"
        aria-hidden="true"
        @click="updateMusic(1), updateAudio(0)"
      >
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
    </div>

    <audio
      ref="audio"
      preload="auto"
      @timeupdate="updateTime"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>

    <van-popup
      position="bottom"
      v-model:show="detailShow"
      :style="{ height: '100%', width: '100%' }"
    >
      <MusicInfo
        :musicList="playList[playListIndex]"
        :play="play"
        :stop="stop"
        :isBtnShow="isBtnShow"
        :addDuration="addDuration"
        :audioStart="audioStart"
        :audioEnd="audioEnd"
        @child-event="updateAudio"
        :updateAudio="updateAudio"
      />
    </van-popup>
  </div>
</template>
<script>
import MusicInfo from "../MusicInfo/MusicInfo.vue";
import getLyric from "../../request/api/item";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  setup() {},
  mounted() {
    this.$store.dispatch("getMusicLyric", this.playList[this.playListIndex].id);
  },
  updated() {
    this.$store.dispatch("getMusicLyric", this.playList[this.playListIndex].id);
  },
  computed: {
    ...mapState([
      "playList",
      "playListIndex",
      "isBtnShow",
      "detailShow",
      "playAll",
    ]),
  },
  methods: {
    ...mapMutations([
      "updateIsBtnShow",
      "updateDetailShow",
      "updateCurrentTime",
      "updatePlayListIndex",
      "updateDuration",
    ]),
    ...mapActions(["getLyric"]),
    play() {
      // if(this.$refs.audio.paused){
      this.$refs.audio.play();
      this.updateIsBtnShow(false);
      // }
    },
    stop() {
      this.$refs.audio.pause();
      this.updateIsBtnShow(true);
    },
    startPlaying() {
      this.$refs.audio.volume = 0.2;
      this.updateIsBtnShow(false);
    },
    updateTime(e) {
      this.updateCurrentTime(e.target.currentTime);
      // this.updateTimeData(e);
      // console.log(e)
    },
    go(num) {
      let index = this.playListIndex + num;
      if (index < 0) {
        index = this.playList.length - 1;
      } else if (index == this.playList.length) {
        index = 0;
      }
      this.updatePlayListIndex(index);
      // this.playMusic();
    },
    addDuration() {
      this.updateDuration(this.$refs.audio.duration);
    },
    //计算歌曲总时长
    transTime(value) {
      var time = "";
      var h = parseInt(value / 3600);
      value %= 3600;
      var m = parseInt(value / 60);
      m = m < 10 ? "0" + m : m;
      var s = parseInt(value % 60);
      s = s < 10 ? "0" + s : s;
      time = m + ":" + s;
      return time;
    },
    // updateTimeData(e) {
    //   //更新进度条、当前播放时间和歌曲总时间
    //   var value = e.target.currentTime / e.target.duration;
    //   // console.log(value)
    //   this.sliderValue = value * 100;
    //   this.audioStart = this.transTime(e.target.currentTime);
    //   // console.log(e.target.duration)
    //   if (isNaN(e.target.duration)) return;
    //   this.audioEnd = this.transTime(e.target.duration);
    // },
    updateAudio(value) {
      // console.log('父组件',value)
      this.$refs.audio.currentTime = value;
    },
  },
  watch: {
    //监视播放状态，调整播放按钮
    playListIndex() {
      this.$refs.audio.autoplay = true;
      this.updateIsBtnShow(false);
    },
    playList() {
      if (this.isBtnShow) {
        this.$refs.audio.autoplay = true;

        this.updateIsBtnShow(false);
      }
    },

  },
  components: {
    MusicInfo,
  },
};
</script>
<style lang="less" scoped>
.footerMusic {
  width: 100%;
  height: 1.4rem;
  position: fixed;
  z-index: 99;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      //指定动画循环
      animation: rotation 8s linear infinite;
      //暂停动画
      animation-play-state: paused;
    }
    img.active {
      //运行动画
      animation-play-state: running;
    }
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    p {
      width: 3rem;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      color: #999;
      font-size: 0.24rem;
    }
  }
  .footerRight {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    // background-color: aqua;
    align-items: center;
    margin-right: 0.3rem;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  audio {
    position: absolute;
    z-index: 99;
  }
}
</style>