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

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active-dot");
        }

        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].classList.add("active-dot");  

        setTimeout(showSlides, 3000);
    }
});

