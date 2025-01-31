// Anime API: https://otakugifs.xyz/

document.addEventListener("DOMContentLoaded", function () {
    const randomizeButton = document.querySelector(".randomize");
    const clearButton = document.querySelector(".clear");
    const displayNumber = document.querySelector(".display");
    const maxNumber = document.querySelector(".max-number");
    const inputError = document.querySelector(".input-error");

    const handleInputValidity = () => {
        const regex = /^\d+$/;
        if (maxNumber.value === "" || !regex.test(maxNumber.value)) {
            inputError.innerHTML = "Input must be a number";

            setTimeout(() => {
                inputError.innerHTML = "";
            }, 3000);

            return false;
        }

        return true;
    };

    const getRandomNumber = () => {
        if (!handleInputValidity()) {
            return;
        }

        let randomNumber = Math.floor(Math.random() * maxNumber.value) + 1;
        displayNumber.innerHTML = randomNumber;
    };

    const clearInput = () => {
        maxNumber.value = "";
        displayNumber.innerHTML = "-";
    };

    randomizeButton.addEventListener("click", getRandomNumber);
    clearButton.addEventListener("click", clearInput);
});
