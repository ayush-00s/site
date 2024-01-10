const floatingButton = document.getElementById('noButton');

floatingButton.addEventListener('mouseover', () => {
    // Move the button to a new position when the mouse is over it
    const newPositionX = Math.random() * (window.innerWidth - 100); // Adjust 100 according to your button's width
    const newPositionY = Math.random() * (window.innerHeight - 50); // Adjust 50 according to your button's height

    floatingButton.style.position = 'absolute';
    floatingButton.style.left = newPositionX + 'px';
    floatingButton.style.top = newPositionY + 'px';

});


function updateButtonText() {
    const yesButton = document.getElementById('yesButton');
    
    // Get and display the text under the "Yes" button when clicked
    const buttonText = "i knew it!!";
    
    // Update the button text
    yesButton.innerText = buttonText;

 // Remove the "No" button
    const noButton = document.getElementById('noButton');
    if (noButton) {
        noButton.remove();
    }
// changing rabbit image after cliking on yes
rabbit.src ='happy.png';
}


