import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const color = document.getElementById('color');
    const ColorInput = document.getElementById('color-input') as HTMLInputElement;

    if (color && ColorInput) {
        ColorInput.addEventListener('input', () => {
        color.style.backgroundColor = ColorInput.value;
        });
    }
})
