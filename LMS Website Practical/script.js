const backToTopButton = document.getElementById("back-to-top");

function updateBackToTopButton() {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "inline-flex";
    } else {
        backToTopButton.style.display = "none";
    }
}

window.addEventListener("scroll", updateBackToTopButton);

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

updateBackToTopButton();
