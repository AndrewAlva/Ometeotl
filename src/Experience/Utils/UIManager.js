import Experience from '../Experience.js'
import EventEmitter from './EventEmitter.js'
export default class UIManager extends EventEmitter {
    constructor() {
        super()

        this.experience = new Experience()
        this.events = this.experience.events
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.appState = this.experience.appState
        this.currentView = this.appState.currentStep
        
        // Example setup, replace their content as needed
        this.initUI();
        this.addHandlers();
    }

    initUI() {
        // this.views = document.querySelectorAll('.slideContainer');
        // if (this.views.length >= 1) {
        //     this.views.forEach((view, idx) => {
        //         if (idx == 0) view.classList.add('show');
        //         else view.classList.remove('show');
        //     });
        // }

        // this.initTriggers();
    }

    initTriggers() {
        this.nextStepTriggers = [];

        const nextButtons = document.querySelectorAll('.goToNextStepBtn');
        nextButtons.forEach(element => { this.nextStepTriggers.push(element) });
        this.nextStepTriggers.forEach(element => {
            element.addEventListener('click', this.fireNextStep.bind(this));
        });
    }

    fireNextStep() {
        this.events.trigger('nextStep');
    }


    addHandlers() {
        // this.appState.on('stepChange', (newStep) => {
        //     if (this.destroyed) return;
        //     this.switchViews(newStep);
        // });
    }

    switchViews(newStep) {
        this.views[this.currentView].classList.remove('show');
        this.views[this.currentView].classList.remove('noBlur');
        this.views[newStep].classList.add('show');
        setTimeout(_ => {
            this.views[newStep].classList.add('noBlur');
        }, 200);

        this.currentView = newStep;
    }

    destroy() {
        this.destroyed = true;
    }
}
//test