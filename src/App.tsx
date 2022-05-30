import Box from '@mui/material/Box';

import AppBar from './Components/AppBar';

import Theme from './Theme';
import './App.css';
import PageBody from "./Components/PageBody";

function App() {
    return (
        <Theme>
            <Box className={'App'}>
                <AppBar />
                <PageBody />
            </Box>
        </Theme>
    );
}

export default App;
