import { SET_ACTIVE } from '../constant_action';

export default function setActiveTab(title) {
  return {
    type: SET_ACTIVE,
    active: title,
  };
}
