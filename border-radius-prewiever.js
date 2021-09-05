const form = document.forms.borderRadiusPrewiever;
const topLeftInput = form.elements.topLeft;
const topRightInput = form.elements.topRight;
const bottomLeftInput = form.elements.bottomLeft;
const bottomRightInput = form.elements.bottomRight;
// topLeftInput.value = 0;
// topRightInput.value = 0;
// bottomLeftInput.value = 0;
// bottomRightInput.value = 0;
const box = document.querySelector('.border-radius-prewiever-form__box');
const copyButton = document.querySelector('.border-radius-prewiever-result__copy-button');
const resultRadius = document.querySelector('.border-radius-prewiever-result__text');
const popup = document.querySelector('.border-radius-prewiever-popup');


function getInputValues() {
    const topLeftValue = topLeftInput.value;
    const topRightValue = topRightInput.value;
    const bottomLeftValue = bottomLeftInput.value;
    const bottomRightValue = bottomRightInput.value;
    let outputText = document.querySelector('.border-radius-prewiever-result__text');
    outputText.textContent = `${topLeftValue}% ${100 - topLeftValue}% ${bottomRightValue}% ${100 - bottomRightValue}% / ${100 - bottomLeftValue}% ${topRightValue}% ${100 - topRightValue}% ${bottomLeftValue}%`;
}
function changeBorderRadius() {
    const topLeftValue = topLeftInput.value;
    const topRightValue = topRightInput.value;
    const bottomLeftValue = bottomLeftInput.value;
    const bottomRightValue = bottomRightInput.value;
    box.style.borderRadius = `${topLeftValue}% ${100 - topLeftValue}% ${bottomRightValue}% ${100 - bottomRightValue}% / ${100 - bottomLeftValue}% ${topRightValue}% ${100 - topRightValue}% ${bottomLeftValue}%`;
}
topLeftInput.oninput = function() {
    changeBorderRadius()
    getInputValues();
}
topRightInput.oninput = function() {
    changeBorderRadius()
    getInputValues();
}
bottomRightInput.oninput = function() {
    changeBorderRadius()
    getInputValues();
}
bottomLeftInput.oninput = function() {
    changeBorderRadius()
    getInputValues();
}
function closePopup() {
    popup.classList.remove('border-radius-prewiever-popup_active');
}
function openPopup() {
    popup.classList.add('border-radius-prewiever-popup_active');
}
copyButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(resultRadius.textContent);
    openPopup();
    setTimeout(closePopup, 1500);
})

getInputValues();