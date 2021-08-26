import React, {useState, useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';

const AddUser = () => {
    const [name, setName] = useState('')
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = function(e){
        const newUser = {
            id: uuid(),
            name: name
        }

        addUser(newUser)    
        history.push('/')
    }

    const onChange = function(e){
        setName(e.target.value) 
    }

    return(
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text"  placeholder="Enter Name" onChange={onChange} value={name}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}

export default AddUser;