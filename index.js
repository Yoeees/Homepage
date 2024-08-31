const openBtn = document.getElementById("inv-button");
const submitBtn = document.getElementById("submit");
const modal = document.getElementById("pop-up");

openBtn.addEventListener("click",() => {
    modal.classList.add("open");
});