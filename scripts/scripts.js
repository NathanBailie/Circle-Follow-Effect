"use strict"

let circles = document.querySelectorAll('.container div');

let clientX = -100;
let clientY = -100;

moveCircles();

function moveCircles() {
    document.addEventListener("mousemove", (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    gsap.set(circles, {
        x: clientX,
        y: clientY
    });

    let animation = () => {
        gsap.to(circles, {
            duration: 0.1,
            x: clientX,
            y: clientY,
            stagger: {
                amount: 0.5,
                from: 0
            }
        });
        requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
};
