(function headerListener() {
  const NAV = Array.from(document.getElementsByClassName('nav-bar'))[0];
  console.log(NAV);
  function navHandler(event) {
    if (window.pageYOffset >= 89) {
      console.log('over');
      NAV.classList.add('over');
    } else {
      console.log('under');
      NAV.classList.remove('over');
    }
  }
  window.addEventListener('scroll', navHandler);
})();
