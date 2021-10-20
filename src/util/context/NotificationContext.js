import React, { useState, createContext } from "react";

export const NotificationContext = createContext();

export const NotificationStateProvider = (props) => {
  // eslint-disable-next-line
  const [isNotified, setisNotified] = useState(false);

  return (
    <NotificationContext.Provider value={[isNotified, setisNotified]}>
      {props.children}
    </NotificationContext.Provider>
  );
};
