import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import containsContent from '../utils/strContains';


export const getFilteredCards = ({ cards, searchValue }, columnId) => cards
  .filter(card => card.columnId === columnId && containsContent(card.title, searchValue));
export const getAllColumns = state => state.columns;
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const filterCard = payload => ({ type: 'FILTER_CARD', payload });
export const getListById = ({ lists }, listId) => lists
  .find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = state => state.lists;
export const addList = payload =>({type: 'ADD_LIST', payload}); 
export const toggleFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload})
export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite === true);   


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };

    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };

    case 'FILTER_CARD':
      return { ...state, searchValue: action.payload.searchValue };

      case 'ADD_LIST':
        return {...state, lists: [...state.lists, {...action.payload, id: shortid() }]};

        case 'TOGGLE_CARD_FAVORITE':
          return { ...state, cards: state.cards.map(card => (card.id === action.payload.id) ? { ...card, isFavorite: !card.isFavorite } : card) };

    default:
      return state;
  }
};







  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  export default store;