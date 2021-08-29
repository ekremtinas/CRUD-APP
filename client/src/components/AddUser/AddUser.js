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
    const [category, setCategory] = useState('');
    const history = useHistory();
    const onSubmit = function (e) {
        e.preventDefault();
        const newUser = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookPrice: bookPrice,
            bookCategory: category
        };

        Axios.post("http://localhost:3004/insert", {
            bookName: bookName,
            bookPrice: bookPrice,
            bookAuthor: bookAuthor,
            bookCategory: category
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

    const onCategoryChange = function(e){
        setCategory(e.target.value)
    }

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

            <article className={styles.select}>
                <select name="cardapio" onChange={onCategoryChange}>
                    <option value=""  selected disabled>
                        Categories
                    </option>
                    <option value="Horror">Horror</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Nonfiction">Nonfiction</option>
                    <option value="Tragedy">Tragedy</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Fairytale">Fairytale</option>
                    <option value="Crime">Crime</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Humor">Humor</option>
                    <option value="Fictional Diaries">Fictional Diaries</option>
                    <option value="Satire">Satire</option>
                    <option value="Romance">Romance</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Memoirs">Memoirs</option>
                    <option value="Self-Help">Self-Help</option>
                </select>
            </article>

            <div className={styles.buttons}>
                <Button type="submit" className={styles.submit}>
                    Submit
                </Button>
                <Link to="/" className={styles.link}>
                    <GiCancel /> Cancel
                </Link>
            </div>
        </form>
    );
};

export default AddUser;
