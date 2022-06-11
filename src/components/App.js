import Books from "./components/Books";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import { Provider } from "react-redux";
import store from "./redux/configurationStore";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={ <Categories/>} />
      </Routes>
      </div>
    </Provider>
  );
}

export default App;
