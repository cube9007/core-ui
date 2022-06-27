import { Link } from "react-router-dom";
import { Box, Divider } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

function HOME () {
    return (
      <>
        <div className="big-div">
          <h1 > VCS Layout </h1>
        </div>
        <Box className="home-box">
          <h2> 📚  Layout </h2>
          <ul>
            <li>
            <Link to="/page/layout/LoginComponent" className="home-a"> 🔗 Login Component </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/layout/GNB_Left" className="home-a"> 🔗 GNB Left </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
            <Link to="/page/layout/Top" className="home-a"> 🔗 Top </Link> <ArrowForward className="box-arrow" />
            </li>
            
          </ul>

          <Divider style={{ margin: '50px 0 50px 0' }}/>

          <h2> 📒 Page </h2>
          <ul>
            <li >
            <Link to="/page/page/LoginPage" className="home-a"> 🔗 Login Page </Link> <ArrowForward className="box-arrow" />
            </li>
            <li >
            <Link to="/page/page/EquipmentData" className="home-a"> 🔗 Equipment Data </Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
        </Box>
      </>
    );
  };
  
  export default HOME;