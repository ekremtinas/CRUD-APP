import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import styles from "./AddUser.module.css";
import { GiCancel } from "react-icons/gi";
import Button from "../UI/Button/Button";
import UserFormField from "../UI/UserFormField/UserFormField";

const AddUser = () => {
    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookPrice, setBookPrice] = useState(0);
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = function (e) {
        e.preventDefault();
        const newUser = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookPrice: bookPrice,
        };

        Axios.post("http://localhost:3004/insert", {
            bookName: bookName,
            bookPrice: bookPrice,
            bookAuthor: bookAuthor,
        });
        addUser(newUser);
        history.push("/");
    };

    const onBookTitleChange = function (e) {
        setBookName(e.target.value);
    };

    const onAuthorChange = function (e) {
        setBookAuthor(e.target.value);
    };

    const onPriceChange = function (e) {
        setBookPrice(e.target.value);
    };

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <UserFormField
                label="Book Title"
                value={bookName}
                type="text"
                placeholder="enter book title"
                onChange={onBookTitleChange}
            />

            <UserFormField
                label="Author"
                value={bookAuthor}
                type="text"
                placeholder="enter book Author"
                onChange={onAuthorChange}
            />

            <UserFormField
                label="Price"
                value={bookPrice}
                type="number"
                placeholder="enter book price"
                onChange={onPriceChange}
            />
            <div className={styles.buttons}>
                <Button type="submit" className={styles.submit}>
                    Submit
                </Button>
                <Link to="/" className={styles.link}>
                    <GiCancel/> Cancel
                </Link>
            </div>
        </form>
    );
};

export default AddUser;
