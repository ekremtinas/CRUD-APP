import React, {useState, useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from 'react-router-dom';
import Axios from "axios";
import {v4 as uuid} from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';

const AddUser = () => {
    const [bookName, setBookName] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookPrice, setBookPrice] = useState(0)
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = function(e){
        e.preventDefault();
        // let id = uuid();
        const newUser = {
            // id: id,
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookPrice: bookPrice
        }
        
        Axios.post("http://localhost:3004/insert", {
            // id: id,
            bookName: bookName,
            bookPrice: bookPrice,
            bookAuthor: bookAuthor
        });
        addUser(newUser)    
        history.push('/')
    }

    const onBookTitleChange = function(e){
        setBookName(e.target.value) 
    }

    const onAuthorChange = function(e){
        setBookAuthor(e.target.value)
    }

    const onPriceChange = function(e){
        setBookPrice(e.target.value)
    }

    return(
        <form onSubmit={onSubmit} method="POST">
            <FormGroup>
                <Label>Name</Label>
                <Input type="text"  placeholder="Enter Name" onChange={onBookTitleChange} value={bookName}/>
                <Input type="text"  placeholder="Enter Author" onChange={onAuthorChange} value={bookAuthor}/>
                <Input type="number"  placeholder="Enter Price" onChange={onPriceChange} value={bookPrice}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </form>
    )
}

export default AddUser;