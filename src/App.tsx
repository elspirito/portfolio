import './App.css';
import {Header} from "./assets/layout/header/Header";
import {Cover} from "./assets/layout/cover/Cover";
import {Directions} from "./assets/layout/directions/Directions";
import {Reviews} from "./assets/layout/reviews/Reviews";
import {Stack} from "./assets/layout/stack/Stack";
import {Works} from "./assets/layout/works/Works";
import {Contacts} from "./assets/layout/contacts/Contacts";
import {Footer} from "./assets/layout/footer/Footer";
import {Expirience} from "./assets/layout/expirience/Expirience";


function App() {
    return (
        <div className="App">
            <Header/>
            <Cover/>
            <Directions/>
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
