// https://preview.themeforest.net/item/maxshop-premium-magento-2-19-store-theme/full_screen_preview/9897734?_ga=2.35583906.2052785564.1738261510-993370187.1728848196
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