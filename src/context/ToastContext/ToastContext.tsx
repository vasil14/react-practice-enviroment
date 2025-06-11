import React, { createContext, useContext, useState } from 'react';
import Toast from './ToastNotification/Toast';
import { v4 as uuidv4 } from 'uuid';

interface ToastItem {
  id: string;
  type: 'success' | 'error' | 'warning';
  title: string
  message: string;
  duration: number;
}

interface ToastContextProps {
  showToast: (type: ToastItem['type'], title: string, message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (type: ToastItem['type'], title: string, message: string, duration = 3000) => {
    const id = uuidv4();
    const newToast: ToastItem = { id, type, title, message, duration };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{
        position: 'fixed',
        top: 20,
        right: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 9999,
        height: '100vh',
      }}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};
