//import React from "react";
//import { Route, Redirect } from "react-router-dom";

// const AnonRoute = ({
//  component: Component,
//  authenticated,
//  authenticate,
//  ...rest
//}) => {
//  return (
//    <Route
//      render={(props) =>
//        authenticated === false ? (
//          <Component {...props} authenticate={authenticate} />
//        ) : (
//          <Redirect to="/" />
//        )
//      }
//      {...rest}
//    />
//  );
//};

//import React from "react";
//import { Route, Redirect } from "react-router-dom";

//const PrivateRoute = (){
  //component: Component,
  //authenticated,
  //user,
  //...rest
//}) => {
  //return (
    //<Route
      //render={(props) =>
        //authenticated ? (
          //<Component {...props} user={user} />
        //) : (
        //  <Redirect to="/login" />
      //  )
    //  }
    //  {...rest}
  //  />
//  );
//};

/*const  AnonRoute = (props) => {
  const { component: Component } = prpos;
  const isAuthenticated = true;
  return <Route render={() => isAuthenticated ? Component/> : <Redirect to="/Login"}

export default PrivateRoute;

/*export default AnonRoute;
*/