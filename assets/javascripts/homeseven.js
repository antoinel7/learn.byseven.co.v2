const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-seven');
  const logo = document.getElementById('seven-logo');
  if (window.location.href === "https://learn.byseven.co/" || window.location.href === "https://learn.byseven.co/home/" || window.location.href === "https://learn.byseven.co/home-en/") {
    logo.src = "/assets/img/LOGO_BLANC_LEARN.png";
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight*.95) {
          navbar.classList.add('scrolled');
          logo.src = "/assets/img/LOGO-LEARN-02.png";
        } else {
          navbar.classList.remove('scrolled');
          logo.src = "/assets/img/LOGO_BLANC_LEARN.png";
        }
      });
    }
  } else {
    navbar.classList.add('scrolled');
  }
}

initUpdateNavbarOnScroll();
