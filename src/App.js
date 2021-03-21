import "./App.css";
import { BrowserView, MobileView } from "react-device-detect";
import BrowserSignUp from "./pages/BrowserSignUp";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrowserDashboard from "./pages/BrowserDashboard";
import BrowserLogin from "./pages/BrowserLogin";
import PrivateRoute from "./components/PrivateRoute";
import BrowserForgotPassword from "./pages/BrowserForgotPassword";

function App() {
  return (
    <div className="app">
      <BrowserView>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={BrowserDashboard} />
              <Route path="/signup" component={BrowserSignUp} />
              <Route path="/login" component={BrowserLogin} />
              <Route
                path="/forgot-password"
                component={BrowserForgotPassword}
              />
            </Switch>
          </AuthProvider>
        </Router>
      </BrowserView>
      <MobileView>
        <h1>Hello in Mobile</h1>
      </MobileView>
    </div>
  );
}

export default App;
