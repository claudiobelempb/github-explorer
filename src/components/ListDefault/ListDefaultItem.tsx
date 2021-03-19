import '../ListDefault/ListDefault.scss';

interface IRepositoryItemProps {
  repository: {
    id: string;
    name: string;
    description: string;
    html_url: string;
  }
}

export function ListDefaultItem( props: IRepositoryItemProps) {

  return (
    <>
      <li>
          <p>ID: {props.repository.id}</p>
          <strong>{props.repository.name}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.html_url}>
            Acessar repositório
          </a>
        </li>
    </>
  );
}