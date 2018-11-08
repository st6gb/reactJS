import { SORT_FILM } from '../constant_action';

export default function sortBy(title) {
  return {
    type: SORT_FILM,
    sortBy: title,
  };
}
