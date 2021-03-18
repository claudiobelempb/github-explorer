import '../ListDefault/ListDefault.scss';

export function ListDefaultItem(props) {

  return (
    <>
      <li>
          <strong>{props.repository.title ?? 'Default'}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.link}>
            Acessar repositório
          </a>
        </li>
    </>
  );
}