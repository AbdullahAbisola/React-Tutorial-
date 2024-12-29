import './Header.css'
import {Globe} from "../../assets/index.js";

const Header = () => {
    return (
        <header>
            <img
             src={Globe}
            alt="logo"
            width={24}
            height={24}/>

            <h3>my travel journal.</h3>
        </header>
    )
}
export default Header
