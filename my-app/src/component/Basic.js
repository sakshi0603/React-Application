import React from "react";

import { NavLink, Outlet } from "react-router-dom";


const Basic = () => {


  return (
    <>

      <div style={styles.mainContent}>
        <div style={styles.greeting}>
          <h2>Basic Details</h2>

        </div>
        <hr style={styles.horizontalLine} />

        <ul style={styles.ul}>

          <NavLink to='/Basic/Personal' style={styles.li}>Personal</NavLink >
          <NavLink to='/Basic/Address' style={styles.li}>Address</NavLink >
          <NavLink to='/Basic/ParentDetails' style={styles.li}>Parent Deatils</NavLink>
        </ul>

<hr/>
      </div>

      
      <Outlet />

    </>
  )
}


export default Basic;

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
    color:"black"
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
    height: '45x',
    
  },
  li: {
    textDecoration: 'none',
    fontSize: '25px',
    color: 'black',

  },





};
