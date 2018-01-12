import EmberObject from '@ember/object';

class Course extends EmberObject {
  title: string;
  description: string;
  tags: string[];
  languages: string[];

  constructor() {
    super();
    this.title = "No Title";
    this.description = "";
    this.tags = [];
    this.languages = [];
  }

  static languageName = function(abbrev) {
    if (abbrev == 'js') return 'JavaScript';
    else return 'Unknown';
  }
}

export default Course;