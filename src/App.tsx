import { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import ToDoList from './components/ToDoList/ToDoList';
import Button from './components/Button/Button';
import ToggleVisibility from './components/ToggleVisibility/ToggleVisibility';
import Rating from './components/Rating/Rating';
import Toast from './components/ToastNotification/Toast';

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  console.log(isVisible);

  useEffect(() => {}, [count]);
  0;

  const onClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  const closeToast = () => {
    setIsVisible(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
        margin: 'auto',
        maxWidth: '1000px',
        width: '100%',
        height: '100vh',
      }}
    >
      <Button text="count is" type="primary" onClick={onClick} count={count} />
      <Card
        url="https://avatar.iran.liara.run/public/boy"
        name="Vasil Vangjeli"
        role="Full Stack Developer"
        facebook="https://www.facebook.com/vasil.vangjeli"
        linkedin="https://www.linkedin.com/in/vasil-vangjeli-487748232/"
        github="https://github.com/vangjeli"
      />
      <ToDoList />

      <ToggleVisibility />
      <Rating />
      <Toast isVisible={isVisible} closeToast={closeToast} />
    </div>
  );
};
export default App;
