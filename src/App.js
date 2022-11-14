import "./App.css";
import ViewportProvider from "./viewport";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import LastComp from "./components/LastComp";
import Text from "./components/Text";

function App() {
  return (
    <ViewportProvider>
      <Navbar />
      <Text />
      <Table />
      <LastComp />
    </ViewportProvider>
  );
}

export default App;
