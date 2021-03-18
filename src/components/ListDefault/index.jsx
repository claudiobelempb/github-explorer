import { useState, useEffect } from 'react';

import { ListDefaultItem }  from './ListDefaultItem';

const repository = {
  title: 'React',
  description: 'Form in React',
  link: 'https://github.com/'
}

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
        <ListDefaultItem repository={repository} />
        <ListDefaultItem repository={repository}/>
        <ListDefaultItem repository={repository}/>
        <ListDefaultItem repository={repository}/>
      </ul>
    </section>
  )
}