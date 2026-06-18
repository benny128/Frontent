let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");




btn.addEventListener("click",function(){

    let li=document.createElement("li");
    li.innerText=inp.value;
    ul.appendChild(li);
    inp.value="";
 
    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete");
    
    li.appendChild(del);

    del.addEventListener("click",function(){
        li.remove();
    })

})


