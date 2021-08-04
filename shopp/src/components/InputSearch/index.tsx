import Styled from './inputSearch.module.scss'

const InputSearch = () => {
    return (
        <form className={Styled.form}>
            <input type="text" placeholder="Procure por Produto, Nome..." className={Styled.input}/>
            <button type="submit" className={Styled.btn}>Pesquisar</button>
        </form>
    )
}

export default InputSearch