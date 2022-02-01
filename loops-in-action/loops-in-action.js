const calulateSumButtonElement = document.querySelector('#calculator button');

function calculateSum(){
    const userNumberInputElement = document.getElementById('user-number');
    const eneteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= eneteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calulateSumButtonElement.addEventListener('click', calculateSum);

//highlight

const highlightLinksButton = document.querySelector('#highlight-links button');

highlightLinksButton.textContent = "Highlight all links in the text";

const anchorElements = document.querySelectorAll('#highlight-links a');

function highlightLinks() {
    

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
    highlightLinksButton.textContent = "Remove highlights in the text";
    

}


function removeHighlights(){

    for (const anchorElement of anchorElements) {
        anchorElement.classList.remove('highlight');
    }
    highlightLinksButton.textContent = "Highlight all links in the text";

    
}

//highlightLinksButton.addEventListener('click', removeHighlights); 
highlightLinksButton.addEventListener('click', highlightLinks);

// self challenge: Change button value to Remove highlight and remove on click