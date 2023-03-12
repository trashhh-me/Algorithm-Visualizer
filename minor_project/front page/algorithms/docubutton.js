function myFunction(btn) {
    const parent = btn.parentElement
    var dots = parent.querySelector("#dots");
    var moreText = parent.querySelector("#more");
    var btnText = parent.querySelector("#myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }