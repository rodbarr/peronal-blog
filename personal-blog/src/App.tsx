import './App.css';
import ButtonAppBar from './Appbar';
import Demo from './Demo';

function App() {
  return (
    <div>
      <ButtonAppBar/>
      <div>
        <h1 className="text-2xl font-bold underline">
          Hello world! From Tailwind
        </h1>
        <Demo/>
      </div>
    </div>
  );
}

export default App;
