/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/
var value=1;
var min = new Date().getMinutes();
function timeTest(){
    var timesRun = 0;
    function count(){
        timesRun++;
        value=value*2;
        return timesRun;
    }
    return count;
}

var time = timeTest();
var Interval = setInterval(function(){
    var counts = time();
    if(new Date().getMinutes() != min){
        console.log("已达到整分");
        clearInterval(Interval);
    }else if(counts ==10){
        console.log("已计数10次");
        clearInterval(Interval);
    }else{
        console.log(value);
    }
},5000);


console.log("----------------- 2 ------------------");
/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    var str="";
    var phonePattern =/^1\d{10}$/;
    var mailPattern =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if(phonePattern.test(telephone)){
        str+="The telephone is right ";
        if(!mailPattern.test(mail)){
            str+="and the mail is wrong！";
        }else {
            str="Both right！";
        }
    }else {
        str+="The telephone is wrong ";
        if(mailPattern.test(mail)){
            str+="and the mail is right！";
        }else {
            str="Both wrong！";
        }
    }
    return str;
}
var h=testMail(18817833167,"19857096219@163.com");
console.log(h);

console.log("----------------- 3 ------------------");
/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    let string = str.split(" ");
    let container = "";
    let result = new Set();
    for(let i = 0; i < string.length - 1; i++){
        let pattern = new RegExp(string[i], "i");
        if(pattern.test(string[i + 1])) {
            if (result.size <10) {
            container = string[i] + " " + string[i + 1];
            result.add(container);
            }else {
                result=Array.from(new Set(result));
                result=result.sort();
                result=result.slice(0,10);
                result=new Set(result);
            }
        }
    }
    console.log(result);
}
var x=testRedundancy("Is is the iS is cost of of gasoline going up up aaa aaa ccc ccc qqq qqq aaa aaa qq qq eee eee bbb bbb nnn nnn");

console.log("----------------- 4 ------------------");
/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    var answer = new Set();
    let index = 0;
    let wantArray = wantInput.split("");
    let actualArray = actualInput.split("");
    for(let i = 0; i < wantArray.length; i++){
        if(wantArray[i] !== actualArray[ i - index]){
            answer.add(wantArray[i].toUpperCase());
            index++;
        }
    }
    return answer;
}
var q=testKeyBoard("7_This_is_a_test", "_hs_s_a_es");
console.log(q);

console.log("----------------- 5 ------------------");
/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    str = str.trim();
    var s = "";
    var len = str.length;
    var w = "";
    for(var i = len-1;i>=0;i--){
        if(str[i] != " "){
            w = str[i] + w;
        }
        else{
            if(i != 0 && str[i-1] == " ")
                continue;
            s += w + " ";
            w="";
        }
    }
    s += w;
    return s;
}
var m=testSpecialReverse("  hello  world!  ");
console.log(m);
// 对英文句子每个字符做循环
// s存放反转的句子，w存放单词
// 遇到空格（1个或多个）将w添加到s中
// 非空格则将字符添加到w


console.log("----------------- 6 ------------------");
/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/
var  nums = [1, 2, 3, 4], target = 5;
function twoSum(nums, target) {
    let map=new Map();
    var res=[];
    for(var i=0;i<nums.length;i++){
            map.set(nums[i],i);
            if(map.has(target-nums[i])){
                res[0]=map.get(target-nums[i]);
                res[1]=i;
                console.log(res)
            }
    }
}
var a=twoSum(nums,target);

console.log("----------------- 7 ------------------");
/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let ans = 0;
    let map = new Map();
    for (let j = 0, i = 0; j < str.length; j++) {
        if (map.has(str.charAt(j))) {
            i = Math.max(map.get(str.charAt(j)), i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(str.charAt(j), j + 1);
    }
    return ans;
}
var g=lengthOfLongestSubstring("abbbbb");
console.log(g);

console.log("----------------- 8 ------------------");
/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
//构造函数
function DevelopingCountry() {
    Country.call(this);
    this.sayHi = function () {
        console.log("Hi,i am a developing country.")
    }
}

//原型链
function PoorCountry(){ }
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
};

//原型式继承
var DevelopedCountry = Object.create(new Country());
DevelopedCountry.sayHappy = function () {
    console.log("I am a Happy developed country.")
};
var country1 = new DevelopingCountry();
country1.sayHi();
var country2 = new PoorCountry();
country2.saySad();
DevelopedCountry.sayHappy();
console.log("----------------- 1 ------------------");
console.log(1);

