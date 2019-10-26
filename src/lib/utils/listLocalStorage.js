export const getItem = (name) => {
  let result = global.localStorage.getItem(name);
  result = result ? JSON.parse(result) : [];
  return result;
};

export const putItem = (object) => {
  let list = [];
  const getLocal = getItem('list');
  if (getLocal) {
    list = getLocal;
  }
  list.push(object);
  global.localStorage.setItem('list', JSON.stringify(list));
};

export const setItem = (object) => {
  const list = object || [];
  global.localStorage.setItem('list', JSON.stringify(list));
};

export const getNextId = (name) => {
  let list = global.localStorage.getItem(name);
  list = list ? JSON.parse(list) : [];
  return list.length > 0 ? list[list.length - 1].id + 1 : 0;
};
