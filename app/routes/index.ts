import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    model() {
        return this.store.findAll('course');
        //return this.modelFor('application');

        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(
        //             this.modelFor('application')
        //         )
        //     }, 1000)
        // })
    }
}
