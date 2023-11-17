import type {Component} from 'solid-js';
import {Route, Router, Routes} from "@solidjs/router";
import MainLayout from "./layout/main";

const App: Component = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} component={MainLayout} />
                <Route path={'/'} component={MainLayout} />
            </Routes>
            <div class="w-full h-screen bg-neonBlack">
                <MainLayout/>
            </div>
        </Router>

    );
};

export default App;
