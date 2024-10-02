const boxes = document.querySelectorAll(".box");
let scrollAnimation = () => {
    for (let box of boxes) {
        let topOfBox = box.getBoundingClientRect().top;
        let bottomOfBox = box.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        topOfBox < windowHeight && bottomOfBox > 0
            ? box.classList.add("active")
            : box.classList.remove("active");
    }
}
document.addEventListener("scroll", () => { requestAnimationFrame(scrollAnimation) });