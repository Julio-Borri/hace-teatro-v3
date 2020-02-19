const initialState = {
  showMenu: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SHOWMENU') {
    return {
      showMenu: !state.showMenu,
    };
  }
  return state;
};

export default reducer;
