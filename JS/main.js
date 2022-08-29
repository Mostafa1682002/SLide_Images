//Slide Imges
let slideImgs=Array.from(document.querySelectorAll(".slide-container img"));

// Number Of Imges
let slideCount=slideImgs.length;

//curent Element
let curent=4;

//slide Number
let slideNumber=document.getElementById("slide-number");



//page ul 
let pageSlide=document.getElementById("padge");


//create List
for(let x=1;x<=slideCount;x++){
    let ele=document.createElement("li");
    ele.setAttribute("data-index",x)
    let text=document.createTextNode(x);
    ele.appendChild(text);
    pageSlide.appendChild(ele);
}

// all li 
let allLis=document.querySelectorAll("ul li");


//Prev and Next Number
let prev=document.getElementById("prev");
let next=document.getElementById("next");

checher();


//Handel Click on prev and next button
prev.onclick=prevFun;
next.onclick=nextFun;

//prev Function
function prevFun(){
    if(curent>1){
        curent--;
    }
    checher();
}


//next Function
function nextFun(){
    if(curent<slideCount){
        curent++;
    }
    checher();
}


function checher(){
    slideNumber.textContent=`Slide # ${curent} of ${slideCount}`

    //remove all active
    removeAllactive();

    //add active from imge
    slideImgs[curent-1].classList.add("activ");

    //add active from li
    pageSlide.children[curent-1].classList.add("active");


    //if curent is frist
    if(curent==1){
        prev.classList.add("disabeld")
    }else{
        prev.classList.remove("disabeld")
    }

    //if curent is last
    if(curent==slideCount){
        next.classList.add("disabeld")
    }else{
        next.classList.remove("disabeld")
    }
}



function removeAllactive(){
    //remove all active from images
    slideImgs.forEach((e)=>e.classList.remove("activ"))
    //remove all active from slide number
    allLis.forEach((e)=>e.classList.remove("active"));
}


allLis.forEach((e)=>{
    e.addEventListener("click",function(ele){
        curent=parseInt(ele.currentTarget.dataset.index);
        checher();
    })
})