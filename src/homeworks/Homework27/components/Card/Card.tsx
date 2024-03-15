import Message from '../Message/Message';
import { StyledCardWraper } from './styles';

function Card() {
  return (
    <StyledCardWraper>
      <h3>Имя: Галина</h3>
      <h3>Фамилия: Ласко</h3>
      <Message />
    </StyledCardWraper>
  );
}

export default Card;