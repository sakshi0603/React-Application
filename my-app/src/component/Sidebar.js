import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.optionList}>
        <NavLink style={styles.link} to="/Basic" className="navlink">
          <li style={styles.option}>
          <i class="fas fa-book" style={styles.icon}></i>
            <span style={styles.optionText}>Basic Details</span>
          </li>
        </NavLink>
        <NavLink style={styles.link}  to="/Education" className="navlink">
          <li style={styles.option}>
          <i class="fas fa-school" style={styles.icon}></i>
            <span style={styles.optionText}>Education Details</span>
            </li>
        </NavLink>

        <NavLink  style={styles.link} to="/Upload" className="navlink">
          <li style={styles.option}>
          <i class="fas fa-upload" style={styles.icon}></i>
            <span style={styles.optionText}>Upload Documents</span>
          </li>
        </NavLink>

        <NavLink  style={styles.link} to="/logout" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-sign-out-alt" style={styles.icon}></i>
            <span style={styles.optionText}>Logout</span>
          </li>
        </NavLink>
      </ul>
   <footer>GetFly Technologies</footer>
    </aside>
  );
};

export default Sidebar;

const styles = {
  sidebar: {
    display:'block',
    backgroundColor: "rgb(219,219,219)",
    padding: "10px 30px",
  },
  optionList: {
    listStyleType: "none",
    padding: 0,
  },
  option: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
    padding: "10px 0",
  },
  icon: {
    marginRight: "30px",
    width: "10px",
  },
  optionText: {
    fontSize: "16px",
  },
  footer: {
    marginTop: "auto",
    alignSelf: "flex-end",
  },
  footerText: {
    fontSize: "12px",
    color: "#666",
    alignSelf: "flex-end",
    marginTop: "400px",
  },
  
  link:{
    // color:'white',
    textDecoration:'none', 
  }
}
