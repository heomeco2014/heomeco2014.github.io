const img = document.querySelector('.img');

// const heart = document.querySelector('.heart');
const container = document.querySelector('.container');

img.addEventListener('dblclick', function (event) {
    bounds = this.getBoundingClientRect();
    var left = bounds.left;
    var top = bounds.top;
    var x = event.pageX - left;
    var y = event.pageY - top;
    var cw = this.clientWidth
    var ch = this.clientHeight
    var iw = this.naturalWidth
    var ih = this.naturalHeight
    var px = x / cw * iw
    var py = y / ch * ih

    const heart = document.createElement('div');
    heart.classList.add('heart');
    container.appendChild(heart);
    heart.style.top = y + 'px';
    heart.style.left = x + 'px';

    setTimeout(() => {
        heart.remove();
    }, 700);
    console.log(x, y);
})