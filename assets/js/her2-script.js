// disclaimer animation
// window.onscroll = function () {
//   const main = document.querySelector('main');
//   const header = document.querySelector('header');

//   if (main.getBoundingClientRect().y < 220) {
//     document.querySelector(".footer").style.height = '184px';
//   }

//   if (header.getBoundingClientRect().y > -220) {
//     document.querySelector(".footer").style.height = '0';
//   }
// };

let selected = false;

// video
document.querySelector('.to-play-video').addEventListener('click', function () {
  document.querySelector('#video-playback').style.display = 'block';
  document.querySelector('main').style.marginTop = '0';
  document.querySelector('.vjs-big-play-button').click();
});

// tab & nav
function changeView1() {
  document.querySelector('.sub-tabs-sticky-early').style.display = 'flex';
  document.querySelector('.second-view').style.display = 'none';
  document.querySelector('#nav-early-tab').className  = 'active';
  document.querySelector('#nav-early-tab').innerText = 'EARLY OR ADVANCED';
  document.querySelector('#nav-late').className  = 'tab-pane fade';
  document.querySelector('#nav-early').className  = 'tab-pane fade show active';
 
}

function changeView2() {
  document.querySelector('.sub-tabs-sticky-early').style.display = 'none';
  document.querySelector('.second-view').style.display = 'flex';
  document.querySelector('#nav-early-tab').className  = 'active';
  document.querySelector('#nav-late-tab').className  = 'active';
  document.querySelector('#nav-early-tab').innerText = 'METASTATIC'; 
  document.querySelector('#nav-early').className  = 'tab-pane fade';
  document.querySelector('#nav-late').className  = 'tab-pane fade show active';
}

function toogleView(){
    var x = document.getElementById("top-main-nav-toogle");
    if (x.style.overflow === "") {
      x.style.overflow = "visible";
      document.querySelector('#nav-early-tab').innerText = 'EARLY OR ADVANCED';
      document.querySelector('#nav-late-tab').innerText = 'METASTATIC';
      document.querySelector('#nav-early-tab').className  = '';
      document.querySelector('#nav-late-tab').className  = '';
    } else {
      x.style.overflow = "";
    }
}


window.onscroll = function () {
  let nav = document.querySelector('#nav');
  let top_nav = document.querySelector('.top-main-nav');
  let main = document.querySelector('.main-content');
  let pos = main.getBoundingClientRect().y;
  let text = document.querySelector('.text-box-onscroll');
  let text2 = document.querySelector('.text-box-onscroll.text-box-onscroll-late');

  if (pos <= 120) {
    nav.style.cssText += 'display: block;opacity: 1;position: fixed;';
    top_nav.style.cssText += 'position: fixed;left: 50%;transform: translateX(-50%);';
    main.style.marginTop = '164px';
    text.style.paddingTop = '96px';

  } else {
    nav.style.cssText += 'display: none;opacity: 0;position: static;';
    top_nav.style.cssText += 'position: relative;left: initial;transform: none;';
    main.style.marginTop = '0';
    selected = false;

    if (window.screen.width <= 600) {
      text.style.paddingTop = '20px';
      text2.style.paadingTop = '40px';
    } else {
      text.style.paddingTop = '40px';
    }
  }
};

// switching tabs
let tabs = document.querySelectorAll('.sub-tabs-sticky-early > a');

function manageScroll() {
  let scrollTo = document.querySelector('.text-box-onscroll').getBoundingClientRect().y;
    
  scrollTo = window.screen.width > 600 ? scrollTo - 120 : scrollTo - 80;

  window.scrollBy({ 
    top: scrollTo,
    left: 0, 
    behavior: 'smooth' 
  });
}

for (let i = 0; i< tabs.length; ++i) {
  tabs[i].addEventListener('click', function () {
    // document.querySelector('#go-to-main').click();
    manageScroll();
  });
}

// for (tab of tabs) {
//   tab.addEventListener('click', function () {
//     // document.querySelector('#go-to-main').click();
//     manageScroll();
//   });
// }

document.querySelector('#nav-early-tab').addEventListener('click', function () {
  if (!selected) {
    manageScroll();
  }
  selected = true;
});

document.querySelector('#nav-late-tab').addEventListener('click', function () {
  if (!selected) {
    manageScroll();
  }
  selected = true;

  let scrollTo = document.querySelector('.text-box-onscroll').getBoundingClientRect().y;
    
  scrollTo = window.screen.width > 600 ? scrollTo - 119 : scrollTo - 80;

  document.querySelector('.text-box-onscroll.text-box-onscroll-late').style.paddingTop = '91px';

  window.scrollBy({ 
    top: scrollTo,
    left: 0, 
    behavior: 'smooth' 
  });
});

// if IE
function isIE() {
  var ua = navigator.userAgent;
  return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1; 
}

if (isIE()){
  document.querySelector('.sub-tabs > a:first-child, .sub-tabs > a:nth-child(2)').style.marginRight = '0';
  document.querySelector('.sub-tabs.sub-tabs-sticky-early > a:first-child').style.marginRight = '0';
  document.querySelector('.sub-tabs.sub-tabs-sticky-early > a:nth-child(2)').style.marginRight = '0';
}