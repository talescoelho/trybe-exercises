import './App.css';


const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const arr = ['estudar', 'dormir']

function App() {
  return (
    <ol>{ arr.map((el) => Task(el)) }</ol>
  );
}


  
export default App;
