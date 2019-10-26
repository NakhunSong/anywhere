/**
 * Get data from localStorage item named by itemName
 * @param {string} itemName
 */
export const getItem = (itemName) => {
  let result = global.localStorage.getItem(itemName);
  result = result ? JSON.parse(result) : [];
  return result;
};

/**
 * Push data to localStorage item named by itemName
 * @param {string} itemName
 * @param {object} object
 */
export const pushItem = (itemName, object) => {
  let list = [];
  const getLocal = getItem(itemName);
  if (getLocal) {
    list = getLocal;
  }
  list.push(object);
  global.localStorage.setItem(itemName, JSON.stringify(list));
};

/**
 * Set data to localStorage item named by itemName
 * @param {string} itemName
 * @param {object} object
 */
export const setItem = (itemName, object) => {
  const list = object || [];
  global.localStorage.setItem(itemName, JSON.stringify(list));
};

/**
 * Get next memo id
 * @param {string} itemName
 */
export const getNextId = (itemName) => {
  let list = global.localStorage.getItem(itemName);
  list = list ? JSON.parse(list) : [];
  return list.length > 0 ? list[list.length - 1].id + 1 : 0;
};
