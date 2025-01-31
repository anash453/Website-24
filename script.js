let myBtn = document.getElementById("myBtn");

window.onscroll = function () {


  // Handle button visibility
  if (
    document.body.scrollTop > 0 ||
    document.documentElement.scrollTop > 0
  ) {
    myBtn.classList.add("show");
  } else {
    myBtn.classList.remove("show");
  }
};