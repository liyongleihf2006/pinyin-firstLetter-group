# pinyin-firstLetter-group

以首字母分组传入的文字数组

```js
    //可以直接传入字符串数组
    pinyin_firstLetter_group(['阿','八','白鸽', '麻雀', '大象', '狗', '猫', "鸡","狗","人员","鸡","李明","d","DDD","！","a","b哈","ccc",""])
    //{"a":["a","阿"],"b":["b哈","八","白鸽"],"c":["ccc"],"d":["d","DDD","大象"],"e":[],"f":[],"g":["狗","狗"],"h":[],"j":["鸡","鸡"],"k":[],"l":["李明"],"m":["麻雀","猫"],"n":[],"o":[],"p":[],"q":[],"r":["人员"],"s":[],"t":[],"w":[],"x":[],"y":[],"z":[],"*":["","！"]}
    //也可以传入对象,然后指定使用对象的哪个属性来分组
    var data = [{
        'name':'沉鱼落雁',
        'username':'chenzy'
    },{
        'name':'沉鱼落雁',
        'username':'chenzy2'
    },{
        'name':'测试号',
        'username':'ceshihao'
    },{
        'name':'田田',
        'username':'tiantian'
    }];
    pinyin_firstLetter_group(data,function(item){return item.name},true)//第三个参数true的时候把空组去掉
    //{"C":[{"name":"测试号","username":"ceshihao"},{"name":"沉鱼落雁","username":"chenzy"},{"name":"沉鱼落雁","username":"chenzy2"}],"S":[{"name":"田田","username":"tiantian"}]}
```

[simple](https://liyongleihf2006.github.io/pinyin-firstLetter-group/)
