import {
  StyledToast,
  StyledToastContent,
  StyledToastIcon,
  StyledToastText,
  StyledToastTitle,
  StyledToastClose,
  StyledToastProgress,
  StyledToastMessage
} from './styles';
import { Check, ExclamationMark, X } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';

interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning';
  title: string;
  message: string;
  duration: number;
  onClose: (id: string) => void;
}

const ToastType = {
  success: {
    icon: <Check size={25} />,
    color: '#0abe46',
  },
  error: {
    icon: <X size={25} />,
    color: '#ff0000',
  },
  warning: {
    icon: <ExclamationMark size={25} />,
    color: '#ffa500',
  },
};

const Toast = ({ id, type, title, message, duration, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const closeTimeout = useRef<number | null>(null);
  const removeTimeout = useRef<number | null>(null);

  useEffect(() => {
    // Start the fade-out timer
    closeTimeout.current = setTimeout(() => {
      setIsVisible(false); // Trigger fade-out animation
    }, duration);

    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      if (removeTimeout.current) clearTimeout(removeTimeout.current);
    };
  }, [duration]);

  useEffect(() => {
    // After visibility is false, wait for CSS transition (e.g. 300ms) before removing
    if (!isVisible) {
      removeTimeout.current = setTimeout(() => onClose(id), 300);
    }
  }, [isVisible, id, onClose]);

  const handleManualClose = () => {
    onClose(id);
  };

  return (
    <StyledToast className={isVisible ? 'active' : 'inactive'} color={ToastType[type].color}>
      <StyledToastContent>
        <StyledToastIcon color={ToastType[type].color}>
          {ToastType[type].icon}
        </StyledToastIcon>

        <StyledToastText>
          <StyledToastTitle>{title}</StyledToastTitle>
          <StyledToastMessage>{message}</StyledToastMessage>
        </StyledToastText>

        <StyledToastClose onClick={handleManualClose}>
          <X size={18} />
        </StyledToastClose>
      </StyledToastContent>

      <StyledToastProgress
        className={isVisible ? 'active' : ''}
        color={ToastType[type].color}
        style={{ animationDuration: `${duration}ms` }}
      />
    </StyledToast>
  );
};

export default Toast;
