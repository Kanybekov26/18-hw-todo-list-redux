import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import { Route, Routes } from "react-router";
import Form from "./componets/Form";
import Header from "./componets/Header";
import TodoForm from "./componets/TodoForm";

function App() {
  return (
    <div>
      <Provider store={store}>
      
      <Routes>
      <Route path="/" element={<Form/>}/>
         <Route path="/header/" element={<Header/>}>
      <Route path="todoForm" element={<TodoForm/>}/>
         </Route>
      
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
