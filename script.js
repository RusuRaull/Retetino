document.addEventListener('DOMContentLoaded', function() {
    var scrollArrow = document.querySelector('.scroll-arrow');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { 
            scrollArrow.classList.add('show');
        } else {
            scrollArrow.classList.remove('show');
        }
    });

    scrollArrow.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-calitate");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const proteine = parseFloat(document.getElementById("proteine").value);
        const carbohidrati = parseFloat(document.getElementById("carbohidrati").value);
        const grasimi = parseFloat(document.getElementById("grasimi").value);
        const calorii = parseFloat(document.getElementById("calorii").value);

        const caloriiProteine = proteine * 4;
        const caloriiCarbohidrati = carbohidrati * 4;
        const caloriiGrasimi = grasimi * 9;

        const procentProteine = (caloriiProteine / calorii) * 100;
        const procentCarbohidrati = (caloriiCarbohidrati / calorii) * 100;
        const procentGrasimi = (caloriiGrasimi / calorii) * 100;

        let scor = 50; 
        let calitate = "Moderată";

        if (procentProteine > 30 && procentGrasimi < 30 && procentCarbohidrati < 40) {
            scor = 90; 
            calitate = "Foarte Bună";
        } else if (procentProteine > 20 && procentGrasimi < 40 && procentCarbohidrati < 50) {
            scor = 80; 
            calitate = "Bună";
        } else if (procentProteine > 15 && procentGrasimi < 50 && procentCarbohidrati < 60) {
            scor = 60; 
            calitate = "Moderată";
        } else if (procentGrasimi > 50 || procentCarbohidrati > 70) {
            scor = 40; 
            calitate = "Slabă";
        } else {
            scor = 20; 
            calitate = "Foarte Slabă";
        }

        const indicator = document.querySelector(".indicator");
        indicator.style.left = `${scor}%`; 

        const calitateText = document.querySelector(".calitate-text");
        calitateText.textContent = calitate;

        if (calitate === "Foarte Bună") {
            indicator.style.backgroundColor = "#387F39"; 
        } else if (calitate === "Bună") {
            indicator.style.backgroundColor = "#BEDC74"; 
        } else if (calitate === "Moderată") {
            indicator.style.backgroundColor = "white"; 
        } else if (calitate === "Slabă") {
            indicator.style.backgroundColor = "#F4A259"; 
        } else {
            indicator.style.backgroundColor = "#D00000"; 
        }
    });
});
