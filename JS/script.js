let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  login.classList.toggle('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () => {
  login.classList.remove('active');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  login.classList.remove('active');
  navbar.classList.remove('active');
}

const swiper = new Swiper(".gallery-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween:20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    700:{
      slidesPerView:2,
    },
  }
})

document.addEventListener('DOMContentLoaded', function () {
  loadHTMLData([])
});

function loadHTMLData(data) {
  const nodata = document.querySelector('.login-form');
  
  if (data.length === 0) {
    table.innerHTML = "<tr><td class='box2'>No Data</td></tr>";
  }
}
