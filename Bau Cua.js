const xocBtn = document.querySelector('.btn');
const result = document.querySelector('.bau-cua__result-box');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

xocBtn.addEventListener('click', () => {
    getRandomArbitrary(1, 6);
    
    result.innerHTML = `
                <img src="${Math.ceil(getRandomArbitrary(1, 6))}.png" alt="">
                <img src="${Math.ceil(getRandomArbitrary(1, 6))}.png" alt="">
                <img src="${Math.ceil(getRandomArbitrary(1, 6))}.png" alt="">
    `
})