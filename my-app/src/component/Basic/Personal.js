import React from "react";
import'./style.css';
import { Link } from "react-router-dom";

const Personal = () => {
 
  return (

    <div >
    <form action="#">
      <div className="first">
        <div className="fullName field">
          <label for="fullName">Full Name</label><br/>
          <input type="text" name="fullName"/>
        </div>

        <div className="dob field">
          <label for="dob">Date of Birth</label><br/>
          <input type="date" name="dob"/>
        </div>
        <div className="pob field">
          <label for="pob">Place of Birth</label><br/>
          <input type="text" name="pob"/>
        </div>
        <div className="gender field">
          <label for="gender">Gender</label><br/>

          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
      <div className="second">
        <div className="nation field">
          <label for="nation">Nationality</label><br/>
          <input type="text" name="nation"/>
        </div>
        <div className="religion field">
          <label for="religion">Religion</label><br/>
          <input type="religion"/>
        </div>
        <div className="caste field">
          <label for="caste">Caste</label><br/>
          <input type="cast"/>
        </div>
        <div className="subCast field">
          <label for="subCaste">Sub Caste</label><br/>
          <input type="subCaste"/>
        </div>
        <div className="minority field">
          <label for="minority">Minority</label><br/>
          <input type="minority"/>
        </div>
      </div>
      <div className="third">
        <div className="phoneNo field">
          <label for="phoneNo">Phone No</label><br/>
          <input type="text" name="phoneNo"/>
        </div>
        <div className="landNo field">
          <label for="landNo">Landline No</label><br/>
          <input type="text" name="landNo"/>
        </div>
        <div className="add1 field">
          <label for="add1">Address Line 1</label><br/>
          <input type="text" name="add1"/>
        </div>
        <div className="add2 field">
          <label for="add2">Address Line 2</label><br/>
          <input type="text" name="add2"/>
        </div>
      </div>
      <div className="fourth">
        <div className="sEmail field">
          <label for="sEmail">Student Email Id</label><br/>
          <input type="text" name="sEmail"/>
        </div>
        <div className="pNo field">
          <label for="pNo">Parent/Guardian Mobile No</label><br/>
          <input type="text" name="pNo"/>
        </div>
        <div className="pEmail field">
          <label for="pEmail">Parent/Guardian Email</label><br/>
          <input type="text" name="pEmail"/>
        </div>
        <div className="martial field">
          <label for="martial">Gender</label><br/>
          <select name="martial">
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>
      </div>
      <div className="fifth">
        <div className="bankAccNo field">
          <label for="bankAccNo">Bank Account No</label><br/>
          <input type="text" name="bankAccNo"/>
        </div>
        <div className="bankName field">
          <label for="bankName">Bank Name</label><br/>
          <input type="text" name="bankName"/>
        </div>
        <div className="aadharNo field">
          <label for="aadharNo">Aadhar No</label><br/>
          <input type="text" name="aadharNo"/>
        </div>
        <div className="lastcol field">
          <label for="lastcol">Last College Attended</label><br/>
          <input type="text" name="lastcol"/>
        </div>
      </div>
    </form>
    <div className="btn">
    <button><Link to="/Basic/Personal" style={styles.link} >Go Back</Link></button>
    <button><Link to ='/Basic/Address' style={styles.link} >Next</Link></button>
  </div>
  

</div>
  );

};

export default Personal;

const styles = {
  
  link:{
    color:'white',
    textDecoration:'none', 
  }
}