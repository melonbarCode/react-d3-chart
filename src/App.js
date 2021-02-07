import BarChart from "./components/BarChart";
import BarChartCustom from "./components/BarChartCustom";
import ScatterChart from "./components/ScatterChart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">D3 WITH REACT</header>
        <Navbar />
        <div>
          <Switch>
            <Route
              path="/bar-chart"
              exact
              component={(props) => {
                return (
                  <>
                    <div className="chart-title">BAR CHART</div>
                    <BarChart />
                    <div className="chart-title">BAR CUSTOM CHART</div>
                    <BarChartCustom />
                  </>
                );
              }}
            />
            <Route
              path="/"
              component={(props) => {
                return (
                  <>
                    <div className="chart-title">SCATTER CHART</div>
                    <ScatterChart />
                  </>
                );
              }}
            />
          </Switch>
          {/* <div className="chart-title">BAR CHART</div>
        <BarChart />
        <div className="chart-title">BAR CUSTOM CHART</div>
        <BarChartCustom />
        <div className="chart-title">SCATTER CHART</div>
        <ScatterChart /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
