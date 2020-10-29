import {useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Title = () => {
  const [title, setTitle] = useState('hello world');

  useDocumentTitle(title);

  return (
    <div>
      <h2>Document Title</h2>
      <input 
        value={title}
        onChange={(event) => setTitle(event.target.value)} 
      />
    </div>
  );
};

export default Title;
