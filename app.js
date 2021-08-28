const questionBox = document.querySelectorAll(".question-box");

questionBox.forEach(function (singleB) {
  const iconBox = singleB.querySelector(".icon-box");

  iconBox.addEventListener("click", function () {
    questionBox.forEach(function (item) {
      if (item !== singleB) {
        item.classList.remove("show-text");
      }
    });
    singleB.classList.toggle("show-text");
  });
});
