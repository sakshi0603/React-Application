import React from "react";
import'./styles.css';
import { Link } from "react-router-dom";

const PresentCourse = () => {
 
  return (
<>
<form action="#">
      <div className="fourth">
        <div className="studentid field">
            <label for="studentid">Student Id</label><br/>
            <input type="text" name="studentid"/>
        </div> 
        <div className="selected program field">
            <label for="selected program">Selected Program</label><br/>
  
            <select name="selectedprogram">
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Information Technology">Information Technology</option>
              <option value="AIDS">AIDS</option>
              <option value="others">others</option>
            </select>
          </div>
          <div className="seattype field">
            <label for="seattype">Seat Type</label><br/>
  
            <select name="seattype">
              <option value="Cap seat">Cap Level Seat</option>
              <option value="Institute seat">Institute Level Seat</option>
              <option value="Donation seat">Donation Level seat</option>
            </select>
          </div>
          <div className="GR Number field">
            <label for="GR Number">GR Number</label><br/>
            <input type="number" name="GR Number"/>
        </div>
    </div>
        <div className="fourth">
            <div className="Defence status field">
                <label for="Defence status">Defence Status</label><br/>
                <input type="text" name="Defence status"/>
            </div>

            <div className="physicallyhandicapped field">
                    <label for="physicallyhandicapped">Physically Handicapped</label><br/>
                    <input type="text" name="physicallyhandicapped"/>
            </div> 
        </div>
           
        </form>

        <div className="btn">
    <button><Link to="/Basic/ParentDetails" style={styles.link} >Go Back</Link></button>
    <button><Link to ="/Education/PreviousCourse" style={styles.link} >Next</Link></button>
  </div>
  </>
  );

};

export default PresentCourse;

const styles = {
  link:{
      color:'white',
      textDecoration:'none', 
    },
  }