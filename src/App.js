import React, {useState, useEffect} from 'react'
import useStyles from './styless';
import Home from './Home';
import Login from './login';

const App = () => {
    const [usuarioGlobal, setUsuarioGlobal] = useState(null);

    return <> {usuarioGlobal ? <Home /> : <Login/> } </>
}

export default App
