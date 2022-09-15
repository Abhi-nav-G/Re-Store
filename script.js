const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}
if (close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}
const place = document.getElementById("place")
place.addEventListener('click',()=>{
    place.textContent="Order Placed!"
})