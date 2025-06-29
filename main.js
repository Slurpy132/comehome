function goLetter() {
    window.location.href="letter.html";
}

function goTimeline() {
    window.location.href="timeline.html";
}

function goMySong() {
    window.location.href="mysong.html";
}

function goSong() {
    window.location.href="song.html";
}

document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "shape": {
                "type": "image",
                "image": {
                    "src": "heart100.png",
                    "width": 30,
                    "height": 30
                }
            },
            "size": {
                "value": 10,
                "random": true
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "bottom",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        }
    });
});


let slideIndex = 1;
let slideTimeout;

function showSlidesAuto() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    slideTimeout = setTimeout(showSlidesAuto, 2500); 
}

function plusSlides(n) {
    clearTimeout(slideTimeout);
    showManualSlides(slideIndex += n);
}

function showManualSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    slideTimeout = setTimeout(showSlidesAuto, 3500);
}

window.onload = function () {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
        slides[0].style.display = "block";
        slideTimeout = setTimeout(showSlidesAuto, 3000);
    }
};

function checkPassword() {
      const correctPassword = "owie"; // Change this to your password
      const input = document.getElementById("passwordInput").value.trim();

      if (input === correctPassword) {
        document.getElementById("ogb").style.display = "inline-block";
        document.getElementById("passwordInput").style.display = "none";
        document.getElementById("submitPasswordBtn").style.display = "none";
        document.getElementById("hintText").style.display = "none";
      } else {
        alert("Oopsie! Wrong password 😛");
      }
    }