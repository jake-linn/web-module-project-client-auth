import {Route, Switch} from 'react-router-dom';

import AddFriend from './components/AddFriend';
import EditFriend from './components/EditFriend';
import Friend from "./components/Friend";
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import ProtectedRoute from './auth/ProtectedRoute';








function App() {
  

  
  
  return(

    <div> 
      <Switch>
        <ProtectedRoute path = '/protected' component = {FriendsList} />
        <ProtectedRoute path="/friends/add" component={AddFriend} />
        <ProtectedRoute path="/friends/edit" component={EditFriend} />
        <ProtectedRoute path="/friends/:id" component={Friend} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>



    </div>

  )
}

export default App;
