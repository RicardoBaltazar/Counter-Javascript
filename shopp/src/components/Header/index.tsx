import Styled from './header.module.scss'
import Logo from '../Logo'
import InputSearch from '../InputSearch'

const Header = () => {
    return (
        <>
            <header className={Styled.header}>
                <Logo />
                <InputSearch />
                <nav className={Styled.navbar}>
                    <ul className={Styled.ul}>
                        <li>login</li>
                        <li>curtidas</li>
                        <li>car</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;