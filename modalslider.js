let slideIndex = 1;

function openModal(modalfor) {
    document.getElementById(modalfor+'-imageModal').style.display = 'block';
    showSlides(slideIndex,modalfor);
}

function closeModal(modalfor) {
    document.getElementById(modalfor+'-imageModal').style.display = 'none';
    slideIndex = 1;
}

function plusSlides(value, target) {
    showSlides(slideIndex += value,target);
}

function showSlides(n,modalfor) {
    let i;
    debugger
    const slides = document.getElementsByClassName(modalfor+'-slider-image');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}

document.getElementById('openModal').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);