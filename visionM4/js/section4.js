let arrow=document.querySelector(".arrowsec4")
let section=document.querySelector(".sec4cntr2icon")
section.addEventListener("mouseover",()=>{
    arrow.style.display="block"
    arrow.style.animation="rotationclocl 0.2s 1 0 linear normal"

})
section.addEventListener("mouseout",()=>{
    arrow.style.display="block"
    arrow.style.animation="rotationanticlocl 0.2s 1 0 linear normal"

})