const container = document.querySelector('.container');

// Creates a Color Pallete for the Board 
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];

// Creates num div elements with 'square' class and appends them to container

function squares(num){
    for (let i = 0; i < num; i++) {

        const newDiv = document.createElement('div');
        
        // Generates a random color from the array above
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Adds the Square Class to the Squares
        newDiv.classList.add('square');

        // Add hover event listener to each square
        newDiv.addEventListener('mouseover', function() {
            newDiv.style.backgroundColor = randomColor;
        });

        container.appendChild(newDiv);
    }
}

// Creates n squares once the browser is rendered

squares(256);

     