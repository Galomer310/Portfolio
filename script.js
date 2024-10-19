// NavBar

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
}


// Case study
document.querySelectorAll('.caseStudyBtn').forEach(button => {
    button.addEventListener('click', () => {
        // Find the next sibling that has class 'projectsP2' and toggle its display
        const learnedSection = button.parentElement.querySelector('.projectsP2');
        if (learnedSection.style.display === "none") {
            learnedSection.style.display = "block";
        } else {
            learnedSection.style.display = "none";
        }
    });
});

