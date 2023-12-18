document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");
  
    menuToggle.addEventListener("change", function() {
      if (this.checked) {
        navbar.style.display = "block";
      } else {
        navbar.style.display = "none";
      }
    });
  });