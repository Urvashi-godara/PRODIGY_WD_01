 // Smooth scrolling effect for navigation links
 document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      });
    });
  });
  
