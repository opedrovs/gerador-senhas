export default class RangeValor {
    constructor(caracteresInput, caracteresText) {
        this.caracteresInput = document.querySelector(caracteresInput);
        this.caracteresText = document.querySelector(caracteresText);
    }

    init() {
        this.events();
    }

    events() {
        this.caracteresText.innerHTML = this.caracteresInput.value;

        this.caracteresInput.addEventListener('mouseup', () => {
            this.caracteresText.innerHTML = this.caracteresInput.value;
        });

        this.caracteresInput.addEventListener('mouseon', () => {
            this.caracteresText.innerHTML = this.caracteresInput.value;
        });
    }
}
