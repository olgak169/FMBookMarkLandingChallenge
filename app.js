const menuOpenBtn = document.querySelector('.menu-open')
const menuCloseBtn = document.querySelector('.menu-close')
const menu = document.querySelector('.top-nav')
const tabs = document.querySelectorAll('.tab a')
const faqs = document.querySelectorAll('.question')
const form = document.getElementById('form')
const input = document.getElementById('email')
const label = document.querySelector('.label')


menuOpenBtn.addEventListener('click', () => {
    menu.classList.add('open')
    document.querySelector('.logo').classList.add('opened')
    menuCloseBtn.style.display = 'block'
})
menuCloseBtn.addEventListener('click', () => {
    document.querySelector('.logo').classList.remove('opened')
    menuCloseBtn.style.display = 'none'
    menu.classList.remove('open')
})

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => { tab.classList.remove('active')})
        tab.classList.add('active')
    })
})
// tabs[0].click()
faqs.forEach(faq => {
    faq.classList.remove('active')
    faq.addEventListener('click', () => {
        
        faq.classList.toggle('active')
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value == '' || input.value == ':invalid') {
        label.classList.add('error')
        return false
    } else {
        label.classList.remove('error')
        return true
    }
})