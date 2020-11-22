var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

// Show profile

var show = function (elem) {
    elem.style.display = "block";
  };
  
  var hide = function (elem) {
    elem.style.display = "none";
  };
  
  var toggle = function (elem) {
    if (window.getComputedStyle(elem).display === "block") {
      hide(elem);
      return;
    }
  
    show(elem);
  };
  
  document.addEventListener(
    "click",
    function (event) {
      if (!event.target.classList.contains("toggle")) return;
  
      event.preventDefault();
  
      var content = document.querySelector(event.target.hash);
      if (!content) return;
  
      toggle(content);
    },
    false
  );  
