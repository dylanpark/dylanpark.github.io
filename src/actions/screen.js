import * as actions from 'constants/action';

export function changeScreen(data) {
  return {
    type: actions.changeScreen,
    app: data.app
  };
}

export function toggleModal(data) {
  return {
    type: actions.toggleModal,
    active: data.active,
    data: data.data
  }
}
