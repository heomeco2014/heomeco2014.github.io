const container = document.querySelector('.container');
window.addEventListener('keydown', (e) => {

    container.innerHTML = `
    <h1 class="event__which">${e.which}</h1>
        <div class="event__all">
            <div class="event-key">
                <div class="top">event.key</div>
                <div class="bottom">${e.key}</div>
            </div>
            <div class="event-location">
                <div class="top">event.location</div>
                <div class="bottom">${e.location}</div>
            </div>
            <div class="event-which">
                <div class="top">event.which</div>
                <div class="bottom">${e.which}</div>
            </div>
            <div class="event-code">
                <div class="top">event.code</div>
                <div class="bottom">${e.code}</div>
            </div>
        </div>
    `
})