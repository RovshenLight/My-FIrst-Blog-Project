import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewBlog from "./NewBlog";
import BlogDetailes from "./BlogDetailes";
import NotFonded from "./NotFonded";

function App() {
  return (
    <div className="content">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create">
            <NewBlog />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetailes />
          </Route>
          <Route path="*">
            <NotFonded />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
