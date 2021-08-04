import Styled from './headerList.module.scss'

const HeaderList = () => {
    return (
        <>
            <div className={Styled.headerList}>
                <ul>
                    <li className={Styled.ItemAllDepartaments}>Todos os Departamentos</li>
                    <li>Ofertas do dia</li>
                    <li>Celulares</li>
                    <li>Móveis</li>
                    <li>Eletrodésticos</li>
                    <li>Tv e Video</li>
                    <li>Informática</li>
                    <li>Livros</li>
                    <li>Moda</li>
                </ul>
            </div>
        </>
    )
}

export { HeaderList };