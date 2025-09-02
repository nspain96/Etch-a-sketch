const container = document.querySelector('.container');

// Creates a Color Pallete for the Board 
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];

// Creates num div elements with 'square' class and appends them to container

function squares(num){

    // Calculate how many squares per row/column with what size
    const gridSize = num;
    const squareWidth = `${960 / gridSize}px`;
    
    for (let i = 0; i < num * num ; i++) {

        // Generates a random color from the array above
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const newDiv = document.createElement('div');
        
        // Adds the Square Class to the Squares
        newDiv.classList.add('square');
        newDiv.style.width = squareWidth;
        newDiv.style.height = squareWidth;
        
        // Add hover event listener to each square
        newDiv.addEventListener('mouseover', function() {
            newDiv.style.backgroundColor = randomColor;
        });

        container.appendChild(newDiv);
    }
}

// Creates n squares once the browser is rendered

squares(16);


const btn = document.querySelector('button');


btn.addEventListener('click',function(){
    myInt = Number(prompt("Enter Grid Dimensions 1-100 (Example entering 6 will show a 6x6 grid):"));

    if(myInt <= 100 && myInt >= 1){

    container.replaceChildren();
    squares(myInt);

    } else{
        alert('Please enter a integer between 1 - 100');
    }});

  

  
    







     