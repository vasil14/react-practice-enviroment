import styled from 'styled-components';

const StyledToast = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #fff;
  padding: 15px 40px 15px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  border-radius: 10px;
  border-left: 5px solid #0abe46;
  overflow: hidden;
  transform: translateX(calc(100% + 20px));
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);

  &.active {
    transform: translateX(0%);
  }
`;

const StyledToastContent = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
`;

const StyledToastIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #0abe46;
  color: #fff;
`;

const StyledToastText = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledToastTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

const StyledToastMessage = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 0;
`;

const StyledToastClose = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledToastProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: #ddd;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: #0abe46;
  }

  &.active::before {
    animation: progress 5s linear forwards;
  }

  @keyframes progress {
    100% {
      right: 100%;
    }
  }
`;

export {
  StyledToast,
  StyledToastContent,
  StyledToastIcon,
  StyledToastText,
  StyledToastTitle,
  StyledToastMessage,
  StyledToastClose,
  StyledToastProgress,
};
