import "../css/App.css"
import { Outlet } from "react-router-dom"
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Root() {

    return (
        <div className="App-main">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}