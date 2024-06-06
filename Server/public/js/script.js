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


/* API Fetch
document.addEventListener('DOMContentLoaded', function () {
  fetch('http://localhost:5000/getAll')
  .then(response => response.json())
  .then(data => console.log(data));
  loadHTMLData();
});

function loadHTMLData(data) {
  const nodata = document.querySelector('.login-form');
  
  if (data === null) {
    nodata.innerHTML = "<p>No Data</p>";
  }
}*/
