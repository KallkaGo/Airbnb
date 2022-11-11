import Request from "@/services/request";

 function getHomeGoodPriceData(){
    return Request.get({
        url:'/home/goodprice'
    })
}
function getHomeHighScore(){
     return Request.get({
         url:"/home/highscore"
     })
}
function getHomeDiscount(){
     return Request.get({
         url:"/home/discount"
     })
}
function gethomerecommenddest(){
    return Request.get({
        url:"/home/hotrecommenddest"
    })
}
function getHomelongfor(){
return Request.get({
    url:"/home/longfor"
})
}
function getHomePlus(){
     return Request.get({
         url:'/home/plus'
     })
}

export {
    getHomeGoodPriceData,
    getHomeHighScore,
    getHomeDiscount,
    gethomerecommenddest,
    getHomelongfor,
    getHomePlus
}