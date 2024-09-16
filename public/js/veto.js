
  const menuBtn = document.querySelector('.menu-btn')
  const menuBtnIcon = document.querySelector('.menu-btn i')
  const burgerMenu = document.querySelector('.burger-menu')

  menuBtn.onclick = function() {
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open')
    menuBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa fa-bars'
  }

