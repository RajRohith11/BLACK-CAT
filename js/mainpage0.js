document.addEventListener("DOMContentLoaded",function(){
    const slider = document.querySelector(".slider");
    const backs = document.getElementById("back");
    const next = document.getElementById("next");
    backs.style.display = "none";

    next.addEventListener("click",function(){
      slider.scrollLeft += 220;  
        backs.style.display="block"
        if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth){
            next.style.display = "none"
        }
    });
    backs.addEventListener("click",function(){
        slider.scrollLeft -= 220;
        next.style.display = "block";
        if(slider.scrollLeft<=0){
            backs.style.display = "none"
        }
    });


});
document.addEventListener('DOMContentLoaded',function(){
    const menu = document.getElementById("menu-bar-btn");
    const list = document.querySelectorAll(".aside");
    menu.addEventListener("click",function(){
       list.forEach(item =>{
        item.style.display = 'block'
       });
    });
})