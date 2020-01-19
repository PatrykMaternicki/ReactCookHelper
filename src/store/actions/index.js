export const isOpen = () => ({
  type: 'OPEN',
  payload: false
});

export const isClose = () => ({
  type: 'CLOSE',
  payload: true
});

export const changeViewToForm = (view) => ({
  type: 'FORM',
  view
});