import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from 'react-router-dom';
import Axios from "axios";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';


const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        bookName: '',
        bookAuthor: '',
        bookPrice: 0
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
        const {bookName, bookAuthor, bookPrice} = selectedUser

        Axios.put("http://localhost:3004/update", {
            id: id,
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookPrice: Number(bookPrice)
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



    return(
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Book Title</Label>
                <Input type="text" name="bookName" value={selectedUser.bookName} onChange={onBookNameChange} placeholder="Enter Book Title"/>

                <Label>Book Author</Label>
                <Input type="text" name="bookAuthor" value={selectedUser.bookAuthor} onChange={onBookAuthorChange} placeholder="Enter Author"/>

                <Label>Book Price</Label>
                <Input type="number" name="bookPrice" value={selectedUser.bookPrice} onChange={onBookPriceChange} placeholder="Enter Price"/>
            </FormGroup>
            <Button type="submit">Edit Book</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default EditUser