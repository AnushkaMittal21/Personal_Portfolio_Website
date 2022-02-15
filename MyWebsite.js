const toggle= document.getElementsByClassName('toggle-button')[0]
const navbar= document.getElementsByClassName('navbar-links')[0]
const cursor= document.querySelector('.cursor')

toggle.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})

window.onmousemove = (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}
