import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
    <PersonCard
      title={"Doe,Jane"}
      initialAddAge={45}
      detail={"Hair Color: Black"}
    />
       <PersonCard
      title={"Smith,John"}
      initialAddAge={88}

      detail={"Hair Color: Brown"}
    />
    <PersonCard
      title={"Fillmore,Millard"}
      initialAddAge={32}

      detail={"Hair Color: Brown"}
  />
       <PersonCard
      title={"Smith,Maria"}
      initialAddAge={50}

      detail={"Hair Color: Brown"}
  />
    
    
    
    </div>
  );
}

export default App;
