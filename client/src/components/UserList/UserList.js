import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext);
    return (
        <ListGroup>
            {users.length > 0 ? (
                <React.Fragment>
                    {users.map((user) => {
                        return (
                            <ListGroupItem className="d-flex" key={user.id}>
                                <strong>{user.name}</strong>
                                <div className="ml-auto">
                                    <Link to={`/edit/${user.id}`}>Edit</Link>
                                    <Button
                                        onClick={() => removeUser(user.id)}
                                        color="danger"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </ListGroupItem>
                        );
                    })}
                </React.Fragment>
            ) : (
                <h4 className="text-center">No User</h4>
            )}
        </ListGroup>
    );
};

export default UserList;
