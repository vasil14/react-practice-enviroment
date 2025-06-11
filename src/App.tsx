import { useState } from 'react';
import Card from './components/Card/Card';
import ToDoList from './components/ToDoList/ToDoList';
import Button from './components/Button/Button';
import ToggleVisibility from './components/ToggleVisibility/ToggleVisibility';
import Rating from './components/Rating/Rating';
import { ToastProvider } from './context/ToastContext/ToastContext';


const App = () => {

  const [count, setCount] = useState<number>(0);


  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  const triggerToast = () => {
    
  };

  return (
    <ToastProvider>
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
        <Button text="Trigger Toast" type="primary" onClick={triggerToast} />
        <Card
          url="https://avatar.iran.liara.run/public/boy"
          name="Vasil Vangjeli"
          role="Full Stack Developer"
          facebook="https://www.facebook.com/vasil.vangjeli"
          linkedin="https://www.linkedin.com/in/vasil-vangjeli-487748232/"
          github="https://github.com/vasil14"
        />
        <ToDoList />

        <ToggleVisibility />
        <Rating />
      </div>
    </ToastProvider>
  );
};
export default App;
