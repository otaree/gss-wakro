import { ChakraProvider } from '@chakra-ui/react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
// import "@fontsource/raleway.css";
import "@fontsource/open-sans/700.css";

import Layout from './components/Layout';
import Home from './pages/home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Bulletins from './pages/Bulletins';
import TCIssued from './pages/TCIssued';
import theme from './theme';

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/bulletins" component={Bulletins} />
                        <Route path="/tc-issued" component={TCIssued} />
                    </Switch>
                </Layout>
            </Router>
        </ChakraProvider>
    );
}