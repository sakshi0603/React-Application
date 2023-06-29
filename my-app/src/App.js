import './App.css';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Basic from './component/Basic';
// import Login from './component/Login';
// import SignUp from './component/SignUp';
import Personal from './component/Basic/Personal';
import ParentDetails from './component/Basic/ParentDetails'
import Address from './component/Basic/Address'
import Education from './component/Education'
import PresentCourse from './component/Education/PresentCourse'
import PreviousCourse from './component/Education/PreviousCourse'
import Upload from './component/Upload'

function App() {
  return (
    <>
    <BrowserRouter>
    
    <div className="container" >
    <Navbar />
    <div className="Content" style={style.main}>
       <Sidebar/>
       <div>
       <Routes>
       <Route  path="/Basic" element={<Basic/>} >
       <Route  path="/Basic/Personal" element={<Personal/>} />
       <Route  path="/Basic/Address" element={<Address/>} />
       <Route  path="/Basic/ParentDetails" element={<ParentDetails/>} />
      </Route>
       <Route  path="/Education" element={<Education/>} >
       <Route  path="/Education/PresentCourse" element={<PresentCourse/>} />
       <Route  path="/Education/PreviousCourse" element={<PreviousCourse/>} />
        </Route>
       <Route  path="/Upload" element={<Upload/>} />
       {/* <Route  path="/Login" element={<Login/>} /> */}
       </Routes>
       </div>
      
       </div>
    
    </div>
    
    </BrowserRouter>
    </>
  );
}

const style ={
  main:{
    display: 'flex',
  },


}

export default App;
