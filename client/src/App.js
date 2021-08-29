import "./App.css";
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import EditUser from './components/EditUser/EditUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from "./components/context/GlobalState";

function App() {
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
