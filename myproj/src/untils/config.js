module.exports = {
    //调试模式开关，调试模式下只调用本地数据
    debug: true,
    //学校数据配置名称，学校英文缩写
    school: "gdst",
    //高德路线规划密钥，必须加入https://restapi.amap.com为request合法域名
    //密钥申请地址http://lbs.amap.com/api/javascript-api/summary/
    key: "",
    //地图更新地址，用于热修补，无需每次都提交审核
    updateUrl: "https://www.qq.com/json.json",
    //图片CDN域名
    imgCDN: "https://nepu-1251611395.cos.ap-shanghai.myqcloud.com/"
}
let debug = true;
let school= "gdst";
let key = "6c3992047b49d010a41bf902c95a68d9" ;
let updateUrl = "https://www.qq.com/json.json";
let imgCDN = "https://nepu-1251611395.cos.ap-shanghai.myqcloud.com";