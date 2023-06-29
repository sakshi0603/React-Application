import React from "react";
import './upload.css';
import { Link } from "react-router-dom";

const Upload = () => {

  return (
    <>
    <div style={styles.mainContent}>
        <div style={styles.greeting}>
          <h2>Upload Documents</h2>

        </div>
        <hr/>
      </div>

      <div className="box">
        <div >
          <p >Profile Photo</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div >
          <p >Signature</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
      </div>
      <hr />
      <div className="box">
        <div >
          <p>SSC Marksheet </p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div >
          <p >HSC Marksheet</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div >
          <p >MHTCET Score Card</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>

        <div >
          <p >JEE Score Card</p><br />
          <input style={styles.input} type="File" name="file" />
        </div>
        <div >
          <p >CAP Allotment</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div >
          <p >FC Center Verification</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
      </div>
      <hr />
      <div className="box">
        <div >
          <p >Adhaar Card</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div>
          <p >Ration Card</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div >
          <p >Bank Passbook</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div >
          <p >Income Certificate</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div >
          <p >Caste Certififcate</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div >
          <p >Caste Validation</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div >
          <p >Domicile Certificate</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
      </div>
      <hr />
      <div className="box">
        <div >
          <p >Fee Receipt</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
        <div >
          <p >College Admission Letter</p><br />
          <input style={styles.input} type="file" name="file" />
        </div>
      </div>

      <div className="btn">
    <button><Link to="/Education/PreviousCourse" style={styles.link} >Go Back</Link></button>
    <button><Link to =' ' style={styles.link} >Next</Link></button>
  </div>


    </>
  );
};


export default Upload;

const styles = {
  mainContent: {
    flex: 1,
    padding: "10px",
    width: '175vh',

  },
  greeting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    

  },
  dt: {
    display: "flex",
    flexDirection: "column",
    margin: "0 5px",

  },
  para: {
    margin: "2px 0",
  },

  ul: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '30px',
  },
  li: {
    textDecoration: 'none',
    fontSize: '25px',

  },
  input:{
    height: '20px',
    width:'85px',
  },
  link:{
    color:'white', 
    textDecoration:'none',
  },


};
