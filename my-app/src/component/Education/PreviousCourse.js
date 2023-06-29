import React from "react";
import'./styles.css';
import { Link } from "react-router-dom";

const PreviousCourse = () => {
 
  return (

    <>
    
    <form action="#">
        <div className="first">
            <div className="year field">
                <label for="pYear">SSC Passing year</label><br/>
                <input type="date" name="pYear"/>
            </div>
            <div className="seat field">
                <label for="sNo">SSC Seat No</label><br/>
                <input type="text" name="sNo"/>
            </div>
            <div className="board field">
                <label for="bName">Name of the Board</label><br/>
                <input type="text" name="bName"/>
            </div>
            <div className="marks field">
                <label for="marks">SSC Marks</label><br/>
                <input type="number" name="marks"/>
            </div>
            <div className="percent field">
                <label for="percent">SSC Pecentage/CGPA</label><br/>
                <input type="number" min="0" max="100" name="percent"/>
            </div>
        </div>
        
            <div className="first">
                <div className="year field">
                    <label for="pYear">HSC Passing year</label><br/>
                    <input type="date" name="pYear"/>
                </div>
                <div className="seat field">
                    <label for="sNo">HSC Seat No</label><br/>
                    <input type="text" name="sNo"/>
                </div>
                <div className="board field">
                    <label for="bName">Name of the Board</label><br/>
                    <input type="text" name="bName"/>
                </div>
                <div className="marks field">
                    <label for="marks">HSC Marks</label><br/>
                    <input type="number" name="marks"/>
                </div>
                <div className="percent field">
                    <label for="percent">HSC Pecentage/CGPA</label><br/>
                    <input type="number" min="0" max="100" name="percent"/>
                </div>
            </div>
            
                <div className="second">
                    <div className="pMarks field">
                        <label for="pMarks">HSC Physics Marks</label><br/>
                        <input type="number" min="0" max="100" name="pMarks"/>
                    </div>
                    <div className="cMarks field">
                        <label for="cMarks">HSC Chemistry Marks</label><br/>
                        <input type="number" min="0" max="100" name="cmarks"/>
                    </div>
                    <div className="mMarks field">
                        <label for="mMarks">Name of the Board</label><br/>
                        <input type="number" min="0" max="100" name="mMarks"/>
                    </div>
                    <div className="vmarks field">
                        <label for="vmarks">HSC Vocational Marks</label><br/>
                        <input type="number" min="0" max="100" name="vmarks"/>
                    </div>
                </div>
                <hr/>
                <div className="second">
                    <div className="mRoll field">
                        <label for="mRoll">MHTCET Roll No</label><br/>
                        <input type="text" name="mRoll"/>
                    </div>
                    <div className="mApp field">
                        <label for="mApp">MHTCET Application No</label><br/>
                        <input type="text" name="mApp"/>
                    </div>
                    <div className="jRoll field">
                        <label for="jRoll">JEE Application</label><br/>
                        <input type="text" name="jRoll"/>
                    </div>
                    <div className="jPer field">
                        <label for="jPer">JEE Percentile Score</label><br/>
                        <input type="text" name="jPer"/>
                    </div>
                </div>

                <hr/>
                <div className="third">
                    <div className="eName field">
                        <label for="eName">Entrance Exam Name</label><br/>
                        <input type="text" name="eName"/>
                    </div>
                    <div className="eScore field">
                        <label for="eScore">Entrance Exam Score</label><br/>
                        <input type="text" name="eScore"/>
                    </div>
                </div>
    </form>

    <div className="btn">
    <button><Link to="/Education/PresentCourse" style={styles.link} >Go Back</Link></button>
    <button><Link to ='/Upload' style={styles.link} >Next</Link></button>
  </div>

  
    </>


  );

};

export default PreviousCourse;

const styles = {
  
    link:{
      color:'white',
      textDecoration:'none', 
    }
  }