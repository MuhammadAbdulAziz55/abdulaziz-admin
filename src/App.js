import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List.jsx";
import Main from "./layout/Main.js";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import { productInputs, userInputs } from "./formSource.js";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="users">
        <Route index element={<List />} />
        <Route path=":userId" element={<Single />} />
        <Route
          path="new"
          element={<New inputs={userInputs} title="Add new user" />}
        />
      </Route>
      <Route path="products">
        <Route index element={<List />} />
        <Route path=":userId" element={<Single />} />
        <Route
          path="new"
          element={<New inputs={productInputs} title="Add new product" />}
        />
      </Route>
    </Route>
  )
);

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
