import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const Home = () => <h1>Welcome to my Blog</h1>
  return ( 
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      
    </Routes>
    
    </BrowserRouter>




    </>
   );
}
 
export default App;