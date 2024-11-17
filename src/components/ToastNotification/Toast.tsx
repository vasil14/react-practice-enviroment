import {
  StyledToast,
  StyledToastContent,
  StyledToastIcon,
  StyledToastText,
  StyledToastTitle,
  StyledToastClose,
  StyledToastProgress,
} from './styles';
import { Check, ExclamationMark, X } from '@phosphor-icons/react';
import { StyledToastMessage } from './styles';

interface ToastProps {
  isVisible: boolean;
  closeToast: () => void;
  type: 'success' | 'error' | 'warning';
}

const ToastType = {
  success: {
    status: 'Success',
    icon: <Check size={25} />,
    title: 'Succes',
    message: 'Your changes has been saved!',
    color: '#0abe46',
  },
  error: {
    status: 'Error',
    icon: <X size={25} />,
    title: 'Error',
    message: 'There was an error while saving your changes!',
    color: '#ff0000',
  },
  warning: {
    status: 'Warning',
    icon: <ExclamationMark size={25} />,
    title: 'Warning',
    message: 'Are you sure you want to do this?',
    color: '#ffa500',
  },
};

const Toast = ({ isVisible, closeToast, type }: ToastProps) => {
  return (
    <StyledToast
      className={isVisible ? 'active' : ''}
      color={ToastType[type].color}
    >
      <StyledToastContent>
        <StyledToastIcon color={ToastType[type].color}>
          {ToastType[type].icon}
        </StyledToastIcon>
        <StyledToastText>
          <StyledToastTitle>{ToastType[type].title}</StyledToastTitle>
          <StyledToastMessage>{ToastType[type].message}</StyledToastMessage>
        </StyledToastText>
        <StyledToastClose>
          <X size={18} onClick={closeToast} />
        </StyledToastClose>
      </StyledToastContent>
      <StyledToastProgress
        className={isVisible ? 'active' : ''}
        color={ToastType[type].color}
      />
    </StyledToast>
  );
};

export default Toast;
