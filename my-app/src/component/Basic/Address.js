import React from "react";
import'./style.css';
import { Link } from "react-router-dom";
const Address = () => {
 
  return (
    <>
    <body style={styles.address}>
    <form action="#">
        <div className="second">
            <div className="flat field">
                <label for="flat">Flat No</label><br/>
                <input type="text" name="flat"/>
              </div>
              <div className="buildingNo field">
                <label for="buildingNo">Building No</label><br/>
                <input type="buildingNo"/>
              </div>
              <div className="buildingName field">
                <label for="buildingName">Building Name</label><br/>
                <input type="buildingName"/>
              </div>
              <div className="area field">br/
                <label for="area">Area Name</label><br/>
                <input type="area"/>
              </div>
              <div className="city field">
                <label for="city">City</label><br/>
                <input type="city"/>
              </div>
        </div>
        <div className="first">
            <div className="states field">
                <label for="states">Select State</label>
                <select name="states ">
                    <option value="">-- Select State --</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                  </select>
            </div>
            <div className="pinCode field">
                <label for="pinCode">Pin Code</label>
                <input type="text" className="pinCode"/>
            </div>
              
        </div>
    </form>
    <div className="btn">
    <button><Link to="/Basic/Personal" style={styles.link}>Go Back</Link></button>
    <button><Link to ='/Basic/ParentDetails' style={styles.link}>Next</Link></button>
    </div>

</body>
</>
  );
};

export default Address;

const styles = {
  address: {
    flex: 1,
    padding: "20px",
    width:'175vh',
  },
  link:{
    color:'white', 
    textDecoration:'none',
  }
}