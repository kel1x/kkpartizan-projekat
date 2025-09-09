document.addEventListener("DOMContentLoaded", () => {
    const pitanja = document.querySelectorAll(".pitanje");
    pitanja.forEach(pitanje => {
        pitanje.addEventListener("click", () => {
            pitanje.classList.toggle("active");
        });
    });

    let brojanje = parseInt(localStorage.getItem("brojPoseta")) || 0;
    brojanje++;
    localStorage.setItem("brojPoseta", brojanje);
    document.getElementById("brojac").innerText = brojanje;

    let index = 0;
    function prikaziSledecu() {
        let slike = document.querySelectorAll(".slideshow img");
        for (let i = 0; i < slike.length; i++) {
            slike[i].style.display = "none";
        }
        index++;
        if (index > slike.length) { index = 1 }
        slike[index - 1].style.display = "block";
        setTimeout(prikaziSledecu, 3000);
    }
    prikaziSledecu();
});

