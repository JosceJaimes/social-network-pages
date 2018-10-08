import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
  <div>
    <ul>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li><Link to={routes.SIGN_UP}>Sign Up</Link></li>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.HOME}>Home</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
      <li><Link to={routes.MURO}>Muro</Link></li>
    </ul>
  </div>

export default Navigation;




// import App from './components/App';
// import Muro from './components/Muro';
// import Autentification from './components/Autentification'

// const AppRoutes =()=>{
//     return(
//     <App>
//         <BrowserRouter>
//             <Switch>
//                 <Route path="/muro" component={Muro}/>
//                 <Route path="/autentification" component={Autentification}/>         
//             </Switch>
//         </BrowserRouter>
//     </App>
//     )
// }
// export default AppRoutes;