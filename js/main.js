(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

})(jQuery);




// videos rate
function playVideo(videoPath, description, author) {
    const video = document.getElementById('main-video');
    const videoDescription = document.getElementById('video-description');
    const videoAuthor = document.getElementById('video-author');
    
    video.src = videoPath;
    videoDescription.textContent = `"${description}"`;
    videoAuthor.textContent = `- ${author}`;
    video.play();
}

document.addEventListener('DOMContentLoaded', () => {
    // Optionally, initialize the first video if needed
    playVideo('path/to/video1.mp4', 'This is the first testimonial.', 'Person 1');
});


// pricing 
document.addEventListener("DOMContentLoaded", function () {
    // Initially show the first package
    showPackage("60");

    var choices = document.querySelectorAll(".choice");

    choices.forEach(function (choice) {
        choice.addEventListener("click", function () {
            var selectedPackage = this.dataset.package;
            showPackage(selectedPackage);
        });
    });
});

function showPackage(minutes) {
    var packages = document.querySelectorAll(".package");

    packages.forEach(function (package) {
        if (package.classList.contains("package-" + minutes)) {
            package.style.display = "block"; // Show the selected package
        } else {
            package.style.display = "none"; // Hide other packages
        }
    });
}
