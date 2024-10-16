const color = document.getElementById('color');
const ColorInput = document.getElementById('color-input') as HTMLInputElement | null;

if (color && ColorInput) {
    ColorInput.addEventListener('input', () => {
        color.style.backgroundColor = ColorInput.value;
    });
}