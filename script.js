document.addEventListener('DOMContentLoaded', () => {
    const radar = document.querySelector('.radar');

    // Create the drone logo ping
    const dronePing = document.createElement('div');
    dronePing.className = 'ping drone-logo';
    const size = 50; // Set the size of the drone logo
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    dronePing.style.width = `${size}px`;
    dronePing.style.height = `${size}px`;
    dronePing.style.left = `calc(${x}% - ${size / 2}px)`;
    dronePing.style.top = `calc(${y}% - ${size / 2}px)`;

    radar.appendChild(dronePing);
});
