// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最可爱的琳妹妹",  // 同上...
        "今天是你19岁的生日",
        "这是我们相识相知",
        "一起度过的第4个生日了",
        "逝者如斯",
        "所念皆成过往",
        "但来日可期",
        "愿四季成长，落落大方",
        "在自己的舞台奋力演出",
        "愿岁岁月月天天快乐，不止生日",
        "愿生活简单",
        "身体健康",
        "干了这碗19年的人间烟火",
        "跨过星河迈过月亮迎接更好的自己吧",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "最最可爱的琳妹妹": "./imgs/linmm.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始吧^-^",
        play: "来点音乐( ͡° ͜ʖ ͡° )",
        bannar_coming: "空荡荡？_？",
        balloons_flying: "好像少点东西=_=",
        cake_fadein: "蛋糕✿◔‿◔✿",
        light_candle: "点上蜡烛(๑￣ ̫ ￣๑)",
        wish_message: "ʜᴀ͟ᴘ͟ᴘ͟ʏ ᴇᴠᴇʀʏᴅᴀʏ̆̈！",
        story: "A MESSAGE FOR YOU",
    }
};
