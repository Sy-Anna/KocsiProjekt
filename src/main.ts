import './style.css'


document.addEventListener('DOMContentLoaded', () => {

    //tires.html ts code
    const seasonChoiceImg = document.getElementById("seasonChoiceImg")! as HTMLElement;
    const offRoadChoiceImg = document.getElementById("offRoadChoiceImg")! as HTMLElement;
    const citySmartChoiceImg = document.getElementById("citySmartChoiceImg")! as HTMLElement;

    var selectedTires: string = "default";

    // color.html ts code
    const color = document.getElementById('color');
    const ColorInput = document.getElementById('color-input') as HTMLInputElement;

    if (color && ColorInput) {
        ColorInput.addEventListener('input', () => {
        color.style.backgroundColor = ColorInput.value;
        });
    }


    // fuel.html ts code 
    const selectGomb = document.getElementById('selectGomb1') as HTMLElement | null;
    const selectText = document.getElementById('selectText') as HTMLElement | null;
    const selectOptions = document.querySelectorAll('.option') as NodeListOf<HTMLElement>;


    if (selectGomb && selectText && selectOptions) {
        selectGomb.addEventListener('click', () => {
            selectGomb.classList.toggle('active');
        });

        selectOptions.forEach(option => {
            option.addEventListener('click', () => {
                const text = (option.querySelector('.option-text') as HTMLElement)?.innerText;
                if (text) {
                    selectText.innerText = text;
                }
            });
        });
    }
})
