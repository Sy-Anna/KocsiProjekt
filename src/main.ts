import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const honda = document.querySelector('HondaJazz') as HTMLImageElement;
    const inputColor = document.querySelector('ColorInput') as HTMLInputElement;
    inputColor.addEventListener('input', () => {
        honda.style.backgroundColor = inputColor.value;
    })
})
