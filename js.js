const wrapper = document.querySelector(".wrapper"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img"),
qrInput = wrapper.querySelector(".form input");

generateBtn.onclick = generateCode;
qrInput.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        generateBtn.click();
    }
});
qrInput.onkeyup = () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active");
    };
}
function generateCode() {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code.....";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.onload = ()  => {
        wrapper.classList.add("active");
        generateBtn.innerHTML = "Generate QR Code";
    }
}