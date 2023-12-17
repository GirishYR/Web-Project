let Mission = document.querySelector("#btn1")
let Vission = document.querySelector("#btn2")
let Values = document.querySelector("#btn3")
let Missioncntn = document.querySelector(".sec6contrinrbloc1cntn4Mission")
let Vissioncntn = document.querySelector(".sec6contrinrbloc1cntn4Vision")
let Valuescntn = document.querySelector(".sec6contrinrbloc1cntn4Values")
let msnspan = document.querySelector(".sec6btnspan1")
let vsnspan = document.querySelector(".sec6btnspan2")
let vlusspan = document.querySelector(".sec6btnspan3")


Mission.addEventListener("click", () => {
    Missioncntn.style.display = "block"
    Vissioncntn.style.display = "none"
    Valuescntn.style.display = "none"
    Mission.style.color = "black"
    Vission.style.color = "#000000a6"
    Values.style.color = "#000000a6"
    msnspan.style.border = "2px solid #72dfe9"
    vsnspan.style.border = "2px solid transparent"
    vlusspan.style.border = "2px solid transparent"

})
Vission.addEventListener("click", () => {

    Missioncntn.style.display = "none"
    Vissioncntn.style.display = "block"
    Valuescntn.style.display = "none"
    Mission.style.color = "#000000a6"
    Vission.style.color = "black"
    Values.style.color = "#000000a6"
    msnspan.style.border = "2px solid transparent"
    vsnspan.style.border = "2px solid #72dfe9"
    vlusspan.style.border = "2px solid transparent"

})
Values.addEventListener("click", () => {
    Missioncntn.style.display = "none"
    Vissioncntn.style.display = "none"
    Valuescntn.style.display = "block"
    Mission.style.color = "#000000a6"
    Vission.style.color = "#000000a6"
    Values.style.color = "black"
    msnspan.style.border = "2px solid transparent"
    vsnspan.style.border = "2px solid transparent"
    vlusspan.style.border = "2px solid #72dfe9"

})
// btn.onClick=()=>{
//     btn.style.color="black";
// }

// Mission.addEventListener("mouseover", () => {
//     Mission.style.color = "black"
//     msnspan.style.border = "2px solid #72dfe9"
// })
// Mission.addEventListener("mouseout", () => {
//     Mission.style.color = "#000000a6"
//     msnspan.style.border = "2px solid transparent"
// })
// Vission.addEventListener("mouseover", () => {
//     Vission.style.color = "black"
//     msnspan.style.border = "2px solid #72dfe9"
// })
// Vission.addEventListener("mouseout", () => {
//     Vission.style.color = "#000000a6"
//     vsnspan.style.border = "2px solid transparent"

// })
// Values.addEventListener("mouseover", () => {
//     Values.style.color = "black"
//     vlusspan.style.border = "2px solid #72dfe9"

// })
// Values.addEventListener("mouseout", () => {
//     Values.style.color = "#000000a6"
//     vlusspan.style.border = "2px solid transparent"
// })