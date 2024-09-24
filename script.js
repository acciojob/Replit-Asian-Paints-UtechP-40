//your JS code here. If required.
// Function to reset the background color of all grid items to transparent
function resetGridColors() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
}

// Function to change the color of a specific grid item
function changeGridColor() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // First reset the grid
    resetGridColors();

    // Find the grid item with the entered id
    const gridItem = document.getElementById(blockId);
    if (gridItem) {
        gridItem.style.backgroundColor = color;
    } else {
        alert('Invalid Block ID. Please enter a number between 1 and 9.');
    }
}

// Add event listeners for the Change Color and Reset buttons
document.getElementById('change_button').addEventListener('click', changeGridColor);
document.getElementById('reset_button').addEventListener('click', resetGridColors);
