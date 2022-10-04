const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}
