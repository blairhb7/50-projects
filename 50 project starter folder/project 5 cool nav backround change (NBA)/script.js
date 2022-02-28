const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const pic = document.querySelector('.background')
const Mj = document.querySelector('#Mj')
const kobe = document.querySelector('#kobe')
const magic = document.querySelector('#Magic')
const ewing = document.querySelector('#ewing')
const color = document.getElementById('#title')


menu.onclick = function(){
    nav.classList.toggle('open')
}

const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item) => item.addEventListener('mouseover', activeLink))


Mj.addEventListener ('mouseover', function(){
    document.getElementById("pic1").style.backgroundImage = "url('mj.jpg')"
    document.getElementById("title").style.color ="#d40b0b"
    document.getElementById("title").style.borderColor ="solid 1px #fff"
})

kobe.addEventListener ('mouseover', function(){
    document.getElementById("pic1").style.backgroundImage = "url('kobe.jpg')"
    document.getElementById("title").style.color ="#ebcc1c"
})
magic.addEventListener ('mouseover', function(){
    document.getElementById("pic1").style.backgroundImage = "url('magic.jpg')"
    document.getElementById("title").style.color ="#6206bf"
})
ewing.addEventListener ('mouseover', function(){
    document.getElementById("pic1").style.backgroundImage = "url('ewing.jpeg')"
    document.getElementById("title").style.color ="#0c6aed"
})

