// JavaScript code continuation
let words = document.querySelectorAll(".word");

words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";

    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

// JavaScript code continuation
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";

        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

// Call the changeText function periodically
changeText()
setInterval(changeText, 3000);
// circle------------------------------//

const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg;"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');

    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
    }
});


// !-- M439.96591,298.31007Q417.2749,346.62013,391.01678,397.1894Q364.75866,447.75866,
// 307.37933,434.53409Q250, 421.30953, 202.36201,417.93074Q154.72403,414.55195,114. 37987,
// 383.06872Q74.03571,351.5855,74.2949,300.79275Q74.5541,250, 68.79329,196. 2408Q63.03248,
// 142.48161,115.80953,125.56872Q168.58658,108.65584, 209.29329,83. 96591Q250,59.27597,
//  303.93181,61.32631Q357.86363,63.37664,398.82953,101. 65315Q439.79544,139.92966,
// 451.22618,194.96483Q462.65692,250,439.96591,298. 31007Z;

// M410.16473,300.1606Q424.42219,350.32119,400.81209,410.14239Q377.20199,469. 96358,313.60099,
// 492.39985Q250, 514.83612,208.10099,455.65647Q166.20199,396. 47682,102.74751, 383.9404Q39.29304,
// 371.40398,62.81622,310.70199Q86.3394,250,109. 04637,215.68378Q131.75333, 181.36756, 123.31209,
// 98.98592Q114.87085,16.60428,182. 43542,40.74254Q250,64.8808,283.98592,98.75746Q317.97184,132.63413,
// 386.48592,132.42716Q455,132.2202,425.45363,191.1101Q395.90727,250,410.16473,300.1606Z;


// M437.13685,302.78796Q433.27299,355.57591, 381.59052,372.27191Q329.90804,388. 96791,289.95402,
// 427.01389Q250,465.05987,200.42409,443.33321Q150.84818,421. 60656,108.78796, 388.66679Q66.72773,
// 355.72701,77.80328,302.86351Q88.87883,250, 104.34854,212.43942Q119.81825,174.87883,134.62153,
// 125.57627Q149.42481,76.27371, 199.7124,41.95438Q25,7.63506,299.77299,42.5898Q349.54598,77.54454,392.87883, 
// 109.93906Q436.21169,142.33357,438.6062, 196.16679Q441.00072,250,437.13685,302. 78796Z; -->

var mixer = mixitup('.portfolio-gallery');
// Active menu
let menuItems = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

let len = sections.length;

while (--len && window.scrollY + 100 < sections[len].offsetTop) {}

menuItems.forEach(sec => sec.classList.remove("active"));

function activeMenu() {
    menuItems[len].classList.add("active");
}

activeMenu();

window.addEventListener("scroll", activeMenu);
// Sticky navbar
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 50);
});
// Select the menu icon and navigation list
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

// Add a click event listener to the menu icon
menuIcon.onclick = () => {
  // Toggle the "bx-x" class on the menu icon
  menuIcon.classList.toggle("bx-x");
  
  // Toggle the "open" class on the navigation list
  navlist.classList.toggle("open");
};
window.onscroll = () => {
    
    menuIcon.classList.remove("bx-x");
    
    // Toggle the "open" class on the navigation list
    navlist.classList.remove("open");
  };



  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-items");
      } else {
        entry.target.classList.remove("show-items");
      }
    });
  });
  
  const scrollScale = document.querySelectorAll(".scroll-scale");
  scrollScale.forEach((el) => observer.observe(el));
  
  const scrollBottom = document.querySelectorAll(".scroll-bottom");
  scrollBottom.forEach((el) => observer.observe(el));
  
  const scrollTop = document.querySelectorAll(".scroll-top");
  scrollTop.forEach((el) => observer.observe(el));
  