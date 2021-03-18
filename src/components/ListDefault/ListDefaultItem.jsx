import '../ListDefault/ListDefault.scss';

export function ListDefaultItem(props) {

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