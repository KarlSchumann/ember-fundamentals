import Route from '@ember/routing/route';

export default class CourseRoute extends Route {
    model(params) {
        // let { id } = params;
        // let allCourses = this.modelFor('application');
        // return allCourses.findBy('slug', id);
        return this.store.findRecord('course', params.id);
    }
}

