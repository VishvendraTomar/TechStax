
import { ReactFlowProvider } from "reactflow";
import DnDFlow from "./Components/flow"
import MainRoutes from "./Routes/MainRoutes";

import { BrowserRouter } from "react-router-dom";
export default () => (
<BrowserRouter>

  <ReactFlowProvider>
    <MainRoutes/>
  </ReactFlowProvider>
</BrowserRouter>
);

