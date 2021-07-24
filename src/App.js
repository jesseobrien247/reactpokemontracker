import icons from './import.js';

{
    var iiii = [];
    var numOfCellsRising = 0;
    var numOfCells = 151;
    
    do {
      iiii.push(<div className="cell"><img src={icons[numOfCellsRising]}></img><br></br><p> # {numOfCellsRising + 1}</p></div>);
      numOfCellsRising +=1;
    } while (numOfCellsRising < numOfCells);

  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Pokemon Tracker</h1>
      </header>
       <main className="App-main">       
         {iiii}
      </main>
    </div>
  );
}

export default App;
