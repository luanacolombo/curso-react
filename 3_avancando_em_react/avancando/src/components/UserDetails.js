const UserDetails = ({ nome, idade, profissao, maior }) => {
    return (
        <div>
            <h2>Detalhes da pessoa!</h2>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
            </ul>
            {idade >= 18 ? (<p>Pode tirar carteira de habilitação!</p>) : <p>Menor de idade!</p>}
        </div>
    )
}

export default UserDetails