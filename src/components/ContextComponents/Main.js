import { useAlert } from '../Alert/AlertContext';

function Main() {

  const { toggle } = useAlert();

  return (
    <div>
      <h1>Main Context Component</h1>
      <button onClick={toggle}>Call Alert</button>
    </div>
  )
}

export default Main;