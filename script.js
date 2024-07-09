// code of expanding-cards
const panels=document.getElementsByClassName("panel");
const actives=document.getElementsByClassName("active");
for(let panel of panels){
    panel.addEventListener("click",function(){
        for(let active of actives){
            active.classList.remove("active")
        };
        panel.classList.add("active");

    })
}
    

