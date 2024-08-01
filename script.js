

// ======== Respoinsive Menu ========
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}


// ======== Active Menu ========
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .menu ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


// ======== Gallery Click Change ========
const filterContainer = document.querySelector(".gallery-filter"),
  galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});


// ======== Slider ========
var swiper = new Swiper(".mySwiper", {
  // effect: "cube",
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  pauseOnMouseEnter: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  cubeEffect: {
    shadow: false,
    slideShadows: false,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


// ======== AOS Animation ========
AOS.init();

// // showpage content when clicking on links with data-
    document.addEventListener('DOMContentLoaded', function () {
        var showButtons = document.querySelectorAll('.showPage');

        showButtons.forEach(function(button) {
            button.addEventListener('click', function () {
                var content = this.nextElementSibling.querySelector(
                  ".pageContent"
                );
                content.classList.remove('hidden');
            });
        });

        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('hidePage')) {
                var content = event.target.closest('.pageContent');
                content.classList.add('hidden');
            }
        });
    });
    

// ========= function change font
    function isKhmer(text) {
      var khmerRegex = new RegExp("[\u1780-\u17FF]+");
      return khmerRegex.test(text);
    }

    function changeFont() {
      var textElements = document.querySelectorAll("span, p");
      textElements.forEach(function (textElement) {
        var text = textElement.innerText;
        if (isKhmer(text)) {
          // If Khmer characters detected, apply font Khmer
          textElement.classList.add("khmer");
          textElement.classList.remove("english");
        } else {
          // If not Khmer, apply font English
          textElement.classList.add("english");
          textElement.classList.remove("khmer");
        }
      });
    }

    changeFont()