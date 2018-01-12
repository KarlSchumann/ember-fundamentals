import { helper } from '@ember/component/helper';

/**
 * 
 * @param params {{dasherize "Airmen Study Guides"}}
 * --> "airmen-study-guides"
 */
export function dasherize(
  [ toConvert ]: [string],
  hash: {delim?: string }) {

  return toConvert
    .toLowerCase()
    .replace(/[\s]+/g, hash.delim || '-');
}

export default helper(dasherize);
