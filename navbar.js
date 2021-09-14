const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-links')
const date = document.querySelector('#date')
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 62) {
    navbar.classList.add('fixed')
  } else {
    navbar.classList.remove('fixed')
  }
})

const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    links.classList.remove('show-links')

    const id = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(id)

    let position
    if (navbar.classList.contains('fixed')) {
      position = element.offsetTop - 62
    } else {
      position = element.offsetTop - 124
    }
    if (window.innerWidth < 992) {
      if (navbar.classList.contains('fixed')) {
        position = element.offsetTop - 62
      } else {
        position = element.offsetTop - 332 - 62
      }
    }
    window.scrollTo({
      left: 0,

      top: position,
      behavior: 'smooth',
    })
  })
})

date.innerHTML = new Date().getFullYear()
// gallery
//question welcome guide

const questions = document.querySelectorAll('.question-btn')

questions.forEach(function (question) {
  question.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show-text')
  })
})

//fade
AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
})

