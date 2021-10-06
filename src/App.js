import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Store from './store/store';
import RootApp from './components/Route';

function App() {
    return (
        <Provider store={Store}>
            <RootApp />
        </Provider>
    );
}

export default App;
