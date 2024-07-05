const burger = document.getElementById('bugger ')
const menu = document.getElementById('menu')

burger.addEventListener('click', function (e) {
    e.preventDefault()
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        menu.scrollIntoView({
            behavior: 'smooth'
        })
    } else {
        menu.classList.add('hidden')
        menu.scrollIntoView({
            behavior: 'smooth'
        })
    }
})