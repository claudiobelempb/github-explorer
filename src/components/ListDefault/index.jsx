import { ListDefaultItem }  from './ListDefaultItem';

const repository = {
  title: 'React',
  description: 'Form in React',
  link: 'https://github.com/'
}

export function ListDefault(props) {
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