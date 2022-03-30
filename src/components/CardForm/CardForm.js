import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const CardForm = props => {
    const [title, setTitle] = useState('');
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_CARD' , newCard: {title,  columnId:props.columnId }});
        setTitle('');
        console.log(title)
    };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;