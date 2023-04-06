import Routes from "./routes";
import { useRoutes } from "react-router-dom";
function App() {
  const element = useRoutes(Routes);
  return <div>{element}</div>;
}

export default App;
