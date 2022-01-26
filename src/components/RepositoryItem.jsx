export function RepositoryItem(props) {
    return ( 
    <li>
        <strong>{props.repository?.name ?? "Default"}</strong> {/** ?? valida se esta vazio */} {/** ?repository?  valida se esta vazio, se estiver ele nem procura 'name' */} 
        <p>{props.repository.description}</p>

        <a href={props.repository.link}>
            Acessar repositório
        </a>
    </li>
    );
}

