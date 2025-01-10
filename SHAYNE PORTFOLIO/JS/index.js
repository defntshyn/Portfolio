document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.text p');
    texts.forEach((text) => {
        text.innerHTML = text.innerText.split('').map(
            (char, i) =>
                `<span style="transform:rotate(${i * 5}deg)">${char}</span>`
        ).join('');
    });
});