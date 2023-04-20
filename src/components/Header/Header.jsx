
import h from './Header.module.css';

function Header() {
    return <header className={h.header}>
        <img className={h.logo} src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="l"></img>
    </header>
}
export default Header;