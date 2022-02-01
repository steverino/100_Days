let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

//console.dir(productNameInputElement); 
//The console.dir() will show the properties available for use. ie... maxLength

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
    
    if (remainingCharacters <= 10) {
        document.getElementById('product-name').classList.add('warning');
        document.getElementById('remaining-chars').classList.add('warning');
    } else {
        document.getElementById('product-name').classList.remove('warning');
        document.getElementById('remaining-chars').classList.remove('warning');
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);




