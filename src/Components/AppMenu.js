// import React, {useState,useContext} from 'react'
// import {AppBar,Toolbar, Typography, Button, IconButton, makeStyles, Menu, MenuItem } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import {loginStatus, mnuOptSelect,loginText,createUsr,createfeerg,TotalFeesCo,TreatWiseFeesCo} from './GenContext'
// import TotalCollFee from './TotalCollFee';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// function AppMenu() {
//     const classes = useStyles()
//     const [loginstat,setLoginstat] = useContext(loginStatus)
//     const [mnuOpt, setMnuOpt] = useContext(mnuOptSelect)
//     const [loginTxt, setloginTxt]  = useContext(loginText)
//     const [anchorEl, setAnchorEl] = useState(null)
//     const [anchorE2, setAnchorE2] = useState(null)
//     const [submenu1, setSubmenu1] = useState(null)
//     const [submenu2, setSubmenu2] = useState(null)
//     const [smvalue1, setSmvalue1] = useState(null)
//     const [smvalue2, setSmvalue2] = useState(null)
//     const [crtUser, setcrtUser] = useContext(createUsr)
//     const [crtfreg, setcrtfreg] = useContext(createfeerg)
//     const [treatWifeecols, settreatWifeecols] = useContext(TreatWiseFeesCo)
//     const [totalfescols, settotalfescols]  = useContext(TotalFeesCo)
//     const open = Boolean(anchorEl)
//     const open2 = Boolean(anchorE2)

//    const handleClickMenu = event => {
//        if(!loginstat){
//            alert("Please login")
//        }
//        const {myValue} = event.currentTarget.dataset
//      //  alert("Menu Clicked " + myValue)
//        setMnuOpt(myValue)
 
//    }
//    const handleMenu = (event) => {   
//     setAnchorEl(event.currentTarget) 
// //     setSubmenu1("User management")   
// //     setSubmenu2("Fee Register")
// //     setSmvalue1(4)
// //     setSmvalue2(5)
// }
// const handleMenu2 = (event) => {   
//     setAnchorEl(event.currentTarget) 
// //     setSubmenu1("Total Fee Report")   
// //     setSubmenu2("Treatment Fee Collection")
// //     setSmvalue1(6)
// //     setSmvalue2(7)
//  }
// const handleClose = () => {
//   setAnchorEl(null) 
// }
//     return (
//         <div>
//             <AppBar position="static">
//                 <Toolbar>
//                 <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//                     <MenuIcon />
//                 </IconButton>
//                 <MenuItem onClick={handleClickMenu} data-my-value={1}>
//                   <Typography onClick={handleMenu} variant="h6" className={classes.menuButton}>
//                     Admin
//                   </Typography>
//                 </MenuItem>
//                     {/* <Menu
//                         id="menu-admin"
//                         anchorEl={anchorEl}
//                         anchorOrigin={{
//                             vertical: 'top',
//                             horizontal: 'right',
//                         }}
//                     //    keepMounted
//                         open={open}
//                         onClose={handleClose}
//                         > */}
//                         {/* <MenuItem onClick={handleClickMenu} data-my-value={smvalue1}>{submenu1}</MenuItem>
//                       <MenuItem onClick={handleClickMenu} data-my-value={smvalue2}>{submenu2}</MenuItem>                  */}
//                     {/* </Menu> */}
//                 <MenuItem onClick={handleClickMenu} data-my-value={2}>
//                     <Typography variant="h6" className={classes.menuButton}>
//                         New Patient
//                     </Typography>
//                 </MenuItem>
//                 <MenuItem onClick={handleClickMenu} data-my-value={3}>
//                      <Typography variant="h6" className={classes.menuButton}>
//                     Old Patient
//                 </Typography>
//                 </MenuItem>
//                 <MenuItem onClick={handleClickMenu} data-my-value={4}>
//                     <Typography variant="h6" className={classes.menuButton}>
//                     Reports
//                 </Typography>
//                 </MenuItem>
//                 {/* <Menu
//                         id="menu-admin"
//                         anchorEl={anchorEl}
//                         anchorOrigin={{
//                             vertical: 'top',
//                             horizontal: 'right',
//                         }}
//                     //    keepMounted
//                         open={open2}
//                         onClose={handleClose}
//                         >
//                         <MenuItem onClick={handleClickMenu}  data-my-value={6}>Total Fee Report</MenuItem>
//                       <MenuItem onClick={handleClickMenu} data-my-value={7}>Total Fee Report</MenuItem>                 
//                     </Menu> */}
//                 <Button color="inherit" style={{marginLeft: "auto", marginRight: -12}}>
//                   {loginText}</Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }

// export default AppMenu

// // data-my-value={smvalue1}>{submenu1}</MenuItem>
// // data-my-value={smvalue2}>{submenu2}</MenuItem>




import React, {useContext,useState} from 'react'
import {AppBar,Toolbar, Typography, Button, IconButton, makeStyles, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {loginStatus, loginText, mnuOptSelect,TotalFeesCo,createUsr,createfeerg,TreatWiseFeesCo} from './GenContext'
import { UseForms, Form } from './UseForms'
import AccountCircle from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppMenu() {
    const classes = useStyles()
    const [loginstat,setLoginstat] = useContext(loginStatus)
        const [mnuOpt, setMnuOpt] = useContext(mnuOptSelect)
        const [loginTxt, setloginTxt]  = useContext(loginText)
        const [anchorEl, setAnchorEl] = useState(null)
        const [anchorE2, setAnchorE2] = useState(null)
        const [submenu1, setSubmenu1] = useState(null)
        const [submenu2, setSubmenu2] = useState(null)
        const [smvalue1, setSmvalue1] = useState(null)
        const [smvalue2, setSmvalue2] = useState(null)
        const [crtUser, setcrtUser] = useContext(createUsr)
        const [crtfreg, setcrtfreg] = useContext(createfeerg)
        const [treatWifeecols, settreatWifeecols] = useContext(TreatWiseFeesCo)
        const [totalfescols, settotalfescols]  = useContext(TotalFeesCo)
        const open = Boolean(anchorEl)
        const open2 = Boolean(anchorE2)
  
        const handleClickMenu = event => {
                 if(!loginstat){
                     alert("Please login")
                 }
                 const {myValue} = event.currentTarget.dataset
               //  alert("Menu Clicked " + myValue)
                 setMnuOpt(myValue)
           
             }
             const handleMenu = (event) => {   
              setAnchorEl(event.currentTarget) 
            setSubmenu1("User management")   
             setSubmenu2("Fee Register")
           setSmvalue1(4)
            setSmvalue2(5)  
          }
          const handleMenu2 = (event) => {   
              setAnchorEl(event.currentTarget) 
             setSubmenu1("Total Fee Report")   
             setSubmenu2("Treatment Fee Collection")
             setSmvalue1(6)
            setSmvalue2(7)
           }
          const handleClose = () => {
            setAnchorEl(null) 
          }
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                
                <MenuItem onClick={handleMenu} data-my-value={1} aria-haspopup="true"> 
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
               >
                  <Typography variant="h6" className={classes.menuButton}>
                    Admin
                  </Typography>
                  </IconButton>
                
                </MenuItem>
                <Menu
                        id="menu-admin"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    //    keepMounted
                         open={open}
                        onClose={handleClose}
                        > 
                        <MenuItem onClick={handleClickMenu} data-my-value={smvalue1}>{submenu1}</MenuItem>
                      <MenuItem onClick={handleClickMenu} data-my-value={smvalue2}>{submenu2}</MenuItem>                  
                     </Menu>
                
                <MenuItem onClick={handleClickMenu} data-my-value={2}>
                   
                <Typography variant="h6" className={classes.menuButton}>
                        New Patient   
              {/* <OldPatient/> */}
              </Typography>
                {/* <AccountCircle /> */}
             
                 
                </MenuItem>
                <MenuItem onClick={handleClickMenu} data-my-value={3}>
                     <Typography variant="h6" className={classes.menuButton}>
                    Old Patient
                </Typography>
                </MenuItem>
                {/* <MenuItem onClick={handleClickMenu} data-my-value={4}>
                    <Typography onClick={handleMenu2} variant="h6" className={classes.menuButton}>
                    Reports
                </Typography>
                </MenuItem> */}
                <MenuItem onClick={handleMenu2} aria-haspopup="true"data-my-value={4}> 
                <IconButton
                aria-label=""
                aria-controls="menu-appbar"
                aria-haspopup="true"
               
                color="inherit"
               >
                  <Typography   onClick={handleMenu2}  variant="h6" className={classes.menuButton}>
                    Reports
                  </Typography>
                  </IconButton>
                
                </MenuItem>
                <Menu
                        id="menu-admin"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    //    keepMounted
                        open={open2}
                        onClose={handleClose}
                        >
                        <MenuItem onClick={handleClickMenu} data-my-value={smvalue1}>{submenu1}</MenuItem>
                      <MenuItem onClick={handleClickMenu} data-my-value={smvalue2}>{submenu2}</MenuItem>                 
                    </Menu>
              
              
                    <MenuItem onClick={handleClickMenu} data-my-value={8}  style={{marginLeft: "auto", marginRight:-12}} >
                     <Typography variant="h6" className={classes.menuButton}>
                     <Button color="inherit" style={{marginLeft: "auto", marginRight:-12}}>{loginTxt}</Button>
                </Typography>
                </MenuItem>


                <MenuItem onClick={handleClickMenu} data-my-value={9} style={{ marginRight:-8}}>
                     <Typography variant="h7" className={classes.menuButton}>
                    Map
                </Typography>
                </MenuItem>
                {/* <Button color="inherit" style={{marginLeft: "auto", marginRight:-12}}>{loginTxt}</Button> */}
              
              {/* <div> */}
           
              
              {/* <OldPatient/> */}
              
                {/* <AccountCircle /> */}
                
              {/*  
             
              <Button color="inherit" style={{marginLeft: "auto",marginRight:-12}}></Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>

                 */}
              {/* </Menu> */}
            
            {/* </div> */}
          
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AppMenu

