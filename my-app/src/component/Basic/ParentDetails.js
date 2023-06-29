import React from "react";
import'./style.css';
import { Link } from "react-router-dom";
const ParentDetails = () => {
 
  return (
<body style={styles.Parent}>
    <form action="#">
        <div className="first">
            <div className="fullName field">
              <lable for="fullName">Father Full Name</lable><br/>
              <input type="text" name="fullName"/>
            </div>
    
            <div className="cont field">
              <label for="cont">Father Contact No</label><br/>
              <input type="text" name="cont"/>
            </div>
            <div className="email field">
              <label for="email">Father Email Id</label><br/>
              <input type="text" name="email"/>
            </div>
            <div className="occ field">
                <label for="occ">Father Occupation</label><br/>
                <input type="text" name="occ"/>
              </div>
          </div>
          <div className="first">
            <div className="des field">
              <label for="fullName">Designation</label><br/>
              <input type="text" name="des"/>
            </div>
    
            <div className="padd field">
              <label for="padd">Professional Address</label><br/>
              <input type="text" name="padd"/>
            </div>
            <div className="income field">
              <label for="income">Annual Income</label><br/>
              <input type="text" name="income"/>
            </div>
            
          </div>
          <div className="first">
            <div className="fullName field">
              <label for="fullName">Mother Full Name</label><br/>
              <input type="text" name="fullName"/>
            </div>
    
            <div className="cont field">
              <label for="cont">Mother Contact No</label><br/>
              <input type="text" name="cont"/>
            </div>
            <div className="email field">
              <label for="email">Mother Email Id</label><br/>
              <input type="text" name="email"/>
            </div>
            <div className="occ field">
                <label for="occ">Mother Occupation</label><br/>
                <input type="text" name="occ"/>
              </div>
          </div>
          <div className="first">
            <div className="des field">
              <label for="fullName">Designation</label><br/>
              <input type="text" name="des"/>
            </div>
    
            <div className="padd field">
              <label for="padd">Professional Address</label><br/>
              <input type="text" name="padd"/>
            </div>
            <div className="income field">
              <label for="income">Annual Income</label><br/>
              <input type="text" name="income"/>
            </div>
            
          </div>
    </form>
    <div className="btn">
    <button><Link to="/Basic/Address" style={styles.link} >Go Back</Link></button>
    <button><Link to="/Education/PresentCourse" style={styles.link} >Next</Link></button>
    </div>
    

</body>
  );
};

export default ParentDetails;

const styles = {
  Parent: {
    flex: 1,
    padding: "10px",
    width:'175vh',
  },
  link:{
    color:'white', 
    textDecoration:'none',
  }
}