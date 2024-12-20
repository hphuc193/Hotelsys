import logo from './logo.svg';
import './App.css';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());

function Room(props) {
  return <li> Room {props.info.room_id}: {props.info.name}, price: {props.info.price}</li>;
}

function App() {
  var api = "https://vigilant-system-9pg74q45p97cx7vr-8080.app.github.dev/room";
  const { data, error, isLoading } = useSWR(api, fetcher);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {data.rooms.map((item) => <Room info={item} />)}
        </ul>
      </header>
    </div>
  );
}

export default App;
