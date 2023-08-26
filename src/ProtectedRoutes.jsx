// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// const ProtectedRoutes = (props) => {
//   const {Component}=props;
//   const navigate=useNavigate();
//   useEffect(()=>{
//     let login=localStorage.getItem("isLoggedIn");
//     if(!login){
// navigate('login');
//     }
//   });
//   return (
//     <div> 
//        <Component />
//     </div>
//   )
// }

// export default ProtectedRoutes
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

// Utils

const PrivateRoutes = ({ component: Component, ...rest }) => {  
  var session_token=localStorage.getItem('isLoggedIn')

  return (
    <Route {...rest} render={props => (
     session_token !== false ? (
      < Component  {...props} />
      ) : (
            <Navigate to={{
              pathname: '/login',
              state: { from: props.location }
              }}
            />
          )
      )} 
    />
  )
};


export default PrivateRoutes;