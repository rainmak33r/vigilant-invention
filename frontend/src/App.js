import './App.css';
import {Route, Switch} from 'react-router-dom';
import {APP_ROUTES} from "./routes/app.routes";

function App() {
  return (
      <Switch>
        {APP_ROUTES.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
  );
}

export default App;
