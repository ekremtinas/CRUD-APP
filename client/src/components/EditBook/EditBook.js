import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from 'react-router-dom';
import styles from './EditBook.module.css';
import { BsPencil } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import Button from  '../UI/Button/Button';
import UserFormField from '../UI/UserFormField/UserFormField';
import Axios from "axios";
import SelectCategory from '../UI/SelectCategory/SelectCategory';

const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        bookName: '',
        bookAuthor: '',
        bookPrice: 0,
        bookCategory: ''
    })
    const { books, editUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = books.find(user => user._id === userId)
        setSelectedUser(selectedUser);
    }, [currentUserId, books])

    const updateFood = function (id) {
        const {bookName, bookAuthor, bookPrice, bookCategory} = selectedUser

        Axios.put("http://localhost:3004/update", {
            id: id,
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookPrice: Number(bookPrice),
            bookCategory: bookCategory
        });
    };

    const onSubmit = function(e){

        editUser(selectedUser)
        history.push('/')
        updateFood(currentUserId)
    }

    const onBookNameChange = function(e){
        setSelectedUser({...selectedUser,[e.target.name]: e.target.value})
    }

    const onBookAuthorChange = function(e){
        setSelectedUser({...selectedUser,[e.target.name]: e.target.value})
    }

    const onBookPriceChange = function(e){
        setSelectedUser({...selectedUser,[e.target.name]: e.target.value})
    }

    const onBookCategoryChange = function(e){
        setSelectedUser({...selectedUser,[e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={onSubmit} className={styles.form}>
            <UserFormField
                label="Book Title"
                name="bookName"
                value={selectedUser.bookName}
                type="text"
                placeholder="enter book title"
                onChange={onBookNameChange}
            />

            <UserFormField
                label="Author"
                name="bookAuthor"
                value={selectedUser.bookAuthor}
                type="text"
                placeholder="enter book Author"
                onChange={onBookAuthorChange}

            />

            <UserFormField
                label="Price"
                name="bookPrice"
                value={selectedUser.bookPrice}
                type="number"
                placeholder="enter book price"
                onChange={onBookPriceChange}

            />
            <SelectCategory name="bookCategory" onChange={onBookCategoryChange} value={selectedUser.bookCategory}/>

            <div className={styles.buttons}>
                <Button type="submit" className={styles.edit_book}> <BsPencil/> Done</Button>
                <Link to="/" className={styles.link}> <GiCancel/> Cancel</Link>
            </div>
        </form>
    )
}

export default EditUser