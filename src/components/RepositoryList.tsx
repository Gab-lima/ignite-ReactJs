import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';


interface Repository {
        name: string;
        description: string;
        html_url: string;
    }

export function RepositoryList() {
    const [repositorios, setRepositorios] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositorios(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositorios.map(repository => {
                     return <RepositoryItem key={repository.name} repository={repository} />
                })}
            
            </ul>
        </section>
    )
}