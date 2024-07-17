const user_data=document.querySelector("#live-user-filter .user-data");
const search=document.getElementById("search");
const listitems=[];

getdata();
search.addEventListener("input",(e)=>filterdata(e.target.value))




function getdata(){
    fetch("https://randomuser.me/api?results=50").then((response)=>response.json()).then((data)=>{
        data.results.forEach(user => {
            const li=document.createElement("li");
            li.innerHTML=`
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first+' '+user.name.last}</h4>
                    <p>${user.location.city+", "+user.location.country}</p>
                </div>
            `
            listitems.push(li);
            user_data.appendChild(li);
            
        });
    })
    
}
function filterdata(search){
    listitems.forEach(user=>{
        const text=user.innerText.toLowerCase();
        user.classList.toggle("hide",!text.includes(search.toLowerCase()))
    })
}