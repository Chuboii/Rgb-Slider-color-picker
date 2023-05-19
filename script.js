let rgbInput = document.querySelectorAll("input[type='range'")

let pp = document.querySelector("#selected")
let body = document.querySelector("body")
let container = document.querySelector(".container")
let copyBtn = document.querySelector("#btn")

function generateColors() {
    let r = rgbInput[0].value
    let g = rgbInput[1].value
    let b = rgbInput[2].value

    let colorCodes = `rgb(${r},${g},${b})`
    
    pp.value = colorCodes
    body.style.backgroundColor = colorCodes

}


rgbInput.forEach(el => {
    el.addEventListener("input", generateColors)
})

window.addEventListener("load", generateColors())


function copySelected(){
  pp.select()
  document.execCommand("copy")
  copyBtn.innerHTML = "Copied!"
  setTimeout(()=>{
    copyBtn.innerHTML = "Copy color codes"
  }, 1000)
}

copyBtn.addEventListener("click", copySelected)