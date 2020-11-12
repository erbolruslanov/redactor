let output = document.getElementById("output")
let input = document.getElementById("input")
input.oninput = copySecondArea
function copySecondArea(){
    output.innerText = input.value
}


function textThrough(elem){
    output.classList.toggle('line-through')
    output.classList.remove('text-underline')
    document.querySelectorAll('.line').forEach((elemDec) => {
        if (elem !== elemDec){
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textUnderline(elem){
    output.classList.toggle('text-underline')
    output.classList.remove('line-through')
    document.querySelectorAll('.line').forEach((elemDec) => {
        if (elem !== elemDec){
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}

function textItalic(elem){
    output.classList.toggle('text-italic')
    elem.classList.toggle('active')
}
function textBold(elem){
    output.classList.toggle('text-bold')
    elem.classList.toggle('active')
}
function textCenter(elem){
    output.style.textAlign = 'center'
    document.querySelectorAll('.align').forEach((elemDec) => {
        if (elem !== elemDec){
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textRight(elem){
    output.style.textAlign = 'right'
    document.querySelectorAll('.align').forEach((elemDec) => {
        if (elem !== elemDec){
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textLeft(elem){
    output.style.textAlign = 'left'
    document.querySelectorAll('.align').forEach((elemDec) => {
        if (elem !== elemDec){
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textRed(elem){
    let colors = ['text-primary', 'text-success']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-danger')
    document.querySelectorAll('.color').forEach((elemDec) => {
        if (elem !== elemDec){
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textGreen(elem){
    let colors = ['text-primary', 'text-danger']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-success')
    document.querySelectorAll('.color').forEach((elemDec) => {
        if (elem !== elemDec){
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textBlue(elem){
    let colors = ['text-danger', 'text-success']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-primary')
    document.querySelectorAll('.color').forEach((elemDec) => {
        if (elem !== elemDec){
            elemDec.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textUppercase(elem){
    let cases = ['text-lowercase']
    cases.forEach((c)=>output.classList.remove(c))
    output.classList.toggle('text-uppercase')
    elem.classList.toggle('active')
}
function textLowercase(elem){
    let cases = ['text-uppercase']
    cases.forEach((c)=>output.classList.remove(c))
    output.classList.toggle('text-lowercase')
    elem.classList.toggle('active')
}