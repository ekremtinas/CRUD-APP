import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
    const [foodState, setFoodState] = useState("");
    const [daysSince, setDaysSince] = useState(0);
    const [newFoodName, setNewFoodName] = useState("");
    const [foodList, setFoodList] = useState([]);

    const foodStateHandler = function (e) {
        setFoodState(e.target.value);
    };

    const daysSinceHandler = function (e) {
        setDaysSince(e.target.value);
    };

    const newFoodNameHandler = function (e) {
        setNewFoodName(e.target.value);
    };

    const addToList = function (e) {
        e.preventDefault();
        Axios.post("http://localhost:3004/insert", {
            foodName: foodState,
            days: daysSince,
        });
    };

    const updateFood = function (id) {
        // e.preventDefault()
        Axios.put("http://localhost:3004/update", {
            id: id,
            newFoodName: newFoodName,
        });
    };

    const deleteFood = function (id) {
        Axios.delete(`http://localhost:3004/delete/${id}`);
    };

    useEffect(() => {
        Axios.get("http://localhost:3004/read").then((response) => {
            setFoodList(response.data);
        });
    }, []);

    return (
        <div className="App">
            <h1>CRUD App width mern</h1>
            <label>Food Name</label>
            <input type="text" onChange={foodStateHandler} />
            <label>Days Since you Ate It</label>
            <input type="number" onChange={daysSinceHandler} />
            <button onClick={addToList}>Add to list</button>
            <h1> data</h1>

            {foodList.map((value, index) => {
                return (
                    <div key={index}>
                        <h1>{value.foodName}</h1>
                        <h1>{value.daysSinceIAte}</h1>
                        <input
                            type="text"
                            placeholder="New Food Name"
                            onChange={newFoodNameHandler}
                        />
                        <button onClick={() => updateFood(value._id)}>
                            Update
                        </button>
                        <button onClick={() => deleteFood(value._id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
