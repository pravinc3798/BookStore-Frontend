export const SelectLoginOrRegister = (selectedPane) => {
  return {
    type: "PaneSelection",
    pane: selectedPane,
  };
};

export const OpenBook = (bookId) => {
  return {
    type: "OpenTheBook",
    book: bookId,
  };
};

export const Rerender = () => {
  return {
    type: "rerender",
  };
};
