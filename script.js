const cross = document.querySelector('.modal-close')
const mainCards= document.querySelector('.main-card')
const overlay = document.querySelector('.overlay')

cross.addEventListener('click',function(){
    overlay.style.display = 'none'
})
mainCards.addEventListener('click',function(){
    overlay.style.display = 'flex'
})
