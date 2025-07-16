import NewsForm from "./components/NewsForm";
import SamplePage from "./pages/SamplePage";
import NewsLayout from "./components/NewsLayout";

function App() {
  return (
    <>
        <NewsLayout />
        <NewsForm /> 
         {/* we render the NewsForm here to show on are browser page  */}
    </>
  );
}

export default App;
