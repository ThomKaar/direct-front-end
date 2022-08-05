import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to='/vote'>Vote</Link> |{" "}
          <Link to='/login'>Login</Link>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
