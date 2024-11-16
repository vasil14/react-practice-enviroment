import {
  StyledToast,
  StyledToastContent,
  StyledToastIcon,
  StyledToastText,
  StyledToastTitle,
  StyledToastClose,
  StyledToastProgress,
} from './styles';
import { Check, X } from '@phosphor-icons/react';
import { StyledToastMessage } from './styles';

interface ToastProps {
  isVisible: boolean;
  closeToast: () => void;
}

const Toast = ({ isVisible, closeToast }: ToastProps) => {
  return (
    <StyledToast className={isVisible ? 'active' : ''}>
      <StyledToastContent>
        <StyledToastIcon>
          <Check size={25} />
        </StyledToastIcon>
        <StyledToastText>
          <StyledToastTitle>Succes</StyledToastTitle>
          <StyledToastMessage>Your changes has been saved!</StyledToastMessage>
        </StyledToastText>
        <StyledToastClose>
          <X size={18} onClick={closeToast} />
        </StyledToastClose>
      </StyledToastContent>
      <StyledToastProgress className={isVisible ? 'active' : ''} />
    </StyledToast>
  );
};

export default Toast;
