import './App.css';
import {Header} from "./assets/layout/header/Header";
import {Main} from "./assets/layout/main/Main";
import {Stack} from "./assets/layout/stack/Stack";
import {Reviews} from "./assets/layout/reviews/Reviews";
import {Works} from "./assets/layout/works/Works";
import {Contacts} from "./assets/layout/contacts/Contacts";
import {Footer} from "./assets/layout/footer/Footer";
import {Expirience} from "./assets/layout/expirience/Expirience";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Stack/>
            <Works/>
            <Expirience/>
            <Reviews/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
