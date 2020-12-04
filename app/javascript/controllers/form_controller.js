import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['form'];

    submitForm(event) {
        event.preventDefault()
        let isValid = this.validateForm(this.formTarget);
        if (isValid) {
            this.formTargets[0].submit()
        }
    }

    validateForm() {
        let isValid = true;

        let requiredFieldSelectors = 'textarea:required, input:required';
        let requiredFields = this.formTarget.querySelectorAll(requiredFieldSelectors);

        requiredFields.forEach((field) => {
        const nextElementSibling = field.nextElementSibling
          if (!field.disabled && !field.value.trim()) {
            field.focus();
            nextElementSibling.classList.remove('none')
            nextElementSibling.classList.add('block')
            nextElementSibling.innerHTML = 'Es requerido'
            isValid = false;
          } else {
            nextElementSibling.classList.remove('block')
            nextElementSibling.classList.add('none')
          }
        });

        if (!isValid) {
          return false;
        }

        let invalidFields = this.formTarget.querySelectorAll('input:invalid');

        invalidFields.forEach((field) => {
          if (!field.disabled) {
            field.focus();

            isValid = false;
          }
        });
        return isValid;
    }
}
