import { Controller } from 'stimulus';

export default class extends Controller {

    static targets = ["options"]

    initialize() {

    }

    toggle() {
        this.optionsTargets.forEach(el => {
            el.classList.toggle('active')
        })
    }


}
