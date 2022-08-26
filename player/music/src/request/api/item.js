import service from "..";
//获取详情页的数据
export function getDetailsMusic(id) {
    return service({
        method: "get",
        url: `/playlist/detail?id=${id}`
    })
};

export function getMusicList(data) {
    return service({
        method: "get",
        url:`/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
    })
};

export function getLyric(data){
return service({
    method:"get",
    url:`/lyric?id=${data}`
})
}
