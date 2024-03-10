import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import Popular from "./Popular";
import Story from "./Story";
ToastContainer;

function App() {
  return (
    <div className="header">
      <Navbar />
      <Popular />
      <Story />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
