import { createStore } from 'vuex'
import { getLyric } from '@/request/api/item'

export default createStore({
  state: {
    playList:[{
      //专辑信息
      al:{
        id: 42884,
        name: "The Sun Also Rises",
        picId: '109951167566811100',
        pic: "109951165054951980",
        picUrl:"https://p1.music.126.net/0el5yaTEo3KjeJjL3ZXxmg==/109951165054951989.jpg",
        pic_str: "109951165054951989",
      },
      //歌曲信息
      id:441722,
      name:"The Sun Also Rises",
      ar:[{name:"久石譲"}]
    }],
    playListIndex:0,
    isBtnShow:true,//控制播放状态
    detailShow:false,//歌曲详情页的显示
    lyricList:{},//歌词
    currentTime:0,//当前播放时间
    duration:96,//歌曲总时长
    playAll:true,//值发生改变时播放全部
  },
  getters: {
  },
  mutations: {
    //改变播放按钮样式
    updateIsBtnShow(state,value){
      state.isBtnShow=value
    },
    //改变播放列表
    updatePlayList(state,value){
      state.playList=value
    },
    //改变播放歌曲
    updatePlayListIndex(state,value){
      state.playListIndex=value
    },
    //改变歌曲详情页的显示
    updateDetailShow(state){
      state.detailShow=!state.detailShow
    },
    //改变歌词
    updateLyric(state,value){
      state.lyricList=value
    },
    //改变当前播放时间
    updateCurrentTime(state,value){
      state.currentTime=value
      // console.log(state.currentTime)
    },
    pushPlayList(state,value){
      state.playList.push(value)
    },
    updatePlayAll(state){
      state.playAll=!state.playAll
      // console.log(state.playAll)
    },
    updateDuration(state,value){
      state.duration=value
    }
  },
  actions: {
   async getMusicLyric(context,value){
    let res=await getLyric(value)
    console.log(res);
    context.commit("updateLyric",res.data.lrc)
    }
    // getLyric:async function(context,value){
    //   let res=await getMusicLyric(value)
    //   context.commit("updateLyric",res.data.lrc)
    //   // console.log("Lyric",res)
    // },
    
  },
  modules: {
  }
})
