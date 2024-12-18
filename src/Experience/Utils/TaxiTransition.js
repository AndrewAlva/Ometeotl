import { Transition } from '@unseenco/taxi'


export default class TaxiTransition extends Transition {

    /*
    * Handle the transition leaving the previous page.
    * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
    */
    onLeave({ from, trigger, done }) {
        // Do something
        console.log('from', from);

        if ( this.detectView(from) == 'about' ) {
            experience.appState.reset()
        }
        done()
    }

    /*
    * Handle the transition entering the next page.
    * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
    */
    onEnter({ to, trigger, done }) {
        // Do something
        console.log('to', to);

        if ( this.detectView(to) == 'about' ) {
        }

        done()
    }

    detectView(viewContainer) {
        if ( viewContainer.id.includes('about') ) return 'about';
    }
}