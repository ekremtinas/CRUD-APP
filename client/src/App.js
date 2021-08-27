import "./App.css";
import React, { useState, useEffect } from "react";
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import EditUser from './components/EditUser/EditUser';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from "./components/context/GlobalState";
import Axios from "axios";

function App() {


    // const addToList = function (e) {
    //     e.preventDefault();
    //     Axios.post("http://localhost:3004/insert", {
    //         bookName: bookName,
    //         bookPrice: bookPrice,
    //         bookAuthor: bookAuthor
    //     });
    // };

    // const updateFood = function (id) {
    //     // e.preventDefault()
    //     Axios.put("http://localhost:3004/update", {
    //         id: id,
    //         newFoodName: newFoodName,
    //     });
    // };

    // const deleteFood = function (id) {
    //     Axios.delete(`http://localhost:3004/delete/${id}`);
    // };



    return (
        <div className="wrapper">
            <GlobalProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}  />
                        <Route path="/add" component={AddUser}  />
                        <Route path="/edit/:id" component={EditUser}  />
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    );
}

export default App;
