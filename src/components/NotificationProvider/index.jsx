import React, { createContext, useContext } from "react";
import { notification } from "antd";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification({
    placement: "topRight",
  });

  const notify = (type, { message, description }) => {
    api[type]({
      message,
      description,
    });
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifier = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotifier must be used within a NotificationProvider");
  }
  return context.notify;
};
