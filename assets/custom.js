
// read more
function toggleContent() {
  var moreContent = document.querySelector(".more-content");
  var toggleButton = document.querySelector(".toggle-button");

  if (moreContent.style.display === "none") {
    moreContent.style.display = "inline";
    toggleButton.textContent = "See Less";
  } else {
    moreContent.style.display = "none";
    toggleButton.textContent = "See More";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var button1 = document.querySelector("#buy_button_head");
  var button2 = document.querySelector(".product-form__buttons button");
  
  if (button1 && button2) {
    button1.addEventListener("click", function () {
      button2.click();
    });
   }
});