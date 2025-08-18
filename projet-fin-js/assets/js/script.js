document.addEventListener("DOMContentLoaded", function () {
  const accordionToggles = document.querySelectorAll(".accordion-toggle");

  accordionToggles.forEach((toggle, index) => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector("i");

    if (index === 0) {
      // Premier ouvert par défaut
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
      icon.classList.add("fa-minus");
      icon.classList.remove("fa-plus");
    } else {
      // Les autres fermés
      content.style.maxHeight = "0";
      content.style.opacity = "0";
      content.style.overflow = "hidden";
      icon.classList.add("fa-plus");
      icon.classList.remove("fa-minus");
    }
  });

  accordionToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector("i");
      const isOpen = content.style.maxHeight !== "0px";

      // Fermer tous les autres
      accordionToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          const otherContent = otherToggle.nextElementSibling;
          const otherIcon = otherToggle.querySelector("i");

          otherContent.style.maxHeight = "0";
          otherContent.style.opacity = "0";
          otherIcon.classList.replace("fa-minus", "fa-plus");
        }
      });

      // Basculer l'élément actuel
      if (isOpen) {
        content.style.maxHeight = "0";
        content.style.opacity = "0";
        icon.classList.replace("fa-minus", "fa-plus");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = "1";
        icon.classList.replace("fa-plus", "fa-minus");

        const resizeObserver = new ResizeObserver(() => {
          if (content.style.maxHeight !== "0px") {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
        resizeObserver.observe(content);
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");
  const headerHeight = header.offsetHeight;
  const headerOffset = header.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > headerOffset) {
      header.classList.add("sticky");
      // Compenser la hauteur du header pour que le contenu ne "saute" pas
      document.body.style.paddingTop = headerHeight + "px";
    } else {
      header.classList.remove("sticky");
      document.body.style.paddingTop = "0";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("menu-overlay");

  // Toggle menu
  hamburgerBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
    menuOverlay.classList.toggle("hidden");
    hamburgerBtn.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    // Changer l'icône
    const icon = hamburgerBtn.querySelector("i");
    if (mobileMenu.classList.contains("open")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Fermer le menu quand on clique sur l'overlay
  menuOverlay.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
    menuOverlay.classList.add("hidden");
    hamburgerBtn.classList.remove("active");
    document.body.classList.remove("menu-open");

    // Réinitialiser l'icône
    const icon = hamburgerBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });

  // Fermer le menu quand on clique sur un lien
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      menuOverlay.classList.add("hidden");
      hamburgerBtn.classList.remove("active");
      document.body.classList.remove("menu-open");

      // Réinitialiser l'icône
      const icon = hamburgerBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const filters = document.querySelectorAll('.filter');
  const courses = document.querySelectorAll('.course-card');
  
  filters.forEach(filter => {
      filter.addEventListener('click', function() {
          // Active le filtre cliqué
          filters.forEach(f => f.classList.remove('active'));
          this.classList.add('active');
          
          const filterValue = this.dataset.tag;
          
          // Filtre les cours
          courses.forEach(course => {
              if (filterValue === 'all' || course.classList.contains(filterValue)) {
                  course.classList.remove('hidden');
              } else {
                  course.classList.add('hidden');
              }
          });
      });
  });

  const counters = document.querySelectorAll('.counter');

  counters.forEach((count)=>{
      let counte=0;
      let num=count.dataset.number;

      let id = setInterval(()=>{
          if(counte<num){

              counte++
count.textContent=counte
          }else{
              clearInterval(id);
          }
      })
  })

});


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: false, // On désactive la navigation par défaut d'Owl
      dots: false, // On désactive les points de navigation
      autoplay: false, // Désactivé comme demandé
      responsive:{
          0:{
              items:1
          },
          768:{
              items:1
          }
      }
  });
  
  // Navigation personnalisée
  $('.custom-next').click(function() {
      $('.owl-carousel').trigger('next.owl.carousel');
  });
  
  $('.custom-prev').click(function() {
      $('.owl-carousel').trigger('prev.owl.carousel');
  });
});



$(document).ready(function(){
  // Initialisation du carousel de témoignages
  var testimonialCarousel = $('.testimonials-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: false,
      autoplay: false,
      margin: 20,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:1
          }
      }
  });
  
  // Navigation personnalisée
  $('.custom-testimonial-next').click(function() {
      testimonialCarousel.trigger('next.owl.carousel');
  });
  
  $('.custom-testimonial-prev').click(function() {
      testimonialCarousel.trigger('prev.owl.carousel');
  });
  
  // Vos autres scripts...
});

const menuItems = document.querySelectorAll("li>a");

menuItems.forEach((item)=>{
  item.addEventListener('click', ()=>{
    menuItems.forEach((it)=>{it.classList.remove('active')})
    item.classList.add('active')
  })
})