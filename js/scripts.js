'use strict'

// Função que cria e aplica as divs necessárias no elemento pai

function creatElement() {
    const $frameDots = document.querySelector('.frame__dots');
    for (let i = 1; i <= 18; i++) {
        const dots = document.createElement('div');
        dots.classList.add('frame__dot');
        dots.classList.add(`frame__dot-${i}`);

        $frameDots.appendChild(dots);
    }
}

creatElement();