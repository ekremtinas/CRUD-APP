import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { Button } from "reactstrap";
import Axios from "axios";
import styles from "./userlist.module.css";

const UserList = () => {
    const { books, removeUser } = useContext(GlobalContext);

    const removeHandler = (id) => {
        removeUser(id);
        Axios.delete(`http://localhost:3004/delete/${id}`);
    };

    return (
        <table className={styles["content-table"]}>
            <thead>
                <tr>
                    <th className={styles.title}>Book Title</th>
                    <th className={styles.author}>Author</th>
                    <th className={styles.category}>Category</th>
                    <th className={styles.price}>Price</th>
                    <th className={styles.price}>actions</th>
                </tr>
            </thead>
            {books.length > 0 && (
                <tbody>
                    {books.map((book) => {
                        return (
                            <tr key={book._id}>
                                <td>{book.bookName}</td>
                                <td>{book.bookAuthor}</td>
                                <td>fda</td>
                                <td>{book.bookPrice}</td>
                                <td>
                                    <div className="ml-auto">
                                        <Link to={`/edit/${book._id}`} >
                                            Edit
                                        </Link>
                                        <Button
                                        
                                            onClick={() =>
                                                removeHandler(book._id)
                                            }
                                            color="danger"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            )}
        </table>
    );
};

export default UserList;