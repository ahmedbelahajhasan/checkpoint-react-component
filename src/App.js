import './App.css';
import React from "react";
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Name from './Component/Profile/FullName';
import Adresse from './Component/Profile/Address';

const App = () => (
 <>
 <div>
 <ProfilePhoto />
 <Name/>
<Adresse/>
 </div>
 </>
);
export default App;