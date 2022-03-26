import Content from "./components/Content";
import OrderSideBar from "./components/OrderSideBar";
import Sidebar from "./components/Sidebar";
import { Wrapper } from "./styles"

function App() {
  return (
    <Wrapper>
    <Sidebar/>
    <OrderSideBar/>
    <Content/>
    </Wrapper>
  );
}

export default App;
