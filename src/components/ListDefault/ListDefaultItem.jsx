import '../ListDefault/ListDefault.scss';

export function ListDefaultItem(props) {

  return (
    <>
      <li>
          <strong>{props.repository.name}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.html_url}>
            Acessar repositório
          </a>
        </li>
    </>
  );
}