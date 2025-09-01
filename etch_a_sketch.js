const container = document.querySelector('.container');

// Creates num div elements with 'square' class and appends them to container
function squares(num){
    for (let i = 0; i < num; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square'); 
        container.appendChild(newDiv);
    }
}

// Creates n squares once the browser is rendered
squares(256);