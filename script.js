
// document.addEventListener("DOMContentLoaded", function () {
//     const header = document.getElementById("header");
//     const sections = document.querySelectorAll(".section");
//     const contents = document.querySelectorAll(".content");
//     let menuOpen = false; // Flag to track whether the menu is open

//     new fullpage('#fullpage', {
//         autoScrolling: true,
//         scrollBar: true,
//         afterLoad: function (origin, destination, direction) {
//             const video = destination.item.querySelector('video');

//             if (video) {
//                 video.play();
//             }

//             // Remove any existing color classes from all content elements
//             header.classList.remove("white-text", "black-text");
//             contents.forEach(content => {
//                 content.classList.remove("white-text", "black-text");
//             });

//             // Add the corresponding color class based on the section
//             if (["one", "six", "seven"].includes(destination.item.classList[1])) {
//                 header.classList.add("white-text");
//                 contents.forEach(content => {
//                     content.classList.add("white-text");
//                 });
//             } else {
//                 header.classList.add("black-text");
//                 contents.forEach(content => {
//                     content.classList.add("black-text");
//                 });
//             }

//             // Add 'active' class to the current section
//             sections.forEach(section => {
//                 section.classList.remove("active");
//             });
//             sections[destination.index].classList.add("active");

//             if (menuOpen) {
//                 // If the menu is open, prevent scrolling to the next section
//                 return false;
//             }
//             contents.forEach(content => {
//                 content.style.opacity = 0;
//                 content.style.transform = "translateY(20px)";
//             });

//             // Fade in the content of the current section
//             contents[destination.index].style.transition = "opacity 1s, transform 1s";
//             contents[destination.index].style.opacity = 1;
//             contents[destination.index].style.transform = "translateY(0)";
//         },

//         onLeave: function (origin, destination, direction) {
//             // Check if the menu is open and prevent scrolling to the next section
//             if (menuOpen) {
//                 return false;
//             }

//             contents[origin.index].style.transition = "opacity 1s, transform 1s";
//             contents[origin.index].style.opacity = 0;
//             contents[origin.index].style.transform = "translateY(20px)";
//         },
//     });

//     function toggleMenu() {
//         let svgContainer1 = document.querySelector('aside');
//         svgContainer1.classList.toggle('show');
//         menuOpen = !menuOpen; // Toggle the menuOpen flag
//     }

//     // Add an event listener to your menu button assuming it has a class of 'menub'
//     document.querySelector('.menub').addEventListener('click', toggleMenu);
//     document.querySelector('.closebtn').addEventListener('click', toggleMenu);
// });

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const sections = document.querySelectorAll(".section");
    const contents = document.querySelectorAll(".content");
    let menuOpen = false; // Flag to track whether the menu is open

    new fullpage('#fullpage', {
        // responsive: 1024,
        autoScrolling: true,
        scrollBar: true,
        afterLoad: function (origin, destination, direction) {
            const video = destination.item.querySelector('video');

            if (video) {
                video.play();
            }

            // Remove any existing color classes from all content elements
            header.classList.remove("white-text", "black-text");
            contents.forEach(content => {
                content.classList.remove("white-text", "black-text");
            });

            // Add the corresponding color class based on the section
            if (["one", "six", "seven"].includes(destination.item.classList[1])) {
                header.classList.add("white-text");
                contents.forEach(content => {
                    content.classList.add("white-text");
                });
            } else {
                header.classList.add("black-text");
                contents.forEach(content => {
                    content.classList.add("black-text");
                });
            }

            // Add 'active' class to the current section
            sections.forEach(section => {
                section.classList.remove("active");
            });
            sections[destination.index].classList.add("active");

            if (menuOpen) {
                // If the menu is open, prevent scrolling to the next section
                return false;
            }

            contents.forEach(content => {
                content.style.opacity = 0;
                content.style.transform = "translateY(20px)";
            });

            // Delay and then fade in the content of the current section (only for section one)
            if (destination.index === 0) {
                setTimeout(() => {
                    contents[destination.index].style.transition = "opacity 0.5s, transform 1s";
                    contents[destination.index].style.opacity = 1;
                    contents[destination.index].style.transform = "translateY(0)";
                }, 1000); // Adjust the delay time as needed (in milliseconds)
            } else {
                // Fade in the content of the current section for other sections
                contents[destination.index].style.transition = "opacity 0.5s, transform 1s";
                contents[destination.index].style.opacity = 1;
                contents[destination.index].style.transform = "translateY(0)";
            }
        },

        onLeave: function (origin, destination, direction) {
            // Check if the menu is open and prevent scrolling to the next section
            if (menuOpen) {
                return false;
            }

            contents[origin.index].style.transition = "opacity 0.5s, transform 1s";
            contents[origin.index].style.opacity = 0;
            contents[origin.index].style.transform = "translateY(20px)";
        },
    });

    function toggleMenu() {
        let svgContainer1 = document.querySelector('aside');
        svgContainer1.classList.toggle('show');
        menuOpen = !menuOpen; // Toggle the menuOpen flag
    }

    // Add an event listener to your menu button assuming it has a class of 'menub'
    document.querySelector('.menub').addEventListener('click', toggleMenu);
    document.querySelector('.closebtn').addEventListener('click', toggleMenu);
});
