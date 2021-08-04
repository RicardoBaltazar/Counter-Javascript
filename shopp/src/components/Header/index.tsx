import Styled from './header.module.scss'

import Logo from '../Logo'
import InputSearch from '../InputSearch'
import { HeaderList } from '../HeaderList';

const Header = () => {
    return (
        <>
            <header className={Styled.header}>

                <div className={Styled.headerTop}>
                    <Logo />
                    <InputSearch />
                    <nav className={Styled.navbar}>
                        <div className={Styled.menuLogin}>
                            <span>Bem Vindo(a)!</span>
                            <a href="">Entre ou Cadastre - se</a>
                        </div>
                        <ul className={Styled.ul}>
                            <li>curtidas</li>
                            <li>car</li>
                        </ul>
                    </nav>
                </div>
                <HeaderList />
                
                <div className={Styled.separationLine}>

                </div>
            </header>
        </>
    )
}

export default Header;