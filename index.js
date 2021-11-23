(function headerListener() {
  const NAV = Array.from(document.getElementsByClassName('nav-bar'))[0];
  console.log(NAV);
  function navHandler(event) {
    if (window.pageYOffset >= 89) {
      NAV.classList.add('over');
    } else {
      NAV.classList.remove('over');
    }
  }
  window.addEventListener('scroll', navHandler);
})();
