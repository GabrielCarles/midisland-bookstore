const getItem =(key: string) =>{
  return window.localStorage.getItem(key);
}

const setItem =(key: string, value: any) => {
  return window.localStorage.setItem(key, JSON.stringify(value));
}

const removeItem = (key: string) => {
  localStorage.removeItem(key);
}

export { getItem, setItem, removeItem };
