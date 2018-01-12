import Component from '@ember/component';

export default class CourseListItem extends Component {
    classNames = ['course-list-item'];
    attributeBindings = ['model.title:data-name'];
}

