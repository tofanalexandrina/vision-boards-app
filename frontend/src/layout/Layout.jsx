import Navbar from "./Navbar";
import {Outlet} from 'react-router-dom';

export default function Layout(){
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}