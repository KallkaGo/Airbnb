import Request from "@/services/request";

function getEntireRoomList(offset = 0, size = 20) {
    return Request.get({
        url: 'entire/list',
        params: {
            offset,
            size
        }
    })
}

export {
    getEntireRoomList
}