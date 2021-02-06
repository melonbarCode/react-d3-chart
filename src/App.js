import BarChart from "./components/BarChart";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">D3 WITH REACT</header>
      <div>
        <div className="chart-title">BAR CHART</div>
        <BarChart />
      </div>
    </div>
  );
}

export default App;
