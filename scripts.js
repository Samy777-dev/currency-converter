
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");
const currencyName = document.getElementById("currency-name");
const currencyImg = document.querySelector(".currency-img");
const inputCurrency = document.querySelector(".input-currency");

function convertvalues() {
    const inputCurrencyValue = parseFloat(inputCurrency.value);

    if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
        alert("Digite um valor válido maior que zero");
        return;
    }

    const dolarToday = 5.62; // Substituir por uma API real em produção
    const euroToday = 6.20; // Substituir por uma API real em produção
    const libraToday = 7.56; // Substituir por uma API real em produção

    // Exibe o valor original em Real
    currencyValueToConvert.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    // Converte e formata corretamente de acordo com a moeda escolhida
    if (currencySelect.value === "dolar") {
        currencyValueConverted.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
        currencyName.textContent = "Dólar Americano";
        currencyImg.src = "./assets/Dolar.png";
    } else if (currencySelect.value === "euro") {
        currencyValueConverted.textContent = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
        currencyName.textContent = "Euro";
        currencyImg.src = "./assets/Euro.png";
    } else if (currencySelect.value === "libra") {
        currencyValueConverted.textContent = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
        currencyName.textContent = "Libra Esterlina";
        currencyImg.src = "./assets/libra 1.png";
    }
}

function changeCurrency() {
    const currencyNameElement = document.getElementById("currency-name");
    const currencyImgElement = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyNameElement.textContent = "Dólar Americano";
        currencyImgElement.src = "./assets/Dolar.png";
    } else if (currencySelect.value === "euro") {
        currencyNameElement.textContent = "Euro";
        currencyImgElement.src = "./assets/Euro.png";
    } else if (currencySelect.value === "libra") {
        currencyNameElement.textContent = "Libra Esterlina";
        currencyImgElement.src = "./assets/libra 1.png";
    }
}

// Garantir que a conversão só aconteça quando o botão for clicado
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertvalues);
