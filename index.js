const productImg = document.querySelector("#productImg");
const btns = document.querySelectorAll(".btn");


btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        productImg.src = `images/img-${index + 1}.jpg`;

        btns.forEach(btn => btn.classList.remove("active"));
        btn.classList.add("active");
    })
})