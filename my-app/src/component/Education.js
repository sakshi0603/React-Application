import React from "react";
import { NavLink ,Outlet} from "react-router-dom";

const Education = () => {


  return (
    <>
      <div style={styles.mainContent}>
        <div style={styles.greeting}>
          <h2>Education Detials</h2>

        </div>
        <hr style={styles.horizontalLine} />

        <ul style={styles.ul}>

          <NavLink to='/Education/PresentCourse' style={styles.li}>Present Course Details</NavLink >
          <NavLink to='/Education/PreviousCourse' style={styles.li}>Previous Course Details</NavLink >

        </ul>
<hr/>
      </div>
      <Outlet />
    </>
  )
}


export default Education;

const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
    width: '175vh',

  },
  greeting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  dt: {
    display: "flex",
    flexDirection: "column",
    margin: "0 5px",

  },
  para: {
    margin: "2px 0",
  },
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "20px 0",
  },
  ul: {
    display: 'flex',
    justifyContent: 'space-around',
    background: 'rgb(219,219,219)',
    height: '30px',
  },
  li: {
    textDecoration: 'none',
    fontSize: '25px',
    color: 'black',


  },

  NavLink: {
    color: 'white',
    textDecoration: 'none',
  }



};
