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
// code of progress-steps
let steps=0;
let prog_width=0
const prog=100/3;

let circles=document.querySelectorAll("#progress-steps .circle")
document.querySelector("#progress-steps .next").addEventListener("click",function(){
    if(steps==3)return;
    document.querySelector("#progress-steps .prev").classList.remove("desible")
    steps++
    prog_width+=prog
    document.documentElement.style.setProperty("--after_width",`${prog_width}%`);
    circles[steps].classList.add("active")
    if(prog_width==100)this.classList.add("desible");
})
document.querySelector("#progress-steps .prev").addEventListener("click",function(){
    if(steps==0)return;
    document.querySelector("#progress-steps .next").classList.remove("desible")
    steps--
    prog_width-=prog
    document.documentElement.style.setProperty("--after_width",`${prog_width}%`);
    circles[steps+1].classList.remove("active")
    if(prog_width<=0)this.classList.add("desible");
})








    

