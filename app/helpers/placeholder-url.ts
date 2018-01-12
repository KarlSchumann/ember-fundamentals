import { helper } from '@ember/component/helper';

/**
 * 
 * @param params {{placeholderUrl 300 200}}
 * --> http://placekitten.com/300/200
 */
export function placeholderUrl(params, hash: {w:string, h:string}) {
  return 'http://placecorgi.com/' + hash.w + '/' + hash.h;
}

export default helper(placeholderUrl);
