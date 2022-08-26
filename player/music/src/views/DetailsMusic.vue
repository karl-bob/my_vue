<template>
  <div>
    <DetailsMusicTop v-show="state.DetailsList" :playList="state.DetailsList" />
    <DetailsMusicList 
    v-show="state.songs" 
    :songs="state.songs"
    :subscribedCount='state.DetailsList.subscribedCount'
     />
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getDetailsMusic,getMusicList } from "../request/api/item";
import DetailsMusicTop from "../components/DetailsMusic/DetailsMusicTop.vue";
import DetailsMusicList from "../components/DetailsMusic/DetailsMusicList.vue";
export default {
  setup() {
    const state = reactive({
      DetailsList: {},   //详情页的数据
      songs:[]    //详情页的歌单
    });
    onMounted(async () => {
      //获取参数id
      let id = useRoute().query.id;
      let detailsMusic = await getDetailsMusic(id);
      state.DetailsList = detailsMusic.data.playlist;

      let musicList=await getMusicList({ id, limit: 20, offset: 0})
      state.songs=musicList.data.songs
    });
    return { state };
  },
  components: {
    DetailsMusicTop,
    DetailsMusicList
  },
};
</script>
<style>
</style>