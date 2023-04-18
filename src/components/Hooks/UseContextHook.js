import Main from '../ContextComponents/Main';
import Alert from '../Alert/Alert';
import { AlertProvider } from '../Alert/AlertContext';


export function UseContextHook() {

  return (
    <AlertProvider>
      <Alert />
      <Main />
    </AlertProvider>
  )
}