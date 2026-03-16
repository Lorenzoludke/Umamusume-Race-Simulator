const musumes = document.querySelectorAll(".musume");
const firstPlace = document.querySelector(".nome").textContent;

musumes.forEach(musume => {
    musume.addEventListener("click", () => {
        const musumeName = musume.getAttribute("data-musume");

        firstPlace.textContent = musumeName;
    });
});


function goBackIndex() {
    window.location.href = "../index.html";
}