'use strict'

const dot = document.querySelector('#dot');
const sec = document.querySelector('#second');
const dotX = 800;
const dotY = 300;
const px = (n) => n +'px';
const rad = (deg, speed) => (deg * speed * Math.PI)/ 180;
// const delay = Math.round(Math.random() * 100) / 100;
const dots = document.getElementsByClassName('.dot')

dot.style.top = px(dotY);
dot.style.left = px(dotX);

function setClockdots(id, speed, radius){
    let deg = 0;
    const dots = document.getElementById(id);
    setInterval(() => {
        const x = dotX + radius * Math.cos(rad(deg, speed));
        const y = dotY + radius * Math.sin(rad(deg, speed));
        dots.style.top = px(y);
        dots.style.left = px(x);
        deg++;
    }, 1000);
}

setClockdots('hour', 0.008, 100);
setClockdots('minute', 0.1, 150);
setClockdots('second', 6, 180);

// dots.style.animationDelay = delay + 's';

// document.body.append(dot);