import { openErrorNotification } from "./notificationHandler.js";

// errorHandler.js
export const logErrors = (error) => {
  Object.keys(error.errors).forEach((key) => {
    error.errors[key].forEach((error) => {
      openErrorNotification(error);
    });
  });
};
