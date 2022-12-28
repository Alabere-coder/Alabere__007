
(function () {
    document.querySelector(".theme__btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


const textBtns = document.querySelectorAll('.contact__btn');

textBtns.forEach(textBtn => {
    let text = textBtn.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})