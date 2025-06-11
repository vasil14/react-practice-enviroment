import { Check, Trash } from '@phosphor-icons/react';
import { Button, Card, Col, Input, Row, Space } from 'antd';
import { useState } from 'react';
import { useToast } from '../../context/ToastContext/ToastContext';

interface ToDo {
  text: string;
  status: boolean;
}

const ToDoList = () => {
  const { showToast } = useToast();
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addToDo = () => {
    if (inputValue === '') return;
    let newTodo = { text: inputValue, status: false };
    setTodos([...todos, newTodo]);
    setInputValue('');
    showToast('success', 'Aded', 'ToDo added successfully', 3000);
  };

  const removeToDo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
    showToast('success', 'Removed', 'ToDo removed successfully', 3000);
  };

  const completeToDo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, status: !todo.status } : todo
      )
    );
    showToast('success', 'Done', 'ToDo completed successfully', 3000)
  };

  return (
    <>
      <Space.Compact style={{ width: '40%' }}>
        <Input
          placeholder="Add ToDo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && addToDo()}
        />
        <Button type="primary" onClick={addToDo}>
          Add
        </Button>
      </Space.Compact>

      {todos.length !== 0 && (
        <Card color="#f5f5f5" style={{ width: '40%' }}>
          {todos.map((todo, index) => (
            <Row
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <Col
                style={{
                  fontSize: '18px',
                  textDecoration: todo.status ? 'line-through' : 'none',
                }}
              >
                {index + 1}. {todo.text}
              </Col>
              <Col>
                <Row gutter={8} justify={'space-between'}>
                  <Col>
                    <Button
                      type="primary"
                      danger
                      onClick={() => removeToDo(index)}
                      icon={<Trash size={16} />}
                    />
                  </Col>
                  <Col>
                    <Button
                      type="primary"
                      icon={<Check size={16} />}
                      onClick={() => completeToDo(index)}
                    ></Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Card>
      )}
    </>
  );
};
export default ToDoList;
