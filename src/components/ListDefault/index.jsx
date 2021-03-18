import { useState, useEffect } from 'react';

import { ListDefaultItem }  from './ListDefaultItem';

export function ListDefault(props) {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  console.log(repositories);

  return (
    <section className={'repository-list'}>
      <h1>{props.title}</h1>

      <ul>
        {repositories.map(repository => {
          return <ListDefaultItem key={repository.id} repository={repository}/>
        })}
      </ul>
    </section>
  )
}