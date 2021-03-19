import { useState, useEffect } from 'react';

import { ListDefaultItem }  from './ListDefaultItem';

interface IRepository {
  title: string;
  id: string;
  name: string;
  description: string;
  html_url: string;
}

export function ListDefault() {

  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  console.log(repositories);

  return (
    <section className={'repository-list'}>
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <ListDefaultItem key={repository.id} repository={repository}/>
        })}
      </ul>
    </section>
  )
}