import {
  UseStateHook,
  UseEffectHook,
  UseRefHook,
  UseMemoHook,
  UseCallbackHook,
  UseContextHook
} from '../Hooks';


function App() {
  return (
    <div className="App"
         style={{ 'maxWidth': '1200px', 'margin': '0 auto', 'padding': '50px 0 0' }}>
      {/*<UseStateHook />*/}
      {/*<UseEffectHook />*/}
      {/*<UseRefHook />*/}
      {/*<UseMemoHook />*/}
      {/*<UseCallbackHook />*/}
      <UseContextHook />
    </div>
  );
}

export default App;
