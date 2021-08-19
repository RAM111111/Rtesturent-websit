let menu = document.querySelector('#bar');
let navbar = document.querySelector('.navbar');
let sicon = document.querySelector('#search');
let sform = document.querySelector('#search-form');
let closeicon = document.querySelector('#close');

let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('.navbara');

let loadercontainer = document.querySelector('.loader-container');



menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top > offset && top < offset + height){
      navlink.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('.navbara[href*='+id+']').classList.add('active');

      });

    };

  });
}


sicon.onclick = () =>{
  sform.classList.toggle('activee');
}


closeicon.onclick = () =>{
  sform.classList.toggle('activee');
}

var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
loop:true
      });


      var swiper = new Swiper(".review-slider", {
              spaceBetween: 20,
              centeredSlides: true,
              autoplay: {
                delay: 7500,
                disableOnInteraction: false,
              },

      loop:true,
      breakpoints:{
        0:{
          slidesPerView:1
        },
        640:{
          slidesPerView:2
        },
        768:{
          slidesPerView:2
        },
        1024:{
          slidesPerView:3
        },
      },
            });


  function loader(){
    loadercontainer.classList.add('fadeout');
  }

  function fadeo(){
    setInterval(loader,3000);
  }
  window.onload = fadeo;
