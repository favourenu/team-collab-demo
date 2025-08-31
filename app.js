const showBtn = document.querySelector("#show-info-btn")
const hiddenSection = document.querySelector(".show-info-section")
const lightChange = document.querySelector("#light-change-btn")
const bodyEl = document.body




showBtn.addEventListener("click", ()=>{
    hiddenSection.classList.toggle("hide")
    if(hiddenSection.classList.contains("hide")){
        showBtn.textContent = "Show info"
    }else{
        showBtn.textContent = "Hide info"
    }
})



lightChange.addEventListener('click', ()=>{
    bodyEl.classList.toggle("dark-mode")
})