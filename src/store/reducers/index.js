import { combineReducers } from 'redux';
import active from './active';
import sorting from './sorting';
import filmsReduces from './filmsReduces';


export default combineReducers({
  active,
  sorting,
  filmsReduces,
});
