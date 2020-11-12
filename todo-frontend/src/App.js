import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
//import Home from "./components/home.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
  render() {
    return (
     /*
     <BrowserRouter>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/signup"> Signup </Link>
        </nav>
        {/* 
        <Switch>
          <Route 
          exact 
          path="/" 
          render={(props) => {
          <Home {...props} completedTodos={this.state.completedTodos} 
          setUser={this.setUser} todos={this.state.todos} 
          toggleTodoDone={this.toggleTodoDone} removeTodo={this.removeTodo}}}/>
          
        </Switch>
        /}
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/signup"> Signup </Link>
        </nav>
        <Switch>
          <PrivateRoute 
          exact
          <Route> path="/todoService" component ={getAllTodos} </Route>             
        </Switch>
      </BrowserRouter>
     */
     <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">TodoIst APP</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;