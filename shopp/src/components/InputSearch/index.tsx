import Styled from './inputSearch.module.scss'

const InputSearch = () => {
    return (
        <input type="text" placeholder="Procure por Produto, Nome..." className={Styled.input}/>
    )
}

export default InputSearch