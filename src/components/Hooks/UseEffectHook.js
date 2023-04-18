import { useEffect, useState } from 'react';

export function UseEffectHook() {

  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });


  /* useEffect служит для того, что мы можем за чем то наблюдать и выполнять определенную логику */
  useEffect(() => {

    console.log(`Type changed: ${type}`)

    fetch(`https://jsonplaceholder.typicode.com/${type}/`)
    .then(response => response.json())
    .then(json => setData(json));

    return () => {
      console.log('clean type!')
    }

  }, [type]); /* Массив зависимостей от чего зависит useEffect
                       и этот колбек будет вызываться если наш state type изменился */


  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }


  useEffect(() => {
    console.log('ComponentDidMount');

    // Любые слушатели которые мы добавляем, их нужно удалять
    window.addEventListener('mousemove', mouseMoveHandler);

    /* Возвращение функции позволяет очищать слушатели тогда,
       когда будет заканчиваться действие этого useEffect */
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      /* Можем удалять подписки, слушателей и так далее ...*/
    }

  }, []) // Пустой массив - нужен для одиночного рендера

  return (
    <div>
      <h1>Resource: {type}</h1>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}

      <pre>{JSON.stringify(pos, null, 2)}</pre>

    </div>
  )
}