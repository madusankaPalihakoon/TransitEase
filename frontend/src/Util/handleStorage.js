export const setItem = (key, value) => {
  if (getItem(key) === null) {
    localStorage.setItem(key, value);
    return;
  }
  removeItem(key);
  localStorage.setItem(key, value);
};

export const getItem = (key) => {
  return localStorage.getItem(key) || null;
};

export const removeItem = (key) => {
  return localStorage.removeItem(key);
};

export const setUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : [];
};
