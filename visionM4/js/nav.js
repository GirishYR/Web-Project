let pop=document.querySelector("#pop-up")
let Services=document.querySelector(".Services")
let nav=document.querySelector("header")

Services.addEventListener("mouseover",()=>
    pop.style.display="block"

)
Services.addEventListener("click",()=>
    {
        pop.style.display="block"
        // if ("mouseout") {
        //     pop.style.display="none"
        // } 
    }
)
Services.addEventListener("mouseout",()=>
 { if ("click") {
    pop.style.display="block"
   }else{
    pop.style.display="none"
   }
}
)
pop.addEventListener("mouseleave",()=>{
    pop.style.display="none"
})


window.onscroll=function() {
    if(scrollY>0)
    {
        nav.classList.add("scrolled")
    }else{
        nav.classList.remove("scrolled")
    }
    
}