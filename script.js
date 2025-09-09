document.addEventListener("DOMContentLoaded", () => {
    const pitanja = document.querySelectorAll(".pitanje");
    pitanja.forEach(pitanje => {
        pitanje.addEventListener("click", () => {
            pitanje.classList.toggle("active");
        });
    });
});

let brojanje = localStorage.getItem("brojPoseta") || 0;
brojanje++;
localStorage.setItem("brojPoseta", brojanje);
document.getElementById("brojac").innerText = brojanje;