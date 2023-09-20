import Sidebar from "@/components/Sidebar";
import './../styles/globals.css'; 

function App({ Component, pageProps }) {
  return (
    <div>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
