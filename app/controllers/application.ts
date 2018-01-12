import Controller from '@ember/controller';

export interface ICourse {
  title: string;
  summary: string;
  'image-info': {
    square2x: {
      width: number;
      url: string;
      height: number;
    };
  };
}

export default class ApplicationController extends Controller {

}
