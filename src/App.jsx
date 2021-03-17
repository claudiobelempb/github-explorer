import './styles/global.scss';
import { ListDefault } from './components/ListDefault';
import { Counter } from './components/Counter'


export function App() {
  return (
    <>
     <ListDefault title={'Lista de Repositórios'}/>
     <Counter />
    </>
  )
}