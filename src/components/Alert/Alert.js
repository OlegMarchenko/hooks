import { useAlert } from './AlertContext';

function Alert() {

  const alert = useAlert();

  if (!alert.visible) return null;

  return (
    <div onClick={alert.toggle}>
      Danger Warning!!!
    </div>
  )
}

export default Alert;