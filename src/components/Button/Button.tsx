import { Button as ButtonAntd } from 'antd'

interface Props {
  text: string,
  type: 'text' | 'link' | 'primary' | 'default' | 'dashed',
  count: number,
  onClick: () => void
}

const Button = (props:Props) => {
  const { text, type, count, onClick } = props
  return (
    <ButtonAntd
      type={type} 
      onClick={onClick}
    >
      {text} {count} 
    </ButtonAntd>
  )
}

export default Button