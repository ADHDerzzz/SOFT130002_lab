const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
window.onload=function() {
    var genre=document.createElement('div');
    // Human流派
    var human=document.createElement('div');
    human.setAttribute("class", "item");
    // 类别名称
    var title1=document.createElement('h4');
    var txt1=document.createTextNode("Genre:Human");
    title1.appendChild(txt1);
    human.appendChild(title1);

    // 人名寿命
    var people1=document.createElement('div');
    people1.setAttribute("class","inner-box");
    // 人名
    var name1=document.createElement('h3');
    var ntxt1=document.createTextNode("Micheal Jackson");
    name1.style.cssText="display:inline;";
    name1.appendChild(ntxt1);
    // 寿命
    var para1=document.createElement('p');
    var lifetime1=document.createTextNode("lifetime:1022-1055");
    para1.style.cssText="display:inline;margin-left:20px;";
    para1.appendChild(lifetime1);
    people1.append(name1,para1);
    human.appendChild(people1);

    // 流行照片
    var pphoto1=document.createElement('div');
    pphoto1.setAttribute("class","inner-box");
    // 照片标题
    var ptitle1=document.createElement('h3');
    var ptxt1=document.createTextNode("Popular Photos");
    ptitle1.appendChild(ptxt1);

    // 三张照片
    var images1=document.createElement('div');
    // 图片1
    var img1_1=document.createElement('img');
    img1_1.src="human1.jpg";
    img1_1.setAttribute("class","photo");
    // 图片2
    var img1_2=document.createElement('img');
    img1_2.src="human2.jpg";
    img1_2.setAttribute("class","photo");
    // 图片3
    var img1_3=document.createElement('img');
    img1_3.src="human3.jpg";
    img1_3.setAttribute("class","photo");
    images1.append(img1_1,img1_2,img1_3);

    pphoto1.append(ptitle1,images1);
    human.appendChild(pphoto1);

    // 按钮
    var bt1=document.createElement('button');
    bt1.innerText="Visit";
    human.appendChild(bt1);

    // ----------------------------------------------------------------
    // classical流派
    var classical=document.createElement('div');
    classical.setAttribute("class", "item");
    // 类别名称
    var title2=document.createElement('h4');
    var txt2=document.createTextNode("Genre:Classical");
    title2.appendChild(txt2);
    classical.appendChild(title2);

    // 人名寿命
    var people2=document.createElement('div');
    people2.setAttribute("class","inner-box");
    // 人名
    var name2=document.createElement('h3');
    var ntxt2=document.createTextNode("Maria JK");
    name2.style.cssText="display:inline;";
    name2.appendChild(ntxt2);
    // 寿命
    var para2=document.createElement('p');
    var lifetime2=document.createTextNode("lifetime:1920-2001");
    para2.style.cssText="display:inline;margin-left:20px;";
    para2.appendChild(lifetime2);
    people2.append(name2,para2);
    classical.appendChild(people2);

    // 流行照片
    var pphoto2=document.createElement('div');
    pphoto2.setAttribute("class","inner-box");
    // 照片标题
    var ptitle2=document.createElement('h3');
    var ptxt2=document.createTextNode("Popular Photos");
    ptitle2.appendChild(ptxt2);

    // 三张照片
    var images2=document.createElement('div');
    // 图片1
    var img2_1=document.createElement('img');
    img2_1.src="classical1.jpg";
    img2_1.setAttribute("class","photo");
    // 图片2
    var img2_2=document.createElement('img');
    img2_2.src="classical2.jpg";
    img2_2.setAttribute("class","photo");

    images2.append(img2_1,img2_2);

    pphoto2.append(ptitle2,images2);
    classical.appendChild(pphoto2);

    // 按钮
    var bt2=document.createElement('button');
    bt2.innerText="Visit";
    classical.appendChild(bt2);

    // ----------------------------------------------------------------
    // Abstract流派
    var abstract=document.createElement('div');
    abstract.setAttribute("class", "item");
    // 类别名称
    var title3=document.createElement('h4');
    var txt3=document.createTextNode("Genre:Abstract");
    title3.appendChild(txt3);
    abstract.appendChild(title3);

    // 人名寿命
    var people3=document.createElement('div');
    people3.setAttribute("class","inner-box");
    // 人名
    var name3=document.createElement('h3');
    var ntxt3=document.createTextNode("John Herry UY");
    name3.style.cssText="display:inline;";
    name3.appendChild(ntxt3);
    // 寿命
    var para3=document.createElement('p');
    var lifetime3=document.createTextNode("lifetime:1894-1928");
    para3.style.cssText="display:inline;margin-left:20px;";
    para3.appendChild(lifetime3);
    people3.append(name3,para3);
    abstract.appendChild(people3);

    // 流行照片
    var pphoto3=document.createElement('div');
    pphoto3.setAttribute("class","inner-box");
    // 照片标题
    var ptitle3=document.createElement('h3');
    var ptxt3=document.createTextNode("Popular Photos");
    ptitle3.appendChild(ptxt3);

    // 三张照片
    var images3=document.createElement('div');
    // 图片1
    var img3_1=document.createElement('img');
    img3_1.src="abstract1.jpg";
    img3_1.setAttribute("class","photo");
    // 图片2
    var img3_2=document.createElement('img');
    img3_2.src="abstract2.jpg";
    img3_2.setAttribute("class","photo");
    // 图片3
    var img3_3=document.createElement('img');
    img3_3.src="abstract3.jpg";
    img3_3.setAttribute("class","photo");
    // 图片4
    var img3_4=document.createElement('img');
    img3_4.src="abstract4.jpg";
    img3_4.setAttribute("class","photo");
    // 图片5
    var img3_5=document.createElement('img');
    img3_5.src="abstract5.jpg";
    img3_5.setAttribute("class","photo");

    images3.append(img3_1,img3_2,img3_3,img3_4,img3_5);

    pphoto3.append(ptitle3,images3);
    abstract.appendChild(pphoto3);

    // 按钮
    var bt3=document.createElement('button');
    bt3.innerText="Visit";
    abstract.appendChild(bt3);

    // ----------------------------------------------------------------
    // Beauty流派
    var beauty=document.createElement('div');
    beauty.setAttribute("class", "item");
    // 类别名称
    var title4=document.createElement('h4');
    var txt4=document.createTextNode("Genre:Beauty");
    title4.appendChild(txt4);
    beauty.appendChild(title4);

    // 人名寿命
    var people4=document.createElement('div');
    people4.setAttribute("class","inner-box");
    // 人名
    var name4=document.createElement('h3');
    var ntxt4=document.createTextNode("Coco");
    name4.style.cssText="display:inline;";
    name4.appendChild(ntxt4);
    // 寿命
    var para4=document.createElement('p');
    var lifetime4=document.createTextNode("lifetime:1777-1799");
    para4.style.cssText="display:inline;margin-left:20px;";
    para4.appendChild(lifetime4);
    people4.append(name4,para4);
    beauty.appendChild(people4);

    // 流行照片
    var pphoto4=document.createElement('div');
    pphoto4.setAttribute("class","inner-box");
    // 照片标题
    var ptitle4=document.createElement('h3');
    var ptxt4=document.createTextNode("Popular Photos");
    ptitle4.appendChild(ptxt4);

    // 三张照片
    var images4=document.createElement('div');
    // 图片1
    var img4_1=document.createElement('img');
    img4_1.src="beauty1.jpg";
    img4_1.setAttribute("class","photo");
    // 图片2
    var img4_2=document.createElement('img');
    img4_2.src="beauty2.jpg";
    img4_2.setAttribute("class","photo");

    images4.append(img4_1,img4_2);

    pphoto4.append(ptitle4,images4);
    beauty.appendChild(pphoto4);

    // 按钮
    var bt4=document.createElement('button');
    bt4.innerText="Visit";
    beauty.appendChild(bt4);

    // -----------------------------------------------------------------

    genre.append(human,classical,abstract,beauty);
    var aa=document.getElementsByTagName("div")[2];
    aa.appendChild(genre);

}
