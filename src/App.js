import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            {/* Home */}
          </Route>
          <Route path="*">
            {/* 404 */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
