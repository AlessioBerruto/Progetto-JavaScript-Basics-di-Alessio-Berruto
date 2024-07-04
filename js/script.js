document.addEventListener('DOMContentLoaded', () => {
    let i = 0;

    const minusButton = document.createElement('button');
    minusButton.className = 'minus-btn';
    minusButton.innerText = '-';
    document.body.appendChild(minusButton);


    const numDiv = document.createElement('div');
    numDiv.className = 'num-div';
    updateNumber();
    document.body.appendChild(numDiv);


    const plusButton = document.createElement('button');
    plusButton.className = 'plus-btn';
    plusButton.innerText = '+';
    document.body.appendChild(plusButton);

    function updateNumber() {
        numDiv.textContent = i;
    }

    minusButton.addEventListener('click', () => {
        i--;
        updateNumber();
    });

    plusButton.addEventListener('click', () => {
        i++;
        updateNumber();
    });
});
