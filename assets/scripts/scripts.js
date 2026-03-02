// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('hey there!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('nice to meet you.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("my name is teja.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("software engineer based in the D.C. area.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i studied information technology and data science.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("interested in building impactful software.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("fan of pizza.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i also like to work out.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "0px";
  }
}
