// LocalStorageUtil.js

export const setItem = (key, value) => {
  try {
    // Ensure value is a string
    const valueToStore =
      typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, valueToStore);
  } catch (error) {
    console.error(`Error setting item in localStorage: ${key}`, error);
  }
};

export const getItem = (key) => {
  try {
    return localStorage.getItem(key) || null;
  } catch (error) {
    console.error(`Error getting item from localStorage: ${key}`, error);
    return null;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item from localStorage: ${key}`, error);
  }
};

export const setUser = (data) => {
  try {
    const userData = JSON.stringify(data);
    localStorage.setItem("user", userData);
  } catch (error) {
    console.error("Error setting user in localStorage:", error);
  }
};

export const getUser = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return null;
  }
};

// Extra utility to clear all storage
export const clearAll = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
};
