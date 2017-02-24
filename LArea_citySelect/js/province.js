/**
 * LArea citySelect 省市区联动移动端控件
 *
 * v2.0.0
 *
 * author:但汉奇
 *
 * https://github.com/godkillerdan/LArea-citySelect
 *
 * Copyright 2017
 * 最近修改于： 2017-2-24 14:50:35
 *
 *
 */
var data = {"result":true,"msg":"","data":[{"code":"1","name":"北京","cities":[{"code":"2","name":"北京市","provinceCode":null}]},{"code":"21","name":"上海","cities":[{"code":"22","name":"上海市","provinceCode":null}]},{"code":"42","name":"天津","cities":[{"code":"43","name":"天津市","provinceCode":null}]},{"code":"62","name":"重庆","cities":[{"code":"63","name":"重庆市","provinceCode":null}]},{"code":"104","name":"安徽","cities":[{"code":"105","name":"合肥市","provinceCode":null},{"code":"113","name":"安庆市","provinceCode":null},{"code":"125","name":"蚌埠市","provinceCode":null},{"code":"133","name":"亳州市","provinceCode":null},{"code":"138","name":"巢湖市","provinceCode":null},{"code":"144","name":"池州市","provinceCode":null},{"code":"149","name":"滁州市","provinceCode":null},{"code":"158","name":"阜阳市","provinceCode":null},{"code":"167","name":"淮北市","provinceCode":null},{"code":"172","name":"淮南市","provinceCode":null},{"code":"179","name":"黄山市","provinceCode":null},{"code":"187","name":"六安市","provinceCode":null},{"code":"195","name":"马鞍山市","provinceCode":null},{"code":"200","name":"宿州市","provinceCode":null},{"code":"206","name":"铜陵市","provinceCode":null},{"code":"211","name":"芜湖市","provinceCode":null},{"code":"219","name":"宣城市","provinceCode":null}]},{"code":"227","name":"福建","cities":[{"code":"228","name":"福州市","provinceCode":null},{"code":"242","name":"龙岩市","provinceCode":null},{"code":"250","name":"南平市","provinceCode":null},{"code":"261","name":"宁德市","provinceCode":null},{"code":"271","name":"莆田市","provinceCode":null},{"code":"277","name":"泉州市","provinceCode":null},{"code":"290","name":"三明市","provinceCode":null},{"code":"303","name":"厦门市","provinceCode":null},{"code":"310","name":"漳州市","provinceCode":null}]},{"code":"322","name":"甘肃","cities":[{"code":"323","name":"兰州市","provinceCode":null},{"code":"332","name":"白银市","provinceCode":null},{"code":"338","name":"定西市","provinceCode":null},{"code":"346","name":"甘南藏族自治州","provinceCode":null},{"code":"355","name":"嘉峪关市","provinceCode":null},{"code":"356","name":"金昌市","provinceCode":null},{"code":"359","name":"酒泉市","provinceCode":null},{"code":"367","name":"临夏回族自治州","provinceCode":null},{"code":"376","name":"陇南市","provinceCode":null},{"code":"386","name":"平凉市","provinceCode":null},{"code":"394","name":"庆阳市","provinceCode":null},{"code":"403","name":"天水市","provinceCode":null},{"code":"411","name":"武威市","provinceCode":null},{"code":"416","name":"张掖市","provinceCode":null}]},{"code":"423","name":"广东","cities":[{"code":"424","name":"广州市","provinceCode":null},{"code":"437","name":"潮州市","provinceCode":null},{"code":"441","name":"东莞市","provinceCode":null},{"code":"442","name":"佛山市","provinceCode":null},{"code":"448","name":"河源市","provinceCode":null},{"code":"455","name":"惠州市","provinceCode":null},{"code":"461","name":"江门市","provinceCode":null},{"code":"469","name":"揭阳市","provinceCode":null},{"code":"475","name":"茂名市","provinceCode":null},{"code":"482","name":"梅江区","provinceCode":null},{"code":"483","name":"梅州市","provinceCode":null},{"code":"491","name":"清远市","provinceCode":null},{"code":"500","name":"汕头市","provinceCode":null},{"code":"508","name":"汕尾市","provinceCode":null},{"code":"513","name":"韶关市","provinceCode":null},{"code":"524","name":"深圳市","provinceCode":null},{"code":"531","name":"阳江市","provinceCode":null},{"code":"536","name":"云浮市","provinceCode":null},{"code":"542","name":"湛江市","provinceCode":null},{"code":"552","name":"肇庆市","provinceCode":null},{"code":"561","name":"中山市","provinceCode":null},{"code":"562","name":"珠海市","provinceCode":null}]},{"code":"566","name":"广西","cities":[{"code":"567","name":"南宁市","provinceCode":null},{"code":"580","name":"百色市","provinceCode":null},{"code":"593","name":"北海市","provinceCode":null},{"code":"598","name":"崇左市","provinceCode":null},{"code":"606","name":"防城港市","provinceCode":null},{"code":"611","name":"贵港市","provinceCode":null},{"code":"617","name":"桂林市","provinceCode":null},{"code":"635","name":"河池市","provinceCode":null},{"code":"647","name":"贺州市","provinceCode":null},{"code":"652","name":"来宾市","provinceCode":null},{"code":"659","name":"柳州市","provinceCode":null},{"code":"670","name":"钦州市","provinceCode":null},{"code":"675","name":"梧州市","provinceCode":null},{"code":"683","name":"玉林市","provinceCode":null}]},{"code":"690","name":"贵州","cities":[{"code":"691","name":"贵阳市","provinceCode":null},{"code":"702","name":"安顺市","provinceCode":null},{"code":"709","name":"毕节地区","provinceCode":null},{"code":"718","name":"六盘水市","provinceCode":null},{"code":"723","name":"黔东南苗族侗族自治州","provinceCode":null},{"code":"740","name":"黔南布依族苗族自治州","provinceCode":null},{"code":"753","name":"黔西南布依族苗族自治州","provinceCode":null},{"code":"762","name":"铜仁地区","provinceCode":null},{"code":"773","name":"遵义市","provinceCode":null}]},{"code":"788","name":"海南","cities":[{"code":"789","name":"海口市","provinceCode":null},{"code":"794","name":"白沙黎族自治县","provinceCode":null},{"code":"795","name":"保亭黎族苗族自治县","provinceCode":null},{"code":"796","name":"昌江黎族自治县","provinceCode":null},{"code":"797","name":"澄迈县","provinceCode":null},{"code":"798","name":"儋州市","provinceCode":null},{"code":"799","name":"定安县","provinceCode":null},{"code":"800","name":"东方市","provinceCode":null},{"code":"801","name":"乐东黎族自治县","provinceCode":null},{"code":"802","name":"临高县","provinceCode":null},{"code":"803","name":"陵水黎族自治县","provinceCode":null},{"code":"804","name":"南沙群岛","provinceCode":null},{"code":"805","name":"琼海市","provinceCode":null},{"code":"806","name":"琼中黎族苗族自治县","provinceCode":null},{"code":"807","name":"三亚市","provinceCode":null},{"code":"808","name":"屯昌县","provinceCode":null},{"code":"809","name":"万宁市","provinceCode":null},{"code":"810","name":"文昌市","provinceCode":null},{"code":"811","name":"五指山市","provinceCode":null},{"code":"812","name":"西沙群岛","provinceCode":null},{"code":"813","name":"中沙群岛的岛礁及其海域","provinceCode":null}]},{"code":"814","name":"河北","cities":[{"code":"815","name":"石家庄市","provinceCode":null},{"code":"839","name":"保定市","provinceCode":null},{"code":"865","name":"沧州市","provinceCode":null},{"code":"882","name":"承德市","provinceCode":null},{"code":"894","name":"邯郸市","provinceCode":null},{"code":"914","name":"衡水市","provinceCode":null},{"code":"926","name":"廊坊市","provinceCode":null},{"code":"937","name":"秦皇岛市","provinceCode":null},{"code":"945","name":"唐山市","provinceCode":null},{"code":"960","name":"邢台市","provinceCode":null},{"code":"980","name":"张家口市","provinceCode":null}]},{"code":"998","name":"河南","cities":[{"code":"999","name":"郑州市","provinceCode":null},{"code":"1012","name":"安阳市","provinceCode":null},{"code":"1022","name":"鹤壁市","provinceCode":null},{"code":"1028","name":"济源市","provinceCode":null},{"code":"1029","name":"焦作市","provinceCode":null},{"code":"1041","name":"开封市","provinceCode":null},{"code":"1052","name":"洛阳市","provinceCode":null},{"code":"1068","name":"漯河市","provinceCode":null},{"code":"1074","name":"南阳市","provinceCode":null},{"code":"1088","name":"平顶山市","provinceCode":null},{"code":"1099","name":"濮阳市","provinceCode":null},{"code":"1106","name":"三门峡市","provinceCode":null},{"code":"1113","name":"商丘市","provinceCode":null},{"code":"1123","name":"新乡市","provinceCode":null},{"code":"1136","name":"信阳市","provinceCode":null},{"code":"1147","name":"许昌市","provinceCode":null},{"code":"1154","name":"周口市","provinceCode":null},{"code":"1165","name":"驻马店市","provinceCode":null}]},{"code":"1176","name":"黑龙江","cities":[{"code":"1177","name":"哈尔滨市","provinceCode":null},{"code":"1197","name":"大庆市","provinceCode":null},{"code":"1207","name":"大兴安岭地区","provinceCode":null},{"code":"1211","name":"鹤岗市","provinceCode":null},{"code":"1220","name":"黑河市","provinceCode":null},{"code":"1227","name":"鸡西市","provinceCode":null},{"code":"1237","name":"佳木斯市","provinceCode":null},{"code":"1249","name":"牡丹江市","provinceCode":null},{"code":"1260","name":"七台河市","provinceCode":null},{"code":"1265","name":"齐齐哈尔市","provinceCode":null},{"code":"1282","name":"双鸭山市","provinceCode":null},{"code":"1291","name":"绥化市","provinceCode":null},{"code":"1302","name":"伊春市","provinceCode":null}]},{"code":"1320","name":"湖北","cities":[{"code":"1321","name":"武汉市","provinceCode":null},{"code":"1335","name":"鄂州市","provinceCode":null},{"code":"1339","name":"恩施土家族苗族自治州","provinceCode":null},{"code":"1348","name":"黄冈市","provinceCode":null},{"code":"1359","name":"黄石市","provinceCode":null},{"code":"1366","name":"荆门市","provinceCode":null},{"code":"1372","name":"荆州市","provinceCode":null},{"code":"1381","name":"潜江市","provinceCode":null},{"code":"1382","name":"神农架林区","provinceCode":null},{"code":"1383","name":"十堰市","provinceCode":null},{"code":"1392","name":"随州市","provinceCode":null},{"code":"1395","name":"天门市","provinceCode":null},{"code":"1396","name":"仙桃市","provinceCode":null},{"code":"1397","name":"咸宁市","provinceCode":null},{"code":"1404","name":"襄樊市","provinceCode":null},{"code":"1414","name":"孝感市","provinceCode":null},{"code":"1422","name":"宜昌市","provinceCode":null}]},{"code":"1436","name":"湖南","cities":[{"code":"1437","name":"长沙市","provinceCode":null},{"code":"1447","name":"常德市","provinceCode":null},{"code":"1457","name":"郴州市","provinceCode":null},{"code":"1469","name":"衡阳市","provinceCode":null},{"code":"1482","name":"怀化市","provinceCode":null},{"code":"1495","name":"娄底市","provinceCode":null},{"code":"1501","name":"邵阳市","provinceCode":null},{"code":"1514","name":"湘潭市","provinceCode":null},{"code":"1520","name":"湘西土家族苗族自治州","provinceCode":null},{"code":"1529","name":"益阳市","provinceCode":null},{"code":"1536","name":"永州市","provinceCode":null},{"code":"1548","name":"岳阳市","provinceCode":null},{"code":"1558","name":"张家界市","provinceCode":null},{"code":"1563","name":"株洲市","provinceCode":null}]},{"code":"1573","name":"吉林","cities":[{"code":"1574","name":"长春市","provinceCode":null},{"code":"1585","name":"白城市","provinceCode":null},{"code":"1591","name":"白山市","provinceCode":null},{"code":"1598","name":"吉林市","provinceCode":null},{"code":"1608","name":"辽源市","provinceCode":null},{"code":"1613","name":"四平市","provinceCode":null},{"code":"1620","name":"松原市","provinceCode":null},{"code":"1626","name":"通化市","provinceCode":null},{"code":"1634","name":"延边朝鲜族自治州","provinceCode":null}]},{"code":"1643","name":"江苏","cities":[{"code":"1644","name":"南京市","provinceCode":null},{"code":"1658","name":"常州市","provinceCode":null},{"code":"1666","name":"淮安市","provinceCode":null},{"code":"1675","name":"连云港市","provinceCode":null},{"code":"1683","name":"南通市","provinceCode":null},{"code":"1692","name":"苏州市","provinceCode":null},{"code":"1704","name":"宿迁市","provinceCode":null},{"code":"1710","name":"泰州市","provinceCode":null},{"code":"1717","name":"无锡市","provinceCode":null},{"code":"1726","name":"徐州市","provinceCode":null},{"code":"1738","name":"盐城市","provinceCode":null},{"code":"1748","name":"扬州市","provinceCode":null},{"code":"1756","name":"镇江市","provinceCode":null}]},{"code":"1763","name":"江西","cities":[{"code":"1764","name":"南昌市","provinceCode":null},{"code":"1774","name":"抚州市","provinceCode":null},{"code":"1786","name":"赣州市","provinceCode":null},{"code":"1805","name":"吉安市","provinceCode":null},{"code":"1819","name":"景德镇市","provinceCode":null},{"code":"1824","name":"九江市","provinceCode":null},{"code":"1837","name":"萍乡市","provinceCode":null},{"code":"1843","name":"上饶市","provinceCode":null},{"code":"1856","name":"新余市","provinceCode":null},{"code":"1859","name":"宜春市","provinceCode":null},{"code":"1870","name":"鹰潭市","provinceCode":null}]},{"code":"1874","name":"辽宁","cities":[{"code":"1875","name":"沈阳市","provinceCode":null},{"code":"1889","name":"鞍山市","provinceCode":null},{"code":"1897","name":"本溪市","provinceCode":null},{"code":"1904","name":"朝阳市","provinceCode":null},{"code":"1912","name":"大连市","provinceCode":null},{"code":"1923","name":"丹东市","provinceCode":null},{"code":"1930","name":"抚顺市","provinceCode":null},{"code":"1938","name":"阜新市","provinceCode":null},{"code":"1946","name":"葫芦岛市","provinceCode":null},{"code":"1953","name":"锦州市","provinceCode":null},{"code":"1961","name":"辽阳市","provinceCode":null},{"code":"1969","name":"盘锦市","provinceCode":null},{"code":"1974","name":"铁岭市","provinceCode":null},{"code":"1982","name":"营口市","provinceCode":null}]},{"code":"1989","name":"内蒙古","cities":[{"code":"1990","name":"呼和浩特市","provinceCode":null},{"code":"2000","name":"阿拉善盟","provinceCode":null},{"code":"2004","name":"巴彦淖尔市","provinceCode":null},{"code":"2012","name":"包头市","provinceCode":null},{"code":"2022","name":"赤峰市","provinceCode":null},{"code":"2035","name":"鄂尔多斯市","provinceCode":null},{"code":"2044","name":"呼伦贝尔市","provinceCode":null},{"code":"2058","name":"通辽市","provinceCode":null},{"code":"2067","name":"乌海市","provinceCode":null},{"code":"2071","name":"乌兰察布市","provinceCode":null},{"code":"2083","name":"锡林郭勒盟","provinceCode":null},{"code":"2096","name":"兴安盟","provinceCode":null}]},{"code":"2103","name":"宁夏","cities":[{"code":"2104","name":"银川市","provinceCode":null},{"code":"2111","name":"固原市","provinceCode":null},{"code":"2117","name":"石嘴山市","provinceCode":null},{"code":"2121","name":"吴忠市","provinceCode":null},{"code":"2126","name":"中卫市","provinceCode":null}]},{"code":"2130","name":"青海","cities":[{"code":"2131","name":"西宁市","provinceCode":null},{"code":"2139","name":"果洛藏族自治州","provinceCode":null},{"code":"2146","name":"海北藏族自治州","provinceCode":null},{"code":"2151","name":"海东地区","provinceCode":null},{"code":"2158","name":"海南藏族自治州","provinceCode":null},{"code":"2164","name":"海西蒙古族藏族自治州","provinceCode":null},{"code":"2170","name":"黄南藏族自治州","provinceCode":null},{"code":"2175","name":"玉树藏族自治州","provinceCode":null}]},{"code":"2182","name":"山东","cities":[{"code":"2183","name":"济南市","provinceCode":null},{"code":"2194","name":"滨州市","provinceCode":null},{"code":"2202","name":"德州市","provinceCode":null},{"code":"2214","name":"东营市","provinceCode":null},{"code":"2220","name":"菏泽市","provinceCode":null},{"code":"2230","name":"济宁市","provinceCode":null},{"code":"2243","name":"莱芜市","provinceCode":null},{"code":"2246","name":"聊城市","provinceCode":null},{"code":"2255","name":"临沂市","provinceCode":null},{"code":"2268","name":"青岛市","provinceCode":null},{"code":"2281","name":"日照市","provinceCode":null},{"code":"2286","name":"泰安市","provinceCode":null},{"code":"2293","name":"威海市","provinceCode":null},{"code":"2298","name":"潍坊市","provinceCode":null},{"code":"2311","name":"烟台市","provinceCode":null},{"code":"2324","name":"枣庄市","provinceCode":null},{"code":"2331","name":"淄博市","provinceCode":null}]},{"code":"2340","name":"山西","cities":[{"code":"2341","name":"太原市","provinceCode":null},{"code":"2352","name":"长治市","provinceCode":null},{"code":"2366","name":"大同市","provinceCode":null},{"code":"2378","name":"晋城市","provinceCode":null},{"code":"2385","name":"晋中市","provinceCode":null},{"code":"2397","name":"临汾市","provinceCode":null},{"code":"2415","name":"吕梁市","provinceCode":null},{"code":"2429","name":"朔州市","provinceCode":null},{"code":"2436","name":"忻州市","provinceCode":null},{"code":"2451","name":"阳泉市","provinceCode":null},{"code":"2457","name":"运城市","provinceCode":null}]},{"code":"2471","name":"陕西","cities":[{"code":"2472","name":"西安市","provinceCode":null},{"code":"2486","name":"安康市","provinceCode":null},{"code":"2497","name":"宝鸡市","provinceCode":null},{"code":"2510","name":"汉中市","provinceCode":null},{"code":"2522","name":"商洛市","provinceCode":null},{"code":"2530","name":"铜川市","provinceCode":null},{"code":"2535","name":"渭南市","provinceCode":null},{"code":"2547","name":"咸阳市","provinceCode":null},{"code":"2562","name":"延安市","provinceCode":null},{"code":"2576","name":"榆林市","provinceCode":null}]},{"code":"2589","name":"四川","cities":[{"code":"2590","name":"成都市","provinceCode":null},{"code":"2610","name":"阿坝藏族羌族自治州","provinceCode":null},{"code":"2624","name":"巴中市","provinceCode":null},{"code":"2629","name":"达州市","provinceCode":null},{"code":"2637","name":"德阳市","provinceCode":null},{"code":"2644","name":"甘孜藏族自治州","provinceCode":null},{"code":"2663","name":"广安市","provinceCode":null},{"code":"2669","name":"广元市","provinceCode":null},{"code":"2677","name":"乐山市","provinceCode":null},{"code":"2689","name":"凉山彝族自治州","provinceCode":null},{"code":"2707","name":"泸州市","provinceCode":null},{"code":"2715","name":"眉山市","provinceCode":null},{"code":"2722","name":"绵阳市","provinceCode":null},{"code":"2732","name":"内江市","provinceCode":null},{"code":"2738","name":"南充市","provinceCode":null},{"code":"2748","name":"攀枝花市","provinceCode":null},{"code":"2754","name":"遂宁市","provinceCode":null},{"code":"2760","name":"雅安市","provinceCode":null},{"code":"2769","name":"宜宾市","provinceCode":null},{"code":"2780","name":"资阳市","provinceCode":null},{"code":"2785","name":"自贡市","provinceCode":null}]},{"code":"2792","name":"西藏","cities":[{"code":"2793","name":"拉萨市","provinceCode":null},{"code":"2802","name":"阿里地区","provinceCode":null},{"code":"2810","name":"昌都地区","provinceCode":null},{"code":"2822","name":"林芝地区","provinceCode":null},{"code":"2830","name":"那曲地区","provinceCode":null},{"code":"2841","name":"日喀则地区","provinceCode":null},{"code":"2860","name":"山南地区","provinceCode":null}]},{"code":"2873","name":"新疆","cities":[{"code":"2874","name":"乌鲁木齐市","provinceCode":null},{"code":"2883","name":"阿克苏地区","provinceCode":null},{"code":"2893","name":"阿拉尔市","provinceCode":null},{"code":"2894","name":"阿勒泰地区","provinceCode":null},{"code":"2902","name":"巴音郭楞蒙古自治州","provinceCode":null},{"code":"2912","name":"博尔塔拉蒙古自治州","provinceCode":null},{"code":"2916","name":"昌吉回族自治州","provinceCode":null},{"code":"2925","name":"哈密地区","provinceCode":null},{"code":"2929","name":"和田地区","provinceCode":null},{"code":"2938","name":"喀什地区","provinceCode":null},{"code":"2951","name":"克拉玛依市","provinceCode":null},{"code":"2956","name":"克孜勒苏柯尔克孜自治州","provinceCode":null},{"code":"2961","name":"石河子市","provinceCode":null},{"code":"2962","name":"塔城地区","provinceCode":null},{"code":"2970","name":"图木舒克市","provinceCode":null},{"code":"2971","name":"吐鲁番地区","provinceCode":null},{"code":"2975","name":"五家渠市","provinceCode":null},{"code":"2976","name":"伊犁哈萨克自治州","provinceCode":null}]},{"code":"2987","name":"云南","cities":[{"code":"2988","name":"昆明市","provinceCode":null},{"code":"3003","name":"保山市","provinceCode":null},{"code":"3009","name":"楚雄彝族自治州","provinceCode":null},{"code":"3020","name":"大理白族自治州","provinceCode":null},{"code":"3033","name":"德宏傣族景颇族自治州","provinceCode":null},{"code":"3039","name":"迪庆藏族自治州","provinceCode":null},{"code":"3043","name":"红河哈尼族彝族自治州","provinceCode":null},{"code":"3057","name":"丽江市","provinceCode":null},{"code":"3063","name":"临沧市","provinceCode":null},{"code":"3072","name":"怒江傈僳族自治州","provinceCode":null},{"code":"3077","name":"曲靖市","provinceCode":null},{"code":"3087","name":"思茅市","provinceCode":null},{"code":"3098","name":"文山壮族苗族自治州","provinceCode":null},{"code":"3107","name":"西双版纳傣族自治州","provinceCode":null},{"code":"3111","name":"玉溪市","provinceCode":null},{"code":"3121","name":"昭通市","provinceCode":null}]},{"code":"3133","name":"浙江","cities":[{"code":"3134","name":"杭州市","provinceCode":null},{"code":"3148","name":"湖州市","provinceCode":null},{"code":"3154","name":"嘉兴市","provinceCode":null},{"code":"3162","name":"金华市","provinceCode":null},{"code":"3172","name":"丽水市","provinceCode":null},{"code":"3182","name":"宁波市","provinceCode":null},{"code":"3194","name":"衢州市","provinceCode":null},{"code":"3201","name":"绍兴市","provinceCode":null},{"code":"3208","name":"台州市","provinceCode":null},{"code":"3218","name":"温州市","provinceCode":null},{"code":"3230","name":"舟山市","provinceCode":null}]},{"code":"3235","name":"香港","cities":[{"code":"3236","name":"九龙","provinceCode":null},{"code":"3237","name":"香港岛","provinceCode":null},{"code":"3238","name":"新界","provinceCode":null}]},{"code":"3239","name":"澳门","cities":[{"code":"3240","name":"澳门半岛","provinceCode":null},{"code":"3241","name":"离岛","provinceCode":null}]},{"code":"3242","name":"台湾","cities":[{"code":"3243","name":"台北市","provinceCode":null},{"code":"3244","name":"高雄市","provinceCode":null},{"code":"3245","name":"高雄县","provinceCode":null},{"code":"3246","name":"花莲县","provinceCode":null},{"code":"3247","name":"基隆市","provinceCode":null},{"code":"3248","name":"嘉义市","provinceCode":null},{"code":"3249","name":"嘉义县","provinceCode":null},{"code":"3250","name":"金门县","provinceCode":null},{"code":"3251","name":"苗栗县","provinceCode":null},{"code":"3252","name":"南投县","provinceCode":null},{"code":"3253","name":"澎湖县","provinceCode":null},{"code":"3254","name":"屏东县","provinceCode":null},{"code":"3255","name":"台北县","provinceCode":null},{"code":"3256","name":"台东县","provinceCode":null},{"code":"3257","name":"台南市","provinceCode":null},{"code":"3258","name":"台南县","provinceCode":null},{"code":"3259","name":"台中市","provinceCode":null},{"code":"3260","name":"台中县","provinceCode":null},{"code":"3261","name":"桃园县","provinceCode":null},{"code":"3262","name":"新竹市","provinceCode":null},{"code":"3263","name":"新竹县","provinceCode":null},{"code":"3264","name":"宜兰县","provinceCode":null},{"code":"3265","name":"云林县","provinceCode":null},{"code":"3266","name":"彰化县","provinceCode":null}]}]}
