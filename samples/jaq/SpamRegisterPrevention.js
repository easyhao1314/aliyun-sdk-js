var ALY = require("../../");

var jaq = new ALY.JAQ({
    accessKeyId: 'YOUR ACCESS_KEY',
    secretAccessKey: 'YOUR ACCESS_SECRET',
    endpoint: 'http://jaq.aliyuncs.com',
    apiVersion: '2016-11-23',
});


jaq.spamRegisterPrevention({
    // 必填参数
    PhoneNumber: "",
    Ip: "客户端来源IP",
    ProtocolVersion: "1.0.1",
    Source: 3, //注册来源。1：PC网页；2：移动网页；3：APP,4:其它
    JsToken: "", //对应前端页面的afs_token，source来源为1&2&4时，必填,
    SDKToken: "",//对应sdk中获取的wtoken，source来源为3时，必填,

    // 选填参数
    Email: "",
    UserId: "",
    IdType: 1,
    CurrentUrl: "",
    Agent: "",
    Cookie: "",
    SessionId: "",
    MacAddress: "",
    Referer: "",
    NickName: "",
    CompanyName: "",
    Address: "",
    IDNumber: "",
    BankCardNumber: "",
    ExtendData: ""
}, function (err, data) {
    if (err) {
        //异常
        console.log('error:', err);
        return;
    }
    //此处无异常，但也可能调用失败
    console.log('result:', JSON.stringify(data));
});
