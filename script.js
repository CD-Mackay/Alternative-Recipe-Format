//switch from expanded/collapsred recipe version.
function myFunction () {
  let amrecipe = document.getElementById("amrecipe");
  let prorecipe = document.getElementById("prorecipe");
  let btnText = document.getElementById("myBtn");
  if (prorecipe.style.display === "none") {
    prorecipe.style.display = "inline";
    amrecipe.style.display = "none";
    btnText.innerHTML = "Expanded Recipe";
  } else {
    prorecipe.style.display = "none";
    btnText.innerHTML = "Collapsed Recipe";
      amrecipe.style.display = "inline";
  }
}


//appear/disappear author's personal essay
function recipeFunction() {
  let personalessay = document.getElementById("personalessay");
  let btnString = document.getElementById("recipeBtn");
  if (personalessay.style.display === "inline") {
    personalessay.style.display = "none";
    btnString.innerHTML = "Author's personal notes";
  } else {
    personalessay.style.display = "inline";
    btnString.innerHTML = "Get rid of it!";
  }
}

// make header shrink when scrolling 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "10px";
  } else {
    document.getElementById("header").style.fontSize = "30px";
  }
}

function highLightFunctionOne() {
  document.getElementById("note-one").style.background = "red";

}

function highLightFunctionTwo() {
  document.getElementById("note-two").style.background = "red";

}