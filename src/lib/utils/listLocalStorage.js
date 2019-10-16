export const getItem = (name) => {
  let result = global.localStorage.getItem(name);
  result = result ? JSON.parse(result) : [];
  return result;
};

export const setItem = (object) => {
  let list = [];
  const getLocal = getItem('list');
  if (getLocal) {
    list = getLocal;
  }
  list.push(object);
  global.localStorage.setItem('list', JSON.stringify(list));
};
