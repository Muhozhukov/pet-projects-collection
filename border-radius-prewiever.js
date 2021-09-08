const form = document.forms.borderRadiusPrewiever;
const topLeftInput = form.elements.topLeft;
const topRightInput = form.elements.topRight;
const bottomLeftInput = form.elements.bottomLeft;
const bottomRightInput = form.elements.bottomRight;
const box = document.querySelector('.border-radius-prewiever-form__box');
const copyButton = document.querySelector('.border-radius-prewiever-result__copy-button');
const resultRadius = document.querySelector('.border-radius-prewiever-result__text');
const popup = document.querySelector('.border-radius-prewiever-popup');

function getInputValues() {
    let topLeftValue = topLeftInput.value;
    let topRightValue = topRightInput.value;
    let bottomLeftValue = bottomLeftInput.value;
    let bottomRightValue = bottomRightInput.value;
    let outputText = document.querySelector('.border-radius-prewiever-result__text');
    outputText.textContent = `${topLeftValue}% ${100 - topLeftValue}% ${bottomRightValue}% ${100 - bottomRightValue}% / ${100 - bottomLeftValue}% ${topRightValue}% ${100 - topRightValue}% ${bottomLeftValue}%`;
}
function changeBorderRadius() {
    let topLeftValue = topLeftInput.value;
    let topRightValue = topRightInput.value;
    let bottomLeftValue = bottomLeftInput.value;
    let bottomRightValue = bottomRightInput.value;
    box.style.borderRadius = `${topLeftValue}% ${100 - topLeftValue}% ${bottomRightValue}% ${100 - bottomRightValue}% / ${100 - bottomLeftValue}% ${topRightValue}% ${100 - topRightValue}% ${bottomLeftValue}%`;
}
form.oninput = function() {
    changeBorderRadius()
    getInputValues();
}
copyButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(resultRadius.textContent);
    openPopup();
    setTimeout(closePopup, 1500);
})

getInputValues();