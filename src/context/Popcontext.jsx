import React, { createContext, useContext } from 'react';
import { notification } from 'antd';

const PopContext = createContext();

export const PopProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (title, description) => {
    api.open({
      message: 'Product added to cart successfully!',
      description: '', // تركناها فارغة لأن الرسالة كافية في الـ message
      duration: 3,
      placement: 'bottomRight', // تظهر في أسفل المنتصف (أو استخدم 'bottomRight' لأسفل اليمين)
    });
  };

  return (
    <PopContext.Provider value={{ openNotification }}>
      {contextHolder}
      {children}
    </PopContext.Provider>
  );
};

export const usePop = () => useContext(PopContext);