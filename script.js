let homeImg=document.querySelector(".homew");
let aboutImg=document.querySelector(".aboutw");
let projImg=document.querySelector(".projw");
let eduImg=document.querySelector(".eduw");
let chatImg=document.querySelector(".chatw");

let homePage=document.querySelector(".homePage1");
let aboutPage=document.querySelector(".aboutPage");
let projPage=document.querySelector(".projPage");
let eduPage=document.querySelector(".eduPage");
let chatPage=document.querySelector(".chatPage");
let prev=1;

let more_about=document.querySelector(".More-About");
more_about.addEventListener(("click"),()=>{
    if(prev!=2){
    navbarReset(prev);
    aboutImg.setAttribute("src","yellowAbout.png");
    aboutPage.setAttribute("class","aboutPage1");
    prev=2;}
});

let navbarReset=(i)=>{
    if(i===1){
    homeImg.setAttribute("src","whiteHome.png");
    homePage.setAttribute("class","homePage");
    }if(i===2){
    aboutImg.setAttribute("src","whiteAbout.png");
    aboutPage.setAttribute("class","aboutPage");
    }if(i===3){
    projImg.setAttribute("src","whiteProj.png");
    projPage.setAttribute("class","projPage");
    }if(i===4){
    eduImg.setAttribute("src","whiteEdu.png");
    eduPage.setAttribute("class","eduPage");
    }if(i===5){
    chatImg.setAttribute("src","whiteChat.png");
    chatPage.setAttribute("class","chatPage");
    }
};

let homeBtn=document.querySelector(".home");
homeBtn.addEventListener(("click"),()=>{
    if(prev!=1){navbarReset(prev);
    homeImg.setAttribute("src","yellowHome.png");
    homePage.setAttribute("class","homePage1");
    prev=1;}
});



let aboutBtn=document.querySelector(".about");
aboutBtn.addEventListener(("click"),()=>{
    if(prev!=2){
    navbarReset(prev);
    aboutImg.setAttribute("src","yellowAbout.png");
    aboutPage.setAttribute("class","aboutPage1");
    prev=2;}
});


let projBtn=document.querySelector(".proj");
projBtn.addEventListener(("click"),()=>{
    if(prev!=3){
    navbarReset(prev);
    projImg.setAttribute("src","yellowProj.png");
    projPage.setAttribute("class","projPage1");
    prev=3;}
});


let eduBtn=document.querySelector(".edu");
eduBtn.addEventListener(("click"),()=>{
    if(prev!=4){
    navbarReset(prev);
    eduImg.setAttribute("src","yellowEdu.png");
    eduPage.setAttribute("class","eduPage1");
    prev=4;
    }
});


let chatBtn=document.querySelector(".chat");
chatBtn.addEventListener(("click"),()=>{
    if(prev!=5){
    navbarReset(prev);
    chatImg.setAttribute("src","yellowChat.png");
    chatPage.setAttribute("class","chatPage1");
    prev=5;}
});

