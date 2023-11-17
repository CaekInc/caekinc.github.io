import {Component} from "solid-js";

const Header: Component = () => {
    return (
        <header class="w-full flex flex-col sm:flex-row justify-between bg-cyberpunk-neonBlack px-3 py-12 text-cyberpunk-neonYellow">
            <div class="mb-4 sm:mb-0">
                <h1 class="text-2xl">Logo</h1>
            </div>
            <nav>
                <ul class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <li>
                        <a href="#">Link 1</a>
                    </li>
                    <li>
                        <a href="#">Link 2</a>
                    </li>
                    <li>
                        <a href="#">Link 3</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
