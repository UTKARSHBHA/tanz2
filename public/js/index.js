document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelectorAll('.img-timg'),
        modal = document.querySelector('.modal'),
        content = document.querySelector('.modal-content'),
        closeBtn = document.querySelector('.close'),
        prevBtn = document.querySelector('.previous'),
        nextBtn = document.querySelector('.next'),
        caption = document.querySelector('.caption');

    let imgIndex;

    const openModal = () => {
        modal.style.display = 'block';
    }

    const closeModal = () => {
        modal.style.display = 'none';
        document.querySelector(".burger-menu").style.display = "block";

    }

    const displayImg = () => {
        if (imgIndex > images.length - 1) { imgIndex = 0 };
        if (imgIndex < 0) { imgIndex = images.length - 1 };
        content.src = images[imgIndex].src;
        content.alt = images[imgIndex].alt;
        caption.textContent = images[imgIndex].alt;
        // console.log("bugging");
        document.querySelector(".burger-menu").style.display = "none";

    }

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', () => {
            imgIndex = i;
            openModal();
            displayImg();
        });
    }

    closeBtn.addEventListener('click', () => closeModal());

    prevBtn.addEventListener('click', () => {
        imgIndex--;
        displayImg();
    });

    nextBtn.addEventListener('click', () => {
        imgIndex++;
        displayImg();
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft') {
            imgIndex--;
            displayImg();
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowRight') {
            imgIndex++;
            displayImg();
        }
    });

});

// navbar
const navLink = document.querySelectorAll(".menu-nav-item");
const imageLink = document.querySelectorAll(".image-link");
for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
        document.getElementById('burger-toggle').click();

    });
}
for (let i = 0; i < imageLink.length; i++) {
    imageLink[i].addEventListener("click", () => {
        document.getElementById('burger-toggle').click();

    });
}


// contact starts
const contactForm = document.querySelector(".contact-form");

let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("Submit clicked");
    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    }
    // console.log(formData);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == "success") {
            alert("Email Sent");
            name.value = "";
            email.value = "";
            message.value = "";
        }
        else {
            alert("Something went wrong!");
        }
    }
    xhr.send(JSON.stringify(formData));
});