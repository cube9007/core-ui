import { Box, Divider, Button } from "@mui/material";
import { FirstPage, 
        Apps,
        List,
        ShowChart,
        Power,
        Person,
        Restore,
        LinearScale,
        Assignment,
        Contacts,
        InsertDriveFile,
        ViewCompact,
        DonutSmall,
        CallMissed,
        Memory,
        ViewCarousel,
        Info,
        } from "@mui/icons-material";

function GNB_Left () {
    return (
      <>
        <div className="flex">
          <input type='checkbox' id="ra" className="menuclose"/>
          <div className="gnbLeft">
            <Box className="flex align-center justify-space logo-box">
              <p className="flex logo"> <p className="primary-font">e</p> VCS</p>
              <Button className="fold-button" >
                <label for='ra' className="justify-center align-center">
                  <FirstPage />
                </label>
              </Button>
            </Box>
            <Box className="column gnb-menu">
              <Button className="menu-button">
                <Apps className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Dashboard </p>
              </Button>
              <Button className="menu-button">
                <List className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Equipment Data </p>
              </Button>
              <Button className="menu-button">
                <ShowChart className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Bulk Data </p>
              </Button>
              <Button className="menu-button">
                <Power className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Load Data </p>
              </Button>
              <Button className="menu-button">
                <Person className="menu-button-icons"/> 
                <p className="font-gnb-menu"> User Defined Data </p>
              </Button>
              <Button className="menu-button">
                <Restore className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Revision History </p>
              </Button>
              <Button className="menu-button">
                <LinearScale className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Data Change Log </p>
              </Button>

              <Divider className="gnb-divider"/>
              
              <Button className="menu-button">
                <Assignment className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Clarification </p>
              </Button>
              <Button className="menu-button">
                <Contacts className="menu-button-icons"/> 
                <p className="font-gnb-menu"> MOMs </p>
              </Button>
              <Button className="menu-button">
                <InsertDriveFile className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Document </p>
              </Button>

              <Divider className="gnb-divider"/>

              <Button className="menu-button">
                <ViewCompact className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Item Template </p>
              </Button>
              <Button className="menu-button">
                <DonutSmall className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Item Assign </p>
              </Button>
              <Button className="menu-button">
                <CallMissed className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Load Data Assign </p>
              </Button>

              <Divider className="gnb-divider"/>

              <Button className="menu-button">
                <Memory className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Assigned Project </p>
              </Button>
              <Button className="menu-button">
                <ViewCarousel className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Template </p>
              </Button>
              <Button className="menu-button">
                <Info className="menu-button-icons"/> 
                <p className="font-gnb-menu"> Project Info </p>
              </Button>
              
            </Box>
          </div>
          <div className="gnbLeft-close">
            <Box className="flex align-center justify-center logo-box">
              <Button className="fold-button" >
                <label for='ra' className="justify-center align-center">
                  <FirstPage style={{ transform: 'rotate(180deg)' }}/>
                </label>
              </Button>
            </Box>
            <Box className="column align-center gnb-menu-close">
              <Button className="menu-button-close">
                <Apps /> 
              </Button>
              <Button className="menu-button-close">
                <List /> 
              </Button>
              <Button className="menu-button-close">
                <ShowChart /> 
              </Button>
              <Button className="menu-button-close">
                <Power /> 
              </Button>
              <Button className="menu-button-close">
                <Person /> 
              </Button>
              <Button className="menu-button-close">
                <Restore /> 
              </Button>
              <Button className="menu-button-close">
                <LinearScale /> 
              </Button>

              <Divider  className="gnb-divider-close"/>
              
              <Button className="menu-button-close">
                <Assignment /> 
              </Button>
              <Button className="menu-button-close">
                <Contacts /> 
              </Button>
              <Button className="menu-button-close">
                <InsertDriveFile /> 
              </Button>

              <Divider className="gnb-divider-close"/>

              <Button className="menu-button-close">
                <ViewCompact /> 
              </Button>
              <Button className="menu-button-close">
                <DonutSmall /> 
              </Button>
              <Button className="menu-button-close">
                <CallMissed /> 
              </Button>

              <Divider className="gnb-divider-close"/>

              <Button className="menu-button-close">
                <Memory /> 
              </Button>
              <Button className="menu-button-close">
                <ViewCarousel /> 
              </Button>
              <Button className="menu-button-close">
                <Info /> 
              </Button>
              
            </Box>
          </div>
        </div>
      </>
    );
  };
  
  export default GNB_Left;