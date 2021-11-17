import React, {useState, useEffect} from 'react'
import useStyles from './styless';
import Home from './Home';
import Login from './login';
import firebase from './Firebase/firebase';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(firebase);

const App = () => {
    const [usuarioGlobal, setUsuarioGlobal] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase)=>{
        if (usuarioFirebase){
            setUsuarioGlobal(usuarioFirebase);
        } else {
            setUsuarioGlobal(null);
        }
    })

    return <> {usuarioGlobal ? <Home /> : <Login/> } </>
}

export default App
