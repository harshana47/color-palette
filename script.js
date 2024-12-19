document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const numColorsInput = document.getElementById('numColors');
    const palette = document.getElementById('palette');
    const colorPicker = document.getElementById('colorPicker');
    const addColorButton = document.getElementById('addColorButton');

    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createColorBox(color) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color;

        const colorCode = document.createElement('div');
        colorCode.classList.add('color-code');
        colorCode.innerText = color;

        colorBox.appendChild(colorCode);

        colorBox.addEventListener('click', () => {
            navigator.clipboard.writeText(color).then(() => {
                alert(`Color ${color} copied to clipboard!`);
            });
        });

        return colorBox;
    }

    function generatePalette() {
        const numColors = parseInt(numColorsInput.value);
        palette.innerHTML = '';

        for (let i = 0; i < numColors; i++) {
            const randomColor = generateRandomColor();
            const colorBox = createColorBox(randomColor);
            palette.appendChild(colorBox);
        }
    }

    generateButton.addEventListener('click', generatePalette);

    addColorButton.addEventListener('click', () => {
        const selectedColor = colorPicker.value;
        const colorBox = createColorBox(selectedColor);
        palette.appendChild(colorBox);

        colorPicker.value = "#ff0000";
    });

    generatePalette();
});
