const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-links')

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


// gallery

const current = document.querySelector('#current')
const imgs = document.querySelector('.imgs')
const img = document.querySelectorAll('.imgs img')
const opacity = 0.6

// Set first img opacity
img[0].style.opacity = opacity

imgs.addEventListener('click', imgClick)

function imgClick(e) {
  // Reset the opacity
  img.forEach((img) => (img.style.opacity = 1))

  // Change current image to src of clicked image
  current.src = e.target.src

  // Add fade in class
  current.classList.add('fade-in')

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove('fade-in'), 500)

  // Change the opacity to opacity var
  e.target.style.opacity = opacity
}
