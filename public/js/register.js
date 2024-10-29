form.addEventListener("submit", () => {
  const register = {
    role: role.value,
    email: email.value,
    password: password.value
  }
  fetch("api/register", {
    method: "POST",
    body : JSON.stringify(register),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
      .then(data => {
        if(data.status == "error") {
          success.style.display = "none"
          error.style.display = "block"
          error.innerText = data.error
        } else {
          error.style.display = "none"
          success.style.display = "block"
          success.innerText = data.success
        }
      })
})

/*Burger-Menu SCRIPT*/


const menuBtn = document.querySelector('.menu-btn')
const menuBtnIcon = document.querySelector('.menu-btn i')
const burgerMenu = document.querySelector('.burger-menu')

menuBtn.onclick = function() {
  burgerMenu.classList.toggle('open')
  const isOpen = burgerMenu.classList.contains('open') 
  menuBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fas fa-bars'
}