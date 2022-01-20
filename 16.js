const smallCups = document.querySelectorAll('.small-cup');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const litterRemained = document.querySelector('#liter-remained');

smallCups.forEach((smallCup, index) => {
    smallCup.addEventListener('click', () => hightLightCups(index))
})

function hightLightCups(idx) {
    if (smallCups[idx].classList.contains('filled') && !smallCups[idx].nextElementSibling.classList.contains('filled')) {
        idx--;
    }
    smallCups.forEach((smallCup, idx2) => {
        if (idx2 <= idx) {
            smallCup.classList.add('filled')
        } else {
            smallCup.classList.remove('filled');
        }
    })
    updateBigCups(idx);
}

function updateBigCups(idx) {
    const drank = document.querySelectorAll('.cups .filled');
    percentage.innerText = `${drank.length/smallCups.length*100}%`;
    percentage.classList.add('fill');
    percentage.style.height = drank.length / smallCups.length * 100 + '%';
    remained.innerText
    if (drank.length / smallCups.length * 100 == 100) {
        remained.style.display = 'none';
    } else {
        remained.style.display = 'block';
    }
    litterRemained.innerText = `${2 - drank.length / smallCups.length*2}L`;
    if (drank.length / smallCups.length * 100 == 0) {
        percentage.style.opacity = 0;
    } else {
        percentage.style.opacity = .8;
    }
}