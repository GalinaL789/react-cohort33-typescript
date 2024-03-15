import { useContext } from 'react';
import { MyTextAreaContext } from '../BlogManagement/BlogManagement';

function Message() {
  const myMessage = useContext(MyTextAreaContext);

  const { myBlogMessage } = myMessage;
  return (
    <div>
      <span>Сообщение: {myBlogMessage}</span>
    </div>
  );
}

export default Message;