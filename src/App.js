import BarChart from "./components/BarChart";
import BarChartCustom from "./components/BarChartCustom";
import ScatterChart from "./components/ScatterChart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";
import LineChart from "./components/LineChart";
import AreaChart from "./components/AreaChart";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">D3 WITH REACT FOR STUDY</header>
        <Navbar />
        <div>
          <Switch>
          <Route
              path={`${process.env.PUBLIC_URL}/area-chart`}
              component={(props) => {
                return (
                  <>
                    <div className="chart-title">AREA CHART</div>
                    <AreaChart />
                  </>
                );
              }}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/line-chart`}
              component={(props) => {
                return (
                  <>
                    <div className="chart-title">LINE CHART</div>
                    <LineChart />
                  </>
                );
              }}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/bar-chart`}
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
              path={`${process.env.PUBLIC_URL}/`}
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
          {/* <LoadingSpinner /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
