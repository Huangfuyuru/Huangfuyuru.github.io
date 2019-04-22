/*
    笔记
    querySelector()方法返回文档中匹配指定CSS选择器的一个元素
    注意仅仅返回匹配指定选择器的第一个元素，如果需要返回所有的元素
    使用querySelectorAll()
*/
window.onload=function(){

var tabs=document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');
for(i=0;i<tabs.length;i++){
    //是把a取了出来
    var tab=tabs[i];
    setTabHandler(tab,i);
}
function setTabHandler(tab,tabPos){
    tab.onclick=function(){
        for(i=0;i<tabs.length;i++){
            if(tabs[i].getAttribute('class')){
                //都先把tabs[i]的class去掉
                tabs[i].removeAttribute('class');
            }
        }
        //在该特定的tab添加class="active"
        tab.setAttribute('class','active');

        for(i=0;i<panels.length;i++){
            if(panels[i].getAttribute('class')){
                panels[i].removeAttribute('class');
            }
        }

        panels[tabPos].setAttribute('class','active-panel');
    }
}
}