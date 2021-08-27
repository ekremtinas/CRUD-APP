import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { BsPencil } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
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
                    <th className={styles.price}>Actions</th>
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
                                    <div className="actions">
                                            <Link to={`/edit/${book._id}`} style={
                                                {
                                                padding: '9px 10px',
                                                background: 'rgb(248, 245, 72)',
                                                color: 'black',
                                                borderRadius: '5px',
                                                textDecoration: 'none',
                                                
                                                }} >
                                                    <BsPencil style={{margin: '0px 5px 5px 0px', fontSize: '15px'}}/>
                                                Edit
                                            </Link>
                                        <button

                                            onClick={() =>
                                                removeHandler(book._id)
                                            }
                                            color="danger"
                                        >
                                            <MdDeleteForever style={{fontSize: '15px'}} />
                                            Delete
                                        </button>
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