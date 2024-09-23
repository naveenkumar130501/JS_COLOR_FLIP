const btn=document.querySelector("Button");
const con=document.querySelector(".container")
const he=document.querySelector(".color")
const values=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F','E']
btn.addEventListener('click',analysis);
function analysis(){
    var re="#"
    for (var i=1; i<=6; i++){
        let fnd=Math.floor(Math.random()*16)
        re+=values[fnd]
    }

    con.style.backgroundColor = re
    he.innerHTML=re
}
