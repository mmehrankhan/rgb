function updateColor() {
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    
    var colorCircle = document.getElementById('color-circle');
    colorCircle.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

document.getElementById('red').addEventListener('input', updateColor);
document.getElementById('green').addEventListener('input', updateColor);
document.getElementById('blue').addEventListener('input', updateColor);

// Initial call to set initial color
updateColor();