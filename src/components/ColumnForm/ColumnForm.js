import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
  const [title, setTitle] = useState('');

  const [icon, setIcon] = useState('');


  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'PAYLOAD', newColumn: { title, icon,  } });
    setTitle('');
    setIcon('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      Title: <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      Icon: <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)}/>
      <Button >Add column</Button>
    </form>
  )
};
export default ColumnForm;